(function(e){function t(t){for(var r,s,c=t[0],u=t[1],o=t[2],b=0,d=[];b<c.length;b++)s=c[b],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/boucleur/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var o=0;o<c.length;o++)t(c[o]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3477:function(e,t,n){},"43ae":function(e,t,n){"use strict";n("ab0a")},"86c9":function(e,t,n){},9224:function(e){e.exports=JSON.parse('{"a":"1.0.0"}')},aa16:function(e,t,n){"use strict";n("d044")},ab0a:function(e,t,n){},ab8b:function(e,t,n){"use strict";n("e90f")},ace7:function(e,t,n){"use strict";n("f34e")},b3bb:function(e,t,n){"use strict";n("86c9")},c7aa:function(e,t,n){"use strict";n("3477")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,i,s){var c=Object(r["y"])("router-view"),u=Object(r["y"])("Layout");return Object(r["p"])(),Object(r["d"])(u,null,{default:Object(r["F"])((function(){return[Object(r["g"])(c)]})),_:1})}var i=n("d4ec"),s=n("262e"),c=n("2caf"),u=n("9ab4"),o=n("ce1f"),l=Object(r["H"])("data-v-edce798c");Object(r["t"])("data-v-edce798c");var b={class:"content p-2"};Object(r["q"])();var d=l((function(e,t,n,a,i,s){var c=Object(r["y"])("Details"),u=Object(r["y"])("Nav"),o=Object(r["z"])("DetailsPlacement"),l=Object(r["z"])("MenuPlacement");return Object(r["p"])(),Object(r["d"])("div",{style:{height:e.height},class:"container grid-xs"},[Object(r["G"])(Object(r["g"])(c,null,null,512),[[o,"top"]]),Object(r["G"])(Object(r["g"])(u,null,null,512),[[l,"top"]]),Object(r["g"])("div",b,[Object(r["x"])(e.$slots,"default")]),Object(r["G"])(Object(r["g"])(c,null,null,512),[[o,"bottom"]]),Object(r["G"])(Object(r["g"])(u,null,null,512),[[l,"bottom"]])],4)})),p=n("bee2"),f=(n("99af"),n("b65f"),n("b680"),n("d3b7"),n("25f0"),n("4d90"),n("96cf"),n("1da1")),h=function(){function e(){Object(i["a"])(this,e)}return Object(p["a"])(e,null,[{key:"arrayBuffer",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0===File.prototype.arrayBuffer){e.next=4;break}return e.abrupt("return",t.arrayBuffer());case 4:return e.abrupt("return",new Promise((function(e){var n=new FileReader;n.onload=function(){e(n.result)},n.readAsArrayBuffer(t)})));case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"decodeAudioData",value:function(e){return new Promise((function(t,n){var r=window.AudioContext||window.webkitAudioContext||!1;if(r){var a=new r;a.decodeAudioData(e,t,n)}else t(!1)}))}},{key:"formatSize",value:function(e){var t=["o","ko","Mo","Go"],n=0,r=t[0];while(e>1024&&t[n+1])n++,e/=1024,r=t[n];return"".concat(e.toFixed(1)," ").concat(r)}},{key:"formatTime",value:function(e){var t=Math.trunc(e/60),n=Math.trunc(e-60*t);return"".concat(t.toString().padStart(2,"0"),":").concat(n.toString().padStart(2,"0"))}}]),e}();h.breakpoint="lg";var v={mounted:function(e,t){switch(t.value){case"bottom":e.classList.add("hide-".concat(h.breakpoint));break;case"top":e.classList.add("show-".concat(h.breakpoint));break}}},O=v,j={mounted:function(e,t){switch(t.value){case"bottom":e.classList.add("show-".concat(h.breakpoint));break;case"top":e.classList.add("hide-".concat(h.breakpoint));break}}},m=j,y={class:"text-center py-1"},g={class:"text-small text-gray mb-0"},k=Object(r["f"])(" ("),B=Object(r["f"])("not "),w=Object(r["f"])("persistent) "),x=Object(r["f"])(" • "),P={class:"text-gray",href:"https://github.com/tseignette/boucleur",target:"_blank"};function M(e,t,n,a,i,s){return Object(r["p"])(),Object(r["d"])("div",y,[Object(r["g"])("p",g,[e.quota&&e.usage?(Object(r["p"])(),Object(r["d"])(r["a"],{key:0},[Object(r["f"])(Object(r["B"])(e.usage)+" / "+Object(r["B"])(e.quota)+" ",1),null!==e.persisted?(Object(r["p"])(),Object(r["d"])(r["a"],{key:0},[k,e.persisted?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])(r["a"],{key:0},[B],64)),w],64)):Object(r["e"])("",!0),x],64)):Object(r["e"])("",!0),Object(r["g"])("a",P,"Version "+Object(r["B"])(e.version),1)])])}n("b0c0");var T=n("4dec"),C=(n("fb6a"),n("1013")),I=function(){function e(t,n){Object(i["a"])(this,e),this.addedOn=new Date,this.endBar=2,this.startBar=1,this.file=n,this.name=t}return Object(p["a"])(e,[{key:"guessTempo",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.file.slice(0),e.next=3,h.decodeAudioData(t);case 3:if(n=e.sent,!n){e.next=11;break}return e.next=7,Object(C["a"])(n);case 7:r=e.sent,this.tempo=r.bpm,e.next=12;break;case 11:this.tempo=120;case 12:return e.abrupt("return",this);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),S=function(){function e(){Object(i["a"])(this,e),this.adding=Object(r["v"])(!1),this.musics=Object(r["v"])(null),this.persisted=Object(r["v"])(null),this.quota=Object(r["v"])(null),this.usage=Object(r["v"])(null),this.database=new T["a"]("database"),this.database.version(1).stores({musics:"++id, addedOn, file, name"}),this.database.version(2).stores({musics:"++id, addedOn, file, name, tempo"}).upgrade((function(e){return e.table("musics").toCollection().modify((function(e){e.tempo=120}))})),this.database.version(3).stores({musics:"++id, addedOn, file, name, tempo, type"}).upgrade((function(e){return e.table("musics").toCollection().modify((function(e){e.type="audio/mpeg"}))})),this.database.version(4).stores({musics:"++id, addedOn, endBar, file, name, startBar, tempo, type"}).upgrade((function(e){return e.table("musics").toCollection().modify((function(e){e.endBar=2,e.startBar=1}))})),this.database.version(5).stores({musics:"++id, addedOn, endBar, file, name, startBar, tempo"}).upgrade((function(e){return e.table("musics").toCollection().modify((function(e){delete e.type}))})),this.table=this.database.table("musics"),this.table.mapToClass(I),this.listMusics(),this.persist(),this.updateQuotaAndUsage()}return Object(p["a"])(e,[{key:"addMusic",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.adding.value=!0,e.prev=1,e.next=4,t.guessTempo();case 4:return e.next=6,this.table.add(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),alert(null===e.t0||void 0===e.t0?void 0:e.t0.name);case 11:this.adding.value=!1,this.listMusics(),this.updateQuotaAndUsage();case 14:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteMusic",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.table.delete(t.id);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert(null===e.t0||void 0===e.t0?void 0:e.t0.name);case 8:this.listMusics(),this.updateQuotaAndUsage();case 10:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"updateMusic",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.table.update(t.id,t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert(null===e.t0||void 0===e.t0?void 0:e.t0.name);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"listMusics",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.table.reverse().toArray();case 2:this.musics.value=e.sent;case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"loadPersisted",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===(t=navigator.storage)||void 0===t||!t.persisted){e.next=4;break}return e.next=3,navigator.storage.persisted();case 3:this.persisted.value=e.sent;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"persist",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===(t=navigator.storage)||void 0===t||!t.persist){e.next=5;break}return e.next=3,navigator.storage.persist();case 3:return e.next=5,this.loadPersisted();case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"updateQuotaAndUsage",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===(t=navigator.storage)||void 0===t||!t.estimate){e.next=5;break}return e.next=3,navigator.storage.estimate();case 3:n=e.sent,void 0!==n.quota&&void 0!==n.usage&&(this.quota.value=n.quota,this.usage.value=n.usage);case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),R=new S,D=n("9224"),L=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.persisted=R.persisted,e.version=D["a"],e}return Object(p["a"])(n,[{key:"quota",get:function(){return null!==R.quota.value?h.formatSize(R.quota.value):null}},{key:"usage",get:function(){return null!==R.usage.value?h.formatSize(R.usage.value):null}}]),n}(o["b"]);L.render=M;var _=L,A={class:"bg-gray"},q={class:"tab tab-block"},H={class:"tab-item",title:"Music list"},z=Object(r["g"])("i",{class:"icon icon-menu"},null,-1),F={class:"tab-item",title:"Player"},G=Object(r["g"])("i",{class:"icon icon-arrow-right"},null,-1);function U(e,t,n,a,i,s){var c=Object(r["y"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",A,[Object(r["g"])("ul",q,[Object(r["g"])("li",H,[Object(r["g"])(c,{"active-class":"active",to:"/"},{default:Object(r["F"])((function(){return[z]})),_:1})]),Object(r["g"])("li",F,[Object(r["g"])(c,{"active-class":"active",to:"/player"},{default:Object(r["F"])((function(){return[G]})),_:1})])])])}var W=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(o["b"]);W.render=U;var $=W,E=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.breakpoint="lg",e.height="",e}return Object(p["a"])(n,[{key:"created",value:function(){this.updateHeight(),window.addEventListener("resize",this.updateHeight)}},{key:"beforeUnmount",value:function(){window.removeEventListener("resize",this.updateHeight)}},{key:"updateHeight",value:function(){this.height="".concat(window.innerHeight,"px")}}]),n}(o["b"]);E=Object(u["a"])([Object(o["a"])({components:{Details:_,Nav:$},directives:{DetailsPlacement:O,MenuPlacement:m}})],E);var N=E;n("b3bb");N.render=d,N.__scopeId="data-v-edce798c";var Q=N,V=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(o["b"]);V=Object(u["a"])([Object(o["a"])({components:{Layout:Q}})],V);var J=V;n("43ae");J.render=a;var Y=J,X=n("9483");Object(X["a"])("".concat("/boucleur/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var K=n("6c02"),Z=Object(r["H"])("data-v-7c05354a"),ee=Z((function(e,t,n,a,i,s){var c=Object(r["y"])("MusicsAdd"),u=Object(r["y"])("MusicsList"),o=Object(r["z"])("MenuPlacement");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["G"])(Object(r["g"])(c,{class:"music-add music-add-top mb-2"},null,512),[[o,"top"]]),Object(r["g"])(u,{class:"music-list"}),Object(r["G"])(Object(r["g"])(c,{class:"music-add music-add-bottom mt-2"},null,512),[[o,"bottom"]])],64)})),te={class:"text-center"},ne=Object(r["g"])("i",{class:"icon icon-plus"},null,-1);function re(e,t,n,a,i,s){return Object(r["p"])(),Object(r["d"])("div",te,[Object(r["g"])("input",{onChange:t[1]||(t[1]=function(t){return e.addMusic()}),accept:".mp3",class:"d-none",ref:"fileInput",type:"file"},null,544),Object(r["g"])("button",{class:[{loading:e.adding||null===e.musics},"btn btn-lg btn-primary btn-action s-circle"],onClick:t[2]||(t[2]=function(t){return e.$refs.fileInput.click()}),title:"Add a music",type:"button"},[ne],2)])}var ae=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.adding=R.adding,e.musics=R.musics,e}return Object(p["a"])(n,[{key:"addMusic",value:function(){var e=Object(f["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null!==(t=this.$refs.fileInput.files)&&void 0!==t&&t.length){e.next=2;break}return e.abrupt("return");case 2:return n=this.$refs.fileInput.files[0],e.t0=I,e.t1=n.name,e.next=7,h.arrayBuffer(n);case 7:return e.t2=e.sent,r=new e.t0(e.t1,e.t2),this.$refs.fileInput.value="",e.next=12,R.addMusic(r);case 12:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(o["b"]);ae.render=re;var ie=ae,se={key:0,class:"empty"},ce=Object(r["g"])("div",{class:"loading"},null,-1),ue={key:1,class:"empty"},oe=Object(r["g"])("p",{class:"empty-title h5"},"You have no music",-1),le={key:2};function be(e,t,n,a,i,s){var c=Object(r["y"])("MusicTile");return null===e.musics?(Object(r["p"])(),Object(r["d"])("div",se,[ce])):0===e.musics.length?(Object(r["p"])(),Object(r["d"])("div",ue,[oe])):(Object(r["p"])(),Object(r["d"])("div",le,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(e.musics,(function(e,t){return Object(r["p"])(),Object(r["d"])(c,{class:{"mt-1":0!==t},key:e.id,music:e},null,8,["class","music"])})),128))]))}var de={class:"tile tile-centered"},pe={class:"tile-content"},fe={class:"tile-subtitle text-gray"},he={class:"tile-action"},ve={class:"dropdown dropdown-right mr-1"},Oe=Object(r["g"])("a",{class:"dropdown-toggle btn btn-link btn-action s-circle",tabindex:"0"},[Object(r["g"])("i",{class:"icon icon-more-horiz"})],-1),je={class:"menu"},me={class:"menu-item"},ye=Object(r["g"])("i",{class:"icon icon-arrow-right"},null,-1);function ge(e,t,n,a,i,s){return Object(r["p"])(),Object(r["d"])("div",de,[Object(r["g"])("div",pe,[Object(r["g"])("div",{title:e.music.name,class:"tile-title"},Object(r["B"])(e.music.name),9,["title"]),Object(r["g"])("small",fe,Object(r["B"])(e.music.tempo)+" bpm • "+Object(r["B"])(e.size)+" • "+Object(r["B"])(e.addedOn),1)]),Object(r["g"])("div",he,[Object(r["g"])("div",ve,[Oe,Object(r["g"])("ul",je,[Object(r["g"])("li",me,[Object(r["g"])("button",{onClick:t[1]||(t[1]=function(t){return e.deleteMusic()}),class:"btn btn-block btn-error",title:"Delete music",type:"button"},"Delete")])])]),Object(r["g"])("button",{onClick:t[2]||(t[2]=function(t){return e.playMusic()}),class:"btn btn-action s-circle",title:"Play"},[ye])])])}var ke=function e(){Object(i["a"])(this,e),this.music=Object(r["v"])(null)},Be=new ke,we=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(p["a"])(n,[{key:"deleteMusic",value:function(){R.deleteMusic(this.music)}},{key:"playMusic",value:function(){Be.music.value=this.music,this.$router.push("/player")}},{key:"addedOn",get:function(){return this.music.addedOn.toLocaleDateString()}},{key:"size",get:function(){return h.formatSize(this.music.file.byteLength)}}]),n}(o["b"]);we=Object(u["a"])([Object(o["a"])({props:{music:I}})],we);var xe=we;xe.render=ge;var Pe=xe,Me=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.musics=R.musics,e}return n}(o["b"]);Me=Object(u["a"])([Object(o["a"])({components:{MusicTile:Pe}})],Me);var Te=Me;Te.render=be;var Ce=Te,Ie=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return n}(o["b"]);Ie=Object(u["a"])([Object(o["a"])({components:{MusicsAdd:ie,MusicsList:Ce},directives:{MenuPlacement:m}})],Ie);var Se=Ie;n("aa16");Se.render=ee,Se.__scopeId="data-v-7c05354a";var Re=Se,De={key:0,class:"empty"},Le=Object(r["g"])("p",{class:"empty-title h5"},"You have no music playing",-1),_e={class:"empty-action"},Ae=Object(r["f"])("Select a music");function qe(e,t,n,a,i,s){var c=Object(r["y"])("router-link"),u=Object(r["y"])("PlayerContent");return null===e.music?(Object(r["p"])(),Object(r["d"])("div",De,[Le,Object(r["g"])("div",_e,[Object(r["g"])(c,{class:"btn btn-primary",title:"Select a music",to:"/"},{default:Object(r["F"])((function(){return[Ae]})),_:1})])])):(Object(r["p"])(),Object(r["d"])(u,{key:1,music:e.music},null,8,["music"]))}var He=Object(r["H"])("data-v-7b8ff6f0");Object(r["t"])("data-v-7b8ff6f0");var ze={class:"player"},Fe={key:0,class:"loading"};Object(r["q"])();var Ge=He((function(e,t,n,a,i,s){var c=Object(r["y"])("PlayerInfo"),u=Object(r["y"])("PlayerProgressBar"),o=Object(r["y"])("PlayerOptions"),l=Object(r["y"])("PlayerButtons");return Object(r["p"])(),Object(r["d"])("div",ze,[e.loading?(Object(r["p"])(),Object(r["d"])("div",Fe)):(Object(r["p"])(),Object(r["d"])(r["a"],{key:1},[Object(r["g"])(c,{music:e.music,player:e.player,class:"mb-1"},null,8,["music","player"]),Object(r["g"])(u,{player:e.player,class:"mb-2"},null,8,["player"]),Object(r["g"])(o,{music:e.music,player:e.player,class:"mb-2"},null,8,["music","player"]),Object(r["g"])(l,{player:e.player},null,8,["player"])],64))])})),Ue=(n("3ca3"),n("ddb0"),n("2b3d"),n("1e5c")),We=function(){function e(t,n){Object(i["a"])(this,e),this.paused=Object(r["v"])(!0),this.endBar=Object(r["v"])(n.endBar),this.player=t,this.startBar=Object(r["v"])(n.startBar),this.tempo=Object(r["v"])(n.tempo)}return Object(p["a"])(e,[{key:"togglePaused",value:function(){this.paused.value=!this.paused.value,this.player.togglePaused(this.paused.value),this.handleInterval()}},{key:"handleInterval",value:function(){var e=this;this.paused.value?clearInterval(this.interval):(this.player.setCurrentTime(this.startBarTime),this.interval=setInterval((function(){e.player.setCurrentTime(e.startBarTime)}),1e3*this.loopDuration))}},{key:"barDuration",get:function(){return 60/this.tempo.value}},{key:"endBarTime",get:function(){return this.barDuration*(this.endBar.value-1)}},{key:"loopDuration",get:function(){return this.endBarTime-this.startBarTime}},{key:"nbBars",get:function(){return Math.floor(this.tempo.value*this.player.duration.value/60)}},{key:"startBarTime",get:function(){return this.barDuration*(this.startBar.value-1)}}]),e}(),$e=function(){function e(t){Object(i["a"])(this,e),this.currentTime=Object(r["v"])(0),this.duration=Object(r["v"])(0),this.loading=Object(r["v"])(!0),this.paused=Object(r["v"])(!0),this.progress=Object(r["v"])(0);var n=new Blob([t.file]);this.looper=new We(this,t),this.player=new Ue["Howl"]({format:["mp3"],src:window.URL.createObjectURL(n)}),this.handleListeners("add"),this.player.once("load",this.onLoad.bind(this))}return Object(p["a"])(e,[{key:"destroy",value:function(){this.player.unload(),this.clearInterval(),this.handleListeners("remove")}},{key:"setCurrentTime",value:function(e){this.player.seek(e),this.updateCurrentTime()}},{key:"setProgress",value:function(e){this.setCurrentTime(e*this.duration.value)}},{key:"togglePaused",value:function(e){this.paused.value=void 0===e?!this.paused.value:e,this.paused.value?(this.player.pause(),this.clearInterval()):(this.player.play(),this.setInterval())}},{key:"clearInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){clearInterval(this.interval)}))},{key:"errorHandler",value:function(e,t){alert(t)}},{key:"handleListeners",value:function(e){var t="add"===e?"on":"off";this.player[t]("end",this.onEnd.bind(this)),this.player[t]("loaderror",this.errorHandler),this.player[t]("playerror",this.errorHandler)}},{key:"onEnd",value:function(){this.clearInterval(),this.paused.value=!0}},{key:"onLoad",value:function(){this.updateCurrentTime(),this.updateDuration(),this.loading.value=!1}},{key:"setInterval",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){var e=this;this.interval=setInterval((function(){e.updateCurrentTime()}),100)}))},{key:"updateCurrentTime",value:function(){this.currentTime.value=this.player.seek(),this.updateProgress()}},{key:"updateDuration",value:function(){this.duration.value=this.player.duration(),this.updateProgress()}},{key:"updateProgress",value:function(){this.progress.value=100*this.currentTime.value/this.duration.value}}]),e}(),Ee=Object(r["H"])("data-v-3a3f2834");Object(r["t"])("data-v-3a3f2834");var Ne={class:"text-center"};Object(r["q"])();var Qe=Ee((function(e,t,n,a,i,s){return Object(r["p"])(),Object(r["d"])("div",Ne,[Object(r["g"])("button",{disabled:!e.paused&&e.looperPaused,style:e.looperButtonStyle,title:e.looperPaused?"Start looper":"Stop looper",onClick:t[1]||(t[1]=function(t){return e.toggleLooper()}),class:"btn btn-xl s-circle mr-2"},[Object(r["g"])("i",{class:[{paused:e.looperPaused},"icon icon-refresh"]},null,2)],12,["disabled","title"]),Object(r["g"])("button",{disabled:!e.looperPaused,title:e.paused?"Play":"Pause",onClick:t[2]||(t[2]=function(t){return e.togglePaused()}),class:"btn btn-xl btn-primary s-circle"},[Object(r["g"])("i",{class:[{paused:e.paused},"icon icon-arrow-right"]},null,2)],8,["disabled","title"])])})),Ve=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(p["a"])(n,[{key:"toggleLooper",value:function(){this.player.looper.togglePaused()}},{key:"togglePaused",value:function(){this.player.togglePaused()}},{key:"looperButtonStyle",get:function(){return this.looperPaused?null:{animation:"loading ".concat(1e3*this.player.looper.loopDuration,"ms infinite linear")}}},{key:"looperPaused",get:function(){return this.player.looper.paused.value}},{key:"paused",get:function(){return this.player.paused.value}}]),n}(o["b"]);Ve=Object(u["a"])([Object(o["a"])({props:{player:$e}})],Ve);var Je=Ve;n("ace7");Je.render=Qe,Je.__scopeId="data-v-3a3f2834";var Ye=Je,Xe={class:"d-flex justify-content-between align-items-end"},Ke={class:"text-small text-muted"},Ze={class:"text-small text-muted"};function et(e,t,n,a,i,s){return Object(r["p"])(),Object(r["d"])("div",Xe,[Object(r["g"])("span",Ke,Object(r["B"])(e.currentTime),1),Object(r["g"])("span",{title:e.music.name,class:"ellipsis px-2"},Object(r["B"])(e.music.name),9,["title"]),Object(r["g"])("span",Ze,Object(r["B"])(e.duration),1)])}var tt=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(p["a"])(n,[{key:"currentTime",get:function(){return h.formatTime(this.player.currentTime.value)}},{key:"duration",get:function(){return h.formatTime(this.player.duration.value)}}]),n}(o["b"]);tt=Object(u["a"])([Object(o["a"])({props:{music:I,player:$e}})],tt);var nt=tt;nt.render=et;var rt=nt,at={class:"form-group justify-content-between"},it=Object(r["g"])("div",{class:"col-4"},[Object(r["g"])("label",{class:"form-label",for:"tempo"},"Tempo")],-1),st={class:"col-8"},ct={class:"input-group"},ut=Object(r["g"])("span",{class:"input-group-addon"},"bpm",-1),ot={class:"form-group columns"},lt={class:"column"},bt={for:"startBar",class:"form-label"},dt={class:"column"},pt={for:"endBar",class:"form-label"};function ft(e,t,n,a,i,s){return Object(r["p"])(),Object(r["d"])("form",{onChange:t[4]||(t[4]=function(){return e.onFormChange.apply(e,arguments)}),class:"form-horizontal"},[Object(r["g"])("div",at,[it,Object(r["g"])("div",st,[Object(r["g"])("div",ct,[Object(r["G"])(Object(r["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.tempo=t}),disabled:e.looperOn,required:"",class:"form-input",id:"tempo",min:"1",step:"1",type:"number"},null,8,["disabled"]),[[r["D"],e.tempo,void 0,{number:!0}]]),ut])])]),Object(r["g"])("div",ot,[Object(r["g"])("div",lt,[Object(r["g"])("label",bt,"Start bar"+Object(r["B"])(e.startBarInterval),1),Object(r["G"])(Object(r["g"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.startBar=t}),disabled:e.looperOn,max:e.startBarMax,required:"",class:"form-input",id:"startBar",min:"1",step:"1",type:"number"},null,8,["disabled","max"]),[[r["D"],e.startBar,void 0,{number:!0}]])]),Object(r["g"])("div",dt,[Object(r["g"])("label",pt,"End bar"+Object(r["B"])(e.endBarInterval),1),Object(r["G"])(Object(r["g"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.endBar=t}),disabled:e.looperOn,max:e.endBarMax,min:e.endBarMin,required:"",class:"form-input",id:"endBar",step:"1",type:"number"},null,8,["disabled","max","min"]),[[r["D"],e.endBar,void 0,{number:!0}]])])])],32)}var ht=function(){function e(){Object(i["a"])(this,e)}return Object(p["a"])(e,null,[{key:"endBar",value:function(e,t,n){return"number"===typeof e&&e>t&&e<=n?e:null}},{key:"tempo",value:function(e){return"number"===typeof e&&e>=1?e:null}},{key:"startBar",value:function(e,t){return"number"===typeof e&&e>=1&&e<t?e:null}}]),e}(),vt=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.endBar="",e.startBar="",e.tempo="",e}return Object(p["a"])(n,[{key:"beforeMount",value:function(){this.endBar=this.music.endBar,this.startBar=this.music.startBar,this.tempo=this.music.tempo}},{key:"onFormChange",value:function(){var e=ht.startBar(this.startBar,this.nbBars),t=ht.tempo(this.tempo);if(null!==t&&(this.music.tempo=t,this.player.looper.tempo.value=t),null!==e){var n=ht.endBar(this.endBar,e,this.nbBars);this.music.startBar=e,this.player.looper.startBar.value=e,null!==n&&(this.music.endBar=n,this.player.looper.endBar.value=n)}R.updateMusic(this.music)}},{key:"endBarInterval",get:function(){return null!==this.endBarMax&&null!==this.endBarMin?" (".concat(this.endBarMin,"-").concat(this.endBarMax,")"):""}},{key:"endBarMax",get:function(){return 0===this.nbBars?null:this.nbBars}},{key:"endBarMin",get:function(){var e=ht.startBar(this.startBar,this.nbBars);return null===e?null:e+1}},{key:"looperOn",get:function(){return!this.player.looper.paused.value}},{key:"nbBars",get:function(){return this.player.looper.nbBars}},{key:"startBarInterval",get:function(){return null!==this.startBarMax?" (1-".concat(this.startBarMax,")"):""}},{key:"startBarMax",get:function(){return 0===this.nbBars?null:this.nbBars-1}}]),n}(o["b"]);vt=Object(u["a"])([Object(o["a"])({props:{music:I,player:$e}})],vt);var Ot=vt;Ot.render=ft;var jt=Ot,mt=Object(r["H"])("data-v-17e27714"),yt=mt((function(e,t,n,a,i,s){return Object(r["p"])(),Object(r["d"])("div",{onClick:t[1]||(t[1]=function(t){return e.setProgress(t)}),class:[{disabled:e.looperOn},"bar c-hand"],ref:"progressBar"},[Object(r["g"])("div",{style:{width:e.progress},class:"bar-item bg-gray-dark"},null,4),null!==e.startBarPosition?(Object(r["p"])(),Object(r["d"])("div",{key:0,style:{left:e.startBarPosition},class:"start-bar bg-primary"},null,4)):Object(r["e"])("",!0),null!==e.endBarPosition?(Object(r["p"])(),Object(r["d"])("div",{key:1,style:{left:e.endBarPosition},class:"end-bar bg-primary"},null,4)):Object(r["e"])("",!0)],2)})),gt=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.barWidth=null,e}return Object(p["a"])(n,[{key:"mounted",value:function(){this.barWidth=this.$refs.progressBar.clientWidth}},{key:"setProgress",value:function(e){null!==this.barWidth&&this.player.setProgress(e.offsetX/this.barWidth)}},{key:"computeBarPosition",value:function(e){return null!==this.barWidth&&this.player.duration.value>0?"".concat(this.barWidth*e/this.player.duration.value,"px"):null}},{key:"endBarPosition",get:function(){return this.computeBarPosition(this.player.looper.endBarTime)}},{key:"looperOn",get:function(){return!this.player.looper.paused.value}},{key:"progress",get:function(){return"".concat(this.player.progress.value.toFixed(2),"%")}},{key:"startBarPosition",get:function(){return this.computeBarPosition(this.player.looper.startBarTime)}}]),n}(o["b"]);gt=Object(u["a"])([Object(o["a"])({props:{player:$e}})],gt);var kt=gt;n("c7aa");kt.render=yt,kt.__scopeId="data-v-17e27714";var Bt=kt,wt=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(i["a"])(this,n),t.apply(this,arguments)}return Object(p["a"])(n,[{key:"beforeMount",value:function(){this.player=new $e(this.music)}},{key:"unmounted",value:function(){this.player.destroy()}},{key:"loading",get:function(){return this.player.loading.value}}]),n}(o["b"]);wt=Object(u["a"])([Object(o["a"])({components:{PlayerButtons:Ye,PlayerInfo:rt,PlayerOptions:jt,PlayerProgressBar:Bt},props:{music:I}})],wt);var xt=wt;n("ab8b");xt.render=Ge,xt.__scopeId="data-v-7b8ff6f0";var Pt=xt,Mt=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.music=Be.music,e}return n}(o["b"]);Mt=Object(u["a"])([Object(o["a"])({components:{PlayerContent:Pt}})],Mt);var Tt=Mt;Tt.render=qe;var Ct=Tt,It=[{path:"/",component:Re},{path:"/player",component:Ct},{path:"/:catchAll(.*)*",redirect:"/"}],St=Object(K["a"])({history:Object(K["b"])("/boucleur/"),routes:It}),Rt=St;Object(r["c"])(Y).use(Rt).mount("#app")},d044:function(e,t,n){},e90f:function(e,t,n){},f34e:function(e,t,n){}});