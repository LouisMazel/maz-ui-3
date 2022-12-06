import{_ as d,j as k,r as p,o as m,c as v,a as n,b as t,w as e,F as h,d as s,e as g}from"./app.78725b94.js";const _=n("h1",{id:"mazbottomsheet",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mazbottomsheet","aria-hidden":"true"},"#"),s(" MazBottomSheet")],-1),b=s("Before you have to import the global css files in your project, follow instructions in "),f=s("Getting Started"),z=n("blockquote",null,[n("p",null,[s("This component use "),n("code",null,'<Teleport to="body">'),s(", so you can implement this component everywhere")])],-1),B=s("This component use "),q=s("MazBackdrop"),x=s(", so it inherits all his props"),M=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),s(" Basic usage")],-1),S=n("br",null,null,-1),y=s("Open Bottom Sheet"),w=n("h3",{class:"maz-text-center"}," Your content ",-1),C={class:"maz-flex maz-flex-center"},O=s(" Close Bottom Sheet "),V=g(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazBtn</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpen = true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Open Bottom Sheet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazBtn</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazBottomSheet</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpen<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maz-text-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Your content
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>maz-flex maz-flex-center<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazBtn</span>
        <span class="token attr-name">outline</span>
        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isOpen = false<span class="token punctuation">&quot;</span></span>
      <span class="token punctuation">&gt;</span></span>
        Close Bottom Sheet
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazBtn</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazBottomSheet</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">import</span> MazBottomSheet <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazBottomSheet&#39;</span>

    <span class="token keyword">const</span> isOpen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props-events-emitted" tabindex="-1"><a class="header-anchor" href="#props-events-emitted" aria-hidden="true">#</a> Props &amp; Events emitted</h2>`,2),N={name:"maz-bottom-sheet.html",setup(T){const o=k(!1);return(j,a)=>{const c=p("RouterLink"),i=p("MazBtn"),u=p("MazBottomSheet"),r=p("ComponentPropDoc");return m(),v(h,null,[_,n("blockquote",null,[n("p",null,[b,t(c,{to:"/guide/getting-started.html"},{default:e(()=>[f]),_:1})])]),z,n("blockquote",null,[n("p",null,[B,t(c,{to:"/components/maz-backdrop.html"},{default:e(()=>[q]),_:1}),x])]),M,S,t(i,{onClick:a[0]||(a[0]=l=>o.value=!0)},{default:e(()=>[y]),_:1}),t(u,{modelValue:o.value,"onUpdate:modelValue":a[2]||(a[2]=l=>o.value=l)},{default:e(()=>[w,n("div",C,[t(i,{outline:"",onClick:a[1]||(a[1]=l=>o.value=!1)},{default:e(()=>[O]),_:1})])]),_:1},8,["modelValue"]),V,t(r,{component:"MazBottomSheet"})],64)}}};var D=d(N,[["__file","maz-bottom-sheet.html.vue"]]);export{D as default};
