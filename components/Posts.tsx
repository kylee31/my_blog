import Link from "next/link";
import "../styles/components.css";
import { myProjectType } from "@/types/postType";
import { allProjects } from "@/.contentlayer/generated";

export default function Posts({ project }: { project: myProjectType }) {
  const { title, slug } = project;
  const posting = allProjects.filter((doc) => doc.cate.includes(slug)).length;
  return (
    <Link
      key={title}
      href={`projects/${slug}`}
      className="flex flex-col justify-center items-center h-36 border-2 rounded-lg border-solid border-gray-500"
    >
      <div className="font-black">{title}</div>
      <div className="text-xs mt-4">{posting}개의 포스팅</div>
    </Link>
  );
}
