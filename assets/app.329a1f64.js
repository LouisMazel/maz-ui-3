var F=Object.defineProperty;var U=(t,e,a)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var m=(t,e,a)=>(U(t,typeof e!="symbol"?e+"":e,a),a);import{D as P,a8 as O,d as $,f as y,e as d,h as q,o as A,y as G,z as X,a7 as Y,x as b,n as I,b as f,t as k,c as L,A as K,a9 as Q,T as W,_ as S,Y as Z,w as J,K as T,aa as ee,u as te,l as ae,ab as ne,ac as oe,ad as se,ae as re,af as ie,ag as ce,ah as le,ai as ue,aj as de,ak as me,al as pe,am as fe,an as he,H as ge}from"./chunks/framework.ec3b97ee.js";import{t as ve}from"./chunks/theme.a3c28c74.js";import{_ as ye,X as _e,c as be}from"./chunks/index.584d0eb8.js";import{i as B}from"./chunks/user-visibilty.composable.d629e11e.js";import"./chunks/lazy-img.directive.dfc5fba9.js";import"./chunks/use-maz-dialog-promise.0c4e8e17.js";import"./chunks/inject-strict.b17c0e94.js";import"./chunks/zoom-img.directive.d642ec03.js";import"./chunks/no-photography.7e2a61cf.js";import"./chunks/chart.51df59e3.js";import"./chunks/currency.a4106e0e.js";import"./chunks/dayjs.min.ea7bbe63.js";import"./chunks/capitalize.43002998.js";import"./chunks/date.0d08a58e.js";import"./chunks/click-outside.directive.27236904.js";function we(t,{props:e,children:a,element:n,app:s}={}){let r=n;const l=P(t,e,a);return s&&s._context&&(l.appContext=s._context),r?O(l,r):typeof document<"u"&&O(l,r=document.createElement("div")),{vNode:l,destroy:()=>{r&&O(null,r)},el:r}}class Ae{constructor(e,a){m(this,"callback");m(this,"delay");m(this,"timer");m(this,"startedAt");this.startedAt=Date.now(),this.callback=e,this.delay=a,this.start()}pause(){this.stop(),this.delay-=Date.now()-this.startedAt}resume(){this.startedAt=Date.now(),this.start()}start(){this.timer=setTimeout(this.callback,this.delay)}stop(){clearTimeout(this.timer)}}const Te={class:"m-toast__message-wrapper"},$e={class:"m-toast__message"},Ce={key:0,class:"--close"},Oe=$({__name:"MazToast",props:{position:{type:String,default:"bottom-right"},maxToasts:{type:[Number,Boolean],default:!1},timeout:{type:Number,default:1e4},queue:{type:Boolean,default:!1},noPauseOnHover:{type:Boolean,default:!1},type:{type:String,default:"info",validator:t=>["info","success","warning","danger"].includes(t)},message:{type:String,required:!0},persistent:{type:Boolean,default:!1}},emits:["close","click"],setup(t,{emit:e}){const a=t,n=y(),s=d(()=>a.position.includes("top")?"top":"bottom"),r=d(()=>a.position.includes("left")?"left":a.position.includes("right")?"right":"center"),l=d(()=>r.value!=="center"?r.value==="right"?"m-slide-right":"m-slide-left":s.value==="top"?"m-slide-top":"m-slide-bottom"),c=y(!1),i=y(),v=y(),C=`m-toast-container --${s.value} --${r.value}`,w=`.${C.replaceAll(" ",".")}`,R=()=>{const o=document.querySelector(w);if(!o&&!o){const u=document.body,p=document.createElement("div");p.className=C,u.append(p)}},j=()=>{const o=document.querySelector(w);return!a.queue&&a.maxToasts===!1?!1:typeof a.maxToasts=="number"&&o?a.maxToasts<=o.childElementCount:o&&o.childElementCount>0},z=()=>{if(j()){v.value=setTimeout(z,250);return}const o=document.querySelector(w);n.value&&o&&o.prepend(n.value),c.value=!0,i.value=a.timeout?new Ae(D,a.timeout):void 0};function H(o){e("click",o),a.persistent||D()}const E=o=>{i.value&&!a.noPauseOnHover&&(o?i.value.pause():i.value.resume())},V=()=>{i.value&&i.value.stop(),v.value&&clearTimeout(v.value)},D=()=>{V(),c.value=!1,setTimeout(()=>{var u;e("close"),(u=n.value)==null||u.remove();const o=document.querySelector(w);o&&!(o!=null&&o.hasChildNodes())&&o.remove()},300)};return q(()=>{R(),z()}),(o,u)=>(A(),G(W,{name:f(l)},{default:X(()=>[Y(b("div",{ref_key:"Toaster",ref:n,class:I(["m-toast",[`--${t.type}`,`--${f(s)}`,`--${f(r)}`]]),role:"alert",onMouseover:u[0]||(u[0]=p=>E(!0)),onMouseleave:u[1]||(u[1]=p=>E(!1)),onClick:u[2]||(u[2]=p=>H(p))},[b("div",Te,[b("p",$e,k(t.message),1)]),t.persistent?K("",!0):(A(),L("button",Ce,[P(ye,{src:f(_e),class:"--icon"},null,8,["src"])]))],34),[[Q,c.value]])]),_:1},8,["name"]))}}),xe=S(Oe,[["__scopeId","data-v-c4c4c9c4"]]);class ke{constructor(e,a){this.app=e,this.globalOptions=a}show(e,a){const s={...{message:e,...a},...this.globalOptions,...a};we(xe,{props:s,app:this.app})}getLocalOptions(e,a){return{type:e,...a}}success(e,a){return this.show(e,this.getLocalOptions("success",a))}error(e,a){return this.show(e,this.getLocalOptions("danger",a))}info(e,a){return this.show(e,this.getLocalOptions("info",a))}warning(e,a){return this.show(e,this.getLocalOptions("warning",a))}}const Le={position:"bottom-right",timeout:1e4,persistent:!0};let N;const Se={install(t,e){N=new ke(t,{...Le,...e}),t.provide("toast",N)}},h="",ze=t=>t.filter((e,a,n)=>a===n.indexOf(e)),Ee=t=>(e=h)=>typeof e=="function"?t.findIndex((...a)=>e(...a))>-1:t.includes(e),De=t=>t.length>0,Ne=t=>(e=h)=>ze([...t,e]),Pe=t=>(e=h)=>t.filter(a=>a!==e);class qe{constructor(){m(this,"_loaders",y([]))}get loaders(){return d(()=>this._loaders.value)}stop(e=h){this._loaders.value=Pe(this._loaders.value)(e)}start(e=h){return this._loaders.value=Ne(this._loaders.value)(e),()=>this.stop(e)}get anyLoading(){return d(()=>De(this._loaders.value))}isLoading(e=h){return d(()=>Ee(this._loaders.value)(e)).value}}const Ie=new qe,Be={install:t=>{t.provide("wait",Ie)}},Me=t=>new Promise(e=>setTimeout(e,t)),x={delay:100,observer:{root:void 0,rootMargin:"0px",threshold:.2},animation:{once:!0,duration:300}};class Re{constructor(e){m(this,"options");this.options={delay:(e==null?void 0:e.delay)??x.delay,observer:{...x.observer,...e==null?void 0:e.observer},animation:{...x.animation,...e==null?void 0:e.animation}}}runAnimations(){if(B())return this.handleObserver();console.warn("[MazAos](runAnimations) should be executed on client side")}async handleObserver(){await Me(this.options.delay);const e=new IntersectionObserver(this.handleIntersect.bind(this),{...this.options.observer});for(const a of document.querySelectorAll("[data-maz-aos]")){const n=a.getAttribute("data-maz-aos-anchor");if(n){const s=document.querySelector(n);s?(s.setAttribute("data-maz-aos-children","true"),e.observe(s)):console.warn(`[maz-ui](aos) no element found with selector "${n}"`)}else e.observe(a)}}handleIntersect(e,a){for(const n of e){const r=n.target.getAttribute("data-maz-aos-children")==="true",l=n.target.getAttribute("data-maz-aos")?[n.target]:[];if(r){const c=[...document.querySelectorAll("[data-maz-aos-anchor]")].map(i=>i.getAttribute("data-maz-aos-anchor")===`#${n.target.id}`?i:void 0);for(const i of c)i&&l.push(i)}for(const c of l){const i=c.getAttribute("data-maz-aos-once"),v=typeof i=="string"?i==="true":this.options.animation.once;typeof this.options.observer.threshold=="number"&&n.intersectionRatio>this.options.observer.threshold?(c.getAttribute("data-maz-aos-duration")||(c.style.transitionDuration=`${this.options.animation.duration}ms`,setTimeout(()=>{c.style.transitionDuration="0"},1e3)),c.classList.add("maz-aos-animate"),v&&a.unobserve(c)):c.classList.remove("maz-aos-animate")}}}}let _;const je={install:(t,e)=>{_=new Re(e),t.provide("aos",_),B()&&(e!=null&&e.router?e.router.afterEach(async()=>{_.runAnimations()}):_.runAnimations())}};const He=t=>{if(window.dataLayer&&window.gtag)return;const e=document.createElement("script");e.src=`https://www.googletagmanager.com/gtag/js?id=${t}`,e.async=!0,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),gtag("config",t)},Ve=({id:t})=>{t&&typeof window<"u"&&He(t)};const Fe=$({__name:"ColorContainer",props:{color:{type:String,required:!0},hex:{type:String,required:!0}},setup(t){return(e,a)=>(A(),L("div",{class:I(["color-container rounded",[`--${t.color}`]]),style:Z(`background-color: var(--maz-color-${t.color}); color: var(--maz-color-${t.color}-contrast);`)},[b("span",null,k(t.color)+": "+k(t.hex),1)],6))}});const Ue=S(Fe,[["__scopeId","data-v-4f2137d5"]]),Ge=["href","title"],Xe=["src","alt"],Ye=$({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,default:"latest"}},setup(t){const e=t,a=d(()=>`https://www.npmjs.com/package/${e.package}`),n=d(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),s=d(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(n.value)}`);return(r,l)=>(A(),L("a",{class:"npm-badge",href:f(a),title:t.package,target:"_blank",rel:"noopener noreferrer"},[b("img",{src:f(s),alt:t.package},null,8,Xe)],8,Ge))}});const Ke=S(Ye,[["__scopeId","data-v-fbd6ca08"]]),Qe={...ve,enhanceApp(t){Ve({id:"G-EM35TM23ZC"});const{app:e,router:{route:a}}=t;e.provide("mazIconPath","/maz-ui-3/icons"),e.component("ColorContainer",Ue),e.component("NpmBadge",Ke),Object.entries(be).forEach(([r,l])=>{e.component(r,l)});const n={persistent:!1,position:"bottom-right",timeout:1e4},s={delay:500,animation:{duration:400,once:!1}};e.use(Se,n),e.use(Be),e.use(je,s),J(()=>a.path,()=>{T&&_.runAnimations()})}};function M(t){if(t.extends){const e=M(t.extends);return{...e,...t,async enhanceApp(a){e.enhanceApp&&await e.enhanceApp(a),t.enhanceApp&&await t.enhanceApp(a)}}}return t}const g=M(Qe),We=$({name:"VitePressApp",setup(){const{site:t}=te();return q(()=>{ae(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),ne(),oe(),se(),g.setup&&g.setup(),()=>re(g.Layout)}});async function Ze(){const t=et(),e=Je();e.provide(ie,t);const a=ce(t.route);return e.provide(le,a),e.component("Content",ue),e.component("ClientOnly",de),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),g.enhanceApp&&await g.enhanceApp({app:e,router:t,siteData:me}),{app:e,router:t,data:a}}function Je(){return pe(We)}function et(){let t=T,e;return fe(a=>{let n=he(a);return t&&(e=n),(t||e===n)&&(n=n.replace(/\.js$/,".lean.js")),T&&(t=!1),ge(()=>import(n),[])},g.NotFound)}T&&Ze().then(({app:t,router:e,data:a})=>{e.go().then(()=>{ee(e.route,a.site),t.mount("#app")})});export{Ze as createApp};
