import { cate } from "@/data/datas";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <h1 className="mb-16 text-4xl font-extrabold text-black">{`231's Blog`}</h1>
      </div>

      <div className="relative flex flex-col mb-16 place-items-center text-center">
        <span>결과를 확인할 수 있는 활동을 좋아하는 개발자입니다.</span>
        <span>가독성이 높은 코드, 단순하지만 깔끔한 디자인을 선호합니다.</span>
        <div className="flex">
          <a
            className="mt-5 mr-3"
            href="https://velog.io/@kylee31/posts"
            target="_blank"
          >
            <Image src="/velog.png" alt="no img" width={25} height={25} />
          </a>
          <a className="mt-5" href="https://github.com/kylee31" target="_blank">
            <Image src="/github.png" alt="no img" width={25} height={25} />
          </a>
        </div>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-2/3 lg:mb-0 lg:grid-cols-3 lg:text-left">
        {cate.map((items) => {
          const { title, link, context } = items;
          return (
            <Link
              key={title}
              href={link}
              className="rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  ▶
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-80`}>{context}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
