import"./chunks/MazToast.vue_vue_type_style_index_1_scoped_27773562_lang.4ed993c7.js";import"./chunks/use-maz-dialog-promise.e7d99bc7.js";import{u as h}from"./chunks/use-toast.dffd7732.js";import{d as g,h as b,C as y,o as F,c as f,k as e,a as n,t as E,H as s,w as a,l as o,Q as p}from"./chunks/framework.02bfe7fb.js";import"./chunks/inject-strict.f3d8b995.js";const C={id:"frontmatter-title",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),k=p('<div class="info custom-block"><p class="custom-block-title">INFO</p><p>Before you have to import the global css files in your project, follow instructions in <a href="./../guide/getting-started">Getting Started</a></p></div><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h2>',2),D=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">      { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;) },</span></span>
<span class="line"><span style="color:#9ECBFF;">      { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">      { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; } },</span></span>
<span class="line"><span style="color:#9ECBFF;">    ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Dropdown Menu</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazDropdown</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazDropdown </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazDropdown&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">      { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;) },</span></span>
<span class="line"><span style="color:#032F62;">      { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39; },</span></span>
<span class="line"><span style="color:#032F62;">      { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; } },</span></span>
<span class="line"><span style="color:#032F62;">    ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    Dropdown Menu</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">MazDropdown</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazDropdown </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazDropdown&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="custom-dropdown-main-button" tabindex="-1">Custom dropdown main button <a class="header-anchor" href="#custom-dropdown-main-button" aria-label="Permalink to &quot;Custom dropdown main button&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This component uses <a href="./maz-btn">MazBtn</a> has menu button, so it inherits all its props</p></div>`,3),B=p(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">fab</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">pastel</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bars-3&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">    { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;) },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; } },</span></span>
<span class="line"><span style="color:#9ECBFF;">  ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">no-close-on-click</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">fab</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">pastel</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bars-3&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xl&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">    { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;) },</span></span>
<span class="line"><span style="color:#032F62;">    { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39; },</span></span>
<span class="line"><span style="color:#032F62;">    { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; } },</span></span>
<span class="line"><span style="color:#032F62;">  ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">no-close-on-click</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre></div><h2 id="custom-slots" tabindex="-1">Custom slots <a class="header-anchor" href="#custom-slots" aria-label="Permalink to &quot;Custom slots&quot;">​</a></h2>`,2),L={class:"maz-flex maz-items-center maz-gap-3"},q=p(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">    { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;), additionnalData: &#39;https://placekitten.com/240/200&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39;, additionnalData: &#39;https://placekitten.com/340/300&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">    { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; }, additionnalData: &#39;https://placekitten.com/440/400&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">  ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#default</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Customized labels</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#menuitem-label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ item }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;maz-flex maz-items-center maz-gap-2&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazAvatar</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;item.additionnalData&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ item.label }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazDropdown</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">    { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;), additionnalData: &#39;https://placekitten.com/240/200&#39; },</span></span>
<span class="line"><span style="color:#032F62;">    { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39;, additionnalData: &#39;https://placekitten.com/340/300&#39; },</span></span>
<span class="line"><span style="color:#032F62;">    { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; }, additionnalData: &#39;https://placekitten.com/440/400&#39; },</span></span>
<span class="line"><span style="color:#032F62;">  ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#default</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    Customized labels</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#menuitem-label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ item }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;maz-flex maz-items-center maz-gap-2&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">MazAvatar</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;item.additionnalData&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{ item.label }}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">MazDropdown</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="open-programmatically" tabindex="-1">Open programmatically <a class="header-anchor" href="#open-programmatically" aria-label="Permalink to &quot;Open programmatically&quot;">​</a></h2>`,2),_=e("br",null,null,-1),v=e("br",null,null,-1),z=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model:open</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isOpen&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:items</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">      { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;) },</span></span>
<span class="line"><span style="color:#9ECBFF;">      { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39; },</span></span>
<span class="line"><span style="color:#9ECBFF;">      { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; } },</span></span>
<span class="line"><span style="color:#9ECBFF;">    ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Open</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazDropdown</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isOpen = !isOpen&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    Open Dropdown</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isOpen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">MazDropdown</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model:open</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isOpen&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:items</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">      { label: &#39;Action&#39;, action: () =&gt; toast.success(&#39;CLICKED&#39;) },</span></span>
<span class="line"><span style="color:#032F62;">      { label: &#39;Link (href)&#39;, href: &#39;https://www.google.com&#39;, target: &#39;_blank&#39; },</span></span>
<span class="line"><span style="color:#032F62;">      { label: &#39;Router Link&#39;, to: { name: &#39;index&#39; } },</span></span>
<span class="line"><span style="color:#032F62;">    ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    Open</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">MazDropdown</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isOpen = !isOpen&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    Open Dropdown</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">MazBtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isOpen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="position" tabindex="-1">Position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;Position&quot;">​</a></h2>`,2),A={class:"maz-flex maz-gap-3 maz-flex-wrap"},M=p('<h2 id="props-event-slots" tabindex="-1">Props, Event &amp; Slots <a class="header-anchor" href="#props-event-slots" aria-label="Permalink to &quot;Props, Event &amp; Slots&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td>items</td><td>Menu items</td><td>Array</td><td>-</td><td></td></tr><tr><td>open</td><td>Menu should be open?</td><td>boolean</td><td>-</td><td></td></tr><tr><td>id</td><td>id of the menu</td><td>string</td><td>-</td><td>&#39;maz-dropdown&#39;</td></tr><tr><td>trigger</td><td>Should open the dropdown on click, hover or both</td><td>union</td><td>-</td><td>&#39;both&#39;</td></tr><tr><td>color</td><td>Button color</td><td>Color</td><td>-</td><td>&#39;transparent&#39;</td></tr><tr><td>position</td><td>Position of the dropdown</td><td>Position</td><td>-</td><td>&#39;bottom right&#39;</td></tr><tr><td>noCloseOnClick</td><td>Disable close menu on menuitem clicked</td><td>boolean</td><td>-</td><td></td></tr><tr><td>disabled</td><td>Disable menu</td><td>boolean</td><td>-</td><td></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Event name</th><th>Properties</th><th>Description</th></tr></thead><tbody><tr><td>menuitem-clicked</td><td></td><td>emitted when a menu item is clicked</td></tr><tr><td>update:open</td><td><strong>open</strong> <code>boolean</code> - new value</td><td>Triggers when the number changes</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td>Menu Label</td><td></td></tr><tr><td>menuitem</td><td>Custom menu item</td><td><strong>item</strong> <code>Object</code> - menu item</td></tr><tr><td>menuitem-label</td><td>Custom menu item label</td><td><strong>item</strong> <code>Object</code> - menu item</td></tr></tbody></table>',7),T=JSON.parse('{"title":"MazDropdown","description":"MazDropdown is a standalone component","frontmatter":{"title":"MazDropdown","description":"MazDropdown is a standalone component"},"headers":[],"relativePath":"components/maz-dropdown.md","filePath":"components/maz-dropdown.md","lastUpdated":1699298595000}'),x={name:"components/maz-dropdown.md"},N=g({...x,setup(O){const l=h(),c=b(!1);return(d,i)=>{const t=y("MazDropdown",!0),m=y("MazAvatar"),u=y("MazBtn");return F(),f("div",null,[e("h1",C,[n(E(d.$frontmatter.title)+" ",1),w]),e("p",null,E(d.$frontmatter.description),1),k,s(t,{disabled:"",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}}]},{default:a(()=>[n(" Dropdown Menu ")]),_:1},8,["items"]),D,s(t,{color:"primary",fab:"",pastel:"",icon:"bars-3",size:"xl",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}}],"no-close-on-click":""},null,8,["items"]),B,s(t,{items:[{label:"Action",action:()=>o(l).success("CLICKED"),additionnalData:"https://placekitten.com/240/200"},{label:"Link (href)",href:"https://www.google.com",target:"_blank",additionnalData:"https://placekitten.com/340/300"},{label:"Router Link",to:{name:"index"},additionnalData:"https://placekitten.com/440/400"}]},{default:a(()=>[n(" Customized labels ")]),"menuitem-label":a(({item:r})=>[e("div",L,[s(m,{src:r.additionnalData,size:"0.8rem"},null,8,["src"]),e("span",null,E(r.label),1)])]),_:1},8,["items"]),q,e("p",null,"isOpen: "+E(c.value),1),s(t,{open:c.value,"onUpdate:open":i[0]||(i[0]=r=>c.value=r),items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}}]},{default:a(()=>[n(" Open ")]),_:1},8,["open","items"]),_,v,s(u,{onClick:i[1]||(i[1]=r=>c.value=!c.value)},{default:a(()=>[n(" Open Dropdown ")]),_:1}),z,e("div",A,[s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"top right"},{default:a(()=>[n(" top right ")]),_:1},8,["items"]),s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"top left"},{default:a(()=>[n(" top left ")]),_:1},8,["items"]),s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"bottom left"},{default:a(()=>[n(" bottom left ")]),_:1},8,["items"]),s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"bottom right"},{default:a(()=>[n(" bottom right ")]),_:1},8,["items"]),s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"right"},{default:a(()=>[n(" right ")]),_:1},8,["items"]),s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"left"},{default:a(()=>[n(" left ")]),_:1},8,["items"]),s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"top"},{default:a(()=>[n(" top ")]),_:1},8,["items"]),s(t,{color:"theme",items:[{label:"Action",action:()=>o(l).success("CLICKED")},{label:"Link (href)",href:"https://www.google.com",target:"_blank"},{label:"Router Link",to:{name:"index"}},{label:"Long Label To Show Large Menu",to:{name:"index"}}],position:"bottom"},{default:a(()=>[n(" bottom ")]),_:1},8,["items"])]),M])}}});export{T as __pageData,N as default};
