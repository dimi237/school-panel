import{W as w,r as f,j as e,a as s,b as v}from"./app-b5a6224a.js";import{G as h}from"./GuestLayout-0b39eb36.js";import{I as m}from"./InputError-e6182544.js";import{I as l}from"./InputLabel-bc9eaed7.js";import{P as g}from"./PrimaryButton-acb3bbee.js";import{T as i}from"./TextInput-d04f999c.js";function I({token:n,email:d}){const{data:r,setData:o,post:p,processing:c,errors:t,reset:u}=w({token:n,email:d,password:"",password_confirmation:""});return f.useEffect(()=>()=>{u("password","password_confirmation")},[]),e(h,{children:[s(v,{title:"Reset Password"}),e("form",{onSubmit:a=>{a.preventDefault(),p(route("password.store"))},children:[e("div",{children:[s(l,{htmlFor:"email",value:"Email"}),s(i,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:a=>o("email",a.target.value)}),s(m,{message:t.email,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(l,{htmlFor:"password",value:"Password"}),s(i,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,onChange:a=>o("password",a.target.value)}),s(m,{message:t.password,className:"mt-2"})]}),e("div",{className:"mt-4",children:[s(l,{htmlFor:"password_confirmation",value:"Confirm Password"}),s(i,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:a=>o("password_confirmation",a.target.value)}),s(m,{message:t.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(g,{className:"ml-4",disabled:c,children:"Reset Password"})})]})]})}export{I as default};
