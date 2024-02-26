import { useMDXComponent } from "next-contentlayer/hooks";

interface Props {
  code: string;
}

export function Mdx({ code }: Props) {
  const MDXComponent = useMDXComponent(code);

  return <MDXComponent />;
}
