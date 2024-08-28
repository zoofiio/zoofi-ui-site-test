(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,t,n){Promise.resolve().then(n.bind(n,83773))},83773:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Vaults}});var a=n(31113),s=n(30639),r=n(4283),l=n(16738),i=n(91214),o=n(64103),c=n(26361),d=n(99548);function Switch(e){return(0,a.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)":"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)"},className:(0,c.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.checked)},children:(0,a.jsx)("div",{className:(0,c.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"left-[1em]":"-left-[1px]"),style:{background:e.checked?"#3B4144":"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)"}})})}var u=n(20265),x=n(85665),m=n(75496),f=n(33621),p=n(84944);function TupleTxt(e){return(0,a.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,a.jsx)("div",{className:"text-lg  font-medium",children:e.sub})]})}let C="max-w-4xl mx-auto";function BVaultP(e){let{bvc:t}=e,[n,r]=(0,o.useState)("");(0,c.su)(n);let[u,x]=(0,o.useState)("");return(0,c.su)(u),(0,a.jsxs)("div",{className:(0,c.cn)("grid grid-cols-1 md:grid-cols-3 gap-5",C),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,a.jsx)(s.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.pTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsx)(TupleTxt,{tit:"APY",sub:"176.4%"}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:"".concat(t.pTokenSymbol,"  23,132.32")})]})]}),(0,a.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,a.jsx)(l.x,{data:[{tab:"Mint",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(i.W,{asset:t.assetSymbol,amount:n,balance:0n,setAmount:r}),(0,a.jsx)("div",{className:"text-xs font-medium ",children:"Receive 1 ".concat(t.pTokenSymbol," for every ").concat(t.assetSymbol)}),(0,a.jsx)(d.v,{className:"mx-auto mt-6",tx:"Mint",disabled:!0,config:{},onTxSuccess:()=>{r("")}})]})},{tab:"Redeem",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(i.W,{asset:t.pTokenSymbol,amount:u,balance:0n,setAmount:x}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,a.jsx)("div",{className:"text-xs font-medium  ",children:"Your ".concat(t.pTokenSymbol," can be claimed 1:1 for ").concat(t.assetSymbol," at the end of this Epoch")}),(0,a.jsxs)("div",{className:"flex text-xs items-center gap-5",children:["Claimable: 22.323",(0,a.jsx)("span",{className:"underline",children:"Claim"})]})]}),(0,a.jsx)(d.v,{className:"mx-auto mt-6",tx:"Redeem",disabled:!0,config:{},onTxSuccess:()=>{x("")}})]})}]})})]})}function BVaultY(e){let{bvc:t}=e,[n,s]=(0,o.useState)("");(0,c.su)(n);let[l,u]=(0,o.useState)("");return(0,c.su)(l),(0,a.jsxs)("div",{className:(0,c.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",C),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,a.jsx)(r.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.yTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Boost bribes yield"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,a.jsx)("span",{className:"text-4xl font-medium",children:"40x"}),"Bribes Yield"]}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:"".concat(t.yTokenSymbol,"  23,132.32")})]})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-1",children:[(0,a.jsx)(i.W,{asset:t.assetSymbol,amount:n,balance:0n,setAmount:s}),(0,a.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,a.jsx)(i.W,{asset:t.yTokenSymbol,readonly:!0,disable:!0,amount:l}),(0,a.jsxs)("div",{className:"text-xs font-medium  flex justify-between",children:[(0,a.jsx)("span",{children:"Current Price: 1 ".concat(t.assetSymbol,"=23 ").concat(t.yTokenSymbol)}),(0,a.jsx)("span",{children:"Price Impact: -0.35%"})]}),(0,a.jsx)(d.v,{className:"mx-auto mt-6",tx:"Buy",disabled:!0,config:{},onTxSuccess:()=>{s("")}})]})]})}function BribeTit(e){return(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,a.jsx)(f.c,{symbol:"GreenDot",size:14}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){let{bvc:t}=e,[n,s]=(0,o.useState)(!1),r=[10,9,8,7,6,5,4,3,2,1],[l,f]=(0,x.Z)(),[h,b]=(0,o.useState)("");return(0,c.su)(h),(0,a.jsxs)("div",{className:(0,c.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",C),children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{ref:l,className:"flex items-center gap-8 text-xl font-semibold mb-6",children:[(0,a.jsx)("span",{children:"My Pool Only"}),(0,a.jsx)(Switch,{checked:n,onChange:s})]}),(0,a.jsx)(u.aV,{className:r.length>6?"pr-5":"",width:f.width,height:436,rowHeight:e=>{let{index:t}=e;return t<r.length-1?76:56},overscanRowCount:6,rowCount:r.length,rowRenderer:function(e){let{key:t,style:n,index:s}=e;return(0,a.jsx)("div",{style:n,children:(0,a.jsxs)("div",{className:(0,c.cn)("flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold",s<r.length-1?"mb-[20px]":""),children:[(0,a.jsxs)("div",{className:"text-base",children:["Epoch ",r[s]]}),(0,a.jsx)("div",{className:"text-xs dark:text-white/60",children:"3/4/2024~4/4/2024"})]})},t)}})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,a.jsx)("span",{className:"text-xl ",children:"Accumulated bribes"}),(0,a.jsx)("span",{className:"text-xs dark:text-white/60",children:"Epoch10"})]}),(0,a.jsx)("div",{className:"flex-1 mt-3 rounded-lg border border-solid border-border p-4",children:(0,a.jsx)(m.ZP,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",rowClassName:"text-center",header:["","","Total","You Share",""],span:{1:2,2:1,3:1},data:[["",(0,a.jsx)(BribeTit,{name:"Bera"},"1"),(0,p.dq)(0x1a48beeb15ac55aafea3n),(0,p.dq)(0x1a48beeb15ac55aafea3n),""],["",(0,a.jsx)(BribeTit,{name:"RED"},"1"),(0,p.dq)(0x1a48beeb15ac55aafea3n),(0,p.dq)(0x1a48beeb15ac55aafea3n),""],["",(0,a.jsx)(BribeTit,{name:"ZOO"},"1"),(0,p.dq)(0x1a48beeb15ac55aafea3n),(0,p.dq)(0x1a48beeb15ac55aafea3n),""],["",(0,a.jsx)(BribeTit,{name:"iBGT"},"1"),(0,p.dq)(0x1a48beeb15ac55aafea3n),(0,p.dq)(0x1a48beeb15ac55aafea3n),""]]})}),(0,a.jsx)(i.W,{asset:t.yTokenSymbol,amount:h,balance:0n,setAmount:b}),(0,a.jsx)("span",{className:"text-xs mx-auto",children:"You will receive 0.023% of total bribes"}),(0,a.jsx)(d.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:!0,config:{},onTxSuccess:()=>{b("")}})]})]})}function BVault(e){let{bvc:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultP,{bvc:t}),(0,a.jsx)(BVaultY,{bvc:t}),(0,a.jsx)("div",{className:"page-title mt-8",children:"Bribes Pools"}),(0,a.jsx)(BVaultPools,{bvc:t})]})}var h=n(50553),b=n(6868),v=n(44939),g=n(73216);let j={[g.BG.id]:[{vault:"0x",asset:"0x",assetSymbol:"iRED",pToken:"0x",pTokenSymbol:"piRED",yToken:"0x",yTokenSymbol:"yiRED"}]};var w=n(22139),N=n(59175);function Vaults(){let e=(0,N.p)(),t=j[e],n=t[0];return(0,a.jsx)(v.E,{children:(0,a.jsxs)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:[(0,a.jsx)(h.a,{}),(0,a.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,a.jsx)(b.K,{data:"A pendle-like product with more innovation."}),n&&w._u&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(BVault,{bvc:n})})]})})}},99548:function(e,t,n){"use strict";n.d(t,{v:function(){return ApproveAndTx}});var a=n(31113),s=n(19757),r=n(26361),l=n(64103),i=n(47259),o=n(58714),c=n(41440),d=n(41774),u=n(48914);let x={},useApproves=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10000000000n*10n**18n,{address:a,chainId:m}=(0,c.m)(),f=(0,d.t)(),{data:p}=(0,u.p)(),[C,h]=(0,l.useState)(!1),b=(0,l.useMemo)(()=>Object.keys(e).filter(e=>e!==s.K8),[e]),[v,g]=(0,l.useState)(t&&x[t]||{}),updateAllownce=(e,n)=>{t&&(x[t]={...x[t]||{},[e]:n},g(t=>({...t,[e]:n})))},j=(0,d.t)();(0,l.useEffect)(()=>{a&&t&&f&&m&&b.forEach(e=>{f.readContract({abi:o.Wo,address:e,functionName:"allowance",args:[a,t]}).then(t=>updateAllownce(e,t||0n)).catch(console.error)})},[b,m,a]);let[w,N]=(0,l.useState)(!1),y=(0,l.useMemo)(()=>b.filter(t=>(0,r.ok)(e,t)>0n&&(0,r.ok)(e,t)>(0,r.ok)(v,t)),[e,b,v]),approve=async()=>{if(0!=y.length&&t)try{N(!0),h(!1);for(let a=0;a<y.length;a++){let s=y[a],r=!1===n?e[s]:n,l=await (null==p?void 0:p.writeContract({abi:o.Wo,address:s,functionName:"approve",args:[t,r]}));l&&await (null==j?void 0:j.waitForTransactionReceipt({hash:l})),updateAllownce(s,r)}i.A.success("Approve success"),N(!1),h(!0)}catch(e){i.A.error((0,r.az)(e)),N(!1),h(!1)}};return{approve,loading:w,shouldApprove:y.length>0,isSuccess:C}};var m=n(78354),f=n(88501),p=n(36762);function ApproveAndTx(e){let{className:t,tx:n,approves:s,spender:r,requestAmount:i,config:o,toast:c=!0,disabled:d,onTxSuccess:u,onApproveSuccess:x}=e,{write:C,isDisabled:h,isLoading:b}=(0,m.R)(o,{onSuccess:()=>u&&u(),autoToast:c}),v=d||h||b||!1===o.enabled,{approve:g,shouldApprove:j,loading:w,isSuccess:N}=useApproves(s||{},r,i),y=(0,l.useRef)();return(y.current=x,(0,l.useEffect)(()=>{y.current&&N&&y.current()},[N]),j)?(0,a.jsxs)("button",{className:(0,f.m)("btn-primary flex items-center justify-center gap-4",t),onClick:g,disabled:d||!g||w,children:[w&&(0,a.jsx)(p.$,{}),"Approve"]}):(0,a.jsxs)("button",{className:(0,f.m)("btn-primary flex items-center justify-center gap-4",t),onClick:()=>C(),disabled:v,children:[b&&(0,a.jsx)(p.$,{}),n]})}},91214:function(e,t,n){"use strict";n.d(t,{W:function(){return AssetInput}});var a=n(31113),s=n(26361),r=n(84944),l=n(33501),i=n(64103),o=n(45631),c=n(35057),d=n(33621),u=n(12045);function AssetInput(e){let{asset:t="ETH",checkBalance:n=!0,balance:x,balanceTit:m="Balance",balanceDecimals:f=18,exchange:p,readonly:C,selected:h,onClick:b,amount:v,setAmount:g,price:j,disable:w,hasInput:N=!1,options:y,onChange:k=()=>{},defaultValue:T,balanceClassName:L="",disableNegative:S}=e,A=(0,i.useRef)(null),B=n&&void 0!==x&&(0,s.su)("number"==typeof v?v+"":v||"")>("bigint"==typeof x?x:0n),R=(0,u.l)(e=>"dark"==e.theme);return(0,a.jsxs)("div",{className:"relative w-full",onClick:()=>{b&&!w&&b()},children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsxs)("div",{className:"absolute flex items-center h-fit gap-2 left-[48px] bottom-1 w-full  max-w-[calc(100%-56px)]",style:{pointerEvents:"none"},children:[j&&(0,a.jsx)("div",{className:"text-neutral-500 dark:text-slate-50/70 text-xs max-w-full overflow-hidden",children:j}),p&&(0,a.jsxs)("div",{className:"text-slate-500 dark:text-slate-50/70 text-xs max-w-full overflow-hidden",children:["~$",p]})]}),(0,a.jsxs)("div",{className:"absolute flex items-center gap-2 w-fit top-1/2 left-4 -translate-y-1/2",children:[(0,a.jsx)(d.c,{size:24,symbol:t}),(0,a.jsx)("div",{className:(0,l.Z)("relative",j||p?"-top-[6px]":""),children:N?(0,a.jsx)(o.ZP,{options:y,onChange:k,defaultValue:T,styles:{control:(e,t)=>({...e,border:"0px",outline:"none",boxShadow:"none",borderRadius:"0px",minHeight:"24px",padding:"0px",background:"transparent"}),singleValue:(e,t)=>({...e,color:R?"#fff":"#000"}),valueContainer:(e,t)=>({...e,padding:"0px"}),menu:(e,t)=>({...e,margin:0,background:R?"#444":"#fff"}),option:(e,t)=>({...e,color:R?"#fff":"#000",background:R?"transparent":"#fff"}),menuPortal:(e,t)=>({...e,margin:0})}}):(0,a.jsx)("div",{children:t})})]}),(0,a.jsx)("input",{value:v,onChange:e=>{let t=(e.target.value||"").replaceAll("-","").replaceAll("+","");g(t)},ref:A,type:"number",disabled:w,className:(0,l.Z)(C?"bg-slate-50 cursor-not-allowed dark:bg-slate-800":"bg-white dark:bg-transparent",{"border-green-700 border-2":h,"border-red-400 !border-2 focus:border-red-400":B,"border-slate-400  focus:border-primary":!B&&!h},"w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border-[#4A5546] border focus:border-2 text-slate-700 rounded-lg outline-none dark:text-slate-50"),placeholder:"0.000",maxLength:36,pattern:"[0-9.]{36}",step:.01,title:"",readOnly:C})]}),void 0!=x&&(0,a.jsxs)("div",{className:"flex items-center justify-between mt-1 px-1 text-slate-400 dark:text-slate-50/70 text-sm",children:[(0,a.jsxs)("div",{className:L,children:[(0,a.jsxs)("span",{children:[m,": ",(0,r.Rp)(x,3,f)]}),(0,a.jsx)("button",{className:"text-primary ml-2",onClick:()=>{let e=(0,c.b)(x,f);g(e),b&&!w&&b()},children:"Max"})]}),(0,a.jsx)("div",{className:"text-sm text-red-400",children:B?"Insufficient account balance":""})]})]})}},33621:function(e,t,n){"use strict";n.d(t,{c:function(){return CoinIcon}});var a=n(31113),s=n(26758);let r={iBGT:"webp"};function CoinIcon(e){let{symbol:t,size:n=48,...l}=e,i=t in r?r[t]:"svg",o="".concat(s.G,"/").concat(t,".").concat(i);return(0,a.jsx)("img",{...l,width:n,height:n,src:o,alt:t})}},30639:function(e,t,n){"use strict";n.d(t,{Z:function(){return Icon}});var a=n(31113);function Icon(e){return(0,a.jsxs)("svg",{...e,width:"1em",height:"1em",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"paint0_linear_44_1607",x1:"13",y1:"14",x2:"41.5",y2:"43",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{"stop-color":"#0ED19A"}),(0,a.jsx)("stop",{offset:"1","stop-color":"#007730"})]})}),(0,a.jsx)("path",{d:"M53.5 27C53.5 41.6355 41.6355 53.5 27 53.5C12.3645 53.5 0.5 41.6355 0.5 27C0.5 12.3645 12.3645 0.5 27 0.5C41.6355 0.5 53.5 12.3645 53.5 27Z",stroke:e.showOutline?"currentColor":"transparent",fill:e.showBg?"url(#paint0_linear_44_1607)":"none"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.7677 20.0734C22.3519 19.9523 21.8905 19.9873 21.4367 20.111C20.957 20.2417 20.4525 20.4803 19.9559 20.7933C18.963 21.4192 17.9551 22.3721 17.1834 23.4777C16.4134 24.581 15.8555 25.8699 15.8148 27.1675C15.7735 28.4856 16.2684 29.7798 17.5382 30.8428L17.5888 30.8851L17.6498 30.9106C18.8412 31.4086 20.7002 31.6235 22.3929 30.6138C24.0958 29.5981 25.5153 27.413 25.9703 23.352L25.9747 23.3128L25.9718 23.2734C25.8967 22.244 25.3238 21.4507 24.6753 20.9218C24.0613 20.4211 23.3253 20.113 22.7677 20.0734ZM18.0486 30.1419C19.0589 30.5452 20.5789 30.6904 21.9445 29.8759C23.323 29.0537 24.6584 27.1843 25.1016 23.2977C25.0373 22.5846 24.6352 22.0048 24.1228 21.5868C23.5899 21.1523 22.9985 20.9423 22.6742 20.9308L22.6115 20.9286L22.5519 20.9089C22.3414 20.8391 22.046 20.8383 21.6673 20.9415C21.2925 21.0436 20.8676 21.2395 20.4225 21.5201C19.532 22.0813 18.6072 22.9521 17.8985 23.9676C17.188 24.9855 16.7176 26.1152 16.6838 27.1943C16.6511 28.236 17.0226 29.2604 18.0486 30.1419Z",fill:"currentColor"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.8155 20.0749C31.2227 19.9532 31.6736 19.99 32.1143 20.1144C32.5814 20.2462 33.0723 20.4861 33.5551 20.7998C34.5206 21.427 35.5019 22.3807 36.2558 23.4857C37.0083 24.5887 37.5559 25.875 37.6054 27.168C37.6557 28.4798 37.1904 29.7729 35.9684 30.8372L35.9176 30.8815L35.8555 30.9084C34.7013 31.4081 32.8973 31.6214 31.2475 30.6068C29.5922 29.5888 28.2058 27.405 27.7344 23.3506L27.73 23.3128L27.7324 23.2747C27.7964 22.2503 28.3418 21.4574 28.9677 20.9264C29.5574 20.4261 30.2694 20.1155 30.8155 20.0749ZM35.4454 30.1453C34.4796 30.5434 33.0239 30.6855 31.706 29.875C30.3697 29.0531 29.0623 27.1818 28.6026 23.2914C28.659 22.5741 29.0446 21.9952 29.5332 21.5806C30.0427 21.1484 30.6069 20.9429 30.9114 20.9321L30.9764 20.9298L31.0379 20.9087C31.233 20.8418 31.5118 20.8399 31.876 20.9427C32.2362 21.0444 32.6467 21.2396 33.0784 21.5201C33.9419 22.081 34.8422 22.9518 35.5355 23.9681C36.2302 24.9864 36.6952 26.1183 36.7367 27.2007C36.7767 28.2464 36.4242 29.2689 35.4454 30.1453Z",fill:"currentColor"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.6119 15.2847C44.7015 17.0602 43.8394 19.0693 41.6541 21.1273C41.9706 21.8631 42.4553 23.38 42.7965 25.2776C43.198 27.5112 43.4107 30.3246 42.8991 33.0906C42.3867 35.8612 41.1432 38.6032 38.6182 40.6486C36.0943 42.6931 32.3413 44 26.8907 44H26.8876L26.8844 44C22.0048 43.9298 18.4181 42.9374 15.846 41.3349C13.2669 39.7282 11.7378 37.5264 10.9482 35.1004C9.41264 30.3822 10.677 24.8377 12.3231 21.0939C10.5789 18.9453 9.9052 16.9215 10.0106 15.1828C10.1197 13.3839 11.0607 11.948 12.3918 11.0655C14.9834 9.34733 19.0233 9.73505 21.353 13.3966C23.4967 12.706 25.8931 12.5683 28.028 12.6754C30.0474 12.7767 31.8603 13.0986 33.0494 13.3997C33.8381 11.5391 35.2887 10.5016 36.9057 10.1442C38.6088 9.76776 40.4771 10.1477 41.943 11.0586C43.4122 11.9715 44.5192 13.4471 44.6119 15.2847ZM33.724 14.0595C34.3667 12.2539 35.6543 11.3033 37.095 10.9849C38.5548 10.6622 40.1911 10.9867 41.4811 11.7883C42.7678 12.5878 43.6682 13.8326 43.7436 15.3277C43.8191 16.8226 43.0751 18.6797 40.8331 20.708L40.5822 20.9349L40.7438 21.231C40.972 21.6488 41.5478 23.2441 41.9406 25.4287C42.3311 27.6008 42.5307 30.304 42.044 32.9354C41.5582 35.5622 40.393 38.0983 38.0679 39.9818C35.7423 41.8657 32.2049 43.1381 26.894 43.1387C22.1229 43.0697 18.707 42.0998 16.3088 40.6058C13.917 39.1157 12.508 37.0863 11.7756 34.836C10.3011 30.3054 11.5673 24.8576 13.2253 21.2026L13.3366 20.9571L13.1628 20.7504C11.389 18.641 10.7865 16.751 10.8784 15.2345C10.9701 13.7224 11.7543 12.5246 12.8753 11.7814C15.1178 10.2946 18.7404 10.6182 20.7852 14.1314L20.9665 14.4428L21.3082 14.3217C23.386 13.5852 25.7962 13.4259 27.984 13.5357C30.1689 13.6453 32.0982 14.0214 33.1951 14.3305L33.5881 14.4412L33.724 14.0595Z",fill:"currentColor"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.7677 20.0734C22.3519 19.9523 21.8905 19.9873 21.4367 20.111C20.957 20.2417 20.4525 20.4803 19.9559 20.7933C18.963 21.4192 17.9551 22.3721 17.1834 23.4777C16.4134 24.581 15.8555 25.8699 15.8148 27.1675C15.7735 28.4856 16.2684 29.7798 17.5382 30.8428L17.5888 30.8851L17.6498 30.9106C18.8412 31.4086 20.7002 31.6235 22.3929 30.6138C24.0958 29.5981 25.5153 27.413 25.9703 23.352L25.9747 23.3128L25.9718 23.2734C25.8967 22.244 25.3238 21.4507 24.6753 20.9218C24.0613 20.4211 23.3253 20.113 22.7677 20.0734ZM18.0486 30.1419C19.0589 30.5452 20.5789 30.6904 21.9445 29.8759C23.323 29.0537 24.6584 27.1843 25.1016 23.2977C25.0373 22.5846 24.6352 22.0048 24.1228 21.5868C23.5899 21.1523 22.9985 20.9423 22.6742 20.9308L22.6115 20.9286L22.5519 20.9089C22.3414 20.8391 22.046 20.8383 21.6673 20.9415C21.2925 21.0436 20.8676 21.2395 20.4225 21.5201C19.532 22.0813 18.6072 22.9521 17.8985 23.9676C17.188 24.9855 16.7176 26.1152 16.6838 27.1943C16.6511 28.236 17.0226 29.2604 18.0486 30.1419Z",stroke:"currentColor",strokeLinecap:"round"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M30.8155 20.0749C31.2227 19.9532 31.6736 19.99 32.1143 20.1144C32.5814 20.2462 33.0723 20.4861 33.5551 20.7998C34.5206 21.427 35.5019 22.3807 36.2558 23.4857C37.0083 24.5887 37.5559 25.875 37.6054 27.168C37.6557 28.4798 37.1904 29.7729 35.9684 30.8372L35.9176 30.8815L35.8555 30.9084C34.7013 31.4081 32.8973 31.6214 31.2475 30.6068C29.5922 29.5888 28.2058 27.405 27.7344 23.3506L27.73 23.3128L27.7324 23.2747C27.7964 22.2503 28.3418 21.4574 28.9677 20.9264C29.5574 20.4261 30.2694 20.1155 30.8155 20.0749ZM35.4454 30.1453C34.4796 30.5434 33.0239 30.6855 31.706 29.875C30.3697 29.0531 29.0623 27.1818 28.6026 23.2914C28.659 22.5741 29.0446 21.9952 29.5332 21.5806C30.0427 21.1484 30.6069 20.9429 30.9114 20.9321L30.9764 20.9298L31.0379 20.9087C31.233 20.8418 31.5118 20.8399 31.876 20.9427C32.2362 21.0444 32.6467 21.2396 33.0784 21.5201C33.9419 22.081 34.8422 22.9518 35.5355 23.9681C36.2302 24.9864 36.6952 26.1183 36.7367 27.2007C36.7767 28.2464 36.4242 29.2689 35.4454 30.1453Z",stroke:"currentColor",strokeLinecap:"round"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.6119 15.2847C44.7015 17.0602 43.8394 19.0693 41.6541 21.1273C41.9706 21.8631 42.4553 23.38 42.7965 25.2776C43.198 27.5112 43.4107 30.3246 42.8991 33.0906C42.3867 35.8612 41.1432 38.6032 38.6182 40.6486C36.0943 42.6931 32.3413 44 26.8907 44H26.8876L26.8844 44C22.0048 43.9298 18.4181 42.9374 15.846 41.3349C13.2669 39.7282 11.7378 37.5264 10.9482 35.1004C9.41264 30.3822 10.677 24.8377 12.3231 21.0939C10.5789 18.9453 9.9052 16.9215 10.0106 15.1828C10.1197 13.3839 11.0607 11.948 12.3918 11.0655C14.9834 9.34733 19.0233 9.73505 21.353 13.3966C23.4967 12.706 25.8931 12.5683 28.028 12.6754C30.0474 12.7767 31.8603 13.0986 33.0494 13.3997C33.8381 11.5391 35.2887 10.5016 36.9057 10.1442C38.6088 9.76776 40.4771 10.1477 41.943 11.0586C43.4122 11.9715 44.5192 13.4471 44.6119 15.2847ZM33.724 14.0595C34.3667 12.2539 35.6543 11.3033 37.095 10.9849C38.5548 10.6622 40.1911 10.9867 41.4811 11.7883C42.7678 12.5878 43.6682 13.8326 43.7436 15.3277C43.8191 16.8226 43.0751 18.6797 40.8331 20.708L40.5822 20.9349L40.7438 21.231C40.972 21.6488 41.5478 23.2441 41.9406 25.4287C42.3311 27.6008 42.5307 30.304 42.044 32.9354C41.5582 35.5622 40.393 38.0983 38.0679 39.9818C35.7423 41.8657 32.2049 43.1381 26.894 43.1387C22.1229 43.0697 18.707 42.0998 16.3088 40.6058C13.917 39.1157 12.508 37.0863 11.7756 34.836C10.3011 30.3054 11.5673 24.8576 13.2253 21.2026L13.3366 20.9571L13.1628 20.7504C11.389 18.641 10.7865 16.751 10.8784 15.2345C10.9701 13.7224 11.7543 12.5246 12.8753 11.7814C15.1178 10.2946 18.7404 10.6182 20.7852 14.1314L20.9665 14.4428L21.3082 14.3217C23.386 13.5852 25.7962 13.4259 27.984 13.5357C30.1689 13.6453 32.0982 14.0214 33.1951 14.3305L33.5881 14.4412L33.724 14.0595Z",stroke:"currentColor",strokeLinecap:"round"})]})}},4283:function(e,t,n){"use strict";n.d(t,{Z:function(){return Icon}});var a=n(31113);function Icon(e){return(0,a.jsxs)("svg",{...e,width:"1em",height:"1em",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"paint0_linear_44_1614",x1:"11",y1:"12",x2:"40",y2:"46",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{"stop-color":"#EBC013"}),(0,a.jsx)("stop",{offset:"1","stop-color":"#B4630C"})]})}),(0,a.jsx)("path",{d:"M53.5 27C53.5 41.6355 41.6355 53.5 27 53.5C12.3645 53.5 0.5 41.6355 0.5 27C0.5 12.3645 12.3645 0.5 27 0.5C41.6355 0.5 53.5 12.3645 53.5 27Z",stroke:e.showOutline?"currentColor":"transparent",fill:e.showBg?"url(#paint0_linear_44_1614)":"none"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.8858 12.6242C30.0381 11.1982 32.0074 9.73158 34.2967 10.042C36.7014 10.368 39.1876 12.6144 41.2947 18.1891L41.3243 18.2674V22.7031C41.9003 23.067 42.4415 23.5927 42.7824 24.2799C43.1751 25.0715 43.2852 26.0449 42.9197 27.1593C42.2131 29.3134 39.7403 31.9737 34.1498 35.0849C34.2369 36.6497 34.1823 38.9077 33.7465 40.9502C33.5147 42.0368 33.1703 43.0858 32.6655 43.9413C32.1599 44.7983 31.4746 45.4912 30.5547 45.8003L29.9602 46V36.9471L27.3753 38.5102C27.2803 38.5676 27.1728 38.5858 27.0714 38.5694C26.97 38.5858 26.8626 38.5676 26.7676 38.5102L24.1827 36.9471V46L23.5881 45.8003C22.6683 45.4912 21.983 44.7983 21.4773 43.9413C20.9726 43.0858 20.6281 42.0368 20.3963 40.9502C19.9606 38.9077 19.9059 36.6497 19.9931 35.0849C14.4026 31.9737 11.9298 29.3134 11.2232 27.1593C10.8576 26.0449 10.9677 25.0715 11.3604 24.2799C11.7014 23.5927 12.2425 23.067 12.8185 22.7031V18.2674L12.8481 18.1891C14.9552 12.6144 17.4414 10.368 19.8461 10.042C22.1355 9.73158 24.1048 11.1982 25.2571 12.6242H28.8858ZM24.839 13.4881C24.9051 13.5208 24.978 13.5367 25.051 13.5347H28.9613C28.9854 13.5347 29.0091 13.5328 29.0322 13.5291C29.1906 13.5547 29.3575 13.4943 29.4622 13.3572C30.513 11.9803 32.2677 10.6856 34.1763 10.9444C36.0559 11.1992 38.3514 13.0004 40.4209 18.4353V23.2341L40.6563 23.3635C41.1937 23.659 41.6872 24.1084 41.9744 24.6872C42.2559 25.2547 42.3556 25.9781 42.0619 26.8735C41.4605 28.7069 39.2025 31.2708 33.4645 34.4254L33.2095 34.5655L33.2302 34.8575C33.3371 36.3661 33.304 38.693 32.8633 40.7588C32.6429 41.7918 32.3254 42.7362 31.889 43.4759C31.5943 43.9754 31.254 44.3677 30.8636 44.6368V35.3388L27.0714 37.6321L23.2793 35.3388V44.6368C22.8889 44.3677 22.5486 43.9754 22.2539 43.4759C21.8174 42.7362 21.4999 41.7918 21.2796 40.7588C20.8389 38.693 20.8057 36.3661 20.9127 34.8575L20.9334 34.5655L20.6784 34.4254C14.9403 31.2708 12.6824 28.7069 12.081 26.8735C11.7873 25.9781 11.8869 25.2547 12.1685 24.6872C12.4556 24.1084 12.9492 23.659 13.4866 23.3635L13.722 23.2341V18.4353C15.7915 13.0004 18.0869 11.1992 19.9666 10.9444C21.8707 10.6862 23.6215 11.9742 24.6732 13.3474C24.693 13.3748 24.7157 13.3998 24.7409 13.422C24.771 13.4487 24.804 13.4707 24.839 13.4881Z",fill:"currentColor",stroke:"currentColor",strokeLinecap:"round"})]})}},6868:function(e,t,n){"use strict";n.d(t,{K:function(){return Noti}});var a=n(31113);n(64103);var s=n(63114);function Noti(e){let{data:t}=e;return(0,a.jsxs)("div",{className:"w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[24px] md:leading-[14px]",children:[(0,a.jsx)("div",{className:"",children:(0,a.jsx)(s.pMA,{size:20})}),(0,a.jsx)("div",{className:"text-sm ml-1 ",children:t})]})}},44939:function(e,t,n){"use strict";n.d(t,{E:function(){return PageWrap}});var a=n(31113);n(64103);var s=n(26361),r=n(69708),l=n(12045);function PageWrap(e){let{children:t,className:n}=e,i=(0,l.l)(e=>e.theme),o=(0,r.usePathname)();return(0,a.jsx)("div",{className:(0,s.cn)("min-h-[calc(100vh+1px)] h-auto pt-[90px] pb-6",n),style:{backgroundSize:"contain",background:"light"==i?"#eeeeee":"/"==o?"url(bg_home.svg) center bottom no-repeat,linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)":"linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)"},children:t})}},16738:function(e,t,n){"use strict";n.d(t,{x:function(){return SimpleTabs}});var a=n(31113),s=n(26361),r=n(24626),l=n(64103);function SimpleTabs(e){let{className:t,listClassName:n,triggerClassName:i,contentClassName:o,data:c,onTabChange:d}=e,[u,x]=(0,l.useState)(c[0].tab);return(0,a.jsxs)(r.fC,{value:u,className:(0,s.cn)("w-full",t),onValueChange:e=>{x(e),null==d||d(e)},children:[(0,a.jsx)(r.aV,{className:(0,s.cn)("p-1 w-fit rounded-md gap-5 flex bg-transparent",n),children:c.map(e=>(0,a.jsx)(r.xz,{className:(0,s.cn)('rounded-[3px] text-sm py-1.5 px-0 text-black/50 font-medium data-[state="active"]:bg-black data-[state="active"]:text-slate-900 !bg-transparent dark:text-white/50 dark:data-[state="active"]:text-white',i),value:e.tab,children:e.tab},e.tab))}),c.map(e=>(0,a.jsx)(r.VY,{value:e.tab,className:(0,s.cn)("flex flex-col gap-6 outline-none",o),children:e.content},e.tab))]})}},26758:function(e,t,n){"use strict";n.d(t,{G:function(){return s}});var a=n(28070);let s=a.env.NEXT_PUBLIC_BASE_PATH||""},22139:function(e,t,n){"use strict";n.d(t,{Hj:function(){return r},Pq:function(){return l},_u:function(){return o},pn:function(){return i},v:function(){return s},xb:function(){return DOC_LINK}});var a=n(44769);let s="https://x.com/ZooFinanceIO",r="https://t.co/RJwdwdawe5",l=BigInt(1e18),i=864e5,DOC_LINK=()=>"https://docs.".concat(a.Kh.value),o=!1},44769:function(e,t,n){"use strict";n.d(t,{Kh:function(){return s},Vi:function(){return useConfigDomain}});var a=n(64103);let s={value:"zoofi.io"},r=["zoofi.io","zoofi.xyz"],getAvilableDomain=()=>{var e;if("localhost"==location.hostname||(null===(e=location.hostname.match(/^\d+\.\d+\.\d+\.\d+$/))||void 0===e?void 0:e.length)==1)return r[0];let t=location.hostname.split("."),n=t.slice(-2).join(".");return("ipns"==t[1]&&(n=t[0].replaceAll("-",".")),r.includes(n))?n:r[0]};function useConfigDomain(){(0,a.useEffect)(()=>{s.value=getAvilableDomain()},[])}},78354:function(e,t,n){"use strict";n.d(t,{R:function(){return useWrapContractWrite}});var a=n(26361),s=n(64103),r=n(47259),l=n(41774),i=n(48914),o=n(15506);function useWrapContractWrite(e,t){let{autoToast:n=!0,onSuccess:c}=t||{},[d,u]=(0,s.useState)(!1),[x,m]=(0,s.useState)(!1),f=(0,l.t)(),{data:p}=(0,i.p)(),C=!f||!p||!p.account||d||!e,h=(0,o.hp)(),write=async()=>{if(!C){u(!0),m(!1);try{let t="function"==typeof e?await e():e,{request:a}=await f.simulateContract({account:p.account,...t}),s=await p.writeContract(a),l=await f.waitForTransactionReceipt({hash:s});if("success"!==l.status)throw"Transaction reverted";m(!0),c&&c(),n&&r.A.success("Transaction success"),h.update()}catch(e){n&&r.A.error((0,a.az)(e))}u(!1)}};return{write,isDisabled:C,isLoading:d,isSuccess:x}}},28070:function(e){var t,n,a,s=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{n="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){n=defaultClearTimeout}}();var r=[],l=!1,i=-1;function cleanUpNextTick(){l&&a&&(l=!1,a.length?r=a.concat(r):i=-1,r.length&&drainQueue())}function drainQueue(){if(!l){var e=runTimeout(cleanUpNextTick);l=!0;for(var t=r.length;t;){for(a=r,r=[];++i<t;)a&&a[i].run();i=-1,t=r.length}a=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===defaultClearTimeout||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];r.push(new Item(e,t)),1!==r.length||l||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=noop,s.addListener=noop,s.once=noop,s.off=noop,s.removeListener=noop,s.removeAllListeners=noop,s.emit=noop,s.prependListener=noop,s.prependOnceListener=noop,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}},17695:function(e,t,n){"use strict";n.d(t,{S1:function(){return off},ZT:function(){return noop},jU:function(){return a},on:function(){return on}});var noop=function(){};function on(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function off(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var a="undefined"!=typeof window}},function(e){e.O(0,[4881,7495,7622,3458,5294,3119,8410,5631,9447,4626,5398,553,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);