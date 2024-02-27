import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrettyCode from "rehype-pretty-code";

export const Learned = defineDocumentType(() => ({
    name: "Learned",
    filePathPattern: `learned/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (post) => post._raw.sourceFileName.replace(".mdx", ""),
        },
    },
}));

export const Projects = defineDocumentType(() => ({
    name: "Projects",
    filePathPattern: `projects/*.mdx`,
    contentType: "mdx",
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        cate: { type: "string", required: true }
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (post) => post._raw.sourceFileName.replace(".mdx", ""),
        },
    },
}))

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Learned, Projects],
    mdx: {
        rehypePlugins: [
            rehypeCodeTitles,
            [
                // @ts-ignore
                rehypePrettyCode,
                {
                    theme: "github-dark",
                    defaultLang: "plaintext",
                },
            ],
        ],
    },
});