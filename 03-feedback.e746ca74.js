!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequire4c75;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequire4c75=r),r.register,r("gK76q");var l=r("dCfNN");let o="feedback-form-state",n=document.querySelector(".feedback-form"),i=n.querySelector('input[name="email"]'),d=n.querySelector('textarea[name="message"]'),s=(l&&l.__esModule?l.default:l)(()=>{let e={email:i.value,message:d.value};localStorage.setItem(o,JSON.stringify(e))},500);n.addEventListener("input",s),n.addEventListener("submit",e=>{e.preventDefault(),console.log("Form submitted:",{email:i.value,message:d.value}),localStorage.removeItem(o),n.reset()}),document.addEventListener("DOMContentLoaded",()=>{let e=localStorage.getItem(o);if(e){let{email:t,message:a}=JSON.parse(e);i.value=t||"",d.value=a||""}})}();
//# sourceMappingURL=03-feedback.e746ca74.js.map
