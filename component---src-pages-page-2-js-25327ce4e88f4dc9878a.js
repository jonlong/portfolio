(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(169),a=n(171);t.default=function(){return o.a.createElement(a.a,null,o.a.createElement("h1",null,"Hi from the second page"),o.a.createElement("p",null,"Welcome to page 2"),o.a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}},159:function(e,t,n){"use strict";n.d(t,"g",function(){return r}),n.d(t,"a",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"f",function(){return d}),n.d(t,"b",function(){return s}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return u});var i=n(158),o=n(184),r=new(n.n(o).a)({baseFontSize:"1em"}),a={small:576,medium:768,large:992,xLarge:1200,caseStudyLabels:"(min-width: 650px) and (max-width: 992px)",pagination:"(min-width: 650px)"},c={light:300,normal:400,semibold:500,bold:700,xbold:900},d={container:""+Object(i.f)(a.medium),textLength:""+Object(i.f)(650)},s={red:"#fa1955",orange:"#E6B89C",yellow:"#f6d000",green:"#009f6a",blue:"#509afc",darkblue:"#3c6496",gray:["#ddd","#999","#303336","#181e2a"],background:["#f2f5f7","#dce0e5"]},p=Object(i.b)("847px"),u=[Object(i.f)("9px")]},160:function(e,t,n){"use strict";var i=n(40);t.__esModule=!0,t.withPrefix=l,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=i(n(161)),r=i(n(189)),a=i(n(8)),c=i(n(55)),d=i(n(41)),s=i(n(4)),p=i(n(0)),u=n(17),b=n(169);function l(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var f={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,d.default)((0,c.default)((0,c.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,r.default)({},n.props.style,n.props.activeStyle)}:null});var i=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(i=!0);var o=t.location;return n.state={IOSupported:i,location:o},n.handleRef=n.handleRef.bind((0,c.default)((0,c.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,b.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,b.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,i,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,b.parsePath)(o.props.to).pathname)},(i=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t),i.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,i=t.getProps,a=void 0===i?this.defaultGetProps:i,c=t.onClick,d=t.onMouseEnter,s=t.location,f=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","location","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=l(n);return p.default.createElement(u.Link,(0,r.default)({to:g,state:f,getProps:a,innerRef:this.handleRef,onMouseEnter:function(e){d&&d(e),___loader.hovering((0,b.parsePath)(n).pathname)},onClick:function(t){if(c&&c(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();var n=(0,b.parsePath)(g),i=n.pathname,o=n.hash;if(i===s.pathname||!i){var r=o?document.getElementById(o.substr(1)):null;null!==r?r.scrollIntoView():window.scrollTo(0,0)}m(g,{state:f,replace:h})}return!0}},v))},t}(p.default.Component);h.propTypes=(0,r.default)({},f,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v,g=(v=h,function(e){return p.default.createElement(u.Location,null,function(t){var n=t.location;return p.default.createElement(v,(0,r.default)({location:n},e))})});t.default=g;var m=function(e,t){window.___navigate(e,t)};t.navigate=m;var x=function(e){window.___push(e)};t.push=x;t.replace=function(e){window.___replace(e)};t.navigateTo=function(e){return x(e)}},161:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}},165:function(e,t,n){var i;e.exports=(i=n(179))&&i.default||i},169:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return l}),n.d(t,"StaticQuery",function(){return f});var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(160),d=n.n(c);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(28);n.d(t,"waitForRouteChange",function(){return s.c});var p=n(165),u=n.n(p);n.d(t,"PageRenderer",function(){return u.a});var b=n(39);n.d(t,"parsePath",function(){return b.a});var l=o.a.createContext({}),f=function(e){return o.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},170:function(e,t){e.exports={site:{title:"Portfolio"},routes:{work:"/work"}}},171:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(157),d=n(186),s=n.n(d),p=n(170),u=n.n(p),b=Object(c.a)("body,h1,h2,h3,h4,h5,h6,p,blockquote,pre,dl,dd,ol,ul,form,fieldset,legend,figure,table,th,td,caption,hr{margin:0;padding:0;}ul{list-style:none;}button{padding:0;border:0;background:transparent;}"),l=n(159),f=Object(c.a)("*{box-sizing:border-box;}html,body{padding:0;margin:0;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Roboto Light','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';background:",l.b.background[0],";color:",l.b.gray[2],";}@media screen and (min-width:800px){html{font-size:calc(1.125em + 0.05vw);}}"),h=n(158),v=Object(c.a)(".device,.device::before,.device::after,.device *,.device *::before,.device *::after{box-sizing:border-box;display:block;}.device{position:relative;transform:scale(1);z-index:1;img{border:1px solid ",l.b.gray[0],";height:100%;}}.device .device-frame{z-index:1;}.device .device-content{background-color:#fff;background-position:center center;background-size:cover;object-fit:cover;position:relative;}.device-iphone-8{font-size:",l.e[0],";height:",l.d,";width:",Object(h.b)("419px"),";}.device-iphone-8 .device-frame{background:#fff;border-radius:",Object(h.b)("68px"),";box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #c8cacb,inset 0 0 0 ",Object(h.b)("7px")," #e2e3e4;height:",Object(h.b)("871px"),";padding:",Object(h.b)("102px")," ",Object(h.b)("22px"),";width:",Object(h.b)("419px"),";}.device-iphone-8 .device-content{border:",Object(h.b)("2px")," solid #222;border-radius:",Object(h.b)("4px"),";height:",Object(h.b)("667px"),";width:",Object(h.b)("375px"),";}.device-iphone-8 .device-stripe::after,.device-iphone-8 .device-stripe::before{border:solid rgba(51,51,51,0.15);border-width:0 ",Object(h.b)("7px"),";content:'';height:",Object(h.b)("6px"),";left:0;position:absolute;width:100%;z-index:9;}.device-iphone-8 .device-stripe::after{top:",Object(h.b)("68px"),";}.device-iphone-8 .device-stripe::before{bottom:",Object(h.b)("68px"),";}.device-iphone-8 .device-header{border:",Object(h.b)("2px")," solid #c8cacb;border-radius:50%;bottom:",Object(h.b)("5px"),";height:",Object(h.b)("58px"),";left:50%;margin-left:",Object(h.b)("-29px"),";position:absolute;width:",Object(h.b)("58px"),";}.device-iphone-8 .device-sensors{background:#666;border-radius:",Object(h.b)("3px"),";height:",Object(h.b)("6px"),";left:50%;margin-left:",Object(h.b)("-38px"),";position:absolute;top:",Object(h.b)("52px"),";width:",Object(h.b)("76px"),";}.device-iphone-8 .device-sensors::after,.device-iphone-8 .device-sensors::before{background:#666;border-radius:50%;content:'';position:absolute;}.device-iphone-8 .device-sensors::after{height:",Object(h.b)("10px"),";left:50%;margin-left:",Object(h.b)("-5px"),";top:",Object(h.b)("-25px"),";width:",Object(h.b)("10px"),";}.device-iphone-8 .device-sensors::before{height:",Object(h.b)("12px"),";left:",Object(h.b)("-42px"),";margin-top:",Object(h.b)("-6px"),";top:50%;width:",Object(h.b)("12px"),";}.device-iphone-8 .device-btns{background:#c8cacb;height:",Object(h.b)("30px"),";left:",Object(h.b)("-3px"),";position:absolute;top:",Object(h.b)("102px"),";width:",Object(h.b)("3px"),";}.device-iphone-8 .device-btns::after,.device-iphone-8 .device-btns::before{background:#c8cacb;content:'';height:",Object(h.b)("56px"),";left:0;position:absolute;width:",Object(h.b)("3px"),";}.device-iphone-8 .device-btns::after{top:",Object(h.b)("62px"),";}.device-iphone-8 .device-btns::before{top:",Object(h.b)("132px"),";}.device-iphone-8 .device-power{background:#c8cacb;height:",Object(h.b)("80px"),";position:absolute;right:",Object(h.b)("-2px"),";top:",Object(h.b)("160px"),";width:",Object(h.b)("3px"),";}.device-iphone-8.device-gold .device-frame{box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #e4b08a,inset 0 0 0 ",Object(h.b)("7px")," #f7e8dd;}.device-iphone-8.device-gold .device-header{border-color:#e4b08a;}.device-iphone-8.device-gold .device-btns,.device-iphone-8.device-gold .device-btns::after,.device-iphone-8.device-gold .device-btns::before{background:#e4b08a;}.device-iphone-8.device-gold .device-power{background:#e4b08a;}.device-iphone-8.device-spacegray .device-frame{background:#222;box-shadow:inset 0 0 0 ",Object(h.b)("2px")," #74747a,inset 0 0 0 ",Object(h.b)("7px")," #9b9ba0;}.device-iphone-8.device-spacegray .device-stripe::after,.device-iphone-8.device-spacegray .device-stripe::before{border-color:rgba(204,204,204,0.35);}.device-iphone-8.device-spacegray .device-btns,.device-iphone-8.device-spacegray .device-btns::after,.device-iphone-8.device-spacegray .device-btns::before{background:#74747a;}");Object(c.c)(Object(h.e)()," ",b," ",f," ",v);var g=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement("meta",{charset:"utf-8"}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),o.a.createElement("title",null,u.a.site.title)),t)};g.propTypes={children:a.a.node.isRequired};t.a=g},179:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(4),a=n.n(r),c=n(56),d=n(1),s=function(e){var t=e.location,n=d.default.getResourcesForPathname(t.pathname);return o.a.createElement(c.a,{location:t,pageResources:n})};s.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=s},189:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-page-2-js-25327ce4e88f4dc9878a.js.map