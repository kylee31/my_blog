import { allLearneds } from "@/.contentlayer/generated";
import Layout from "@/libs/Layout";
import Link from "next/link";

export default function Learned() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        {allLearneds.map((learned, idx) => {
          const { slug, title, date, description } = learned;
          return (
            <Link
              key={title + idx}
              href={`/learned/${slug}`}
              className="h-20 mb-2 border-b-2 border-solid border-gray"
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
