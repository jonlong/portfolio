(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{156:function(e,t,i){"use strict";i.r(t);var n=i(14),o=i.n(n),r=i(162),s=i.n(r),a=i(0),c=i.n(a),h=i(177),d=i(174),p=i(170),l=i(173),u=i(165),f=i(180),m=i(163),g=i(167),v=i(168),y=i(182),E=i(175),b=i(164),w=i(183),k=i(169),x=i(257),I=i.n(x),j=i(258),L=i.n(j),D=i(259),_=i.n(D),q=i(260),A=i.n(q),B=i(261),O=i.n(B),C=i(262),S=i.n(C),M=i(263),N=i.n(M),T=i(184),F={Flex:d.Flex,Gallery:p.a,GalleryItem:l.a,Browser:u.b,Device:f.a,Still:m.b,Video:g.b,PostColumn:v.a,Markdown:y.a,List:E.a,ListItem:b.a,Stack:w.a,Link:k.a,imageDesktopHome:I.a,imageDesktopFilm:L.a,imageDesktopCollection:_.a,imageDesktopFlashSale:A.a,imageMobileHome:O.a,imageMobileArticle:S.a,videoMP4Slideshow:N.a,React:c.a,MDXTag:T.MDXTag},P=i(185);i.d(t,"pageQuery",function(){return Q});var Q="2091711463";t.default=function(e){var t=e.children,i=s()(e,["children"]);return c.a.createElement(h.MDXScopeProvider,{__mdxScope:o()({},F)},c.a.createElement(P.a,i,t))}},170:function(e,t,i){"use strict";var n=i(0),o=i.n(n),r=i(4),s=i.n(r),a=i(174),c=i(158),h=i(159),d=(i(171),Object(c.b)(a.Flex,{target:"e1cw1xhd0"})("overflow-x:scroll;margin-bottom:",Object(h.f)("-30px"),";padding-bottom:",Object(h.f)("30px"),";position:relative;touch-action:pan-x;transform:translateZ(0);")),p=Object(c.b)("div",{target:"e1cw1xhd1"})("overflow:hidden;cursor:move;cursor:grab;"),l=function(e){var t=e.children;return o.a.createElement(p,null,o.a.createElement(d,null,t))};l.propTypes={children:s.a.node.isRequired},t.a=l},171:function(e,t,i){var n,o;
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(r,s){"use strict";n=[i(172)],void 0===(o=function(e){return function(e,t){var i=e.jQuery,n=e.console;function o(e,t){for(var i in t)e[i]=t[i];return e}var r=Array.prototype.slice;function s(e,t,a){if(!(this instanceof s))return new s(e,t,a);var c=e;"string"==typeof e&&(c=document.querySelectorAll(e)),c?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return r.call(e);return[e]}(c),this.options=o({},this.options),"function"==typeof t?a=t:o(this.options,t),a&&this.on("always",a),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):n.error("Bad element for imagesLoaded "+(c||e))}s.prototype=Object.create(t.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&a[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var a={1:!0,9:!0,11:!0};function c(e){this.img=e}function h(e,t){this.url=e,this.element=t,this.img=new Image}return s.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.addBackground=function(e,t){var i=new h(e,t);this.images.push(i)},s.prototype.check=function(){var e=this;function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},s.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&n&&n.log("progress: "+i,e,t)},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},c.prototype=Object.create(t.prototype),c.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},c.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},c.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype=Object.create(c.prototype),h.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},h.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},s.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((i=t).fn.imagesLoaded=function(e,t){return new s(this,e,t).jqDeferred.promise(i(this))})},s.makeJQueryPlugin(),s}(r,e)}.apply(t,n))||(e.exports=o)}("undefined"!=typeof window?window:this)},172:function(e,t,i){var n,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(n=function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o];n&&n[r]&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})?n.call(t,i,t,e):n)||(e.exports=o)},173:function(e,t,i){"use strict";var n=i(0),o=i.n(n),r=i(4),s=i.n(r),a=i(158),c=i(159),h=i(160),d=i(165),p=i(167),l=i(163),u=Object(a.b)("div",{target:"e1rknm1f0"})("padding:",Object(c.d)(1),";&:not(:first-child){padding-left:0;}img{height:100%;display:block;pointer-events:none;user-select:none;}",l.a,"{img{height:calc(",h.d," + 15px);}}",p.a,"{img,video{height:calc(",h.d," + 13px);}}",d.a,"{img{height:calc(",h.d," - 12px);}",p.a,"{video{width:auto;height:calc(",h.d," - 13px);}}}",d.a,",",p.a,",",l.a,"{img,video{font-size:",h.e[0],";width:auto;}}"),f=function(e){var t=e.children;return o.a.createElement(u,null,t)};f.propTypes={children:s.a.node.isRequired},t.a=f},180:function(e,t,i){"use strict";var n=i(0),o=i.n(n),r=i(4),s=function(e){var t=e.children;return o.a.createElement("div",{className:"device device-iphone-8 device-gray"},o.a.createElement("div",{className:"device-frame"},t),o.a.createElement("div",{className:"device-stripe"}),o.a.createElement("div",{className:"device-header"}),o.a.createElement("div",{className:"device-sensors"}),o.a.createElement("div",{className:"device-btns"}),o.a.createElement("div",{className:"device-power"}))};s.propTypes={children:i.n(r).a.node.isRequired},t.a=s},257:function(e,t,i){e.exports=i.p+"static/home-702f80c713de928c48ef053918aeafcd.jpg"},258:function(e,t,i){e.exports=i.p+"static/film-ff3fc6b950d354e00c705334208ede81.jpg"},259:function(e,t,i){e.exports=i.p+"static/collection-7ff43569e2bc0641282fa83089ee0689.jpg"},260:function(e,t,i){e.exports=i.p+"static/flash-sale-d91f7787c4958279c393aa2ad7544010.jpg"},261:function(e,t,i){e.exports=i.p+"static/home-b5f52901da19b408c31805704f2afccb.jpg"},262:function(e,t,i){e.exports=i.p+"static/article-352c10736ef3bb588a2f661fbe8a3c79.jpg"},263:function(e,t,i){e.exports=i.p+"static/slideshow-1af46746e68fa04415c8a551dea44eac.mp4"}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-55-f-27-c-394-ef-8-d-0-becbf-25-b-94997-ce-431-scope-hash-33-ca-6196-f-11-e-0-a-4-e-6-e-285-f-089-c-0-a-3251-js-bb509bd2a8f6ed366f15.js.map