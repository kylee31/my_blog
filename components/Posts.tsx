import Link from "next/link";
import "../styles/components.css";
import { myProjectType } from "@/types/postType";

export default function Posts({ project }: { project: myProjectType }) {
  const { title, slug } = project;
  return (
    <Link
      key={title}
      href={`projects/${slug}`}
      className="flex flex-col justify-center items-center h-36 border-2 rounded-lg border-solid border-gray-500"
    >
      {title}
    </Link>
  );
}
