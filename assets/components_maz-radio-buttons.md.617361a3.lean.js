import{d as m,h as v,C as u,o as r,c as B,k as a,a as h,t as p,H as E,w as d,Q as o,b as F,e as q,n as g}from"./chunks/framework.02bfe7fb.js";const C={id:"frontmatter-title",tabindex:"-1"},f=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),b=o('<div class="info custom-block"><p class="custom-block-title">INFO</p><p>Before you have to import the global css files in your project, follow instructions in <a href="./../guide/getting-started">Getting Started</a></p></div><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic usage&quot;">​</a></h2><p>Select a competition</p>',3),_=o(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazRadioButtons</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedCompetition&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;competitions&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazRadioButtons </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazRadioButtons&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedCompetition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">competitions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Ligue 1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;France&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Premier League&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;England&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://crests.football-data.org/770.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;3&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Bundesliga&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Germany&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;4&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Eredivisie&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Netherlands&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Serie A&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Italy&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;6&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Primera Division&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Spain&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;7&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Primeira Liga&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Portugal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;8&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;UEFA Champions League&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Europe&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://crests.football-data.org/EUR.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">MazRadioButtons</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedCompetition&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;competitions&quot;</span></span>
<span class="line"><span style="color:#24292E;">  /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazRadioButtons </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazRadioButtons&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedCompetition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">   </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">competitions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Ligue 1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;France&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Premier League&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;England&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://crests.football-data.org/770.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Bundesliga&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Germany&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;4&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Eredivisie&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Netherlands&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Serie A&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Italy&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;6&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Primera Division&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Spain&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;7&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Primeira Liga&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Portugal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;8&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;UEFA Champions League&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Europe&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://crests.football-data.org/EUR.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="custom-slot-template" tabindex="-1">Custom slot template <a class="header-anchor" href="#custom-slot-template" aria-label="Permalink to &quot;Custom slot template&quot;">​</a></h2><p>Select a competition</p>`,3),k={style:{display:"flex"}},A={style:{display:"flex","flex-direction":"column"}},D=o(`<div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">MazRadioButtons</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedCompetition&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">:options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;competitions&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;secondary&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ option, selected }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;display: flex;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazAvatar</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;margin-right: 16px;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.8rem&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;display: flex; flex-direction: column;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {{ option.label }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ &#39;maz-text-muted&#39;: !selected }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          {{ option.areaName }}</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazRadioButtons</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">MazRadioButtons</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedCompetition&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">:options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;competitions&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;secondary&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#default</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ option, selected }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;display: flex;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#B31D28;font-style:italic;">MazAvatar</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;margin-right: 16px;&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0.8rem&quot;</span></span>
<span class="line"><span style="color:#24292E;">      /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;display: flex; flex-direction: column;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {{ option.label }}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ &#39;maz-text-muted&#39;: !selected }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          {{ option.areaName }}</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">MazRadioButtons</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="orientation-column" tabindex="-1">Orientation - Column <a class="header-anchor" href="#orientation-column" aria-label="Permalink to &quot;Orientation - Column&quot;">​</a></h2><p>Select a competition</p>`,3),w={style:{display:"flex"}},U={style:{display:"flex","flex-direction":"column"}},N=o(`<details class="details custom-block"><summary>Show code</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazRadioButtons</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;selectedCompetition&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;competitions&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">orientation</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;col | row&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{ option, selected }</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;display: flex;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazAvatar</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">v-if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;margin-right: 16px;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.8rem&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;display: flex; flex-direction: column;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            {{ option.label }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ &#39;maz-text-muted&#39;: !selected }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            {{ option.areaName }}</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazRadioButtons</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazRadioButtons </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazRadioButtons&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazAvatar </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazAvatar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">selectedCompetition</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">string</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">competitions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Ligue 1&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;France&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Premier League&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;England&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://crests.football-data.org/770.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;3&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Bundesliga&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Germany&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;4&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Eredivisie&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Netherlands&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;5&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Serie A&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Italy&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;6&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Primera Division&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Spain&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;7&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;Primeira Liga&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Portugal&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      value: </span><span style="color:#9ECBFF;">&quot;8&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&quot;UEFA Champions League&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaName: </span><span style="color:#9ECBFF;">&quot;Europe&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      areaEnsignUrl: </span><span style="color:#9ECBFF;">&quot;https://crests.football-data.org/EUR.svg&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#B31D28;font-style:italic;">MazRadioButtons</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;selectedCompetition&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;competitions&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">orientation</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;col | row&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{ option, selected }</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;display: flex;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#B31D28;font-style:italic;">MazAvatar</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">v-if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;option.areaEnsignUrl&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;margin-right: 16px;&quot;</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0.8rem&quot;</span></span>
<span class="line"><span style="color:#24292E;">        /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;display: flex; flex-direction: column;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            {{ option.label }}</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ &#39;maz-text-muted&#39;: !selected }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">            {{ option.areaName }}</span></span>
<span class="line"><span style="color:#24292E;">          &lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#B31D28;font-style:italic;">MazRadioButtons</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazRadioButtons </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazRadioButtons&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazAvatar </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazAvatar&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">selectedCompetition</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">string</span><span style="color:#24292E;">&gt;()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">competitions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Ligue 1&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;France&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Premier League&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;England&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://crests.football-data.org/770.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;3&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Bundesliga&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Germany&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;4&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Eredivisie&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Netherlands&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;5&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Serie A&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Italy&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;6&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Primera Division&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Spain&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;7&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;Primeira Liga&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Portugal&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      value: </span><span style="color:#032F62;">&quot;8&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&quot;UEFA Champions League&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaName: </span><span style="color:#032F62;">&quot;Europe&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      areaEnsignUrl: </span><span style="color:#032F62;">&quot;https://crests.football-data.org/EUR.svg&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="props-event-slots" tabindex="-1">Props, Event &amp; Slots <a class="header-anchor" href="#props-event-slots" aria-label="Permalink to &quot;Props, Event &amp; Slots&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Prop name</th><th>Description</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td>modelValue</td><td></td><td>string|number</td><td>-</td><td>undefined</td></tr><tr><td>options</td><td></td><td>ButtonsRadioOption[]</td><td>-</td><td></td></tr><tr><td>name</td><td></td><td>HTMLInputElement[&#39;name&#39;]</td><td>-</td><td>&#39;MazButtonsRadio&#39;</td></tr><tr><td>color</td><td></td><td>Color</td><td>-</td><td>&#39;primary&#39;</td></tr><tr><td>noElevation</td><td></td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>orientation</td><td></td><td>string</td><td><code>row</code>, <code>col</code></td><td>&#39;row&#39;</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Event name</th><th>Properties</th><th>Description</th></tr></thead><tbody><tr><td>update:model-value</td><td></td><td></td></tr><tr><td>change</td><td></td><td></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Bindings</th></tr></thead><tbody><tr><td>default</td><td></td><td><br></td></tr></tbody></table>`,8),M=JSON.parse('{"title":"MazRadioButtons","description":"MazRadioButtons is a standalone component to select a value in a list. Made with native HTMLInputElement type radio","frontmatter":{"title":"MazRadioButtons","description":"MazRadioButtons is a standalone component to select a value in a list. Made with native HTMLInputElement type radio"},"headers":[],"relativePath":"components/maz-radio-buttons.md","filePath":"components/maz-radio-buttons.md","lastUpdated":1699361656000}'),z={name:"components/maz-radio-buttons.md"},R=m({...z,setup(P){const n=v(),t=[{value:"1",label:"Ligue 1",areaName:"France",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"},{value:"2",label:"Premier League",areaName:"England",areaEnsignUrl:"https://crests.football-data.org/770.svg"},{value:"3",label:"Bundesliga",areaName:"Germany",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"},{value:"4",label:"Eredivisie",areaName:"Netherlands",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"},{value:"5",label:"Serie A",areaName:"Italy",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"},{value:"6",label:"Primera Division",areaName:"Spain",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"},{value:"7",label:"Primeira Liga",areaName:"Portugal",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"},{value:"8",label:"UEFA Champions League",areaName:"Europe",areaEnsignUrl:"https://crests.football-data.org/EUR.svg"}];return(y,l)=>{const e=u("MazRadioButtons",!0),i=u("MazAvatar");return r(),B("div",null,[a("h1",C,[h(p(y.$frontmatter.title)+" ",1),f]),a("p",null,p(y.$frontmatter.description),1),b,E(e,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=s=>n.value=s),options:t},null,8,["modelValue"]),_,a("div",null,[E(e,{modelValue:n.value,"onUpdate:modelValue":l[1]||(l[1]=s=>n.value=s),options:t,color:"secondary"},{default:d(({option:s,selected:c})=>[a("div",k,[s.areaEnsignUrl?(r(),F(i,{key:0,src:s.areaEnsignUrl,style:{"margin-right":"16px"},size:"0.8rem"},null,8,["src"])):q("",!0),a("div",A,[a("span",null,p(s.label),1),a("span",{class:g({"maz-text-muted":!c})},p(s.areaName),3)])])]),_:1},8,["modelValue"])]),D,a("div",null,[E(e,{modelValue:n.value,"onUpdate:modelValue":l[2]||(l[2]=s=>n.value=s),options:t,orientation:"col"},{default:d(({option:s,selected:c})=>[a("div",w,[s.areaEnsignUrl?(r(),F(i,{key:0,src:s.areaEnsignUrl,style:{"margin-right":"16px"},size:"0.8rem"},null,8,["src"])):q("",!0),a("div",U,[a("span",null,p(s.label),1),a("span",{class:g({"maz-text-muted":!c})},p(s.areaName),3)])])]),_:1},8,["modelValue"])]),N])}}});export{M as __pageData,R as default};
