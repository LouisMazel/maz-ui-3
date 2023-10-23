import"./chunks/MazToast.vue_vue_type_style_index_1_scoped_27f5ac83_lang.4ed993c7.js";import{a as u}from"./chunks/use-maz-dialog-promise.40cb9153.js";import{d as F,j as g,C,o as k,c as B,k as s,a,t as p,H as o,w as e,l as n,Q as D}from"./chunks/framework.ae4b5f68.js";const T={id:"frontmatter-title",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),A=s("h2",{id:"usage",tabindex:"-1"},[a("Usage "),s("a",{class:"header-anchor",href:"#usage","aria-label":'Permalink to "Usage"'},"​")],-1),q=s("br",null,null,-1),_=s("br",null,null,-1),b=s("br",null,null,-1),v=s("br",null,null,-1),z=s("h3",{id:"data",tabindex:"-1"},[a("Data "),s("a",{class:"header-anchor",href:"#data","aria-label":'Permalink to "Data"'},"​")],-1),M=s("br",null,null,-1),w=D(`<h2 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>autoSetTheme</code> method, does not store theme value in localStorage but always lets the user&#39;s preferences apply on every visit (some users automatically have light mode during the day and dark at night)</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Always run <code>autoSetTheme</code> method on app initialization and let the user change the theme with <code>toggleTheme</code> or <code>setDarkTheme</code> or <code>setLightTheme</code></p></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><code>App.vue</code> or <code>layouts/default.vue</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--has-dark-theme&#39;: hasDarkTheme,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--has-light-theme&#39;: hasLightTheme,</span></span>
<span class="line"><span style="color:#9ECBFF;">    }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- Theme switching --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:left-icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;hasDarkTheme ? &#39;moon&#39; : &#39;sun&#39;&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toggleTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Click to toggle</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">left-icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;moon&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setDarkTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Click to set dark mode</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">left-icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sun&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setLightTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Click to set light mode</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { onMounted } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> MazBtn </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui/components/MazBtn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useThemeHandler, </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> ThemeHandlerOptions } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;maz-ui&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// optional</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">options</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ThemeHandlerOptions</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* should be &quot;dark&quot; to works with maz-ui */</span></span>
<span class="line"><span style="color:#E1E4E8;">    darkClass: </span><span style="color:#9ECBFF;">&#39;dark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    lightClass: </span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/* local storage preferences */</span></span>
<span class="line"><span style="color:#E1E4E8;">    storageThemeKey: </span><span style="color:#9ECBFF;">&#39;theme&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    storageThemeValueDark: </span><span style="color:#9ECBFF;">&#39;dark&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    storageThemeValueLight: </span><span style="color:#9ECBFF;">&#39;light&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">autoSetTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">toggleTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">setDarkTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">setLightTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">hasDarkTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">hasLightTheme</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useThemeHandler</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onMounted</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    * Will automatically set the theme according</span></span>
<span class="line"><span style="color:#6A737D;">    * with the user preferences and add class to &lt;html /&gt; element</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">autoSetTheme</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;app&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{</span></span>
<span class="line"><span style="color:#032F62;">      &#39;--has-dark-theme&#39;: hasDarkTheme,</span></span>
<span class="line"><span style="color:#032F62;">      &#39;--has-light-theme&#39;: hasLightTheme,</span></span>
<span class="line"><span style="color:#032F62;">    }&quot;</span></span>
<span class="line"><span style="color:#24292E;">  &gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- Theme switching --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:left-icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;hasDarkTheme ? &#39;moon&#39; : &#39;sun&#39;&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;toggleTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      Click to toggle</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">MazBtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">left-icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;moon&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setDarkTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      Click to set dark mode</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">MazBtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">left-icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sun&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setLightTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      Click to set light mode</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#B31D28;font-style:italic;">MazBtn</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { onMounted } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> MazBtn </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui/components/MazBtn&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useThemeHandler, </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> ThemeHandlerOptions } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;maz-ui&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// optional</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">options</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ThemeHandlerOptions</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* should be &quot;dark&quot; to works with maz-ui */</span></span>
<span class="line"><span style="color:#24292E;">    darkClass: </span><span style="color:#032F62;">&#39;dark&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    lightClass: </span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/* local storage preferences */</span></span>
<span class="line"><span style="color:#24292E;">    storageThemeKey: </span><span style="color:#032F62;">&#39;theme&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    storageThemeValueDark: </span><span style="color:#032F62;">&#39;dark&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    storageThemeValueLight: </span><span style="color:#032F62;">&#39;light&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">autoSetTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">toggleTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">setDarkTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">setLightTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">hasDarkTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">hasLightTheme</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useThemeHandler</span><span style="color:#24292E;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onMounted</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    * Will automatically set the theme according</span></span>
<span class="line"><span style="color:#6A737D;">    * with the user preferences and add class to &lt;html /&gt; element</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">autoSetTheme</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,6),N=JSON.parse('{"title":"useThemeHandler","description":"Vue composable for handling UI theme - Automatically sets dark and light theme and switches between them","frontmatter":{"title":"useThemeHandler","description":"Vue composable for handling UI theme - Automatically sets dark and light theme and switches between them"},"headers":[],"relativePath":"composables/use-theme-handler.md","filePath":"composables/use-theme-handler.md","lastUpdated":1698068523000}'),L={name:"composables/use-theme-handler.md"},O=F({...L,setup(H){const r={darkClass:"dark",lightClass:"light",storageThemeKey:"theme",storageThemeValueDark:"dark",storageThemeValueLight:"light"},{autoSetTheme:E,toggleTheme:y,setDarkTheme:i,setLightTheme:h,theme:m,hasDarkTheme:t,hasLightTheme:d}=u(r);return g(()=>{E()}),(c,V)=>{const l=C("MazBtn");return k(),B("div",null,[s("h1",T,[a(p(c.$frontmatter.title)+" ",1),f]),s("p",null,p(c.$frontmatter.description),1),A,o(l,{"left-icon":n(t)?"moon":"sun",onClick:n(y)},{default:e(()=>[a(" Click to toggle ")]),_:1},8,["left-icon","onClick"]),q,_,o(l,{"left-icon":"moon",onClick:n(i)},{default:e(()=>[a(" Click to set dark mode ")]),_:1},8,["onClick"]),b,v,o(l,{"left-icon":"sun",onClick:n(h)},{default:e(()=>[a(" Click to set light mode ")]),_:1},8,["onClick"]),z,M,s("code",null,p({theme:n(m),hasDarkTheme:n(t),hasLightTheme:n(d)}),1),w])}}});export{N as __pageData,O as default};
