import{f as K,O as M,d as n,h as P,z as _,_ as d,w as y,p as S,W as w,q as g,e as b,y as x,S as Q,T as F,I as G,Q as J,a0 as R,a as U}from"./framework.8c9df1bc.js";import{f as T,s as X,M as Y}from"./index.29374195.js";import{d as i}from"./dayjs.min.04d70162.js";import"./chart.705aa2e5.js";import"./use-maz-dialog-promise.98d0469f.js";import"./zoom-img.f640e524.js";import"./lazy-img.23dc9e9d.js";import"./inject-strict.0648f9e9.js";import"./currency.a4106e0e.js";import"./click-outside.d8e7bfa6.js";import"./date.0d08a58e.js";import"./capitalize.43002998.js";const Z={class:"m-picker-time__column__items"},E=K({__name:"MazPickerTime",props:{modelValue:{type:[String,Object],default:void 0},calendarDate:{type:String,required:!0},formatterOptions:{type:Object,required:!0},locale:{type:String,required:!0},color:{type:String,required:!0},isOpen:{type:Boolean,required:!0},hasDate:{type:Boolean,required:!0},minuteInterval:{type:Number,required:!0},disabledHours:{type:Array,default:void 0},format:{type:String,required:!0},isHour12:{type:Boolean,required:!0},minDate:{type:String,default:void 0},maxDate:{type:String,default:void 0},disabled:{type:Boolean,required:!0}},emits:["update:model-value"],setup(p,{emit:$}){const s=p,B=e=>{if(!s.disabledHours)return e;const t=Array.from({length:24},(a,o)=>o).filter(a=>{var o;return!((o=s.disabledHours)!=null&&o.includes(a))}),r=T(t,e);return r!==e&&q("hour",i(u.value).set("hour",r)),r},z=$,l=M(),m=M(),v=n(()=>typeof u.value=="string"?B(i(u.value).get("hour")):void 0),A=n(()=>typeof u.value=="string"?T(H.value.map(({value:e})=>e.get("minute")),i(u.value).get("minute")):void 0),I=e=>{if(s.isHour12){const r=h.value==="pm"?e+12:e;return r===12?0:r===24?12:r}else return e},O=n(()=>Array.from({length:s.isHour12?12:24},(e,t)=>t).map(e=>{const t=e+(s.isHour12?1:0),r=I(t),a=i(u.value).set("hour",r),o=C(r)||(s.minDate&&u.value?i(s.minDate).isAfter(a,"hour"):!1)||(s.maxDate&&u.value?i(s.maxDate).isBefore(a,"hour"):!1);return{label:`${t<10?"0":""}${t}`,value:i(u.value).set("hour",r),isDisabled:o}})),H=n(()=>{const e=Math.floor(60/s.minuteInterval)-0;return Array.from({length:e},(t,r)=>r*s.minuteInterval).map(t=>{const r=i(u.value).set("minute",t),a=(s.minDate&&u.value?i(s.minDate).isAfter(r,"minute"):!1)||(s.maxDate&&u.value?i(s.maxDate).isBefore(r,"minute"):!1);return{label:`${t<10?"0":""}${t}`,value:r,isDisabled:a}})}),h=n(()=>typeof v.value=="number"?v.value>=12?"pm":"am":void 0),j=n(()=>s.isHour12?[{label:"AM",value:"am"},{label:"PM",value:"pm"}]:[]),N=n(()=>{const e=[{identifier:"hour",values:O.value},{identifier:"minute",values:H.value}];return s.isHour12&&e.push({identifier:"ampm",values:j.value}),e}),u=n({get:()=>s.modelValue,set:e=>{z("update:model-value",e)}});P(()=>s.isOpen,async e=>{var t;if(e){if(await _(),l.value){const r=l.value.querySelector(".m-picker-time__column .m-btn"),a=r==null?void 0:r.offsetHeight,c=((t=l.value)==null?void 0:t.offsetHeight)/2-a/2;m.value=c/16}k(!1)}},{immediate:!0}),P(()=>s.modelValue,async(e,t)=>{e!==t&&(await _(),k(!0))},{immediate:!0});const k=e=>{f("hour",e),f("minute",e),s.isHour12&&f("ampm",e)},C=e=>(s.disabledHours&&s.disabledHours.includes(e))??!1,D=(e,t)=>t==="am"||t==="pm"?h.value===t:e==="hour"?v.value===t.get(e):e==="minute"?A.value===t.get(e):!1,f=async(e,t=!0)=>{if(l.value){const r=l.value.querySelector(`.m-picker-time__column__${e}`),a=l.value.querySelector(`.m-picker-time__column__${e} .--is-selected`);m.value&&r&&a&&l.value&&(await _(),X(r,a,m.value*16,t))}},q=async(e,t)=>{const r=i(u.value);if(e==="hour"&&typeof t=="object"&&(u.value=r.set("hour",t.get("hour")).format()),e==="minute"&&typeof t=="object"){const a=r.set("minute",t.get("minute"));u.value=a.format()}if(e==="ampm"&&(h.value!==t||!v.value)&&(t==="am"&&(u.value=r.set("hour",r.get("hour")).subtract(12,"hour").format()),t==="pm")){const a=r.get("hour"),o=a+12>12&&a+12<24?a+12:a===0?12:a;u.value=r.set("hour",o).format()}await _(),f(e)};return(e,t)=>(d(),y("div",{ref_key:"MazPickerTime",ref:l,class:g(["m-picker-time",{"--has-date":p.hasDate}])},[(d(!0),y(S,null,w(N.value,({values:r,identifier:a},o)=>(d(),y("div",{key:o,class:g(["m-picker-time__column",[`m-picker-time__column__${a}`]])},[b("div",{style:x({height:`${m.value}rem`}),class:"m-picker-time__column__divider"},null,4),b("div",Z,[(d(!0),y(S,null,w(r,({value:c,label:V,isDisabled:W},L)=>(d(),Q(Y,{key:L,size:"xs",color:D(a,c)?p.color:"transparent",class:g({"--is-selected":D(a,c)}),disabled:W||p.disabled,type:"button",onClick:R(ee=>q(a,c),["stop"])},{default:F(()=>[G(J(V),1)]),_:2},1032,["color","class","disabled","onClick"]))),128))]),b("div",{style:x({height:`${m.value}rem`}),class:"m-picker-time__column__divider"},null,4)],2))),128))],2))}});const pe=U(E,[["__scopeId","data-v-463999ca"]]);export{pe as default};
