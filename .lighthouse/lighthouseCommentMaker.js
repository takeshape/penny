const formatScore = (score) => Math.round(score * 100);
const emojiScore = (score) => (score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴');
const formatPath = (testedUrl) => `[Path: ${new URL(testedUrl).pathname}](${testedUrl})`;
const formatReport = (reportUrl) => `[Report](${reportUrl})`;

const scoreRow = (label, score) => `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;
const headerRow = (testedUrl, reportUrl) => `| ${formatPath(testedUrl)} | ${formatReport(reportUrl)} |`;

function makeCommentForUrl(summary, testedUrl, reportUrl) {
  return `${headerRow(testedUrl, reportUrl)}
${scoreRow('Performance', summary.performance)}
${scoreRow('Accessibility', summary.accessibility)}
${scoreRow('Best practices', summary['best-practices'])}
${scoreRow('SEO', summary.seo)}
${scoreRow('PWA', summary.pwa)}
`;
}

function makeComment(profile, lighthouseOutputs) {
  const { manifest, links } = lighthouseOutputs;

  let comment = `## Lighthouse Report: ${profile}

| Category | Score |
| -------- | ----- |
`;

  for (const [testedUrl, reportUrl] of Object.entries(links)) {
    const manifestEntry = manifest.find((entry) => entry.url === testedUrl && entry.isRepresentativeRun);
    comment = `${comment}${makeCommentForUrl(manifestEntry.summary, testedUrl, reportUrl)}`;
  }

  return comment;
}

module.exports = ({ profile, lighthouseOutputs }) => {
  return makeComment(profile, lighthouseOutputs);
};
