import { notFound } from "next/navigation";
import { allLearneds } from "contentlayer/generated";
import Layout from "@/components/Layout";
import { Props } from "@/types/postType";
import { Mdx } from "@/components/Mdx";
import Link from "next/link";

export default function DocPage({ params }: Props) {
  const post = allLearneds.find((doc) => doc.slug === params.slug);

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
          <Link href="/learned">◀</Link>
        </div>
        <Mdx code={post.body.code} />
      </div>
    </Layout>
  );
}
