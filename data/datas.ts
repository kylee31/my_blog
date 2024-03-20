import { cateType } from "@/types/dataType";
import { navLink } from "@/types/dataType";

export const cate:cateType[] = [
    {
      title: "Projects",
      link: "/projects",
      context: "프로젝트 기획 및 구현 과정을 확인할 수 있습니다.",
    },
    {
      title: "Learned",
      link: "/learned",
      context: "Frontend 분야 관련 지식을 정리해둔 카테고리입니다.",
    },
    {
      title: "Code",
      link: "/code",
      context: "알고리즘 및 코딩테스트 관련 정리글입니다.",
    }
  ];


const navLinks:navLink[]=[
    {
        title:"projects",
        link:"/projects"
    },
    {
        title:"learned",
        link:"/learned"
    },
    {
        title:"code",
        link:"/code"
    },
    {
      title:"TIL",
      link:"/til"
    }
]

export default navLinks