import{d as M,a0 as j,r as g,a8 as z,c as Y,u as S,v as T,w as n,E as u,l as t,H as l,W as e,J as y,Z as ee,_ as te,a9 as ae,k as le,y as N,z as W,M as ne,B as se}from"./vue-fdfdc7c1.js";import{I as R,B,T as G,_ as U}from"./index-c4332e9f.js";import{R as A,C as V,P as oe,a as F,G as ue}from"./index-28317ab8.js";import"./index-ddfb43e7.js";import{G as ie}from"./index-76703bb7.js";import{s as re}from"./time-3f8879de.js";import{H as D}from"./hwcClient.service-a80f9fec.js";import{F as I,a as L}from"./index-8fd4ffea.js";import"./chevron-up-b5845a28.js";import"./index-259f1314.js";import"./index-c16e23f7.js";import"./index-3f7c73bb.js";import"./warning-triangle-d6fdd716.js";const de={class:"container-edit"},ce={class:"contain"},me={class:"tip"},pe=M({__name:"index",props:{init:{}},emits:["myclick","mycancel"],setup(C,{expose:b,emit:w}){const{t:d}=j(),v=g(),p=C,i=(o,s,h)=>{/^([a-zA-Z0-9]|[\u4e00-\u9fa5])([a-zA-Z0-9._:()（）、：\/-]|[\u4e00-\u9fa5]){2,254}$/.test(s)?(v.value.password!==""&&v.value.validateField("password"),h(void 0)):h(new Error(d("menu.cloud.tip")))};let r=z({name:p.init.name,customer:p.init.customer,description:p.init.description}),f=g(!0);const _=Y(()=>({name:[{required:!0,message:d("menu.cloud.delpass"),trigger:"blur"},{validator:i,trigger:"blur"}],customer:[{required:!1,trigger:"blur"}],description:[{required:!1,trigger:"change"}]})),$=w,E=()=>r,k=()=>{$("mycancel")},c=()=>{v.value.validate(o=>{o?(z({username:r.name}),G.message({message:d("menu.cloud.editpass"),status:"success"}),$("myclick")):G.message({message:d("login.form.registerError"),status:"warning"})})};return b({resultData:E}),(o,s)=>(S(),T("div",de,[n("h3",null,u(o.$t("menu.cloud.edit")),1),n("div",ce,[t(e(L),{ref_key:"ruleForm",ref:v,model:e(r),rules:_.value,"validate-on-rule-change":e(f),"label-align":!0,"label-position":"left","label-width":"110px"},{default:l(()=>[t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{label:o.$t("menu.cloud.name"),prop:"name"},{default:l(()=>[n("div",null,[t(e(R),{modelValue:e(r).name,"onUpdate:modelValue":s[0]||(s[0]=h=>e(r).name=h)},null,8,["modelValue"]),n("div",me,u(o.$t("menu.cloud.tip")),1)])]),_:1},8,["label"])]),_:1})]),_:1}),t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{label:o.$t("menu.cloud.customer"),prop:"customer"},{default:l(()=>[t(e(R),{modelValue:e(r).customer,"onUpdate:modelValue":s[1]||(s[1]=h=>e(r).customer=h)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{label:o.$t("menu.cloud.description"),prop:"description"},{default:l(()=>[t(e(R),{modelValue:e(r).description,"onUpdate:modelValue":s[2]||(s[2]=h=>e(r).description=h),type:"textarea"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{class:"btn"},{default:l(()=>[t(e(B),{type:"primary",onClick:c},{default:l(()=>[y(u(o.$t("menu.cloud.sure")),1)]),_:1}),t(e(B),{onClick:k},{default:l(()=>[y(u(o.$t("menu.cloud.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","validate-on-rule-change"])])]))}});const fe=U(pe,[["__scopeId","data-v-bb007481"]]),ge={class:"container-create"},ve={class:"contain"},_e={class:"tip"},ye=M({__name:"index",emits:["myclick","mycancel"],setup(C,{expose:b,emit:w}){const{t:d}=j(),v=g(),p=(c,o,s)=>{/^([a-zA-Z0-9]|[\u4e00-\u9fa5])([a-zA-Z0-9._:()（）、：\/-]|[\u4e00-\u9fa5]){2,254}$/.test(o)?(v.value.password!==""&&v.value.validateField("password"),s(void 0)):s(new Error(d("menu.cloud.tip")))};let i=z({name:"",customer:"",description:""}),r=g(!0);const f=Y(()=>({name:[{required:!0,message:d("menu.cloud.verification"),trigger:"blur"},{validator:p,trigger:"blur"}],customer:[{required:!1,trigger:"blur"}],description:[{required:!1,trigger:"change"}]})),_=w,$=()=>i,E=()=>{_("mycancel")},k=()=>{v.value.validate(c=>{c?(z({username:i.name}),G.message({message:d("login.form.registerPass"),status:"success"}),_("myclick")):G.message({message:d("login.form.registerError"),status:"warning"})})};return b({resultData:$}),(c,o)=>(S(),T("div",ge,[n("h3",null,u(c.$t("menu.cloud.create")),1),n("div",ve,[t(e(L),{ref_key:"ruleForm",ref:v,model:e(i),rules:f.value,"validate-on-rule-change":e(r),"label-align":!0,"label-position":"left","label-width":"110px"},{default:l(()=>[t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{label:c.$t("menu.cloud.name"),prop:"name"},{default:l(()=>[n("div",null,[t(e(R),{modelValue:e(i).name,"onUpdate:modelValue":o[0]||(o[0]=s=>e(i).name=s)},null,8,["modelValue"]),n("div",_e,u(c.$t("menu.cloud.tip")),1)])]),_:1},8,["label"])]),_:1})]),_:1}),t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{label:c.$t("menu.cloud.customer"),prop:"customer"},{default:l(()=>[t(e(R),{modelValue:e(i).customer,"onUpdate:modelValue":o[1]||(o[1]=s=>e(i).customer=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{label:c.$t("menu.cloud.description"),prop:"description"},{default:l(()=>[t(e(R),{modelValue:e(i).description,"onUpdate:modelValue":o[2]||(o[2]=s=>e(i).description=s),type:"textarea"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),t(e(A),{flex:!0},{default:l(()=>[t(e(V),null,{default:l(()=>[t(e(I),{class:"btn"},{default:l(()=>[t(e(B),{type:"primary",onClick:k},{default:l(()=>[y(u(c.$t("menu.cloud.sure")),1)]),_:1}),t(e(B),{onClick:E},{default:l(()=>[y(u(c.$t("menu.cloud.cancel")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules","validate-on-rule-change"])])]))}});const he=U(ye,[["__scopeId","data-v-a2c95e32"]]),Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAhCAYAAAC1ONkWAAADmklEQVRYR82X3WscZRTGzzN9d6qVVkt3lqCiImiEWlpbrcSixAtBvRBmlhZvIg0limlQaP+B9A9QsGrFIFHUC6XsjHqhF960+NFarUZooe2FxFYk7Gy1H1Zl9s37yGy2km1ms/ORat+rYeac5/zmcM6ZM5CCh9y6TAcH9ojISEuKMqG8wXFg/2wRaRRxjn2jWvldERm6Quc9u9p4poh2ITAdONuM4YdJABawTXnh/rxwucH4cf9KPXv2BCk3JwUH5Fe1Gv14NPwjD1xusKZfeYk0uxYLClgvl7z67v8MjJ/0rdVaT5GiFgcTrZTagKdmjmeFy5WxZs05SOEjaYIBOFjywsE0tvNtMoPpoDJkjIk7seMAaBU6ya1XPrMsa0i59fezwGUC4+d33qgvXDxBYV8nlZwpueHt8T0dOKdJubXz7TGjVq28B4/9dD4tXCawpu+8QvKFBeLAlO2F97Xmmu/8IOSGhIzuLXnhi0sORr+yXtMcpciyXGAiswrWJnj1H9PApcoYSWi/8gWFWxJFU2Qs9oPgK+XVHwbAXnCpwLTvDBtysqtYSrDY37IwrNzwncJgDO64SZtLpyh0lgIMQF3hhn640+cWnYG9yHXgvG4MRxe1y5Cxdtb2KTfcmRuMtfJGLfItRaylBIOIUSIPoNr4vptu1xqbK3jnEEUe7JVVyZixuUaQb5QXDnRrhK5g2i+PGMpET6hWlN5zLEnHEhlR1cZbSc8SwejfskZLdJLkmqsJBuCsWrH8bjz+y28LBnJS4MivTAjN3Kqc5uTMWFt6wq42nusJFgV9m0F9mIzLIOUpABY3Ai01YLszR+ZH6whOjlvN4LUjQtmUEumy2Wm72mh9xKNa+WcRuS2TP+RoyR3bDIyby34dYFFQeV6M2ZdJtG0M4LP4kuQTefzFskZtt/7GAjB+2ufov/VJUlbnEi7oBMjv6jrVjydnwvY4mVOMfGdSyOG8+hCJWhkTsfNqCDBpe+GOf8GaH1UeEmO+zFTw86JD8Jeyl98lEaElir+r1+eBA+L3sraUvPohxH/SzeDAd0nLXWrxAl25IAYwVXIH74cOnO3G8O3UEMmGx+1q4952Vx4TkbVF9OLVCE3f+ZrkQBEhiMwCeDbeBGn4ZuKWmyEAgMMx2CWSKzL4XXVTAH8iqpWnRaQ1HK+ZA0wjCpwxMXz1moGKQSxrtDX5tV9+msSYgOtIWfV/QAJyUQTHINyrvMYH/wCqlqCjKgTtawAAAABJRU5ErkJggg==",P=C=>(ee("data-v-2fa667e7"),C=C(),te(),C),be={class:"container-del"},we={class:"contain"},$e=P(()=>n("img",{src:Ce,alt:"deleted"},null,-1)),ke={class:"contain-main"},Ae={class:"title"},Ve=P(()=>n("span",{class:"del"},"DELETE",-1)),Ie={class:"btn"},Ee=M({__name:"index",props:{init:Object},emits:["myclick","mycancel"],setup(C,{emit:b}){const{t:w}=j(),d=g(""),v=C,p=b,i=()=>{p("mycancel")},r=()=>{d.value.trim()==="DELETE"?(G.message({message:w("menu.cloud.delpass"),status:"success"}),p("myclick")):G.message({message:w("login.form.registerError"),status:"warning"})};return(f,_)=>(S(),T("div",be,[n("h3",null,u(f.$t("menu.cloud.del")),1),n("div",we,[$e,n("div",ke,[n("div",null,[y(u(f.$t("menu.cloud.askDel"))+" ",1),n("b",null,u(f.$t("menu.cloud.askContracts")),1),y("？ ")]),n("div",Ae,u(f.$t("menu.contracts.name"))+" "+u(v.init.name),1),n("div",null,[y(u(f.$t("menu.cloud.askInput"))+" ",1),Ve,y(" "+u(f.$t("menu.cloud.askSure")),1)]),t(e(R),{modelValue:d.value,"onUpdate:modelValue":_[0]||(_[0]=$=>d.value=$)},null,8,["modelValue"]),n("div",Ie,[t(e(B),{type:"danger",onClick:r},{default:l(()=>[y(u(f.$t("menu.cloud.sure")),1)]),_:1}),t(e(B),{onClick:i},{default:l(()=>[y(u(f.$t("menu.cloud.cancel")),1)]),_:1})])])])]))}});const Fe=U(Ee,[["__scopeId","data-v-2fa667e7"]]),Se={class:"container-contracts"},ze={class:"contracts-card"},Re={class:"btn"},Be={class:"operation"},Ge=["onClick"],xe=["onClick"],Te={key:0},qe=M({__name:"index",setup(C){const b=z({loading:!1,filterOptions:{}}),w=z({component:oe,attrs:{currentPage:1,pageSize:10,pageSizes:[10,20],total:10,layout:"total, prev, pager, next, jumper, sizes"}}),d=g(!0),{loading:v}=ae(b),p=g(!1),i=g(),r=g(""),f=g(),_=g(),$=g(),E=g(),k=g("536"),c={apigName:"apig_contract",apigGroupName:"group_contract"};async function o(a){const m=await D.apiRequest("getContracts",a,c);return m==null?void 0:m.data}async function s(a){b.loading=!0;try{E.value=await o(a);let m=(a.pageIndex-1)*a.pageSize;return{result:E.value.sort(re("updatedAt")).slice(m,m+a.pageSize),page:{total:E.value.length}}}finally{d.value=!0,b.loading=!1}}async function h(a){return D.apiRequest("delContract",a,c)}async function H(a){return D.apiRequest("editContract",a,c)}async function K(a){return D.apiRequest("addContract",a,c)}const Q=z({api:({page:a})=>{const{currentPage:m,pageSize:q}=a;return s({pageIndex:m,pageSize:q,query:"",field:"name"})}}),O=(a,m)=>{_.value=m,r.value=a,p.value=!p.value,a==="edit"?(i.value=fe,k.value="536"):a==="deletes"?(i.value=Fe,k.value="369"):(i.value=he,k.value="536")};async function Z(){if(p.value=!1,d.value=!1,r.value==="edit"){const a=f.value.resultData(),m={id:_.value.id,name:a.name,customer:a.customer,description:a.description};await H(m),s({pageIndex:1,pageSize:10,query:"",field:"name"})}if(r.value==="deletes"){const a={id:_.value.id};await h(a),s({pageIndex:1,pageSize:10,query:"",field:"name"})}if(r.value==="create"){const a=f.value.resultData(),m={name:a.name,customer:a.customer,description:a.description};await K(m),s({pageIndex:1,pageSize:10,query:"",field:"name"})}}const J=()=>{p.value=!1};return(a,m)=>{const q=le("Breadcrumb");return S(),T(ne,null,[t(q,{items:["menu.cloud","menu.cloud.contracts"]}),n("div",Se,[n("div",ze,[d.value?(S(),N(e(ue),{key:0,ref:$.value,"fetch-data":Q,"auto-load":!0,pager:w,loading:e(v),size:"medium","auto-resize":!0},{toolbar:l(()=>[t(e(ie),null,{buttons:l(x=>[n("div",Re,[n("span",null,u(a.$t("menu.cloud.contracts")),1),t(e(B),{type:"primary",onClick:X=>O("create",x.row)},{default:l(()=>[y(u(a.$t("menu.cloud.create")),1)]),_:2},1032,["onClick"])])]),_:1})]),default:l(()=>[t(e(F),{type:"index",width:"40"}),t(e(F),{field:"name",title:a.$t("menu.cloud.name"),align:"center",sortable:""},null,8,["title"]),t(e(F),{field:"id",title:a.$t("menu.cloud.id"),align:"center"},null,8,["title"]),t(e(F),{field:"customer",title:a.$t("menu.cloud.customer"),align:"center"},null,8,["title"]),t(e(F),{field:"description",title:a.$t("menu.cloud.description"),align:"center"},null,8,["title"]),t(e(F),{field:"updatedAt",title:a.$t("menu.cloud.updatedAt"),align:"center",sortable:""},null,8,["title"]),t(e(F),{title:a.$t("searchTable.columns.operations"),align:"center"},{default:l(x=>[n("span",Be,[n("a",{onClick:X=>O("edit",x.row)},u(a.$t("menu.cloud.editOpa")),9,Ge),y("   "),n("a",{onClick:X=>O("deletes",x.row)},u(a.$t("menu.cloud.editDel")),9,xe)])]),_:1},8,["title"])]),_:1},8,["fetch-data","pager","loading"])):W("",!0)])]),p.value?(S(),T("div",Te,[t(e(G),{modelValue:p.value,"onUpdate:modelValue":m[0]||(m[0]=x=>p.value=x),"lock-scroll":!1,"show-header":!1,"show-footer":!1,type:"confirm","mask-closable":"true",height:k.value,width:"589",onConfirm:Z,onClose:J},{default:l(()=>[(S(),N(se(i.value),{ref_key:"content",ref:f,init:_.value,onMyclick:Z,onMycancel:J},null,40,["init"]))]),_:1},8,["modelValue","height"])])):W("",!0)],64)}}});const Pe=U(qe,[["__scopeId","data-v-19a1fa63"]]);export{Pe as default};
