import { notFound } from "next/navigation";
import { allTils } from "contentlayer/generated";
import Layout from "@/components/Layout";
import { Props } from "@/types/postType";
import { Mdx } from "@/components/Mdx";
import Link from "next/link";

export default function DocPage({ params }: Props) {
  const post = allTils.find((doc) => doc.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <div className="w-full mt-3 px-8">
        <div className="mb-10 flex justify-between">
          <h1 className="text-black font-black text-3xl inline-block mr-4">
            {post.title}
            <span className="ml-1 text-sm text-gray-500">({post.date})</span>
          </h1>
          <Link href="/til">◀</Link>
        </div>
        <Mdx code={post.body.code} />
      </div>
    </Layout>
  );
}
