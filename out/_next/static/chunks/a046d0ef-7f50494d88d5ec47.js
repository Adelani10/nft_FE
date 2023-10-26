"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6878],{33700:function(i,a,c){c.d(a,{JX:function(){return useWeb3Contract},Nr:function(){return useMoralis},S4:function(){return useEnsAddress},bH:function(){return MoralisProvider}});var _,m,U=c(2265),C=c(57437),N=c(17246),T=c.n(N),extendStatics=function(i,a){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(i,a){i.__proto__=a}||function(i,a){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(i[c]=a[c])})(i,a)};function __extends(i,a){if("function"!=typeof a&&null!==a)throw TypeError("Class extends value "+String(a)+" is not a constructor or null");function __(){this.constructor=i}extendStatics(i,a),i.prototype=null===a?Object.create(a):(__.prototype=a.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function(i){for(var a,c=1,_=arguments.length;c<_;c++)for(var m in a=arguments[c])Object.prototype.hasOwnProperty.call(a,m)&&(i[m]=a[m]);return i}).apply(this,arguments)};function __rest(i,a){var c={};for(var _ in i)Object.prototype.hasOwnProperty.call(i,_)&&0>a.indexOf(_)&&(c[_]=i[_]);if(null!=i&&"function"==typeof Object.getOwnPropertySymbols)for(var m=0,_=Object.getOwnPropertySymbols(i);m<_.length;m++)0>a.indexOf(_[m])&&Object.prototype.propertyIsEnumerable.call(i,_[m])&&(c[_[m]]=i[_[m]]);return c}function __awaiter(i,a,c,_){return new(c||(c=Promise))(function(m,U){function fulfilled(i){try{step(_.next(i))}catch(i){U(i)}}function rejected(i){try{step(_.throw(i))}catch(i){U(i)}}function step(i){var a;i.done?m(i.value):((a=i.value)instanceof c?a:new c(function(i){i(a)})).then(fulfilled,rejected)}step((_=_.apply(i,a||[])).next())})}function __generator(i,a){var c,_,m,U,C={label:0,sent:function(){if(1&m[0])throw m[1];return m[1]},trys:[],ops:[]};return U={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(U[Symbol.iterator]=function(){return this}),U;function verb(U){return function(N){return function(U){if(c)throw TypeError("Generator is already executing.");for(;C;)try{if(c=1,_&&(m=2&U[0]?_.return:U[0]?_.throw||((m=_.return)&&m.call(_),0):_.next)&&!(m=m.call(_,U[1])).done)return m;switch(_=0,m&&(U=[2&U[0],m.value]),U[0]){case 0:case 1:m=U;break;case 4:return C.label++,{value:U[1],done:!1};case 5:C.label++,_=U[1],U=[0];continue;case 7:U=C.ops.pop(),C.trys.pop();continue;default:if(!(m=(m=C.trys).length>0&&m[m.length-1])&&(6===U[0]||2===U[0])){C=0;continue}if(3===U[0]&&(!m||U[1]>m[0]&&U[1]<m[3])){C.label=U[1];break}if(6===U[0]&&C.label<m[1]){C.label=m[1],m=U;break}if(m&&C.label<m[2]){C.label=m[2],C.ops.push(U);break}m[2]&&C.ops.pop(),C.trys.pop();continue}U=a.call(i,C)}catch(i){U=[6,i],_=0}finally{c=m=0}if(5&U[0])throw U[1];return{value:U[0]?U[1]:void 0,done:!0}}([U,N])}}}(G=$||($={})).ONE_INCH="oneInch",G.OPEN_SEA="opensea",G.FIAT="fiat",G.RARIBLE="rarible",new Intl.NumberFormat("en-us",{style:"currency",currency:"USD",minimumFractionDigits:2,maximumFractionDigits:2}),new Intl.NumberFormat("en-us",{style:"decimal",minimumSignificantDigits:1,maximumSignificantDigits:4});var D=(0,U.createContext)(null),W=function(i){function ReactMoralisError(a){var c=i.call(this,"[react-moralis]: ".concat(a))||this;return c.name="ReactMoralisError",c.message=a,c}return __extends(ReactMoralisError,i),ReactMoralisError.isReactMoraliserrpr=!0,ReactMoralisError}(Error),H=function(i){function NoMoralisContextProviderError(a){var c=i.call(this,a)||this;return c.name="NoMoralisContextProviderError",c}return __extends(NoMoralisContextProviderError,i),NoMoralisContextProviderError}(W),K=function(i){function NotAuthenticatedError(a){var c=i.call(this,a)||this;return c.name="NotAuthenticatedError",c}return __extends(NotAuthenticatedError,i),NotAuthenticatedError}(W),L=function(i){function ValidationError(a){var c=i.call(this,a)||this;return c.name="ValidationError",c}return __extends(ValidationError,i),ValidationError}(W),useMoralis=function(){var i=(0,U.useContext)(D);if(!i)throw new H("Make sure to only call useMoralis within a  <MoralisProvider>");return i},react=function equal(i,a){if(i===a)return!0;if(i&&a&&"object"==typeof i&&"object"==typeof a){if(i.constructor!==a.constructor)return!1;if(Array.isArray(i)){if((c=i.length)!=a.length)return!1;for(_=c;0!=_--;)if(!equal(i[_],a[_]))return!1;return!0}if(i.constructor===RegExp)return i.source===a.source&&i.flags===a.flags;if(i.valueOf!==Object.prototype.valueOf)return i.valueOf()===a.valueOf();if(i.toString!==Object.prototype.toString)return i.toString()===a.toString();if((c=(m=Object.keys(i)).length)!==Object.keys(a).length)return!1;for(_=c;0!=_--;)if(!Object.prototype.hasOwnProperty.call(a,m[_]))return!1;for(_=c;0!=_--;){var c,_,m,U=m[_];if(("_owner"!==U||!i.$$typeof)&&!equal(i[U],a[U]))return!1}return!0}return i!=i&&a!=a};function n(i){for(var a=arguments.length,c=Array(a>1?a-1:0),_=1;_<a;_++)c[_-1]=arguments[_];throw Error("[Immer] minified error nr: "+i+(c.length?" "+c.map(function(i){return"'"+i+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(i){return!!i&&!!i[ee]}function r(i){return!!i&&(function(i){if(!i||"object"!=typeof i)return!1;var a=Object.getPrototypeOf(i);if(null===a)return!0;var c=Object.hasOwnProperty.call(a,"constructor")&&a.constructor;return c===Object||"function"==typeof c&&Function.toString.call(c)===er}(i)||Array.isArray(i)||!!i[Z]||!!i.constructor[Z]||s(i)||v(i))}function i$1(i,a,c){void 0===c&&(c=!1),0===o(i)?(c?Object.keys:et)(i).forEach(function(_){c&&"symbol"==typeof _||a(_,i[_],i)}):i.forEach(function(c,_){return a(_,c,i)})}function o(i){var a=i[ee];return a?a.i>3?a.i-4:a.i:Array.isArray(i)?1:s(i)?2:v(i)?3:0}function u(i,a){return 2===o(i)?i.has(a):Object.prototype.hasOwnProperty.call(i,a)}function f(i,a,c){var _=o(i);2===_?i.set(a,c):3===_?(i.delete(a),i.add(c)):i[a]=c}function s(i){return X&&i instanceof Map}function v(i){return B&&i instanceof Set}function p(i){return i.o||i.t}function l(i){if(Array.isArray(i))return Array.prototype.slice.call(i);var a=en(i);delete a[ee];for(var c=et(a),_=0;_<c.length;_++){var m=c[_],U=a[m];!1===U.writable&&(U.writable=!0,U.configurable=!0),(U.get||U.set)&&(a[m]={configurable:!0,writable:!0,enumerable:U.enumerable,value:i[m]})}return Object.create(Object.getPrototypeOf(i),a)}function d(i,a){return void 0===a&&(a=!1),y(i)||t(i)||!r(i)||(o(i)>1&&(i.set=i.add=i.clear=i.delete=h),Object.freeze(i),a&&i$1(i,function(i,a){return d(a,!0)},!0)),i}function h(){n(2)}function y(i){return null==i||"object"!=typeof i||Object.isFrozen(i)}function b(i){var a=eo[i];return a||n(18,i),a}function j(i,a){a&&(b("Patches"),i.u=[],i.s=[],i.v=a)}function O(i){g(i),i.p.forEach(S),i.p=null}function g(i){i===q&&(q=i.l)}function w(i){return q={p:[],l:q,h:i,m:!0,_:0}}function S(i){var a=i[ee];0===a.i||1===a.i?a.j():a.O=!0}function P(i,a){a._=a.p.length;var c=a.p[0],_=void 0!==i&&i!==c;return a.h.g||b("ES5").S(a,i,_),_?(c[ee].P&&(O(a),n(4)),r(i)&&(i=M(a,i),a.l||x(a,i)),a.u&&b("Patches").M(c[ee],i,a.u,a.s)):i=M(a,c,[]),O(a),a.u&&a.v(a.u,a.s),i!==Y?i:void 0}function M(i,a,c){if(y(a))return a;var _=a[ee];if(!_)return i$1(a,function(m,U){return A(i,_,a,m,U,c)},!0),a;if(_.A!==i)return a;if(!_.P)return x(i,_.t,!0),_.t;if(!_.I){_.I=!0,_.A._--;var m=4===_.i||5===_.i?_.o=l(_.k):_.o;i$1(3===_.i?new Set(m):m,function(a,U){return A(i,_,m,a,U,c)}),x(i,m,!1),c&&i.u&&b("Patches").R(_,c,i.u,i.s)}return _.o}function A(i,a,c,_,m,U){if(t(m)){var C=M(i,m,U&&a&&3!==a.i&&!u(a.D,_)?U.concat(_):void 0);if(f(c,_,C),!t(C))return;i.m=!1}if(r(m)&&!y(m)){if(!i.h.F&&i._<1)return;M(i,m),a&&a.A.l||x(i,m)}}function x(i,a,c){void 0===c&&(c=!1),i.h.F&&i.m&&d(a,c)}function z(i,a){var c=i[ee];return(c?p(c):i)[a]}function I(i,a){if(a in i)for(var c=Object.getPrototypeOf(i);c;){var _=Object.getOwnPropertyDescriptor(c,a);if(_)return _;c=Object.getPrototypeOf(c)}}function k(i){i.P||(i.P=!0,i.l&&k(i.l))}function E(i){i.o||(i.o=l(i.t))}function R(i,a,c){var _,m,U,C,N,T,D,W=s(a)?b("MapSet").N(a,c):v(a)?b("MapSet").T(a,c):i.g?(U=m={i:(_=Array.isArray(a))?1:0,A:c?c.A:q,P:!1,I:!1,D:{},l:c,t:a,k:null,o:null,j:null,C:!1},C=ei,_&&(U=[m],C=ea),T=(N=Proxy.revocable(U,C)).revoke,D=N.proxy,m.k=D,m.j=T,D):b("ES5").J(a,c);return(c?c.A:q).p.push(W),W}function F(i,a){switch(a){case 2:return new Map(i);case 3:return Array.from(i)}return l(i)}var G,$,V,q,J="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,B="undefined"!=typeof Set,Q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,Y=J?Symbol.for("immer-nothing"):((V={})["immer-nothing"]=!0,V),Z=J?Symbol.for("immer-draftable"):"__$immer_draftable",ee=J?Symbol.for("immer-state"):"__$immer_state",er=""+Object.prototype.constructor,et="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:Object.getOwnPropertyNames,en=Object.getOwnPropertyDescriptors||function(i){var a={};return et(i).forEach(function(c){a[c]=Object.getOwnPropertyDescriptor(i,c)}),a},eo={},ei={get:function(i,a){if(a===ee)return i;var c,_,m=p(i);if(!u(m,a))return(_=I(m,a))?"value"in _?_.value:null===(c=_.get)||void 0===c?void 0:c.call(i.k):void 0;var U=m[a];return i.I||!r(U)?U:U===z(i.t,a)?(E(i),i.o[a]=R(i.A.h,U,i)):U},has:function(i,a){return a in p(i)},ownKeys:function(i){return Reflect.ownKeys(p(i))},set:function(i,a,c){var _=I(p(i),a);if(null==_?void 0:_.set)return _.set.call(i.k,c),!0;if(!i.P){var m=z(p(i),a),U=null==m?void 0:m[ee];if(U&&U.t===c)return i.o[a]=c,i.D[a]=!1,!0;if((c===m?0!==c||1/c==1/m:c!=c&&m!=m)&&(void 0!==c||u(i.t,a)))return!0;E(i),k(i)}return i.o[a]===c&&"number"!=typeof c&&(void 0!==c||a in i.o)||(i.o[a]=c,i.D[a]=!0,!0)},deleteProperty:function(i,a){return void 0!==z(i.t,a)||a in i.t?(i.D[a]=!1,E(i),k(i)):delete i.D[a],i.o&&delete i.o[a],!0},getOwnPropertyDescriptor:function(i,a){var c=p(i),_=Reflect.getOwnPropertyDescriptor(c,a);return _?{writable:!0,configurable:1!==i.i||"length"!==a,enumerable:_.enumerable,value:c[a]}:_},defineProperty:function(){n(11)},getPrototypeOf:function(i){return Object.getPrototypeOf(i.t)},setPrototypeOf:function(){n(12)}},ea={};i$1(ei,function(i,a){ea[i]=function(){return arguments[0]=arguments[0][0],a.apply(this,arguments)}}),ea.deleteProperty=function(i,a){return ei.deleteProperty.call(this,i[0],a)},ea.set=function(i,a,c){return ei.set.call(this,i[0],a,c,i[0])};var eu=new(function(){function e(i){var a=this;this.g=Q,this.F=!0,this.produce=function(i,c,_){if("function"==typeof i&&"function"!=typeof c){var m,U=c;return c=i,function(i){var _=this;void 0===i&&(i=U);for(var m=arguments.length,C=Array(m>1?m-1:0),N=1;N<m;N++)C[N-1]=arguments[N];return a.produce(i,function(i){var a;return(a=c).call.apply(a,[_,i].concat(C))})}}if("function"!=typeof c&&n(6),void 0!==_&&"function"!=typeof _&&n(7),r(i)){var C=w(a),N=R(a,i,void 0),T=!0;try{m=c(N),T=!1}finally{T?O(C):g(C)}return"undefined"!=typeof Promise&&m instanceof Promise?m.then(function(i){return j(C,_),P(i,C)},function(i){throw O(C),i}):(j(C,_),P(m,C))}if(!i||"object"!=typeof i){if((m=c(i))===Y)return;return void 0===m&&(m=i),a.F&&d(m,!0),m}n(21,i)},this.produceWithPatches=function(i,c){var _,m;return"function"==typeof i?function(c){for(var _=arguments.length,m=Array(_>1?_-1:0),U=1;U<_;U++)m[U-1]=arguments[U];return a.produceWithPatches(c,function(a){return i.apply(void 0,[a].concat(m))})}:[a.produce(i,c,function(i,a){_=i,m=a}),_,m]},"boolean"==typeof(null==i?void 0:i.useProxies)&&this.setUseProxies(i.useProxies),"boolean"==typeof(null==i?void 0:i.autoFreeze)&&this.setAutoFreeze(i.autoFreeze)}var i=e.prototype;return i.createDraft=function(i){r(i)||n(8),t(i)&&(t(a=i)||n(22,a),i=function n(i){if(!r(i))return i;var a,c=i[ee],_=o(i);if(c){if(!c.P&&(c.i<4||!b("ES5").K(c)))return c.t;c.I=!0,a=F(i,_),c.I=!1}else a=F(i,_);return i$1(a,function(i,_){var m;c&&(2===o(m=c.t)?m.get(i):m[i])===_||f(a,i,n(_))}),3===_?new Set(a):a}(a));var a,c=w(this),_=R(this,i,void 0);return _[ee].C=!0,g(c),_},i.finishDraft=function(i,a){var c=(i&&i[ee]).A;return j(c,a),P(void 0,c)},i.setAutoFreeze=function(i){this.F=i},i.setUseProxies=function(i){i&&!Q&&n(20),this.g=i},i.applyPatches=function(i,a){for(c=a.length-1;c>=0;c--){var c,_=a[c];if(0===_.path.length&&"replace"===_.op){i=_.value;break}}c>-1&&(a=a.slice(c+1));var m=b("Patches").$;return t(i)?m(i,a):this.produce(i,function(i){return m(i,a)})},e}()),es=eu.produce;eu.produceWithPatches.bind(eu),eu.setAutoFreeze.bind(eu),eu.setUseProxies.bind(eu),eu.applyPatches.bind(eu),eu.createDraft.bind(eu),eu.finishDraft.bind(eu);var _useResolveCall=function(i,a,c,_,m,C){void 0===m&&(m=!0);var N,T,D=useMoralis().isInitialized,W=__assign({autoFetch:m},null!=_?_:{}).autoFetch,H=(0,U.useState)(!1),K=H[0],L=H[1],G=(0,U.useState)(null),$=G[0],V=G[1],q=(T=(N=(0,U.useState)(function(){return d("function"==typeof a?a():a,!0)}))[1],[N[0],(0,U.useCallback)(function(i){T("function"==typeof i?es(i):d(i))},[])]),J=q[0],X=q[1],B=(0,U.useRef)(c);react(B.current,c)||(B.current=c);var Q=(0,U.useCallback)(function(_){var m=void 0===_?{}:_,U=m.throwOnError,N=m.onComplete,T=m.onError,D=m.onSuccess,W=m.params;return __awaiter(void 0,void 0,void 0,function(){var _,m,H,K;return __generator(this,function(G){switch(G.label){case 0:_=__assign(__assign({},c),W),G.label=1;case 1:if(G.trys.push([1,3,4,5]),C&&(m=C(_)))throw Error(m);return L(!0),V(null),[4,i(_)];case 2:return X(H=G.sent()),D&&D(H),[2,H];case 3:if(K=G.sent(),X(a),V(K),U)throw K;return T&&T(K),[3,5];case 4:return L(!1),N&&N(),[7];case 5:return[2]}})})},[i,B.current,C]),Y=(0,U.useMemo)(function(){return!!(null==J||Array.isArray(J)&&0===J.length)},[J]),Z=(0,U.useMemo)(function(){return K&&Y},[Y,K]);return(0,U.useEffect)(function(){D&&W&&Q()},[Q,D]),{fetch:Q,isFetching:K,isLoading:Z,error:$,data:J,setData:X}},setMultipleDataToUser=function(i,a){var c=i.password,_=i.email,m=i.username,U=__rest(i,["password","email","username"]);if(void 0!==c){if("string"!=typeof c)throw new L("password can only be a string type");a.setPassword(c)}if(void 0!==_){if("string"!=typeof _)throw new L("email can only be a string type");a.setEmail(_)}if(void 0!==m){if("string"!=typeof m)throw new L("username can only be a string type");a.setUsername(m)}Object.entries(U).filter(function(i){return void 0!==i[1]}).forEach(function(i){var c=i[0],_=i[1];a.set(c,_)})};(_=m||(m={})).UNDEFINED="undefined",_.UNAUTHENTICATED="unauthenticated",_.AUTHENTICATED="authenticated",_.AUTHENTICATING="authenticating",_.LOGGING_OUT="logging_out",_.ERROR="error";var ec={state:m.UNDEFINED,error:null},_useMoralisAuth=function(i){var a=__assign(__assign({},{setUser:function(){},Moralis:i.Moralis,environment:"browser"}),i),c=a.onAccountChanged,_=a.Moralis,C=a.environment,N=a._setIsWeb3Enabled,T=a._setIsWeb3EnableLoading,D=i.setUser,W=(0,U.useState)(ec),H=W[0],K=W[1],L=(0,U.useState)(!1),G=L[0],$=L[1],V=(0,U.useCallback)(function(i){return void 0===i&&(i={}),__awaiter(void 0,void 0,void 0,function(){var a,c,U=i.onComplete,C=i.onError,W=i.onSuccess,H=i.throwOnError,L=__rest(i,["onComplete","onError","onSuccess","throwOnError"]);return __generator(this,function(i){switch(i.label){case 0:K({state:m.AUTHENTICATING,error:null}),T&&T(!0),i.label=1;case 1:return i.trys.push([1,3,4,5]),[4,_.authenticate(L)];case 2:return D(a=i.sent()),N&&N(!0),K({state:m.AUTHENTICATED,error:null}),W&&W(a),[2,a];case 3:if(c=i.sent(),K({state:m.ERROR,error:c}),D(null),C&&C(c),H)throw c;return[3,5];case 4:return T&&T(!1),U&&U(),[7];case 5:return[2]}})})},[N,T]),q=(0,U.useCallback)(function(i,a,c,U,C){void 0===U&&(U={});var N=void 0===C?{}:C,T=N.throwOnError,W=N.onSuccess,H=N.onError,L=N.onComplete;return __awaiter(void 0,void 0,void 0,function(){var C,N,G;return __generator(this,function($){switch($.label){case 0:K({state:m.AUTHENTICATING,error:null}),C=new _.User,setMultipleDataToUser(__assign({username:i,password:a,email:c},U),C),$.label=1;case 1:return $.trys.push([1,3,4,5]),[4,C.signUp()];case 2:return N=$.sent(),K({state:m.AUTHENTICATED,error:null}),D(N),W&&W(N),[2,N];case 3:if(G=$.sent(),K({state:m.ERROR,error:G}),T)throw G;return H&&H(G),[3,5];case 4:return L&&L(),[7];case 5:return[2]}})})},[]),J=(0,U.useCallback)(function(i,a,c){var U=void 0===c?{}:c,C=U.usePost,N=U.throwOnError,T=U.onError,W=U.onSuccess,H=U.onComplete;return __awaiter(void 0,void 0,void 0,function(){var c,U;return __generator(this,function(L){switch(L.label){case 0:K({state:m.AUTHENTICATING,error:null}),L.label=1;case 1:return L.trys.push([1,3,4,5]),[4,_.User.logIn(i,a,{usePost:C})];case 2:return c=L.sent(),K({state:m.AUTHENTICATED,error:null}),D(c),W&&W(c),[2,c];case 3:if(U=L.sent(),K({state:m.ERROR,error:U}),N)throw U;return T&&T(U),[3,5];case 4:return H&&H(),[7];case 5:return[2]}})})},[]),X=(0,U.useCallback)(function(i){var a=void 0===i?{}:i,c=a.throwOnError,U=a.onError,C=a.onSuccess,N=a.onComplete;return __awaiter(void 0,void 0,void 0,function(){var i,a;return __generator(this,function(T){switch(T.label){case 0:K({state:m.AUTHENTICATING,error:null}),T.label=1;case 1:return T.trys.push([1,3,4,5]),[4,_.User.logOut()];case 2:return T.sent(),K({state:m.UNAUTHENTICATED,error:null}),D(null),C&&C(),[3,5];case 3:if(i=T.sent(),K({state:m.ERROR,error:i}),D(null!==(a=_.User.current())&&void 0!==a?a:null),c)throw i;return U&&U(i),[3,5];case 4:return N&&N(),[7];case 5:return[2]}})})},[]);(0,U.useEffect)(function(){try{var i=_.User.current();if(i)K({state:m.AUTHENTICATED,error:null}),D(i);else throw Error("Let it catch")}catch(i){K({state:m.UNAUTHENTICATED,error:null}),D(null)}},[]),(0,U.useEffect)(function(){if(!G&&"browser"===C){if(!window){console.warn("No window object found");return}try{var i=window.ethereum;if(!i){console.warn("No window.ethereum found");return}i.on("accountsChanged",function(i){return __awaiter(void 0,void 0,void 0,function(){var a;return __generator(this,function(_){return a=i[0],c&&c(a),[2]})})})}catch(i){console.warn(i.message)}$(!0)}},[G]);var B=H.state===m.AUTHENTICATED,Q=H.state===m.UNAUTHENTICATED,Y=H.state===m.AUTHENTICATING,Z=H.state===m.ERROR,ee=H.state===m.LOGGING_OUT,er=H.state===m.UNDEFINED;return{auth:H,authenticate:V,signup:q,login:J,logout:X,authError:H.error,isAuthenticated:B,isUnauthenticated:Q,isAuthenticating:Y,hasAuthError:Z,isLoggingOut:ee,isAuthUndefined:er}},_useMoralisInit=function(i){var a=i.appId,c=i.serverUrl,_=i.jsKey,m=i.dangerouslyUseOfMasterKey,C=i.plugins,N=i.environment,D=i.getMoralis,H=i.initializeOnMount,K=i.setAppId,L=i.setServerUrl,G=(0,U.useState)(!1),$=G[0],V=G[1],q=(0,U.useState)(!1),J=q[0],X=q[1],B=(0,U.useState)(!1),Q=B[0],Y=B[1],Z=(0,U.useRef)((void 0===D?function(){return T()}:D)()),ee=(0,U.useCallback)(function(i){var a=i.serverUrl,c=i.appId,_=i.javascriptKey,m=i.masterKey,U=i.plugins;return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(i){switch(i.label){case 0:if($)return[2];if(!c)throw new W('Provide a "appId" provided to <MoralisProvider>');if(!a)throw new W('Provide a "serverUrl" provided to <MoralisProvider>');return X(!0),[4,Z.current.start({serverUrl:a,appId:c,javascriptKey:_,masterKey:m,plugins:U})];case 1:return i.sent(),X(!1),V(!0),[2]}})})},[]);return(0,U.useEffect)(function(){!$&&(H||Q)&&(ee({appId:a,serverUrl:c,masterKey:m,javascriptKey:_,plugins:C}),V(!0))},[a,c,m,_,C,$,H,Q]),{isInitialized:$,isInitializing:J,initialize:(0,U.useCallback)(function(i){var _=void 0===i?{}:i,m=_.appId,U=_.serverUrl;if(m&&K(m),U&&L(U),!m&&!a)throw Error("No appId is provided. Please provide an appId to the Moralis.Provider or as argument in initialize()");if(!U&&!c)throw Error("No serverUrl is provided. Please provide an serverUrl to the Moralis.Provider or as argument in initialize()");Y(!0)},[a,c]),Moralis:Z.current,environment:void 0===N?"browser":N}},_useMoralisUser=function(i){var a=(0,U.useState)(null),c=a[0],_=a[1],m=(0,U.useState)(!1),C=m[0],N=m[1],T=(0,U.useState)(null),D=T[0],H=T[1],L=(0,U.useCallback)(function(a,m){var U=void 0===m?{}:m,C=U.throwOnError,T=U.onComplete,D=U.onError,L=U.onSuccess;return __awaiter(void 0,void 0,void 0,function(){var m,U,G;return __generator(this,function($){switch($.label){case 0:if(!c)throw new K("User needs to be authenticated before setting new data");N(!0),H(null),m=!1,$.label=1;case 1:return $.trys.push([1,3,4,5]),setMultipleDataToUser(a,c),m=!0,[4,c.save()];case 2:if($.sent(),!(U=i.User.current()))throw new W("No user data found after save");return _(U),L&&L(c),[2,c];case 3:if(G=$.sent(),m&&c.revert(),H(G),C)throw G;return D&&D(G),[3,5];case 4:return N(!1),T&&T(),[7];case 5:return[2]}})})},[c]),G=(0,U.useCallback)(function(i){var a=void 0===i?{}:i,m=a.throwOnError,U=a.onComplete,C=a.onError,T=a.onSuccess;return __awaiter(void 0,void 0,void 0,function(){var i,a;return __generator(this,function(D){switch(D.label){case 0:if(!c)throw new K("User needs to be authenticated before refetching");N(!0),H(null),D.label=1;case 1:return D.trys.push([1,3,4,5]),[4,c.fetch()];case 2:if(!(i=D.sent()))throw new W("No user data found after refetch");return _(i),T&&T(i),[2,i];case 3:if(H(a=D.sent()),m)throw a;return C&&C(a),[3,5];case 4:return N(!1),U&&U(),[7];case 5:return[2]}})})},[c]);return{setUserData:L,setUser:_,refetchUserData:G,user:c,_setUser:_,isUserUpdating:C,userError:D}},_useMoralisWeb3=function(i){var a=(0,U.useState)(!1),c=a[0],_=a[1],m=(0,U.useState)(null),C=m[0],N=m[1],T=(0,U.useState)(!1),D=T[0],W=T[1],H=(0,U.useState)(null),K=H[0],L=H[1],G=(0,U.useState)(null),$=G[0],V=G[1],q=(0,U.useState)(null),J=q[0],X=q[1],B=(0,U.useState)(null),Q=B[0],Y=B[1],Z=(0,U.useState)(null),ee=Z[0],er=Z[1];(0,U.useEffect)(function(){var handleDisconnect=function(){L(null),_(!1),V(null),X(null),Y(null),er(null)},a=i.onChainChanged(function(a){V(a),L(i.web3)}),c=i.onAccountChanged(X),m=i.onWeb3Enabled(function(i){var a=i.web3,c=i.chainId,_=i.account,m=i.connector,U=i.provider;L(a),V(c),X(_),Y(m),er(U)}),U=i.onWeb3Deactivated(handleDisconnect),C=i.onDisconnect(handleDisconnect);return function(){a(),c(),m(),U(),C()}},[i]);var et=(0,U.useCallback)(function(a){return void 0===a&&(a={}),__awaiter(void 0,void 0,void 0,function(){var c,m,U=a.throwOnError,C=a.onComplete,T=a.onError,D=a.onSuccess,H=__rest(a,["throwOnError","onComplete","onError","onSuccess"]);return __generator(this,function(a){switch(a.label){case 0:W(!0),N(null),a.label=1;case 1:return a.trys.push([1,3,4,5]),[4,i.enableWeb3(H)];case 2:return c=a.sent(),_(!0),D&&D(c),[2,c];case 3:if(N(m=a.sent()),U)throw m;return T&&T(m),[3,5];case 4:return W(!1),C&&C(),[7];case 5:return[2]}})})},[]),en=(0,U.useCallback)(function(){return __awaiter(void 0,void 0,void 0,function(){return __generator(this,function(a){switch(a.label){case 0:return[4,i.deactivateWeb3()];case 1:return a.sent(),[2]}})})},[]),eo=(0,U.useMemo)(function(){var i;return null!==(i=null==Q?void 0:Q.network)&&void 0!==i?i:null},[Q]),ei=(0,U.useMemo)(function(){var i;return null!==(i=null==Q?void 0:Q.type)&&void 0!==i?i:null},[Q]);return{enableWeb3:et,web3:K,isWeb3Enabled:c,web3EnableError:C,isWeb3EnableLoading:D,_setIsWeb3Enabled:_,_setIsWeb3EnableLoading:W,chainId:$,account:J,network:eo,connector:Q,connectorType:ei,deactivateWeb3:en,provider:ee}},MoralisProvider=function(i){var a=i.children,c=i.appId,_=i.serverUrl,m=i.jsKey,N=i.dangerouslyUseOfMasterKey,T=i.plugins,W=i.environment,H=i.getMoralis,K=i.options,L=(void 0===K?{}:K).onAccountChanged,G=i.initializeOnMount,$=(0,U.useState)(null!=c?c:null),V=$[0],q=$[1],J=(0,U.useState)(null!=_?_:null),X=J[0],B=_useMoralisInit({appId:V,serverUrl:X,jsKey:m,dangerouslyUseOfMasterKey:N,plugins:T,environment:W,getMoralis:H,initializeOnMount:void 0===G||G,setAppId:q,setServerUrl:J[1]}),Q=_useMoralisWeb3(B.Moralis),Y=Q._setIsWeb3Enabled,Z=Q._setIsWeb3EnableLoading,ee=__rest(Q,["_setIsWeb3Enabled","_setIsWeb3EnableLoading"]),er=_useMoralisUser(B.Moralis),et=er.setUser,en=__rest(er,["setUser"]),eo=_useMoralisAuth({onAccountChanged:L,setUser:et,Moralis:B.Moralis,environment:B.environment,_setIsWeb3Enabled:Y,_setIsWeb3EnableLoading:Z});return(0,C.jsx)(D.Provider,__assign({value:__assign(__assign(__assign(__assign(__assign({},B),eo),en),ee),{appId:V,serverUrl:X})},{children:a}),void 0)},useWeb3ExecuteFunction=function(i,a){var c=useMoralis().Moralis;return _useResolveCall((0,U.useCallback)(function(a){return __awaiter(void 0,void 0,void 0,function(){var _;return __generator(this,function(m){switch(m.label){case 0:return _=__assign(__assign({},i),a),[4,c.executeFunction(_)];case 1:return[2,m.sent()]}})})},[]),null,i,a,!1)},useWeb3Contract=function(i){var a=useWeb3ExecuteFunction(i),c=a.data,_=a.error;return{runContractFunction:a.fetch,data:c,error:_,isFetching:a.isFetching,isLoading:a.isLoading}},useEnsAddress=function(i){var a=useMoralis().web3,c=(0,U.useState)(null),_=c[0],m=c[1],C=(0,U.useState)(!1),N=C[0],T=C[1],D=(0,U.useState)(null),W=D[0],H=D[1];return(0,U.useEffect)(function(){a&&(T(!0),H(null),a.lookupAddress(i).then(function(i){m(i)}).catch(H).finally(function(){T(!1)}))},[i,a]),{name:_,isLoading:N,error:W}}}}]);