var we=Object.defineProperty;var Ae=(n,e,t)=>e in n?we(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var p=(n,e,t)=>(Ae(n,typeof e!="symbol"?e+"":e,t),t);import{t as k,a8 as N,u as B,d,r as g,A as J,G as Le,a5 as Ee,v as x,b as C,a6 as V,a9 as Y,a0 as R,N as j,B as K,F as E,O as oe,a as W,$ as re,Y as $e,_ as U,C as Ie,X as Q,D as _e,q as ke,I as Z,aa as xe,c as ze,H as Ce,ab as Oe,ac as Te,ad as Pe,ae as Se,af as Be,ag as De,ah as He,ai as qe,aj as Fe,ak as Ne,al as Re,am as Me,an as je,S as We}from"./chunks/framework.0fefaf94.js";import{t as Ze}from"./chunks/theme.b523633c.js";import{M as Ue,C as ne,X as ie,c as Ge}from"./chunks/index.f8cb6de8.js";import{s as P}from"./chunks/sleep.549b969e.js";import{v as Xe}from"./chunks/use-theme-handler.52ab6b79.js";import{i as le}from"./chunks/is-client.34d16609.js";import"./chunks/lazy-img.ded93221.js";import"./chunks/use-maz-dialog-promise.5d0c2c44.js";import"./chunks/inject-strict.b03d3620.js";import"./chunks/zoom-img.d642ec03.js";import"./chunks/chart.705aa2e5.js";import"./chunks/currency.a4106e0e.js";import"./chunks/dayjs.min.3f5e50a8.js";import"./chunks/commonjsHelpers.725317a4.js";import"./chunks/capitalize.43002998.js";import"./chunks/date.0d08a58e.js";import"./chunks/click-outside.1953cc89.js";function ce(n,e){let t=e==null?void 0:e.element;function s(){t&&N(null,t)}const i=k(n,{...e==null?void 0:e.props,...e!=null&&e.addDestroyInProps?{destroy:s}:{}},e==null?void 0:e.children);return e!=null&&e.app?(i.appContext=e.app._context,t?N(i,t):typeof document<"u"&&(t=document.createElement("div"),N(i,t))):(t=t??document.body,N(i,t)),{vNode:i,destroy:s,el:t}}const Ve=["onClick","onKeypress"],Ye={class:"m-fullscreen-img-scroller"},Ke=["src","alt"],Qe=B({__name:"MazFullscreenImg",props:{destroy:{type:Function,default:void 0},src:{},alt:{default:void 0},openInstanceClass:{},zoom:{type:Boolean,default:!0},disabled:{type:Boolean},clickedElementBounds:{},clickedElement:{},animated:{type:Boolean,default:!0},scaleAnimation:{type:Boolean}},emits:["close","previous","next","before-close"],setup(n,{emit:e}){const t=n,s=d(!1),i=d(!1),v=d(!1),h=d(!1),c=d(!1),u=d(!1),y=d(!1),$=d(t.clickedElement instanceof HTMLImageElement),b=d(t.src),D=d(t.alt),H=d(),o=d(),I=g(()=>$.value&&t.animated&&!t.scaleAnimation),q=g(()=>($.value||!t.animated)&&!t.scaleAnimation),z=d(!1),F=g(()=>u.value?`--is-zoomed maz-cursor-zoom-in maz-max-w-[none] ${z.value?"maz-h-screen maz-w-auto":"maz-h-auto maz-w-screen"}`:`cursor-zoom-out ${z.value?"maz-w-screen maz-h-screen --is-landscape":"maz-h-screen maz-w-auto"}`);function l(){i.value=!0,v.value=!1,h.value=!0}function f(){e("before-close"),s.value=!1}function w(r){r.key==="Escape"&&(r.preventDefault(),f()),(r.key==="ArrowLeft"||r.key==="ArrowRight")&&(r.preventDefault(),G(r.key==="ArrowRight"))}function me(){document.documentElement.classList.add("--m-fullscreen-open")}function de(){document.documentElement.classList.remove("--m-fullscreen-open")}function ee(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}function ve(r,a){return a<0?r.length-1:a>=r.length?0:a}async function fe(r,a){r.classList.remove(t.openInstanceClass),a.classList.add(t.openInstanceClass);const m=a.getAttribute("data-src"),A=a.getAttribute("data-alt");D.value=A??void 0,m&&(b.value=m),i.value=!1,await P(300),i.value||(v.value=!0)}function G(r){const a=document.querySelector(`.m-fullscreen-img-instance.${t.openInstanceClass}`);if(a){const m=ee(),A=m.indexOf(a),_=r?A+1:A-1,L=m[ve(m,_)];L&&fe(a,L),e(r?"next":"previous")}}async function pe(r){const a=r.target;a.style.width=`${a.clientWidth}px`,a.style.height=`${a.clientHeight}px`,await P(0),u.value=!u.value,a.style.removeProperty("width"),a.style.removeProperty("height"),await P(0);const m=a.clientWidth/r.clientY,_=window.innerWidth/m-window.innerHeight/2;Xe.scrollTo(a,200,{container:a.parentElement,easing:"linear",offset:u.value?_:0})}J(async()=>{await Le(),document.addEventListener("keydown",w),s.value=!0,v.value=!0,me(),c.value=ee().length>1,o.value&&(z.value=t.clickedElementBounds.height<t.clickedElementBounds.width)});function te(){o.value&&(y.value=!0,o.value.style.removeProperty("margin-left"),o.value.style.removeProperty("margin-right"),o.value.style.opacity="0.5",o.value.style.width=`${t.clickedElementBounds.width}px`,o.value.style.height=`${t.clickedElementBounds.height}px`,o.value.style.top=`${t.clickedElementBounds.top}px`,o.value.style.left=`${t.clickedElementBounds.left}px`)}async function ge(){if(await P(0),o.value){o.value.style.opacity="1",o.value.style.removeProperty("height"),o.value.style.removeProperty("width"),o.value.style.removeProperty("transform");const r=window.innerWidth,a=window.innerHeight,m=t.clickedElementBounds.height,A=t.clickedElementBounds.width;if(z.value){o.value.style.left="0px";const _=m*r/A,L=(a-_)/2;o.value.style.top=`${L<=0?0:L}px`}else{o.value.style.top="0px";const _=A*a/m,L=(r-_)/2;o.value.style.left=`${L<=0?0:L}px`}}}function he(){o.value&&(o.value.style.removeProperty("top"),o.value.style.removeProperty("left"),o.value.style.marginLeft="auto",o.value.style.marginRight="auto",o.value.style.removeProperty("opacity")),y.value=!1}function ye(){if(o.value){const{left:r,top:a}=o.value.getBoundingClientRect();o.value.style.left=`${r}px`,o.value.style.top=`${a}px`,o.value.style.width=`${o.value.width}px`,o.value.style.height=`${o.value.height}px`,y.value=!0}}function be(){var r,a;e("close"),(r=H.value)==null||r.remove(),(a=t.destroy)==null||a.call(t)}return Ee(()=>{document.removeEventListener("keydown",w),de()}),(r,a)=>(x(),C("div",{ref_key:"FullscreenImgElement",ref:H,role:"button",class:W(["m-fullscreen-img",{"--animation-active":y.value}]),tabindex:"0",onClick:R(f,["self"]),onKeypress:$e(R(f,["prevent"]),["esc"])},[V(k(Ue,{class:"m-fullscreen-img-loader maz-h-16"},null,512),[[Y,v.value]]),h.value&&c.value?(x(),C("button",{key:0,type:"button",class:"m-fullscreen-btn --next",onClick:a[0]||(a[0]=R(m=>G(!0),["stop"]))},[k(j(ne),{class:"maz-rotate-90 maz-text-2xl"})])):K("",!0),s.value&&h.value&&c.value?(x(),C("button",{key:1,type:"button",class:"m-fullscreen-btn --previous",onClick:a[1]||(a[1]=R(m=>G(!1),["stop"]))},[k(j(ne),{class:"maz-text-2xl"})])):K("",!0),E("button",{type:"button",class:"m-fullscreen-btn --close",onClick:f},[k(j(ie),{class:"maz-text-2xl"})]),E("div",Ye,[k(re,{name:q.value?void 0:"maz-scale-fade",onBeforeEnter:a[3]||(a[3]=m=>I.value&&te()),onEnter:a[4]||(a[4]=m=>I.value&&ge()),onAfterEnter:a[5]||(a[5]=m=>I.value&&he()),onBeforeLeave:a[6]||(a[6]=m=>I.value&&ye()),onLeave:a[7]||(a[7]=m=>I.value&&te()),onAfterLeave:be},{default:oe(()=>[V(E("img",{id:"ZvImgElement",ref_key:"ImgElement",ref:o,src:b.value,alt:D.value,tabindex:"0",class:W([{zoomable:r.zoom},F.value]),onLoad:l,onClick:a[2]||(a[2]=m=>r.zoom?pe(m):void 0)},null,42,Ke),[[Y,s.value]])]),_:1},8,["name"])])],42,Ve))}}),Je=U(Qe,[["__scopeId","data-v-5056ec48"]]),se="m-fullscreen-is-open";class et{constructor(){p(this,"options");p(this,"defaultOptions",{scaleOnHover:!1,blurOnHover:!1,disabled:!1,animated:!0,zoom:!0,scaleAnimation:!1});p(this,"mouseEnterListener");p(this,"mouseLeaveListener");p(this,"renderPreviewListener")}buildOptions(e,t){const s=typeof t.value=="object"?t.value:{src:t.value,alt:void 0},i=(s==null?void 0:s.src)??this.getImgSrc(e),v=(s==null?void 0:s.alt)??this.getImgAlt(e);return{...this.defaultOptions,...s,src:i,alt:v}}get allInstances(){return[...document.querySelectorAll(".m-fullscreen-img-instance")]}getImgSrc(e){var s;const t=((s=this.options)==null?void 0:s.src)||e.getAttribute("src")||e.getAttribute("data-src");if(!t)throw new Error('[maz-ui](fullscreen-img) src of image must be provided by `v-fullscreen=""`, `v-fullscreen="{ src: "" }"`, `src=""` or `data-src=""` atributes');return t}getImgAlt(e){var t;return((t=this.options)==null?void 0:t.alt)||e.getAttribute("alt")||e.getAttribute("data-alt")}create(e,t){if(this.options=this.buildOptions(e,t),this.options.disabled)return;e.style.cursor="move",(this.options.scaleOnHover||this.options.blurOnHover)&&(e.style.transition="all 300ms ease-in-out"),e.classList.add("m-fullscreen-img-instance"),e.setAttribute("data-src",this.getImgSrc(e));const s=this.getImgAlt(e);s&&e.setAttribute("data-alt",s),this.mouseEnterListener=()=>this.mouseEnter(e),this.mouseLeaveListener=()=>this.mouseLeave(e),this.renderPreviewListener=()=>this.renderPreview(e),e.addEventListener("mouseenter",this.mouseEnterListener),e.addEventListener("mouseleave",this.mouseLeaveListener),e.addEventListener("click",this.renderPreviewListener)}update(e,t){this.options=this.buildOptions(e,t)}remove(e){e.removeEventListener("mouseenter",this.mouseEnterListener),e.removeEventListener("mouseleave",this.mouseLeaveListener),e.removeEventListener("click",this.renderPreviewListener),e.classList.remove("m-fullscreen-img-instance"),e.style.cursor=""}renderPreview(e){return e.classList.add(se),ce(Je,{props:{...this.options,openInstanceClass:se,clickedElement:e,clickedElementBounds:e.getBoundingClientRect()},addDestroyInProps:!0})}mouseLeave(e){this.options.scaleOnHover&&(e.style.transform=""),this.options.blurOnHover&&(e.style.filter=""),e.style.zIndex=""}mouseEnter(e){e.style.zIndex="1",this.options.scaleOnHover&&(e.style.transform="scale(1.05)"),this.options.blurOnHover&&(e.style.filter="blur(3px)")}}let M;const tt={mounted(n,e){return M=new et,M.create(n,e)},updated(n,e){return M.update(n,e)},unmounted(n){return M.remove(n)}},nt={install(n){n.directive("fullscreen-img",tt)}};class st{constructor(e,t){p(this,"callback");p(this,"delay");p(this,"timer");p(this,"startedAt");this.startedAt=Date.now(),this.callback=e,this.delay=t,this.start()}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.startedAt=Date.now(),this.start()}start(){this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const at={class:"m-toast__message-wrapper"},ot={class:"m-toast__message"},rt={key:0,class:"--close"},it=B({__name:"MazToast",props:{position:{type:String,default:"bottom-right"},maxToasts:{type:[Number,Boolean],default:!1},timeout:{type:Number,default:1e4},queue:{type:Boolean,default:!1},noPauseOnHover:{type:Boolean,default:!1},type:{type:String,default:"info",validator:n=>["info","success","warning","danger"].includes(n)},message:{type:String,required:!0},persistent:{type:Boolean,default:!1}},emits:["close","click"],setup(n,{emit:e}){const t=n,s=d(),i=g(()=>t.position.includes("top")?"top":"bottom"),v=g(()=>t.position.includes("left")?"left":t.position.includes("right")?"right":"center"),h=g(()=>v.value!=="center"?v.value==="right"?"m-slide-right":"m-slide-left":i.value==="top"?"m-slide-top":"m-slide-bottom"),c=d(!1),u=d(),y=d(),$=`m-toast-container --${i.value} --${v.value}`,b=`.${$.replaceAll(" ",".")}`,D=()=>{const l=document.querySelector(b);if(!l&&!l){const f=document.body,w=document.createElement("div");w.className=$,f.append(w)}},H=()=>{const l=document.querySelector(b);return!t.queue&&t.maxToasts===!1?!1:typeof t.maxToasts=="number"&&l?t.maxToasts<=l.childElementCount:l&&l.childElementCount>0},o=()=>{if(H()){y.value=setTimeout(o,250);return}const l=document.querySelector(b);s.value&&l&&l.prepend(s.value),c.value=!0,u.value=t.timeout?new st(F,t.timeout):void 0};function I(l){e("click",l),t.persistent||F()}const q=l=>{u.value&&!t.noPauseOnHover&&(l?u.value.pause():u.value.resume())},z=()=>{u.value&&u.value.stop(),y.value&&clearTimeout(y.value)},F=()=>{z(),c.value=!1,setTimeout(()=>{var f;e("close"),(f=s.value)==null||f.remove();const l=document.querySelector(b);l&&!(l!=null&&l.hasChildNodes())&&l.remove()},300)};return J(()=>{D(),o()}),(l,f)=>(x(),Ie(re,{name:h.value},{default:oe(()=>[V(E("div",{ref_key:"Toaster",ref:s,class:W(["m-toast",[`--${n.type}`,`--${i.value}`,`--${v.value}`]]),role:"alert",onMouseover:f[0]||(f[0]=w=>q(!0)),onMouseleave:f[1]||(f[1]=w=>q(!1)),onClick:f[2]||(f[2]=w=>I(w))},[E("div",at,[E("p",ot,Q(n.message),1)]),n.persistent?K("",!0):(x(),C("button",rt,[k(j(ie),{class:"--icon maz-text-xl"})]))],34),[[Y,c.value]])]),_:1},8,["name"]))}}),lt=U(it,[["__scopeId","data-v-bbab25e8"]]),ct={position:"bottom-right",timeout:1e4,persistent:!1};class ut{constructor(e,t){this.app=e,this.globalOptions=t}show(e,t){const s={message:e,...t},i={...ct,...s,...this.globalOptions,...t};ce(lt,{props:i,app:this.app})}getLocalOptions(e,t){return{type:e,...t}}success(e,t){return this.show(e,this.getLocalOptions("success",t))}error(e,t){return this.show(e,this.getLocalOptions("danger",t))}info(e,t){return this.show(e,this.getLocalOptions("info",t))}warning(e,t){return this.show(e,this.getLocalOptions("warning",t))}}let ae;const mt={install(n,e){ae=new ut(n,e),n.provide("toast",ae)}},O="",dt=n=>n.filter((e,t,s)=>t===s.indexOf(e)),vt=n=>(e=O)=>typeof e=="function"?n.findIndex((...t)=>e(...t))>-1:n.includes(e),ft=n=>n.length>0,pt=n=>(e=O)=>dt([...n,e]),gt=n=>(e=O)=>n.filter(t=>t!==e);class ht{constructor(){p(this,"_loaders",d([]))}get loaders(){return g(()=>this._loaders.value)}stop(e=O){this._loaders.value=gt(this._loaders.value)(e)}start(e=O){return this._loaders.value=pt(this._loaders.value)(e),()=>this.stop(e)}get anyLoading(){return g(()=>ft(this._loaders.value))}isLoading(e=O){return g(()=>vt(this._loaders.value)(e)).value}}const yt=new ht,bt={install:n=>{n.provide("wait",yt)}},X={delay:100,observer:{root:void 0,rootMargin:"0px",threshold:.2},animation:{once:!0,duration:300,delay:0}};class wt{constructor(e){p(this,"options");this.options={delay:(e==null?void 0:e.delay)??X.delay,observer:{...X.observer,...e==null?void 0:e.observer},animation:{...X.animation,...e==null?void 0:e.animation}}}async handleObserver(){await P(this.options.delay);const e=new IntersectionObserver(this.handleIntersect.bind(this),{...this.options.observer});for(const t of document.querySelectorAll("[data-maz-aos]")){const s=t.getAttribute("data-maz-aos-anchor");if(s){const i=document.querySelector(s);i?(i.setAttribute("data-maz-aos-children","true"),e.observe(i)):console.warn(`[maz-ui](aos) no element found with selector "${s}"`)}else e.observe(t)}}runAnimations(){if(le())return this.handleObserver();console.warn("[MazAos](runAnimations) should be executed on client side")}handleIntersect(e,t){for(const s of e){const v=s.target.getAttribute("data-maz-aos-children")==="true",h=s.target.getAttribute("data-maz-aos")?[s.target]:[];if(v){const c=[...document.querySelectorAll("[data-maz-aos-anchor]")].map(u=>u.getAttribute("data-maz-aos-anchor")===`#${s.target.id}`?u:void 0);for(const u of c)u&&h.push(u)}for(const c of h){const u=c.getAttribute("data-maz-aos-once"),y=typeof u=="string"?u==="true":this.options.animation.once;if(typeof this.options.observer.threshold=="number"&&s.intersectionRatio>this.options.observer.threshold){const $=c.getAttribute("data-maz-aos-duration"),b=c.getAttribute("data-maz-aos-delay");$||(c.style.transitionDuration=`${this.options.animation.duration}ms`,setTimeout(()=>{c.style.transitionDuration="0"},1e3)),b||(c.style.transitionDelay=`${this.options.animation.delay}ms`,setTimeout(()=>{c.style.transitionDelay="0"},1e3)),c.classList.add("maz-aos-animate"),y&&t.unobserve(c)}else c.classList.remove("maz-aos-animate")}}}}let S;const At={install:(n,e)=>{S=new wt(e),n.provide("aos",S),le()&&(e!=null&&e.router?e.router.afterEach(async()=>{S.runAnimations()}):S.runAnimations())}};const Lt=n=>{if(window.dataLayer&&window.gtag)return;const e=document.createElement("script");e.src=`https://www.googletagmanager.com/gtag/js?id=${n}`,e.async=!0,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",n)},Et=({id:n})=>{n&&typeof window<"u"&&Lt(n)};const $t=B({__name:"ColorContainer",props:{color:{type:String,required:!0},hex:{type:String,required:!0}},setup(n){return(e,t)=>(x(),C("div",{class:W(["color-container rounded",[`--${n.color}`]]),style:_e(`background-color: var(--maz-color-${n.color}); color: var(--maz-color-${n.color}-contrast);`)},[E("span",null,Q(n.color)+": "+Q(n.hex),1)],6))}});const It=U($t,[["__scopeId","data-v-4f2137d5"]]),_t=["href","title"],kt=["src","alt"],xt=B({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,default:"latest"}},setup(n){const e=n,t=g(()=>`https://www.npmjs.com/package/${e.package}`),s=g(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),i=g(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(s.value)}`);return(v,h)=>(x(),C("a",{class:"npm-badge",href:t.value,title:n.package,target:"_blank",rel:"noopener noreferrer"},[E("img",{src:i.value,alt:n.package},null,8,kt)],8,_t))}});const zt=U(xt,[["__scopeId","data-v-fbd6ca08"]]),Ct={...Ze,enhanceApp(n){Et({id:"G-EM35TM23ZC"});const{app:e,router:{route:t}}=n;e.provide("mazIconPath","/maz-ui-3/icons"),e.component("ColorContainer",It),e.component("NpmBadge",zt),Object.entries(Ge).forEach(([v,h])=>{e.component(v,h)});const s={persistent:!1,position:"bottom-right",timeout:1e4},i={delay:500,animation:{duration:400,once:!1,delay:0}};e.use(mt,s),e.use(bt),e.use(At,i),e.use(nt),ke(()=>t.path,()=>{Z&&S.runAnimations()})}};function ue(n){if(n.extends){const e=ue(n.extends);return{...e,...n,async enhanceApp(t){e.enhanceApp&&await e.enhanceApp(t),n.enhanceApp&&await n.enhanceApp(t)}}}return n}const T=ue(Ct),Ot=B({name:"VitePressApp",setup(){const{site:n}=ze();return J(()=>{Ce(()=>{document.documentElement.lang=n.value.lang,document.documentElement.dir=n.value.dir})}),Oe(),Te(),Pe(),T.setup&&T.setup(),()=>Se(T.Layout)}});async function Tt(){const n=St(),e=Pt();e.provide(Be,n);const t=De(n.route);return e.provide(He,t),e.component("Content",qe),e.component("ClientOnly",Fe),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),T.enhanceApp&&await T.enhanceApp({app:e,router:n,siteData:Ne}),{app:e,router:n,data:t}}function Pt(){return Re(Ot)}function St(){let n=Z,e;return Me(t=>{let s=je(t);return s?(n&&(e=s),(n||e===s)&&(s=s.replace(/\.js$/,".lean.js")),Z&&(n=!1),We(()=>import(s),[])):null},T.NotFound)}Z&&Tt().then(({app:n,router:e,data:t})=>{e.go().then(()=>{xe(e.route,t.site),n.mount("#app")})});export{Tt as createApp};
