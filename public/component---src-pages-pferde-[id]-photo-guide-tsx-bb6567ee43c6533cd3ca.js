"use strict";(self.webpackChunkequilandoo_app=self.webpackChunkequilandoo_app||[]).push([[262],{6126:function(e,t,n){var r,i=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},a=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var c,u,d=l(n(7294)),m=n(3431),h=n(9890),f=m.keyframes(c||(c=i(["\n  50% {transform: scale(0.75);opacity: 0.2}\n  100% {transform: scale(1);opacity: 1}\n"],["\n  50% {transform: scale(0.75);opacity: 0.2}\n  100% {transform: scale(1);opacity: 1}\n"]))),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.style=function(e){var n=t.props,r=n.color,a=n.size,o=n.margin,s=n.speedMultiplier;return m.css(u||(u=i(["\n      display: inline-block;\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: 100%;\n      animation: "," ","s ","\n        infinite linear;\n      animation-fill-mode: both;\n    "],["\n      display: inline-block;\n      background-color: ",";\n      width: ",";\n      height: ",";\n      margin: ",";\n      border-radius: 100%;\n      animation: "," ","s ","\n        infinite linear;\n      animation-fill-mode: both;\n    "])),r,h.cssValue(a),h.cssValue(a),h.cssValue(o),f,.7/s,e%2?"0s":.35/s+"s")},t}return a(t,e),t.prototype.render=function(){var e=this.props,t=e.loading,n=e.css;return t?m.jsx("span",{css:[n]},m.jsx("span",{css:this.style(1)}),m.jsx("span",{css:this.style(2)}),m.jsx("span",{css:this.style(3)})):null},t.defaultProps=h.sizeMarginDefaults(15),t}(d.PureComponent);t.default=p},1007:function(e,t){var n;Object.defineProperty(t,"__esModule",{value:!0}),t.calculateRgba=void 0,function(e){e.maroon="#800000",e.red="#FF0000",e.orange="#FFA500",e.yellow="#FFFF00",e.olive="#808000",e.green="#008000",e.purple="#800080",e.fuchsia="#FF00FF",e.lime="#00FF00",e.teal="#008080",e.aqua="#00FFFF",e.blue="#0000FF",e.navy="#000080",e.black="#000000",e.gray="#808080",e.silver="#C0C0C0",e.white="#FFFFFF"}(n||(n={}));t.calculateRgba=function(e,t){if(Object.keys(n).includes(e)&&(e=n[e]),"#"===e[0]&&(e=e.slice(1)),3===e.length){var r="";e.split("").forEach((function(e){r+=e,r+=e})),e=r}return"rgba("+(e.match(/.{2}/g)||[]).map((function(e){return parseInt(e,16)})).join(", ")+", "+t+")"}},9890:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),i(n(313),t),i(n(1007),t),i(n(384),t)},313:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.heightWidthRadiusDefaults=t.heightWidthDefaults=t.sizeMarginDefaults=t.sizeDefaults=void 0;var n={loading:!0,color:"#000000",css:"",speedMultiplier:1};function r(e){return Object.assign({},n,{size:e})}function i(e,t){return Object.assign({},n,{height:e,width:t})}t.sizeDefaults=r,t.sizeMarginDefaults=function(e){return Object.assign({},r(e),{margin:2})},t.heightWidthDefaults=i,t.heightWidthRadiusDefaults=function(e,t,n){return void 0===n&&(n=2),Object.assign({},i(e,t),{radius:n,margin:2})}},384:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var i=(e.match(/[^0-9]*$/)||"").toString();return n[i]?{value:t,unit:i}:(console.warn("React Spinners: "+e+" is not a valid css value. Defaulting to "+t+"px."),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return""+t.value+t.unit}},8670:function(e,t,n){n.d(t,{T:function(){return s}});var r=n(6126),i=n.n(r),a=n(4297),o=n(7294),s=function(){return o.createElement("div",{style:{margin:"auto auto"}},o.createElement(i(),{color:a.Z.primary[170],loading:!0,size:30}))}},1716:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var r=n(7294),i=n(5131),a=n(3223),o=n(5977),s=n(3310),l=n(2830),c=n(1082),u=function(e){var t=e.fill,n=e.stroke,i=e.strokeLinecap,a=e.strokeLinejoin,o=e.strokeWidth,s=e.height,l={fill:t||"none",stroke:n||"#000",strokeLinecap:i||"round",strokeLinejoin:a||"round",strokeWidth:o||"1px",width:e.width||24,height:s||24};return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),r.createElement("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),r.createElement("circle",{cx:"12",cy:"13",r:"4"}))},d=function(e){var t=e.fill,n=e.stroke,i=e.strokeLinecap,a=e.strokeLinejoin,o=e.strokeWidth,s=e.height,l={fill:t||"none",stroke:n||"#000",strokeLinecap:i||"round",strokeLinejoin:a||"round",strokeWidth:o||"1px",width:e.width||24,height:s||24};return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("line",{x1:"22",y1:"12",x2:"18",y2:"12"}),r.createElement("line",{x1:"6",y1:"12",x2:"2",y2:"12"}),r.createElement("line",{x1:"12",y1:"6",x2:"12",y2:"2"}),r.createElement("line",{x1:"12",y1:"22",x2:"12",y2:"18"}))},m=function(e){var t=e.fill,n=e.stroke,i=e.strokeLinecap,a=e.strokeLinejoin,o=e.strokeWidth,s=e.height,l={fill:t||"none",stroke:n||"#000",strokeLinecap:i||"round",strokeLinejoin:a||"round",strokeWidth:o||"1px",width:e.width||24,height:s||24};return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},l),r.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),r.createElement("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"}))},h=n(4297),f=n(102),p=n(9161),g=n(3175),v=n(9692).default.div.withConfig({displayName:"ImageExtended__Modal",componentId:"sc-pmhlz6-0"})(["position:fixed;top:0;left:0;height:100vh;width:100vw;justify-content:center;align-items:center;display:",";z-index:4;.large-image{position:absolute;display:",";width:90%;height:auto;z-index:4;}.blur{position:absolute;width:100vw;height:100vh;background-color:hsla(0,0%,0%,80%);}"],(function(e){return e.open?"flex":"none"}),(function(e){return e.open?"flex":"none"}));function y(e){var t=e.src,n=e.alt,i=e.onShortClick,a=(0,r.useState)(!1),o=a[0],s=a[1],l=(0,r.useRef)(),c=(0,r.useRef)(),u=(0,r.useState)(!1),d=u[0],m=u[1],h=(0,r.useState)(!1),f=h[0],p=h[1],g=(0,r.useState)(!1),y=g[0],w=g[1];function E(e){e.preventDefault(),p(!0)}function k(e){i(),d||(e.preventDefault(),m(!0),window.setTimeout((function(){w(!0)}),700))}function x(e){var t;if(null===(t=c.current)||void 0===t||!t.contains(e.target)){if(s(!1),!o)return;p(!1),m(!1),w(!1)}}return(0,r.useEffect)((function(){return l.current.addEventListener("touchstart",k),l.current.addEventListener("touchend",E),window.addEventListener("touchstart",x),function(){try{l.current.removeEventListener("touchstart",k),l.current.removeEventListener("touchend",E),window.removeEventListener("touchstart",x)}catch(e){}}})),(0,r.useEffect)((function(){d&&(f?(p(!1),m(!1),w(!1)):s(!0))}),[y]),r.createElement(r.Fragment,null,r.createElement("img",{src:t,alt:n,ref:l}),r.createElement(v,{open:o},r.createElement("img",{src:t,alt:n,className:"large-image",ref:c}),r.createElement("div",{className:"blur"})))}function w(e){var t,n,i,v,w=e.pos,E=e.target,k=e.images,x=e.cms,b=e.completed,_=e.reset,I=e.patchSelectedHorse,j=e.horse,O=e.saveImage,F=(0,r.useState)({selectedImageIndex:void 0}),S=F[0],L=F[1];return r.createElement(o.N,null,r.createElement("section",{className:"thumbnails"},r.createElement("div",{className:"icon"},r.createElement(d,{height:32,width:32,stroke:h.Z.red.primary})),r.createElement("div",{className:"content"},r.createElement("p",{className:"hint"},x.Hinweis[(0,s.rr)(w)]),r.createElement(g.C,{image:0===w?"":null===(t=x.Thumbnails[(0,s.rr)(w)])||void 0===t||null===(n=t.localFile.childImageSharp)||void 0===n?void 0:n.gatsbyImageData}),r.createElement(g.C,{image:null===(i=x.Thumbnails[(0,s.iH)(E)])||void 0===i||null===(v=i.localFile.childImageSharp)||void 0===v?void 0:v.gatsbyImageData,width:64,height:64}))),r.createElement("section",{className:"instructions"},r.createElement("div",{className:"icon"},r.createElement(m,{height:32,width:32,stroke:h.Z.yellow.primary})),r.createElement("div",{className:"content"},r.createElement("p",null,x.Photo_Guide_Texte.Starte_Aufnahme))),r.createElement("section",{className:"image-preview"},r.createElement("div",{className:"icon"},r.createElement(u,{height:32,width:32,stroke:h.Z.green.primary})),r.createElement("div",{className:"content"},(null==k?void 0:k.length)>=1?r.createElement(r.Fragment,null,r.createElement(f.Z,{images:k.map((function(e,t){return r.createElement(y,{className:"ie",src:null==k?void 0:k[t],alt:"Aufgenommenes Bild",onShortClick:function(){(0,p._9)({setState:L,newState:t+1,property:"selectedImageIndex"})}})})),options:[1,2,3],value:S.selectedImageIndex,onChange:function(e){(0,p._9)({setState:L,newState:e,property:"selectedImageIndex"})}}),r.createElement(l.z,{style:{display:b?"none":"flex"},onClick:function(){return O(S.selectedImageIndex)},className:"primary"},x.Photo_Guide_Texte.Speichern)):r.createElement("div",{className:"placeholder"},r.createElement("p",null,x.Photo_Guide_Texte.Keine_Bilder),r.createElement(l.z,{className:"primary",onClick:function(){DeviceOrientationEvent&&"function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then((function(e){(0,c.navigate)(a.Z.camera(j.id)),console.log(e)})).catch((function(e){return console.err(e)})):(0,c.navigate)(a.Z.camera(j.id))}},x.Photo_Guide_Texte.Aufnahme_Starten)),r.createElement("div",{className:"button-row"},r.createElement("p",{className:"selection-confirmed",style:{display:b?"flex":"none"}},x.Photo_Guide_Texte.Auswahl_Bestaetigt),r.createElement("div",{className:"button-row-button"},r.createElement(l.z,{className:"secondary",onClick:_,style:{display:b?"flex":"none"}},x.Photo_Guide_Texte.Zuruecksetzen),r.createElement(l.z,{className:"primary",onClick:function(){if(E.startsWith("leg"))if(w<3)I(E,w+1),window.scrollTo(0,0);else{var e="vorne"===j.Hufschuhe_Fuer?1:3;console.log(e,parseInt(E[3])),parseInt(E[3])<e?(I("leg"+(parseInt(E[3])+1),1),window.scrollTo(0,0)):(0,c.navigate)(a.Z.detailView(j.id))}else(0,c.navigate)(a.Z.detailView(j.id))},style:{display:b?"flex":"none"}},"Weiter"))))))}var E=n(2256),k=n(1001),x=n(8670),b=n(3808),_=n(9241),I=function(e){var t,n,i,o=e.cms,s=e.horseId,l=(0,E.v9)((function(e){return e.auth.user})),u=(0,E.v9)((function(e){return e.appState})),d=(0,E.I0)(),m=u.selectedHorse,h=m.pos,f=m.target;void 0!==typeof h&&f||(0,c.navigate)(a.Z.detailView(s));var p=(0,k.Op)({userId:null==l?void 0:l.id,horseId:s},{refetchOnMountOrArgChange:!0,skip:!s||!(null!=l&&l.id)}),g=p.data,v=p.isLoading,y=p.isError,I=f&&void 0!==typeof h&&"torso"===f?null==g||null===(t=g.images)||void 0===t?void 0:t.torso:null==g||null===(n=g.images)||void 0===n||null===(i=n[f])||void 0===i?void 0:i[h],j=(0,k.IE)(),O=j[0],F=j[1],S=(0,k.a)(),L=S[0],N=S[1],C=(0,r.useState)(!1),P=C[0],z=C[1];return(0,r.useEffect)((function(){if(console.log("checking, ",N.isSuccess&&void 0!==typeof h&&f),N.isSuccess&&void 0!==typeof h&&f){var e,t,n,r,i=null==N?void 0:N.data.url;console.log("1"),z(!0),console.log("2","torso"===f?{images:{torso:i}}:{images:(t={},t[f]=(e={},e[h]=i,e),t)}),O({userId:null==l?void 0:l.id,horseId:s,data:"torso"===f?{images:{torso:i}}:{images:(r={},r[f]=(n={},n[h]=i,n),r)}}),console.log("3"),d((0,b.ve)({selectedHorse:{temporaryImages:[]}}))}}),[N]),(0,r.useEffect)((function(){F.isSuccess&&d((0,b.ve)({selectedHorse:{target:void 0,pos:void 0}}))}),[F]),v||N.isLoading||F.isLoading?r.createElement(x.T,null):y?r.createElement(_.Z,{severity:"error"},"Daten konnten nicht geladen werden."):F.isError?r.createElement(_.Z,{severity:"error"},"Das Bild konnte nicht zugeordnet werden."):N.isError?r.createElement(_.Z,{severity:"error"},"Das Bild konnte nicht gespeichert werden."):r.createElement(w,{pos:h,target:f,images:I?[I]:u.selectedHorse.temporaryImages,cms:o,completed:P,reset:void 0,patchSelectedHorse:function(e,t){return d((0,b.ve)({selectedHorse:{target:e,pos:t}}))},horse:g,saveImage:function(e){var t=u.selectedHorse.temporaryImages[e];L({userId:null==l?void 0:l.id,horseId:s,data:{image:t}})}})};function j(e){var t=e.data,n=e.location,o=e.id;return r.createElement(i.Z,{showNavigation:!0,title:"Foto aufnehmen",subtitleKey:"name",horseId:o,location:n,lastRoute:a.Z.detailView(o)},r.createElement(I,{cms:t.strapiKamera,horseId:o}))}},6513:function(e,t,n){n.d(t,{K:function(){return i}});var r=n(7294),i=function(e){var t=e.fill,n=e.stroke,i=e.strokeLinecap,a=e.strokeLinejoin,o=e.strokeWidth,s=e.height,l={fill:t||"none",stroke:n||"#000",strokeLinecap:i||"round",strokeLinejoin:a||"round",strokeWidth:o||"1px",width:e.width||24,height:s||24};return r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",style:l},r.createElement("polyline",{points:"9 11 12 14 22 4"}),r.createElement("path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}))}},4827:function(e,t,n){n.d(t,{M:function(){return c}});var r=n(6513),i=n(4297),a=n(7294),o=n(9692),s=n(3989),l=o.default.div.withConfig({displayName:"Checkmark__Styles",componentId:"sc-8z0cmn-0"})(["background-color:white;border-radius:",";height:24px;"],s.Z.small);function c(e){var t=e.completed;return a.createElement(l,null,a.createElement(r.K,{stroke:t?i.Z.lightGreen[80]:i.Z.greys[500],strokeWidth:t?"2px":"1px"}))}},3175:function(e,t,n){n.d(t,{C:function(){return c}});var r=n(7294),i=n(3723),a=n(9692),o=n(4827),s=(n(6513),n(4297),a.default.div.withConfig({displayName:"ImageWithSkeleton__Overlay",componentId:"sc-15uh7ef-0"})(["position:absolute;display:",";justify-content:center;align-items:center;height:64px;width:64px;z-index:2;background-color:hsla(0,0%,30%,70%);border-radius:10px;font-size:64px;color:lightgreen;"],(function(e){return e.completed?"flex":"none"}))),l=a.default.div.withConfig({displayName:"ImageWithSkeleton__ImageCheckmark",componentId:"sc-15uh7ef-1"})(["display:",";position:absolute;margin:-20px 0 0 48px;font-size:1.2rem;"],(function(e){return e.show?"flex":"none"}));function c(e){var t=e.image,n=e.height,a=e.width,c=e.className,u=e.showCheckmark,d=e.checked;return t?r.createElement(r.Fragment,null,r.createElement(s,{completed:d},"✓"),r.createElement(i.G,{image:t,className:c,alt:""}),r.createElement(l,{show:u},r.createElement(o.M,{completed:d}))):r.createElement("div",{style:{height:n,width:a}})}},3310:function(e,t,n){function r(e){switch(e){case"leg0":return"Bein_VR";case"leg1":return"Bein_VL";case"leg2":return"Bein_HR";case"leg3":return"Bein_HL";case"torso":return"Koerper"}}function i(e){switch(e){case"0":case 0:return"Koerper";case"1":case 1:return"Fessel";case"2":case 2:return"Hufbreite";case"3":case 3:return"Huflaenge"}}function a(e){switch(e){case"leg0":return"vorderen rechten";case"leg1":return"vorderen linken";case"leg2":return"hinteren rechten";case"leg3":return"hinteren linken"}}n.d(t,{ZQ:function(){return a},iH:function(){return r},rr:function(){return i}})}}]);
//# sourceMappingURL=component---src-pages-pferde-[id]-photo-guide-tsx-bb6567ee43c6533cd3ca.js.map