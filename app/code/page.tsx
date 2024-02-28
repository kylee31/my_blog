import Layout from "@/components/Layout";
import "../../styles/pages.css";

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
      </div>
    </Layout>
  );
}
