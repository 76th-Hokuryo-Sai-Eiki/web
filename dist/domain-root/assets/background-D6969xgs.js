import{r as e,aa as v,W as l,k as r}from"./index-DAR3hEyE.js";function I({containerRef:x,opacityConfig:n}){const u=e.useRef(null),h=e.useRef(null),f=e.useRef(null),a=(p,{height:m})=>m,[t,R]=e.useReducer(a,0),[c,T]=e.useReducer(a,0),[i,y]=e.useReducer(a,0),[g,B]=e.useReducer(a,0),[S,k]=e.useState(0),[d,H]=e.useState({from:0,to:0}),[w,j]=e.useState({from:0,to:0}),o=e.useCallback(()=>{var b;if(!t||!c||!i||!g)return;const p=((b=document.getElementById("#info"))==null?void 0:b.offsetTop)??0,m=t-c;k(m);{const s=t-i-400-.7*window.innerHeight;H({from:v({viewFrom:Math.max(350,2400-window.innerWidth*3.2),viewTo:s,containerHeight:t}),to:s})}{const s=t-g-.7*window.innerHeight;j({from:v({viewFrom:p-900,viewTo:s,containerHeight:t}),to:s})}},[t,c,i,g]);return e.useEffect(()=>{o()},[o]),l({ref:x,onResize:R}),l({ref:u,onResize:T}),l({ref:h,onResize:y}),l({ref:f,onResize:B}),e.useEffect(()=>(window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}),[o]),r.jsxs(r.Fragment,{children:[r.jsx("img",{ref:u,alt:"background",className:"parallax scroll-driven absolute h-[200vh] object-cover sm:h-fit sm:w-full",src:`images/background${window.innerWidth<1280?"-long":""}.png`,style:{"--scroll-y-to":`${S}px`,opacity:n.opacity.bgImage}}),r.jsx("img",{ref:h,alt:"background",className:"parallax scroll-driven absolute left-[4vw] max-h-[65vh] w-auto max-w-[70vw] dark:opacity-30 dark:brightness-[60%] sm:left-[8vw] lg:left-[12vw]",src:"images/themeA.png",style:{"--scroll-y-from":`${d.from}px`,"--scroll-y-to":`${d.to}px`,opacity:n.opacity.bgProp}}),r.jsx("img",{ref:f,alt:"background",className:"parallax scroll-driven absolute right-[4vw] max-h-[65vh] w-auto max-w-[70vw] dark:opacity-30 dark:brightness-[60%] sm:right-[8vw] lg:right-[12vw]",src:"images/themeB.png",style:{"--scroll-y-from":`${w.from}px`,"--scroll-y-to":`${w.to}px`,opacity:n.opacity.bgProp}})]})}export{I as default};
