import{d as c,r as _,j as r,k as i,u as d,v as l,l as p,w as t,E as m}from"./vue-fdfdc7c1.js";import{H as u}from"./hwcClient.service-600ae41f.js";import{_ as f}from"./index-6c865c9f.js";const v={class:"container"},x={class:"content"},g={x:"40",y:"150"},h=c({__name:"index",setup(w){const o=_(),a={apigName:"apig_hello_world",apigGroupName:"group_hello_world"};async function n(){const e=await u.apiRequest("",{},a);o.value=e==null?void 0:e.data}return r(n),(e,y)=>{const s=i("Breadcrumb");return d(),l("div",v,[p(s,{items:["menu.cloud","menu.cloud.hello"]}),t("div",x,[t("text",g,m(o.value),1)])])}}});const C=f(h,[["__scopeId","data-v-7e3c5c0f"]]);export{C as default};