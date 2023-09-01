import{u as c,d as D,r as y,v as F,b as i,F as s,L as a,X as l,t as B,R as u,M as m}from"./chunks/framework.9757f4a9.js";import{c as d}from"./chunks/currency.a4106e0e.js";import"./chunks/user-visibilty.7bd1040d.js";const E={id:"frontmatter-title",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),b=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[a("This module uses the native api "),s("a",{href:"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"noreferrer"},"Intl.NumberFormat"),a(" from browsers")])],-1),f=s("p",null,"Enter only numbers",-1),h={style:{padding:"16px","margin-top":"16px","background-color":"var(--maz-color-bg-lighter)"},class:"flex flex-center rounded gap-05"},g=u(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">MazInput</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">numberValue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">padding: 16px; margin-top: 16px; background-color: var(--maz-color-bg-lighter);</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#BABED8;">    {{ priceFormatted }}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">currency</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maz-ui</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">ref</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">computed</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> numberValue </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#BABED8;">(</span><span style="color:#F78C6C;">69</span><span style="color:#BABED8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> priceFormatted </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">computed</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#82AAFF;">currency</span><span style="color:#BABED8;">(numberValue</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">value</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fr-FR</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">currency</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">EUR</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">  )</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><blockquote><p>All options from <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat" target="_blank" rel="noreferrer">Intl.NumberFormat</a> are availables</p></blockquote><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">FilterCurrencyOptions</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Intl</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">NumberFormatOptions</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">round</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,4),x=JSON.parse('{"title":"currency","description":"The module currency is a function that formats numbers to currency","frontmatter":{"title":"currency","description":"The module currency is a function that formats numbers to currency"},"headers":[],"relativePath":"helpers/currency.md","filePath":"helpers/currency.md","lastUpdated":1693606338000}'),v={name:"helpers/currency.md"},I=c({...v,setup(C){const n=D(69),e=y(()=>d(n.value,"fr-FR",{currency:"EUR"}));return(o,p)=>{const t=m("MazInput");return F(),i("div",null,[s("h1",E,[a(l(o.$frontmatter.title)+" ",1),A]),s("p",null,l(o.$frontmatter.description),1),b,f,B(t,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=r=>n.value=r),type:"number"},null,8,["modelValue"]),s("div",h,[a(" formatted value: "),s("strong",null,l(e.value),1)]),g])}}});export{x as __pageData,I as default};
