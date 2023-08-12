import { delay } from "@/lib/delay";
/* const getData = async () => {
  const post = await getDataFromCMS(slug);
  return post;
}; */

const getData = async (slug: string) => {
  const delayResult = await delay(3000);
  console.log(delayResult);
  return { slug };
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getData(slug);
  throw new Error("oops");

  // const post = await getData(slug);
  return <div>Post {`${post.slug}`}</div>;
}
