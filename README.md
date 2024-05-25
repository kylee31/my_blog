# 📑 My Blog

Next.js 서버 컴포넌트(RSC) 활용하여 SSG 렌더링 방식 적용, contentlayer로 정적 콘텐츠(게시글)를 출력하는 블로그 구현 프로젝트.
<br/><br/>

## 설치 및 실행

```
##npm
git clone https://github.com/kylee31/my_blog.git
npm install
npm run dev

##yarn
git clone https://github.com/kylee31/my_blog.git
yarn install
yarn dev
```

## 기술스택 및 구현 기능

<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=black"/> <img src="https://img.shields.io/badge/Contentlayer-000000?style=flat-square&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/>

- 카테고리별 게시글
  <br/><br/>

## 주요 기능

|                                                                                                    |                                                                                                    |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **메인 페이지**                                                                                    | **카테고리**                                                                                       |
| ![image](https://github.com/kylee31/my_blog/assets/106156087/5a51a9fe-3a8f-444f-9192-685f655b06e1) | ![image](https://github.com/kylee31/my_blog/assets/106156087/5abceea0-4c97-46ae-b2f6-7fe6e3eb8c10) |

- 메인 페이지(첫 화면), 각 카테고리 별 이동 가능
- 프로젝트 페이지, 각 프로젝트 구현 과정에서 겪었던 경험 및 트러블 슈팅 정리

<br/>

## 링크

<h3>https://twothreeone-blog.vercel.app</h3>

<br/>

## 트러블슈팅

<details>
<summary><b>첫 화면 Lighthouse Performance 성능 개선</b></summary>
[문제] <br/>
SSG 렌더링 방식이므로 전체 페이지 성능이 90점 이상일 것으로 기대했으나, 첫 화면 Performance 성능이 72점으로 나머지 페이지(96~100점)에 비해 현저히 떨어짐<br/>
[과정] <br/>
1. 크기가 큰 애니메이션(GIF)으로 인해 12.6 s로 길어지는 LCP 확인<br/>
2. Image 컴포넌트에 설정한 크기(400x100)와 같게 리사이징, GIF를 WebP로 형식 변환 → 이미지 크기 축소 및 압축<br/>
[결과] <br/>
LCP 3.3 s로 단축, Lighthouse Performance 72점 → 92점<br/>
</details>
<br/>

## 현재 이슈, 코드 및 기능 개선사항

[UX 개선] 게시글 날짜 별 정렬로 코드 수정하기
