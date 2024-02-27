export type myProjectType={
    title:string,
    slug:string,
    desc:string
}

export type Props={
    params: {
      slug: string;
    };
  }
  
export interface cateProps extends Props{
  params:{
    slug:string
    cate:string
  }
}