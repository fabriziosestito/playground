!function(n){function t(t){for(var e,o,i=t[0],a=t[1],c=0,u=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e]);for(_&&_(t);u.length;)u.shift()()}var e={},r={0:0};function o(t){if(e[t])return e[t].exports;var r=e[t]={i:t,l:!1,exports:{}};return n[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(n){var t=[],e=r[n];if(0!==e)if(e)t.push(e[2]);else{var i=new Promise((function(t,o){e=r[n]=[t,o]}));t.push(e[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=function(n){return o.p+""+({}[n]||n)+".js"}(n);var _=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(u);var e=r[n];if(0!==e){if(e){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;_.message="Loading chunk "+n+" failed.\n("+o+": "+i+")",_.name="ChunkLoadError",_.type=o,_.request=i,e[1](_)}r[n]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},o.m=n,o.c=e,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="",o.oe=function(n){throw console.error(n),n};var i=this.webpackJsonp=this.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var _=a;o(o.s=3)}([function(n,t,e){"use strict";e.r(t),function(n){function r(n){const t=e.p;let r="";return(!t||t.indexOf("://")<0)&&(r+=window.location.protocol+"//"+window.location.host),r+=t||"/",r+n}let o;e.d(t,"init_codemirror_pass",(function(){return y})),e.d(t,"run_script",(function(){return O})),e.d(t,"compile_script",(function(){return k})),e.d(t,"main_js",(function(){return S})),e.d(t,"Playground",(function(){return A})),e.d(t,"RhaiMode",(function(){return P})),e.d(t,"State",(function(){return E}));const i=new Array(32).fill(void 0);function a(n){return i[n]}i.push(void 0,null,!0,!1);let c=i.length;function _(n){const t=a(n);return function(n){n<36||(i[n]=c,c=n)}(n),t}let u=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});u.decode();let s=null;function l(){return null!==s&&s.buffer===o.memory.buffer||(s=new Uint8Array(o.memory.buffer)),s}function f(n,t){return u.decode(l().subarray(n,n+t))}function d(n){c===i.length&&i.push(i.length+1);const t=c;return c=i[t],i[t]=n,t}let b=0,w=new TextEncoder("utf-8");const g="function"==typeof w.encodeInto?function(n,t){return w.encodeInto(n,t)}:function(n,t){const e=w.encode(n);return t.set(e),{read:n.length,written:e.length}};function p(n,t,e){if(void 0===e){const e=w.encode(n),r=t(e.length);return l().subarray(r,r+e.length).set(e),b=e.length,r}let r=n.length,o=t(r);const i=l();let a=0;for(;a<r;a++){const t=n.charCodeAt(a);if(t>127)break;i[o+a]=t}if(a!==r){0!==a&&(n=n.slice(a)),o=e(o,r,r=a+3*n.length);const t=l().subarray(o+a,o+r);a+=g(n,t).written}return b=a,o}let h=null;function m(){return null!==h&&h.buffer===o.memory.buffer||(h=new Int32Array(o.memory.buffer)),h}function y(n){o.init_codemirror_pass(d(n))}function v(n,t){if(!(n instanceof t))throw new Error("expected instance of "+t.name);return n.ptr}function j(n){return null==n}function O(n,t,e,r){try{const u=o.__wbindgen_add_to_stack_pointer(-16);var i=p(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=b;o.run_script(u,i,a,d(t),d(e),j(r)?0:d(r));var c=m()[u/4+0],_=m()[u/4+1];return f(c,_)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(c,_)}}function k(n){try{const a=o.__wbindgen_add_to_stack_pointer(-16);var t=p(n,o.__wbindgen_malloc,o.__wbindgen_realloc),e=b;o.compile_script(a,t,e);var r=m()[a/4+0],i=m()[a/4+1];return f(r,i)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(r,i)}}function S(){o.main_js()}function x(n){return function(){try{return n.apply(this,arguments)}catch(n){o.__wbindgen_exn_store(d(n))}}}class A{static __wrap(n){const t=Object.create(A.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();o.__wbg_playground_free(n)}constructor(){var n=o.playground_new();return A.__wrap(n)}runScript(n,t,e,r){try{const u=o.__wbindgen_add_to_stack_pointer(-16);var i=p(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=b;o.playground_runScript(u,this.ptr,i,a,d(t),d(e),j(r)?0:d(r));var c=m()[u/4+0],_=m()[u/4+1];return f(c,_)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(c,_)}}}class P{static __wrap(n){const t=Object.create(P.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();o.__wbg_rhaimode_free(n)}constructor(n){var t=o.rhaimode_new(n);return P.__wrap(t)}startState(){var n=o.rhaimode_startState(this.ptr);return E.__wrap(n)}copyState(n){v(n,E);var t=o.rhaimode_copyState(this.ptr,n.ptr);return E.__wrap(t)}token(n,t){try{const i=o.__wbindgen_add_to_stack_pointer(-16);v(t,E),o.rhaimode_token(i,this.ptr,d(n),t.ptr);var e=m()[i/4+0],r=m()[i/4+1];let a;return 0!==e&&(a=f(e,r).slice(),o.__wbindgen_free(e,1*r)),a}finally{o.__wbindgen_add_to_stack_pointer(16)}}indent(n,t){v(n,E);var e=p(t,o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;return _(o.rhaimode_indent(this.ptr,n.ptr,e,r))}get electricInput(){return _(o.rhaimode_electricInput(this.ptr))}get lineComment(){return _(o.rhaimode_lineComment(this.ptr))}}class E{static __wrap(n){const t=Object.create(E.prototype);return t.ptr=n,t}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();o.__wbg_state_free(n)}}t.default=async function t(e){void 0===e&&(e=new URL("index_bg.wasm",r("pkg/index.js")));const i={wbg:{}};i.wbg.__wbindgen_object_drop_ref=function(n){_(n)},i.wbg.__wbindgen_string_new=function(n,t){return d(f(n,t))},i.wbg.__wbg_call_f5e0576f61ee7461=x((function(n,t,e){return d(a(n).call(a(t),a(e)))})),i.wbg.__wbg_next_0864114990d58dd8=function(n){return d(a(n).next())},i.wbg.__wbindgen_is_falsy=function(n){return!a(n)},i.wbg.__wbg_length_52fa7d963c3e2d55=function(n){return a(n).length},i.wbg.__wbg_charCodeAt_c9a86b79b3ea6931=function(n,t){return a(n).charCodeAt(t>>>0)},i.wbg.__wbg_backUp_4486cd9ee6fc45bd=function(n,t){a(n).backUp(t>>>0)},i.wbg.__wbg_peek_815da24154859651=function(n){return d(a(n).peek())},i.wbg.__wbindgen_number_new=function(n){return d(n)},i.wbg.__wbg_sol_10af73622bf7e8ee=function(n){return a(n).sol()},i.wbg.__wbg_indentation_bdc928ee5ce4dfa9=function(n){return a(n).indentation()},i.wbg.__wbg_log_386a8115a84a780d=function(n){console.log(a(n))},i.wbg.__wbindgen_object_clone_ref=function(n){return d(a(n))},i.wbg.__wbg_new_fa42c326933ac742=function(n,t,e,r){return d(new RegExp(f(n,t),f(e,r)))},i.wbg.__wbindgen_json_parse=function(n,t){return d(JSON.parse(f(n,t)))},i.wbg.__wbg_get_0c6963cbab34fbb6=x((function(n,t){return d(Reflect.get(a(n),a(t)))})),i.wbg.__wbg_now_4abbca4ef2aba8d6=function(n){return a(n).now()},i.wbg.__wbg_self_05c54dcacb623b9a=x((function(){return d(self.self)})),i.wbg.__wbg_window_9777ce446d12989f=x((function(){return d(window.window)})),i.wbg.__wbg_globalThis_f0ca0bbb0149cf3d=x((function(){return d(globalThis.globalThis)})),i.wbg.__wbg_global_c3c8325ae8c7f1a9=x((function(){return d(n.global)})),i.wbg.__wbindgen_is_undefined=function(n){return void 0===a(n)},i.wbg.__wbg_newnoargs_3efc7bfa69a681f9=function(n,t){return d(new Function(f(n,t)))},i.wbg.__wbg_call_cb478d88f3068c91=x((function(n,t){return d(a(n).call(a(t)))})),i.wbg.__wbindgen_debug_string=function(n,t){var e=p(function n(t){const e=typeof t;if("number"==e||"boolean"==e||null==t)return""+t;if("string"==e)return`"${t}"`;if("symbol"==e){const n=t.description;return null==n?"Symbol":`Symbol(${n})`}if("function"==e){const n=t.name;return"string"==typeof n&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const e=t.length;let r="[";e>0&&(r+=n(t[0]));for(let o=1;o<e;o++)r+=", "+n(t[o]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(t));let o;if(!(r.length>1))return toString.call(t);if(o=r[1],"Object"==o)try{return"Object("+JSON.stringify(t)+")"}catch(n){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:o}(a(t)),o.__wbindgen_malloc,o.__wbindgen_realloc),r=b;m()[n/4+1]=r,m()[n/4+0]=e},i.wbg.__wbindgen_throw=function(n,t){throw new Error(f(n,t))},i.wbg.__wbindgen_rethrow=function(n){throw _(n)},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:c,module:u}=await async function(n,t){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,t)}catch(t){if("application/wasm"==n.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const e=await n.arrayBuffer();return await WebAssembly.instantiate(e,t)}{const e=await WebAssembly.instantiate(n,t);return e instanceof WebAssembly.Instance?{instance:e,module:n}:e}}(await e,i);return o=c.exports,t.__wbindgen_wasm_module=u,o.__wbindgen_start(),o}}.call(this,e(2))},function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return i}));var r=e.p+"12d158b21a29ba9ab0d911e2b412a83c.wasm",o=e(0);const i=Object(o.default)(r);i.then(n=>o)},function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"==typeof window&&(e=window)}n.exports=e},function(n,t,e){"use strict";e.r(t);var r=e(1);const o=Promise.all([e.e(1),e.e(2)]).then(e.bind(null,5)),i=e.e(3).then(e.t.bind(null,4,7));let a;if(window.location.hash.startsWith("#embed-")&&window.parent!==window){const n=window.location.hash.substr(7);let t;a=new Promise((n,e)=>{t=n}),window.addEventListener("message",(function(n){if("rhai-playground"===n.data.to&&"embed-init"===n.data.req){if("string"!=typeof n.data.code)throw"Code is not a string";t({code:n.data.code})}})),window.parent.postMessage({from:"rhai-playground",req:"embed-loaded",id:n},"*");const e=document.createElement("div");e.innerText="(embedded)",document.getElementById("loading").appendChild(e)}else a=Promise.resolve(null);Promise.all([o,a,r.b,i]).then(([n,t,e,r])=>{document.getElementById("loading").remove(),n.default("#topContainer",t)})}]);