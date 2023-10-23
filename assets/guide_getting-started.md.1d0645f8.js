import{_ as e,C as t,o as c,c as r,k as s,a,t as i,H as o,Q as n}from"./chunks/framework.ae4b5f68.js";const N=JSON.parse('{"title":"Getting Started","description":"Documentation to help you install the maz-ui library","frontmatter":{"title":"Getting Started","description":"Documentation to help you install the maz-ui library"},"headers":[],"relativePath":"guide/getting-started.md","filePath":"guide/getting-started.md","lastUpdated":1698068523000}'),y={name:"guide/getting-started.md"},E={id:"frontmatter-title",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),m=n('<h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><ul><li><a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node.js v12+</a></li><li><a href="https://v3.vuejs.org/" target="_blank" rel="noreferrer">Vue 3</a> or <a href="https://v3.nuxtjs.org/" target="_blank" rel="noreferrer">Nuxt 3</a></li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2>',3),u=n(`<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">maz-ui</span></span>
<span class="line"><span style="color:#6A737D;"># or pnpm add maz-ui</span></span>
<span class="line"><span style="color:#6A737D;"># or yarn add maz-ui</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">maz-ui</span></span>
<span class="line"><span style="color:#6A737D;"># or pnpm add maz-ui</span></span>
<span class="line"><span style="color:#6A737D;"># or yarn add maz-ui</span></span></code></pre></div>`,1),h={id:"vue-js",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#vue-js","aria-label":'Permalink to "Vue JS <NpmBadge package="vue" />"'},"​",-1),g=n(`<p>In the <code>main.js</code> or <code>main.ts</code>, import main maz-ui CSS file before your own CSS</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/css/main.css&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/css/path_to_your_main_file.css&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/css/main.css&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/css/path_to_your_main_file.css&#39;</span></span></code></pre></div>`,2),_={id:"nuxt-js",tabindex:"-1"},b=s("a",{class:"header-anchor",href:"#nuxt-js","aria-label":'Permalink to "Nuxt JS <NpmBadge package="nuxt" />"'},"​",-1),C=n(`<p>A Nuxt Module is available to install the library. Take advantage of the <strong>automatic import</strong> of CSS files, components, composables and plugins.</p><p><strong>Follow the <a href="./nuxt">Nuxt Module Documentation</a> and see options</strong></p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineNuxtConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  modules: [</span><span style="color:#9ECBFF;">&#39;maz-ui/nuxt&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineNuxtConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  modules: [</span><span style="color:#032F62;">&#39;maz-ui/nuxt&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><hr><h2 id="recommendations" tabindex="-1">Recommendations <a class="header-anchor" href="#recommendations" aria-label="Permalink to &quot;Recommendations&quot;">​</a></h2><p>To optimize your bundle size, it&#39;s recommended to use the partial import</p><h3 id="global-component-installation-recommended" tabindex="-1">Global component installation (recommended) <a class="header-anchor" href="#global-component-installation-recommended" aria-label="Permalink to &quot;Global component installation (recommended)&quot;">​</a></h3><blockquote><p>Example with some components</p></blockquote><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazBtn </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazBtn&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazInput </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazInput&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazPhoneNumberInput </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazPhoneNumberInput&#39;</span></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">...</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MazBtn&#39;</span><span style="color:#E1E4E8;">, MazBtn)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MazInput&#39;</span><span style="color:#E1E4E8;">, MazInput)</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;MazPhoneNumberInput&#39;</span><span style="color:#E1E4E8;">, MazPhoneNumberInput)</span></span>
<span class="line"><span style="color:#F97583;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazBtn </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazBtn&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazInput </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazInput&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazPhoneNumberInput </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazPhoneNumberInput&#39;</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">...</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MazBtn&#39;</span><span style="color:#24292E;">, MazBtn)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MazInput&#39;</span><span style="color:#24292E;">, MazInput)</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;MazPhoneNumberInput&#39;</span><span style="color:#24292E;">, MazPhoneNumberInput)</span></span>
<span class="line"><span style="color:#D73A49;">...</span></span></code></pre></div><h3 id="component-import" tabindex="-1">Component import <a class="header-anchor" href="#component-import" aria-label="Permalink to &quot;Component import&quot;">​</a></h3><blockquote><p>Import the module chosen directly in your component</p></blockquote><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span><span style="color:#E1E4E8;">&gt;Button&lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazBtn </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazBtn&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span><span style="color:#24292E;">&gt;Button&lt;/</span><span style="color:#B31D28;font-style:italic;">MazBtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazBtn </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazBtn&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="not-recommended" tabindex="-1">Not recommended <a class="header-anchor" href="#not-recommended" aria-label="Permalink to &quot;Not recommended&quot;">​</a></h3><br><h4 id="fully-library-installation" tabindex="-1">Fully library installation <a class="header-anchor" href="#fully-library-installation" aria-label="Permalink to &quot;Fully library installation&quot;">​</a></h4><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> components </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/css/main.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">(components).</span><span style="color:#B392F0;">forEach</span><span style="color:#E1E4E8;">(([</span><span style="color:#FFAB70;">componentName</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">component</span><span style="color:#E1E4E8;">]) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  app.</span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">(componentName, component)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> components </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/css/main.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">entries</span><span style="color:#24292E;">(components).</span><span style="color:#6F42C1;">forEach</span><span style="color:#24292E;">(([</span><span style="color:#E36209;">componentName</span><span style="color:#24292E;">, </span><span style="color:#E36209;">component</span><span style="color:#24292E;">]) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  app.</span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">(componentName, component)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="typescript-users-not-required" tabindex="-1">Typescript Users (not required) <a class="header-anchor" href="#typescript-users-not-required" aria-label="Permalink to &quot;Typescript Users (not required)&quot;">​</a></h2><p>Now the module resolution <code>Node</code> is deprecated, for a better Typescript compatibility, please use <code>Node16</code>, <code>NodeNext</code> or <code>Bundler</code>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The module resolution options <code>Node</code> still work</p></div><p><code>tsconfig.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;compilerOptions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;moduleResolution&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;NodeNext&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;compilerOptions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;moduleResolution&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;NodeNext&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,21);function f(l,B,A,v,z,k){const p=t("NpmBadge");return c(),r("div",null,[s("h1",E,[a(i(l.$frontmatter.title)+" ",1),d]),m,o(p,{package:"maz-ui","dist-tag":"latest"}),u,s("h2",h,[a("Vue JS "),o(p,{package:"vue"}),a(),F]),g,s("h2",_,[a("Nuxt JS "),o(p,{package:"nuxt"}),a(),b]),C])}const q=e(y,[["render",f]]);export{N as __pageData,q as default};
