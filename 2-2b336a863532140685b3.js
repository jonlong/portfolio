(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{160:function(e,t,n){"use strict";n.d(t,"g",function(){return o}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"f",function(){return d}),n.d(t,"b",function(){return u}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return s});var r=n(159),i=n(188),o=new(n.n(i).a)({baseFontSize:"1em"}),a={small:576,medium:768,large:992,xLarge:1200,caseStudyLabels:"(min-width: 650px) and (max-width: 992px)",pagination:"(min-width: 650px)"},c={light:300,normal:400,semibold:500,bold:700,xbold:900},d={container:""+Object(r.f)(a.medium),textLength:""+Object(r.f)(650)},u={red:"#fa1955",orange:"#E6B89C",yellow:"#f6d000",green:"#009f6a",blue:"#509afc",darkblue:"#3c6496",gray:["#ddd","#999","#303336","#181e2a"],background:["#f2f5f7","#dce0e5"]},b=Object(r.b)("847px"),s=[Object(r.f)("9px")]},163:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(198),u=n(159),b=n(168),s=n(192),l=Object(c.b)("div",{target:"e1lnbbb30"})("border-radius:",Object(u.f)("2px"),";",b.a," &{",d.a,";}img{width:100%;border:1px solid rgba(0,0,0,0.15);}"),p=function(e){var t=e.src,n=e.alt,r=e.description;return i.a.createElement(l,null,i.a.createElement("img",{src:t,alt:n}),r&&i.a.createElement(s.a,null,r))};p.propTypes={description:a.a.string,src:a.a.string.isRequired,alt:a.a.string.isRequired},t.b=p},164:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=Object(c.b)("li",{target:"e1svvtjr0"})("list-style:none;"),u=function(e){var t=e.children;return i.a.createElement(d,null,t)};u.propTypes={children:a.a.node.isRequired}},165:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(160),u=n(198),b=n(159),s=n(163),l=n(167),p=n(192),g=n(168),f=Object(c.b)("span",{target:"esghcfd0"})("height:12px;width:12px;border-radius:50%;display:inline-block;margin-right:8px;",function(e){var t=e.variant;return Object(c.a)("background-color:",d.b[t],";border:1px solid ",d.b[t],";")},";"),h=Object(c.b)("div",{target:"esghcfd1"})("background-color:",Object(b.c)(.06,d.b.gray[0]),";padding:5px 12px;border-radius:",Object(b.f)("8px"),";border-bottom-left-radius:0;border-bottom-right-radius:0;border:1px solid ",d.b.gray[0],";"),v=Object(c.b)("div",{target:"esghcfd2"})("overflow:hidden;"),m=Object(c.b)("div",{target:"esghcfd3"})("font-size:",Object(b.f)("12px"),";",g.a," &{",u.a,";}",l.a,"{video{width:100%;border-radius:0;}border:0;padding:0;border-radius:0;background:none;}",s.a,"{",g.a," &{margin:0;}img{border-color:",d.b.gray[0],";border-top:0;}}"),O=function(e){var t=e.children,n=e.description;return i.a.createElement(m,null,i.a.createElement(v,null,i.a.createElement(h,null,i.a.createElement(f,{variant:"red"}),i.a.createElement(f,{variant:"yellow"}),i.a.createElement(f,{variant:"green"})),t),n&&i.a.createElement(p.a,null,n))};O.propTypes={children:a.a.node.isRequired,description:a.a.string},f.propTypes={variant:a.a.string},t.b=O},166:function(e,t,n){"use strict";n.d(t,"a",function(){return o});n(83),n(53),n(190),n(54);var r=n(158),i=n(160),o=Object.keys(i.a).reduce(function(e,t){var n="string"==typeof i.a[t]?"":"(min-width:",o="string"==typeof i.a[t]?"":"px)";return e[t]=function(e){return Object(r.a)("@media ",n+i.a[t]+o,"{",e,";}")},e},{})},167:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(192),u=Object(c.b)("div",{target:"e1o4udvm0"})("video{border:1px solid rgba(0,0,0,0.15);display:block;}"),b=function(e){return i.a.createElement(u,null,i.a.createElement("video",e,e.children),e.description&&i.a.createElement(d.a,null,e.description))};b.propTypes={children:a.a.node.isRequired,description:a.a.string},t.b=b},168:function(e,t,n){"use strict";var r=n(158),i=n(160),o=n(191),a=Object(r.b)(o.a,{target:"e11zbfwe0"})("max-width:",i.f.textLength,";");t.a=a},169:function(e,t,n){"use strict";n(84);var r=n(162),i=n.n(r),o=n(0),a=n.n(o),c=n(4),d=n.n(c),u=n(158),b=n(178),s=n(160),l=Object(u.a)("color:",s.b.blue,";text-decoration:none;&:visited{color:",s.b.darkblue,";text-decoration:none;}"),p=function(e){var t=e.children,n=e.to,r=i()(e,["children","to"]);return/^(https?:\/\/)/.test(n)?a.a.createElement("a",Object.assign({className:l,href:n},r),t):a.a.createElement(b.Link,Object.assign({className:l,to:n},r),t)};p.propTypes={children:d.a.node.isRequired,to:d.a.string.isRequired},t.a=p},175:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(164),u=n(159),b=Object(c.b)("ul",{target:"e12wjllb0"})("margin:0;padding:0;border:0;",function(e){return e.inline&&Object(c.a)("margin:0 -",Object(u.d)(-5),";",d.a,"{display:inline-block;margin:",Object(u.d)(-5),";}")},";"),s=function(e){var t=e.children,n=e.inline;return i.a.createElement(b,{inline:n},t)};s.propTypes={children:a.a.node.isRequired,inline:a.a.bool},t.a=s},176:function(e,t,n){var r;e.exports=(r=n(187))&&r.default||r},177:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var a=(0,o(n(60)).default)({}),c=a.Provider,d=a.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scope"]);return i.default.createElement(d,null,function(t){return i.default.createElement(e,r({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return i.default.createElement(c,{value:t},n)}},178:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return g});var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(161),d=n.n(c);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(28);n.d(t,"waitForRouteChange",function(){return u.c});var b=n(176),s=n.n(b);n.d(t,"PageRenderer",function(){return s.a});var l=n(39);n.d(t,"parsePath",function(){return l.a});var p=i.a.createContext({}),g=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},179:function(e,t){e.exports={site:{title:"Portfolio"},routes:{work:"/work"}}},181:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(158),d=n(189),u=n.n(d),b=n(179),s=n.n(b),l=Object(c.a)("body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,dl,dd,ol,ul,form,fieldset,legend,figure,table,th,td,caption,hr{margin:0;padding:0;}ul{list-style:none;}button{padding:0;border:0;background:transparent;}"),p=n(160),g=Object(c.a)("*{box-sizing:border-box;}html,body{padding:0;margin:0;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Roboto Light','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background:",p.b.background[0],";color:",p.b.gray[2],";}@media screen and (min-width:800px){html{font-size:calc(1.125em + 0.05vw);}}"),f=n(159),h=Object(c.a)(".device,.device::before,.device::after,.device *,.device *::before,.device *::after{box-sizing:border-box;display:block;}.device{position:relative;transform:scale(1);z-index:1;img{border:1px solid ",p.b.gray[0],";height:100%;}}.device .device-frame{z-index:1;}.device .device-content{background-color:#fff;background-position:center center;background-size:cover;object-fit:cover;position:relative;}.device-iphone-8{font-size:",p.e[0],";height:",p.d,";width:",Object(f.b)("419px"),";}.device-iphone-8 .device-frame{background:#fff;border-radius:",Object(f.b)("68px"),";box-shadow:inset 0 0 0 ",Object(f.b)("2px")," #c8cacb,inset 0 0 0 ",Object(f.b)("7px")," #e2e3e4;height:",Object(f.b)("871px"),";padding:",Object(f.b)("102px")," ",Object(f.b)("22px"),";width:",Object(f.b)("419px"),";}.device-iphone-8 .device-content{border:",Object(f.b)("2px")," solid #222;border-radius:",Object(f.b)("4px"),";height:",Object(f.b)("667px"),";width:",Object(f.b)("375px"),";}.device-iphone-8 .device-stripe::after,.device-iphone-8 .device-stripe::before{border:solid rgba(51,51,51,0.15);border-width:0 ",Object(f.b)("7px"),";content:'';height:",Object(f.b)("6px"),";left:0;position:absolute;width:100%;z-index:9;}.device-iphone-8 .device-stripe::after{top:",Object(f.b)("68px"),";}.device-iphone-8 .device-stripe::before{bottom:",Object(f.b)("68px"),";}.device-iphone-8 .device-header{border:",Object(f.b)("2px")," solid #c8cacb;border-radius:50%;bottom:",Object(f.b)("5px"),";height:",Object(f.b)("58px"),";left:50%;margin-left:",Object(f.b)("-29px"),";position:absolute;width:",Object(f.b)("58px"),";}.device-iphone-8 .device-sensors{background:#666;border-radius:",Object(f.b)("3px"),";height:",Object(f.b)("6px"),";left:50%;margin-left:",Object(f.b)("-38px"),";position:absolute;top:",Object(f.b)("52px"),";width:",Object(f.b)("76px"),";}.device-iphone-8 .device-sensors::after,.device-iphone-8 .device-sensors::before{background:#666;border-radius:50%;content:'';position:absolute;}.device-iphone-8 .device-sensors::after{height:",Object(f.b)("10px"),";left:50%;margin-left:",Object(f.b)("-5px"),";top:",Object(f.b)("-25px"),";width:",Object(f.b)("10px"),";}.device-iphone-8 .device-sensors::before{height:",Object(f.b)("12px"),";left:",Object(f.b)("-42px"),";margin-top:",Object(f.b)("-6px"),";top:50%;width:",Object(f.b)("12px"),";}.device-iphone-8 .device-btns{background:#c8cacb;height:",Object(f.b)("30px"),";left:",Object(f.b)("-3px"),";position:absolute;top:",Object(f.b)("102px"),";width:",Object(f.b)("3px"),";}.device-iphone-8 .device-btns::after,.device-iphone-8 .device-btns::before{background:#c8cacb;content:'';height:",Object(f.b)("56px"),";left:0;position:absolute;width:",Object(f.b)("3px"),";}.device-iphone-8 .device-btns::after{top:",Object(f.b)("62px"),";}.device-iphone-8 .device-btns::before{top:",Object(f.b)("132px"),";}.device-iphone-8 .device-power{background:#c8cacb;height:",Object(f.b)("80px"),";position:absolute;right:",Object(f.b)("-2px"),";top:",Object(f.b)("160px"),";width:",Object(f.b)("3px"),";}.device-iphone-8.device-gold .device-frame{box-shadow:inset 0 0 0 ",Object(f.b)("2px")," #e4b08a,inset 0 0 0 ",Object(f.b)("7px")," #f7e8dd;}.device-iphone-8.device-gold .device-header{border-color:#e4b08a;}.device-iphone-8.device-gold .device-btns,.device-iphone-8.device-gold .device-btns::after,.device-iphone-8.device-gold .device-btns::before{background:#e4b08a;}.device-iphone-8.device-gold .device-power{background:#e4b08a;}.device-iphone-8.device-spacegray .device-frame{background:#222;box-shadow:inset 0 0 0 ",Object(f.b)("2px")," #74747a,inset 0 0 0 ",Object(f.b)("7px")," #9b9ba0;}.device-iphone-8.device-spacegray .device-stripe::after,.device-iphone-8.device-spacegray .device-stripe::before{border-color:rgba(204,204,204,0.35);}.device-iphone-8.device-spacegray .device-btns,.device-iphone-8.device-spacegray .device-btns::after,.device-iphone-8.device-spacegray .device-btns::before{background:#74747a;}");Object(c.c)(Object(f.e)()," ",l," ",g," ",h);var v=function(e){var t=e.children;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("title",null,s.a.site.title)),t)};v.propTypes={children:a.a.node.isRequired};t.a=v},182:function(e,t,n){"use strict";var r=n(158),i=n(160),o=n(159),a=Object(r.b)("div",{target:"e1w9ok0o0"})("&:first-child{margin-top:",Object(o.d)(2),";}& + &{margin-top:",Object(o.d)(4),";}h2{",i.g.h3,";}h3{",i.g.h4,";}h4{",i.g.h5,";}p,li{",i.g.content,";}p{&:last-child{margin-bottom:0;}}ul li{list-style:disc;}");t.a=a},183:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(158),a=n(159),c=n(160),d=n(164),u=n(186),b=Object(o.b)("h2",{target:"ecz42wg0"})(),s=Object(o.b)("div",{target:"ecz42wg1"})("max-width:",c.f.textLength,";margin-bottom:",Object(a.d)(3),";font-size:0.8rem;background:",c.b.gray[0],";padding:",Object(a.d)(1),";",u.d,"{margin-top:",Object(a.d)(2),";}",d.a,"{list-style:none;margin-bottom:",Object(a.f)("10px"),";margin-right:",Object(a.f)("5px"),";p{margin-bottom:0;font-style:italic;}}",b,"{",c.g.h4,";margin-right:",Object(a.d)(0),";}");t.a=function(e){var t=e.children;return i.a.createElement(s,null,i.a.createElement(b,null,"Stack"),t)}},184:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(215);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var i=n(194);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(i).default}})},185:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(194),a=n(177),c=Object(a.withMDXScope)(Object(o.withMDXComponents)(({scope:e={},components:t={},children:n,...r})=>{const i={components:t,props:r,...e},o=Object.keys(i),a=o.map(e=>i[e]);return new Function("_fn",...o,`${n}`)({},...a)({components:t,...r})})),d=n(181),u=(n(83),n(53),n(190),n(224),n(225),n(8)),b=n.n(u),s=n(4),l=n.n(s),p=n(158),g=n(159),f=n(186),h=n(166),v={gray:Object(p.a)("background:#232526;background:linear-gradient(to right,#232526,#414345);"),blue:Object(p.a)("background:#1488cc;background:linear-gradient(to right,#1488cc,#2b32b2);"),green:Object(p.a)("background:#1d976c;background:linear-gradient(to right,#1d976c,#93f9b9);"),orange:Object(p.a)("background:#ff7e5f;background:linear-gradient(to right,#de6262,#ffb88c);"),blush:Object(p.a)("background:#ffb4b3;background:linear-gradient(to right,#ffb4b3,#ffc5c4);"),purple:Object(p.a)("background:#9d50bb;background:linear-gradient(to right,#9d50bb,#6e48aa);"),red:Object(p.a)("background:#cb356b;background:linear-gradient(to right,#cb356b,#bd3f32);"),yellow:Object(p.a)("background:#e2a907;background:linear-gradient(to right,#e2a907 25%,#f5cd4f);"),darkblue:Object(p.a)("background:#021e42;background:linear-gradient(to right,#021e42,#3c6496);")},m=n(228),O=Object(p.b)("div",{target:"e17cr6yi0"})("padding:",Object(g.d)(4),";",function(e){var t=e.background;return v[t]},";",h.a.medium(Object(p.a)("padding:",Object(g.d)(6),";")),";",h.a.large(Object(p.a)("padding:",Object(g.d)(7),";")),";",function(e){return e.overhang&&Object(p.a)("padding-bottom:",Object(g.d)(9),";margin-bottom:-",Object(g.d)(8.6),";",h.a.medium(Object(p.a)("padding-bottom:",Object(g.d)(10),";margin-bottom:-",Object(g.d)(9),";")),";",h.a.large(Object(p.a)("padding-bottom:",Object(g.d)(10),";margin-bottom:-",Object(g.d)(9),";")),";")},";"),j=Object(p.b)(f.a,{target:"e17cr6yi1"})("color:white;"),y=function(e){function t(t){var n;return(n=e.call(this,t)||this).storeReservedBackground=function(){n.storedBackgrounds.includes(n.props.background)||(n.storedBackgrounds.push(n.props.background),m.window.sessionStorage.setItem("backgrounds",JSON.stringify(n.storedBackgrounds)))},n.getReservedBackgrounds=function(){var e=!!Object(m.exists)(m.window)&&JSON.parse(m.window.sessionStorage.getItem("backgrounds"));return e&&e.length>0?e:[]},n.pickRandomBackground=function(){var e=Object.keys(v),t=e[Math.floor(Math.random()*e.length)];return n.getReservedBackgrounds().includes(t)?n.pickRandomBackground():t},n.storedBackgrounds=n.getReservedBackgrounds(),t.background&&n.storeReservedBackground(),n}return b()(t,e),t.prototype.render=function(){return i.a.createElement(O,{overhang:this.props.overhang,background:this.props.background||this.pickRandomBackground()},i.a.createElement(j,{element:"h1"},this.props.title))},t}(i.a.Component);y.propTypes={title:l.a.string.isRequired,overhang:l.a.bool,background:l.a.string};var x=y,w=(n(230),n(169)),k=n(160),E=n(168),P=Object(p.b)(w.a,{target:"e13w4gib0"})("font-weight:",k.c.bold,";color:white;padding:",Object(g.d)(-3)," ",Object(g.d)(-1),";border-radius:",Object(g.d)(-4),";text-decoration:none;transition:0.1s all linear;width:100%;margin-bottom:",Object(g.d)(1),";text-align:center;",h.a.pagination(Object(p.a)("width:auto;margin-bottom:0;text-align:left;")),";"),S=Object(p.b)(P,{target:"e13w4gib1"})("margin-left:auto;background:",k.b.blue,";",function(e){var t=e.background;return v[t]},";&:hover{background-color:",Object(g.a)(.06,k.b.blue),";}"),R=Object(p.b)(P,{target:"e13w4gib2"})("margin-right:auto;background:",k.b.green,";",function(e){var t=e.background;return v[t]},";&:hover{background-color:",Object(g.a)(.03,k.b.green),";}"),_=Object(p.b)(E.a,{target:"e13w4gib3"})("display:flex;justify-content:space-between;flex-direction:column;padding-top:0 !important;",h.a.pagination(Object(p.a)("flex-direction:row;margin-top:",Object(g.f)("-5px"),";")),";"),q=function(e){var t=e.children;return i.a.createElement(_,null,t)};q.propTypes={children:l.a.node.isRequired},S.propTypes={background:l.a.string},R.propTypes={background:l.a.string};var T=q;t.a=function(e){var t=e.data,n=e.pageContext,r=t.mdx,o=r.frontmatter,a=r.code,u=n.prev,b=n.next;return i.a.createElement(d.a,null,i.a.createElement(x,{background:o.background,overhang:o.overhang,title:o.title}),i.a.createElement(c,null,a.body),i.a.createElement(T,null,u&&i.a.createElement(R,{to:u.fields.slug,background:u.frontmatter.background},"←  ",u.frontmatter.title),b&&i.a.createElement(S,{to:b.fields.slug,background:b.frontmatter.background},b.frontmatter.title,"  →")))}},186:function(e,t,n){"use strict";n.d(t,"a",function(){return g}),n.d(t,"e",function(){return f}),n.d(t,"c",function(){return h}),n.d(t,"d",function(){return v}),n.d(t,"b",function(){return m});var r=n(162),i=n.n(r),o=n(0),a=n.n(o),c=n(4),d=n.n(c),u=n(158),b=n(159),s=n(160),l=n(166),p=function(e){var t=e.children,n=e.element,r=i()(e,["children","element"]);return a.a.createElement(n,r,t)},g=Object(u.b)(p,{target:"e1tojrv40"})("font-size:",Object(b.d)(3),";line-height:0.9;",l.a.medium(Object(u.a)("font-size:",Object(b.d)(4),";")),";",l.a.large(Object(u.a)("font-size:",Object(b.d)(5),";line-height:0.9;")),";"),f=Object(u.b)(p,{target:"e1tojrv41"})(s.g.h3,";",l.a.medium(Object(u.a)(s.g.h2,";")),";",l.a.large(Object(u.a)(s.g.h1,";")),";"),h=Object(u.b)(p,{target:"e1tojrv42"})(s.g.h5,";",l.a.medium(Object(u.a)(s.g.h4,";")),";",l.a.large(Object(u.a)(s.g.h3,";")),";color:",Object(b.c)(.3,s.b.gray[2]),";font-weight:300;"),v=Object(u.b)(p,{target:"e1tojrv43"})(s.g.h5,";color:",Object(b.c)(.3,s.b.gray[2]),";"),m=Object(u.b)(p,{target:"e1tojrv44"})(s.g.h5,";color:",s.b.blue,";border-bottom:1px solid ",Object(b.c)(.6,s.b.gray[2]),";padding-bottom:",s.g.baseSpacing(.25),";");p.propTypes={children:d.a.node.isRequired,element:d.a.string.isRequired}},187:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(56),d=n(1),u=function(e){var t=e.location,n=d.default.getResourcesForPathname(t.pathname);return i.a.createElement(c.a,{location:t,pageResources:n})};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},191:function(e,t,n){"use strict";var r=n(174),i=n(158),o=n(160),a=n(166),c=n(159),d=Object(i.b)(r.Flex,{target:"ea8yhbo0"})("flex-direction:column;margin:0 auto;max-width:",o.f.container,";width:100%;padding:",Object(c.d)(1),";",a.a.medium(Object(i.a)("padding:",Object(c.d)(2),";")),";",a.a.large(Object(i.a)("padding:",Object(c.d)(3),";")),";");t.a=d},192:function(e,t,n){"use strict";var r=n(158),i=n(160),o=n(159),a=Object(r.b)("p",{target:"e26jhem0"})("font-size:",Object(o.f)("12px"),";font-style:italic;color:",i.b.gray[1],";margin-top:",Object(o.d)(0),";");t.a=a},194:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(0)),o=c(n(60)),a=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var d=(0,o.default)({}),u=d.Provider,b=d.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return i.default.createElement(b,null,function(t){return i.default.createElement(e,r({components:n||t},o))})}};var s=function(e){var t=e.components,n=e.children;return i.default.createElement(u,{value:t},n)};s.propTypes={components:a.default.object.isRequired,children:a.default.element.isRequired},t.default=s},198:function(e,t,n){"use strict";var r=n(158),i=n(159),o=n(166),a=Object(r.a)("margin:",Object(i.d)(4)," 0;",o.a.medium(Object(r.a)("margin-left:-",Object(i.d)(4),";margin-right:-",Object(i.d)(4),";")),";",o.a.large(Object(r.a)("margin-left:-",Object(i.d)(6),";margin-right:-",Object(i.d)(6),";")),";");t.a=a},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),a=u(o),c=u(n(216)),d=n(194);function u(e){return e&&e.__esModule?e:{default:e}}var b={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,i=e.props,o=void 0===i?{}:i,d=e.children,u=e.components,s=void 0===u?{}:u,l=e.Layout,p=e.layoutProps,g=s[n+"."+t]||s[t]||b[t]||t;return l?((0,c.default)(this,l),a.default.createElement(l,r({components:s},p),a.default.createElement(g,o,d))):a.default.createElement(g,o,d)}}]),t}();t.default=(0,d.withMDXComponents)(s)},216:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,a=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,b=u&&u(Object);e.exports=function e(t,n,s){if("string"!=typeof n){if(b){var l=u(n);l&&l!==b&&e(t,l,s)}var p=a(n);c&&(p=p.concat(c(n)));for(var g=0;g<p.length;++g){var f=p[g];if(!(r[f]||i[f]||s&&s[f])){var h=d(n,f);try{o(t,f,h)}catch(e){}}}return t}return t}},224:function(e,t,n){"use strict";var r=n(6),i=n(57)(!0);r(r.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),n(58)("includes")},225:function(e,t,n){"use strict";var r=n(6),i=n(226);r(r.P+r.F*n(227)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},226:function(e,t,n){var r=n(86),i=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(e))}},227:function(e,t,n){var r=n(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(e){}}return!0}},228:function(e,t,n){"use strict";var r=n(229),i=r.Nothing,o=r.isNothing,a="undefined"!=typeof window?window:i,c="undefined"!=typeof document?document:i;e.exports.window=a,e.exports.document=c,e.exports.exists=function(e){return!o(e)}},229:function(e,t,n){"use strict";n.r(t),n.d(t,"Nothing",function(){return i}),n.d(t,"toBool",function(){return o}),n.d(t,"isNothing",function(){return a}),n.d(t,"isSomething",function(){return c}),n.d(t,"serialize",function(){return d}),n.d(t,"deserialize",function(){return u});var r,i=((r=function(){return i}).toString=r.toLocaleString=r[Symbol.toPrimitive]=function(){return""},r.valueOf=function(){return!1},new Proxy(Object.freeze(r),{get:function(e,t){return e.hasOwnProperty(t)?e[t]:i}})),o=function(e){return!(!e||!e.valueOf())},a=function(e){return e===i},c=function(e){return!(e===i||null==e)},d=function(e){return JSON.stringify(e,function(e,t){return t===i?null:t})},u=function(e){return JSON.parse(e,function(e,t){return null===t?i:t})}},230:function(e,t,n){"use strict";n(200)("bold",function(e){return function(){return e(this,"b","","")}})}}]);
//# sourceMappingURL=2-2b336a863532140685b3.js.map