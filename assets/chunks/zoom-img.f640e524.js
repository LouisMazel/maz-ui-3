var l=Object.defineProperty;var c=(o,e,t)=>e in o?l(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>(c(o,typeof e!="symbol"?e+"":e,t),t);const h=`
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
}`,d={close:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',previous:'<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',spinner:'<svg width="40px" height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" viewBox="0 0 50 50" xml:space="preserve" class="maz-zoom-img__loader__svg" data-v-6d1cb50c=""><path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"></path></svg>'};class u{constructor(e){s(this,"options");s(this,"loader");s(this,"wrapper");s(this,"img");s(this,"keydownHandler");s(this,"onImgLoadedCallback");s(this,"buttonsAdded");s(this,"defaultOptions",{scale:!0,blur:!0,disabled:!1});s(this,"mouseEnterListener");s(this,"mouseLeaveListener");s(this,"renderPreviewListener");if(!e.value)throw new Error('[MazUI](zoom-img) Image path must be defined. Ex: `v-zoom-img="<PATH_TO_IMAGE>"`');if(typeof e.value=="object"&&!e.value.src)throw new Error("[maz-ui](zoom-img) src of image must be provided");this.buttonsAdded=!1,this.options=this.buildOptions(e),this.keydownHandler=this.keydownLister.bind(this),this.loader=this.getLoader(),this.wrapper=document.createElement("div"),this.wrapper.classList.add("maz-zoom-img__wrapper"),this.wrapper.prepend(this.loader),this.img=document.createElement("img"),this.onImgLoadedCallback=this.onImgLoaded.bind(this),this.imgEventHandler(!0)}buildOptions(e){return{...this.defaultOptions,...typeof e.value=="object"?e.value:{src:e.value}}}get allInstances(){return[...document.querySelectorAll(".maz-zoom-img-instance")]}create(e){this.options.disabled||(e.style.cursor="pointer",setTimeout(()=>e.classList.add("maz-zoom-img-instance")),e.setAttribute("data-zoom-src",this.options.src),this.options.alt&&e.setAttribute("data-zoom-alt",this.options.alt),e.style.transition="all 300ms ease-in-out",this.mouseEnterListener=()=>this.mouseEnter(e),this.mouseLeaveListener=()=>this.mouseLeave(e),this.renderPreviewListener=()=>this.renderPreview(e,this.options),e.addEventListener("mouseenter",this.mouseEnterListener),e.addEventListener("mouseleave",this.mouseLeaveListener),e.addEventListener("click",this.renderPreviewListener))}update(e){this.options=this.buildOptions(e)}remove(e){this.imgEventHandler(!1),e.removeEventListener("mouseenter",this.mouseEnterListener),e.removeEventListener("mouseleave",this.mouseLeaveListener),e.removeEventListener("click",this.renderPreviewListener),e.classList.remove("maz-zoom-img-instance"),e.removeAttribute("data-zoom-src"),e.removeAttribute("data-zoom-alt"),e.style.cursor=""}renderPreview(e,t){e.classList.add("maz-is-open"),this.addStyle(h);const i=document.createElement("div");i.classList.add("maz-zoom-img"),i.setAttribute("id","MazImgPreviewFullsize"),i.addEventListener("click",n=>{i.isEqualNode(n.target)&&this.closePreview()}),typeof t=="object"&&(this.img.setAttribute("src",t.src),t.alt&&this.img.setAttribute("alt",t.alt),this.img.id="MazImgElement"),this.wrapper.append(this.img),i.append(this.wrapper),document.body.append(i),this.keyboardEventHandler(!0),setTimeout(()=>{i&&i.classList.add("maz-animate")},100)}onImgLoaded(){this.wrapper.style.width=`${this.img.width}px`,this.wrapper.style.minWidth="200px",this.loader.hidden=!0;const e=this.getButton(),t=[],i=this.allInstances.length>1;if(!this.buttonsAdded){if(this.buttonsAdded=!0,i){const n=this.getButton("previous"),r=this.getButton("next");t.push(n,r)}this.wrapper.append(e),i&&(this.wrapper.prepend(t[0]),this.wrapper.append(t[1]))}}getLoader(){const e=document.createElement("div");return e.classList.add("maz-zoom-img__loader"),e.innerHTML=d.spinner,e}mouseLeave(e){this.options.scale&&(e.style.transform=""),this.options.blur&&(e.style.filter=""),e.style.zIndex=""}mouseEnter(e){e.style.zIndex="1",this.options.scale&&(e.style.transform="scale(1.1)"),this.options.blur&&(e.style.filter="blur(2px)")}keydownLister(e){e.preventDefault(),(e.key==="Escape"||e.key===" ")&&this.closePreview(),(e.key==="ArrowLeft"||e.key==="ArrowRight")&&this.nextPreviousImage(e.key==="ArrowRight")}getButton(e="close"){const t=document.createElement("button");return t.innerHTML=d[e],t.addEventListener("click",()=>{e==="close"?this.closePreview():this.allInstances&&this.nextPreviousImage(e==="next")}),t.classList.add("maz-zoom-btn"),t.classList.add(`maz-zoom-btn--${e}`),t}closePreview(){const e=document.querySelector("#MazImgPreviewFullsize"),t=document.querySelector("#MazPreviewStyle"),i=document.querySelector(".maz-zoom-img-instance.maz-is-open");i&&i.classList.remove("maz-is-open"),e&&e.classList.remove("maz-animate"),this.keyboardEventHandler(!1),setTimeout(()=>{e&&e.remove(),t&&t.remove()},300)}getNewInstanceIndex(e){return e<0?this.allInstances.length-1:e>=this.allInstances.length?0:e}nextPreviousImage(e){const t=e,i=document.querySelector(".maz-zoom-img-instance.maz-is-open");if(i){const n=this.allInstances.indexOf(i),r=t?n+1:n-1,m=this.allInstances[this.getNewInstanceIndex(r)];m&&this.useNextInstance(i,m)}}useNextInstance(e,t){e.classList.remove("maz-is-open"),t.classList.add("maz-is-open");const i=t.getAttribute("data-zoom-src"),n=t.getAttribute("data-zoom-alt");this.wrapper.style.width="",this.loader.hidden=!1,i&&this.img.setAttribute("src",i),n&&this.img.setAttribute("alt",n)}addStyle(e){const t=document.createElement("style");t.id="MazPreviewStyle",t.textContent=e,document.head.append(t)}keyboardEventHandler(e){if(e)return document.addEventListener("keydown",this.keydownHandler);document.removeEventListener("keydown",this.keydownHandler)}imgEventHandler(e){if(e)return this.img.addEventListener("load",this.onImgLoadedCallback);this.img.removeEventListener("load",this.onImgLoadedCallback)}}let a;const g={created(o,e){a=new u(e),a.create(o)},updated(o,e){a.update(e)},unmounted(o){a.remove(o)}};export{g as v};
