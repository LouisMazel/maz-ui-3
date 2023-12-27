var f=Object.defineProperty;var F=(e,s,i)=>s in e?f(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i;var l=(e,s,i)=>(F(e,typeof s!="symbol"?s+"":s,i),i);import"./chunks/use-theme-handler.7qAT_BPC.js";import"./chunks/MazToast.vue_vue_type_style_index_1_scoped_c033ac0f_lang.w40geAFS.js";import{d as b,D as c,c as w,k as a,a as o,t as E,I as u,w as r,aa as k,m as d,b as x,R as z,o as y}from"./chunks/framework.z3pCfM0g.js";const B=`
.maz-zoom-img {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  z-index: 1050;
  background-color: hsla(238, 15%, 40%, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.maz-zoom-img,
.maz-zoom-img * {
  box-sizing: border-box;
}

.maz-zoom-img .maz-zoom-img__wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 0;
  min-height: 0;
  max-width: 100%;
  max-height: 100%;
  transition: all 300ms ease-in-out;
  opacity: 0;
  transform: scale(0.5);
}

.maz-zoom-img.maz-animate .maz-zoom-img__wrapper {
  opacity: 1;
  transform: scale(1);
}

.maz-zoom-img.maz-animate .maz-zoom-img__loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(238, 15%, 40%, 0.7);
  border-radius: 1rem;
  z-index: 2;
  min-width: 60px;
  min-height: 60px;
}
.maz-zoom-img.maz-animate .maz-zoom-img__loader[hidden] {
  display: none;
}

@-webkit-keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.maz-zoom-img.maz-animate .maz-zoom-img__loader__svg {
  animation: spin .6s linear infinite;
}

.maz-zoom-img img {
  max-width: 100%;
  max-height: 100%;
  min-width: 0;
  border-radius: 1rem;
}

.maz-zoom-img .maz-zoom-btn {
  margin: 0 auto;
  border: none;
  background-color: hsla(0, 0%, 7%, 0.5);
  box-shadow: 0 0 0.5rem 0 hsla(0, 0%, 0%, 0.2);
  height: 2.2rem;
  min-height: 2.2rem;
  width: 2.2rem;
  min-width: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2.2rem;
  cursor: pointer;
  flex: 0 0 auto;
  outline: none;
}

.maz-zoom-img .maz-zoom-btn svg {
  fill: white;
}

.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 1;
}

.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--previous {
  position: absolute;
  left: 0.5rem;
  z-index: 1;
}

.maz-zoom-img .maz-zoom-btn.maz-zoom-btn--next {
  position: absolute;
  right: 0.5rem;
  z-index: 1;
}

.maz-zoom-img .maz-zoom-btn:hover {
  background-color: hsl(0, 0%, 0%);
}`,v={close:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',previous:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',spinner:'<svg width="40px" height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve" class="maz-zoom-img__loader__svg" data-v-6d1cb50c=""><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path></svg>'};class C{constructor(s){l(this,"options");l(this,"loader");l(this,"wrapper");l(this,"img");l(this,"keydownHandler");l(this,"onImgLoadedCallback");l(this,"buttonsAdded");l(this,"defaultOptions",{scale:!0,blur:!0,disabled:!1});l(this,"mouseEnterListener");l(this,"mouseLeaveListener");l(this,"renderPreviewListener");if(!s.value)throw new Error('[MazUI](zoom-img) Image path must be defined. Ex: `v-zoom-img="<PATH_TO_IMAGE>"`');if(typeof s.value=="object"&&!s.value.src)throw new Error("[maz-ui](zoom-img) src of image must be provided");this.buttonsAdded=!1,this.options=this.buildOptions(s),this.keydownHandler=this.keydownLister.bind(this),this.loader=this.getLoader(),this.wrapper=document.createElement("div"),this.wrapper.classList.add("maz-zoom-img__wrapper"),this.wrapper.prepend(this.loader),this.img=document.createElement("img"),this.onImgLoadedCallback=this.onImgLoaded.bind(this),this.imgEventHandler(!0)}buildOptions(s){return{...this.defaultOptions,...typeof s.value=="object"?s.value:{src:s.value}}}get allInstances(){return[...document.querySelectorAll(".maz-zoom-img-instance")]}create(s){this.options.disabled||(s.style.cursor="pointer",setTimeout(()=>s.classList.add("maz-zoom-img-instance")),s.setAttribute("data-zoom-src",this.options.src),this.options.alt&&s.setAttribute("data-zoom-alt",this.options.alt),s.style.transition="all 300ms ease-in-out",this.mouseEnterListener=()=>this.mouseEnter(s),this.mouseLeaveListener=()=>this.mouseLeave(s),this.renderPreviewListener=()=>this.renderPreview(s,this.options),s.addEventListener("mouseenter",this.mouseEnterListener),s.addEventListener("mouseleave",this.mouseLeaveListener),s.addEventListener("click",this.renderPreviewListener))}update(s){this.options=this.buildOptions(s)}remove(s){this.imgEventHandler(!1),s.removeEventListener("mouseenter",this.mouseEnterListener),s.removeEventListener("mouseleave",this.mouseLeaveListener),s.removeEventListener("click",this.renderPreviewListener),s.classList.remove("maz-zoom-img-instance"),s.removeAttribute("data-zoom-src"),s.removeAttribute("data-zoom-alt"),s.style.cursor=""}renderPreview(s,i){s.classList.add("maz-is-open"),this.addStyle(B);const t=document.createElement("div");t.classList.add("maz-zoom-img"),t.setAttribute("id","MazImgPreviewFullsize"),t.addEventListener("click",n=>{t.isEqualNode(n.target)&&this.closePreview()}),typeof i=="object"&&(this.img.setAttribute("src",i.src),i.alt&&this.img.setAttribute("alt",i.alt),this.img.id="MazImgElement"),this.wrapper.append(this.img),t.append(this.wrapper),document.body.append(t),this.keyboardEventHandler(!0),setTimeout(()=>{t&&t.classList.add("maz-animate")},100)}onImgLoaded(){this.wrapper.style.width=`${this.img.width}px`,this.wrapper.style.minWidth="200px",this.loader.hidden=!0;const s=this.getButton(),i=[],t=this.allInstances.length>1;if(!this.buttonsAdded){if(this.buttonsAdded=!0,t){const n=this.getButton("previous"),h=this.getButton("next");i.push(n,h)}this.wrapper.append(s),t&&(this.wrapper.prepend(i[0]),this.wrapper.append(i[1]))}}getLoader(){const s=document.createElement("div");return s.classList.add("maz-zoom-img__loader"),s.innerHTML=v.spinner,s}mouseLeave(s){this.options.scale&&(s.style.transform=""),this.options.blur&&(s.style.filter=""),s.style.zIndex=""}mouseEnter(s){s.style.zIndex="1",this.options.scale&&(s.style.transform="scale(1.1)"),this.options.blur&&(s.style.filter="blur(2px)")}keydownLister(s){s.preventDefault(),(s.key==="Escape"||s.key===" ")&&this.closePreview(),(s.key==="ArrowLeft"||s.key==="ArrowRight")&&this.nextPreviousImage(s.key==="ArrowRight")}getButton(s="close"){const i=document.createElement("button");return i.innerHTML=v[s],i.addEventListener("click",()=>{s==="close"?this.closePreview():this.allInstances&&this.nextPreviousImage(s==="next")}),i.classList.add("maz-zoom-btn"),i.classList.add(`maz-zoom-btn--${s}`),i}closePreview(){const s=document.querySelector("#MazImgPreviewFullsize"),i=document.querySelector("#MazPreviewStyle"),t=document.querySelector(".maz-zoom-img-instance.maz-is-open");t&&t.classList.remove("maz-is-open"),s&&s.classList.remove("maz-animate"),this.keyboardEventHandler(!1),setTimeout(()=>{s&&s.remove(),i&&i.remove()},300)}getNewInstanceIndex(s){return s<0?this.allInstances.length-1:s>=this.allInstances.length?0:s}nextPreviousImage(s){const i=s,t=document.querySelector(".maz-zoom-img-instance.maz-is-open");if(t){const n=this.allInstances.indexOf(t),h=i?n+1:n-1,g=this.allInstances[this.getNewInstanceIndex(h)];g&&this.useNextInstance(t,g)}}useNextInstance(s,i){s.classList.remove("maz-is-open"),i.classList.add("maz-is-open");const t=i.getAttribute("data-zoom-src"),n=i.getAttribute("data-zoom-alt");this.wrapper.style.width="",this.loader.hidden=!1,t&&this.img.setAttribute("src",t),n&&this.img.setAttribute("alt",n)}addStyle(s){const i=document.createElement("style");i.id="MazPreviewStyle",i.textContent=s,document.head.append(i)}keyboardEventHandler(s){if(s)return document.addEventListener("keydown",this.keydownHandler);document.removeEventListener("keydown",this.keydownHandler)}imgEventHandler(s){if(s)return this.img.addEventListener("load",this.onImgLoadedCallback);this.img.removeEventListener("load",this.onImgLoadedCallback)}}let p;const m={created(e,s){p=new C(s),p.create(e)},updated(e,s){p.update(s)},unmounted(e){p.remove(e)}},_={id:"frontmatter-title",tabindex:"-1"},L=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),A=a("blockquote",null,[a("p",null,[o("Can be mixed with "),a("a",{href:"./lazy-img"},"vLazyImg"),o(" directive")])],-1),I=a("h2",{id:"basic-usage",tabindex:"-1"},[o("Basic usage "),a("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic usage"'},"​")],-1),D=a("blockquote",null,[a("p",null,"Click on the photo")],-1),q={src:"https://cdn.artphotolimited.com/images/5ff5a529bd40b83c5a537440/1000x1000/gerard-depardieu-1983.jpg"},M=a("br",null,null,-1),P=a("br",null,null,-1),j=z(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazCard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> overflow-hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://cdn.artphotolimited.com/images/5ff5a529bd40b83c5a537440/1000x1000/gerard-depardieu-1983.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      v-zoom-img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://cdn.artphotolimited.com/images/5ff5a529bd40b83c5a537440/1000x1000/gerard-depardieu-1983.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazCard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazBtn</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-zoom-img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{ </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://pbs.twimg.com/profile_images/598181608198381570/-cFG43y2_400x400.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Show photo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazBtn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { vZoomImg } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;maz-ui&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><br>`,3),H={src:"https://www.francetvinfo.fr/pictures/5u9TF9KLx9yxCgqfDV4k0Zk6R3E/752x423/2014/07/01/edd_1.jpg"},Z=z(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazCard</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> overflow-hidden</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://www.francetvinfo.fr/pictures/5u9TF9KLx9yxCgqfDV4k0Zk6R3E/752x423/2014/07/01/edd_1.jpg&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      v-zoom-img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zoomImgBinding</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">MazCard</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { vZoomImg } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;maz-ui&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> zoomImgBinding</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> vZoomImgBinding</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.francetvinfo.fr/pictures/5u9TF9KLx9yxCgqfDV4k0Zk6R3E/752x423/2014/07/01/edd_1.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;alt image&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// will be set on the zoomed image</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    blur: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scale: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    disabled: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="global-install" tabindex="-1">Global install <a class="header-anchor" href="#global-install" aria-label="Permalink to &quot;Global install&quot;">​</a></h2><p><code>main.ts</code></p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { createApp } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { vZoomImgInstall, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vZoomImgOptions } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;maz-ui&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> createApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vZoomImgInstall)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#app&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>`,4),R=JSON.parse('{"title":"vZoomImg","description":"vZoomImg is a Vue 3 directive to enlarge an image like a modal on click, if you have several images, you can pass them like a carousel","frontmatter":{"title":"vZoomImg","description":"vZoomImg is a Vue 3 directive to enlarge an image like a modal on click, if you have several images, you can pass them like a carousel"},"headers":[],"relativePath":"directives/zoom-img.md","filePath":"directives/zoom-img.md","lastUpdated":1703690183000}'),S={name:"directives/zoom-img.md"},G=b({...S,setup(e){const s={src:"https://www.francetvinfo.fr/pictures/5u9TF9KLx9yxCgqfDV4k0Zk6R3E/752x423/2014/07/01/edd_1.jpg",alt:"alt image",blur:!1,scale:!1,disabled:!1};return(i,t)=>{const n=c("MazCard"),h=c("MazBtn");return y(),w("div",null,[a("h1",_,[o(E(i.$frontmatter.title)+" ",1),L]),a("p",null,E(i.$frontmatter.description),1),A,I,D,u(n,{"overflow-hidden":""},{default:r(()=>[k(a("img",q,null,512),[[d(m),{src:"https://cdn.artphotolimited.com/images/5ff5a529bd40b83c5a537440/1000x1000/gerard-depardieu-1983.jpg"}]])]),_:1}),M,P,k((y(),x(h,null,{default:r(()=>[o(" Show photo ")]),_:1})),[[d(m),{src:"https://pbs.twimg.com/profile_images/598181608198381570/-cFG43y2_400x400.jpg"}]]),j,u(n,{"overflow-hidden":""},{default:r(()=>[k(a("img",H,null,512),[[d(m),s]])]),_:1}),Z])}}});export{R as __pageData,G as default};
