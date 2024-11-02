function ef(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function tf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nf={exports:{}},ka={},rf={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),Sm=Symbol.for("react.portal"),Em=Symbol.for("react.fragment"),Pm=Symbol.for("react.strict_mode"),Om=Symbol.for("react.profiler"),Cm=Symbol.for("react.provider"),Rm=Symbol.for("react.context"),Tm=Symbol.for("react.forward_ref"),Nm=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),zm=Symbol.for("react.lazy"),nc=Symbol.iterator;function Dm(e){return e===null||typeof e!="object"?null:(e=nc&&e[nc]||e["@@iterator"],typeof e=="function"?e:null)}var of={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},af=Object.assign,lf={};function Ir(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}Ir.prototype.isReactComponent={};Ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sf(){}sf.prototype=Ir.prototype;function Ms(e,t,n){this.props=e,this.context=t,this.refs=lf,this.updater=n||of}var As=Ms.prototype=new sf;As.constructor=Ms;af(As,Ir.prototype);As.isPureReactComponent=!0;var rc=Array.isArray,uf=Object.prototype.hasOwnProperty,Fs={current:null},cf={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,n){var r,o={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)uf.call(t,r)&&!cf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:$o,type:e,key:i,ref:a,props:o,_owner:Fs.current}}function jm(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Is(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function Lm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oc=/\/+/g;function Ga(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lm(""+e.key):t.toString(36)}function Ni(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case $o:case Sm:a=!0}}if(a)return a=e,o=o(a),e=r===""?"."+Ga(a,0):r,rc(o)?(n="",e!=null&&(n=e.replace(oc,"$&/")+"/"),Ni(o,t,n,"",function(u){return u})):o!=null&&(Is(o)&&(o=jm(o,n+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(oc,"$&/")+"/")+e)),t.push(o)),1;if(a=0,r=r===""?".":r+":",rc(e))for(var l=0;l<e.length;l++){i=e[l];var s=r+Ga(i,l);a+=Ni(i,t,n,s,o)}else if(s=Dm(e),typeof s=="function")for(e=s.call(e),l=0;!(i=e.next()).done;)i=i.value,s=r+Ga(i,l++),a+=Ni(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ci(e,t,n){if(e==null)return e;var r=[],o=0;return Ni(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Mm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},_i={transition:null},Am={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:_i,ReactCurrentOwner:Fs};function ff(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ci,forEach:function(e,t,n){ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ci(e,function(){t++}),t},toArray:function(e){return ci(e,function(t){return t})||[]},only:function(e){if(!Is(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=Ir;J.Fragment=Em;J.Profiler=Om;J.PureComponent=Ms;J.StrictMode=Pm;J.Suspense=Nm;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Am;J.act=ff;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=af({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)uf.call(t,s)&&!cf.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$o,type:e.type,key:o,ref:i,props:r,_owner:a}};J.createContext=function(e){return e={$$typeof:Rm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Cm,_context:e},e.Consumer=e};J.createElement=df;J.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Tm,render:e}};J.isValidElement=Is;J.lazy=function(e){return{$$typeof:zm,_payload:{_status:-1,_result:e},_init:Mm}};J.memo=function(e,t){return{$$typeof:_m,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=_i.transition;_i.transition={};try{e()}finally{_i.transition=t}};J.unstable_act=ff;J.useCallback=function(e,t){return Qe.current.useCallback(e,t)};J.useContext=function(e){return Qe.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};J.useEffect=function(e,t){return Qe.current.useEffect(e,t)};J.useId=function(){return Qe.current.useId()};J.useImperativeHandle=function(e,t,n){return Qe.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Qe.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Qe.current.useReducer(e,t,n)};J.useRef=function(e){return Qe.current.useRef(e)};J.useState=function(e){return Qe.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Qe.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Qe.current.useTransition()};J.version="18.3.1";rf.exports=J;var R=rf.exports;const Q=tf(R),Fm=ef({__proto__:null,default:Q},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Im=R,Um=Symbol.for("react.element"),Bm=Symbol.for("react.fragment"),Hm=Object.prototype.hasOwnProperty,qm=Im.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vm={key:!0,ref:!0,__self:!0,__source:!0};function pf(e,t,n){var r,o={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Hm.call(t,r)&&!Vm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Um,type:e,key:i,ref:a,props:o,_owner:qm.current}}ka.Fragment=Bm;ka.jsx=pf;ka.jsxs=pf;nf.exports=ka;var P=nf.exports,_l={},hf={exports:{}},dt={},mf={exports:{}},gf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,V){var $=j.length;j.push(V);e:for(;0<$;){var ne=$-1>>>1,ue=j[ne];if(0<o(ue,V))j[ne]=V,j[$]=ue,$=ne;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var V=j[0],$=j.pop();if($!==V){j[0]=$;e:for(var ne=0,ue=j.length,_t=ue>>>1;ne<_t;){var Le=2*(ne+1)-1,bt=j[Le],Ve=Le+1,Ft=j[Ve];if(0>o(bt,$))Ve<ue&&0>o(Ft,bt)?(j[ne]=Ft,j[Ve]=$,ne=Ve):(j[ne]=bt,j[Le]=$,ne=Le);else if(Ve<ue&&0>o(Ft,$))j[ne]=Ft,j[Ve]=$,ne=Ve;else break e}}return V}function o(j,V){var $=j.sortIndex-V.sortIndex;return $!==0?$:j.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],c=1,d=null,p=3,x=!1,v=!1,h=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(j){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=j)r(u),V.sortIndex=V.expirationTime,t(s,V);else break;V=n(u)}}function S(j){if(h=!1,g(j),!v)if(n(s)!==null)v=!0,en(C);else{var V=n(u);V!==null&&ke(S,V.startTime-j)}}function C(j,V){v=!1,h&&(h=!1,m(T),T=-1),x=!0;var $=p;try{for(g(V),d=n(s);d!==null&&(!(d.expirationTime>V)||j&&!ie());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,p=d.priorityLevel;var ue=ne(d.expirationTime<=V);V=e.unstable_now(),typeof ue=="function"?d.callback=ue:d===n(s)&&r(s),g(V)}else r(s);d=n(s)}if(d!==null)var _t=!0;else{var Le=n(u);Le!==null&&ke(S,Le.startTime-V),_t=!1}return _t}finally{d=null,p=$,x=!1}}var b=!1,z=null,T=-1,D=5,U=-1;function ie(){return!(e.unstable_now()-U<D)}function me(){if(z!==null){var j=e.unstable_now();U=j;var V=!0;try{V=z(!0,j)}finally{V?Ee():(b=!1,z=null)}}else b=!1}var Ee;if(typeof f=="function")Ee=function(){f(me)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,Zt=Pe.port2;Pe.port1.onmessage=me,Ee=function(){Zt.postMessage(null)}}else Ee=function(){w(me,0)};function en(j){z=j,b||(b=!0,Ee())}function ke(j,V){T=w(function(){j(e.unstable_now())},V)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,en(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(j){switch(p){case 1:case 2:case 3:var V=3;break;default:V=p}var $=p;p=V;try{return j()}finally{p=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,V){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var $=p;p=j;try{return V()}finally{p=$}},e.unstable_scheduleCallback=function(j,V,$){var ne=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ne+$:ne):$=ne,j){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=$+ue,j={id:c++,callback:V,priorityLevel:j,startTime:$,expirationTime:ue,sortIndex:-1},$>ne?(j.sortIndex=$,t(u,j),n(s)===null&&j===n(u)&&(h?(m(T),T=-1):h=!0,ke(S,$-ne))):(j.sortIndex=ue,t(s,j),v||x||(v=!0,en(C))),j},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(j){var V=p;return function(){var $=p;p=V;try{return j.apply(this,arguments)}finally{p=$}}}})(gf);mf.exports=gf;var $m=mf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm=R,ct=$m;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vf=new Set,Eo={};function Yn(e,t){_r(e,t),_r(e+"Capture",t)}function _r(e,t){for(Eo[e]=t,e=0;e<t.length;e++)vf.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,Xm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ic={},ac={};function Qm(e){return zl.call(ac,e)?!0:zl.call(ic,e)?!1:Xm.test(e)?ac[e]=!0:(ic[e]=!0,!1)}function Jm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Km(e,t,n,r){if(t===null||typeof t>"u"||Jm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Je(e,t,n,r,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new Je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new Je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new Je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new Je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new Je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new Je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new Je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new Je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new Je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Us=/[\-:]([a-z])/g;function Bs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Us,Bs);Ie[t]=new Je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Us,Bs);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Us,Bs);Ie[t]=new Je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new Je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hs(e,t,n,r){var o=Ie.hasOwnProperty(t)?Ie[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Km(t,n,o,r)&&(n=null),r||o===null?Qm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Yt=Wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,di=Symbol.for("react.element"),pr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),qs=Symbol.for("react.strict_mode"),Dl=Symbol.for("react.profiler"),yf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),Vs=Symbol.for("react.forward_ref"),jl=Symbol.for("react.suspense"),Ll=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),xf=Symbol.for("react.offscreen"),lc=Symbol.iterator;function Kr(e){return e===null||typeof e!="object"?null:(e=lc&&e[lc]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Object.assign,Ya;function so(e){if(Ya===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ya=t&&t[1]||""}return`
`+Ya+e}var Za=!1;function el(e,t){if(!e||Za)return"";Za=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),a=o.length-1,l=i.length-1;1<=a&&0<=l&&o[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(o[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||o[a]!==i[l]){var s=`
`+o[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{Za=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?so(e):""}function Gm(e){switch(e.tag){case 5:return so(e.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return e=el(e.type,!1),e;case 11:return e=el(e.type.render,!1),e;case 1:return e=el(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case pr:return"Portal";case Dl:return"Profiler";case qs:return"StrictMode";case jl:return"Suspense";case Ll:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bf:return(e.displayName||"Context")+".Consumer";case yf:return(e._context.displayName||"Context")+".Provider";case Vs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function Ym(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zm(e){var t=wf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fi(e){e._valueTracker||(e._valueTracker=Zm(e))}function kf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Al(e,t){var n=t.checked;return ye({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function sc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Sn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sf(e,t){t=t.checked,t!=null&&Hs(e,"checked",t,!1)}function Fl(e,t){Sf(e,t);var n=Sn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Il(e,t.type,n):t.hasOwnProperty("defaultValue")&&Il(e,t.type,Sn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Il(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var uo=Array.isArray;function Pr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Sn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ul(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return ye({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(uo(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Sn(n)}}function Ef(e,t){var n=Sn(t.value),r=Sn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var pi,Of=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(pi=pi||document.createElement("div"),pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Po(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e0=["Webkit","ms","Moz","O"];Object.keys(mo).forEach(function(e){e0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mo[t]=mo[e]})});function Cf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mo.hasOwnProperty(e)&&mo[e]?(""+t).trim():t+"px"}function Rf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Cf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var t0=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hl(e,t){if(t){if(t0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function ql(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function Ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $l=null,Or=null,Cr=null;function fc(e){if(e=Qo(e)){if(typeof $l!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Ca(t),$l(e.stateNode,e.type,t))}}function Tf(e){Or?Cr?Cr.push(e):Cr=[e]:Or=e}function Nf(){if(Or){var e=Or,t=Cr;if(Cr=Or=null,fc(e),t)for(e=0;e<t.length;e++)fc(t[e])}}function _f(e,t){return e(t)}function zf(){}var tl=!1;function Df(e,t,n){if(tl)return e(t,n);tl=!0;try{return _f(e,t,n)}finally{tl=!1,(Or!==null||Cr!==null)&&(zf(),Nf())}}function Oo(e,t){var n=e.stateNode;if(n===null)return null;var r=Ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Wl=!1;if(Qt)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{Wl=!1}function n0(e,t,n,r,o,i,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var go=!1,Wi=null,Xi=!1,Xl=null,r0={onError:function(e){go=!0,Wi=e}};function o0(e,t,n,r,o,i,a,l,s){go=!1,Wi=null,n0.apply(r0,arguments)}function i0(e,t,n,r,o,i,a,l,s){if(o0.apply(this,arguments),go){if(go){var u=Wi;go=!1,Wi=null}else throw Error(_(198));Xi||(Xi=!0,Xl=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pc(e){if(Zn(e)!==e)throw Error(_(188))}function a0(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return pc(o),e;if(i===r)return pc(o),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=i;else{for(var a=!1,l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Lf(e){return e=a0(e),e!==null?Mf(e):null}function Mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Mf(e);if(t!==null)return t;e=e.sibling}return null}var Af=ct.unstable_scheduleCallback,hc=ct.unstable_cancelCallback,l0=ct.unstable_shouldYield,s0=ct.unstable_requestPaint,Se=ct.unstable_now,u0=ct.unstable_getCurrentPriorityLevel,Xs=ct.unstable_ImmediatePriority,Ff=ct.unstable_UserBlockingPriority,Qi=ct.unstable_NormalPriority,c0=ct.unstable_LowPriority,If=ct.unstable_IdlePriority,Sa=null,Mt=null;function d0(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Sa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:h0,f0=Math.log,p0=Math.LN2;function h0(e){return e>>>=0,e===0?32:31-(f0(e)/p0|0)|0}var hi=64,mi=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ji(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~o;l!==0?r=co(l):(i&=a,i!==0&&(r=co(i)))}else a=n&~o,a!==0?r=co(a):i!==0&&(r=co(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),o=1<<n,r|=e[n],t&=~o;return r}function m0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Ct(i),l=1<<a,s=o[a];s===-1?(!(l&n)||l&r)&&(o[a]=m0(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}function Ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Uf(){var e=hi;return hi<<=1,!(hi&4194240)&&(hi=64),e}function nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function v0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Qs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function Bf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hf,Js,qf,Vf,$f,Jl=!1,gi=[],mn=null,gn=null,vn=null,Co=new Map,Ro=new Map,cn=[],y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(e,t){switch(e){case"focusin":case"focusout":mn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Co.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function Yr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Qo(t),t!==null&&Js(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function b0(e,t,n,r,o){switch(t){case"focusin":return mn=Yr(mn,e,t,n,r,o),!0;case"dragenter":return gn=Yr(gn,e,t,n,r,o),!0;case"mouseover":return vn=Yr(vn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Co.set(i,Yr(Co.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ro.set(i,Yr(Ro.get(i)||null,e,t,n,r,o)),!0}return!1}function Wf(e){var t=An(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=jf(n),t!==null){e.blockedOn=t,$f(e.priority,function(){qf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=Qo(n),t!==null&&Js(t),e.blockedOn=n,!1;t.shift()}return!0}function gc(e,t,n){zi(e)&&n.delete(t)}function x0(){Jl=!1,mn!==null&&zi(mn)&&(mn=null),gn!==null&&zi(gn)&&(gn=null),vn!==null&&zi(vn)&&(vn=null),Co.forEach(gc),Ro.forEach(gc)}function Zr(e,t){e.blockedOn===t&&(e.blockedOn=null,Jl||(Jl=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,x0)))}function To(e){function t(o){return Zr(o,e)}if(0<gi.length){Zr(gi[0],e);for(var n=1;n<gi.length;n++){var r=gi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mn!==null&&Zr(mn,e),gn!==null&&Zr(gn,e),vn!==null&&Zr(vn,e),Co.forEach(t),Ro.forEach(t),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)Wf(n),n.blockedOn===null&&cn.shift()}var Rr=Yt.ReactCurrentBatchConfig,Ki=!0;function w0(e,t,n,r){var o=oe,i=Rr.transition;Rr.transition=null;try{oe=1,Ks(e,t,n,r)}finally{oe=o,Rr.transition=i}}function k0(e,t,n,r){var o=oe,i=Rr.transition;Rr.transition=null;try{oe=4,Ks(e,t,n,r)}finally{oe=o,Rr.transition=i}}function Ks(e,t,n,r){if(Ki){var o=Kl(e,t,n,r);if(o===null)fl(e,t,r,Gi,n),mc(e,r);else if(b0(o,e,t,n,r))r.stopPropagation();else if(mc(e,r),t&4&&-1<y0.indexOf(e)){for(;o!==null;){var i=Qo(o);if(i!==null&&Hf(i),i=Kl(e,t,n,r),i===null&&fl(e,t,r,Gi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else fl(e,t,r,null,n)}}var Gi=null;function Kl(e,t,n,r){if(Gi=null,e=Ws(r),e=An(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function Xf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u0()){case Xs:return 1;case Ff:return 4;case Qi:case c0:return 16;case If:return 536870912;default:return 16}default:return 16}}var fn=null,Gs=null,Di=null;function Qf(){if(Di)return Di;var e,t=Gs,n=t.length,r,o="value"in fn?fn.value:fn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===o[i-r];r++);return Di=o.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vi(){return!0}function vc(){return!1}function ft(e){function t(n,r,o,i,a){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:vc,this.isPropagationStopped=vc,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ys=ft(Ur),Xo=ye({},Ur,{view:0,detail:0}),S0=ft(Xo),rl,ol,eo,Ea=ye({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==eo&&(eo&&e.type==="mousemove"?(rl=e.screenX-eo.screenX,ol=e.screenY-eo.screenY):ol=rl=0,eo=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:ol}}),yc=ft(Ea),E0=ye({},Ea,{dataTransfer:0}),P0=ft(E0),O0=ye({},Xo,{relatedTarget:0}),il=ft(O0),C0=ye({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),R0=ft(C0),T0=ye({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),N0=ft(T0),_0=ye({},Ur,{data:0}),bc=ft(_0),z0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=j0[e])?!!t[e]:!1}function Zs(){return L0}var M0=ye({},Xo,{key:function(e){if(e.key){var t=z0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zs,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),A0=ft(M0),F0=ye({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xc=ft(F0),I0=ye({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zs}),U0=ft(I0),B0=ye({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),H0=ft(B0),q0=ye({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),V0=ft(q0),$0=[9,13,27,32],eu=Qt&&"CompositionEvent"in window,vo=null;Qt&&"documentMode"in document&&(vo=document.documentMode);var W0=Qt&&"TextEvent"in window&&!vo,Jf=Qt&&(!eu||vo&&8<vo&&11>=vo),wc=" ",kc=!1;function Kf(e,t){switch(e){case"keyup":return $0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function X0(e,t){switch(e){case"compositionend":return Gf(t);case"keypress":return t.which!==32?null:(kc=!0,wc);case"textInput":return e=t.data,e===wc&&kc?null:e;default:return null}}function Q0(e,t){if(mr)return e==="compositionend"||!eu&&Kf(e,t)?(e=Qf(),Di=Gs=fn=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jf&&t.locale!=="ko"?null:t.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!J0[e.type]:t==="textarea"}function Yf(e,t,n,r){Tf(r),t=Yi(t,"onChange"),0<t.length&&(n=new Ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yo=null,No=null;function K0(e){up(e,0)}function Pa(e){var t=yr(e);if(kf(t))return e}function G0(e,t){if(e==="change")return t}var Zf=!1;if(Qt){var al;if(Qt){var ll="oninput"in document;if(!ll){var Ec=document.createElement("div");Ec.setAttribute("oninput","return;"),ll=typeof Ec.oninput=="function"}al=ll}else al=!1;Zf=al&&(!document.documentMode||9<document.documentMode)}function Pc(){yo&&(yo.detachEvent("onpropertychange",ep),No=yo=null)}function ep(e){if(e.propertyName==="value"&&Pa(No)){var t=[];Yf(t,No,e,Ws(e)),Df(K0,t)}}function Y0(e,t,n){e==="focusin"?(Pc(),yo=t,No=n,yo.attachEvent("onpropertychange",ep)):e==="focusout"&&Pc()}function Z0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(No)}function eg(e,t){if(e==="click")return Pa(t)}function tg(e,t){if(e==="input"||e==="change")return Pa(t)}function ng(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:ng;function _o(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zl.call(t,o)||!Tt(e[o],t[o]))return!1}return!0}function Oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cc(e,t){var n=Oc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oc(n)}}function tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function np(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rg(e){var t=np(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tp(n.ownerDocument.documentElement,n)){if(r!==null&&tu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Cc(n,i);var a=Cc(n,r);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var og=Qt&&"documentMode"in document&&11>=document.documentMode,gr=null,Gl=null,bo=null,Yl=!1;function Rc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yl||gr==null||gr!==$i(r)||(r=gr,"selectionStart"in r&&tu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&_o(bo,r)||(bo=r,r=Yi(Gl,"onSelect"),0<r.length&&(t=new Ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function yi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var vr={animationend:yi("Animation","AnimationEnd"),animationiteration:yi("Animation","AnimationIteration"),animationstart:yi("Animation","AnimationStart"),transitionend:yi("Transition","TransitionEnd")},sl={},rp={};Qt&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Oa(e){if(sl[e])return sl[e];if(!vr[e])return e;var t=vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rp)return sl[e]=t[n];return e}var op=Oa("animationend"),ip=Oa("animationiteration"),ap=Oa("animationstart"),lp=Oa("transitionend"),sp=new Map,Tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,t){sp.set(e,t),Yn(t,[e])}for(var ul=0;ul<Tc.length;ul++){var cl=Tc[ul],ig=cl.toLowerCase(),ag=cl[0].toUpperCase()+cl.slice(1);Pn(ig,"on"+ag)}Pn(op,"onAnimationEnd");Pn(ip,"onAnimationIteration");Pn(ap,"onAnimationStart");Pn("dblclick","onDoubleClick");Pn("focusin","onFocus");Pn("focusout","onBlur");Pn(lp,"onTransitionEnd");_r("onMouseEnter",["mouseout","mouseover"]);_r("onMouseLeave",["mouseout","mouseover"]);_r("onPointerEnter",["pointerout","pointerover"]);_r("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,i0(r,t,void 0,e),e.currentTarget=null}function up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;Nc(o,l,u),i=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;Nc(o,l,u),i=s}}}if(Xi)throw e=Xl,Xi=!1,Xl=null,e}function ce(e,t){var n=t[rs];n===void 0&&(n=t[rs]=new Set);var r=e+"__bubble";n.has(r)||(cp(t,e,2,!1),n.add(r))}function dl(e,t,n){var r=0;t&&(r|=4),cp(n,e,r,t)}var bi="_reactListening"+Math.random().toString(36).slice(2);function zo(e){if(!e[bi]){e[bi]=!0,vf.forEach(function(n){n!=="selectionchange"&&(lg.has(n)||dl(n,!1,e),dl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bi]||(t[bi]=!0,dl("selectionchange",!1,t))}}function cp(e,t,n,r){switch(Xf(t)){case 1:var o=w0;break;case 4:o=k0;break;default:o=Ks}n=o.bind(null,t,n,e),o=void 0,!Wl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function fl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;a=a.return}for(;l!==null;){if(a=An(l),a===null)return;if(s=a.tag,s===5||s===6){r=i=a;continue e}l=l.parentNode}}r=r.return}Df(function(){var u=i,c=Ws(n),d=[];e:{var p=sp.get(e);if(p!==void 0){var x=Ys,v=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":x=A0;break;case"focusin":v="focus",x=il;break;case"focusout":v="blur",x=il;break;case"beforeblur":case"afterblur":x=il;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=U0;break;case op:case ip:case ap:x=R0;break;case lp:x=H0;break;case"scroll":x=S0;break;case"wheel":x=V0;break;case"copy":case"cut":case"paste":x=N0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=xc}var h=(t&4)!==0,w=!h&&e==="scroll",m=h?p!==null?p+"Capture":null:p;h=[];for(var f=u,g;f!==null;){g=f;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Oo(f,m),S!=null&&h.push(Do(f,S,g)))),w)break;f=f.return}0<h.length&&(p=new x(p,v,null,n,c),d.push({event:p,listeners:h}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",p&&n!==Vl&&(v=n.relatedTarget||n.fromElement)&&(An(v)||v[Jt]))break e;if((x||p)&&(p=c.window===c?c:(p=c.ownerDocument)?p.defaultView||p.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?An(v):null,v!==null&&(w=Zn(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(h=yc,S="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(h=xc,S="onPointerLeave",m="onPointerEnter",f="pointer"),w=x==null?p:yr(x),g=v==null?p:yr(v),p=new h(S,f+"leave",x,n,c),p.target=w,p.relatedTarget=g,S=null,An(c)===u&&(h=new h(m,f+"enter",v,n,c),h.target=g,h.relatedTarget=w,S=h),w=S,x&&v)t:{for(h=x,m=v,f=0,g=h;g;g=ar(g))f++;for(g=0,S=m;S;S=ar(S))g++;for(;0<f-g;)h=ar(h),f--;for(;0<g-f;)m=ar(m),g--;for(;f--;){if(h===m||m!==null&&h===m.alternate)break t;h=ar(h),m=ar(m)}h=null}else h=null;x!==null&&_c(d,p,x,h,!1),v!==null&&w!==null&&_c(d,w,v,h,!0)}}e:{if(p=u?yr(u):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var C=G0;else if(Sc(p))if(Zf)C=tg;else{C=Z0;var b=Y0}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=eg);if(C&&(C=C(e,u))){Yf(d,C,n,c);break e}b&&b(e,p,u),e==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&Il(p,"number",p.value)}switch(b=u?yr(u):window,e){case"focusin":(Sc(b)||b.contentEditable==="true")&&(gr=b,Gl=u,bo=null);break;case"focusout":bo=Gl=gr=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Rc(d,n,c);break;case"selectionchange":if(og)break;case"keydown":case"keyup":Rc(d,n,c)}var z;if(eu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else mr?Kf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Jf&&n.locale!=="ko"&&(mr||T!=="onCompositionStart"?T==="onCompositionEnd"&&mr&&(z=Qf()):(fn=c,Gs="value"in fn?fn.value:fn.textContent,mr=!0)),b=Yi(u,T),0<b.length&&(T=new bc(T,e,null,n,c),d.push({event:T,listeners:b}),z?T.data=z:(z=Gf(n),z!==null&&(T.data=z)))),(z=W0?X0(e,n):Q0(e,n))&&(u=Yi(u,"onBeforeInput"),0<u.length&&(c=new bc("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=z))}up(d,t)})}function Do(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Oo(e,n),i!=null&&r.unshift(Do(e,i,o)),i=Oo(e,t),i!=null&&r.push(Do(e,i,o))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,n,r,o){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Oo(n,i),s!=null&&a.unshift(Do(n,s,l))):o||(s=Oo(n,i),s!=null&&a.push(Do(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var sg=/\r\n?/g,ug=/\u0000|\uFFFD/g;function zc(e){return(typeof e=="string"?e:""+e).replace(sg,`
`).replace(ug,"")}function xi(e,t,n){if(t=zc(t),zc(e)!==t&&n)throw Error(_(425))}function Zi(){}var Zl=null,es=null;function ts(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ns=typeof setTimeout=="function"?setTimeout:void 0,cg=typeof clearTimeout=="function"?clearTimeout:void 0,Dc=typeof Promise=="function"?Promise:void 0,dg=typeof queueMicrotask=="function"?queueMicrotask:typeof Dc<"u"?function(e){return Dc.resolve(null).then(e).catch(fg)}:ns;function fg(e){setTimeout(function(){throw e})}function pl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),To(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);To(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Br,jo="__reactProps$"+Br,Jt="__reactContainer$"+Br,rs="__reactEvents$"+Br,pg="__reactListeners$"+Br,hg="__reactHandles$"+Br;function An(e){var t=e[Lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=jc(e);e!==null;){if(n=e[Lt])return n;e=jc(e)}return t}e=n,n=e.parentNode}return null}function Qo(e){return e=e[Lt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Ca(e){return e[jo]||null}var os=[],br=-1;function On(e){return{current:e}}function de(e){0>br||(e.current=os[br],os[br]=null,br--)}function se(e,t){br++,os[br]=e.current,e.current=t}var En={},qe=On(En),Ze=On(!1),$n=En;function zr(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function et(e){return e=e.childContextTypes,e!=null}function ea(){de(Ze),de(qe)}function Lc(e,t,n){if(qe.current!==En)throw Error(_(168));se(qe,t),se(Ze,n)}function dp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,Ym(e)||"Unknown",o));return ye({},n,r)}function ta(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,$n=qe.current,se(qe,e),se(Ze,Ze.current),!0}function Mc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=dp(e,t,$n),r.__reactInternalMemoizedMergedChildContext=e,de(Ze),de(qe),se(qe,e)):de(Ze),se(Ze,n)}var qt=null,Ra=!1,hl=!1;function fp(e){qt===null?qt=[e]:qt.push(e)}function mg(e){Ra=!0,fp(e)}function Cn(){if(!hl&&qt!==null){hl=!0;var e=0,t=oe;try{var n=qt;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qt=null,Ra=!1}catch(o){throw qt!==null&&(qt=qt.slice(e+1)),Af(Xs,Cn),o}finally{oe=t,hl=!1}}return null}var xr=[],wr=0,na=null,ra=0,pt=[],ht=0,Wn=null,Vt=1,$t="";function Dn(e,t){xr[wr++]=ra,xr[wr++]=na,na=e,ra=t}function pp(e,t,n){pt[ht++]=Vt,pt[ht++]=$t,pt[ht++]=Wn,Wn=e;var r=Vt;e=$t;var o=32-Ct(r)-1;r&=~(1<<o),n+=1;var i=32-Ct(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Vt=1<<32-Ct(t)+o|n<<o|r,$t=i+e}else Vt=1<<i|n<<o|r,$t=e}function nu(e){e.return!==null&&(Dn(e,1),pp(e,1,0))}function ru(e){for(;e===na;)na=xr[--wr],xr[wr]=null,ra=xr[--wr],xr[wr]=null;for(;e===Wn;)Wn=pt[--ht],pt[ht]=null,$t=pt[--ht],pt[ht]=null,Vt=pt[--ht],pt[ht]=null}var st=null,lt=null,he=!1,Pt=null;function hp(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ac(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,lt=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:Vt,overflow:$t}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,lt=null,!0):!1;default:return!1}}function is(e){return(e.mode&1)!==0&&(e.flags&128)===0}function as(e){if(he){var t=lt;if(t){var n=t;if(!Ac(e,t)){if(is(e))throw Error(_(418));t=yn(n.nextSibling);var r=st;t&&Ac(e,t)?hp(r,n):(e.flags=e.flags&-4097|2,he=!1,st=e)}}else{if(is(e))throw Error(_(418));e.flags=e.flags&-4097|2,he=!1,st=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function wi(e){if(e!==st)return!1;if(!he)return Fc(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ts(e.type,e.memoizedProps)),t&&(t=lt)){if(is(e))throw mp(),Error(_(418));for(;t;)hp(e,t),t=yn(t.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=st?yn(e.stateNode.nextSibling):null;return!0}function mp(){for(var e=lt;e;)e=yn(e.nextSibling)}function Dr(){lt=st=null,he=!1}function ou(e){Pt===null?Pt=[e]:Pt.push(e)}var gg=Yt.ReactCurrentBatchConfig;function to(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=o.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function ki(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ic(e){var t=e._init;return t(e._payload)}function gp(e){function t(m,f){if(e){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function o(m,f){return m=kn(m,f),m.index=0,m.sibling=null,m}function i(m,f,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,f,g,S){return f===null||f.tag!==6?(f=wl(g,m.mode,S),f.return=m,f):(f=o(f,g),f.return=m,f)}function s(m,f,g,S){var C=g.type;return C===hr?c(m,f,g.props.children,S,g.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sn&&Ic(C)===f.type)?(S=o(f,g.props),S.ref=to(m,f,g),S.return=m,S):(S=Bi(g.type,g.key,g.props,null,m.mode,S),S.ref=to(m,f,g),S.return=m,S)}function u(m,f,g,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=kl(g,m.mode,S),f.return=m,f):(f=o(f,g.children||[]),f.return=m,f)}function c(m,f,g,S,C){return f===null||f.tag!==7?(f=qn(g,m.mode,S,C),f.return=m,f):(f=o(f,g),f.return=m,f)}function d(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wl(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case di:return g=Bi(f.type,f.key,f.props,null,m.mode,g),g.ref=to(m,null,f),g.return=m,g;case pr:return f=kl(f,m.mode,g),f.return=m,f;case sn:var S=f._init;return d(m,S(f._payload),g)}if(uo(f)||Kr(f))return f=qn(f,m.mode,g,null),f.return=m,f;ki(m,f)}return null}function p(m,f,g,S){var C=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:l(m,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case di:return g.key===C?s(m,f,g,S):null;case pr:return g.key===C?u(m,f,g,S):null;case sn:return C=g._init,p(m,f,C(g._payload),S)}if(uo(g)||Kr(g))return C!==null?null:c(m,f,g,S,null);ki(m,g)}return null}function x(m,f,g,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,l(f,m,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case di:return m=m.get(S.key===null?g:S.key)||null,s(f,m,S,C);case pr:return m=m.get(S.key===null?g:S.key)||null,u(f,m,S,C);case sn:var b=S._init;return x(m,f,g,b(S._payload),C)}if(uo(S)||Kr(S))return m=m.get(g)||null,c(f,m,S,C,null);ki(f,S)}return null}function v(m,f,g,S){for(var C=null,b=null,z=f,T=f=0,D=null;z!==null&&T<g.length;T++){z.index>T?(D=z,z=null):D=z.sibling;var U=p(m,z,g[T],S);if(U===null){z===null&&(z=D);break}e&&z&&U.alternate===null&&t(m,z),f=i(U,f,T),b===null?C=U:b.sibling=U,b=U,z=D}if(T===g.length)return n(m,z),he&&Dn(m,T),C;if(z===null){for(;T<g.length;T++)z=d(m,g[T],S),z!==null&&(f=i(z,f,T),b===null?C=z:b.sibling=z,b=z);return he&&Dn(m,T),C}for(z=r(m,z);T<g.length;T++)D=x(z,m,T,g[T],S),D!==null&&(e&&D.alternate!==null&&z.delete(D.key===null?T:D.key),f=i(D,f,T),b===null?C=D:b.sibling=D,b=D);return e&&z.forEach(function(ie){return t(m,ie)}),he&&Dn(m,T),C}function h(m,f,g,S){var C=Kr(g);if(typeof C!="function")throw Error(_(150));if(g=C.call(g),g==null)throw Error(_(151));for(var b=C=null,z=f,T=f=0,D=null,U=g.next();z!==null&&!U.done;T++,U=g.next()){z.index>T?(D=z,z=null):D=z.sibling;var ie=p(m,z,U.value,S);if(ie===null){z===null&&(z=D);break}e&&z&&ie.alternate===null&&t(m,z),f=i(ie,f,T),b===null?C=ie:b.sibling=ie,b=ie,z=D}if(U.done)return n(m,z),he&&Dn(m,T),C;if(z===null){for(;!U.done;T++,U=g.next())U=d(m,U.value,S),U!==null&&(f=i(U,f,T),b===null?C=U:b.sibling=U,b=U);return he&&Dn(m,T),C}for(z=r(m,z);!U.done;T++,U=g.next())U=x(z,m,T,U.value,S),U!==null&&(e&&U.alternate!==null&&z.delete(U.key===null?T:U.key),f=i(U,f,T),b===null?C=U:b.sibling=U,b=U);return e&&z.forEach(function(me){return t(m,me)}),he&&Dn(m,T),C}function w(m,f,g,S){if(typeof g=="object"&&g!==null&&g.type===hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case di:e:{for(var C=g.key,b=f;b!==null;){if(b.key===C){if(C=g.type,C===hr){if(b.tag===7){n(m,b.sibling),f=o(b,g.props.children),f.return=m,m=f;break e}}else if(b.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===sn&&Ic(C)===b.type){n(m,b.sibling),f=o(b,g.props),f.ref=to(m,b,g),f.return=m,m=f;break e}n(m,b);break}else t(m,b);b=b.sibling}g.type===hr?(f=qn(g.props.children,m.mode,S,g.key),f.return=m,m=f):(S=Bi(g.type,g.key,g.props,null,m.mode,S),S.ref=to(m,f,g),S.return=m,m=S)}return a(m);case pr:e:{for(b=g.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=o(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=kl(g,m.mode,S),f.return=m,m=f}return a(m);case sn:return b=g._init,w(m,f,b(g._payload),S)}if(uo(g))return v(m,f,g,S);if(Kr(g))return h(m,f,g,S);ki(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=o(f,g),f.return=m,m=f):(n(m,f),f=wl(g,m.mode,S),f.return=m,m=f),a(m)):n(m,f)}return w}var jr=gp(!0),vp=gp(!1),oa=On(null),ia=null,kr=null,iu=null;function au(){iu=kr=ia=null}function lu(e){var t=oa.current;de(oa),e._currentValue=t}function ls(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Tr(e,t){ia=e,iu=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(iu!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(ia===null)throw Error(_(308));kr=e,ia.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var Fn=null;function su(e){Fn===null?Fn=[e]:Fn.push(e)}function yp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,su(t)):(n.next=o.next,o.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var un=!1;function uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function bn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Kt(e,n)}return o=r.interleaved,o===null?(t.next=t,su(r)):(t.next=o.next,o.next=t),r.interleaved=t,Kt(e,n)}function Li(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}function Uc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var o=e.updateQueue;un=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?i=u:a.next=u,a=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==a&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(i!==null){var d=o.baseState;a=0,c=u=s=null,l=i;do{var p=l.lane,x=l.eventTime;if((r&p)===p){c!==null&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,h=l;switch(p=t,x=n,h.tag){case 1:if(v=h.payload,typeof v=="function"){d=v.call(x,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=h.payload,p=typeof v=="function"?v.call(x,d,p):v,p==null)break e;d=ye({},d,p);break e;case 2:un=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[l]:p.push(l))}else x={eventTime:x,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=x,s=d):c=c.next=x,a|=p;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;p=l,l=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(c===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Qn|=a,e.lanes=a,e.memoizedState=d}}function Bc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var Jo={},At=On(Jo),Lo=On(Jo),Mo=On(Jo);function In(e){if(e===Jo)throw Error(_(174));return e}function cu(e,t){switch(se(Mo,t),se(Lo,e),se(At,Jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bl(t,e)}de(At),se(At,t)}function Lr(){de(At),de(Lo),de(Mo)}function xp(e){In(Mo.current);var t=In(At.current),n=Bl(t,e.type);t!==n&&(se(Lo,e),se(At,n))}function du(e){Lo.current===e&&(de(At),de(Lo))}var ge=On(0);function la(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ml=[];function fu(){for(var e=0;e<ml.length;e++)ml[e]._workInProgressVersionPrimary=null;ml.length=0}var Mi=Yt.ReactCurrentDispatcher,gl=Yt.ReactCurrentBatchConfig,Xn=0,ve=null,Ne=null,De=null,sa=!1,xo=!1,Ao=0,vg=0;function Ue(){throw Error(_(321))}function pu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function hu(e,t,n,r,o,i){if(Xn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mi.current=e===null||e.memoizedState===null?wg:kg,e=n(r,o),xo){i=0;do{if(xo=!1,Ao=0,25<=i)throw Error(_(301));i+=1,De=Ne=null,t.updateQueue=null,Mi.current=Sg,e=n(r,o)}while(xo)}if(Mi.current=ua,t=Ne!==null&&Ne.next!==null,Xn=0,De=Ne=ve=null,sa=!1,t)throw Error(_(300));return e}function mu(){var e=Ao!==0;return Ao=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ve.memoizedState=De=e:De=De.next=e,De}function yt(){if(Ne===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var t=De===null?ve.memoizedState:De.next;if(t!==null)De=t,Ne=e;else{if(e===null)throw Error(_(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},De===null?ve.memoizedState=De=e:De=De.next=e}return De}function Fo(e,t){return typeof t=="function"?t(e):t}function vl(e){var t=yt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=Ne,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=a=null,s=null,u=i;do{var c=u.lane;if((Xn&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,ve.lanes|=c,Qn|=c}u=u.next}while(u!==null&&u!==i);s===null?a=r:s.next=l,Tt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,Qn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function yl(e){var t=yt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Tt(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function wp(){}function kp(e,t){var n=ve,r=yt(),o=t(),i=!Tt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ye=!0),r=r.queue,gu(Pp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,Io(9,Ep.bind(null,n,r,o,t),void 0,null),je===null)throw Error(_(349));Xn&30||Sp(n,t,o)}return o}function Sp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ep(e,t,n,r){t.value=n,t.getSnapshot=r,Op(t)&&Cp(e)}function Pp(e,t,n){return n(function(){Op(t)&&Cp(e)})}function Op(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function Cp(e){var t=Kt(e,1);t!==null&&Rt(t,e,1,-1)}function Hc(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:e},t.queue=e,e=e.dispatch=xg.bind(null,ve,e),[t.memoizedState,e]}function Io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Rp(){return yt().memoizedState}function Ai(e,t,n,r){var o=jt();ve.flags|=e,o.memoizedState=Io(1|t,n,void 0,r===void 0?null:r)}function Ta(e,t,n,r){var o=yt();r=r===void 0?null:r;var i=void 0;if(Ne!==null){var a=Ne.memoizedState;if(i=a.destroy,r!==null&&pu(r,a.deps)){o.memoizedState=Io(t,n,i,r);return}}ve.flags|=e,o.memoizedState=Io(1|t,n,i,r)}function qc(e,t){return Ai(8390656,8,e,t)}function gu(e,t){return Ta(2048,8,e,t)}function Tp(e,t){return Ta(4,2,e,t)}function Np(e,t){return Ta(4,4,e,t)}function _p(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zp(e,t,n){return n=n!=null?n.concat([e]):null,Ta(4,4,_p.bind(null,t,e),n)}function vu(){}function Dp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function jp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Lp(e,t,n){return Xn&21?(Tt(n,t)||(n=Uf(),ve.lanes|=n,Qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n)}function yg(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=gl.transition;gl.transition={};try{e(!1),t()}finally{oe=n,gl.transition=r}}function Mp(){return yt().memoizedState}function bg(e,t,n){var r=wn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ap(e))Fp(t,n);else if(n=yp(e,t,n,r),n!==null){var o=Xe();Rt(n,e,r,o),Ip(n,t,r)}}function xg(e,t,n){var r=wn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ap(e))Fp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Tt(l,a)){var s=t.interleaved;s===null?(o.next=o,su(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=yp(e,t,o,r),n!==null&&(o=Xe(),Rt(n,e,r,o),Ip(n,t,r))}}function Ap(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Fp(e,t){xo=sa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ip(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qs(e,n)}}var ua={readContext:vt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},wg={readContext:vt,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:qc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ai(4194308,4,_p.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ai(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ai(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bg.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:Hc,useDebugValue:vu,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=Hc(!1),t=e[0];return e=yg.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=jt();if(he){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),je===null)throw Error(_(349));Xn&30||Sp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,qc(Pp.bind(null,r,i,e),[e]),r.flags|=2048,Io(9,Ep.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jt(),t=je.identifierPrefix;if(he){var n=$t,r=Vt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ao++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kg={readContext:vt,useCallback:Dp,useContext:vt,useEffect:gu,useImperativeHandle:zp,useInsertionEffect:Tp,useLayoutEffect:Np,useMemo:jp,useReducer:vl,useRef:Rp,useState:function(){return vl(Fo)},useDebugValue:vu,useDeferredValue:function(e){var t=yt();return Lp(t,Ne.memoizedState,e)},useTransition:function(){var e=vl(Fo)[0],t=yt().memoizedState;return[e,t]},useMutableSource:wp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1},Sg={readContext:vt,useCallback:Dp,useContext:vt,useEffect:gu,useImperativeHandle:zp,useInsertionEffect:Tp,useLayoutEffect:Np,useMemo:jp,useReducer:yl,useRef:Rp,useState:function(){return yl(Fo)},useDebugValue:vu,useDeferredValue:function(e){var t=yt();return Ne===null?t.memoizedState=e:Lp(t,Ne.memoizedState,e)},useTransition:function(){var e=yl(Fo)[0],t=yt().memoizedState;return[e,t]},useMutableSource:wp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1};function kt(e,t){if(e&&e.defaultProps){t=ye({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ss(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Na={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=wn(e),i=Wt(r,o);i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(Rt(t,e,o,r),Li(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Xe(),o=wn(e),i=Wt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=bn(e,i,o),t!==null&&(Rt(t,e,o,r),Li(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Xe(),r=wn(e),o=Wt(n,r);o.tag=2,t!=null&&(o.callback=t),t=bn(e,o,r),t!==null&&(Rt(t,e,r,n),Li(t,e,r))}};function Vc(e,t,n,r,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!_o(n,r)||!_o(o,i):!0}function Up(e,t,n){var r=!1,o=En,i=t.contextType;return typeof i=="object"&&i!==null?i=vt(i):(o=et(t)?$n:qe.current,r=t.contextTypes,i=(r=r!=null)?zr(e,o):En),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Na,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function $c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Na.enqueueReplaceState(t,t.state,null)}function us(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},uu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=vt(i):(i=et(t)?$n:qe.current,o.context=zr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ss(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Na.enqueueReplaceState(o,o.state,null),aa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Mr(e,t){try{var n="",r=t;do n+=Gm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Eg=typeof WeakMap=="function"?WeakMap:Map;function Bp(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){da||(da=!0,xs=r),cs(e,t)},n}function Hp(e,t,n){n=Wt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){cs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){cs(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Wc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Eg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Fg.bind(null,e,t,n),t.then(e,e))}function Xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,bn(n,t,1))),n.lanes|=1),e)}var Pg=Yt.ReactCurrentOwner,Ye=!1;function We(e,t,n,r){t.child=e===null?vp(t,null,n,r):jr(t,e.child,n,r)}function Jc(e,t,n,r,o){n=n.render;var i=t.ref;return Tr(t,o),r=hu(e,t,n,r,i,o),n=mu(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(he&&n&&nu(t),t.flags|=1,We(e,t,r,o),t.child)}function Kc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Pu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,qp(e,t,i,r,o)):(e=Bi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(a,r)&&e.ref===t.ref)return Gt(e,t,o)}return t.flags|=1,e=kn(i,r),e.ref=t.ref,e.return=t,t.child=e}function qp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(_o(i,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,Gt(e,t,o)}return ds(e,t,n,r,o)}function Vp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Er,it),it|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(Er,it),it|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,se(Er,it),it|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,se(Er,it),it|=r;return We(e,t,o,n),t.child}function $p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,n,r,o){var i=et(n)?$n:qe.current;return i=zr(t,i),Tr(t,o),n=hu(e,t,n,r,i,o),r=mu(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(he&&r&&nu(t),t.flags|=1,We(e,t,n,o),t.child)}function Gc(e,t,n,r,o){if(et(n)){var i=!0;ta(t)}else i=!1;if(Tr(t,o),t.stateNode===null)Fi(e,t),Up(t,n,r),us(t,n,r,o),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=et(n)?$n:qe.current,u=zr(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&$c(t,a,r,u),un=!1;var p=t.memoizedState;a.state=p,aa(t,r,a,o),s=t.memoizedState,l!==r||p!==s||Ze.current||un?(typeof c=="function"&&(ss(t,n,c,r),s=t.memoizedState),(l=un||Vc(t,n,l,r,p,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,bp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:kt(t.type,l),a.props=u,d=t.pendingProps,p=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=vt(s):(s=et(n)?$n:qe.current,s=zr(t,s));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||p!==s)&&$c(t,a,r,s),un=!1,p=t.memoizedState,a.state=p,aa(t,r,a,o);var v=t.memoizedState;l!==d||p!==v||Ze.current||un?(typeof x=="function"&&(ss(t,n,x,r),v=t.memoizedState),(u=un||Vc(t,n,u,r,p,v,s)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,v,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,v,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),a.props=r,a.state=v,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return fs(e,t,n,r,i,o)}function fs(e,t,n,r,o,i){$p(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return o&&Mc(t,n,!1),Gt(e,t,i);r=t.stateNode,Pg.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=jr(t,e.child,null,i),t.child=jr(t,null,l,i)):We(e,t,l,i),t.memoizedState=r.state,o&&Mc(t,n,!0),t.child}function Wp(e){var t=e.stateNode;t.pendingContext?Lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lc(e,t.context,!1),cu(e,t.containerInfo)}function Yc(e,t,n,r,o){return Dr(),ou(o),t.flags|=256,We(e,t,n,r),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0};function hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xp(e,t,n){var r=t.pendingProps,o=ge.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),se(ge,o&1),e===null)return as(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Da(a,r,0,null),e=qn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=hs(n),t.memoizedState=ps,e):yu(t,a));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return Og(e,t,a,r,l,o,n);if(i){i=r.fallback,a=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=kn(l,i):(i=qn(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?hs(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=ps,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yu(e,t){return t=Da({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Si(e,t,n,r){return r!==null&&ou(r),jr(t,e.child,null,n),e=yu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Og(e,t,n,r,o,i,a){if(n)return t.flags&256?(t.flags&=-257,r=bl(Error(_(422))),Si(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Da({mode:"visible",children:r.children},o,0,null),i=qn(i,o,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&jr(t,e.child,null,a),t.child.memoizedState=hs(a),t.memoizedState=ps,i);if(!(t.mode&1))return Si(e,t,a,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=bl(i,r,void 0),Si(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ye||l){if(r=je,r!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Kt(e,o),Rt(r,e,o,-1))}return Eu(),r=bl(Error(_(421))),Si(e,t,a,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ig.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,lt=yn(o.nextSibling),st=t,he=!0,Pt=null,e!==null&&(pt[ht++]=Vt,pt[ht++]=$t,pt[ht++]=Wn,Vt=e.id,$t=e.overflow,Wn=t),t=yu(t,r.children),t.flags|=4096,t)}function Zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ls(e.return,t,n)}function xl(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(We(e,t,r.children,n),r=ge.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zc(e,n,t);else if(e.tag===19)Zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(ge,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&la(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),xl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&la(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}xl(t,!0,n,null,i);break;case"together":xl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cg(e,t,n){switch(t.tag){case 3:Wp(t),Dr();break;case 5:xp(t);break;case 1:et(t.type)&&ta(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;se(oa,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(ge,ge.current&1),t.flags|=128,null):n&t.child.childLanes?Xp(e,t,n):(se(ge,ge.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);se(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),se(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,Vp(e,t,n)}return Gt(e,t,n)}var Jp,ms,Kp,Gp;Jp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ms=function(){};Kp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,In(At.current);var i=null;switch(n){case"input":o=Al(e,o),r=Al(e,r),i=[];break;case"select":o=ye({},o,{value:void 0}),r=ye({},r,{value:void 0}),i=[];break;case"textarea":o=Ul(e,o),r=Ul(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zi)}Hl(n,r);var a;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Eo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ce("scroll",e),i||l===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Gp=function(e,t,n,r){n!==r&&(t.flags|=4)};function no(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rg(e,t,n){var r=t.pendingProps;switch(ru(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return et(t.type)&&ea(),Be(t),null;case 3:return r=t.stateNode,Lr(),de(Ze),de(qe),fu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Ss(Pt),Pt=null))),ms(e,t),Be(t),null;case 5:du(t);var o=In(Mo.current);if(n=t.type,e!==null&&t.stateNode!=null)Kp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Be(t),null}if(e=In(At.current),wi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Lt]=t,r[jo]=i,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<fo.length;o++)ce(fo[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":sc(r,i),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ce("invalid",r);break;case"textarea":cc(r,i),ce("invalid",r)}Hl(n,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&xi(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&xi(r.textContent,l,e),o=["children",""+l]):Eo.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ce("scroll",r)}switch(n){case"input":fi(r),uc(r,i,!0);break;case"textarea":fi(r),dc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Lt]=t,e[jo]=r,Jp(e,t,!1,!1),t.stateNode=e;e:{switch(a=ql(n,r),n){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<fo.length;o++)ce(fo[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":sc(e,r),o=Al(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ye({},r,{value:void 0}),ce("invalid",e);break;case"textarea":cc(e,r),o=Ul(e,r),ce("invalid",e);break;default:o=r}Hl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="style"?Rf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Of(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Po(e,s):typeof s=="number"&&Po(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Eo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ce("scroll",e):s!=null&&Hs(e,i,s,a))}switch(n){case"input":fi(e),uc(e,r,!1);break;case"textarea":fi(e),dc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)Gp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=In(Mo.current),In(At.current),wi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Lt]=t,(i=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=t,t.stateNode=r}return Be(t),null;case 13:if(de(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&lt!==null&&t.mode&1&&!(t.flags&128))mp(),Dr(),t.flags|=98560,i=!1;else if(i=wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[Lt]=t}else Dr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else Pt!==null&&(Ss(Pt),Pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?_e===0&&(_e=3):Eu())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Lr(),ms(e,t),e===null&&zo(t.stateNode.containerInfo),Be(t),null;case 10:return lu(t.type._context),Be(t),null;case 17:return et(t.type)&&ea(),Be(t),null;case 19:if(de(ge),i=t.memoizedState,i===null)return Be(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)no(i,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=la(e),a!==null){for(t.flags|=128,no(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&Se()>Ar&&(t.flags|=128,r=!0,no(i,!1),t.lanes=4194304)}else{if(!r)if(e=la(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),no(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!he)return Be(t),null}else 2*Se()-i.renderingStartTime>Ar&&n!==1073741824&&(t.flags|=128,r=!0,no(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Se(),t.sibling=null,n=ge.current,se(ge,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return Su(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?it&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Tg(e,t){switch(ru(t),t.tag){case 1:return et(t.type)&&ea(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lr(),de(Ze),de(qe),fu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return du(t),null;case 13:if(de(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ge),null;case 4:return Lr(),null;case 10:return lu(t.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var Ei=!1,He=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,L=null;function Sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function gs(e,t,n){try{n()}catch(r){we(e,t,r)}}var ed=!1;function _g(e,t){if(Zl=Ki,e=np(),tu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,c=0,d=e,p=null;t:for(;;){for(var x;d!==n||o!==0&&d.nodeType!==3||(l=a+o),d!==i||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(x=d.firstChild)!==null;)p=d,d=x;for(;;){if(d===e)break t;if(p===n&&++u===o&&(l=a),p===i&&++c===r&&(s=a),(x=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(es={focusedElem:e,selectionRange:n},Ki=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var h=v.memoizedProps,w=v.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?h:kt(t.type,h),w);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(S){we(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return v=ed,ed=!1,v}function wo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&gs(t,n,i)}o=o.next}while(o!==r)}}function _a(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Yp(e){var t=e.alternate;t!==null&&(e.alternate=null,Yp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Lt],delete t[jo],delete t[rs],delete t[pg],delete t[hg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zp(e){return e.tag===5||e.tag===3||e.tag===4}function td(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zi));else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bs(e,t,n),e=e.sibling;e!==null;)bs(e,t,n),e=e.sibling}var Ae=null,St=!1;function rn(e,t,n){for(n=n.child;n!==null;)eh(e,t,n),n=n.sibling}function eh(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Sa,n)}catch{}switch(n.tag){case 5:He||Sr(n,t);case 6:var r=Ae,o=St;Ae=null,rn(e,t,n),Ae=r,St=o,Ae!==null&&(St?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(St?(e=Ae,n=n.stateNode,e.nodeType===8?pl(e.parentNode,n):e.nodeType===1&&pl(e,n),To(e)):pl(Ae,n.stateNode));break;case 4:r=Ae,o=St,Ae=n.stateNode.containerInfo,St=!0,rn(e,t,n),Ae=r,St=o;break;case 0:case 11:case 14:case 15:if(!He&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&gs(n,t,a),o=o.next}while(o!==r)}rn(e,t,n);break;case 1:if(!He&&(Sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){we(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(He=(r=He)||n.memoizedState!==null,rn(e,t,n),He=r):rn(e,t,n);break;default:rn(e,t,n)}}function nd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ng),t.forEach(function(r){var o=Ug.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:Ae=l.stateNode,St=!1;break e;case 3:Ae=l.stateNode.containerInfo,St=!0;break e;case 4:Ae=l.stateNode.containerInfo,St=!0;break e}l=l.return}if(Ae===null)throw Error(_(160));eh(i,a,o),Ae=null,St=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)th(t,e),t=t.sibling}function th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Dt(e),r&4){try{wo(3,e,e.return),_a(3,e)}catch(h){we(e,e.return,h)}try{wo(5,e,e.return)}catch(h){we(e,e.return,h)}}break;case 1:xt(t,e),Dt(e),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(xt(t,e),Dt(e),r&512&&n!==null&&Sr(n,n.return),e.flags&32){var o=e.stateNode;try{Po(o,"")}catch(h){we(e,e.return,h)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Sf(o,i),ql(l,a);var u=ql(l,i);for(a=0;a<s.length;a+=2){var c=s[a],d=s[a+1];c==="style"?Rf(o,d):c==="dangerouslySetInnerHTML"?Of(o,d):c==="children"?Po(o,d):Hs(o,c,d,u)}switch(l){case"input":Fl(o,i);break;case"textarea":Ef(o,i);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Pr(o,!!i.multiple,x,!1):p!==!!i.multiple&&(i.defaultValue!=null?Pr(o,!!i.multiple,i.defaultValue,!0):Pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[jo]=i}catch(h){we(e,e.return,h)}}break;case 6:if(xt(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(h){we(e,e.return,h)}}break;case 3:if(xt(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(t.containerInfo)}catch(h){we(e,e.return,h)}break;case 4:xt(t,e),Dt(e);break;case 13:xt(t,e),Dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(wu=Se())),r&4&&nd(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(He=(u=He)||c,xt(t,e),He=u):xt(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(L=e,c=e.child;c!==null;){for(d=L=c;L!==null;){switch(p=L,x=p.child,p.tag){case 0:case 11:case 14:case 15:wo(4,p,p.return);break;case 1:Sr(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(h){we(r,n,h)}}break;case 5:Sr(p,p.return);break;case 22:if(p.memoizedState!==null){od(d);continue}}x!==null?(x.return=p,L=x):od(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Cf("display",a))}catch(h){we(e,e.return,h)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){we(e,e.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:xt(t,e),Dt(e),r&4&&nd(e);break;case 21:break;default:xt(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zp(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Po(o,""),r.flags&=-33);var i=td(e);bs(e,i,o);break;case 3:case 4:var a=r.stateNode.containerInfo,l=td(e);ys(e,l,a);break;default:throw Error(_(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function zg(e,t,n){L=e,nh(e)}function nh(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var o=L,i=o.child;if(o.tag===22&&r){var a=o.memoizedState!==null||Ei;if(!a){var l=o.alternate,s=l!==null&&l.memoizedState!==null||He;l=Ei;var u=He;if(Ei=a,(He=s)&&!u)for(L=o;L!==null;)a=L,s=a.child,a.tag===22&&a.memoizedState!==null?id(o):s!==null?(s.return=a,L=s):id(o);for(;i!==null;)L=i,nh(i),i=i.sibling;L=o,Ei=l,He=u}rd(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,L=i):rd(e)}}function rd(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:He||_a(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!He)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:kt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bc(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bc(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&To(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}He||t.flags&512&&vs(t)}catch(p){we(t,t.return,p)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function od(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function id(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_a(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){we(t,o,s)}}var i=t.return;try{vs(t)}catch(s){we(t,i,s)}break;case 5:var a=t.return;try{vs(t)}catch(s){we(t,a,s)}}}catch(s){we(t,t.return,s)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var Dg=Math.ceil,ca=Yt.ReactCurrentDispatcher,bu=Yt.ReactCurrentOwner,gt=Yt.ReactCurrentBatchConfig,ee=0,je=null,Re=null,Fe=0,it=0,Er=On(0),_e=0,Uo=null,Qn=0,za=0,xu=0,ko=null,Ge=null,wu=0,Ar=1/0,Ht=null,da=!1,xs=null,xn=null,Pi=!1,pn=null,fa=0,So=0,ws=null,Ii=-1,Ui=0;function Xe(){return ee&6?Se():Ii!==-1?Ii:Ii=Se()}function wn(e){return e.mode&1?ee&2&&Fe!==0?Fe&-Fe:gg.transition!==null?(Ui===0&&(Ui=Uf()),Ui):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Xf(e.type)),e):1}function Rt(e,t,n,r){if(50<So)throw So=0,ws=null,Error(_(185));Wo(e,n,r),(!(ee&2)||e!==je)&&(e===je&&(!(ee&2)&&(za|=n),_e===4&&dn(e,Fe)),tt(e,r),n===1&&ee===0&&!(t.mode&1)&&(Ar=Se()+500,Ra&&Cn()))}function tt(e,t){var n=e.callbackNode;g0(e,t);var r=Ji(e,e===je?Fe:0);if(r===0)n!==null&&hc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&hc(n),t===1)e.tag===0?mg(ad.bind(null,e)):fp(ad.bind(null,e)),dg(function(){!(ee&6)&&Cn()}),n=null;else{switch(Bf(r)){case 1:n=Xs;break;case 4:n=Ff;break;case 16:n=Qi;break;case 536870912:n=If;break;default:n=Qi}n=ch(n,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rh(e,t){if(Ii=-1,Ui=0,ee&6)throw Error(_(327));var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var r=Ji(e,e===je?Fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pa(e,r);else{t=r;var o=ee;ee|=2;var i=ih();(je!==e||Fe!==t)&&(Ht=null,Ar=Se()+500,Hn(e,t));do try{Mg();break}catch(l){oh(e,l)}while(!0);au(),ca.current=i,ee=o,Re!==null?t=0:(je=null,Fe=0,t=_e)}if(t!==0){if(t===2&&(o=Ql(e),o!==0&&(r=o,t=ks(e,o))),t===1)throw n=Uo,Hn(e,0),dn(e,r),tt(e,Se()),n;if(t===6)dn(e,r);else{if(o=e.current.alternate,!(r&30)&&!jg(o)&&(t=pa(e,r),t===2&&(i=Ql(e),i!==0&&(r=i,t=ks(e,i))),t===1))throw n=Uo,Hn(e,0),dn(e,r),tt(e,Se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:jn(e,Ge,Ht);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=wu+500-Se(),10<t)){if(Ji(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Xe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ns(jn.bind(null,e,Ge,Ht),t);break}jn(e,Ge,Ht);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var a=31-Ct(r);i=1<<a,a=t[a],a>o&&(o=a),r&=~i}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Dg(r/1960))-r,10<r){e.timeoutHandle=ns(jn.bind(null,e,Ge,Ht),r);break}jn(e,Ge,Ht);break;case 5:jn(e,Ge,Ht);break;default:throw Error(_(329))}}}return tt(e,Se()),e.callbackNode===n?rh.bind(null,e):null}function ks(e,t){var n=ko;return e.current.memoizedState.isDehydrated&&(Hn(e,t).flags|=256),e=pa(e,t),e!==2&&(t=Ge,Ge=n,t!==null&&Ss(t)),e}function Ss(e){Ge===null?Ge=e:Ge.push.apply(Ge,e)}function jg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Tt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~xu,t&=~za,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function ad(e){if(ee&6)throw Error(_(327));Nr();var t=Ji(e,0);if(!(t&1))return tt(e,Se()),null;var n=pa(e,t);if(e.tag!==0&&n===2){var r=Ql(e);r!==0&&(t=r,n=ks(e,r))}if(n===1)throw n=Uo,Hn(e,0),dn(e,t),tt(e,Se()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,jn(e,Ge,Ht),tt(e,Se()),null}function ku(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(Ar=Se()+500,Ra&&Cn())}}function Jn(e){pn!==null&&pn.tag===0&&!(ee&6)&&Nr();var t=ee;ee|=1;var n=gt.transition,r=oe;try{if(gt.transition=null,oe=1,e)return e()}finally{oe=r,gt.transition=n,ee=t,!(ee&6)&&Cn()}}function Su(){it=Er.current,de(Er)}function Hn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cg(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(ru(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ea();break;case 3:Lr(),de(Ze),de(qe),fu();break;case 5:du(r);break;case 4:Lr();break;case 13:de(ge);break;case 19:de(ge);break;case 10:lu(r.type._context);break;case 22:case 23:Su()}n=n.return}if(je=e,Re=e=kn(e.current,null),Fe=it=t,_e=0,Uo=null,xu=za=Qn=0,Ge=ko=null,Fn!==null){for(t=0;t<Fn.length;t++)if(n=Fn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=o,r.next=a}n.pending=r}Fn=null}return e}function oh(e,t){do{var n=Re;try{if(au(),Mi.current=ua,sa){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}sa=!1}if(Xn=0,De=Ne=ve=null,xo=!1,Ao=0,bu.current=null,n===null||n.return===null){_e=1,Uo=t,Re=null;break}e:{var i=e,a=n.return,l=n,s=t;if(t=Fe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var p=c.alternate;p?(c.updateQueue=p.updateQueue,c.memoizedState=p.memoizedState,c.lanes=p.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=Xc(a);if(x!==null){x.flags&=-257,Qc(x,a,l,i,t),x.mode&1&&Wc(i,u,t),t=x,s=u;var v=t.updateQueue;if(v===null){var h=new Set;h.add(s),t.updateQueue=h}else v.add(s);break e}else{if(!(t&1)){Wc(i,u,t),Eu();break e}s=Error(_(426))}}else if(he&&l.mode&1){var w=Xc(a);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Qc(w,a,l,i,t),ou(Mr(s,l));break e}}i=s=Mr(s,l),_e!==4&&(_e=2),ko===null?ko=[i]:ko.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Bp(i,s,t);Uc(i,m);break e;case 1:l=s;var f=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xn===null||!xn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Hp(i,l,t);Uc(i,S);break e}}i=i.return}while(i!==null)}lh(n)}catch(C){t=C,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function ih(){var e=ca.current;return ca.current=ua,e===null?ua:e}function Eu(){(_e===0||_e===3||_e===2)&&(_e=4),je===null||!(Qn&268435455)&&!(za&268435455)||dn(je,Fe)}function pa(e,t){var n=ee;ee|=2;var r=ih();(je!==e||Fe!==t)&&(Ht=null,Hn(e,t));do try{Lg();break}catch(o){oh(e,o)}while(!0);if(au(),ee=n,ca.current=r,Re!==null)throw Error(_(261));return je=null,Fe=0,_e}function Lg(){for(;Re!==null;)ah(Re)}function Mg(){for(;Re!==null&&!l0();)ah(Re)}function ah(e){var t=uh(e.alternate,e,it);e.memoizedProps=e.pendingProps,t===null?lh(e):Re=t,bu.current=null}function lh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Tg(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Re=null;return}}else if(n=Rg(n,t,it),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);_e===0&&(_e=5)}function jn(e,t,n){var r=oe,o=gt.transition;try{gt.transition=null,oe=1,Ag(e,t,n,r)}finally{gt.transition=o,oe=r}return null}function Ag(e,t,n,r){do Nr();while(pn!==null);if(ee&6)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(v0(e,i),e===je&&(Re=je=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pi||(Pi=!0,ch(Qi,function(){return Nr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=gt.transition,gt.transition=null;var a=oe;oe=1;var l=ee;ee|=4,bu.current=null,_g(e,n),th(n,e),rg(es),Ki=!!Zl,es=Zl=null,e.current=n,zg(n),s0(),ee=l,oe=a,gt.transition=i}else e.current=n;if(Pi&&(Pi=!1,pn=e,fa=o),i=e.pendingLanes,i===0&&(xn=null),d0(n.stateNode),tt(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(da)throw da=!1,e=xs,xs=null,e;return fa&1&&e.tag!==0&&Nr(),i=e.pendingLanes,i&1?e===ws?So++:(So=0,ws=e):So=0,Cn(),null}function Nr(){if(pn!==null){var e=Bf(fa),t=gt.transition,n=oe;try{if(gt.transition=null,oe=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,fa=0,ee&6)throw Error(_(331));var o=ee;for(ee|=4,L=e.current;L!==null;){var i=L,a=i.child;if(L.flags&16){var l=i.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:wo(8,c,i)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var p=c.sibling,x=c.return;if(Yp(c),c===u){L=null;break}if(p!==null){p.return=x,L=p;break}L=x}}}var v=i.alternate;if(v!==null){var h=v.child;if(h!==null){v.child=null;do{var w=h.sibling;h.sibling=null,h=w}while(h!==null)}}L=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,L=a;else e:for(;L!==null;){if(i=L,i.flags&2048)switch(i.tag){case 0:case 11:case 15:wo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var f=e.current;for(L=f;L!==null;){a=L;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,L=g;else e:for(a=f;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:_a(9,l)}}catch(C){we(l,l.return,C)}if(l===a){L=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,L=S;break e}L=l.return}}if(ee=o,Cn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Sa,e)}catch{}r=!0}return r}finally{oe=n,gt.transition=t}}return!1}function ld(e,t,n){t=Mr(n,t),t=Bp(e,t,1),e=bn(e,t,1),t=Xe(),e!==null&&(Wo(e,1,t),tt(e,t))}function we(e,t,n){if(e.tag===3)ld(e,e,n);else for(;t!==null;){if(t.tag===3){ld(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=Mr(n,e),e=Hp(t,e,1),t=bn(t,e,1),e=Xe(),t!==null&&(Wo(t,1,e),tt(t,e));break}}t=t.return}}function Fg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Xe(),e.pingedLanes|=e.suspendedLanes&n,je===e&&(Fe&n)===n&&(_e===4||_e===3&&(Fe&130023424)===Fe&&500>Se()-wu?Hn(e,0):xu|=n),tt(e,t)}function sh(e,t){t===0&&(e.mode&1?(t=mi,mi<<=1,!(mi&130023424)&&(mi=4194304)):t=1);var n=Xe();e=Kt(e,t),e!==null&&(Wo(e,t,n),tt(e,n))}function Ig(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sh(e,n)}function Ug(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),sh(e,n)}var uh;uh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ze.current)Ye=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ye=!1,Cg(e,t,n);Ye=!!(e.flags&131072)}else Ye=!1,he&&t.flags&1048576&&pp(t,ra,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fi(e,t),e=t.pendingProps;var o=zr(t,qe.current);Tr(t,n),o=hu(null,t,r,e,o,n);var i=mu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,et(r)?(i=!0,ta(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,uu(t),o.updater=Na,t.stateNode=o,o._reactInternals=t,us(t,r,e,n),t=fs(null,t,r,!0,i,n)):(t.tag=0,he&&i&&nu(t),We(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Hg(r),e=kt(r,e),o){case 0:t=ds(null,t,r,e,n);break e;case 1:t=Gc(null,t,r,e,n);break e;case 11:t=Jc(null,t,r,e,n);break e;case 14:t=Kc(null,t,r,kt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),ds(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Gc(e,t,r,o,n);case 3:e:{if(Wp(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,o=i.element,bp(e,t),aa(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Mr(Error(_(423)),t),t=Yc(e,t,r,n,o);break e}else if(r!==o){o=Mr(Error(_(424)),t),t=Yc(e,t,r,n,o);break e}else for(lt=yn(t.stateNode.containerInfo.firstChild),st=t,he=!0,Pt=null,n=vp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dr(),r===o){t=Gt(e,t,n);break e}We(e,t,r,n)}t=t.child}return t;case 5:return xp(t),e===null&&as(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,ts(r,o)?a=null:i!==null&&ts(r,i)&&(t.flags|=32),$p(e,t),We(e,t,a,n),t.child;case 6:return e===null&&as(t),null;case 13:return Xp(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,n):We(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Jc(e,t,r,o,n);case 7:return We(e,t,t.pendingProps,n),t.child;case 8:return We(e,t,t.pendingProps.children,n),t.child;case 12:return We(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,se(oa,r._currentValue),r._currentValue=a,i!==null)if(Tt(i.value,a)){if(i.children===o.children&&!Ze.current){t=Gt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Wt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),ls(i.return,n,t),l.lanes|=n;break}s=s.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ls(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}We(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Tr(t,n),o=vt(o),r=r(o),t.flags|=1,We(e,t,r,n),t.child;case 14:return r=t.type,o=kt(r,t.pendingProps),o=kt(r.type,o),Kc(e,t,r,o,n);case 15:return qp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:kt(r,o),Fi(e,t),t.tag=1,et(r)?(e=!0,ta(t)):e=!1,Tr(t,n),Up(t,r,o),us(t,r,o,n),fs(null,t,r,!0,e,n);case 19:return Qp(e,t,n);case 22:return Vp(e,t,n)}throw Error(_(156,t.tag))};function ch(e,t){return Af(e,t)}function Bg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new Bg(e,t,n,r)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hg(e){if(typeof e=="function")return Pu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vs)return 11;if(e===$s)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bi(e,t,n,r,o,i){var a=2;if(r=e,typeof e=="function")Pu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case hr:return qn(n.children,o,i,t);case qs:a=8,o|=8;break;case Dl:return e=mt(12,n,t,o|2),e.elementType=Dl,e.lanes=i,e;case jl:return e=mt(13,n,t,o),e.elementType=jl,e.lanes=i,e;case Ll:return e=mt(19,n,t,o),e.elementType=Ll,e.lanes=i,e;case xf:return Da(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case yf:a=10;break e;case bf:a=9;break e;case Vs:a=11;break e;case $s:a=14;break e;case sn:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=mt(a,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function qn(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Da(e,t,n,r){return e=mt(22,e,r,t),e.elementType=xf,e.lanes=n,e.stateNode={isHidden:!1},e}function wl(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function kl(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nl(0),this.expirationTimes=nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ou(e,t,n,r,o,i,a,l,s){return e=new qg(e,t,n,l,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=mt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uu(i),e}function Vg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function dh(e){if(!e)return En;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(et(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(et(n))return dp(e,n,t)}return t}function fh(e,t,n,r,o,i,a,l,s){return e=Ou(n,r,!0,e,o,i,a,l,s),e.context=dh(null),n=e.current,r=Xe(),o=wn(n),i=Wt(r,o),i.callback=t??null,bn(n,i,o),e.current.lanes=o,Wo(e,o,r),tt(e,r),e}function ja(e,t,n,r){var o=t.current,i=Xe(),a=wn(o);return n=dh(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=bn(o,t,a),e!==null&&(Rt(e,o,a,i),Li(e,o,a)),a}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cu(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function $g(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ru(e){this._internalRoot=e}La.prototype.render=Ru.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));ja(e,t,null,null)};La.prototype.unmount=Ru.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){ja(null,e,null,null)}),t[Jt]=null}};function La(e){this._internalRoot=e}La.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cn.length&&t!==0&&t<cn[n].priority;n++);cn.splice(n,0,e),n===0&&Wf(e)}};function Tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ud(){}function Wg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ha(a);i.call(u)}}var a=fh(t,r,e,0,null,!1,!1,"",ud);return e._reactRootContainer=a,e[Jt]=a.current,zo(e.nodeType===8?e.parentNode:e),Jn(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=ha(s);l.call(u)}}var s=Ou(e,0,!1,null,null,!1,!1,"",ud);return e._reactRootContainer=s,e[Jt]=s.current,zo(e.nodeType===8?e.parentNode:e),Jn(function(){ja(t,s,n,r)}),s}function Aa(e,t,n,r,o){var i=n._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var l=o;o=function(){var s=ha(a);l.call(s)}}ja(t,a,e,o)}else a=Wg(n,t,e,o,r);return ha(a)}Hf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=co(t.pendingLanes);n!==0&&(Qs(t,n|1),tt(t,Se()),!(ee&6)&&(Ar=Se()+500,Cn()))}break;case 13:Jn(function(){var r=Kt(e,1);if(r!==null){var o=Xe();Rt(r,e,1,o)}}),Cu(e,1)}};Js=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Xe();Rt(t,e,134217728,n)}Cu(e,134217728)}};qf=function(e){if(e.tag===13){var t=wn(e),n=Kt(e,t);if(n!==null){var r=Xe();Rt(n,e,t,r)}Cu(e,t)}};Vf=function(){return oe};$f=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};$l=function(e,t,n){switch(t){case"input":if(Fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ca(r);if(!o)throw Error(_(90));kf(r),Fl(r,o)}}}break;case"textarea":Ef(e,n);break;case"select":t=n.value,t!=null&&Pr(e,!!n.multiple,t,!1)}};_f=ku;zf=Jn;var Xg={usingClientEntryPoint:!1,Events:[Qo,yr,Ca,Tf,Nf,ku]},ro={findFiberByHostInstance:An,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qg={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lf(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||$g,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oi.isDisabled&&Oi.supportsFiber)try{Sa=Oi.inject(Qg),Mt=Oi}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xg;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tu(t))throw Error(_(200));return Vg(e,t,null,n)};dt.createRoot=function(e,t){if(!Tu(e))throw Error(_(299));var n=!1,r="",o=ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ou(e,1,!1,null,null,n,!1,r,o),e[Jt]=t.current,zo(e.nodeType===8?e.parentNode:e),new Ru(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=Lf(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Jn(e)};dt.hydrate=function(e,t,n){if(!Ma(t))throw Error(_(200));return Aa(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Tu(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",a=ph;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=fh(t,null,e,1,n??null,o,!1,i,a),e[Jt]=t.current,zo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new La(t)};dt.render=function(e,t,n){if(!Ma(t))throw Error(_(200));return Aa(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(_(40));return e._reactRootContainer?(Jn(function(){Aa(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};dt.unstable_batchedUpdates=ku;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Aa(e,t,n,!1,r)};dt.version="18.3.1-next-f1338f8080-20240426";function hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh)}catch(e){console.error(e)}}hh(),hf.exports=dt;var Nu=hf.exports;const Jg=tf(Nu),Kg=ef({__proto__:null,default:Jg},[Nu]);var cd=Nu;_l.createRoot=cd.createRoot,_l.hydrateRoot=cd.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fe(){return fe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fe.apply(this,arguments)}var Ce;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ce||(Ce={}));const dd="popstate";function Gg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:a,hash:l}=r.location;return Bo("",{pathname:i,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Kn(o)}return Zg(t,n,null,e)}function G(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Yg(){return Math.random().toString(36).substr(2,8)}function fd(e,t){return{usr:e.state,key:e.key,idx:t}}function Bo(e,t,n,r){return n===void 0&&(n=null),fe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rn(t):t,{state:n,key:t&&t.key||r||Yg()})}function Kn(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Rn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Zg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,l=Ce.Pop,s=null,u=c();u==null&&(u=0,a.replaceState(fe({},a.state,{idx:u}),""));function c(){return(a.state||{idx:null}).idx}function d(){l=Ce.Pop;let w=c(),m=w==null?null:w-u;u=w,s&&s({action:l,location:h.location,delta:m})}function p(w,m){l=Ce.Push;let f=Bo(h.location,w,m);u=c()+1;let g=fd(f,u),S=h.createHref(f);try{a.pushState(g,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;o.location.assign(S)}i&&s&&s({action:l,location:h.location,delta:1})}function x(w,m){l=Ce.Replace;let f=Bo(h.location,w,m);u=c();let g=fd(f,u),S=h.createHref(f);a.replaceState(g,"",S),i&&s&&s({action:l,location:h.location,delta:0})}function v(w){let m=o.location.origin!=="null"?o.location.origin:o.location.href,f=typeof w=="string"?w:Kn(w);return f=f.replace(/ $/,"%20"),G(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let h={get action(){return l},get location(){return e(o,a)},listen(w){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(dd,d),s=w,()=>{o.removeEventListener(dd,d),s=null}},createHref(w){return t(o,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:x,go(w){return a.go(w)}};return h}var ae;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ae||(ae={}));const ev=new Set(["lazy","caseSensitive","path","id","index","children"]);function tv(e){return e.index===!0}function ma(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let a=[...n,String(i)],l=typeof o.id=="string"?o.id:a.join("-");if(G(o.index!==!0||!o.children,"Cannot specify children on an index route"),G(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),tv(o)){let s=fe({},o,t(o),{id:l});return r[l]=s,s}else{let s=fe({},o,t(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=ma(o.children,t,a,r)),s}})}function Ln(e,t,n){return n===void 0&&(n="/"),Hi(e,t,n,!1)}function Hi(e,t,n,r){let o=typeof t=="string"?Rn(t):t,i=Hr(o.pathname||"/",n);if(i==null)return null;let a=mh(e);rv(a);let l=null;for(let s=0;l==null&&s<a.length;++s){let u=hv(i);l=fv(a[s],u,r)}return l}function nv(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function mh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,a,l)=>{let s={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};s.relativePath.startsWith("/")&&(G(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=Xt([r,s.relativePath]),c=n.concat(s);i.children&&i.children.length>0&&(G(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),mh(i.children,t,c,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:cv(u,i.index),routesMeta:c})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))o(i,a);else for(let s of gh(i.path))o(i,a,s)}),t}function gh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let a=gh(r.join("/")),l=[];return l.push(...a.map(s=>s===""?i:[i,s].join("/"))),o&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function rv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:dv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const ov=/^:[\w-]+$/,iv=3,av=2,lv=1,sv=10,uv=-2,pd=e=>e==="*";function cv(e,t){let n=e.split("/"),r=n.length;return n.some(pd)&&(r+=uv),t&&(r+=av),n.filter(o=>!pd(o)).reduce((o,i)=>o+(ov.test(i)?iv:i===""?lv:sv),r)}function dv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function fv(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=hd({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),p=s.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=hd({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},c)),!d)return null;Object.assign(o,d.params),a.push({params:o,pathname:Xt([i,d.pathname]),pathnameBase:vv(Xt([i,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(i=Xt([i,d.pathnameBase]))}return a}function hd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=pv(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:p,isOptional:x}=c;if(p==="*"){let h=l[d]||"";a=i.slice(0,i.length-h.length).replace(/(.)\/+$/,"$1")}const v=l[d];return x&&!v?u[p]=void 0:u[p]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function pv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Fr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function hv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function mv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Rn(e):e;return{pathname:n?n.startsWith("/")?n:gv(n,t):t,search:yv(r),hash:bv(o)}}function gv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Sl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function vh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _u(e,t){let n=vh(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zu(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Rn(e):(o=fe({},e),G(!o.pathname||!o.pathname.includes("?"),Sl("?","pathname","search",o)),G(!o.pathname||!o.pathname.includes("#"),Sl("#","pathname","hash",o)),G(!o.search||!o.search.includes("#"),Sl("#","search","hash",o)));let i=e===""||o.pathname==="",a=i?"/":o.pathname,l;if(a==null)l=n;else{let d=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),d-=1;o.pathname=p.join("/")}l=d>=0?t[d]:"/"}let s=mv(o,l),u=a&&a!=="/"&&a.endsWith("/"),c=(i||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const Xt=e=>e.join("/").replace(/\/\/+/g,"/"),vv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),yv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,bv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class ga{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Fa(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const yh=["post","put","patch","delete"],xv=new Set(yh),wv=["get",...yh],kv=new Set(wv),Sv=new Set([301,302,303,307,308]),Ev=new Set([307,308]),El={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Pv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},oo={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Du=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ov=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),bh="remix-router-transitions";function Cv(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;G(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;o=k=>({hasErrorBoundary:y(k)})}else o=Ov;let i={},a=ma(e.routes,o,void 0,i),l,s=e.basename||"/",u=e.dataStrategy||_v,c=e.patchRoutesOnNavigation,d=fe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),p=null,x=new Set,v=null,h=null,w=null,m=e.hydrationData!=null,f=Ln(a,e.history.location,s),g=null;if(f==null&&!c){let y=Ke(404,{pathname:e.history.location.pathname}),{matches:k,route:E}=Pd(a);f=k,g={[E.id]:y}}f&&!e.hydrationData&&ai(f,a,e.history.location.pathname).active&&(f=null);let S;if(f)if(f.some(y=>y.route.lazy))S=!1;else if(!f.some(y=>y.route.loader))S=!0;else if(d.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,k=e.hydrationData?e.hydrationData.errors:null;if(k){let E=f.findIndex(N=>k[N.route.id]!==void 0);S=f.slice(0,E+1).every(N=>!Ps(N.route,y,k))}else S=f.every(E=>!Ps(E.route,y,k))}else S=e.hydrationData!=null;else if(S=!1,f=[],d.v7_partialHydration){let y=ai(null,a,e.history.location.pathname);y.active&&y.matches&&(f=y.matches)}let C,b={historyAction:e.history.action,location:e.history.location,matches:f,initialized:S,navigation:El,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},z=Ce.Pop,T=!1,D,U=!1,ie=new Map,me=null,Ee=!1,Pe=!1,Zt=[],en=new Set,ke=new Map,j=0,V=-1,$=new Map,ne=new Set,ue=new Map,_t=new Map,Le=new Set,bt=new Map,Ve=new Map,Ft;function am(){if(p=e.history.listen(y=>{let{action:k,location:E,delta:N}=y;if(Ft){Ft(),Ft=void 0;return}Fr(Ve.size===0||N!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=Yu({currentLocation:b.location,nextLocation:E,historyAction:k});if(M&&N!=null){let H=new Promise(W=>{Ft=W});e.history.go(N*-1),ii(M,{state:"blocked",location:E,proceed(){ii(M,{state:"proceeding",proceed:void 0,reset:void 0,location:E}),H.then(()=>e.history.go(N))},reset(){let W=new Map(b.blockers);W.set(M,oo),$e({blockers:W})}});return}return Nn(k,E)}),n){$v(t,ie);let y=()=>Wv(t,ie);t.addEventListener("pagehide",y),me=()=>t.removeEventListener("pagehide",y)}return b.initialized||Nn(Ce.Pop,b.location,{initialHydration:!0}),C}function lm(){p&&p(),me&&me(),x.clear(),D&&D.abort(),b.fetchers.forEach((y,k)=>oi(k)),b.blockers.forEach((y,k)=>Gu(k))}function sm(y){return x.add(y),()=>x.delete(y)}function $e(y,k){k===void 0&&(k={}),b=fe({},b,y);let E=[],N=[];d.v7_fetcherPersist&&b.fetchers.forEach((M,H)=>{M.state==="idle"&&(Le.has(H)?N.push(H):E.push(H))}),[...x].forEach(M=>M(b,{deletedFetchers:N,viewTransitionOpts:k.viewTransitionOpts,flushSync:k.flushSync===!0})),d.v7_fetcherPersist&&(E.forEach(M=>b.fetchers.delete(M)),N.forEach(M=>oi(M)))}function nr(y,k,E){var N,M;let{flushSync:H}=E===void 0?{}:E,W=b.actionData!=null&&b.navigation.formMethod!=null&&Et(b.navigation.formMethod)&&b.navigation.state==="loading"&&((N=y.state)==null?void 0:N._isRedirect)!==!0,F;k.actionData?Object.keys(k.actionData).length>0?F=k.actionData:F=null:W?F=b.actionData:F=null;let I=k.loaderData?Sd(b.loaderData,k.loaderData,k.matches||[],k.errors):b.loaderData,A=b.blockers;A.size>0&&(A=new Map(A),A.forEach((Z,Me)=>A.set(Me,oo)));let q=T===!0||b.navigation.formMethod!=null&&Et(b.navigation.formMethod)&&((M=y.state)==null?void 0:M._isRedirect)!==!0;l&&(a=l,l=void 0),Ee||z===Ce.Pop||(z===Ce.Push?e.history.push(y,y.state):z===Ce.Replace&&e.history.replace(y,y.state));let K;if(z===Ce.Pop){let Z=ie.get(b.location.pathname);Z&&Z.has(y.pathname)?K={currentLocation:b.location,nextLocation:y}:ie.has(y.pathname)&&(K={currentLocation:y,nextLocation:b.location})}else if(U){let Z=ie.get(b.location.pathname);Z?Z.add(y.pathname):(Z=new Set([y.pathname]),ie.set(b.location.pathname,Z)),K={currentLocation:b.location,nextLocation:y}}$e(fe({},k,{actionData:F,loaderData:I,historyAction:z,location:y,initialized:!0,navigation:El,revalidation:"idle",restoreScrollPosition:ec(y,k.matches||b.matches),preventScrollReset:q,blockers:A}),{viewTransitionOpts:K,flushSync:H===!0}),z=Ce.Pop,T=!1,U=!1,Ee=!1,Pe=!1,Zt=[]}async function Vu(y,k){if(typeof y=="number"){e.history.go(y);return}let E=Es(b.location,b.matches,s,d.v7_prependBasename,y,d.v7_relativeSplatPath,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:N,submission:M,error:H}=md(d.v7_normalizeFormMethod,!1,E,k),W=b.location,F=Bo(b.location,N,k&&k.state);F=fe({},F,e.history.encodeLocation(F));let I=k&&k.replace!=null?k.replace:void 0,A=Ce.Push;I===!0?A=Ce.Replace:I===!1||M!=null&&Et(M.formMethod)&&M.formAction===b.location.pathname+b.location.search&&(A=Ce.Replace);let q=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,K=(k&&k.flushSync)===!0,Z=Yu({currentLocation:W,nextLocation:F,historyAction:A});if(Z){ii(Z,{state:"blocked",location:F,proceed(){ii(Z,{state:"proceeding",proceed:void 0,reset:void 0,location:F}),Vu(y,k)},reset(){let Me=new Map(b.blockers);Me.set(Z,oo),$e({blockers:Me})}});return}return await Nn(A,F,{submission:M,pendingError:H,preventScrollReset:q,replace:k&&k.replace,enableViewTransition:k&&k.viewTransition,flushSync:K})}function um(){if(Xa(),$e({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){Nn(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}Nn(z||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:U===!0})}}async function Nn(y,k,E){D&&D.abort(),D=null,z=y,Ee=(E&&E.startUninterruptedRevalidation)===!0,bm(b.location,b.matches),T=(E&&E.preventScrollReset)===!0,U=(E&&E.enableViewTransition)===!0;let N=l||a,M=E&&E.overrideNavigation,H=Ln(N,k,s),W=(E&&E.flushSync)===!0,F=ai(H,N,k.pathname);if(F.active&&F.matches&&(H=F.matches),!H){let{error:le,notFoundMatches:re,route:be}=Qa(k.pathname);nr(k,{matches:re,loaderData:{},errors:{[be.id]:le}},{flushSync:W});return}if(b.initialized&&!Pe&&Av(b.location,k)&&!(E&&E.submission&&Et(E.submission.formMethod))){nr(k,{matches:H},{flushSync:W});return}D=new AbortController;let I=lr(e.history,k,D.signal,E&&E.submission),A;if(E&&E.pendingError)A=[Mn(H).route.id,{type:ae.error,error:E.pendingError}];else if(E&&E.submission&&Et(E.submission.formMethod)){let le=await cm(I,k,E.submission,H,F.active,{replace:E.replace,flushSync:W});if(le.shortCircuited)return;if(le.pendingActionResult){let[re,be]=le.pendingActionResult;if(at(be)&&Fa(be.error)&&be.error.status===404){D=null,nr(k,{matches:le.matches,loaderData:{},errors:{[re]:be.error}});return}}H=le.matches||H,A=le.pendingActionResult,M=Pl(k,E.submission),W=!1,F.active=!1,I=lr(e.history,I.url,I.signal)}let{shortCircuited:q,matches:K,loaderData:Z,errors:Me}=await dm(I,k,H,F.active,M,E&&E.submission,E&&E.fetcherSubmission,E&&E.replace,E&&E.initialHydration===!0,W,A);q||(D=null,nr(k,fe({matches:K||H},Ed(A),{loaderData:Z,errors:Me})))}async function cm(y,k,E,N,M,H){H===void 0&&(H={}),Xa();let W=qv(k,E);if($e({navigation:W},{flushSync:H.flushSync===!0}),M){let A=await li(N,k.pathname,y.signal);if(A.type==="aborted")return{shortCircuited:!0};if(A.type==="error"){let q=Mn(A.partialMatches).route.id;return{matches:A.partialMatches,pendingActionResult:[q,{type:ae.error,error:A.error}]}}else if(A.matches)N=A.matches;else{let{notFoundMatches:q,error:K,route:Z}=Qa(k.pathname);return{matches:q,pendingActionResult:[Z.id,{type:ae.error,error:K}]}}}let F,I=po(N,k);if(!I.route.action&&!I.route.lazy)F={type:ae.error,error:Ke(405,{method:y.method,pathname:k.pathname,routeId:I.route.id})};else if(F=(await Wr("action",b,y,[I],N,null))[I.route.id],y.signal.aborted)return{shortCircuited:!0};if(Un(F)){let A;return H&&H.replace!=null?A=H.replace:A=xd(F.response.headers.get("Location"),new URL(y.url),s)===b.location.pathname+b.location.search,await _n(y,F,!0,{submission:E,replace:A}),{shortCircuited:!0}}if(hn(F))throw Ke(400,{type:"defer-action"});if(at(F)){let A=Mn(N,I.route.id);return(H&&H.replace)!==!0&&(z=Ce.Push),{matches:N,pendingActionResult:[A.route.id,F]}}return{matches:N,pendingActionResult:[I.route.id,F]}}async function dm(y,k,E,N,M,H,W,F,I,A,q){let K=M||Pl(k,H),Z=H||W||Cd(K),Me=!Ee&&(!d.v7_partialHydration||!I);if(N){if(Me){let xe=$u(q);$e(fe({navigation:K},xe!==void 0?{actionData:xe}:{}),{flushSync:A})}let te=await li(E,k.pathname,y.signal);if(te.type==="aborted")return{shortCircuited:!0};if(te.type==="error"){let xe=Mn(te.partialMatches).route.id;return{matches:te.partialMatches,loaderData:{},errors:{[xe]:te.error}}}else if(te.matches)E=te.matches;else{let{error:xe,notFoundMatches:or,route:Jr}=Qa(k.pathname);return{matches:or,loaderData:{},errors:{[Jr.id]:xe}}}}let le=l||a,[re,be]=vd(e.history,b,E,Z,k,d.v7_partialHydration&&I===!0,d.v7_skipActionErrorRevalidation,Pe,Zt,en,Le,ue,ne,le,s,q);if(Ja(te=>!(E&&E.some(xe=>xe.route.id===te))||re&&re.some(xe=>xe.route.id===te)),V=++j,re.length===0&&be.length===0){let te=Ju();return nr(k,fe({matches:E,loaderData:{},errors:q&&at(q[1])?{[q[0]]:q[1].error}:null},Ed(q),te?{fetchers:new Map(b.fetchers)}:{}),{flushSync:A}),{shortCircuited:!0}}if(Me){let te={};if(!N){te.navigation=K;let xe=$u(q);xe!==void 0&&(te.actionData=xe)}be.length>0&&(te.fetchers=fm(be)),$e(te,{flushSync:A})}be.forEach(te=>{nn(te.key),te.controller&&ke.set(te.key,te.controller)});let rr=()=>be.forEach(te=>nn(te.key));D&&D.signal.addEventListener("abort",rr);let{loaderResults:Xr,fetcherResults:Ut}=await Wu(b,E,re,be,y);if(y.signal.aborted)return{shortCircuited:!0};D&&D.signal.removeEventListener("abort",rr),be.forEach(te=>ke.delete(te.key));let zt=Ci(Xr);if(zt)return await _n(y,zt.result,!0,{replace:F}),{shortCircuited:!0};if(zt=Ci(Ut),zt)return ne.add(zt.key),await _n(y,zt.result,!0,{replace:F}),{shortCircuited:!0};let{loaderData:Ka,errors:Qr}=kd(b,E,Xr,q,be,Ut,bt);bt.forEach((te,xe)=>{te.subscribe(or=>{(or||te.done)&&bt.delete(xe)})}),d.v7_partialHydration&&I&&b.errors&&(Qr=fe({},b.errors,Qr));let zn=Ju(),si=Ku(V),ui=zn||si||be.length>0;return fe({matches:E,loaderData:Ka,errors:Qr},ui?{fetchers:new Map(b.fetchers)}:{})}function $u(y){if(y&&!at(y[1]))return{[y[0]]:y[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function fm(y){return y.forEach(k=>{let E=b.fetchers.get(k.key),N=io(void 0,E?E.data:void 0);b.fetchers.set(k.key,N)}),new Map(b.fetchers)}function pm(y,k,E,N){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");nn(y);let M=(N&&N.flushSync)===!0,H=l||a,W=Es(b.location,b.matches,s,d.v7_prependBasename,E,d.v7_relativeSplatPath,k,N==null?void 0:N.relative),F=Ln(H,W,s),I=ai(F,H,W);if(I.active&&I.matches&&(F=I.matches),!F){It(y,k,Ke(404,{pathname:W}),{flushSync:M});return}let{path:A,submission:q,error:K}=md(d.v7_normalizeFormMethod,!0,W,N);if(K){It(y,k,K,{flushSync:M});return}let Z=po(F,A),Me=(N&&N.preventScrollReset)===!0;if(q&&Et(q.formMethod)){hm(y,k,A,Z,F,I.active,M,Me,q);return}ue.set(y,{routeId:k,path:A}),mm(y,k,A,Z,F,I.active,M,Me,q)}async function hm(y,k,E,N,M,H,W,F,I){Xa(),ue.delete(y);function A(Oe){if(!Oe.route.action&&!Oe.route.lazy){let ir=Ke(405,{method:I.formMethod,pathname:E,routeId:k});return It(y,k,ir,{flushSync:W}),!0}return!1}if(!H&&A(N))return;let q=b.fetchers.get(y);tn(y,Vv(I,q),{flushSync:W});let K=new AbortController,Z=lr(e.history,E,K.signal,I);if(H){let Oe=await li(M,E,Z.signal);if(Oe.type==="aborted")return;if(Oe.type==="error"){It(y,k,Oe.error,{flushSync:W});return}else if(Oe.matches){if(M=Oe.matches,N=po(M,E),A(N))return}else{It(y,k,Ke(404,{pathname:E}),{flushSync:W});return}}ke.set(y,K);let Me=j,re=(await Wr("action",b,Z,[N],M,y))[N.route.id];if(Z.signal.aborted){ke.get(y)===K&&ke.delete(y);return}if(d.v7_fetcherPersist&&Le.has(y)){if(Un(re)||at(re)){tn(y,ln(void 0));return}}else{if(Un(re))if(ke.delete(y),V>Me){tn(y,ln(void 0));return}else return ne.add(y),tn(y,io(I)),_n(Z,re,!1,{fetcherSubmission:I,preventScrollReset:F});if(at(re)){It(y,k,re.error);return}}if(hn(re))throw Ke(400,{type:"defer-action"});let be=b.navigation.location||b.location,rr=lr(e.history,be,K.signal),Xr=l||a,Ut=b.navigation.state!=="idle"?Ln(Xr,b.navigation.location,s):b.matches;G(Ut,"Didn't find any matches after fetcher action");let zt=++j;$.set(y,zt);let Ka=io(I,re.data);b.fetchers.set(y,Ka);let[Qr,zn]=vd(e.history,b,Ut,I,be,!1,d.v7_skipActionErrorRevalidation,Pe,Zt,en,Le,ue,ne,Xr,s,[N.route.id,re]);zn.filter(Oe=>Oe.key!==y).forEach(Oe=>{let ir=Oe.key,tc=b.fetchers.get(ir),km=io(void 0,tc?tc.data:void 0);b.fetchers.set(ir,km),nn(ir),Oe.controller&&ke.set(ir,Oe.controller)}),$e({fetchers:new Map(b.fetchers)});let si=()=>zn.forEach(Oe=>nn(Oe.key));K.signal.addEventListener("abort",si);let{loaderResults:ui,fetcherResults:te}=await Wu(b,Ut,Qr,zn,rr);if(K.signal.aborted)return;K.signal.removeEventListener("abort",si),$.delete(y),ke.delete(y),zn.forEach(Oe=>ke.delete(Oe.key));let xe=Ci(ui);if(xe)return _n(rr,xe.result,!1,{preventScrollReset:F});if(xe=Ci(te),xe)return ne.add(xe.key),_n(rr,xe.result,!1,{preventScrollReset:F});let{loaderData:or,errors:Jr}=kd(b,Ut,ui,void 0,zn,te,bt);if(b.fetchers.has(y)){let Oe=ln(re.data);b.fetchers.set(y,Oe)}Ku(zt),b.navigation.state==="loading"&&zt>V?(G(z,"Expected pending action"),D&&D.abort(),nr(b.navigation.location,{matches:Ut,loaderData:or,errors:Jr,fetchers:new Map(b.fetchers)})):($e({errors:Jr,loaderData:Sd(b.loaderData,or,Ut,Jr),fetchers:new Map(b.fetchers)}),Pe=!1)}async function mm(y,k,E,N,M,H,W,F,I){let A=b.fetchers.get(y);tn(y,io(I,A?A.data:void 0),{flushSync:W});let q=new AbortController,K=lr(e.history,E,q.signal);if(H){let re=await li(M,E,K.signal);if(re.type==="aborted")return;if(re.type==="error"){It(y,k,re.error,{flushSync:W});return}else if(re.matches)M=re.matches,N=po(M,E);else{It(y,k,Ke(404,{pathname:E}),{flushSync:W});return}}ke.set(y,q);let Z=j,le=(await Wr("loader",b,K,[N],M,y))[N.route.id];if(hn(le)&&(le=await ju(le,K.signal,!0)||le),ke.get(y)===q&&ke.delete(y),!K.signal.aborted){if(Le.has(y)){tn(y,ln(void 0));return}if(Un(le))if(V>Z){tn(y,ln(void 0));return}else{ne.add(y),await _n(K,le,!1,{preventScrollReset:F});return}if(at(le)){It(y,k,le.error);return}G(!hn(le),"Unhandled fetcher deferred data"),tn(y,ln(le.data))}}async function _n(y,k,E,N){let{submission:M,fetcherSubmission:H,preventScrollReset:W,replace:F}=N===void 0?{}:N;k.response.headers.has("X-Remix-Revalidate")&&(Pe=!0);let I=k.response.headers.get("Location");G(I,"Expected a Location header on the redirect Response"),I=xd(I,new URL(y.url),s);let A=Bo(b.location,I,{_isRedirect:!0});if(n){let re=!1;if(k.response.headers.has("X-Remix-Reload-Document"))re=!0;else if(Du.test(I)){const be=e.history.createURL(I);re=be.origin!==t.location.origin||Hr(be.pathname,s)==null}if(re){F?t.location.replace(I):t.location.assign(I);return}}D=null;let q=F===!0||k.response.headers.has("X-Remix-Replace")?Ce.Replace:Ce.Push,{formMethod:K,formAction:Z,formEncType:Me}=b.navigation;!M&&!H&&K&&Z&&Me&&(M=Cd(b.navigation));let le=M||H;if(Ev.has(k.response.status)&&le&&Et(le.formMethod))await Nn(q,A,{submission:fe({},le,{formAction:I}),preventScrollReset:W||T,enableViewTransition:E?U:void 0});else{let re=Pl(A,M);await Nn(q,A,{overrideNavigation:re,fetcherSubmission:H,preventScrollReset:W||T,enableViewTransition:E?U:void 0})}}async function Wr(y,k,E,N,M,H){let W,F={};try{W=await zv(u,y,k,E,N,M,H,i,o)}catch(I){return N.forEach(A=>{F[A.route.id]={type:ae.error,error:I}}),F}for(let[I,A]of Object.entries(W))if(Fv(A)){let q=A.result;F[I]={type:ae.redirect,response:Lv(q,E,I,M,s,d.v7_relativeSplatPath)}}else F[I]=await jv(A);return F}async function Wu(y,k,E,N,M){let H=y.matches,W=Wr("loader",y,M,E,k,null),F=Promise.all(N.map(async q=>{if(q.matches&&q.match&&q.controller){let Z=(await Wr("loader",y,lr(e.history,q.path,q.controller.signal),[q.match],q.matches,q.key))[q.match.route.id];return{[q.key]:Z}}else return Promise.resolve({[q.key]:{type:ae.error,error:Ke(404,{pathname:q.path})}})})),I=await W,A=(await F).reduce((q,K)=>Object.assign(q,K),{});return await Promise.all([Bv(k,I,M.signal,H,y.loaderData),Hv(k,A,N)]),{loaderResults:I,fetcherResults:A}}function Xa(){Pe=!0,Zt.push(...Ja()),ue.forEach((y,k)=>{ke.has(k)&&en.add(k),nn(k)})}function tn(y,k,E){E===void 0&&(E={}),b.fetchers.set(y,k),$e({fetchers:new Map(b.fetchers)},{flushSync:(E&&E.flushSync)===!0})}function It(y,k,E,N){N===void 0&&(N={});let M=Mn(b.matches,k);oi(y),$e({errors:{[M.route.id]:E},fetchers:new Map(b.fetchers)},{flushSync:(N&&N.flushSync)===!0})}function Xu(y){return d.v7_fetcherPersist&&(_t.set(y,(_t.get(y)||0)+1),Le.has(y)&&Le.delete(y)),b.fetchers.get(y)||Pv}function oi(y){let k=b.fetchers.get(y);ke.has(y)&&!(k&&k.state==="loading"&&$.has(y))&&nn(y),ue.delete(y),$.delete(y),ne.delete(y),Le.delete(y),en.delete(y),b.fetchers.delete(y)}function gm(y){if(d.v7_fetcherPersist){let k=(_t.get(y)||0)-1;k<=0?(_t.delete(y),Le.add(y)):_t.set(y,k)}else oi(y);$e({fetchers:new Map(b.fetchers)})}function nn(y){let k=ke.get(y);k&&(k.abort(),ke.delete(y))}function Qu(y){for(let k of y){let E=Xu(k),N=ln(E.data);b.fetchers.set(k,N)}}function Ju(){let y=[],k=!1;for(let E of ne){let N=b.fetchers.get(E);G(N,"Expected fetcher: "+E),N.state==="loading"&&(ne.delete(E),y.push(E),k=!0)}return Qu(y),k}function Ku(y){let k=[];for(let[E,N]of $)if(N<y){let M=b.fetchers.get(E);G(M,"Expected fetcher: "+E),M.state==="loading"&&(nn(E),$.delete(E),k.push(E))}return Qu(k),k.length>0}function vm(y,k){let E=b.blockers.get(y)||oo;return Ve.get(y)!==k&&Ve.set(y,k),E}function Gu(y){b.blockers.delete(y),Ve.delete(y)}function ii(y,k){let E=b.blockers.get(y)||oo;G(E.state==="unblocked"&&k.state==="blocked"||E.state==="blocked"&&k.state==="blocked"||E.state==="blocked"&&k.state==="proceeding"||E.state==="blocked"&&k.state==="unblocked"||E.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+E.state+" -> "+k.state);let N=new Map(b.blockers);N.set(y,k),$e({blockers:N})}function Yu(y){let{currentLocation:k,nextLocation:E,historyAction:N}=y;if(Ve.size===0)return;Ve.size>1&&Fr(!1,"A router only supports one blocker at a time");let M=Array.from(Ve.entries()),[H,W]=M[M.length-1],F=b.blockers.get(H);if(!(F&&F.state==="proceeding")&&W({currentLocation:k,nextLocation:E,historyAction:N}))return H}function Qa(y){let k=Ke(404,{pathname:y}),E=l||a,{matches:N,route:M}=Pd(E);return Ja(),{notFoundMatches:N,route:M,error:k}}function Ja(y){let k=[];return bt.forEach((E,N)=>{(!y||y(N))&&(E.cancel(),k.push(N),bt.delete(N))}),k}function ym(y,k,E){if(v=y,w=k,h=E||null,!m&&b.navigation===El){m=!0;let N=ec(b.location,b.matches);N!=null&&$e({restoreScrollPosition:N})}return()=>{v=null,w=null,h=null}}function Zu(y,k){return h&&h(y,k.map(N=>nv(N,b.loaderData)))||y.key}function bm(y,k){if(v&&w){let E=Zu(y,k);v[E]=w()}}function ec(y,k){if(v){let E=Zu(y,k),N=v[E];if(typeof N=="number")return N}return null}function ai(y,k,E){if(c)if(y){if(Object.keys(y[0].params).length>0)return{active:!0,matches:Hi(k,E,s,!0)}}else return{active:!0,matches:Hi(k,E,s,!0)||[]};return{active:!1,matches:null}}async function li(y,k,E){if(!c)return{type:"success",matches:y};let N=y;for(;;){let M=l==null,H=l||a,W=i;try{await c({path:k,matches:N,patch:(A,q)=>{E.aborted||bd(A,q,H,W,o)}})}catch(A){return{type:"error",error:A,partialMatches:N}}finally{M&&!E.aborted&&(a=[...a])}if(E.aborted)return{type:"aborted"};let F=Ln(H,k,s);if(F)return{type:"success",matches:F};let I=Hi(H,k,s,!0);if(!I||N.length===I.length&&N.every((A,q)=>A.route.id===I[q].route.id))return{type:"success",matches:null};N=I}}function xm(y){i={},l=ma(y,o,void 0,i)}function wm(y,k){let E=l==null;bd(y,k,l||a,i,o),E&&(a=[...a],$e({}))}return C={get basename(){return s},get future(){return d},get state(){return b},get routes(){return a},get window(){return t},initialize:am,subscribe:sm,enableScrollRestoration:ym,navigate:Vu,fetch:pm,revalidate:um,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Xu,deleteFetcher:gm,dispose:lm,getBlocker:vm,deleteBlocker:Gu,patchRoutes:wm,_internalFetchControllers:ke,_internalActiveDeferreds:bt,_internalSetRoutes:xm},C}function Rv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Es(e,t,n,r,o,i,a,l){let s,u;if(a){s=[];for(let d of t)if(s.push(d),d.route.id===a){u=d;break}}else s=t,u=t[t.length-1];let c=zu(o||".",_u(s,i),Hr(e.pathname,n)||e.pathname,l==="path");if(o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&u){let d=Lu(c.search);if(u.route.index&&!d)c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index";else if(!u.route.index&&d){let p=new URLSearchParams(c.search),x=p.getAll("index");p.delete("index"),x.filter(h=>h).forEach(h=>p.append("index",h));let v=p.toString();c.search=v?"?"+v:""}}return r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:Xt([n,c.pathname])),Kn(c)}function md(e,t,n,r){if(!r||!Rv(r))return{path:n};if(r.formMethod&&!Uv(r.formMethod))return{path:n,error:Ke(405,{method:r.formMethod})};let o=()=>({path:n,error:Ke(400,{type:"invalid-body"})}),i=r.formMethod||"get",a=e?i.toUpperCase():i.toLowerCase(),l=kh(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Et(a))return o();let p=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,v)=>{let[h,w]=v;return""+x+h+"="+w+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:p}}}else if(r.formEncType==="application/json"){if(!Et(a))return o();try{let p=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:l,formEncType:r.formEncType,formData:void 0,json:p,text:void 0}}}catch{return o()}}}G(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=Os(r.formData),u=r.formData;else if(r.body instanceof FormData)s=Os(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=wd(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=wd(s)}catch{return o()}let c={formMethod:a,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Et(c.formMethod))return{path:n,submission:c};let d=Rn(n);return t&&d.search&&Lu(d.search)&&s.append("index",""),d.search="?"+s,{path:Kn(d),submission:c}}function gd(e,t,n){n===void 0&&(n=!1);let r=e.findIndex(o=>o.route.id===t);return r>=0?e.slice(0,n?r+1:r):e}function vd(e,t,n,r,o,i,a,l,s,u,c,d,p,x,v,h){let w=h?at(h[1])?h[1].error:h[1].data:void 0,m=e.createURL(t.location),f=e.createURL(o),g=n;i&&t.errors?g=gd(n,Object.keys(t.errors)[0],!0):h&&at(h[1])&&(g=gd(n,h[0]));let S=h?h[1].statusCode:void 0,C=a&&S&&S>=400,b=g.filter((T,D)=>{let{route:U}=T;if(U.lazy)return!0;if(U.loader==null)return!1;if(i)return Ps(U,t.loaderData,t.errors);if(Tv(t.loaderData,t.matches[D],T)||s.some(Ee=>Ee===T.route.id))return!0;let ie=t.matches[D],me=T;return yd(T,fe({currentUrl:m,currentParams:ie.params,nextUrl:f,nextParams:me.params},r,{actionResult:w,actionStatus:S,defaultShouldRevalidate:C?!1:l||m.pathname+m.search===f.pathname+f.search||m.search!==f.search||xh(ie,me)}))}),z=[];return d.forEach((T,D)=>{if(i||!n.some(Pe=>Pe.route.id===T.routeId)||c.has(D))return;let U=Ln(x,T.path,v);if(!U){z.push({key:D,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let ie=t.fetchers.get(D),me=po(U,T.path),Ee=!1;p.has(D)?Ee=!1:u.has(D)?(u.delete(D),Ee=!0):ie&&ie.state!=="idle"&&ie.data===void 0?Ee=l:Ee=yd(me,fe({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:f,nextParams:n[n.length-1].params},r,{actionResult:w,actionStatus:S,defaultShouldRevalidate:C?!1:l})),Ee&&z.push({key:D,routeId:T.routeId,path:T.path,matches:U,match:me,controller:new AbortController})}),[b,z]}function Ps(e,t,n){if(e.lazy)return!0;if(!e.loader)return!1;let r=t!=null&&t[e.id]!==void 0,o=n!=null&&n[e.id]!==void 0;return!r&&o?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!r&&!o}function Tv(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function xh(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function yd(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}function bd(e,t,n,r,o){var i;let a;if(e){let u=r[e];G(u,"No route found to patch children into: routeId = "+e),u.children||(u.children=[]),a=u.children}else a=n;let l=t.filter(u=>!a.some(c=>wh(u,c))),s=ma(l,o,[e||"_","patch",String(((i=a)==null?void 0:i.length)||"0")],r);a.push(...s)}function wh(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((n,r)=>{var o;return(o=t.children)==null?void 0:o.some(i=>wh(n,i))}):!1}async function Nv(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];G(o,"No route found in manifest");let i={};for(let a in r){let s=o[a]!==void 0&&a!=="hasErrorBoundary";Fr(!s,'Route "'+o.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!s&&!ev.has(a)&&(i[a]=r[a])}Object.assign(o,i),Object.assign(o,fe({},t(o),{lazy:void 0}))}async function _v(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,a)=>Object.assign(o,{[n[a].route.id]:i}),{})}async function zv(e,t,n,r,o,i,a,l,s,u){let c=i.map(x=>x.route.lazy?Nv(x.route,s,l):void 0),d=i.map((x,v)=>{let h=c[v],w=o.some(f=>f.route.id===x.route.id);return fe({},x,{shouldLoad:w,resolve:async f=>(f&&r.method==="GET"&&(x.route.lazy||x.route.loader)&&(w=!0),w?Dv(t,r,x,h,f,u):Promise.resolve({type:ae.data,result:void 0}))})}),p=await e({matches:d,request:r,params:i[0].params,fetcherKey:a,context:u});try{await Promise.all(c)}catch{}return p}async function Dv(e,t,n,r,o,i){let a,l,s=u=>{let c,d=new Promise((v,h)=>c=h);l=()=>c(),t.signal.addEventListener("abort",l);let p=v=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...v!==void 0?[v]:[]),x=(async()=>{try{return{type:"data",result:await(o?o(h=>p(h)):p())}}catch(v){return{type:"error",result:v}}})();return Promise.race([x,d])};try{let u=n.route[e];if(r)if(u){let c,[d]=await Promise.all([s(u).catch(p=>{c=p}),r]);if(c!==void 0)throw c;a=d}else if(await r,u=n.route[e],u)a=await s(u);else if(e==="action"){let c=new URL(t.url),d=c.pathname+c.search;throw Ke(405,{method:t.method,pathname:d,routeId:n.route.id})}else return{type:ae.data,result:void 0};else if(u)a=await s(u);else{let c=new URL(t.url),d=c.pathname+c.search;throw Ke(404,{pathname:d})}G(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ae.error,result:u}}finally{l&&t.signal.removeEventListener("abort",l)}return a}async function jv(e){let{result:t,type:n}=e;if(Sh(t)){let u;try{let c=t.headers.get("Content-Type");c&&/\bapplication\/json\b/.test(c)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(c){return{type:ae.error,error:c}}return n===ae.error?{type:ae.error,error:new ga(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ae.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ae.error){if(Od(t)){var r;if(t.data instanceof Error){var o;return{type:ae.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new ga(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ae.error,error:t,statusCode:Fa(t)?t.status:void 0}}if(Iv(t)){var i,a;return{type:ae.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}if(Od(t)){var l,s;return{type:ae.data,data:t.data,statusCode:(l=t.init)==null?void 0:l.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:ae.data,data:t}}function Lv(e,t,n,r,o,i){let a=e.headers.get("Location");if(G(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!Du.test(a)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);a=Es(new URL(t.url),l,o,!0,a,i),e.headers.set("Location",a)}return e}function xd(e,t,n){if(Du.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=Hr(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function lr(e,t,n,r){let o=e.createURL(kh(t)).toString(),i={signal:n};if(r&&Et(r.formMethod)){let{formMethod:a,formEncType:l}=r;i.method=a.toUpperCase(),l==="application/json"?(i.headers=new Headers({"Content-Type":l}),i.body=JSON.stringify(r.json)):l==="text/plain"?i.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?i.body=Os(r.formData):i.body=r.formData}return new Request(o,i)}function Os(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function wd(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Mv(e,t,n,r,o){let i={},a=null,l,s=!1,u={},c=n&&at(n[1])?n[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in t))return;let p=d.route.id,x=t[p];if(G(!Un(x),"Cannot handle redirect results in processLoaderData"),at(x)){let v=x.error;c!==void 0&&(v=c,c=void 0),a=a||{};{let h=Mn(e,p);a[h.route.id]==null&&(a[h.route.id]=v)}i[p]=void 0,s||(s=!0,l=Fa(x.error)?x.error.status:500),x.headers&&(u[p]=x.headers)}else hn(x)?(r.set(p,x.deferredData),i[p]=x.deferredData.data,x.statusCode!=null&&x.statusCode!==200&&!s&&(l=x.statusCode),x.headers&&(u[p]=x.headers)):(i[p]=x.data,x.statusCode&&x.statusCode!==200&&!s&&(l=x.statusCode),x.headers&&(u[p]=x.headers))}),c!==void 0&&n&&(a={[n[0]]:c},i[n[0]]=void 0),{loaderData:i,errors:a,statusCode:l||200,loaderHeaders:u}}function kd(e,t,n,r,o,i,a){let{loaderData:l,errors:s}=Mv(t,n,r,a);return o.forEach(u=>{let{key:c,match:d,controller:p}=u,x=i[c];if(G(x,"Did not find corresponding fetcher result"),!(p&&p.signal.aborted))if(at(x)){let v=Mn(e.matches,d==null?void 0:d.route.id);s&&s[v.route.id]||(s=fe({},s,{[v.route.id]:x.error})),e.fetchers.delete(c)}else if(Un(x))G(!1,"Unhandled fetcher revalidation redirect");else if(hn(x))G(!1,"Unhandled fetcher deferred data");else{let v=ln(x.data);e.fetchers.set(c,v)}}),{loaderData:l,errors:s}}function Sd(e,t,n,r){let o=fe({},t);for(let i of n){let a=i.route.id;if(t.hasOwnProperty(a)?t[a]!==void 0&&(o[a]=t[a]):e[a]!==void 0&&i.route.loader&&(o[a]=e[a]),r&&r.hasOwnProperty(a))break}return o}function Ed(e){return e?at(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Mn(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Pd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ke(e,t){let{pathname:n,routeId:r,method:o,type:i,message:a}=t===void 0?{}:t,l="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(l="Bad Request",o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(l="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",s='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new ga(e||500,l,new Error(s),!0)}function Ci(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(Un(o))return{key:r,result:o}}}function kh(e){let t=typeof e=="string"?Rn(e):e;return Kn(fe({},t,{hash:""}))}function Av(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function Fv(e){return Sh(e.result)&&Sv.has(e.result.status)}function hn(e){return e.type===ae.deferred}function at(e){return e.type===ae.error}function Un(e){return(e&&e.type)===ae.redirect}function Od(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Iv(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Sh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Uv(e){return kv.has(e.toLowerCase())}function Et(e){return xv.has(e.toLowerCase())}async function Bv(e,t,n,r,o){let i=Object.entries(t);for(let a=0;a<i.length;a++){let[l,s]=i[a],u=e.find(p=>(p==null?void 0:p.route.id)===l);if(!u)continue;let c=r.find(p=>p.route.id===u.route.id),d=c!=null&&!xh(c,u)&&(o&&o[u.route.id])!==void 0;hn(s)&&d&&await ju(s,n,!1).then(p=>{p&&(t[l]=p)})}}async function Hv(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:a}=n[r],l=t[o];e.find(u=>(u==null?void 0:u.route.id)===i)&&hn(l)&&(G(a,"Expected an AbortController for revalidating fetcher deferred result"),await ju(l,a.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function ju(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ae.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ae.error,error:o}}return{type:ae.data,data:e.deferredData.data}}}function Lu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function po(e,t){let n=typeof t=="string"?Rn(t).search:t.search;if(e[e.length-1].route.index&&Lu(n||""))return e[e.length-1];let r=vh(e);return r[r.length-1]}function Cd(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:a}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(a!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Pl(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function qv(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function io(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Vv(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ln(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function $v(e,t){try{let n=e.sessionStorage.getItem(bh);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function Wv(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(bh,JSON.stringify(n))}catch(r){Fr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function va(){return va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},va.apply(this,arguments)}const Ia=R.createContext(null),Eh=R.createContext(null),er=R.createContext(null),Mu=R.createContext(null),Tn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),Ph=R.createContext(null);function Xv(e,t){let{relative:n}=t===void 0?{}:t;Ko()||G(!1);let{basename:r,navigator:o}=R.useContext(er),{hash:i,pathname:a,search:l}=Ch(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:Xt([r,a])),o.createHref({pathname:s,search:l,hash:i})}function Ko(){return R.useContext(Mu)!=null}function Ua(){return Ko()||G(!1),R.useContext(Mu).location}function Oh(e){R.useContext(er).static||R.useLayoutEffect(e)}function Au(){let{isDataRoute:e}=R.useContext(Tn);return e?ly():Qv()}function Qv(){Ko()||G(!1);let e=R.useContext(Ia),{basename:t,future:n,navigator:r}=R.useContext(er),{matches:o}=R.useContext(Tn),{pathname:i}=Ua(),a=JSON.stringify(_u(o,n.v7_relativeSplatPath)),l=R.useRef(!1);return Oh(()=>{l.current=!0}),R.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=zu(u,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Xt([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,a,i,e])}const Jv=R.createContext(null);function Kv(e){let t=R.useContext(Tn).outlet;return t&&R.createElement(Jv.Provider,{value:e},t)}function Ch(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=R.useContext(er),{matches:o}=R.useContext(Tn),{pathname:i}=Ua(),a=JSON.stringify(_u(o,r.v7_relativeSplatPath));return R.useMemo(()=>zu(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function Gv(e,t,n,r){Ko()||G(!1);let{navigator:o}=R.useContext(er),{matches:i}=R.useContext(Tn),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let u=Ua(),c;c=u;let d=c.pathname||"/",p=d;if(s!=="/"){let h=s.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(h.length).join("/")}let x=Ln(e,{pathname:p});return ny(x&&x.map(h=>Object.assign({},h,{params:Object.assign({},l,h.params),pathname:Xt([s,o.encodeLocation?o.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?s:Xt([s,o.encodeLocation?o.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,n,r)}function Yv(){let e=ay(),t=Fa(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},t),n?R.createElement("pre",{style:o},n):null,null)}const Zv=R.createElement(Yv,null);class ey extends R.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?R.createElement(Tn.Provider,{value:this.props.routeContext},R.createElement(Ph.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ty(e){let{routeContext:t,match:n,children:r}=e,o=R.useContext(Ia);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(Tn.Provider,{value:t},r)}function ny(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=a.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||G(!1),a=a.slice(0,Math.min(a.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<a.length;c++){let d=a[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:p,errors:x}=n,v=d.route.loader&&p[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||v){s=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((c,d,p)=>{let x,v=!1,h=null,w=null;n&&(x=l&&d.route.id?l[d.route.id]:void 0,h=d.route.errorElement||Zv,s&&(u<0&&p===0?(sy("route-fallback"),v=!0,w=null):u===p&&(v=!0,w=d.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,p+1)),f=()=>{let g;return x?g=h:v?g=w:d.route.Component?g=R.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=c,R.createElement(ty,{match:d,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?R.createElement(ey,{location:n.location,revalidation:n.revalidation,component:h,error:x,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Rh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Rh||{}),ya=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ya||{});function ry(e){let t=R.useContext(Ia);return t||G(!1),t}function oy(e){let t=R.useContext(Eh);return t||G(!1),t}function iy(e){let t=R.useContext(Tn);return t||G(!1),t}function Th(e){let t=iy(),n=t.matches[t.matches.length-1];return n.route.id||G(!1),n.route.id}function ay(){var e;let t=R.useContext(Ph),n=oy(ya.UseRouteError),r=Th(ya.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function ly(){let{router:e}=ry(Rh.UseNavigateStable),t=Th(ya.UseNavigateStable),n=R.useRef(!1);return Oh(()=>{n.current=!0}),R.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,va({fromRouteId:t},i)))},[e,t])}const Rd={};function sy(e,t,n){Rd[e]||(Rd[e]=!0)}function uy(e){return Kv(e.context)}function cy(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ce.Pop,navigator:i,static:a=!1,future:l}=e;Ko()&&G(!1);let s=t.replace(/^\/*/,"/"),u=R.useMemo(()=>({basename:s,navigator:i,static:a,future:va({v7_relativeSplatPath:!1},l)}),[s,l,i,a]);typeof r=="string"&&(r=Rn(r));let{pathname:c="/",search:d="",hash:p="",state:x=null,key:v="default"}=r,h=R.useMemo(()=>{let w=Hr(c,s);return w==null?null:{location:{pathname:w,search:d,hash:p,state:x,key:v},navigationType:o}},[s,c,d,p,x,v,o]);return h==null?null:R.createElement(er.Provider,{value:u},R.createElement(Mu.Provider,{children:n,value:h}))}new Promise(()=>{});function dy(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:R.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:R.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:R.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ho.apply(this,arguments)}function fy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function py(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function hy(e,t){return e.button===0&&(!t||t==="_self")&&!py(e)}const my=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gy="6";try{window.__reactRouterVersion=gy}catch{}function vy(e,t){return Cv({basename:void 0,future:Ho({},void 0,{v7_prependBasename:!0}),history:Gg({window:void 0}),hydrationData:yy(),routes:e,mapRouteProperties:dy,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function yy(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Ho({},t,{errors:by(t.errors)})),t}function by(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new ga(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let a=new i(o.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const xy=R.createContext({isTransitioning:!1}),wy=R.createContext(new Map),ky="startTransition",Td=Fm[ky],Sy="flushSync",Nd=Kg[Sy];function Ey(e){Td?Td(e):e()}function ao(e){Nd?Nd(e):e()}class Py{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function Oy(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=R.useState(n.state),[a,l]=R.useState(),[s,u]=R.useState({isTransitioning:!1}),[c,d]=R.useState(),[p,x]=R.useState(),[v,h]=R.useState(),w=R.useRef(new Map),{v7_startTransition:m}=r||{},f=R.useCallback(T=>{m?Ey(T):T()},[m]),g=R.useCallback((T,D)=>{let{deletedFetchers:U,flushSync:ie,viewTransitionOpts:me}=D;U.forEach(Pe=>w.current.delete(Pe)),T.fetchers.forEach((Pe,Zt)=>{Pe.data!==void 0&&w.current.set(Zt,Pe.data)});let Ee=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!me||Ee){ie?ao(()=>i(T)):f(()=>i(T));return}if(ie){ao(()=>{p&&(c&&c.resolve(),p.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:me.currentLocation,nextLocation:me.nextLocation})});let Pe=n.window.document.startViewTransition(()=>{ao(()=>i(T))});Pe.finished.finally(()=>{ao(()=>{d(void 0),x(void 0),l(void 0),u({isTransitioning:!1})})}),ao(()=>x(Pe));return}p?(c&&c.resolve(),p.skipTransition(),h({state:T,currentLocation:me.currentLocation,nextLocation:me.nextLocation})):(l(T),u({isTransitioning:!0,flushSync:!1,currentLocation:me.currentLocation,nextLocation:me.nextLocation}))},[n.window,p,c,w,f]);R.useLayoutEffect(()=>n.subscribe(g),[n,g]),R.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new Py)},[s]),R.useEffect(()=>{if(c&&a&&n.window){let T=a,D=c.promise,U=n.window.document.startViewTransition(async()=>{f(()=>i(T)),await D});U.finished.finally(()=>{d(void 0),x(void 0),l(void 0),u({isTransitioning:!1})}),x(U)}},[f,a,c,n.window]),R.useEffect(()=>{c&&a&&o.location.key===a.location.key&&c.resolve()},[c,p,o.location,a]),R.useEffect(()=>{!s.isTransitioning&&v&&(l(v.state),u({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),h(void 0))},[s.isTransitioning,v]),R.useEffect(()=>{},[]);let S=R.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:T=>n.navigate(T),push:(T,D,U)=>n.navigate(T,{state:D,preventScrollReset:U==null?void 0:U.preventScrollReset}),replace:(T,D,U)=>n.navigate(T,{replace:!0,state:D,preventScrollReset:U==null?void 0:U.preventScrollReset})}),[n]),C=n.basename||"/",b=R.useMemo(()=>({router:n,navigator:S,static:!1,basename:C}),[n,S,C]),z=R.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return R.createElement(R.Fragment,null,R.createElement(Ia.Provider,{value:b},R.createElement(Eh.Provider,{value:o},R.createElement(wy.Provider,{value:w.current},R.createElement(xy.Provider,{value:s},R.createElement(cy,{basename:C,location:o.location,navigationType:o.historyAction,navigator:S,future:z},o.initialized||n.future.v7_partialHydration?R.createElement(Cy,{routes:n.routes,future:n.future,state:o}):t))))),null)}const Cy=R.memo(Ry);function Ry(e){let{routes:t,future:n,state:r}=e;return Gv(t,void 0,r,n)}const Ty=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qo=R.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:a,state:l,target:s,to:u,preventScrollReset:c,viewTransition:d}=t,p=fy(t,my),{basename:x}=R.useContext(er),v,h=!1;if(typeof u=="string"&&Ny.test(u)&&(v=u,Ty))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),C=Hr(S.pathname,x);S.origin===g.origin&&C!=null?u=C+S.search+S.hash:h=!0}catch{}let w=Xv(u,{relative:o}),m=_y(u,{replace:a,state:l,target:s,preventScrollReset:c,relative:o,viewTransition:d});function f(g){r&&r(g),g.defaultPrevented||m(g)}return R.createElement("a",Ho({},p,{href:v||w,onClick:h||i?r:f,ref:n,target:s}))});var _d;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(_d||(_d={}));var zd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zd||(zd={}));function _y(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:l}=t===void 0?{}:t,s=Au(),u=Ua(),c=Ch(e,{relative:a});return R.useCallback(d=>{if(hy(d,n)){d.preventDefault();let p=r!==void 0?r:Kn(u)===Kn(c);s(e,{replace:p,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[u,s,c,r,o,n,e,i,a,l])}const zy=()=>P.jsx("h1",{children:"Error Page"}),Nh=R.createContext(),Dy=({children:e})=>{const[t,n]=R.useState(!1),r=()=>{n(!t)};return P.jsx(Nh.Provider,{value:{isMenuOpen:t,toggleMenu:r},children:e})},jy=()=>P.jsx("section",{className:"overflow-hidden",children:P.jsx(Dy,{children:P.jsx(uy,{})})});/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_h=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var My={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=R.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:a,...l},s)=>R.createElement("svg",{ref:s,...My,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:_h("lucide",o),...l},[...a.map(([u,c])=>R.createElement(u,c)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=(e,t)=>{const n=R.forwardRef(({className:r,...o},i)=>R.createElement(Ay,{ref:i,iconNode:t,className:_h(`lucide-${Ly(e)}`,r),...o}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=tr("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=tr("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=tr("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=tr("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=tr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=tr("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=tr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Cs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAx4AAAB8CAMAAADQMJbAAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURQAAAACz8gCz8gCz8gCz8gCz8ggfSwCz8gCz8gCz8gCz8ggfSwCz8gCz8gCz8gCz8ggfSwCz8ggfSwgfSwgfSwgfSwgfSwgfSwgfSwgfSwgfSwgfSwgfSwCz8wgfS7FOlMwAAAAddFJOUwC7ESLumd1m3USq7syIM3eqVWYRuyJ3M0TMiJlVt2028AAADjRJREFUeNrtnWdj6yoMhj3wHhnOTpP//zPvmfe0DkMCgUktfW4TInhAegGRJGxsK7PpeGQnsLFJbft8PrvbxI5gY3ux+/O3Hc7sCza2r7Z//m/lB7uDje2TXZ6fjWMsNrZPVj5ntuUYi43ttx2er8YxFhvbT7s9pcYxFhvbLPH4GmPxVgjbuu3YPTW2ZwexceKhXD/YQWwrtruWjpKjK7YV257XDjY2TjzY2LBWcmDFxqawLQdWbGwWiQcHVmzrtgsHVmxs+MSDAyu2tduBAys2NoXdObBiY8MmHhxYsa3elPuBHFixsZUcWLGx4RIPDqzY2JKz/Hog359lY0uS6TXz6K4MBxsbGxvbOizfDWktxOOXCSHSdjNm7BY2tnHoH1IT/ZBjP6t+uFot+c5M3sJ0BDVqELIft5H+bQpspRB9umlsZhBPLlrv8JX5Uww0H960Qj8M2gbxaZl4uFv9+rm96m9bQKMqxf9Wkr9tkW39MYOMOIf7chG9naRbelfEJ5xLaV0r0laqerd3/+hsgPSVKDLXtuLsBchc/beFuVGqBSGV/K1Nc0W6I+hORxfR2975NIjqE66Ua4fLyNDDAZ8qgVEMUd+/TOuN00CpEVOwZYuDzyCVfzyUJ23Ba4fyqO6drpXqMSzc4EhR/ZHmkeJRx4DH8jMIvZWueKiv0HZkjcw0Pto4fG6B7pEiTjzM6UcYPH5Euznj8ckmzRXaE1UjBy8J2s4mPxS7KPEwDpVQeCw6g8SHx01XnYSqkdpxvLP80NQ2gIgSD5HHgsdDNIzHX9OWtiI6WaJ3pp14NdpLi2KMEA8TtQHxAIR6a8FDXxeRSLzq9V4aLT5y47FflsHjMcSDh3HLbi14XLV4PEmehRpd5yr3jS/UUFwID726GxYP0wq7EjzOejpornyYkgRBvRw5hg9L4VFHhIcB1pXgcTDgQaHtZkY3YbXdmqBr2vjw0GpGwfHQSibrwGN6moxA2x2oD9/UJH1TxIeHbkSGx0O3fqwDj5sRDwJtVxD7qSbq/SI+PEQWEx4aPtaBR2fEw71WCcSTGG03pep8Ze8sh4dG3V0CD/VezCrw2JvpcNd2QWk0XNstHnTWRIeHOg1bAg911LsKPK4APFy1XdCggGu7FSEdqt5fEg/lRLEIHsoAdA14XCB0uGq7sFhIkMLmKF8tikcdFR4qsWANeBxAeLhpuxnQU8BrgzUtHvLeXxQP1YS9EB5itXhMT5g5XRsc3LrBY+KhToU9XYVrbP9xSTwUtL7NbUF7PG5APJyWD0E5kzTUdMijK5K+r61bL6LCQ54MeXJRTHh0QDxctF24G3ui0Kofxl9yZD5uUjOb3oIryZm+xmlJWwyPNKCLIsJjD6XDRdutHWepL2Y+pdvPhvvY2mQ86r7vXXoUvvZVvvAQXz45y6uit+sYTy6KCI8SjIe9ttu4xjmoQK0fcemKqicrP9EA3Bmy7TgSPGTBftNaLB/VkgFTCDwucDrstV3UDrepTIYhy1fdks177A5c5Sivuc8VtR88FGPXVOwlC+aiePA4IPB4Tn5VXZhn9YtHn+G40vx95UeIxCylRUg8fkwhNbJjPLkoGjwmDB222u6AwkO4ZB5atl4v3gqr09rh8HgNg7ziob9fJtaHxw2Fh6W2i7wOXtl/mOHGSD775zRLIsejDoyHlo/d6vDoUHjYabtY9a+3/jDjfars8+gyVeKIAY8XpcI3Hro8sV0bHnscHXbaLvoESGOZ5QMqM33io7DGOiQe8y/zjkcuENHVN8ejROLxvHgfDg9tLZvMdff1b+/XY/IeeMzUXe946NbnZl14XLB0PA+eVV2TtquLrXLE6IQIj8sLu5LJwj8emtV+WJewe0Djgdd2MzwdGuemzod9k7ytW7cCsnVQPL7+sAB4VPBl/VtvC054OvDa7mCBh7DQrQS5Sxc/VCKLaQLgoV4+RCAXxYHHzQIPtLZrVeSzwg+tKiAeTkft8HjUgfEYwPGrJxfFgUdngQdW27Wr8lmjO45+8XA+jlpT4fFZZAuBxwje+fDkoijwONnQgS3pY3mvr8GmHkN8eCh+hM1tlV1QPNQr/iaMi6LAo7TCA6ft2t5cSrGw5RHiUZG55J+6GwSPFLqz5MlFMeChU3U7Km1XozTV2hfP5NoubpXGvYsjqnjx+DddBMGjgM5a3xiPg46AG422q38tbcRqu7iXO0f7ECY6PP4Pa4LgAdZrvy8ekz5+6ki03UEv3vZIbXeHOC1nUbAhjRiPv5f1guDRMB43ffa9JdF2hf58W4U8XlihYjE0HvXCeAhA4xiPMHh0+nLsZ4py7RvTbChwmt8Gtda8Gx6pfmEpwuGhzvHWgsfJlFxcCbRdjarbG7fUG8SAr0nweCyLR2FocsN4BMOjNElTe3dttzH6JcNpu98eD+02kWA8QuFxMQ/+zlnbTc2ZN07b/f545CbpgPEIgcfBHDo5a7sZQLdtUNru98dDfwinYjyC4DEBEu/J9dxuC1kZaoy2uwI8tOupGJViBuNBiAdItj04arsCkldsMNquZ+UqCjwyrbwrHiHwWLuw20FqvV3ctN0NTJXCaLsVdFZ7S2G3MO19ItrOeDjgcYJVCi2dtN0a1pctQtv1vGseBx52zzPwoRI6PEpYLZKbi7bbAKOmEaHtjog03mKY9XHgYXUJgI8kkuFxAd52mlzO7QJU3d+mKw6eQ1PG/hucuSqsz1I++EA7IR7gnFtXquGob4+ui1uwi1twwJYR4FFEgofNFcs3vQ4VIR5nsGJ7sS/XjkgpBFzbTeEqlwUeG+K+b2zxsCh+9J6XaWO8LbiF7/eV1tquAOun2rGwgY74mgAP4vse2Lvmn/DIxZJ4BCvFEOVd8w6Ox9VW29WGB20GdnENla4k2hUaj4y079GVSgrYD/WPB0UhHycXLYmHtgLD9eP4z85b65oMZC8rN8DcXNLno+MI0xRxyhx6CoQHmu3IysC5uWhJPCwrMKC0Xbq3Y2c90iP22JF3zV90gNBVEguXCSayIqJvWyXxQkWHTttNyfCYvfioCdqEeaXOekRmHrzGbuEyw0RWgjq2GrvgEOhAhof6Kc6Rjo7ZnI68IIJa1cB5ZxUCD6S6S4ZH9sYPGJxPiu2GIxSPMx0dam23JcRDgKMrwPseFWaALYwHbgnm52+S81U5Jj+gEdCWEI/ORtVF2waulRg7RdewITY8UOru6h9POx40guoWOsN3hHiotN0NJR3zznR5WzDFxFaL44GSTVf+9ObxoA35laP+jlB1qert1qR4zCYt/YMIg+1OvuTU1uJ4YILUAA83t9HicTzoB+UeWlC9JMXj+SFr7I6WjtnAzazfNW+Rp3+WVa6QEw0FHgVGQ4xHuZoOpkm7BJ4c/KClQ/4UZ0+Mx6xfDJ2oeqpcPzPKhsyy+x5IdReDh/Sk02haqtIkmItQcLzmFeXs7Mcdmj1fifGQBXojNR1zbdeUsfaSaS4zdX6Fkbn8vA5VoI4/ueDxtdp2lu+K3iwDNEkwFznB8XPUH4EJxdabqqvUdltyPAR2yPSzFWSX2oyuiqDpklNFKDzA6i4KD4LjC15dBLYTQDTagt9y2pLj0XlWdaWCFCQi74fxl9vz3QAJ9nae+l4ybHF4QNVd73g0STgXQU1TqrDbXn6EWNP53sEfku3I8XjVdjf0dMyXjx35F3ibGiXDCocHtBW+8WiTgC5yPklllTqf6Ol4XT5qD3jMMwPy+C331/eVIx7AH+sZD5ElAV0UCo+TT1VXqhxXPuh42ZQgDuA2ScR4wCYcz3hUSYx43Cin9r0POubabu8Fj7nm3pB+eJpEjUezPB5tEiUejtnC3a+qK9F2Rz90vPTPQPjZqpPwseABuhrlFY86iRQPt3Rh8qvqSrTd1hMeL7Ev4Y2SJokcD8iS7BMP9U2apfFwyhe2nlXdPxHc5FfVVZxSIIviqiR6PADqrk88miRaPC5E49aLqvtS/Gfjiw7JcVEiiaxI4scD0BSPeFRJvHhoDozgZKuTLzo+CwD6Wa7QXc/PKoHzYUbCR5u8Ax5JuhweusG7PB7W4VWJSfLvugdtpn0H03Yrp90f/XjvEx98tMl74GGMWr3hoR27EeBhG14dEaquqaD0VIK0XVSlA2yIPXo4G1wk74JHsxAe+jktAjws9yv2iLO65tc6jh1A2x1xyQNyg7i13lG2JDYqPEzqrh88TNVfYsDDKv2Y3RI8W90Zh+peW8BghVyQ0e+ayDIXFy1ANMkb4ZHU4fFoTR0WBR4WfKAqMEBeCjwDNliE4+JhyEClgI3WUrLxIHVkeOhDTw94qC6WRYcHes/igNl9Bz0UqK+PdTPuZBegL2kswjPLDcJhqb63xQNVjJgAjxRQBjQSPJDrxwF1duvurhB0RnEFWHK1t3DjTnhYOiLEQzsRUOMBu+0XCx6obYst7ujWBGvB1SAEVE5RLMTfvcuhpC/r0GbBvrfHA/VMqRMe6UjQXSHxSM7gXe8PnPa1pRDQroaJf4T+zNpKZcxS2rgqUjyaIHiIAlxdPR48oNVxr0fkxH8m2Z+8aAd2m5A4XOPHDKrxiiFs378gnTukZ+plMiXCQ6SYu3sL3xachf/mDfTuAzuwt+Cv3+ujqxY3tdkEStpZLRsAOUi/g7ckozhfWcPzK8gK22JmDuyukOiHETcifbnINgPRR1jdCS18lYhvv+sTmFS5WKN+4061DAnjIty0Qr9w4N5kGd1PrcgkAPkzCgIG7pgikiloyClEn24amwdrPLnIfgu91LzshI7Lujvqyz9UX97tk0hsVBQmEWkV13tFbH5suskG6XU/sWv+Rve7Ia2F+DQzjozGmux8O5R/4qyuO2w/jss36T9tOUGvpJiBDwAAAABJRU5ErkJggg==";function ze(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}ze(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Y=function(){return Y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},Y.apply(this,arguments)};function ba(e){return ba=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ba(e)}var $y=/^\s+/,Wy=/\s+$/;function B(e,t){if(t=t||{},(e=e||"")instanceof B)return e;if(!(this instanceof B))return new B(e,t);var n=function(r){var o={r:0,g:0,b:0},i=1,a=null,l=null,s=null,u=!1,c=!1;typeof r=="string"&&(r=function(v){v=v.replace($y,"").replace(Wy,"").toLowerCase();var h,w=!1;if(Rs[v])v=Rs[v],w=!0;else if(v=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(h=wt.rgb.exec(v))?{r:h[1],g:h[2],b:h[3]}:(h=wt.rgba.exec(v))?{r:h[1],g:h[2],b:h[3],a:h[4]}:(h=wt.hsl.exec(v))?{h:h[1],s:h[2],l:h[3]}:(h=wt.hsla.exec(v))?{h:h[1],s:h[2],l:h[3],a:h[4]}:(h=wt.hsv.exec(v))?{h:h[1],s:h[2],v:h[3]}:(h=wt.hsva.exec(v))?{h:h[1],s:h[2],v:h[3],a:h[4]}:(h=wt.hex8.exec(v))?{r:ot(h[1]),g:ot(h[2]),b:ot(h[3]),a:Fd(h[4]),format:w?"name":"hex8"}:(h=wt.hex6.exec(v))?{r:ot(h[1]),g:ot(h[2]),b:ot(h[3]),format:w?"name":"hex"}:(h=wt.hex4.exec(v))?{r:ot(h[1]+""+h[1]),g:ot(h[2]+""+h[2]),b:ot(h[3]+""+h[3]),a:Fd(h[4]+""+h[4]),format:w?"name":"hex8"}:(h=wt.hex3.exec(v))?{r:ot(h[1]+""+h[1]),g:ot(h[2]+""+h[2]),b:ot(h[3]+""+h[3]),format:w?"name":"hex"}:!1}(r)),ba(r)=="object"&&(Bt(r.r)&&Bt(r.g)&&Bt(r.b)?(d=r.r,p=r.g,x=r.b,o={r:255*pe(d,255),g:255*pe(p,255),b:255*pe(x,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Bt(r.h)&&Bt(r.s)&&Bt(r.v)?(a=ho(r.s),l=ho(r.v),o=function(v,h,w){v=6*pe(v,360),h=pe(h,100),w=pe(w,100);var m=Math.floor(v),f=v-m,g=w*(1-h),S=w*(1-f*h),C=w*(1-(1-f)*h),b=m%6,z=[w,S,g,g,C,w][b],T=[C,w,w,S,g,g][b],D=[g,g,C,w,w,S][b];return{r:255*z,g:255*T,b:255*D}}(r.h,a,l),u=!0,c="hsv"):Bt(r.h)&&Bt(r.s)&&Bt(r.l)&&(a=ho(r.s),s=ho(r.l),o=function(v,h,w){var m,f,g;function S(z,T,D){return D<0&&(D+=1),D>1&&(D-=1),D<1/6?z+6*(T-z)*D:D<.5?T:D<2/3?z+(T-z)*(2/3-D)*6:z}if(v=pe(v,360),h=pe(h,100),w=pe(w,100),h===0)m=f=g=w;else{var C=w<.5?w*(1+h):w+h-w*h,b=2*w-C;m=S(b,C,v+1/3),f=S(b,C,v),g=S(b,C,v-1/3)}return{r:255*m,g:255*f,b:255*g}}(r.h,a,s),u=!0,c="hsl"),r.hasOwnProperty("a")&&(i=r.a));var d,p,x;return i=zh(i),{ok:u,format:r.format||c,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a:i}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Dd(e,t,n){e=pe(e,255),t=pe(t,255),n=pe(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=(i+a)/2;if(i==a)r=o=0;else{var s=i-a;switch(o=l>.5?s/(2-i-a):s/(i+a),i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function jd(e,t,n){e=pe(e,255),t=pe(t,255),n=pe(n,255);var r,o,i=Math.max(e,t,n),a=Math.min(e,t,n),l=i,s=i-a;if(o=i===0?0:s/i,i==a)r=0;else{switch(i){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function Ld(e,t,n,r){var o=[Ot(Math.round(e).toString(16)),Ot(Math.round(t).toString(16)),Ot(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function Md(e,t,n,r){return[Ot(Dh(r)),Ot(Math.round(e).toString(16)),Ot(Math.round(t).toString(16)),Ot(Math.round(n).toString(16))].join("")}function Xy(e,t){t=t===0?0:t||10;var n=B(e).toHsl();return n.s-=t/100,n.s=Ba(n.s),B(n)}function Qy(e,t){t=t===0?0:t||10;var n=B(e).toHsl();return n.s+=t/100,n.s=Ba(n.s),B(n)}function Jy(e){return B(e).desaturate(100)}function Ky(e,t){t=t===0?0:t||10;var n=B(e).toHsl();return n.l+=t/100,n.l=Ba(n.l),B(n)}function Gy(e,t){t=t===0?0:t||10;var n=B(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),B(n)}function Yy(e,t){t=t===0?0:t||10;var n=B(e).toHsl();return n.l-=t/100,n.l=Ba(n.l),B(n)}function Zy(e,t){var n=B(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,B(n)}function e1(e){var t=B(e).toHsl();return t.h=(t.h+180)%360,B(t)}function Ad(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=B(e).toHsl(),r=[B(e)],o=360/t,i=1;i<t;i++)r.push(B({h:(n.h+i*o)%360,s:n.s,l:n.l}));return r}function t1(e){var t=B(e).toHsl(),n=t.h;return[B(e),B({h:(n+72)%360,s:t.s,l:t.l}),B({h:(n+216)%360,s:t.s,l:t.l})]}function n1(e,t,n){t=t||6,n=n||30;var r=B(e).toHsl(),o=360/n,i=[B(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,i.push(B(r));return i}function r1(e,t){t=t||6;for(var n=B(e).toHsv(),r=n.h,o=n.s,i=n.v,a=[],l=1/t;t--;)a.push(B({h:r,s:o,v:i})),i=(i+l)%1;return a}B.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=zh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=jd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=jd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=Dd(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Dd(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return Ld(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,i){var a=[Ot(Math.round(t).toString(16)),Ot(Math.round(n).toString(16)),Ot(Math.round(r).toString(16)),Ot(Dh(o))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*pe(this._r,255))+"%",g:Math.round(100*pe(this._g,255))+"%",b:Math.round(100*pe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*pe(this._r,255))+"%, "+Math.round(100*pe(this._g,255))+"%, "+Math.round(100*pe(this._b,255))+"%)":"rgba("+Math.round(100*pe(this._r,255))+"%, "+Math.round(100*pe(this._g,255))+"%, "+Math.round(100*pe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(o1[Ld(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+Md(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=B(e);n="#"+Md(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return B(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(Ky,arguments)},brighten:function(){return this._applyModification(Gy,arguments)},darken:function(){return this._applyModification(Yy,arguments)},desaturate:function(){return this._applyModification(Xy,arguments)},saturate:function(){return this._applyModification(Qy,arguments)},greyscale:function(){return this._applyModification(Jy,arguments)},spin:function(){return this._applyModification(Zy,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(n1,arguments)},complement:function(){return this._applyCombination(e1,arguments)},monochromatic:function(){return this._applyCombination(r1,arguments)},splitcomplement:function(){return this._applyCombination(t1,arguments)},triad:function(){return this._applyCombination(Ad,[3])},tetrad:function(){return this._applyCombination(Ad,[4])}},B.fromRatio=function(e,t){if(ba(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:ho(e[r]));e=n}return B(e,t)},B.equals=function(e,t){return!(!e||!t)&&B(e).toRgbString()==B(t).toRgbString()},B.random=function(){return B.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},B.mix=function(e,t,n){n=n===0?0:n||50;var r=B(e).toRgb(),o=B(t).toRgb(),i=n/100;return B({r:(o.r-r.r)*i+r.r,g:(o.g-r.g)*i+r.g,b:(o.b-r.b)*i+r.b,a:(o.a-r.a)*i+r.a})},B.readability=function(e,t){var n=B(e),r=B(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},B.isReadable=function(e,t,n){var r,o,i=B.readability(e,t);switch(o=!1,(r=function(a){var l,s;return l=((a=a||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(a.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7}return o},B.mostReadable=function(e,t,n){var r,o,i,a,l=null,s=0;o=(n=n||{}).includeFallbackColors,i=n.level,a=n.size;for(var u=0;u<t.length;u++)(r=B.readability(e,t[u]))>s&&(s=r,l=B(t[u]));return B.isReadable(e,l,{level:i,size:a})||!o?l:(n.includeFallbackColors=!1,B.mostReadable(e,["#fff","#000"],n))};var Rs=B.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},o1=B.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(Rs);function zh(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function pe(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function Ba(e){return Math.min(1,Math.max(0,e))}function ot(e){return parseInt(e,16)}function Ot(e){return e.length==1?"0"+e:""+e}function ho(e){return e<=1&&(e=100*e+"%"),e}function Dh(e){return Math.round(255*parseFloat(e)).toString(16)}function Fd(e){return ot(e)/255}var on,Ri,Ti,wt=(Ri="[\\s|\\(]+("+(on="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+on+")[,|\\s]+("+on+")\\s*\\)?",Ti="[\\s|\\(]+("+on+")[,|\\s]+("+on+")[,|\\s]+("+on+")[,|\\s]+("+on+")\\s*\\)?",{CSS_UNIT:new RegExp(on),rgb:new RegExp("rgb"+Ri),rgba:new RegExp("rgba"+Ti),hsl:new RegExp("hsl"+Ri),hsla:new RegExp("hsla"+Ti),hsv:new RegExp("hsv"+Ri),hsva:new RegExp("hsva"+Ti),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Bt(e){return!!wt.CSS_UNIT.exec(e)}var Go=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),i=o+r*(o/5)*-1;return(i==0||i<=Number.EPSILON)&&(i=.1),{animationPeriod:i+"s"}}return{animationPeriod:t}},Yo=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var i=n.fontSize;o=function(a,l){var s={};for(var u in a)Object.prototype.hasOwnProperty.call(a,u)&&l.indexOf(u)<0&&(s[u]=a[u]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(a);c<u.length;c++)l.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(a,u[c])&&(s[u[c]]=a[u[c]])}return s}(n,["fontSize"]),r=i}return{fontSize:r,styles:o}},i1={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Zo=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,i=e.style;return n?Q.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:Y(Y(Y({},o&&i1),r&&{color:r,mixBlendMode:"unset"}),i&&i)},typeof n=="string"&&n.length?n:"loading"):null},qr="rgb(50, 205, 50)";function ei(e,t){t===void 0&&(t=0);var n=[];return function r(o,i){return i===void 0&&(i=0),n.push.apply(n,o),n.length<i&&r(n,i),n.slice(0,i)}(e,t)}ze(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);B(qr).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});ze(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")});ze(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")});function Ol(e){return e&&e.Math===Math&&e}ze(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Ol(typeof window=="object"&&window)||Ol(typeof self=="object"&&self)||Ol(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")});ze(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")});ze(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")});ze(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]});ze(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});ze(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});ze(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});ze(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var sr=Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")}),a1=function(e){var t,n=Yo(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Go(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=ei(s,sr.length),d=0;d<c.length&&!(d>=4);d++)u[sr[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var p=0;p<sr.length;p++)u[sr[p]]=s}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),p=0;p<sr.length;p++)u[sr[p]]=qr}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return Q.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Y(Y(Y(Y(Y({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},Q.createElement("span",{className:"rli-d-i-b pulsate-indicator"},Q.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Q.createElement("span",{className:"rli-d-i-b pulsate-dot"}),Q.createElement("span",{className:"rli-d-i-b pulsate-dot"})),Q.createElement(Zo,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};ze(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var ur=Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")}),l1=function(e){var t,n=Yo(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Go(e==null?void 0:e.speedPlus,"1s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=ei(s,ur.length),d=0;d<c.length&&!(d>=4);d++)u[ur[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var p=0;p<ur.length;p++)u[ur[p]]=s}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),p=0;p<ur.length;p++)u[ur[p]]=qr}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return Q.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Y(Y(Y(Y(Y({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},Q.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},Q.createElement("span",{className:"rli-d-i-b brick-stack"})),Q.createElement(Zo,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};ze(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var cr=Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")}),s1=function(e){var t,n=Yo(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Go(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=ei(s,cr.length),d=0;d<c.length&&!(d>=4);d++)u[cr[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var p=0;p<cr.length;p++)u[cr[p]]=s}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),p=0;p<cr.length;p++)u[cr[p]]=qr}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return Q.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Y(Y(Y(Y(Y({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},Q.createElement("span",{className:"bob-indicator"},Q.createElement("span",{className:"bobbing"})),Q.createElement(Zo,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};ze(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var dr=Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")}),u1=function(e){var t,n=Yo(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Go(e==null?void 0:e.speedPlus,"0.5s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=ei(s,dr.length),d=0;d<c.length&&!(d>=4);d++)u[dr[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var p=0;p<dr.length;p++)u[dr[p]]=s}catch{for(p=0;p<dr.length;p++)u[dr[p]]=qr}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return Q.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Y(Y(Y(Y(Y({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r)},Q.createElement("span",{className:"wrapper"},Q.createElement("span",{className:"group"},Q.createElement("span",{className:"rli-d-i-b dot"}),Q.createElement("span",{className:"rli-d-i-b dot"}),Q.createElement("span",{className:"rli-d-i-b dot"})),Q.createElement("span",{className:"group"},Q.createElement("span",{className:"rli-d-i-b shadow"}),Q.createElement("span",{className:"rli-d-i-b shadow"}),Q.createElement("span",{className:"rli-d-i-b shadow"}))),Q.createElement(Zo,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor,style:{marginTop:"2px"}}))},c1=function(e){var t=Object(e).variant,n=t===void 0?"pulsate":t;return n==="pulsate"?Q.createElement(a1,Y({},e)):n==="brick-stack"?Q.createElement(l1,Y({},e)):n==="bob"?Q.createElement(s1,Y({},e)):n==="bounce"?Q.createElement(u1,Y({},e)):null};ze(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});ze(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});ze(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")});ze(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);var fr=Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")}),d1=function(e){var t,n=Yo(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,i=e==null?void 0:e.easing,a=Go(e==null?void 0:e.speedPlus,"2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=ei(s,fr.length),d=0;d<c.length&&!(d>=4);d++)u[fr[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var p=0;p<fr.length;p++)u[fr[p]]=s}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <LifeLine /> indicator cannot be processed. Using default instead!")),p=0;p<fr.length;p++)u[fr[p]]=qr}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return Q.createElement("span",{className:"rli-d-i-b lifeline-rli-bounding-box",style:Y(Y(Y(Y(Y({},o&&{fontSize:o}),a&&{"--rli-animation-duration":a}),i&&{"--rli-animation-function":i}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},Q.createElement("span",{className:"rli-d-i-b lifeline-indicator"},Q.createElement("svg",{width:"14em",height:"6.825000001em",xmlns:"http://www.w3.org/2000/svg",version:"1.2",viewBox:"0 0 350 50",preserveAspectRatio:"xMinYMin meet"},Q.createElement("path",{className:"rli-lifeline",stroke:"currentColor",fill:"none",strokeLinejoin:"round",strokeWidth:"4px",d:"M-113 70h250q8-30 12-3t5 8 3-7 3 4 6 35 8-55 6 40 8-3s2-11 10-10 1 1 8-10l4 8c6 4 8-6 10-17s2 10 9 11h210"}))),Q.createElement(Zo,{staticText:!0,text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor}))};const f1=e=>{let t=[{type:"text",name:"cpf",placeholder:"CPF...",label:"CPF:"},{type:"password",name:"password",placeholder:"Senha...",label:"Senha:"}];return e==="Register"&&(t=[{type:"text",name:"name",placeholder:"Nome...",label:"Nome Completo:"},...t,{type:"text",name:"mother",placeholder:"Nome da Mãe...",label:"Nome da Mãe:"},{type:"date",name:"birthdate",placeholder:"Nascimento...",label:"Data de Nascimento:"}]),t};function jh(e,t){return function(){return e.apply(t,arguments)}}const{toString:p1}=Object.prototype,{getPrototypeOf:Fu}=Object,Ha=(e=>t=>{const n=p1.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Nt=e=>(e=e.toLowerCase(),t=>Ha(t)===e),qa=e=>t=>typeof t===e,{isArray:Vr}=Array,Vo=qa("undefined");function h1(e){return e!==null&&!Vo(e)&&e.constructor!==null&&!Vo(e.constructor)&&ut(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Lh=Nt("ArrayBuffer");function m1(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Lh(e.buffer),t}const g1=qa("string"),ut=qa("function"),Mh=qa("number"),Va=e=>e!==null&&typeof e=="object",v1=e=>e===!0||e===!1,qi=e=>{if(Ha(e)!=="object")return!1;const t=Fu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},y1=Nt("Date"),b1=Nt("File"),x1=Nt("Blob"),w1=Nt("FileList"),k1=e=>Va(e)&&ut(e.pipe),S1=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ut(e.append)&&((t=Ha(e))==="formdata"||t==="object"&&ut(e.toString)&&e.toString()==="[object FormData]"))},E1=Nt("URLSearchParams"),[P1,O1,C1,R1]=["ReadableStream","Request","Response","Headers"].map(Nt),T1=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ti(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Vr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function Ah(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Bn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Fh=e=>!Vo(e)&&e!==Bn;function Ts(){const{caseless:e}=Fh(this)&&this||{},t={},n=(r,o)=>{const i=e&&Ah(t,o)||o;qi(t[i])&&qi(r)?t[i]=Ts(t[i],r):qi(r)?t[i]=Ts({},r):Vr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ti(arguments[r],n);return t}const N1=(e,t,n,{allOwnKeys:r}={})=>(ti(t,(o,i)=>{n&&ut(o)?e[i]=jh(o,n):e[i]=o},{allOwnKeys:r}),e),_1=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),z1=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},D1=(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Fu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},j1=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},L1=e=>{if(!e)return null;if(Vr(e))return e;let t=e.length;if(!Mh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},M1=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Fu(Uint8Array)),A1=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},F1=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},I1=Nt("HTMLFormElement"),U1=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Id=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),B1=Nt("RegExp"),Ih=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ti(n,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(r[i]=a||o)}),Object.defineProperties(e,r)},H1=e=>{Ih(e,(t,n)=>{if(ut(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ut(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},q1=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return Vr(e)?r(e):r(String(e).split(t)),n},V1=()=>{},$1=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Cl="abcdefghijklmnopqrstuvwxyz",Ud="0123456789",Uh={DIGIT:Ud,ALPHA:Cl,ALPHA_DIGIT:Cl+Cl.toUpperCase()+Ud},W1=(e=16,t=Uh.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function X1(e){return!!(e&&ut(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Q1=e=>{const t=new Array(10),n=(r,o)=>{if(Va(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=Vr(r)?[]:{};return ti(r,(a,l)=>{const s=n(a,o+1);!Vo(s)&&(i[l]=s)}),t[o]=void 0,i}}return r};return n(e,0)},J1=Nt("AsyncFunction"),K1=e=>e&&(Va(e)||ut(e))&&ut(e.then)&&ut(e.catch),Bh=((e,t)=>e?setImmediate:t?((n,r)=>(Bn.addEventListener("message",({source:o,data:i})=>{o===Bn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),Bn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",ut(Bn.postMessage)),G1=typeof queueMicrotask<"u"?queueMicrotask.bind(Bn):typeof process<"u"&&process.nextTick||Bh,O={isArray:Vr,isArrayBuffer:Lh,isBuffer:h1,isFormData:S1,isArrayBufferView:m1,isString:g1,isNumber:Mh,isBoolean:v1,isObject:Va,isPlainObject:qi,isReadableStream:P1,isRequest:O1,isResponse:C1,isHeaders:R1,isUndefined:Vo,isDate:y1,isFile:b1,isBlob:x1,isRegExp:B1,isFunction:ut,isStream:k1,isURLSearchParams:E1,isTypedArray:M1,isFileList:w1,forEach:ti,merge:Ts,extend:N1,trim:T1,stripBOM:_1,inherits:z1,toFlatObject:D1,kindOf:Ha,kindOfTest:Nt,endsWith:j1,toArray:L1,forEachEntry:A1,matchAll:F1,isHTMLForm:I1,hasOwnProperty:Id,hasOwnProp:Id,reduceDescriptors:Ih,freezeMethods:H1,toObjectSet:q1,toCamelCase:U1,noop:V1,toFiniteNumber:$1,findKey:Ah,global:Bn,isContextDefined:Fh,ALPHABET:Uh,generateString:W1,isSpecCompliantForm:X1,toJSONObject:Q1,isAsyncFn:J1,isThenable:K1,setImmediate:Bh,asap:G1};function X(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}O.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:O.toJSONObject(this.config),code:this.code,status:this.status}}});const Hh=X.prototype,qh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qh[e]={value:e}});Object.defineProperties(X,qh);Object.defineProperty(Hh,"isAxiosError",{value:!0});X.from=(e,t,n,r,o,i)=>{const a=Object.create(Hh);return O.toFlatObject(e,a,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),X.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const Y1=null;function Ns(e){return O.isPlainObject(e)||O.isArray(e)}function Vh(e){return O.endsWith(e,"[]")?e.slice(0,-2):e}function Bd(e,t,n){return e?e.concat(t).map(function(o,i){return o=Vh(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Z1(e){return O.isArray(e)&&!e.some(Ns)}const eb=O.toFlatObject(O,{},null,function(t){return/^is[A-Z]/.test(t)});function $a(e,t,n){if(!O.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=O.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!O.isUndefined(w[h])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&O.isSpecCompliantForm(t);if(!O.isFunction(o))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(O.isDate(v))return v.toISOString();if(!s&&O.isBlob(v))throw new X("Blob is not supported. Use a Buffer instead.");return O.isArrayBuffer(v)||O.isTypedArray(v)?s&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function c(v,h,w){let m=v;if(v&&!w&&typeof v=="object"){if(O.endsWith(h,"{}"))h=r?h:h.slice(0,-2),v=JSON.stringify(v);else if(O.isArray(v)&&Z1(v)||(O.isFileList(v)||O.endsWith(h,"[]"))&&(m=O.toArray(v)))return h=Vh(h),m.forEach(function(g,S){!(O.isUndefined(g)||g===null)&&t.append(a===!0?Bd([h],S,i):a===null?h:h+"[]",u(g))}),!1}return Ns(v)?!0:(t.append(Bd(w,h,i),u(v)),!1)}const d=[],p=Object.assign(eb,{defaultVisitor:c,convertValue:u,isVisitable:Ns});function x(v,h){if(!O.isUndefined(v)){if(d.indexOf(v)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(v),O.forEach(v,function(m,f){(!(O.isUndefined(m)||m===null)&&o.call(t,m,O.isString(f)?f.trim():f,h,p))===!0&&x(m,h?h.concat(f):[f])}),d.pop()}}if(!O.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Hd(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Iu(e,t){this._pairs=[],e&&$a(e,this,t)}const $h=Iu.prototype;$h.append=function(t,n){this._pairs.push([t,n])};$h.toString=function(t){const n=t?function(r){return t.call(this,r,Hd)}:Hd;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function tb(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Wh(e,t,n){if(!t)return e;const r=n&&n.encode||tb,o=n&&n.serialize;let i;if(o?i=o(t,n):i=O.isURLSearchParams(t)?t.toString():new Iu(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class qd{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){O.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Xh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nb=typeof URLSearchParams<"u"?URLSearchParams:Iu,rb=typeof FormData<"u"?FormData:null,ob=typeof Blob<"u"?Blob:null,ib={isBrowser:!0,classes:{URLSearchParams:nb,FormData:rb,Blob:ob},protocols:["http","https","file","blob","url","data"]},Uu=typeof window<"u"&&typeof document<"u",_s=typeof navigator=="object"&&navigator||void 0,ab=Uu&&(!_s||["ReactNative","NativeScript","NS"].indexOf(_s.product)<0),lb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sb=Uu&&window.location.href||"http://localhost",ub=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Uu,hasStandardBrowserEnv:ab,hasStandardBrowserWebWorkerEnv:lb,navigator:_s,origin:sb},Symbol.toStringTag,{value:"Module"})),nt={...ub,...ib};function cb(e,t){return $a(e,new nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return nt.isNode&&O.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function db(e){return O.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function fb(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Qh(e){function t(n,r,o,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),s=i>=n.length;return a=!a&&O.isArray(o)?o.length:a,s?(O.hasOwnProp(o,a)?o[a]=[o[a],r]:o[a]=r,!l):((!o[a]||!O.isObject(o[a]))&&(o[a]=[]),t(n,r,o[a],i)&&O.isArray(o[a])&&(o[a]=fb(o[a])),!l)}if(O.isFormData(e)&&O.isFunction(e.entries)){const n={};return O.forEachEntry(e,(r,o)=>{t(db(r),o,n,0)}),n}return null}function pb(e,t,n){if(O.isString(e))try{return(t||JSON.parse)(e),O.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const ni={transitional:Xh,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=O.isObject(t);if(i&&O.isHTMLForm(t)&&(t=new FormData(t)),O.isFormData(t))return o?JSON.stringify(Qh(t)):t;if(O.isArrayBuffer(t)||O.isBuffer(t)||O.isStream(t)||O.isFile(t)||O.isBlob(t)||O.isReadableStream(t))return t;if(O.isArrayBufferView(t))return t.buffer;if(O.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return cb(t,this.formSerializer).toString();if((l=O.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return $a(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),pb(t)):t}],transformResponse:[function(t){const n=this.transitional||ni.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(O.isResponse(t)||O.isReadableStream(t))return t;if(t&&O.isString(t)&&(r&&!this.responseType||o)){const a=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(a)throw l.name==="SyntaxError"?X.from(l,X.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};O.forEach(["delete","get","head","post","put","patch"],e=>{ni.headers[e]={}});const hb=O.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mb=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),n=a.substring(0,o).trim().toLowerCase(),r=a.substring(o+1).trim(),!(!n||t[n]&&hb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Vd=Symbol("internals");function lo(e){return e&&String(e).trim().toLowerCase()}function Vi(e){return e===!1||e==null?e:O.isArray(e)?e.map(Vi):String(e)}function gb(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vb=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Rl(e,t,n,r,o){if(O.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!O.isString(t)){if(O.isString(r))return t.indexOf(r)!==-1;if(O.isRegExp(r))return r.test(t)}}function yb(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function bb(e,t){const n=O.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,a){return this[r].call(this,t,o,i,a)},configurable:!0})})}class rt{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,s,u){const c=lo(s);if(!c)throw new Error("header name must be a non-empty string");const d=O.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||s]=Vi(l))}const a=(l,s)=>O.forEach(l,(u,c)=>i(u,c,s));if(O.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(O.isString(t)&&(t=t.trim())&&!vb(t))a(mb(t),n);else if(O.isHeaders(t))for(const[l,s]of t.entries())i(s,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=lo(t),t){const r=O.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return gb(o);if(O.isFunction(n))return n.call(this,o,r);if(O.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=lo(t),t){const r=O.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Rl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(a){if(a=lo(a),a){const l=O.findKey(r,a);l&&(!n||Rl(r,r[l],l,n))&&(delete r[l],o=!0)}}return O.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Rl(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return O.forEach(this,(o,i)=>{const a=O.findKey(r,i);if(a){n[a]=Vi(o),delete n[i];return}const l=t?yb(i):String(i).trim();l!==i&&delete n[i],n[l]=Vi(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return O.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&O.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Vd]=this[Vd]={accessors:{}}).accessors,o=this.prototype;function i(a){const l=lo(a);r[l]||(bb(o,a),r[l]=!0)}return O.isArray(t)?t.forEach(i):i(t),this}}rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);O.reduceDescriptors(rt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});O.freezeMethods(rt);function Tl(e,t){const n=this||ni,r=t||n,o=rt.from(r.headers);let i=r.data;return O.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Jh(e){return!!(e&&e.__CANCEL__)}function $r(e,t,n){X.call(this,e??"canceled",X.ERR_CANCELED,t,n),this.name="CanceledError"}O.inherits($r,X,{__CANCEL__:!0});function Kh(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function xb(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function wb(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[i];a||(a=u),n[o]=s,r[o]=u;let d=i,p=0;for(;d!==o;)p+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const x=c&&u-c;return x?Math.round(p*1e3/x):void 0}}function kb(e,t){let n=0,r=1e3/t,o,i;const a=(u,c=Date.now())=>{n=c,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const c=Date.now(),d=c-n;d>=r?a(u,c):(o=u,i||(i=setTimeout(()=>{i=null,a(o)},r-d)))},()=>o&&a(o)]}const xa=(e,t,n=3)=>{let r=0;const o=wb(50,250);return kb(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,s=a-r,u=o(s),c=a<=l;r=a;const d={loaded:a,total:l,progress:l?a/l:void 0,bytes:s,rate:u||void 0,estimated:u&&l&&c?(l-a)/u:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(d)},n)},$d=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Wd=e=>(...t)=>O.asap(()=>e(...t)),Sb=nt.hasStandardBrowserEnv?function(){const t=nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent),n=document.createElement("a");let r;function o(i){let a=i;return t&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(a){const l=O.isString(a)?o(a):a;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),Eb=nt.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];O.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),O.isString(r)&&a.push("path="+r),O.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pb(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Ob(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Gh(e,t){return e&&!Pb(t)?Ob(e,t):t}const Xd=e=>e instanceof rt?{...e}:e;function Gn(e,t){t=t||{};const n={};function r(u,c,d){return O.isPlainObject(u)&&O.isPlainObject(c)?O.merge.call({caseless:d},u,c):O.isPlainObject(c)?O.merge({},c):O.isArray(c)?c.slice():c}function o(u,c,d){if(O.isUndefined(c)){if(!O.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function i(u,c){if(!O.isUndefined(c))return r(void 0,c)}function a(u,c){if(O.isUndefined(c)){if(!O.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,c)=>o(Xd(u),Xd(c),!0)};return O.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=s[c]||o,p=d(e[c],t[c],c);O.isUndefined(p)&&d!==l||(n[c]=p)}),n}const Yh=e=>{const t=Gn({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:l}=t;t.headers=a=rt.from(a),t.url=Wh(Gh(t.baseURL,t.url),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let s;if(O.isFormData(n)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((s=a.getContentType())!==!1){const[u,...c]=s?s.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...c].join("; "))}}if(nt.hasStandardBrowserEnv&&(r&&O.isFunction(r)&&(r=r(t)),r||r!==!1&&Sb(t.url))){const u=o&&i&&Eb.read(i);u&&a.set(o,u)}return t},Cb=typeof XMLHttpRequest<"u",Rb=Cb&&function(e){return new Promise(function(n,r){const o=Yh(e);let i=o.data;const a=rt.from(o.headers).normalize();let{responseType:l,onUploadProgress:s,onDownloadProgress:u}=o,c,d,p,x,v;function h(){x&&x(),v&&v(),o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let w=new XMLHttpRequest;w.open(o.method.toUpperCase(),o.url,!0),w.timeout=o.timeout;function m(){if(!w)return;const g=rt.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?w.responseText:w.response,status:w.status,statusText:w.statusText,headers:g,config:e,request:w};Kh(function(z){n(z),h()},function(z){r(z),h()},C),w=null}"onloadend"in w?w.onloadend=m:w.onreadystatechange=function(){!w||w.readyState!==4||w.status===0&&!(w.responseURL&&w.responseURL.indexOf("file:")===0)||setTimeout(m)},w.onabort=function(){w&&(r(new X("Request aborted",X.ECONNABORTED,e,w)),w=null)},w.onerror=function(){r(new X("Network Error",X.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const C=o.transitional||Xh;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),r(new X(S,C.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,w)),w=null},i===void 0&&a.setContentType(null),"setRequestHeader"in w&&O.forEach(a.toJSON(),function(S,C){w.setRequestHeader(C,S)}),O.isUndefined(o.withCredentials)||(w.withCredentials=!!o.withCredentials),l&&l!=="json"&&(w.responseType=o.responseType),u&&([p,v]=xa(u,!0),w.addEventListener("progress",p)),s&&w.upload&&([d,x]=xa(s),w.upload.addEventListener("progress",d),w.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(c=g=>{w&&(r(!g||g.type?new $r(null,e,w):g),w.abort(),w=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const f=xb(o.url);if(f&&nt.protocols.indexOf(f)===-1){r(new X("Unsupported protocol "+f+":",X.ERR_BAD_REQUEST,e));return}w.send(i||null)})},Tb=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,l();const c=u instanceof Error?u:this.reason;r.abort(c instanceof X?c:new $r(c instanceof Error?c.message:c))}};let a=t&&setTimeout(()=>{a=null,i(new X(`timeout ${t} of ms exceeded`,X.ETIMEDOUT))},t);const l=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:s}=r;return s.unsubscribe=()=>O.asap(l),s}},Nb=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},_b=async function*(e,t){for await(const n of zb(e))yield*Nb(n,t)},zb=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Qd=(e,t,n,r)=>{const o=_b(e,t);let i=0,a,l=s=>{a||(a=!0,r&&r(s))};return new ReadableStream({async pull(s){try{const{done:u,value:c}=await o.next();if(u){l(),s.close();return}let d=c.byteLength;if(n){let p=i+=d;n(p)}s.enqueue(new Uint8Array(c))}catch(u){throw l(u),u}},cancel(s){return l(s),o.return()}},{highWaterMark:2})},Wa=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Zh=Wa&&typeof ReadableStream=="function",Db=Wa&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),em=(e,...t)=>{try{return!!e(...t)}catch{return!1}},jb=Zh&&em(()=>{let e=!1;const t=new Request(nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Jd=64*1024,zs=Zh&&em(()=>O.isReadableStream(new Response("").body)),wa={stream:zs&&(e=>e.body)};Wa&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!wa[t]&&(wa[t]=O.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new X(`Response type '${t}' is not supported`,X.ERR_NOT_SUPPORT,r)})})})(new Response);const Lb=async e=>{if(e==null)return 0;if(O.isBlob(e))return e.size;if(O.isSpecCompliantForm(e))return(await new Request(nt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(O.isArrayBufferView(e)||O.isArrayBuffer(e))return e.byteLength;if(O.isURLSearchParams(e)&&(e=e+""),O.isString(e))return(await Db(e)).byteLength},Mb=async(e,t)=>{const n=O.toFiniteNumber(e.getContentLength());return n??Lb(t)},Ab=Wa&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:s,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:p}=Yh(e);u=u?(u+"").toLowerCase():"text";let x=Tb([o,i&&i.toAbortSignal()],a),v;const h=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let w;try{if(s&&jb&&n!=="get"&&n!=="head"&&(w=await Mb(c,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),b;if(O.isFormData(r)&&(b=C.headers.get("content-type"))&&c.setContentType(b),C.body){const[z,T]=$d(w,xa(Wd(s)));r=Qd(C.body,Jd,z,T)}}O.isString(d)||(d=d?"include":"omit");const m="credentials"in Request.prototype;v=new Request(t,{...p,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:m?d:void 0});let f=await fetch(v);const g=zs&&(u==="stream"||u==="response");if(zs&&(l||g&&h)){const C={};["status","statusText","headers"].forEach(D=>{C[D]=f[D]});const b=O.toFiniteNumber(f.headers.get("content-length")),[z,T]=l&&$d(b,xa(Wd(l),!0))||[];f=new Response(Qd(f.body,Jd,z,()=>{T&&T(),h&&h()}),C)}u=u||"text";let S=await wa[O.findKey(wa,u)||"text"](f,e);return!g&&h&&h(),await new Promise((C,b)=>{Kh(C,b,{data:S,headers:rt.from(f.headers),status:f.status,statusText:f.statusText,config:e,request:v})})}catch(m){throw h&&h(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new X("Network Error",X.ERR_NETWORK,e,v),{cause:m.cause||m}):X.from(m,m&&m.code,e,v)}}),Ds={http:Y1,xhr:Rb,fetch:Ab};O.forEach(Ds,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Kd=e=>`- ${e}`,Fb=e=>O.isFunction(e)||e===null||e===!1,tm={getAdapter:e=>{e=O.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let a;if(r=n,!Fb(n)&&(r=Ds[(a=String(n)).toLowerCase()],r===void 0))throw new X(`Unknown adapter '${a}'`);if(r)break;o[a||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Kd).join(`
`):" "+Kd(i[0]):"as no adapter specified";throw new X("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return r},adapters:Ds};function Nl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $r(null,e)}function Gd(e){return Nl(e),e.headers=rt.from(e.headers),e.data=Tl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tm.getAdapter(e.adapter||ni.adapter)(e).then(function(r){return Nl(e),r.data=Tl.call(e,e.transformResponse,r),r.headers=rt.from(r.headers),r},function(r){return Jh(r)||(Nl(e),r&&r.response&&(r.response.data=Tl.call(e,e.transformResponse,r.response),r.response.headers=rt.from(r.response.headers))),Promise.reject(r)})}const nm="1.7.7",Bu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Bu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Yd={};Bu.transitional=function(t,n,r){function o(i,a){return"[Axios v"+nm+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new X(o(a," has been removed"+(n?" in "+n:"")),X.ERR_DEPRECATED);return n&&!Yd[a]&&(Yd[a]=!0,console.warn(o(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};function Ib(e,t,n){if(typeof e!="object")throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const l=e[i],s=l===void 0||a(l,i,e);if(s!==!0)throw new X("option "+i+" must be "+s,X.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new X("Unknown option "+i,X.ERR_BAD_OPTION)}}const js={assertOptions:Ib,validators:Bu},an=js.validators;class Vn{constructor(t){this.defaults=t,this.interceptors={request:new qd,response:new qd}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Gn(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&js.assertOptions(r,{silentJSONParsing:an.transitional(an.boolean),forcedJSONParsing:an.transitional(an.boolean),clarifyTimeoutError:an.transitional(an.boolean)},!1),o!=null&&(O.isFunction(o)?n.paramsSerializer={serialize:o}:js.assertOptions(o,{encode:an.function,serialize:an.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&O.merge(i.common,i[n.method]);i&&O.forEach(["delete","get","head","post","put","patch","common"],v=>{delete i[v]}),n.headers=rt.concat(a,i);const l=[];let s=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(s=s&&h.synchronous,l.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let c,d=0,p;if(!s){const v=[Gd.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,u),p=v.length,c=Promise.resolve(n);d<p;)c=c.then(v[d++],v[d++]);return c}p=l.length;let x=n;for(d=0;d<p;){const v=l[d++],h=l[d++];try{x=v(x)}catch(w){h.call(this,w);break}}try{c=Gd.call(this,x)}catch(v){return Promise.reject(v)}for(d=0,p=u.length;d<p;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Gn(this.defaults,t);const n=Gh(t.baseURL,t.url);return Wh(n,t.params,t.paramsSerializer)}}O.forEach(["delete","get","head","options"],function(t){Vn.prototype[t]=function(n,r){return this.request(Gn(r||{},{method:t,url:n,data:(r||{}).data}))}});O.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(Gn(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Vn.prototype[t]=n(),Vn.prototype[t+"Form"]=n(!0)});class Hu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(o);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new $r(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Hu(function(o){t=o}),cancel:t}}}function Ub(e){return function(n){return e.apply(null,n)}}function Bb(e){return O.isObject(e)&&e.isAxiosError===!0}const Ls={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ls).forEach(([e,t])=>{Ls[t]=e});function rm(e){const t=new Vn(e),n=jh(Vn.prototype.request,t);return O.extend(n,Vn.prototype,t,{allOwnKeys:!0}),O.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return rm(Gn(e,o))},n}const Te=rm(ni);Te.Axios=Vn;Te.CanceledError=$r;Te.CancelToken=Hu;Te.isCancel=Jh;Te.VERSION=nm;Te.toFormData=$a;Te.AxiosError=X;Te.Cancel=Te.CanceledError;Te.all=function(t){return Promise.all(t)};Te.spread=Ub;Te.isAxiosError=Bb;Te.mergeConfig=Gn;Te.AxiosHeaders=rt;Te.formToJSON=e=>Qh(O.isHTMLForm(e)?new FormData(e):e);Te.getAdapter=tm.getAdapter;Te.HttpStatusCode=Ls;Te.default=Te;const ri=Te.create({baseURL:"https://indigitalenv.online",headers:{"Content-Type":"application/json; charset=UTF-8"}});ri.interceptors.request.use(e=>{const t=JSON.parse(localStorage.getItem("auth_token"));return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));const Hb=async(e,t)=>{try{t(!0);const n=await ri.post("/login",e),r=await n.data.token,o=await n.data.user_id;return localStorage.setItem("auth_token",JSON.stringify(r)),localStorage.setItem("user_id",JSON.stringify(o)),t(!1),!0}catch(n){return console.log(n),t(!1),!1}},qb=async(e,t)=>{try{t(!0);const n=await ri.post("/register",e),r=await n.data.token,o=await n.data.id;return localStorage.setItem("auth_token",JSON.stringify(r)),localStorage.setItem("user_id",JSON.stringify(o)),t(!1),!0}catch(n){return console.log("Não foi possível registrar o usuário",n),t(!1),!1}},qu="/f-agende-ja/assets/logo-icon-B17gVZqN.png",Vb=({action:e})=>{const[t,n]=R.useState(),r=Au(),o=async a=>{a.preventDefault();const l=a.target,s=l.cpf.value.replace(/[.-]/g,"");if(e==="Login"&&await Hb({cpf:s,senha:l.password.value},n)||e==="Register"&&await qb({nome:l.name.value,senha:l.password.value,mae:l.mother.value,nascimento:l.birthdate.value,cpf:s}))return r("/f-agende-ja")},i=f1(e);return P.jsxs("section",{className:"bg-white w-screen min-h-screen lg:min-h-0 lg:max-w-xl py-8 px-4 rounded-xl shadow-lg xl:rounded-tl-none xl:rounded-bl-none",children:[P.jsxs("div",{className:"flex flex-col items-center gap-4",children:[P.jsx("div",{className:"max-w-20",children:P.jsx("img",{src:qu,alt:"Logo da Clínica Agende Já"})}),P.jsx("div",{children:P.jsxs("h1",{className:"text-darkM text-3xl font-poppins font-semibold",children:[P.jsx("span",{className:"text-lightM",children:"BEM-"}),"VINDO"]})})]}),P.jsx("div",{children:P.jsxs("form",{autoComplete:"off",onSubmit:o,children:[i.length>0&&i.map((a,l)=>P.jsxs("div",{className:"flex flex-col gap-2 mb-6",children:[P.jsx("label",{className:"font-poppins text-lg block",children:a.label}),P.jsx("input",{className:"border-darkM border-2 px-4 py-2 rounded-lg",type:a.type,name:a.name,placeholder:a.placeholder})]},l)),P.jsx("button",{className:"text-white bg-darkM font-poppins font-semibold px-8 py-2 rounded-lg w-3/4 m-auto block shadow-xl",type:"submit",children:t?P.jsx(c1,{color:"#FFF",size:"small"}):e==="Login"?"LOGAR":"REGISTRAR"}),P.jsx("div",{children:e==="Login"?P.jsxs("p",{className:"text-center font-poppins font-medium mt-4",children:["Ainda não tem uma conta? ",P.jsx(qo,{to:"/f-agende-ja/registro",className:"text-lightM",children:"Cadastre-se."})]}):P.jsxs("p",{className:"text-center font-poppins font-medium mt-4",children:["Já tem uma conta? ",P.jsx(qo,{to:"/f-agende-ja/login",className:"text-lightM",children:"Faça login."})]})})]})})]})},Zd=({action:e})=>P.jsxs("section",{className:"bg-authenticate bg-cover bg-fixed w-screen min-h-screen lg:flex lg:justify-center lg:p-8",children:[P.jsxs("section",{className:"bg-darkM hidden xl:flex xl:flex-col xl:p-8 xl:rounded-tl-xl xl:rounded-bl-xl",children:[P.jsxs("div",{className:"flex flex-col max-w-2xl gap-4 flex-1",children:[P.jsx("h1",{className:"text-white text-4xl font-poppisn font-bold",children:"Agende Já"}),P.jsx("p",{className:"text-white text-lg font-poppins font-light border-b-2 pb-4",children:"A Agende Já é uma clínica pensada especialmente para oferecer apoio e atendimento inicial a pessoas em situação de vulnerabilidade, que muitas vezes enfrentam dificuldades para acessar o sistema de saúde. Nosso objetivo é facilitar a marcação de consultas com um clínico geral, proporcionando um primeiro contato com profissionais qualificados que podem avaliar e orientar os pacientes para o tratamento adequado."}),P.jsx("p",{className:"text-white text-lg font-poppins font-light border-b-2 pb-4",children:"Na Agende Já, priorizamos a acolhida e o respeito, garantindo que cada pessoa tenha a atenção necessária para iniciar o cuidado com sua saúde. A clínica oferece agendamentos simplificados, sem burocracias, permitindo que nossos pacientes consigam acesso a uma avaliação médica básica de maneira rápida e humanizada. Além disso, contamos com horários flexíveis e profissionais comprometidos em prestar um atendimento que respeita a individualidade e as necessidades de cada um."}),P.jsxs("div",{className:"flex gap-4 justify-center",children:[P.jsxs("p",{className:"bg-white text-darkM font-poppins p-2 flex items-center gap-4 rounded-lg shadow-lg",children:[P.jsx(qy,{className:"text-darkM"})," (62) 9 9999-9999"]}),P.jsxs("p",{className:"bg-white text-darkM font-poppins p-2 flex items-center gap-4 rounded-lg shadow-lg",children:[P.jsx(Uy,{})," agendeja@gmail.ccom"]})]})]}),P.jsx("div",{className:"max-w-40 m-auto bg-white px-8 py-4 rounded-xl",children:P.jsx("img",{src:Cs,alt:"Logo de Texto Agende Já"})})]}),P.jsx(Vb,{action:e})]}),$b="/f-agende-ja/assets/card-avaliacao-dm6TDbo2.jpg",Wb="/f-agende-ja/assets/card-exames-CkvoyLft.jpg",Xb="/f-agende-ja/assets/card-prevencao-BYYMI4nd.jpg",Qb=()=>[{image:Wb,title:"Exames de rotina",text:"Os exames de rotina, também conhecidos como check-up, são avaliações médicas que visam monitorar a saúde e detectar problemas de forma precoce"},{image:$b,title:"Avaliação pré cirúrgica",text:"A avaliação pré-cirúrgica é um exame médico detalhado que visa avaliar o estado de saúde do paciente e identificar riscos que possam surgir durante a cirurgia. "},{image:Xb,title:"Prevenção de doenças",text:"avaliações abrangentes do estado geral de saúde do paciente, orientando sobre hábitos e cuidados preventivos, como alimentação saudável, exercícios físicos, vacinação e exames de rotina."}],om=()=>{const{toggleMenu:e,isMenuOpen:t}=R.useContext(Nh);return P.jsxs("header",{className:"relative flex items-center p-4 h-20",children:[P.jsxs("div",{className:"flex items-center",children:[P.jsx("img",{src:qu,alt:"Ícone da Clínica Agende Já",className:"max-w-12"}),P.jsx("img",{src:Cs,alt:"Logo de texto da Clínica Agende Já",className:"max-w-32"})]}),P.jsxs("div",{className:"flex-1 flex justify-end font-poppins",children:[t?P.jsx(Vy,{className:"lg:hidden",size:30,onClick:e}):P.jsx(Hy,{className:"lg:hidden",size:30,onClick:e}),P.jsxs("nav",{className:`flex flex-col bg-white absolute top-full ${t?"right-0":"-right-full"} min-h-home w-10/12 z-50 p-8 duration-500 lg:static lg:bg-transparent lg:w-fit lg:min-h-0 lg:block lg:flex-1`,children:[P.jsxs("ul",{className:"flex-1 lg:flex lg:justify-center lg:items-center lg:gap-12",children:[P.jsx("li",{children:P.jsxs(qo,{to:"/f-agende-ja",className:"flex items-center gap-2 border-b-2 py-2 lg:border-0",children:[P.jsx(Iy,{})," INÍCIO"]})}),P.jsx("li",{children:P.jsxs(qo,{to:"/f-agende-ja/agendamento",className:"flex items-center gap-2 border-b-2 py-2 lg:border-0",children:[P.jsx(Fy,{})," AGENDAMENTO"]})})]}),P.jsx("div",{className:"lg:hidden flex justify-center border-t-2 pt-2",children:P.jsx("img",{src:Cs,alt:"Logo de texto da Clínica Agende Já",className:"max-w-32"})})]})]})]})},Jb=()=>[{title:"CONTATO:",texts:["(62) 9 9999-9999","agendaja@gmail.com","@agendaja_clinica"]},{title:"ENDEREÇO:",texts:["Rua 12, n° 120","Conjunto Bom Local, Goiânia-GO"]},{title:"FUNCIONAMENTO:",texts:["Seg a Sex das 08 as 22.","Sáb e Dom das 08 as 14."]}],im=()=>{const e=Jb();return P.jsxs("footer",{className:"bg-darkM flex flex-col justify-center items-center gap-8 py-8 px-4 lg:justify-normal",children:[P.jsx("div",{className:"bg-white w-16 h-16 p-2 rounded-full flex items-center justify-center",children:P.jsx("img",{src:qu,alt:"Ícone da Clínica Agende Já",className:"max-w-full"})}),P.jsx("section",{className:"text-white flex flex-col items-center gap-4 lg:min-w-full lg:flex-row lg:justify-around lg:items-start",children:e.map((t,n)=>P.jsxs("div",{children:[P.jsx("h1",{className:"font-poppins text-xl text-center font-semibold lg:text-left 2xl:text-3xl 2xl:font-medium",children:t.title}),t.texts.map((r,o)=>P.jsx("p",{className:"font-poppins text-center lg:text-left",children:r},o))]},n))}),P.jsxs("section",{className:"text-white font-poppins flex flex-col gap-2",children:[P.jsx("p",{className:"text-sm text-center",children:'"A boa medicina é igual em qualquer lugar, mas o médico deve ser diferente para cada paciente."'}),P.jsx("p",{className:"text-opaque text-sm text-center",children:"Sir William Osler"})]})]})},Kb=()=>{const e=Au();R.useEffect(()=>{if(!JSON.parse(localStorage.getItem("auth_token")))return e("/f-agende-ja/registro")},[]);const t=Qb();return P.jsxs("section",{children:[P.jsx(om,{}),P.jsx("section",{className:"flex bg-home1 bg-cover min-h-home py-12 px-4 relative after:absolute after:w-full after:h-full after:bg-black after:left-0 after:top-0 after:bg-opacity-30 after:z-0 lg:px-8",children:P.jsxs("div",{className:"flex flex-col w-full max-w-lg relative z-40 2xl:max-w-5xl",children:[P.jsxs("div",{className:"flex-1 flex flex-col gap-4",children:[P.jsxs("h1",{className:"text-darkM font-poppins font-semibold text-3xl lg:text-4xl 2xl:text-6xl",children:["Atendimento ",P.jsx("br",{})," ",P.jsx("span",{className:"text-lightM",children:"acolhedor"})," e ",P.jsx("span",{className:"text-lightM",children:"humanizado"})]}),P.jsx("p",{className:"text-white font-poppins text-lg 2xl:text-xl 2xl:max-w-xl",children:"Priorize o seu bem-estar e agende já uma consulta com umd de nossos profissionais"})]}),P.jsx("div",{children:P.jsx(qo,{to:"/f-agende-ja/agendamento",className:"bg-lightM text-white text-lg font-bold py-3 px-4 rounded-lg shadow-lg",children:"AGENDAR AGORA"})})]})}),P.jsxs("section",{className:"bg-opaque min-h-screen py-12 px-4 lg:p-12 lg:flex lg:flex-col",children:[P.jsxs("section",{className:"flex flex-col gap-4 mb-8 max-w-6xl",children:[P.jsx("h1",{className:"text-darkM text-3xl font-poppins font-bold lg:text-5xl",children:"CLÍNICO GERAL"}),P.jsx("p",{className:"font-poppins 2xl:text-xl",children:"O clínico geral é o médico habilitado para atender diferentes doenças e, principalmente, promover a saúde do organismo como um todo. Esse profissional possui um olhar completo do indivíduo e está apto a solucionar 70% das patologias, segundo a Sociedade Brasileira de Clínica Médica."})]}),P.jsx("section",{className:"flex flex-col gap-8 lg:flex-row lg:overflow-x-auto lg:m-auto",children:t.map((n,r)=>P.jsxs("div",{className:"bg-white w-full rounded-lg max-w-96 m-auto lg:m-0 2xl:max-w-2xl",children:[P.jsx("div",{className:"rounded-t-lg overflow-hidden",children:P.jsx("img",{src:n.image,alt:"Imagem de pacientes sendo atendido"})}),P.jsxs("div",{className:"p-2 flex flex-col gap-4",children:[P.jsx("h1",{className:"font-poppins text-2xl",children:n.title}),P.jsx("p",{className:"font-poppins",children:n.text})]})]},r))})]}),P.jsx(im,{})]})},Gb=({date:e,loc:t,doctor:n,time:r,isActive:o,onClick:i})=>P.jsxs("section",{className:"px-4 lg:hover:cursor-pointer min-w-full sm:min-w-[calc(50%)]",onClick:i,children:[P.jsx("p",{className:"text-alert text-xl font-poppins",children:e}),P.jsxs("section",{className:`min-w-full shadow-sm rounded-xl flex gap-4 p-4 ${o?"bg-active":"bg-opaque"} duration-300`,children:[P.jsx("div",{className:"text-lightM min-w-20 flex items-center justify-center",children:P.jsx(By,{size:70})}),P.jsxs("div",{className:"font-poppins flex flex-col gap-4 w-full overflow-hidden",children:[P.jsx("div",{className:"flex-1",children:P.jsx("p",{className:`${o?"":"line-clamp-2"}`,children:t})}),P.jsx("div",{className:"flex",children:P.jsxs("p",{className:"text-wrap",children:["Horário: ",P.jsxs("span",{className:"text-alert",children:[r," "]}),"| ",n]})})]})]})]}),Yb=async e=>{try{const n=await(await ri.post("/appointment",e)).data;return{ok:!0,message:n.message,id:n.id}}catch(t){return console.log(t),!1}},Zb=()=>[{type:"text",name:"name",placeholder:"Nome...",label:"Nome Completo:"},{type:"date",name:"birthdate",placeholder:"...",label:"Data de Nascimento:"},{type:"text",name:"cpf",placeholder:"CPF...",label:"CPF:"},{type:"text",name:"number",placeholder:"Telefone...",label:"Telefone:"},{type:"email",name:"mail",placeholder:"Email...",label:"Email:"},{type:"RG:",name:"rg",placeholder:"RG...",label:"RG:"}],ex=async()=>(await(await ri.get("/availableslots")).data).map(r=>{const o=r.data,i=new Date(o),a=new Intl.DateTimeFormat("pt-BR",{day:"2-digit",month:"2-digit",year:"numeric",weekday:"long"}).format(i).split("-").map(s=>s.trim().charAt(0).toUpperCase()+s.slice(1)).join("-"),l=`${r.unidade.nome}. ${r.unidade.endereco}`;return{id:r._id,date:a,time:r.horario,doctor:r.medico.nome,location:l}}),tx=()=>{const[e,t]=R.useState([]),[n,r]=R.useState(null),[o,i]=R.useState(!1),[a,l]=R.useState(""),[s,u]=R.useState(""),c=h=>{r(w=>w===h?null:h)},d=async()=>{const h=await ex();t(h)},p=(h,w,m)=>{i(h),l(w),u(m)};R.useEffect(()=>{d()},[]);const x=async h=>{h.preventDefault();const w=h.target,m=w.name.value,f=w.birthdate.value,g=w.cpf.value,S=w.number.value,C=w.number.value,b=w.rg.value;if(m!==""&&f!==""&&g!==""&&S!==""&&C!==""&&b!==""){const{id:z,message:T}=await Yb({usuario_id:JSON.parse(localStorage.getItem("user_id")),vaga_id:n,paciente_nome:w.name.value,paciente_data:w.birthdate.value,paciente_cpf:w.cpf.value,paciente_tel:w.number.value,paciente_email:w.mail.value,paciente_rg:w.rg.value});d(),p(!0,T,z),w.reset()}},v=Zb();return P.jsxs("section",{children:[P.jsx(om,{}),P.jsxs("section",{className:"relative min-h-home bg-scheduling bg-cover flex flex-col justify-center items-center py-8",children:[P.jsxs("section",{className:`bg-white rounded-xl shadow-xl w-full max-w-3xl 2xl:max-w-4xl ${o?"blur-sm":""}`,children:[P.jsx("section",{className:"py-8 px-4",children:P.jsx("div",{children:P.jsxs("h1",{className:"text-darkM font-poppins font-semibold text-3xl text-center",children:["AGENDAMENTO DE ",P.jsx("span",{className:"text-lightM",children:"CONSULTA"})]})})}),P.jsx("section",{className:"py-4 flex overflow-auto scrollbar-h-5 scrollbar-track-black scrollbar-thumb-black",children:e.length>0?e.map(h=>P.jsx(Gb,{date:h.date,loc:h.location,doctor:h.doctor,time:h.time,isActive:n===h.id,onClick:()=>c(h.id)},h.id)):P.jsx("div",{className:"flex justify-center items-center w-full",children:P.jsx(d1,{color:"#00B3F2"})})}),P.jsx("section",{className:"p-4",children:P.jsxs("form",{autoComplete:"off",onSubmit:x,children:[P.jsx("section",{className:"2xl:flex 2xl:flex-wrap 2xl:justify-between",children:v.length>0&&v.map((h,w)=>P.jsxs("div",{className:"flex flex-col gap-2 mb-6 2xl:w-[calc(50%-10px)]",children:[P.jsx("label",{className:"font-poppins text-lg block",children:h.label}),P.jsx("input",{className:"border-darkM border-2 px-4 py-2 rounded-lg",type:h.type,name:h.name,placeholder:h.placeholder})]},w))}),P.jsx("button",{type:"submit",className:"bg-darkM text-white text-lg font-semibold px-8 py-2 rounded-lg",children:"CONFIRMAR"})]})})]}),o&&P.jsxs("section",{className:"bg-white w-full max-w-2xl absolute p-4 rounded-xl shadow-xl",children:[P.jsx("h1",{className:"text-darkM text-center text-2xl font-bold mb-4",children:a}),P.jsxs("p",{className:"text-center mb-4 text-lg text-gray",children:["Você receberá um e-mail confirmando a sua consulta. ",P.jsx("br",{})," ",P.jsxs("span",{className:"text-alert",children:["n° ",s]})]}),P.jsx("div",{className:"flex justify-center items-center",children:P.jsx("button",{className:"bg-darkM text-white p-2 w-1/3 rounded-lg shadow-lg",onClick:()=>p(!1,"",""),children:"OK"})})]})]}),P.jsx(im,{})]})},nx=vy([{path:"/",element:P.jsx(jy,{}),errorElement:P.jsx(zy,{}),children:[{path:"/f-agende-ja",element:P.jsx(Kb,{})},{path:"/f-agende-ja/agendamento",element:P.jsx(tx,{})},{path:"/f-agende-ja/registro",element:P.jsx(Zd,{action:"Register"})},{path:"/f-agende-ja/login",element:P.jsx(Zd,{action:"Login"})}]}]);_l.createRoot(document.getElementById("root")).render(P.jsx(Q.StrictMode,{children:P.jsx(Oy,{router:nx})}));
