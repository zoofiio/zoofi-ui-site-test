"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8410],{2075:function(f,m,h){function t(f){return f.split("-")[1]}function e(f){return"y"===f?"height":"width"}function n(f){return f.split("-")[0]}function o(f){return["top","bottom"].includes(n(f))?"x":"y"}function i(f,m,h){let p,{reference:M,floating:V}=f,N=M.x+M.width/2-V.width/2,_=M.y+M.height/2-V.height/2,I=o(m),J=e(I),Y=M[J]/2-V[J]/2,q="x"===I;switch(n(m)){case"top":p={x:N,y:M.y-V.height};break;case"bottom":p={x:N,y:M.y+M.height};break;case"right":p={x:M.x+M.width,y:_};break;case"left":p={x:M.x-V.width,y:_};break;default:p={x:M.x,y:M.y}}switch(t(m)){case"start":p[I]-=Y*(h&&q?-1:1);break;case"end":p[I]+=Y*(h&&q?-1:1)}return p}h.d(m,{Cp:function(){return E},JB:function(){return s},RR:function(){return A},cv:function(){return L},dp:function(){return C},dr:function(){return B},oo:function(){return r},uY:function(){return O},x7:function(){return g}});let r=async(f,m,h)=>{let{placement:p="bottom",strategy:M="absolute",middleware:V=[],platform:N}=h,_=V.filter(Boolean),I=await (null==N.isRTL?void 0:N.isRTL(m)),J=await N.getElementRects({reference:f,floating:m,strategy:M}),{x:Y,y:q}=i(J,p,I),X=p,$={},j=0;for(let h=0;h<_.length;h++){let{name:V,fn:K}=_[h],{x:G,y:Q,data:U,reset:Z}=await K({x:Y,y:q,initialPlacement:p,placement:X,strategy:M,middlewareData:$,rects:J,platform:N,elements:{reference:f,floating:m}});Y=null!=G?G:Y,q=null!=Q?Q:q,$={...$,[V]:{...$[V],...U}},Z&&j<=50&&(j++,"object"==typeof Z&&(Z.placement&&(X=Z.placement),Z.rects&&(J=!0===Z.rects?await N.getElementRects({reference:f,floating:m,strategy:M}):Z.rects),{x:Y,y:q}=i(J,X,I)),h=-1)}return{x:Y,y:q,placement:X,strategy:M,middlewareData:$}};function a(f,m){return"function"==typeof f?f(m):f}function l(f){return"number"!=typeof f?{top:0,right:0,bottom:0,left:0,...f}:{top:f,right:f,bottom:f,left:f}}function s(f){return{...f,top:f.y,left:f.x,right:f.x+f.width,bottom:f.y+f.height}}async function c(f,m){var h;void 0===m&&(m={});let{x:p,y:M,platform:V,rects:N,elements:_,strategy:I}=f,{boundary:J="clippingAncestors",rootBoundary:Y="viewport",elementContext:q="floating",altBoundary:X=!1,padding:$=0}=a(m,f),j=l($),K=_[X?"floating"===q?"reference":"floating":q],G=s(await V.getClippingRect({element:null==(h=await (null==V.isElement?void 0:V.isElement(K)))||h?K:K.contextElement||await (null==V.getDocumentElement?void 0:V.getDocumentElement(_.floating)),boundary:J,rootBoundary:Y,strategy:I})),Q="floating"===q?{...N.floating,x:p,y:M}:N.reference,U=await (null==V.getOffsetParent?void 0:V.getOffsetParent(_.floating)),Z=await (null==V.isElement?void 0:V.isElement(U))&&await (null==V.getScale?void 0:V.getScale(U))||{x:1,y:1},tt=s(V.convertOffsetParentRelativeRectToViewportRelativeRect?await V.convertOffsetParentRelativeRectToViewportRelativeRect({rect:Q,offsetParent:U,strategy:I}):Q);return{top:(G.top-tt.top+j.top)/Z.y,bottom:(tt.bottom-G.bottom+j.bottom)/Z.y,left:(G.left-tt.left+j.left)/Z.x,right:(tt.right-G.right+j.right)/Z.x}}let p=Math.min,M=Math.max,g=f=>({name:"arrow",options:f,async fn(m){let{x:h,y:V,placement:N,rects:_,platform:I,elements:J}=m,{element:Y,padding:q=0}=a(f,m)||{};if(null==Y)return{};let X=l(q),$={x:h,y:V},j=o(N),K=e(j),G=await I.getDimensions(Y),Q="y"===j,U=Q?"clientHeight":"clientWidth",Z=_.reference[K]+_.reference[j]-$[j]-_.floating[K],tt=$[j]-_.reference[j],te=await (null==I.getOffsetParent?void 0:I.getOffsetParent(Y)),tn=te?te[U]:0;tn&&await (null==I.isElement?void 0:I.isElement(te))||(tn=J.floating[U]||_.floating[K]);let ti=tn/2-G[K]/2-1,to=p(X[Q?"top":"left"],ti),tr=p(X[Q?"bottom":"right"],ti),tl=tn-G[K]-tr,ta=tn/2-G[K]/2+(Z/2-tt/2),tc=M(to,p(ta,tl)),tf=null!=t(N)&&ta!=tc&&_.reference[K]/2-(ta<to?to:tr)-G[K]/2<0?ta<to?to-ta:tl-ta:0;return{[j]:$[j]-tf,data:{[j]:tc,centerOffset:ta-tc+tf}}}}),V=["top","right","bottom","left"],N=(V.reduce((f,m)=>f.concat(m,m+"-start",m+"-end"),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function y(f){return f.replace(/left|right|bottom|top/g,f=>N[f])}let _={start:"end",end:"start"};function v(f){return f.replace(/start|end/g,f=>_[f])}let A=function(f){return void 0===f&&(f={}),{name:"flip",options:f,async fn(m){var h,p,M,V;let{placement:N,middlewareData:_,rects:I,initialPlacement:J,platform:Y,elements:q}=m,{mainAxis:X=!0,crossAxis:$=!0,fallbackPlacements:j,fallbackStrategy:K="bestFit",fallbackAxisSideDirection:G="none",flipAlignment:Q=!0,...U}=a(f,m),Z=n(N),tt=n(J)===J,te=await (null==Y.isRTL?void 0:Y.isRTL(q.floating)),tn=j||(tt||!Q?[y(J)]:function(f){let m=y(f);return[v(f),m,v(m)]}(J));j||"none"===G||tn.push(...function(f,m,h,p){let M=t(f),V=function(f,m,h){let p=["left","right"],M=["right","left"];switch(f){case"top":case"bottom":return h?m?M:p:m?p:M;case"left":case"right":return m?["top","bottom"]:["bottom","top"];default:return[]}}(n(f),"start"===h,p);return M&&(V=V.map(f=>f+"-"+M),m&&(V=V.concat(V.map(v)))),V}(J,Q,G,te));let ti=[J,...tn],to=await c(m,U),tr=[],tl=(null==(h=_.flip)?void 0:h.overflows)||[];if(X&&tr.push(to[Z]),$){let{main:f,cross:m}=function(f,m,h){void 0===h&&(h=!1);let p=t(f),M=o(f),V=e(M),N="x"===M?p===(h?"end":"start")?"right":"left":"start"===p?"bottom":"top";return m.reference[V]>m.floating[V]&&(N=y(N)),{main:N,cross:y(N)}}(N,I,te);tr.push(to[f],to[m])}if(tl=[...tl,{placement:N,overflows:tr}],!tr.every(f=>f<=0)){let f=((null==(p=_.flip)?void 0:p.index)||0)+1,m=ti[f];if(m)return{data:{index:f,overflows:tl},reset:{placement:m}};let h=null==(M=tl.filter(f=>f.overflows[0]<=0).sort((f,m)=>f.overflows[1]-m.overflows[1])[0])?void 0:M.placement;if(!h)switch(K){case"bestFit":{let f=null==(V=tl.map(f=>[f.placement,f.overflows.filter(f=>f>0).reduce((f,m)=>f+m,0)]).sort((f,m)=>f[1]-m[1])[0])?void 0:V[0];f&&(h=f);break}case"initialPlacement":h=J}if(N!==h)return{reset:{placement:h}}}return{}}}};function R(f,m){return{top:f.top-m.height,right:f.right-m.width,bottom:f.bottom-m.height,left:f.left-m.width}}function P(f){return V.some(m=>f[m]>=0)}let E=function(f){return void 0===f&&(f={}),{name:"hide",options:f,async fn(m){let{rects:h}=m,{strategy:p="referenceHidden",...M}=a(f,m);switch(p){case"referenceHidden":{let f=R(await c(m,{...M,elementContext:"reference"}),h.reference);return{data:{referenceHiddenOffsets:f,referenceHidden:P(f)}}}case"escaped":{let f=R(await c(m,{...M,altBoundary:!0}),h.floating);return{data:{escapedOffsets:f,escaped:P(f)}}}default:return{}}}}},L=function(f){return void 0===f&&(f=0),{name:"offset",options:f,async fn(m){let{x:h,y:p}=m,M=await async function(f,m){let{placement:h,platform:p,elements:M}=f,V=await (null==p.isRTL?void 0:p.isRTL(M.floating)),N=n(h),_=t(h),I="x"===o(h),J=["left","top"].includes(N)?-1:1,Y=V&&I?-1:1,q=a(m,f),{mainAxis:X,crossAxis:$,alignmentAxis:j}="number"==typeof q?{mainAxis:q,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...q};return _&&"number"==typeof j&&($="end"===_?-1*j:j),I?{x:$*Y,y:X*J}:{x:X*J,y:$*Y}}(m,f);return{x:h+M.x,y:p+M.y,data:M}}}};function k(f){return"x"===f?"y":"x"}let O=function(f){return void 0===f&&(f={}),{name:"shift",options:f,async fn(m){let{x:h,y:V,placement:N}=m,{mainAxis:_=!0,crossAxis:I=!1,limiter:J={fn:f=>{let{x:m,y:h}=f;return{x:m,y:h}}},...Y}=a(f,m),q={x:h,y:V},X=await c(m,Y),$=o(n(N)),j=k($),K=q[$],G=q[j];if(_){let f="y"===$?"bottom":"right";K=M(K+X["y"===$?"top":"left"],p(K,K-X[f]))}I&&(G=M(G+X["y"===j?"top":"left"],p(G,G-X["y"===j?"bottom":"right"])));let Q=J.fn({...m,[$]:K,[j]:G});return{...Q,data:{x:Q.x-h,y:Q.y-V}}}}},B=function(f){return void 0===f&&(f={}),{options:f,fn(m){let{x:h,y:p,placement:M,rects:V,middlewareData:N}=m,{offset:_=0,mainAxis:I=!0,crossAxis:J=!0}=a(f,m),Y={x:h,y:p},q=o(M),X=k(q),$=Y[q],j=Y[X],K=a(_,m),G="number"==typeof K?{mainAxis:K,crossAxis:0}:{mainAxis:0,crossAxis:0,...K};if(I){let f="y"===q?"height":"width",m=V.reference[q]-V.floating[f]+G.mainAxis,h=V.reference[q]+V.reference[f]-G.mainAxis;$<m?$=m:$>h&&($=h)}if(J){var Q,U;let f="y"===q?"width":"height",m=["top","left"].includes(n(M)),h=V.reference[X]-V.floating[f]+(m&&(null==(Q=N.offset)?void 0:Q[X])||0)+(m?0:G.crossAxis),p=V.reference[X]+V.reference[f]+(m?0:(null==(U=N.offset)?void 0:U[X])||0)-(m?G.crossAxis:0);j<h?j=h:j>p&&(j=p)}return{[q]:$,[X]:j}}}},C=function(f){return void 0===f&&(f={}),{name:"size",options:f,async fn(m){let h,V;let{placement:N,rects:_,platform:I,elements:J}=m,{apply:Y=()=>{},...q}=a(f,m),X=await c(m,q),$=n(N),j=t(N),K="x"===o(N),{width:G,height:Q}=_.floating;"top"===$||"bottom"===$?(h=$,V=j===(await (null==I.isRTL?void 0:I.isRTL(J.floating))?"start":"end")?"left":"right"):(V=$,h="end"===j?"top":"bottom");let U=Q-X[h],Z=G-X[V],tt=!m.middlewareData.shift,te=U,tn=Z;if(K){let f=G-X.left-X.right;tn=j||tt?p(Z,f):f}else{let f=Q-X.top-X.bottom;te=j||tt?p(U,f):f}if(tt&&!j){let f=M(X.left,0),m=M(X.right,0),h=M(X.top,0),p=M(X.bottom,0);K?tn=G-2*(0!==f||0!==m?f+m:M(X.left,X.right)):te=Q-2*(0!==h||0!==p?h+p:M(X.top,X.bottom))}await Y({...m,availableWidth:tn,availableHeight:te});let ti=await I.getDimensions(J.floating);return G!==ti.width||Q!==ti.height?{reset:{rects:!0}}:{}}}}},48410:function(f,m,h){h.d(m,{Kx:function(){return D},Me:function(){return A},oo:function(){return B}});var p=h(2075);function n(f){var m;return(null==f||null==(m=f.ownerDocument)?void 0:m.defaultView)||window}function o(f){return n(f).getComputedStyle(f)}function i(f){return f instanceof n(f).Node}function r(f){return i(f)?(f.nodeName||"").toLowerCase():"#document"}function c(f){return f instanceof HTMLElement||f instanceof n(f).HTMLElement}function l(f){return"undefined"!=typeof ShadowRoot&&(f instanceof n(f).ShadowRoot||f instanceof ShadowRoot)}function s(f){let{overflow:m,overflowX:h,overflowY:p,display:M}=o(f);return/auto|scroll|overlay|hidden|clip/.test(m+p+h)&&!["inline","contents"].includes(M)}function u(f){let m=a(),h=o(f);return"none"!==h.transform||"none"!==h.perspective||!!h.containerType&&"normal"!==h.containerType||!m&&!!h.backdropFilter&&"none"!==h.backdropFilter||!m&&!!h.filter&&"none"!==h.filter||["transform","perspective","filter"].some(f=>(h.willChange||"").includes(f))||["paint","layout","strict","content"].some(f=>(h.contain||"").includes(f))}function a(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function d(f){return["html","body","#document"].includes(r(f))}let M=Math.min,V=Math.max,N=Math.round,_=Math.floor,y=f=>({x:f,y:f});function w(f){let m=o(f),h=parseFloat(m.width)||0,p=parseFloat(m.height)||0,M=c(f),V=M?f.offsetWidth:h,_=M?f.offsetHeight:p,I=N(h)!==V||N(p)!==_;return I&&(h=V,p=_),{width:h,height:p,$:I}}function x(f){return f instanceof Element||f instanceof n(f).Element}function v(f){return x(f)?f:f.contextElement}function b(f){let m=v(f);if(!c(m))return y(1);let h=m.getBoundingClientRect(),{width:p,height:M,$:V}=w(m),_=(V?N(h.width):h.width)/p,I=(V?N(h.height):h.height)/M;return _&&Number.isFinite(_)||(_=1),I&&Number.isFinite(I)||(I=1),{x:_,y:I}}let I=y(0);function T(f){let m=n(f);return a()&&m.visualViewport?{x:m.visualViewport.offsetLeft,y:m.visualViewport.offsetTop}:I}function R(f,m,h,M){var V;void 0===m&&(m=!1),void 0===h&&(h=!1);let N=f.getBoundingClientRect(),_=v(f),I=y(1);m&&(M?x(M)&&(I=b(M)):I=b(f));let J=(void 0===(V=h)&&(V=!1),!(!M||V&&M!==n(_))&&V)?T(_):y(0),Y=(N.left+J.x)/I.x,q=(N.top+J.y)/I.y,X=N.width/I.x,$=N.height/I.y;if(_){let f=n(_),m=M&&x(M)?n(M):M,h=f.frameElement;for(;h&&M&&m!==f;){let f=b(h),m=h.getBoundingClientRect(),p=getComputedStyle(h),M=m.left+(h.clientLeft+parseFloat(p.paddingLeft))*f.x,V=m.top+(h.clientTop+parseFloat(p.paddingTop))*f.y;Y*=f.x,q*=f.y,X*=f.x,$*=f.y,Y+=M,q+=V,h=n(h).frameElement}}return(0,p.JB)({width:X,height:$,x:Y,y:q})}function E(f){return x(f)?{scrollLeft:f.scrollLeft,scrollTop:f.scrollTop}:{scrollLeft:f.pageXOffset,scrollTop:f.pageYOffset}}function S(f){var m;return null==(m=(i(f)?f.ownerDocument:f.document)||window.document)?void 0:m.documentElement}function C(f){return R(S(f)).left+E(f).scrollLeft}function F(f){if("html"===r(f))return f;let m=f.assignedSlot||f.parentNode||l(f)&&f.host||S(f);return l(m)?m.host:m}function D(f,m){var h;void 0===m&&(m=[]);let p=function O(f){let m=F(f);return d(m)?f.ownerDocument?f.ownerDocument.body:f.body:c(m)&&s(m)?m:O(m)}(f),M=p===(null==(h=f.ownerDocument)?void 0:h.body),V=n(p);return M?m.concat(V,V.visualViewport||[],s(p)?p:[]):m.concat(p,D(p))}function H(f,m,h){let M;if("viewport"===m)M=function(f,m){let h=n(f),p=S(f),M=h.visualViewport,V=p.clientWidth,N=p.clientHeight,_=0,I=0;if(M){V=M.width,N=M.height;let f=a();(!f||f&&"fixed"===m)&&(_=M.offsetLeft,I=M.offsetTop)}return{width:V,height:N,x:_,y:I}}(f,h);else if("document"===m)M=function(f){let m=S(f),h=E(f),p=f.ownerDocument.body,M=V(m.scrollWidth,m.clientWidth,p.scrollWidth,p.clientWidth),N=V(m.scrollHeight,m.clientHeight,p.scrollHeight,p.clientHeight),_=-h.scrollLeft+C(f),I=-h.scrollTop;return"rtl"===o(p).direction&&(_+=V(m.clientWidth,p.clientWidth)-M),{width:M,height:N,x:_,y:I}}(S(f));else if(x(m))M=function(f,m){let h=R(f,!0,"fixed"===m),p=h.top+f.clientTop,M=h.left+f.clientLeft,V=c(f)?b(f):y(1);return{width:f.clientWidth*V.x,height:f.clientHeight*V.y,x:M*V.x,y:p*V.y}}(m,h);else{let h=T(f);M={...m,x:m.x-h.x,y:m.y-h.y}}return(0,p.JB)(M)}function z(f,m){return c(f)&&"fixed"!==o(f).position?m?m(f):f.offsetParent:null}function P(f,m){let h=n(f);if(!c(f))return h;let p=z(f,m);for(;p&&["table","td","th"].includes(r(p))&&"static"===o(p).position;)p=z(p,m);return p&&("html"===r(p)||"body"===r(p)&&"static"===o(p).position&&!u(p))?h:p||function(f){let m=F(f);for(;c(m)&&!d(m);){if(u(m))return m;m=F(m)}return null}(f)||h}let J={convertOffsetParentRelativeRectToViewportRelativeRect:function(f){let{rect:m,offsetParent:h,strategy:p}=f,M=c(h),V=S(h);if(h===V)return m;let N={scrollLeft:0,scrollTop:0},_=y(1),I=y(0);if((M||!M&&"fixed"!==p)&&(("body"!==r(h)||s(V))&&(N=E(h)),c(h))){let f=R(h);_=b(h),I.x=f.x+h.clientLeft,I.y=f.y+h.clientTop}return{width:m.width*_.x,height:m.height*_.y,x:m.x*_.x-N.scrollLeft*_.x+I.x,y:m.y*_.y-N.scrollTop*_.y+I.y}},getDocumentElement:S,getClippingRect:function(f){let{element:m,boundary:h,rootBoundary:p,strategy:N}=f,_=[..."clippingAncestors"===h?function(f,m){let h=m.get(f);if(h)return h;let p=D(f).filter(f=>x(f)&&"body"!==r(f)),M=null,V="fixed"===o(f).position,N=V?F(f):f;for(;x(N)&&!d(N);){let m=o(N),h=u(N);h||"fixed"!==m.position||(M=null),(V?!h&&!M:!h&&"static"===m.position&&M&&["absolute","fixed"].includes(M.position)||s(N)&&!h&&function W(f,m){let h=F(f);return!(h===m||!x(h)||d(h))&&("fixed"===o(h).position||W(h,m))}(f,N))?p=p.filter(f=>f!==N):M=m,N=F(N)}return m.set(f,p),p}(m,this._c):[].concat(h),p],I=_[0],J=_.reduce((f,h)=>{let p=H(m,h,N);return f.top=V(p.top,f.top),f.right=M(p.right,f.right),f.bottom=M(p.bottom,f.bottom),f.left=V(p.left,f.left),f},H(m,I,N));return{width:J.right-J.left,height:J.bottom-J.top,x:J.left,y:J.top}},getOffsetParent:P,getElementRects:async function(f){let{reference:m,floating:h,strategy:p}=f,M=this.getOffsetParent||P,V=this.getDimensions;return{reference:function(f,m,h){let p=c(m),M=S(m),V="fixed"===h,N=R(f,!0,V,m),_={scrollLeft:0,scrollTop:0},I=y(0);if(p||!p&&!V){if(("body"!==r(m)||s(M))&&(_=E(m)),c(m)){let f=R(m,!0,V,m);I.x=f.x+m.clientLeft,I.y=f.y+m.clientTop}else M&&(I.x=C(M))}return{x:N.left+_.scrollLeft-I.x,y:N.top+_.scrollTop-I.y,width:N.width,height:N.height}}(m,await M(h),p),floating:{x:0,y:0,...await V(h)}}},getClientRects:function(f){return Array.from(f.getClientRects())},getDimensions:function(f){return w(f)},getScale:b,isElement:x,isRTL:function(f){return"rtl"===getComputedStyle(f).direction}};function A(f,m,h,p){void 0===p&&(p={});let{ancestorScroll:N=!0,ancestorResize:I=!0,elementResize:J="function"==typeof ResizeObserver,layoutShift:Y="function"==typeof IntersectionObserver,animationFrame:q=!1}=p,X=v(f),$=N||I?[...X?D(X):[],...D(m)]:[];$.forEach(f=>{N&&f.addEventListener("scroll",h,{passive:!0}),I&&f.addEventListener("resize",h)});let j=X&&Y?function(f,m){let h,p=null,N=S(f);function r(){clearTimeout(h),p&&p.disconnect(),p=null}return function c(I,J){void 0===I&&(I=!1),void 0===J&&(J=1),r();let{left:Y,top:q,width:X,height:$}=f.getBoundingClientRect();if(I||m(),!X||!$)return;let j={rootMargin:-_(q)+"px "+-_(N.clientWidth-(Y+X))+"px "+-_(N.clientHeight-(q+$))+"px "+-_(Y)+"px",threshold:V(0,M(1,J))||1},K=!0;function w(f){let m=f[0].intersectionRatio;if(m!==J){if(!K)return c();m?c(!1,m):h=setTimeout(()=>{c(!1,1e-7)},100)}K=!1}try{p=new IntersectionObserver(w,{...j,root:N.ownerDocument})}catch(f){p=new IntersectionObserver(w,j)}p.observe(f)}(!0),r}(X,h):null,K,G=-1,Q=null;J&&(Q=new ResizeObserver(f=>{let[p]=f;p&&p.target===X&&Q&&(Q.unobserve(m),cancelAnimationFrame(G),G=requestAnimationFrame(()=>{Q&&Q.observe(m)})),h()}),X&&!q&&Q.observe(X),Q.observe(m));let U=q?R(f):null;return q&&function e(){let m=R(f);U&&(m.x!==U.x||m.y!==U.y||m.width!==U.width||m.height!==U.height)&&h(),U=m,K=requestAnimationFrame(e)}(),h(),()=>{$.forEach(f=>{N&&f.removeEventListener("scroll",h),I&&f.removeEventListener("resize",h)}),j&&j(),Q&&Q.disconnect(),Q=null,q&&cancelAnimationFrame(K)}}let B=(f,m,h)=>{let M=new Map,V={platform:J,...h},N={...V.platform,_c:M};return(0,p.oo)(f,m,{...V,platform:N})}}}]);