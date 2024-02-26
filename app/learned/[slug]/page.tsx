import { notFound } from "next/navigation";
import { allLearneds } from "contentlayer/generated";
import Layout from "@/libs/Layout";
import { Props } from "@/types/postType";
import { Mdx } from "@/components/Mdx";

export default async function DocPage({ params }: Props) {
  const post = await getDocFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className="w-full mt-3">
        <div className="mb-10">
          <h1 className="text-blue-400 font-black text-3xl inline-block mr-4">
            {post.title}
          </h1>
          <time className="text-gray-500 text-sm mt-2 ml-auto">
            {post.date}
          </time>
        </div>
        <Mdx code={post.body.code} />
      </div>
    </Layout>
  );
}

async function getDocFromParams({ params }: Props) {
  const doc = allLearneds.find((doc) => doc.slug === params.slug);

  return doc ?? null;
}

export async function generateStaticParams() {
  return allLearneds.map((doc) => ({
    slug: doc.slug,
  }));
}

// export async function generateMetadata({ params }: Props) {
//   const doc = await getDocFromParams({ params });

//   if (!doc) {
//     return {};
//   }

//   return {
//     title: doc.title,
//     description: doc.description,
//     path: `/learned/${doc.slug}`,
//   };
// }
