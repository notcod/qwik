import{z as m,H as p,W as S,Z as u,C as _,q as a,g as i,d as h,R as P,m as o,_ as c}from"./q-bd407218.js";import{l as d,m as R}from"./q-25d42a2d.js";const A=()=>{var s;const[e,l]=m();return(s=l.value)!=null&&s.match(/builder\.io/)&&!e.noWebp?l.value.replace(/\?/g,"?format=webp&"):""},y=e=>{var g,v,b,f;p(),S(o(()=>c(()=>Promise.resolve().then(()=>r),void 0),"s_fBMYiVf9fuU"));const l=u(o(()=>c(()=>Promise.resolve().then(()=>r),void 0),"s_TZMibf9Gpvw",[e])),s=u(o(()=>c(()=>Promise.resolve().then(()=>r),void 0),"s_01YCu72BBtA",[e,l])),n=u(o(()=>c(()=>Promise.resolve().then(()=>r),void 0),"s_yJ1jG0g5fbw",[e]));return _(P,{children:[a("picture",null,null,[s.value?a("source",null,{type:"image/webp",srcSet:i(t=>t.value,[s],"p0.value")},null,3,"0A_0"):null,a("img",null,{loading:"lazy",alt:i(t=>t.altText,[e],"p0.altText"),role:i(t=>t.altText?"presentation":void 0,[e],'p0.altText?"presentation":undefined'),style:i((t,T)=>({objectPosition:T.backgroundPosition||"center",objectFit:T.backgroundSize||"cover",...t.value}),[n,e],'{objectPosition:p1.backgroundPosition||"center",objectFit:p1.backgroundSize||"cover",...p0.value}'),class:i(t=>"builder-image"+(t.className?" "+t.className:"")+" img-Image",[e],'"builder-image"+(p0.className?" "+p0.className:"")+" img-Image"'),src:i(t=>t.image,[e],"p0.image"),srcSet:i(t=>t.value,[l],"p0.value"),sizes:i(t=>t.sizes,[e],"p0.sizes")},null,3,null)],1,null),e.aspectRatio&&!((v=(g=e.builderBlock)==null?void 0:g.children)!=null&&v.length&&e.fitContent)?a("div",null,{class:"builder-image-sizer div-Image",style:i(t=>({paddingTop:t.aspectRatio*100+"%"}),[e],'{paddingTop:p0.aspectRatio*100+"%"}')},null,3,"0A_1"):null,(f=(b=e.builderBlock)==null?void 0:b.children)!=null&&f.length&&e.fitContent?_(h,null,3,"0A_2"):null,!e.fitContent&&e.children?a("div",null,{class:"div-Image-2"},_(h,null,3,"0A_3"),1,"0A_4"):null]},1,"0A_5")},z=()=>{const[e]=m(),l={position:"absolute",height:"100%",width:"100%",left:"0px",top:"0px"};return e.aspectRatio?l:void 0},E=()=>{var n;const[e]=m(),s=e.image||e.src;if(!s||!(s.match(/builder\.io/)||s.match(/cdn\.shopify\.com/)))return e.srcset;if(e.srcset&&((n=e.image)!=null&&n.includes("builder.io/api/v1/image"))){if(!e.srcset.includes(e.image.split("?")[0]))return console.debug("Removed given srcset"),d(s)}else if(e.image&&!e.srcset)return d(s);return d(s)},I=R,r=Object.freeze(Object.defineProperty({__proto__:null,s_01YCu72BBtA:A,s_LRxDkFa1EfU:y,s_TZMibf9Gpvw:E,s_fBMYiVf9fuU:I,s_yJ1jG0g5fbw:z},Symbol.toStringTag,{value:"Module"}));export{A as s_01YCu72BBtA,y as s_LRxDkFa1EfU,E as s_TZMibf9Gpvw,I as s_fBMYiVf9fuU,z as s_yJ1jG0g5fbw};
