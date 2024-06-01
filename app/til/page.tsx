import Layout from "@/components/Layout";
import "../../styles/pages.css";
import Link from "next/link";
import { allTils } from "@/.contentlayer/generated";

const ALL_TILS = allTils.sort((a, b) => b.date.localeCompare(a.date));

export default function Til() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="mb-10 cate-title">
          <span className="text-2xl font-black mr-3 text-gray-700">TIL</span>
          <span className="text-xs font-bold text-gray-500">
            Today I Learned
          </span>
        </div>
        {ALL_TILS.map((til, idx) => {
          const { slug, title, date, description } = til;
          return (
            <Link
              key={title + idx}
              href={`/til/${slug}`}
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
