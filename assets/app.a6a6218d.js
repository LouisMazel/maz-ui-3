var Le=Object.defineProperty;var $e=(n,e,t)=>e in n?Le(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var g=(n,e,t)=>($e(n,typeof e!="symbol"?e+"":e,t),t);import{t as x,a8 as V,u as N,Q as U,S as C,a4 as Ie,d as m,r as y,A as se,G as ke,a5 as xe,v as z,b as T,a6 as J,a9 as ee,N as H,a0 as W,B as te,F as I,O as ue,a as G,$ as ce,Y as ze,_ as Y,C as Oe,X as ne,D as Ce,q as Te,I as X,aa as Pe,c as Se,H as Be,ab as De,ac as He,ad as qe,ae as Fe,af as Ne,ag as Re,ah as Me,ai as je,aj as Ve,ak as We,al as Ze,am as Ue,an as Ge}from"./chunks/framework.7d402be1.js";import{t as Xe}from"./chunks/theme.5f1ad378.js";import{s as q}from"./chunks/sleep.549b969e.js";import"./chunks/MazToast.vue_vue_type_style_index_1_scoped_a00d34e7_lang.4ed993c7.js";import{i as me}from"./chunks/is-client.34d16609.js";import"./chunks/use-maz-dialog-promise.80ff3eb2.js";import{c as Ye}from"./chunks/index.52cf65c6.js";import"./chunks/chart.705aa2e5.js";import"./chunks/zoom-img.f640e524.js";import"./chunks/lazy-img.6c368c1f.js";import"./chunks/inject-strict.0eac4f5c.js";import"./chunks/currency.a4106e0e.js";import"./chunks/dayjs.min.04d70162.js";import"./chunks/click-outside.3366ad3a.js";import"./chunks/date.0d08a58e.js";import"./chunks/capitalize.43002998.js";function de(n,e){let t=e==null?void 0:e.element;function a(){t&&V(null,t)}const i=x(n,{...e==null?void 0:e.props,...e!=null&&e.addDestroyInProps?{destroy:a}:{}},e==null?void 0:e.children);return e!=null&&e.app?(i.appContext=e.app._context,t?V(i,t):typeof document<"u"&&(t=document.createElement("div"),V(i,t))):(t=t??document.body,V(i,t)),{vNode:i,destroy:a,el:t}}const Ke=["onClick","onKeypress"],Qe={class:"m-fullscreen-img-scroller"},Je=["src","alt"],et=N({__name:"MazFullscreenImg",props:{destroy:{type:Function,default:void 0},src:{},alt:{default:void 0},openInstanceClass:{},zoom:{type:Boolean,default:!0},disabled:{type:Boolean},clickedElementBounds:{},clickedElement:{},animated:{type:Boolean,default:!0},scaleAnimation:{type:Boolean}},emits:["close","previous","next","before-close"],setup(n,{emit:e}){const t=n,a=U(()=>C(()=>import("./chunks/index.52cf65c6.js").then(r=>r.j),["assets/chunks/index.52cf65c6.js","assets/chunks/framework.7d402be1.js","assets/chunks/chart.705aa2e5.js","assets/chunks/use-maz-dialog-promise.80ff3eb2.js","assets/chunks/zoom-img.f640e524.js","assets/chunks/lazy-img.6c368c1f.js","assets/chunks/inject-strict.0eac4f5c.js","assets/chunks/currency.a4106e0e.js","assets/chunks/dayjs.min.04d70162.js","assets/chunks/click-outside.3366ad3a.js","assets/chunks/date.0d08a58e.js","assets/chunks/capitalize.43002998.js"])),i=U(()=>C(()=>import("./chunks/index.52cf65c6.js").then(r=>r.x),["assets/chunks/index.52cf65c6.js","assets/chunks/framework.7d402be1.js","assets/chunks/chart.705aa2e5.js","assets/chunks/use-maz-dialog-promise.80ff3eb2.js","assets/chunks/zoom-img.f640e524.js","assets/chunks/lazy-img.6c368c1f.js","assets/chunks/inject-strict.0eac4f5c.js","assets/chunks/currency.a4106e0e.js","assets/chunks/dayjs.min.04d70162.js","assets/chunks/click-outside.3366ad3a.js","assets/chunks/date.0d08a58e.js","assets/chunks/capitalize.43002998.js"])),p=U(()=>C(()=>import("./chunks/chevron-left.c739d17d.js"),["assets/chunks/chevron-left.c739d17d.js","assets/chunks/framework.7d402be1.js"]));let f;Ie(async()=>{f=await C(()=>import("./chunks/vue-scrollto.0211f1f4.js").then(r=>r.v),["assets/chunks/vue-scrollto.0211f1f4.js","assets/chunks/dayjs.min.04d70162.js"])});const c=m(!1),d=m(!1),h=m(!1),w=m(!1),_=m(!1),b=m(!1),O=m(!1),R=m(t.clickedElement instanceof HTMLImageElement),B=m(t.src),M=m(t.alt),D=m(),o=m(),A=y(()=>R.value&&t.animated&&!t.scaleAnimation),l=y(()=>(R.value||!t.animated)&&!t.scaleAnimation),v=m(!1),E=y(()=>b.value?`--is-zoomed maz-cursor-zoom-in maz-max-w-[none] ${v.value?"maz-h-screen maz-w-auto":"maz-h-auto maz-w-screen"}`:`cursor-zoom-out ${v.value?"maz-w-screen maz-h-screen --is-landscape":"maz-h-screen maz-w-auto"}`);function pe(){d.value=!0,h.value=!1,w.value=!0}function j(){e("before-close"),c.value=!1}function ae(r){r.key==="Escape"&&(r.preventDefault(),j()),(r.key==="ArrowLeft"||r.key==="ArrowRight")&&(r.preventDefault(),K(r.key==="ArrowRight"))}function fe(){document.documentElement.classList.add("--m-fullscreen-open")}function he(){document.documentElement.classList.remove("--m-fullscreen-open")}function oe(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}function ge(r,s){return s<0?r.length-1:s>=r.length?0:s}async function ye(r,s){r.classList.remove(t.openInstanceClass),s.classList.add(t.openInstanceClass);const u=s.getAttribute("data-src"),L=s.getAttribute("data-alt");M.value=L??void 0,u&&(B.value=u),d.value=!1,await q(300),d.value||(h.value=!0)}function K(r){const s=document.querySelector(`.m-fullscreen-img-instance.${t.openInstanceClass}`);if(s){const u=oe(),L=u.indexOf(s),k=r?L+1:L-1,$=u[ge(u,k)];$&&ye(s,$),e(r?"next":"previous")}}async function we(r){const s=r.target;s.style.width=`${s.clientWidth}px`,s.style.height=`${s.clientHeight}px`,await q(0),b.value=!b.value,s.style.removeProperty("width"),s.style.removeProperty("height"),await q(0);const u=s.clientWidth/r.clientY,k=window.innerWidth/u-window.innerHeight/2;f.scrollTo(s,200,{container:s.parentElement,easing:"linear",offset:b.value?k:0})}se(async()=>{await ke(),document.addEventListener("keydown",ae),c.value=!0,h.value=!0,fe(),_.value=oe().length>1,o.value&&(v.value=t.clickedElementBounds.height<t.clickedElementBounds.width)});function re(){o.value&&(O.value=!0,o.value.style.removeProperty("margin-left"),o.value.style.removeProperty("margin-right"),o.value.style.opacity="0.5",o.value.style.width=`${t.clickedElementBounds.width}px`,o.value.style.height=`${t.clickedElementBounds.height}px`,o.value.style.top=`${t.clickedElementBounds.top}px`,o.value.style.left=`${t.clickedElementBounds.left}px`)}async function be(){if(await q(0),o.value){o.value.style.opacity="1",o.value.style.removeProperty("height"),o.value.style.removeProperty("width"),o.value.style.removeProperty("transform");const r=window.innerWidth,s=window.innerHeight,u=t.clickedElementBounds.height,L=t.clickedElementBounds.width;if(v.value){o.value.style.left="0px";const k=u*r/L,$=(s-k)/2;o.value.style.top=`${$<=0?0:$}px`}else{o.value.style.top="0px";const k=L*s/u,$=(r-k)/2;o.value.style.left=`${$<=0?0:$}px`}}}function _e(){o.value&&(o.value.style.removeProperty("top"),o.value.style.removeProperty("left"),o.value.style.marginLeft="auto",o.value.style.marginRight="auto",o.value.style.removeProperty("opacity")),O.value=!1}function Ae(){if(o.value){const{left:r,top:s}=o.value.getBoundingClientRect();o.value.style.left=`${r}px`,o.value.style.top=`${s}px`,o.value.style.width=`${o.value.width}px`,o.value.style.height=`${o.value.height}px`,O.value=!0}}function Ee(){var r,s;e("close"),(r=D.value)==null||r.remove(),(s=t.destroy)==null||s.call(t)}return xe(()=>{document.removeEventListener("keydown",ae),he()}),(r,s)=>(z(),T("div",{ref_key:"FullscreenImgElement",ref:D,role:"button",class:G(["m-fullscreen-img",{"--animation-active":O.value}]),tabindex:"0",onClick:W(j,["self"]),onKeypress:ze(W(j,["prevent"]),["esc"])},[J(x(H(a),{class:"m-fullscreen-img-loader maz-h-16"},null,512),[[ee,h.value]]),w.value&&_.value?(z(),T("button",{key:0,type:"button",class:"m-fullscreen-btn --next",onClick:s[0]||(s[0]=W(u=>K(!0),["stop"]))},[x(H(p),{class:"maz-rotate-90 maz-text-2xl"})])):te("",!0),c.value&&w.value&&_.value?(z(),T("button",{key:1,type:"button",class:"m-fullscreen-btn --previous",onClick:s[1]||(s[1]=W(u=>K(!1),["stop"]))},[x(H(p),{class:"maz-text-2xl"})])):te("",!0),I("button",{type:"button",class:"m-fullscreen-btn --close",onClick:j},[x(H(i),{class:"maz-text-2xl"})]),I("div",Qe,[x(ce,{name:l.value?void 0:"maz-scale-fade",onBeforeEnter:s[3]||(s[3]=u=>A.value&&re()),onEnter:s[4]||(s[4]=u=>A.value&&be()),onAfterEnter:s[5]||(s[5]=u=>A.value&&_e()),onBeforeLeave:s[6]||(s[6]=u=>A.value&&Ae()),onLeave:s[7]||(s[7]=u=>A.value&&re()),onAfterLeave:Ee},{default:ue(()=>[J(I("img",{id:"ZvImgElement",ref_key:"ImgElement",ref:o,src:B.value,alt:M.value,tabindex:"0",class:G([{zoomable:r.zoom},E.value]),onLoad:pe,onClick:s[2]||(s[2]=u=>r.zoom?we(u):void 0)},null,42,Je),[[ee,c.value]])]),_:1},8,["name"])])],42,Ke))}}),tt=Y(et,[["__scopeId","data-v-040da282"]]),ie="m-fullscreen-is-open";class nt{constructor(){g(this,"options");g(this,"defaultOptions",{scaleOnHover:!1,blurOnHover:!1,disabled:!1,animated:!0,zoom:!0,scaleAnimation:!1});g(this,"mouseEnterListener");g(this,"mouseLeaveListener");g(this,"renderPreviewListener")}buildOptions(e,t){const a=typeof t.value=="object"?t.value:{src:t.value,alt:void 0},i=(a==null?void 0:a.src)??this.getImgSrc(e),p=(a==null?void 0:a.alt)??this.getImgAlt(e);return{...this.defaultOptions,...a,src:i,alt:p}}get allInstances(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}getImgSrc(e){var a;const t=((a=this.options)==null?void 0:a.src)||e.getAttribute("src")||e.getAttribute("data-src");if(!t)throw new Error('[maz-ui](fullscreen-img) src of image must be provided by `v-fullscreen=""`, `v-fullscreen="{ src: "" }"`, `src=""` or `data-src=""` atributes');return t}getImgAlt(e){var t;return((t=this.options)==null?void 0:t.alt)||e.getAttribute("alt")||e.getAttribute("data-alt")}create(e,t){if(this.options=this.buildOptions(e,t),this.options.disabled)return;e.style.cursor="move",(this.options.scaleOnHover||this.options.blurOnHover)&&(e.style.transition="all 300ms ease-in-out"),e.classList.add("m-fullscreen-img-instance"),e.setAttribute("data-src",this.getImgSrc(e));const a=this.getImgAlt(e);a&&e.setAttribute("data-alt",a),this.mouseEnterListener=()=>this.mouseEnter(e),this.mouseLeaveListener=()=>this.mouseLeave(e),this.renderPreviewListener=()=>this.renderPreview(e),e.addEventListener("mouseenter",this.mouseEnterListener),e.addEventListener("mouseleave",this.mouseLeaveListener),e.addEventListener("click",this.renderPreviewListener)}update(e,t){this.options=this.buildOptions(e,t)}remove(e){e.removeEventListener("mouseenter",this.mouseEnterListener),e.removeEventListener("mouseleave",this.mouseLeaveListener),e.removeEventListener("click",this.renderPreviewListener),e.classList.remove("m-fullscreen-img-instance"),e.style.cursor=""}renderPreview(e){return e.classList.add(ie),de(tt,{props:{...this.options,openInstanceClass:ie,clickedElement:e,clickedElementBounds:e.getBoundingClientRect()},addDestroyInProps:!0})}mouseLeave(e){this.options.scaleOnHover&&(e.style.transform=""),this.options.blurOnHover&&(e.style.filter=""),e.style.zIndex=""}mouseEnter(e){e.style.zIndex="1",this.options.scaleOnHover&&(e.style.transform="scale(1.05)"),this.options.blurOnHover&&(e.style.filter="blur(3px)")}}let Z;const st={mounted(n,e){return Z=new nt,Z.create(n,e)},updated(n,e){return Z.update(n,e)},unmounted(n){return Z.remove(n)}},at={install(n){n.directive("fullscreen-img",st)}};class ot{constructor(e,t){g(this,"callback");g(this,"delay");g(this,"timer");g(this,"startedAt");this.startedAt=Date.now(),this.callback=e,this.delay=t,this.start()}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.startedAt=Date.now(),this.start()}start(){this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const rt={class:"m-toast__message-wrapper"},it={class:"m-toast__message"},lt={key:0,class:"--close"},ut=N({__name:"MazToast",props:{position:{type:String,default:"bottom-right"},maxToasts:{type:[Number,Boolean],default:!1},timeout:{type:Number,default:1e4},queue:{type:Boolean,default:!1},noPauseOnHover:{type:Boolean,default:!1},type:{type:String,default:"info",validator:n=>["info","success","warning","danger"].includes(n)},message:{type:String,required:!0},persistent:{type:Boolean,default:!1}},emits:["close","click"],setup(n,{emit:e}){const t=n,a=U(()=>C(()=>import("./chunks/index.52cf65c6.js").then(l=>l.x),["assets/chunks/index.52cf65c6.js","assets/chunks/framework.7d402be1.js","assets/chunks/chart.705aa2e5.js","assets/chunks/use-maz-dialog-promise.80ff3eb2.js","assets/chunks/zoom-img.f640e524.js","assets/chunks/lazy-img.6c368c1f.js","assets/chunks/inject-strict.0eac4f5c.js","assets/chunks/currency.a4106e0e.js","assets/chunks/dayjs.min.04d70162.js","assets/chunks/click-outside.3366ad3a.js","assets/chunks/date.0d08a58e.js","assets/chunks/capitalize.43002998.js"])),i=m(),p=y(()=>t.position.includes("top")?"top":"bottom"),f=y(()=>t.position.includes("left")?"left":t.position.includes("right")?"right":"center"),c=y(()=>f.value!=="center"?f.value==="right"?"m-slide-right":"m-slide-left":p.value==="top"?"m-slide-top":"m-slide-bottom"),d=m(!1),h=m(),w=m(),_=`m-toast-container --${p.value} --${f.value}`,b=`.${_.replaceAll(" ",".")}`,O=()=>{const l=document.querySelector(b);if(!l&&!l){const v=document.body,E=document.createElement("div");E.className=_,v.append(E)}},R=()=>{const l=document.querySelector(b);return!t.queue&&t.maxToasts===!1?!1:typeof t.maxToasts=="number"&&l?t.maxToasts<=l.childElementCount:l&&l.childElementCount>0},B=()=>{if(R()){w.value=setTimeout(B,250);return}const l=document.querySelector(b);i.value&&l&&l.prepend(i.value),d.value=!0,h.value=t.timeout?new ot(A,t.timeout):void 0};function M(l){e("click",l),t.persistent||A()}const D=l=>{h.value&&!t.noPauseOnHover&&(l?h.value.pause():h.value.resume())},o=()=>{h.value&&h.value.stop(),w.value&&clearTimeout(w.value)},A=()=>{o(),d.value=!1,setTimeout(()=>{var v;e("close"),(v=i.value)==null||v.remove();const l=document.querySelector(b);l&&!(l!=null&&l.hasChildNodes())&&l.remove()},300)};return se(()=>{O(),B()}),(l,v)=>(z(),Oe(ce,{name:c.value},{default:ue(()=>[J(I("div",{ref_key:"Toaster",ref:i,class:G(["m-toast",[`--${n.type}`,`--${p.value}`,`--${f.value}`]]),role:"alert",onMouseover:v[0]||(v[0]=E=>D(!0)),onMouseleave:v[1]||(v[1]=E=>D(!1)),onClick:v[2]||(v[2]=E=>M(E))},[I("div",rt,[I("p",it,ne(n.message),1)]),n.persistent?te("",!0):(z(),T("button",lt,[x(H(a),{class:"--icon maz-text-2xl"})]))],34),[[ee,d.value]])]),_:1},8,["name"]))}}),ct=Y(ut,[["__scopeId","data-v-a00d34e7"]]),mt={position:"bottom-right",timeout:1e4,persistent:!1};class dt{constructor(e,t){this.app=e,this.globalOptions=t}show(e,t){const a={message:e,...t},i={...mt,...a,...this.globalOptions,...t};de(ct,{props:i,app:this.app})}getLocalOptions(e,t){return{type:e,...t}}success(e,t){return this.show(e,this.getLocalOptions("success",t))}error(e,t){return this.show(e,this.getLocalOptions("danger",t))}info(e,t){return this.show(e,this.getLocalOptions("info",t))}warning(e,t){return this.show(e,this.getLocalOptions("warning",t))}}let le;const vt={install(n,e){le=new dt(n,e),n.provide("toast",le)}},P="",pt=n=>n.filter((e,t,a)=>t===a.indexOf(e)),ft=n=>(e=P)=>typeof e=="function"?n.findIndex((...t)=>e(...t))>-1:n.includes(e),ht=n=>n.length>0,gt=n=>(e=P)=>pt([...n,e]),yt=n=>(e=P)=>n.filter(t=>t!==e);class wt{constructor(){g(this,"_loaders",m([]))}get loaders(){return y(()=>this._loaders.value)}stop(e=P){this._loaders.value=yt(this._loaders.value)(e)}start(e=P){return this._loaders.value=gt(this._loaders.value)(e),()=>this.stop(e)}get anyLoading(){return y(()=>ht(this._loaders.value))}isLoading(e=P){return y(()=>ft(this._loaders.value)(e)).value}}const bt=new wt,_t={install:n=>{n.provide("wait",bt)}},Q={delay:100,observer:{root:void 0,rootMargin:"0px",threshold:.2},animation:{once:!0,duration:300,delay:0}};class At{constructor(e){g(this,"options");this.options={delay:(e==null?void 0:e.delay)??Q.delay,observer:{...Q.observer,...e==null?void 0:e.observer},animation:{...Q.animation,...e==null?void 0:e.animation}}}async handleObserver(){await q(this.options.delay);const e=new IntersectionObserver(this.handleIntersect.bind(this),{...this.options.observer});for(const t of document.querySelectorAll("[data-maz-aos]")){const a=t.getAttribute("data-maz-aos-anchor");if(a){const i=document.querySelector(a);i?(i.setAttribute("data-maz-aos-children","true"),e.observe(i)):console.warn(`[maz-ui](aos) no element found with selector "${a}"`)}else e.observe(t)}}runAnimations(){if(me())return this.handleObserver();console.warn("[MazAos](runAnimations) should be executed on client side")}handleIntersect(e,t){for(const a of e){const p=a.target.getAttribute("data-maz-aos-children")==="true",f=a.target.getAttribute("data-maz-aos")?[a.target]:[];if(p){const c=[...document.querySelectorAll("[data-maz-aos-anchor]")].map(d=>d.getAttribute("data-maz-aos-anchor")===`#${a.target.id}`?d:void 0);for(const d of c)d&&f.push(d)}for(const c of f){const d=c.getAttribute("data-maz-aos-once"),h=typeof d=="string"?d==="true":this.options.animation.once;if(typeof this.options.observer.threshold=="number"&&a.intersectionRatio>this.options.observer.threshold){const w=c.getAttribute("data-maz-aos-duration"),_=c.getAttribute("data-maz-aos-delay");w||(c.style.transitionDuration=`${this.options.animation.duration}ms`,setTimeout(()=>{c.style.transitionDuration="0"},1e3)),_||(c.style.transitionDelay=`${this.options.animation.delay}ms`,setTimeout(()=>{c.style.transitionDelay="0"},1e3)),c.classList.add("maz-aos-animate"),h&&t.unobserve(c)}else c.classList.remove("maz-aos-animate")}}}}let F;const Et={install:(n,e)=>{F=new At(e),n.provide("aos",F),me()&&(e!=null&&e.router?e.router.afterEach(async()=>{F.runAnimations()}):F.runAnimations())}};const Lt=n=>{if(window.dataLayer&&window.gtag)return;const e=document.createElement("script");e.src=`https://www.googletagmanager.com/gtag/js?id=${n}`,e.async=!0,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",n)},$t=({id:n})=>{n&&typeof window<"u"&&Lt(n)};const It=N({__name:"ColorContainer",props:{color:{type:String,required:!0},hex:{type:String,required:!0}},setup(n){return(e,t)=>(z(),T("div",{class:G(["color-container rounded",[`--${n.color}`]]),style:Ce(`background-color: var(--maz-color-${n.color}); color: var(--maz-color-${n.color}-contrast);`)},[I("span",null,ne(n.color)+": "+ne(n.hex),1)],6))}});const kt=Y(It,[["__scopeId","data-v-4f2137d5"]]),xt=["href","title"],zt=["src","alt"],Ot=N({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,default:"latest"}},setup(n){const e=n,t=y(()=>`https://www.npmjs.com/package/${e.package}`),a=y(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),i=y(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(a.value)}`);return(p,f)=>(z(),T("a",{class:"npm-badge",href:t.value,title:n.package,target:"_blank",rel:"noopener noreferrer"},[I("img",{src:i.value,alt:n.package},null,8,zt)],8,xt))}});const Ct=Y(Ot,[["__scopeId","data-v-fbd6ca08"]]),Tt={...Xe,enhanceApp(n){$t({id:"G-EM35TM23ZC"});const{app:e,router:{route:t}}=n;e.provide("mazIconPath","/maz-ui-3/icons"),e.component("ColorContainer",kt),e.component("NpmBadge",Ct),Object.entries(Ye).forEach(([p,f])=>{e.component(p,f)});const a={persistent:!1,position:"bottom-right",timeout:1e4},i={delay:500,animation:{duration:400,once:!1,delay:0}};e.use(vt,a),e.use(_t),e.use(Et,i),e.use(at),Te(()=>t.path,()=>{X&&F.runAnimations()})}};function ve(n){if(n.extends){const e=ve(n.extends);return{...e,...n,async enhanceApp(t){e.enhanceApp&&await e.enhanceApp(t),n.enhanceApp&&await n.enhanceApp(t)}}}return n}const S=ve(Tt),Pt=N({name:"VitePressApp",setup(){const{site:n}=Se();return se(()=>{Be(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),De(),He(),qe(),S.setup&&S.setup(),()=>Fe(S.Layout)}});async function St(){const n=Dt(),e=Bt();e.provide(Ne,n);const t=Re(n.route);return e.provide(Me,t),e.component("Content",je),e.component("ClientOnly",Ve),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),S.enhanceApp&&await S.enhanceApp({app:e,router:n,siteData:We}),{app:e,router:n,data:t}}function Bt(){return Ze(Pt)}function Dt(){let n=X,e;return Ue(t=>{let a=Ge(t);return a?(n&&(e=a),(n||e===a)&&(a=a.replace(/\.js$/,".lean.js")),X&&(n=!1),C(()=>import(a),[])):null},S.NotFound)}X&&St().then(({app:n,router:e,data:t})=>{e.go().then(()=>{Pe(e.route,t.site),n.mount("#app")})});export{St as createApp};
