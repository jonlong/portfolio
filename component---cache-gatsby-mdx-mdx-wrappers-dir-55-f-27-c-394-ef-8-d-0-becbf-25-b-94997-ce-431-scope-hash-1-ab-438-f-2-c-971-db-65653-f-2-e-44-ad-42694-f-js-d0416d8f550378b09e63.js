(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{157:function(e,t,n){"use strict";n.r(t);var i=n(14),o=n.n(i),r=n(162),s=n.n(r),a=n(0),c=n.n(a),u=n(179),d=n(175),h=n(174),f=n(165),p=n(182),m=n(167),l=n(163),v=n(168),g=n(184),y=n(177),b=n(164),E=n(185),w=n(242),x=n.n(w),L=n(243),I=n.n(L),k=n(244),j=n.n(k),S=n(245),D=n.n(S),B=n(246),M=n.n(B),q=n(247),T=n.n(q),A=n(248),O=n.n(A),_=n(198),X=n.n(_),C=n(186),P={Gallery:d.a,GalleryItem:h.a,Browser:f.b,Device:p.a,Video:m.b,Still:l.b,PostColumn:v.a,Markdown:g.a,List:y.a,ListItem:b.a,Stack:E.a,imageDesktopInterface:x.a,imageStillBTS2:I.a,imageStillSystemDiagram:j.a,imageStillUserFlow:D.a,videoMP4Interface:M.a,videoWebmInterface:T.a,videoMP4Trailer:O.a,videoStillTrailer:X.a,React:c.a,MDXTag:C.MDXTag},N=n(188);n.d(t,"pageQuery",function(){return R});var R="2091711463";t.default=function(e){var t=e.children,n=s()(e,["children"]);return c.a.createElement(u.MDXScopeProvider,{__mdxScope:o()({},P)},c.a.createElement(N.a,n,t))}},170:function(e,t,n){var i=n(6);i(i.S+i.F*!n(18),"Object",{defineProperty:n(28).f})},171:function(e,t,n){var i=n(6);i(i.S,"Date",{now:function(){return(new Date).getTime()}})},172:function(e,t,n){var i,o;
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
!function(r,s){"use strict";i=[n(173)],void 0===(o=function(e){return function(e,t){var n=e.jQuery,i=e.console;function o(e,t){for(var n in t)e[n]=t[n];return e}var r=Array.prototype.slice;function s(e,t,a){if(!(this instanceof s))return new s(e,t,a);var c=e;"string"==typeof e&&(c=document.querySelectorAll(e)),c?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return r.call(e);return[e]}(c),this.options=o({},this.options),"function"==typeof t?a=t:o(this.options,t),a&&this.on("always",a),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):i.error("Bad element for imagesLoaded "+(c||e))}s.prototype=Object.create(t.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&a[t]){for(var n=e.querySelectorAll("img"),i=0;i<n.length;i++){var o=n[i];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(i=0;i<r.length;i++){var s=r[i];this.addElementBackgroundImages(s)}}}};var a={1:!0,9:!0,11:!0};function c(e){this.img=e}function u(e,t){this.url=e,this.element=t,this.img=new Image}return s.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,i=n.exec(t.backgroundImage);null!==i;){var o=i&&i[2];o&&this.addBackground(o,e),i=n.exec(t.backgroundImage)}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.addBackground=function(e,t){var n=new u(e,t);this.images.push(n)},s.prototype.check=function(){var e=this;function t(t,n,i){setTimeout(function(){e.progress(t,n,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},s.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+n,e,t)},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},c.prototype=Object.create(t.prototype),c.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},c.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},c.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype=Object.create(c.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},s.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new s(this,e,t).jqDeferred.promise(n(this))})},s.makeJQueryPlugin(),s}(r,e)}.apply(t,i))||(e.exports=o)}("undefined"!=typeof window?window:this)},173:function(e,t,n){var i,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(i=function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},i=n[e]=n[e]||[];return-1==i.indexOf(t)&&i.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return-1!=i&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var i=this._onceEvents&&this._onceEvents[e],o=0;o<n.length;o++){var r=n[o];i&&i[r]&&(this.off(e,r),delete i[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})?i.call(t,n,t,e):i)||(e.exports=o)},174:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(4),s=n.n(r),a=n(158),c=n(159),u=n(160),d=n(165),h=n(167),f=n(163),p=Object(a.b)("div",{target:"e1rknm1f0"})("padding:",Object(c.d)(1),";&:not(:first-child){padding-left:0;}img{height:100%;display:block;pointer-events:none;user-select:none;}",f.a,"{img{height:calc(",u.d," + 15px);}}",h.a,"{img,video{height:calc(",u.d," + 13px);}}",d.a,"{img{height:calc(",u.d," - 12px);}",h.a,"{video{width:auto;height:calc(",u.d," - 13px);}}}",d.a,",",h.a,",",f.a,"{img,video{font-size:",u.e[0],";width:auto;}}"),m=function(e){var t=e.children;return o.a.createElement(p,null,t)};m.propTypes={children:s.a.node.isRequired},t.a=m},175:function(e,t,n){"use strict";var i=n(8),o=n.n(i),r=n(0),s=n.n(r),a=n(4),c=n.n(a),u=n(176),d=n(158),h=n(159),f=(n(170),n(171),n(187)),p=.04,m=.11;f.window.addEventListener("touchmove",function(){});var l=function(e){var t,n,i,o,r,s,a,c,u,d,h,f=e.source,l=void 0===f?document:f,y=e.update,b=e.multiplier,E=void 0===b?1:b,w=e.friction,x=void 0===w?.92:w,L=e.initialValues,I=e.boundX,k=e.boundY,j=e.bounce,S=void 0===j||j,D=0,B=0,M=Math.abs(.3*E),q=!1,T=!1,A=!1,O=!1,_=[];function X(){document.removeEventListener("touchmove",R,!!g()&&{passive:!1}),document.removeEventListener("touchend",W),document.removeEventListener("touchcancel",F),document.removeEventListener("mousemove",R,!!g()&&{passive:!1}),document.removeEventListener("mouseup",W)}function C(){y.call(l,D,B)}function P(e){if("touchmove"===e.type||"touchstart"===e.type||"touchend"===e.type){var t=e.targetTouches[0]||e.changedTouches[0];return{x:t.clientX,y:t.clientY,id:t.identifier}}return{x:e.clientX,y:e.clientY,id:null}}function N(e){var t=P(e);T||A||(T=!0,O=!1,u=t.id,r=a=t.x,s=c=t.y,_=[],Q(r,s),X(),document.addEventListener("touchmove",R,!!g()&&{passive:!1}),document.addEventListener("touchend",W),document.addEventListener("touchcancel",F),document.addEventListener("mousemove",R,!!g()&&{passive:!1}),document.addEventListener("mouseup",W))}function R(e){e.preventDefault();var t=P(e);T&&t.id===u&&(a=t.x,c=t.y,Q(r,s),function(){q||v(z);q=!0}())}function W(e){var t=P(e);T&&t.id===u&&F()}function F(){T=!1,Q(r,s),function(){var e=_[0],t=_[_.length-1],n=t.x-e.x,i=t.y-e.y,o=(t.time-e.time)/15/E;d=n/o||0,h=i/o||0;var r=Y();(Math.abs(d)>1||Math.abs(h)>1||!r.inBounds)&&(O=!0,v(G))}(),X()}function Q(e,t){for(var n=Date.now();_.length>0&&!(n-_[0].time<=100);)_.shift();_.push({x:e,y:t,time:n})}function z(){var e=a-r,t=c-s;if(D+=e*E,B+=t*E,S){var n=Y();0!==n.x&&(D-=e*J(n.x)*E),0!==n.y&&(B-=t*J(n.y)*E)}else Y(!0);C(),r=a,s=c,q=!1}function J(e){return 5e-6*Math.pow(e,2)+1e-4*e+.55}function Y(e){var r=0,s=0;return void 0!==t&&D<t?r=t-D:void 0!==n&&D>n&&(r=n-D),void 0!==i&&B<i?s=i-B:void 0!==o&&B>o&&(s=o-B),e&&(0!==r&&(D=r>0?t:n),0!==s&&(B=s>0?i:o)),{x:r,y:s,inBounds:0===r&&0===s}}function G(){if(O){D+=d*=x,B+=h*=x;var e=Y();if(Math.abs(d)>M||Math.abs(h)>M||!e.inBounds){if(S){if(0!==e.x)if(e.x*d<=0)d+=e.x*p;else{var r=e.x>0?2.5:-2.5;d=(e.x+r)*m}if(0!==e.y)if(e.y*h<=0)h+=e.y*p;else{var s=e.y>0?2.5:-2.5;h=(e.y+s)*m}}else 0!==e.x&&(D=e.x>0?t:n,d=0),0!==e.y&&(B=e.y>0?i:o,h=0);C(),v(G)}else O=!1}}!function(){if(!(l="string"==typeof l?document.querySelector(l):l))throw new Error("IMPETUS: source not found.");if(!y)throw new Error("IMPETUS: update function not defined.");L&&(L[0]&&(D=L[0]),L[1]&&(B=L[1]),C()),I&&(t=I[0],n=I[1]),k&&(i=k[0],o=k[1]),l.addEventListener("touchstart",N),l.addEventListener("mousedown",N)}(),this.destroy=function(){return l.removeEventListener("touchstart",N),l.removeEventListener("mousedown",N),X(),null},this.pause=function(){X(),T=!1,A=!0},this.resume=function(){A=!1},this.setValues=function(e,t){"number"==typeof e&&(D=e),"number"==typeof t&&(B=t)},this.setMultiplier=function(e){E=e,M=Math.abs(.3*E)},this.setBoundX=function(e){t=e[0],n=e[1]},this.setBoundY=function(e){i=e[0],o=e[1]}},v=f.window.requestAnimationFrame||f.window.webkitRequestAnimationFrame||f.window.mozRequestAnimationFrame||function(e){f.window.setTimeout(e,1e3/60)};function g(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});f.window.addEventListener("test",null,t)}catch(e){}return g=function(){return e},e}var y=n(172),b=n.n(y),E=Object(d.b)(u.Flex,{target:"e1rvxpwz0"})("overflow-x:scroll;margin-bottom:",Object(h.f)("-30px"),";padding-bottom:",Object(h.f)("30px"),";position:relative;touch-action:pan-y;-webkit-overflow-scrolling:touch;transform:translateZ(0);"),w=Object(d.b)("div",{target:"e1rvxpwz1"})("overflow:hidden;cursor:move;cursor:grab;"),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).impetusSource=s.a.createRef(),n}o()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.impetusSource.current;b()(e,function(){var t=e.scrollWidth-e.offsetWidth;new l({source:e,boundX:[-t,0],bounce:!0,update:function(n){var i=-n;e.scrollLeft=i,e.style.transform=i<0?"translateX("+n+"px)":i>t?"translateX(-"+(i-t)+"px)":"translateX(0)"}})})},n.render=function(){return s.a.createElement(w,null,s.a.createElement(E,{innerRef:this.impetusSource},this.props.children))},t}(s.a.Component);x.propTypes={children:c.a.node.isRequired};t.a=x},182:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(4),s=function(e){var t=e.children;return o.a.createElement("div",{className:"device device-iphone-8 device-gray"},o.a.createElement("div",{className:"device-frame"},t),o.a.createElement("div",{className:"device-stripe"}),o.a.createElement("div",{className:"device-header"}),o.a.createElement("div",{className:"device-sensors"}),o.a.createElement("div",{className:"device-btns"}),o.a.createElement("div",{className:"device-power"}))};s.propTypes={children:n.n(r).a.node.isRequired},t.a=s},198:function(e,t,n){e.exports=n.p+"static/trailer-4e3410f43bebfb7d2d7a728db58c0706.jpg"},242:function(e,t,n){e.exports=n.p+"static/interface-61dc751f197e33e311c319a773de854b.jpg"},243:function(e,t,n){e.exports=n.p+"static/bts2-57c1355b949d82392ff657d5f8e7e351.jpg"},244:function(e,t,n){e.exports=n.p+"static/system-diagram-0b4a5f50f45a3b64539160c41160c144.gif"},245:function(e,t,n){e.exports=n.p+"static/user-flow-a888ddbbb7d7331b374a9574435ced70.gif"},246:function(e,t,n){e.exports=n.p+"static/interface-eb9cae44f75dd0b22c48f7f942eb2401.mp4"},247:function(e,t,n){e.exports=n.p+"static/interface-5793b0d24dd36647bb94c34fe022f7e6.webm"},248:function(e,t,n){e.exports=n.p+"static/trailer-4e1079d22066f01717de503c2900817d.mp4"}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-55-f-27-c-394-ef-8-d-0-becbf-25-b-94997-ce-431-scope-hash-1-ab-438-f-2-c-971-db-65653-f-2-e-44-ad-42694-f-js-d0416d8f550378b09e63.js.map