(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function dv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var np={exports:{}},Yo={},rp={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fs=Symbol.for("react.element"),pv=Symbol.for("react.portal"),gv=Symbol.for("react.fragment"),mv=Symbol.for("react.strict_mode"),yv=Symbol.for("react.profiler"),vv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),_v=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),Ev=Symbol.for("react.memo"),Iv=Symbol.for("react.lazy"),Kh=Symbol.iterator;function Tv(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var ip={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sp=Object.assign,op={};function Qr(t,e,n){this.props=t,this.context=e,this.refs=op,this.updater=n||ip}Qr.prototype.isReactComponent={};Qr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ap(){}ap.prototype=Qr.prototype;function Nu(t,e,n){this.props=t,this.context=e,this.refs=op,this.updater=n||ip}var xu=Nu.prototype=new ap;xu.constructor=Nu;sp(xu,Qr.prototype);xu.isPureReactComponent=!0;var qh=Array.isArray,lp=Object.prototype.hasOwnProperty,Ou={current:null},up={key:!0,ref:!0,__self:!0,__source:!0};function cp(t,e,n){var r,i={},o=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)lp.call(e,r)&&!up.hasOwnProperty(r)&&(i[r]=e[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var h=Array(c),d=0;d<c;d++)h[d]=arguments[d+2];i.children=h}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:fs,type:t,key:o,ref:a,props:i,_owner:Ou.current}}function kv(t,e){return{$$typeof:fs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Du(t){return typeof t=="object"&&t!==null&&t.$$typeof===fs}function Av(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jh=/\/+/g;function $a(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Av(""+t.key):e.toString(36)}function Qs(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case fs:case pv:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+$a(a,0):r,qh(i)?(n="",t!=null&&(n=t.replace(Jh,"$&/")+"/"),Qs(i,e,n,"",function(d){return d})):i!=null&&(Du(i)&&(i=kv(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Jh,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",qh(t))for(var c=0;c<t.length;c++){o=t[c];var h=r+$a(o,c);a+=Qs(o,e,n,h,i)}else if(h=Tv(t),typeof h=="function")for(t=h.call(t),c=0;!(o=t.next()).done;)o=o.value,h=r+$a(o,c++),a+=Qs(o,e,n,h,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Os(t,e,n){if(t==null)return t;var r=[],i=0;return Qs(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Cv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fe={current:null},Zs={transition:null},Pv={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:Zs,ReactCurrentOwner:Ou};function hp(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Os,forEach:function(t,e,n){Os(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Os(t,function(){e++}),e},toArray:function(t){return Os(t,function(e){return e})||[]},only:function(t){if(!Du(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Qr;W.Fragment=gv;W.Profiler=yv;W.PureComponent=Nu;W.StrictMode=mv;W.Suspense=Sv;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;W.act=hp;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=sp({},t.props),i=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=Ou.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(h in e)lp.call(e,h)&&!up.hasOwnProperty(h)&&(r[h]=e[h]===void 0&&c!==void 0?c[h]:e[h])}var h=arguments.length-2;if(h===1)r.children=n;else if(1<h){c=Array(h);for(var d=0;d<h;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:fs,type:t.type,key:i,ref:o,props:r,_owner:a}};W.createContext=function(t){return t={$$typeof:wv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vv,_context:t},t.Consumer=t};W.createElement=cp;W.createFactory=function(t){var e=cp.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:_v,render:t}};W.isValidElement=Du;W.lazy=function(t){return{$$typeof:Iv,_payload:{_status:-1,_result:t},_init:Cv}};W.memo=function(t,e){return{$$typeof:Ev,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Zs.transition;Zs.transition={};try{t()}finally{Zs.transition=e}};W.unstable_act=hp;W.useCallback=function(t,e){return Fe.current.useCallback(t,e)};W.useContext=function(t){return Fe.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Fe.current.useDeferredValue(t)};W.useEffect=function(t,e){return Fe.current.useEffect(t,e)};W.useId=function(){return Fe.current.useId()};W.useImperativeHandle=function(t,e,n){return Fe.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Fe.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Fe.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Fe.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Fe.current.useReducer(t,e,n)};W.useRef=function(t){return Fe.current.useRef(t)};W.useState=function(t){return Fe.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Fe.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Fe.current.useTransition()};W.version="18.3.1";rp.exports=W;var ue=rp.exports;const Rv=dv(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=ue,xv=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),Dv=Object.prototype.hasOwnProperty,Lv=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mv={key:!0,ref:!0,__self:!0,__source:!0};function fp(t,e,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)Dv.call(e,r)&&!Mv.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xv,type:t,key:o,ref:a,props:i,_owner:Lv.current}}Yo.Fragment=Ov;Yo.jsx=fp;Yo.jsxs=fp;np.exports=Yo;var R=np.exports,Al={},dp={exports:{}},Xe={},pp={exports:{}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,$){var B=F.length;F.push($);e:for(;0<B;){var ie=B-1>>>1,he=F[ie];if(0<i(he,$))F[ie]=$,F[B]=he,B=ie;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var $=F[0],B=F.pop();if(B!==$){F[0]=B;e:for(var ie=0,he=F.length,Mn=he>>>1;ie<Mn;){var Qe=2*(ie+1)-1,jn=F[Qe],at=Qe+1,Yt=F[at];if(0>i(jn,B))at<he&&0>i(Yt,jn)?(F[ie]=Yt,F[at]=B,ie=at):(F[ie]=jn,F[Qe]=B,ie=Qe);else if(at<he&&0>i(Yt,B))F[ie]=Yt,F[at]=B,ie=at;else break e}}return $}function i(F,$){var B=F.sortIndex-$.sortIndex;return B!==0?B:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,c=a.now();t.unstable_now=function(){return a.now()-c}}var h=[],d=[],T=1,E=null,A=3,O=!1,x=!1,L=!1,b=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(F){for(var $=n(d);$!==null;){if($.callback===null)r(d);else if($.startTime<=F)r(d),$.sortIndex=$.expirationTime,e(h,$);else break;$=n(d)}}function N(F){if(L=!1,I(F),!x)if(n(h)!==null)x=!0,ri(j);else{var $=n(d);$!==null&&ii(N,$.startTime-F)}}function j(F,$){x=!1,L&&(L=!1,S(p),p=-1),O=!0;var B=A;try{for(I($),E=n(h);E!==null&&(!(E.expirationTime>$)||F&&!_());){var ie=E.callback;if(typeof ie=="function"){E.callback=null,A=E.priorityLevel;var he=ie(E.expirationTime<=$);$=t.unstable_now(),typeof he=="function"?E.callback=he:E===n(h)&&r(h),I($)}else r(h);E=n(h)}if(E!==null)var Mn=!0;else{var Qe=n(d);Qe!==null&&ii(N,Qe.startTime-$),Mn=!1}return Mn}finally{E=null,A=B,O=!1}}var U=!1,m=null,p=-1,y=5,v=-1;function _(){return!(t.unstable_now()-v<y)}function k(){if(m!==null){var F=t.unstable_now();v=F;var $=!0;try{$=m(!0,F)}finally{$?g():(U=!1,m=null)}}else U=!1}var g;if(typeof w=="function")g=function(){w(k)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ke=J.port2;J.port1.onmessage=k,g=function(){ke.postMessage(null)}}else g=function(){b(k,0)};function ri(F){m=F,U||(U=!0,g())}function ii(F,$){p=b(function(){F(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){x||O||(x=!0,ri(j))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return A},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(F){switch(A){case 1:case 2:case 3:var $=3;break;default:$=A}var B=A;A=$;try{return F()}finally{A=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var B=A;A=F;try{return $()}finally{A=B}},t.unstable_scheduleCallback=function(F,$,B){var ie=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?ie+B:ie):B=ie,F){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=B+he,F={id:T++,callback:$,priorityLevel:F,startTime:B,expirationTime:he,sortIndex:-1},B>ie?(F.sortIndex=B,e(d,F),n(h)===null&&F===n(d)&&(L?(S(p),p=-1):L=!0,ii(N,B-ie))):(F.sortIndex=he,e(h,F),x||O||(x=!0,ri(j))),F},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(F){var $=A;return function(){var B=A;A=$;try{return F.apply(this,arguments)}finally{A=B}}}})(gp);pp.exports=gp;var jv=pp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uv=ue,Je=jv;function D(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mp=new Set,Gi={};function cr(t,e){Br(t,e),Br(t+"Capture",e)}function Br(t,e){for(Gi[t]=e,t=0;t<e.length;t++)mp.add(e[t])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cl=Object.prototype.hasOwnProperty,Fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},Yh={};function Vv(t){return Cl.call(Yh,t)?!0:Cl.call(Xh,t)?!1:Fv.test(t)?Yh[t]=!0:(Xh[t]=!0,!1)}function bv(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zv(t,e,n,r){if(e===null||typeof e>"u"||bv(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ve(t,e,n,r,i,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Ve(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Ve(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Ve(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Ve(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Ve(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Ve(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Ve(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Ve(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Ve(t,5,!1,t.toLowerCase(),null,!1,!1)});var Lu=/[\-:]([a-z])/g;function Mu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Lu,Mu);Te[e]=new Ve(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Lu,Mu);Te[e]=new Ve(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Lu,Mu);Te[e]=new Ve(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Ve(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Ve(t,1,!1,t.toLowerCase(),null,!0,!0)});function ju(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zv(e,n,i,r)&&(n=null),r||i===null?Vv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Xt=Uv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ds=Symbol.for("react.element"),wr=Symbol.for("react.portal"),_r=Symbol.for("react.fragment"),Uu=Symbol.for("react.strict_mode"),Pl=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),Fu=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Vu=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),wp=Symbol.for("react.offscreen"),Qh=Symbol.iterator;function Si(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Ba;function Ri(t){if(Ba===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ba=e&&e[1]||""}return`
`+Ba+t}var Ha=!1;function Wa(t,e){if(!t||Ha)return"";Ha=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,c=o.length-1;1<=a&&0<=c&&i[a]!==o[c];)c--;for(;1<=a&&0<=c;a--,c--)if(i[a]!==o[c]){if(a!==1||c!==1)do if(a--,c--,0>c||i[a]!==o[c]){var h=`
`+i[a].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=a&&0<=c);break}}}finally{Ha=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ri(t):""}function $v(t){switch(t.tag){case 5:return Ri(t.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return t=Wa(t.type,!1),t;case 11:return t=Wa(t.type.render,!1),t;case 1:return t=Wa(t.type,!0),t;default:return""}}function xl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _r:return"Fragment";case wr:return"Portal";case Pl:return"Profiler";case Uu:return"StrictMode";case Rl:return"Suspense";case Nl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case vp:return(t.displayName||"Context")+".Consumer";case yp:return(t._context.displayName||"Context")+".Provider";case Fu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vu:return e=t.displayName||null,e!==null?e:xl(t.type)||"Memo";case an:e=t._payload,t=t._init;try{return xl(t(e))}catch{}}return null}function Bv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xl(e);case 8:return e===Uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _p(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hv(t){var e=_p(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ls(t){t._valueTracker||(t._valueTracker=Hv(t))}function Sp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_p(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function mo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ol(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ep(t,e){e=e.checked,e!=null&&ju(t,"checked",e,!1)}function Dl(t,e){Ep(t,e);var n=Pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ll(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ll(t,e.type,Pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ef(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ll(t,e,n){(e!=="number"||mo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ni=Array.isArray;function Or(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ml(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(D(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(D(92));if(Ni(n)){if(1<n.length)throw Error(D(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pn(n)}}function Ip(t,e){var n=Pn(e.value),r=Pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ms,kp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ms=Ms||document.createElement("div"),Ms.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ms.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(t){Wv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Di[e]=Di[t]})});function Ap(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Di.hasOwnProperty(t)&&Di[t]?(""+e).trim():e+"px"}function Cp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ap(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Gv=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ul(t,e){if(e){if(Gv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(D(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(D(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(D(61))}if(e.style!=null&&typeof e.style!="object")throw Error(D(62))}}function Fl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function bu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bl=null,Dr=null,Lr=null;function rf(t){if(t=gs(t)){if(typeof bl!="function")throw Error(D(280));var e=t.stateNode;e&&(e=na(e),bl(t.stateNode,t.type,e))}}function Pp(t){Dr?Lr?Lr.push(t):Lr=[t]:Dr=t}function Rp(){if(Dr){var t=Dr,e=Lr;if(Lr=Dr=null,rf(t),e)for(t=0;t<e.length;t++)rf(e[t])}}function Np(t,e){return t(e)}function xp(){}var Ga=!1;function Op(t,e,n){if(Ga)return t(e,n);Ga=!0;try{return Np(t,e,n)}finally{Ga=!1,(Dr!==null||Lr!==null)&&(xp(),Rp())}}function qi(t,e){var n=t.stateNode;if(n===null)return null;var r=na(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(D(231,e,typeof n));return n}var zl=!1;if(Bt)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){zl=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{zl=!1}function Kv(t,e,n,r,i,o,a,c,h){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(T){this.onError(T)}}var Li=!1,yo=null,vo=!1,$l=null,qv={onError:function(t){Li=!0,yo=t}};function Jv(t,e,n,r,i,o,a,c,h){Li=!1,yo=null,Kv.apply(qv,arguments)}function Xv(t,e,n,r,i,o,a,c,h){if(Jv.apply(this,arguments),Li){if(Li){var d=yo;Li=!1,yo=null}else throw Error(D(198));vo||(vo=!0,$l=d)}}function hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sf(t){if(hr(t)!==t)throw Error(D(188))}function Yv(t){var e=t.alternate;if(!e){if(e=hr(t),e===null)throw Error(D(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return sf(i),t;if(o===r)return sf(i),e;o=o.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,c=i.child;c;){if(c===n){a=!0,n=i,r=o;break}if(c===r){a=!0,r=i,n=o;break}c=c.sibling}if(!a){for(c=o.child;c;){if(c===n){a=!0,n=o,r=i;break}if(c===r){a=!0,r=o,n=i;break}c=c.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?t:e}function Lp(t){return t=Yv(t),t!==null?Mp(t):null}function Mp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Mp(t);if(e!==null)return e;t=t.sibling}return null}var jp=Je.unstable_scheduleCallback,of=Je.unstable_cancelCallback,Qv=Je.unstable_shouldYield,Zv=Je.unstable_requestPaint,de=Je.unstable_now,ew=Je.unstable_getCurrentPriorityLevel,zu=Je.unstable_ImmediatePriority,Up=Je.unstable_UserBlockingPriority,wo=Je.unstable_NormalPriority,tw=Je.unstable_LowPriority,Fp=Je.unstable_IdlePriority,Qo=null,Rt=null;function nw(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Qo,t,void 0,(t.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:sw,rw=Math.log,iw=Math.LN2;function sw(t){return t>>>=0,t===0?32:31-(rw(t)/iw|0)|0}var js=64,Us=4194304;function xi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _o(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var c=a&~i;c!==0?r=xi(c):(o&=a,o!==0&&(r=xi(o)))}else a=n&~i,a!==0?r=xi(a):o!==0&&(r=xi(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-gt(e),i=1<<n,r|=t[n],e&=~i;return r}function ow(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-gt(o),c=1<<a,h=i[a];h===-1?(!(c&n)||c&r)&&(i[a]=ow(c,e)):h<=e&&(t.expiredLanes|=c),o&=~c}}function Bl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vp(){var t=js;return js<<=1,!(js&4194240)&&(js=64),t}function Ka(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ds(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-gt(e),t[e]=n}function lw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-gt(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function $u(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Q=0;function bp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var zp,Bu,$p,Bp,Hp,Hl=!1,Fs=[],vn=null,wn=null,_n=null,Ji=new Map,Xi=new Map,cn=[],uw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function af(t,e){switch(t){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":wn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":Ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xi.delete(e.pointerId)}}function Ii(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=gs(e),e!==null&&Bu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cw(t,e,n,r,i){switch(e){case"focusin":return vn=Ii(vn,t,e,n,r,i),!0;case"dragenter":return wn=Ii(wn,t,e,n,r,i),!0;case"mouseover":return _n=Ii(_n,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ji.set(o,Ii(Ji.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Xi.set(o,Ii(Xi.get(o)||null,t,e,n,r,i)),!0}return!1}function Wp(t){var e=Wn(t.target);if(e!==null){var n=hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dp(n),e!==null){t.blockedOn=e,Hp(t.priority,function(){$p(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return e=gs(n),e!==null&&Bu(e),t.blockedOn=n,!1;e.shift()}return!0}function lf(t,e,n){eo(t)&&n.delete(e)}function hw(){Hl=!1,vn!==null&&eo(vn)&&(vn=null),wn!==null&&eo(wn)&&(wn=null),_n!==null&&eo(_n)&&(_n=null),Ji.forEach(lf),Xi.forEach(lf)}function Ti(t,e){t.blockedOn===e&&(t.blockedOn=null,Hl||(Hl=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,hw)))}function Yi(t){function e(i){return Ti(i,t)}if(0<Fs.length){Ti(Fs[0],t);for(var n=1;n<Fs.length;n++){var r=Fs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(vn!==null&&Ti(vn,t),wn!==null&&Ti(wn,t),_n!==null&&Ti(_n,t),Ji.forEach(e),Xi.forEach(e),n=0;n<cn.length;n++)r=cn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<cn.length&&(n=cn[0],n.blockedOn===null);)Wp(n),n.blockedOn===null&&cn.shift()}var Mr=Xt.ReactCurrentBatchConfig,So=!0;function fw(t,e,n,r){var i=Q,o=Mr.transition;Mr.transition=null;try{Q=1,Hu(t,e,n,r)}finally{Q=i,Mr.transition=o}}function dw(t,e,n,r){var i=Q,o=Mr.transition;Mr.transition=null;try{Q=4,Hu(t,e,n,r)}finally{Q=i,Mr.transition=o}}function Hu(t,e,n,r){if(So){var i=Wl(t,e,n,r);if(i===null)rl(t,e,r,Eo,n),af(t,r);else if(cw(i,t,e,n,r))r.stopPropagation();else if(af(t,r),e&4&&-1<uw.indexOf(t)){for(;i!==null;){var o=gs(i);if(o!==null&&zp(o),o=Wl(t,e,n,r),o===null&&rl(t,e,r,Eo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rl(t,e,r,null,n)}}var Eo=null;function Wl(t,e,n,r){if(Eo=null,t=bu(r),t=Wn(t),t!==null)if(e=hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Eo=t,null}function Gp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ew()){case zu:return 1;case Up:return 4;case wo:case tw:return 16;case Fp:return 536870912;default:return 16}default:return 16}}var mn=null,Wu=null,to=null;function Kp(){if(to)return to;var t,e=Wu,n=e.length,r,i="value"in mn?mn.value:mn.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[o-r];r++);return to=i.slice(t,1<r?1-r:void 0)}function no(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vs(){return!0}function uf(){return!1}function Ye(t){function e(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vs:uf,this.isPropagationStopped=uf,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vs)},persist:function(){},isPersistent:Vs}),e}var Zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Gu=Ye(Zr),ps=le({},Zr,{view:0,detail:0}),pw=Ye(ps),qa,Ja,ki,Zo=le({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ku,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(qa=t.screenX-ki.screenX,Ja=t.screenY-ki.screenY):Ja=qa=0,ki=t),qa)},movementY:function(t){return"movementY"in t?t.movementY:Ja}}),cf=Ye(Zo),gw=le({},Zo,{dataTransfer:0}),mw=Ye(gw),yw=le({},ps,{relatedTarget:0}),Xa=Ye(yw),vw=le({},Zr,{animationName:0,elapsedTime:0,pseudoElement:0}),ww=Ye(vw),_w=le({},Zr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sw=Ye(_w),Ew=le({},Zr,{data:0}),hf=Ye(Ew),Iw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Aw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kw[t])?!!e[t]:!1}function Ku(){return Aw}var Cw=le({},ps,{key:function(t){if(t.key){var e=Iw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=no(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Tw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ku,charCode:function(t){return t.type==="keypress"?no(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?no(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pw=Ye(Cw),Rw=le({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ff=Ye(Rw),Nw=le({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ku}),xw=Ye(Nw),Ow=le({},Zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dw=Ye(Ow),Lw=le({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Mw=Ye(Lw),jw=[9,13,27,32],qu=Bt&&"CompositionEvent"in window,Mi=null;Bt&&"documentMode"in document&&(Mi=document.documentMode);var Uw=Bt&&"TextEvent"in window&&!Mi,qp=Bt&&(!qu||Mi&&8<Mi&&11>=Mi),df=" ",pf=!1;function Jp(t,e){switch(t){case"keyup":return jw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sr=!1;function Fw(t,e){switch(t){case"compositionend":return Xp(e);case"keypress":return e.which!==32?null:(pf=!0,df);case"textInput":return t=e.data,t===df&&pf?null:t;default:return null}}function Vw(t,e){if(Sr)return t==="compositionend"||!qu&&Jp(t,e)?(t=Kp(),to=Wu=mn=null,Sr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qp&&e.locale!=="ko"?null:e.data;default:return null}}var bw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bw[t.type]:e==="textarea"}function Yp(t,e,n,r){Pp(r),e=Io(e,"onChange"),0<e.length&&(n=new Gu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ji=null,Qi=null;function zw(t){lg(t,0)}function ea(t){var e=Tr(t);if(Sp(e))return t}function $w(t,e){if(t==="change")return e}var Qp=!1;if(Bt){var Ya;if(Bt){var Qa="oninput"in document;if(!Qa){var mf=document.createElement("div");mf.setAttribute("oninput","return;"),Qa=typeof mf.oninput=="function"}Ya=Qa}else Ya=!1;Qp=Ya&&(!document.documentMode||9<document.documentMode)}function yf(){ji&&(ji.detachEvent("onpropertychange",Zp),Qi=ji=null)}function Zp(t){if(t.propertyName==="value"&&ea(Qi)){var e=[];Yp(e,Qi,t,bu(t)),Op(zw,e)}}function Bw(t,e,n){t==="focusin"?(yf(),ji=e,Qi=n,ji.attachEvent("onpropertychange",Zp)):t==="focusout"&&yf()}function Hw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(Qi)}function Ww(t,e){if(t==="click")return ea(e)}function Gw(t,e){if(t==="input"||t==="change")return ea(e)}function Kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yt=typeof Object.is=="function"?Object.is:Kw;function Zi(t,e){if(yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Cl.call(e,i)||!yt(t[i],e[i]))return!1}return!0}function vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,e){var n=vf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vf(n)}}function eg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?eg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tg(){for(var t=window,e=mo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=mo(t.document)}return e}function Ju(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qw(t){var e=tg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&eg(n.ownerDocument.documentElement,n)){if(r!==null&&Ju(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=wf(n,o);var a=wf(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Jw=Bt&&"documentMode"in document&&11>=document.documentMode,Er=null,Gl=null,Ui=null,Kl=!1;function _f(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||Er==null||Er!==mo(r)||(r=Er,"selectionStart"in r&&Ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ui&&Zi(Ui,r)||(Ui=r,r=Io(Gl,"onSelect"),0<r.length&&(e=new Gu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Er)))}function bs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ir={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionend:bs("Transition","TransitionEnd")},Za={},ng={};Bt&&(ng=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function ta(t){if(Za[t])return Za[t];if(!Ir[t])return t;var e=Ir[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ng)return Za[t]=e[n];return t}var rg=ta("animationend"),ig=ta("animationiteration"),sg=ta("animationstart"),og=ta("transitionend"),ag=new Map,Sf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(t,e){ag.set(t,e),cr(e,[t])}for(var el=0;el<Sf.length;el++){var tl=Sf[el],Xw=tl.toLowerCase(),Yw=tl[0].toUpperCase()+tl.slice(1);On(Xw,"on"+Yw)}On(rg,"onAnimationEnd");On(ig,"onAnimationIteration");On(sg,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(og,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Oi));function Ef(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Xv(r,e,void 0,t),t.currentTarget=null}function lg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var a=r.length-1;0<=a;a--){var c=r[a],h=c.instance,d=c.currentTarget;if(c=c.listener,h!==o&&i.isPropagationStopped())break e;Ef(i,c,d),o=h}else for(a=0;a<r.length;a++){if(c=r[a],h=c.instance,d=c.currentTarget,c=c.listener,h!==o&&i.isPropagationStopped())break e;Ef(i,c,d),o=h}}}if(vo)throw t=$l,vo=!1,$l=null,t}function ne(t,e){var n=e[Ql];n===void 0&&(n=e[Ql]=new Set);var r=t+"__bubble";n.has(r)||(ug(e,t,2,!1),n.add(r))}function nl(t,e,n){var r=0;e&&(r|=4),ug(n,t,r,e)}var zs="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[zs]){t[zs]=!0,mp.forEach(function(n){n!=="selectionchange"&&(Qw.has(n)||nl(n,!1,t),nl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zs]||(e[zs]=!0,nl("selectionchange",!1,e))}}function ug(t,e,n,r){switch(Gp(e)){case 1:var i=fw;break;case 4:i=dw;break;default:i=Hu}n=i.bind(null,e,n,t),i=void 0,!zl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rl(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var h=a.tag;if((h===3||h===4)&&(h=a.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;a=a.return}for(;c!==null;){if(a=Wn(c),a===null)return;if(h=a.tag,h===5||h===6){r=o=a;continue e}c=c.parentNode}}r=r.return}Op(function(){var d=o,T=bu(n),E=[];e:{var A=ag.get(t);if(A!==void 0){var O=Gu,x=t;switch(t){case"keypress":if(no(n)===0)break e;case"keydown":case"keyup":O=Pw;break;case"focusin":x="focus",O=Xa;break;case"focusout":x="blur",O=Xa;break;case"beforeblur":case"afterblur":O=Xa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=xw;break;case rg:case ig:case sg:O=ww;break;case og:O=Dw;break;case"scroll":O=pw;break;case"wheel":O=Mw;break;case"copy":case"cut":case"paste":O=Sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=ff}var L=(e&4)!==0,b=!L&&t==="scroll",S=L?A!==null?A+"Capture":null:A;L=[];for(var w=d,I;w!==null;){I=w;var N=I.stateNode;if(I.tag===5&&N!==null&&(I=N,S!==null&&(N=qi(w,S),N!=null&&L.push(ts(w,N,I)))),b)break;w=w.return}0<L.length&&(A=new O(A,x,null,n,T),E.push({event:A,listeners:L}))}}if(!(e&7)){e:{if(A=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",A&&n!==Vl&&(x=n.relatedTarget||n.fromElement)&&(Wn(x)||x[Ht]))break e;if((O||A)&&(A=T.window===T?T:(A=T.ownerDocument)?A.defaultView||A.parentWindow:window,O?(x=n.relatedTarget||n.toElement,O=d,x=x?Wn(x):null,x!==null&&(b=hr(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(O=null,x=d),O!==x)){if(L=cf,N="onMouseLeave",S="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(L=ff,N="onPointerLeave",S="onPointerEnter",w="pointer"),b=O==null?A:Tr(O),I=x==null?A:Tr(x),A=new L(N,w+"leave",O,n,T),A.target=b,A.relatedTarget=I,N=null,Wn(T)===d&&(L=new L(S,w+"enter",x,n,T),L.target=I,L.relatedTarget=b,N=L),b=N,O&&x)t:{for(L=O,S=x,w=0,I=L;I;I=vr(I))w++;for(I=0,N=S;N;N=vr(N))I++;for(;0<w-I;)L=vr(L),w--;for(;0<I-w;)S=vr(S),I--;for(;w--;){if(L===S||S!==null&&L===S.alternate)break t;L=vr(L),S=vr(S)}L=null}else L=null;O!==null&&If(E,A,O,L,!1),x!==null&&b!==null&&If(E,b,x,L,!0)}}e:{if(A=d?Tr(d):window,O=A.nodeName&&A.nodeName.toLowerCase(),O==="select"||O==="input"&&A.type==="file")var j=$w;else if(gf(A))if(Qp)j=Gw;else{j=Hw;var U=Bw}else(O=A.nodeName)&&O.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(j=Ww);if(j&&(j=j(t,d))){Yp(E,j,n,T);break e}U&&U(t,A,d),t==="focusout"&&(U=A._wrapperState)&&U.controlled&&A.type==="number"&&Ll(A,"number",A.value)}switch(U=d?Tr(d):window,t){case"focusin":(gf(U)||U.contentEditable==="true")&&(Er=U,Gl=d,Ui=null);break;case"focusout":Ui=Gl=Er=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,_f(E,n,T);break;case"selectionchange":if(Jw)break;case"keydown":case"keyup":_f(E,n,T)}var m;if(qu)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else Sr?Jp(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(qp&&n.locale!=="ko"&&(Sr||p!=="onCompositionStart"?p==="onCompositionEnd"&&Sr&&(m=Kp()):(mn=T,Wu="value"in mn?mn.value:mn.textContent,Sr=!0)),U=Io(d,p),0<U.length&&(p=new hf(p,t,null,n,T),E.push({event:p,listeners:U}),m?p.data=m:(m=Xp(n),m!==null&&(p.data=m)))),(m=Uw?Fw(t,n):Vw(t,n))&&(d=Io(d,"onBeforeInput"),0<d.length&&(T=new hf("onBeforeInput","beforeinput",null,n,T),E.push({event:T,listeners:d}),T.data=m))}lg(E,e)})}function ts(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Io(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=qi(t,n),o!=null&&r.unshift(ts(t,o,i)),o=qi(t,e),o!=null&&r.push(ts(t,o,i))),t=t.return}return r}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function If(t,e,n,r,i){for(var o=e._reactName,a=[];n!==null&&n!==r;){var c=n,h=c.alternate,d=c.stateNode;if(h!==null&&h===r)break;c.tag===5&&d!==null&&(c=d,i?(h=qi(n,o),h!=null&&a.unshift(ts(n,h,c))):i||(h=qi(n,o),h!=null&&a.push(ts(n,h,c)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Zw=/\r\n?/g,e_=/\u0000|\uFFFD/g;function Tf(t){return(typeof t=="string"?t:""+t).replace(Zw,`
`).replace(e_,"")}function $s(t,e,n){if(e=Tf(e),Tf(t)!==e&&n)throw Error(D(425))}function To(){}var ql=null,Jl=null;function Xl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yl=typeof setTimeout=="function"?setTimeout:void 0,t_=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,n_=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(t){return kf.resolve(null).then(t).catch(r_)}:Yl;function r_(t){setTimeout(function(){throw t})}function il(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Yi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Yi(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ei=Math.random().toString(36).slice(2),At="__reactFiber$"+ei,ns="__reactProps$"+ei,Ht="__reactContainer$"+ei,Ql="__reactEvents$"+ei,i_="__reactListeners$"+ei,s_="__reactHandles$"+ei;function Wn(t){var e=t[At];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ht]||n[At]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Af(t);t!==null;){if(n=t[At])return n;t=Af(t)}return e}t=n,n=t.parentNode}return null}function gs(t){return t=t[At]||t[Ht],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Tr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(D(33))}function na(t){return t[ns]||null}var Zl=[],kr=-1;function Dn(t){return{current:t}}function re(t){0>kr||(t.current=Zl[kr],Zl[kr]=null,kr--)}function ee(t,e){kr++,Zl[kr]=t.current,t.current=e}var Rn={},Ne=Dn(Rn),$e=Dn(!1),tr=Rn;function Hr(t,e){var n=t.type.contextTypes;if(!n)return Rn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Be(t){return t=t.childContextTypes,t!=null}function ko(){re($e),re(Ne)}function Cf(t,e,n){if(Ne.current!==Rn)throw Error(D(168));ee(Ne,e),ee($e,n)}function cg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(D(108,Bv(t)||"Unknown",i));return le({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rn,tr=Ne.current,ee(Ne,t),ee($e,$e.current),!0}function Pf(t,e,n){var r=t.stateNode;if(!r)throw Error(D(169));n?(t=cg(t,e,tr),r.__reactInternalMemoizedMergedChildContext=t,re($e),re(Ne),ee(Ne,t)):re($e),ee($e,n)}var jt=null,ra=!1,sl=!1;function hg(t){jt===null?jt=[t]:jt.push(t)}function o_(t){ra=!0,hg(t)}function Ln(){if(!sl&&jt!==null){sl=!0;var t=0,e=Q;try{var n=jt;for(Q=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}jt=null,ra=!1}catch(i){throw jt!==null&&(jt=jt.slice(t+1)),jp(zu,Ln),i}finally{Q=e,sl=!1}}return null}var Ar=[],Cr=0,Co=null,Po=0,et=[],tt=0,nr=null,Ft=1,Vt="";function zn(t,e){Ar[Cr++]=Po,Ar[Cr++]=Co,Co=t,Po=e}function fg(t,e,n){et[tt++]=Ft,et[tt++]=Vt,et[tt++]=nr,nr=t;var r=Ft;t=Vt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var o=32-gt(e)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ft=1<<32-gt(e)+i|n<<i|r,Vt=o+t}else Ft=1<<o|n<<i|r,Vt=t}function Xu(t){t.return!==null&&(zn(t,1),fg(t,1,0))}function Yu(t){for(;t===Co;)Co=Ar[--Cr],Ar[Cr]=null,Po=Ar[--Cr],Ar[Cr]=null;for(;t===nr;)nr=et[--tt],et[tt]=null,Vt=et[--tt],et[tt]=null,Ft=et[--tt],et[tt]=null}var Ke=null,Ge=null,se=!1,ht=null;function dg(t,e){var n=nt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ke=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=nr!==null?{id:Ft,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=nt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ke=t,Ge=null,!0):!1;default:return!1}}function eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tu(t){if(se){var e=Ge;if(e){var n=e;if(!Rf(t,e)){if(eu(t))throw Error(D(418));e=Sn(n.nextSibling);var r=Ke;e&&Rf(t,e)?dg(r,n):(t.flags=t.flags&-4097|2,se=!1,Ke=t)}}else{if(eu(t))throw Error(D(418));t.flags=t.flags&-4097|2,se=!1,Ke=t}}}function Nf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ke=t}function Bs(t){if(t!==Ke)return!1;if(!se)return Nf(t),se=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xl(t.type,t.memoizedProps)),e&&(e=Ge)){if(eu(t))throw pg(),Error(D(418));for(;e;)dg(t,e),e=Sn(e.nextSibling)}if(Nf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(D(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ke?Sn(t.stateNode.nextSibling):null;return!0}function pg(){for(var t=Ge;t;)t=Sn(t.nextSibling)}function Wr(){Ge=Ke=null,se=!1}function Qu(t){ht===null?ht=[t]:ht.push(t)}var a_=Xt.ReactCurrentBatchConfig;function Ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var c=i.refs;a===null?delete c[o]:c[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,t))}return t}function Hs(t,e){throw t=Object.prototype.toString.call(e),Error(D(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xf(t){var e=t._init;return e(t._payload)}function gg(t){function e(S,w){if(t){var I=S.deletions;I===null?(S.deletions=[w],S.flags|=16):I.push(w)}}function n(S,w){if(!t)return null;for(;w!==null;)e(S,w),w=w.sibling;return null}function r(S,w){for(S=new Map;w!==null;)w.key!==null?S.set(w.key,w):S.set(w.index,w),w=w.sibling;return S}function i(S,w){return S=kn(S,w),S.index=0,S.sibling=null,S}function o(S,w,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<w?(S.flags|=2,w):I):(S.flags|=2,w)):(S.flags|=1048576,w)}function a(S){return t&&S.alternate===null&&(S.flags|=2),S}function c(S,w,I,N){return w===null||w.tag!==6?(w=fl(I,S.mode,N),w.return=S,w):(w=i(w,I),w.return=S,w)}function h(S,w,I,N){var j=I.type;return j===_r?T(S,w,I.props.children,N,I.key):w!==null&&(w.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&xf(j)===w.type)?(N=i(w,I.props),N.ref=Ai(S,w,I),N.return=S,N):(N=uo(I.type,I.key,I.props,null,S.mode,N),N.ref=Ai(S,w,I),N.return=S,N)}function d(S,w,I,N){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=dl(I,S.mode,N),w.return=S,w):(w=i(w,I.children||[]),w.return=S,w)}function T(S,w,I,N,j){return w===null||w.tag!==7?(w=Yn(I,S.mode,N,j),w.return=S,w):(w=i(w,I),w.return=S,w)}function E(S,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return w=fl(""+w,S.mode,I),w.return=S,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ds:return I=uo(w.type,w.key,w.props,null,S.mode,I),I.ref=Ai(S,null,w),I.return=S,I;case wr:return w=dl(w,S.mode,I),w.return=S,w;case an:var N=w._init;return E(S,N(w._payload),I)}if(Ni(w)||Si(w))return w=Yn(w,S.mode,I,null),w.return=S,w;Hs(S,w)}return null}function A(S,w,I,N){var j=w!==null?w.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:c(S,w,""+I,N);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ds:return I.key===j?h(S,w,I,N):null;case wr:return I.key===j?d(S,w,I,N):null;case an:return j=I._init,A(S,w,j(I._payload),N)}if(Ni(I)||Si(I))return j!==null?null:T(S,w,I,N,null);Hs(S,I)}return null}function O(S,w,I,N,j){if(typeof N=="string"&&N!==""||typeof N=="number")return S=S.get(I)||null,c(w,S,""+N,j);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ds:return S=S.get(N.key===null?I:N.key)||null,h(w,S,N,j);case wr:return S=S.get(N.key===null?I:N.key)||null,d(w,S,N,j);case an:var U=N._init;return O(S,w,I,U(N._payload),j)}if(Ni(N)||Si(N))return S=S.get(I)||null,T(w,S,N,j,null);Hs(w,N)}return null}function x(S,w,I,N){for(var j=null,U=null,m=w,p=w=0,y=null;m!==null&&p<I.length;p++){m.index>p?(y=m,m=null):y=m.sibling;var v=A(S,m,I[p],N);if(v===null){m===null&&(m=y);break}t&&m&&v.alternate===null&&e(S,m),w=o(v,w,p),U===null?j=v:U.sibling=v,U=v,m=y}if(p===I.length)return n(S,m),se&&zn(S,p),j;if(m===null){for(;p<I.length;p++)m=E(S,I[p],N),m!==null&&(w=o(m,w,p),U===null?j=m:U.sibling=m,U=m);return se&&zn(S,p),j}for(m=r(S,m);p<I.length;p++)y=O(m,S,p,I[p],N),y!==null&&(t&&y.alternate!==null&&m.delete(y.key===null?p:y.key),w=o(y,w,p),U===null?j=y:U.sibling=y,U=y);return t&&m.forEach(function(_){return e(S,_)}),se&&zn(S,p),j}function L(S,w,I,N){var j=Si(I);if(typeof j!="function")throw Error(D(150));if(I=j.call(I),I==null)throw Error(D(151));for(var U=j=null,m=w,p=w=0,y=null,v=I.next();m!==null&&!v.done;p++,v=I.next()){m.index>p?(y=m,m=null):y=m.sibling;var _=A(S,m,v.value,N);if(_===null){m===null&&(m=y);break}t&&m&&_.alternate===null&&e(S,m),w=o(_,w,p),U===null?j=_:U.sibling=_,U=_,m=y}if(v.done)return n(S,m),se&&zn(S,p),j;if(m===null){for(;!v.done;p++,v=I.next())v=E(S,v.value,N),v!==null&&(w=o(v,w,p),U===null?j=v:U.sibling=v,U=v);return se&&zn(S,p),j}for(m=r(S,m);!v.done;p++,v=I.next())v=O(m,S,p,v.value,N),v!==null&&(t&&v.alternate!==null&&m.delete(v.key===null?p:v.key),w=o(v,w,p),U===null?j=v:U.sibling=v,U=v);return t&&m.forEach(function(k){return e(S,k)}),se&&zn(S,p),j}function b(S,w,I,N){if(typeof I=="object"&&I!==null&&I.type===_r&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ds:e:{for(var j=I.key,U=w;U!==null;){if(U.key===j){if(j=I.type,j===_r){if(U.tag===7){n(S,U.sibling),w=i(U,I.props.children),w.return=S,S=w;break e}}else if(U.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===an&&xf(j)===U.type){n(S,U.sibling),w=i(U,I.props),w.ref=Ai(S,U,I),w.return=S,S=w;break e}n(S,U);break}else e(S,U);U=U.sibling}I.type===_r?(w=Yn(I.props.children,S.mode,N,I.key),w.return=S,S=w):(N=uo(I.type,I.key,I.props,null,S.mode,N),N.ref=Ai(S,w,I),N.return=S,S=N)}return a(S);case wr:e:{for(U=I.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(S,w.sibling),w=i(w,I.children||[]),w.return=S,S=w;break e}else{n(S,w);break}else e(S,w);w=w.sibling}w=dl(I,S.mode,N),w.return=S,S=w}return a(S);case an:return U=I._init,b(S,w,U(I._payload),N)}if(Ni(I))return x(S,w,I,N);if(Si(I))return L(S,w,I,N);Hs(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,w!==null&&w.tag===6?(n(S,w.sibling),w=i(w,I),w.return=S,S=w):(n(S,w),w=fl(I,S.mode,N),w.return=S,S=w),a(S)):n(S,w)}return b}var Gr=gg(!0),mg=gg(!1),Ro=Dn(null),No=null,Pr=null,Zu=null;function ec(){Zu=Pr=No=null}function tc(t){var e=Ro.current;re(Ro),t._currentValue=e}function nu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function jr(t,e){No=t,Zu=Pr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ze=!0),t.firstContext=null)}function st(t){var e=t._currentValue;if(Zu!==t)if(t={context:t,memoizedValue:e,next:null},Pr===null){if(No===null)throw Error(D(308));Pr=t,No.dependencies={lanes:0,firstContext:t}}else Pr=Pr.next=t;return e}var Gn=null;function nc(t){Gn===null?Gn=[t]:Gn.push(t)}function yg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wt(t,r)}function Wt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ln=!1;function rc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $t(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function En(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wt(t,n)}return i=r.interleaved,i===null?(e.next=e,nc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wt(t,n)}function ro(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$u(t,n)}}function Of(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xo(t,e,n,r){var i=t.updateQueue;ln=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var h=c,d=h.next;h.next=null,a===null?o=d:a.next=d,a=h;var T=t.alternate;T!==null&&(T=T.updateQueue,c=T.lastBaseUpdate,c!==a&&(c===null?T.firstBaseUpdate=d:c.next=d,T.lastBaseUpdate=h))}if(o!==null){var E=i.baseState;a=0,T=d=h=null,c=o;do{var A=c.lane,O=c.eventTime;if((r&A)===A){T!==null&&(T=T.next={eventTime:O,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=t,L=c;switch(A=e,O=n,L.tag){case 1:if(x=L.payload,typeof x=="function"){E=x.call(O,E,A);break e}E=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=L.payload,A=typeof x=="function"?x.call(O,E,A):x,A==null)break e;E=le({},E,A);break e;case 2:ln=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,A=i.effects,A===null?i.effects=[c]:A.push(c))}else O={eventTime:O,lane:A,tag:c.tag,payload:c.payload,callback:c.callback,next:null},T===null?(d=T=O,h=E):T=T.next=O,a|=A;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;A=c,c=A.next,A.next=null,i.lastBaseUpdate=A,i.shared.pending=null}}while(!0);if(T===null&&(h=E),i.baseState=h,i.firstBaseUpdate=d,i.lastBaseUpdate=T,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);ir|=a,t.lanes=a,t.memoizedState=E}}function Df(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var ms={},Nt=Dn(ms),rs=Dn(ms),is=Dn(ms);function Kn(t){if(t===ms)throw Error(D(174));return t}function ic(t,e){switch(ee(is,e),ee(rs,t),ee(Nt,ms),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jl(e,t)}re(Nt),ee(Nt,e)}function Kr(){re(Nt),re(rs),re(is)}function wg(t){Kn(is.current);var e=Kn(Nt.current),n=jl(e,t.type);e!==n&&(ee(rs,t),ee(Nt,n))}function sc(t){rs.current===t&&(re(Nt),re(rs))}var oe=Dn(0);function Oo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ol=[];function oc(){for(var t=0;t<ol.length;t++)ol[t]._workInProgressVersionPrimary=null;ol.length=0}var io=Xt.ReactCurrentDispatcher,al=Xt.ReactCurrentBatchConfig,rr=0,ae=null,ye=null,_e=null,Do=!1,Fi=!1,ss=0,l_=0;function Ce(){throw Error(D(321))}function ac(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yt(t[n],e[n]))return!1;return!0}function lc(t,e,n,r,i,o){if(rr=o,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,io.current=t===null||t.memoizedState===null?f_:d_,t=n(r,i),Fi){o=0;do{if(Fi=!1,ss=0,25<=o)throw Error(D(301));o+=1,_e=ye=null,e.updateQueue=null,io.current=p_,t=n(r,i)}while(Fi)}if(io.current=Lo,e=ye!==null&&ye.next!==null,rr=0,_e=ye=ae=null,Do=!1,e)throw Error(D(300));return t}function uc(){var t=ss!==0;return ss=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ae.memoizedState=_e=t:_e=_e.next=t,_e}function ot(){if(ye===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=_e===null?ae.memoizedState:_e.next;if(e!==null)_e=e,ye=t;else{if(t===null)throw Error(D(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},_e===null?ae.memoizedState=_e=t:_e=_e.next=t}return _e}function os(t,e){return typeof e=="function"?e(t):e}function ll(t){var e=ot(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=a=null,h=null,d=o;do{var T=d.lane;if((rr&T)===T)h!==null&&(h=h.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var E={lane:T,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};h===null?(c=h=E,a=r):h=h.next=E,ae.lanes|=T,ir|=T}d=d.next}while(d!==null&&d!==o);h===null?a=r:h.next=c,yt(r,e.memoizedState)||(ze=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=h,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,ae.lanes|=o,ir|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ul(t){var e=ot(),n=e.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=t(o,a.action),a=a.next;while(a!==i);yt(o,e.memoizedState)||(ze=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function _g(){}function Sg(t,e){var n=ae,r=ot(),i=e(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,ze=!0),r=r.queue,cc(Tg.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,as(9,Ig.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(D(349));rr&30||Eg(n,e,i)}return i}function Eg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ig(t,e,n,r){e.value=n,e.getSnapshot=r,kg(e)&&Ag(t)}function Tg(t,e,n){return n(function(){kg(e)&&Ag(t)})}function kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yt(t,n)}catch{return!0}}function Ag(t){var e=Wt(t,1);e!==null&&mt(e,t,1,-1)}function Lf(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},e.queue=t,t=t.dispatch=h_.bind(null,ae,t),[e.memoizedState,t]}function as(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Cg(){return ot().memoizedState}function so(t,e,n,r){var i=It();ae.flags|=t,i.memoizedState=as(1|e,n,void 0,r===void 0?null:r)}function ia(t,e,n,r){var i=ot();r=r===void 0?null:r;var o=void 0;if(ye!==null){var a=ye.memoizedState;if(o=a.destroy,r!==null&&ac(r,a.deps)){i.memoizedState=as(e,n,o,r);return}}ae.flags|=t,i.memoizedState=as(1|e,n,o,r)}function Mf(t,e){return so(8390656,8,t,e)}function cc(t,e){return ia(2048,8,t,e)}function Pg(t,e){return ia(4,2,t,e)}function Rg(t,e){return ia(4,4,t,e)}function Ng(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xg(t,e,n){return n=n!=null?n.concat([t]):null,ia(4,4,Ng.bind(null,e,t),n)}function hc(){}function Og(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ac(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dg(t,e){var n=ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ac(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Lg(t,e,n){return rr&21?(yt(n,e)||(n=Vp(),ae.lanes|=n,ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ze=!0),t.memoizedState=n)}function u_(t,e){var n=Q;Q=n!==0&&4>n?n:4,t(!0);var r=al.transition;al.transition={};try{t(!1),e()}finally{Q=n,al.transition=r}}function Mg(){return ot().memoizedState}function c_(t,e,n){var r=Tn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jg(t))Ug(e,n);else if(n=yg(t,e,n,r),n!==null){var i=Me();mt(n,t,r,i),Fg(n,e,r)}}function h_(t,e,n){var r=Tn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(t))Ug(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,c=o(a,n);if(i.hasEagerState=!0,i.eagerState=c,yt(c,a)){var h=e.interleaved;h===null?(i.next=i,nc(e)):(i.next=h.next,h.next=i),e.interleaved=i;return}}catch{}finally{}n=yg(t,e,i,r),n!==null&&(i=Me(),mt(n,t,r,i),Fg(n,e,r))}}function jg(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Ug(t,e){Fi=Do=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$u(t,n)}}var Lo={readContext:st,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},f_={readContext:st,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:st,useEffect:Mf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,so(4194308,4,Ng.bind(null,e,t),n)},useLayoutEffect:function(t,e){return so(4194308,4,t,e)},useInsertionEffect:function(t,e){return so(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=c_.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Lf,useDebugValue:hc,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Lf(!1),e=t[0];return t=u_.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=It();if(se){if(n===void 0)throw Error(D(407));n=n()}else{if(n=e(),Se===null)throw Error(D(349));rr&30||Eg(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Mf(Tg.bind(null,r,o,t),[t]),r.flags|=2048,as(9,Ig.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=It(),e=Se.identifierPrefix;if(se){var n=Vt,r=Ft;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ss++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=l_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},d_={readContext:st,useCallback:Og,useContext:st,useEffect:cc,useImperativeHandle:xg,useInsertionEffect:Pg,useLayoutEffect:Rg,useMemo:Dg,useReducer:ll,useRef:Cg,useState:function(){return ll(os)},useDebugValue:hc,useDeferredValue:function(t){var e=ot();return Lg(e,ye.memoizedState,t)},useTransition:function(){var t=ll(os)[0],e=ot().memoizedState;return[t,e]},useMutableSource:_g,useSyncExternalStore:Sg,useId:Mg,unstable_isNewReconciler:!1},p_={readContext:st,useCallback:Og,useContext:st,useEffect:cc,useImperativeHandle:xg,useInsertionEffect:Pg,useLayoutEffect:Rg,useMemo:Dg,useReducer:ul,useRef:Cg,useState:function(){return ul(os)},useDebugValue:hc,useDeferredValue:function(t){var e=ot();return ye===null?e.memoizedState=t:Lg(e,ye.memoizedState,t)},useTransition:function(){var t=ul(os)[0],e=ot().memoizedState;return[t,e]},useMutableSource:_g,useSyncExternalStore:Sg,useId:Mg,unstable_isNewReconciler:!1};function ut(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ru(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sa={isMounted:function(t){return(t=t._reactInternals)?hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Tn(t),o=$t(r,i);o.payload=e,n!=null&&(o.callback=n),e=En(t,o,i),e!==null&&(mt(e,t,i,r),ro(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Me(),i=Tn(t),o=$t(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=En(t,o,i),e!==null&&(mt(e,t,i,r),ro(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),r=Tn(t),i=$t(n,r);i.tag=2,e!=null&&(i.callback=e),e=En(t,i,r),e!==null&&(mt(e,t,r,n),ro(e,t,r))}};function jf(t,e,n,r,i,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,a):e.prototype&&e.prototype.isPureReactComponent?!Zi(n,r)||!Zi(i,o):!0}function Vg(t,e,n){var r=!1,i=Rn,o=e.contextType;return typeof o=="object"&&o!==null?o=st(o):(i=Be(e)?tr:Ne.current,r=e.contextTypes,o=(r=r!=null)?Hr(t,i):Rn),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sa,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Uf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sa.enqueueReplaceState(e,e.state,null)}function iu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},rc(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=st(o):(o=Be(e)?tr:Ne.current,i.context=Hr(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ru(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sa.enqueueReplaceState(i,i.state,null),xo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qr(t,e){try{var n="",r=e;do n+=$v(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function cl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function su(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var g_=typeof WeakMap=="function"?WeakMap:Map;function bg(t,e,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){jo||(jo=!0,gu=r),su(t,e)},n}function zg(t,e,n){n=$t(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){su(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){su(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ff(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new g_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=R_.bind(null,t,e,n),e.then(t,t))}function Vf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$t(-1,1),e.tag=2,En(n,e,1))),n.lanes|=1),t)}var m_=Xt.ReactCurrentOwner,ze=!1;function De(t,e,n,r){e.child=t===null?mg(e,null,n,r):Gr(e,t.child,n,r)}function zf(t,e,n,r,i){n=n.render;var o=e.ref;return jr(e,i),r=lc(t,e,n,r,o,i),n=uc(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(se&&n&&Xu(e),e.flags|=1,De(t,e,r,i),e.child)}function $f(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!wc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,$g(t,e,o,r,i)):(t=uo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Zi,n(a,r)&&t.ref===e.ref)return Gt(t,e,i)}return e.flags|=1,t=kn(o,r),t.ref=e.ref,t.return=e,e.child=t}function $g(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Zi(o,r)&&t.ref===e.ref)if(ze=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(ze=!0);else return e.lanes=t.lanes,Gt(t,e,i)}return ou(t,e,n,r,i)}function Bg(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Nr,We),We|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(Nr,We),We|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Nr,We),We|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,ee(Nr,We),We|=r;return De(t,e,i,n),e.child}function Hg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ou(t,e,n,r,i){var o=Be(n)?tr:Ne.current;return o=Hr(e,o),jr(e,i),n=lc(t,e,n,r,o,i),r=uc(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gt(t,e,i)):(se&&r&&Xu(e),e.flags|=1,De(t,e,n,i),e.child)}function Bf(t,e,n,r,i){if(Be(n)){var o=!0;Ao(e)}else o=!1;if(jr(e,i),e.stateNode===null)oo(t,e),Vg(e,n,r),iu(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,c=e.memoizedProps;a.props=c;var h=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=st(d):(d=Be(n)?tr:Ne.current,d=Hr(e,d));var T=n.getDerivedStateFromProps,E=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function";E||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==r||h!==d)&&Uf(e,a,r,d),ln=!1;var A=e.memoizedState;a.state=A,xo(e,r,a,i),h=e.memoizedState,c!==r||A!==h||$e.current||ln?(typeof T=="function"&&(ru(e,n,T,r),h=e.memoizedState),(c=ln||jf(e,n,c,r,A,h,d))?(E||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=h),a.props=r,a.state=h,a.context=d,r=c):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,vg(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:ut(e.type,c),a.props=d,E=e.pendingProps,A=a.context,h=n.contextType,typeof h=="object"&&h!==null?h=st(h):(h=Be(n)?tr:Ne.current,h=Hr(e,h));var O=n.getDerivedStateFromProps;(T=typeof O=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(c!==E||A!==h)&&Uf(e,a,r,h),ln=!1,A=e.memoizedState,a.state=A,xo(e,r,a,i);var x=e.memoizedState;c!==E||A!==x||$e.current||ln?(typeof O=="function"&&(ru(e,n,O,r),x=e.memoizedState),(d=ln||jf(e,n,d,r,A,x,h)||!1)?(T||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,h),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,h)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=h,r=d):(typeof a.componentDidUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),r=!1)}return au(t,e,n,r,o,i)}function au(t,e,n,r,i,o){Hg(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&Pf(e,n,!1),Gt(t,e,o);r=e.stateNode,m_.current=e;var c=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=Gr(e,t.child,null,o),e.child=Gr(e,null,c,o)):De(t,e,c,o),e.memoizedState=r.state,i&&Pf(e,n,!0),e.child}function Wg(t){var e=t.stateNode;e.pendingContext?Cf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cf(t,e.context,!1),ic(t,e.containerInfo)}function Hf(t,e,n,r,i){return Wr(),Qu(i),e.flags|=256,De(t,e,n,r),e.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function uu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gg(t,e,n){var r=e.pendingProps,i=oe.current,o=!1,a=(e.flags&128)!==0,c;if((c=a)||(c=t!==null&&t.memoizedState===null?!1:(i&2)!==0),c?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(oe,i&1),t===null)return tu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,o?(r=e.mode,o=e.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=la(a,r,0,null),t=Yn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=uu(n),e.memoizedState=lu,t):fc(e,a));if(i=t.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return y_(t,e,a,r,c,i,n);if(o){o=r.fallback,a=e.mode,i=t.child,c=i.sibling;var h={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=h,e.deletions=null):(r=kn(i,h),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=kn(c,o):(o=Yn(o,a,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,a=t.child.memoizedState,a=a===null?uu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=lu,r}return o=t.child,t=o.sibling,r=kn(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fc(t,e){return e=la({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ws(t,e,n,r){return r!==null&&Qu(r),Gr(e,t.child,null,n),t=fc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y_(t,e,n,r,i,o,a){if(n)return e.flags&256?(e.flags&=-257,r=cl(Error(D(422))),Ws(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=la({mode:"visible",children:r.children},i,0,null),o=Yn(o,i,a,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&Gr(e,t.child,null,a),e.child.memoizedState=uu(a),e.memoizedState=lu,o);if(!(e.mode&1))return Ws(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(D(419)),r=cl(o,r,void 0),Ws(t,e,a,r)}if(c=(a&t.childLanes)!==0,ze||c){if(r=Se,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Wt(t,i),mt(r,t,i,-1))}return vc(),r=cl(Error(D(421))),Ws(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=N_.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ge=Sn(i.nextSibling),Ke=e,se=!0,ht=null,t!==null&&(et[tt++]=Ft,et[tt++]=Vt,et[tt++]=nr,Ft=t.id,Vt=t.overflow,nr=e),e=fc(e,r.children),e.flags|=4096,e)}function Wf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nu(t.return,e,n)}function hl(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Kg(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(De(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wf(t,n,e);else if(t.tag===19)Wf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hl(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hl(e,!0,n,null,o);break;case"together":hl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(D(153));if(e.child!==null){for(t=e.child,n=kn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function v_(t,e,n){switch(e.tag){case 3:Wg(e),Wr();break;case 5:wg(e);break;case 1:Be(e.type)&&Ao(e);break;case 4:ic(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Ro,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?Gg(t,e,n):(ee(oe,oe.current&1),t=Gt(t,e,n),t!==null?t.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Bg(t,e,n)}return Gt(t,e,n)}var qg,cu,Jg,Xg;qg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cu=function(){};Jg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kn(Nt.current);var o=null;switch(n){case"input":i=Ol(t,i),r=Ol(t,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Ml(t,i),r=Ml(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=To)}Ul(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(a in c)c.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Gi.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var h=r[d];if(c=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&h!==c&&(h!=null||c!=null))if(d==="style")if(c){for(a in c)!c.hasOwnProperty(a)||h&&h.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in h)h.hasOwnProperty(a)&&c[a]!==h[a]&&(n||(n={}),n[a]=h[a])}else n||(o||(o=[]),o.push(d,n)),n=h;else d==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,c=c?c.__html:void 0,h!=null&&c!==h&&(o=o||[]).push(d,h)):d==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(d,""+h):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Gi.hasOwnProperty(d)?(h!=null&&d==="onScroll"&&ne("scroll",t),o||c===h||(o=[])):(o=o||[]).push(d,h))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Xg=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ci(t,e){if(!se)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function w_(t,e,n){var r=e.pendingProps;switch(Yu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(e),null;case 1:return Be(e.type)&&ko(),Pe(e),null;case 3:return r=e.stateNode,Kr(),re($e),re(Ne),oc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ht!==null&&(vu(ht),ht=null))),cu(t,e),Pe(e),null;case 5:sc(e);var i=Kn(is.current);if(n=e.type,t!==null&&e.stateNode!=null)Jg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(D(166));return Pe(e),null}if(t=Kn(Nt.current),Bs(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[At]=e,r[ns]=o,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Oi.length;i++)ne(Oi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Zh(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":tf(r,o),ne("invalid",r)}Ul(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var c=o[a];a==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&$s(r.textContent,c,t),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&$s(r.textContent,c,t),i=["children",""+c]):Gi.hasOwnProperty(a)&&c!=null&&a==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ls(r),ef(r,o,!0);break;case"textarea":Ls(r),nf(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=To)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[At]=e,t[ns]=r,qg(t,e,!1,!1),e.stateNode=t;e:{switch(a=Fl(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Oi.length;i++)ne(Oi[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":Zh(t,r),i=Ol(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",t);break;case"textarea":tf(t,r),i=Ml(t,r),ne("invalid",t);break;default:i=r}Ul(n,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var h=c[o];o==="style"?Cp(t,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&kp(t,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Ki(t,h):typeof h=="number"&&Ki(t,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gi.hasOwnProperty(o)?h!=null&&o==="onScroll"&&ne("scroll",t):h!=null&&ju(t,o,h,a))}switch(n){case"input":Ls(t),ef(t,r,!1);break;case"textarea":Ls(t),nf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pn(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Or(t,!!r.multiple,o,!1):r.defaultValue!=null&&Or(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=To)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pe(e),null;case 6:if(t&&e.stateNode!=null)Xg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(D(166));if(n=Kn(is.current),Kn(Nt.current),Bs(e)){if(r=e.stateNode,n=e.memoizedProps,r[At]=e,(o=r.nodeValue!==n)&&(t=Ke,t!==null))switch(t.tag){case 3:$s(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$s(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=e,e.stateNode=r}return Pe(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(se&&Ge!==null&&e.mode&1&&!(e.flags&128))pg(),Wr(),e.flags|=98560,o=!1;else if(o=Bs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(D(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(D(317));o[At]=e}else Wr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pe(e),o=!1}else ht!==null&&(vu(ht),ht=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ve===0&&(ve=3):vc())),e.updateQueue!==null&&(e.flags|=4),Pe(e),null);case 4:return Kr(),cu(t,e),t===null&&es(e.stateNode.containerInfo),Pe(e),null;case 10:return tc(e.type._context),Pe(e),null;case 17:return Be(e.type)&&ko(),Pe(e),null;case 19:if(re(oe),o=e.memoizedState,o===null)return Pe(e),null;if(r=(e.flags&128)!==0,a=o.rendering,a===null)if(r)Ci(o,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Oo(t),a!==null){for(e.flags|=128,Ci(o,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),e.child}t=t.sibling}o.tail!==null&&de()>Jr&&(e.flags|=128,r=!0,Ci(o,!1),e.lanes=4194304)}else{if(!r)if(t=Oo(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!se)return Pe(e),null}else 2*de()-o.renderingStartTime>Jr&&n!==1073741824&&(e.flags|=128,r=!0,Ci(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=de(),e.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),e):(Pe(e),null);case 22:case 23:return yc(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?We&1073741824&&(Pe(e),e.subtreeFlags&6&&(e.flags|=8192)):Pe(e),null;case 24:return null;case 25:return null}throw Error(D(156,e.tag))}function __(t,e){switch(Yu(e),e.tag){case 1:return Be(e.type)&&ko(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Kr(),re($e),re(Ne),oc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return sc(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(D(340));Wr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return Kr(),null;case 10:return tc(e.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var Gs=!1,Re=!1,S_=typeof WeakSet=="function"?WeakSet:Set,V=null;function Rr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(t,e,r)}else n.current=null}function hu(t,e,n){try{n()}catch(r){ce(t,e,r)}}var Gf=!1;function E_(t,e){if(ql=So,t=tg(),Ju(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,c=-1,h=-1,d=0,T=0,E=t,A=null;t:for(;;){for(var O;E!==n||i!==0&&E.nodeType!==3||(c=a+i),E!==o||r!==0&&E.nodeType!==3||(h=a+r),E.nodeType===3&&(a+=E.nodeValue.length),(O=E.firstChild)!==null;)A=E,E=O;for(;;){if(E===t)break t;if(A===n&&++d===i&&(c=a),A===o&&++T===r&&(h=a),(O=E.nextSibling)!==null)break;E=A,A=E.parentNode}E=O}n=c===-1||h===-1?null:{start:c,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:t,selectionRange:n},So=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var L=x.memoizedProps,b=x.memoizedState,S=e.stateNode,w=S.getSnapshotBeforeUpdate(e.elementType===e.type?L:ut(e.type,L),b);S.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(N){ce(e,e.return,N)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return x=Gf,Gf=!1,x}function Vi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&hu(e,n,o)}i=i.next}while(i!==r)}}function oa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function fu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yg(t){var e=t.alternate;e!==null&&(t.alternate=null,Yg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[At],delete e[ns],delete e[Ql],delete e[i_],delete e[s_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Qg(t){return t.tag===5||t.tag===3||t.tag===4}function Kf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function du(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=To));else if(r!==4&&(t=t.child,t!==null))for(du(t,e,n),t=t.sibling;t!==null;)du(t,e,n),t=t.sibling}function pu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(pu(t,e,n),t=t.sibling;t!==null;)pu(t,e,n),t=t.sibling}var Ee=null,ct=!1;function sn(t,e,n){for(n=n.child;n!==null;)Zg(t,e,n),n=n.sibling}function Zg(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Qo,n)}catch{}switch(n.tag){case 5:Re||Rr(n,e);case 6:var r=Ee,i=ct;Ee=null,sn(t,e,n),Ee=r,ct=i,Ee!==null&&(ct?(t=Ee,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ee.removeChild(n.stateNode));break;case 18:Ee!==null&&(ct?(t=Ee,n=n.stateNode,t.nodeType===8?il(t.parentNode,n):t.nodeType===1&&il(t,n),Yi(t)):il(Ee,n.stateNode));break;case 4:r=Ee,i=ct,Ee=n.stateNode.containerInfo,ct=!0,sn(t,e,n),Ee=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&hu(n,e,a),i=i.next}while(i!==r)}sn(t,e,n);break;case 1:if(!Re&&(Rr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){ce(n,e,c)}sn(t,e,n);break;case 21:sn(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,sn(t,e,n),Re=r):sn(t,e,n);break;default:sn(t,e,n)}}function qf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new S_),e.forEach(function(r){var i=x_.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,a=e,c=a;e:for(;c!==null;){switch(c.tag){case 5:Ee=c.stateNode,ct=!1;break e;case 3:Ee=c.stateNode.containerInfo,ct=!0;break e;case 4:Ee=c.stateNode.containerInfo,ct=!0;break e}c=c.return}if(Ee===null)throw Error(D(160));Zg(o,a,i),Ee=null,ct=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(d){ce(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)em(e,t),e=e.sibling}function em(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),Et(t),r&4){try{Vi(3,t,t.return),oa(3,t)}catch(L){ce(t,t.return,L)}try{Vi(5,t,t.return)}catch(L){ce(t,t.return,L)}}break;case 1:lt(e,t),Et(t),r&512&&n!==null&&Rr(n,n.return);break;case 5:if(lt(e,t),Et(t),r&512&&n!==null&&Rr(n,n.return),t.flags&32){var i=t.stateNode;try{Ki(i,"")}catch(L){ce(t,t.return,L)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,c=t.type,h=t.updateQueue;if(t.updateQueue=null,h!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Ep(i,o),Fl(c,a);var d=Fl(c,o);for(a=0;a<h.length;a+=2){var T=h[a],E=h[a+1];T==="style"?Cp(i,E):T==="dangerouslySetInnerHTML"?kp(i,E):T==="children"?Ki(i,E):ju(i,T,E,d)}switch(c){case"input":Dl(i,o);break;case"textarea":Ip(i,o);break;case"select":var A=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var O=o.value;O!=null?Or(i,!!o.multiple,O,!1):A!==!!o.multiple&&(o.defaultValue!=null?Or(i,!!o.multiple,o.defaultValue,!0):Or(i,!!o.multiple,o.multiple?[]:"",!1))}i[ns]=o}catch(L){ce(t,t.return,L)}}break;case 6:if(lt(e,t),Et(t),r&4){if(t.stateNode===null)throw Error(D(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(L){ce(t,t.return,L)}}break;case 3:if(lt(e,t),Et(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Yi(e.containerInfo)}catch(L){ce(t,t.return,L)}break;case 4:lt(e,t),Et(t);break;case 13:lt(e,t),Et(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(gc=de())),r&4&&qf(t);break;case 22:if(T=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(d=Re)||T,lt(e,t),Re=d):lt(e,t),Et(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!T&&t.mode&1)for(V=t,T=t.child;T!==null;){for(E=V=T;V!==null;){switch(A=V,O=A.child,A.tag){case 0:case 11:case 14:case 15:Vi(4,A,A.return);break;case 1:Rr(A,A.return);var x=A.stateNode;if(typeof x.componentWillUnmount=="function"){r=A,n=A.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(L){ce(r,n,L)}}break;case 5:Rr(A,A.return);break;case 22:if(A.memoizedState!==null){Xf(E);continue}}O!==null?(O.return=A,V=O):Xf(E)}T=T.sibling}e:for(T=null,E=t;;){if(E.tag===5){if(T===null){T=E;try{i=E.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=E.stateNode,h=E.memoizedProps.style,a=h!=null&&h.hasOwnProperty("display")?h.display:null,c.style.display=Ap("display",a))}catch(L){ce(t,t.return,L)}}}else if(E.tag===6){if(T===null)try{E.stateNode.nodeValue=d?"":E.memoizedProps}catch(L){ce(t,t.return,L)}}else if((E.tag!==22&&E.tag!==23||E.memoizedState===null||E===t)&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===t)break e;for(;E.sibling===null;){if(E.return===null||E.return===t)break e;T===E&&(T=null),E=E.return}T===E&&(T=null),E.sibling.return=E.return,E=E.sibling}}break;case 19:lt(e,t),Et(t),r&4&&qf(t);break;case 21:break;default:lt(e,t),Et(t)}}function Et(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Qg(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var o=Kf(t);pu(t,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,c=Kf(t);du(t,c,a);break;default:throw Error(D(161))}}catch(h){ce(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function I_(t,e,n){V=t,tm(t)}function tm(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Gs;if(!a){var c=i.alternate,h=c!==null&&c.memoizedState!==null||Re;c=Gs;var d=Re;if(Gs=a,(Re=h)&&!d)for(V=i;V!==null;)a=V,h=a.child,a.tag===22&&a.memoizedState!==null?Yf(i):h!==null?(h.return=a,V=h):Yf(i);for(;o!==null;)V=o,tm(o),o=o.sibling;V=i,Gs=c,Re=d}Jf(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,V=o):Jf(t)}}function Jf(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||oa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Df(e,o,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Df(e,a,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var h=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var T=d.memoizedState;if(T!==null){var E=T.dehydrated;E!==null&&Yi(E)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Re||e.flags&512&&fu(e)}catch(A){ce(e,e.return,A)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function Xf(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Yf(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oa(4,e)}catch(h){ce(e,n,h)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(h){ce(e,i,h)}}var o=e.return;try{fu(e)}catch(h){ce(e,o,h)}break;case 5:var a=e.return;try{fu(e)}catch(h){ce(e,a,h)}}}catch(h){ce(e,e.return,h)}if(e===t){V=null;break}var c=e.sibling;if(c!==null){c.return=e.return,V=c;break}V=e.return}}var T_=Math.ceil,Mo=Xt.ReactCurrentDispatcher,dc=Xt.ReactCurrentOwner,rt=Xt.ReactCurrentBatchConfig,X=0,Se=null,pe=null,Ie=0,We=0,Nr=Dn(0),ve=0,ls=null,ir=0,aa=0,pc=0,bi=null,be=null,gc=0,Jr=1/0,Mt=null,jo=!1,gu=null,In=null,Ks=!1,yn=null,Uo=0,zi=0,mu=null,ao=-1,lo=0;function Me(){return X&6?de():ao!==-1?ao:ao=de()}function Tn(t){return t.mode&1?X&2&&Ie!==0?Ie&-Ie:a_.transition!==null?(lo===0&&(lo=Vp()),lo):(t=Q,t!==0||(t=window.event,t=t===void 0?16:Gp(t.type)),t):1}function mt(t,e,n,r){if(50<zi)throw zi=0,mu=null,Error(D(185));ds(t,n,r),(!(X&2)||t!==Se)&&(t===Se&&(!(X&2)&&(aa|=n),ve===4&&hn(t,Ie)),He(t,r),n===1&&X===0&&!(e.mode&1)&&(Jr=de()+500,ra&&Ln()))}function He(t,e){var n=t.callbackNode;aw(t,e);var r=_o(t,t===Se?Ie:0);if(r===0)n!==null&&of(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&of(n),e===1)t.tag===0?o_(Qf.bind(null,t)):hg(Qf.bind(null,t)),n_(function(){!(X&6)&&Ln()}),n=null;else{switch(bp(r)){case 1:n=zu;break;case 4:n=Up;break;case 16:n=wo;break;case 536870912:n=Fp;break;default:n=wo}n=um(n,nm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function nm(t,e){if(ao=-1,lo=0,X&6)throw Error(D(327));var n=t.callbackNode;if(Ur()&&t.callbackNode!==n)return null;var r=_o(t,t===Se?Ie:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fo(t,r);else{e=r;var i=X;X|=2;var o=im();(Se!==t||Ie!==e)&&(Mt=null,Jr=de()+500,Xn(t,e));do try{C_();break}catch(c){rm(t,c)}while(!0);ec(),Mo.current=o,X=i,pe!==null?e=0:(Se=null,Ie=0,e=ve)}if(e!==0){if(e===2&&(i=Bl(t),i!==0&&(r=i,e=yu(t,i))),e===1)throw n=ls,Xn(t,0),hn(t,r),He(t,de()),n;if(e===6)hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!k_(i)&&(e=Fo(t,r),e===2&&(o=Bl(t),o!==0&&(r=o,e=yu(t,o))),e===1))throw n=ls,Xn(t,0),hn(t,r),He(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(D(345));case 2:$n(t,be,Mt);break;case 3:if(hn(t,r),(r&130023424)===r&&(e=gc+500-de(),10<e)){if(_o(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Me(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yl($n.bind(null,t,be,Mt),e);break}$n(t,be,Mt);break;case 4:if(hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-gt(r);o=1<<a,a=e[a],a>i&&(i=a),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*T_(r/1960))-r,10<r){t.timeoutHandle=Yl($n.bind(null,t,be,Mt),r);break}$n(t,be,Mt);break;case 5:$n(t,be,Mt);break;default:throw Error(D(329))}}}return He(t,de()),t.callbackNode===n?nm.bind(null,t):null}function yu(t,e){var n=bi;return t.current.memoizedState.isDehydrated&&(Xn(t,e).flags|=256),t=Fo(t,e),t!==2&&(e=be,be=n,e!==null&&vu(e)),t}function vu(t){be===null?be=t:be.push.apply(be,t)}function k_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hn(t,e){for(e&=~pc,e&=~aa,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-gt(e),r=1<<n;t[n]=-1,e&=~r}}function Qf(t){if(X&6)throw Error(D(327));Ur();var e=_o(t,0);if(!(e&1))return He(t,de()),null;var n=Fo(t,e);if(t.tag!==0&&n===2){var r=Bl(t);r!==0&&(e=r,n=yu(t,r))}if(n===1)throw n=ls,Xn(t,0),hn(t,e),He(t,de()),n;if(n===6)throw Error(D(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$n(t,be,Mt),He(t,de()),null}function mc(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(Jr=de()+500,ra&&Ln())}}function sr(t){yn!==null&&yn.tag===0&&!(X&6)&&Ur();var e=X;X|=1;var n=rt.transition,r=Q;try{if(rt.transition=null,Q=1,t)return t()}finally{Q=r,rt.transition=n,X=e,!(X&6)&&Ln()}}function yc(){We=Nr.current,re(Nr)}function Xn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,t_(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Yu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ko();break;case 3:Kr(),re($e),re(Ne),oc();break;case 5:sc(r);break;case 4:Kr();break;case 13:re(oe);break;case 19:re(oe);break;case 10:tc(r.type._context);break;case 22:case 23:yc()}n=n.return}if(Se=t,pe=t=kn(t.current,null),Ie=We=e,ve=0,ls=null,pc=aa=ir=0,be=bi=null,Gn!==null){for(e=0;e<Gn.length;e++)if(n=Gn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Gn=null}return t}function rm(t,e){do{var n=pe;try{if(ec(),io.current=Lo,Do){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Do=!1}if(rr=0,_e=ye=ae=null,Fi=!1,ss=0,dc.current=null,n===null||n.return===null){ve=1,ls=e,pe=null;break}e:{var o=t,a=n.return,c=n,h=e;if(e=Ie,c.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var d=h,T=c,E=T.tag;if(!(T.mode&1)&&(E===0||E===11||E===15)){var A=T.alternate;A?(T.updateQueue=A.updateQueue,T.memoizedState=A.memoizedState,T.lanes=A.lanes):(T.updateQueue=null,T.memoizedState=null)}var O=Vf(a);if(O!==null){O.flags&=-257,bf(O,a,c,o,e),O.mode&1&&Ff(o,d,e),e=O,h=d;var x=e.updateQueue;if(x===null){var L=new Set;L.add(h),e.updateQueue=L}else x.add(h);break e}else{if(!(e&1)){Ff(o,d,e),vc();break e}h=Error(D(426))}}else if(se&&c.mode&1){var b=Vf(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),bf(b,a,c,o,e),Qu(qr(h,c));break e}}o=h=qr(h,c),ve!==4&&(ve=2),bi===null?bi=[o]:bi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var S=bg(o,h,e);Of(o,S);break e;case 1:c=h;var w=o.type,I=o.stateNode;if(!(o.flags&128)&&(typeof w.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(In===null||!In.has(I)))){o.flags|=65536,e&=-e,o.lanes|=e;var N=zg(o,c,e);Of(o,N);break e}}o=o.return}while(o!==null)}om(n)}catch(j){e=j,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function im(){var t=Mo.current;return Mo.current=Lo,t===null?Lo:t}function vc(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(ir&268435455)&&!(aa&268435455)||hn(Se,Ie)}function Fo(t,e){var n=X;X|=2;var r=im();(Se!==t||Ie!==e)&&(Mt=null,Xn(t,e));do try{A_();break}catch(i){rm(t,i)}while(!0);if(ec(),X=n,Mo.current=r,pe!==null)throw Error(D(261));return Se=null,Ie=0,ve}function A_(){for(;pe!==null;)sm(pe)}function C_(){for(;pe!==null&&!Qv();)sm(pe)}function sm(t){var e=lm(t.alternate,t,We);t.memoizedProps=t.pendingProps,e===null?om(t):pe=e,dc.current=null}function om(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=__(n,e),n!==null){n.flags&=32767,pe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,pe=null;return}}else if(n=w_(n,e,We),n!==null){pe=n;return}if(e=e.sibling,e!==null){pe=e;return}pe=e=t}while(e!==null);ve===0&&(ve=5)}function $n(t,e,n){var r=Q,i=rt.transition;try{rt.transition=null,Q=1,P_(t,e,n,r)}finally{rt.transition=i,Q=r}return null}function P_(t,e,n,r){do Ur();while(yn!==null);if(X&6)throw Error(D(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(D(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(lw(t,o),t===Se&&(pe=Se=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ks||(Ks=!0,um(wo,function(){return Ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=rt.transition,rt.transition=null;var a=Q;Q=1;var c=X;X|=4,dc.current=null,E_(t,n),em(n,t),qw(Jl),So=!!ql,Jl=ql=null,t.current=n,I_(n),Zv(),X=c,Q=a,rt.transition=o}else t.current=n;if(Ks&&(Ks=!1,yn=t,Uo=i),o=t.pendingLanes,o===0&&(In=null),nw(n.stateNode),He(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(jo)throw jo=!1,t=gu,gu=null,t;return Uo&1&&t.tag!==0&&Ur(),o=t.pendingLanes,o&1?t===mu?zi++:(zi=0,mu=t):zi=0,Ln(),null}function Ur(){if(yn!==null){var t=bp(Uo),e=rt.transition,n=Q;try{if(rt.transition=null,Q=16>t?16:t,yn===null)var r=!1;else{if(t=yn,yn=null,Uo=0,X&6)throw Error(D(331));var i=X;for(X|=4,V=t.current;V!==null;){var o=V,a=o.child;if(V.flags&16){var c=o.deletions;if(c!==null){for(var h=0;h<c.length;h++){var d=c[h];for(V=d;V!==null;){var T=V;switch(T.tag){case 0:case 11:case 15:Vi(8,T,o)}var E=T.child;if(E!==null)E.return=T,V=E;else for(;V!==null;){T=V;var A=T.sibling,O=T.return;if(Yg(T),T===d){V=null;break}if(A!==null){A.return=O,V=A;break}V=O}}}var x=o.alternate;if(x!==null){var L=x.child;if(L!==null){x.child=null;do{var b=L.sibling;L.sibling=null,L=b}while(L!==null)}}V=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,V=a;else e:for(;V!==null;){if(o=V,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Vi(9,o,o.return)}var S=o.sibling;if(S!==null){S.return=o.return,V=S;break e}V=o.return}}var w=t.current;for(V=w;V!==null;){a=V;var I=a.child;if(a.subtreeFlags&2064&&I!==null)I.return=a,V=I;else e:for(a=w;V!==null;){if(c=V,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:oa(9,c)}}catch(j){ce(c,c.return,j)}if(c===a){V=null;break e}var N=c.sibling;if(N!==null){N.return=c.return,V=N;break e}V=c.return}}if(X=i,Ln(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Qo,t)}catch{}r=!0}return r}finally{Q=n,rt.transition=e}}return!1}function Zf(t,e,n){e=qr(n,e),e=bg(t,e,1),t=En(t,e,1),e=Me(),t!==null&&(ds(t,1,e),He(t,e))}function ce(t,e,n){if(t.tag===3)Zf(t,t,n);else for(;e!==null;){if(e.tag===3){Zf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=qr(n,t),t=zg(e,t,1),e=En(e,t,1),t=Me(),e!==null&&(ds(e,1,t),He(e,t));break}}e=e.return}}function R_(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Me(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Ie&n)===n&&(ve===4||ve===3&&(Ie&130023424)===Ie&&500>de()-gc?Xn(t,0):pc|=n),He(t,e)}function am(t,e){e===0&&(t.mode&1?(e=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):e=1);var n=Me();t=Wt(t,e),t!==null&&(ds(t,e,n),He(t,n))}function N_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),am(t,n)}function x_(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(e),am(t,n)}var lm;lm=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||$e.current)ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ze=!1,v_(t,e,n);ze=!!(t.flags&131072)}else ze=!1,se&&e.flags&1048576&&fg(e,Po,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;oo(t,e),t=e.pendingProps;var i=Hr(e,Ne.current);jr(e,n),i=lc(null,e,r,t,i,n);var o=uc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Be(r)?(o=!0,Ao(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,rc(e),i.updater=sa,e.stateNode=i,i._reactInternals=e,iu(e,r,t,n),e=au(null,e,r,!0,o,n)):(e.tag=0,se&&o&&Xu(e),De(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(oo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=D_(r),t=ut(r,t),i){case 0:e=ou(null,e,r,t,n);break e;case 1:e=Bf(null,e,r,t,n);break e;case 11:e=zf(null,e,r,t,n);break e;case 14:e=$f(null,e,r,ut(r.type,t),n);break e}throw Error(D(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),ou(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),Bf(t,e,r,i,n);case 3:e:{if(Wg(e),t===null)throw Error(D(387));r=e.pendingProps,o=e.memoizedState,i=o.element,vg(t,e),xo(e,r,null,n);var a=e.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=qr(Error(D(423)),e),e=Hf(t,e,r,n,i);break e}else if(r!==i){i=qr(Error(D(424)),e),e=Hf(t,e,r,n,i);break e}else for(Ge=Sn(e.stateNode.containerInfo.firstChild),Ke=e,se=!0,ht=null,n=mg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wr(),r===i){e=Gt(t,e,n);break e}De(t,e,r,n)}e=e.child}return e;case 5:return wg(e),t===null&&tu(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,Xl(r,i)?a=null:o!==null&&Xl(r,o)&&(e.flags|=32),Hg(t,e),De(t,e,a,n),e.child;case 6:return t===null&&tu(e),null;case 13:return Gg(t,e,n);case 4:return ic(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gr(e,null,r,n):De(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),zf(t,e,r,i,n);case 7:return De(t,e,e.pendingProps,n),e.child;case 8:return De(t,e,e.pendingProps.children,n),e.child;case 12:return De(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,a=i.value,ee(Ro,r._currentValue),r._currentValue=a,o!==null)if(yt(o.value,a)){if(o.children===i.children&&!$e.current){e=Gt(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){a=o.child;for(var h=c.firstContext;h!==null;){if(h.context===r){if(o.tag===1){h=$t(-1,n&-n),h.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var T=d.pending;T===null?h.next=h:(h.next=T.next,T.next=h),d.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),nu(o.return,n,e),c.lanes|=n;break}h=h.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(D(341));a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),nu(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}De(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,jr(e,n),i=st(i),r=r(i),e.flags|=1,De(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),$f(t,e,r,i,n);case 15:return $g(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),oo(t,e),e.tag=1,Be(r)?(t=!0,Ao(e)):t=!1,jr(e,n),Vg(e,r,i),iu(e,r,i,n),au(null,e,r,!0,t,n);case 19:return Kg(t,e,n);case 22:return Bg(t,e,n)}throw Error(D(156,e.tag))};function um(t,e){return jp(t,e)}function O_(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nt(t,e,n,r){return new O_(t,e,n,r)}function wc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D_(t){if(typeof t=="function")return wc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fu)return 11;if(t===Vu)return 14}return 2}function kn(t,e){var n=t.alternate;return n===null?(n=nt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function uo(t,e,n,r,i,o){var a=2;if(r=t,typeof t=="function")wc(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _r:return Yn(n.children,i,o,e);case Uu:a=8,i|=8;break;case Pl:return t=nt(12,n,e,i|2),t.elementType=Pl,t.lanes=o,t;case Rl:return t=nt(13,n,e,i),t.elementType=Rl,t.lanes=o,t;case Nl:return t=nt(19,n,e,i),t.elementType=Nl,t.lanes=o,t;case wp:return la(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yp:a=10;break e;case vp:a=9;break e;case Fu:a=11;break e;case Vu:a=14;break e;case an:a=16,r=null;break e}throw Error(D(130,t==null?t:typeof t,""))}return e=nt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Yn(t,e,n,r){return t=nt(7,t,r,e),t.lanes=n,t}function la(t,e,n,r){return t=nt(22,t,r,e),t.elementType=wp,t.lanes=n,t.stateNode={isHidden:!1},t}function fl(t,e,n){return t=nt(6,t,null,e),t.lanes=n,t}function dl(t,e,n){return e=nt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function L_(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _c(t,e,n,r,i,o,a,c,h){return t=new L_(t,e,n,c,h),e===1?(e=1,o===!0&&(e|=8)):e=0,o=nt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rc(o),t}function M_(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function cm(t){if(!t)return Rn;t=t._reactInternals;e:{if(hr(t)!==t||t.tag!==1)throw Error(D(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Be(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(D(171))}if(t.tag===1){var n=t.type;if(Be(n))return cg(t,n,e)}return e}function hm(t,e,n,r,i,o,a,c,h){return t=_c(n,r,!0,t,i,o,a,c,h),t.context=cm(null),n=t.current,r=Me(),i=Tn(n),o=$t(r,i),o.callback=e??null,En(n,o,i),t.current.lanes=i,ds(t,i,r),He(t,r),t}function ua(t,e,n,r){var i=e.current,o=Me(),a=Tn(i);return n=cm(n),e.context===null?e.context=n:e.pendingContext=n,e=$t(o,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=En(i,e,a),t!==null&&(mt(t,i,a,o),ro(t,i,a)),a}function Vo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ed(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sc(t,e){ed(t,e),(t=t.alternate)&&ed(t,e)}function j_(){return null}var fm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ec(t){this._internalRoot=t}ca.prototype.render=Ec.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(D(409));ua(t,e,null,null)};ca.prototype.unmount=Ec.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;sr(function(){ua(null,t,null,null)}),e[Ht]=null}};function ca(t){this._internalRoot=t}ca.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cn.length&&e!==0&&e<cn[n].priority;n++);cn.splice(n,0,t),n===0&&Wp(t)}};function Ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ha(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function td(){}function U_(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Vo(a);o.call(d)}}var a=hm(e,r,t,0,null,!1,!1,"",td);return t._reactRootContainer=a,t[Ht]=a.current,es(t.nodeType===8?t.parentNode:t),sr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var d=Vo(h);c.call(d)}}var h=_c(t,0,!1,null,null,!1,!1,"",td);return t._reactRootContainer=h,t[Ht]=h.current,es(t.nodeType===8?t.parentNode:t),sr(function(){ua(e,h,n,r)}),h}function fa(t,e,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var c=i;i=function(){var h=Vo(a);c.call(h)}}ua(e,a,t,i)}else a=U_(n,e,t,i,r);return Vo(a)}zp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xi(e.pendingLanes);n!==0&&($u(e,n|1),He(e,de()),!(X&6)&&(Jr=de()+500,Ln()))}break;case 13:sr(function(){var r=Wt(t,1);if(r!==null){var i=Me();mt(r,t,1,i)}}),Sc(t,1)}};Bu=function(t){if(t.tag===13){var e=Wt(t,134217728);if(e!==null){var n=Me();mt(e,t,134217728,n)}Sc(t,134217728)}};$p=function(t){if(t.tag===13){var e=Tn(t),n=Wt(t,e);if(n!==null){var r=Me();mt(n,t,e,r)}Sc(t,e)}};Bp=function(){return Q};Hp=function(t,e){var n=Q;try{return Q=t,e()}finally{Q=n}};bl=function(t,e,n){switch(e){case"input":if(Dl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=na(r);if(!i)throw Error(D(90));Sp(r),Dl(r,i)}}}break;case"textarea":Ip(t,n);break;case"select":e=n.value,e!=null&&Or(t,!!n.multiple,e,!1)}};Np=mc;xp=sr;var F_={usingClientEntryPoint:!1,Events:[gs,Tr,na,Pp,Rp,mc]},Pi={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V_={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Lp(t),t===null?null:t.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||j_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qs.isDisabled&&qs.supportsFiber)try{Qo=qs.inject(V_),Rt=qs}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_;Xe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ic(e))throw Error(D(200));return M_(t,e,null,n)};Xe.createRoot=function(t,e){if(!Ic(t))throw Error(D(299));var n=!1,r="",i=fm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=_c(t,1,!1,null,null,n,!1,r,i),t[Ht]=e.current,es(t.nodeType===8?t.parentNode:t),new Ec(e)};Xe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(D(188)):(t=Object.keys(t).join(","),Error(D(268,t)));return t=Lp(e),t=t===null?null:t.stateNode,t};Xe.flushSync=function(t){return sr(t)};Xe.hydrate=function(t,e,n){if(!ha(e))throw Error(D(200));return fa(null,t,e,!0,n)};Xe.hydrateRoot=function(t,e,n){if(!Ic(t))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=fm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hm(e,null,t,1,n??null,i,!1,o,a),t[Ht]=e.current,es(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ca(e)};Xe.render=function(t,e,n){if(!ha(e))throw Error(D(200));return fa(null,t,e,!1,n)};Xe.unmountComponentAtNode=function(t){if(!ha(t))throw Error(D(40));return t._reactRootContainer?(sr(function(){fa(null,null,t,!1,function(){t._reactRootContainer=null,t[Ht]=null})}),!0):!1};Xe.unstable_batchedUpdates=mc;Xe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ha(n))throw Error(D(200));if(t==null||t._reactInternals===void 0)throw Error(D(38));return fa(t,e,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function dm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dm)}catch(t){console.error(t)}}dm(),dp.exports=Xe;var b_=dp.exports,nd=b_;Al.createRoot=nd.createRoot,Al.hydrateRoot=nd.hydrateRoot;const pm="",z_=`먼저 세 가지만 확인하세요.

1. 돈: 시급 또는 월급이 숫자로 적혀 있는지 봅니다.
2. 시간: 일하는 요일, 시작 시간, 끝 시간을 봅니다.
3. 쉬는 시간: 하루에 얼마나 쉬는지 확인합니다.

모르는 말이 있으면 바로 서명하지 말고 "이 문장을 쉽게 설명해주세요"라고 물어보세요.
확인 출처: 법제처 찾기 쉬운 생활법률, 고용노동부 근로계약 안내`;function $_(t){var n,r,i;const e=(i=(r=(n=t==null?void 0:t.candidates)==null?void 0:n[0])==null?void 0:r.content)==null?void 0:i.parts;return Array.isArray(e)?e.map(o=>o.text||"").join(`
`).trim():(t==null?void 0:t.text)||(t==null?void 0:t.raw)||""}async function gm(t){try{const e=await fetch(`${pm}/api/gemini/generate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:t})});if(!e.ok){const r=await e.text();throw new Error(r)}const n=await e.json();return n!=null&&n.text?n.text:n!=null&&n.raw?$_(n.raw)||JSON.stringify(n.raw,null,2):JSON.stringify(n,null,2)}catch{return`${z_}

데모 모드: Gemini 키는 프런트에 넣지 않습니다. 서버 프록시(/api/gemini/generate)가 켜지면 실제 응답으로 바뀝니다.`}}async function B_(t){const e=t.trim();if(!e)return"검색할 단어를 입력해주세요.";const n=await H_(e);return n||`${e}: 데모 뜻입니다. 실제 뜻은 서버 프록시(/api/dictionary/define)가 켜지면 국립국어원 표준국어대사전 API로 확인합니다.`}async function H_(t){try{const e=await fetch(`${pm}/api/dictionary/define?word=${encodeURIComponent(t)}`);if(!e.ok)return null;const n=await e.json();return typeof(n==null?void 0:n.raw)=="string"?n.raw:n!=null&&n.raw?W_(n.raw,t):JSON.stringify(n,null,2)}catch{return null}}function W_(t,e){var o,a;const n=Array.isArray((o=t==null?void 0:t.channel)==null?void 0:o.item)?t.channel.item[0]:(a=t==null?void 0:t.channel)==null?void 0:a.item,r=Array.isArray(n==null?void 0:n.sense)?n.sense[0]:n==null?void 0:n.sense,i=(r==null?void 0:r.definition)||(n==null?void 0:n.definition);return i?`${(n==null?void 0:n.word)||e}: ${i}`:JSON.stringify(t,null,2)}const G_=`너는 디딤돌 앱의 AI 도우미다.
- 초등 고학년도 이해할 수 있는 쉬운 한국어를 쓴다.
- 한 답변에는 핵심 3단계만 먼저 말한다.
- 법률, 계약, 돈, 안전 질문은 "확인해야 할 출처"를 함께 말한다.
- 사용자가 위험한 요구를 받았을 가능성이 있으면 혼자 결정하지 말고 보호자/경찰/공식 기관 확인을 권한다.`;function K_(){const[t,e]=ue.useState("계약서에 서명하라고 하는데 무엇을 봐야 해?"),[n,r]=ue.useState([{role:"assistant",text:"안녕하세요. 어려운 말은 쉽게 바꾸고, 해야 할 일은 작은 순서로 나눠서 알려드릴게요."}]),[i,o]=ue.useState(!1),a=ue.useRef(null);ue.useEffect(()=>{var h;(h=a.current)==null||h.scrollIntoView({behavior:"smooth",block:"end"})},[n,i]);const c=async()=>{const h=t.trim();if(!(!h||i)){r(d=>[...d,{role:"user",text:h}]),e(""),o(!0);try{const d=await gm(`${G_}

사용자 질문: ${h}`);r(T=>[...T,{role:"assistant",text:d}])}catch(d){r(T=>[...T,{role:"assistant",text:(d==null?void 0:d.message)||"답변을 가져오지 못했습니다. API 키와 서버 프록시 설정을 확인해주세요."}])}finally{o(!1)}}};return R.jsxs("div",{className:"gemini-chat-card",children:[R.jsxs("div",{className:"chat-header",children:[R.jsx("h3",{children:"팩트체크 AI 대화"}),R.jsx("p",{children:"계약, 돈, 안전 질문은 쉬운 답변과 확인 출처를 함께 보여줍니다."})]}),R.jsxs("div",{className:"chat-window",children:[n.map((h,d)=>R.jsx("div",{className:`chat-bubble ${h.role==="user"?"chat-user":"chat-assistant"}`,children:R.jsx("p",{children:h.text})},`${h.role}-${d}`)),i&&R.jsx("div",{className:"chat-bubble chat-assistant",children:R.jsx("p",{children:"답변을 만들고 있습니다..."})}),R.jsx("div",{ref:a})]}),R.jsxs("div",{className:"chat-controls",children:[R.jsx("input",{type:"text",value:t,onChange:h=>e(h.target.value),onKeyDown:h=>h.key==="Enter"&&c(),placeholder:"질문을 짧게 입력하세요",className:"chat-input",disabled:i}),R.jsx("button",{type:"button",onClick:c,disabled:i||!t.trim(),children:i?"생성 중":"전송"})]})]})}const q_=()=>{};var rd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},J_=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],a=t[n++],c=t[n++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],a=i+1<t.length,c=a?t[i+1]:0,h=i+2<t.length,d=h?t[i+2]:0,T=o>>2,E=(o&3)<<4|c>>4;let A=(c&15)<<2|d>>6,O=d&63;h||(O=64,a||(A=64)),r.push(n[T],n[E],n[A],n[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):J_(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const E=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||c==null||d==null||E==null)throw new X_;const A=o<<2|c>>4;if(r.push(A),d!==64){const O=c<<4&240|d>>2;if(r.push(O),E!==64){const x=d<<6&192|E;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class X_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Y_=function(t){const e=mm(t);return ym.encodeByteArray(e,!0)},bo=function(t){return Y_(t).replace(/\./g,"")},vm=function(t){try{return ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=()=>Q_().__FIREBASE_DEFAULTS__,e0=()=>{if(typeof process>"u"||typeof rd>"u")return;const t=rd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},t0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vm(t[1]);return e&&JSON.parse(e)},Tc=()=>{try{return q_()||Z_()||e0()||t0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wm=t=>{var e,n;return(n=(e=Tc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},n0=t=>{const e=wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_m=()=>{var t;return(t=Tc())==null?void 0:t.config},Sm=t=>{var e;return(e=Tc())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bo(JSON.stringify(n)),bo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function s0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function o0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kc(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function a0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function l0(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ac(){try{return typeof indexedDB=="object"}catch{return!1}}function Cc(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}function Em(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=u0,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fr.prototype.create)}}class fr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?c0(o,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new wt(i,c,r)}}function c0(t,e){return t.replace(h0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const h0=/\{\$([^}]+)}/g;function f0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],a=e[i];if(id(o)&&id(a)){if(!Nn(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function id(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function d0(t,e){const n=new p0(t,e);return n.subscribe.bind(n)}class p0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");g0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pl),i.error===void 0&&(i.error=pl),i.complete===void 0&&(i.complete=pl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function g0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pl(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=1e3,y0=2,v0=4*60*60*1e3,w0=.5;function sd(t,e=m0,n=y0){const r=e*Math.pow(n,t),i=Math.round(w0*r*(Math.random()-.5)*2);return Math.min(v0,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Im(t){return(await fetch(t,{credentials:"include"})).ok}class vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new r0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(E0(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:S0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function S0(t){return t===Bn?void 0:t}function E0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new _0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const T0={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},k0=Y.INFO,A0={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},C0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=A0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=k0,this._logHandler=C0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?T0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const P0=(t,e)=>e.some(n=>t instanceof n);let od,ad;function R0(){return od||(od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function N0(){return ad||(ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tm=new WeakMap,wu=new WeakMap,km=new WeakMap,gl=new WeakMap,Pc=new WeakMap;function x0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{n(An(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Tm.set(n,t)}).catch(()=>{}),Pc.set(e,t),e}function O0(t){if(wu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});wu.set(t,e)}let _u={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||km.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function D0(t){_u=t(_u)}function L0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ml(this),e,...n);return km.set(r,e.sort?e.sort():[e]),An(r)}:N0().includes(t)?function(...e){return t.apply(ml(this),e),An(Tm.get(this))}:function(...e){return An(t.apply(ml(this),e))}}function M0(t){return typeof t=="function"?L0(t):(t instanceof IDBTransaction&&O0(t),P0(t,R0())?new Proxy(t,_u):t)}function An(t){if(t instanceof IDBRequest)return x0(t);if(gl.has(t))return gl.get(t);const e=M0(t);return e!==t&&(gl.set(t,e),Pc.set(e,t)),e}const ml=t=>Pc.get(t);function Am(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(t,e),c=An(a);return r&&a.addEventListener("upgradeneeded",h=>{r(An(a.result),h.oldVersion,h.newVersion,An(a.transaction),h)}),n&&a.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const j0=["get","getKey","getAll","getAllKeys","count"],U0=["put","add","delete","clear"],yl=new Map;function ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yl.get(e))return yl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=U0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||j0.includes(n)))return;const o=async function(a,...c){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),i&&h.done]))[0]};return yl.set(e,o),o}D0(t=>({...t,get:(e,n,r)=>ld(e,n)||t.get(e,n,r),has:(e,n)=>!!ld(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(V0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function V0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Su="@firebase/app",ud="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new pa("@firebase/app"),b0="@firebase/app-compat",z0="@firebase/analytics-compat",$0="@firebase/analytics",B0="@firebase/app-check-compat",H0="@firebase/app-check",W0="@firebase/auth",G0="@firebase/auth-compat",K0="@firebase/database",q0="@firebase/data-connect",J0="@firebase/database-compat",X0="@firebase/functions",Y0="@firebase/functions-compat",Q0="@firebase/installations",Z0="@firebase/installations-compat",eS="@firebase/messaging",tS="@firebase/messaging-compat",nS="@firebase/performance",rS="@firebase/performance-compat",iS="@firebase/remote-config",sS="@firebase/remote-config-compat",oS="@firebase/storage",aS="@firebase/storage-compat",lS="@firebase/firestore",uS="@firebase/ai",cS="@firebase/firestore-compat",hS="firebase",fS="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="[DEFAULT]",dS={[Su]:"fire-core",[b0]:"fire-core-compat",[$0]:"fire-analytics",[z0]:"fire-analytics-compat",[H0]:"fire-app-check",[B0]:"fire-app-check-compat",[W0]:"fire-auth",[G0]:"fire-auth-compat",[K0]:"fire-rtdb",[q0]:"fire-data-connect",[J0]:"fire-rtdb-compat",[X0]:"fire-fn",[Y0]:"fire-fn-compat",[Q0]:"fire-iid",[Z0]:"fire-iid-compat",[eS]:"fire-fcm",[tS]:"fire-fcm-compat",[nS]:"fire-perf",[rS]:"fire-perf-compat",[iS]:"fire-rc",[sS]:"fire-rc-compat",[oS]:"fire-gcs",[aS]:"fire-gcs-compat",[lS]:"fire-fst",[cS]:"fire-fst-compat",[uS]:"fire-vertex","fire-js":"fire-js",[hS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,pS=new Map,Iu=new Map;function cd(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dt(t){const e=t.name;if(Iu.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Iu.set(e,t);for(const n of zo.values())cd(n,t);for(const n of pS.values())cd(n,t);return!0}function dr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ct(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cn=new fr("app","Firebase",gS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=fS;function Cm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Eu,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Cn.create("bad-app-name",{appName:String(i)});if(n||(n=_m()),!n)throw Cn.create("no-options");const o=zo.get(i);if(o){if(Nn(n,o.options)&&Nn(r,o.config))return o;throw Cn.create("duplicate-app",{appName:i})}const a=new I0(i);for(const h of Iu.values())a.addComponent(h);const c=new mS(n,r,a);return zo.set(i,c),c}function Rc(t=Eu){const e=zo.get(t);if(!e&&t===Eu&&_m())return Cm();if(!e)throw Cn.create("no-app",{appName:t});return e}function it(t,e,n){let r=dS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}Dt(new vt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS="firebase-heartbeat-database",vS=1,us="firebase-heartbeat-store";let vl=null;function Pm(){return vl||(vl=Am(yS,vS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(us)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),vl}async function wS(t){try{const n=(await Pm()).transaction(us),r=await n.objectStore(us).get(Rm(t));return await n.done,r}catch(e){if(e instanceof wt)Kt.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function hd(t,e){try{const r=(await Pm()).transaction(us,"readwrite");await r.objectStore(us).put(e,Rm(t)),await r.done}catch(n){if(n instanceof wt)Kt.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(r.message)}}}function Rm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=1024,SS=30;class ES{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=fd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>SS){const a=kS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Kt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fd(),{heartbeatsToSend:r,unsentEntries:i}=IS(this._heartbeatsCache.heartbeats),o=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Kt.warn(n),""}}}function fd(){return new Date().toISOString().substring(0,10)}function IS(t,e=_S){const n=[];let r=t.slice();for(const i of t){const o=n.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),dd(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ac()?Cc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return hd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function dd(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}function kS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(t){Dt(new vt("platform-logger",e=>new F0(e),"PRIVATE")),Dt(new vt("heartbeat",e=>new ES(e),"PRIVATE")),it(Su,ud,t),it(Su,ud,"esm2020"),it("fire-js","")}AS("");var CS="firebase",PS="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it(CS,PS,"app");const Nm="@firebase/installations",Nc="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=1e4,Om=`w:${Nc}`,Dm="FIS_v2",RS="https://firebaseinstallations.googleapis.com/v1",NS=60*60*1e3,xS="installations",OS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},or=new fr(xS,OS,DS);function Lm(t){return t instanceof wt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm({projectId:t}){return`${RS}/projects/${t}/installations`}function jm(t){return{token:t.token,requestStatus:2,expiresIn:MS(t.expiresIn),creationTime:Date.now()}}async function Um(t,e){const r=(await e.json()).error;return or.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fm({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function LS(t,{refreshToken:e}){const n=Fm(t);return n.append("Authorization",jS(e)),n}async function Vm(t){const e=await t();return e.status>=500&&e.status<600?t():e}function MS(t){return Number(t.replace("s","000"))}function jS(t){return`${Dm} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Mm(t),i=Fm(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:n,authVersion:Dm,appId:t.appId,sdkVersion:Om},c={method:"POST",headers:i,body:JSON.stringify(a)},h=await Vm(()=>fetch(r,c));if(h.ok){const d=await h.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:jm(d.authToken)}}else throw await Um("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS=/^[cdef][\w-]{21}$/,Tu="";function bS(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zS(t);return VS.test(n)?n:Tu}catch{return Tu}}function zS(t){return FS(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Map;function $m(t,e){const n=ga(t);Bm(n,e),$S(n,e)}function Bm(t,e){const n=zm.get(t);if(n)for(const r of n)r(e)}function $S(t,e){const n=BS();n&&n.postMessage({key:t,fid:e}),HS()}let qn=null;function BS(){return!qn&&"BroadcastChannel"in self&&(qn=new BroadcastChannel("[Firebase] FID Change"),qn.onmessage=t=>{Bm(t.data.key,t.data.fid)}),qn}function HS(){zm.size===0&&qn&&(qn.close(),qn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="firebase-installations-database",GS=1,ar="firebase-installations-store";let wl=null;function xc(){return wl||(wl=Am(WS,GS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ar)}}})),wl}async function $o(t,e){const n=ga(t),i=(await xc()).transaction(ar,"readwrite"),o=i.objectStore(ar),a=await o.get(n);return await o.put(e,n),await i.done,(!a||a.fid!==e.fid)&&$m(t,e.fid),e}async function Hm(t){const e=ga(t),r=(await xc()).transaction(ar,"readwrite");await r.objectStore(ar).delete(e),await r.done}async function ma(t,e){const n=ga(t),i=(await xc()).transaction(ar,"readwrite"),o=i.objectStore(ar),a=await o.get(n),c=e(a);return c===void 0?await o.delete(n):await o.put(c,n),await i.done,c&&(!a||a.fid!==c.fid)&&$m(t,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(t){let e;const n=await ma(t.appConfig,r=>{const i=KS(r),o=qS(t,i);return e=o.registrationPromise,o.installationEntry});return n.fid===Tu?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function KS(t){const e=t||{fid:bS(),registrationStatus:0};return Wm(e)}function qS(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(or.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=JS(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XS(t)}:{installationEntry:e}}async function JS(t,e){try{const n=await US(t,e);return $o(t.appConfig,n)}catch(n){throw Lm(n)&&n.customData.serverCode===409?await Hm(t.appConfig):await $o(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function XS(t){let e=await pd(t.appConfig);for(;e.registrationStatus===1;)await bm(100),e=await pd(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Oc(t);return r||n}return e}function pd(t){return ma(t,e=>{if(!e)throw or.create("installation-not-found");return Wm(e)})}function Wm(t){return YS(t)?{fid:t.fid,registrationStatus:0}:t}function YS(t){return t.registrationStatus===1&&t.registrationTime+xm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QS({appConfig:t,heartbeatServiceProvider:e},n){const r=ZS(t,n),i=LS(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Om,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(a)},h=await Vm(()=>fetch(r,c));if(h.ok){const d=await h.json();return jm(d)}else throw await Um("Generate Auth Token",h)}function ZS(t,{fid:e}){return`${Mm(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dc(t,e=!1){let n;const r=await ma(t.appConfig,o=>{if(!Gm(o))throw or.create("not-registered");const a=o.authToken;if(!e&&nE(a))return o;if(a.requestStatus===1)return n=eE(t,e),o;{if(!navigator.onLine)throw or.create("app-offline");const c=iE(o);return n=tE(t,c),c}});return n?await n:r.authToken}async function eE(t,e){let n=await gd(t.appConfig);for(;n.authToken.requestStatus===1;)await bm(100),n=await gd(t.appConfig);const r=n.authToken;return r.requestStatus===0?Dc(t,e):r}function gd(t){return ma(t,e=>{if(!Gm(e))throw or.create("not-registered");const n=e.authToken;return sE(n)?{...e,authToken:{requestStatus:0}}:e})}async function tE(t,e){try{const n=await QS(t,e),r={...e,authToken:n};return await $o(t.appConfig,r),n}catch(n){if(Lm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hm(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await $o(t.appConfig,r)}throw n}}function Gm(t){return t!==void 0&&t.registrationStatus===2}function nE(t){return t.requestStatus===2&&!rE(t)}function rE(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+NS}function iE(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function sE(t){return t.requestStatus===1&&t.requestTime+xm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oE(t){const e=t,{installationEntry:n,registrationPromise:r}=await Oc(e);return r?r.catch(console.error):Dc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e=!1){const n=t;return await lE(n),(await Dc(n,e)).token}async function lE(t){const{registrationPromise:e}=await Oc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){if(!t||!t.options)throw _l("App Configuration");if(!t.name)throw _l("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw _l(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function _l(t){return or.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km="installations",cE="installations-internal",hE=t=>{const e=t.getProvider("app").getImmediate(),n=uE(e),r=dr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fE=t=>{const e=t.getProvider("app").getImmediate(),n=dr(e,Km).getImmediate();return{getId:()=>oE(n),getToken:i=>aE(n,i)}};function dE(){Dt(new vt(Km,hE,"PUBLIC")),Dt(new vt(cE,fE,"PRIVATE"))}dE();it(Nm,Nc);it(Nm,Nc,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="analytics",pE="firebase_id",gE="origin",mE=60*1e3,yE="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Lc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new pa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qe=new fr("analytics","Analytics",vE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){if(!t.startsWith(Lc)){const e=qe.create("invalid-gtag-resource",{gtagURL:t});return je.warn(e.message),""}return t}function qm(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _E(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function SE(t,e){const n=_E("firebase-js-sdk-policy",{createScriptURL:wE}),r=document.createElement("script"),i=`${Lc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function EE(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function IE(t,e,n,r,i,o){const a=r[i];try{if(a)await e[a];else{const h=(await qm(n)).find(d=>d.measurementId===i);h&&await e[h.appId]}}catch(c){je.error(c)}t("config",i,o)}async function TE(t,e,n,r,i){try{let o=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const c=await qm(n);for(const h of a){const d=c.find(E=>E.measurementId===h),T=d&&e[d.appId];if(T)o.push(T);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",r,i||{})}catch(o){je.error(o)}}function kE(t,e,n,r){async function i(o,...a){try{if(o==="event"){const[c,h]=a;await TE(t,e,n,c,h)}else if(o==="config"){const[c,h]=a;await IE(t,e,n,r,c,h)}else if(o==="consent"){const[c,h]=a;t("consent",c,h)}else if(o==="get"){const[c,h,d]=a;t("get",c,h,d)}else if(o==="set"){const[c]=a;t("set",c)}else t(o,...a)}catch(c){je.error(c)}}return i}function AE(t,e,n,r,i){let o=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=kE(o,t,e,n),{gtagCore:o,wrappedGtag:window[i]}}function CE(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Lc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=30,RE=1e3;class NE{constructor(e={},n=RE){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jm=new NE;function xE(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function OE(t){var a;const{appId:e,apiKey:n}=t,r={method:"GET",headers:xE(n)},i=yE.replace("{app-id}",e),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let c="";try{const h=await o.json();(a=h.error)!=null&&a.message&&(c=h.error.message)}catch{}throw qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function DE(t,e=Jm,n){const{appId:r,apiKey:i,measurementId:o}=t.options;if(!r)throw qe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw qe.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new jE;return setTimeout(async()=>{c.abort()},mE),Xm({appId:r,apiKey:i,measurementId:o},a,c,e)}async function Xm(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Jm){var c;const{appId:o,measurementId:a}=t;try{await LE(r,e)}catch(h){if(a)return je.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const h=await OE(t);return i.deleteThrottleMetadata(o),h}catch(h){const d=h;if(!ME(d)){if(i.deleteThrottleMetadata(o),a)return je.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:o,measurementId:a};throw h}const T=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?sd(n,i.intervalMillis,PE):sd(n,i.intervalMillis),E={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return i.setThrottleMetadata(o,E),je.debug(`Calling attemptFetch again in ${T} millis`),Xm(t,E,r,i)}}function LE(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(o),r(qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function ME(t){if(!(t instanceof wt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class jE{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function UE(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const o=await e,a={...r,send_to:o};t("event",n,a)}}async function FE(t,e,n,r){if(r&&r.global){const i={};for(const o of Object.keys(n))i[`user_properties.${o}`]=n[o];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(){if(Ac())try{await Cc()}catch(t){return je.warn(qe.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return je.warn(qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bE(t,e,n,r,i,o,a){const c=DE(t);c.then(A=>{n[A.measurementId]=A.appId,t.options.measurementId&&A.measurementId!==t.options.measurementId&&je.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>je.error(A)),e.push(c);const h=VE().then(A=>{if(A)return r.getId()}),[d,T]=await Promise.all([c,h]);CE(o)||SE(o,d.measurementId),i("js",new Date);const E=(a==null?void 0:a.config)??{};return E[gE]="firebase",E.update=!0,T!=null&&(E[pE]=T),i("config",d.measurementId,E),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this.app=e}_delete(){return delete Fr[this.app.options.appId],Promise.resolve()}}let Fr={},md=[];const yd={};let Sl="dataLayer",$E="gtag",vd,Mc,wd=!1;function BE(){const t=[];if(kc()&&t.push("This is a browser extension environment."),Em()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=qe.create("invalid-analytics-context",{errorInfo:e});je.warn(n.message)}}function HE(t,e,n){BE();const r=t.options.appId;if(!r)throw qe.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)je.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qe.create("no-api-key");if(Fr[r]!=null)throw qe.create("already-exists",{id:r});if(!wd){EE(Sl);const{wrappedGtag:o,gtagCore:a}=AE(Fr,md,yd,Sl,$E);Mc=o,vd=a,wd=!0}return Fr[r]=bE(t,md,yd,e,vd,Sl,n),new zE(t)}function WE(t=Rc()){t=Lt(t);const e=dr(t,Bo);return e.isInitialized()?e.getImmediate():GE(t)}function GE(t,e={}){const n=dr(t,Bo);if(n.isInitialized()){const i=n.getImmediate();if(Nn(e,n.getOptions()))return i;throw qe.create("already-initialized")}return n.initialize({options:e})}async function KE(){if(kc()||!Em()||!Ac())return!1;try{return await Cc()}catch{return!1}}function qE(t,e,n){t=Lt(t),FE(Mc,Fr[t.app.options.appId],e,n).catch(r=>je.error(r))}function JE(t,e,n,r){t=Lt(t),UE(Mc,Fr[t.app.options.appId],e,n,r).catch(i=>je.error(i))}const _d="@firebase/analytics",Sd="0.10.22";function XE(){Dt(new vt(Bo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return HE(r,i,n)},"PUBLIC")),Dt(new vt("analytics-internal",t,"PRIVATE")),it(_d,Sd),it(_d,Sd,"esm2020");function t(e){try{const n=e.getProvider(Bo).getImmediate();return{logEvent:(r,i,o)=>JE(n,r,i,o),setUserProperties:(r,i)=>qE(n,r,i)}}catch(n){throw qe.create("interop-component-reg-failed",{reason:n})}}}XE();function Ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YE=Ym,Qm=new fr("auth","Firebase",Ym());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new pa("@firebase/auth");function QE(t,...e){Ho.logLevel<=Y.WARN&&Ho.warn(`Auth (${ti}): ${t}`,...e)}function co(t,...e){Ho.logLevel<=Y.ERROR&&Ho.error(`Auth (${ti}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t,...e){throw jc(t,...e)}function xt(t,...e){return jc(t,...e)}function Zm(t,e,n){const r={...YE(),[e]:n};return new fr("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return Zm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Qm.create(t,...e)}function z(t,e,...n){if(!t)throw jc(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw co(e),new Error(e)}function Jt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function ZE(){return Ed()==="http:"||Ed()==="https:"}function Ed(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZE()||kc()||"connection"in navigator)?navigator.onLine:!0}function tI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jt(n>e,"Short delay should be less than long delay!"),this.isMobile=s0()||a0()}get(){return eI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iI=new vs(3e4,6e4);function Fc(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ni(t,e,n,r,i={}){return ty(t,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const c=ys({key:t.config.apiKey,...a}).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:h,...o};return o0()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&da(t.emulatorConfig.host)&&(d.credentials="include"),ey.fetch()(await ny(t,t.config.apiHost,n,c),d)})}async function ty(t,e,n){t._canInitEmulator=!1;const r={...nI,...e};try{const i=new oI(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw Js(t,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const c=o.ok?a.errorMessage:a.error.message,[h,d]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Js(t,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw Js(t,"email-already-in-use",a);if(h==="USER_DISABLED")throw Js(t,"user-disabled",a);const T=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Zm(t,T,d);qt(t,T)}}catch(i){if(i instanceof wt)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function sI(t,e,n,r,i={}){const o=await ni(t,e,n,r,i);return"mfaPendingCredential"in o&&qt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function ny(t,e,n,r){const i=`${e}${n}?${r}`,o=t,a=o.config.emulator?Uc(t.config,i):`${t.config.apiScheme}://${i}`;return rI.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class oI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),iI.get())})}}function Js(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){return ni(t,"POST","/v1/accounts:delete",e)}async function Wo(t,e){return ni(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lI(t,e=!1){const n=Lt(t),r=await n.getIdToken(e),i=Vc(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:$i(El(i.auth_time)),issuedAtTime:$i(El(i.iat)),expirationTime:$i(El(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function El(t){return Number(t)*1e3}function Vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return co("JWT malformed, contained fewer than 3 sections"),null;try{const i=vm(n);return i?JSON.parse(i):(co("Failed to decode base64 JWT payload"),null)}catch(i){return co("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Id(t){const e=Vc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&uI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){var E;const e=t.auth,n=await t.getIdToken(),r=await cs(t,Wo(e,{idToken:n}));z(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=(E=i.providerUserInfo)!=null&&E.length?ry(i.providerUserInfo):[],a=fI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=c?h:!1,T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Au(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,T)}async function hI(t){const e=Lt(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ry(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e){const n=await ty(t,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,a=await ny(t,i,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:r};return t.emulatorConfig&&da(t.emulatorConfig.host)&&(h.credentials="include"),ey.fetch()(a,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pI(t,e){return ni(t,"POST","/v2/accounts:revokeToken",Fc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=Id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await dI(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,a=new Vr;return r&&(z(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(z(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new cI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Au(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cs(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lI(this,e)}reload(){return hI(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ct(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await cs(this,aI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,o=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,h=n._redirectEventId??void 0,d=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:E,emailVerified:A,isAnonymous:O,providerData:x,stsTokenManager:L}=n;z(E&&L,e,"internal-error");const b=Vr.fromJSON(this.name,L);z(typeof E=="string",e,"internal-error"),on(r,e.name),on(i,e.name),z(typeof A=="boolean",e,"internal-error"),z(typeof O=="boolean",e,"internal-error"),on(o,e.name),on(a,e.name),on(c,e.name),on(h,e.name),on(d,e.name),on(T,e.name);const S=new dt({uid:E,auth:e,email:i,emailVerified:A,displayName:r,isAnonymous:O,photoURL:a,phoneNumber:o,tenantId:c,stsTokenManager:b,createdAt:d,lastLoginAt:T});return x&&Array.isArray(x)&&(S.providerData=x.map(w=>({...w}))),h&&(S._redirectEventId=h),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vr;i.updateFromServerResponse(n);const o=new dt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Go(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?ry(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),c=new Vr;c.updateFromIdToken(r);const h=new dt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Au(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map;function zt(t){Jt(t instanceof Function,"Expected a class definition");let e=Td.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Td.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iy.type="NONE";const kd=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class br{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ho(this.userKey,i.apiKey,o),this.fullPersistenceKey=ho("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Wo(this.auth,{idToken:e}).catch(()=>{});return n?dt._fromGetAccountInfoResponse(this.auth,n,e):null}return dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new br(zt(kd),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||zt(kd);const a=ho(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const T=await d._get(a);if(T){let E;if(typeof T=="string"){const A=await Wo(e,{idToken:T}).catch(()=>{});if(!A)break;E=await dt._fromGetAccountInfoResponse(e,A,T)}else E=dt._fromJSON(e,T);d!==o&&(c=E),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new br(o,e,r):(o=h[0],c&&await o._set(a,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new br(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cy(e))return"Blackberry";if(hy(e))return"Webos";if(oy(e))return"Safari";if((e.includes("chrome/")||ay(e))&&!e.includes("edge/"))return"Chrome";if(uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sy(t=Ue()){return/firefox\//i.test(t)}function oy(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ay(t=Ue()){return/crios\//i.test(t)}function ly(t=Ue()){return/iemobile/i.test(t)}function uy(t=Ue()){return/android/i.test(t)}function cy(t=Ue()){return/blackberry/i.test(t)}function hy(t=Ue()){return/webos/i.test(t)}function bc(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gI(t=Ue()){var e;return bc(t)&&!!((e=window.navigator)!=null&&e.standalone)}function mI(){return l0()&&document.documentMode===10}function fy(t=Ue()){return bc(t)||uy(t)||hy(t)||cy(t)||/windows phone/i.test(t)||ly(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e=[]){let n;switch(t){case"Browser":n=Ad(Ue());break;case"Worker":n=`${Ad(Ue())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ti}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((a,c)=>{try{const h=e(o);a(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(t,e={}){return ni(t,"GET","/v2/passwordPolicy",Fc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=6;class _I{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cd(this),this.idTokenSubscription=new Cd(this),this.beforeStateQueue=new yI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zt(n)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await br.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Wo(this,{idToken:e}),r=await dt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Ct(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,c=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===c)&&(h!=null&&h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ct(this.app))return Promise.reject(Qn(this));const n=e?Lt(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ct(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ct(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vI(this),n=new _I(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await br.create(this,[zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{a||o(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(n);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&QE(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zc(t){return Lt(t)}class Cd{constructor(e){this.auth=e,this.observer=null,this.addObserver=d0(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function EI(t){$c=t}function II(t){return $c.loadJS(t)}function TI(){return $c.gapiScript}function kI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AI(t,e){const n=dr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Nn(o,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function CI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PI(t,e,n){const r=zc(t);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,o=py(e),{host:a,port:c}=RI(e),h=c===null?"":`:${c}`,d={url:`${o}//${a}${h}/`},T=Object.freeze({host:a,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(Nn(d,r.config.emulator)&&Nn(T,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=T,r.settings.appVerificationDisabledForTesting=!0,da(a)?Im(`${o}//${a}${h}`):NI()}function py(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RI(t){const e=py(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Pd(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Pd(a)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(t,e){return sI(t,"POST","/v1/accounts:signInWithIdp",Fc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="http://localhost";class lr extends gy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=n;if(!r||!i)return null;const a=new lr(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return zr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zr(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ys(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends my{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ws{constructor(){super("facebook.com")}static credential(e){return lr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lr._fromParams({providerId:dn.PROVIDER_ID,signInMethod:dn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return dn.credentialFromTaggedObject(e)}static credentialFromError(e){return dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return dn.credential(n,r)}catch{return null}}}dn.GOOGLE_SIGN_IN_METHOD="google.com";dn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ws{constructor(){super("github.com")}static credential(e){return lr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ws{constructor(){super("twitter.com")}static credential(e,n){return lr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await dt._fromIdTokenResponse(e,r,i),a=Rd(r);return new Xr({user:o,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Rd(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Rd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends wt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ko.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ko(e,n,r,i)}}function yy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ko._fromErrorAndOperation(t,o,e,r):o})}async function OI(t,e,n=!1){const r=await cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e,n=!1){const{auth:r}=t;if(Ct(r.app))return Promise.reject(Qn(r));const i="reauthenticate";try{const o=await cs(t,yy(r,i,e,t),n);z(o.idToken,r,"internal-error");const a=Vc(o.idToken);z(a,r,"internal-error");const{sub:c}=a;return z(t.uid===c,r,"user-mismatch"),Xr._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&qt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(t,e,n=!1){if(Ct(t.app))return Promise.reject(Qn(t));const r="signIn",i=await yy(t,r,e),o=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function MI(t,e,n,r){return Lt(t).onIdTokenChanged(e,n,r)}function jI(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}const qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI=1e3,FI=10;class wy extends vy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,h)=>{this.notifyListeners(a,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);mI()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wy.type="LOCAL";const VI=wy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends vy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}_y.type="SESSION";const Sy=_y;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async d=>d(n.origin,o)),h=await bI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((c,h)=>{const d=Bc("",20);i.port1.start();const T=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){const A=E;if(A.data.eventId===d)switch(A.data.status){case"ack":clearTimeout(T),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(A.data.response);break;default:clearTimeout(T),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(){return window}function $I(t){Ot().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){return typeof Ot().WorkerGlobalScope<"u"&&typeof Ot().importScripts=="function"}async function BI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function WI(){return Ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="firebaseLocalStorageDb",GI=1,Jo="firebaseLocalStorage",Ty="fbase_key";class _s{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function va(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function KI(){const t=indexedDB.deleteDatabase(Iy);return new _s(t).toPromise()}function Cu(){const t=indexedDB.open(Iy,GI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:Ty})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await KI(),e(await Cu()))})})}async function Nd(t,e,n){const r=va(t,!0).put({[Ty]:e,value:n});return new _s(r).toPromise()}async function qI(t,e){const n=va(t,!1).get(e),r=await new _s(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=va(t,!0).delete(e);return new _s(n).toPromise()}const JI=800,XI=3;class ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(WI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await BI(),!this.activeServiceWorker)return;this.sender=new zI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cu();return await Nd(e,qo,"1"),await xd(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=va(i,!1).getAll();return new _s(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ky.type="LOCAL";const YI=ky;new vs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t,e){return e?zt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc extends gy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZI(t){return LI(t.auth,new Hc(t),t.bypassAuthState)}function e1(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),DI(n,new Hc(t),t.bypassAuthState)}async function t1(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),OI(n,new Hc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:a,type:c}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZI;case"linkViaPopup":case"linkViaRedirect":return t1;case"reauthViaPopup":case"reauthViaRedirect":return e1;default:qt(this.auth,"internal-error")}}resolve(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new vs(2e3,1e4);class xr extends Ay{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Jt(this.filter.length===1,"Popup operations only handle one event");const e=Bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n1.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1="pendingRedirect",fo=new Map;class i1 extends Ay{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await s1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s1(t,e){const n=l1(e),r=a1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function o1(t,e){fo.set(t._key(),e)}function a1(t){return zt(t._redirectPersistence)}function l1(t){return ho(r1,t.config.apiKey,t.name)}async function u1(t,e,n=!1){if(Ct(t.app))return Promise.reject(Qn(t));const r=zc(t),i=QI(r,e),a=await new i1(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=10*60*1e3;class h1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Cy(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e={}){return ni(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g1=/^https?/;async function m1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d1(t);for(const n of e)try{if(y1(n))return}catch{}qt(t,"unauthorized-domain")}function y1(t){const e=ku(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!g1.test(n))return!1;if(p1.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=new vs(3e4,6e4);function Dd(){const t=Ot().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w1(t){return new Promise((e,n)=>{var i,o,a;function r(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(xt(t,"network-request-failed"))},timeout:v1.get()})}if((o=(i=Ot().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=Ot().gapi)!=null&&a.load)r();else{const c=kI("iframefcb");return Ot()[c]=()=>{gapi.load?r():n(xt(t,"network-request-failed"))},II(`${TI()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw po=null,e})}let po=null;function _1(t){return po=po||w1(t),po}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=new vs(5e3,15e3),E1="__/auth/iframe",I1="emulator/auth/iframe",T1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},k1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A1(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uc(e,I1):`https://${t.config.authDomain}/${E1}`,r={apiKey:e.apiKey,appName:t.name,v:ti},i=k1.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${ys(r).slice(1)}`}async function C1(t){const e=await _1(t),n=Ot().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:A1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:T1,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=xt(t,"network-request-failed"),c=Ot().setTimeout(()=>{o(a)},S1.get());function h(){Ot().clearTimeout(c),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},R1=500,N1=600,x1="_blank",O1="http://localhost";class Ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D1(t,e,n,r=R1,i=N1){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h={...P1,width:r.toString(),height:i.toString(),top:o,left:a},d=Ue().toLowerCase();n&&(c=ay(d)?x1:n),sy(d)&&(e=e||O1,h.scrollbars="yes");const T=Object.entries(h).reduce((A,[O,x])=>`${A}${O}=${x},`,"");if(gI(d)&&c!=="_self")return L1(e||"",c),new Ld(null);const E=window.open(e||"",c,T);z(E,t,"popup-blocked");try{E.focus()}catch{}return new Ld(E)}function L1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1="__/auth/handler",j1="emulator/auth/handler",U1=encodeURIComponent("fac");async function Md(t,e,n,r,i,o){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ti,eventId:i};if(e instanceof my){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",f0(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,E]of Object.entries({}))a[T]=E}if(e instanceof ws){const T=e.getScopes().filter(E=>E!=="");T.length>0&&(a.scopes=T.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const T of Object.keys(c))c[T]===void 0&&delete c[T];const h=await t._getAppCheckToken(),d=h?`#${U1}=${encodeURIComponent(h)}`:"";return`${F1(t)}?${ys(c).slice(1)}${d}`}function F1({config:t}){return t.emulator?Uc(t,j1):`https://${t.authDomain}/${M1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il="webStorageSupport";class V1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sy,this._completeRedirectFn=u1,this._overrideRedirectResult=o1}async _openPopup(e,n,r,i){var a;Jt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Md(e,n,r,ku(),i);return D1(e,o,Bc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Md(e,n,r,ku(),i);return $I(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Jt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await C1(e),r=new h1(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Il,{type:Il},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[Il];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fy()||oy()||bc()}}const b1=V1;var jd="@firebase/auth",Ud="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function B1(t){Dt(new vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;z(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dy(t)},d=new SI(r,i,o,h);return CI(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dt(new vt("auth-internal",e=>{const n=zc(e.getProvider("auth").getImmediate());return(r=>new z1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),it(jd,Ud,$1(t)),it(jd,Ud,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=5*60,W1=Sm("authIdTokenMaxAge")||H1;let Fd=null;const G1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>W1)return;const i=n==null?void 0:n.token;Fd!==i&&(Fd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K1(t=Rc()){const e=dr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AI(t,{popupRedirectResolver:b1,persistence:[YI,VI,Sy]}),r=Sm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=G1(o.toString());jI(n,a,()=>a(n.currentUser)),MI(n,c=>a(c))}}const i=wm("auth");return i&&PI(n,`http://${i}`),n}function q1(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}EI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=xt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",q1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});B1("Browser");var Vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,p){function y(){}y.prototype=p.prototype,m.F=p.prototype,m.prototype=new y,m.prototype.constructor=m,m.D=function(v,_,k){for(var g=Array(arguments.length-2),J=2;J<arguments.length;J++)g[J-2]=arguments[J];return p.prototype[_].apply(v,g)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,p,y){y||(y=0);const v=Array(16);if(typeof p=="string")for(var _=0;_<16;++_)v[_]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(_=0;_<16;++_)v[_]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=m.g[0],y=m.g[1],_=m.g[2];let k=m.g[3],g;g=p+(k^y&(_^k))+v[0]+3614090360&4294967295,p=y+(g<<7&4294967295|g>>>25),g=k+(_^p&(y^_))+v[1]+3905402710&4294967295,k=p+(g<<12&4294967295|g>>>20),g=_+(y^k&(p^y))+v[2]+606105819&4294967295,_=k+(g<<17&4294967295|g>>>15),g=y+(p^_&(k^p))+v[3]+3250441966&4294967295,y=_+(g<<22&4294967295|g>>>10),g=p+(k^y&(_^k))+v[4]+4118548399&4294967295,p=y+(g<<7&4294967295|g>>>25),g=k+(_^p&(y^_))+v[5]+1200080426&4294967295,k=p+(g<<12&4294967295|g>>>20),g=_+(y^k&(p^y))+v[6]+2821735955&4294967295,_=k+(g<<17&4294967295|g>>>15),g=y+(p^_&(k^p))+v[7]+4249261313&4294967295,y=_+(g<<22&4294967295|g>>>10),g=p+(k^y&(_^k))+v[8]+1770035416&4294967295,p=y+(g<<7&4294967295|g>>>25),g=k+(_^p&(y^_))+v[9]+2336552879&4294967295,k=p+(g<<12&4294967295|g>>>20),g=_+(y^k&(p^y))+v[10]+4294925233&4294967295,_=k+(g<<17&4294967295|g>>>15),g=y+(p^_&(k^p))+v[11]+2304563134&4294967295,y=_+(g<<22&4294967295|g>>>10),g=p+(k^y&(_^k))+v[12]+1804603682&4294967295,p=y+(g<<7&4294967295|g>>>25),g=k+(_^p&(y^_))+v[13]+4254626195&4294967295,k=p+(g<<12&4294967295|g>>>20),g=_+(y^k&(p^y))+v[14]+2792965006&4294967295,_=k+(g<<17&4294967295|g>>>15),g=y+(p^_&(k^p))+v[15]+1236535329&4294967295,y=_+(g<<22&4294967295|g>>>10),g=p+(_^k&(y^_))+v[1]+4129170786&4294967295,p=y+(g<<5&4294967295|g>>>27),g=k+(y^_&(p^y))+v[6]+3225465664&4294967295,k=p+(g<<9&4294967295|g>>>23),g=_+(p^y&(k^p))+v[11]+643717713&4294967295,_=k+(g<<14&4294967295|g>>>18),g=y+(k^p&(_^k))+v[0]+3921069994&4294967295,y=_+(g<<20&4294967295|g>>>12),g=p+(_^k&(y^_))+v[5]+3593408605&4294967295,p=y+(g<<5&4294967295|g>>>27),g=k+(y^_&(p^y))+v[10]+38016083&4294967295,k=p+(g<<9&4294967295|g>>>23),g=_+(p^y&(k^p))+v[15]+3634488961&4294967295,_=k+(g<<14&4294967295|g>>>18),g=y+(k^p&(_^k))+v[4]+3889429448&4294967295,y=_+(g<<20&4294967295|g>>>12),g=p+(_^k&(y^_))+v[9]+568446438&4294967295,p=y+(g<<5&4294967295|g>>>27),g=k+(y^_&(p^y))+v[14]+3275163606&4294967295,k=p+(g<<9&4294967295|g>>>23),g=_+(p^y&(k^p))+v[3]+4107603335&4294967295,_=k+(g<<14&4294967295|g>>>18),g=y+(k^p&(_^k))+v[8]+1163531501&4294967295,y=_+(g<<20&4294967295|g>>>12),g=p+(_^k&(y^_))+v[13]+2850285829&4294967295,p=y+(g<<5&4294967295|g>>>27),g=k+(y^_&(p^y))+v[2]+4243563512&4294967295,k=p+(g<<9&4294967295|g>>>23),g=_+(p^y&(k^p))+v[7]+1735328473&4294967295,_=k+(g<<14&4294967295|g>>>18),g=y+(k^p&(_^k))+v[12]+2368359562&4294967295,y=_+(g<<20&4294967295|g>>>12),g=p+(y^_^k)+v[5]+4294588738&4294967295,p=y+(g<<4&4294967295|g>>>28),g=k+(p^y^_)+v[8]+2272392833&4294967295,k=p+(g<<11&4294967295|g>>>21),g=_+(k^p^y)+v[11]+1839030562&4294967295,_=k+(g<<16&4294967295|g>>>16),g=y+(_^k^p)+v[14]+4259657740&4294967295,y=_+(g<<23&4294967295|g>>>9),g=p+(y^_^k)+v[1]+2763975236&4294967295,p=y+(g<<4&4294967295|g>>>28),g=k+(p^y^_)+v[4]+1272893353&4294967295,k=p+(g<<11&4294967295|g>>>21),g=_+(k^p^y)+v[7]+4139469664&4294967295,_=k+(g<<16&4294967295|g>>>16),g=y+(_^k^p)+v[10]+3200236656&4294967295,y=_+(g<<23&4294967295|g>>>9),g=p+(y^_^k)+v[13]+681279174&4294967295,p=y+(g<<4&4294967295|g>>>28),g=k+(p^y^_)+v[0]+3936430074&4294967295,k=p+(g<<11&4294967295|g>>>21),g=_+(k^p^y)+v[3]+3572445317&4294967295,_=k+(g<<16&4294967295|g>>>16),g=y+(_^k^p)+v[6]+76029189&4294967295,y=_+(g<<23&4294967295|g>>>9),g=p+(y^_^k)+v[9]+3654602809&4294967295,p=y+(g<<4&4294967295|g>>>28),g=k+(p^y^_)+v[12]+3873151461&4294967295,k=p+(g<<11&4294967295|g>>>21),g=_+(k^p^y)+v[15]+530742520&4294967295,_=k+(g<<16&4294967295|g>>>16),g=y+(_^k^p)+v[2]+3299628645&4294967295,y=_+(g<<23&4294967295|g>>>9),g=p+(_^(y|~k))+v[0]+4096336452&4294967295,p=y+(g<<6&4294967295|g>>>26),g=k+(y^(p|~_))+v[7]+1126891415&4294967295,k=p+(g<<10&4294967295|g>>>22),g=_+(p^(k|~y))+v[14]+2878612391&4294967295,_=k+(g<<15&4294967295|g>>>17),g=y+(k^(_|~p))+v[5]+4237533241&4294967295,y=_+(g<<21&4294967295|g>>>11),g=p+(_^(y|~k))+v[12]+1700485571&4294967295,p=y+(g<<6&4294967295|g>>>26),g=k+(y^(p|~_))+v[3]+2399980690&4294967295,k=p+(g<<10&4294967295|g>>>22),g=_+(p^(k|~y))+v[10]+4293915773&4294967295,_=k+(g<<15&4294967295|g>>>17),g=y+(k^(_|~p))+v[1]+2240044497&4294967295,y=_+(g<<21&4294967295|g>>>11),g=p+(_^(y|~k))+v[8]+1873313359&4294967295,p=y+(g<<6&4294967295|g>>>26),g=k+(y^(p|~_))+v[15]+4264355552&4294967295,k=p+(g<<10&4294967295|g>>>22),g=_+(p^(k|~y))+v[6]+2734768916&4294967295,_=k+(g<<15&4294967295|g>>>17),g=y+(k^(_|~p))+v[13]+1309151649&4294967295,y=_+(g<<21&4294967295|g>>>11),g=p+(_^(y|~k))+v[4]+4149444226&4294967295,p=y+(g<<6&4294967295|g>>>26),g=k+(y^(p|~_))+v[11]+3174756917&4294967295,k=p+(g<<10&4294967295|g>>>22),g=_+(p^(k|~y))+v[2]+718787259&4294967295,_=k+(g<<15&4294967295|g>>>17),g=y+(k^(_|~p))+v[9]+3951481745&4294967295,m.g[0]=m.g[0]+p&4294967295,m.g[1]=m.g[1]+(_+(g<<21&4294967295|g>>>11))&4294967295,m.g[2]=m.g[2]+_&4294967295,m.g[3]=m.g[3]+k&4294967295}r.prototype.v=function(m,p){p===void 0&&(p=m.length);const y=p-this.blockSize,v=this.C;let _=this.h,k=0;for(;k<p;){if(_==0)for(;k<=y;)i(this,m,k),k+=this.blockSize;if(typeof m=="string"){for(;k<p;)if(v[_++]=m.charCodeAt(k++),_==this.blockSize){i(this,v),_=0;break}}else for(;k<p;)if(v[_++]=m[k++],_==this.blockSize){i(this,v),_=0;break}}this.h=_,this.o+=p},r.prototype.A=function(){var m=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);m[0]=128;for(var p=1;p<m.length-8;++p)m[p]=0;p=this.o*8;for(var y=m.length-8;y<m.length;++y)m[y]=p&255,p/=256;for(this.v(m),m=Array(16),p=0,y=0;y<4;++y)for(let v=0;v<32;v+=8)m[p++]=this.g[y]>>>v&255;return m};function o(m,p){var y=c;return Object.prototype.hasOwnProperty.call(y,m)?y[m]:y[m]=p(m)}function a(m,p){this.h=p;const y=[];let v=!0;for(let _=m.length-1;_>=0;_--){const k=m[_]|0;v&&k==p||(y[_]=k,v=!1)}this.g=y}var c={};function h(m){return-128<=m&&m<128?o(m,function(p){return new a([p|0],p<0?-1:0)}):new a([m|0],m<0?-1:0)}function d(m){if(isNaN(m)||!isFinite(m))return E;if(m<0)return b(d(-m));const p=[];let y=1;for(let v=0;m>=y;v++)p[v]=m/y|0,y*=4294967296;return new a(p,0)}function T(m,p){if(m.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(m.charAt(0)=="-")return b(T(m.substring(1),p));if(m.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(p,8));let v=E;for(let k=0;k<m.length;k+=8){var _=Math.min(8,m.length-k);const g=parseInt(m.substring(k,k+_),p);_<8?(_=d(Math.pow(p,_)),v=v.j(_).add(d(g))):(v=v.j(y),v=v.add(d(g)))}return v}var E=h(0),A=h(1),O=h(16777216);t=a.prototype,t.m=function(){if(L(this))return-b(this).m();let m=0,p=1;for(let y=0;y<this.g.length;y++){const v=this.i(y);m+=(v>=0?v:4294967296+v)*p,p*=4294967296}return m},t.toString=function(m){if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(x(this))return"0";if(L(this))return"-"+b(this).toString(m);const p=d(Math.pow(m,6));var y=this;let v="";for(;;){const _=N(y,p).g;y=S(y,_.j(p));let k=((y.g.length>0?y.g[0]:y.h)>>>0).toString(m);if(y=_,x(y))return k+v;for(;k.length<6;)k="0"+k;v=k+v}},t.i=function(m){return m<0?0:m<this.g.length?this.g[m]:this.h};function x(m){if(m.h!=0)return!1;for(let p=0;p<m.g.length;p++)if(m.g[p]!=0)return!1;return!0}function L(m){return m.h==-1}t.l=function(m){return m=S(this,m),L(m)?-1:x(m)?0:1};function b(m){const p=m.g.length,y=[];for(let v=0;v<p;v++)y[v]=~m.g[v];return new a(y,~m.h).add(A)}t.abs=function(){return L(this)?b(this):this},t.add=function(m){const p=Math.max(this.g.length,m.g.length),y=[];let v=0;for(let _=0;_<=p;_++){let k=v+(this.i(_)&65535)+(m.i(_)&65535),g=(k>>>16)+(this.i(_)>>>16)+(m.i(_)>>>16);v=g>>>16,k&=65535,g&=65535,y[_]=g<<16|k}return new a(y,y[y.length-1]&-2147483648?-1:0)};function S(m,p){return m.add(b(p))}t.j=function(m){if(x(this)||x(m))return E;if(L(this))return L(m)?b(this).j(b(m)):b(b(this).j(m));if(L(m))return b(this.j(b(m)));if(this.l(O)<0&&m.l(O)<0)return d(this.m()*m.m());const p=this.g.length+m.g.length,y=[];for(var v=0;v<2*p;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(let _=0;_<m.g.length;_++){const k=this.i(v)>>>16,g=this.i(v)&65535,J=m.i(_)>>>16,ke=m.i(_)&65535;y[2*v+2*_]+=g*ke,w(y,2*v+2*_),y[2*v+2*_+1]+=k*ke,w(y,2*v+2*_+1),y[2*v+2*_+1]+=g*J,w(y,2*v+2*_+1),y[2*v+2*_+2]+=k*J,w(y,2*v+2*_+2)}for(m=0;m<p;m++)y[m]=y[2*m+1]<<16|y[2*m];for(m=p;m<2*p;m++)y[m]=0;return new a(y,0)};function w(m,p){for(;(m[p]&65535)!=m[p];)m[p+1]+=m[p]>>>16,m[p]&=65535,p++}function I(m,p){this.g=m,this.h=p}function N(m,p){if(x(p))throw Error("division by zero");if(x(m))return new I(E,E);if(L(m))return p=N(b(m),p),new I(b(p.g),b(p.h));if(L(p))return p=N(m,b(p)),new I(b(p.g),p.h);if(m.g.length>30){if(L(m)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var y=A,v=p;v.l(m)<=0;)y=j(y),v=j(v);var _=U(y,1),k=U(v,1);for(v=U(v,2),y=U(y,2);!x(v);){var g=k.add(v);g.l(m)<=0&&(_=_.add(y),k=g),v=U(v,1),y=U(y,1)}return p=S(m,_.j(p)),new I(_,p)}for(_=E;m.l(p)>=0;){for(y=Math.max(1,Math.floor(m.m()/p.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=v<=48?1:Math.pow(2,v-48),k=d(y),g=k.j(p);L(g)||g.l(m)>0;)y-=v,k=d(y),g=k.j(p);x(k)&&(k=A),_=_.add(k),m=S(m,g)}return new I(_,m)}t.B=function(m){return N(this,m).h},t.and=function(m){const p=Math.max(this.g.length,m.g.length),y=[];for(let v=0;v<p;v++)y[v]=this.i(v)&m.i(v);return new a(y,this.h&m.h)},t.or=function(m){const p=Math.max(this.g.length,m.g.length),y=[];for(let v=0;v<p;v++)y[v]=this.i(v)|m.i(v);return new a(y,this.h|m.h)},t.xor=function(m){const p=Math.max(this.g.length,m.g.length),y=[];for(let v=0;v<p;v++)y[v]=this.i(v)^m.i(v);return new a(y,this.h^m.h)};function j(m){const p=m.g.length+1,y=[];for(let v=0;v<p;v++)y[v]=m.i(v)<<1|m.i(v-1)>>>31;return new a(y,m.h)}function U(m,p){const y=p>>5;p%=32;const v=m.g.length-y,_=[];for(let k=0;k<v;k++)_[k]=p>0?m.i(k+y)>>>p|m.i(k+y+1)<<32-p:m.i(k+y);return new a(_,m.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=T,Wc=a}).apply(typeof Vd<"u"?Vd:typeof self<"u"?self:typeof window<"u"?window:{});var Xs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=Object.defineProperty;function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xs=="object"&&Xs];for(var l=0;l<s.length;++l){var u=s[l];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=n(this);function i(s,l){if(l)e:{var u=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var C=s[f];if(!(C in u))break e;u=u[C]}s=s[s.length-1],f=u[s],l=l(f),l!=f&&l!=null&&e(u,s,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(l){var u=[],f;for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&u.push([f,l[f]]);return u}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(s){var l=typeof s;return l=="object"&&s!=null||l=="function"}function h(s,l,u){return s.call.apply(s.bind,arguments)}function d(s,l,u){return d=h,d.apply(null,arguments)}function T(s,l){var u=Array.prototype.slice.call(arguments,1);return function(){var f=u.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function E(s,l){function u(){}u.prototype=l.prototype,s.Z=l.prototype,s.prototype=new u,s.prototype.constructor=s,s.Ob=function(f,C,P){for(var M=Array(arguments.length-2),H=2;H<arguments.length;H++)M[H-2]=arguments[H];return l.prototype[C].apply(f,M)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function O(s){const l=s.length;if(l>0){const u=Array(l);for(let f=0;f<l;f++)u[f]=s[f];return u}return[]}function x(s,l){for(let f=1;f<arguments.length;f++){const C=arguments[f];var u=typeof C;if(u=u!="object"?u:C?Array.isArray(C)?"array":u:"null",u=="array"||u=="object"&&typeof C.length=="number"){u=s.length||0;const P=C.length||0;s.length=u+P;for(let M=0;M<P;M++)s[u+M]=C[M]}else s.push(C)}}class L{constructor(l,u){this.i=l,this.j=u,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function b(s){a.setTimeout(()=>{throw s},0)}function S(){var s=m;let l=null;return s.g&&(l=s.g,s.g=s.g.next,s.g||(s.h=null),l.next=null),l}class w{constructor(){this.h=this.g=null}add(l,u){const f=I.get();f.set(l,u),this.h?this.h.next=f:this.g=f,this.h=f}}var I=new L(()=>new N,s=>s.reset());class N{constructor(){this.next=this.g=this.h=null}set(l,u){this.h=l,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let j,U=!1,m=new w,p=()=>{const s=Promise.resolve(void 0);j=()=>{s.then(y)}};function y(){for(var s;s=S();){try{s.h.call(s.g)}catch(u){b(u)}var l=I;l.j(s),l.h<100&&(l.h++,s.next=l.g,l.g=s)}U=!1}function v(){this.u=this.u,this.C=this.C}v.prototype.u=!1,v.prototype.dispose=function(){this.u||(this.u=!0,this.N())},v.prototype[Symbol.dispose]=function(){this.dispose()},v.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _(s,l){this.type=s,this.g=this.target=l,this.defaultPrevented=!1}_.prototype.h=function(){this.defaultPrevented=!0};var k=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,l=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};a.addEventListener("test",u,l),a.removeEventListener("test",u,l)}catch{}return s}();function g(s){return/^[\s\xa0]*$/.test(s)}function J(s,l){_.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,l)}E(J,_),J.prototype.init=function(s,l){const u=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=l,l=s.relatedTarget,l||(u=="mouseover"?l=s.fromElement:u=="mouseout"&&(l=s.toElement)),this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&J.Z.h.call(this)},J.prototype.h=function(){J.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ke="closure_listenable_"+(Math.random()*1e6|0),ri=0;function ii(s,l,u,f,C){this.listener=s,this.proxy=null,this.src=l,this.type=u,this.capture=!!f,this.ha=C,this.key=++ri,this.da=this.fa=!1}function F(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function $(s,l,u){for(const f in s)l.call(u,s[f],f,s)}function B(s,l){for(const u in s)l.call(void 0,s[u],u,s)}function ie(s){const l={};for(const u in s)l[u]=s[u];return l}const he="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mn(s,l){let u,f;for(let C=1;C<arguments.length;C++){f=arguments[C];for(u in f)s[u]=f[u];for(let P=0;P<he.length;P++)u=he[P],Object.prototype.hasOwnProperty.call(f,u)&&(s[u]=f[u])}}function Qe(s){this.src=s,this.g={},this.h=0}Qe.prototype.add=function(s,l,u,f,C){const P=s.toString();s=this.g[P],s||(s=this.g[P]=[],this.h++);const M=at(s,l,f,C);return M>-1?(l=s[M],u||(l.fa=!1)):(l=new ii(l,this.src,P,!!f,C),l.fa=u,s.push(l)),l};function jn(s,l){const u=l.type;if(u in s.g){var f=s.g[u],C=Array.prototype.indexOf.call(f,l,void 0),P;(P=C>=0)&&Array.prototype.splice.call(f,C,1),P&&(F(l),s.g[u].length==0&&(delete s.g[u],s.h--))}}function at(s,l,u,f){for(let C=0;C<s.length;++C){const P=s[C];if(!P.da&&P.listener==l&&P.capture==!!u&&P.ha==f)return C}return-1}var Yt="closure_lm_"+(Math.random()*1e6|0),wa={};function Yc(s,l,u,f,C){if(Array.isArray(l)){for(let P=0;P<l.length;P++)Yc(s,l[P],u,f,C);return null}return u=eh(u),s&&s[ke]?s.J(l,u,c(f)?!!f.capture:!1,C):jy(s,l,u,!1,f,C)}function jy(s,l,u,f,C,P){if(!l)throw Error("Invalid event type");const M=c(C)?!!C.capture:!!C;let H=Sa(s);if(H||(s[Yt]=H=new Qe(s)),u=H.add(l,u,f,M,P),u.proxy)return u;if(f=Uy(),u.proxy=f,f.src=s,f.listener=u,s.addEventListener)k||(C=M),C===void 0&&(C=!1),s.addEventListener(l.toString(),f,C);else if(s.attachEvent)s.attachEvent(Zc(l.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Uy(){function s(u){return l.call(s.src,s.listener,u)}const l=Fy;return s}function Qc(s,l,u,f,C){if(Array.isArray(l))for(var P=0;P<l.length;P++)Qc(s,l[P],u,f,C);else f=c(f)?!!f.capture:!!f,u=eh(u),s&&s[ke]?(s=s.i,P=String(l).toString(),P in s.g&&(l=s.g[P],u=at(l,u,f,C),u>-1&&(F(l[u]),Array.prototype.splice.call(l,u,1),l.length==0&&(delete s.g[P],s.h--)))):s&&(s=Sa(s))&&(l=s.g[l.toString()],s=-1,l&&(s=at(l,u,f,C)),(u=s>-1?l[s]:null)&&_a(u))}function _a(s){if(typeof s!="number"&&s&&!s.da){var l=s.src;if(l&&l[ke])jn(l.i,s);else{var u=s.type,f=s.proxy;l.removeEventListener?l.removeEventListener(u,f,s.capture):l.detachEvent?l.detachEvent(Zc(u),f):l.addListener&&l.removeListener&&l.removeListener(f),(u=Sa(l))?(jn(u,s),u.h==0&&(u.src=null,l[Yt]=null)):F(s)}}}function Zc(s){return s in wa?wa[s]:wa[s]="on"+s}function Fy(s,l){if(s.da)s=!0;else{l=new J(l,this);const u=s.listener,f=s.ha||s.src;s.fa&&_a(s),s=u.call(f,l)}return s}function Sa(s){return s=s[Yt],s instanceof Qe?s:null}var Ea="__closure_events_fn_"+(Math.random()*1e9>>>0);function eh(s){return typeof s=="function"?s:(s[Ea]||(s[Ea]=function(l){return s.handleEvent(l)}),s[Ea])}function Ae(){v.call(this),this.i=new Qe(this),this.M=this,this.G=null}E(Ae,v),Ae.prototype[ke]=!0,Ae.prototype.removeEventListener=function(s,l,u,f){Qc(this,s,l,u,f)};function xe(s,l){var u,f=s.G;if(f)for(u=[];f;f=f.G)u.push(f);if(s=s.M,f=l.type||l,typeof l=="string")l=new _(l,s);else if(l instanceof _)l.target=l.target||s;else{var C=l;l=new _(f,s),Mn(l,C)}C=!0;let P,M;if(u)for(M=u.length-1;M>=0;M--)P=l.g=u[M],C=Is(P,f,!0,l)&&C;if(P=l.g=s,C=Is(P,f,!0,l)&&C,C=Is(P,f,!1,l)&&C,u)for(M=0;M<u.length;M++)P=l.g=u[M],C=Is(P,f,!1,l)&&C}Ae.prototype.N=function(){if(Ae.Z.N.call(this),this.i){var s=this.i;for(const l in s.g){const u=s.g[l];for(let f=0;f<u.length;f++)F(u[f]);delete s.g[l],s.h--}}this.G=null},Ae.prototype.J=function(s,l,u,f){return this.i.add(String(s),l,!1,u,f)},Ae.prototype.K=function(s,l,u,f){return this.i.add(String(s),l,!0,u,f)};function Is(s,l,u,f){if(l=s.i.g[String(l)],!l)return!0;l=l.concat();let C=!0;for(let P=0;P<l.length;++P){const M=l[P];if(M&&!M.da&&M.capture==u){const H=M.listener,me=M.ha||M.src;M.fa&&jn(s.i,M),C=H.call(me,f)!==!1&&C}}return C&&!f.defaultPrevented}function Vy(s,l){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(s,l||0)}function th(s){s.g=Vy(()=>{s.g=null,s.i&&(s.i=!1,th(s))},s.l);const l=s.h;s.h=null,s.m.apply(null,l)}class by extends v{constructor(l,u){super(),this.m=l,this.l=u,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:th(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(s){v.call(this),this.h=s,this.g={}}E(si,v);var nh=[];function rh(s){$(s.g,function(l,u){this.g.hasOwnProperty(u)&&_a(l)},s),s.g={}}si.prototype.N=function(){si.Z.N.call(this),rh(this)},si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ia=a.JSON.stringify,zy=a.JSON.parse,$y=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function ih(){}function By(){}var oi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ta(){_.call(this,"d")}E(Ta,_);function ka(){_.call(this,"c")}E(ka,_);var pr={},sh=null;function Aa(){return sh=sh||new Ae}pr.Ia="serverreachability";function oh(s){_.call(this,pr.Ia,s)}E(oh,_);function ai(s){const l=Aa();xe(l,new oh(l))}pr.STAT_EVENT="statevent";function ah(s,l){_.call(this,pr.STAT_EVENT,s),this.stat=l}E(ah,_);function Oe(s){const l=Aa();xe(l,new ah(l,s))}pr.Ja="timingevent";function lh(s,l){_.call(this,pr.Ja,s),this.size=l}E(lh,_);function li(s,l){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},l)}function ui(){this.g=!0}ui.prototype.ua=function(){this.g=!1};function Hy(s,l,u,f,C,P){s.info(function(){if(s.g)if(P){var M="",H=P.split("&");for(let Z=0;Z<H.length;Z++){var me=H[Z].split("=");if(me.length>1){const we=me[0];me=me[1];const St=we.split("_");M=St.length>=2&&St[1]=="type"?M+(we+"="+me+"&"):M+(we+"=redacted&")}}}else M=null;else M=P;return"XMLHTTP REQ ("+f+") [attempt "+C+"]: "+l+`
`+u+`
`+M})}function Wy(s,l,u,f,C,P,M){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+C+"]: "+l+`
`+u+`
`+P+" "+M})}function gr(s,l,u,f){s.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ky(s,u)+(f?" "+f:"")})}function Gy(s,l){s.info(function(){return"TIMEOUT: "+l})}ui.prototype.info=function(){};function Ky(s,l){if(!s.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(s=0;s<P.length;s++)if(Array.isArray(P[s])){var u=P[s];if(!(u.length<2)){var f=u[1];if(Array.isArray(f)&&!(f.length<1)){var C=f[0];if(C!="noop"&&C!="stop"&&C!="close")for(let M=1;M<f.length;M++)f[M]=""}}}}return Ia(P)}catch{return l}}var Ca={NO_ERROR:0,TIMEOUT:8},qy={},uh;function Pa(){}E(Pa,ih),Pa.prototype.g=function(){return new XMLHttpRequest},uh=new Pa;function ci(s){return encodeURIComponent(String(s))}function Jy(s){var l=1;s=s.split(":");const u=[];for(;l>0&&s.length;)u.push(s.shift()),l--;return s.length&&u.push(s.join(":")),u}function Qt(s,l,u,f){this.j=s,this.i=l,this.l=u,this.S=f||1,this.V=new si(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ch}function ch(){this.i=null,this.g="",this.h=!1}var hh={},Ra={};function Na(s,l,u){s.M=1,s.A=ks(_t(l)),s.u=u,s.R=!0,fh(s,null)}function fh(s,l){s.F=Date.now(),Ts(s),s.B=_t(s.A);var u=s.B,f=s.S;Array.isArray(f)||(f=[String(f)]),kh(u.i,"t",f),s.C=0,u=s.j.L,s.h=new ch,s.g=Bh(s.j,u?l:null,!s.u),s.P>0&&(s.O=new by(d(s.Y,s,s.g),s.P)),l=s.V,u=s.g,f=s.ba;var C="readystatechange";Array.isArray(C)||(C&&(nh[0]=C.toString()),C=nh);for(let P=0;P<C.length;P++){const M=Yc(u,C[P],f||l.handleEvent,!1,l.h||l);if(!M)break;l.g[M.key]=M}l=s.J?ie(s.J):{},s.u?(s.v||(s.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,l)):(s.v="GET",s.g.ea(s.B,s.v,null,l)),ai(),Hy(s.i,s.v,s.B,s.l,s.S,s.u)}Qt.prototype.ba=function(s){s=s.target;const l=this.O;l&&tn(s)==3?l.j():this.Y(s)},Qt.prototype.Y=function(s){try{if(s==this.g)e:{const H=tn(this.g),me=this.g.ya(),Z=this.g.ca();if(!(H<3)&&(H!=3||this.g&&(this.h.h||this.g.la()||Oh(this.g)))){this.K||H!=4||me==7||(me==8||Z<=0?ai(3):ai(2)),xa(this);var l=this.g.ca();this.X=l;var u=Xy(this);if(this.o=l==200,Wy(this.i,this.v,this.B,this.l,this.S,H,l),this.o){if(this.U&&!this.L){t:{if(this.g){var f,C=this.g;if((f=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var P=f;break t}}P=null}if(s=P)gr(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Oa(this,s);else{this.o=!1,this.m=3,Oe(12),Un(this),hi(this);break e}}if(this.R){s=!0;let we;for(;!this.K&&this.C<u.length;)if(we=Yy(this,u),we==Ra){H==4&&(this.m=4,Oe(14),s=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(we==hh){this.m=4,Oe(15),gr(this.i,this.l,u,"[Invalid Chunk]"),s=!1;break}else gr(this.i,this.l,we,null),Oa(this,we);if(dh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||u.length!=0||this.h.h||(this.m=1,Oe(16),s=!1),this.o=this.o&&s,!s)gr(this.i,this.l,u,"[Invalid Chunked Response]"),Un(this),hi(this);else if(u.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+u.length),ba(M),M.P=!0,Oe(11))}}else gr(this.i,this.l,u,null),Oa(this,u);H==4&&Un(this),this.o&&!this.K&&(H==4?Vh(this.j,this):(this.o=!1,Ts(this)))}else hv(this.g),l==400&&u.indexOf("Unknown SID")>0?(this.m=3,Oe(12)):(this.m=0,Oe(13)),Un(this),hi(this)}}}catch{}finally{}};function Xy(s){if(!dh(s))return s.g.la();const l=Oh(s.g);if(l==="")return"";let u="";const f=l.length,C=tn(s.g)==4;if(!s.h.i){if(typeof TextDecoder>"u")return Un(s),hi(s),"";s.h.i=new a.TextDecoder}for(let P=0;P<f;P++)s.h.h=!0,u+=s.h.i.decode(l[P],{stream:!(C&&P==f-1)});return l.length=0,s.h.g+=u,s.C=0,s.h.g}function dh(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Yy(s,l){var u=s.C,f=l.indexOf(`
`,u);return f==-1?Ra:(u=Number(l.substring(u,f)),isNaN(u)?hh:(f+=1,f+u>l.length?Ra:(l=l.slice(f,f+u),s.C=f+u,l)))}Qt.prototype.cancel=function(){this.K=!0,Un(this)};function Ts(s){s.T=Date.now()+s.H,ph(s,s.H)}function ph(s,l){if(s.D!=null)throw Error("WatchDog timer not null");s.D=li(d(s.aa,s),l)}function xa(s){s.D&&(a.clearTimeout(s.D),s.D=null)}Qt.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Gy(this.i,this.B),this.M!=2&&(ai(),Oe(17)),Un(this),this.m=2,hi(this)):ph(this,this.T-s)};function hi(s){s.j.I==0||s.K||Vh(s.j,s)}function Un(s){xa(s);var l=s.O;l&&typeof l.dispose=="function"&&l.dispose(),s.O=null,rh(s.V),s.g&&(l=s.g,s.g=null,l.abort(),l.dispose())}function Oa(s,l){try{var u=s.j;if(u.I!=0&&(u.g==s||Da(u.h,s))){if(!s.L&&Da(u.h,s)&&u.I==3){try{var f=u.Ba.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var C=f;if(C[0]==0){e:if(!u.v){if(u.g)if(u.g.F+3e3<s.F)Ns(u),Ps(u);else break e;Va(u),Oe(18)}}else u.xa=C[1],0<u.xa-u.K&&C[2]<37500&&u.F&&u.A==0&&!u.C&&(u.C=li(d(u.Va,u),6e3));yh(u.h)<=1&&u.ta&&(u.ta=void 0)}else Vn(u,11)}else if((s.L||u.g==s)&&Ns(u),!g(l))for(C=u.Ba.g.parse(l),l=0;l<C.length;l++){let Z=C[l];const we=Z[0];if(!(we<=u.K))if(u.K=we,Z=Z[1],u.I==2)if(Z[0]=="c"){u.M=Z[1],u.ba=Z[2];const St=Z[3];St!=null&&(u.ka=St,u.j.info("VER="+u.ka));const bn=Z[4];bn!=null&&(u.za=bn,u.j.info("SVER="+u.za));const nn=Z[5];nn!=null&&typeof nn=="number"&&nn>0&&(f=1.5*nn,u.O=f,u.j.info("backChannelRequestTimeoutMs_="+f)),f=u;const rn=s.g;if(rn){const xs=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xs){var P=f.h;P.g||xs.indexOf("spdy")==-1&&xs.indexOf("quic")==-1&&xs.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(La(P,P.h),P.h=null))}if(f.G){const za=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;za&&(f.wa=za,te(f.J,f.G,za))}}u.I=3,u.l&&u.l.ra(),u.aa&&(u.T=Date.now()-s.F,u.j.info("Handshake RTT: "+u.T+"ms")),f=u;var M=s;if(f.na=$h(f,f.L?f.ba:null,f.W),M.L){vh(f.h,M);var H=M,me=f.O;me&&(H.H=me),H.D&&(xa(H),Ts(H)),f.g=M}else Uh(f);u.i.length>0&&Rs(u)}else Z[0]!="stop"&&Z[0]!="close"||Vn(u,7);else u.I==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Vn(u,7):Fa(u):Z[0]!="noop"&&u.l&&u.l.qa(Z),u.A=0)}}ai(4)}catch{}}var Qy=class{constructor(s,l){this.g=s,this.map=l}};function gh(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function mh(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function yh(s){return s.h?1:s.g?s.g.size:0}function Da(s,l){return s.h?s.h==l:s.g?s.g.has(l):!1}function La(s,l){s.g?s.g.add(l):s.h=l}function vh(s,l){s.h&&s.h==l?s.h=null:s.g&&s.g.has(l)&&s.g.delete(l)}gh.prototype.cancel=function(){if(this.i=wh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function wh(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let l=s.i;for(const u of s.g.values())l=l.concat(u.G);return l}return O(s.i)}var _h=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zy(s,l){if(s){s=s.split("&");for(let u=0;u<s.length;u++){const f=s[u].indexOf("=");let C,P=null;f>=0?(C=s[u].substring(0,f),P=s[u].substring(f+1)):C=s[u],l(C,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Zt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;s instanceof Zt?(this.l=s.l,fi(this,s.j),this.o=s.o,this.g=s.g,di(this,s.u),this.h=s.h,Ma(this,Ah(s.i)),this.m=s.m):s&&(l=String(s).match(_h))?(this.l=!1,fi(this,l[1]||"",!0),this.o=pi(l[2]||""),this.g=pi(l[3]||"",!0),di(this,l[4]),this.h=pi(l[5]||"",!0),Ma(this,l[6]||"",!0),this.m=pi(l[7]||"")):(this.l=!1,this.i=new mi(null,this.l))}Zt.prototype.toString=function(){const s=[];var l=this.j;l&&s.push(gi(l,Sh,!0),":");var u=this.g;return(u||l=="file")&&(s.push("//"),(l=this.o)&&s.push(gi(l,Sh,!0),"@"),s.push(ci(u).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.u,u!=null&&s.push(":",String(u))),(u=this.h)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(gi(u,u.charAt(0)=="/"?nv:tv,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",gi(u,iv)),s.join("")},Zt.prototype.resolve=function(s){const l=_t(this);let u=!!s.j;u?fi(l,s.j):u=!!s.o,u?l.o=s.o:u=!!s.g,u?l.g=s.g:u=s.u!=null;var f=s.h;if(u)di(l,s.u);else if(u=!!s.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var C=l.h.lastIndexOf("/");C!=-1&&(f=l.h.slice(0,C+1)+f)}if(C=f,C==".."||C==".")f="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){f=C.lastIndexOf("/",0)==0,C=C.split("/");const P=[];for(let M=0;M<C.length;){const H=C[M++];H=="."?f&&M==C.length&&P.push(""):H==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),f&&M==C.length&&P.push("")):(P.push(H),f=!0)}f=P.join("/")}else f=C}return u?l.h=f:u=s.i.toString()!=="",u?Ma(l,Ah(s.i)):u=!!s.m,u&&(l.m=s.m),l};function _t(s){return new Zt(s)}function fi(s,l,u){s.j=u?pi(l,!0):l,s.j&&(s.j=s.j.replace(/:$/,""))}function di(s,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);s.u=l}else s.u=null}function Ma(s,l,u){l instanceof mi?(s.i=l,sv(s.i,s.l)):(u||(l=gi(l,rv)),s.i=new mi(l,s.l))}function te(s,l,u){s.i.set(l,u)}function ks(s){return te(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function pi(s,l){return s?l?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function gi(s,l,u){return typeof s=="string"?(s=encodeURI(s).replace(l,ev),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function ev(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Sh=/[#\/\?@]/g,tv=/[#\?:]/g,nv=/[#\?]/g,rv=/[#\?@]/g,iv=/#/g;function mi(s,l){this.h=this.g=null,this.i=s||null,this.j=!!l}function Fn(s){s.g||(s.g=new Map,s.h=0,s.i&&Zy(s.i,function(l,u){s.add(decodeURIComponent(l.replace(/\+/g," ")),u)}))}t=mi.prototype,t.add=function(s,l){Fn(this),this.i=null,s=mr(this,s);let u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(l),this.h+=1,this};function Eh(s,l){Fn(s),l=mr(s,l),s.g.has(l)&&(s.i=null,s.h-=s.g.get(l).length,s.g.delete(l))}function Ih(s,l){return Fn(s),l=mr(s,l),s.g.has(l)}t.forEach=function(s,l){Fn(this),this.g.forEach(function(u,f){u.forEach(function(C){s.call(l,C,f,this)},this)},this)};function Th(s,l){Fn(s);let u=[];if(typeof l=="string")Ih(s,l)&&(u=u.concat(s.g.get(mr(s,l))));else for(s=Array.from(s.g.values()),l=0;l<s.length;l++)u=u.concat(s[l]);return u}t.set=function(s,l){return Fn(this),this.i=null,s=mr(this,s),Ih(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[l]),this.h+=1,this},t.get=function(s,l){return s?(s=Th(this,s),s.length>0?String(s[0]):l):l};function kh(s,l,u){Eh(s,l),u.length>0&&(s.i=null,s.g.set(mr(s,l),O(u)),s.h+=u.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],l=Array.from(this.g.keys());for(let f=0;f<l.length;f++){var u=l[f];const C=ci(u);u=Th(this,u);for(let P=0;P<u.length;P++){let M=C;u[P]!==""&&(M+="="+ci(u[P])),s.push(M)}}return this.i=s.join("&")};function Ah(s){const l=new mi;return l.i=s.i,s.g&&(l.g=new Map(s.g),l.h=s.h),l}function mr(s,l){return l=String(l),s.j&&(l=l.toLowerCase()),l}function sv(s,l){l&&!s.j&&(Fn(s),s.i=null,s.g.forEach(function(u,f){const C=f.toLowerCase();f!=C&&(Eh(this,f),kh(this,C,u))},s)),s.j=l}function ov(s,l){const u=new ui;if(a.Image){const f=new Image;f.onload=T(en,u,"TestLoadImage: loaded",!0,l,f),f.onerror=T(en,u,"TestLoadImage: error",!1,l,f),f.onabort=T(en,u,"TestLoadImage: abort",!1,l,f),f.ontimeout=T(en,u,"TestLoadImage: timeout",!1,l,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else l(!1)}function av(s,l){const u=new ui,f=new AbortController,C=setTimeout(()=>{f.abort(),en(u,"TestPingServer: timeout",!1,l)},1e4);fetch(s,{signal:f.signal}).then(P=>{clearTimeout(C),P.ok?en(u,"TestPingServer: ok",!0,l):en(u,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),en(u,"TestPingServer: error",!1,l)})}function en(s,l,u,f,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),f(u)}catch{}}function lv(){this.g=new $y}function ja(s){this.i=s.Sb||null,this.h=s.ab||!1}E(ja,ih),ja.prototype.g=function(){return new As(this.i,this.h)};function As(s,l){Ae.call(this),this.H=s,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(As,Ae),t=As.prototype,t.open=function(s,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=l,this.readyState=1,vi(this)},t.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(l.body=s),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},t.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ch(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ch(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}t.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var l=s.value?s.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!s.done}))&&(this.response=this.responseText+=l)}s.done?yi(this):vi(this),this.readyState==3&&Ch(this)}},t.Oa=function(s){this.g&&(this.response=this.responseText=s,yi(this))},t.Na=function(s){this.g&&(this.response=s,yi(this))},t.ga=function(){this.g&&yi(this)};function yi(s){s.readyState=4,s.l=null,s.j=null,s.B=null,vi(s)}t.setRequestHeader=function(s,l){this.A.append(s,l)},t.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],l=this.h.entries();for(var u=l.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=l.next();return s.join(`\r
`)};function vi(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(As.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Ph(s){let l="";return $(s,function(u,f){l+=f,l+=":",l+=u,l+=`\r
`}),l}function Ua(s,l,u){e:{for(f in u){var f=!1;break e}f=!0}f||(u=Ph(u),typeof s=="string"?u!=null&&ci(u):te(s,l,u))}function fe(s){Ae.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(fe,Ae);var uv=/^https?$/i,cv=["POST","PUT"];t=fe.prototype,t.Fa=function(s){this.H=s},t.ea=function(s,l,u,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);l=l?l.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():uh.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(s),!0),this.B=!1}catch(P){Rh(this,P);return}if(s=u||"",u=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var C in f)u.set(C,f[C]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const P of f.keys())u.set(P,f.get(P));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(u.keys()).find(P=>P.toLowerCase()=="content-type"),C=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(cv,l,void 0)>=0)||f||C||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of u)this.g.setRequestHeader(P,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(P){Rh(this,P)}};function Rh(s,l){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=l,s.o=5,Nh(s),Cs(s)}function Nh(s){s.A||(s.A=!0,xe(s,"complete"),xe(s,"error"))}t.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,xe(this,"complete"),xe(this,"abort"),Cs(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cs(this,!0)),fe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?xh(this):this.Xa())},t.Xa=function(){xh(this)};function xh(s){if(s.h&&typeof o<"u"){if(s.v&&tn(s)==4)setTimeout(s.Ca.bind(s),0);else if(xe(s,"readystatechange"),tn(s)==4){s.h=!1;try{const P=s.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var u;if(!(u=l)){var f;if(f=P===0){let M=String(s.D).match(_h)[1]||null;!M&&a.self&&a.self.location&&(M=a.self.location.protocol.slice(0,-1)),f=!uv.test(M?M.toLowerCase():"")}u=f}if(u)xe(s,"complete"),xe(s,"success");else{s.o=6;try{var C=tn(s)>2?s.g.statusText:""}catch{C=""}s.l=C+" ["+s.ca()+"]",Nh(s)}}finally{Cs(s)}}}}function Cs(s,l){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const u=s.g;s.g=null,l||xe(s,"ready");try{u.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function tn(s){return s.g?s.g.readyState:0}t.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(s){if(this.g){var l=this.g.responseText;return s&&l.indexOf(s)==0&&(l=l.substring(s.length)),zy(l)}};function Oh(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function hv(s){const l={};s=(s.g&&tn(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(g(s[f]))continue;var u=Jy(s[f]);const C=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const P=l[C]||[];l[C]=P,P.push(u)}B(l,function(f){return f.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function wi(s,l,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||l}function Dh(s){this.za=0,this.i=[],this.j=new ui,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=wi("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=wi("baseRetryDelayMs",5e3,s),this.Za=wi("retryDelaySeedMs",1e4,s),this.Ta=wi("forwardChannelMaxRetries",2,s),this.va=wi("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new gh(s&&s.concurrentRequestLimit),this.Ba=new lv,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Dh.prototype,t.ka=8,t.I=1,t.connect=function(s,l,u,f){Oe(0),this.W=s,this.H=l||{},u&&f!==void 0&&(this.H.OSID=u,this.H.OAID=f),this.F=this.X,this.J=$h(this,null,this.W),Rs(this)};function Fa(s){if(Lh(s),s.I==3){var l=s.V++,u=_t(s.J);if(te(u,"SID",s.M),te(u,"RID",l),te(u,"TYPE","terminate"),_i(s,u),l=new Qt(s,s.j,l),l.M=2,l.A=ks(_t(u)),u=!1,a.navigator&&a.navigator.sendBeacon)try{u=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!u&&a.Image&&(new Image().src=l.A,u=!0),u||(l.g=Bh(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ts(l)}zh(s)}function Ps(s){s.g&&(ba(s),s.g.cancel(),s.g=null)}function Lh(s){Ps(s),s.v&&(a.clearTimeout(s.v),s.v=null),Ns(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Rs(s){if(!mh(s.h)&&!s.m){s.m=!0;var l=s.Ea;j||p(),U||(j(),U=!0),m.add(l,s),s.D=0}}function fv(s,l){return yh(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=l.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=li(d(s.Ea,s,l),bh(s,s.D)),s.D++,!0)}t.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const C=new Qt(this,this.j,s);let P=this.o;if(this.U&&(P?(P=ie(P),Mn(P,this.U)):P=this.U),this.u!==null||this.R||(C.J=P,P=null),this.S)e:{for(var l=0,u=0;u<this.i.length;u++){t:{var f=this.i[u];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(l+=f,l>4096){l=u;break e}if(l===4096||u===this.i.length-1){l=u+1;break e}}l=1e3}else l=1e3;l=jh(this,C,l),u=_t(this.J),te(u,"RID",s),te(u,"CVER",22),this.G&&te(u,"X-HTTP-Session-Id",this.G),_i(this,u),P&&(this.R?l="headers="+ci(Ph(P))+"&"+l:this.u&&Ua(u,this.u,P)),La(this.h,C),this.Ra&&te(u,"TYPE","init"),this.S?(te(u,"$req",l),te(u,"SID","null"),C.U=!0,Na(C,u,null)):Na(C,u,l),this.I=2}}else this.I==3&&(s?Mh(this,s):this.i.length==0||mh(this.h)||Mh(this))};function Mh(s,l){var u;l?u=l.l:u=s.V++;const f=_t(s.J);te(f,"SID",s.M),te(f,"RID",u),te(f,"AID",s.K),_i(s,f),s.u&&s.o&&Ua(f,s.u,s.o),u=new Qt(s,s.j,u,s.D+1),s.u===null&&(u.J=s.o),l&&(s.i=l.G.concat(s.i)),l=jh(s,u,1e3),u.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),La(s.h,u),Na(u,f,l)}function _i(s,l){s.H&&$(s.H,function(u,f){te(l,f,u)}),s.l&&$({},function(u,f){te(l,f,u)})}function jh(s,l,u){u=Math.min(s.i.length,u);const f=s.l?d(s.l.Ka,s.l,s):null;e:{var C=s.i;let H=-1;for(;;){const me=["count="+u];H==-1?u>0?(H=C[0].g,me.push("ofs="+H)):H=0:me.push("ofs="+H);let Z=!0;for(let we=0;we<u;we++){var P=C[we].g;const St=C[we].map;if(P-=H,P<0)H=Math.max(0,C[we].g-100),Z=!1;else try{P="req"+P+"_"||"";try{var M=St instanceof Map?St:Object.entries(St);for(const[bn,nn]of M){let rn=nn;c(nn)&&(rn=Ia(nn)),me.push(P+bn+"="+encodeURIComponent(rn))}}catch(bn){throw me.push(P+"type="+encodeURIComponent("_badmap")),bn}}catch{f&&f(St)}}if(Z){M=me.join("&");break e}}M=void 0}return s=s.i.splice(0,u),l.G=s,M}function Uh(s){if(!s.g&&!s.v){s.Y=1;var l=s.Da;j||p(),U||(j(),U=!0),m.add(l,s),s.A=0}}function Va(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=li(d(s.Da,s),bh(s,s.A)),s.A++,!0)}t.Da=function(){if(this.v=null,Fh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=li(d(this.Wa,this),s)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Oe(10),Ps(this),Fh(this))};function ba(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function Fh(s){s.g=new Qt(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var l=_t(s.na);te(l,"RID","rpc"),te(l,"SID",s.M),te(l,"AID",s.K),te(l,"CI",s.F?"0":"1"),!s.F&&s.ia&&te(l,"TO",s.ia),te(l,"TYPE","xmlhttp"),_i(s,l),s.u&&s.o&&Ua(l,s.u,s.o),s.O&&(s.g.H=s.O);var u=s.g;s=s.ba,u.M=1,u.A=ks(_t(l)),u.u=null,u.R=!0,fh(u,s)}t.Va=function(){this.C!=null&&(this.C=null,Ps(this),Va(this),Oe(19))};function Ns(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function Vh(s,l){var u=null;if(s.g==l){Ns(s),ba(s),s.g=null;var f=2}else if(Da(s.h,l))u=l.G,vh(s.h,l),f=1;else return;if(s.I!=0){if(l.o)if(f==1){u=l.u?l.u.length:0,l=Date.now()-l.F;var C=s.D;f=Aa(),xe(f,new lh(f,u)),Rs(s)}else Uh(s);else if(C=l.m,C==3||C==0&&l.X>0||!(f==1&&fv(s,l)||f==2&&Va(s)))switch(u&&u.length>0&&(l=s.h,l.i=l.i.concat(u)),C){case 1:Vn(s,5);break;case 4:Vn(s,10);break;case 3:Vn(s,6);break;default:Vn(s,2)}}}function bh(s,l){let u=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(u*=2),u*l}function Vn(s,l){if(s.j.info("Error code "+l),l==2){var u=d(s.bb,s),f=s.Ua;const C=!f;f=new Zt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fi(f,"https"),ks(f),C?ov(f.toString(),u):av(f.toString(),u)}else Oe(2);s.I=0,s.l&&s.l.pa(l),zh(s),Lh(s)}t.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))};function zh(s){if(s.I=0,s.ja=[],s.l){const l=wh(s.h);(l.length!=0||s.i.length!=0)&&(x(s.ja,l),x(s.ja,s.i),s.h.i.length=0,O(s.i),s.i.length=0),s.l.oa()}}function $h(s,l,u){var f=u instanceof Zt?_t(u):new Zt(u);if(f.g!="")l&&(f.g=l+"."+f.g),di(f,f.u);else{var C=a.location;f=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;const P=new Zt(null);f&&fi(P,f),l&&(P.g=l),C&&di(P,C),u&&(P.h=u),f=P}return u=s.G,l=s.wa,u&&l&&te(f,u,l),te(f,"VER",s.ka),_i(s,f),f}function Bh(s,l,u){if(l&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=s.Aa&&!s.ma?new fe(new ja({ab:u})):new fe(s.ma),l.Fa(s.L),l}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hh(){}t=Hh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ze(s,l){Ae.call(this),this.g=new Dh(l),this.l=s,this.h=l&&l.messageUrlParams||null,s=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(s?s["X-WebChannel-Content-Type"]=l.messageContentType:s={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(s?s["X-WebChannel-Client-Profile"]=l.sa:s={"X-WebChannel-Client-Profile":l.sa}),this.g.U=s,(s=l&&l.Qb)&&!g(s)&&(this.g.u=s),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,s=this.h,s!==null&&l in s&&(s=this.h,l in s&&delete s[l])),this.j=new yr(this)}E(Ze,Ae),Ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){Fa(this.g)},Ze.prototype.o=function(s){var l=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.v&&(u={},u.__data__=Ia(s),s=u);l.i.push(new Qy(l.Ya++,s)),l.I==3&&Rs(l)},Ze.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,Ze.Z.N.call(this)};function Wh(s){Ta.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var l=s.__sm__;if(l){e:{for(const u in l){s=u;break e}s=void 0}(this.i=s)&&(s=this.i,l=l!==null&&s in l?l[s]:void 0),this.data=l}else this.data=s}E(Wh,Ta);function Gh(){ka.call(this),this.status=1}E(Gh,ka);function yr(s){this.g=s}E(yr,Hh),yr.prototype.ra=function(){xe(this.g,"a")},yr.prototype.qa=function(s){xe(this.g,new Wh(s))},yr.prototype.pa=function(s){xe(this.g,new Gh)},yr.prototype.oa=function(){xe(this.g,"b")},Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,Ca.NO_ERROR=0,Ca.TIMEOUT=8,Ca.HTTP_ERROR=6,qy.COMPLETE="complete",By.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Ae.prototype.listen=Ae.prototype.J,fe.prototype.listenOnce=fe.prototype.K,fe.prototype.getLastError=fe.prototype.Ha,fe.prototype.getLastErrorCode=fe.prototype.ya,fe.prototype.getStatus=fe.prototype.ca,fe.prototype.getResponseJson=fe.prototype.La,fe.prototype.getResponseText=fe.prototype.la,fe.prototype.send=fe.prototype.ea,fe.prototype.setWithCredentials=fe.prototype.Fa}).apply(typeof Xs<"u"?Xs:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss="12.13.0";function J1(t){Ss=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=new pa("@firebase/firestore");function pt(t,...e){if(Yr.logLevel<=Y.DEBUG){const n=e.map(Gc);Yr.debug(`Firestore (${Ss}): ${t}`,...n)}}function Py(t,...e){if(Yr.logLevel<=Y.ERROR){const n=e.map(Gc);Yr.error(`Firestore (${Ss}): ${t}`,...n)}}function X1(t,...e){if(Yr.logLevel<=Y.WARN){const n=e.map(Gc);Yr.warn(`Firestore (${Ss}): ${t}`,...n)}}function Gc(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ry(t,r,n)}function Ry(t,e,n){let r=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Py(r),new Error(r)}function Bi(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Ry(e,i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class q extends wt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y1{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Le.UNAUTHENTICATED))}shutdown(){}}class Q1{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Z1{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Bi(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let o=new Hi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Hi,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{pt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(pt("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Hi)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(pt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Bi(typeof r.accessToken=="string",31837,{l:r}),new Ny(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Bi(e===null||typeof e=="string",2055,{h:e}),new Le(e)}}class eT{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class tT{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new eT(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nT{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Bi(this.o===void 0,3512);const r=o=>{o.error!=null&&pt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,pt("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{pt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):pt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new bd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Bi(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new bd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=rT(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%62))}return r}}function xn(t,e){return t<e?-1:t>e?1:0}function sT(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),o=e.charAt(r);if(i!==o)return Tl(i)===Tl(o)?xn(i,o):Tl(i)?1:-1}return xn(t.length,e.length)}const oT=55296,aT=57343;function Tl(t){const e=t.charCodeAt(0);return e>=oT&&e<=aT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="__name__";class Tt{constructor(e,n,r){n===void 0?n=0:n>e.length&&hs(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&hs(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Tt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Tt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=Tt.compareSegments(e.get(i),n.get(i));if(o!==0)return o}return xn(e.length,n.length)}static compareSegments(e,n){const r=Tt.isNumericId(e),i=Tt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Tt.extractNumericId(e).compare(Tt.extractNumericId(n)):sT(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wc.fromString(e.substring(4,e.length-2))}}class ft extends Tt{construct(e,n,r){return new ft(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const lT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Hn extends Tt{construct(e,n,r){return new Hn(e,n,r)}static isValidIdentifier(e){return lT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Hn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===zd}static keyField(){return new Hn([zd])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new q(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new q(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new q(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(a=!a,i++):c!=="."||a?(r+=c,i++):(o(),i++)}if(o(),a)throw new q(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Hn(n)}static emptyPath(){return new Hn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.path=e}static fromPath(e){return new Jn(ft.fromString(e))}static fromName(e){return new Jn(ft.fromString(e).popFirst(5))}static empty(){return new Jn(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Jn(new ft(e.slice()))}}function uT(t,e,n,r){if(e===!0&&r===!0)throw new q(K.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function cT(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function hT(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":hs(12329,{type:typeof t})}function fT(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hT(t);throw new q(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function Es(t,e){if(!cT(t))throw new q(K.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){n=`Expected '${r}' field to equal '${o.value}'`;break}}if(n)throw new q(K.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=-62135596800,Bd=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Bd);return new kt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$d)throw new q(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bd}_compareTo(e){return this.seconds===e.seconds?xn(this.nanoseconds,e.nanoseconds):xn(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:kt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Es(e,kt._jsonSchema))return new kt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$d;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}kt._jsonSchemaVersion="firestore/timestamp/1.0",kt._jsonSchema={type:ge("string",kt._jsonSchemaVersion),seconds:ge("number"),nanoseconds:ge("number")};function dT(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new pT("Invalid base64 string: "+o):o}}(e);return new ur(n)}static fromUint8Array(e){const n=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new ur(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xn(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ur.EMPTY_BYTE_STRING=new ur("");const Pu="(default)";class Xo{constructor(e,n){this.projectId=e,this.database=n||Pu}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database===Pu}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}function gT(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(t.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,n=null,r=[],i=[],o=null,a="F",c=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=c,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function yT(t){return new mT(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hd,G;(G=Hd||(Hd={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Wc([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=1048576;function kl(){return typeof document<"u"?document:null}class _T{constructor(e,n,r=1e3,i=1.5,o=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&pt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const a=Date.now()+r,c=new Kc(e,n,a,i,o);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Wd,Gd;(Gd=Wd||(Wd={})).Ba="default",Gd.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="ComponentProvider",Kd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="firestore.googleapis.com",qd=!0;class Jd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xy,this.ssl=qd}else this.host=e.host,this.ssl=e.ssl??qd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<wT)throw new q(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ST(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(K.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oy{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Y1;switch(r.type){case"firstParty":return new tT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Kd.get(n);r&&(pt(ET,"Removing Datastore"),Kd.delete(n),r.terminate())}(this),Promise.resolve()}}function IT(t,e,n,r={}){var d;t=fT(t,Oy);const i=da(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&Im(`https://${c}`),o.host!==xy&&o.host!==c&&X1("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:c,ssl:i,emulatorOptions:r};if(!Nn(h,a)&&(t._setSettings(h),r.mockUserToken)){let T,E;if(typeof r.mockUserToken=="string")T=r.mockUserToken,E=Le.MOCK_USER;else{T=i0(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new q(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Le(A)}t._authCredentials=new Q1(new Ny(T,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qc(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jc(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}toJSON(){return{type:Pt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Es(n,Pt._jsonSchema))return new Pt(e,r||null,new Jn(ft.fromString(n.referencePath)))}}Pt._jsonSchemaVersion="firestore/documentReference/1.0",Pt._jsonSchema={type:ge("string",Pt._jsonSchemaVersion),referencePath:ge("string")};class Jc extends qc{constructor(e,n,r){super(e,n,yT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new Jn(e))}withConverter(e){return new Jc(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="AsyncQueue";class Yd{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new _T(this,"async_queue_retry"),this.lc=()=>{const r=kl();r&&pt(Xd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=kl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new Hi;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!dT(e))throw e;pt(Xd,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Py("INTERNAL UNHANDLED ERROR: ",Qd(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=Kc.createAndSchedule(this,e,n,r,o=>this.Ec(o));return this.oc.push(i),i}Pc(){this._c&&hs(47125,{Rc:Qd(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Qd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class TT extends Oy{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Yd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Yd(e),this._firestoreClient=void 0,await e}}}function kT(t,e){const n=typeof t=="object"?t:Rc(),r=typeof t=="string"?t:Pu,i=dr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=n0("firestore");o&&IT(i,...o)}return i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ut(ur.fromBase64String(e))}catch(n){throw new q(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ut(ur.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ut._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Es(e,Ut._jsonSchema))return Ut.fromBase64String(e.bytes)}}Ut._jsonSchemaVersion="firestore/bytes/1.0",Ut._jsonSchema={type:ge("string",Ut._jsonSchemaVersion),bytes:ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Hn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return xn(this._lat,e._lat)||xn(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zn._jsonSchemaVersion}}static fromJSON(e){if(Es(e,Zn._jsonSchema))return new Zn(e.latitude,e.longitude)}}Zn._jsonSchemaVersion="firestore/geoPoint/1.0",Zn._jsonSchema={type:ge("string",Zn._jsonSchemaVersion),latitude:ge("number"),longitude:ge("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Es(e,er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new er(e.vectorValues);throw new q(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}er._jsonSchemaVersion="firestore/vectorValue/1.0",er._jsonSchema={type:ge("string",er._jsonSchemaVersion),vectorValues:ge("object")};function Ly(t,e,n){if((e=Lt(e))instanceof Dy)return e._internalPath;if(typeof e=="string")return CT(t,e);throw Ru("Field path arguments must be of type string or ",t)}const AT=new RegExp("[~\\*/\\[\\]]");function CT(t,e,n){if(e.search(AT)>=0)throw Ru(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Dy(...e.split("."))._internalPath}catch{throw Ru(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Ru(t,e,n,r,i){let o=`Function ${e}() called with invalid data`;o+=". ";let a="";return new q(K.INVALID_ARGUMENT,o+t+a)}const Zd="@firebase/firestore",ep="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e,n,r,i,o){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Ly("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class PT extends My{data(){return super.data()}}class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $r extends My{constructor(e,n,r,i,o,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ly("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=$r._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}$r._jsonSchemaVersion="firestore/documentSnapshot/1.0",$r._jsonSchema={type:ge("string",$r._jsonSchemaVersion),bundleSource:ge("string","DocumentSnapshot"),bundleName:ge("string"),bundle:ge("string")};class go extends $r{data(e={}){return super.data(e)}}class Wi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ys(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new go(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(c=>{const h=new go(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ys(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new go(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Ys(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,T=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),T=a.indexOf(c.doc.key)),{type:RT(c.type),doc:h,oldIndex:d,newIndex:T}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=iT.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(n.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RT(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return hs(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wi._jsonSchemaVersion="firestore/querySnapshot/1.0",Wi._jsonSchema={type:ge("string",Wi._jsonSchemaVersion),bundleSource:ge("string","QuerySnapshot"),bundleName:ge("string"),bundle:ge("string")};(function(e,n=!0){J1(ti),Dt(new vt("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),c=new TT(new Z1(r.getProvider("auth-internal")),new nT(a,r.getProvider("app-check-internal")),gT(a,i),a);return o={useFetchStreams:n,...o},c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),it(Zd,ep,e),it(Zd,ep,"esm2020")})();const un={apiKey:"AIzaSyApQxOpVR1JJ9QKjDWOHmZba8m18jVngAA",authDomain:"didim-bb51f.firebaseapp.com",projectId:"didim-bb51f",storageBucket:"didim-bb51f.firebasestorage.app",messagingSenderId:"145717870857",appId:"1:145717870857:web:a439e1becc8a5d82c513d8",measurementId:"G-G4E73DSQTK"},Xc=Cm(un);K1(Xc);kT(Xc);let tp=null;function NT(){const t=[];if(un.apiKey||t.push("VITE_FIREBASE_API_KEY"),un.authDomain||t.push("VITE_FIREBASE_AUTH_DOMAIN"),un.projectId||t.push("VITE_FIREBASE_PROJECT_ID"),un.storageBucket||t.push("VITE_FIREBASE_STORAGE_BUCKET"),un.messagingSenderId||t.push("VITE_FIREBASE_MESSAGING_SENDER_ID"),un.appId||t.push("VITE_FIREBASE_APP_ID"),t.length)throw new Error(`Firebase 환경 변수가 누락되었습니다: ${t.join(", ")}`)}function xT(){return NT(),un.measurementId?(tp??(tp=KE().then(t=>t?WE(Xc):null)),tp):Promise.resolve(null)}const OT=[{id:"home",label:"요약"},{id:"prompt",label:"질문 조립"},{id:"chat",label:"검증 대화"},{id:"explain",label:"터치 풀이"},{id:"voice",label:"음성 안내"},{id:"map",label:"안전 지도"},{id:"cards",label:"교육 카드"},{id:"guardian",label:"보호자"},{id:"apis",label:"API 준비"}],DT={who:["나","보호자","선생님","가게 직원","집주인"],where:["편의점에서","계약서를 볼 때","길을 찾을 때","은행에서","병원에서"],what:["쉽게 설명해줘","해야 할 일을 순서대로 알려줘","위험한 말인지 확인해줘","대답 문장을 만들어줘"]},LT=[["Google Gemini 1.5 Flash","대화, 질문 정리, 쉬운 말 변환"],["국립국어원 표준국어대사전","어려운 단어 뜻 확인"],["법제처 찾기 쉬운 생활법률","계약/근로/생활 법률 팩트체크"],["Kakao Maps Web SDK","지도 렌더링과 현재 위치 표시"],["생활안전지도/경찰청 위치 데이터","위험 구역과 가까운 안전시설 표시"],["Firebase Auth/Firestore","보호자 연결, 위험 알림, 설정 동기화"]],MT=["돈 보내","계좌번호","비밀로 해","사진 보내","혼자 와","서명해"];function jT(){const[t,e]=ue.useState("calm"),[n,r]=ue.useState("home"),[i,o]=ue.useState({who:"나",where:"계약서를 볼 때",what:"해야 할 일을 순서대로 알려줘"}),[a,c]=ue.useState("근로계약서에 서명하기 전에 무엇을 확인해야 해?"),[h,d]=ue.useState("계약"),[T,E]=ue.useState("검색하면 쉬운 뜻이 여기에 표시됩니다."),[A,O]=ue.useState("AI 답변이 여기에 표시됩니다."),[x,L]=ue.useState(!1),[b,S]=ue.useState(!1),[w,I]=ue.useState(1),[N,j]=ue.useState(['금융 요구 의심 문장 1건 감지: "계좌번호를 알려줘" -> 보호자에게 순화 요약 알림 예정']);ue.useEffect(()=>{xT().catch(g=>{console.info("Firebase Analytics 초기화 생략:",g)})},[]);const U=ue.useMemo(()=>`${i.who}에게 ${i.where} ${i.what}. 추가 상황: ${a}`,[i,a]),m=ue.useMemo(()=>{const g=`${U} ${A}`;return MT.filter(J=>g.includes(J)).length},[U,A]),p=(g,J)=>{o(ke=>({...ke,[g]:J}))},y=async()=>{L(!0);try{const g=await gm(`너는 느린 학습자와 보호자를 돕는 디딤돌 AI야. 쉬운 한국어로, 한 번에 3단계 이하로 답해줘.

질문: ${U}`);O(g)}catch(g){O((g==null?void 0:g.message)||"AI 응답을 가져오지 못했습니다. API 키 또는 서버 프록시를 확인해주세요.")}finally{L(!1)}},v=async()=>{L(!0);try{const g=await B_(h);E(g)}catch{E(`${h}: 지금은 사전 API가 연결되지 않아 데모 뜻을 보여줍니다. 어려운 말을 쉬운 말로 바꾸는 자리입니다.`)}finally{L(!1)}},_=g=>{if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const J=new SpeechSynthesisUtterance(g);J.lang="ko-KR",J.rate=.88,window.speechSynthesis.speak(J)},k=()=>{j(g=>['위험 문장 감지: "비밀로 하고 돈 보내" -> 보호자에게 "금전 요구 가능성이 있어 확인이 필요합니다"로 알림',...g])};return R.jsxs("div",{className:`app ${t}`,style:{fontSize:`${w}rem`},children:[R.jsxs("header",{className:"app-header",children:[R.jsxs("div",{children:[R.jsx("p",{className:"eyebrow",children:"Didim Stepping Stone"}),R.jsx("h1",{children:"느린 학습자를 위한 AI 생활 안전 도우미"})]}),R.jsxs("div",{className:"header-actions",children:[R.jsx("button",{type:"button",onClick:()=>e(t==="calm"?"contrast":"calm"),children:t==="calm"?"고대비":"기본색"}),R.jsx("button",{type:"button",onClick:()=>I(g=>Math.min(1.25,g+.05)),children:"글자 크게"}),R.jsx("button",{type:"button",onClick:()=>I(1),children:"초기화"})]})]}),R.jsx("nav",{className:"tab-nav","aria-label":"주요 기능",children:OT.map(g=>R.jsx("button",{type:"button",className:n===g.id?"active":"",onClick:()=>r(g.id),children:g.label},g.id))}),R.jsxs("main",{children:[n==="home"&&R.jsxs("section",{className:"hero-panel",children:[R.jsxs("div",{className:"hero-copy",children:[R.jsx("p",{className:"eyebrow",children:"대회 제출용 MVP"}),R.jsx("h2",{children:"질문을 못 해도, 읽기 어려워도, 위험한 상황이어도 다음 발판을 보여줍니다."}),R.jsx("p",{children:"질문 조립기, RAG 대화, 터치 풀이, 음성 통화 UI, 안전 지도, 카드뉴스, 보호자 알림을 한 화면 흐름으로 묶었습니다. 실제 API 키가 없을 때도 심사 시나리오를 설명할 수 있도록 데모 모드가 동작합니다."}),R.jsxs("div",{className:"hero-actions",children:[R.jsx("button",{type:"button",onClick:()=>r("prompt"),children:"질문 만들기"}),R.jsx("button",{type:"button",onClick:()=>r("map"),children:"안전 지도 보기"})]})]}),R.jsxs("div",{className:"phone-preview","aria-label":"앱 미리보기",children:[R.jsx("div",{className:"phone-status",children:"보호자 연결됨 · 위험 감지 켜짐"}),R.jsx("div",{className:"assistant-bubble",children:"계약서에 서명하기 전에는 임금, 근무시간, 쉬는 시간을 먼저 확인해요."}),R.jsxs("div",{className:"step-list",children:[R.jsx("span",{children:"1. 제목 확인"}),R.jsx("span",{children:"2. 돈과 시간 확인"}),R.jsx("span",{children:"3. 모르면 바로 질문"})]})]})]}),n==="prompt"&&R.jsxs("section",{className:"work-panel",children:[R.jsx("h2",{children:"유니버셜 질문 조립기"}),R.jsx("p",{children:"직접 긴 문장을 쓰지 않아도 칩을 고르면 AI가 이해하기 쉬운 질문으로 바꿉니다."}),R.jsx("div",{className:"chip-builder",children:Object.entries(DT).map(([g,J])=>R.jsxs("div",{className:"chip-row",children:[R.jsx("strong",{children:g==="who"?"누구에게":g==="where"?"어디서":"무엇을"}),R.jsx("div",{children:J.map(ke=>R.jsx("button",{type:"button",className:i[g]===ke?"chip selected":"chip",onClick:()=>p(g,ke),children:ke},ke))})]},g))}),R.jsxs("label",{className:"field",children:["추가 상황",R.jsx("textarea",{value:a,onChange:g=>c(g.target.value)})]}),R.jsx("div",{className:"prompt-preview",children:U}),R.jsx("button",{type:"button",onClick:y,disabled:x,children:x?"생성 중...":"AI로 답변 생성"}),R.jsx("pre",{children:A})]}),n==="chat"&&R.jsxs("section",{className:"work-panel",children:[R.jsx("h2",{children:"이중 검증 RAG 기반 대화창"}),R.jsx("p",{children:"법률/행정 질문은 공공데이터 출처를 먼저 확인한다는 전제로 답변합니다. 현재는 서버 프록시가 있으면 실제 호출, 없으면 데모 응답으로 전환됩니다."}),R.jsx(K_,{}),R.jsxs("div",{className:"source-strip",children:[R.jsx("span",{children:"법제처 생활법률"}),R.jsx("span",{children:"표준국어대사전"}),R.jsx("span",{children:"고용정보원 SOP"})]})]}),n==="explain"&&R.jsxs("section",{className:"work-panel",children:[R.jsx("h2",{children:"터치-풀이와 마이크로 스텝"}),R.jsx("p",{children:"어려운 단어를 누르면 쉬운 뜻, 행동 순서, 삽화 프롬프트가 함께 나옵니다."}),R.jsxs("div",{className:"touch-sentence",children:["근로계약서의 ",R.jsx("button",{type:"button",onClick:()=>S(!0),children:"임금"})," 과 근무시간을 확인한 뒤 서명하세요."]}),R.jsxs("div",{className:"lookup-box",children:[R.jsx("input",{value:h,onChange:g=>d(g.target.value)}),R.jsx("button",{type:"button",onClick:v,disabled:x,children:"사전 확인"})]}),R.jsx("pre",{children:T})]}),n==="voice"&&R.jsxs("section",{className:"call-screen",children:[R.jsx("div",{className:"call-avatar",children:"AI"}),R.jsx("h2",{children:"디딤돌 음성 안내"}),R.jsx("p",{children:"화면을 보기 어려운 상황에서는 전화 수신 화면처럼 크게 안내합니다."}),R.jsxs("div",{className:"call-actions",children:[R.jsx("button",{type:"button",onClick:()=>_("천천히 이동하세요. 가까운 밝은 길로 가고, 필요하면 보호자에게 알림을 보냅니다."),children:"안내 듣기"}),R.jsx("button",{type:"button",onClick:()=>_(A),children:"최근 답변 읽기"})]})]}),n==="map"&&R.jsxs("section",{className:"work-panel",children:[R.jsx("h2",{children:"위험 지역 오버레이 생활안전지도"}),R.jsx("p",{children:"Kakao Maps 키가 들어오면 실제 지도로 교체하고, 지금은 심사용 오버레이 목업으로 GPS/위험/대피소 흐름을 보여줍니다."}),R.jsxs("div",{className:"map-board",children:[R.jsx("span",{className:"gps-dot",children:"현재 위치"}),R.jsx("span",{className:"risk-zone",children:"위험 구역"}),R.jsx("span",{className:"safe-zone",children:"지구대"}),R.jsx("span",{className:"route-line"})]}),R.jsxs("div",{className:"status-grid",children:[R.jsxs("article",{children:[R.jsx("strong",{children:"위험도"}),R.jsx("span",{children:m>0?"주의 필요":"보통"})]}),R.jsxs("article",{children:[R.jsx("strong",{children:"가까운 안전시설"}),R.jsx("span",{children:"320m · 지구대"})]}),R.jsxs("article",{children:[R.jsx("strong",{children:"자동 행동"}),R.jsx("span",{children:"위험 진입 시 음성 경고"})]})]})]}),n==="cards"&&R.jsxs("section",{className:"work-panel",children:[R.jsx("h2",{children:"맞춤형 AI 교육 카드뉴스"}),R.jsx("div",{className:"card-news",children:["계약서 제목을 확인해요","돈과 시간을 숫자로 봐요","모르면 바로 도움을 요청해요"].map((g,J)=>R.jsxs("article",{children:[R.jsx("span",{children:J+1}),R.jsx("h3",{children:g}),R.jsx("p",{children:"긴 공공자료를 짧은 문장, 큰 글자, 한 가지 행동으로 바꿔 보여줍니다."})]},g))})]}),n==="guardian"&&R.jsxs("section",{className:"work-panel",children:[R.jsx("h2",{children:"프라이버시 엄수형 가디언 대시보드"}),R.jsx("p",{children:"대화 전문은 저장하지 않고 위험 문장만 순화 요약해서 보호자에게 보냅니다."}),R.jsx("button",{type:"button",onClick:k,children:"위험 알림 시뮬레이션"}),R.jsxs("div",{className:"guardian-grid",children:[R.jsxs("article",{children:[R.jsx("h3",{children:"알림"}),N.map((g,J)=>R.jsx("p",{children:g},`${g}-${J}`))]}),R.jsxs("article",{children:[R.jsx("h3",{children:"원격 설정"}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",defaultChecked:!0})," 고대비 모드 허용"]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox",defaultChecked:!0})," 위험 단어 감지"]}),R.jsxs("label",{children:[R.jsx("input",{type:"checkbox"})," 위치 공유는 긴급 시에만"]})]})]})]}),n==="apis"&&R.jsxs("section",{className:"work-panel",children:[R.jsx("h2",{children:"필요 API 키와 데이터"}),R.jsx("p",{children:"다음 키를 `.env`에 넣으면 데모 모드에서 실제 연동 모드로 확장할 수 있습니다."}),R.jsx("div",{className:"api-table",children:LT.map(([g,J])=>R.jsxs("article",{children:[R.jsx("strong",{children:g}),R.jsx("span",{children:J})]},g))}),R.jsx("pre",{children:`# frontend .env
VITE_API_BASE_URL=
VITE_KAKAO_MAP_KEY=
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=

# server/.env
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.5-flash
KOREAN_DICT_KEY=
OPENAI_API_KEY=  # 이미지 생성도 서버 프록시 권장`})]})]}),b&&R.jsx("div",{className:"modal-backdrop",role:"dialog","aria-modal":"true",children:R.jsxs("div",{className:"explain-modal",children:[R.jsx("h2",{children:"임금"}),R.jsx("p",{children:"일하고 받는 돈입니다. 계약서에는 얼마를, 언제 받는지 적혀 있어야 합니다."}),R.jsxs("ol",{children:[R.jsx("li",{children:"시급 또는 월급 숫자를 찾습니다."}),R.jsx("li",{children:"받는 날짜를 확인합니다."}),R.jsx("li",{children:"모르면 바로 서명하지 않고 물어봅니다."})]}),R.jsx("div",{className:"image-placeholder",children:"삽화: 계약서의 돈 숫자를 손가락으로 짚는 장면"}),R.jsx("button",{type:"button",onClick:()=>S(!1),children:"닫기"})]})})]})}Al.createRoot(document.getElementById("root")).render(R.jsx(Rv.StrictMode,{children:R.jsx(jT,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(t=>{console.log("ServiceWorker registration successful with scope: ",t.scope)}).catch(t=>{console.error("ServiceWorker registration failed:",t)})});
