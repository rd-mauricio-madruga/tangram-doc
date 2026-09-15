"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9700],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>c});var o=n(25773),i=n(27378),r=n(67468),a=n(45666);const l=r.ZP.div`
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
`;const c=function(e){let{children:t,columns:n=1,...r}=e;return i.createElement(a.Z,null,(()=>i.createElement(l,(0,o.Z)({$columns:n},r),t)))};var d=n(89620);const s=(0,r.ZP)(d.Z)`
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
`;const m=function(e){let{children:t,featured:n=!1,centered:o=!1,className:r}=e;return i.createElement(s,{$featured:n,$centered:o,className:r},t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(27378),i=n(77524);function r(e){let{children:t,fallback:n}=e;return(0,i.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},19569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>v,default:()=>b,frontMatter:()=>k,metadata:()=>h,toc:()=>f});var o=n(25773),i=n(27378),r=n(35318),a=n(80621),l=n(82544),c=n(54479),d=n(24003),s=n(89620),m=n(959),u=n(64723);const p=function(e){let{direction:t=d.Z.directions.horizontal}=e;const[n,o]=(0,i.useState)(!1),r=t===d.Z.directions.vertical?-24:-200,a=t===d.Z.directions.vertical?48:200;return i.createElement(d.Z,{in:n,from:r,to:a,direction:t},i.createElement(s.Z,{clickable:!0,onClick:()=>o((e=>!e))},i.createElement(m.Z,{token:m.Z.tokens.TEXT_MD_BOLD,as:"span"},i.createElement(u.Z,{id:"ExampleSlide.textCard"},"Click here!"))))},k={title:"Slide",description:"Slide \xe9 um componente usado para construir anima\xe7\xf5es que v\xe3o de um ponto A a um ponto B, na dire\xe7\xe3o horizontal ou vertical."},v=void 0,h={unversionedId:"components/slide",id:"components/slide",title:"Slide",description:"Slide \xe9 um componente usado para construir anima\xe7\xf5es que v\xe3o de um ponto A a um ponto B, na dire\xe7\xe3o horizontal ou vertical.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/slide.md",sourceDirName:"components",slug:"/components/slide",permalink:"/docs/components/slide",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/slide.md",tags:[],version:"current",frontMatter:{title:"Slide",description:"Slide \xe9 um componente usado para construir anima\xe7\xf5es que v\xe3o de um ponto A a um ponto B, na dire\xe7\xe3o horizontal ou vertical."},sidebar:"mySidebar",previous:{title:"Skeleton",permalink:"/docs/components/skeleton"},next:{title:"StackGroup",permalink:"/docs/components/stackgroup"}},g={},f=[{value:"Horizontal",id:"horizontal",level:2},{value:"Vertical",id:"vertical",level:2},{value:"Feedback",id:"feedback",level:2}],Z={toc:f};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{current:"docs",name:"slide",mdxType:"ComponentTab"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Slide")," \xe9 um componente usado para construir anima\xe7\xf5es que v\xe3o de um ponto A a um ponto B, na dire\xe7\xe3o horizontal ou vertical."),(0,r.kt)("h2",{id:"horizontal"},"Horizontal"),(0,r.kt)(c.Z,{mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(p,{mdxType:"ExampleSlide"}))),(0,r.kt)("h2",{id:"vertical"},"Vertical"),(0,r.kt)(c.Z,{style:{height:"148px"},mdxType:"CardGrid"},(0,r.kt)(c.D,{centered:!0,mdxType:"CardGridItem"},(0,r.kt)(p,{direction:d.Z.directions.vertical,mdxType:"ExampleSlide"}))),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)(l.Z,{mdxType:"FeedbackBlock"}))}b.isMDXComponent=!0}}]);