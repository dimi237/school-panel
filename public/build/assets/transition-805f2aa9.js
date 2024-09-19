import{r as l,m as T}from"./app-70fdae19.js";var Te=Object.defineProperty,we=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,W=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);let Fe=class{constructor(){W(this,"current",this.detect()),W(this,"handoffState","pending"),W(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},D=new Fe,q=(e,t)=>{D.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function j(e){let t=l.useRef(e);return q(()=>{t.current=e},[e]),t}function Ce(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function P(){let e=[],t={addEventListener(n,r,i,f){return n.addEventListener(r,i,f),t.add(()=>n.removeEventListener(r,i,f))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(...n){let r=setTimeout(...n);return t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ce(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,i){let f=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:f})})},group(n){let r=P();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function ae(){let[e]=l.useState(P);return l.useEffect(()=>()=>e.dispose(),[e]),e}let C=function(e){let t=j(e);return T.useCallback((...n)=>t.current(...n),[t])};function oe(){let[e,t]=l.useState(D.isHandoffComplete);return e&&D.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>D.handoff(),[]),e}function w(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}let se=Symbol();function Ge(e,t=!0){return Object.assign(e,{[se]:t})}function ue(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=C(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[se]))?void 0:n}function Q(...e){return e.filter(Boolean).join(" ")}var ce=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ce||{}),O=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(O||{});function fe({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:f=!0,name:d}){let s=de(t,e);if(f)return A(s,n,r,d);let u=i??0;if(u&2){let{static:o=!1,...c}=s;if(o)return A(c,n,r,d)}if(u&1){let{unmount:o=!0,...c}=s;return w(o?0:1,{0(){return null},1(){return A({...c,hidden:!0,style:{display:"none"}},n,r,d)}})}return A(s,n,r,d)}function A(e,t={},n,r){let{as:i=n,children:f,refName:d="ref",...s}=X(e,["unmount","static"]),u=e.ref!==void 0?{[d]:e.ref}:{},o=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let c={};if(t){let h=!1,v=[];for(let[m,a]of Object.entries(t))typeof a=="boolean"&&(h=!0),a===!0&&v.push(m);h&&(c["data-headlessui-state"]=v.join(" "))}if(i===l.Fragment&&Object.keys(ie(s)).length>0){if(!l.isValidElement(o)||Array.isArray(o)&&o.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let h=o.props,v=typeof(h==null?void 0:h.className)=="function"?(...a)=>Q(h==null?void 0:h.className(...a),s.className):Q(h==null?void 0:h.className,s.className),m=v?{className:v}:{};return l.cloneElement(o,Object.assign({},de(o.props,ie(X(s,["ref"]))),c,u,Oe(o.ref,u.ref),m))}return l.createElement(i,Object.assign({},X(s,["ref"]),i!==l.Fragment&&u,i!==l.Fragment&&c),o)}function Oe(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function de(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...f){let d=n[r];for(let s of d){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;s(i,...f)}}});return t}function ee(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ie(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function X(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let te=l.createContext(null);te.displayName="OpenClosedContext";var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function me(){return l.useContext(te)}function Se({value:e,children:t}){return T.createElement(te.Provider,{value:e},t)}function ne(){let e=l.useRef(!1);return q(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function $e(e=0){let[t,n]=l.useState(e),r=ne(),i=l.useCallback(u=>{r.current&&n(o=>o|u)},[t,r]),f=l.useCallback(u=>!!(t&u),[t]),d=l.useCallback(u=>{r.current&&n(o=>o&~u)},[n,r]),s=l.useCallback(u=>{r.current&&n(o=>o^u)},[n]);return{flags:t,addFlag:i,hasFlag:f,removeFlag:d,toggleFlag:s}}function Ne(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Y(e,...t){e&&t.length>0&&e.classList.add(...t)}function _(e,...t){e&&t.length>0&&e.classList.remove(...t)}function je(e,t){let n=P();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[f,d]=[r,i].map(u=>{let[o=0]=u.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,h)=>h-c);return o}),s=f+d;if(s!==0){n.group(o=>{o.setTimeout(()=>{t(),o.dispose()},s),o.addEventListener(e,"transitionrun",c=>{c.target===c.currentTarget&&o.dispose()})});let u=n.addEventListener(e,"transitionend",o=>{o.target===o.currentTarget&&(t(),u())})}else t();return n.add(()=>t()),n.dispose}function Re(e,t,n,r){let i=n?"enter":"leave",f=P(),d=r!==void 0?Ne(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let s=w(i,{enter:()=>t.enter,leave:()=>t.leave}),u=w(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),o=w(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return _(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Y(e,...s,...o),f.nextFrame(()=>{_(e,...o),Y(e,...u),je(e,()=>(_(e,...s),Y(e,...t.entered),d()))}),f.dispose}function Pe({container:e,direction:t,classes:n,onStart:r,onStop:i}){let f=ne(),d=ae(),s=j(t);q(()=>{let u=P();d.add(u.dispose);let o=e.current;if(o&&s.current!=="idle"&&f.current)return u.dispose(),r.current(s.current),u.add(Re(o,n.current,s.current==="enter",()=>{u.dispose(),i.current(s.current)})),u.dispose},[t])}function $(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let I=l.createContext(null);I.displayName="TransitionContext";var xe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(xe||{});function Le(){let e=l.useContext(I);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function ke(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=l.createContext(null);M.displayName="NestingContext";function U(e){return"children"in e?U(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function pe(e,t){let n=j(e),r=l.useRef([]),i=ne(),f=ae(),d=C((m,a=O.Hidden)=>{let g=r.current.findIndex(({el:p})=>p===m);g!==-1&&(w(a,{[O.Unmount](){r.current.splice(g,1)},[O.Hidden](){r.current[g].state="hidden"}}),f.microTask(()=>{var p;!U(r)&&i.current&&((p=n.current)==null||p.call(n))}))}),s=C(m=>{let a=r.current.find(({el:g})=>g===m);return a?a.state!=="visible"&&(a.state="visible"):r.current.push({el:m,state:"visible"}),()=>d(m,O.Unmount)}),u=l.useRef([]),o=l.useRef(Promise.resolve()),c=l.useRef({enter:[],leave:[],idle:[]}),h=C((m,a,g)=>{u.current.splice(0),t&&(t.chains.current[a]=t.chains.current[a].filter(([p])=>p!==m)),t==null||t.chains.current[a].push([m,new Promise(p=>{u.current.push(p)})]),t==null||t.chains.current[a].push([m,new Promise(p=>{Promise.all(c.current[a].map(([b,N])=>N)).then(()=>p())})]),a==="enter"?o.current=o.current.then(()=>t==null?void 0:t.wait.current).then(()=>g(a)):g(a)}),v=C((m,a,g)=>{Promise.all(c.current[a].splice(0).map(([p,b])=>b)).then(()=>{var p;(p=u.current.shift())==null||p()}).then(()=>g(a))});return l.useMemo(()=>({children:r,register:s,unregister:d,onStart:h,onStop:v,wait:o,chains:c}),[s,d,r,h,v,c,o])}function He(){}let Ae=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function le(e){var t;let n={};for(let r of Ae)n[r]=(t=e[r])!=null?t:He;return n}function De(e){let t=l.useRef(le(e));return l.useEffect(()=>{t.current=le(e)},[e]),t}let qe="div",he=ce.RenderStrategy;function Ie(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:f,enter:d,enterFrom:s,enterTo:u,entered:o,leave:c,leaveFrom:h,leaveTo:v,...m}=e,a=l.useRef(null),g=ue(a,t),p=m.unmount?O.Unmount:O.Hidden,{show:b,appear:N,initial:E}=Le(),[y,B]=l.useState(b?"visible":"hidden"),re=ke(),{register:x,unregister:L}=re,V=l.useRef(null);l.useEffect(()=>x(a),[x,a]),l.useEffect(()=>{if(p===O.Hidden&&a.current){if(b&&y!=="visible"){B("visible");return}return w(y,{hidden:()=>L(a),visible:()=>x(a)})}},[y,a,x,L,b,p]);let z=j({enter:$(d),enterFrom:$(s),enterTo:$(u),entered:$(o),leave:$(c),leaveFrom:$(h),leaveTo:$(v)}),k=De({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:f}),G=oe();l.useEffect(()=>{if(G&&y==="visible"&&a.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[a,y,G]);let J=E&&!N,ge=(()=>!G||J||V.current===b?"idle":b?"enter":"leave")(),R=$e(0),be=C(S=>w(S,{enter:()=>{R.addFlag(F.Opening),k.current.beforeEnter()},leave:()=>{R.addFlag(F.Closing),k.current.beforeLeave()},idle:()=>{}})),ye=C(S=>w(S,{enter:()=>{R.removeFlag(F.Opening),k.current.afterEnter()},leave:()=>{R.removeFlag(F.Closing),k.current.afterLeave()},idle:()=>{}})),H=pe(()=>{B("hidden"),L(a)},re);Pe({container:a,classes:z,direction:ge,onStart:j(S=>{H.onStart(a,S,be)}),onStop:j(S=>{H.onStop(a,S,ye),S==="leave"&&!U(H)&&(B("hidden"),L(a))})}),l.useEffect(()=>{J&&(p===O.Hidden?V.current=null:V.current=b)},[b,J,y]);let K=m,Ee={ref:g};return N&&b&&E&&(K={...K,className:Q(m.className,...z.current.enter,...z.current.enterFrom)}),T.createElement(M.Provider,{value:H},T.createElement(Se,{value:w(y,{visible:F.Open,hidden:F.Closed})|R.flags},fe({ourProps:Ee,theirProps:K,defaultTag:qe,features:he,visible:y==="visible",name:"Transition.Child"})))}function Me(e,t){let{show:n,appear:r=!1,unmount:i,...f}=e,d=l.useRef(null),s=ue(d,t);oe();let u=me();if(n===void 0&&u!==null&&(n=(u&F.Open)===F.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[o,c]=l.useState(n?"visible":"hidden"),h=pe(()=>{c("hidden")}),[v,m]=l.useState(!0),a=l.useRef([n]);q(()=>{v!==!1&&a.current[a.current.length-1]!==n&&(a.current.push(n),m(!1))},[a,n]);let g=l.useMemo(()=>({show:n,appear:r,initial:v}),[n,r,v]);l.useEffect(()=>{if(n)c("visible");else if(!U(h))c("hidden");else{let E=d.current;if(!E)return;let y=E.getBoundingClientRect();y.x===0&&y.y===0&&y.width===0&&y.height===0&&c("hidden")}},[n,h]);let p={unmount:i},b=C(()=>{var E;v&&m(!1),(E=e.beforeEnter)==null||E.call(e)}),N=C(()=>{var E;v&&m(!1),(E=e.beforeLeave)==null||E.call(e)});return T.createElement(M.Provider,{value:h},T.createElement(I.Provider,{value:g},fe({ourProps:{...p,as:l.Fragment,children:T.createElement(ve,{ref:s,...p,...f,beforeEnter:b,beforeLeave:N})},theirProps:{},defaultTag:l.Fragment,features:he,visible:o==="visible",name:"Transition"})))}function Ue(e,t){let n=l.useContext(I)!==null,r=me()!==null;return T.createElement(T.Fragment,null,!n&&r?T.createElement(Z,{ref:t,...e}):T.createElement(ve,{ref:t,...e}))}let Z=ee(Me),ve=ee(Ie),Be=ee(Ue),Je=Object.assign(Z,{Child:Be,Root:Z});export{Je as $,me as C,ee as D,ce as S,Ge as T,fe as X,P as a,oe as b,Se as c,F as d,j as e,ne as f,q as l,C as o,ae as p,D as s,Ce as t,w as u,ue as y};
