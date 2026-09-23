"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8215],{54479:(e,t,n)=>{n.d(t,{D:()=>m,Z:()=>d});var o=n(25773),s=n(27378),i=n(67468),a=n(45666);const r=i.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&i.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const d=function(e){let{children:t,columns:n=1,...i}=e;return s.createElement(a.Z,null,(()=>s.createElement(r,(0,o.Z)({$columns:n},i),t)))};var c=n(89620);const l=(0,i.ZP)(c.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&i.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&i.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const m=function(e){let{children:t,featured:n=!1,centered:o=!1,className:i}=e;return s.createElement(l,{$featured:n,$centered:o,className:i},t)}},23389:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(25773),s=n(27378),i=n(62957),a=n(85433);function r(e){let{children:t,...n}=e;return s.createElement(a.Z,(0,o.Z)({as:i.Z},n),t)}},45666:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(27378),s=n(77524);function i(e){let{children:t,fallback:n}=e;return(0,s.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}},87954:(e,t,n)=>{n.d(t,{Z:()=>v});var o,s=n(25773),i=n(30808),a=n(27378),r=n(67468),d=(n(23615),n(63559)),c=n(70421),l=n(75387),m=n(26503);const p=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],u="Button",k=(0,r.ZP)(l.Z).withConfig({displayName:"Button__Root",componentId:"tg-1E1__sc-7cbhwm-0"})([""]),h=(0,c.Z)(u,(0,a.forwardRef)(((e,t)=>{let{disabled:n,as:r,children:c,type:l=h.types.button,kind:u=h.kinds.primary,size:v=h.sizes.md,startIcon:Z,endIcon:g,ia:y=!1,loading:f=!1,fluid:b=!1}=e,T=(0,i.Z)(e,p);return a.createElement(k,(0,s.Z)({ref:t,loading:f,fluid:b,forwardedAs:r,size:v,disabled:n||f,kind:u,type:l,ia:y},T),f?a.createElement(m.Z,{size:m.Z.sizes.sm}):y?Z||o||(o=a.createElement(d.Z,{title:"IA","aria-hidden":"true"})):Z,c,g)})));h.displayName=u,h.sizes=l.Z.sizes,h.kinds=l.Z.kinds,h.types=l.Z.types;const v=h},108:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(25773),s=n(30808),i=n(27378),a=n(67468),r=(n(23615),n(75387));const d=["children"],c=a.ZP.div.withConfig({displayName:"ButtonGroup__Root",componentId:"tg-1E1__sc-y8o0sr-0"})(["display:inline-flex;> "," + ",",> * + *{margin-left:var(--size-spacing-03);}"],r.Z.Style,r.Z.Style),l=(0,i.forwardRef)(((e,t)=>{let{children:n}=e,a=(0,s.Z)(e,d);const r=i.Children.toArray(n).map(((e,t)=>{const n={index:t,tabIndex:0,className:"".concat(e.props.className," button-group__child")};return i.cloneElement(e,Object.assign({},e.props,n,{key:e.key||t}))}));return i.createElement(c,(0,o.Z)({ref:t,role:"group"},a),r)}));l.displayName="ButtonGroup",l.Style=c;const m=l},7483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>y,frontMatter:()=>u,metadata:()=>h,toc:()=>Z});var o=n(25773),s=(n(27378),n(35318)),i=n(80621),a=n(82544),r=n(23389),d=n(54479),c=n(93330),l=n(959),m=n(108),p=n(87954);const u={title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens."},k=void 0,h={unversionedId:"components/theme",id:"components/theme",title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/theme.md",sourceDirName:"components",slug:"/components/theme",permalink:"/docs/components/theme",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/theme.md",tags:[],version:"current",frontMatter:{title:"Theme",description:"O componente Theme \xe9 usado para possibilitar o uso das vari\xe1veis CSS com os valores dispon\xedveis nos Design Tokens."},sidebar:"mySidebar",previous:{title:"StickyBar",permalink:"/docs/components/stickybar"},next:{title:"Accordion",permalink:"/docs/components/accordion"}},v={},Z=[{value:"Feedback",id:"feedback",level:2}],g={toc:Z};function y(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{current:"docs",name:"theme",mdxType:"ComponentTab"}),(0,s.kt)("p",null,"O componente ",(0,s.kt)("inlineCode",{parentName:"p"},"Theme")," \xe9 usado para criar um elemento ",(0,s.kt)("em",{parentName:"p"},"HTML")," com o atributo ",(0,s.kt)("inlineCode",{parentName:"p"},'data-tangram-theme="{nome-do-tema}"'),", com o objetivo de encapsular sua aplica\xe7\xe3o e permitir o uso das vari\xe1veis CSS com os valores dispon\xedveis nos ",(0,s.kt)(r.Z,{href:"../../../docs/foundations/color",mdxType:"Link"},"Design Tokens"),"."),(0,s.kt)(d.Z,{mdxType:"CardGrid"},(0,s.kt)(d.D,{mdxType:"CardGridItem"},(0,s.kt)(c.Z,{value:c.Z.kinds.lina,mdxType:"Theme"},(0,s.kt)(l.Z,{textColor:"--primary-text",mdxType:"Text"},"Texto estilizado usando a vari\xe1vel CSS do tema."),(0,s.kt)(m.Z,{mdxType:"ButtonGroup"},(0,s.kt)(p.Z,{mdxType:"Button"},"A\xe7\xe3o prim\xe1ria"),(0,s.kt)(p.Z,{kind:p.Z.kinds.secondary,mdxType:"Button"},"A\xe7\xe3o secund\xe1ria"))))),(0,s.kt)("h2",{id:"feedback"},"Feedback"),(0,s.kt)(a.Z,{mdxType:"FeedbackBlock"}))}y.isMDXComponent=!0}}]);