
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},windowIsDefined="object"===("undefined"==typeof window?"undefined":_typeof(window));!function(a){if("function"==typeof define&&define.amd)define(["jquery"],a);else if("object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports){var b;try{b=require("jquery")}catch(c){b=null}module.exports=a(b)}else window&&(window.Slider=a(window.jQuery))}(function(a){var b="slider",c="bootstrapSlider";windowIsDefined&&!window.console&&(window.console={}),windowIsDefined&&!window.console.log&&(window.console.log=function(){}),windowIsDefined&&!window.console.warn&&(window.console.warn=function(){});var d;return function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l&&l!==k)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}var m=this.map(function(){var d=a.data(this,b);return d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d)),a(this)});return!m||m.length>1?m:m[0]}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;c(a)}(a),function(a){function e(b,c){function d(a,b){var c="data-slider-"+b.replace(/_/g,"-"),d=a.getAttribute(c);try{return JSON.parse(d)}catch(e){return d}}this._state={value:null,enabled:null,offset:null,size:null,percentage:null,inDrag:!1,over:!1},this.ticksCallbackMap={},this.handleCallbackMap={},"string"==typeof b?this.element=document.querySelector(b):b instanceof HTMLElement&&(this.element=b),c=c?c:{};for(var e=Object.keys(this.defaultOptions),f=0;f<e.length;f++){var h=e[f],i=c[h];i="undefined"!=typeof i?i:d(this.element,h),i=null!==i?i:this.defaultOptions[h],this.options||(this.options={}),this.options[h]=i}"auto"===this.options.rtl&&(this.options.rtl="rtl"===window.getComputedStyle(this.element).direction),"vertical"!==this.options.orientation||"top"!==this.options.tooltip_position&&"bottom"!==this.options.tooltip_position?"horizontal"!==this.options.orientation||"left"!==this.options.tooltip_position&&"right"!==this.options.tooltip_position||(this.options.tooltip_position="top"):this.options.rtl?this.options.tooltip_position="left":this.options.tooltip_position="right";var j,k,l,m,n,o=this.element.style.width,p=!1,q=this.element.parentNode;if(this.sliderElem)p=!0;else{this.sliderElem=document.createElement("div"),this.sliderElem.className="slider";var r=document.createElement("div");r.className="slider-track",k=document.createElement("div"),k.className="slider-track-low",j=document.createElement("div"),j.className="slider-selection",l=document.createElement("div"),l.className="slider-track-high",m=document.createElement("div"),m.className="slider-handle min-slider-handle",m.setAttribute("role","slider"),m.setAttribute("aria-valuemin",this.options.min),m.setAttribute("aria-valuemax",this.options.max),n=document.createElement("div"),n.className="slider-handle max-slider-handle",n.setAttribute("role","slider"),n.setAttribute("aria-valuemin",this.options.min),n.setAttribute("aria-valuemax",this.options.max),r.appendChild(k),r.appendChild(j),r.appendChild(l),this.rangeHighlightElements=[];var s=this.options.rangeHighlights;if(Array.isArray(s)&&s.length>0)for(var t=0;t<s.length;t++){var u=document.createElement("div"),v=s[t]["class"]||"";u.className="slider-rangeHighlight slider-selection "+v,this.rangeHighlightElements.push(u),r.appendChild(u)}var w=Array.isArray(this.options.labelledby);if(w&&this.options.labelledby[0]&&m.setAttribute("aria-labelledby",this.options.labelledby[0]),w&&this.options.labelledby[1]&&n.setAttribute("aria-labelledby",this.options.labelledby[1]),!w&&this.options.labelledby&&(m.setAttribute("aria-labelledby",this.options.labelledby),n.setAttribute("aria-labelledby",this.options.labelledby)),this.ticks=[],Array.isArray(this.options.ticks)&&this.options.ticks.length>0){for(this.ticksContainer=document.createElement("div"),this.ticksContainer.className="slider-tick-container",f=0;f<this.options.ticks.length;f++){var x=document.createElement("div");if(x.className="slider-tick",this.options.ticks_tooltip){var y=this._addTickListener(),z=y.addMouseEnter(this,x,f),A=y.addMouseLeave(this,x);this.ticksCallbackMap[f]={mouseEnter:z,mouseLeave:A}}this.ticks.push(x),this.ticksContainer.appendChild(x)}j.className+=" tick-slider-selection"}if(this.tickLabels=[],Array.isArray(this.options.ticks_labels)&&this.options.ticks_labels.length>0)for(this.tickLabelContainer=document.createElement("div"),this.tickLabelContainer.className="slider-tick-label-container",f=0;f<this.options.ticks_labels.length;f++){var B=document.createElement("div"),C=0===this.options.ticks_positions.length,D=this.options.reversed&&C?this.options.ticks_labels.length-(f+1):f;B.className="slider-tick-label",B.innerHTML=this.options.ticks_labels[D],this.tickLabels.push(B),this.tickLabelContainer.appendChild(B)}var E=function(a){var b=document.createElement("div");b.className="tooltip-arrow";var c=document.createElement("div");c.className="tooltip-inner",a.appendChild(b),a.appendChild(c)},F=document.createElement("div");F.className="tooltip tooltip-main",F.setAttribute("role","presentation"),E(F);var G=document.createElement("div");G.className="tooltip tooltip-min",G.setAttribute("role","presentation"),E(G);var H=document.createElement("div");H.className="tooltip tooltip-max",H.setAttribute("role","presentation"),E(H),this.sliderElem.appendChild(r),this.sliderElem.appendChild(F),this.sliderElem.appendChild(G),this.sliderElem.appendChild(H),this.tickLabelContainer&&this.sliderElem.appendChild(this.tickLabelContainer),this.ticksContainer&&this.sliderElem.appendChild(this.ticksContainer),this.sliderElem.appendChild(m),this.sliderElem.appendChild(n),q.insertBefore(this.sliderElem,this.element),this.element.style.display="none"}if(a&&(this.$element=a(this.element),this.$sliderElem=a(this.sliderElem)),this.eventToCallbackMap={},this.sliderElem.id=this.options.id,this.touchCapable="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,this.touchX=0,this.touchY=0,this.tooltip=this.sliderElem.querySelector(".tooltip-main"),this.tooltipInner=this.tooltip.querySelector(".tooltip-inner"),this.tooltip_min=this.sliderElem.querySelector(".tooltip-min"),this.tooltipInner_min=this.tooltip_min.querySelector(".tooltip-inner"),this.tooltip_max=this.sliderElem.querySelector(".tooltip-max"),this.tooltipInner_max=this.tooltip_max.querySelector(".tooltip-inner"),g[this.options.scale]&&(this.options.scale=g[this.options.scale]),p===!0&&(this._removeClass(this.sliderElem,"slider-horizontal"),this._removeClass(this.sliderElem,"slider-vertical"),this._removeClass(this.sliderElem,"slider-rtl"),this._removeClass(this.tooltip,"hide"),this._removeClass(this.tooltip_min,"hide"),this._removeClass(this.tooltip_max,"hide"),["left","right","top","width","height"].forEach(function(a){this._removeProperty(this.trackLow,a),this._removeProperty(this.trackSelection,a),this._removeProperty(this.trackHigh,a)},this),[this.handle1,this.handle2].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"right"),this._removeProperty(a,"top")},this),[this.tooltip,this.tooltip_min,this.tooltip_max].forEach(function(a){this._removeProperty(a,"left"),this._removeProperty(a,"right"),this._removeProperty(a,"top"),this._removeProperty(a,"margin-left"),this._removeProperty(a,"margin-right"),this._removeProperty(a,"margin-top"),this._removeClass(a,"right"),this._removeClass(a,"left"),this._removeClass(a,"top")},this)),"vertical"===this.options.orientation?(this._addClass(this.sliderElem,"slider-vertical"),this.stylePos="top",this.mousePos="pageY",this.sizePos="offsetHeight"):(this._addClass(this.sliderElem,"slider-horizontal"),this.sliderElem.style.width=o,this.options.orientation="horizontal",this.options.rtl?this.stylePos="right":this.stylePos="left",this.mousePos="pageX",this.sizePos="offsetWidth"),this.options.rtl&&this._addClass(this.sliderElem,"slider-rtl"),this._setTooltipPosition(),Array.isArray(this.options.ticks)&&this.options.ticks.length>0&&(this.options.max=Math.max.apply(Math,this.options.ticks),this.options.min=Math.min.apply(Math,this.options.ticks)),Array.isArray(this.options.value)?(this.options.range=!0,this._state.value=this.options.value):this.options.range?this._state.value=[this.options.value,this.options.max]:this._state.value=this.options.value,this.trackLow=k||this.trackLow,this.trackSelection=j||this.trackSelection,this.trackHigh=l||this.trackHigh,"none"===this.options.selection?(this._addClass(this.trackLow,"hide"),this._addClass(this.trackSelection,"hide"),this._addClass(this.trackHigh,"hide")):("after"===this.options.selection||"before"===this.options.selection)&&(this._removeClass(this.trackLow,"hide"),this._removeClass(this.trackSelection,"hide"),this._removeClass(this.trackHigh,"hide")),this.handle1=m||this.handle1,this.handle2=n||this.handle2,p===!0)for(this._removeClass(this.handle1,"round triangle"),this._removeClass(this.handle2,"round triangle hide"),f=0;f<this.ticks.length;f++)this._removeClass(this.ticks[f],"round triangle hide");var I=["round","triangle","custom"],J=-1!==I.indexOf(this.options.handle);if(J)for(this._addClass(this.handle1,this.options.handle),this._addClass(this.handle2,this.options.handle),f=0;f<this.ticks.length;f++)this._addClass(this.ticks[f],this.options.handle);if(this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this.setValue(this._state.value),this.handle1Keydown=this._keydown.bind(this,0),this.handle1.addEventListener("keydown",this.handle1Keydown,!1),this.handle2Keydown=this._keydown.bind(this,1),this.handle2.addEventListener("keydown",this.handle2Keydown,!1),this.mousedown=this._mousedown.bind(this),this.touchstart=this._touchstart.bind(this),this.touchmove=this._touchmove.bind(this),this.touchCapable){var K=!1;try{var L=Object.defineProperty({},"passive",{get:function(){K=!0}});window.addEventListener("test",null,L)}catch(M){}var N=K?{passive:!0}:!1;this.sliderElem.addEventListener("touchstart",this.touchstart,N),this.sliderElem.addEventListener("touchmove",this.touchmove,N)}if(this.sliderElem.addEventListener("mousedown",this.mousedown,!1),this.resize=this._resize.bind(this),window.addEventListener("resize",this.resize,!1),"hide"===this.options.tooltip)this._addClass(this.tooltip,"hide"),this._addClass(this.tooltip_min,"hide"),this._addClass(this.tooltip_max,"hide");else if("always"===this.options.tooltip)this._showTooltip(),this._alwaysShowTooltip=!0;else{if(this.showTooltip=this._showTooltip.bind(this),this.hideTooltip=this._hideTooltip.bind(this),this.options.ticks_tooltip){var O=this._addTickListener(),P=O.addMouseEnter(this,this.handle1),Q=O.addMouseLeave(this,this.handle1);this.handleCallbackMap.handle1={mouseEnter:P,mouseLeave:Q},P=O.addMouseEnter(this,this.handle2),Q=O.addMouseLeave(this,this.handle2),this.handleCallbackMap.handle2={mouseEnter:P,mouseLeave:Q}}else this.sliderElem.addEventListener("mouseenter",this.showTooltip,!1),this.sliderElem.addEventListener("mouseleave",this.hideTooltip,!1);this.handle1.addEventListener("focus",this.showTooltip,!1),this.handle1.addEventListener("blur",this.hideTooltip,!1),this.handle2.addEventListener("focus",this.showTooltip,!1),this.handle2.addEventListener("blur",this.hideTooltip,!1)}this.options.enabled?this.enable():this.disable()}var f={formatInvalidInputErrorMsg:function(a){return"Invalid input value '"+a+"' passed in"},callingContextNotSliderInstance:"Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"},g={linear:{toValue:function(a){var b=a/100*(this.options.max-this.options.min),c=!0;if(this.options.ticks_positions.length>0){for(var d,e,f,g=0,h=1;h<this.options.ticks_positions.length;h++)if(a<=this.options.ticks_positions[h]){d=this.options.ticks[h-1],f=this.options.ticks_positions[h-1],e=this.options.ticks[h],g=this.options.ticks_positions[h];break}var i=(a-f)/(g-f);b=d+i*(e-d),c=!1}var j=c?this.options.min:0,k=j+Math.round(b/this.options.step)*this.options.step;return k<this.options.min?this.options.min:k>this.options.max?this.options.max:k},toPercentage:function(a){if(this.options.max===this.options.min)return 0;if(this.options.ticks_positions.length>0){for(var b,c,d,e=0,f=0;f<this.options.ticks.length;f++)if(a<=this.options.ticks[f]){b=f>0?this.options.ticks[f-1]:0,d=f>0?this.options.ticks_positions[f-1]:0,c=this.options.ticks[f],e=this.options.ticks_positions[f];break}if(f>0){var g=(a-b)/(c-b);return d+g*(e-d)}}return 100*(a-this.options.min)/(this.options.max-this.options.min)}},logarithmic:{toValue:function(a){var b=0===this.options.min?0:Math.log(this.options.min),c=Math.log(this.options.max),d=Math.exp(b+(c-b)*a/100);return Math.round(d)===this.options.max?this.options.max:(d=this.options.min+Math.round((d-this.options.min)/this.options.step)*this.options.step,d<this.options.min?this.options.min:d>this.options.max?this.options.max:d)},toPercentage:function(a){if(this.options.max===this.options.min)return 0;var b=Math.log(this.options.max),c=0===this.options.min?0:Math.log(this.options.min),d=0===a?0:Math.log(a);return 100*(d-c)/(b-c)}}};if(d=function(a,b){return e.call(this,a,b),this},d.prototype={_init:function(){},constructor:d,defaultOptions:{id:"",min:0,max:10,step:1,precision:0,orientation:"horizontal",value:5,range:!1,selection:"before",tooltip:"show",tooltip_split:!1,handle:"round",reversed:!1,rtl:"auto",enabled:!0,formatter:function(a){return Array.isArray(a)?a[0]+" : "+a[1]:a},natural_arrow_keys:!1,ticks:[],ticks_positions:[],ticks_labels:[],ticks_snap_bounds:0,ticks_tooltip:!1,scale:"linear",focus:!1,tooltip_position:null,labelledby:null,rangeHighlights:[]},getElement:function(){return this.sliderElem},getValue:function(){return this.options.range?this._state.value:this._state.value[0]},setValue:function(a,b,c){a||(a=0);var d=this.getValue();this._state.value=this._validateInputValue(a);var e=this._applyPrecision.bind(this);this.options.range?(this._state.value[0]=e(this._state.value[0]),this._state.value[1]=e(this._state.value[1]),this._state.value[0]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[0])),this._state.value[1]=Math.max(this.options.min,Math.min(this.options.max,this._state.value[1]))):(this._state.value=e(this._state.value),this._state.value=[Math.max(this.options.min,Math.min(this.options.max,this._state.value))],this._addClass(this.handle2,"hide"),"after"===this.options.selection?this._state.value[1]=this.options.max:this._state.value[1]=this.options.min),this.options.max>this.options.min?this._state.percentage=[this._toPercentage(this._state.value[0]),this._toPercentage(this._state.value[1]),100*this.options.step/(this.options.max-this.options.min)]:this._state.percentage=[0,0,100],this._layout();var f=this.options.range?this._state.value:this._state.value[0];return this._setDataVal(f),b===!0&&this._trigger("slide",f),d!==f&&c===!0&&this._trigger("change",{oldValue:d,newValue:f}),this},destroy:function(){this._removeSliderEventHandlers(),this.sliderElem.parentNode.removeChild(this.sliderElem),this.element.style.display="",this._cleanUpEventCallbacksMap(),this.element.removeAttribute("data"),a&&(this._unbindJQueryEventHandlers(),this.$element.removeData("slider"))},disable:function(){return this._state.enabled=!1,this.handle1.removeAttribute("tabindex"),this.handle2.removeAttribute("tabindex"),this._addClass(this.sliderElem,"slider-disabled"),this._trigger("slideDisabled"),this},enable:function(){return this._state.enabled=!0,this.handle1.setAttribute("tabindex",0),this.handle2.setAttribute("tabindex",0),this._removeClass(this.sliderElem,"slider-disabled"),this._trigger("slideEnabled"),this},toggle:function(){return this._state.enabled?this.disable():this.enable(),this},isEnabled:function(){return this._state.enabled},on:function(a,b){return this._bindNonQueryEventHandler(a,b),this},off:function(b,c){a?(this.$element.off(b,c),this.$sliderElem.off(b,c)):this._unbindNonQueryEventHandler(b,c)},getAttribute:function(a){return a?this.options[a]:this.options},setAttribute:function(a,b){return this.options[a]=b,this},refresh:function(){return this._removeSliderEventHandlers(),e.call(this,this.element,this.options),a&&a.data(this.element,"slider",this),this},relayout:function(){return this._resize(),this._layout(),this},_removeSliderEventHandlers:function(){if(this.handle1.removeEventListener("keydown",this.handle1Keydown,!1),this.handle2.removeEventListener("keydown",this.handle2Keydown,!1),this.options.ticks_tooltip){for(var a=this.ticksContainer.getElementsByClassName("slider-tick"),b=0;b<a.length;b++)a[b].removeEventListener("mouseenter",this.ticksCallbackMap[b].mouseEnter,!1),a[b].removeEventListener("mouseleave",this.ticksCallbackMap[b].mouseLeave,!1);this.handle1.removeEventListener("mouseenter",this.handleCallbackMap.handle1.mouseEnter,!1),this.handle2.removeEventListener("mouseenter",this.handleCallbackMap.handle2.mouseEnter,!1),this.handle1.removeEventListener("mouseleave",this.handleCallbackMap.handle1.mouseLeave,!1),this.handle2.removeEventListener("mouseleave",this.handleCallbackMap.handle2.mouseLeave,!1)}this.handleCallbackMap=null,this.ticksCallbackMap=null,this.showTooltip&&(this.handle1.removeEventListener("focus",this.showTooltip,!1),this.handle2.removeEventListener("focus",this.showTooltip,!1)),this.hideTooltip&&(this.handle1.removeEventListener("blur",this.hideTooltip,!1),this.handle2.removeEventListener("blur",this.hideTooltip,!1)),this.showTooltip&&this.sliderElem.removeEventListener("mouseenter",this.showTooltip,!1),this.hideTooltip&&this.sliderElem.removeEventListener("mouseleave",this.hideTooltip,!1),this.sliderElem.removeEventListener("touchstart",this.touchstart,!1),this.sliderElem.removeEventListener("touchmove",this.touchmove,!1),this.sliderElem.removeEventListener("mousedown",this.mousedown,!1),window.removeEventListener("resize",this.resize,!1)},_bindNonQueryEventHandler:function(a,b){void 0===this.eventToCallbackMap[a]&&(this.eventToCallbackMap[a]=[]),this.eventToCallbackMap[a].push(b)},_unbindNonQueryEventHandler:function(a,b){var c=this.eventToCallbackMap[a];if(void 0!==c)for(var d=0;d<c.length;d++)if(c[d]===b){c.splice(d,1);break}},_cleanUpEventCallbacksMap:function(){for(var a=Object.keys(this.eventToCallbackMap),b=0;b<a.length;b++){var c=a[b];delete this.eventToCallbackMap[c]}},_showTooltip:function(){this.options.tooltip_split===!1?(this._addClass(this.tooltip,"in"),this.tooltip_min.style.display="none",this.tooltip_max.style.display="none"):(this._addClass(this.tooltip_min,"in"),this._addClass(this.tooltip_max,"in"),this.tooltip.style.display="none"),this._state.over=!0},_hideTooltip:function(){this._state.inDrag===!1&&this.alwaysShowTooltip!==!0&&(this._removeClass(this.tooltip,"in"),this._removeClass(this.tooltip_min,"in"),this._removeClass(this.tooltip_max,"in")),this._state.over=!1},_setToolTipOnMouseOver:function(a){function b(a,b){return b?[100-a.percentage[0],this.options.range?100-a.percentage[1]:a.percentage[1]]:[a.percentage[0],a.percentage[1]]}var c=this.options.formatter(a?a.value[0]:this._state.value[0]),d=a?b(a,this.options.reversed):b(this._state,this.options.reversed);this._setText(this.tooltipInner,c),this.tooltip.style[this.stylePos]=d[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-"+this.stylePos,-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-"+this.stylePos,-this.tooltip.offsetWidth/2+"px")},_addTickListener:function(){return{addMouseEnter:function(a,b,c){var d=function(){var b=a._state,d=c>=0?c:this.attributes["aria-valuenow"].value,e=parseInt(d,10);b.value[0]=e,b.percentage[0]=a.options.ticks_positions[e],a._setToolTipOnMouseOver(b),a._showTooltip()};return b.addEventListener("mouseenter",d,!1),d},addMouseLeave:function(a,b){var c=function(){a._hideTooltip()};return b.addEventListener("mouseleave",c,!1),c}}},_layout:function(){var a;if(a=this.options.reversed?[100-this._state.percentage[0],this.options.range?100-this._state.percentage[1]:this._state.percentage[1]]:[this._state.percentage[0],this._state.percentage[1]],this.handle1.style[this.stylePos]=a[0]+"%",this.handle1.setAttribute("aria-valuenow",this._state.value[0]),isNaN(this.options.formatter(this._state.value[0]))&&this.handle1.setAttribute("aria-valuetext",this.options.formatter(this._state.value[0])),this.handle2.style[this.stylePos]=a[1]+"%",this.handle2.setAttribute("aria-valuenow",this._state.value[1]),isNaN(this.options.formatter(this._state.value[1]))&&this.handle2.setAttribute("aria-valuetext",this.options.formatter(this._state.value[1])),this.rangeHighlightElements.length>0&&Array.isArray(this.options.rangeHighlights)&&this.options.rangeHighlights.length>0)for(var b=0;b<this.options.rangeHighlights.length;b++){var c=this._toPercentage(this.options.rangeHighlights[b].start),d=this._toPercentage(this.options.rangeHighlights[b].end);if(this.options.reversed){var e=100-d;d=100-c,c=e}var f=this._createHighlightRange(c,d);f?"vertical"===this.options.orientation?(this.rangeHighlightElements[b].style.top=f.start+"%",this.rangeHighlightElements[b].style.height=f.size+"%"):(this.options.rtl?this.rangeHighlightElements[b].style.right=f.start+"%":this.rangeHighlightElements[b].style.left=f.start+"%",this.rangeHighlightElements[b].style.width=f.size+"%"):this.rangeHighlightElements[b].style.display="none"}if(Array.isArray(this.options.ticks)&&this.options.ticks.length>0){var g,h="vertical"===this.options.orientation?"height":"width";g="vertical"===this.options.orientation?"marginTop":this.options.rtl?"marginRight":"marginLeft";var i=this._state.size/(this.options.ticks.length-1);if(this.tickLabelContainer){var j=0;if(0===this.options.ticks_positions.length)"vertical"!==this.options.orientation&&(this.tickLabelContainer.style[g]=-i/2+"px"),j=this.tickLabelContainer.offsetHeight;else for(k=0;k<this.tickLabelContainer.childNodes.length;k++)this.tickLabelContainer.childNodes[k].offsetHeight>j&&(j=this.tickLabelContainer.childNodes[k].offsetHeight);"horizontal"===this.options.orientation&&(this.sliderElem.style.marginBottom=j+"px")}for(var k=0;k<this.options.ticks.length;k++){var l=this.options.ticks_positions[k]||this._toPercentage(this.options.ticks[k]);this.options.reversed&&(l=100-l),this.ticks[k].style[this.stylePos]=l+"%",this._removeClass(this.ticks[k],"in-selection"),this.options.range?l>=a[0]&&l<=a[1]&&this._addClass(this.ticks[k],"in-selection"):"after"===this.options.selection&&l>=a[0]?this._addClass(this.ticks[k],"in-selection"):"before"===this.options.selection&&l<=a[0]&&this._addClass(this.ticks[k],"in-selection"),this.tickLabels[k]&&(this.tickLabels[k].style[h]=i+"px","vertical"!==this.options.orientation&&void 0!==this.options.ticks_positions[k]?(this.tickLabels[k].style.position="absolute",this.tickLabels[k].style[this.stylePos]=l+"%",this.tickLabels[k].style[g]=-i/2+"px"):"vertical"===this.options.orientation&&(this.options.rtl?this.tickLabels[k].style.marginRight=this.sliderElem.offsetWidth+"px":this.tickLabels[k].style.marginLeft=this.sliderElem.offsetWidth+"px",this.tickLabelContainer.style[g]=this.sliderElem.offsetWidth/2*-1+"px"))}}var m;if(this.options.range){m=this.options.formatter(this._state.value),this._setText(this.tooltipInner,m),this.tooltip.style[this.stylePos]=(a[1]+a[0])/2+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-"+this.stylePos,-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-"+this.stylePos,-this.tooltip.offsetWidth/2+"px");var n=this.options.formatter(this._state.value[0]);this._setText(this.tooltipInner_min,n);var o=this.options.formatter(this._state.value[1]);this._setText(this.tooltipInner_max,o),this.tooltip_min.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip_min,"margin-"+this.stylePos,-this.tooltip_min.offsetHeight/2+"px"):this._css(this.tooltip_min,"margin-"+this.stylePos,-this.tooltip_min.offsetWidth/2+"px"),this.tooltip_max.style[this.stylePos]=a[1]+"%","vertical"===this.options.orientation?this._css(this.tooltip_max,"margin-"+this.stylePos,-this.tooltip_max.offsetHeight/2+"px"):this._css(this.tooltip_max,"margin-"+this.stylePos,-this.tooltip_max.offsetWidth/2+"px")}else m=this.options.formatter(this._state.value[0]),this._setText(this.tooltipInner,m),this.tooltip.style[this.stylePos]=a[0]+"%","vertical"===this.options.orientation?this._css(this.tooltip,"margin-"+this.stylePos,-this.tooltip.offsetHeight/2+"px"):this._css(this.tooltip,"margin-"+this.stylePos,-this.tooltip.offsetWidth/2+"px");if("vertical"===this.options.orientation)this.trackLow.style.top="0",this.trackLow.style.height=Math.min(a[0],a[1])+"%",this.trackSelection.style.top=Math.min(a[0],a[1])+"%",this.trackSelection.style.height=Math.abs(a[0]-a[1])+"%",this.trackHigh.style.bottom="0",this.trackHigh.style.height=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";else{"right"===this.stylePos?this.trackLow.style.right="0":this.trackLow.style.left="0",this.trackLow.style.width=Math.min(a[0],a[1])+"%","right"===this.stylePos?this.trackSelection.style.right=Math.min(a[0],a[1])+"%":this.trackSelection.style.left=Math.min(a[0],a[1])+"%",this.trackSelection.style.width=Math.abs(a[0]-a[1])+"%","right"===this.stylePos?this.trackHigh.style.left="0":this.trackHigh.style.right="0",this.trackHigh.style.width=100-Math.min(a[0],a[1])-Math.abs(a[0]-a[1])+"%";var p=this.tooltip_min.getBoundingClientRect(),q=this.tooltip_max.getBoundingClientRect();"bottom"===this.options.tooltip_position?p.right>q.left?(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top="",this.tooltip_max.style.bottom="22px"):(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top=this.tooltip_min.style.top,this.tooltip_max.style.bottom=""):p.right>q.left?(this._removeClass(this.tooltip_max,"top"),this._addClass(this.tooltip_max,"bottom"),this.tooltip_max.style.top="18px"):(this._removeClass(this.tooltip_max,"bottom"),this._addClass(this.tooltip_max,"top"),this.tooltip_max.style.top=this.tooltip_min.style.top)}},_createHighlightRange:function(a,b){return this._isHighlightRange(a,b)?a>b?{start:b,size:a-b}:{start:a,size:b-a}:null},_isHighlightRange:function(a,b){return a>=0&&100>=a&&b>=0&&100>=b?!0:!1},_resize:function(a){this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos],this._layout()},_removeProperty:function(a,b){a.style.removeProperty?a.style.removeProperty(b):a.style.removeAttribute(b)},_mousedown:function(a){if(!this._state.enabled)return!1;this._state.offset=this._offset(this.sliderElem),this._state.size=this.sliderElem[this.sizePos];var b=this._getPercentage(a);if(this.options.range){var c=Math.abs(this._state.percentage[0]-b),d=Math.abs(this._state.percentage[1]-b);this._state.dragged=d>c?0:1,this._adjustPercentageForRangeSliders(b)}else this._state.dragged=0;this._state.percentage[this._state.dragged]=b,this._layout(),this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),this.mousemove&&document.removeEventListener("mousemove",this.mousemove,!1),this.mouseup&&document.removeEventListener("mouseup",this.mouseup,!1),this.mousemove=this._mousemove.bind(this),this.mouseup=this._mouseup.bind(this),this.touchCapable&&(document.addEventListener("touchmove",this.mousemove,!1),document.addEventListener("touchend",this.mouseup,!1)),document.addEventListener("mousemove",this.mousemove,!1),document.addEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!0;var e=this._calculateValue();return this._trigger("slideStart",e),this._setDataVal(e),this.setValue(e,!1,!0),a.returnValue=!1,this.options.focus&&this._triggerFocusOnHandle(this._state.dragged),!0},_touchstart:function(a){if(void 0===a.changedTouches)return void this._mousedown(a);var b=a.changedTouches[0];this.touchX=b.pageX,this.touchY=b.pageY},_triggerFocusOnHandle:function(a){0===a&&this.handle1.focus(),1===a&&this.handle2.focus()},_keydown:function(a,b){if(!this._state.enabled)return!1;var c;switch(b.keyCode){case 37:case 40:c=-1;break;case 39:case 38:c=1}if(c){if(this.options.natural_arrow_keys){var d="vertical"===this.options.orientation&&!this.options.reversed,e="horizontal"===this.options.orientation&&this.options.reversed;(d||e)&&(c=-c)}var f=this._state.value[a]+c*this.options.step,g=f/this.options.max*100;if(this._state.keyCtrl=a,this.options.range){this._adjustPercentageForRangeSliders(g);var h=this._state.keyCtrl?this._state.value[0]:f,i=this._state.keyCtrl?f:this._state.value[1];f=[h,i]}return this._trigger("slideStart",f),this._setDataVal(f),this.setValue(f,!0,!0),this._setDataVal(f),this._trigger("slideStop",f),this._layout(),this._pauseEvent(b),delete this._state.keyCtrl,!1}},_pauseEvent:function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),a.cancelBubble=!0,a.returnValue=!1},_mousemove:function(a){if(!this._state.enabled)return!1;var b=this._getPercentage(a);this._adjustPercentageForRangeSliders(b),this._state.percentage[this._state.dragged]=b,this._layout();var c=this._calculateValue(!0);return this.setValue(c,!0,!0),!1},_touchmove:function(a){if(void 0!==a.changedTouches){var b=a.changedTouches[0],c=b.pageX-this.touchX,d=b.pageY-this.touchY;this._state.inDrag||("vertical"===this.options.orientation&&5>=c&&c>=-5&&(d>=15||-15>=d)?this._mousedown(a):5>=d&&d>=-5&&(c>=15||-15>=c)&&this._mousedown(a))}},_adjustPercentageForRangeSliders:function(a){if(this.options.range){var b=this._getNumDigitsAfterDecimalPlace(a);b=b?b-1:0;var c=this._applyToFixedAndParseFloat(a,b);0===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[1],b)<c?(this._state.percentage[0]=this._state.percentage[1],this._state.dragged=1):1===this._state.dragged&&this._applyToFixedAndParseFloat(this._state.percentage[0],b)>c?(this._state.percentage[1]=this._state.percentage[0],this._state.dragged=0):0===this._state.keyCtrl&&this._state.value[1]/this.options.max*100<a?(this._state.percentage[0]=this._state.percentage[1],this._state.keyCtrl=1,this.handle2.focus()):1===this._state.keyCtrl&&this._state.value[0]/this.options.max*100>a&&(this._state.percentage[1]=this._state.percentage[0],this._state.keyCtrl=0,this.handle1.focus())}},_mouseup:function(){if(!this._state.enabled)return!1;this.touchCapable&&(document.removeEventListener("touchmove",this.mousemove,!1),document.removeEventListener("touchend",this.mouseup,!1)),document.removeEventListener("mousemove",this.mousemove,!1),document.removeEventListener("mouseup",this.mouseup,!1),this._state.inDrag=!1,this._state.over===!1&&this._hideTooltip();var a=this._calculateValue(!0);return this._layout(),this._setDataVal(a),this._trigger("slideStop",a),!1},_calculateValue:function(a){var b;if(this.options.range?(b=[this.options.min,this.options.max],0!==this._state.percentage[0]&&(b[0]=this._toValue(this._state.percentage[0]),b[0]=this._applyPrecision(b[0])),100!==this._state.percentage[1]&&(b[1]=this._toValue(this._state.percentage[1]),b[1]=this._applyPrecision(b[1]))):(b=this._toValue(this._state.percentage[0]),b=parseFloat(b),b=this._applyPrecision(b)),a){for(var c=[b,1/0],d=0;d<this.options.ticks.length;d++){
    var e=Math.abs(this.options.ticks[d]-b);e<=c[1]&&(c=[this.options.ticks[d],e])}if(c[1]<=this.options.ticks_snap_bounds)return c[0]}return b},_applyPrecision:function(a){var b=this.options.precision||this._getNumDigitsAfterDecimalPlace(this.options.step);return this._applyToFixedAndParseFloat(a,b)},_getNumDigitsAfterDecimalPlace:function(a){var b=(""+a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return b?Math.max(0,(b[1]?b[1].length:0)-(b[2]?+b[2]:0)):0},_applyToFixedAndParseFloat:function(a,b){var c=a.toFixed(b);return parseFloat(c)},_getPercentage:function(a){!this.touchCapable||"touchstart"!==a.type&&"touchmove"!==a.type||(a=a.touches[0]);var b=a[this.mousePos],c=this._state.offset[this.stylePos],d=b-c;"right"===this.stylePos&&(d=-d);var e=d/this._state.size*100;return e=Math.round(e/this._state.percentage[2])*this._state.percentage[2],this.options.reversed&&(e=100-e),Math.max(0,Math.min(100,e))},_validateInputValue:function(a){if(isNaN(+a)){if(Array.isArray(a))return this._validateArray(a),a;throw new Error(f.formatInvalidInputErrorMsg(a))}return+a},_validateArray:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"!=typeof c)throw new Error(f.formatInvalidInputErrorMsg(c))}},_setDataVal:function(a){this.element.setAttribute("data-value",a),this.element.setAttribute("value",a),this.element.value=a},_trigger:function(b,c){c=c||0===c?c:void 0;var d=this.eventToCallbackMap[b];if(d&&d.length)for(var e=0;e<d.length;e++){var f=d[e];f(c)}a&&this._triggerJQueryEvent(b,c)},_triggerJQueryEvent:function(a,b){var c={type:a,value:b};this.$element.trigger(c),this.$sliderElem.trigger(c)},_unbindJQueryEventHandlers:function(){this.$element.off(),this.$sliderElem.off()},_setText:function(a,b){"undefined"!=typeof a.textContent?a.textContent=b:"undefined"!=typeof a.innerText&&(a.innerText=b)},_removeClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)");d=d.replace(g," ")}a.className=d.trim()},_addClass:function(a,b){for(var c=b.split(" "),d=a.className,e=0;e<c.length;e++){var f=c[e],g=new RegExp("(?:\\s|^)"+f+"(?:\\s|$)"),h=g.test(d);h||(d+=" "+f)}a.className=d.trim()},_offsetLeft:function(a){return a.getBoundingClientRect().left},_offsetRight:function(a){return a.getBoundingClientRect().right},_offsetTop:function(a){for(var b=a.offsetTop;(a=a.offsetParent)&&!isNaN(a.offsetTop);)b+=a.offsetTop,"BODY"!==a.tagName&&(b-=a.scrollTop);return b},_offset:function(a){return{left:this._offsetLeft(a),right:this._offsetRight(a),top:this._offsetTop(a)}},_css:function(b,c,d){if(a)a.style(b,c,d);else{var e=c.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(a,b){return b.toUpperCase()});b.style[e]=d}},_toValue:function(a){return this.options.scale.toValue.apply(this,[a])},_toPercentage:function(a){return this.options.scale.toPercentage.apply(this,[a])},_setTooltipPosition:function(){var a=[this.tooltip,this.tooltip_min,this.tooltip_max];if("vertical"===this.options.orientation){var b;b=this.options.tooltip_position?this.options.tooltip_position:this.options.rtl?"left":"right";var c="left"===b?"right":"left";a.forEach(function(a){this._addClass(a,b),a.style[c]="100%"}.bind(this))}else"bottom"===this.options.tooltip_position?a.forEach(function(a){this._addClass(a,"bottom"),a.style.top="22px"}.bind(this)):a.forEach(function(a){this._addClass(a,"top"),a.style.top=-this.tooltip.outerHeight-14+"px"}.bind(this))}},a&&a.fn){var h=void 0;a.fn.slider?(windowIsDefined&&window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."),h=c):(a.bridget(b,d),h=b),a.bridget(c,d),a(function(){a("input[data-provide=slider]")[h]()})}}(a),d});































































































































































































;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
//Slick End
var BigPicture = (function() {
	var t,
		e,
		i,
		s,
		n,
		o,
		r,
		a,
		l,
		c,
		d,
		h,
		u,
		p,
		f,
		m,
		g,
		v,
		_,
		y,
		b,
		w,
		x,
		T,
		$,
		k,
		S,
		C,
		P,
		A,
		O,
		M,
		R,
		E = [],
		D = {},
		z = "appendChild",
		L = "createElement",
		I = "removeChild";

	function H() {
		var e = t.getBoundingClientRect();
		return (
			"transform:translate3D(" +
			(e.left - (i.clientWidth - e.width) / 2) +
			"px, " +
			(e.top - (i.clientHeight - e.height) / 2) +
			"px, 0) scale3D(" +
			t.clientWidth / s.clientWidth +
			", " +
			t.clientHeight / s.clientHeight +
			", 0)"
		);
	}

	function q(t) {
		var e = A.length - 1;
		if (!u) {
			if ((0 < t && P === e) || (t < 0 && !P)) {
				if (!R.loop)
					return (
						G(n, ""),
						void setTimeout(
							G,
							9,
							n,
							"animation:" +
							(0 < t ? "bpl" : "bpf") +
							" .3s;transition:transform .35s"
						)
					);
				P = 0 < t ? -1 : 1 + e;
			}
			if (
				([(P = Math.max(0, Math.min(P + t, e))) - 1, P, P + 1].forEach(
						function(t) {
							var i, s;
							(t = Math.max(0, Math.min(t, e))),
							D[t] ||
								((i = A[t].src),
									(s = document[L]("IMG")).addEventListener(
										"load",
										X.bind(null, i)
									),
									(s.src = i),
									(D[t] = s));
						}
					),
					D[P].complete)
			)
				return F(t);
			(u = 1),
			G(f, "opacity:.4;"),
				i[z](f),
				(D[P].onload = function() {
					b && F(t);
				}),
				(D[P].onerror = function() {
					(A[P] = {
						error: "Error loading image"
					}), b && F(t);
				});
		}
	}

	function F(e) {
		u && (i[I](f), (u = 0));
		var o,
			r = A[P];
		r.error ?
			alert(r.error) :
			((o = i.querySelector("img:last-of-type")),
				G(
					(n = s = D[P]),
					"animation:" +
					(0 < e ? "bpfl" : "bpfr") +
					" .35s;transition:transform .35s"
				),
				G(o, "animation:" + (0 < e ? "bpfol" : "bpfor") + " .35s both"),
				i[z](n),
				r.el && (t = r.el)),
			(O.innerHTML = P + 1 + "/" + A.length),
			W(A[P].caption),
			k && k([n, A[P]]);
	}

	function N() {
		var t,
			e,
			i,
			s = 0.95 * window.innerHeight,
			n = 0.95 * window.innerWidth,
			o = (i = R.dimensions || [1920, 1080])[0],
			r = i[1];
		s / n < (i = r / o) ?
			(e = (t = Math.min(r, s)) / i) :
			(t = (e = Math.min(o, n)) * i),
			(a.style.cssText += "width:" + e + "px;height:" + t + "px;");
	}

	function j(t) {
		~[1, 4].indexOf(s.readyState) ?
			(Y(),
				setTimeout(function() {
					s.play();
				}, 99)) :
			s.error ?
			Y(t) :
			(p = setTimeout(j, 35, t));
	}

	function B(e) {
		R.noLoader ||
			(e &&
				G(
					f,
					"top:" +
					t.offsetTop +
					"px;left:" +
					t.offsetLeft +
					"px;height:" +
					t.clientHeight +
					"px;width:" +
					t.clientWidth +
					"px"
				),
				t.parentElement[e ? z : I](f),
				(u = e));
	}

	function W(t) {
		t && (g.innerHTML = t),
			G(m, "opacity:" + (t ? "1;pointer-events:auto" : "0"));
	}

	function X(t) {
		~E.indexOf(t) || E.push(t);
	}

	function Y(t) {
		if ((u && B(), T && T(), "string" == typeof t))
			return (
				V(),
				R.onError ?
				R.onError() :
				alert("Error: The requested " + t + " could not be loaded.")
			);
		x && X(c),
			(s.style.cssText += H()),
			G(i, "opacity:1;pointer-events:auto;display:block !important;"),
			($ = $ && setTimeout($, 410)),
			(y = 1),
			(b = !!A),
			setTimeout(function() {
				(s.style.cssText += "transition:transform .35s;transform:none"),
				v && setTimeout(W, 250, v);
			}, 60);
	}

	function U(t) {
		var e = t ? t.target : i;
		t = [m, _, o, r, g, C, S, f];
		e.blur(),
			w ||
			~t.indexOf(e) ||
			((s.style.cssText += H()),
				G(i, "pointer-events:auto"),
				setTimeout(V, 350),
				clearTimeout($),
				(y = 0),
				(w = 1));
	}

	function V() {
		if (
			((s === a ? l : s).removeAttribute("src"),
				document.body[I](i),
				i[I](s),
				G(i, ""),
				G(s, ""),
				W(0),
				b)
		) {
			for (var t = i.querySelectorAll("img"), e = 0; e < t.length; e++)
				i[I](t[e]);
			u && i[I](f),
				i[I](O),
				(b = A = 0),
				(D = {}),
				M || i[I](S),
				M || i[I](C),
				(n.onload = Y),
				(n.onerror = Y.bind(null, "image"));
		}
		R.onClose && R.onClose(), (w = u = 0);
	}

	function G(t, e) {
		t.style.cssText = e;
	}
	return function(w) {
		var D, H, F, X, Q;
		return (
			e ||
			(((X = document[L]("STYLE")).innerHTML =
					"#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}"),
				document.head[z](X),
				((i = document[L]("DIV")).id = "bp_container"),
				(i.onclick = U),
				(d = Z("bp-x")),
				i[z](d),
				"ontouchstart" in window &&
				((M = 1),
					(i.ontouchstart = function(t) {
						(t = t.changedTouches), (F = t[0].pageX);
					}),
					(i.ontouchmove = function(t) {
						t.preventDefault();
					}),
					(i.ontouchend = function(t) {
						(t = t.changedTouches),
						b && ((t = t[0].pageX - F) < -30 && q(1), 30 < t && q(-1));
					})),
				(n = document[L]("IMG")),
				((o = document[L]("VIDEO")).id = "bp_vid"),
				o.setAttribute("playsinline", 1),
				(o.controls = 1),
				(o.loop = 1),
				((r = document[L]("audio")).id = "bp_aud"),
				(r.controls = 1),
				(r.loop = 1),
				((O = document[L]("span")).id = "bp_count"),
				((m = document[L]("DIV")).id = "bp_caption"),
				((_ = Z("bp-xc")).onclick = W.bind(null, 0)),
				m[z](_),
				(g = document[L]("SPAN")),
				m[z](g),
				i[z](m),
				(S = K(1, "transform:scalex(-1)")),
				(C = K(-1, "left:0;right:auto")),
				((f = document[L]("DIV")).id = "bp_loader"),
				(f.innerHTML =
					'<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>'),
				((a = document[L]("DIV")).id = "bp_sv"),
				(l = document[L]("IFRAME")).setAttribute("allowfullscreen", 1),
				(l.allow = "autoplay; fullscreen"),
				(l.onload = function() {
					return a[I](f);
				}),
				G(l, "border:0;position:absolute;height:100%;width:100%;left:0;top:0"),
				a[z](l),
				(n.onload = Y),
				(n.onerror = Y.bind(null, "image")),
				window.addEventListener("resize", function() {
					b || (u && B(1)), s === a && N();
				}),
				document.addEventListener("keyup", function(t) {
					27 === (t = t.keyCode) && y && U(),
						b &&
						(39 === t && q(1),
							37 === t && q(-1),
							38 === t && q(10),
							40 === t && q(-10));
				}),
				document.addEventListener("keydown", function(t) {
					b && ~[37, 38, 39, 40].indexOf(t.keyCode) && t.preventDefault();
				}),
				document.addEventListener(
					"focus",
					function(t) {
						y && !i.contains(t.target) && (t.stopPropagation(), d.focus());
					},
					1
				),
				(e = 1)),
			u && (clearTimeout(p), V()),
			(h = (R = w).ytSrc || w.vimeoSrc),
			(T = w.animationStart),
			($ = w.animationEnd),
			(k = w.onChangeImage),
			(x = 0),
			(v = (t = w.el).getAttribute("data-caption")),
			w.gallery ?
			((D = w.gallery),
				(X = w.position),
				(H = R.galleryAttribute || "data-bp"),
				Array.isArray(D) ?
				(v = (A = D)[(P = X || 0)].caption) :
				((D = (A = [].slice.call(
						"string" == typeof D ?
						document.querySelectorAll(D + " [" + H + "]") :
						D
					)).indexOf(t)),
					(P = 0 === X || X ? X : -1 !== D ? D : 0),
					(A = A.map(function(t) {
						return {
							el: t,
							src: t.getAttribute(H),
							caption: t.getAttribute("data-caption"),
						};
					}))),
				(x = 1),
				~E.indexOf((c = A[P].src)) || B(1),
				1 < A.length ?
				(i[z](O),
					(O.innerHTML = P + 1 + "/" + A.length),
					M || (i[z](S), i[z](C))) :
				(A = 0),
				((s = n).src = c)) :
			h || w.iframeSrc ?
			((s = a),
				R.ytSrc ?
				(Q =
					"https://www.youtube" +
					(R.ytNoCookie ? "-nocookie" : "") +
					".com/embed/" +
					h +
					"?html5=1&rel=0&playsinline=1&autoplay=1") :
				R.vimeoSrc ?
				(Q = "https://player.vimeo.com/video/" + h + "?autoplay=1") :
				R.iframeSrc && (Q = R.iframeSrc),
				G(f, ""),
				a[z](f),
				(l.src = Q),
				N(),
				setTimeout(Y, 9)) :
			w.imgSrc ?
			((x = 1), ~E.indexOf((c = w.imgSrc)) || B(1), ((s = n).src = c)) :
			w.audio ?
			(B(1), ((s = r).src = w.audio), j("audio file")) :
			w.vidSrc ?
			(B(1),
				w.dimensions && G(o, "width:" + w.dimensions[0] + "px"),
				(w = w.vidSrc),
				Array.isArray(w) ?
				((s = o.cloneNode()),
					w.forEach(function(t) {
						var e = document[L]("SOURCE");
						(e.src = t),
						(e.type = "video/" + t.match(/.(\w+)$/)[1]),
						s[z](e);
					})) :
				((s = o).src = w),
				j("video")) :
			((s = n).src =
				"IMG" === t.tagName ?
				t.src :
				window
				.getComputedStyle(t)
				.backgroundImage.replace(/^url|[(|)|'|"]/g, "")),
			i[z](s),
			document.body[z](i), {
				close: U,
				next: function() {
					return q(1);
				},
				prev: function() {
					return q(-1);
				},
			}
		);

		function Z(t) {
			var e = document[L]("button");
			return (
				(e.className = t),
				(e.innerHTML =
					'<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>'),
				e
			);
		}

		function K(t, e) {
			var i = document[L]("button");
			return (
				(i.className = "bp-lr"),
				(i.innerHTML =
					'<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>'),
				G(i, e),
				(i.onclick = function(e) {
					e.stopPropagation(), q(t);
				}),
				i
			);
		}
	};
})();
_typeof =
	"function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(t) {
		return typeof t;
	} :
	function(t) {
		return t &&
			"function" == typeof Symbol &&
			t.constructor === Symbol &&
			t !== Symbol.prototype ?
			"symbol" :
			typeof t;
	};
!(function(t, e) {
	"object" ==
	("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
	"undefined" != typeof module
		?
		(module.exports = e()) :
		"function" == typeof define && define.amd ?
		define(e) :
		((t = t || self).Headroom = e());
})(void 0, function() {
	function t() {
		return "undefined" != typeof window;
	}

	function e(t, i) {
		(i = i || {}),
		Object.assign(this, e.options, i),
			(this.classes = Object.assign({}, e.options.classes, i.classes)),
			(this.elem = t),
			(this.tolerance =
				(t = this.tolerance) === Object(t) ? t : {
					down: t,
					up: t
				}),
			(this.initialised = !1),
			(this.frozen = !1);
	}
	return (
		(e.prototype = {
			constructor: e,
			init: function() {
				return (
					e.cutsTheMustard &&
					!this.initialised &&
					(this.addClass("initial"),
						(this.initialised = !0),
						setTimeout(
							function(t) {
								t.scrollTracker = (function(t, e, i) {
									var s,
										n,
										o,
										r,
										a,
										l,
										c,
										d = (function() {
											var t = !1;
											try {
												var e = {
													get passive() {
														t = !0;
													},
												};
												window.addEventListener("test", e, e),
													window.removeEventListener("test", e, e);
											} catch (e) {
												t = !1;
											}
											return t;
										})(),
										h = !1,
										u =
										(n = t) && n.document && 9 === n.document.nodeType ?
										((a = (r = n).document),
											(l = a.body),
											(c = a.documentElement), {
												scrollHeight: function() {
													return Math.max(
														l.scrollHeight,
														c.scrollHeight,
														l.offsetHeight,
														c.offsetHeight,
														l.clientHeight,
														c.clientHeight
													);
												},
												height: function() {
													return (
														r.innerHeight ||
														c.clientHeight ||
														l.clientHeight
													);
												},
												scrollY: function() {
													return void 0 !== r.pageYOffset ?
														r.pageYOffset :
														(c || l.parentNode || l).scrollTop;
												},
											}) :
										((o = n), {
											scrollHeight: function() {
												return Math.max(
													o.scrollHeight,
													o.offsetHeight,
													o.clientHeight
												);
											},
											height: function() {
												return Math.max(o.offsetHeight, o.clientHeight);
											},
											scrollY: function() {
												return o.scrollTop;
											},
										}),
										p = u.scrollY(),
										f = {};

									function m() {
										var t = Math.round(u.scrollY()),
											s = u.height(),
											n = u.scrollHeight();
										(f.scrollY = t),
										(f.lastScrollY = p),
										(f.direction = p < t ? "down" : "up"),
										(f.distance = Math.abs(t - p)),
										(f.isOutOfBounds = t < 0 || n < t + s),
										(f.top = t <= e.offset),
										(f.bottom = n <= t + s),
										(f.toleranceExceeded =
											f.distance > e.tolerance[f.direction]),
										i(f),
											(p = t),
											(h = !1);
									}

									function g() {
										h || ((h = !0), (s = requestAnimationFrame(m)));
									}
									var v = !!d && {
										passive: !0,
										capture: !1
									};
									return (
										t.addEventListener("scroll", g, v),
										m(), {
											destroy: function() {
												cancelAnimationFrame(s),
													t.removeEventListener("scroll", g, v);
											},
										}
									);
								})(
									t.scroller, {
										offset: t.offset,
										tolerance: t.tolerance
									},
									t.update.bind(t)
								);
							},
							100,
							this
						)),
					this
				);
			},
			destroy: function() {
				(this.initialised = !1),
				Object.keys(this.classes).forEach(this.removeClass, this),
					this.scrollTracker.destroy();
			},
			unpin: function() {
				(!this.hasClass("pinned") && this.hasClass("unpinned")) ||
				(this.addClass("unpinned"),
					this.removeClass("pinned"),
					this.onUnpin && this.onUnpin.call(this));
			},
			pin: function() {
				this.hasClass("unpinned") &&
					(this.addClass("pinned"),
						this.removeClass("unpinned"),
						this.onPin && this.onPin.call(this));
			},
			freeze: function() {
				(this.frozen = !0), this.addClass("frozen");
			},
			unfreeze: function() {
				(this.frozen = !1), this.removeClass("frozen");
			},
			top: function() {
				this.hasClass("top") ||
					(this.addClass("top"),
						this.removeClass("notTop"),
						this.onTop && this.onTop.call(this));
			},
			notTop: function() {
				this.hasClass("notTop") ||
					(this.addClass("notTop"),
						this.removeClass("top"),
						this.onNotTop && this.onNotTop.call(this));
			},
			bottom: function() {
				this.hasClass("bottom") ||
					(this.addClass("bottom"),
						this.removeClass("notBottom"),
						this.onBottom && this.onBottom.call(this));
			},
			notBottom: function() {
				this.hasClass("notBottom") ||
					(this.addClass("notBottom"),
						this.removeClass("bottom"),
						this.onNotBottom && this.onNotBottom.call(this));
			},
			shouldUnpin: function(t) {
				return "down" === t.direction && !t.top && t.toleranceExceeded;
			},
			shouldPin: function(t) {
				return ("up" === t.direction && t.toleranceExceeded) || t.top;
			},
			addClass: function(t) {
				this.elem.classList.add.apply(
					this.elem.classList,
					this.classes[t].split(" ")
				);
			},
			removeClass: function(t) {
				this.elem.classList.remove.apply(
					this.elem.classList,
					this.classes[t].split(" ")
				);
			},
			hasClass: function(t) {
				return this.classes[t].split(" ").every(function(t) {
					return this.classList.contains(t);
				}, this.elem);
			},
			update: function(t) {
				t.isOutOfBounds ||
					(!0 !== this.frozen &&
						(t.top ? this.top() : this.notTop(),
							t.bottom ? this.bottom() : this.notBottom(),
							this.shouldUnpin(t) ?
							this.unpin() :
							this.shouldPin(t) && this.pin()));
			},
		}),
		(e.options = {
			tolerance: {
				up: 0,
				down: 0
			},
			offset: 0,
			scroller: t() ? window : null,
			classes: {
				frozen: "headroom--frozen",
				pinned: "headroom--pinned",
				unpinned: "headroom--unpinned",
				top: "headroom--top",
				notTop: "headroom--not-top",
				bottom: "headroom--bottom",
				notBottom: "headroom--not-bottom",
				initial: "headroom",
			},
		}),
		(e.cutsTheMustard = !!(
			t() &&
			function() {}.bind &&
			"classList" in document.documentElement &&
			Object.assign &&
			Object.keys &&
			requestAnimationFrame
		)),
		e
	);
});
_typeof =
	"function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(t) {
		return typeof t;
	} :
	function(t) {
		return t &&
			"function" == typeof Symbol &&
			t.constructor === Symbol &&
			t !== Symbol.prototype ?
			"symbol" :
			typeof t;
	};
!(function(t) {
	t &&
		((t.fn.headroom = function(e) {
				return this.each(function() {
					var i = t(this),
						s = i.data("headroom"),
						n = "object" == (void 0 === e ? "undefined" : _typeof(e)) && e;
					n = t.extend(!0, {}, Headroom.options, n);
					s || ((s = new Headroom(this, n)).init(), i.data("headroom", s)),
						"string" == typeof e &&
						(s[e](), "destroy" === e && i.removeData("headroom"));
				});
			}),
			t("[data-headroom]").each(function() {
				var e = t(this);
				e.headroom(e.data());
			}));
})(window.Zepto || window.jQuery);
var dropdownValue = {
		deposit: [
			1e3, 2e3, 3e3, 1e4, 2e4, 3e4, 4e4, 5e4, 6e4, 7e4, 8e4, 9e4, 1e5, 15e4,
			2e5, 25e4, 3e5, 35e4, 4e5, 45e4,
		],
		spend: [
			500, 750, 1e3, 1500, 2e3, 2500, 3e3, 3500, 4e3, 4500, 5e3, 5500, 6e3,
			6500, 7e3, 7500, 8e3, 8500, 9e3, 9500, 1e4, 10500, 11e3,
		],
	},
	infoText =
	"Your bonus KrisFlyer miles for savings is capped at {miles} miles based on 5% of MAB",
	salaryIsCredited = 0;
!(function() {
	function t(t) {
		return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	function e() {
		var e = salaryIsCredited;
		("1" == $('#input-account [name="krisflyerAccount"]:checked').val() ?
			$("#input-account-yes") :
			$("#input-account-no")
		)
		.closest(".btn")
			.addClass("active");
		var s = parseInt($("#input-spend").val()),
			n = parseInt($("#input-deposit").val()),
			o = 0.05 * n;
		s = 1 == e ? 6 * s : 5 * s;
		0 < n &&
			($(".calculator-container .info").removeClass("hidden"),
				$(".calculator-container .prompter-2").html(
					infoText.replace(/{miles}/gi, t(0.05 * n * 12))
				));
		var r = 0;
		o <= s && i(".spend-miles", (r = 12 * o)),
			s <= o && i(".spend-miles", (r = 12 * s)),
			0 < $(".odometer").length &&
			setTimeout(function() {
				var e = $(".odometer").eq(0),
					i = (new Odometer({
						el: e.get(0),
						format: "d"
					}), 12 * o);
				e.html(r),
					0 < r &&
					($(".calculator-notes").show(),
						$(".calculator-notes").html(
							"<p>Your bonus KrisFlyer miles for savings is capped at " +
							t(i) +
							" miles based on 5% of MAB</p>"
						));
			}, 300);
	}

	function i(t, e) {
		for (
			var i = (i = "0000000" + e.toString()).substring(i.length - 6), s = 0; s < i.length; s++
		)
			$(t)
			.find(".digit:eq(" + s + ")")
			.html(i[s]);
	}
	$(function(i) {
		!(function() {
			$("#input-spend").html('<option value="0">Please select</option>');
			for (var i = 0; i < dropdownValue.spend.length; i++)
				$("#input-spend").append(
					'<option value="' +
					dropdownValue.spend[i] +
					'">' +
					t(dropdownValue.spend[i]) +
					"</option>"
				);
			for (
				$("#input-deposit").html('<option value="0">Please select</option>'),
				i = 0; i < dropdownValue.deposit.length; i++
			)
				$("#input-deposit").append(
					'<option value="' +
					dropdownValue.deposit[i] +
					'">' +
					t(dropdownValue.deposit[i]) +
					"</option>"
				);
			$("#input-spend").change(function(t) {
					e();
				}),
				$("#input-deposit").change(function(t) {
					e();
				}),
				$(".btn-toggle-salary-credit").on("click", function(t) {
					(salaryIsCredited = $(this).data("val")), e();
				});
		})();
	});
})(),
$(document).ready(function() {
		var t = $(".custom-mobile-table .table-icon").outerWidth() + 40,
			e = $(".odometer-wrap img").outerWidth();
		$(".custom-mobile-table .align_icon").css("padding-left", t + "px"),
			768 < $(window).width() &&
			$(".odometer-wrap").css("margin-left", "-" + e + "px"),
			$(".btn-adjust").click(function(t) {
				t.preventDefault();
			}),
			$(".selectpicker").selectpicker(),
			($.fn.selectpicker.Constructor.DEFAULTS.mobile = !0),
			jQuery(window).width() < 768 &&
			($(".desktop1").attr(
					"href",
					"../../../mobile0c9a66/iwov-resources/css/mobile-style.css"
				),
				$(".desktop2").attr(
					"href",
					"../../../mobile0c9a66/iwov-resources/css/mobile-style.css"
				),
				$(".desktop3").attr(
					"href",
					"../../../mobile0c9a66/iwov-resources/css/product-card-detail/product-card-detail-mobile-style.css"
				),
				$(".breadcrumb").hide());
	}),
	$(document).ready(function() {
		var t = $(".custom-mobile-table .table-icon").outerWidth() + 40,
			e = $(".odometer-wrap img").outerWidth();
		$(".custom-mobile-table .align_icon").css("padding-left", t + "px"),
			768 < $(window).width() &&
			$(".odometer-wrap").css("margin-left", "-" + e + "px"),
			$(".btn-adjust").click(function(t) {
				t.preventDefault();
			}),
			($.fn.digits = function() {
				return this.each(function() {
					$(this).text(
						$(this)
						.text()
						.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
					);
				});
			});
		var s = 15e3;

		function n() {
			var t = $("#cardSpend").val(),
				e = $("#acct_balance").val(),
				n = Math.floor(e / s),
				o = [(e = e % s)];
			for (i = 0; i < n; i++) o.push(s);
			o.push(o.shift());
			var r;
			(e =
				((0.25 * o[0]) / 100 || 0) +
				((0.25 * o[1]) / 100 || 0) +
				((0.25 * o[2]) / 100 || 0) +
				((0.25 * o[3]) / 100 || 0) +
				((0.25 * o[4]) / 100 || 0) +
				((0.05 * o[5]) / 100 || 0)),
			(e =
				o
				.slice(6)
				.map(function(t) {
					return (0.05 * t) / 100 || 0;
				})
				.reduce(function(t, e) {
					return t + e;
				}, 0) + e);
			$(".interest-rate-total").text("S$" + e.toFixed(2)),
				$(".interest-rate-total").digits(),
				2e3 <= t ?
				((r = 1200), $(".cashRebate").text("S$" + r)) :
				1e3 <= t ?
				((r = 400), $(".cashRebate").text("S$" + r)) :
				500 <= t ?
				((r = 200), $(".cashRebate").text("S$" + r)) :
				t < 500 && ((r = 0), $(".cashRebate").text("S$" + r));
			var a = e + r;
			0 < $(".odometer").length &&
				setTimeout(function() {
					var t = $(".odometer").eq(0);
					new Odometer({
						el: t.get(0),
						format: "(,ddd).dd"
					}), t.html(a);
				}, 300);
		}

		function o() {
			for (
				var t = 15e3,
					e = $("#cardSpend").val(),
					i =
					($("#sallaryCredit").val(),
						$("#giro").val(),
						$("#acct_balance").val()),
					s = Math.floor(i / t),
					n = [(i = i % t)],
					o = 0; o < s; o++
			)
				n.push(t);
			n.push(n.shift());
			var r;
			(i =
				((0.5 * n[0]) / 100 || 0) +
				((0.55 * n[1]) / 100 || 0) +
				((0.65 * n[2]) / 100 || 0) +
				((0.8 * n[3]) / 100 || 0) +
				((2.5 * n[4]) / 100 || 0) +
				((0.05 * n[5]) / 100 || 0)),
			(i =
				n
				.slice(6)
				.map(function(t) {
					return (0.05 * t) / 100 || 0;
				})
				.reduce(function(t, e) {
					return t + e;
				}, 0) + i);
			$(".interest-rate-total").text("S$" + i.toFixed(2)),
				$(".interest-rate-total").digits(),
				2e3 <= e ?
				((r = 1200), $(".cashRebate").text("S$" + r)) :
				1e3 <= e ?
				((r = 400), $(".cashRebate").text("S$" + r)) :
				500 <= e ?
				((r = 200), $(".cashRebate").text("S$" + r)) :
				e < 500 && ((r = 0), $(".cashRebate").text("S$" + r));
			var a = i + r;
			0 < $(".odometer").length &&
				setTimeout(function() {
					var t = $(".odometer").eq(0);
					new Odometer({
						el: t.get(0),
						format: "(,ddd).dd"
					}), t.html(a);
				}, 300);
		}

		function r() {
			var t,
				e = $("#cardSpend").val(),
				i =
				($("#sallaryCredit").val(),
					$("#giro").val(),
					(0.05 * $("#acct_balance").val()) / 100 || 0);
			$(".interest-rate-total").text("S$" + i.toFixed(2)),
				$(".interest-rate-total").digits(),
				2e3 <= e ?
				((t = 1200), $(".cashRebate").text("S$" + t)) :
				1e3 <= e ?
				((t = 400), $(".cashRebate").text("S$" + t)) :
				500 <= e ?
				((t = 200), $(".cashRebate").text("S$" + t)) :
				e < 500 && ((t = 0), $(".cashRebate").text("S$" + t)),
				0 < $(".odometer").length &&
				setTimeout(function() {
					var t = $(".odometer").eq(0);
					new Odometer({
						el: t.get(0),
						format: "(,ddd).dd"
					}), t.html(i);
				}, 300);
		}

		function a() {
			var t = $("#cardSpend").val(),
				e = $("#sallaryCredit").val(),
				i = $("#giro").val();
			$("#acct_balance").val(),
				(2e3 <= e && 3 <= i) || (2e3 <= e && i < 3) || (e < 2e3 && 3 <= i) ?
				o() :
				e < 2e3 && i < 3 && n(),
				t < 500 && r(),
				2e3 <= t ?
				((s = 1200), $(".cashRebate").text("S$" + s)) :
				1e3 <= t ?
				((s = 400), $(".cashRebate").text("S$" + s)) :
				500 <= t ?
				((s = 200), $(".cashRebate").text("S$" + s)) :
				t < 500 && ((s = 0), $(".cashRebate").text("S$" + s));
			var s = $("#cardSpend").val();
			$(".fakeCardSpend").val(s),
				(s = $("#sallaryCredit").val()),
				$(".fakeSalaryCredit").val(s),
				(s = $("#giro").val()),
				$(".fakeGiro").val(s),
				(s = $("#acct_balance").val()),
				$(".fakeAcctBal").val(s),
				$(".cashRebate").digits();
		}
		o(),
			$(".quantity").on("change keyup", function() {
				a();
			}),
			$(".btn-adjust").on("click", function() {
				a();
			}),
			$(".fake-input").bind("keyup keypress", function() {
				var t = $(".fakeCardSpend")
					.val()
					.replace(/[^0-9.]/g, ""),
					e = parseInt(t.replace(/[^0-9.]/g, ""), 10);
				$("#cardSpend").val(e);
				var i = $(".fakeSalaryCredit")
					.val()
					.replace(/[^0-9.]/g, "");
				t = parseInt(i.replace(/[^0-9.]/g, ""), 10);
				$("#sallaryCredit").val(t),
					(e = $(".fakeGiro")
						.val()
						.replace(/[^0-9.]/g, "")),
					(i = parseInt(e.replace(/[^0-9.]/g, ""), 10)),
					$("#giro").val(i),
					(t = $(".fakeAcctBal")
						.val()
						.replace(/[^0-9.]/g, "")),
					(e = parseInt(t.replace(/[^0-9.]/g, ""), 10)),
					$("#acct_balance").val(e);
				var s;
				(i = $("#cardSpend").val()),
				(t = $("#sallaryCredit").val()),
				(e = $("#giro").val());
				$("#acct_balance").val(),
					(2e3 <= t && 3 <= e) || (2e3 <= t && e < 3) || (t < 2e3 && 3 <= e) ?
					o() :
					t < 2e3 && e < 3 && n(),
					i < 500 && r(),
					2e3 <= i ?
					((s = 1200), $(".cashRebate").text("S$" + s)) :
					1e3 <= i ?
					((s = 400), $(".cashRebate").text("S$" + s)) :
					500 <= i ?
					((s = 200), $(".cashRebate").text("S$" + s)) :
					i < 500 && ((s = 0), $(".cashRebate").text("S$" + s));
			}),
			0 < $('[id*="flexInput"]').length &&
			(new AutoNumeric("#flexInput1", {
					currencySymbol: "S$",
					alwaysAllowDecimalCharacter: !1,
					allowDecimalPadding: !1,
					maximumValue: "1000000000",
					watchExternalChanges: !0,
					emptyInputBehavior: "always",
				}),
				new AutoNumeric("#flexInput2", {
					currencySymbol: "S$",
					alwaysAllowDecimalCharacter: !1,
					allowDecimalPadding: !1,
					maximumValue: "1000000000",
					watchExternalChanges: !0,
					emptyInputBehavior: "always",
				}),
				new AutoNumeric("#flexInput3", {
					alwaysAllowDecimalCharacter: !1,
					allowDecimalPadding: !1,
					maximumValue: "3",
					watchExternalChanges: !0,
					emptyInputBehavior: "always",
				}),
				new AutoNumeric("#flexInput4", {
					currencySymbol: "S$",
					alwaysAllowDecimalCharacter: !1,
					allowDecimalPadding: !1,
					maximumValue: "1000000000",
					watchExternalChanges: !0,
					emptyInputBehavior: "always",
				})),
			jQuery(".number-input").each(function() {
				var t = jQuery(this),
					e = t.find('input[type="number"]'),
					i = t.find(".quantity-up.bt-1"),
					s = t.find(".quantity-down.bt-1"),
					n = t.find(".quantity-up.bt-2"),
					o = t.find(".quantity-down.bt-2"),
					r = t.find(".quantity-up.bt-3"),
					a = t.find(".quantity-down.bt-3"),
					l = t.find(".quantity-up.bt-4"),
					c = t.find(".quantity-down.bt-4"),
					d = e.attr("min"),
					h = e.attr("max");
				e.attr("step"),
					e.attr("step"),
					i.click(function() {
						var i = parseFloat(e.val());
						(i = h <= i ? i : i + 100),
						t.find("input").val(i),
							t.find("input").trigger("change");
					}),
					s.click(function() {
						var i = parseFloat(e.val());
						(i = i <= d ? i : i - 100),
						t.find("input").val(i),
							t.find("input").trigger("change");
					}),
					n.click(function() {
						var i = parseFloat(e.val());
						(i = h <= i ? i : i + 500),
						t.find("input").val(i),
							t.find("input").trigger("change");
					}),
					o.click(function() {
						var i = parseFloat(e.val());
						(i = i <= d ? i : i - 500),
						t.find("input").val(i),
							t.find("input").trigger("change");
					}),
					r.click(function() {
						var i = parseFloat(e.val());
						(i = h <= i ? i : i + 1),
						t.find("input").val(i),
							t.find("input").trigger("change");
					}),
					a.click(function() {
						var i = parseFloat(e.val());
						(i = i <= d ? i : i - 1),
						t.find("input").val(i),
							t.find("input").trigger("change");
					}),
					l.click(function() {
						var i = parseFloat(e.val());
						(i = h <= i ? i : i + 500),
						t.find("input").val(i),
							t.find("input").trigger("change");
					}),
					c.click(function() {
						var i = parseFloat(e.val());
						(i = i <= d ? i : i - 500),
						t.find("input").val(i),
							t.find("input").trigger("change");
					});
			});
	}),
	(function() {
		var t = [],
			e = {
				default: {
					value: [
						21e3, 22e3, 48e3, 49e3, 5e4, 2e5, 1e5, 77e3, 78e3, 79e3, 8e4, 1e5,
					],
				},
				firstMonth: {
					month: new Date().getMonth() + 1,
					year: new Date().getFullYear(),
				},
				sliders: {
					ticks: {
						min: 3e3,
						max: 22e4
					}
				},
				scales: [{
						value: 1e4,
						text: "10k"
					},
					{
						value: 5e4,
						text: "50k"
					},
					{
						value: 1e5,
						text: "100k"
					},
					{
						value: 15e4,
						text: "150k"
					},
					{
						value: 2e5,
						text: "200k"
					},
				],
				tier: [{
						max: 1e4,
						interest: 5e-4
					},
					{
						max: 3e4,
						interest: 0.02
					},
					{
						max: 3e4,
						interest: 0.03
					},
					{
						max: 3e4,
						interest: 0.05
					},
					{
						max: 1e5,
						interest: 5e-4
					},
					{
						max: "other",
						interest: 5e-4
					},
				],
			},
			i = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			];

		function s(e, i) {
			$("input.mabs:eq(" + e + ")").val("S$" + i.format(2)),
				t[e].slider("setValue", i),
				n();
		}

		function n() {
			for (var t = 0, i = 0; i < $("input.mabs").length; i++) {
				var s = 0 == i ? 0 : c($("input#mab-" + i).val()),
					n =
					((s = (function(t, i, s, n) {
							var o = {
								total: 0,
								maxRate: 0
							};
							if (t < i)
								(o.total =
									(e.tier[e.tier.length - 1].interest * t * a(s, n)) / l(n)),
								(o.maxRate = e.tier[e.tier.length - 1].interest);
							else
								for (var r = 0; r < e.tier.length; r++) {
									var c = t > e.tier[r].max ? e.tier[r].max : t;
									if (
										((o.total += (e.tier[r].interest * c * a(s, n)) / l(n)),
											(t -= c),
											(o.maxRate =
												o.maxRate < e.tier[r].interest ?
												e.tier[r].interest :
												o.maxRate),
											t <= 0)
									)
										break;
								}
							return (o.maxRate *= 100), o;
						})(
							c($("input#mab-" + (i + 1)).val()),
							s,
							(n = (function(t, e) {
								return 12 < t && ((t -= 12), (e += 1)), {
									month: t,
									year: e
								};
							})(e.firstMonth.month + i, e.firstMonth.year)).month,
							n.year
						)),
						parseFloat(s.total).toFixed(3).slice(0, -1));
				(t += parseFloat(n)),
				0.05 == s.maxRate ?
					$(".total-interest .d-td:eq(" + i + ")").html(
						s.maxRate.format(2) + "%"
					) :
					$(".total-interest .d-td:eq(" + i + ")").html(
						"up&nbsp;to " + s.maxRate.format(2) + "%"
					),
					$(".interest-amount .d-td:eq(" + i + ")").html(
						"S$" + s.total.toFixed(3).slice(0, -1)
					);
			}
			$(".totalInterest").html("S$" + t.toFixed(3).slice(0, -1));
		}

		function o(t) {
			var e,
				i = $(".responsive-content"),
				s = $(".responsive-content .mCSB_container"),
				n = $(".sliders-wrapper .d-td").width();
			$(".carousel-table a").show(),
				"left" == t ?
				((e = parseInt(s.css("left")) + Math.floor(i.width() / n) * n),
					(e = (e = Math.floor(e / n) * n) < 0 ? e : 0),
					$(".responsive-content").mCustomScrollbar("scrollTo", e)) :
				((e = parseInt(i.width() - s.width())),
					(n =
						(n = parseInt(s.css("left")) - Math.floor(i.width() / n) * n) < e ?
						e :
						n),
					$(".responsive-content").mCustomScrollbar("scrollTo", n));
		}

		function r() {
			var t, i, s, n;
			0 < $(".calculator").length &&
				($(
						".calculator .td-left .d-tr, .calculator .td-center .d-tr, .calculator .td-right .d-tr"
					).height(""),
					$(".calculator .td-center .d-tr, .calculator .td-left .d-tr").each(
						function() {
							var t = $(this).parent().find(".d-tr").index(this),
								e = $(this).height(),
								i = $(".calculator .td-center .d-tr:eq(" + t + ")").height();
							e = e < i ? i : e;
							$(
								".calculator .td-left .d-tr:eq(" +
								t +
								"), .calculator .td-center .d-tr:eq(" +
								t +
								"), .calculator .td-right .d-tr:eq(" +
								t +
								"), .calculator .td-left-xs .d-tr:eq(" +
								t +
								")"
							).height(Math.ceil(e));
						}
					),
					$(".calculator .td-span-content").width($(".calc-table").width())),
				0 < $(".slider-track").length &&
				((t = $(".slider-track").offset().top),
					(n = $(".slider-track").height()),
					(s =
						t -
						(i = $(".calc-table").offset().top) +
						(1 -
							(e.scales[0].value - e.sliders.ticks.min) /
							(e.sliders.ticks.max - e.sliders.ticks.min)) *
						n -
						0.5 * $(".scale-1").height()),
					$(".scale-1").css("top", s),
					(s =
						t -
						i +
						(1 -
							(e.scales[1].value - e.sliders.ticks.min) /
							(e.sliders.ticks.max - e.sliders.ticks.min)) *
						n -
						0.5 * $(".scale-2").height()),
					$(".scale-2").css("top", s),
					(s =
						t -
						i +
						(1 -
							(e.scales[2].value - e.sliders.ticks.min) /
							(e.sliders.ticks.max - e.sliders.ticks.min)) *
						n -
						0.5 * $(".scale-3").height()),
					$(".scale-3").css("top", s),
					(s =
						t -
						i +
						(1 -
							(e.scales[3].value - e.sliders.ticks.min) /
							(e.sliders.ticks.max - e.sliders.ticks.min)) *
						n -
						0.5 * $(".scale-4").height()),
					$(".scale-4").css("top", s),
					(n =
						t -
						i +
						(1 -
							(e.scales[4].value - e.sliders.ticks.min) /
							(e.sliders.ticks.max - e.sliders.ticks.min)) *
						n -
						0.5 * $(".scale-5").height()),
					$(".scale-5").css("top", n));
		}

		function a(t, e) {
			return new Date(e, t, 0).getDate();
		}

		function l(t) {
			return t % 400 == 0 || (t % 100 != 0 && t % 4 == 0) ? 366 : 365;
		}

		function c(t) {
			return parseFloat(t.replace(/[^0-9.]/g, ""));
		}
		$(function(a) {
				$(".carousel-table .left a").click(function(t) {
						t.preventDefault(), o("left");
					}),
					$(".carousel-table .right a").click(function(t) {
						t.preventDefault(), o("right");
					}),
					$("input.mabs").each(function() {
						var t = $("input.mabs").index(this),
							n = e.default.value[t],
							o = e.firstMonth.month + t - 1,
							r = '<div class="info"></div>';
						(r += i[(o = 11 < o ? o - 12 : o)]),
						0 == t && (r += '<div class="note">(Account Opened)</div>'),
							$(".td-center .month .d-td:eq(" + t + ")").html(r),
							$(this)
							.val("S$" + n.format(2))
							.attr("placeholder", "S$" + n.format(2))
							.change(function(t) {
								s($(".mabs").index(this), c($(this).val()));
							});
					}),
					$('.calc-table [data-toggle="tooltip"]').tooltip(),
					$("input.sliders").each(function() {
						var i = e.default.value[$("input.sliders").index(this)];
						t.push(
							$(this)
							.slider({
								orientation: "vertical",
								reversed: !0,
								selection: "after",
								ticks: [e.sliders.ticks.min, e.sliders.ticks.max],
								min: e.sliders.ticks.min,
								max: e.sliders.ticks.max,
								step: 500,
								value: i,
								tooltip: "hide",
							})
							.on("change", function(t) {
								s($(".sliders").index(this), t.value.newValue);
							})
						);
					}),
					n(),
					r(),
					o("left"),
					$(".carousel").on("touchstart", function(t) {
						var e = t.originalEvent.touches[0].pageX;
						$(this).one("touchmove", function(t) {
								(t = t.originalEvent.touches[0].pageX),
								5 < Math.floor(e - t) ?
									$(this).carousel("next") :
									Math.floor(e - t) < -5 && $(this).carousel("prev");
							}),
							$(".carousel").on("touchend", function() {
								$(this).off("touchmove");
							});
					}),
					$(".instruction-dot").hover(function() {
						$(".instruction-box").is(":visible") ?
							$(".instruction-box").hide() :
							$(".instruction-box").show();
					});
			}),
			$(window).on("load", function() {
				$(".responsive-content").mCustomScrollbar({
					axis: "x",
					theme: "dark-thick",
					setWidth: "100%",
					callbacks: {
						onScroll: function() {}
					},
				});
			}),
			$(window).on("resize", function(t) {
				r();
			}),
			$(window).on("scroll", function(t) {}),
			(Number.prototype.format = function(t, e) {
				return (
					(e = "\\d(?=(\\d{" + (e || 3) + "})+" + (0 < t ? "\\." : "$") + ")"),
					this.toFixed(Math.max(0, ~~t)).replace(new RegExp(e, "g"), "$&,")
				);
			});
	})();
_typeof =
	"function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(t) {
		return typeof t;
	} :
	function(t) {
		return t &&
			"function" == typeof Symbol &&
			t.constructor === Symbol &&
			t !== Symbol.prototype ?
			"symbol" :
			typeof t;
	};

function commaSeparateNumber(t) {
	for (;
		/(\d+)(\d{3})/.test(t.toString());)
		t = t.toString().replace(/(\d+)(\d{3})/, "$1,$2");
	return t;
}

function rebate_calc() {
	var result = {
		totalMonthlySpend: 0,
		quarterlyRebate: 0,
		monthlyAdditionalRebate: 0,
		totalYearlyRebate: 0,
	};

	var spendDining = $("#item-dining").val() == '' ? 0 : parseFloat($("#item-dining").val());
	var spendMcdonald = $("#item-mcdonalds").val() == '' ? 0 : parseFloat($("#item-mcdonalds").val());
	var spendPetrol = $("#item-petrol").val() == '' ? 0 : parseFloat($("#item-petrol").val());
	var spendGroceries = $("#item-groceries").val() == '' ? 0 : parseFloat($("#item-groceries").val());
	var spendShopee = $("#item-shopee").val() == '' ? 0 : parseFloat($("#item-shopee").val());
	var spendGrab = $("#item-grab").val() == '' ? 0 : parseFloat($("#item-grab").val());
	var spendSimplyGo = $("#item-simplygo").val() == '' ? 0 : parseFloat($("#item-simplygo").val());
	var spendUOBTravel = $("#item-uobTravel").val() == '' ? 0 : parseFloat($("#item-uobTravel").val());
	var spendSP = $("#item-sp").val() == '' ? 0 : parseFloat($("#item-sp").val());
	var spendBillPayment = $("#item-bill-payment").val() == '' ? 0 : parseFloat($("#item-bill-payment").val());
	var spendOther = $("#item-other").val() == '' ? 0 : parseFloat($("#item-other").val());

	result.totalMonthlySpend = spendDining + spendPetrol + spendGroceries + spendShopee + spendGrab + spendSimplyGo + spendUOBTravel + spendSP + spendBillPayment + spendMcdonald + spendOther;

	var additionalCashback = 0.05;

	if (result.totalMonthlySpend >= 2000) {
		result.quarterlyRebate = 200;
		additionalCashback = 0.0667;
	} else if (result.totalMonthlySpend >= 1000) {
		result.quarterlyRebate = 100;
	} else if (result.totalMonthlySpend >= 500) {
		result.quarterlyRebate = 50;
	}
	if (result.quarterlyRebate > 0) {
		result.monthlyAdditionalRebate = additionalCashback * (spendGroceries + spendShopee + spendGrab + spendSimplyGo + spendUOBTravel + spendMcdonald) + 0.01 * spendSP;
		result.monthlyAdditionalRebate = result.monthlyAdditionalRebate > 100 ? 100 : result.monthlyAdditionalRebate;
	}

	result.totalYearlyRebate = 4 * result.quarterlyRebate + 12 * result.monthlyAdditionalRebate;
	$("#total-spend").html("S$" + commaSeparateNumber(result.totalMonthlySpend));
	$("#cash-rebate").html("S$" + commaSeparateNumber(result.totalYearlyRebate.toFixed(2)));
	return result;
}

function initCarousel(t, interval) {
	// console.log("initCarousel", t);
	t.each(function() {
		var $t = $(this);
		var e = $t.find(".tile-card-slide:visible .carousel-item").length - 1;
		if (e) {
			$t.find(".tile-card-slide .carousel-control-next").removeClass("invisible");
			var c = $t.find(".tile-card-slide .carousel");
			if (c.length && !c.hasClass('carousele-initialized')) {
				var _interval = c.data('interval') ? parseInt(c.data('interval')) : (c.data('bs-interval') ? parseInt(c.data('interval')) : (interval ? interval : 4000));
				c.addClass('carousele-initialized').carousel({
					interval: _interval,
					wrap: true
				}).on("slide.bs.carousel", function(i) {
					0 == i.to ?
						($t.find(".carousel-control-prev").addClass("invisible"),
							$t.find(".carousel-control-next").removeClass("invisible")) :
						i.to == e ?
						($t.find(".carousel-control-prev").removeClass("invisible"),
							$t.find(".carousel-control-next").addClass("invisible")) :
						($t.find(".carousel-control-prev").removeClass("invisible"),
							$t.find(".carousel-control-next").removeClass("invisible"));
				});
			}
		}
	});
}!(function(t) {
	var e = (function() {
			try {
				if (
					t.URLSearchParams &&
					"bar" === new t.URLSearchParams("foo=bar").get("foo")
				)
					return t.URLSearchParams;
			} catch (t) {}
			return null;
		})(),
		i = e && "a=1" === new e({
			a: 1
		}).toString(),
		s = e && "+" === new e("s=%2B").get("s"),
		n = "__URLSearchParams__",
		o = !e || ((r = new e()).append("s", " &"), "s=+%26" === r.toString()),
		r = l.prototype,
		a = !(!t.Symbol || !t.Symbol.iterator);

	function l(t) {
		((t = t || "") instanceof URLSearchParams || t instanceof l) &&
		(t = t.toString()),
		(this[n] = u(t));
	}

	function c(t) {
		var e = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+",
			"%00": "\0",
		};
		return encodeURIComponent(t).replace(/[!'\(\)~]|%20|%00/g, function(t) {
			return e[t];
		});
	}

	function d(t) {
		return t.replace(/[ +]/g, "%20").replace(/(%[a-f0-9]{2})+/gi, function(t) {
			return decodeURIComponent(t);
		});
	}

	function h(e) {
		var i = {
			next: function() {
				var t = e.shift();
				return {
					done: void 0 === t,
					value: t
				};
			},
		};
		return (
			a &&
			(i[t.Symbol.iterator] = function() {
				return i;
			}),
			i
		);
	}

	function u(t) {
		var e = {};
		if ("object" === (void 0 === t ? "undefined" : _typeof(t)))
			if (f(t))
				for (var i = 0; i < t.length; i++) {
					var s = t[i];
					if (!f(s) || 2 !== s.length)
						throw new TypeError(
							"Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements"
						);
					p(e, s[0], s[1]);
				}
		else
			for (var n in t) t.hasOwnProperty(n) && p(e, n, t[n]);
		else {
			0 === t.indexOf("?") && (t = t.slice(1));
			for (var o = t.split("&"), r = 0; r < o.length; r++) {
				var a = o[r],
					l = a.indexOf("="); -
				1 < l ?
					p(e, d(a.slice(0, l)), d(a.slice(l + 1))) :
					a && p(e, d(a), "");
			}
		}
		return e;
	}

	function p(t, e, i) {
		(i =
			"string" == typeof i ?
			i :
			null != i && "function" == typeof i.toString ?
			i.toString() :
			JSON.stringify(i)),
		m(t, e) ? t[e].push(i) : (t[e] = [i]);
	}

	function f(t) {
		return t && "[object Array]" === Object.prototype.toString.call(t);
	}

	function m(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e);
	}
	(e && i && s && o) ||
	((r.append = function(t, e) {
			p(this[n], t, e);
		}),
		(r.delete = function(t) {
			delete this[n][t];
		}),
		(r.get = function(t) {
			var e = this[n];
			return this.has(t) ? e[t][0] : null;
		}),
		(r.getAll = function(t) {
			var e = this[n];
			return this.has(t) ? e[t].slice(0) : [];
		}),
		(r.has = function(t) {
			return m(this[n], t);
		}),
		(r.set = function(t, e) {
			this[n][t] = ["" + e];
		}),
		(r.toString = function() {
			var t,
				e,
				i,
				s,
				o = this[n],
				r = [];
			for (e in o)
				for (i = c(e), t = 0, s = o[e]; t < s.length; t++)
					r.push(i + "=" + c(s[t]));
			return r.join("&");
		}),
		(i = !!s && e && !i && t.Proxy),
		Object.defineProperty(t, "URLSearchParams", {
			value: i ?
				new Proxy(e, {
					construct: function(t, e) {
						return new t(new l(e[0]).toString());
					},
				}) : l,
		}),
		((e = t.URLSearchParams.prototype).polyfill = !0),
		(e.forEach =
			e.forEach ||
			function(t, e) {
				var i = u(this.toString());
				Object.getOwnPropertyNames(i).forEach(function(s) {
					i[s].forEach(function(i) {
						t.call(e, i, s, this);
					}, this);
				}, this);
			}),
		(e.sort =
			e.sort ||
			function() {
				var t,
					e,
					i = u(this.toString()),
					s = [];
				for (t in i) s.push(t);
				for (s.sort(), e = 0; e < s.length; e++) this.delete(s[e]);
				for (e = 0; e < s.length; e++)
					for (var n = s[e], o = i[n], r = 0; r < o.length; r++)
						this.append(n, o[r]);
			}),
		(e.keys =
			e.keys ||
			function() {
				var t = [];
				return (
					this.forEach(function(e, i) {
						t.push(i);
					}),
					h(t)
				);
			}),
		(e.values =
			e.values ||
			function() {
				var t = [];
				return (
					this.forEach(function(e) {
						t.push(e);
					}),
					h(t)
				);
			}),
		(e.entries =
			e.entries ||
			function() {
				var t = [];
				return (
					this.forEach(function(e, i) {
						t.push([i, e]);
					}),
					h(t)
				);
			}),
		a && (e[t.Symbol.iterator] = e[t.Symbol.iterator] || e.entries));
})(
	"undefined" != typeof global ?
	global :
	"undefined" != typeof window ?
	window :
	void 0
),
(function(t) {
	var e, i, s, n;
	t.fn.slick &&
		((n = (s = t("<div>").slick())[0].slick.constructor),
			s.slick("unslick"),
			(n = n) &&
			((e = n.prototype.checkResponsive),
				(n.prototype.checkResponsive = function(i, s) {
					var n = this;
					if (
						n.options.autoSlidesToShow &&
						!n.options.infinite &&
						n.options.variableWidth
					) {
						for (
							var o = n.$slider.width(), r = 0, a = n.$slides.length, l = 0; l < a; l++
						)
							r += t(n.$slides[l]).innerWidth();
						(n.averageSlidesWidth = r / a),
						(n.options.slidesToShow =
							Math.floor(o / n.averageSlidesWidth) || 1),
						n.lastSlidesToShow !== n.options.slidesToShow &&
							((n.lastSlidesToShow = n.options.slidesToShow),
								!0 === i && (n.currentSlide = n.options.initialSlide),
								n.refresh(i));
					}
					return e.apply(this, arguments);
				}),
				(i = n.prototype.getLeft),
				(n.prototype.getLeft = function(t) {
					var e = this;
					if (
						e.options.autoSlidesToShow &&
						!e.options.infinite &&
						e.options.variableWidth
					) {
						var s = e.$slideTrack.children(".slick-slide").eq(t);
						if (s[0]) {
							var n,
								o = 0;
							return (
								t &&
								((n = e.$slider.width()),
									(e = (e.slideCount - t) * e.averageSlidesWidth) < n &&
									(o = n - e)),
								-1 * (s[0].offsetLeft - o)
							);
						}
						return 0;
					}
					return i.apply(this, arguments);
				})));
})(jQuery),
(function() {
	function t(s) {
		if (!s) throw new Error("No options passed to Waypoint constructor");
		if (!s.element)
			throw new Error("No element option passed to Waypoint constructor");
		if (!s.handler)
			throw new Error("No handler option passed to Waypoint constructor");
		(this.key = "waypoint-" + e),
		(this.options = t.Adapter.extend({}, t.defaults, s)),
		(this.element = this.options.element),
		(this.adapter = new t.Adapter(this.element)),
		(this.callback = s.handler),
		(this.axis = this.options.horizontal ? "horizontal" : "vertical"),
		(this.enabled = this.options.enabled),
		(this.triggerPoint = null),
		(this.group = t.Group.findOrCreate({
			name: this.options.group,
			axis: this.axis,
		})),
		(this.context = t.Context.findOrCreateByElement(this.options.context)),
		t.offsetAliases[this.options.offset] &&
			(this.options.offset = t.offsetAliases[this.options.offset]),
			this.group.add(this),
			this.context.add(this),
			(i[this.key] = this),
			(e += 1);
	}
	var e = 0,
		i = {};
	(t.prototype.queueTrigger = function(t) {
		this.group.queueTrigger(this, t);
	}),
	(t.prototype.trigger = function(t) {
		this.enabled && this.callback && this.callback.apply(this, t);
	}),
	(t.prototype.destroy = function() {
		this.context.remove(this), this.group.remove(this), delete i[this.key];
	}),
	(t.prototype.disable = function() {
		return (this.enabled = !1), this;
	}),
	(t.prototype.enable = function() {
		return this.context.refresh(), (this.enabled = !0), this;
	}),
	(t.prototype.next = function() {
		return this.group.next(this);
	}),
	(t.prototype.previous = function() {
		return this.group.previous(this);
	}),
	(t.invokeAll = function(t) {
		var e,
			s = [];
		for (e in i) s.push(i[e]);
		for (var n = 0, o = s.length; n < o; n++) s[n][t]();
	}),
	(t.destroyAll = function() {
		t.invokeAll("destroy");
	}),
	(t.disableAll = function() {
		t.invokeAll("disable");
	}),
	(t.enableAll = function() {
		for (var e in (t.Context.refreshAll(), i)) i[e].enabled = !0;
		return this;
	}),
	(t.refreshAll = function() {
		t.Context.refreshAll();
	}),
	(t.viewportHeight = function() {
		return window.innerHeight || document.documentElement.clientHeight;
	}),
	(t.viewportWidth = function() {
		return document.documentElement.clientWidth;
	}),
	(t.adapters = []),
	(t.defaults = {
		context: window,
		continuous: !0,
		enabled: !0,
		group: "default",
		horizontal: !1,
		offset: 0,
	}),
	(t.offsetAliases = {
		"bottom-in-view": function() {
			return this.context.innerHeight() - this.adapter.outerHeight();
		},
		"right-in-view": function() {
			return this.context.innerWidth() - this.adapter.outerWidth();
		},
	}),
	(window.Waypoint = t);
})(),
(function() {
	function t(n) {
		(this.element = n),
		(this.Adapter = s.Adapter),
		(this.adapter = new this.Adapter(n)),
		(this.key = "waypoint-context-" + e),
		(this.didScroll = !1),
		(this.didResize = !1),
		(this.oldScroll = {
			x: this.adapter.scrollLeft(),
			y: this.adapter.scrollTop(),
		}),
		(this.waypoints = {
			vertical: {},
			horizontal: {}
		}),
		(n.waypointContextKey = this.key),
		(i[n.waypointContextKey] = this),
		(e += 1),
		s.windowContext ||
			((s.windowContext = !0), (s.windowContext = new t(window))),
			this.createThrottledScrollHandler(),
			this.createThrottledResizeHandler();
	}
	var e = 0,
		i = {},
		s = window.Waypoint,
		n = window.onload;
	(t.prototype.add = function(t) {
		var e = t.options.horizontal ? "horizontal" : "vertical";
		(this.waypoints[e][t.key] = t), this.refresh();
	}),
	(t.prototype.checkEmpty = function() {
		var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
			e = this.Adapter.isEmptyObject(this.waypoints.vertical),
			s = this.element == this.element.window;
		t && e && !s && (this.adapter.off(".waypoints"), delete i[this.key]);
	}),
	(t.prototype.createThrottledResizeHandler = function() {
		function t() {
			e.handleResize(), (e.didResize = !1);
		}
		var e = this;
		this.adapter.on("resize.waypoints", function() {
			e.didResize || ((e.didResize = !0), s.requestAnimationFrame(t));
		});
	}),
	(t.prototype.createThrottledScrollHandler = function() {
		function t() {
			e.handleScroll(), (e.didScroll = !1);
		}
		var e = this;
		this.adapter.on("scroll.waypoints", function() {
			(e.didScroll && !s.isTouch) ||
			((e.didScroll = !0), s.requestAnimationFrame(t));
		});
	}),
	(t.prototype.handleResize = function() {
		s.Context.refreshAll();
	}),
	(t.prototype.handleScroll = function() {
		var t,
			e,
			i = {},
			s = {
				horizontal: {
					newScroll: this.adapter.scrollLeft(),
					oldScroll: this.oldScroll.x,
					forward: "right",
					backward: "left",
				},
				vertical: {
					newScroll: this.adapter.scrollTop(),
					oldScroll: this.oldScroll.y,
					forward: "down",
					backward: "up",
				},
			};
		for (t in s) {
			var n,
				o = s[t],
				r = o.newScroll > o.oldScroll ? o.forward : o.backward;
			for (n in this.waypoints[t]) {
				var a,
					l,
					c = this.waypoints[t][n];
				null !== c.triggerPoint &&
					((a = o.oldScroll < c.triggerPoint),
						(l = o.newScroll >= c.triggerPoint),
						((a && l) || (!a && !l)) &&
						(c.queueTrigger(r), (i[c.group.id] = c.group)));
			}
		}
		for (e in i) i[e].flushTriggers();
		this.oldScroll = {
			x: s.horizontal.newScroll,
			y: s.vertical.newScroll
		};
	}),
	(t.prototype.innerHeight = function() {
		return this.element == this.element.window ?
			s.viewportHeight() :
			this.adapter.innerHeight();
	}),
	(t.prototype.remove = function(t) {
		delete this.waypoints[t.axis][t.key], this.checkEmpty();
	}),
	(t.prototype.innerWidth = function() {
		return this.element == this.element.window ?
			s.viewportWidth() :
			this.adapter.innerWidth();
	}),
	(t.prototype.destroy = function() {
		var t,
			e = [];
		for (t in this.waypoints)
			for (var i in this.waypoints[t]) e.push(this.waypoints[t][i]);
		for (var s = 0, n = e.length; s < n; s++) e[s].destroy();
	}),
	(t.prototype.refresh = function() {
		var t,
			e,
			i = this.element == this.element.window,
			n = i ? void 0 : this.adapter.offset(),
			o = {};
		for (e in (this.handleScroll(),
				(t = {
					horizontal: {
						contextOffset: i ? 0 : n.left,
						contextScroll: i ? 0 : this.oldScroll.x,
						contextDimension: this.innerWidth(),
						oldScroll: this.oldScroll.x,
						forward: "right",
						backward: "left",
						offsetProp: "left",
					},
					vertical: {
						contextOffset: i ? 0 : n.top,
						contextScroll: i ? 0 : this.oldScroll.y,
						contextDimension: this.innerHeight(),
						oldScroll: this.oldScroll.y,
						forward: "down",
						backward: "up",
						offsetProp: "top",
					},
				}))) {
			var r,
				a = t[e];
			for (r in this.waypoints[e]) {
				var l,
					c = this.waypoints[e][r],
					d = c.options.offset,
					h = c.triggerPoint,
					u = 0,
					p = null == h;
				c.element !== c.element.window &&
					(u = c.adapter.offset()[a.offsetProp]),
					"function" == typeof d ?
					(d = d.apply(c)) :
					"string" == typeof d &&
					((d = parseFloat(d)),
						-1 < c.options.offset.indexOf("%") &&
						(d = Math.ceil((a.contextDimension * d) / 100))),
					(l = a.contextScroll - a.contextOffset),
					(c.triggerPoint = Math.floor(u + l - d)),
					(l = h < a.oldScroll),
					(d = c.triggerPoint >= a.oldScroll),
					(h = !l && !d),
					!p && l && d ?
					(c.queueTrigger(a.backward), (o[c.group.id] = c.group)) :
					((!p && h) || (p && a.oldScroll >= c.triggerPoint)) &&
					(c.queueTrigger(a.forward), (o[c.group.id] = c.group));
			}
		}
		return (
			s.requestAnimationFrame(function() {
				for (var t in o) o[t].flushTriggers();
			}),
			this
		);
	}),
	(t.findOrCreateByElement = function(e) {
		return t.findByElement(e) || new t(e);
	}),
	(t.refreshAll = function() {
		for (var t in i) i[t].refresh();
	}),
	(t.findByElement = function(t) {
		return i[t.waypointContextKey];
	}),
	(window.onload = function() {
		n && n(), t.refreshAll();
	}),
	(s.requestAnimationFrame = function(t) {
		(
			window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			function(t) {
				window.setTimeout(t, 1e3 / 60);
			}
		).call(window, t);
	}),
	(s.Context = t);
})(),
(function() {
	function t(t, e) {
		return t.triggerPoint - e.triggerPoint;
	}

	function e(t, e) {
		return e.triggerPoint - t.triggerPoint;
	}

	function i(t) {
		(this.name = t.name),
		(this.axis = t.axis),
		(this.id = this.name + "-" + this.axis),
		(this.waypoints = []),
		this.clearTriggerQueues(),
			(s[this.axis][this.name] = this);
	}
	var s = {
			vertical: {},
			horizontal: {}
		},
		n = window.Waypoint;
	(i.prototype.add = function(t) {
		this.waypoints.push(t);
	}),
	(i.prototype.clearTriggerQueues = function() {
		this.triggerQueues = {
			up: [],
			down: [],
			left: [],
			right: []
		};
	}),
	(i.prototype.flushTriggers = function() {
		for (var i in this.triggerQueues) {
			var s = this.triggerQueues[i],
				n = "up" === i || "left" === i;
			s.sort(n ? e : t);
			for (var o = 0, r = s.length; o < r; o += 1) {
				var a = s[o];
				(!a.options.continuous && o !== s.length - 1) || a.trigger([i]);
			}
		}
		this.clearTriggerQueues();
	}),
	(i.prototype.next = function(e) {
		return (
			this.waypoints.sort(t),
			(e = n.Adapter.inArray(e, this.waypoints)) ===
			this.waypoints.length - 1 ?
			null :
			this.waypoints[e + 1]
		);
	}),
	(i.prototype.previous = function(e) {
		return (
			this.waypoints.sort(t),
			(e = n.Adapter.inArray(e, this.waypoints)) ?
			this.waypoints[e - 1] :
			null
		);
	}),
	(i.prototype.queueTrigger = function(t, e) {
		this.triggerQueues[e].push(t);
	}),
	(i.prototype.remove = function(t) {
		-1 < (t = n.Adapter.inArray(t, this.waypoints)) &&
			this.waypoints.splice(t, 1);
	}),
	(i.prototype.first = function() {
		return this.waypoints[0];
	}),
	(i.prototype.last = function() {
		return this.waypoints[this.waypoints.length - 1];
	}),
	(i.findOrCreate = function(t) {
		return s[t.axis][t.name] || new i(t);
	}),
	(n.Group = i);
})(),
(function() {
	function t(t) {
		this.$element = e(t);
	}
	var e = window.jQuery,
		i = window.Waypoint;
	e.each(
			[
				"innerHeight",
				"innerWidth",
				"off",
				"offset",
				"on",
				"outerHeight",
				"outerWidth",
				"scrollLeft",
				"scrollTop",
			],
			function(e, i) {
				t.prototype[i] = function() {
					var t = Array.prototype.slice.call(arguments);
					return this.$element[i].apply(this.$element, t);
				};
			}
		),
		e.each(["extend", "inArray", "isEmptyObject"], function(i, s) {
			t[s] = e[s];
		}),
		i.adapters.push({
			name: "jquery",
			Adapter: t
		}),
		(i.Adapter = t);
})(),
(function() {
	function t(t) {
		return function() {
			var i = [],
				s = arguments[0];
			return (
				t.isFunction(arguments[0]) &&
				((s = t.extend({}, arguments[1])).handler = arguments[0]),
				this.each(function() {
					var n = t.extend({}, s, {
						element: this
					});
					"string" == typeof n.context &&
						(n.context = t(this).closest(n.context)[0]),
						i.push(new e(n));
				}),
				i
			);
		};
	}
	var e = window.Waypoint;
	window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
		window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
})(),
$(document).ready(function() {
		var t,
			e,
			i =
			$("#pd-scrollpy-nav") &&
			$("#pd-scrollpy-nav").offset() &&
			$("#pd-scrollpy-nav").offset().top;

		function s() {
			var t = $("#tab-underline");
			0 < $("#pills-tab .active").length && (i = $("#pills-tab .active"));
			var e =
				i &&
				i.position() &&
				i.position().left + parseInt(i.css("padding-left")),
				i = i && i.width();
			768 <= $(window).width() &&
				t.css({
					bottom: "-10px",
					left: e,
					width: i,
					opacity: 1
				});
		}
  
		$('[data-spy="scroll"]') &&
			$('[data-spy="scroll"]').attr("data-offset", 150),
			$(window).scroll(function(t) {
				var e = $(document).scrollTop(),
					n = $(window).scrollTop();
				i < e ?
					($("#pd-scrollpy-nav").addClass("sticky-scrollpy-nav"),
                     $(".sticky-mobile-button").show(),
						$("#pd-scrollpy-nav ul.nav")
						.removeClass("justify-content-center")
						.addClass("justify-content-start"),
						$("#pd-mega-menu .mega-menu-lg-container").removeClass("shadow"),
                     
						$(".lg-down-header .mega-menu-lg-down-container").removeClass(
							"shadow"
						)) :
					($("#pd-scrollpy-nav").removeClass("sticky-scrollpy-nav"),
                     $(".sticky-mobile-button").hide(),
						$("#pd-scrollpy-nav ul.nav")
						.removeClass("justify-content-start")
						.addClass("justify-content-center"),
						$("#pd-mega-menu .mega-menu-lg-container").addClass("shadow"),
						$(".lg-down-header .mega-menu-lg-down-container").addClass(
							"shadow"
						),
						$("#pd-scrollpy-nav ul")
						.children("li:first-child")
						.children(".nav-link")
						.addClass("active")),
					s(),
					$("#header").height() < n ?
					($(".header-mega-menu .fixed-top").removeClass("offset-top"),
						$(".header .lg-navbar .login-button")
						.removeClass("d-block")
						.addClass("d-none"),
						$(".header-mega-menu .login-button-sticky")
						.removeClass("d-none")
						.addClass("d-block"),
						$(".sticky-navbar")
						.removeClass("login-button-sticky-none")
						.addClass("login-button-sticky-block")) :
					($(".header-mega-menu .fixed-top").addClass("offset-top"),
						$(".header .lg-navbar .login-button")
						.removeClass("d-none")
						.addClass("d-block"),
						$(".header-mega-menu .login-button-sticky")
						.removeClass("d-block")
						.addClass("d-none"),
						$(".sticky-navbar")
						.removeClass("login-button-sticky-block")
						.addClass("login-button-sticky-none")),
					($(".header-mega-menu.headroom.headroom--unpinned").is(":visible") ||
						$(".mega-menu-lg-down-container.headroom.headroom--unpinned").is(
							":visible"
						)) &&
					$(".uob-scrollpy.sticky-scrollpy-nav").css("top", "0"),
					($(".header-mega-menu.headroom.headroom--pinned").is(":visible") ||
						$(".mega-menu-lg-down-container.headroom.headroom--pinned").is(
							":visible"
						)) &&
					$(".uob-scrollpy.sticky-scrollpy-nav").css("top", "66px"),
					$(".uob-scrollpy").hasClass("sticky-scrollpy-nav") ||
					$(".uob-scrollpy").css("top", "0");
			}),
			$(".uob-scrollpy .nav-item").on("click", function() {
				$(".uob-scrollpy .nav-item").find(".nav-link").removeClass("active"),
					$(".uob-scrollpy .nav-item")
					.find(".nav-link")
					.removeClass("default-active"),
					$(this).find(".nav-link").addClass("active"),
					setTimeout(function() {
						s();
					}, 100);
			}),
			$(".close-notice-bar").click(function() {
				$(this).closest(".notice-bar").addClass("d-none"),
					$(".page-header .header-mega-menu .lg-down-mega-menu").css(
						"top",
						$(".lg-down-header").outerHeight()
					);
			}),
			$(window).on("activate.bs.scrollspy", function(t, e) {
				var i;
				e &&
					e.relatedTarget &&
					((i = $("." + e.relatedTarget.slice(1)).text()),
						$("#pd-scrollpy-nav ul .nav-link").removeClass("active"),
						$("#pd-scrollpy-nav ul .nav-link").removeClass("default-active"),
						$("#pd-anchor-link .dropdown-toggle-lable").text(i),
						$('#pd-scrollpy-nav a[href="' + e.relatedTarget + '"]').addClass(
							"active"
						),
						s());
			}),
			$(".uob-accordion")
			.find(".card .card-header")
			.click(function() {
				var t = $(this),
					e = $(this).closest(".card-header"),
					i = $(this).closest(".card-header").closest(".card");
				"false" == e.attr("aria-expanded") ?
					(e.addClass("border-grey"),
						i.removeClass("border-grey").addClass("border-bottom-0"),
						t.closest(".modal").length < 1 &&
						setTimeout(function() {
							$("body,html").animate({
									scrollTop: t.offset().top - 100
								},
								300
							);
						}, 300)) :
					(e.removeClass("border-grey"),
						i.removeClass("border-bottom-0").addClass("border-grey"));
			}),
			$(window).on("resize", function(t) {
				$(".uob-steps .steps li").attr("style", ""),
					0 < document.querySelectorAll(".uob-steps").length &&
					window.matchMedia("screen and (min-width: 576px)").matches &&
					document.querySelectorAll(".uob-steps").forEach(function(t, e, i) {
						var s = 0;
						t.querySelectorAll(".steps li").forEach(function(e, i, n) {
							(s += 1),
							i == n.length - 1 &&
								t.querySelectorAll(".steps li").forEach(function(t) {
									t.style = "width: calc(100% / " + s + ");";
								});
						});
					});
			}),
			0 < document.querySelectorAll(".uob-steps").length &&
			window.matchMedia("screen and (min-width: 576px)").matches &&
			document.querySelectorAll(".uob-steps").forEach(function(t, e, i) {
				var s = 0;
				t.querySelectorAll(".steps li").forEach(function(e, i, n) {
					(s += 1),
					i == n.length - 1 &&
						t.querySelectorAll(".steps li").forEach(function(t) {
							t.style = "width: calc(100% / " + s + ");";
						});
				});
			}),
			sessionStorage.getItem("cookieAlert") ||
			($(".uob-cookie").addClass("show"),
				sessionStorage.setItem("cookieAlert", Date.now()),
				$(".uob-cookie").on("click", ".close", function() {
					$(".uob-cookie").removeClass("show");
				})),
			$(".modal").on("shown.bs.modal", function() {}),
			$(".modal")
			.on("show.bs.modal", function() {
				document
					.querySelector("html")
					.setAttribute("style", "overflow: hidden;"),
					document
					.querySelector(".lg-down-mega-menu")
					.classList.remove("show"),
					document
					.querySelector(".headroom")
					.classList.add("headroom--pinned"),
					$(".lg-down-header .navbar-toggler-icon.menu-close").addClass(
						"d-none"
					),
					$(".lg-down-header .navbar-toggler-icon.menu-open").removeClass(
						"d-none"
					),
					setTimeout(function() {
						($(".header-mega-menu.headroom.headroom--unpinned").is(
								":visible"
							) ||
							$(
								".mega-menu-lg-down-container.headroom.headroom--unpinned"
							).is(":visible")) &&
						$(".uob-scrollpy.sticky-scrollpy-nav").css("top", "0"),
							($(".header-mega-menu.headroom.headroom--pinned").is(
									":visible"
								) ||
								$(
									".mega-menu-lg-down-container.headroom.headroom--pinned"
								).is(":visible")) &&
							$(".uob-scrollpy.sticky-scrollpy-nav").css("top", "66px");
					}, 250);
			})
			.on("hidden.bs.modal", function() {
				document.querySelector("html").setAttribute("style", ""),
					setTimeout(function() {
						($(".header-mega-menu.headroom.headroom--unpinned").is(
								":visible"
							) ||
							$(
								".mega-menu-lg-down-container.headroom.headroom--unpinned"
							).is(":visible")) &&
						$(".uob-scrollpy.sticky-scrollpy-nav").css("top", "0"),
							($(".header-mega-menu.headroom.headroom--pinned").is(
									":visible"
								) ||
								$(
									".mega-menu-lg-down-container.headroom.headroom--pinned"
								).is(":visible")) &&
							$(".uob-scrollpy.sticky-scrollpy-nav").css("top", "66px");
					}, 250);
			}),
			document.querySelector(".lady__clr_variant") &&
			document
			.querySelectorAll(
				".life-stage .content-block-left p img, .navbar .navbar-nav .nav-item img, .carousel-control-prev img, .carousel-control-next img, .search__modal .icon-search"
			)
			.forEach(function(t) {
				t.getAttribute("id") && t.id,
					t.className,
					(t = t.src),
					fetch(t)
					.then(function(t) {
						return t.text();
					})
					.then(function(t) {
						new DOMParser()
							.parseFromString(t, "text/xml")
							.getElementsByTagName("svg")[0];
					});
			}),
			$(window).on("resize", function(t) {
				setTimeout(function() {
					0 <
						document.querySelectorAll(".compare-tables .table-header-title")
						.length &&
						document
						.querySelectorAll(".compare-tables .table-header-title th")
						.forEach(function(t) {
							var e,
								i = [];
							t.querySelectorAll("button").forEach(function(s, n, o) {
								i.push(s.offsetHeight),
									n == o.length - 1 &&
									((e = Math.max.apply(Math, i)),
										t.querySelectorAll("button").forEach(function(t) {
											t.style = "height: " + e + "px;";
										}));
							});
						}),
						0 < document.querySelectorAll(".tile-card-slide").length &&
						document
						.querySelectorAll(".tile-card-slide")
						.forEach(function(t) {
							var e,
								i = [];
							t.querySelectorAll(".card-body").forEach(function(s, n, o) {
								i.push(s.offsetHeight),
									n == o.length - 1 &&
									((e = Math.max.apply(Math, i)),
										t.querySelectorAll(".card-body").forEach(function(t) {
											return true;
										}));
							});
						}),
						0 < document.querySelectorAll(".tile-card-group").length &&
						document
						.querySelectorAll(".tile-card-group")
						.forEach(function(t) {
							return true;
						});
				}, 500);
			}),
			0 < document.querySelectorAll(".category-page-card").length &&
			setTimeout(function() {
				document
					.querySelectorAll(".category-page-card")
					.forEach(function(t) {
						var e,
							i,
							s = [],
							n = [];
						t.querySelectorAll(".card-img-top").forEach(function(e, s, o) {
								n.push(e.offsetHeight),
									s == o.length - 1 &&
									((i = Math.max.apply(Math, n)),
										t.querySelectorAll(".card-img-top").forEach(function(t) {
											t.style = "height: initial;";
										}));
							}),
							t.querySelectorAll(".card-body").forEach(function(i, n, o) {
								s.push(i.offsetHeight),
									n == o.length - 1 &&
									((e = Math.max.apply(Math, s)),
										t.querySelectorAll(".card-body").forEach(function(t) {
											return true;
										}));
							});
					});
			}, 500),
			0 < document.querySelectorAll(".tile-card-group").length &&
			document.querySelectorAll(".tile-card-group").forEach(function(t) {
				return true;
			}),
			0 < document.querySelectorAll(".tile-card-slide").length &&
			setTimeout(function() {
				document.querySelectorAll(".tile-card-slide").forEach(function(t) {
					var e,
						i = [];
					t.querySelectorAll(".card-body").forEach(function(s, n, o) {
						i.push(s.offsetHeight),
							n == o.length - 1 &&
							((e = Math.max.apply(Math, i)),
								t.querySelectorAll(".card-body").forEach(function(t) {
									return true;
								}));
					});
				});
			}, 500),
			0 <
			document.querySelectorAll(".compare-tables .table-header-title th")
			.length &&
			setTimeout(function() {
				document
					.querySelectorAll(".compare-tables .table-header-title th")
					.forEach(function(t) {
						var e,
							i = [];
						t.querySelectorAll("button").forEach(function(s, n, o) {
							i.push(s.offsetHeight),
								n == o.length - 1 &&
								((e = Math.max.apply(Math, i)),
									t.querySelectorAll("button").forEach(function(t) {
										t.style = "height: " + e + "px;";
									}));
						});
					});
			}, 500),
			$(".uob-accordion .card-header").each(function() {
				var t =
					200 < (t = $(this).find("h5").html()).length ?
					t.substring(0, 197) + "..." :
					t;
				$(this).find("h5").html(t);
			}),
			document.querySelectorAll('input[type="number"]').forEach(function(t) {
				t.onkeydown = function(t) {
					if (
						!(
							(95 < t.keyCode && t.keyCode < 106) ||
							(47 < t.keyCode && t.keyCode < 58) ||
							8 == t.keyCode
						)
					)
						return !1;
				};
			}),
			(t = "video"),
			(e = function(t) {
				t.preventDefault(),
					~(t = document.getElementById("video")) &&
					BigPicture({
						el: t,
						ytSrc: t.getAttribute("ytsrc")
					});
			}),
			document.getElementById(t) && (document.getElementById(t).onclick = e),
			$(".header-mega-menu, .mega-menu-lg-down-container").headroom();
		var n,
			o = 0,
			r = !1,
			a = 200;

		
		$(window).on("resize orientationchange", function() {
			}),
			
			1 < document.querySelectorAll(".uob-accordion").length &&
			document.querySelectorAll(".uob-accordion").forEach(function(t, e) {
				t.parentElement.getAttribute("id") ||
					t.parentElement.setAttribute("id", "generatedID-" + e),
					t.querySelectorAll(".card").forEach(function(e, i) {
						t
							.querySelector(".accordion")
							.setAttribute("id", t.parentElement.id + "-group"),
							e
							.querySelector(".card-header")
							.setAttribute(
								"data-target",
								"#" + t.parentElement.id + "-" + i
							),
							e
							.querySelector(".collapse")
							.setAttribute("id", t.parentElement.id + "-" + i),
							e
							.querySelector(".collapse")
							.setAttribute(
								"data-parent",
								"#" + t.parentElement.id + "-group"
							);
					});
			}),
			1 < document.querySelectorAll(".tile-card-slide").length &&
			document.querySelectorAll(".tile-card-slide, .product-promotion-carousel").forEach(function(t, e) {
				if (t.querySelector(".carousel")) {
					t.querySelector(".carousel").getAttribute("id") &&
						t.querySelector(".carousel").setAttribute("id", "carouselID-" + e),
						(t.querySelector(".carousel-control-prev")?.getAttribute("href") ||
							t
							.querySelector(".carousel-control-next")
							?.getAttribute("href")) &&
						(t
							.querySelector(".carousel-control-prev")
							.setAttribute("href", "#carouselID-" + e),
							t
							.querySelector(".carousel-control-next")
							.setAttribute("href", "#carouselID-" + e)),
						t
						.querySelector(".carousel-indicators li")
						?.getAttribute("data-target") &&
						t
						.querySelectorAll(".carousel-indicators li")
						.forEach(function(t) {
							t.setAttribute("data-target", "#carouselID-" + e);
						});
				}
			});

		document.querySelectorAll('[data-ride="carousel"]').forEach(function(item, index) {
			if (!item.classList.contains('carousele-initialized')) {
				$(item).on("slide.bs.carousel", function(i) {
					0 == i.to ?
						(item.querySelector(".carousel-control-prev").classList.add("invisible"),
							item.querySelector(".carousel-control-next").classList.remove("invisible")) :
						i.to == e ?
						(item.querySelector(".carousel-control-prev").classList.remove("invisible"),
							item.querySelector(".carousel-control-next").classList.add("invisible")) :
						(item.querySelector(".carousel-control-prev").classList.remove("invisible"),
							item.querySelector(".carousel-control-next").classList.remove("invisible"));
				});
			}
		});
	}),
	$(document).ready(function() {
		function t() {
			$(window).width() < 768 ?
				$(".compare-tables table").addClass("two-cols") :
				$(".compare-tables table").removeClass("two-cols");
		}
		$('[data-toggle="tooltip"]').tooltip(),
			$(window).resize(function() {
				t();
			});
		var e = window.data_compare_accounts;
		if (e) {
			for (
				var i = "",
					s = "",
					n = "",
					o = "",
					r = e.listingHeader.length,
					a = e.listing.length,
					l = 0; l < 4; l++
			) {
				(s +=
					"<th class='col-6 col-md-3' data-img='" +
					(l + 1) +
					"'><img class='img-fluid' src='' alt=''></th>"),
				(n +=
					"<th class='empty-col' data-listingHeader='" +
					(l + 1) +
					"'><div class='dropdown'><button class='btn dropdown-toggle uob-h6' type='button' data-flip='false' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Select</button>"),
				(n += "<div class='dropdown-menu'>");
				for (var c = 0; c < e.listing.length; c++)
					n +=
					"<button class='dropdown-item' type='button' id='" +
					e.listing[c].id +
					"'>" +
					e.listing[c].name +
					"</button>";
				n += "</div></div></th>";
			}
			for (var d = 0; d < r; d++) {
				(o +=
					"<tr><td colspan='4' class='table-sub-title text-center'>" +
					e.listingHeader[d] +
					"</td></tr>"),
				(o += "<tr class='table-content-row'>");
				for (var h = 0; h < 4; h++)
					o += "<td data-listing='" + (h + 1) + "'></td>";
				o += "</tr>";
			}
			setTimeout(function() {
				const srch = window.location.search;
				const compObj = new URLSearchParams(srch).get("compare");
				const rendObj = compObj && 
								compObj.split(',').map(compItem=>e.listing.filter(lstItem=>lstItem.id === compItem)).filter(nonEmt => nonEmt.length > 0).map(fnlObj => fnlObj[0]);
				if(rendObj.length){
					rendObj.forEach((card, indx) => {
						$("#appendTables")
							.find('[data-img="' + (indx+1) + '"] img')
							.attr("src", card.img),
							$("#appendTables")
							.find('[data-listingHeader="' + (indx+1) + '"]')
							.removeClass("empty-col"),
							$("#appendTables")
							.find('[data-listingHeader="' + (indx+1) + '"] .dropdown-toggle')
							.text(card.name),
							$.each(
								$("#appendTables tbody .table-content-row"),
								function(e) {
									card &&
										$(this)
										.find('[data-listing="' + (indx+1) + '"]')
										.html(card.listing[e]);
								}
							)
					})
				}else{
					for (var t = 0; t < r; t++){
						if (e.listing[t]) {
							var i = t + 1;
							$("#appendTables")
								.find('[data-img="' + i + '"] img')
								.attr("src", e.listing[t].img),
								$("#appendTables")
								.find('[data-listingHeader="' + i + '"]')
								.removeClass("empty-col"),
								$("#appendTables")
								.find('[data-listingHeader="' + i + '"] .dropdown-toggle')
								.text(e.listing[t].name);
							for (var s = 0; s < 4; s++) {
								var n = s + 1;
								$.each(
									$("#appendTables tbody .table-content-row"),
									function(t) {
										e.listing[s] &&
											$(this)
											.find('[data-listing="' + n + '"]')
											.html(e.listing[s].listing[t]);
									}
								);
							}
						}
					}
				}
				// if (
				// 	!(function(t, e) {
				// 		var i = window.location.search,
				// 			s = 0;
				// 		if ((i = new URLSearchParams(i).get("compare")))
				// 			for (var n = i.split(","), o = 0; o < e; o++) {
				// 				for (var r, a = 0; a < n.length; a++)
				// 					t.listing[o] &&
				// 					t.listing[o].id == n[a] &&
				// 					(s++,
				// 						(r = a + 1),
				// 						$("#appendTables")
				// 						.find('[data-img="' + r + '"] img')
				// 						.attr("src", t.listing[o].img),
				// 						$("#appendTables")
				// 						.find('[data-listingHeader="' + r + '"]')
				// 						.removeClass("empty-col"),
				// 						$("#appendTables")
				// 						.find('[data-listingHeader="' + r + '"] .dropdown-toggle')
				// 						.text(t.listing[o].name),
				// 						$.each(
				// 							$("#appendTables tbody .table-content-row"),
				// 							function(e) {
				// 								t.listing[o] &&
				// 									$(this)
				// 									.find('[data-listing="' + r + '"]')
				// 									.html(t.listing[o].listing[e]);
				// 							}
				// 						));
				// 				if (o == e - 1) return 0 < s;
				// 			}
				// 	})(e, r)
				// )
				// 	for (var t = 0; t < r; t++)
				// 		if (e.listing[t]) {
				// 			var i = t + 1;
				// 			$("#appendTables")
				// 				.find('[data-img="' + i + '"] img')
				// 				.attr("src", e.listing[t].img),
				// 				$("#appendTables")
				// 				.find('[data-listingHeader="' + i + '"]')
				// 				.removeClass("empty-col"),
				// 				$("#appendTables")
				// 				.find('[data-listingHeader="' + i + '"] .dropdown-toggle')
				// 				.text(e.listing[t].name);
				// 			for (var s = 0; s < 4; s++) {
				// 				var n = s + 1;
				// 				$.each(
				// 					$("#appendTables tbody .table-content-row"),
				// 					function(t) {
				// 						e.listing[s] &&
				// 							$(this)
				// 							.find('[data-listing="' + n + '"]')
				// 							.html(e.listing[s].listing[t]);
				// 					}
				// 				);
				// 			}
				// 		}
			}, 250),
				(i +=
					"<table class='table shadow'><thead><tr class='table-header-img'>" +
					s +
					"</tr><tr class='table-header-title'>" +
					n +
					"</tr></thead><tbody>" +
					o +
					"</tbody></table>"),
				$("#appendTables").append(i),
				t(),
				$(".dropdown-item").on("click", function() {
					var t = $(this);
					$(this).closest("th").hasClass("empty-col") &&
						$(this).closest("th").removeClass("empty-col"),
						$(this).closest("th").find(".dropdown-toggle").text($(this).text());
					for (var i = 0; i < a; i++)
						$.each($("#appendTables tbody .table-content-row"), function(s) {
							e.listing[i] &&
								e.listing[i].id == t.attr("id") &&
								($(
										'[data-img="' +
										t.closest("th").attr("data-listingheader") +
										'"]'
									)
									.find("img")
									.attr("src", e.listing[i].img),
									$(this)
									.find(
										'[data-listing="' +
										t.closest("th").attr("data-listingheader") +
										'"]'
									)
									.html(e.listing[i].listing[s]));
						});
				});
		}
	}),
	$(document).ready(function() {
		for (
			var t,
				e,
				i,
				s,
				n,
				o,
				r = document.getElementsByClassName("custom-select"),
				a = r.length,
				l = 0; l < a; l++
		) {
			for (
				e = (i = r[l].getElementsByTagName("select")[0]).length,
				(s = document.createElement("DIV")).setAttribute(
					"class",
					"select-selected"
				),
				s.innerHTML = i.options[i.selectedIndex].innerHTML,
				r[l].appendChild(s),
				(n = document.createElement("DIV")).setAttribute(
					"class",
					"select-items select-hide"
				),
				t = 1; t < e; t++
			)
				((o = document.createElement("DIV")).innerHTML =
					i.options[t].innerHTML),
				o.setAttribute("data-href", i.options[t].getAttribute("data-href")),
				o.addEventListener("click", function(t) {
					for (
						var e,
							i,
							s,
							n =
							this.parentNode.parentNode.getElementsByTagName("select")[0],
							o = n.length,
							r = this.parentNode.previousSibling,
							a = 0; a < o; a++
					)
						if (n.options[a].innerHTML == this.innerHTML) {
							for (
								n.selectedIndex = a,
								r.innerHTML = this.innerHTML,
								s = (e =
									this.parentNode.getElementsByClassName(
										"same-as-selected"
									)).length,
								i = 0; i < s; i++
							)
								e[i].removeAttribute("class");
							this.setAttribute("class", "same-as-selected");
							break;
						}
					r.click();
				}),
				n.appendChild(o);
			r[l].appendChild(n),
				s.addEventListener("click", function(t) {
					t.stopPropagation(),
						c(this),
						this.nextSibling.classList.toggle("select-hide"),
						this.classList.toggle("select-arrow-active");
				});
		}

		function c(t) {
			for (
				var e = [],
					i = document.getElementsByClassName("select-items"),
					s = document.getElementsByClassName("select-selected"),
					n = i.length,
					o = s.length,
					r = 0; r < o; r++
			)
				t == s[r] ? e.push(r) : s[r].classList.remove("select-arrow-active");
			for (r = 0; r < n; r++) e.indexOf(r) && i[r].classList.add("select-hide");
		}
		document.addEventListener("click", c);
	}),
	$(document).ready(function() {

		$(".carousel-item-flex:empty").parent("div").remove();
		initCarousel($(".helpful-tips-guides"));
		initCarousel($(".product-promotion-carousel"));
		initCarousel($(".video-carousel-component"));
		$("#filter-search-btn").on("click", function() {
				var t = "search=" + $("#inpage-search-box").val().toLowerCase(),
					e = "filter=" + $("#filter-select").val().toLowerCase(),
					i = $(this).attr("data-href");
				window.location.href = i + t + "&" + e;
			}),
			$("#inpage-search-box").on("input", function() {
				0 < $(this).val().length ?
					($("#inpage-search-box").siblings(".icon-close").show(),
						$(".uob-help-fliter").removeClass("d-none").addClass("d-block")) :
					($("#inpage-search-box").siblings(".icon-close").hide(),
						$(".uob-help-fliter").removeClass("d-block").addClass("d-none"));
			}),
			$("#inpage-search-box")
			.siblings(".icon-close")
			.click(function() {
				$("#inpage-search-box").val(""),
					$(this).hide(),
					$(".uob-help-fliter").removeClass("d-block").addClass("d-none");
			}),
			$(".search-result .load-more button").click(function() {
				$(".search-result .card-col").removeClass("d-none");
			});
	}),
	$(document).ready(function() {
		var t = 0,
			e = 0;
		$(document).on(
				"click",
				'.promotion-details a[href^="#"], .uob-item-scrollspy a[href^="#"], .uob-scrollpy a.nav-link[href^="#"], .uob-scrollpy .dropdown-item[href^="#"]',
				function(e) {
					e.preventDefault();
					var i = $.attr(this, "href");
					setTimeout(function() {
						var e = $(i).offset().top,
							s = (
								$(window).width() <= 768 ?
								document.querySelector(".mega-menu-lg-down-container") :
								document.querySelector(".header-mega-menu")
							).offsetHeight,
							n = document.querySelector(".navbar.uob-scrollpy") ?
							document.querySelector(".navbar.uob-scrollpy").offsetHeight :
							0;
						t < e && 0 !== t ?
							$("html, body").animate({
								scrollTop: $(i).offset().top - n
							}, 500) :
							$("html, body").animate({
									scrollTop: $(i).offset().top - (s + n)
								},
								500
							),
							(t = e);
					}, 300);
				}
			),
			$(document).on("click", 'a[data-scroll="true"]', function(i) {
				i.preventDefault();
				var s = $.attr(this, "href");
				setTimeout(function() {
					var i = $(s).offset().top,
						n = document.querySelector(".header-mega-menu").offsetHeight,
						o = document.querySelector(".uob-scrollpy").offsetHeight;
					e < i && 0 !== t ?
						$("html, body").animate({
							scrollTop: $(s).offset().top - o
						}, 500) :
						$("html, body").animate({
								scrollTop: $(s).offset().top - (n + o)
							},
							500
						),
						(e = i);
				}, 300);
			});
	}),
	$(document).ready(function() {
		function t() {
			$(".lg-down-mega-menu").removeClass("show"),
				$(".lg-down-mega-menu #collapsibleNavbar").removeClass("show"),
				$(".lg-down-header .navbar-toggler").attr("aria-expanded", !1),
				$(".lg-down-header .navbar-toggler").addClass("collapsed");
		}

		function e() {
			$(".masthead .select-items").find("div.same-as-selected").length < 1 &&
				($(".masthead .select-selected-fake")
					.removeClass("opacity-0")
					.addClass("opacity-1"),
					$(".masthead .select-selected")
					.removeClass("opacity-1")
					.addClass("opacity-0"));
		}

		function i() {
			var t = $(".life-stage .content-item-block.active").height();
			$(".life-stage .content-block").css("minHeight", t);
		}
		$(".megamenu-li").hover(
				function() {
					$(this).hasClass("dropdown") &&
						!$(this).hasClass("login-button") &&
						($(this).find(".megamenu").css({
								transition: "all 0.2s"
							}),
							$(this).addClass("show").addClass("megamenu-li-active"),
							$(this).find(".dropdown-toggle").attr("aria-expanded", !0),
							$(this).find(".megamenu").addClass("show"));
				},
				function() {
					$(this).hasClass("dropdown") &&
						!$(this).hasClass("login-button") &&
						($(this).removeClass("show").removeClass("megamenu-li-active"),
							$(this).find(".dropdown-toggle").attr("aria-expanded", !1),
							$(this).find(".megamenu").removeClass("show"));
				}
			),
			$(".lg-down-header .navbar-toggler").on("click", function() {
				var t = window.pageYOffset;
				$(this).find(".menu-open").is(":visible") ?
					((document.body.style.setProperty ("overflow", "hidden", "important")),
						(document.body.style.height = "100%"),
						(document.documentElement.style.height = "100%"),
						(document.documentElement.style.overflowY = "hidden"),
						document.querySelector(".lg-down-mega-menu").classList.add("show"),
						$(this).find(".menu-close").attr("data-scrollPos", t),
						$(this).find(".menu-open").addClass("d-none"),
						$(this).find(".menu-close").removeClass("d-none"),
						$(".notice-bar").attr("data-click", !0),
						$(".notice-bar").hasClass("d-none") || $(".notice-bar").hide()) :
					(document.body.setAttribute("style", ""),
						document.documentElement.setAttribute("style", ""),
						document
						.querySelector(".lg-down-mega-menu")
						.classList.remove("show"),
						$(this).find(".menu-close").addClass("d-none"),
						$(this).find(".menu-open").removeClass("d-none"),
						window.scrollTo(
							0,
							$(".lg-down-header .navbar-toggler-icon.menu-close").attr(
								"data-scrollpos"
							)
						),
						setTimeout(function() {
							window.scrollTo(
								0,
								parseInt(
									$(".lg-down-header .navbar-toggler-icon.menu-close").attr(
										"data-scrollpos"
									)
								) - 100
							);
						}, 100),
						$(".notice-bar").attr("data-click", !1),
						$(".notice-bar").hasClass("d-none") || $(".notice-bar").show()),
					$(".lg-down-mega-menu.show .collapse").scrollTop(0);
			}),
			$(".lg-down-header .login-item").click(function() {
				t();
			}),
			$(".uob-search-box").on("input", function() {
				0 < $(this).val().length ?
					($("#uob-search-box").siblings(".icon-close").show(),
						$(".uob-search-suggest-content")
						.removeClass("d-none")
						.addClass("d-block"),
						$(".search-trigger-btn").removeClass("d-none").addClass("d-block"),
						$(".uob-search-popular-content")
						.removeClass("d-block")
						.addClass("d-none")) :
					($("#uob-search-box").siblings(".icon-close").hide(),
						$(".uob-search-suggest-content")
						.removeClass("d-block")
						.addClass("d-none"),
						$(".search-trigger-btn").removeClass("d-block").addClass("d-none"),
						$(".uob-search-popular-content")
						.removeClass("d-none")
						.addClass("d-block"));
			}),
			$("#uob-search-box")
			.siblings(".icon-close")
			.click(function() {
				$("#uob-search-box").val(""), $(this).hide();
			}),
			$(".lg-down-header .search-item").click(function(e) {
				t();
			}),
			$(".lg-down-mega-menu .collapse-block .collapse-title").click(
				function() {
					"true" === $(this).attr("aria-expanded") ?
						$(this).closest(".collapse-block").removeClass("show") :
						$(this).closest(".collapse-block").addClass("show");
				}
			),
			$(".masthead .select-selected").on("click", function(t) {
				t.stopPropagation(),
					$(".masthead .select-items").hasClass("select-hide") ?
					e() :
					($(".masthead .select-selected-fake")
						.removeClass("opacity-1")
						.addClass("opacity-0"),
						$(".masthead .select-selected")
						.removeClass("opacity-0")
						.addClass("opacity-1"));
			}),
			$(".masthead .select-items").on("click", "div", function(t) {
				t.stopPropagation(),
					$(".masthead .overlay").addClass("overlay-darker"),
					$(".masthead .select-selected-fake")
					.removeClass("opacity-1")
					.addClass("opacity-0"),
					$(".masthead .select-selected")
					.removeClass("opacity-0")
					.addClass("opacity-1"),
					$(".masthead .go-btn").removeClass("d-none").addClass("d-block");
			}),
			$(".masthead .overlay").click(function() {
				$(".masthead .select-items").hasClass("select-hide") || e();
			}),
			$(".masthead .go-btn").click(function() {
				var t = $(".masthead .custom-select .select-items")
					.find(".same-as-selected")
					.attr("data-href");
				window.location.href = t || "#";
			}),
			$(".content-left-item").hover(function() {
				var t = $(this).index();
				$(".content-left-item").removeClass("active"),
					$(".content-item-block").removeClass("active"),
					$(this).addClass("active"),
					$(".content-block-right .content-item-block")
					.eq(t)
					.addClass("active"),
					i();
			}),
			$(".life-stage .select-items").on("click", "div", function() {
				var t = $(this).index();
				$(".content-item-block").removeClass("active"),
					$(".content-block-right .content-item-block")
					.eq(t)
					.addClass("active");
			}),
			$(window).resize(function() {
				780 <= window.innerWidth && i();
			});
	}),
	$(document).ready(function() {
		var t = window.location.search,
			e = new URLSearchParams(t).get("year");
		e &&
			($("#year_" + e).collapse("show"),
				setTimeout(function() {
					$("html, body").animate({
							scrollTop: $("#year_" + e).offset().top - 150
						},
						500
					);
				}, 300));
	}),
	$(document).ready(function() {
		var t = [],
			e = 4;

		function i(t, interval) {
			t.each(function() {
				var $t = $(this);
				var e = $t.find(".tile-card-slide:visible .carousel-item").length - 1;
				if (e) {
					$t.find(".tile-card-slide .carousel-control-next").removeClass("invisible");
					var c = $t.find(".tile-card-slide .carousel");
					if (c.length && !c.hasClass('carousele-initialized')) {
						var _interval = c.data('interval') ? parseInt(c.data('interval')) : (c.data('bs-interval') ? parseInt(c.data('interval')) : (interval ? interval : 4000));
						c.addClass('carousele-initialized').carousel({
							interval: _interval,
							wrap: true
						}).on("slide.bs.carousel", function(i) {
							0 == i.to ?
								($t.find(".carousel-control-prev").addClass("invisible"),
									$t.find(".carousel-control-next").removeClass("invisible")) :
								i.to == e ?
								($t.find(".carousel-control-prev").removeClass("invisible"),
									$t.find(".carousel-control-next").addClass("invisible")) :
								($t.find(".carousel-control-prev").removeClass("invisible"),
									$t.find(".carousel-control-next").removeClass("invisible"));
						});
					}
				}
			});
		}

		function s(t) {
			return t ?
				(console.log(t),
					'<div class="compare-box-container fill"><div class="inner-close-btn"><img src="/assets/web-resources/personal/images/common/icons/icons-exit-blue.svg"></div><div class="compare-box rounded-10"><img class="img-stretch card-img" src="' +
					t.img +
					'"> </div><div class="subtitle mt-3">' +
					t.title +
					'</div><div class="card-id d-none">' +
					t.id +
					"</div></div>") :
				'<div class="compare-box-container"><div class="inner-close-btn"><img src="../assets/iwov-resources/assets/Icons/icons-exit-blue.svg"></div><div class="compare-box rounded-10"></div><div class="subtitle mt-3"></div><div class="card-id d-none"></div></div>';
		}

		function n() {
			for (var i = "", n = 0; n < e; n++)
				if (0 < t.length)
					for (var o = 0; o < t.length; o++) {
						if (n > t.length - 1) {
							i += s();
							break;
						}
						if (n == o) {
							i += s(t[o]);
							break;
						}
					}
			else i += s();
			$(".compare-overlay .container").empty().append(i);
		}

		function o() {
			var t,
				e = ((t = 3), 576 <= $(window).width() && (t = 6), t),
				i = $(".category-page-filter")
				.find(".category-items")
				.children(".category-item")
				.filter(function(t, e) {
					return !$(e).hasClass("hiden-filter");
				});
			/**if (i.length > e) {
				for (var s = 0; s < i.length; s++)
					e < s + 1 && $(i[s]).addClass("hiden-other");
				(t = parseInt(i.length - e)),
				$(".category-page-filter .more-btn").removeClass("d-none"),
					$(".category-page-filter .more-btn .btn__num").text(t);
			} else $(".category-page-filter .more-btn").addClass("d-none");**/
		}

		function r(t) {
			return t.toLowerCase().replace(/\s*/g, "");
		}
		$(window).width() < 768 && (e = 2),
			$(".carousel-item-flex:empty").parent("div").remove(),
			$(".try-figure-out,.tile-card-slide").each(function() {
				i($(this), 3600000);
			}),
			$(".bank-beyond-save").each(function() {
				i($(this));
			}),
			o(),
			$(".category-page-filter .filter-list").on("click", "li", function() {
				var t, e;
				var elementId = $(this)[0] ? $(this)[0].id : '';
				var buttonElement = $(this).attr('button_name');
				$(".category-page-filter .filter-list li").removeClass(
						"btn-gradient-blue--active"
					),
					$(this).addClass("btn-gradient-blue--active"),
					(t = $(this).text()),
					(e = r(t)),
					$(".category-page-filter")
					.find(".category-items")
					.children(".category-item")
					.filter(function(t, i) {
						return (
							$(i).removeClass("hiden-filter").removeClass("hiden-other"),
							(0 === e.indexOf('all') || buttonElement.indexOf('all') !== -1 || elementId == ('all-cat-filter')) ?
							($(".category-page-filter")
								.find(".category-items")
								.children(".category-item")
								.removeClass("hiden-filter")
								.removeClass("hiden-other"),
								o(),
								!0) :
							r($(i).find(".card .card-subtitle").text()) === e ||
							($(i).addClass("hiden-filter"), !1)
						);
					}),
					o(),
					$("body,html").animate({
							scrollTop: $(".category-page-filter .category-items").offset().top - 50,
						},
						300
					);
			}),
			$(".category-page-filter .more-btn").click(function() {
				$(".category-page-filter .category-items .category-item").removeClass(
						"hiden-other"
					),
					$(this).addClass("d-none");
			}),
			$(".category-page-filter .compare-btn").click(function() {
				var i,
					s = {},
					o = (a = $(this).closest(".category-item").find(".card"))
					.find(".card-img-top")
					.attr("src"),
					r = a.find(".card-body .card-id").text(),
					a = a.find(".card-body .card-title").text();
				(s.img = o),
				(s.id = r.replace("'", "_")),
				(s.title = a),
				t.length < e &&
					((i = s.id),
						!(
							0 <
							t.filter(function(t) {
								return t.id == i;
							}).length
						)) &&
					t.push(s),
					$(".compare-overlay").hasClass("opacity-0") &&
					$(".compare-overlay")
					.removeClass("opacity-0")
					.addClass("opacity-1"),
					n();
			}),
			$(".compare-overlay .close-btn").on("click", function() {
				(t.length = 0),
				$(".compare-overlay").removeClass("opacity-1").addClass("opacity-0");
			}),
			$(".compare-overlay .compare-box-btn").on("click", function() {
				var e = t.map(function(t) {
						return t.id;
					}),
					i = $(this).attr("data-href");
				window.location.href = i + "compare=" + e;
				dataElement.event_name = "compare-prod";
				dataElement.click_name = "compare accounts";
				dataElement.component_name =
					getPageName(location.href) + "/compare-accounts";
				dataElement.product_compared = e.join();
				_satellite.track("component_action");
				console.log("dataelement: ", dataElement);
			}),
			$(".compare-overlay").on("click", ".inner-close-btn", function() {
				var e,
					i = $(this).siblings(".card-id").text();
				(e = i),
				(t = t.filter(function(t) {
					return t.id != e;
				})),
				n();
			});
	}),
	$(document).ready(function() {
		0 < $("#pills-tab .default-active").length &&
			$("#pills-tab .default-active"),
			0 < $("#pills-tab .active").length && $("#pills-tab .active"),
			$(".carousel-item-flex:empty").parent("div").remove(),
			$(".bank-beyond-save").each(function() {
				initCarousel($(this));
			}),
			setTimeout(function() {
				var t, e, i;
				0 < $("#uob-calculator-tab").length &&
					((t = $("#uob-calculator-tab")),
						(e =
							(i = $(".uob-calculator-cont .nav-link.active")) &&
							i.position() &&
							i.position().left + 15),
						(i = i && i.width()),
						t.css({
							left: e,
							width: i,
							opacity: 1
						}),
						$(".uob-calculator-cont .nav-item").hover(
							function() {
								t.css({
									left: $(this).find(".nav-link").position().left + 15,
									width: $(this).find(".nav-link").width(),
								});
							},
							function() {
								var e = $(".uob-calculator-cont .nav-link.active");
								$(this).find(".active").length ||
									t.css({
										left: e && e.position && e.position().left + 15,
										width: e && e.width(),
									});
							}
						));
			}, 300),
			$("#calculate-btn").on("click", function(t) {
				var e = $(this),
					i = e.data("retext"),
					s = e.text(),
					n = $("#calculate-cash-rebate .total"),
					o = $("#calculate-cash-rebate .total").css("display");
				t.preventDefault(),
					s == e.attr("data-retext") &&
					$("html, body").animate({
							scrollTop: e.closest(".uob-calculator-cont").offset().top - 150,
						},
						500
					),
					"inline-block" == o || "block" == o ?
					(n.slideUp(), $(".item-input").prop("disabled", !1)) :
					(n.slideDown(), $(".item-input").prop("disabled", !0)),
					e.text(i).attr("title", i),
					e.data("retext", s),
					rebate_calc();
			});
	}),
	$(window).on("resize", function() {
		initCarousel($(".bank-beyond-save"));
	}),
	jQuery(function(t) {
		function e(e) {
			function i() {
				var t = /^\s+/.exec(e.substring(c));
				null !== t && 0 < t.length && (c += t[0].length);
			}

			function s(e) {
				if (t.isPlainObject(e)) {
					var i,
						s,
						n = 0,
						o = [];
					for (
						t.isArray(e.color) && (n = (s = e.color).length), i = 0; i < 4; i++
					)
						i < n ? o.push(s[i]) : 3 === i ? o.push(1) : o.push(0);
				}
				return t.extend({
					left: 0,
					top: 0,
					blur: 0,
					spread: 0
				}, e);
			}
			for (var n, o, r, a, l = [], c = 0, d = e.length, h = s(); c < d;)
				if (
					(void 0,
						null !== (a = /^inset\b/.exec(e.substring(c))) &&
						0 < a.length &&
						((h.b = !0), (c += a[0].length), 1))
				)
					i();
				else if (
				(void 0,
					null !==
					(r =
						/^(-?[0-9\.]+)(?:px)?\s+(-?[0-9\.]+)(?:px)?(?:\s+(-?[0-9\.]+)(?:px)?)?(?:\s+(-?[0-9\.]+)(?:px)?)?/.exec(
							e.substring(c)
						)) &&
					0 < r.length &&
					((h.left = parseInt(r[1], 10)),
						(h.top = parseInt(r[2], 10)),
						(h.blur = r[3] ? parseInt(r[3], 10) : 0),
						(h.a = r[4] ? parseInt(r[4], 10) : 0),
						(c += r[0].length),
						1))
			)
				i();
			else if (
				((o = void 0),
					null !==
					(o = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(
						e.substring(c)
					)) && 0 < o.length ?
					((h.color = [
							parseInt(o[1], 16),
							parseInt(o[2], 16),
							parseInt(o[3], 16),
							1,
						]),
						(c += o[0].length),
						1) :
					null !==
					(o = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(
						e.substring(c)
					)) && 0 < o.length ?
					((h.color = [
							17 * parseInt(o[1], 16),
							17 * parseInt(o[2], 16),
							17 * parseInt(o[3], 16),
							1,
						]),
						(c += o[0].length),
						1) :
					null !==
					(o =
						/^rgb\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(
							e.substring(c)
						)) && 0 < o.length ?
					((h.color = [
							parseInt(o[1], 10),
							parseInt(o[2], 10),
							parseInt(o[3], 10),
							1,
						]),
						(c += o[0].length),
						1) :
					null !==
					(o =
						/^rgba\(\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*,\s*([0-9\.]+)\s*\)/.exec(
							e.substring(c)
						)) &&
					0 < o.length &&
					((h.color = [
							parseInt(o[1], 10),
							parseInt(o[2], 10),
							parseInt(o[3], 10),
							parseFloat(o[4]),
						]),
						(c += o[0].length),
						1))
			)
				i();
			else {
				if (
					(void 0,
						!(
							null !== (n = /^\s*,\s*/.exec(e.substring(c))) &&
							0 < n.length &&
							((c += n[0].length), 1)
						))
				)
					break;
				l.push(s(h)), (h = {});
			}
			return l.push(s(h)), l;
		}
		t.extend(!0, t, {
			support: {
				rgba: (function() {
					var e = t("script:first"),
						i = e.css("color"),
						s = !1;
					if (/^rgba/.test(i)) s = !0;
					else
						try {
							(s = i !== e.css("color", "rgba(0, 0, 0, 0.5)").css("color")),
							e.css("color", i);
						} catch (e) {}
					return e.removeAttr("style"), s;
				})(),
			},
		});
		var i,
			s = t("html").prop("style");
		t.each(["boxShadow", "MozBoxShadow", "WebkitBoxShadow"], function(t, e) {
				if (void 0 !== s[e]) return (i = e), !1;
			}),
			i &&
			(t.Tween.propHooks.boxShadow = {
				get: function(e) {
					return t(e.elem).css(i);
				},
				set: function(s) {
					for (
						var n = s.elem.style,
							o = e(t(s.elem)[0].style[i] || t(s.elem).css(i)),
							r = e(s.end),
							a = Math.max(o.length, r.length),
							l = 0; l < a; l++
					)
						(r[l] = t.extend({}, o[l], r[l])),
						o[l] ?
						("color" in o[l] && !1 !== t.isArray(o[l].color)) ||
						(o[l].color = r[l].color || [0, 0, 0, 0]) :
						(o[l] = e("0 0 0 0 rgba(0,0,0,0)")[0]);
					s.run = function(e) {
						var s, a, l, c;
						(s = o),
						(a = r),
						(l = e),
						(c = []),
						t.each(s, function(e) {
								var i,
									n = [],
									o = s[e];
								(e = a[e]),
								o.b && n.push("inset"),
									void 0 !== e.left &&
									n.push(
										parseFloat(o.left + l * (e.left - o.left)) +
										"px " +
										parseFloat(o.top + l * (e.top - o.top)) +
										"px"
									),
									void 0 !== e.blur &&
									n.push(parseFloat(o.blur + l * (e.blur - o.blur)) + "px"),
									void 0 !== e.a &&
									n.push(parseFloat(o.a + l * (e.a - o.a)) + "px"),
									void 0 !== e.color &&
									((i =
											"rgb" +
											(t.support.rgba ? "a" : "") +
											"(" +
											parseInt(
												o.color[0] + l * (e.color[0] - o.color[0]),
												10
											) +
											"," +
											parseInt(
												o.color[1] + l * (e.color[1] - o.color[1]),
												10
											) +
											"," +
											parseInt(
												o.color[2] + l * (e.color[2] - o.color[2]),
												10
											)),
										t.support.rgba &&
										(i +=
											"," +
											parseFloat(
												o.color[3] + l * (e.color[3] - o.color[3])
											)),
										n.push(i + ")")),
									c.push(n.join(" "));
							}),
							(e = c.join(", ")),
							(n[i] = e);
					};
				},
			});
	}),
	$(document).ready(function() {
		function t(t, e, interval) {
			//console.log(t);
			t.each(function() {
				var $t = $(this);
				var i = $t.find(e + ":visible .carousel-item").length - 1;
				i && $t.find(e + " .carousel-control-next").removeClass("invisible");
				var c = $t.find(e + " .carousel");
				if (c.length && !c.hasClass('carousele-initialized')) {
					var _interval = c.data('interval') ? parseInt(c.data('interval')) : (c.data('bs-interval') ? parseInt(c.data('interval')) : (interval ? interval : 4000));
					console.log(_interval);
					c.addClass('carousele-initialized').carousel({
						interval: _interval,
						wrap: true
					}).on("slide.bs.carousel", function(e) {
						0 == e.to ?
							($t.find(".carousel-control-prev").addClass("invisible"),
								$t.find(".carousel-control-next").removeClass("invisible")) :
							e.to == i ?
							($t.find(".carousel-control-prev").removeClass("invisible"),
								$t.find(".carousel-control-next").addClass("invisible")) :
							($t.find(".carousel-control-prev").removeClass("invisible"),
								$t.find(".carousel-control-next").removeClass("invisible"));
					});
					$t.find(".tile-card-slide .card button").mouseenter(function() {
						$(this).closest(".card").animate({
							boxShadow: "none"
						}, 100);
					}).mouseleave(function() {
						$(this)
							.closest(".card")
							.animate({
								boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.15)"
							}, 100);
					});
				}
			});
		}

		function e(t) {
			var e,
				i,
				s = t.find(".carousel-inner .carousel-item"),
				n = [];
			s.length &&
				((i = function() {
						s.each(function() {
								n.push($(this).height());
							}),
							(e = Math.max.apply(null, n)),
							s.each(function() {
								$(this).css("min-height", e + "px");
							});
					})(),
					$(window).on("resize orientationchange", function() {
						(e = 0),
						(n.length = 0),
						s.each(function() {
								$(this).css("min-height", "0");
							}),
							i();
					}));
		}
		$(".carousel-item-flex:empty").parent("div").remove(),
			t($(".apply-now"), ".tile-card-slide-large"),
			t($(".apply-now"), ".tile-card-slide-small"),
			t($(".check-more-deals"), ".tile-card-slide"),
			e($(".apply-now .tile-card-slide-large")),
			e($(".apply-now .tile-card-slide-small")),
			e($(".check-more-deals .tile-card-slide")),
			e($(".try-figure-out .tile-card-slide")),
			e($(".product-promotion-carousel [data-ride='carousel']")),
			e($(".video-carousel-component [data-ride='carousel']"));
	}),
	$(document).ready(function() {
		function t() {
			var t,
				e = $(".search-page-filter")
				.find(".cards-each")
				.filter(function(t, e) {
					return !$(e).hasClass("hiden-filter");
				});
			if (10 < e.length) {
				for (var i = 0; i < e.length; i++)
					10 < i + 1 && $(e[i]).addClass("hiden-other");
				(t = parseInt(e.length - 10)),
				$(".search-page-filter .load__more")
					.removeClass("d-none")
					.find(".load__results")
					.text(t);
			} else $(".search-page-filter .load__more").addClass("d-none");
			0 === e.length ?
				($(".no-result").show(),
					$(".search-page-filter .load__more").parent().hide(),
					$(".search-page-filter .section-title").hide()) :
				($(".no-result").hide(),
					$(".search-page-filter .load__more").parent().show(),
					$(".search-page-filter .section-title").show()),
				$(".search-page-filter .show__result").text(e.length),
				$(".search-page-filter .result__nums").text(
					$(".search-results .cards-each:visible").length
				);
		}

		function e(t) {
			return t.toLowerCase().replace(/\s*/g, "");
		}
		$(".search-clear").click(function() {
				$(".search-input").val(""), $("#search-btn").addClass("d-none");
			}),
			$("#searchLabel").on("input", function() {
				0 < $(this).val().length ?
					$("#search-btn").removeClass("d-none") :
					$("#search-btn").addClass("d-none");
			}),
			$(".search-page-filter .filter-list").on("click", "li", function() {
				var i, s;
				$(".search-page-filter .filter-list li").removeClass(
						"btn-gradient-blue--active"
					),
					$(this).addClass("btn-gradient-blue--active"),
					(i = $(this).text().toLowerCase()),
					(s = e(i)),
					$(".search-results")
					.find(".cards-each")
					.filter(function(i, n) {
						return (
							$(n).removeClass("hiden-filter").removeClass("hiden-other"),
							0 == s.indexOf("all") ?
							($(".search-results")
								.find(".cards-each")
								.removeClass("hiden-filter")
								.removeClass("hiden-other"),
								t(),
								!0) :
							e($(n).attr("data-tag")) === s ||
							($(n).addClass("hiden-filter"), !1)
						);
					}),
					t(),
					$("body,html").animate({
							scrollTop: $(".search-results").offset().top - 100
						},
						300
					);
			}),
			0 < $(".search-results").length &&
			($(".search-page-filter .all__result").text(
					$(".search-results .cards-each").length
				),
				$(".search-page-filter .show__result").text(
					$(".search-results .cards-each").length
				),
				$(".search-page-filter .result__nums").text(
					$(".search-results .cards-each:visible").length
				),
				$(".search-page-filter .load__results").text(
					$(".search-results .cards-each.hiden-filter").length
				)),
			$(".search-page-filter .load__more").click(function() {
				$(".search-page-filter .cards-each")
					.removeClass("hiden-filter")
					.removeClass("hiden-other"),
					$(".search-page-filter .result__nums").text(
						$(".search-results .cards-each:visible").length
					),
					$(this).addClass("d-none");
			}),
			document
			.querySelectorAll(
				".search-page-filter .filter-list li"
			)
			.forEach(function(t) {
				t.setAttribute(
					"data-filter",
					t.textContent.replace(/\s+/g, "-").toLowerCase()
				);
				t.setAttribute(
					"button_name",
					"category:" + t.textContent.toLowerCase()
				);
			}),
			t(),
			setTimeout(function() {
				var t, e;
				(t = window.location.search),
				(e = new URLSearchParams(t).get("filter")) ?
				$(".filter-list li").each(function() {
					e === $(this).attr("data-filter") && $(this).trigger("click");
				}): $(".filter-list li").removeClass("d-none");
			}, 50);
	}),
	$(window).on('load', function() {
		function e(t) {
			var i = function() {
				t.each(function() {
					var s = $(this).find(".carousel-inner .carousel-item");
					var n = [];
					var e = 0;
					if (s.length) {
						s.each(function() {
							$(this).css("min-height", "0px");
						});
						s.each(function() {
							n.push($(this).outerHeight());
						});
						e = Math.max.apply(null, n);
						s.each(function() {
							$(this).css("min-height", e + "px");
						});
					}
				});
			};
			i();
			$(window).on("resize orientationchange", function() {
				i();
			});
		};
		e($(".apply-now .tile-card-slide-large")),
			e($(".apply-now .tile-card-slide-small")),
			// e($(".check-more-deals .tile-card-slide")),
			// e($(".product-promotion-carousel .tile-card-slide")),
			e($(".tile-card-slide"));

		/*$('.bb-3-col-tile-slider-no-border').each(function() {
			var t = $(this),
				c = t.find('.carousel');
			if (c.length) {
				var s = c.find('.carousel-item'),
					o = c.find('.carousel-controls .carousel-indicators');
				o.remove();
				if (s.length > 0) {
					var _h = '<ol class="carousel-indicators">';
					s.each(function(index) {
						var _class = index == 0 ? 'active' : '';
						_h += '<li data-target="#' + c.attr('id') + '" data-slide-to="' + index + '" class="rounded-circle ' + _class + '"></li>';
					});
					_h += '</ol>';
					c.find('.carousel-controls').append(_h);
				}
			}
		});*/
	});

function _defineProperty(t, e, i) {
	return (
		e in t ?
		Object.defineProperty(t, e, {
			value: i,
			enumerable: !0,
			configurable: !0,
			writable: !0,
		}) :
		(t[e] = i),
		t
	);
}
var _gsScope =
	"undefined" != typeof module && module.exports && "undefined" != typeof global ?
	global :
	window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
		var t, e, i, s, n, o, r, a;

		function l(t, e, i, s) {
			i === s && (i = s - (s - e) / 1e6),
				t === e && (e = t + (i - t) / 1e6),
				(this.a = t),
				(this.b = e),
				(this.c = i),
				(this.d = s),
				(this.da = s - t),
				(this.ca = i - t),
				(this.ba = e - t);
		}

		function c(t, e, i, s) {
			var n = {
					a: t
				},
				o = {},
				r = {},
				a = {
					c: s
				},
				l = (t + e) / 2,
				c = (i + s) / 2,
				d = ((i = ((d = (e + i) / 2) + c) / 2) - (e = (l + d) / 2)) / 8;
			return (
				(n.b = l + (t - l) / 4),
				(o.b = e + d),
				(n.c = o.a = (n.b + o.b) / 2),
				(o.c = r.a = (e + i) / 2),
				(r.b = i - d),
				(a.b = c + (s - c) / 4),
				(r.c = a.a = (r.b + a.b) / 2),
				[n, o, r, a]
			);
		}

		function d(t, o, r, a, d, h) {
			var u,
				p,
				f,
				m,
				g,
				v,
				_,
				y,
				b = {},
				w = [],
				x = h || t[0];
			for (p in ((d =
						"string" == typeof d ?
						"," + d + "," :
						",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
					null == o && (o = 1),
					t[0]))
				w.push(p);
			if (1 < t.length) {
				for (y = t[t.length - 1], _ = !0, u = w.length; - 1 < --u;)
					if (((p = w[u]), 0.05 < Math.abs(x[p] - y[p]))) {
						_ = !1;
						break;
					}
				_ &&
					((t = t.concat()),
						h && t.unshift(h),
						t.push(t[1]),
						(h = t[t.length - 3]));
			}
			for (e.length = i.length = s.length = 0, u = w.length; - 1 < --u;)
				(p = w[u]),
				(n[p] = -1 !== d.indexOf("," + p + ",")),
				(b[p] = (function(t, s, n, o) {
					var r,
						a,
						c,
						d,
						h,
						u,
						p = [];
					if (o)
						for (a = (t = [o].concat(t)).length; - 1 < --a;)
							"string" == typeof(u = t[a][s]) &&
							"=" === u.charAt(1) &&
							(t[a][s] = o[s] + Number(u.charAt(0) + u.substr(2)));
					if ((r = t.length - 2) < 0)
						return (p[0] = new l(t[0][s], 0, 0, t[0][s])), p;
					for (a = 0; a < r; a++)
						(c = t[a][s]),
						(d = t[a + 1][s]),
						(p[a] = new l(c, 0, 0, d)),
						n &&
						((h = t[a + 2][s]),
							(e[a] = (e[a] || 0) + (d - c) * (d - c)),
							(i[a] = (i[a] || 0) + (h - d) * (h - d)));
					return (p[a] = new l(t[a][s], 0, 0, t[a + 1][s])), p;
				})(t, p, n[p], h));
			for (u = e.length; - 1 < --u;)
				(e[u] = Math.sqrt(e[u])), (i[u] = Math.sqrt(i[u]));
			if (!a) {
				for (u = w.length; - 1 < --u;)
					if (n[p])
						for (v = (f = b[w[u]]).length - 1, m = 0; m < v; m++)
							(g = f[m + 1].da / i[m] + f[m].da / e[m] || 0),
							(s[m] = (s[m] || 0) + g * g);
				for (u = s.length; - 1 < --u;) s[u] = Math.sqrt(s[u]);
			}
			for (u = w.length, m = r ? 4 : 1; - 1 < --u;)
				(function(t, n, o, r, a) {
					var l,
						d,
						h,
						u,
						p,
						f,
						m,
						g,
						v,
						_,
						y = t.length - 1,
						b = 0,
						w = t[0].a;
					for (l = 0; l < y; l++)
						(d = (u = t[b]).a),
						(h = u.d),
						(f = t[b + 1].d),
						(f = a ?
							((g = e[l]),
								(_ = (((v = i[l]) + g) * n * 0.25) / ((!r && s[l]) || 0.5)),
								h -
								((p = h - (h - d) * (r ? 0.5 * n : 0 !== g ? _ / g : 0)) +
									((((_ = h + (f - h) * (r ? 0.5 * n : 0 !== v ? _ / v : 0)) -
												p) *
											((3 * g) / (g + v) + 0.5)) /
										4 || 0))) :
							h -
							((p = h - (h - d) * n * 0.5) + (_ = h + (f - h) * n * 0.5)) /
							2),
						(p += f),
						(_ += f),
						(u.c = f = p),
						(u.b = 0 !== l ? w : (w = u.a + 0.6 * (u.c - u.a))),
						(u.da = h - d),
						(u.ca = f - d),
						(u.ba = w - d),
						o ?
						((m = c(d, w, f, h)),
							t.splice(b, 1, m[0], m[1], m[2], m[3]),
							(b += 4)) :
						b++,
						(w = _);
					((u = t[b]).b = w),
					(u.c = w + 0.4 * (u.d - w)),
					(u.da = u.d - u.a),
					(u.ca = u.c - u.a),
					(u.ba = w - u.a),
					o &&
						((m = c(u.a, w, u.c, u.d)), t.splice(b, 1, m[0], m[1], m[2], m[3]));
				})((f = b[(p = w[u])]), o, r, a, n[p]),
				_ && (f.splice(0, m), f.splice(f.length - m, m));
			return b;
		}
		_gsScope._gsDefine(
				"TweenMax",
				["core.Animation", "core.SimpleTimeline", "TweenLite"],
				function(t, e, i) {
					function s(t) {
						for (var e = [], i = t.length, s = 0; s !== i; e.push(t[s++]));
						return e;
					}

					function n(t, e, i) {
						var s,
							n,
							o = t.cycle;
						for (s in o)
							(n = o[s]),
							(t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length]);
						delete t.cycle;
					}

					function o(t, e, s) {
						i.call(this, t, e, s),
							(this._cycle = 0),
							(this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
							(this._repeat = this.vars.repeat || 0),
							(this._repeatDelay = this.vars.repeatDelay || 0),
							this._repeat && this._uncache(!0),
							(this.render = o.prototype.render);
					}
					var r = 1e-10,
						a = i._internals,
						l = a.isSelector,
						c = a.isArray,
						d = (o.prototype = i.to({}, 0.1, {})),
						h = [];

					function u(t, e) {
						for (var s = [], n = 0, o = t._first; o;)
							o instanceof i ?
							(s[n++] = o) :
							(e && (s[n++] = o), (n = (s = s.concat(u(o, e))).length)),
							(o = o._next);
						return s;
					}
					(o.version = "1.20.4"),
					(d.constructor = o),
					(d.kill()._gc = !1),
					(o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf),
					(o.getTweensOf = i.getTweensOf),
					(o.lagSmoothing = i.lagSmoothing),
					(o.ticker = i.ticker),
					(o.render = i.render),
					(d.invalidate = function() {
						return (
							(this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase),
							(this._repeat = this.vars.repeat || 0),
							(this._repeatDelay = this.vars.repeatDelay || 0),
							(this._yoyoEase = null),
							this._uncache(!0),
							i.prototype.invalidate.call(this)
						);
					}),
					(d.updateTo = function(t, e) {
						var s,
							n = this.ratio,
							o = this.vars.immediateRender || t.immediateRender;
						for (s in (e &&
								this._startTime < this._timeline._time &&
								((this._startTime = this._timeline._time),
									this._uncache(!1),
									this._gc ?
									this._enabled(!0, !1) :
									this._timeline.insert(this, this._startTime - this._delay)),
								t))
							this.vars[s] = t[s];
						if (this._initted || o)
							if (e)(this._initted = !1), o && this.render(0, !0, !0);
							else if (
							(this._gc && this._enabled(!0, !1),
								this._notifyPluginsOfEnabled &&
								this._firstPT &&
								i._onPluginEvent("_onDisable", this),
								0.998 < this._time / this._duration)
						)
							(e = this._totalTime),
							this.render(0, !0, !1),
							(this._initted = !1),
							this.render(e, !0, !1);
						else if (((this._initted = !1), this._init(), 0 < this._time || o))
							for (var r, a = 1 / (1 - n), l = this._firstPT; l;)
								(r = l.s + l.c), (l.c *= a), (l.s = r - l.c), (l = l._next);
						return this;
					}),
					(d.render = function(t, e, s) {
						this._initted ||
							(0 === this._duration && this.vars.repeat && this.invalidate());
						var n,
							o,
							l,
							c,
							d,
							h,
							u,
							p = this._dirty ? this.totalDuration() : this._totalDuration,
							f = this._time,
							m = this._totalTime,
							g = this._cycle,
							v = this._duration,
							_ = this._rawPrevTime;
						if (
							(p - 1e-7 <= t && 0 <= t ?
								((this._totalTime = p),
									(this._cycle = this._repeat),
									this._yoyo && 0 != (1 & this._cycle) ?
									((this._time = 0),
										(this.ratio = this._ease._calcEnd ?
											this._ease.getRatio(0) :
											0)) :
									((this._time = v),
										(this.ratio = this._ease._calcEnd ?
											this._ease.getRatio(1) :
											1)),
									this._reversed ||
									((n = !0),
										(o = "onComplete"),
										(s = s || this._timeline.autoRemoveChildren)),
									0 !== v ||
									(!this._initted && this.vars.lazy && !s) ||
									(this._startTime === this._timeline._duration && (t = 0),
										(_ < 0 ||
											(t <= 0 && -1e-7 <= t) ||
											(_ === r && "isPause" !== this.data)) &&
										_ !== t &&
										((s = !0), r < _ && (o = "onReverseComplete")),
										(this._rawPrevTime = h = !e || t || _ === t ? t : r))) :
								t < 1e-7 ?
								((this._totalTime = this._time = this._cycle = 0),
									(this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
									(0 !== m || (0 === v && 0 < _)) &&
									((o = "onReverseComplete"), (n = this._reversed)),
									t < 0 &&
									((this._active = !1),
										0 !== v ||
										(!this._initted && this.vars.lazy && !s) ||
										(0 <= _ && (s = !0),
											(this._rawPrevTime = h = !e || t || _ === t ? t : r))),
									this._initted || (s = !0)) :
								((this._totalTime = this._time = t),
									0 !== this._repeat &&
									((d = v + this._repeatDelay),
										(this._cycle = (this._totalTime / d) >> 0),
										0 !== this._cycle &&
										this._cycle === this._totalTime / d &&
										m <= t &&
										this._cycle--,
										(this._time = this._totalTime - this._cycle * d),
										this._yoyo &&
										0 != (1 & this._cycle) &&
										((this._time = v - this._time),
											(u = this._yoyoEase || this.vars.yoyoEase) &&
											(this._yoyoEase ||
												(!0 !== u || this._initted ?
													(this._yoyoEase = u = !0 === u ?
														this._ease :
														u instanceof Ease ?
														u :
														Ease.map[u]) :
													((u = this.vars.ease),
														(this._yoyoEase = u =
															u ?
															u instanceof Ease ?
															u :
															"function" == typeof u ?
															new Ease(u, this.vars.easeParams) :
															Ease.map[u] || i.defaultEase :
															i.defaultEase))),
												(this.ratio = u ?
													1 - u.getRatio((v - this._time) / v) :
													0))),
										this._time > v ?
										(this._time = v) :
										this._time < 0 && (this._time = 0)),
									this._easeType && !u ?
									((c = this._time / v),
										(1 === (p = this._easeType) || (3 === p && 0.5 <= c)) &&
										(c = 1 - c),
										3 === p && (c *= 2),
										1 === (d = this._easePower) ?
										(c *= c) :
										2 === d ?
										(c *= c * c) :
										3 === d ?
										(c *= c * c * c) :
										4 === d && (c *= c * c * c * c),
										1 === p ?
										(this.ratio = 1 - c) :
										2 === p ?
										(this.ratio = c) :
										this._time / v < 0.5 ?
										(this.ratio = c / 2) :
										(this.ratio = 1 - c / 2)) :
									u || (this.ratio = this._ease.getRatio(this._time / v))),
								f !== this._time || s || g !== this._cycle)
						) {
							if (!this._initted) {
								if ((this._init(), !this._initted || this._gc)) return;
								if (
									!s &&
									this._firstPT &&
									((!1 !== this.vars.lazy && this._duration) ||
										(this.vars.lazy && !this._duration))
								)
									return (
										(this._time = f),
										(this._totalTime = m),
										(this._rawPrevTime = _),
										(this._cycle = g),
										a.lazyTweens.push(this),
										void(this._lazy = [t, e])
									);
								!this._time || n || u ?
									n &&
									this._ease._calcEnd &&
									!u &&
									(this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) :
									(this.ratio = this._ease.getRatio(this._time / v));
							}
							for (
								!1 !== this._lazy && (this._lazy = !1),
								this._active ||
								(!this._paused &&
									this._time !== f &&
									0 <= t &&
									(this._active = !0)),
								0 === m &&
								(2 === this._initted && 0 < t && this._init(),
									this._startAt &&
									(0 <= t ?
										this._startAt.render(t, !0, s) :
										(o = o || "_dummyGS")),
									!this.vars.onStart ||
									(0 === this._totalTime && 0 !== v) ||
									e ||
									this._callback("onStart")),
								l = this._firstPT; l;

							)
								l.f ?
								l.t[l.p](l.c * this.ratio + l.s) :
								(l.t[l.p] = l.c * this.ratio + l.s),
								(l = l._next);
							this._onUpdate &&
								(t < 0 &&
									this._startAt &&
									this._startTime &&
									this._startAt.render(t, !0, s),
									e || (this._totalTime === m && !o) || this._callback("onUpdate")),
								this._cycle !== g &&
								(e ||
									this._gc ||
									(this.vars.onRepeat && this._callback("onRepeat"))),
								!o ||
								(this._gc && !s) ||
								(t < 0 &&
									this._startAt &&
									!this._onUpdate &&
									this._startTime &&
									this._startAt.render(t, !0, s),
									n &&
									(this._timeline.autoRemoveChildren && this._enabled(!1, !1),
										(this._active = !1)),
									!e && this.vars[o] && this._callback(o),
									0 === v &&
									this._rawPrevTime === r &&
									h !== r &&
									(this._rawPrevTime = 0));
						} else
							m !== this._totalTime &&
							this._onUpdate &&
							(e || this._callback("onUpdate"));
					}),
					(o.to = function(t, e, i) {
						return new o(t, e, i);
					}),
					(o.from = function(t, e, i) {
						return (
							(i.runBackwards = !0),
							(i.immediateRender = 0 != i.immediateRender),
							new o(t, e, i)
						);
					}),
					(o.fromTo = function(t, e, i, s) {
						return (
							(s.startAt = i),
							(s.immediateRender =
								0 != s.immediateRender && 0 != i.immediateRender),
							new o(t, e, s)
						);
					}),
					(o.staggerTo = o.allTo =
						function(t, e, r, a, d, u, p) {
							function f() {
								r.onComplete &&
									r.onComplete.apply(r.onCompleteScope || this, arguments),
									d.apply(p || r.callbackScope || this, u || h);
							}
							a = a || 0;
							var m,
								g,
								v,
								_,
								y = 0,
								b = [],
								w = r.cycle,
								x = r.startAt && r.startAt.cycle;
							for (
								c(t) ||
								("string" == typeof t && (t = i.selector(t) || t),
									l(t) && (t = s(t))),
								t = t || [],
								a < 0 && ((t = s(t)).reverse(), (a *= -1)),
								m = t.length - 1,
								v = 0; v <= m; v++
							) {
								for (_ in ((g = {}), r)) g[_] = r[_];
								if (
									(w &&
										(n(g, t, v),
											null != g.duration && ((e = g.duration), delete g.duration)),
										x)
								) {
									for (_ in ((x = g.startAt = {}), r.startAt))
										x[_] = r.startAt[_];
									n(g.startAt, t, v);
								}
								(g.delay = y + (g.delay || 0)),
								v === m && d && (g.onComplete = f),
									(b[v] = new o(t[v], e, g)),
									(y += a);
							}
							return b;
						}),
					(o.staggerFrom = o.allFrom =
						function(t, e, i, s, n, r, a) {
							return (
								(i.runBackwards = !0),
								(i.immediateRender = 0 != i.immediateRender),
								o.staggerTo(t, e, i, s, n, r, a)
							);
						}),
					(o.staggerFromTo = o.allFromTo =
						function(t, e, i, s, n, r, a, l) {
							return (
								(s.startAt = i),
								(s.immediateRender =
									0 != s.immediateRender && 0 != i.immediateRender),
								o.staggerTo(t, e, s, n, r, a, l)
							);
						}),
					(o.delayedCall = function(t, e, i, s, n) {
						return new o(e, 0, {
							delay: t,
							onComplete: e,
							onCompleteParams: i,
							callbackScope: s,
							onReverseComplete: e,
							onReverseCompleteParams: i,
							immediateRender: !1,
							useFrames: n,
							overwrite: 0,
						});
					}),
					(o.set = function(t, e) {
						return new o(t, 0, e);
					}),
					(o.isTweening = function(t) {
						return 0 < i.getTweensOf(t, !0).length;
					});
					var p = (o.getAllTweens = function(e) {
						return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e));
					});

					function f(t, i, s, n) {
						(i = !1 !== i), (s = !1 !== s);
						for (
							var o, r, a = p((n = !1 !== n)), l = i && s && n, c = a.length; -
							1 < --c;

						)
							(r = a[c]),
							(l ||
								r instanceof e ||
								((o = r.target === r.vars.onComplete) && s) ||
								(i && !o)) &&
							r.paused(t);
					}
					return (
						(o.killAll = function(t, i, s, n) {
							null == i && (i = !0), null == s && (s = !0);
							for (
								var o, r, a = p(0 != n), l = a.length, c = i && s && n, d = 0; d < l; d++
							)
								(r = a[d]),
								(c ||
									r instanceof e ||
									((o = r.target === r.vars.onComplete) && s) ||
									(i && !o)) &&
								(t ?
									r.totalTime(r._reversed ? 0 : r.totalDuration()) :
									r._enabled(!1, !1));
						}),
						(o.killChildTweensOf = function(t, e) {
							if (null != t) {
								var n,
									r,
									d,
									h,
									u,
									p = a.tweenLookup;
								if (
									("string" == typeof t && (t = i.selector(t) || t),
										l(t) && (t = s(t)),
										c(t))
								)
									for (h = t.length; - 1 < --h;) o.killChildTweensOf(t[h], e);
								else {
									for (d in ((n = []), p))
										for (r = p[d].target.parentNode; r;)
											r === t && (n = n.concat(p[d].tweens)), (r = r.parentNode);
									for (u = n.length, h = 0; h < u; h++)
										e && n[h].totalTime(n[h].totalDuration()),
										n[h]._enabled(!1, !1);
								}
							}
						}),
						(o.pauseAll = function(t, e, i) {
							f(!0, t, e, i);
						}),
						(o.resumeAll = function(t, e, i) {
							f(!1, t, e, i);
						}),
						(o.globalTimeScale = function(e) {
							var s = t._rootTimeline,
								n = i.ticker.time;
							return arguments.length ?
								((e = e || r),
									(s._startTime = n - ((n - s._startTime) * s._timeScale) / e),
									(s = t._rootFramesTimeline),
									(n = i.ticker.frame),
									(s._startTime = n - ((n - s._startTime) * s._timeScale) / e),
									(s._timeScale = t._rootTimeline._timeScale = e)) :
								s._timeScale;
						}),
						(d.progress = function(t, e) {
							return arguments.length ?
								this.totalTime(
									this.duration() *
									(this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
									this._cycle * (this._duration + this._repeatDelay),
									e
								) :
								this._time / this.duration();
						}),
						(d.totalProgress = function(t, e) {
							return arguments.length ?
								this.totalTime(this.totalDuration() * t, e) :
								this._totalTime / this.totalDuration();
						}),
						(d.time = function(t, e) {
							return arguments.length ?
								(this._dirty && this.totalDuration(),
									t > this._duration && (t = this._duration),
									this._yoyo && 0 != (1 & this._cycle) ?
									(t =
										this._duration -
										t +
										this._cycle * (this._duration + this._repeatDelay)) :
									0 !== this._repeat &&
									(t += this._cycle * (this._duration + this._repeatDelay)),
									this.totalTime(t, e)) :
								this._time;
						}),
						(d.duration = function(e) {
							return arguments.length ?
								t.prototype.duration.call(this, e) :
								this._duration;
						}),
						(d.totalDuration = function(t) {
							return arguments.length ?
								-1 === this._repeat ?
								this :
								this.duration(
									(t - this._repeat * this._repeatDelay) / (this._repeat + 1)
								) :
								(this._dirty &&
									((this._totalDuration = -1 === this._repeat ?
											999999999999 :
											this._duration * (this._repeat + 1) +
											this._repeatDelay * this._repeat),
										(this._dirty = !1)),
									this._totalDuration);
						}),
						(d.repeat = function(t) {
							return arguments.length ?
								((this._repeat = t), this._uncache(!0)) :
								this._repeat;
						}),
						(d.repeatDelay = function(t) {
							return arguments.length ?
								((this._repeatDelay = t), this._uncache(!0)) :
								this._repeatDelay;
						}),
						(d.yoyo = function(t) {
							return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
						}),
						o
					);
				},
				!0
			),
			_gsScope._gsDefine(
				"TimelineLite",
				["core.Animation", "core.SimpleTimeline", "TweenLite"],
				function(t, e, i) {
					function s(t) {
						e.call(this, t),
							(this._labels = {}),
							(this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren),
							(this.smoothChildTiming = !0 === this.vars.smoothChildTiming),
							(this._sortChildren = !0),
							(this._onUpdate = this.vars.onUpdate);
						var i,
							s,
							n = this.vars;
						for (s in n)
							(i = n[s]),
							h(i) &&
							-1 !== i.join("").indexOf("{self}") &&
							(n[s] = this._swapSelfInParams(i));
						h(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger);
					}

					function n(t) {
						var e,
							i = {};
						for (e in t) i[e] = t[e];
						return i;
					}

					function o(t, e, i) {
						var s,
							n,
							o = t.cycle;
						for (s in o)
							(n = o[s]),
							(t[s] = "function" == typeof n ? n(i, e[i]) : n[i % n.length]);
						delete t.cycle;
					}

					function r(t) {
						for (var e = [], i = t.length, s = 0; s !== i; e.push(t[s++]));
						return e;
					}
					var a = 1e-10,
						l = i._internals,
						c = (s._internals = {}),
						d = l.isSelector,
						h = l.isArray,
						u = l.lazyTweens,
						p = l.lazyRender,
						f = _gsScope._gsDefine.globals,
						m = (c.pauseCallback = function() {});
					c = s.prototype = new e();
					return (
						(s.version = "1.20.4"),
						(c.constructor = s),
						(c.kill()._gc = c._forcingPlayhead = c._hasPause = !1),
						(c.to = function(t, e, s, n) {
							var o = (s.repeat && f.TweenMax) || i;
							return e ? this.add(new o(t, e, s), n) : this.set(t, s, n);
						}),
						(c.from = function(t, e, s, n) {
							return this.add(((s.repeat && f.TweenMax) || i).from(t, e, s), n);
						}),
						(c.fromTo = function(t, e, s, n, o) {
							var r = (n.repeat && f.TweenMax) || i;
							return e ? this.add(r.fromTo(t, e, s, n), o) : this.set(t, n, o);
						}),
						(c.staggerTo = function(t, e, a, l, c, h, u, p) {
							var f,
								m,
								g = new s({
									onComplete: h,
									onCompleteParams: u,
									callbackScope: p,
									smoothChildTiming: this.smoothChildTiming,
								}),
								v = a.cycle;
							for (
								"string" == typeof t && (t = i.selector(t) || t),
								d((t = t || [])) && (t = r(t)),
								(l = l || 0) < 0 && ((t = r(t)).reverse(), (l *= -1)),
								m = 0; m < t.length; m++
							)
								(f = n(a)).startAt &&
								((f.startAt = n(f.startAt)),
									f.startAt.cycle && o(f.startAt, t, m)),
								v &&
								(o(f, t, m),
									null != f.duration && ((e = f.duration), delete f.duration)),
								g.to(t[m], e, f, m * l);
							return this.add(g, c);
						}),
						(c.staggerFrom = function(t, e, i, s, n, o, r, a) {
							return (
								(i.immediateRender = 0 != i.immediateRender),
								(i.runBackwards = !0),
								this.staggerTo(t, e, i, s, n, o, r, a)
							);
						}),
						(c.staggerFromTo = function(t, e, i, s, n, o, r, a, l) {
							return (
								(s.startAt = i),
								(s.immediateRender =
									0 != s.immediateRender && 0 != i.immediateRender),
								this.staggerTo(t, e, s, n, o, r, a, l)
							);
						}),
						(c.call = function(t, e, s, n) {
							return this.add(i.delayedCall(0, t, e, s), n);
						}),
						(c.set = function(t, e, s) {
							return (
								(s = this._parseTimeOrLabel(s, 0, !0)),
								null == e.immediateRender &&
								(e.immediateRender = s === this._time && !this._paused),
								this.add(new i(t, 0, e), s)
							);
						}),
						(s.exportRoot = function(t, e) {
							null == (t = t || {}).smoothChildTiming &&
								(t.smoothChildTiming = !0);
							var n,
								o,
								r,
								a,
								l = new s(t);
							for (
								null == e && (e = !0),
								(t = l._timeline)._remove(l, !0),
								l._startTime = 0,
								l._rawPrevTime = l._time = l._totalTime = t._time,
								r = t._first; r;

							)
								(a = r._next),
								(e && r instanceof i && r.target === r.vars.onComplete) ||
								((o = r._startTime - r._delay) < 0 && (n = 1), l.add(r, o)),
								(r = a);
							return t.add(l, 0), n && l.totalDuration(), l;
						}),
						(c.add = function(n, o, r, a) {
							var l, c, d, u, p, f;
							if (
								("number" != typeof o &&
									(o = this._parseTimeOrLabel(o, 0, !0, n)),
									!(n instanceof t))
							) {
								if (n instanceof Array || (n && n.push && h(n))) {
									for (
										r = r || "normal", a = a || 0, l = o, c = n.length, d = 0; d < c; d++
									)
										h((u = n[d])) && (u = new s({
											tweens: u
										})),
										this.add(u, l),
										"string" != typeof u &&
										"function" != typeof u &&
										("sequence" === r ?
											(l = u._startTime + u.totalDuration() / u._timeScale) :
											"start" === r && (u._startTime -= u.delay())),
										(l += a);
									return this._uncache(!0);
								}
								if ("string" == typeof n) return this.addLabel(n, o);
								if ("function" != typeof n)
									throw (
										"Cannot add " +
										n +
										" into the timeline; it is not a tween, timeline, function, or string."
									);
								n = i.delayedCall(0, n);
							}
							if (
								(e.prototype.add.call(this, n, o),
									n._time &&
									n.render(
										(this.rawTime() - n._startTime) * n._timeScale,
										!1,
										!1
									),
									(this._gc || this._time === this._duration) &&
									!this._paused &&
									this._duration < this.duration())
							)
								for (f = (p = this).rawTime() > n._startTime; p._timeline;)
									f && p._timeline.smoothChildTiming ?
									p.totalTime(p._totalTime, !0) :
									p._gc && p._enabled(!0, !1),
									(p = p._timeline);
							return this;
						}),
						(c.remove = function(e) {
							if (e instanceof t) {
								this._remove(e, !1);
								var i = (e._timeline = e.vars.useFrames ?
									t._rootFramesTimeline :
									t._rootTimeline);
								return (
									(e._startTime =
										(e._paused ? e._pauseTime : i._time) -
										(e._reversed ?
											e.totalDuration() - e._totalTime :
											e._totalTime) /
										e._timeScale),
									this
								);
							}
							if (e instanceof Array || (e && e.push && h(e))) {
								for (var s = e.length; - 1 < --s;) this.remove(e[s]);
								return this;
							}
							return "string" == typeof e ?
								this.removeLabel(e) :
								this.kill(null, e);
						}),
						(c._remove = function(t, i) {
							return (
								e.prototype._remove.call(this, t, i),
								this._last ?
								this._time > this.duration() &&
								((this._time = this._duration),
									(this._totalTime = this._totalDuration)) :
								(this._time =
									this._totalTime =
									this._duration =
									this._totalDuration =
									0),
								this
							);
						}),
						(c.append = function(t, e) {
							return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
						}),
						(c.insert = c.insertMultiple =
							function(t, e, i, s) {
								return this.add(t, e || 0, i, s);
							}),
						(c.appendMultiple = function(t, e, i, s) {
							return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
						}),
						(c.addLabel = function(t, e) {
							return (this._labels[t] = this._parseTimeOrLabel(e)), this;
						}),
						(c.addPause = function(t, e, s, n) {
							return (
								((n = i.delayedCall(0, m, s, n || this)).vars.onComplete =
									n.vars.onReverseComplete =
									e),
								(n.data = "isPause"),
								(this._hasPause = !0),
								this.add(n, t)
							);
						}),
						(c.removeLabel = function(t) {
							return delete this._labels[t], this;
						}),
						(c.getLabelTime = function(t) {
							return null != this._labels[t] ? this._labels[t] : -1;
						}),
						(c._parseTimeOrLabel = function(e, i, s, n) {
							var o, r;
							if (n instanceof t && n.timeline === this) this.remove(n);
							else if (n && (n instanceof Array || (n.push && h(n))))
								for (r = n.length; - 1 < --r;)
									n[r] instanceof t &&
									n[r].timeline === this &&
									this.remove(n[r]);
							if (
								((o =
										"number" != typeof e || i ?
										99999999999 < this.duration() ?
										this.recent().endTime(!1) :
										this._duration :
										0),
									"string" == typeof i)
							)
								return this._parseTimeOrLabel(
									i,
									s && "number" == typeof e && null == this._labels[i] ?
									e - o :
									0,
									s
								);
							if (
								((i = i || 0),
									"string" != typeof e || (!isNaN(e) && null == this._labels[e]))
							)
								null == e && (e = o);
							else {
								if (-1 === (r = e.indexOf("=")))
									return null == this._labels[e] ?
										s ?
										(this._labels[e] = o + i) :
										i :
										this._labels[e] + i;
								(i =
									parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1))),
								(e =
									1 < r ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, s) : o);
							}
							return Number(e) + i;
						}),
						(c.seek = function(t, e) {
							return this.totalTime(
								"number" == typeof t ? t : this._parseTimeOrLabel(t),
								!1 !== e
							);
						}),
						(c.stop = function() {
							return this.paused(!0);
						}),
						(c.gotoAndPlay = function(t, e) {
							return this.play(t, e);
						}),
						(c.gotoAndStop = function(t, e) {
							return this.pause(t, e);
						}),
						(c.render = function(t, e, i) {
							this._gc && this._enabled(!0, !1);
							var s,
								n,
								o,
								r,
								l,
								c,
								d,
								h = this._time,
								f = this._dirty ? this.totalDuration() : this._totalDuration,
								m = this._startTime,
								g = this._timeScale,
								v = this._paused;
							if (
								(h !== this._time && (t += this._time - h),
									f - 1e-7 <= t && 0 <= t)
							)
								(this._totalTime = this._time = f),
								this._reversed ||
								this._hasPausedChild() ||
								((n = !0),
									(r = "onComplete"),
									(l = !!this._timeline.autoRemoveChildren),
									0 === this._duration &&
									((t <= 0 && -1e-7 <= t) ||
										this._rawPrevTime < 0 ||
										this._rawPrevTime === a) &&
									this._rawPrevTime !== t &&
									this._first &&
									((l = !0),
										this._rawPrevTime > a && (r = "onReverseComplete"))),
								(this._rawPrevTime =
									this._duration || !e || t || this._rawPrevTime === t ? t : a),
								(t = f + 1e-4);
							else if (t < 1e-7)
								if (
									(((this._totalTime = this._time = 0) !== h ||
											(0 === this._duration &&
												this._rawPrevTime !== a &&
												(0 < this._rawPrevTime ||
													(t < 0 && 0 <= this._rawPrevTime)))) &&
										((r = "onReverseComplete"), (n = this._reversed)),
										t < 0)
								)
									(this._active = !1),
									this._timeline.autoRemoveChildren && this._reversed ?
									((l = n = !0), (r = "onReverseComplete")) :
									0 <= this._rawPrevTime && this._first && (l = !0),
									(this._rawPrevTime = t);
								else {
									if (
										((this._rawPrevTime =
												this._duration || !e || t || this._rawPrevTime === t ?
												t :
												a),
											0 === t && n)
									)
										for (s = this._first; s && 0 === s._startTime;)
											s._duration || (n = !1), (s = s._next);
									(t = 0), this._initted || (l = !0);
								}
							else {
								if (this._hasPause && !this._forcingPlayhead && !e) {
									if (h <= t)
										for (s = this._first; s && s._startTime <= t && !c;)
											s._duration ||
											"isPause" !== s.data ||
											s.ratio ||
											(0 === s._startTime && 0 === this._rawPrevTime) ||
											(c = s),
											(s = s._next);
									else
										for (s = this._last; s && s._startTime >= t && !c;)
											s._duration ||
											("isPause" === s.data && 0 < s._rawPrevTime && (c = s)),
											(s = s._prev);
									c &&
										((this._time = t = c._startTime),
											(this._totalTime =
												t +
												this._cycle * (this._totalDuration + this._repeatDelay)));
								}
								this._totalTime = this._time = this._rawPrevTime = t;
							}
							if ((this._time !== h && this._first) || i || l || c) {
								if (
									(this._initted || (this._initted = !0),
										this._active ||
										(!this._paused &&
											this._time !== h &&
											0 < t &&
											(this._active = !0)),
										0 === h &&
										this.vars.onStart &&
										((0 === this._time && this._duration) ||
											e ||
											this._callback("onStart")),
										h <= (d = this._time))
								)
									for (
										s = this._first; s &&
										((o = s._next), d === this._time && (!this._paused || v));

									)
										(s._active || (s._startTime <= d && !s._paused && !s._gc)) &&
										(c === s && this.pause(),
											s._reversed ?
											s.render(
												(s._dirty ? s.totalDuration() : s._totalDuration) -
												(t - s._startTime) * s._timeScale,
												e,
												i
											) :
											s.render((t - s._startTime) * s._timeScale, e, i)),
										(s = o);
								else
									for (
										s = this._last; s &&
										((o = s._prev), d === this._time && (!this._paused || v));

									) {
										if (
											s._active ||
											(s._startTime <= h && !s._paused && !s._gc)
										) {
											if (c === s) {
												for (c = s._prev; c && c.endTime() > this._time;)
													c.render(
														c._reversed ?
														c.totalDuration() -
														(t - c._startTime) * c._timeScale :
														(t - c._startTime) * c._timeScale,
														e,
														i
													),
													(c = c._prev);
												(c = null), this.pause();
											}
											s._reversed ?
												s.render(
													(s._dirty ? s.totalDuration() : s._totalDuration) -
													(t - s._startTime) * s._timeScale,
													e,
													i
												) :
												s.render((t - s._startTime) * s._timeScale, e, i);
										}
										s = o;
									}
								this._onUpdate &&
									(e || (u.length && p(), this._callback("onUpdate"))),
									r &&
									(this._gc ||
										(m !== this._startTime && g === this._timeScale) ||
										!(0 === this._time || f >= this.totalDuration()) ||
										(n &&
											(u.length && p(),
												this._timeline.autoRemoveChildren &&
												this._enabled(!1, !1),
												(this._active = !1)),
											!e && this.vars[r] && this._callback(r)));
							}
						}),
						(c._hasPausedChild = function() {
							for (var t = this._first; t;) {
								if (t._paused || (t instanceof s && t._hasPausedChild()))
									return !0;
								t = t._next;
							}
							return !1;
						}),
						(c.getChildren = function(t, e, s, n) {
							n = n || -9999999999;
							for (var o = [], r = this._first, a = 0; r;)
								r._startTime < n ||
								(r instanceof i ?
									!1 !== e && (o[a++] = r) :
									(!1 !== s && (o[a++] = r),
										!1 !== t &&
										(a = (o = o.concat(r.getChildren(!0, e, s))).length))),
								(r = r._next);
							return o;
						}),
						(c.getTweensOf = function(t, e) {
							var s,
								n,
								o = this._gc,
								r = [],
								a = 0;
							for (
								o && this._enabled(!0, !0), n = (s = i.getTweensOf(t)).length; -
								1 < --n;

							)
								(s[n].timeline === this || (e && this._contains(s[n]))) &&
								(r[a++] = s[n]);
							return o && this._enabled(!1, !0), r;
						}),
						(c.recent = function() {
							return this._recent;
						}),
						(c._contains = function(t) {
							for (var e = t.timeline; e;) {
								if (e === this) return !0;
								e = e.timeline;
							}
							return !1;
						}),
						(c.shiftChildren = function(t, e, i) {
							i = i || 0;
							for (var s, n = this._first, o = this._labels; n;)
								n._startTime >= i && (n._startTime += t), (n = n._next);
							if (e)
								for (s in o) o[s] >= i && (o[s] += t);
							return this._uncache(!0);
						}),
						(c._kill = function(t, e) {
							if (!t && !e) return this._enabled(!1, !1);
							for (
								var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
									s = i.length,
									n = !1; -
								1 < --s;

							)
								i[s]._kill(t, e) && (n = !0);
							return n;
						}),
						(c.clear = function(t) {
							var e = this.getChildren(!1, !0, !0),
								i = e.length;
							for (this._time = this._totalTime = 0; - 1 < --i;)
								e[i]._enabled(!1, !1);
							return !1 !== t && (this._labels = {}), this._uncache(!0);
						}),
						(c.invalidate = function() {
							for (var e = this._first; e;) e.invalidate(), (e = e._next);
							return t.prototype.invalidate.call(this);
						}),
						(c._enabled = function(t, i) {
							if (t === this._gc)
								for (var s = this._first; s;) s._enabled(t, !0), (s = s._next);
							return e.prototype._enabled.call(this, t, i);
						}),
						(c.totalTime = function(e, i, s) {
							this._forcingPlayhead = !0;
							var n = t.prototype.totalTime.apply(this, arguments);
							return (this._forcingPlayhead = !1), n;
						}),
						(c.duration = function(t) {
							return arguments.length ?
								(0 !== this.duration() &&
									0 !== t &&
									this.timeScale(this._duration / t),
									this) :
								(this._dirty && this.totalDuration(), this._duration);
						}),
						(c.totalDuration = function(t) {
							if (arguments.length)
								return t && this.totalDuration() ?
									this.timeScale(this._totalDuration / t) :
									this;
							if (this._dirty) {
								for (var e, i, s = 0, n = this._last, o = 999999999999; n;)
									(e = n._prev),
									n._dirty && n.totalDuration(),
									n._startTime > o &&
									this._sortChildren &&
									!n._paused &&
									!this._calculatingDuration ?
									((this._calculatingDuration = 1),
										this.add(n, n._startTime - n._delay),
										(this._calculatingDuration = 0)) :
									(o = n._startTime),
									n._startTime < 0 &&
									!n._paused &&
									((s -= n._startTime),
										this._timeline.smoothChildTiming &&
										((this._startTime += n._startTime / this._timeScale),
											(this._time -= n._startTime),
											(this._totalTime -= n._startTime),
											(this._rawPrevTime -= n._startTime)),
										this.shiftChildren(-n._startTime, !1, -9999999999),
										(o = 0)),
									s < (i = n._startTime + n._totalDuration / n._timeScale) &&
									(s = i),
									(n = e);
								(this._duration = this._totalDuration = s), (this._dirty = !1);
							}
							return this._totalDuration;
						}),
						(c.paused = function(e) {
							if (!e)
								for (var i = this._first, s = this._time; i;)
									i._startTime === s &&
									"isPause" === i.data &&
									(i._rawPrevTime = 0),
									(i = i._next);
							return t.prototype.paused.apply(this, arguments);
						}),
						(c.usesFrames = function() {
							for (var e = this._timeline; e._timeline;) e = e._timeline;
							return e === t._rootFramesTimeline;
						}),
						(c.rawTime = function(t) {
							return t &&
								(this._paused ||
									(this._repeat && 0 < this.time() && this.totalProgress() < 1)) ?
								this._totalTime % (this._duration + this._repeatDelay) :
								this._paused ?
								this._totalTime :
								(this._timeline.rawTime(t) - this._startTime) * this._timeScale;
						}),
						s
					);
				},
				!0
			),
			_gsScope._gsDefine(
				"TimelineMax",
				["TimelineLite", "TweenLite", "easing.Ease"],
				function(t, e, i) {
					function s(e) {
						t.call(this, e),
							(this._repeat = this.vars.repeat || 0),
							(this._repeatDelay = this.vars.repeatDelay || 0),
							(this._cycle = 0),
							(this._yoyo = !0 === this.vars.yoyo),
							(this._dirty = !0);
					}
					var n = 1e-10,
						o = e._internals,
						r = o.lazyTweens,
						a = o.lazyRender,
						l = _gsScope._gsDefine.globals,
						c = new i(null, null, 1, 0);
					return (
						((i = s.prototype = new t()).constructor = s),
						(i.kill()._gc = !1),
						(s.version = "1.20.4"),
						(i.invalidate = function() {
							return (
								(this._yoyo = !0 === this.vars.yoyo),
								(this._repeat = this.vars.repeat || 0),
								(this._repeatDelay = this.vars.repeatDelay || 0),
								this._uncache(!0),
								t.prototype.invalidate.call(this)
							);
						}),
						(i.addCallback = function(t, i, s, n) {
							return this.add(e.delayedCall(0, t, s, n), i);
						}),
						(i.removeCallback = function(t, e) {
							if (t)
								if (null == e) this._kill(null, t);
								else
									for (
										var i = this.getTweensOf(t, !1),
											s = i.length,
											n = this._parseTimeOrLabel(e); -
										1 < --s;

									)
										i[s]._startTime === n && i[s]._enabled(!1, !1);
							return this;
						}),
						(i.removePause = function(e) {
							return this.removeCallback(t._internals.pauseCallback, e);
						}),
						(i.tweenTo = function(t, i) {
							i = i || {};
							var s,
								n,
								o,
								r = {
									ease: c,
									useFrames: this.usesFrames(),
									immediateRender: !1,
									lazy: !1,
								},
								a = (i.repeat && l.TweenMax) || e;
							for (n in i) r[n] = i[n];
							return (
								(r.time = this._parseTimeOrLabel(t)),
								(s =
									Math.abs(Number(r.time) - this._time) / this._timeScale ||
									0.001),
								(o = new a(this, s, r)),
								(r.onStart = function() {
									o.target.paused(!0),
										o.vars.time === o.target.time() ||
										s !== o.duration() ||
										o.isFromTo ||
										o
										.duration(
											Math.abs(o.vars.time - o.target.time()) /
											o.target._timeScale
										)
										.render(o.time(), !0, !0),
										i.onStart &&
										i.onStart.apply(
											i.onStartScope || i.callbackScope || o,
											i.onStartParams || []
										);
								}),
								o
							);
						}),
						(i.tweenFromTo = function(t, e, i) {
							return (
								(i = i || {}),
								(t = this._parseTimeOrLabel(t)),
								(i.startAt = {
									onComplete: this.seek,
									onCompleteParams: [t],
									callbackScope: this,
								}),
								(i.immediateRender = !1 !== i.immediateRender),
								((i = this.tweenTo(e, i)).isFromTo = 1),
								i.duration(Math.abs(i.vars.time - t) / this._timeScale || 0.001)
							);
						}),
						(i.render = function(t, e, i) {
							this._gc && this._enabled(!0, !1);
							var s,
								o,
								l,
								c,
								d,
								h,
								u,
								p = this._time,
								f = this._dirty ? this.totalDuration() : this._totalDuration,
								m = this._duration,
								g = this._totalTime,
								v = this._startTime,
								_ = this._timeScale,
								y = this._rawPrevTime,
								b = this._paused,
								w = this._cycle;
							if (
								(p !== this._time && (t += this._time - p),
									f - 1e-7 <= t && 0 <= t)
							)
								this._locked ||
								((this._totalTime = f), (this._cycle = this._repeat)),
								this._reversed ||
								this._hasPausedChild() ||
								((o = !0),
									(c = "onComplete"),
									(d = !!this._timeline.autoRemoveChildren),
									0 === this._duration &&
									((t <= 0 && -1e-7 <= t) || y < 0 || y === n) &&
									y !== t &&
									this._first &&
									((d = !0), n < y && (c = "onReverseComplete"))),
								(this._rawPrevTime =
									this._duration || !e || t || this._rawPrevTime === t ? t : n),
								this._yoyo && 0 != (1 & this._cycle) ?
								(this._time = t = 0) :
								(t = (this._time = m) + 1e-4);
							else if (t < 1e-7)
								if (
									(this._locked || (this._totalTime = this._cycle = 0),
										((this._time = 0) !== p ||
											(0 === m &&
												y !== n &&
												(0 < y || (t < 0 && 0 <= y)) &&
												!this._locked)) &&
										((c = "onReverseComplete"), (o = this._reversed)),
										t < 0)
								)
									(this._active = !1),
									this._timeline.autoRemoveChildren && this._reversed ?
									((d = o = !0), (c = "onReverseComplete")) :
									0 <= y && this._first && (d = !0),
									(this._rawPrevTime = t);
								else {
									if (
										((this._rawPrevTime =
												m || !e || t || this._rawPrevTime === t ? t : n),
											0 === t && o)
									)
										for (s = this._first; s && 0 === s._startTime;)
											s._duration || (o = !1), (s = s._next);
									(t = 0), this._initted || (d = !0);
								}
							else if (
								(0 === m && y < 0 && (d = !0),
									(this._time = this._rawPrevTime = t),
									this._locked ||
									((this._totalTime = t),
										0 !== this._repeat &&
										((C = m + this._repeatDelay),
											(this._cycle = (this._totalTime / C) >> 0),
											0 !== this._cycle &&
											this._cycle === this._totalTime / C &&
											g <= t &&
											this._cycle--,
											(this._time = this._totalTime - this._cycle * C),
											this._yoyo &&
											0 != (1 & this._cycle) &&
											(this._time = m - this._time),
											this._time > m ?
											(t = (this._time = m) + 1e-4) :
											this._time < 0 ?
											(this._time = t = 0) :
											(t = this._time))),
									this._hasPause && !this._forcingPlayhead && !e)
							) {
								if (p <= (t = this._time) || (this._repeat && w !== this._cycle))
									for (s = this._first; s && s._startTime <= t && !h;)
										s._duration ||
										"isPause" !== s.data ||
										s.ratio ||
										(0 === s._startTime && 0 === this._rawPrevTime) ||
										(h = s),
										(s = s._next);
								else
									for (s = this._last; s && s._startTime >= t && !h;)
										s._duration ||
										("isPause" === s.data && 0 < s._rawPrevTime && (h = s)),
										(s = s._prev);
								h &&
									h._startTime < m &&
									((this._time = t = h._startTime),
										(this._totalTime =
											t + this._cycle * (this._totalDuration + this._repeatDelay)));
							}
							if (this._cycle !== w && !this._locked) {
								var x = this._yoyo && 0 != (1 & w),
									T = x === (this._yoyo && 0 != (1 & this._cycle)),
									$ = this._totalTime,
									k = this._cycle,
									S = this._rawPrevTime,
									C = this._time;
								if (
									((this._totalTime = w * m),
										this._cycle < w ? (x = !x) : (this._totalTime += m),
										(this._time = p),
										(this._rawPrevTime = 0 === m ? y - 1e-4 : y),
										(this._cycle = w),
										(this._locked = !0),
										(p = x ? 0 : m),
										this.render(p, e, 0 === m),
										e ||
										this._gc ||
										(this.vars.onRepeat &&
											((this._cycle = k),
												(this._locked = !1),
												this._callback("onRepeat"))),
										p !== this._time)
								)
									return;
								if (
									(T &&
										((this._cycle = w),
											(this._locked = !0),
											(p = x ? m + 1e-4 : -1e-4),
											this.render(p, !0, !1)),
										(this._locked = !1),
										this._paused && !b)
								)
									return;
								(this._time = C),
								(this._totalTime = $),
								(this._cycle = k),
								(this._rawPrevTime = S);
							}
							if ((this._time !== p && this._first) || i || d || h) {
								if (
									(this._initted || (this._initted = !0),
										this._active ||
										(!this._paused &&
											this._totalTime !== g &&
											0 < t &&
											(this._active = !0)),
										0 === g &&
										this.vars.onStart &&
										((0 === this._totalTime && this._totalDuration) ||
											e ||
											this._callback("onStart")),
										p <= (u = this._time))
								)
									for (
										s = this._first; s &&
										((l = s._next), u === this._time && (!this._paused || b));

									)
										(s._active ||
											(s._startTime <= this._time && !s._paused && !s._gc)) &&
										(h === s && this.pause(),
											s._reversed ?
											s.render(
												(s._dirty ? s.totalDuration() : s._totalDuration) -
												(t - s._startTime) * s._timeScale,
												e,
												i
											) :
											s.render((t - s._startTime) * s._timeScale, e, i)),
										(s = l);
								else
									for (
										s = this._last; s &&
										((l = s._prev), u === this._time && (!this._paused || b));

									) {
										if (
											s._active ||
											(s._startTime <= p && !s._paused && !s._gc)
										) {
											if (h === s) {
												for (h = s._prev; h && h.endTime() > this._time;)
													h.render(
														h._reversed ?
														h.totalDuration() -
														(t - h._startTime) * h._timeScale :
														(t - h._startTime) * h._timeScale,
														e,
														i
													),
													(h = h._prev);
												(h = null), this.pause();
											}
											s._reversed ?
												s.render(
													(s._dirty ? s.totalDuration() : s._totalDuration) -
													(t - s._startTime) * s._timeScale,
													e,
													i
												) :
												s.render((t - s._startTime) * s._timeScale, e, i);
										}
										s = l;
									}
								this._onUpdate &&
									(e || (r.length && a(), this._callback("onUpdate"))),
									c &&
									(this._locked ||
										this._gc ||
										(v !== this._startTime && _ === this._timeScale) ||
										!(0 === this._time || f >= this.totalDuration()) ||
										(o &&
											(r.length && a(),
												this._timeline.autoRemoveChildren &&
												this._enabled(!1, !1),
												(this._active = !1)),
											!e && this.vars[c] && this._callback(c)));
							} else
								g !== this._totalTime &&
								this._onUpdate &&
								(e || this._callback("onUpdate"));
						}),
						(i.getActive = function(t, e, i) {
							null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
							for (
								var s,
									n = [],
									o = this.getChildren(t, e, i),
									r = 0,
									a = o.length,
									l = 0; l < a; l++
							)
								(s = o[l]).isActive() && (n[r++] = s);
							return n;
						}),
						(i.getLabelAfter = function(t) {
							t || (0 !== t && (t = this._time));
							for (var e = this.getLabelsArray(), i = e.length, s = 0; s < i; s++)
								if (e[s].time > t) return e[s].name;
							return null;
						}),
						(i.getLabelBefore = function(t) {
							null == t && (t = this._time);
							for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
								if (e[i].time < t) return e[i].name;
							return null;
						}),
						(i.getLabelsArray = function() {
							var t,
								e = [],
								i = 0;
							for (t in this._labels) e[i++] = {
								time: this._labels[t],
								name: t
							};
							return (
								e.sort(function(t, e) {
									return t.time - e.time;
								}),
								e
							);
						}),
						(i.invalidate = function() {
							return (this._locked = !1), t.prototype.invalidate.call(this);
						}),
						(i.progress = function(t, e) {
							return arguments.length ?
								this.totalTime(
									this.duration() *
									(this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) +
									this._cycle * (this._duration + this._repeatDelay),
									e
								) :
								this._time / this.duration() || 0;
						}),
						(i.totalProgress = function(t, e) {
							return arguments.length ?
								this.totalTime(this.totalDuration() * t, e) :
								this._totalTime / this.totalDuration() || 0;
						}),
						(i.totalDuration = function(e) {
							return arguments.length ?
								-1 !== this._repeat && e ?
								this.timeScale(this.totalDuration() / e) :
								this :
								(this._dirty &&
									(t.prototype.totalDuration.call(this),
										(this._totalDuration = -1 === this._repeat ?
											999999999999 :
											this._duration * (this._repeat + 1) +
											this._repeatDelay * this._repeat)),
									this._totalDuration);
						}),
						(i.time = function(t, e) {
							return arguments.length ?
								(this._dirty && this.totalDuration(),
									t > this._duration && (t = this._duration),
									this._yoyo && 0 != (1 & this._cycle) ?
									(t =
										this._duration -
										t +
										this._cycle * (this._duration + this._repeatDelay)) :
									0 !== this._repeat &&
									(t += this._cycle * (this._duration + this._repeatDelay)),
									this.totalTime(t, e)) :
								this._time;
						}),
						(i.repeat = function(t) {
							return arguments.length ?
								((this._repeat = t), this._uncache(!0)) :
								this._repeat;
						}),
						(i.repeatDelay = function(t) {
							return arguments.length ?
								((this._repeatDelay = t), this._uncache(!0)) :
								this._repeatDelay;
						}),
						(i.yoyo = function(t) {
							return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
						}),
						(i.currentLabel = function(t) {
							return arguments.length ?
								this.seek(t, !0) :
								this.getLabelBefore(this._time + 1e-8);
						}),
						s
					);
				},
				!0
			),
			(t = 180 / Math.PI),
			(e = []),
			(i = []),
			(s = []),
			(n = {}),
			(o = _gsScope._gsDefine.globals),
			(r = _gsScope._gsDefine.plugin({
				propName: "bezier",
				priority: -1,
				version: "1.3.8",
				API: 2,
				global: !0,
				init: function(t, e, i) {
					(this._target = t),
					e instanceof Array && (e = {
							values: e
						}),
						(this._func = {}),
						(this._mod = {}),
						(this._props = []),
						(this._timeRes =
							null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
					var s,
						n,
						o,
						r,
						a,
						c = e.values || [],
						h = {},
						u = c[0],
						p = e.autoRotate || i.vars.orientToBezier;
					for (s in ((this._autoRotate = p ?
								p instanceof Array ?
								p : [
									["x", "y", "rotation", (!0 !== p && Number(p)) || 0]
								] :
								null),
							u))
						this._props.push(s);
					for (o = this._props.length; - 1 < --o;)
						(s = this._props[o]),
						this._overwriteProps.push(s),
						(n = this._func[s] = "function" == typeof t[s]),
						(h[s] = n ?
							t[
								s.indexOf("set") ||
								"function" != typeof t["get" + s.substr(3)] ?
								s :
								"get" + s.substr(3)
							]() :
							parseFloat(t[s])),
						a || (h[s] !== c[0][s] && (a = h));
					if (
						((this._beziers =
								"cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ?
								d(
									c,
									isNaN(e.curviness) ? 1 : e.curviness,
									!1,
									"thruBasic" === e.type,
									e.correlate,
									a
								) :
								(function(t, e, i) {
									var s,
										n,
										o,
										r,
										a,
										c,
										d,
										h,
										u,
										p,
										f,
										m = {},
										g = "cubic" === (e = e || "soft") ? 3 : 2,
										v = "soft" === e,
										_ = [];
									if (
										(v && i && (t = [i].concat(t)),
											null == t || t.length < 1 + g)
									)
										throw "invalid Bezier data";
									for (u in t[0]) _.push(u);
									for (c = _.length; - 1 < --c;) {
										for (
											m[(u = _[c])] = a = [], p = 0, h = t.length, d = 0; d < h; d++
										)
											(s =
												null == i ?
												t[d][u] :
												"string" == typeof(f = t[d][u]) &&
												"=" === f.charAt(1) ?
												i[u] + Number(f.charAt(0) + f.substr(2)) :
												Number(f)),
											v &&
											1 < d &&
											d < h - 1 &&
											(a[p++] = (s + a[p - 2]) / 2),
											(a[p++] = s);
										for (h = p - g + 1, d = p = 0; d < h; d += g)
											(s = a[d]),
											(n = a[d + 1]),
											(o = a[d + 2]),
											(r = 2 == g ? 0 : a[d + 3]),
											(a[p++] = f =
												3 == g ?
												new l(s, n, o, r) :
												new l(s, (2 * n + s) / 3, (2 * n + o) / 3, o));
										a.length = p;
									}
									return m;
								})(c, e.type, h)),
							(this._segCount = this._beziers[s].length),
							this._timeRes &&
							((e = (function(t, e) {
									var i,
										s,
										n,
										o,
										r = [],
										a = [],
										l = 0,
										c = 0,
										d = (e = e >> 0 || 6) - 1,
										h = [],
										u = [];
									for (i in t)
										!(function(t, e, i) {
											for (
												var s, n, o, r, a, l, c, d, h, u = 1 / i, p = t.length; -
												1 < --p;

											)
												for (
													n = (d = t[p]).a,
													o = d.d - n,
													r = d.c - n,
													a = d.b - n,
													s = 0,
													l = 1; l <= i; l++
												)
													(c =
														s -
														(s =
															((h = u * l) * h * o +
																3 * (c = 1 - h) * (h * r + c * a)) *
															h)),
													(e[(h = p * i + l - 1)] = (e[h] || 0) + c * c);
										})(t[i], r, e);
									for (n = r.length, s = 0; s < n; s++)
										(l += Math.sqrt(r[s])),
										(u[(o = s % e)] = l),
										o == d &&
										((c += l),
											(h[(o = (s / e) >> 0)] = u),
											(a[o] = c),
											(l = 0),
											(u = []));
									return {
										length: c,
										lengths: a,
										segments: h
									};
								})(this._beziers, this._timeRes)),
								(this._length = e.length),
								(this._lengths = e.lengths),
								(this._segments = e.segments),
								(this._l1 = this._li = this._s1 = this._si = 0),
								(this._l2 = this._lengths[0]),
								(this._curSeg = this._segments[0]),
								(this._s2 = this._curSeg[0]),
								(this._prec = 1 / this._curSeg.length)),
							(p = this._autoRotate))
					)
						for (
							this._initialRotations = [],
							p[0] instanceof Array || (this._autoRotate = p = [p]),
							o = p.length; -
							1 < --o;

						) {
							for (r = 0; r < 3; r++)
								(s = p[o][r]),
								(this._func[s] =
									"function" == typeof t[s] &&
									t[
										s.indexOf("set") ||
										"function" != typeof t["get" + s.substr(3)] ?
										s :
										"get" + s.substr(3)
									]);
							(s = p[o][2]),
							(this._initialRotations[o] =
								(this._func[s] ?
									this._func[s].call(this._target) :
									this._target[s]) || 0),
							this._overwriteProps.push(s);
						}
					return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
				},
				set: function(e) {
					var i,
						s,
						n,
						o,
						r,
						a,
						l,
						c,
						d,
						h = this._segCount,
						u = this._func,
						p = this._target,
						f = e !== this._startRatio;
					if (this._timeRes) {
						if (
							((c = this._lengths),
								(d = this._curSeg),
								(e *= this._length),
								(T = this._li),
								e > this._l2 && T < h - 1)
						) {
							for (l = h - 1; T < l && (this._l2 = c[++T]) <= e;);
							(this._l1 = c[T - 1]),
							(this._li = T),
							(this._curSeg = d = this._segments[T]),
							(this._s2 = d[(this._s1 = this._si = 0)]);
						} else if (e < this._l1 && 0 < T) {
							for (; 0 < T && (this._l1 = c[--T]) >= e;);
							0 === T && e < this._l1 ? (this._l1 = 0) : T++,
								(this._l2 = c[T]),
								(this._li = T),
								(this._curSeg = d = this._segments[T]),
								(this._s1 = d[(this._si = d.length - 1) - 1] || 0),
								(this._s2 = d[this._si]);
						}
						if (
							((i = T),
								(e -= this._l1),
								(T = this._si),
								e > this._s2 && T < d.length - 1)
						) {
							for (l = d.length - 1; T < l && (this._s2 = d[++T]) <= e;);
							(this._s1 = d[T - 1]), (this._si = T);
						} else if (e < this._s1 && 0 < T) {
							for (; 0 < T && (this._s1 = d[--T]) >= e;);
							0 === T && e < this._s1 ? (this._s1 = 0) : T++,
								(this._s2 = d[T]),
								(this._si = T);
						}
						r = (T + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
					} else
						r =
						(e - (i = e < 0 ? 0 : 1 <= e ? h - 1 : (h * e) >> 0) * (1 / h)) * h;
					for (s = 1 - r, T = this._props.length; - 1 < --T;)
						(n = this._props[T]),
						(a =
							(r * r * (o = this._beziers[n][i]).da +
								3 * s * (r * o.ca + s * o.ba)) *
							r +
							o.a),
						this._mod[n] && (a = this._mod[n](a, p)),
						u[n] ? p[n](a) : (p[n] = a);
					if (this._autoRotate)
						for (
							var m, g, v, _, y, b, w, x = this._autoRotate, T = x.length; -
							1 < --T;

						)
							(n = x[T][2]),
							(b = x[T][3] || 0),
							(w = !0 === x[T][4] ? 1 : t),
							(o = this._beziers[x[T][0]]),
							(m = this._beziers[x[T][1]]),
							o &&
							m &&
							((o = o[i]),
								(m = m[i]),
								(g = o.a + (o.b - o.a) * r),
								(g += ((_ = o.b + (o.c - o.b) * r) - g) * r),
								(_ += (o.c + (o.d - o.c) * r - _) * r),
								(v = m.a + (m.b - m.a) * r),
								(v += ((y = m.b + (m.c - m.b) * r) - v) * r),
								(y += (m.c + (m.d - m.c) * r - y) * r),
								(a = f ?
									Math.atan2(y - v, _ - g) * w + b :
									this._initialRotations[T]),
								this._mod[n] && (a = this._mod[n](a, p)),
								u[n] ? p[n](a) : (p[n] = a));
				},
			})),
			(a = r.prototype),
			(r.bezierThrough = d),
			(r.cubicToQuadratic = c),
			(r._autoCSS = !0),
			(r.quadraticToCubic = function(t, e, i) {
				return new l(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
			}),
			(r._cssRegister = function() {
				var t,
					e,
					i,
					s = o.CSSPlugin;
				s &&
					((s = s._internals),
						(t = s._parseToProxy),
						(e = s._setPluginRatio),
						(i = s.CSSPropTween),
						s._registerComplexSpecialProp("bezier", {
							parser: function(s, n, o, a, l, c) {
								n instanceof Array && (n = {
									values: n
								}), (c = new r());
								var d,
									h,
									u,
									p = n.values,
									f = p.length - 1,
									m = [],
									g = {};
								if (f < 0) return l;
								for (d = 0; d <= f; d++)
									(u = t(s, p[d], a, l, c, f !== d)), (m[d] = u.end);
								for (h in n) g[h] = n[h];
								return (
									(g.values = m),
									((l = new i(s, "bezier", 0, 0, u.pt, 2)).data = u),
									(l.plugin = c),
									(l.setRatio = e),
									0 === g.autoRotate && (g.autoRotate = !0),
									!g.autoRotate ||
									g.autoRotate instanceof Array ||
									((d = !0 === g.autoRotate ? 0 : Number(g.autoRotate)),
										(g.autoRotate =
											null != u.end.left ? [
												["left", "top", "rotation", d, !1]
											] :
											null != u.end.x && [
												["x", "y", "rotation", d, !1]
											])),
									g.autoRotate &&
									(a._transform || a._enableTransforms(!1),
										(u.autoRotate = a._target._gsTransform),
										(u.proxy.rotation = u.autoRotate.rotation || 0),
										a._overwriteProps.push("rotation")),
									c._onInitTween(u.proxy, g, a._tween),
									l
								);
							},
						}));
			}),
			(a._mod = function(t) {
				for (var e, i = this._overwriteProps, s = i.length; - 1 < --s;)
					(e = t[i[s]]) && "function" == typeof e && (this._mod[i[s]] = e);
			}),
			(a._kill = function(t) {
				var e,
					i,
					s = this._props;
				for (e in this._beziers)
					if (e in t)
						for (
							delete this._beziers[e], delete this._func[e], i = s.length; -
							1 < --i;

						)
							s[i] === e && s.splice(i, 1);
				if ((s = this._autoRotate))
					for (i = s.length; - 1 < --i;) t[s[i][2]] && s.splice(i, 1);
				return this._super._kill.call(this, t);
			}),
			_gsScope._gsDefine(
				"plugins.CSSPlugin",
				["plugins.TweenPlugin", "TweenLite"],
				function(t, e) {
					function i() {
						t.call(this, "css"),
							(this._overwriteProps.length = 0),
							(this.setRatio = i.prototype.setRatio);
					}
					var s,
						n,
						o,
						r,
						a = _gsScope._gsDefine.globals,
						l = {},
						c = (i.prototype = new t("css"));

					function d(t, e) {
						return e.toUpperCase();
					}

					function h(t, e) {
						return K.createElementNS ?
							K.createElementNS(e || "http://www.w3.org/1999/xhtml", t) :
							K.createElement(t);
					}

					function u(t) {
						return L.test(
								"string" == typeof t ? t : (t.currentStyle || t.style).filter || ""
							) ?
							parseFloat(RegExp.$1) / 100 :
							1;
					}

					function p(t) {
						_gsScope.console && console.log(t);
					}

					function f(t, e) {
						var i,
							s,
							n = (e = e || J).style;
						if (void 0 !== n[t]) return t;
						for (
							t = t.charAt(0).toUpperCase() + t.substr(1),
							i = ["O", "Moz", "ms", "Ms", "Webkit"],
							s = 5; -
							1 < --s && void 0 === n[i[s] + t];

						);
						return 0 <= s ?
							((nt = "-" + (ot = 3 === s ? "ms" : i[s]).toLowerCase() + "-"),
								ot + t) :
							null;
					}

					function m(t, e) {
						var i,
							s,
							n = {};
						if ((e = e || rt(t, null)))
							if ((i = e.length))
								for (; - 1 < --i;)
									(-1 !== (s = e[i]).indexOf("-transform") && Et !== s) ||
									(n[s.replace(N, d)] = e.getPropertyValue(s));
							else
								for (i in e)
									(-1 !== i.indexOf("Transform") && Rt !== i) || (n[i] = e[i]);
						else if ((e = t.currentStyle || t.style))
							for (i in e)
								"string" == typeof i &&
								void 0 === n[i] &&
								(n[i.replace(N, d)] = e[i]);
						return (
							st || (n.opacity = u(t)),
							(t = Wt(t, e, !1)),
							(n.rotation = t.rotation),
							(n.skewX = t.skewX),
							(n.scaleX = t.scaleX),
							(n.scaleY = t.scaleY),
							(n.x = t.x),
							(n.y = t.y),
							zt &&
							((n.z = t.z),
								(n.rotationX = t.rotationX),
								(n.rotationY = t.rotationY),
								(n.scaleZ = t.scaleZ)),
							n.filters && delete n.filters,
							n
						);
					}

					function g(t, e, i, s, n) {
						var o,
							r,
							a,
							l = {},
							c = t.style;
						for (r in i)
							"cssText" !== r &&
							"length" !== r &&
							isNaN(r) &&
							(e[r] !== (o = i[r]) || (n && n[r])) &&
							-1 === r.indexOf("Origin") &&
							("number" == typeof o || "string" == typeof o) &&
							((l[r] =
									"auto" !== o || ("left" !== r && "top" !== r) ?
									("" !== o && "auto" !== o && "none" !== o) ||
									"string" != typeof e[r] ||
									"" === e[r].replace(D, "") ?
									o :
									0 :
									ct(t, r)),
								void 0 !== c[r] && (a = new _t(c, r, c[r], a)));
						if (s)
							for (r in s) "className" !== r && (l[r] = s[r]);
						return {
							difs: l,
							firstMPT: a
						};
					}

					function v(t, e) {
						if ("contain" === t || "auto" === t || "auto auto" === t)
							return t + " ";
						(null != t && "" !== t) || (t = "0 0");
						var i,
							s = t.split(" "),
							n = -1 !== t.indexOf("left") ?
							"0%" :
							-1 !== t.indexOf("right") ?
							"100%" :
							s[0],
							o = -1 !== t.indexOf("top") ?
							"0%" :
							-1 !== t.indexOf("bottom") ?
							"100%" :
							s[1];
						if (3 < s.length && !e) {
							for (
								s = t.split(", ").join(",").split(","), t = [], i = 0; i < s.length; i++
							)
								t.push(v(s[i]));
							return t.join(",");
						}
						return (
							null == o ?
							(o = "center" === n ? "50%" : "0") :
							"center" === o && (o = "50%"),
							("center" === n ||
								(isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) &&
							(n = "50%"),
							(t = n + " " + o + (2 < s.length ? " " + s[2] : "")),
							e &&
							((e.oxp = -1 !== n.indexOf("%")),
								(e.oyp = -1 !== o.indexOf("%")),
								(e.oxr = "=" === n.charAt(1)),
								(e.oyr = "=" === o.charAt(1)),
								(e.ox = parseFloat(n.replace(D, ""))),
								(e.oy = parseFloat(o.replace(D, ""))),
								(e.v = t)),
							e || t
						);
					}

					function _(t, e) {
						return (
							"function" == typeof t && (t = t(O, A)),
							"string" == typeof t && "=" === t.charAt(1) ?
							parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) :
							parseFloat(t) - parseFloat(e) || 0
						);
					}

					function y(t, e) {
						return (
							"function" == typeof t && (t = t(O, A)),
							null == t ?
							e :
							"string" == typeof t && "=" === t.charAt(1) ?
							parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e :
							parseFloat(t) || 0
						);
					}

					function b(t, e, i, s) {
						var n, o, r;
						return (
							"function" == typeof t && (t = t(O, A)),
							(r =
								null == t ?
								e :
								"number" == typeof t ?
								t :
								((n = 360),
									(o = t.split("_")),
									(r =
										((r = "=" === t.charAt(1)) ?
											parseInt(t.charAt(0) + "1", 10) *
											parseFloat(o[0].substr(2)) :
											parseFloat(o[0])) *
										(-1 === t.indexOf("rad") ? 1 : G) -
										(r ? 0 : e)),
									o.length &&
									(s && (s[i] = e + r),
										-1 !== t.indexOf("short") &&
										(r %= n) != r % 180 &&
										(r = r < 0 ? r + n : r - n),
										-1 !== t.indexOf("_cw") && r < 0 ?
										(r = ((r + 3599999999640) % n) - ((r / n) | 0) * n) :
										-1 !== t.indexOf("ccw") &&
										0 < r &&
										(r = ((r - 3599999999640) % n) - ((r / n) | 0) * n)),
									e + r)) < 1e-6 &&
							-1e-6 < r &&
							(r = 0),
							r
						);
					}

					function w(t, e, i) {
						return (
							(255 *
								(6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ?
									e + (i - e) * t * 6 :
									t < 0.5 ?
									i :
									3 * t < 2 ?
									e + (i - e) * (2 / 3 - t) * 6 :
									e) +
								0.5) |
							0
						);
					}

					function x(t, e) {
						var i,
							s,
							n,
							o = t.match(ft) || [],
							r = 0,
							a = "";
						if (!o.length) return t;
						for (i = 0; i < o.length; i++)
							(s = o[i]),
							(r += (n = t.substr(r, t.indexOf(s, r) - r)).length + s.length),
							3 === (s = pt(s, e)).length && s.push(1),
							(a +=
								n +
								(e ?
									"hsla(" + s[0] + "," + s[1] + "%," + s[2] + "%," + s[3] :
									"rgba(" + s.join(",")) +
								")");
						return a + t.substr(r);
					}
					((c.constructor = i).version = "1.20.4"),
					(i.API = 2),
					(i.defaultTransformPerspective = 0),
					(i.defaultSkewType = "compensated"),
					(i.defaultSmoothOrigin = !0),
					(i.suffixMap = {
						top: (c = "px"),
						right: c,
						bottom: c,
						left: c,
						width: c,
						height: c,
						fontSize: c,
						padding: c,
						margin: c,
						perspective: c,
						lineHeight: "",
					});
					var T,
						$,
						k,
						S,
						C,
						P,
						A,
						O,
						M = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
						R = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
						E = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
						D = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
						z = /(?:\d|\-|\+|=|#|\.)*/g,
						L = /opacity *= *([^)]*)/i,
						I = /opacity:([^;]*)/i,
						H = /alpha\(opacity *=.+?\)/i,
						q = /^(rgb|hsl)/,
						F = /([A-Z])/g,
						N = /-([a-z])/gi,
						j = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
						B = /(?:Left|Right|Width)/i,
						W = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
						X = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
						Y = /,(?=[^\)]*(?:\(|$))/gi,
						U = /[\s,\(]/i,
						V = Math.PI / 180,
						G = 180 / Math.PI,
						Q = {},
						Z = {
							style: {}
						},
						K = _gsScope.document || {
							createElement: function() {
								return Z;
							},
						},
						J = h("div"),
						tt = h("img"),
						et = (i._internals = {
							_specialProps: l
						}),
						it = (_gsScope.navigator || {}).userAgent || "",
						st =
						((Ot = it.indexOf("Android")),
							(At = h("a")),
							(k = -1 !== it.indexOf("Safari") &&
								-1 === it.indexOf("Chrome") &&
								(-1 === Ot || 3 < parseFloat(it.substr(Ot + 8, 2)))),
							(C = k && parseFloat(it.substr(it.indexOf("Version/") + 8, 2)) < 6),
							(S = -1 !== it.indexOf("Firefox")),
							(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(it) ||
								/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(it)) &&
							(P = parseFloat(RegExp.$1)),
							!!At &&
							((At.style.cssText = "top:1px;opacity:.55;"),
								/^0.55/.test(At.style.opacity))),
						nt = "",
						ot = "",
						rt = K.defaultView ? K.defaultView.getComputedStyle : function() {},
						at = (i.getStyle = function(t, e, i, s, n) {
							var o;
							return st || "opacity" !== e ?
								(!s && t.style[e] ?
									(o = t.style[e]) :
									(i = i || rt(t)) ?
									(o =
										i[e] ||
										i.getPropertyValue(e) ||
										i.getPropertyValue(e.replace(F, "-$1").toLowerCase())) :
									t.currentStyle && (o = t.currentStyle[e]),
									null == n ||
									(o && "none" !== o && "auto" !== o && "auto auto" !== o) ?
									o :
									n) :
								u(t);
						}),
						lt = (et.convertToPixels = function(t, s, n, o, r) {
							if ("px" === o || (!o && "lineHeight" !== s)) return n;
							if ("auto" === o || !n) return 0;
							var a,
								l,
								c,
								d = B.test(s),
								h = t,
								u = J.style,
								p = n < 0,
								f = 1 === n;
							if ((p && (n = -n), f && (n *= 100), "lineHeight" !== s || o))
								if ("%" === o && -1 !== s.indexOf("border"))
									a = (n / 100) * (d ? t.clientWidth : t.clientHeight);
								else {
									if (
										((u.cssText =
												"border:0 solid red;position:" +
												at(t, "position") +
												";line-height:0;"),
											"%" !== o &&
											h.appendChild &&
											"v" !== o.charAt(0) &&
											"rem" !== o)
									)
										u[d ? "borderLeftWidth" : "borderTopWidth"] = n + o;
									else {
										if (
											((h = t.parentNode || K.body),
												-1 !== at(h, "display").indexOf("flex") &&
												(u.position = "absolute"),
												(l = h._gsCache),
												(c = e.ticker.frame),
												l && d && l.time === c)
										)
											return (l.width * n) / 100;
										u[d ? "width" : "height"] = n + o;
									}
									h.appendChild(J),
										(a = parseFloat(J[d ? "offsetWidth" : "offsetHeight"])),
										h.removeChild(J),
										d &&
										"%" === o &&
										!1 !== i.cacheWidths &&
										(((l = h._gsCache = h._gsCache || {}).time = c),
											(l.width = (a / n) * 100)),
										0 !== a || r || (a = lt(t, s, n, o, !0));
								}
							else
								(l = rt(t).lineHeight),
								(t.style.lineHeight = n),
								(a = parseFloat(rt(t).lineHeight)),
								(t.style.lineHeight = l);
							return f && (a /= 100), p ? -a : a;
						}),
						ct = (et.calculateOffset = function(t, e, i) {
							if ("absolute" !== at(t, "position", i)) return 0;
							var s = "left" === e ? "Left" : "Top";
							i = at(t, "margin" + s, i);
							return (
								t["offset" + s] - (lt(t, e, parseFloat(i), i.replace(z, "")) || 0)
							);
						}),
						dt = {
							width: ["Left", "Right"],
							height: ["Top", "Bottom"]
						},
						ht = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
						ut = {
							aqua: [0, 255, 255],
							lime: [0, 255, 0],
							silver: [192, 192, 192],
							black: [0, 0, 0],
							maroon: [128, 0, 0],
							teal: [0, 128, 128],
							blue: [0, 0, 255],
							navy: [0, 0, 128],
							white: [255, 255, 255],
							fuchsia: [255, 0, 255],
							olive: [128, 128, 0],
							yellow: [255, 255, 0],
							orange: [255, 165, 0],
							gray: [128, 128, 128],
							purple: [128, 0, 128],
							green: [0, 128, 0],
							red: [255, 0, 0],
							pink: [255, 192, 203],
							cyan: [0, 255, 255],
							transparent: [255, 255, 255, 0],
						},
						pt = (i.parseColor = function(t, e) {
							var i, s, n, o, r, a, l, c;
							if (t)
								if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
								else {
									if (
										("," === t.charAt(t.length - 1) &&
											(t = t.substr(0, t.length - 1)),
											ut[t])
									)
										i = ut[t];
									else if ("#" === t.charAt(0))
										4 === t.length &&
										(t =
											"#" +
											(s = t.charAt(1)) +
											s +
											(n = t.charAt(2)) +
											n +
											(o = t.charAt(3)) +
											o),
										(i = [
											(t = parseInt(t.substr(1), 16)) >> 16,
											(t >> 8) & 255,
											255 & t,
										]);
									else if ("hsl" === t.substr(0, 3))
										if (((i = c = t.match(M)), e)) {
											if (-1 !== t.indexOf("=")) return t.match(R);
										} else
											(r = (Number(i[0]) % 360) / 360),
											(a = Number(i[1]) / 100),
											(s =
												2 * (l = Number(i[2]) / 100) -
												(n = l <= 0.5 ? l * (a + 1) : l + a - l * a)),
											3 < i.length && (i[3] = Number(i[3])),
											(i[0] = w(r + 1 / 3, s, n)),
											(i[1] = w(r, s, n)),
											(i[2] = w(r - 1 / 3, s, n));
									else i = t.match(M) || ut.transparent;
									(i[0] = Number(i[0])),
									(i[1] = Number(i[1])),
									(i[2] = Number(i[2])),
									3 < i.length && (i[3] = Number(i[3]));
								}
							else i = ut.black;
							return (
								e &&
								!c &&
								((s = i[0] / 255),
									(n = i[1] / 255),
									(o = i[2] / 255),
									(l = ((t = Math.max(s, n, o)) + (e = Math.min(s, n, o))) / 2),
									t === e ?
									(r = a = 0) :
									((c = t - e),
										(a = 0.5 < l ? c / (2 - t - e) : c / (t + e)),
										(r =
											t === s ?
											(n - o) / c + (n < o ? 6 : 0) :
											t === n ?
											(o - s) / c + 2 :
											(s - n) / c + 4),
										(r *= 60)),
									(i[0] = (r + 0.5) | 0),
									(i[1] = (100 * a + 0.5) | 0),
									(i[2] = (100 * l + 0.5) | 0)),
								i
							);
						}),
						ft =
						"(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
					for (c in ut) ft += "|" + c + "\\b";

					function mt(t, e, i, s) {
						if (null == t)
							return function(t) {
								return t;
							};
						var n,
							o = e ? (t.match(ft) || [""])[0] : "",
							r = t.split(o).join("").match(E) || [],
							a = t.substr(0, t.indexOf(r[0])),
							l = ")" === t.charAt(t.length - 1) ? ")" : "",
							c = -1 !== t.indexOf(" ") ? " " : ",",
							d = r.length,
							h = 0 < d ? r[0].replace(M, "") : "";
						return d ?
							(n = e ?
								function(t) {
									var e, u, p, f;
									if ("number" == typeof t) t += h;
									else if (s && Y.test(t)) {
										for (
											f = t.replace(Y, "|").split("|"), p = 0; p < f.length; p++
										)
											f[p] = n(f[p]);
										return f.join(",");
									}
									if (
										((e = (t.match(ft) || [o])[0]),
											(p = (u = t.split(e).join("").match(E) || []).length),
											d > p--)
									)
										for (; ++p < d;) u[p] = i ? u[((p - 1) / 2) | 0] : r[p];
									return (
										a +
										u.join(c) +
										c +
										e +
										l +
										(-1 !== t.indexOf("inset") ? " inset" : "")
									);
								} :
								function(t) {
									var e, o, u;
									if ("number" == typeof t) t += h;
									else if (s && Y.test(t)) {
										for (
											o = t.replace(Y, "|").split("|"), u = 0; u < o.length; u++
										)
											o[u] = n(o[u]);
										return o.join(",");
									}
									if (((u = (e = t.match(E) || []).length), d > u--))
										for (; ++u < d;) e[u] = i ? e[((u - 1) / 2) | 0] : r[u];
									return a + e.join(c) + l;
								}) :
							function(t) {
								return t;
							};
					}

					function gt(t) {
						return (
							(t = t.split(",")),
							function(e, i, s, n, o, r, a) {
								var l,
									c = (i + "").split(" ");
								for (a = {}, l = 0; l < 4; l++)
									a[t[l]] = c[l] = c[l] || c[((l - 1) / 2) >> 0];
								return n.parse(e, a, o, r);
							}
						);
					}

					function vt(t, e, i, s, n, o) {
						return (
							((o = new yt(t, e, i, s - i, n, -1, o)).b = i), (o.e = o.xs0 = s), o
						);
					}
					(ft = new RegExp(ft + ")", "gi")),
					(i.colorStringFilter = function(t) {
						var e = t[0] + " " + t[1];
						ft.test(e) &&
							((e = -1 !== e.indexOf("hsl(") || -1 !== e.indexOf("hsla(")),
								(t[0] = x(t[0], e)),
								(t[1] = x(t[1], e))),
							(ft.lastIndex = 0);
					}),
					e.defaultStringFilter ||
						(e.defaultStringFilter = i.colorStringFilter);
					var _t =
						((et._setPluginRatio = function(t) {
								this.plugin.setRatio(t);
								for (
									var e, i, s, n, o, r = this.data, a = r.proxy, l = r.firstMPT; l;

								)
									(e = a[l.v]),
									l.r ? (e = Math.round(e)) : e < 1e-6 && -1e-6 < e && (e = 0),
									(l.t[l.p] = e),
									(l = l._next);
								if (
									(r.autoRotate &&
										(r.autoRotate.rotation = r.mod ?
											r.mod(a.rotation, this.t) :
											a.rotation),
										1 === t || 0 === t)
								)
									for (l = r.firstMPT, o = 1 === t ? "e" : "b"; l;) {
										if ((i = l.t).type) {
											if (1 === i.type) {
												for (n = i.xs0 + i.s + i.xs1, s = 1; s < i.l; s++)
													n += i["xn" + s] + i["xs" + (s + 1)];
												i[o] = n;
											}
										} else i[o] = i.s + i.xs0;
										l = l._next;
									}
							}),
							function(t, e, i, s, n) {
								(this.t = t),
								(this.p = e),
								(this.v = i),
								(this.r = n),
								s && ((s._prev = this)._next = s);
							}),
						yt =
						((et._parseToProxy = function(t, e, i, s, n, o) {
								var r,
									a,
									l,
									c,
									d = s,
									h = {},
									u = {},
									p = i._transform,
									f = Q;
								for (
									i._transform = null,
									Q = e,
									s = n = i.parse(t, e, s, n),
									Q = f,
									o &&
									((i._transform = p),
										d && ((d._prev = null), d._prev && (d._prev._next = null))); s && s !== d;

								) {
									if (
										s.type <= 1 &&
										((u[(a = s.p)] = s.s + s.c),
											(h[a] = s.s),
											o || ((c = new _t(s, "s", a, c, s.r)), (s.c = 0)),
											1 === s.type)
									)
										for (r = s.l; 0 < --r;)
											(l = "xn" + r),
											(u[(a = s.p + "_" + l)] = s.data[l]),
											(h[a] = s[l]),
											o || (c = new _t(s, l, a, c, s.rxp[l]));
									s = s._next;
								}
								return {
									proxy: h,
									end: u,
									firstMPT: c,
									pt: n
								};
							}),
							(et.CSSPropTween = function(t, e, i, n, o, a, l, c, d, h, u) {
								(this.t = t),
								(this.p = e),
								(this.s = i),
								(this.c = n),
								(this.n = l || e),
								t instanceof yt || r.push(this.n),
									(this.r = c),
									(this.type = a || 0),
									d && ((this.pr = d), (s = !0)),
									(this.b = void 0 === h ? i : h),
									(this.e = void 0 === u ? i + n : u),
									o && ((this._next = o)._prev = this);
							})),
						bt = (i.parseComplex = function(t, e, s, n, o, r, a, l, c, d) {
							(s = s || r || ""),
							"function" == typeof n && (n = n(O, A)),
								(a = new yt(t, e, 0, 0, a, d ? 2 : 1, null, !1, l, s, n)),
								(n += ""),
								o &&
								ft.test(n + s) &&
								(i.colorStringFilter((n = [s, n])), (s = n[0]), (n = n[1]));
							var h,
								u,
								p,
								f,
								m,
								g,
								v,
								y,
								b,
								w,
								x,
								$,
								k = s.split(", ").join(",").split(" "),
								S = n.split(", ").join(",").split(" "),
								C = k.length,
								P = !1 !== T;
							for (
								(-1 === n.indexOf(",") && -1 === s.indexOf(",")) ||
								((S = -1 !== (n + s).indexOf("rgb") || -1 !== (n + s).indexOf("hsl") ?
										((k = k.join(" ").replace(Y, ", ").split(" ")),
											S.join(" ").replace(Y, ", ").split(" ")) :
										((k = k.join(" ").split(",").join(", ").split(" ")),
											S.join(" ").split(",").join(", ").split(" "))),
									(C = k.length)),
								C !== S.length && (C = (k = (r || "").split(" ")).length),
								a.plugin = c,
								a.setRatio = d,
								h = ft.lastIndex = 0; h < C; h++
							)
								if (((f = k[h]), (m = S[h]), (y = parseFloat(f)) || 0 === y))
									a.appendXtra(
										"",
										y,
										_(m, y),
										m.replace(R, ""),
										P && -1 !== m.indexOf("px"),
										!0
									);
								else if (o && ft.test(f))
								(x = ")" + ((x = m.indexOf(")") + 1) ? m.substr(x) : "")),
								($ = -1 !== m.indexOf("hsl") && st),
								(b = m),
								(f = pt(f, $)),
								(m = pt(m, $)),
								(y = 6 < f.length + m.length) && !st && 0 === m[3] ?
								((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
									(a.e = a.e.split(S[h]).join("transparent"))) :
								(st || (y = !1),
									$ ?
									a
									.appendXtra(
										b.substr(0, b.indexOf("hsl")) +
										(y ? "hsla(" : "hsl("),
										f[0],
										_(m[0], f[0]),
										",",
										!1,
										!0
									)
									.appendXtra("", f[1], _(m[1], f[1]), "%,", !1)
									.appendXtra(
										"",
										f[2],
										_(m[2], f[2]),
										y ? "%," : "%" + x,
										!1
									) :
									a
									.appendXtra(
										b.substr(0, b.indexOf("rgb")) +
										(y ? "rgba(" : "rgb("),
										f[0],
										m[0] - f[0],
										",",
										!0,
										!0
									)
									.appendXtra("", f[1], m[1] - f[1], ",", !0)
									.appendXtra("", f[2], m[2] - f[2], y ? "," : x, !0),
									y &&
									((f = f.length < 4 ? 1 : f[3]),
										a.appendXtra(
											"",
											f,
											(m.length < 4 ? 1 : m[3]) - f,
											x,
											!1
										))),
								(ft.lastIndex = 0);
							else if ((g = f.match(M))) {
								if (!(v = m.match(R)) || v.length !== g.length) return a;
								for (u = p = 0; u < g.length; u++)
									(w = g[u]),
									(b = f.indexOf(w, p)),
									a.appendXtra(
										f.substr(p, b - p),
										Number(w),
										_(v[u], w),
										"",
										P && "px" === f.substr(b + w.length, 2),
										0 === u
									),
									(p = b + w.length);
								a["xs" + a.l] += f.substr(p);
							} else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + m : m;
							if (-1 !== n.indexOf("=") && a.data) {
								for (x = a.xs0 + a.data.s, h = 1; h < a.l; h++)
									x += a["xs" + h] + a.data["xn" + h];
								a.e = x + a["xs" + h];
							}
							return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
						}),
						wt = 9;
					for ((c = yt.prototype).l = c.pr = 0; 0 < --wt;)
						(c["xn" + wt] = 0), (c["xs" + wt] = "");

					function xt(t, e) {
						(e = e || {}),
						(this.p = (e.prefix && f(t)) || t),
						((l[t] = l[this.p] = this).format =
							e.formatter ||
							mt(e.defaultValue, e.color, e.collapsible, e.multi)),
						e.parser && (this.parse = e.parser),
							(this.clrs = e.color),
							(this.multi = e.multi),
							(this.keyword = e.keyword),
							(this.dflt = e.defaultValue),
							(this.pr = e.priority || 0);
					}
					(c.xs0 = ""),
					(c._next =
						c._prev =
						c.xfirst =
						c.data =
						c.plugin =
						c.setRatio =
						c.rxp =
						null),
					(c.appendXtra = function(t, e, i, s, n, o) {
						var r = this,
							a = r.l;
						return (
							(r["xs" + a] += o && (a || r["xs" + a]) ? " " + t : t || ""),
							i || 0 === a || r.plugin ?
							(r.l++,
								(r.type = r.setRatio ? 2 : 1),
								(r["xs" + r.l] = s || ""),
								0 < a ?
								((r.data["xn" + a] = e + i),
									(r.rxp["xn" + a] = n),
									(r["xn" + a] = e),
									r.plugin ||
									((r.xfirst = new yt(
											r,
											"xn" + a,
											e,
											i,
											r.xfirst || r,
											0,
											r.n,
											n,
											r.pr
										)),
										(r.xfirst.xs0 = 0))) :
								((r.data = {
										s: e + i
									}),
									(r.rxp = {}),
									(r.s = e),
									(r.c = i),
									(r.r = n))) :
							(r["xs" + a] += e + (s || "")),
							r
						);
					});
					var Tt = (et._registerComplexSpecialProp = function(t, e, i) {
							"object" != (void 0 === e ? "undefined" : _typeof(e)) &&
							(e = {
								parser: i
							});
							var s,
								n = t.split(","),
								o = e.defaultValue;
							for (i = i || [o], s = 0; s < n.length; s++)
								(e.prefix = 0 === s && e.prefix),
								(e.defaultValue = i[s] || o),
								new xt(n[s], e);
						}),
						$t = (et._registerPluginProp = function(t) {
							var e;
							l[t] ||
								((e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin"),
									Tt(t, {
										parser: function(t, i, s, n, o, r, c) {
											var d = a.com.greensock.plugins[e];
											return d ?
												(d._cssRegister(), l[s].parse(t, i, s, n, o, r, c)) :
												(p("Error: " + e + " js file not loaded."), o);
										},
									}));
						});

					function kt(t, e, s, n, o, r) {
						var a,
							l,
							c,
							d,
							h,
							u,
							p,
							f,
							m,
							g,
							_,
							y,
							b = t._gsTransform,
							w = Bt(t, !0);
						b && ((_ = b.xOrigin), (y = b.yOrigin)),
							(!n || (a = n.split(" ")).length < 2) &&
							(0 === (p = t.getBBox()).x &&
								0 === p.y &&
								p.width + p.height === 0 &&
								(p = {
									x: parseFloat(
										t.hasAttribute("x") ?
										t.getAttribute("x") :
										t.hasAttribute("cx") ?
										t.getAttribute("cx") :
										0
									) || 0,
									y: parseFloat(
										t.hasAttribute("y") ?
										t.getAttribute("y") :
										t.hasAttribute("cy") ?
										t.getAttribute("cy") :
										0
									) || 0,
									width: 0,
									height: 0,
								}),
								(a = [
									(-1 !== (e = v(e).split(" "))[0].indexOf("%") ?
										(parseFloat(e[0]) / 100) * p.width :
										parseFloat(e[0])) + p.x,
									(-1 !== e[1].indexOf("%") ?
										(parseFloat(e[1]) / 100) * p.height :
										parseFloat(e[1])) + p.y,
								])),
							(s.xOrigin = d = parseFloat(a[0])),
							(s.yOrigin = h = parseFloat(a[1])),
							n &&
							w !== jt &&
							((u = w[0]),
								(p = w[1]),
								(f = w[2]),
								(m = w[3]),
								(g = w[4]),
								(e = w[5]),
								(n = u * m - p * f) &&
								((l = d * (m / n) + h * (-f / n) + (f * e - m * g) / n),
									(c = d * (-p / n) + h * (u / n) - (u * e - p * g) / n),
									(d = s.xOrigin = a[0] = l),
									(h = s.yOrigin = a[1] = c))),
							b &&
							(r && ((s.xOffset = b.xOffset), (s.yOffset = b.yOffset), (b = s)),
								o || (!1 !== o && !1 !== i.defaultSmoothOrigin) ?
								((l = d - _),
									(c = h - y),
									(b.xOffset += l * w[0] + c * w[2] - l),
									(b.yOffset += l * w[1] + c * w[3] - c)) :
								(b.xOffset = b.yOffset = 0)),
							r || t.setAttribute("data-svg-origin", a.join(" "));
					}

					function St(t) {
						var e,
							i = h(
								"svg",
								(this.ownerSVGElement &&
									this.ownerSVGElement.getAttribute("xmlns")) ||
								"http://www.w3.org/2000/svg"
							),
							s = this.parentNode,
							n = this.nextSibling,
							o = this.style.cssText;
						if (
							(qt.appendChild(i),
								i.appendChild(this),
								(this.style.display = "block"),
								t)
						)
							try {
								(e = this.getBBox()),
								(this._originalGetBBox = this.getBBox),
								(this.getBBox = St);
							} catch (t) {}
						else this._originalGetBBox && (e = this._originalGetBBox());
						return (
							n ? s.insertBefore(this, n) : s.appendChild(this),
							qt.removeChild(i),
							(this.style.cssText = o),
							e
						);
					}

					function Ct(t) {
						var e,
							i,
							s = this.data,
							n = (m = -s.rotation * V) + s.skewX * V,
							o = 1e5,
							r = ((Math.cos(m) * s.scaleX * o) | 0) / o,
							a = ((Math.sin(m) * s.scaleX * o) | 0) / o,
							l = ((Math.sin(n) * -s.scaleY * o) | 0) / o,
							c = ((Math.cos(n) * s.scaleY * o) | 0) / o,
							d = this.t.style,
							h = this.t.currentStyle;
						if (h) {
							(i = a), (a = -l), (l = -i), (e = h.filter), (d.filter = "");
							var u = this.t.offsetWidth,
								p = this.t.offsetHeight,
								f = "absolute" !== h.position,
								m =
								"progid:DXImageTransform.Microsoft.Matrix(M11=" +
								r +
								", M12=" +
								a +
								", M21=" +
								l +
								", M22=" +
								c;
							(n = s.x + (u * s.xPercent) / 100),
							(o = s.y + (p * s.yPercent) / 100);
							if (
								(null != s.ox &&
									((n +=
											(y = (s.oxp ? u * s.ox * 0.01 : s.ox) - u / 2) -
											(y * r + (b = (s.oyp ? p * s.oy * 0.01 : s.oy) - p / 2) * a)),
										(o += b - (y * l + b * c))),
									(m += f ?
										", Dx=" +
										((y = u / 2) - (y * r + (b = p / 2) * a) + n) +
										", Dy=" +
										(b - (y * l + b * c) + o) +
										")" :
										", sizingMethod='auto expand')"),
									-1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ?
									(d.filter = e.replace(X, m)) :
									(d.filter = m + " " + e),
									(0 !== t && 1 !== t) ||
									1 != r ||
									0 != a ||
									0 != l ||
									1 != c ||
									(f && -1 === m.indexOf("Dx=0, Dy=0")) ||
									(L.test(e) && 100 !== parseFloat(RegExp.$1)) ||
									(-1 === e.indexOf(e.indexOf("Alpha")) &&
										d.removeAttribute("filter")),
									!f)
							) {
								var g,
									v,
									_ = P < 8 ? 1 : -1,
									y = s.ieOffsetX || 0,
									b = s.ieOffsetY || 0;
								for (
									s.ieOffsetX = Math.round(
										(u - ((r < 0 ? -r : r) * u + (a < 0 ? -a : a) * p)) / 2 + n
									),
									s.ieOffsetY = Math.round(
										(p - ((c < 0 ? -c : c) * p + (l < 0 ? -l : l) * u)) / 2 + o
									),
									wt = 0; wt < 4; wt++
								)
									(v =
										(i = -1 !== (v = h[(g = ht[wt])]).indexOf("px") ?
											parseFloat(v) :
											lt(this.t, g, parseFloat(v), v.replace(z, "")) || 0) !==
										s[g] ?
										wt < 2 ?
										-s.ieOffsetX :
										-s.ieOffsetY :
										wt < 2 ?
										y - s.ieOffsetX :
										b - s.ieOffsetY),
									(d[g] =
										(s[g] = Math.round(
											i - v * (0 === wt || 2 === wt ? 1 : _)
										)) + "px");
							}
						}
					}
					((c = xt.prototype).parseComplex = function(t, e, i, s, n, o) {
						var r,
							a,
							l,
							c,
							d,
							h,
							u = this.keyword;
						if (
							(this.multi &&
								(Y.test(i) || Y.test(e) ?
									((a = e.replace(Y, "|").split("|")),
										(l = i.replace(Y, "|").split("|"))) :
									u && ((a = [e]), (l = [i]))),
								l)
						) {
							for (c = (l.length > a.length ? l : a).length, r = 0; r < c; r++)
								(e = a[r] = a[r] || this.dflt),
								(i = l[r] = l[r] || this.dflt),
								u &&
								(d = e.indexOf(u)) !== (h = i.indexOf(u)) &&
								(-1 === h ?
									(a[r] = a[r].split(u).join("")) :
									-1 === d && (a[r] += " " + u));
							(e = a.join(", ")), (i = l.join(", "));
						}
						return bt(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, n, o);
					}),
					(c.parse = function(t, e, i, s, n, r, a) {
						return this.parseComplex(
							t.style,
							this.format(at(t, this.p, o, !1, this.dflt)),
							this.format(e),
							n,
							r
						);
					}),
					(i.registerSpecialProp = function(t, e, i) {
						Tt(t, {
							parser: function(t, s, n, o, r, a) {
								return (
									((r = new yt(t, n, 0, 0, r, 2, n, !1, i)).plugin = a),
									(r.setRatio = e(t, s, o._tween, n)),
									r
								);
							},
							priority: i,
						});
					}),
					(i.useSVGTransformAttr = !0);
					var Pt,
						At,
						Ot,
						Mt =
						"scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
							","
						),
						Rt = f("transform"),
						Et = nt + "transform",
						Dt = f("transformOrigin"),
						zt = null !== f("perspective"),
						Lt = (et.Transform = function() {
							(this.perspective = parseFloat(i.defaultTransformPerspective) || 0),
							(this.force3D = !(!1 === i.defaultForce3D || !zt) &&
								(i.defaultForce3D || "auto"));
						}),
						It = _gsScope.SVGElement,
						Ht = function(t, e, i) {
							var s,
								n = K.createElementNS("http://www.w3.org/2000/svg", t),
								o = /([a-z])([A-Z])/g;
							for (s in i)
								n.setAttributeNS(null, s.replace(o, "$1-$2").toLowerCase(), i[s]);
							return e.appendChild(n), n;
						},
						qt = K.documentElement || {},
						Ft =
						((Ot = P || (/Android/i.test(it) && !_gsScope.chrome)),
							K.createElementNS &&
							!Ot &&
							((At = Ht("svg", qt)),
								(Ht = (it = Ht("rect", At, {
									width: 100,
									height: 50,
									x: 100,
								})).getBoundingClientRect().width),
								(it.style[Dt] = "50% 50%"),
								(it.style[Rt] = "scaleX(0.5)"),
								(Ot = Ht === it.getBoundingClientRect().width && !(S && zt)),
								qt.removeChild(At)),
							Ot),
						Nt = function(t) {
							return !(
								!It ||
								!t.getCTM ||
								(t.parentNode && !t.ownerSVGElement) ||
								!(function(t) {
									try {
										return t.getBBox();
									} catch (e) {
										return St.call(t, !0);
									}
								})(t)
							);
						},
						jt = [1, 0, 0, 1, 0, 0],
						Bt = function(t, e) {
							var i,
								s,
								n,
								o,
								r,
								a,
								l = t._gsTransform || new Lt(),
								c = t.style;
							if (
								(Rt ?
									(s = at(t, Et, null, !0)) :
									t.currentStyle &&
									(s =
										(s = t.currentStyle.filter.match(W)) && 4 === s.length ? [
											s[0].substr(4),
											Number(s[2].substr(4)),
											Number(s[1].substr(4)),
											s[3].substr(4),
											l.x || 0,
											l.y || 0,
										].join(",") :
										""),
									(i = !s || "none" === s || "matrix(1, 0, 0, 1, 0, 0)" === s),
									!Rt ||
									(!(a = !rt(t) || "none" === rt(t).display) && t.parentNode) ||
									(a && ((o = c.display), (c.display = "block")),
										t.parentNode || ((r = 1), qt.appendChild(t)),
										(i = !(s = at(t, Et, null, !0)) ||
											"none" === s ||
											"matrix(1, 0, 0, 1, 0, 0)" === s),
										o ? (c.display = o) : a && Vt(c, "display"),
										r && qt.removeChild(t)),
									(l.svg || (t.getCTM && Nt(t))) &&
									(i &&
										-1 !== (c[Rt] + "").indexOf("matrix") &&
										((s = c[Rt]), (i = 0)),
										(n = t.getAttribute("transform")),
										i &&
										n &&
										((s =
												"matrix(" +
												(n = t.transform.baseVal.consolidate().matrix).a +
												"," +
												n.b +
												"," +
												n.c +
												"," +
												n.d +
												"," +
												n.e +
												"," +
												n.f +
												")"),
											(i = 0))),
									i)
							)
								return jt;
							for (n = (s || "").match(M) || [], wt = n.length; - 1 < --wt;)
								(o = Number(n[wt])),
								(n[wt] = (r = o - (o |= 0)) ?
									((1e5 * r + (r < 0 ? -0.5 : 0.5)) | 0) / 1e5 + o :
									o);
							return e && 6 < n.length ? [n[0], n[1], n[4], n[5], n[12], n[13]] :
								n;
						},
						Wt = (et.getTransform = function(t, s, n, o) {
							if (t._gsTransform && n && !o) return t._gsTransform;
							var r,
								a,
								l,
								c,
								d,
								h,
								u,
								p,
								f,
								m,
								g,
								v,
								_,
								y,
								b,
								w,
								x,
								T,
								$,
								k,
								S,
								C,
								P = (n && t._gsTransform) || new Lt(),
								A = P.scaleX < 0,
								O =
								(zt &&
									(parseFloat(at(t, Dt, s, !1, "0 0 0").split(" ")[2]) ||
										P.zOrigin)) ||
								0,
								M = parseFloat(i.defaultTransformPerspective) || 0;
							if (
								((P.svg = !(!t.getCTM || !Nt(t))),
									P.svg &&
									(kt(
											t,
											at(t, Dt, s, !1, "50% 50%") + "",
											P,
											t.getAttribute("data-svg-origin")
										),
										(Pt = i.useSVGTransformAttr || Ft)),
									(a = Bt(t)) !== jt)
							)
								for (r in (16 === a.length ?
										((k = a[0]),
											(C = a[1]),
											(p = a[2]),
											(f = a[3]),
											(S = a[4]),
											(m = a[5]),
											(g = a[6]),
											(v = a[7]),
											(_ = a[8]),
											(y = a[9]),
											(b = a[10]),
											(w = a[12]),
											(T = a[13]),
											($ = a[14]),
											(x = a[11]),
											(s = Math.atan2(g, b)),
											P.zOrigin &&
											((w = _ * ($ = -P.zOrigin) - a[12]),
												(T = y * $ - a[13]),
												($ = b * $ + P.zOrigin - a[14])),
											(P.rotationX = s * G),
											s &&
											((l = S * (h = Math.cos(-s)) + _ * (u = Math.sin(-s))),
												(c = m * h + y * u),
												(d = g * h + b * u),
												(_ = S * -u + _ * h),
												(y = m * -u + y * h),
												(b = g * -u + b * h),
												(x = v * -u + x * h),
												(S = l),
												(m = c),
												(g = d)),
											(s = Math.atan2(-p, b)),
											(P.rotationY = s * G),
											s &&
											((c = C * (h = Math.cos(-s)) - y * (u = Math.sin(-s))),
												(d = p * h - b * u),
												(y = C * u + y * h),
												(b = p * u + b * h),
												(x = f * u + x * h),
												(k = l = k * h - _ * u),
												(C = c),
												(p = d)),
											(s = Math.atan2(C, k)),
											(P.rotation = s * G),
											s &&
											((l = k * (h = Math.cos(s)) + C * (u = Math.sin(s))),
												(c = S * h + m * u),
												(d = _ * h + y * u),
												(C = C * h - k * u),
												(m = m * h - S * u),
												(y = y * h - _ * u),
												(k = l),
												(S = c),
												(_ = d)),
											P.rotationX &&
											359.9 < Math.abs(P.rotationX) + Math.abs(P.rotation) &&
											((P.rotationX = P.rotation = 0),
												(P.rotationY = 180 - P.rotationY)),
											(s = Math.atan2(S, m)),
											(P.scaleX =
												((1e5 * Math.sqrt(k * k + C * C + p * p) + 0.5) | 0) / 1e5),
											(P.scaleY =
												((1e5 * Math.sqrt(m * m + g * g) + 0.5) | 0) / 1e5),
											(P.scaleZ =
												((1e5 * Math.sqrt(_ * _ + y * y + b * b) + 0.5) | 0) / 1e5),
											(k /= P.scaleX),
											(S /= P.scaleY),
											(C /= P.scaleX),
											(m /= P.scaleY),
											2e-5 < Math.abs(s) ?
											((P.skewX = s * G),
												(S = 0),
												"simple" !== P.skewType && (P.scaleY *= 1 / Math.cos(s))) :
											(P.skewX = 0),
											(P.perspective = x ? 1 / (x < 0 ? -x : x) : 0),
											(P.x = w),
											(P.y = T),
											(P.z = $),
											P.svg &&
											((P.x -= P.xOrigin - (P.xOrigin * k - P.yOrigin * S)),
												(P.y -= P.yOrigin - (P.yOrigin * C - P.xOrigin * m)))) :
										(zt &&
											!o &&
											a.length &&
											P.x === a[4] &&
											P.y === a[5] &&
											(P.rotationX || P.rotationY)) ||
										(($ = (T = 6 <= a.length) ? a[0] : 1),
											(k = a[1] || 0),
											(S = a[2] || 0),
											(C = T ? a[3] : 1),
											(P.x = a[4] || 0),
											(P.y = a[5] || 0),
											(m = Math.sqrt($ * $ + k * k)),
											(o = Math.sqrt(C * C + S * S)),
											(T = $ || k ? Math.atan2(k, $) * G : P.rotation || 0),
											(a = S || C ? Math.atan2(S, C) * G + T : P.skewX || 0),
											(P.scaleX = m),
											(P.scaleY = o),
											(P.rotation = T),
											(P.skewX = a),
											zt &&
											((P.rotationX = P.rotationY = P.z = 0),
												(P.perspective = M),
												(P.scaleZ = 1)),
											P.svg &&
											((P.x -= P.xOrigin - (P.xOrigin * $ + P.yOrigin * S)),
												(P.y -= P.yOrigin - (P.xOrigin * k + P.yOrigin * C)))),
										90 < Math.abs(P.skewX) &&
										Math.abs(P.skewX) < 270 &&
										(A ?
											((P.scaleX *= -1),
												(P.skewX += P.rotation <= 0 ? 180 : -180),
												(P.rotation += P.rotation <= 0 ? 180 : -180)) :
											((P.scaleY *= -1), (P.skewX += P.skewX <= 0 ? 180 : -180))),
										(P.zOrigin = O),
										P))
									P[r] < 2e-5 && -2e-5 < P[r] && (P[r] = 0);
							return (
								n &&
								(t._gsTransform = P).svg &&
								(Pt && t.style[Rt] ?
									e.delayedCall(0.001, function() {
										Vt(t.style, Rt);
									}) :
									!Pt &&
									t.getAttribute("transform") &&
									e.delayedCall(0.001, function() {
										t.removeAttribute("transform");
									})),
								P
							);
						}),
						Xt =
						(et.set3DTransformRatio =
							et.setTransformRatio =
							function(t) {
								var e,
									i,
									s,
									n,
									o,
									r,
									a,
									l,
									c,
									d,
									h,
									u,
									p,
									f,
									m,
									g,
									v = this.data,
									_ = this.t.style,
									y = v.rotation,
									b = v.rotationX,
									w = v.rotationY,
									x = v.scaleX,
									T = v.scaleY,
									$ = v.scaleZ,
									k = v.x,
									C = v.y,
									P = v.z,
									A = v.svg,
									O = v.perspective,
									M = v.force3D,
									R = v.skewY,
									E = v.skewX;
								if (
									(R && ((E += R), (y += R)),
										!(
											(((1 !== t && 0 !== t) ||
													"auto" !== M ||
													(this.tween._totalTime !== this.tween._totalDuration &&
														this.tween._totalTime)) &&
												M) ||
											P ||
											O ||
											w ||
											b ||
											1 !== $
										) ||
										(Pt && A) ||
										!zt)
								)
									y || E || A ?
									((y *= V),
										(m = E * V),
										(g = 1e5),
										(i = Math.cos(y) * x),
										(n = Math.sin(y) * x),
										(s = Math.sin(y - m) * -T),
										(o = Math.cos(y - m) * T),
										m &&
										"simple" === v.skewType &&
										((e = Math.tan(m - R * V)),
											(s *= e = Math.sqrt(1 + e * e)),
											(o *= e),
											R &&
											((e = Math.tan(R * V)),
												(i *= e = Math.sqrt(1 + e * e)),
												(n *= e))),
										A &&
										((k +=
												v.xOrigin -
												(v.xOrigin * i + v.yOrigin * s) +
												v.xOffset),
											(C +=
												v.yOrigin -
												(v.xOrigin * n + v.yOrigin * o) +
												v.yOffset),
											Pt &&
											(v.xPercent || v.yPercent) &&
											((h = this.t.getBBox()),
												(k += 0.01 * v.xPercent * h.width),
												(C += 0.01 * v.yPercent * h.height)),
											k < (h = 1e-6) && -h < k && (k = 0),
											C < h && -h < C && (C = 0)),
										(f =
											((i * g) | 0) / g +
											"," +
											((n * g) | 0) / g +
											"," +
											((s * g) | 0) / g +
											"," +
											((o * g) | 0) / g +
											"," +
											k +
											"," +
											C +
											")"),
										A && Pt ?
										this.t.setAttribute("transform", "matrix(" + f) :
										(_[Rt] =
											(v.xPercent || v.yPercent ?
												"translate(" +
												v.xPercent +
												"%," +
												v.yPercent +
												"%) matrix(" :
												"matrix(") + f)) :
									(_[Rt] =
										(v.xPercent || v.yPercent ?
											"translate(" +
											v.xPercent +
											"%," +
											v.yPercent +
											"%) matrix(" :
											"matrix(") +
										x +
										",0,0," +
										T +
										"," +
										k +
										"," +
										C +
										")");
								else {
									if (
										(S &&
											(x < (h = 1e-4) && -h < x && (x = $ = 2e-5),
												T < h && -h < T && (T = $ = 2e-5),
												!O || v.z || v.rotationX || v.rotationY || (O = 0)),
											y || E)
									)
										(y *= V),
										(u = i = Math.cos(y)),
										(p = n = Math.sin(y)),
										E &&
										((y -= E * V),
											(u = Math.cos(y)),
											(p = Math.sin(y)),
											"simple" === v.skewType &&
											((e = Math.tan((E - R) * V)),
												(u *= e = Math.sqrt(1 + e * e)),
												(p *= e),
												v.skewY &&
												((e = Math.tan(R * V)),
													(i *= e = Math.sqrt(1 + e * e)),
													(n *= e)))),
										(s = -p),
										(o = u);
									else {
										if (!(w || b || 1 !== $ || O || A))
											return void(_[Rt] =
												(v.xPercent || v.yPercent ?
													"translate(" +
													v.xPercent +
													"%," +
													v.yPercent +
													"%) translate3d(" :
													"translate3d(") +
												k +
												"px," +
												C +
												"px," +
												P +
												"px)" +
												(1 !== x || 1 !== T ?
													" scale(" + x + "," + T + ")" :
													""));
										(i = o = 1), (s = n = 0);
									}
									(l = 1),
									(M = t = r = a = c = d = 0),
									(m = O ? -1 / O : 0),
									(g = v.zOrigin),
									(h = 1e-6),
									(E = ","),
									(R = "0"),
									(y = w * V) &&
									((u = Math.cos(y)),
										(c = m * (r = -(p = Math.sin(y)))),
										(M = i * p),
										(t = n * p),
										(m *= l = u),
										(i *= u),
										(n *= u)),
									(y = b * V) &&
									((e = s * (u = Math.cos(y)) + M * (p = Math.sin(y))),
										(y = o * u + t * p),
										(a = l * p),
										(d = m * p),
										(M = s * -p + M * u),
										(t = o * -p + t * u),
										(l *= u),
										(m *= u),
										(s = e),
										(o = y)),
									1 !== $ && ((M *= $), (t *= $), (l *= $), (m *= $)),
										1 !== T && ((s *= T), (o *= T), (a *= T), (d *= T)),
										1 !== x && ((i *= x), (n *= x), (r *= x), (c *= x)),
										(g || A) &&
										(g && ((k += M * -g), (C += t * -g), (P += l * -g + g)),
											A &&
											((k +=
													v.xOrigin -
													(v.xOrigin * i + v.yOrigin * s) +
													v.xOffset),
												(C +=
													v.yOrigin -
													(v.xOrigin * n + v.yOrigin * o) +
													v.yOffset)),
											k < h && -h < k && (k = R),
											C < h && -h < C && (C = R),
											P < h && -h < P && (P = 0)),
										(f =
											v.xPercent || v.yPercent ?
											"translate(" +
											v.xPercent +
											"%," +
											v.yPercent +
											"%) matrix3d(" :
											"matrix3d("),
										(f +=
											(i < h && -h < i ? R : i) +
											E +
											(n < h && -h < n ? R : n) +
											E +
											(r < h && -h < r ? R : r)),
										(f +=
											E +
											(c < h && -h < c ? R : c) +
											E +
											(s < h && -h < s ? R : s) +
											E +
											(o < h && -h < o ? R : o)),
										b || w || 1 !== $ ?
										((f +=
												E +
												(a < h && -h < a ? R : a) +
												E +
												(d < h && -h < d ? R : d) +
												E +
												(M < h && -h < M ? R : M)),
											(f +=
												E +
												(t < h && -h < t ? R : t) +
												E +
												(l < h && -h < l ? R : l) +
												E +
												(m < h && -h < m ? R : m) +
												E)) :
										(f += ",0,0,0,0,1,0,"),
										(f += k + E + C + E + P + E + (O ? 1 + -P / O : 1) + ")"),
										(_[Rt] = f);
								}
							});

					function Yt(t) {
						var e,
							i = this.t,
							s = i.filter || at(this.data, "filter") || "";
						100 == (t = (this.s + this.c * t) | 0) &&
							(e = -1 === s.indexOf("atrix(") &&
								-1 === s.indexOf("radient(") &&
								-1 === s.indexOf("oader(") ?
								(i.removeAttribute("filter"), !at(this.data, "filter")) :
								((i.filter = s.replace(H, "")), !0)),
							e ||
							(this.xn1 && (i.filter = s = s || "alpha(opacity=" + t + ")"),
								-1 === s.indexOf("pacity") ?
								(0 == t && this.xn1) ||
								(i.filter = s + " alpha(opacity=" + t + ")") :
								(i.filter = s.replace(L, "opacity=" + t)));
					}

					function Ut(t) {
						if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
							this.t.setAttribute("class", 0 === t ? this.b : this.e);
							for (var e = this.data, i = this.t.style; e;)
								e.v ? (i[e.p] = e.v) : Vt(i, e.p), (e = e._next);
							1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
						} else
							this.t.getAttribute("class") !== this.e &&
							this.t.setAttribute("class", this.e);
					}
					((c = Lt.prototype).x =
						c.y =
						c.z =
						c.skewX =
						c.skewY =
						c.rotation =
						c.rotationX =
						c.rotationY =
						c.zOrigin =
						c.xPercent =
						c.yPercent =
						c.xOffset =
						c.yOffset =
						0),
					(c.scaleX = c.scaleY = c.scaleZ = 1),
					Tt(
							"transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
								parser: function(t, e, s, n, r, a, l) {
									if (n._lastParsedTransform === l) return r;
									var c,
										d =
										(n._lastParsedTransform = l).scale &&
										"function" == typeof l.scale ?
										l.scale :
										0;
									"function" == typeof l[s] && ((c = l[s]), (l[s] = e)),
										d && (l.scale = d(O, t));
									var h,
										u,
										p,
										f,
										m,
										g,
										_,
										w,
										x = t._gsTransform,
										T = t.style,
										$ = Mt.length,
										k = l,
										S = {},
										C = ((e = "transformOrigin"), Wt(t, o, !0, k.parseTransform)),
										P =
										k.transform &&
										("function" == typeof k.transform ?
											k.transform(O, A) :
											k.transform);
									if (
										((C.skewType = k.skewType || C.skewType || i.defaultSkewType),
											(n._transform = C),
											P && "string" == typeof P && Rt)
									)
										((u = J.style)[Rt] = P),
										(u.display = "block"),
										(u.position = "absolute"),
										K.body.appendChild(J),
										(h = Wt(J, null, !1)),
										"simple" === C.skewType &&
										(h.scaleY *= Math.cos(h.skewX * V)),
										C.svg &&
										((m = C.xOrigin),
											(g = C.yOrigin),
											(h.x -= C.xOffset),
											(h.y -= C.yOffset),
											(k.transformOrigin || k.svgOrigin) &&
											((P = {}),
												kt(
													t,
													v(k.transformOrigin),
													P,
													k.svgOrigin,
													k.smoothOrigin,
													!0
												),
												(m = P.xOrigin),
												(g = P.yOrigin),
												(h.x -= P.xOffset - C.xOffset),
												(h.y -= P.yOffset - C.yOffset)),
											(m || g) &&
											((_ = Bt(J, !0)),
												(h.x -= m - (m * _[0] + g * _[2])),
												(h.y -= g - (m * _[1] + g * _[3])))),
										K.body.removeChild(J),
										h.perspective || (h.perspective = C.perspective),
										null != k.xPercent &&
										(h.xPercent = y(k.xPercent, C.xPercent)),
										null != k.yPercent &&
										(h.yPercent = y(k.yPercent, C.yPercent));
									else if (
										"object" == (void 0 === k ? "undefined" : _typeof(k))
									) {
										if (
											((h = {
													scaleX: y(
														null != k.scaleX ? k.scaleX : k.scale,
														C.scaleX
													),
													scaleY: y(
														null != k.scaleY ? k.scaleY : k.scale,
														C.scaleY
													),
													scaleZ: y(k.scaleZ, C.scaleZ),
													x: y(k.x, C.x),
													y: y(k.y, C.y),
													z: y(k.z, C.z),
													xPercent: y(k.xPercent, C.xPercent),
													yPercent: y(k.yPercent, C.yPercent),
													perspective: y(k.transformPerspective, C.perspective),
												}),
												null != (f = k.directionalRotation))
										)
											if ("object" == (void 0 === f ? "undefined" : _typeof(f)))
												for (u in f) k[u] = f[u];
											else k.rotation = f;
										"string" == typeof k.x &&
											-1 !== k.x.indexOf("%") &&
											((h.x = 0), (h.xPercent = y(k.x, C.xPercent))),
											"string" == typeof k.y &&
											-1 !== k.y.indexOf("%") &&
											((h.y = 0), (h.yPercent = y(k.y, C.yPercent))),
											(h.rotation = b(
												"rotation" in k ?
												k.rotation :
												"shortRotation" in k ?
												k.shortRotation + "_short" :
												"rotationZ" in k ?
												k.rotationZ :
												C.rotation,
												C.rotation,
												"rotation",
												S
											)),
											zt &&
											((h.rotationX = b(
													"rotationX" in k ?
													k.rotationX :
													"shortRotationX" in k ?
													k.shortRotationX + "_short" :
													C.rotationX || 0,
													C.rotationX,
													"rotationX",
													S
												)),
												(h.rotationY = b(
													"rotationY" in k ?
													k.rotationY :
													"shortRotationY" in k ?
													k.shortRotationY + "_short" :
													C.rotationY || 0,
													C.rotationY,
													"rotationY",
													S
												))),
											(h.skewX = b(k.skewX, C.skewX)),
											(h.skewY = b(k.skewY, C.skewY));
									}
									for (
										zt &&
										null != k.force3D &&
										((C.force3D = k.force3D), (p = !0)),
										(_ =
											C.force3D ||
											C.z ||
											C.rotationX ||
											C.rotationY ||
											h.z ||
											h.rotationX ||
											h.rotationY ||
											h.perspective) ||
										null == k.scale ||
										(h.scaleZ = 1); -
										1 < --$;

									)
										(1e-6 < (P = h[(w = Mt[$])] - C[w]) ||
											P < -1e-6 ||
											null != k[w] ||
											null != Q[w]) &&
										((p = !0),
											(r = new yt(C, w, C[w], P, r)),
											w in S && (r.e = S[w]),
											(r.xs0 = 0),
											(r.plugin = a),
											n._overwriteProps.push(r.n));
									return (
										(P = k.transformOrigin),
										C.svg &&
										(P || k.svgOrigin) &&
										((m = C.xOffset),
											(g = C.yOffset),
											kt(t, v(P), h, k.svgOrigin, k.smoothOrigin),
											(r = vt(
												C,
												"xOrigin",
												(x ? C : h).xOrigin,
												h.xOrigin,
												r,
												e
											)),
											(r = vt(
												C,
												"yOrigin",
												(x ? C : h).yOrigin,
												h.yOrigin,
												r,
												e
											)),
											(m === C.xOffset && g === C.yOffset) ||
											((r = vt(
													C,
													"xOffset",
													x ? m : C.xOffset,
													C.xOffset,
													r,
													e
												)),
												(r = vt(
													C,
													"yOffset",
													x ? g : C.yOffset,
													C.yOffset,
													r,
													e
												))),
											(P = "0px 0px")),
										(P || (zt && _ && C.zOrigin)) &&
										(Rt ?
											((p = !0),
												(w = Dt),
												(P = (P || at(t, w, o, !1, "50% 50%")) + ""),
												((r = new yt(T, w, 0, 0, r, -1, e)).b = T[w]),
												(r.plugin = a),
												zt ?
												((u = C.zOrigin),
													(P = P.split(" ")),
													(C.zOrigin =
														(2 < P.length && (0 === u || "0px" !== P[2]) ?
															parseFloat(P[2]) :
															u) || 0),
													(r.xs0 = r.e =
														P[0] + " " + (P[1] || "50%") + " 0px"),
													((r = new yt(C, "zOrigin", 0, 0, r, -1, r.n)).b =
														u),
													(r.xs0 = r.e = C.zOrigin)) :
												(r.xs0 = r.e = P)) :
											v(P + "", C)),
										p &&
										(n._transformType =
											(C.svg && Pt) || (!_ && 3 !== this._transformType) ?
											2 :
											3),
										c && (l[s] = c),
										d && (l.scale = d),
										r
									);
								},
								prefix: !0,
							}
						),
						Tt("boxShadow", {
							defaultValue: "0px 0px 0px 0px #999",
							prefix: !0,
							color: !0,
							multi: !0,
							keyword: "inset",
						}),
						Tt("borderRadius", {
							defaultValue: "0px",
							parser: function(t, e, i, s, r) {
								e = this.format(e);
								for (
									var a,
										l,
										c,
										d,
										h,
										u,
										p,
										m,
										g,
										v,
										_ = [
											"borderTopLeftRadius",
											"borderTopRightRadius",
											"borderBottomRightRadius",
											"borderBottomLeftRadius",
										],
										y = t.style,
										b = parseFloat(t.offsetWidth),
										w = parseFloat(t.offsetHeight),
										x = e.split(" "),
										T = 0; T < _.length; T++
								)
									this.p.indexOf("border") && (_[T] = f(_[T])),
									-1 !== (c = l = at(t, _[T], o, !1, "0px")).indexOf(" ") &&
									((c = (l = c.split(" "))[0]), (l = l[1])),
									(d = a = x[T]),
									(g = parseFloat(c)),
									(v = c.substr((g + "").length)),
									"" ===
									(u = (p = "=" === d.charAt(1)) ?
										((h = parseInt(d.charAt(0) + "1", 10)),
											(d = d.substr(2)),
											(h *= parseFloat(d)),
											d.substr((h + "").length - (h < 0 ? 1 : 0)) || "") :
										((h = parseFloat(d)), d.substr((h + "").length))) &&
									(u = n[i] || v),
									u !== v &&
									((m = lt(t, "borderLeft", g, v)),
										(g = lt(t, "borderTop", g, v)),
										(l =
											"%" === u ?
											((c = (m / b) * 100 + "%"), (g / w) * 100 + "%") :
											"em" === u ?
											((c = m / (v = lt(t, "borderLeft", 1, "em")) + "em"),
												g / v + "em") :
											((c = m + "px"), g + "px")),
										p &&
										((d = parseFloat(c) + h + u),
											(a = parseFloat(l) + h + u))),
									(r = bt(y, _[T], c + " " + l, d + " " + a, !1, "0px", r));
								return r;
							},
							prefix: !0,
							formatter: mt("0px 0px 0px 0px", !1, !0),
						}),
						Tt(
							"borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
								defaultValue: "0px",
								parser: function(t, e, i, s, n) {
									return bt(
										t.style,
										i,
										this.format(at(t, i, o, !1, "0px 0px")),
										this.format(e),
										!1,
										"0px",
										n
									);
								},
								prefix: !0,
								formatter: mt("0px 0px", !1, !0),
							}
						),
						Tt("backgroundPosition", {
							defaultValue: "0 0",
							parser: function(t, e, i, s, n, r) {
								var a,
									l,
									c,
									d,
									h,
									u,
									p = "background-position",
									f = o || rt(t, null),
									m = this.format(
										(f ?
											P ?
											f.getPropertyValue(p + "-x") +
											" " +
											f.getPropertyValue(p + "-y") :
											f.getPropertyValue(p) :
											t.currentStyle.backgroundPositionX +
											" " +
											t.currentStyle.backgroundPositionY) || "0 0"
									);
								e = this.format(e);
								if (
									(-1 !== m.indexOf("%")) != (-1 !== e.indexOf("%")) &&
									e.split(",").length < 2 &&
									(u = at(t, "backgroundImage").replace(j, "")) &&
									"none" !== u
								) {
									for (
										a = m.split(" "),
										l = e.split(" "),
										tt.setAttribute("src", u),
										c = 2; -
										1 < --c;

									)
										(d = -1 !== (m = a[c]).indexOf("%")) !=
										(-1 !== l[c].indexOf("%")) &&
										((h =
												0 === c ?
												t.offsetWidth - tt.width :
												t.offsetHeight - tt.height),
											(a[c] = d ?
												(parseFloat(m) / 100) * h + "px" :
												(parseFloat(m) / h) * 100 + "%"));
									m = a.join(" ");
								}
								return this.parseComplex(t.style, m, e, n, r);
							},
							formatter: v,
						}),
						Tt("backgroundSize", {
							defaultValue: "0 0",
							formatter: function(t) {
								return v(-1 === (t += "").indexOf(" ") ? t + " " + t : t);
							},
						}),
						Tt("perspective", {
							defaultValue: "0px",
							prefix: !0
						}),
						Tt("perspectiveOrigin", {
							defaultValue: "50% 50%",
							prefix: !0
						}),
						Tt("transformStyle", {
							prefix: !0
						}),
						Tt("backfaceVisibility", {
							prefix: !0
						}),
						Tt("userSelect", {
							prefix: !0
						}),
						Tt("margin", {
							parser: gt("marginTop,marginRight,marginBottom,marginLeft"),
						}),
						Tt("padding", {
							parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
						}),
						Tt("clip", {
							defaultValue: "rect(0px,0px,0px,0px)",
							parser: function(t, e, i, s, n, r) {
								var a, l;
								return (
									(e =
										P < 9 ?
										((a = t.currentStyle),
											(l = P < 8 ? " " : ","),
											(a =
												"rect(" +
												a.clipTop +
												l +
												a.clipRight +
												l +
												a.clipBottom +
												l +
												a.clipLeft +
												")"),
											this.format(e).split(",").join(l)) :
										((a = this.format(at(t, this.p, o, !1, this.dflt))),
											this.format(e))),
									this.parseComplex(t.style, a, e, n, r)
								);
							},
						}),
						Tt("textShadow", {
							defaultValue: "0px 0px 0px #999",
							color: !0,
							multi: !0,
						}),
						Tt("autoRound,strictUnits", {
							parser: function(t, e, i, s, n) {
								return n;
							},
						}),
						Tt("border", {
							defaultValue: "0px solid #000",
							parser: function(t, e, i, s, n, r) {
								var a = at(t, "borderTopWidth", o, !1, "0px"),
									l = this.format(e).split(" ");
								return (
									"px" !== (e = l[0].replace(z, "")) &&
									(a = parseFloat(a) / lt(t, "borderTopWidth", 1, e) + e),
									this.parseComplex(
										t.style,
										this.format(
											a +
											" " +
											at(t, "borderTopStyle", o, !1, "solid") +
											" " +
											at(t, "borderTopColor", o, !1, "#000")
										),
										l.join(" "),
										n,
										r
									)
								);
							},
							color: !0,
							formatter: function(t) {
								var e = t.split(" ");
								return (
									e[0] +
									" " +
									(e[1] || "solid") +
									" " +
									(t.match(ft) || ["#000"])[0]
								);
							},
						}),
						Tt("borderWidth", {
							parser: gt(
								"borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
							),
						}),
						Tt("float,cssFloat,styleFloat", {
							parser: function(t, e, i, s, n) {
								var o = t.style;
								return new yt(
									o,
									(t = "cssFloat" in o ? "cssFloat" : "styleFloat"),
									0,
									0,
									n,
									-1,
									i,
									!1,
									0,
									o[t],
									e
								);
							},
						}),
						Tt("opacity,alpha,autoAlpha", {
							defaultValue: "1",
							parser: function(t, e, i, s, n, r) {
								var a = parseFloat(at(t, "opacity", o, !1, "1")),
									l = t.style,
									c = "autoAlpha" === i;
								return (
									"string" == typeof e &&
									"=" === e.charAt(1) &&
									(e =
										("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) +
										a),
									c &&
									1 === a &&
									"hidden" === at(t, "visibility", o) &&
									0 !== e &&
									(a = 0),
									st ?
									(n = new yt(l, "opacity", a, e - a, n)) :
									(((n = new yt(
											l,
											"opacity",
											100 * a,
											100 * (e - a),
											n
										)).xn1 = c ? 1 : 0),
										(l.zoom = 1),
										(n.type = 2),
										(n.b = "alpha(opacity=" + n.s + ")"),
										(n.e = "alpha(opacity=" + (n.s + n.c) + ")"),
										(n.data = t),
										(n.plugin = r),
										(n.setRatio = Yt)),
									c &&
									(((n = new yt(
											l,
											"visibility",
											0,
											0,
											n,
											-1,
											null,
											!1,
											0,
											0 !== a ? "inherit" : "hidden",
											0 === e ? "hidden" : "inherit"
										)).xs0 = "inherit"),
										s._overwriteProps.push(n.n),
										s._overwriteProps.push(i)),
									n
								);
							},
						});
					var Vt = function(t, e) {
						e &&
							(t.removeProperty ?
								(("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
									(e = "-" + e),
									t.removeProperty(e.replace(F, "-$1").toLowerCase())) :
								t.removeAttribute(e));
					};

					function Gt(t) {
						if (
							(1 === t || 0 === t) &&
							this.data._totalTime === this.data._totalDuration &&
							"isFromStart" !== this.data.data
						) {
							var e,
								i,
								s,
								n,
								o = this.t.style,
								r = l.transform.parse;
							if ("all" === this.e) n = !(o.cssText = "");
							else
								for (
									s = (e = this.e.split(" ").join("").split(",")).length; -
									1 < --s;

								)
									(i = e[s]),
									l[i] &&
									(l[i].parse === r ?
										(n = !0) :
										(i = "transformOrigin" === i ? Dt : l[i].p)),
									Vt(o, i);
							n &&
								(Vt(o, Rt),
									(t = this.t._gsTransform) &&
									(t.svg &&
										(this.t.removeAttribute("data-svg-origin"),
											this.t.removeAttribute("transform")),
										delete this.t._gsTransform));
						}
					}
					for (
						Tt("className", {
							parser: function(t, e, i, n, r, a, l) {
								var c,
									d,
									h,
									u = t.getAttribute("class") || "",
									p = t.style.cssText;
								if (
									(((r = n._classNamePT = new yt(t, i, 0, 0, r, 2)).setRatio =
											Ut),
										(r.pr = -11),
										(s = !0),
										(r.b = u),
										(c = m(t, o)),
										(i = t._gsClassPT))
								) {
									for (d = {}, h = i.data; h;)(d[h.p] = 1), (h = h._next);
									i.setRatio(1);
								}
								return (
									((t._gsClassPT = r).e =
										"=" !== e.charAt(1) ?
										e :
										u.replace(
											new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"),
											""
										) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
									t.setAttribute("class", r.e),
									(l = g(t, c, m(t), l, d)),
									t.setAttribute("class", u),
									(r.data = l.firstMPT),
									(t.style.cssText = p),
									(r.xfirst = n.parse(t, l.difs, r, a))
								);
							},
						}),
						Tt("clearProps", {
							parser: function(t, e, i, n, o) {
								return (
									((o = new yt(t, i, 0, 0, o, 2)).setRatio = Gt),
									(o.e = e),
									(o.pr = -10),
									(o.data = n._tween),
									(s = !0),
									o
								);
							},
						}),
						c = "bezier,throwProps,physicsProps,physics2D".split(","),
						wt = c.length; wt--;

					)
						$t(c[wt]);

					function Qt() {
						(this.t[this.p] = this.e),
						this.data._linkCSSP(this, this._next, null, !0);
					}

					function Zt(t, e, i) {
						var s, n, o, r;
						if (t.slice)
							for (n = t.length; - 1 < --n;) Zt(t[n], e, i);
						else
							for (n = (s = t.childNodes).length; - 1 < --n;)
								(r = (o = s[n]).type),
								o.style && (e.push(m(o)), i && i.push(o)),
								(1 !== r && 9 !== r && 11 !== r) ||
								!o.childNodes.length ||
								Zt(o, e, i);
					}
					return (
						((c = i.prototype)._firstPT =
							c._lastParsedTransform =
							c._transform =
							null),
						(c._onInitTween = function(t, e, a, c) {
							if (!t.nodeType) return !1;
							(this._target = A = t),
							(this._tween = a),
							(this._vars = e),
							(O = c),
							(T = e.autoRound),
							(s = !1),
							(n = e.suffixMap || i.suffixMap),
							(o = rt(t, "")),
							(r = this._overwriteProps);
							var d, h, u, p, f, v;
							c = t.style;
							if (
								($ &&
									"" === c.zIndex &&
									(("auto" !== (v = at(t, "zIndex", o)) && "" !== v) ||
										this._addLazySet(c, "zIndex", 0)),
									"string" == typeof e &&
									((u = c.cssText),
										(v = m(t, o)),
										(c.cssText = u + ";" + e),
										(v = g(t, v, m(t)).difs),
										!st && I.test(e) && (v.opacity = parseFloat(RegExp.$1)),
										(e = v),
										(c.cssText = u)),
									e.className ?
									(this._firstPT = d =
										l.className.parse(
											t,
											e.className,
											"className",
											this,
											null,
											null,
											e
										)) :
									(this._firstPT = d = this.parse(t, e, null)),
									this._transformType)
							) {
								for (
									v = 3 === this._transformType,
									Rt ?
									k &&
									(($ = !0),
										"" === c.zIndex &&
										(("auto" !== (e = at(t, "zIndex", o)) && "" !== e) ||
											this._addLazySet(c, "zIndex", 0)),
										C &&
										this._addLazySet(
											c,
											"WebkitBackfaceVisibility",
											this._vars.WebkitBackfaceVisibility ||
											(v ? "visible" : "hidden")
										)) :
									(c.zoom = 1),
									h = d; h && h._next;

								)
									h = h._next;
								(c = new yt(t, "transform", 0, 0, null, 2)),
								this._linkCSSP(c, null, h),
									(c.setRatio = Rt ? Xt : Ct),
									(c.data = this._transform || Wt(t, o, !0)),
									(c.tween = a),
									(c.pr = -1),
									r.pop();
							}
							if (s) {
								for (; d;) {
									for (f = d._next, h = u; h && h.pr > d.pr;) h = h._next;
									(d._prev = h ? h._prev : p) ? (d._prev._next = d) : (u = d),
									(d._next = h) ? (h._prev = d) : (p = d),
									(d = f);
								}
								this._firstPT = u;
							}
							return !0;
						}),
						(c.parse = function(t, e, i, s) {
							var r,
								a,
								c,
								d,
								h,
								u,
								f,
								m,
								g = t.style;
							for (r in e) {
								if (
									("function" == typeof(h = e[r]) && (h = h(O, A)), (m = l[r]))
								)
									i = m.parse(t, h, r, this, i, s, e);
								else {
									if ("--" === r.substr(0, 2)) {
										this._tween._propLookup[r] = this._addTween.call(
											this._tween,
											t.style,
											"setProperty",
											rt(t).getPropertyValue(r) + "",
											h + "",
											r,
											!1,
											r
										);
										continue;
									}
									(d = at(t, r, o) + ""),
									(f = "string" == typeof h),
									"color" === r ||
										"fill" === r ||
										"stroke" === r ||
										-1 !== r.indexOf("Color") ||
										(f && q.test(h)) ?
										(f ||
											(h =
												(3 < (h = pt(h)).length ? "rgba(" : "rgb(") +
												h.join(",") +
												")"),
											(i = bt(g, r, d, h, !0, "transparent", i, 0, s))) :
										f && U.test(h) ?
										(i = bt(g, r, d, h, !0, null, i, 0, s)) :
										((u =
												(a = parseFloat(d)) || 0 === a ?
												d.substr((a + "").length) :
												""),
											("" !== d && "auto" !== d) ||
											(u =
												"width" === r || "height" === r ?
												((a = (function(t, e, i) {
														if ("svg" === (t.nodeName + "").toLowerCase())
															return (i || rt(t))[e] || 0;
														if (t.getCTM && Nt(t))
															return t.getBBox()[e] || 0;
														var s = parseFloat(
																"width" === e ?
																t.offsetWidth :
																t.offsetHeight
															),
															n = dt[e],
															o = n.length;
														for (i = i || rt(t, null); - 1 < --o;)
															(s -=
																parseFloat(
																	at(t, "padding" + n[o], i, !0)
																) || 0),
															(s -=
																parseFloat(
																	at(t, "border" + n[o] + "Width", i, !0)
																) || 0);
														return s;
													})(t, r, o)),
													"px") :
												"left" === r || "top" === r ?
												((a = ct(t, r, o)), "px") :
												((a = "opacity" !== r ? 0 : 1), "")),
											"" ===
											(f = (m = f && "=" === h.charAt(1)) ?
												((c = parseInt(h.charAt(0) + "1", 10)),
													(h = h.substr(2)),
													(c *= parseFloat(h)),
													h.replace(z, "")) :
												((c = parseFloat(h)), f ? h.replace(z, "") : "")) &&
											(f = r in n ? n[r] : u),
											(h = c || 0 === c ? (m ? c + a : c) + f : e[r]),
											u === f ||
											("" === f && "lineHeight" !== r) ||
											(!c && 0 !== c) ||
											!a ||
											((a = lt(t, r, a, u)),
												"%" === f ?
												((a /= lt(t, r, 100, "%") / 100),
													!0 !== e.strictUnits && (d = a + "%")) :
												"em" === f ||
												"rem" === f ||
												"vw" === f ||
												"vh" === f ?
												(a /= lt(t, r, 1, f)) :
												"px" !== f && ((c = lt(t, r, c, f)), (f = "px")),
												m && (c || 0 === c) && (h = c + a + f)),
											m && (c += a),
											(!a && 0 !== a) || (!c && 0 !== c) ?
											void 0 !== g[r] &&
											(h || (h + "" != "NaN" && null != h)) ?
											((i = new yt(
													g,
													r,
													c || a || 0,
													0,
													i,
													-1,
													r,
													!1,
													0,
													d,
													h
												)).xs0 =
												"none" !== h ||
												("display" !== r && -1 === r.indexOf("Style")) ?
												h :
												d) :
											p("invalid " + r + " tween value: " + e[r]) :
											((i = new yt(
												g,
												r,
												a,
												c - a,
												i,
												0,
												r,
												!1 !== T && ("px" === f || "zIndex" === r),
												0,
												d,
												h
											)).xs0 = f));
								}
								s && i && !i.plugin && (i.plugin = s);
							}
							return i;
						}),
						(c.setRatio = function(t) {
							var e,
								i,
								s,
								n = this._firstPT;
							if (
								1 !== t ||
								(this._tween._time !== this._tween._duration &&
									0 !== this._tween._time)
							)
								if (
									t ||
									(this._tween._time !== this._tween._duration &&
										0 !== this._tween._time) ||
									-1e-6 === this._tween._rawPrevTime
								)
									for (; n;) {
										if (
											((e = n.c * t + n.s),
												n.r ?
												(e = Math.round(e)) :
												e < 1e-6 && -1e-6 < e && (e = 0),
												n.type)
										)
											if (1 === n.type)
												if (2 === (s = n.l))
													n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
												else if (3 === s)
											n.t[n.p] =
											n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
										else if (4 === s)
											n.t[n.p] =
											n.xs0 +
											e +
											n.xs1 +
											n.xn1 +
											n.xs2 +
											n.xn2 +
											n.xs3 +
											n.xn3 +
											n.xs4;
										else if (5 === s)
											n.t[n.p] =
											n.xs0 +
											e +
											n.xs1 +
											n.xn1 +
											n.xs2 +
											n.xn2 +
											n.xs3 +
											n.xn3 +
											n.xs4 +
											n.xn4 +
											n.xs5;
										else {
											for (i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++)
												i += n["xn" + s] + n["xs" + (s + 1)];
											n.t[n.p] = i;
										} else
											-
											1 === n.type ?
											(n.t[n.p] = n.xs0) :
											n.setRatio && n.setRatio(t);
										else n.t[n.p] = e + n.xs0;
										n = n._next;
									}
							else
								for (; n;)
									2 !== n.type ? (n.t[n.p] = n.b) : n.setRatio(t),
									(n = n._next);
							else
								for (; n;) {
									if (2 !== n.type)
										if (n.r && -1 !== n.type)
											if (((e = Math.round(n.s + n.c)), n.type)) {
												if (1 === n.type) {
													for (
														s = n.l, i = n.xs0 + e + n.xs1, s = 1; s < n.l; s++
													)
														i += n["xn" + s] + n["xs" + (s + 1)];
													n.t[n.p] = i;
												}
											} else n.t[n.p] = e + n.xs0;
									else n.t[n.p] = n.e;
									else n.setRatio(t);
									n = n._next;
								}
						}),
						(c._enableTransforms = function(t) {
							(this._transform = this._transform || Wt(this._target, o, !0)),
							(this._transformType =
								(this._transform.svg && Pt) || (!t && 3 !== this._transformType) ?
								2 :
								3);
						}),
						(c._addLazySet = function(t, e, i) {
							((e = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2)).e = i),
							(e.setRatio = Qt),
							(e.data = this);
						}),
						(c._linkCSSP = function(t, e, i, s) {
							return (
								t &&
								(e && (e._prev = t),
									t._next && (t._next._prev = t._prev),
									t._prev ?
									(t._prev._next = t._next) :
									this._firstPT === t &&
									((this._firstPT = t._next), (s = !0)),
									i ?
									(i._next = t) :
									s || null !== this._firstPT || (this._firstPT = t),
									(t._next = e),
									(t._prev = i)),
								t
							);
						}),
						(c._mod = function(t) {
							for (var e = this._firstPT; e;)
								"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
								(e = e._next);
						}),
						(c._kill = function(e) {
							var i,
								s,
								n,
								o = e;
							if (e.autoAlpha || e.alpha) {
								for (s in ((o = {}), e)) o[s] = e[s];
								(o.opacity = 1), o.autoAlpha && (o.visibility = 1);
							}
							for (
								e.className &&
								(i = this._classNamePT) &&
								((n = i.xfirst) && n._prev ?
									this._linkCSSP(n._prev, i._next, n._prev._prev) :
									n === this._firstPT && (this._firstPT = i._next),
									i._next && this._linkCSSP(i._next, i._next._next, n._prev),
									(this._classNamePT = null)),
								i = this._firstPT; i;

							)
								i.plugin &&
								i.plugin !== s &&
								i.plugin._kill &&
								(i.plugin._kill(e), (s = i.plugin)),
								(i = i._next);
							return t.prototype._kill.call(this, o);
						}),
						(i.cascadeTo = function(t, i, s) {
							var n,
								o,
								r,
								a,
								l = e.to(t, i, s),
								c = [l],
								d = [],
								h = [],
								u = [],
								p = e._internals.reservedProps;
							for (
								Zt((t = l._targets || l.target), d, u),
								l.render(i, !0, !0),
								Zt(t, h),
								l.render(0, !0, !0),
								l._enabled(!0),
								n = u.length; -
								1 < --n;

							)
								if ((o = g(u[n], d[n], h[n])).firstMPT) {
									for (r in ((o = o.difs), s)) p[r] && (o[r] = s[r]);
									for (r in ((a = {}), o)) a[r] = d[n][r];
									c.push(e.fromTo(u[n], i, a, o));
								}
							return c;
						}),
						t.activate([i]),
						i
					);
				},
				!0
			),
			((a = (a = _gsScope._gsDefine.plugin({
				propName: "roundProps",
				version: "1.6.0",
				priority: -1,
				API: 2,
				init: function(t, e, i) {
					return (this._tween = i), !0;
				},
			})).prototype)._onInitAllProps = function() {
				for (
					var t,
						e,
						i,
						s = this._tween,
						n = s.vars.roundProps.join ?
						s.vars.roundProps :
						s.vars.roundProps.split(","),
						o = n.length,
						r = {},
						a = s._propLookup.roundProps; -
					1 < --o;

				)
					r[n[o]] = Math.round;
				for (o = n.length; - 1 < --o;)
					for (t = n[o], e = s._firstPT; e;)
						(i = e._next),
						e.pg ?
						e.t._mod(r) :
						e.n === t &&
						(2 === e.f && e.t ?
							(function(t) {
								for (; t;)
									t.f || t.blob || (t.m = Math.round), (t = t._next);
							})(e.t._firstPT) :
							(this._add(e.t, t, e.s, e.c),
								i && (i._prev = e._prev),
								e._prev ?
								(e._prev._next = i) :
								s._firstPT === e && (s._firstPT = i),
								(e._next = e._prev = null),
								(s._propLookup[t] = a))),
						(e = i);
				return !1;
			}),
			(a._add = function(t, e, i, s) {
				this._addTween(t, e, i, i + s, e, Math.round),
					this._overwriteProps.push(e);
			}),
			_gsScope._gsDefine.plugin({
				propName: "attr",
				API: 2,
				version: "0.6.1",
				init: function(t, e, i, s) {
					var n, o;
					if ("function" != typeof t.setAttribute) return !1;
					for (n in e)
						"function" == typeof(o = e[n]) && (o = o(s, t)),
						this._addTween(
							t,
							"setAttribute",
							t.getAttribute(n) + "",
							o + "",
							n,
							!1,
							n
						),
						this._overwriteProps.push(n);
					return !0;
				},
			}),
			(_gsScope._gsDefine.plugin({
				propName: "directionalRotation",
				version: "0.3.1",
				API: 2,
				init: function(t, e, i, s) {
					"object" != (void 0 === e ? "undefined" : _typeof(e)) &&
					(e = {
						rotation: e
					}),
					(this.finals = {});
					var n,
						o,
						r,
						a,
						l,
						c = !0 === e.useRadians ? 2 * Math.PI : 360;
					for (n in e)
						"useRadians" !== n &&
						("function" == typeof(a = e[n]) && (a = a(s, t)),
							(o = (l = (a + "").split("_"))[0]),
							(r = parseFloat(
								"function" != typeof t[n] ?
								t[n] :
								t[
									n.indexOf("set") ||
									"function" != typeof t["get" + n.substr(3)] ?
									n :
									"get" + n.substr(3)
								]()
							)),
							(a =
								(a = this.finals[n] =
									"string" == typeof o && "=" === o.charAt(1) ?
									r + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) :
									Number(o) || 0) - r),
							l.length &&
							(-1 !== (o = l.join("_")).indexOf("short") &&
								(a %= c) != a % (c / 2) &&
								(a = a < 0 ? a + c : a - c),
								-1 !== o.indexOf("_cw") && a < 0 ?
								(a = ((a + 9999999999 * c) % c) - ((a / c) | 0) * c) :
								-1 !== o.indexOf("ccw") &&
								0 < a &&
								(a = ((a - 9999999999 * c) % c) - ((a / c) | 0) * c)),
							(1e-6 < a || a < -1e-6) &&
							(this._addTween(t, n, r, r + a, n),
								this._overwriteProps.push(n)));
					return !0;
				},
				set: function(t) {
					var e;
					if (1 !== t) this._super.setRatio.call(this, t);
					else
						for (e = this._firstPT; e;)
							e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
							(e = e._next);
				},
			})._autoCSS = !0),
			_gsScope._gsDefine(
				"easing.Back",
				["easing.Ease"],
				function(t) {
					function e(e, i) {
						var s = u("easing." + e, function() {}, !0);
						return (
							((e = s.prototype = new t()).constructor = s), (e.getRatio = i), s
						);
					}

					function i(t, e, i, s) {
						return (
							(s = u(
								"easing." + t, {
									easeOut: new e(),
									easeIn: new i(),
									easeInOut: new s()
								},
								!0
							)),
							p(s, t),
							s
						);
					}

					function s(t, e, i) {
						(this.t = t),
						(this.v = e),
						i &&
							((((this.next = i).prev = this).c = i.v - e),
								(this.gap = i.t - t));
					}
					var n,
						o,
						r,
						a,
						l = _gsScope.GreenSockGlobals || _gsScope,
						c = l.com.greensock,
						d = 2 * Math.PI,
						h = Math.PI / 2,
						u = c._class,
						p = t.register || function() {},
						f =
						((c = i(
								"Back",
								(a = function(e, i) {
									var s = u(
										"easing." + e,
										function(t) {
											(this._p1 = t || 0 === t ? t : 1.70158),
											(this._p2 = 1.525 * this._p1);
										},
										!0
									);
									return (
										((e = s.prototype = new t()).constructor = s),
										(e.getRatio = i),
										(e.config = function(t) {
											return new s(t);
										}),
										s
									);
								})("BackOut", function(t) {
									return --t * t * ((this._p1 + 1) * t + this._p1) + 1;
								}),
								a("BackIn", function(t) {
									return t * t * ((this._p1 + 1) * t - this._p1);
								}),
								a("BackInOut", function(t) {
									return (t *= 2) < 1 ?
										0.5 * t * t * ((this._p2 + 1) * t - this._p2) :
										0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
								})
							)),
							u(
								"easing.SlowMo",
								function(t, e, i) {
									(e = e || 0 === e ? e : 0.7),
									null == t ? (t = 0.7) : 1 < t && (t = 1),
										(this._p = 1 !== t ? e : 0),
										(this._p1 = (1 - t) / 2),
										(this._p2 = t),
										(this._p3 = this._p1 + this._p2),
										(this._calcEnd = !0 === i);
								},
								!0
							));
					return (
						((a = f.prototype = new t()).constructor = f),
						(a.getRatio = function(t) {
							var e = t + (0.5 - t) * this._p;
							return t < this._p1 ?
								this._calcEnd ?
								1 - (t = 1 - t / this._p1) * t :
								e - (t = 1 - t / this._p1) * t * t * t * e :
								t > this._p3 ?
								this._calcEnd ?
								1 === t ?
								0 :
								1 - (t = (t - this._p3) / this._p1) * t :
								e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t :
								this._calcEnd ?
								1 :
								e;
						}),
						(f.ease = new f(0.7, 0.7)),
						(a.config = f.config =
							function(t, e, i) {
								return new f(t, e, i);
							}),
						((a = (n = u(
								"easing.SteppedEase",
								function(t, e) {
									(t = t || 1),
									(this._p1 = 1 / t),
									(this._p2 = t + (e ? 0 : 1)),
									(this._p3 = e ? 1 : 0);
								},
								!0
							)).prototype =
							new t()).constructor = n),
						(a.getRatio = function(t) {
							return (
								t < 0 ? (t = 0) : 1 <= t && (t = 0.999999999),
								(((this._p2 * t) | 0) + this._p3) * this._p1
							);
						}),
						(a.config = n.config =
							function(t, e) {
								return new n(t, e);
							}),
						((a = (o = u(
								"easing.ExpoScaleEase",
								function(t, e, i) {
									(this._p1 = Math.log(e / t)),
									(this._p2 = e - t),
									(this._p3 = t),
									(this._ease = i);
								},
								!0
							)).prototype =
							new t()).constructor = o),
						(a.getRatio = function(t) {
							return (
								this._ease && (t = this._ease.getRatio(t)),
								(this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
							);
						}),
						(a.config = o.config =
							function(t, e, i) {
								return new o(t, e, i);
							}),
						((a = (r = u(
								"easing.RoughEase",
								function(e) {
									for (
										var i,
											n,
											o,
											r,
											a,
											l,
											c = (e = e || {}).taper || "none",
											d = [],
											h = 0,
											u = 0 | (e.points || 20),
											p = u,
											f = !1 !== e.randomize,
											m = !0 === e.clamp,
											g = e.template instanceof t ? e.template : null,
											v = "number" == typeof e.strength ? 0.4 * e.strength : 0.4; -
										1 < --p;

									)
										(i = f ? Math.random() : (1 / u) * p),
										(n = g ? g.getRatio(i) : i),
										(o =
											"none" === c ?
											v :
											"out" === c ?
											(r = 1 - i) * r * v :
											"in" === c ?
											i * i * v :
											(r = i < 0.5 ? 2 * i : 2 * (1 - i)) * r * 0.5 * v),
										f ?
										(n += Math.random() * o - 0.5 * o) :
										p % 2 ?
										(n += 0.5 * o) :
										(n -= 0.5 * o),
										m && (1 < n ? (n = 1) : n < 0 && (n = 0)),
										(d[h++] = {
											x: i,
											y: n
										});
									for (
										d.sort(function(t, e) {
											return t.x - e.x;
										}),
										l = new s(1, 1, null),
										p = u; -
										1 < --p;

									)
										l = new s((a = d[p]).x, a.y, l);
									this._prev = new s(0, 0, 0 !== l.t ? l : l.next);
								},
								!0
							)).prototype =
							new t()).constructor = r),
						(a.getRatio = function(t) {
							var e = this._prev;
							if (t > e.t) {
								for (; e.next && t >= e.t;) e = e.next;
								e = e.prev;
							} else
								for (; e.prev && t <= e.t;) e = e.prev;
							return (this._prev = e).v + ((t - e.t) / e.gap) * e.c;
						}),
						(a.config = function(t) {
							return new r(t);
						}),
						(r.ease = new r()),
						i(
							"Bounce",
							e("BounceOut", function(t) {
								return t < 1 / 2.75 ?
									7.5625 * t * t :
									t < 2 / 2.75 ?
									7.5625 * (t -= 1.5 / 2.75) * t + 0.75 :
									t < 2.5 / 2.75 ?
									7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 :
									7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
							}),
							e("BounceIn", function(t) {
								return (t = 1 - t) < 1 / 2.75 ?
									1 - 7.5625 * t * t :
									t < 2 / 2.75 ?
									1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) :
									t < 2.5 / 2.75 ?
									1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) :
									1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
							}),
							e("BounceInOut", function(t) {
								var e = t < 0.5;
								return (
									(t =
										(t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ?
										7.5625 * t * t :
										t < 2 / 2.75 ?
										7.5625 * (t -= 1.5 / 2.75) * t + 0.75 :
										t < 2.5 / 2.75 ?
										7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 :
										7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
									e ? 0.5 * (1 - t) : 0.5 * t + 0.5
								);
							})
						),
						i(
							"Circ",
							e("CircOut", function(t) {
								return Math.sqrt(1 - --t * t);
							}),
							e("CircIn", function(t) {
								return -(Math.sqrt(1 - t * t) - 1);
							}),
							e("CircInOut", function(t) {
								return (t *= 2) < 1 ?
									-0.5 * (Math.sqrt(1 - t * t) - 1) :
									0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
							})
						),
						i(
							"Elastic",
							(a = function(e, i, s) {
								var n = u(
									"easing." + e,
									function(t, e) {
										(this._p1 = 1 <= t ? t : 1),
										(this._p2 = (e || s) / (t < 1 ? t : 1)),
										(this._p3 =
											(this._p2 / d) * (Math.asin(1 / this._p1) || 0)),
										(this._p2 = d / this._p2);
									},
									!0
								);
								return (
									((e = n.prototype = new t()).constructor = n),
									(e.getRatio = i),
									(e.config = function(t, e) {
										return new n(t, e);
									}),
									n
								);
							})(
								"ElasticOut",
								function(t) {
									return (
										this._p1 *
										Math.pow(2, -10 * t) *
										Math.sin((t - this._p3) * this._p2) +
										1
									);
								},
								0.3
							),
							a(
								"ElasticIn",
								function(t) {
									return (
										-this._p1 *
										Math.pow(2, 10 * --t) *
										Math.sin((t - this._p3) * this._p2)
									);
								},
								0.3
							),
							a(
								"ElasticInOut",
								function(t) {
									return (t *= 2) < 1 ?
										this._p1 *
										Math.pow(2, 10 * --t) *
										Math.sin((t - this._p3) * this._p2) *
										-0.5 :
										this._p1 *
										Math.pow(2, -10 * --t) *
										Math.sin((t - this._p3) * this._p2) *
										0.5 +
										1;
								},
								0.45
							)
						),
						i(
							"Expo",
							e("ExpoOut", function(t) {
								return 1 - Math.pow(2, -10 * t);
							}),
							e("ExpoIn", function(t) {
								return Math.pow(2, 10 * (t - 1)) - 0.001;
							}),
							e("ExpoInOut", function(t) {
								return (t *= 2) < 1 ?
									0.5 * Math.pow(2, 10 * (t - 1)) :
									0.5 * (2 - Math.pow(2, -10 * (t - 1)));
							})
						),
						i(
							"Sine",
							e("SineOut", function(t) {
								return Math.sin(t * h);
							}),
							e("SineIn", function(t) {
								return 1 - Math.cos(t * h);
							}),
							e("SineInOut", function(t) {
								return -0.5 * (Math.cos(Math.PI * t) - 1);
							})
						),
						u(
							"easing.EaseLookup", {
								find: function(e) {
									return t.map[e];
								},
							},
							!0
						),
						p(l.SlowMo, "SlowMo", "ease,"),
						p(r, "RoughEase", "ease,"),
						p(n, "SteppedEase", "ease,"),
						c
					);
				},
				!0
			);
	}),
	_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
	(function(t, e) {
		var i,
			s,
			n = {},
			o = t.document,
			r = (t.GreenSockGlobals = t.GreenSockGlobals || t);
		if (!r.TweenLite) {
			var a,
				l = function(t) {
					for (var e = t.split("."), i = r, s = 0; s < e.length; s++)
						i[e[s]] = i = i[e[s]] || {};
					return i;
				},
				c = l("com.greensock"),
				d = 1e-10,
				h = function(t) {
					for (var e = [], i = t.length, s = 0; s !== i; e.push(t[s++]));
					return e;
				},
				u = function() {},
				p =
				((i = Object.prototype.toString),
					(s = i.call([])),
					function(t) {
						return (
							null != t &&
							(t instanceof Array ||
								("object" == (void 0 === t ? "undefined" : _typeof(t)) &&
									!!t.push &&
									i.call(t) === s))
						);
					}),
				f = {},
				m = function i(s, o, a, c) {
					(this.sc = f[s] ? f[s].sc : []),
					((f[s] = this).gsClass = null),
					(this.func = a);
					var d = [];
					(this.check = function(h) {
						for (var u, p, m, g, v = o.length, _ = v; - 1 < --v;)
							(u = f[o[v]] || new i(o[v], [])).gsClass ?
							((d[v] = u.gsClass), _--) :
							h && u.sc.push(this);
						if (0 === _ && a) {
							if (
								((m = (p = ("com.greensock." + s).split(".")).pop()),
									(g = l(p.join("."))[m] = this.gsClass = a.apply(a, d)),
									c)
							)
								if (
									((r[m] = n[m] = g),
										"undefined" != typeof module && module.exports)
								)
									if (s === e)
										for (v in ((module.exports = n[e] = g), n)) g[v] = n[v];
									else n[e] && (n[e][m] = g);
							else
								"function" == typeof define &&
								define.amd &&
								define(
									(t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") +
									s.split(".").pop(),
									[],
									function() {
										return g;
									}
								);
							for (v = 0; v < this.sc.length; v++) this.sc[v].check();
						}
					}),
					this.check(!0);
				},
				g = (t._gsDefine = function(t, e, i, s) {
					return new m(t, e, i, s);
				}),
				v = (c._class = function(t, e, i) {
					return (
						(e = e || function() {}),
						g(
							t,
							[],
							function() {
								return e;
							},
							i
						),
						e
					);
				});
			g.globals = r;
			var _,
				y = [0, 0, 1, 1],
				b = v(
					"easing.Ease",
					function(t, e, i, s) {
						(this._func = t),
						(this._type = i || 0),
						(this._power = s || 0),
						(this._params = e ? y.concat(e) : y);
					},
					!0
				),
				w = (b.map = {}),
				x = (b.register = function(t, e, i, s) {
					for (
						var n,
							o,
							r,
							a,
							l = e.split(","),
							d = l.length,
							h = (i || "easeIn,easeOut,easeInOut").split(","); -
						1 < --d;

					)
						for (
							o = l[d],
							n = s ? v("easing." + o, null, !0) : c.easing[o] || {},
							r = h.length; -
							1 < --r;

						)
							(a = h[r]),
							(w[o + "." + a] =
								w[a + o] =
								n[a] =
								t.getRatio ? t : t[a] || new t());
				});
			for (
				(_ = b.prototype)._calcEnd = !1,
				_.getRatio = function(t) {
					if (this._func)
						return (
							(this._params[0] = t), this._func.apply(null, this._params)
						);
					var e = this._type,
						i = this._power,
						s = 1 === e ? 1 - t : 2 === e ? t : t < 0.5 ? 2 * t : 2 * (1 - t);
					return (
						1 === i ?
						(s *= s) :
						2 === i ?
						(s *= s * s) :
						3 === i ?
						(s *= s * s * s) :
						4 === i && (s *= s * s * s * s),
						1 === e ? 1 - s : 2 === e ? s : t < 0.5 ? s / 2 : 1 - s / 2
					);
				},
				A = ($ = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; -
				1 < --A;

			)
				(_ = $[A] + ",Power" + A),
				x(new b(null, null, 1, A), _, "easeOut", !0),
				x(
					new b(null, null, 2, A),
					_,
					"easeIn" + (0 === A ? ",easeNone" : "")
				),
				x(new b(null, null, 3, A), _, "easeInOut");
			(w.linear = c.easing.Linear.easeIn), (w.swing = c.easing.Quad.easeInOut);
			var T = v("events.EventDispatcher", function(t) {
				(this._listeners = {}), (this._eventTarget = t || this);
			});
			((_ = T.prototype).addEventListener = function(t, e, i, s, n) {
				n = n || 0;
				var o,
					r,
					l = this._listeners[t],
					c = 0;
				for (
					this !== M || a || M.wake(),
					null == l && (this._listeners[t] = l = []),
					r = l.length; -
					1 < --r;

				)
					(o = l[r]).c === e && o.s === i ?
					l.splice(r, 1) :
					0 === c && o.pr < n && (c = r + 1);
				l.splice(c, 0, {
					c: e,
					s: i,
					up: s,
					pr: n
				});
			}),
			(_.removeEventListener = function(t, e) {
				var i,
					s = this._listeners[t];
				if (s)
					for (i = s.length; - 1 < --i;)
						if (s[i].c === e) return void s.splice(i, 1);
			}),
			(_.dispatchEvent = function(t) {
				var e,
					i,
					s,
					n = this._listeners[t];
				if (n)
					for (
						1 < (e = n.length) && (n = n.slice(0)), i = this._eventTarget; -
						1 < --e;

					)
						(s = n[e]) &&
						(s.up ?
							s.c.call(s.s || i, {
								type: t,
								target: i
							}) :
							s.c.call(s.s || i));
			});
			for (
				var $,
					k = t.requestAnimationFrame,
					S = t.cancelAnimationFrame,
					C =
					Date.now ||
					function() {
						return new Date().getTime();
					},
					P = C(),
					A = ($ = ["ms", "moz", "webkit", "o"]).length; -
				1 < --A && !k;

			)
				(k = t[$[A] + "RequestAnimationFrame"]),
				(S =
					t[$[A] + "CancelAnimationFrame"] ||
					t[$[A] + "CancelRequestAnimationFrame"]);
			v("Ticker", function(t, e) {
					function i(t) {
						var e,
							o = C() - P;
						f < o && (h += o - m),
							(P += o),
							(d.time = (P - h) / 1e3),
							(o = d.time - c),
							(!s || 0 < o || !0 === t) &&
							(d.frame++, (c += o + (l <= o ? 0.004 : l - o)), (e = !0)),
							!0 !== t && (r = n(i)),
							e && d.dispatchEvent("tick");
					}
					var s,
						n,
						r,
						l,
						c,
						d = this,
						h = C(),
						p = !(!1 === e || !k) && "auto",
						f = 500,
						m = 33;
					T.call(d),
						(d.time = d.frame = 0),
						(d.tick = function() {
							i(!0);
						}),
						(d.lagSmoothing = function(t, e) {
							return arguments.length ?
								((f = t || 1e10), void(m = Math.min(e, f, 0))) :
								f < 1e10;
						}),
						(d.sleep = function() {
							null != r &&
								((p && S ? S : clearTimeout)(r),
									(n = u),
									(r = null),
									d === M && (a = !1));
						}),
						(d.wake = function(t) {
							null !== r ?
								d.sleep() :
								t ?
								(h += -P + (P = C())) :
								10 < d.frame && (P = C() - f + 5),
								(n =
									0 === s ?
									u :
									p && k ?
									k :
									function(t) {
										return setTimeout(t, (1e3 * (c - d.time) + 1) | 0);
									}),
								d === M && (a = !0),
								i(2);
						}),
						(d.fps = function(t) {
							return arguments.length ?
								((l = 1 / ((s = t) || 60)), (c = this.time + l), void d.wake()) :
								s;
						}),
						(d.useRAF = function(t) {
							return arguments.length ? (d.sleep(), (p = t), void d.fps(s)) : p;
						}),
						d.fps(t),
						setTimeout(function() {
							"auto" === p &&
								d.frame < 5 &&
								"hidden" !== (o || {}).visibilityState &&
								d.useRAF(!1);
						}, 1500);
				}),
				((_ = c.Ticker.prototype = new c.events.EventDispatcher()).constructor =
					c.Ticker);
			var O = v("core.Animation", function(t, e) {
					(this.vars = e = e || {}),
					(this._duration = this._totalDuration = t || 0),
					(this._delay = Number(e.delay) || 0),
					(this._timeScale = 1),
					(this._active = !0 === e.immediateRender),
					(this.data = e.data),
					(this._reversed = !0 === e.reversed),
					G &&
						(a || M.wake(),
							(e = this.vars.useFrames ? V : G).add(this, e._time),
							this.vars.paused && this.paused(!0));
				}),
				M = (O.ticker = new c.Ticker());
			((_ = O.prototype)._dirty = _._gc = _._initted = _._paused = !1),
			(_._totalTime = _._time = 0),
			(_._rawPrevTime = -1),
			(_._next = _._last = _._onUpdate = _._timeline = _.timeline = null),
			(_._paused = !1),
			(function t() {
				a &&
					2e3 < C() - P &&
					("hidden" !== (o || {}).visibilityState || !M.lagSmoothing()) &&
					M.wake();
				var e = setTimeout(t, 2e3);
				e.unref && e.unref();
			})(),
			(_.play = function(t, e) {
				return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
			}),
			(_.pause = function(t, e) {
				return null != t && this.seek(t, e), this.paused(!0);
			}),
			(_.resume = function(t, e) {
				return null != t && this.seek(t, e), this.paused(!1);
			}),
			(_.seek = function(t, e) {
				return this.totalTime(Number(t), !1 !== e);
			}),
			(_.restart = function(t, e) {
				return this.reversed(!1)
					.paused(!1)
					.totalTime(t ? -this._delay : 0, !1 !== e, !0);
			}),
			(_.reverse = function(t, e) {
				return (
					null != t && this.seek(t || this.totalDuration(), e),
					this.reversed(!0).paused(!1)
				);
			}),
			(_.render = function(t, e, i) {}),
			(_.invalidate = function() {
				return (
					(this._time = this._totalTime = 0),
					(this._initted = this._gc = !1),
					(this._rawPrevTime = -1),
					(!this._gc && this.timeline) || this._enabled(!0),
					this
				);
			}),
			(_.isActive = function() {
				var t,
					e = this._timeline,
					i = this._startTime;
				return (
					!e ||
					(!this._gc &&
						!this._paused &&
						e.isActive() &&
						(t = e.rawTime(!0)) >= i &&
						t < i + this.totalDuration() / this._timeScale - 1e-7)
				);
			}),
			(_._enabled = function(t, e) {
				return (
					a || M.wake(),
					(this._gc = !t),
					(this._active = this.isActive()),
					!0 !== e &&
					(t && !this.timeline ?
						this._timeline.add(this, this._startTime - this._delay) :
						!t && this.timeline && this._timeline._remove(this, !0)),
					!1
				);
			}),
			(_._kill = function(t, e) {
				return this._enabled(!1, !1);
			}),
			(_.kill = function(t, e) {
				return this._kill(t, e), this;
			}),
			(_._uncache = function(t) {
				for (var e = t ? this : this.timeline; e;)
					(e._dirty = !0), (e = e.timeline);
				return this;
			}),
			(_._swapSelfInParams = function(t) {
				for (var e = t.length, i = t.concat(); - 1 < --e;)
					"{self}" === t[e] && (i[e] = this);
				return i;
			}),
			(_._callback = function(t) {
				var e = this.vars,
					i = e[t],
					s = e[t + "Params"],
					n = e[t + "Scope"] || e.callbackScope || this;
				switch (s ? s.length : 0) {
					case 0:
						i.call(n);
						break;
					case 1:
						i.call(n, s[0]);
						break;
					case 2:
						i.call(n, s[0], s[1]);
						break;
					default:
						i.apply(n, s);
				}
			}),
			(_.eventCallback = function(t, e, i, s) {
				if ("on" === (t || "").substr(0, 2)) {
					var n = this.vars;
					if (1 === arguments.length) return n[t];
					null == e ?
						delete n[t] :
						((n[t] = e),
							(n[t + "Params"] =
								p(i) && -1 !== i.join("").indexOf("{self}") ?
								this._swapSelfInParams(i) :
								i),
							(n[t + "Scope"] = s)),
						"onUpdate" === t && (this._onUpdate = e);
				}
				return this;
			}),
			(_.delay = function(t) {
				return arguments.length ?
					(this._timeline.smoothChildTiming &&
						this.startTime(this._startTime + t - this._delay),
						(this._delay = t),
						this) :
					this._delay;
			}),
			(_.duration = function(t) {
				return arguments.length ?
					((this._duration = this._totalDuration = t),
						this._uncache(!0),
						this._timeline.smoothChildTiming &&
						0 < this._time &&
						this._time < this._duration &&
						0 !== t &&
						this.totalTime(this._totalTime * (t / this._duration), !0),
						this) :
					((this._dirty = !1), this._duration);
			}),
			(_.totalDuration = function(t) {
				return (
					(this._dirty = !1),
					arguments.length ? this.duration(t) : this._totalDuration
				);
			}),
			(_.time = function(t, e) {
				return arguments.length ?
					(this._dirty && this.totalDuration(),
						this.totalTime(t > this._duration ? this._duration : t, e)) :
					this._time;
			}),
			(_.totalTime = function(t, e, i) {
				if ((a || M.wake(), !arguments.length)) return this._totalTime;
				if (this._timeline) {
					if (
						(t < 0 && !i && (t += this.totalDuration()),
							this._timeline.smoothChildTiming)
					) {
						this._dirty && this.totalDuration();
						var s = this._totalDuration,
							n = this._timeline;
						if (
							(s < t && !i && (t = s),
								(this._startTime =
									(this._paused ? this._pauseTime : n._time) -
									(this._reversed ? s - t : t) / this._timeScale),
								n._dirty || this._uncache(!1),
								n._timeline)
						)
							for (; n._timeline;)
								n._timeline._time !==
								(n._startTime + n._totalTime) / n._timeScale &&
								n.totalTime(n._totalTime, !0),
								(n = n._timeline);
					}
					this._gc && this._enabled(!0, !1),
						(this._totalTime === t && 0 !== this._duration) ||
						(z.length && Z(), this.render(t, e, !1), z.length && Z());
				}
				return this;
			}),
			(_.progress = _.totalProgress =
				function(t, e) {
					var i = this.duration();
					return arguments.length ?
						this.totalTime(i * t, e) :
						i ?
						this._time / i :
						this.ratio;
				}),
			(_.startTime = function(t) {
				return arguments.length ?
					(t !== this._startTime &&
						((this._startTime = t),
							this.timeline &&
							this.timeline._sortChildren &&
							this.timeline.add(this, t - this._delay)),
						this) :
					this._startTime;
			}),
			(_.endTime = function(t) {
				return (
					this._startTime +
					(0 != t ? this.totalDuration() : this.duration()) / this._timeScale
				);
			}),
			(_.timeScale = function(t) {
				if (!arguments.length) return this._timeScale;
				var e, i;
				for (
					t = t || d,
					this._timeline &&
					this._timeline.smoothChildTiming &&
					((i =
							(e = this._pauseTime) || 0 === e ?
							e :
							this._timeline.totalTime()),
						(this._startTime =
							i - ((i - this._startTime) * this._timeScale) / t)),
					this._timeScale = t,
					i = this.timeline; i && i.timeline;

				)
					(i._dirty = !0), i.totalDuration(), (i = i.timeline);
				return this;
			}),
			(_.reversed = function(t) {
				return arguments.length ?
					(t != this._reversed &&
						((this._reversed = t),
							this.totalTime(
								this._timeline && !this._timeline.smoothChildTiming ?
								this.totalDuration() - this._totalTime :
								this._totalTime,
								!0
							)),
						this) :
					this._reversed;
			}),
			(_.paused = function(t) {
				if (!arguments.length) return this._paused;
				var e,
					i,
					s = this._timeline;
				return (
					t != this._paused &&
					s &&
					(a || t || M.wake(),
						(i = (e = s.rawTime()) - this._pauseTime),
						!t &&
						s.smoothChildTiming &&
						((this._startTime += i), this._uncache(!1)),
						(this._pauseTime = t ? e : null),
						(this._paused = t),
						(this._active = this.isActive()),
						!t &&
						0 != i &&
						this._initted &&
						this.duration() &&
						((e = s.smoothChildTiming ?
								this._totalTime :
								(e - this._startTime) / this._timeScale),
							this.render(e, e === this._totalTime, !0))),
					this._gc && !t && this._enabled(!0, !1),
					this
				);
			});
			var R = v("core.SimpleTimeline", function(t) {
				O.call(this, 0, t),
					(this.autoRemoveChildren = this.smoothChildTiming = !0);
			});
			((_ = R.prototype = new O()).constructor = R),
			(_.kill()._gc = !1),
			(_._first = _._last = _._recent = null),
			(_._sortChildren = !1),
			(_.add = _.insert =
				function(t, e, i, s) {
					var n, o;
					if (
						((t._startTime = Number(e || 0) + t._delay),
							t._paused &&
							this !== t._timeline &&
							(t._pauseTime =
								t._startTime +
								(this.rawTime() - t._startTime) / t._timeScale),
							t.timeline && t.timeline._remove(t, !0),
							(t.timeline = t._timeline = this),
							t._gc && t._enabled(!0, !0),
							(n = this._last),
							this._sortChildren)
					)
						for (o = t._startTime; n && n._startTime > o;) n = n._prev;
					return (
						n ?
						((t._next = n._next), (n._next = t)) :
						((t._next = this._first), (this._first = t)),
						t._next ? (t._next._prev = t) : (this._last = t),
						(t._prev = n),
						(this._recent = t),
						this._timeline && this._uncache(!0),
						this
					);
				}),
			(_._remove = function(t, e) {
				return (
					t.timeline === this &&
					(e || t._enabled(!1, !0),
						t._prev ?
						(t._prev._next = t._next) :
						this._first === t && (this._first = t._next),
						t._next ?
						(t._next._prev = t._prev) :
						this._last === t && (this._last = t._prev),
						(t._next = t._prev = t.timeline = null),
						t === this._recent && (this._recent = this._last),
						this._timeline && this._uncache(!0)),
					this
				);
			}),
			(_.render = function(t, e, i) {
				var s,
					n = this._first;
				for (this._totalTime = this._time = this._rawPrevTime = t; n;)
					(s = n._next),
					(n._active || (t >= n._startTime && !n._paused && !n._gc)) &&
					(n._reversed ?
						n.render(
							(n._dirty ? n.totalDuration() : n._totalDuration) -
							(t - n._startTime) * n._timeScale,
							e,
							i
						) :
						n.render((t - n._startTime) * n._timeScale, e, i)),
					(n = s);
			}),
			(_.rawTime = function() {
				return a || M.wake(), this._totalTime;
			});
			var E = v(
					"TweenLite",
					function(e, i, s) {
						if (
							(O.call(this, i, s),
								(this.render = E.prototype.render),
								null == e)
						)
							throw "Cannot tween a null target.";
						this.target = e = ("string" == typeof e && E.selector(e)) || e;
						s =
							e.jquery ||
							(e.length &&
								e !== t &&
								e[0] &&
								(e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType)));
						var n,
							o,
							r,
							a = this.vars.overwrite;
						if (
							((this._overwrite = a =
									null == a ?
									U[E.defaultOverwrite] :
									"number" == typeof a ?
									a >> 0 :
									U[a]),
								(s || e instanceof Array || (e.push && p(e))) &&
								"number" != typeof e[0])
						)
							for (
								this._targets = r = h(e),
								this._propLookup = [],
								this._siblings = [],
								n = 0; n < r.length; n++
							)
								(o = r[n]) ?
								"string" != typeof o ?
								o.length &&
								o !== t &&
								o[0] &&
								(o[0] === t ||
									(o[0].nodeType && o[0].style && !o.nodeType)) ?
								(r.splice(n--, 1), (this._targets = r = r.concat(h(o)))) :
								((this._siblings[n] = K(o, this, !1)),
									1 === a &&
									1 < this._siblings[n].length &&
									tt(o, this, null, 1, this._siblings[n])) :
								"string" == typeof(o = r[n--] = E.selector(o)) &&
								r.splice(n + 1, 1) :
								r.splice(n--, 1);
						else
							(this._propLookup = {}),
							(this._siblings = K(e, this, !1)),
							1 === a &&
							1 < this._siblings.length &&
							tt(e, this, null, 1, this._siblings);
						(this.vars.immediateRender ||
							(0 === i &&
								0 === this._delay &&
								!1 !== this.vars.immediateRender)) &&
						((this._time = -d), this.render(Math.min(0, -this._delay)));
					},
					!0
				),
				D = function(e) {
					return (
						e &&
						e.length &&
						e !== t &&
						e[0] &&
						(e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
					);
				};
			((_ = E.prototype = new O()).constructor = E),
			(_.kill()._gc = !1),
			(_.ratio = 0),
			(_._firstPT = _._targets = _._overwrittenProps = _._startAt = null),
			(_._notifyPluginsOfEnabled = _._lazy = !1),
			(E.version = "1.20.4"),
			(E.defaultEase = _._ease = new b(null, null, 1, 1)),
			(E.defaultOverwrite = "auto"),
			(E.ticker = M),
			(E.autoSleep = 120),
			(E.lagSmoothing = function(t, e) {
				M.lagSmoothing(t, e);
			}),
			(E.selector =
				t.$ ||
				t.jQuery ||
				function(e) {
					var i = t.$ || t.jQuery;
					return i ?
						(E.selector = i)(e) :
						void 0 === o ?
						e :
						o.querySelectorAll ?
						o.querySelectorAll(e) :
						o.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
				});
			var z = [],
				L = {},
				I = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
				H = /[\+-]=-?[\.\d]/,
				q = function(t) {
					for (var e, i = this._firstPT; i;)
						(e = i.blob ?
							1 === t && null != this.end ?
							this.end :
							t ?
							this.join("") :
							this.start :
							i.c * t + i.s),
						i.m ?
						(e = i.m(e, this._target || i.t)) :
						e < 1e-6 && -1e-6 < e && !i.blob && (e = 0),
						i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
						(i = i._next);
				},
				F = function(t, e, i, s) {
					var n,
						o,
						r,
						a,
						l,
						c,
						d = [],
						h = 0,
						u = "",
						p = 0;
					for (
						d.start = t,
						d.end = e,
						t = d[0] = t + "",
						e = d[1] = e + "",
						i && (i(d), (t = d[0]), (e = d[1])),
						d.length = 0,
						n = t.match(I) || [],
						o = e.match(I) || [],
						s &&
						((s._next = null), (s.blob = 1), (d._firstPT = d._applyPT = s)),
						a = o.length,
						r = 0; r < a; r++
					)
						(c = o[r]),
						(u += (l = e.substr(h, e.indexOf(c, h) - h)) || !r ? l : ","),
						(h += l.length),
						p ? (p = (p + 1) % 5) : "rgba(" === l.substr(-5) && (p = 1),
						c === n[r] || n.length <= r ?
						(u += c) :
						(u && (d.push(u), (u = "")),
							(l = parseFloat(n[r])),
							d.push(l),
							(d._firstPT = {
								_next: d._firstPT,
								t: d,
								p: d.length - 1,
								s: l,
								c: ("=" === c.charAt(1) ?
									parseInt(c.charAt(0) + "1", 10) *
									parseFloat(c.substr(2)) :
									parseFloat(c) - l) || 0,
								f: 0,
								m: p && p < 4 ? Math.round : 0,
							})),
						(h += c.length);
					return (
						(u += e.substr(h)) && d.push(u),
						(d.setRatio = q),
						H.test(e) && (d.end = null),
						d
					);
				},
				N = function(t, e, i, s, n, o, r, a, l) {
					"function" == typeof s && (s = s(l || 0, t));
					var c = _typeof(t[e]);
					(l =
						"function" !== c ?
						"" :
						e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ?
						e :
						"get" + e.substr(3)),
					(i = "get" !== i ? i : l ? (r ? t[l](r) : t[l]()) : t[e]),
					(l = "string" == typeof s && "=" === s.charAt(1)),
					(o = {
						t: t,
						p: e,
						s: i,
						f: "function" === c,
						pg: 0,
						n: n || e,
						m: o ? ("function" == typeof o ? o : Math.round) : 0,
						pr: 0,
						c: l ?
							parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - i || 0,
					});
					return (
						("number" == typeof i && ("number" == typeof s || l)) ||
						(r ||
							isNaN(i) ||
							(!l && isNaN(s)) ||
							"boolean" == typeof i ||
							"boolean" == typeof s ?
							((o.fp = r),
								(o = {
									t: F(
										i,
										l ?
										parseFloat(o.s) +
										o.c +
										(o.s + "").replace(/[0-9\-\.]/g, "") :
										s,
										a || E.defaultStringFilter,
										o
									),
									p: "setRatio",
									s: 0,
									c: 1,
									f: 2,
									pg: 0,
									n: n || e,
									pr: 0,
									m: 0,
								})) :
							((o.s = parseFloat(i)),
								l || (o.c = parseFloat(s) - o.s || 0))),
						o.c ?
						((o._next = this._firstPT) && (o._next._prev = o),
							(this._firstPT = o)) :
						void 0
					);
				},
				j = (E._internals = {
					isArray: p,
					isSelector: D,
					lazyTweens: z,
					blobDif: F,
				}),
				B = (E._plugins = {}),
				W = (j.tweenLookup = {}),
				X = 0,
				Y = (j.reservedProps = {
					ease: 1,
					delay: 1,
					overwrite: 1,
					onComplete: 1,
					onCompleteParams: 1,
					onCompleteScope: 1,
					useFrames: 1,
					runBackwards: 1,
					startAt: 1,
					onUpdate: 1,
					onUpdateParams: 1,
					onUpdateScope: 1,
					onStart: 1,
					onStartParams: 1,
					onStartScope: 1,
					onReverseComplete: 1,
					onReverseCompleteParams: 1,
					onReverseCompleteScope: 1,
					onRepeat: 1,
					onRepeatParams: 1,
					onRepeatScope: 1,
					easeParams: 1,
					yoyo: 1,
					immediateRender: 1,
					repeat: 1,
					repeatDelay: 1,
					data: 1,
					paused: 1,
					reversed: 1,
					autoCSS: 1,
					lazy: 1,
					onOverwrite: 1,
					callbackScope: 1,
					stringFilter: 1,
					id: 1,
					yoyoEase: 1,
				}),
				U = {
					none: 0,
					all: 1,
					auto: 2,
					concurrent: 3,
					allOnStart: 4,
					preexisting: 5,
					true: 1,
					false: 0,
				},
				V = (O._rootFramesTimeline = new R()),
				G = (O._rootTimeline = new R()),
				Q = 30,
				Z = (j.lazyRender = function() {
					var t,
						e = z.length;
					for (L = {}; - 1 < --e;)
						(t = z[e]) &&
						!1 !== t._lazy &&
						(t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
					z.length = 0;
				});
			(G._startTime = M.time),
			(V._startTime = M.frame),
			(G._active = V._active = !0),
			setTimeout(Z, 1),
				(O._updateRoot = E.render =
					function() {
						var t, e, i;
						if (
							(z.length && Z(),
								G.render((M.time - G._startTime) * G._timeScale, !1, !1),
								V.render((M.frame - V._startTime) * V._timeScale, !1, !1),
								z.length && Z(),
								M.frame >= Q)
						) {
							for (i in ((Q = M.frame + (parseInt(E.autoSleep, 10) || 120)),
									W)) {
								for (t = (e = W[i].tweens).length; - 1 < --t;)
									e[t]._gc && e.splice(t, 1);
								0 === e.length && delete W[i];
							}
							if (
								(!(i = G._first) || i._paused) &&
								E.autoSleep &&
								!V._first &&
								1 === M._listeners.tick.length
							) {
								for (; i && i._paused;) i = i._next;
								i || M.sleep();
							}
						}
					}),
				M.addEventListener("tick", O._updateRoot);
			var K = function(t, e, i) {
					var s,
						n,
						o = t._gsTweenID;
					if (
						(W[o || (t._gsTweenID = o = "t" + X++)] ||
							(W[o] = {
								target: t,
								tweens: []
							}),
							e && (((s = W[o].tweens)[(n = s.length)] = e), i))
					)
						for (; - 1 < --n;) s[n] === e && s.splice(n, 1);
					return W[o].tweens;
				},
				J = function(t, e, i, s) {
					var n,
						o,
						r = t.vars.onOverwrite;
					return (
						r && (n = r(t, e, i, s)),
						(r = E.onOverwrite) && (o = r(t, e, i, s)),
						!1 !== n && !1 !== o
					);
				},
				tt = function(t, e, i, s, n) {
					var o, r, a;
					if (1 === s || 4 <= s) {
						for (a = n.length, f = 0; f < a; f++)
							if ((r = n[f]) !== e) r._gc || (r._kill(null, t, e) && (o = !0));
							else if (5 === s) break;
						return o;
					}
					for (
						var l,
							c = e._startTime + d,
							h = [],
							u = 0,
							p = 0 === e._duration,
							f = n.length; -
						1 < --f;

					)
						(r = n[f]) === e ||
						r._gc ||
						r._paused ||
						(r._timeline !== e._timeline ?
							((l = l || et(e, 0, p)), 0 === et(r, l, p) && (h[u++] = r)) :
							r._startTime <= c &&
							r._startTime + r.totalDuration() / r._timeScale > c &&
							(((p || !r._initted) && c - r._startTime <= 2e-10) ||
								(h[u++] = r)));
					for (f = u; - 1 < --f;)
						(r = h[f]),
						2 === s && r._kill(i, t, e) && (o = !0),
						(2 === s && (r._firstPT || !r._initted)) ||
						((2 === s || J(r, e)) && r._enabled(!1, !1) && (o = !0));
					return o;
				},
				et = function(t, e, i) {
					for (
						var s = t._timeline, n = s._timeScale, o = t._startTime; s._timeline;

					) {
						if (((o += s._startTime), (n *= s._timeScale), s._paused))
							return -100;
						s = s._timeline;
					}
					return e < (o /= n) ?
						o - e :
						(i && o === e) || (!t._initted && o - e < 2 * d) ?
						d :
						(o += t.totalDuration() / t._timeScale / n) > e + d ?
						0 :
						o - e - d;
				};
			(_._init = function() {
				var t,
					e,
					i,
					s,
					n,
					o,
					r = this.vars,
					a = this._overwrittenProps,
					l = this._duration,
					c = !!r.immediateRender,
					d = r.ease;
				if (r.startAt) {
					for (s in (this._startAt &&
							(this._startAt.render(-1, !0), this._startAt.kill()),
							(n = {}),
							r.startAt))
						n[s] = r.startAt[s];
					if (
						((n.data = "isStart"),
							(n.overwrite = !1),
							(n.immediateRender = !0),
							(n.lazy = c && !1 !== r.lazy),
							(n.startAt = n.delay = null),
							(n.onUpdate = r.onUpdate),
							(n.onUpdateParams = r.onUpdateParams),
							(n.onUpdateScope = r.onUpdateScope || r.callbackScope || this),
							(this._startAt = E.to(this.target, 0, n)),
							c)
					)
						if (0 < this._time) this._startAt = null;
						else if (0 !== l) return;
				} else if (r.runBackwards && 0 !== l)
					if (this._startAt)
						this._startAt.render(-1, !0),
						this._startAt.kill(),
						(this._startAt = null);
					else {
						for (s in (0 !== this._time && (c = !1), (i = {}), r))
							(Y[s] && "autoCSS" !== s) || (i[s] = r[s]);
						if (
							((i.overwrite = 0),
								(i.data = "isFromStart"),
								(i.lazy = c && !1 !== r.lazy),
								(i.immediateRender = c),
								(this._startAt = E.to(this.target, 0, i)),
								c)
						) {
							if (0 === this._time) return;
						} else
							this._startAt._init(),
							this._startAt._enabled(!1),
							this.vars.immediateRender && (this._startAt = null);
					}
				if (
					((this._ease = d =
							d ?
							d instanceof b ?
							d :
							"function" == typeof d ?
							new b(d, r.easeParams) :
							w[d] || E.defaultEase :
							E.defaultEase),
						r.easeParams instanceof Array &&
						d.config &&
						(this._ease = d.config.apply(d, r.easeParams)),
						(this._easeType = this._ease._type),
						(this._easePower = this._ease._power),
						(this._firstPT = null),
						this._targets)
				)
					for (o = this._targets.length, t = 0; t < o; t++)
						this._initProps(
							this._targets[t],
							(this._propLookup[t] = {}),
							this._siblings[t],
							a ? a[t] : null,
							t
						) && (e = !0);
				else
					e = this._initProps(
						this.target,
						this._propLookup,
						this._siblings,
						a,
						0
					);
				if (
					(e && E._onPluginEvent("_onInitAllProps", this),
						a &&
						(this._firstPT ||
							("function" != typeof this.target && this._enabled(!1, !1))),
						r.runBackwards)
				)
					for (i = this._firstPT; i;)
						(i.s += i.c), (i.c = -i.c), (i = i._next);
				(this._onUpdate = r.onUpdate), (this._initted = !0);
			}),
			(_._initProps = function(e, i, s, n, o) {
				var r, a, l, c, d, h;
				if (null == e) return !1;
				for (r in (L[e._gsTweenID] && Z(),
						this.vars.css ||
						(e.style &&
							e !== t &&
							e.nodeType &&
							B.css &&
							!1 !== this.vars.autoCSS &&
							(function(t, e) {
								var i,
									s = {};
								for (i in t)
									Y[i] ||
									(i in e &&
										"transform" !== i &&
										"x" !== i &&
										"y" !== i &&
										"width" !== i &&
										"height" !== i &&
										"className" !== i &&
										"border" !== i) ||
									!(!B[i] || (B[i] && B[i]._autoCSS)) ||
									((s[i] = t[i]), delete t[i]);
								t.css = s;
							})(this.vars, e)),
						this.vars))
					if (((h = this.vars[r]), Y[r]))
						h &&
						(h instanceof Array || (h.push && p(h))) &&
						-1 !== h.join("").indexOf("{self}") &&
						(this.vars[r] = h = this._swapSelfInParams(h, this));
					else if (
					B[r] &&
					(c = new B[r]())._onInitTween(e, this.vars[r], this, o)
				) {
					for (
						this._firstPT = d = {
							_next: this._firstPT,
							t: c,
							p: "setRatio",
							s: 0,
							c: 1,
							f: 1,
							n: r,
							pg: 1,
							pr: c._priority,
							m: 0,
						},
						a = c._overwriteProps.length; -
						1 < --a;

					)
						i[c._overwriteProps[a]] = this._firstPT;
					(c._priority || c._onInitAllProps) && (l = !0),
					(c._onDisable || c._onEnable) &&
					(this._notifyPluginsOfEnabled = !0),
					d._next && (d._next._prev = d);
				} else
					i[r] = N.call(
						this,
						e,
						r,
						"get",
						h,
						r,
						0,
						null,
						this.vars.stringFilter,
						o
					);
				return n && this._kill(n, e) ?
					this._initProps(e, i, s, n, o) :
					1 < this._overwrite &&
					this._firstPT &&
					1 < s.length &&
					tt(e, this, i, this._overwrite, s) ?
					(this._kill(i, e), this._initProps(e, i, s, n, o)) :
					(this._firstPT &&
						((!1 !== this.vars.lazy && this._duration) ||
							(this.vars.lazy && !this._duration)) &&
						(L[e._gsTweenID] = !0),
						l);
			}),
			(_.render = function(t, e, i) {
				var s,
					n,
					o,
					r,
					a,
					l,
					c,
					h = this._time,
					u = this._duration,
					p = this._rawPrevTime;
				if (
					(u - 1e-7 <= t && 0 <= t ?
						((this._totalTime = this._time = u),
							(this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
							this._reversed ||
							((s = !0),
								(n = "onComplete"),
								(i = i || this._timeline.autoRemoveChildren)),
							0 !== u ||
							(!this._initted && this.vars.lazy && !i) ||
							(this._startTime === this._timeline._duration && (t = 0),
								(p < 0 ||
									(t <= 0 && -1e-7 <= t) ||
									(p === d && "isPause" !== this.data)) &&
								p !== t &&
								((i = !0), d < p && (n = "onReverseComplete")),
								(this._rawPrevTime = r = !e || t || p === t ? t : d))) :
						t < 1e-7 ?
						((this._totalTime = this._time = 0),
							(this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
							(0 !== h || (0 === u && 0 < p)) &&
							((n = "onReverseComplete"), (s = this._reversed)),
							t < 0 &&
							((this._active = !1),
								0 !== u ||
								(!this._initted && this.vars.lazy && !i) ||
								(0 <= p && (p !== d || "isPause" !== this.data) && (i = !0),
									(this._rawPrevTime = r = !e || t || p === t ? t : d))),
							(!this._initted ||
								(this._startAt && this._startAt.progress())) &&
							(i = !0)) :
						((this._totalTime = this._time = t),
							this._easeType ?
							((a = t / u),
								(1 === (l = this._easeType) || (3 === l && 0.5 <= a)) &&
								(a = 1 - a),
								3 === l && (a *= 2),
								1 === (c = this._easePower) ?
								(a *= a) :
								2 === c ?
								(a *= a * a) :
								3 === c ?
								(a *= a * a * a) :
								4 === c && (a *= a * a * a * a),
								(this.ratio =
									1 === l ?
									1 - a :
									2 === l ?
									a :
									t / u < 0.5 ?
									a / 2 :
									1 - a / 2)) :
							(this.ratio = this._ease.getRatio(t / u))),
						this._time !== h || i)
				) {
					if (!this._initted) {
						if ((this._init(), !this._initted || this._gc)) return;
						if (
							!i &&
							this._firstPT &&
							((!1 !== this.vars.lazy && this._duration) ||
								(this.vars.lazy && !this._duration))
						)
							return (
								(this._time = this._totalTime = h),
								(this._rawPrevTime = p),
								z.push(this),
								void(this._lazy = [t, e])
							);
						this._time && !s ?
							(this.ratio = this._ease.getRatio(this._time / u)) :
							s &&
							this._ease._calcEnd &&
							(this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
					}
					for (
						!1 !== this._lazy && (this._lazy = !1),
						this._active ||
						(!this._paused &&
							this._time !== h &&
							0 <= t &&
							(this._active = !0)),
						0 === h &&
						(this._startAt &&
							(0 <= t ?
								this._startAt.render(t, !0, i) :
								(n = n || "_dummyGS")),
							!this.vars.onStart ||
							(0 === this._time && 0 !== u) ||
							e ||
							this._callback("onStart")),
						o = this._firstPT; o;

					)
						o.f ?
						o.t[o.p](o.c * this.ratio + o.s) :
						(o.t[o.p] = o.c * this.ratio + o.s),
						(o = o._next);
					this._onUpdate &&
						(t < 0 &&
							this._startAt &&
							-1e-4 !== t &&
							this._startAt.render(t, !0, i),
							e ||
							((this._time !== h || s || i) && this._callback("onUpdate"))),
						!n ||
						(this._gc && !i) ||
						(t < 0 &&
							this._startAt &&
							!this._onUpdate &&
							-1e-4 !== t &&
							this._startAt.render(t, !0, i),
							s &&
							(this._timeline.autoRemoveChildren && this._enabled(!1, !1),
								(this._active = !1)),
							!e && this.vars[n] && this._callback(n),
							0 === u &&
							this._rawPrevTime === d &&
							r !== d &&
							(this._rawPrevTime = 0));
				}
			}),
			(_._kill = function(t, e, i) {
				if (
					("all" === t && (t = null),
						null == t && (null == e || e === this.target))
				)
					return (this._lazy = !1), this._enabled(!1, !1);
				e =
					"string" != typeof e ?
					e || this._targets || this.target :
					E.selector(e) || e;
				var s,
					n,
					o,
					r,
					a,
					l,
					c,
					d,
					h,
					u =
					i &&
					this._time &&
					i._startTime === this._startTime &&
					this._timeline === i._timeline;
				if ((p(e) || D(e)) && "number" != typeof e[0])
					for (s = e.length; - 1 < --s;) this._kill(t, e[s], i) && (l = !0);
				else {
					if (this._targets) {
						for (s = this._targets.length; - 1 < --s;)
							if (e === this._targets[s]) {
								(a = this._propLookup[s] || {}),
								(this._overwrittenProps = this._overwrittenProps || []),
								(n = this._overwrittenProps[s] =
									t ? this._overwrittenProps[s] || {} : "all");
								break;
							}
					} else {
						if (e !== this.target) return !1;
						(a = this._propLookup),
						(n = this._overwrittenProps =
							t ? this._overwrittenProps || {} : "all");
					}
					if (a) {
						if (
							((c = t || a),
								(d =
									t !== n &&
									"all" !== n &&
									t !== a &&
									("object" != (void 0 === t ? "undefined" : _typeof(t)) ||
										!t._tempKill)),
								i && (E.onOverwrite || this.vars.onOverwrite))
						) {
							for (o in c) a[o] && (h = h || []).push(o);
							if ((h || !t) && !J(this, i, e, h)) return !1;
						}
						for (o in c)
							(r = a[o]) &&
							(u && (r.f ? r.t[r.p](r.s) : (r.t[r.p] = r.s), (l = !0)),
								r.pg && r.t._kill(c) && (l = !0),
								(r.pg && 0 !== r.t._overwriteProps.length) ||
								(r._prev ?
									(r._prev._next = r._next) :
									r === this._firstPT && (this._firstPT = r._next),
									r._next && (r._next._prev = r._prev),
									(r._next = r._prev = null)),
								delete a[o]),
							d && (n[o] = 1);
						!this._firstPT && this._initted && this._enabled(!1, !1);
					}
				}
				return l;
			}),
			(_.invalidate = function() {
				return (
					this._notifyPluginsOfEnabled &&
					E._onPluginEvent("_onDisable", this),
					(this._firstPT =
						this._overwrittenProps =
						this._startAt =
						this._onUpdate =
						null),
					(this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
					(this._propLookup = this._targets ? {} : []),
					O.prototype.invalidate.call(this),
					this.vars.immediateRender &&
					((this._time = -d), this.render(Math.min(0, -this._delay))),
					this
				);
			}),
			(_._enabled = function(t, e) {
				if ((a || M.wake(), t && this._gc)) {
					var i,
						s = this._targets;
					if (s)
						for (i = s.length; - 1 < --i;)
							this._siblings[i] = K(s[i], this, !0);
					else this._siblings = K(this.target, this, !0);
				}
				return (
					O.prototype._enabled.call(this, t, e),
					!(!this._notifyPluginsOfEnabled || !this._firstPT) &&
					E._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
				);
			}),
			(E.to = function(t, e, i) {
				return new E(t, e, i);
			}),
			(E.from = function(t, e, i) {
				return (
					(i.runBackwards = !0),
					(i.immediateRender = 0 != i.immediateRender),
					new E(t, e, i)
				);
			}),
			(E.fromTo = function(t, e, i, s) {
				return (
					(s.startAt = i),
					(s.immediateRender =
						0 != s.immediateRender && 0 != i.immediateRender),
					new E(t, e, s)
				);
			}),
			(E.delayedCall = function(t, e, i, s, n) {
				return new E(e, 0, {
					delay: t,
					onComplete: e,
					onCompleteParams: i,
					callbackScope: s,
					onReverseComplete: e,
					onReverseCompleteParams: i,
					immediateRender: !1,
					lazy: !1,
					useFrames: n,
					overwrite: 0,
				});
			}),
			(E.set = function(t, e) {
				return new E(t, 0, e);
			}),
			(E.getTweensOf = function(t, e) {
				if (null == t) return [];
				var i, s, n, o;
				if (
					((t = ("string" == typeof t && E.selector(t)) || t),
						(p(t) || D(t)) && "number" != typeof t[0])
				) {
					for (i = t.length, s = []; - 1 < --i;)
						s = s.concat(E.getTweensOf(t[i], e));
					for (i = s.length; - 1 < --i;)
						for (o = s[i], n = i; - 1 < --n;) o === s[n] && s.splice(i, 1);
				} else if (t._gsTweenID)
					for (i = (s = K(t).concat()).length; - 1 < --i;)
						(s[i]._gc || (e && !s[i].isActive())) && s.splice(i, 1);
				return s || [];
			}),
			(E.killTweensOf = E.killDelayedCallsTo =
				function(t, e, i) {
					"object" == (void 0 === e ? "undefined" : _typeof(e)) &&
					((i = e), (e = !1));
					for (var s = E.getTweensOf(t, e), n = s.length; - 1 < --n;)
						s[n]._kill(i, t);
				});
			var it = v(
				"plugins.TweenPlugin",
				function(t, e) {
					(this._overwriteProps = (t || "").split(",")),
					(this._propName = this._overwriteProps[0]),
					(this._priority = e || 0),
					(this._super = it.prototype);
				},
				!0
			);
			if (
				((_ = it.prototype),
					(it.version = "1.19.0"),
					(it.API = 2),
					(_._firstPT = null),
					(_._addTween = N),
					(_.setRatio = q),
					(_._kill = function(t) {
						var e,
							i = this._overwriteProps,
							s = this._firstPT;
						if (null != t[this._propName]) this._overwriteProps = [];
						else
							for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
						for (; s;)
							null != t[s.n] &&
							(s._next && (s._next._prev = s._prev),
								s._prev ?
								((s._prev._next = s._next), (s._prev = null)) :
								this._firstPT === s && (this._firstPT = s._next)),
							(s = s._next);
						return !1;
					}),
					(_._mod = _._roundProps =
						function(t) {
							for (var e, i = this._firstPT; i;)
								(e =
									t[this._propName] ||
									(null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
								"function" == typeof e &&
								(2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
								(i = i._next);
						}),
					(E._onPluginEvent = function(t, e) {
						var i,
							s,
							n,
							o,
							r,
							a = e._firstPT;
						if ("_onInitAllProps" === t) {
							for (; a;) {
								for (r = a._next, s = n; s && s.pr > a.pr;) s = s._next;
								(a._prev = s ? s._prev : o) ? (a._prev._next = a) : (n = a),
								(a._next = s) ? (s._prev = a) : (o = a),
								(a = r);
							}
							a = e._firstPT = n;
						}
						for (; a;)
							a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
							(a = a._next);
						return i;
					}),
					(it.activate = function(t) {
						for (var e = t.length; - 1 < --e;)
							t[e].API === it.API && (B[new t[e]()._propName] = t[e]);
						return !0;
					}),
					(g.plugin = function(t) {
						if (!(t && t.propName && t.init && t.API))
							throw "illegal plugin definition.";
						var e,
							i = t.propName,
							s = t.priority || 0,
							n = t.overwriteProps,
							o = {
								init: "_onInitTween",
								set: "setRatio",
								kill: "_kill",
								round: "_mod",
								mod: "_mod",
								initAll: "_onInitAllProps",
							},
							r = v(
								"plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
								function() {
									it.call(this, i, s), (this._overwriteProps = n || []);
								},
								!0 === t.global
							),
							a = (r.prototype = new it(i));
						for (e in (((a.constructor = r).API = t.API), o))
							"function" == typeof t[e] && (a[o[e]] = t[e]);
						return (r.version = t.version), it.activate([r]), r;
					}),
					($ = t._gsQueue))
			) {
				for (A = 0; A < $.length; A++) $[A]();
				for (_ in f)
					f[_].func ||
					t.console.log("GSAP encountered missing dependency: " + _);
			}
			a = !1;
		}
	})(
		"undefined" != typeof module &&
		module.exports &&
		"undefined" != typeof global ?
		global :
		window,
		"TweenMax"
	);
var uob = {
	width: 0,
	height: 0,
	isMobile: "",
	throttle: function(t, e) {
		var i, s;
		return function() {
			var n = this,
				o = arguments;
			s
				?
				(clearTimeout(i),
					(i = setTimeout(function() {
						Date.now() - s >= e && (t.apply(n, o), (s = Date.now()));
					}, e - (Date.now() - s)))) :
				(t.apply(n, o), (s = Date.now()));
		};
	},
	debouncev2: function(t, e, i) {
		var s,
			n,
			o,
			r,
			a,
			l,
			c,
			d,
			h = function() {
				return Date.now();
			},
			u = 0,
			p = !1,
			f = !1,
			m = !0,
			g = Math.max,
			v = Math.min;
		if ("function" != typeof t) throw new TypeError("Expected a function");

		function _(e) {
			var i = s,
				o = n;
			return (s = n = void 0), (u = e), (r = t.apply(o, i));
		}

		function y(t) {
			var i = t - l;
			return void 0 === l || e <= i || i < 0 || (f && o <= t - u);
		}

		function b() {
			var t,
				i = h();
			if (y(i)) return w(i);
			a = setTimeout(b, ((i = e - ((t = i) - l)), f ? v(i, o - (t - u)) : i));
		}

		function w(t) {
			return (a = void 0), m && s ? _(t) : ((s = n = void 0), r);
		}

		function x() {
			var t = h(),
				i = y(t);
			if (((s = arguments), (n = this), (l = t), i)) {
				if (void 0 === a)
					return (u = i = l), (a = setTimeout(b, e)), p ? _(i) : r;
				if (f) return (a = setTimeout(b, e)), _(l);
			}
			return void 0 === a && (a = setTimeout(b, e)), r;
		}
		return (
			(e = Number(e) || 0),
			(d = void 0 === (c = i) ? "undefined" : _typeof(c)),
			!c ||
			("object" != d && "function" != d) ||
			((p = !!i.leading),
				(o = (f = "maxWait" in i) ? g(Number(i.maxWait) || 0, e) : o),
				(m = "trailing" in i ? !!i.trailing : m)),
			(x.cancel = function() {
				void 0 !== a && clearTimeout(a), (s = l = n = a = void(u = 0));
			}),
			(x.flush = function() {
				return void 0 === a ? r : w(h());
			}),
			x
		);
	},
	enquire: function(t) {
		var e = void 0 === t.debounce ? 200 : t.debounce,
			i =
			(void 0 === t.leading || t.leading, {
				status: t.update,
				desktop: t.desktop,
				mobile: t.mobile,
				counterDesktop: 0,
				counterMobile: 0,
				width: 0,
				height: 0,
				between: 767,
				range1: t.range1,
				range2: t.range2,
				tablet: !1,
				init: function() {
					null != t.between && (i.between = t.between),
						null != t.tablet && (i.tablet = t.tablet),
						window.addEventListener("resize", function() {
							(Math.max(
									document.documentElement.clientWidth,
									window.innerWidth || 0
								) == i.width &&
								(uob.isMobile ||
									Math.max(
										document.documentElement.clientHeight,
										window.innerHeight || 0
									) == i.height)) ||
							i.update();
						}),
						$(document).ready(function() {
							i.update();
						});
				},
				update: uob.debouncev2(
					function() {
						(i.width = Math.max(
							document.documentElement.clientWidth,
							window.innerWidth || 0
						)),
						(i.height = Math.max(
							document.documentElement.clientHeight,
							window.innerHeight || 0
						)),
						"range" == i.status &&
							0 < i.range1 &&
							0 < i.range2 &&
							i.range2 > i.range1 ?
							i.width >= i.range1 && i.width <= i.range2 ?
							(i.counterMobile = 0) == i.counterDesktop &&
							((i.counterDesktop = 1), i.desktop()) :
							(i.counterDesktop = 0) == i.counterMobile &&
							((i.counterMobile = 1), i.mobile()) :
							"always" == i.status ?
							i.width > i.between ?
							i.desktop() :
							i.mobile() :
							i.tablet && uob.isMobile ?
							i.mobile() :
							i.width > i.between ?
							(i.counterMobile = 0) == i.counterDesktop &&
							((i.counterDesktop = 1), i.desktop()) :
							(i.counterDesktop = 0) == i.counterMobile &&
							((i.counterMobile = 1), i.mobile());
					},
					e, {
						leading: t.leading,
						trailing: !0
					}
				),
			});
		return i.init(), i;
	},
	tablecarousel: function(t) {
		var e = {
			target: document.querySelector(t.target),
			targetId: "",
			items: 0,
			columns: 1,
			currentslide: 0,
			navLeft: !0,
			navRight: !0,
			stickyNav: !1,
			navOffsetTop: 60,
			navTotalOffset: 0,
			bullets: !0,
			xpoint: 0,
			clicks: 0,
			headfix: !1,
			table: "",
			headerGap: 0,
			onInitialize: "",
			onChange: "",
			odd: 0,
			lastSlide: 0,
			slideBy: 1,
			init: function() {
				(e.targetId = $(e.target).attr("id")),
				e.defaults(),
					e.createnav(),
					e.createbullets(),
					e.headerfix(),
					$(e.target).hasClass("fixed-header") &&
					(e.fixedHeaderInitial(),
						$(window).on("tab_changed", function() {
							e.fixedHeaderInitial();
						})),
					TweenMax.set(e.table, {
						x: 0
					}),
					2 == e.columns ?
					$(e.target).addClass("last-slide") :
					$(e.target).addClass("first-slide"),
					window.setTimeout(function() {
						e.update();
					}, 100),
					(e.clicks = 0),
					e.clickcontrols(),
					e.swipe();
				var i = uob.width;
				window.addEventListener("resize", function() {
						i != uob.width &&
							(TweenMax.set($(".table__carousel-content", e.target), {
									x: 0
								}),
								TweenMax.set(e.table, {
									x: 0
								}),
								(e.currentslide = 0),
								(e.xpoint = 0),
								e.move());
					}),
					$(window).on(
						"tab_changed accordion_changed",
						uob.debouncev2(
							function() {
								e.update();
							},
							100, {
								leading: !1,
								trailing: !0
							}
						)
					),
					e.resize(),
					t.onChange && (e.onChange = t.onChange),
					t.onInitialize &&
					((e.onInitialize = t.onInitialize),
						e.onInitialize({
							items: e.items,
							columns: e.columns,
							currentslide: e.currentslide,
						}));
			},
			defaults: function() {
				(e.table = $(".table__carousel-table", e.target)),
				$(e.target).addClass("com_table-carousel"),
					0 == t.navLeft && (e.navLeft = !1),
					0 == t.navRight && (e.navRight = !1),
					1 == t.stickyNav && (e.stickyNav = !0),
					0 == t.bullets && (e.bullets = !1),
					1 == t.headfix && ((e.headfix = !0), $(e.target).addClass("headfix")),
					t.headerGap && (e.headerGap = t.headerGap),
					t.items && (e.items = t.items),
					t.slideBy && (e.slideBy = t.slideBy);
				for (var i = 0; i < $(".table-row", e.table).length; i++)
					for (
						var s = $(".table-row", e.table).eq(i), n = 0; n < $(".table-item", s).length; n++
					)
						e.columns == n && e.columns++;
				(e.odd = e.columns % 2),
				1 == e.items ?
					(e.lastSlide = e.columns - 1) :
					((e.lastSlide = Math.round((e.columns - 1) / e.slideBy)),
						1 < e.items &&
						(e.lastSlide--,
							e.slideBy % 2 &&
							e.items % 2 &&
							e.columns % 2 &&
							e.lastSlide--));
			},
			createnav: function() {
				0 != e.columns &&
					(e.navLeft &&
						((e.navLeft = document.createElement("div")),
							$(e.navLeft)
							.addClass("table-carousel-nav")
							.addClass("left")
							.append(
								'<span class="capt"></span> <span ><div class="icons-chevon-right"></div></span>'
							)
							.hide(),
							$(e.target).append(e.navLeft)),
						e.navRight &&
						((e.navRight = document.createElement("div")),
							$(e.navRight)
							.addClass("table-carousel-nav")
							.addClass("right")
							.append(
								'<span class="capt"></span> <span ><div class="icons-chevon-right"></div></span>'
							)
							.hide(),
							$(e.target).append(e.navRight)),
						e.stickyNav && e.navsticky());
			},
			navsticky: function() {
				var t = {
					topOffset: 0,
					bottomOffset: 0,
					init: function() {
						$(window).scroll(
							uob.throttle(function() {
								var i = $(".table__carousel-content", e.target);
								if (i.outerHeight() < document.body.clientHeight) return !1;
								var s = $("header").outerHeight(),
									n = s,
									o =
									10 <=
									Math.ceil(
										Math.abs(
											document.body.clientWidth -
											e.navRight.getBoundingClientRect().right
										)
									) ?
									10 :
									"auto",
									r = $(".table__carousel-content > table thead", $(e.target)),
									a = $(".tgh1", $(e.target)).first();
								(n += a = (0 < r.length ? r : a).outerHeight()),
								(s += a),
								(t.topOffset = i.offset().top),
								(t.bottomOffset = i.offset().top + i.outerHeight() - s - 150),
								$(window).scrollTop() > t.topOffset &&
									$(window).scrollTop() < t.bottomOffset ?
									($(e.navRight).addClass("sticky-active"),
										(n += uob.headertransform.get())) :
									($(e.navRight).removeClass("sticky-active"),
										(o = "auto"),
										(n = $(e.navRight).data("pre-top"))),
									$(e.navRight).css({
										top: n,
										marginRight: o
									});
							}, 50)
						);
					},
				};
				t.init();
			},
			createbullets: function() {
				if (e.bullets) {
					(e.bullets = document.createElement("div")),
					$(e.bullets).addClass("table-carousel-bullets");
					var t = document.createElement("ul"),
						i = e.columns;
					1 < e.items &&
						((i = Math.round((e.columns - 1) / e.slideBy)),
							e.slideBy % 2 && e.items % 2 && e.columns % 2 && i--),
						1 == i && i--;
					for (var s = 0; s < i; s++) {
						var n = document.createElement("li");
						$(n).attr("item-position", s), $(t).append(n);
					}
					$(e.bullets).append(t), $(e.target).append(e.bullets);
				}
			},
			clickcontrols: function() {
				$(".table-carousel-nav.left", e.target).on("click", function() {
						0 != e.currentslide &&
							0 == e.clicks &&
							((e.clicks = 1), e.currentslide--, e.move());
					}),
					$(".table-carousel-nav.right", e.target).on("click", function() {
						e.currentslide != e.lastSlide &&
							0 == e.clicks &&
							((e.clicks = 1), e.currentslide++, e.move());
					}),
					e.bullets &&
					$("li", e.bullets).on("click", function() {
						var t = $(this);
						0 == e.clicks &&
							((e.clicks = 1),
								$("li.active", e.bullets).eq(0).removeClass("active"),
								t.addClass("active"),
								(e.currentslide = Math.floor($(this).attr("item-position"))),
								e.move());
					});
			},
			swipe: function() {
				var i = {
					xDown: null,
					yDown: null,
					init: function() {
						document
							.querySelector(t.target)
							.addEventListener("touchstart", i.start, !1),
							document
							.querySelector(t.target)
							.addEventListener("touchmove", i.move, !1);
					},
					start: function(t) {
						(i.xDown = t.touches[0].clientX), (i.yDown = t.touches[0].clientY);
					},
					move: function(t) {
						var s;
						i.xDown &&
							i.yDown &&
							((s = t.touches[0].clientX),
								(t = t.touches[0].clientY),
								(s = i.xDown - s),
								(t = i.yDown - t),
								uob.width < 768 &&
								Math.abs(s) > Math.abs(t) &&
								(0 < s ?
									e.currentslide != e.lastSlide &&
									0 == e.clicks &&
									((e.clicks = 1), e.currentslide++, e.move()) :
									0 != e.currentslide &&
									0 == e.clicks &&
									((e.clicks = 1), e.currentslide--, e.move())),
								(i.xDown = null),
								(i.yDown = null));
					},
				};
				i.init();
			},
			update: function() {
				var t;
				(e.clicks = 0),
				e.navLeft &&
					((t = $(".table__carousel-nav li", e.target)
							.eq(e.currentslide - 2)
							.text()),
						0 != e.currentslide && $(".capt", e.navLeft).text(t)),
					e.navRight &&
					((t = $(".table__carousel-nav li", e.target)
							.eq(e.currentslide + 2)
							.text()),
						$(".capt", e.navRight).text(t));
				var i = $(".table__carousel-content", e.target).outerHeight();
				$(".table-carousel-nav", e.target).each(function() {
						var t,
							s,
							n,
							o = $(this),
							r = o.find("span.capt");
						0 !== o.outerWidth() &&
							((t = -1 * o.outerHeight()),
								$("table th", e.target).outerHeight(),
								(s = $(r).outerWidth() + 30),
								(t = t < 0 ? o.outerWidth() / 2 + 15 : t),
								Math.abs(window.innerWidth - t - o.outerHeight()),
								_defineProperty(
									(t = {
										display: "flex",
										justifyContent: "flex-end",
										alignItems: "flex-end",
										flexDirection: "column-reverse",
										margin: 0,
										left: o.hasClass("left") ? 0 : "auto",
										top: 0,
										right: o.hasClass("right") ? 0 : "auto",
										bottom: "auto",
									}),
									"margin",
									"auto"
								),
								_defineProperty(t, "width", o.hasClass("left") ? 40 : 54),
								_defineProperty(t, "height", "100%"),
								_defineProperty(t, "overflow", "hidden"),
								_defineProperty(t, "transition", "all 0.3s ease-out"),
								(t = t),
								o.css(t),
								r.css({
									width: "auto",
									visibility: "hidden"
								}),
								o
								.find("> *")
								.not(".icons-chevon-right")
								.each(function(t) {
									$(this).css({
										display: "block",
										maxHeight: "54px",
										maxWidth: "auto",
										textAlign: "right",
										transform: "rotate(-90deg) translate(0%, -154%)",
										transformOrigin: "right center",
										whiteSpace: "nowrap",
										overflow: "hidden",
										padding: "0 5px",
										textOverflow: "ellipsis",
										transition: "all 0.3s ease-out",
									});
								}),
								(s = r.outerWidth()),
								(n =
									"calc(50% - " +
									(s = Math.min(i, 300, s + 35)) / 2 +
									"px - 20px)"),
								o.css({
									height: s,
									top: n
								}),
								o.data("pre-top", n),
								r.css({
									width: s - 30,
									visibility: "visible"
								}));
					}),
					e.navLeft &&
					(0 == e.currentslide ?
						TweenMax.to(e.navLeft, 0.3, {
							opacity: 0,
							rotation: 0,
							x: -20,
							onComplete: function() {
								$(e.navLeft).hide();
							},
						}) :
						($(e.navLeft).show(),
							TweenMax.to(e.navLeft, 0.3, {
								opacity: 1,
								rotation: 0,
								x: 0,
							}))),
					e.navRight &&
					(e.currentslide == e.lastSlide ?
						TweenMax.to(e.navRight, 0.3, {
							opacity: 0,
							rotation: 0,
							x: 20,
							onComplete: function() {
								$(e.navRight).fadeOut();
							},
						}) :
						($(e.navRight).show(),
							TweenMax.to(e.navRight, 0.3, {
								opacity: 1,
								rotation: 0,
								x: 0,
							}))),
					e.bullets &&
					($("li.active", e.bullets).eq(0).removeClass("active"),
						$("li", e.bullets).eq(e.currentslide).addClass("active")),
					e.onChange &&
					e.onChange({
						items: e.items,
						columns: e.columns,
						currentslide: e.currentslide,
					});
			},
			move: function() {
				var t = $("#" + e.targetId + "cloned"),
					i = $(".table__carousel-table", t),
					s = (uob.width - 65) / e.items,
					n = s * e.currentslide * e.slideBy * -1;
				!e.odd || e.currentslide != e.lastSlide || e.items % 2 ?
					(e.xpoint = n) :
					(e.xpoint = e.xpoint + -1 * s),
					TweenMax.to(e.table, 0.5, {
						x: e.xpoint,
						ease: Cubic.easeInOut,
						onComplete: function() {
							e.update();
						},
					}),
					TweenMax.to(i, 0.5, {
						x: e.xpoint,
						ease: Cubic.easeInOut,
						onComplete: function() {
							e.update();
						},
					}),
					0 === e.currentslide ?
					($(e.target).addClass("first-slide"), t.addClass("first-slide")) :
					($(e.target).removeClass("first-slide"),
						t.removeClass("first-slide")),
					e.currentslide == e.columns - 1 || e.currentslide == e.lastSlide ?
					(e.navLeft &&
						(TweenMax.to($(".table__carousel-content", e.target), 0.5, {
								x: 35,
								ease: Cubic.easeInOut,
							}),
							TweenMax.to($(".table__carousel-content", t), 0.5, {
								x: 35,
								ease: Cubic.easeInOut,
							})),
						e.navLeft &&
						TweenMax.to($(".pct-table2-header-fix", e.target), 0.5, {
							x: 35,
							ease: Cubic.easeInOut,
						}),
						$(e.target).addClass("last-slide"),
						t.addClass("last-slide")) :
					(TweenMax.to($(".pct-table2-header-fix", e.target), 0.5, {
							x: 0,
							ease: Cubic.easeInOut,
						}),
						TweenMax.to($(".table__carousel-content", e.target), 0.5, {
							x: 0,
							ease: Cubic.easeInOut,
						}),
						TweenMax.to($(".table__carousel-content", t), 0.5, {
							x: 0,
							ease: Cubic.easeInOut,
						}),
						$(e.target).removeClass("last-slide"),
						t.removeClass("last-slide"));
			},
			headerfix: function() {
				var t = {
					content: "",
					init: function() {
						(t.content = $(".table__carousel-content", e.target).html()),
						(e.headfix = document.createElement("div")),
						$(e.headfix).addClass("table-carousel-header"),
							$(e.headfix).append(t.content),
							$(".table__carousel-content", e.target).append(e.headfix);
					},
				};
				e.headfix && t.init();
			},
			desktopHeaderFix: function(t) {
				var e;
				$(t).is(":visible") &&
					((e = $(t)
							.find(".table__carousel-table")
							.find("tbody tr:first-child td:first-child")),
						(t = $(t).find(".table-headfix")).width(e.outerWidth()),
						t.find("tr:first-child td:first-child").height(e.height() - 2));
			},
			resize: function() {
				var t = {
					colwidth: 0,
					init: function() {
						t.update(),
							window.addEventListener("resize", function() {
								$(e.target).hasClass("com_table-carousel") && t.update();
							});
					},
					update: function() {
						var i;
						(t.colwidth = (uob.width - 65) / e.items),
						e.headfix ?
							($(e.target).css({
									width: uob.width - 20
								}),
								$(".com__investment_4coltable").length &&
								((i = $(".com__investment_4coltable")),
									$(e.target, i).css({
										width: "100%"
									})),
								$(".table__carousel-content", e.target).css({
									width: uob.width - 20,
									paddingRight: 54,
								}),
								$(".table-carousel-header", e.target).css({
									width: t.colwidth + e.headerGap,
								})) :
							$(".table__carousel-content", e.target).css({
								width: uob.width - 64,
							}),
							$(".table-item", e.target).css({
								minWidth: t.colwidth
							}),
							$(".table-item", "#" + e.targetId + "cloned").css({
								minWidth: t.colwidth,
							}),
							$(".table__carousel-content", e.target).outerHeight(),
							$(".table-carousel-nav", e.target).each(function() {
								var t,
									i = $(this);
								e.stickyNav &&
									(uob.resize(),
										(t = $("table th", e.target).outerHeight()),
										(e.navTotalOffset = i.outerHeight() / 2 + t + 40),
										i.hasClass("right") &&
										i.css({
											marginTop: e.navTotalOffset
										}));
							});
					},
				};
				t.init();
			},
			fixedHeaderInitial: function() {
				var t,
					i,
					s = $("#" + e.targetId),
					n = $(".table-carousel-nav", s);
				s.find("th").css("height", ""),
					s.hasClass("d-md-block") ||
					((t = $("#" + e.targetId + "cloned")),
						(i = t && t.length ? t : s.clone()).addClass(
							"fixed-table-header d-md-none cloned"
						),
						i.attr("id", e.targetId + "cloned"),
						i.css({
							top: $("header").outerHeight(),
							marginTop: 0
						}),
						setTimeout(function() {
							var t = i.find(".table__carousel-content > table thead");
							t && t.length ?
								i.css("height", t.height()) :
								i.css("height", s.find("tr:first-child").height()),
								(t = i.find(".table-carousel-header")).width(
									t.find("tr:first-child > td:first-child").outerWidth()
								);
						}, 100),
						2 == e.columns ?
						i.addClass("last-slide").removeClass("first-slide") :
						i.width("100%"),
						(t && t.length) ||
						$(e.target).parents(".module").parent().append(i),
						$(window).resize(
							uob.throttle(function() {
								i.css("top", $("header").height()),
									setTimeout(function() {
										var t = i.find(".table-carousel-header");
										t.width(
											t.find("tr:first-child > td:first-child").outerWidth()
										);
									}, 100);
							}, 50)
						),
						$(".table__carousel-content", e.target).on(
							"inview",
							function(t, e) {
								var s,
									o = $(this);
								n.data("pre-top") && n.data("pre-top"),
									e ?
									((s = $("header").outerHeight()),
										$(window).scroll(
											uob.throttle(function() {
												var t,
													e,
													n = $(".table-carousel-header", o);
												uob.width < 768 &&
													n.length &&
													((e = $(i).outerHeight() + s),
														n.offset().top,
														(t = $(window).scrollTop()),
														(n = o.offset().top - s),
														(e = o.offset().top + o.outerHeight() - e),
														n < t && t < e ?
														$(i).addClass("active") :
														$(i).removeClass("active"));
											}, 50)
										)) :
									$(i).removeClass("active");
							}
						),
						$(window).scroll(
							uob.throttle(function() {
								var t = $("header").outerHeight() + uob.headertransform.get();
								$(i).hasClass("active") &&
									$(i).css({
										top: t,
										transition: "all 0.1s"
									});
							}, 50)
						));
			},
		};
		try {
			t.destroy ?
				($(t.target).css({
						width: "auto"
					}),
					$(".table__carousel-content", t.target).removeAttr("style"),
					$(".table-item", t.table).css({
						minWidth: "auto"
					}),
					TweenMax.set($("table", t.target), {
						x: 0
					}),
					$(".table-carousel-nav", t.target).remove(),
					$(".table-carousel-bullets", t.target).remove(),
					$(".table-carousel-header", t.target).remove(),
					$(t.target).removeClass("com_table-carousel"),
					$(t.target).find(".table-headfix").length &&
					(767 < uob.width && e.desktopHeaderFix(t.target),
						$(window).on("select_changed resize", function(i) {
							"select_changed" == i.type &&
								t.target == i.value &&
								e.desktopHeaderFix(i.value),
								767 < uob.width && e.desktopHeaderFix(t.target);
						}))) :
				1 == $(t.target).length && e.init();
		} catch (t) {
			console.error("tablecarousel error:", t.message);
		}
	},
	tableinit: function() {
		$("[table-carousel]").each(function(t, el) {
			if (!el.classList.contains('merge__table') && !el.classList.contains('no-slide')) {
				var e,
					i,
					s,
					n,
					o,
					r,
					a = $(this),
					l = a.attr("table-carousel"),
					c = "table" + l + t;
				a.attr("id", c),
					a.hasClass("table-initialised") ||
					(a.addClass("table-initialised"),
						"type1" == l &&
						uob.enquire({
							desktop: function() {
								uob.tablecarousel({
									target: "#" + c,
									destroy: !0
								});
							},
							mobile: function() {
								uob.tablecarousel({
									target: "#" + c,
									items: 2,
									bullets: !1,
									onInitialize: function() {},
									onChange: function() {},
								});
							},
						}),
						"type2" == l &&
						uob.enquire({
							desktop: function() {
								uob.tablecarousel({
									target: "#" + c,
									destroy: !0
								});
							},
							mobile: function() {
								uob.tablecarousel({
									target: "#" + c,
									items: 2,
									navLeft: !1,
									headfix: !0,
									type: l,
								});
							},
						}),
						"type3" == l &&
						uob.enquire({
							desktop: function() {
								uob.tablecarousel({
									target: "#" + c,
									destroy: !0
								});
							},
							mobile: function() {
								uob.tablecarousel({
									target: "#" + c,
									items: 2,
									navLeft: !1,
									headfix: !0,
									headerGap: 2,
								});
							},
						}),
						"type4" == l &&
						uob.enquire({
							desktop: function() {
								uob.tablecarousel({
									target: "#" + c,
									destroy: !0
								});
							},
							mobile: function() {
								uob.tablecarousel({
									target: "#" + c,
									items: 1,
									navLeft: !1
								});
							},
						}),
						"type5" == l &&
						uob.enquire({
							desktop: function() {
								uob.tablecarousel({
									target: "#" + c,
									destroy: !0
								});
							},
							mobile: function() {
								uob.tablecarousel({
									target: "#" + c,
									items: 2,
									navLeft: !1,
									headfix: !0,
									stickyNav: !0,
								});
							},
						}),
						"type6" == l &&
						uob.enquire({
							desktop: function() {
								uob.tablecarousel({
									target: "#" + c,
									destroy: !0
								});
							},
							mobile: function() {
								uob.tablecarousel({
									target: "#" + c,
									items: 2,
									navLeft: !1,
									stickyNav: !0,
								});
							},
						}),
						"custom" == l &&
						((e = 2),
							(s = i = !0),
							(o = n = 0),
							(r = 1),
							a.attr("table-items") && (e = parseInt(a.attr("table-items"))),
							"false" == a.attr("graph-headfix") && (i = !1),
							"false" == a.attr("graph-stickyNav") && (s = !1),
							a.attr("graph-firstRows") &&
							(n = parseInt(a.attr("graph-firstRows"))),
							(o = n),
							a.attr("graph-mobile-firstRows") &&
							(o = parseInt(a.attr("graph-mobile-firstRows"))),
							a.attr("graph-slideBy") &&
							(r = parseInt(a.attr("graph-slideBy"))),
							uob.enquire({
								desktop: function() {
									uob.tablecarousel({
											target: "#" + c,
											destroy: !0
										}),
										uob.firstRows({
											target: "#" + c,
											rows: n
										});
								},
								mobile: function() {
									uob.tablecarousel({
											target: "#" + c,
											items: e,
											slideBy: r,
											navLeft: !1,
											navRight: !0,
											stickyNav: s,
											headfix: i,
										}),
										uob.firstRows({
											target: "#" + c,
											rows: o
										});
								},
							})));
			}
		});
	},
	init: function() {
		(uob.width = $(window).outerWidth()),
		(uob.height = $(window).outerHeight()),
		uob.tableinit();
	},
};
$(document).ready(function() {
	$('.table__carousel').addClass('no-slide');
	$('.table__carousel .table__carousel-table .table-row').each(function(i, r) {
			if (r.childElementCount > 2) {
				r.closest('.table__carousel').classList.remove('no-slide');
			}
		}),
		uob.init(),
		$(".uob-calculator-cont .nav-link").on("click", function() {
			setTimeout(function() {
				$(".uob-calculator-cont .table-carousel-nav").remove(),
					$(".uob-calculator-cont .table-carousel-bullets").remove(),
					$(".uob-calculator-cont .table__carousel").removeClass(
						"table-initialised"
					),
					uob.tableinit();
			}, 100);
		}),
		$(".accordion .card-header").on("click", function() {
			setTimeout(function() {
				$(".accordion .table-carousel-nav").remove(),
					$(".accordion .table-carousel-bullets").remove(),
					$(".accordion .table__carousel").removeClass("table-initialised"),
					uob.tableinit();
			}, 100);
		});
});

function getPageName(url) {
	var index = url.split("/", 3).join("/").length + 1;
	var filenameWithExtension = url.substr(index);
	var filename = filenameWithExtension.split(".")[0];
	return filename;
}

function getCategoryName(url) {
	var splitted = url.split("/");
	var name = splitted[1];
	return name;
}

$(document).ready(function() {
	$(".category-page-card .card-img-top").each(function() {
		if (this.src.length > 0) {
			$(this).css("height", "");
		}
	});

	$("#appendTables .dropdown-menu button").each(function() {
		$(this).on("click", function() {
			//var dataElement=dataElement || {};
			dataElement.event_name = "edit-prod";
			dataElement.click_name = "edit-product";
			dataElement.component_name = getPageName(location.href);
			//dataElement.product_category =  getCategoryName(getPageName(location.href));
			dataElement.product_compared = $(this).attr("id");
			console.log("dataelement", dataElement);
			_satellite.track("component_action");
		});
	});

	function BigPictureFunc() {
		let youtubeVideo = document.querySelectorAll('[id^="video-"]');

		function setClickHandler(id, fn) {
			if (document.getElementById(id)) {
				document.getElementById(id).onclick = fn;
			}
		}

		youtubeVideo.forEach((a) => {
			setClickHandler(a.getAttribute("id"), function(e) {
				e.preventDefault();
				var element = document.getElementById(a.getAttribute("id"));
				~element &&
					BigPicture({
						el: element,
						ytSrc: element.getAttribute("ytsrc"),
					});
			});
		});
	}

	BigPictureFunc();
});


$(document).ready(function(i) {
	var accordion_left_title_links = $('#scrollspy-list .list-group-item').length;
	for (i = 0; i < accordion_left_title_links; ++i) {
		var accordion_left_title_link = $('#scrollspy-list .list-group-item').eq(i).attr('href');
		var remove_special_character_link = accordion_left_title_link.replace(/[$+?@%!()/&]/g, '');
		var remove_special_character_link_id = accordion_left_title_link.replace(/[$+?@%!#()/&]/g, '');
		$('#scrollspy-list .list-group-item').eq(i).attr('href', remove_special_character_link);
		$('.accordion h2.content-sub-title').eq(i).attr('id', remove_special_character_link_id);
	}
    var current_activate_link;
      $("#scrollspy-list").hover(function() {
          current_activate_link = $('#scrollspy-list .list-group-item').index($('.default-active'));
          if (current_activate_link === -1) {
              current_activate_link = 0;
          }
          $("#scrollspy-list .list-group-item").eq(current_activate_link).removeClass('default-active').addClass('current-active');
      }, function() {
          $("#scrollspy-list .list-group-item").eq(current_activate_link).removeClass('current-active').addClass('default-active');
      });
});

//202304CR Table CSV Section - START
$(document).ready(function() {
	//Run function new_s() to perform line below animation for desktop
	new_s('#pills-tab .kr-active');

	$('.tblcsv-tab-items a').on('click', function(e) {
		e.preventDefault();

		//Adds active class to selected tab item
		// $('.tblcsv-tab-items a').removeClass('active kr-active');
		$('.tblcsv-tab-items a').removeClass('active kr-active');
		$(this).addClass('kr-active');

		//Run function new_s() to perform line below animation for desktop
		new_s('#pills-tab .kr-active');

		//Switches out the current Dropdown Name selected on Mobile
		let currentClickedDropdown = $(this).text();
		$('#dropdownMenuLink').text(currentClickedDropdown);
	});
	//Function to perform line below animation for Desktop Tabs
	function new_s(theSelector) {
		var t = $("#tab-underline");
		0 < $(theSelector).length && (i = $(theSelector));
		var e =
			i &&
			i.position() &&
			i.position().left + parseInt(i.css("padding-left")),
			i = i && i.width();
		768 <= $(window).width() &&
			t.css({
				bottom: "-10px",
				left: e,
				width: i,
				opacity: 1
			});
	}
});
//202304CR Table CSV Section - END
//202304CR Timed Overlay Forms Section - START
$(document).ready(function() {
	var delayTiming = $('.ovf-timed-popup').data('delay');
	setTimeout(function() {
		$('.ovf-timed-popup').fadeIn().css('display', 'flex');
	}, delayTiming);
	$('.ovf-modal-close').on('click', function() {
		$('.ovf-timed-popup').fadeOut();
	});

	$('.ovf-timed-popup').on('click', function(e) {
		if (!(($(e.target).closest('.ovf-modal-window').length > 0) || ($(e.target).closest('.ovf-modal-close').length > 0))) {
			$('.ovf-timed-popup').fadeOut();
		}
	});

	$('[data-ovf-timed-trigger]').on('click', function(e) {
		e.preventDefault();
		var selectedModal = $(this).attr('data-ovf-timed-trigger');
		$(selectedModal + '.ovf-timed-popup').fadeIn().css('display', 'flex');
	});
});
//202304CR Timed Overlay Forms Section - END

/* CR63880: Detect and adjust the height of the form : Start */
$(document).ready(function() {
	function bindEvent(element, eventName, eventHandler) {
		if (element.addEventListener) {
			element.addEventListener(eventName, eventHandler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + eventName, eventHandler);
		}
	}

	var maxHeight = 0;
	bindEvent(window, 'message', function(e) {
		var iframeLength = $('.embed-aem-form').length;
		for (var i = 0; i <= iframeLength; i++) {
			if (e.data > maxHeight) {
				maxHeight = e.data + 20;
			}
			if (e.currentTarget.document.embeds[i] != null) {
				e.currentTarget.document.embeds[i].height = maxHeight;
			}
		}
	});
	
	//var vars = [], hash;
	//var tmpurl="";
	//var tmpparam="";
    //var urlparam="";
    //var urlvalue="";
    //var paramCount=0;
//
	//var hashes = window.location.href.substring(window.location.href.indexOf('?')+1,window.location.href.length).split("&");
	//for(var i = 0; i < hashes.length; i++)
	//{
	//urlparam = hashes[i].substring(0,hashes[i].indexOf('='));
	//urlvalue = hashes[i].substring(hashes[i].indexOf('=')+1,hashes[i].length);
//
	//if(urlparam == "reURL")
	//	{
	//	 var tmpurl = urlvalue;
	//	}
	//else
	//	{
	//	if(urlparam) {
    //      if(paramCount<1 && !(tmpurl.includes("?"))){     
    //        var tmpparam = tmpparam +"?"+ urlparam +"="+ urlvalue; paramCount = paramCount +1; 
    //      }
    //      else{     var tmpparam = tmpparam +"&"+ urlparam +"="+ urlvalue;}
    //    }
	//	}	
	//  
	//  $("#URLREDIRECT1").attr("href", tmpurl+tmpparam);
	//}
   
   //var uri = window.location.toString();
	//if (uri.indexOf("?") > 0 && uri.indexOf("reURL=") > 0) {
	//    var clean_uri = uri.substring(0, uri.indexOf("?"));
	//    window.history.replaceState({}, document.title, clean_uri);
	//}
});
/* CR63880: Detect and adjust the height of the form : End */

//Anchor link - START
$(window).on('load', function () {

    var hash = window.location.hash;
    var target = $(hash);

    if (hash) {
        var offset0 = $('#header').height() * 1.5;
        var offset1 = $('#header .navbar').height();
        var offset2 = $('#pd-anchor-link').height();
        var offset;

        if (typeof offset0 === "undefined") {
            offset0 = 0;
        }
        if (typeof offset2 === "undefined") {
            offset2 = 0;
            offset = offset0 + offset1 + offset2;
        } else {
            offset = offset1 + offset2;
        }
        /* 05012025 Issue5 Start onload Scroll */
        setTimeout(function () {
            
            $('html, body').animate({
                scrollTop: target.offset().top - offset - 120
            }, 1000);
        }, 1000);
        
        /* 05012025 Issue5 End  onload Scroll */
    }
});
//Anchor link - END

/* 03012025 Issue1 Start Hash Changed auto open accordion */
document.addEventListener('DOMContentLoaded', function () {

    const uobAccordion = document.querySelector('.uob-accordion');

    if (uobAccordion) {
        var hash = window.location.hash;
        var target = $(hash);

        if (hash) {
            var offset0 = $('#header').height() * 1.5;
            var offset1 = $('#header .navbar').height();
            var offset2 = $('#pd-anchor-link').height();
            var offset;

            if (typeof offset0 === "undefined") {
                offset0 = 0;
            }
            if (typeof offset2 === "undefined") {
                offset2 = 0;
                offset = offset0 + offset1 + offset2;
            } else {
                offset = offset1 + offset2;
            }


            // Find the corresponding card-header by ID
            var targetHeader = $('.uob-accordion .card .card-header' + hash);
            // Check if the targetHeader exists
            if (targetHeader.length) {
                // Expand the associated collapse div
                var targetCollapse = targetHeader.attr('data-target');
                $(targetCollapse).collapse('show');
                var scrollValue = window.innerWidth < 768 ? target.offset().top - offset - 430 : target.offset().top - offset - 350;
                setTimeout(function () {

                    $('html, body').animate({
                        scrollTop: scrollValue
                    }, 1000);
                }, 1000);
            }

        }

        window.addEventListener('hashchange', function () {

            var hash = window.location.hash;
            var target = $(hash);

            if (hash) {
                var offset0 = $('#header').height() * 1.5;
                var offset1 = $('#header .navbar').height();
                var offset2 = $('#pd-anchor-link').height();
                var offset;

                if (typeof offset0 === "undefined") {
                    offset0 = 0;
                }
                if (typeof offset2 === "undefined") {
                    offset2 = 0;
                    offset = offset0 + offset1 + offset2;
                } else {
                    offset = offset1 + offset2;
                }


                // Find the corresponding card-header by ID
                var targetHeader = $('.uob-accordion .card .card-header' + hash);
                // Check if the targetHeader exists
                if (targetHeader.length) {
                    // Expand the associated collapse div
                    var targetCollapse = targetHeader.attr('data-target');
                    $(targetCollapse).collapse('show');
                    var scrollValue = window.innerWidth < 768 ? target.offset().top - offset - 130 : target.offset().top - offset - 130;
                    setTimeout(function () {
                        $('html, body').animate({
                            scrollTop: scrollValue
                        }, 1000);
                    }, 2000);
                }

            }
        });

    }
});
/* 03012025 Issue1 End Hash Changed auto open accordion */

/*KR202310 - Product Category Filter START
var productcardtitle = "";
$(".category-page-filter .card-footer").each(function () {
  var productcardtitle = $(this).parents('.card').find('h4.card-title').html();
  $(this).prepend('<div class="div-see-less"><a href="#" class="see-less" anchor_name="'+productcardtitle+':See less">See less</a></div>');
});

var SeeLess =  $('.div-see-less');
SeeLess.hide();
*/

function fixHeight(elem){
  var maxHeight = 0;
  $(elem).css('height','auto');
  $(elem).each(function(){
     if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });
  $(elem).height(maxHeight);
}

if (window.innerWidth > 768) {
$(window).resize(function () {
  fixHeight('.category-page-filter .card');
});
}
$(document).ready(function(e) {
  if (window.innerWidth > 768) {
  fixHeight('.category-page-filter .card');
  }
});


$(".category-page-filter .content").each(function () {
    if(seeMoreCharacterLimit != "")
    {
		var content = $(this);
		var productcardtitle = content.parents('.card-body').find('h4.card-title').html();
		var originalContent = content.parents('.card-body').find('.fullDesc').val(); // Store the original HTML content
		
		var contentText = content.text();
        var textOnly = originalContent.replace(/<[^>]+>/g, '');
 
		if (textOnly.length > parseInt(seeMoreCharacterLimit)) {
          //var shortTextUL = content.find('ul').empty();
			var shortText = "";
			seeMoreCharacterLimit = parseInt(seeMoreCharacterLimit);
			shortText = truncateHTML(originalContent, seeMoreCharacterLimit);

 
		shortText = shortText.trimEnd().replace(/.$/gi, "");
		var longText = contentText;
 
		content.empty().append('<p class="paragraph reduced">'+shortText +'</p>');
        content.append('<a href="#" class="dtm-link see-more" anchor_name="'+productcardtitle+':See more">See more</a>');
        }
		content.on("click", ".see-more", function (e) { 
		  e.preventDefault();
		  content.parents('.category-item').find('.card').addClass('h-100');
          originalContent = content.parents('.card-body').find('.fullDesc').val();
		  content.empty().append(originalContent);
          content.append('<a href="#" class="dtm-link see-less" anchor_name="'+productcardtitle+':See less">See less</a>');
		});
 
		content.on("click", ".see-less", function (e) { 
		  e.preventDefault();
          originalContent = content.parents('.card-body').find('.fullDesc').val();
          shortText = truncateHTML(originalContent, seeMoreCharacterLimit);
		  content.empty().append('<p class="paragraph reduced">'+shortText +'</p>'); 
          content.append('<a href="#" class="dtm-link see-more" anchor_name="'+productcardtitle+':See more">See more</a>');
        });
	}
});
 
function truncateHTML(html, maxLength) {
   html = html.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '');
   const textOnly = html.replace(/<[^>]*>/g, '');
   const truncatedText = textOnly.substring(0, maxLength);
   let truncatedHtml = '';
   let textCount = 0;
   let insideTag = false;
   for (let i = 0; i < html.length; i++) {
       const char = html[i];
       if (char === '<') {
           insideTag = true;
           if (html.slice(i, i + 5) === '<br/>') {
               truncatedHtml += '<br/>';
               i += 4; 
               insideTag = false;
               continue;
           }
       }
       if (!insideTag) {
           if (textCount < maxLength) {
               truncatedHtml += char;
               textCount++;
           }
       } else {
           truncatedHtml += char;
       }
       if (char === '>') {
           insideTag = false;
       }
       if (textCount === maxLength && !insideTag) {
           break;
       }
   }
   const openTags = [];
   const tagPattern = /<(?!br\b|br\/)([^\/][^ >]*)[^>]*>/g
   let match;
   while ((match = tagPattern.exec(truncatedHtml)) !== null) {
       openTags.push(match[1]);
   }
   const closingTagPattern = /<\/([^ >]*)>/g;
   while ((match = closingTagPattern.exec(truncatedHtml)) !== null) {
       const index = openTags.lastIndexOf(match[1]);
       if (index !== -1) {
           openTags.splice(index, 1);
       }
   }
   truncatedHtml += '<span class="ellipsis">...</span>';
   for (let i = openTags.length - 1; i >= 0; i--) {
       truncatedHtml += `</${openTags[i]}>`;
   }
   return truncatedHtml;
}
/*KR202310 - Product Category Filter END*/
//KRUCH022 - Close Promotion banner
$('.icon-close').on('click', function(event) {
  event.preventDefault();
  $('.article-promotion-banner').hide();
});
//KRUCH022 - Close Promotion banner

/* July 2024 CR start */
//announcement banner start
function truncateText(str, limit) {
    var regx = new RegExp(/(<[^>]*>)/g);
    var counter = 0;
    var strArray = str.split(regx);

    for (var i = 0, len = strArray.length; i < len; i++) {
        if (!(regx.test(strArray[i]))) {
            if (counter === limit) {
                strArray.splice(i, 1);
                continue;
            }
            counter = counter + strArray[i].length;
            if (counter > limit) {
                var diff = counter - limit;
                strArray[i] = strArray[i].slice(0, -diff);
                counter = limit;
            }
        }
    }

    var new_string = strArray.join('');
    new_string = new_string.replace(/(<(?!\/)[^>]+>)+(<\/[^>]+>)/g, "");
    return new_string;
}


var announcements = $('.announcements');
var announcementsNavs = $('.announcement-navs');
announcements.on('init', function (event, slick, direction) {
    setTimeout(function () {
        announcementsNavs.append('<button class="hide-announcements dtm-button" button_name="close"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M15.3666 15.2427L6.72553 6.75739" stroke="#0084FF" stroke-width="2" stroke-linecap="round"/>\n' +
            '<path d="M15.3666 6.75732L6.72553 15.2426" stroke="#0084FF" stroke-width="2" stroke-linecap="round"/>\n' +
            '</svg></button>')
    }, 300)
});
announcements.slick({
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    adaptiveHeight: true,
    fade: true,
    appendArrows: announcementsNavs.find('.navs'),
    prevArrow: '<button type="button" class="slick-prev dtm-button" button_name="previous"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M13 7L9.07189 10.8573C8.99206 10.9357 8.99206 11.0643 9.07189 11.1427L13 15" stroke="#0084FF" stroke-width="2" stroke-linecap="round"/>\n' +
        '</svg></button>',
    nextArrow: '<button type="button" class="slick-next dtm-button" button_name="next"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M9 7L12.9281 10.8573C13.0079 10.9357 13.0079 11.0643 12.9281 11.1427L9 15" stroke="#0084FF" stroke-width="2" stroke-linecap="round"/>\n' +
        '</svg></button>'
});
$(document).on('click', '.announcements .see-more', function (event) {
    event.preventDefault();
    announcements.addClass('expand');
    announcements.slick('refresh');
    $(this).remove()
});

$(document).on('click', '.hide-announcements', function () {
    $('.announcement-banner').hide()
});

function announcementsText(reload = false) {
    var titleMaxChars = 10;
    var descMaxChars = 104;
    if ($(window).width() > 991) {
        titleMaxChars = 20;
        descMaxChars = 350;
    }

    if (!reload) {
        announcements.find('.item p:last-child').each(function () {
            var text = $(this).html();
            var full = $('<p>');
            full.addClass('note full');
            full.html(text);
            $(this).after(full);
            var truncated = $('<p>');
            truncated.addClass('note truncated');

            if ((text.length - 1) > truncateText(text, descMaxChars).length) {
                truncated.html(truncateText(text, descMaxChars))
                truncated.append('... ')
                truncated.append('<a href="#" class="see-more dtm-link" anchor_name="show more">Show more</a>')
            } else {
                truncated.html(text);
            }
            $(this).after(truncated);

            announcements.slick('refresh');
            $(this).remove();
        });
    } else {
        announcements.find('.item p.full').each(function () {
            var text = $(this).html();
            var truncatedEl = $(this).closest('.item').find('p.truncated');
            if ((text.length) > truncateText(text, descMaxChars).length) {
                truncatedEl.html(truncateText(text, descMaxChars))
                truncatedEl.append('... ')
                truncatedEl.append('<a href="#" class="see-more dtm-link" anchor_name="show more">Show more</a>')
            } else {
                truncatedEl.html(text);
            }
        })
    }
}
announcementsText()

$(window).resize(function () {
    announcementsText(true)
});
//announcement banner end

//multi step start
var multisteps = $('.multi-steps');
var multisteps_layout = $('.multi-steps-layout');
var maxSteps = 5;
var activeCount = 0;

var prevButton = '<button type="button" class="dtm-button slick-prev" button_name="previous"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7562 19.7562C14.4312 20.0813 13.9029 20.0813 13.5779 19.7562L4.41081 10.5892C4.25414 10.4334 4.16663 10.2208 4.16663 10C4.16663 9.77916 4.25414 9.56665 4.41081 9.41081L13.5779 0.243759C13.9029 -0.081255 14.4312 -0.081255 14.7562 0.243759C15.0813 0.568773 15.0813 1.09713 14.7562 1.42214L6.17838 10L14.7562 18.5779C15.0813 18.9029 15.0813 19.4312 14.7562 19.7562Z" fill="#0084FF"/>\n' +
    '</svg></button>';
var nextButton = '<button type="button" class="dtm-button slick-next" button_name="next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.41081 19.7562C4.0858 19.4312 4.0858 18.9029 4.41081 18.5779L12.9887 10L4.41081 1.42214C4.0858 1.09713 4.0858 0.568773 4.41081 0.243759C4.73582 -0.081255 5.26418 -0.081255 5.58919 0.243759L14.7562 9.41081C15.0813 9.73582 15.0813 10.2642 14.7562 10.5892L5.58919 19.7562C5.26418 20.0813 4.73582 20.0813 4.41081 19.7562Z" fill="#0084FF"/>\n' +
    '</svg></button>';

var upButton = '<button type="button" class="dtm-button slick-disabled slick-prev" button_name="previous"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M19.7562 14.7562C19.4312 15.0813 18.9029 15.0813 18.5779 14.7562L10 6.17838L1.42214 14.7562C1.09713 15.0813 0.568773 15.0813 0.243759 14.7562C-0.081255 14.4312 -0.081255 13.9029 0.243759 13.5779L9.41081 4.41081C9.73582 4.0858 10.2642 4.0858 10.5892 4.41081L19.7562 13.5779C20.0813 13.9029 20.0813 14.4312 19.7562 14.7562Z" fill="#0084FF"/>\n' +
    '</svg></button>';
var downButton = '<button type="button" class="dtm-button slick-next" button_name="next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5892 14.7562C10.2642 15.0813 9.73582 15.0813 9.41081 14.7562L0.243759 5.58919C-0.081255 5.26418 -0.081255 4.73582 0.243759 4.41081C0.568773 4.0858 1.09713 4.0858 1.42214 4.41081L10 12.9887L18.5779 4.41081C18.9029 4.0858 19.4312 4.0858 19.7562 4.41081C20.0813 4.73582 20.0813 5.26418 19.7562 5.58919L10.5892 14.7562Z" fill="#0084FF"/>\n' +
    '</svg></button>';

var imageSliderOptions = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: prevButton,
    nextArrow: nextButton,
    fade: true
}
multisteps_layout.find('.images').on('init', function(event, slick, currentSlide, nextSlide){
    multisteps_layout.find('.step-numbers .active').last().addClass('last-active')
    multisteps_layout.find('.steps .active').last().addClass('last-active');
    multisteps_layout.find('.steps').prepend(upButton);
    multisteps_layout.find('.steps').append(downButton);
});

multisteps.find('.item').each(function(key, value){
    var $this = $(this);
    multisteps_layout.find('.images').append($this.find('.image').clone())


    var desc = $this.find('.desc').clone();
    var headingText = $this.find('.uob-h5').text().toLowerCase();


    var descWrapper = $('<div>');
    descWrapper.attr('data-index', key);
    descWrapper.addClass('desc-wrapper');
    descWrapper.append('<button class="dtm-button number" button_name="'+headingText +':step'+(key+1)+'">'+(key+1)+'</button>');

    

    if(key === 0 || key === multisteps.find('.item').length - 1){
        if(key === 0){
            descWrapper.addClass('current first');
        }
        if(key === multisteps.find('.item').length - 1){
            descWrapper.addClass('last');
        }
        multisteps_layout.find('.step-numbers').append(descWrapper.clone())
        descWrapper.append(desc);
        multisteps_layout.find('.steps').append(descWrapper)
    }else{
        activeCount++;
        descWrapper.addClass('step-slide');
        if(activeCount <= maxSteps - 2){
            descWrapper.addClass('active');
        }
        if(key === 1){
            descWrapper.addClass('second-slide');
        }
        if(key === multisteps.find('.item').length - 2){
            descWrapper.addClass('second-last-slide');
        }
        multisteps_layout.find('.step-numbers').append(descWrapper.clone())
        descWrapper.append(desc)
        multisteps_layout.find('.steps').append(descWrapper);
    }

    if(key === multisteps.find('.item').length - 1){
        multisteps_layout.find('.images').slick(imageSliderOptions);
    }
});

if(multisteps.find('.item').length == 1){
    multisteps_layout.addClass('items-eq-one')
}

multisteps_layout.find('.images').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var nextSlideEl = multisteps_layout.find('.desc-wrapper[data-index="'+nextSlide+'"]');
    multisteps_layout.find('.desc-wrapper').removeClass('current last-active active first-active');

    multisteps_layout.find('.steps .slick-next').removeClass('slick-disabled');
    multisteps_layout.find('.steps .slick-prev').removeClass('slick-disabled');
    if(nextSlide === 0){
        multisteps_layout.find('.steps .slick-prev').addClass('slick-disabled');
    }
    if(nextSlide+1 === multisteps_layout.find('.images .slick-slide:not(.slick-cloned)').length){
        multisteps_layout.find('.steps .slick-next').addClass('slick-disabled');
    }

    multisteps_layout.find('.desc-wrapper[data-index="'+nextSlide+'"]').addClass('current');
    if(nextSlide === 0){
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide+1)+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide+2)+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide+3)+'"]').addClass('active');
    }else if(nextSlide+1 === multisteps_layout.find('.images .slick-slide:not(.slick-cloned)').length){
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide-1)+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide-2)+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide-3)+'"]').addClass('active');
    }else if(nextSlide === 1){
        multisteps_layout.find('.desc-wrapper[data-index="'+nextSlide+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide+1)+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide+2)+'"]').addClass('active');
    }else if(nextSlide+2 === multisteps_layout.find('.images .slick-slide:not(.slick-cloned)').length){
        multisteps_layout.find('.desc-wrapper[data-index="'+nextSlide+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide-1)+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide-2)+'"]').addClass('active');
    }else{
        multisteps_layout.find('.desc-wrapper[data-index="'+nextSlide+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide-1)+'"]').addClass('active');
        multisteps_layout.find('.desc-wrapper[data-index="'+(nextSlide+1)+'"]').addClass('active');
    }
    multisteps_layout.find('.step-numbers .active').first().addClass('first-active')
    multisteps_layout.find('.step-numbers .active').last().addClass('last-active')
    multisteps_layout.find('.steps .active').first().addClass('first-active')
    multisteps_layout.find('.steps .active').last().addClass('last-active')

    if(multisteps.find('.item').length < maxSteps){
        multisteps_layout.addClass('items-lt-max')
    }else{
        multisteps_layout.removeClass('items-lt-max')
    }
});


multisteps_layout.find('.desc-wrapper').on('click', function(){
    var index = $(this).data('index');
    multisteps_layout.find('.images').slick('slickGoTo', index)
});

multisteps_layout.find('.steps .slick-prev').on('click', function(event){
    event.preventDefault();
    multisteps_layout.find('.images').slick('slickPrev')
})
multisteps_layout.find('.steps .slick-next').on('click', function(event){
    event.preventDefault();
    multisteps_layout.find('.images').slick('slickNext')
})
//multi step end

// ** accordion search start

document.addEventListener('DOMContentLoaded', function () {
    const faqMainWrapper = document.querySelector('.faq-main-wrapper');
    const sidebar = document.getElementById('faq-topics');
    const faqContent = document.querySelector('.faq-content');
    const dropdownTitle = document.querySelector(".dropdown-title");

    if (faqMainWrapper) {
        function hideAllSections() {
            document.querySelectorAll('.faq-section').forEach(section => {
                section.style.display = 'none';
            });
            if (sidebar) {
                document.querySelectorAll('.faq-topic-wrapper ul li a').forEach(link => {
                    link.classList.remove('active');
                });
            }
        }

        function showAllSections() {
            const faqTopicWrapper = document.querySelector('.faq-topic-wrapper');
            if (faqTopicWrapper) {
                faqTopicWrapper.style.display = 'none';
            }
            faqContent.style.width = '100%';
            document.querySelectorAll('.faq-section').forEach(section => {
                section.style.display = 'block';
               
            });
        }


        function scrollToElement(element) {

            const searchresultHeight = document.querySelector('#search-results')?.offsetHeight || 0;
            const faqMainWrapper = document.querySelector('.faq-main-wrapper');
            const elementPosition = faqMainWrapper.getBoundingClientRect().top + window.scrollY;
            const navbarHeight = document.querySelector('.header-mega-menu')?.offsetHeight || 0;

            let deskoffset = 0;
            let offsetPosition = 0;
            if (searchresultHeight > 0) {
                offsetPosition = elementPosition - 10;
            }
            else {
                deskoffset = elementPosition - navbarHeight + 60;
                offsetPosition = window.innerWidth < 768 ? 200 : deskoffset;
            }
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        function scrollToElement2(element) {

            const searchresultHeight = document.querySelector('#search-results')?.offsetHeight || 0;
            const navbarHeight = document.querySelector('.header-mega-menu')?.offsetHeight || 0;
            const faqMainWrapper = document.querySelector('.faq-main-wrapper');
            const elementPosition = faqMainWrapper.getBoundingClientRect().top + window.scrollY;
            let offsetPosition = 0;
            let deskoffset = 0;
            if (searchresultHeight > 0) {
                offsetPosition = elementPosition - 10;
            }
            else {
                deskoffset = elementPosition - (navbarHeight * 2) + 60;
                offsetPosition = window.innerWidth < 768 ? 200 : deskoffset;
            }
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        function showSection(target, updateUrl = true) {

            hideAllSections();

            const section = document.getElementById(target);
            if (section) {
                section.style.display = 'block';

                if (sidebar) {
                    const sidebarLink = sidebar.querySelector(`a[data-target="${target}"]`);
                    if (sidebarLink) {
                        sidebarLink.classList.add('active');
                        if (dropdownTitle) {
                            dropdownTitle.textContent = sidebarLink.textContent;
                        }
                    }
                }
            }
        }

        function showFirstAccordion() {
            document.querySelectorAll('.faq-section').forEach(section => {
                const firstButton = section.querySelector('.accordion-button:first-of-type');
                const firstContent = section.querySelector('.accordion-content:first-of-type');
                if (firstButton && firstContent) {
                    firstContent.style.display = 'block';
                    firstButton.classList.add('active');
                }
            });
        }

        function closeAccordion() {
              document.querySelectorAll('.accordion-content').forEach(panel => {
                panel.style.display = 'none';
            });
            document.querySelectorAll('.accordion-button').forEach(btn => {
                btn.classList.remove('active');
            });
        }

        function initFAQ() {
            hideAllSections();
            showFirstAccordion();
            let hashFound = false;
            const currentHash = window.location.hash.replace('#', '');
            const clickedLinks = new Set();
            // Set up sidebar links
            if (sidebar) {
                // Select the first element with the class 'faq-content'
                const faqContent = document.querySelector('.faq-main-wrapper .faq-content');
                if (faqContent) {
                    faqContent.querySelector(':scope > div').style.display = 'block';
                }

                document.querySelectorAll('#faq-topics li a').forEach(anchor => {
                    anchor.addEventListener('click', function (event) {
                        event.preventDefault();
                        const target = this.getAttribute('data-target');
                        hideAllSections();
                        showFirstAccordion();
                        showSection(target, false); // Don't update URL
                        const section = document.getElementById(target);

                        if (!clickedLinks.has(this.href)) {
                            scrollToElement2(section);
                            clickedLinks.add(this.href);
                        }
                        else {
                            scrollToElement(section);
                        }

                        if (dropdownTitle) {
                            dropdownTitle.textContent = this.textContent;
                        }
                        sidebar.classList.remove('show-dropdown');
                    });
                });
            }

            // Set up accordion buttons
            document.querySelectorAll('.accordion-button').forEach(button => {
                button.addEventListener('click', function () {
                    document.querySelectorAll('.accordion-content').forEach(panel => {
                        if (this.nextElementSibling !== panel) {
                            panel.style.display = 'none';
                            panel.previousElementSibling.classList.remove('active');
                        }
                    });
                    this.classList.toggle('active');
                    const panel = this.nextElementSibling;
                    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
                    // window.dispatchEvent(new Event('resize'));
                });
            });

            // Check if faq-main-wrapper has the class no-sidebar
            if (faqMainWrapper.classList.contains('no-sidebar')) {
                showAllSections()
            }

            if (currentHash) {
                let isChild = false;
                document.querySelectorAll('.faq-section').forEach(section => {
                    section.querySelectorAll('.accordion-button').forEach(button => {
                        // Check if faq-main-wrapper has the class no-sidebar
                        // Open the matched accordion
                        if (faqMainWrapper.classList.contains('no-sidebar')) {
                            if (button.getAttribute('data-id') === currentHash) {
                                closeAccordion();

                                hashFound = true;
                                isChild = true;
                                button.classList.add('active');
                                const content = button.nextElementSibling;
                                if (content && content.classList.contains('accordion-content')) {
                                    content.style.display = 'block';
                                }

                                const headerMobElement = document.querySelector('.mega-menu-lg-down-container');
                                let headerMobHeight = headerMobElement?.offsetHeight || 0;

                                const headerDeskElement = document.querySelector('.header-mega-menu');
                                let headerDeskHeight = headerDeskElement?.offsetHeight || 0;

                                if (window.scrollY > button.getBoundingClientRect().top) {
                                    headerMobHeight = headerMobHeight * 2;
                                    headerDeskHeight = headerDeskHeight * 2;
                                }
                                const offset = button.getBoundingClientRect().top + window.scrollY - headerMobHeight - headerDeskHeight;

                                window.scrollTo({
                                    top: offset,
                                    behavior: 'smooth'
                                });
                            }
                        }
                        else {
                            if (button.getAttribute('data-id') === currentHash) {
                                closeAccordion();
                                showSection(section.id);
                                hashFound = true;
                                isChild = true;
                                button.classList.add('active');
                                const content = button.nextElementSibling;
                                if (content && content.classList.contains('accordion-content')) {
                                    content.style.display = 'block';
                                }
                                scrollToElement(button);
                            }
                        }
                    });
                    if (!isChild && section.id === currentHash && !faqMainWrapper.classList.contains('no-sidebar')) {
                        if (dropdownTitle) {
                            dropdownTitle.textContent = section.querySelector('h2').textContent;
                        }
                        showSection(currentHash);
                        hashFound = true;
                        scrollToElement(section); // Scroll to the section
                    }
                });
            }

            if (!hashFound) {
                if (!faqMainWrapper.classList.contains('no-sidebar')) {
                    const firstSection = document.querySelector('.faq-section');
                    if (firstSection) {
                        if (dropdownTitle) {
                            dropdownTitle.textContent = firstSection.querySelector('h2').textContent;
                        }
                        showSection(firstSection.id, false);
                    }
                }
            }
        }

        initFAQ();

        window.addEventListener('hashchange', function () {
            if (!faqMainWrapper.classList.contains('no-sidebar')) {
                hideAllSections();
                let hashFound = false;
                const currentHash = window.location.hash.replace('#', '');
                if (currentHash) {
                    let isChild = false;
                    document.querySelectorAll('.faq-section').forEach(section => {
                        section.querySelectorAll('.accordion-button').forEach(button => {
                            if (button.getAttribute('data-id') === currentHash) {
                                showSection(section.id);
                                hashFound = true;
                                isChild = true;
                                button.click();
                                scrollToElement(button); // Scroll to the button
                            }
                        });
                        if (!isChild && section.id === currentHash) {
                            showSection(currentHash);
                            hashFound = true;
                            scrollToElement(section); // Scroll to the section
                        }
                    });
                }
                if (!hashFound) {
                    const firstSection = document.querySelector('.faq-section');
                    if (firstSection) {
                        showSection(firstSection.id);
                    }
                }
            }
        });

        const dropdownBtn = document.querySelector('.faq-dropdown-btn');
        if (dropdownBtn) {
            dropdownBtn.addEventListener('click', function () {
                if (sidebar) {
                    sidebar.classList.toggle('show-dropdown');
                }
                dropdownBtn.classList.toggle('active');
            });
        }
    }
});

/** SEARCH RELATED */
document.addEventListener('DOMContentLoaded', function () {
    const faqMainWrapper = document.querySelector('.faq-main-wrapper');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const clearButton = document.getElementById('btn-search-clear');
    let currentSearchResults = [];
    let resultsPerPage = 5;
    let currentPage = 0;
    if (faqMainWrapper) {
        if (clearButton) {
            clearButton.style.display = 'none';
        }

        function toggleClearButtonVisibility() {
            if (clearButton) {
                if (searchInput.value.length > 0) {
                    clearButton.style.display = 'inline';
                } else {
                    clearButton.style.display = 'none';
                }
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', toggleClearButtonVisibility);
        }

        function displayResults() {
            const start = currentPage * resultsPerPage;
            const end = start + resultsPerPage;
            const resultsToShow = currentSearchResults.slice(start, end);

            resultsToShow.forEach(({ button, content }) => {
                searchResults.appendChild(button);
                searchResults.appendChild(content);
            });

            currentPage++;
            const totalResults = currentSearchResults.length;
            const resultsDisplayed = Math.min(currentPage * resultsPerPage, totalResults);

            const searchInfo = document.getElementById('search-info');
            if (searchInfo) {
                if (totalResults === 0) {
                    searchInfo.textContent = "No results found";
                } else {
                    searchInfo.textContent = `Showing ${resultsDisplayed} of ${totalResults} results`;
                }
            }

            const seeMoreResults = document.getElementById('see-more-results');
            if (seeMoreResults) {
                seeMoreResults.style.display = resultsDisplayed >= totalResults ? 'none' : 'block';
            }
        }

        function closeAllAccordions() {
            document.querySelectorAll('.accordion-content').forEach(panel => {
                panel.style.display = 'none';
            });
            document.querySelectorAll('.accordion-button').forEach(button => {
                button.classList.remove('active');
            });
        }

        function filterFAQs(keyword) {
            const lowerCaseKeyword = keyword.toLowerCase();
            currentSearchResults = [];
            currentPage = 0;
            searchResults.innerHTML = '';

            document.querySelectorAll('.faq-section').forEach(section => {
                section.querySelectorAll('.accordion-button').forEach(button => {
                    const content = button.nextElementSibling;
                    if (button.textContent.toLowerCase().includes(lowerCaseKeyword) ||
                        content.textContent.toLowerCase().includes(lowerCaseKeyword)) {
                        const cloneButton = button.cloneNode(true);
                        const cloneContent = content.cloneNode(true);

                        cloneButton.addEventListener('click', function () {
                            if (this.classList.contains('active')) {
                                this.classList.remove('active');
                                cloneContent.style.display = 'none';
                            } else {
                                closeAllAccordions();
                                this.classList.add('active');
                                cloneContent.style.display = 'block';
                            }
                        });

                        currentSearchResults.push({ button: cloneButton, content: cloneContent });
                    }
                });
            });

            displayResults();
        }

        function triggerSearch() {

            if (searchInput.value.trim() === '') {
                searchInput.setAttribute('required', 'true');
                searchInput.focus();
                return;
            } else {
                searchInput.removeAttribute('required');
            }

            // AA Tracking
            var dataElement = window.dataElement || {};
            dataElement.faq_search_term = searchInput.value;
            if (typeof _satellite !== 'undefined') {
                _satellite.track("faq_search_entry");
            }
            // console.log("FAQ AA Tracking", searchInput.value);

            filterFAQs(searchInput.value);
        }

        const searchButtons = document.querySelectorAll('.trigger-search');
        searchButtons.forEach(button => {
            button.addEventListener('click', triggerSearch);
        });

        if (searchInput) {
            searchInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    triggerSearch();
                }
            });
        }

        if (clearButton) {
            clearButton.addEventListener('click', function (e) {
                e.preventDefault();
                searchInput.value = '';
                searchResults.innerHTML = '';
                const searchInfo = document.getElementById('search-info');
                if (searchInfo) {
                    searchInfo.textContent = '';
                }
                const seeMoreResults = document.getElementById('see-more-results');
                if (seeMoreResults) {
                    seeMoreResults.style.display = 'none';
                }
                toggleClearButtonVisibility();
            });
        }

        const seeMoreResults = document.getElementById('see-more-results');
        if (seeMoreResults) {
            seeMoreResults.addEventListener('click', function () {
                displayResults();
            });
        }
    }
});

// FAQ SIDE NAV - STICKY
document.addEventListener('DOMContentLoaded', function () {
    const faqMainWrapper = document.querySelector('.faq-main-wrapper');
    /* Checking for faq accordion with searchbox */
    if (faqMainWrapper) {

        function isVisible(element) {
            const style = window.getComputedStyle(element);
            return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        }

        const allFaqMainWrapper = document.querySelectorAll(".faq-main-wrapper");
        const pageHeader = document.querySelector('header.header');
        const megaMenuHeader = document.querySelector('.header-mega-menu');
        const mobileMenu = document.querySelector('nav.mega-menu-lg-down-container');

        allFaqMainWrapper.forEach((mainWrapper) => {

            const faqSideNav = mainWrapper.querySelector('.faq-topic-wrapper');
            const faqContent = mainWrapper.querySelector('.faq-content');

            function initFaqSticky() {
                const faqSideNavInner = faqSideNav.querySelector('ul');
                const faqSections = faqContent.querySelectorAll('.faq-section');

                const visibleSections = Array.from(faqSections).filter(isVisible);
                const faqContentInner = visibleSections[0];

                const faqSideNavY = faqContent.getBoundingClientRect().top;

                let pageHeaderVisibleHeight = pageHeader.offsetHeight + pageHeader.getBoundingClientRect().top;
                pageHeaderVisibleHeight = (pageHeaderVisibleHeight < 0) ? 0 : pageHeaderVisibleHeight;

                let megaMenuHeaderVisibleHeight = megaMenuHeader.offsetHeight + megaMenuHeader.getBoundingClientRect().top;
                megaMenuHeaderVisibleHeight = (megaMenuHeaderVisibleHeight < 0) ? 0 : megaMenuHeaderVisibleHeight;

                if (window.innerWidth >= 768) {
                    const faqSideNavInnerHeight = faqSideNavInner.offsetHeight;
                    const faqContentInnerHeight = faqContentInner.offsetHeight;

                    if (faqSideNavY < 0) {
                        if (faqSideNavInnerHeight < faqContentInnerHeight) {
                            const maxPadding = faqContentInnerHeight - faqSideNavInnerHeight - 10;

                            let newPadding = -faqContent.getBoundingClientRect().top + pageHeaderVisibleHeight + megaMenuHeaderVisibleHeight;
                            newPadding = (newPadding < 0) ? 0 : newPadding;
                            newPadding = (newPadding > maxPadding) ? maxPadding : newPadding;

                            faqSideNavInner.style.marginTop = newPadding + "px";
                        } else {
                            faqSideNavInner.style.marginTop = 0;
                        }
                    } else {
                        faqSideNavInner.style.marginTop = 0;
                    }

                } else {
                    if (mainWrapper.getBoundingClientRect().top < 0) {
					let newTop = mobileMenu.offsetHeight + mobileMenu.getBoundingClientRect().top;
					newTop = (newTop < 0) ? 0 : newTop;

					if (mobileMenu.classList.contains('headroom--pinned') && mainWrapper.getBoundingClientRect().top < 0){
					newTop = 51;
					}

					faqSideNav.classList.add('faq-scroll-fixed');
					faqSideNav.style.top = newTop + "px";
					} else {
					faqSideNav.classList.remove('faq-scroll-fixed');
					faqSideNav.style.top = '';
					}

                }

            }

            initFaqSticky();

            const allSideNavs = faqSideNav.querySelectorAll("a");
            allSideNavs.forEach((element) => {
                element.addEventListener("click", initFaqSticky);
            })

            const allAccordionButton = faqContent.querySelectorAll(".accordion-button");
            allAccordionButton.forEach((element) => {
                element.addEventListener("click", initFaqSticky);
            })

            window.addEventListener('scroll', initFaqSticky);
            window.addEventListener('resize', initFaqSticky);
        });
    }
});

// ** accordion search end

//CategoryPagefilter product-category-filter service-category-filter 
$(document).ready(function() {
   function getParameterByName(name) {
       let url = window.location.href;
       name = name.replace(/[\[\]]/g, "\\$&");
       let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
       let results = regex.exec(url);
       if (!results) return null;
       if (!results[2]) return '';
       return decodeURIComponent(results[2].replace(/\+/g, " "));
   }
   var filterValue = getParameterByName('filter');
  if (filterValue !== null) {
    $("#subCategoryFilter ul .btn-gradient-blue--active").removeClass("btn-gradient-blue--active");
    $('#subCategoryFilter ul li.dtm-button').each(function() {
         if ($(this).data('subcategory') === filterValue.replaceAll('-','')) {
           $(this).addClass('btn-gradient-blue--active');
         }
        });    
        $("#product-category-content").data("start",0);
      var subCategory = filterValue;
        if(subCategory == null || subCategory == "" || subCategory == "all"){
            subCategory = "";
        }
          callCategoryAjax(0, "true", subCategory);
  }
    $("#listingLoadMoreItems").click(function(t) {
        t.preventDefault();
        var max = $("#product-category-content").data("max");
        var start = $("#product-category-content").data("start") + max;
        $("#product-category-content").data("start",start);
      var subCategory = $("#product-category-content").data("subcategory");
        if(subCategory == null || subCategory == "" || subCategory == "all"){
            subCategory = "";
        }
        callCategoryAjax(start, "false", subCategory);
      });
    $("#subCategoryFilter ul li").click(function(t) {
        t.preventDefault();
      $("#subCategoryFilter ul .btn-gradient-blue--active").removeClass("btn-gradient-blue--active");
      $(this).addClass("btn-gradient-blue--active");
        $("#product-category-content").data("start",0);
      var subCategory = $(this).attr("data-subcategory");
        if(subCategory == null || subCategory == "" || subCategory == "all"){
            subCategory = "";
        }
          callCategoryAjax(0, "true", subCategory);
        
   	 });
	});
function callCategoryAjax(start, subCatFun, subCategory){     
  		var currentPage = location.href;
  		var locale = currentPage.split('/')[3];  		
		var ajaxUrl = $("#product-category-content").data("liveurl");
  		if(currentPage.includes("/business/")){
           ajaxUrl = ajaxUrl.replace("/revamp", "");
         }
		   ajaxUrl = ajaxUrl.replace("/revamp/uobtravel", "");
           ajaxUrl = ajaxUrl.replace("/revamp/uobam", "");
  		   ajaxUrl = ajaxUrl.replace("/revamp/uobvm", "");
           ajaxUrl = ajaxUrl.replace("/revamp/uobaminvest", "");
           ajaxUrl = ajaxUrl.replace("/revamp/uoi", "");
  		if(locale == 'iw-preview' ){
          ajaxUrl = $("#product-category-content").data("previewurl");
        }
		var max = $("#product-category-content").data("max");
        var dctInfo = $("#product-category-content").data("dctinfo");
        var categoryName = $("#product-category-content").data("category");
		var total = $("#product-category-content").data("total");
  		
  		var postData = {
        	"categoryName" : categoryName,
          	"dctInfo" : dctInfo       
        };
  		if(max != null && max != "" && max != undefined){
          postData["MaximumNumberOfBlocks"] = max;
        }else{
          postData["MaximumNumberOfBlocks"] = "6";
        }
  		if(start != undefined){
          postData["start"] = start
        }else{
          postData["start"] = "0";
        }
  		if(subCategory != null && subCategory != "" && subCategory != undefined){
          postData["subCategory"] = subCategory.toString().replace(/[&\/\\#-+()$~%.'":*?<>{},-]/g,'');
        }
  
  
		$.ajax({
			type: "POST",
			url: ajaxUrl,
			data : postData,
			dataType:"html",
			beforeSend:function(){
				$('.loading-graphic').show();
			},
			success:function(data){
              var responseDiv = $('<div />').append(data).find("#product-category-content").html();
               if (responseDiv !== "") {
                 if(subCatFun == "false"){
                   $("#product-category-content").append(responseDiv);
                 }else{
                   responseDiv = $('<div />').append(data).find("#product-category-content").prop('outerHTML')
                   $("#product-category-content").replaceWith(responseDiv);
                   total = $('<div />').append(data).find("#product-category-content").data("total");
                   $("#product-category-content").data("total",total);
                   $("#product-category-content").attr("data-subcategory", subCategory);
                 }
                 $('.loading-graphic').hide();
           		}
              
              if(start + max >= total ){
					$("#listingLoadMoreItems").addClass("d-none");
            }else{
          $("#listingLoadMoreItems").removeClass("d-none");
        }
              if (typeof getConfigValues === 'function') {
              	getConfigValues();
              }
              categorySeeMoreLess();
              initVideoButtonFilterComponent();
			},
			error:function(error){
				console.log("error"+error);
			}    
		});
  
}
function initVideoButtonFilterComponent(){
	let youtubeVideo = document.querySelectorAll('[id^="video-"]');
	
		function setClickHandler(id, fn) {
			if (document.getElementById(id)) {
				document.getElementById(id).onclick = fn;
			}
		}

		youtubeVideo.forEach((a) => {
			
			setClickHandler(a.getAttribute("id"), function(e) {
				e.preventDefault();
				var element = document.getElementById(a.getAttribute("id"));
				~element &&
					BigPicture({
						el: element,
						ytSrc: element.getAttribute("ytsrc"),
					});
			});
		});
}
function categorySeeMoreLess(){
  $(".category-page-filter .content").each(function () {
    
		if(seeMoreCharacterLimit != "")
		{
			var content = $(this);
			var productcardtitle = content.parents('.card-body').find('h4.card-title').html();
			var originalContent = content.parents('.card-body').find('.fullDesc').val(); // Store the original HTML content
			//var shortTextUL = content.find('ul').empty();
			var contentText = content.text();
			
			if (originalContent.length > parseInt(seeMoreCharacterLimit)) {
				var shortText = "";
				seeMoreCharacterLimit = parseInt(seeMoreCharacterLimit);
				shortText = truncateHTML(originalContent, seeMoreCharacterLimit);
			  shortText = shortText.trimEnd().replace(/.$/gi, "");
			var longText = contentText;

			content.empty().append('<p class="paragraph reduced">'+shortText +'</p>');
            content.append('<a href="#" class="dtm-link see-more" anchor_name="'+productcardtitle+':See more">See more</a>');
			}
			content.on("click", ".see-more", function (e) { 
			  e.preventDefault();
			  content.parents('.category-item').find('.card').addClass('h-100');
			  originalContent = content.parents('.card-body').find('.fullDesc').val();
			  content.empty().append(originalContent);
			  content.append('<a href="#" class="dtm-link see-less" anchor_name="'+productcardtitle+':See less">See less</a>');
			   
			});
		  content.on("click", ".see-less", function (e) { 
			  e.preventDefault();
			  originalContent = content.parents('.card-body').find('.fullDesc').val();
			  shortText = truncateHTML(originalContent, seeMoreCharacterLimit);
			  content.empty().append('<p class="paragraph reduced">'+shortText +'</p>');
             content.append('<a href="#" class="dtm-link see-more" anchor_name="'+productcardtitle+':See more">See more</a>');
			});
	
		}
    
	});
	var t = [],
	e = 4;

	function i(t, interval) {
		t.each(function() {
			var $t = $(this);
			var e = $t.find(".tile-card-slide:visible .carousel-item").length - 1;
			if (e) {
				$t.find(".tile-card-slide .carousel-control-next").removeClass("invisible");
				var c = $t.find(".tile-card-slide .carousel");
				if (c.length && !c.hasClass('carousele-initialized')) {
					var _interval = c.data('interval') ? parseInt(c.data('interval')) : (c.data('bs-interval') ? parseInt(c.data('interval')) : (interval ? interval : 4000));
					c.addClass('carousele-initialized').carousel({
						interval: _interval,
						wrap: true
					}).on("slide.bs.carousel", function(i) {
						0 == i.to ?
							($t.find(".carousel-control-prev").addClass("invisible"),
								$t.find(".carousel-control-next").removeClass("invisible")) :
							i.to == e ?
							($t.find(".carousel-control-prev").removeClass("invisible"),
								$t.find(".carousel-control-next").addClass("invisible")) :
							($t.find(".carousel-control-prev").removeClass("invisible"),
								$t.find(".carousel-control-next").removeClass("invisible"));
					});
				}
			}
		});
	}

	function s(t) {
		return t ?
			(console.log(t),
				'<div class="compare-box-container fill"><div class="inner-close-btn"><img src="/assets/web-resources/personal/images/common/icons/icons-exit-blue.svg"></div><div class="compare-box rounded-10"><img class="img-stretch card-img" src="' +
				t.img +
				'"> </div><div class="subtitle mt-3">' +
				t.title +
				'</div><div class="card-id d-none">' +
				t.id +
				"</div></div>") :
			'<div class="compare-box-container"><div class="inner-close-btn"><img src="../assets/iwov-resources/assets/Icons/icons-exit-blue.svg"></div><div class="compare-box rounded-10"></div><div class="subtitle mt-3"></div><div class="card-id d-none"></div></div>';
	}

	function n() {
		for (var i = "", n = 0; n < e; n++)
			if (0 < t.length)
				for (var o = 0; o < t.length; o++) {
					if (n > t.length - 1) {
						i += s();
						break;
					}
					if (n == o) {
						i += s(t[o]);
						break;
					}
				}
		else i += s();
		$(".compare-overlay .container").empty().append(i);
	}

	function o() {
		var t,
			e = ((t = 3), 576 <= $(window).width() && (t = 6), t),
			i = $(".category-page-filter")
			.find(".category-items")
			.children(".category-item")
			.filter(function(t, e) {
				return !$(e).hasClass("hiden-filter");
			});
		/**if (i.length > e) {
			for (var s = 0; s < i.length; s++)
				e < s + 1 && $(i[s]).addClass("hiden-other");
			(t = parseInt(i.length - e)),
			$(".category-page-filter .more-btn").removeClass("d-none"),
				$(".category-page-filter .more-btn .btn__num").text(t);
		} else $(".category-page-filter .more-btn").addClass("d-none");**/
	}


	function r(t) {
		return t.toLowerCase().replace(/\s*/g, "");
	}
	$(window).width() < 768 && (e = 2),
		$(".carousel-item-flex:empty").parent("div").remove(),
		$(".try-figure-out,.tile-card-slide").each(function() {
			i($(this), 3600000);
		}),
		$(".bank-beyond-save").each(function() {
			i($(this));
		}),
		o(),
		$(".category-page-filter .filter-list").on("click", "li", function() {
			var t, e;
			var elementId = $(this)[0] ? $(this)[0].id : '';
			var buttonElement = $(this).attr('button_name');
			$(".category-page-filter .filter-list li").removeClass(
					"btn-gradient-blue--active"
				),
				$(this).addClass("btn-gradient-blue--active"),
				(t = $(this).text()),
				(e = r(t)),
				$(".category-page-filter")
				.find(".category-items")
				.children(".category-item")
				.filter(function(t, i) {
					return (
						$(i).removeClass("hiden-filter").removeClass("hiden-other"),
						(0 === e.indexOf('all') || buttonElement.indexOf('all') !== -1 || elementId == ('all-cat-filter')) ?
						($(".category-page-filter")
							.find(".category-items")
							.children(".category-item")
							.removeClass("hiden-filter")
							.removeClass("hiden-other"),
							o(),
							!0) :
						r($(i).find(".card .card-subtitle").text()) === e ||
						($(i).addClass("hiden-filter"), !1)
					);
				}),
				o(),
				$("body,html").animate({
						scrollTop: $(".category-page-filter .category-items").offset().top - 50,
					},
					300
				);
		}),
		$(".category-page-filter .more-btn").click(function() {
			$(".category-page-filter .category-items .category-item").removeClass(
					"hiden-other"
				),
				$(this).addClass("d-none");
		}),
		$(".category-page-filter .compare-btn").click(function() {
			var i,
				s = {},
				o = (a = $(this).closest(".category-item").find(".card"))
				.find(".card-img-top")
				.attr("src"),
				r = a.find(".card-body .card-id").text(),
				a = a.find(".card-body .card-title").text();
			(s.img = o),
			(s.id = r.replace("'", "_")),
			(s.title = a),
			t.length < e &&
				((i = s.id),
					!(
						0 <
						t.filter(function(t) {
							return t.id == i;
						}).length
					)) &&
				t.push(s),
				$(".compare-overlay").hasClass("opacity-0") &&
				$(".compare-overlay")
				.removeClass("opacity-0")
				.addClass("opacity-1"),
				n();
		}),
		$(".compare-overlay .close-btn").on("click", function() {
			(t.length = 0),
			$(".compare-overlay").removeClass("opacity-1").addClass("opacity-0");
		}),
		$(".compare-overlay .compare-box-btn").on("click", function() {
			var e = t.map(function(t) {
					return t.id;
				}),
				i = $(this).attr("data-href");
			window.location.href = i + "compare=" + e;
			dataElement.event_name = "compare-prod";
			dataElement.click_name = "compare accounts";
			dataElement.component_name =
				getPageName(location.href) + "/compare-accounts";
			dataElement.product_compared = e.join();
			_satellite.track("component_action");
			console.log("dataelement: ", dataElement);
		}),
		$(".compare-overlay").on("click", ".inner-close-btn", function() {
			var e,
				i = $(this).siblings(".card-id").text();
			(e = i),
			(t = t.filter(function(t) {
				return t.id != e;
			})),
			n();
		});
}
//CategoryPagefilter product-category-filter service-category-filter
/* July 2024 CR end */
//Fix for the sme landing sticky section
var sme_hub_landing_masthead_buttons_list = $(".sme-hub-landing-masthead-buttons a");
for(var i = 0; i < sme_hub_landing_masthead_buttons_list.length; i++){
    console.log($(sme_hub_landing_masthead_buttons_list[i]).attr("href"));
	var first_sme_hub_parameter = $(sme_hub_landing_masthead_buttons_list[i]).attr("href");
	
	if(first_sme_hub_parameter.charAt(0)=="#"){
		$(sme_hub_landing_masthead_buttons_list[i]).attr("target-section",first_sme_hub_parameter);
		$(sme_hub_landing_masthead_buttons_list[i]).attr("href","javascript:;;");	
	}
}

$(".sme-hub-landing-masthead-buttons a").click(function(){
	var target = $(this).attr("target-section");
	console.log(target);

		var offset0 = $('#header').height()*1.5;
		var offset1 = $('#header .navbar').height();
		var offset2 = $('#pd-anchor-link').height();
		var offset;


		if(typeof offset0 === "undefined"){
			offset0=0;
		}
		if(typeof offset2 === "undefined"){
			offset2=0;
			offset = offset0 + offset1 + offset2;
		}else{
			offset = offset1 + offset2;
		}
	
			
			 $('html, body').animate({
		scrollTop: eval($($(this).attr('target-section')).offset().top - offset)
	}, 100);
});

//End Fix for the sme landing sticky section

//Fix cnit icon on mobile when the page contain sticky bottom
if($("#article-promotion-banner-div").length > 0) {
  let isMobileDevice = window.matchMedia("only screen and (max-width: 760px)").matches;
  if (isMobileDevice) {
        $(".fab-float-icon-cont").css("bottom","80px");
    }
}

// quote-and-image component start

$('.quote-and-image-carousel').each(function(){
    var $this = $(this);
    var dots = false;
    var infinite = false;
    var autoplay =  false;
    if($this.find('.quote-card').length > 1){
        dots = true;
        infinite = true;
        autoplay =  true;
        $this.closest('.iw_component').find('.quote-and-image-carousel-controls').addClass('has-control')
    }
    if($this.data('infinite') !== undefined && $this.data('infinite') !== null){
        infinite = $this.data('infinite')
    }
    $this.slick({
        dots: dots,
        infinite: infinite,
        appendArrows: $this.closest('.iw_component').find('.quote-and-image-carousel-controls'),
        appendDots: $this.closest('.iw_component').find('.quote-and-image-carousel-controls .dots'),
        prevArrow: '<button type="button" class="slick-prev"><img class="" aria-hidden="true" src="/assets/iwov-resources/assets/Icons/icons-chevron-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="" aria-hidden="true" src="/assets/iwov-resources/assets/Icons/icons-chevron-right.svg"></button>',
        draggable: false,
        autoplay: autoplay,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        pauseOnDotsHover: true
    })
})

/* 
// <!--smooth Scroll FOR Promotion detail banner-->
function scrollNav() {
	$(".down-arrow-icon").click(function () {
		//Animate
		$("html, body")
			.stop()
			.animate(
				{
					scrollTop: $($(this).attr("href")).offset().top - 38,
				},
				400
			);
		return false;
	});
	$(".scrollTop a").scrollTop();
}
scrollNav();
// <!--close smooth Scroll--> 
*/

// <!-- //FUNCTION TO GET YOUTUBE POPUP VIDEO FROM MODALBOX -->
autoPlayYouTubeModal();
function autoPlayYouTubeModal() {
	var trigger = $("body").find('[data-toggle="modal"]');
	trigger.click(function () {
		var theModal = $(this).data("target"),
			videoSRC = $(this).attr("data-theVideo"),
			videoSRCauto = videoSRC + "?autoplay=1";
		$(theModal + " iframe").attr("src", videoSRCauto);
		$(theModal + " button.close").click(function () {
			$(theModal + " iframe").attr("src", videoSRC);
		});
	});
}


$("#carousel-col-7").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-col-7 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carousel-col-7 .carousel-control-prev").removeClass("invisible");
		$("#carousel-col-7 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-7 .carousel-control-prev").addClass("invisible");
		$("#carousel-col-7 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-7 .carousel-control-next").removeClass("invisible");
		$("#carousel-col-7 .carousel-control-prev").removeClass("invisible");
	}
});

$("#carousel-col-5").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-col-5 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carousel-col-5 .carousel-control-prev").removeClass("invisible");
		$("#carousel-col-5 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-5 .carousel-control-prev").addClass("invisible");
		$("#carousel-col-5 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carousel-col-5 .carousel-control-next").removeClass("invisible");
		$("#carousel-col-5 .carousel-control-prev").removeClass("invisible");
	}
});

$("#carousel-6-cols").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-6-cols .carousel-item').length;
	if (t.to == carousel_length - 1) {
		$("#carousel-6-cols .carousel-control-prev").removeClass("invisible");
		$("#carousel-6-cols .carousel-control-next").addClass("invisible");
	}

	else if (t.to == 0) {
		$("#carousel-6-cols .carousel-control-prev").addClass("invisible");
		$("#carousel-6-cols .carousel-control-next").removeClass("invisible");
	}
	else {
		$("#carousel-6-cols .carousel-control-next").removeClass("invisible");
		$("#carousel-6-cols .carousel-control-prev").removeClass("invisible");
	}

})
$("#carousel-4-cols").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carousel-4-cols .carousel-item').length;
	if (t.to == carousel_length - 1) {
		$("#carousel-4-cols .carousel-control-prev").removeClass("invisible");
		$("#carousel-4-cols .carousel-control-next").addClass("invisible");
	}

	else if (t.to == 0) {
		$("#carousel-4-cols .carousel-control-prev").addClass("invisible");
		$("#carousel-4-cols .carousel-control-next").removeClass("invisible");
	}
	else {
		$("#carousel-4-cols .carousel-control-next").removeClass("invisible");
		$("#carousel-4-cols .carousel-control-prev").removeClass("invisible");
	}

})


function showAllCat() {
	$(".Marketplace-go-digital .row .text-center").show();
	$("#show-more-cat").attr("style", "display: none!important;");
}

// function showAllSol() {
// 	$(".app-listing .container .col-md-4").show();
//   	$("#show-more-solution").attr("style", "display: none!important;");
// }

$(document).ready(function () {

	$(document).on("click", "#copyUrl", function (e) {
		$("body").append('<input id="copyLink" type="text" value="" />');
		$("#copyLink").val(window.location.href).select();
		document.execCommand("copy");
		$("#copyLink").remove();
		$(this).attr("data-original-title", "Copied!");
		$(this).tooltip("dispose").tooltip("show");
	});

	//Fix start BBX-7242 
	$("#carouselExampleIndicators").on("slid.bs.carousel", function (t) {
		var carousel_length = $("#carouselExampleIndicators .carousel-item").length;
		if (t.to == carousel_length - 1) {
			$("#carouselExampleIndicators .carousel-control-prev").removeClass("invisible");
			$("#carouselExampleIndicators .carousel-control-next").addClass("invisible");
		} else if (t.to == 0) {
			$("#carouselExampleIndicators .carousel-control-prev").addClass("invisible");
			$("#carouselExampleIndicators .carousel-control-next").removeClass("invisible");
		} else {
			$("#carouselExampleIndicators .carousel-control-next").removeClass("invisible");
			$("#carouselExampleIndicators .carousel-control-prev").removeClass("invisible");
		}
	});

	$('#data-slide_0, #data-slide_1, #data-slide_2,#data-slide_3,#data-slide_4').hide();
	var noOfCards = $(".campaign-component-insights-card1").children().length / 3;
	var divId = '';
	if (noOfCards > 1) {
		for (let i = 0; i < noOfCards; i++) {
			divId = "#data-slide_" + i;
			if (i < 5)
				$(divId).show();
		}
	}


	$("#carouselExampleIndicators").carousel();

	if ($(window).width() < 768) {
		if ($(".campaign-component-banking-features-card").length > 3) {
			$(".show-more-button span").text(
				$(".campaign-component-banking-features-card").length - 3
			);
			$(".show-more-button").off("click");
			for (
				let i = 3;
				i < $(".campaign-component-banking-features-card").length;
				i++
			) {
				$(".campaign-component-banking-features-card").eq(i).hide();
			}

			$(".show-more-button").on("click", function () {
				for (
					let i = 3;
					i < $(".campaign-component-banking-features-card").length;
					i++
				) {
					$(".campaign-component-banking-features-card").eq(i).show();
				}
				$(this).hide();
			});
		}
	}
	//Fix END BBX-7242 

});


function openShareDialog(url, title, w, h) {
	var left = (screen.width / 2) - (w / 2);
	var top = (screen.height / 2) - (h / 2);
	dialog = window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
	if (window.focus) { dialog.focus() }
}

$(document).ready(function () {
	$(".media-body li").bind("click", function (e) {
		var url = "";
		var share_link = document.location.href;
		var share_title = document.title;
		var w = 700;
		var h = 400;
		/* BBX-11334 START */
		var header1Text = encodeURIComponent($('h1').text());
		var alink = $(this).closest("a").attr("href");
		var atitle = $(this).closest("a").attr("data-title");

		if (alink && alink != "") share_link = alink;
		if (atitle && atitle != "") share_title = atitle;


		if ($(this).hasClass("whatsapp")) {
			url = "whatsapp://send?text=" + share_link;
			if (url != "") openShareDialog(url, header1Text, w, h);
		}
		else if ($(this).hasClass("linkedin")) {
			url = "https://www.linkedin.com/sharing/share-offsite/?url=" + share_link;
			if (url != "") openShareDialog(url, header1Text, w, h);
		} else if ($(this).hasClass("email")) {
			url = "mailto:?";
			url += "subject=" + header1Text;
			url += "&body=" + "Hi, I think you might be interested in this " + share_link;
			window.location.href = url;
		}
		/* BBX-11334 END */
	});
});

$(".dropdown-label").click(function () {
	$(this.parentNode).toggleClass("open");
});

$(".drpdowm").click(function () {
	$(this).toggleClass("open");
});
function checkboxDropdown(el) {
	var $el = $(el);

	function updateStatus(label, result) {
		// if(!result.length) {
		//   label.html('Select Options');
		// }
	}

	$el.each(function (i, element) {
		var $list = $(this).find(".dropdown-list"),
			$label = $(this).find(".dropdown-label"),
			$checkAll = $(this).find(".check-all"),
			$inputs = $(this).find(".check"),
			defaultChecked = $(this).find("input[type=checkbox]:checked"),
			result = [];

		updateStatus($label, result);
		if (defaultChecked.length) {
			defaultChecked.each(function () {
				result.push($(this).next().text());
				$label.html(result.join(", "));
			});
		}

		$label.on("click", () => {
			$(this).toggleClass("open");
		});

		$checkAll.on("change", function () {
			var checked = $(this).is(":checked");
			var checkedText = $(this).next().text();
			result = [];
			if (checked) {
				$inputs.prop("checked", false);
			} else {
				if (!checked) {

				}

			}
			updateStatus($label, result);
		});

		$inputs.on("change", function () {
			var checked = $(this).is(":checked");
			var checkedText = $(this).next().text();
			if ($checkAll.is(":checked")) {
				result = [];
			}
			// var ss=  result.filter(f=>f=="Categories" || f=="Solution Types")
			// if(ss.length>0){
			//   result.splice(0,1)
			// }
			if (checked) {
				result.push(checkedText);
				// $label.html(result.join(", "));
				$checkAll.prop("checked", false);
			} else {
				let index = result.indexOf(checkedText);
				if (index >= 0) {
					result.splice(index, 1);
				}
				if (result.length == 0) {
					result.splice(index, 1);
					if (!checked) {
						// if(this.parentNode.parentNode.parentNode.id=="data0"){
						//   result.push("Solution Types");
						// }
						// if(this.parentNode.parentNode.parentNode.id=="data1"){
						//   result.push("Categories");
						// }
						// if(this.parentNode.parentNode.parentNode.id=="data2"){
						//   result.push("Solution Types");
						// }
					}
				}
				result = [];
				// if(this.parentNode.parentNode.parentNode.id=="data0"){
				//   result.push("Solution Types");
				// }
				// if(this.parentNode.parentNode.parentNode.id=="data1"){
				//   result.push("Categories");
				// }
				// if(this.parentNode.parentNode.parentNode.id=="data2"){
				//   result.push("Solution Types");
				// }
				// $label.html(result);
			}
			updateStatus($label, result);
		});

		$(document).on("click touchstart", (e) => {
			if (!$(e.target).closest($(this)).length) {
				$(this).removeClass("open");
			}
		});
	});
}

checkboxDropdown(".dropdown");

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.width = "0%";
}

$(function () {
	$('[data-toggle="popover"]').popover()
})




const $appListContainer = $(".app-listing .list-items");
const $noResultElement = $(".app-listing .app-listing-not-found");

$(".app-listing-search #query").on("keydown", "form", function (event) {
	console.log("event :>> ", event.key);
	return event.key != "Enter";
});

$(".app-listing-search #query").on("keypress", function (e) {
	if (e.which == 13) {
		let searchText = $(".app-listing-search #inpage-search-box")
			.val()
			.trim()
			.toLowerCase();
		let searchResultCount = 0;

		$(".app-listing .app-listing-details").each(function (_index, element) {
			const title = $(element).find(".text-link").text().toLowerCase();
			const $nearestCard = $(element).closest(".col-12");

			if (!title.includes(searchText)) {
				$nearestCard.hide();
			} else {
				searchResultCount++;
				$nearestCard.show();
			}
		});

		$(".app-listing").get(0).scrollIntoView();

		if (searchResultCount == 0) {
			handleZeroResults();
		} else {
			handleSearchResults(searchResultCount);
		}
		return false;
	}
});

function handleZeroResults() {
	$appListContainer.hide();
	$noResultElement.addClass("d-flex").show();
	$(".app-listing .footer-button").closest(".row").hide();
}

function handleSearchResults(searchResultCount) {
	$appListContainer.show();
	$noResultElement.removeClass("d-flex").hide();

	handleShowMoreButton(searchResultCount);
}

function handleShowMoreButton(searchResultCount) {
	const $footerButton = $(".app-listing .footer-button");

	$footerButton.closest(".row").hide();

	if (searchResultCount > 9) {
		const remainingCards = searchResultCount - 9;

		$footerButton.closest(".row").show();
		$footerButton.text(`Show more digital solutions (${remainingCards})`);

		$(".app-listing .app-listing-details").each(function (_index, element) {
			$(element).closest(".col-12").show();

			if (_index >= 9) {
				$(element).closest(".col-12").hide();
			}
		});
	}
}

$(".app-listing-search .icon-close").click(function () {
	const count = $(".app-listing .app-listing-details").length;

	if (count > 9) {
		handleSearchResults(count);
	} else {
		$appListContainer.show();
		$noResultElement.removeClass("d-flex").hide();

		$(".app-listing .app-listing-details").each(function (_index, element) {
			$(element).closest(".col-12").show();
		});
	}
});

function displayPopoverIcons($itemList) {
	$itemList.children().each(function () {
		const solutionTypes = $(this).find(".popover-icons .d-none").text().split(",");
		let popoverIcons = "";

		if (solutionTypes.length > 0) {
			solutionTypes.forEach((solType) => {
				console.log(`solType`, solType)
				const imgPath = $(`.ps-details-masthead span.tooltip-area:contains("${solType.trim()}")`).find("img.d-none").attr("src");

				if (imgPath && solType) {
					popoverIcons += `<img src="${imgPath}" class="img-fluid" />`
				}
			})
		}

		$(this).find(".popover-icons").html(popoverIcons)
	})
}

/* Marketplace apps Closed*/

$(document).ready(function () {
	let displayedelements = $("div[name='start-digital-card-item']");

	$("button[name='show-more-start-digital-btn']")
		.children("span")
		.text(displayedelements.length - 3);

	for (let i = 3; i < displayedelements.length; i++) {
		$(displayedelements[i]).hide();
	}

	$("button[name='show-more-start-digital-btn']").click(function () {
		for (let i = 3; i < displayedelements.length; i++) {
			$(displayedelements[i]).show();
		}

		$(this).hide();
	});

	displayPopoverIcons(displayedelements);

	if (displayedelements.length === 0) {
		$(".category-page-filter .digital-solution-not-found").show();
		$("button[name='show-more-start-digital-btn']").hide();
	} else {
		$(".category-page-filter .digital-solution-not-found").hide();
	}

	$("#start-digital-filter-list li").on("click", function () {
		displayedelements = [];

		selected = this.id;
		let selectedValue = $(this)
			.html()
			.toLowerCase()
			.trim();

		$("div[name='start-digital-card-item']").each(function (index, item) {
			// let arrayOfItems = $(item)
			//   .find(".start-digital-hidden-element")
			//   .text()
			//   .trim()
			//   .split(",");

			// if (checkIfCategories(arrayOfItems, selectedValue)) {

			if (
				selectedValue ===
				$(item)
					.find("h5")
					.text()
					.toLowerCase()
			) {
				displayedelements.push(item);
				$(item).show();
			} else if (selected === "allsolutions") {
				displayedelements.push(item);
				$(item).show();
			} else {
				$(item).hide();
			}
		});

		if (displayedelements.length > 3) {
			$("button[name='show-more-start-digital-btn']").show();
			$("button[name='show-more-start-digital-btn']")
				.children("span")
				.text(displayedelements.length - 3);

			for (let i = 3; i < displayedelements.length; i++) {
				$(displayedelements[i]).hide();
			}
		} else {
			$("button[name='show-more-start-digital-btn']").hide();
		}

		if (displayedelements.length === 0) {
			$(".category-page-filter .digital-solution-not-found").show();
		} else {
			$(".category-page-filter .digital-solution-not-found").hide();
		}
	});
});




/* BX-4123 START */
$(document).ready(function () {
	$(".price-plan .category").click(handleCategoryClick);
	setCTAWrapperPosition();
});
function handleCategoryClick(event) {
	const category = event.target.getAttribute("data-category");
	const $currentCategoryElements = $(
		`.price-plan [data-category-plan='${category}']`
	);
	$(".price-plan .category").removeClass("btn-gradient-blue--active");
	$(this).addClass("btn-gradient-blue--active");
	$(".price-plan .plans-wrapper .plan-section").addClass("hide-card");
	$currentCategoryElements.removeClass("hide-card");
}
function setCTAWrapperPosition() {
	let maxCTAAreaHeight = 48;
	if (window.screen.availWidth >= 992) {
		$(".price-plan .plan-section .bottom-area").each(function (index) {
			const containerHeight = $(this).height();
			if (containerHeight > maxCTAAreaHeight) {
				maxCTAAreaHeight = containerHeight;
			}
		});
		$(".price-plan .plan-section .bottom-area").css({
			"flex-basis": maxCTAAreaHeight,
		});
	}
}
/* BX-4123 END */

/* BX-4124 START */

const mobileScreenSize = 768;

$(document).ready(function () {
	handleShowMoreBtn();
	$(".features-enterpryze .row .col").click(handleCardColClick);
});

function handleShowMoreBtn() {
	const isMobile = window.screen.availWidth <= mobileScreenSize;
	const $cardsColElement = $(".features-enterpryze .row .col");
	const count = $cardsColElement.length;

	if (isMobile && count > 3) {
		$(".features-enterpryze .show-more-btn").click(showMoreFeatures);
		$(".features-enterpryze .button-row.show-more").removeClass("hide-row");
		showRemainingFeaturesCount(count);
		showInitialFeatures();
	} else {
		$cardsColElement.css({ display: "flex" });
	}

	$cardsColElement.each(function (index) {
		const $cardElement = $(this).find("a");
		const hrefValue = $cardElement.attr("href");

		if (!hrefValue) {
			$cardElement.css({ cursor: "initial" });
		}
	});
}

function showInitialFeatures() {
	const $cardsColElement = $(".features-enterpryze .row .col");

	$cardsColElement.each(function (index) {
		if (index < 3) {
			$(this).css({ display: "flex" });
		}
	});
}

function showMoreFeatures() {
	$(".features-enterpryze .row .col").css({ display: "flex" });
	$(this).parent(".show-more").hide();
}

function handleCardColClick(event) {
	const urlValue = $(this).find("a").attr("href");

	if (!urlValue) {
		event.preventDefault();
	}
}

function showRemainingFeaturesCount(count = 0) {
	const remainingCount = count - 3;

	$(".features-enterpryze .show-more-btn").append(`(${remainingCount})`);
}

/* BX-4124 END */

/* BX-5030 START */

$(".tooltip-area").click(function () {
	let $targetElement = $(this);
	$(".tooltip-area .popover-body").each(function (index) {
		$tooltipElement = $($(".tooltip-area")[index]);

		if ($tooltipElement.is($targetElement)) {
			$targetElement.find(".popover-body").toggleClass("show");
		} else {
			$tooltipElement.find(".popover-body").removeClass("show");
		}
	});
});

/* BX-5030 END */

/* BX-784 START */
$(document).ready(() => {
	let $header = $(".promotion-details.blue-bg .uob-h1");
	let $subtitle = $(".promotion-details.blue-bg .sub-title");
	const trimmedHeader = $header.text().trim().substr(0, 100);
	const trimmedSubtitle = $subtitle.text().trim().substr(0, 240);

	$header.text(trimmedHeader);
	$subtitle.text(trimmedSubtitle);
});
/* BX-784 END */

/* Remove Header & Footer START */
function getWebViewCookie() {
	return (document.cookie?.split('; ')
		?.find(row => row.startsWith('webview='))
		?.split('=')[1]) ?? "";
}

$(document).ready(() => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const webview = urlParams.get('webview')
	const webviewCookie = getWebViewCookie();

	if (webview === 'Y' || webviewCookie === 'Y') {
		document.getElementById("header")?.remove();
		document.getElementById("home-mega-menu")?.remove();
		document.getElementById("home-footer")?.remove();
		document.getElementsByClassName("breadscrum")[0]?.remove();
	}

	if (!webviewCookie && webview === 'Y') {
		document.cookie = "webview=Y;";
	}
});
/* Remove Header & Footer END */

/* BBX-2999 START */
$(".category-page-filter .filter-list .slick-track").ready(() => {
	let totalWidth = 0;
	let expectedEndTranslateXValue = 0;
	let $listElements = $(".category-page-filter .filter-list .slick-track li");
	let filterWrapperWidth = $(".category-page-filter .filter-list").width();
	let listElementsCount = $listElements.length;
	const marginRightSpace = 10;
	let totalMarginWidth = (listElementsCount - 1) * marginRightSpace;

	$listElements.each(function () {
		totalWidth += $(this).outerWidth();
	});
	expectedEndTranslateXValue = (totalWidth - filterWrapperWidth + totalMarginWidth) * -1;

	function getTranslate3d(el) {
		var values = el.style.transform.split(/\w+\(|\);?/);
		if (!values[1] || !values[1].length) {
			return [];
		}
		return values[1].split(/,\s?/g);
	}

	$(".category-page-filter .filter-list").on("touchend", function () {
		const $slickTrack = $(this).find(".slick-track");
		const translateXValue = getTranslate3d($slickTrack[0])[0].split("px")[0];
		const lastElementWidth = $slickTrack.find("li").last().width();

		if (translateXValue < expectedEndTranslateXValue + 100 && translateXValue > expectedEndTranslateXValue) {
			setTimeout(() => {
				$slickTrack.css({
					transform: `translate3d(${expectedEndTranslateXValue}px, 0px, 0px)`,
				});
			}, 400);
		}
	});
});
/* BBX-2999 END */

/* BBX-9661 START */

$(".category-page-filter .no-slider").ready(() => {
	$(".category-page-filter .no-slider").on("click", "li", function () {
		$(".category-page-filter .no-slider li").removeClass("btn-gradient-blue--active"), $(this).addClass("btn-gradient-blue--active");
	});
});

/* BBX-9661 END */

/* START BBX-9961 */

$(".hero-image-text .col-12.col-lg-5 h1").ready(function () {
	const $currentElement = $(".hero-image-text .col-12.col-lg-5 h1");
	const $parentDiv = $(".hero-image-text");
	const $columnElement = $(".hero-image-text .col-12.col-lg-5");

	if ($currentElement.text().trim().length === 0 && $parentDiv.children().length === 1 && $columnElement.children().length === 1) {
		$parentDiv.remove();
	}
});

/* END BBX-9961 */

/* START BBX-8034 */

$(".bb-two-col-tile-stack .card .card-body").ready(function () {
	$(".bb-two-col-tile-stack .card .card-body").css("height", "100%");
});
$(".bb-3-col-tile-slider-no-border .carousel-item .card-body").ready(function () {
	setTimeout(() => {
		$(".bb-3-col-tile-slider-no-border .carousel-item .card-body").css("height", "100%");
	}, 500);
});

let resizeCard;
$(window).resize(function () {
	clearTimeout(resizeCard);
	resizeCard = setTimeout(function () {
		$(".bb-two-col-tile-stack .card .card-body").animate({ height: "100%" }, 1000);
		$(".bb-3-col-tile-slider-no-border .carousel-item .card-body").animate({ height: "100%" }, 1000);
	}, 1500);
});

/* END BBX-8034 */

/* BBX-4503 START */

$(".redirect-section .go-back").on("click", function (event) {
	event.preventDefault();
	history.back();
});

$(".redirect-section .proceed-btn").on("click", function (event) {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const reURL = urlParams.get("reURL");

	window.location.href = reURL;
});

/* BBX-4503 END */

/* BBX-7249 START */
function showMore() {
	console.log("show more clicked");
}

$(".basics-of-app-container #showmore").click(function (e) {
	$(this).closest(".row").find(".col-12").css("display", "initial");
	$(this).hide();
})
/* BBX-7249 END */

/* BBX-10877 START */
$('.custom-select').ready(function () {
	if ($(".custom-select")[0] && !$(".select-items")[0] && performance.navigation.type != performance.navigation.TYPE_RELOAD) {
		location.reload();
	}
});
/* BBX-10877 END */

/* BBX-7242 START */
$("#carouselExampleIndicators").ready(() => {
	if ($("#carouselExampleIndicators .carousel-inner .carousel-item").length == 1) {
		$("#carouselExampleIndicators .carousel-wrapper").hide()
	}
})
/* BBX-7242 END */

/* START - Remove extra overlay on video overlay component */
$("[data-lity]").click(() => {
	$("#bp_container").ready(() => {
		$("#bp_container").hide();
	});
})
/* END - Remove extra overlay on video overlay component */

/* BBX-11127 START */
$(".carouselID-1").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carouselID-1 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carouselID-1 .carousel-control-prev").removeClass("invisible");
		$("#carouselID-1 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-1 .carousel-control-prev").addClass("invisible");
		$("#carouselID-1 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-1 .carousel-control-next").removeClass("invisible");
		$("#carouselID-1 .carousel-control-prev").removeClass("invisible");
	}
});
$("#carouselID-2").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carouselID-2 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carouselID-2 .carousel-control-prev").removeClass("invisible");
		$("#carouselID-2 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-2 .carousel-control-prev").addClass("invisible");
		$("#carouselID-2 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-2 .carousel-control-next").removeClass("invisible");
		$("#carouselID-2 .carousel-control-prev").removeClass("invisible");
	}
});
$("#carouselID-0").on("slide.bs.carousel", function (t) {
	var carousel_length = $('#carouselID-0 .carousel-item').length;
	if (t.to == carousel_length - 1) {
		// 2 should be replaced by the (total length of carousel slides -1)$('.item').length

		$("#carouselID-0 .carousel-control-prev").removeClass("invisible");
		$("#carouselID-0 .carousel-control-next").addClass("invisible");
	}
	else if (t.to == 0) {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-0 .carousel-control-prev").addClass("invisible");
		$("#carouselID-0 .carousel-control-next").removeClass("invisible");
	}
	else {
		// 2 should be replaced by the (total length of carousel slides -1)
		$("#carouselID-0 .carousel-control-next").removeClass("invisible");
		$("#carouselID-0 .carousel-control-prev").removeClass("invisible");
	}
});
/* BBX-11127 END */

/* product video-inner-mobile - 5657 start */
$(".video-banner-inner-mobile").ready(function () {
	var noOfCards = $(".video-banner-inner-mobile").children().length;
	if (noOfCards == 1) {
		$(".video-banner-inner-mobile .carousel-item").addClass("single-banner");
	}
});
/* product video-inner-mobile - 5657 end */

/* product promotion-inner-mobile - 5075 start */
$(".product-promotion-inner-mobile").ready(function () {
	var noOfCards = $(".product-promotion-inner-mobile").children().length;
	if (noOfCards == 1) {
		$(".product-promotion-inner-mobile .carousel-item").addClass("single-banner");
	}
});
/* product promotion-inner-mobile - 5075 end */

/* BBX-11169 START */
$(".bb-3-col-tile-slider-no-border .card .card-footer, .bb-3-col-tile-slider-no-border .carousel-item .card-footer").each(function () {
	if ($(this).text().length === 0) {
		$(this).remove();
	}
})
$(".bb-3-col-tile-slider-no-border .card p, .bb-3-col-tile-slider-no-border .carousel-item p").each(function () {
	if ($(this).text().length === 0) {
		$(this).remove();
	}
})
/* BBX-11169 END */

/* BBX-9559 START */
$(".category-page-filter .compare-btn").click(function () {
	setTimeout(function () {
		$(".compare-overlay .inner-close-btn img").each(function () {
			$(this).attr("src", "/assets/iwov-resources/assets/Icons/icons-exit-blue.svg");
		})
	})
})
/* BBX-9559 START */

/* BBX-111292 START */
const slider = document.querySelector(".category-page-filter .no-slider");
let isDown = false;
let startX;
let scrollLeft;

if (slider) {
	slider.addEventListener("mousedown", e => {
		isDown = true;
		slider.classList.add("active");
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener("mouseleave", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mouseup", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mousemove", e => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = x - startX;
		slider.scrollLeft = scrollLeft - walk;
	});
}

function o() {
	var t, e = (t = 3, 576 <= $(window).width() && (t = 6), t),
		i = $(".category-page-filter").find(".category-items").children(".category-item").filter(function (t, e) {
			return !$(e).hasClass("hiden-filter")
		});
	if (i.length > e) {
		for (var s = 0; s < i.length; s++) e < s + 1 && $(i[s]).addClass("hiden-other");
		t = parseInt(i.length - e), $(".category-page-filter .more-btn").removeClass("d-none"), $(".category-page-filter .more-btn .btn__num").text(t)
	} else $(".category-page-filter .more-btn").addClass("d-none")
}

function r(t) {
	return t.toLowerCase().replace(/\s*/g, "")
}

$(".category-page-filter .no-slider").on("click", "li", function () {
	var t, e;
	$(".category-page-filter .no-slider li").removeClass("btn-gradient-blue--active"), $(this).addClass("btn-gradient-blue--active"), t = $(this).text(), e = r(t), $(".category-page-filter").find(".category-items").children(".category-item").filter(function (t, i) {
		return $(i).removeClass("hiden-filter").removeClass("hiden-other"), 0 == e.indexOf("all") ? ($(".category-page-filter").find(".category-items").children(".category-item").removeClass("hiden-filter").removeClass("hiden-other"), o(), !0) : r($(i).find(".card .card-subtitle").text()) === e || ($(i).addClass("hiden-filter"), !1)
	}), o(), $("body,html").animate({
		scrollTop: $(".category-page-filter .category-items").offset().top - 50
	}, 300)
});
/* BBX-111292 START */

/* BBX-11127 START */
/*$(document).ready(function () {
	for (const property in $(".carousel-inner")) {
		if ($(".carousel-inner")[property]?.children?.length < $(".carousel-indicators")[property]?.children?.length) {
			$(".carousel-indicators")[property].children[$(".carousel-indicators")[property].children.length - 1].remove()
		}
	}
});*/
/* BBX-11127 END */

/* BBX-11316 START */
$(".navbar.uob-scrollpy").ready(function() {
	let sectionIdList = [];
	$(".navbar.uob-scrollpy li a").each(function() {
		sectionIdList.push($(this).attr("href"));
	});

	sectionIdList.forEach(function(sectionId) {
		$(`a[href='${sectionId}']`).each(function() {
			if (!$(this).hasClass("nav-link") && !$(this).hasClass("dropdown-item")) {
				$(this).click(function (e) {
					const hrefValue = $(this).attr("href");
					
					if (hrefValue?.includes("#") && !hrefValue?.includes("https")) {
						e.preventDefault();
						const sectionId = hrefValue.replace("#", "");
						const element = document.getElementById(sectionId)
						const navHeight = document.getElementsByClassName("uob-scrollpy")[0].getBoundingClientRect().height
						let position = element.offsetTop - navHeight
						window.scrollTo({
							left: 0, top: position
						})
					}
				})
			}
		})
	});
});

/* BBX-11316 END */


/* 11995 START */

function scrollFix() {
$("#down-arrow-icons").click(function () {
let element = document.getElementById('how-it-works');
let mobileScreenSize = 768;
let isMobile = window.screen.availWidth <= mobileScreenSize;
$("html, body")
.stop()
.animate(
{
scrollTop: (isMobile?element.offsetTop-25:element.offsetTop-100),
},
400
);
return false;
});
$(".scrollTop a").scrollTop();
}
scrollFix();

/*1995 END */

/* PWEB cookies START */

function setCookie(name,value,days) {
var expires;
if(days){
var date = new Date();
/*Format For Users to change  - date.setTime(date.getTime() + (XX * 60 * 1000));   XX value represents min */
date.setTime(date.getTime() + (43200 * 60 * 1000));  
expires=";expires="+date.toGMTString();
}else {
expires="";
}
document.cookie=name+"="+value+expires+";path=/";
}


function getCookie(c_name) {
if(document.cookie.length > 0) {
c_start = document.cookie.indexOf(c_name+"=");
if(c_start!=-1){
c_start = c_start+c_name.length+1;
c_end=document.cookie.indexOf(";",c_start);
if(c_end == -1) {
c_end=document.cookie.length;
}
return unescape(document.cookie.substring(c_start,c_end));
}
}
return"";
}

function displayCookieDOM() {
var vists = getCookie('viewCount');
var isBBapp = BBappView();
if(!vists && !isBBapp) {
vists =1;
//document.querySelector(".uob-cookie").classList.remove("hide");
document.querySelector(".uob-cookie").classList.remove("hide");
} else {
vists = parseInt(vists)+1;
document.querySelector(".uob-cookie").classList.add("hide");
}
setCookie('viewCount',vists, 1);
}

displayCookieDOM()

/* PWEB cookies END */



/* START Toggle Dropdown

document.querySelector(".language-toggle").addEventListener("click",function() {
let currentUrl = window.location.href;
window.location.href=currentUrl.replace("/business","/personal");
return false;
})

END Toggle Dropdown */
/* CR63880: Detect and adjust the height of the form : Start */
$(document).ready(function () {
	function bindEvent(element, eventName, eventHandler) {
		if (element.addEventListener){
			element.addEventListener(eventName, eventHandler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + eventName, eventHandler);
		}
	}
		
	var maxHeight = 0;
	bindEvent(window, 'message', function (e) {
		var iframeLength = $('.embed-aem-form').length;
		for(var i=0; i<=iframeLength; i++) {
			if(e.data > maxHeight) {
				maxHeight = e.data + 20;				
			}
			if(e.currentTarget.document.embeds[i] != null) {
				e.currentTarget.document.embeds[i].height = maxHeight;
			}
		}
	});
});
/* CR63880: Detect and adjust the height of the form : End */

/* Cookies for BB-APP START */

function BBappView() {
var comingURL = window.location.href;
var convertedURL = new URL(comingURL);
var parameters = convertedURL.searchParams;
var isWebView = parameters.get("webview");
if(isWebView && isWebView === "Y") {
return true;
}
return false;
}

/* Cookies for BB-APP END */                                                   
/*KR202307-CR JULY 2023 COMPONENT ENHANCEMENT START */
/* BBX-6111 START */
function handleSmeHubBannerVideoCarouselTop() {
	const titleHeight = $(".sme-hub-landing-masthead .masthead-form .uob-h1").height();
	const currentMarginTop = Number($("#sme-hub-landing-main-slider").css("margin-top")?.split("px")[0]);
	let expectedMarginTop = 0;

	if (window.innerWidth < 768) {
		expectedMarginTop = -181 + titleHeight;
		$("#sme-hub-landing-main-slider").css("margin-top", expectedMarginTop);
	} else if (window.innerWidth < 992) {
		expectedMarginTop = -360 + titleHeight;
		$("#sme-hub-landing-main-slider").css("margin-top", expectedMarginTop);
		$(".sme-hub-landing-main-slider.reduced-height").css("margin-top", expectedMarginTop+40);
	} else {
		expectedMarginTop = -450 + titleHeight;
		$("#sme-hub-landing-main-slider.full-height").css("margin-top", expectedMarginTop);
		$(".sme-hub-landing-main-slider.reduced-height").css("margin-top", expectedMarginTop+70);
	}

	//console.log(currentMarginTop);
	//console.log(titleHeight);
}

let resizeSmeHubPage;

$(document).ready(handleSmeHubBannerVideoCarouselTop);
$(window).resize(function () {
	clearTimeout(resizeSmeHubPage);
	resizeSmeHubPage = setTimeout(handleSmeHubBannerVideoCarouselTop, 200);
});
/* BBX-6111 END */

/*KR202307-CR JULY 2023 COMPONENT ENHANCEMENT END */
                                    
$(document).on('change', '[name="terms_of_service"]', function() {
    var checkbox = $(this),
    value = checkbox.val();

    if (checkbox.is(':checked'))
    {
        $("#report_vulnerability_button").removeClass("btn-default-secondary-darkbg border-0 apply-btn");
        $("#report_vulnerability_button").addClass("btn-default-primary border-0 apply-btn");
        $("#report_vulnerability_button").attr('disabled',false);
    }
    else
    {
        $("#report_vulnerability_button").removeClass("btn-default-primary border-0 apply-btn");        
        $("#report_vulnerability_button").addClass("btn-default-secondary-darkbg border-0 apply-btn");                
        $("#report_vulnerability_button").attr('disabled',true);
    }
});



// quote-and-image component end

$(document).ready(function() {
    if ($('.uob-search-form-wrapper-404 form').hasClass('uob-search-form')) {
        if ($('#loadMore div').hasClass('col-xl-8')) {
            loadMoreElement = '#loadMore .row .col-xl-8 .uob-search-results'
        } else {
            loadMoreElement = '#loadMore .row .col-lg-8 .uob-search-results';
        }

        var path = window.location.pathname;
        var pageURL = path.split("/").pop();
        pageURL = pageURL.replace(".page", "");
        pageURL = pageURL.replace(/[^a-zA-Z 0-9]+/g, ' ');
        folderPath = path.split("/"),
            parts = pageURL.split("/"),
            last_part = parts[parts.length - 2];		
        if (pageURL != "index") {
            query = pageURL;
        } else {
			query = folderPath[folderPath.length-2].replace(/[^a-zA-Z 0-9]+/g, ' ');
        }
		//$("#searchLabel").val(query);
        if (!($('.uob-search-form-wrapper-404 form').hasClass('uob-search-form'))) {$("#searchLabel").val(query);}
        callServerSegmentAjaxLoadMore(".uob-search-results", $("#search-link").val(), query, document.querySelector('meta[name="segment"]').content, 1, 3);
		$(".uob-search-results-404 .results .more a").attr($("#search-link").val()+"?")
		
		$(".more a").attr('href',$("#search-link").val()+"");
		//$( "div.items a:nth-child(n+4)" ).attr("style","display: none;");
    }
});

//Tab Content
function debounce(func, time){
    var time = time || 100; // 100 by default if no param
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
}

var tabSlicks = [];
var setTabSlick = function(el, index) {
    tabSlicks[index] = $(el).slick({
        variableWidth: true,
        focusOnSelect: true,
        centerMode: true,
        infinite: false
    });
};

$.fn.overflown = function(){
    var e = this[0];    
    return e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth;
}

$.fn.childrensWidth = function() {
    var e = this[0];
    if (e.children.length) {
        return [...e.children].reduce((total, arg) => total + arg.clientWidth, 0);
    }
    return 0;
}

$.fn.addBreakLine = function() {
    var e = this[0];
    var maxWidth = Math.ceil($(e).childrensWidth());
    var maxHalfWidth = Math.ceil($(e).childrensWidth()/2);
    if (maxWidth > e.clientWidth) {
        maxWidth = e.clientWidth;
    }
    if (e.children.length && e.children.length > 1) {
        //return [...e.children].reduce((total, arg) => total + arg.clientWidth, 0);
        var totalWidth = 0;
        var totalHWidth = 0;
        var isHasBreakLine = false;
        var arr = [...e.children];
        for (var i in arr) {
            totalWidth += arr[i].clientWidth + 20;            
            if (totalWidth >= maxWidth) {
                if (i < arr.length - 1) {
                    isHasBreakLine = true;
                }
                totalWidth = 0;
            }
        }
        for (var i in arr) {
            totalHWidth += arr[i].clientWidth + 20;            
            if (totalHWidth >= maxHalfWidth && isHasBreakLine) {
                if (i < arr.length - 1) {
                    e.insertBefore(document.createElement('br'), arr[i].nextSibling);                    
                }
                totalHWidth = 0;
            }
        }
    }
}


window.addEventListener("load",function(){
    $(".solutions-button-container").each(function(index, element){
		var isOver="";
		if(window.matchMedia("(max-width: 767px)").matches){
        isOver = true;
		}else{
		isOver = $(element).overflown();
		}
		
        if (isOver && window.innerWidth < 992){
            setTabSlick(element, index);
        } else {
            tabSlicks[index] = null;
            // element.style = 'grid-template-columns:repeat('+ Math.ceil(element.children.length / 2) +', 1fr)';
            element.classList.add('totally-' + element.children.length);
            $(element).addBreakLine();
        }
    });
});

function checkChildWidth(el, selector) {
    var _btns = $(el).find(selector);
    var _w = 0;
    _btns.each(function(index, element) {
        _w += element.clientWidth + parseInt($(element).css('marginRight'));
    });

    return el.clientWidth < _w;
}

function resizeContent() {
    // Do loads of stuff once window has resized
    $(".solutions-button-container").each(function(index, element){
        var isOver = $(element).overflown();
        if (!isOver) {
            isOver = checkChildWidth(element, '.solutions-button');
        }

        if (isOver && window.innerWidth < 992){
            $(element).children('br').remove();
            tabSlicks[index] ? tabSlicks[index].slick('refresh') : setTabSlick(element, index);            
        } else if (window.innerWidth >= 992) {
            // console.log(tabSlicks[index]);
            tabSlicks[index] && tabSlicks[index].slick('unslick');
            $(element).addBreakLine();
        }
    });    
}

// Eventlistener
window.addEventListener("resize", debounce( resizeContent, 300 ));
$(".solutions-button").each(function(index, element) {
  $(this).click((event) => {
    event.preventDefault();
    // if (tabSlicks) {
    //     tabSlicks.slick('slickGoTo', index);
    // }
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
    $(this).parents(this).parents(".solutions-container").find(`#slide${$(this).data("slide")}
`)
      .siblings(".solutions-card")
      .fadeOut(200);
    setTimeout(() => $(this).parents(this).parents(".solutions-container").find(`#slide${$(this).data("slide")}
`).fadeIn(200), 198);
  }
               );
}
                           );

$(".step-container").each(function() {
    $(this).click((event) => {
        event.preventDefault();

        var maxStep = $(this).parent().find(".step-container").length;

        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");


        if ($(this).data("step") === 1) {
            $(".step-arrow-up").addClass("inactive");
            $(".step-arrow-down").removeClass("inactive");
        } else if ($(this).data("step") === maxStep) {
            $(".step-arrow-down").addClass("inactive");
            $(".step-arrow-up").removeClass("inactive");
        } else {
            $(".step-arrow-down").removeClass("inactive");
            $(".step-arrow-up").removeClass("inactive");
        }

        $(this).closest(".simpleInvest-container").find(`#step${$(this).data("step")}`)
            .siblings(".step-content")
            .addClass("hidden");
        $(this).closest(".simpleInvest-container").find(`#step${$(this).data("step")}`).removeClass("hidden");

        $(this).closest(".simpleInvest-container").find(`#stepImg${$(this).data("step")}`)
            .siblings(".step-image")
            .addClass("hidden");
        $(this).closest(".simpleInvest-container").find(`#stepImg${$(this).data("step")}`).removeClass("hidden");
    });
});

$(".step-arrow-down").each(function() {
    $(this).click((event) => {
        event.preventDefault();

        var currentItem = $(this).parent().find(".step-container.active");
        var currentStep = currentItem.data("step");

        var maxStep = currentItem.parent().find(".step-container").length;

        if (currentStep + 1 === maxStep || currentStep === maxStep) {
            $(this).parent().find(".step-arrow-down").addClass("inactive");
        } else {
            $(this).parent().find(".step-arrow-down").removeClass("inactive");
            $(this).parent().find(".step-arrow-up").removeClass("inactive");
        }
		console.log("1");
        if (currentStep <= maxStep - 1) {
            currentItem.removeClass("active");
            currentItem.next().addClass("active");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep + 1}`).removeClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep + 1}`).removeClass("hidden");
			
        }
    });
});

$(".step-arrow-up").each(function() {
    $(this).click((event) => {
        event.preventDefault();

        var currentItem = $(this).parent().find(".step-container.active");
        var currentStep = currentItem.data("step");
        var maxStep = $(this).parent().find(".step-container").length;

        if (currentStep - 1 === 1 || currentStep === 1) {
            $(this).parent().find(".step-arrow-up").addClass("inactive");
        } else {
            $(this).parent().find(".step-arrow-down").removeClass("inactive");
            $(this).parent().find(".step-arrow-up").removeClass("inactive");
        }

        if (currentStep >= 2) {
            currentItem.removeClass("active");
            currentItem.prev().addClass("active");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep - 1}`).removeClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep - 1}`).removeClass("hidden");
        }
    });
});

$(".carousel-indicator").each(function() {
    $(this).click((event) => {
        event.preventDefault();

        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");

        if ($(this).data("step") === 5) {
            $(this).parent().find(".carousel-arrow-right").addClass("inactive");
        } else {
            $(this).parent().find(".carousel-arrow-right").removeClass("inactive");
        }

        if ($(this).data("step") === 1) {
            $(this).parent().find(".carousel-arrow-left").addClass("inactive");
        } else {
            $(this).parent().find(".carousel-arrow-left").removeClass("inactive");
        }

        $(this).closest(".simpleInvest-container").find(`#step${$(this).data("step")}`)
            .siblings(".step-content")
            .addClass("hidden");
        $(this).closest(".simpleInvest-container").find(`#step${$(this).data("step")}`).removeClass("hidden");

        $(this).closest(".simpleInvest-container").find(`#stepImg${$(this).data("step")}`)
            .siblings(".step-image")
            .addClass("hidden");
        $(this).closest(".simpleInvest-container").find(`#stepImg${$(this).data("step")}`).removeClass("hidden");
    });
});

$(".carousel-arrow-left").each(function() {
    $(this).click((event) => {
        event.preventDefault();

        var currentItem = $(this).closest(".simpleInvest-container").find(".simpleInvest-carousel > .carousel-indicator.active");
        var currentStep = currentItem.data("step");

        console.log(currentStep);

        if (currentStep - 1 === 1 || currentStep === 1) {
            $(this).closest(".simpleInvest-container").find(".carousel-arrow-left").addClass("inactive");
        } else {
            $(this).closest(".simpleInvest-container").find(".carousel-arrow-right").removeClass("inactive");
            $(this).closest(".simpleInvest-container").find(".carousel-arrow-left").removeClass("inactive");
        }

        if (currentStep >= 2) {
            currentItem.removeClass("active");
            currentItem.prev().addClass("active");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep - 1}`).removeClass("hidden");

            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep - 1}`).removeClass("hidden");
        }
    })
});

$(".carousel-arrow-right").each(function() {
    $(this).click((event) => {
        event.preventDefault();

        var currentItem = $(this).closest(".simpleInvest-container").find(".simpleInvest-carousel > .carousel-indicator.active");
        var currentStep = currentItem.data("step");
        var maxStep = $(this).closest(".simpleInvest-container").find(".step-container").length;

        if (currentStep + 1 === maxStep || currentStep === maxStep) {
            $(this).closest(".simpleInvest-container").find(".carousel-arrow-right").addClass("inactive");
        } else {
            $(this).closest(".simpleInvest-container").find(".carousel-arrow-right").removeClass("inactive");
            $(this).closest(".simpleInvest-container").find(".carousel-arrow-left").removeClass("inactive");
        }

        if (currentStep <= maxStep - 1) {
            currentItem.removeClass("active");
            currentItem.next().addClass("active");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#step${currentStep + 1}`).removeClass("hidden");

            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep}`).addClass("hidden");
            $(this).closest(".simpleInvest-container").find(`#stepImg${currentStep + 1}`).removeClass("hidden");
        }
    })
});

//This always on the bottom of the scripts
function loadScriptWithCallback(src, callback){
	const script = document.createElement('script');
	script.src=src;
	script.type='text/javascript';
	script.onload=callback;
	document.body.appendChild(script);
}

//This always on the bottom of the scripts
$(document).ready(function(){
	if($(".kr-tblcsv-table").length){
		loadScriptWithCallback("/assets/iwov-resources/js/tablecsv/stay-informed-plugin.js", function(){
		});
		loadScriptWithCallback("/assets/iwov-resources/js/tablecsv/stayinformed-tabs.js", function(){
		});
	};
});














































!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e,n=n&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n;function l(t){var n=this,i=!1;return e(this).one(c.TRANSITION_END,(function(){i=!0})),setTimeout((function(){i||c.triggerTransitionEnd(n)}),t),this}var c={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var n=e(t).css("transition-duration"),i=e(t).css("transition-delay"),o=parseFloat(n),s=parseFloat(i);return o||s?(n=n.split(",")[0],i=i.split(",")[0],1e3*(parseFloat(n)+parseFloat(i))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger("transitionend")},supportsTransitionEnd:function(){return Boolean("transitionend")},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],s=e[i],r=s&&c.isElement(s)?"element":null===(a=s)||"undefined"==typeof a?""+a:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){var e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c.findShadowRoot(t.parentNode):null},jQueryDetection:function(){if("undefined"==typeof e)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};c.jQueryDetection(),e.fn.emulateTransitionEnd=l,e.event.special[c.TRANSITION_END]={bindType:"transitionend",delegateType:"transitionend",handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var h="alert",u=e.fn[h],d=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=c.getSelectorFromElement(t),i=!1;return n&&(i=document.querySelector(n)),i||(i=e(t).closest(".alert")[0]),i},n._triggerCloseEvent=function(t){var n=e.Event("close.bs.alert");return e(t).trigger(n),n},n._removeElement=function(t){var n=this;if(e(t).removeClass("show"),e(t).hasClass("fade")){var i=c.getTransitionDurationFromElement(t);e(t).one(c.TRANSITION_END,(function(e){return n._destroyElement(t,e)})).emulateTransitionEnd(i)}else this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger("closed.bs.alert").remove()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.alert");o||(o=new t(this),i.data("bs.alert",o)),"close"===n&&o[n](this)}))},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.alert.data-api",'[data-dismiss="alert"]',d._handleDismiss(new d)),e.fn[h]=d._jQueryInterface,e.fn[h].Constructor=d,e.fn[h].noConflict=function(){return e.fn[h]=u,d._jQueryInterface};var f=e.fn.button,g=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,i=e(this._element).closest('[data-toggle="buttons"]')[0];if(i){var o=this._element.querySelector('input:not([type="hidden"])');if(o){if("radio"===o.type)if(o.checked&&this._element.classList.contains("active"))t=!1;else{var s=i.querySelector(".active");s&&e(s).removeClass("active")}t&&("checkbox"!==o.type&&"radio"!==o.type||(o.checked=!this._element.classList.contains("active")),e(o).trigger("change")),o.focus(),n=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains("active")),t&&e(this._element).toggleClass("active"))},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=t.target,i=n;if(e(n).hasClass("btn")||(n=e(n).closest(".btn")[0]),!n||n.hasAttribute("disabled")||n.classList.contains("disabled"))t.preventDefault();else{var o=n.querySelector('input:not([type="hidden"])');if(o&&(o.hasAttribute("disabled")||o.classList.contains("disabled")))return void t.preventDefault();"LABEL"===i.tagName&&o&&"checkbox"===o.type&&t.preventDefault(),g._jQueryInterface.call(e(n),"toggle")}})).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',(function(t){var n=e(t.target).closest(".btn")[0];e(n).toggleClass("focus",/^focus(in)?$/.test(t.type))})),e(window).on("load.bs.button.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector('input:not([type="hidden"])');o.checked||o.hasAttribute("checked")?i.classList.add("active"):i.classList.remove("active")}for(var s=0,r=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;s<r;s++){var a=t[s];"true"===a.getAttribute("aria-pressed")?a.classList.add("active"):a.classList.remove("active")}})),e.fn.button=g._jQueryInterface,e.fn.button.Constructor=g,e.fn.button.noConflict=function(){return e.fn.button=f,g._jQueryInterface};var m="carousel",p=".bs.carousel",_=e.fn[m],v={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},b={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},y={TOUCH:"touch",PEN:"pen"},E=function(){function t(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var n=t.prototype;return n.next=function(){this._isSliding||this._slide("next")},n.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},n.prev=function(){this._isSliding||this._slide("prev")},n.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(c.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},n.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},n.to=function(t){var n=this;this._activeElement=this._element.querySelector(".active.carousel-item");var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one("slid.bs.carousel",(function(){return n.to(t)}));else{if(i===t)return this.pause(),void this.cycle();var o=t>i?"next":"prev";this._slide(o,this._items[t])}},n.dispose=function(){e(this._element).off(p),e.removeData(this._element,"bs.carousel"),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},n._getConfig=function(t){return t=a(a({},v),t),c.typeCheckConfig(m,t,b),t},n._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;this.touchDeltaX=0,e>0&&this.prev(),e<0&&this.next()}},n._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on("keydown.bs.carousel",(function(e){return t._keydown(e)})),"hover"===this._config.pause&&e(this._element).on("mouseenter.bs.carousel",(function(e){return t.pause(e)})).on("mouseleave.bs.carousel",(function(e){return t.cycle(e)})),this._config.touch&&this._addTouchEventListeners()},n._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&y[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout((function(e){return t.cycle(e)}),500+t._config.interval))};e(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel",(function(t){return t.preventDefault()})),this._pointerEvent?(e(this._element).on("pointerdown.bs.carousel",(function(t){return n(t)})),e(this._element).on("pointerup.bs.carousel",(function(t){return i(t)})),this._element.classList.add("pointer-event")):(e(this._element).on("touchstart.bs.carousel",(function(t){return n(t)})),e(this._element).on("touchmove.bs.carousel",(function(e){return function(e){e.originalEvent.touches&&e.originalEvent.touches.length>1?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)})),e(this._element).on("touchend.bs.carousel",(function(t){return i(t)})))}},n._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},n._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},n._getItemByDirection=function(t,e){var n="next"===t,i="prev"===t,o=this._getItemIndex(e),s=this._items.length-1;if((i&&0===o||n&&o===s)&&!this._config.wrap)return e;var r=(o+("prev"===t?-1:1))%this._items.length;return-1===r?this._items[this._items.length-1]:this._items[r]},n._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),o=this._getItemIndex(this._element.querySelector(".active.carousel-item")),s=e.Event("slide.bs.carousel",{relatedTarget:t,direction:n,from:o,to:i});return e(this._element).trigger(s),s},n._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var n=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));e(n).removeClass("active");var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass("active")}},n._slide=function(t,n){var i,o,s,r=this,a=this._element.querySelector(".active.carousel-item"),l=this._getItemIndex(a),h=n||a&&this._getItemByDirection(t,a),u=this._getItemIndex(h),d=Boolean(this._interval);if("next"===t?(i="carousel-item-left",o="carousel-item-next",s="left"):(i="carousel-item-right",o="carousel-item-prev",s="right"),h&&e(h).hasClass("active"))this._isSliding=!1;else if(!this._triggerSlideEvent(h,s).isDefaultPrevented()&&a&&h){this._isSliding=!0,d&&this.pause(),this._setActiveIndicatorElement(h);var f=e.Event("slid.bs.carousel",{relatedTarget:h,direction:s,from:l,to:u});if(e(this._element).hasClass("slide")){e(h).addClass(o),c.reflow(h),e(a).addClass(i),e(h).addClass(i);var g=parseInt(h.getAttribute("data-interval"),10);g?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=g):this._config.interval=this._config.defaultInterval||this._config.interval;var m=c.getTransitionDurationFromElement(a);e(a).one(c.TRANSITION_END,(function(){e(h).removeClass(i+" "+o).addClass("active"),e(a).removeClass("active "+o+" "+i),r._isSliding=!1,setTimeout((function(){return e(r._element).trigger(f)}),0)})).emulateTransitionEnd(m)}else e(a).removeClass("active"),e(h).addClass("active"),this._isSliding=!1,e(this._element).trigger(f);d&&this.cycle()}},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.carousel"),o=a(a({},v),e(this).data());"object"==typeof n&&(o=a(a({},o),n));var s="string"==typeof n?n:o.slide;if(i||(i=new t(this,o),e(this).data("bs.carousel",i)),"number"==typeof n)i.to(n);else if("string"==typeof s){if("undefined"==typeof i[s])throw new TypeError('No method named "'+s+'"');i[s]()}else o.interval&&o.ride&&(i.pause(),i.cycle())}))},t._dataApiClickHandler=function(n){var i=c.getSelectorFromElement(this);if(i){var o=e(i)[0];if(o&&e(o).hasClass("carousel")){var s=a(a({},e(o).data()),e(this).data()),r=this.getAttribute("data-slide-to");r&&(s.interval=!1),t._jQueryInterface.call(e(o),s),r&&e(o).data("bs.carousel").to(r),n.preventDefault()}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return v}}]),t}();e(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",E._dataApiClickHandler),e(window).on("load.bs.carousel.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),n=0,i=t.length;n<i;n++){var o=e(t[n]);E._jQueryInterface.call(o,o.data())}})),e.fn[m]=E._jQueryInterface,e.fn[m].Constructor=E,e.fn[m].noConflict=function(){return e.fn[m]=_,E._jQueryInterface};var w="collapse",T=e.fn[w],C={toggle:!0,parent:""},S={toggle:"boolean",parent:"(string|element)"},D=function(){function t(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll('[data-toggle="collapse"]')),i=0,o=n.length;i<o;i++){var s=n[i],r=c.getSelectorFromElement(s),a=[].slice.call(document.querySelectorAll(r)).filter((function(e){return e===t}));null!==r&&a.length>0&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var n=t.prototype;return n.toggle=function(){e(this._element).hasClass("show")?this.hide():this.show()},n.show=function(){var n,i,o=this;if(!this._isTransitioning&&!e(this._element).hasClass("show")&&(this._parent&&0===(n=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter((function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains("collapse")}))).length&&(n=null),!(n&&(i=e(n).not(this._selector).data("bs.collapse"))&&i._isTransitioning))){var s=e.Event("show.bs.collapse");if(e(this._element).trigger(s),!s.isDefaultPrevented()){n&&(t._jQueryInterface.call(e(n).not(this._selector),"hide"),i||e(n).data("bs.collapse",null));var r=this._getDimension();e(this._element).removeClass("collapse").addClass("collapsing"),this._element.style[r]=0,this._triggerArray.length&&e(this._triggerArray).removeClass("collapsed").attr("aria-expanded",!0),this.setTransitioning(!0);var a="scroll"+(r[0].toUpperCase()+r.slice(1)),l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){e(o._element).removeClass("collapsing").addClass("collapse show"),o._element.style[r]="",o.setTransitioning(!1),e(o._element).trigger("shown.bs.collapse")})).emulateTransitionEnd(l),this._element.style[r]=this._element[a]+"px"}}},n.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass("show")){var n=e.Event("hide.bs.collapse");if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",c.reflow(this._element),e(this._element).addClass("collapsing").removeClass("collapse show");var o=this._triggerArray.length;if(o>0)for(var s=0;s<o;s++){var r=this._triggerArray[s],a=c.getSelectorFromElement(r);if(null!==a)e([].slice.call(document.querySelectorAll(a))).hasClass("show")||e(r).addClass("collapsed").attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[i]="";var l=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t.setTransitioning(!1),e(t._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")})).emulateTransitionEnd(l)}}},n.setTransitioning=function(t){this._isTransitioning=t},n.dispose=function(){e.removeData(this._element,"bs.collapse"),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},n._getConfig=function(t){return(t=a(a({},C),t)).toggle=Boolean(t.toggle),c.typeCheckConfig(w,t,S),t},n._getDimension=function(){return e(this._element).hasClass("width")?"width":"height"},n._getParent=function(){var n,i=this;c.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=document.querySelector(this._config.parent);var o='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',s=[].slice.call(n.querySelectorAll(o));return e(s).each((function(e,n){i._addAriaAndCollapsedClass(t._getTargetFromElement(n),[n])})),n},n._addAriaAndCollapsedClass=function(t,n){var i=e(t).hasClass("show");n.length&&e(n).toggleClass("collapsed",!i).attr("aria-expanded",i)},t._getTargetFromElement=function(t){var e=c.getSelectorFromElement(t);return e?document.querySelector(e):null},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.collapse"),s=a(a(a({},C),i.data()),"object"==typeof n&&n?n:{});if(!o&&s.toggle&&"string"==typeof n&&/show|hide/.test(n)&&(s.toggle=!1),o||(o=new t(this,s),i.data("bs.collapse",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return C}}]),t}();e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',(function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=e(this),i=c.getSelectorFromElement(this),o=[].slice.call(document.querySelectorAll(i));e(o).each((function(){var t=e(this),i=t.data("bs.collapse")?"toggle":n.data();D._jQueryInterface.call(t,i)}))})),e.fn[w]=D._jQueryInterface,e.fn[w].Constructor=D,e.fn[w].noConflict=function(){return e.fn[w]=T,D._jQueryInterface};var k="dropdown",N=e.fn[k],A=new RegExp("38|40|27"),I={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},O={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},j=function(){function t(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var i=t.prototype;return i.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")){var n=e(this._menu).hasClass("show");t._clearMenus(),n||this.show(!0)}},i.show=function(i){if(void 0===i&&(i=!1),!(this._element.disabled||e(this._element).hasClass("disabled")||e(this._menu).hasClass("show"))){var o={relatedTarget:this._element},s=e.Event("show.bs.dropdown",o),r=t._getParentFromElement(this._element);if(e(r).trigger(s),!s.isDefaultPrevented()){if(!this._inNavbar&&i){if("undefined"==typeof n)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var a=this._element;"parent"===this._config.reference?a=r:c.isElement(this._config.reference)&&(a=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(a=this._config.reference[0])),"scrollParent"!==this._config.boundary&&e(r).addClass("position-static"),this._popper=new n(a,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===e(r).closest(".navbar-nav").length&&e(document.body).children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass("show"),e(r).toggleClass("show").trigger(e.Event("shown.bs.dropdown",o))}}},i.hide=function(){if(!this._element.disabled&&!e(this._element).hasClass("disabled")&&e(this._menu).hasClass("show")){var n={relatedTarget:this._element},i=e.Event("hide.bs.dropdown",n),o=t._getParentFromElement(this._element);e(o).trigger(i),i.isDefaultPrevented()||(this._popper&&this._popper.destroy(),e(this._menu).toggleClass("show"),e(o).toggleClass("show").trigger(e.Event("hidden.bs.dropdown",n)))}},i.dispose=function(){e.removeData(this._element,"bs.dropdown"),e(this._element).off(".bs.dropdown"),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},i.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},i._addEventListeners=function(){var t=this;e(this._element).on("click.bs.dropdown",(function(e){e.preventDefault(),e.stopPropagation(),t.toggle()}))},i._getConfig=function(t){return t=a(a(a({},this.constructor.Default),e(this._element).data()),t),c.typeCheckConfig(k,t,this.constructor.DefaultType),t},i._getMenuElement=function(){if(!this._menu){var e=t._getParentFromElement(this._element);e&&(this._menu=e.querySelector(".dropdown-menu"))}return this._menu},i._getPlacement=function(){var t=e(this._element.parentNode),n="bottom-start";return t.hasClass("dropup")?n=e(this._menu).hasClass("dropdown-menu-right")?"top-end":"top-start":t.hasClass("dropright")?n="right-start":t.hasClass("dropleft")?n="left-start":e(this._menu).hasClass("dropdown-menu-right")&&(n="bottom-end"),n},i._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},i._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},i._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),a(a({},t),this._config.popperConfig)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.dropdown");if(i||(i=new t(this,"object"==typeof n?n:null),e(this).data("bs.dropdown",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},t._clearMenus=function(n){if(!n||3!==n.which&&("keyup"!==n.type||9===n.which))for(var i=[].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')),o=0,s=i.length;o<s;o++){var r=t._getParentFromElement(i[o]),a=e(i[o]).data("bs.dropdown"),l={relatedTarget:i[o]};if(n&&"click"===n.type&&(l.clickEvent=n),a){var c=a._menu;if(e(r).hasClass("show")&&!(n&&("click"===n.type&&/input|textarea/i.test(n.target.tagName)||"keyup"===n.type&&9===n.which)&&e.contains(r,n.target))){var h=e.Event("hide.bs.dropdown",l);e(r).trigger(h),h.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),i[o].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),e(c).removeClass("show"),e(r).removeClass("show").trigger(e.Event("hidden.bs.dropdown",l)))}}}},t._getParentFromElement=function(t){var e,n=c.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},t._dataApiKeydownHandler=function(n){if(!(/input|textarea/i.test(n.target.tagName)?32===n.which||27!==n.which&&(40!==n.which&&38!==n.which||e(n.target).closest(".dropdown-menu").length):!A.test(n.which))&&!this.disabled&&!e(this).hasClass("disabled")){var i=t._getParentFromElement(this),o=e(i).hasClass("show");if(o||27!==n.which){if(n.preventDefault(),n.stopPropagation(),!o||o&&(27===n.which||32===n.which))return 27===n.which&&e(i.querySelector('[data-toggle="dropdown"]')).trigger("focus"),void e(this).trigger("click");var s=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter((function(t){return e(t).is(":visible")}));if(0!==s.length){var r=s.indexOf(n.target);38===n.which&&r>0&&r--,40===n.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}}},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return I}},{key:"DefaultType",get:function(){return O}}]),t}();e(document).on("keydown.bs.dropdown.data-api",'[data-toggle="dropdown"]',j._dataApiKeydownHandler).on("keydown.bs.dropdown.data-api",".dropdown-menu",j._dataApiKeydownHandler).on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api",j._clearMenus).on("click.bs.dropdown.data-api",'[data-toggle="dropdown"]',(function(t){t.preventDefault(),t.stopPropagation(),j._jQueryInterface.call(e(this),"toggle")})).on("click.bs.dropdown.data-api",".dropdown form",(function(t){t.stopPropagation()})),e.fn[k]=j._jQueryInterface,e.fn[k].Constructor=j,e.fn[k].noConflict=function(){return e.fn[k]=N,j._jQueryInterface};var P=e.fn.modal,x={backdrop:!0,keyboard:!0,focus:!0,show:!0},L={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},R=function(){function t(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var n=t.prototype;return n.toggle=function(t){return this._isShown?this.hide():this.show(t)},n.show=function(t){var n=this;if(!this._isShown&&!this._isTransitioning){e(this._element).hasClass("fade")&&(this._isTransitioning=!0);var i=e.Event("show.bs.modal",{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on("click.dismiss.bs.modal",'[data-dismiss="modal"]',(function(t){return n.hide(t)})),e(this._dialog).on("mousedown.dismiss.bs.modal",(function(){e(n._element).one("mouseup.dismiss.bs.modal",(function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)}))})),this._showBackdrop((function(){return n._showElement(t)})))}},n.hide=function(t){var n=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var i=e.Event("hide.bs.modal");if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var o=e(this._element).hasClass("fade");if(o&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off("focusin.bs.modal"),e(this._element).removeClass("show"),e(this._element).off("click.dismiss.bs.modal"),e(this._dialog).off("mousedown.dismiss.bs.modal"),o){var s=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(t){return n._hideModal(t)})).emulateTransitionEnd(s)}else this._hideModal()}}},n.dispose=function(){[window,this._element,this._dialog].forEach((function(t){return e(t).off(".bs.modal")})),e(document).off("focusin.bs.modal"),e.removeData(this._element,"bs.modal"),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},n.handleUpdate=function(){this._adjustDialog()},n._getConfig=function(t){return t=a(a({},x),t),c.typeCheckConfig("modal",t,L),t},n._triggerBackdropTransition=function(){var t=this;if("static"===this._config.backdrop){var n=e.Event("hidePrevented.bs.modal");if(e(this._element).trigger(n),n.defaultPrevented)return;this._element.classList.add("modal-static");var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,(function(){t._element.classList.remove("modal-static")})).emulateTransitionEnd(i),this._element.focus()}else this.hide()},n._showElement=function(t){var n=this,i=e(this._element).hasClass("fade"),o=this._dialog?this._dialog.querySelector(".modal-body"):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),e(this._dialog).hasClass("modal-dialog-scrollable")&&o?o.scrollTop=0:this._element.scrollTop=0,i&&c.reflow(this._element),e(this._element).addClass("show"),this._config.focus&&this._enforceFocus();var s=e.Event("shown.bs.modal",{relatedTarget:t}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(s)};if(i){var a=c.getTransitionDurationFromElement(this._dialog);e(this._dialog).one(c.TRANSITION_END,r).emulateTransitionEnd(a)}else r()},n._enforceFocus=function(){var t=this;e(document).off("focusin.bs.modal").on("focusin.bs.modal",(function(n){document!==n.target&&t._element!==n.target&&0===e(t._element).has(n.target).length&&t._element.focus()}))},n._setEscapeEvent=function(){var t=this;this._isShown?e(this._element).on("keydown.dismiss.bs.modal",(function(e){t._config.keyboard&&27===e.which?(e.preventDefault(),t.hide()):t._config.keyboard||27!==e.which||t._triggerBackdropTransition()})):this._isShown||e(this._element).off("keydown.dismiss.bs.modal")},n._setResizeEvent=function(){var t=this;this._isShown?e(window).on("resize.bs.modal",(function(e){return t.handleUpdate(e)})):e(window).off("resize.bs.modal")},n._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop((function(){e(document.body).removeClass("modal-open"),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger("hidden.bs.modal")}))},n._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},n._showBackdrop=function(t){var n=this,i=e(this._element).hasClass("fade")?"fade":"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),e(this._backdrop).appendTo(document.body),e(this._element).on("click.dismiss.bs.modal",(function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()})),i&&c.reflow(this._backdrop),e(this._backdrop).addClass("show"),!t)return;if(!i)return void t();var o=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,t).emulateTransitionEnd(o)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass("show");var s=function(){n._removeBackdrop(),t&&t()};if(e(this._element).hasClass("fade")){var r=c.getTransitionDurationFromElement(this._backdrop);e(this._backdrop).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s()}else t&&t()},n._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},n._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},n._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(t.left+t.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},n._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){var n=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),i=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(n,i){var o=i.style.paddingRight,s=e(i).css("padding-right");e(i).data("padding-right",o).css("padding-right",parseFloat(s)+t._scrollbarWidth+"px")})),e(i).each((function(n,i){var o=i.style.marginRight,s=e(i).css("margin-right");e(i).data("margin-right",o).css("margin-right",parseFloat(s)-t._scrollbarWidth+"px")}));var o=document.body.style.paddingRight,s=e(document.body).css("padding-right");e(document.body).data("padding-right",o).css("padding-right",parseFloat(s)+this._scrollbarWidth+"px")}e(document.body).addClass("modal-open")},n._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));e(t).each((function(t,n){var i=e(n).data("padding-right");e(n).removeData("padding-right"),n.style.paddingRight=i||""}));var n=[].slice.call(document.querySelectorAll(".sticky-top"));e(n).each((function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")}));var i=e(document.body).data("padding-right");e(document.body).removeData("padding-right"),document.body.style.paddingRight=i||""},n._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},t._jQueryInterface=function(n,i){return this.each((function(){var o=e(this).data("bs.modal"),s=a(a(a({},x),e(this).data()),"object"==typeof n&&n?n:{});if(o||(o=new t(this,s),e(this).data("bs.modal",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](i)}else s.show&&o.show(i)}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return x}}]),t}();e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',(function(t){var n,i=this,o=c.getSelectorFromElement(this);o&&(n=document.querySelector(o));var s=e(n).data("bs.modal")?"toggle":a(a({},e(n).data()),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=e(n).one("show.bs.modal",(function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",(function(){e(i).is(":visible")&&i.focus()}))}));R._jQueryInterface.call(e(n),s,this)})),e.fn.modal=R._jQueryInterface,e.fn.modal.Constructor=R,e.fn.modal.noConflict=function(){return e.fn.modal=P,R._jQueryInterface};var q=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],F={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Q=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,B=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(t,e,n){if(0===t.length)return t;if(n&&"function"==typeof n)return n(t);for(var i=(new window.DOMParser).parseFromString(t,"text/html"),o=Object.keys(e),s=[].slice.call(i.body.querySelectorAll("*")),r=function(t,n){var i=s[t],r=i.nodeName.toLowerCase();if(-1===o.indexOf(i.nodeName.toLowerCase()))return i.parentNode.removeChild(i),"continue";var a=[].slice.call(i.attributes),l=[].concat(e["*"]||[],e[r]||[]);a.forEach((function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===q.indexOf(n)||Boolean(t.nodeValue.match(Q)||t.nodeValue.match(B));for(var i=e.filter((function(t){return t instanceof RegExp})),o=0,s=i.length;o<s;o++)if(n.match(i[o]))return!0;return!1})(t,l)||i.removeAttribute(t.nodeName)}))},a=0,l=s.length;a<l;a++)r(a);return i.body.innerHTML}var U="tooltip",M=e.fn[U],W=new RegExp("(^|\\s)bs-tooltip\\S+","g"),V=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},K={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},X={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:F,popperConfig:null},Y={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"},$=function(){function t(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var i=t.prototype;return i.enable=function(){this._isEnabled=!0},i.disable=function(){this._isEnabled=!1},i.toggleEnabled=function(){this._isEnabled=!this._isEnabled},i.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass("show"))return void this._leave(null,this);this._enter(null,this)}},i.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},i.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var o=c.findShadowRoot(this.element),s=e.contains(null!==o?o:this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),a=c.getUID(this.constructor.NAME);r.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&e(r).addClass("fade");var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var u=this._getContainer();e(r).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(r).appendTo(u),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,this._getPopperConfig(h)),e(r).addClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().on("mouseover",null,e.noop);var d=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),"out"===n&&t._leave(null,t)};if(e(this.tip).hasClass("fade")){var f=c.getTransitionDurationFromElement(this.tip);e(this.tip).one(c.TRANSITION_END,d).emulateTransitionEnd(f)}else d()}},i.hide=function(t){var n=this,i=this.getTipElement(),o=e.Event(this.constructor.Event.HIDE),s=function(){"show"!==n._hoverState&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};if(e(this.element).trigger(o),!o.isDefaultPrevented()){if(e(i).removeClass("show"),"ontouchstart"in document.documentElement&&e(document.body).children().off("mouseover",null,e.noop),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1,e(this.tip).hasClass("fade")){var r=c.getTransitionDurationFromElement(i);e(i).one(c.TRANSITION_END,s).emulateTransitionEnd(r)}else s();this._hoverState=""}},i.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},i.isWithContent=function(){return Boolean(this.getTitle())},i.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},i.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},i.setContent=function(){var t=this.getTipElement();this.setElementContent(e(t.querySelectorAll(".tooltip-inner")),this.getTitle()),e(t).removeClass("fade show")},i.setElementContent=function(t,n){"object"!=typeof n||!n.nodeType&&!n.jquery?this.config.html?(this.config.sanitize&&(n=H(n,this.config.whiteList,this.config.sanitizeFn)),t.html(n)):t.text(n):this.config.html?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text())},i.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},i._getPopperConfig=function(t){var e=this;return a(a({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),this.config.popperConfig)},i._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=a(a({},e.offsets),t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},i._getContainer=function(){return!1===this.config.container?document.body:c.isElement(this.config.container)?e(this.config.container):e(document).find(this.config.container)},i._getAttachment=function(t){return K[t.toUpperCase()]},i._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach((function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,(function(e){return t.toggle(e)}));else if("manual"!==n){var i="hover"===n?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,o="hover"===n?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,(function(e){return t._enter(e)})).on(o,t.config.selector,(function(e){return t._leave(e)}))}})),this._hideModalHandler=function(){t.element&&t.hide()},e(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=a(a({},this.config),{},{trigger:"manual",selector:""}):this._fixTitle()},i._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},i._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e(n.getTipElement()).hasClass("show")||"show"===n._hoverState?n._hoverState="show":(clearTimeout(n._timeout),n._hoverState="show",n.config.delay&&n.config.delay.show?n._timeout=setTimeout((function(){"show"===n._hoverState&&n.show()}),n.config.delay.show):n.show())},i._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?"focus":"hover"]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState="out",n.config.delay&&n.config.delay.hide?n._timeout=setTimeout((function(){"out"===n._hoverState&&n.hide()}),n.config.delay.hide):n.hide())},i._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},i._getConfig=function(t){var n=e(this.element).data();return Object.keys(n).forEach((function(t){-1!==V.indexOf(t)&&delete n[t]})),"number"==typeof(t=a(a(a({},this.constructor.Default),n),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),c.typeCheckConfig(U,t,this.constructor.DefaultType),t.sanitize&&(t.template=H(t.template,t.whiteList,t.sanitizeFn)),t},i._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},i._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(W);null!==n&&n.length&&t.removeClass(n.join(""))},i._handlePopperPlacementChange=function(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},i._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass("fade"),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.tooltip"),o="object"==typeof n&&n;if((i||!/dispose|hide/.test(n))&&(i||(i=new t(this,o),e(this).data("bs.tooltip",i)),"string"==typeof n)){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return X}},{key:"NAME",get:function(){return U}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return Y}},{key:"EVENT_KEY",get:function(){return".bs.tooltip"}},{key:"DefaultType",get:function(){return z}}]),t}();e.fn[U]=$._jQueryInterface,e.fn[U].Constructor=$,e.fn[U].noConflict=function(){return e.fn[U]=M,$._jQueryInterface};var J="popover",G=e.fn[J],Z=new RegExp("(^|\\s)bs-popover\\S+","g"),tt=a(a({},$.Default),{},{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),et=a(a({},$.DefaultType),{},{content:"(string|element|function)"}),nt={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"},it=function(t){var n,i;function s(){return t.apply(this,arguments)||this}i=t,(n=s).prototype=Object.create(i.prototype),n.prototype.constructor=n,n.__proto__=i;var r=s.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},r.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},r.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(t.find(".popover-body"),n),t.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(Z);null!==n&&n.length>0&&t.removeClass(n.join(""))},s._jQueryInterface=function(t){return this.each((function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/dispose|hide/.test(t))&&(n||(n=new s(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new TypeError('No method named "'+t+'"');n[t]()}}))},o(s,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return tt}},{key:"NAME",get:function(){return J}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return nt}},{key:"EVENT_KEY",get:function(){return".bs.popover"}},{key:"DefaultType",get:function(){return et}}]),s}($);e.fn[J]=it._jQueryInterface,e.fn[J].Constructor=it,e.fn[J].noConflict=function(){return e.fn[J]=G,it._jQueryInterface};var ot="scrollspy",st=e.fn[ot],rt={offset:10,method:"auto",target:""},at={offset:"number",method:"string",target:"(string|element)"},lt=function(){function t(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" .nav-link,"+this._config.target+" .list-group-item,"+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on("scroll.bs.scrollspy",(function(t){return i._process(t)})),this.refresh(),this._process()}var n=t.prototype;return n.refresh=function(){var t=this,n=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?n:this._config.method,o="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map((function(t){var n,s=c.getSelectorFromElement(t);if(s&&(n=document.querySelector(s)),n){var r=n.getBoundingClientRect();if(r.width||r.height)return[e(n)[i]().top+o,s]}return null})).filter((function(t){return t})).sort((function(t,e){return t[0]-e[0]})).forEach((function(e){t._offsets.push(e[0]),t._targets.push(e[1])}))},n.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},n._getConfig=function(t){if("string"!=typeof(t=a(a({},rt),"object"==typeof t&&t?t:{})).target&&c.isElement(t.target)){var n=e(t.target).attr("id");n||(n=c.getUID(ot),e(t.target).attr("id",n)),t.target="#"+n}return c.typeCheckConfig(ot,t,at),t},n._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},n._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},n._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},n._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},n._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",").map((function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'})),i=e([].slice.call(document.querySelectorAll(n.join(","))));i.hasClass("dropdown-item")?(i.closest(".dropdown").find(".dropdown-toggle").addClass("active"),i.addClass("active")):(i.addClass("active"),i.parents(".nav, .list-group").prev(".nav-link, .list-group-item").addClass("active"),i.parents(".nav, .list-group").prev(".nav-item").children(".nav-link").addClass("active")),e(this._scrollElement).trigger("activate.bs.scrollspy",{relatedTarget:t})},n._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter((function(t){return t.classList.contains("active")})).forEach((function(t){return t.classList.remove("active")}))},t._jQueryInterface=function(n){return this.each((function(){var i=e(this).data("bs.scrollspy");if(i||(i=new t(this,"object"==typeof n&&n),e(this).data("bs.scrollspy",i)),"string"==typeof n){if("undefined"==typeof i[n])throw new TypeError('No method named "'+n+'"');i[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"Default",get:function(){return rt}}]),t}();e(window).on("load.bs.scrollspy.data-api",(function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),n=t.length;n--;){var i=e(t[n]);lt._jQueryInterface.call(i,i.data())}})),e.fn[ot]=lt._jQueryInterface,e.fn[ot].Constructor=lt,e.fn[ot].noConflict=function(){return e.fn[ot]=st,lt._jQueryInterface};var ct=e.fn.tab,ht=function(){function t(t){this._element=t}var n=t.prototype;return n.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass("active")||e(this._element).hasClass("disabled"))){var n,i,o=e(this._element).closest(".nav, .list-group")[0],s=c.getSelectorFromElement(this._element);if(o){var r="UL"===o.nodeName||"OL"===o.nodeName?"> li > .active":".active";i=(i=e.makeArray(e(o).find(r)))[i.length-1]}var a=e.Event("hide.bs.tab",{relatedTarget:this._element}),l=e.Event("show.bs.tab",{relatedTarget:i});if(i&&e(i).trigger(a),e(this._element).trigger(l),!l.isDefaultPrevented()&&!a.isDefaultPrevented()){s&&(n=document.querySelector(s)),this._activate(this._element,o);var h=function(){var n=e.Event("hidden.bs.tab",{relatedTarget:t._element}),o=e.Event("shown.bs.tab",{relatedTarget:i});e(i).trigger(n),e(t._element).trigger(o)};n?this._activate(n,n.parentNode,h):h()}}},n.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},n._activate=function(t,n,i){var o=this,s=(!n||"UL"!==n.nodeName&&"OL"!==n.nodeName?e(n).children(".active"):e(n).find("> li > .active"))[0],r=i&&s&&e(s).hasClass("fade"),a=function(){return o._transitionComplete(t,s,i)};if(s&&r){var l=c.getTransitionDurationFromElement(s);e(s).removeClass("show").one(c.TRANSITION_END,a).emulateTransitionEnd(l)}else a()},n._transitionComplete=function(t,n,i){if(n){e(n).removeClass("active");var o=e(n.parentNode).find("> .dropdown-menu .active")[0];o&&e(o).removeClass("active"),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass("active"),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),c.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&e(t.parentNode).hasClass("dropdown-menu")){var s=e(t).closest(".dropdown")[0];if(s){var r=[].slice.call(s.querySelectorAll(".dropdown-toggle"));e(r).addClass("active")}t.setAttribute("aria-expanded",!0)}i&&i()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.tab");if(o||(o=new t(this),i.data("bs.tab",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n]()}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}}]),t}();e(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',(function(t){t.preventDefault(),ht._jQueryInterface.call(e(this),"show")})),e.fn.tab=ht._jQueryInterface,e.fn.tab.Constructor=ht,e.fn.tab.noConflict=function(){return e.fn.tab=ct,ht._jQueryInterface};var ut=e.fn.toast,dt={animation:"boolean",autohide:"boolean",delay:"number"},ft={animation:!0,autohide:!0,delay:500},gt=function(){function t(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var n=t.prototype;return n.show=function(){var t=this,n=e.Event("show.bs.toast");if(e(this._element).trigger(n),!n.isDefaultPrevented()){this._config.animation&&this._element.classList.add("fade");var i=function(){t._element.classList.remove("showing"),t._element.classList.add("show"),e(t._element).trigger("shown.bs.toast"),t._config.autohide&&(t._timeout=setTimeout((function(){t.hide()}),t._config.delay))};if(this._element.classList.remove("hide"),c.reflow(this._element),this._element.classList.add("showing"),this._config.animation){var o=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,i).emulateTransitionEnd(o)}else i()}},n.hide=function(){if(this._element.classList.contains("show")){var t=e.Event("hide.bs.toast");e(this._element).trigger(t),t.isDefaultPrevented()||this._close()}},n.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains("show")&&this._element.classList.remove("show"),e(this._element).off("click.dismiss.bs.toast"),e.removeData(this._element,"bs.toast"),this._element=null,this._config=null},n._getConfig=function(t){return t=a(a(a({},ft),e(this._element).data()),"object"==typeof t&&t?t:{}),c.typeCheckConfig("toast",t,this.constructor.DefaultType),t},n._setListeners=function(){var t=this;e(this._element).on("click.dismiss.bs.toast",'[data-dismiss="toast"]',(function(){return t.hide()}))},n._close=function(){var t=this,n=function(){t._element.classList.add("hide"),e(t._element).trigger("hidden.bs.toast")};if(this._element.classList.remove("show"),this._config.animation){var i=c.getTransitionDurationFromElement(this._element);e(this._element).one(c.TRANSITION_END,n).emulateTransitionEnd(i)}else n()},t._jQueryInterface=function(n){return this.each((function(){var i=e(this),o=i.data("bs.toast");if(o||(o=new t(this,"object"==typeof n&&n),i.data("bs.toast",o)),"string"==typeof n){if("undefined"==typeof o[n])throw new TypeError('No method named "'+n+'"');o[n](this)}}))},o(t,null,[{key:"VERSION",get:function(){return"4.5.0"}},{key:"DefaultType",get:function(){return dt}},{key:"Default",get:function(){return ft}}]),t}();e.fn.toast=gt._jQueryInterface,e.fn.toast.Constructor=gt,e.fn.toast.noConflict=function(){return e.fn.toast=ut,gt._jQueryInterface},t.Alert=d,t.Button=g,t.Carousel=E,t.Collapse=D,t.Dropdown=j,t.Modal=R,t.Popover=it,t.Scrollspy=lt,t.Tab=ht,t.Toast=gt,t.Tooltip=$,t.Util=c,Object.defineProperty(t,"__esModule",{value:!0})}));