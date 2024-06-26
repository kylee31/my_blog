import { allLearneds } from "@/.contentlayer/generated";
import Layout from "@/components/Layout";
import Link from "next/link";
import "../../styles/pages.css";

const ALL_LEARNEDS = allLearneds.sort((a, b) => b.date.localeCompare(a.date));

export default function Learned() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="mb-10 cate-title">
          <span className="text-2xl font-black mr-3 text-gray-700">
            Learned
          </span>
          <span className="text-xs font-bold text-gray-500">개념 정리</span>
        </div>
        {ALL_LEARNEDS.map((learned, idx) => {
          const { slug, title, date, description } = learned;
          return (
            <Link
              key={title + idx}
              href={`/learned/${slug}`}
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
