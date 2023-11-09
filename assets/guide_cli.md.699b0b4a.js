import{_ as l,c as p,k as s,a as o,t as a,Q as e,o as t}from"./chunks/framework.02bfe7fb.js";const m=JSON.parse('{"title":"@mazui/cli","description":"CLI of maz-ui to generate CSS variables file to theming maz-ui","frontmatter":{"title":"@mazui/cli","description":"CLI of maz-ui to generate CSS variables file to theming maz-ui"},"headers":[],"relativePath":"guide/cli.md","filePath":"guide/cli.md","lastUpdated":1699562994000}'),c={name:"guide/cli.md"},r={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),y=e(`<h2 id="config-file" tabindex="-1">Config file <a class="header-anchor" href="#config-file" aria-label="Permalink to &quot;Config file&quot;">​</a></h2><p>Then, in your root folder of your project, add a file named <code>maz-ui.config.{ts, js, mjs, cjs}</code> as bellow (<a href="#maz-ui-configuration-file-typescript-interface">model</a>)</p><p>All colors can be in HEX, RGB, RGBA, HSL, HSLA and named formats.</p><p>No theme variables are required, you can put only one if you wish</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@mazui/cli&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  outputCssFilePath: </span><span style="color:#9ECBFF;">&#39;./css/maz-ui-variables.css&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  theme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    colors: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      primary: </span><span style="color:#9ECBFF;">&#39;hsl(210, 100%, 56%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      secondary: </span><span style="color:#9ECBFF;">&#39;hsl(164, 76%, 46%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      info: </span><span style="color:#9ECBFF;">&#39;hsl(188, 78%, 41%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      success: </span><span style="color:#9ECBFF;">&#39;hsl(80, 61%, 50%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      warning: </span><span style="color:#9ECBFF;">&#39;hsl(40, 97%, 59%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      danger: </span><span style="color:#9ECBFF;">&#39;hsl(1, 100%, 71%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      bgOverlay: </span><span style="color:#9ECBFF;">&#39;hsl(0, 0%, 0% / 30%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      lightTheme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        textColor: </span><span style="color:#9ECBFF;">&#39;hsl(0, 0%, 85%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        colorMuted: </span><span style="color:#9ECBFF;">&#39;hsla(0, 0%, 0%, 0.54)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        bgColor: </span><span style="color:#9ECBFF;">&#39;hsl(0, 0%, 100%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      darkTheme: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        textColor: </span><span style="color:#9ECBFF;">&#39;hsl(210, 8%, 14%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        colorMuted: </span><span style="color:#9ECBFF;">&#39;hsla(0, 0%, 100%, 0.54)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        bgColor: </span><span style="color:#9ECBFF;">&#39;hsl(235, 16%, 15%)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    borderWidth: </span><span style="color:#9ECBFF;">&#39;0.125rem&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    borderRadius: </span><span style="color:#9ECBFF;">&#39;0.5rem&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    fontFamily: </span><span style="color:#9ECBFF;">\`system-ui, -apple-system, blinkmacsystemfont, &#39;Segoe UI&#39;, roboto, oxygen,</span></span>
<span class="line"><span style="color:#9ECBFF;">    ubuntu, cantarell, &#39;Fira Sans&#39;, &#39;Droid Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@mazui/cli&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  outputCssFilePath: </span><span style="color:#032F62;">&#39;./css/maz-ui-variables.css&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  theme: {</span></span>
<span class="line"><span style="color:#24292E;">    colors: {</span></span>
<span class="line"><span style="color:#24292E;">      primary: </span><span style="color:#032F62;">&#39;hsl(210, 100%, 56%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      secondary: </span><span style="color:#032F62;">&#39;hsl(164, 76%, 46%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      info: </span><span style="color:#032F62;">&#39;hsl(188, 78%, 41%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      success: </span><span style="color:#032F62;">&#39;hsl(80, 61%, 50%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      warning: </span><span style="color:#032F62;">&#39;hsl(40, 97%, 59%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      danger: </span><span style="color:#032F62;">&#39;hsl(1, 100%, 71%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      bgOverlay: </span><span style="color:#032F62;">&#39;hsl(0, 0%, 0% / 30%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      lightTheme: {</span></span>
<span class="line"><span style="color:#24292E;">        textColor: </span><span style="color:#032F62;">&#39;hsl(0, 0%, 85%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        colorMuted: </span><span style="color:#032F62;">&#39;hsla(0, 0%, 0%, 0.54)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        bgColor: </span><span style="color:#032F62;">&#39;hsl(0, 0%, 100%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      darkTheme: {</span></span>
<span class="line"><span style="color:#24292E;">        textColor: </span><span style="color:#032F62;">&#39;hsl(210, 8%, 14%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        colorMuted: </span><span style="color:#032F62;">&#39;hsla(0, 0%, 100%, 0.54)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        bgColor: </span><span style="color:#032F62;">&#39;hsl(235, 16%, 15%)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    borderWidth: </span><span style="color:#032F62;">&#39;0.125rem&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    borderRadius: </span><span style="color:#032F62;">&#39;0.5rem&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    fontFamily: </span><span style="color:#032F62;">\`system-ui, -apple-system, blinkmacsystemfont, &#39;Segoe UI&#39;, roboto, oxygen,</span></span>
<span class="line"><span style="color:#032F62;">    ubuntu, cantarell, &#39;Fira Sans&#39;, &#39;Droid Sans&#39;, &#39;Helvetica Neue&#39;, sans-serif\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="generate-file" tabindex="-1">Generate file <a class="header-anchor" href="#generate-file" aria-label="Permalink to &quot;Generate file&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">maz-ui</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">generate-css-vars</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">maz-ui</span><span style="color:#24292E;"> </span><span style="color:#032F62;">generate-css-vars</span></span></code></pre></div><p>Then, the file will be generated, and you must import it in your project</p><h2 id="maz-ui-configuration-file-typescript-interface" tabindex="-1">Maz-UI configuration file Typescript interface <a class="header-anchor" href="#maz-ui-configuration-file-typescript-interface" aria-label="Permalink to &quot;Maz-UI configuration file Typescript interface&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">MazUiConfig</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Path and name of generate CSS file</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#F97583;">@example</span><span style="color:#6A737D;"> &#39;./css/maz-ui-variables.css&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">outputCssFilePath</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">theme</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">colors</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">primary</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">secondary</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">info</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">danger</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">success</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">warning</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">bgOverlay</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">lightTheme</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">textColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">colorMuted</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">bgColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">darkTheme</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">textColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">colorMuted</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">bgColor</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Border width applied to components like: inputs, card, etc</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">borderWidth</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Radius applied to rounded components like: buttons, inputs, card, etc.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">borderRadius</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">fontFamily</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">string</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">MazUiConfig</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">   * Path and name of generate CSS file</span></span>
<span class="line"><span style="color:#6A737D;">   * </span><span style="color:#D73A49;">@example</span><span style="color:#6A737D;"> &#39;./css/maz-ui-variables.css&#39;</span></span>
<span class="line"><span style="color:#6A737D;">   */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">outputCssFilePath</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">theme</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">colors</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">primary</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">secondary</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">info</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">danger</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">success</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">warning</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">bgOverlay</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">lightTheme</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">textColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">colorMuted</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">bgColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">darkTheme</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">textColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">colorMuted</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">bgColor</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Border width applied to components like: inputs, card, etc</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">borderWidth</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * Radius applied to rounded components like: buttons, inputs, card, etc.</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">borderRadius</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">fontFamily</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,10);function i(n,F,d,g,h,u){return t(),p("div",null,[s("h1",r,[o(a(n.$frontmatter.title)+" ",1),E]),s("p",null,a(n.$frontmatter.description),1),y])}const f=l(c,[["render",i]]);export{m as __pageData,f as default};
