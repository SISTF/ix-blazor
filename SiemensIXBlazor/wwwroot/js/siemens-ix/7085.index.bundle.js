"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[7085],{7085:(e,t,i)=>{i.r(t),i.d(t,{ix_css_grid:()=>n});var s=i(6074);const a=[{name:"sm",query:"only screen and (max-width: 576px)"},{name:"md",query:"only screen and (max-width: 768px)"},{name:"lg",query:"only screen and (max-width: 992px)"}],n=class{constructor(e){(0,s.r)(this,e),this.disposeMediaQueryListener=[],this.mediaQueries=[],this.templates=void 0,this.currentTemplate=void 0}componentWillRender(){this.mediaQueries=a.map((e=>{const t=window.matchMedia(e.query),i=()=>{this.applyTemplate()};return this.disposeMediaQueryListener.push(i),t.addEventListener("change",i),Object.assign(Object.assign({},e),{mediaQuery:t})})),this.applyTemplate()}disconnectedCallback(){this.mediaQueries.forEach(((e,t)=>{e.mediaQuery.removeEventListener("change",this.disposeMediaQueryListener[t])}))}findNextTemplate(e){const t=this.mediaQueries.findIndex((t=>t.name===e));return this.templates[this.mediaQueries[t+1].name]||this.findNextTemplate(this.mediaQueries[t+1].name)}applyTemplate(){let e=this.mediaQueries.find((e=>e.mediaQuery.matches));e||(e=this.mediaQueries[this.mediaQueries.length-1]);const t=this.templates[e.name];this.currentTemplate=t||this.findNextTemplate(e.name)}render(){var e;const t={};return 0!==(null===(e=this.currentTemplate)||void 0===e?void 0:e.length)&&(t["grid-template-areas"]=function(e){let t="";return e.forEach((e=>{t+='"',t=e.reduce(((e,t)=>`${e} ${t}`),t),t+='"\n'})),t}(this.currentTemplate)),(0,s.h)(s.H,{key:"8f1477e0ca42a62ce26698bde9843b7634c6956e",style:t},(0,s.h)("slot",{key:"5af8072e074124a51fedb02eb5538490ab91e22a"}))}};n.style=":host{display:grid;position:relative;row-gap:1.5rem;-moz-column-gap:1.5rem;column-gap:1.5rem}"}}]);