(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4317],{94627:function(e,s,a){Promise.resolve().then(a.bind(a,73828))},73828:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Vaults}});var t=a(31113),l=a(89194),n=a(50553),i=a(64103),r=a(63114);function Noti(e){let{data:s}=e;return(0,t.jsxs)("div",{className:"w-full mt-2 mb-3 md:mt-4 md:mb-6 flex text-[24px] md:text-[14px] text-[#64748B] dark:text-slate-50/60 font-medium leading-[24px] md:leading-[14px]",children:[(0,t.jsx)("div",{className:"",children:(0,t.jsx)(r.pMA,{size:20})}),(0,t.jsx)("div",{className:"text-sm ml-1 ",children:s})]})}var d=a(26361),c=a(24626);function SimpleTabs(e){let{className:s,listClassName:a,triggerClassName:l,contentClassName:n,data:r,onTabChange:o}=e,[x,m]=(0,i.useState)(r[0].tab);return(0,t.jsxs)(c.fC,{value:x,className:(0,d.cn)("w-full",s),onValueChange:e=>{m(e),null==o||o(e)},children:[(0,t.jsx)(c.aV,{className:(0,d.cn)("p-1 w-fit rounded-md gap-5 flex bg-transparent",a),children:r.map(e=>(0,t.jsx)(c.xz,{className:(0,d.cn)('rounded-[3px] text-sm py-1.5 px-0 text-black/50 font-medium data-[state="active"]:bg-black data-[state="active"]:text-slate-900 !bg-transparent dark:text-white/50 dark:data-[state="active"]:text-white',l),value:e.tab,children:e.tab},e.tab))}),r.map(e=>(0,t.jsx)(c.VY,{value:e.tab,className:(0,d.cn)("flex flex-col gap-6 outline-none",n),children:e.content},e.tab))]})}var o=a(99548),x=a(91214),m=a(33621),u=a(26504),b=a(19757),p=a(22139),v=a(59175),h=a(15506),f=a(88239),g=a(84944),j=a(44945),N=a(88501);let ValutArea=e=>{let{asset:s}=e,{vaultsState:a,stableVaultsState:l,vaultsDiscount:n}=(0,i.useContext)(f.g),r=(0,v.p)(),c=b.iK[r],o=c.find(e=>e.assetTokenSymbol==s),x=o.assetTokenSymbol,u=n[o.vault],p=u?"Discount available":"No discount",h=!u,g=a[o.vault],j=l[o.vault],{rate:k}=useDiscountRate(o),[T,A]=(0,i.useMemo)(()=>{if(o.isStable){if(!j)return["50%","50%"];let toPercent=e=>(100*Math.max(0,Math.min(1,(e-1)/1))).toFixed(2)+"%",e=(0,d.pF)(j.AARS,j.AARDecimals),s=(0,d.pF)(j.aar,j.AARDecimals);return[toPercent(s),toPercent(e)]}{if(!g)return["50%","50%"];let e=(0,d.pF)(g.AARU,g.AARDecimals),s=(0,d.pF)(g.aar,g.AARDecimals),a=(0,d.pF)(g.AARS,g.AARDecimals),t=(0,d.pF)(g.AART,g.AARDecimals),l=e/2,toPercent=s=>(100*Math.max(0,Math.min(1,(s-l)/(e-l)))).toFixed(2)+"%",n=toPercent(s);return h?[n,toPercent(a)]:[n,toPercent(t)]}},[o.isStable,g.AARU,g.aar,g.AARS,g.AART,j.AARS,j.aar,h]),S=o.isStable?(0,d.Rr)(j.aar,j.AARDecimals):(0,d.Rr)(g.aar,g.AARDecimals),y=o.isStable?(0,d.Rr)(j.AARS,j.AARDecimals):h?(0,d.Rr)(g.AARS,g.AARDecimals):(0,d.Rr)(g.AART,g.AARDecimals),w="px-2 py-1 bg-primary rounded font-medium text-black",W=(0,t.jsxs)("div",{style:{position:"relative",left:T,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-md",children:[(0,t.jsxs)("div",{className:"text-xs flex flex-col gap-2 justify-center items-center",children:[(0,t.jsx)("span",{className:"text-neutral-400 whitespace-nowrap",children:"Current AAR"}),(0,t.jsx)("span",{className:w,children:S})]}),(0,t.jsx)("svg",{width:"10",height:"8",viewBox:"0 0 10 8",xmlns:"http://www.w3.org/2000/svg",className:"fill-primary",fill:"currentColor",children:(0,t.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z"})})]}),M=(0,t.jsxs)("div",{style:{position:"relative",left:A,transform:"translate(-50%,0)"},className:"flex flex-col items-center w-fit rounded-md",children:[(0,t.jsx)("svg",{className:"rotate-180 fill-primary",width:"10",height:"8",viewBox:"0 0 10 8",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M5 7.5L0.669873 -7.57104e-07L9.33013 0L5 7.5Z"})}),(0,t.jsxs)("div",{className:"text-xs flex flex-col gap-2 justify-center items-center",children:[(0,t.jsxs)("span",{className:w,children:["AAR=",y]}),(0,t.jsx)("span",{className:"text-neutral-400 whitespace-nowrap",children:h?"Trigger discount":"Discount end"})]})]});return(0,t.jsxs)("div",{className:"bg-white border border-neutral-200 rounded-3xl flex-1 flex flex-col gap-5 justify-center p-4 w-full md:mb-[30px] dark:bg-transparent dark:border-zinc-600",children:[(0,t.jsx)("div",{className:"h-fit",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(m.c,{symbol:o.assetTokenSymbol,size:32,className:"mr-[10px] md:hidden"}),(0,t.jsx)(m.c,{symbol:o.assetTokenSymbol,size:54,className:"mr-[10px] hidden md:block"}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h3",{className:"text-md md:text-xl font-bold",children:[x," Vault"]}),(0,t.jsxs)("div",{className:"text-xs flex items-center gap-2",children:[!u&&(0,t.jsxs)("div",{className:"flex items-center text-neutral-700 dark:text-slate-50 gap-1",children:[(0,t.jsx)("div",{className:(0,N.m)("w-3 h-3 shrink-0 rounded-full",u?"bg-red-500":"bg-green-500")}),p]}),u&&(0,t.jsxs)("div",{className:"text-sm flex items-center gap-2",children:[(0,t.jsx)("div",{className:(0,N.m)("w-3 h-3 shrink-0 rounded-full bg-red-500")})," Discount Rate: ",k]})]})]})]})}),(0,t.jsxs)("div",{className:"w-full p-4 rounded-lg flex flex-col gap-2",children:[W,(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"rounded-full shrink-0 w-[3px] h-[3px] bg-[#64748B] dark:bg-primary"}),(0,t.jsx)("div",{className:"h-px flex-1 bg-[#64748B] dark:bg-primary after:content-['AAR'] after:inline-block after:text-right after:w-full after:text-xs after:text-[#64748B] dark:after:text-slate-50"}),(0,t.jsx)("div",{className:"rounded-full shrink-0 w-[3px] h-[3px] bg-[#64748B] dark:bg-primary"})]}),M]})]})};function useDiscountRate(e){let{prices:s}=(0,i.useContext)(f.g),a=(0,v.p)(),{data:t}=(0,h.D2)({abi:u.Wn,address:b.O6[a],functionName:e.isStable?"calcUsbToMarginTokensForStableVault":"calcUsbToMarginTokens",args:[e.vault,b.e_[a],(0,d.su)("1")]}),l=(0,d.ok)(t,[1]),n=(0,i.useMemo)(()=>0n==l?0n:(0,d.su)("1")*p.Pq/l,[l]),r=(0,i.useMemo)(()=>{let a=s[e.xTokenAddress];return!a||0n==a||0n==n||n>=a?"0.00%":(0,d.Jh)((a-n)*p.Pq/a,18,2)},[s[e.xTokenAddress],n]);return{rate:r,oneUsbXoutValue:l}}function LVaultsDiscount(e){let{vc:s}=e,{balances:a,prices:l,vaultsDiscount:n}=(0,i.useContext)(f.g),r=(0,v.p)(),c=(0,i.useMemo)(()=>b.iK[r].filter(e=>!e.disableIn),[r]),m=(0,i.useMemo)(()=>c.map(e=>({value:e.vault,label:e.xTokenSymbol})),[c]),[h,N]=(0,i.useState)(m[0]),k=m.find(e=>e===h)?h:m[0],T=n[s.vault],A=(0,d.ok)(l,s.xTokenAddress),S=a[b.O1[r]],[y,w]=(0,i.useState)(""),W=(0,d.su)(y),M=0n!=W&&W<=S&&T,{rate:R,oneUsbXoutValue:B}=useDiscountRate(s),C=B*W/p.Pq;return(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)(Noti,{data:"Due to fluctuations in the prices of collateral, when the AAR decreases, the protocol will offer users the opportunity to purchase xToken at a discount with ".concat(b.TW,". This means that you can engage in arbitrage.")}),(0,t.jsxs)("div",{className:"grid grid-cols-1 mt-5 gap-2 md:grid-cols-10 md:gap-8 md:mt-8",children:[(0,t.jsx)("div",{className:"w-full min-h-full col-span-4 flex flex-col gap-4",children:c.map(e=>(0,t.jsx)(ValutArea,{asset:e.assetTokenSymbol},"vault_area_".concat(e.assetTokenSymbol)))}),(0,t.jsxs)("div",{className:"w-full col-span-6 bg-white border border-neutral-200 p-4 mb-4 md:p-[30px] md:pt-[60px] rounded-3xl md:mb-[30px] dark:bg-transparent dark:border-zinc-600",children:[(0,t.jsxs)("div",{className:"flex flex-col items-center gap-2 w-full mx-auto",children:[(0,t.jsx)(x.W,{asset:b.TW,amount:y,setAmount:w,balance:S,exchange:(0,g.dq)(W*(0,d.ok)(l,b.O1[r],p.Pq)/p.Pq)}),(0,t.jsxs)("div",{className:"flex items-center justify-center w-full",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)(j.gPZ,{className:"w-6 h-6 text-neutral-500  border border-neutral-200 rounded-full my-[10px]"}),(0,t.jsx)("div",{className:"flex-1"})]}),(0,t.jsxs)("div",{className:"w-full flex-1 text-right text-neutral-700 dark:text-slate-50/60 text-md whitespace-nowrap",children:["Discount Rate: ",T?R:"--"]}),(0,t.jsx)(x.W,{asset:k.label,amount:(0,g.dq)(C),exchange:(0,g.dq)(A*C/p.Pq),readonly:!0,hasInput:!0,options:m,defaultValue:m[0],onChange:e=>{console.log(e),N(e)}})]}),(0,t.jsx)(o.v,{tx:"Swap",className:"!w-full mt-6",disabled:!M,onTxSuccess:()=>{w("")},config:{abi:u.WW,address:s.vault,functionName:"usbToMarginTokens",args:[W],enabled:M},approves:{[b.O1[r]]:W},spender:s.vault})]})]})]})}var k=a(62600),T=a(69708),A=a(6371),S=a(58409),y=a(11292);function VaultCard(e){let{vc:s}=e,{balances:a,prices:l,vaultsMode:n}=(0,i.useContext)(f.g),r=(0,v.p)(),c=b.O6[r],m=n[s.vault],[k,T]=(0,i.useState)("Mint"),[w,W]=(0,i.useMemo)(()=>{let e="Mint"==k;return 3==m?["Adjustment Model--High AAR",e?"Minting ".concat(b.TW," alone is feasible"):"Redeeming ".concat(s.xTokenSymbol," alone is feasible")]:2==m?["Adjustment Model--Low AAR",e?"Minting ".concat(s.xTokenSymbol," alone is feasible"):"Redeeming ".concat(b.TW," alone is feasible")]:["Stability Model",e?"".concat(b.TW," and ").concat(s.xTokenSymbol," will be minted in fixed ratio"):"Redemption require a fixed ration of ".concat(b.TW," and ").concat(s.xTokenSymbol)]},[m,s,k]),[M,R]=(0,i.useState)(""),[B,C]=(0,i.useState)(""),P=(0,d.ok)(l,s.assetTokenAddress),D=(0,d.ok)(l,s.xTokenAddress),F=a[s.assetTokenAddress],q=a[b.O1[r]],_=a[s.xTokenAddress],[{usbAmount:U,xAmount:V,redeemActive:E,redeemFocus:O},z]=(0,S.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:b.TW}),L=(0,i.useMemo)(()=>({contracts:[{vc:s,abi:u.Wn,address:c,functionName:"calcMintPairs",args:[s.vault,(0,d.su)(M||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcMintUsbAboveAARU",args:[s.vault,(0,d.su)(M||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcMintMarginTokensBelowAARS",args:[s.vault,(0,d.su)(M||"0")]}],watch:!0,enabled:"Mint"==k}),[s,M,k]),{data:[Z,H,I]=[void 0,void 0,void 0]}=(0,h.uX)(L),K=(0,d.ok)(Z,["result",1]),Y=(0,d.ok)(Z,["result",2]),X=(0,d.ok)(H,["result",1]),G=(0,d.ok)(I,["result",1]),{data:[J,Q]=[void 0,void 0]}=(0,h.uX)({contracts:[{vc:s,abi:u.Wn,address:c,functionName:"calcPairdMarginTokenAmount",args:[s.vault,(0,d.su)(U||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcPairedUsbAmount",args:[s.vault,(0,d.su)(V||"0")]}],query:{enabled:"Redeem"==k}}),{data:[$,ee]=[void 0,void 0]}=(0,h.uX)({contracts:[{vc:s,abi:u.Wn,address:c,functionName:"calcRedeemByMarginTokenAboveAARU",args:[s.vault,(0,d.su)(V||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcRedeemByUsbBelowAARS",args:[s.vault,(0,d.su)(U||"0")]}],query:{enabled:"Redeem"==k}}),es=(0,d.ok)(J,["result"]),ea=(0,d.ok)(Q,["result"]),et=(0,d.ok)($,["result",1]),el=(0,d.ok)(ee,["result",1]),en=E==s.xTokenSymbol,ei=E==b.TW,er=(0,i.useMemo)(()=>{let e={abi:u.WW,address:s.vault,args:[(0,d.su)(M)],value:s.assetTokenAddress==b.K8?(0,d.su)(M):0n,functionName:"mintPairs"};return B==b.TW&&(e.functionName="mintUsbAboveAARU"),B==s.xTokenSymbol&&(e.functionName="mintMarginTokensBelowAARS"),e},[m,B,M,s]),ed=B==s.xTokenSymbol?0n:B===b.TW?X:K,ec=B==b.TW?0n:B===s.xTokenSymbol?G:Y,eo=en?"0":O==b.TW?U:(0,y.d)(ea),ex=ei?"0":O==s.xTokenSymbol?V:(0,y.d)(es),em=(0,i.useMemo)(()=>({vc:s,watch:!0,abi:u.Wn,address:c,functionName:"calcPairedRedeemAssetAmount",args:[s.vault,(0,d.su)(ex||"0")]}),[s,ex]),{data:eu}=(0,h.D2)(em),eb=en?et:ei?el:(0,d.ok)(eu,[1]),ep=(0,i.useMemo)(()=>{let e={abi:u.WW,address:s.vault,functionName:E==b.TW?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:E==b.TW?[(0,d.su)(eo)]:[(0,d.su)(ex)]};return E==s.xTokenSymbol&&(e.functionName="redeemByMarginTokenAboveAARU",e.args=[(0,d.su)(ex)]),E==b.TW&&(e.functionName="redeemByUsbBelowAARS",e.args=[(0,d.su)(eo)]),e},[m,E,eo,ex,s]);return(0,t.jsxs)("div",{className:(0,N.m)("card relative h-[460px]",m>1?"!bg-violet-500/10":""),children:[(0,t.jsx)("div",{className:"page-sub text-center",children:"Advanced Panel"}),(0,t.jsx)("div",{className:"absolute top-[50px] right-6 flex flex-col items-end z-10",children:(0,t.jsxs)("div",{className:(0,N.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,t.jsx)("div",{className:(0,N.m)("w-3 h-3 rounded-full","Stability Model"==w?"bg-green-500":"bg-red-500")}),(0,t.jsx)(A.C,{node:(0,t.jsx)("div",{className:(0,N.m)("Stability Model"==w?"text-green-500":"text-red-500"),children:w}),children:W})]})}),(0,t.jsx)("div",{className:"relative flex items-center justify-between",children:(0,t.jsx)(SimpleTabs,{onTabChange:T,data:[{tab:"Mint",content:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(x.W,{asset:s.assetTokenSymbol,exchange:(0,g.dq)(P*(0,d.su)(M)/p.Pq),balance:F,amount:M,setAmount:R}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,t.jsx)(j.gPZ,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(x.W,{amount:(0,g.ZM)(ed),onClick:()=>{C(3==m?b.TW:"")},asset:b.TW,exchange:(0,g.dq)(ed),readonly:!0,disable:m<=1,selected:B===b.TW}),(0,t.jsx)(x.W,{amount:(0,g.ZM)(ec),onClick:()=>{C(2==m?s.xTokenSymbol:"")},asset:s.xTokenSymbol,exchange:(0,g.dq)(D*ec/p.Pq),readonly:!0,disable:m<=1,selected:B===s.xTokenSymbol})]}),(0,t.jsx)(o.v,{tx:"Mint",disabled:s.disableIn||0n==(0,d.su)(M)||(0,d.su)(M)>F,onTxSuccess:()=>{R("")},config:er,approves:{[s.assetTokenAddress]:(0,d.su)(M)},spender:s.vault})]})},{tab:"Redeem",content:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(x.W,{amount:eo,setAmount:e=>z({usbAmount:e}),balance:q,onClick:()=>{z({redeemActive:2==m?b.TW:"",redeemFocus:b.TW})},asset:b.TW,exchange:(0,g.dq)((0,d.su)(eo)),readonly:E==s.xTokenSymbol,selected:E===b.TW}),(0,t.jsx)(x.W,{amount:ex,setAmount:e=>z({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{z({redeemActive:3==m?s.xTokenSymbol:"",redeemFocus:s.xTokenSymbol})},exchange:(0,g.dq)((0,d.su)(ex)*D/p.Pq),balance:_,readonly:E==b.TW,selected:E===s.xTokenSymbol})]}),(0,t.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,t.jsx)(j.gPZ,{})}),(0,t.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end whitespace-nowrap",children:"Redemption Fee: 0.5%"})]}),(0,t.jsx)("div",{className:"w-full text-end"}),(0,t.jsx)(x.W,{asset:s.assetTokenSymbol,amount:(0,y.d)(eb),exchange:(0,g.dq)(P*eb/p.Pq),readonly:!0}),(0,t.jsx)(o.v,{tx:"Redeem",config:ep,disabled:ei&&0n==(0,d.su)(eo)||en&&0n==(0,d.su)(ex)||!ei&&!en&&(0n==(0,d.su)(eo)||0n==(0,d.su)(ex))||(0,d.su)(eo)>q||(0,d.su)(ex)>_,onTxSuccess:()=>{z({usbAmount:"",xAmount:""})},spender:s.vault})]})}]})})]})}var w=a(73216),W=a(76034),M=a(31040),R=a(55746),B=a(41440),C=a(48914),P=a(35664),D=a(15948),F=a(45438),q=a(47518),_=a(50548),U=a(84570),V=a(42341),E=a(12045);let O={ZUSD:"#FFD3C2",ZUSD_dark:"#FFD3C2",xiBGT:"#AFD3FF",xiBGT_dark:"#AFD3FF",HONEY:"rgba(226, 254, 182, 1)",xHONEY_dark:"#E2FEB6"},z={ZUSD:"#FFA973",xiBGT:"#93B0FF",xHONEY:"rgba(196, 241, 126, 1)"};function PointCard(e){let{symbol:s,iconSymbol:a,tit:l,sub:n,total:i,link:r}=e,d=(0,E.l)(e=>e.theme);return(0,t.jsxs)("div",{style:{boxShadow:"0px 0px 12px 0px rgba(187, 215, 144, 0.4)"},className:"rounded-2xl overflow-hidden bg-white text-base flex flex-col dark:bg-slate-950",children:[(0,t.jsxs)("div",{className:"flex md:flex-wrap items-center p-4 gap-2 dark:text-black",style:{background:O["".concat(s,"_").concat(d)]||O[s]},children:[(0,t.jsx)(m.c,{symbol:a,size:42,className:"shrink-0"}),(0,t.jsx)("div",{className:"font-semibold",children:s}),(0,t.jsxs)("div",{className:"whitespace-nowrap text-center text-sm ml-auto flex flex-col items-center flex-1",children:[(0,t.jsx)("div",{className:"rounded-full px-2 py-[2px] w-fit",style:{background:z[s]},children:l}),(0,t.jsx)("div",{className:"mt-1",children:n})]})]}),(0,t.jsxs)("div",{className:"flex justify-between p-4 whitespace-nowrap text-sm items-center gap-2",children:[(0,t.jsx)("div",{className:"font-medium text-slate-500 dark:text-slate-50/60 self-start text-xs items-center gap-1",children:(0,t.jsx)("span",{className:"font-semibold text-sm",children:i})}),r&&(0,t.jsxs)("a",{className:"underline text-slate-500 dark:text-slate-50 flex items-center gap-1",href:r.url,target:"_blank",children:[r.text," ",(0,t.jsx)(_.Ig3,{})]})]})]})}function PointCards(e){let{vc:s}=e,a=function(e){let s=(0,v.p)(),{prices:a,usbApr:t,vaultsState:l,stableVaultsState:n}=(0,i.useContext)(f.g),r=(0,W.a)(),c=(0,F.i)(),o=(0,q.m)(),x=(0,i.useMemo)(()=>{let t=[],i=e.isStable?n[e.vault].M_USB_USDC:l[e.vault].M_USB_ETH;a[b.K8],a[b.O1[s]],t.push({symbol:b.TW,iconSymbol:"Bera",tit:"APY:".concat((0,d.Jh)(o[b.O1[s]],10)," ~ ").concat((0,d.Jh)(o.USB_END,10)),sub:"~ Interest + Earning",total:"Total Minted: ".concat((0,g.dq)(i,0))});let c=e.isStable&&(0,w.RG)()?"~ ".concat(r[e.vault].toFixed(2),"x Berachain Native Yield"):"~ ".concat(r[e.vault].toFixed(2),"x Leveraged long on ").concat(e.assetTokenSymbol);return t.push({symbol:e.xTokenSymbol,iconSymbol:"Bull",tit:"Leverage the Bull",sub:c,total:"Total Minted: ".concat((0,g.dq)(i,0))}),t},[s,a,r,t,c]);return x}(s),[l,n]=(0,D.n)(e=>{let{width:s}=e;return s<970});return 0==a.length?null:(0,t.jsxs)("div",{ref:l,className:"grid grid-cols-1 md:grid-cols-2 gap-5 md:pb-[60px]",children:[!n&&a.map(e=>(0,t.jsx)(PointCard,{...e},e.symbol)),n&&(0,t.jsx)(V.tq,{spaceBetween:20,pagination:{clickable:!0,renderBullet:function(e,s){return'<div class="'+s+'"></div>'}},className:"-translate-x-[1rem] !px-4 !pb-10 !w-screen",modules:[U.tl],children:a.map(e=>(0,t.jsx)(V.o5,{children:(0,t.jsx)(PointCard,{...e})},e.symbol))})]})}var L=a(2987);function StableVaultCard(e){let{vc:s}=e,{balances:a,prices:l,stableVaultsState:n}=(0,i.useContext)(f.g),r=(0,v.p)(),c=b.O6[r],[m,k]=(0,i.useState)("Mint"),[T,w]=(0,i.useState)(""),[W,M]=(0,i.useState)(""),R=n[s.vault],B=R.aar>0&&R.aar<R.AARS,C=l[s.assetTokenAddress],P=l[s.xTokenAddress],D=a[s.assetTokenAddress],F=a[b.O1[r]],q=a[s.xTokenAddress],[{usbAmount:_,xAmount:U,redeemActive:V,redeemFocus:E},O]=(0,S.Z)({usbAmount:"",xAmount:"",redeemActive:"",redeemFocus:b.TW}),z=(0,i.useMemo)(()=>({contracts:[{vc:s,abi:u.Wn,address:c,functionName:"calcMintPairsFromStableVault",args:[s.vault,(0,d.su)(T||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcMintUsbFromStableVault",args:[s.vault,(0,d.su)(T||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,d.su)(T||"0")]}],watch:!0,enabled:"Mint"==m}),[s,T,m]),{data:[L,Z,H]=[void 0,void 0,void 0]}=(0,h.uX)(z),I=(0,d.ok)(L,["result",1]),K=(0,d.ok)(L,["result",2]),Y=(0,d.ok)(Z,["result",1]),X=(0,d.ok)(H,["result",1]),{data:[G,J]=[void 0,void 0]}=(0,h.uX)({contracts:[{vc:s,abi:u.Wn,address:c,functionName:"calcPairdMarginTokenAmountForStableVault",args:[s.vault,(0,d.su)(_||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcPairedUsbAmountForStableVault",args:[s.vault,(0,d.su)(U||"0")]}],query:{enabled:"Redeem"==m}}),{data:[Q,$]=[void 0,void 0]}=(0,h.uX)({contracts:[{vc:s,abi:u.Wn,address:c,functionName:"calcRedeemByMarginTokensFromStableVault",args:[s.vault,b.e_[r],(0,d.su)(U||"0")]},{vc:s,abi:u.Wn,address:c,functionName:"calcRedeemByUsbFromStableVault",args:[s.vault,b.e_[r],(0,d.su)(_||"0")]}],query:{enabled:"Redeem"==m}}),ee=(0,d.ok)(G,["result"]),es=(0,d.ok)(J,["result"]),ea=(0,d.ok)(Q,["result",1]),et=(0,d.ok)($,["result",1]),el=V==s.xTokenSymbol,en=V==b.TW,ei=(0,i.useMemo)(()=>{let e={abi:u.S4,address:s.vault,functionName:"mintPairs",args:[(0,d.su)(T)],value:s.assetTokenAddress==b.K8?(0,d.su)(T):0n};return W==b.TW&&(e.functionName="mintUsb"),W==s.xTokenSymbol&&(e.functionName="mintMarginTokens"),e},[W,T,s]),er=W==s.xTokenSymbol?0n:W===b.TW?Y:I,ed=W==b.TW?0n:W===s.xTokenSymbol?X:K,ec=el?"0":E==b.TW?_:(0,y.d)(es),eo=en?"0":E==s.xTokenSymbol?U:(0,y.d)(ee),ex=(0,i.useMemo)(()=>({vc:s,watch:!0,abi:u.Wn,address:c,functionName:"calcRedeemByPairsAssetAmountForStableVault",args:[s.vault,b.e_[r],(0,d.su)(eo||"0")]}),[s,eo]),{data:em}=(0,h.D2)(ex),eu=el?ea:en?et:(0,d.ok)(em,[1]),eb=(0,i.useMemo)(()=>{let e={abi:u.S4,address:s.vault,functionName:V==b.TW?"redeemByPairsWithExpectedUsbAmount":"redeemByPairsWithExpectedMarginTokenAmount",args:V==b.TW?[(0,d.su)(ec)]:[(0,d.su)(eo)]};return V==s.xTokenSymbol&&(e.functionName="redeemByMarginTokens",e.args=[(0,d.su)(eo)]),V==b.TW&&(e.functionName="redeemByUsb",e.args=[(0,d.su)(ec)]),e},[V,ec,eo,s]);return(0,t.jsxs)("div",{className:(0,N.m)("card relative h-[460px]"),children:[(0,t.jsx)("div",{className:"page-sub text-center",children:"Advanced Panel"}),(0,t.jsx)("div",{className:"absolute top-[50px] right-6 flex flex-col items-end z-10",children:(0,t.jsx)(A.C,{node:(0,t.jsxs)("div",{className:(0,N.m)("text-sm leading-5 flex items-center gap-1.5 rounded-full w-fit"),children:[(0,t.jsx)("div",{className:(0,N.m)("w-3 h-3 rounded-full",B?"bg-red-500":"bg-green-500")}),(0,t.jsx)("div",{className:(0,N.m)(B?"text-red-500":"text-green-500"),children:B?"Adjustment Model":"Stability Model"})]}),children:B?"Mint"==m?"Minting ".concat(b.TW," alone is not feasible"):"Redeeming USDBx alone is not feasible":""})}),(0,t.jsx)("div",{className:"relative flex items-center justify-between",children:(0,t.jsx)(SimpleTabs,{onTabChange:k,data:[{tab:"Mint",content:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(x.W,{asset:s.assetTokenSymbol,exchange:(0,g.dq)(C*(0,d.su)(T)/p.Pq),balance:D,amount:T,setAmount:w}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 mb-6",children:(0,t.jsx)(j.gPZ,{})}),(0,t.jsxs)("div",{className:"flex flex-col gap-8",children:[(0,t.jsx)(x.W,{amount:(0,g.ZM)(er),onClick:()=>{M(B?"":W==b.TW?"":b.TW)},asset:b.TW,exchange:(0,g.dq)(er),readonly:!0,selected:W===b.TW}),(0,t.jsx)(x.W,{amount:(0,g.ZM)(ed),onClick:()=>{M(W==s.xTokenSymbol?"":s.xTokenSymbol)},asset:s.xTokenSymbol,exchange:(0,g.dq)(P*ed/p.Pq),readonly:!0,selected:W===s.xTokenSymbol})]}),(0,t.jsx)(o.v,{tx:"Mint",disabled:s.disableIn||0n==(0,d.su)(T)||(0,d.su)(T)>D,onTxSuccess:()=>{w("")},config:ei,approves:{[s.assetTokenAddress]:(0,d.su)(T)},spender:s.vault})]})},{tab:"Redeem",content:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsx)(x.W,{amount:ec,setAmount:e=>O({usbAmount:e}),balance:F,onClick:()=>{O({redeemActive:V==b.TW?"":b.TW,redeemFocus:b.TW})},asset:b.TW,exchange:(0,g.dq)((0,d.su)(ec)),readonly:V==s.xTokenSymbol,selected:V===b.TW}),(0,t.jsx)(x.W,{amount:eo,setAmount:e=>O({xAmount:e}),asset:s.xTokenSymbol,onClick:()=>{O({redeemActive:B?"":V==s.xTokenSymbol?"":s.xTokenSymbol,redeemFocus:s.xTokenSymbol})},exchange:(0,g.dq)((0,d.su)(eo)*P/p.Pq),balance:q,readonly:V==b.TW,selected:V===s.xTokenSymbol})]}),(0,t.jsxs)("div",{className:"flex w-full items-center mb-6",children:[(0,t.jsx)("div",{className:"flex-1"}),(0,t.jsx)("div",{className:"w-8 h-8 mx-auto flex items-center justify-center text-slate-400 rounded-full border border-slate-200 ",children:(0,t.jsx)(j.gPZ,{})}),(0,t.jsx)("div",{className:"flex-1 text-sm text-slate-400 text-end whitespace-nowrap",children:"Redemption Fee: 0.5%"})]}),(0,t.jsx)("div",{className:"w-full text-end"}),(0,t.jsx)(x.W,{asset:s.assetTokenSymbol,amount:(0,y.d)(eu),exchange:(0,g.dq)(C*eu/p.Pq),readonly:!0}),(0,t.jsx)(o.v,{tx:"Redeem",config:eb,disabled:en&&0n==(0,d.su)(ec)||el&&0n==(0,d.su)(eo)||!en&&!el&&(0n==(0,d.su)(ec)||0n==(0,d.su)(eo))||(0,d.su)(ec)>F||(0,d.su)(eo)>q,onTxSuccess:()=>{O({usbAmount:"",xAmount:""})},spender:s.vault})]})}]})})]})}let Z=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#00DE9C",strokeWidth:"4"})}),H=(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:(0,t.jsx)("circle",{cx:"7",cy:"7",r:"5",fill:"white",stroke:"#FF3D3D",strokeWidth:"4"})}),I=(0,t.jsx)("div",{className:"mr-[10px]",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",children:(0,t.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"#64748B"})})});function VaultSimple(e){let{vc:s}=e,{balances:a,prices:l,vaultsMode:n,stableVaultsState:r}=(0,i.useContext)(f.g),c=(0,d.ok)(l,s.assetTokenAddress),j=n[s.vault],N=s.assetTokenSymbol,[k,T]=(0,i.useState)(""),S=(0,d.su)(k),y=s.xTokenSymbol,w=a[s.assetTokenAddress],W=r[s.vault],[M,B]=(0,i.useState)(""),C=(0,v.p)(),{data:P}=(0,h.D2)({abi:u.Wn,address:b.O6[C],functionName:s.isStable?"calcMintPairsFromStableVault":"calcMintPairs",args:[s.vault,(0,d.su)("1")]}),{data:D}=(0,h.D2)({abi:u.Wn,address:b.O6[C],functionName:"calcMintMarginTokensFromStableVault",args:[s.vault,(0,d.su)("1")],query:{enabled:s.isStable}}),F=s.isStable&&0n==W.M_USDCx?0n:(0,d.ok)(P,[1]),q=s.isStable&&0n==W.M_USDCx?(0,d.ok)(D,[1]):(0,d.ok)(P,[2]),_=a[b.O1[C]],U=a[s.xTokenAddress],V=(0,d.NA)([q>0n?U*p.Pq/q:0n,F>0n?_*p.Pq/F:0n]),E=(0,d.su)(M),O=(0,i.useMemo)(()=>{let e={abi:s.isStable?u.S4:u.WW,address:s.vault,functionName:"redeemByPairsWithExpectedMarginTokenAmount",args:[E*q/p.Pq]};return e},[j,E,q,s]);return(0,t.jsxs)("div",{className:"w-full relative flex items-center justify-between",children:[(0,t.jsx)(L.o,{trigger:(0,t.jsxs)("div",{className:"absolute w-fit h-[21px] right-2 top-3 flex items-center gap-1 cursor-pointer",children:[(0,t.jsx)(R.b9P,{className:"text-primary text-xl"}),(0,t.jsx)(A.C,{inFlex:!0,className:" text-slate-500",children:s.isStable?"The advanced panel allows for the individual Minting or Redeeming of ".concat(b.TW," and ").concat(s.xTokenSymbol,"."):"More flexible operations can be conducted using the advanced panel in adjustment mode."})]}),children:s.isStable?(0,t.jsx)(StableVaultCard,{vc:s}):(0,t.jsx)(VaultCard,{vc:s})}),(0,t.jsx)(SimpleTabs,{data:[{tab:"Deposit",content:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)(x.W,{asset:N,exchange:(0,g.dq)(c*S/p.Pq),balance:w,amount:k,setAmount:T}),(0,t.jsxs)("div",{className:"text-xs text-[#64748B] dark:text-slate-50/60 leading-[12px] flex items-center pl-[5px] mt-[6px]",children:["1 ",(0,t.jsx)(m.c,{className:"mx-1",symbol:N,size:12}),N," = ",(0,g.dq)(q)," ",(0,t.jsx)(m.c,{className:"mx-1",symbol:y,size:12})," ",N,"x +",(0,g.dq)(F)," ",(0,t.jsx)(m.c,{className:"mx-1",symbol:b.TW,size:12})," ",b.TW]}),(0,t.jsx)(o.v,{tx:"Deposit",className:(0,d.cn)(s.isStable?"":"md:mt-11","mx-auto mt-6"),disabled:s.disableIn||S<=0n||S>w,onTxSuccess:()=>{T("")},config:{abi:u.S4,address:s.vault,args:[S],value:s.assetTokenAddress==b.K8?S:0n,functionName:s.isStable&&0n==W.M_USDCx?"mintMarginTokens":"mintPairs"},approves:{[s.assetTokenAddress]:S},spender:s.vault})]})},{tab:"Withdraw",content:(0,t.jsxs)("div",{className:"mt-4",children:[(0,t.jsx)("div",{className:"flex flex-col gap-2",children:(0,t.jsx)(x.W,{amount:M,setAmount:B,balance:V,balanceTit:"Redeemable amount",asset:N,exchange:(0,g.dq)(c*E/p.Pq)})}),(0,t.jsxs)("div",{className:"text-xs text-[#64748B] dark:text-slate-50/60 leading-[12px] md:flex md:items-center md:justify-between pl-[5px] mt-[6px]",children:[(0,t.jsxs)("span",{className:"flex",children:[y," Balance：",(0,t.jsx)(m.c,{className:"mx-1",symbol:y,size:12})," ",(0,g.dq)(U)]}),(0,t.jsxs)("span",{className:(0,d.cn)("flex relative"),children:[b.TW," Balance: ",(0,t.jsx)(m.c,{className:"mx-1",symbol:b.TW,size:12})," ",(0,g.dq)(_)]})]}),!s.isStable&&(0,t.jsxs)("div",{className:"mt-2 text-center text-xs text-slate-500 dark:text-slate-50/70 relative md:text-right ",children:["Maintaining ",b.TW," balance greater than your Margin",(0,t.jsx)("br",{className:"hidden md:block"}),"Loan allows you to redeem your total Open Position"]}),(0,t.jsx)(o.v,{tx:"Withdraw",className:(0,d.cn)({"md:mt-1":!s.isStable},"mx-auto mt-6"),config:O,disabled:0n==F||0n==q||E<=0n||E>V,onTxSuccess:()=>{console.info("Redeem onSuccess:"),B("")},spender:s.vault})]})}]})]})}function LVaultSimpleWrap(e){let{vc:s}=e,a=(0,v.p)(),{balances:l,prices:n,vaultsState:r,stableVaultsState:c}=(0,i.useContext)(f.g),o=(0,W.z)(s),{address:x}=(0,B.m)(),u=r[s.vault],p=c[s.vault],h=s.isStable?p.M_USDC:u.M_ETH,j=s.isStable?p.M_USDCx:u.M_ETHx,N=s.isStable?p.M_USB_USDC:u.M_USB_ETH,k=j>0n?l[s.xTokenAddress]*h/j:0n,T=j>0n?-(l[s.xTokenAddress]*N)/j:0n,{data:S}=(0,C.p)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(PointCards,{vc:s}),(0,t.jsxs)("div",{className:"w-full flex flex-col md:flex-row gap-4",children:[(0,t.jsxs)("div",{className:"min-h-[108px] flex flex-col justify-center shrink-0",children:[x&&!s.isStable&&(0,t.jsxs)("div",{className:"card h-[84px] w-full p-[20px] shrink-0 text-[#64748B] dark:text-slate-50/60 text-xs font-medium leading-[12px] rounded-2xl mb-[10px] whitespace-nowrap",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between mb-[16px] gap-5",children:[(0,t.jsx)("div",{children:"Open Position"}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(m.c,{className:"mr-1",symbol:s.assetTokenSymbol,size:12}),(0,g.dq)(k)]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between mb-[16px] gap-5",children:[(0,t.jsxs)("div",{children:["Margin Loan",(0,t.jsxs)(A.C,{children:["Repay your margin loan to redeem ",s.assetTokenSymbol," corresponding to your open position."]})]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(m.c,{className:"mr-1",symbol:b.TW,size:12}),(0,g.dq)(T)]})]})]}),(0,t.jsxs)("div",{className:"card text-[#64748B] w-full flex-1 dark:text-slate-50/60 text-xs font-medium leading-[12px] px-[30px] py-[23px] rounded-2xl",children:[(0,t.jsxs)("div",{className:"flex items-center mb-[16px] whitespace-nowrap",children:[I,o.toFixed(2),"x"," ",(0,w.RG)()&&s.isStable?"Blast Native Yield":"Leveraged long on ".concat(s.assetTokenSymbol)]}),(0,t.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer whitespace-nowrap",onClick:()=>{s&&(null==S||S.watchAsset({type:"ERC20",options:{address:s.xTokenAddress,symbol:s.xTokenSymbol,decimals:18}}).catch(d.S3))},children:[I,"Add ",s.xTokenSymbol," to wallet"]}),(0,t.jsxs)("div",{className:"flex items-center mb-[16px] cursor-pointer whitespace-nowrap",onClick:()=>{null==S||S.watchAsset({type:"ERC20",options:{address:b.O1[a],symbol:b.TW,decimals:18}}).catch(d.S3)},children:[I,"Add ",b.TW," to wallet"]}),(0,t.jsxs)("div",{className:"flex items-center cursor-pointer whitespace-nowrap",onClick:()=>{var e,t;let l=w.Af.find(e=>e.id==a);l&&s&&open("".concat(null===(t=l.blockExplorers)||void 0===t?void 0:null===(e=t.default)||void 0===e?void 0:e.url,"/address/").concat(s.vault),"_blank")},children:[I,"View contract"]})]})]}),(0,t.jsx)("div",{className:"card w-full",children:x&&s&&42==s.vault.length?(0,t.jsx)(VaultSimple,{vc:s}):s&&42==s.vault.length?(0,t.jsx)(P.Z,{}):(0,t.jsx)(M.Z,{className:"rounded",children:"Comming soon"})})]})]})}function VaultCollapse(e){let{vc:s}=e,a=(0,T.useRouter)(),l=(0,v.p)(),{prices:n,vaultsMode:r,vaultsState:c,stableVaultsState:o}=(0,i.useContext)(f.g),x=(0,W.z)(s),u=(0,d.ok)(n,s.assetTokenAddress),h=c[s.vault],j=o[s.vault],N=s.isStable?j.M_USDC:h.M_ETH,k=s.isStable?j.M_USDCx:h.M_ETHx,S=s.isStable?j.M_USB_USDC:h.M_USB_ETH,y=(0,g.dq)(N),w=(0,g.dq)(k),M=(0,q.m)();(0,g.dq)(N*u/p.Pq);let R=(0,g.dq)(S),B=s.isStable?(0,d.Rr)(j.aar,j.AARDecimals):(0,d.Rr)(h.aar,h.AARDecimals),C=r[s.vault],P=s.xTokenSymbol,D="py-5 flex flex-col items-center gap-2 relative dark:border-border border-solid even:border-l even:border-b odd:border-b last:!border-b-0";return(0,t.jsxs)("div",{className:(0,d.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{"order-1":!s.assetTokenSymbol.includes("ETH")}),onClick:()=>a.push("/l-vaults?vault=".concat(s.vault)),children:[(0,t.jsxs)("div",{className:D,children:[(0,t.jsx)("div",{className:" text-sm font-semibold whitespace-nowrap",children:s.assetTokenSymbol}),(0,t.jsxs)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-medium",children:["$",(0,g.dq)(n[s.assetTokenAddress])]})]}),(0,t.jsxs)("div",{className:D,children:[(0,t.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Total Deposit"}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:" text-[14px] leading-[14px] font-medium ml-[5px]",children:y})})]}),(0,t.jsxs)("div",{className:D,children:[(0,t.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Status"}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:" text-[14px] leading-[14px] font-medium",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("div",{className:"mr-[10px]",children:C<=1?Z:H}),C<=1?"Stability":"Adjustment"]})})})]}),(0,t.jsxs)("div",{className:D,children:[(0,t.jsxs)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:[P,(0,t.jsx)(A.C,{children:"This is a margin token, representing open position in the vault."})]}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:" text-[14px] leading-[14px] font-medium ml-[5px]",children:w})})]}),(0,t.jsxs)("div",{className:D,children:[(0,t.jsxs)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:["AAR",(0,t.jsx)(A.C,{children:"Asset Adequacy Ratio"})]}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("span",{className:" text-[14px] leading-[14px] font-medium",children:B})})]}),(0,t.jsxs)("div",{className:D,children:[(0,t.jsxs)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:[b.TW," Debt"]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)(m.c,{className:"mx-1",symbol:b.TW,size:14}),(0,t.jsx)("span",{className:" text-[14px] leading-[14px] font-medium ml-[5px]",children:R})]})]}),(0,t.jsxs)("div",{className:(0,d.cn)(D,"col-span-2"),children:[(0,t.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Choose your side"}),(0,t.jsxs)("div",{className:"flex justify-between items-center gap-8",children:[(0,t.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,t.jsx)(m.c,{symbol:"Bera",size:36}),(0,t.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,t.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Bear Interest"}),(0,t.jsx)("span",{className:" text-[14px] leading-[14px] font-medium ml-[5px]",children:(0,d.Jh)(M[b.O1[l]],10)})]})]}),(0,t.jsxs)("div",{className:"flex flex-row-reverse gap-4 items-center",children:[(0,t.jsx)(m.c,{symbol:"Bull",size:36}),(0,t.jsxs)("div",{className:"flex flex-col items-end gap-2",children:[(0,t.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold leading-[12px] whitespace-nowrap",children:"Leverage Bull"}),(0,t.jsx)("span",{className:" text-[14px] leading-[14px] font-medium ml-[5px]",children:"".concat(x.toFixed(2),"x")})]})]})]})]})]})}var K=a(44939);let Y=["deposit","yield","discount"];function Vaults(){let e=(0,v.p)(),s=b.iK[e],a=(0,T.useSearchParams)(),i=a.get("vault"),r=a.get("tab");Y.includes(r);let d=s.find(e=>e.vault==i);return(0,t.jsx)(K.E,{children:(0,t.jsxs)("div",{className:"w-full max-w-screen-[1160px] px-4 mx-auto md:pb-8",children:[(0,t.jsx)(n.a,{}),d?(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(SimpleTabs,{listClassName:"flex-wrap mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',data:[{tab:"Deposit",content:(0,t.jsx)(LVaultSimpleWrap,{vc:d})},{tab:"Price Trigger Yield",content:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[(0,t.jsx)(l.Q,{vc:d,type:"buy"}),(0,t.jsx)(l.Q,{vc:d,type:"sell"})]})},{tab:"Discount Offer",content:(0,t.jsx)(LVaultsDiscount,{vc:d})}]})}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h2",{className:"page-title",children:"L-Vaults"}),(0,t.jsx)(Noti,{data:"Depositing assets into the Vaults"}),(0,t.jsx)(k.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-3 mt-4",children:s.map((e,s)=>(0,t.jsx)(VaultCollapse,{vc:e},"group_vault_item_".concat(s)))})]})]})})}},44939:function(e,s,a){"use strict";a.d(s,{E:function(){return PageWrap}});var t=a(31113);a(64103);var l=a(26361),n=a(69708),i=a(12045);function PageWrap(e){let{children:s,className:a}=e,r=(0,i.l)(e=>e.theme),d=(0,n.usePathname)();return(0,t.jsx)("div",{className:(0,l.cn)("min-h-[calc(100vh+1px)] h-auto pt-[80px] pb-6",a),style:{backgroundSize:"contain",background:"light"==r?"#eeeeee":"/"==d?"url(bg_home.svg) center bottom no-repeat,linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)":"linear-gradient(105.67deg, #02050E 14.41%, #1D2F23 98.84%)"},children:s})}},47518:function(e,s,a){"use strict";a.d(s,{m:function(){return useTokenApys}});var t=a(26361),l=a(88439),n=a(45438),i=a(76034),r=a(64103),d=a(88239),c=a(59175),o=a(19757),x=a(33737);function useTokenApys(){let e=(0,l.b)(()=>(0,t.Yb)({},0n)),s=(0,c.p)(),{prices:a,usbApr:m,stableVaultsState:u}=(0,r.useContext)(d.g),b=(0,i.a)(),p=(0,n.i)();return(0,r.useMemo)(()=>{let a=o.iK[s],l=(0,t.ok)(p[a[0].ptyPoolBelowAddress],"staking");e[o.O1[s]]=m.apr,e.USB_END=m.apr+l;let n=(0,x.v)("0.1",10);return a.forEach(s=>{if(s.assetTokenAddress!=o.K8){let a=b[s.vault]>1n?(0,x.v)("".concat((b[s.vault]-1).toFixed(2)),10):0n,t=(0,x.v)("1",10);e[s.xTokenAddress]=(a*(n-u[s.vault].Y*u[s.vault].aar/t)+n*t)/t}}),null},[s,a,b,m,p,u]),e}},76034:function(e,s,a){"use strict";a.d(s,{a:function(){return useValutsLeverageRatio},z:function(){return useVaultLeverageRatio}});var t=a(19757),l=a(26361),n=a(88239),i=a(64103),r=a(59175),d=a(88439);function useVaultLeverageRatio(e){let{vaultsState:s,stableVaultsState:a}=(0,i.useContext)(n.g),t=s[(null==e?void 0:e.vault)||"null"],r=a[(null==e?void 0:e.vault)||"null"],d=(null==e?void 0:e.isStable)?(0,l.pF)(r.aar,r.AARDecimals):(0,l.pF)(t.aar,t.AARDecimals);return Math.max(0,1+1/(d-1))}function useValutsLeverageRatio(){let{vaultsState:e,stableVaultsState:s}=(0,i.useContext)(n.g),a=(0,r.p)(),c=t.iK[a],o=(0,d.b)(()=>new Proxy({},{get:function(e,s){return s in e&&null!==e[s]&&void 0!==e[s]?e[s]:0}}));return c.forEach(a=>{let t=e[(null==a?void 0:a.vault)||"null"],n=s[(null==a?void 0:a.vault)||"null"],i=(null==a?void 0:a.isStable)?(0,l.pF)(n.aar,n.AARDecimals):(0,l.pF)(t.aar,t.AARDecimals);o[a.vault]=Math.max(0,1+1/(i-1))}),o}}},function(e){e.O(0,[7495,4881,7622,2466,3458,3113,5294,6121,7020,4431,283,8410,3832,9562,9738,5631,2653,1413,1578,8888,2754,8938,7093,604,1744],function(){return e(e.s=94627)}),_N_E=e.O()}]);