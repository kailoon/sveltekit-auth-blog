import{M as s}from"./vendor-d670a28c.js";const e=()=>{const e=s("__svelte__");return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:e.navigating.subscribe}},session:e.session}},r={subscribe:s=>e().page.subscribe(s)},i=s=>{throw new Error(`Cannot ${s} session store before subscribing`)},t={subscribe(s){const r=e().session;return t.set=r.set,t.update=r.update,r.subscribe(s)},set:()=>i("set"),update:()=>i("update")};export{r as p,t as s};
