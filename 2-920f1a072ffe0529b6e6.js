(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{159:function(e,t,n){"use strict";n.d(t,"g",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"f",function(){return d}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return b});var r=n(158),i=n(184),o=new(n.n(i).a)({baseFontSize:"1em"}),a={small:576,medium:768,large:992,xLarge:1200,caseStudyLabels:"(min-width: 650px) and (max-width: 992px)"},c={light:300,normal:400,semibold:500,bold:700,xbold:900},d={container:""+Object(r.f)(a.medium),textLength:""+Object(r.f)(650)},s={red:"#fa1955",orange:"#E6B89C",yellow:"#f6d000",green:"#009f6a",blue:"#509afc",darkblue:"#3c6496",gray:["#ddd","#999","#303336","#181e2a"],background:["#f2f5f7","#dce0e5"]},u=Object(r.b)("847px"),b=[Object(r.f)("9px")]},162:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(157),d=Object(c.b)("li",{target:"e1svvtjr0"})("list-style:none;"),s=function(e){var t=e.children;return i.a.createElement(d,null,t)};s.propTypes={children:a.a.node.isRequired}},163:function(e,t,n){"use strict";var r=n(157),i=n(159),o=n(187),a=Object(r.b)(o.a,{target:"e11zbfwe0"})("max-width:",i.f.textLength,";");t.a=a},164:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(83),n(53),n(188),n(54);var r=n(157),i=n(159),o=Object.keys(i.a).reduce(function(e,t){var n="string"==typeof i.a[t]?"":"(min-width:",o="string"==typeof i.a[t]?"":"px)";return e[t]=function(e){return Object(r.a)("@media ",n+i.a[t]+o,"{",e,";}")},e},{})},165:function(e,t,n){var r;e.exports=(r=n(180))&&r.default||r},167:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),i=n.n(r),o=n(157),a=n(194),c=n(158),d=n(163),s=n(195),u=Object(o.b)("div",{target:"e1hz7k070"})("font-size:",Object(c.f)("12px"),";border-radius:",Object(c.f)("2px"),";",d.a," &{",a.a,";}img{width:100%;border:1px solid rgba(0,0,0,0.15);}");t.b=function(e){var t=e.src,n=e.alt,r=e.description;return i.a.createElement(u,null,i.a.createElement("img",{src:t,alt:n}),r&&i.a.createElement(s.a,null,r))}},169:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(157),d=n(162),s=n(158),u=Object(c.b)("ul",{target:"e12wjllb0"})("margin:0;padding:0;border:0;",function(e){return e.inline&&Object(c.a)("margin:0 -",Object(s.d)(-5),";",d.a,"{display:inline-block;margin:",Object(s.d)(-5),";}")},";"),b=function(e){var t=e.children,n=e.inline;return i.a.createElement(u,{inline:n},t)};b.propTypes={children:a.a.node.isRequired,inline:a.a.bool},t.a=b},170:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(160),d=n.n(c);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(28);n.d(t,"waitForRouteChange",function(){return s.c});var u=n(165),b=n.n(u);n.d(t,"PageRenderer",function(){return b.a});var l=n(39);n.d(t,"parsePath",function(){return l.a});var p=i.a.createContext({}),f=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},171:function(e,t){e.exports={site:{title:"Portfolio"},routes:{work:"/work"}}},172:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(157),d=n(186),s=n.n(d),u=n(171),b=n.n(u),l=Object(c.a)("body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,dl,dd,ol,ul,form,fieldset,legend,figure,table,th,td,caption,hr{margin:0;padding:0;}ul{list-style:none;}button{padding:0;border:0;background:transparent;}"),p=n(159),f=Object(c.a)("*{box-sizing:border-box;}html,body{padding:0;margin:0;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Roboto Light','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background:",p.b.background[0],";color:",p.b.gray[2],";}@media screen and (min-width:800px){html{font-size:calc(1.125em + 0.05vw);}}"),h=n(158),g=Object(c.a)(".device,.device::before,.device::after,.device *,.device *::before,.device *::after{box-sizing:border-box;display:block;}.device{position:relative;transform:scale(1);z-index:1;img{border:1px solid ",p.b.gray[0],";height:100%;}}.device .device-frame{z-index:1;}.device .device-content{background-color:#fff;background-position:center center;background-size:cover;object-fit:cover;position:relative;}.device-iphone-8{font-size:",p.e[0],";height:",p.d,";width:",Object(h.b)("419px"),";}.device-iphone-8 .device-frame{background:#fff;border-radius:",Object(h.b)("68px"),";box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #c8cacb,inset 0 0 0 ",Object(h.b)("7px")," #e2e3e4;height:",Object(h.b)("871px"),";padding:",Object(h.b)("102px")," ",Object(h.b)("22px"),";width:",Object(h.b)("419px"),";}.device-iphone-8 .device-content{border:",Object(h.b)("2px")," solid #222;border-radius:",Object(h.b)("4px"),";height:",Object(h.b)("667px"),";width:",Object(h.b)("375px"),";}.device-iphone-8 .device-stripe::after,.device-iphone-8 .device-stripe::before{border:solid rgba(51,51,51,0.15);border-width:0 ",Object(h.b)("7px"),";content:'';height:",Object(h.b)("6px"),";left:0;position:absolute;width:100%;z-index:9;}.device-iphone-8 .device-stripe::after{top:",Object(h.b)("68px"),";}.device-iphone-8 .device-stripe::before{bottom:",Object(h.b)("68px"),";}.device-iphone-8 .device-header{border:",Object(h.b)("2px")," solid #c8cacb;border-radius:50%;bottom:",Object(h.b)("5px"),";height:",Object(h.b)("58px"),";left:50%;margin-left:",Object(h.b)("-29px"),";position:absolute;width:",Object(h.b)("58px"),";}.device-iphone-8 .device-sensors{background:#666;border-radius:",Object(h.b)("3px"),";height:",Object(h.b)("6px"),";left:50%;margin-left:",Object(h.b)("-38px"),";position:absolute;top:",Object(h.b)("52px"),";width:",Object(h.b)("76px"),";}.device-iphone-8 .device-sensors::after,.device-iphone-8 .device-sensors::before{background:#666;border-radius:50%;content:'';position:absolute;}.device-iphone-8 .device-sensors::after{height:",Object(h.b)("10px"),";left:50%;margin-left:",Object(h.b)("-5px"),";top:",Object(h.b)("-25px"),";width:",Object(h.b)("10px"),";}.device-iphone-8 .device-sensors::before{height:",Object(h.b)("12px"),";left:",Object(h.b)("-42px"),";margin-top:",Object(h.b)("-6px"),";top:50%;width:",Object(h.b)("12px"),";}.device-iphone-8 .device-btns{background:#c8cacb;height:",Object(h.b)("30px"),";left:",Object(h.b)("-3px"),";position:absolute;top:",Object(h.b)("102px"),";width:",Object(h.b)("3px"),";}.device-iphone-8 .device-btns::after,.device-iphone-8 .device-btns::before{background:#c8cacb;content:'';height:",Object(h.b)("56px"),";left:0;position:absolute;width:",Object(h.b)("3px"),";}.device-iphone-8 .device-btns::after{top:",Object(h.b)("62px"),";}.device-iphone-8 .device-btns::before{top:",Object(h.b)("132px"),";}.device-iphone-8 .device-power{background:#c8cacb;height:",Object(h.b)("80px"),";position:absolute;right:",Object(h.b)("-2px"),";top:",Object(h.b)("160px"),";width:",Object(h.b)("3px"),";}.device-iphone-8.device-gold .device-frame{box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #e4b08a,inset 0 0 0 ",Object(h.b)("7px")," #f7e8dd;}.device-iphone-8.device-gold .device-header{border-color:#e4b08a;}.device-iphone-8.device-gold .device-btns,.device-iphone-8.device-gold .device-btns::after,.device-iphone-8.device-gold .device-btns::before{background:#e4b08a;}.device-iphone-8.device-gold .device-power{background:#e4b08a;}.device-iphone-8.device-spacegray .device-frame{background:#222;box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #74747a,inset 0 0 0 ",Object(h.b)("7px")," #9b9ba0;}.device-iphone-8.device-spacegray .device-stripe::after,.device-iphone-8.device-spacegray .device-stripe::before{border-color:rgba(204,204,204,0.35);}.device-iphone-8.device-spacegray .device-btns,.device-iphone-8.device-spacegray .device-btns::after,.device-iphone-8.device-spacegray .device-btns::before{background:#74747a;}");Object(c.c)(Object(h.e)()," ",l," ",f," ",g);var v=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(s.a,null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("title",null,b.a.site.title)),t)};v.propTypes={children:a.a.node.isRequired};t.a=v},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,o(n(60)).default)({}),c=a.Provider,d=a.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scope"]);return i.default.createElement(d,null,function(t){return i.default.createElement(e,r({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return i.default.createElement(c,{value:t},n)}},174:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(0),i=n.n(r),o=n(157),a=n(159),c=n(194),d=n(158),s=n(167),u=n(185),b=n(195),l=n(163),p=Object(o.b)("span",{target:"e8glpa50"})("height:12px;width:12px;border-radius:50%;display:inline-block;margin-right:8px;",function(e){var t=e.variant;return Object(o.a)("background-color:",a.b[t],";border:1px solid ",a.b[t],";")},";"),f=Object(o.b)("div",{target:"e8glpa51"})("background-color:",Object(d.c)(.06,a.b.gray[0]),";padding:5px 12px;border-radius:",Object(d.f)("8px"),";border-bottom-left-radius:0;border-bottom-right-radius:0;border:1px solid ",a.b.gray[0],";"),h=Object(o.b)("div",{target:"e8glpa52"})("overflow:hidden;"),g=Object(o.b)("div",{target:"e8glpa53"})("font-size:",Object(d.f)("12px"),";",l.a," &{",c.a,";}",u.a,"{video{width:100%;border-radius:0;}border:0;padding:0;border-radius:0;background:none;}",s.a,"{",l.a," &{margin:0;}img{border-color:",a.b.gray[0],";border-top:0;}}",b.a,"{margin-top:",Object(d.d)(0),";}");t.b=function(e){var t=e.children,n=e.description;return i.a.createElement(g,null,i.a.createElement(h,null,i.a.createElement(f,null,i.a.createElement(p,{variant:"red"}),i.a.createElement(p,{variant:"yellow"}),i.a.createElement(p,{variant:"green"})),t),n&&i.a.createElement(b.a,null,n))}},175:function(e,t,n){"use strict";n(84);var r=n(161),i=n.n(r),o=n(0),a=n.n(o),c=n(157),d=n(170),s=n(159),u=Object(c.a)("color:",s.b.blue,";text-decoration:none;");t.a=function(e){var t=e.children,n=e.to,r=i()(e,["children","to"]);return/^(https?:\/\/)/.test(n)?a.a.createElement("a",Object.assign({className:u,href:n},r),t):a.a.createElement(d.Link,Object.assign({className:u,to:n},r),t)}},176:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(157),d=n(158),s=n(159),u=n(174),b=n(185),l=n(167),p=Object(c.b)("div",{target:"e1rknm1f0"})("padding:",Object(d.d)(1),";&:not(:first-child){padding-left:0;}img{height:100%;display:block;pointer-events:none;user-select:none;}",l.a,"{img{height:calc(",s.d," + 15px);}}",u.a,"{img{height:calc(",s.d," - 12px);}}",b.a,"{img,video{height:calc(",s.d," + 3px);}}",u.a,",",b.a,",",l.a,"{img,video{font-size:",s.e[0],";width:auto;}}"),f=function(e){var t=e.children;return i.a.createElement(p,null,t)};f.propTypes={children:a.a.node.isRequired},t.a=f},177:function(e,t,n){"use strict";var r=n(157),i=n(159),o=n(158),a=Object(r.b)("div",{target:"e1w9ok0o0"})("&:first-child{margin-top:",Object(o.d)(2),";}& + &{margin-top:",Object(o.d)(4),";}h2{",i.g.h3,";}h3{",i.g.h4,";}h4{",i.g.h5,";}p,li{",i.g.content,";}p{&:last-child{margin-bottom:0;}}ul li{list-style:disc;}");t.a=a},178:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(157),a=n(158),c=n(159),d=n(162),s=n(179),u=Object(o.b)("h2",{target:"ecz42wg0"})(),b=Object(o.b)("div",{target:"ecz42wg1"})("max-width:",c.f.textLength,";margin-bottom:",Object(a.d)(3),";font-size:0.8rem;background:",c.b.gray[0],";padding:",Object(a.d)(1),";",s.d,"{margin-top:",Object(a.d)(2),";}",d.a,"{list-style:none;margin-bottom:",Object(a.f)("10px"),";margin-right:",Object(a.f)("5px"),";p{margin-bottom:0;font-style:italic;}}",u,"{",c.g.h4,";margin-right:",Object(a.d)(0),";}");t.a=function(e){var t=e.children;return i.a.createElement(b,null,i.a.createElement(u,null,"Stack"),t)}},179:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"e",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"b",function(){return g});var r=n(161),i=n.n(r),o=n(0),a=n.n(o),c=n(157),d=n(158),s=n(159),u=n(164),b=function(e){var t=e.children,n=e.element,r=i()(e,["children","element"]);return a.a.createElement(n,r,t)},l=Object(c.b)(b,{target:"ern6nz90"})("font-size:",Object(d.d)(3),";line-height:0.9;",u.a.medium(Object(c.a)("font-size:",Object(d.d)(4),";")),";",u.a.large(Object(c.a)("font-size:",Object(d.d)(5),";line-height:0.9;")),";"),p=Object(c.b)(b,{target:"ern6nz91"})(s.g.h3,";",u.a.medium(Object(c.a)(s.g.h2,";")),";",u.a.large(Object(c.a)(s.g.h1,";")),";"),f=Object(c.b)(b,{target:"ern6nz92"})(s.g.h5,";",u.a.medium(Object(c.a)(s.g.h4,";")),";",u.a.large(Object(c.a)(s.g.h3,";")),";color:",Object(d.c)(.3,s.b.gray[2]),";font-weight:300;"),h=Object(c.b)(b,{target:"ern6nz93"})(s.g.h5,";color:",Object(d.c)(.3,s.b.gray[2]),";"),g=Object(c.b)(b,{target:"ern6nz94"})(s.g.h5,";color:",s.b.blue,";border-bottom:1px solid ",Object(d.c)(.6,s.b.gray[2]),";padding-bottom:",s.g.baseSpacing(.25),";")},180:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(56),d=n(1),s=function(e){var t=e.location,n=d.default.getResourcesForPathname(t.pathname);return i.a.createElement(c.a,{location:t,pageResources:n})};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},181:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(214);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var i=n(191);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(i).default}})},182:function(e,t,n){"use strict";n(216);var r=n(0),i=n.n(r),o=n(166),a=n(157),c=n(191),d=n(173),s=Object(d.withMDXScope)(Object(c.withMDXComponents)(({scope:e={},components:t={},children:n,...r})=>{const i={components:t,props:r,...e},o=Object.keys(i),a=o.map(e=>i[e]);return new Function("_fn",...o,`${n}`)({},...a)({components:t,...r})})),u=n(172),b=n(158),l=n(159),p=(n(83),n(53),n(188),n(225),n(226),n(8)),f=n.n(p),h=n(4),g=n.n(h),v=n(179),m=n(164),y={gray:Object(a.a)("background:#232526;background:linear-gradient(to right,#232526,#414345);"),blue:Object(a.a)("background:#1488cc;background:linear-gradient(to right,#1488cc,#2b32b2);"),green:Object(a.a)("background:#1d976c;background:linear-gradient(to right,#1d976c,#93f9b9);"),orange:Object(a.a)("background:#ff7e5f;background:linear-gradient(to right,#de6262,#ffb88c);"),blush:Object(a.a)("background:#ffb4b3;background:linear-gradient(to right,#ffb4b3,#ffc5c4);"),purple:Object(a.a)("background:#9d50bb;background:linear-gradient(to right,#9d50bb,#6e48aa);"),red:Object(a.a)("background:#cb356b;background:linear-gradient(to right,#cb356b,#bd3f32);"),yellow:Object(a.a)("background:#e2a907;background:linear-gradient(to right,#e2a907 25%,#f5cd4f);"),darkblue:Object(a.a)("background:#021e42;background:linear-gradient(to right,#021e42,#3c6496);")},j=Object(a.b)("div",{target:"e6a0o920"})("padding:",Object(b.d)(4),";",function(e){var t=e.background;return y[t]},";",m.a.medium(Object(a.a)("padding:",Object(b.d)(6),";")),";",m.a.large(Object(a.a)("padding:",Object(b.d)(7),";")),";",function(e){return e.overhang&&Object(a.a)("padding-bottom:",Object(b.d)(9),";margin-bottom:-",Object(b.d)(8.6),";",m.a.medium(Object(a.a)("padding-bottom:",Object(b.d)(10),";margin-bottom:-",Object(b.d)(9),";")),";",m.a.large(Object(a.a)("padding-bottom:",Object(b.d)(10),";margin-bottom:-",Object(b.d)(9),";")),";")},";"),O=Object(a.b)(v.a,{target:"e6a0o921"})("color:white;"),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).storeReservedBackground=function(){n.storedBackgrounds.includes(n.props.background)||(n.storedBackgrounds.push(n.props.background),"undefined"!=typeof window&&window.sessionStorage.setItem("backgrounds",JSON.stringify(n.storedBackgrounds)))},n.getReservedBackgrounds=function(){var e="undefined"!=typeof window&&JSON.parse(window.sessionStorage.getItem("backgrounds"));return e&&e.length>0?e:[]},n.pickRandomBackground=function(){var e=Object.keys(y),t=e[Math.floor(Math.random()*e.length)];return n.getReservedBackgrounds().includes(t)?n.pickRandomBackground():t},n.storedBackgrounds=n.getReservedBackgrounds(),t.background&&n.storeReservedBackground(),n}return f()(t,e),t.prototype.render=function(){return i.a.createElement(j,{overhang:this.props.overhang,background:this.props.background||this.pickRandomBackground()},i.a.createElement(O,{element:"h1"},this.props.title))},t}(i.a.Component);x.propTypes={title:g.a.string.isRequired,overhang:g.a.bool};var w=x,k=n(163),E=n(175),L=Object(a.b)(E.a,{target:"e1v3nt8o0"})("font-weight:",l.c.bold,";color:white;padding:",Object(b.d)(-3)," ",Object(b.d)(-1),";border-radius:",Object(b.d)(-4),";text-decoration:none;transition:0.1s all linear;"),S=Object(a.b)(L,{target:"e1v3nt8o1"})("margin-left:auto;background:",l.b.blue,";",function(e){var t=e.background;return y[t]},";&:hover{background-color:",Object(b.a)(.06,l.b.blue),";}"),P=Object(a.b)(L,{target:"e1v3nt8o2"})("margin-right:auto;background:",l.b.green,";",function(e){var t=e.background;return y[t]},";&:hover{background-color:",Object(b.a)(.03,l.b.green),";}");t.a=function(e){var t=e.data,n=e.pageContext,r=t.mdx,a=r.frontmatter,c=r.code,d=n.prev,b=n.next;return i.a.createElement(u.a,null,i.a.createElement(w,{background:a.background,overhang:a.overhang,title:a.title}),i.a.createElement(s,null,c.body),i.a.createElement(k.a,null,i.a.createElement(o.Flex,{justifyContent:"space-between",flexDirection:"row"},d&&i.a.createElement(P,{to:d.fields.slug,background:d.frontmatter.background},"←  ",d.frontmatter.title),b&&i.a.createElement(S,{to:b.fields.slug,background:b.frontmatter.background},b.frontmatter.title,"  →"))))}},183:function(e,t,n){"use strict";var r=n(8),i=n.n(r),o=n(0),a=n.n(o),c=n(4),d=n.n(c),s=n(166),u=n(157),b=n(158),l=(n(197),n(198),.04),p=.11;window.addEventListener("touchmove",function(){});var f=function(e){var t,n,r,i,o,a,c,d,s,u,b,f=e.source,v=void 0===f?document:f,m=e.update,y=e.multiplier,j=void 0===y?1:y,O=e.friction,x=void 0===O?.92:O,w=e.initialValues,k=e.boundX,E=e.boundY,L=e.bounce,S=void 0===L||L,P=0,_=0,I=Math.abs(.3*j),q=!1,M=!1,B=!1,C=!1,R=[];function D(){document.removeEventListener("touchmove",A,!!g()&&{passive:!1}),document.removeEventListener("touchend",F),document.removeEventListener("touchcancel",N),document.removeEventListener("mousemove",A,!!g()&&{passive:!1}),document.removeEventListener("mouseup",F)}function z(){m.call(v,P,_)}function T(e){if("touchmove"===e.type||"touchstart"===e.type||"touchend"===e.type){var t=e.targetTouches[0]||e.changedTouches[0];return{x:t.clientX,y:t.clientY,id:t.identifier}}return{x:e.clientX,y:e.clientY,id:null}}function X(e){var t=T(e);M||B||(M=!0,C=!1,s=t.id,o=c=t.x,a=d=t.y,R=[],U(o,a),D(),document.addEventListener("touchmove",A,!!g()&&{passive:!1}),document.addEventListener("touchend",F),document.addEventListener("touchcancel",N),document.addEventListener("mousemove",A,!!g()&&{passive:!1}),document.addEventListener("mouseup",F))}function A(e){e.preventDefault();var t=T(e);M&&t.id===s&&(c=t.x,d=t.y,U(o,a),function(){q||h(Q);q=!0}())}function F(e){var t=T(e);M&&t.id===s&&N()}function N(){M=!1,U(o,a),function(){var e=R[0],t=R[R.length-1],n=t.x-e.x,r=t.y-e.y,i=(t.time-e.time)/15/j;u=n/i||0,b=r/i||0;var o=J();(Math.abs(u)>1||Math.abs(b)>1||!o.inBounds)&&(C=!0,h(G))}(),D()}function U(e,t){for(var n=Date.now();R.length>0&&!(n-R[0].time<=100);)R.shift();R.push({x:e,y:t,time:n})}function Q(){var e=c-o,t=d-a;if(P+=e*j,_+=t*j,S){var n=J();0!==n.x&&(P-=e*W(n.x)*j),0!==n.y&&(_-=t*W(n.y)*j)}else J(!0);z(),o=c,a=d,q=!1}function W(e){return 5e-6*Math.pow(e,2)+1e-4*e+.55}function J(e){var o=0,a=0;return void 0!==t&&P<t?o=t-P:void 0!==n&&P>n&&(o=n-P),void 0!==r&&_<r?a=r-_:void 0!==i&&_>i&&(a=i-_),e&&(0!==o&&(P=o>0?t:n),0!==a&&(_=a>0?r:i)),{x:o,y:a,inBounds:0===o&&0===a}}function G(){if(C){P+=u*=x,_+=b*=x;var e=J();if(Math.abs(u)>I||Math.abs(b)>I||!e.inBounds){if(S){if(0!==e.x)if(e.x*u<=0)u+=e.x*l;else{var o=e.x>0?2.5:-2.5;u=(e.x+o)*p}if(0!==e.y)if(e.y*b<=0)b+=e.y*l;else{var a=e.y>0?2.5:-2.5;b=(e.y+a)*p}}else 0!==e.x&&(P=e.x>0?t:n,u=0),0!==e.y&&(_=e.y>0?r:i,b=0);z(),h(G)}else C=!1}}!function(){if(!(v="string"==typeof v?document.querySelector(v):v))throw new Error("IMPETUS: source not found.");if(!m)throw new Error("IMPETUS: update function not defined.");w&&(w[0]&&(P=w[0]),w[1]&&(_=w[1]),z()),k&&(t=k[0],n=k[1]),E&&(r=E[0],i=E[1]),v.addEventListener("touchstart",X),v.addEventListener("mousedown",X)}(),this.destroy=function(){return v.removeEventListener("touchstart",X),v.removeEventListener("mousedown",X),D(),null},this.pause=function(){D(),M=!1,B=!0},this.resume=function(){B=!1},this.setValues=function(e,t){"number"==typeof e&&(P=e),"number"==typeof t&&(_=t)},this.setMultiplier=function(e){j=e,I=Math.abs(.3*j)},this.setBoundX=function(e){t=e[0],n=e[1]},this.setBoundY=function(e){r=e[0],i=e[1]}},h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};function g(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return g=function(){return e},e}var v=n(199),m=n.n(v),y=Object(u.b)(s.Flex,{target:"e1rvxpwz0"})("overflow-x:scroll;margin-bottom:",Object(b.f)("-30px"),";padding-bottom:",Object(b.f)("30px"),";position:relative;transform:translateZ(0);"),j=Object(u.b)("div",{target:"e1rvxpwz1"})("overflow:hidden;cursor:move;cursor:grab;"),O=function(e){function t(t){var n;return(n=e.call(this,t)||this).impetusSource=a.a.createRef(),n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.impetusSource.current;m()(e,function(){var t=e.scrollWidth-e.offsetWidth;new f({source:e,boundX:[-t,0],bounce:!0,update:function(n){var r=-n;e.scrollLeft=r,e.style.transform=r<0?"translateX("+n+"px)":r>t?"translateX(-"+(r-t)+"px)":"translateX(0)"}})})},n.render=function(){return a.a.createElement(j,null,a.a.createElement(y,{innerRef:this.impetusSource},this.props.children))},t}(a.a.Component);O.propTypes={children:d.a.node.isRequired};t.a=O},185:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),o=n(157),a=n(159),c=n(158),d=Object(o.b)("div",{target:"e1gx2pys0"})("background-color:",a.b.gray[3],";border-radius:",Object(c.f)("8px"),";padding:",Object(c.f)("5px")," ",Object(c.f)("5px")," ",Object(c.f)("2px"),";video{border-radius:",Object(c.f)("4px"),";}");t.b=function(e){return i.a.createElement(d,null,i.a.createElement("video",e,e.children))}},187:function(e,t,n){"use strict";var r=n(166),i=n(157),o=n(159),a=n(164),c=n(158),d=Object(i.b)(r.Flex,{target:"ea8yhbo0"})("flex-direction:column;margin:0 auto;max-width:",o.f.container,";width:100%;padding:",Object(c.d)(1),";",a.a.medium(Object(i.a)("padding:",Object(c.d)(2),";")),";",a.a.large(Object(i.a)("padding:",Object(c.d)(3),";")),";");t.a=d},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(0)),o=c(n(60)),a=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var d=(0,o.default)({}),s=d.Provider,u=d.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return i.default.createElement(u,null,function(t){return i.default.createElement(e,r({components:n||t},o))})}};var b=function(e){var t=e.components,n=e.children;return i.default.createElement(s,{value:t},n)};b.propTypes={components:a.default.object.isRequired,children:a.default.element.isRequired},t.default=b},194:function(e,t,n){"use strict";var r=n(157),i=n(158),o=Object(r.a)("margin:",Object(i.d)(4)," -",Object(i.d)(6),";");t.a=o},195:function(e,t,n){"use strict";var r=n(157),i=n(159),o=Object(r.b)("p",{target:"e26jhem0"})("font-style:italic;color:",i.b.gray[1],";");t.a=o},197:function(e,t,n){var r=n(6);r(r.S+r.F*!n(19),"Object",{defineProperty:n(30).f})},198:function(e,t,n){var r=n(6);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},199:function(e,t,n){var r,i;
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
!function(o,a){"use strict";r=[n(200)],void 0===(i=function(e){return function(e,t){var n=e.jQuery,r=e.console;function i(e,t){for(var n in t)e[n]=t[n];return e}var o=Array.prototype.slice;function a(e,t,c){if(!(this instanceof a))return new a(e,t,c);var d=e;"string"==typeof e&&(d=document.querySelectorAll(e)),d?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return o.call(e);return[e]}(d),this.options=i({},this.options),"function"==typeof t?c=t:i(this.options,t),c&&this.on("always",c),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(d||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&c[t]){for(var n=e.querySelectorAll("img"),r=0;r<n.length;r++){var i=n[r];this.addImage(i)}if("string"==typeof this.options.background){var o=e.querySelectorAll(this.options.background);for(r=0;r<o.length;r++){var a=o[r];this.addElementBackgroundImages(a)}}}};var c={1:!0,9:!0,11:!0};function d(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(t.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,e),r=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new d(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new s(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,r){setTimeout(function(){e.progress(t,n,r)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},d.prototype=Object.create(t.prototype),d.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},d.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},d.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},d.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},d.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},d.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},d.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(d.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(o,e)}.apply(t,r))||(e.exports=i)}("undefined"!=typeof window?window:this)},200:function(e,t,n){var r,i;"undefined"!=typeof window&&window,void 0===(i="function"==typeof(r=function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},r=n[e]=n[e]||[];return-1==r.indexOf(t)&&r.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var r=n.indexOf(t);return-1!=r&&n.splice(r,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var r=this._onceEvents&&this._onceEvents[e],i=0;i<n.length;i++){var o=n[i];r&&r[o]&&(this.off(e,o),delete r[o]),o.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})?r.call(t,n,t,e):r)||(e.exports=i)},214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=s(o),c=s(n(215)),d=n(191);function s(e){return e&&e.__esModule?e:{default:e}}var u={inlineCode:"code",wrapper:"div"},b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,i=e.props,o=void 0===i?{}:i,d=e.children,s=e.components,b=void 0===s?{}:s,l=e.Layout,p=e.layoutProps,f=b[n+"."+t]||b[t]||u[t]||t;return l?((0,c.default)(this,l),a.default.createElement(l,r({components:b},p),a.default.createElement(f,o,d))):a.default.createElement(f,o,d)}}]),t}();t.default=(0,d.withMDXComponents)(b)},215:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,u=s&&s(Object);e.exports=function e(t,n,b){if("string"!=typeof n){if(u){var l=s(n);l&&l!==u&&e(t,l,b)}var p=a(n);c&&(p=p.concat(c(n)));for(var f=0;f<p.length;++f){var h=p[f];if(!(r[h]||i[h]||b&&b[h])){var g=d(n,h);try{o(t,h,g)}catch(e){}}}return t}return t}},216:function(e,t,n){"use strict";n(217)("bold",function(e){return function(){return e(this,"b","","")}})},217:function(e,t,n){var r=n(6),i=n(18),o=n(29),a=/"/g,c=function(e,t,n,r){var i=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},225:function(e,t,n){"use strict";var r=n(6),i=n(57)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(58)("includes")},226:function(e,t,n){"use strict";var r=n(6),i=n(227);r(r.P+r.F*n(228)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},227:function(e,t,n){var r=n(86),i=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},228:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}}}]);
//# sourceMappingURL=2-920f1a072ffe0529b6e6.js.map