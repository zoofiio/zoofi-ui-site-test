"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5790],{17695:function(t,e,r){r.d(e,{S1:function(){return off},ZT:function(){return noop},jU:function(){return n},on:function(){return on}});var noop=function(){};function on(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];t&&t.addEventListener&&t.addEventListener.apply(t,e)}function off(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)}var n="undefined"!=typeof window},56574:function(t,e,r){r.d(e,{B:function(){return $e02a7d9cb1dc128c$export$c74125a8e3af6bb2}});var n=r(64103),o=r(85834),s=r(4042),i=r(17756);function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(t){let e=t+"CollectionProvider",[r,a]=(0,o.b)(e),[u,c]=r(e,{collectionRef:{current:null},itemMap:new Map}),l=t+"CollectionSlot",h=n.forwardRef((t,e)=>{let{scope:r,children:o}=t,a=c(l,r),u=(0,s.e)(e,a.collectionRef);return n.createElement(i.g7,{ref:u},o)}),f=t+"CollectionItemSlot",d="data-radix-collection-item",p=n.forwardRef((t,e)=>{let{scope:r,children:o,...a}=t,u=n.useRef(null),l=(0,s.e)(e,u),h=c(f,r);return n.useEffect(()=>(h.itemMap.set(u,{ref:u,...a}),()=>void h.itemMap.delete(u))),n.createElement(i.g7,{[d]:"",ref:l},o)});return[{Provider:t=>{let{scope:e,children:r}=t,o=n.useRef(null),s=n.useRef(new Map).current;return n.createElement(u,{scope:e,itemMap:s,collectionRef:o},r)},Slot:h,ItemSlot:p},function(e){let r=c(t+"CollectionConsumer",e),o=n.useCallback(()=>{let t=r.collectionRef.current;if(!t)return[];let e=Array.from(t.querySelectorAll(`[${d}]`)),n=Array.from(r.itemMap.values()),o=n.sort((t,r)=>e.indexOf(t.ref.current)-e.indexOf(r.ref.current));return o},[r.collectionRef,r.itemMap]);return o},a]}},29735:function(t,e,r){r.d(e,{gm:function(){return $f631663db3294ace$export$b39126d51d94e6f3}});var n=r(64103);let o=(0,n.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(t){let e=(0,n.useContext)(o);return t||e||"ltr"}},78249:function(t,e,r){r.d(e,{Pc:function(){return C},ck:function(){return O},fC:function(){return I}});var n=r(80317),o=r(64103),s=r(91036),i=r(56574),a=r(4042),u=r(85834),c=r(41106),l=r(35705),h=r(60691),f=r(55908),d=r(29735);let p="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[b,y,g]=(0,i.B)(v),[w,C]=(0,u.b)(v,[g]),[R,M]=w(v),E=(0,o.forwardRef)((t,e)=>(0,o.createElement)(b.Provider,{scope:t.__scopeRovingFocusGroup},(0,o.createElement)(b.Slot,{scope:t.__scopeRovingFocusGroup},(0,o.createElement)(S,(0,n.Z)({},t,{ref:e}))))),S=(0,o.forwardRef)((t,e)=>{let{__scopeRovingFocusGroup:r,orientation:i,loop:u=!1,dir:c,currentTabStopId:v,defaultCurrentTabStopId:b,onCurrentTabStopIdChange:g,onEntryFocus:w,...C}=t,M=(0,o.useRef)(null),E=(0,a.e)(e,M),S=(0,d.gm)(c),[x=null,F]=(0,f.T)({prop:v,defaultProp:b,onChange:g}),[I,O]=(0,o.useState)(!1),$=(0,h.W)(w),A=y(r),D=(0,o.useRef)(!1),[P,T]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let t=M.current;if(t)return t.addEventListener(p,$),()=>t.removeEventListener(p,$)},[$]),(0,o.createElement)(R,{scope:r,orientation:i,dir:S,loop:u,currentTabStopId:x,onItemFocus:(0,o.useCallback)(t=>F(t),[F]),onItemShiftTab:(0,o.useCallback)(()=>O(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>T(t=>t+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>T(t=>t-1),[])},(0,o.createElement)(l.WV.div,(0,n.Z)({tabIndex:I||0===P?-1:0,"data-orientation":i},C,{ref:E,style:{outline:"none",...t.style},onMouseDown:(0,s.M)(t.onMouseDown,()=>{D.current=!0}),onFocus:(0,s.M)(t.onFocus,t=>{let e=!D.current;if(t.target===t.currentTarget&&e&&!I){let e=new CustomEvent(p,m);if(t.currentTarget.dispatchEvent(e),!e.defaultPrevented){let t=A().filter(t=>t.focusable),e=t.find(t=>t.active),r=t.find(t=>t.id===x),n=[e,r,...t].filter(Boolean),o=n.map(t=>t.ref.current);$d7bdfb9eb0fdf311$var$focusFirst(o)}}D.current=!1}),onBlur:(0,s.M)(t.onBlur,()=>O(!1))})))}),x=(0,o.forwardRef)((t,e)=>{let{__scopeRovingFocusGroup:r,focusable:i=!0,active:a=!1,tabStopId:u,...h}=t,f=(0,c.M)(),d=u||f,p=M("RovingFocusGroupItem",r),m=p.currentTabStopId===d,v=y(r),{onFocusableItemAdd:g,onFocusableItemRemove:w}=p;return(0,o.useEffect)(()=>{if(i)return g(),()=>w()},[i,g,w]),(0,o.createElement)(b.ItemSlot,{scope:r,id:d,focusable:i,active:a},(0,o.createElement)(l.WV.span,(0,n.Z)({tabIndex:m?0:-1,"data-orientation":p.orientation},h,{ref:e,onMouseDown:(0,s.M)(t.onMouseDown,t=>{i?p.onItemFocus(d):t.preventDefault()}),onFocus:(0,s.M)(t.onFocus,()=>p.onItemFocus(d)),onKeyDown:(0,s.M)(t.onKeyDown,t=>{if("Tab"===t.key&&t.shiftKey){p.onItemShiftTab();return}if(t.target!==t.currentTarget)return;let e=function(t,e,r){var n;let o=(n=t.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===e&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===e&&["ArrowUp","ArrowDown"].includes(o)))return F[o]}(t,p.orientation,p.dir);if(void 0!==e){t.preventDefault();let o=v().filter(t=>t.focusable),s=o.map(t=>t.ref.current);if("last"===e)s.reverse();else if("prev"===e||"next"===e){var r,n;"prev"===e&&s.reverse();let o=s.indexOf(t.currentTarget);s=p.loop?(r=s,n=o+1,r.map((t,e)=>r[(n+e)%r.length])):s.slice(o+1)}setTimeout(()=>$d7bdfb9eb0fdf311$var$focusFirst(s))}})})))}),F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $d7bdfb9eb0fdf311$var$focusFirst(t){let e=document.activeElement;for(let r of t)if(r===e||(r.focus(),document.activeElement!==e))return}let I=E,O=x},83716:function(t,e,r){r.d(e,{R:function(){return getDefaultState},m:function(){return i}});var n=r(64583),o=r(93242),s=r(76937),i=class extends o.F{#t;#e;#r;constructor(t){super(),this.mutationId=t.mutationId,this.#e=t.mutationCache,this.#t=[],this.state=t.state||getDefaultState(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#t.includes(t)||(this.#t.push(t),this.clearGcTimeout(),this.#e.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#t=this.#t.filter(e=>e!==t),this.scheduleGc(),this.#e.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#t.length||("pending"===this.state.status?this.scheduleGc():this.#e.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(t){this.#r=(0,s.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#n({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#n({type:"pause"})},onContinue:()=>{this.#n({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#e.canRun(this)});let e="pending"===this.state.status,r=!this.#r.canStart();try{if(!e){this.#n({type:"pending",variables:t,isPaused:r}),await this.#e.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#n({type:"pending",context:e,variables:t,isPaused:r})}let n=await this.#r.start();return await this.#e.config.onSuccess?.(n,t,this.state.context,this),await this.options.onSuccess?.(n,t,this.state.context),await this.#e.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,t,this.state.context),this.#n({type:"success",data:n}),n}catch(e){try{throw await this.#e.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#e.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#n({type:"error",error:e})}}finally{this.#e.runNext(this)}}#n(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#t.forEach(e=>{e.onMutationUpdate(t)}),this.#e.notify({mutation:this,type:"updated",action:t})})}};function getDefaultState(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},95499:function(t,e,r){r.d(e,{D:function(){return useMutation}});var n=r(64103),o=r(83716),s=r(64583),i=r(7539),a=r(72549),u=class extends i.l{#o;#s=void 0;#i;#a;constructor(t,e){super(),this.#o=t,this.setOptions(e),this.bindMethods(),this.#u()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#o.defaultMutationOptions(t),(0,a.VS)(this.options,e)||this.#o.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#i,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,a.Ym)(e.mutationKey)!==(0,a.Ym)(this.options.mutationKey)?this.reset():this.#i?.state.status==="pending"&&this.#i.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#i?.removeObserver(this)}onMutationUpdate(t){this.#u(),this.#c(t)}getCurrentResult(){return this.#s}reset(){this.#i?.removeObserver(this),this.#i=void 0,this.#u(),this.#c()}mutate(t,e){return this.#a=e,this.#i?.removeObserver(this),this.#i=this.#o.getMutationCache().build(this.#o,this.options),this.#i.addObserver(this),this.#i.execute(t)}#u(){let t=this.#i?.state??(0,o.R)();this.#s={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#c(t){s.V.batch(()=>{if(this.#a&&this.hasListeners()){let e=this.#s.variables,r=this.#s.context;t?.type==="success"?(this.#a.onSuccess?.(t.data,e,r),this.#a.onSettled?.(t.data,null,e,r)):t?.type==="error"&&(this.#a.onError?.(t.error,e,r),this.#a.onSettled?.(void 0,t.error,e,r))}this.listeners.forEach(t=>{t(this.#s)})})}},c=r(83037),l=r(17275);function useMutation(t,e){let r=(0,c.NL)(e),[o]=n.useState(()=>new u(r,t));n.useEffect(()=>{o.setOptions(t)},[o,t]);let i=n.useSyncExternalStore(n.useCallback(t=>o.subscribe(s.V.batchCalls(t)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),a=n.useCallback((t,e)=>{o.mutate(t,e).catch(l.Z)},[o]);if(i.error&&(0,l.L)(o.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:a,mutateAsync:i.mutate}}}}]);