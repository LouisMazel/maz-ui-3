import{h as v}from"./framework.e7ad9e79.js";const a=v(),t=v([]),n=(e,_)=>new Promise((s,i)=>{t.value=[...t.value,{id:e,isActive:!0,resolve:async()=>{await(_==null?void 0:_()),s(!0)},reject:i}]}),o=e=>(t.value=t.value.filter(({id:_})=>_!==e),t.value),d=(e,_=!1)=>{var s;e&&((s=e.reject)==null||s.call(e,_),e.isActive=!1,setTimeout(()=>{o(e.id)},500))},p=(e,_=!0)=>{var s;e&&((s=e.resolve)==null||s.call(e,_),e.isActive=!1,setTimeout(()=>{o(e.id)},500))},u=()=>({confirmDialogData:a,dialogState:t,showDialogAndWaitChoice:n,removeDialogFromState:o,rejectDialog:d,resolveDialog:p});export{u};
