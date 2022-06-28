const formatScore = (score) => Math.round(score * 100);
const emojiScore = (score) => (score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴');
const formatPath = (testedUrl) => `[${new URL(testedUrl).pathname}](${testedUrl})`;
const formatReport = (reportUrl) => `[📒](${reportUrl})`;

const scoreRow = (label, score, testedUrl, reportUrl) =>
  `| ${formatPath(testedUrl)} | ${emojiScore(score)} ${label} | ${formatScore(score)} | ${formatReport(reportUrl)} |`;

function makeCommentForUrl(summary, testedUrl, reportUrl) {
  return `${scoreRow('Performance', summary.performance, testedUrl, reportUrl)}
${scoreRow('Accessibility', summary.accessibility, testedUrl, reportUrl)}
${scoreRow('Best practices', summary['best-practices'], testedUrl, reportUrl)}
${scoreRow('SEO', summary.seo, testedUrl, reportUrl)}
${scoreRow('PWA', summary.pwa, testedUrl, reportUrl)}
`;
}

function makeComment(lighthouseOutputs) {
  const { manifest, links } = lighthouseOutputs;

  let comment = `## ⚡️🏠 Lighthouse report

| URL | Category | Score | Report |
| --- | -------- | ----- | ------ |
`;

  for (const [testedUrl, reportUrl] of Object.entries(links)) {
    const manifestEntry = manifest.find((entry) => entry.url === testedUrl && entry.isRepresentativeRun);
    comment = `${comment}${makeCommentForUrl(manifestEntry.summary, testedUrl, reportUrl)}`;
  }

  return comment;
}

module.exports = ({ lighthouseOutputs }) => {
  return makeComment(lighthouseOutputs);
};
