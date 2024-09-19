import{r as i,W as K,a as e,j as s,F as c,d as X}from"./app-70fdae19.js";import{l as L,C as W,a as Y,b as $,S as x}from"./sweetalert2.all-b3f2d409.js";import{v as n,C as z}from"./AuthenticatedLayout-0988e8ef.js";import{X as G}from"./XCircleIcon-16a950b2.js";const d="asc",H="desc",J=({excludedColumns:y,fetchUrl:k,columns:l,actionUrls:v,columNames:D})=>{const[h,R]=i.useState([]),[g,j]=i.useState(10),[p,b]=i.useState(l[0]),[u,m]=i.useState("desc"),[w,T]=i.useState(""),[_,B]=i.useState({}),[N,f]=i.useState(1),[S,C]=i.useState(!0),O=D||l,E=t=>{t===p?m(u===d?H:d):(b(t),m(d))},F=i.useRef(L.debounce(t=>{T(t),f(1),m(d),b(l[0])},500)).current,A=t=>{f(1),j(t)},{get:I}=K(),q=(t,r)=>{t.preventDefault(),x.fire({title:"Remove record, Are you sure?",icon:"warning",showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Yes sure",denyButtonText:"Not right now",allowOutsideClick:!1}).then(a=>{a.isConfirmed?I(r,{preserveScroll:!0,onSuccess:()=>{x.fire({position:"top-end",icon:"success",title:"Record has been removed successfully",showConfirmButton:!1,timer:1500,allowOutsideClick:!1})},onFinish:()=>{}}):a.isDenied&&x.fire("Record is safe","","info")})};i.useEffect(()=>{(async()=>{C(!0);const r={search:w,sort_field:p,sort_order:u,per_page:g,page:N};console.log("ici");const{data:a}=await axios(k,{params:r});console.log("ici2"),R(a.data),B(a.meta),setTimeout(()=>{C(!1)},300)})()},[g,p,u,w,N]);const U=t=>t===null?e(c,{children:"-"}):typeof t=="object"?e(c,{children:t.length>0?t.map((r,a)=>e(c,{children:s("span",{className:"inline-flex items-center gap-x-1.5 rounded-md bg-gray-100 px-1.5 py-0.5 text-xs font-medium text-gray-600",children:[e("svg",{className:"h-1.5 w-1.5 fill-gray-400",viewBox:"0 0 6 6","aria-hidden":"true",children:e("circle",{cx:3,cy:3,r:3})}),r]})})):"-"}):e(c,{children:t});return e("div",{children:e("div",{className:" -mx-4 -my-2 sm:-mx-6 lg:-mx-8",children:e("div",{className:" inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8",children:s("div",{className:" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg",children:[s("div",{className:"flex justify-between p-5",children:[e("div",{children:e("input",{className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Search...",type:"search",onChange:t=>F(t.target.value)})}),s("div",{className:"flex justify-between space-x-2 items-center align-middle ",children:[e("label",{htmlFor:"pagePer",className:"text-sm py-1.5 pl-3 font-medium leading-6 text-gray-900",children:"Page Per"}),s("select",{className:"rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",value:g,id:"pagePer",onChange:t=>A(t.target.value),children:[e("option",{value:"5",children:"5"}),e("option",{value:"10",children:"10"}),e("option",{value:"20",children:"20"}),e("option",{value:"50",children:"50"}),e("option",{value:"9999999999",children:"All"})]})]})]}),s("table",{className:"min-w-full divide-y divide-gray-300",children:[e("thead",{className:"bg-gray-50",children:s("tr",{children:[O.map((t,r)=>{let a=n()+"-"+r+"-"+t.toUpperCase().replace("_"," ");return y.includes(t)===!1&&e(c,{children:e("th",{scope:"col",className:r===0?"py-2 pl-2 pr-2 text-left text-sm font-semibold text-gray-900 sm:pl-6":"px-2 py-2 text-left text-sm font-semibold text-gray-900",onClick:o=>E(t),children:s("div",{className:"group inline-flex",children:[t.toUpperCase().replace("_"," "),t===p?e("span",{className:"ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200",children:u===d?e(W,{className:"h-5 w-5","aria-hidden":"true"}):e(z,{className:"h-5 w-5","aria-hidden":"true"})}):null]})},a)})}),e("th",{children:"Action"},n())]},n())}),s("tbody",{className:"divide-y divide-gray-200 bg-white",children:[h.length===0?e("tr",{children:e("td",{colSpan:l.length,children:e("h1",{className:"p-5 text-center text-2xl text-gray-700 bg-gray-200",children:"No items found"})})}):"",S?e("tr",{children:e("td",{className:"whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6",colSpan:l.length+1,children:e("div",{className:"mx-auto flex justify-center w-full",children:e("div",{className:"w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"})})},n())},n()):h.map((t,r)=>{let a=n()+"-"+r;return e(c,{children:s("tr",{children:[l.map((o,P)=>y.includes(o)===!1&&e("td",{className:P===0?"whitespace-nowrap py-2 pl-2 pr-2 text-sm font-medium text-gray-900 sm:pl-6":"whitespace-nowrap px-2 py-2 text-sm text-gray-500",children:U(t[o])},n()+"-"+P)),s("td",{className:"whitespace-nowrap px-2 py-2 text-sm text-gray-500 flex justify-center gap-2 ",children:[s("button",{type:"button",className:"inline-flex items-center gap-x-1.5 rounded-md bg-red-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",onClick:o=>{o.preventDefault(),q(o,route(v.removeRouteName,t.id))},children:[e(G,{className:"-ml-0.5 h-5 w-5","aria-hidden":"true"}),"Remove"]}),s(X,{className:"inline-flex items-center gap-x-1.5 rounded-md bg-purple-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600",href:route(v.editRouteName,t.id),children:[e(Y,{className:"-ml-0.5 h-5 w-5","aria-hidden":"true"}),"Edit"]})]},n())]},a)})})]})]}),h.length>0&&!S?e("div",{className:"mt-2",children:e($,{pagination:_,pageChanged:t=>f(t),totalItems:h.length})}):null]})})})})},ee=J;export{ee as D};
