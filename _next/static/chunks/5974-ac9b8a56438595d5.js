"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5974],{95702:function(e,t,a){a.d(t,{c:function(){return CoinIcon}});var n=a(31113),o=a(26758),r=a(26361),l=a(64370);let s={iBGT:"webp","HONEY-WBERA":"webp"};function CoinIcon(e){let{symbol:t,size:a=48,...u}=e,c=t in s?s[t]:"svg",i="".concat(o.G,"/").concat(t,".").concat(c),{data:d,isError:p}=(0,l.a)({queryKey:["loadCoinIcon",i],queryFn:()=>new Promise((e,t)=>{let a=new Image;a.onload=()=>{e(i)},a.onerror=e=>{t(e)},a.src=i})});return!d&&p?(0,n.jsxs)("svg",{...u,width:a,height:a,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("text",{className:"fill-primary",width:"20",x:"12",y:"12",textAnchor:"middle",fontSize:12,dominantBaseline:"middle",children:t.slice(0,2)}),(0,n.jsx)("circle",{className:"stroke-primary",cx:"12",cy:"12",r:"11.9"})]}):(0,n.jsx)("img",{...u,className:(0,r.cn)(d?"":"opacity-0",u.className),width:a,height:a,src:d||i,alt:t})}},68535:function(e,t,a){let n;a.d(t,{l6:function(){return getBvaultEpochYtPrices},_c:function(){return getBvaultsPtSynthetic}});var o=a(44769),r=a(83606);let instance=()=>(n&&n.defaults.baseURL==="https://beta-api.".concat(o.Kh.value)||(n=r.Z.create({baseURL:"https://beta-api.".concat(o.Kh.value),timeout:1e4,headers:{"Content-Type":"application/json"}})),n);var l={get:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let o=await instance().get(e,{...n,params:a});if(console.info("res:",null==o?void 0:o.data),(null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.code)!==200)throw o.data;return o.data.data},post:async function(e){var t;let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.startsWith("/auth")){let e=localStorage.getItem("earlyaccess-token");if(!e)throw"Need token";n.headers={...n.headers||{},Authorization:e}}let o=await instance().post(e,a,n);if((null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.code)!==200)throw o.data;return o.data.data}};let getBvaultEpochYtPrices=(e,t)=>l.get("/api/bvault/getEpochYTPrices/".concat(e,"/").concat(t)),getBvaultsPtSynthetic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return l.post("/api/bvault/batchGetEpochPtSynthetic",{bvaults:e})}},26758:function(e,t,a){a.d(t,{G:function(){return o}});var n=a(28070);let o=n.env.NEXT_PUBLIC_BASE_PATH||""},90168:function(e,t,a){a.d(t,{P:function(){return n}}),a(19757);let n={"0xD69ADb6FB5fD6D06E6ceEc5405D95A37F96E3b96":{poolType:36000n,base:"0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03",quote:"0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c"},"0xd28d852cbcc68dcec922f6d5c7a8185dbaa104b7":{poolType:36000n,base:"0x0e4aaf1351de4c0264c5c7056ef3777b41bd8e03",quote:"0x7507c1dc16935b82698e4c63f2746a2fcf994df8"}}},18358:function(e,t,a){a.d(t,{R3:function(){return useUpBVaultForUserAction},Vw:function(){return useEpochesData},d6:function(){return useResetBVaultsData},gz:function(){return useCalcClaimable},lL:function(){return calcBVaultPTApy},nr:function(){return useBVault},oU:function(){return useBVaultApy},pg:function(){return calcBVaultBoost},v7:function(){return useBVaultBoost}});var n=a(22139),o=a(59175),r=a(26361),l=a(84944),s=a(83978),u=a.n(s),c=a(64103),i=a(96670),d=a(3106);function useResetBVaultsData(){let e=(0,o.p)(),{address:t}=(0,i.m)();(0,c.useEffect)(()=>{},[e]),(0,c.useEffect)(()=>{d.w.getState().sliceUserBVaults.reset()},[t])}function useBVault(e){let t=(0,d.R)(t=>t.sliceBVaultsStore.bvaults[e]||(0,r.Yb)({current:(0,r.Yb)({},0n)},0n));return t}function useEpochesData(e){let t=function(e){let t=useBVault(e),a=(0,c.useMemo)(()=>a=>{if(t.epochCount<=0n)return[];let n=u().range(1,parseInt((t.epochCount+1n).toString())).reverse(),o=a.sliceBVaultsStore.epoches;return n.map(t=>o["".concat(e,"_").concat(t)]).filter(e=>null!=e)},[t]);return(0,d.R)(a)}(e),a=(0,d.R)(t=>t.sliceUserBVaults.epoches[e]||[]);return(0,c.useMemo)(()=>{let e=a.reduce((e,t)=>({...e,[t.epochId.toString()]:t}),{});return t.map(t=>(0,r.Yb)({...t,...e[t.epochId.toString()]||{bribes:[]}},0n))},[t,a])}function useCalcClaimable(e){let t=useEpochesData(e);return(0,c.useMemo)(()=>{let e=t.filter(e=>e.claimableAssetBalance&&e.settled);return{ids:e.map(e=>e.epochId),claimable:e.reduce((e,t)=>e+t.claimableAssetBalance,0n)}},[t])}function calcBVaultBoost(e){let t=d.w.getState(),a=t.sliceBVaultsStore.bvaults[e],o=(null==a?void 0:a.current.vaultYTokenBalance)||0n,r=(null==a?void 0:a.Y)||0n,s=r>0n?o*n.Pq/r:0n,u=(null==a?void 0:a.current.yTokenAmountForSwapYT)||0n,c=(null==a?void 0:a.lockedAssetTotal)||0n,i=u>0n?c*n.Pq/u:0n;console.info("calcBootst:",(0,l.d)(s),(0,l.d)(i));let p=i*s/n.Pq;return p}function useBVaultBoost(e){let t=(0,d.R)(()=>calcBVaultBoost(e));return[(0,l.d)(t,2),t]}function calcBVaultPTApy(e){let t=d.w.getState(),a=t.sliceBVaultsStore.bvaults[e],o=(0,r.ok)(t.sliceBVaultsStore.yTokenSythetic,[e]),l=a&&a.current.assetTotalSwapAmount&&o?a.current.assetTotalSwapAmount*n.SH*BigInt(1e10)/o:0n;return l}function useBVaultApy(e){let t=(0,d.R)(()=>calcBVaultPTApy(e));return[(0,r.Jh)(t,10),t]}function useUpBVaultForUserAction(e){let{address:t}=(0,i.m)();return()=>{(0,r.XD)(async()=>{if(!t)return;await Promise.all([d.w.getState().sliceTokenStore.updateTokensBalance([e.asset,e.pToken],t),d.w.getState().sliceTokenStore.updateTokenTotalSupply([e.asset,e.pToken]),d.w.getState().sliceBVaultsStore.updateBvaults([e]),d.w.getState().sliceBVaultsStore.updateYTokenSythetic([e])]);let a=d.w.getState().sliceBVaultsStore.bvaults[e.vault];await d.w.getState().sliceBVaultsStore.updateEpoches(e,a.epochCount>1n?[a.epochCount,a.epochCount-1n]:[a.epochCount]);let n=[];for(let t=parseInt(a.epochCount.toString());t>0;t--){let a=d.w.getState().sliceBVaultsStore.epoches["".concat(e.vault,"_").concat(t)];n.push(a)}console.info("onUserAction:epoches",n),await d.w.getState().sliceUserBVaults.updateEpoches(e,t,n)},3,1e3)}}},3106:function(e,t,a){a.d(t,{w:function(){return S},R:function(){return useStoreShallow}});var n=a(83978),o=a.n(n),r=a(64103),l=a(93108),s=a(43794),u=a(70258),c=a(68535),i=a(78403),d=a(62531),p=a(22139),f=a(87031),h=a(73216),m=a(19757),B=a(90168),v=a(58714);let g=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(a,n)=>o().mapValues(e,(e,o)=>e(e=>a({[o]:{...n()[o],...e}}),()=>n()[o],t[o]))}({sliceBVaultsStore:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},updateBvaults=async a=>{let n=(0,i.B)(),r=await Promise.all(a.map(e=>n.readContract({abi:u.Pe,address:e.bQueryAddres,functionName:"queryBVault",args:[e.vault]}).then(t=>({vault:e.vault,item:t})))),l=o().filter(r,e=>null!=e).reduce((e,t)=>({...e,[t.vault]:t.item}),{});return e({bvaults:{...t().bvaults,...l}}),l},updateEpoches=async(a,n)=>{var r;let l=n||o().range(1,parseInt((((null===(r=t().bvaults[a.vault])||void 0===r?void 0:r.epochCount)||0n)+1n).toString())).map(e=>BigInt(e));if(0==l.length)return{};let s=(0,i.B)(),c=await Promise.all(l.map(e=>s.readContract({abi:u.Pe,address:a.bQueryAddres,functionName:"queryBVaultEpoch",args:[a.vault,e]}))),d=c.reduce((e,t)=>({...e,["".concat(a.vault,"_").concat(t.epochId.toString())]:t}),{});return e({epoches:{...t().epoches,...d}}),d},updateYTokenSythetic=async a=>{let n=(null==a?void 0:a.map(e=>e.vault))||o().keys(t().bvaults),r=await (0,c._c)(n),l=o().mapValues(r,e=>BigInt(e));return e({yTokenSythetic:{...t().yTokenSythetic,...l}}),l};return{bvaults:{},epoches:{},yTokenSythetic:{},...a,updateBvaults,updateEpoches,updateYTokenSythetic}},sliceLVaultsStore:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},updateLVaults=async a=>{let n=(0,i.B)();if(0==a.length)return{};let o=await Promise.all(a.map(e=>Promise.all([n.readContract({abi:u.Wn,address:e.vaultQuery,functionName:e.isStable?"getStableVaultState":"getVaultState",args:[e.vault]}),n.readContract({abi:u.WW,address:e.vault,functionName:"assetBalance"}),n.readContract({abi:u.WW,address:e.vault,functionName:"usdTotalSupply"}),n.readContract({abi:u.WW,address:e.vault,functionName:"vaultMode"}),n.readContract({abi:u.WW,address:e.vault,functionName:"paramValue",args:[(0,d.$G)("Y",{size:32})]}),e.ptyPoolBelowAddress?n.readContract({abi:u.aT,address:e.ptyPoolBelowAddress,functionName:"totalStakingBalance"}):Promise.resolve(0n),e.ptyPoolAboveAddress?n.readContract({abi:u.aT,address:e.ptyPoolAboveAddress,functionName:"totalStakingBalance"}):Promise.resolve(0n),e.ptyPoolBelowAddress?n.getBalance({address:e.ptyPoolBelowAddress}):Promise.resolve(0n),n.readContract({abi:u.nq,address:e.assetTokenFeed,functionName:"latestPrice"}),n.readContract({abi:u.WW,address:e.vault,functionName:"paramValue",args:[(0,d.$G)("CircuitBreakPeriod",{size:32})]})]).then(t=>{let[a,n,o,r,l,s,u,c,i,d]=t,f=BigInt(Math.floor(new Date().getTime()/1e3)),h=e.isStable?a.M_USDCx>0n&&a.aar<a.AARS:2==r&&(a.aar>=a.AARC||f-a.AARBelowCircuitBreakerLineTime>d);return{...{...a,isStable:!!e.isStable},assetBalance:n,usbTotalSupply:o,vaultMode:e.isStable?a.aar<a.AARS&&a.M_USDC>0n?2:1:r,Y:l,buyPoolTotalStaking:s,sellPoolTotalStaking:u,buyPoolBalance:c,latestPrice:i*p.Pq/p.pn,CircuitBreakPeriod:d,discountEnable:h}}))),r=o.reduce((e,t,n)=>({...e,[a[n].vault]:t}),{});return e({lvaults:{...t().lvaults,...r}}),r},updateUserLVault=async(a,n)=>{let o=(0,i.B)();if(a.isStable)return;let[r,l,s,c,d,p,f]=await Promise.all([o.readContract({abi:u.aT,address:a.ptyPoolBelowAddress,functionName:"userStakingBalance",args:[n]}),o.readContract({abi:u.aT,address:a.ptyPoolBelowAddress,functionName:"earnedMatchedToken",args:[n]}),o.readContract({abi:u.aT,address:a.ptyPoolBelowAddress,functionName:"earnedStakingYields",args:[n]}).catch(()=>0n),o.readContract({abi:u.aT,address:a.ptyPoolBelowAddress,functionName:"earnedMatchingYields",args:[n]}),o.readContract({abi:u.aT,address:a.ptyPoolAboveAddress,functionName:"userStakingBalance",args:[n]}),o.readContract({abi:u.aT,address:a.ptyPoolAboveAddress,functionName:"earnedMatchedToken",args:[n]}),o.readContract({abi:u.aT,address:a.ptyPoolAboveAddress,functionName:"earnedMatchingYields",args:[n]})]),h={buyPool_userStakingBalance:r,buyPool_earnedMatchedToken:l,buyPool_earnedStakingYields:s,buyPool_earnedMatchingYields:c,sellPool_userStakingBalance:d,sellPool_earnedMatchedToken:p,sellPool_earnedMatchingYields:f};return e({user:{...t().user,[a.vault]:h}}),h};return{lvaults:{},user:{},...a,updateLVaults,updateUserLVault}},sliceTokenStore:function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},updateTokenTotalSupply=async a=>{if(0==a.length)return{};let n=(0,i.B)(),o=await Promise.all(a.map(e=>e==m.K8?Promise.resolve(0n):n.readContract({abi:v.Wo,address:e,functionName:"totalSupply"}))),r=o.reduce((e,t,n)=>({...e,[a[n]]:t}),{});return e({totalSupply:{...t().totalSupply,...r}}),r},updateTokensBalance=async(a,n)=>{if(0==a.length)return{};let o=(0,i.B)(),r=await Promise.all(a.map(e=>e==m.K8?o.getBalance({address:n}):o.readContract({abi:v.Wo,address:e,functionName:"balanceOf",args:[n]}))),l=r.reduce((e,t,n)=>({...e,[a[n]]:t}),{});return e({balances:{...t().balances,...l}}),l},updateTokenPrices=async a=>{let n=(0,i.B)(),r=o().groupBy(a,e=>B.P[e]?"lp":"token"),l=r.lp||[];if(0!==l.length){console.info("mlps;",a,l);let o=await Promise.all(l.map(e=>Promise.all([n.readContract({abi:u.Mi,address:f._C[(0,h.BV)()],functionName:"queryPrice",args:[B.P[e].base,B.P[e].quote,BigInt(B.P[e].poolType)]}),n.readContract({abi:u.Mi,address:f._C[(0,h.BV)()],functionName:"queryLiquidity",args:[B.P[e].base,B.P[e].quote,BigInt(B.P[e].poolType)]})]))),r={[f.TE[(0,h.BV)()]]:p.Pq};l.forEach((e,t)=>{let a=B.P[e].base,n=B.P[e].quote,l=o[t][0],s="0xd6d83af58a19cd14ef3cf6fe848c9a4d21e5727c"==n?10n**6n:1n;r[e]=l/s**2n,r[n]=(l*10n**9n/(0x10000000000000000n*s))**2n*r[a]/p.Pq}),console.info("lpPrics:",r),e({prices:{...t().prices,...r}})}return{}};return{totalSupply:{},updateTokenTotalSupply,balances:{},updateTokensBalance,prices:{},updateTokenPrices,...a}},sliceUserBVaults:(e,t,a)=>{let updateEpoches=async(a,n,o)=>{let r=o.filter(e=>e.epochId>0n);if(0==r.length)return{};let l=(0,i.B)(),s=await Promise.all(r.map(e=>l.readContract({abi:u.Pe,address:a.bQueryAddres,functionName:"queryBVaultEpochUser",args:[a.vault,e.epochId,n]})));return e({epoches:{...t().epoches,[a.vault]:s}}),s};return{epoches:{},...a,updateEpoches,reset:()=>e({epoches:{}})}}},{}),b=(0,s.mW)(g,{name:"BoundStore",store:"BoundStore",enabled:!0}),S=(0,l.Ue)(b);function useStoreShallow(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=S();return(0,r.useMemo)(()=>e(a),[a,...t])}},84944:function(e,t,a){a.d(t,{d:function(){return displayBalance}});var n=a(35057);let displayBalance=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:18;if(!e)return"0";let fmtNumber=e=>e.toLocaleString("en-US",{maximumFractionDigits:t}),o=Number((0,n.b)(e,a)),r=Number((.1**t).toFixed(t));return o>0&&o<r?o<.001?fmtNumber(1e6*o)+"μ":"<"+r:o<0&&o>-r?"≈0":fmtNumber(o)}}}]);