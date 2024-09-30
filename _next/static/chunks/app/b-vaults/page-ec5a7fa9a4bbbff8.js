(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,t,a){Promise.resolve().then(a.bind(a,22801))},22801:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Vaults}});var s=a(31113),n=a(30639),l=a(4283),r=a(70258),c=a(73216),i=a(90168),o=a(22139),d=a(15506),m=a(26361),x=a(3106),u=a(18358),p=a(84944),h=a(78321),b=a(42487),f=a.n(b),v=a(69708),j=a(64103),g=a(12485),N=a(14993),y=a(85665),w=a(20265),k=a(67541),T=a(4408),S=a(96670),B=a(30308),C=a(99548),E=a(91214),P=a(68535),V=a(64370),R=a(49041),A=a(64217),D=a(83978),F=a.n(D),Y=a(11292);let bnToNum=e=>F().round(parseFloat((0,Y.d)(BigInt(e))),5),logTrans=e=>F().round(Math.log10(90*e+1),5),revertLog=e=>F().round((Math.pow(10,e)-1)/90,5);function BvaultEpochYtPrices(e){let{bvc:t,epochId:a}=e,{data:n}=(0,V.a)({queryKey:["bvualt-epoch-yt-prices",t.vault,a],queryFn:()=>(0,P.l6)(t.vault,a),initialData:[]}),[l,r]=(0,N.Z)(!0),{options:c}=(0,j.useMemo)(()=>{let e=n.map(e=>[(0,m.d3)(1e3*e.time,"all"),l?logTrans(bnToNum(e.price)):bnToNum(e.price)]),valueFormater=e=>l?revertLog(e).toString():e.toString(),t={animation:!0,animationDuration:200,tooltip:{trigger:"axis",valueFormatter:valueFormater},grid:{top:30,bottom:30,right:20,show:!1},toolbox:{show:!1},xAxis:{type:"category",boundaryGap:!1,axisLine:{onZero:!1}},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1},max:e=>1.1*e.max,axisLabel:{formatter:valueFormater}},dataZoom:[{type:"inside",start:0,end:100,minValueSpan:10},{show:!1}],series:[{name:"YT Price",type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:"rgb(30, 202, 83)"},areaStyle:{origin:"start",color:new A.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(30, 202, 83)"},{offset:1,color:"rgba(30, 202, 83, 0.2)"}])},data:e}]};return{data:e,options:t}},[n,l]);return(0,s.jsxs)("div",{className:"card mx-auto max-w-4xl w-full",children:[(0,s.jsxs)("div",{className:"flex justify-between gap-2 items-center",children:[(0,s.jsx)("span",{className:"text-base font-bold",children:"YT Price Chart"}),(0,s.jsx)("span",{className:"text-xs font-medium dark:text-[#FBECEC]",children:"The value of YT will become ZERO at the end of the Epoch."})]}),(0,s.jsx)("div",{className:"flex gap-2 justify-end items-center mt-2",children:(0,s.jsx)("span",{className:(0,m.cn)("cursor-pointer text-xs px-1 py-0 rounded border-primary border",l?"bg-primary":"bg-transparent"),onClick:()=>r(),children:"LOG"})}),(0,s.jsx)(R.Z,{option:c,style:{height:240}})]})}var I=a(95702),M=a(75496),q=a(16738);function Switch(e){return(0,s.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)":"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)"},className:(0,m.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.checked)},children:(0,s.jsx)("div",{className:(0,m.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"-left-[1px]":"left-[1em]"),style:{background:e.checked?"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)":"#3B4144"}})})}var L=a(6371),W=a(718);function TupleTxt(e){return(0,s.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,s.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,s.jsx)("div",{className:(0,m.cn)("text-lg  font-medium flex items-center",e.subClassname),children:e.sub})]})}let H="max-w-4xl mx-auto w-full";function BVaultRedeem(e){let{bvc:t}=e,a=i.P[t.asset],n=!!a,l=n?"PT":t.pTokenSymbol,c=n?"LP":t.assetSymbol,[o,d]=(0,j.useState)(""),h=(0,m.su)(o),b=(0,u.nr)(t.vault),f=(0,u.Vw)(t.vault)[0],{ids:v,claimable:g}=(0,u.gz)(t.vault);(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n);let N=(0,x.R)(e=>e.sliceTokenStore.balances[t.pToken]||0n),y=(null==f?void 0:f.redeemingBalance)||0n,w="Your ".concat(l," can be claimed 1:1 for ").concat(c," at the end of this Epoch"),T=(0,u.R3)(t),renderClaimable=()=>(0,s.jsxs)("div",{className:"flex text-xs items-center gap-5",children:["Claimable: ".concat((0,p.d)(g)),(0,s.jsx)(C.v,{className:"",busyShowTxet:!1,txType:"btn-link",tx:"Claim",disabled:g<=0n,config:{abi:r.j5,address:t.vault,functionName:"batchClaimRedeemAssets",args:[v.length>40?v.slice(v.length-40):v]},onTxSuccess:()=>{T()}})]});return(0,s.jsxs)("div",{className:(0,m.cn)("flex flex-col gap-1"),children:[(0,s.jsx)(E.W,{asset:t.pTokenSymbol,assetIcon:"Panda",amount:o,balance:N,setAmount:d}),f&&f.settled&&(0,s.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5",children:[(0,s.jsx)("div",{className:"text-xs font-medium",children:w}),renderClaimable()]}),(0,s.jsx)(C.v,{className:"mx-auto mt-6",tx:"Redeem",spender:null==f?void 0:f.redeemPool,approves:{[t.pToken]:h},disabled:f&&h<=0n||h>N,config:{abi:b.closed?r.j5:r.gg,address:b.closed?t.vault:(null==f?void 0:f.redeemPool)||k.DR,functionName:"redeem",args:[h]},onTxSuccess:()=>{d(""),T()}}),(!f||!f.settled)&&(0,s.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5 mt-5",children:[(0,s.jsxs)("div",{className:"text-xs font-medium",children:["In Redemption: ".concat((0,p.d)(y))," ",(0,s.jsx)(L.C,{children:"Redemption will be completed at the end of an Epoch."})]}),renderClaimable()]})]})}function BVaultP(e){let{bvc:t}=e,[a,l]=(0,j.useState)(""),o=(0,m.su)(a),d=i.P[t.asset],h=!!d,b=h?"PT":t.pTokenSymbol,v=h?"LP":t.assetSymbol,g=(0,u.nr)(t.vault),N=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),[y]=(0,u.oU)(t.vault),{data:w}=(0,T.p)(),k=(0,u.R3)(t);return(0,s.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5",H),children:[(0,s.jsxs)("div",{className:"card !p-0 overflow-hidden min-h-[16.875rem]",children:[(0,s.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,s.jsx)(n.Z,{className:"text-[3.375rem]",showBg:!0}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("div",{className:"text-xl text-black font-semibold",children:t.pTokenSymbol}),(0,s.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,s.jsx)(TupleTxt,{tit:"APY Est.",sub:y}),(0,s.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,s.jsxs)(s.Fragment,{children:[(0,p.d)(g.pTokenTotal),(0,s.jsx)("button",{className:"btn-link ml-auto text-black/60 dark:text-white/60 text-xs",onClick:()=>{null==w||w.watchAsset({type:"ERC20",options:{address:t.pToken,symbol:t.pTokenSymbol,decimals:18}}).catch(m.S3)},children:"Add to wallet"})]})})]})]}),(0,s.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,s.jsx)(q.x,{data:[{tab:"Mint",content:(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)(E.W,{asset:t.assetSymbol,amount:a,balance:N,setAmount:l}),(0,s.jsx)("div",{className:"text-xs font-medium flex justify-end items-center",children:h&&(0,s.jsx)(f(),{target:"_blank",className:"underline",href:(0,c.FN)(t.asset),children:"Get LP on BEX"})}),(0,s.jsx)("div",{className:"text-xs font-medium text-center",children:"Receive 1 ".concat(b," for every ").concat(v)}),(0,s.jsx)(C.v,{className:"mx-auto mt-4",tx:"Mint",disabled:o<=0n||o>N,spender:t.vault,approves:{[t.asset]:o},config:{abi:r.j5,address:t.vault,functionName:"deposit",args:[o]},onTxSuccess:()=>{l(""),k()}})]})},{tab:"Redeem",content:(0,s.jsx)(BVaultRedeem,{bvc:t})}]})})]})}function BVaultY(e){let{bvc:t}=e,a=t.assetSymbol.includes("-");a||t.pTokenSymbol;let n=a?"YT":t.yTokenSymbol,c=a?"LP token":t.assetSymbol,[i,b]=(0,j.useState)(""),f=(0,m.su)(i),{address:v}=(0,S.m)(),y=(0,u.nr)(t.vault),w=y.current,k=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),{data:T,refetch:P}=(0,B.u)({abi:r.j5,address:t.vault,functionName:"calcSwap",args:[f],query:{retry:!0}}),V=(0,d.hp)();(0,j.useEffect)(()=>{P()},[V.time]);let[R,A]=(0,N.Z)(!1),D=y.pTokenTotal>y.current.totalRedeemingBalance?y.pTokenTotal-y.current.totalRedeemingBalance:0n,F=(0,m.ok)(T,"1"),Y=D>0n?y.Y*o.Pq/D:0n,I=Y>0n?o.Pq*o.Pq/Y:0n,M=R?"1 ".concat(c,"=").concat((0,p.d)(I)," ").concat(n):"1 ".concat(n,"=").concat((0,p.d)(Y)," ").concat(c),q=D>F?(y.Y+f)*o.Pq/(D-F):0n,L=(0,m.Kl)(F,void 0,!0),W=q>Y&&Y>0n?(q-Y)*BigInt(1e10)/Y:0n,U=y.current.yTokenAmountForSwapYT>0n?y.lockedAssetTotal*o.Pq/y.current.yTokenAmountForSwapYT:0n,[G]=(0,u.v7)(t.vault),O=(0,u.R3)(t);return(0,s.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",H),children:[(0,s.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,s.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,s.jsx)(l.Z,{className:"text-[3.375rem]",showBg:!0}),(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("div",{className:"text-xl text-black font-semibold",children:t.yTokenSymbol}),(0,s.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Yield token"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,s.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,s.jsxs)("span",{className:"text-4xl font-medium",children:[G,"x"]}),"Yield Boosted"]}),(0,s.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,s.jsxs)(s.Fragment,{children:[(0,p.d)(y.current.yTokenAmountForSwapYT),(0,s.jsxs)("span",{className:"text-xs ml-auto",children:["1",n," = Yield of ",(0,s.jsx)("br",{}),(0,p.d)(U,2)," ",c]})]})}),w&&(0,s.jsxs)("div",{className:"dark:text-white/60 text-xs whitespace-nowrap gap-1 flex w-full flex-col",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{children:"Epoch ".concat(w.epochId.toString())}),(0,s.jsxs)("span",{className:"scale-90",children:["~",(0,m.Y)((w.startTime+w.duration)*1000n-BigInt(new Date().getTime()))," remaining"]})]}),(0,s.jsx)(h.Z,{value:(e=>{let t=BigInt(Math.floor(new Date().getTime()/1e3));if(t<e.startTime)return 0;if(t-w.startTime>=w.duration)return 100;let a=(t-w.startTime)*100n/e.duration;return parseInt(a.toString())})(w),className:"mt-2 rounded-full overflow-hidden"}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{className:"scale-90",children:(0,m.d3)(1000n*w.startTime,"all-s")}),(0,s.jsx)("span",{className:"scale-90",children:(0,m.d3)((w.startTime+w.duration)*1000n,"all-s")})]})]})]})]}),(0,s.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-1",children:[(0,s.jsx)(E.W,{asset:t.assetSymbol,amount:i,balance:k,setAmount:b}),(0,s.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,s.jsx)(E.W,{asset:t.yTokenSymbol,assetIcon:"Venom",readonly:!0,disable:!0,checkBalance:!1,amount:L}),(0,s.jsxs)("div",{className:"text-xs font-medium  flex justify-between select-none",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(g.k$E,{className:"text-sm text-primary cursor-pointer inline-block",onClick:()=>A()}),(0,s.jsx)("span",{children:"Price: ".concat(M)})]}),(0,s.jsx)("span",{children:"Price Impact: ".concat((0,m.Jh)(W,10,2))})]}),(0,s.jsxs)("div",{className:"text-xs font-medium text-black/80 dark:text-white/80",children:["1\xa0",n," represents the yield ",(0,s.jsx)("span",{className:"font-extrabold text-base",children:"at least"})," 1 ",c,"\xa0until the end of Epoch."]}),(0,s.jsx)(C.v,{className:"mx-auto mt-6",tx:"Buy",disabled:f<=0n||f>k,config:{abi:r.j5,address:t.vault,functionName:"swap",args:[f]},approves:{[t.asset]:f},spender:t.vault,onTxSuccess:()=>{b(""),O()}})]})]})}function BribeTit(e){return(0,s.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,s.jsx)(I.c,{symbol:"GreenDot",size:14}),(0,s.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){var t;let{bvc:a}=e,{address:n}=(0,S.m)(),[l,c]=(0,j.useState)(!1),i=(0,u.Vw)(a.vault),d=(0,j.useMemo)(()=>l?i.filter(e=>e.bribes.reduce((e,t)=>e+t.bribeAmount,0n)>0n):i,[i,l]),[x,h]=(0,y.Z)(),b="text-black/60 dark:text-white/60 text-sm",[f,v]=(0,j.useState)(null===(t=d[0])||void 0===t?void 0:t.epochId),g=(0,j.useMemo)(()=>d.find(e=>e.epochId==f),[d,f]),N=(null==g?void 0:g.userBalanceYToken)||0n,k=(null==g?void 0:g.userBalanceYTokenSyntyetic)||0n,onRowClick=e=>{var t;v(null===(t=d[e])||void 0===t?void 0:t.epochId)};(0,j.useEffect)(()=>{!f&&d.length&&onRowClick(0)},[d,f]);let T=(null==g?void 0:g.bribes)||[],B=(0,j.useMemo)(()=>{let e=T.find(e=>e.bribeAmount>0n);return e&&0n!=e.bribeTotalAmount?(0,m.Jh)(e.bribeAmount*o.Pq/e.bribeTotalAmount,18):(0,m.Jh)(0n,0n)},[T]),E=(0,u.R3)(a);return(0,s.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",H),children:[(0,s.jsxs)("div",{ref:x,children:[(0,s.jsxs)("div",{className:"flex items-center gap-8 text-xl font-semibold mb-6",children:[(0,s.jsx)("span",{children:"My Pool Only"}),(0,s.jsx)(Switch,{checked:l,onChange:c})]}),(0,s.jsx)(w.aV,{className:d.length>6?"pr-5":"",width:h.width,height:h.height-52,rowHeight:e=>{let{index:t}=e;return t<d.length-1?76:56},overscanRowCount:6,rowCount:d.length,rowRenderer:function(e){let{key:t,style:a,index:n}=e,l=d[n],r="".concat((0,m.d3)(1000n*l.startTime,"date"),"-").concat((0,m.d3)((l.startTime+l.duration)*1000n,"date"));return(0,s.jsx)("div",{style:a,className:"cursor-pointer",onClick:()=>onRowClick(n),children:(0,s.jsxs)("div",{className:(0,m.cn)("flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold",n<d.length-1?"mb-[20px]":""),children:[(0,s.jsxs)("div",{className:"text-base",children:["Epoch ",d[n].epochId.toString()]}),(0,s.jsx)("div",{className:"text-xs dark:text-white/60",children:r})]})},t)}})]}),(0,s.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-2",children:[(0,s.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,s.jsx)("span",{className:"text-xl ",children:"Accumulated Rewards"}),(0,s.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==g?void 0:g.epochId)||1n).toString()]})]}),(0,s.jsx)("div",{className:"flex-1 mt-3 rounded-lg border border-solid border-border p-4",children:(0,s.jsx)(M.ZP,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",rowClassName:"text-center",header:["","","Total","Mine",""],span:{1:2,2:1,3:1},data:T.map(e=>["",(0,s.jsx)(BribeTit,{name:e.bribeSymbol},"1"),(0,p.d)(e.bribeTotalAmount),(0,p.d)(e.bribeAmount),""])})}),(0,s.jsxs)("div",{className:"rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center",children:[(0,s.jsxs)("div",{className:"font-semibold text-xs",children:[(0,s.jsxs)("div",{children:["My yToken: ",(0,s.jsx)("span",{className:(0,m.cn)(b),children:(0,p.d)(N)})]}),(0,s.jsxs)("div",{children:["Time Weighted Points:"," ",(0,s.jsx)("span",{className:(0,m.cn)(b),children:N>0n&&0n==k?"Reward received":(0,p.d)(k)})]})]}),(0,s.jsxs)("div",{children:["My Share: ",(0,s.jsx)("span",{className:(0,m.cn)(b,"text-2xl"),children:B})]})]}),(0,s.jsx)("span",{className:"text-xs mx-auto",children:"You can harvest at the end of Epoch"}),(0,s.jsx)(C.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:!g||!(null==g?void 0:g.settled),config:{abi:r.j5,address:a.vault,functionName:"claimBribes",args:[null==g?void 0:g.epochId]},onTxSuccess:()=>{E()}})]})]})}function BVaultMint(e){let{bvc:t}=e,a=(0,u.nr)(t.vault);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(BVaultP,{bvc:t}),(0,s.jsx)(BVaultY,{bvc:t}),a.epochCount&&(0,s.jsx)(BvaultEpochYtPrices,{bvc:t,epochId:a.epochCount})]})}function BVaultHarvest(e){let{bvc:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(BVaultPools,{bvc:t})})}function BVaultCard(e){let{vc:t}=e,a=(0,v.useRouter)(),[n,l]=t.assetSymbol.split("-"),r=(0,u.nr)(t.vault),c=i.P[t.asset],d=(0,x.R)(e=>e.sliceTokenStore.prices),h=c&&d[c.base]||0n,b=c&&d[c.quote]||0n,f=r.lpBase||0n,j=r.lpQuote||0n,g=f*h/o.Pq,N=j*b/o.Pq,y=g+N,[w]=(0,u.v7)(t.vault),[k]=(0,u.oU)(t.vault),T="Epoch ".concat(((null==r?void 0:r.epochCount)||0n).toString());return(0,s.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{}),onClick:()=>a.push("/b-vaults?vault=".concat(t.vault)),children:[(0,s.jsxs)("div",{className:(0,m.cn)(W.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center"),children:[(0,s.jsx)(I.c,{symbol:t.assetSymbol,size:44}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t.assetSymbol}),(0,s.jsx)("div",{className:" text-sm font-medium",children:t.assetSymbol.includes("-")?"LP Token":""})]}),(0,s.jsxs)("div",{className:"ml-auto",children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,s.jsxs)("div",{className:"text-sm font-medium",children:["$",(0,p.d)(y,2)]})]})]}),(0,W.BW)(n,f,g),(0,W.BW)(l,j,N,!0),(0,W.yP)("Status",r.closed?"status-red":"status-green",r.closed?"Closed":T),(0,W.yP)("Reward","iBGT","iBGT",!0),(0,W.Sn)("Panda","Principal Panda",k,"Venom","Boost Venom","".concat(w,"x"))]})}function BVaultCardComming(e){let{symbol:t}=e;return(0,s.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]",{}),children:[(0,s.jsxs)("div",{className:(0,m.cn)(W.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20"),children:[(0,s.jsx)(I.c,{symbol:t,size:44}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t}),(0,s.jsx)("div",{className:" text-sm font-medium",children:t.includes("-")?"LP Token":""})]}),(0,s.jsxs)("div",{className:"ml-auto",children:[(0,s.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,s.jsx)("div",{className:"text-sm font-medium",children:"$-"})]})]}),(0,s.jsx)("div",{className:(0,m.cn)(W.bG,"col-span-2"),children:(0,s.jsx)("div",{className:"text-xs font-semibold leading-[12px] whitespace-nowrap",children:"New Vault Comming Soon..."})})]})}var U=a(78403),G=a(83960),O=a(61766),Z=a(58714),_=a(2987),K=a(36602);let z=[{symbol:"HONEY",name:"HONEY Token",address:"0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03"},{symbol:"USDC",name:"USD Coin",address:"0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c"},{symbol:"WBERA",name:"BERA Token",address:"0x7507c1dc16935b82698e4c63f2746a2fcf994df8"},{symbol:"iBGT",name:"Infrared BGT",address:"0x46eFC86F0D7455F135CC9df501673739d513E982"},{symbol:"USDT",name:"Tether USD",address:"0x05D0dD5135E3eF3aDE32a9eF9Cb06e8D37A6795D"},{symbol:"DAI",name:"Decentralized USD",address:"0x806Ef538b228844c73E8E692ADCFa8Eb2fCF729c"},{symbol:"WBTC",name:"Wrapped Bitcoin",address:"0x2577D24a26f8FA19c1058a8b0106E2c7303454a4"},{symbol:"WETH",name:"Wrapped Ether",address:"0xE28AfD8c634946833e89ee3F122C06d7C537E8A8"}];function TokenSelect(e){let{tokens:t,onSelect:a}=e,n=t||z,[l,r]=(0,j.useState)(""),c=(0,K.l)(),{address:i}=(0,S.m)(),o=(0,j.useMemo)(()=>F().debounce(async()=>{if(!(0,O.U)(l))return n.filter(e=>{let t=l.toLowerCase(),a=!!e.symbol.toLowerCase().match(t),s=!!e.name&&!!e.name.toLowerCase().match(t);return a||s});{let e=n.find(e=>e.address==l);if(e)return[e];let t=(0,U.B)(),[a]=await Promise.all([t.readContract({abi:Z.Wo,address:l,functionName:"symbol"}),t.readContract({abi:Z.Wo,address:l,functionName:"totalSupply"})]);return[{symbol:a,address:l}]}},300),[]),{data:d}=(0,V.a)({initialData:n,queryFn:o,queryKey:["searchTokens",l,n]});return(0,V.a)({queryKey:["updateBalancesForUnknowToken",n],enabled:!!i,queryFn:()=>x.w.getState().sliceTokenStore.updateTokensBalance(n.map(e=>e.address),i)}),(0,s.jsxs)("div",{className:"flex flex-col gap-4 p-5",children:[(0,s.jsx)("div",{className:"page-sub text-center",children:"Select a token"}),(0,s.jsx)("input",{className:(0,m.cn)("bg-white dark:bg-transparent","border-slate-400  focus:border-primary","w-full h-14 text-right pr-4 pl-[8rem] font-bold text-2xl border-[#4A5546] border focus:border-2 text-slate-700 rounded-lg outline-none dark:text-slate-50"),placeholder:"Search by name, symbol or address",value:l,onChange:e=>r(e.target.value)}),(0,s.jsx)("div",{className:"flex flex-col overflow-y-auto h-[18.75rem]",children:(d||n).map(e=>(0,s.jsxs)("div",{className:"flex px-4 py-2 items-center gap-4 rounded-lg cursor-pointer hover:bg-primary/20",onClick:()=>{null==a||a(e)},children:[(0,s.jsx)(I.c,{symbol:e.symbol}),(0,s.jsx)("span",{children:e.symbol}),(0,s.jsx)("span",{className:"ml-auto",children:(0,p.d)(c[e.address])})]},e.address))})]})}function BVaultAddReward(e){let{bvc:t}=e,a=(0,K.l)(),[n,l]=(0,j.useState)(z[0]),[r,c]=(0,j.useState)(""),i=a[n.address],o=(0,m.su)(r),d=(0,j.useRef)(null);return(0,s.jsxs)("div",{className:"max-w-4xl mx-auto mt-8 card",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(E.W,{asset:n.symbol,balance:a[n.address],amount:r,setAmount:c}),(0,s.jsx)(_.o,{trigger:(0,s.jsx)("div",{ref:d,className:"absolute left-0 top-0 flex cursor-pointer justify-end items-center w-[6.25rem] py-4",children:(0,s.jsx)(G.tv1,{})}),children:(0,s.jsx)(TokenSelect,{onSelect:e=>{var t;l(e),null===(t=d.current)||void 0===t||t.click()}})})]}),(0,s.jsx)("button",{className:"btn-primary w-full",disabled:0n==o||o>i,onClick:()=>{},children:"Add"})]})}var J=a(6868),$=a(44939),Q=a(87031),X=a(59175),ee=a(31889),et=a(62600);let ea=["mint","harvest"];function BVaultPage(e){let{bvc:t}=e,{address:a}=(0,S.m)(),n=(0,u.nr)(t.vault);(0,V.a)({queryKey:["UpdateVaultDetails",t,n],queryFn:async()=>0n!=n.epochCount&&(await x.w.getState().sliceBVaultsStore.updateEpoches(t),!0)});let l=(0,u.Vw)(t.vault);(0,V.a)({queryKey:["UpdateUserData",t,l,a],queryFn:async()=>0!=l.length&&!!a&&(console.info("epochesOld:",l),await x.w.getState().sliceUserBVaults.updateEpoches(t,a,l),!0)});let{data:c}=(0,V.a)({queryKey:["checkIsBriber",a,t],queryFn:async()=>{if(!a)return!1;let e=(0,U.B)(),s=await Promise.all([e.readContract({abi:r.j5,address:t.vault,functionName:"isBriber",args:[a]}),e.readContract({abi:r.j5,address:t.vault,functionName:"owner"}).then(e=>e==a)]);return s.includes(!0)}}),i=c&&o.hc?[{tab:n.closed?"Redeem":"Mint",content:n.closed?(0,s.jsx)("div",{className:"max-w-4xl mx-auto pt-8",children:(0,s.jsx)(BVaultRedeem,{bvc:t})}):(0,s.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,s.jsx)(BVaultHarvest,{bvc:t})},{tab:"Add Reward",content:(0,s.jsx)(BVaultAddReward,{bvc:t})}]:[{tab:n.closed?"Redeem":"Mint",content:n.closed?(0,s.jsx)("div",{className:"max-w-4xl mx-auto pt-8",children:(0,s.jsx)(BVaultRedeem,{bvc:t})}):(0,s.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,s.jsx)(BVaultHarvest,{bvc:t})}];return(0,s.jsx)(q.x,{listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",data:i})}function Vaults(){let e=(0,X.p)(),t=(0,j.useMemo)(()=>Q.Fw[e].filter(e=>e.onEnv&&e.onEnv.includes(o.Vi)),[e,o.Vi]),a=(0,v.useSearchParams)(),n=a.get("vault"),l=a.get("tab");ea.includes(l);let r=t.find(e=>e.vault==n);return(0,ee.Ev)(),(0,s.jsx)($.E,{children:(0,s.jsx)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:r?(0,s.jsx)(BVaultPage,{bvc:r}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,s.jsx)(J.K,{data:"A pendle-like product with more innovation."}),(0,s.jsxs)(et.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-5 mt-4",children:[t.map((e,t)=>(0,s.jsx)(BVaultCard,{vc:e},"group_vault_item_".concat(t))),0==t.length&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(BVaultCardComming,{symbol:"HONEY-USDC"}),(0,s.jsx)(BVaultCardComming,{symbol:"HONEY-WBTC"}),(0,s.jsx)(BVaultCardComming,{symbol:"HONEY-WETH"})]})]})]})})})}},75496:function(e,t,a){"use strict";var s=a(31113),n=a(26361);function DefEmpty(){return(0,s.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,s.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}a(64103),t.ZP=e=>{let{header:t,data:a,span:l={},empty:r=(0,s.jsx)(DefEmpty,{}),className:c="relative min-w-full bg-transparent ",headerClassName:i,headerItemClassName:o,tbodyClassName:d="",rowClassName:m,rowStyle:x,cellClassName:u,onClickRow:p,onRowMouseHover:h}=e;return(0,s.jsxs)("table",{className:(0,n.cn)("relative min-w-full bg-transparent ",c),children:[(0,s.jsx)("thead",{className:"",children:(0,s.jsx)("tr",{className:(0,n.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",i),children:t.map((e,t)=>(0,s.jsx)("th",{colSpan:l[t],scope:"col",className:(0,n.cn)(0==l[t]?"p-0 w-0":"p-3 font-normal text-sm",o),children:e},t))})}),(0,s.jsxs)("tbody",{className:(0,n.cn)(d),children:[a.map((e,a)=>(0,s.jsx)("tr",{onClick:()=>p&&p(a),onMouseEnter:()=>h&&h(a),onMouseLeave:()=>h&&h(-1),style:"function"==typeof x?x(a):x,className:(0,n.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",p?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof m?m(a):m),children:e.map((e,r)=>r>=t.length?(0,s.jsx)(s.Fragment,{children:e}):(0,s.jsx)("td",{colSpan:l[r],className:(0,n.cn)(0==l[r]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof u?u(a,r):u),children:e},r))},a)),0===a.length&&r]})]})}}},function(e){e.O(0,[4881,7495,7622,3113,5294,4105,9955,4167,8410,652,4300,5116,3960,2653,2038,3783,2487,5061,1037,5974,7112,6735,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);