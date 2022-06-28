export default function DebugPage(props) {
  return props.time;
}

export function getStaticProps() {
  return {
    props: { time: new Date().toISOString() },
    revalidate: 5
  };
}
