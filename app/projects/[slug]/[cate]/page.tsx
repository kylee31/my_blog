import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import Layout from "@/components/Layout";
import { cateProps } from "@/types/postType";
import { Mdx } from "@/components/Mdx";

export default async function DocPage({ params }: cateProps) {
  const post = await allProjects.find((doc) => doc.slug === params.cate);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className="w-full mt-3 px-8">
        <div className="mb-10 flex justify-between">
          <h1 className="text-black font-black text-3xl inline-block mr-4">
            {post.title}
          </h1>
          {/* <Link href={`/projects/${params.slug}`}>◀</Link> */}
        </div>
        <Mdx code={post.body.code} />
      </div>
    </Layout>
  );
}
