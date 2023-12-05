var Ce=Object.defineProperty;var $e=(t,e,n)=>e in t?Ce(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var O=(t,e,n)=>($e(t,typeof e!="symbol"?e+"":e,n),n);import{I as B,aa as se,d as Z,h as m,g,y as he,j as ye,a7 as Te,o as v,c as S,a8 as Ae,ab as Ee,m as z,a1 as C,e as P,k as A,n as ae,a0 as Pe,W as L,X as y,_ as ie,b as R,w as ve,K as Se,t as U,a as De,O as _e,T as He,v as re,ac as Re,ad as Be,ae as Fe,af as Ne,ag as Me,ah as qe,ai as Ve,aj as je,ak as We,al as Xe,u as Ue,z as Ze,am as Ke,an as Ye,ao as Ge,ap as Qe}from"./chunks/framework.8i3UnM_o.js";import{t as Je}from"./chunks/theme.lBBSSxBl.js";import"./chunks/MazToast.vue_vue_type_style_index_1_scoped_773bc2af_lang.w40geAFS.js";import{u as et}from"./chunks/use-timer.VdkySmKe.js";import{s as tt}from"./chunks/sleep.JASjerMi.js";import{i as ke}from"./chunks/use-maz-dialog-promise.LJeOnShD.js";import{c as nt}from"./chunks/index.ZYt3so2t.js";import"./chunks/dayjs.min.8MX-qMPj.js";import"./chunks/date.GuA9KFVc.js";import"./chunks/capitalize._xbw7uFu.js";import"./chunks/chart.nVR4Bvnt.js";import"./chunks/zoom-img.QiTFIuJI.js";import"./chunks/lazy-img.cLZGbehD.js";import"./chunks/inject-strict.fupi6q_q.js";import"./chunks/currency.B-QsTd8v.js";import"./chunks/getCountries.kmZsAiEY.js";import"./chunks/click-outside.IAaUGFJc.js";function xe(t,e){let n=e==null?void 0:e.element;function a(){n&&se(null,n)}const l=B(t,{...e==null?void 0:e.props,...e!=null&&e.addDestroyInProps?{destroy:a}:{}},e==null?void 0:e.children);return e!=null&&e.app?(l.appContext=e.app._context,n?se(l,n):typeof document<"u"&&(n=document.createElement("div"),se(l,n))):(n=n??document.body,se(l,n)),{vNode:l,destroy:a,el:n}}const st=["onClick","onKeypress"],ot={class:"m-fullscreen-img-scroller"},at=["src","alt"],rt=Z({__name:"MazFullscreenImg",props:{src:{},clickedElementBounds:{default:void 0},offset:{default:void 0},animation:{default:()=>({duration:300,easing:"ease-in-out"})},openInstanceClass:{default:"m-fullscreen-img-instance"},clickedElement:{},destroy:{type:Function,default:void 0},alt:{default:void 0},zoom:{type:Boolean,default:!0}},emits:["close","previous","next","before-close"],setup(t,{emit:e}){const n=e,a=L(()=>y(()=>import("./chunks/index.ZYt3so2t.js").then(o=>o.k),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),l=L(()=>y(()=>import("./chunks/index.ZYt3so2t.js").then(o=>o.x),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),b=L(()=>y(()=>import("./chunks/chevron-left.4rIrsrFt.js"),__vite__mapDeps([13,1]))),u=t,d=m(!1),f=m(!1),I=m(!1),E=m(!1),c=m(!1),p=m(u.clickedElement),_=g(()=>u.clickedElement.getBoundingClientRect()),M=g(()=>_.value.height<_.value.width),$=m(u.src),K=m(u.alt),D=m(),k=m(),q=g(()=>c.value?"--is-zoomed maz-cursor-zoom-out":"maz-cursor-zoom-in");function Y(){d.value=!0,f.value=!1,I.value=!0}he(()=>I.value,o=>{o&&me()});function x(){n("before-close"),W()}function G(o){o.key==="Escape"&&(o.preventDefault(),x()),(o.key==="ArrowLeft"||o.key==="ArrowRight")&&(o.preventDefault(),V(o.key==="ArrowRight"?"next":"previous"))}function le(){document.documentElement.classList.add("--m-fullscreen-open")}function ce(){document.documentElement.classList.remove("--m-fullscreen-open")}function Q(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}function ue(o,s){return s<0?o.length-1:s>=o.length?0:s}async function de(o,s){o.classList.remove(u.openInstanceClass),s.classList.add(u.openInstanceClass);const r=s.getAttribute("data-src"),i=s.getAttribute("data-alt");K.value=i,r&&($.value=r),d.value=!1,d.value||(f.value=!0)}function V(o){const s=document.querySelector(`.m-fullscreen-img-instance.${u.openInstanceClass}`);if(s){const r=Q(),i=r.indexOf(s),h=o==="next"?i+1:i-1,w=r[ue(r,h)];p.value=w,w&&de(s,w),n(o),c.value?j(k.value):T()}}function j(o){M.value?(o.style.width=`${window.innerWidth}px`,o.style.removeProperty("height")):(o.style.height=`${window.innerHeight}px`,o.style.removeProperty("width")),o.style.removeProperty("top"),o.style.removeProperty("left")}async function J(){const o=k.value;c.value?(c.value=!c.value,T()):(c.value=!c.value,j(o))}function ee(o){var s;return(s=k.value)==null?void 0:s.animate(o,{duration:u.animation.duration,easing:u.animation.easing})}function H(o=u.offset??0){const s=p.value instanceof HTMLImageElement?p.value.naturalWidth:p.value.clientWidth,r=p.value instanceof HTMLImageElement?p.value.naturalHeight:p.value.clientHeight,i=window.innerWidth,h=window.innerHeight,w=Math.min((i-2*o)/s,(h-2*o)/r),fe=(i-s*w)/2,pe=(h-r*w)/2;return{originalWidth:s,originalHeight:r,scale:w,centerX:fe,centerY:pe}}function te({trigger:o}){const{originalWidth:s,originalHeight:r,scale:i,centerX:h,centerY:w}=H(),{top:fe,left:pe,width:Ie,height:Oe}=_.value,be=[{top:`${fe}px`,left:`${pe}px`,width:`${Ie}px`,height:`${Oe}px`,opacity:0},{top:`${w}px`,left:`${h}px`,width:`${s*i}px`,height:`${r*i}px`,opacity:1}];return{frames:o==="open"?be:be.reverse()}}function T(){const{centerX:o,centerY:s,originalHeight:r,originalWidth:i,scale:h}=H(),w={top:`${s}px`,left:`${o}px`,width:`${i*h}px`,height:`${r*h}px`};if(!k.value)throw console.error("[maz-ui](vFullscreenImg) ImgElement is not defined");Object.assign(k.value.style,w)}function me(){const{frames:o}=te({trigger:"open"}),s=ee(o);if(!s)throw console.error("[maz-ui](vFullscreenImg) open animation is not defined");s.onfinish=()=>{T()}}function W(){const{frames:o}=te({trigger:"close"}),s=ee(o);if(!s)throw console.error("[maz-ui](vFullscreenImg) close animation is not defined");s.onfinish=()=>{var r,i;n("close"),(r=D.value)==null||r.remove(),(i=u.destroy)==null||i.call(u)}}function ne(){c.value||T()}return ye(()=>{f.value=!0,document.addEventListener("keydown",G),window.addEventListener("resize",ne),le(),E.value=Q().length>1}),Te(()=>{document.removeEventListener("keydown",G),window.removeEventListener("resize",ne),ce()}),(o,s)=>(v(),S("div",{ref_key:"FullscreenImgElement",ref:D,role:"button",class:"m-fullscreen-img",tabindex:"0",onClick:C(x,["stop"]),onKeypress:Pe(C(x,["prevent"]),["esc"])},[Ae(B(z(a),{class:"m-fullscreen-img-loader maz-h-16"},null,512),[[Ee,f.value]]),I.value&&E.value?(v(),S("button",{key:0,type:"button",class:"m-fullscreen-btn --next",onClick:s[0]||(s[0]=C(r=>V("next"),["stop"]))},[B(z(b),{class:"maz-rotate-180 maz-text-3xl"})])):P("",!0),I.value&&E.value?(v(),S("button",{key:1,type:"button",class:"m-fullscreen-btn --previous",onClick:s[1]||(s[1]=C(r=>V("previous"),["stop"]))},[B(z(b),{class:"maz-text-3xl"})])):P("",!0),A("button",{type:"button",class:"m-fullscreen-btn --close",onClick:x},[B(z(l),{class:"maz-text-3xl"})]),A("div",ot,[A("img",{ref_key:"ImgElement",ref:k,src:$.value,alt:K.value??void 0,tabindex:"0",class:ae([q.value]),onLoad:Y,onClick:s[2]||(s[2]=C(r=>o.zoom?J():void 0,["stop"]))},null,42,at)])],40,st))}}),it=ie(rt,[["__scopeId","data-v-e5045ebd"]]),we="m-fullscreen-is-open";class lt{constructor(){O(this,"options");O(this,"defaultOptions",{scaleOnHover:!1,blurOnHover:!1,disabled:!1,zoom:!0,offset:80,animation:{duration:300,easing:"ease-in-out"}});O(this,"mouseEnterListener");O(this,"mouseLeaveListener");O(this,"renderPreviewListener")}buildOptions(e,n){const a=typeof n.value=="object"?n.value:{src:n.value,alt:void 0},l=(a==null?void 0:a.src)??this.getImgSrc(e),b=(a==null?void 0:a.alt)??this.getImgAlt(e);return{...this.defaultOptions,...a,src:l,alt:b}}get allInstances(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}getImgSrc(e){var a;const n=((a=this.options)==null?void 0:a.src)||e.getAttribute("src")||e.getAttribute("data-src");if(!n)throw new Error('[maz-ui](fullscreen-img) src of image must be provided by `v-fullscreen=""`, `v-fullscreen="{ src: "" }"`, `src=""` or `data-src=""` atributes');return n}getImgAlt(e){var n;return((n=this.options)==null?void 0:n.alt)||e.getAttribute("alt")||e.getAttribute("data-alt")}create(e,n){if(this.options=this.buildOptions(e,n),this.options.disabled)return;e.style.cursor="move",(this.options.scaleOnHover||this.options.blurOnHover)&&(e.style.transition="all 300ms ease-in-out"),e.classList.add("m-fullscreen-img-instance"),e.setAttribute("data-src",this.getImgSrc(e));const a=this.getImgAlt(e);a&&e.setAttribute("data-alt",a),this.mouseEnterListener=()=>this.mouseEnter(e),this.mouseLeaveListener=()=>this.mouseLeave(e),this.renderPreviewListener=()=>this.renderPreview(e),e.addEventListener("mouseenter",this.mouseEnterListener),e.addEventListener("mouseleave",this.mouseLeaveListener),e.addEventListener("click",this.renderPreviewListener)}update(e,n){this.options=this.buildOptions(e,n)}remove(e){e.removeEventListener("mouseenter",this.mouseEnterListener),e.removeEventListener("mouseleave",this.mouseLeaveListener),e.removeEventListener("click",this.renderPreviewListener),e.classList.remove("m-fullscreen-img-instance"),e.style.cursor=""}renderPreview(e){return e.classList.add(we),xe(it,{props:{...this.options,openInstanceClass:we,clickedElement:e,clickedElementBounds:e.getBoundingClientRect()},addDestroyInProps:!0})}mouseLeave(e){this.options.scaleOnHover&&(e.style.transform=""),this.options.blurOnHover&&(e.style.filter=""),e.style.zIndex=""}mouseEnter(e){e.style.zIndex="1",this.options.scaleOnHover&&(e.style.transform="scale(1.03)"),this.options.blurOnHover&&(e.style.filter="blur(3px)")}}let oe;const ct={mounted(t,e){return oe=new lt,oe.create(t,e)},updated(t,e){return oe.update(t,e)},unmounted(t){return oe.remove(t)}},ut={install(t){t.directive("fullscreen-img",ct)}},dt={class:"m-toast__message-wrapper"},mt={class:"m-toast__message"},ft={class:"maz-flex maz-items-center maz-gap-2"},pt={key:0},vt={class:"progress-bar maz-absolute maz-inset-x-0 maz-bottom-0 maz-h-1"},gt=Z({__name:"MazToast",props:{position:{type:String,default:"bottom-right"},maxToasts:{type:[Number,Boolean],default:!1},timeout:{type:Number,default:1e4},queue:{type:Boolean,default:!1},noPauseOnHover:{type:Boolean,default:!1},type:{type:String,default:"info"},message:{type:String,required:!0},link:{type:Object,default:void 0},action:{type:Object,default:void 0},persistent:{type:Boolean,default:!1}},emits:["close","click","open"],setup(t,{emit:e}){const n=L(()=>y(()=>import("./chunks/index.ZYt3so2t.js").then(s=>s.j),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),a=L(()=>y(()=>import("./chunks/index.ZYt3so2t.js").then(s=>s.x),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),l=L(()=>y(()=>import("./chunks/arrow-top-right-on-square.dH7Wwbjf.js"),__vite__mapDeps([14,1]))),b=L(()=>y(()=>import("./chunks/exclamation-triangle.nckbGxMx.js"),__vite__mapDeps([15,1]))),u=L(()=>y(()=>import("./chunks/exclamation-circle.kGGWVxqo.js"),__vite__mapDeps([16,1]))),d=L(()=>y(()=>import("./chunks/information-circle.Rv5_zsf-.js"),__vite__mapDeps([17,1]))),f=L(()=>y(()=>import("./chunks/check-circle.G-m1CRMD.js"),__vite__mapDeps([18,1]))),I=L(()=>y(()=>import("./chunks/link.fqhkm-Ik.js"),__vite__mapDeps([19,1]))),E=m(),c=t,p=g(()=>{switch(c.type){case"danger":return b;case"info":return d;case"success":return f;case"warning":return u;default:return}}),_=e,M=g(()=>c.position.includes("top")?"top":"bottom"),$=g(()=>c.position.includes("left")?"left":c.position.includes("right")?"right":"center"),K=g(()=>$.value!=="center"?$.value==="right"?"m-slide-right":"m-slide-left":M.value==="top"?"m-slide-top":"m-slide-bottom"),D=m(!1),k=m(!1),q=m(),Y=`m-toast-container --${M.value} --${$.value}`,x=`.${Y.replaceAll(" ",".")}`,{start:G,stop:le,pause:ce,resume:Q,remainingTime:ue}=et({callback:W,timeout:c.timeout});function de(){const s=document.querySelector(x);if(!s&&!s){const r=document.body,i=document.createElement("div");i.className=Y,r.append(i)}}function V(){const s=document.querySelector(x);return!c.queue&&c.maxToasts===!1?!1:typeof c.maxToasts=="number"&&s?c.maxToasts<=s.childElementCount:s&&s.childElementCount>0}function j(){if(V()){q.value=setTimeout(j,250);return}const s=document.querySelector(x);E.value&&s&&s.prepend(E.value),k.value=!0,G()}const J=m("100%");function ee(){switch(c.type){case"danger":return"maz-bg-danger-700";case"info":return"maz-bg-info-700";case"success":return"maz-bg-success-700";case"warning":return"maz-bg-warning-700";default:return"maz-bg-secondary"}}he(()=>ue.value,s=>{if(typeof s=="number"){const r=100*s/c.timeout;J.value=`${r}%`,s<=0&&W()}});function H(s){_("click",s),c.persistent||W()}async function te(s,r){var i;D.value=!0,await s(),D.value=!1,(i=c.action)!=null&&i.closeToast&&H(r)}function T(s){c.noPauseOnHover||(s?ce():Q())}function me(){le(),q.value&&clearTimeout(q.value)}function W(){me(),k.value=!1}function ne(){_("open")}function o(){var r;_("close"),(r=E.value)==null||r.remove();const s=document.querySelector(x);s&&!(s!=null&&s.hasChildNodes())&&s.remove()}return ye(()=>{de(),j()}),(s,r)=>(v(),R(He,{name:K.value,onAfterLeave:o,onAfterEnter:ne},{default:ve(()=>[Ae(A("button",{ref_key:"Toaster",ref:E,class:ae(["m-toast",[`--${t.type}`,`--${M.value}`,`--${$.value}`,{"maz-pb-1":t.timeout}]]),role:"alert",onMouseover:r[2]||(r[2]=i=>T(!0)),onMouseleave:r[3]||(r[3]=i=>T(!1)),onClick:r[4]||(r[4]=C(i=>{var h;return t.link&&!((h=t.link)!=null&&h.closeToast)?void 0:H(i)},["stop"]))},[p.value?(v(),R(Se(p.value),{key:0,class:"maz-text-2xl"})):P("",!0),A("div",dt,[A("p",mt,U(t.message),1)]),t.action?(v(),R(z(n),{key:1,"data-test":"action-btn",color:t.type,pastel:"",loading:D.value,size:"sm",onClick:r[0]||(r[0]=C(i=>te(t.action.func,i),["stop"]))},{default:ve(()=>[De(U(t.action.text),1)]),_:1},8,["color","loading"])):P("",!0),t.link?(v(),R(z(n),{key:2,"data-test":"link-btn",color:t.type,pastel:"",size:"xs",href:t.link.href,target:t.link.target??"_self"},{default:ve(()=>{var i;return[A("div",ft,[t.link.text?(v(),S("span",pt,U(t.link.text),1)):P("",!0),((i=t.link)==null?void 0:i.target)=="_blank"?(v(),R(z(l),{key:1,class:"maz-text-xl"})):(v(),R(z(I),{key:2,class:"maz-text-xl"}))])]}),_:1},8,["color","href","target"])):P("",!0),t.persistent?P("",!0):(v(),S("button",{key:3,class:"--close",onClick:r[1]||(r[1]=C(i=>H(i),["stop"]))},[B(z(a),{class:"--icon maz-text-xl"})])),A("div",vt,[A("div",{style:_e({width:J.value}),class:ae(["maz-h-full maz-transition-all maz-duration-200 maz-ease-linear",ee()])},null,6)])],34),[[Ee,k.value]])]),_:1},8,["name"]))}}),ht=ie(gt,[["__scopeId","data-v-773bc2af"]]),yt={position:"bottom-right",timeout:1e4,persistent:!1};class bt{constructor(e,n){this.app=e,this.globalOptions=n}show(e,n){const a={message:e,...n},l={...yt,...a,...this.globalOptions,...n};xe(ht,{props:l,app:this.app})}getLocalOptions(e,n){return{type:e,...n}}message(e,n){return this.show(e,this.getLocalOptions("theme",n))}success(e,n){return this.show(e,this.getLocalOptions("success",n))}error(e,n){return this.show(e,this.getLocalOptions("danger",n))}info(e,n){return this.show(e,this.getLocalOptions("info",n))}warning(e,n){return this.show(e,this.getLocalOptions("warning",n))}}let Le;const wt={install(t,e){Le=new bt(t,e),t.provide("toast",Le)}},F="",Lt=t=>t.filter((e,n,a)=>n===a.indexOf(e)),At=t=>(e=F)=>typeof e=="function"?t.findIndex((...n)=>e(...n))>-1:t.includes(e),Et=t=>t.length>0,_t=t=>(e=F)=>Lt([...t,e]),kt=t=>(e=F)=>t.filter(n=>n!==e);class xt{constructor(){O(this,"_loaders",m([]))}get loaders(){return g(()=>this._loaders.value)}stop(e=F){this._loaders.value=kt(this._loaders.value)(e)}start(e=F){return this._loaders.value=_t(this._loaders.value)(e),()=>this.stop(e)}get anyLoading(){return g(()=>Et(this._loaders.value))}isLoading(e=F){return g(()=>At(this._loaders.value)(e)).value}}const zt=new xt,It={install:t=>{t.provide("wait",zt)}},ge={delay:100,observer:{root:void 0,rootMargin:"0px",threshold:.2},animation:{once:!0,duration:300,delay:0}};class Ot{constructor(e){O(this,"options");this.options={delay:(e==null?void 0:e.delay)??ge.delay,observer:{...ge.observer,...e==null?void 0:e.observer},animation:{...ge.animation,...e==null?void 0:e.animation}}}handleIntersect(e,n){for(const a of e){const b=a.target.getAttribute("data-maz-aos-children")==="true",u=a.target.getAttribute("data-maz-aos")?[a.target]:[];if(b){const d=[...document.querySelectorAll("[data-maz-aos-anchor]")].map(f=>f.getAttribute("data-maz-aos-anchor")===`#${a.target.id}`?f:void 0);for(const f of d)f&&u.push(f)}for(const d of u){const f=d.getAttribute("data-maz-aos-once"),I=typeof f=="string"?f==="true":this.options.animation.once;if(typeof this.options.observer.threshold=="number"&&a.intersectionRatio>this.options.observer.threshold){const E=d.getAttribute("data-maz-aos-duration"),c=d.getAttribute("data-maz-aos-delay");if(E||(d.style.transitionDuration=`${this.options.animation.duration}ms`,setTimeout(()=>{d.style.transitionDuration="0"},1e3)),c||(d.style.transitionDelay=`${this.options.animation.delay}ms`,setTimeout(()=>{d.style.transitionDelay="0"},1e3)),d.classList.add("maz-aos-animate"),I){const p=d.getAttribute("data-maz-aos-anchor");if(p){const _=document.querySelector(p);_&&n.unobserve(_)}n.unobserve(d)}}else d.classList.remove("maz-aos-animate")}}}async handleObserver(){await tt(this.options.delay);const e=new IntersectionObserver(this.handleIntersect.bind(this),{...this.options.observer});for(const n of document.querySelectorAll("[data-maz-aos]")){const a=n.getAttribute("data-maz-aos-anchor");if(a){const l=document.querySelector(a);l?(l.setAttribute("data-maz-aos-children","true"),e.observe(l)):console.warn(`[maz-ui](aos) no element found with selector "${a}"`)}else e.observe(n)}}runAnimations(){if(ke())return this.handleObserver();console.warn("[MazAos](runAnimations) should be executed on client side")}}let X;const Ct={install:(t,e)=>{X=new Ot(e),t.provide("aos",X),ke()&&(e!=null&&e.router?e.router.afterEach(async()=>{X.runAnimations()}):X.runAnimations())}},$t=t=>{if(window.dataLayer&&window.gtag)return;const e=document.createElement("script");e.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,e.async=!0,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",t)},Tt=({id:t})=>{t&&typeof window<"u"&&$t(t)},Pt=Z({__name:"ColorContainer",props:{color:{type:String,required:!0},hex:{type:String,required:!0}},setup(t){return(e,n)=>(v(),S("div",{class:ae(["color-container rounded",[`--${t.color}`]]),style:_e(`background-color: var(--maz-color-${t.color}); color: var(--maz-color-${t.color}-contrast);`)},[A("span",null,U(t.color)+": "+U(t.hex),1)],6))}}),St=ie(Pt,[["__scopeId","data-v-4f2137d5"]]),Dt=["href","title"],Ht=["src","alt"],Rt=Z({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,default:"latest"}},setup(t){const e=t,n=g(()=>`https://www.npmjs.com/package/${e.package}`),a=g(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),l=g(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(a.value)}`);return(b,u)=>(v(),S("a",{class:"npm-badge",href:n.value,title:t.package,target:"_blank",rel:"noopener noreferrer"},[A("img",{src:l.value,alt:t.package},null,8,Ht)],8,Dt))}}),Bt=ie(Rt,[["__scopeId","data-v-fbd6ca08"]]),Ft={...Je,enhanceApp(t){Tt({id:"G-EM35TM23ZC"});const{app:e,router:{route:n}}=t;e.provide("mazIconPath","/maz-ui-3/icons"),e.component("ColorContainer",St),e.component("NpmBadge",Bt),Object.entries(nt).forEach(([b,u])=>{e.component(b,u)});const a={persistent:!1,position:"bottom-right",timeout:1e4},l={delay:500,animation:{duration:400,once:!1,delay:0}};e.use(wt,a),e.use(It),e.use(Ct,l),e.use(ut),he(()=>n.path,()=>{re&&X.runAnimations()})}};function ze(t){if(t.extends){const e=ze(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const N=ze(Ft),Nt=Z({name:"VitePressApp",setup(){const{site:t}=Ue();return ye(()=>{Ze(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&Ke(),Ye(),Ge(),N.setup&&N.setup(),()=>Qe(N.Layout)}});async function Mt(){const t=Vt(),e=qt();e.provide(Be,t);const n=Fe(t.route);return e.provide(Ne,n),e.component("Content",Me),e.component("ClientOnly",qe),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),N.enhanceApp&&await N.enhanceApp({app:e,router:t,siteData:Ve}),{app:e,router:t,data:n}}function qt(){return je(Nt)}function Vt(){let t=re,e;return We(n=>{let a=Xe(n),l=null;return a&&(t&&(e=a),(t||e===a)&&(a=a.replace(/\.js$/,".lean.js")),l=y(()=>import(a),__vite__mapDeps([]))),re&&(t=!1),l},N.NotFound)}re&&Mt().then(({app:t,router:e,data:n})=>{e.go().then(()=>{Re(e.route,n.site),t.mount("#app")})});export{Mt as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/index.ZYt3so2t.js","assets/chunks/framework.8i3UnM_o.js","assets/chunks/use-maz-dialog-promise.LJeOnShD.js","assets/chunks/dayjs.min.8MX-qMPj.js","assets/chunks/date.GuA9KFVc.js","assets/chunks/capitalize._xbw7uFu.js","assets/chunks/chart.nVR4Bvnt.js","assets/chunks/zoom-img.QiTFIuJI.js","assets/chunks/lazy-img.cLZGbehD.js","assets/chunks/inject-strict.fupi6q_q.js","assets/chunks/currency.B-QsTd8v.js","assets/chunks/getCountries.kmZsAiEY.js","assets/chunks/click-outside.IAaUGFJc.js","assets/chunks/chevron-left.4rIrsrFt.js","assets/chunks/arrow-top-right-on-square.dH7Wwbjf.js","assets/chunks/exclamation-triangle.nckbGxMx.js","assets/chunks/exclamation-circle.kGGWVxqo.js","assets/chunks/information-circle.Rv5_zsf-.js","assets/chunks/check-circle.G-m1CRMD.js","assets/chunks/link.fqhkm-Ik.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}