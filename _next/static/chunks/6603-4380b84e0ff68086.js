(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6603],{37077:function(r,i,u){"use strict";var l=u(57966),c={"text/plain":"Text","text/html":"Url",default:"Text"};r.exports=function(r,i){var u,s,m,b,y,g,_,x,w=!1;i||(i={}),m=i.debug||!1;try{if(y=l(),g=document.createRange(),_=document.getSelection(),(x=document.createElement("span")).textContent=r,x.ariaHidden="true",x.style.all="unset",x.style.position="fixed",x.style.top=0,x.style.clip="rect(0, 0, 0, 0)",x.style.whiteSpace="pre",x.style.webkitUserSelect="text",x.style.MozUserSelect="text",x.style.msUserSelect="text",x.style.userSelect="text",x.addEventListener("copy",function(u){if(u.stopPropagation(),i.format){if(u.preventDefault(),void 0===u.clipboardData){m&&console.warn("unable to use e.clipboardData"),m&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var l=c[i.format]||c.default;window.clipboardData.setData(l,r)}else u.clipboardData.clearData(),u.clipboardData.setData(i.format,r)}i.onCopy&&(u.preventDefault(),i.onCopy(u.clipboardData))}),document.body.appendChild(x),g.selectNodeContents(x),_.addRange(g),!document.execCommand("copy"))throw Error("copy command was unsuccessful");w=!0}catch(l){m&&console.error("unable to copy using execCommand: ",l),m&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(i.format||"text",r),i.onCopy&&i.onCopy(window.clipboardData),w=!0}catch(l){m&&console.error("unable to copy using clipboardData: ",l),m&&console.error("falling back to prompt"),u="message"in i?i.message:"Copy to clipboard: #{key}, Enter",s=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",b=u.replace(/#{\s*key\s*}/g,s),window.prompt(b,r)}}finally{_&&("function"==typeof _.removeRange?_.removeRange(g):_.removeAllRanges()),x&&document.body.removeChild(x),y()}return w}},62069:function(r,i,u){var l,c;void 0!==(c="function"==typeof(l=function(){var r,i,u,l,c,s={},m={},b={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},y={currentLocale:b.currentLocale,zeroFormat:b.zeroFormat,nullFormat:b.nullFormat,defaultFormat:b.defaultFormat,scalePercentBy100:b.scalePercentBy100};function Numeral(r,i){this._input=r,this._value=i}return(l=function(r){var i,u,m,b;if(l.isNumeral(r))i=r.value();else if(0===r||void 0===r)i=0;else if(null===r||c.isNaN(r))i=null;else if("string"==typeof r){if(y.zeroFormat&&r===y.zeroFormat)i=0;else if(y.nullFormat&&r===y.nullFormat||!r.replace(/[^0-9]+/g,"").length)i=null;else{for(u in s)if((b="function"==typeof s[u].regexps.unformat?s[u].regexps.unformat():s[u].regexps.unformat)&&r.match(b)){m=s[u].unformat;break}i=(m=m||l._.stringToNumber)(r)}}else i=Number(r)||null;return new Numeral(r,i)}).version="2.0.6",l.isNumeral=function(r){return r instanceof Numeral},l._=c={numberToFormat:function(r,i,u){var c,s,b,y,g,_,x,w=m[l.options.currentLocale],O=!1,S=!1,P=0,j="",T="",N=!1;if(s=Math.abs(r=r||0),l._.includes(i,"(")?(O=!0,i=i.replace(/[\(|\)]/g,"")):(l._.includes(i,"+")||l._.includes(i,"-"))&&(g=l._.includes(i,"+")?i.indexOf("+"):r<0?i.indexOf("-"):-1,i=i.replace(/[\+|\-]/g,"")),l._.includes(i,"a")&&(c=!!(c=i.match(/a(k|m|b|t)?/))&&c[1],l._.includes(i," a")&&(j=" "),i=i.replace(RegExp(j+"a[kmbt]?"),""),s>=1e12&&!c||"t"===c?(j+=w.abbreviations.trillion,r/=1e12):s<1e12&&s>=1e9&&!c||"b"===c?(j+=w.abbreviations.billion,r/=1e9):s<1e9&&s>=1e6&&!c||"m"===c?(j+=w.abbreviations.million,r/=1e6):(s<1e6&&s>=1e3&&!c||"k"===c)&&(j+=w.abbreviations.thousand,r/=1e3)),l._.includes(i,"[.]")&&(S=!0,i=i.replace("[.]",".")),b=r.toString().split(".")[0],y=i.split(".")[1],_=i.indexOf(","),P=(i.split(".")[0].split(",")[0].match(/0/g)||[]).length,y?(l._.includes(y,"[")?(y=(y=y.replace("]","")).split("["),T=l._.toFixed(r,y[0].length+y[1].length,u,y[1].length)):T=l._.toFixed(r,y.length,u),b=T.split(".")[0],T=l._.includes(T,".")?w.delimiters.decimal+T.split(".")[1]:"",S&&0===Number(T.slice(1))&&(T="")):b=l._.toFixed(r,0,u),j&&!c&&Number(b)>=1e3&&j!==w.abbreviations.trillion)switch(b=String(Number(b)/1e3),j){case w.abbreviations.thousand:j=w.abbreviations.million;break;case w.abbreviations.million:j=w.abbreviations.billion;break;case w.abbreviations.billion:j=w.abbreviations.trillion}if(l._.includes(b,"-")&&(b=b.slice(1),N=!0),b.length<P)for(var C=P-b.length;C>0;C--)b="0"+b;return _>-1&&(b=b.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+w.delimiters.thousands)),0===i.indexOf(".")&&(b=""),x=b+T+(j||""),O?x=(O&&N?"(":"")+x+(O&&N?")":""):g>=0?x=0===g?(N?"-":"+")+x:x+(N?"-":"+"):N&&(x="-"+x),x},stringToNumber:function(r){var i,u,l,c=m[y.currentLocale],s=r,b={thousand:3,million:6,billion:9,trillion:12};if(y.zeroFormat&&r===y.zeroFormat)u=0;else if(y.nullFormat&&r===y.nullFormat||!r.replace(/[^0-9]+/g,"").length)u=null;else{for(i in u=1,"."!==c.delimiters.decimal&&(r=r.replace(/\./g,"").replace(c.delimiters.decimal,".")),b)if(l=RegExp("[^a-zA-Z]"+c.abbreviations[i]+"(?:\\)|(\\"+c.currency.symbol+")?(?:\\))?)?$"),s.match(l)){u*=Math.pow(10,b[i]);break}u*=((r.split("-").length+Math.min(r.split("(").length-1,r.split(")").length-1))%2?1:-1)*Number(r=r.replace(/[^0-9\.]+/g,""))}return u},isNaN:function(r){return"number"==typeof r&&isNaN(r)},includes:function(r,i){return -1!==r.indexOf(i)},insert:function(r,i,u){return r.slice(0,u)+i+r.slice(u)},reduce:function(r,i){if(this===null)throw TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof i)throw TypeError(i+" is not a function");var u,l=Object(r),c=l.length>>>0,s=0;if(3==arguments.length)u=arguments[2];else{for(;s<c&&!(s in l);)s++;if(s>=c)throw TypeError("Reduce of empty array with no initial value");u=l[s++]}for(;s<c;s++)s in l&&(u=i(u,l[s],s,l));return u},multiplier:function(r){var i=r.toString().split(".");return i.length<2?1:Math.pow(10,i[1].length)},correctionFactor:function(){var r=Array.prototype.slice.call(arguments);return r.reduce(function(r,i){var u=c.multiplier(i);return r>u?r:u},1)},toFixed:function(r,i,u,l){var c,s,m,b,y=r.toString().split("."),g=i-(l||0);return m=Math.pow(10,c=2===y.length?Math.min(Math.max(y[1].length,g),i):g),b=(u(r+"e+"+c)/m).toFixed(c),l>i-c&&(s=RegExp("\\.?0{1,"+(l-(i-c))+"}$"),b=b.replace(s,"")),b}},l.options=y,l.formats=s,l.locales=m,l.locale=function(r){return r&&(y.currentLocale=r.toLowerCase()),y.currentLocale},l.localeData=function(r){if(!r)return m[y.currentLocale];if(!m[r=r.toLowerCase()])throw Error("Unknown locale : "+r);return m[r]},l.reset=function(){for(var r in b)y[r]=b[r]},l.zeroFormat=function(r){y.zeroFormat="string"==typeof r?r:null},l.nullFormat=function(r){y.nullFormat="string"==typeof r?r:null},l.defaultFormat=function(r){y.defaultFormat="string"==typeof r?r:"0.0"},l.register=function(r,i,u){if(i=i.toLowerCase(),this[r+"s"][i])throw TypeError(i+" "+r+" already registered.");return this[r+"s"][i]=u,u},l.validate=function(r,i){var u,c,s,m,b,y,g,_;if("string"!=typeof r&&(r+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",r)),(r=r.trim()).match(/^\d+$/))return!0;if(""===r)return!1;try{g=l.localeData(i)}catch(r){g=l.localeData(l.locale())}return s=g.currency.symbol,b=g.abbreviations,u=g.delimiters.decimal,c="."===g.delimiters.thousands?"\\.":g.delimiters.thousands,(null===(_=r.match(/^[^\d]+/))||(r=r.substr(1),_[0]===s))&&(null===(_=r.match(/[^\d]+$/))||(r=r.slice(0,-1),_[0]===b.thousand||_[0]===b.million||_[0]===b.billion||_[0]===b.trillion))&&(y=RegExp(c+"{2}"),!r.match(/[^\d.,]/g)&&!((m=r.split(u)).length>2)&&(m.length<2?!!m[0].match(/^\d+.*\d$/)&&!m[0].match(y):1===m[0].length?!!m[0].match(/^\d+$/)&&!m[0].match(y)&&!!m[1].match(/^\d+$/):!!m[0].match(/^\d+.*\d$/)&&!m[0].match(y)&&!!m[1].match(/^\d+$/)))},l.fn=Numeral.prototype={clone:function(){return l(this)},format:function(r,i){var u,c,m,b=this._value,g=r||y.defaultFormat;if(i=i||Math.round,0===b&&null!==y.zeroFormat)c=y.zeroFormat;else if(null===b&&null!==y.nullFormat)c=y.nullFormat;else{for(u in s)if(g.match(s[u].regexps.format)){m=s[u].format;break}c=(m=m||l._.numberToFormat)(b,g,i)}return c},value:function(){return this._value},input:function(){return this._input},set:function(r){return this._value=Number(r),this},add:function(r){var i=c.correctionFactor.call(null,this._value,r);return this._value=c.reduce([this._value,r],function(r,u,l,c){return r+Math.round(i*u)},0)/i,this},subtract:function(r){var i=c.correctionFactor.call(null,this._value,r);return this._value=c.reduce([r],function(r,u,l,c){return r-Math.round(i*u)},Math.round(this._value*i))/i,this},multiply:function(r){return this._value=c.reduce([this._value,r],function(r,i,u,l){var s=c.correctionFactor(r,i);return Math.round(r*s)*Math.round(i*s)/Math.round(s*s)},1),this},divide:function(r){return this._value=c.reduce([this._value,r],function(r,i,u,l){var s=c.correctionFactor(r,i);return Math.round(r*s)/Math.round(i*s)}),this},difference:function(r){return Math.abs(l(this._value).subtract(r).value())}},l.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(r){var i=r%10;return 1==~~(r%100/10)?"th":1===i?"st":2===i?"nd":3===i?"rd":"th"},currency:{symbol:"$"}}),l.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(r,i,u){var c,s=l._.includes(i," BPS")?" ":"";return r*=1e4,i=i.replace(/\s?BPS/,""),c=l._.numberToFormat(r,i,u),l._.includes(c,")")?((c=c.split("")).splice(-1,0,s+"BPS"),c=c.join("")):c=c+s+"BPS",c},unformat:function(r){return+(1e-4*l._.stringToNumber(r)).toFixed(15)}}),i={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},u="("+(u=(r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}).suffixes.concat(i.suffixes.filter(function(i){return 0>r.suffixes.indexOf(i)})).join("|")).replace("B","B(?!PS)")+")",l.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(u)},format:function(u,c,s){var m,b,y,g=l._.includes(c,"ib")?i:r,_=l._.includes(c," b")||l._.includes(c," ib")?" ":"";for(m=0,c=c.replace(/\s?i?b/,"");m<=g.suffixes.length;m++)if(b=Math.pow(g.base,m),y=Math.pow(g.base,m+1),null===u||0===u||u>=b&&u<y){_+=g.suffixes[m],b>0&&(u/=b);break}return l._.numberToFormat(u,c,s)+_},unformat:function(u){var c,s,m=l._.stringToNumber(u);if(m){for(c=r.suffixes.length-1;c>=0;c--){if(l._.includes(u,r.suffixes[c])){s=Math.pow(r.base,c);break}if(l._.includes(u,i.suffixes[c])){s=Math.pow(i.base,c);break}}m*=s||1}return m}}),l.register("format","currency",{regexps:{format:/(\$)/},format:function(r,i,u){var c,s,m=l.locales[l.options.currentLocale],b={before:i.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:i.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(i=i.replace(/\s?\$\s?/,""),c=l._.numberToFormat(r,i,u),r>=0?(b.before=b.before.replace(/[\-\(]/,""),b.after=b.after.replace(/[\-\)]/,"")):!(r<0)||l._.includes(b.before,"-")||l._.includes(b.before,"(")||(b.before="-"+b.before),s=0;s<b.before.length;s++)switch(b.before[s]){case"$":c=l._.insert(c,m.currency.symbol,s);break;case" ":c=l._.insert(c," ",s+m.currency.symbol.length-1)}for(s=b.after.length-1;s>=0;s--)switch(b.after[s]){case"$":c=s===b.after.length-1?c+m.currency.symbol:l._.insert(c,m.currency.symbol,-(b.after.length-(1+s)));break;case" ":c=s===b.after.length-1?c+" ":l._.insert(c," ",-(b.after.length-(1+s)+m.currency.symbol.length-1))}return c}}),l.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(r,i,u){var c=("number"!=typeof r||l._.isNaN(r)?"0e+0":r.toExponential()).split("e");return i=i.replace(/e[\+|\-]{1}0/,""),l._.numberToFormat(Number(c[0]),i,u)+"e"+c[1]},unformat:function(r){var i=l._.includes(r,"e+")?r.split("e+"):r.split("e-"),u=Number(i[0]),c=Number(i[1]);return c=l._.includes(r,"e-")?c*=-1:c,l._.reduce([u,Math.pow(10,c)],function(r,i,u,c){var s=l._.correctionFactor(r,i);return r*s*(i*s)/(s*s)},1)}}),l.register("format","ordinal",{regexps:{format:/(o)/},format:function(r,i,u){var c=l.locales[l.options.currentLocale],s=l._.includes(i," o")?" ":"";return i=i.replace(/\s?o/,""),s+=c.ordinal(r),l._.numberToFormat(r,i,u)+s}}),l.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(r,i,u){var c,s=l._.includes(i," %")?" ":"";return l.options.scalePercentBy100&&(r*=100),i=i.replace(/\s?\%/,""),c=l._.numberToFormat(r,i,u),l._.includes(c,")")?((c=c.split("")).splice(-1,0,s+"%"),c=c.join("")):c=c+s+"%",c},unformat:function(r){var i=l._.stringToNumber(r);return l.options.scalePercentBy100?.01*i:i}}),l.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(r,i,u){var l=Math.floor(r/60/60),c=Math.floor((r-3600*l)/60),s=Math.round(r-3600*l-60*c);return l+":"+(c<10?"0"+c:c)+":"+(s<10?"0"+s:s)},unformat:function(r){var i=r.split(":"),u=0;return 3===i.length?u+=3600*Number(i[0])+60*Number(i[1])+Number(i[2]):2===i.length&&(u+=60*Number(i[0])+Number(i[1])),Number(u)}}),l})?l.call(i,u,i,r):l)&&(r.exports=c)},91530:function(r,i,u){/*! For license information please see index.js.LICENSE.txt */(()=>{var r={184:(r,i)=>{var u;!function(){"use strict";var l={}.hasOwnProperty;function o(){for(var r=[],i=0;i<arguments.length;i++){var u=arguments[i];if(u){var c=typeof u;if("string"===c||"number"===c)r.push(u);else if(Array.isArray(u)){if(u.length){var s=o.apply(null,u);s&&r.push(s)}}else if("object"===c){if(u.toString!==Object.prototype.toString&&!u.toString.toString().includes("[native code]")){r.push(u.toString());continue}for(var m in u)l.call(u,m)&&u[m]&&r.push(m)}}}return r.join(" ")}r.exports?(o.default=o,r.exports=o):void 0===(u=(function(){return o}).apply(i,[]))||(r.exports=u)}()},28:(r,i,u)=>{"use strict";u.d(i,{Z:()=>b});var l=u(81),c=u.n(l),s=u(645),m=u.n(s)()(c());m.push([r.id,".vi {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  box-sizing: border-box;\n  position: absolute;\n  color: transparent;\n  background: transparent;\n  caret-color: transparent;\n  outline: none;\n  border: 0 none transparent;\n}\n\n.vi::-ms-reveal,\n.vi::-ms-clear {\n  display: none;\n}\n\n.vi::selection {\n  background: transparent;\n}\n\n/* :where() gives the styles specificity 0, which makes them overridable */\n:where(.vi__container) {\n  position: relative;\n  display: flex;\n  gap: 8px;\n  height: 50px;\n  width: 300px;\n}\n\n:where(.vi__character) {\n  height: 100%;\n  flex-grow: 1;\n  flex-basis: 0;\n  text-align: center;\n  font-size: 36px;\n  line-height: 50px;\n  color: black;\n  background-color: white;\n  border: 1px solid black;\n  cursor: default;\n  user-select: none;\n  box-sizing: border-box;\n}\n\n:where(.vi__character--inactive) {\n  color: dimgray;\n  background-color: lightgray;\n}\n\n:where(.vi__character--selected) {\n  outline: 2px solid cornflowerblue;\n  color: cornflowerblue;\n}\n",""]);let b=m},645:r=>{"use strict";r.exports=function(r){var i=[];return i.toString=function(){return this.map(function(i){var u="",l=void 0!==i[5];return i[4]&&(u+="@supports (".concat(i[4],") {")),i[2]&&(u+="@media ".concat(i[2]," {")),l&&(u+="@layer".concat(i[5].length>0?" ".concat(i[5]):""," {")),u+=r(i),l&&(u+="}"),i[2]&&(u+="}"),i[4]&&(u+="}"),u}).join("")},i.i=function(r,u,l,c,s){"string"==typeof r&&(r=[[null,r,void 0]]);var m={};if(l)for(var b=0;b<this.length;b++){var y=this[b][0];null!=y&&(m[y]=!0)}for(var g=0;g<r.length;g++){var _=[].concat(r[g]);l&&m[_[0]]||(void 0!==s&&(void 0===_[5]||(_[1]="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {").concat(_[1],"}")),_[5]=s),u&&(_[2]&&(_[1]="@media ".concat(_[2]," {").concat(_[1],"}")),_[2]=u),c&&(_[4]?(_[1]="@supports (".concat(_[4],") {").concat(_[1],"}"),_[4]=c):_[4]="".concat(c)),i.push(_))}},i}},81:r=>{"use strict";r.exports=function(r){return r[1]}},703:(r,i,u)=>{"use strict";var l=u(414);function o(){}function a(){}a.resetWarningCache=o,r.exports=function(){function e(r,i,u,c,s,m){if(m!==l){var b=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw b.name="Invariant Violation",b}}function n(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},697:(r,i,u)=>{r.exports=u(703)()},414:r=>{"use strict";r.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},l={};function t(i){var u=l[i];if(void 0!==u)return u.exports;var c=l[i]={id:i,exports:{}};return r[i](c,c.exports,t),c.exports}t.n=r=>{var i=r&&r.__esModule?()=>r.default:()=>r;return t.d(i,{a:i}),i},t.d=(r,i)=>{for(var u in i)t.o(i,u)&&!t.o(r,u)&&Object.defineProperty(r,u,{enumerable:!0,get:i[u]})},t.o=(r,i)=>Object.prototype.hasOwnProperty.call(r,i),t.r=r=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})};var c={};for(var s in(()=>{"use strict";t.r(c),t.d(c,{default:()=>w});let r=u(64103);var i=t.n(r),l=t(184),s=t.n(l),m=t(697),b=t.n(m),y=t(28),g=["className","type"],_=["className"];function p(){return(p=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(r[l]=u[l])}return r}).apply(this,arguments)}function f(r,i){if(null==r)return{};var u,l,c=function(r,i){if(null==r)return{};var u,l,c={},s=Object.keys(r);for(l=0;l<s.length;l++)u=s[l],i.indexOf(u)>=0||(c[u]=r[u]);return c}(r,i);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(l=0;l<s.length;l++)u=s[l],i.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function h(r,i){return function(r){if(Array.isArray(r))return r}(r)||function(r,i){var u=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=u){var l,c,s,m,b=[],y=!0,g=!1;try{if(s=(u=u.call(r)).next,0===i){if(Object(u)!==u)return;y=!1}else for(;!(y=(l=s.call(u)).done)&&(b.push(l.value),b.length!==i);y=!0);}catch(r){g=!0,c=r}finally{try{if(!y&&null!=u.return&&(m=u.return(),Object(m)!==m))return}finally{if(g)throw c}}return b}}(r,i)||d(r,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(r,i){if(r){if("string"==typeof r)return v(r,i);var u=Object.prototype.toString.call(r).slice(8,-1);return"Object"===u&&r.constructor&&(u=r.constructor.name),"Map"===u||"Set"===u?Array.from(r):"Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?v(r,i):void 0}}function v(r,i){(null==i||i>r.length)&&(i=r.length);for(var u=0,l=Array(i);u<i;u++)l[u]=r[u];return l}var x=(0,r.forwardRef)(function(u,l){var c=u.value,m=u.length,b=u.validChars,x=u.placeholder,w=u.autoFocus,O=u.passwordMode,S=u.inputProps,P=u.containerProps,j=u.classNames,T=u.onChange,N=u.onFocus,C=u.onBlur,E=u.onComplete,k=h((0,r.useState)(""),2),A=k[0],Z=k[1],B=h((0,r.useState)(!1),2),I=B[0],L=B[1],$=(0,r.useRef)(null);(0,r.useEffect)(function(){w&&$.current.focus()},[w]);var U,F=function(){$.current.focus()},R=function(){return null!=c?c:A},M=function(r){var i=R();return(i.length===r||i.length===r+1&&m===r+1)&&I},D=function(r){return R().length<r},z=function(r){return R().length>r},W=S.className,K=S.type,H=f(S,g),V=P.className,Y=f(P,_);return i().createElement(i().Fragment,null,i().createElement("div",p({"data-testid":"container",className:s()("vi__container",j.container,V),onClick:function(){return $.current.focus()}},Y),i().createElement("input",p({"aria-label":"verification input",spellCheck:!1,value:R(),onChange:function(r){var i=r.target.value.replace(/\s/g,"");RegExp("^[".concat(b,"]{0,").concat(m,"}$")).test(i)&&(T&&(null==T||T(i)),Z(i),i.length===m&&(null==E||E(i)))},ref:function(r){$.current=r,"function"==typeof l?l(r):l&&(l.current=r)},className:s()("vi",W),onKeyDown:function(r){["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r.key)&&r.preventDefault()},onFocus:function(){L(!0),null==N||N()},onBlur:function(){L(!1),null==C||C()},onSelect:function(r){var i=r.target.value;r.target.setSelectionRange(i.length,i.length)},type:O?"password":K},H)),((function(r){if(Array.isArray(r))return v(r)})(U=Array(m))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(U)||d(U)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map(function(r,u){return i().createElement("div",{className:s()("vi__character",j.character,{"vi__character--selected":M(u),"vi__character--inactive":D(u),"vi__character--filled":z(u)},M(u)&&j.characterSelected,D(u)&&j.characterInactive,z(u)&&j.characterFilled),onClick:F,id:"field-".concat(u),"data-testid":"character-".concat(u),key:u},O&&R()[u]?"*":R()[u]||x)})),i().createElement("style",{dangerouslySetInnerHTML:{__html:y.Z}}))});x.displayName="VerificationInput",x.propTypes={value:b().string,length:b().number,validChars:b().string,placeholder:b().string,autoFocus:b().bool,passwordMode:b().bool,inputProps:b().object,containerProps:b().object,classNames:b().shape({container:b().string,character:b().string,characterInactive:b().string,characterSelected:b().string,characterFilled:b().string}),onChange:b().func,onFocus:b().func,onBlur:b().func,onComplete:b().func},x.defaultProps={length:6,validChars:"A-Za-z0-9",placeholder:"\xb7",autoFocus:!1,inputProps:{},containerProps:{},classNames:{}};let w=x})(),c)i[s]=c[s];c.__esModule&&Object.defineProperty(i,"__esModule",{value:!0})})()},57966:function(r){r.exports=function(){var r=document.getSelection();if(!r.rangeCount)return function(){};for(var i=document.activeElement,u=[],l=0;l<r.rangeCount;l++)u.push(r.getRangeAt(l));switch(i.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":i.blur();break;default:i=null}return r.removeAllRanges(),function(){"Caret"===r.type&&r.removeAllRanges(),r.rangeCount||u.forEach(function(i){r.addRange(i)}),i&&i.focus()}}},81165:function(r,i,u){"use strict";function _arrayLikeToArray(r,i){(null==i||i>r.length)&&(i=r.length);for(var u=0,l=Array(i);u<i;u++)l[u]=r[u];return l}u.d(i,{Z:function(){return _arrayLikeToArray}})},17387:function(r,i,u){"use strict";function _assertThisInitialized(r){if(void 0===r)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return r}u.d(i,{Z:function(){return _assertThisInitialized}})},12706:function(r,i,u){"use strict";function _classCallCheck(r,i){if(!(r instanceof i))throw TypeError("Cannot call a class as a function")}u.d(i,{Z:function(){return _classCallCheck}})},22712:function(r,i,u){"use strict";u.d(i,{Z:function(){return _createClass}});var l=u(30251);function _defineProperties(r,i){for(var u=0;u<i.length;u++){var c=i[u];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(r,(0,l.Z)(c.key),c)}}function _createClass(r,i,u){return i&&_defineProperties(r.prototype,i),u&&_defineProperties(r,u),Object.defineProperty(r,"prototype",{writable:!1}),r}},22369:function(r,i,u){"use strict";u.d(i,{Z:function(){return _defineProperty}});var l=u(30251);function _defineProperty(r,i,u){return(i=(0,l.Z)(i))in r?Object.defineProperty(r,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[i]=u,r}},32336:function(r,i,u){"use strict";function _getPrototypeOf(r){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}u.d(i,{Z:function(){return _getPrototypeOf}})},83335:function(r,i,u){"use strict";u.d(i,{Z:function(){return _inherits}});var l=u(45554);function _inherits(r,i){if("function"!=typeof i&&null!==i)throw TypeError("Super expression must either be null or a function");r.prototype=Object.create(i&&i.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),i&&(0,l.Z)(r,i)}},23135:function(r,i,u){"use strict";u.d(i,{Z:function(){return _objectWithoutProperties}});var l=u(58874);function _objectWithoutProperties(r,i){if(null==r)return{};var u,c,s=(0,l.Z)(r,i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(r);for(c=0;c<m.length;c++)u=m[c],!(i.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(s[u]=r[u])}return s}},58874:function(r,i,u){"use strict";function _objectWithoutPropertiesLoose(r,i){if(null==r)return{};var u,l,c={},s=Object.keys(r);for(l=0;l<s.length;l++)u=s[l],i.indexOf(u)>=0||(c[u]=r[u]);return c}u.d(i,{Z:function(){return _objectWithoutPropertiesLoose}})},99900:function(r,i,u){"use strict";u.d(i,{Z:function(){return _possibleConstructorReturn}});var l=u(16492),c=u(17387);function _possibleConstructorReturn(r,i){if(i&&("object"===(0,l.Z)(i)||"function"==typeof i))return i;if(void 0!==i)throw TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(r)}},45554:function(r,i,u){"use strict";function _setPrototypeOf(r,i){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r})(r,i)}u.d(i,{Z:function(){return _setPrototypeOf}})},43889:function(r,i,u){"use strict";u.d(i,{Z:function(){return _slicedToArray}});var l=u(88377);function _slicedToArray(r,i){return function(r){if(Array.isArray(r))return r}(r)||function(r,i){var u=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=u){var l,c,s,m,b=[],y=!0,g=!1;try{if(s=(u=u.call(r)).next,0===i){if(Object(u)!==u)return;y=!1}else for(;!(y=(l=s.call(u)).done)&&(b.push(l.value),b.length!==i);y=!0);}catch(r){g=!0,c=r}finally{try{if(!y&&null!=u.return&&(m=u.return(),Object(m)!==m))return}finally{if(g)throw c}}return b}}(r,i)||(0,l.Z)(r,i)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},15754:function(r,i,u){"use strict";u.d(i,{Z:function(){return _toConsumableArray}});var l=u(81165),c=u(88377);function _toConsumableArray(r){return function(r){if(Array.isArray(r))return(0,l.Z)(r)}(r)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(r)||(0,c.Z)(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},30251:function(r,i,u){"use strict";u.d(i,{Z:function(){return _toPropertyKey}});var l=u(16492);function _toPropertyKey(r){var i=function(r,i){if("object"!==(0,l.Z)(r)||null===r)return r;var u=r[Symbol.toPrimitive];if(void 0!==u){var c=u.call(r,i||"default");if("object"!==(0,l.Z)(c))return c;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(r)}(r,"string");return"symbol"===(0,l.Z)(i)?i:String(i)}},16492:function(r,i,u){"use strict";function _typeof(r){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}u.d(i,{Z:function(){return _typeof}})},88377:function(r,i,u){"use strict";u.d(i,{Z:function(){return _unsupportedIterableToArray}});var l=u(81165);function _unsupportedIterableToArray(r,i){if(r){if("string"==typeof r)return(0,l.Z)(r,i);var u=Object.prototype.toString.call(r).slice(8,-1);if("Object"===u&&r.constructor&&(u=r.constructor.name),"Map"===u||"Set"===u)return Array.from(r);if("Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return(0,l.Z)(r,i)}}}}]);