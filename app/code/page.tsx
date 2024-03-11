import Layout from "@/components/Layout";
import "../../styles/pages.css";
import { allCodes } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Code() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="mb-10 cate-title">
          <span className="text-2xl font-black mr-3 text-gray-700">Code</span>
          <span className="text-xs font-bold text-gray-500">
            알고리즘 및 코드 관련
          </span>
        </div>
        {allCodes.map((code, idx) => {
          const { slug, title, description } = code;
          return (
            <Link
              key={title + idx}
              href={`/code/${slug}`}
              className="pb-2 mb-2 border-b-2 border-solid border-gray"
            >
              <span className="flex justify-between">
                <span className="text-black font-extrabold text-xl mb-3">
                  {title}
                </span>
              </span>
              <div>{description}</div>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
