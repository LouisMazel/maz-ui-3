import{h,g as f,j as V}from"./framework.8i3UnM_o.js";function g(){return typeof document<"u"}const T={darkClass:"dark",lightClass:"light",storageThemeKey:"theme",storageThemeValueDark:"dark",storageThemeValueLight:"light",storageThemeValueSystem:"system"},m=h("system"),l=h("system");function u({darkClass:e,lightClass:t,storageThemeKey:s,storageThemeValueDark:a,setLocalStorageValue:o=!0,setSelectedTheme:n=!0}){g()&&(document.documentElement.classList.remove(t),document.documentElement.classList.add(e),m.value=a,n&&(l.value=a),o&&(localStorage[s]=a))}function c({darkClass:e,lightClass:t,storageThemeKey:s,storageThemeValueLight:a,setLocalStorageValue:o=!0,setSelectedTheme:n=!0}){g()&&(document.documentElement.classList.remove(e),document.documentElement.classList.add(t),m.value=a,n&&(l.value=a),o&&(localStorage[s]=a))}function v(e){g()&&(document.documentElement.classList.remove(e.darkClass),document.documentElement.classList.remove(e.lightClass),m.value=e.storageThemeValueSystem,l.value=e.storageThemeValueSystem,e.setLocalStorageValue&&(localStorage[e.storageThemeKey]=e.storageThemeValueSystem),y({...e,setSelectedTheme:!1}))}function d(){return window.matchMedia("(prefers-color-scheme: dark)").matches}function y(e){g()&&(e.onlyLocalStorage?localStorage[e.storageThemeKey]===e.storageThemeValueDark?u({...e,setLocalStorageValue:!1,setSelectedTheme:!1}):localStorage[e.storageThemeKey]===e.storageThemeValueLight&&c({...e,setLocalStorageValue:!1,setSelectedTheme:!1}):localStorage[e.storageThemeKey]===e.storageThemeValueDark||!(e.storageThemeKey in localStorage)&&d()||localStorage[e.storageThemeKey]===e.storageThemeValueSystem&&d()?u({...e,setLocalStorageValue:!1,setSelectedTheme:!1}):c({...e,setLocalStorageValue:!1,setSelectedTheme:!1}))}function i({shouldSetDarkMode:e,...t}){return typeof e!="boolean"?v(t):e?u(t):c(t)}function D(e){return m.value===e.storageThemeValueDark?c(e):u(e)}function C(e=T){const t={...T,...e},s=f(()=>l.value===t.storageThemeValueDark),a=f(()=>l.value===t.storageThemeValueLight),o=f(()=>l.value===t.storageThemeValueSystem);return V(()=>{localStorage[t.storageThemeKey]&&(m.value=localStorage[t.storageThemeKey],l.value=localStorage[t.storageThemeKey])}),{autoSetTheme:()=>y(t),toggleTheme:()=>D(t),setSystemTheme:()=>v({...t,setLocalStorageValue:!0}),setDarkTheme:()=>i({...t,shouldSetDarkMode:!0}),setLightTheme:()=>i({...t,shouldSetDarkMode:!1}),hasDarkTheme:s,hasLightTheme:a,hasSystemTheme:o,theme:m,selectedTheme:l}}const K=h(),r=h([]),k=(e,t)=>new Promise((s,a)=>{r.value=[...r.value,{id:e,isActive:!0,resolve:async()=>{await(t==null?void 0:t()),s(!0)},reject:a}]}),L=e=>(r.value=r.value.filter(({id:t})=>t!==e),r.value),S=(e,t,s=!1)=>{var a;t&&((a=t[e])==null||a.call(t,s),t.isActive=!1,setTimeout(()=>{L(t.id)},500))},w=()=>({confirmDialogData:K,dialogState:r,showDialogAndWaitChoice:k,removeDialogFromState:L,rejectDialog:(e,t=!1)=>S("reject",e,t),resolveDialog:(e,t=!1)=>S("resolve",e,t)});export{w as a,g as i,C as u};
