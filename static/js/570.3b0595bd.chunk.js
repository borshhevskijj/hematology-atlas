"use strict";(self.webpackChunkview=self.webpackChunkview||[]).push([[570],{2017:function(e,s,n){n.d(s,{Z:function(){return m}});var r=n(2791),t=n(794),a=n(6605),i=(n(4676),n(4432),n(5880),n(9439)),c="carousel_carousel__U2poP",l="carousel_loading__AJDn7",o="carousel_loaded__+j2xg",u=n(184),d=function(e){var s=e.image,n=e.cellName,t=(0,r.useState)(!1),a=(0,i.Z)(t,2),c=a[0],d=a[1];return(0,u.jsx)("img",{loading:"lazy",onLoad:function(){return d(!0)},className:c?o:l,src:s,alt:n})},p=function(e){var s=e.imagesArr,n=e.cellName;return(0,u.jsx)(t.tq,{modules:[a.W_,a.tl],navigation:!0,pagination:{type:"progressbar"},spaceBetween:20,slidesPerView:1,breakpoints:{450:{slidesPerView:2},800:{slidesPerView:3}},className:c,children:s&&Object.keys(s)&&s.map((function(e){return(0,u.jsx)(t.o5,{children:(0,u.jsx)(d,{image:e,cellName:n},e)},e)}))})},h="displayCells_cellDescription__0OPv0",m=function(e){var s=e.data;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("ul",{className:h,children:[(0,u.jsxs)("li",{children:["\u041c\u043e\u0440\u0444\u043e\u043b\u043e\u0433\u0438\u044f: ",s.morphology]}),(0,u.jsxs)("li",{children:["\u0424\u0443\u043d\u043a\u0446\u0438\u0438: ",s.functions]}),(0,u.jsxs)("li",{children:["\u041c\u0430\u0440\u043a\u0435\u0440\u044b: ",s.markers]}),(0,u.jsxs)("li",{children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",s.quantity]}),(0,u.jsxs)("li",{children:["\u0411\u043e\u043b\u0435\u0437\u043d\u0438: ",s.diseases]}),(0,u.jsx)("li",{children:(0,u.jsx)(p,{imagesArr:s.img,cellName:s.name})})]},s.id)})}},844:function(e,s,n){n.r(s),n.d(s,{default:function(){return f}});n(2791);var r="pageNotFound_wrapper__RbPRq",t="pageNotFound_content__VUUWf",a="pageNotFound_left__07Hm4",i="pageNotFound_right__i4SSL",c="pageNotFound_children__-Lxgy",l=n(3304),o=n(7689),u=n(1413),d=n(4925),p="button_btn__lSKBM",h=n(184),m=["children"],x=function(e){var s=e.children,n=(0,d.Z)(e,m);return(0,h.jsx)("button",(0,u.Z)((0,u.Z)({className:p},n),{},{children:s}))},f=function(e){var s=e.errorMessage,n=e.responseStatus,u=(0,o.s0)(),d=n.toString().split("");return(0,h.jsxs)("div",{className:r,children:[(0,h.jsxs)("div",{className:t,children:[(0,h.jsx)("span",{className:a,children:d[0]}),(0,h.jsx)("span",{children:(0,h.jsx)("img",{src:l,alt:"error"})}),(0,h.jsx)("span",{className:i,children:d[2]})]}),(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("span",{children:s}),(0,h.jsxs)("span",{children:[" \u043e\u0448\u0438\u0431\u043a\u0430: ",n]})]}),(0,h.jsx)(x,{children:"\u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",onClick:function(){return u("/")}})]})}},5334:function(e,s,n){n.r(s),n.d(s,{default:function(){return h}});var r=n(4165),t=n(5861),a=n(9439),i=n(2791),c=n(2017),l=n(7689),o="searchPage_searchPage__6M3zB",u=n(844),d=n(4745),p=n(184),h=function(){var e=(0,l.UO)().name,s=(0,i.useState)(),n=(0,a.Z)(s,2),h=n[0],m=n[1],x=(0,i.useState)(null),f=(0,a.Z)(x,2),g=f[0],j=f[1],_=(0,i.useState)(!1),v=(0,a.Z)(_,2),N=v[0],b=v[1],k=function(){var s=(0,t.Z)((0,r.Z)().mark((function s(){var n,t,a;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(e){s.next=2;break}return s.abrupt("return");case 2:return s.prev=2,n=setTimeout((function(){b(!0)}),350),s.next=6,fetch("http://localhost:5000/search/".concat(e));case 6:if(!(t=s.sent).ok){s.next=15;break}return s.next=10,t.json();case 10:a=s.sent,m(a),j(null),b(!1),clearTimeout(n);case 15:t.ok||(m(void 0),b(!1),clearTimeout(n),j({responseStatus:t.status,errorMessage:"\u0422\u0430\u043a\u043e\u0439 \u043a\u043b\u0435\u0442\u043a\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"})),s.next=23;break;case 18:s.prev=18,s.t0=s.catch(2),j({responseStatus:500,errorMessage:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430!"}),m(void 0),b(!1);case 23:case"end":return s.stop()}}),s,null,[[2,18]])})));return function(){return s.apply(this,arguments)}}();return(0,i.useEffect)((function(){k(),e&&sessionStorage.setItem("CellName",e)}),[e]),N?(0,p.jsx)(d.Z,{}):g?(0,p.jsx)(u.default,{errorMessage:g.errorMessage,responseStatus:g.responseStatus}):(0,p.jsx)("section",{className:"".concat(o," container"),children:h&&Object.keys(h).length&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:h.name}),(0,p.jsx)(c.Z,{data:h})]})})}},3304:function(e,s,n){e.exports=n.p+"static/media/descriptionImg1.8624433d525d248a2cb0.png"}}]);
//# sourceMappingURL=570.3b0595bd.chunk.js.map