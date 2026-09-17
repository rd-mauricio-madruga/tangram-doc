"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4659],{54479:(e,t,a)=>{a.d(t,{D:()=>u,Z:()=>s});var r=a(25773),n=a(27378),i=a(67468),o=a(45666);const l=i.ZP.div`
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
`;const s=function(e){let{children:t,columns:a=1,...i}=e;return n.createElement(o.Z,null,(()=>n.createElement(l,(0,r.Z)({$columns:a},i),t)))};var d=a(89620);const c=(0,i.ZP)(d.Z)`
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
`;const u=function(e){let{children:t,featured:a=!1,centered:r=!1,className:i}=e;return n.createElement(c,{$featured:a,$centered:r,className:i},t)}},17311:(e,t,a)=>{a.d(t,{Do:()=>v,pM:()=>Z,ZP:()=>o});var r=a(25773),n=a(27378),i=a(54479);const o=function(e){let{children:t,columns:a=2,...o}=e;return n.createElement(i.Z,(0,r.Z)({columns:a},o),t)};var l=a(64723),s=a(67468),d=a(42900),c=a(28219);const u=s.ZP.p`
  margin-top: var(--size-spacing-02);
  margin-bottom: var(--size-spacing-05);
`;const m=function(e){return n.createElement(u,e)},p=(0,s.ZP)(i.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--success-border);
  padding: 0;
`,h=s.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,g=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const v=function(e){let{title:t,children:a}=e;return n.createElement(p,{centered:!0},n.createElement(g,null,a),n.createElement(h,null,n.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.success,icon:n.createElement(c.Z,{title:"Checkmark icon"})},n.createElement(l.Z,{id:"doanddont.do"},"Do")),t&&n.createElement(m,null,t)))};var f=a(4492);const b=(0,s.ZP)(i.D)`
  background-color: var(--neutral-surface-low-emphasis);
  border: 1px solid var(--danger-border);
  padding: 0;
`,y=s.ZP.div`
  text-align: left;
  padding: var(--size-spacing-04);
  width: 100%;
  border-radius: 0 0 calc(var(--border-radius-md) + 2px)
    calc(var(--border-radius-md) + 2px);

  background-color: var(--neutral-surface);
`,w=s.ZP.div`
  width: 100%;
  text-align: center;
  padding: var(--size-spacing-04);

  p {
    font: var(--text-md-regular) !important;
  }
`;const Z=function(e){let{title:t,children:a}=e;return n.createElement(b,{centered:!0},n.createElement(w,null,a),n.createElement(y,null,n.createElement(d.Z,{size:d.Z.sizes.md,kind:d.Z.kinds.danger,icon:n.createElement(f.Z,{title:"Times icon"})},n.createElement(l.Z,{id:"doanddont.dont"},"Don't")),t&&n.createElement(m,null,t)))}},96350:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(27378),n=a(79011),i=a(8205),o=a(99876),l=a(18225);function s(){return r.createElement(r.Fragment,null,r.createElement(n.Z.Control,null,r.createElement(n.Z.Label,{htmlFor:"enUS"},"enUS"),r.createElement(i.Z,{id:"enUS",name:"enUS",locale:o.Z,dateFormat:"MM/dd/yyyy",placeholder:"Select a date"})),r.createElement(n.Z.Control,null,r.createElement(n.Z.Label,{htmlFor:"ptBR"},"ptBR (default)"),r.createElement(i.Z,{id:"ptBR",name:"ptBR",placeholder:"Selecione uma data"})),r.createElement(n.Z.Control,null,r.createElement(n.Z.Label,{htmlFor:"es"},"es"),r.createElement(i.Z,{id:"es",name:"es",locale:l.Z,placeholder:"Seleccione una fecha"})))}},23389:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(25773),n=a(27378),i=a(62957),o=a(85433);function l(e){let{children:t,...a}=e;return n.createElement(o.Z,(0,r.Z)({as:i.Z},a),t)}},87954:(e,t,a)=>{a.d(t,{Z:()=>v});var r,n=a(25773),i=a(30808),o=a(27378),l=a(67468),s=(a(23615),a(63559)),d=a(70421),c=a(75387),u=a(26503);const m=["disabled","as","children","type","kind","size","startIcon","endIcon","ia","loading","fluid"],p="Button",h=(0,l.ZP)(c.Z).withConfig({displayName:"Button__Root",componentId:"tg-1wm__sc-7cbhwm-0"})([""]),g=(0,d.Z)(p,(0,o.forwardRef)(((e,t)=>{let{disabled:a,as:l,children:d,type:c=g.types.button,kind:p=g.kinds.primary,size:v=g.sizes.md,startIcon:f,endIcon:b,ia:y=!1,loading:w=!1,fluid:Z=!1}=e,x=(0,i.Z)(e,m);return o.createElement(h,(0,n.Z)({ref:t,loading:w,fluid:Z,forwardedAs:l,size:v,disabled:a||w,kind:p,type:c,ia:y},x),w?o.createElement(u.Z,{size:u.Z.sizes.sm}):y?f||r||(r=o.createElement(s.Z,{title:"IA","aria-hidden":"true"})):f,d,b)})));g.displayName=p,g.sizes=c.Z.sizes,g.kinds=c.Z.kinds,g.types=c.Z.types;const v=g},67425:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(27378),n=(a(23615),a(10497)),i=a(96287),o=a(1205);const l=Object.freeze({});function s(e,t){if(!t)return t;const a=e?Object.assign({},e,t):Object.assign({},t);var r,n;return r=t,n="props",Object.prototype.hasOwnProperty.call(r,n)&&(a.props=function(e,t){if(!t)return t;const a=e?Object.assign({},e):{};return Object.keys(t).forEach((e=>{t[e]===i.p?delete a[e]:a[e]=t[e]})),a}(null==e?void 0:e.props,t.props)),a}const d=e=>{let{children:t,spec:a}=e;const i=(0,r.useContext)(o.Z),d=(0,n.Z)(a||l,{deep:!0}),c=(0,r.useMemo)((()=>function(e,t){const a=Object.keys(t);return 0===a.length?e:a.reduce(((a,r)=>(a[r]=s(e[r],t[r]),a)),Object.assign({},e))}(i,d)),[i,d]);return r.createElement(o.Z.Provider,{value:c},t)};d.displayName="ComponentsConfig",d.unset=i.p;const c=d},79011:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(25773),n=a(27378),i=a(67468),o=a(85901),l=a(17717),s=a(66677),d=a(29478),c=a(61778),u=a(24338);const m=i.ZP.form.withConfig({displayName:"Form__Root",componentId:"tg-1wm__sc-d5k6eq-0"})([""," display:block;margin:0;padding:0;"],o.Z),p=(0,n.forwardRef)(((e,t)=>n.createElement(m,(0,r.Z)({},e,{ref:t}))));p.displayName="Form",p.Style=m,p.Control=l.Z,p.ControlLabel=s.Z,p.Label=d.Z,p.Group=c.Z,p.Feedback=u.Z;const h=p},17717:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(85901),s=a(74333),d=a(24338),c=a(29478);const u=["children","disabled","error","success","required","inline"],m=o.ZP.div.withConfig({displayName:"FormControl__Root",componentId:"tg-1wm__sc-11hy1kc-0"})([""," border:none;padding:0;margin:0 0 var(--size-spacing-04) 0;",""],l.Z,(e=>{let{$inline:t}=e;return t?(0,o.iv)(["display:inline-flex;align-items:center;margin-bottom:0;margin-right:var(--size-spacing-04);"]):(0,o.iv)(["&:has([data-tg-inline-edit='true']) > ","{margin-bottom:var(--size-spacing-01);}&:has([data-tg-inline-edit='true']) > ","{margin-top:var(--size-spacing-01);}"],c.Z.Style,d.Z.Style)})),p=(0,i.forwardRef)(((e,t)=>{let{children:a=null,disabled:o=!1,error:l=!1,success:d=!1,required:c=!1,inline:p=!1}=e,h=(0,n.Z)(e,u);const g=(0,i.useMemo)((()=>({inline:p,required:c,disabled:o,error:l,success:d})),[p,c,o,l,d]);return i.createElement(s.Z.Provider,{value:g},i.createElement(m,(0,r.Z)({ref:t,$inline:p},h),a))}));p.displayName="FormControl",p.Context=s.Z,p.Style=m;const h=p},74333:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(27378).createContext({})},66677:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468),d=a(85901),c=a(959);const u=["children","inverted","disabled","error"],m=(0,s.ZP)(c.Z).withConfig({displayName:"FormControlLabel__Root",componentId:"tg-1wm__sc-d76acl-0"})([""," color:var(--neutral-text-high-emphasis);margin-left:var(--size-spacing-03);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{$error:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--danger-text);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inverted:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-inverse);}"])})),p=(0,i.forwardRef)(((e,t)=>{let{children:a,inverted:o=!1,disabled:l=!1,error:s=!1}=e,d=(0,n.Z)(e,u);return i.createElement(m,(0,r.Z)({ref:t,$disabled:l,$inverted:o,$error:s,forwardedAs:"label"},d),a)}));p.displayName="FormControlLabel",p.Style=m,p.propTypes={children:l().node.isRequired,inverted:l().bool,disabled:l().bool,error:l().bool};const h=p},24338:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(85901),s=a(58649),d=a(959);const c=["children","as","error","success"],u=(0,o.ZP)(d.Z).withConfig({displayName:"FormFeedback__Root",componentId:"tg-1wm__sc-7iulb-0"})([""," display:block;color:var(--neutral-text-low-emphasis);margin-top:var(--size-spacing-02);"," ",""],l.Z,(e=>{let{$success:t}=e;return t&&(0,o.iv)(["color:var(--success-text);"])}),(e=>{let{$error:t}=e;return t&&(0,o.iv)(["color:var(--danger-text);"])})),m=(0,i.forwardRef)(((e,t)=>{let{children:a=null,as:o="span",error:l=!1,success:m=!1}=e,p=(0,n.Z)(e,c);const{error:h,success:g}=(0,s.Z)(),v=h||l,f=g||m;return a&&i.createElement(u,(0,r.Z)({ref:t,forwardedAs:o,token:d.Z.tokens.TEXT_SM_REGULAR,$error:v,$success:f},p),a)}));m.displayName="FormFeedback",m.Style=u;const p=m},61778:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468),d=a(85901);const c=["children","row"],u=s.ZP.div.withConfig({displayName:"FormGroup__Root",componentId:"tg-1wm__sc-bue639-0"})([""," display:flex;flex-wrap:wrap;flex-direction:column;> label:not(:last-child){margin:0 0 var(--size-spacing-02) 0;}",""],d.Z,(e=>{let{$row:t}=e;return t&&(0,s.iv)(["flex-direction:row;> label:not(:last-child){margin:0 var(--size-spacing-04) 0 0;}"])})),m=(0,i.forwardRef)(((e,t)=>{let{children:a,row:o=!1}=e,l=(0,n.Z)(e,c);return i.createElement(u,(0,r.Z)({ref:t,$row:o},l),a)}));m.displayName="FormGroup",m.propTypes={children:l().node.isRequired,row:l().bool};const p=m},29478:(e,t,a)=>{a.d(t,{Z:()=>v});var r,n=a(25773),i=a(30808),o=a(82769),l=a(27378),s=a(67468),d=(a(23615),a(85901)),c=a(58649),u=a(959);const m=["children","as","disabled","required"],p=(0,s.ZP)(u.Z).withConfig({displayName:"FormLabel__Root",componentId:"tg-1wm__sc-162zhfs-0"})([""," display:block;margin:0 0 var(--size-spacing-02) 0;color:var(--neutral-text-high-emphasis);&:hover{color:var(--neutral-text-high-emphasis);}"," "," ",""],d.Z,(e=>{let{forwardedAs:t}=e;return"legend"===t&&(0,s.iv)(["margin-bottom:var(--size-spacing-03);"])}),(e=>{let{disabled:t}=e;return t&&(0,s.iv)(["&,&:hover{color:var(--neutral-text-disabled);}"])}),(e=>{let{$inline:t}=e;return t&&(0,s.iv)(["margin-bottom:0;margin-right:var(--size-spacing-02);"])})),h=(0,s.ZP)((e=>{let t=Object.assign({},((0,o.Z)(e),e));return l.createElement("span",t," *")})).withConfig({displayName:"FormLabel__Required",componentId:"tg-1wm__sc-162zhfs-1"})(["color:var(--danger-text);"]),g=(0,l.forwardRef)(((e,t)=>{let{children:a,as:o="label",disabled:s=!1,required:d=!1}=e,g=(0,i.Z)(e,m);const{inline:v,disabled:f,required:b}=(0,c.Z)();return l.createElement(p,(0,n.Z)({ref:t},g,{$inline:v,token:u.Z.tokens.TEXT_MD_BOLD,forwardedAs:o,disabled:s||f}),a,(d||b)&&(r||(r=l.createElement(h,null))))}));g.displayName="FormLabel",g.Style=p;const v=g},58649:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(27378),n=a(74333);const i=()=>r.useContext(n.Z)},38095:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(34822),s=a(89679);const d=["children","lineBreak","gap","inline","verticalAlign","horizontalAlign","as"];function c(e){return"string"==typeof e?e:"var(--size-spacing-".concat(e.toString().padStart(2,"0"),")")}const u=o.ZP.div.withConfig({displayName:"InlineGroup__Root",componentId:"tg-1wm__sc-1n0xm5v-0"})(["display:flex;flex-direction:row;gap:",";"," ",";"," ",""],(e=>{let{$gap:t}=e;return Array.isArray(t)?t.map(c).join(" "):c(t)}),(e=>{let{$inline:t}=e;return t&&(0,o.iv)(["display:inline-flex;"])}),(e=>{let{$horizontalAlign:t}=e;return t&&(0,o.iv)(["justify-content:",";"],t)}),(e=>{let{$verticalAlign:t}=e;return t&&(0,o.iv)(["align-items:",";"],t)}),(e=>{let{$lineBreak:t}=e;return t&&(0,o.iv)(["flex-wrap:wrap;"])})),m=(0,i.forwardRef)(((e,t)=>{let{children:a,lineBreak:o=!1,gap:l="var(--size-spacing-02)",inline:s=!1,verticalAlign:c=m.verticalAlignments.top,horizontalAlign:p=m.horizontalAlignments.left,as:h="div"}=e,g=(0,n.Z)(e,d);return i.createElement(u,(0,r.Z)({ref:t,as:h,$gap:l,$inline:s,$lineBreak:o,$horizontalAlign:p,$verticalAlign:c},g),a)}));m.displayName="InlineGroup",m.Style=u,m.Item=s.Z,m.horizontalAlignments=l.T,m.verticalAlignments=l.n;const p=m},89679:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(34822);const s=["children","verticalAlign","fluid","as"],d=o.ZP.div.withConfig({displayName:"InlineGroupItem__Root",componentId:"tg-1wm__sc-1r2n1hz-0"})(["",";",""],(e=>{let{$verticalAlign:t}=e;return t&&(0,o.iv)(["align-self:",";"],t)}),(e=>{let{$fluid:t}=e;return t&&(0,o.iv)(["flex:1;min-width:0;"])})),c=(0,i.forwardRef)(((e,t)=>{let{children:a,verticalAlign:o,fluid:l=!1,as:c="div"}=e,u=(0,n.Z)(e,s);return i.createElement(d,(0,r.Z)({ref:t,as:c,$verticalAlign:o,$fluid:l},u),a)}));c.displayName="InlineGroupItem",c.Style=d,c.verticalAlignments=l.n;const u=c},34822:(e,t,a)=>{a.d(t,{T:()=>r,n:()=>n});const r={left:"flex-start",center:"center",right:"flex-end",spaceBetween:"space-between"},n={top:"start",center:"center",bottom:"end",baseline:"baseline",stretch:"stretch"}},55575:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(66644),s=a(58649),d=a(67425),c=a(19201);const u=["rootRef","className","style","value","defaultValue","prefix","suffix","width","inlineEdit","disabled","required","error","success","aria-invalid"],m={IconButton:{props:{kind:"neutral",size:"sm"}}},p=(0,o.ZP)(c.Z).withConfig({displayName:"Input__Root",componentId:"tg-1wm__sc-2oktpa-0"})([""]),h=(0,i.forwardRef)(((e,t)=>{let{rootRef:a,className:o,style:c,value:h,defaultValue:g,prefix:v,suffix:f,width:b,inlineEdit:y=!1,disabled:w=!1,required:Z=!1,error:x=!1,success:k=!1}=e,z=(0,n.Z)(e,u);const _=(0,i.useRef)(null),E=(0,s.Z)(),C=E.required||Z,$=E.success||k,P=E.error||x,T=Object.assign({},$||P?{"aria-invalid":P||!$}:{}),I=(0,i.useCallback)((()=>{_.current.focus()}),[]);return i.createElement(p,{ref:a,className:o,style:c,disabled:w,prefix:v&&i.createElement(d.Z,{spec:m},v),suffix:f&&i.createElement(d.Z,{spec:m},f),width:b,inlineEdit:y,onClick:I},i.createElement("input",(0,r.Z)({},z,{ref:(0,l.Z)([_,t]),disabled:w,value:h,defaultValue:g,"aria-required":C},T)))}));h.displayName="Input",h.Style=p;const g=h},19201:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(61380),s=a(78859),d=a(75387),c=a(26503),u=a(38095);const m=["disabled","prefix","suffix","width","inlineEdit","children"],p=(0,o.ZP)(u.Z).attrs({gap:1,verticalAlign:u.Z.verticalAlignments.center}).withConfig({displayName:"InputControl__Prefix",componentId:"tg-1wm__sc-1bx7dgp-0"})(["height:calc(var(--input-height) - 2px);> svg{--custom-icon-color:var(--input-icon-color);}","{"," --focus-outline-offset:calc(-1 * var(--size-spacing-01) - 1px);&:hover,&:focus,&:active{&:not(:disabled),&:not([disabled]),&:not([aria-disabled='true']){background-color:transparent;}}}& > ",":first-child,& > ",":first-child{margin-left:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}[data-tg-inline-edit='true'] & > ",":first-child,[data-tg-inline-edit='true'] & > ",":first-child{margin-left:0;}"],d.Z.Style,d.Z.SmallStyle,d.Z.Style,c.Z.Style,d.Z.Style,c.Z.Style),h=(0,o.ZP)(p).withConfig({displayName:"InputControl__Suffix",componentId:"tg-1wm__sc-1bx7dgp-1"})(["& > ",":last-child,& > ",":last-child{margin-right:calc(-1 * (var(--size-spacing-03) - var(--size-spacing-01)));}[data-tg-inline-edit='true'] & > ",":last-child,[data-tg-inline-edit='true'] & > ",":last-child{margin-right:0;}"],d.Z.Style,c.Z.Style,d.Z.Style,c.Z.Style),g=o.ZP.div.withConfig({displayName:"InputControl__Root",componentId:"tg-1wm__sc-1bx7dgp-2"})(["--focus-border-radius:var(--border-radius-md);--input-height:",";--input-border-color:var(--neutral-border-interactive);--input-background-color:var(--neutral-surface);--input-text-color:var(--neutral-text-low-emphasis);--input-value-color:var(--neutral-text-high-emphasis);--input-placeholder-color:var(--neutral-text-low-emphasis);--input-icon-color:var(--neutral-icon-low-emphasis);--input-line-height:calc( var(--input-height) - 2px - (2 * var(--size-spacing-02)) );"," display:flex;gap:var(--size-spacing-02);align-items:center;height:var(--input-height);width:",";border-radius:var(--border-radius-md);border:1px solid var(--input-border-color);padding:0 var(--size-spacing-03);color:var(--neutral-text-low-emphasis);background-color:var(--input-background-color);box-shadow:none;&,> input,> input::placeholder,> textarea,> textarea::placeholder{font:var(--text-md-regular);line-height:var(--input-line-height);letter-spacing:-0.01em;}input{height:var(--input-line-height);}input,textarea{display:block;flex:1;margin:0;min-width:0;border:0;padding:0;outline:0;color:var(--input-value-color);background-color:transparent;&::placeholder{color:var(--input-placeholder-color);}::-ms-clear{display:none;width:0;height:0;}::-ms-reveal{display:none;width:0;height:0;}::-webkit-search-decoration,::-webkit-search-cancel-button,::-webkit-search-results-button,::-webkit-search-results-decoration{display:none;}}&:hover,&:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}&[aria-invalid='true'],&:has(*[aria-invalid='true']){&,&:hover{--input-border-color:var(--danger-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-invalid='false'],&:has(*[aria-invalid='false']){&,&:hover{--input-border-color:var(--success-border);}&:focus-within,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-hover);}}&[aria-disabled='true']{--input-background-color:var(--neutral-surface-disabled);--input-value-color:var(--neutral-text-disabled);--input-placeholder-color:var(--neutral-text-disabled);&,&:hover,&:focus,&:focus-within,&:hover:focus,&:hover:focus-within{--input-border-color:var(--neutral-border-interactive-disabled);}}",""],"40px",l.Z,(e=>{let{$width:t}=e;return t||"100%"}),s.Z),v=(0,i.forwardRef)(((e,t)=>{let{disabled:a,prefix:o,suffix:l,width:s,inlineEdit:d=!1,children:c}=e,u=(0,n.Z)(e,m);return i.createElement(g,(0,r.Z)({},u,{ref:t,"aria-disabled":a,$width:s,"data-tg-inline-edit":d?"true":void 0}),o&&i.createElement(p,null,o),c,l&&i.createElement(h,null,l))}));v.displayName="InputControl",v.Style=g;const f=v},5662:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(8925),s=a(61994),d=a(29163),c=a(84227),u=a(79226),m=a(90496),p=a(79778),h=a(85689);const g=["forwardedAs","children","as","size","listStyleType","alignment","bordered"],v=["$listStyleType","as"],f=o.ZP.ul.withConfig({displayName:"List__Root",componentId:"tg-1wm__sc-4hzzzr-0"})(["padding:0;margin:0;list-style-position:inside;list-style-type:",";background-color:var(--neutral-surface);width:100%;"],(e=>{let{$listStyleType:t}=e;return t})),b=(0,i.forwardRef)(((e,t)=>{let{forwardedAs:a,children:o,as:l=b.as.ul,size:s=b.sizes.md,listStyleType:d="none",alignment:c=b.alignments.center,bordered:u=!1}=e,m=(0,n.Z)(e,g);const y={size:s,alignment:c,bordered:u},w=i.Children.toArray(o).filter((e=>i.isValidElement(e))).filter((e=>{let{props:t}=e;return t.clickable})).length?p.R.div:null,Z=l!==p.R.ul&&l!==p.R.ol&&l!==p.R.menu?p.R.div:null,x=i.Children.map(o,(e=>{if(!i.isValidElement(e))return e;const t=e.props,a=(0,n.Z)(t,v);return(0,i.cloneElement)(e,Object.assign({size:s,listStyleType:d,alignment:c,forwardedAs:w||Z},a))}));return i.createElement(h.Z.Provider,{value:y},i.createElement(f,(0,r.Z)({role:"list",as:w||l||a,$listStyleType:d,ref:t,$size:s,$alignment:c,$bordered:u},m),x))}));b.displayName="List",b.Item=l.Z,b.Header=s.Z,b.Divider=d.Z,b.Style=f,b.ItemContent=c.Z,b.ItemExtra=u.Z,b.sizes={sm:m.zf.SM,md:m.zf.MD},b.as=p.R,b.alignments=p.d;const y=b},85689:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a(27378).createContext({})},29163:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468);const d=["forwardedAs","as"],c=s.ZP.li.withConfig({displayName:"ListDivider__Root",componentId:"tg-1wm__sc-1ueoufh-0"})(["height:1px;border:none;background-color:var(--neutral-border);margin:var(--size-spacing-02) 0;list-style:none;"]),u=(0,i.forwardRef)(((e,t)=>{let{forwardedAs:a,as:o}=e,l=(0,n.Z)(e,d);return i.createElement(c,(0,r.Z)({as:a||o,ref:t},l,{role:"separator"}))}));u.displayName="ListDivider",u.Style=c,u.propTypes={as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const m=u},61994:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(25773),n=a(30808),i=a(27378),o=a(23615),l=a.n(o),s=a(67468),d=a(85901),c=a(959);const u=["children","forwardedAs","as"],m=s.ZP.li.withConfig({displayName:"ListHeader__Root",componentId:"tg-1wm__sc-19u7u4r-0"})([""," padding:var(--size-spacing-04) var(--size-spacing-03) var(--size-spacing-02);position:relative;align-items:center;display:inline-flex;width:100%;list-style:none;"],d.Z),p=(0,s.ZP)(c.Z).withConfig({displayName:"ListHeader__StyledText",componentId:"tg-1wm__sc-19u7u4r-1"})(["margin:0;"]),h=(0,i.forwardRef)(((e,t)=>{let{children:a,forwardedAs:o,as:l}=e,s=(0,n.Z)(e,u);return i.createElement(m,(0,r.Z)({ref:t,as:o||l},s),i.createElement(p,{textColor:"--neutral-text-low-emphasis",token:c.Z.tokens.TEXT_XS_BOLD},a.toUpperCase()))}));h.displayName="ListHeader",h.Style=m,h.propTypes={children:l().string.isRequired,as:l().oneOfType([l().node,l().string]),forwardedAs:l().oneOfType([l().node,l().string])};const g=h},8925:(e,t,a)=>{a.d(t,{Z:()=>y});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(50046),s=a(90496),d=a(79778),c=a(85689),u=a(84227),m=a(79226),p=a(59942),h=a(95778),g=a(76548);const v=["children","size","onClick","forwardedAs","as","disabled","active","clickable","listStyleType"],f=o.ZP.li.withConfig({displayName:"ListItem__Root",componentId:"tg-1wm__sc-ygn4xa-0"})(["outline:none;position:relative;padding:var(--size-spacing-03) var(--size-spacing-04);width:100%;display:",";align-items:",";",";",";",";",";",";"],(e=>{let{$listStyleType:t}=e;return t&&"none"!==t?"list-item":"flex"}),(e=>{let{$alignment:t}=e;return t===d.d.top?"flex-start":"center"}),(e=>{let{$childrenNumber:t}=e;return t&&(0,o.iv)(["","{order:",";}"],g.Z.Style,t)}),(e=>{let{$bordered:t}=e;return t&&(0,o.iv)(["border-bottom:1px solid var(--neutral-border);"])}),(e=>{let{$clickable:t}=e;return t&&(0,o.iv)(["cursor:pointer;&:hover{background-color:var(--neutral-surface-hover);}"])}),(e=>{let{$active:t}=e;return t&&(0,o.iv)(["&,&:hover,&:focus{background-color:var(--neutral-surface-low-emphasis);}"])}),(e=>{let{$disabled:t}=e;return t&&(0,o.iv)(["pointer-events:none;background-color:transparent;& *,&:hover *,&:focus *{pointer-events:none;color:var(--neutral-text-disabled);","{svg{--custom-icon-color:var(--neutral-icon-disabled);}}}"],h.Z.Style)})),b=(0,i.forwardRef)(((e,t)=>{let{children:a,onClick:o,forwardedAs:s,as:d,disabled:u=!1,active:m=!1,clickable:p=!1,listStyleType:h="none"}=e,g=(0,n.Z)(e,v);const{alignment:b,bordered:y}=i.useContext(c.Z);let w;(p&&o||p)&&(w={role:"button","aria-pressed":m,tabIndex:0,as:"div","aria-disabled":u,$disabled:u});const Z=a?i.Children.count(a):0;return i.createElement(f,(0,r.Z)({ref:t,onClick:e=>{u||(0,l.Z)(o)&&o(e)},$clickable:p,$active:m,as:s||d,$listStyleType:h},w,g,{$childrenNumber:Z,$alignment:b,$bordered:y}),a)}));b.displayName="ListItem",b.Selector=p.Z,b.Image=h.Z,b.Action=g.Z,b.Content=u.Z,b.Style=f,b.Extra=m.Z,b.sizes={sm:s.zf.SM,md:s.zf.MD};const y=b},76548:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(30808),n=a(27378),i=(a(23615),a(67468));const o=["children"],l=i.ZP.div.withConfig({displayName:"ListItemAction__Root",componentId:"tg-1wm__sc-1uq8xv6-0"})(["display:inline-flex;flex-shrink:0;margin-left:var(--size-spacing-04);"]),s=e=>{let{children:t}=e,a=(0,r.Z)(e,o);return n.createElement(l,a,t)};s.displayName="ListItemAction",s.style=l,s.Style=l;const d=s},84227:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(959),s=a(90496),d=a(85689),c=a(79778);const u=["children","mainText","secondaryText","mainColor","secondaryColor"],m=o.ZP.div.withConfig({displayName:"ListItemContent__Root",componentId:"tg-1wm__sc-1ffisao-0"})(["flex:1 1 auto;min-width:0;",""],(e=>{let{$alignment:t}=e;return t&&t===c.d.top&&(0,o.iv)(["margin-top:var(--size-spacing-02);"])})),p=(0,i.forwardRef)(((e,t)=>{let{children:a,mainText:o,secondaryText:c="",mainColor:p="--neutral-text-high-emphasis",secondaryColor:h="--neutral-text-low-emphasis"}=e,g=(0,n.Z)(e,u);const{size:v,alignment:f}=i.useContext(d.Z);return a?i.createElement(m,(0,r.Z)({ref:t},g,{$alignment:f}),a):(console.warn("Tangram: the props `mainText`, `secondaryText`, `mainColor`, `secondaryColor` is deprecated and will be removed soon!"),i.createElement(m,(0,r.Z)({ref:t},g,{$alignment:f}),i.createElement(l.Z,{as:"div",textColor:p,token:v===s.zf.SM?l.Z.tokens.TEXT_SM_REGULAR:l.Z.tokens.TEXT_MD_REGULAR},o),i.createElement(l.Z,{as:"div",textColor:h,token:v===s.zf.SM?l.Z.tokens.TEXT_XS_REGULAR:l.Z.tokens.TEXT_SM_REGULAR},c)))}));p.displayName="ListItemContent",p.Style=m;const h=p},79226:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468));const l=["children","left","right"],s=o.ZP.div.withConfig({displayName:"ListItemExtra__Root",componentId:"tg-1wm__sc-9uqjkk-0"})(["align-items:center;display:inline-flex;svg{fill:var(--neutral-icon-low-emphasis);}"," ",""],(e=>{let{$left:t}=e;return t&&(0,o.iv)(["padding-right:var(--size-spacing-03);"])}),(e=>{let{$right:t}=e;return t&&(0,o.iv)(["padding-left:var(--size-spacing-03);"])})),d=(0,i.forwardRef)(((e,t)=>{let{children:a,left:o=!1,right:d=!1}=e,c=(0,n.Z)(e,l);return i.createElement(s,(0,r.Z)({ref:t,$left:o,$right:d},c),a)}));d.displayName="ListItemExtra",d.Style=s;const c=d},95778:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(30808),n=a(27378),i=(a(23615),a(67468));const o=["children"],l=i.ZP.div.withConfig({displayName:"ListItemImage__Root",componentId:"tg-1wm__sc-hdtxtx-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);"]),s=e=>{let{children:t}=e,a=(0,r.Z)(e,o);return n.createElement(l,a,t)};s.displayName="ListItemImage",s.Style=l;const d=s},59942:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(25773),n=a(30808),i=a(27378),o=(a(23615),a(67468)),l=a(85689),s=a(79778);const d=["children"],c=o.ZP.div.withConfig({displayName:"ListItemSelector__Root",componentId:"tg-1wm__sc-ranr7f-0"})(["display:inline-flex;flex-shrink:0;margin-right:var(--size-spacing-03);",""],(e=>{let{$alignment:t}=e;return t&&t===s.d.top&&(0,o.iv)(["margin-top:11px;"])})),u=e=>{let{children:t}=e,a=(0,n.Z)(e,d);const{alignment:o}=i.useContext(l.Z);return i.createElement(c,(0,r.Z)({$alignment:o},a),t)};u.displayName="ListItemSelector",u.Style=c;const m=u},79778:(e,t,a)=>{a.d(t,{R:()=>n,d:()=>r});const r={top:"top",center:"center"},n={ul:"ul",ol:"ol",div:"div",nav:"nav",menu:"menu"}},78859:(e,t,a)=>{a.d(t,{Z:()=>n});const r=":not([aria-disabled='true']):not(:has(input[readonly])):not(:has(textarea[readonly]))",n=(0,a(67468).iv)(["&[data-tg-inline-edit='true']{--tg-inline-edit-hover-border:var(--neutral-border-interactive-hover);--tg-inline-edit-focus-border:var(--primary-border);border:0;border-bottom:1px solid transparent;border-radius:0;padding:0;box-sizing:border-box;--focus-border-radius:0;--input-placeholder-color:var(--neutral-text-disabled);--input-value-color:var(--neutral-text-high-emphasis);&:focus-within{outline:none;}&",":focus-within,&",":focus-within input,&",":focus-within textarea{cursor:text;}&",":not(:focus-within):hover{--input-value-color:var(--neutral-text-low-emphasis);border-bottom:1px dashed var(--tg-inline-edit-hover-border);}&",":is([aria-invalid='true'],:has(*[aria-invalid='true'])){--tg-inline-edit-hover-border:var(--danger-border);--tg-inline-edit-focus-border:var(--danger-border);--input-value-color:var(--neutral-text-high-emphasis);}&",":is([aria-invalid='false'],:has(*[aria-invalid='false'])){--tg-inline-edit-hover-border:var(--success-border);--tg-inline-edit-focus-border:var(--success-border);--input-value-color:var(--neutral-text-high-emphasis);}&",":not(:focus-within):is([aria-invalid='true'],:has(*[aria-invalid='true'])),&",":not(:focus-within):is([aria-invalid='false'],:has(*[aria-invalid='false'])){border-bottom:1px solid var(--tg-inline-edit-hover-border);}&",":focus-within,&",":active{--input-value-color:var(--neutral-text-high-emphasis);border-bottom:1px solid var(--tg-inline-edit-focus-border);}&[aria-disabled='true'],&:has(input[readonly]),&:has(textarea[readonly]){background-color:transparent;--input-background-color:transparent;--input-value-color:var(--neutral-text-disabled);--input-placeholder-color:var(--neutral-text-disabled);}a{display:inline-flex;align-items:center;color:inherit;text-decoration:none;cursor:pointer;svg{--custom-icon-color:var(--input-icon-color);}&:hover,&:focus-visible{svg{--custom-icon-color:var(--neutral-icon-high-emphasis);}}}}"],r,r,r,r,r,r,r,r,r,r)},42900:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(25773),n=a(30808),i=a(27378),o=a(4492),l=(a(23615),a(67468)),s=a(61380),d=a(90496),c=a(50046),u=a(10716),m=a(82985);const p={[d.$O.DEFAULT]:{background:"var(--neutral-surface-low-emphasis)",backgroundHover:"var(--neutral-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.PRIMARY]:{background:"var(--primary-surface-high-emphasis)",backgroundHover:"var(--primary-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.SUCCESS]:{background:"var(--success-surface-high-emphasis)",backgroundHover:"var(--success-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.DANGER]:{background:"var(--danger-surface-high-emphasis)",backgroundHover:"var(--danger-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"},[d.$O.WARNING]:{background:"var(--warning-surface-high-emphasis)",backgroundHover:"var(--warning-surface-hover)",color:"var(--neutral-text-high-emphasis)",fill:"var(--neutral-icon-high-emphasis)"},[d.$O.HELP]:{background:"var(--highlight-surface-high-emphasis)",backgroundHover:"var(--highlight-surface-hover)",color:"var(--neutral-text-inverse)",fill:"var(--neutral-icon-inverse)"}},h=(0,l.iv)([""," "," &[data-tg-ia='true']{background-color:transparent;background-image:var(--tg-ia-surface);color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}&:hover,&:active,&:focus-within{background-color:transparent;color:var(--neutral-text-high-emphasis);svg{fill:var(--neutral-icon-high-emphasis);}}&[role='button']{cursor:pointer;user-select:none;&:hover,&:active,&:focus-within{","}}}"],m.Z,(e=>{let{$tagKind:t,$isRemovable:a,onClick:r}=e;const n=p[a?d.$O.DEFAULT:t]||p[d.$O.DEFAULT],{background:i,color:o,fill:s,backgroundHover:c}=n;return(0,l.iv)(["background-color:",";color:",";svg{fill:",";}",""],i,o,s,(r||a)&&(e=>{let{backgroundHover:t,color:a,fill:r,onClick:n}=e;return(0,l.iv)([""," &:hover,&:active,&:focus-within{color:",";background-color:",";svg{fill:",";}}"],n&&(0,l.iv)(["cursor:pointer;user-select:none;"]),a,t,r)})({backgroundHover:c,color:o,fill:s,onClick:r}))}),m.Z.Hover),g=["children","startIcon","icon","removable","onDelete","onClick","kind","clickable","size","ia"],v={[d.zf.MD]:{height:"24px",font:"var(--text-xs-bold)",iconSize:"xs"},[d.zf.LG]:{height:"32px",font:"var(--text-sm-bold)",iconSize:"sm"},[d.zf.XL]:{height:"40px",font:"var(--text-md-bold)",iconSize:"md"}},f=l.ZP.div.withConfig({displayName:"Tag__Root",componentId:"tg-1wm__sc-1q0hqb4-0"})(["--focus-border-radius:var(--border-radius-xs);"," gap:var(--size-spacing-01);border-radius:var(--border-radius-xs);padding:0 var(--size-spacing-02);display:inline-flex;align-items:center;width:max-content;"," "," ",""],s.Z,h,(e=>{let{$size:t}=e;const{height:a,font:r}=v[t]||v[d.zf.MD];return(0,l.iv)(["height:",";font:",";"],a,r)}),(e=>{let{$isRemovable:t}=e;return t&&(0,l.iv)(["gap:var(--size-spacing-02);"])})),b=l.ZP.span.withConfig({displayName:"Tag__Display",componentId:"tg-1wm__sc-1q0hqb4-1"})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;"]),y=l.ZP.div.withConfig({displayName:"Tag__CloseButton",componentId:"tg-1wm__sc-1q0hqb4-2"})(["display:flex;align-items:center;cursor:pointer;"," svg{fill:var(--neutral-icon-low-emphasis);}&:hover:not([disabled]){background-color:transparent;svg{fill:var(--neutral-icon-high-emphasis);}}"],(e=>{let{$size:t}=e;const{height:a}=v[t]||v[d.zf.MD];return(0,l.iv)(["height:",";"],a)})),w=(0,i.forwardRef)(((e,t)=>{let{children:a,startIcon:l,icon:s,removable:m,onDelete:p,onClick:h,kind:Z=w.kinds.default,clickable:x=!0,size:k=w.sizes.md,ia:z=!1}=e,_=(0,n.Z)(e,g);const{iconSize:E}=v[k]||v[d.zf.MD],C=x&&(0,c.Z)(h),$=(0,c.Z)(p)||m,P=s||l,T=(0,i.useCallback)((()=>P?(0,i.isValidElement)(P)&&(0,i.cloneElement)(P,Object.assign({},P.props,{size:E})):null),[P,E]);return(0,i.useEffect)((()=>{Z!==w.kinds.default&&"string"==typeof a&&a.split(" ").length>2&&console.warn("Tangram: is not recommended to use more than two words")}),[Z,a]),(0,u.Z)({removable:m,originName:"Tag",fallback:"Use `onDelete` property as callback to define automatically the display with delete icon button"}),(0,u.Z)({startIcon:l,originName:"Tag",fallback:"Replace by `icon` property"}),(0,u.Z)({clickable:!x||void 0,originName:"Tag",fallback:"Use `onClick` to automatically display the appropriate styles of hover, focus and active states"}),i.createElement(f,(0,r.Z)({$tagKind:Z,$size:k,$isRemovable:$,"data-tg-ia":z||void 0,onClick:C?h:void 0,tabIndex:C?0:void 0,role:C?"button":void 0,onKeyDown:C?e=>{C&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),null==h||h(e)))}:void 0},_,{ref:t}),T(),a&&i.createElement(b,{$isRemovable:$},a),$&&i.createElement(y,{$size:k,onClick:e=>{e.stopPropagation(),p(e)},role:"button"},i.createElement(o.Z,{size:E,title:"Remove tag",titleId:"idIconCloseTag"})))}));w.displayName="Tag",w.Style=f,w.kinds={default:d.$O.DEFAULT,primary:d.$O.PRIMARY,success:d.$O.SUCCESS,danger:d.$O.DANGER,warning:d.$O.WARNING,help:d.$O.HELP},w.sizes={md:d.zf.MD,lg:d.zf.LG,xl:d.zf.XL};const Z=w},3859:(e,t,a)=>{a.d(t,{Z:()=>r});const r=(e,t)=>!e||e.trim().length<t},10497:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(27378);function n(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const[a,r]of Object.entries(e))if(r!==t[a])return!1;return!0}function i(e){if(null===e||"object"!=typeof e||Array.isArray(e))return!1;const t=Object.getPrototypeOf(e);return t===Object.prototype||null===t}function o(e,t){if(e===t)return!0;const a=Array.isArray(e);if(a!==Array.isArray(t))return!1;if(a){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(!o(e[a],t[a]))return!1;return!0}if(!i(e)||!i(t))return!1;const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(const n of r){if(!Object.prototype.hasOwnProperty.call(t,n))return!1;if(!o(e[n],t[n]))return!1}return!0}function l(e){let{deep:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=(0,r.useRef)(e),i=t?o(e,a.current):n(e,a.current);return i?a.current:(a.current=e,e)}},8205:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(25773),n=a(27378),i=a(23615),o=a.n(i),l=a(51288),s=a(11504),d=a(81583),c=a(26703);const u=(0,n.forwardRef)(((e,t)=>{let{value:a,defaultValue:i,position:o=u.positions.bottom,width:m,onChange:p=(()=>{}),locale:h=l.Z,dateFormat:g="dd/MM/yyyy",double:v=!1,yearlyView:f=!1,inlineEdit:b=!1,error:y=!1,suffix:w,...Z}=e;const[x,k]=c.Z({value:a,defaultValue:i}),z=(0,n.useCallback)(((e,t)=>{k(e),p(t,e)}),[p,k]);return n.createElement(s.Z,(0,r.Z)({selected:x,width:m,onChange:z,popperPlacement:o,ref:t,customInput:n.createElement(d.Z,{width:"100%",inlineEdit:b,error:y,suffix:w}),locale:h,dateFormat:g,double:v,yearlyView:f,inlineEdit:b,error:y},Z))}));u.displayName="DatePicker",u.positions=s.Z.positions,u.propTypes={dateFormat:o().string,defaultValue:o().instanceOf(Date),double:o().bool,inline:o().bool,width:o().string,locale:o().object,onChange:o().func,placeholder:o().string,position:o().oneOf([u.positions.top,u.positions.bottom]),value:o().instanceOf(Date),shouldCloseOnSelect:o().bool,titleAction:o().func,yearlyView:o().bool,inlineEdit:o().bool,error:o().bool,suffix:o().node};const m=u},11504:(e,t,a)=>{a.d(t,{Z:()=>B});var r=a(25773),n=a(27378),i=a(23615),o=a.n(i),l=a(67468),s=a(22648),d=a.n(s),c=a(51288),u=a(60701),m=a(33065),p=a(959),h=a(87954),g=a(4263),v=a(66101);const f=l.ZP.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - (var(--size-spacing-04) * 2));
  flex-flow: column;
`,b=l.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--size-spacing-01) 0;
  margin-bottom: var(--size-spacing-01);
`,y=(0,l.ZP)(m.Z)`
  z-index: 1;
`,w=(0,l.ZP)(p.Z)`
  margin: var(--size-spacing-02) 0;
  font: var(--text-md-bold);
  color: var(--neutral-text-low-emphasis);
  text-align: center;
  cursor: default;
  position: absolute;
  left: 0;
  width: 280px;
`,Z=(0,n.forwardRef)(((e,t)=>{let{locale:a=c.Z,...i}=e;const{date:o,changeYear:l}=i;let s=o;return n.createElement(f,(0,r.Z)({ref:t},i),n.createElement(b,null,n.createElement(y,{kind:m.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,u.default)(s)-1),"aria-controls":"headerNavigation"},n.createElement(g.Z,{id:"previous-year",title:"go to previous year",titleId:"previous-year"})),n.createElement(w,{id:"headerNavigation","aria-live":"assertive"},(0,u.default)(s)),n.createElement(y,{kind:m.Z.kinds.tertiary,size:h.Z.sizes.sm,onClick:()=>l((0,u.default)(s)+1),"aria-controls":"headerNavigation"},n.createElement(v.Z,{id:"next-year",title:"go to next year",titleId:"next-year"}))))}));Z.displayName="DatePicker.YearlyHeader",Z.propTypes={locale:o().object};const x=Z;var k=a(54571),z=a(64083),_=a(87926),E=a(37811),C=a(17752),$=a(5662),P=a(50046),T=a(38095),I=a(2793);const N="48px",R=l.ZP.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: calc(100% - (var(--size-spacing-04) * 2));
  flex-flow: column;
`,S=l.ZP.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,D=(0,l.ZP)(m.Z)`
  --button-border-radius: var(--border-radius-md);
  --button-size: var(--size-spacing-05);

  margin-bottom: var(--size-spacing-04);
  z-index: 1;
`,A=(0,l.ZP)(h.Z)`
  --button-size: var(--size-spacing-05);

  margin: auto;
  text-align: center;
  text-transform: inherit;
  width: calc(
    ${"312px"} - 2 * ${N} - (2 * var(--size-spacing-04))
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
      margin-left: calc(var(--size-spacing-06) + 2 * ${N});
    `}}
`,M=(0,l.ZP)($.Z)`
  margin: 0;
  padding: 0;
  li {
    padding: var(--size-spacing-01) 0 var(--size-spacing-04);
  }
`,L=(0,n.forwardRef)(((e,t)=>{let{locale:a=c.Z,...i}=e;const{monthsShown:o,date:l,decreaseMonth:s,increaseMonth:d,prevMonthButtonDisabled:f,nextMonthButtonDisabled:b,titleAction:y}=i,w=!P.Z(y)&&{forwardedAs:"div",tabindex:"-1"},Z=Array(o).fill(0);let x=document.getElementsByClassName("react-datepicker__month"),N=l;if(o>1&&x.length){const e=x[0].getAttribute("aria-label").replace("month","").trim().split("-").join("/");N=new Date(`${e}/01`)}return n.createElement(R,(0,r.Z)({ref:t},i),n.createElement(S,null,n.createElement(D,{kind:m.Z.kinds.tertiary,onClick:s,disabled:f,"aria-controls":"headerNavigation"},n.createElement(g.Z,{id:"previous-month",title:"go to previous month",titleId:"previous-month"})),n.createElement(T.Z,{id:"headerNavigation","aria-live":"assertive"},Z.map(((e,t)=>n.createElement(A,(0,r.Z)({key:`header-${t}`,second:!!t,token:p.Z.tokens.TEXT_MD_BOLD,onClick:y,kind:h.Z.kinds.tertiary,size:h.Z.sizes.md},w),`${(0,I.G4)(a)[(0,E.default)((0,_.default)(N,t))]} ${(0,u.default)(N)}`)))),n.createElement(D,{kind:m.Z.kinds.tertiary,onClick:d,disabled:b,"aria-controls":"headerNavigation"},n.createElement(v.Z,{id:"next-month",title:"go to next month",titleId:"next-month"}))),n.createElement(S,null,Z.map(((e,t)=>n.createElement(M,{as:$.Z.as.ul,key:`weekdays-${t}`},((e,t)=>{const a=(0,k.default)(t,{locale:e});return[].concat([0,1,2,3,4,5,6].map((t=>{const r=(0,z.default)(a,t),i=e.localize.day((0,C.default)(r),{width:"short"});return n.createElement("li",{key:t,className:"react-datepicker__day-name"},i)})))})(a,(0,_.default)(N,t)))))))}));L.displayName="DatePicker.MonthlyHeader",L.propTypes={locale:o().object,titleAction:o().func};const O=L,j="40px",F=l.ZP.div`
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
      line-height: ${j};
      color: var(--neutral-text-high-emphasis);
      text-align: center;
    }

    &__day,
    &__day-name {
      width: ${j};
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
`,H=(0,n.forwardRef)(((e,t)=>{let{range:a,className:i,titleAction:o,placeholder:l,position:u=H.positions.bottom,selected:m=null,locale:p=c.Z,double:h=!1,yearlyView:g=!1,inline:v=!1,startDate:f=null,endDate:b=null,onChange:y=(()=>{}),dateFormat:w="dd/MM/yyyy",width:Z,customInput:k,inlineEdit:z=!1,error:_=!1,suffix:E,disabled:C,...$}=e;(0,s.registerLocale)("locale",p);const P=(0,n.useRef)(t),[T,I]=(0,n.useState)(!1),N=(0,n.useRef)(!0),R=(0,n.useRef)(),S=(0,n.useRef)(),D=(0,n.useRef)(),A=h?2:1;(0,n.useLayoutEffect)((()=>{if(N.current)return R.current=m,S.current=f,D.current=b,void(N.current=!1);const e=R.current&&!m,t=S.current&&!f,a=D.current&&!b;if(!P.current?.calendar?.componentNode)return;if(e||t||a){P.current.calendar.componentNode.querySelectorAll(".react-datepicker__day--selected, .react-datepicker__day--keyboard-selected").forEach((e=>{e.classList.remove("react-datepicker__day--selected"),e.classList.remove("react-datepicker__day--keyboard-selected")}))}const r=P.current.calendar.componentNode.querySelector(".react-datepicker__day--keyboard-selected"),n=P.current.calendar.componentNode.querySelector(".react-datepicker__day--selected");r&&n&&(r.classList.remove("react-datepicker__day--keyboard-selected"),n.classList.add("react-datepicker__day--keyboard-selected")),R.current=m,S.current=f,D.current=b}),[m,f,b,v]),(0,n.useLayoutEffect)((()=>{if(g&&(T||v)){if(!P.current?.calendar?.componentNode)return;const e=Array.from(P.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-text"));P.current.calendar.componentNode.querySelectorAll(".react-datepicker__month-wrapper").forEach((t=>{const a=e.splice(0,4);if(a.length)return a.map((e=>t.appendChild(e)));t.style.display="none"}))}}),[g,T,v]);const M=(0,n.isValidElement)(k)?(0,n.cloneElement)(k,{calendarOpen:T}):k;return n.createElement(F,{$monthsShown:h,$yearlyView:g,className:i,$inline:v,$width:Z,"data-tg-inline-edit":z?"true":void 0,"data-tg-error":z&&_?"true":void 0,"data-tg-calendar-open":T?"true":void 0,"aria-disabled":!!C||void 0},n.createElement(d(),(0,r.Z)({selected:m,onCalendarClose:()=>I(!1),onCalendarOpen:()=>I(!0),renderCustomHeader:e=>(e=>g?n.createElement(x,(0,r.Z)({locale:p},e)):n.createElement(O,(0,r.Z)({titleAction:o,monthsShown:A,locale:p},e)))(e),locale:"locale",monthsShown:A,popperPlacement:u,showPopperArrow:!1,showMonthYearPicker:g,inline:v,ref:P,placeholderText:l,startDate:f,endDate:b,onChange:y,dateFormat:w,customInput:M,disabled:C},$)))}));H.displayName="DatePickerBase",H.positions={top:"top-start",bottom:"bottom-start"},H.propTypes={position:o().oneOf([H.positions.top,H.positions.bottom]),selected:o().instanceOf(Date),startDate:o().instanceOf(Date),endDate:o().instanceOf(Date),inline:o().bool,onChange:o().func,locale:o().object,dateFormat:o().string,double:o().bool,yearlyView:o().bool,titleAction:o().func,placeholder:o().string};const B=H},81583:(e,t,a)=>{a.d(t,{Z:()=>$});var r=a(25773),n=a(27378),i=a(23615),o=a.n(i),l=a(67468),s=a(51288),d=a(38095),c=a(75387),u=a(61380),m=a(55575),p=a(67425),h=a(3859),g=a(73647),v=a(41703),f=a(2793),b=a(15294);const y={IconButton:{props:{kind:"neutral",size:"sm"}}},w=(0,l.ZP)(d.Z).attrs({gap:1,verticalAlign:d.Z.verticalAlignments.center})`
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
`,Z=(0,l.ZP)(m.Z)`
  &[data-tg-inline-edit='true'] {
    ${b.L}
    border-bottom: 1px solid transparent;
  }

  &[data-tg-inline-edit='true']:has(input[data-tg-calendar-open='true']):not(:has(input:disabled)):not(:has(input[aria-invalid='true'])) {
    border-bottom: 1px solid var(--primary-border);
  }

  &[data-tg-inline-edit='true']${b.N}:is([aria-invalid='true'], :has(*[aria-invalid='true'])) {
    --tg-inline-edit-hover-border: var(--danger-border);
    --tg-inline-edit-focus-border: var(--danger-border);
    --input-value-color: var(--neutral-text-high-emphasis);

    &,
    &:hover,
    &:not(:focus-within):hover,
    &:focus,
    &:focus-within,
    &:active,
    &:has(input[data-tg-calendar-open='true']) {
      --input-value-color: var(--neutral-text-high-emphasis);
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
`;function z(e){e.stopPropagation()}function _(){return n.createElement(v.Z,{title:"Datepicker",titleId:"datepicker-input"})}function E(e){let{children:t}=e;return t?n.createElement(w,{onMouseDown:z,onClick:z},n.createElement(p.Z,{spec:y},t)):null}const C=(0,n.forwardRef)(((e,t)=>{let{value:a,className:i,startDate:o="",endDate:l="",onStartChange:d=(()=>{}),onEndChange:c=(()=>{}),onChange:u=(()=>{}),firstInputRef:m=null,secondInputRef:p=null,dateFormat:v="dd/MM/yyyy",locale:b=s.Z,double:y=!1,inlineEdit:w=!1,error:z=!1,suffix:C,calendarOpen:$=!1,onFocus:P,onBlur:T,...I}=e;const[N,R]=(0,n.useState)(o),[S,D]=(0,n.useState)(l),A=(0,n.useRef)(null),M=(0,n.useRef)(null),{keyboardFocusAttr:L,onTabFocusCapture:O,onTabBlurCapture:j}=function(e){const[t,a]=(0,n.useState)(!1),r=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{if(e)return document.addEventListener("keydown",t,!0),document.addEventListener("mousedown",n,!0),()=>{document.removeEventListener("keydown",t,!0),document.removeEventListener("mousedown",n,!0)};function t(e){"Tab"===e.key&&(r.current=!0)}function n(){r.current=!1,a(!1)}a(!1)}),[e]),{keyboardFocusAttr:t?"true":void 0,onTabFocusCapture(){a(r.current)},onTabBlurCapture(){a(!1)}}}(w);(0,n.useEffect)((()=>{R(o)}),[o]),(0,n.useEffect)((()=>{D(l)}),[l]);const F=e=>{O(),P?.(e)},H=e=>{j(),T?.(e)},B=C?n.createElement(E,null,C):void 0,q=$?"true":void 0,V={onChange:e=>{const t=!h.Z(e.target.value,v.length);g.Z(e.target,[A.current])&&(R(e.target.value),t&&(d((0,f.sG)(e.target.value,v,b)),u(e))),g.Z(e.target,[M.current])&&(D(e.target.value),t&&(c((0,f.sG)(e.target.value,v,b)),u(e)))},onFocus:F,onBlur:H};return n.createElement(k,{className:y?i:void 0,ref:y?t:void 0,"data-tg-keyboard-focus":y?L:void 0},y?n.createElement(n.Fragment,null,n.createElement(Z,(0,r.Z)({prefix:_(),rootRef:A,ref:m,className:"range-start datepicker-input",type:"text",value:N},I,V)),n.createElement(x,null,"-"),n.createElement(Z,(0,r.Z)({rootRef:M,ref:p,className:"range-end datepicker-input",type:"text",value:S},I,V)),B):n.createElement(Z,(0,r.Z)({prefix:_(),value:a,onChange:u,className:`datepicker-input ${i||""}`,inlineEdit:w,error:z,suffix:B,"data-tg-calendar-open":q,"data-tg-keyboard-focus":L},I,{onFocus:F,onBlur:H,ref:t})))}));C.displayName="DatePickerInput",C.Style=k,C.propTypes={placeholder:o().string,startDate:o().string,endDate:o().string,onStartChange:o().func,onEndChange:o().func,locale:o().object,dateFormat:o().string,double:o().bool,inlineEdit:o().bool,error:o().bool,suffix:o().node,firstInputRef:o().oneOfType([o().func,o().shape({current:o().any})]),secondInputRef:o().oneOfType([o().func,o().shape({current:o().any})])};const $=C},15294:(e,t,a)=>{a.d(t,{L:()=>o,N:()=>i});var r=a(67468),n=a(61380);const i=":not([aria-disabled='true']):not(:has(input[readonly])):not(:has(textarea[readonly]))",o=r.iv`
  &:focus-within:not(:has([data-tg-keyboard-focus='true'])) {
    outline: none;
  }

  &:has([data-tg-keyboard-focus='true'])${i} {
    ${n.Z.Rules}
  }
`},2793:(e,t,a)=>{a.d(t,{G4:()=>o,VR:()=>s,sG:()=>l});var r=a(2345),n=a(44720),i=a(52993);const o=e=>{const t=[];for(let a=0;a<12;a++)t.push(e.localize.month(a));return t};function l(e,t,a){let r=(0,i.default)(e,t,new Date,{locale:a});return(0,n.default)(r)?r:null}function s(e,t){let{dateFormat:a,locale:n}=t;return e&&function(e,t,a){return(0,r.default)(e,t,{locale:a||null,awareOfUnicodeTokens:!0})}(e,Array.isArray(a)?a[0]:a,n)||""}},41703:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),u=a(79804),m=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,m.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M4 19.313C4 20.244 4.768 21 5.714 21h12.572c.946 0 1.714-.756 1.714-1.688V9.75H4v9.563zm2.286-6.75c0-.31.257-.563.571-.563h3.429c.314 0 .571.253.571.563v3.374c0 .31-.257.563-.571.563H6.857a.569.569 0 01-.571-.563v-3.374zm12-7.313H16.57V3.562A.569.569 0 0016 3h-1.143a.569.569 0 00-.571.563V5.25H9.714V3.562A.569.569 0 009.143 3H8a.569.569 0 00-.571.563V5.25H5.714C4.768 5.25 4 6.006 4 6.938v1.687h16V6.937c0-.931-.768-1.687-1.714-1.687z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},28219:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),u=a(79804),m=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,m.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M9.114 18.16l-5.85-5.85a.9.9 0 010-1.274l1.272-1.272a.9.9 0 011.273 0l3.941 3.94 8.44-8.44a.9.9 0 011.274 0l1.272 1.272a.9.9 0 010 1.273l-10.35 10.35a.9.9 0 01-1.272 0z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},4263:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),u=a(79804),m=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,m.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M7.91 12.466l5.341 5.34a.66.66 0 00.933 0l.623-.622a.66.66 0 000-.932L10.576 12l4.233-4.252a.66.66 0 00-.001-.932l-.623-.623a.66.66 0 00-.933 0l-5.34 5.34a.66.66 0 000 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},66101:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),u=a(79804),m=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,m.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M15.09 12.466l-5.341 5.34a.66.66 0 01-.933 0l-.623-.622a.66.66 0 010-.932L12.424 12 8.192 7.748a.66.66 0 01.001-.932l.623-.623a.66.66 0 01.933 0l5.34 5.34a.66.66 0 010 .933z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},44706:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),u=a(79804),m=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,m.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M11.429 3c-1.182 0-2.143 1.009-2.143 2.25v9c0 1.241.96 2.25 2.143 2.25h6.428C19.04 16.5 20 15.491 20 14.25V7.198c0-.612-.238-1.2-.66-1.625L17.41 3.626C17.01 3.225 16.477 3 15.925 3H11.43zM7.143 7.5C5.96 7.5 5 8.509 5 9.75v9C5 19.991 5.96 21 7.143 21h6.428c1.182 0 2.143-1.009 2.143-2.25v-.563h-2.143v.563H7.143v-9h.536V7.5h-.536z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M11.429 3c-1.182 0-2.143 1.009-2.143 2.25v9c0 1.241.96 2.25 2.143 2.25h6.428C19.04 16.5 20 15.491 20 14.25V7.198c0-.612-.238-1.2-.66-1.625L17.41 3.626C17.01 3.225 16.477 3 15.925 3H11.43zM7.143 7.5C5.96 7.5 5 8.509 5 9.75v9C5 19.991 5.96 21 7.143 21h6.428c1.182 0 2.143-1.009 2.143-2.25v-.563h-2.143v.563H7.143v-9h.536V7.5h-.536z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},73700:(e,t,a)=>{a.d(t,{Z:()=>g});var r,n,i=a(25773),o=a(30808),l=a(27378),s=a(23615),d=a.n(s),c=a(33842),u=a(79804),m=a(20590);const p=["size","title","titleId"];function h(e){let{size:t=c.J.md,title:a,titleId:s}=e,d=(0,o.Z)(e,p);const{kind:h}=(0,m.a)(),g=c.d.get(t);return s=(0,u.Z)(s),"duotone"===h?l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,r||(r=l.createElement("path",{d:"M11.983 3a8.97 8.97 0 00-6.2 2.493L4.487 4.197C3.938 3.647 3 4.037 3 4.812v4.865c0 .482.39.871.871.871h4.865c.776 0 1.165-.938.616-1.486L7.837 7.546a6.052 6.052 0 014.109-1.643c3.353-.028 6.18 2.685 6.15 6.15-.027 3.286-2.691 6.044-6.096 6.044a6.052 6.052 0 01-4.015-1.508.435.435 0 00-.594.02l-1.44 1.44a.436.436 0 00.018.632A9 9 0 0021 12c.001-4.966-4.05-9.01-9.015-9.001z"}))):l.createElement("svg",(0,i.Z)({width:g.width,height:g.height,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fill:"var(--custom-icon-color, var(--neutral-icon-high-emphasis))","aria-labelledby":s},d),a?l.createElement("title",{id:s},a):null,n||(n=l.createElement("path",{d:"M11.983 3a8.97 8.97 0 00-6.2 2.493L4.487 4.197C3.938 3.647 3 4.037 3 4.812v4.865c0 .482.39.871.871.871h4.865c.776 0 1.165-.938.616-1.486L7.837 7.546a6.052 6.052 0 014.109-1.643c3.353-.028 6.18 2.685 6.15 6.15-.027 3.286-2.691 6.044-6.096 6.044a6.052 6.052 0 01-4.015-1.508.435.435 0 00-.594.02l-1.44 1.44a.436.436 0 00.018.632A9 9 0 0021 12c.001-4.966-4.05-9.01-9.015-9.001z"})))}h.sizes=c.J,h.propTypes={size:d().oneOf([h.sizes.xs,h.sizes.sm,h.sizes.md,h.sizes.lg,h.sizes.xl]),titleId:d().string,title:d().string.isRequired};const g=h},51164:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>y,toc:()=>Z});var r=a(25773),n=a(27378),i=a(35318),o=a(80621),l=a(82544),s=a(23389),d=a(54479),c=a(17311),u=a(96350),m=a(8205),p=a(29478),h=a(33065),g=a(73700),v=a(44706);const f={title:"DatePicker",description:"Permite que a pessoa selecione uma data ou um per\xedodo espec\xedfico no calend\xe1rio."},b=void 0,y={unversionedId:"components/datepicker",id:"components/datepicker",title:"DatePicker",description:"Permite que a pessoa selecione uma data ou um per\xedodo espec\xedfico no calend\xe1rio.",source:"@site/docs/components/datepicker.md",sourceDirName:"components",slug:"/components/datepicker",permalink:"/tangram-doc/en/docs/components/datepicker",draft:!1,editUrl:"https://github.com/ResultadosDigitais/tangram/edit/next/docusaurus/docs/components/datepicker.md",tags:[],version:"current",frontMatter:{title:"DatePicker",description:"Permite que a pessoa selecione uma data ou um per\xedodo espec\xedfico no calend\xe1rio."},sidebar:"mySidebar",previous:{title:"Checkbox",permalink:"/tangram-doc/en/docs/components/checkbox"},next:{title:"DateRangePicker",permalink:"/tangram-doc/en/docs/components/daterangepicker"}},w={},Z=[{value:"Localiza\xe7\xe3o",id:"localization",level:2},{value:"Edi\xe7\xe3o em linha",id:"inline-edit",level:2},{value:"Boas pr\xe1ticas",id:"good-habits",level:2},{value:"Feedback",id:"feedback",level:2}],x={toc:Z};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.Z,{current:"docs",name:"datepicker",mdxType:"ComponentTab"}),(0,i.kt)("p",null,"Ao clicar no ",(0,i.kt)("inlineCode",{parentName:"p"},"DatePicker")," um calend\xe1rio ser\xe1 exibido, permitindo assim que uma data seja selecionada. Para selecionar um per\xedodo espec\xedfico utilize o componente ",(0,i.kt)(s.Z,{href:"../../../docs/components/daterangepicker",mdxType:"Link"},"DateRangePicker"),"."),(0,i.kt)(d.Z,{mdxType:"CardGrid"},(0,i.kt)(d.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)(m.Z,{placeholder:"Selecione uma data",mdxType:"DatePicker"}))),(0,i.kt)("h2",{id:"localization"},"Localiza\xe7\xe3o"),(0,i.kt)("p",null,"Atrav\xe9s da propriedade ",(0,i.kt)("inlineCode",{parentName:"p"},"locale"),", o ",(0,i.kt)("inlineCode",{parentName:"p"},"DatePicker")," permite que as informa\xe7\xf5es exibidas no calend\xe1rio estejam de acordo com a localiza\xe7\xe3o informada. A formata\xe7\xe3o de data n\xe3o \xe9 feita automaticamente, baseada no ",(0,i.kt)("inlineCode",{parentName:"p"},"locale")," recebido. Para formatar a data, use a propriedade ",(0,i.kt)("inlineCode",{parentName:"p"},"dateFormat"),". Para mais detalhes acesse nossa aba de ",(0,i.kt)(s.Z,{href:"../../../code/components/datepicker/#datepicker-dateformat",mdxType:"Link"},"API do componente"),"."),(0,i.kt)(d.Z,{mdxType:"CardGrid"},(0,i.kt)(d.D,{centered:!0,mdxType:"CardGridItem"},(0,i.kt)(u.Z,{mdxType:"Localization"}))),(0,i.kt)("h2",{id:"inline-edit"},"Edi\xe7\xe3o em linha"),(0,i.kt)("p",null,"A edi\xe7\xe3o em linha altera o estilo visual padr\xe3o do ",(0,i.kt)("inlineCode",{parentName:"p"},"DatePicker")," em todos os estados. O tipo do campo n\xe3o muda: continua um ",(0,i.kt)("inlineCode",{parentName:"p"},"DatePicker"),", usado em telas em que esse campo \xe9 um valor edit\xe1vel em linha. N\xe3o use ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineEdit")," no lugar de ",(0,i.kt)("inlineCode",{parentName:"p"},"inline"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"inline")," embute o calend\xe1rio; ",(0,i.kt)("inlineCode",{parentName:"p"},"inlineEdit")," s\xf3 muda a apar\xeancia da caixa. ",(0,i.kt)("inlineCode",{parentName:"p"},"error")," continua igual. \xcdcones \xe0 direita entram em ",(0,i.kt)("inlineCode",{parentName:"p"},"suffix"),". As a\xe7\xf5es do exemplo s\xe3o ilustrativas."),(0,i.kt)(d.Z,{mdxType:"CardGrid"},(0,i.kt)(d.D,{mdxType:"CardGridItem"},(0,i.kt)(p.Z,{htmlFor:"datepicker-inline-edit",mdxType:"FormLabel"},"Label do campo"),(0,i.kt)(m.Z,{id:"datepicker-inline-edit",inlineEdit:!0,placeholder:"Selecione uma data",suffix:(0,i.kt)(n.Fragment,null,(0,i.kt)(h.Z,{"aria-label":"Desfazer",mdxType:"IconButton"},(0,i.kt)(g.Z,{title:"Desfazer",mdxType:"Undo"})),(0,i.kt)(h.Z,{"aria-label":"Copiar",mdxType:"IconButton"},(0,i.kt)(v.Z,{title:"Copiar",mdxType:"Copy"}))),mdxType:"DatePicker"}))),(0,i.kt)("h2",{id:"good-habits"},"Boas pr\xe1ticas"),(0,i.kt)(c.ZP,{mdxType:"DoAndDont"},(0,i.kt)(c.Do,{title:"Use o dia, m\xeas e ano como n\xfameros",mdxType:"Do"},(0,i.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"dd/MM/yyyy",mdxType:"DatePicker"})),(0,i.kt)(c.pM,{title:"Nunca use o m\xeas por extenso",mdxType:"Dont"},(0,i.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"dd 'de' MMMM 'de' yyyy",mdxType:"DatePicker"}))),(0,i.kt)(c.ZP,{mdxType:"DoAndDont"},(0,i.kt)(c.Do,{title:"O dia da semana pode ser usado no in\xedcio",mdxType:"Do"},(0,i.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"EEEE, dd/MM/yyyy",mdxType:"DatePicker"})),(0,i.kt)(c.pM,{title:"N\xe3o use o dia da semana como \xfaltima informa\xe7\xe3o",mdxType:"Dont"},(0,i.kt)(m.Z,{placeholder:"Selecione uma data",selected:new Date,dateFormat:"dd/MM/yyyy, EEEE",mdxType:"DatePicker"}))),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)(l.Z,{mdxType:"FeedbackBlock"}))}k.isMDXComponent=!0},18225:(e,t,a)=>{a.d(t,{Z:()=>h});var r={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}};const n=function(e,t,a){var n,i=r[e];return n="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"en "+n:"hace "+n:n};var i=a(38781);const o={date:(0,i.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.Z)({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var l={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'ma\xf1ana a la' p",nextWeek:"eeee 'a la' p",other:"P"},s={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'ma\xf1ana a las' p",nextWeek:"eeee 'a las' p",other:"P"};const d=function(e,t,a,r){return 1!==t.getUTCHours()?s[e]:l[e]};var c=a(96419);const u={ordinalNumber:function(e,t){return Number(e)+"\xba"},era:(0,c.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despu\xe9s de cristo"]},defaultWidth:"wide"}),quarter:(0,c.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,c.Z)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:(0,c.Z)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","s\xe1"],abbreviated:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],wide:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,c.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})};var m=a(65562),p=a(7625);const h={code:"es",formatDistance:n,formatLong:o,formatRelative:d,localize:u,match:{ordinalNumber:(0,m.Z)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,p.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[u\xfa]n|despu[e\xe9]s de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[u\xfa]n)/i,/^(despu[e\xe9]s de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:(0,p.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,p.Z)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:(0,p.Z)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[\xe1a])/i,abbreviated:/^(dom|lun|mar|mi[\xe9e]|jue|vie|s[\xe1a]b)/i,wide:/^(domingo|lunes|martes|mi[\xe9e]rcoles|jueves|viernes|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,p.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (ma\xf1ana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (ma\xf1ana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1ana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}}},82769:(e,t,a)=>{function r(e){if(null==e)throw new TypeError("Cannot destructure "+e)}a.d(t,{Z:()=>r})}}]);