"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[877],{8877:(e,o,r)=>{r.r(o),r.d(o,{ix_group:()=>i,ix_group_dropdown_item:()=>s,ix_group_item:()=>c});var t=r(7129);const i=class{constructor(e){(0,t.r)(this,e),this.selectGroup=(0,t.c)(this,"selectGroup",7),this.selectItem=(0,t.c)(this,"selectItem",7),this.collapsedChanged=(0,t.c)(this,"collapsedChanged",7),this.suppressHeaderSelection=!1,this.header=void 0,this.subHeader=void 0,this.collapsed=!0,this.selected=void 0,this.index=void 0,this.expandOnHeaderClick=!1,this.dropdownTriggerRef=void 0}get dropdownItems(){return Array.from(this.hostElement.querySelectorAll("ix-group-dropdown-item"))}get groupItems(){return Array.from(this.hostElement.querySelectorAll("ix-group-item:not(.footer)"))}get groupContent(){return this.hostElement.querySelector(".group-content")}get footer(){return this.hostElement.querySelector(".footer")}async onKeyDown(e){const o=e.target;if(this.hostElement.contains(o)&&("Enter"===e.code||"NumpadEnter"===e.code))if(o.classList.contains("group-header"))this.suppressHeaderSelection?this.collapsed=!this.collapsed:this.selected=!this.selected;else if(o.matches("ix-group-item")){const e=o;e.selected=!e.selected}}onExpandClick(e){const o=this.collapsed;this.collapsed=!this.collapsed,o||void 0===this.index||(this.index=void 0,this.setGroupSelection(!0)),this.collapsedChanged.emit(this.collapsed),e.stopPropagation()}onHeaderClick(e){this.setGroupSelection(!this.selected),this.suppressHeaderSelection&&this.onExpandClick(e)}onItemClick(e){e===this.index?(this.index=void 0,this.selectItem.emit(void 0)):(this.index=e,this.selectItem.emit(e)),this.setGroupSelection(!1)}setGroupSelection(e){this.suppressHeaderSelection||(this.selected=e,this.selectGroup.emit(this.selected))}componentWillRender(){var e;this.groupItems.forEach(((e,o)=>{var r;e.selected=o===this.index,e.index=o,e.classList.remove("last"),(null===(r=this.footer)||void 0===r?void 0:r.children.length)||o!==this.groupItems.length-1||e.classList.add("last")})),(null===(e=this.footer)||void 0===e?void 0:e.childElementCount)>1&&this.groupContent.appendChild(this.footer)}componentDidLoad(){this.groupContent.addEventListener("selectedChanged",(e=>{this.onItemClick(e.detail.index)}))}render(){return(0,t.h)(t.H,null,(0,t.h)("div",{class:{"group-header":!0,expand:!this.collapsed,selected:this.selected},tabindex:"0"},(0,t.h)("div",{class:"group-header-clickable",onClick:e=>this.onHeaderClick(e)},(0,t.h)("div",{class:"group-header-selection-indicator"}),(0,t.h)("ix-icon",{class:"btn-expand-header",name:`chevron-${this.collapsed?"right":"down"}-small`,onClick:e=>this.onExpandClick(e)}),(0,t.h)("div",{class:"group-header-content"},this.header?(0,t.h)("div",{class:"group-header-props-container"},(0,t.h)("div",{class:"group-header-title"},(0,t.h)("span",{title:this.header},this.header)),(0,t.h)("div",{class:"group-subheader",title:this.subHeader},this.subHeader)):null,(0,t.h)("slot",{name:"header"}))),(0,t.h)("ix-group-context-menu",null,(0,t.h)("slot",{name:"dropdown"}))),(0,t.h)("div",{class:{"group-content":!0,"d-none":this.collapsed}},(0,t.h)("slot",null)),(0,t.h)("div",{class:"d-none"},(0,t.h)("ix-group-item",{class:"footer last",suppressSelection:!0,focusable:!1},(0,t.h)("slot",{name:"footer"}))))}get hostElement(){return(0,t.g)(this)}};i.style=".sc-ix-group-h{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:column;position:relative;max-width:19.75rem;border-color:var(--theme-group-item--border-color)}.sc-ix-group-h .group-header.sc-ix-group{height:4rem;min-height:4rem;max-height:4rem;border-radius:0.25rem;border:var(--theme-std-bdr-1);display:flex;background-color:var(--theme-group-item--background);border:1px solid var(--theme-group-item--border-color);color:var(--theme-group-header--color);cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover);border-color:var(--theme-group-item--border-color--hover)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):active{background-color:var(--theme-group-item--background--active);border-color:var(--theme-group-item--border-color--active)}.sc-ix-group-h .group-header.sc-ix-group:not(.disabled):not(:disabled):focus-visible{border-color:var(--focus--border-color);border-radius:var(--theme-group--border-radius--focus);outline:none}.sc-ix-group-h .group-header-clickable.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;width:100%;min-width:0}.sc-ix-group-h .group-header.expand.sc-ix-group{border-bottom-left-radius:0;border-bottom-right-radius:0}.sc-ix-group-h .group-header-selection-indicator.sc-ix-group{width:0.25rem}.sc-ix-group-h .group-header-content.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:flex;flex-direction:row;justify-content:space-between;min-width:0;padding:0.5rem;padding-left:0;width:100%}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-props-container.sc-ix-group{width:100%}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-title.sc-ix-group{display:flex;align-items:center;font-size:1rem;font-weight:700;height:1.5rem}.sc-ix-group-h .group-header-content.sc-ix-group .group-header-title.sc-ix-group>*.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}.sc-ix-group-h .group-header-content.sc-ix-group .group-subheader.sc-ix-group{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;height:1.25rem;font-size:0.875rem;color:var(--theme-group-subheader--color)}.sc-ix-group-h .expand-icon.sc-ix-group{padding:0.125rem 0.437rem;color:var(--theme-color-std-text)}.sc-ix-group-h .btn-expand-header.sc-ix-group{margin:0.5rem;-webkit-margin-end:0.25rem;margin-inline-end:0.25rem}.sc-ix-group-h .group-content.sc-ix-group{display:flex;flex-direction:column}.sc-ix-group-h .group-header.selected.sc-ix-group{border:var(--theme-primary-bdr-2);background-color:var(--theme-group-item--background--selected)}.sc-ix-group-h .group-header.selected.sc-ix-group .group-header-selection-indicator.sc-ix-group{background-color:var(--theme-color-input--focus)}.sc-ix-group-h .footer.sc-ix-group{height:auto;min-height:0}";const s=class{constructor(e){(0,t.r)(this,e),this.label=void 0,this.icon=void 0}render(){return(0,t.h)(t.H,null,(0,t.h)("ix-dropdown-item",{label:this.label,icon:this.icon},(0,t.h)("slot",null)))}};s.style=".sc-ix-group-dropdown-item-h{display:contents}";const c=class{constructor(e){(0,t.r)(this,e),this.selectedChanged=(0,t.c)(this,"selectedChanged",7),this.icon=void 0,this.text=void 0,this.secondaryText=void 0,this.suppressSelection=!1,this.selected=void 0,this.focusable=!0,this.index=void 0}clickListen(){this.suppressSelection||this.selectedChanged.emit(this.hostElement)}render(){return(0,t.h)(t.H,{class:{selected:this.selected&&!this.suppressSelection,"suppress-selection":this.suppressSelection},tabindex:this.focusable?0:-1},(0,t.h)("div",{class:"group-entry-selection-indicator"}),this.icon?(0,t.h)("ix-icon",{size:"16",name:this.icon}):null,this.text?(0,t.h)("span",{class:"group-entry-text"},(0,t.h)("span",{title:this.text},this.text)):null,this.secondaryText?(0,t.h)("span",{class:"group-entry-text-secondary"},(0,t.h)("span",{title:this.secondaryText},this.secondaryText)):null,(0,t.h)("slot",null))}get hostElement(){return(0,t.g)(this)}};c.style=".sc-ix-group-item-h{display:flex;min-height:2.25rem;height:2.25rem;align-items:center;justify-content:space-between;padding:0.5rem 1.5rem 0.5rem 2.5rem;position:relative;margin-top:0.0625rem;border:1px solid var(--theme-group-item--border-color);outline:none;background-color:var(--theme-group-item--background)}.last.sc-ix-group-item-h{border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem}.sc-ix-group-item-h ix-icon.sc-ix-group-item{margin-right:0.25rem;margin-top:-0.125rem}.sc-ix-group-item-h .group-entry-selection-indicator.sc-ix-group-item{position:absolute;left:0;height:100%;width:0.25rem}.sc-ix-group-item-h .group-entry-text.sc-ix-group-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item{display:flex;justify-content:flex-end;flex-grow:1;white-space:nowrap;color:var(--theme-color-soft-text);font-size:0.875rem}.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item,.sc-ix-group-item-h .group-entry-text-secondary.sc-ix-group-item span.sc-ix-group-item{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):hover{background-color:var(--theme-group-item--background--hover);border-color:var(--theme-group-item--border-color--hover)}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled){cursor:pointer}.sc-ix-group-item-h:not(.suppress-selection):not(.disabled):not(:disabled):active{background-color:var(--theme-group-item--background--active);border-color:var(--theme-group-item--border-color--active)}.selected.sc-ix-group-item-h{border-top-width:0.062rem !important;border-color:var(--theme-group-item--border-color--selected);background-color:var(--theme-group-item--background--selected)}.selected.sc-ix-group-item-h .group-entry-selection-indicator.sc-ix-group-item{background-color:var(--theme-color-input--focus)}.sc-ix-group-item-h:not(.disabled):not(:disabled):focus-visible{border-color:var(--focus--border-color) !important}"}}]);