import{d as h,a0 as g,r as y,k as B,u as i,v as u,l,w as e,E as n,z as b,H as c,W as s,J as m,Z as k,_ as C}from"./vue-fdfdc7c1.js";import{T as d,B as _,_ as F}from"./index-0769536d.js";import{T as I}from"./index-b6f9d5a5.js";import"./chevron-up-2e8ca2bc.js";const S="/ui/admin/assets/error-8553e43d.png",N=r=>(k("data-v-3543871e"),r=r(),C(),r),T={class:"container"},$={class:"content"},x={class:"content-main"},E={key:0,class:"result-alert"},V=N(()=>e("img",{src:S,alt:"error"},null,-1)),w={class:"result-btn"},z={class:"result-line"},D=h({__name:"index",setup(r){const{t}=g(),a=y(4);function p(){a.value<4?(a.value+=1,d.message({message:t("menu.result.messageSuccess"),status:"success"})):(a.value=4,d.message({message:t("menu.result.messageEnd"),status:"success"}))}function v(){a.value===4&&(a.value=0)}return(o,H)=>{const f=B("Breadcrumb");return i(),u("div",T,[l(f,{items:["menu.result","menu.result.error"]}),e("div",$,[e("div",x,[a.value===4?(i(),u("div",E,[V,e("div",null,[e("div",null,n(o.$t("menu.result.messageError")),1),e("div",null,n(o.$t("error.result.title")),1)])])):b("",!0),e("div",w,[l(s(_),{type:"primary","native-type":"submit",onClick:p},{default:c(()=>[m(n(o.$t("error.result.home")),1)]),_:1}),l(s(_),{onClick:v},{default:c(()=>[m(n(o.$t("menu.btn.cancel")),1)]),_:1})]),e("div",z,[e("div",null,n(o.$t("menu.line.process")),1),e("div",null,[l(s(I),{data:[{name:s(t)("stepForm.start.coaching")},{name:s(t)("stepForm.immediate.supervisor")},{name:s(t)("stepForm.overall.goals")},{name:s(t)("stepForm.overall.summary")},{name:s(t)("stepForm.overall.end")}],active:a.value,type:"normal"},null,8,["data","active"])])])])])])}}});const W=F(D,[["__scopeId","data-v-3543871e"]]);export{W as default};
