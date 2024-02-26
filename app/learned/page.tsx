import { allLearneds } from "@/.contentlayer/generated";
import Layout from "@/libs/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {allLearneds.map((learned, idx) => {
        const { slug, title, date, description } = learned;
        return (
          <Link
            key={title + idx}
            href={`/learned/${slug}`}
            className="w-full border-2 border-solid border-gray"
          >
            <span>{title}</span>
            <span>{date}</span>
            <div>{description}</div>
          </Link>
        );
      })}
    </Layout>
  );
}
