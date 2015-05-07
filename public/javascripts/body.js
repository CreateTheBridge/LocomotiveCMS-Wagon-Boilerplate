/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
;
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.0
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */

function FastClick(layer) {
  'use strict';
  var oldOnClick;


  /**
   * Whether a click is currently being tracked.
   *
   * @type boolean
   */
  this.trackingClick = false;


  /**
   * Timestamp for when when click tracking started.
   *
   * @type number
   */
  this.trackingClickStart = 0;


  /**
   * The element being tracked for a click.
   *
   * @type EventTarget
   */
  this.targetElement = null;


  /**
   * X-coordinate of touch start event.
   *
   * @type number
   */
  this.touchStartX = 0;


  /**
   * Y-coordinate of touch start event.
   *
   * @type number
   */
  this.touchStartY = 0;


  /**
   * ID of the last touch, retrieved from Touch.identifier.
   *
   * @type number
   */
  this.lastTouchIdentifier = 0;


  /**
   * Touchmove boundary, beyond which a click will be cancelled.
   *
   * @type number
   */
  this.touchBoundary = 10;


  /**
   * The FastClick layer.
   *
   * @type Element
   */
  this.layer = layer;

  if (FastClick.notNeeded(layer)) {
    return;
  }

  // Some old versions of Android don't have Function.prototype.bind
  function bind(method, context) {
    return function() { return method.apply(context, arguments); };
  }

  // Set up event handlers as required
  if (deviceIsAndroid) {
    layer.addEventListener('mouseover', bind(this.onMouse, this), true);
    layer.addEventListener('mousedown', bind(this.onMouse, this), true);
    layer.addEventListener('mouseup', bind(this.onMouse, this), true);
  }

  layer.addEventListener('click', bind(this.onClick, this), true);
  layer.addEventListener('touchstart', bind(this.onTouchStart, this), false);
  layer.addEventListener('touchmove', bind(this.onTouchMove, this), false);
  layer.addEventListener('touchend', bind(this.onTouchEnd, this), false);
  layer.addEventListener('touchcancel', bind(this.onTouchCancel, this), false);

  // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
  // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
  // layer when they are cancelled.
  if (!Event.prototype.stopImmediatePropagation) {
    layer.removeEventListener = function(type, callback, capture) {
      var rmv = Node.prototype.removeEventListener;
      if (type === 'click') {
        rmv.call(layer, type, callback.hijacked || callback, capture);
      } else {
        rmv.call(layer, type, callback, capture);
      }
    };

    layer.addEventListener = function(type, callback, capture) {
      var adv = Node.prototype.addEventListener;
      if (type === 'click') {
        adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
          if (!event.propagationStopped) {
            callback(event);
          }
        }), capture);
      } else {
        adv.call(layer, type, callback, capture);
      }
    };
  }

  // If a handler is already declared in the element's onclick attribute, it will be fired before
  // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
  // adding it as listener.
  if (typeof layer.onclick === 'function') {

    // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
    // - the old one won't work if passed to addEventListener directly.
    oldOnClick = layer.onclick;
    layer.addEventListener('click', function(event) {
      oldOnClick(event);
    }, false);
    layer.onclick = null;
  }
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
  'use strict';
  switch (target.nodeName.toLowerCase()) {

  // Don't send a synthetic click to disabled inputs (issue #62)
  case 'button':
  case 'select':
  case 'textarea':
    if (target.disabled) {
      return true;
    }

    break;
  case 'input':

    // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
    if ((deviceIsIOS && target.type === 'file') || target.disabled) {
      return true;
    }

    break;
  case 'label':
  case 'video':
    return true;
  }

  return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
  'use strict';
  switch (target.nodeName.toLowerCase()) {
  case 'textarea':
    return true;
  case 'select':
    return !deviceIsAndroid;
  case 'input':
    switch (target.type) {
    case 'button':
    case 'checkbox':
    case 'file':
    case 'image':
    case 'radio':
    case 'submit':
      return false;
    }

    // No point in attempting to focus disabled inputs
    return !target.disabled && !target.readOnly;
  default:
    return (/\bneedsfocus\b/).test(target.className);
  }
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
  'use strict';
  var clickEvent, touch;

  // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
  if (document.activeElement && document.activeElement !== targetElement) {
    document.activeElement.blur();
  }

  touch = event.changedTouches[0];

  // Synthesise a click event, with an extra attribute so it can be tracked
  clickEvent = document.createEvent('MouseEvents');
  clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
  clickEvent.forwardedTouchEvent = true;
  targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
  'use strict';

  //Issue #159: Android Chrome Select Box does not open with a synthetic click event
  if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
    return 'mousedown';
  }

  return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
  'use strict';
  var length;

  // Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
    length = targetElement.value.length;
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
  'use strict';
  var scrollParent, parentElement;

  scrollParent = targetElement.fastClickScrollParent;

  // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
  // target element was moved to another parent.
  if (!scrollParent || !scrollParent.contains(targetElement)) {
    parentElement = targetElement;
    do {
      if (parentElement.scrollHeight > parentElement.offsetHeight) {
        scrollParent = parentElement;
        targetElement.fastClickScrollParent = parentElement;
        break;
      }

      parentElement = parentElement.parentElement;
    } while (parentElement);
  }

  // Always update the scroll top tracker if possible.
  if (scrollParent) {
    scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
  }
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
  'use strict';

  // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
  if (eventTarget.nodeType === Node.TEXT_NODE) {
    return eventTarget.parentNode;
  }

  return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
  'use strict';
  var targetElement, touch, selection;

  // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
  if (event.targetTouches.length > 1) {
    return true;
  }

  targetElement = this.getTargetElementFromEventTarget(event.target);
  touch = event.targetTouches[0];

  if (deviceIsIOS) {

    // Only trusted events will deselect text on iOS (issue #49)
    selection = window.getSelection();
    if (selection.rangeCount && !selection.isCollapsed) {
      return true;
    }

    if (!deviceIsIOS4) {

      // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
      // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
      // with the same identifier as the touch event that previously triggered the click that triggered the alert.
      // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
      // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
      if (touch.identifier === this.lastTouchIdentifier) {
        event.preventDefault();
        return false;
      }

      this.lastTouchIdentifier = touch.identifier;

      // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
      // 1) the user does a fling scroll on the scrollable layer
      // 2) the user stops the fling scroll with another tap
      // then the event.target of the last 'touchend' event will be the element that was under the user's finger
      // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
      // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
      this.updateScrollParent(targetElement);
    }
  }

  this.trackingClick = true;
  this.trackingClickStart = event.timeStamp;
  this.targetElement = targetElement;

  this.touchStartX = touch.pageX;
  this.touchStartY = touch.pageY;

  // Prevent phantom clicks on fast double-tap (issue #36)
  if ((event.timeStamp - this.lastClickTime) < 200) {
    event.preventDefault();
  }

  return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
  'use strict';
  var touch = event.changedTouches[0], boundary = this.touchBoundary;

  if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
    return true;
  }

  return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
  'use strict';
  if (!this.trackingClick) {
    return true;
  }

  // If the touch has moved, cancel the click tracking
  if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
    this.trackingClick = false;
    this.targetElement = null;
  }

  return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
  'use strict';

  // Fast path for newer browsers supporting the HTML5 control attribute
  if (labelElement.control !== undefined) {
    return labelElement.control;
  }

  // All browsers under test that support touch events also support the HTML5 htmlFor attribute
  if (labelElement.htmlFor) {
    return document.getElementById(labelElement.htmlFor);
  }

  // If no for attribute exists, attempt to retrieve the first labellable descendant element
  // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
  return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
  'use strict';
  var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

  if (!this.trackingClick) {
    return true;
  }

  // Prevent phantom clicks on fast double-tap (issue #36)
  if ((event.timeStamp - this.lastClickTime) < 200) {
    this.cancelNextClick = true;
    return true;
  }

  // Reset to prevent wrong click cancel on input (issue #156).
  this.cancelNextClick = false;

  this.lastClickTime = event.timeStamp;

  trackingClickStart = this.trackingClickStart;
  this.trackingClick = false;
  this.trackingClickStart = 0;

  // On some iOS devices, the targetElement supplied with the event is invalid if the layer
  // is performing a transition or scroll, and has to be re-detected manually. Note that
  // for this to function correctly, it must be called *after* the event target is checked!
  // See issue #57; also filed as rdar://13048589 .
  if (deviceIsIOSWithBadTarget) {
    touch = event.changedTouches[0];

    // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
    targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
    targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
  }

  targetTagName = targetElement.tagName.toLowerCase();
  if (targetTagName === 'label') {
    forElement = this.findControl(targetElement);
    if (forElement) {
      this.focus(targetElement);
      if (deviceIsAndroid) {
        return false;
      }

      targetElement = forElement;
    }
  } else if (this.needsFocus(targetElement)) {

    // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
    // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
    if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
      this.targetElement = null;
      return false;
    }

    this.focus(targetElement);
    this.sendClick(targetElement, event);

    // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
    if (!deviceIsIOS4 || targetTagName !== 'select') {
      this.targetElement = null;
      event.preventDefault();
    }

    return false;
  }

  if (deviceIsIOS && !deviceIsIOS4) {

    // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
    // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
    scrollParent = targetElement.fastClickScrollParent;
    if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
      return true;
    }
  }

  // Prevent the actual click from going though - unless the target node is marked as requiring
  // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
  if (!this.needsClick(targetElement)) {
    event.preventDefault();
    this.sendClick(targetElement, event);
  }

  return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
  'use strict';
  this.trackingClick = false;
  this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
  'use strict';

  // If a target element was never set (because a touch event was never fired) allow the event
  if (!this.targetElement) {
    return true;
  }

  if (event.forwardedTouchEvent) {
    return true;
  }

  // Programmatically generated events targeting a specific element should be permitted
  if (!event.cancelable) {
    return true;
  }

  // Derive and check the target element to see whether the mouse event needs to be permitted;
  // unless explicitly enabled, prevent non-touch click events from triggering actions,
  // to prevent ghost/doubleclicks.
  if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

    // Prevent any user-added listeners declared on FastClick element from being fired.
    if (event.stopImmediatePropagation) {
      event.stopImmediatePropagation();
    } else {

      // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
      event.propagationStopped = true;
    }

    // Cancel the event
    event.stopPropagation();
    event.preventDefault();

    return false;
  }

  // If the mouse event is permitted, return true for the action to go through.
  return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
  'use strict';
  var permitted;

  // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
  if (this.trackingClick) {
    this.targetElement = null;
    this.trackingClick = false;
    return true;
  }

  // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
  if (event.target.type === 'submit' && event.detail === 0) {
    return true;
  }

  permitted = this.onMouse(event);

  // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
  if (!permitted) {
    this.targetElement = null;
  }

  // If clicks are permitted, return true for the action to go through.
  return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
  'use strict';
  var layer = this.layer;

  if (deviceIsAndroid) {
    layer.removeEventListener('mouseover', this.onMouse, true);
    layer.removeEventListener('mousedown', this.onMouse, true);
    layer.removeEventListener('mouseup', this.onMouse, true);
  }

  layer.removeEventListener('click', this.onClick, true);
  layer.removeEventListener('touchstart', this.onTouchStart, false);
  layer.removeEventListener('touchmove', this.onTouchMove, false);
  layer.removeEventListener('touchend', this.onTouchEnd, false);
  layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
  'use strict';
  var metaViewport;
  var chromeVersion;

  // Devices that don't support touch don't need FastClick
  if (typeof window.ontouchstart === 'undefined') {
    return true;
  }

  // Chrome version - zero for other browsers
  chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

  if (chromeVersion) {

    if (deviceIsAndroid) {
      metaViewport = document.querySelector('meta[name=viewport]');

      if (metaViewport) {
        // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
        if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
          return true;
        }
        // Chrome 32 and above with width=device-width or less don't need FastClick
        if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
          return true;
        }
      }

    // Chrome desktop doesn't need FastClick (issue #15)
    } else {
      return true;
    }
  }

  // IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
  if (layer.style.msTouchAction === 'none') {
    return true;
  }

  return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
  'use strict';
  return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

  // AMD. Register as an anonymous module.
  define(function() {
    'use strict';
    return FastClick;
  });
} else if (typeof module !== 'undefined' && module.exports) {
  module.exports = FastClick.attach;
  module.exports.FastClick = FastClick;
} else {
  window.FastClick = FastClick;
}
;
/* =============================================================

  Smooth Scroll v4.4
  Animate scrolling to anchor links, by Chris Ferdinandi.
  http://gomakethings.com

  Additional contributors:
  https://github.com/cferdinandi/smooth-scroll#contributors

  Free to use under the MIT License.
  http://gomakethings.com/mit/

  p.s. This is a custom build for Fixed Nav, ask @adtileHQ for
  any changes made into this build

 * ============================================================= */


window.smoothScroll = (function (window, document, undefined) {

  'use strict';

  // Default settings
  // Private {object} variable
  var _defaults = {
    speed: 500,
    easing: 'easeInOutCubic',
    updateURL: false,
    callbackBefore: function () {},
    callbackAfter: function () {}
  };

  // Merge default settings with user options
  // Private method
  // Returns an {object}
  var _mergeObjects = function ( original, updates ) {
    for (var key in updates) {
      original[key] = updates[key];
    }
    return original;
  };

  // Calculate the easing pattern
  // Private method
  // Returns a decimal number
  var _easingPattern = function ( type, time ) {
    if ( type == 'easeInQuad' ) return time * time; // accelerating from zero velocity
    if ( type == 'easeOutQuad' ) return time * (2 - time); // decelerating to zero velocity
    if ( type == 'easeInOutQuad' ) return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
    if ( type == 'easeInCubic' ) return time * time * time; // accelerating from zero velocity
    if ( type == 'easeOutCubic' ) return (--time) * time * time + 1; // decelerating to zero velocity
    if ( type == 'easeInOutCubic' ) return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
    if ( type == 'easeInQuart' ) return time * time * time * time; // accelerating from zero velocity
    if ( type == 'easeOutQuart' ) return 1 - (--time) * time * time * time; // decelerating to zero velocity
    if ( type == 'easeInOutQuart' ) return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
    if ( type == 'easeInQuint' ) return time * time * time * time * time; // accelerating from zero velocity
    if ( type == 'easeOutQuint' ) return 1 + (--time) * time * time * time * time; // decelerating to zero velocity
    if ( type == 'easeInOutQuint' ) return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
    return time; // no easing, no acceleration
  };

  // Calculate how far to scroll
  // Private method
  // Returns an integer
  var _getEndLocation = function ( anchor, headerHeight ) {
    var location = 0;
    if (anchor.offsetParent) {
      do {
        location += anchor.offsetTop;
        anchor = anchor.offsetParent;
      } while (anchor);
    }
    location = location - headerHeight;
    if ( location >= 0 ) {
      return location;
    } else {
      return 0;
    }
  };

  // Convert data-options attribute into an object of key/value pairs
  // Private method
  // Returns an {object}
  var _getDataOptions = function ( options ) {

    if ( options === null || options === undefined  ) {
      return {};
    } else {
      var settings = {}; // Create settings object
      options = options.split(';'); // Split into array of options

      // Create a key/value pair for each setting
      options.forEach( function(option) {
        option = option.trim();
        if ( option !== '' ) {
          option = option.split(':');
          settings[option[0]] = option[1].trim();
        }
      });

      return settings;
    }

  };

  // Update the URL
  // Private method
  // Runs functions
  var _updateURL = function ( anchor, url ) {
    if ( (url === true || url === 'true') && history.pushState ) {
      history.pushState( {pos:anchor.id}, '', anchor );
    }
  };

  // Start/stop the scrolling animation
  // Public method
  // Runs functions
  var animateScroll = function ( toggle, anchor, options, event ) {

    // Options and overrides
    options = _mergeObjects( _defaults, options || {} ); // Merge user options with defaults
    var overrides = _getDataOptions( toggle ? toggle.getAttribute('data-options') : null );
    var speed = overrides.speed || options.speed;
    var easing = overrides.easing || options.easing;
    var updateURL = overrides.updateURL || options.updateURL;

    // Selectors and variables
    var headerHeight = 55;
    var startLocation = window.pageYOffset; // Current location on the page
    var endLocation = _getEndLocation( document.querySelector(anchor), headerHeight ); // Scroll to location
    var animationInterval; // interval timer
    var distance = endLocation - startLocation; // distance to travel
    var timeLapsed = 0;
    var percentage, position;

    // Prevent default click event
    if ( toggle && toggle.tagName === 'A' && event ) {
      event.preventDefault();
    }

    // Update URL
    _updateURL(anchor, updateURL);

    // Stop the scroll animation when it reaches its target (or the bottom/top of page)
    // Private method
    // Runs functions
    var _stopAnimateScroll = function (position, endLocation, animationInterval) {
      var currentLocation = window.pageYOffset;
      if ( position == endLocation || currentLocation == endLocation || ( (window.innerHeight + currentLocation) >= document.body.scrollHeight ) ) {
        clearInterval(animationInterval);
        options.callbackAfter( toggle, anchor ); // Run callbacks after animation complete
      }
    };

    // Loop scrolling animation
    // Private method
    // Runs functions
    var _loopAnimateScroll = function () {
      timeLapsed += 16;
      percentage = ( timeLapsed / speed );
      percentage = ( percentage > 1 ) ? 1 : percentage;
      position = startLocation + ( distance * _easingPattern(easing, percentage) );
      window.scrollTo( 0, Math.floor(position) );
      _stopAnimateScroll(position, endLocation, animationInterval);
    };

    // Set interval timer
    // Private method
    // Runs functions
    var _startAnimateScroll = function () {
      options.callbackBefore( toggle, anchor ); // Run callbacks before animating scroll
      animationInterval = setInterval(_loopAnimateScroll, 16);
    };

    // Reset position to fix weird iOS bug
    // https://github.com/cferdinandi/smooth-scroll/issues/45
    if ( window.pageYOffset === 0 ) {
      window.scrollTo( 0, 0 );
    }

    // Start scrolling animation
    _startAnimateScroll();

  };

  // Initialize Smooth Scroll
  // Public method
  // Runs functions
  var init = function ( options ) {

    // Feature test before initializing
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

      // Selectors and variables
      options = _mergeObjects( _defaults, options || {} ); // Merge user options with defaults
      var toggles = document.querySelectorAll('[data-scroll]'); // Get smooth scroll toggles

      // When a toggle is clicked, run the click handler
      Array.prototype.forEach.call(toggles, function (toggle, index) {
        toggle.addEventListener('click', animateScroll.bind( null, toggle, toggle.getAttribute('href'), options ), false);
      });

    }

  };

  // Return public methods
  return {
    init: init,
    animateScroll: animateScroll
  };

})(window, document);
/* =============================================
 *
 *   FIXED RESPONSIVE NAV
 *
 *   (c) 2014 @adtileHQ
 *   http://www.adtile.me
 *   http://twitter.com/adtilehq
 *
 *   Free to use under the MIT License.
 *
 * ============================================= */


(function () {

  "use strict";

  // Feature test to rule out some older browsers
  if ("querySelector" in document && "addEventListener" in window) {

    // forEach method, that passes back the stuff we need
    var forEach = function (array, callback, scope) {
      for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
      }
    };

    // Attach FastClick to remove the 300ms tap delay
    FastClick.attach(document.body);

    // Init smooth scrolling
    smoothScroll.init();

    // Init Responsive Nav
    var navigation = responsiveNav(".nav-collapse", {

      // Close the navigation when it's tapped
      closeOnNavClick: true
    });

    // Create a Mask
    var mask = document.createElement("div");
    mask.className = "mask";

    // Append the mask inside <body>
    document.body.appendChild(mask);

    // Disable mask transitions on Android to boost performance
    if (navigator.userAgent.match(/Android/i) !== null) {
      document.documentElement.className += " android";
    }

    // Find navigation links and save a reference to them
    var nav = document.querySelector(".nav-collapse ul"),
      links = nav.querySelectorAll("a");

    // "content" will store all the location cordinates
    var content;

    // Set up an array of locations which we store in "content"
    var setupLocations = function () {
      content = [];
      forEach(links, function (i, el) {
        var href = links[i].getAttribute("href").replace("#", "");
        content.push(document.getElementById(href).offsetTop + 200);
      });
    };

    // call locations set up once
    setupLocations();

    // Re-calculate locations on window resize and orientation change
    window.addEventListener("resize", function () {
      setupLocations();
    }, false);

    // Highlight active link on the navigation
    var selectActiveMenuItem = function (i) {
      forEach(links, function (i, el) {
        links[i].parentNode.className = links[i].parentNode.className.replace(/[\s]{0,}active/, "");
      });
      links[i].parentNode.className += links[i].parentNode.className ? " active" : "active";
    };

    // Highlight active link when scrolling
    var wasNavigationTapped = false;
    window.addEventListener("scroll", function () {

      // Determine viewport and body size
      var top = window.pageYOffset,
        body = document.body,
        html = document.documentElement,
        viewport = window.innerHeight,
        bodyheight = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.scrollHeight,
          html.offsetHeight
        );

      // For each content link, when it's in viewport, highlight it
      if (!wasNavigationTapped) {
        forEach(content, function (i, loc) {
          if ((loc > top && (loc < top + 300 || (top + viewport) >= bodyheight))) {
            selectActiveMenuItem(i);
          }
        });
      }
    }, false);

    // Close navigation when tapping the mask under it
    mask.addEventListener("click", function (e) {
      e.preventDefault();
      navigation.close();
    }, false);

    // Clear wasNavigationTapped check after scrolling
    var clearTapCheck = function () {
      setTimeout(function () {
        wasNavigationTapped = false;
      }, 500);
    };

    // Select the right navigation item when tapping the logo
    document.querySelector(".logo").addEventListener("click", function (e) {
      e.preventDefault();
      wasNavigationTapped = true;

      // Select first navigation item
      selectActiveMenuItem(0);

      // Close navigation
      navigation.close();

      // Remove hash from the URL if pushState is supported
      if (history.pushState) {
        history.pushState("", document.title, window.location.pathname);
      }

      // Clear wasNavigationTapped check
      clearTapCheck();
    }, false);

    // When a navigation item is tapped, select it and begin scrolling
    forEach(links, function (i, el) {
      links[i].addEventListener("click", function (e) {
        e.preventDefault();
        wasNavigationTapped = true;

        // Select right navigation item (we are passing which one to select "i")
        selectActiveMenuItem(i);

        // Show the URL of the section on the address bar
        var thisID = this.getAttribute("href").replace("#", ""),
          pane = document.getElementById(thisID);

        // If the URL isn't "#home", change it
        if (thisID !== "home") {
          pane.removeAttribute("id");
          location.hash = "#" + thisID;
          pane.setAttribute("id", thisID);

        // If the URL is "#home", remove hash from the URL
        } else {
          if (history.pushState) {
            history.pushState("", document.title, window.location.pathname);
          }
        }

        // Clear wasNavigationTapped check
        clearTapCheck();
      }, false);
    });

  }

})();
(function() {


}).call(this);
"use strict";
(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define('GMaps', [], factory);
    }

    root.GMaps = factory();

}(this, function() {

    /*!
     * GMaps.js v0.4.17
     * http://hpneo.github.com/gmaps/
     *
     * Copyright 2015, Gustavo Leon
     * Released under the MIT License.
     */

    if (!(typeof window.google === 'object' && window.google.maps)) {
        throw 'Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.'
    }

    var extend_object = function(obj, new_obj) {
        var name;

        if (obj === new_obj) {
            return obj;
        }

        for (name in new_obj) {
            obj[name] = new_obj[name];
        }

        return obj;
    };

    var replace_object = function(obj, replace) {
        var name;

        if (obj === replace) {
            return obj;
        }

        for (name in replace) {
            if (obj[name] != undefined) {
                obj[name] = replace[name];
            }
        }

        return obj;
    };

    var array_map = function(array, callback) {
        var original_callback_params = Array.prototype.slice.call(arguments, 2),
            array_return = [],
            array_length = array.length,
            i;

        if (Array.prototype.map && array.map === Array.prototype.map) {
            array_return = Array.prototype.map.call(array, function(item) {
                callback_params = original_callback_params;
                callback_params.splice(0, 0, item);

                return callback.apply(this, callback_params);
            });
        }
        else {
            for (i = 0; i < array_length; i++) {
                callback_params = original_callback_params;
                callback_params.splice(0, 0, array[i]);
                array_return.push(callback.apply(this, callback_params));
            }
        }

        return array_return;
    };

    var array_flat = function(array) {
        var new_array = [],
            i;

        for (i = 0; i < array.length; i++) {
            new_array = new_array.concat(array[i]);
        }

        return new_array;
    };

    var coordsToLatLngs = function(coords, useGeoJSON) {
        var first_coord = coords[0],
            second_coord = coords[1];

        if (useGeoJSON) {
            first_coord = coords[1];
            second_coord = coords[0];
        }

        return new google.maps.LatLng(first_coord, second_coord);
    };

    var arrayToLatLng = function(coords, useGeoJSON) {
        var i;

        for (i = 0; i < coords.length; i++) {
            if (!(coords[i] instanceof google.maps.LatLng)) {
                if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
                    coords[i] = arrayToLatLng(coords[i], useGeoJSON);
                }
                else {
                    coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
                }
            }
        }

        return coords;
    };

    var getElementById = function(id, context) {
        var element,
            id = id.replace('#', '');

        if ('jQuery' in window && context) {
            element = $('#' + id, context)[0];
        } else {
            element = document.getElementById(id);
        };

        return element;
    };

    var findAbsolutePosition = function(obj)  {
        var curleft = 0,
            curtop = 0;

        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }

        return [curleft, curtop];
    };

    var GMaps = (function(global) {
        "use strict";

        var doc = document;

        var GMaps = function(options) {
            if (!this) return new GMaps(options);

            options.zoom = options.zoom || 15;
            options.mapType = options.mapType || 'roadmap';

            var self = this,
                i,
                events_that_hide_context_menu = [
                    'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
                    'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
                    'resize', 'tilesloaded', 'zoom_changed'
                ],
                events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
                options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
                container_id = options.el || options.div,
                markerClustererFunction = options.markerClusterer,
                mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
                map_center = new google.maps.LatLng(options.lat, options.lng),
                zoomControl = options.zoomControl || true,
                zoomControlOpt = options.zoomControlOpt || {
                    style: 'DEFAULT',
                    position: 'TOP_LEFT'
                },
                zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
                zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
                panControl = options.panControl || true,
                mapTypeControl = options.mapTypeControl || true,
                scaleControl = options.scaleControl || true,
                streetViewControl = options.streetViewControl || true,
                overviewMapControl = overviewMapControl || true,
                map_options = {},
                map_base_options = {
                    zoom: this.zoom,
                    center: map_center,
                    mapTypeId: mapType
                },
                map_controls_options = {
                    panControl: panControl,
                    zoomControl: zoomControl,
                    zoomControlOptions: {
                        style: google.maps.ZoomControlStyle[zoomControlStyle],
                        position: google.maps.ControlPosition[zoomControlPosition]
                    },
                    mapTypeControl: mapTypeControl,
                    scaleControl: scaleControl,
                    streetViewControl: streetViewControl,
                    overviewMapControl: overviewMapControl
                };

            if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
                this.el = getElementById(container_id, options.context);
            } else {
                this.el = container_id;
            }

            if (typeof(this.el) === 'undefined' || this.el === null) {
                throw 'No element defined.';
            }

            window.context_menu = window.context_menu || {};
            window.context_menu[self.el.id] = {};

            this.controls = [];
            this.overlays = [];
            this.layers = []; // array with kml/georss and fusiontables layers, can be as many
            this.singleLayers = {}; // object with the other layers, only one per layer
            this.markers = [];
            this.polylines = [];
            this.routes = [];
            this.polygons = [];
            this.infoWindow = null;
            this.overlay_el = null;
            this.zoom = options.zoom;
            this.registered_events = {};

            this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
            this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

            google.maps.visualRefresh = options.enableNewStyle;

            for (i = 0; i < options_to_be_deleted.length; i++) {
                delete options[options_to_be_deleted[i]];
            }

            if(options.disableDefaultUI != true) {
                map_base_options = extend_object(map_base_options, map_controls_options);
            }

            map_options = extend_object(map_base_options, options);

            for (i = 0; i < events_that_hide_context_menu.length; i++) {
                delete map_options[events_that_hide_context_menu[i]];
            }

            for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
                delete map_options[events_that_doesnt_hide_context_menu[i]];
            }

            this.map = new google.maps.Map(this.el, map_options);

            if (markerClustererFunction) {
                this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
            }

            var buildContextMenuHTML = function(control, e) {
                var html = '',
                    options = window.context_menu[self.el.id][control];

                for (var i in options){
                    if (options.hasOwnProperty(i)) {
                        var option = options[i];

                        html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
                    }
                }

                if (!getElementById('gmaps_context_menu')) return;

                var context_menu_element = getElementById('gmaps_context_menu');

                context_menu_element.innerHTML = html;

                var context_menu_items = context_menu_element.getElementsByTagName('a'),
                    context_menu_items_count = context_menu_items.length,
                    i;

                for (i = 0; i < context_menu_items_count; i++) {
                    var context_menu_item = context_menu_items[i];

                    var assign_menu_item_action = function(ev){
                        ev.preventDefault();

                        options[this.id.replace(control + '_', '')].action.apply(self, [e]);
                        self.hideContextMenu();
                    };

                    google.maps.event.clearListeners(context_menu_item, 'click');
                    google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
                }

                var position = findAbsolutePosition.apply(this, [self.el]),
                    left = position[0] + e.pixel.x - 15,
                    top = position[1] + e.pixel.y- 15;

                context_menu_element.style.left = left + "px";
                context_menu_element.style.top = top + "px";

                context_menu_element.style.display = 'block';
            };

            this.buildContextMenu = function(control, e) {
                if (control === 'marker') {
                    e.pixel = {};

                    var overlay = new google.maps.OverlayView();
                    overlay.setMap(self.map);

                    overlay.draw = function() {
                        var projection = overlay.getProjection(),
                            position = e.marker.getPosition();

                        e.pixel = projection.fromLatLngToContainerPixel(position);

                        buildContextMenuHTML(control, e);
                    };
                }
                else {
                    buildContextMenuHTML(control, e);
                }
            };

            this.setContextMenu = function(options) {
                window.context_menu[self.el.id][options.control] = {};

                var i,
                    ul = doc.createElement('ul');

                for (i in options.options) {
                    if (options.options.hasOwnProperty(i)) {
                        var option = options.options[i];

                        window.context_menu[self.el.id][options.control][option.name] = {
                            title: option.title,
                            action: option.action
                        };
                    }
                }

                ul.id = 'gmaps_context_menu';
                ul.style.display = 'none';
                ul.style.position = 'absolute';
                ul.style.minWidth = '100px';
                ul.style.background = 'white';
                ul.style.listStyle = 'none';
                ul.style.padding = '8px';
                ul.style.boxShadow = '2px 2px 6px #ccc';

                doc.body.appendChild(ul);

                var context_menu_element = getElementById('gmaps_context_menu')

                google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
                    if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
                        window.setTimeout(function(){
                            context_menu_element.style.display = 'none';
                        }, 400);
                    }
                }, false);
            };

            this.hideContextMenu = function() {
                var context_menu_element = getElementById('gmaps_context_menu');

                if (context_menu_element) {
                    context_menu_element.style.display = 'none';
                }
            };

            var setupListener = function(object, name) {
                google.maps.event.addListener(object, name, function(e){
                    if (e == undefined) {
                        e = this;
                    }

                    options[name].apply(this, [e]);

                    self.hideContextMenu();
                });
            };

            //google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
            google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

            for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
                var name = events_that_hide_context_menu[ev];

                if (name in options) {
                    setupListener(this.map, name);
                }
            }

            for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
                var name = events_that_doesnt_hide_context_menu[ev];

                if (name in options) {
                    setupListener(this.map, name);
                }
            }

            google.maps.event.addListener(this.map, 'rightclick', function(e) {
                if (options.rightclick) {
                    options.rightclick.apply(this, [e]);
                }

                if(window.context_menu[self.el.id]['map'] != undefined) {
                    self.buildContextMenu('map', e);
                }
            });

            this.refresh = function() {
                google.maps.event.trigger(this.map, 'resize');
            };

            this.fitZoom = function() {
                var latLngs = [],
                    markers_length = this.markers.length,
                    i;

                for (i = 0; i < markers_length; i++) {
                    if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
                        latLngs.push(this.markers[i].getPosition());
                    }
                }

                this.fitLatLngBounds(latLngs);
            };

            this.fitLatLngBounds = function(latLngs) {
                var total = latLngs.length,
                    bounds = new google.maps.LatLngBounds(),
                    i;

                for(i = 0; i < total; i++) {
                    bounds.extend(latLngs[i]);
                }

                this.map.fitBounds(bounds);
            };

            this.setCenter = function(lat, lng, callback) {
                this.map.panTo(new google.maps.LatLng(lat, lng));

                if (callback) {
                    callback();
                }
            };

            this.getElement = function() {
                return this.el;
            };

            this.zoomIn = function(value) {
                value = value || 1;

                this.zoom = this.map.getZoom() + value;
                this.map.setZoom(this.zoom);
            };

            this.zoomOut = function(value) {
                value = value || 1;

                this.zoom = this.map.getZoom() - value;
                this.map.setZoom(this.zoom);
            };

            var native_methods = [],
                method;

            for (method in this.map) {
                if (typeof(this.map[method]) == 'function' && !this[method]) {
                    native_methods.push(method);
                }
            }

            for (i = 0; i < native_methods.length; i++) {
                (function(gmaps, scope, method_name) {
                    gmaps[method_name] = function(){
                        return scope[method_name].apply(scope, arguments);
                    };
                })(this, this.map, native_methods[i]);
            }
        };

        return GMaps;
    })(this);

    GMaps.prototype.createControl = function(options) {
        var control = document.createElement('div');

        control.style.cursor = 'pointer';

        if (options.disableDefaultStyles !== true) {
            control.style.fontFamily = 'Roboto, Arial, sans-serif';
            control.style.fontSize = '11px';
            control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
        }

        for (var option in options.style) {
            control.style[option] = options.style[option];
        }

        if (options.id) {
            control.id = options.id;
        }

        if (options.classes) {
            control.className = options.classes;
        }

        if (options.content) {
            if (typeof options.content === 'string') {
                control.innerHTML = options.content;
            }
            else if (options.content instanceof HTMLElement) {
                control.appendChild(options.content);
            }
        }

        if (options.position) {
            control.position = google.maps.ControlPosition[options.position.toUpperCase()];
        }

        for (var ev in options.events) {
            (function(object, name) {
                google.maps.event.addDomListener(object, name, function(){
                    options.events[name].apply(this, [this]);
                });
            })(control, ev);
        }

        control.index = 1;

        return control;
    };

    GMaps.prototype.addControl = function(options) {
        var control = this.createControl(options);

        this.controls.push(control);
        this.map.controls[control.position].push(control);

        return control;
    };

    GMaps.prototype.removeControl = function(control) {
        var position = null,
            i;

        for (i = 0; i < this.controls.length; i++) {
            if (this.controls[i] == control) {
                position = this.controls[i].position;
                this.controls.splice(i, 1);
            }
        }

        if (position) {
            for (i = 0; i < this.map.controls.length; i++) {
                var controlsForPosition = this.map.controls[control.position];

                if (controlsForPosition.getAt(i) == control) {
                    controlsForPosition.removeAt(i);

                    break;
                }
            }
        }

        return control;
    };

    GMaps.prototype.createMarker = function(options) {
        if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
            throw 'No latitude or longitude defined.';
        }

        var self = this,
            details = options.details,
            fences = options.fences,
            outside = options.outside,
            base_options = {
                position: new google.maps.LatLng(options.lat, options.lng),
                map: null
            },
            marker_options = extend_object(base_options, options);

        delete marker_options.lat;
        delete marker_options.lng;
        delete marker_options.fences;
        delete marker_options.outside;

        var marker = new google.maps.Marker(marker_options);

        marker.fences = fences;

        if (options.infoWindow) {
            marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

            var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

            for (var ev = 0; ev < info_window_events.length; ev++) {
                (function(object, name) {
                    if (options.infoWindow[name]) {
                        google.maps.event.addListener(object, name, function(e){
                            options.infoWindow[name].apply(this, [e]);
                        });
                    }
                })(marker.infoWindow, info_window_events[ev]);
            }
        }

        var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

        var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

        for (var ev = 0; ev < marker_events.length; ev++) {
            (function(object, name) {
                if (options[name]) {
                    google.maps.event.addListener(object, name, function(){
                        options[name].apply(this, [this]);
                    });
                }
            })(marker, marker_events[ev]);
        }

        for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
            (function(map, object, name) {
                if (options[name]) {
                    google.maps.event.addListener(object, name, function(me){
                        if(!me.pixel){
                            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
                        }

                        options[name].apply(this, [me]);
                    });
                }
            })(this.map, marker, marker_events_with_mouse[ev]);
        }

        google.maps.event.addListener(marker, 'click', function() {
            this.details = details;

            if (options.click) {
                options.click.apply(this, [this]);
            }

            if (marker.infoWindow) {
                self.hideInfoWindows();
                marker.infoWindow.open(self.map, marker);
            }
        });

        google.maps.event.addListener(marker, 'rightclick', function(e) {
            e.marker = this;

            if (options.rightclick) {
                options.rightclick.apply(this, [e]);
            }

            if (window.context_menu[self.el.id]['marker'] != undefined) {
                self.buildContextMenu('marker', e);
            }
        });

        if (marker.fences) {
            google.maps.event.addListener(marker, 'dragend', function() {
                self.checkMarkerGeofence(marker, function(m, f) {
                    outside(m, f);
                });
            });
        }

        return marker;
    };

    GMaps.prototype.addMarker = function(options) {
        var marker;
        if(options.hasOwnProperty('gm_accessors_')) {
            // Native google.maps.Marker object
            marker = options;
        }
        else {
            if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
                marker = this.createMarker(options);
            }
            else {
                throw 'No latitude or longitude defined.';
            }
        }

        marker.setMap(this.map);

        if(this.markerClusterer) {
            this.markerClusterer.addMarker(marker);
        }

        this.markers.push(marker);

        GMaps.fire('marker_added', marker, this);

        return marker;
    };

    GMaps.prototype.addMarkers = function(array) {
        for (var i = 0, marker; marker=array[i]; i++) {
            this.addMarker(marker);
        }

        return this.markers;
    };

    GMaps.prototype.hideInfoWindows = function() {
        for (var i = 0, marker; marker = this.markers[i]; i++){
            if (marker.infoWindow) {
                marker.infoWindow.close();
            }
        }
    };

    GMaps.prototype.removeMarker = function(marker) {
        for (var i = 0; i < this.markers.length; i++) {
            if (this.markers[i] === marker) {
                this.markers[i].setMap(null);
                this.markers.splice(i, 1);

                if(this.markerClusterer) {
                    this.markerClusterer.removeMarker(marker);
                }

                GMaps.fire('marker_removed', marker, this);

                break;
            }
        }

        return marker;
    };

    GMaps.prototype.removeMarkers = function (collection) {
        var new_markers = [];

        if (typeof collection == 'undefined') {
            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                marker.setMap(null);

                if(this.markerClusterer) {
                    this.markerClusterer.removeMarker(marker);
                }

                GMaps.fire('marker_removed', marker, this);
            }

            this.markers = new_markers;
        }
        else {
            for (var i = 0; i < collection.length; i++) {
                var index = this.markers.indexOf(collection[i]);

                if (index > -1) {
                    var marker = this.markers[index];
                    marker.setMap(null);

                    if(this.markerClusterer) {
                        this.markerClusterer.removeMarker(marker);
                    }

                    GMaps.fire('marker_removed', marker, this);
                }
            }

            for (var i = 0; i < this.markers.length; i++) {
                var marker = this.markers[i];
                if (marker.getMap() != null) {
                    new_markers.push(marker);
                }
            }

            this.markers = new_markers;
        }
    };

    GMaps.prototype.drawOverlay = function(options) {
        var overlay = new google.maps.OverlayView(),
            auto_show = true;

        overlay.setMap(this.map);

        if (options.auto_show != null) {
            auto_show = options.auto_show;
        }

        overlay.onAdd = function() {
            var el = document.createElement('div');

            el.style.borderStyle = "none";
            el.style.borderWidth = "0px";
            el.style.position = "absolute";
            el.style.zIndex = 100;
            el.innerHTML = options.content;

            overlay.el = el;

            if (!options.layer) {
                options.layer = 'overlayLayer';
            }

            var panes = this.getPanes(),
                overlayLayer = panes[options.layer],
                stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

            overlayLayer.appendChild(el);

            for (var ev = 0; ev < stop_overlay_events.length; ev++) {
                (function(object, name) {
                    google.maps.event.addDomListener(object, name, function(e){
                        if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
                            e.cancelBubble = true;
                            e.returnValue = false;
                        }
                        else {
                            e.stopPropagation();
                        }
                    });
                })(el, stop_overlay_events[ev]);
            }

            if (options.click) {
                panes.overlayMouseTarget.appendChild(overlay.el);
                google.maps.event.addDomListener(overlay.el, 'click', function() {
                    options.click.apply(overlay, [overlay]);
                });
            }

            google.maps.event.trigger(this, 'ready');
        };

        overlay.draw = function() {
            var projection = this.getProjection(),
                pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

            options.horizontalOffset = options.horizontalOffset || 0;
            options.verticalOffset = options.verticalOffset || 0;

            var el = overlay.el,
                content = el.children[0],
                content_height = content.clientHeight,
                content_width = content.clientWidth;

            switch (options.verticalAlign) {
                case 'top':
                    el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
                    break;
                default:
                case 'middle':
                    el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
                    break;
                case 'bottom':
                    el.style.top = (pixel.y + options.verticalOffset) + 'px';
                    break;
            }

            switch (options.horizontalAlign) {
                case 'left':
                    el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
                    break;
                default:
                case 'center':
                    el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
                    break;
                case 'right':
                    el.style.left = (pixel.x + options.horizontalOffset) + 'px';
                    break;
            }

            el.style.display = auto_show ? 'block' : 'none';

            if (!auto_show) {
                options.show.apply(this, [el]);
            }
        };

        overlay.onRemove = function() {
            var el = overlay.el;

            if (options.remove) {
                options.remove.apply(this, [el]);
            }
            else {
                overlay.el.parentNode.removeChild(overlay.el);
                overlay.el = null;
            }
        };

        this.overlays.push(overlay);
        return overlay;
    };

    GMaps.prototype.removeOverlay = function(overlay) {
        for (var i = 0; i < this.overlays.length; i++) {
            if (this.overlays[i] === overlay) {
                this.overlays[i].setMap(null);
                this.overlays.splice(i, 1);

                break;
            }
        }
    };

    GMaps.prototype.removeOverlays = function() {
        for (var i = 0, item; item = this.overlays[i]; i++) {
            item.setMap(null);
        }

        this.overlays = [];
    };

    GMaps.prototype.drawPolyline = function(options) {
        var path = [],
            points = options.path;

        if (points.length) {
            if (points[0][0] === undefined) {
                path = points;
            }
            else {
                for (var i = 0, latlng; latlng = points[i]; i++) {
                    path.push(new google.maps.LatLng(latlng[0], latlng[1]));
                }
            }
        }

        var polyline_options = {
            map: this.map,
            path: path,
            strokeColor: options.strokeColor,
            strokeOpacity: options.strokeOpacity,
            strokeWeight: options.strokeWeight,
            geodesic: options.geodesic,
            clickable: true,
            editable: false,
            visible: true
        };

        if (options.hasOwnProperty("clickable")) {
            polyline_options.clickable = options.clickable;
        }

        if (options.hasOwnProperty("editable")) {
            polyline_options.editable = options.editable;
        }

        if (options.hasOwnProperty("icons")) {
            polyline_options.icons = options.icons;
        }

        if (options.hasOwnProperty("zIndex")) {
            polyline_options.zIndex = options.zIndex;
        }

        var polyline = new google.maps.Polyline(polyline_options);

        var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

        for (var ev = 0; ev < polyline_events.length; ev++) {
            (function(object, name) {
                if (options[name]) {
                    google.maps.event.addListener(object, name, function(e){
                        options[name].apply(this, [e]);
                    });
                }
            })(polyline, polyline_events[ev]);
        }

        this.polylines.push(polyline);

        GMaps.fire('polyline_added', polyline, this);

        return polyline;
    };

    GMaps.prototype.removePolyline = function(polyline) {
        for (var i = 0; i < this.polylines.length; i++) {
            if (this.polylines[i] === polyline) {
                this.polylines[i].setMap(null);
                this.polylines.splice(i, 1);

                GMaps.fire('polyline_removed', polyline, this);

                break;
            }
        }
    };

    GMaps.prototype.removePolylines = function() {
        for (var i = 0, item; item = this.polylines[i]; i++) {
            item.setMap(null);
        }

        this.polylines = [];
    };

    GMaps.prototype.drawCircle = function(options) {
        options =  extend_object({
            map: this.map,
            center: new google.maps.LatLng(options.lat, options.lng)
        }, options);

        delete options.lat;
        delete options.lng;

        var polygon = new google.maps.Circle(options),
            polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

        for (var ev = 0; ev < polygon_events.length; ev++) {
            (function(object, name) {
                if (options[name]) {
                    google.maps.event.addListener(object, name, function(e){
                        options[name].apply(this, [e]);
                    });
                }
            })(polygon, polygon_events[ev]);
        }

        this.polygons.push(polygon);

        return polygon;
    };

    GMaps.prototype.drawRectangle = function(options) {
        options = extend_object({
            map: this.map
        }, options);

        var latLngBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
            new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
        );

        options.bounds = latLngBounds;

        var polygon = new google.maps.Rectangle(options),
            polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

        for (var ev = 0; ev < polygon_events.length; ev++) {
            (function(object, name) {
                if (options[name]) {
                    google.maps.event.addListener(object, name, function(e){
                        options[name].apply(this, [e]);
                    });
                }
            })(polygon, polygon_events[ev]);
        }

        this.polygons.push(polygon);

        return polygon;
    };

    GMaps.prototype.drawPolygon = function(options) {
        var useGeoJSON = false;

        if(options.hasOwnProperty("useGeoJSON")) {
            useGeoJSON = options.useGeoJSON;
        }

        delete options.useGeoJSON;

        options = extend_object({
            map: this.map
        }, options);

        if (useGeoJSON == false) {
            options.paths = [options.paths.slice(0)];
        }

        if (options.paths.length > 0) {
            if (options.paths[0].length > 0) {
                options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
            }
        }

        var polygon = new google.maps.Polygon(options),
            polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

        for (var ev = 0; ev < polygon_events.length; ev++) {
            (function(object, name) {
                if (options[name]) {
                    google.maps.event.addListener(object, name, function(e){
                        options[name].apply(this, [e]);
                    });
                }
            })(polygon, polygon_events[ev]);
        }

        this.polygons.push(polygon);

        GMaps.fire('polygon_added', polygon, this);

        return polygon;
    };

    GMaps.prototype.removePolygon = function(polygon) {
        for (var i = 0; i < this.polygons.length; i++) {
            if (this.polygons[i] === polygon) {
                this.polygons[i].setMap(null);
                this.polygons.splice(i, 1);

                GMaps.fire('polygon_removed', polygon, this);

                break;
            }
        }
    };

    GMaps.prototype.removePolygons = function() {
        for (var i = 0, item; item = this.polygons[i]; i++) {
            item.setMap(null);
        }

        this.polygons = [];
    };

    GMaps.prototype.getFromFusionTables = function(options) {
        var events = options.events;

        delete options.events;

        var fusion_tables_options = options,
            layer = new google.maps.FusionTablesLayer(fusion_tables_options);

        for (var ev in events) {
            (function(object, name) {
                google.maps.event.addListener(object, name, function(e) {
                    events[name].apply(this, [e]);
                });
            })(layer, ev);
        }

        this.layers.push(layer);

        return layer;
    };

    GMaps.prototype.loadFromFusionTables = function(options) {
        var layer = this.getFromFusionTables(options);
        layer.setMap(this.map);

        return layer;
    };

    GMaps.prototype.getFromKML = function(options) {
        var url = options.url,
            events = options.events;

        delete options.url;
        delete options.events;

        var kml_options = options,
            layer = new google.maps.KmlLayer(url, kml_options);

        for (var ev in events) {
            (function(object, name) {
                google.maps.event.addListener(object, name, function(e) {
                    events[name].apply(this, [e]);
                });
            })(layer, ev);
        }

        this.layers.push(layer);

        return layer;
    };

    GMaps.prototype.loadFromKML = function(options) {
        var layer = this.getFromKML(options);
        layer.setMap(this.map);

        return layer;
    };

    GMaps.prototype.addLayer = function(layerName, options) {
        //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
        options = options || {};
        var layer;

        switch(layerName) {
            case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
                break;
            case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
                break;
            case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
                break;
            case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
                break;
            case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
                break;
            case 'panoramio':
                this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
                layer.setTag(options.filter);
                delete options.filter;

                //click event
                if (options.click) {
                    google.maps.event.addListener(layer, 'click', function(event) {
                        options.click(event);
                        delete options.click;
                    });
                }
                break;
            case 'places':
                this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

                //search, nearbySearch, radarSearch callback, Both are the same
                if (options.search || options.nearbySearch || options.radarSearch) {
                    var placeSearchRequest  = {
                        bounds : options.bounds || null,
                        keyword : options.keyword || null,
                        location : options.location || null,
                        name : options.name || null,
                        radius : options.radius || null,
                        rankBy : options.rankBy || null,
                        types : options.types || null
                    };

                    if (options.radarSearch) {
                        layer.radarSearch(placeSearchRequest, options.radarSearch);
                    }

                    if (options.search) {
                        layer.search(placeSearchRequest, options.search);
                    }

                    if (options.nearbySearch) {
                        layer.nearbySearch(placeSearchRequest, options.nearbySearch);
                    }
                }

                //textSearch callback
                if (options.textSearch) {
                    var textSearchRequest  = {
                        bounds : options.bounds || null,
                        location : options.location || null,
                        query : options.query || null,
                        radius : options.radius || null
                    };

                    layer.textSearch(textSearchRequest, options.textSearch);
                }
                break;
        }

        if (layer !== undefined) {
            if (typeof layer.setOptions == 'function') {
                layer.setOptions(options);
            }
            if (typeof layer.setMap == 'function') {
                layer.setMap(this.map);
            }

            return layer;
        }
    };

    GMaps.prototype.removeLayer = function(layer) {
        if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
            this.singleLayers[layer].setMap(null);

            delete this.singleLayers[layer];
        }
        else {
            for (var i = 0; i < this.layers.length; i++) {
                if (this.layers[i] === layer) {
                    this.layers[i].setMap(null);
                    this.layers.splice(i, 1);

                    break;
                }
            }
        }
    };

    var travelMode, unitSystem;

    GMaps.prototype.getRoutes = function(options) {
        switch (options.travelMode) {
            case 'bicycling':
                travelMode = google.maps.TravelMode.BICYCLING;
                break;
            case 'transit':
                travelMode = google.maps.TravelMode.TRANSIT;
                break;
            case 'driving':
                travelMode = google.maps.TravelMode.DRIVING;
                break;
            default:
                travelMode = google.maps.TravelMode.WALKING;
                break;
        }

        if (options.unitSystem === 'imperial') {
            unitSystem = google.maps.UnitSystem.IMPERIAL;
        }
        else {
            unitSystem = google.maps.UnitSystem.METRIC;
        }

        var base_options = {
                avoidHighways: false,
                avoidTolls: false,
                optimizeWaypoints: false,
                waypoints: []
            },
            request_options =  extend_object(base_options, options);

        request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
        request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
        request_options.travelMode = travelMode;
        request_options.unitSystem = unitSystem;

        delete request_options.callback;
        delete request_options.error;

        var self = this,
            service = new google.maps.DirectionsService();

        service.route(request_options, function(result, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                for (var r in result.routes) {
                    if (result.routes.hasOwnProperty(r)) {
                        self.routes.push(result.routes[r]);
                    }
                }

                if (options.callback) {
                    options.callback(self.routes);
                }
            }
            else {
                if (options.error) {
                    options.error(result, status);
                }
            }
        });
    };

    GMaps.prototype.removeRoutes = function() {
        this.routes = [];
    };

    GMaps.prototype.getElevations = function(options) {
        options = extend_object({
            locations: [],
            path : false,
            samples : 256
        }, options);

        if (options.locations.length > 0) {
            if (options.locations[0].length > 0) {
                options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
            }
        }

        var callback = options.callback;
        delete options.callback;

        var service = new google.maps.ElevationService();

        //location request
        if (!options.path) {
            delete options.path;
            delete options.samples;

            service.getElevationForLocations(options, function(result, status) {
                if (callback && typeof(callback) === "function") {
                    callback(result, status);
                }
            });
            //path request
        } else {
            var pathRequest = {
                path : options.locations,
                samples : options.samples
            };

            service.getElevationAlongPath(pathRequest, function(result, status) {
                if (callback && typeof(callback) === "function") {
                    callback(result, status);
                }
            });
        }
    };

    GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

    GMaps.prototype.drawRoute = function(options) {
        var self = this;

        this.getRoutes({
            origin: options.origin,
            destination: options.destination,
            travelMode: options.travelMode,
            waypoints: options.waypoints,
            unitSystem: options.unitSystem,
            error: options.error,
            callback: function(e) {
                if (e.length > 0) {
                    var polyline_options = {
                        path: e[e.length - 1].overview_path,
                        strokeColor: options.strokeColor,
                        strokeOpacity: options.strokeOpacity,
                        strokeWeight: options.strokeWeight
                    };

                    if (options.hasOwnProperty("icons")) {
                        polyline_options.icons = options.icons;
                    }

                    self.drawPolyline(polyline_options);

                    if (options.callback) {
                        options.callback(e[e.length - 1]);
                    }
                }
            }
        });
    };

    GMaps.prototype.travelRoute = function(options) {
        if (options.origin && options.destination) {
            this.getRoutes({
                origin: options.origin,
                destination: options.destination,
                travelMode: options.travelMode,
                waypoints : options.waypoints,
                unitSystem: options.unitSystem,
                error: options.error,
                callback: function(e) {
                    //start callback
                    if (e.length > 0 && options.start) {
                        options.start(e[e.length - 1]);
                    }

                    //step callback
                    if (e.length > 0 && options.step) {
                        var route = e[e.length - 1];
                        if (route.legs.length > 0) {
                            var steps = route.legs[0].steps;
                            for (var i = 0, step; step = steps[i]; i++) {
                                step.step_number = i;
                                options.step(step, (route.legs[0].steps.length - 1));
                            }
                        }
                    }

                    //end callback
                    if (e.length > 0 && options.end) {
                        options.end(e[e.length - 1]);
                    }
                }
            });
        }
        else if (options.route) {
            if (options.route.legs.length > 0) {
                var steps = options.route.legs[0].steps;
                for (var i = 0, step; step = steps[i]; i++) {
                    step.step_number = i;
                    options.step(step);
                }
            }
        }
    };

    GMaps.prototype.drawSteppedRoute = function(options) {
        var self = this;

        if (options.origin && options.destination) {
            this.getRoutes({
                origin: options.origin,
                destination: options.destination,
                travelMode: options.travelMode,
                waypoints : options.waypoints,
                error: options.error,
                callback: function(e) {
                    //start callback
                    if (e.length > 0 && options.start) {
                        options.start(e[e.length - 1]);
                    }

                    //step callback
                    if (e.length > 0 && options.step) {
                        var route = e[e.length - 1];
                        if (route.legs.length > 0) {
                            var steps = route.legs[0].steps;
                            for (var i = 0, step; step = steps[i]; i++) {
                                step.step_number = i;
                                var polyline_options = {
                                    path: step.path,
                                    strokeColor: options.strokeColor,
                                    strokeOpacity: options.strokeOpacity,
                                    strokeWeight: options.strokeWeight
                                };

                                if (options.hasOwnProperty("icons")) {
                                    polyline_options.icons = options.icons;
                                }

                                self.drawPolyline(polyline_options);
                                options.step(step, (route.legs[0].steps.length - 1));
                            }
                        }
                    }

                    //end callback
                    if (e.length > 0 && options.end) {
                        options.end(e[e.length - 1]);
                    }
                }
            });
        }
        else if (options.route) {
            if (options.route.legs.length > 0) {
                var steps = options.route.legs[0].steps;
                for (var i = 0, step; step = steps[i]; i++) {
                    step.step_number = i;
                    var polyline_options = {
                        path: step.path,
                        strokeColor: options.strokeColor,
                        strokeOpacity: options.strokeOpacity,
                        strokeWeight: options.strokeWeight
                    };

                    if (options.hasOwnProperty("icons")) {
                        polyline_options.icons = options.icons;
                    }

                    self.drawPolyline(polyline_options);
                    options.step(step);
                }
            }
        }
    };

    GMaps.Route = function(options) {
        this.origin = options.origin;
        this.destination = options.destination;
        this.waypoints = options.waypoints;

        this.map = options.map;
        this.route = options.route;
        this.step_count = 0;
        this.steps = this.route.legs[0].steps;
        this.steps_length = this.steps.length;

        var polyline_options = {
            path: new google.maps.MVCArray(),
            strokeColor: options.strokeColor,
            strokeOpacity: options.strokeOpacity,
            strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
            polyline_options.icons = options.icons;
        }

        this.polyline = this.map.drawPolyline(polyline_options).getPath();
    };

    GMaps.Route.prototype.getRoute = function(options) {
        var self = this;

        this.map.getRoutes({
            origin : this.origin,
            destination : this.destination,
            travelMode : options.travelMode,
            waypoints : this.waypoints || [],
            error: options.error,
            callback : function() {
                self.route = e[0];

                if (options.callback) {
                    options.callback.call(self);
                }
            }
        });
    };

    GMaps.Route.prototype.back = function() {
        if (this.step_count > 0) {
            this.step_count--;
            var path = this.route.legs[0].steps[this.step_count].path;

            for (var p in path){
                if (path.hasOwnProperty(p)){
                    this.polyline.pop();
                }
            }
        }
    };

    GMaps.Route.prototype.forward = function() {
        if (this.step_count < this.steps_length) {
            var path = this.route.legs[0].steps[this.step_count].path;

            for (var p in path){
                if (path.hasOwnProperty(p)){
                    this.polyline.push(path[p]);
                }
            }
            this.step_count++;
        }
    };

    GMaps.prototype.checkGeofence = function(lat, lng, fence) {
        return fence.containsLatLng(new google.maps.LatLng(lat, lng));
    };

    GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
        if (marker.fences) {
            for (var i = 0, fence; fence = marker.fences[i]; i++) {
                var pos = marker.getPosition();
                if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
                    outside_callback(marker, fence);
                }
            }
        }
    };

    GMaps.prototype.toImage = function(options) {
        var options = options || {},
            static_map_options = {};

        static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
        static_map_options['lat'] = this.getCenter().lat();
        static_map_options['lng'] = this.getCenter().lng();

        if (this.markers.length > 0) {
            static_map_options['markers'] = [];

            for (var i = 0; i < this.markers.length; i++) {
                static_map_options['markers'].push({
                    lat: this.markers[i].getPosition().lat(),
                    lng: this.markers[i].getPosition().lng()
                });
            }
        }

        if (this.polylines.length > 0) {
            var polyline = this.polylines[0];

            static_map_options['polyline'] = {};
            static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
            static_map_options['polyline']['strokeColor'] = polyline.strokeColor
            static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
            static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
        }

        return GMaps.staticMapURL(static_map_options);
    };

    GMaps.staticMapURL = function(options){
        var parameters = [],
            data,
            static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

        if (options.url) {
            static_root = options.url;
            delete options.url;
        }

        static_root += '?';

        var markers = options.markers;

        delete options.markers;

        if (!markers && options.marker) {
            markers = [options.marker];
            delete options.marker;
        }

        var styles = options.styles;

        delete options.styles;

        var polyline = options.polyline;
        delete options.polyline;

        /** Map options **/
        if (options.center) {
            parameters.push('center=' + options.center);
            delete options.center;
        }
        else if (options.address) {
            parameters.push('center=' + options.address);
            delete options.address;
        }
        else if (options.lat) {
            parameters.push(['center=', options.lat, ',', options.lng].join(''));
            delete options.lat;
            delete options.lng;
        }
        else if (options.visible) {
            var visible = encodeURI(options.visible.join('|'));
            parameters.push('visible=' + visible);
        }

        var size = options.size;
        if (size) {
            if (size.join) {
                size = size.join('x');
            }
            delete options.size;
        }
        else {
            size = '630x300';
        }
        parameters.push('size=' + size);

        if (!options.zoom && options.zoom !== false) {
            options.zoom = 15;
        }

        var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
        delete options.sensor;
        parameters.push('sensor=' + sensor);

        for (var param in options) {
            if (options.hasOwnProperty(param)) {
                parameters.push(param + '=' + options[param]);
            }
        }

        /** Markers **/
        if (markers) {
            var marker, loc;

            for (var i = 0; data = markers[i]; i++) {
                marker = [];

                if (data.size && data.size !== 'normal') {
                    marker.push('size:' + data.size);
                    delete data.size;
                }
                else if (data.icon) {
                    marker.push('icon:' + encodeURI(data.icon));
                    delete data.icon;
                }

                if (data.color) {
                    marker.push('color:' + data.color.replace('#', '0x'));
                    delete data.color;
                }

                if (data.label) {
                    marker.push('label:' + data.label[0].toUpperCase());
                    delete data.label;
                }

                loc = (data.address ? data.address : data.lat + ',' + data.lng);
                delete data.address;
                delete data.lat;
                delete data.lng;

                for(var param in data){
                    if (data.hasOwnProperty(param)) {
                        marker.push(param + ':' + data[param]);
                    }
                }

                if (marker.length || i === 0) {
                    marker.push(loc);
                    marker = marker.join('|');
                    parameters.push('markers=' + encodeURI(marker));
                }
                // New marker without styles
                else {
                    marker = parameters.pop() + encodeURI('|' + loc);
                    parameters.push(marker);
                }
            }
        }

        /** Map Styles **/
        if (styles) {
            for (var i = 0; i < styles.length; i++) {
                var styleRule = [];
                if (styles[i].featureType){
                    styleRule.push('feature:' + styles[i].featureType.toLowerCase());
                }

                if (styles[i].elementType) {
                    styleRule.push('element:' + styles[i].elementType.toLowerCase());
                }

                for (var j = 0; j < styles[i].stylers.length; j++) {
                    for (var p in styles[i].stylers[j]) {
                        var ruleArg = styles[i].stylers[j][p];
                        if (p == 'hue' || p == 'color') {
                            ruleArg = '0x' + ruleArg.substring(1);
                        }
                        styleRule.push(p + ':' + ruleArg);
                    }
                }

                var rule = styleRule.join('|');
                if (rule != '') {
                    parameters.push('style=' + rule);
                }
            }
        }

        /** Polylines **/
        function parseColor(color, opacity) {
            if (color[0] === '#'){
                color = color.replace('#', '0x');

                if (opacity) {
                    opacity = parseFloat(opacity);
                    opacity = Math.min(1, Math.max(opacity, 0));
                    if (opacity === 0) {
                        return '0x00000000';
                    }
                    opacity = (opacity * 255).toString(16);
                    if (opacity.length === 1) {
                        opacity += opacity;
                    }

                    color = color.slice(0,8) + opacity;
                }
            }
            return color;
        }

        if (polyline) {
            data = polyline;
            polyline = [];

            if (data.strokeWeight) {
                polyline.push('weight:' + parseInt(data.strokeWeight, 10));
            }

            if (data.strokeColor) {
                var color = parseColor(data.strokeColor, data.strokeOpacity);
                polyline.push('color:' + color);
            }

            if (data.fillColor) {
                var fillcolor = parseColor(data.fillColor, data.fillOpacity);
                polyline.push('fillcolor:' + fillcolor);
            }

            var path = data.path;
            if (path.join) {
                for (var j=0, pos; pos=path[j]; j++) {
                    polyline.push(pos.join(','));
                }
            }
            else {
                polyline.push('enc:' + path);
            }

            polyline = polyline.join('|');
            parameters.push('path=' + encodeURI(polyline));
        }

        /** Retina support **/
        var dpi = window.devicePixelRatio || 1;
        parameters.push('scale=' + dpi);

        parameters = parameters.join('&');
        return static_root + parameters;
    };

    GMaps.prototype.addMapType = function(mapTypeId, options) {
        if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
            options.tileSize = options.tileSize || new google.maps.Size(256, 256);

            var mapType = new google.maps.ImageMapType(options);

            this.map.mapTypes.set(mapTypeId, mapType);
        }
        else {
            throw "'getTileUrl' function required.";
        }
    };

    GMaps.prototype.addOverlayMapType = function(options) {
        if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
            var overlayMapTypeIndex = options.index;

            delete options.index;

            this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
        }
        else {
            throw "'getTile' function required.";
        }
    };

    GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
        this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
    };

    GMaps.prototype.addStyle = function(options) {
        var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

        this.map.mapTypes.set(options.mapTypeId, styledMapType);
    };

    GMaps.prototype.setStyle = function(mapTypeId) {
        this.map.setMapTypeId(mapTypeId);
    };

    GMaps.prototype.createPanorama = function(streetview_options) {
        if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
            streetview_options.lat = this.getCenter().lat();
            streetview_options.lng = this.getCenter().lng();
        }

        this.panorama = GMaps.createPanorama(streetview_options);

        this.map.setStreetView(this.panorama);

        return this.panorama;
    };

    GMaps.createPanorama = function(options) {
        var el = getElementById(options.el, options.context);

        options.position = new google.maps.LatLng(options.lat, options.lng);

        delete options.el;
        delete options.context;
        delete options.lat;
        delete options.lng;

        var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
            streetview_options = extend_object({visible : true}, options);

        for (var i = 0; i < streetview_events.length; i++) {
            delete streetview_options[streetview_events[i]];
        }

        var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

        for (var i = 0; i < streetview_events.length; i++) {
            (function(object, name) {
                if (options[name]) {
                    google.maps.event.addListener(object, name, function(){
                        options[name].apply(this);
                    });
                }
            })(panorama, streetview_events[i]);
        }

        return panorama;
    };

    GMaps.prototype.on = function(event_name, handler) {
        return GMaps.on(event_name, this, handler);
    };

    GMaps.prototype.off = function(event_name) {
        GMaps.off(event_name, this);
    };

    GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

    GMaps.on = function(event_name, object, handler) {
        if (GMaps.custom_events.indexOf(event_name) == -1) {
            if(object instanceof GMaps) object = object.map;
            return google.maps.event.addListener(object, event_name, handler);
        }
        else {
            var registered_event = {
                handler : handler,
                eventName : event_name
            };

            object.registered_events[event_name] = object.registered_events[event_name] || [];
            object.registered_events[event_name].push(registered_event);

            return registered_event;
        }
    };

    GMaps.off = function(event_name, object) {
        if (GMaps.custom_events.indexOf(event_name) == -1) {
            if(object instanceof GMaps) object = object.map;
            google.maps.event.clearListeners(object, event_name);
        }
        else {
            object.registered_events[event_name] = [];
        }
    };

    GMaps.fire = function(event_name, object, scope) {
        if (GMaps.custom_events.indexOf(event_name) == -1) {
            google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
        }
        else {
            if(event_name in scope.registered_events) {
                var firing_events = scope.registered_events[event_name];

                for(var i = 0; i < firing_events.length; i++) {
                    (function(handler, scope, object) {
                        handler.apply(scope, [object]);
                    })(firing_events[i]['handler'], scope, object);
                }
            }
        }
    };

    GMaps.geolocate = function(options) {
        var complete_callback = options.always || options.complete;

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                options.success(position);

                if (complete_callback) {
                    complete_callback();
                }
            }, function(error) {
                options.error(error);

                if (complete_callback) {
                    complete_callback();
                }
            }, options.options);
        }
        else {
            options.not_supported();

            if (complete_callback) {
                complete_callback();
            }
        }
    };

    GMaps.geocode = function(options) {
        this.geocoder = new google.maps.Geocoder();
        var callback = options.callback;
        if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
            options.latLng = new google.maps.LatLng(options.lat, options.lng);
        }

        delete options.lat;
        delete options.lng;
        delete options.callback;

        this.geocoder.geocode(options, function(results, status) {
            callback(results, status);
        });
    };

//==========================
// Polygon containsLatLng
// https://github.com/tparkin/Google-Maps-Point-in-Polygon
// Poygon getBounds extension - google-maps-extensions
// http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
    if (!google.maps.Polygon.prototype.getBounds) {
        google.maps.Polygon.prototype.getBounds = function(latLng) {
            var bounds = new google.maps.LatLngBounds();
            var paths = this.getPaths();
            var path;

            for (var p = 0; p < paths.getLength(); p++) {
                path = paths.getAt(p);
                for (var i = 0; i < path.getLength(); i++) {
                    bounds.extend(path.getAt(i));
                }
            }

            return bounds;
        };
    }

    if (!google.maps.Polygon.prototype.containsLatLng) {
        // Polygon containsLatLng - method to determine if a latLng is within a polygon
        google.maps.Polygon.prototype.containsLatLng = function(latLng) {
            // Exclude points outside of bounds as there is no way they are in the poly
            var bounds = this.getBounds();

            if (bounds !== null && !bounds.contains(latLng)) {
                return false;
            }

            // Raycast point in polygon method
            var inPoly = false;

            var numPaths = this.getPaths().getLength();
            for (var p = 0; p < numPaths; p++) {
                var path = this.getPaths().getAt(p);
                var numPoints = path.getLength();
                var j = numPoints - 1;

                for (var i = 0; i < numPoints; i++) {
                    var vertex1 = path.getAt(i);
                    var vertex2 = path.getAt(j);

                    if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
                        if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
                            inPoly = !inPoly;
                        }
                    }

                    j = i;
                }
            }

            return inPoly;
        };
    }

    if (!google.maps.Circle.prototype.containsLatLng) {
        google.maps.Circle.prototype.containsLatLng = function(latLng) {
            if (google.maps.geometry) {
                return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
            }
            else {
                return true;
            }
        };
    }

    google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
        return this.contains(latLng);
    };

    google.maps.Marker.prototype.setFences = function(fences) {
        this.fences = fences;
    };

    google.maps.Marker.prototype.addFence = function(fence) {
        this.fences.push(fence);
    };

    google.maps.Marker.prototype.getId = function() {
        return this['__gm_id'];
    };

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
            "use strict";
            if (this == null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;
            if (len === 0) {
                return -1;
            }
            var n = 0;
            if (arguments.length > 1) {
                n = Number(arguments[1]);
                if (n != n) { // shortcut for verifying if it's NaN
                    n = 0;
                } else if (n != 0 && n != Infinity && n != -Infinity) {
                    n = (n > 0 || -1) * Math.floor(Math.abs(n));
                }
            }
            if (n >= len) {
                return -1;
            }
            var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
            for (; k < len; k++) {
                if (k in t && t[k] === searchElement) {
                    return k;
                }
            }
            return -1;
        }
    }

    return GMaps;
}));

///*!
//* GMaps.js v0.4.3
//* http://hpneo.github.com/gmaps/
//*
//* Copyright 2012, Gustavo Leon
//* Released under the MIT License.
//*/
//
//
//if (window.google == undefined && window.google.maps == undefined) {
//    throw 'Google Maps API is required. Please register the following JavaScript library http://maps.google.com/maps/api/js?sensor=true.'
//}
//
//var extend_object = function(obj, new_obj) {
//    var name;
//
//    if (obj === new_obj) {
//        return obj;
//    }
//
//    for (name in new_obj) {
//        obj[name] = new_obj[name];
//    }
//
//    return obj;
//};
//
//var replace_object = function(obj, replace) {
//    var name;
//
//    if (obj === replace) {
//        return obj;
//    }
//
//    for (name in replace) {
//        if (obj[name] != undefined) {
//            obj[name] = replace[name];
//        }
//    }
//
//    return obj;
//};
//
//var array_map = function(array, callback) {
//    var original_callback_params = Array.prototype.slice.call(arguments, 2),
//        array_return = [],
//        array_length = array.length,
//        i;
//
//    if (Array.prototype.map && array.map === Array.prototype.map) {
//        array_return = Array.prototype.map.call(array, function(item) {
//            callback_params = original_callback_params;
//            callback_params.splice(0, 0, item);
//
//            return callback.apply(this, callback_params);
//        });
//    }
//    else {
//        for (i = 0; i < array_length; i++) {
//            callback_params = original_callback_params;
//            callback_params = callback_params.splice(0, 0, array[i]);
//            array_return.push(callback.apply(this, callback_params));
//        }
//    }
//
//    return array_return;
//};
//
//var array_flat = function(array) {
//    var new_array = [],
//        i;
//
//    for (i = 0; i < array.length; i++) {
//        new_array = new_array.concat(array[i]);
//    }
//
//    return new_array;
//};
//
//var coordsToLatLngs = function(coords, useGeoJSON) {
//    var first_coord = coords[0],
//        second_coord = coords[1];
//
//    if (useGeoJSON) {
//        first_coord = coords[1];
//        second_coord = coords[0];
//    }
//
//    return new google.maps.LatLng(first_coord, second_coord);
//};
//
//var arrayToLatLng = function(coords, useGeoJSON) {
//    var i;
//
//    for (i = 0; i < coords.length; i++) {
//        if (coords[i].length > 0 && typeof(coords[i][0]) != "number") {
//            coords[i] = arrayToLatLng(coords[i], useGeoJSON);
//        }
//        else {
//            coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
//        }
//    }
//
//    return coords;
//};
//
//var getElementById = function(id, context) {
//    var element,
//        id = id.replace('#', '');
//
//    if ('jQuery' in this && context) {
//        element = $("#" + id, context)[0];
//    } else {
//        element = document.getElementById(id);
//    };
//
//    return element;
//};
//
//var findAbsolutePosition = function(obj)  {
//    var curleft = 0,
//        curtop = 0;
//
//    if (obj.offsetParent) {
//        do {
//            curleft += obj.offsetLeft;
//            curtop += obj.offsetTop;
//        } while (obj = obj.offsetParent);
//    }
//
//    return [curleft, curtop];
//};
//
//var GMaps = (function(global) {
//    "use strict";
//
//    var doc = document;
//
//    var GMaps = function(options) {
//        options.zoom = options.zoom || 15;
//        options.mapType = options.mapType || 'roadmap';
//
//        var self = this,
//            i,
//            events_that_hide_context_menu = ['bounds_changed', 'center_changed', 'click', 'dblclick', 'drag', 'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed', 'resize', 'tilesloaded', 'zoom_changed'],
//            events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
//            options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
//            container_id = options.el || options.div,
//            markerClustererFunction = options.markerClusterer,
//            mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
//            map_center = new google.maps.LatLng(options.lat, options.lng),
//            zoomControl = options.zoomControl || true,
//            zoomControlOpt = options.zoomControlOpt || {
//                style: 'DEFAULT',
//                position: 'TOP_LEFT'
//            },
//            zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
//            zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
//            panControl = options.panControl || true,
//            mapTypeControl = options.mapTypeControl || true,
//            scaleControl = options.scaleControl || true,
//            streetViewControl = options.streetViewControl || true,
//            overviewMapControl = overviewMapControl || true,
//            map_options = {},
//            map_base_options = {
//                zoom: this.zoom,
//                center: map_center,
//                mapTypeId: mapType
//            },
//            map_controls_options = {
//                panControl: panControl,
//                zoomControl: zoomControl,
//                zoomControlOptions: {
//                    style: google.maps.ZoomControlStyle[zoomControlStyle],
//                    position: google.maps.ControlPosition[zoomControlPosition]
//                },
//                mapTypeControl: mapTypeControl,
//                scaleControl: scaleControl,
//                streetViewControl: streetViewControl,
//                overviewMapControl: overviewMapControl
//            };
//
//        if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
//            this.el = getElementById(container_id, options.context);
//        } else {
//            this.el = container_id;
//        }
//
//        if (typeof(this.el) === 'undefined' || this.el === null) {
//            throw 'No element defined.';
//        }
//
//        window.context_menu = window.context_menu || {};
//        window.context_menu[self.el.id] = {};
//
//        this.controls = [];
//        this.overlays = [];
//        this.layers = []; // array with kml/georss and fusiontables layers, can be as many
//        this.singleLayers = {}; // object with the other layers, only one per layer
//        this.markers = [];
//        this.polylines = [];
//        this.routes = [];
//        this.polygons = [];
//        this.infoWindow = null;
//        this.overlay_el = null;
//        this.zoom = options.zoom;
//        this.registered_events = {};
//
//        this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
//        this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;
//
//        google.maps.visualRefresh = options.enableNewStyle;
//
//        for (i = 0; i < options_to_be_deleted.length; i++) {
//            delete options[options_to_be_deleted[i]];
//        }
//
//        if(options.disableDefaultUI != true) {
//            map_base_options = extend_object(map_base_options, map_controls_options);
//        }
//
//        map_options = extend_object(map_base_options, options);
//
//        for (i = 0; i < events_that_hide_context_menu.length; i++) {
//            delete map_options[events_that_hide_context_menu[i]];
//        }
//
//        for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
//            delete map_options[events_that_doesnt_hide_context_menu[i]];
//        }
//
//        this.map = new google.maps.Map(this.el, map_options);
//
//        if (markerClustererFunction) {
//            this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
//        }
//
//        var buildContextMenuHTML = function(control, e) {
//            var html = '',
//                options = window.context_menu[self.el.id][control];
//
//            for (var i in options){
//                if (options.hasOwnProperty(i)) {
//                    var option = options[i];
//
//                    html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
//                }
//            }
//
//            if (!getElementById('gmaps_context_menu')) return;
//
//            var context_menu_element = getElementById('gmaps_context_menu');
//
//            context_menu_element.innerHTML = html;
//
//            var context_menu_items = context_menu_element.getElementsByTagName('a'),
//                context_menu_items_count = context_menu_items.length
//            i;
//
//            for (i = 0; i < context_menu_items_count; i++) {
//                var context_menu_item = context_menu_items[i];
//
//                var assign_menu_item_action = function(ev){
//                    ev.preventDefault();
//
//                    options[this.id.replace(control + '_', '')].action.apply(self, [e]);
//                    self.hideContextMenu();
//                };
//
//                google.maps.event.clearListeners(context_menu_item, 'click');
//                google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
//            }
//
//            var position = findAbsolutePosition.apply(this, [self.el]),
//                left = position[0] + e.pixel.x - 15,
//                top = position[1] + e.pixel.y- 15;
//
//            context_menu_element.style.left = left + "px";
//            context_menu_element.style.top = top + "px";
//
//            context_menu_element.style.display = 'block';
//        };
//
//        var buildContextMenu = function(control, e) {
//            if (control === 'marker') {
//                e.pixel = {};
//
//                var overlay = new google.maps.OverlayView();
//                overlay.setMap(self.map);
//
//                overlay.draw = function() {
//                    var projection = overlay.getProjection(),
//                        position = e.marker.getPosition();
//
//                    e.pixel = projection.fromLatLngToContainerPixel(position);
//
//                    buildContextMenuHTML(control, e);
//                };
//            }
//            else {
//                buildContextMenuHTML(control, e);
//            }
//        };
//
//        this.setContextMenu = function(options) {
//            window.context_menu[self.el.id][options.control] = {};
//
//            var i,
//                ul = doc.createElement('ul');
//
//            for (i in options.options) {
//                if (options.options.hasOwnProperty(i)) {
//                    var option = options.options[i];
//
//                    window.context_menu[self.el.id][options.control][option.name] = {
//                        title: option.title,
//                        action: option.action
//                    };
//                }
//            }
//
//            ul.id = 'gmaps_context_menu';
//            ul.style.display = 'none';
//            ul.style.position = 'absolute';
//            ul.style.minWidth = '100px';
//            ul.style.background = 'white';
//            ul.style.listStyle = 'none';
//            ul.style.padding = '8px';
//            ul.style.boxShadow = '2px 2px 6px #ccc';
//
//            doc.body.appendChild(ul);
//
//            var context_menu_element = getElementById('gmaps_context_menu')
//
//            google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
//                if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
//                    window.setTimeout(function(){
//                        context_menu_element.style.display = 'none';
//                    }, 400);
//                }
//            }, false);
//        };
//
//        this.hideContextMenu = function() {
//            var context_menu_element = getElementById('gmaps_context_menu');
//
//            if (context_menu_element) {
//                context_menu_element.style.display = 'none';
//            }
//        };
//
//        var setupListener = function(object, name) {
//            google.maps.event.addListener(object, name, function(e){
//                if (e == undefined) {
//                    e = this;
//                }
//
//                options[name].apply(this, [e]);
//
//                self.hideContextMenu();
//            });
//        };
//
//        for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
//            var name = events_that_hide_context_menu[ev];
//
//            if (name in options) {
//                setupListener(this.map, name);
//            }
//        }
//
//        for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
//            var name = events_that_doesnt_hide_context_menu[ev];
//
//            if (name in options) {
//                setupListener(this.map, name);
//            }
//        }
//
//        google.maps.event.addListener(this.map, 'rightclick', function(e) {
//            if (options.rightclick) {
//                options.rightclick.apply(this, [e]);
//            }
//
//            if(window.context_menu[self.el.id]['map'] != undefined) {
//                buildContextMenu('map', e);
//            }
//        });
//
//        this.refresh = function() {
//            google.maps.event.trigger(this.map, 'resize');
//        };
//
//        this.fitZoom = function() {
//            var latLngs = [],
//                markers_length = this.markers.length,
//                i;
//
//            for (i = 0; i < markers_length; i++) {
//                latLngs.push(this.markers[i].getPosition());
//            }
//
//            this.fitLatLngBounds(latLngs);
//        };
//
//        this.fitLatLngBounds = function(latLngs) {
//            var total = latLngs.length;
//            var bounds = new google.maps.LatLngBounds();
//
//            for(var i=0; i < total; i++) {
//                bounds.extend(latLngs[i]);
//            }
//
//            this.map.fitBounds(bounds);
//        };
//
//        this.setCenter = function(lat, lng, callback) {
//            this.map.panTo(new google.maps.LatLng(lat, lng));
//
//            if (callback) {
//                callback();
//            }
//        };
//
//        this.getElement = function() {
//            return this.el;
//        };
//
//        this.zoomIn = function(value) {
//            value = value || 1;
//
//            this.zoom = this.map.getZoom() + value;
//            this.map.setZoom(this.zoom);
//        };
//
//        this.zoomOut = function(value) {
//            value = value || 1;
//
//            this.zoom = this.map.getZoom() - value;
//            this.map.setZoom(this.zoom);
//        };
//
//        var native_methods = [],
//            method;
//
//        for (method in this.map) {
//            if (typeof(this.map[method]) == 'function' && !this[method]) {
//                native_methods.push(method);
//            }
//        }
//
//        for (i=0; i < native_methods.length; i++) {
//            (function(gmaps, scope, method_name) {
//                gmaps[method_name] = function(){
//                    return scope[method_name].apply(scope, arguments);
//                };
//            })(this, this.map, native_methods[i]);
//        }
//    };
//
//    return GMaps;
//})(this);
//GMaps.prototype.createControl = function(options) {
//    var control = document.createElement('div');
//
//    control.style.cursor = 'pointer';
//    control.style.fontFamily = 'Arial, sans-serif';
//    control.style.fontSize = '13px';
//    control.style.boxShadow = 'rgba(0, 0, 0, 0.398438) 0px 2px 4px';
//
//    for (var option in options.style) {
//        control.style[option] = options.style[option];
//    }
//
//    if (options.id) {
//        control.id = options.id;
//    }
//
//    if (options.classes) {
//        control.className = options.classes;
//    }
//
//    if (options.content) {
//        control.innerHTML = options.content;
//    }
//
//    for (var ev in options.events) {
//        (function(object, name) {
//            google.maps.event.addDomListener(object, name, function(){
//                options.events[name].apply(this, [this]);
//            });
//        })(control, ev);
//    }
//
//    control.index = 1;
//
//    return control;
//};
//
//GMaps.prototype.addControl = function(options) {
//    var position = google.maps.ControlPosition[options.position.toUpperCase()];
//
//    delete options.position;
//
//    var control = this.createControl(options);
//    this.controls.push(control);
//
//    this.map.controls[position].push(control);
//
//    return control;
//};
//GMaps.prototype.createMarker = function(options) {
//    if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
//        throw 'No latitude or longitude defined.';
//    }
//
//    var self = this,
//        details = options.details,
//        fences = options.fences,
//        outside = options.outside,
//        base_options = {
//            position: new google.maps.LatLng(options.lat, options.lng),
//            map: null
//        };
//
//    delete options.lat;
//    delete options.lng;
//    delete options.fences;
//    delete options.outside;
//
//    var marker_options = extend_object(base_options, options),
//        marker = new google.maps.Marker(marker_options);
//
//    marker.fences = fences;
//
//    if (options.infoWindow) {
//        marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);
//
//        var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];
//
//        for (var ev = 0; ev < info_window_events.length; ev++) {
//            (function(object, name) {
//                if (options.infoWindow[name]) {
//                    google.maps.event.addListener(object, name, function(e){
//                        options.infoWindow[name].apply(this, [e]);
//                    });
//                }
//            })(marker.infoWindow, info_window_events[ev]);
//        }
//    }
//
//    var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];
//
//    var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];
//
//    for (var ev = 0; ev < marker_events.length; ev++) {
//        (function(object, name) {
//            if (options[name]) {
//                google.maps.event.addListener(object, name, function(){
//                    options[name].apply(this, [this]);
//                });
//            }
//        })(marker, marker_events[ev]);
//    }
//
//    for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
//        (function(map, object, name) {
//            if (options[name]) {
//                google.maps.event.addListener(object, name, function(me){
//                    if(!me.pixel){
//                        me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
//                    }
//
//                    options[name].apply(this, [me]);
//                });
//            }
//        })(this.map, marker, marker_events_with_mouse[ev]);
//    }
//
//    google.maps.event.addListener(marker, 'click', function() {
//        this.details = details;
//
//        if (options.click) {
//            options.click.apply(this, [this]);
//        }
//
//        if (marker.infoWindow) {
//            self.hideInfoWindows();
//            marker.infoWindow.open(self.map, marker);
//        }
//    });
//
//    google.maps.event.addListener(marker, 'rightclick', function(e) {
//        e.marker = this;
//
//        if (options.rightclick) {
//            options.rightclick.apply(this, [e]);
//        }
//
//        if (window.context_menu[self.el.id]['marker'] != undefined) {
//            buildContextMenu('marker', e);
//        }
//    });
//
//    if (marker.fences) {
//        google.maps.event.addListener(marker, 'dragend', function() {
//            self.checkMarkerGeofence(marker, function(m, f) {
//                outside(m, f);
//            });
//        });
//    }
//
//    return marker;
//};
//
//GMaps.prototype.addMarker = function(options) {
//    var marker;
//    if(options.hasOwnProperty('gm_accessors_')) {
//        // Native google.maps.Marker object
//        marker = options;
//    }
//    else {
//        if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
//            marker = this.createMarker(options);
//        }
//        else {
//            throw 'No latitude or longitude defined.';
//        }
//    }
//
//    marker.setMap(this.map);
//
//    if(this.markerClusterer) {
//        this.markerClusterer.addMarker(marker);
//    }
//
//    this.markers.push(marker);
//
//    GMaps.fire('marker_added', marker, this);
//
//    return marker;
//};
//
//GMaps.prototype.addMarkers = function(array) {
//    for (var i = 0, marker; marker=array[i]; i++) {
//        this.addMarker(marker);
//    }
//
//    return this.markers;
//};
//
//GMaps.prototype.hideInfoWindows = function() {
//    for (var i = 0, marker; marker = this.markers[i]; i++){
//        if (marker.infoWindow){
//            marker.infoWindow.close();
//        }
//    }
//};
//
//GMaps.prototype.removeMarker = function(marker) {
//    for (var i = 0; i < this.markers.length; i++) {
//        if (this.markers[i] === marker) {
//            this.markers[i].setMap(null);
//            this.markers.splice(i, 1);
//
//            GMaps.fire('marker_removed', marker, this);
//
//            break;
//        }
//    }
//
//    return marker;
//};
//
//GMaps.prototype.removeMarkers = function(collection) {
//    var collection = (collection || this.markers);
//
//    for (var i = 0;i < this.markers.length; i++) {
//        if(this.markers[i] === collection[i]) {
//            this.markers[i].setMap(null);
//        }
//    }
//
//    var new_markers = [];
//
//    for (var i = 0;i < this.markers.length; i++) {
//        if(this.markers[i].getMap() != null) {
//            new_markers.push(this.markers[i]);
//        }
//    }
//
//    this.markers = new_markers;
//};
//GMaps.prototype.drawOverlay = function(options) {
//    var overlay = new google.maps.OverlayView(),
//        auto_show = true;
//
//    overlay.setMap(this.map);
//
//    if (options.auto_show != null) {
//        auto_show = options.auto_show;
//    }
//
//    overlay.onAdd = function() {
//        var el = document.createElement('div');
//
//        el.style.borderStyle = "none";
//        el.style.borderWidth = "0px";
//        el.style.position = "absolute";
//        el.style.zIndex = 100;
//        el.innerHTML = options.content;
//
//        overlay.el = el;
//
//        if (!options.layer) {
//            options.layer = 'overlayLayer';
//        }
//
//        var panes = this.getPanes(),
//            overlayLayer = panes[options.layer],
//            stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];
//
//        overlayLayer.appendChild(el);
//
//        for (var ev = 0; ev < stop_overlay_events.length; ev++) {
//            (function(object, name) {
//                google.maps.event.addDomListener(object, name, function(e){
//                    if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
//                        e.cancelBubble = true;
//                        e.returnValue = false;
//                    }
//                    else {
//                        e.stopPropagation();
//                    }
//                });
//            })(el, stop_overlay_events[ev]);
//        }
//
//        google.maps.event.trigger(this, 'ready');
//    };
//
//    overlay.draw = function() {
//        var projection = this.getProjection(),
//            pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));
//
//        options.horizontalOffset = options.horizontalOffset || 0;
//        options.verticalOffset = options.verticalOffset || 0;
//
//        var el = overlay.el,
//            content = el.children[0],
//            content_height = content.clientHeight,
//            content_width = content.clientWidth;
//
//        switch (options.verticalAlign) {
//            case 'top':
//                el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
//                break;
//            default:
//            case 'middle':
//                el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
//                break;
//            case 'bottom':
//                el.style.top = (pixel.y + options.verticalOffset) + 'px';
//                break;
//        }
//
//        switch (options.horizontalAlign) {
//            case 'left':
//                el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
//                break;
//            default:
//            case 'center':
//                el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
//                break;
//            case 'right':
//                el.style.left = (pixel.x + options.horizontalOffset) + 'px';
//                break;
//        }
//
//        el.style.display = auto_show ? 'block' : 'none';
//
//        if (!auto_show) {
//            options.show.apply(this, [el]);
//        }
//    };
//
//    overlay.onRemove = function() {
//        var el = overlay.el;
//
//        if (options.remove) {
//            options.remove.apply(this, [el]);
//        }
//        else {
//            overlay.el.parentNode.removeChild(overlay.el);
//            overlay.el = null;
//        }
//    };
//
//    this.overlays.push(overlay);
//    return overlay;
//};
//
//GMaps.prototype.removeOverlay = function(overlay) {
//    for (var i = 0; i < this.overlays.length; i++) {
//        if (this.overlays[i] === overlay) {
//            this.overlays[i].setMap(null);
//            this.overlays.splice(i, 1);
//
//            break;
//        }
//    }
//};
//
//GMaps.prototype.removeOverlays = function() {
//    for (var i = 0, item; item = this.overlays[i]; i++) {
//        item.setMap(null);
//    }
//
//    this.overlays = [];
//};
//GMaps.prototype.drawPolyline = function(options) {
//    var path = [],
//        points = options.path;
//
//    if (points.length) {
//        if (points[0][0] === undefined) {
//            path = points;
//        }
//        else {
//            for (var i=0, latlng; latlng=points[i]; i++) {
//                path.push(new google.maps.LatLng(latlng[0], latlng[1]));
//            }
//        }
//    }
//
//    var polyline_options = {
//        map: this.map,
//        path: path,
//        strokeColor: options.strokeColor,
//        strokeOpacity: options.strokeOpacity,
//        strokeWeight: options.strokeWeight,
//        geodesic: options.geodesic,
//        clickable: true,
//        editable: false,
//        visible: true
//    };
//
//    if (options.hasOwnProperty("clickable")) {
//        polyline_options.clickable = options.clickable;
//    }
//
//    if (options.hasOwnProperty("editable")) {
//        polyline_options.editable = options.editable;
//    }
//
//    if (options.hasOwnProperty("icons")) {
//        polyline_options.icons = options.icons;
//    }
//
//    if (options.hasOwnProperty("zIndex")) {
//        polyline_options.zIndex = options.zIndex;
//    }
//
//    var polyline = new google.maps.Polyline(polyline_options);
//
//    var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
//
//    for (var ev = 0; ev < polyline_events.length; ev++) {
//        (function(object, name) {
//            if (options[name]) {
//                google.maps.event.addListener(object, name, function(e){
//                    options[name].apply(this, [e]);
//                });
//            }
//        })(polyline, polyline_events[ev]);
//    }
//
//    this.polylines.push(polyline);
//
//    GMaps.fire('polyline_added', polyline, this);
//
//    return polyline;
//};
//
//GMaps.prototype.removePolyline = function(polyline) {
//    for (var i = 0; i < this.polylines.length; i++) {
//        if (this.polylines[i] === polyline) {
//            this.polylines[i].setMap(null);
//            this.polylines.splice(i, 1);
//
//            GMaps.fire('polyline_removed', polyline, this);
//
//            break;
//        }
//    }
//};
//
//GMaps.prototype.removePolylines = function() {
//    for (var i = 0, item; item = this.polylines[i]; i++) {
//        item.setMap(null);
//    }
//
//    this.polylines = [];
//};
//
//GMaps.prototype.drawCircle = function(options) {
//    options =  extend_object({
//        map: this.map,
//        center: new google.maps.LatLng(options.lat, options.lng)
//    }, options);
//
//    delete options.lat;
//    delete options.lng;
//
//    var polygon = new google.maps.Circle(options),
//        polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
//
//    for (var ev = 0; ev < polygon_events.length; ev++) {
//        (function(object, name) {
//            if (options[name]) {
//                google.maps.event.addListener(object, name, function(e){
//                    options[name].apply(this, [e]);
//                });
//            }
//        })(polygon, polygon_events[ev]);
//    }
//
//    this.polygons.push(polygon);
//
//    return polygon;
//};
//
//GMaps.prototype.drawRectangle = function(options) {
//    options = extend_object({
//        map: this.map
//    }, options);
//
//    var latLngBounds = new google.maps.LatLngBounds(
//        new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
//        new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
//    );
//
//    options.bounds = latLngBounds;
//
//    var polygon = new google.maps.Rectangle(options),
//        polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
//
//    for (var ev = 0; ev < polygon_events.length; ev++) {
//        (function(object, name) {
//            if (options[name]) {
//                google.maps.event.addListener(object, name, function(e){
//                    options[name].apply(this, [e]);
//                });
//            }
//        })(polygon, polygon_events[ev]);
//    }
//
//    this.polygons.push(polygon);
//
//    return polygon;
//};
//
//GMaps.prototype.drawPolygon = function(options) {
//    var useGeoJSON = false;
//
//    if(options.hasOwnProperty("useGeoJSON")) {
//        useGeoJSON = options.useGeoJSON;
//    }
//
//    delete options.useGeoJSON;
//
//    options = extend_object({
//        map: this.map
//    }, options);
//
//    if (useGeoJSON == false) {
//        options.paths = [options.paths.slice(0)];
//    }
//
//    if (options.paths.length > 0) {
//        if (options.paths[0].length > 0) {
//            options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
//        }
//    }
//
//    var polygon = new google.maps.Polygon(options),
//        polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];
//
//    for (var ev = 0; ev < polygon_events.length; ev++) {
//        (function(object, name) {
//            if (options[name]) {
//                google.maps.event.addListener(object, name, function(e){
//                    options[name].apply(this, [e]);
//                });
//            }
//        })(polygon, polygon_events[ev]);
//    }
//
//    this.polygons.push(polygon);
//
//    GMaps.fire('polygon_added', polygon, this);
//
//    return polygon;
//};
//
//GMaps.prototype.removePolygon = function(polygon) {
//    for (var i = 0; i < this.polygons.length; i++) {
//        if (this.polygons[i] === polygon) {
//            this.polygons[i].setMap(null);
//            this.polygons.splice(i, 1);
//
//            GMaps.fire('polygon_removed', polygon, this);
//
//            break;
//        }
//    }
//};
//
//GMaps.prototype.removePolygons = function() {
//    for (var i = 0, item; item = this.polygons[i]; i++) {
//        item.setMap(null);
//    }
//
//    this.polygons = [];
//};
//GMaps.prototype.getFromFusionTables = function(options) {
//    var events = options.events;
//
//    delete options.events;
//
//    var fusion_tables_options = options,
//        layer = new google.maps.FusionTablesLayer(fusion_tables_options);
//
//    for (var ev in events) {
//        (function(object, name) {
//            google.maps.event.addListener(object, name, function(e) {
//                events[name].apply(this, [e]);
//            });
//        })(layer, ev);
//    }
//
//    this.layers.push(layer);
//
//    return layer;
//};
//
//GMaps.prototype.loadFromFusionTables = function(options) {
//    var layer = this.getFromFusionTables(options);
//    layer.setMap(this.map);
//
//    return layer;
//};
//
//GMaps.prototype.getFromKML = function(options) {
//    var url = options.url,
//        events = options.events;
//
//    delete options.url;
//    delete options.events;
//
//    var kml_options = options,
//        layer = new google.maps.KmlLayer(url, kml_options);
//
//    for (var ev in events) {
//        (function(object, name) {
//            google.maps.event.addListener(object, name, function(e) {
//                events[name].apply(this, [e]);
//            });
//        })(layer, ev);
//    }
//
//    this.layers.push(layer);
//
//    return layer;
//};
//
//GMaps.prototype.loadFromKML = function(options) {
//    var layer = this.getFromKML(options);
//    layer.setMap(this.map);
//
//    return layer;
//};
//
//GMaps.prototype.addLayer = function(layerName, options) {
//    //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
//    options = options || {};
//    var layer;
//
//    switch(layerName) {
//        case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
//            break;
//        case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
//            break;
//        case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
//            break;
//        case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
//            break;
//        case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
//            break;
//        case 'panoramio':
//            this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
//            layer.setTag(options.filter);
//            delete options.filter;
//
//            //click event
//            if (options.click) {
//                google.maps.event.addListener(layer, 'click', function(event) {
//                    options.click(event);
//                    delete options.click;
//                });
//            }
//            break;
//        case 'places':
//            this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);
//
//            //search and  nearbySearch callback, Both are the same
//            if (options.search || options.nearbySearch) {
//                var placeSearchRequest  = {
//                    bounds : options.bounds || null,
//                    keyword : options.keyword || null,
//                    location : options.location || null,
//                    name : options.name || null,
//                    radius : options.radius || null,
//                    rankBy : options.rankBy || null,
//                    types : options.types || null
//                };
//
//                if (options.search) {
//                    layer.search(placeSearchRequest, options.search);
//                }
//
//                if (options.nearbySearch) {
//                    layer.nearbySearch(placeSearchRequest, options.nearbySearch);
//                }
//            }
//
//            //textSearch callback
//            if (options.textSearch) {
//                var textSearchRequest  = {
//                    bounds : options.bounds || null,
//                    location : options.location || null,
//                    query : options.query || null,
//                    radius : options.radius || null
//                };
//
//                layer.textSearch(textSearchRequest, options.textSearch);
//            }
//            break;
//    }
//
//    if (layer !== undefined) {
//        if (typeof layer.setOptions == 'function') {
//            layer.setOptions(options);
//        }
//        if (typeof layer.setMap == 'function') {
//            layer.setMap(this.map);
//        }
//
//        return layer;
//    }
//};
//
//GMaps.prototype.removeLayer = function(layer) {
//    if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
//        this.singleLayers[layer].setMap(null);
//
//        delete this.singleLayers[layer];
//    }
//    else {
//        for (var i = 0; i < this.layers.length; i++) {
//            if (this.layers[i] === layer) {
//                this.layers[i].setMap(null);
//                this.layers.splice(i, 1);
//
//                break;
//            }
//        }
//    }
//};
//var travelMode, unitSystem;
//
//GMaps.prototype.getRoutes = function(options) {
//    switch (options.travelMode) {
//        case 'bicycling':
//            travelMode = google.maps.TravelMode.BICYCLING;
//            break;
//        case 'transit':
//            travelMode = google.maps.TravelMode.TRANSIT;
//            break;
//        case 'driving':
//            travelMode = google.maps.TravelMode.DRIVING;
//            break;
//        default:
//            travelMode = google.maps.TravelMode.WALKING;
//            break;
//    }
//
//    if (options.unitSystem === 'imperial') {
//        unitSystem = google.maps.UnitSystem.IMPERIAL;
//    }
//    else {
//        unitSystem = google.maps.UnitSystem.METRIC;
//    }
//
//    var base_options = {
//            avoidHighways: false,
//            avoidTolls: false,
//            optimizeWaypoints: false,
//            waypoints: []
//        },
//        request_options =  extend_object(base_options, options);
//
//    request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
//    request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
//    request_options.travelMode = travelMode;
//    request_options.unitSystem = unitSystem;
//
//    delete request_options.callback;
//
//    var self = this,
//        service = new google.maps.DirectionsService();
//
//    service.route(request_options, function(result, status) {
//        if (status === google.maps.DirectionsStatus.OK) {
//            for (var r in result.routes) {
//                if (result.routes.hasOwnProperty(r)) {
//                    self.routes.push(result.routes[r]);
//                }
//            }
//        }
//
//        if (options.callback) {
//            options.callback(self.routes);
//        }
//    });
//};
//
//GMaps.prototype.removeRoutes = function() {
//    this.routes = [];
//};
//
//GMaps.prototype.getElevations = function(options) {
//    options = extend_object({
//        locations: [],
//        path : false,
//        samples : 256
//    }, options);
//
//    if (options.locations.length > 0) {
//        if (options.locations[0].length > 0) {
//            options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
//        }
//    }
//
//    var callback = options.callback;
//    delete options.callback;
//
//    var service = new google.maps.ElevationService();
//
//    //location request
//    if (!options.path) {
//        delete options.path;
//        delete options.samples;
//
//        service.getElevationForLocations(options, function(result, status) {
//            if (callback && typeof(callback) === "function") {
//                callback(result, status);
//            }
//        });
//        //path request
//    } else {
//        var pathRequest = {
//            path : options.locations,
//            samples : options.samples
//        };
//
//        service.getElevationAlongPath(pathRequest, function(result, status) {
//            if (callback && typeof(callback) === "function") {
//                callback(result, status);
//            }
//        });
//    }
//};
//
//GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;
//
//GMaps.prototype.drawRoute = function(options) {
//    var self = this;
//
//    this.getRoutes({
//        origin: options.origin,
//        destination: options.destination,
//        travelMode: options.travelMode,
//        waypoints: options.waypoints,
//        unitSystem: options.unitSystem,
//        callback: function(e) {
//            if (e.length > 0) {
//                self.drawPolyline({
//                    path: e[e.length - 1].overview_path,
//                    strokeColor: options.strokeColor,
//                    strokeOpacity: options.strokeOpacity,
//                    strokeWeight: options.strokeWeight
//                });
//
//                if (options.callback) {
//                    options.callback(e[e.length - 1]);
//                }
//            }
//        }
//    });
//};
//
//GMaps.prototype.travelRoute = function(options) {
//    if (options.origin && options.destination) {
//        this.getRoutes({
//            origin: options.origin,
//            destination: options.destination,
//            travelMode: options.travelMode,
//            waypoints : options.waypoints,
//            callback: function(e) {
//                //start callback
//                if (e.length > 0 && options.start) {
//                    options.start(e[e.length - 1]);
//                }
//
//                //step callback
//                if (e.length > 0 && options.step) {
//                    var route = e[e.length - 1];
//                    if (route.legs.length > 0) {
//                        var steps = route.legs[0].steps;
//                        for (var i=0, step; step=steps[i]; i++) {
//                            step.step_number = i;
//                            options.step(step, (route.legs[0].steps.length - 1));
//                        }
//                    }
//                }
//
//                //end callback
//                if (e.length > 0 && options.end) {
//                    options.end(e[e.length - 1]);
//                }
//            }
//        });
//    }
//    else if (options.route) {
//        if (options.route.legs.length > 0) {
//            var steps = options.route.legs[0].steps;
//            for (var i=0, step; step=steps[i]; i++) {
//                step.step_number = i;
//                options.step(step);
//            }
//        }
//    }
//};
//
//GMaps.prototype.drawSteppedRoute = function(options) {
//    var self = this;
//
//    if (options.origin && options.destination) {
//        this.getRoutes({
//            origin: options.origin,
//            destination: options.destination,
//            travelMode: options.travelMode,
//            waypoints : options.waypoints,
//            callback: function(e) {
//                //start callback
//                if (e.length > 0 && options.start) {
//                    options.start(e[e.length - 1]);
//                }
//
//                //step callback
//                if (e.length > 0 && options.step) {
//                    var route = e[e.length - 1];
//                    if (route.legs.length > 0) {
//                        var steps = route.legs[0].steps;
//                        for (var i=0, step; step=steps[i]; i++) {
//                            step.step_number = i;
//                            self.drawPolyline({
//                                path: step.path,
//                                strokeColor: options.strokeColor,
//                                strokeOpacity: options.strokeOpacity,
//                                strokeWeight: options.strokeWeight
//                            });
//                            options.step(step, (route.legs[0].steps.length - 1));
//                        }
//                    }
//                }
//
//                //end callback
//                if (e.length > 0 && options.end) {
//                    options.end(e[e.length - 1]);
//                }
//            }
//        });
//    }
//    else if (options.route) {
//        if (options.route.legs.length > 0) {
//            var steps = options.route.legs[0].steps;
//            for (var i=0, step; step=steps[i]; i++) {
//                step.step_number = i;
//                self.drawPolyline({
//                    path: step.path,
//                    strokeColor: options.strokeColor,
//                    strokeOpacity: options.strokeOpacity,
//                    strokeWeight: options.strokeWeight
//                });
//                options.step(step);
//            }
//        }
//    }
//};
//
//GMaps.Route = function(options) {
//    this.origin = options.origin;
//    this.destination = options.destination;
//    this.waypoints = options.waypoints;
//
//    this.map = options.map;
//    this.route = options.route;
//    this.step_count = 0;
//    this.steps = this.route.legs[0].steps;
//    this.steps_length = this.steps.length;
//
//    this.polyline = this.map.drawPolyline({
//        path: new google.maps.MVCArray(),
//        strokeColor: options.strokeColor,
//        strokeOpacity: options.strokeOpacity,
//        strokeWeight: options.strokeWeight
//    }).getPath();
//};
//
//GMaps.Route.prototype.getRoute = function(options) {
//    var self = this;
//
//    this.map.getRoutes({
//        origin : this.origin,
//        destination : this.destination,
//        travelMode : options.travelMode,
//        waypoints : this.waypoints || [],
//        callback : function() {
//            self.route = e[0];
//
//            if (options.callback) {
//                options.callback.call(self);
//            }
//        }
//    });
//};
//
//GMaps.Route.prototype.back = function() {
//    if (this.step_count > 0) {
//        this.step_count--;
//        var path = this.route.legs[0].steps[this.step_count].path;
//
//        for (var p in path){
//            if (path.hasOwnProperty(p)){
//                this.polyline.pop();
//            }
//        }
//    }
//};
//
//GMaps.Route.prototype.forward = function() {
//    if (this.step_count < this.steps_length) {
//        var path = this.route.legs[0].steps[this.step_count].path;
//
//        for (var p in path){
//            if (path.hasOwnProperty(p)){
//                this.polyline.push(path[p]);
//            }
//        }
//        this.step_count++;
//    }
//};
//GMaps.prototype.checkGeofence = function(lat, lng, fence) {
//    return fence.containsLatLng(new google.maps.LatLng(lat, lng));
//};
//
//GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
//    if (marker.fences) {
//        for (var i = 0, fence; fence = marker.fences[i]; i++) {
//            var pos = marker.getPosition();
//            if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
//                outside_callback(marker, fence);
//            }
//        }
//    }
//};
//GMaps.prototype.toImage = function(options) {
//    var options = options || {},
//        static_map_options = {};
//
//    static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
//    static_map_options['lat'] = this.getCenter().lat();
//    static_map_options['lng'] = this.getCenter().lng();
//
//    if (this.markers.length > 0) {
//        static_map_options['markers'] = [];
//
//        for (var i = 0; i < this.markers.length; i++) {
//            static_map_options['markers'].push({
//                lat: this.markers[i].getPosition().lat(),
//                lng: this.markers[i].getPosition().lng()
//            });
//        }
//    }
//
//    if (this.polylines.length > 0) {
//        var polyline = this.polylines[0];
//
//        static_map_options['polyline'] = {};
//        static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
//        static_map_options['polyline']['strokeColor'] = polyline.strokeColor
//        static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
//        static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
//    }
//
//    return GMaps.staticMapURL(static_map_options);
//};
//
//GMaps.staticMapURL = function(options){
//    var parameters = [],
//        data,
//        static_root = 'http://maps.googleapis.com/maps/api/staticmap';
//
//    if (options.url) {
//        static_root = options.url;
//        delete options.url;
//    }
//
//    static_root += '?';
//
//    var markers = options.markers;
//
//    delete options.markers;
//
//    if (!markers && options.marker) {
//        markers = [options.marker];
//        delete options.marker;
//    }
//
//    var polyline = options.polyline;
//    delete options.polyline;
//
//    /** Map options **/
//    if (options.center) {
//        parameters.push('center=' + options.center);
//        delete options.center;
//    }
//    else if (options.address) {
//        parameters.push('center=' + options.address);
//        delete options.address;
//    }
//    else if (options.lat) {
//        parameters.push(['center=', options.lat, ',', options.lng].join(''));
//        delete options.lat;
//        delete options.lng;
//    }
//    else if (options.visible) {
//        var visible = encodeURI(options.visible.join('|'));
//        parameters.push('visible=' + visible);
//    }
//
//    var size = options.size;
//    if (size) {
//        if (size.join) {
//            size = size.join('x');
//        }
//        delete options.size;
//    }
//    else {
//        size = '630x300';
//    }
//    parameters.push('size=' + size);
//
//    if (!options.zoom) {
//        options.zoom = 15;
//    }
//
//    var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
//    delete options.sensor;
//    parameters.push('sensor=' + sensor);
//
//    for (var param in options) {
//        if (options.hasOwnProperty(param)) {
//            parameters.push(param + '=' + options[param]);
//        }
//    }
//
//    /** Markers **/
//    if (markers) {
//        var marker, loc;
//
//        for (var i=0; data=markers[i]; i++) {
//            marker = [];
//
//            if (data.size && data.size !== 'normal') {
//                marker.push('size:' + data.size);
//            }
//            else if (data.icon) {
//                marker.push('icon:' + encodeURI(data.icon));
//            }
//
//            if (data.color) {
//                marker.push('color:' + data.color.replace('#', '0x'));
//            }
//
//            if (data.label) {
//                marker.push('label:' + data.label[0].toUpperCase());
//            }
//
//            loc = (data.address ? data.address : data.lat + ',' + data.lng);
//
//            if (marker.length || i === 0) {
//                marker.push(loc);
//                marker = marker.join('|');
//                parameters.push('markers=' + encodeURI(marker));
//            }
//            // New marker without styles
//            else {
//                marker = parameters.pop() + encodeURI('|' + loc);
//                parameters.push(marker);
//            }
//        }
//    }
//
//    /** Polylines **/
//    function parseColor(color, opacity) {
//        if (color[0] === '#'){
//            color = color.replace('#', '0x');
//
//            if (opacity) {
//                opacity = parseFloat(opacity);
//                opacity = Math.min(1, Math.max(opacity, 0));
//                if (opacity === 0) {
//                    return '0x00000000';
//                }
//                opacity = (opacity * 255).toString(16);
//                if (opacity.length === 1) {
//                    opacity += opacity;
//                }
//
//                color = color.slice(0,8) + opacity;
//            }
//        }
//        return color;
//    }
//
//    if (polyline) {
//        data = polyline;
//        polyline = [];
//
//        if (data.strokeWeight) {
//            polyline.push('weight:' + parseInt(data.strokeWeight, 10));
//        }
//
//        if (data.strokeColor) {
//            var color = parseColor(data.strokeColor, data.strokeOpacity);
//            polyline.push('color:' + color);
//        }
//
//        if (data.fillColor) {
//            var fillcolor = parseColor(data.fillColor, data.fillOpacity);
//            polyline.push('fillcolor:' + fillcolor);
//        }
//
//        var path = data.path;
//        if (path.join) {
//            for (var j=0, pos; pos=path[j]; j++) {
//                polyline.push(pos.join(','));
//            }
//        }
//        else {
//            polyline.push('enc:' + path);
//        }
//
//        polyline = polyline.join('|');
//        parameters.push('path=' + encodeURI(polyline));
//    }
//
//    parameters = parameters.join('&');
//    return static_root + parameters;
//};
//GMaps.prototype.addMapType = function(mapTypeId, options) {
//    if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
//        options.tileSize = options.tileSize || new google.maps.Size(256, 256);
//
//        var mapType = new google.maps.ImageMapType(options);
//
//        this.map.mapTypes.set(mapTypeId, mapType);
//    }
//    else {
//        throw "'getTileUrl' function required.";
//    }
//};
//
//GMaps.prototype.addOverlayMapType = function(options) {
//    if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
//        var overlayMapTypeIndex = options.index;
//
//        delete options.index;
//
//        this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
//    }
//    else {
//        throw "'getTile' function required.";
//    }
//};
//
//GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
//    this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
//};
//GMaps.prototype.addStyle = function(options) {
//    var styledMapType = new google.maps.StyledMapType(options.styles, options.styledMapName);
//
//    this.map.mapTypes.set(options.mapTypeId, styledMapType);
//};
//
//GMaps.prototype.setStyle = function(mapTypeId) {
//    this.map.setMapTypeId(mapTypeId);
//};
//GMaps.prototype.createPanorama = function(streetview_options) {
//    if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
//        streetview_options.lat = this.getCenter().lat();
//        streetview_options.lng = this.getCenter().lng();
//    }
//
//    this.panorama = GMaps.createPanorama(streetview_options);
//
//    this.map.setStreetView(this.panorama);
//
//    return this.panorama;
//};
//
//GMaps.createPanorama = function(options) {
//    var el = getElementById(options.el, options.context);
//
//    options.position = new google.maps.LatLng(options.lat, options.lng);
//
//    delete options.el;
//    delete options.context;
//    delete options.lat;
//    delete options.lng;
//
//    var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
//        streetview_options = extend_object({visible : true}, options);
//
//    for (var i = 0; i < streetview_events.length; i++) {
//        delete streetview_options[streetview_events[i]];
//    }
//
//    var panorama = new google.maps.StreetViewPanorama(el, streetview_options);
//
//    for (var i = 0; i < streetview_events.length; i++) {
//        (function(object, name) {
//            if (options[name]) {
//                google.maps.event.addListener(object, name, function(){
//                    options[name].apply(this);
//                });
//            }
//        })(panorama, streetview_events[i]);
//    }
//
//    return panorama;
//};
//GMaps.prototype.on = function(event_name, handler) {
//    return GMaps.on(event_name, this, handler);
//};
//
//GMaps.prototype.off = function(event_name) {
//    GMaps.off(event_name, this);
//};
//
//GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];
//
//GMaps.on = function(event_name, object, handler) {
//    if (GMaps.custom_events.indexOf(event_name) == -1) {
//        return google.maps.event.addListener(object, event_name, handler);
//    }
//    else {
//        var registered_event = {
//            handler : handler,
//            eventName : event_name
//        };
//
//        object.registered_events[event_name] = object.registered_events[event_name] || [];
//        object.registered_events[event_name].push(registered_event);
//
//        return registered_event;
//    }
//};
//
//GMaps.off = function(event_name, object) {
//    if (GMaps.custom_events.indexOf(event_name) == -1) {
//        google.maps.event.clearListeners(object, event_name);
//    }
//    else {
//        object.registered_events[event_name] = [];
//    }
//};
//
//GMaps.fire = function(event_name, object, scope) {
//    if (GMaps.custom_events.indexOf(event_name) == -1) {
//        google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
//    }
//    else {
//        if(event_name in scope.registered_events) {
//            var firing_events = scope.registered_events[event_name];
//
//            for(var i = 0; i < firing_events.length; i++) {
//                (function(handler, scope, object) {
//                    handler.apply(scope, [object]);
//                })(firing_events[i]['handler'], scope, object);
//            }
//        }
//    }
//};
//GMaps.geolocate = function(options) {
//    var complete_callback = options.always || options.complete;
//
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(function(position) {
//            options.success(position);
//
//            if (complete_callback) {
//                complete_callback();
//            }
//        }, function(error) {
//            options.error(error);
//
//            if (complete_callback) {
//                complete_callback();
//            }
//        }, options.options);
//    }
//    else {
//        options.not_supported();
//
//        if (complete_callback) {
//            complete_callback();
//        }
//    }
//};
//
//GMaps.geocode = function(options) {
//    this.geocoder = new google.maps.Geocoder();
//    var callback = options.callback;
//    if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
//        options.latLng = new google.maps.LatLng(options.lat, options.lng);
//    }
//
//    delete options.lat;
//    delete options.lng;
//    delete options.callback;
//
//    this.geocoder.geocode(options, function(results, status) {
//        callback(results, status);
//    });
//};
////==========================
//// Polygon containsLatLng
//// https://github.com/tparkin/Google-Maps-Point-in-Polygon
//// Poygon getBounds extension - google-maps-extensions
//// http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
//if (!google.maps.Polygon.prototype.getBounds) {
//    google.maps.Polygon.prototype.getBounds = function(latLng) {
//        var bounds = new google.maps.LatLngBounds();
//        var paths = this.getPaths();
//        var path;
//
//        for (var p = 0; p < paths.getLength(); p++) {
//            path = paths.getAt(p);
//            for (var i = 0; i < path.getLength(); i++) {
//                bounds.extend(path.getAt(i));
//            }
//        }
//
//        return bounds;
//    };
//}
//
//if (!google.maps.Polygon.prototype.containsLatLng) {
//    // Polygon containsLatLng - method to determine if a latLng is within a polygon
//    google.maps.Polygon.prototype.containsLatLng = function(latLng) {
//        // Exclude points outside of bounds as there is no way they are in the poly
//        var bounds = this.getBounds();
//
//        if (bounds !== null && !bounds.contains(latLng)) {
//            return false;
//        }
//
//        // Raycast point in polygon method
//        var inPoly = false;
//
//        var numPaths = this.getPaths().getLength();
//        for (var p = 0; p < numPaths; p++) {
//            var path = this.getPaths().getAt(p);
//            var numPoints = path.getLength();
//            var j = numPoints - 1;
//
//            for (var i = 0; i < numPoints; i++) {
//                var vertex1 = path.getAt(i);
//                var vertex2 = path.getAt(j);
//
//                if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
//                    if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
//                        inPoly = !inPoly;
//                    }
//                }
//
//                j = i;
//            }
//        }
//
//        return inPoly;
//    };
//}
//
//google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
//    return this.contains(latLng);
//};
//
//google.maps.Marker.prototype.setFences = function(fences) {
//    this.fences = fences;
//};
//
//google.maps.Marker.prototype.addFence = function(fence) {
//    this.fences.push(fence);
//};
//
//google.maps.Marker.prototype.getId = function() {
//    return this['__gm_id'];
//};
//
////==========================
//// Array indexOf
//// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
//if (!Array.prototype.indexOf) {
//    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
//        "use strict";
//        if (this == null) {
//            throw new TypeError();
//        }
//        var t = Object(this);
//        var len = t.length >>> 0;
//        if (len === 0) {
//            return -1;
//        }
//        var n = 0;
//        if (arguments.length > 1) {
//            n = Number(arguments[1]);
//            if (n != n) { // shortcut for verifying if it's NaN
//                n = 0;
//            } else if (n != 0 && n != Infinity && n != -Infinity) {
//                n = (n > 0 || -1) * Math.floor(Math.abs(n));
//            }
//        }
//        if (n >= len) {
//            return -1;
//        }
//        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
//        for (; k < len; k++) {
//            if (k in t && t[k] === searchElement) {
//                return k;
//            }
//        }
//        return -1;
//    }
//}
//;
(function() {
  $(document).on('ready page:load', function() {
    window.GoogleMap = new GMaps({
      el: '#map',
      lat: 26.194531,
      lng: -98.185870,
      zoom: 14,
      scrollwheel: false,
      click: function() {
        return console.log('click');
      }
    });
    GoogleMap.addMarker({
      lat: 26.194531,
      lng: -98.185870,
      title: 'Create the Bridge, Inc'
    });
    return GoogleMap.setOptions();
  });

}).call(this);
(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
ga('create','UA-XXXXX-X');ga('send','pageview');
(function() {
  $(document).on('ready page:load', function() {
    console.log('mandrill handler loaded');
    return $('#mandrill-form').submit(function(event) {
      var $email, $msg, $name, $phone;
      console.log('should be submitting');
      $email = $(this).find('#email').val();
      $name = $(this).find('#name').val();
      $phone = $(this).find('#phone').val();
      $msg = $(this).find('#msg').val();
      $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          key: 'rHKJehDr9PDI4BEU0U7h1w',
          message: {
            from_email: "luisedtr@DoNotReply",
            from_name: $name,
            headers: {
              'Reply-To': $email
            },
            subject: 'Website Contact Form Submission',
            text: 'Message:' + $msg + 'Phone:' + $phone + 'Email:' + $email + 'Name:' + $name,
            to: [
              {
                email: 'luisedtr@createthebridge.com',
                type: 'to'
              }
            ]
          }
        },
        beforeSend: function() {
          return $('#mandrill-form').find('input[type=submit]').prop('disabled', true);
        },
        error: function(error, error2) {
          alert('It failed, yo');
          return typeof console !== "undefined" && console !== null ? console.log('Errors: %O | %O', error, error2) : void 0;
        },
        success: function(data) {
          return alert('Your message has been sent. Thank you!');
        },
        complete: function() {
          $('#mandrill-form').find('input[type=submit]').prop('disabled', false);
          $('#name').val('');
          $('#email').val('');
          $('#phone').val('');
          return $('#msg').val('');
        }
      });
      return event.preventDefault();
    });
  });

}).call(this);
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */

;



window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    enableClasses = true,

    docElement = document.documentElement,

    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    inputElem  = document.createElement('input')  ,

    smile = ':)',

    toString = {}.toString,

    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),



    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),

    ns = {'svg': 'http://www.w3.org/2000/svg'},

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, 


    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
                body = document.body,
                fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
                      while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

                style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
          (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
                fakeBody.style.background = '';
                fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
        if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },



    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

            var isSupported = eventName in element;

        if ( !isSupported ) {
                if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

                    if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),


    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { 
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }


    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    function setCss( str ) {
        mStyle.cssText = str;
    }

    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    function is( obj, type ) {
        return typeof obj === type;
    }

    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }

    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                            if (elem === false) return props[i];

                            if (is(item, 'function')){
                                return item.bind(elem || obj);
                }

                            return item;
            }
        }
        return false;
    }

    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

            if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

            } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };



    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };


    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };



    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    tests['rgba'] = function() {
        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
            setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
                setCss('background:url(https://),url(https://),red url(https://)');

            return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };



    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
                setCssAll('opacity:.55');

                    return (/^0.55$/).test(mStyle.opacity);
    };


    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
                       (str1 + '-webkit- '.split(' ').join(str2 + str1) +
                       prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

                        if ( ret && 'webkitPerspective' in docElement.style ) {

                      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };



    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };

    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };
    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

            try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                            bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                                                    bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };


    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    function webforms() {
                                            Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
                                  attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
                            Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                                                    if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                                        bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                                                                                  (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                                                                                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                                        bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                                        bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        }
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
                                    featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    Modernizr.input || webforms();


     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
                                              return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; 
     };


    setCss('');
    modElem = inputElem = null;

    ;(function(window, document) {
                var version = '3.7.0';

            var options = window.html5 || {};

            var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

            var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

            var supportsHtml5Styles;

            var expando = '_html5shiv';

            var expanID = 0;

            var expandoData = {};

            var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
                    supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
                        (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
                    supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

            function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

            function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

            function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

            function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

                                                    return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

            function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

            function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
                    if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                                                                                getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

            function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                                                                'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                                                                    'mark{background:#FF0;color:#000}' +
                                                                                    'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

            var html5 = {

                'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

                'version': version,

                'shivCSS': (options.shivCSS !== false),

                'supportsUnknownElements': supportsUnknownElements,

                'shivMethods': (options.shivMethods !== false),

                'type': 'default',

                'shivDocument': shivDocument,

                createElement: createElement,

                createDocumentFragment: createDocumentFragment
        };

            window.html5 = html5;

            shivDocument(document);

    }(this, document));

    Modernizr._version      = version;

    Modernizr._prefixes     = prefixes;
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;


    Modernizr.hasEvent      = isEventSupported;

    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };

    Modernizr.testAllProps  = testPropsAll;


    Modernizr.testStyles    = injectElementWithStyles;
    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
            return testPropsAll(prop, obj, elem);
      }
    };


    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                                                    (enableClasses ? ' js ' + classes.join(' ') : '');

    return Modernizr;

})(this, this.document);
/*yepnope1.5.4|WTFPL*/
(function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}})(this,document);
Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0));};
;
/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */


;(function($, window, document, undefined){

    // our plugin constructor
    var OnePageNav = function(elem, options){
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };

    // the plugin prototype
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },

        init: function() {
            // Introduce defaults that can be extended either
            // globally or using an object literal.
            this.config = $.extend({}, this.defaults, this.options, this.metadata);

            this.$nav = this.$elem.find(this.config.navItems);

            //Filter any links out of the nav
            if(this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }

            //Handle clicks on the nav
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

            //Get the section positions
            this.getPositions();

            //Handle scroll changes
            this.bindInterval();

            //Update the positions on resize too
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

            return this;
        },

        adjustNav: function(self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },

        bindInterval: function() {
            var self = this;
            var docHeight;

            self.$win.on('scroll.onePageNav', function() {
                self.didScroll = true;
            });

            self.t = setInterval(function() {
                docHeight = self.$doc.height();

                //If it was scrolled
                if(self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }

                //If the document height changes
                if(docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },

        getHash: function($link) {
            return $link.attr('href').split('#')[1];
        },

        getPositions: function() {
            var self = this;
            var linkHref;
            var topPos;
            var $target;

            self.$nav.each(function() {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);

                if($target.length) {
                    topPos = window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
//                    topPos = $target.offset().top;
//                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },

        getSection: function(windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

            for(var section in this.sections) {
                if((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }

            return returnValue;
        },

        handleClick: function(e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);

            if(!$parent.hasClass(self.config.currentClass)) {
                //Start callback
                if(self.config.begin) {
                    self.config.begin();
                }

                //Change the highlighted nav item
                self.adjustNav(self, $parent);

                //Removing the auto-adjust on scroll
                self.unbindInterval();

                //Scroll to the correct position
                self.scrollTo(newLoc, function() {
                    //Do we need to change the hash?
                    if(self.config.changeHash) {
                        window.location.hash = newLoc;
                    }

                    //Add the auto-adjust on scroll back in
                    self.bindInterval();

                    //End callback
                    if(self.config.end) {
                        self.config.end();
                    }
                });
            }

            e.preventDefault();
        },

        scrollChange: function() {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;

            //If the position is set
            if(position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

                //If it's not already the current section
                if(!$parent.hasClass(this.config.currentClass)) {
                    //Change the highlighted nav item
                    this.adjustNav(this, $parent);

                    //If there is a scrollChange callback
                    if(this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },

        scrollTo: function(target, callback) {
            var offset = $(target).offset().top;

            $('html, body').animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback);
        },

        unbindInterval: function() {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };

    OnePageNav.defaults = OnePageNav.prototype.defaults;

    $.fn.onePageNav = function(options) {
        return this.each(function() {
            new OnePageNav(this, options).init();
        });
    };

})( jQuery, window , document );
(function() {
  $(document).ready(function() {
    return $('.alt-top-bar-container, .mobile-navigation').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      begin: function() {},
      end: function() {},
      scrollChange: function(item) {}
    });
  });

}).call(this);
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function($) {
      return factory(root, $);
    });
  } else if (typeof exports === 'object') {
    factory(root, require('jquery'));
  } else {
    factory(root, root.jQuery || root.Zepto);
  }
})(this, function(global, $) {

  'use strict';

  /**
   * Name of the plugin
   * @private
   * @type {String}
   */
  var pluginName = 'remodal';

  /**
   * Namespace for CSS and events
   * @private
   * @type {String}
   */
  var namespace = global.remodalGlobals && global.remodalGlobals.namespace || pluginName;

  /**
   * Default settings
   * @private
   * @type {Object}
   */
  var defaults = $.extend({
    hashTracking: true,
    closeOnConfirm: true,
    closeOnCancel: true,
    closeOnEscape: true,
    closeOnAnyClick: true
  }, global.remodalGlobals && global.remodalGlobals.defaults);

  /**
   * Current modal
   * @private
   * @type {Remodal}
   */
  var current;

  /**
   * Scrollbar position
   * @private
   * @type {Number}
   */
  var scrollTop;

  /**
   * Get a transition duration in ms
   * @private
   * @param {jQuery} $elem
   * @return {Number}
   */
  function getTransitionDuration($elem) {
    var duration = $elem.css('transition-duration') ||
        $elem.css('-webkit-transition-duration') ||
        $elem.css('-moz-transition-duration') ||
        $elem.css('-o-transition-duration') ||
        $elem.css('-ms-transition-duration') ||
        '0s';

    var delay = $elem.css('transition-delay') ||
        $elem.css('-webkit-transition-delay') ||
        $elem.css('-moz-transition-delay') ||
        $elem.css('-o-transition-delay') ||
        $elem.css('-ms-transition-delay') ||
        '0s';

    var max;
    var len;
    var num;
    var i;

    duration = duration.split(', ');
    delay = delay.split(', ');

    // The duration length is the same as the delay length
    for (i = 0, len = duration.length, max = Number.NEGATIVE_INFINITY; i < len; i++) {
      num = parseFloat(duration[i]) + parseFloat(delay[i]);

      if (num > max) {
        max = num;
      }
    }

    return num * 1000;
  }

  /**
   * Get a scrollbar width
   * @private
   * @return {Number}
   */
  function getScrollbarWidth() {
    if ($(document.body).height() <= $(window).height()) {
      return 0;
    }

    var outer = document.createElement('div');
    var inner = document.createElement('div');
    var widthNoScroll;
    var widthWithScroll;

    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    document.body.appendChild(outer);

    widthNoScroll = outer.offsetWidth;

    // Force scrollbars
    outer.style.overflow = 'scroll';

    // Add inner div
    inner.style.width = '100%';
    outer.appendChild(inner);

    widthWithScroll = inner.offsetWidth;

    // Remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  /**
   * Lock the screen
   * @private
   */
  function lockScreen() {
    var $html = $('html');
    var lockedClass = namespace + '-is-locked';
    var paddingRight;
    var $body;

    if (!$html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) + getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.addClass(lockedClass);
    }
  }

  /**
   * Unlock the screen
   * @private
   */
  function unlockScreen() {
    var $html = $('html');
    var lockedClass = namespace + '-is-locked';
    var paddingRight;
    var $body;

    if ($html.hasClass(lockedClass)) {
      $body = $(document.body);

      // Zepto does not support '-=', '+=' in the `css` method
      paddingRight = parseInt($body.css('padding-right'), 10) - getScrollbarWidth();

      $body.css('padding-right', paddingRight + 'px');
      $html.removeClass(lockedClass);
    }
  }

  /**
   * Parse a string with options
   * @private
   * @param str
   * @returns {Object}
   */
  function parseOptions(str) {
    var obj = {};
    var arr;
    var len;
    var val;
    var i;

    // Remove spaces before and after delimiters
    str = str.replace(/\s*:\s*/g, ':').replace(/\s*,\s*/g, ',');

    // Parse a string
    arr = str.split(',');
    for (i = 0, len = arr.length; i < len; i++) {
      arr[i] = arr[i].split(':');
      val = arr[i][1];

      // Convert a string value if it is like a boolean
      if (typeof val === 'string' || val instanceof String) {
        val = val === 'true' || (val === 'false' ? false : val);
      }

      // Convert a string value if it is like a number
      if (typeof val === 'string' || val instanceof String) {
        val = !isNaN(val) ? +val : val;
      }

      obj[arr[i][0]] = val;
    }

    return obj;
  }

  /**
   * Remodal constructor
   * @param {jQuery} $modal
   * @param {Object} options
   * @constructor
   */
  function Remodal($modal, options) {
    var remodal = this;
    var tdOverlay;
    var tdModal;
    var tdBg;

    remodal.settings = $.extend({}, defaults, options);

    // Build DOM
    remodal.$body = $(document.body);
    remodal.$overlay = $('.' + namespace + '-overlay');

    if (!remodal.$overlay.length) {
      remodal.$overlay = $('<div>').addClass(namespace + '-overlay');
      remodal.$body.append(remodal.$overlay);
    }

    remodal.$bg = $('.' + namespace + '-bg');
    remodal.$closeButton = $('<a href="#"></a>').addClass(namespace + '-close');
    remodal.$wrapper = $('<div>').addClass(namespace + '-wrapper');
    remodal.$modal = $modal;
    remodal.$modal.addClass(namespace);
    remodal.$modal.css('visibility', 'visible');

    remodal.$modal.append(remodal.$closeButton);
    remodal.$wrapper.append(remodal.$modal);
    remodal.$body.append(remodal.$wrapper);
    remodal.$confirmButton = remodal.$modal.find('.' + namespace + '-confirm');
    remodal.$cancelButton = remodal.$modal.find('.' + namespace + '-cancel');

    // Calculate timeouts
    tdOverlay = getTransitionDuration(remodal.$overlay);
    tdModal = getTransitionDuration(remodal.$modal);
    tdBg = getTransitionDuration(remodal.$bg);
    remodal.td = Math.max(tdOverlay, tdModal, tdBg);

    // Add the close button event listener
    remodal.$wrapper.on('click.' + namespace, '.' + namespace + '-close', function(e) {
      e.preventDefault();

      remodal.close();
    });

    // Add the cancel button event listener
    remodal.$wrapper.on('click.' + namespace, '.' + namespace + '-cancel', function(e) {
      e.preventDefault();

      remodal.$modal.trigger('cancel');

      if (remodal.settings.closeOnCancel) {
        remodal.close('cancellation');
      }
    });

    // Add the confirm button event listener
    remodal.$wrapper.on('click.' + namespace, '.' + namespace + '-confirm', function(e) {
      e.preventDefault();

      remodal.$modal.trigger('confirm');

      if (remodal.settings.closeOnConfirm) {
        remodal.close('confirmation');
      }
    });

    // Add the keyboard event listener
    $(document).on('keyup.' + namespace, function(e) {
      if (e.keyCode === 27 && remodal.settings.closeOnEscape) {
        remodal.close();
      }
    });

    // Add the overlay event listener
    remodal.$wrapper.on('click.' + namespace, function(e) {
      var $target = $(e.target);

      if (!$target.hasClass(namespace + '-wrapper')) {
        return;
      }

      if (remodal.settings.closeOnAnyClick) {
        remodal.close();
      }
    });

    remodal.index = $[pluginName].lookup.push(remodal) - 1;
    remodal.busy = false;
  }

  /**
   * Open a modal window
   * @public
   */
  Remodal.prototype.open = function() {

    // Check if the animation was completed
    if (this.busy) {
      return;
    }

    var remodal = this;
    var id;

    remodal.busy = true;
    remodal.$modal.trigger('open');

    id = remodal.$modal.attr('data-' + pluginName + '-id');

    if (id && remodal.settings.hashTracking) {
      scrollTop = $(window).scrollTop();
      location.hash = id;
    }

    if (current && current !== remodal) {
      current.$overlay.hide();
      current.$wrapper.hide();
      current.$body.removeClass(namespace + '-is-active');
    }

    current = remodal;

    lockScreen();
    remodal.$overlay.show();
    remodal.$wrapper.show();

    setTimeout(function() {
      remodal.$body.addClass(namespace + '-is-active');
      remodal.$wrapper.scrollTop(0);

      setTimeout(function() {
        remodal.busy = false;
        remodal.$modal.trigger('opened');
      }, remodal.td + 50);
    }, 25);
  };

  /**
   * Close a modal window
   * @public
   * @param {String|undefined} reason A reason to close
   */
  Remodal.prototype.close = function(reason) {

    // Check if the animation was completed
    if (this.busy) {
      return;
    }

    var remodal = this;

    remodal.busy = true;
    remodal.$modal.trigger({
      type: 'close',
      reason: reason
    });

    if (remodal.settings.hashTracking &&
      remodal.$modal.attr('data-' + pluginName + '-id') === location.hash.substr(1)) {

      location.hash = '';
      $(window).scrollTop(scrollTop);
    }

    remodal.$body.removeClass(namespace + '-is-active');

    setTimeout(function() {
      remodal.$overlay.hide();
      remodal.$wrapper.hide();
      unlockScreen();

      remodal.busy = false;
      remodal.$modal.trigger({
        type: 'closed',
        reason: reason
      });
    }, remodal.td + 50);
  };

  /**
   * Special plugin object for instances.
   * @public
   * @type {Object}
   */
  $[pluginName] = {
    lookup: []
  };

  /**
   * Plugin constructor
   * @param {Object} options
   * @returns {JQuery}
   * @constructor
   */
  $.fn[pluginName] = function(opts) {
    var instance;
    var $elem;

    this.each(function(index, elem) {
      $elem = $(elem);

      if ($elem.data(pluginName) == null) {
        instance = new Remodal($elem, opts);
        $elem.data(pluginName, instance.index);

        if (instance.settings.hashTracking &&
          $elem.attr('data-' + pluginName + '-id') === location.hash.substr(1)) {

          instance.open();
        }
      } else {
        instance = $[pluginName].lookup[$elem.data(pluginName)];
      }
    });

    return instance;
  };

  $(document).ready(function() {

    // data-remodal-target opens a modal window with the special Id.
    $(document).on('click', '[data-' + pluginName + '-target]', function(e) {
      e.preventDefault();

      var elem = e.currentTarget;
      var id = elem.getAttribute('data-' + pluginName + '-target');
      var $target = $('[data-' + pluginName + '-id=' + id + ']');

      $[pluginName].lookup[$target.data(pluginName)].open();
    });

    // Auto initialization of modal windows.
    // They should have the 'remodal' class attribute.
    // Also you can write `data-remodal-options` attribute to pass params into the modal.
    $(document).find('.' + namespace).each(function(i, container) {
      var $container = $(container);
      var options = $container.data(pluginName + '-options');

      if (!options) {
        options = {};
      } else if (typeof options === 'string' || options instanceof String) {
        options = parseOptions(options);
      }

      $container[pluginName](options);
    });
  });

  /**
   * Hashchange handler
   * @private
   * @param {Event} e
   * @param {Boolean} [closeOnEmptyHash=true]
   */
  function hashHandler(e, closeOnEmptyHash) {
    var id = location.hash.replace('#', '');
    var instance;
    var $elem;

    if (typeof closeOnEmptyHash === 'undefined') {
      closeOnEmptyHash = true;
    }

    if (!id) {
      if (closeOnEmptyHash) {

        // Check if we have currently opened modal and animation was completed
        if (current && !current.busy && current.settings.hashTracking) {
          current.close();
        }
      }
    } else {

      // Catch syntax error if your hash is bad
      try {
        $elem = $(
          '[data-' + pluginName + '-id=' +
          id.replace(new RegExp('/', 'g'), '\\/') + ']'
        );
      } catch (err) {}

      if ($elem && $elem.length) {
        instance = $[pluginName].lookup[$elem.data(pluginName)];

        if (instance && instance.settings.hashTracking) {
          instance.open();
        }
      }

    }
  }

  $(window).bind('hashchange.' + namespace, hashHandler);

});
(function() {
  var inst;

  $(document).on('open', '.remodal', function() {
    console.log('open');
  });

  $(document).on('opened', '.remodal', function() {
    console.log('opened');
  });

  $(document).on('close', '.remodal', function(e) {
    console.log('close' + (e.reason ? ', reason: ' + e.reason : ''));
  });

  $(document).on('closed', '.remodal', function(e) {
    console.log('closed' + (e.reason ? ', reason: ' + e.reason : ''));
  });

  $(document).on('confirm', '.remodal', function() {
    console.log('confirm');
  });

  $(document).on('cancel', '.remodal', function() {
    console.log('cancel');
  });

  inst = $('[data-remodal-id=modal2]').remodal();

}).call(this);
;(function($, window, document, undefined) {

	var pluginName = 'stellar',
		defaults = {
			scrollProperty: 'scroll',
			positionProperty: 'position',
			horizontalScrolling: true,
			verticalScrolling: true,
			horizontalOffset: 0,
			verticalOffset: 0,
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			hideDistantElements: true,
			hideElement: function($elem) { $elem.hide(); },
			showElement: function($elem) { $elem.show(); }
		},

		scrollProperty = {
			scroll: {
				getLeft: function($elem) { return $elem.scrollLeft(); },
				setLeft: function($elem, val) { $elem.scrollLeft(val); },

				getTop: function($elem) { return $elem.scrollTop();	},
				setTop: function($elem, val) { $elem.scrollTop(val); }
			},
			position: {
				getLeft: function($elem) { return parseInt($elem.css('left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('top'), 10) * -1; }
			},
			margin: {
				getLeft: function($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
				getTop: function($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
			},
			transform: {
				getLeft: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
				},
				getTop: function($elem) {
					var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
					return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
				}
			}
		},

		positionProperty = {
			position: {
				setLeft: function($elem, left) { $elem.css('left', left); },
				setTop: function($elem, top) { $elem.css('top', top); }
			},
			transform: {
				setPosition: function($elem, left, startingLeft, top, startingTop) {
					$elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
				}
			}
		},

		// Returns a function which adds a vendor prefix to any CSS property name
		vendorPrefix = (function() {
			var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				style = $('script')[0].style,
				prefix = '',
				prop;

			for (prop in style) {
				if (prefixes.test(prop)) {
					prefix = prop.match(prefixes)[0];
					break;
				}
			}

			if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
			if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

			return function(property) {
				return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
			};
		}()),

		prefixedTransform = vendorPrefix('transform'),

		supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

		setBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem, x, y) {
				$elem.css({
					'background-position-x': x,
					'background-position-y': y
				});
			} :
			function($elem, x, y) {
				$elem.css('background-position', x + ' ' + y);
			}
		),

		getBackgroundPosition = (supportsBackgroundPositionXY ?
			function($elem) {
				return [
					$elem.css('background-position-x'),
					$elem.css('background-position-y')
				];
			} :
			function($elem) {
				return $elem.css('background-position').split(' ');
			}
		),

		requestAnimFrame = (
			window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(callback) {
				setTimeout(callback, 1000 / 60);
			}
		);

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);

		this._defaults = defaults;
		this._name = pluginName;

		this.init();
	}

	Plugin.prototype = {
		init: function() {
			this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

			this._defineElements();
			this._defineGetters();
			this._defineSetters();
			this._handleWindowLoadAndResize();
			this._detectViewport();

			this.refresh({ firstLoad: true });

			if (this.options.scrollProperty === 'scroll') {
				this._handleScrollEvent();
			} else {
				this._startAnimationLoop();
			}
		},
		_defineElements: function() {
			if (this.element === document.body) this.element = window;
			this.$scrollElement = $(this.element);
			this.$element = (this.element === window ? $('body') : this.$scrollElement);
			this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()) );
		},
		_defineGetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

			this._getScrollLeft = function() {
				return scrollPropertyAdapter.getLeft(self.$scrollElement);
			};

			this._getScrollTop = function() {
				return scrollPropertyAdapter.getTop(self.$scrollElement);
			};
		},
		_defineSetters: function() {
			var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
				positionPropertyAdapter = positionProperty[self.options.positionProperty],
				setScrollLeft = scrollPropertyAdapter.setLeft,
				setScrollTop = scrollPropertyAdapter.setTop;

			this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {
				setScrollLeft(self.$scrollElement, val);
			} : $.noop);

			this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {
				setScrollTop(self.$scrollElement, val);
			} : $.noop);

			this._setPosition = positionPropertyAdapter.setPosition ||
				function($elem, left, startingLeft, top, startingTop) {
					if (self.options.horizontalScrolling) {
						positionPropertyAdapter.setLeft($elem, left, startingLeft);
					}

					if (self.options.verticalScrolling) {
						positionPropertyAdapter.setTop($elem, top, startingTop);
					}
				};
		},
		_handleWindowLoadAndResize: function() {
			var self = this,
				$window = $(window);

			if (self.options.responsive) {
				$window.bind('load.' + this.name, function() {
					self.refresh();
				});
			}

			$window.bind('resize.' + this.name, function() {
				self._detectViewport();

				if (self.options.responsive) {
					self.refresh();
				}
			});
		},
		refresh: function(options) {
			var self = this,
				oldLeft = self._getScrollLeft(),
				oldTop = self._getScrollTop();

			if (!options || !options.firstLoad) {
				this._reset();
			}

			this._setScrollLeft(0);
			this._setScrollTop(0);

			this._setOffsets();
			this._findParticles();
			this._findBackgrounds();

			// Fix for WebKit background rendering bug
			if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
				$(window).load(function() {
					var oldLeft = self._getScrollLeft(),
						oldTop = self._getScrollTop();

					self._setScrollLeft(oldLeft + 1);
					self._setScrollTop(oldTop + 1);

					self._setScrollLeft(oldLeft);
					self._setScrollTop(oldTop);
				});
			}

			this._setScrollLeft(oldLeft);
			this._setScrollTop(oldTop);
		},
		_detectViewport: function() {
			var viewportOffsets = this.$viewportElement.offset(),
				hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

			this.viewportWidth = this.$viewportElement.width();
			this.viewportHeight = this.$viewportElement.height();

			this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
			this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
		},
		_findParticles: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop();

			if (this.particles !== undefined) {
				for (var i = this.particles.length - 1; i >= 0; i--) {
					this.particles[i].$element.data('stellar-elementIsActive', undefined);
				}
			}

			this.particles = [];

			if (!this.options.parallaxElements) return;

			this.$element.find('[data-stellar-ratio]').each(function(i) {
				var $this = $(this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					$offsetParent,
					offsetLeft,
					offsetTop,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-elementIsActive')) {
					$this.data('stellar-elementIsActive', this);
				} else if ($this.data('stellar-elementIsActive') !== this) {
					return;
				}

				self.options.showElement($this);

				// Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
				if (!$this.data('stellar-startingLeft')) {
					$this.data('stellar-startingLeft', $this.css('left'));
					$this.data('stellar-startingTop', $this.css('top'));
				} else {
					$this.css('left', $this.data('stellar-startingLeft'));
					$this.css('top', $this.data('stellar-startingTop'));
				}

				positionLeft = $this.position().left;
				positionTop = $this.position().top;

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft;
				offsetTop = $this.offset().top - marginTop;

				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				// Add our object to the particles collection
				self.particles.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('position') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingPositionLeft: positionLeft,
					startingPositionTop: positionTop,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
					width: $this.outerWidth(true),
					height: $this.outerHeight(true),
					isHidden: false
				});
			});
		},
		_findBackgrounds: function() {
			var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				$backgroundElements;

			this.backgrounds = [];

			if (!this.options.parallaxBackgrounds) return;

			$backgroundElements = this.$element.find('[data-stellar-background-ratio]');

			if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
			}

			$backgroundElements.each(function() {
				var $this = $(this),
					backgroundPosition = getBackgroundPosition($this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					offsetLeft,
					offsetTop,
					$offsetParent,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

				// Ensure this element isn't already part of another scrolling element
				if (!$this.data('stellar-backgroundIsActive')) {
					$this.data('stellar-backgroundIsActive', this);
				} else if ($this.data('stellar-backgroundIsActive') !== this) {
					return;
				}

				// Save/restore the original top and left CSS values in case we destroy the instance
				if (!$this.data('stellar-backgroundStartingLeft')) {
					$this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
					$this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
				} else {
					setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
				}

				// Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
				marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
				marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

				offsetLeft = $this.offset().left - marginLeft - scrollLeft;
				offsetTop = $this.offset().top - marginTop - scrollTop;
				
				// Calculate the offset parent
				$this.parents().each(function() {
					var $this = $(this);

					if ($this.data('stellar-offset-parent') === true) {
						parentOffsetLeft = tempParentOffsetLeft;
						parentOffsetTop = tempParentOffsetTop;
						$offsetParent = $this;

						return false;
					} else {
						tempParentOffsetLeft += $this.position().left;
						tempParentOffsetTop += $this.position().top;
					}
				});

				// Detect the offsets
				horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
				verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

				self.backgrounds.push({
					$element: $this,
					$offsetParent: $offsetParent,
					isFixed: $this.css('background-attachment') === 'fixed',
					horizontalOffset: horizontalOffset,
					verticalOffset: verticalOffset,
					startingValueLeft: backgroundPosition[0],
					startingValueTop: backgroundPosition[1],
					startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
					startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
					startingPositionLeft: $this.position().left,
					startingPositionTop: $this.position().top,
					startingOffsetLeft: offsetLeft,
					startingOffsetTop: offsetTop,
					parentOffsetLeft: parentOffsetLeft,
					parentOffsetTop: parentOffsetTop,
					stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
				});
			});
		},
		_reset: function() {
			var particle,
				startingPositionLeft,
				startingPositionTop,
				background,
				i;

			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];
				startingPositionLeft = particle.$element.data('stellar-startingLeft');
				startingPositionTop = particle.$element.data('stellar-startingTop');

				this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

				this.options.showElement(particle.$element);

				particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
			}

			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

				setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
			}
		},
		destroy: function() {
			this._reset();

			this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
			this._animationLoop = $.noop;

			$(window).unbind('load.' + this.name).unbind('resize.' + this.name);
		},
		_setOffsets: function() {
			var self = this,
				$window = $(window);

			$window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

			if (typeof this.options.horizontalOffset === 'function') {
				this.horizontalOffset = this.options.horizontalOffset();
				$window.bind('resize.horizontal-' + this.name, function() {
					self.horizontalOffset = self.options.horizontalOffset();
				});
			} else {
				this.horizontalOffset = this.options.horizontalOffset;
			}

			if (typeof this.options.verticalOffset === 'function') {
				this.verticalOffset = this.options.verticalOffset();
				$window.bind('resize.vertical-' + this.name, function() {
					self.verticalOffset = self.options.verticalOffset();
				});
			} else {
				this.verticalOffset = this.options.verticalOffset;
			}
		},
		_repositionElements: function() {
			var scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				horizontalOffset,
				verticalOffset,
				particle,
				fixedRatioOffset,
				background,
				bgLeft,
				bgTop,
				isVisibleVertical = true,
				isVisibleHorizontal = true,
				newPositionLeft,
				newPositionTop,
				newOffsetLeft,
				newOffsetTop,
				i;

			// First check that the scroll position or container size has changed
			if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
				return;
			} else {
				this.currentScrollLeft = scrollLeft;
				this.currentScrollTop = scrollTop;
				this.currentWidth = this.viewportWidth;
				this.currentHeight = this.viewportHeight;
			}

			// Reposition elements
			for (i = this.particles.length - 1; i >= 0; i--) {
				particle = this.particles[i];

				fixedRatioOffset = (particle.isFixed ? 1 : 0);

				// Calculate position, then calculate what the particle's new offset will be (for visibility check)
				if (this.options.horizontalScrolling) {
					newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
					newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
				} else {
					newPositionLeft = particle.startingPositionLeft;
					newOffsetLeft = particle.startingOffsetLeft;
				}

				if (this.options.verticalScrolling) {
					newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
					newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
				} else {
					newPositionTop = particle.startingPositionTop;
					newOffsetTop = particle.startingOffsetTop;
				}

				// Check visibility
				if (this.options.hideDistantElements) {
					isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
					isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
				}

				if (isVisibleHorizontal && isVisibleVertical) {
					if (particle.isHidden) {
						this.options.showElement(particle.$element);
						particle.isHidden = false;
					}

					this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
				} else {
					if (!particle.isHidden) {
						this.options.hideElement(particle.$element);
						particle.isHidden = true;
					}
				}
			}

			// Reposition backgrounds
			for (i = this.backgrounds.length - 1; i >= 0; i--) {
				background = this.backgrounds[i];

				fixedRatioOffset = (background.isFixed ? 0 : 1);
				bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
				bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

				setBackgroundPosition(background.$element, bgLeft, bgTop);
			}
		},
		_handleScrollEvent: function() {
			var self = this,
				ticking = false;

			var update = function() {
				self._repositionElements();
				ticking = false;
			};

			var requestTick = function() {
				if (!ticking) {
					requestAnimFrame(update);
					ticking = true;
				}
			};
			
			this.$scrollElement.bind('scroll.' + this.name, requestTick);
			requestTick();
		},
		_startAnimationLoop: function() {
			var self = this;

			this._animationLoop = function() {
				requestAnimFrame(self._animationLoop);
				self._repositionElements();
			};
			this._animationLoop();
		}
	};

	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function') {
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});
		}
	};

	$[pluginName] = function(options) {
		var $window = $(window);
		return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
	};

	// Expose the scroll and position property function hashes so they can be extended
	$[pluginName].scrollProperty = scrollProperty;
	$[pluginName].positionProperty = positionProperty;

	// Expose the plugin class so it can be modified
	window.Stellar = Plugin;
}(jQuery, this, document));
(function() {
  $(document).ready(function() {
    $.stellar({
      horizontalOffset: 50,
      verticalOffset: 130,
      horizontalScrolling: false
    });
  });

}).call(this);
/*!
 * Strip - A Less Intrusive Responsive Lightbox - v1.5.4
 * (c) 2014-2015 Nick Stakenburg
 *
 * http://www.stripjs.com
 *
 * Licensing:
 * - Commercial: http://www.stripjs.com/license
 * - Non-commercial: http://creativecommons.org/licenses/by-nc-nd/3.0
 *
 */

// Use AMD or window
;(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (jQuery && !window.Strip) {
    window.Strip = factory(jQuery);
  }
}(function($) {


var Strip = {
  version: '1.5.4'
};

Strip.Skins = {
  // the default skin
  'strip': { }
};

var Browser = (function(uA) {
  function getVersion(identifier) {
    var version = new RegExp(identifier + '([\\d.]+)').exec(uA);
    return version ? parseFloat(version[1]) : true;
  }

  return {
    IE: !!(window.attachEvent && uA.indexOf('Opera') === -1) && getVersion('MSIE '),
    Opera:  uA.indexOf('Opera') > -1 && ((!!window.opera && opera.version && parseFloat(opera.version())) || 7.55),
    WebKit: uA.indexOf('AppleWebKit/') > -1 && getVersion('AppleWebKit/'),
    Gecko:  uA.indexOf('Gecko') > -1 && uA.indexOf('KHTML') === -1 && getVersion('rv\:'),
    MobileSafari: !!uA.match(/Apple.*Mobile.*Safari/),
    Chrome: uA.indexOf('Chrome') > -1 && getVersion('Chrome/'),
    ChromeMobile: uA.indexOf('CrMo') > -1 && getVersion('CrMo/'),
    Android: uA.indexOf('Android') > -1 && getVersion('Android '),
    IEMobile: uA.indexOf('IEMobile') > -1 && getVersion('IEMobile/')
  };
})(navigator.userAgent);


var _slice = Array.prototype.slice;
var _ = {
  isElement: function(object) {
    return object && object.nodeType == 1;
  }
};


function px(source) {
  var destination = {};
  for (var property in source)
    destination[property] = source[property] + 'px';
  return destination;
}


// Fit
var Fit = {
  within: function(bounds, dimensions) {
    var options = $.extend({
      height: true,
      width: true
    }, arguments[2] || {});

    var size  = $.extend({}, dimensions),
        scale = 1,
        attempts = 5;

    var fit = { width: options.width, height: options.height };

    // adjust the bounds depending on what to fit (width/height)
    // start
    while (attempts > 0 &&
           ((fit.width  && size.width > bounds.width) ||
            (fit.height && size.height > bounds.height))) {

      // if both dimensions fall underneath a minimum, then don't event continue
      //if (size.width < 100 && size.height < 100) {
        var scaleX = 1, scaleY = 1;

        if (fit.width && size.width > bounds.width) {
          scaleX = (bounds.width / size.width);
        }
        if (fit.height && size.height > bounds.height) {
          scaleY = (bounds.height / size.height);
        }

        // we'll end up using the largest scaled down factor
        var scale = Math.min(scaleX, scaleY);

        // adjust current size, based on original dimensions
        size = {
          width: Math.round(dimensions.width * scale),
          height: Math.round(dimensions.height * scale)
        };
      //}

      attempts--;
    }

    // make sure size is never pressed into negative
    size.width = Math.max(size.width, 0);
    size.height = Math.max(size.height, 0);

    return size;
  }
};

// we only uses some of the jQueryUI easing functions
// add those with a prefix to prevent conflicts
$.extend($.easing, {
  stripEaseInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },

  stripEaseInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },

  stripEaseOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  }
});


var Support = (function() {
  var testElement = document.createElement('div'),
     domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');

  function prefixed(property){
     return testAllProperties(property, 'prefix');
  };

  function testProperties(properties, prefixed ) {
   for ( var i in properties ) {
     if (testElement.style[ properties[i] ] !== undefined ) {
       return prefixed == 'prefix' ? properties[i] : true;
     }
   }
   return false;
  }

  function testAllProperties(property, prefixed ) {
   var ucProperty  = property.charAt(0).toUpperCase() + property.substr(1),
       properties   = (property + ' ' + domPrefixes.join(ucProperty + ' ') + ucProperty).split(' ');

   return testProperties(properties, prefixed);
  }

  // feature detect
  return {
    css: {
       animation: testAllProperties('animation'),
       transform: testAllProperties('transform'),
       prefixed: prefixed
    },

    svg: (!!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect),

    touch: (function() {
      try {
        return !!(('ontouchstart' in window) ||
          window.DocumentTouch && document instanceof DocumentTouch); // firefox on Android
      } catch (e) {
        return false;
      }
    })()

  };
})();


// add mobile touch to support
Support.mobileTouch = Support.touch &&
  (Browser.MobileSafari || Browser.Android || Browser.IEMobile || Browser.ChromeMobile
   || !/^(Win|Mac|Linux)/.test(navigator.platform) // otherwise, assume anything not on Windows, Mac or Linux is a mobile device
  );

var Bounds = {
  viewport: function() {
    var dimensions = {
      height: $(window).height(),
      width:  $(window).width()
    };

    // Mobile Safari has a bugged viewport height after scrolling
    if (Browser.MobileSafari) {
      var zoom = document.documentElement.clientWidth / window.innerWidth;
      dimensions.height = window.innerHeight * zoom;
    }

    return dimensions;
  }
};

/* ImageReady (standalone) - part of Voilà
 * http://github.com/staaky/voila
 * MIT License
 */
var ImageReady = function() {
  return this.initialize.apply(this, Array.prototype.slice.call(arguments));
};

$.extend(ImageReady.prototype, {
  supports: {
    naturalWidth: (function() {
      return ('naturalWidth' in new Image());
    })()
  },

  // NOTE: setTimeouts allow callbacks to be attached
  initialize: function(img, successCallback, errorCallback) {
    this.img = $(img)[0];
    this.successCallback = successCallback;
    this.errorCallback = errorCallback;
    this.isLoaded = false;

    this.options = $.extend({
      natural: true,
      pollFallbackAfter: 1000
    }, arguments[3] || {});

    // a fallback is used when we're not polling for naturalWidth/Height
    // IE6-7 also use this to add support for naturalWidth/Height
    if (!this.supports.naturalWidth || !this.options.natural) {
      setTimeout($.proxy(this.fallback, this));
      return;
    }

    // can exit out right away if we have a naturalWidth
    if (this.img.complete && $.type(this.img.naturalWidth) != 'undefined') {
      setTimeout($.proxy(function() {
        if (this.img.naturalWidth > 0) {
          this.success();
        } else {
          this.error();
        }
      }, this));
      return;
    }

    // we instantly bind to onerror so we catch right away
    $(this.img).bind('error', $.proxy(function() {
      setTimeout($.proxy(function() {
        this.error();
      }, this));
    }, this));

    this.intervals = [
      [1 * 1000, 10],
      [2 * 1000, 50],
      [4 * 1000, 100],
      [20 * 1000, 500]
    ];

    // for testing, 2sec delay
    //this.intervals = [[20 * 1000, 2000]];

    this._ipos = 0;
    this._time = 0;
    this._delay = this.intervals[this._ipos][1];

    // start polling
    this.poll();
  },

  poll: function() {
    this._polling = setTimeout($.proxy(function() {
      if (this.img.naturalWidth > 0) {
        this.success();
        return;
      }

      // update time spend
      this._time += this._delay;

      // use a fallback after waiting
      if (this.options.pollFallbackAfter &&
          this._time >= this.options.pollFallbackAfter &&
          !this._usedPollFallback) {
        this._usedPollFallback = true;
        this.fallback();
      }

      // next i within the interval
      if (this._time > this.intervals[this._ipos][0]) {
        // if there's no next interval, we asume
        // the image image errored out
        if (!this.intervals[this._ipos + 1]) {
          this.error();
          return;
        }

        this._ipos++;

        // update to the new bracket
        this._delay = this.intervals[this._ipos][1];
      }

      this.poll();
    }, this), this._delay);
  },

  fallback: function() {
    var img = new Image();
    this._fallbackImg = img;

    img.onload = $.proxy(function() {
      img.onload = function() {};

      if (!this.supports.naturalWidth) {
        this.img.naturalWidth = img.width;
        this.img.naturalHeight = img.height;
      }

      this.success();
    }, this);

    img.onerror = $.proxy(this.error, this);

    img.src = this.img.src;
  },

  abort: function() {
    if (this._fallbackImg) {
      this._fallbackImg.onload = function() { };
    }

    if (this._polling) {
      clearTimeout(this._polling);
      this._polling = null;
    }
  },

  success: function() {
    if (this._calledSuccess) return;
    this._calledSuccess = true;

    this.isLoaded = true;
    this.successCallback(this);
  },

  error: function() {
    if (this._calledError) return;
    this._calledError = true;

    this.abort();
    if (this.errorCallback) this.errorCallback(this);
  }
});

// Spinner
// Create pure CSS based spinners
function Spinner() { return this.initialize.apply(this, _slice.call(arguments)); };

// mark as supported
Spinner.supported = Support.css.transform && Support.css.animation;

$.extend(Spinner.prototype, {
  initialize: function(element) {
    this.element = $(element);
    if (!this.element[0]) return;

    this.classPrefix = 'strp-';

    this.setOptions(arguments[1] || {});

    this.element.addClass(this.classPrefix + 'spinner');
    this.element.append(this._rotate = $('<div>').addClass(this.classPrefix + 'spinner-rotate'));

    this.build();
    this.start();
  },

  setOptions: function(options) {
    this.options = $.extend({
      show: 200,
      hide: 200
    }, options || {});
  },

  build: function() {
    if (this._build) return;

    this._rotate.html('');

    var d = (this.options.length + this.options.radius) * 2,
        dimensions = { height: d, width: d };

    // we parse stuff below so make sure that happens with a visible spinner
    var is_vis = this.element.is(':visible');
    if (!is_vis) this.element.show();

    // find the amount of lines
    var frame, line;
    this._rotate.append(frame = $('<div>').addClass(this.classPrefix + 'spinner-frame')
      .append(line = $('<div>').addClass(this.classPrefix + 'spinner-line'))
    );

    var lines = parseInt($(line).css('z-index'));
    this.lines = lines;
    // now reset that z-index
    line.css({ 'z-index': 'inherit' });

    frame.remove();

    // reset visibility
    if (!is_vis) this.element.hide();

    // insert frames
    var color;
    for (var i = 0;i<lines;i++) {
      var frame, line;
      this._rotate.append(frame = $('<div>').addClass(this.classPrefix + 'spinner-frame')
        .append(line = $('<div>').addClass(this.classPrefix + 'spinner-line'))
      );

      color = color || line.css('color');
      line.css({ background: color });

      frame.css({ opacity: ((1 / lines) * (i+1)).toFixed(2) });

      var transformCSS = {};
      transformCSS[Support.css.prefixed('transform')] = 'rotate(' + ((360 / lines) * (i + 1)) + 'deg)';
      frame.css(transformCSS);
    }

    this._build = true;
  },

  start: function() {
    var rotateCSS = {};
    rotateCSS[Support.css.prefixed('animation')] = this.classPrefix + 'spinner-spin 1s infinite steps(' + this.lines + ')';
    this._rotate.css(rotateCSS);
  },

  stop: function() {
    var rotateCSS = {};
    rotateCSS[Support.css.prefixed('animation')] = 'none';
    this._rotate.css(rotateCSS);
  },

  show: function(callback) {
    this.build();
    this.start();

    this.element.stop(true).fadeTo(this.options.show, 1, callback);//deferred.resolve);
  },

  hide: function(callback) {
    this.element.stop(true).fadeOut(this.options.hide, $.proxy(function() {
      this.stop();
      if (callback) callback();
    }, this));
  },

  refresh: function() {
    this._build = false;
    this.build();
  }
});

function Timers() { return this.initialize.apply(this, _slice.call(arguments)); };
$.extend(Timers.prototype, {
  initialize: function() {
    this._timers = {};
  },

  set: function(name, handler, ms) {
    this._timers[name] = setTimeout(handler, ms);
  },

  get: function(name) {
    return this._timers[name];
  },

  clear: function(name) {
    if (name) {
      if (this._timers[name]) {
        clearTimeout(this._timers[name]);
        delete this._timers[name];
      }
    } else {
      this.clearAll();
    }
  },

  clearAll: function() {
    $.each(this._timers, function(i, timer) {
      clearTimeout(timer);
    });
    this._timers = {};
  }
});

// uses Types to scan a URI for info
function getURIData(url) {
  var result = { type: 'image' };
  $.each(Types, function(i, type) {
    var data = type.data(url);
    if (data) {
      result = data;
      result.type = i;
      result.url = url;
    }
  });

  return result;
}

function detectExtension(url) {
  var ext = (url || '').replace(/\?.*/g, '').match(/\.([^.]{3,4})$/);
  return ext ? ext[1].toLowerCase() : null;
}


var Types = {
  'image': {
    extensions: 'bmp gif jpeg jpg png webp',
    detect: function(url) {
      return $.inArray(detectExtension(url), this.extensions.split(' ')) > -1;
    },
    data: function(url) {
      if (!this.detect()) return false;

      return {
        extension: detectExtension(url)
      };
    }
  },

  'youtube': {
    detect: function(url) {
      var res = /(youtube\.com|youtu\.be)\/watch\?(?=.*vi?=([a-zA-Z0-9-_]+))(?:\S+)?$/.exec(url);
      if (res && res[2]) return res[2];

      res = /(youtube\.com|youtu\.be)\/(vi?\/|u\/|embed\/)?([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(url);
      if (res && res[3]) return res[3];

      return false;
    },
    data: function(url) {
      var id = this.detect(url);
      if (!id) return false;

      return {
        id: id
      };
    }
  },

  'vimeo': {
    detect: function(url) {
      var res = /(vimeo\.com)\/([a-zA-Z0-9-_]+)(?:\S+)?$/i.exec(url);
      if (res && res[2]) return res[2];

      return false;
    },
    data: function(url) {
      var id = this.detect(url);
      if (!id) return false;

      return {
        id: id
      };
    }
  }
};


var VimeoReady = (function() {

var VimeoReady = function() { return this.initialize.apply(this, _slice.call(arguments)); };
$.extend(VimeoReady.prototype, {
  initialize: function(url, callback) {
    this.url = url;
    this.callback = callback;

    this.load();
  },

  load: function() {
    // first try the cache
    var cache = Cache.get(this.url);

    if (cache) {
      return this.callback(cache.data);
    }

    var protocol = 'http' + (window.location && window.location.protocol == 'https:' ? 's' : '') + ':',
        video_id = getURIData(this.url).id;

    this._xhr = $.getJSON(protocol + '//vimeo.com/api/oembed.json?url=' + protocol + '//vimeo.com/' + video_id + '&callback=?', $.proxy(function(_data) {
      var data = {
        dimensions: {
          width: _data.width,
          height: _data.height
        }
      };

      Cache.set(this.url, data);

      if (this.callback) this.callback(data);
    }, this));
  },

  abort: function() {
    if (this._xhr) {
      this._xhr.abort();
      this._xhr = null;
    }
  }
});


var Cache = {
  cache:  [],

  get: function(url) {
   var entry = null;
   for(var i=0;i<this.cache.length;i++) {
     if (this.cache[i] && this.cache[i].url == url) entry = this.cache[i];
   }
   return entry;
  },

  set: function(url, data) {
    this.remove(url);
    this.cache.push({ url: url, data: data });
  },

  remove: function(url) {
   for(var i=0;i<this.cache.length;i++) {
     if (this.cache[i] && this.cache[i].url == url) {
       delete this.cache[i];
     }
   }
  }
};

return VimeoReady;

})();

var Options = {
  defaults: {
    effects: {
      spinner: { show: 200, hide: 200 },
      transition: { min: 175, max: 250 },
      ui: { show: 0, hide: 200 },
      window: { show: 300, hide: 300 }
    },
    hideOnClickOutside: true,
    keyboard: {
      left:  true,
      right: true,
      esc:   true
    },
    loop: true,
    overlap: true,
    preload: [1,2],
    position: true,
    skin: 'strip',
    side: 'right',
    spinner: true,
    toggle: true,
    uiDelay: 3000,
    vimeo: {
      autoplay: 1,
      api: 1,
      title: 1,
      byline: 1,
      portrait: 0,
      loop: 0
    },
    youtube: {
      autoplay: 1,
      controls: 1,
      enablejsapi: 1,
      hd: 1,
      iv_load_policy: 3,
      loop: 0,
      modestbranding: 1,
      rel: 0,
      vq: 'hd1080' // force hd: http://stackoverflow.com/a/12467865
    },

    initialTypeOptions: {
      'image': { },
      'vimeo': {
        width: 1280
      },
      // Youtube needs both dimensions, it doesn't support fetching video dimensions like Vimeo yet.
      // Star this ticket if you'd like to get support for it at some point:
      // https://code.google.com/p/gdata-issues/issues/detail?id=4329
      'youtube': {
        width: 1280,
        height: 720
      }
    }
  },

  create: function(opts, type, data) {
    opts = opts || {};
    data = data || {};

    opts.skin = opts.skin || this.defaults.skin;

    var selected = opts.skin ? $.extend({}, Strip.Skins[opts.skin] || Strip.Skins[this.defaults.skin]) : {},
        merged = $.extend(true, {}, this.defaults, selected);

    // merge initial type options
    if (merged.initialTypeOptions) {
      if (type && merged.initialTypeOptions[type]) {
        merged = $.extend(true, {}, merged.initialTypeOptions[type], merged);
      }
      // these aren't used further, so remove them
      delete merged.initialTypeOptions;
    }

    // safe options to work with
    var options = $.extend(true, {}, merged, opts);

    // set all effect duration to 0 for effects: false
    // IE8 and below never use effects
    if (!options.effects || (Browser.IE && Browser.IE < 9)) {
      options.effects = {};
      $.each(this.defaults.effects, function(name, effect) {
        $.each((options.effects[name] = $.extend({}, effect)), function(option) {
          options.effects[name][option] = 0;
        });
      });

      // disable the spinner when effects are disabled
      options.spinner = false;
    }

    // keyboard
    if (options.keyboard) {
      // when keyboard is true, enable all keys
      if ($.type(options.keyboard) == 'boolean') {
        options.keyboard = {};
        $.each(this.defaults.keyboard, function(key, bool) {
          options.keyboard[key] = true;
        });
      }

      // disable left and right keys for video, because players like
      // youtube use these keys
      if (type == 'vimeo' || type == 'youtube') {
        $.extend(options.keyboard, { left: false, right: false });
      }
    }

    // vimeo & youtube always have no overlap
    if (type == 'vimeo' || type == 'youtube') {
      options.overlap = false;
    }

    return options;
  }
};

function View() { this.initialize.apply(this, _slice.call(arguments)); }
$.extend(View.prototype, {
  initialize: function(object) {
   var options = arguments[1] || {},
       data = {};

   // string -> element
   if ($.type(object) == 'string') {
     // turn the string into an element
     object = { url: object };
   }

   // element -> object
   else if (object && object.nodeType == 1) {
     var element = $(object);

     object = {
       element:   element[0],
       url:       element.attr('href'),
       caption:   element.data('strip-caption'),
       group:     element.data('strip-group'),
       extension: element.data('strip-extension'),
       type:      element.data('strip-type'),
       options:   (element.data('strip-options') && eval('({' + element.data('strip-options') + '})')) || {}
     };
   }

   if (object) {
     // detect type if none is set
     if (!object.extension) {
       object.extension = detectExtension(object.url);
     }

     if (!object.type) {
       var data = getURIData(object.url);
       object._data = data;
       object.type = data.type;
     }
   }

   if (!object._data) {
     object._data = getURIData(object.url);
   }

   if (object && object.options) {
      object.options = $.extend(true, $.extend({}, options), $.extend({}, object.options));
   } else {
     object.options = $.extend({}, options);
   }
   // extend the options
   object.options = Options.create(object.options, object.type, object._data);

   // extend this with data
   $.extend(this, object);

   return this;
  }
});

var Pages = {
  initialize: function(element) {
    this.element = element;
    this.pages = {};
    this.uid = 1;
  },

  add: function(views) {
    this.uid++;

    this.views = views;

    this.pages[this.uid] = []; // create room for these pages

    // switched pages, so show the UI on the next resize
    Window._showUIOnResize = true;

    // add pages for all these views
    $.each(views, $.proxy(function(i, view) {
      this.pages[this.uid].push(new Page(view, i + 1, this.views.length));
    }, this));
  },

  show: function(position, callback) {
    var page = this.pages[this.uid][position - 1];

    // never try to reload the exact same frame
    if (this.page && this.page.uid == page.uid) {
      // also hide the window if toggle is enabled
      if (page.view.options.toggle) {
        Window.hide();
        // clear the page so double clicking when hiding will
        // re-open the window even if it's in a hide animation
        this.page = null;
      }

      return;
    }

    // set class names to indicate active state
    Pages.setActiveClass(page);

    // update the page
    this.page = page;

    this.removeHiddenAndLoadingInactive();
    page.show($.proxy(function() {
      // once a page has been fully shown we mark Pages as not being switched anymore
      this._switched = false;
      if (callback) callback();
    }, this));
  },

  getLoadingCount: function() {
    // we only stop loading if all the frames we have are not loading anymore
    var count = 0;
    $.each(this.pages, function(id, pages) {
      $.each(pages, function(j, page) {
        if (page.loading) count++;
      });
    });
    return count;
  },

  // used by the API when opening
  // checks if the page is in the currently open group
  getPositionInActivePageGroup: function(element) {
    var position = 0,
        activeGroup = this.pages[this.uid];

    if (activeGroup) {
      $.each(activeGroup, function(i, page) {
        if (page.view.element && page.view.element == element) {
          position = i + 1;
        }
      });
    }

    return position
  },

  // remove pages not matching the current id
  removeExpired: function(instantly) {
    $.each(this.pages, function(id, pages) {
      if (id != this._id) {
        $.each(pages, function(j, page) {
          page.remove(instantly);
        });
      }
    });
  },


  // Window.hide will call thise when fully closed
  removeAll: function() {
    $.each(this.pages, function(id, pages) {
      $.each(pages, function(j, page) {
        page.remove();
      });
    });

    // empty out pages
    this.pages = {};
  },

  hideVisibleInactive: function(alternateDuration) {
    $.each(this.pages, $.proxy(function(id, pages) {
      $.each(pages, $.proxy(function(j, page) {
          if (page.uid != this.page.uid) {
            page.hide(null, alternateDuration);
          }
      }, this));
    }, this));
  },

  stopInactive: function() {
    $.each(this.pages, $.proxy(function(id, pages) {
      $.each(pages, $.proxy(function(j, page) {
        if (page.uid != this.page.uid && !page.preloading) {
          page.stop();
        }
      }, this));
    }, this));
  },

  // TODO: might be nice to have a hide animation before removal, it's instant now
  removeHiddenAndLoadingInactive: function() {
    // track which inactive page groups are empty
    var empty = [];

    $.each(this.pages, $.proxy(function(uid, pages) {
      // only remove pages in the groups that are currently not active
      if (uid != this.uid) {
        var removed = 0;

        $.each(pages, $.proxy(function(j, page) {
            // remove hidden or loading, but dont'remove frames in animation
            if ((!page.visible || page.loading) && !page.animatingWindow) {
              page.remove();
            }

            if (page.removed) removed++; // count all, not those we remove now
        }, this));

        // if we've removed all pages from this group it's safe to remove it
        // we don't do this in the loop but below
        if (removed == pages.length) {
          empty.push(uid);
        }
      }
    }, this));

    // now remove all empty page groups
    $.each(empty, $.proxy(function(i, uid) {
      delete this.pages[uid];
    }, this));

  },

  stop: function() {
    $.each(this.pages, function(id, pages) {
      $.each(pages, function(j, page) {
        page.stop();
      });
    });
  },

  setActiveClass: function(page) {
    // switch the active element class
    this.removeActiveClasses();

    // add the active class if the new page is bound to an element
    var element = page.view.element;
    if (element) {
      $(element).addClass('strip-active-element strip-active-group');

      // also give other items in the group the active group class
      var group = $(element).data('strip-group');
      if (group) {
        $('.strip[data-strip-group="' + group + '"]').addClass('strip-active-group');
      }
    }
  },

  removeActiveClasses: function() {
    $('.strip-active-group').removeClass('strip-active-group strip-active-element');
  }
};

var Page = (function() {
var uid = 0,
    loadedUrlCache = {};

function Page() { return this.initialize.apply(this, _slice.call(arguments)); };
$.extend(Page.prototype, {
  initialize: function(view, position, total) {
    this.view = view;
    this.dimensions = { width: 0, height: 0 };
    this.uid = uid++;

    // store position/total views for later use
    this._position = position;
    this._total = total;

    this.animated = false;
    this.visible = false;

    this.queues = {};
    this.queues.showhide = $({});
  },

  // create the page, this doesn't mean it's loaded
  // should happen instantly
  create: function() {
    if (this._created) return;

    Pages.element.append(this.element = $('<div>').addClass('strp-page')
      .append(this.container = $('<div>').addClass('strp-container'))
      .css({ opacity: 0 })
      .hide()
    );

    var hasPosition = (this.view.options.position && this._total > 1);
    if (this.view.caption || hasPosition) {
      this.element.append(this.info = $('<div>').addClass('strp-info')
        .append(this.info_padder = $('<div>').addClass('strp-info-padder'))
      );

      // insert caption first because it floats right
      if (hasPosition) {
        this.element.addClass('strp-has-position');

        this.info_padder.append($('<div>').addClass('strp-position')
          .html(this._position + ' / ' + this._total)
        );
      }

      if (this.view.caption) {
        this.info_padder.append(this.caption = $('<div>').addClass('strp-caption')
          .html(this.view.caption)
        );
      }
    }

    switch (this.view.type) {
      case 'image':
        this.container.append(this.content = $('<img>')
          .attr({ src: this.view.url })
        );
        break;

      case 'vimeo':
      case 'youtube':
        this.container.append(this.content = $('<div>'));
        break;
    }

    // ui
    this.element.addClass('strp' + (this.view.options.overlap ? '' : '-no') + '-overlap');

    // no sides
    if (this._total < 2) {
      this.element.addClass('strp-no-sides');
    }

    this.content.addClass('strp-content-element');

    this._created = true;
  },

  //surrounding
  _getSurroundingPages: function() {
    var preload;
    if (!(preload = this.view.options.preload)) return [];

    var pages = [],
        begin = Math.max(1, this._position - preload[0]),
        end = Math.min(this._position + preload[1], this._total),
        pos = this._position;

    // add the pages after this one first for the preloading order
    for (var i = pos;i<=end;i++) {
      var page = Pages.pages[Pages.uid][i-1];
      if (page._position != pos) pages.push(page);
    }

    for (var i = pos;i>=begin;i--) {
      var page = Pages.pages[Pages.uid][i-1];
      if (page._position != pos) pages.push(page);
    }

    return pages;
  },

  preloadSurroundingImages: function() {
    var pages = this._getSurroundingPages();

    $.each(pages, $.proxy(function(i, page) {
      page.preload();
    }, this));
  },

  // preload is a non-abortable preloader,
  // so that it doesn't interfere with our regular load
  preload: function() {
    if (this.preloading || this.preloaded
      || this.view.type != 'image'
      || !this.view.options.preload
      || this.loaded // page might be loaded before it's preloaded so also stop there
      ) {
      return;
    }

    // make sure the page is created
    this.create();

    this.preloading = true;

    new ImageReady(this.content[0], $.proxy(function(imageReady) {
      this.loaded = true;
      this.preloading = false;
      this.preloaded = true;

      this.dimensions = {
        width: imageReady.img.naturalWidth,
        height: imageReady.img.naturalHeight
      };
    }, this));
  },

  // the purpose of load is to set dimensions
  // we use it to set dimensions even for content that doesn't load like youtube
  load: function(callback, isPreload) {
    // make sure the page is created
    this.create();

    // exit early if already loaded
    if (this.loaded) {
      if (callback) callback();
      return;
    }

    // abort possible previous (pre)load
    this.abort();

    // loading indicator, we don't show it when preloading frames
    this.loading = true;

    // start spinner
    // only when this url hasn't been loaded before
    if (this.view.options.spinner && !loadedUrlCache[this.view.url]) {
      Window.startLoading();
    }

    switch(this.view.type) {
      case 'image':

        // if we had an error before just go through
        if (this.error) {
          if (callback) callback();
          return;
        }

        this.imageReady = new ImageReady(this.content[0], $.proxy(function(imageReady) {
          // mark as loaded
          this._markAsLoaded();

          this.dimensions = {
            width: imageReady.img.naturalWidth,
            height: imageReady.img.naturalHeight
          };

          if (callback) callback();
        }, this), $.proxy(function() {
          // mark as loaded
          this._markAsLoaded();

          this.content.hide();
          this.container.append(this.error = $('<div>').addClass('strp-error'));
          this.element.addClass('strp-has-error');

          this.dimensions = {
            width: this.error.outerWidth(),
            height: this.error.outerHeight()
          };

          if (callback) callback();
        }, this));

        break;

      case 'vimeo':

        this.vimeoReady = new VimeoReady(this.view.url, $.proxy(function(data) {
          // mark as loaded
          this._markAsLoaded();

          this.dimensions = {
            width: data.dimensions.width,
            height: data.dimensions.height
          };

          if (callback) callback();
        }, this));

        break;

      case 'youtube':
        // mark as loaded
        this._markAsLoaded();

        this.dimensions = {
          width: this.view.options.width,
          height: this.view.options.height
        };

        if (callback) callback();
        break;
    }
  },

  // helper for load()
  _markAsLoaded: function() {
    this.loading = false;
    this.loaded = true;

    // mark url as loaded so we can avoid
    // showing the spinner again
    loadedUrlCache[this.view.url] = true;

    Window.stopLoading();
  },

  isVideo: function() {
    return /^(youtube|vimeo)$/.test(this.view.type);
  },

  insertVideo: function(callback) {
    // don't insert a video twice
    // and stop if not a video
    if (this.playerIframe || !this.isVideo()) {
      if (callback) callback();
      return;
    }

    var playerVars = $.extend({}, this.view.options[this.view.type] || {}),
        queryString = $.param(playerVars),
        src = {
          vimeo: '//player.vimeo.com/video/{id}?{queryString}',
          youtube: '//www.youtube.com/embed/{id}?{queryString}'
        };

    this.content.append(this.playerIframe = $('<iframe webkitAllowFullScreen mozallowfullscreen allowFullScreen>')
      .attr({
        src: src[this.view.type]
             .replace('{id}', this.view._data.id)
             .replace('{queryString}', queryString),
        height: this.contentDimensions.height,
        width: this.contentDimensions.width,
        frameborder: 0
      })
    );

    if (callback) callback();
  },


  raise: function() {
    // no need to raise if we're already the topmost element
    // this helps avoid unnecessary detaching of the element
    var lastChild = Pages.element[0].lastChild;
    if (lastChild && lastChild == this.element[0]) {
      return;
    }

    Pages.element.append(this.element);
  },

  show: function(callback) {
    var shq = this.queues.showhide;
    shq.queue([]); // clear queue

    this.animated = true;
    this.animatingWindow = false;


    shq.queue(function(next_stopped_inactive) {
      Pages.stopInactive();
      next_stopped_inactive();
    });

    shq.queue($.proxy(function(next_side) {
      Window.setSide(this.view.options.side, next_side);
    }, this));

    // make sure the current page is inserted
    shq.queue($.proxy(function(next_loaded) {

      // give the spinner the options of this page
      if (this.view.options.spinner && Window._spinner) {
        Window.setSpinnerSkin(this.view.options.skin);
        Window._spinner.setOptions(this.view.options.effects.spinner);
        Window._spinner.refresh();
      }

      // load
      this.load($.proxy(function() {
        this.preloadSurroundingImages();
        next_loaded();
      }, this));
    }, this));

    shq.queue($.proxy(function(next_utility) {
      this.raise();

      Window.setSkin(this.view.options.skin);
      Window.bindUI(); // enable ui controls

      // keyboard
      Keyboard.enable(this.view.options.keyboard);

      this.fitToWindow();

      next_utility();
    }, this));

    // we bind hide on click outside with a delay so API calls can pass through.
    // more on this in api.js
    shq.queue($.proxy(function(next_bind_hide_on_click_outside) {
      Window.timers.set('bind-hide-on-click-outside', $.proxy(function() {
        Window.bindHideOnClickOutside();
        next_bind_hide_on_click_outside();
      }, this), 1);
    }, this));

    // vimeo and youtube use this for insertion
    if (this.isVideo()) {
      shq.queue($.proxy(function(next_video_inserted) {
        this.insertVideo($.proxy(function() {
          next_video_inserted();
        }));
      }, this));
    }


    shq.queue($.proxy(function(next_shown_and_resized) {
      this.animatingWindow = true; // we're modifying Window size

      var fx = 3;

      // store duration on resize and use it for the other animations
      var z = this.getOrientation() == 'horizontal' ? 'width' : 'height';

      var duration = Window.resize(this[z], function() {
        if (--fx < 1) next_shown_and_resized();
      }, duration);

      this._show(function() {
        if (--fx < 1) next_shown_and_resized();
      }, duration);

      Window.adjustPrevNext(function(){
        if (--fx < 1) next_shown_and_resized();
      }, duration);

      if (Window._showUIOnResize) {
        Window.showUI(null, duration);

        // don't show the UI the next time, it'll show up
        // when we set this flag again
        Window._showUIOnResize = false;
      }

      // we also don't track this
      Pages.hideVisibleInactive(duration);
    }, this));


    shq.queue($.proxy(function(next_set_visible) {
      // Window.resize takes this into account
      this.animatingWindow = false;

      this.animated = false;

      this.visible = true;

      // NOTE: disabled to allow the UI to fade out at all times
      //Window.startUITimer();

      if (callback) callback();

      next_set_visible();
    }, this));
  },

  _show: function(callback, alternateDuration) {
    var duration = !Window.visible ? 0 :
                   ($.type(alternateDuration) == 'number') ? alternateDuration :
                   this.view.options.effects.transition.min;

    this.element.stop(true).show().fadeTo(duration || 0, 1, callback);
  },

  hide: function(callback, alternateDuration) {
    if (!this.element) return; // nothing to hide yet

    this.removeVideo();

    // abort possible loading
    this.abort();

    var duration = this.view.options.effects.transition.min;
    if ($.type(alternateDuration) == 'number') duration = alternateDuration;

    // hide video instantly
    var isVideo = this.isVideo();
    if (isVideo) duration = 0;

    // stop, delay & effect
    this.element.stop(true)
    // we use alternative easing to minize background color showing through a lowered opacity fade
    // while images are trading places
    .fadeTo(duration, 0, 'stripEaseInCubic', $.proxy(function() {
      this.element.hide();
      this.visible = false;
      if (callback) callback();
    }, this));
  },

  // stop everything
  stop: function() {
    var shq = this.queues.showhide;
    shq.queue([]); // clear queue

    // stop animations
    if (this.element) this.element.stop(true);

    // stop possible loading
    this.abort();
  },


  removeVideo: function() {
    if (this.playerIframe) {
      // this fixes a bug where sound keep playing after
      // removing the iframe in IE10+
      this.playerIframe[0].src = '//about:blank';

      this.playerIframe.remove();
      this.playerIframe = null;
    }
  },

  remove: function() {
    this.stop();
    this.removeVideo();
    if (this.element) this.element.remove();
    this.visible = false;
    this.removed = true;
  },

  abort: function() {
    if (this.imageReady && !this.preloading) {
      this.imageReady.abort();
      this.imageReady = null;
    }

    if (this.vimeoReady) {
      this.vimeoReady.abort();
      this.vimeoReady = null;
    }

    this.loading = false;
    Window.stopLoading();
  },

  _getDimensionsFitToView: function() {
    var bounds = $.extend({}, this.dimensions),
        dimensions = $.extend({}, this.dimensions);

    var options = this.view.options;
    if (options.maxWidth) bounds.width = options.maxWidth;
    if (options.maxHeight) bounds.heigth = options.maxHeight;

    dimensions = Fit.within(bounds, dimensions);

    return dimensions;
  },

  getOrientation: function(side) {
    return (this.view.options.side == 'left' || this.view.options.side == 'right') ? 'horizontal' : 'vertical';
  },

  fitToWindow: function() {
    var page = this.element,
        dimensions = this._getDimensionsFitToView(),
        viewport = Bounds.viewport(),
        bounds = $.extend({}, viewport),
        orientation = this.getOrientation(),
        z = orientation == 'horizontal' ? 'width' : 'height';

    var container = page.find('.strp-container');

    // add the safety
    Window.element.removeClass('strp-measured');
    var win = Window.element,
        isFullscreen = (z == 'width') ? parseInt(win.css('min-width')) > 0 :
                       parseInt(win.css('min-height')) > 0,
        safety = isFullscreen ? 0 : parseInt(win.css('margin-' + (z == 'width' ? 'left' : 'bottom')));
    Window.element.addClass('strp-measured');

    bounds[z] -= safety;

    var paddingX = parseInt(container.css('padding-left')) + parseInt(container.css('padding-right')),
        paddingY = parseInt(container.css('padding-top')) + parseInt(container.css('padding-bottom')),
        padding = { x: paddingX, y: paddingY };

    bounds.width -= paddingX;
    bounds.height -= paddingY;

    var fitted = Fit.within(bounds, dimensions),
        contentDimensions = $.extend({}, fitted),
        content = this.content;

    // if we have an error message, use that as content instead
    if (this.error) {
      content = this.error;
    }

    var info = this.info,
        cH = 0;

    // when there's an info bar size has to be adjusted
    if (info) {
      // make sure the window and the page are visible during all of this
      var windowVisible = Window.element.is(':visible');
      if (!windowVisible) Window.element.show();

      var pageVisible = page.is(':visible');
      if (!pageVisible) page.show();

      // width
      if (z == 'width') {
        page.css({
          width: (isFullscreen ? viewport.width : fitted.width + paddingX) + 'px'
        });

        var initialBoundsHeight = bounds.height;

        content.hide();
        cH = info.outerHeight();
        content.show();

        bounds.height = initialBoundsHeight - cH;

        contentDimensions = Fit.within(bounds, dimensions);

        // left/right requires further adjustment of the caption
        var initialImageSize = $.extend({}, contentDimensions),
            initialCH = cH,
            newCW,
            previousCH,
            shrunkW;

        var attempts = isFullscreen ? 0 : 4; // fullscreen doesn't need extra resizing

        while (attempts > 0 && (shrunkW = fitted.width - contentDimensions.width)) {
          page.css({ width: (fitted.width + paddingX - shrunkW) + 'px' });

          previousCH = cH;

          content.hide();
          cH = info.outerHeight();

          newCW = Math.max(this.caption  ? this.caption.outerWidth() + paddingX : 0,
                           this.position ? this.position.outerWidth() + paddingX : 0);
          content.show();

          if (cH == previousCH && (newCW <= (fitted.width + paddingX - shrunkW))) {
            // safe to keep this width, so store it
            fitted.width -= shrunkW;
          } else {
            // we try again with the increased caption
            bounds.height = initialBoundsHeight - cH;

            contentDimensions = Fit.within(bounds, dimensions);

            // restore if the last attempt failed
            if (attempts - 1 <= 0) {
              // otherwise the caption increased in height, go back
              page.css({ width: fitted.width + paddingX  + 'px' });
              contentDimensions = initialImageSize;
              cH = initialCH;
            }
          }

          attempts--;
        }

      } else {
        // fix IE7 not respecting width:100% in the CSS
        // so info height is measured correctly
        if (Browser.IE && Browser.IE < 8) {
          page.css({ width: viewport.width });
        }

        // height
        content.hide();
        cH = info.outerHeight();
        content.show();

        bounds.height -= cH;
        contentDimensions = Fit.within(bounds, dimensions);
        fitted.height = contentDimensions.height;
      }

      // restore visibility
      if (!pageVisible) page.hide();
      if (!windowVisible) Window.element.hide();
    }


    // page needs a fixed width to remain properly static during animation
    var pageDimensions = {
      width: fitted.width + paddingX,
      height: fitted.height + paddingY + cH
    };
    // fullscreen mode uses viewport dimensions for the page
    if (isFullscreen) pageDimensions = viewport;

    if (z == 'width') {
      page.css({ width: pageDimensions.width + 'px' });
    } else {
      page.css({ height: pageDimensions.height + 'px' });
    }

    container.css({ bottom: cH + 'px' });


    // margins
    var mLeft = -.5 * contentDimensions.width,
        mTop  = -.5 * contentDimensions.height;

    // floor margins on IE6-7 because it doesn't render .5px properly
    if (Browser.IE && Browser.IE < 8) {
      mLeft = Math.floor(mLeft);
      mTop = Math.floor(mTop);
    }

    content.css(px($.extend({}, contentDimensions, {
      'margin-left': mLeft,
      'margin-top': mTop
    })));


    if (this.playerIframe) {
      this.playerIframe.attr(contentDimensions);
    }

    this.contentDimensions = contentDimensions;

    // store for later use within animation
    this.width = pageDimensions.width;
    this.height = pageDimensions.height;

    this.z = this[z];
  }
});

return Page;
})();

var Window = {
  initialize: function() {
    this.queues = [];
    this.queues.hide = $({});

    this.pages = [];

    this.timers = new Timers();

    this.build();
    this.setSkin(Options.defaults.skin);
  },

  build: function() {
    // spinner
    if (Spinner.supported) {
      $(document.body).append(this.spinnerMove = $('<div>').addClass('strp-spinner-move')
        .hide()
        .append(this.spinner = $('<div>').addClass('strp-spinner'))
      );
      this._spinner = new Spinner(this.spinner);

      this._spinnerMoveSkinless = this.spinnerMove[0].className;
    }

    // window
    $(document.body).append(this.element = $('<div>').addClass('strp-window strp-measured')

      .append(this._pages = $('<div>').addClass('strp-pages'))

      .append(this._previous = $('<div>').addClass('strp-nav strp-nav-previous')
        .append($('<div>').addClass('strp-nav-button')
          .append($('<div>').addClass('strp-nav-button-background'))
          .append($('<div>').addClass('strp-nav-button-icon'))
        )
        .hide()
      )

      .append(this._next = $('<div>').addClass('strp-nav strp-nav-next')
        .append($('<div>').addClass('strp-nav-button')
          .append($('<div>').addClass('strp-nav-button-background'))
          .append($('<div>').addClass('strp-nav-button-icon'))
        )
        .hide()
      )

      // close
      .append(this._close = $('<div>').addClass('strp-close')
        .append($('<div>').addClass('strp-close-background'))
        .append($('<div>').addClass('strp-close-icon'))
      )
    );

    Pages.initialize(this._pages);

    // support classes
    if (Support.mobileTouch) this.element.addClass('strp-mobile-touch');
    if (!Support.svg) this.element.addClass('strp-no-svg');


    // events
    this._close.on('click', $.proxy(function(event) {
      event.preventDefault();
      this.hide();
    }, this));

    this._previous.on('click', $.proxy(function(event) {
      this.previous();
      this._onMouseMove(event); // update cursor
    }, this));

    this._next.on('click', $.proxy(function(event) {
      this.next();
      this._onMouseMove(event); // update cursor
    }, this));

    this.hideUI(null, 0); // start with hidden <>
  },

  setSkin: function(skin) {
    if (this._skin) {
      this.element.removeClass('strp-window-skin-' + this._skin);
    }
    this.element.addClass('strp-window-skin-' + skin);

    this._skin = skin;
  },

  setSpinnerSkin: function(skin) {
    if (!this.spinnerMove) return;

    if (this._spinnerSkin) {
      this.spinnerMove.removeClass('strp-spinner-move-skin-' + this._spinnerSkin);
    }

    this.spinnerMove.addClass('strp-spinner-move-skin-' + skin);
    // refresh in case of styling updates
    this._spinner.refresh();

    this._spinnerSkin = skin;
  },


  // Resize
  // window resize (TODO:orientationchange?)
  startObservingResize: function() {
    if (this._isObservingResize) return;

    this._onWindowResizeHandler = $.proxy(this._onWindowResize, this);
    $(window).on('resize orientationchange', this._onWindowResizeHandler);

    this._isObservingResize = true;
  },

  stopObservingResize: function() {
    if (this._onWindowResizeHandler) {
      $(window).off('resize orientationchange', this._onWindowResizeHandler);
      this._onWindowResizeHandler = null;
    }

    this._isObservingResize = false;
  },

  _onWindowResize: function() {
    var page;
    if (!(page = Pages.page)) return;

    if (page.animated || page.animatingWindow) {
      // we're animating, don't stop the animation,
      // instead update dimensions and restart/continue showing
      page.fitToWindow();
      page.show();
    } else {
      // we're not in an animation, resize instantly
      page.fitToWindow();
      this.resize(page.z, null, 0);
      this.adjustPrevNext(null, true);
    }
  },

  resize: function(wh, callback, alternateDuration) {
    var orientation = this.getOrientation(),
        Z = orientation == 'vertical' ? 'Height' : 'Width',
        z = Z.toLowerCase();

    if (wh > 0) {
      this.visible = true;
      this.startObservingResize();

      // onShow callback
      var onShow = this.view && this.view.options.onShow;
      if ($.type(onShow) == 'function') {
        onShow.call(Strip);
      }
    }

    var fromZ = Window.element['outer' + Z](),
        duration;

    // if we're opening use the show duration
    if (fromZ == 0) {
      duration = this.view.options.effects.window.show;

      // add opening class
      this.element.addClass('strp-opening');
      this.opening = true;
    } else if ($.type(alternateDuration) == 'number') {
      // alternate when set
      duration =  alternateDuration;
    } else {
      // otherwise decide on a duration for the transition
      // based on distance
      var transition = this.view.options.effects.transition,
          min = transition.min,
          max = transition.max,
          tdiff = max - min,

          viewport = Bounds.viewport(),

          distance = Math.abs(fromZ - wh),
          percentage = Math.min(1, distance / viewport[z]);

      duration = Math.round(min + (percentage * tdiff));
    }


    if (wh == 0) {
      this.closing = true;
      // we only add the closing class if we're not currently animating the window
      if (!this.element.is(':animated')) {
        this.element.addClass('strp-closing');
      }
    }

    // the animations
    var css = { overflow: 'visible' };
    css[z] = wh + 'px';

    var fx = 1;

    // _getEventSide checks this.element.outerWidth() on mousemove only when
    // this._outerWidth isn't set, we need that during animation,
    // afterResize will set it back along with the cached offsetLeft
    this._outerWidth = null;
    this._offsetLeft = null;

    var onResize = this.view.options.onResize,
        hasOnResize = $.type(onResize) == 'function';

    this.element.stop(true).animate(css, $.extend({
      duration: duration,
      complete: $.proxy(function() {
        if (--fx < 1) this._afterResize(callback);
      }, this)
    }, !hasOnResize ? {} : {
      // we only add step if there's an onResize callback
      step: $.proxy(function(now, fx) {
        if (fx.prop == z) {
          onResize.call(Strip, fx.prop, now, this.side);
        }
      }, this)
    }));

    if (this.spinnerMove) {
      fx++; // sync this effect
      this.spinnerMove.stop(true).animate(css, duration, $.proxy(function() {
        if (--fx < 1) this._afterResize(callback);
      }, this));
    }

    // return the duration for later use in synced animations
    return duration;
  },

  _afterResize: function(callback) {
    this.opening = false;
    this.closing = false;
    this.element.removeClass('strp-opening strp-closing');

    // cache outerWidth and offsetLeft for _getEventSide on mousemove
    this._outerWidth = this.element.outerWidth();
    this._offsetLeft = this.element.offset().left;

    if (callback) callback();
  },


  adjustPrevNext: function(callback, alternateDuration) {
    if (!this.view || !Pages.page) return;
    var page = Pages.page;

    // offset <>
    var windowVisible = this.element.is(':visible');
    if (!windowVisible) this.element.show();

    var pRestoreStyle = this._previous.attr('style');
    //this._previous.attr({ style: '' });
    this._previous.removeAttr('style');
    var pnMarginTop = parseInt(this._previous.css('margin-top')); // the original margin top
    this._previous.attr({ style: pRestoreStyle });

    if (!windowVisible) this.element.hide();

    var iH = page.info ? page.info.outerHeight() : 0;

    var buttons = this._previous.add(this._next),
        css = { 'margin-top': pnMarginTop - iH * .5 };

    var duration = this.view.options.effects.transition.min;
    if ($.type(alternateDuration) == 'number') duration = alternateDuration;

    // adjust <> instantly when opening
    if (this.opening) duration = 0;

    buttons.stop(true).animate(css, duration, callback);

    this._previous[this.mayPrevious() ? 'show' : 'hide']();
    this._next[this.mayNext() ? 'show' : 'hide']();
  },

  resetPrevNext: function() {
    var buttons = this._previous.add(this._next);
    buttons.stop(true).removeAttr('style');
  },


  // Load
  load: function(views, position) {
    this.views = views;

    Pages.add(views);

    if (position) {
      this.setPosition(position);
    }
  },

  // adjust the size based on the current view
  // this might require closing the window first
  setSide: function(side, callback) {
    if (this.side == side) {
      if (callback) callback();
      return;
    }

    // side has change, first close the window if it isn't already closed
    if (this.visible) {
      // NOTE: side should be set here since the window was visible
      // so using resize should be safe

      // hide the UI
      var duration = this.view ? this.view.options.effects.window.hide : 0;
      this.hideUI(null, duration);

      // avoid tracking mouse movement while the window is closing
      this.unbindUI();

      // hide
      this.resize(0, $.proxy(function() {

        // some of the things we'd normally do in hide
        this._safeResetsAfterSwitchSide();

        // we instantly hide the other views here
        Pages.hideVisibleInactive(0);

        this._setSide(side, callback);
      }, this));

      // show the UI on the next resize
      this._showUIOnResize = true;
    } else {
      this._setSide(side, callback);
    }
  },

  _setSide: function(side, callback) {
    this.side = side;

    var orientation = this.getOrientation();

    var elements = this.element;
    if (this.spinnerMove) elements = elements.add(this.spinnerMove);

    elements.removeClass('strp-horizontal strp-vertical')
            .addClass('strp-' + orientation);

    var ss = 'strp-side-';
    elements.removeClass(ss + 'top ' + ss + 'right ' + ss + 'bottom ' + ss + 'left')
            .addClass(ss + side);

    if (callback) callback();
  },

  getOrientation: function(side) {
    return (this.side == 'left' || this.side == 'right') ? 'horizontal' : 'vertical';
  },

  // loading indicator
  startLoading: function() {
    if (!this._spinner) return;

    this.spinnerMove.show();
    this._spinner.show();
  },

  stopLoading: function() {
    if (!this._spinner) return;

    // we only stop loading if there are no loading pages anymore
    var loadingCount = Pages.getLoadingCount();

    if (loadingCount < 1) {
      this._spinner.hide($.proxy(function() {
        this.spinnerMove.hide();
      }, this));
    }
  },

  setPosition: function(position, callback) {
    this._position = position;

    // store the current view
    this.view = this.views[position - 1];

    // we need to make sure that a possible hide effect doesn't
    // trigger its callbacks, as that would cancel the showing/loading
    // of the page started below
    this.stopHideQueue();

    // store the page and show it
    this.page = Pages.show(position, $.proxy(function() {
      var afterPosition = this.view.options.afterPosition;
      if ($.type(afterPosition) == 'function') {
        afterPosition.call(Strip, position);
      }
      if (callback) callback();
    }, this));
  },

  hide: function(callback) {
    var hideQueue = this.queues.hide;
    hideQueue.queue([]); // clear queue

    hideQueue.queue($.proxy(function(next_stop) {
      Pages.stop();
      next_stop();
    }, this));

    hideQueue.queue($.proxy(function(next_unbinds) {
      // ui
      var duration = this.view ? this.view.options.effects.window.hide : 0;
      this.unbindUI();
      this.hideUI(null, duration);

      // close on click outside
      this.unbindHideOnClickOutside();

      // keyboard
      Keyboard.disable();

      next_unbinds();
    }, this));

    hideQueue.queue($.proxy(function(next_zero) {
      // active classes should removed right as the closing effect starts
      // because clicking an element as it closes will re-open it,
      // that needs to be reflected in the class
      Pages.removeActiveClasses();

      this.resize(0, next_zero, this.view.options.effects.window.hide);

      // after we initiate the hide resize, the next resize should bring up the UI again
      this._showUIOnResize = true;
    }, this));

    // callbacks after resize in a separate queue
    // so we can stop the hideQueue without stopping the resize
    hideQueue.queue($.proxy(function(next_after_resize) {
      this._safeResetsAfterSwitchSide();

      // all of the below we cannot safely call safely
      this.stopObservingResize();

      Pages.removeAll();

      this.timers.clear();

      this._position = -1;

      // afterHide callback
      var afterHide = this.view && this.view.options.afterHide;
      if ($.type(afterHide) == 'function') {
        afterHide.call(Strip);
      }

      this.view = null;

      next_after_resize();
    }, this));

    if ($.type(callback) == 'function') {
      hideQueue.queue($.proxy(function(next_callback) {
        callback();
        next_callback();
      }, this));
    }
  },

  // stop all callbacks possibly queued up into a hide animation
  // this allows the hide animation to finish as we start showing/loading
  // a new page, a callback could otherwise interrupt this
  stopHideQueue: function() {
    this.queues.hide.queue([]);
  },

  // these are things we can safely call when switching side as well
  _safeResetsAfterSwitchSide: function() {
    // remove styling from window, so no width: 100%; height: 0 issues
    this.element.removeAttr('style');
    if (this.spinnerMove) this.spinnerMove.removeAttr('style');

    //Pages.removeExpired();
    this.visible = false;
    this.hideUI(null, 0);
    this.timers.clear('ui');
    this.resetPrevNext();

    // clear cached mousemove
    this._x = -1;
    this._y = -1;
  },

  // Previous / Next
  mayPrevious: function() {
    return (this.view && this.view.options.loop && this.views && this.views.length > 1) || this._position != 1;
  },

  previous: function(force) {
    var mayPrevious = this.mayPrevious();

    if (force || mayPrevious) {
      this.setPosition(this.getSurroundingIndexes().previous);
    }
  },

  mayNext: function() {
    var hasViews = this.views && this.views.length > 1;

    return (this.view && this.view.options.loop && hasViews) || (hasViews && this.getSurroundingIndexes().next != 1);
  },

  next: function(force) {
    var mayNext = this.mayNext();

    if (force || mayNext) {
      this.setPosition(this.getSurroundingIndexes().next);
    }
  },

  // surrounding
  getSurroundingIndexes: function() {
    if (!this.views) return {};

    var pos = this._position,
        length = this.views.length;

    var previous = (pos <= 1) ? length : pos - 1,
        next = (pos >= length) ? 1 : pos + 1;

    return {
      previous: previous,
      next: next
    };
  },


  // close when clicking outside of strip or an element opening strip
  bindHideOnClickOutside: function() {
    this.unbindHideOnClickOutside();
    $(document.documentElement).on('click', this._delegateHideOutsideHandler = $.proxy(this._delegateHideOutside, this));
  },

  unbindHideOnClickOutside: function() {
    if (this._delegateHideOutsideHandler) {
      $(document.documentElement).off('click', this._delegateHideOutsideHandler);
      this._delegateHideOutsideHandler = null;
    }
  },

  _delegateHideOutside: function(event) {
    var page = Pages.page;
    if (!this.visible || !(page && page.view.options.hideOnClickOutside)) return;

    var element = event.target;

    if (!$(element).closest('.strip, .strp-window')[0]) {
      this.hide();
    }
  },


  // UI
  bindUI: function() {
    this.unbindUI();

    if (!Support.mobileTouch) {
      this.element.on('mouseenter', this._showUIHandler = $.proxy(this.showUI, this))
                  .on('mouseleave', this._hideUIHandler = $.proxy(this.hideUI, this));

      this.element.on('mousemove', this._mousemoveUIHandler = $.proxy(function(event) {
        // Chrome has a bug that triggers mousemove events incorrectly
        // we have to work around this by comparing cursor positions
        // so only true mousemove events pass through:
        // https://code.google.com/p/chromium/issues/detail?id=420032
        var x = event.pageX,
            y = event.pageY;

        if (this._hoveringNav || (y == this._y && x == this._x)) {
          return;
        }

        // cache x/y
        this._x = x;
        this._y = y;

        this.showUI();
        this.startUITimer();
      }, this));

      // delegate <> mousemove/click states
      this._pages.on('mousemove', '.strp-container', this._onMouseMoveHandler = $.proxy(this._onMouseMove, this))
                 .on('mouseleave', '.strp-container', this._onMouseLeaveHandler = $.proxy(this._onMouseLeave, this))
                 .on('mouseenter', '.strp-container', this._onMouseEnterHandler = $.proxy(this._onMouseEnter, this));

      // delegate moving onto the <> buttons
      // keeping the mouse on them should keep the buttons visible
      this.element.on('mouseenter', '.strp-nav', this._onNavMouseEnterHandler = $.proxy(this._onNavMouseEnter, this))
                  .on('mouseleave', '.strp-nav', this._onNavMouseLeaveHandler = $.proxy(this._onNavMouseLeave, this));

      $(window).on('scroll', this._onScrollHandler = $.proxy(this._onScroll, this));
    }

    this._pages.on('click', '.strp-container', this._onClickHandler = $.proxy(this._onClick, this));
  },

  // TODO: switch to jQuery.on/off
  unbindUI: function() {
    if (this._showUIHandler) {
      this.element.off('mouseenter', this._showUIHandler)
                  .off('mouseleave', this._hideUIHandler)
                  .off('mousemove', this._mousemoveUIHandler);

      this._pages.off('mousemove', '.strp-container', this._onMouseMoveHandler)
                 .off('mouseleave', '.strp-container', this._onMouseLeaveHandler)
                 .off('mouseenter', '.strp-container', this._onMouseEnterHandler);

      this.element.off('mouseenter', '.strp-nav', this._onNavMouseEnterHandler)
                  .off('mouseleave', '.strp-nav', this._onNavMouseLeaveHandler);

      $(window).off('scroll', this._onScrollHandler);

      this._showUIHandler = null;
    }

    if (this._onClickHandler) {
      this._pages.off('click', '.strp-container', this._onClickHandler);
      this._onClickHandler = null;
    }
  },

  // reset cached offsetLeft and outerWidth so they are recalculated after scrolling,
  // the cached values might be incorrect after scrolling left/right
  _onScroll: function() {
    this._offsetLeft = this._outerWidth = null;
  },

  // events bounds by bindUI
  _onMouseMove: function(event) {
    var Side = this._getEventSide(event),
        side = Side.toLowerCase();

    this.element[(this['may' + Side]() ? 'add' : 'remove') + 'Class']('strp-hovering-clickable');
    this._previous[(side != 'next' ? 'add' : 'remove') + 'Class']('strp-nav-previous-hover strp-nav-hover');
    this._next[(side == 'next' ? 'add' : 'remove') + 'Class']('strp-nav-next-hover strp-nav-hover');
  },

  _onMouseLeave: function(event) {
    this.element.removeClass('strp-hovering-clickable');
    this._previous.removeClass('strp-nav-previous-hover')
                  .add(this._next.removeClass('strp-nav-next-hover'))
                  .removeClass('strp-nav-hover');
  },

  _onClick: function(event) {
    var Side = this._getEventSide(event),
        side = Side.toLowerCase();

    this[side]();

    // adjust cursor, doesn't work with effects
    // but _onMouseEnter is used to fix that
    this._onMouseMove(event);
  },

  _onMouseEnter: function(event) {
    // this solves clicking an area and not having an updating cursor
    // when not moving cursor after click. When an overlapping page comes into view
    // it'll trigger a mouseenter after the mouseout on the disappearing page
    // that would normally remove the clickable class
    this._onMouseMove(event);
  },

  _getEventSide: function(event) {
    var offsetLeft = this._offsetLeft || this.element.offset().left,
        left = event.pageX - offsetLeft,
        width = this._outerWidth || this.element.outerWidth();

    return left < .5 * width ? 'Previous' : 'Next';
  },

  _onNavMouseEnter: function(event) {
    this._hoveringNav = true;
    this.clearUITimer();
  },

  _onNavMouseLeave: function(event) {
    this._hoveringNav = false;
    this.startUITimer();
  },

  // Actual UI actions
  showUI: function(callback, alternateDuration) {
    // clear the timer everytime so we can keep clicking elements and fading
    // in the ui while not having the timer interupt that with a hide
    this.clearUITimer();

    // we're only fading the inner button icons since the margin on their wrapper divs might change
    var elements = this.element.find('.strp-nav-button');

    var duration = this.view ? this.view.options.effects.ui.show : 0;
    if ($.type(alternateDuration) == 'number') duration = alternateDuration;

    elements.stop(true).fadeTo(duration, 1, 'stripEaseInSine', $.proxy(function() {
      this.startUITimer();
      if ($.type(callback) == 'function') callback();
    }, this));
  },

  hideUI: function(callback, alternateDuration) {
    var elements = this.element.find('.strp-nav-button');

    var duration = this.view ? this.view.options.effects.ui.hide : 0;
    if ($.type(alternateDuration) == 'number') duration = alternateDuration;

    elements.stop(true).fadeOut(duration, 'stripEaseOutSine', function() {
      if ($.type(callback) == 'function') callback();
    });
  },

  // UI Timer
  // not used on mobile-touch based devices
  clearUITimer: function() {
    if (Support.mobileTouch) return;

    this.timers.clear('ui');
  },

  startUITimer: function() {
    if (Support.mobileTouch) return;

    this.clearUITimer();
    this.timers.set('ui', $.proxy(function(){
      this.hideUI();
    }, this), this.view ? this.view.options.uiDelay : 0);
  }
};

//  Keyboard
//  keeps track of keyboard events when enabled
var Keyboard = {
  enabled: false,

  keyCode: {
    'left':  37,
    'right': 39,
    'esc':   27
  },

  // enable is passed the keyboard option of a page, which can be false
  // or contains multiple buttons to toggle
  enable: function(enabled) {
    this.disable();

    if (!enabled) return;

    $(document).on('keydown', this._onKeyDownHandler = $.proxy(this.onKeyDown, this))
               .on('keyup', this._onKeyUpHandler = $.proxy(this.onKeyUp, this));

    this.enabled = enabled;
  },

  disable: function() {
    this.enabled = false;

    if (this._onKeyUpHandler) {
      $(document).off('keyup', this._onKeyUpHandler)
                 .off('keydown', this._onKeyDownHandler);
      this._onKeyUpHandler = this._onKeyDownHandler = null;
    }
  },

  onKeyDown: function(event) {
    if (!this.enabled || !Window.visible) return;

    var key = this.getKeyByKeyCode(event.keyCode);

    if (!key || (key && this.enabled && !this.enabled[key])) return;

    event.preventDefault();
    event.stopPropagation();

    switch (key) {
      case 'left':
        Window.previous();
        break;
      case 'right':
        Window.next();
        break;
    }
  },

  onKeyUp: function(event) {
    if (!this.enabled || !Window.visible) return;

    var key = this.getKeyByKeyCode(event.keyCode);

    if (!key || (key && this.enabled && !this.enabled[key])) return;

    switch (key) {
      case 'esc':
        Window.hide();
        break;
    }
  },

  getKeyByKeyCode: function(keyCode) {
    for(var key in this.keyCode) {
      if (this.keyCode[key] == keyCode) return key;
    }
    return null;
  }
};

// API

// an unexposed object for internal use
var _Strip = {
  _disabled: false,
  _fallback: true,

  initialize: function() {
    Window.initialize();
    if (!this._disabled) this.startDelegating();
  },

  // click delegation
  startDelegating: function() {
    this.stopDelegating();
    $(document.documentElement).delegate('.strip[href]', 'click', this._delegateHandler = $.proxy(this.delegate, this));
  },

  stopDelegating: function() {
    if (this._delegateHandler) {
      $(document.documentElement).undelegate('.strip[href]', 'click', this._delegateHandler);
      this._delegateHandler = null;
    }
  },

  delegate: function(event) {
    if (this._disabled) return;

    event.stopPropagation();
    event.preventDefault();

    var element = event.currentTarget;

    _Strip.show(element);
  },

  show: function(object) {
    if (this._disabled) {
      this.showFallback.apply(_Strip, _slice.call(arguments));
      return;
    }

    var options = arguments[1] || {},
        position = arguments[2];

    if (arguments[1] && $.type(arguments[1]) == 'number') {
      position = arguments[1];
      options = {};
    }

    var views = [], object_type,
        isElement = _.isElement(object);

    switch ((object_type = $.type(object))) {
      case 'string':
      case 'object':
        var view = new View(object, options),
            _dgo = "data-strip-group-options";

        if (view.group) {
          // extend the entire group

          // if we have an element, look for other elements
          if (isElement) {
            var elements = $('.strip[data-strip-group="' + $(object).data('strip-group') + '"]');

            // find possible group options
            var groupOptions = {};

            elements.filter('[' + _dgo + ']').each(function(i, element) {
              $.extend(groupOptions, eval('({' + ($(element).attr(_dgo) || '') + '})'));
            });

            elements.each(function(i, element) {
              // adjust the position if we find that the given object position
              if (!position && element == object) position = i + 1;
              views.push(new View(element, $.extend({}, groupOptions, options)));
            });
          }
        } else {
          var groupOptions = {};
          if (isElement && $(object).is('[' + _dgo + ']')) {
            $.extend(groupOptions, eval('({' + ($(object).attr(_dgo) || '') + '})'));
            // reset the view with group options applied
            view = new View(object, $.extend({}, groupOptions, options));
          }

          views.push(view);
        }
        break;


      case 'array':
        $.each(object, function(i, item) {
          var view = new View(item, options);
          views.push(view);
        });
        break;
    }

    // if we haven't found a position by now, load the first view
    if (!position || position < 1) {
      position = 1;
    }
    if (position > views.length) position = views.length;

    // Allow API events to pass through by disabling hideOnClickOutside.
    // It is re-enabled when bringing a page into view using a slight delay
    // allowing a possible click event that triggers this show() function to
    // fully bubble up. This is needed when Strip is visible and Strip.show()
    // is called, the click would otherwise bubble down and instantly hide,
    // cancelling the show()
    Window.unbindHideOnClickOutside();

    // if we've clicked an element, search for it in the currently open pagegroup
    var positionInAPG;
    if (isElement && (positionInAPG = Pages.getPositionInActivePageGroup(object))) {
      // if we've clicked the exact same element it'll never re-enable
      // hideOnClickOutside delegation because Pages.show() won't let it
      // through, we re-enable it here in that case
      if (positionInAPG == Window._position) {
        Window.bindHideOnClickOutside();
      }

      Window.setPosition(positionInAPG);
    } else {
      // otherwise start loading and open
      Window.load(views, position);
    }

  },

  showFallback: (function() {
    function getUrl(object) {
      var url, type = $.type(object);

      if (type == 'string') {
        url = object;
      } else if (type == 'array' && object[0]) {
        url = getUrl(object[0]);
      } else if (_.isElement(object) && $(object).attr('href')) {
        var url = $(object).attr('href');
      } else if (object.url) {
        url = object.url;
      } else {
        url = false;
      }

      return url;
    }

    return function(object) {
      if (!_Strip._fallback) return;
      var url = getUrl(object);
      if (url) window.location.href = url;
    };
  })()
};

$.extend(Strip, {
  show: function(object) {
    _Strip.show.apply(_Strip, _slice.call(arguments));
    return this;
  },

  hide: function() {
    Window.hide();
    return this;
  },

  disable: function() {
    _Strip.stopDelegating();
    _Strip._disabled = true;
    return this;
  },

  enable: function() {
    _Strip._disabled = false;
    _Strip.startDelegating();
    return this;
  },

  fallback: function(fallback) {
    _Strip._fallback = fallback;
    return this;
  },

  setDefaultSkin: function(skin) {
    Options.defaults.skin = skin;
    return this;
  }
});


// fallback for old browsers without full position:fixed support
if (
    // IE6
    (Browser.IE && Browser.IE < 7)
    // old Android
    // added a version check because Firefox on Android doesn't have a
    // version number above 4.2 anymore
    || ($.type(Browser.Android) == 'number' && Browser.Android < 3)
    // old WebKit
    || (Browser.MobileSafari && ($.type(Browser.WebKit) == 'number' && Browser.WebKit < 533.18))
  ) {
  // we'll reset the show function
  _Strip.show = _Strip.showFallback;

  // disable some function we don't want to run
  $.each('startDelegating stopDelegating initialize'.split(' '), function(i, fn) {
    _Strip[fn] = function() { };
  });

  Strip.hide = function() { return this; };
}

// start
$(document).ready(function(event) {
  _Strip.initialize();
});

return Strip;

}));
(function() {
  $(document).ready(function() {
    return $('.tcon').on('click', function(e) {
      e.preventDefault;
      return $('nav').toggleClass('open');
    });
  });

}).call(this);
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD module
        define(factory);
    } else if (typeof exports === 'object') {
        // CommonJS-like environment (i.e. Node)
        module.exports = factory();
    } else {
        // Browser global
        root.transformicons = factory();
    }
}(this || window, function () {

    // ####################
    // MODULE TRANSFORMICON
    // ####################
    'use strict';

    var
        tcon = {}, // static class
        _transformClass = 'tcon-transform',

    // const
        DEFAULT_EVENTS = {
            transform : ['click'],
            revert : ['click']
        };

    // ##############
    // private methods
    // ##############

    /**
     * Normalize a selector string, a single DOM element or an array of elements into an array of DOM elements.
     * @private
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements
     * @returns {array} Array of DOM elements
     */
    var getElementList = function (elements) {
        if (typeof elements === 'string') {
            return Array.prototype.slice.call(document.querySelectorAll(elements));
        } else if (typeof elements === 'undefined' || elements instanceof Array) {
            return elements;
        } else {
            return [elements];
        }
    };

    /**
     * Normalize a string with eventnames separated by spaces or an array of eventnames into an array of eventnames.
     * @private
     *
     * @param {(string|array)} elements - String with eventnames separated by spaces or array of eventnames
     * @returns {array} Array of eventnames
     */
    var getEventList = function (events) {
        if (typeof events === 'string') {
            return events.toLowerCase().split(' ');
        } else {
            return events;
        }
    };

    /**
     * Attach or remove transformicon events to one or more elements.
     * @private
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {boolean} [remove=false] - Defines wether the listeners should be added (default) or removed.
     */
    var setListeners = function (elements, events, remove) {
        var
            method = (remove ? 'remove' : 'add') + 'EventListener',
            elementList = getElementList(elements),
            currentElement = elementList.length,
            eventLists = {};

        // get events or use defaults
        for (var prop in DEFAULT_EVENTS) {
            eventLists[prop] = (events && events[prop]) ? getEventList(events[prop]) : DEFAULT_EVENTS[prop];
        }

        // add or remove all events for all occasions to all elements
        while(currentElement--) {
            for (var occasion in eventLists) {
                var currentEvent = eventLists[occasion].length;
                while(currentEvent--) {
                    elementList[currentElement][method](eventLists[occasion][currentEvent], handleEvent);
                }
            }
        }
    };

    /**
     * Event handler for transform events.
     * @private
     *
     * @param {object} event - event object
     */
    var handleEvent = function (event) {
        tcon.toggle(event.currentTarget);
    };

    // ##############
    // public methods
    // ##############

    /**
     * Add transformicon behavior to one or more elements.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
     * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.add = function (elements, events) {
        setListeners(elements, events);
        return tcon;
    };

    /**
     * Remove transformicon behavior from one or more elements.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @param {object} [events] - An Object containing one or more special event definitions
     * @param {(string|array)} [events.transform] - One or more events that trigger the transform. Can be an Array or string with events seperated by space.
     * @param {(string|array)} [events.revert] - One or more events that trigger the reversion. Can be an Array or string with events seperated by space.
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.remove = function (elements, events) {
        setListeners(elements, events, true);
        return tcon;
    };

    /**
     * Put one or more elements in the transformed state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be transformed
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.transform = function (elements) {
        getElementList(elements).forEach(function(element) {
            element.classList.add(_transformClass);
        });
        return tcon;
    };

    /**
     * Revert one or more elements to the original state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be reverted
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.revert = function (elements) {
        getElementList(elements).forEach(function(element) {
            element.classList.remove(_transformClass);
        });
        return tcon;
    };

    /**
     * Toggles one or more elements between transformed and original state.
     * @public
     *
     * @param {(string|element|array)} elements - Selector, DOM element or Array of DOM elements to be toggled
     * @returns {transformicon} transformicon instance for chaining
     */
    tcon.toggle = function (elements) {
        getElementList(elements).forEach(function(element) {
            tcon[element.classList.contains(_transformClass) ? 'revert' : 'transform'](element);
        });
        return tcon;
    };

    return tcon;
}));
transformicons.add('.tcon');
(function() {
    var config = {
        kitId: 'fah8qdn',
        scriptTimeout: 3000
    };
    var h=document.getElementsByTagName("html")[0];h.className+=" wf-loading";var t=setTimeout(function(){h.className=h.className.replace(/(\s|^)wf-loading(\s|$)/g," ");h.className+=" wf-inactive"},config.scriptTimeout);var tk=document.createElement("script"),d=false;tk.src='//use.typekit.net/'+config.kitId+'.js';tk.type="text/javascript";tk.async="true";tk.onload=tk.onreadystatechange=function(){var a=this.readyState;if(d||a&&a!="complete"&&a!="loaded")return;d=true;clearTimeout(t);try{Typekit.load(config)}catch(b){}};var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(tk,s)
})();
/*!
Waypoints - 3.1.1
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/

(function() {
  'use strict'

  var keyCounter = 0
  var allWaypoints = {}

  /* http://imakewebthings.com/waypoints/api/waypoint */
  function Waypoint(options) {
    if (!options) {
      throw new Error('No options passed to Waypoint constructor')
    }
    if (!options.element) {
      throw new Error('No element option passed to Waypoint constructor')
    }
    if (!options.handler) {
      throw new Error('No handler option passed to Waypoint constructor')
    }

    this.key = 'waypoint-' + keyCounter
    this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)
    this.element = this.options.element
    this.adapter = new Waypoint.Adapter(this.element)
    this.callback = options.handler
    this.axis = this.options.horizontal ? 'horizontal' : 'vertical'
    this.enabled = this.options.enabled
    this.triggerPoint = null
    this.group = Waypoint.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    })
    this.context = Waypoint.Context.findOrCreateByElement(this.options.context)

    if (Waypoint.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint.offsetAliases[this.options.offset]
    }
    this.group.add(this)
    this.context.add(this)
    allWaypoints[this.key] = this
    keyCounter += 1
  }

  /* Private */
  Waypoint.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction)
  }

  /* Private */
  Waypoint.prototype.trigger = function(args) {
    if (!this.enabled) {
      return
    }
    if (this.callback) {
      this.callback.apply(this, args)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy */
  Waypoint.prototype.destroy = function() {
    this.context.remove(this)
    this.group.remove(this)
    delete allWaypoints[this.key]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable */
  Waypoint.prototype.disable = function() {
    this.enabled = false
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable */
  Waypoint.prototype.enable = function() {
    this.context.refresh()
    this.enabled = true
    return this
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/next */
  Waypoint.prototype.next = function() {
    return this.group.next(this)
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/previous */
  Waypoint.prototype.previous = function() {
    return this.group.previous(this)
  }

  /* Private */
  Waypoint.invokeAll = function(method) {
    var allWaypointsArray = []
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey])
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/destroy-all */
  Waypoint.destroyAll = function() {
    Waypoint.invokeAll('destroy')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/disable-all */
  Waypoint.disableAll = function() {
    Waypoint.invokeAll('disable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/enable-all */
  Waypoint.enableAll = function() {
    Waypoint.invokeAll('enable')
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/refresh-all */
  Waypoint.refreshAll = function() {
    Waypoint.Context.refreshAll()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-height */
  Waypoint.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/viewport-width */
  Waypoint.viewportWidth = function() {
    return document.documentElement.clientWidth
  }

  Waypoint.adapters = []

  Waypoint.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: 'default',
    horizontal: false,
    offset: 0
  }

  Waypoint.offsetAliases = {
    'bottom-in-view': function() {
      return this.context.innerHeight() - this.adapter.outerHeight()
    },
    'right-in-view': function() {
      return this.context.innerWidth() - this.adapter.outerWidth()
    }
  }

  window.Waypoint = Waypoint
}())
;(function() {
  'use strict'

  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1000 / 60)
  }

  var keyCounter = 0
  var contexts = {}
  var Waypoint = window.Waypoint
  var oldWindowLoad = window.onload

  /* http://imakewebthings.com/waypoints/api/context */
  function Context(element) {
    this.element = element
    this.Adapter = Waypoint.Adapter
    this.adapter = new this.Adapter(element)
    this.key = 'waypoint-context-' + keyCounter
    this.didScroll = false
    this.didResize = false
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    }
    this.waypoints = {
      vertical: {},
      horizontal: {}
    }

    element.waypointContextKey = this.key
    contexts[element.waypointContextKey] = this
    keyCounter += 1

    this.createThrottledScrollHandler()
    this.createThrottledResizeHandler()
  }

  /* Private */
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? 'horizontal' : 'vertical'
    this.waypoints[axis][waypoint.key] = waypoint
    this.refresh()
  }

  /* Private */
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal)
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical)
    if (horizontalEmpty && verticalEmpty) {
      this.adapter.off('.waypoints')
      delete contexts[this.key]
    }
  }

  /* Private */
  Context.prototype.createThrottledResizeHandler = function() {
    var self = this

    function resizeHandler() {
      self.handleResize()
      self.didResize = false
    }

    this.adapter.on('resize.waypoints', function() {
      if (!self.didResize) {
        self.didResize = true
        Waypoint.requestAnimationFrame(resizeHandler)
      }
    })
  }

  /* Private */
  Context.prototype.createThrottledScrollHandler = function() {
    var self = this
    function scrollHandler() {
      self.handleScroll()
      self.didScroll = false
    }

    this.adapter.on('scroll.waypoints', function() {
      if (!self.didScroll || Waypoint.isTouch) {
        self.didScroll = true
        Waypoint.requestAnimationFrame(scrollHandler)
      }
    })
  }

  /* Private */
  Context.prototype.handleResize = function() {
    Waypoint.Context.refreshAll()
  }

  /* Private */
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {}
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left'
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      var isForward = axis.newScroll > axis.oldScroll
      var direction = isForward ? axis.forward : axis.backward

      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    }
  }

  /* Private */
  Context.prototype.innerHeight = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportHeight()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerHeight()
  }

  /* Private */
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key]
    this.checkEmpty()
  }

  /* Private */
  Context.prototype.innerWidth = function() {
    /*eslint-disable eqeqeq */
    if (this.element == this.element.window) {
      return Waypoint.viewportWidth()
    }
    /*eslint-enable eqeqeq */
    return this.adapter.innerWidth()
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-destroy */
  Context.prototype.destroy = function() {
    var allWaypoints = []
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey])
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-refresh */
  Context.prototype.refresh = function() {
    /*eslint-disable eqeqeq */
    var isWindow = this.element == this.element.window
    /*eslint-enable eqeqeq */
    var contextOffset = this.adapter.offset()
    var triggeredGroups = {}
    var axes

    this.handleScroll()
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: 'right',
        backward: 'left',
        offsetProp: 'left'
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: 'down',
        backward: 'up',
        offsetProp: 'top'
      }
    }

    for (var axisKey in axes) {
      var axis = axes[axisKey]
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey]
        var adjustment = waypoint.options.offset
        var oldTriggerPoint = waypoint.triggerPoint
        var elementOffset = 0
        var freshWaypoint = oldTriggerPoint == null
        var contextModifier, wasBeforeScroll, nowAfterScroll
        var triggeredBackward, triggeredForward

        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp]
        }

        if (typeof adjustment === 'function') {
          adjustment = adjustment.apply(waypoint)
        }
        else if (typeof adjustment === 'string') {
          adjustment = parseFloat(adjustment)
          if (waypoint.options.offset.indexOf('%') > - 1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100)
          }
        }

        contextModifier = axis.contextScroll - axis.contextOffset
        waypoint.triggerPoint = elementOffset + contextModifier - adjustment
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll
        triggeredBackward = wasBeforeScroll && nowAfterScroll
        triggeredForward = !wasBeforeScroll && !nowAfterScroll

        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
        else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward)
          triggeredGroups[waypoint.group.id] = waypoint.group
        }
      }
    }

    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers()
    }

    return this
  }

  /* Private */
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element)
  }

  /* Private */
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh()
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/context-find-by-element */
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey]
  }

  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad()
    }
    Context.refreshAll()
  }

  Waypoint.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      requestAnimationFrameShim
    requestFn.call(window, callback)
  }
  Waypoint.Context = Context
}())
;(function() {
  'use strict'

  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint
  }

  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint
  }

  var groups = {
    vertical: {},
    horizontal: {}
  }
  var Waypoint = window.Waypoint

  /* http://imakewebthings.com/waypoints/api/group */
  function Group(options) {
    this.name = options.name
    this.axis = options.axis
    this.id = this.name + '-' + this.axis
    this.waypoints = []
    this.clearTriggerQueues()
    groups[this.axis][this.name] = this
  }

  /* Private */
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint)
  }

  /* Private */
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    }
  }

  /* Private */
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction]
      var reverse = direction === 'up' || direction === 'left'
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint)
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i]
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction])
        }
      }
    }
    this.clearTriggerQueues()
  }

  /* Private */
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    var isLast = index === this.waypoints.length - 1
    return isLast ? null : this.waypoints[index + 1]
  }

  /* Private */
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint)
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    return index ? this.waypoints[index - 1] : null
  }

  /* Private */
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint)
  }

  /* Private */
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint.Adapter.inArray(waypoint, this.waypoints)
    if (index > -1) {
      this.waypoints.splice(index, 1)
    }
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/first */
  Group.prototype.first = function() {
    return this.waypoints[0]
  }

  /* Public */
  /* http://imakewebthings.com/waypoints/api/last */
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
  }

  /* Private */
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options)
  }

  Waypoint.Group = Group
}())
;(function() {
  'use strict'

  var $ = window.jQuery
  var Waypoint = window.Waypoint

  function JQueryAdapter(element) {
    this.$element = $(element)
  }

  $.each([
    'innerHeight',
    'innerWidth',
    'off',
    'offset',
    'on',
    'outerHeight',
    'outerWidth',
    'scrollLeft',
    'scrollTop'
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments)
      return this.$element[method].apply(this.$element, args)
    }
  })

  $.each([
    'extend',
    'inArray',
    'isEmptyObject'
  ], function(i, method) {
    JQueryAdapter[method] = $[method]
  })

  Waypoint.adapters.push({
    name: 'jquery',
    Adapter: JQueryAdapter
  })
  Waypoint.Adapter = JQueryAdapter
}())
;(function() {
  'use strict'

  var Waypoint = window.Waypoint

  function createExtension(framework) {
    return function() {
      var waypoints = []
      var overrides = arguments[0]

      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1])
        overrides.handler = arguments[0]
      }

      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        })
        if (typeof options.context === 'string') {
          options.context = framework(this).closest(options.context)[0]
        }
        waypoints.push(new Waypoint(options))
      })

      return waypoints
    }
  }

  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery)
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto)
  }
}())
;
/*! VelocityJS.org (1.2.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */

!function(e){function t(e){var t=e.length,r=$.type(e);return"function"===r||$.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e}if(!e.jQuery){var $=function(e,t){return new $.fn.init(e,t)};$.isWindow=function(e){return null!=e&&e==e.window},$.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[o.call(e)]||"object":typeof e},$.isArray=Array.isArray||function(e){return"array"===$.type(e)},$.isPlainObject=function(e){var t;if(!e||"object"!==$.type(e)||e.nodeType||$.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||n.call(e,t)},$.each=function(e,r,a){var n,o=0,i=e.length,s=t(e);if(a){if(s)for(;i>o&&(n=r.apply(e[o],a),n!==!1);o++);else for(o in e)if(n=r.apply(e[o],a),n===!1)break}else if(s)for(;i>o&&(n=r.call(e[o],o,e[o]),n!==!1);o++);else for(o in e)if(n=r.call(e[o],o,e[o]),n===!1)break;return e},$.data=function(e,t,a){if(void 0===a){var n=e[$.expando],o=n&&r[n];if(void 0===t)return o;if(o&&t in o)return o[t]}else if(void 0!==t){var n=e[$.expando]||(e[$.expando]=++$.uuid);return r[n]=r[n]||{},r[n][t]=a,a}},$.removeData=function(e,t){var a=e[$.expando],n=a&&r[a];n&&$.each(t,function(e,t){delete n[t]})},$.extend=function(){var e,t,r,a,n,o,i=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof i&&(u=i,i=arguments[s]||{},s++),"object"!=typeof i&&"function"!==$.type(i)&&(i={}),s===l&&(i=this,s--);l>s;s++)if(null!=(n=arguments[s]))for(a in n)e=i[a],r=n[a],i!==r&&(u&&r&&($.isPlainObject(r)||(t=$.isArray(r)))?(t?(t=!1,o=e&&$.isArray(e)?e:[]):o=e&&$.isPlainObject(e)?e:{},i[a]=$.extend(u,o,r)):void 0!==r&&(i[a]=r));return i},$.queue=function(e,r,a){function n(e,r){var a=r||[];return null!=e&&(t(Object(e))?!function(e,t){for(var r=+t.length,a=0,n=e.length;r>a;)e[n++]=t[a++];if(r!==r)for(;void 0!==t[a];)e[n++]=t[a++];return e.length=n,e}(a,"string"==typeof e?[e]:e):[].push.call(a,e)),a}if(e){r=(r||"fx")+"queue";var o=$.data(e,r);return a?(!o||$.isArray(a)?o=$.data(e,r,n(a)):o.push(a),o):o||[]}},$.dequeue=function(e,t){$.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var a=$.queue(r,t),n=a.shift();"inprogress"===n&&(n=a.shift()),n&&("fx"===t&&a.unshift("inprogress"),n.call(r,function(){$.dequeue(r,t)}))})},$.fn=$.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),a=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:$(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(a.top+=parseFloat(e.style.borderTopWidth)||0,a.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-a.top,left:r.left-a.left}}};var r={};$.expando="velocity"+(new Date).getTime(),$.uuid=0;for(var a={},n=a.hasOwnProperty,o=a.toString,i="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<i.length;s++)a["[object "+i[s]+"]"]=i[s].toLowerCase();$.fn.init.prototype=$.fn,e.Velocity={Utilities:$}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,r,a){function n(e){for(var t=-1,r=e?e.length:0,a=[];++t<r;){var n=e[t];n&&a.push(n)}return a}function o(e){return g.isWrapped(e)?e=[].slice.call(e):g.isNode(e)&&(e=[e]),e}function i(e){var t=$.data(e,"velocity");return null===t?a:t}function s(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,r,a,n){function o(e,t){return 1-3*t+3*e}function i(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((o(t,r)*e+i(t,r))*e+s(t))*e}function u(e,t,r){return 3*o(t,r)*e*e+2*i(t,r)*e+s(t)}function c(t,r){for(var n=0;m>n;++n){var o=u(r,e,a);if(0===o)return r;var i=l(r,e,a)-t;r-=i/o}return r}function p(){for(var t=0;b>t;++t)w[t]=l(t*x,e,a)}function f(t,r,n){var o,i,s=0;do i=r+(n-r)/2,o=l(i,e,a)-t,o>0?n=i:r=i;while(Math.abs(o)>h&&++s<v);return i}function d(t){for(var r=0,n=1,o=b-1;n!=o&&w[n]<=t;++n)r+=x;--n;var i=(t-w[n])/(w[n+1]-w[n]),s=r+i*x,l=u(s,e,a);return l>=y?c(t,s):0==l?s:f(t,r,r+x)}function g(){V=!0,(e!=r||a!=n)&&p()}var m=4,y=.001,h=1e-7,v=10,b=11,x=1/(b-1),S="Float32Array"in t;if(4!==arguments.length)return!1;for(var P=0;4>P;++P)if("number"!=typeof arguments[P]||isNaN(arguments[P])||!isFinite(arguments[P]))return!1;e=Math.min(e,1),a=Math.min(a,1),e=Math.max(e,0),a=Math.max(a,0);var w=S?new Float32Array(b):new Array(b),V=!1,C=function(t){return V||g(),e===r&&a===n?t:0===t?0:1===t?1:l(d(t),r,n)};C.getControlPoints=function(){return[{x:e,y:r},{x:a,y:n}]};var T="generateBezier("+[e,r,a,n]+")";return C.toString=function(){return T},C}function u(e,t){var r=e;return g.isString(e)?v.Easings[e]||(r=!1):r=g.isArray(e)&&1===e.length?s.apply(null,e):g.isArray(e)&&2===e.length?b.apply(null,e.concat([t])):g.isArray(e)&&4===e.length?l.apply(null,e):!1,r===!1&&(r=v.Easings[v.defaults.easing]?v.defaults.easing:h),r}function c(e){if(e){var t=(new Date).getTime(),r=v.State.calls.length;r>1e4&&(v.State.calls=n(v.State.calls));for(var o=0;r>o;o++)if(v.State.calls[o]){var s=v.State.calls[o],l=s[0],u=s[2],f=s[3],d=!!f,m=null;f||(f=v.State.calls[o][3]=t-16);for(var y=Math.min((t-f)/u.duration,1),h=0,b=l.length;b>h;h++){var S=l[h],w=S.element;if(i(w)){var V=!1;if(u.display!==a&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var C=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];$.each(C,function(e,t){x.setPropertyValue(w,"display",t)})}x.setPropertyValue(w,"display",u.display)}u.visibility!==a&&"hidden"!==u.visibility&&x.setPropertyValue(w,"visibility",u.visibility);for(var T in S)if("element"!==T){var k=S[T],A,F=g.isString(k.easing)?v.Easings[k.easing]:k.easing;if(1===y)A=k.endValue;else{var E=k.endValue-k.startValue;if(A=k.startValue+E*F(y,u,E),!d&&A===k.currentValue)continue}if(k.currentValue=A,"tween"===T)m=A;else{if(x.Hooks.registered[T]){var j=x.Hooks.getRoot(T),H=i(w).rootPropertyValueCache[j];H&&(k.rootPropertyValue=H)}var N=x.setPropertyValue(w,T,k.currentValue+(0===parseFloat(A)?"":k.unitType),k.rootPropertyValue,k.scrollData);x.Hooks.registered[T]&&(i(w).rootPropertyValueCache[j]=x.Normalizations.registered[j]?x.Normalizations.registered[j]("extract",null,N[1]):N[1]),"transform"===N[0]&&(V=!0)}}u.mobileHA&&i(w).transformCache.translate3d===a&&(i(w).transformCache.translate3d="(0px, 0px, 0px)",V=!0),V&&x.flushTransformCache(w)}}u.display!==a&&"none"!==u.display&&(v.State.calls[o][2].display=!1),u.visibility!==a&&"hidden"!==u.visibility&&(v.State.calls[o][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],y,Math.max(0,f+u.duration-t),f,m),1===y&&p(o)}}v.State.isTicking&&P(c)}function p(e,t){if(!v.State.calls[e])return!1;for(var r=v.State.calls[e][0],n=v.State.calls[e][1],o=v.State.calls[e][2],s=v.State.calls[e][4],l=!1,u=0,c=r.length;c>u;u++){var p=r[u].element;if(t||o.loop||("none"===o.display&&x.setPropertyValue(p,"display",o.display),"hidden"===o.visibility&&x.setPropertyValue(p,"visibility",o.visibility)),o.loop!==!0&&($.queue(p)[1]===a||!/\.velocityQueueEntryFlag/i.test($.queue(p)[1]))&&i(p)){i(p).isAnimating=!1,i(p).rootPropertyValueCache={};var f=!1;$.each(x.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,n=i(p).transformCache[t];i(p).transformCache[t]!==a&&new RegExp("^\\("+r+"[^.]").test(n)&&(f=!0,delete i(p).transformCache[t])}),o.mobileHA&&(f=!0,delete i(p).transformCache.translate3d),f&&x.flushTransformCache(p),x.Values.removeClass(p,"velocity-animating")}if(!t&&o.complete&&!o.loop&&u===c-1)try{o.complete.call(n,n)}catch(d){setTimeout(function(){throw d},1)}s&&o.loop!==!0&&s(n),i(p)&&o.loop===!0&&!t&&($.each(i(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),v(p,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&$.dequeue(p,o.queue)}v.State.calls[e]=!1;for(var g=0,m=v.State.calls.length;m>g;g++)if(v.State.calls[g]!==!1){l=!0;break}l===!1&&(v.State.isTicking=!1,delete v.State.calls,v.State.calls=[])}var f=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return a}(),d=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r=(new Date).getTime(),a;return a=Math.max(0,16-(r-e)),e=r+a,setTimeout(function(){t(r+a)},a)}}(),g={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==a&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},$,m=!1;if(e.fn&&e.fn.jquery?($=e,m=!0):$=t.Velocity.Utilities,8>=f&&!m)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=f)return void(jQuery.fn.velocity=jQuery.fn.animate);var y=400,h="swing",v={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:$,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:y,easing:h,begin:a,complete:a,progress:a,display:a,visibility:a,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){$.data(e,"velocity",{isSVG:g.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==a?(v.State.scrollAnchor=t,v.State.scrollPropertyLeft="pageXOffset",v.State.scrollPropertyTop="pageYOffset"):(v.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,v.State.scrollPropertyLeft="scrollLeft",v.State.scrollPropertyTop="scrollTop");var b=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,a){var n={x:t.x+a.dx*r,v:t.v+a.dv*r,tension:t.tension,friction:t.friction};return{dx:n.v,dv:e(n)}}function r(r,a){var n={dx:r.v,dv:e(r)},o=t(r,.5*a,n),i=t(r,.5*a,o),s=t(r,a,i),l=1/6*(n.dx+2*(o.dx+i.dx)+s.dx),u=1/6*(n.dv+2*(o.dv+i.dv)+s.dv);return r.x=r.x+l*a,r.v=r.v+u*a,r}return function a(e,t,n){var o={x:-1,v:0,tension:null,friction:null},i=[0],s=0,l=1e-4,u=.016,c,p,f;for(e=parseFloat(e)||500,t=parseFloat(t)||20,n=n||null,o.tension=e,o.friction=t,c=null!==n,c?(s=a(e,t),p=s/n*u):p=u;;)if(f=r(f||o,p),i.push(1+f.x),s+=16,!(Math.abs(f.x)>l&&Math.abs(f.v)>l))break;return c?function(e){return i[e*(i.length-1)|0]}:s}}();v.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},$.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){v.Easings[t[0]]=l.apply(null,t[1])});var x=v.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<x.Lists.colors.length;e++){var t="color"===x.Lists.colors[e]?"0 0 0 1":"255 255 255 1";x.Hooks.templates[x.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,a,n;if(f)for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");var o=a[1].match(x.RegEx.valueSplit);"Color"===n[0]&&(n.push(n.shift()),o.push(o.shift()),x.Hooks.templates[r]=[n.join(" "),o.join(" ")])}for(r in x.Hooks.templates){a=x.Hooks.templates[r],n=a[0].split(" ");for(var e in n){var i=r+n[e],s=e;x.Hooks.registered[i]=[r,s]}}},getRoot:function(e){var t=x.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return x.RegEx.valueUnwrap.test(t)&&(t=t.match(x.RegEx.valueUnwrap)[1]),x.Values.isCSSNullValue(t)&&(t=x.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=x.Hooks.registered[e];if(r){var a=r[0],n=r[1];return t=x.Hooks.cleanRootPropertyValue(a,t),t.toString().match(x.RegEx.valueSplit)[n]}return t},injectValue:function(e,t,r){var a=x.Hooks.registered[e];if(a){var n=a[0],o=a[1],i,s;return r=x.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(x.RegEx.valueSplit),i[o]=t,s=i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var a;return x.RegEx.wrappedValueAlreadyExtracted.test(r)?a=r:(a=r.toString().match(x.RegEx.valueUnwrap),a=a?a[1].replace(/,(\s+)?/g," "):r),a;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return v.State.isFirefox?"filter":"-webkit-filter";case"extract":var a=parseFloat(r);if(!a&&0!==a){var n=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a=n?n[1]:0}return a;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(8>=f)switch(e){case"name":return"filter";case"extract":var a=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=a?a[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":return r;case"inject":return r}}},register:function(){9>=f||v.State.isGingerbread||(x.Lists.transformsBase=x.Lists.transformsBase.concat(x.Lists.transforms3D));for(var e=0;e<x.Lists.transformsBase.length;e++)!function(){var t=x.Lists.transformsBase[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return"transform";case"extract":return i(r)===a||i(r).transformCache[t]===a?/^scale/i.test(t)?1:0:i(r).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case"scal":case"scale":v.State.isAndroid&&i(r).transformCache[t]===a&&1>n&&(n=1),o=!/(\d)$/i.test(n);break;case"skew":o=!/(deg|\d)$/i.test(n);break;case"rotate":o=!/(deg|\d)$/i.test(n)}return o||(i(r).transformCache[t]="("+n+")"),i(r).transformCache[t]}}}();for(var e=0;e<x.Lists.colors.length;e++)!function(){var t=x.Lists.colors[e];x.Normalizations.registered[t]=function(e,r,n){switch(e){case"name":return t;case"extract":var o;if(x.RegEx.wrappedValueAlreadyExtracted.test(n))o=n;else{var i,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(n)?i=s[n]!==a?s[n]:s.black:x.RegEx.isHex.test(n)?i="rgb("+x.Values.hexToRgb(n).join(" ")+")":/^rgba?\(/i.test(n)||(i=s.black),o=(i||n).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=f||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=f?4===n.split(" ").length&&(n=n.split(/\s+/).slice(0,3).join(" ")):3===n.split(" ").length&&(n+=" 1"),(8>=f?"rgb":"rgba")+"("+n.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||v.State.isAndroid&&!v.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(v.State.prefixMatches[e])return[v.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,a=t.length;a>r;r++){var n;if(n=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),g.isString(v.State.prefixElement.style[n]))return v.State.prefixMatches[e]=n,[n,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,a;return e=e.replace(t,function(e,t,r,a){return t+t+r+r+a+a}),a=r.exec(e),a?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,r,n,o){function s(e,r){function n(){u&&x.setPropertyValue(e,"display","none")}var l=0;if(8>=f)l=$.css(e,r);else{var u=!1;if(/^(width|height)$/.test(r)&&0===x.getPropertyValue(e,"display")&&(u=!0,x.setPropertyValue(e,"display",x.Values.getDisplayType(e))),!o){if("height"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(x.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(x.getPropertyValue(e,"paddingBottom"))||0);return n(),c}if("width"===r&&"border-box"!==x.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(x.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(x.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(x.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(x.getPropertyValue(e,"paddingRight"))||0);return n(),p}}var d;d=i(e)===a?t.getComputedStyle(e,null):i(e).computedStyle?i(e).computedStyle:i(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),l=9===f&&"filter"===r?d.getPropertyValue(r):d[r],(""===l||null===l)&&(l=e.style[r]),n()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(r)){var g=s(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(r))&&(l=$(e).position()[r]+"px")}return l}var l;if(x.Hooks.registered[r]){var u=r,c=x.Hooks.getRoot(u);n===a&&(n=x.getPropertyValue(e,x.Names.prefixCheck(c)[0])),x.Normalizations.registered[c]&&(n=x.Normalizations.registered[c]("extract",e,n)),l=x.Hooks.extractValue(u,n)}else if(x.Normalizations.registered[r]){var p,d;p=x.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,x.Names.prefixCheck(p)[0]),x.Values.isCSSNullValue(d)&&x.Hooks.templates[r]&&(d=x.Hooks.templates[r][1])),l=x.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l))if(i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(g){l=0}else l=e.getAttribute(r);else l=s(e,x.Names.prefixCheck(r)[0]);return x.Values.isCSSNullValue(l)&&(l=0),v.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,a,n,o){var s=r;if("scroll"===r)o.container?o.container["scroll"+o.direction]=a:"Left"===o.direction?t.scrollTo(a,o.alternateValue):t.scrollTo(o.alternateValue,a);else if(x.Normalizations.registered[r]&&"transform"===x.Normalizations.registered[r]("name",e))x.Normalizations.registered[r]("inject",e,a),s="transform",a=i(e).transformCache[r];else{if(x.Hooks.registered[r]){var l=r,u=x.Hooks.getRoot(r);n=n||x.getPropertyValue(e,u),a=x.Hooks.injectValue(l,a,n),r=u}if(x.Normalizations.registered[r]&&(a=x.Normalizations.registered[r]("inject",e,a),r=x.Normalizations.registered[r]("name",e)),s=x.Names.prefixCheck(r)[0],8>=f)try{e.style[s]=a}catch(c){v.debug&&console.log("Browser does not support ["+a+"] for ["+s+"]")}else i(e)&&i(e).isSVG&&x.Names.SVGAttribute(r)?e.setAttribute(r,a):e.style[s]=a;v.debug>=2&&console.log("Set "+r+" ("+s+"): "+a)}return[s,a]},flushTransformCache:function(e){function t(t){return parseFloat(x.getPropertyValue(e,t))}var r="";if((f||v.State.isAndroid&&!v.State.isChrome)&&i(e).isSVG){var a={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};$.each(i(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),a[e]&&(r+=e+"("+a[e].join(" ")+") ",delete a[e])})}else{var n,o;$.each(i(e).transformCache,function(t){return n=i(e).transformCache[t],"transformPerspective"===t?(o=n,!0):(9===f&&"rotateZ"===t&&(t="rotate"),void(r+=t+n+" "))}),o&&(r="perspective"+o+" "+r)}x.setPropertyValue(e,"transform",r)}};x.Hooks.register(),x.Normalizations.register(),v.hook=function(e,t,r){var n=a;return e=o(e),$.each(e,function(e,o){if(i(o)===a&&v.init(o),r===a)n===a&&(n=v.CSS.getPropertyValue(o,t));else{var s=v.CSS.setPropertyValue(o,t,r);"transform"===s[0]&&v.CSS.flushTransformCache(o),n=s}}),n};var S=function(){function e(){return l?T.promise||null:f}function n(){function e(e){function p(e,t){var r=a,i=a,s=a;return g.isArray(e)?(r=e[0],!g.isArray(e[1])&&/^[\d-]/.test(e[1])||g.isFunction(e[1])||x.RegEx.isHex.test(e[1])?s=e[1]:(g.isString(e[1])&&!x.RegEx.isHex.test(e[1])||g.isArray(e[1]))&&(i=t?e[1]:u(e[1],o.duration),e[2]!==a&&(s=e[2]))):r=e,t||(i=i||o.easing),g.isFunction(r)&&(r=r.call(n,w,P)),g.isFunction(s)&&(s=s.call(n,w,P)),[r||0,i,s]}function f(e,t){var r,a;return a=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=x.Values.getUnitType(e)),[a,r]}function d(){var e={myParent:n.parentNode||r.body,position:x.getPropertyValue(n,"position"),fontSize:x.getPropertyValue(n,"fontSize")},a=e.position===N.lastPosition&&e.myParent===N.lastParent,o=e.fontSize===N.lastFontSize;N.lastParent=e.myParent,N.lastPosition=e.position,N.lastFontSize=e.fontSize;var s=100,l={};if(o&&a)l.emToPx=N.lastEmToPx,l.percentToPxWidth=N.lastPercentToPxWidth,l.percentToPxHeight=N.lastPercentToPxHeight;else{var u=i(n).isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");v.init(u),e.myParent.appendChild(u),$.each(["overflow","overflowX","overflowY"],function(e,t){v.CSS.setPropertyValue(u,t,"hidden")}),v.CSS.setPropertyValue(u,"position",e.position),v.CSS.setPropertyValue(u,"fontSize",e.fontSize),v.CSS.setPropertyValue(u,"boxSizing","content-box"),$.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){v.CSS.setPropertyValue(u,t,s+"%")}),v.CSS.setPropertyValue(u,"paddingLeft",s+"em"),l.percentToPxWidth=N.lastPercentToPxWidth=(parseFloat(x.getPropertyValue(u,"width",null,!0))||1)/s,l.percentToPxHeight=N.lastPercentToPxHeight=(parseFloat(x.getPropertyValue(u,"height",null,!0))||1)/s,l.emToPx=N.lastEmToPx=(parseFloat(x.getPropertyValue(u,"paddingLeft"))||1)/s,e.myParent.removeChild(u)}return null===N.remToPx&&(N.remToPx=parseFloat(x.getPropertyValue(r.body,"fontSize"))||16),null===N.vwToPx&&(N.vwToPx=parseFloat(t.innerWidth)/100,N.vhToPx=parseFloat(t.innerHeight)/100),l.remToPx=N.remToPx,l.vwToPx=N.vwToPx,l.vhToPx=N.vhToPx,v.debug>=1&&console.log("Unit ratios: "+JSON.stringify(l),n),l}if(o.begin&&0===w)try{o.begin.call(m,m)}catch(y){setTimeout(function(){throw y},1)}if("scroll"===k){var S=/^x$/i.test(o.axis)?"Left":"Top",V=parseFloat(o.offset)||0,C,A,F;o.container?g.isWrapped(o.container)||g.isNode(o.container)?(o.container=o.container[0]||o.container,C=o.container["scroll"+S],F=C+$(n).position()[S.toLowerCase()]+V):o.container=null:(C=v.State.scrollAnchor[v.State["scrollProperty"+S]],A=v.State.scrollAnchor[v.State["scrollProperty"+("Left"===S?"Top":"Left")]],F=$(n).offset()[S.toLowerCase()]+V),s={scroll:{rootPropertyValue:!1,startValue:C,currentValue:C,endValue:F,unitType:"",easing:o.easing,scrollData:{container:o.container,direction:S,alternateValue:A}},element:n},v.debug&&console.log("tweensContainer (scroll): ",s.scroll,n)}else if("reverse"===k){if(!i(n).tweensContainer)return void $.dequeue(n,o.queue);"none"===i(n).opts.display&&(i(n).opts.display="auto"),"hidden"===i(n).opts.visibility&&(i(n).opts.visibility="visible"),i(n).opts.loop=!1,i(n).opts.begin=null,i(n).opts.complete=null,b.easing||delete o.easing,b.duration||delete o.duration,o=$.extend({},i(n).opts,o);var E=$.extend(!0,{},i(n).tweensContainer);for(var j in E)if("element"!==j){var H=E[j].startValue;E[j].startValue=E[j].currentValue=E[j].endValue,E[j].endValue=H,g.isEmptyObject(b)||(E[j].easing=o.easing),v.debug&&console.log("reverse tweensContainer ("+j+"): "+JSON.stringify(E[j]),n)}s=E}else if("start"===k){var E;i(n).tweensContainer&&i(n).isAnimating===!0&&(E=i(n).tweensContainer),$.each(h,function(e,t){if(RegExp("^"+x.Lists.colors.join("$|^")+"$").test(e)){var r=p(t,!0),n=r[0],o=r[1],i=r[2];if(x.RegEx.isHex.test(n)){for(var s=["Red","Green","Blue"],l=x.Values.hexToRgb(n),u=i?x.Values.hexToRgb(i):a,c=0;c<s.length;c++){var f=[l[c]];o&&f.push(o),u!==a&&f.push(u[c]),h[e+s[c]]=f}delete h[e]}}});for(var R in h){var O=p(h[R]),z=O[0],q=O[1],M=O[2];R=x.Names.camelCase(R);var I=x.Hooks.getRoot(R),B=!1;if(i(n).isSVG||"tween"===I||x.Names.prefixCheck(I)[1]!==!1||x.Normalizations.registered[I]!==a){(o.display!==a&&null!==o.display&&"none"!==o.display||o.visibility!==a&&"hidden"!==o.visibility)&&/opacity|filter/.test(R)&&!M&&0!==z&&(M=0),o._cacheValues&&E&&E[R]?(M===a&&(M=E[R].endValue+E[R].unitType),B=i(n).rootPropertyValueCache[I]):x.Hooks.registered[R]?M===a?(B=x.getPropertyValue(n,I),M=x.getPropertyValue(n,R,B)):B=x.Hooks.templates[I][1]:M===a&&(M=x.getPropertyValue(n,R));var W,G,D,X=!1;if(W=f(R,M),M=W[0],D=W[1],W=f(R,z),z=W[0].replace(/^([+-\/*])=/,function(e,t){return X=t,""}),G=W[1],M=parseFloat(M)||0,z=parseFloat(z)||0,"%"===G&&(/^(fontSize|lineHeight)$/.test(R)?(z/=100,G="em"):/^scale/.test(R)?(z/=100,G=""):/(Red|Green|Blue)$/i.test(R)&&(z=z/100*255,G="")),/[\/*]/.test(X))G=D;else if(D!==G&&0!==M)if(0===z)G=D;else{l=l||d();var Y=/margin|padding|left|right|width|text|word|letter/i.test(R)||/X$/.test(R)||"x"===R?"x":"y";switch(D){case"%":M*="x"===Y?l.percentToPxWidth:l.percentToPxHeight;break;case"px":break;default:M*=l[D+"ToPx"]}switch(G){case"%":M*=1/("x"===Y?l.percentToPxWidth:l.percentToPxHeight);break;case"px":break;default:M*=1/l[G+"ToPx"]}}switch(X){case"+":z=M+z;break;case"-":z=M-z;break;case"*":z=M*z;break;case"/":z=M/z}s[R]={rootPropertyValue:B,startValue:M,currentValue:M,endValue:z,unitType:G,easing:q},v.debug&&console.log("tweensContainer ("+R+"): "+JSON.stringify(s[R]),n)}else v.debug&&console.log("Skipping ["+I+"] due to a lack of browser support.")}s.element=n}s.element&&(x.Values.addClass(n,"velocity-animating"),L.push(s),""===o.queue&&(i(n).tweensContainer=s,i(n).opts=o),i(n).isAnimating=!0,w===P-1?(v.State.calls.push([L,m,o,null,T.resolver]),v.State.isTicking===!1&&(v.State.isTicking=!0,c())):w++)}var n=this,o=$.extend({},v.defaults,b),s={},l;switch(i(n)===a&&v.init(n),parseFloat(o.delay)&&o.queue!==!1&&$.queue(n,o.queue,function(e){v.velocityQueueEntryFlag=!0,i(n).delayTimer={setTimeout:setTimeout(e,parseFloat(o.delay)),next:e}}),o.duration.toString().toLowerCase()){case"fast":o.duration=200;break;case"normal":o.duration=y;break;case"slow":o.duration=600;break;default:o.duration=parseFloat(o.duration)||1}v.mock!==!1&&(v.mock===!0?o.duration=o.delay=1:(o.duration*=parseFloat(v.mock)||1,o.delay*=parseFloat(v.mock)||1)),o.easing=u(o.easing,o.duration),o.begin&&!g.isFunction(o.begin)&&(o.begin=null),o.progress&&!g.isFunction(o.progress)&&(o.progress=null),o.complete&&!g.isFunction(o.complete)&&(o.complete=null),o.display!==a&&null!==o.display&&(o.display=o.display.toString().toLowerCase(),"auto"===o.display&&(o.display=v.CSS.Values.getDisplayType(n))),o.visibility!==a&&null!==o.visibility&&(o.visibility=o.visibility.toString().toLowerCase()),o.mobileHA=o.mobileHA&&v.State.isMobile&&!v.State.isGingerbread,o.queue===!1?o.delay?setTimeout(e,o.delay):e():$.queue(n,o.queue,function(t,r){return r===!0?(T.promise&&T.resolver(m),!0):(v.velocityQueueEntryFlag=!0,void e(t))}),""!==o.queue&&"fx"!==o.queue||"inprogress"===$.queue(n)[0]||$.dequeue(n)}var s=arguments[0]&&(arguments[0].p||$.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||g.isString(arguments[0].properties)),l,f,d,m,h,b;if(g.isWrapped(this)?(l=!1,d=0,m=this,f=this):(l=!0,d=1,m=s?arguments[0].elements||arguments[0].e:arguments[0]),m=o(m)){s?(h=arguments[0].properties||arguments[0].p,b=arguments[0].options||arguments[0].o):(h=arguments[d],b=arguments[d+1]);var P=m.length,w=0;if(!/^(stop|finish)$/i.test(h)&&!$.isPlainObject(b)){var V=d+1;b={};for(var C=V;C<arguments.length;C++)g.isArray(arguments[C])||!/^(fast|normal|slow)$/i.test(arguments[C])&&!/^\d/.test(arguments[C])?g.isString(arguments[C])||g.isArray(arguments[C])?b.easing=arguments[C]:g.isFunction(arguments[C])&&(b.complete=arguments[C]):b.duration=arguments[C]}var T={promise:null,resolver:null,rejecter:null};l&&v.Promise&&(T.promise=new v.Promise(function(e,t){T.resolver=e,T.rejecter=t}));var k;switch(h){case"scroll":k="scroll";break;case"reverse":k="reverse";break;case"finish":case"stop":$.each(m,function(e,t){i(t)&&i(t).delayTimer&&(clearTimeout(i(t).delayTimer.setTimeout),i(t).delayTimer.next&&i(t).delayTimer.next(),delete i(t).delayTimer)});var A=[];return $.each(v.State.calls,function(e,t){t&&$.each(t[1],function(r,n){var o=b===a?"":b;return o===!0||t[2].queue===o||b===a&&t[2].queue===!1?void $.each(m,function(r,a){a===n&&((b===!0||g.isString(b))&&($.each($.queue(a,g.isString(b)?b:""),function(e,t){g.isFunction(t)&&t(null,!0)}),$.queue(a,g.isString(b)?b:"",[])),"stop"===h?(i(a)&&i(a).tweensContainer&&o!==!1&&$.each(i(a).tweensContainer,function(e,t){t.endValue=t.currentValue
}),A.push(e)):"finish"===h&&(t[2].duration=1))}):!0})}),"stop"===h&&($.each(A,function(e,t){p(t,!0)}),T.promise&&T.resolver(m)),e();default:if(!$.isPlainObject(h)||g.isEmptyObject(h)){if(g.isString(h)&&v.Redirects[h]){var F=$.extend({},b),E=F.duration,j=F.delay||0;return F.backwards===!0&&(m=$.extend(!0,[],m).reverse()),$.each(m,function(e,t){parseFloat(F.stagger)?F.delay=j+parseFloat(F.stagger)*e:g.isFunction(F.stagger)&&(F.delay=j+F.stagger.call(t,e,P)),F.drag&&(F.duration=parseFloat(E)||(/^(callout|transition)/.test(h)?1e3:y),F.duration=Math.max(F.duration*(F.backwards?1-e/P:(e+1)/P),.75*F.duration,200)),v.Redirects[h].call(t,t,F||{},e,P,m,T.promise?T:a)}),e()}var H="Velocity: First argument ("+h+") was not a property map, a known action, or a registered redirect. Aborting.";return T.promise?T.rejecter(new Error(H)):console.log(H),e()}k="start"}var N={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},L=[];$.each(m,function(e,t){g.isNode(t)&&n.call(t)});var F=$.extend({},v.defaults,b),R;if(F.loop=parseInt(F.loop),R=2*F.loop-1,F.loop)for(var O=0;R>O;O++){var z={delay:F.delay,progress:F.progress};O===R-1&&(z.display=F.display,z.visibility=F.visibility,z.complete=F.complete),S(m,"reverse",z)}return e()}};v=$.extend(S,v),v.animate=S;var P=t.requestAnimationFrame||d;return v.State.isMobile||r.hidden===a||r.addEventListener("visibilitychange",function(){r.hidden?(P=function(e){return setTimeout(function(){e(!0)},16)},c()):P=t.requestAnimationFrame||d}),e.Velocity=v,e!==t&&(e.fn.velocity=S,e.fn.velocity.defaults=v.defaults),$.each(["Down","Up"],function(e,t){v.Redirects["slide"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===a&&(l.display="Down"===t?"inline"===v.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(i,i);for(var r in p){f[r]=e.style[r];var a=v.CSS.getPropertyValue(e,r);p[r]="Down"===t?[a,0]:[0,a]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(i,i),s&&s.resolver(i)},v(e,p,l)}}),$.each(["In","Out"],function(e,t){v.Redirects["fade"+t]=function(e,r,n,o,i,s){var l=$.extend({},r),u={opacity:"In"===t?1:0},c=l.complete;l.complete=n!==o-1?l.begin=null:function(){c&&c.call(i,i),s&&s.resolver(i)},l.display===a&&(l.display="In"===t?"auto":"none"),v(this,u,l)}}),v}(window.jQuery||window.Zepto||window,window,document)});
/**********************
 Velocity UI Pack
 **********************/

/* VelocityJS.org UI Pack (5.0.4). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License. Portions copyright Daniel Eden, Christian Pucci. */


;(function (factory) {
    /* CommonJS module. */
    if (typeof require === "function" && typeof exports === "object" ) {
        module.exports = factory();
        /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define([ "velocity" ], factory);
        /* Browser globals. */
    } else {
        factory();
    }
}(function() {
    return function (global, window, document, undefined) {

        /*************
         Checks
         *************/

        if (!global.Velocity || !global.Velocity.Utilities) {
            window.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting.");
            return;
        } else {
            var Velocity = global.Velocity,
                $ = Velocity.Utilities;
        }

        var velocityVersion = Velocity.version,
            requiredVersion = { major: 1, minor: 1, patch: 0 };

        function greaterSemver (primary, secondary) {
            var versionInts = [];

            if (!primary || !secondary) { return false; }

            $.each([ primary, secondary ], function(i, versionObject) {
                var versionIntsComponents = [];

                $.each(versionObject, function(component, value) {
                    while (value.toString().length < 5) {
                        value = "0" + value;
                    }
                    versionIntsComponents.push(value);
                });

                versionInts.push(versionIntsComponents.join(""))
            });

            return (parseFloat(versionInts[0]) > parseFloat(versionInts[1]));
        }

        if (greaterSemver(requiredVersion, velocityVersion)){
            var abortError = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            alert(abortError);
            throw new Error(abortError);
        }

        /************************
         Effect Registration
         ************************/

        /* Note: RegisterUI is a legacy name. */
        Velocity.RegisterEffect = Velocity.RegisterUI = function (effectName, properties) {
            /* Animate the expansion/contraction of the elements' parent's height for In/Out effects. */
            function animateParentHeight (elements, direction, totalDuration, stagger) {
                var totalHeightDelta = 0,
                    parentNode;

                /* Sum the total height (including padding and margin) of all targeted elements. */
                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                    if (stagger) {
                        /* Increase the totalDuration by the successive delay amounts produced by the stagger option. */
                        totalDuration += i * stagger;
                    }

                    parentNode = element.parentNode;

                    $.each([ "height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function(i, property) {
                        totalHeightDelta += parseFloat(Velocity.CSS.getPropertyValue(element, property));
                    });
                });

                /* Animate the parent element's height adjustment (with a varying duration multiplier for aesthetic benefits). */
                Velocity.animate(
                    parentNode,
                    { height: (direction === "In" ? "+" : "-") + "=" + totalHeightDelta },
                    { queue: false, easing: "ease-in-out", duration: totalDuration * (direction === "In" ? 0.6 : 1) }
                );
            }

            /* Register a custom redirect for each effect. */
            Velocity.Redirects[effectName] = function (element, redirectOptions, elementsIndex, elementsSize, elements, promiseData) {
                var finalElement = (elementsIndex === elementsSize - 1);

                if (typeof properties.defaultDuration === "function") {
                    properties.defaultDuration = properties.defaultDuration.call(elements, elements);
                } else {
                    properties.defaultDuration = parseFloat(properties.defaultDuration);
                }

                /* Iterate through each effect's call array. */
                for (var callIndex = 0; callIndex < properties.calls.length; callIndex++) {
                    var call = properties.calls[callIndex],
                        propertyMap = call[0],
                        redirectDuration = (redirectOptions.duration || properties.defaultDuration || 1000),
                        durationPercentage = call[1],
                        callOptions = call[2] || {},
                        opts = {};

                    /* Assign the whitelisted per-call options. */
                    opts.duration = redirectDuration * (durationPercentage || 1);
                    opts.queue = redirectOptions.queue || "";
                    opts.easing = callOptions.easing || "ease";
                    opts.delay = parseFloat(callOptions.delay) || 0;
                    opts._cacheValues = callOptions._cacheValues || true;

                    /* Special processing for the first effect call. */
                    if (callIndex === 0) {
                        /* If a delay was passed into the redirect, combine it with the first call's delay. */
                        opts.delay += (parseFloat(redirectOptions.delay) || 0);

                        if (elementsIndex === 0) {
                            opts.begin = function() {
                                /* Only trigger a begin callback on the first effect call with the first element in the set. */
                                redirectOptions.begin && redirectOptions.begin.call(elements, elements);

                                var direction = effectName.match(/(In|Out)$/);

                                /* Make "in" transitioning elements invisible immediately so that there's no FOUC between now
                                 and the first RAF tick. */
                                if ((direction && direction[0] === "In") && propertyMap.opacity !== undefined) {
                                    $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                        Velocity.CSS.setPropertyValue(element, "opacity", 0);
                                    });
                                }

                                /* Only trigger animateParentHeight() if we're using an In/Out transition. */
                                if (redirectOptions.animateParentHeight && direction) {
                                    animateParentHeight(elements, direction[0], redirectDuration + opts.delay, redirectOptions.stagger);
                                }
                            }
                        }

                        /* If the user isn't overriding the display option, default to "auto" for "In"-suffixed transitions. */
                        if (redirectOptions.display !== null) {
                            if (redirectOptions.display !== undefined && redirectOptions.display !== "none") {
                                opts.display = redirectOptions.display;
                            } else if (/In$/.test(effectName)) {
                                /* Inline elements cannot be subjected to transforms, so we switch them to inline-block. */
                                var defaultDisplay = Velocity.CSS.Values.getDisplayType(element);
                                opts.display = (defaultDisplay === "inline") ? "inline-block" : defaultDisplay;
                            }
                        }

                        if (redirectOptions.visibility && redirectOptions.visibility !== "hidden") {
                            opts.visibility = redirectOptions.visibility;
                        }
                    }

                    /* Special processing for the last effect call. */
                    if (callIndex === properties.calls.length - 1) {
                        /* Append promise resolving onto the user's redirect callback. */
                        function injectFinalCallbacks () {
                            if ((redirectOptions.display === undefined || redirectOptions.display === "none") && /Out$/.test(effectName)) {
                                $.each(elements.nodeType ? [ elements ] : elements, function(i, element) {
                                    Velocity.CSS.setPropertyValue(element, "display", "none");
                                });
                            }

                            redirectOptions.complete && redirectOptions.complete.call(elements, elements);

                            if (promiseData) {
                                promiseData.resolver(elements || element);
                            }
                        }

                        opts.complete = function() {
                            if (properties.reset) {
                                for (var resetProperty in properties.reset) {
                                    var resetValue = properties.reset[resetProperty];

                                    /* Format each non-array value in the reset property map to [ value, value ] so that changes apply
                                     immediately and DOM querying is avoided (via forcefeeding). */
                                    /* Note: Don't forcefeed hooks, otherwise their hook roots will be defaulted to their null values. */
                                    if (Velocity.CSS.Hooks.registered[resetProperty] === undefined && (typeof resetValue === "string" || typeof resetValue === "number")) {
                                        properties.reset[resetProperty] = [ properties.reset[resetProperty], properties.reset[resetProperty] ];
                                    }
                                }

                                /* So that the reset values are applied instantly upon the next rAF tick, use a zero duration and parallel queueing. */
                                var resetOptions = { duration: 0, queue: false };

                                /* Since the reset option uses up the complete callback, we trigger the user's complete callback at the end of ours. */
                                if (finalElement) {
                                    resetOptions.complete = injectFinalCallbacks;
                                }

                                Velocity.animate(element, properties.reset, resetOptions);
                                /* Only trigger the user's complete callback on the last effect call with the last element in the set. */
                            } else if (finalElement) {
                                injectFinalCallbacks();
                            }
                        };

                        if (redirectOptions.visibility === "hidden") {
                            opts.visibility = redirectOptions.visibility;
                        }
                    }

                    Velocity.animate(element, propertyMap, opts);
                }
            };

            /* Return the Velocity object so that RegisterUI calls can be chained. */
            return Velocity;
        };

        /*********************
         Packaged Effects
         *********************/

        /* Externalize the packagedEffects data so that they can optionally be modified and re-registered. */
        /* Support: <=IE8: Callouts will have no effect, and transitions will simply fade in/out. IE9/Android 2.3: Most effects are fully supported, the rest fade in/out. All other browsers: full support. */
        Velocity.RegisterEffect.packagedEffects =
        {
            /* Animate.css */
            "callout.bounce": {
                defaultDuration: 550,
                calls: [
                    [ { translateY: -30 }, 0.25 ],
                    [ { translateY: 0 }, 0.125 ],
                    [ { translateY: -15 }, 0.125 ],
                    [ { translateY: 0 }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.shake": {
                defaultDuration: 800,
                calls: [
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 11 }, 0.125 ],
                    [ { translateX: -11 }, 0.125 ],
                    [ { translateX: 0 }, 0.125 ]
                ]
            },
            /* Animate.css */
            "callout.flash": {
                defaultDuration: 1100,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuad", 1 ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 0, "easeInOutQuad" ] }, 0.25 ],
                    [ { opacity: [ 1, "easeInOutQuad" ] }, 0.25 ]
                ]
            },
            /* Animate.css */
            "callout.pulse": {
                defaultDuration: 825,
                calls: [
                    [ { scaleX: 1.1, scaleY: 1.1 }, 0.50, { easing: "easeInExpo" } ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "callout.swing": {
                defaultDuration: 950,
                calls: [
                    [ { rotateZ: 15 }, 0.20 ],
                    [ { rotateZ: -10 }, 0.20 ],
                    [ { rotateZ: 5 }, 0.20 ],
                    [ { rotateZ: -5 }, 0.20 ],
                    [ { rotateZ: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "callout.tada": {
                defaultDuration: 1000,
                calls: [
                    [ { scaleX: 0.9, scaleY: 0.9, rotateZ: -3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: 3 }, 0.10 ],
                    [ { scaleX: 1.1, scaleY: 1.1, rotateZ: -3 }, 0.10 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ "reverse", 0.125 ],
                    [ { scaleX: 1, scaleY: 1, rotateZ: 0 }, 0.20 ]
                ]
            },
            "transition.fadeIn": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 1, 0 ] } ]
                ]
            },
            "transition.fadeOut": {
                defaultDuration: 500,
                calls: [
                    [ { opacity: [ 0, 1 ] } ]
                ]
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateY: [ 0, -55 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateY: 55 } ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], rotateX: [ 0, -45 ] } ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], rotateX: 25 } ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateY: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateY: 10 }, 0.25 ],
                    [ { opacity: 1, rotateY: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateY: -10 }, 0.50 ],
                    [ { opacity: 0, rotateY: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateY: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0.725, 0 ], transformPerspective: [ 400, 400 ], rotateX: [ -10, 90 ] }, 0.50 ],
                    [ { opacity: 0.80, rotateX: 10 }, 0.25 ],
                    [ { opacity: 1, rotateX: 0 }, 0.25 ]
                ],
                reset: { transformPerspective: 0 }
            },
            /* Animate.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0.9, 1 ], transformPerspective: [ 400, 400 ], rotateX: -15 }, 0.50 ],
                    [ { opacity: 0, rotateX: 90 }, 0.50 ]
                ],
                reset: { transformPerspective: 0, rotateX: 0 }
            },
            /* Magic.css */
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "100%", "50%" ], transformOriginY: [ "100%", "100%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], translateX: [ 0, -700 ], translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "100%" ], transformOriginY: [ "100%", "100%" ], scaleX: 0, scaleY: 0, translateX: -700, translateZ: 0 } ]
                ],
                reset: { transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0 ], scaleY: [ 1, 0 ], rotateY: [ 0, 160 ] }, 1, { easing: "easeInOutSine" } ]
                ]
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3. (Fades and scales only.) */
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, "easeInOutQuint", 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0, scaleY: 0, rotateY: 160 }, 1, { easing: "swing" } ]
                ],
                reset: { scaleX: 1, scaleY: 1, rotateY: 0 }
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 1.5 ], scaleY: [ 1, 1.5 ], translateZ: 0 } ]
                ]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 1.3, scaleY: 1.3, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 1, 0 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: [ 1, 0.625 ], scaleY: [ 1, 0.625 ], translateZ: 0 } ]
                ]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [
                    [ { opacity: [ 0, 1 ], transformOriginX: [ "50%", "50%" ], transformOriginY: [ "50%", "50%" ], scaleX: 0.5, scaleY: 0.5, translateZ: 0 } ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], scaleX: [ 1.05, 0.3 ], scaleY: [ 1.05, 0.3 ] }, 0.40 ],
                    [ { scaleX: 0.9, scaleY: 0.9, translateZ: 0 }, 0.20 ],
                    [ { scaleX: 1, scaleY: 1 }, 0.50 ]
                ]
            },
            /* Animate.css */
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [
                    [ { scaleX: 0.95, scaleY: 0.95 }, 0.35 ],
                    [ { scaleX: 1.1, scaleY: 1.1, translateZ: 0 }, 0.35 ],
                    [ { opacity: [ 0, 1 ], scaleX: 0.3, scaleY: 0.3 }, 0.30 ]
                ],
                reset: { scaleX: 1, scaleY: 1 }
            },
            /* Animate.css */
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ -30, 1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: 10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceUpOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: 20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: -1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 30, -1000 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateY: -10 }, 0.20 ],
                    [ { translateY: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceDownOut": {
                defaultDuration: 1000,
                calls: [
                    [ { translateY: -20 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateY: 1000 }, 0.80 ]
                ],
                reset: { translateY: 0 }
            },
            /* Animate.css */
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 30, -1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: -10 }, 0.20 ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [
                    [ { translateX: 30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: -1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            /* Animate.css */
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ -30, 1250 ] }, 0.60, { easing: "easeOutCirc" } ],
                    [ { translateX: 10 }, 0.20 ],
                    [ { translateX: 0 }, 0.20 ]
                ]
            },
            /* Animate.css */
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [
                    [ { translateX: -30 }, 0.20 ],
                    [ { opacity: [ 0, "easeInCirc", 1 ], translateX: 1250 }, 0.80 ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 20, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightIn": {
                defaultDuration: 1000,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 20 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 20, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: -75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 1, 0 ], translateY: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 0, 1 ], translateY: 75, translateZ: 0 } ]
                ],
                reset: { translateY: 0 }
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, -75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: -75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], translateX: [ 0, 75 ], translateZ: 0 } ]
                ]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [
                    [ { opacity: [ 0, 1 ], translateX: 75, translateZ: 0 } ]
                ],
                reset: { translateX: 0 }
            },
            /* Magic.css */
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: [ 0, -180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ "100%", "100%" ], rotateX: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 800, 800 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateX: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: [ 0, -180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ 0, 0 ], transformOriginY: [ 0, 0 ], rotateY: -180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 1, 0 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: [ 0, 180 ] } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%" }
            },
            /* Magic.css */
            /* Support: Loses rotation in IE9/Android 2.3 (fades only). */
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [
                    [ { opacity: [ 0, 1 ], transformPerspective: [ 2000, 2000 ], transformOriginX: [ "100%", "100%" ], transformOriginY: [ 0, 0 ], rotateY: 180 } ]
                ],
                reset: { transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0 }
            }
        };

        /* Register the packaged effects. */
        for (var effectName in Velocity.RegisterEffect.packagedEffects) {
            Velocity.RegisterEffect(effectName, Velocity.RegisterEffect.packagedEffects[effectName]);
        }

        /*********************
         Sequence Running
         **********************/

        /* Note: Sequence calls must use Velocity's single-object arguments syntax. */
        Velocity.RunSequence = function (originalSequence) {
            var sequence = $.extend(true, [], originalSequence);

            if (sequence.length > 1) {
                $.each(sequence.reverse(), function(i, currentCall) {
                    var nextCall = sequence[i + 1];

                    if (nextCall) {
                        /* Parallel sequence calls (indicated via sequenceQueue:false) are triggered
                         in the previous call's begin callback. Otherwise, chained calls are normally triggered
                         in the previous call's complete callback. */
                        var currentCallOptions = currentCall.o || currentCall.options,
                            nextCallOptions = nextCall.o || nextCall.options;

                        var timing = (currentCallOptions && currentCallOptions.sequenceQueue === false) ? "begin" : "complete",
                            callbackOriginal = nextCallOptions && nextCallOptions[timing],
                            options = {};

                        options[timing] = function() {
                            var nextCallElements = nextCall.e || nextCall.elements;
                            var elements = nextCallElements.nodeType ? [ nextCallElements ] : nextCallElements;

                            callbackOriginal && callbackOriginal.call(elements, elements);
                            Velocity(currentCall);
                        }

                        if (nextCall.o) {
                            nextCall.o = $.extend({}, nextCallOptions, options);
                        } else {
                            nextCall.options = $.extend({}, nextCallOptions, options);
                        }
                    }
                });

                sequence.reverse();
            }

            Velocity(sequence[0]);
        };
    }((window.jQuery || window.Zepto || window), window, document);
}));
(function() {
  $(function() {
    $('.package-1').each(function() {
      var _this, inview;
      _this = this;
      return inview = new Waypoint({
        element: _this,
        handler: function(direction) {
          console.log('hi');
          if (direction === 'down') {
            $('.up-item').css('visibility', 'visible');
            return $('.up-item').velocity("transition.slideUpIn", {
              stagger: 250
            });
          }
        },
        offset: '75%'
      });
    });
    $('.cta-header').each(function() {
      var _this, inview;
      _this = this;
      return inview = new Waypoint({
        element: _this,
        handler: function(direction) {
          console.log('hi');
          return $('.cta-header').addClass('animated fadeInUp');
        },
        offset: '50%'
      });
    });
    return $('#features').each(function() {
      var _this, inview;
      _this = this;
      return inview = new Waypoint({
        element: _this,
        handler: function(direction) {
          if (direction === 'down') {
            return $('.tcon, .tcon-menu--arrow, .tcon-menu--arrowup').css('background-color', 'rgba(68, 68, 68, 1)');
          } else if (direction === 'up') {
            return $('.tcon, .tcon-menu--arrow, .tcon-menu--arrowup').css('background-color', 'rgba(0, 0, 0, 0)');
          }
        }
      });
    });
  });

  $(window).bind('load', function() {
    $('.header-container').css('visibility', 'visible');
    return $.Velocity.animate($('.header-container'), 'transition.slideUpIn', {
      duration: 1500,
      opacity: [1, 0]
    }).then(function(elements) {
      setInterval((function() {
        return $('.fa-angle-down').toggleClass('animated bounce');
      }), 1300);
      $('.logo').css('visibility', 'visible').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', (function(_this) {
        return function() {
          return $('.logo').removeClass('fadeInRight');
        };
      })(this));
      $('.menu-items > button').css('visibility', 'visible').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', (function(_this) {
        return function() {
          return $('.menu-items > button').removeClass('fadeInLeft');
        };
      })(this));
      return console.log('Resolved.');
    })["catch"](function(error) {
      return console.log('Rejected.');
    });
  });

}).call(this);
(function() {
  var scrollToLoc;

  scrollToLoc = function(hash) {
    var destination;
    destination = $(hash).offset().top;
    return $('html,body').animate({
      scrollTop: destination
    }, 700, 'swing');
  };

  $('.fa-angle-down').on('click', (function(_this) {
    return function() {
      return scrollToLoc('#features');
    };
  })(this));

}).call(this);
