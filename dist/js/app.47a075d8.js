(function(t){function a(a){for(var n,o,i=a[0],c=a[1],l=a[2],f=0,p=[];f<i.length;f++)o=i[f],s[o]&&p.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(p.length)p.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(n=!1)}n&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},r=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var n=e("64a9"),s=e.n(n);s.a},"044f":function(t,a,e){"use strict";var n=e("7346"),s=e.n(n);s.a},"07da":function(t,a){t.exports={apiKey:"AIzaSyBvFzAKcRZV18htDC0h3JYssP_Zw89Z-MA",authDomain:"my-spa-project-87bd5.firebaseapp.com",databaseURL:"https://my-spa-project-87bd5.firebaseio.com",projectId:"my-spa-project-87bd5",storageBucket:"my-spa-project-87bd5.appspot.com",messagingSenderId:"148163344056"}},"3a20":function(t,a,e){},4019:function(t,a,e){},4973:function(t,a,e){"use strict";var n=e("3a20"),s=e.n(n);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var n=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper",attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("Menu"),e("router-view")],1)])},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"menu-wrap"},[e("a",{staticClass:"menu-link",attrs:{href:"javascript:void(0)"},on:{click:function(a){t.show=!t.show}}},[e("svg",{staticClass:"svg-inline--fa fa-car fa-w-16",attrs:{"aria-hidden":"true","data-prefix":"fas","data-icon":"car",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"}})])]),e("transition",{attrs:{name:"slide"}},[t.show?e("nav",{staticClass:"top-nav"},[e("a",{staticClass:"menu-close-link",attrs:{href:"javascript:void(0)"},on:{click:function(a){t.show=!t.show}}},[e("i",{staticClass:"fas fa-times"})]),e("div",{staticClass:"top-text"},[e("div",{staticClass:"hello-text"},[e("strong",[t._v("Hello,")]),t._v("\n                    Vestibulum commodo volutpat a,\n                    convallis ac, laoreet enim.\n                    Phasellus fermentum in, dolor.\n\n                    Pellentesque facilisis.\n                    Nulla imperdiet sit amet magna.\n                ")]),e("social-links")],1),e("ul",[e("li",[e("router-link",{attrs:{to:{name:"home"}}},[t._v("home")])],1),e("li",[e("router-link",{attrs:{to:{name:"cars"}}},[t._v("cars")])],1),e("li",[e("router-link",{attrs:{to:{name:"contacts"}}},[t._v("gallery")])],1),e("li",[e("router-link",{attrs:{to:{name:"contacts"}}},[t._v("specs")])],1)])]):t._e()])],1)},i=[],c=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"social"},[e("li",{},[e("a",{staticClass:"fab fa-linkedin",attrs:{href:"#"}})]),e("li",{},[e("a",{staticClass:"fab fa-facebook-f",attrs:{href:"#"}})]),e("li",{},[e("a",{staticClass:"fab fa-twitter",attrs:{href:"#"}})]),e("li",{},[e("a",{staticClass:"fab fa-instagram",attrs:{href:"#"}})])])}],u=(e("044f"),e("2877")),f={},p=Object(u["a"])(f,c,l,!1,null,"1ab6ad28",null);p.options.__file="SocialLinks.vue";var d=p.exports,h={data:function(){return{show:!1}},name:"Menu",components:{SocialLinks:d}},v=h,m=(e("5966"),Object(u["a"])(v,o,i,!1,null,"8914d942",null));m.options.__file="Menu.vue";var _=m.exports,b={name:"app",components:{Menu:_}},C=b,g=(e("034f"),Object(u["a"])(C,s,r,!1,null,null,null));g.options.__file="App.vue";var w=g.exports,y=e("8c4f"),j=e("5f30"),k=e.n(j),x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"main"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"inner-wrap"},[e("Header"),e("SocialLinks",{staticClass:"home-social"})],1),e("CarInfo")],1),e("Footer")],1)},$=[],O=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",[e("h1",[t._v("your car. your choice")]),e("h2",[t._v("It does not matter how slowly you go so long as you do not stop")])])}],S={name:"Header",components:{}},H=S,M=(e("d481"),Object(u["a"])(H,O,E,!1,null,"6a42b760",null));M.options.__file="Header.vue";var I=M.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.car?e("section",t._l(t.cars,function(a){return e("div",{staticClass:"car-info"},[e("div",{staticClass:"text-info"},[e("h2",[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.body))]),e("router-link",{attrs:{to:{name:"car",params:{slug:a.slug}}}},[e("button",{staticClass:"read-more butt"},[t._v("Read More...")])]),e("button",{staticClass:"show-photo butt",on:{click:function(a){t.show=!t.show}}},[t._v("Show Photo")])],1),e("transition",{staticClass:"image"},[t.show?e("div",{staticClass:"image-wrap"},[e("img",{attrs:{src:a.image,alt:"car"}})]):t._e()])],1)})):t._e()},F=[],z=(e("ac6a"),{name:"CarInfo",data:function(){return{show:!1,car:null,cars:[]}},components:{},created:function(){var t=this;this.$db.collection("cars").get().then(function(a){a.forEach(function(a){t.cars.push(a.data())})}),this.$db.collection("cars").get().then(function(a){a.forEach(function(a){t.car=a.data()})})}}),A=z,L=(e("eb0a"),Object(u["a"])(A,P,F,!1,null,"11c179ce",null));L.options.__file="CarInfo.vue";var T=L.exports,Z=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"footer"},[e("div",{staticClass:"contact-info"},[e("div",{staticClass:"info-wrap"},[e("li",{staticClass:"geo"},[e("a",{staticClass:"fas fa-map-marker-alt",attrs:{href:"#"}}),e("a",{attrs:{href:"#"}},[t._v("Zhytomyr, UA")])]),e("li",{staticClass:"phone"},[e("a",{staticClass:"fas fa-phone",attrs:{href:"#"}}),e("a",{attrs:{href:"#"}},[t._v("+380937443200")])]),e("li",{staticClass:"mail"},[e("a",{staticClass:"fas fa-envelope",attrs:{href:"#"}}),e("a",{attrs:{href:"#"}},[t._v("andriy.pustovoit@gmail.com")])])])]),e("div",{staticClass:"site-info"},[e("h4",[t._v("About the Site")]),e("p",[t._v("This Site about all my cars each I had.\n            With their pictures and technical specifications,\n            and same info from wiki.\n        ")])])])}],J={name:"Footer",components:{}},R=J,V=(e("8dad"),Object(u["a"])(R,Z,B,!1,null,"872e2cb8",null));V.options.__file="Footer.vue";var D=V.exports,K={name:"Home",components:{Header:I,SocialLinks:d,CarInfo:T,Footer:D}},U=K,q=(e("d95c"),Object(u["a"])(U,x,$,!1,null,"c73e6470",null));q.options.__file="Home.vue";var N=q.exports,W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.car?e("section",{staticClass:"car"},[e("Header"),e("h2",[t._v(t._s(t.car.title))]),e("img",{attrs:{src:t.car.image,alt:""}}),e("p",[t._v(t._s(t.car.body))]),e("Footer")],1):t._e()},Y=[],G={name:"Car",data:function(){return{car:null}},components:{Header:I,Footer:D},created:function(){var t=this,a=this.$route.params.slug;this.$db.collection("cars").where("slug","==",a).get().then(function(a){a.forEach(function(a){t.car=a.data()})}).catch(function(t){console.log("Error getting documents: ",t)})}},Q=G,X=(e("d4df"),Object(u["a"])(Q,W,Y,!1,null,"44ba8fc9",null));X.options.__file="Car.vue";var tt=X.exports,at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cars"},[e("Header"),e("h2",[t._v("Cars")]),t._l(t.cars,function(a){return e("div",[e("router-link",{attrs:{to:{name:"car",params:{slug:a.slug}}}},[t._v(t._s(a.title))])],1)}),e("Footer")],2)},et=[],nt={name:"Cars",data:function(){return{cars:[]}},components:{Header:I,Footer:D},created:function(){var t=this;this.$db.collection("cars").get().then(function(a){a.forEach(function(a){t.cars.push(a.data())})})}},st=nt,rt=(e("4973"),Object(u["a"])(st,at,et,!1,null,"1063da9a",null));rt.options.__file="Cars.vue";var ot=rt.exports,it=e("8aa5"),ct=e.n(it),lt=e("07da"),ut=ct.a.initializeApp(lt),ft=ut.firestore();ft.settings({timestampsInSnapshots:!0}),n["a"].prototype.$db=ft,n["a"].config.productionTip=!0,n["a"].use(k.a),n["a"].use(y["a"]);var pt=new y["a"]({mode:"history",routes:[{path:"/",name:"home",component:N},{path:"/cars",name:"cars",component:ot},{path:"/car/:slug",name:"car",component:tt}]});new n["a"]({render:function(t){return t(w)},router:pt}).$mount("#app")},5966:function(t,a,e){"use strict";var n=e("b392"),s=e.n(n);s.a},"64a9":function(t,a,e){},7346:function(t,a,e){},"7cc1":function(t,a,e){},"8dad":function(t,a,e){"use strict";var n=e("b84f"),s=e.n(n);s.a},b392:function(t,a,e){},b84f:function(t,a,e){},d481:function(t,a,e){"use strict";var n=e("4019"),s=e.n(n);s.a},d4df:function(t,a,e){"use strict";var n=e("f794"),s=e.n(n);s.a},d95c:function(t,a,e){"use strict";var n=e("7cc1"),s=e.n(n);s.a},eb0a:function(t,a,e){"use strict";var n=e("eb2d"),s=e.n(n);s.a},eb2d:function(t,a,e){},f794:function(t,a,e){}});
//# sourceMappingURL=app.47a075d8.js.map