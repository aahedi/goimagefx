webpackJsonp([1],{"+T26":function(e,t,a){"use strict";function n(e){a("sP5w")}var i=a("80Bk"),s=a("vTaT"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-6976b5d4",null);t.a=c.exports},"2bK6":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),e.breadcrumbs.length>0?a("nav",{attrs:{"aria-label":"breadcrumb",role:"navigation"}},[a("ol",{staticClass:"breadcrumb"},[e._l(e.breadcrumbs.slice(0,-1),function(t){return a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:t.path}},[e._v(e._s(t.name))])],1)}),e._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e._v(e._s(e.breadcrumbs[e.breadcrumbs.length-1].name))])],2)]):e._e(),e._v(" "),a("router-view",{key:e.$route.fullPath})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-dark bg-dark"},[a("span",{staticClass:"navbar-brand"},[e._v("Add Effects to Your Image")])])}],s={render:n,staticRenderFns:i};t.a=s},"6Rv+":function(e,t,a){"use strict";function n(e){a("77Cr")}var i=a("I/9R"),s=a("rJEW"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-c5372b8a",null);t.a=c.exports},"77Cr":function(e,t){},"80Bk":function(e,t,a){"use strict";var n=a("d7EF"),i=a.n(n),s=a("9j39"),r=a.n(s),o=a("nFVa");t.a={data:function(){return{}},props:{values:{type:Array,default:function(){return[]}}},methods:{refreshImage:function(){for(var e=this.canvas.texture(o.a.image),t=this.canvas.draw(e),a=this.canvas.width/2,n=this.canvas.height/2,s=0;s<this.values.length;s++){var r=i()(this.values[s],2),c=r[0],u=r[1];if("hexPixelate"===c)t=t.hexagonalPixelate(a,n,u);else if("ink"===c)t=t.ink(u);else if("edgeWork"===c)t=t.edgeWork(u);else if("dotScreen"===c){t=t.dotScreen(a,n,1.1,u)}else if("denoise"===c)t=t.denoise(u);else if("brightness"===c)t=t.brightnessContrast(u,0);else{if("contrast"!==c)throw new Error("Bad component: "+c);t=t.brightnessContrast(0,u)}}t.update()}},mounted:function(){var e=this.$el;try{this.canvas=r.a.canvas()}catch(t){return void(e.innerHTML=t)}this.canvas.replace(e),o.a.image&&this.refreshImage()},destroyed:function(){delete this.canvas,this.canvas=null}}},EExp:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.ImageService.image?e._e():a("div",[a("h1",[e._v("Pick an image to play with.")]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h3",[e._v("Upload Your Own")]),e._v("\n          Upload: "),a("input",{attrs:{type:"file",name:"pic",accept:"image/*"},on:{change:function(t){e.processFile(t)}}})]),e._v(" "),a("div",{staticClass:"col-lg-6"},[a("h3",[e._v("Use One of These")]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},e._l(e.staticPics,function(t){return a("div",{staticClass:"col-lg-3 img-container"},[a("a",{on:{click:function(a){a.stopPropagation(),e.selectStaticImage(t)}}},[a("img",{attrs:{src:t}})])])}))])])])])]),e._v(" "),e.ImageService.image?a("div",[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 offset-lg-4"},[a("h1",[e._v("Your Image")]),e._v(" "),a("image-effect"),e._v(" "),a("p",[a("br"),e._v(" "),a("button",{on:{click:e.addEffectsToExistingImage}},[e._v("Add Some Effects")])]),e._v(" "),a("p",[a("button",{on:{click:e.pickDifferentImage}},[e._v("Pick a Different Image")])])],1)])])]):e._e()])},i=[],s={render:n,staticRenderFns:i};t.a=s},GUTb:function(e,t,a){"use strict";var n=a("+T26"),i=a("KVvj"),s=a("uUol"),r=a("nFVa"),o=a("h449");t.a={components:{imageEffect:n.a,customImageEffect:i.a},data:function(){var e=[];return s.a.forEach(function(t){e.push([t.name,t.default])}),{allComponents:s.a,compIndex:s.b,dynComps:e,ImageService:r.a,staticPics:["mountains.jpg","sydney.jpg","terraces.jpg"].map(function(e){return"/static/"+e})}},methods:{processFile:function(e){var t=e.target.files[0];r.a.loadImageFromFormFileInput(t)},selectStaticImage:function(e){r.a.loadResizeImage(e)},addEffectsToExistingImage:function(){this.$router.push("/display")},pickDifferentImage:function(){r.a.clearImage()}},mounted:function(){var e=this;r.a.eventBus.$once("image-loaded",function(t){e.$router.push("/display")})},beforeRouteEnter:function(e,t,a){a(function(e){o.a.eventBus.$emit("update-breadcrumbs",[{name:"Home",path:""}])})}}},"I/9R":function(e,t,a){"use strict";var n=a("d7EF"),i=a.n(n),s=a("+T26"),r=a("KVvj"),o=a("uUol"),c=a("nFVa"),u=a("h449");t.a={components:{imageEffect:s.a,customImageEffect:r.a},data:function(){var e=this;this.values=[];var t=this.$route.params.compValue;if(t){var a=t.split("="),n=i()(a,2),s=n[0],r=n[1];r=parseFloat(r),this.values=this.values.concat([[s,r]])}var c=this.$route.params.compValue2;if(c){var l=c.split("="),d=i()(l,2),v=d[0],m=d[1];m=parseFloat(m),this.values=this.values.concat([[v,m]])}var f=this.$route.params.compValue3;if(f){var h=f.split("="),p=i()(h,2),g=p[0],b=p[1];b=parseFloat(b),this.values=this.values.concat([[g,b]])}var _=this.$route.params.compValue4;if(_){var w=_.split("="),E=i()(w,2),I=E[0],x=E[1];x=parseFloat(x),this.values=this.values.concat([[I,x]])}var y=[];o.a.forEach(function(t){var a=e.values.concat([[t.name,t.default]]);y.push(a)});var C=[{name:"Home",path:"/"}],k=[];return this.values.forEach(function(e){var t=e[0],a=Object(o.d)(k);k.push(e),C.push({name:o.b[t].title,path:a})}),C.push({name:"Add an Effect",path:""}),u.a.eventBus.$emit("update-breadcrumbs",C),{allComponents:o.a,compIndex:o.b,dynComps:y}},computed:{imageLevel:function(){return this.values.length},levelAsWord:function(){return 0===this.values.length?"First":1===this.values.length?"Second":2===this.values.length?"Third":"UNKNOWN"}},methods:{downloadPicture:function(e){var t=this.$refs.startingImage;t.refreshImage(),Object(o.c)(t.canvas.toDataURL("image/png"))}},created:function(){},mounted:function(){},destroyed:function(){},beforeRouteEnter:function(e,t,a){c.a.image?a():(console.log("No image selected, going back home"),a("/"))}}},KVvj:function(e,t,a){"use strict";function n(e){a("uzPd")}var i=a("hSGO"),s=a("QdhF"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-1aca5836",null);t.a=c.exports},M93x:function(e,t,a){"use strict";function n(e){a("r7uW")}var i=a("xJD8"),s=a("2bK6"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,null,null);t.a=c.exports},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i=a("M93x"),s=a("YaEn");n.a.config.productionTip=!1,a("qb6w"),new n.a({el:"#app",router:s.a,template:"<App/>",components:{App:i.a}})},QdhF:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-link",{attrs:{to:e._f("urlFromValues")(e.values)}},[a("image-effect",{ref:"childImage",attrs:{values:e.values}})],1),e._v(" "),a("vue-slider",{ref:"slider",attrs:{min:e.compIndex[e.values[e.values.length-1][0]].min,max:e.compIndex[e.values[e.values.length-1][0]].max,interval:e.compIndex[e.values[e.values.length-1][0]].interval},on:{callback:e.cb},model:{value:e.values[e.values.length-1][1],callback:function(t){e.$set(e.values[e.values.length-1],1,t)},expression:"values[values.length-1][1]"}})],1)},i=[],s={render:n,staticRenderFns:i};t.a=s},YaEn:function(e,t,a){"use strict";var n=a("7+uW"),i=a("/ocq"),s=a("wrM5"),r=a("6Rv+");n.a.use(i.a),t.a=new i.a({routes:[{path:"/",name:"HomePage",component:s.a},{path:"/display",name:"DisplayZeroLevel",component:r.a},{path:"/display/:compValue",name:"DisplayFirstLevel",component:r.a},{path:"/display/:compValue/:compValue2",name:"DisplaySecondLevel",component:r.a},{path:"/display/:compValue/:compValue2/:compValue3",name:"DisplayThirdLevel",component:r.a},{path:"/display/:compValue/:compValue2/:compValue3/:compValue4",name:"DisplayFourthLevel",component:r.a}],scrollBehavior:function(e,t,a){return a||{x:0,y:0}}})},fXh8:function(e,t){},h449:function(e,t,a){"use strict";var n=a("Zrlr"),i=a.n(n),s=a("7+uW"),r=function e(){i()(this,e),this.eventBus=new s.a};t.a=new r},hSGO:function(e,t,a){"use strict";var n=a("GDE4"),i=a.n(n),s=a("+T26"),r=a("uUol");t.a={components:{imageEffect:s.a,vueSlider:i.a},data:function(){return{compIndex:r.b}},props:{values:{type:Array,default:function(){return[]}}},methods:{cb:function(){var e=this.$refs.childImage;this.$nextTick(function(){e.refreshImage()})}},mounted:function(){},filters:{urlFromValues:function(e){return Object(r.d)(e)}}}},nFVa:function(e,t,a){"use strict";function n(e,t,a,n){var i=[a/e,n/t];return i=Math.min(i[0],i[1]),{width:e*i,height:t*i}}var i=a("Zrlr"),s=a.n(i),r=a("wxAW"),o=a.n(r),c=a("7+uW"),u=function(){function e(){s()(this,e),this.image=null,this.eventBus=new c.a}return o()(e,[{key:"clearImage",value:function(){this.image=null}},{key:"loadImage",value:function(e){var t=new Image,a=this;t.onload=function(){a.image=t,a.eventBus.$emit("image-loaded")},t.src=e}},{key:"loadResizeImage",value:function(e){var t=new Image,a=this;t.onload=function(){var e=document.createElement("canvas"),i=n(t.width,t.height,300,300),s=e.getContext("2d");s.clearRect(0,0,e.width,e.height),e.width=i.width,e.height=i.height,s.drawImage(t,0,0,i.width,i.height),a.loadImage(e.toDataURL())},t.src=e}},{key:"loadImageFromFormFileInput",value:function(e){var t=new FileReader,a=this;t.onload=function(){var e=this.result;a.loadResizeImage(e)},t.readAsDataURL(e)}}]),e}();t.a=new u},qb6w:function(e,t){},r7uW:function(e,t){},rJEW:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 offset-lg-4"},[a("h1",[e._v("Starting Point")]),e._v(" "),a("image-effect",{ref:"startingImage",attrs:{values:e.values}})],1),e._v(" "),a("div",{staticClass:"col-lg-4"},[a("button",{on:{click:e.downloadPicture}},[e._v("Download Picture")])])])]),e._v(" "),e.imageLevel<=2?a("div",[a("h1",[e._v("Add "+e._s(e.levelAsWord)+" Effect:")]),e._v(" "),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},e._l(e.dynComps,function(t){return a("div",{staticClass:"col-lg-4"},[a("h2",[e._v(e._s(e.compIndex[t[t.length-1][0]].title))]),e._v(" "),a("custom-image-effect",{attrs:{values:t}})],1)}))])]):e._e(),e._v(" "),e.imageLevel>2?a("div",[a("h1",[e._v("The End")]),e._v(" "),a("p",[e._v("You've already applied as many effects as possible at one time.")])]):e._e()])},i=[],s={render:n,staticRenderFns:i};t.a=s},sP5w:function(e,t){},uUol:function(e,t,a){"use strict";function n(e){if("download"in document.createElement("a")){var t=window.document.createElement("a");t.href=e;var a=new Date,n=a.getFullYear()+"/"+a.getMonth()+"/"+a.getDate()+"-"+a.getHours()+":"+a.getMinutes();t.setAttribute("download","screenshot-"+n+".png"),window.document.body.appendChild(t),t.addEventListener("click",function(){t.parentElement.removeChild(t)}),t.click()}else{var i=window.open(""),s=i.document.createElement("img");s.src=e,i.document.body.appendChild(s)}}function i(e){if(!e)return"";var t=["display"];return e.forEach(function(e){t.push(e[0]+"="+e[1])}),"/"+t.join("/")}a.d(t,"a",function(){return s}),a.d(t,"b",function(){return r}),t.c=n,t.d=i;var s=[{name:"hexPixelate",title:"Hex Pixelate",min:0,max:30,interval:.1,default:10},{name:"ink",title:"Ink",min:0,max:1,interval:.01,default:.25},{name:"edgeWork",title:"Edges",min:0,max:20,interval:.1,default:5},{name:"dotScreen",title:"Dot Screen",min:1,max:10,interval:.01,default:3},{name:"denoise",title:"Smooth",min:0,max:50,interval:1,default:20},{name:"brightness",title:"Brightness",min:-1,max:1,interval:.01,default:.1},{name:"contrast",title:"Contrast",min:-1,max:1,interval:.01,default:.3}],r={};s.forEach(function(e){r[e.name]=e})},uzPd:function(e,t){},vTaT:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div")},i=[],s={render:n,staticRenderFns:i};t.a=s},wrM5:function(e,t,a){"use strict";function n(e){a("fXh8")}var i=a("GUTb"),s=a("EExp"),r=a("VU/8"),o=n,c=r(i.a,s.a,!1,o,"data-v-aeed5998",null);t.a=c.exports},xJD8:function(e,t,a){"use strict";var n=a("h449");t.a={name:"app",mounted:function(){var e=this;n.a.eventBus.$on("update-breadcrumbs",function(t){e.breadcrumbs=t})},data:function(){return{breadcrumbs:[]}}}}},["NHnr"]);
//# sourceMappingURL=app.380e91432b7d03d4e42a.js.map