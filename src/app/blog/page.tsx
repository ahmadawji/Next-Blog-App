export async function getStaticParams() {
  return [{ slug: "learn-to-code" }, { slug: "angular-vs-react" }];
}

export default function Blog() {
  return <div>Blog</div>;
}
