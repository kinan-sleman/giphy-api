(function(){"use strict";var e={232:function(e,n,t){var r=t(751),o=t(641);function i(e,n,t,r,i,u){const a=(0,o.g2)("SearchVue"),s=(0,o.g2)("GifList");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(a,{onFetchGifs:u.onFetch},null,8,["onFetchGifs"]),(0,o.bF)(s,{gifs:i.gifs},null,8,["gifs"])],64)}function u(e,n,t,i,u,a){return(0,o.bo)(((0,o.uX)(),(0,o.CE)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>u.keyword=e),onInput:n[1]||(n[1]=(...e)=>a.onInput&&a.onInput(...e)),type:"text",placeholder:"Type to search for an awesome GIF"},null,544)),[[r.Jo,u.keyword]])}var a={name:"SearchVue",data(){return{keyword:"",timeout:null}},methods:{onInput(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.search()}),500)},search(){fetch(`https://api.giphy.com/v1/gifs/search?api_key=svYEfjP6OdpZYbijnwmHGnhDpyfjAf1j&q=${this.keyword}&limit=9`).then((e=>e.json())).then((e=>{console.log(e),this.$emit("fetch-gifs",e.data)}))}}},s=t(262);const c=(0,s.A)(a,[["render",u],["__scopeId","data-v-29bb8304"]]);var f=c;const l={class:"giflist"};function p(e,n,t,r,i,u){const a=(0,o.g2)("GifVue");return(0,o.uX)(),(0,o.CE)("div",l,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.gifs,(e=>((0,o.uX)(),(0,o.Wv)(a,{key:e.id,gif:e},null,8,["gif"])))),128))])}var h=t(33);const d=["value"];function g(e,n,t,r,i,u){return(0,o.uX)(),(0,o.CE)("div",{target:"_blank",class:"gif",style:(0,h.Tr)(`background-image: url(${t.gif.images.original.url})`)},[(0,o.Lk)("input",{readonly:"",type:"text",ref:"url",value:t.gif.images.original.url,style:{flex:"1"}},null,8,d),(0,o.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>u.copy&&u.copy(...e))},"Copy")],4)}var v={name:"GifVue",props:{gif:Object},methods:{copy(){this.$refs.url.select(),document.execCommand("copy"),this.$refs.url.value="Copied !"}}};const m=(0,s.A)(v,[["render",g],["__scopeId","data-v-4aa149cc"]]);var y=m,b={name:"GifList",components:{GifVue:y},props:{gifs:Array}};const k=(0,s.A)(b,[["render",p]]);var w=k,O={name:"App",components:{SearchVue:f,GifList:w},data(){return{gifs:[]}},methods:{onFetch(e){this.gifs=e}}};const j=(0,s.A)(O,[["render",i]]);var C=j;(0,r.Ef)(C).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var c=o();void 0!==c&&(n=c)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(s)var f=s(t)}for(n&&n(r);c<u.length;c++)i=u[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},r=self["webpackChunkgiphy_api"]=self["webpackChunkgiphy_api"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(232)}));r=t.O(r)})();
//# sourceMappingURL=app.eb36850b.js.map