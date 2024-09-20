import{W as x,r as y,j as i,a as e,b,F as N,d as _}from"./app-b5a6224a.js";import{A as w}from"./AuthenticatedLayout-9db76152.js";import{I as n}from"./InputLabel-bc9eaed7.js";import{T as d}from"./TextInput-d04f999c.js";import{I as a}from"./InputError-e6182544.js";import{P as C}from"./PrimaryButton-acb3bbee.js";import{X as k}from"./XCircleIcon-56e62814.js";import"./transition-db505a12.js";import"./dialog-2f9b566f.js";function X({auth:u,pageTitle:c,pageDescription:m,pageData:s,formUrl:g}){const{data:o,setData:t,patch:h,processing:f,errors:l,reset:p}=x({name:s!==null?s.name:"",slug:s!==null?s.slug:"",description:s!==null?s.description:"",is_active:s!==null?s.is_active:"",guard_name:s!==null?s.guard_name:"",user_type:s!==null?s.user_type:"",record_access:s!==null?s.record_access:""});y.useEffect(()=>()=>{p("name","slug","description","is_active","guard_name","user_type","record_access")},[]);const v=r=>{r.preventDefault(),h(g)};return i(w,{user:u.user,children:[e(b,{title:c}),i("div",{className:"m-5 p-5 flow-root shadow sm:rounded-lg",children:[e("div",{className:"sm:flex sm:items-center border-b pb-3",children:i("div",{className:"sm:flex-auto",children:[e("h1",{className:"text-base font-semibold leading-6 text-gray-900",children:c}),m!==""?e(N,{children:e("p",{className:"mt-2 text-sm text-gray-700",children:m})}):""]})}),i("form",{onSubmit:v,className:"space-y-6",children:[i("div",{className:"grid grid-cols-2 gap-4 py-4",children:[i("div",{children:[e(n,{htmlFor:"name",value:"Name",className:"block text-sm font-medium leading-6 text-gray-900"}),e("div",{className:"mt-2",children:e(d,{id:"name",name:"name",type:"text",placeholder:"Enter name",value:o.name,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",autoComplete:"name",isFocused:!0,onChange:r=>t("name",r.target.value)})}),e(a,{message:l.name,className:"mt-2"})]}),i("div",{children:[e(n,{htmlFor:"slug",value:"Slug",className:"block text-sm font-medium leading-6 text-gray-900"}),e("div",{className:"mt-2",children:e(d,{id:"slug",name:"slug",type:"text",value:o.slug,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",autoComplete:"slug",onChange:r=>t("slug",r.target.value)})}),e(a,{message:l.slug,className:"mt-2"})]}),i("div",{children:[e(n,{htmlFor:"is_active",value:"Is Active ?",className:"block text-sm font-medium leading-6 text-gray-900"}),e("div",{className:"mt-2",children:i("select",{id:"is_active",name:"is_active",defaultValue:s!==null?s.is_active:"",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",autoComplete:"slug",onChange:r=>t("is_active",r.target.value),children:[e("option",{value:"",children:"Please select option"}),e("option",{value:"1",children:"Yes"}),e("option",{value:"0",children:"no"})]})}),e(a,{message:l.is_active,className:"mt-2"})]}),i("div",{children:[e(n,{htmlFor:"guard_name",value:"Guard Name",className:"block text-sm font-medium leading-6 text-gray-900"}),e("div",{className:"mt-2",children:e(d,{id:"guard_name",type:"text",name:"guard_name",value:o.guard_name,placeholder:"Enter guard name",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",autoComplete:"slug",onChange:r=>t("guard_name",r.target.value)})}),e(a,{message:l.guard_name,className:"mt-2"})]}),i("div",{children:[e(n,{htmlFor:"user_type",value:"User Type",className:"block text-sm font-medium leading-6 text-gray-900"}),e("div",{className:"mt-2",children:i("select",{id:"user_type",name:"user_type",defaultValue:s!==null?s.user_type:"",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",autoComplete:"user_type",onChange:r=>t("user_type",r.target.value),children:[e("option",{value:"",children:"Please select user type"}),e("option",{value:"internal",children:"Internal"}),e("option",{value:"customer",children:"Customer"})]})}),e(a,{message:l.user_type,className:"mt-2"})]}),i("div",{children:[e(n,{htmlFor:"is_active",value:"Record Access",className:"block text-sm font-medium leading-6 text-gray-900"}),e("div",{className:"mt-2",children:i("select",{id:"record_access",name:"record_access",defaultValue:s!==null?s.record_access:"",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",autoComplete:"record_access",onChange:r=>t("record_access",r.target.value),children:[e("option",{value:"",children:"Please select option"}),e("option",{value:"all",children:"All"}),e("option",{value:"owned",children:"Owned"})]})}),e(a,{message:l.record_access,className:"mt-2"})]})]}),e("div",{className:"grid grid-cols-1 gap-4",children:i("div",{children:[e(n,{htmlFor:"description",value:"Description",className:"block text-sm font-medium leading-6 text-gray-900"}),e("div",{className:"mt-2",children:e("textarea",{id:"description",name:"description",placeholder:"Enter description",className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",autoComplete:"description",onChange:r=>t("description",r.target.value),children:s!==null?s.description:""})}),e(a,{message:l.description,className:"mt-2"})]})}),i("div",{className:"flex items-center justify-end align-middle gap-2 pt-3 border-t",children:[i(_,{href:route("dashboard.global.roles.list"),className:"inline-flex items-center gap-x-1.5 rounded-md bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition ease-in-out duration-150",children:[e(k,{className:"-mr-0.5 h-5 w-5","aria-hidden":"true"}),"Cancel"]}),e(C,{className:"inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:f,children:"Submit"})]})]})]})]})}export{X as default};
