import{_ as v,j as g,r as e,o as h,c as b,a as n,b as a,w as t,F as _,d as s,e as f,E as w}from"./app.78725b94.js";const D=n("h1",{id:"mazdialogpromise",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mazdialogpromise","aria-hidden":"true"},"#"),s(" MazDialogPromise")],-1),z=s("Before you have to import the global css files in your project, follow instructions in "),y=s("Getting Started"),M=s("This component use "),q=s("MazDialog"),P=s(", so it inherits all his props"),A=n("blockquote",null,[n("p",null,[s("This component use "),n("code",null,'<Teleport to="body">'),s(", so you can implement this component everywhere")])],-1),x=n("p",null,"MazDialogPromise is a standalone component to dialog with user, component to show important informations to the user and propose confirmation, you should waiting his response with await.",-1),B=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),s(" Basic usage")],-1),C=n("br",null,null,-1),U=s("Ask to user"),T=s(" Really delete this user ? "),V=s(" Are you really really sure to delete this user ? "),N=s(" User deleted "),R=s(" User is deleted ! "),W=f(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazBtn</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>askToUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Ask to user<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazBtn</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazDialogPromise</span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
      title: <span class="token punctuation">&#39;</span>Delete user<span class="token punctuation">&#39;</span>,
      message: <span class="token punctuation">&#39;</span>Are you sure to delete this user ?<span class="token punctuation">&#39;</span>,
    }<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">identifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>one<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazDialogPromise</span> <span class="token attr-name">identifier</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>two<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
      Really delete this user ?
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
      Are you really really sure to delete this user ?
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazDialogPromise</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazDialog</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>confirmDialog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>
      User deleted
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">&gt;</span></span>
      User is deleted !
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazDialog</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> MazDialogPromise<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    useMazDialogPromise<span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazDialogPromise&#39;</span>
  <span class="token keyword">import</span> MazDialog <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazDialog&#39;</span>

  <span class="token keyword">const</span> confirmDialog <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token punctuation">{</span> showDialogAndWaitChoice <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMazDialogPromise</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">askToUser</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">showDialogAndWaitChoice</span><span class="token punctuation">(</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">showDialogAndWaitChoice</span><span class="token punctuation">(</span><span class="token string">&#39;two&#39;</span><span class="token punctuation">)</span>
    confirmDialog<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props-events-emitted" tabindex="-1"><a class="header-anchor" href="#props-events-emitted" aria-hidden="true">#</a> Props &amp; Events emitted</h2>`,2),j={name:"maz-dialog-promise.html",setup(E){const{showDialogAndWaitChoice:p}=w(),o=g(!1),u=async()=>{await p("one"),await p("two"),o.value=!0};return(F,l)=>{const i=e("RouterLink"),r=e("MazBtn"),c=e("MazDialogPromise"),d=e("MazDialog"),k=e("ComponentPropDoc");return h(),b(_,null,[D,n("blockquote",null,[n("p",null,[z,a(i,{to:"/guide/getting-started.html"},{default:t(()=>[y]),_:1})])]),n("blockquote",null,[n("p",null,[M,a(i,{to:"/components/maz-dialog.html"},{default:t(()=>[q]),_:1}),P])]),A,x,B,C,a(r,{onClick:u},{default:t(()=>[U]),_:1}),n("p",null,[a(c,{data:{title:"Delete user",message:"Are you sure to delete this user ?"},identifier:"one"})]),a(c,{identifier:"two"},{title:t(()=>[T]),default:t(()=>[V]),_:1}),a(d,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=m=>o.value=m)},{title:t(()=>[N]),default:t(()=>[R]),_:1},8,["modelValue"]),W,a(k,{component:"MazDialogPromise"})],64)}}};var S=v(j,[["__file","maz-dialog-promise.html.vue"]]);export{S as default};
