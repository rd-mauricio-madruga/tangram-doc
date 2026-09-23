"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7556],{54479:(e,t,r)=>{r.d(t,{D:()=>u,Z:()=>s});var n=r(25773),a=r(27378),i=r(67468),o=r(45666);const l=i.ZP.div`
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
`;const s=function(e){let{children:t,columns:r=1,...i}=e;return a.createElement(o.Z,null,(()=>a.createElement(l,(0,n.Z)({$columns:r},i),t)))};var d=r(89620);const c=(0,i.ZP)(d.Z)`
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
`;const u=function(e){let{children:t,featured:r=!1,centered:n=!1,className:i}=e;return a.createElement(c,{$featured:r,$centered:n,className:i},t)}},94099:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(27378),a=r(79011),i=r(12958),o=r(99876),l=r(18225);function s(){return n.createElement(n.Fragment,null,n.createElement(a.Z.Control,null,n.createElement(a.Z.Label,{htmlFor:"enUS"},"enUS"),n.createElement(i.Z,{id:"enUS",name:"enUS",locale:o.Z,dateFormat:"MM/dd/yyyy",placeholder:"Select a date"})),n.createElement(a.Z.Control,null,n.createElement(a.Z.Label,{htmlFor:"ptBR"},"ptBR (default)"),n.createElement(i.Z,{id:"ptBR",name:"ptBR",placeholder:"Selecione uma data"})),n.createElement(a.Z.Control,null,n.createElement(a.Z.Label,{htmlFor:"es"},"es"),n.createElement(i.Z,{id:"es",name:"es",locale:l.Z,placeholder:"Seleccione una fecha"})))}},23389:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(25773),a=r(27378),i=r(62957),o=r(85433);function l(e){let{children:t,...r}=e;return a.createElement(o.Z,(0,n.Z)({as:i.Z},r),t)}},87954:(e,t,r)=>{r.d(t,{Z:()=>v});var n,a=r(25773),i=r(30808),o=r(27378),l=r(67468),s=(r(23615),r(63559)),d=r(70421),c=r(75387),u=r(26503);const p=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],m="Button",h=(0,l.ZP)(c.Z).withConfig({displayName:"Button__Root",componentId:"tg-1E1__sc-7cbhwm-0"})([""]),g=(0,d.Z)(m,(0,o.forwardRef)(((e,t)=>{let{disabled:r,as:l,children:d,type:c=g.types.button,kind:m=g.kinds.primary,size:v=g.sizes.md,startIcon:f,endIcon:y,ia:b=!1,loading:w=!1,fluid:Z=!1}=e,x=(0,i.Z)(e,p);return o.createElement(h,(0,a.Z)({ref:t,loading:w,fluid:Z,forwardedAs:l,size:v,disabled:r||w,kind:m,type:c,ia:b},x),w?o.createElement(u.Z,{size:u.Z.sizes.sm}):b?f||n||(n=o.createElement(s.Z,{title:"IA","aria-hidden":"true"})):f,d,y)})));g.displayName=m,g.sizes=c.Z.sizes,g.kinds=c.Z.kinds,g.types=c.Z.types;const v=g},67425:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(27378),a=(r(23615),r(10497)),i=r(96287),o=r(1205);const l=Object.freeze({});function s(e,t){if(!t)return t;const r=e?Object.assign({},e,t):Object.assign({},t);var n,a;return n=t,a="props",Object.prototype.hasOwnProperty.call(n,a)&&(r.props=function(e,t){if(!t)return t;const r=e?Object.assign({},e):{};return Object.keys(t).forEach((e=>{t[e]===i.p?delete r[e]:r[e]=t[e]})),r}(null==e?void 0:e.props,t.props)),r}const d=e=>{let{children:t,spec:r}=e;const i=(0,n.useContext)(o.Z),d=(0,a.Z)(r||l,{deep:!0}),c=(0,n.useMemo)((()=>function(e,t){const r=Object.keys(t);return 0===r.length?e:r.reduce(((r,n)=>(r[n]=s(e[n],t[n]),r)),Object.assign({},e))}(i,d)),[i,d]);return n.createElement(o.Z.Provider,{value:c},t)};d.displayName="ComponentsConfig",d.unset=i.p;const c=d},81161:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378),a=(r(23615),r(10497)),i=r(1205);const o=e=>{let{children:t,components:r}=e;const o=(0,n.useContext)(i.Z),l=(0,a.Z)(r?"string"==typeof r?[r]:r:[]),s=(0,n.useMemo)((()=>0===l.length?{}:Object.fromEntries(Object.entries(o).filter((e=>{let[t]=e;return!l.includes(t)})))),[o,l]);return n.createElement(i.Z.Provider,{value:s},t)};o.displayName="ResetComponentsConfig";const l=o},79011:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(25773),a=r(27378),i=r(67468),o=r(85901),l=r(17717),s=r(66677),d=r(29478),c=r(61778),u=r(24338);const p=i.ZP.form.withConfig({displayName:"Form__Root",componentId:"tg-1E1__sc-d5k6eq-0"})([""," display:block;margin:0;padding:0;"],o.Z),m=(0,a.forwardRef)(((e,t)=>a.createElement(p,(0,n.Z)({},e,{ref:t}))));m.displayName="Form",m.Style=p,m.Control=l.Z,m.ControlLabel=s.Z,m.Label=d.Z,m.Group=c.Z,m.Feedback=u.Z;const h=m},17717:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(85901),s=r(74333),d=r(24338),c=r(29478);const u=["children","disabled","error","success","required","inline"],p=o.ZP.div.withConfig({displayName:"FormControl__Root",componentId:"tg-1E1__sc-11hy1kc-0"})([""," border:none;padding:0;margin:0 0 var(--size-spacing-04) 0;",""],l.Z,(e=>{let{$inline:t}=e;return t?(0,o.iv)(["display:inline-flex;align-items:center;margin-bottom:0;margin-right:var(--size-spacing-04);"]):(0,o.iv)(["&:has([data-tg-inline-edit='true']) > ","{margin-bottom:var(--size-spacing-01);}&:has([data-tg-inline-edit='true']) > ","{margin-top:var(--size-spacing-01);}"],c.Z.Style,d.Z.Style)})),m=(0,i.forwardRef)(((e,t)=>{let{children:r=null,disabled:o=!1,error:l=!1,success:d=!1,required:c=!1,inline:m=!1}=e,h=(0,a.Z)(e,u);const g=(0,i.useMemo)((()=>({inline:m,required:c,disabled:o,error:l,success:d})),[m,c,o,l,d]);return i.createElement(s.Z.Provider,{value:g},i.createElement(p,(0,n.Z)({ref:t,$inline:m},h),r))}));m.displayName="FormControl",m.Context=s.Z,m.Style=p;const h=m},74333:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(27378).createContext({})},66677:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(25773),a=r(30808),i=r(27378),o=r(23615),l=r.n(o),s=r(67468),d=r(85901),c=r(959);const u=["children","inverted","disabled","error"],p=(0,s.ZP)(c.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"tg-1E1__sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{$error:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),m=(0,i.forwardRef)(((e,t)=>{let{children:r,inverted:o=!1,disabled:l=!1,error:s=!1}=e,d=(0,a.Z)(e,u);return i.createElement(p,(0,n.Z)({ref:t,$disabled:l,$inverted:o,$error:s,forwardedAs:"label"},d),r)}));m.displayName="FormControlLabel",m.Style=p,m.propTypes={children:l().node.isRequired,inverted:l().bool,disabled:l().bool,error:l().bool};const h=m},24338:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(85901),s=r(58649),d=r(959);const c=["children","as","error","success"],u=(0,o.ZP)(d.Z).withConfig({displayName:"FormFeedback__Root",componentId:"tg-1E1__sc-7iulb-0"})([""," display:block;color:var(--neutral-text-low-emphasis);margin-top:var(--size-spacing-02);"," ",""],l.Z,(e=>{let{$success:t}=e;return t&&(0,o.iv)(["color:var(--success-text);"])}),(e=>{let{$error:t}=e;return t&&(0,o.iv)(["color:var(--danger-text);"])})),p=(0,i.forwardRef)(((e,t)=>{let{children:r=null,as:o="span",error:l=!1,success:p=!1}=e,m=(0,a.Z)(e,c);const{error:h,success:g}=(0,s.Z)(),v=h||l,f=g||p;return r&&i.createElement(u,(0,n.Z)({ref:t,forwardedAs:o,token:d.Z.tokens.TEXT_SM_REGULAR,$error:v,$success:f},m),r)}));p.displayName="FormFeedback",p.Style=u;const m=p},61778:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(25773),a=r(30808),i=r(27378),o=r(23615),l=r.n(o),s=r(67468),d=r(85901);const c=["children","row"],u=s.ZP.div.withConfig({displayName:"FormGroup__Root",componentId:"tg-1E1__sc-bue639-0"})([""," display:flex;flex-wrap:wrap;flex-direction:column;> label:not(:last-child){margin:0 0 var(--size-spacing-02) 0;}",""],d.Z,(e=>{let{$row:t}=e;return t&&(0,s.iv)(["flex-direction:row;> label:not(:last-child){margin:0 var(--size-spacing-04) 0 0;}"])})),p=(0,i.forwardRef)(((e,t)=>{let{children:r,row:o=!1}=e,l=(0,a.Z)(e,c);return i.createElement(u,(0,n.Z)({ref:t,$row:o},l),r)}));p.displayName="FormGroup",p.propTypes={children:l().node.isRequired,row:l().bool};const m=p},29478:(e,t,r)=>{r.d(t,{Z:()=>v});var n,a=r(25773),i=r(30808),o=r(82769),l=r(27378),s=r(67468),d=(r(23615),r(85901)),c=r(58649),u=r(959);const p=["children","as","disabled","required"],m=(0,s.ZP)(u.Z).withConfig({displayName:"FormLabel__Root",componentId:"tg-1E1__sc-162zhfs-0"})([""," display:block;margin:0 0 var(--size-spacing-02) 0;color:var(--neutral-text-high-emphasis);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{forwardedAs:t}=e;return"legend"===t&&(0,s.iv)(["margin-bottom:var(--size-spacing-03);"])}),(e=>{let{disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inline:t}=e;return t&&(0,s.iv)(["margin-bottom:0;margin-right:var(--size-spacing-02);"])})),h=(0,s.ZP)((e=>{let t=Object.assign({},((0,o.Z)(e),e));return l.createElement("span",t," *")})).withConfig({displayName:"FormLabel__Required",componentId:"tg-1E1__sc-162zhfs-1"})(["color:var(--danger-text);"]),g=(0,l.forwardRef)(((e,t)=>{let{children:r,as:o="label",disabled:s=!1,required:d=!1}=e,g=(0,i.Z)(e,p);const{inline:v,disabled:f,required:y}=(0,c.Z)();return l.createElement(m,(0,a.Z)({ref:t},g,{$inline:v,token:u.Z.tokens.TEXT_MD_BOLD,forwardedAs:o,disabled:s||f}),r,(d||y)&&(n||(n=l.createElement(h,null))))}));g.displayName="FormLabel",g.Style=m;const v=g},58649:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(27378),a=r(74333);const i=()=>n.useContext(a.Z)},38095:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(34822),s=r(89679);const d=["children","lineBreak","gap","inline","verticalAlign","horizontalAlign","as"];function c(e){return"string"==typeof e?e:"var(--size-spacing-".concat(e.toString().padStart(2,"0"),")")}const u=o.ZP.div.withConfig({displayName:"InlineGroup__Root",componentId:"tg-1E1__sc-1n0xm5v-0"})(["display:flex;flex-direction:row;gap:",";"," ",";"," ",""],(e=>{let{$gap:t}=e;return Array.isArray(t)?t.map(c).join(" "):c(t)}),(e=>{let{$inline:t}=e;return t&&(0,o.iv)(["display:inline-flex;"])}),(e=>{let{$horizontalAlign:t}=e;return t&&(0,o.iv)(["justify-content:",";"],t)}),(e=>{let{$verticalAlign:t}=e;return t&&(0,o.iv)(["align-items:",";"],t)}),(e=>{let{$lineBreak:t}=e;return t&&(0,o.iv)(["flex-wrap:wrap;"])})),p=(0,i.forwardRef)(((e,t)=>{let{children:r,lineBreak:o=!1,gap:l="var(--size-spacing-02)",inline:s=!1,verticalAlign:c=p.verticalAlignments.top,horizontalAlign:m=p.horizontalAlignments.left,as:h="div"}=e,g=(0,a.Z)(e,d);return i.createElement(u,(0,n.Z)({ref:t,as:h,$gap:l,$inline:s,$lineBreak:o,$horizontalAlign:m,$verticalAlign:c},g),r)}));p.displayName="InlineGroup",p.Style=u,p.Item=s.Z,p.horizontalAlignments=l.T,p.verticalAlignments=l.n;const m=p},89679:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(34822);const s=["children","verticalAlign","fluid","as"],d=o.ZP.div.withConfig({displayName:"InlineGroupItem__Root",componentId:"tg-1E1__sc-1r2n1hz-0"})(["",";",""],(e=>{let{$verticalAlign:t}=e;return t&&(0,o.iv)(["align-self:",";"],t)}),(e=>{let{$fluid:t}=e;return t&&(0,o.iv)(["flex:1;min-width:0;"])})),c=(0,i.forwardRef)(((e,t)=>{let{children:r,verticalAlign:o,fluid:l=!1,as:c="div"}=e,u=(0,a.Z)(e,s);return i.createElement(d,(0,n.Z)({ref:t,as:c,$verticalAlign:o,$fluid:l},u),r)}));c.displayName="InlineGroupItem",c.Style=d,c.verticalAlignments=l.n;const u=c},34822:(e,t,r)=>{r.d(t,{T:()=>n,n:()=>a});const n={left:"flex-start",center:"center",right:"flex-end",spaceBetween:"space-between"},a={top:"start",center:"center",bottom:"end",baseline:"baseline",stretch:"stretch"}},55575:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(66644),s=r(58649),d=r(67425),c=r(19201);const u=["rootRef","className","style","value","defaultValue","prefix","suffix","inlineActions","width","inlineEdit","disabled","required","error","success","aria-invalid"],p={IconButton:{props:{kind:"neutral",size:"sm"}}},m=(0,o.ZP)(c.Z).withConfig({displayName:"Input__Root",componentId:"tg-1E1__sc-2oktpa-0"})([""]),h=(0,i.forwardRef)(((e,t)=>{let{rootRef:r,className:o,style:c,value:h,defaultValue:g,prefix:v,suffix:f,inlineActions:y,width:b,inlineEdit:w=!1,disabled:Z=!1,required:x=!1,error:k=!1,success:E=!1}=e,_=(0,a.Z)(e,u);const z=(0,i.useRef)(null),C=(0,s.Z)(),R=C.required||x,S=C.success||E,T=C.error||k,A=Object.assign({},S||T?{"aria-invalid":T||!S}:{}),I=(0,i.useCallback)((()=>{z.current.focus()}),[]);return i.createElement(m,{ref:r,className:o,style:c,disabled:Z,prefix:v&&i.createElement(d.Z,{spec:p},v),suffix:f&&i.createElement(d.Z,{spec:p},f),width:b,inlineEdit:w,inlineActions:y,onClick:I},i.createElement("input",(0,n.Z)({},_,{ref:(0,l.Z)([z,t]),disabled:Z,value:h,defaultValue:g,"aria-required":R},A)))}));h.displayName="Input",h.Style=m;const g=h},19201:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(61380),s=r(78859),d=r(75387),c=r(67425),u=r(26503),p=r(38095);const m=["disabled","prefix","suffix","inlineActions","width","inlineEdit","children","onMouseDown"],h={IconButton:{props:{kind:"neutral",size:"sm"}}};function g(e){e.stopPropagation()}const v=(0,o.ZP)(p.Z).attrs({gap:1,verticalAlign:p.Z.verticalAlignments.center}).withConfig({displayName:"InputControl__Prefix",componentId:"tg-1E1__sc-1bx7dgp-0"})(["height:calc(var(--input-height) - 2px);> svg{--custom-icon-color:var(--input-icon-color);}","{"," --focus-outline-offset:calc(-1 * var(--size-spacing-01) - 1px);&:hover,&:focus,&:active{&:not(:disabled),&:not([disabled]),&:not([aria-disabled='true']){background-color:transparent;}}}& > ",":first-child,& > ",":first-child{margin-left:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}[data-tg-inline-edit='true'] & > ",":first-child,[data-tg-inline-edit='true'] & > ",":first-child{margin-left:0;}"],d.Z.Style,d.Z.SmallStyle,d.Z.Style,u.Z.Style,d.Z.Style,u.Z.Style),f=(0,o.ZP)(v).withConfig({displayName:"InputControl__Suffix",componentId:"tg-1E1__sc-1bx7dgp-1"})(["& > ",":last-child,& > ",":last-child{margin-right:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}[data-tg-inline-edit='true'] & > ",":last-child,[data-tg-inline-edit='true'] & > ",":last-child{margin-right:0;}"],d.Z.Style,u.Z.Style,d.Z.Style,u.Z.Style),y=o.ZP.div.withConfig({displayName:"InputControl__Root",componentId:"tg-1E1__sc-1bx7dgp-2"})(["--focus-border-radius:var(--border-radius-md);--input-height:",";--input-border-color:var(--neutral-border-interactive);--input-background-color:var(--neutral-surface);--input-text-color:var(--neutral-text-low-emphasis);--input-value-color:var(--neutral-text-high-emphasis);--input-placeholder-color:var(--neutral-text-low-emphasis);--input-icon-color:var(--neutral-icon-low-emphasis);--input-line-height:calc( var(--input-height) - 2px - (2 * var(--size-spacing-02)) );"," display:flex;gap:var(--size-spacing-02);align-items:center;height:var(--input-height);width:",";border-radius:var(--border-radius-md);border:1px solid var(--input-border-color);padding:0 var(--size-spacing-03);color:var(--neutral-text-low-emphasis);background-color:var(--input-background-color);box-shadow:none;&,> input,> input::placeholder,> textarea,> textarea::placeholder{font:var(--text-md-regular);line-height:var(--input-line-height);letter-spacing:-0.01em;}input{height:var(--input-line-height);}input,textarea{display:block;flex:1;margin:0;min-width:0;border:0;padding:0;outline:0;color:var(--input-value-color);background-color:transparent;&::placeholder{color:var(--input-placeholder-color);}::-ms-clear{display:none;width:0;height:0;}::-ms-reveal{display:none;width:0;height:0;}::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration{display:none;}}&:hover,&:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}&[aria-invalid='true'],&:has(*[aria-invalid='true']){&,&:hover{--input-border-color:var(--danger-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-invalid='false'],&:has(*[aria-invalid='false']){&,&:hover{--input-border-color:var(--success-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-disabled='true']{--input-background-color:var(--neutral-surface-disabled);--input-value-color:var(--neutral-text-disabled);--input-placeholder-color:var(--neutral-text-disabled);&,&:hover,&:focus,&:focus-within,&:hover:focus,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-disabled);}}",""],"40px",l.Z,(e=>{let{$width:t}=e;return t||"100%"}),s.Z),b=(0,i.forwardRef)(((e,t)=>{let{disabled:r,prefix:o,suffix:l,inlineActions:s,width:d,inlineEdit:u=!1,children:p,onMouseDown:b}=e,w=(0,a.Z)(e,m);return i.createElement(y,(0,n.Z)({},w,{ref:t,"aria-disabled":r,$width:d,"data-tg-inline-edit":u?"true":void 0,onMouseDown:e=>{if(null==b||b(e),e.defaultPrevented||!u)return;if(e.target!==e.currentTarget)return;const t=e.currentTarget.querySelector("input, textarea");t&&!t.disabled&&t.focus()}}),o&&i.createElement(v,null,o),p,l&&i.createElement(f,null,l),u&&s?i.createElement(f,{"data-tg-inline-actions":"",onMouseDown:g,onClick:g},i.createElement(c.Z,{spec:h},s)):null)}));b.displayName="InputControl",b.Style=y;const w=b},5662:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(8925),s=r(61994),d=r(29163),c=r(84227),u=r(79226),p=r(90496),m=r(79778),h=r(85689);const g=["forwardedAs","children","as","size","listStyleType","alignment","bordered"],v=["$listStyleType","as"],f=o.ZP.ul.withConfig({displayName:"List__Root",componentId:"tg-1E1__sc-4hzzzr-0"})(["padding:0;margin:0;list-style-position:inside;list-style-type:",";background-color:var(--neutral-surface);width:100%;"],(e=>{let{$listStyleType:t}=e;return t})),y=(0,i.forwardRef)(((e,t)=>{let{forwardedAs:r,children:o,as:l=y.as.ul,size:s=y.sizes.md,listStyleType:d="none",alignment:c=y.alignments.center,bordered:u=!1}=e,p=(0,a.Z)(e,g);const b={size:s,alignment:c,bordered:u},w=i.Children.toArray(o).filter((e=>i.isValidElement(e))).filter((e=>{let{props:t}=e;return t.clickable})).length?m.R.div:null,Z=l!==m.R.ul&&l!==m.R.ol&&l!==m.R.menu?m.R.div:null,x=i.Children.map(o,(e=>{if(!i.isValidElement(e))return e;const t=e.props,r=(0,a.Z)(t,v);return(0,i.cloneElement)(e,Object.assign({size:s,listStyleType:d,alignment:c,forwardedAs:w||Z},r))}));return i.createElement(h.Z.Provider,{value:b},i.createElement(f,(0,n.Z)({role:"list",as:w||l||r,$listStyleType:d,ref:t,$size:s,$alignment:c,$bordered:u},p),x))}));y.displayName="List",y.Item=l.Z,y.Header=s.Z,y.Divider=d.Z,y.Style=f,y.ItemContent=c.Z,y.ItemExtra=u.Z,y.sizes={sm:p.zf.SM,md:p.zf.MD},y.as=m.R,y.alignments=m.d;const b=y},85689:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r(27378).createContext({})},29163:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(25773),a=r(30808),i=r(27378),o=r(23615),l=r.n(o),s=r(67468);const d=["forwardedAs","as"],c=s.ZP.li.withConfig({displayName:"ListDivider__Root",componentId:"tg-1E1__sc-1ueoufh-0"})(["height:1px;border:none;background-color:var(--neutral-border);margin:var(--size-spacing-02) 0;list-style:none;"]),u=(0,i.forwardRef)(((e,t)=>{let{forwardedAs:r,as:o}=e,l=(0,a.Z)(e,d);return i.createElement(c,(0,n.Z)({as:r||o,ref:t},l,{role:"separator"}))}));u.displayName="ListDivider",u.Style=c,u.propTypes={as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const p=u},61994:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(25773),a=r(30808),i=r(27378),o=r(23615),l=r.n(o),s=r(67468),d=r(85901),c=r(959);const u=["children","forwardedAs","as"],p=s.ZP.li.withConfig({displayName:"ListHeader__Root",componentId:"tg-1E1__sc-19u7u4r-0"})([""," padding:var(--size-spacing-04) var(--size-spacing-03) var(--size-spacing-02);position:relative;align-items:center;display:inline-flex;width:100%;list-style:none;"],d.Z),m=(0,s.ZP)(c.Z).withConfig({displayName:"ListHeader__StyledText",componentId:"tg-1E1__sc-19u7u4r-1"})(["margin:0;"]),h=(0,i.forwardRef)(((e,t)=>{let{children:r,forwardedAs:o,as:l}=e,s=(0,a.Z)(e,u);return i.createElement(p,(0,n.Z)({ref:t,as:o||l},s),i.createElement(m,{textColor:"--neutral-text-low-emphasis",token:c.Z.tokens.TEXT_XS_BOLD},r.toUpperCase()))}));h.displayName="ListHeader",h.Style=p,h.propTypes={children:l().string.isRequired,as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const g=h},8925:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(50046),s=r(90496),d=r(79778),c=r(85689),u=r(84227),p=r(79226),m=r(59942),h=r(95778),g=r(76548);const v=["children","size","onClick","forwardedAs","as","disabled","active","clickable","listStyleType"],f=o.ZP.li.withConfig({displayName:"ListItem__Root",componentId:"tg-1E1__sc-ygn4xa-0"})(["outline:none;position:relative;padding:var(--size-spacing-03) var(--size-spacing-04);width:100%;display:",";align-items:",";",";",";",";",";",";"],(e=>{let{$listStyleType:t}=e;return t&&"none"!==t?"list-item":"flex"}),(e=>{let{$alignment:t}=e;return t===d.d.top?"flex-start":"center"}),(e=>{let{$childrenNumber:t}=e;return t&&(0,o.iv)(["","{order:",";}"],g.Z.Style,t)}),(e=>{let{$bordered:t}=e;return t&&(0,o.iv)(["border-bottom:1px solid var(--neutral-border);"])}),(e=>{let{$clickable:t}=e;return t&&(0,o.iv)(["cursor:pointer;&:hover{background-color:var(--neutral-surface-hover);}"])}),(e=>{let{$active:t}=e;return t&&(0,o.iv)(["&,&:hover,&:focus{background-color:var(--neutral-surface-low-emphasis);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,o.iv)(["pointer-events:none;background-color:transparent;& *,&:hover *,&:focus *{pointer-events:none;color:var(--neutral-text-disabled);","{svg{--custom-icon-color:var(--neutral-icon-disabled);}}}"],h.Z.Style)})),y=(0,i.forwardRef)(((e,t)=>{let{children:r,onClick:o,forwardedAs:s,as:d,disabled:u=!1,active:p=!1,clickable:m=!1,listStyleType:h="none"}=e,g=(0,a.Z)(e,v);const{alignment:y,bordered:b}=i.useContext(c.Z);let w;(m&&o||m)&&(w={role:"button","aria-pressed":p,tabIndex:0,as:"div","aria-disabled":u,$disabled:u});const Z=r?i.Children.count(r):0;return i.createElement(f,(0,n.Z)({ref:t,onClick:e=>{u||(0,l.Z)(o)&&o(e)},$clickable:m,$active:p,as:s||d,$listStyleType:h},w,g,{$childrenNumber:Z,$alignment:y,$bordered:b}),r)}));y.displayName="ListItem",y.Selector=m.Z,y.Image=h.Z,y.Action=g.Z,y.Content=u.Z,y.Style=f,y.Extra=p.Z,y.sizes={sm:s.zf.SM,md:s.zf.MD};const b=y},76548:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(30808),a=r(27378),i=(r(23615),r(67468));const o=["children"],l=i.ZP.div.withConfig({displayName:"ListItemAction__Root",componentId:"tg-1E1__sc-1uq8xv6-0"})(["display:inline-flex;flex-shrink:0;margin-left:var(--size-spacing-04);"]),s=e=>{let{children:t}=e,r=(0,n.Z)(e,o);return a.createElement(l,r,t)};s.displayName="ListItemAction",s.style=l,s.Style=l;const d=s},84227:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(959),s=r(90496),d=r(85689),c=r(79778);const u=["children","mainText","secondaryText","mainColor","secondaryColor"],p=o.ZP.div.withConfig({displayName:"ListItemContent__Root",componentId:"tg-1E1__sc-1ffisao-0"})(["flex:1 1 auto;min-width:0;",""],(e=>{let{$alignment:t}=e;return t&&t===c.d.top&&(0,o.iv)(["margin-top:var(--size-spacing-02);"])})),m=(0,i.forwardRef)(((e,t)=>{let{children:r,mainText:o,secondaryText:c="",mainColor:m="--neutral-text-high-emphasis",secondaryColor:h="--neutral-text-low-emphasis"}=e,g=(0,a.Z)(e,u);const{size:v,alignment:f}=i.useContext(d.Z);return r?i.createElement(p,(0,n.Z)({ref:t},g,{$alignment:f}),r):(console.warn("Tangram: the props `mainText`, `secondaryText`, `mainColor`, `secondaryColor` is deprecated and will be removed soon!"),i.createElement(p,(0,n.Z)({ref:t},g,{$alignment:f}),i.createElement(l.Z,{as:"div",textColor:m,token:v===s.zf.SM?l.Z.tokens.TEXT_SM_REGULAR:l.Z.tokens.TEXT_MD_REGULAR},o),i.createElement(l.Z,{as:"div",textColor:h,token:v===s.zf.SM?l.Z.tokens.TEXT_XS_REGULAR:l.Z.tokens.TEXT_SM_REGULAR},c)))}));m.displayName="ListItemContent",m.Style=p;const h=m},79226:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468));const l=["children","left","right"],s=o.ZP.div.withConfig({displayName:"ListItemExtra__Root",componentId:"tg-1E1__sc-9uqjkk-0"})(["align-items:center;display:inline-flex;svg{fill:var(--neutral-icon-low-emphasis);}"," ",""],(e=>{let{$left:t}=e;return t&&(0,o.iv)(["padding-right:var(--size-spacing-03);"])}),(e=>{let{$right:t}=e;return t&&(0,o.iv)(["padding-left:var(--size-spacing-03);"])})),d=(0,i.forwardRef)(((e,t)=>{let{children:r,left:o=!1,right:d=!1}=e,c=(0,a.Z)(e,l);return i.createElement(s,(0,n.Z)({ref:t,$left:o,$right:d},c),r)}));d.displayName="ListItemExtra",d.Style=s;const c=d},95778:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(30808),a=r(27378),i=(r(23615),r(67468));const o=["children"],l=i.ZP.div.withConfig({displayName:"ListItemImage__Root",componentId:"tg-1E1__sc-hdtxtx-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);"]),s=e=>{let{children:t}=e,r=(0,n.Z)(e,o);return a.createElement(l,r,t)};s.displayName="ListItemImage",s.Style=l;const d=s},59942:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(25773),a=r(30808),i=r(27378),o=(r(23615),r(67468)),l=r(85689),s=r(79778);const d=["children"],c=o.ZP.div.withConfig({displayName:"ListItemSelector__Root",componentId:"tg-1E1__sc-ranr7f-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);",""],(e=>{let{$alignment:t}=e;return t&&t===s.d.top&&(0,o.iv)(["margin-top:11px;"])})),u=e=>{let{children:t}=e,r=(0,a.Z)(e,d);const{alignment:o}=i.useContext(l.Z);return i.createElement(c,(0,n.Z)({$alignment:o},r),t)};u.displayName="ListItemSelector",u.Style=c;const p=u},79778:(e,t,r)=>{r.d(t,{R:()=>a,d:()=>n});const n={top:"top",center:"center"},a={ul:"ul",ol:"ol",div:"div",nav:"nav",menu:"menu"}},78859:(e,t,r)=>{r.d(t,{Z:()=>a});const n=":not([aria-disabled='true']):not(:has(input[readonly])):not(:has(textarea[readonly]))",a=(0,r(67468).iv)(["&[data-tg-inline-edit='true']{--tg-inline-edit-hover-border:var(--neutral-border-interactive-hover);--tg-inline-edit-focus-border:var(--primary-border);border:0;border-bottom:1px solid transparent;border-radius:0;padding:0;box-sizing:border-box;--focus-border-radius:0;--input-placeholder-color:var(--neutral-text-disabled);--input-value-color:var(--neutral-text-high-emphasis);&:focus-within{outline:none;}&",":focus-within,&",":focus-within input,&",":focus-within textarea{cursor:text;}&",":not(:focus-within):hover{border-bottom:1px dashed var(--tg-inline-edit-hover-border);}&",":is([aria-invalid='true'],:has(*[aria-invalid='true'])){--tg-inline-edit-hover-border:var(--danger-border);--tg-inline-edit-focus-border:var(--danger-border);}&",":is([aria-invalid='false'],:has(*[aria-invalid='false'])){--tg-inline-edit-hover-border:var(--success-border);--tg-inline-edit-focus-border:var(--success-border);}&",":not(:focus-within):is([aria-invalid='true'],:has(*[aria-invalid='true'])),&",":not(:focus-within):is([aria-invalid='false'],:has(*[aria-invalid='false'])){border-bottom:1px solid var(--tg-inline-edit-hover-border);}&",":focus-within,&",":active{border-bottom:1px solid var(--tg-inline-edit-focus-border);}&[aria-disabled='true'],&:has(input[readonly]),&:has(textarea[readonly]){background-color:transparent;--input-background-color:transparent;}&[aria-disabled='true']{--input-value-color:var(--neutral-text-disabled);--input-placeholder-color:var(--neutral-text-disabled);}> input,> textarea{flex:0 1 auto;width:auto;min-width:0;max-width:100%;field-sizing:content;}[data-tg-inline-actions]{visibility:hidden;margin-inline-start:auto;flex:0 0 auto;}&:hover [data-tg-inline-actions],&:focus-within [data-tg-inline-actions]{visibility:visible;}a{display:inline-flex;align-items:center;color:inherit;text-decoration:none;cursor:pointer;svg{--custom-icon-color:var(--input-icon-color);}&:hover,&:focus-visible{svg{--custom-icon-color:var(--neutral-icon-high-emphasis);}}}}"],n,n,n,n,n,n,n,n,n,n)},3859:(e,t,r)=>{r.d(t,{Z:()=>n});const n=(e,t)=>!e||e.trim().length<t},40291:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);function a(e){return 1===(null==e?void 0:e.nodeType)}function i(e){var t;return e&&"current"in e&&(1===(null===(t=e.current)||void 0===t?void 0:t.nodeType)||null===e.current||void 0===e.current)}function o(e){return"object"!=typeof e?null:a(e)?e:i(e)?e.current:null}function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"The useElement parameter must be either a React Ref, id string or a HTMLElement";const[r,l]=(0,n.useState)(o(e));return(0,n.useEffect)((()=>{void 0!==e&&l(null!==e?r=>"string"==typeof e?document.getElementById(e):a(e)?e:i(e)?e.current:(console.warn("Tangram: ".concat(t)),r):null)}),[e,t]),r}},64296:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(27378);function a(){const e=(0,n.useRef)(!1);return(0,n.useEffect)((()=>(e.current=!0,()=>{e.current=!1})),[]),(0,n.useCallback)((()=>e.current),[])}},10497:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(27378);function a(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const[r,n]of Object.entries(e))if(n!==t[r])return!1;return!0}function i(e){if(null===e||"object"!=typeof e||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}function o(e,t){if(e===t)return!0;const r=Array.isArray(e);if(r!==Array.isArray(t))return!1;if(r){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!o(e[r],t[r]))return!1;return!0}if(!i(e)||!i(t))return!1;const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(const a of n){if(!Object.prototype.hasOwnProperty.call(t,a))return!1;if(!o(e[a],t[a]))return!1}return!0}function l(e){let{deep:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=(0,n.useRef)(e),i=t?o(e,r.current):a(e,r.current);return i?r.current:(r.current=e,e)}},6904:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(27378),a=r(70116),i=r(64296);function o(){let{ref:e,element:t,callback:r,disabled:o=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const l=(0,i.Z)(),s=(0,n.useCallback)((e=>{let[t]=e;if(!l())return;const n={x:t.boundingClientRect.x,y:t.boundingClientRect.y};null==r||r(n)}),[l,r]);(0,n.useEffect)((()=>{const n=t||(null==e?void 0:e.current);if(!n||o)return;if(!(window&&"IntersectionObserver"in window)){var i;const{x:e=0,y:t=0}=null!==(i=null==n?void 0:n.getBoundingClientRect())&&void 0!==i?i:{};return void r({x:e,y:t})}const{x:l,y:d}=n.getBoundingClientRect(),c=new a.V(s);return null==r||r({x:l,y:d}),c.observe(n),()=>c.disconnect()}),[t,e,o,s,r])}},18919:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(27378),a=r(64296);function i(){let{ref:e,element:t,callback:r,disabled:i=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=(0,a.Z)(),l=(0,n.useCallback)((e=>{let[t]=e;if(!o())return;const n={width:t.contentRect.width,height:t.contentRect.height};null==r||r(n)}),[o,r]);(0,n.useEffect)((()=>{const n=t||(null==e?void 0:e.current);if(!n||i)return;if(!(window&&"ResizeObserver"in window)){var a;const{width:e=0,height:t=0}=null!==(a=null==n?void 0:n.getBoundingClientRect())&&void 0!==a?a:{};return void r({width:e,height:t})}const{width:o,height:s}=n.getBoundingClientRect(),d=new ResizeObserver(l);return null==r||r({width:o,height:s}),d.observe(n,{box:"border-box"}),()=>d.disconnect()}),[t,e,i,l,r])}},33748:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(27378);function a(e){let{ref:t,element:r,callback:a,disabled:i=!1}=e;(0,n.useEffect)((()=>{if(i)return;if(!(window&&"IntersectionObserver"in window))return void a(!0);const e=r||(null==t?void 0:t.current);if(!e)return;const n=new IntersectionObserver((e=>(e=>{let[{isIntersecting:t}]=e;null==a||a(t)})(e)),{root:null,rootMargin:"0px",threshold:.1});return i||n.observe(e),()=>{n.disconnect()}}),[a,r,t,i])}},84274:(e,t,r)=>{r.d(t,{Z:()=>H});var n=r(25773),a=r(30808),i=r(27378),o=r(31542),l=r(67468),s=r(81161),d=r(40291),c=r(33748),u=r(18919),p=r(6904),m=r(66644),h=r(95979),g=r(43500),v=r(58454);function f(e,t){return(e.overflows.top||e.overflows.bottom)<(t.overflows.top||t.overflows.bottom)?e:t}function y(e){const[t]="string"==typeof e?e.split("-"):e;return["top","bottom"].includes(t)}function b(e){let{anchor:t,anchored:r,viewport:n,side:a,alignment:i,offset:o,availablePlacements:l,history:s}=e;if(null==l||!l.length)return null;const d=function(e){let{anchor:t,anchored:r,viewport:n,side:a,alignment:i,offset:o}=e;const l=function(e){let{anchor:t,anchored:r,side:n,alignment:a,offset:i}=e,o=0;switch(n){case"top":o=t.y-r.height-i;break;case"bottom":o=t.y+t.height+i}switch(a){case"top":o=t.y;break;case"bottom":o=t.y+t.height-r.height}return"center"===a&&["left","right"].includes(n)&&(o=t.y-r.height/2+t.height/2),o}({anchor:t,anchored:r,side:a,alignment:i,offset:o}),s=function(e){let{anchor:t,anchored:r,side:n,alignment:a,offset:i}=e,o=0;switch(n){case"right":o=t.x+t.width+i;break;case"left":o=t.x-r.width-i}switch(a){case"right":o=t.x-r.width+t.width;break;case"left":o=t.x}return"center"===a&&["top","bottom"].includes(n)&&(o=t.x-r.width/2+t.width/2),o}({anchor:t,anchored:r,side:a,alignment:i,offset:o}),d={};return l<0&&(d.top=-1*l),s<0&&(d.left=-1*s),s+r.width>n.width&&(d.right=s+r.width-n.width),l+r.height>n.height&&(d.bottom=l+r.height-n.height),{top:l,left:s,side:a,alignment:i,overflows:d}}({anchor:t,anchored:r,viewport:n,side:a,alignment:i,offset:o}),c=Object.keys(d.overflows||{});if(!c.length)return Object.assign({},d,{maxHeight:n.height-d.top});if(!c.includes(a)){const e=function(e){const t=Object.assign({},e),r=Object.keys(e.overflows||{});for(const n of r){const r=e.overflows[n];"top"===n&&(t.top=t.top+r),"right"===n&&(t.left=t.left-r),"bottom"===n&&(t.top=t.top-r),"left"===n&&(t.left=t.left+r)}return delete t.overflows,t}(d);return Object.assign({},e,{maxHeight:n.height-e.top})}s["".concat(a,"-").concat(i)]=d;const u=l.filter((e=>!(e[0]===a&&e[1]===i)));return u.length?b({anchor:t,anchored:r,viewport:n,side:u[0][0],alignment:u[0][1],offset:o,availablePlacements:u,history:s}):null}function w(e){let{anchor:t,anchored:r,calculatedPosition:n}=e;const a=["top","bottom"].includes(n.side)?"x":"y",i=["top","bottom"].includes(n.side)?"width":"height",o=["top","bottom"].includes(n.side)?"left":"top",l=t[a]-n[o];return{side:function(e){return{top:"bottom",right:"left",bottom:"top",left:"right"}[e]}(n.side),placement:(l+t[i]/2)/r[i]}}function Z(e){let{anchor:t,anchored:r,viewport:n,side:a,alignment:i,offset:o,availablePlacements:l}=e;const s={},d=b({anchor:t,anchored:r,viewport:n,side:a,alignment:i,offset:o,availablePlacements:l,history:s})||function(e){let{anchored:t,history:r}=e;const n=Object.keys(r).filter(y).map((e=>r[e])),a=n.reduce(f,n[0]),i=a.overflows.left?0:a.overflows.right?a.left-a.overflows.right:a.left,o=t.height-(a.overflows.top||a.overflows.bottom);return{top:a.overflows.top?0:a.top,left:i,maxHeight:o,side:a.side,alignment:a.alignment}}({anchored:r,history:s});return Object.assign({},d,{arrow:w({anchor:t,anchored:r,calculatedPosition:d})})}const x=[["bottom","left"],["bottom","center"],["bottom","right"],["top","left"],["top","center"],["top","right"],["left","top"],["left","center"],["left","bottom"],["right","top"],["right","center"],["right","bottom"]],k={clickOutside:"clickOutside",esc:"esc"},E="data-tg-overlays",_="__tangramOverlayKeyCount__",z="The Overlay anchor must be either a React Ref, id string or a HTMLElement",C=["show","keepMounted","noscreen","contentRef","onToggle","children","anchor","side","alignment","offset","availablePlacements","rootComponent"],R="Overlay",S=200,T=["button","[href]","input","select","textarea","[tabindex]"].map((e=>e+":not([tabindex='-1'])")).join(", "),A=l.ZP.div.withConfig({displayName:"Overlay__Content",componentId:"tg-1E1__sc-1cr5z2q-0"})(["position:relative;width:var(--tg-overlay-width,auto);"]),I=l.ZP.div.withConfig({displayName:"Overlay__Backdrop",componentId:"tg-1E1__sc-1cr5z2q-1"})(["transition-property:opacity;transition-timing-function:var(--motion-timing-function-ease-in-out);transition-duration:var(--tg-overlay-motion-duration);display:block;opacity:0.5;position:fixed;top:0;bottom:0;left:0;right:0;width:100vw;height:100vh;background-color:black;pointer-events:auto;&[hidden]{display:block;opacity:0;pointer-events:none;}"]),$=(0,l.ZP)(h.Z).withConfig({displayName:"Overlay__Root",componentId:"tg-1E1__sc-1cr5z2q-2"})(["--tg-overlay-motion-duration:var(--motion-duration-fast);--tg-overlay-box-shadow:var(--shadow-sm);--tg-overlay-content-arrow-size:10px;--tg-overlay-content-arrow-color:var(--neutral-surface);--tg-overlay-content-arrow-box-shadow:var(--tg-overlay-box-shadow);--tg-overlay-content-arrow-min-radius:0;position:fixed;display:block;top:0;bottom:0;left:0;right:0;z-index:calc(var(--tg-overlay-z-index,0) + var(--zindex-5));*[data-tg-overlays]:has(&){width:auto;height:auto;}&:not(:has(> ",")){top:auto;bottom:auto;left:auto;right:auto;}& > ","{transition-property:opacity,transform;transition-timing-function:var(--motion-timing-function-ease-in-out);transition-duration:var(--tg-overlay-motion-duration);position:fixed;max-width:100vw;max-height:var(--tg-overlay-content-max-height,100vh);}&[data-tg-anchored='false'] > ","{top:50%;left:50%;transform:translate(-50%,-50%);}&[data-tg-anchored='true']{--tg-overlay-motion-duration:var(--motion-duration-extra-fast);> ","{top:var(--tg-overlay-content-position-top,-100vh);left:var(--tg-overlay-content-position-left,-100vw);}}&[hidden]{display:block;visibility:hidden;}&[inert]{> ","{opacity:0;pointer-events:none;}&[data-tg-anchored='false'] > ","{transform:translate(-50%,-50%) scale(0.9);}}&[data-tg-anchored='true']{","{transform:initial;}}"],I,A,A,A,A,A,A);function D(){const e=document.querySelector("*[".concat(E,"]"));if(e)return e;const t=document.createElement("div");return t.setAttribute(E,""),document.body.appendChild(t),t}function N(e){if(!e)return S;return function(e){if(!e)return S;const t=e.trim().toLowerCase();if(t.endsWith("ms")){const e=parseFloat(t.slice(0,-1));return isNaN(e)?S:Math.round(e)}if(t.endsWith("s")){const e=parseFloat(t.slice(0,-2));return isNaN(e)?S:Math.round(1e3*e)}return S}(getComputedStyle(e).getPropertyValue("--tg-overlay-motion-duration"))}function P(e){return e.inert||e.hasAttribute("inert")}function L(e){return Number(e.style.getPropertyValue("--tg-overlay-z-index")||"0")}function O(){return Array.from(document.querySelectorAll("[".concat(E,"] > *:not([inert])"))).sort(((e,t)=>L(t)-L(e))).filter((e=>e.querySelector(I)))[0]}function M(){return Array.from(document.querySelectorAll("[".concat(E,"] > *:not([inert])"))).filter((e=>e.querySelector(I))).sort(((e,t)=>L(t)-L(e)))}function F(e,t,n,a,o,l){const[s,d]=(0,i.useState)(!1),c=(0,i.useRef)(null);return(0,i.useEffect)((()=>{let a;if(n){if(d(!0),!e||!t)return;e.style.setProperty("--tg-overlay-z-index",(r.g[_]=r.g[_]||0,r.g[_]++)),e.hidden=!1,e.removeAttribute("inert"),o||(c.current=document.activeElement,function(e){var t;if(!e)return;null===(t=e.querySelectorAll(T)[0])||void 0===t||t.focus()}(t)),function(){const e=M(),[t,...r]=e;if(!t)return;const n=t.querySelector(I);if(n){if(0===r.length)return n.hidden=!1,void(n.style.transitionDuration="");n.style.transitionDuration="0s",r.forEach((e=>{const t=e.querySelector(I);t&&(t.style.transitionDuration="0s")})),n.hidden=!1,r.forEach((e=>{const t=e.querySelector(I);t&&(t.hidden=!0)}))}}()}else{if(!e||!t)return;const n=N(e);!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!e)return;const t=e.querySelector(I);if(!t)return;const r=M(),[n]=r.filter((t=>t!==e));if(!n)return t.style.transitionDuration="",void(t.hidden=!0);const a=n.querySelector(I);t.style.transitionDuration="0s",a.style.transitionDuration="0s",t.hidden=!0,a.hidden=!1}(e),e.setAttribute("inert",""),function(e){if(!e)return;e.querySelectorAll(T).forEach((e=>e.blur()))}(t),a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return setTimeout(e,t)}((()=>{var t;e.hidden=!0,d(!1),function(){const e=D();Array.from(e.children).some((e=>!e.hidden))||(r.g[_]=0)}(),o||null===(t=c.current)||void 0===t||t.focus()}),n+1)}return()=>{clearTimeout(a)}}),[a,n,e,t,o,l]),s}function j(e,t,r,n){(0,i.useEffect)((()=>{const a=a=>{if(!e||!t||!r)return;if("Escape"!==a.key)return;const i=function(e){if(!e)return null;let t=null,r=-1/0;for(const n of e.children){if(P(n))continue;const e=L(n);e>r&&(r=e,t=n)}return t}(e);i===t&&n(a,k.esc)};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}),[e,t,r,n])}function q(e,t,r,n){(0,i.useEffect)((()=>{if(!t||!e||r)return;const a=e=>{if("Tab"!==e.key)return;if(O()!==n)return;e.preventDefault();const t=function(){const e=O();return e?Array.from(document.querySelectorAll("[".concat(E,"] > *:not([inert])"))).sort(((e,t)=>L(e)-L(t))).filter((t=>!t.querySelector(I)&&L(t)>L(e)||L(t)===L(e))):[]}().flatMap((e=>Array.from(e.querySelectorAll(T))));if(!t.length)return;let r;r=t.findIndex((e=>e===document.activeElement))||0,r=e.shiftKey?r-1:r+1,-1===r?r=t.length-1:r>t.length-1&&(r=0),t[r].focus()};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)}),[e,t,r,n])}const B=(0,i.createContext)(!0),V=(0,i.forwardRef)(((e,t)=>{let{show:r=!1,keepMounted:l=!1,noscreen:h=!1,contentRef:v,onToggle:f,children:y,anchor:b,side:w="right",alignment:E="center",offset:_=20,availablePlacements:S=x,rootComponent:T}=e,N=(0,a.Z)(e,C);const P=null!=T?T:$,L=function(){const[e,t]=(0,i.useState)(null);return(0,i.useEffect)((()=>{e||t(D())}),[e]),e}(),[O,M]=(0,i.useState)(null),[V,H]=(0,i.useState)(null),G=(0,m.Z)([t,M]),U=(0,m.Z)([v,H]),X=(0,i.useContext)(B),J=r&&X,W=(0,i.useCallback)((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.clickOutside;return null==f?void 0:f(e,!1,{reason:t})}),[f]),Y=F(O,V,J,r,h,l),K=function(e,t,r,n,a,o){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:20,s=arguments.length>7?arguments[7]:void 0;const m=(0,d.Z)(e,z),h=!m||!n,g=(0,i.useCallback)((e=>{!h&&t&&(e?t.removeAttribute("inert"):t.setAttribute("inert",""))}),[h,t]);(0,c.Z)({element:m,callback:g,disabled:h});const v=(0,i.useCallback)((()=>{if(!m||!r)return;const e=m.getBoundingClientRect(),t=r.getBoundingClientRect(),{top:n,left:i,maxHeight:d,arrow:c}=Z({anchor:e,anchored:t,viewport:{width:window.innerWidth,height:window.innerHeight},side:a,alignment:o,offset:l,availablePlacements:s});r.style.setProperty("--tg-overlay-content-position-top","".concat(n,"px")),r.style.setProperty("--tg-overlay-content-max-height","".concat(d,"px")),r.style.setProperty("--tg-overlay-content-position-left","".concat(i,"px")),r.setAttribute("data-tg-overlay-content-arrow-side",c.side),r.style.setProperty("--tg-overlay-content-arrow-placement",c.placement),r.style.setProperty("--tg-overlay-content-anchor-width","".concat(m.offsetWidth,"px"))}),[r,m,a,o,l,s]);return(0,u.Z)({element:m,callback:v,disabled:h}),(0,u.Z)({element:r,callback:v,disabled:h}),(0,p.Z)({element:m,callback:v,disabled:h}),m}(b,O,V,Y,w,E,_,S);j(L,O,Y,W),function(e,t,r,n,a){(0,i.useEffect)((()=>{if(!t||!e||!r)return;const i=t=>{if(t.target===n||null!=n&&n.contains(t.target))return;if(t.target===e||e.contains(t.target))return;const r=Array.from(e.querySelectorAll("[aria-controls]"));for(const e of r){const r=document.getElementById(e.getAttribute("aria-controls"));if(r&&(t.target===r||r.contains(t.target)))return}a(t)};return document.addEventListener("click",i,!0),()=>{document.removeEventListener("click",i,!0)}}),[e,t,r,n,a])}(V,Y,h,K,W),q(L,Y,h,O);return L?!l&&!Y?null:(0,o.createPortal)(i.createElement(P,(0,n.Z)({},N,{ref:G,hidden:!0,inert:"","data-tg-anchored":!!K}),!h&&i.createElement(I,{onClick:W,"aria-hidden":!0,hidden:!0}),i.createElement(A,{ref:U},i.createElement(B.Provider,{value:J},i.createElement(g.Z,{name:R},i.createElement(s.Z,null,y))))),L):null}));V.displayName=R,V.reasonsToHide=k,V.getMotionDuration=N,V.defaultOffset=20,V.Style=$,V.ContentStyle=A,V.BackdropStyle=I,V.Arrow=v.Z;const H=V},58454:(e,t,r)=>{r.d(t,{Z:()=>u});var n,a=r(25773),i=r(27378),o=r(67468);const l=1.41421356237,s=o.ZP.span.withConfig({displayName:"OverlayArrow__Overflow",componentId:"tg-1E1__sc-vlhfbb-0"})(["z-index:2;position:absolute;display:block;width:0;height:0;border:var(--tg-overlay-content-arrow-size) solid transparent;& + *{z-index:1;}*[data-tg-overlay-content-arrow-side='top'] &{border-bottom-color:var(--tg-overlay-content-arrow-color);}*[data-tg-overlay-content-arrow-side='right'] &{border-left-color:var(--tg-overlay-content-arrow-color);}*[data-tg-overlay-content-arrow-side='bottom'] &{border-top-color:var(--tg-overlay-content-arrow-color);}*[data-tg-overlay-content-arrow-side='left'] &{border-right-color:var(--tg-overlay-content-arrow-color);}"]),d=o.ZP.span.withConfig({displayName:"OverlayArrow__Root",componentId:"tg-1E1__sc-vlhfbb-1"})(["z-index:0;position:absolute;display:block;width:calc(var(--tg-overlay-content-arrow-size) * ",");height:calc(var(--tg-overlay-content-arrow-size) * ",");background:var(--tg-overlay-content-arrow-color);box-shadow:var(--tg-overlay-content-arrow-box-shadow);&,& + *{--tg-overlay-content-arrow-placement-min:calc( var(--tg-overlay-content-arrow-min-radius) + var(--tg-overlay-content-arrow-size) );--tg-overlay-content-arrow-placement-ideal:calc( var(--tg-overlay-content-arrow-placement,0) * 100% );--tg-overlay-content-arrow-placement-max:calc( 100% - var(--tg-overlay-content-arrow-placement-min) );}*[data-tg-overlay-content-arrow-side='top'] &{top:0;transform:translate(-50%,-50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='top'] & + *{top:0;transform:translate(-50%,-100%);}*[data-tg-overlay-content-arrow-side='right'] &{right:0;transform:translate(50%,-50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='right'] & + *{right:0;transform:translate(100%,-50%);}*[data-tg-overlay-content-arrow-side='bottom'] &{bottom:0;transform:translate(-50%,50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='bottom'] & + *{bottom:0;transform:translate(-50%,100%);}*[data-tg-overlay-content-arrow-side='left'] &{left:0;transform:translate(-50%,-50%) rotate(45deg);}*[data-tg-overlay-content-arrow-side='left'] & + *{left:0;transform:translate(-100%,-50%);}*[data-tg-overlay-content-arrow-side='top'] &,*[data-tg-overlay-content-arrow-side='top'] & + *,*[data-tg-overlay-content-arrow-side='bottom'] &,*[data-tg-overlay-content-arrow-side='bottom'] & + *{left:clamp( var(--tg-overlay-content-arrow-placement-min),var(--tg-overlay-content-arrow-placement-ideal),var(--tg-overlay-content-arrow-placement-max) );}*[data-tg-overlay-content-arrow-side='right'] &,*[data-tg-overlay-content-arrow-side='right'] & + *,*[data-tg-overlay-content-arrow-side='left'] &,*[data-tg-overlay-content-arrow-side='left'] & + *{top:clamp( var(--tg-overlay-content-arrow-placement-min),var(--tg-overlay-content-arrow-placement-ideal),var(--tg-overlay-content-arrow-placement-max) );}"],l,l),c=(0,i.forwardRef)(((e,t)=>i.createElement(i.Fragment,null,i.createElement(d,(0,a.Z)({},e,{ref:t,"aria-hidden":"true"})),n||(n=i.createElement(s,{"aria-hidden":"true"})))));c.displayName="OverlayArrow",c.Style=d,c.OverflowStyle=s;const u=c},56297:(e,t,r)=>{r.d(t,{Z:()=>v});var n,a=r(25773),i=r(30808),o=r(27378),l=(r(23615),r(67468)),s=r(26303),d=r(26703),c=r(66644),u=r(84274);const p=["id","style","label","disabled","show","defaultShow","side","offset","width","maxWidth","children","onToggle"],m=(0,l.ZP)(u.Z).withConfig({displayName:"Tooltip__StyledOverlay",componentId:"tg-1E1__sc-jdyvhj-0"})(["--tg-overlay-content-arrow-size:6px;--tg-overlay-content-arrow-color:var(--neutral-surface-inverse);--tg-overlay-content-arrow-min-radius:var(--border-radius-sm);"]),h=l.ZP.span.withConfig({displayName:"Tooltip__Root",componentId:"tg-1E1__sc-jdyvhj-1"})(["--tg-tooltip-max-width:auto;--tg-tooltip-min-width:auto;--tg-tooltip-width:auto;display:block;border-radius:var(--border-radius-sm);padding:var(--size-spacing-02) var(--size-spacing-03);width:var(--tg-tooltip-width);max-width:var(--tg-tooltip-max-width);min-width:var(--tg-tooltip-min-width);color:var(--neutral-text-inverse);font:var(--text-sm-regular);text-align:center;background:var(--neutral-surface-inverse);"]),g=e=>{let{id:t,style:r={},label:l,disabled:v=!1,show:f,defaultShow:y,side:b="top",offset:w=g.defaultOffset,width:Z,maxWidth:x,children:k,onToggle:E}=e,_=(0,i.Z)(e,p);const z=(0,s.Z)(t),C=(0,o.useRef)(null),R=o.Children.toArray(k),[S,...T]=R,A=o.isValidElement(S)?S.ref:null,I=Object.assign({},r,Z?{"--tg-tooltip-width":Z}:{},x?{"--tg-tooltip-max-width":x}:{}),[$,D]=(0,d.Z)({value:f,defaultValue:y}),N=(0,c.Z)(A?[A,C]:[C]),P=o.isValidElement(S)?o.cloneElement(S,Object.assign({},S.props,{"aria-describedby":z,ref:N})):S;return(0,o.useEffect)((()=>{const e=C.current;if(!e||v)return;const t=(e,t)=>{null==E||E(e,!0,{reason:t||e.type}),D(!0)},r=(e,t)=>{null==E||E(e,!1,{reason:t||e.type}),D(!1)},n=e=>{"Escape"===e.key&&r(e,"esc")};return e.addEventListener("mouseover",t),e.addEventListener("focus",t),e.addEventListener("mouseout",r),e.addEventListener("blur",r),document.addEventListener("keydown",n),()=>{e.removeEventListener("mouseover",t),e.removeEventListener("focus",t),e.removeEventListener("mouseout",r),e.removeEventListener("blur",r),document.removeEventListener("keydown",n)}}),[v,E,D]),(0,o.useEffect)((()=>{v&&D(!1)}),[v,D]),o.createElement(o.Fragment,null,P,T,o.createElement(m,{anchor:C,alignment:"center",side:b,show:!v&&$,offset:w,noscreen:!0,keepMounted:!0},n||(n=o.createElement(u.Z.Arrow,null)),o.createElement(h,(0,a.Z)({},_,{role:"tooltip",id:z,style:I}),l)))};g.displayName="Tooltip",g.Style=h,g.defaultOffset=18;const v=g},11504:(e,t,r)=>{r.d(t,{Z:()=>B});var n=r(25773),a=r(27378),i=r(23615),o=r.n(i),l=r(67468),s=r(22648),d=r.n(s),c=r(45908),u=r(60701),p=r(33065),m=r(959),h=r(87954),g=r(4263),v=r(66101);const f=l.ZP.div`
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
`,Z=(0,a.forwardRef)(((e,t)=>{let{locale:r=c.Z,...i}=e;const{date:o,changeYear:l}=i;let s=o;return a.createElement(f,(0,n.Z)({ref:t},i),a.createElement(y,null,a.createElement(b,{kind:p.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,u.default)(s)-1),"aria-controls":"headerNavigation"},a.createElement(g.Z,{id:"previous-year",title:"go to previous year",titleId:"previous-year"})),a.createElement(w,{id:"headerNavigation","aria-live":"assertive"},(0,u.default)(s)),a.createElement(b,{kind:p.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,u.default)(s)+1),"aria-controls":"headerNavigation"},a.createElement(v.Z,{id:"next-year",title:"go to next year",titleId:"next-year"}))))}));Z.displayName="DatePicker.YearlyHeader",Z.propTypes={locale:o().object};const x=Z;var k=r(54571),E=r(64083),_=r(87926),z=r(37811),C=r(17752),R=r(5662),S=r(50046),T=r(38095),A=r(2793);const I="48px",$=l.ZP.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - (var(--size-spacing-04) * 2));
  flex-flow: column;
`,D=l.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,N=(0,l.ZP)(p.Z)`
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
    ${"312px"} - 2 * ${I} - (2 * var(--size-spacing-04))
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
      margin-left: calc(var(--size-spacing-06) + 2 * ${I});
    `}}
`,L=(0,l.ZP)(R.Z)`
  margin: 0;
  padding: 0;
  li {
    padding: var(--size-spacing-01) 0 var(--size-spacing-04);
  }
`,O=(0,a.forwardRef)(((e,t)=>{let{locale:r=c.Z,...i}=e;const{monthsShown:o,date:l,decreaseMonth:s,increaseMonth:d,prevMonthButtonDisabled:f,nextMonthButtonDisabled:y,titleAction:b}=i,w=!S.Z(b)&&{forwardedAs:"div",tabindex:"-1"},Z=Array(o).fill(0);let x=document.getElementsByClassName("react-datepicker__month"),I=l;if(o>1&&x.length){const e=x[0].getAttribute("aria-label").replace("month","").trim().split("-").join("/");I=new Date(`${e}/01`)}return a.createElement($,(0,n.Z)({ref:t},i),a.createElement(D,null,a.createElement(N,{kind:p.Z.kinds.tertiary,onClick:s,disabled:f,"aria-controls":"headerNavigation"},a.createElement(g.Z,{id:"previous-month",title:"go to previous month",titleId:"previous-month"})),a.createElement(T.Z,{id:"headerNavigation","aria-live":"assertive"},Z.map(((e,t)=>a.createElement(P,(0,n.Z)({key:`header-${t}`,second:!!t,token:m.Z.tokens.TEXT_MD_BOLD,onClick:b,kind:h.Z.kinds.tertiary,size:h.Z.sizes.md},w),`${(0,A.G4)(r)[(0,z.default)((0,_.default)(I,t))]} ${(0,u.default)(I)}`)))),a.createElement(N,{kind:p.Z.kinds.tertiary,onClick:d,disabled:y,"aria-controls":"headerNavigation"},a.createElement(v.Z,{id:"next-month",title:"go to next month",titleId:"next-month"}))),a.createElement(D,null,Z.map(((e,t)=>a.createElement(L,{as:R.Z.as.ul,key:`weekdays-${t}`},((e,t)=>{const r=(0,k.default)(t,{locale:e});return[].concat([0,1,2,3,4,5,6].map((t=>{const n=(0,E.default)(r,t),i=e.localize.day((0,C.default)(n),{width:"short"});return a.createElement("li",{key:t,className:"react-datepicker__day-name"},i)})))})(r,(0,_.default)(I,t)))))))}));O.displayName="DatePicker.MonthlyHeader",O.propTypes={locale:o().object,titleAction:o().func};const M=O,F="40px",j=l.ZP.div`
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
`,q=(0,a.forwardRef)(((e,t)=>{let{range:r,className:i,titleAction:o,placeholder:l,position:u=q.positions.bottom,selected:p=null,locale:m=c.Z,double:h=!1,yearlyView:g=!1,inline:v=!1,startDate:f=null,endDate:y=null,onChange:b=(()=>{}),dateFormat:w="dd/MM/yyyy",width:Z,customInput:k,inlineEdit:E=!1,error:_=!1,suffix:z,inlineActions:C,disabled:R,...S}=e;(0,s.registerLocale)("locale",m);const T=(0,a.useRef)(t),[A,I]=(0,a.useState)(!1),$=(0,a.useRef)(!0),D=(0,a.useRef)(),N=(0,a.useRef)(),P=(0,a.useRef)(),L=h?2:1;(0,a.useLayoutEffect)((()=>{if($.current)return D.current=p,N.current=f,P.current=y,void($.current=!1);const e=D.current&&!p,t=N.current&&!f,r=P.current&&!y;if(!T.current?.calendar?.componentNode)return;if(e||t||r){T.current.calendar.componentNode.querySelectorAll(".react-datepicker__day--selected, .react-datepicker__day--keyboard-selected").forEach((e=>{e.classList.remove("react-datepicker__day--selected"),e.classList.remove("react-datepicker__day--keyboard-selected")}))}const n=T.current.calendar.componentNode.querySelector(".react-datepicker__day--keyboard-selected"),a=T.current.calendar.componentNode.querySelector(".react-datepicker__day--selected");n&&a&&(n.classList.remove("react-datepicker__day--keyboard-selected"),a.classList.add("react-datepicker__day--keyboard-selected")),D.current=p,N.current=f,P.current=y}),[p,f,y,v]),(0,a.useLayoutEffect)((()=>{if(g&&(A||v)){if(!T.current?.calendar?.componentNode)return;const e=Array.from(T.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-text"));T.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-wrapper").forEach((t=>{const r=e.splice(0,4);if(r.length)return r.map((e=>t.appendChild(e)));t.style.display="none"}))}}),[g,A,v]);const O=(0,a.isValidElement)(k)?(0,a.cloneElement)(k,{calendarOpen:A}):k;return a.createElement(j,{$monthsShown:h,$yearlyView:g,className:i,$inline:v,$width:Z,"data-tg-inline-edit":E?"true":void 0,"data-tg-error":E&&_?"true":void 0,"data-tg-calendar-open":A?"true":void 0,"aria-disabled":!!R||void 0},a.createElement(d(),(0,n.Z)({selected:p,onCalendarClose:()=>I(!1),onCalendarOpen:()=>I(!0),renderCustomHeader:e=>(e=>g?a.createElement(x,(0,n.Z)({locale:m},e)):a.createElement(M,(0,n.Z)({titleAction:o,monthsShown:L,locale:m},e)))(e),locale:"locale",monthsShown:L,popperPlacement:u,showPopperArrow:!1,showMonthYearPicker:g,inline:v,ref:T,placeholderText:l,startDate:f,endDate:y,onChange:b,dateFormat:w,customInput:O,disabled:R},S)))}));q.displayName="DatePickerBase",q.positions={top:"top-start",bottom:"bottom-start"},q.propTypes={position:o().oneOf([q.positions.top,q.positions.bottom]),selected:o().instanceOf(Date),startDate:o().instanceOf(Date),endDate:o().instanceOf(Date),inline:o().bool,onChange:o().func,locale:o().object,dateFormat:o().string,double:o().bool,yearlyView:o().bool,titleAction:o().func,placeholder:o().string};const B=q},81583:(e,t,r)=>{r.d(t,{Z:()=>R});var n=r(25773),a=r(27378),i=r(23615),o=r.n(i),l=r(67468),s=r(45908),d=r(38095),c=r(75387),u=r(61380),p=r(55575),m=r(67425),h=r(3859),g=r(73647),v=r(41703),f=r(2793),y=r(15294);const b={IconButton:{props:{kind:"neutral",size:"sm"}}},w=(0,l.ZP)(d.Z).attrs({gap:1,verticalAlign:d.Z.verticalAlignments.center})`
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
    ${y.L}
    border-bottom: 1px solid transparent;
  }

  &[data-tg-inline-edit='true']:has(input[data-tg-calendar-open='true']):not(:has(input:disabled)):not(:has(input[aria-invalid='true'])) {
    border-bottom: 1px solid var(--primary-border);
  }

  &[data-tg-inline-edit='true']${y.N}:is([aria-invalid='true'], :has(*[aria-invalid='true'])) {
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

  > ${Z} {
    flex: 1;
    min-width: 0;
  }

  &:has([data-tg-inline-actions]) > ${Z} {
    flex: 0 1 auto;
    width: auto;
  }

  &:has([data-tg-inline-actions]) > [data-tg-inline-actions] {
    margin-inline-start: auto;
    flex-shrink: 0;
  }
`;function E(e){e.stopPropagation()}function _(){return a.createElement(v.Z,{title:"Datepicker",titleId:"datepicker-input"})}function z(e){let{children:t}=e;return t?a.createElement(w,{"data-tg-inline-actions":"",onMouseDown:E,onClick:E},a.createElement(m.Z,{spec:b},t)):null}const C=(0,a.forwardRef)(((e,t)=>{let{value:r,className:i,startDate:o="",endDate:l="",onStartChange:d=(()=>{}),onEndChange:c=(()=>{}),onChange:u=(()=>{}),firstInputRef:p=null,secondInputRef:m=null,dateFormat:v="dd/MM/yyyy",locale:y=s.Z,double:b=!1,inlineEdit:w=!1,error:E=!1,inlineActions:C,calendarOpen:R=!1,onFocus:S,onBlur:T,...A}=e;const[I,$]=(0,a.useState)(o),[D,N]=(0,a.useState)(l),P=(0,a.useRef)(null),L=(0,a.useRef)(null),{keyboardFocusAttr:O,onTabFocusCapture:M,onTabBlurCapture:F}=function(e){const[t,r]=(0,a.useState)(!1),n=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{if(e)return document.addEventListener("keydown",t,!0),document.addEventListener("mousedown",a,!0),()=>{document.removeEventListener("keydown",t,!0),document.removeEventListener("mousedown",a,!0)};function t(e){"Tab"===e.key&&(n.current=!0)}function a(){n.current=!1,r(!1)}r(!1)}),[e]),{keyboardFocusAttr:t?"true":void 0,onTabFocusCapture(){r(n.current)},onTabBlurCapture(){r(!1)}}}(w);(0,a.useEffect)((()=>{$(o)}),[o]),(0,a.useEffect)((()=>{N(l)}),[l]);const j=e=>{M(),S?.(e)},q=e=>{F(),T?.(e)},B=w&&C?a.createElement(z,null,C):null,V=R?"true":void 0,H={onChange:e=>{const t=!h.Z(e.target.value,v.length);g.Z(e.target,[P.current])&&($(e.target.value),t&&(d((0,f.sG)(e.target.value,v,y)),u(e))),g.Z(e.target,[L.current])&&(N(e.target.value),t&&(c((0,f.sG)(e.target.value,v,y)),u(e)))},onFocus:j,onBlur:q};return a.createElement(k,{className:b?i:void 0,ref:b?t:void 0,"data-tg-keyboard-focus":b?O:void 0},b?a.createElement(a.Fragment,null,a.createElement(Z,(0,n.Z)({prefix:_(),rootRef:P,ref:p,className:"range-start datepicker-input",type:"text",value:I},A,H)),a.createElement(x,null,"-"),a.createElement(Z,(0,n.Z)({rootRef:L,ref:m,className:"range-end datepicker-input",type:"text",value:D},A,H)),B):a.createElement(Z,(0,n.Z)({prefix:_(),value:r,onChange:u,className:`datepicker-input ${i||""}`,inlineEdit:w,error:E,inlineActions:C,"data-tg-calendar-open":V,"data-tg-keyboard-focus":O},A,{onFocus:j,onBlur:q,ref:t})))}));C.displayName="DatePickerInput",C.Style=k,C.propTypes={placeholder:o().string,startDate:o().string,endDate:o().string,onStartChange:o().func,onEndChange:o().func,locale:o().object,dateFormat:o().string,double:o().bool,inlineEdit:o().bool,error:o().bool,inlineActions:o().node,firstInputRef:o().oneOfType([o().func,o().shape({current:o().any})]),secondInputRef:o().oneOfType([o().func,o().shape({current:o().any})])};const R=C},12958:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(25773),a=r(27378),i=r(23615),o=r.n(i),l=r(67468),s=r(45908),d=r(61380),c=r(55575),u=r(78859),p=r(11504),m=r(81583),h=r(2793),g=r(15294);const v=(0,l.ZP)(p.Z)`
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

    ${g.L}
    border-bottom: 1px solid transparent;

    &${g.N}[data-tg-calendar-open='true']:not(
        [data-tg-error='true']
      ) {
      border-bottom: 1px solid var(--primary-border);
    }

    &[data-tg-error='true']${g.N} {
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
`,y=(0,a.forwardRef)(((e,t)=>{let{onPickStart:r,startDate:i,endDate:o=null,onSelectStart:l=(()=>{}),onSelectEnd:d=(()=>{}),locale:c=s.Z,dateFormat:u="dd/MM/yyyy",width:p,position:m=y.positions.bottom,inlineEdit:g=!1,error:b=!1,inlineActions:w,...Z}=e;const x=(0,a.useMemo)((()=>i||new Date),[i]),k=(0,a.useRef)(null),E=(0,a.useRef)(null),[_,z]=(0,a.useState)(x),[C,R]=(0,a.useState)(o),[S,T]=(0,a.useState)(!0),A=(0,a.useRef)(!1);(0,a.useEffect)((()=>{A.current?A.current=!1:(z((e=>e?.getTime()!==x?.getTime()?x:e)),R((e=>e?.getTime()!==o?.getTime()?o:e)))}),[x,o]);const I=e=>{A.current=!0,z(e),R(null),l(e),E.current&&E.current.focus()},$=e=>{A.current=!0,R(e),d(e)};return a.createElement(v,(0,n.Z)({ref:t,$width:p,onChange:e=>{S?I(e):$(e),T(!S)},shouldCloseOnSelect:!S,selectsStart:S,selectsEnd:!S,startDate:_,minDate:S?void 0:_,endDate:C,locale:c,inlineEdit:g,error:b,customInput:a.createElement(f,{startDate:(0,h.VR)(_,{dateFormat:u,locale:c}),endDate:(0,h.VR)(C,{dateFormat:u,locale:c}),onStartChange:I,onEndChange:$,dateFormat:u,locale:c,firstInputRef:k,secondInputRef:E,double:!0,inlineEdit:g,inlineActions:w}),position:m},Z))}));y.displayName="DateRangePicker",y.positions=p.Z.positions,y.propTypes={dateFormat:o().string,endDate:o().instanceOf(Date),inline:o().bool,locale:o().object,width:o().string,onSelectEnd:o().func,onSelectStart:o().func,position:o().oneOf([y.positions.top,y.positions.bottom]),startDate:o().instanceOf(Date),minDate:o().instanceOf(Date),maxDate:o().instanceOf(Date),inlineEdit:o().bool,error:o().bool,inlineActions:o().node};const b=y},15294:(e,t,r)=>{r.d(t,{L:()=>o,N:()=>i});var n=r(67468),a=r(61380);const i=":not([aria-disabled='true']):not(:has(input[readonly])):not(:has(textarea[readonly]))",o=n.iv`
  &:focus-within:not(:has([data-tg-keyboard-focus='true'])) {
    outline: none;
  }

  &:has([data-tg-keyboard-focus='true'])${i} {
    ${a.Z.Rules}
  }
`},2793:(e,t,r)=>{r.d(t,{G4:()=>o,VR:()=>s,sG:()=>l});var n=r(2345),a=r(44720),i=r(52993);const o=e=>{const t=[];for(let r=0;r<12;r++)t.push(e.localize.month(r));return t};function l(e,t,r){let n=(0,i.default)(e,t,new Date,{locale:r});return(0,a.default)(n)?n:null}function s(e,t){let{dateFormat:r,locale:a}=t;return e&&function(e,t,r){return(0,n.default)(e,t,{locale:r||null,awareOfUnicodeTokens:!0})}(e,Array.isArray(r)?r[0]:r,a)||""}},41703:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,i=r(25773),o=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,o.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},4263:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,i=r(25773),o=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,o.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},66101:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,i=r(25773),o=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,o.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},44706:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,i=r(25773),o=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,o.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M11.429 3c-1.182 0-2.143 1.009-2.143 2.25v9c0 1.241.96 2.25 2.143 2.25h6.428C19.04 16.5 20 15.491 20 14.25V7.198c0-.612-.238-1.2-.66-1.625L17.41 3.626C17.01 3.225 16.477 3 15.925 3H11.43zM7.143 7.5C5.96 7.5 5 8.509 5 9.75v9C5 19.991 5.96 21 7.143 21h6.428c1.182 0 2.143-1.009 2.143-2.25v-.563h-2.143v.563H7.143v-9h.536V7.5h-.536z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M11.429 3c-1.182 0-2.143 1.009-2.143 2.25v9c0 1.241.96 2.25 2.143 2.25h6.428C19.04 16.5 20 15.491 20 14.25V7.198c0-.612-.238-1.2-.66-1.625L17.41 3.626C17.01 3.225 16.477 3 15.925 3H11.43zM7.143 7.5C5.96 7.5 5 8.509 5 9.75v9C5 19.991 5.96 21 7.143 21h6.428c1.182 0 2.143-1.009 2.143-2.25v-.563h-2.143v.563H7.143v-9h.536V7.5h-.536z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},73700:(e,t,r)=>{r.d(t,{Z:()=>g});var n,a,i=r(25773),o=r(30808),l=r(27378),s=r(23615),d=r.n(s),c=r(33842),u=r(79804),p=r(20590);const m=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:r,titleId:s}=e,d=(0,o.Z)(e,m);const{kind:h}=(0,p.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,n||(n=l.createElement("path",{d:"M11.983 3a8.97 8.97 0 00-6.2 2.493L4.487 4.197C3.938 3.647 3 4.037 3 4.812v4.865c0 .482.39.871.871.871h4.865c.776 0 1.165-.938.616-1.486L7.837 7.546a6.052 6.052 0 014.109-1.643c3.353-.028 6.18 2.685 6.15 6.15-.027 3.286-2.691 6.044-6.096 6.044a6.052 6.052 0 01-4.015-1.508.435.435 0 00-.594.02l-1.44 1.44a.436.436 0 00.018.632A9 9 0 0021 12c.001-4.966-4.05-9.01-9.015-9.001z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),r?l.createElement("title",{id:s},r):null,a||(a=l.createElement("path",{d:"M11.983 3a8.97 8.97 0 00-6.2 2.493L4.487 4.197C3.938 3.647 3 4.037 3 4.812v4.865c0 .482.39.871.871.871h4.865c.776 0 1.165-.938.616-1.486L7.837 7.546a6.052 6.052 0 014.109-1.643c3.353-.028 6.18 2.685 6.15 6.15-.027 3.286-2.691 6.044-6.096 6.044a6.052 6.052 0 01-4.015-1.508.435.435 0 00-.594.02l-1.44 1.44a.436.436 0 00.018.632A9 9 0 0021 12c.001-4.966-4.05-9.01-9.015-9.001z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},32182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>w,contentTitle:()=>y,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>Z});var n=r(25773),a=r(27378),i=r(35318),o=r(80621),l=r(82544),s=r(23389),d=r(54479),c=r(94099),u=r(12958),p=r(29478),m=r(33065),h=r(73700),g=r(44706),v=r(56297);const f={title:"DateRangePicker",description:"Permite que a pessoa selecione um intervalo entre duas datas atrav\xe9s de um calend\xe1rio."},y=void 0,b={unversionedId:"components/daterangepicker",id:"components/daterangepicker",title:"DateRangePicker",description:"Permite que a pessoa selecione um intervalo entre duas datas atrav\xe9s de um calend\xe1rio.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/components/daterangepicker.md",sourceDirName:"components",slug:"/components/daterangepicker",permalink:"/tangram-doc/docs/components/daterangepicker",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/daterangepicker.md",tags:[],version:"current",frontMatter:{title:"DateRangePicker",description:"Permite que a pessoa selecione um intervalo entre duas datas atrav\xe9s de um calend\xe1rio."},sidebar:"mySidebar",previous:{title:"DatePicker",permalink:"/tangram-doc/docs/components/datepicker"},next:{title:"Dropfile",permalink:"/tangram-doc/docs/components/dropfile"}},w={},Z=[{value:"Localiza\xe7\xe3o",id:"localization",level:2},{value:"Edi\xe7\xe3o em linha",id:"inline-edit",level:2},{value:"Feedback",id:"feedback",level:2}],x={toc:Z};function k(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},x,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{current:"docs",name:"daterangepicker",mdxType:"ComponentTab"}),(0,i.kt)("p",null,"O ",(0,i.kt)("inlineCode",{parentName:"p"},"DateRangePicker")," permite a sele\xe7\xe3o de um intervalo entre duas datas, atrav\xe9s de um calend\xe1rio."),(0,i.kt)(d.Z,{mdxType:"CardGrid"},(0,i.kt)(d.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)(u.Z,{mdxType:"DateRangePicker"}))),(0,i.kt)("h2",{id:"localization"},"Localiza\xe7\xe3o"),(0,i.kt)("p",null,"Atrav\xe9s da propriedade ",(0,i.kt)("inlineCode",{parentName:"p"},"locale"),", o ",(0,i.kt)("inlineCode",{parentName:"p"},"DateRangePicker")," permite que as informa\xe7\xf5es exibidas no calend\xe1rio estejam de acordo com a localiza\xe7\xe3o informada."),(0,i.kt)("p",null,"A formata\xe7\xe3o de data ",(0,i.kt)("strong",{parentName:"p"},"n\xe3o \xe9 feita automaticamente"),", com base no ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," recebido. Para formatar a data use a propriedade dateFormat.Para mais detalhes acesse nossa aba de ",(0,i.kt)(s.Z,{href:"../../../code/components/daterangepicker/#daterangepicker-dateformat",mdxType:"Link"},"API do componente"),"."),(0,i.kt)(d.Z,{mdxType:"CardGrid"},(0,i.kt)(d.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)(c.Z,{mdxType:"Localization"}))),(0,i.kt)("h2",{id:"inline-edit"},"Edi\xe7\xe3o em linha"),(0,i.kt)("p",null,"A edi\xe7\xe3o em linha altera o estilo visual padr\xe3o do ",(0,i.kt)("inlineCode",{parentName:"p"},"DateRangePicker")," em todos os estados. O tipo do campo n\xe3o muda: continua um ",(0,i.kt)("inlineCode",{parentName:"p"},"DateRangePicker"),", usado em telas em que o intervalo \xe9 um valor edit\xe1vel em linha. O label n\xe3o \xe9 obrigat\xf3rio. In\xedcio, h\xedfen e t\xe9rmino compartilham uma caixa. N\xe3o use ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineEdit")," no lugar de ",(0,i.kt)("inlineCode",{parentName:"p"},"inline"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," continua igual. As a\xe7\xf5es entram em ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineActions"),", uma vez depois da data final. ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineActions")," s\xf3 renderiza com ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineEdit")," e fica vis\xedvel no hover e no foco. Com uma ou v\xe1rias a\xe7\xf5es, o conte\xfado que j\xe1 fica \xe0 direita do valor permanece no mesmo lugar, e as a\xe7\xf5es alinham no fim do campo. Envolva cada ",(0,i.kt)("inlineCode",{parentName:"p"},"IconButton")," com um ",(0,i.kt)("inlineCode",{parentName:"p"},"Tooltip"),", um por a\xe7\xe3o."),(0,i.kt)(d.Z,{mdxType:"CardGrid"},(0,i.kt)(d.D,{mdxType:"CardGridItem"},(0,i.kt)(u.Z,{id:"daterangepicker-inline-edit-unlabeled",inlineEdit:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,i.kt)(d.D,{mdxType:"CardGridItem"},(0,i.kt)(p.Z,{htmlFor:"daterangepicker-inline-edit-name",mdxType:"FormLabel"},"Campo normal"),(0,i.kt)(u.Z,{id:"daterangepicker-inline-edit-name",inlineEdit:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,i.kt)(d.D,{mdxType:"CardGridItem"},(0,i.kt)(p.Z,{htmlFor:"daterangepicker-inline-edit-error",mdxType:"FormLabel"},"Campo com erro"),(0,i.kt)(u.Z,{id:"daterangepicker-inline-edit-error",inlineEdit:!0,error:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,i.kt)(d.D,{mdxType:"CardGridItem"},(0,i.kt)(p.Z,{htmlFor:"daterangepicker-inline-edit-disabled",mdxType:"FormLabel"},"Campo disabled"),(0,i.kt)(u.Z,{id:"daterangepicker-inline-edit-disabled",inlineEdit:!0,disabled:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,i.kt)(d.D,{mdxType:"CardGridItem"},(0,i.kt)(p.Z,{htmlFor:"daterangepicker-inline-edit-readonly",mdxType:"FormLabel"},"Campo readOnly"),(0,i.kt)(u.Z,{id:"daterangepicker-inline-edit-readonly",inlineEdit:!0,readOnly:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),mdxType:"DateRangePicker"})),(0,i.kt)(d.D,{mdxType:"CardGridItem"},(0,i.kt)(u.Z,{id:"daterangepicker-inline-edit",inlineEdit:!0,startDate:new Date(2026,0,1),endDate:new Date(2026,0,15),inlineActions:(0,i.kt)(a.Fragment,null,(0,i.kt)(v.Z,{label:"Desfazer",mdxType:"Tooltip"},(0,i.kt)(m.Z,{"aria-label":"Desfazer",mdxType:"IconButton"},(0,i.kt)(h.Z,{title:"Desfazer",mdxType:"Undo"}))),(0,i.kt)(v.Z,{label:"Copiar",mdxType:"Tooltip"},(0,i.kt)(m.Z,{"aria-label":"Copiar",mdxType:"IconButton"},(0,i.kt)(g.Z,{title:"Copiar",mdxType:"Copy"})))),mdxType:"DateRangePicker"}))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(l.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0}}]);