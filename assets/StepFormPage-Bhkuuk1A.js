import{L as U,u as q,s as F,r as B,B as L,d as n,f as S,o as b,w as t,a as e,e as m,h as x,t as f,b as s,v as N,c as V,_ as $,x as T}from"./index-BnRkRYd4.js";const k=U("step",{state:()=>({step:0,transferInfo:null}),actions:{setStep(d){this.step=d},setTransferInfo(d){this.transferInfo=d}},persist:!0}),P={__name:"StepForm1",setup(d){class c{constructor(){this.paymentAccount=void 0,this.receiverAccount="test@example.com",this.receiver="Alex",this.transferAmount="100.00"}}const r=q("refRuleForm"),u=k(),{step:g,transferInfo:o}=F(u),a=B(new c),p={labelCol:{span:6},wrapperCol:{span:14}},C={paymentAccount:[{required:!0,message:"请选择付款账户",trigger:"change"}],receiverAccount:[{required:!0,message:"请选择收款账户",trigger:"change"}],receiver:[{required:!0,message:"请输入收款人姓名",trigger:"change"}],transferAmount:[{required:!0,message:"请输入转账金额",trigger:"change"}]};L(()=>{o.value&&(a.value=o.value)});const w=()=>{r.value.validate().then(()=>{u.setTransferInfo({...a.value}),u.setStep(g.value+1)})};return(R,l)=>{const _=n("a-select-option"),i=n("a-select"),v=n("a-form-item"),A=n("a-input"),I=n("a-button"),h=n("a-form");return b(),S(h,{ref_key:"refRuleForm",ref:r,model:a.value,rules:C,"label-col":p.labelCol,"wrapper-col":p.wrapperCol},{default:t(()=>[e(v,{label:"付款账户",name:"paymentAccount"},{default:t(()=>[e(i,{value:a.value.paymentAccount,"onUpdate:value":l[0]||(l[0]=y=>a.value.paymentAccount=y),placeholder:"my-admin-vue2@alipay.com"},{default:t(()=>[e(_,{value:"my-admin-vue2@alipay.com"},{default:t(()=>l[4]||(l[4]=[m(" my-admin-vue2@alipay.com ")])),_:1})]),_:1},8,["value"])]),_:1}),e(v,{label:"收款账户",name:"receiverAccount"},{default:t(()=>[e(A,{value:a.value.receiverAccount,"onUpdate:value":l[1]||(l[1]=y=>a.value.receiverAccount=y),maxLength:"50"},null,8,["value"])]),_:1}),e(v,{label:"收款人姓名",name:"receiver"},{default:t(()=>[e(A,{value:a.value.receiver,"onUpdate:value":l[2]||(l[2]=y=>a.value.receiver=y),maxLength:20},null,8,["value"])]),_:1}),e(v,{label:"转账金额",name:"transferAmount"},{default:t(()=>[e(A,{value:a.value.transferAmount,"onUpdate:value":l[3]||(l[3]=y=>a.value.transferAmount=y),type:"number",maxLength:20},null,8,["value"])]),_:1}),e(v,{"wrapper-col":{span:14,offset:6}},{default:t(()=>[e(I,{type:"primary",onClick:w},{default:t(()=>l[5]||(l[5]=[m(" 下一步 ")])),_:1})]),_:1})]),_:1},8,["model","label-col","wrapper-col"])}}},z={__name:"StepForm2",setup(d){class c{constructor(){this.paySecret="123456"}}const r=q("refRuleForm"),u=k(),{step:g,transferInfo:o}=F(u),a=B(new c),p={labelCol:{span:6},wrapperCol:{span:16}},C={paySecret:[{required:!0,message:"请输入支付密码",trigger:"change"}]},w=()=>{r.value.validate().then(()=>{u.setStep(g.value+1)})},R=()=>{u.setStep(g.value-1)};return(l,_)=>{const i=n("a-form-item"),v=n("a-input"),A=n("a-button"),I=n("a-form");return b(),S(I,{ref_key:"refRuleForm",ref:r,model:a.value,rules:C,"label-col":p.labelCol,"wrapper-col":p.wrapperCol},{default:t(()=>[e(i,{label:"付款账户",name:"paymentAccount"},{default:t(()=>[x("span",null,f(s(o).paymentAccount),1)]),_:1}),e(i,{label:"收款账户",name:"receiverAccount"},{default:t(()=>[x("span",null,f(s(o).receiverAccount),1)]),_:1}),e(i,{label:"收款人姓名",name:"receiver"},{default:t(()=>[x("span",null,f(s(o).receiver),1)]),_:1}),e(i,{label:"转账金额",name:"transferAmount"},{default:t(()=>[x("span",null,f(s(o).transferAmount),1)]),_:1}),e(i,{label:"支付密码",name:"paySecret"},{default:t(()=>[e(v,{value:a.value.paySecret,"onUpdate:value":_[0]||(_[0]=h=>a.value.paySecret=h),type:"password",maxLength:20},null,8,["value"])]),_:1}),e(i,{"wrapper-col":{span:14,offset:6}},{default:t(()=>[e(A,{type:"default",onClick:R},{default:t(()=>_[1]||(_[1]=[m(" 上一步 ")])),_:1}),e(A,{style:{"margin-left":"10px"},type:"primary",onClick:w},{default:t(()=>_[2]||(_[2]=[m(" 下一步 ")])),_:1})]),_:1})]),_:1},8,["model","label-col","wrapper-col"])}}},D={class:""},E={__name:"StepForm3",setup(d){const c=k(),{transferInfo:r}=F(c),u=N();return(g,o)=>{const a=n("a-descriptions-item"),p=n("a-descriptions"),C=n("a-button"),w=n("a-result");return b(),V("div",D,[e(w,{title:"转账成功"},{extra:t(()=>[e(p,{column:1,bordered:"",size:"small"},{default:t(()=>[e(a,{label:"付款账户"},{default:t(()=>[m(f(s(r).paymentAccount),1)]),_:1}),e(a,{label:"收款账户"},{default:t(()=>[m(f(s(r).receiverAccount),1)]),_:1}),e(a,{label:"收款人姓名"},{default:t(()=>[m(f(s(r).receiver),1)]),_:1}),e(a,{label:"转账金额"},{default:t(()=>[m(f(s(r).transferAmount),1)]),_:1})]),_:1}),e(C,{style:{"margin-top":"24px"},key:"console",type:"primary",onClick:o[0]||(o[0]=()=>s(u).push({path:"/"}))},{default:t(()=>o[1]||(o[1]=[m(" 确定 ")])),_:1})]),_:1})])}}},M={class:"step-form-page"},j={class:"step-form-action"},G={__name:"StepFormPage",setup(d){const c=k(),{step:r}=F(c);return L(()=>{c.setTransferInfo(null),c.setStep(0)}),(u,g)=>{const o=n("a-step"),a=n("a-steps"),p=n("a-card");return b(),S(p,{style:{"border-radius":"10px"},bordered:!1},{default:t(()=>[x("div",M,[e(a,{current:s(r)},{default:t(()=>[e(o,{title:"填写转账信息"}),e(o,{title:"确认转账信息"}),e(o,{title:"完成"})]),_:1},8,["current"]),x("div",j,[s(r)===0?(b(),S(P,{key:0})):T("",!0),s(r)===1?(b(),S(z,{key:1})):T("",!0),s(r)===2?(b(),S(E,{key:2})):T("",!0)])])]),_:1})}}},J=$(G,[["__scopeId","data-v-7fe042c5"]]);export{J as default};
