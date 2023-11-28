import{d as C,h as b,g as w,o as d,c as _,k as p,I as s,w as i,m as o,a1 as l,F as D,E as S,b as Y,t as B,a as M,n as I,_ as q}from"./framework.8i3UnM_o.js";import{d as N}from"./date.GuA9KFVc.js";import{d as c}from"./dayjs.min.8MX-qMPj.js";import{M as m,X as V,i as y}from"./index.9f4E0PAG.js";import k from"./chevron-left.4rIrsrFt.js";import"./use-maz-dialog-promise.ZO0lFXDa.js";import"./capitalize._xbw7uFu.js";import"./chart.5pFrCHAp.js";import"./zoom-img.QiTFIuJI.js";import"./lazy-img.cLZGbehD.js";import"./inject-strict.fupi6q_q.js";import"./currency.B-QsTd8v.js";import"./getCountries.kmZsAiEY.js";import"./click-outside.IAaUGFJc.js";import"./is-client.C3aFcEjF.js";const E={class:"maz-picker-year-switcher"},F={class:"maz-picker-year-switcher__header"},L={class:"maz-flex maz-space-x-2"},P={class:"maz-picker-year-switcher__main"},T=C({__name:"MazPickerYearSwitcher",props:{color:{type:String,required:!0},locale:{type:String,required:!0},calendarDate:{type:String,required:!0}},emits:["update:calendar-date","close"],setup(n,{emit:z}){const u=n,f=z,t=b(u.calendarDate),v=w(()=>Array.from({length:15},(a,r)=>r-7).map(a=>{const r=c(t.value).get("year"),e=c(t.value).set("year",r+a);return{label:N(e.format(),u.locale,{year:"numeric"}),date:e}})),h=a=>{f("update:calendar-date",c(a).format()),f("close")},x=()=>{t.value=c(t.value).subtract(7,"year").format()},g=()=>{t.value=c(t.value).add(7,"year").format()};return(a,r)=>(d(),_("div",E,[p("div",F,[p("div",L,[s(m,{size:"xs",color:"transparent",type:"button",onClick:l(x,["stop"])},{default:i(()=>[s(o(k),{class:"maz-text-lg"})]),_:1},8,["onClick"]),s(m,{size:"xs",color:"transparent",type:"button",onClick:l(g,["stop"])},{default:i(()=>[s(o(k),{class:"maz-rotate-180 maz-text-lg"})]),_:1},8,["onClick"])]),s(m,{size:"xs",color:"transparent",type:"button",onClick:r[0]||(r[0]=l(e=>a.$emit("close",e),["stop"]))},{default:i(()=>[s(o(V),{class:"maz-text-lg"})]),_:1})]),p("div",P,[(d(!0),_(D,null,S(v.value,e=>(d(),Y(m,{key:e.label,size:"sm",type:"button",class:I({"--is-selected":o(y)(e.date,n.calendarDate,"year")}),color:o(y)(e.date,n.calendarDate,"year")?n.color:"transparent",onClick:l(X=>h(e.date),["stop"])},{default:i(()=>[M(B(e.label),1)]),_:2},1032,["class","color","onClick"]))),128))])]))}}),ae=q(T,[["__scopeId","data-v-13cd7701"]]);export{ae as default};
