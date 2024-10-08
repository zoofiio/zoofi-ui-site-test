(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,t,s){Promise.resolve().then(s.bind(s,22801))},22801:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Vaults}});var a=s(31113),n=s(30639),l=s(4283),r=s(70258),c=s(73216),i=s(90168),d=s(22139),o=s(15506),m=s(26361),x=s(3106),u=s(18358),p=s(84944),h=s(78321),b=s(42487),f=s.n(b),v=s(69708),j=s(64103),g=s(12485),N=s(14993),y=s(85665),w=s(20265),k=s(67541),T=s(4408),S=s(96670),B=s(30308),C=s(99548),E=s(91214),P=s(68535),V=s(64370),A=s(49041),R=s(64217),F=s(83978),D=s.n(F),Y=s(11292);let bnToNum=e=>D().round(parseFloat((0,Y.d)(BigInt(e))),5),logTrans=e=>D().round(Math.log10(90*e+1),5),revertLog=e=>D().round((Math.pow(10,e)-1)/90,5);function BvaultEpochYtPrices(e){let{bvc:t,epochId:s}=e,{data:n}=(0,V.a)({queryKey:["bvualt-epoch-yt-prices",t.vault,s],queryFn:()=>(0,P.l6)(t.vault,s),initialData:[]}),[l,r]=(0,N.Z)(!0),{options:c}=(0,j.useMemo)(()=>{let e=n.map(e=>[(0,m.d3)(1e3*e.time,"all"),l?logTrans(bnToNum(e.price)):bnToNum(e.price)]),valueFormater=e=>l?revertLog(e).toString():e.toString(),t={animation:!0,animationDuration:200,tooltip:{trigger:"axis",valueFormatter:valueFormater},grid:{top:30,bottom:30,right:20,show:!1},toolbox:{show:!1},xAxis:{type:"category",boundaryGap:!1,axisLine:{onZero:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1},max:e=>1.1*e.max,axisLabel:{formatter:valueFormater}},dataZoom:[{type:"inside",start:0,end:100,minValueSpan:10},{show:!1}],series:[{name:"YT Price",type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:"rgb(30, 202, 83)"},areaStyle:{origin:"start",color:new R.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(30, 202, 83)"},{offset:1,color:"rgba(30, 202, 83, 0.2)"}])},data:e}]};return{data:e,options:t}},[n,l]);return(0,a.jsxs)("div",{className:"card mx-auto max-w-4xl w-full",children:[(0,a.jsxs)("div",{className:"flex justify-between gap-2 items-center",children:[(0,a.jsx)("span",{className:"text-base font-bold",children:"YT Price Chart"}),(0,a.jsx)("span",{className:"text-xs font-medium dark:text-[#FBECEC]",children:"The value of YT will become ZERO at the end of the Epoch."})]}),(0,a.jsx)("div",{className:"flex gap-2 justify-end items-center mt-2",children:(0,a.jsx)("span",{className:(0,m.cn)("cursor-pointer text-xs px-1 py-0 rounded border-primary border",l?"bg-primary":"bg-transparent"),onClick:()=>r(),children:"LOG"})}),(0,a.jsx)(A.Z,{option:c,style:{height:240}})]})}var I=s(95702),M=s(75496),q=s(16738);function Switch(e){return(0,a.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)":"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)"},className:(0,m.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.checked)},children:(0,a.jsx)("div",{className:(0,m.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"-left-[1px]":"left-[1em]"),style:{background:e.checked?"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)":"#3B4144"}})})}var L=s(6371),W=s(718);function TupleTxt(e){return(0,a.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,a.jsx)("div",{className:(0,m.cn)("text-lg  font-medium flex items-center",e.subClassname),children:e.sub})]})}let H="max-w-4xl mx-auto w-full";function BVaultRedeem(e){let{bvc:t}=e,s=i.P[t.asset],n=!!s,l=n?"PT":t.pTokenSymbol,c=n?"LP":t.assetSymbol,[d,o]=(0,j.useState)(""),h=(0,m.su)(d),b=(0,u.nr)(t.vault),f=(0,u.Vw)(t.vault)[0],{ids:v,claimable:g}=(0,u.gz)(t.vault);(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n);let N=(0,x.R)(e=>e.sliceTokenStore.balances[t.pToken]||0n),y=(null==f?void 0:f.redeemingBalance)||0n,w="Your ".concat(l," can be claimed 1:1 for ").concat(c," at the end of this Epoch"),T=(0,u.R3)(t),renderClaimable=()=>(0,a.jsxs)("div",{className:"flex text-xs items-center gap-5",children:["Claimable: ".concat((0,p.d)(g)),(0,a.jsx)(C.v,{className:"",busyShowTxet:!1,txType:"btn-link",tx:"Claim",disabled:g<=0n,config:{abi:r.j5,address:t.vault,functionName:"batchClaimRedeemAssets",args:[v.length>40?v.slice(v.length-40):v]},onTxSuccess:()=>{T()}})]});return(0,a.jsxs)("div",{className:(0,m.cn)("flex flex-col gap-1"),children:[(0,a.jsx)(E.W,{asset:t.pTokenSymbol,assetIcon:"Panda",amount:d,balance:N,setAmount:o}),f&&f.settled&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5",children:[(0,a.jsx)("div",{className:"text-xs font-medium",children:w}),renderClaimable()]}),(0,a.jsx)(C.v,{className:"mx-auto mt-6",tx:"Redeem",spender:null==f?void 0:f.redeemPool,approves:{[t.pToken]:h},disabled:f&&h<=0n||h>N,config:{abi:b.closed?r.j5:r.gg,address:b.closed?t.vault:(null==f?void 0:f.redeemPool)||k.DR,functionName:"redeem",args:[h]},onTxSuccess:()=>{o(""),T()}}),(!f||!f.settled)&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5 mt-5",children:[(0,a.jsxs)("div",{className:"text-xs font-medium",children:["In Redemption: ".concat((0,p.d)(y))," ",(0,a.jsx)(L.C,{children:"Redemption will be completed at the end of an Epoch."})]}),renderClaimable()]})]})}function BVaultP(e){let{bvc:t}=e,[s,l]=(0,j.useState)(""),d=(0,m.su)(s),o=i.P[t.asset],h=!!o,b=h?"PT":t.pTokenSymbol,v=h?"LP":t.assetSymbol,g=(0,u.nr)(t.vault),N=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),[y]=(0,u.oU)(t.vault),{data:w}=(0,T.p)(),k=(0,u.R3)(t);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5",H),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden min-h-[16.875rem]",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,a.jsx)(n.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.pTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsx)(TupleTxt,{tit:"APY Est.",sub:y}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,p.d)(g.pTokenTotal),(0,a.jsx)("button",{className:"btn-link ml-auto text-black/60 dark:text-white/60 text-xs",onClick:()=>{null==w||w.watchAsset({type:"ERC20",options:{address:t.pToken,symbol:t.pTokenSymbol,decimals:18}}).catch(m.S3)},children:"Add to wallet"})]})})]})]}),(0,a.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,a.jsx)(q.x,{data:[{tab:"Mint",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(E.W,{asset:t.assetSymbol,amount:s,balance:N,setAmount:l}),(0,a.jsx)("div",{className:"text-xs font-medium flex justify-end items-center",children:h&&(0,a.jsx)(f(),{target:"_blank",className:"underline",href:(0,c.FN)(t.asset),children:"Get LP on BEX"})}),(0,a.jsx)("div",{className:"text-xs font-medium text-center",children:"Receive 1 ".concat(b," for every ").concat(v)}),(0,a.jsx)(C.v,{className:"mx-auto mt-4",tx:"Mint",disabled:d<=0n||d>N,spender:t.vault,approves:{[t.asset]:d},config:{abi:r.j5,address:t.vault,functionName:"deposit",args:[d]},onTxSuccess:()=>{l(""),k()}})]})},{tab:"Redeem",content:(0,a.jsx)(BVaultRedeem,{bvc:t})}]})})]})}function BVaultY(e){let{bvc:t}=e,s=t.assetSymbol.includes("-");s||t.pTokenSymbol;let n=s?"YT":t.yTokenSymbol,c=s?"LP token":t.assetSymbol,[i,b]=(0,j.useState)(""),f=(0,m.su)(i),{address:v}=(0,S.m)(),y=(0,u.nr)(t.vault),w=y.current,k=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),{data:T,refetch:P}=(0,B.u)({abi:r.j5,address:t.vault,functionName:"calcSwap",args:[f],query:{retry:!0}}),V=(0,o.hp)();(0,j.useEffect)(()=>{P()},[V.time]);let[A,R]=(0,N.Z)(!1),F=y.current.vaultYTokenBalance,D=(0,m.ok)(T,"1"),Y=F>0n?y.Y*d.Pq/F:0n,I=Y>0n?d.Pq*d.Pq/Y:0n,M=A?"1 ".concat(c,"=").concat((0,p.d)(I)," ").concat(n):"1 ".concat(n,"=").concat((0,p.d)(Y)," ").concat(c),q=F>D?(y.Y+f)*d.Pq/(F-D):0n,L=(0,m.Kl)(D,void 0,!0),W=q>Y&&Y>0n?(q-Y)*BigInt(1e10)/Y:0n,U=y.current.yTokenAmountForSwapYT>0n?y.lockedAssetTotal*d.Pq/y.current.yTokenAmountForSwapYT:0n,[G]=(0,u.v7)(t.vault),O=(0,u.R3)(t);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",H),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,a.jsx)(l.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.yTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Yield token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,a.jsxs)("span",{className:"text-4xl font-medium",children:[G,"x"]}),"Yield Boosted"]}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,p.d)(y.current.yTokenAmountForSwapYT),(0,a.jsxs)("span",{className:"text-xs ml-auto",children:["1",n," = Yield of ",(0,a.jsx)("br",{}),(0,p.d)(U,2)," ",c]})]})}),w&&(0,a.jsxs)("div",{className:"dark:text-white/60 text-xs whitespace-nowrap gap-1 flex w-full flex-col",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{children:"Epoch ".concat(w.epochId.toString())}),(0,a.jsxs)("span",{className:"scale-90",children:["~",(0,m.Y)((w.startTime+w.duration)*1000n-BigInt(new Date().getTime()))," remaining"]})]}),(0,a.jsx)(h.Z,{value:(e=>{let t=BigInt(Math.floor(new Date().getTime()/1e3));if(t<e.startTime)return 0;if(t-w.startTime>=w.duration)return 100;let s=(t-w.startTime)*100n/e.duration;return parseInt(s.toString())})(w),className:"mt-2 rounded-full overflow-hidden"}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"scale-90",children:(0,m.d3)(1000n*w.startTime,"all-s")}),(0,a.jsx)("span",{className:"scale-90",children:(0,m.d3)((w.startTime+w.duration)*1000n,"all-s")})]})]})]})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-1",children:[(0,a.jsx)(E.W,{asset:t.assetSymbol,amount:i,balance:k,setAmount:b}),(0,a.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,a.jsx)(E.W,{asset:t.yTokenSymbol,assetIcon:"Venom",readonly:!0,disable:!0,checkBalance:!1,amount:L}),(0,a.jsxs)("div",{className:"text-xs font-medium  flex justify-between select-none",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(g.k$E,{className:"text-sm text-primary cursor-pointer inline-block",onClick:()=>R()}),(0,a.jsx)("span",{children:"Price: ".concat(M)})]}),(0,a.jsx)("span",{children:"Price Impact: ".concat((0,m.Jh)(W,10,2))})]}),(0,a.jsxs)("div",{className:"text-xs font-medium text-black/80 dark:text-white/80",children:["1\xa0",n," represents the yield ",(0,a.jsx)("span",{className:"font-extrabold text-base",children:"at least"})," 1 ",c,"\xa0until the end of Epoch."]}),(0,a.jsx)(C.v,{className:"mx-auto mt-6",tx:"Buy",disabled:f<=0n||f>k,config:{abi:r.j5,address:t.vault,functionName:"swap",args:[f]},approves:{[t.asset]:f},spender:t.vault,onTxSuccess:()=>{b(""),O()}})]})]})}function BribeTit(e){return(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,a.jsx)(I.c,{symbol:"GreenDot",size:14}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){var t;let{bvc:s}=e,{address:n}=(0,S.m)(),[l,c]=(0,j.useState)(!1),i=(0,u.Vw)(s.vault),o=(0,j.useMemo)(()=>l?i.filter(e=>e.bribes.reduce((e,t)=>e+t.bribeAmount,0n)>0n):i,[i,l]),[x,h]=(0,y.Z)(),b="text-black/60 dark:text-white/60 text-sm",[f,v]=(0,j.useState)(null===(t=o[0])||void 0===t?void 0:t.epochId),g=(0,j.useMemo)(()=>o.find(e=>e.epochId==f),[o,f]),N=(null==g?void 0:g.userBalanceYToken)||0n,k=(null==g?void 0:g.userBalanceYTokenSyntyetic)||0n,onRowClick=e=>{var t;v(null===(t=o[e])||void 0===t?void 0:t.epochId)};(0,j.useEffect)(()=>{!f&&o.length&&onRowClick(0)},[o,f]);let T=(null==g?void 0:g.bribes)||[],B=(0,j.useMemo)(()=>{let e=T.find(e=>e.bribeAmount>0n);return e&&0n!=e.bribeTotalAmount?(0,m.Jh)(e.bribeAmount*d.Pq/e.bribeTotalAmount,18):(0,m.Jh)(0n,0n)},[T]),E=(0,u.R3)(s);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",H),children:[(0,a.jsxs)("div",{ref:x,children:[(0,a.jsxs)("div",{className:"flex items-center gap-8 text-xl font-semibold mb-6",children:[(0,a.jsx)("span",{children:"My Pool Only"}),(0,a.jsx)(Switch,{checked:l,onChange:c})]}),(0,a.jsx)(w.aV,{className:o.length>6?"pr-5":"",width:h.width,height:h.height-52,rowHeight:e=>{let{index:t}=e;return t<o.length-1?76:56},overscanRowCount:6,rowCount:o.length,rowRenderer:function(e){let{key:t,style:s,index:n}=e,l=o[n],r="".concat((0,m.d3)(1000n*l.startTime,"date"),"-").concat((0,m.d3)((l.startTime+l.duration)*1000n,"date"));return(0,a.jsx)("div",{style:s,className:"cursor-pointer",onClick:()=>onRowClick(n),children:(0,a.jsxs)("div",{className:(0,m.cn)("flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold",n<o.length-1?"mb-[20px]":""),children:[(0,a.jsxs)("div",{className:"text-base",children:["Epoch ",o[n].epochId.toString()]}),(0,a.jsx)("div",{className:"text-xs dark:text-white/60",children:r})]})},t)}})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,a.jsx)("span",{className:"text-xl ",children:"Accumulated Rewards"}),(0,a.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==g?void 0:g.epochId)||1n).toString()]})]}),(0,a.jsx)("div",{className:"flex-1 mt-3 rounded-lg border border-solid border-border p-4",children:(0,a.jsx)(M.ZP,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",rowClassName:"text-center",header:["","","Total","Mine",""],span:{1:2,2:1,3:1},data:T.map(e=>["",(0,a.jsx)(BribeTit,{name:e.bribeSymbol},"1"),(0,p.d)(e.bribeTotalAmount),(0,p.d)(e.bribeAmount),""])})}),(0,a.jsxs)("div",{className:"rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"font-semibold text-xs",children:[(0,a.jsxs)("div",{children:["My yToken: ",(0,a.jsx)("span",{className:(0,m.cn)(b),children:(0,p.d)(N)})]}),(0,a.jsxs)("div",{children:["Time Weighted Points:"," ",(0,a.jsx)("span",{className:(0,m.cn)(b),children:N>0n&&0n==k?"Reward received":(0,p.d)(k)})]})]}),(0,a.jsxs)("div",{children:["My Share: ",(0,a.jsx)("span",{className:(0,m.cn)(b,"text-2xl"),children:B})]})]}),(0,a.jsx)("span",{className:"text-xs mx-auto",children:"You can harvest at the end of Epoch"}),(0,a.jsx)(C.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:!g||!(null==g?void 0:g.settled),config:{abi:r.j5,address:s.vault,functionName:"claimBribes",args:[null==g?void 0:g.epochId]},onTxSuccess:()=>{E()}})]})]})}function BVaultMint(e){let{bvc:t}=e,s=(0,u.nr)(t.vault);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultP,{bvc:t}),(0,a.jsx)(BVaultY,{bvc:t}),s.epochCount&&(0,a.jsx)(BvaultEpochYtPrices,{bvc:t,epochId:s.epochCount})]})}function BVaultHarvest(e){let{bvc:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(BVaultPools,{bvc:t})})}function BVaultCard(e){let{vc:t}=e,s=(0,v.useRouter)(),[n,l]=t.assetSymbol.split("-"),r=(0,u.nr)(t.vault),c=i.P[t.asset],o=(0,x.R)(e=>e.sliceTokenStore.prices),h=c&&o[c.base]||0n,b=c&&o[c.quote]||0n,f=r.lpBase||0n,j=r.lpQuote||0n,g=f*h/d.Pq,N=j*b/d.Pq,y=g+N,[w]=(0,u.v7)(t.vault),[k]=(0,u.oU)(t.vault),T="Epoch ".concat(((null==r?void 0:r.epochCount)||0n).toString());return(0,a.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{}),onClick:()=>s.push("/b-vaults?vault=".concat(t.vault)),children:[(0,a.jsxs)("div",{className:(0,m.cn)(W.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center"),children:[(0,a.jsx)(I.c,{symbol:t.assetSymbol,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t.assetSymbol}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.assetSymbol.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsxs)("div",{className:"text-sm font-medium",children:["$",(0,p.d)(y,2)]})]})]}),(0,W.BW)(n,f,g),(0,W.BW)(l,j,N,!0),(0,W.yP)("Status",r.closed?"status-red":"status-green",r.closed?"Closed":T),(0,W.yP)("Reward","iBGT","iBGT",!0),(0,W.Sn)("Panda","Principal Panda",k,"Venom","Boost Venom","".concat(w,"x"))]})}function BVaultCardComming(e){let{symbol:t}=e;return(0,a.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]",{}),children:[(0,a.jsxs)("div",{className:(0,m.cn)(W.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20"),children:[(0,a.jsx)(I.c,{symbol:t,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:"$-"})]})]}),(0,a.jsx)("div",{className:(0,m.cn)(W.bG,"col-span-2"),children:(0,a.jsx)("div",{className:"text-xs font-semibold leading-[12px] whitespace-nowrap",children:"New Vault Comming Soon..."})})]})}var U=s(78403),G=s(83960),O=s(61766),Z=s(58714),_=s(2987),K=s(36602);let z=[{symbol:"HONEY",name:"HONEY Token",address:"0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03"},{symbol:"USDC",name:"USD Coin",address:"0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c"},{symbol:"WBERA",name:"BERA Token",address:"0x7507c1dc16935b82698e4c63f2746a2fcf994df8"},{symbol:"iBGT",name:"Infrared BGT",address:"0x46eFC86F0D7455F135CC9df501673739d513E982"},{symbol:"USDT",name:"Tether USD",address:"0x05D0dD5135E3eF3aDE32a9eF9Cb06e8D37A6795D"},{symbol:"DAI",name:"Decentralized USD",address:"0x806Ef538b228844c73E8E692ADCFa8Eb2fCF729c"},{symbol:"WBTC",name:"Wrapped Bitcoin",address:"0x2577D24a26f8FA19c1058a8b0106E2c7303454a4"},{symbol:"WETH",name:"Wrapped Ether",address:"0xE28AfD8c634946833e89ee3F122C06d7C537E8A8"}];function TokenSelect(e){let{tokens:t,onSelect:s}=e,n=t||z,[l,r]=(0,j.useState)(""),c=(0,K.l)(),{address:i}=(0,S.m)(),[d,o]=(0,j.useState)(["searchTokens",l,n]),u=(0,j.useMemo)(()=>D().debounce((e,t)=>{o(["searchTokens",e,t])},300,{leading:!0,maxWait:300}),[]);(0,j.useEffect)(()=>{u(l,n)},[l,n]);let{data:h}=(0,V.a)({initialData:n,queryFn:async()=>{if((0,O.U)(l)){let e=n.find(e=>e.address==l);if(e)return[e];let t=(0,U.B)(),[s]=await Promise.all([t.readContract({abi:Z.Wo,address:l,functionName:"symbol"}),t.readContract({abi:Z.Wo,address:l,functionName:"totalSupply"})]);return[{symbol:s,address:l}]}return l?n.filter(e=>{let t=l.toLowerCase(),s=!!e.symbol.toLowerCase().match(t),a=!!e.name&&!!e.name.toLowerCase().match(t);return s||a}):n},queryKey:d}),b=h||n;return(0,V.a)({queryKey:["updateBalancesForUnknowToken",n],enabled:!!i,queryFn:()=>x.w.getState().sliceTokenStore.updateTokensBalance(n.map(e=>e.address),i)}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 p-5",children:[(0,a.jsx)("div",{className:"page-sub text-center",children:"Select a token"}),(0,a.jsx)("input",{className:(0,m.cn)("bg-white dark:bg-transparent","border-slate-400  focus:border-primary","w-full h-14 text-right pr-4 pl-[8rem] font-bold text-base border-[#4A5546] border focus:border-2 text-slate-700 rounded-lg outline-none dark:text-slate-50"),placeholder:"Search by name, symbol or address",value:l,onChange:e=>r(e.target.value)}),(0,a.jsx)("div",{className:"flex flex-col overflow-y-auto h-[18.75rem]",children:b.map(e=>(0,a.jsxs)("div",{className:"flex px-4 py-2 items-center gap-4 rounded-lg cursor-pointer hover:bg-primary/20",onClick:()=>{null==s||s(e)},children:[(0,a.jsx)(I.c,{symbol:e.symbol}),(0,a.jsx)("span",{children:e.symbol}),(0,a.jsx)("span",{className:"ml-auto",children:(0,p.d)(c[e.address])})]},e.address))})]})}function BVaultAddReward(e){let{bvc:t}=e,s=(0,K.l)(),[n,l]=(0,j.useState)(z[0]),[r,c]=(0,j.useState)(""),i=s[n.address],d=(0,m.su)(r),o=(0,j.useRef)(null);return(0,a.jsxs)("div",{className:"max-w-4xl mx-auto mt-8 card",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(E.W,{asset:n.symbol,balance:s[n.address],amount:r,setAmount:c}),(0,a.jsx)(_.o,{trigger:(0,a.jsxs)("div",{ref:o,className:"absolute left-0 top-0 flex cursor-pointer justify-end items-center py-4",children:[(0,a.jsx)("span",{className:"invisible pl-12",children:n.symbol}),(0,a.jsx)(G.tv1,{className:"ml-2"})]}),children:(0,a.jsx)(TokenSelect,{onSelect:e=>{var t;l(e),null===(t=o.current)||void 0===t||t.click()}})})]}),(0,a.jsx)("button",{className:"btn-primary w-full",disabled:0n==d||d>i,onClick:()=>{},children:"Add"})]})}var J=s(6868),$=s(44939),Q=s(87031),X=s(59175),ee=s(31889),et=s(62600);let es=["mint","harvest"];function BVaultPage(e){let{bvc:t}=e,{address:s}=(0,S.m)(),n=(0,u.nr)(t.vault);(0,V.a)({queryKey:["UpdateVaultDetails",t,n],queryFn:async()=>0n!=n.epochCount&&(await x.w.getState().sliceBVaultsStore.updateEpoches(t),!0)});let l=(0,u.Vw)(t.vault);(0,V.a)({queryKey:["UpdateUserData",t,l,s],queryFn:async()=>0!=l.length&&!!s&&(console.info("epochesOld:",l),await x.w.getState().sliceUserBVaults.updateEpoches(t,s,l),!0)});let{data:c}=(0,V.a)({queryKey:["checkIsBriber",s,t],queryFn:async()=>{if(!s)return!1;let e=(0,U.B)(),a=await Promise.all([e.readContract({abi:r.j5,address:t.vault,functionName:"isBriber",args:[s]}),e.readContract({abi:r.j5,address:t.vault,functionName:"owner"}).then(e=>e==s)]);return a.includes(!0)}}),i=c&&d.hc?[{tab:n.closed?"Redeem":"Mint",content:n.closed?(0,a.jsx)("div",{className:"max-w-4xl mx-auto pt-8",children:(0,a.jsx)(BVaultRedeem,{bvc:t})}):(0,a.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,a.jsx)(BVaultHarvest,{bvc:t})},{tab:"Add Reward",content:(0,a.jsx)(BVaultAddReward,{bvc:t})}]:[{tab:n.closed?"Redeem":"Mint",content:n.closed?(0,a.jsx)("div",{className:"max-w-4xl mx-auto pt-8",children:(0,a.jsx)(BVaultRedeem,{bvc:t})}):(0,a.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,a.jsx)(BVaultHarvest,{bvc:t})}];return(0,a.jsx)(q.x,{listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",data:i})}function Vaults(){let e=(0,X.p)(),t=(0,j.useMemo)(()=>Q.Fw[e].filter(e=>e.onEnv&&e.onEnv.includes(d.Vi)),[e,d.Vi]),s=(0,v.useSearchParams)(),n=s.get("vault"),l=s.get("tab");es.includes(l);let r=t.find(e=>e.vault==n);return(0,ee.Ev)(),(0,a.jsx)($.E,{children:(0,a.jsx)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:r?(0,a.jsx)(BVaultPage,{bvc:r}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,a.jsx)(J.K,{data:"A pendle-like product with more innovation."}),(0,a.jsxs)(et.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-5 mt-4",children:[t.map((e,t)=>(0,a.jsx)(BVaultCard,{vc:e},"group_vault_item_".concat(t))),0==t.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-USDC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WBTC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WETH"})]})]})]})})})}},75496:function(e,t,s){"use strict";var a=s(31113),n=s(26361);function DefEmpty(){return(0,a.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,a.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}s(64103),t.ZP=e=>{let{header:t,data:s,span:l={},empty:r=(0,a.jsx)(DefEmpty,{}),className:c="relative min-w-full bg-transparent ",headerClassName:i,headerItemClassName:d,tbodyClassName:o="",rowClassName:m,rowStyle:x,cellClassName:u,onClickRow:p,onRowMouseHover:h}=e;return(0,a.jsxs)("table",{className:(0,n.cn)("relative min-w-full bg-transparent ",c),children:[(0,a.jsx)("thead",{className:"",children:(0,a.jsx)("tr",{className:(0,n.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",i),children:t.map((e,t)=>(0,a.jsx)("th",{colSpan:l[t],scope:"col",className:(0,n.cn)(0==l[t]?"p-0 w-0":"p-3 font-normal text-sm",d),children:e},t))})}),(0,a.jsxs)("tbody",{className:(0,n.cn)(o),children:[s.map((e,s)=>(0,a.jsx)("tr",{onClick:()=>p&&p(s),onMouseEnter:()=>h&&h(s),onMouseLeave:()=>h&&h(-1),style:"function"==typeof x?x(s):x,className:(0,n.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",p?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof m?m(s):m),children:e.map((e,r)=>r>=t.length?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsx)("td",{colSpan:l[r],className:(0,n.cn)(0==l[r]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof u?u(s,r):u),children:e},r))},s)),0===s.length&&r]})]})}}},function(e){e.O(0,[4881,7495,7622,3113,5294,4105,9955,4167,8410,652,4300,5116,3960,2653,2038,3783,2487,5061,1037,5974,7112,6735,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);