import{d as g,g as w,o as s,c as d,k as m,I as p,w as u,m as l,a1 as h,F as M,E as v,b as x,t as D,a as S,n as f,_ as B}from"./framework.8i3UnM_o.js";import{d as n}from"./date.GuA9KFVc.js";import{c}from"./capitalize._xbw7uFu.js";import{d as C}from"./dayjs.min.8MX-qMPj.js";import{X as q,M as k,i as b}from"./index.K75bf1Nn.js";import"./use-maz-dialog-promise.pMPG_AA0.js";import"./chart.5pFrCHAp.js";import"./zoom-img.QiTFIuJI.js";import"./lazy-img.cLZGbehD.js";import"./inject-strict.fupi6q_q.js";import"./currency.B-QsTd8v.js";import"./getCountries.kmZsAiEY.js";import"./click-outside.IAaUGFJc.js";const $={class:"maz-picker-month-switcher"},I={class:"maz-picker-month-switcher__header"},N=g({__name:"MazPickerMonthSwitcher",props:{calendarDate:{type:String,required:!0},color:{type:String,required:!0},locale:{type:String,required:!0},double:{type:Boolean,required:!0}},emits:["update:calendar-date","close"],setup(r,{emit:z}){const a=r,i=z,_=w(()=>Array.from({length:12},(o,e)=>e).map(o=>{const e=C(a.calendarDate).set("month",o);return a.double?{label:`${c(n(e.format(),a.locale,{month:"short"}))} - ${c(n(e.add(1,"month").format(),a.locale,{month:"short"}))}`,date:e}:{label:c(n(e.format(),a.locale,{month:"long"})),date:e}})),y=o=>{i("update:calendar-date",o.format()),i("close")};return(o,e)=>(s(),d("div",$,[m("div",I,[p(k,{size:"xs",color:"transparent",type:"button",onClick:e[0]||(e[0]=h(t=>o.$emit("close",t),["stop"]))},{default:u(()=>[p(l(q),{class:"maz-text-lg"})]),_:1})]),m("div",{class:f(["maz-picker-month-switcher__main",{"--has-double":r.double}])},[(s(!0),d(M,null,v(_.value,t=>(s(),x(k,{key:t.label,size:a.double?"sm":"xs",class:f({"--is-selected":l(b)(t.date,r.calendarDate,"month")}),color:l(b)(t.date,r.calendarDate,"month")?r.color:"transparent",type:"button",onClick:h(V=>y(t.date),["stop"])},{default:u(()=>[S(D(t.label),1)]),_:2},1032,["size","class","color","onClick"]))),128))],2)]))}}),Q=B(N,[["__scopeId","data-v-173d1034"]]);export{Q as default};
