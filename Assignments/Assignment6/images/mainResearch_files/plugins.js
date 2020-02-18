// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/* Focus Overlay - v1.0.5
* https://github.com/mmahandev/FocusOverlay
* Copyright (c) 2019 mmahandev. Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).FocusOverlay=e()}(this,function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),n=t(function(t){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)}),o=(n.version,function(t){return"object"==typeof t?null!==t:"function"==typeof t}),i=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t},r=function(t){try{return!!t()}catch(t){return!0}},s=!r(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),c=e.document,a=o(c)&&o(c.createElement),u=!s&&!r(function(){return 7!=Object.defineProperty((t="div",a?c.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),l=Object.defineProperty,f={f:s?Object.defineProperty:function(t,e,n){if(i(t),e=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}(e,!0),i(n),u)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},h=s?function(t,e,n){return f.f(t,e,function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}(1,n))}:function(t,e,n){return t[e]=n,t},p={}.hasOwnProperty,d=function(t,e){return p.call(t,e)},v=0,y=Math.random(),m=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++v+y).toString(36))},g=t(function(t){var o=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:n.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),b=g("native-function-to-string",Function.toString),w=t(function(t){var o=m("src"),i=(""+b).split("toString");n.inspectSource=function(t){return b.call(t)},(t.exports=function(t,n,r,s){var c="function"==typeof r;c&&(d(r,"name")||h(r,"name",n)),t[n]!==r&&(c&&(d(r,o)||h(r,o,t[n]?""+t[n]:i.join(String(n)))),t===e?t[n]=r:s?t[n]?t[n]=r:h(t,n,r):(delete t[n],h(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[o]||b.call(this)})}),E=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}},x=function(t,o,i){var r,s,c,a,u=t&x.F,l=t&x.G,f=t&x.S,p=t&x.P,d=t&x.B,v=l?e:f?e[o]||(e[o]={}):(e[o]||{}).prototype,y=l?n:n[o]||(n[o]={}),m=y.prototype||(y.prototype={});for(r in l&&(i=o),i)c=((s=!u&&v&&void 0!==v[r])?v:i)[r],a=d&&s?E(c,e):p&&"function"==typeof c?E(Function.call,c):c,v&&w(v,r,c,t&x.U),y[r]!=c&&h(y,r,a),p&&m[r]!=c&&(m[r]=c)};e.core=n,x.F=1,x.G=2,x.S=4,x.P=8,x.B=16,x.W=32,x.U=64,x.R=128;var T,S=x,B={}.toString,O=function(t){return B.call(t).slice(8,-1)},F=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==O(t)?t.split(""):Object(t)},j=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t},_=function(t){return F(j(t))},k=Math.ceil,C=Math.floor,L=function(t){return isNaN(t=+t)?0:(t>0?C:k)(t)},M=Math.min,A=Math.max,P=Math.min,H=function(t){return function(e,n,o){var i,r,s=_(e),c=(i=s.length)>0?M(L(i),9007199254740991):0,a=function(t,e){return(t=L(t))<0?A(t+e,0):P(t,e)}(o,c);if(t&&n!=n){for(;c>a;)if((r=s[a++])!=r)return!0}else for(;c>a;a++)if((t||a in s)&&s[a]===n)return t||a||0;return!t&&-1}},D=g("keys"),I=H(!1),K=D[T="IE_PROTO"]||(D[T]=m(T)),z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),N=Object.keys||function(t){return function(t,e){var n,o=_(t),i=0,r=[];for(n in o)n!=K&&d(o,n)&&r.push(n);for(;e.length>i;)d(o,n=e[i++])&&(~I(r,n)||r.push(n));return r}(t,z)},R={f:Object.getOwnPropertySymbols},q={f:{}.propertyIsEnumerable},G=Object.assign,U=!G||r(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=G({},t)[n]||Object.keys(G({},e)).join("")!=o})?function(t,e){for(var n=Object(j(t)),o=arguments.length,i=1,r=R.f,c=q.f;o>i;)for(var a,u=F(arguments[i++]),l=r?N(u).concat(r(u)):N(u),f=l.length,h=0;f>h;)a=l[h++],s&&!c.call(u,a)||(n[a]=u[a]);return n}:G;S(S.S+S.F,"Object",{assign:U});var W=t(function(t){var n=g("wks"),o=e.Symbol,i="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=i&&o[t]||(i?o:m)("Symbol."+t))}).store=n}),J=W("unscopables"),Q=Array.prototype;null==Q[J]&&h(Q,J,{});var V=H(!0);S(S.P,"Array",{includes:function(t){return V(this,t,arguments.length>1?arguments[1]:void 0)}}),function(t){Q[J][t]=!0}("includes");var X=W("match"),Y=function(t,e,n){if(o(i=e)&&(void 0!==(r=i[X])?r:"RegExp"==O(i)))throw TypeError("String#"+n+" doesn't accept regex!");var i,r;return String(j(t))},Z=W("match");function $(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}S(S.P+S.F*function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Z]=!1,!"/./"[t](e)}catch(t){}}return!0}("includes"),"String",{includes:function(t){return!!~Y(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null});var tt=f.f,et=Function.prototype,nt=/^\s*function ([^ (]*)/;function ot(t){var e,n=0,o=0,i=0,r=0,s=ot.offsetBase;if(!s&&document.body&&((s=ot.offsetBase=document.createElement("div")).style.cssText="position:absolute;left:0;top:0",document.body.appendChild(s)),t&&t.ownerDocument===document&&"getBoundingClientRect"in t&&s){var c=t.getBoundingClientRect(),a=s.getBoundingClientRect();e=!0,n=c.left-a.left,o=c.top-a.top,i=c.right-c.left,r=c.bottom-c.top}return{found:e,left:n,top:o,width:i,height:r,right:n+i,bottom:o+r}}return"name"in et||s&&tt(et,"name",{configurable:!0,get:function(){try{return(""+this).match(nt)[1]}catch(t){return""}}}),function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.active=!1,this.scopedEl,this.focusBox,this.previousTarget,this.nextTarget,this.timeout=0,this.inScope=!1,this.transitionEvent=function(){var t=document.createElement("fakeelement"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var n in e)if(void 0!==t.style[n])return e[n]}(),this.options=function(){for(var t,e,n,o=arguments[0]||{},i=1,r=arguments.length;i<r;i++)if(null!==(t=arguments[i]))for(e in t)o!==(n=t[e])&&void 0!==n&&(o[e]=n);return o}({class:"focus-overlay",activeClass:"focus-overlay-active",animatingClass:"focus-overlay-animating",targetClass:"focus-overlay-target",zIndex:9001,duration:500,inactiveAfterDuration:!1,triggerKeys:[9,36,37,38,39,40,13,32,16,17,18,27],inactiveOnNonTriggerKey:!0,inactiveOnClick:!0,alwaysActive:!1,watchTransitionEnd:!0,onInit:function(){},onBeforeMove:function(){},onAfterMove:function(){},onDestroy:function(){}},n||{}),e instanceof Element?this.scopedEl=e:"string"==typeof e||e instanceof String?this.scopedEl=document.querySelector(e):this.scopedEl=document.querySelector("body"),this.onKeyDownHandler=this.onKeyDownHandler.bind(this),this.onFocusHandler=this.onFocusHandler.bind(this),this.moveFocusBox=this.moveFocusBox.bind(this),this.stop=this.stop.bind(this),this.init()}var e,n,o;return e=t,(n=[{key:"init",value:function(){this.options.alwaysActive?(this.active=!0,window.addEventListener("focusin",this.onFocusHandler,!0)):(window.addEventListener("keydown",this.onKeyDownHandler,!1),this.options.inactiveOnClick&&window.addEventListener("mousedown",this.stop,!1)),this._createFocusBox(),this.options.onInit(this)}},{key:"onKeyDownHandler",value:function(t){var e=this,n=t.which;this.options.triggerKeys.includes(n)?(!1===this.active&&(this.active=!0,window.addEventListener("focusin",this.onFocusHandler,!0)),setTimeout(function(){var t=document.activeElement;t instanceof HTMLIFrameElement&&e.scopedEl.contains(t)&&!0===e.active&&e.moveFocusBox(t)},5)):this.options.inactiveOnNonTriggerKey&&this.stop()}},{key:"_createFocusBox",value:function(){this.focusBox=document.createElement("div"),this.focusBox.setAttribute("aria-hidden","true"),this.focusBox.classList.add(this.options.class),Object.assign(this.focusBox.style,{position:"absolute",zIndex:this.options.zIndex,pointerEvents:"none"}),this.scopedEl.insertAdjacentElement("beforeend",this.focusBox)}},{key:"_cleanup",value:function(){null!=this.nextTarget&&(this.previousTarget=this.nextTarget,this.previousTarget.classList.remove(this.options.targetClass),this.previousTarget.removeEventListener(this.transitionEvent,this.moveFocusBox))}},{key:"onFocusHandler",value:function(t){var e=t.target;if(this._cleanup(),this.scopedEl.contains(e)){var n=this.nextTarget;if(this.inScope=!0,null!==e.getAttribute("data-focus")){var o=e.getAttribute("data-focus");this.nextTarget=document.querySelector("[data-focus='".concat(o,"']"))}else if(null!==e.getAttribute("data-focus-label")){var i=document.querySelector("[for='".concat(e.id,"']"));null===i&&(i=e.closest("label")),this.nextTarget=i}else{if(null!==e.getAttribute("data-focus-ignore"))return;this.nextTarget=e}clearTimeout(this.timeout),this.transitionEvent&&this.options.watchTransitionEnd&&this.nextTarget.addEventListener(this.transitionEvent,this.moveFocusBox),this.options.onBeforeMove(n,this.nextTarget,this),this.moveFocusBox(this.nextTarget)}else this.options.alwaysActive?this.inScope=!1:(this.inScope=!1,this.stop())}},{key:"stop",value:function(){this.active=!1,window.removeEventListener("focusin",this.onFocusHandler,!0),this._cleanup(),this.focusBox.classList.remove(this.options.activeClass)}},{key:"moveFocusBox",value:function(t){var e=this;if(t instanceof Event&&(t=document.activeElement),t.classList.add(this.options.targetClass),document.body.contains(t)&&t instanceof Element){var n=ot(t),o="".concat(n.width,"px"),i="".concat(n.height,"px"),r="".concat(n.left,"px"),s="".concat(n.top,"px");this.focusBox.classList.add(this.options.animatingClass),this.focusBox.classList.add(this.options.activeClass),Object.assign(this.focusBox.style,{width:o,height:i,left:r,top:s}),this.timeout=setTimeout(function(){e.focusBox.classList.remove(e.options.animatingClass),e.options.inactiveAfterDuration&&e.focusBox.classList.remove(e.options.activeClass),e.options.onAfterMove(e.previousTarget,t,e)},this.options.duration)}else this._cleanup()}},{key:"destroy",value:function(){this.focusBox.parentNode.removeChild(this.focusBox),null!=this.previousTarget&&this.previousTarget.classList.remove(this.options.targetClass),null!=this.nextTarget&&this.nextTarget.classList.remove(this.options.targetClass),window.removeEventListener("focusin",this.onFocusHandler,!0),window.removeEventListener("keydown",this.onKeyDownHandler,!1),window.removeEventListener("mousedown",this.stop,!1),this.options.onDestroy(this)}}])&&$(e.prototype,n),o&&$(e,o),t}()});

/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*75+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});
