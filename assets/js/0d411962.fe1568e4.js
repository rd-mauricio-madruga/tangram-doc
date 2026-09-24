"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7556],{54479:(e,t,r)=>{r.d(t,{D:()=>u,Z:()=>s});var n=r(25773),a=r(27378),o=r(67468),i=r(45666);const l=o.ZP.div`
  margin-bottom: var(--size-spacing-09);

  & > * {
    margin-bottom: var(--size-spacing-05);
  }

  ${e=>{let{$columns:t}=e;return t>=2&&o.iv`
      display: grid;
      column-gap: var(--size-spacing-05);
      row-gap: var(--size-spacing-05);
      grid-template-columns: repeat(${t}, 1fr);

      & > * {
        margin-bottom: 0;
      }
    `}}
`;const s=function(e){let{children:t,columns:r=1,...o}=e;return a.createElement(i.Z,null,(()=>a.createElement(l,(0,n.Z)({$columns:r},o),t)))};var d=r(89620);const c=(0,o.ZP)(d.Z)`
  height: 100%;

  p {
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${e=>{let{$featured:t}=e;return t&&o.iv`
      border-color: var(--highlight-border);
    `}}

  ${e=>{let{$centered:t}=e;return t&&o.iv`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    `}}
`;const u=function(e){let{children:t,featured:r=!1,centered:n=!1,className:o}=e;return a.createElement(c,{$featured:r,$centered:n,className:o},t)}},94099:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(27378),a=r(79011),o=r(12958),i=r(99876),l=r(18225);function s(){return n.createElement(n.Fragment,null,n.createElement(a.Z.Control,null,n.createElement(a.Z.Label,{htmlFor:"enUS"},"enUS"),n.createElement(o.Z,{id:"enUS",name:"enUS",locale:i.Z,dateFormat:"MM/dd/yyyy",placeholder:"Select a date"})),n.createElement(a.Z.Control,null,n.createElement(a.Z.Label,{htmlFor:"ptBR"},"ptBR (default)"),n.createElement(o.Z,{id:"ptBR",name:"ptBR",placeholder:"Selecione uma data"})),n.createElement(a.Z.Control,null,n.createElement(a.Z.Label,{htmlFor:"es"},"es"),n.createElement(o.Z,{id:"es",name:"es",locale:l.Z,placeholder:"Seleccione una fecha"})))}},23389:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(25773),a=r(27378),o=r(62957),i=r(85433);function l(e){let{children:t,...r}=e;return a.createElement(i.Z,(0,n.Z)({as:o.Z},r),t)}},87954:(e,t,r)=>{r.d(t,{Z:()=>v});var n,a=r(25773),o=r(30808),i=r(27378),l=r(67468),s=(r(23615),r(63559)),d=r(70421),c=r(75387),u=r(26503);const p=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],m="Button",h=(0,l.ZP)(c.Z).withConfig({displayName:"Button__Root",componentId:"tg-1E1__sc-7cbhwm-0"})([""]),g=(0,d.Z)(m,(0,i.forwardRef)(((e,t)=>{let{disabled:r,as:l,children:d,type:c=g.types.button,kind:m=g.kinds.primary,size:v=g.sizes.md,startIcon:f,endIcon:y,ia:b=!1,loading:w=!1,fluid:Z=!1}=e,x=(0,o.Z)(e,p);return i.createElement(h,(0,a.Z)({ref:t,loading:w,fluid:Z,forwardedAs:l,size:v,disabled:r||w,kind:m,type:c,ia:b},x),w?i.createElement(u.Z,{size:u.Z.sizes.sm}):b?f||n||(n=i.createElement(s.Z,{title:"IA","aria-hidden":"true"})):f,d,y)})));g.displayName=m,g.sizes=c.Z.sizes,g.kinds=c.Z.kinds,g.types=c.Z.types;const v=g},67425:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(27378),a=(r(23615),r(10497)),o=r(96287),i=r(1205);const l=Object.freeze({});function s(e,t){if(!t)return t;const r=e?Object.assign({},e,t):Object.assign({},t);var n,a;return n=t,a="props",Object.prototype.hasOwnProperty.call(n,a)&&(r.props=function(e,t){if(!t)return t;const r=e?Object.assign({},e):{};return Object.keys(t).forEach((e=>{t[e]===o.p?delete r[e]:r[e]=t[e]})),r}(null==e?void 0:e.props,t.props)),r}const d=e=>{let{children:t,spec:r}=e;const o=(0,n.useContext)(i.Z),d=(0,a.Z)(r||l,{deep:!0}),c=(0,n.useMemo)((()=>function(e,t){const r=Object.keys(t);return 0===r.length?e:r.reduce(((r,n)=>(r[n]=s(e[n],t[n]),r)),Object.assign({},e))}(o,d)),[o,d]);return n.createElement(i.Z.Provider,{value:c},t)};d.displayName="ComponentsConfig",d.unset=o.p;const c=d},81161:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378),a=(r(23615),r(10497)),o=r(1205);const i=e=>{let{children:t,components:r}=e;const i=(0,n.useContext)(o.Z),l=(0,a.Z)(r?"string"==typeof r?[r]:r:[]),s=(0,n.useMemo)((()=>0===l.length?{}:Object.fromEntries(Object.entries(i).filter((e=>{let[t]=e;return!l.includes(t)})))),[i,l]);return n.createElement(o.Z.Provider,{value:s},t)};i.displayName="ResetComponentsConfig";const l=i},79011:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(25773),a=r(27378),o=r(67468),i=r(85901),l=r(17717),s=r(66677),d=r(29478),c=r(61778),u=r(24338);const p=o.ZP.form.withConfig({displayName:"Form__Root",componentId:"tg-1E1__sc-d5k6eq-0"})([""," display:block;margin:0;padding:0;"],i.Z),m=(0,a.forwardRef)(((e,t)=>a.createElement(p,(0,n.Z)({},e,{ref:t}))));m.displayName="Form",m.Style=p,m.Control=l.Z,m.ControlLabel=s.Z,m.Label=d.Z,m.Group=c.Z,m.Feedback=u.Z;const h=m},17717:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(66644),s=r(85901),d=r(74333),c=r(24338),u=r(29478);const p=["children","disabled","error","success","required","inline"],m=i.ZP.div.withConfig({displayName:"FormControl__Root",componentId:"tg-1E1__sc-11hy1kc-0"})([""," border:none;padding:0;margin:0 0 var(--size-spacing-04) 0;",""],s.Z,(e=>{let{$inline:t}=e;return t?(0,i.iv)(["display:inline-flex;align-items:center;margin-bottom:0;margin-right:var(--size-spacing-04);&:has([data-tg-inline-edit='true']){display:flex;flex-wrap:wrap;align-items:center;width:100%;margin-right:0;margin-bottom:var(--size-spacing-04);> ","{flex:0 0 var(--size-spacing-12);width:var(--size-spacing-12);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}>:not(","):not(","){flex:1 1 0%;width:auto;min-width:0;}> ","{flex-basis:100%;width:calc( 100% - var(--size-spacing-12) - var(--size-spacing-02) );margin-top:var(--size-spacing-01);margin-left:calc( var(--size-spacing-12) + var(--size-spacing-02) );}}"],u.Z.Style,u.Z.Style,c.Z.Style,c.Z.Style):(0,i.iv)(["&:has([data-tg-inline-edit='true']) > ","{margin-bottom:var(--size-spacing-01);}&:has([data-tg-inline-edit='true']) > ","{margin-top:var(--size-spacing-01);}"],u.Z.Style,c.Z.Style)})),h=(0,o.forwardRef)(((e,t)=>{let{children:r=null,disabled:i=!1,error:s=!1,success:c=!1,required:u=!1,inline:h=!1}=e,g=(0,a.Z)(e,p);const v=(0,o.useRef)(null),f=(0,l.Z)([v,t]),[y,b]=(0,o.useState)(!1);(0,o.useLayoutEffect)((()=>{var e;b(Boolean(h&&(null===(e=v.current)||void 0===e?void 0:e.querySelector('[data-tg-inline-edit="true"]'))))}),[h,r]);const w=(0,o.useMemo)((()=>({inline:h,required:u,disabled:i,error:s,success:c,inlineEditRow:y})),[h,u,i,s,c,y]);return o.createElement(d.Z.Provider,{value:w},o.createElement(m,(0,n.Z)({ref:f,$inline:h},g),r))}));h.displayName="FormControl",h.Context=d.Z,h.Style=m;const g=h},74333:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(27378).createContext({})},66677:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(25773),a=r(30808),o=r(27378),i=r(23615),l=r.n(i),s=r(67468),d=r(85901),c=r(959);const u=["children","inverted","disabled","error"],p=(0,s.ZP)(c.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"tg-1E1__sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{$error:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),m=(0,o.forwardRef)(((e,t)=>{let{children:r,inverted:i=!1,disabled:l=!1,error:s=!1}=e,d=(0,a.Z)(e,u);return o.createElement(p,(0,n.Z)({ref:t,$disabled:l,$inverted:i,$error:s,forwardedAs:"label"},d),r)}));m.displayName="FormControlLabel",m.Style=p,m.propTypes={children:l().node.isRequired,inverted:l().bool,disabled:l().bool,error:l().bool};const h=m},24338:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(85901),s=r(58649),d=r(959);const c=["children","as","error","success"],u=(0,i.ZP)(d.Z).withConfig({displayName:"FormFeedback__Root",componentId:"tg-1E1__sc-7iulb-0"})([""," display:block;color:var(--neutral-text-low-emphasis);margin-top:var(--size-spacing-02);"," ",""],l.Z,(e=>{let{$success:t}=e;return t&&(0,i.iv)(["color:var(--success-text);"])}),(e=>{let{$error:t}=e;return t&&(0,i.iv)(["color:var(--danger-text);"])})),p=(0,o.forwardRef)(((e,t)=>{let{children:r=null,as:i="span",error:l=!1,success:p=!1}=e,m=(0,a.Z)(e,c);const{error:h,success:g}=(0,s.Z)(),v=h||l,f=g||p;return r&&o.createElement(u,(0,n.Z)({ref:t,forwardedAs:i,token:d.Z.tokens.TEXT_SM_REGULAR,$error:v,$success:f},m),r)}));p.displayName="FormFeedback",p.Style=u;const m=p},61778:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(25773),a=r(30808),o=r(27378),i=r(23615),l=r.n(i),s=r(67468),d=r(85901);const c=["children","row"],u=s.ZP.div.withConfig({displayName:"FormGroup__Root",componentId:"tg-1E1__sc-bue639-0"})([""," display:flex;flex-wrap:wrap;flex-direction:column;> label:not(:last-child){margin:0 0 var(--size-spacing-02) 0;}",""],d.Z,(e=>{let{$row:t}=e;return t&&(0,s.iv)(["flex-direction:row;> label:not(:last-child){margin:0 var(--size-spacing-04) 0 0;}"])})),p=(0,o.forwardRef)(((e,t)=>{let{children:r,row:i=!1}=e,l=(0,a.Z)(e,c);return o.createElement(u,(0,n.Z)({ref:t,$row:i},l),r)}));p.displayName="FormGroup",p.propTypes={children:l().node.isRequired,row:l().bool};const m=p},29478:(e,t,r)=>{r.d(t,{Z:()=>y});var n,a=r(25773),o=r(30808),i=r(82769),l=r(27378),s=r(67468),d=(r(23615),r(66644)),c=r(85901),u=r(56297),p=r(58649),m=r(959);const h=["children","as","disabled","required"],g=(0,s.ZP)(m.Z).withConfig({displayName:"FormLabel__Root",componentId:"tg-1E1__sc-162zhfs-0"})([""," display:block;margin:0 0 var(--size-spacing-02) 0;color:var(--neutral-text-high-emphasis);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],c.Z,(e=>{let{forwardedAs:t}=e;return"legend"===t&&(0,s.iv)(["margin-bottom:var(--size-spacing-03);"])}),(e=>{let{disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inline:t}=e;return t&&(0,s.iv)(["margin-bottom:0;margin-right:var(--size-spacing-02);"])})),v=(0,s.ZP)((e=>{let t=Object.assign({},((0,i.Z)(e),e));return l.createElement("span",t," *")})).withConfig({displayName:"FormLabel__Required",componentId:"tg-1E1__sc-162zhfs-1"})(["color:var(--danger-text);"]),f=(0,l.forwardRef)(((e,t)=>{let{children:r,as:i="label",disabled:s=!1,required:c=!1}=e,f=(0,o.Z)(e,h);const{inline:y,inlineEditRow:b,disabled:w,required:Z}=(0,p.Z)(),x=c||Z,k=(0,l.useRef)(null),E=(0,d.Z)([k,t]),[_,z]=(0,l.useState)("");(0,l.useLayoutEffect)((()=>{const e=k.current,t=b&&e&&e.scrollWidth>e.clientWidth;z(t?e.textContent:"")}),[b,r,x]);const C=l.createElement(g,(0,a.Z)({ref:E},f,{$inline:y,token:m.Z.tokens.TEXT_MD_BOLD,forwardedAs:i,disabled:s||w}),r,x&&(n||(n=l.createElement(v,null))));return _?l.createElement(u.Z,{label:_},C):C}));f.displayName="FormLabel",f.Style=g;const y=f},58649:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=r(74333);const o=()=>n.useContext(a.Z)},38095:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(34822),s=r(89679);const d=["children","lineBreak","gap","inline","verticalAlign","horizontalAlign","as"];function c(e){return"string"==typeof e?e:"var(--size-spacing-".concat(e.toString().padStart(2,"0"),")")}const u=i.ZP.div.withConfig({displayName:"InlineGroup__Root",componentId:"tg-1E1__sc-1n0xm5v-0"})(["display:flex;flex-direction:row;gap:",";"," ",";"," ",""],(e=>{let{$gap:t}=e;return Array.isArray(t)?t.map(c).join(" "):c(t)}),(e=>{let{$inline:t}=e;return t&&(0,i.iv)(["display:inline-flex;"])}),(e=>{let{$horizontalAlign:t}=e;return t&&(0,i.iv)(["justify-content:",";"],t)}),(e=>{let{$verticalAlign:t}=e;return t&&(0,i.iv)(["align-items:",";"],t)}),(e=>{let{$lineBreak:t}=e;return t&&(0,i.iv)(["flex-wrap:wrap;"])})),p=(0,o.forwardRef)(((e,t)=>{let{children:r,lineBreak:i=!1,gap:l="var(--size-spacing-02)",inline:s=!1,verticalAlign:c=p.verticalAlignments.top,horizontalAlign:m=p.horizontalAlignments.left,as:h="div"}=e,g=(0,a.Z)(e,d);return o.createElement(u,(0,n.Z)({ref:t,as:h,$gap:l,$inline:s,$lineBreak:i,$horizontalAlign:m,$verticalAlign:c},g),r)}));p.displayName="InlineGroup",p.Style=u,p.Item=s.Z,p.horizontalAlignments=l.T,p.verticalAlignments=l.n;const m=p},89679:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(34822);const s=["children","verticalAlign","fluid","as"],d=i.ZP.div.withConfig({displayName:"InlineGroupItem__Root",componentId:"tg-1E1__sc-1r2n1hz-0"})(["",";",""],(e=>{let{$verticalAlign:t}=e;return t&&(0,i.iv)(["align-self:",";"],t)}),(e=>{let{$fluid:t}=e;return t&&(0,i.iv)(["flex:1;min-width:0;"])})),c=(0,o.forwardRef)(((e,t)=>{let{children:r,verticalAlign:i,fluid:l=!1,as:c="div"}=e,u=(0,a.Z)(e,s);return o.createElement(d,(0,n.Z)({ref:t,as:c,$verticalAlign:i,$fluid:l},u),r)}));c.displayName="InlineGroupItem",c.Style=d,c.verticalAlignments=l.n;const u=c},34822:(e,t,r)=>{r.d(t,{T:()=>n,n:()=>a});const n={left:"flex-start",center:"center",right:"flex-end",spaceBetween:"space-between"},a={top:"start",center:"center",bottom:"end",baseline:"baseline",stretch:"stretch"}},55575:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(66644),s=r(58649),d=r(67425),c=r(19201);const u=["rootRef","className","style","value","defaultValue","prefix","suffix","width","inlineEdit","disabled","required","error","success","aria-invalid"],p={IconButton:{props:{kind:"neutral",size:"sm"}}},m=(0,i.ZP)(c.Z).withConfig({displayName:"Input__Root",componentId:"tg-1E1__sc-2oktpa-0"})([""]),h=(0,o.forwardRef)(((e,t)=>{let{rootRef:r,className:i,style:c,value:h,defaultValue:g,prefix:v,suffix:f,width:y,inlineEdit:b=!1,disabled:w=!1,required:Z=!1,error:x=!1,success:k=!1}=e,E=(0,a.Z)(e,u);const _=(0,o.useRef)(null),z=(0,s.Z)(),C=z.required||Z,R=z.success||k,S=z.error||x,T=Object.assign({},R||S?{"aria-invalid":S||!R}:{}),I=(0,o.useCallback)((()=>{_.current.focus()}),[]);return o.createElement(m,{ref:r,className:i,style:c,disabled:w,prefix:v&&o.createElement(d.Z,{spec:p},v),suffix:f&&o.createElement(d.Z,{spec:p},f),width:y,inlineEdit:b,onClick:I},o.createElement("input",(0,n.Z)({},E,{ref:(0,l.Z)([_,t]),disabled:w,value:h,defaultValue:g,"aria-required":C},T)))}));h.displayName="Input",h.Style=m;const g=h},19201:(e,t,r)=>{r.d(t,{Z:()=>Z});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(61380),s=r(78859),d=r(2414),c=r(75387),u=r(67425),p=r(26503),m=r(38095);const h=["disabled","prefix","suffix","width","inlineEdit","children","onMouseDown"],g={IconButton:{props:{kind:"neutral",size:"sm"}}};function v(e){e.stopPropagation()}const f=(0,i.ZP)(m.Z).attrs({gap:1,verticalAlign:m.Z.verticalAlignments.center}).withConfig({displayName:"InputControl__Prefix",componentId:"tg-1E1__sc-1bx7dgp-0"})(["height:calc(var(--input-height) - 2px);> svg{--custom-icon-color:var(--input-icon-color);}","{"," --focus-outline-offset:calc(-1 * var(--size-spacing-01) - 1px);&:hover,&:focus,&:active{&:not(:disabled),&:not([disabled]),&:not([aria-disabled='true']){background-color:transparent;}}}& > ",":first-child,& > ",":first-child{margin-left:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}[data-tg-inline-edit='true'] & > ",":first-child,[data-tg-inline-edit='true'] & > ",":first-child{margin-left:0;}"],c.Z.Style,c.Z.SmallStyle,c.Z.Style,p.Z.Style,c.Z.Style,p.Z.Style),y=(0,i.ZP)(f).withConfig({displayName:"InputControl__Suffix",componentId:"tg-1E1__sc-1bx7dgp-1"})(["& > ",":last-child,& > ",":last-child{margin-right:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}[data-tg-inline-edit='true'] & > ",":last-child,[data-tg-inline-edit='true'] & > ",":last-child{margin-right:0;}"],c.Z.Style,p.Z.Style,c.Z.Style,p.Z.Style),b=i.ZP.div.withConfig({displayName:"InputControl__Root",componentId:"tg-1E1__sc-1bx7dgp-2"})(["--focus-border-radius:var(--border-radius-md);--input-height:",";--input-border-color:var(--neutral-border-interactive);--input-background-color:var(--neutral-surface);--input-text-color:var(--neutral-text-low-emphasis);--input-value-color:var(--neutral-text-high-emphasis);--input-placeholder-color:var(--neutral-text-low-emphasis);--input-icon-color:var(--neutral-icon-low-emphasis);--input-line-height:calc( var(--input-height) - 2px - (2 * var(--size-spacing-02)) );"," display:flex;gap:var(--size-spacing-02);align-items:center;height:var(--input-height);width:",";border-radius:var(--border-radius-md);border:1px solid var(--input-border-color);padding:0 var(--size-spacing-03);color:var(--neutral-text-low-emphasis);background-color:var(--input-background-color);box-shadow:none;&,> input,> input::placeholder,> textarea,> textarea::placeholder{font:var(--text-md-regular);line-height:var(--input-line-height);letter-spacing:-0.01em;}input{height:var(--input-line-height);}input,textarea{display:block;flex:1;margin:0;min-width:0;border:0;padding:0;outline:0;color:var(--input-value-color);background-color:transparent;&::placeholder{color:var(--input-placeholder-color);}::-ms-clear{display:none;width:0;height:0;}::-ms-reveal{display:none;width:0;height:0;}::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration{display:none;}}&:hover,&:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}&[aria-invalid='true'],&:has(*[aria-invalid='true']){&,&:hover{--input-border-color:var(--danger-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-invalid='false'],&:has(*[aria-invalid='false']){&,&:hover{--input-border-color:var(--success-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-disabled='true']{--input-background-color:var(--neutral-surface-disabled);--input-value-color:var(--neutral-text-disabled);--input-placeholder-color:var(--neutral-text-disabled);&,&:hover,&:focus,&:focus-within,&:hover:focus,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-disabled);}}",""],"40px",l.Z,(e=>{let{$width:t}=e;return t||"100%"}),s.Z),w=(0,o.forwardRef)(((e,t)=>{let{disabled:r,prefix:i,suffix:l,width:s,inlineEdit:c=!1,children:p,onMouseDown:m}=e,w=(0,a.Z)(e,h);const{enabled:Z,actions:x}=(0,d.Z)(c);return o.createElement(b,(0,n.Z)({},w,{ref:t,"aria-disabled":r,$width:s,"data-tg-inline-edit":Z?"true":void 0,onMouseDown:e=>{if(null==m||m(e),e.defaultPrevented||!Z)return;if(e.target!==e.currentTarget)return;const t=e.currentTarget.querySelector("input, textarea");t&&!t.disabled&&t.focus()}}),i&&o.createElement(f,null,i),p,l&&o.createElement(y,null,l),Z&&x?o.createElement(y,{"data-tg-inline-actions":"",onMouseDown:v,onClick:v},o.createElement(u.Z,{spec:g},x)):null)}));w.displayName="InputControl",w.Style=b;const Z=w},5662:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(8925),s=r(61994),d=r(29163),c=r(84227),u=r(79226),p=r(90496),m=r(79778),h=r(85689);const g=["forwardedAs","children","as","size","listStyleType","alignment","bordered"],v=["$listStyleType","as"],f=i.ZP.ul.withConfig({displayName:"List__Root",componentId:"tg-1E1__sc-4hzzzr-0"})(["padding:0;margin:0;list-style-position:inside;list-style-type:",";background-color:var(--neutral-surface);width:100%;"],(e=>{let{$listStyleType:t}=e;return t})),y=(0,o.forwardRef)(((e,t)=>{let{forwardedAs:r,children:i,as:l=y.as.ul,size:s=y.sizes.md,listStyleType:d="none",alignment:c=y.alignments.center,bordered:u=!1}=e,p=(0,a.Z)(e,g);const b={size:s,alignment:c,bordered:u},w=o.Children.toArray(i).filter((e=>o.isValidElement(e))).filter((e=>{let{props:t}=e;return t.clickable})).length?m.R.div:null,Z=l!==m.R.ul&&l!==m.R.ol&&l!==m.R.menu?m.R.div:null,x=o.Children.map(i,(e=>{if(!o.isValidElement(e))return e;const t=e.props,r=(0,a.Z)(t,v);return(0,o.cloneElement)(e,Object.assign({size:s,listStyleType:d,alignment:c,forwardedAs:w||Z},r))}));return o.createElement(h.Z.Provider,{value:b},o.createElement(f,(0,n.Z)({role:"list",as:w||l||r,$listStyleType:d,ref:t,$size:s,$alignment:c,$bordered:u},p),x))}));y.displayName="List",y.Item=l.Z,y.Header=s.Z,y.Divider=d.Z,y.Style=f,y.ItemContent=c.Z,y.ItemExtra=u.Z,y.sizes={sm:p.zf.SM,md:p.zf.MD},y.as=m.R,y.alignments=m.d;const b=y},85689:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(27378).createContext({})},29163:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(25773),a=r(30808),o=r(27378),i=r(23615),l=r.n(i),s=r(67468);const d=["forwardedAs","as"],c=s.ZP.li.withConfig({displayName:"ListDivider__Root",componentId:"tg-1E1__sc-1ueoufh-0"})(["height:1px;border:none;background-color:var(--neutral-border);margin:var(--size-spacing-02) 0;list-style:none;"]),u=(0,o.forwardRef)(((e,t)=>{let{forwardedAs:r,as:i}=e,l=(0,a.Z)(e,d);return o.createElement(c,(0,n.Z)({as:r||i,ref:t},l,{role:"separator"}))}));u.displayName="ListDivider",u.Style=c,u.propTypes={as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const p=u},61994:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(25773),a=r(30808),o=r(27378),i=r(23615),l=r.n(i),s=r(67468),d=r(85901),c=r(959);const u=["children","forwardedAs","as"],p=s.ZP.li.withConfig({displayName:"ListHeader__Root",componentId:"tg-1E1__sc-19u7u4r-0"})([""," padding:var(--size-spacing-04) var(--size-spacing-03) var(--size-spacing-02);position:relative;align-items:center;display:inline-flex;width:100%;list-style:none;"],d.Z),m=(0,s.ZP)(c.Z).withConfig({displayName:"ListHeader__StyledText",componentId:"tg-1E1__sc-19u7u4r-1"})(["margin:0;"]),h=(0,o.forwardRef)(((e,t)=>{let{children:r,forwardedAs:i,as:l}=e,s=(0,a.Z)(e,u);return o.createElement(p,(0,n.Z)({ref:t,as:i||l},s),o.createElement(m,{textColor:"--neutral-text-low-emphasis",token:c.Z.tokens.TEXT_XS_BOLD},r.toUpperCase()))}));h.displayName="ListHeader",h.Style=p,h.propTypes={children:l().string.isRequired,as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const g=h},8925:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(50046),s=r(90496),d=r(79778),c=r(85689),u=r(84227),p=r(79226),m=r(59942),h=r(95778),g=r(76548);const v=["children","size","onClick","forwardedAs","as","disabled","active","clickable","listStyleType"],f=i.ZP.li.withConfig({displayName:"ListItem__Root",componentId:"tg-1E1__sc-ygn4xa-0"})(["outline:none;position:relative;padding:var(--size-spacing-03) var(--size-spacing-04);width:100%;display:",";align-items:",";",";",";",";",";",";"],(e=>{let{$listStyleType:t}=e;return t&&"none"!==t?"list-item":"flex"}),(e=>{let{$alignment:t}=e;return t===d.d.top?"flex-start":"center"}),(e=>{let{$childrenNumber:t}=e;return t&&(0,i.iv)(["","{order:",";}"],g.Z.Style,t)}),(e=>{let{$bordered:t}=e;return t&&(0,i.iv)(["border-bottom:1px solid var(--neutral-border);"])}),(e=>{let{$clickable:t}=e;return t&&(0,i.iv)(["cursor:pointer;&:hover{background-color:var(--neutral-surface-hover);}"])}),(e=>{let{$active:t}=e;return t&&(0,i.iv)(["&,&:hover,&:focus{background-color:var(--neutral-surface-low-emphasis);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,i.iv)(["pointer-events:none;background-color:transparent;& *,&:hover *,&:focus *{pointer-events:none;color:var(--neutral-text-disabled);","{svg{--custom-icon-color:var(--neutral-icon-disabled);}}}"],h.Z.Style)})),y=(0,o.forwardRef)(((e,t)=>{let{children:r,onClick:i,forwardedAs:s,as:d,disabled:u=!1,active:p=!1,clickable:m=!1,listStyleType:h="none"}=e,g=(0,a.Z)(e,v);const{alignment:y,bordered:b}=o.useContext(c.Z);let w;(m&&i||m)&&(w={role:"button","aria-pressed":p,tabIndex:0,as:"div","aria-disabled":u,$disabled:u});const Z=r?o.Children.count(r):0;return o.createElement(f,(0,n.Z)({ref:t,onClick:e=>{u||(0,l.Z)(i)&&i(e)},$clickable:m,$active:p,as:s||d,$listStyleType:h},w,g,{$childrenNumber:Z,$alignment:y,$bordered:b}),r)}));y.displayName="ListItem",y.Selector=m.Z,y.Image=h.Z,y.Action=g.Z,y.Content=u.Z,y.Style=f,y.Extra=p.Z,y.sizes={sm:s.zf.SM,md:s.zf.MD};const b=y},76548:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(30808),a=r(27378),o=(r(23615),r(67468));const i=["children"],l=o.ZP.div.withConfig({displayName:"ListItemAction__Root",componentId:"tg-1E1__sc-1uq8xv6-0"})(["display:inline-flex;flex-shrink:0;margin-left:var(--size-spacing-04);"]),s=e=>{let{children:t}=e,r=(0,n.Z)(e,i);return a.createElement(l,r,t)};s.displayName="ListItemAction",s.style=l,s.Style=l;const d=s},84227:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(959),s=r(90496),d=r(85689),c=r(79778);const u=["children","mainText","secondaryText","mainColor","secondaryColor"],p=i.ZP.div.withConfig({displayName:"ListItemContent__Root",componentId:"tg-1E1__sc-1ffisao-0"})(["flex:1 1 auto;min-width:0;",""],(e=>{let{$alignment:t}=e;return t&&t===c.d.top&&(0,i.iv)(["margin-top:var(--size-spacing-02);"])})),m=(0,o.forwardRef)(((e,t)=>{let{children:r,mainText:i,secondaryText:c="",mainColor:m="--neutral-text-high-emphasis",secondaryColor:h="--neutral-text-low-emphasis"}=e,g=(0,a.Z)(e,u);const{size:v,alignment:f}=o.useContext(d.Z);return r?o.createElement(p,(0,n.Z)({ref:t},g,{$alignment:f}),r):(console.warn("Tangram: the props `mainText`, `secondaryText`, `mainColor`, `secondaryColor` is deprecated and will be removed soon!"),o.createElement(p,(0,n.Z)({ref:t},g,{$alignment:f}),o.createElement(l.Z,{as:"div",textColor:m,token:v===s.zf.SM?l.Z.tokens.TEXT_SM_REGULAR:l.Z.tokens.TEXT_MD_REGULAR},i),o.createElement(l.Z,{as:"div",textColor:h,token:v===s.zf.SM?l.Z.tokens.TEXT_XS_REGULAR:l.Z.tokens.TEXT_SM_REGULAR},c)))}));m.displayName="ListItemContent",m.Style=p;const h=m},79226:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468));const l=["children","left","right"],s=i.ZP.div.withConfig({displayName:"ListItemExtra__Root",componentId:"tg-1E1__sc-9uqjkk-0"})(["align-items:center;display:inline-flex;svg{fill:var(--neutral-icon-low-emphasis);}"," ",""],(e=>{let{$left:t}=e;return t&&(0,i.iv)(["padding-right:var(--size-spacing-03);"])}),(e=>{let{$right:t}=e;return t&&(0,i.iv)(["padding-left:var(--size-spacing-03);"])})),d=(0,o.forwardRef)(((e,t)=>{let{children:r,left:i=!1,right:d=!1}=e,c=(0,a.Z)(e,l);return o.createElement(s,(0,n.Z)({ref:t,$left:i,$right:d},c),r)}));d.displayName="ListItemExtra",d.Style=s;const c=d},95778:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(30808),a=r(27378),o=(r(23615),r(67468));const i=["children"],l=o.ZP.div.withConfig({displayName:"ListItemImage__Root",componentId:"tg-1E1__sc-hdtxtx-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);"]),s=e=>{let{children:t}=e,r=(0,n.Z)(e,i);return a.createElement(l,r,t)};s.displayName="ListItemImage",s.Style=l;const d=s},59942:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(25773),a=r(30808),o=r(27378),i=(r(23615),r(67468)),l=r(85689),s=r(79778);const d=["children"],c=i.ZP.div.withConfig({displayName:"ListItemSelector__Root",componentId:"tg-1E1__sc-ranr7f-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);",""],(e=>{let{$alignment:t}=e;return t&&t===s.d.top&&(0,i.iv)(["margin-top:11px;"])})),u=e=>{let{children:t}=e,r=(0,a.Z)(e,d);const{alignment:i}=o.useContext(l.Z);return o.createElement(c,(0,n.Z)({$alignment:i},r),t)};u.displayName="ListItemSelector",u.Style=c;const p=u},79778:(e,t,r)=>{r.d(t,{R:()=>a,d:()=>n});const n={top:"top",center:"center"},a={ul:"ul",ol:"ol",div:"div",nav:"nav",menu:"menu"}},78859:(e,t,r)=>{r.d(t,{Z:()=>a});const n=":not([aria-disabled='true']):not(:has(input[readonly])):not(:has(textarea[readonly]))",a=(0,r(67468).iv)(["&[data-tg-inline-edit='true']{--tg-inline-edit-hover-border:var(--neutral-border-interactive-hover);--tg-inline-edit-focus-border:var(--primary-border);border:0;border-bottom:1px solid transparent;border-radius:0;padding:0;box-sizing:border-box;background-color:transparent;--focus-border-radius:0;--input-background-color:transparent;--input-placeholder-color:var(--neutral-text-disabled);--input-value-color:var(--neutral-text-high-emphasis);&:focus-within{outline:none;}&",":focus-within,&",":focus-within input,&",":focus-within textarea{cursor:text;}&",":not(:focus-within):hover{border-bottom:1px dashed var(--tg-inline-edit-hover-border);}&",":is([aria-invalid='true'],:has(*[aria-invalid='true'])){--tg-inline-edit-hover-border:var(--danger-border);--tg-inline-edit-focus-border:var(--danger-border);}&",":is([aria-invalid='false'],:has(*[aria-invalid='false'])){--tg-inline-edit-hover-border:var(--success-border);--tg-inline-edit-focus-border:var(--success-border);}&",":not(:focus-within):is([aria-invalid='true'],:has(*[aria-invalid='true'])),&",":not(:focus-within):is([aria-invalid='false'],:has(*[aria-invalid='false'])){border-bottom:1px solid var(--tg-inline-edit-hover-border);}&",":focus-within,&",":active{border-bottom:1px solid var(--tg-inline-edit-focus-border);}&[aria-disabled='true']{--input-value-color:var(--neutral-text-disabled);--input-placeholder-color:var(--neutral-text-disabled);}[data-tg-inline-actions]{display:none;flex:0 0 auto;}&:hover [data-tg-inline-actions],&:focus-within [data-tg-inline-actions]{display:flex;}a{display:inline-flex;align-items:center;color:inherit;text-decoration:none;cursor:pointer;svg{--custom-icon-color:var(--input-icon-color);}&:hover,&:focus-visible{svg{--custom-icon-color:var(--neutral-icon-high-emphasis);}}}}"],n,n,n,n,n,n,n,n,n,n)},3859:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(e,t)=>!e||e.trim().length<t},2414:(e,t,r)=>{function n(e){return e&&"object"==typeof e?{enabled:!0,actions:e.actions}:{enabled:Boolean(e),actions:void 0}}r.d(t,{Z:()=>n})},40291:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);function a(e){return 1===(null==e?void 0:e.nodeType)}function o(e){var t;return e&&"current"in e&&(1===(null===(t=e.current)||void 0===t?void 0:t.nodeType)||null===e.current||void 0===e.current)}function i(e){return"object"!=typeof e?null:a(e)?e:o(e)?e.current:null}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"The useElement parameter must be either a React Ref, id string or a HTMLElement";const[r,l]=(0,n.useState)(i(e));return(0,n.useEffect)((()=>{void 0!==e&&l(null!==e?r=>"string"==typeof e?document.getElementById(e):a(e)?e:o(e)?e.current:(console.warn("Tangram: ".concat(t)),r):null)}),[e,t]),r}},64296:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(27378);function a(){const e=(0,n.useRef)(!1);return(0,n.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,n.useCallback)((()=>e.current),[])}},10497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);function a(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const[r,n]of Object.entries(e))if(n!==t[r])return!1;return!0}function o(e){if(null===e||"object"!=typeof e||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}function i(e,t){if(e===t)return!0;const r=Array.isArray(e);if(r!==Array.isArray(t))return!1;if(r){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!i(e[r],t[r]))return!1;return!0}if(!o(e)||!o(t))return!1;const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const a of n){if(!Object.prototype.hasOwnProperty.call(t,a))return!1;if(!i(e[a],t[a]))return!1}return!0}function l(e){let{deep:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(0,n.useRef)(e),o=t?i(e,r.current):a(e,r.current);return o?r.current:(r.current=e,e)}},6904:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(27378),a=r(70116),o=r(64296);function i(){let{ref:e,element:t,callback:r,disabled:i=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const l=(0,o.Z)(),s=(0,n.useCallback)((e=>{let[t]=e;if(!l())return;const n={x:t.boundingClientRect.x,y:t.boundingClientRect.y};null==r||r(n)}),[l,r]);(0,n.useEffect)((()=>{const n=t||(null==e?void 0:e.current);if(!n||i)return;if(!(window&&"IntersectionObserver"in window)){var o;const{x:e=0,y:t=0}=null!==(o=null==n?void 0:n.getBoundingClientRect())&&void 0!==o?o:{};return void r({x:e,y:t})}const{x:l,y:d}=n.getBoundingClientRect(),c=new a.V(s);return null==r||r({x:l,y:d}),c.observe(n),()=>c.disconnect()}),[t,e,i,s,r])}},18919:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=r(64296);function o(){let{ref:e,element:t,callback:r,disabled:o=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=(0,a.Z)(),l=(0,n.useCallback)((e=>{let[t]=e;if(!i())return;const n={width:t.contentRect.width,height:t.contentRect.height};null==r||r(n)}),[i,r]);(0,n.useEffect)((()=>{const n=t||(null==e?void 0:e.current);if(!n||o)return;if(!(window&&"ResizeObserver"in window)){var a;const{width:e=0,height:t=0}=null!==(a=null==n?void 0:n.getBoundingClientRect())&&void 0!==a?a:{};return void r({width:e,height:t})}const{width:i,height:s}=n.getBoundingClientRect(),d=new ResizeObserver(l);return null==r||r({width:i,height:s}),d.observe(n,{box:"border-box"}),()=>d.disconnect()}),[t,e,o,l,r])}},33748:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(27378);function a(e){let{ref:t,element:r,callback:a,disabled:o=!1}=e;(0,n.useEffect)((()=>{if(o)return;if(!(window&&"IntersectionObserver"in window))return void a(!0);const e=r||(null==t?void 0:t.current);if(!e)return;const n=new IntersectionObserver((e=>(e=>{let[{isIntersecting:t}]=e;null==a||a(t)})(e)),{root:null,rootMargin:"0px",threshold:.1});return o||n.observe(e),()=>{n.disconnect()}}),[a,r,t,o])}},84274:(e,t,r)=>{r.d(t,{Z:()=>H});var n=r(25773),a=r(30808),o=r(27378),i=r(31542),l=r(67468),s=r(81161),d=r(40291),c=r(33748),u=r(18919),p=r(6904),m=r(66644),h=r(95979),g=r(43500),v=r(58454);function f(e,t){return(e.overflows.top||e.overflows.bottom)<(t.overflows.top||t.overflows.bottom)?e:t}function y(e){const[t]="string"==typeof e?e.split("-"):e;return["top","bottom"].includes(t)}function b(e){let{anchor:t,anchored:r,viewport:n,side:a,alignment:o,offset:i,availablePlacements:l,history:s}=e;if(null==l||!l.length)return null;const d=function(e){let{anchor:t,anchored:r,viewport:n,side:a,alignment:o,offset:i}=e;const l=function(e){let{anchor:t,anchored:r,side:n,alignment:a,offset:o}=e,i=0;switch(n){case"top":i=t.y-r.height-o;break;case"bottom":i=t.y+t.height+o}switch(a){case"top":i=t.y;break;case"bottom":i=t.y+t.height-r.height}return"center"===a&&["left","right"].includes(n)&&(i=t.y-r.height/2+t.height/2),i}({anchor:t,anchored:r,side:a,alignment:o,offset:i}),s=function(e){let{anchor:t,anchored:r,side:n,alignment:a,offset:o}=e,i=0;switch(n){case"right":i=t.x+t.width+o;break;case"left":i=t.x-r.width-o}switch(a){case"right":i=t.x-r.width+t.width;break;case"left":i=t.x}return"center"===a&&["top","bottom"].includes(n)&&(i=t.x-r.width/2+t.width/2),i}({anchor:t,anchored:r,side:a,alignment:o,offset:i}),d={};return l<0&&(d.top=-1*l),s<0&&(d.left=-1*s),s+r.width>n.width&&(d.right=s+r.width-n.width),l+r.height>n.height&&(d.bottom=l+r.height-n.height),{top:l,left:s,side:a,alignment:o,overflows:d}}({anchor:t,anchored:r,viewport:n,side:a,alignment:o,offset:i}),c=Object.keys(d.overflows||{});if(!c.length)return Object.assign({},d,{maxHeight:n.height-d.top});if(!c.includes(a)){const e=function(e){const t=Object.assign({},e),r=Object.keys(e.overflows||{});for(const n of r){const r=e.overflows[n];"top"===n&&(t.top=t.top+r),"right"===n&&(t.left=t.left-r),"bottom"===n&&(t.top=t.top-r),"left"===n&&(t.left=t.left+r)}return delete t.overflows,t}(d);return Object.assign({},e,{maxHeight:n.height-e.top})}s["".concat(a,"-").concat(o)]=d;const u=l.filter((e=>!(e[0]===a&&e[1]===o)));return u.length?b({anchor:t,anchored:r,viewport:n,side:u[0][0],alignment:u[0][1],offset:i,availablePlacements:u,history:s}):null}function w(e){let{anchor:t,anchored:r,calculatedPosition:n}=e;const a=["top","bottom"].includes(n.side)?"x":"y",o=["top","bottom"].includes(n.side)?"width":"height",i=["top","bottom"].includes(n.side)?"left":"top",l=t[a]-n[i];return{side:function(e){return{top:"bottom",right:"left",bottom:"top",left:"right"}[e]}(n.side),placement:(l+t[o]/2)/r[o]}}function Z(e){let{anchor:t,anchored:r,viewport:n,side:a,alignment:o,offset:i,availablePlacements:l}=e;const s={},d=b({anchor:t,anchored:r,viewport:n,side:a,alignment:o,offset:i,availablePlacements:l,history:s})||function(e){let{anchored:t,history:r}=e;const n=Object.keys(r).filter(y).map((e=>r[e])),a=n.reduce(f,n[0]),o=a.overflows.left?0:a.overflows.right?a.left-a.overflows.right:a.left,i=t.height-(a.overflows.top||a.overflows.bottom);return{top:a.overflows.top?0:a.top,left:o,maxHeight:i,side:a.side,alignment:a.alignment}}({anchored:r,history:s});return Object.assign({},d,{arrow:w({anchor:t,anchored:r,calculatedPosition:d})})}const x=[["bottom","left"],["bottom","center"],["bottom","right"],["top","left"],["top","center"],["top","right"],["left","top"],["left","center"],["left","bottom"],["right","top"],["right","center"],["right","bottom"]],k={clickOutside:"clickOutside",esc:"esc"},E="data-tg-overlays",_="__tangramOverlayKeyCount__",z="The Overlay anchor must be either a React Ref, id string or a HTMLElement",C=["show","keepMounted","noscreen","contentRef","onToggle","children","anchor","side","alignment","offset","availablePlacements","rootComponent"],R="Overlay",S=200,T=["button","[href]","input","select","textarea","[tabindex]"].map((e=>e+":not([tabindex='-1'])")).join(", "),I=l.ZP.div.withConfig({displayName:"Overlay__Content",componentId:"tg-1E1__sc-1cr5z2q-0"})(["position:relative;width:var(--tg-overlay-width,auto);"]),$=l.ZP.div.withConfig({displayName:"Overlay__Backdrop",componentId:"tg-1E1__sc-1cr5z2q-1"})(["transition-property:opacity;transition-timing-function:var(--motion-timing-function-ease-in-out);transition-duration:var(--tg-overlay-motion-duration);display:block;opacity:0.5;position:fixed;top:0;bottom:0;left:0;right:0;width:100vw;height:100vh;background-color:black;pointer-events:auto;&[hidden]{display:block;opacity:0;pointer-events:none;}"]),D=(0,l.ZP)(h.Z).withConfig({displayName:"Overlay__Root",componentId:"tg-1E1__sc-1cr5z2q-2"})(["--tg-overlay-motion-duration:var(--motion-duration-fast);--tg-overlay-box-shadow:var(--shadow-sm);--tg-overlay-content-arrow-size:10px;--tg-overlay-content-arrow-color:var(--neutral-surface);--tg-overlay-content-arrow-box-shadow:var(--tg-overlay-box-shadow);--tg-overlay-content-arrow-min-radius:0;position:fixed;display:block;top:0;bottom:0;left:0;right:0;z-index:calc(var(--tg-overlay-z-index,0) + var(--zindex-5));*[data-tg-overlays]:has(&){width:auto;height:auto;}&:not(:has(> ",")){top:auto;bottom:auto;left:auto;right:auto;}& > ","{transition-property:opacity,transform;transition-timing-function:var(--motion-timing-function-ease-in-out);transition-duration:var(--tg-overlay-motion-duration);position:fixed;max-width:100vw;max-height:var(--tg-overlay-content-max-height,100vh);}&[data-tg-anchored='false'] > ","{top:50%;left:50%;transform:translate(-50%,-50%);}&[data-tg-anchored='true']{--tg-overlay-motion-duration:var(--motion-duration-extra-fast);> ","{top:var(--tg-overlay-content-position-top,-100vh);left:var(--tg-overlay-content-position-left,-100vw);}}&[hidden]{display:block;visibility:hidden;}&[inert]{> ","{opacity:0;pointer-events:none;}&[data-tg-anchored='false'] > ","{transform:translate(-50%,-50%) scale(0.9);}}&[data-tg-anchored='true']{","{transform:initial;}}"],$,I,I,I,I,I,I);function N(){const e=document.querySelector("*[".concat(E,"]"));if(e)return e;const t=document.createElement("div");return t.setAttribute(E,""),document.body.appendChild(t),t}function A(e){if(!e)return S;return function(e){if(!e)return S;const t=e.trim().toLowerCase();if(t.endsWith("ms")){const e=parseFloat(t.slice(0,-1));return isNaN(e)?S:Math.round(e)}if(t.endsWith("s")){const e=parseFloat(t.slice(0,-2));return isNaN(e)?S:Math.round(1e3*e)}return S}(getComputedStyle(e).getPropertyValue("--tg-overlay-motion-duration"))}function P(e){return e.inert||e.hasAttribute("inert")}function L(e){return Number(e.style.getPropertyValue("--tg-overlay-z-index")||"0")}function O(){return Array.from(document.querySelectorAll("[".concat(E,"] > *:not([inert])"))).sort(((e,t)=>L(t)-L(e))).filter((e=>e.querySelector($)))[0]}function M(){return Array.from(document.querySelectorAll("[".concat(E,"] > *:not([inert])"))).filter((e=>e.querySelector($))).sort(((e,t)=>L(t)-L(e)))}function F(e,t,n,a,i,l){const[s,d]=(0,o.useState)(!1),c=(0,o.useRef)(null);return(0,o.useEffect)((()=>{let a;if(n){if(d(!0),!e||!t)return;e.style.setProperty("--tg-overlay-z-index",(r.g[_]=r.g[_]||0,r.g[_]++)),e.hidden=!1,e.removeAttribute("inert"),i||(c.current=document.activeElement,function(e){var t;if(!e)return;null===(t=e.querySelectorAll(T)[0])||void 0===t||t.focus()}(t)),function(){const e=M(),[t,...r]=e;if(!t)return;const n=t.querySelector($);if(n){if(0===r.length)return n.hidden=!1,void(n.style.transitionDuration="");n.style.transitionDuration="0s",r.forEach((e=>{const t=e.querySelector($);t&&(t.style.transitionDuration="0s")})),n.hidden=!1,r.forEach((e=>{const t=e.querySelector($);t&&(t.hidden=!0)}))}}()}else{if(!e||!t)return;const n=A(e);!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e)return;const t=e.querySelector($);if(!t)return;const r=M(),[n]=r.filter((t=>t!==e));if(!n)return t.style.transitionDuration="",void(t.hidden=!0);const a=n.querySelector($);t.style.transitionDuration="0s",a.style.transitionDuration="0s",t.hidden=!0,a.hidden=!1}(e),e.setAttribute("inert",""),function(e){if(!e)return;e.querySelectorAll(T).forEach((e=>e.blur()))}(t),a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return setTimeout(e,t)}((()=>{var t;e.hidden=!0,d(!1),function(){const e=N();Array.from(e.children).some((e=>!e.hidden))||(r.g[_]=0)}(),i||null===(t=c.current)||void 0===t||t.focus()}),n+1)}return()=>{clearTimeout(a)}}),[a,n,e,t,i,l]),s}function j(e,t,r,n){(0,o.useEffect)((()=>{const a=a=>{if(!e||!t||!r)return;if("Escape"!==a.key)return;const o=function(e){if(!e)return null;let t=null,r=-1/0;for(const n of e.children){if(P(n))continue;const e=L(n);e>r&&(r=e,t=n)}return t}(e);o===t&&n(a,k.esc)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}),[e,t,r,n])}function B(e,t,r,n){(0,o.useEffect)((()=>{if(!t||!e||r)return;const a=e=>{if("Tab"!==e.key)return;if(O()!==n)return;e.preventDefault();const t=function(){const e=O();return e?Array.from(document.querySelectorAll("[".concat(E,"] > *:not([inert])"))).sort(((e,t)=>L(e)-L(t))).filter((t=>!t.querySelector($)&&L(t)>L(e)||L(t)===L(e))):[]}().flatMap((e=>Array.from(e.querySelectorAll(T))));if(!t.length)return;let r;r=t.findIndex((e=>e===document.activeElement))||0,r=e.shiftKey?r-1:r+1,-1===r?r=t.length-1:r>t.length-1&&(r=0),t[r].focus()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}),[e,t,r,n])}const q=(0,o.createContext)(!0),V=(0,o.forwardRef)(((e,t)=>{let{show:r=!1,keepMounted:l=!1,noscreen:h=!1,contentRef:v,onToggle:f,children:y,anchor:b,side:w="right",alignment:E="center",offset:_=20,availablePlacements:S=x,rootComponent:T}=e,A=(0,a.Z)(e,C);const P=null!=T?T:D,L=function(){const[e,t]=(0,o.useState)(null);return(0,o.useEffect)((()=>{e||t(N())}),[e]),e}(),[O,M]=(0,o.useState)(null),[V,H]=(0,o.useState)(null),G=(0,m.Z)([t,M]),X=(0,m.Z)([v,H]),U=(0,o.useContext)(q),J=r&&U,W=(0,o.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.clickOutside;return null==f?void 0:f(e,!1,{reason:t})}),[f]),Y=F(O,V,J,r,h,l),K=function(e,t,r,n,a,i){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:20,s=arguments.length>7?arguments[7]:void 0;const m=(0,d.Z)(e,z),h=!m||!n,g=(0,o.useCallback)((e=>{!h&&t&&(e?t.removeAttribute("inert"):t.setAttribute("inert",""))}),[h,t]);(0,c.Z)({element:m,callback:g,disabled:h});const v=(0,o.useCallback)((()=>{if(!m||!r)return;const e=m.getBoundingClientRect(),t=r.getBoundingClientRect(),{top:n,left:o,maxHeight:d,arrow:c}=Z({anchor:e,anchored:t,viewport:{width:window.innerWidth,height:window.innerHeight},side:a,alignment:i,offset:l,availablePlacements:s});r.style.setProperty("--tg-overlay-content-position-top","".concat(n,"px")),r.style.setProperty("--tg-overlay-content-max-height","".concat(d,"px")),r.style.setProperty("--tg-overlay-content-position-left","".concat(o,"px")),r.setAttribute("data-tg-overlay-content-arrow-side",c.side),r.style.setProperty("--tg-overlay-content-arrow-placement",c.placement),r.style.setProperty("--tg-overlay-content-anchor-width","".concat(m.offsetWidth,"px"))}),[r,m,a,i,l,s]);return(0,u.Z)({element:m,callback:v,disabled:h}),(0,u.Z)({element:r,callback:v,disabled:h}),(0,p.Z)({element:m,callback:v,disabled:h}),m}(b,O,V,Y,w,E,_,S);j(L,O,Y,W),function(e,t,r,n,a){(0,o.useEffect)((()=>{if(!t||!e||!r)return;const o=t=>{if(t.target===n||null!=n&&n.contains(t.target))return;if(t.target===e||e.contains(t.target))return;const r=Array.from(e.querySelectorAll("[aria-controls]"));for(const e of r){const r=document.getElementById(e.getAttribute("aria-controls"));if(r&&(t.target===r||r.contains(t.target)))return}a(t)};return document.addEventListener("click",o,!0),()=>{document.removeEventListener("click",o,!0)}}),[e,t,r,n,a])}(V,Y,h,K,W),B(L,Y,h,O);return L?!l&&!Y?null:(0,i.createPortal)(o.createElement(P,(0,n.Z)({},A,{ref:G,hidden:!0,inert:"","data-tg-anchored":!!K}),!h&&o.createElement($,{onClick:W,"aria-hidden":!0,hidden:!0}),o.createElement(I,{ref:X},o.createElement(q.Provider,{value:J},o.createElement(g.Z,{name:R},o.createElement(s.Z,null,y))))),L):null}));V.displayName=R,V.reasonsToHide=k,V.getMotionDuration=A,V.defaultOffset=20,V.Style=D,V.ContentStyle=I,V.BackdropStyle=$,V.Arrow=v.Z;const H=V},58454:(e,t,r)=>{r.d(t,{Z:()=>u});var n,a=r(25773),o=r(27378),i=r(67468);const l=1.41421356237,s=i.ZP.span.withConfig({displayName:"OverlayArrow__Overflow",componentId:"tg-1E1__sc-vlhfbb-0"})(["z-index:2;position:absolute;display:block;width:0;height:0;border:var(--tg-overlay-content-arrow-size) solid transparent;& + *{z-index:1;}*[data-tg-overlay-content-arrow-side='top'] &{border-bottom-color:var(--tg-overlay-content-arrow-color);}*[data-tg-overlay-content-arrow-side='right'] &{border-left-color:var(--tg-overlay-content-arrow-color);}*[data-tg-overlay-content-arrow-side='bottom'] &{border-top-color:var(--tg-overlay-content-arrow-color);}*[data-tg-overlay-content-arrow-side='left'] &{border-right-color:var(--tg-overlay-content-arrow-color);}"]),d=i.ZP.span.withConfig({displayName:"OverlayArrow__Root",componentId:"tg-1E1__sc-vlhfbb-1"})(["z-index:0;position:absolute;display:block;width:calc(var(--tg-overlay-content-arrow-size) * ",");height:calc(var(--tg-overlay-content-arrow-size) * ",");background:var(--tg-overlay-content-arrow-color);box-shadow:var(--tg-overlay-content-arrow-box-shadow);&,& + *{--tg-overlay-content-arrow-placement-min:calc( var(--tg-overlay-content-arrow-min-radius) + var(--tg-overlay-content-arrow-size) );--tg-overlay-content-arrow-placement-ideal:calc( var(--tg-overlay-content-arrow-placement,0) * 100% );--tg-overlay-content-arrow-placement-max:calc( 100% - var(--tg-overlay-content-arrow-placement-min) );}*[data-tg-overlay-content-arrow-side='top'] &{top:0;transform:translate(-50%,-50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='top'] & + *{top:0;transform:translate(-50%,-100%);}*[data-tg-overlay-content-arrow-side='right'] &{right:0;transform:translate(50%,-50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='right'] & + *{right:0;transform:translate(100%,-50%);}*[data-tg-overlay-content-arrow-side='bottom'] &{bottom:0;transform:translate(-50%,50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='bottom'] & + *{bottom:0;transform:translate(-50%,100%);}*[data-tg-overlay-content-arrow-side='left'] &{left:0;transform:translate(-50%,-50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='left'] & + *{left:0;transform:translate(-100%,-50%);}*[data-tg-overlay-content-arrow-side='top'] &,*[data-tg-overlay-content-arrow-side='top'] & + *,*[data-tg-overlay-content-arrow-side='bottom'] &,*[data-tg-overlay-content-arrow-side='bottom'] & + *{left:clamp( var(--tg-overlay-content-arrow-placement-min),var(--tg-overlay-content-arrow-placement-ideal),var(--tg-overlay-content-arrow-placement-max) );}*[data-tg-overlay-content-arrow-side='right'] &,*[data-tg-overlay-content-arrow-side='right'] & + *,*[data-tg-overlay-content-arrow-side='left'] &,*[data-tg-overlay-content-arrow-side='left'] & + *{top:clamp( var(--tg-overlay-content-arrow-placement-min),var(--tg-overlay-content-arrow-placement-ideal),var(--tg-overlay-content-arrow-placement-max) );}"],l,l),c=(0,o.forwardRef)(((e,t)=>o.createElement(o.Fragment,null,o.createElement(d,(0,a.Z)({},e,{ref:t,"aria-hidden":"true"})),n||(n=o.createElement(s,{"aria-hidden":"true"})))));c.displayName="OverlayArrow",c.Style=d,c.OverflowStyle=s;const u=c},56297:(e,t,r)=>{r.d(t,{Z:()=>v});var n,a=r(25773),o=r(30808),i=r(27378),l=(r(23615),r(67468)),s=r(26303),d=r(26703),c=r(66644),u=r(84274);const p=["id","style","label","disabled","show","defaultShow","side","offset","width","maxWidth","children","onToggle"],m=(0,l.ZP)(u.Z).withConfig({displayName:"Tooltip__StyledOverlay",componentId:"tg-1E1__sc-jdyvhj-0"})(["--tg-overlay-content-arrow-size:6px;--tg-overlay-content-arrow-color:var(--neutral-surface-inverse);--tg-overlay-content-arrow-min-radius:var(--border-radius-sm);"]),h=l.ZP.span.withConfig({displayName:"Tooltip__Root",componentId:"tg-1E1__sc-jdyvhj-1"})(["--tg-tooltip-max-width:auto;--tg-tooltip-min-width:auto;--tg-tooltip-width:auto;display:block;border-radius:var(--border-radius-sm);padding:var(--size-spacing-02) var(--size-spacing-03);width:var(--tg-tooltip-width);max-width:var(--tg-tooltip-max-width);min-width:var(--tg-tooltip-min-width);color:var(--neutral-text-inverse);font:var(--text-sm-regular);text-align:center;background:var(--neutral-surface-inverse);"]),g=e=>{let{id:t,style:r={},label:l,disabled:v=!1,show:f,defaultShow:y,side:b="top",offset:w=g.defaultOffset,width:Z,maxWidth:x,children:k,onToggle:E}=e,_=(0,o.Z)(e,p);const z=(0,s.Z)(t),C=(0,i.useRef)(null),R=i.Children.toArray(k),[S,...T]=R,I=i.isValidElement(S)?S.ref:null,$=Object.assign({},r,Z?{"--tg-tooltip-width":Z}:{},x?{"--tg-tooltip-max-width":x}:{}),[D,N]=(0,d.Z)({value:f,defaultValue:y}),A=(0,c.Z)(I?[I,C]:[C]),P=i.isValidElement(S)?i.cloneElement(S,Object.assign({},S.props,{"aria-describedby":z,ref:A})):S;return(0,i.useEffect)((()=>{const e=C.current;if(!e||v)return;const t=(e,t)=>{null==E||E(e,!0,{reason:t||e.type}),N(!0)},r=(e,t)=>{null==E||E(e,!1,{reason:t||e.type}),N(!1)},n=e=>{"Escape"===e.key&&r(e,"esc")};return e.addEventListener("mouseover",t),e.addEventListener("focus",t),e.addEventListener("mouseout",r),e.addEventListener("blur",r),document.addEventListener("keydown",n),()=>{e.removeEventListener("mouseover",t),e.removeEventListener("focus",t),e.removeEventListener("mouseout",r),e.removeEventListener("blur",r),document.removeEventListener("keydown",n)}}),[v,E,N]),(0,i.useEffect)((()=>{v&&N(!1)}),[v,N]),i.createElement(i.Fragment,null,P,T,i.createElement(m,{anchor:C,alignment:"center",side:b,show:!v&&D,offset:w,noscreen:!0,keepMounted:!0},n||(n=i.createElement(u.Z.Arrow,null)),i.createElement(h,(0,a.Z)({},_,{role:"tooltip",id:z,style:$}),l)))};g.displayName="Tooltip",g.Style=h,g.defaultOffset=18;const v=g},11504:(e,t,r)=>{r.d(t,{Z:()=>q});var n=r(25773),a=r(27378),o=r(23615),i=r.n(o),l=r(67468),s=r(22648),d=r.n(s),c=r(45908),u=r(60701),p=r(33065),m=r(959),h=r(87954),g=r(4263),v=r(66101);const f=l.ZP.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - (var(--size-spacing-04) * 2));
  flex-flow: column;
`,y=l.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-spacing-01) 0;
  margin-bottom: var(--size-spacing-01);
`,b=(0,l.ZP)(p.Z)`
  z-index: 1;
`,w=(0,l.ZP)(m.Z)`
  margin: var(--size-spacing-02) 0;
  font: var(--text-md-bold);
  color: var(--neutral-text-low-emphasis);
  text-align: center;
  cursor: default;
  position: absolute;
  left: 0;
  width: 280px;
`,Z=(0,a.forwardRef)(((e,t)=>{let{locale:r=c.Z,...o}=e;const{date:i,changeYear:l}=o;let s=i;return a.createElement(f,(0,n.Z)({ref:t},o),a.createElement(y,null,a.createElement(b,{kind:p.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,u.default)(s)-1),"aria-controls":"headerNavigation"},a.createElement(g.Z,{id:"previous-year",title:"go to previous year",titleId:"previous-year"})),a.createElement(w,{id:"headerNavigation","aria-live":"assertive"},(0,u.default)(s)),a.createElement(b,{kind:p.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,u.default)(s)+1),"aria-controls":"headerNavigation"},a.createElement(v.Z,{id:"next-year",title:"go to next year",titleId:"next-year"}))))}));Z.displayName="DatePicker.YearlyHeader",Z.propTypes={locale:i().object};const x=Z;var k=r(54571),E=r(64083),_=r(87926),z=r(37811),C=r(17752),R=r(5662),S=r(50046),T=r(38095),I=r(2793);const $="48px",D=l.ZP.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - (var(--size-spacing-04) * 2));
  flex-flow: column;
`,N=l.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,A=(0,l.ZP)(p.Z)`
  --button-border-radius: var(--border-radius-md);
  --button-size: var(--size-spacing-05);

  margin-bottom: var(--size-spacing-04);
  z-index: 1;
`,P=(0,l.ZP)(h.Z)`
  --button-size: var(--size-spacing-05);

  margin: auto;
  text-align: center;
  text-transform: inherit;
  width: calc(
    ${"312px"} - 2 * ${$} - (2 * var(--size-spacing-04))
  );
  padding: 0;
  margin-bottom: var(--size-spacing-04);
  color: var(--neutral-text-low-emphasis);
  cursor: pointer;

  &:active:not([disabled]),
  &:hover:not([disabled]) {
    background-color: var(--neutral-surface);
  }

  ${e=>{let{onClick:t}=e;return!t&&l.iv`
      point-events: none;
      outline: none;
      cursor: default;
      color: var(--neutral-text-low-emphasis);

      &:hover:not([disabled]) {
        color: var(--neutral-text-low-emphasis);
      }
    `}}

  ${e=>{let{second:t}=e;return t&&l.iv`
      margin-left: calc(var(--size-spacing-06) + 2 * ${$});
    `}}
`,L=(0,l.ZP)(R.Z)`
  margin: 0;
  padding: 0;
  li {
    padding: var(--size-spacing-01) 0 var(--size-spacing-04);
  }
`,O=(0,a.forwardRef)(((e,t)=>{let{locale:r=c.Z,...o}=e;const{monthsShown:i,date:l,decreaseMonth:s,increaseMonth:d,prevMonthButtonDisabled:f,nextMonthButtonDisabled:y,titleAction:b}=o,w=!S.Z(b)&&{forwardedAs:"div",tabindex:"-1"},Z=Array(i).fill(0);let x=document.getElementsByClassName("react-datepicker__month"),$=l;if(i>1&&x.length){const e=x[0].getAttribute("aria-label").replace("month","").trim().split("-").join("/");$=new Date(`${e}/01`)}return a.createElement(D,(0,n.Z)({ref:t},o),a.createElement(N,null,a.createElement(A,{kind:p.Z.kinds.tertiary,onClick:s,disabled:f,"aria-controls":"headerNavigation"},a.createElement(g.Z,{id:"previous-month",title:"go to previous month",titleId:"previous-month"})),a.createElement(T.Z,{id:"headerNavigation","aria-live":"assertive"},Z.map(((e,t)=>a.createElement(P,(0,n.Z)({key:`header-${t}`,second:!!t,token:m.Z.tokens.TEXT_MD_BOLD,onClick:b,kind:h.Z.kinds.tertiary,size:h.Z.sizes.md},w),`${(0,I.G4)(r)[(0,z.default)((0,_.default)($,t))]} ${(0,u.default)($)}`)))),a.createElement(A,{kind:p.Z.kinds.tertiary,onClick:d,disabled:y,"aria-controls":"headerNavigation"},a.createElement(v.Z,{id:"next-month",title:"go to next month",titleId:"next-month"}))),a.createElement(N,null,Z.map(((e,t)=>a.createElement(L,{as:R.Z.as.ul,key:`weekdays-${t}`},((e,t)=>{const r=(0,k.default)(t,{locale:e});return[].concat([0,1,2,3,4,5,6].map((t=>{const n=(0,E.default)(r,t),o=e.localize.day((0,C.default)(n),{width:"short"});return a.createElement("li",{key:t,className:"react-datepicker__day-name"},o)})))})(r,(0,_.default)($,t)))))))}));O.displayName="DatePicker.MonthlyHeader",O.propTypes={locale:i().object,titleAction:i().func};const M=O,F="40px",j=l.ZP.div`
  width: ${e=>{let{$width:t}=e;return t||"fit-content"}};
  max-width: 100%;

  .react-datepicker-popper {
    z-index: var(--zindex-1);
  }

  .react-datepicker {
    display: flex;
    position: relative;
    font: var(--text-sm-bold);
    color: var(--neutral-text-high-emphasis);
    text-transform: capitalize;
    background-color: var(--neutral-surface);
    border-radius: var(--border-radius-md);
    padding: var(--size-spacing-04);
    margin-top: calc(${"var(--size-spacing-01)"} + 1px);
    width: ${"312px"};
    box-shadow: ${e=>{let{$inline:t}=e;return t?"none":"var(--shadow-sm)"}};

    &__month-container {
      float: left;
    }

    &__month-text,
    &__day,
    &__day-name {
      outline: none;
      display: inline-block;
      line-height: ${F};
      color: var(--neutral-text-high-emphasis);
      text-align: center;
    }

    &__day,
    &__day-name {
      width: ${F};
    }

    &__day-name {
      color: var(--neutral-text-low-emphasis);
    }

    &__month-text,
    &__day {
      cursor: pointer;

      &--today {
        color: var(--primary-text);
        background-color: var(--neutral-surface-low-emphasis);
      }

      &--outside-month,
      &--disabled {
        color: var(--neutral-text-disabled);

        &:hover {
          background-color: transparent;
        }
      }

      &--disabled:hover {
        cursor: not-allowed;
        color: var(--neutral-text-disabled);
      }
    }

    &__month {
      &--selected {
        background-color: var(--primary-surface-high-emphasis);
        color: var(--neutral-text-high-emphasis);
      }
    }

    &__month {
      &--disabled {
        cursor: not-allowed;
        color: var(--neutral-text-disabled);
      }
    }

    &__month-text:hover:not(.react-datepicker__month-text--keyboard-selected),
    /*This isnt a good practice but we need to add a lot of :not to match with Tangram definitioins*/
    &__day:hover:not(.react-datepicker__day--disabled):not(.react-datepicker__day--selected):not(.react-datepicker__day--range-start):not(.react-datepicker__day--range-end) {
      color: var(--neutral-text-high-emphasis);
      background-color: var(--neutral-surface-hover);
    }

    &__day--keyboard-selected:focus.react-datepicker__day--range-start,
    &__day--keyboard-selected:focus.react-datepicker__day--range-end,
    &__day--keyboard-selected.react-datepicker__day--selected,
    &__day--selected:not(.react-datepicker__day--disabled),
    &__day--selected:hover:not(.react-datepicker__day--disabled),
    &__month-text--keyboard-selected {
      background-color: var(--primary-surface-high-emphasis);
      color: var(--neutral-text-high-emphasis);
    }

    &__day-name {
      font: var(--text-xs-bold);
    }

    &__day-names {
      margin: var(--size-spacing-04) auto var(--size-spacing-03) auto;
    }

    &__monthPicker {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      row-gap: var(--size-spacing-04);
    }

    &__month-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: var(--size-spacing-02);
    }

    &__month-text {
      width: 64px;
      line-height: 64px;
    }

    ${e=>{let{$yearlyView:t}=e;return t?l.iv`
          height: 308px;
          overflow: hidden;
          &__month {
            padding-top: calc(
              24px + var(--size-spacing-05)
            ); /** 24px is the size of custom header for year view */
          }
        `:l.iv`
        &__month {
          padding-top: 76px; /** 76px is the size of custom header for month view */
        }
      `}}

    ${e=>{let{$monthsShown:t}=e;return t&&l.iv`
        width: calc(
          (40px * 14) + var(--size-spacing-06) + (2 * var(--size-spacing-04)) +
            2px
        );
        &__month-container:last-child {
          margin-left: var(--size-spacing-06);
        }
      `}}

    &__day-names {
      display: none;
    }
  }
`,B=(0,a.forwardRef)(((e,t)=>{let{range:r,className:o,titleAction:i,placeholder:l,position:u=B.positions.bottom,selected:p=null,locale:m=c.Z,double:h=!1,yearlyView:g=!1,inline:v=!1,startDate:f=null,endDate:y=null,onChange:b=(()=>{}),dateFormat:w="dd/MM/yyyy",width:Z,customInput:k,inlineEdit:E=!1,error:_=!1,suffix:z,disabled:C,...R}=e;(0,s.registerLocale)("locale",m);const S=(0,a.useRef)(t),[T,I]=(0,a.useState)(!1),$=(0,a.useRef)(!0),D=(0,a.useRef)(),N=(0,a.useRef)(),A=(0,a.useRef)(),P=h?2:1;(0,a.useLayoutEffect)((()=>{if($.current)return D.current=p,N.current=f,A.current=y,void($.current=!1);const e=D.current&&!p,t=N.current&&!f,r=A.current&&!y;if(!S.current?.calendar?.componentNode)return;if(e||t||r){S.current.calendar.componentNode.querySelectorAll(".react-datepicker__day--selected, .react-datepicker__day--keyboard-selected").forEach((e=>{e.classList.remove("react-datepicker__day--selected"),e.classList.remove("react-datepicker__day--keyboard-selected")}))}const n=S.current.calendar.componentNode.querySelector(".react-datepicker__day--keyboard-selected"),a=S.current.calendar.componentNode.querySelector(".react-datepicker__day--selected");n&&a&&(n.classList.remove("react-datepicker__day--keyboard-selected"),a.classList.add("react-datepicker__day--keyboard-selected")),D.current=p,N.current=f,A.current=y}),[p,f,y,v]),(0,a.useLayoutEffect)((()=>{if(g&&(T||v)){if(!S.current?.calendar?.componentNode)return;const e=Array.from(S.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-text"));S.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-wrapper").forEach((t=>{const r=e.splice(0,4);if(r.length)return r.map((e=>t.appendChild(e)));t.style.display="none"}))}}),[g,T,v]);const L=(0,a.isValidElement)(k)?(0,a.cloneElement)(k,{calendarOpen:T}):k;return a.createElement(j,{$monthsShown:h,$yearlyView:g,className:o,$inline:v,$width:Z,"data-tg-inline-edit":E?"true":void 0,"data-tg-error":E&&_?"true":void 0,"data-tg-calendar-open":T?"true":void 0,"aria-disabled":!!C||void 0},a.createElement(d(),(0,n.Z)({selected:p,onCalendarClose:()=>I(!1),onCalendarOpen:()=>I(!0),renderCustomHeader:e=>(e=>g?a.createElement(x,(0,n.Z)({locale:m},e)):a.createElement(M,(0,n.Z)({titleAction:i,monthsShown:P,locale:m},e)))(e),locale:"locale",monthsShown:P,popperPlacement:u,showPopperArrow:!1,showMonthYearPicker:g,inline:v,ref:S,placeholderText:l,startDate:f,endDate:y,onChange:b,dateFormat:w,customInput:L,disabled:C},R)))}));B.displayName="DatePickerBase",B.positions={top:"top-start",bottom:"bottom-start"},B.propTypes={position:i().oneOf([B.positions.top,B.positions.bottom]),selected:i().instanceOf(Date),startDate:i().instanceOf(Date),endDate:i().instanceOf(Date),inline:i().bool,onChange:i().func,locale:i().object,dateFormat:i().string,double:i().bool,yearlyView:i().bool,titleAction:i().func,placeholder:i().string};const q=B},81583:(e,t,r)=>{r.d(t,{Z:()=>R});var n=r(25773),a=r(27378),o=r(23615),i=r.n(o),l=r(67468),s=r(45908),d=r(38095),c=r(75387),u=r(61380),p=r(55575),m=r(67425),h=r(3859),g=r(73647),v=r(41703),f=r(2793),y=r(15294);const b={IconButton:{props:{kind:"neutral",size:"sm"}}},w=(0,l.ZP)(d.Z).attrs({gap:1,verticalAlign:d.Z.verticalAlignments.center})`
  ${c.Z.Style} {
    ${c.Z.SmallStyle}

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
  }

  [data-tg-inline-edit='true'] & ${c.Z.Style} {
    &:focus-within {
      outline: none;
    }

    &:focus-visible {
      ${u.Z.Rules}
    }
  }

  > svg {
    --custom-icon-color: var(--input-icon-color);
  }
`,Z=(0,l.ZP)(p.Z)`
  &[data-tg-inline-edit='true'] {
    ${y.L3}
    border-bottom: 1px solid transparent;
  }

  &[data-tg-inline-edit='true']:has(input[data-tg-calendar-open='true']):not(:has(input:disabled)):not(:has(input[aria-invalid='true'])) {
    border-bottom: 1px solid var(--primary-border);
  }

  &[data-tg-inline-edit='true']${y.Nc}:is([aria-invalid='true'], :has(*[aria-invalid='true'])) {
    --tg-inline-edit-hover-border: var(--danger-border);
    --tg-inline-edit-focus-border: var(--danger-border);

    &,
    &:hover,
    &:not(:focus-within):hover,
    &:focus,
    &:focus-within,
    &:active,
    &:has(input[data-tg-calendar-open='true']) {
      border-bottom: 1px solid var(--danger-border);
    }
  }
`,x=l.ZP.span`
  display: inline-flex;
  align-items: center;
  font: var(--text-md-bold);
  background-color: var(--neutral-surface);

  [data-tg-inline-edit='true'] & {
    background-color: transparent;
    padding-inline-end: var(--size-spacing-02);
  }
`,k=l.ZP.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius-md);
  background-color: var(--neutral-surface);

  &:has([data-tg-inline-edit='true']) {
    background-color: transparent;
  }

  > ${Z} {
    flex: 1;
    min-width: 0;
  }
`;function E(e){e.stopPropagation()}function _(){return a.createElement(v.Z,{title:"Datepicker",titleId:"datepicker-input"})}function z(e){let{children:t}=e;return t?a.createElement(w,{"data-tg-inline-actions":"",onMouseDown:E,onClick:E},a.createElement(m.Z,{spec:b},t)):null}const C=(0,a.forwardRef)(((e,t)=>{let{value:r,className:o,startDate:i="",endDate:l="",onStartChange:d=(()=>{}),onEndChange:c=(()=>{}),onChange:u=(()=>{}),firstInputRef:p=null,secondInputRef:m=null,dateFormat:v="dd/MM/yyyy",locale:b=s.Z,double:w=!1,inlineEdit:E=!1,error:C=!1,calendarOpen:R=!1,onFocus:S,onBlur:T,...I}=e;const[$,D]=(0,a.useState)(i),[N,A]=(0,a.useState)(l),P=(0,a.useRef)(null),L=(0,a.useRef)(null),{enabled:O,actions:M}=(0,y.wX)(E),{keyboardFocusAttr:F,onTabFocusCapture:j,onTabBlurCapture:B}=function(e){const[t,r]=(0,a.useState)(!1),n=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{if(e)return document.addEventListener("keydown",t,!0),document.addEventListener("mousedown",a,!0),()=>{document.removeEventListener("keydown",t,!0),document.removeEventListener("mousedown",a,!0)};function t(e){"Tab"===e.key&&(n.current=!0)}function a(){n.current=!1,r(!1)}r(!1)}),[e]),{keyboardFocusAttr:t?"true":void 0,onTabFocusCapture(){r(n.current)},onTabBlurCapture(){r(!1)}}}(O);(0,a.useEffect)((()=>{D(i)}),[i]),(0,a.useEffect)((()=>{A(l)}),[l]);const q=e=>{j(),S?.(e)},V=e=>{B(),T?.(e)},H=O&&M?a.createElement(z,null,M):null,G=R?"true":void 0,X={onChange:e=>{const t=!h.Z(e.target.value,v.length);g.Z(e.target,[P.current])&&(D(e.target.value),t&&(d((0,f.sG)(e.target.value,v,b)),u(e))),g.Z(e.target,[L.current])&&(A(e.target.value),t&&(c((0,f.sG)(e.target.value,v,b)),u(e)))},onFocus:q,onBlur:V};return a.createElement(k,{className:w?o:void 0,ref:w?t:void 0,"data-tg-keyboard-focus":w?F:void 0},w?a.createElement(a.Fragment,null,a.createElement(Z,(0,n.Z)({prefix:_(),rootRef:P,ref:p,className:"range-start datepicker-input",type:"text",value:$},I,X)),a.createElement(x,null,"-"),a.createElement(Z,(0,n.Z)({rootRef:L,ref:m,className:"range-end datepicker-input",type:"text",value:N},I,X)),H):a.createElement(Z,(0,n.Z)({prefix:_(),value:r,onChange:u,className:`datepicker-input ${o||""}`,inlineEdit:E,error:C,"data-tg-calendar-open":G,"data-tg-keyboard-focus":F},I,{onFocus:q,onBlur:V,ref:t})))}));C.displayName="DatePickerInput",C.Style=k,C.propTypes={placeholder:i().string,startDate:i().string,endDate:i().string,onStartChange:i().func,onEndChange:i().func,locale:i().object,dateFormat:i().string,double:i().bool,inlineEdit:i().oneOfType([i().bool,i().shape({actions:i().node})]),error:i().bool,firstInputRef:i().oneOfType([i().func,i().shape({current:i().any})]),secondInputRef:i().oneOfType([i().func,i().shape({current:i().any})])};const R=C},12958:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(25773),a=r(27378),o=r(23615),i=r.n(o),l=r(67468),s=r(45908),d=r(61380),c=r(55575),u=r(78859),p=r(11504),m=r(81583),h=r(2793),g=r(15294);const v=(0,l.ZP)(p.Z)`
  ${e=>{let{$width:t}=e;return t&&l.iv`
      width: ${t};
    `}}

  border-radius: var(--border-radius-md);

  ${e=>{let{inline:t,inlineEdit:r}=e;if(!t&&!r)return l.iv`
      ${d.Z}

      border: 1px solid var(--neutral-border-interactive);

      :hover,
      :focus-within {
        border-color: var(--neutral-border-interactive-hover);
        border-radius: var(--border-radius-md);
      }
    `}}

  ${c.Z.Style} {
    border: 0;
    box-shadow: none;
    background-color: transparent;

    &:focus-within {
      outline: 0;
      box-shadow: none;
    }
  }

  ${u.Z}

  &[data-tg-inline-edit='true'] {
    background-color: transparent;
    border-radius: 0;

    ${m.Z.Style} {
      background-color: transparent;
      border-radius: 0;
    }

    ${c.Z.Style} {
      --input-placeholder-color: inherit;
      --input-value-color: inherit;
      --input-icon-color: inherit;
      --input-background-color: transparent;

      height: var(--input-height);
      padding: 0;
      border-radius: 0;
    }

    ${g.L3}
    border-bottom: 1px solid transparent;

    &${g.Nc}[data-tg-calendar-open='true']:not(
        [data-tg-error='true']
      ) {
      border-bottom: 1px solid var(--primary-border);
    }

    &[data-tg-error='true']${g.Nc} {
      --tg-inline-edit-hover-border: var(--danger-border);
      --tg-inline-edit-focus-border: var(--danger-border);

      &,
      &:hover,
      &:not(:focus-within):hover,
      &:focus,
      &:focus-within,
      &:active,
      &[data-tg-calendar-open='true'] {
        border-bottom: 1px solid var(--danger-border);
      }
    }
  }

  .react-datepicker {
    &__day {
      &--in-range,
      &--in-selecting-range {
        background-color: var(--primary-surface-low-emphasis);
      }

      &--range-start,
      &--selecting-range-start,
      &--range-end,
      &--selecting-range-end {
        background-color: var(--primary-surface-high-emphasis);
        color: var(--neutral-text-high-emphasis);
      }
    }
  }
`,f=(0,l.ZP)(m.Z)`
  border: 0;
  height: 38px;
  flex: 1;
  min-width: 0;
`,y=(0,a.forwardRef)(((e,t)=>{let{onPickStart:r,startDate:o,endDate:i=null,onSelectStart:l=(()=>{}),onSelectEnd:d=(()=>{}),locale:c=s.Z,dateFormat:u="dd/MM/yyyy",width:p,position:m=y.positions.bottom,inlineEdit:g=!1,error:b=!1,...w}=e;const Z=(0,a.useMemo)((()=>o||new Date),[o]),x=(0,a.useRef)(null),k=(0,a.useRef)(null),[E,_]=(0,a.useState)(Z),[z,C]=(0,a.useState)(i),[R,S]=(0,a.useState)(!0),T=(0,a.useRef)(!1);(0,a.useEffect)((()=>{T.current?T.current=!1:(_((e=>e?.getTime()!==Z?.getTime()?Z:e)),C((e=>e?.getTime()!==i?.getTime()?i:e)))}),[Z,i]);const I=e=>{T.current=!0,_(e),C(null),l(e),k.current&&k.current.focus()},$=e=>{T.current=!0,C(e),d(e)};return a.createElement(v,(0,n.Z)({ref:t,$width:p,onChange:e=>{R?I(e):$(e),S(!R)},shouldCloseOnSelect:!R,selectsStart:R,selectsEnd:!R,startDate:E,minDate:R?void 0:E,endDate:z,locale:c,inlineEdit:g,error:b,customInput:a.createElement(f,{startDate:(0,h.VR)(E,{dateFormat:u,locale:c}),endDate:(0,h.VR)(z,{dateFormat:u,locale:c}),onStartChange:I,onEndChange:$,dateFormat:u,locale:c,firstInputRef:x,secondInputRef:k,double:!0,inlineEdit:g}),position:m},w))}));y.displayName="DateRangePicker",y.positions=p.Z.positions,y.propTypes={dateFormat:i().string,endDate:i().instanceOf(Date),inline:i().bool,locale:i().object,width:i().string,onSelectEnd:i().func,onSelectStart:i().func,position:i().oneOf([y.positions.top,y.positions.bottom]),startDate:i().instanceOf(Date),minDate:i().instanceOf(Date),maxDate:i().instanceOf(Date),inlineEdit:i().oneOfType([i().bool,i().shape({actions:i().node})]),error:i().bool};const b=y},15294:(e,t,r)=>{r.d(t,{L3:()=>l,Nc:()=>i,wX:()=>o});var n=r(67468),a=r(61380);function o(e){return e&&"object"==typeof e?{enabled:!0,actions:e.actions}:{enabled:Boolean(e),actions:void 0}}const i=":not([aria-disabled='true']):not(:has(input[readonly])):not(:has(textarea[readonly]))",l=n.iv`
  &:focus-within:not(:has([data-tg-keyboard-focus='true'])) {
    outline: none;
  }

  &:has([data-tg-keyboard-focus='true'])${i} {
    ${a.Z.Rules}
  }
`},2793:(e,t,r)=>{r.d(t,{G4:()=>i,VR:()=>s,sG:()=>l});var n=r(2345),a=r(44720),o=r(52993);const i=e=>{const t=[];for(let r=0;r<12;r++)t.push(e.localize.month(r));return t};function l(e,t,r){let n=(0,o.default)(e,t,new Date,{locale:r});return(0,a.default)(n)?n:null}function s(e,t){let{dateFormat:r,locale:a}=t;return e&&function(e,t,r){return(0,n.default)(e,t,{locale:r||null,awareOfUnicodeTokens:!0})}(e,Array.isArray(r)?r[0]:r,a)||""}},41703:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,o=r(25773),i=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,i.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"}))):l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},4263:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,o=r(25773),i=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,i.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"}))):l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},66101:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,o=r(25773),i=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,i.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"}))):l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},44706:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,o=r(25773),i=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,i.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M11.429 3c-1.182 0-2.143 1.009-2.143 2.25v9c0 1.241.96 2.25 2.143 2.25h6.428C19.04 16.5 20 15.491 20 14.25V7.198c0-.612-.238-1.2-.66-1.625L17.41 3.626C17.01 3.225 16.477 3 15.925 3H11.43zM7.143 7.5C5.96 7.5 5 8.509 5 9.75v9C5 19.991 5.96 21 7.143 21h6.428c1.182 0 2.143-1.009 2.143-2.25v-.563h-2.143v.563H7.143v-9h.536V7.5h-.536z"}))):l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M11.429 3c-1.182 0-2.143 1.009-2.143 2.25v9c0 1.241.96 2.25 2.143 2.25h6.428C19.04 16.5 20 15.491 20 14.25V7.198c0-.612-.238-1.2-.66-1.625L17.41 3.626C17.01 3.225 16.477 3 15.925 3H11.43zM7.143 7.5C5.96 7.5 5 8.509 5 9.75v9C5 19.991 5.96 21 7.143 21h6.428c1.182 0 2.143-1.009 2.143-2.25v-.563h-2.143v.563H7.143v-9h.536V7.5h-.536z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},73700:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,o=r(25773),i=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,i.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M11.983 3a8.97 8.97 0 00-6.2 2.493L4.487 4.197C3.938 3.647 3 4.037 3 4.812v4.865c0 .482.39.871.871.871h4.865c.776 0 1.165-.938.616-1.486L7.837 7.546a6.052 6.052 0 014.109-1.643c3.353-.028 6.18 2.685 6.15 6.15-.027 3.286-2.691 6.044-6.096 6.044a6.052 6.052 0 01-4.015-1.508.435.435 0 00-.594.02l-1.44 1.44a.436.436 0 00.018.632A9 9 0 0021 12c.001-4.966-4.05-9.01-9.015-9.001z"}))):l.createElement("svg",(0,o.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M11.983 3a8.97 8.97 0 00-6.2 2.493L4.487 4.197C3.938 3.647 3 4.037 3 4.812v4.865c0 .482.39.871.871.871h4.865c.776 0 1.165-.938.616-1.486L7.837 7.546a6.052 6.052 0 014.109-1.643c3.353-.028 6.18 2.685 6.15 6.15-.027 3.286-2.691 6.044-6.096 6.044a6.052 6.052 0 01-4.015-1.508.435.435 0 00-.594.02l-1.44 1.44a.436.436 0 00.018.632A9 9 0 0021 12c.001-4.966-4.05-9.01-9.015-9.001z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},32182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>E,frontMatter:()=>f,inlineEditActions:()=>x,metadata:()=>b,toc:()=>Z});var n=r(25773),a=r(27378),o=r(35318),i=r(80621),l=r(82544),s=r(23389),d=r(54479),c=r(94099),u=r(12958),p=r(33065),m=r(29478),h=r(73700),g=r(44706),v=r(56297);const f={title:"DateRangePicker",description:"Permite que a pessoa selecione um intervalo entre duas datas atrav\xe9s de um calend\xe1rio."},y=void 0,b={unversionedId:"components/daterangepicker",id:"components/daterangepicker",title:"DateRangePicker",description:"Permite que a pessoa selecione um intervalo entre duas datas atrav\xe9s de um calend\xe1rio.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/daterangepicker.md",sourceDirName:"components",slug:"/components/daterangepicker",permalink:"/tangram-doc/docs/components/daterangepicker",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/daterangepicker.md",tags:[],version:"current",frontMatter:{title:"DateRangePicker",description:"Permite que a pessoa selecione um intervalo entre duas datas atrav\xe9s de um calend\xe1rio."},sidebar:"mySidebar",previous:{title:"DatePicker",permalink:"/tangram-doc/docs/components/datepicker"},next:{title:"Dropfile",permalink:"/tangram-doc/docs/components/dropfile"}},w={},Z=[{value:"Localiza\xe7\xe3o",id:"localization",level:2},{value:"Edi\xe7\xe3o em linha",id:"inline-edit",level:2},{value:"Feedback",id:"feedback",level:2}],x=(0,o.kt)(a.Fragment,null,(0,o.kt)(v.Z,{label:"Desfazer",mdxType:"Tooltip"},(0,o.kt)(p.Z,{"aria-label":"Desfazer",mdxType:"IconButton"},(0,o.kt)(h.Z,{title:"Desfazer",mdxType:"Undo"}))),(0,o.kt)(v.Z,{label:"Copiar",mdxType:"Tooltip"},(0,o.kt)(p.Z,{"aria-label":"Copiar",mdxType:"IconButton"},(0,o.kt)(g.Z,{title:"Copiar",mdxType:"Copy"})))),k={toc:Z,inlineEditActions:x};function E(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{current:"docs",name:"daterangepicker",mdxType:"ComponentTab"}),(0,o.kt)("p",null,"O ",(0,o.kt)("inlineCode",{parentName:"p"},"DateRangePicker")," permite a sele\xe7\xe3o de um intervalo entre duas datas, atrav\xe9s de um calend\xe1rio."),(0,o.kt)(d.Z,{mdxType:"CardGrid"},(0,o.kt)(d.D,{centered:!0,mdxType:"CardGridItem"},(0,o.kt)(u.Z,{mdxType:"DateRangePicker"}))),(0,o.kt)("h2",{id:"localization"},"Localiza\xe7\xe3o"),(0,o.kt)("p",null,"Atrav\xe9s da propriedade ",(0,o.kt)("inlineCode",{parentName:"p"},"locale"),", o ",(0,o.kt)("inlineCode",{parentName:"p"},"DateRangePicker")," permite que as informa\xe7\xf5es exibidas no calend\xe1rio estejam de acordo com a localiza\xe7\xe3o informada."),(0,o.kt)("p",null,"A formata\xe7\xe3o de data ",(0,o.kt)("strong",{parentName:"p"},"n\xe3o \xe9 feita automaticamente"),", com base no ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," recebido. Para formatar a data use a propriedade dateFormat.Para mais detalhes acesse nossa aba de ",(0,o.kt)(s.Z,{href:"../../../code/components/daterangepicker/#daterangepicker-dateformat",mdxType:"Link"},"API do componente"),"."),(0,o.kt)(d.Z,{mdxType:"CardGrid"},(0,o.kt)(d.D,{centered:!0,mdxType:"CardGridItem"},(0,o.kt)(c.Z,{mdxType:"Localization"}))),(0,o.kt)("h2",{id:"inline-edit"},"Edi\xe7\xe3o em linha"),(0,o.kt)("p",null,"A edi\xe7\xe3o em linha altera o estilo visual padr\xe3o do ",(0,o.kt)("inlineCode",{parentName:"p"},"DateRangePicker")," em todos os estados. O tipo do campo n\xe3o muda: continua um ",(0,o.kt)("inlineCode",{parentName:"p"},"DateRangePicker"),", usado em telas em que o intervalo \xe9 um valor edit\xe1vel em linha. O label n\xe3o \xe9 obrigat\xf3rio. In\xedcio, h\xedfen e t\xe9rmino compartilham uma caixa. N\xe3o use ",(0,o.kt)("inlineCode",{parentName:"p"},"inlineEdit")," no lugar de ",(0,o.kt)("inlineCode",{parentName:"p"},"inline"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," continua igual. As a\xe7\xf5es entram em ",(0,o.kt)("inlineCode",{parentName:"p"},"inlineEdit={{ actions }}"),", uma vez depois da data final. Ficam vis\xedveis no hover e no foco. Envolva cada ",(0,o.kt)("inlineCode",{parentName:"p"},"IconButton")," com um ",(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip"),", um por a\xe7\xe3o."),(0,o.kt)(d.Z,{mdxType:"CardGrid"},(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(u.Z,{id:"daterangepicker-inline-edit-unlabeled",inlineEdit:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(m.Z,{htmlFor:"daterangepicker-inline-edit-name",mdxType:"FormLabel"},"Campo normal"),(0,o.kt)(u.Z,{id:"daterangepicker-inline-edit-name",inlineEdit:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(m.Z,{htmlFor:"daterangepicker-inline-edit-error",mdxType:"FormLabel"},"Campo com erro"),(0,o.kt)(u.Z,{id:"daterangepicker-inline-edit-error",inlineEdit:!0,error:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(m.Z,{htmlFor:"daterangepicker-inline-edit-disabled",mdxType:"FormLabel"},"Campo disabled"),(0,o.kt)(u.Z,{id:"daterangepicker-inline-edit-disabled",inlineEdit:!0,disabled:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(m.Z,{htmlFor:"daterangepicker-inline-edit-readonly",mdxType:"FormLabel"},"Campo readOnly"),(0,o.kt)(u.Z,{id:"daterangepicker-inline-edit-readonly",inlineEdit:!0,readOnly:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,o.kt)(d.D,{mdxType:"CardGridItem"},(0,o.kt)(u.Z,{id:"daterangepicker-inline-edit",inlineEdit:{actions:x},startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"}))),(0,o.kt)("h2",{id:"feedback"},"Feedback"),(0,o.kt)(l.Z,{mdxType:"FeedbackBlock"}))}E.isMDXComponent=!0}}]);