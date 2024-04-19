import l from"react";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();var f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=l,d=Symbol.for("react.element"),p=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,a=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function c(i,t,s){var o,e={},r=null,n=null;s!==void 0&&(r=""+s),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(n=t.ref);for(o in t)m.call(t,o)&&!y.hasOwnProperty(o)&&(e[o]=t[o]);if(i&&i.defaultProps)for(o in t=i.defaultProps,t)e[o]===void 0&&(e[o]=t[o]);return{$$typeof:d,type:i,key:r,ref:n,props:e,_owner:a.current}}f.Fragment=p;f.jsx=c;f.jsxs=c;
