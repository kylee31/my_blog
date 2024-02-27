import { allProjects } from "@/.contentlayer/generated";
import Layout from "@/components/Layout";
import { myProject } from "@/data/posts";
import { Props } from "@/types/postType";
import Link from "next/link";

export default function Project({ params }: Props) {
  const info = myProject.find((doc) => doc.slug === params.slug);
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="mb-10">
          <span className="text-2xl font-black mr-3 text-gray-700">
            Projects/ {info?.title}
          </span>
          <span className="text-xs font-bold text-gray-500">{info?.desc}</span>
        </div>
        {allProjects
          .filter((doc) => doc.cate.includes(params.slug))
          .map((project, idx) => {
            const { slug, title, date, description, cate } = project;
            return (
              <Link
                key={title + idx}
                href={`/projects/${params.slug}/${slug}`}
                className="pb-2 mb-2 border-b-2 border-solid border-gray"
              >
                <span className="flex justify-between">
                  <span className="text-black font-extrabold text-xl mb-3">
                    {title}
                  </span>
                  <span className="text-sm">{date}</span>
                </span>
                <div>{description}</div>
              </Link>
            );
          })}
      </div>
    </Layout>
  );
}
