(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9102],{92537:function(e,t,s){Promise.resolve().then(s.bind(s,9839))},9839:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return Vaults}});var a=s(31113),n=s(30639),l=s(4283),r=s(70258),i=s(73216),c=s(90168),o=s(22139),d=s(15506),m=s(26361),x=s(3106),u=s(18358),p=s(84944),h=s(78321),b=s(42487),v=s.n(b),f=s(69708),j=s(64103),g=s(12485),N=s(14993),w=s(85665),y=s(20265),k=s(67541),T=s(4408),S=s(96670),B=s(30308),C=s(99548),P=s(91214),V=s(68535),E=s(64370),R=s(49041),A=s(64217),Y=s(83978),F=s.n(Y),M=s(11292);let bnToNum=e=>F().round(parseFloat((0,M.d)(BigInt(e))),5),logTrans=e=>F().round(Math.log10(1e4*e),5),revertLog=e=>F().round(Math.pow(10,e)/1e4,5);function BvaultEpochYtPrices(e){let{bvc:t,epochId:s}=e,{data:n}=(0,E.a)({queryKey:["bvualt-epoch-yt-prices",t.vault,s],queryFn:()=>(0,V.l6)(t.vault,s),initialData:[]}),[l,r]=(0,N.Z)(!0),{options:i}=(0,j.useMemo)(()=>{let e=n.map(e=>[(0,m.d3)(1e3*e.time,"all"),l?logTrans(bnToNum(e.price)):bnToNum(e.price)]),valueFormater=e=>l?revertLog(e).toString():e.toString(),t={animation:!0,animationDuration:200,tooltip:{trigger:"axis",valueFormatter:valueFormater},grid:{top:30,bottom:30,right:20,show:!1},toolbox:{show:!1},xAxis:{type:"category",boundaryGap:!1},yAxis:{type:"value",boundaryGap:[0,"100%"],splitLine:{show:!1},axisLabel:{formatter:valueFormater}},dataZoom:[{type:"inside",start:0,end:100,minValueSpan:10},{show:!1}],series:[{name:"YT Price",type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:"rgb(30, 202, 83)"},areaStyle:{color:new A.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgb(30, 202, 83)"},{offset:1,color:"rgba(30, 202, 83, 0.2)"}])},data:e}]};return{data:e,options:t}},[n,l]);return(0,a.jsxs)("div",{className:"card mx-auto max-w-4xl w-full",children:[(0,a.jsxs)("div",{className:"flex justify-between gap-2 items-center",children:[(0,a.jsx)("span",{className:"text-base font-bold",children:"YT Price Chart"}),(0,a.jsx)("span",{className:"text-xs font-medium dark:text-[#FBECEC]",children:"The value of YT will become ZERO at the end of the Epoch."})]}),(0,a.jsx)("div",{className:"flex gap-2 justify-end items-center mt-2",children:(0,a.jsx)("span",{className:(0,m.cn)("cursor-pointer text-xs px-1 py-0 rounded border-primary border",l?"bg-primary":"bg-transparent"),onClick:()=>r(),children:"LOG"})}),(0,a.jsx)(R.Z,{option:i,style:{height:240}})]})}var I=s(95702),D=s(75496),q=s(16738);function Switch(e){return(0,a.jsx)("div",{style:{padding:1,border:"1px solid transparent",backgroundRepeat:"no-repeat",backgroundClip:"padding-box,border-box",backgroundOrigin:"padding-box,border-box",backgroundImage:e.checked?"radial-gradient(#0B1215,#0B1215),radial-gradient(122.5% 122.5% at 52.9% 16.25%, #15D264 0%, #2CBD35 36.26%, #DCF45D 92.54%)":"radial-gradient(#0A1114,#0A1114),radial-gradient(#4A5546,#4A5546)"},className:(0,m.cn)("relative h-[1em] w-[2.5em] cursor-pointer rounded-[0.4em] text-xl"),onClick:()=>{var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.checked)},children:(0,a.jsx)("div",{className:(0,m.cn)("transition-all h-full w-[1.5em] absolute top-0 rounded-[0.4em]",e.checked?"-left-[1px]":"left-[1em]"),style:{background:e.checked?"radial-gradient(76.25% 76.25% at 50.3% 23.75%, #1BCD59 0%, #B3E854 100%)":"#3B4144"}})})}var L=s(6371),G=s(718);function TupleTxt(e){return(0,a.jsxs)("div",{className:"flex flex-col gap-0.5",children:[(0,a.jsx)("div",{className:"text-xs dark:text-white/60 font-medium",children:e.tit}),(0,a.jsx)("div",{className:(0,m.cn)("text-lg  font-medium flex items-center",e.subClassname),children:e.sub})]})}let Z="max-w-4xl mx-auto w-full";function BVaultRedeem(e){let{bvc:t}=e,s=c.P[t.asset],n=!!s,l=n?"PT":t.pTokenSymbol,i=n?"LP":t.assetSymbol,[o,d]=(0,j.useState)(""),h=(0,m.su)(o);(0,u.nr)(t.vault);let b=(0,u.Vw)(t.vault)[0],{ids:v,claimable:f}=(0,u.gz)(t.vault);(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n);let g=(0,x.R)(e=>e.sliceTokenStore.balances[t.pToken]||0n),N=(null==b?void 0:b.redeemingBalance)||0n,w="Your ".concat(l," can be claimed 1:1 for ").concat(i," at the end of this Epoch"),y=(0,u.R3)(t),renderClaimable=()=>(0,a.jsxs)("div",{className:"flex text-xs items-center gap-5",children:["Claimable: ".concat((0,p.d)(f)),(0,a.jsx)(C.v,{className:"",busyShowTxet:!1,txType:"btn-link",tx:"Claim",disabled:f<=0n,config:{abi:r.j5,address:t.vault,functionName:"batchClaimRedeemAssets",args:[v.length>40?v.slice(v.length-40):v]},onTxSuccess:()=>{y()}})]});return(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(P.W,{asset:t.pTokenSymbol,assetIcon:"Panda",amount:o,balance:g,setAmount:d}),b&&b.settled&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5",children:[(0,a.jsx)("div",{className:"text-xs font-medium",children:w}),renderClaimable()]}),(0,a.jsx)(C.v,{className:"mx-auto mt-6",tx:"Redeem",spender:null==b?void 0:b.redeemPool,approves:{[t.pToken]:h},disabled:b&&h<=0n||h>g,config:{abi:r.gg,address:(null==b?void 0:b.redeemPool)||k.DR,functionName:"redeem",args:[h]},onTxSuccess:()=>{d(""),y()}}),(!b||!b.settled)&&(0,a.jsxs)("div",{className:"flex flex-wrap justify-between items-center h-5 mt-5",children:[(0,a.jsxs)("div",{className:"text-xs font-medium",children:["In Redemption: ".concat((0,p.d)(N))," ",(0,a.jsx)(L.C,{children:"Redemption will be completed at the end of an Epoch."})]}),renderClaimable()]})]})}function BVaultP(e){let{bvc:t}=e,[s,l]=(0,j.useState)(""),o=(0,m.su)(s),d=c.P[t.asset],h=!!d,b=h?"PT":t.pTokenSymbol,f=h?"LP":t.assetSymbol,g=(0,u.nr)(t.vault),N=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),[w]=(0,u.oU)(t.vault),{data:y}=(0,T.p)(),k=(0,u.R3)(t);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5",Z),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden min-h-[16.875rem]",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#A3D395] gap-5",children:[(0,a.jsx)(n.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.pTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Interest bearing rebase principal token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsx)(TupleTxt,{tit:"APY Est.",sub:w}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,p.d)(g.pTokenTotal),(0,a.jsx)("button",{className:"btn-link ml-auto text-black/60 dark:text-white/60 text-xs",onClick:()=>{null==y||y.watchAsset({type:"ERC20",options:{address:t.pToken,symbol:t.pTokenSymbol,decimals:18}}).catch(m.S3)},children:"Add to wallet"})]})})]})]}),(0,a.jsx)("div",{className:"md:col-span-2 card !p-4",children:(0,a.jsx)(q.x,{data:[{tab:"Mint",content:(0,a.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,a.jsx)(P.W,{asset:t.assetSymbol,amount:s,balance:N,setAmount:l}),(0,a.jsxs)("div",{className:"text-xs font-medium flex justify-between items-center",children:[(0,a.jsx)("span",{children:"Receive 1 ".concat(b," for every ").concat(f)}),h&&(0,a.jsx)(v(),{target:"_blank",className:"underline",href:(0,i.FN)(t.asset),children:"Get LP on BEX"})]}),(0,a.jsx)(C.v,{className:"mx-auto mt-6",tx:"Mint",disabled:o<=0n||o>N,spender:t.vault,approves:{[t.asset]:o},config:{abi:r.j5,address:t.vault,functionName:"deposit",args:[o]},onTxSuccess:()=>{l(""),k()}})]})},{tab:"Redeem",content:(0,a.jsx)(BVaultRedeem,{bvc:t})}]})})]})}function BVaultY(e){let{bvc:t}=e,s=t.assetSymbol.includes("-");s||t.pTokenSymbol;let n=s?"YT":t.yTokenSymbol,i=s?"LP token":t.assetSymbol,[c,b]=(0,j.useState)(""),v=(0,m.su)(c),{address:f}=(0,S.m)(),w=(0,u.nr)(t.vault),y=(0,u.Vw)(t.vault)[0],k=(0,x.R)(e=>e.sliceTokenStore.balances[t.asset]||0n),{data:T,refetch:V}=(0,B.u)({abi:r.j5,address:t.vault,functionName:"calcSwap",args:[v],query:{retry:!0}}),E=(0,d.hp)();(0,j.useEffect)(()=>{V()},[E.time]);let[R,A]=(0,N.Z)(!1),Y=(null==y?void 0:y.vaultYTokenBalance)||0n,F=(0,m.ok)(T,"1"),M=Y>0n?w.Y*o.Pq/Y:0n,I=M>0n?o.Pq*o.Pq/M:0n,D=R?"1 ".concat(i,"=").concat((0,p.d)(I)," ").concat(n):"1 ".concat(n,"=").concat((0,p.d)(M)," ").concat(i),q=Y>F?(w.Y+v)*o.Pq/(Y-F):0n,L=(0,m.Kl)(F),G=q>M&&M>0n?(q-M)*BigInt(1e10)/M:0n,O=w.current.yTokenAmountForSwapYT>0n?w.lockedAssetTotal*o.Pq/w.current.yTokenAmountForSwapYT:0n,[_]=(0,u.v7)(t.vault),H=(0,u.R3)(t);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",Z),children:[(0,a.jsxs)("div",{className:"card !p-0 overflow-hidden",children:[(0,a.jsxs)("div",{className:"flex p-5 bg-[#F0D187] gap-5",children:[(0,a.jsx)(l.Z,{className:"text-[3.375rem]",showBg:!0}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"text-xl text-black font-semibold",children:t.yTokenSymbol}),(0,a.jsx)("div",{className:"text-xs text-black/60 font-medium",children:"Yield token"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col p-5 gap-5",children:[(0,a.jsxs)("div",{className:"text-base font-semibold flex gap-5 items-end",children:[(0,a.jsxs)("span",{className:"text-4xl font-medium",children:[_,"x"]}),"Yield Boosted"]}),(0,a.jsx)(TupleTxt,{tit:"Total Minted",sub:(0,a.jsxs)(a.Fragment,{children:[(0,p.d)(w.current.yTokenAmountForSwapYT),(0,a.jsxs)("span",{className:"text-xs ml-auto",children:["1",n," = Yield of ",(0,a.jsx)("br",{}),(0,p.d)(O,2)," ",i]})]})}),y&&(0,a.jsxs)("div",{className:"dark:text-white/60 text-xs whitespace-nowrap gap-1 flex w-full flex-col",children:[(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{children:"Epoch ".concat(y.epochId.toString())}),(0,a.jsxs)("span",{className:"scale-90",children:["~",(0,m.Y)((y.startTime+y.duration)*1000n-BigInt(new Date().getTime()))," remaining"]})]}),(0,a.jsx)(h.Z,{value:(e=>{let t=BigInt(Math.floor(new Date().getTime()/1e3));if(t<e.startTime)return 0;if(t-y.startTime>=y.duration)return 100;let s=(t-y.startTime)*100n/e.duration;return parseInt(s.toString())})(y),className:"mt-2 rounded-full overflow-hidden"}),(0,a.jsxs)("div",{className:"flex justify-between items-center",children:[(0,a.jsx)("span",{className:"scale-90",children:(0,m.d3)(1000n*y.startTime,"all-s")}),(0,a.jsx)("span",{className:"scale-90",children:(0,m.d3)((y.startTime+y.duration)*1000n,"all-s")})]})]})]})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-1",children:[(0,a.jsx)(P.W,{asset:t.assetSymbol,amount:c,balance:k,setAmount:b}),(0,a.jsx)("div",{className:"text-base font-bold my-2",children:"Receive"}),(0,a.jsx)(P.W,{asset:t.yTokenSymbol,assetIcon:"Venom",readonly:!0,disable:!0,amount:L}),(0,a.jsxs)("div",{className:"text-xs font-medium  flex justify-between select-none",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(g.k$E,{className:"text-sm text-primary cursor-pointer inline-block",onClick:()=>A()}),(0,a.jsx)("span",{children:"Price: ".concat(D)})]}),(0,a.jsx)("span",{children:"Price Impact: ".concat((0,m.Jh)(G,10,2))})]}),(0,a.jsxs)("div",{className:"text-xs font-medium text-black/80 dark:text-white/80",children:["1\xa0",n," represents the yield ",(0,a.jsx)("span",{className:"font-extrabold text-base",children:"at least"})," 1 ",i,"\xa0until the end of Epoch."]}),(0,a.jsx)(C.v,{className:"mx-auto mt-6",tx:"Buy",disabled:v<=0n||v>k,config:{abi:r.j5,address:t.vault,functionName:"swap",args:[v]},approves:{[t.asset]:v},spender:t.vault,onTxSuccess:()=>{b(""),H()}})]})]})}function BribeTit(e){return(0,a.jsxs)("div",{className:"flex items-center justify-center gap-3",children:[(0,a.jsx)(I.c,{symbol:"GreenDot",size:14}),(0,a.jsx)("span",{className:"text-sm font-medium",children:e.name})]})}function BVaultPools(e){let{bvc:t}=e,{address:s}=(0,S.m)(),[n,l]=(0,j.useState)(!1),i=(0,u.Vw)(t.vault),c=(0,j.useMemo)(()=>n?i.filter(e=>e.bribes.reduce((e,t)=>e+t.bribeAmount,0n)>0n):i,[i,n]),[d,x]=(0,w.Z)(),h="text-black/60 dark:text-white/60 text-sm",[b,v]=(0,j.useState)(c[0]);(0,j.useEffect)(()=>{v(c[0])},[c]);let f=(null==b?void 0:b.userBalanceYToken)||0n,onRowClick=e=>{v(c[e])},g=(null==b?void 0:b.bribes)||[],N=(0,j.useMemo)(()=>{let e=g.find(e=>e.bribeAmount>0n);return e&&0n!=e.bribeTotalAmount?(0,m.Jh)(e.bribeAmount*o.Pq/e.bribeTotalAmount,18):(0,m.Jh)(0n,0n)},[g]),k=(0,u.R3)(t);return(0,a.jsxs)("div",{className:(0,m.cn)("grid grid-cols-1 md:grid-cols-3 gap-5 mt-5",Z),children:[(0,a.jsxs)("div",{ref:d,children:[(0,a.jsxs)("div",{className:"flex items-center gap-8 text-xl font-semibold mb-6",children:[(0,a.jsx)("span",{children:"My Pool Only"}),(0,a.jsx)(Switch,{checked:n,onChange:l})]}),(0,a.jsx)(y.aV,{className:c.length>6?"pr-5":"",width:x.width,height:x.height-52,rowHeight:e=>{let{index:t}=e;return t<c.length-1?76:56},overscanRowCount:6,rowCount:c.length,rowRenderer:function(e){let{key:t,style:s,index:n}=e,l=c[n],r="".concat((0,m.d3)(1000n*l.startTime,"date"),"-").concat((0,m.d3)((l.startTime+l.duration)*1000n,"date"));return(0,a.jsx)("div",{style:s,className:"cursor-pointer",onClick:()=>onRowClick(n),children:(0,a.jsxs)("div",{className:(0,m.cn)("flex h-[56px] card !rounded-lg !p-5 justify-between items-center font-semibold",n<c.length-1?"mb-[20px]":""),children:[(0,a.jsxs)("div",{className:"text-base",children:["Epoch ",c[n].epochId.toString()]}),(0,a.jsx)("div",{className:"text-xs dark:text-white/60",children:r})]})},t)}})]}),(0,a.jsxs)("div",{className:"md:col-span-2 card !p-4 flex flex-col gap-2",children:[(0,a.jsxs)("div",{className:"flex gap-6 items-end font-semibold",children:[(0,a.jsx)("span",{className:"text-xl ",children:"Accumulated Rewards"}),(0,a.jsxs)("span",{className:"text-xs dark:text-white/60",children:["Epoch ",((null==b?void 0:b.epochId)||1n).toString()]})]}),(0,a.jsx)("div",{className:"flex-1 mt-3 rounded-lg border border-solid border-border p-4",children:(0,a.jsx)(D.ZP,{headerClassName:"text-center text-black/60 dark:text-white/60 border-b-0",rowClassName:"text-center",header:["","","Total","Mine",""],span:{1:2,2:1,3:1},data:g.map(e=>["",(0,a.jsx)(BribeTit,{name:e.bribeSymbol},"1"),(0,p.d)(e.bribeTotalAmount),(0,p.d)(e.bribeAmount),""])})}),(0,a.jsxs)("div",{className:"rounded-lg border border-solid border-border px-4 py-2 flex justify-between items-center",children:[(0,a.jsxs)("div",{className:"font-semibold text-xs",children:[(0,a.jsxs)("div",{children:["My yToken: ",(0,a.jsx)("span",{className:(0,m.cn)(h),children:(0,p.d)(f)})]}),(0,a.jsxs)("div",{children:["Time Weighted Points: ",(0,a.jsx)("span",{className:(0,m.cn)(h),children:(0,p.d)(null==b?void 0:b.userBalanceYTokenSyntyetic)})]})]}),(0,a.jsxs)("div",{children:["My Share: ",(0,a.jsx)("span",{className:(0,m.cn)(h,"text-2xl"),children:N})]})]}),(0,a.jsx)("span",{className:"text-xs mx-auto",children:"You can harvest at the end of Epoch"}),(0,a.jsx)(C.v,{className:"mx-auto mt-4",tx:"Harvest",disabled:!b||!(null==b?void 0:b.settled),config:{abi:r.j5,address:t.vault,functionName:"claimBribes",args:[null==b?void 0:b.epochId]},onTxSuccess:()=>{k()}})]})]})}function BVaultMint(e){let{bvc:t}=e,s=(0,u.nr)(t.vault);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultP,{bvc:t}),(0,a.jsx)(BVaultY,{bvc:t}),s.epochCount&&(0,a.jsx)(BvaultEpochYtPrices,{bvc:t,epochId:s.epochCount})]})}function BVaultHarvest(e){let{bvc:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(BVaultPools,{bvc:t})})}function BVaultCard(e){let{vc:t}=e,s=(0,f.useRouter)(),[n,l]=t.assetSymbol.split("-"),r=(0,u.nr)(t.vault),i=c.P[t.asset],d=(0,x.R)(e=>e.sliceTokenStore.prices),h=i&&d[i.base]||0n,b=i&&d[i.quote]||0n,v=r.lpBase||0n,j=r.lpQuote||0n,g=v*h/o.Pq,N=j*b/o.Pq,w=g+N,[y]=(0,u.v7)(t.vault),[k]=(0,u.oU)(t.vault),T="Epoch ".concat(((null==r?void 0:r.epochCount)||0n).toString());return(0,a.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden",{}),onClick:()=>s.push("/b-vaults?vault=".concat(t.vault)),children:[(0,a.jsxs)("div",{className:(0,m.cn)(G.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center"),children:[(0,a.jsx)(I.c,{symbol:t.assetSymbol,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t.assetSymbol}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.assetSymbol.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsxs)("div",{className:"text-sm font-medium",children:["$",(0,p.d)(w,2)]})]})]}),(0,G.BW)(n,v,g),(0,G.BW)(l,j,N,!0),(0,G.yP)("Status","status",T),(0,G.yP)("Reward","iBGT","iBGT",!0),(0,G.Sn)("Panda","Principal Panda",k,"Venom","Boost Venom","".concat(y,"x"))]})}function BVaultCardComming(e){let{symbol:t}=e;return(0,a.jsxs)("div",{className:(0,m.cn)("card cursor-pointer !p-0 grid grid-cols-2 overflow-hidden h-[367px]",{}),children:[(0,a.jsxs)("div",{className:(0,m.cn)(G.bG,"border-b","bg-black/10 dark:bg-white/10 col-span-2 flex-row px-4 md:px-5 py-4 items-center h-20"),children:[(0,a.jsx)(I.c,{symbol:t,size:44}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:" text-lg font-semibold whitespace-nowrap",children:t}),(0,a.jsx)("div",{className:" text-sm font-medium",children:t.includes("-")?"LP Token":""})]}),(0,a.jsxs)("div",{className:"ml-auto",children:[(0,a.jsx)("div",{className:"text-[#64748B] dark:text-slate-50/60 text-xs font-semibold whitespace-nowrap",children:"Total Value Locked"}),(0,a.jsx)("div",{className:"text-sm font-medium",children:"$-"})]})]}),(0,a.jsx)("div",{className:(0,m.cn)(G.bG,"col-span-2"),children:(0,a.jsx)("div",{className:"text-xs font-semibold leading-[12px] whitespace-nowrap",children:"New Vault Comming Soon..."})})]})}var O=s(6868),_=s(44939),H=s(87031),W=s(59175),U=s(31889),z=s(62600);let K=["mint","harvest"];function BVaultPage(e){let{bvc:t}=e,{address:s}=(0,S.m)(),n=(0,u.nr)(t.vault);(0,E.a)({queryKey:["UpdateVaultDetails",t,n],queryFn:async()=>0n!=n.epochCount&&(await x.w.getState().sliceBVaultsStore.updateEpoches(t),!0)});let l=(0,u.Vw)(t.vault);return(0,E.a)({queryKey:["UpdateUserData",t,l,s],queryFn:async()=>0!=l.length&&!!s&&(console.info("epochesOld:",l),await x.w.getState().sliceUserBVaults.updateEpoches(t,s,l),!0)}),(0,a.jsx)(q.x,{listClassName:"flex-wrap p-0 mb-5 md:gap-14",triggerClassName:'text-lg sm:text-xl md:text-2xl py-0 data-[state="active"]:border-b border-b-black dark:border-b-white leading-[0.8] rounded-none whitespace-nowrap',contentClassName:"gap-5",data:[{tab:n.closed?"Redeem":"Mint",content:n.closed?(0,a.jsx)(BVaultRedeem,{bvc:t}):(0,a.jsx)(BVaultMint,{bvc:t})},{tab:"Harvest",content:(0,a.jsx)(BVaultHarvest,{bvc:t})}]})}function Vaults(){let e=(0,W.p)(),t=(0,j.useMemo)(()=>H.Fw[e].filter(e=>e.onEnv&&e.onEnv.includes(o.Vi)),[e,o.Vi]),s=(0,f.useSearchParams)(),n=s.get("vault"),l=s.get("tab");K.includes(l);let r=t.find(e=>e.vault==n);return(0,U.Ev)(),(0,a.jsx)(_.E,{children:(0,a.jsx)("div",{className:"w-full max-w-[1160px] px-4 mx-auto md:pb-8",children:r?(0,a.jsx)(BVaultPage,{bvc:r}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"page-title",children:"B-Vaults"}),(0,a.jsx)(O.K,{data:"A pendle-like product with more innovation."}),(0,a.jsxs)(z.r,{numItems:1,numItemsMd:2,numItemsLg:3,className:"gap-5 mt-4",children:[t.map((e,t)=>(0,a.jsx)(BVaultCard,{vc:e},"group_vault_item_".concat(t))),0==t.length&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-USDC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WBTC"}),(0,a.jsx)(BVaultCardComming,{symbol:"HONEY-WETH"})]})]})]})})})}},75496:function(e,t,s){"use strict";var a=s(31113),n=s(26361);function DefEmpty(){return(0,a.jsx)("tr",{className:"text-lg font-normal text-center text-black ",children:(0,a.jsx)("td",{colSpan:100,className:"h-[100px] py-5 align-top"})})}s(64103),t.ZP=e=>{let{header:t,data:s,span:l={},empty:r=(0,a.jsx)(DefEmpty,{}),className:i="relative min-w-full bg-transparent ",headerClassName:c,headerItemClassName:o,tbodyClassName:d="",rowClassName:m,rowStyle:x,cellClassName:u,onClickRow:p,onRowMouseHover:h}=e;return(0,a.jsxs)("table",{className:(0,n.cn)("relative min-w-full bg-transparent ",i),children:[(0,a.jsx)("thead",{className:"",children:(0,a.jsx)("tr",{className:(0,n.cn)("text-left whitespace-nowrap font-normal text-black border-b border-gray-100 pt-5 pb-6 dark:text-slate-50 dark:border-zinc-600",c),children:t.map((e,t)=>(0,a.jsx)("th",{colSpan:l[t],scope:"col",className:(0,n.cn)(0==l[t]?"p-0 w-0":"p-3 font-normal text-sm",o),children:e},t))})}),(0,a.jsxs)("tbody",{className:(0,n.cn)(d),children:[s.map((e,s)=>(0,a.jsx)("tr",{onClick:()=>p&&p(s),onMouseEnter:()=>h&&h(s),onMouseLeave:()=>h&&h(-1),style:"function"==typeof x?x(s):x,className:(0,n.cn)("text-slate-700 dark:text-slate-50 font-medium whitespace-nowrap",p?"cursor-pointer hover:bg-slate-400/10":"","function"==typeof m?m(s):m),children:e.map((e,r)=>r>=t.length?(0,a.jsx)(a.Fragment,{children:e}):(0,a.jsx)("td",{colSpan:l[r],className:(0,n.cn)(0==l[r]?"p-0 w-max":"px-3 py-2 text-sm w-max","function"==typeof u?u(s,r):u),children:e},r))},s)),0===s.length&&r]})]})}}},function(e){e.O(0,[4881,7495,7622,3113,5294,4105,4876,4167,8410,652,4300,5116,2653,2038,3783,2487,5061,1772,5974,7112,4477,7093,604,1744],function(){return e(e.s=92537)}),_N_E=e.O()}]);