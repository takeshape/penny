const formatScore = (score) => Math.round(score * 100);
const emojiScore = (score) => (score >= 0.9 ? '🟢' : score >= 0.5 ? '🟠' : '🔴');
const scoreRow = (label, score) => `| ${emojiScore(score)} ${label} | ${formatScore(score)} |`;

function makeComment(lighthouseOutputs) {
  const { manifest, links } = lighthouseOutputs;
  const { summary } = manifest.pop();
  const [[testedUrl, reportUrl]] = Object.entries(links);

  const comment = `## ⚡️🏠 Lighthouse report

We ran Lighthouse against the changes and produced this [report](${reportUrl}). Here's the summary:

| Category | Score |
| -------- | ----- |
${scoreRow('Performance', summary.performance)}
${scoreRow('Accessibility', summary.accessibility)}
${scoreRow('Best practices', summary['best-practices'])}
${scoreRow('SEO', summary.seo)}
${scoreRow('PWA', summary.pwa)}

*Lighthouse ran against [${testedUrl}](${testedUrl})*
`;

  return comment;
}

module.exports = ({ lighthouseOutputs }) => {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(lighthouseOutputs, null, 2));
  return makeComment(lighthouseOutputs);
};
