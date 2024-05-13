// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[9829],{9829:(e,t,i)=>{i.r(t),i.d(t,{ix_datetime_picker:()=>a});var o=i(6969);const a=class{constructor(e){(0,o.r)(this,e),this.done=(0,o.c)(this,"done",7),this.timeChange=(0,o.c)(this,"timeChange",7),this.dateChange=(0,o.c)(this,"dateChange",7),this.dateSelect=(0,o.c)(this,"dateSelect",7),this.range=!0,this.showHour=!0,this.showMinutes=!0,this.showSeconds=!0,this.minDate=void 0,this.maxDate=void 0,this.dateFormat="yyyy/LL/dd",this.timeFormat="HH:mm:ss",this.from=void 0,this.to=void 0,this.time=void 0,this.showTimeReference=void 0,this.timeReference=void 0,this.textSelectDate=void 0,this.i18nDone="Done",this.weekStartIndex=0,this.locale=void 0,this.eventDelimiter=" - "}async onDone(){var e;const t=await this.datePickerElement.getCurrentDate(),i=await this.timePickerElement.getCurrentTime();this.dateSelect.emit({from:t.from,to:t.to,time:i}),this.done.emit([t.from,null!==(e=t.to)&&void 0!==e?e:"",i].join(this.eventDelimiter))}async onDateChange(e){e.preventDefault(),e.stopPropagation();const{detail:t}=e;this.dateChange.emit(t)}async onTimeChange(e){e.preventDefault(),e.stopPropagation();const{detail:t}=e;this.timeChange.emit(t)}render(){return(0,o.h)(o.H,{key:"83ee67741b982fbf3a6191c04fa3edbbdb6e6f44"},(0,o.h)("ix-layout-grid",{key:"f5f2c66badc930b769638f8f087058b51e44aca7",class:"no-padding"},(0,o.h)("ix-row",{key:"15361bfa7b0cba0688507273601701160016d69b"},(0,o.h)("ix-col",{key:"c4d1d8a41b939e7970277d7a8d9a1c68db7bfa91",class:"no-padding"},(0,o.h)("ix-date-picker",{key:"77bc6717428ef6fd131cd364b15b5e62a79e8f7f",ref:e=>this.datePickerElement=e,corners:"left",range:this.range,onDateChange:e=>this.onDateChange(e),from:this.from,to:this.to,format:this.dateFormat,minDate:this.minDate,maxDate:this.maxDate,weekStartIndex:this.weekStartIndex,standaloneAppearance:!1,locale:this.locale})),(0,o.h)("ix-col",{key:"52d25a39e84d6e0bc35bfe2159c368d2611570c3",class:"no-padding"},(0,o.h)("ix-time-picker",{key:"c19954e799ec9a0f5afb7df35472e58911ea7209",class:"min-width",ref:e=>this.timePickerElement=e,corners:"right",standaloneAppearance:!1,showHour:this.showHour,showMinutes:this.showMinutes,showSeconds:this.showSeconds,onTimeChange:e=>this.onTimeChange(e),format:this.timeFormat,time:this.time}))),(0,o.h)("ix-row",{key:"cc6b061a09a9e3b8e06d7acd6bfe801dc884cc92"},(0,o.h)("ix-col",{key:"86d98b8b9d25f0d77707c7104ed3b53efed3fd04"},(0,o.h)("ix-button",{key:"5e843ec14cc32176420a8304779e7563117af40d",class:"btn-select-date btn-md-width",onClick:()=>this.onDone()},this.textSelectDate||this.i18nDone)))))}};a.style=":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .min-width{width:-moz-min-content;width:min-content}:host .no-padding{padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date{left:unset !important}}:host .individual{box-shadow:none;border:none}:host .btn-select-date{position:absolute;bottom:1rem;right:1rem;left:1rem}"}}]);