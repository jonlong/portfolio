(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(e,t,n){"use strict";n.d(t,"g",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"f",function(){return d}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return s}),n.d(t,"e",function(){return l});var r=n(159),i=n(186),o=new(n.n(i).a)({baseFontSize:"1em"}),a={small:576,medium:768,large:992,xLarge:1200,caseStudyLabels:"(min-width: 650px) and (max-width: 992px)",pagination:"(min-width: 650px)"},c={light:300,normal:400,semibold:500,bold:700,xbold:900},d={container:""+Object(r.f)(a.medium),textLength:""+Object(r.f)(650)},u={red:"#fa1955",orange:"#E6B89C",yellow:"#f6d000",green:"#009f6a",blue:"#509afc",darkblue:"#3c6496",gray:["#ddd","#999","#303336","#181e2a"],background:["#f2f5f7","#dce0e5"]},s=Object(r.b)("847px"),l=[Object(r.f)("9px")]},163:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=Object(c.b)("li",{target:"e1svvtjr0"})("list-style:none;"),u=function(e){var t=e.children;return i.a.createElement(d,null,t)};u.propTypes={children:a.a.node.isRequired}},164:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(83),n(53),n(188),n(54);var r=n(158),i=n(160),o=Object.keys(i.a).reduce(function(e,t){var n="string"==typeof i.a[t]?"":"(min-width:",o="string"==typeof i.a[t]?"":"px)";return e[t]=function(e){return Object(r.a)("@media ",n+i.a[t]+o,"{",e,";}")},e},{})},165:function(e,t,n){"use strict";var r=n(158),i=n(160),o=n(189),a=Object(r.b)(o.a,{target:"e11zbfwe0"})("max-width:",i.f.textLength,";");t.a=a},166:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(0),i=n.n(r),o=n(158),a=n(196),c=n(159),d=n(165),u=n(197),s=Object(o.b)("div",{target:"e1hz7k070"})("font-size:",Object(c.f)("12px"),";border-radius:",Object(c.f)("2px"),";",d.a," &{",a.a,";}img{width:100%;border:1px solid rgba(0,0,0,0.15);}");t.b=function(e){var t=e.src,n=e.alt,r=e.description;return i.a.createElement(s,null,i.a.createElement("img",{src:t,alt:n}),r&&i.a.createElement(u.a,null,r))}},167:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(163),u=n(159),s=Object(c.b)("ul",{target:"e12wjllb0"})("margin:0;padding:0;border:0;",function(e){return e.inline&&Object(c.a)("margin:0 -",Object(u.d)(-5),";",d.a,"{display:inline-block;margin:",Object(u.d)(-5),";}")},";"),l=function(e){var t=e.children,n=e.inline;return i.a.createElement(s,{inline:n},t)};l.propTypes={children:a.a.node.isRequired,inline:a.a.bool},t.a=l},168:function(e,t,n){var r;e.exports=(r=n(184))&&r.default||r},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,o(n(60)).default)({}),c=a.Provider,d=a.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scope"]);return i.default.createElement(d,null,function(t){return i.default.createElement(e,r({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return i.default.createElement(c,{value:t},n)}},170:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(0),i=n.n(r),o=n(158),a=n(160),c=n(196),d=n(159),u=n(166),s=n(182),l=n(197),b=n(165),p=Object(o.b)("span",{target:"e8glpa50"})("height:12px;width:12px;border-radius:50%;display:inline-block;margin-right:8px;",function(e){var t=e.variant;return Object(o.a)("background-color:",a.b[t],";border:1px solid ",a.b[t],";")},";"),f=Object(o.b)("div",{target:"e8glpa51"})("background-color:",Object(d.c)(.06,a.b.gray[0]),";padding:5px 12px;border-radius:",Object(d.f)("8px"),";border-bottom-left-radius:0;border-bottom-right-radius:0;border:1px solid ",a.b.gray[0],";"),h=Object(o.b)("div",{target:"e8glpa52"})("overflow:hidden;"),g=Object(o.b)("div",{target:"e8glpa53"})("font-size:",Object(d.f)("12px"),";",b.a," &{",c.a,";}",s.a,"{video{width:100%;border-radius:0;}border:0;padding:0;border-radius:0;background:none;}",u.a,"{",b.a," &{margin:0;}img{border-color:",a.b.gray[0],";border-top:0;}}",l.a,"{margin-top:",Object(d.d)(0),";}");t.b=function(e){var t=e.children,n=e.description;return i.a.createElement(g,null,i.a.createElement(h,null,i.a.createElement(f,null,i.a.createElement(p,{variant:"red"}),i.a.createElement(p,{variant:"yellow"}),i.a.createElement(p,{variant:"green"})),t),n&&i.a.createElement(l.a,null,n))}},172:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(161),d=n.n(c);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(28);n.d(t,"waitForRouteChange",function(){return u.c});var s=n(168),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var b=n(39);n.d(t,"parsePath",function(){return b.a});var p=i.a.createContext({}),f=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},173:function(e,t){e.exports={site:{title:"Portfolio"},routes:{work:"/work"}}},174:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(187),u=n.n(d),s=n(173),l=n.n(s),b=Object(c.a)("body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,dl,dd,ol,ul,form,fieldset,legend,figure,table,th,td,caption,hr{margin:0;padding:0;}ul{list-style:none;}button{padding:0;border:0;background:transparent;}"),p=n(160),f=Object(c.a)("*{box-sizing:border-box;}html,body{padding:0;margin:0;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Roboto Light','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background:",p.b.background[0],";color:",p.b.gray[2],";}@media screen and (min-width:800px){html{font-size:calc(1.125em + 0.05vw);}}"),h=n(159),g=Object(c.a)(".device,.device::before,.device::after,.device *,.device *::before,.device *::after{box-sizing:border-box;display:block;}.device{position:relative;transform:scale(1);z-index:1;img{border:1px solid ",p.b.gray[0],";height:100%;}}.device .device-frame{z-index:1;}.device .device-content{background-color:#fff;background-position:center center;background-size:cover;object-fit:cover;position:relative;}.device-iphone-8{font-size:",p.e[0],";height:",p.d,";width:",Object(h.b)("419px"),";}.device-iphone-8 .device-frame{background:#fff;border-radius:",Object(h.b)("68px"),";box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #c8cacb,inset 0 0 0 ",Object(h.b)("7px")," #e2e3e4;height:",Object(h.b)("871px"),";padding:",Object(h.b)("102px")," ",Object(h.b)("22px"),";width:",Object(h.b)("419px"),";}.device-iphone-8 .device-content{border:",Object(h.b)("2px")," solid #222;border-radius:",Object(h.b)("4px"),";height:",Object(h.b)("667px"),";width:",Object(h.b)("375px"),";}.device-iphone-8 .device-stripe::after,.device-iphone-8 .device-stripe::before{border:solid rgba(51,51,51,0.15);border-width:0 ",Object(h.b)("7px"),";content:'';height:",Object(h.b)("6px"),";left:0;position:absolute;width:100%;z-index:9;}.device-iphone-8 .device-stripe::after{top:",Object(h.b)("68px"),";}.device-iphone-8 .device-stripe::before{bottom:",Object(h.b)("68px"),";}.device-iphone-8 .device-header{border:",Object(h.b)("2px")," solid #c8cacb;border-radius:50%;bottom:",Object(h.b)("5px"),";height:",Object(h.b)("58px"),";left:50%;margin-left:",Object(h.b)("-29px"),";position:absolute;width:",Object(h.b)("58px"),";}.device-iphone-8 .device-sensors{background:#666;border-radius:",Object(h.b)("3px"),";height:",Object(h.b)("6px"),";left:50%;margin-left:",Object(h.b)("-38px"),";position:absolute;top:",Object(h.b)("52px"),";width:",Object(h.b)("76px"),";}.device-iphone-8 .device-sensors::after,.device-iphone-8 .device-sensors::before{background:#666;border-radius:50%;content:'';position:absolute;}.device-iphone-8 .device-sensors::after{height:",Object(h.b)("10px"),";left:50%;margin-left:",Object(h.b)("-5px"),";top:",Object(h.b)("-25px"),";width:",Object(h.b)("10px"),";}.device-iphone-8 .device-sensors::before{height:",Object(h.b)("12px"),";left:",Object(h.b)("-42px"),";margin-top:",Object(h.b)("-6px"),";top:50%;width:",Object(h.b)("12px"),";}.device-iphone-8 .device-btns{background:#c8cacb;height:",Object(h.b)("30px"),";left:",Object(h.b)("-3px"),";position:absolute;top:",Object(h.b)("102px"),";width:",Object(h.b)("3px"),";}.device-iphone-8 .device-btns::after,.device-iphone-8 .device-btns::before{background:#c8cacb;content:'';height:",Object(h.b)("56px"),";left:0;position:absolute;width:",Object(h.b)("3px"),";}.device-iphone-8 .device-btns::after{top:",Object(h.b)("62px"),";}.device-iphone-8 .device-btns::before{top:",Object(h.b)("132px"),";}.device-iphone-8 .device-power{background:#c8cacb;height:",Object(h.b)("80px"),";position:absolute;right:",Object(h.b)("-2px"),";top:",Object(h.b)("160px"),";width:",Object(h.b)("3px"),";}.device-iphone-8.device-gold .device-frame{box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #e4b08a,inset 0 0 0 ",Object(h.b)("7px")," #f7e8dd;}.device-iphone-8.device-gold .device-header{border-color:#e4b08a;}.device-iphone-8.device-gold .device-btns,.device-iphone-8.device-gold .device-btns::after,.device-iphone-8.device-gold .device-btns::before{background:#e4b08a;}.device-iphone-8.device-gold .device-power{background:#e4b08a;}.device-iphone-8.device-spacegray .device-frame{background:#222;box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #74747a,inset 0 0 0 ",Object(h.b)("7px")," #9b9ba0;}.device-iphone-8.device-spacegray .device-stripe::after,.device-iphone-8.device-spacegray .device-stripe::before{border-color:rgba(204,204,204,0.35);}.device-iphone-8.device-spacegray .device-btns,.device-iphone-8.device-spacegray .device-btns::after,.device-iphone-8.device-spacegray .device-btns::before{background:#74747a;}");Object(c.c)(Object(h.e)()," ",b," ",f," ",g);var v=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("title",null,l.a.site.title)),t)};v.propTypes={children:a.a.node.isRequired};t.a=v},175:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(159),u=n(160),s=n(170),l=n(182),b=n(166),p=Object(c.b)("div",{target:"e1rknm1f0"})("padding:",Object(d.d)(1),";&:not(:first-child){padding-left:0;}img{height:100%;display:block;pointer-events:none;user-select:none;}",b.a,"{img{height:calc(",u.d," + 15px);}}",s.a,"{img{height:calc(",u.d," - 12px);}}",l.a,"{img,video{height:calc(",u.d," + 3px);}}",s.a,",",l.a,",",b.a,"{img,video{font-size:",u.e[0],";width:auto;}}"),f=function(e){var t=e.children;return i.a.createElement(p,null,t)};f.propTypes={children:a.a.node.isRequired},t.a=f},176:function(e,t,n){"use strict";var r=n(158),i=n(160),o=n(159),a=Object(r.b)("div",{target:"e1w9ok0o0"})("&:first-child{margin-top:",Object(o.d)(2),";}& + &{margin-top:",Object(o.d)(4),";}h2{",i.g.h3,";}h3{",i.g.h4,";}h4{",i.g.h5,";}p,li{",i.g.content,";}p{&:last-child{margin-bottom:0;}}ul li{list-style:disc;}");t.a=a},177:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(158),a=n(159),c=n(160),d=n(163),u=n(183),s=Object(o.b)("h2",{target:"ecz42wg0"})(),l=Object(o.b)("div",{target:"ecz42wg1"})("max-width:",c.f.textLength,";margin-bottom:",Object(a.d)(3),";font-size:0.8rem;background:",c.b.gray[0],";padding:",Object(a.d)(1),";",u.d,"{margin-top:",Object(a.d)(2),";}",d.a,"{list-style:none;margin-bottom:",Object(a.f)("10px"),";margin-right:",Object(a.f)("5px"),";p{margin-bottom:0;font-style:italic;}}",s,"{",c.g.h4,";margin-right:",Object(a.d)(0),";}");t.a=function(e){var t=e.children;return i.a.createElement(l,null,i.a.createElement(s,null,"Stack"),t)}},178:function(e,t,n){"use strict";n(84);var r=n(162),i=n.n(r),o=n(0),a=n.n(o),c=n(158),d=n(172),u=n(160),s=Object(c.a)("color:",u.b.blue,";text-decoration:none;");t.a=function(e){var t=e.children,n=e.to,r=i()(e,["children","to"]);return/^(https?:\/\/)/.test(n)?a.a.createElement("a",Object.assign({className:s,href:n},r),t):a.a.createElement(d.Link,Object.assign({className:s,to:n},r),t)}},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(218);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var i=n(192);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(i).default}})},180:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(192),a=n(169),c=Object(a.withMDXScope)(Object(o.withMDXComponents)(({scope:e={},components:t={},children:n,...r})=>{const i={components:t,props:r,...e},o=Object.keys(i),a=o.map(e=>i[e]);return new Function("_fn",...o,`${n}`)({},...a)({components:t,...r})})),d=n(174),u=(n(83),n(53),n(188),n(227),n(228),n(8)),s=n.n(u),l=n(4),b=n.n(l),p=n(158),f=n(159),h=n(183),g=n(164),v={gray:Object(p.a)("background:#232526;background:linear-gradient(to right,#232526,#414345);"),blue:Object(p.a)("background:#1488cc;background:linear-gradient(to right,#1488cc,#2b32b2);"),green:Object(p.a)("background:#1d976c;background:linear-gradient(to right,#1d976c,#93f9b9);"),orange:Object(p.a)("background:#ff7e5f;background:linear-gradient(to right,#de6262,#ffb88c);"),blush:Object(p.a)("background:#ffb4b3;background:linear-gradient(to right,#ffb4b3,#ffc5c4);"),purple:Object(p.a)("background:#9d50bb;background:linear-gradient(to right,#9d50bb,#6e48aa);"),red:Object(p.a)("background:#cb356b;background:linear-gradient(to right,#cb356b,#bd3f32);"),yellow:Object(p.a)("background:#e2a907;background:linear-gradient(to right,#e2a907 25%,#f5cd4f);"),darkblue:Object(p.a)("background:#021e42;background:linear-gradient(to right,#021e42,#3c6496);")},m=n(194),O=Object(p.b)("div",{target:"e6a0o920"})("padding:",Object(f.d)(4),";",function(e){var t=e.background;return v[t]},";",g.a.medium(Object(p.a)("padding:",Object(f.d)(6),";")),";",g.a.large(Object(p.a)("padding:",Object(f.d)(7),";")),";",function(e){return e.overhang&&Object(p.a)("padding-bottom:",Object(f.d)(9),";margin-bottom:-",Object(f.d)(8.6),";",g.a.medium(Object(p.a)("padding-bottom:",Object(f.d)(10),";margin-bottom:-",Object(f.d)(9),";")),";",g.a.large(Object(p.a)("padding-bottom:",Object(f.d)(10),";margin-bottom:-",Object(f.d)(9),";")),";")},";"),y=Object(p.b)(h.a,{target:"e6a0o921"})("color:white;"),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).storeReservedBackground=function(){n.storedBackgrounds.includes(n.props.background)||(n.storedBackgrounds.push(n.props.background),m.window.sessionStorage.setItem("backgrounds",JSON.stringify(n.storedBackgrounds)))},n.getReservedBackgrounds=function(){var e=!!Object(m.exists)(m.window)&&JSON.parse(m.window.sessionStorage.getItem("backgrounds"));return e&&e.length>0?e:[]},n.pickRandomBackground=function(){var e=Object.keys(v),t=e[Math.floor(Math.random()*e.length)];return n.getReservedBackgrounds().includes(t)?n.pickRandomBackground():t},n.storedBackgrounds=n.getReservedBackgrounds(),t.background&&n.storeReservedBackground(),n}return s()(t,e),t.prototype.render=function(){return i.a.createElement(O,{overhang:this.props.overhang,background:this.props.background||this.pickRandomBackground()},i.a.createElement(y,{element:"h1"},this.props.title))},t}(i.a.Component);j.propTypes={title:b.a.string.isRequired,overhang:b.a.bool};var x=j,w=(n(231),n(178)),k=n(160),E=n(165),S=Object(p.b)(w.a,{target:"e1hdc0g90"})("font-weight:",k.c.bold,";color:white;padding:",Object(f.d)(-3)," ",Object(f.d)(-1),";border-radius:",Object(f.d)(-4),";text-decoration:none;transition:0.1s all linear;width:100%;margin-bottom:",Object(f.d)(1),";text-align:center;",g.a.pagination(Object(p.a)("width:auto;margin-bottom:0;text-align:left;")),";"),P=Object(p.b)(S,{target:"e1hdc0g91"})("margin-left:auto;background:",k.b.blue,";",function(e){var t=e.background;return v[t]},";&:hover{background-color:",Object(f.a)(.06,k.b.blue),";}"),L=Object(p.b)(S,{target:"e1hdc0g92"})("margin-right:auto;background:",k.b.green,";",function(e){var t=e.background;return v[t]},";&:hover{background-color:",Object(f.a)(.03,k.b.green),";}"),_=Object(p.b)(E.a,{target:"e1hdc0g93"})("display:flex;justify-content:space-between;flex-direction:column;padding-top:0 !important;",g.a.pagination(Object(p.a)("flex-direction:row;margin-top:",Object(f.f)("-5px"),";")),";"),I=function(e){var t=e.children;return i.a.createElement(_,null,t)};I.propTypes={children:b.a.node.isRequired};var q=I;t.a=function(e){var t=e.data,n=e.pageContext,r=t.mdx,o=r.frontmatter,a=r.code,u=n.prev,s=n.next;return i.a.createElement(d.a,null,i.a.createElement(x,{background:o.background,overhang:o.overhang,title:o.title}),i.a.createElement(c,null,a.body),i.a.createElement(q,null,u&&i.a.createElement(L,{to:u.fields.slug,background:u.frontmatter.background},"←  ",u.frontmatter.title),s&&i.a.createElement(P,{to:s.fields.slug,background:s.frontmatter.background},s.frontmatter.title,"  →")))}},181:function(e,t,n){"use strict";var r=n(8),i=n.n(r),o=n(0),a=n.n(o),c=n(4),d=n.n(c),u=n(185),s=n(158),l=n(159),b=(n(200),n(201),n(194)),p=.04,f=.11;b.window.addEventListener("touchmove",function(){});var h=function(e){var t,n,r,i,o,a,c,d,u,s,l,b=e.source,h=void 0===b?document:b,m=e.update,O=e.multiplier,y=void 0===O?1:O,j=e.friction,x=void 0===j?.92:j,w=e.initialValues,k=e.boundX,E=e.boundY,S=e.bounce,P=void 0===S||S,L=0,_=0,I=Math.abs(.3*y),q=!1,M=!1,z=!1,B=!1,R=[];function C(){document.removeEventListener("touchmove",A,!!v()&&{passive:!1}),document.removeEventListener("touchend",N),document.removeEventListener("touchcancel",F),document.removeEventListener("mousemove",A,!!v()&&{passive:!1}),document.removeEventListener("mouseup",N)}function D(){m.call(h,L,_)}function T(e){if("touchmove"===e.type||"touchstart"===e.type||"touchend"===e.type){var t=e.targetTouches[0]||e.changedTouches[0];return{x:t.clientX,y:t.clientY,id:t.identifier}}return{x:e.clientX,y:e.clientY,id:null}}function X(e){var t=T(e);M||z||(M=!0,B=!1,u=t.id,o=c=t.x,a=d=t.y,R=[],J(o,a),C(),document.addEventListener("touchmove",A,!!v()&&{passive:!1}),document.addEventListener("touchend",N),document.addEventListener("touchcancel",F),document.addEventListener("mousemove",A,!!v()&&{passive:!1}),document.addEventListener("mouseup",N))}function A(e){e.preventDefault();var t=T(e);M&&t.id===u&&(c=t.x,d=t.y,J(o,a),function(){q||g(U);q=!0}())}function N(e){var t=T(e);M&&t.id===u&&F()}function F(){M=!1,J(o,a),function(){var e=R[0],t=R[R.length-1],n=t.x-e.x,r=t.y-e.y,i=(t.time-e.time)/15/y;s=n/i||0,l=r/i||0;var o=W();(Math.abs(s)>1||Math.abs(l)>1||!o.inBounds)&&(B=!0,g(G))}(),C()}function J(e,t){for(var n=Date.now();R.length>0&&!(n-R[0].time<=100);)R.shift();R.push({x:e,y:t,time:n})}function U(){var e=c-o,t=d-a;if(L+=e*y,_+=t*y,P){var n=W();0!==n.x&&(L-=e*Q(n.x)*y),0!==n.y&&(_-=t*Q(n.y)*y)}else W(!0);D(),o=c,a=d,q=!1}function Q(e){return 5e-6*Math.pow(e,2)+1e-4*e+.55}function W(e){var o=0,a=0;return void 0!==t&&L<t?o=t-L:void 0!==n&&L>n&&(o=n-L),void 0!==r&&_<r?a=r-_:void 0!==i&&_>i&&(a=i-_),e&&(0!==o&&(L=o>0?t:n),0!==a&&(_=a>0?r:i)),{x:o,y:a,inBounds:0===o&&0===a}}function G(){if(B){L+=s*=x,_+=l*=x;var e=W();if(Math.abs(s)>I||Math.abs(l)>I||!e.inBounds){if(P){if(0!==e.x)if(e.x*s<=0)s+=e.x*p;else{var o=e.x>0?2.5:-2.5;s=(e.x+o)*f}if(0!==e.y)if(e.y*l<=0)l+=e.y*p;else{var a=e.y>0?2.5:-2.5;l=(e.y+a)*f}}else 0!==e.x&&(L=e.x>0?t:n,s=0),0!==e.y&&(_=e.y>0?r:i,l=0);D(),g(G)}else B=!1}}!function(){if(!(h="string"==typeof h?document.querySelector(h):h))throw new Error("IMPETUS: source not found.");if(!m)throw new Error("IMPETUS: update function not defined.");w&&(w[0]&&(L=w[0]),w[1]&&(_=w[1]),D()),k&&(t=k[0],n=k[1]),E&&(r=E[0],i=E[1]),h.addEventListener("touchstart",X),h.addEventListener("mousedown",X)}(),this.destroy=function(){return h.removeEventListener("touchstart",X),h.removeEventListener("mousedown",X),C(),null},this.pause=function(){C(),M=!1,z=!0},this.resume=function(){z=!1},this.setValues=function(e,t){"number"==typeof e&&(L=e),"number"==typeof t&&(_=t)},this.setMultiplier=function(e){y=e,I=Math.abs(.3*y)},this.setBoundX=function(e){t=e[0],n=e[1]},this.setBoundY=function(e){r=e[0],i=e[1]}},g=b.window.requestAnimationFrame||b.window.webkitRequestAnimationFrame||b.window.mozRequestAnimationFrame||function(e){b.window.setTimeout(e,1e3/60)};function v(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});b.window.addEventListener("test",null,t)}catch(e){}return v=function(){return e},e}var m=n(203),O=n.n(m),y=Object(s.b)(u.Flex,{target:"e1rvxpwz0"})("overflow-x:scroll;margin-bottom:",Object(l.f)("-30px"),";padding-bottom:",Object(l.f)("30px"),";position:relative;touch-action:pan-y;-webkit-overflow-scrolling:touch;transform:translateZ(0);"),j=Object(s.b)("div",{target:"e1rvxpwz1"})("overflow:hidden;cursor:move;cursor:grab;"),x=function(e){function t(t){var n;return(n=e.call(this,t)||this).impetusSource=a.a.createRef(),n}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.impetusSource.current;O()(e,function(){var t=e.scrollWidth-e.offsetWidth;new h({source:e,boundX:[-t,0],bounce:!0,update:function(n){var r=-n;e.scrollLeft=r,e.style.transform=r<0?"translateX("+n+"px)":r>t?"translateX(-"+(r-t)+"px)":"translateX(0)"}})})},n.render=function(){return a.a.createElement(j,null,a.a.createElement(y,{innerRef:this.impetusSource},this.props.children))},t}(a.a.Component);x.propTypes={children:d.a.node.isRequired};t.a=x},182:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),o=n(158),a=n(160),c=n(159),d=Object(o.b)("div",{target:"e1gx2pys0"})("background-color:",a.b.gray[3],";border-radius:",Object(c.f)("8px"),";padding:",Object(c.f)("5px")," ",Object(c.f)("5px")," ",Object(c.f)("2px"),";video{border-radius:",Object(c.f)("4px"),";}");t.b=function(e){return i.a.createElement(d,null,i.a.createElement("video",e,e.children))}},183:function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"e",function(){return p}),n.d(t,"c",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"b",function(){return g});var r=n(162),i=n.n(r),o=n(0),a=n.n(o),c=n(158),d=n(159),u=n(160),s=n(164),l=function(e){var t=e.children,n=e.element,r=i()(e,["children","element"]);return a.a.createElement(n,r,t)},b=Object(c.b)(l,{target:"ern6nz90"})("font-size:",Object(d.d)(3),";line-height:0.9;",s.a.medium(Object(c.a)("font-size:",Object(d.d)(4),";")),";",s.a.large(Object(c.a)("font-size:",Object(d.d)(5),";line-height:0.9;")),";"),p=Object(c.b)(l,{target:"ern6nz91"})(u.g.h3,";",s.a.medium(Object(c.a)(u.g.h2,";")),";",s.a.large(Object(c.a)(u.g.h1,";")),";"),f=Object(c.b)(l,{target:"ern6nz92"})(u.g.h5,";",s.a.medium(Object(c.a)(u.g.h4,";")),";",s.a.large(Object(c.a)(u.g.h3,";")),";color:",Object(d.c)(.3,u.b.gray[2]),";font-weight:300;"),h=Object(c.b)(l,{target:"ern6nz93"})(u.g.h5,";color:",Object(d.c)(.3,u.b.gray[2]),";"),g=Object(c.b)(l,{target:"ern6nz94"})(u.g.h5,";color:",u.b.blue,";border-bottom:1px solid ",Object(d.c)(.6,u.b.gray[2]),";padding-bottom:",u.g.baseSpacing(.25),";")},184:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(56),d=n(1),u=function(e){var t=e.location,n=d.default.getResourcesForPathname(t.pathname);return i.a.createElement(c.a,{location:t,pageResources:n})};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},189:function(e,t,n){"use strict";var r=n(185),i=n(158),o=n(160),a=n(164),c=n(159),d=Object(i.b)(r.Flex,{target:"ea8yhbo0"})("flex-direction:column;margin:0 auto;max-width:",o.f.container,";width:100%;padding:",Object(c.d)(1),";",a.a.medium(Object(i.a)("padding:",Object(c.d)(2),";")),";",a.a.large(Object(i.a)("padding:",Object(c.d)(3),";")),";");t.a=d},192:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(0)),o=c(n(60)),a=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var d=(0,o.default)({}),u=d.Provider,s=d.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return i.default.createElement(s,null,function(t){return i.default.createElement(e,r({components:n||t},o))})}};var l=function(e){var t=e.components,n=e.children;return i.default.createElement(u,{value:t},n)};l.propTypes={components:a.default.object.isRequired,children:a.default.element.isRequired},t.default=l},194:function(e,t,n){"use strict";var r=n(202),i=r.Nothing,o=r.isNothing,a="undefined"!=typeof window?window:i,c="undefined"!=typeof document?document:i;e.exports.window=a,e.exports.document=c,e.exports.exists=function(e){return!o(e)}},196:function(e,t,n){"use strict";var r=n(158),i=n(159),o=n(164),a=Object(r.a)("margin:",Object(i.d)(4)," 0;",o.a.medium(Object(r.a)("margin-left:-",Object(i.d)(4),";margin-right:-",Object(i.d)(4),";")),";",o.a.large(Object(r.a)("margin-left:-",Object(i.d)(6),";margin-right:-",Object(i.d)(6),";")),";");t.a=a},197:function(e,t,n){"use strict";var r=n(158),i=n(160),o=Object(r.b)("p",{target:"e26jhem0"})("font-style:italic;color:",i.b.gray[1],";");t.a=o},200:function(e,t,n){var r=n(6);r(r.S+r.F*!n(19),"Object",{defineProperty:n(30).f})},201:function(e,t,n){var r=n(6);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},202:function(e,t,n){"use strict";n.r(t),n.d(t,"Nothing",function(){return i}),n.d(t,"toBool",function(){return o}),n.d(t,"isNothing",function(){return a}),n.d(t,"isSomething",function(){return c}),n.d(t,"serialize",function(){return d}),n.d(t,"deserialize",function(){return u});var r,i=((r=function(){return i}).toString=r.toLocaleString=r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:i}})),o=function(e){return!(!e||!e.valueOf())},a=function(e){return e===i},c=function(e){return!(e===i||null==e)},d=function(e){return JSON.stringify(e,function(e,t){return t===i?null:t})},u=function(e){return JSON.parse(e,function(e,t){return null===t?i:t})}},203:function(e,t,n){var r,i;
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
!function(o,a){"use strict";r=[n(204)],void 0===(i=function(e){return function(e,t){var n=e.jQuery,r=e.console;function i(e,t){for(var n in t)e[n]=t[n];return e}var o=Array.prototype.slice;function a(e,t,c){if(!(this instanceof a))return new a(e,t,c);var d=e;"string"==typeof e&&(d=document.querySelectorAll(e)),d?(this.elements=function(e){if(Array.isArray(e))return e;if("object"==typeof e&&"number"==typeof e.length)return o.call(e);return[e]}(d),this.options=i({},this.options),"function"==typeof t?c=t:i(this.options,t),c&&this.on("always",c),this.getImages(),n&&(this.jqDeferred=new n.Deferred),setTimeout(this.check.bind(this))):r.error("Bad element for imagesLoaded "+(d||e))}a.prototype=Object.create(t.prototype),a.prototype.options={},a.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},a.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&c[t]){for(var n=e.querySelectorAll("img"),r=0;r<n.length;r++){var i=n[r];this.addImage(i)}if("string"==typeof this.options.background){var o=e.querySelectorAll(this.options.background);for(r=0;r<o.length;r++){var a=o[r];this.addElementBackgroundImages(a)}}}};var c={1:!0,9:!0,11:!0};function d(e){this.img=e}function u(e,t){this.url=e,this.element=t,this.img=new Image}return a.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var n=/url\((['"])?(.*?)\1\)/gi,r=n.exec(t.backgroundImage);null!==r;){var i=r&&r[2];i&&this.addBackground(i,e),r=n.exec(t.backgroundImage)}},a.prototype.addImage=function(e){var t=new d(e);this.images.push(t)},a.prototype.addBackground=function(e,t){var n=new u(e,t);this.images.push(n)},a.prototype.check=function(){var e=this;function t(t,n,r){setTimeout(function(){e.progress(t,n,r)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(e){e.once("progress",t),e.check()}):this.complete()},a.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+n,e,t)},a.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},d.prototype=Object.create(t.prototype),d.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},d.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},d.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},d.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},d.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},d.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},d.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype=Object.create(d.prototype),u.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},u.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},u.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},a.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((n=t).fn.imagesLoaded=function(e,t){return new a(this,e,t).jqDeferred.promise(n(this))})},a.makeJQueryPlugin(),a}(o,e)}.apply(t,r))||(e.exports=i)}("undefined"!=typeof window?window:this)},204:function(e,t,n){var r,i;"undefined"!=typeof window&&window,void 0===(i="function"==typeof(r=function(){"use strict";function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},r=n[e]=n[e]||[];return-1==r.indexOf(t)&&r.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var r=n.indexOf(t);return-1!=r&&n.splice(r,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var r=this._onceEvents&&this._onceEvents[e],i=0;i<n.length;i++){var o=n[i];r&&r[o]&&(this.off(e,o),delete r[o]),o.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e})?r.call(t,n,t,e):r)||(e.exports=i)},218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=u(o),c=u(n(219)),d=n(192);function u(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,i=e.props,o=void 0===i?{}:i,d=e.children,u=e.components,l=void 0===u?{}:u,b=e.Layout,p=e.layoutProps,f=l[n+"."+t]||l[t]||s[t]||t;return b?((0,c.default)(this,b),a.default.createElement(b,r({components:l},p),a.default.createElement(f,o,d))):a.default.createElement(f,o,d)}}]),t}();t.default=(0,d.withMDXComponents)(l)},219:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=function e(t,n,l){if("string"!=typeof n){if(s){var b=u(n);b&&b!==s&&e(t,b,l)}var p=a(n);c&&(p=p.concat(c(n)));for(var f=0;f<p.length;++f){var h=p[f];if(!(r[h]||i[h]||l&&l[h])){var g=d(n,h);try{o(t,h,g)}catch(e){}}}return t}return t}},227:function(e,t,n){"use strict";var r=n(6),i=n(57)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(58)("includes")},228:function(e,t,n){"use strict";var r=n(6),i=n(229);r(r.P+r.F*n(230)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},229:function(e,t,n){var r=n(86),i=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},230:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},231:function(e,t,n){"use strict";n(199)("bold",function(e){return function(){return e(this,"b","","")}})}}]);
//# sourceMappingURL=2-285d322c73730084de5d.js.map