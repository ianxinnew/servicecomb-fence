import{d as w,a0 as b,a8 as r,u as x,v as S,w as s,l as t,H as i,W as a,E as c,J as u,Z as I,_ as $}from"./vue-fdfdc7c1.js";import{_ as C,a as z,b as D,c as k}from"./home-down-1ba808d1.js";import{P as G,R as m,C as h,a as d,G as P}from"./index-364808e4.js";import"./index-47ef1f96.js";import{n as B,_ as N}from"./index-0769536d.js";import"./chevron-up-2e8ca2bc.js";import"./index-fbad00b4.js";const o=n=>(I("data-v-b51475b6"),n=n(),$(),n),R={class:"preview-main"},V={class:"preview-card"},j={class:"col"},E=o(()=>s("div",{class:"img"},[s("img",{src:C,class:"image"})],-1)),O={class:"num"},H={class:"up"},J={class:"left"},L={id:"up",class:"right"},M=o(()=>s("img",{src:z,class:"image"},null,-1)),T=o(()=>s("span",null,"0.88%",-1)),W=o(()=>s("div",{class:"down"},[s("span",{class:"left"},"3.23"),s("span",{class:"right"},"/ s")],-1)),Z={class:"col"},q=o(()=>s("div",{class:"img"},[s("img",{src:D,class:"image"})],-1)),A={class:"num"},F={class:"up"},K=o(()=>s("span",{class:"left"},"DOM Ready",-1)),Q={id:"down",class:"right"},U=o(()=>s("img",{src:k,class:"image"},null,-1)),X=o(()=>s("span",null,"0.88%",-1)),Y=o(()=>s("div",{class:"down"},[s("span",{class:"left"},"1.56"),s("span",{class:"right"},"/ s")],-1)),ss={class:"preview-table"},es=w({__name:"index",setup(n){const{t:p}=b(),_=[{id:"1",space:"4G",pv:"1767(97.77%)",play:"0.44s"},{id:"2",space:"2G",pv:"22(1.77%)",play:"0.43s"},{id:"3",space:p("home.round.unknow"),pv:"32(1.77%)",play:"0.44s"},{id:"4",space:p("home.round.unknow"),pv:"32(1.77%)",play:"0.44s"}],g=r({component:G,attrs:{currentPage:1,pageSize:5,pageSizes:[5,10],total:0,layout:"total, prev, pager, next, jumper, sizes"}});async function f(e={pageIndex:1,pageSize:10}){const l=_.length;return{result:_,page:{total:l}}}const v=r({api:({page:e})=>{const{currentPage:l,pageSize:y}=e;return f({pageIndex:l,pageSize:y})}});return(e,l)=>(x(),S("div",R,[s("div",V,[t(a(B),null,{default:i(()=>[t(a(m),{flex:!0},{default:i(()=>[t(a(h),{span:6},{default:i(()=>[s("div",j,[E,s("div",O,[s("div",H,[s("span",J,c(e.$t("home.main.one")),1),s("span",L,[u(c(e.$t("home.main.day"))+" ",1),M,T])]),W])])]),_:1}),t(a(h),{span:6},{default:i(()=>[s("div",Z,[q,s("div",A,[s("div",F,[K,s("span",Q,[u(c(e.$t("home.main.day"))+" ",1),U,X])]),Y])])]),_:1})]),_:1}),t(a(m),{flex:!0,justify:"center"})]),_:1})]),s("div",ss,[t(a(P),{ref:"grid","fetch-data":v,pager:g},{default:i(()=>[t(a(d),{field:"id",title:e.$t("home.roundtable.index"),width:"160"},null,8,["title"]),t(a(d),{field:"space",title:e.$t("home.roundtable.space"),width:"180"},null,8,["title"]),t(a(d),{field:"pv",title:e.$t("home.roundtable.pv"),width:"180"},null,8,["title"]),t(a(d),{field:"play",title:e.$t("home.roundtable.play"),width:"200"},null,8,["title"])]),_:1},8,["fetch-data","pager"])])]))}});const cs=N(es,[["__scopeId","data-v-b51475b6"]]);export{cs as default};
