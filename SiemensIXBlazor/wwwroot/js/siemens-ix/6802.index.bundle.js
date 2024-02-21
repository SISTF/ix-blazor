"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[6802],{2976:(e,t,i)=>{i.d(t,{a:()=>a,b:()=>s,g:()=>o});const a=e=>e?"true":"false",o=e=>{if(!e)return"Unknown";if((e=>{if(!e)return!1;let t;try{t=new URL(e)}catch(e){return!1}return"http:"===t.protocol||"https:"===t.protocol})(e))return"Unknown";if((t=e)&&"string"==typeof t&&t.startsWith("data:image/svg+xml"))return"Unknown";var t;const i=e.replace("-filled","").split("-").map((e=>{const t=e.trim(),i=t.replace(/\d+/g,"");return 0===i.length?t:i})).map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return 0===i.length?"Unknown":i},s=(e,t=[])=>{const i={};return l.forEach((a=>{e.hasAttribute(a)&&(null===e.getAttribute(a)||t.includes(a)||(i[a]=e.getAttribute(a),e.removeAttribute(a)))})),i},l=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},6802:(e,t,i)=>{i.r(t),i.d(t,{ix_modal:()=>n});var a=i(6074),o=i(8137),s=i(2976),l=i(5272),r=i(7949);const n=class{constructor(e){(0,a.r)(this,e),this.dialogClose=(0,a.c)(this,"dialogClose",7),this.dialogDismiss=(0,a.c)(this,"dialogDismiss",7),this.ariaAttributes={},this.size="360",this.animation=!0,this.backdrop=!0,this.closeOnBackdropClick=!1,this.beforeDismiss=void 0,this.centered=!1,this.keyboard=!0,this.closeOnEscape=!0,this.modalVisible=!1}onKey(e){"Escape"===e.key&&e.preventDefault()}get dialog(){return this.hostElement.shadowRoot.querySelector("dialog")}slideInModal(){const e=this.animation?l.A.mediumTime:0;let t=this.centered?"-50%":40;(0,o.a)({targets:this.dialog,duration:e,opacity:[0,1],translateY:[0,t],translateX:["-50%","-50%"],easing:"easeOutSine"})}slideOutModal(e){const t=this.animation?l.A.mediumTime:0;let i=this.centered?"-50%":40;(0,o.a)({targets:this.dialog,duration:t,opacity:[1,0],translateY:[i,0],translateX:["-50%","-50%"],easing:"easeInSine",complete:()=>{e&&e()}})}onModalClick(e){const t=this.dialog.getBoundingClientRect();!(t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width)&&this.closeOnBackdropClick&&this.dismissModal()}async showModal(){try{const e=await function(e,t,i=3e3){return new Promise(((a,o)=>{const s=Date.now(),l=()=>{const r=t.querySelector(e);r?a(r):Date.now()-s<i?setTimeout(l):o()};l()}))}("dialog",this.hostElement.shadowRoot);this.modalVisible=!0,e.showModal()}catch(e){console.error("HTMLDialogElement not existing")}}async dismissModal(e){let t=!0;void 0!==this.beforeDismiss&&(t=await this.beforeDismiss(e)),t&&this.slideOutModal((()=>{this.modalVisible=!1,this.dialog.close(JSON.stringify({type:"dismiss",reason:e},null,2)),this.dialogDismiss.emit(e)}))}async closeModal(e){this.slideOutModal((()=>{this.dialog.close(JSON.stringify({type:"close",reason:e},null,2)),this.dialogClose.emit(e)}))}componentDidLoad(){this.slideInModal()}componentWillLoad(){this.ariaAttributes=(0,s.b)(this.hostElement)}render(){return(0,a.h)(a.H,{key:"c96bf18eeec05c1363ca83f0cc68ab65f1e50b60",class:{visible:this.modalVisible,"no-backdrop":!1===this.backdrop,"align-center":this.centered}},(0,a.h)("div",{key:"ad4c5d6d14c7c20ef8d4150372b6d147217aa7f4",class:"dialog-backdrop"},(0,a.h)("dialog",{key:"e9cc1d8ab815b6809266eadde437244639eb9597","aria-modal":(0,s.a)(!0),"aria-describedby":this.ariaAttributes["aria-describedby"],"aria-labelledby":this.ariaAttributes["aria-labelledby"],class:{modal:!0,[`modal-size-${this.size}`]:!0},onClose:()=>this.dismissModal(),onClick:e=>this.onModalClick(e),onCancel:e=>{e.preventDefault(),this.dismissModal()}},(0,a.h)("slot",{key:"96d3bad846bbb2541aa8a99313574dd539e9b2e5"}))))}get hostElement(){return(0,a.g)(this)}};(function(e,t,i,a){var o,s=arguments.length,l=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,a);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(l=(s<3?o(l):s>3?o(t,i,l):o(t,i))||l);s>3&&l&&Object.defineProperty(t,i,l)})([(0,r.O)("keydown",(e=>!e.closeOnEscape||!e.keyboard))],n.prototype,"onKey",null),n.style="::backdrop{--ix-dialog-backdrop:var(--theme-color-lightbox, #0000008c)}:focus-visible{outline:none !important}:host{display:none}:host dialog{margin:0;left:50%}:host dialog::backdrop{-webkit-backdrop-filter:blur(2.7182817459px);backdrop-filter:blur(2.7182817459px)}:host .modal{display:flex;flex-direction:column;position:relative;border:none;border-radius:var(--theme-default-border-radius);background:var(--theme-modal--background);box-shadow:var(--theme-shadow-4);color:var(--theme-color-std-text);overflow:visible;max-height:80vh;pointer-events:all}:host .modal-size-360{width:22.5rem}:host .modal-size-480{width:30rem}:host .modal-size-600{width:37.5rem}:host .modal-size-720{width:45rem}:host .modal-size-840{width:52.5rem}:host .modal-size-full-width{width:95%}:host .modal-size-full-screen{left:0px !important;top:0px !important;transform:none !important;width:calc(100% - 28px);min-width:calc(100% - 28px);max-width:calc(100% - 28px);height:calc(100% - 28px);min-height:calc(100% - 28px);max-height:calc(100% - 28px)}:host .dialog-backdrop{display:block;position:fixed;width:100vw;height:100vh;top:0px;left:0px;pointer-events:none}:host ::slotted(ix-modal-footer){margin-top:auto}:host(.visible){display:block}:host(.align-center) dialog{margin:0;left:50%;top:50%}:host(.no-backdrop) dialog::backdrop{background-color:transparent !important;-webkit-backdrop-filter:none !important;backdrop-filter:none !important}:host(.with-icon) ::slotted(ix-modal-footer),:host(.with-icon) ::slotted(ix-modal-content){margin-left:2.5rem}"},7949:(e,t,i)=>{i.d(t,{O:()=>s});var a=i(6074);const o={target:"window",defaultEnabled:!0};function s(e,t){return(i,s)=>{const{componentWillLoad:l,componentWillRender:r,disconnectedCallback:n}=i;t&&(i.componentWillRender=function(){var e;return null===(e=(0,a.g)(this)[`__ix__${s}`])||void 0===e||e.enable(t(this)),r&&r.call(this)}),i.componentWillLoad=function(){const t=function(e,t={}){const i=Object.assign(Object.assign({},o),t);let a;const s=e=>{a(e)},l={on:e=>{a=e},isEnabled:i.defaultEnabled,enable:t=>{l.isEnabled=t,t?addEventListener(e,s):removeEventListener(e,s)},destroy:()=>{l.enable(!1)}};return l.enable(i.defaultEnabled),l}(e),i=(0,a.g)(this),r=this[s];return i[`__ix__${s}`]=t,t.on(r.bind(this)),l&&l.call(this)},i.disconnectedCallback=function(){var e;const t=(0,a.g)(this);return t&&t[`__ix__${s}`]&&(null===(e=t[`__ix__${s}`])||void 0===e||e.destroy(),t[`__ix__${s}`]=null),n&&n.call(this)}}}}}]);