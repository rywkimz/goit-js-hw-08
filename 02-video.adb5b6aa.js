!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire4c75;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},e.parcelRequire4c75=o),o.register;var n=o("gK76q"),l=o("dCfNN");let i=document.querySelector("#vimeo-player"),a=new n.default(i),d="videoplayer-current-time",u=localStorage.getItem(d);u&&a.setCurrentTime(u).catch(function(e){console.error("Error setting time:",e)});let f=(l&&l.__esModule?l.default:l)(function(e){localStorage.setItem(d,e.seconds)},1e3);a.on("timeupdate",f)}();
//# sourceMappingURL=02-video.adb5b6aa.js.map
