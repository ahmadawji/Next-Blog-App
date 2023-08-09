/* const getData = async () => {
  const post = await getDataFromCMS(slug);
  return post;
}; */

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  console.log(slug);
  // const post = await getData(slug);
  return <div>Post {`${slug}`}</div>;
}
