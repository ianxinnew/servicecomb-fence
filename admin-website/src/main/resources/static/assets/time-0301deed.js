function o(e){let t=new Date(e);return`${t.getFullYear()}-${t.getMonth()+1}-${t.getDate()}`}function u(e){return function(t,n){let r=t[e],s=n[e];return new Date(JSON.parse(JSON.stringify(s))).getTime()-new Date(JSON.parse(JSON.stringify(r))).getTime()}}function c(e){const t=new Date(e),n=t.getFullYear(),r=String(t.getMonth()+1),s=String(t.getDate()),a=String(t.getHours()),g=String(t.getMinutes()),i=String(t.getSeconds());return`${n}-${r}-${s} ${Number(a)<10?`0${a}`:a}:${Number(g)<10?`0${g}`:g}:${Number(i)<10?`0${i}`:i}`}export{o as g,u as s,c as t};
