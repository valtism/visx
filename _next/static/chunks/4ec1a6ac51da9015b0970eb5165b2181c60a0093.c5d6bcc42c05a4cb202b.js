(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"/W13":function(x){x.exports=JSON.parse('{"name":"@visx/demo-drag-ii","description":"Standalone visx drag demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/curve":"latest","@visx/drag":"latest","@visx/gradient":"latest","@visx/responsive":"latest","@visx/shape":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","drag","draw"]}')},KMjC:function(x,y,e){"use strict";e.d(y,"a",(function(){return l}));var t=e("fGyu"),n=e("jg1C"),r=e("yFcC"),a=e.n(r),i=e("ERkP"),o=e("geX1"),s=e("OSpJ"),c=e("m+Ft"),u=e("Cf/J");function l(x){var y=x.data,e=void 0===y?[]:y,r=x.width,l=x.height,d=Object(i.useState)(e),f=d[0],g=d[1],p=Object(i.useCallback)((function(x){g((function(y){return[].concat(Object(t.a)(y),[[{x:x.x,y:x.y}]])}))}),[g]),b=Object(i.useCallback)((function(x){g((function(y){var e=Object(t.a)(y),n={x:x.x+x.dx,y:x.y+x.dy},r=e.length-1;return e[r]=[].concat(Object(t.a)(e[r]||[]),[n]),e}))}),[g]),v=Object(s.a)({onDragStart:p,onDragMove:b,resetOnStart:!0}),j=v.x,m=void 0===j?0:j,h=v.y,O=void 0===h?0:h,w=v.dx,k=v.dy,S=v.isDragging,E=v.dragStart,M=v.dragEnd,D=v.dragMove;return r<10?null:Object(n.jsxs)("div",{style:{touchAction:"none"},className:"jsx-3733691427 DragII",children:[Object(n.jsxs)("svg",{width:r,height:l,className:"jsx-3733691427",children:[Object(n.jsx)(u.a,{id:"stroke",from:"#ff614e",to:"#ffdc64"}),Object(n.jsx)("rect",{fill:"#04002b",width:r,height:l,rx:14,className:"jsx-3733691427"}),f.map((function(x,y){return Object(n.jsx)(o.a,{fill:"transparent",stroke:"url(#stroke)",strokeWidth:3,data:x,curve:c.b,x:function(x){return x.x},y:function(x){return x.y}},"line-".concat(y))})),Object(n.jsxs)("g",{className:"jsx-3733691427",children:[S&&Object(n.jsx)("rect",{width:r,height:l,onMouseMove:D,onMouseUp:M,fill:"transparent",className:"jsx-3733691427"}),S&&Object(n.jsxs)("g",{className:"jsx-3733691427",children:[Object(n.jsx)("rect",{fill:"white",width:8,height:8,x:m+w-4,y:O+k-4,pointerEvents:"none",className:"jsx-3733691427"}),Object(n.jsx)("circle",{cx:m,cy:O,r:4,fill:"transparent",stroke:"white",pointerEvents:"none",className:"jsx-3733691427"})]}),Object(n.jsx)("rect",{fill:"transparent",width:r,height:l,onMouseDown:E,onMouseUp:S?M:void 0,onMouseMove:S?D:void 0,onTouchStart:E,onTouchEnd:S?M:void 0,onTouchMove:S?D:void 0,className:"jsx-3733691427"})]})]}),Object(n.jsx)("div",{className:"jsx-3733691427 deets",children:Object(n.jsxs)("div",{className:"jsx-3733691427",children:["Based on Mike Bostock's"," ",Object(n.jsx)("a",{href:"https://bl.ocks.org/mbostock/f705fc55e6f26df29354",className:"jsx-3733691427",children:"Line Drawing"})]})}),Object(n.jsx)(a.a,{id:"3733691427",children:[".DragII.jsx-3733691427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}","svg.jsx-3733691427{margin:1rem 0;cursor:crosshair;}",".deets.jsx-3733691427{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;font-size:12px;}",".deets.jsx-3733691427>div.jsx-3733691427{margin:0.25rem;}"]})]})}try{Example.displayName="Example",Example.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},data:{defaultValue:{value:"[]"},description:"",name:"data",required:!1,type:{name:"Lines | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-drag-ii/Example.tsx#Example"]={docgenInfo:Example.__docgenInfo,name:"Example",path:"src/sandboxes/visx-drag-ii/Example.tsx#Example"})}catch(d){}},OSpJ:function(x,y,e){"use strict";e.d(y,"a",(function(){return d}));var t=e("ERkP"),n=e("rkTo"),r=e("Q0jm"),a=e("LHst"),i=e("jpI8");function o(x,y,e){return Math.min(Math.max(x,y),e)}function s(x,y){var e="undefined"!==typeof Symbol&&x[Symbol.iterator]||x["@@iterator"];if(e)return(e=e.call(x)).next.bind(e);if(Array.isArray(x)||(e=function(x,y){if(!x)return;if("string"===typeof x)return c(x,y);var e=Object.prototype.toString.call(x).slice(8,-1);"Object"===e&&x.constructor&&(e=x.constructor.name);if("Map"===e||"Set"===e)return Array.from(x);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(x,y)}(x))||y&&x&&"number"===typeof x.length){e&&(x=e);var t=0;return function(){return t>=x.length?{done:!0}:{done:!1,value:x[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(x,y){(null==y||y>x.length)&&(y=x.length);for(var e=0,t=new Array(y);e<y;e++)t[e]=x[e];return t}function u(x,y,e){var t,n,r,a;return void 0===e&&(e={}),y.length>0?function(x,y){for(var e,t=x,n=1/0,r=s(y);!(e=r()).done;){var a=e.value,i=Math.sqrt(Math.pow(a.x-x.x,2)+Math.pow(a.y-x.y,2));i<n&&(n=i,t={x:a.x,y:a.y})}return t}(x,y):{x:o(x.x,null!=(t=e.xMin)?t:-1/0,null!=(n=e.xMax)?n:1/0),y:o(x.y,null!=(r=e.yMin)?r:-1/0,null!=(a=e.yMax)?a:1/0)}}function l(){return(l=Object.assign||function(x){for(var y=1;y<arguments.length;y++){var e=arguments[y];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(x[t]=e[t])}return x}).apply(this,arguments)}function d(x){var y=void 0===x?{}:x,e=y.resetOnStart,o=void 0!==e&&e,s=y.snapToPointer,c=void 0===s||s,d=y.onDragEnd,f=y.onDragMove,g=y.onDragStart,p=y.x,b=y.y,v=y.dx,j=y.dy,m=y.isDragging,h=y.restrict,O=void 0===h?{}:h,w=y.restrictToPath,k=Object(t.useRef)({x:p,y:b,dx:v,dy:j}),S=function(x){var y=Object(t.useState)(x),e=y[0],n=y[1],r=Object(t.useRef)(null),a=Object(t.useCallback)((function(x,y){r.current=y||null,n(x)}),[n]);return Object(t.useLayoutEffect)((function(){r.current&&(r.current(e),r.current=null)}),[e]),[e,a]}({x:p,y:b,dx:null!=v?v:0,dy:null!=j?j:0,isDragging:!1}),E=S[0],M=S[1],D=Object(t.useState)(new n.a({x:0,y:0})),C=D[0],N=D[1];Object(t.useEffect)((function(){k.current.x===p&&k.current.y===b&&k.current.dx===v&&k.current.dy===j||(k.current={x:p,y:b,dx:v,dy:j},M((function(x){return l({},x,{x:p,y:b,dx:null!=v?v:0,dy:null!=j?j:0})})))})),Object(t.useEffect)((function(){void 0!==m&&E.isDragging!==m&&M((function(x){return l({},x,{isDragging:m})}))}),[E.isDragging,m,M]);var T=function(x){return Object(t.useMemo)((function(){if(!x)return[];var y=x.getCTM()||new DOMMatrix;return function(x,y,e){if(void 0===e&&(e=1),!x)return[];for(var t=[],n=x.getTotalLength(),r=0;r<=n;r+=e){var a=x.getPointAtLength(r).matrixTransform(y);t.push(a)}return t}(x,y)}),[null==x?void 0:x.getTotalLength()])}(w),A=Object(t.useCallback)((function(x){x.persist(),M((function(y){var e=y.x,t=void 0===e?0:e,a=y.y,s=void 0===a?0:a,l=y.dx,d=y.dy,f=new n.a({x:(t||0)+l,y:(s||0)+d}),g=Object(i.a)(x)||new n.a({x:0,y:0}),p=u(c?g:f,T,O);return N(Object(r.a)(f,g)),{isDragging:!0,dx:o?0:y.dx,dy:o?0:y.dy,x:o?p.x:p.x-y.dx,y:o?p.y:p.y-y.dy}}),g&&function(y){g(l({},y,{event:x}))})}),[g,o,O,T,M,c]),I=Object(t.useCallback)((function(x){x.persist(),M((function(y){if(!y.isDragging)return y;var e=y.x,t=void 0===e?0:e,r=y.y,o=void 0===r?0:r,s=Object(i.a)(x)||new n.a({x:0,y:0}),d=u(c?s:Object(a.a)(s,C),T,O);return l({},y,{dx:d.x-t,dy:d.y-o})}),f&&function(y){y.isDragging&&f(l({},y,{event:x}))})}),[M,f,c,C,T,O]),_=Object(t.useCallback)((function(x){x.persist(),M((function(x){return l({},x,{isDragging:!1})}),d&&function(y){d(l({},y,{event:x}))})}),[d,M]);return l({},E,{dragEnd:_,dragMove:I,dragStart:A})}},"sU+B":function(x,y,e){"use strict";e.r(y),e.d(y,"packageJson",(function(){return a})),e.d(y,"default",(function(){return c}));var t=e("jg1C"),n=(e("ERkP"),e("KMjC")),r=e("i9k6"),a=e("/W13"),i={background:"#04002b",borderRadius:14},o={color:"#ff614e",zIndex:1},s={data:[[{x:49,y:50},{x:49,y:50},{x:48,y:50},{x:46,y:50},{x:43,y:50},{x:42,y:50},{x:41,y:50},{x:40,y:50},{x:39,y:50},{x:39,y:51},{x:39,y:52},{x:38,y:53},{x:37,y:54},{x:36,y:56},{x:36,y:59},{x:36,y:61},{x:36,y:62},{x:36,y:64},{x:36,y:66},{x:36,y:69},{x:36,y:72},{x:36,y:75},{x:37,y:78},{x:38,y:80},{x:39,y:81},{x:40,y:83},{x:40,y:84},{x:41,y:84},{x:42,y:84},{x:43,y:84},{x:46,y:84},{x:47,y:84},{x:49,y:84},{x:51,y:83},{x:53,y:81},{x:54,y:80},{x:56,y:77},{x:59,y:73},{x:60,y:68},{x:63,y:60},{x:66,y:45},{x:67,y:35},{x:67,y:31},{x:67,y:27},{x:67,y:23},{x:67,y:21},{x:67,y:19},{x:66,y:18},{x:65,y:17},{x:65,y:17},{x:64,y:17},{x:63,y:16},{x:63,y:16},{x:62,y:16},{x:62,y:16},{x:61,y:16},{x:61,y:17},{x:61,y:18},{x:60,y:19},{x:60,y:19},{x:60,y:20},{x:60,y:20},{x:59,y:21},{x:59,y:22},{x:59,y:23},{x:59,y:24},{x:58,y:27},{x:57,y:31},{x:56,y:34},{x:56,y:36},{x:56,y:39},{x:56,y:43},{x:56,y:46},{x:56,y:49},{x:56,y:55},{x:56,y:59},{x:57,y:68},{x:58,y:70},{x:60,y:73},{x:61,y:75},{x:62,y:77},{x:63,y:78},{x:64,y:80},{x:65,y:81},{x:65,y:83},{x:66,y:83},{x:66,y:84},{x:66,y:84},{x:66,y:84},{x:67,y:84},{x:67,y:85},{x:68,y:85},{x:68,y:85},{x:69,y:85},{x:69,y:85},{x:70,y:84},{x:70,y:83},{x:72,y:81},{x:74,y:78},{x:77,y:75},{x:79,y:73},{x:80,y:70},{x:82,y:66},{x:84,y:61},{x:86,y:57},{x:86,y:56},{x:87,y:54},{x:87,y:52},{x:87,y:50},{x:87,y:49},{x:87,y:48},{x:87,y:48},{x:87,y:47},{x:86,y:47},{x:85,y:47},{x:84,y:47},{x:84,y:47},{x:83,y:47},{x:83,y:47},{x:83,y:47},{x:82,y:48},{x:82,y:48},{x:82,y:51},{x:82,y:51},{x:82,y:52},{x:82,y:52},{x:82,y:52},{x:82,y:53},{x:82,y:53},{x:83,y:54},{x:83,y:54},{x:83,y:55},{x:83,y:55},{x:84,y:55},{x:84,y:55},{x:84,y:55},{x:85,y:55},{x:86,y:55},{x:87,y:55},{x:87,y:55},{x:88,y:55},{x:90,y:56},{x:91,y:56},{x:93,y:56},{x:94,y:56},{x:95,y:56},{x:96,y:56},{x:97,y:55},{x:100,y:53},{x:101,y:53},{x:102,y:52},{x:102,y:52},{x:102,y:51},{x:102,y:52},{x:102,y:52},{x:101,y:53},{x:101,y:54},{x:99,y:57},{x:97,y:63},{x:96,y:64},{x:96,y:65},{x:96,y:67},{x:96,y:69},{x:96,y:70},{x:96,y:71},{x:96,y:71},{x:96,y:72},{x:96,y:72},{x:96,y:72},{x:96,y:73},{x:97,y:74},{x:98,y:75},{x:99,y:77},{x:101,y:79},{x:102,y:79},{x:103,y:80},{x:104,y:80},{x:105,y:80},{x:105,y:80},{x:106,y:80},{x:107,y:80},{x:108,y:79},{x:109,y:77},{x:110,y:75},{x:112,y:72},{x:114,y:68},{x:116,y:62},{x:118,y:59},{x:119,y:56},{x:120,y:54},{x:121,y:53},{x:122,y:51},{x:123,y:51},{x:123,y:50},{x:124,y:50},{x:125,y:49},{x:125,y:49},{x:125,y:49},{x:126,y:49},{x:127,y:49},{x:128,y:50},{x:128,y:51},{x:129,y:51},{x:129,y:51},{x:129,y:52},{x:128,y:52},{x:128,y:52},{x:127,y:51},{x:126,y:51},{x:125,y:51},{x:123,y:51},{x:122,y:51},{x:120,y:52},{x:119,y:53},{x:118,y:54},{x:115,y:60},{x:113,y:64},{x:112,y:67},{x:112,y:69},{x:112,y:70},{x:112,y:70},{x:112,y:72},{x:112,y:73},{x:112,y:73},{x:112,y:74},{x:113,y:75},{x:113,y:76},{x:113,y:76},{x:114,y:76},{x:114,y:76},{x:115,y:76},{x:115,y:76},{x:116,y:77},{x:117,y:77},{x:119,y:77},{x:120,y:77},{x:121,y:77},{x:122,y:77},{x:123,y:76},{x:124,y:76},{x:125,y:75},{x:126,y:75},{x:126,y:73},{x:127,y:72},{x:128,y:70},{x:128,y:68},{x:129,y:66},{x:129,y:64},{x:131,y:60},{x:131,y:57},{x:132,y:55},{x:133,y:54},{x:133,y:52},{x:133,y:51},{x:133,y:50},{x:133,y:47},{x:133,y:46},{x:133,y:46},{x:133,y:46},{x:133,y:46},{x:132,y:46},{x:132,y:46},{x:131,y:46},{x:131,y:46},{x:130,y:46},{x:130,y:46},{x:130,y:46},{x:129,y:47},{x:129,y:48},{x:129,y:48},{x:129,y:48},{x:129,y:49},{x:129,y:49},{x:129,y:50},{x:129,y:51},{x:129,y:52},{x:129,y:52},{x:129,y:53},{x:129,y:55},{x:129,y:56},{x:129,y:57},{x:129,y:58},{x:129,y:59},{x:129,y:59},{x:129,y:60},{x:129,y:62},{x:129,y:64},{x:129,y:65},{x:129,y:67},{x:129,y:69},{x:130,y:70},{x:131,y:72},{x:131,y:74},{x:132,y:75},{x:133,y:77},{x:134,y:78},{x:134,y:79},{x:135,y:80},{x:135,y:81},{x:135,y:81},{x:136,y:81},{x:136,y:81},{x:136,y:82},{x:136,y:82},{x:137,y:82},{x:137,y:82},{x:138,y:82},{x:139,y:83},{x:139,y:83},{x:139,y:83},{x:140,y:83},{x:140,y:83},{x:140,y:83},{x:140,y:83},{x:140,y:83},{x:141,y:81},{x:141,y:80},{x:142,y:77},{x:142,y:66},{x:142,y:65},{x:142,y:62},{x:142,y:61},{x:142,y:60},{x:142,y:60},{x:142,y:60},{x:142,y:60},{x:142,y:60},{x:142,y:61},{x:142,y:62},{x:142,y:63},{x:142,y:64},{x:142,y:66},{x:143,y:67},{x:143,y:68},{x:144,y:69},{x:144,y:70},{x:145,y:71},{x:145,y:73},{x:146,y:75},{x:147,y:78},{x:153,y:83},{x:153,y:83},{x:153,y:83},{x:153,y:83},{x:154,y:83},{x:154,y:83},{x:155,y:83},{x:156,y:81},{x:156,y:79},{x:156,y:78},{x:156,y:77},{x:156,y:76},{x:156,y:74},{x:156,y:71},{x:156,y:70},{x:157,y:68},{x:157,y:66},{x:157,y:64},{x:157,y:63},{x:157,y:63},{x:157,y:62},{x:157,y:61},{x:157,y:61},{x:157,y:60},{x:156,y:60},{x:156,y:60},{x:156,y:60},{x:156,y:61},{x:156,y:61},{x:157,y:64},{x:158,y:65},{x:159,y:68},{x:160,y:69},{x:161,y:70},{x:162,y:72},{x:162,y:73},{x:163,y:74},{x:164,y:75},{x:165,y:76},{x:165,y:76},{x:166,y:76},{x:166,y:76},{x:167,y:76},{x:167,y:76},{x:168,y:76},{x:169,y:76},{x:172,y:76},{x:172,y:76},{x:173,y:76},{x:175,y:75},{x:175,y:75},{x:176,y:74},{x:176,y:74},{x:176,y:73},{x:176,y:72},{x:176,y:72},{x:176,y:71},{x:176,y:69},{x:176,y:68},{x:176,y:66},{x:176,y:65},{x:176,y:64},{x:176,y:63},{x:175,y:62},{x:174,y:61},{x:173,y:60},{x:173,y:57},{x:172,y:56},{x:172,y:55},{x:171,y:53},{x:170,y:52},{x:169,y:51},{x:168,y:50},{x:167,y:49},{x:167,y:49},{x:167,y:49},{x:166,y:49},{x:166,y:49},{x:166,y:49},{x:165,y:49},{x:165,y:49},{x:165,y:50},{x:165,y:50},{x:165,y:51},{x:165,y:51},{x:165,y:52},{x:165,y:52},{x:165,y:52},{x:165,y:53},{x:166,y:53},{x:166,y:54},{x:166,y:54},{x:167,y:54},{x:167,y:54},{x:167,y:54},{x:168,y:54},{x:168,y:54},{x:169,y:54},{x:169,y:54},{x:170,y:54},{x:171,y:54},{x:173,y:54},{x:175,y:55},{x:177,y:55},{x:178,y:55},{x:180,y:55},{x:182,y:55},{x:183,y:55},{x:186,y:55},{x:189,y:55},{x:191,y:55},{x:193,y:54},{x:194,y:53},{x:196,y:52},{x:196,y:52},{x:197,y:51},{x:198,y:51},{x:198,y:51},{x:199,y:51},{x:199,y:50},{x:199,y:50},{x:199,y:50},{x:199,y:49},{x:199,y:49}],[{x:39,y:34},{x:38,y:34},{x:36,y:34},{x:33,y:36},{x:30,y:37},{x:29,y:38},{x:28,y:38},{x:27,y:38},{x:26,y:39},{x:26,y:40},{x:25,y:41},{x:25,y:41},{x:24,y:42},{x:24,y:42},{x:24,y:43},{x:23,y:44},{x:23,y:45},{x:23,y:45},{x:23,y:46},{x:23,y:47},{x:23,y:49},{x:23,y:50},{x:23,y:52},{x:23,y:53},{x:23,y:53},{x:23,y:54},{x:23,y:54},{x:23,y:55},{x:23,y:57},{x:23,y:57},{x:23,y:58},{x:23,y:59},{x:23,y:61},{x:24,y:65},{x:24,y:67},{x:25,y:70},{x:25,y:71},{x:25,y:72},{x:25,y:73},{x:25,y:74},{x:25,y:75},{x:25,y:77},{x:25,y:78},{x:25,y:79},{x:26,y:80},{x:26,y:82},{x:26,y:83},{x:27,y:86},{x:27,y:86},{x:27,y:88},{x:27,y:89},{x:28,y:90},{x:28,y:91},{x:29,y:92},{x:29,y:93},{x:30,y:95},{x:31,y:95},{x:31,y:96},{x:32,y:97},{x:33,y:97},{x:34,y:99},{x:35,y:100},{x:36,y:101},{x:37,y:102},{x:37,y:102},{x:38,y:102},{x:39,y:102},{x:40,y:102},{x:41,y:102},{x:44,y:103},{x:47,y:103},{x:52,y:104},{x:59,y:104},{x:64,y:104},{x:68,y:104},{x:73,y:104},{x:76,y:104},{x:83,y:105},{x:87,y:105},{x:92,y:105},{x:98,y:105},{x:102,y:105},{x:110,y:105},{x:114,y:105},{x:119,y:105},{x:129,y:105},{x:137,y:104},{x:147,y:103},{x:158,y:102},{x:173,y:100},{x:180,y:100},{x:183,y:99},{x:186,y:99},{x:189,y:98},{x:194,y:97},{x:199,y:95},{x:201,y:94},{x:205,y:92},{x:211,y:88},{x:214,y:86},{x:216,y:84},{x:218,y:82},{x:219,y:82},{x:220,y:81},{x:220,y:80},{x:221,y:80},{x:221,y:79},{x:221,y:78},{x:221,y:77},{x:222,y:76},{x:222,y:74},{x:223,y:72},{x:223,y:70},{x:223,y:68},{x:223,y:64},{x:223,y:59},{x:223,y:55},{x:223,y:51},{x:223,y:48},{x:223,y:48},{x:223,y:46},{x:223,y:45},{x:223,y:43},{x:223,y:43},{x:223,y:42},{x:221,y:41},{x:220,y:40},{x:218,y:39},{x:216,y:38},{x:216,y:38},{x:214,y:37},{x:212,y:36},{x:209,y:35},{x:207,y:34},{x:204,y:34},{x:200,y:34},{x:196,y:34},{x:193,y:33},{x:190,y:33},{x:186,y:33},{x:182,y:33},{x:178,y:33},{x:175,y:33},{x:172,y:33},{x:166,y:33},{x:161,y:33},{x:155,y:33},{x:150,y:33},{x:140,y:33},{x:136,y:34},{x:131,y:35},{x:125,y:35},{x:123,y:35},{x:121,y:36},{x:120,y:36},{x:118,y:36},{x:116,y:36},{x:114,y:36},{x:112,y:36},{x:110,y:36},{x:109,y:36},{x:108,y:36},{x:107,y:36},{x:106,y:36},{x:105,y:36},{x:104,y:36},{x:103,y:36},{x:102,y:36},{x:101,y:36},{x:100,y:36},{x:98,y:36},{x:96,y:36},{x:95,y:36},{x:94,y:36},{x:93,y:36},{x:92,y:36},{x:92,y:36},{x:91,y:36},{x:91,y:36},{x:90,y:36},{x:89,y:36},{x:89,y:36},{x:88,y:36},{x:88,y:36},{x:87,y:36},{x:86,y:36},{x:86,y:36},{x:86,y:36},{x:86,y:36},{x:85,y:36},{x:85,y:35},{x:85,y:34},{x:85,y:34},{x:85,y:34},{x:85,y:33},{x:85,y:33},{x:84,y:32},{x:84,y:31},{x:83,y:29},{x:83,y:27},{x:83,y:25},{x:82,y:24},{x:82,y:22},{x:80,y:19},{x:80,y:18},{x:79,y:17},{x:78,y:16},{x:78,y:15},{x:78,y:15},{x:77,y:15},{x:77,y:14},{x:76,y:14},{x:76,y:13},{x:75,y:13},{x:75,y:12},{x:74,y:12},{x:73,y:12},{x:73,y:11},{x:72,y:11},{x:72,y:11},{x:70,y:10},{x:70,y:10},{x:67,y:10},{x:65,y:9},{x:65,y:9},{x:64,y:9},{x:63,y:9},{x:63,y:9},{x:62,y:9},{x:61,y:9},{x:61,y:9},{x:60,y:9},{x:59,y:9},{x:59,y:9},{x:59,y:9},{x:58,y:9},{x:57,y:9},{x:57,y:9},{x:56,y:9},{x:56,y:10},{x:55,y:10},{x:55,y:11},{x:54,y:11},{x:54,y:12},{x:53,y:13},{x:51,y:15},{x:51,y:15},{x:50,y:16},{x:49,y:17},{x:49,y:18},{x:48,y:19},{x:48,y:20},{x:47,y:21},{x:46,y:22},{x:46,y:22},{x:46,y:23},{x:45,y:24},{x:45,y:24}]]};function c(){return Object(t.jsx)(r.a,{title:"Drag ii",description:"<Drag.Drag />",exampleProps:s,exampleRenderer:n.a,exampleUrl:"/drag-ii",tileStyles:i,detailsStyles:o})}},zygG:function(x,y,e){"use strict";e.d(y,"a",(function(){return n}));var t=e("HO86");function n(x,y){return function(x){if(Array.isArray(x))return x}(x)||function(x,y){var e=null==x?null:"undefined"!==typeof Symbol&&x[Symbol.iterator]||x["@@iterator"];if(null!=e){var t,n,r=[],a=!0,i=!1;try{for(e=e.call(x);!(a=(t=e.next()).done)&&(r.push(t.value),!y||r.length!==y);a=!0);}catch(o){i=!0,n=o}finally{try{a||null==e.return||e.return()}finally{if(i)throw n}}return r}}(x,y)||Object(t.a)(x,y)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);