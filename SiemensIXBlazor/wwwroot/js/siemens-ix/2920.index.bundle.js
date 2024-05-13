// -----------------------------------------------------------------------
// SPDX-FileCopyrightText: 2024 Siemens AG
//
// SPDX-License-Identifier: MIT
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.
//  -----------------------------------------------------------------------

"use strict";(self.webpackChunknpmjs=self.webpackChunknpmjs||[]).push([[2920],{9798:(e,t,r)=>{r.d(t,{m:()=>o});const a={sm:"(max-width: 48em)",md:"(min-width: 48.0625em) and (max-width: 80em)",lg:"(min-width: 80.0625em)"},o=e=>{if("undefined"!=typeof window&&window.matchMedia){const t=a[e];return window.matchMedia(t).matches}return!1}},2920:(e,t,r)=>{r.r(t),r.d(t,{ix_col:()=>d,ix_date_picker:()=>n,ix_layout_grid:()=>c,ix_row:()=>h});var a=r(6969),o=r(9798),i=r(3650),s=r(1828);const d=class{constructor(e){(0,a.r)(this,e),this.size=void 0,this.sizeSm=void 0,this.sizeMd=void 0,this.sizeLg=void 0}onResize(){(0,a.f)(this)}getSize(e){return""===e?this.size:"sm"===e?this.sizeSm:"md"===e?this.sizeMd:"lg"===e?this.sizeLg:void 0}getColumnSize(){let e;return d.Breakpoints.forEach((t=>{if(""!==t&&!(0,o.m)(t))return;const r=this.getSize(t);r&&(e=r)})),e}getColumnSizeStyling(){const e=this.getColumnSize();if(!e)return;if("auto"===e)return{flex:"0 0 auto",width:"auto","max-width":"auto"};const t=`calc(calc(${e} / var(--ix-layout-grid-columns)) * 100%)`;return{flex:`0 0 ${t}`,width:`${t}`,"max-width":`${t}`}}render(){return(0,a.h)(a.H,{key:"c117230044b3e1de13480314392f64373a49f2dc",style:Object.assign({},this.getColumnSizeStyling())},(0,a.h)("slot",{key:"872b553d86cd17f366150cc579f7caeff8eba9d1"}))}};d.Breakpoints=["","sm","md","lg"],d.style=":host{position:relative;flex-basis:0;flex-grow:1;width:100%;max-width:100%;min-height:1px;padding:calc(var(--ix-layout-grid-gutter) * 0.5)}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}";const n=class{constructor(e){(0,a.r)(this,e),this.dateChange=(0,a.c)(this,"dateChange",7),this.dateRangeChange=(0,a.c)(this,"dateRangeChange",7),this.dateSelect=(0,a.c)(this,"dateSelect",7),this.done=(0,a.c)(this,"done",7),this.DAYS_IN_WEEK=7,this.format="yyyy/LL/dd",this.range=!0,this.corners="rounded",this.from=void 0,this.to=void 0,this.minDate=void 0,this.maxDate=void 0,this.textSelectDate=void 0,this.i18nDone="Done",this.weekStartIndex=0,this.locale=void 0,this.individual=!0,this.eventDelimiter=" - ",this.standaloneAppearance=!0,this.today=i.D.now().toISO(),this.currFromDate=void 0,this.currToDate=void 0,this.selectedYear=void 0,this.tempYear=void 0,this.startYear=void 0,this.endYear=void 0,this.selectedMonth=void 0,this.tempMonth=void 0,this.dropdownButtonRef=void 0,this.yearContainerRef=void 0,this.dayNames=void 0,this.monthNames=void 0,this.firstMonthRef=void 0,this.focusedDay=1,this.focusedDayElem=void 0}watchFromPropHandler(e){var t;this.currFromDate=e?i.D.fromFormat(e,this.format):void 0,(null===(t=this.currFromDate)||void 0===t?void 0:t.isValid)&&(this.selectedYear=this.currFromDate.year,this.selectedMonth=this.currFromDate.month-1)}watchToPropHandler(e){var t;this.currToDate=e?i.D.fromFormat(e,this.format):void 0,(null===(t=this.currToDate)||void 0===t?void 0:t.isValid)&&(this.selectedYear=this.currToDate.year,this.selectedMonth=this.currToDate.month-1)}onLocaleChange(){this.setTranslations()}async getCurrentDate(){var e,t,r,a;const o=(null===(e=this.currFromDate)||void 0===e?void 0:e.isValid)?null===(t=this.currFromDate)||void 0===t?void 0:t.toFormat(this.format):void 0,i=(null===(r=this.currToDate)||void 0===r?void 0:r.isValid)?null===(a=this.currToDate)||void 0===a?void 0:a.toFormat(this.format):void 0;return this.range?{from:o,to:i}:{from:o,to:void 0}}handleKeyUp(e){if(!this.isDayFocus)return;let t=this.focusedDay;switch(e.key){case"ArrowLeft":t--;break;case"ArrowRight":t++;break;case"ArrowUp":t-=7;break;case"ArrowDown":t+=7;break;default:return}t>this.getDaysInCurrentMonth()?(t-=this.getDaysInCurrentMonth(),this.changeToAdjacentMonth(1),this.monthChangedFromFocus=!0):t<1&&(this.changeToAdjacentMonth(-1),t+=this.getDaysInCurrentMonth(),this.monthChangedFromFocus=!0),this.focusedDay=t}getDaysInCurrentMonth(){return i.D.utc(this.selectedYear,this.selectedMonth+1).daysInMonth}getDateTimeNow(){return i.D.fromISO(this.today)}onDayBlur(){this.isDayFocus=!1}onDayFocus(){this.isDayFocus=!0}componentWillLoad(){var e,t,r,a;this.setTranslations(),this.currFromDate=this.from?i.D.fromFormat(this.from,this.format):void 0,this.currToDate=this.to?i.D.fromFormat(this.to,this.format):void 0;const o=null!==(t=null===(e=this.currFromDate)||void 0===e?void 0:e.year)&&void 0!==t?t:this.getDateTimeNow().year;this.startYear=o-5,this.endYear=o+5,this.selectedMonth=(null!==(a=null===(r=this.currFromDate)||void 0===r?void 0:r.month)&&void 0!==a?a:this.getDateTimeNow().month)-1,this.selectedYear=o,this.tempMonth=this.selectedMonth,this.tempYear=this.selectedYear}componentWillRender(){this.calculateCalendar()}componentDidRender(){(this.monthChangedFromFocus||this.isDayFocus)&&this.hostElement.shadowRoot.querySelector(`[id=day-cell-${this.focusedDay}]`).focus()}setTranslations(){this.dayNames=this.rotateWeekDayNames(i.I.weekdays("long",{locale:this.locale}),this.weekStartIndex),this.monthNames=i.I.months("long",{locale:this.locale})}rotateWeekDayNames(e,t){const r=[...e];if(0===t)return r;t=-t;const a=e.length;return r.push(...r.splice(0,(-t%a+a)%a)),r}async onDone(){const e=await this.getCurrentDate();this.dateSelect.emit(e)}calculateCalendar(){const e=[],t=i.D.utc(this.selectedYear,this.selectedMonth+1),r=t.startOf("month"),a=t.endOf("month");let o=r.weekNumber,s=a.weekNumber,d=r.weekday-1,n=a.weekday-1;if(0!==this.weekStartIndex){const e=i.I.weekdays(),t=e[r.weekday];d=this.dayNames.findIndex((e=>e===t));const o=e[a.weekday];n=this.dayNames.findIndex((e=>e===o))}let c=!1;1===s&&(s=a.weeksInWeekYear+1,c=!0);let h=!1;o===r.weeksInWeekYear&&(o=1,s++,h=!0);let l=1;for(let t=o;t<=s&&l<=31;t++){const i=[];for(let e=0;e<this.DAYS_IN_WEEK&&l<=31;e++)t===o&&e<d||t===s&&e>n?i.push(void 0):i.push(l++);h||c?1===t?e.push({weekNumber:r.weeksInWeekYear,dayNumbers:i}):t===a.weekNumber?e.push({weekNumber:1,dayNumbers:i}):e.push({weekNumber:t-1,dayNumbers:i}):e.push({weekNumber:t,dayNumbers:i})}this.calendar=e}selectTempYear(e,t){null==e||e.stopPropagation(),this.tempYear=t}focusMonth(){this.firstMonthRef.focus()}infiniteScrollYears(){const e=this.yearContainerRef.scrollTop,t=this.yearContainerRef.scrollHeight,r=0===e,a=Math.round(e+this.yearContainerRef.offsetHeight)>=t;if(!(this.endYear-this.startYear>200)){if(r){const e=this.yearContainerRef.firstElementChild;return this.startYear-=5,void this.yearContainerRef.scrollTo(0,e.offsetTop)}if(a){const e=this.yearContainerRef.lastElementChild;this.endYear+=5,this.yearContainerRef.scrollTo(0,e.offsetTop)}}}selectMonth(e){this.selectedMonth=e,this.selectedYear=this.tempYear,this.tempMonth=e,this.hostElement.shadowRoot.querySelector("ix-dropdown").show=!1}changeToAdjacentMonth(e){this.selectedMonth+e<0?(this.selectedYear--,this.selectedMonth=11):this.selectedMonth+e>11?(this.selectedYear++,this.selectedMonth=0):this.selectedMonth+=e}selectDay(e){const t=i.D.fromJSDate(new Date(this.selectedYear,this.selectedMonth,e));return this.range&&void 0!==this.currFromDate?void 0!==this.currToDate?(this.currFromDate=t,this.currToDate=void 0,void this.onDateChange()):t<this.currFromDate?(this.currToDate=this.currFromDate,this.currFromDate=t,void this.onDateChange()):(this.currToDate=t,void this.onDateChange()):(this.currFromDate=t,void this.onDateChange())}onDateChange(){this.getCurrentDate().then((e=>{this.dateChange.emit(e),this.range&&this.dateRangeChange.emit(e)}))}getDayClasses(e){var t,r,a,o;if(!e)return;const s=this.getDateTimeNow(),d=i.D.fromJSDate(new Date(this.selectedYear,this.selectedMonth,e));return{"calendar-item":!0,"empty-day":void 0===e,today:s.hasSame(d,"day"),selected:(null===(t=this.currFromDate)||void 0===t?void 0:t.hasSame(d,"day"))||(null===(r=this.currToDate)||void 0===r?void 0:r.hasSame(d,"day")),range:d.startOf("day")>(null===(a=this.currFromDate)||void 0===a?void 0:a.startOf("day"))&&void 0!==this.currToDate&&d.startOf("day")<(null===(o=this.currToDate)||void 0===o?void 0:o.startOf("day")),disabled:!this.isWithinMinMaxDate(d)}}isWithinMinMaxYear(e){const t=this.minDate?i.D.fromFormat(this.minDate,this.format).year:void 0,r=this.maxDate?i.D.fromFormat(this.maxDate,this.format).year:void 0;return!(t&&e<t||r&&e>r)}isWithinMinMaxMonth(e){const t=this.minDate?i.D.fromFormat(this.minDate,this.format):void 0,r=this.maxDate?i.D.fromFormat(this.maxDate,this.format):void 0,a=null==t?void 0:t.month,o=null==r?void 0:r.month,s=!!a&&this.tempYear===t.year&&e<a,d=!!o&&this.tempYear===r.year&&e>o;return!s&&!d}isWithinMinMaxDate(e){const t=this.minDate?i.D.fromFormat(this.minDate,this.format):void 0,r=this.maxDate?i.D.fromFormat(this.maxDate,this.format):void 0,a=!!t&&e.startOf("day")<t.startOf("day"),o=!!r&&e.startOf("day")>r.startOf("day");return!a&&!o}renderYears(){const e=[];for(let t=this.startYear;t<=this.endYear;t++)e.push((0,a.h)("div",{key:t,class:{arrowYear:!0,"month-dropdown-item":!0,"disabled-item":!this.isWithinMinMaxYear(t)},onClick:e=>this.selectTempYear(e,t),onKeyUp:e=>{"Enter"===e.key&&(this.selectTempYear(null,t),this.focusMonth())},tabIndex:0},(0,a.h)("ix-icon",{class:{hidden:this.tempYear!==t,arrowPosition:!0},name:"chevron-right",size:"12"}),(0,a.h)("div",{style:{"min-width":"max-content"}},`${t}`)));return e}render(){return(0,a.h)(a.H,{key:"5b6747c0dbf6528e3bf90742097d2e0209142fd5"},(0,a.h)("ix-date-time-card",{key:"d332e24012edeb64548ded39f0ce2a3e8f8e7870",corners:this.corners,standaloneAppearance:this.standaloneAppearance},(0,a.h)("div",{key:"50ed2f6798cc2958d0f84f68d254f36fb5082d62",class:"header",slot:"header"},(0,a.h)("ix-icon-button",{key:"619533c4c94783d4507e1497fde743ea3c7550d3",onClick:()=>this.changeToAdjacentMonth(-1),ghost:!0,icon:"chevron-left",variant:"primary",class:"arrows"}),(0,a.h)("div",{key:"3148bd3bd051fc93328b44d1d7a7e16065dba634",class:"selector"},(0,a.h)("ix-button",{key:"b09d8cc88e2062b161777104e44fa8f9498b8b20",ghost:!0,ref:e=>this.dropdownButtonRef=e},(0,a.h)("span",{key:"c3370f2ac962a70d669b164e7a6bd7459de4b6f2",class:"fontSize capitalize"},this.monthNames[this.selectedMonth]," ",this.selectedYear)),(0,a.h)("ix-dropdown",{key:"d6133ae1820335323ae2babe9b588ac3d16b4b4e",class:"dropdown",trigger:this.dropdownButtonRef,placement:"bottom-start"},(0,a.h)("div",{key:"8a58e9cfa6fb6e6900ca788316241a0dc8010803",class:"wrapper"},(0,a.h)("div",{key:"26107292f53cdb1a7ed5c62d4ea59a21b8df5851",class:"overflow",onScroll:()=>this.infiniteScrollYears(),ref:e=>this.yearContainerRef=e},this.renderYears()),(0,a.h)("div",{key:"34e699c477a19b235bdf7046129e282f29d8fb61",class:"overflow"},this.monthNames.map(((e,t)=>(0,a.h)("div",{key:e,ref:t=>{e===this.monthNames[0]&&(this.firstMonthRef=t)},class:{arrowYear:!0,"month-dropdown-item":!0,selected:this.tempYear===this.selectedYear&&this.tempMonth===t,"disabled-item":!this.isWithinMinMaxMonth(t)},onClick:()=>this.selectMonth(t),onKeyUp:e=>"Enter"===e.key&&this.selectMonth(t),tabIndex:0},(0,a.h)("ix-icon",{class:{hidden:this.tempYear!==this.selectedYear||this.tempMonth!==t,checkPosition:!0},name:"single-check",size:"16"}),(0,a.h)("div",null,(0,a.h)("span",{class:"capitalize monthMargin"},`${e} ${this.tempYear}`))))))))),(0,a.h)("ix-icon-button",{key:"34c2a37167375cde6225edc49a8c7b914d1d7588",onClick:()=>this.changeToAdjacentMonth(1),ghost:!0,icon:"chevron-right",variant:"primary",class:"arrows"})),(0,a.h)("div",{key:"d1df9bdbd51a3fc776ffd1b47074f411070f9863",class:"grid"},(0,a.h)("div",{key:"e303bb7a4b7526396cc4026385e6a501671ac008",class:"calendar-item week-day"}),this.dayNames.map((e=>(0,a.h)("div",{key:e,class:"calendar-item week-day"},e.slice(0,3)))),this.calendar.map((e=>(0,a.h)(a.F,null,(0,a.h)("div",{class:"calendar-item week-number"},e.weekNumber),e.dayNumbers.map((e=>(0,a.h)("div",{key:e,id:`day-cell-${e}`,"date-calender-day":!0,class:this.getDayClasses(e),onClick:()=>this.selectDay(e),onKeyUp:t=>"Enter"===t.key&&this.selectDay(e),tabIndex:e===this.focusedDay?0:-1,onFocus:()=>this.onDayFocus(),onBlur:()=>this.onDayBlur()},e))))))),(0,a.h)("div",{key:"58b7b297f63253238dd66d70bc8cf6420df0c449",class:{button:!0,hidden:!this.range||!this.standaloneAppearance}},(0,a.h)("ix-button",{key:"df9f68bcb06ffbb1b9ed0439336eaf5361b606de",onClick:()=>this.onDone()},this.textSelectDate||this.i18nDone))))}get hostElement(){return(0,a.g)(this)}static get watchers(){return{from:["watchFromPropHandler"],to:["watchToPropHandler"],locale:["onLocaleChange"]}}};(function(e,t,r,a){var o,i=arguments.length,s=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,a);else for(var d=e.length-1;d>=0;d--)(o=e[d])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);i>3&&s&&Object.defineProperty(t,r,s)})([(0,s.O)("keydown")],n.prototype,"handleKeyUp",null),n.style=":host{display:block;position:relative;width:22rem}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .header{display:flex;align-items:center;justify-content:space-between}:host .disabled-item{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .selector{flex-basis:100%;display:flex;align-items:center;justify-content:center;padding:0.25rem 1rem}:host .selector .dropdown{color:var(--theme-menu-item--color);font-size:14px;line-height:20px}:host .selector .fontSize{font-size:16px}:host .selector .capitalize{text-transform:capitalize}:host .selector .month-dropdown-item{margin-left:4px;margin-right:4px}:host .selector .month-dropdown-item:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .selector .arrowYear{display:flex;position:relative;padding:0.75rem 2rem;align-items:center;cursor:pointer}:host .selector .arrowYear:hover{background-color:var(--theme-select-list-item--background--hover)}:host .selector .arrowYear.selected{background-color:var(--theme-select-list-item--background--selected)}:host .selector .arrowYear .arrowPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 6px)}:host .selector .arrowYear .checkPosition{position:absolute;left:calc(1rem - 6px);top:calc(50% - 8px)}:host .selector .arrowYear .monthMargin{margin-left:10px}:host .wrapper{display:flex}:host .wrapper .overflow{overflow-y:scroll;max-height:250px}:host .grid{display:grid;grid-template-columns:repeat(8, 40px);grid-template-rows:repeat(7, 40px);align-items:center;justify-items:center;justify-content:center;color:var(--theme-datepicker-today--color)}:host .grid .calendar-item{position:relative;display:flex;justify-content:center;align-items:center;background-color:var(--theme-datepicker-day--background);border:1px solid var(--theme-datepicker-day--background);width:40px;height:40px;cursor:pointer}:host .grid .calendar-item:focus-visible{outline:1px solid var(--theme-color-focus-bdr);outline-offset:var(--theme-btn--focus--outline-offset)}:host .grid .calendar-item.today{border:1px solid var(--theme-datepicker-today--border-color)}:host .grid .calendar-item.today:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item.today:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.today.selected{box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.today.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.today.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);border:1px solid var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.today.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range);border:1px solid var(--theme-datepicker-today--border-color--range);box-shadow:inset 0 0 0 1px white}:host .grid .calendar-item.today.range:hover{background-color:var(--theme-datepicker-day--background--range-hover);border:1px solid var(--theme-datepicker-today--border-color--range-hover)}:host .grid .calendar-item.today.range:active{background-color:var(--theme-datepicker-day--background--range-active);border:1px solid var(--theme-datepicker-today--border-color--range-active)}:host .grid .calendar-item.today.range.disabled{background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled);border:1px solid var(--theme-datepicker-today--border-color--range-disabled)}:host .grid .calendar-item.today.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled);cursor:default}:host .grid .calendar-item:hover{background-color:var(--theme-datepicker-day--background--hover)}:host .grid .calendar-item:active{background-color:var(--theme-datepicker-day--background--active)}:host .grid .calendar-item.selected{background-color:var(--theme-datepicker-day--background--selected);color:var(--theme-datepicker-day--color--selected);border:1px solid var(--theme-datepicker-day--background--selected)}:host .grid .calendar-item.selected:hover{background-color:var(--theme-datepicker-day--background--selected-hover)}:host .grid .calendar-item.selected:active{background-color:var(--theme-datepicker-day--background--selected-active)}:host .grid .calendar-item.selected.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--selected-disabled);color:var(--theme-datepicker-day--color--selected-disabled)}:host .grid .calendar-item.range{background-color:var(--theme-datepicker-day--background--range);color:var(--theme-datepicker-day--color--range)}:host .grid .calendar-item.range:hover{background-color:var(--theme-datepicker-day--background--range-hover)}:host .grid .calendar-item.range:active{background-color:var(--theme-datepicker-day--background--range-active)}:host .grid .calendar-item.range.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--range-disabled);color:var(--theme-datepicker-day--color--range-disabled)}:host .grid .calendar-item.disabled{pointer-events:none;background-color:var(--theme-datepicker-day--background--disabled);color:var(--theme-datepicker-day--color--disabled)}:host .grid .calendar-item.week-day{color:var(--theme-datepicker-weekday--color);font-size:12px;line-height:20px;border:none;background:none;cursor:initial}:host .grid .calendar-item.empty-day{border:none;background:none;cursor:initial}:host .grid .calendar-item.week-number{font-size:10px;line-height:14px;color:var(--theme-datepicker-weekday--color);border:none;background:none;cursor:initial}:host .grid .calendar-item:focus-visible{background-color:var(--theme-datepicker-day--background--selected);border:inset 1px solid var(--theme-datepicker-day--border-color--selected);color:var(--theme-datepicker-day--color--selected);font-size:14px;line-height:20px;letter-spacing:0}:host .button{display:flex;justify-content:flex-end}:host .hidden{display:none}";const c=class{constructor(e){(0,a.r)(this,e),this.noMargin=!1,this.gap="24",this.columns=12}render(){return(0,a.h)(a.H,{key:"d3f673eeface55a4cd571acda477794c8735c5e4",class:{"no-margin":this.noMargin},style:{"--ix-layout-grid-columns":`${this.columns}`,"--ix-layout-grid-gutter":`${this.gap}px`}},(0,a.h)("slot",{key:"e70ea397035d14b0eefc589150d1106983599cec"}))}};c.style=":host{--ix-layout-grid-gutter:24px;display:block;flex:1 1 0%;width:100%;padding-left:calc(var(--ix-layout-grid-gutter) * 0.5);padding-right:calc(var(--ix-layout-grid-gutter) * 0.5)}:host(.no-margin){padding-left:0;padding-right:0}";const h=class{constructor(e){(0,a.r)(this,e)}render(){return(0,a.h)(a.H,{key:"2770cfaea562d4645313f6a45760f6a815008845"},(0,a.h)("slot",{key:"6eeb8750c92b167909e7f0031decf80aef40662c"}))}};h.style=":host{display:flex;flex-wrap:wrap}:host(:not(:first-of-type)){margin-block-start:var(--ix-layout-grid-row-margin, 0)}"},1828:(e,t,r)=>{r.d(t,{O:()=>i});var a=r(6969);const o={target:"window",defaultEnabled:!0};function i(e,t){return(r,i)=>{const{componentWillLoad:s,componentWillRender:d,disconnectedCallback:n}=r;t&&(r.componentWillRender=function(){var e;return null===(e=(0,a.g)(this)[`__ix__${i}`])||void 0===e||e.enable(t(this)),d&&d.call(this)}),r.componentWillLoad=function(){const t=function(e,t={}){const r=Object.assign(Object.assign({},o),t);let a;const i=e=>{a(e)},s={on:e=>{a=e},isEnabled:r.defaultEnabled,enable:t=>{s.isEnabled=t,t?addEventListener(e,i):removeEventListener(e,i)},destroy:()=>{s.enable(!1)}};return s.enable(r.defaultEnabled),s}(e),r=(0,a.g)(this),d=this[i];return r[`__ix__${i}`]=t,t.on(d.bind(this)),s&&s.call(this)},r.disconnectedCallback=function(){var e;const t=(0,a.g)(this);return t&&t[`__ix__${i}`]&&(null===(e=t[`__ix__${i}`])||void 0===e||e.destroy(),t[`__ix__${i}`]=null),n&&n.call(this)}}}}}]);