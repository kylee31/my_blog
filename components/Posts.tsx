import { myBlog } from "@/data/posts";
import Link from "next/link";
import "../styles/components.css";

export default function Posts() {
  return (
    <div className="w-full post-grid">
      {/*grid로 반응형 만들기*/}
      {myBlog.map((items) => {
        const { title, link } = items;
        return (
          <Link
            key={title}
            href={link}
            className="flex flex-col justify-center items-center h-56 border-2 rounded-lg border-solid border-gray-500"
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
}
