import{H as a}from"./index-0769536d.js";function i(e){return typeof e=="object"&&e!==null&&"message"in e&&typeof e.message=="string"}class o{static getErrorMessage(t){return this.convertToCommonError(t).message}static convertToCommonError(t){if(i(t))return t;try{return new Error(JSON.stringify(t))}catch{return new Error(String(t))}}}class m{static async apiRequest(t,n,s){try{const r=await a.apigClient.exec(s.apigGroupName,s.apigName,{query:{fn_name:t},body:JSON.stringify(n)});return await(r==null?void 0:r.json())}catch(r){return o.getErrorMessage(r)}}}export{m as H};