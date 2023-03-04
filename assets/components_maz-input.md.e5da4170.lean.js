import{h as g,i as E,r as F,o as c,c as y,a as p,b as t,t as r,e as l,w as C,F as A,g as h,u as v,f as e,j as q}from"./app.27cd127e.js";const V={id:"frontmatter-title",tabindex:"-1"},f=p("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),T=e("",2),I=e("",4),k=e("",3),S=e("",3),x=e("",3),z=e("",3),P=e("",3),w=p("blockquote",null,[p("p",null,"Use your own icons")],-1),M=e("",3),N=e("",3),U=e("",3),B=e("",2),R=p("code",null,"size",-1),L={class:"flex flex-col gap-05"},O=e("",4),W={class:"flex flex-col gap-05"},j=e("",4),H=p("h4",{id:"warning",tabindex:"-1"},[t("Warning "),p("a",{class:"header-anchor",href:"#warning","aria-hidden":"true"},"#")],-1),$=p("h4",{id:"success",tabindex:"-1"},[t("Success "),p("a",{class:"header-anchor",href:"#success","aria-hidden":"true"},"#")],-1),G=e("",3),J=e("",2),Y=JSON.parse('{"title":"MazInput","description":"MazInput is a standalone component that replaces the standard html input text with a beautiful design system. Many options like colors, sizes, disabled, loading, error, warning, valid states, error messages and icons are included.","frontmatter":{"title":"MazInput","description":"MazInput is a standalone component that replaces the standard html input text with a beautiful design system. Many options like colors, sizes, disabled, loading, error, warning, valid states, error messages and icons are included."},"headers":[{"level":2,"title":"Basic usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[{"level":3,"title":"Password","slug":"password","link":"#password","children":[]},{"level":3,"title":"Placeholder","slug":"placeholder","link":"#placeholder","children":[]},{"level":3,"title":"Required","slug":"required","link":"#required","children":[]},{"level":3,"title":"Disabled","slug":"disabled","link":"#disabled","children":[]},{"level":3,"title":"Hint","slug":"hint","link":"#hint","children":[]},{"level":3,"title":"Icons","slug":"icons","link":"#icons","children":[]},{"level":3,"title":"Auto focus","slug":"auto-focus","link":"#auto-focus","children":[]},{"level":3,"title":"No radius","slug":"no-radius","link":"#no-radius","children":[]},{"level":3,"title":"Debounce","slug":"debounce","link":"#debounce","children":[]},{"level":3,"title":"Sizes","slug":"sizes","link":"#sizes","children":[]},{"level":3,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":3,"title":"State","slug":"state","link":"#state","children":[]},{"level":3,"title":"Valid Button","slug":"valid-button","link":"#valid-button","children":[]}]},{"level":2,"title":"Props & Events emitted","slug":"props-events-emitted","link":"#props-events-emitted","children":[]}],"relativePath":"components/maz-input.md","lastUpdated":1677888704000}'),K={name:"components/maz-input.md"},Z=Object.assign(K,{setup(Q){const a=g("value"),_={primary:{name:"primary",hex:"#1e90ff"},secondary:{name:"secondary",hex:"#1cd1a1"},info:{name:"info",hex:"#17a2b8"},success:{name:"success",hex:"#9acd32"},warning:{name:"warning",hex:"#fcb731"},danger:{name:"danger",hex:"#ff6d6a"},white:{name:"white",hex:"#fff"},black:{name:"black",hex:"#000"}},i=["mini","xs","sm","md","lg","xl"],m=E(()=>Object.values(_));return(u,n)=>{const o=F("MazInput",!0),d=F("MazIcon"),b=F("ComponentPropDoc");return c(),y("div",null,[p("h1",V,[t(r(u.$frontmatter.title)+" ",1),f]),p("p",null,r(u.$frontmatter.description),1),T,l(o,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=s=>a.value=s),label:"Label",name:"firstname"},null,8,["modelValue"]),I,l(o,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=s=>a.value=s),label:"Label",type:"password",name:"password"},null,8,["modelValue"]),k,l(o,{placeholder:"placeholder"}),S,l(o,{label:"label required",required:""}),x,l(o,{modelValue:a.value,"onUpdate:modelValue":n[2]||(n[2]=s=>a.value=s),label:"label disabled",disabled:""},null,8,["modelValue"]),z,l(o,{modelValue:a.value,"onUpdate:modelValue":n[3]||(n[3]=s=>a.value=s),label:"label hint",hint:"An error occured",error:""},null,8,["modelValue"]),P,l(o,{modelValue:a.value,"onUpdate:modelValue":n[4]||(n[4]=s=>a.value=s),label:"label icons","left-icon":"cash","right-icon":"user"},null,8,["modelValue"]),w,l(o,{modelValue:a.value,"onUpdate:modelValue":n[5]||(n[5]=s=>a.value=s),label:"label icons"},{"left-icon":C(()=>[l(d,{name:"check"})]),"right-icon":C(()=>[l(d,{name:"user-group"})]),_:1},8,["modelValue"]),M,l(o,{modelValue:a.value,"onUpdate:modelValue":n[6]||(n[6]=s=>a.value=s),label:"label auto-focus"},null,8,["modelValue"]),N,l(o,{modelValue:a.value,"onUpdate:modelValue":n[7]||(n[7]=s=>a.value=s),label:"label no-radius","no-radius":""},null,8,["modelValue"]),U,l(o,{modelValue:a.value,"onUpdate:modelValue":n[8]||(n[8]=s=>a.value=s),label:"label debounce",debounce:"","debounce-delay":3e3},null,8,["modelValue"]),p("p",null,"input value: "+r(a.value??"null"),1),B,p("blockquote",null,[p("p",null,[t("Use the attribute "),R,t(" with a value in "+r(i.join(", ")),1)])]),p("div",L,[(c(),y(A,null,h(i,s=>l(o,{key:s,modelValue:a.value,"onUpdate:modelValue":n[9]||(n[9]=D=>a.value=D),label:["mini","xs"].includes(s)?void 0:s,placeholder:["mini","xs"].includes(s)?s:void 0,size:s},null,8,["modelValue","label","placeholder","size"])),64))]),O,p("div",W,[(c(!0),y(A,null,h(v(m),({name:s})=>(c(),q(o,{key:s,modelValue:a.value,"onUpdate:modelValue":n[10]||(n[10]=D=>a.value=D),label:s,color:s},null,8,["modelValue","label","color"]))),128))]),j,l(o,{modelValue:a.value,"onUpdate:modelValue":n[11]||(n[11]=s=>a.value=s),label:"Label",error:""},null,8,["modelValue"]),H,l(o,{modelValue:a.value,"onUpdate:modelValue":n[12]||(n[12]=s=>a.value=s),label:"Label",warning:""},null,8,["modelValue"]),$,l(o,{modelValue:a.value,"onUpdate:modelValue":n[13]||(n[13]=s=>a.value=s),label:"Label",success:""},null,8,["modelValue"]),G,l(o,{modelValue:a.value,"onUpdate:modelValue":n[14]||(n[14]=s=>a.value=s),label:"Label","valid-button":""},null,8,["modelValue"]),J,l(b,{component:"MazInput"})])}}});export{Y as __pageData,Z as default};
