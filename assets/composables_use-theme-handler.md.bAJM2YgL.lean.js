import"./chunks/MazToast.vue_vue_type_style_index_1_scoped_773bc2af_lang.w40geAFS.js";import{u as C}from"./chunks/use-maz-dialog-promise.H2WqUuaC.js";import{d as B,j as T,D as f,c as k,k as s,a as e,t as o,I as l,m as a,n as y,R as q,o as D}from"./chunks/framework.W8l_Wv3U.js";const z={id:"frontmatter-title",tabindex:"-1"},A=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),_=s("h2",{id:"usage",tabindex:"-1"},[e("Usage "),s("a",{class:"header-anchor",href:"#usage","aria-label":'Permalink to "Usage"'},"​")],-1),b={class:"maz-flex maz-gap-4"},v={class:"maz-flex maz-flex-center maz-flex-col maz-text-center maz-gap-2"},x=s("span",null,"Dark",-1),w={class:"maz-flex maz-flex-center maz-flex-col maz-text-center maz-gap-2"},S=s("span",null,"Light",-1),M={class:"maz-flex maz-flex-center maz-flex-col maz-text-center maz-gap-2"},L=s("span",null,"System",-1),H={class:"maz-flex maz-flex-center maz-flex-col maz-text-center maz-gap-2"},V=s("span",null,"Toggle",-1),P=s("h3",{id:"data",tabindex:"-1"},[e("Data "),s("a",{class:"header-anchor",href:"#data","aria-label":'Permalink to "Data"'},"​")],-1),N=s("br",null,null,-1),O=q(`<h2 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p><code>autoSetTheme</code> method, does not store theme value in localStorage but always lets the user&#39;s preferences apply on every visit (some users automatically have light mode during the day and dark at night)</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Always run <code>autoSetTheme</code> method on app initialization and let the user change the theme with <code>toggleTheme</code> or <code>setDarkTheme</code> or <code>setLightTheme</code></p></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p><code>App.vue</code> or <code>layouts/default.vue</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;app&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--has-dark-theme&#39;: hasDarkTheme,</span></span>
<span class="line"><span style="color:#9ECBFF;">      &#39;--has-light-theme&#39;: hasLightTheme,</span></span>
<span class="line"><span style="color:#9ECBFF;">    }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- Theme switching --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;moon&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">fab</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setDarkTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sun&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">fab</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setLightTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;computer-desktop&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">fab</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;setSystemTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;arrow-path&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">fab</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;toggleTheme&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    /&gt;</span></span>
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
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">setSystemTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">theme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">hasDarkTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">hasLightTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">hasSystemTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">selectedTheme</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useThemeHandler</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onBeforeMount</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
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
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;moon&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">fab</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setDarkTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sun&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">fab</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setLightTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;computer-desktop&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">fab</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;setSystemTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">MazBtn</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;arrow-path&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">fab</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lg&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;toggleTheme&quot;</span></span>
<span class="line"><span style="color:#24292E;">    /&gt;</span></span>
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
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">setSystemTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">theme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">hasDarkTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">hasLightTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">hasSystemTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">selectedTheme</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useThemeHandler</span><span style="color:#24292E;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onBeforeMount</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">    * Will automatically set the theme according</span></span>
<span class="line"><span style="color:#6A737D;">    * with the user preferences and add class to &lt;html /&gt; element</span></span>
<span class="line"><span style="color:#6A737D;">    */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">autoSetTheme</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,6),R=JSON.parse('{"title":"useThemeHandler","description":"Vue composable for handling UI theme - Automatically sets dark and light theme and switches between them","frontmatter":{"title":"useThemeHandler","description":"Vue composable for handling UI theme - Automatically sets dark and light theme and switches between them"},"headers":[],"relativePath":"composables/use-theme-handler.md","filePath":"composables/use-theme-handler.md","lastUpdated":1700657502000}'),I={name:"composables/use-theme-handler.md"},G=B({...I,setup(U){const i={darkClass:"dark",lightClass:"light",storageThemeKey:"theme",storageThemeValueDark:"dark",storageThemeValueLight:"light",storageThemeValueSystem:"system"},{autoSetTheme:h,toggleTheme:m,setDarkTheme:u,setLightTheme:F,setSystemTheme:d,theme:p,hasDarkTheme:t,hasLightTheme:c,hasSystemTheme:r,internalTheme:K,selectedTheme:g}=C(i);return T(()=>{h()}),(E,$)=>{const n=f("MazBtn");return D(),k("div",null,[s("h1",z,[e(o(E.$frontmatter.title)+" ",1),A]),s("p",null,o(E.$frontmatter.description),1),_,s("div",b,[s("div",v,[x,l(n,{icon:"moon",fab:"",color:a(t)?"secondary":"primary",class:y(a(p)==="dark"?"!maz-outline !maz-outline-offset-2 !maz-outline-secondary":""),size:"lg",onClick:a(u)},null,8,["color","class","onClick"])]),s("div",w,[S,l(n,{icon:"sun",fab:"",color:a(c)?"secondary":"primary",class:y(a(p)==="light"?"!maz-outline !maz-outline-offset-2 !maz-outline-secondary":""),size:"lg",onClick:a(F)},null,8,["color","class","onClick"])]),s("div",M,[L,l(n,{icon:"computer-desktop",fab:"",color:a(r)?"secondary":"primary",size:"lg",onClick:a(d)},null,8,["color","onClick"])]),s("div",H,[V,l(n,{icon:"arrow-path",fab:"",size:"lg",onClick:a(m)},null,8,["onClick"])])]),P,N,s("code",null,o({theme:a(p),selectedTheme:a(g),hasDarkTheme:a(t),hasLightTheme:a(c),hasSystemTheme:a(r)}),1),O])}}});export{R as __pageData,G as default};
