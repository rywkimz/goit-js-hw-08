var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},t=e.parcelRequire4c75;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){r[e]=o},e.parcelRequire4c75=t),t.register;var n=t("i5zXd"),i=t("9OeKo");const l=document.querySelector("#vimeo-player"),a=new n.default(l),d="videoplayer-current-time",u=localStorage.getItem(d);u&&a.setCurrentTime(u).catch(function(e){console.error("Error setting time:",e)});const c=(i&&i.__esModule?i.default:i)(function(e){localStorage.setItem(d,e.seconds)},1e3);a.on("timeupdate",c);
//# sourceMappingURL=02-video.c81a019c.js.map
