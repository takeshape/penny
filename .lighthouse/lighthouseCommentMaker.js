const formatScore = (score) => Math.round(score * 100);
const emojiScore = (score) => (score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴');
const scoreRow = (label, score) => `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;

function makeCommentLine(testedUrl, reportUrl, summary) {
  return `
---
[Report](${reportUrl}) for [${testedUrl}](${testedUrl})

| Category | Score |
| -------- | ----- |
${scoreRow('Performance', summary.performance)}
${scoreRow('Accessibility', summary.accessibility)}
${scoreRow('Best practices', summary['best-practices'])}
${scoreRow('SEO', summary.seo)}
${scoreRow('PWA', summary.pwa)}
---
`;
}

function makeComment(lighthouseOutputs) {
  const { manifest, links } = lighthouseOutputs;

  let comment = `## ⚡️🏠 Lighthouse report`;

  for (const [testedUrl, reportUrl] of Object.entries(links)) {
    const summary = manifest.find((entry) => entry.url === testedUrl && entry.isRepresentativeRun);
    comment = `${comment}${makeCommentLine(testedUrl, reportUrl, summary)}`;
  }

  return comment;
}

module.exports = ({ lighthouseOutputs }) => {
  return makeComment(lighthouseOutputs);
};
