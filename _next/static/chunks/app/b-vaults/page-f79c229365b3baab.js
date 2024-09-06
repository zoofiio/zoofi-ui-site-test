(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,s,t){Promise.resolve().then(t.bind(t,57738))},57738:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return Vaults}});var a=t(31113),n=t(30639),l=t(4283),i=t(73417),d=t(73216),c=t(22139),r=t(15506),o=t(26361),m=t(49340),x=t(18358),u=t(84944),h=t(42487),b=t.n(h),p=t(69708),j=t(64103),v=t(85665),f=t(20265),g=t(67541),N=t(48914),k=t(32843),w=t(99548),y=t(91214),T=t(95702),B=t(75496),S=t(16738);function Switch(e){return(0,a.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)":"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)"},className:(0,o.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var s;return null===(s=e.onChange)||void 0===s?void 0:s.call(e,!e.checked)},children:(0,a.jsx)("div",{className:(0,o.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"left-[1em]":"-left-[1px]"),style:{background:e.checked?"#3B4144":"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)"}})})}var C=t(6371),P=t(718);function TupleTxt(e){return(0,a.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,a.jsx)("div",{className:(0,o.cn)("text-lg  font-medium flex items-center",e.subClassname),children:e.sub})]})}let A="max-w-4xl mx-auto w-full";function BVaultP(e){let{bvc:s}=e,[t,l]=(0,j.useState)(""),c=(0,o.su)(t),r=s.assetSymbol.includes("-"),h=r?"PT":s.pTokenSymbol,p=r?"LP":s.assetSymbol,[v,f]=(0,j.useState)(""),k=(0,o.su)(v),{bVaultsData:T}=(0,j.useContext)(m.g),B=T[s.vault],{ids:P,claimable:V}=(0,x.gz)(B),Y=B.epoches[0],E=B.userBalanceAssset||0n,R=B.userBalancePToken||0n,F=(null==Y?void 0:Y.redeemingBalance)||0n,I="Your ".concat(h," can be claimed 1:1 for ").concat(p," at the end of this Epoch"),[M]=(0,x.oU)(B),{data:D}=(0,N.p)(),renderClaimable=()=>(0,a.jsxs)("div",{className:"flex text-xs items-center gap-5",children:["Claimable: ".concat((0,u.d)(V)),(0,a.jsx)(w.v,{className:"",busyShowTxet:!1,txType:"btn-link",tx:"Claim",disabled:V<=0n,config:{abi:i.j5,address:B.vault,functionName:"batchClaimRedeemAssets",args:[P.length>40?P.slice(P.length-40):P]}})]});return(0,a.jsxs)("div",{className:(0,o.cn)("grid grid-cols-1 md:grid-cols-3 gap-5",A),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden min-h-[16.875rem]",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,a.jsx)(n.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:s.pTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsx)(TupleTxt,{tit:"APY",sub:M}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,u.d)(B.pTokenTotal-B.yTokenAmountForSwapYT),(0,a.jsx)("button",{className:"btn-link ml-auto text-black/60 dark:text-white/60 text-xs",onClick:()=>{null==D||D.watchAsset({type:"ERC20",options:{address:s.pToken,symbol:s.pTokenSymbol,decimals:18}}).catch(o.S3)},children:"Add to wallet"})]})})]})]}),(0,a.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,a.jsx)(S.x,{data:[{tab:"Mint",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(y.W,{asset:s.assetSymbol,amount:t,balance:E,setAmount:l}),(0,a.jsxs)("div",{className:"text-xs font-medium flex justify-between items-center",children:[(0,a.jsx)("span",{children:"Receive 1 ".concat(h," for every ").concat(p)}),r&&(0,a.jsx)(b(),{target:"_blank",className:"underline",href:(0,d.FN)(s.asset),children:"Get LP on BEX"})]}),(0,a.jsx)(w.v,{className:"mx-auto mt-6",tx:"Mint",disabled:c<=0n||c>E,spender:s.vault,approves:{[s.asset]:c},config:{abi:i.j5,address:s.vault,functionName:"deposit",args:[c]},onTxSuccess:()=>{l("")}})]})},{tab:"Redeem",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(y.W,{asset:s.pTokenSymbol,assetIcon:"Panda",amount:v,balance:R,setAmount:f}),Y&&Y.settled&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5",children:[(0,a.jsx)("div",{className:"text-xs font-medium",children:I}),renderClaimable()]}),(0,a.jsx)(w.v,{className:"mx-auto mt-6",tx:"Redeem",spender:null==Y?void 0:Y.redeemPool,approves:{[s.pToken]:k},disabled:Y&&k<=0n||k>R,config:{abi:i.gg,address:(null==Y?void 0:Y.redeemPool)||g.DR,functionName:"redeem",args:[k]},onTxSuccess:()=>{f("")}}),(!Y||!Y.settled)&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5 mt-5",children:[(0,a.jsxs)("div",{className:"text-xs font-medium",children:["Redemption in transit: ".concat((0,u.d)(F))," ",(0,a.jsx)(C.C,{children:"Redemption will be completed at the end of an Epoch."})]}),renderClaimable()]})]})}]})})]})}function BVaultY(e){let{bvc:s}=e,t=s.assetSymbol.includes("-");t||s.pTokenSymbol;let n=t?"YT":s.yTokenSymbol,d=t?"LP token":s.assetSymbol,[h,b]=(0,j.useState)(""),p=(0,o.su)(h),{bVaultsData:v}=(0,j.useContext)(m.g),f=v[s.vault],g=f.epoches[0],N=f.userBalanceAssset||0n,{data:T,refetch:B}=(0,k.u)({abi:i.j5,address:s.vault,functionName:"calcSwap",args:[p],query:{retry:!0}}),S=(0,r.hp)();(0,j.useEffect)(()=>{B()},[S.time]);let C=(null==g?void 0:g.vaultYTokenBalance)||0n,P=(0,o.ok)(T,"1"),V=C>0n?f.Y*c.Pq/C:0n,Y=(0,u.d)(V),E=C>P?(f.Y+p)*c.Pq/(C-P):0n,R=(0,o.Kl)(P),F=E>V&&V>0n?(E-V)*BigInt(1e10)/V:0n,I=f.yTokenAmountForSwapYT>0n?f.lockedAssetTotal*c.Pq/f.yTokenAmountForSwapYT:0n,[M]=(0,x.v7)(f);return(0,a.jsxs)("div",{className:(0,o.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",A),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,a.jsx)(l.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:s.yTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Boost bribes yield"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,a.jsxs)("span",{className:"text-4xl font-medium",children:[M,"x"]}),"Bribes Yield"]}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,u.d)(f.yTokenAmountForSwapYT),(0,a.jsxs)("span",{className:"text-xs ml-auto",children:["1",n," = Yield of ",(0,a.jsx)("br",{}),(0,u.d)(I,2)," ",d]})]})}),g&&(0,a.jsx)(TupleTxt,{tit:"Epoch ".concat(g.epochId.toString()),subClassname:"text-xs",sub:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("span",{children:[(0,o.d3)(1000n*g.startTime,"date"),"-",(0,o.d3)((g.startTime+g.duration)*1000n,"date")]}),(0,a.jsxs)("span",{className:"ml-auto",children:["~",(0,o.Y)((g.startTime+g.duration)*1000n-BigInt(new Date().getTime()),"d")," days remaining"]})]})})]})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-1",children:[(0,a.jsx)(y.W,{asset:s.assetSymbol,amount:h,balance:N,setAmount:b}),(0,a.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,a.jsx)(y.W,{asset:s.yTokenSymbol,assetIcon:"Venom",readonly:!0,disable:!0,amount:R}),(0,a.jsxs)("div",{className:"text-xs font-medium  flex justify-between",children:[(0,a.jsx)("span",{children:"Price: 1 ".concat(n,"=").concat(Y," ").concat(d)}),(0,a.jsx)("span",{children:"Price Impact: ".concat((0,o.Jh)(F,10,2))})]}),(0,a.jsxs)("div",{className:"text-xs font-medium text-black/80 dark:text-white/80",children:["1\xa0",n," represents the yield ",(0,a.jsx)("span",{className:"font-extrabold text-base",children:"at least"})," 1"," ",d,"\xa0until the end of Epoch."]}),(0,a.jsx)(w.v,{className:"mx-auto mt-6",tx:"Buy",disabled:p<=0n||p>N,config:{abi:i.j5,address:s.vault,functionName:"swap",args:[p]},approves:{[s.asset]:p},spender:s.vault,onTxSuccess:()=>{b("")}})]})]})}function BribeTit(e){return(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,a.jsx)(T.c,{symbol:"GreenDot",size:14}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){let{bvc:s}=e,[t,n]=(0,j.useState)(!0),{bVaultsData:l}=(0,j.useContext)(m.g),d=l[s.vault],r=(0,j.useMemo)(()=>t?d.epoches.filter(e=>e.bribes.reduce((e,s)=>e+s.bribeAmount,0n)>0n):d.epoches,[d.epoches,t]),[x,h]=(0,v.Z)(),[b,p]=(0,j.useState)(""),g=(0,o.su)(b),N="text-black/60 dark:text-white/60 text-sm",[k,T]=(0,j.useState)(r[0]);(0,j.useEffect)(()=>{T(r[0])},[r]);let S=(null==k?void 0:k.userBalanceYToken)||0n,onRowClick=e=>{T(r[e])},C=(null==k?void 0:k.bribes)||[],P=(0,j.useMemo)(()=>{let e=C.find(e=>e.bribeAmount>0n);return e?(0,o.Jh)(e.bribeAmount*c.Pq/e.totalRewards,18):(0,o.Jh)(0n,0n)},[C]);return(0,a.jsxs)("div",{className:(0,o.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",A),children:[(0,a.jsxs)("div",{ref:x,children:[(0,a.jsxs)("div",{className:"flex items-center gap-8 text-xl font-semibold mb-6",children:[(0,a.jsx)("span",{children:"My Pool Only"}),(0,a.jsx)(Switch,{checked:t,onChange:n})]}),(0,a.jsx)(f.aV,{className:r.length>6?"pr-5":"",width:h.width,height:h.height-52,rowHeight:e=>{let{index:s}=e;return s<r.length-1?76:56},overscanRowCount:6,rowCount:r.length,rowRenderer:function(e){let{key:s,style:t,index:n}=e;return(0,a.jsx)("div",{style:t,className:"cursor-pointer",onClick:()=>onRowClick(n),children:(0,a.jsxs)("div",{className:(0,o.cn)("flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold",n<r.length-1?"mb-[20px]":""),children:[(0,a.jsxs)("div",{className:"text-base",children:["Epoch ",r[n].epochId.toString()]}),(0,a.jsx)("div",{className:"text-xs dark:text-white/60",children:"3/4/2024~4/4/2024"})]})},s)}})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,a.jsx)("span",{className:"text-xl ",children:"Accumulated bribes"}),(0,a.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==k?void 0:k.epochId)||1n).toString()]})]}),(0,a.jsx)("div",{className:"flex-1 mt-3 rounded-lg border border-solid border-border p-4",children:(0,a.jsx)(B.ZP,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",rowClassName:"text-center",header:["","","Total","Mine",""],span:{1:2,2:1,3:1},data:C.map(e=>["",(0,a.jsx)(BribeTit,{name:e.bribeSymbol},"1"),(0,u.d)(e.totalRewards),(0,u.d)(e.bribeAmount),""])})}),(0,a.jsxs)("div",{className:"rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"font-semibold text-xs",children:[(0,a.jsxs)("div",{children:["My yToken: ",(0,a.jsx)("span",{className:(0,o.cn)(N),children:(0,u.d)(S)})]}),(0,a.jsxs)("div",{children:["Time Weighted Points:"," ",(0,a.jsx)("span",{className:(0,o.cn)(N),children:(0,u.d)(null==k?void 0:k.userBalanceYTokenSyntyetic)})]})]}),(0,a.jsxs)("div",{children:["My Share: ",(0,a.jsx)("span",{className:(0,o.cn)(N,"text-2xl"),children:P})]})]}),(0,a.jsx)(y.W,{asset:s.yTokenSymbol,assetIcon:"Venom",amount:b,balance:(null==k?void 0:k.userBalanceYToken)||0n,setAmount:p}),(0,a.jsxs)("span",{className:"text-xs mx-auto",children:["You will receive ",P," of total bribes"]}),(0,a.jsx)(w.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:g<=0n||g>S||!(null==k?void 0:k.settled),config:{abi:i.j5,address:s.vault,functionName:"claimBribes",args:[g]},onTxSuccess:()=>{p("")}})]})]})}function BVaultMint(e){let{bvc:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultP,{bvc:s}),(0,a.jsx)(BVaultY,{bvc:s})]})}function BVaultHarvest(e){let{bvc:s}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(BVaultPools,{bvc:s})})}function BVaultCard(e){let{vc:s}=e,t=(0,p.useRouter)(),[n,l]=s.assetSymbol.split("-"),{bVaultsData:i}=(0,j.useContext)(m.g),d=i[s.vault],[c]=(0,x.v7)(d),[r]=(0,x.oU)(d),h=d.epoches[0],b="Epoch ".concat(((null==h?void 0:h.epochId)||1n).toString());return(0,a.jsxs)("div",{className:(0,o.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{}),onClick:()=>t.push("/b-vaults?vault=".concat(s.vault)),children:[(0,a.jsxs)("div",{className:(0,o.cn)(P.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center"),children:[(0,a.jsx)(T.c,{symbol:s.assetSymbol,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:s.assetSymbol}),(0,a.jsx)("div",{className:" text-sm font-medium",children:s.assetSymbol.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:(0,u.d)(d.lockedAssetTotal)})]})]}),(0,P.BW)(n,0n,0n),(0,P.BW)(l,0n,0n,!0),(0,P.yP)("Status","status",b),(0,P.yP)("Reward","iBGT","iBGT",!0),(0,P.Sn)("Panda","Principal Panda",r,"Venom","Boost Venom","".concat(c,"x"))]})}function BVaultCardComming(e){let{symbol:s}=e;return(0,a.jsxs)("div",{className:(0,o.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]",{}),children:[(0,a.jsxs)("div",{className:(0,o.cn)(P.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20"),children:[(0,a.jsx)(T.c,{symbol:s,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:s}),(0,a.jsx)("div",{className:" text-sm font-medium",children:s.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:"$-"})]})]}),(0,a.jsx)("div",{className:(0,o.cn)(P.bG,"col-span-2"),children:(0,a.jsx)("div",{className:"text-xs font-semibold leading-[12px] whitespace-nowrap",children:"New Vault Comming Soon..."})})]})}var V=t(50553),Y=t(6868),E=t(44939),R=t(87031),F=t(59175),I=t(62600);let M=["mint","harvest"];function Vaults(){let e=(0,F.p)(),s=R.Fw[e];s[0];let t=(0,p.useSearchParams)(),n=t.get("vault"),l=t.get("tab");M.includes(l);let i=s.find(e=>e.vault==n);return(0,a.jsx)(E.E,{children:(0,a.jsxs)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:[(0,a.jsx)(V.a,{}),i?(0,a.jsx)(S.x,{listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",data:[{tab:"Mint",content:(0,a.jsx)(BVaultMint,{bvc:i})},{tab:"Harvest",content:(0,a.jsx)(BVaultHarvest,{bvc:i})}]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,a.jsx)(Y.K,{data:"A pendle-like product with more innovation."}),(0,a.jsx)(I.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-5 mt-4",children:c._u?(0,a.jsx)(a.Fragment,{children:s.map((e,s)=>(0,a.jsx)(BVaultCard,{vc:e},"group_vault_item_".concat(s)))}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-USDC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WBTC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WETH"})]})})]})]})})}}},function(e){e.O(0,[4881,7495,7622,3113,3458,5294,3119,8410,9912,5631,5116,648,4287,299,4138,2159,7112,9161,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);