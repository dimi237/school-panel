import{m as d,r as a,e as et,f as ne}from"./app-70fdae19.js";import{b as J,s as B,l as x,u as R,a as $e,e as se,D as $,X as y,o as h,t as ce,y as L,p as tt,f as ye,T as nt,S as Ee,C as rt,d as q}from"./transition-805f2aa9.js";var we;let O=(we=d.useId)!=null?we:function(){let e=J(),[t,n]=d.useState(e?()=>B.nextId():null);return x(()=>{t===null&&n(B.nextId())},[t]),t!=null?""+t:void 0};function de(e){return B.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let re=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var F=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(F||{}),Te=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Te||{}),ot=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(ot||{});function Se(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(re)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Le=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Le||{});function Pe(e,t=0){var n;return e===((n=de(e))==null?void 0:n.body)?!1:R(t,{0(){return e.matches(re)},1(){let r=e;for(;r!==null;){if(r.matches(re))return!0;r=r.parentElement}return!1}})}function Cn(e){let t=de(e);$e().nextFrame(()=>{t&&!Pe(t.activeElement,0)&&M(e)})}var lt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(lt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function M(e){e==null||e.focus({preventScroll:!0})}let ut=["textarea","input"].join(",");function it(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,ut))!=null?n:!1}function at(e,t=n=>n){return e.slice().sort((n,r)=>{let u=t(n),l=t(r);if(u===null||l===null)return 0;let o=u.compareDocumentPosition(l);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function xn(e,t){return H(Se(),t,{relativeTo:e})}function H(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){let l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?n?at(e):e:Se(e);u.length>0&&o.length>1&&(o=o.filter(m=>!u.includes(m))),r=r??l.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(r))-1;if(t&4)return Math.max(0,o.indexOf(r))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},c=0,p=o.length,E;do{if(c>=p||c+p<=0)return 0;let m=s+c;if(t&16)m=(m+p)%p;else{if(m<0)return 3;if(m>=p)return 1}E=o[m],E==null||E.focus(f),c+=i}while(E!==l.activeElement);return t&6&&it(E)&&E.select(),2}function K(e,t,n){let r=se(t);a.useEffect(()=>{function u(l){r.current(l)}return document.addEventListener(e,u,n),()=>document.removeEventListener(e,u,n)},[e,n])}function De(e,t,n){let r=se(t);a.useEffect(()=>{function u(l){r.current(l)}return window.addEventListener(e,u,n),()=>window.removeEventListener(e,u,n)},[e,n])}function st(e,t,n=!0){let r=a.useRef(!1);a.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function u(o,i){if(!r.current||o.defaultPrevented)return;let s=i(o);if(s===null||!s.getRootNode().contains(s)||!s.isConnected)return;let f=function c(p){return typeof p=="function"?c(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e);for(let c of f){if(c===null)continue;let p=c instanceof HTMLElement?c:c.current;if(p!=null&&p.contains(s)||o.composed&&o.composedPath().includes(p))return}return!Pe(s,Le.Loose)&&s.tabIndex!==-1&&o.preventDefault(),t(o,s)}let l=a.useRef(null);K("pointerdown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),K("mousedown",o=>{var i,s;r.current&&(l.current=((s=(i=o.composedPath)==null?void 0:i.call(o))==null?void 0:s[0])||o.target)},!0),K("click",o=>{l.current&&(u(o,()=>l.current),l.current=null)},!0),K("touchend",o=>u(o,()=>o.target instanceof HTMLElement?o.target:null),!0),De("blur",o=>u(o,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function ct(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&dt(n)?!1:r}function dt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ft="div";var X=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(X||{});function pt(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return y({ourProps:u,theirProps:r,slot:{},defaultTag:ft,name:"Hidden"})}let oe=$(pt);var Me=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Me||{});function fe(e,t){let n=a.useRef([]),r=h(e);a.useEffect(()=>{let u=[...n.current];for(let[l,o]of t.entries())if(n.current[l]!==o){let i=r(t,u);return n.current=t,i}},[r,...t])}function mt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var I=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(I||{});function vt(){let e=a.useRef(0);return De("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function _(...e){return a.useMemo(()=>de(...e),[...e])}function Fe(e,t,n,r){let u=se(n);a.useEffect(()=>{e=e??window;function l(o){u.current(o)}return e.addEventListener(t,l,r),()=>e.removeEventListener(t,l,r)},[e,t,r])}function gt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ce(e){let t=h(e),n=a.useRef(!1);a.useEffect(()=>(n.current=!1,()=>{n.current=!0,ce(()=>{n.current&&t()})}),[t])}function xe(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let ht="div";var Ae=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Ae||{});function Et(e,t){let n=a.useRef(null),r=L(n,t),{initialFocus:u,containers:l,features:o=30,...i}=e;J()||(o=1);let s=_(n);$t({ownerDocument:s},!!(o&16));let f=yt({ownerDocument:s,container:n,initialFocus:u},!!(o&2));Tt({ownerDocument:s,container:n,containers:l,previousActiveElement:f},!!(o&8));let c=vt(),p=h(v=>{let T=n.current;T&&(P=>P())(()=>{R(c.current,{[I.Forwards]:()=>{H(T,F.First,{skipElements:[v.relatedTarget]})},[I.Backwards]:()=>{H(T,F.Last,{skipElements:[v.relatedTarget]})}})})}),E=tt(),m=a.useRef(!1),Q={ref:r,onKeyDown(v){v.key=="Tab"&&(m.current=!0,E.requestAnimationFrame(()=>{m.current=!1}))},onBlur(v){let T=xe(l);n.current instanceof HTMLElement&&T.add(n.current);let P=v.relatedTarget;P instanceof HTMLElement&&P.dataset.headlessuiFocusGuard!=="true"&&(Re(T,P)||(m.current?H(n.current,R(c.current,{[I.Forwards]:()=>F.Next,[I.Backwards]:()=>F.Previous})|F.WrapAround,{relativeTo:v.target}):v.target instanceof HTMLElement&&M(v.target)))}};return d.createElement(d.Fragment,null,!!(o&4)&&d.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:X.Focusable}),y({ourProps:Q,theirProps:i,defaultTag:ht,name:"FocusTrap"}),!!(o&4)&&d.createElement(oe,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:p,features:X.Focusable}))}let wt=$(Et),N=Object.assign(wt,{features:Ae}),D=[];gt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function bt(e=!0){let t=a.useRef(D.slice());return fe(([n],[r])=>{r===!0&&n===!1&&ce(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=D.slice())},[e,D,t]),h(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function $t({ownerDocument:e},t){let n=bt(t);fe(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&M(n())},[t]),Ce(()=>{t&&M(n())})}function yt({ownerDocument:e,container:t,initialFocus:n},r){let u=a.useRef(null),l=ye();return fe(()=>{if(!r)return;let o=t.current;o&&ce(()=>{if(!l.current)return;let i=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===i){u.current=i;return}}else if(o.contains(i)){u.current=i;return}n!=null&&n.current?M(n.current):H(o,F.First)===Te.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),u.current=e==null?void 0:e.activeElement})},[r]),u}function Tt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},u){let l=ye();Fe(e==null?void 0:e.defaultView,"focus",o=>{if(!u||!l.current)return;let i=xe(n);t.current instanceof HTMLElement&&i.add(t.current);let s=r.current;if(!s)return;let f=o.target;f&&f instanceof HTMLElement?Re(i,f)?(r.current=f,M(f)):(o.preventDefault(),o.stopPropagation(),M(s)):M(r.current)},!0)}function Re(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let Oe=a.createContext(!1);function St(){return a.useContext(Oe)}function le(e){return d.createElement(Oe.Provider,{value:e.force},e.children)}function Lt(e){let t=St(),n=a.useContext(Ne),r=_(e),[u,l]=a.useState(()=>{if(!t&&n!==null||B.isServer)return null;let o=r==null?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(r===null)return null;let i=r.createElement("div");return i.setAttribute("id","headlessui-portal-root"),r.body.appendChild(i)});return a.useEffect(()=>{u!==null&&(r!=null&&r.body.contains(u)||r==null||r.body.appendChild(u))},[u,r]),a.useEffect(()=>{t||n!==null&&l(n.current)},[n,l,t]),u}let Pt=a.Fragment;function Dt(e,t){let n=e,r=a.useRef(null),u=L(nt(c=>{r.current=c}),t),l=_(r),o=Lt(r),[i]=a.useState(()=>{var c;return B.isServer?null:(c=l==null?void 0:l.createElement("div"))!=null?c:null}),s=a.useContext(ue),f=J();return x(()=>{!o||!i||o.contains(i)||(i.setAttribute("data-headlessui-portal",""),o.appendChild(i))},[o,i]),x(()=>{if(i&&s)return s.register(i)},[s,i]),Ce(()=>{var c;!o||!i||(i instanceof Node&&o.contains(i)&&o.removeChild(i),o.childNodes.length<=0&&((c=o.parentElement)==null||c.removeChild(o)))}),f?!o||!i?null:et.createPortal(y({ourProps:{ref:u},theirProps:n,defaultTag:Pt,name:"Portal"}),i):null}let Mt=a.Fragment,Ne=a.createContext(null);function Ft(e,t){let{target:n,...r}=e,u={ref:L(t)};return d.createElement(Ne.Provider,{value:n},y({ourProps:u,theirProps:r,defaultTag:Mt,name:"Popover.Group"}))}let ue=a.createContext(null);function Ct(){let e=a.useContext(ue),t=a.useRef([]),n=h(l=>(t.current.push(l),e&&e.register(l),()=>r(l))),r=h(l=>{let o=t.current.indexOf(l);o!==-1&&t.current.splice(o,1),e&&e.unregister(l)}),u=a.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,a.useMemo(()=>function({children:l}){return d.createElement(ue.Provider,{value:u},l)},[u])]}let xt=$(Dt),At=$(Ft),ie=Object.assign(xt,{Group:At}),ke=a.createContext(null);function Ie(){let e=a.useContext(ke);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ie),t}return e}function Rt(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=h(l=>(t(o=>[...o,l]),()=>t(o=>{let i=o.slice(),s=i.indexOf(l);return s!==-1&&i.splice(s,1),i}))),u=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return d.createElement(ke.Provider,{value:u},n.children)},[t])]}let Ot="p";function Nt(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...u}=e,l=Ie(),o=L(t);x(()=>l.register(r),[r,l.register]);let i={ref:o,...l.props,id:r};return y({ourProps:i,theirProps:u,slot:l.slot||{},defaultTag:Ot,name:l.name||"Description"})}let kt=$(Nt),It=Object.assign(kt,{}),pe=a.createContext(()=>{});pe.displayName="StackContext";var ae=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(ae||{});function Ht(){return a.useContext(pe)}function Bt({children:e,onUpdate:t,type:n,element:r,enabled:u}){let l=Ht(),o=h((...i)=>{t==null||t(...i),l(...i)});return x(()=>{let i=u===void 0||u===!0;return i&&o(0,n,r),()=>{i&&o(1,n,r)}},[o,n,r,u]),d.createElement(pe.Provider,{value:o},e)}function _t(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Ut=typeof Object.is=="function"?Object.is:_t,{useState:Wt,useEffect:jt,useLayoutEffect:Vt,useDebugValue:Yt}=ne;function Gt(e,t,n){const r=t(),[{inst:u},l]=Wt({inst:{value:r,getSnapshot:t}});return Vt(()=>{u.value=r,u.getSnapshot=t,ee(u)&&l({inst:u})},[e,r,t]),jt(()=>(ee(u)&&l({inst:u}),e(()=>{ee(u)&&l({inst:u})})),[e]),Yt(r),r}function ee(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Ut(n,r)}catch{return!0}}function qt(e,t,n){return t()}const Kt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xt=!Kt,zt=Xt?qt:Gt,Jt="useSyncExternalStore"in ne?(e=>e.useSyncExternalStore)(ne):zt;function Qt(e){return Jt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Zt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(u){return r.add(u),()=>r.delete(u)},dispatch(u,...l){let o=t[u].call(n,...l);o&&(n=o,r.forEach(i=>i()))}}}function en(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,u=r.clientWidth-r.offsetWidth,l=e-u;n.style(r,"paddingRight",`${l}px`)}}}function tn(){if(!mt())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function u(o){return r.containers.flatMap(i=>i()).some(i=>i.contains(o))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let i=o.target.closest("a");if(!i)return;let{hash:s}=new URL(i.href),f=t.querySelector(s);f&&!u(f)&&(l=f)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!u(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function nn(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function rn(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let C=Zt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:$e(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:rn(n)},u=[tn(),en(),nn()];u.forEach(({before:l})=>l==null?void 0:l(r)),u.forEach(({after:l})=>l==null?void 0:l(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});C.subscribe(()=>{let e=C.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",u=n.count!==0;(u&&!r||!u&&r)&&C.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&C.dispatch("TEARDOWN",n)}});function on(e,t,n){let r=Qt(C),u=e?r.get(e):void 0,l=u?u.count>0:!1;return x(()=>{if(!(!e||!t))return C.dispatch("PUSH",e,n),()=>C.dispatch("POP",e,n)},[t,e]),l}let te=new Map,k=new Map;function be(e,t=!0){x(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function u(){var o;if(!r)return;let i=(o=k.get(r))!=null?o:1;if(i===1?k.delete(r):k.set(r,i-1),i!==1)return;let s=te.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,te.delete(r))}let l=(n=k.get(r))!=null?n:0;return k.set(r,l+1),l!==0||(te.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),u},[e,t])}function ln({defaultContainers:e=[],portals:t}={}){let n=a.useRef(null),r=_(n),u=h(()=>{var l;let o=[];for(let i of e)i!==null&&(i instanceof HTMLElement?o.push(i):"current"in i&&i.current instanceof HTMLElement&&o.push(i.current));if(t!=null&&t.current)for(let i of t.current)o.push(i);for(let i of(l=r==null?void 0:r.querySelectorAll("html > *, body > *"))!=null?l:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(n.current)||o.some(s=>i.contains(s))||o.push(i));return o});return{resolveContainers:u,contains:h(l=>u().some(o=>o.contains(l))),mainTreeNodeRef:n,MainTreeNode:a.useMemo(()=>function(){return d.createElement(oe,{features:X.Hidden,ref:n})},[n])}}var un=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(un||{}),an=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(an||{});let sn={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},z=a.createContext(null);z.displayName="DialogContext";function U(e){let t=a.useContext(z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return t}function cn(e,t,n=()=>[document.body]){on(e,t,r=>{var u;return{containers:[...(u=r.containers)!=null?u:[],n]}})}function dn(e,t){return R(t.type,sn,e,t)}let fn="div",pn=Ee.RenderStrategy|Ee.Static;function mn(e,t){var n;let r=O(),{id:u=`headlessui-dialog-${r}`,open:l,onClose:o,initialFocus:i,__demoMode:s=!1,...f}=e,[c,p]=a.useState(0),E=rt();l===void 0&&E!==null&&(l=(E&q.Open)===q.Open);let m=a.useRef(null),Q=L(m,t),v=_(m),T=e.hasOwnProperty("open")||E!==null,P=e.hasOwnProperty("onClose");if(!T&&!P)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!P)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof l!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);if(typeof o!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${o}`);let w=l?0:1,[W,He]=a.useReducer(dn,{titleId:null,descriptionId:null,panelRef:a.createRef()}),A=h(()=>o(!1)),me=h(g=>He({type:0,id:g})),j=J()?s?!1:w===0:!1,V=c>1,ve=a.useContext(z)!==null,[Be,_e]=Ct(),{resolveContainers:Z,mainTreeNodeRef:Y,MainTreeNode:Ue}=ln({portals:Be,defaultContainers:[(n=W.panelRef.current)!=null?n:m.current]}),We=V?"parent":"leaf",ge=E!==null?(E&q.Closing)===q.Closing:!1,je=(()=>ve||ge?!1:j)(),Ve=a.useCallback(()=>{var g,S;return(S=Array.from((g=v==null?void 0:v.querySelectorAll("body > *"))!=null?g:[]).find(b=>b.id==="headlessui-portal-root"?!1:b.contains(Y.current)&&b instanceof HTMLElement))!=null?S:null},[Y]);be(Ve,je);let Ye=(()=>V?!0:j)(),Ge=a.useCallback(()=>{var g,S;return(S=Array.from((g=v==null?void 0:v.querySelectorAll("[data-headlessui-portal]"))!=null?g:[]).find(b=>b.contains(Y.current)&&b instanceof HTMLElement))!=null?S:null},[Y]);be(Ge,Ye);let qe=(()=>!(!j||V))();st(Z,A,qe);let Ke=(()=>!(V||w!==0))();Fe(v==null?void 0:v.defaultView,"keydown",g=>{Ke&&(g.defaultPrevented||g.key===Me.Escape&&(g.preventDefault(),g.stopPropagation(),A()))});let Xe=(()=>!(ge||w!==0||ve))();cn(v,Xe,Z),a.useEffect(()=>{if(w!==0||!m.current)return;let g=new ResizeObserver(S=>{for(let b of S){let G=b.target.getBoundingClientRect();G.x===0&&G.y===0&&G.width===0&&G.height===0&&A()}});return g.observe(m.current),()=>g.disconnect()},[w,m,A]);let[ze,Je]=Rt(),Qe=a.useMemo(()=>[{dialogState:w,close:A,setTitleId:me},W],[w,W,A,me]),he=a.useMemo(()=>({open:w===0}),[w]),Ze={ref:Q,id:u,role:"dialog","aria-modal":w===0?!0:void 0,"aria-labelledby":W.titleId,"aria-describedby":ze};return d.createElement(Bt,{type:"Dialog",enabled:w===0,element:m,onUpdate:h((g,S)=>{S==="Dialog"&&R(g,{[ae.Add]:()=>p(b=>b+1),[ae.Remove]:()=>p(b=>b-1)})})},d.createElement(le,{force:!0},d.createElement(ie,null,d.createElement(z.Provider,{value:Qe},d.createElement(ie.Group,{target:m},d.createElement(le,{force:!1},d.createElement(Je,{slot:he,name:"Dialog.Description"},d.createElement(N,{initialFocus:i,containers:Z,features:j?R(We,{parent:N.features.RestoreFocus,leaf:N.features.All&~N.features.FocusLock}):N.features.None},d.createElement(_e,null,y({ourProps:Ze,theirProps:f,slot:he,defaultTag:fn,features:pn,visible:w===0,name:"Dialog"}))))))))),d.createElement(Ue,null))}let vn="div";function gn(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...u}=e,[{dialogState:l,close:o}]=U("Dialog.Overlay"),i=L(t),s=h(c=>{if(c.target===c.currentTarget){if(ct(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),o()}}),f=a.useMemo(()=>({open:l===0}),[l]);return y({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:s},theirProps:u,slot:f,defaultTag:vn,name:"Dialog.Overlay"})}let hn="div";function En(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...u}=e,[{dialogState:l},o]=U("Dialog.Backdrop"),i=L(t);a.useEffect(()=>{if(o.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[o.panelRef]);let s=a.useMemo(()=>({open:l===0}),[l]);return d.createElement(le,{force:!0},d.createElement(ie,null,y({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:u,slot:s,defaultTag:hn,name:"Dialog.Backdrop"})))}let wn="div";function bn(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...u}=e,[{dialogState:l},o]=U("Dialog.Panel"),i=L(t,o.panelRef),s=a.useMemo(()=>({open:l===0}),[l]),f=h(c=>{c.stopPropagation()});return y({ourProps:{ref:i,id:r,onClick:f},theirProps:u,slot:s,defaultTag:wn,name:"Dialog.Panel"})}let $n="h2";function yn(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...u}=e,[{dialogState:l,setTitleId:o}]=U("Dialog.Title"),i=L(t);a.useEffect(()=>(o(r),()=>o(null)),[r,o]);let s=a.useMemo(()=>({open:l===0}),[l]);return y({ourProps:{ref:i,id:r},theirProps:u,slot:s,defaultTag:$n,name:"Dialog.Title"})}let Tn=$(mn),Sn=$(En),Ln=$(bn),Pn=$(gn),Dn=$(yn),An=Object.assign(Tn,{Backdrop:Sn,Panel:Ln,Overlay:Pn,Title:Dn,Description:It});export{Cn as D,O as I,F as M,Le as T,An as _,Pe as a,xn as b,at as c,de as e,st as h,_ as n,Me as o,ct as r};
