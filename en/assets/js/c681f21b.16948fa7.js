"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8810],{54479:(e,t,i)=>{i.d(t,{D:()=>m,Z:()=>c});var n=i(25773),o=i(27378),r=i(67468),l=i(45666);const a=r.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&r.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const c=function(e){let{children:t,columns:i=1,...r}=e;return o.createElement(l.Z,null,(()=>o.createElement(a,(0,n.Z)({$columns:i},r),t)))};var d=i(89620);const s=(0,r.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&r.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&r.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:t,featured:i=!1,centered:n=!1,className:r}=e;return o.createElement(s,{$featured:i,$centered:n,className:r},t)}},45666:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(27378),o=i(77524);function r(e){let{children:t,fallback:i}=e;return(0,o.Z)()?n.createElement(n.Fragment,null,t?.()):i??null}},9003:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>y,frontMatter:()=>k,metadata:()=>v,toc:()=>f});var n=i(25773),o=i(27378),r=i(35318),l=i(80621),a=i(82544),c=i(54479),d=i(24003),s=i(89620),m=i(959),p=i(64723);const u=function(e){let{direction:t=d.Z.directions.horizontal}=e;const[i,n]=(0,o.useState)(!1),r=t===d.Z.directions.vertical?-24:-200,l=t===d.Z.directions.vertical?48:200;return o.createElement(d.Z,{in:i,from:r,to:l,direction:t},o.createElement(s.Z,{clickable:!0,onClick:()=>n((e=>!e))},o.createElement(m.Z,{token:m.Z.tokens.TEXT_MD_BOLD,as:"span"},o.createElement(p.Z,{id:"ExampleSlide.textCard"},"Click here!"))))},k={title:"Slide",description:"Slide is a component used to build animations that go from point A to point B, either horizontally or vertically."},h=void 0,v={unversionedId:"components/slide",id:"components/slide",title:"Slide",description:"Slide is a component used to build animations that go from point A to point B, either horizontally or vertically.",source:"@site/docs/components/slide.md",sourceDirName:"components",slug:"/components/slide",permalink:"/en/docs/components/slide",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/slide.md",tags:[],version:"current",frontMatter:{title:"Slide",description:"Slide is a component used to build animations that go from point A to point B, either horizontally or vertically."},sidebar:"mySidebar",previous:{title:"Skeleton",permalink:"/en/docs/components/skeleton"},next:{title:"StackGroup",permalink:"/en/docs/components/stackgroup"}},g={},f=[{value:"Horizontal",id:"horizontal",level:2},{value:"Vertical",id:"vertical",level:2},{value:"Feedback",id:"feedback",level:2}],b={toc:f};function y(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{current:"docs",name:"slide",mdxType:"ComponentTab"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Slide")," is a component used to build animations that go from point A to point B, in a horizontal or vertical direction."),(0,r.kt)("h2",{id:"horizontal"},"Horizontal"),(0,r.kt)(c.Z,{mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(u,{mdxType:"ExampleSlide"}))),(0,r.kt)("h2",{id:"vertical"},"Vertical"),(0,r.kt)(c.Z,{style:{height:"148px"},mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(u,{direction:d.Z.directions.vertical,mdxType:"ExampleSlide"}))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(a.Z,{mdxType:"FeedbackBlock"}))}y.isMDXComponent=!0}}]);