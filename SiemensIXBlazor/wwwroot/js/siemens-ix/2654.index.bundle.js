"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[2654],{2976:(e,i,a)=>{a.d(i,{a:()=>t,b:()=>l,g:()=>o});const t=e=>e?"true":"false",o=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let i;try{i=new URL(e)}catch(e){return!1}return"http:"===i.protocol||"https:"===i.protocol})(e))return"Unknown";if((i=e)&&"string"==typeof i&&i.startsWith("data:image/svg+xml"))return"Unknown";var i;const a=e.replace("-filled","").split("-").map((e=>{const i=e.trim(),a=i.replace(/\d+/g,"");return 0===a.length?i:a})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===a.length?"Unknown":a},l=(e,i=[])=>{const a={};return r.forEach((t=>{e.hasAttribute(t)&&(null===e.getAttribute(t)||i.includes(t)||(a[t]=e.getAttribute(t),e.removeAttribute(t)))})),a},r=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},2654:(e,i,a)=>{a.r(i),a.d(i,{ix_blind:()=>n});var t=a(6074),o=a(8137),l=a(2976);let r=0;const n=class{constructor(e){(0,t.r)(this,e),this.collapsedChange=(0,t.c)(this,"collapsedChange",7),this.blindId=++r,this.collapsed=!1,this.label=void 0,this.sublabel=void 0,this.icon=void 0,this.variant="insight"}onHeaderClick(){this.collapsed=!this.collapsed,this.collapsedChange.emit(this.collapsed)}componentDidLoad(){this.animateCollapse(this.collapsed)}get content(){return this.hostElement.shadowRoot.querySelector(".blind-content")}animation(e){this.animateCollapse(e)}animateCollapse(e){e?this.rotateChevronRight():this.rotateChevronDown()}rotateChevronDown(){(0,o.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:90}),(0,o.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:1})}rotateChevronRight(){(0,o.a)({targets:this.chevronRef,duration:150,easing:"easeInOutSine",rotateZ:0}),(0,o.a)({targets:this.content,duration:150,easing:"easeInOutSine",opacity:0})}render(){return(0,t.h)(t.H,{key:"fa737e290302d9121790574a4a88738a0be492a6",class:{[`blind-${this.variant}`]:!0}},(0,t.h)("div",{key:"a30152172426864588f8482a8f94f437948c74a4",class:"blind-header-wrapper"},(0,t.h)("div",{key:"8ee1a8aa21ff58cb88514fd5e428481b99e10728",class:"blind-header-content"},(0,t.h)("ix-icon",{key:"97117ee8008ea0b69e64f2c4a0149ce3b3897f44",class:"collapse-icon",name:"chevron-right-small",color:"insight"===this.variant||"outline"===this.variant?"color-primary":`color-${this.variant}--contrast`,ref:e=>this.chevronRef=e}),(0,t.h)("div",{key:"dbe488db7c5a77b5b09927698395a1f18674308a",class:"blind-header-title",id:`ix-blind-header-title-${this.blindId}`},void 0!==this.label?(0,t.h)(t.F,null,this.icon&&(0,t.h)("ix-icon",{class:"blind-header-title-icon",name:this.icon,color:"insight"===this.variant||"outline"===this.variant?"color-std-text":`color-${this.variant}--contrast`}),(0,t.h)("div",{class:"blind-header-title-row"},(0,t.h)("div",{class:"blind-header-title-col"},(0,t.h)("ix-typography",{title:this.label,format:"label-lg",bold:!0},(0,t.h)("div",{class:"blind-header-title-label",title:this.label},this.label))),this.sublabel&&(0,t.h)("div",{class:"blind-header-title-col"},(0,t.h)("ix-typography",{title:this.sublabel},(0,t.h)("div",{class:"blind-header-title-sublabel"},this.sublabel)))),(0,t.h)("div",{class:"header-actions"},(0,t.h)("slot",{name:"header-actions"}))):null)),(0,t.h)("button",{key:"841d6430b672ee5a325803d69a86794620526cc6",class:{"blind-header":!0,[`blind-${this.variant}`]:!0,closed:this.collapsed},type:"button","aria-labelledby":`ix-blind-header-title-${this.blindId}`,"aria-controls":`ix-blind-content-section-${this.blindId}`,"aria-expanded":(0,l.a)(!this.collapsed),onClick:()=>this.onHeaderClick()},(0,t.h)("slot",{key:"96c40a71ba13b7b46d7b3148e2d76f6f69878eb6",name:"custom-header"}))),(0,t.h)("section",{key:"8702342c9b1a0c7bf81e753cdc9b88b76addacb3",id:`ix-blind-content-section-${this.blindId}`,"aria-labelledby":`ix-blind-header-title-${this.blindId}`},(0,t.h)("div",{key:"a362c9a6be61160391054fa0cbcb558c0e275a7f",class:{"blind-content":!0,hide:this.collapsed}},this.collapsed?null:(0,t.h)("slot",null))))}get hostElement(){return(0,t.g)(this)}static get watchers(){return{collapsed:["animation"]}}};n.style=":host{display:flex;flex-direction:column;border-radius:var(--theme-blind--border-radius);overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .blind-header-wrapper{display:block;position:relative;width:100%;min-height:3rem;height:3rem;overflow:hidden}:host .blind-header-content{display:flex;position:relative;align-items:center;justify-content:flex-start;width:100%;height:100%;z-index:1;pointer-events:none;padding-left:0.5rem}:host .blind-header-title{display:flex;position:relative;align-items:center;flex-grow:1;flex-shrink:0;margin-right:1rem}:host .blind-header{all:unset;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:block;position:absolute;top:0px;left:0px;pointer-events:all;padding-left:2.5rem;min-height:3rem;height:3rem;width:calc(100% - 2 * var(--theme-blind--border-thickness));border:solid var(--theme-blind--border-thickness) transparent;border-radius:var(--theme-blind--border-radius) var(--theme-blind--border-radius) 0 0;cursor:pointer}:host .blind-header:not(.disabled):not(:disabled):focus-visible{border-color:var(--theme-color-focus-bdr);outline:none}:host .blind-header-title-icon,:host .collapse-icon{margin-right:0.5rem}:host .blind-header-title-row{display:flex;flex-grow:1}:host .blind-header-title-col{flex-grow:1;flex-basis:0;display:inline-flex;align-items:center;min-width:0}:host .blind-header-title-col:not(:first-of-type){justify-content:flex-end}:host ix-typography{flex-grow:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host .blind-header-title-label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline-end:0.5rem}:host .blind-header-title-sublabel{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-inline:0.5rem}:host .blind-header-title{display:flex;align-items:center;flex-grow:1;height:100%;min-width:0}:host .blind-header-labels{display:inline-flex;flex-grow:1;min-width:0}:host .blind-content{display:block;padding:1rem;transition-property:padding;transition-duration:150ms;transition-timing-function:ease-in}:host .blind-content.hide{max-height:0;padding-top:0px;padding-bottom:0px}:host .header-actions{pointer-events:all}:host(.blind-alarm){background-color:var(--theme-blind-base--background)}:host(.blind-alarm) .blind-header{background-color:var(--theme-color-alarm)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-alarm--hover)}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-alarm) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-alarm--active)}:host(.blind-alarm) .blind-header-title-label,:host(.blind-alarm) .blind-header-title-sublabel{color:var(--theme-color-alarm--contrast)}:host(.blind-critical){background-color:var(--theme-blind-base--background)}:host(.blind-critical) .blind-header{background-color:var(--theme-color-critical)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-critical--hover)}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-critical) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-critical) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-critical--active)}:host(.blind-critical) .blind-header-title-label,:host(.blind-critical) .blind-header-title-sublabel{color:var(--theme-color-critical--contrast)}:host(.blind-info){background-color:var(--theme-blind-base--background)}:host(.blind-info) .blind-header{background-color:var(--theme-color-info)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-info--hover)}:host(.blind-info) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-info) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-info) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-info--active)}:host(.blind-info) .blind-header-title-label,:host(.blind-info) .blind-header-title-sublabel{color:var(--theme-color-info--contrast)}:host(.blind-insight){background-color:var(--theme-blind-base--background)}:host(.blind-insight) .blind-header{background-color:var(--theme-color-insight)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-insight) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-insight) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-insight) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-insight) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}:host(.blind-neutral){background-color:var(--theme-blind-base--background)}:host(.blind-neutral) .blind-header{background-color:var(--theme-color-neutral)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-neutral--hover)}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-neutral) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-neutral--active)}:host(.blind-neutral) .blind-header-title-label,:host(.blind-neutral) .blind-header-title-sublabel{color:var(--theme-color-neutral--contrast)}:host(.blind-notification){background-color:var(--theme-blind-base--background)}:host(.blind-notification) .blind-header{background-color:var(--theme-color-notification)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-notification--hover)}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-notification) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-notification) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-notification--active)}:host(.blind-notification) .blind-header-title-label,:host(.blind-notification) .blind-header-title-sublabel{color:var(--theme-color-notification--contrast)}:host(.blind-success){background-color:var(--theme-blind-base--background)}:host(.blind-success) .blind-header{background-color:var(--theme-color-success)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-success--hover)}:host(.blind-success) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-success) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-success) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-success--active)}:host(.blind-success) .blind-header-title-label,:host(.blind-success) .blind-header-title-sublabel{color:var(--theme-color-success--contrast)}:host(.blind-warning){background-color:var(--theme-blind-base--background)}:host(.blind-warning) .blind-header{background-color:var(--theme-color-warning)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-warning--hover)}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-warning) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-warning) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-warning--active)}:host(.blind-warning) .blind-header-title-label,:host(.blind-warning) .blind-header-title-sublabel{color:var(--theme-color-warning--contrast)}:host(.blind-primary){background-color:var(--theme-blind-base--background)}:host(.blind-primary) .blind-header{background-color:var(--theme-color-primary)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-color-primary--hover)}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled){cursor:pointer}:host(.blind-primary) .blind-header:not(.disabled):not(:disabled):active,:host(.blind-primary) .blind-header:not(.disabled):not(:disabled).active{background-color:var(--theme-color-primary--active)}:host(.blind-primary) .blind-header-title-label,:host(.blind-primary) .blind-header-title-sublabel{color:var(--theme-color-primary--contrast)}:host(.blind-outline){border:solid var(--theme-blind--border-thickness) var(--theme-blind-base--border-color);border-color:var(--theme-color-soft-bdr)}:host(.blind-outline) .blind-header{background-color:var(--theme-color-ghost)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).hover,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):hover{background-color:var(--theme-ghost--background--hover)}:host(.blind-outline) .blind-header:not(.disabled):not(:disabled).active,:host(.blind-outline) .blind-header:not(.disabled):not(:disabled):active{background-color:var(--theme-ghost--background--active)}:host(.blind-outline) .blind-header-title-label{color:var(--theme-color-std-text)}:host(.blind-outline) .blind-header-title-sublabel{color:var(--theme-color-soft-text)}"}}]);