import Layout from "@/components/Layout";
import Posts from "@/components/Posts";
import { myProject } from "@/data/posts";
import "../../styles/pages.css";

export default function Cate() {
  return (
    <Layout>
      <div className="w-full flex flex-col">
        <div className="mb-10  cate-title">
          <span className="text-2xl font-black mr-3 text-gray-700">
            Projects
          </span>
          <span className="text-xs font-bold text-gray-500">
            프로젝트 기획 및 구현 과정
          </span>
        </div>
        <div className="w-full post-grid">
          {myProject.map((item, idx) => {
            return <Posts project={item} key={idx} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
