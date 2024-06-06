import{d as x,a8 as C,r as B,a0 as R,c as j,u as g,y as h,H as l,W as t,l as e,v as D,N,M as E,k as q,w as b,J as $,E as w}from"./vue-fdfdc7c1.js";import{I as v,g as J,T,_ as I,u as L,B as k}from"./index-c4332e9f.js";import{g as _}from"./time-3f8879de.js";import{h as M}from"./head-a1a4fc17.js";import{R as c,C as i}from"./index-28317ab8.js";import{D as V}from"./index-ae7dd371.js";import{F as u,a as z}from"./index-8fd4ffea.js";import{S as H,O as P}from"./index-c16e23f7.js";import"./chevron-up-b5845a28.js";import"./index-259f1314.js";import"./index-3f7c73bb.js";const W=x({__name:"set-from",setup(U,{expose:m}){const d=[{value:"1",label:"social recruitment"},{value:"2",label:"scholl recruitment"},{value:"3",label:"Job transfer"}],a=C({filterOptions:{},department:"",position:[],type:[],date:[],during:"",startTime:"",endTime:""}),p=B(),{t:O}=R(),r={required:!0,trigger:"blur"},f={required:!0,message:"必选",trigger:"blur"},y=j(()=>({department:[r],position:[r],type:[f],date:[r],during:[r],startTime:[r],endTime:[r]})),S=()=>{var s,F;const n=(s=a.filterOptions.startTime)==null?void 0:s.getTime();((F=a.filterOptions.endTime)==null?void 0:F.getTime())<n&&(a.filterOptions.endTime="",T.message({message:O("userInfo.time.message"),status:"error"}))};return m({setData:()=>a,setFormValid:()=>{let n=!1;return p.value.validate(o=>{n=o}),n},setReset:()=>{a.filterOptions={}}}),(n,o)=>(g(),h(t(J),null,{default:l(()=>[e(t(z),{ref_key:"setFormRef",ref:p,model:a.filterOptions,rules:y.value,"label-width":"150px","label-align":!0,"label-position":"left",size:"small"},{default:l(()=>[e(t(c),{flex:!0,justify:"left"},{default:l(()=>[e(t(i),{span:5,"label-width":"100px"},{default:l(()=>[e(t(u),{label:n.$t("userSetting.department"),prop:"department"},{default:l(()=>[e(t(v),{modelValue:a.filterOptions.department,"onUpdate:modelValue":o[0]||(o[0]=s=>a.filterOptions.department=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(t(i),{span:5,"label-width":"100px"},{default:l(()=>[e(t(u),{label:n.$t("userSetting.position"),prop:"position"},{default:l(()=>[e(t(v),{modelValue:a.filterOptions.position,"onUpdate:modelValue":o[1]||(o[1]=s=>a.filterOptions.position=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),e(t(c),{flex:!0,justify:"left"},{default:l(()=>[e(t(i),{span:5,"label-width":"100px"},{default:l(()=>[e(t(u),{label:n.$t("userSetting.type"),prop:"type"},{default:l(()=>[e(t(H),{modelValue:a.filterOptions.type,"onUpdate:modelValue":o[2]||(o[2]=s=>a.filterOptions.type=s),placeholder:n.$t("baseForm.form.label.placeholder")},{default:l(()=>[(g(!0),D(E,null,N(d,s=>(g(),h(t(P),{key:s.value,label:n.$t(s.label),value:s.label},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(t(i),{span:5,"label-width":"100px"},{default:l(()=>[e(t(u),{label:n.$t("userSetting.date"),prop:"date"},{default:l(()=>[e(t(V),{modelValue:a.filterOptions.date,"onUpdate:modelValue":o[3]||(o[3]=s=>a.filterOptions.date=s),"unlink-panels":"",type:"daterange","range-separator":"-","start-placeholder":n.$t("userSetting.first"),"end-placeholder":n.$t("userSetting.last")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"])]),_:1})]),_:1}),e(t(c),{flex:!0,justify:"left"},{default:l(()=>[e(t(i),{span:5,"label-width":"100px"},{default:l(()=>[e(t(u),{label:n.$t("userSetting.during"),prop:"during"},{default:l(()=>[e(t(v),{modelValue:a.filterOptions.during,"onUpdate:modelValue":o[4]||(o[4]=s=>a.filterOptions.during=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1}),e(t(i),{span:5,"label-width":"100px"},{default:l(()=>[e(t(u),{label:n.$t("userSetting.startTime"),prop:"startTime"},{default:l(()=>[e(t(V),{modelValue:a.filterOptions.startTime,"onUpdate:modelValue":o[5]||(o[5]=s=>a.filterOptions.startTime=s),onBlur:S},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1}),e(t(c),{flex:!0,justify:"left"},{default:l(()=>[e(t(i),{span:5,"label-width":"100px"},{default:l(()=>[e(t(u),{label:n.$t("userSetting.endTime"),prop:"endTime"},{default:l(()=>[e(t(V),{modelValue:a.filterOptions.endTime,"onUpdate:modelValue":o[6]||(o[6]=s=>a.filterOptions.endTime=s),onBlur:S},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1}))}});const Y=I(W,[["__scopeId","data-v-0e48261b"]]),A={class:"container-set"},G={class:"general-card"},K={class:"general-top"},Q={class:"general-contain"},X={class:"general-btn"},Z=x({__name:"index",setup(U){const{t:m}=R(),d=B(),a=L();function p(){d.value.setReset()}async function O(){let r=d.value.setData();if(d.value.setFormValid()){let f={department:r.filterOptions.department,job:r.filterOptions.position,employeeType:r.filterOptions.type,probationStart:_(r.filterOptions.date[0]),probationEnd:_(r.filterOptions.date[1]),probationDuration:r.filterOptions.during,protocolStart:_(r.filterOptions.startTime),protocolEnd:_(r.filterOptions.endTime)};await a.updateInfo(f),T.message({message:m("baseForm.form.submit.success"),status:"success"}),p()}else T.message({message:m("baseForm.form.submit.error"),status:"error"})}return(r,f)=>{const y=q("Breadcrumb");return g(),D("div",A,[e(y,{items:["menu.user","menu.user.setting"]}),b("div",G,[b("div",K,[e(M)]),b("div",Q,[e(Y,{ref_key:"setFormRef",ref:d},null,512),b("div",X,[e(t(k),{type:"primary","native-type":"submit",onClick:O},{default:l(()=>[$(w(r.$t("userSetting.save")),1)]),_:1}),e(t(k),{onClick:p},{default:l(()=>[$(w(r.$t("userSetting.cancel")),1)]),_:1})])])])])}}});const be=I(Z,[["__scopeId","data-v-1616658a"]]);export{be as default};
