let e,t,n=!1,l=!1;const s="undefined"!=typeof window?window:{},o=s.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=e,r=a(t,s),i=f(n);c.ael(o,l,r,i),(t.o=t.o||[]).push((()=>c.rel(o,l,r,i)))}))},a=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){J(e)}},f=e=>0!=(2&e),h=new WeakMap,d=e=>"sc-"+e.h,$={},p=e=>"object"==(e=typeof e)||"function"===e,b=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!p(l))&&(l+=""),s&&o?c[c.length-1].$+=l:c.push(s?m(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const i=m(e,null);return i.p=t,c.length>0&&(i.m=c),i},m=(e,t)=>({t:0,g:e,$:t,v:null,m:null,p:null}),y={},w=(e,t,n,l,o,r)=>{if(n!==l){let i=I(e,t),u=t.toLowerCase();if("class"===t){const t=e.classList,s=v(n),o=v(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if(i||"o"!==t[0]||"n"!==t[1]){const s=p(l);if((i||s&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!i||4&r||o)&&!s&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):I(s,u)?u.slice(2):u[2]+t.slice(3),n&&c.rel(e,t,n,!1),l&&c.ael(e,t,l,!1)}},g=/\s/,v=e=>e?e.split(g):[],S=(e,t,n,l)=>{const s=11===t.v.nodeType&&t.v.host?t.v.host:t.v,o=e&&e.p||$,c=t.p||$;for(l in o)l in c||w(s,l,o[l],void 0,n,t.t);for(l in c)w(s,l,o[l],c[l],n,t.t)},j=(t,l,s)=>{let c,r,i=l.m[s],u=0;if(null!==i.$)c=i.v=o.createTextNode(i.$);else{if(n||(n="svg"===i.g),c=i.v=o.createElementNS(n?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.g),n&&"foreignObject"===i.g&&(n=!1),S(null,i,n),null!=e&&c["s-si"]!==e&&c.classList.add(c["s-si"]=e),i.m)for(u=0;u<i.m.length;++u)r=j(t,i,u),r&&c.appendChild(r);"svg"===i.g?n=!1:"foreignObject"===c.tagName&&(n=!0)}return c},O=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=j(null,l,o),r&&(s[o].v=r,i.insertBefore(r,n)))},k=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.v.remove()},M=(e,t)=>e.g===t.g,C=(e,t)=>{const l=t.v=e.v,s=e.m,o=t.m,c=t.g,r=t.$;null===r?(n="svg"===c||"foreignObject"!==c&&n,"slot"===c||S(e,t,n),null!==s&&null!==o?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],u=t[r],a=l.length-1,f=l[0],h=l[a];for(;o<=r&&c<=a;)null==i?i=t[++o]:null==u?u=t[--r]:null==f?f=l[++c]:null==h?h=l[--a]:M(i,f)?(C(i,f),i=t[++o],f=l[++c]):M(u,h)?(C(u,h),u=t[--r],h=l[--a]):M(i,h)?(C(i,h),e.insertBefore(i.v,u.v.nextSibling),i=t[++o],h=l[--a]):M(u,f)?(C(u,f),e.insertBefore(u.v,i.v),u=t[--r],f=l[++c]):(s=j(t&&t[c],n,c),f=l[++c],s&&i.v.parentNode.insertBefore(s,i.v));o>r?O(e,null==l[a+1]?null:l[a+1].v,n,l,c,a):c>a&&k(t,o,r)})(l,s,t,o):null!==o?(null!==e.$&&(l.textContent=""),O(l,null,t,o,0,o.length-1)):null!==s&&k(s,0,s.length-1),n&&"svg"===c&&(n=!1)):e.$!==r&&(l.data=r)},x=e=>z(e).S,P=(e,t,n)=>{const l=x(e);return{emit:e=>E(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},E=(e,t,n)=>{const l=c.ce(t,n);return e.dispatchEvent(l),l},L=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},N=(e,t)=>{if(e.t|=16,!(4&e.t))return L(e,e.O),se((()=>T(e,t)));e.t|=512},T=(e,t)=>{const n=e.i;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>W(n,e,t))),e.u=null)),q(void 0,(()=>A(e,n,t)))},A=async(e,t,n)=>{const l=e.S,s=l["s-rc"];n&&(e=>{const t=e.k,n=e.S,l=t.t,s=((e,t)=>{let n=d(t),l=X.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,s=h.get(e=e.head||e);s||h.set(e,s=new Set),s.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);H(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>R(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},H=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.S,o=n.M||m(null,null),c=(e=>e&&e.g===y)(l)?l:b(null,null,l);t=s.tagName,c.g=null,c.t|=4,n.M=c,c.v=o.v=s.shadowRoot||s,e=s["s-sc"],C(o,c)})(n,l)}catch(e){J(e,n.S)}return null},R=e=>{const t=e.S,n=e.i,l=e.O;64&e.t||(e.t|=64,D(t),W(n,"componentDidLoad"),e.C(t),l||U()),e.j&&(e.j(),e.j=void 0),512&e.t&&le((()=>N(e,!1))),e.t&=-517},U=()=>{D(o.documentElement),le((()=>E(s,"appload",{detail:{namespace:"pixobe-coloring-book"}})))},W=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){J(e)}},q=(e,t)=>e&&e.then?e.then(t):t(),D=e=>e.classList.add("hydrated"),F=(e,t,n)=>{if(t.P){const l=Object.entries(t.P),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>z(this).L.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=z(e),o=s.L.get(t),c=s.t,r=s.i;n=((e,t)=>null==e||p(e)?e:4&t?"false"!==e&&(""===e||!!e):1&t?e+"":e)(n,l.P[t][0]),8&c&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.L.set(t,n),r&&2==(18&c)&&N(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){c.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},V=(e,t={})=>{const n=[],l=t.exclude||[],r=s.customElements,a=o.head,f=a.querySelector("meta[charset]"),h=o.createElement("style"),$=[];let p,b=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",o.baseURI).href,e.map((e=>{e[1].map((t=>{const s={t:t[0],h:t[1],P:t[2],N:t[3]};s.P=t[2],s.N=t[3];const o=s.h,a=class extends HTMLElement{constructor(e){super(e),G(e=this,s),1&s.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),b?$.push(this):c.jmp((()=>(e=>{if(0==(1&c.t)){const t=z(e),n=t.k,l=()=>{};if(1&t.t)u(e,t,n.N);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){L(t,t.O=n);break}}n.P&&Object.entries(n.P).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=Q(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(F(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){J(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=d(n);if(!X.has(t)){const l=()=>{};((e,t,n)=>{let l=X.get(e);i&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,X.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.O,c=()=>N(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){c.jmp((()=>(()=>{if(0==(1&c.t)){const e=z(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),W(t,"disconnectedCallback")}})()))}componentOnReady(){return z(this).T}};s.A=e[0],l.includes(o)||r.get(o)||(n.push(o),r.define(o,F(a,s,1)))}))})),h.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),a.insertBefore(h,f?f.nextSibling:a.firstChild),b=!1,$.length?$.map((e=>e.connectedCallback())):c.jmp((()=>p=setTimeout(U,30)))},_=new WeakMap,z=e=>_.get(e),B=(e,t)=>_.set(t.i=e,t),G=(e,t)=>{const n={t:0,S:e,k:t,L:new Map};return n.T=new Promise((e=>n.C=e)),e["s-p"]=[],e["s-rc"]=[],u(e,n,t.N),_.set(e,n)},I=(e,t)=>t in e,J=(e,t)=>(0,console.error)(e,t),K=new Map,Q=e=>{const t=e.h.replace(/-/g,"_"),n=e.A,l=K.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(K.set(n,e),e[t])),J)},X=new Map,Y=[],Z=[],ee=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&c.t?le(ne):c.raf(ne))},te=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){J(e)}e.length=0},ne=()=>{te(Y),te(Z),(l=Y.length>0)&&c.raf(ne)},le=e=>r().then(e),se=ee(Z,!0);export{y as H,V as b,P as c,x as g,b as h,r as p,B as r}