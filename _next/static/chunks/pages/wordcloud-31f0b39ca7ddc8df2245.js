_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[133],{"/bzO":function(n,t,e){"use strict";function r(n,t){var e,r=0,o=(n=n.slice()).length-1,i=n[r],a=n[o];return a<i&&(e=r,r=o,o=e,e=i,i=a,a=e),n[r]=t.floor(i),n[o]=t.ceil(a),n}e.d(t,"a",(function(){return r}))},"55eI":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wordcloud",function(){return e("lXeV")}])},"75In":function(n,t,e){"use strict";e.d(t,"b",(function(){return p})),e.d(t,"a",(function(){return m}));var r=e("PB0s"),o=e("VBI3"),i=e("/bzO"),a=e("2+fR"),c=e("W1cA");function u(n){return Math.log(n)}function l(n){return Math.exp(n)}function s(n){return-Math.log(-n)}function f(n){return-Math.exp(-n)}function d(n){return isFinite(n)?+("1e"+n):n<0?0:n}function h(n){return function(t){return-n(-t)}}function p(n){var t,e,a=n(u,l),c=a.domain,p=10;function m(){return t=function(n){return n===Math.E?Math.log:10===n&&Math.log10||2===n&&Math.log2||(n=Math.log(n),function(t){return Math.log(t)/n})}(p),e=function(n){return 10===n?d:n===Math.E?Math.exp:function(t){return Math.pow(n,t)}}(p),c()[0]<0?(t=h(t),e=h(e),n(s,f)):n(u,l),a}return a.base=function(n){return arguments.length?(p=+n,m()):p},a.domain=function(n){return arguments.length?(c(n),m()):c()},a.ticks=function(n){var o,i=c(),a=i[0],u=i[i.length-1];(o=u<a)&&(d=a,a=u,u=d);var l,s,f,d=t(a),h=t(u),m=null==n?10:+n,g=[];if(!(p%1)&&h-d<m){if(d=Math.floor(d),h=Math.ceil(h),a>0){for(;d<=h;++d)for(s=1,l=e(d);s<p;++s)if(!((f=l*s)<a)){if(f>u)break;g.push(f)}}else for(;d<=h;++d)for(s=p-1,l=e(d);s>=1;--s)if(!((f=l*s)<a)){if(f>u)break;g.push(f)}2*g.length<m&&(g=Object(r.a)(a,u,m))}else g=Object(r.a)(d,h,Math.min(h-d,m)).map(e);return o?g.reverse():g},a.tickFormat=function(n,r){if(null==r&&(r=10===p?".0e":","),"function"!==typeof r&&(r=Object(o.a)(r)),n===1/0)return r;null==n&&(n=10);var i=Math.max(1,p*n/a.ticks().length);return function(n){var o=n/e(Math.round(t(n)));return o*p<p-.5&&(o*=p),o<=i?r(n):""}},a.nice=function(){return c(Object(i.a)(c(),{floor:function(n){return e(Math.floor(t(n)))},ceil:function(n){return e(Math.ceil(t(n)))}}))},a}function m(){var n=p(Object(a.d)()).domain([1,10]);return n.copy=function(){return Object(a.a)(n,m()).base(n.base())},c.b.apply(n,arguments),n}},HO86:function(n,t,e){"use strict";e.d(t,"a",(function(){return o}));var r=e("lEbO");function o(n,t){if(n){if("string"===typeof n)return Object(r.a)(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(r.a)(n,t):void 0}}},JmwF:function(n,t,e){"use strict";e.d(t,"a",(function(){return f}));var r=e("aWzz"),o=e.n(r),i=e("ERkP"),a=e.n(i),c=e("O94r"),u=e.n(c),l=["top","left","transform","className","children","innerRef"];function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function f(n){var t=n.top,e=void 0===t?0:t,r=n.left,o=void 0===r?0:r,i=n.transform,c=n.className,f=n.children,d=n.innerRef,h=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,l);return a.a.createElement("g",s({ref:d,className:u()("visx-group",c),transform:i||"translate("+o+", "+e+")"},h),f)}f.propTypes={top:o.a.number,left:o.a.number,transform:o.a.string,className:o.a.string,children:o.a.node,innerRef:o.a.oneOfType([o.a.string,o.a.func,o.a.object])}},O3m4:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e("ERkP"),o=e.n(r),i=e("j1R1"),a=["dx","dy","textAnchor","innerRef","innerTextRef","verticalAnchor","angle","lineHeight","scaleToFit","capHeight","width"];function c(){return(c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var u={overflow:"visible"};function l(n){var t=n.dx,e=void 0===t?0:t,r=n.dy,l=void 0===r?0:r,s=n.textAnchor,f=void 0===s?"start":s,d=n.innerRef,h=n.innerTextRef,p=(n.verticalAnchor,n.angle,n.lineHeight),m=void 0===p?"1em":p,g=(n.scaleToFit,n.capHeight,n.width,function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,a)),w=g.x,v=void 0===w?0:w,y=g.fontSize,b=Object(i.a)(n),x=b.wordsByLines,O=b.startDy,j=b.transform;return o.a.createElement("svg",{ref:d,x:e,y:l,fontSize:y,style:u},x.length>0?o.a.createElement("text",c({ref:h,transform:j},g,{textAnchor:f}),x.map((function(n,t){return o.a.createElement("tspan",{key:t,x:v,dy:0===t?O:m},n.words.join(" "))}))):null)}},fGyu:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("lEbO");var o=e("HO86");function i(n){return function(n){if(Array.isArray(n))return Object(r.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||Object(o.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},hdX1:function(n,t,e){"use strict";var r=e("ViZ6"),o=e.n(r);t.a=o()((function(n,t){try{var e=document.getElementById("__react_svg_text_measurement_id");if(!e){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.style.width="0",r.style.height="0",r.style.position="absolute",r.style.top="-100%",r.style.left="-100%",(e=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id","__react_svg_text_measurement_id"),r.appendChild(e),document.body.appendChild(r)}return Object.assign(e.style,t),e.textContent=n,e.getComputedTextLength()}catch(o){return null}}),(function(n,t){return n+"_"+JSON.stringify(t)}))},i2hO:function(n,t,e){"use strict";e.d(t,"a",(function(){return a}));var r=e("75In"),o=e("xx0A"),i=Object(o.b)("domain","range","reverse","base","clamp","interpolate","nice","round");function a(n){return i(Object(r.a)(),n)}},j1R1:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var r=e("ERkP"),o=e("leIH"),i=e.n(o),a=e("hdX1"),c=["verticalAnchor","scaleToFit","angle","width","lineHeight","capHeight","children","style"];function u(n){return"number"===typeof n}function l(n){return"number"===typeof n&&Number.isFinite(n)||"string"===typeof n}function s(n){var t=n.verticalAnchor,e=void 0===t?"end":t,o=n.scaleToFit,s=void 0!==o&&o,f=n.angle,d=n.width,h=n.lineHeight,p=void 0===h?"1em":h,m=n.capHeight,g=void 0===m?"0.71em":m,w=n.children,v=n.style,y=function(n,t){if(null==n)return{};var e,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,c),b=y.x,x=void 0===b?0:b,O=y.y,j=void 0===O?0:O,M=!l(x)||!l(j),S=Object(r.useMemo)((function(){return{wordsWithWidth:(null==w?[]:w.toString().split(/(?:(?!\u00A0+)\s+)/)).map((function(n){return{word:n,wordWidth:Object(a.a)(n,v)||0}})),spaceWidth:Object(a.a)("\xa0",v)||0}}),[w,v]),E=S.wordsWithWidth,_=S.spaceWidth,R=Object(r.useMemo)((function(){return M?[]:d||s?E.reduce((function(n,t){var e=t.word,r=t.wordWidth,o=n[n.length-1];if(o&&(null==d||s||(o.width||0)+r+_<d))o.words.push(e),o.width=o.width||0,o.width+=r+_;else{var i={words:[e],width:r};n.push(i)}return n}),[]):[{words:null==w?[]:w.toString().split(/(?:(?!\u00A0+)\s+)/)}]}),[M,d,s,w,E,_]),k=Object(r.useMemo)((function(){return M?"":"start"===e?i()("calc("+g+")"):"middle"===e?i()("calc("+(R.length-1)/2+" * -"+p+" + ("+g+" / 2))"):i()("calc("+(R.length-1)+" * -"+p+")")}),[M,e,g,R.length,p]),A=Object(r.useMemo)((function(){var n=[];if(M)return"";if(u(x)&&u(j)&&u(d)&&s&&R.length>0){var t=R[0].width||1,e="shrink-only"===s?Math.min(d/t,1):d/t,r=e,o=x-e*x,i=j-r*j;n.push("matrix("+e+", 0, 0, "+r+", "+o+", "+i+")")}return f&&n.push("rotate("+f+", "+x+", "+j+")"),n.length>0?n.join(" "):""}),[M,x,j,d,s,R,f]);return{wordsByLines:R,startDy:k,transform:A}}},lEbO:function(n,t,e){"use strict";function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}e.d(t,"a",(function(){return r}))},lXeV:function(n,t,e){"use strict";e.r(t);var r=e("jg1C"),o=(e("ERkP"),e("6wy5")),i=e("UaBx"),a=e("fFFM");t.default=function(){return Object(r.jsx)(o.a,{component:function(n){var t=n.width,e=n.height;return Object(r.jsx)(i.a,{width:t,height:e,showControls:!0})},title:"Wordcloud",codeSandboxDirectoryName:"visx-wordcloud",packageJson:a,children:"import React, { useState } from 'react';\nimport { Text } from '@visx/text';\nimport { scaleLog } from '@visx/scale';\nimport Wordcloud from '../../../../visx-wordcloud/src/Wordcloud';\nimport { totoAfricaLyrics } from './text.fixture';\n\ninterface ExampleProps {\n  width: number;\n  height: number;\n  showControls?: boolean;\n}\n\nexport interface WordData {\n  text: string;\n  value: number;\n}\n\nconst colors = ['#143059', '#2F6B9A', '#82a6c2'];\n\nfunction wordFreq(text: string): WordData[] {\n  const words: string[] = text.replace(/\\./g, '').split(/\\s/);\n  const freqMap: Record<string, number> = {};\n\n  for (const w of words) {\n    if (!freqMap[w]) freqMap[w] = 0;\n    freqMap[w] += 1;\n  }\n  return Object.keys(freqMap).map((word) => ({ text: word, value: freqMap[word] }));\n}\n\nfunction getRotationDegree() {\n  const rand = Math.random();\n  const degree = rand > 0.5 ? 60 : -60;\n  return rand * degree;\n}\n\nconst words = wordFreq(totoAfricaLyrics);\n\nconst fontScale = scaleLog({\n  domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],\n  range: [10, 100],\n});\nconst fontSizeSetter = (datum: WordData) => fontScale(datum.value);\n\nconst fixedValueGenerator = () => 0.5;\n\ntype SpiralType = 'archimedean' | 'rectangular';\n\nexport default function Example({ width, height, showControls }: ExampleProps) {\n  const [spiralType, setSpiralType] = useState<SpiralType>('archimedean');\n  const [withRotation, setWithRotation] = useState(false);\n\n  return (\n    <div className=\"wordcloud\">\n      <Wordcloud\n        words={words}\n        width={width}\n        height={height}\n        fontSize={fontSizeSetter}\n        font={'Impact'}\n        padding={2}\n        spiral={spiralType}\n        rotate={withRotation ? getRotationDegree : 0}\n        random={fixedValueGenerator}\n      >\n        {(cloudWords) =>\n          cloudWords.map((w, i) => (\n            <Text\n              key={w.text}\n              fill={colors[i % colors.length]}\n              textAnchor={'middle'}\n              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}\n              fontSize={w.size}\n              fontFamily={w.font}\n            >\n              {w.text}\n            </Text>\n          ))\n        }\n      </Wordcloud>\n      {showControls && (\n        <div>\n          <label>\n            Spiral type &nbsp;\n            <select\n              onChange={(e) => setSpiralType(e.target.value as SpiralType)}\n              value={spiralType}\n            >\n              <option key={'archimedean'} value={'archimedean'}>\n                archimedean\n              </option>\n              <option key={'rectangular'} value={'rectangular'}>\n                rectangular\n              </option>\n            </select>\n          </label>\n          <label>\n            With rotation &nbsp;\n            <input\n              type=\"checkbox\"\n              checked={withRotation}\n              onChange={() => setWithRotation(!withRotation)}\n            />\n          </label>\n          <br />\n        </div>\n      )}\n      <style jsx>{`\n        .wordcloud {\n          display: flex;\n          flex-direction: column;\n          user-select: none;\n        }\n        .wordcloud svg {\n          margin: 1rem 0;\n          cursor: pointer;\n        }\n\n        .wordcloud label {\n          display: inline-flex;\n          align-items: center;\n          font-size: 14px;\n          margin-right: 8px;\n        }\n        .wordcloud textarea {\n          min-height: 100px;\n        }\n      `}</style>\n    </div>\n  );\n}\n"})}}},[["55eI",0,2,1,3,4,5,6,12,45]]]);