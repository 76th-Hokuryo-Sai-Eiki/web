(function(){"use strict";const o="licenses-1722183963166";var r=self.caches.open(o);self.caches.keys().then(e=>e.forEach(s=>{!s.startsWith("licenses-")||s===o||self.caches.delete(s)}));const i="/licenses/list.json";var w=(async()=>{const e=await r,s=await e.match(i).then(t=>t==null?void 0:t.json()).catch(()=>{});return s||fetch(i).then(t=>(e&&e.put(i,t.clone()),t.json()))})();function n(e){self.postMessage({type:"selection",value:e})}function f(e){self.postMessage({type:"content",value:e})}let c=null,l=null;self.addEventListener("message",async e=>{var p;c||(c=await r),l||(l=await w);const s=e.data;if(s.size===0){n("");return}const t=[...s][0];if(n(t),!t)return;const u=((p=l[t])==null?void 0:p.hash)??"";if(u.length!==64){n(null);return}const h=`/licenses/${u}.txt`,d=await caches.match(h);if(d){f(await d.text());return}fetch(h).then(a=>(c&&c.put(h,a.clone()),a.text())).then(a=>{f(a)}).catch(()=>{n(null)})})})();
