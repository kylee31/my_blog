import Link from "next/link";
import "../styles/components.css";
import { myProjectType } from "@/types/postType";
import { allProjects } from "@/.contentlayer/generated";
import Image from "next/image";

export default function Posts({ project }: { project: myProjectType }) {
  const { title, slug, link } = project;
  const posting = allProjects.filter((doc) => doc.cate.includes(slug)).length;
  return (
    <div className="flex justify-center items-center relative h-36 border-2 rounded-lg border-solid border-gray-400">
      <Link
        key={title}
        href={`projects/${slug}`}
        className="flex flex-col justify-center items-center"
      >
        <div className="font-black">{title}</div>
        <div className="text-xs mt-4">{posting}개의 포스팅</div>
      </Link>
      <a
        className="absolute right-2 top-2"
        href={link}
        target="_blank"
        title={`${title} 웹 사이트 보러가기`}
      >
        <Image src="/web.png" alt="" width={20} height={20} />
      </a>
    </div>
  );
}
