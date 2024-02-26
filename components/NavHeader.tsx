import navLinks from "@/data/datas";
import Link from "next/link";

export default function NavHeader() {
  return (
    <header className="h-20 flex justify-between items-center">
      <Link
        href="/"
        className="font-bold text-black text-lg"
      >{`231's Blog`}</Link>
      {navLinks.map((item) => {
        const { title, link } = item;
        return (
          <Link
            href={link}
            key={title}
            className="font-normal transition duration-250 hover:scale-125"
          >
            {title}
          </Link>
        );
      })}
    </header>
  );
}
