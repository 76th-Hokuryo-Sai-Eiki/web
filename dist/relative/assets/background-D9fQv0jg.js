import{r as e,ah as v,a1 as l,ai as j,k as c}from"./index-oWypGZqu.js";function E({containerRef:x,opacityConfig:t}){const h=e.useRef(null),f=e.useRef(null),w=e.useRef(null),a=(m,{height:s})=>s,[o,R]=e.useReducer(a,0),[n,T]=e.useReducer(a,0),[i,y]=e.useReducer(a,0),[g,B]=e.useReducer(a,0),[S,k]=e.useState(0),[b,H]=e.useState({from:0,to:0}),[d,I]=e.useState({from:0,to:0}),r=e.useCallback(()=>{var m;if(!(!o||!n||!i||!g)){if(t.opacity.bgImage>0){const s=o-n;k(s)}if(t.opacity.bgProp>0){{const u=o-i-400-.7*window.innerHeight;H({from:v({viewFrom:Math.max(350,2400-window.innerWidth*3.2),viewTo:u,containerHeight:o}),to:u})}{const s=((m=document.getElementById("#info"))==null?void 0:m.offsetTop)??0,p=o-g-.7*window.innerHeight;I({from:v({viewFrom:s-900,viewTo:p,containerHeight:o}),to:p})}}}},[o,n,i,g,t.opacity.bgImage,t.opacity.bgProp]);return e.useEffect(()=>{r()},[r]),l({ref:x,onResize:R}),l({ref:h,onResize:T}),l({ref:f,onResize:y}),l({ref:w,onResize:B}),e.useEffect(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[r]),j?null:c.jsxs("div",{className:"absolute h-max w-full overflow-clip",style:{height:o},children:[c.jsx("img",{ref:h,alt:"background",className:t.opacity.bgImage>0?"parallax scroll-driven absolute min-h-[200vh] object-cover sm:h-fit sm:w-full":"",src:`images/background${window.innerWidth<1280?"-long":""}.png`,style:{"--scroll-y-to":`${S}px`,opacity:t.opacity.bgImage}}),c.jsx("img",{ref:f,alt:"background",className:t.opacity.bgProp>0?"parallax scroll-driven absolute left-[4vw] max-h-[65vh] w-auto max-w-[70vw] dark:opacity-30 dark:brightness-[60%] sm:left-[8vw] lg:left-[12vw]":"",src:"images/themeA.png",style:{"--scroll-y-from":`${b.from}px`,"--scroll-y-to":`${b.to}px`,opacity:t.opacity.bgProp}}),c.jsx("img",{ref:w,alt:"background",className:t.opacity.bgProp>0?"parallax scroll-driven absolute right-[4vw] max-h-[65vh] w-auto max-w-[70vw] dark:opacity-30 dark:brightness-[60%] sm:right-[8vw] lg:right-[12vw]":"",src:"images/themeB.png",style:{"--scroll-y-from":`${d.from}px`,"--scroll-y-to":`${d.to}px`,opacity:t.opacity.bgProp}})]})}export{E as default};
