import{d as i,h as F,r,o as y,c as u,a as s,b as d,t as o,e as p,f as c}from"./app.e2a78fef.js";const C={id:"frontmatter-title",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),A=c('<div class="info custom-block"><p class="custom-block-title">INFO</p><p>Before you have to import the global css files in your project, follow instructions in <a href="./../guide/getting-started">Getting Started</a></p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This component use <a href="./maz-input#props-events-emitted">MazInput</a>, so it inherits all his props</p></div><h2 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h2>',3),g=s("br",null,null,-1),h=s("p",null,[s("strong",null,"Value returned")],-1),v=c(`<br><br><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MazInputTags</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">tags</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Enter tags</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">info</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">MazInputTags</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">tags</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">placeholder</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Enter tags</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">secondary</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> MazInputTags </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">maz-ui/components/MazInputTags</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tags </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tags 1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">tags 2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props-events-emitted" tabindex="-1">Props, Events emitted <a class="header-anchor" href="#props-events-emitted" aria-hidden="true">#</a></h2>`,4),_=JSON.parse('{"title":"MazInputTags","description":"MazInputTags is a standalone component like free inputs to help user select many values and return an Array of strings, color option available.","frontmatter":{"title":"MazInputTags","description":"MazInputTags is a standalone component like free inputs to help user select many values and return an Array of strings, color option available."},"headers":[{"level":2,"title":"Basic usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Props, Events emitted","slug":"props-events-emitted","link":"#props-events-emitted","children":[]}],"relativePath":"components/maz-input-tags.md","lastUpdated":1670880092000}'),f={name:"components/maz-input-tags.md"},z=i({...f,setup(E){const a=F(["tags 1","tags 2"]);return(e,n)=>{const t=r("MazInputTags",!0),D=r("ComponentPropDoc");return y(),u("div",null,[s("h1",C,[d(o(e.$frontmatter.title)+" ",1),m]),s("p",null,o(e.$frontmatter.description),1),A,p(t,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=l=>a.value=l),label:"Enter tags",color:"info"},null,8,["modelValue"]),g,p(t,{modelValue:a.value,"onUpdate:modelValue":n[1]||(n[1]=l=>a.value=l),placeholder:"Enter tags",color:"secondary",size:"sm"},null,8,["modelValue"]),h,s("code",null," tags: "+o(a.value),1),v,p(D,{component:"MazInputTags"})])}}});export{_ as __pageData,z as default};
