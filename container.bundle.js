!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?p(e):t}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}n.r(t);var d=function(){function e(){r(this,e),this.listeners={}}return i(e,[{key:"addEventListener",value:function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"removeEventListener",value:function(e,t){var n=this.listeners[e]||[],r=n.indexOf(t);-1!==r&&n.splice(r,1)}},{key:"emit",value:function(e,t){var n=this;(this.listeners[e]||[]).forEach((function(e){e.call(n,t)}))}}]),e}(),v=function(e){function t(){var e;return r(this,t),(e=_(this,a(t).call(this))).token=`dispatch${Math.random()}`,Object.assign(p(e),{_isDispatching:!1,dispatch:e.dispatch.bind(p(e)),register:e.addEventListener.bind(p(e),e.token),unregister:e.removeEventListener.bind(p(e),e.token)}),e}return s(t,e),i(t,[{key:"isDispatching",value:function(){return this._isDispatching}},{key:"dispatch",value:function(e){if(this._isDispatching)throw new Error("can't dispatch in the middle of a dispatch");this._isDispatching=!0,this.emit(this.token,e),this._isDispatching=!1}}]),t}(d);var y="change",b=function(e){function t(e,n){var o;return r(this,t),(o=_(this,a(t).call(this,e,n))).state=c({},o.state||{}),o}return s(t,e),i(t,[{key:"areEqual",value:function(e,t){return e===t}},{key:"_invoke",value:function(e){var t=this.reduce(this.state,e);if(!t)throw new Error("reduce() must not return undefined");this.areEqual(this.state,t)||(this.state=t,this.__emitChange(),this.emit(this.CHANGE))}}]),t}(function(e){function t(e,n){var o;return r(this,t),o=_(this,a(t).call(this)),Object.assign(p(o),{dispatcher:e,opts:n,CHANGE:y,state:c({},o.state||{})}),e.register((function(e){o._changed=!1,o._invoke(e)})),o}return s(t,e),i(t,[{key:"getState",value:function(){return this.state}},{key:"addListener",value:function(e){var t=this;return this.addEventListener(this.CHANGE,e),{remove:function(){return t.removeEventListener(t.CHANGE,e)}}}},{key:"getDispatcher",value:function(){return this.dispatcher}},{key:"hasChanged",value:function(){return this._changed}},{key:"_invoke",value:function(e){this.__onDispatch(e),this._changed&&this.emit(this.CHANGE)}},{key:"__emitChange",value:function(){this._changed=!0}}]),t}(d));var m,g,k,w,O,S={},P=[],j=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function E(e,t){for(var n in t)e[n]=t[n];return e}function x(e){var t=e.parentNode;t&&t.removeChild(e)}function D(e,t,n){var r,o,i,u,l=arguments;if(t=E({},t),arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(l[r]);if(null!=n&&(t.children=n),null!=e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===t[o]&&(t[o]=e.defaultProps[o]);return u=t.key,null!=(i=t.ref)&&delete t.ref,null!=u&&delete t.key,C(e,t,u,i)}function C(e,t,n,r){var o={type:e,props:t,key:n,ref:r,__k:null,__p:null,__b:0,__e:null,l:null,__c:null,constructor:void 0};return m.vnode&&m.vnode(o),o}function N(e){return e.children}function L(e,t){this.props=e,this.context=t}function M(e,t){if(null==t)return e.__p?M(e.__p,e.__p.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?M(e):null}function T(e){var t,n;if(null!=(e=e.__p)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return T(e)}}function U(e){(!e.__d&&(e.__d=!0)&&1===g.push(e)||w!==m.debounceRendering)&&(w=m.debounceRendering,(m.debounceRendering||k)(A))}function A(){var e,t,n,r,o,i,u,l;for(g.sort((function(e,t){return t.__v.__b-e.__v.__b}));e=g.pop();)e.__d&&(n=void 0,r=void 0,i=(o=(t=e).__v).__e,u=t.__P,l=t.u,t.u=!1,u&&(n=[],r=B(u,o,E({},o),t.__n,void 0!==u.ownerSVGElement,null,n,l,null==i?M(o):i),I(n,o),r!=i&&T(o)))}function R(e,t,n,r,o,i,u,l,c){var s,a,f,p,_,h,d,v=n&&n.__k||P,y=v.length;if(l==S&&(l=null!=i?i[0]:y?M(n,0):null),s=0,t.__k=W(t.__k,(function(n){if(null!=n){if(n.__p=t,n.__b=t.__b+1,null===(f=v[s])||f&&n.key==f.key&&n.type===f.type)v[s]=void 0;else for(a=0;a<y;a++){if((f=v[a])&&n.key==f.key&&n.type===f.type){v[a]=void 0;break}f=null}if(p=B(e,n,f=f||S,r,o,i,u,null,l,c),(a=n.ref)&&f.ref!=a&&(d||(d=[])).push(a,n.__c||p,n),null!=p){if(null==h&&(h=p),null!=n.l)p=n.l,n.l=null;else if(i==f||p!=l||null==p.parentNode){e:if(null==l||l.parentNode!==e)e.appendChild(p);else{for(_=l,a=0;(_=_.nextSibling)&&a<y;a+=2)if(_==p)break e;e.insertBefore(p,l)}"option"==t.type&&(e.value="")}l=p.nextSibling,"function"==typeof t.type&&(t.l=p)}}return s++,n})),t.__e=h,null!=i&&"function"!=typeof t.type)for(s=i.length;s--;)null!=i[s]&&x(i[s]);for(s=y;s--;)null!=v[s]&&V(v[s],v[s]);if(d)for(s=0;s<d.length;s++)q(d[s],d[++s],d[++s])}function W(e,t,n){if(null==n&&(n=[]),null==e||"boolean"==typeof e)t&&n.push(t(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)W(e[r],t,n);else n.push(t?t(function(e){if(null==e||"boolean"==typeof e)return null;if("string"==typeof e||"number"==typeof e)return C(null,e,null,null);if(null!=e.__e||null!=e.__c){var t=C(e.type,e.props,e.key,null);return t.__e=e.__e,t}return e}(e)):e);return n}function F(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===j.test(t)?n+"px":null==n?"":n}function H(e,t,n,r,o){var i,u,l,c,s;if("key"===(t=o?"className"===t?"class":t:"class"===t?"className":t)||"children"===t);else if("style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||F(i,u,"");if(n)for(l in n)r&&n[l]===r[l]||F(i,l,n[l])}else"o"===t[0]&&"n"===t[1]?(c=t!==(t=t.replace(/Capture$/,"")),s=t.toLowerCase(),t=(s in e?s:t).slice(2),n?(r||e.addEventListener(t,G,c),(e.t||(e.t={}))[t]=n):e.removeEventListener(t,G,c)):"list"!==t&&"tagName"!==t&&"form"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n?e.removeAttribute(t):e.setAttribute(t,n))}function G(e){return this.t[e.type](m.event?m.event(e):e)}function B(e,t,n,r,o,i,u,l,c,s){var a,f,p,_,h,d,v,y,b,g,k=t.type;if(void 0!==t.constructor)return null;(a=m.__b)&&a(t);try{e:if("function"==typeof k){if(y=t.props,b=(a=k.contextType)&&r[a.__c],g=a?b?b.props.value:a.__p:r,n.__c?v=(f=t.__c=n.__c).__p=f.__E:("prototype"in k&&k.prototype.render?t.__c=f=new k(y,g):(t.__c=f=new L(y,g),f.constructor=k,f.render=z),b&&b.sub(f),f.props=y,f.state||(f.state={}),f.context=g,f.__n=r,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=k.getDerivedStateFromProps&&E(f.__s==f.state?f.__s=E({},f.__s):f.__s,k.getDerivedStateFromProps(y,f.__s)),p)null==k.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&u.push(f);else{if(null==k.getDerivedStateFromProps&&null==l&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(y,g),!l&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(y,f.__s,g)){for(f.props=y,f.state=f.__s,f.__d=!1,f.__v=t,t.__e=null!=c?c!==n.__e?c:n.__e:null,t.__k=n.__k,a=0;a<t.__k.length;a++)t.__k[a]&&(t.__k[a].__p=t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(y,f.__s,g)}for(_=f.props,h=f.state,f.context=g,f.props=y,f.state=f.__s,(a=m.__r)&&a(t),f.__d=!1,f.__v=t,f.__P=e,a=f.render(f.props,f.state,f.context),t.__k=W(null!=a&&a.type==N&&null==a.key?a.props.children:a),null!=f.getChildContext&&(r=E(E({},r),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(d=f.getSnapshotBeforeUpdate(_,h)),R(e,t,n,r,o,i,u,c,s),f.base=t.__e;a=f.__h.pop();)f.__s&&(f.state=f.__s),a.call(f);p||null==_||null==f.componentDidUpdate||f.componentDidUpdate(_,h,d),v&&(f.__E=f.__p=null)}else t.__e=$(n.__e,t,n,r,o,i,u,s);(a=m.diffed)&&a(t)}catch(e){m.__e(e,t,n)}return t.__e}function I(e,t){for(var n;n=e.pop();)try{n.componentDidMount()}catch(e){m.__e(e,n.__v)}m.__c&&m.__c(t)}function $(e,t,n,r,o,i,u,l){var c,s,a,f,p=n.props,_=t.props;if(o="svg"===t.type||o,null==e&&null!=i)for(c=0;c<i.length;c++)if(null!=(s=i[c])&&(null===t.type?3===s.nodeType:s.localName===t.type)){e=s,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(_);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type),i=null}return null===t.type?p!==_&&(null!=i&&(i[i.indexOf(e)]=null),e.data=_):t!==n&&(null!=i&&(i=P.slice.call(e.childNodes)),a=(p=n.props||S).dangerouslySetInnerHTML,f=_.dangerouslySetInnerHTML,l||(f||a)&&(f&&a&&f.__html==a.__html||(e.innerHTML=f&&f.__html||"")),function(e,t,n,r,o){var i;for(i in n)i in t||H(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"value"===i||"checked"===i||n[i]===t[i]||H(e,i,t[i],n[i],r)}(e,_,p,o,l),t.__k=t.props.children,f||R(e,t,n,r,"foreignObject"!==t.type&&o,i,u,S,l),l||("value"in _&&void 0!==_.value&&_.value!==e.value&&(e.value=null==_.value?"":_.value),"checked"in _&&void 0!==_.checked&&_.checked!==e.checked&&(e.checked=_.checked))),e}function q(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){m.__e(e,n)}}function V(e,t,n){var r,o,i;if(m.unmount&&m.unmount(e),(r=e.ref)&&q(r,null,t),n||"function"==typeof e.type||(n=null!=(o=e.__e)),e.__e=e.l=null,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){m.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&V(r[i],t,n);null!=o&&x(o)}function z(e,t,n){return this.constructor(e,n)}function J(e,t,n){var r,o,i;m.__p&&m.__p(e,t),o=(r=n===O)?null:n&&n.__k||t.__k,e=D(N,null,[e]),i=[],B(t,r?t.__k=e:(n||t).__k=e,o||S,S,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:P.slice.call(t.childNodes),i,!1,n||S,r),I(i,e)}function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t,n){return t&&X(e.prototype,t),n&&X(e,n),e}function Z(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?te(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function te(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ne(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}m={},L.prototype.setState=function(e,t){var n=this.__s!==this.state&&this.__s||(this.__s=E({},this.state));("function"!=typeof e||(e=e(n,this.props)))&&E(n,e),null!=e&&this.__v&&(this.u=!1,t&&this.__h.push(t),U(this))},L.prototype.forceUpdate=function(e){this.__v&&(e&&this.__h.push(e),this.u=!0,U(this))},L.prototype.render=N,g=[],k="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,w=m.debounceRendering,m.__e=function(e,t,n){for(var r;t=t.__p;)if((r=t.__c)&&!r.__p)try{if(r.constructor&&null!=r.constructor.getDerivedStateFromError)r.setState(r.constructor.getDerivedStateFromError(e));else{if(null==r.componentDidCatch)continue;r.componentDidCatch(e)}return U(r.__E=r)}catch(t){e=t}throw e},O=S;var ie=function(e){return(e+1)%3},ue=function(e){function t(){var e,n;Q(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return oe(te(n=Z(this,(e=ee(t)).call.apply(e,[this].concat(o)))),"state",{value:"...",step:0}),n}return ne(t,e),Y(t,[{key:"reduce",value:function(e){var t=e.step;return{step:t=ie(t),value:t?"hello":"..."}}}]),t}(b),le=function(e){function t(){var e,n;Q(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return oe(te(n=Z(this,(e=ee(t)).call.apply(e,[this].concat(o)))),"state",{value:"",step:0}),n}return ne(t,e),Y(t,[{key:"reduce",value:function(e){var t=e.step;return{step:t=ie(t),value:2===t?"world":""}}}]),t}(b),ce=new v,se=[new ue(ce),new le(ce)],ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getStores,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.calculateState;return function(o){function u(e,o){var i;return r(this,u),i=_(this,a(u).call(this,e,o)),Object.assign(p(i),{state:c({},i.state||{},{},n(i.state,e,o)),stores:t(i.props,i.context),_onState:i._onState.bind(p(i))}),i}return s(u,o),i(u,[{key:"componentDidMount",value:function(){h(a(u.prototype),"componentDidMount",this)&&h(a(u.prototype),"componentDidMount",this).call(this),this._addStores()}},{key:"componentWillUnmount",value:function(){h(a(u.prototype),"componentWillUnmount",this)&&h(a(u.prototype),"componentWillUnmount",this).call(this),this._removeStores()}},{key:"_onState",value:function(){var e=this;this.setState((function(t,r){return n(t,r,e.context)}))}},{key:"_addStores",value:function(){var e=this;this._removers=this.stores.map((function(t){return t.addListener(e._onState)}))}},{key:"_removeStores",value:function(){this.__removers&&this.__removers.forEach((function(e){return e.remove()}))}}],[{key:"getDerivedStateFromProps",value:function(t,n){return"function"==typeof e.getDerivedStateFromProps?e.getDerivedStateFromProps(t,n):null}}]),u}(e)}(function(e){function t(){return Q(this,t),Z(this,ee(t).apply(this,arguments))}return ne(t,e),Y(t,[{key:"render",value:function(){var e=this.state,t=e.step,n=e.value;return D("span",null,D("h1",null,"femto-flux connect example"),D("div",null,n),D("button",{onClick:function(){return ce.dispatch()}},"click #",t))}}],[{key:"getStores",value:function(){return se}},{key:"calculateState",value:function(){var e=se[0].getState().step;return{value:se.map((function(e){return e.getState().value})).join(" ").trim(),step:e}}}]),t}(L)),fe=document.createElement("div");document.body.insertBefore(fe,document.body.firstChild),J(D(ae,null),fe)}]);