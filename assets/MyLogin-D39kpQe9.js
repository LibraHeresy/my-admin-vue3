var L=Object.defineProperty;var V=(a,e,t)=>e in a?L(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var m=(a,e,t)=>V(a,typeof e!="symbol"?e+"":e,t);import{a as o,I as M,d as F,m as P,p as j,r as B,c as H,h as b,w as n,b as i,u as s,q as I,U as N,e as R,o as S,_ as U}from"./index-VHLgitf2.js";var q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"};function h(a){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable}))),l.forEach(function(u){A(a,u,t[u])})}return a}function A(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var d=function(e,t){var l=h({},e,t.attrs);return o(M,h({},l,{icon:q}),null)};d.displayName="LockOutlined";d.inheritAttrs=!1;const E={class:"my-login"},D={class:"login-form"},T=F({__name:"MyLogin",setup(a){class e{constructor(){m(this,"account");m(this,"password");this.account="",this.password=""}}const[t,l]=P.useMessage(),u=I();let c=j(new e);const f=B(),_={labelCol:{span:0},wrapperCol:{span:24}},w={account:[{max:20,required:!0,message:"请输入账号",trigger:"change"}],password:[{max:20,required:!0,message:"请输入密码",trigger:"change"}]},y=()=>{f.value.validate().then(()=>{c.account==="admin"&&c.password==="123456"?(t.success("登录成功"),localStorage.setItem("token","token"),u.push({path:"/"})):t.error("账号或密码错误")})};return(x,r)=>{const g=i("a-input"),v=i("a-form-item"),O=i("a-form"),k=i("a-tab-pane"),C=i("a-tabs"),z=i("a-button");return S(),H("div",E,[b("div",D,[r[4]||(r[4]=b("div",{class:"title"},"My-Admin-Vue3",-1)),o(C,{"default-active-key":"1",size:"large",centered:""},{default:n(()=>[o(k,{key:"1",tab:"账号登录"},{default:n(()=>[o(O,{ref_key:"refRuleForm",ref:f,model:s(c),rules:w,"label-col":_.labelCol,"wrapper-col":_.wrapperCol},{default:n(()=>[o(v,{"has-feedback":"",name:"account"},{default:n(()=>[o(g,{value:s(c).account,"onUpdate:value":r[0]||(r[0]=p=>s(c).account=p),size:"large",type:"text",autocomplete:"off",maxLength:20,placeholder:"admin"},{prefix:n(()=>[o(s(N))]),_:1},8,["value"])]),_:1}),o(v,{"has-feedback":"",name:"password"},{default:n(()=>[o(g,{value:s(c).password,"onUpdate:value":r[1]||(r[1]=p=>s(c).password=p),size:"large",type:"password",autocomplete:"off",maxLength:20,placeholder:"123456"},{prefix:n(()=>[o(s(d))]),_:1},8,["value"])]),_:1})]),_:1},8,["model","label-col","wrapper-col"])]),_:1})]),_:1}),o(z,{class:"login-button",type:"primary",size:"large",onClick:r[2]||(r[2]=()=>y())},{default:n(()=>r[3]||(r[3]=[R(" 登录 ")])),_:1})]),o(s(l))])}}}),J=U(T,[["__scopeId","data-v-5bae2743"]]);export{J as default};
