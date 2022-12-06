import{_ as h,f as _,j as f,r as o,o as u,c as w,a as n,b as p,w as k,h as v,i as m,t as l,G as g,F as E,d as e,e as b}from"./app.78725b94.js";const U=n("h1",{id:"mazradiobuttons",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mazradiobuttons","aria-hidden":"true"},"#"),e(" MazRadioButtons")],-1),N=n("p",null,"MazRadioButtons is a stand-alone component to select a value in a list",-1),z=e("Before you have to import the global css files in your project, follow instructions in "),F=e("Getting Started"),x=n("h2",{id:"basic-usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#"),e(" Basic usage")],-1),B=n("p",null,"Select a competition",-1),S=b(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazRadioButtons</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>competitionSelected<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>competitions<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">import</span> MazRadioButtons <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazRadioButtons&#39;</span>

  <span class="token keyword">const</span> competitionSelected <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

   <span class="token keyword">const</span> competitions <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Ligue 1&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;France&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Premier League&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;England&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://crests.football-data.org/770.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Bundesliga&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Germany&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Eredivisie&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Netherlands&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Serie A&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Italy&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Primera Division&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Spain&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;7&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Primeira Liga&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Portugal&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;UEFA Champions League&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Europe&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://crests.football-data.org/EUR.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-slot-template" tabindex="-1"><a class="header-anchor" href="#custom-slot-template" aria-hidden="true">#</a> Custom slot template</h2><p>Select a competition</p>`,3),P={style:{display:"flex"}},R={style:{display:"flex","flex-direction":"column"}},M=n("h2",{id:"orientation-column",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#orientation-column","aria-hidden":"true"},"#"),e(" Orientation - Column")],-1),L=n("p",null,"Select a competition",-1),V={style:{display:"flex"}},C={style:{display:"flex","flex-direction":"column"}},A=b(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazRadioButtons</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>competitionSelected<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>competitions<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">orientation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>col | row<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ option, selected }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MazAvatar</span>
          <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option.areaEnsignUrl<span class="token punctuation">&quot;</span></span>
          <span class="token attr-name">:src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>option.areaEnsignUrl<span class="token punctuation">&quot;</span></span>
          <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">margin-right</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span>
          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0.8rem<span class="token punctuation">&quot;</span></span>
        <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
            {{ option.label }}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ <span class="token punctuation">&#39;</span>maz-text-muted<span class="token punctuation">&#39;</span>: !selected }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            {{ option.areaName }}
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MazRadioButtons</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">import</span> MazRadioButtons <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazRadioButtons&#39;</span>
  <span class="token keyword">import</span> MazAvatar <span class="token keyword">from</span> <span class="token string">&#39;maz-ui/components/MazAvatar&#39;</span>

  <span class="token keyword">const</span> competitionSelected <span class="token operator">=</span> ref<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> competitions <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Ligue 1&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;France&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Premier League&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;England&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://crests.football-data.org/770.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Bundesliga&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Germany&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Eredivisie&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Netherlands&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Serie A&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Italy&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Primera Division&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Spain&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;7&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;Primeira Liga&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Portugal&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;UEFA Champions League&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaName</span><span class="token operator">:</span> <span class="token string">&quot;Europe&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">areaEnsignUrl</span><span class="token operator">:</span> <span class="token string">&quot;https://crests.football-data.org/EUR.svg&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="props-events-emitted" tabindex="-1"><a class="header-anchor" href="#props-events-emitted" aria-hidden="true">#</a> Props &amp; Events emitted</h2>`,2),G=_({name:"maz-radio-buttons.html",setup(D){const a=f(),i=[{value:"1",label:"Ligue 1",areaName:"France",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg"},{value:"2",label:"Premier League",areaName:"England",areaEnsignUrl:"https://crests.football-data.org/770.svg"},{value:"3",label:"Bundesliga",areaName:"Germany",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"},{value:"4",label:"Eredivisie",areaName:"Netherlands",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"},{value:"5",label:"Serie A",areaName:"Italy",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg"},{value:"6",label:"Primera Division",areaName:"Spain",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg"},{value:"7",label:"Primeira Liga",areaName:"Portugal",areaEnsignUrl:"https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg"},{value:"8",label:"UEFA Champions League",areaName:"Europe",areaEnsignUrl:"https://crests.football-data.org/EUR.svg"}];return(I,t)=>{const y=o("RouterLink"),c=o("MazRadioButtons"),d=o("MazAvatar"),q=o("ComponentPropDoc");return u(),w(E,null,[U,N,n("blockquote",null,[n("p",null,[z,p(y,{to:"/guide/getting-started.html"},{default:k(()=>[F]),_:1})])]),x,B,n("p",null,[p(c,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),options:i},null,8,["modelValue"])]),S,n("div",null,[p(c,{modelValue:a.value,"onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s),options:i},{default:k(({option:s,selected:r})=>[n("div",P,[s.areaEnsignUrl?(u(),v(d,{key:0,src:s.areaEnsignUrl,style:{"margin-right":"16px"},size:"0.8rem"},null,8,["src"])):m("",!0),n("div",R,[n("span",null,l(s.label),1),n("span",{class:g({"maz-text-muted":!r})},l(s.areaName),3)])])]),_:1},8,["modelValue"])]),M,L,n("div",null,[p(c,{modelValue:a.value,"onUpdate:modelValue":t[2]||(t[2]=s=>a.value=s),options:i,orientation:"col"},{default:k(({option:s,selected:r})=>[n("div",V,[s.areaEnsignUrl?(u(),v(d,{key:0,src:s.areaEnsignUrl,style:{"margin-right":"16px"},size:"0.8rem"},null,8,["src"])):m("",!0),n("div",C,[n("span",null,l(s.label),1),n("span",{class:g({"maz-text-muted":!r})},l(s.areaName),3)])])]),_:1},8,["modelValue"])]),A,p(q,{component:"MazRadioButtons"})],64)}}});var O=h(G,[["__file","maz-radio-buttons.html.vue"]]);export{O as default};
