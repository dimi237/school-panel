import{W as p,r as f,j as s,a as e,b as w,d as n}from"./app-b5a6224a.js";import{G as g}from"./GuestLayout-0b39eb36.js";import{I as m}from"./InputError-e6182544.js";import{I as i}from"./InputLabel-bc9eaed7.js";import{P as h}from"./PrimaryButton-acb3bbee.js";import{T as l}from"./TextInput-d04f999c.js";import{A as v}from"./ApplicationLogo-4cd5a612.js";function F(){const{data:t,setData:r,post:d,processing:c,errors:o,reset:u}=p({name:"",email:"",password:"",password_confirmation:""});return f.useEffect(()=>()=>{u("password","password_confirmation")},[]),s(g,{children:[e(w,{title:"Register"}),e("div",{className:"my-5",children:s("div",{className:"sm:mx-auto sm:w-full sm:max-w-md",children:[e(n,{href:"/",children:e(v,{className:"w-20 h-20 fill-current text-gray-500 mx-auto"})}),e("h2",{className:"mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Register new account"}),s("div",{className:"flex gap-2 mx-auto justify-center my-2",children:[e("p",{children:"Already a member ?"}),e(n,{href:"/login",className:"text-blue-500",children:"Click Here"})]})]})}),e("div",{className:"bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12",children:s("form",{onSubmit:a=>{a.preventDefault(),d(route("register"))},children:[s("div",{children:[e(i,{htmlFor:"name",value:"Name"}),e(l,{id:"name",name:"name",value:t.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:a=>r("name",a.target.value),required:!0}),e(m,{message:o.name,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"email",value:"Email"}),e(l,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>r("email",a.target.value),required:!0}),e(m,{message:o.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"password",value:"Password"}),e(l,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password",a.target.value),required:!0}),e(m,{message:o.password,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(l,{id:"password_confirmation",type:"password",name:"password_confirmation",value:t.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>r("password_confirmation",a.target.value),required:!0}),e(m,{message:o.password_confirmation,className:"mt-2"})]}),e("div",{className:"my-5",children:e(h,{className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",disabled:c,children:"Register"})})]})})]})}export{F as default};
