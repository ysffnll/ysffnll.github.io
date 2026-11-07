import{Dt as e,Ja as t,Ma as n,Ni as r,Qi as i,Rn as a,U as o,V as s,an as c,ar as l,ft as u,in as d,jr as f,no as p,qt as m,ro as h,ta as g}from"./three.core-Dp-eO7LC.js";import{c as _,l as v}from"./configuration-CDU8_iNs.js";import{a as y,c as b,d as x,f as S,i as C,l as w,n as T,o as E,s as D,t as O,u as k}from"./asset-manifest-tnmDQGn5.js";var A=`elements-a`,j=e=>typeof e==`string`&&/^\/assets\/atmosphere\/v[12]\/[a-zA-Z0-9][\w.-]*\.(?:webp|png)$/.test(e),ee=e=>Array.isArray(e)&&e.length===2&&e.every(e=>Number.isSafeInteger(e)&&e>0);function M(e){return e&&j(e.url)&&ee(e.dimensions)&&typeof e.sha256==`string`&&/^[a-f0-9]{64}$/i.test(e.sha256)&&Number.isSafeInteger(e.bytes)&&e.bytes>0&&(e.id===void 0||typeof e.id==`string`&&e.id.length>0&&e.id.length<=160)&&(e.colorSpace===void 0||e.colorSpace===`srgb`)&&(e.alphaMode===void 0||e.alphaMode===`straight`)}function N(e,t){let n=e?.rectPixels;if(!Array.isArray(n)||n.length!==4||!n.every(Number.isSafeInteger))return!1;let[r,i,a,o]=n;if(r<0||i<0||a<=0||o<=0||r+a>t.dimensions[0]||i+o>t.dimensions[1]||e.gutter!==void 0&&(!Number.isSafeInteger(e.gutter)||e.gutter<0||e.gutter*2>=Math.min(a,o)))return!1;if(e.alphaBounds!==void 0){let t=e.alphaBounds;if(!Array.isArray(t)||t.length!==4||!t.every(Number.isFinite)||t[0]<r||t[1]<i||t[2]>r+a||t[3]>i+o||t[0]>t[2]||t[1]>t[3])return!1}return!0}function P({requestFrame:e=()=>{},loadTexture:t,manifest:r=O}={}){let o=t??(typeof document>`u`?null:(e,t,r)=>new n().load(e,t,void 0,r)),c=new Map,l=new Map,u=new WeakSet,d={status:`disposed`,texture:null},f=!1;function p(e,t){if(typeof e!=`string`||![`low`,`medium`,`high`].includes(t))return[];let n=Object.hasOwn(r?.atlasGroups||{},e)?r.atlasGroups[e]?.runtimeVariants:e===A?r?.runtimeVariants:null;return Array.isArray(n)?n.filter(M).slice().sort((e,t)=>e.dimensions[0]*e.dimensions[1]-t.dimensions[0]*t.dimensions[1]||e.dimensions[0]-t.dimensions[0]||e.dimensions[1]-t.dimensions[1]||e.url.localeCompare(t.url)):[]}function m(e,t){let n=p(e,t);return(t===`low`?n[0]:n.at(-1))||null}function h(e,t,n=`manifest-missing`){let r=`${e}\0${t}\0${n}`;return l.has(r)||l.set(r,{status:n,texture:null,atlasId:e}),l.get(r)}function g(e){if(e&&typeof e==`object`&&!u.has(e)){u.add(e);try{e.dispose?.()}catch{}}}function _(){try{e()}catch{}}function v(e=A,t=`medium`){if(f)return d;let n=m(e,t);if(!n)return h(e,t);if(c.has(n.url))return c.get(n.url);let r={status:o?`loading`:`loader-unavailable`,texture:null,url:n.url,dimensions:[...n.dimensions]};if(c.set(n.url,r),!o)return r;let l=new Set,u=!1;function p(e){e&&typeof e==`object`&&l.add(e)}function v(e=null){for(let t of l)t!==e&&g(t)}let y=e=>{if(p(e),f||u)(f||r.texture!==e)&&g(e);else if(u=!0,!e||typeof e!=`object`||typeof e.dispose!=`function`)r.status=`failed`,v(),r.texture=null,_();else try{e.colorSpace=i,e.premultiplyAlpha=!1,e.generateMipmaps=!1,e.minFilter=e.magFilter=a,e.wrapS=e.wrapT=s,e.needsUpdate=!0,v(e),r.texture=e,r.status=`ready`,_()}catch{r.status=`failed`,v(),r.texture=null,_()}},b=()=>{f||u||(u=!0,r.status=`failed`,v(),r.texture=null,_())};Object.defineProperty(r,"release",{value:()=>{v(),r.texture=null,r.status=`disposed`}});try{let e=o(n.url,y,b);p(e),f||u?(f||e!==r.texture)&&g(e):r.texture=e||null}catch{b()}return r}function y(e,t=`medium`){if(f||typeof e!=`string`)return null;let n=Array.isArray(r?.assets)?r.assets.find(t=>t?.id===e):null;if(!n)return null;let i=n.atlasId??A,a=m(i,t);if(!a||!n.runtimeCells||typeof n.runtimeCells!=`object`)return null;let o=[a.id,`${a.dimensions[0]}x${a.dimensions[1]}`,String(a.dimensions[0])].filter(e=>e!==void 0).find(e=>Object.hasOwn(n.runtimeCells,e)),s=o===void 0?null:n.runtimeCells[o];return N(s,a)?{asset:n,variant:a,cell:s,atlasId:i}:null}function b(e,t=`medium`){let n=y(e,t);return n?{...n,atlas:v(n.atlasId,t)}:null}return{atlas:v,describe:y,acquire:b,elementAtlas:(e=`medium`)=>v(A,e),diagnostics(){return[...c.values(),...l.values()].map(({status:e,url:t,dimensions:n,atlasId:r})=>({status:e,...t?{url:t}:{atlasId:r},...n?{dimensions:[...n]}:{}}))},dispose(){if(!f){f=!0;for(let e of c.values())e.release?.();c.clear(),l.clear()}}}}var F=(e,t)=>{if(!Array.isArray(e)||e.length!==3||!e.every(Number.isFinite))throw TypeError(`${t}: finite xyz required`);return e},I=(e,t,n)=>Math.max(t,Math.min(n,e));function L({snapshot:e,camera:t,width:n,height:r,selectedIds:i=[],resolution:a=256}={}){if(e?.schemaVersion!==1||!Array.isArray(e.occurrences)||e.occurrences.length>2e3)throw TypeError(`Canonical atmosphere snapshot with bounded occurrences required`);if(!t?.isCamera||!(t.isPerspectiveCamera||t.isOrthographicCamera))throw TypeError(`Perspective or orthographic camera required`);if(![n,r].every(e=>Number.isFinite(e)&&e>0))throw RangeError(`Positive CSS viewport dimensions required`);if(!Number.isInteger(a)||a<16||a>512)throw RangeError(`Protection resolution must be an integer within 16..512`);if(!Array.isArray(i)||i.some(e=>typeof e!=`string`))throw TypeError(`Selected occurrence identities must be strings`);if([t.matrixWorld,t.projectionMatrix].some(e=>!e?.elements?.every(Number.isFinite)||Math.abs(e.determinant())<1e-15)||!Number.isFinite(t.near)||t.near<=0||!Number.isFinite(t.far)||t.far<=t.near)throw TypeError(`Finite updated camera matrices and clipping range required`);let o=t.matrixWorld.clone().invert(),s=t.projectionMatrix.elements,c=o.getMaxScaleOnAxis(),l=Math.max(1,Math.round(a*n/Math.max(n,r))),u=Math.max(1,Math.round(a*r/Math.max(n,r))),d=new Uint8Array(l*u),f=new Uint8Array(l*u),p=new Set(i),m={basis:`conservative-occurrence-spheres-and-canonical-carrier-capsules`,visitedPixels:0,rasterizedOccurrences:0,rasterizedCarrierSegments:0,selectedOccurrences:0,clippedPrimitives:0,skippedPrimitives:0,coveredPixels:0,coverageFraction:0,protectedFraction:0,selectedCoveredPixels:0,selectedCoverageFraction:0,pixelBudget:l*u,cssViewport:[n,r],uvOrigin:`bottom-left`,limits:[`Not an exact loaded-mesh silhouette`,`Separate macrame knot/core/tail silhouettes require render-owner geometry; normal depth testing still applies`]},g=e=>{let t=new h(...F(e,`World point`)).applyMatrix4(o);if(!t.toArray().every(Number.isFinite))throw TypeError(`Finite transformed protection position required`);return t},_=e=>t.isPerspectiveCamera?[(s[0]*e.x/-e.z-s[8]+1)*l/2,(s[5]*e.y/-e.z-s[9]+1)*u/2]:[(s[0]*e.x+s[12]+1)*l/2,(s[5]*e.y+s[13]+1)*u/2],v=(e,t,n,r)=>[I(Math.floor(e),0,l),I(Math.floor(t),0,u),I(Math.ceil(n),0,l),I(Math.ceil(r),0,u)],y=(e,t,n=!1)=>{let r=t*l+e;d[r]||(d[r]=255,m.coveredPixels++),n&&!f[r]&&(f[r]=255,m.selectedCoveredPixels++)},b=e=>Math.max(e*l/n,e*u/r)+1;function x(e,n,r=0,i=!1){let a=g(e),o=-a.z;if(!Number.isFinite(n)||n<0)throw TypeError(`Finite nonnegative protection radius required`);n*=c;let d=b(2+r),f=t.isPerspectiveCamera?Math.max((o+n)*2/(Math.abs(s[0])*l),(o+n)*2/(Math.abs(s[5])*u)):Math.max(2/(Math.abs(s[0])*l),2/(Math.abs(s[5])*u)),p=n+Math.max(0,f)*d;if(o+p<t.near||o-p>t.far){m.skippedPrimitives++;return}let x;if(t.isOrthographicCamera){let[e,t]=_(a);x=v(e-Math.abs(s[0])*p*l/2,t-Math.abs(s[5])*p*u/2,e+Math.abs(s[0])*p*l/2,t+Math.abs(s[5])*p*u/2)}else if(o-p>t.near){let e=o*o-p*p,t=(s[0]*a.x*o/e-s[8]+1)*l/2,n=(s[5]*a.y*o/e-s[9]+1)*u/2,r=Math.abs(s[0])*p*Math.sqrt(Math.max(0,e+a.x*a.x))/e*l/2,i=Math.abs(s[5])*p*Math.sqrt(Math.max(0,e+a.y*a.y))/e*u/2;x=v(t-r,n-i,t+r,n+i)}else{m.clippedPrimitives++;let e=[];for(let n of[a.x-p,a.x+p])for(let r of[a.y-p,a.y+p])for(let i of[Math.max(t.near,o-p),Math.max(t.near,o+p)])e.push(_(new h(n,r,-i)));x=v(Math.min(...e.map(e=>e[0])),Math.min(...e.map(e=>e[1])),Math.max(...e.map(e=>e[0])),Math.max(...e.map(e=>e[1])))}for(let e=x[1];e<x[3];e++)for(let n=x[0];n<x[2];n++){m.visitedPixels++;let r;if(t.isPerspectiveCamera){let i=((n+.5)/l*2-1+s[8])/s[0],c=((e+.5)/u*2-1+s[9])/s[5],d=i*i+c*c+1,f=a.x*i+a.y*c+o,m=f*f-d*(a.lengthSq()-p*p);if(m<0)continue;let h=Math.sqrt(m);r=(f+h)/d>=t.near&&(f-h)/d<=t.far}else{let i=((n+.5)/l*2-1-s[12])/s[0],c=((e+.5)/u*2-1-s[13])/s[5],d=p*p-(i-a.x)**2-(c-a.y)**2;r=d>=0&&o+Math.sqrt(Math.max(0,d))>=t.near&&o-Math.sqrt(Math.max(0,d))<=t.far}r&&y(n,e,i)}m.rasterizedOccurrences++}for(let t of e.occurrences){let e=F(t.position,`Occurrence position`),n=t.radius;if(t.worldBounds){let r=F(t.worldBounds.min,`Occurrence bounds.min`),i=F(t.worldBounds.max,`Occurrence bounds.max`);if(r.some((e,t)=>e>i[t]))throw TypeError(`Ordered occurrence bounds required`);e=r.map((e,t)=>(e+i[t])/2),n=Math.hypot(...i.map((e,t)=>(e-r[t])/2))}let r=p.has(t.id);r&&m.selectedOccurrences++,x(e,n,r?12:0,r)}let S=e.carrierPath;if(S){if(!Array.isArray(S.points)||S.points.length>257||S.points.length<2||!Number.isFinite(S.protectionRadius)||S.protectionRadius<0)throw TypeError(`Bounded canonical carrier path required`);let e=S.points.map(g),n=e.length-+!S.closed;for(let r=0;r<n;r++){let n=e[r].clone(),i=e[(r+1)%e.length].clone(),a=-n.z,o=-i.z;if(Math.max(a,o)<t.near||Math.min(a,o)>t.far){m.skippedPrimitives++;continue}if(a<t.near||o<t.near||a>t.far||o>t.far){m.clippedPrimitives++;let e=o-a,r=e===0?0:Math.min((t.near-a)/e,(t.far-a)/e),s=e===0?1:Math.max((t.near-a)/e,(t.far-a)/e),c=n.clone(),l=i.clone().sub(n);n=c.clone().addScaledVector(l,I(r,0,1)),i=c.addScaledVector(l,I(s,0,1))}let d=S.protectionRadius*c,f=_(n),p=_(i),h=Math.max(t.near,Math.min(-n.z,-i.z)-d),g=(t.isPerspectiveCamera?Math.max(Math.abs(s[0])*l,Math.abs(s[5])*u)*d/(2*h):Math.max(Math.abs(s[0])*l,Math.abs(s[5])*u)*d/2)+b(2),x=v(Math.min(f[0],p[0])-g,Math.min(f[1],p[1])-g,Math.max(f[0],p[0])+g,Math.max(f[1],p[1])+g),C=p[0]-f[0],w=p[1]-f[1],T=C*C+w*w;for(let e=x[1];e<x[3];e++)for(let t=x[0];t<x[2];t++){m.visitedPixels++;let n=T?I(((t+.5-f[0])*C+(e+.5-f[1])*w)/T,0,1):0;(t+.5-f[0]-n*C)**2+(e+.5-f[1]-n*w)**2<=g*g&&y(t,e)}m.rasterizedCarrierSegments++}}return m.coverageFraction=m.coveredPixels/d.length,m.protectedFraction=m.coverageFraction,m.selectedCoverageFraction=m.selectedCoveredPixels/f.length,{data:d,selectionData:f,width:l,height:u,stats:m}}var te=.3,R=`
float atmosphereProtectionGain(vec2 coverage,float residual){
 return (1.0-clamp(coverage.y,0.0,1.0))*(1.0-clamp(coverage.x,0.0,1.0)*(1.0-clamp(residual,0.0,1.0)));
}
`;function ne(e){let t=e.layout,n=e.artFlow?.direction;return e.theme===`astrology`&&(n===`fusion`||n===`celestial`)&&(t?.primaryHero===!0&&e.assetId?.startsWith(`celestial.`)||t?.detailLeader===!0&&e.assetId?.startsWith(`symbol.`))?1:e.kind===`ribbons`&&[`elements`,`energy`,`spectrum`].includes(e.theme)||e.theme===`chakra`&&e.motif===`aura`?te:0}function re(e,t,n=0){if(![e,t,n].every(e=>typeof e==`number`&&Number.isFinite(e)&&e>=0&&e<=1))throw RangeError(`Protection coverage and residual must be finite within0..1`);return(1-t)*(1-e*(1-n))}function z({data:e,selectionData:t,width:n,height:r}){let i=n*r;if(!Number.isInteger(n)||!Number.isInteger(r)||n<1||r<1||i>262144||!(e instanceof Uint8Array)||!(t instanceof Uint8Array)||e.length!==i||t.length!==i)throw TypeError(`Matching bounded product/selection byte masks required`);let a=new Uint8Array(i*2);for(let n=0;n<i;n++)a[n*2]=e[n],a[n*2+1]=t[n];return a}var B=`akiskan-ink-flow-v1`,V=Object.freeze([.024,.0144]),H=1.44,ie=Math.PI*2,U=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),ae=Object.freeze({"elements-a":`b59c81606bb068ce22119037e04d460819fca8a270185b15cebef5a32dbe3837`,"elements-b":`9bf058b51f9a770d6a5912e4b3e59de8297121b558ab4046a4f261271a263404`,"energy-a":`1dfd38e21f27ad4f78c2151740d89a3e288b562a71019317c408fe7c54f37486`,"light-a":`6ddc5f9de868628e9d507bc3bf7ceba0a7f922a836118f600f027ef7b56b4916`}),W=Object.freeze({"element.water":{atlas:`elements-b`,cell:[512,0,512,512],port:[.5654296875,.4384765625]},"element.water.b":{atlas:`elements-b`,cell:[512,0,512,512],port:[.5654296875,.4384765625]},"element.fire":{atlas:`elements-b`,cell:[0,0,512,512],port:[.4990234375,.4736328125]},"element.fire.b":{atlas:`elements-b`,cell:[0,0,512,512],port:[.4990234375,.4736328125]},"element.air":{atlas:`elements-a`,cell:[0,512,512,512],ends:[[.1689453125,.2236328125],[.7919921875,.4873046875]]},"element.air.b":{atlas:`elements-b`,cell:[0,512,512,512],ends:[[.2626953125,.2138671875],[.7978515625,.7412109375]]},"energy.filament":{atlas:`energy-a`,cell:[512,0,512,512],ends:[[.2490234375,.2060546875],[.8740234375,.6982421875]]},"light.prism-trace":{atlas:`light-a`,cell:[0,341,341,341],ends:[[48.5/341,99.5/341],[293.5/341,241.5/341]]},"energy.aura-veil":{atlas:`energy-a`,cell:[0,0,512,512],ends:[[.1943359375,.4697265625],[.8134765625,.3818359375]]},"light.aurora":{atlas:`light-a`,cell:[341,341,341,341],ends:[[79.5/341,115.5/341],[251.5/341,239.5/341]]},"light.beam":{atlas:`light-a`,cell:[0,0,341,341],ends:[[98.5/341,97.5/341],[257.5/341,256.5/341]]}}),G={"element.air":[[.0888671875,.2294921875],[.1083984375,.4462890625],[.1103515625,.4521484375],[.1123046875,.4560546875],[.1181640625,.4658203125],[.1318359375,.4794921875],[.4912109375,.7294921875],[.6611328125,.8212890625],[.6650390625,.8232421875],[.6865234375,.8310546875],[.6943359375,.8330078125],[.7548828125,.8447265625],[.7724609375,.8447265625],[.7978515625,.8388671875],[.8056640625,.8369140625],[.8154296875,.8330078125],[.8193359375,.8310546875],[.8330078125,.8232421875],[.8427734375,.8173828125],[.8544921875,.8095703125],[.8779296875,.7919921875],[.8876953125,.7841796875],[.8896484375,.7822265625],[.8994140625,.7685546875],[.8994140625,.7666015625],[.8466796875,.4091796875],[.8447265625,.3994140625],[.8173828125,.3759765625],[.8115234375,.3720703125],[.3505859375,.1220703125],[.1552734375,.1533203125],[.1357421875,.1572265625],[.1123046875,.1748046875],[.1064453125,.1806640625],[.0888671875,.2021484375]],"element.air.b":[[.0341796875,.4365234375],[.0361328125,.4560546875],[.0380859375,.4638671875],[.0517578125,.4912109375],[.0654296875,.5107421875],[.0751953125,.5224609375],[.0771484375,.5244140625],[.1044921875,.5498046875],[.1220703125,.5654296875],[.1318359375,.5732421875],[.1728515625,.6044921875],[.4306640625,.7900390625],[.5673828125,.8720703125],[.5888671875,.8759765625],[.6044921875,.8779296875],[.6318359375,.8798828125],[.6669921875,.8798828125],[.7275390625,.8603515625],[.7451171875,.8544921875],[.7607421875,.8486328125],[.7919921875,.8330078125],[.8134765625,.8212890625],[.8330078125,.8076171875],[.8427734375,.7998046875],[.8466796875,.7958984375],[.9150390625,.7021484375],[.9267578125,.6845703125],[.9560546875,.6337890625],[.9580078125,.6259765625],[.9599609375,.6162109375],[.9599609375,.5068359375],[.8408203125,.3466796875],[.8349609375,.3408203125],[.7998046875,.3154296875],[.7548828125,.2900390625],[.7470703125,.2861328125],[.4677734375,.1474609375],[.4130859375,.1259765625],[.3994140625,.1220703125],[.3427734375,.1220703125],[.3232421875,.1259765625],[.2548828125,.1455078125],[.1904296875,.1806640625],[.0439453125,.2900390625],[.0400390625,.2998046875],[.0361328125,.3154296875]],"energy.filament":[[.0322265625,.0791015625],[.0341796875,.0869140625],[.0380859375,.0966796875],[.0693359375,.1708984375],[.0712890625,.1748046875],[.7880859375,.8916015625],[.9306640625,.9189453125],[.9326171875,.9169921875],[.9365234375,.9111328125],[.9501953125,.8837890625],[.9541015625,.8740234375],[.9619140625,.8505859375],[.9658203125,.8251953125],[.9658203125,.7587890625],[.9638671875,.7490234375],[.9365234375,.6396484375],[.9345703125,.6357421875],[.9130859375,.6064453125],[.9052734375,.5966796875],[.8916015625,.5810546875],[.8876953125,.5771484375],[.8251953125,.5205078125],[.7939453125,.4951171875],[.3994140625,.1923828125],[.3544921875,.1630859375],[.3505859375,.1611328125],[.2998046875,.1416015625],[.2822265625,.1357421875],[.0341796875,.0791015625]],"light.prism-trace":[[.051319648093841645,.26832844574780057],[.054252199413489736,.2888563049853372],[.060117302052785926,.31524926686217014],[.10997067448680352,.41495601173020524],[.1774193548387097,.47947214076246336],[.8284457478005866,.907624633431085],[.8489736070381232,.9164222873900293],[.8548387096774194,.9164222873900293],[.8636363636363636,.9134897360703812],[.8900293255131965,.8958944281524927],[.9105571847507331,.8695014662756598],[.9252199413489736,.8489736070381232],[.9340175953079178,.8343108504398827],[.9428152492668622,.8049853372434017],[.9457478005865103,.7844574780058651],[.9516129032258065,.7404692082111437],[.9516129032258065,.7228739002932552],[.9340175953079178,.655425219941349],[.907624633431085,.5997067448680352],[.8900293255131965,.5703812316715542],[.8636363636363636,.5381231671554252],[.8519061583577713,.5293255131964809],[.8343108504398827,.5175953079178885],[.15689149560117302,.08064516129032262],[.13929618768328444,.07771260997067453],[.12756598240469208,.07771260997067453],[.1158357771260997,.08357771260997071],[.10410557184750734,.09237536656891498],[.0747800586510264,.1217008797653959],[.06598240469208211,.14516129032258063],[.051319648093841645,.1950146627565983]],"energy.aura-veil":[[.0361328125,.3701171875],[.0478515625,.5166015625],[.0498046875,.5205078125],[.0712890625,.5419921875],[.1357421875,.5947265625],[.1552734375,.6103515625],[.1611328125,.6142578125],[.1767578125,.6240234375],[.3310546875,.7060546875],[.3369140625,.7080078125],[.3564453125,.7138671875],[.3642578125,.7158203125],[.3740234375,.7177734375],[.4072265625,.7216796875],[.9228515625,.6650390625],[.9462890625,.6533203125],[.9521484375,.6494140625],[.9599609375,.6416015625],[.9541015625,.5048828125],[.9521484375,.4833984375],[.9462890625,.4443359375],[.9443359375,.4365234375],[.9248046875,.3857421875],[.9130859375,.3662109375],[.9033203125,.3525390625],[.8896484375,.3349609375],[.8466796875,.2861328125],[.8427734375,.2841796875],[.8369140625,.2822265625],[.7412109375,.2822265625],[.4150390625,.3056640625],[.0361328125,.3681640625]],"light.aurora":[[.08357771260997067,.4736070381231672],[.08944281524926687,.5498533724340176],[.09530791788856305,.5674486803519061],[.1158357771260997,.6143695014662757],[.1217008797653959,.626099706744868],[.13343108504398826,.6466275659824047],[.14222873900293256,.6612903225806452],[.22140762463343108,.7580645161290323],[.24486803519061584,.7844574780058651],[.24780058651026393,.7873900293255132],[.5791788856304986,.9486803519061584],[.6906158357771262,.9398826979472141],[.7287390029325513,.934017595307918],[.7756598240469208,.9134897360703812],[.8695014662756598,.8695014662756598],[.8988269794721407,.843108504398827],[.9105571847507331,.7052785923753666],[.9105571847507331,.6407624633431085],[.907624633431085,.5762463343108504],[.8782991202346041,.467741935483871],[.843108504398827,.3592375366568915],[.8343108504398827,.34457478005865105],[.8196480938416423,.3240469208211144],[.7727272727272727,.26832844574780057],[.6026392961876833,.14809384164222872],[.5087976539589443,.11290322580645162],[.34750733137829914,.06011730205278587],[.3357771260997067,.06011730205278587],[.2653958944281525,.0865102639296188],[.1187683284457478,.30351906158357767],[.10997067448680352,.3211143695014663],[.10703812316715543,.3299120234604106],[.08651026392961877,.3944281524926686],[.08357771260997067,.41202346041055715]],"light.beam":[[.060117302052785926,.07184750733137835],[.0747800586510264,.1217008797653959],[.10117302052785923,.17741935483870963],[.1158357771260997,.20674486803519065],[.12756598240469208,.2243401759530792],[.23900293255131966,.3885630498533724],[.37683284457478006,.5557184750733137],[.6202346041055719,.7697947214076246],[.7727272727272727,.8870967741935484],[.8900293255131965,.9398826979472141],[.9164222873900293,.9457478005865103],[.9486803519061584,.9457478005865103],[.9486803519061584,.9046920821114369],[.9428152492668622,.8695014662756598],[.9398826979472141,.8548387096774194],[.9281524926686217,.8343108504398827],[.8724340175953079,.7434017595307918],[.8196480938416423,.6730205278592376],[.7903225806451613,.6378299120234604],[.6994134897360704,.5293255131964809],[.655425219941349,.48240469208211145],[.4736070381231672,.31231671554252194],[.4149560117302053,.2595307917888563],[.3563049853372434,.21260997067448684],[.22434017595307917,.1217008797653959],[.15395894428152493,.08357771260997071],[.1158357771260997,.06304985337243407],[.09530791788856305,.05718475073313778],[.06304985337243402,.0513196480938416],[.060117302052785926,.05425219941348969]]},oe=e=>Object.hasOwn(W,e??``);function se(e,t,n){let r=W[e.assetId];if(e.presentationRole?.flow!==`akiskan-ink-flow-v1`||!r||t?.atlas?.status!==`ready`||t.variant?.sha256!==ae[r.atlas]||t.atlasId!==r.atlas||!r.cell.every((e,n)=>e===t.cell?.rectPixels?.[n]))return null;let i=G[e.assetId],a=t.asset.motionBounds?.localUvMargin??0,o=[a+1/r.cell[2]+V[0],a+1/r.cell[3]+V[1]],s=i?i.flatMap(([e,t])=>[-1,1].flatMap(n=>[-1,1].map(r=>[e+n*o[0],t+r*o[1]]))):null;return Object.freeze({active:!0,version:B,assetId:e.assetId,port:r.port??null,ends:r.ends??null,support:s,time:n,phase:e.phase})}function ce([e,t],n,r){let i=Math.sin(Math.PI*e)*Math.sin(Math.PI*t);return[V[0]*i*Math.sin(ie*t+.7*n+r),V[1]*i*Math.sin(ie*e-.55*n+r*.5)]}function le(e,t,n){let[r,i]=e,a=U(r)*12,o=(1-U(i))*12,s=Math.min(11,Math.floor(a)),c=Math.min(11,Math.floor(o)),l=a-s,u=o-c,d=(e,r)=>{let i=[e/12,1-r/12],a=ce(i,t,n);return i.map((e,t)=>e+a[t])},f=d(s,c),p=d(s,c+1),m=d(s+1,c+1),h=d(s+1,c);return l+u<=1?f.map((e,t)=>e*(1-l-u)+h[t]*l+p[t]*u):m.map((e,t)=>e*(l+u-1)+p[t]*(1-l)+h[t]*(1-u))}var ue=`
vec2 inkFlowDisplacement(vec2 uv,float time,float phase){
 float envelope=sin(3.141592653589793*uv.x)*sin(3.141592653589793*uv.y);
 return vec2(0.024*envelope*sin(6.283185307179586*uv.y+0.7*time+phase),
             0.0144*envelope*sin(6.283185307179586*uv.x-0.55*time+phase*0.5));
}`;function K(e){let[t,n]=V;return{inkFlowSizeBounds:e,alphaBounds:[U(e[0]-t),U(e[1]-n),U(e[2]+t),U(e[3]+n)]}}function q(e,t){return e.inkFlow?.active?le(t,e.inkFlow.time,e.phase):t}function de(e,t,n=1){let r=q(e,t),i=e.layout.screen,a=Math.cos(e.rotation),o=Math.sin(e.rotation),s=r[0]-.5,c=r[1]-.5;return[i.x+(a*s+o*c)*i.quadPixels*n,i.y+(o*s-a*c)*i.quadPixels]}function fe(e,t,n,r=1){if(!e.inkFlow?.ends)return null;let[i,a]=e.inkFlow.ends.map(t=>q(e,t)),o=a[0]-i[0],s=a[1]-i[1],c=(n[0]-t[0])/r,l=n[1]-t[1],u=Math.hypot(o,s),d=Math.hypot(c,l);if(!(u>.1&&d>1))return null;let f=Math.atan2(l,c)+Math.atan2(s,o),p=d/u,m=Math.cos(f),h=Math.sin(f),g=i[0]-.5,_=i[1]-.5;return{rotation:f,quad:p,x:t[0]-(m*g+h*_)*p*r,y:t[1]-(h*g-m*_)*p,start:[...t],end:[...n],sourceEnds:e.inkFlow.ends}}var J=(e,t,n)=>Math.max(t,Math.min(n,e)),pe=(e,t)=>e.reduce((e,n,r)=>e+n*t[r],0),me=(e,t)=>e.map((e,n)=>e-t[n]),Y=(e,t)=>[e[1]*t[2]-e[2]*t[1],e[2]*t[0]-e[0]*t[2],e[0]*t[1]-e[1]*t[0]],he=e=>Math.hypot(...e),X=e=>{let t=he(e);if(t<1e-10)throw TypeError(`Visible atmosphere: degenerate camera basis`);return e.map(e=>e/t)};function Z(e,t,n,r){if(typeof e!=`number`||!Number.isFinite(e)||e<n||e>r)throw TypeError(`Visible atmosphere: invalid ${t}`);return e}function ge(e,t){let n=Array.isArray(e)?e:e&&[e.x,e.y,e.z];if(!n||n.length!==3)throw TypeError(`Visible atmosphere: invalid ${t}`);return[0,1,2].map(e=>Z(n[e],t,-0xe8d4a51000,0xe8d4a51000))}function _e(e){if(!e)throw TypeError(`Visible atmosphere: camera required`);let t=ge(e.position,`camera.position`),n,r,i,a=e.matrixWorld?.elements;if(a&&a.length===16&&[...a].every(Number.isFinite))t=ge([a[12],a[13],a[14]],`camera world position`),r=X([a[0],a[1],a[2]]),i=X([a[4],a[5],a[6]]),n=X([-a[8],-a[9],-a[10]]);else{n=X(me(ge(e.target,`camera.target`),t));let a=Y(n,ge(e.up??[0,1,0],`camera.up`));he(a)<1e-8&&(a=Y(n,[0,0,1])),r=X(a),i=X(Y(r,n))}let o=Z(e.fov,`camera.fov`,1,170),s=Z(e.zoom??1,`camera.zoom`,.01,100);return{position:t,forward:n,right:r,up:i,tangent:Math.tan(o*Math.PI/360)/s}}function ve(e){let t=2166136261;for(let n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return(t>>>0)/4294967296}var Q=Object.freeze({celestial:Object.freeze([`astrology`,`geometry`,`chakra`,`spectrum`,`energy`,`elements`]),organic:Object.freeze([`energy`,`elements`,`spectrum`,`chakra`,`geometry`,`astrology`]),fusion:Object.freeze([`astrology`,`chakra`,`energy`,`elements`,`spectrum`,`geometry`])}),ye=e=>e.layoutId??e.id;function $(e){let t=e.alphaBounds??e.visualFootprint?.alphaBounds;if(t){if(!Array.isArray(t)||t.length!==4)throw TypeError(`Visible atmosphere: alphaBounds must be [left,top,right,bottom]`);if(t=t.map(e=>Z(e,`alphaBounds`,0,32768)),t.some(e=>e>1)){let n=e.assetDimensions;if(!Array.isArray(n)||n.length!==2)throw TypeError(`Visible atmosphere: pixel alphaBounds require assetDimensions`);let r=Z(n[0],`asset width`,1,32768),i=Z(n[1],`asset height`,1,32768);t=t.map((e,t)=>e/(t%2?i:r))}}else if(e.visualFootprint){let n=e.visualFootprint,r=Z(n.width,`footprint.width`,.001,1),i=Z(n.height,`footprint.height`,.001,1),a=Z(n.centerX??.5,`footprint.centerX`,0,1),o=Z(n.centerY??.5,`footprint.centerY`,0,1);t=[a-r/2,o-i/2,a+r/2,o+i/2]}else{let n=e.motifIndex??0;if(!Number.isInteger(n)||n<0||n>100)throw TypeError(`Visible atmosphere: invalid motifIndex`);t=e.theme===`elements`?[[177/627,37/627,448/627,592/627],[50/627,80/627,564/627,553/627],[40/627,83/627,582/627,566/627],[27/627,48/627,561/627,566/627]][Math.min(n,3)]:[.1,.1,.9,.9]}if(t.some(e=>e<0||e>1)||t[2]<=t[0]||t[3]<=t[1])throw TypeError(`Visible atmosphere: invalid alpha footprint bounds`);return t}function be(e,{camera:t,bounds:n,viewport:r,config:i={},protection:a,partitionOnly:o=!1}={}){if(!Array.isArray(e)||e.length>512)throw TypeError(`Visible atmosphere: at most 512 nodes required`);let s=_e(t),c=ge(n?.center,`bounds.center`),l=Z(n?.radius,`bounds.radius`,1e-6,1e9),u=Z(n?.floorY??0,`floorY`,-0xe8d4a51000,0xe8d4a51000),d=Z(r?.cssWidth??r?.width,`viewport width`,64,32768),f=Z(r?.cssHeight??r?.height,`viewport height`,64,32768),p=Z(t.aspect??d/f,`camera.aspect`,.05,20),m=d/(f*p),h=i.presentation??`show`,g=i.artDirection??`fusion`;if(!Object.hasOwn(Q,g))throw TypeError(`Visible atmosphere: invalid artDirection`);let _=Q[g],v=Z(i.motifScale??1,`motifScale`,.5,2);if(![`calm`,`balanced`,`show`].includes(h))throw TypeError(`Visible atmosphere: invalid presentation`);let y=Object.fromEntries([`left`,`top`,`right`,`bottom`].map(e=>[e,Z(r?.safeInsets?.[e]??12,`inset.${e}`,0,(e===`left`||e===`right`?d:f)*.45)])),b=a?.rects??[];if(!Array.isArray(b)||b.length>32)throw TypeError(`Visible atmosphere: at most 32 reserved rectangles`);let x=b.map(e=>{if(!Array.isArray(e)||e.length!==4)throw TypeError(`Visible atmosphere: invalid reserved rectangle`);let t=e.map((e,t)=>Z(e,`reserved rectangle`,0,t%2?f:d));if(t[2]<t[0]||t[3]<t[1])throw TypeError(`Visible atmosphere: inverted reserved rectangle`);return t[0]===0&&t[2]===d&&(t[1]===0&&(y.top=Math.max(y.top,t[3])),t[3]===f&&(y.bottom=Math.max(y.bottom,f-t[1]))),t[1]===0&&t[3]===f&&(t[0]===0&&(y.left=Math.max(y.left,t[2])),t[2]===d&&(y.right=Math.max(y.right,d-t[0]))),t});for(let e of x)e[0]<=y.left+3&&e[2]>=d-y.right-3&&(e[1]<=y.top+3&&(y.top=Math.max(y.top,e[3])),e[3]>=f-y.bottom-3&&(y.bottom=Math.max(y.bottom,f-e[1]))),e[1]<=y.top+3&&e[3]>=f-y.bottom-3&&(e[0]<=y.left+3&&(y.left=Math.max(y.left,e[2])),e[2]>=d-y.right-3&&(y.right=Math.max(y.right,d-e[0])));let S=a?.sample;if(S!==void 0&&typeof S!=`function`)throw TypeError(`Visible atmosphere: invalid protection.sample`);let C=a?.selectionSample;if(C!==void 0&&typeof C!=`function`)throw TypeError(`Visible atmosphere: invalid protection.selectionSample`);let w=e=>{let t=me(e,s.position),n=pe(t,s.forward);return n<=1e-6?null:{x:d*(.5+pe(t,s.right)/(2*n*s.tangent*p)),y:f*(.5-pe(t,s.up)/(2*n*s.tangent)),depth:n,pixelsPerWorld:f/(2*n*s.tangent)}},T=w(c),E=e.map((e,t)=>{if(typeof e.id!=`string`||e.id.length>512)throw TypeError(`Visible atmosphere: stable id required`);let n=ge(e.position,`node.position`),r=ge(e.anchor??e.position,`node.anchor`);if(Z(e.size,`node.size`,1e-8,0xe8d4a51000),e.flowConnector!==void 0&&typeof e.flowConnector!=`boolean`)throw TypeError(`Visible atmosphere: flowConnector must be boolean`);if(e.detailLeader!==void 0&&typeof e.detailLeader!=`boolean`)throw TypeError(`Visible atmosphere: detailLeader must be boolean`);let i=e.artFlow?.sourcePosition,a=Array.isArray(i)&&i.length===3&&i.every(Number.isFinite)?w(i):null;return{node:e,index:t,position:n,anchor:r,source:a,neighbor:a&&e.neighborTarget?w(ge(e.neighborTarget,`source neighbor`)):null,priority:Z(e.heroPriority??0,`heroPriority`,0,100),p:w(n),rotation:Z(e.rotation??0,`rotation`,-0xe8d4a51000,0xe8d4a51000),fp:$(e)}});if(new Set(E.map(e=>e.node.id)).size!==E.length)throw TypeError(`Visible atmosphere: duplicate node ids`);let D=!o&&E.some(e=>e.node.presentationRole),O=new Set;for(let[e,t]of _.entries()){let n=e%2?1:-1,r=E.filter(e=>e.node.theme===t&&e.node.kind!==`particles`),i=e=>n*(e.anchor[0]-c[0])/l+ve(ye(e.node))*.08;if(r.sort((e,t)=>t.priority-e.priority||i(t)-i(e)||e.node.id.localeCompare(t.node.id)),D)for(let e of r)e.node.presentationRole?.representative&&O.add(e.node.id);else r[0]&&O.add(r[0].node.id)}let k=Math.max(1,Math.min(2,Math.floor(d*f*.12/140**2))),A=E.filter(e=>O.has(e.node.id)).sort((e,t)=>_.indexOf(e.node.theme)-_.indexOf(t.node.theme)),j=D?E.filter(e=>[`main`,`support`].includes(e.node.presentationRole?.name)).sort((e,t)=>Number(t.node.presentationRole.name===`main`)-Number(e.node.presentationRole.name===`main`)||e.node.id.localeCompare(t.node.id)):A.slice(0,k),ee=new Set(j.map(e=>e.node.id)),M=E.filter(e=>e.node.flowConnector===!0&&e.node.kind!==`particles`&&!ee.has(e.node.id)&&[`energy`,`elements`,`spectrum`].includes(e.node.theme)).sort((e,t)=>t.priority-e.priority||_.indexOf(e.node.theme)-_.indexOf(t.node.theme)||ye(e.node).localeCompare(ye(t.node))),N=new Set,P=new Set,F=g===`celestial`?1:2;for(let e of[!0,!1])for(let t of M){if(N.size>=F)break;N.has(t.node.id)||e&&P.has(t.node.theme)||(N.add(t.node.id),P.add(t.node.theme))}let I=new Set(E.filter(e=>e.node.detailLeader===!0&&e.node.kind!==`particles`&&/^symbol\./.test(e.node.assetId??``)&&!O.has(e.node.id)).sort((e,t)=>t.priority-e.priority||ye(e.node).localeCompare(ye(t.node))).slice(0,2).map(e=>e.node.id)),L=e=>D?{main:5,support:4,connector:3,secondary:2,detail:0}[e.node.presentationRole?.name]??0:0,te=(e,t)=>e.node.presentationRole?.name===`connector`&&t.node.presentationRole?.name===`connector`?e.node.presentationRole.linkT-t.node.presentationRole.linkT:0,R=[...E].sort((e,t)=>L(t)-L(e)||te(e,t)||Number(O.has(t.node.id))-Number(O.has(e.node.id))||Number(N.has(t.node.id))-Number(N.has(e.node.id))||_.indexOf(e.node.theme)-_.indexOf(t.node.theme)||e.node.id.localeCompare(t.node.id)),z=Array(e.length),B=[],V=D?E.filter(e=>N.has(e.node.id)&&e.node.inkFlow?.ends).sort((e,t)=>e.node.presentationRole.linkT-t.node.presentationRole.linkT||e.node.id.localeCompare(t.node.id)):[],H={count:e.length,visibleCount:0,protectedOverlapCount:0,unplaceableCount:0,maskedCount:0,correctedCount:0,representativeCount:O.size,readableHeroCount:0,maxWorldCorrection:0,depthCorrectedCount:0,maxDepthCorrection:0,sourceAttachmentCount:0,protectionKnown:!!S,viewDependent:!0,correctionCapRadii:2,ordinaryCorrectionCapRadii:1.15,themes:{},artDirection:g,primaryThemes:[...new Set(j.map(e=>e.node.theme))],connectorCount:N.size,detailLeaderCount:I.size,...D?{mainId:j.find(e=>e.node.presentationRole.name===`main`)?.node.id??null,supportId:j.find(e=>e.node.presentationRole.name===`support`)?.node.id??null}:{},limitations:[`CPU alpha-support/mask samples are not GPU ink visibility`,`stateless local energy may overlap product; shader masks overlap without teleporting`,`source radial angle may bend within the world-offset cap`]},ie=0;for(let e of R){let{node:t,fp:n,position:r}=e,i=O.has(t.id),a=e.p??e.source,o=e.rotation,c=i?ie++:-1,_=ee.has(t.id),b=N.has(t.id),E=I.has(t.id),k=D?t.presentationRole?.name:null,A=_?2:1.15,j=H.themes[t.theme]??={count:0,visible:0,representativeVisible:!1};if(j.count++,!a||!T){z[e.index]={...t,position:r,layout:{visible:!1,estimatedVisible:!1,representative:i,primaryHero:_,reason:`behind-camera`}},H.unplaceableCount++;continue}let M=null;if(b&&t.inkFlow?.ends&&V.length===N.size){let n=B.find(e=>e.id===t.presentationRole.mainId)?.node,r=B.find(e=>e.id===t.presentationRole.supportId)?.node;if(n?.inkFlow?.port&&r?.inkFlow?.port&&n.layout.visible&&r.layout.visible){let i=de(n,n.inkFlow.port,m),a=de(r,r.inkFlow.port,m),s=i.map((e,t)=>(e+a[t])/2),c=[s[0]-T.x,s[1]-T.y],l=Math.hypot(a[0]-i[0],a[1]-i[1]),u=Math.hypot(...c,4),d=Math.min(Math.hypot(i[0]-T.x,i[1]-T.y),Math.hypot(a[0]-T.x,a[1]-T.y)),f=Math.min(l*.22,Math.max(0,d*.92-Math.hypot(...c))),p=e=>i.map((t,n)=>t+(a[n]-t)*e+c[n]/u*f*4*e*(1-e)),h=V.indexOf(e),g=V.length,_=h>0?B.find(e=>e.id===V[h-1].node.id)?.node:null;M=fe(t,_?.layout.visible&&_.inkFlow?.ends?de(_,_.inkFlow.ends[1],m):p(h/g),p((h+1)/g),m),M&&(o=M.rotation)}}let P=Math.cos(o),F=Math.sin(o),L=[],te=b&&t.inkFlow?.support?t.inkFlow.support:[n[0],n[2]].flatMap(e=>[n[1],n[3]].map(t=>[e,1-t]));for(let[e,t]of te){let n=e-.5,r=t-.5,i=P*n+F*r,a=-F*n+P*r;L.push({x:i*m,y:-a,worldY:s.right[1]*i+s.up[1]*a})}let R={minX:Math.min(...L.map(e=>e.x)),maxX:Math.max(...L.map(e=>e.x)),minY:Math.min(...L.map(e=>e.y)),maxY:Math.max(...L.map(e=>e.y))},U=Math.max(R.maxX-R.minX,R.maxY-R.minY),ae=U;if(t.inkFlowSizeBounds){let e=t.inkFlowSizeBounds,n=e[2]-e[0],r=e[3]-e[1];ae=Math.max((Math.abs(P)*n+Math.abs(F)*r)*m,Math.abs(F)*n+Math.abs(P)*r)}let W=J(Math.min(d,f)*.3,120,170);g===`celestial`&&t.theme===`geometry`&&(W=J(Math.min(d,f)*.255,120,142)),g===`organic`&&(W=J(Math.min(d,f)*(t.theme===`energy`?.36:.32),130,t.theme===`energy`?190:180)),g===`fusion`&&t.theme===`chakra`&&(W=J(Math.min(d,f)*.29,120,148));let G=J(Math.min(d,f)*.145,44,72);g===`organic`&&t.theme===`astrology`&&(G=J(Math.min(d,f)*.105,44,56)),g===`fusion`&&t.theme===`geometry`&&(G=J(Math.min(d,f)*.12,44,60));let oe=d-y.left-y.right-6,se=f-y.top-y.bottom-6,ce=J(Math.min(oe,se)/320,.45,1),le=J(Math.min(d,f)*.25,84,128);D&&(W=Math.min(J(Math.min(d,f)*.52,150,260),Math.max(1,oe)*.82,Math.max(1,se)*.88)*(k===`support`?.58:1)*(h===`calm`?.76:h===`balanced`?.9:1),G=J(Math.min(d,f)*.145,44,68)*ce,le=J(Math.min(d,f)*.28,76,140)*ce);let ue=t.kind===`particles`?J(6*v*(.8+.4*ve(ye(t))),4,10):v*(_?h===`calm`&&!D?80:W:b?le:i?G:E?J(Math.min(d,f)*.085,32,46)*(D?ce*.75:1):J(t.size*a.pixelsPerWorld/v,D?5:8,D?18*ce:[`elements`,`energy`,`spectrum`].includes(t.theme)?32:22)),K=Math.max(1,Math.min(M?.quad??ue/ae,Math.max(1,oe)/(R.maxX-R.minX),Math.max(1,se)/(R.maxY-R.minY))),q={left:y.left+3-R.minX*K,right:d-y.right-3-R.maxX*K,top:y.top+3-R.minY*K,bottom:f-y.bottom-3-R.maxY*K},Y=J(a.x,q.left,Math.max(q.left,q.right)),X=J(a.y,q.top,Math.max(q.top,q.bottom)),_e=(e,n,r=!1)=>{if(!S&&!C)return 0;let i=0;for(let a of[.15,.5,.85])for(let o of[.15,.5,.85]){let s=e+(R.minX+(R.maxX-R.minX)*a)*K,c=n+(R.minY+(R.maxY-R.minY)*o)*K,l=S?Z(S(s,c),`mask sample`,0,1):0,u=C?Z(C(s,c),`selection mask sample`,0,1):0;i+=(r?1-re(l,u,ne(t)):l)/9}return i},Q=Y,$=X,be=null;if(e.source){let n=e.source,r=e.neighbor??n,a=t.kind===`ribbons`&&[`elements`,`energy`,`spectrum`].includes(t.theme),o=a?{x:(n.x+r.x)/2,y:(n.y+r.y)/2}:n,s=T.x-o.x,c=T.y-o.y,l=Math.hypot(s,c),u=D?Math.hypot(l,12):l,d=D?s/u:l>1e-8?s/l:0,f=D?c/u:l>1e-8?c/l:0,p=r.x-n.x,m=r.y-n.y,h=Math.hypot(p,m),g=D?Math.hypot(h,.5):h,v=D?p/g:h>.5?p/h:0,y=D?m/g:h>.5?m/h:0,x=Math.max(...L.map(e=>Math.abs((e.x*d+e.y*f)*K))),S=K*U,C=Number.isFinite(t.phase)?t.phase:ve(ye(t))*Math.PI*2,E=Math.sin(C)>=0?1:-1,O=/^symbol\./.test(t.assetId??``),A=0,j=0;D&&_?A=-.78*x:D&&(b||i)?A=-.45*x:_&&a?A=Math.min(.28*S,.6*x):b?A=Math.min(12,.25*x):O?A=-Math.min(18,.3*x):_&&[`body`,`lotus`].includes(t.layoutRole)?A=.45*S:i||[`body`,`lotus`].includes(t.layoutRole)?A=Math.min(20,.3*x):a?(A=E*Math.min(16,.35*x),j=Math.min(6,.15*h)*Math.sin(C)):(A=E*Math.min(10,.25*x),j=Math.min(4,.1*h)*Math.sin(C));let ee=w(e.anchor),M=e.p&&ee?e.p.x-ee.x:0,N=e.p&&ee?e.p.y-ee.y:0,P=Math.hypot(M,N),F=P>1e-8?6*Math.tanh(P/6)/P:0,I=M*F,te=N*F,R=o.x+d*A+v*j+I,ne=o.y+f*A+y*j+te;Q=J(R,q.left,q.right),$=J(ne,q.top,q.bottom);let re=[];if(D&&(_||b||i)){let e=Math.tanh((o.x-T.x+v*S*.06)/Math.max(12,S*.1)),n=Math.tanh((o.y-T.y+y*S*.06)/Math.max(12,S*.1));Q=J(Q+e*Math.abs(ne-$),q.left,q.right),$=J($+n*Math.abs(R-J(R,q.left,q.right)),q.top,q.bottom);let r=B.find(e=>e.id===t.presentationRole?.mainId),i=B.find(e=>e.id===t.presentationRole?.supportId);if(k===`support`&&r){let e=Q-r.x,t=$-r.y,n=Math.hypot(e,t),i=Math.max(0,.42*(S+r.diameter)-n),a=e+v*4,o=t+y*4,s=Math.hypot(a,o,4);Q=J(Q+a/s*i,q.left,q.right),$=J($+o/s*i,q.top,q.bottom),re.push(r.id)}if(b&&r){let e=i??{x:o.x,y:o.y},n=e.x-r.x,a=e.y-r.y,s=t.presentationRole.linkT??.5,c=r.x+n*s,u=r.y+a*s,p=c-T.x,m=u-T.y,h=Math.hypot(p,m),g=Math.min(l,Math.hypot(r.x-T.x,r.y-T.y)),_=Math.max(0,g*.88-h),v=p-d*4,y=m-f*4,b=Math.hypot(v,y,4);c+=v/b*_,u+=y/b*_,Q=J(c*.85+o.x*.15+I,q.left,q.right),$=J(u*.85+o.y*.15+te,q.top,q.bottom),re.push(r.id),i&&re.push(i.id)}}be={basis:`canonical-source-neighbor`,source:[n.x,n.y],neighbor:[r.x,r.y],target:[Q,$],inwardPixels:A,tangentPixels:j,motionPixels:[I,te],...D?{outwardPixels:-A,connectedTo:re}:{}},Y=Q,X=$,H.sourceAttachmentCount++}if(M&&(Q=J(M.x,q.left,q.right),$=J(M.y,q.top,q.bottom),Y=Q,X=$,be&&={...be,target:[Y,X],inkBasis:`pinned-ready-alpha-ports`}),!M&&(i||b||D&&_)){if(!e.source){let e=(c%2?-1:1)>0?q.left+8:q.right-8,n=g===`celestial`?c===0?.28:.62:g===`organic`?c===0?.52:.34:c===0?.25:.68,r=q.top+(q.bottom-q.top)*(_?n:[.18,.42,.74,.32][Math.max(0,c-2)%4]),i=_?.88:.62;if(Q=J(Y*(1-i)+e*i,q.left,q.right),$=J(X*(1-i)+r*i,q.top,q.bottom),b){let e=w(ge(t.neighborTarget??t.anchor??t.position,`connector attachment`))??T,n=B.find(e=>e.primary&&e.theme===t.theme)??B.find(e=>e.primary);n&&(Q=J(a.x*.25+(e.x*.55+n.x*.45)*.75,q.left,q.right),$=J(a.y*.25+(e.y*.55+n.y*.45)*.75,q.top,q.bottom))}}Y=Q,X=$;let n=(e,t)=>{let n=_e(e,t,!0),r=(R.maxX-R.minX)*K,i=(R.maxY-R.minY)*K,a=((e-Q)/90)**2+((t-$)/90)**2+n*n*.75;for(let n of B){let o=(Math.max(r,i)+n.diameter)*.6+8,s=D&&(_||b)&&n.primary?.025:.5;a+=s*Math.exp(-((e-n.x)**2+(t-n.y)**2)/(2*o*o))}return a};for(let e=0;e<10;e++){let e=(n(Y+6,X)-n(Y-6,X))/12,t=(n(Y,X+6)-n(Y,X-6))/12;Y=J(Y-6*Math.tanh(e*20),q.left,q.right),X=J(X-6*Math.tanh(t*20),q.top,q.bottom)}}let xe=s.forward.map((e,t)=>e+s.right[t]*(2*Y/d-1)*s.tangent*p+s.up[t]*(1-2*X/f)*s.tangent),Se=Math.min(...L.map(e=>e.worldY)),Ce=-xe[1]-K*2*s.tangent/f*Se,we=Ce>1e-10?(s.position[1]-u-l*.002)/Ce:1/0,Te=Math.min(a.depth,we),Ee=s.position.map((e,t)=>e+xe[t]*Te),De=he(me(Ee,r));if(De>l*A){let e=(2*q.left/d-1)*s.tangent*p,t=(2*q.right/d-1)*s.tangent*p,n=(1-2*q.bottom/f)*s.tangent,i=(1-2*q.top/f)*s.tangent,a=K*2*s.tangent/f*Se,o=[{n:s.right.map((t,n)=>t-s.forward[n]*e),b:0},{n:s.right.map((e,n)=>s.forward[n]*t-e),b:0},{n:s.up.map((e,t)=>e-s.forward[t]*n),b:0},{n:s.up.map((e,t)=>s.forward[t]*i-e),b:0},{n:s.forward,b:1e-4},{n:s.forward.map((e,t)=>e*a+ +(t===1)),b:u+l*.002-s.position[1]}];for(let e=0;e<48;e++){for(let e of o){let t=me(Ee,s.position),n=e.b-pe(e.n,t);if(n>0){let t=n/pe(e.n,e.n);Ee=Ee.map((n,r)=>n+e.n[r]*t)}}let e=me(Ee,r),t=he(e),n=Math.min(1,l*A/t);Ee=r.map((t,r)=>t+e[r]*n)}}let Oe=w(Ee);if(!Oe){z[e.index]={...t,position:r,layout:{visible:!1,estimatedVisible:!1,representative:i,reason:`no-forward-depth`}},H.unplaceableCount++;continue}Te=Oe.depth;let ke=K*2*Te*s.tangent/f;Y=Oe.x,X=Oe.y;let Ae=Y+R.minX*K,je=Y+R.maxX*K,Me=X+R.minY*K,Ne=X+R.maxY*K,Pe=Ee[1]+ke*Se-u,Fe=x.some(e=>e[2]>e[0]&&e[3]>e[1]&&je>e[0]&&Ae<e[2]&&Ne>e[1]&&Me<e[3]),Ie=Oe.depth>0&&Ae>=y.left-1e-6&&je<=d-y.right+1e-6&&Me>=y.top-1e-6&&Ne<=f-y.bottom+1e-6&&Pe>=-1e-7&&!Fe,Le=_e(Y,X),Re=_e(Y,X,!0),ze=Ie&&Re<.75;De=he(me(Ee,r));let Be={visible:Ie,estimatedVisible:ze,representative:i,primaryHero:_,flowConnector:b,detailLeader:E,correctionCapRadii:A,artRole:D&&k?k:_?`primary`:b?`connector`:i?`secondary`:E?`sign`:t.kind===`particles`?`particle`:`detail`,reason:Ie?ze?null:`protected-by-mask`:`world-cap-frustum-floor-or-reserved`,screen:{x:Y,y:X,inkCenterX:(Ae+je)/2,inkCenterY:(Me+Ne)/2,quadPixels:K,visibleFootprintPixels:K*U,visibleWidth:je-Ae,visibleHeight:Ne-Me,inkBounds:[Ae,Me,je,Ne],safeguardedHalfExtent:Math.max(je-Ae,Ne-Me)/2+3},sourceAttachment:be,protectedOverlap:Le,effectiveProtectedOverlap:Re,overProductGain:ne(t),worldCorrection:De,depthCorrection:Math.max(0,a.depth-Te),floorClearance:Pe};if(z[e.index]={...t,position:Ee,size:ke,rotation:o,layout:Be},M){let n=t.inkFlow.ends.map(t=>de(z[e.index],t,m));Be.inkCorrespondence={basis:`pinned-ready-alpha-ports`,targetEnds:[M.start,M.end],actualEnds:n,maxErrorPixels:Math.max(...n.map((e,t)=>Math.hypot(e[0]-[M.start,M.end][t][0],e[1]-[M.start,M.end][t][1]))),limitation:`Correspondence is geometric; actual alpha overlap, RG/Q and native depth require independent coverage/native checks`}}De>1e-8&&H.correctedCount++,H.maxWorldCorrection=Math.max(H.maxWorldCorrection,De),Be.depthCorrection>1e-8&&H.depthCorrectedCount++,H.maxDepthCorrection=Math.max(H.maxDepthCorrection,Be.depthCorrection),Le>.05&&H.protectedOverlapCount++,Ie?ze||H.maskedCount++:H.unplaceableCount++,ze&&(H.visibleCount++,j.visible++,i&&(j.representativeVisible=!0)),_&&ze&&K*U>=120-1e-8&&H.readableHeroCount++,(i||b||D&&_)&&B.push({id:t.id,x:Y,y:X,diameter:K*U,primary:_,theme:t.theme,node:z[e.index]})}return{nodes:z,diagnostics:H}}var xe=Object.freeze({elements:`element.`,chakra:`chakra.`,energy:`energy.`,spectrum:`light.`}),Se=Object.freeze({veil:`aura-veil`,filament:`filament`,rings:`wave-ring`,vortex:`vortex`}),Ce=Object.freeze({beam:`beam`,glow:`soft-glow`,caustic:`caustic`,prism:`prism-trace`,aurora:`aurora`});function we(e,t,n=O.assets){if(!e||typeof e.id!=`string`||!Array.isArray(n))throw TypeError(`Stable node and governed assets required`);let r=n.filter(e=>typeof e.id==`string`),i=Array.isArray(e.assetRefs)?e.assetRefs:[],a=[];if(e.theme===`astrology`){if(e.motif===`zodiac`)a=r.filter(e=>e.id.startsWith(`symbol.zodiac.`));else if(e.motif===`celestial`){let e=i.find(e=>e.startsWith(`celestial.`)&&e!==`celestial.orbit`);a=r.filter(t=>t.id===e),!a.length&&e&&(a=r.filter(t=>t.id===`symbol.${e}`)),e||(a=r.filter(e=>e.id.startsWith(`celestial.`)))}}else if(xe[e.theme]){let t;e.theme===`elements`&&(t=`element.${e.motif}`),e.theme===`energy`&&(t=`energy.${Se[e.motif]}`),e.theme===`spectrum`&&(t=`light.${Ce[e.motif]}`),e.theme===`chakra`&&(t=i.find(e=>/^chakra\.lotus-[1-7]$/.test(e))),t&&(a=r.filter(e=>e.id===t||e.id.startsWith(`${t}.`))),!a.length&&e.theme===`chakra`&&(a=r.filter(e=>/^chakra\.lotus-[1-7]$/.test(e.id)))}if(a.sort((e,t)=>e.id.localeCompare(t.id)),!a.length)return null;let o=e.layoutId??e.id.replace(/:outgoing-style(?::\d+)?$/,``);return a[Math.min(a.length-1,Math.floor(D(`${t.seed}:${o}:asset-v1`)*a.length))].id}function Te(e){if(!e)return null;let{cell:t,variant:n}=e,[r,i,a,o]=t.rectPixels,s=t.alphaBounds??t.alphaBoundsPixelsTopLeft;if(!s||![r,i,a,o,...s].every(Number.isFinite)||a<=0||o<=0)throw TypeError(`Measured atlas cell/alpha bounds required`);let c=[(s[0]-r)/a,(s[1]-i)/o,(s[2]-r)/a,(s[3]-i)/o];if(c.some(e=>e<0||e>1)||c[2]<=c[0]||c[3]<=c[1])throw TypeError(`Ordered cell-local alpha bounds required`);let l=e.asset.motionBounds?.localUvMargin??0;if(!Number.isFinite(l)||l<0||l>.1)throw TypeError(`Bounded local UV motion margin required`);let u=[Math.max(0,c[0]-l),Math.max(0,c[1]-l),Math.min(1,c[2]+l),Math.min(1,c[3]+l)];return{assetId:e.asset.id,atlasId:e.atlasId,uvRect:t.uvRect??[r/n.dimensions[0],1-(i+o)/n.dimensions[1],a/n.dimensions[0],o/n.dimensions[1]],alphaBounds:u,measuredAlphaBounds:c,uvMotionPadding:l,assetDimensions:[a,o],nativeVisiblePixels:Math.max(s[2]-s[0],s[3]-s[1]),visualFootprint:{width:u[2]-u[0],height:u[3]-u[1],centerX:(u[0]+u[2])/2,centerY:(u[1]+u[3])/2},tintable:e.asset.tintable===!0}}var Ee=e=>Math.max(0,Math.min(1,e)),De=e=>{let t=Ee(e);return t*t*t*(t*(t*6-15)+10)},Oe=e=>e.layoutId??e.id,ke=e=>({...e,position:[...e.position]}),Ae=e=>Math.max(e.opacity,e.nativeReady===!0?e.nativeOpacity??0:0),je=e=>e.opacity>.001||e.nativeReady===!0&&e.nativeOpacity>.001;function Me(){let e=[],t=new Map,n=new Map,r=0,i=0,a={active:!1,progress:1,fromCount:0};return{remember(t){e=t.filter(e=>je(e)&&e.layout?.visible!==!1).map(ke)},begin(a,o,{reducedMotion:s=!1}={}){if(!Number.isFinite(a)||a<0||!Number.isFinite(o)||o<0)throw RangeError(`Finite nonnegative visual transition clock/duration required`);r=a,i=s?0:o,t=new Map(e.map(e=>[e.id,ke(e)])),n=new Map;for(let t of e){let e=n.get(Oe(t));(!e||Ae(e)<Ae(t))&&n.set(Oe(t),ke(t))}},sample(e,o,s){if(!Number.isFinite(s)||s<0)throw RangeError(`Finite nonnegative visual clock required`);let c=i&&t.size?De((s-r)/i):1,l=new Map(e.map(e=>[e.id,e])),u=[];for(let e of o){let r=l.get(e.id),i=t.get(e.id)??n.get(Oe(e));r?i&&c<1?u.push({...r,position:r.position.map((e,t)=>i.position[t]+(e-i.position[t])*c),size:i.size+(r.size-i.size)*c,rotation:i.rotation+Math.atan2(Math.sin(r.rotation-i.rotation),Math.cos(r.rotation-i.rotation))*c,layout:{...r.layout,liveEditTransition:!0,targetGeometryVisible:r.layout?.visible!==!1}}):u.push(r):i&&c<1&&u.push({...e,position:[...i.position],size:i.size,rotation:i.rotation,layout:{...i.layout,liveEditRetirement:!0}})}return a={active:c<1,progress:c,fromCount:t.size,scope:`live edit poses; layout statistics describe target arrangement while active`},u},diagnostics(){return{...a}},clear(){e=[],t.clear(),n.clear(),i=0,a={active:!1,progress:1,fromCount:0}}}}var Ne=Object.freeze({lotus:0,centers:1,aura:2});Object.freeze([.62,.7,.82]);var Pe=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),Fe=`
float chakraBehaviorSquare(float x){return x*x;}
// Optional host override, e.g. #define CHAKRA_BEHAVIOR_TINT vTint before this block.
// Its default is controlled muted ink, never arbitrary RGB under alpha-zero pixels.
#ifndef CHAKRA_BEHAVIOR_TINT
#define CHAKRA_BEHAVIOR_TINT vec3(0.62,0.70,0.82)
#endif
float chakraBehaviorClock(float time){return mod(time,125.66370614359172);}
float chakraBehaviorDomain(vec2 uv){
 float d=min(min(uv.x,uv.y),min(1.0-uv.x,1.0-uv.y));
 return smoothstep(0.0,0.015,d);
}
vec2 chakraBehaviorUnclampedUv(vec2 uv,float variant,float time){
 vec2 p=uv-0.5;float r=length(p);float t=chakraBehaviorClock(time);
 if(variant<0.5)return uv+p*sin(t*0.4+r*14.0)*0.007;
 if(variant<1.5)return uv+p*sin(t*0.55)*0.004;
 return 0.5+p/0.70+p*sin(t*0.3+r*10.0)*0.004;
}
vec2 chakraLocalUv(vec2 uv,float variant,float time){
 return clamp(chakraBehaviorUnclampedUv(uv,variant,time),vec2(0.001),vec2(0.999));
}
float chakraBehaviorRing(float r,float radius){
 return 1.0-smoothstep(0.007,0.010,abs(r-radius));
}
vec3 chakraBehaviorFieldColour(vec4 texel){
 float trust=smoothstep(0.02,0.12,texel.a);
 return mix(clamp(CHAKRA_BEHAVIOR_TINT,vec3(0.0),vec3(1.0)),clamp(texel.rgb,vec3(0.0),vec3(1.0)),trust);
}
vec4 chakraComposite(vec4 texel,vec2 uv,float variant,float time){
 float t=chakraBehaviorClock(time),r=length(uv-0.5),edge=chakraBehaviorDomain(uv);
 vec3 body=clamp(texel.rgb,vec3(0.0),vec3(1.0));
 float bodyA=clamp(texel.a,0.0,1.0),fieldA=0.0;
 if(variant<0.5)return vec4(body,bodyA*edge);
 if(variant<1.5){
  bodyA*= (1.0-smoothstep(0.12,0.22,r))*(0.90+0.10*sin(t*0.55));
  float inner=chakraBehaviorRing(r,0.15+0.008*sin(t*0.4));
  float outer=chakraBehaviorRing(r,0.22+0.006*sin(t*0.4+1.7));
  fieldA=(0.10+0.03*sin(t*0.55))*max(inner,outer*0.7);
 }else{
  bodyA*=0.22*chakraBehaviorDomain(chakraBehaviorUnclampedUv(uv,variant,time));
  float veil=exp(-chakraBehaviorSquare((r-0.30)/0.09));
  veil*=smoothstep(0.07,0.16,r)*(1.0-smoothstep(0.36,0.39,r));
  fieldA=0.15*(0.85+0.15*sin(t*0.35))*veil;
 }
 float alpha=clamp(bodyA+fieldA*(1.0-bodyA),0.0,1.0);
 vec3 premultiplied=body*bodyA+chakraBehaviorFieldColour(texel)*fieldA*(1.0-bodyA);
 return vec4(alpha>0.000001?premultiplied/alpha:body,alpha*edge);
}
`;function Ie(e,t,n){if(!Array.isArray(e)||e.length!==t||!e.every(e=>typeof e==`number`&&Number.isFinite(e)&&e>=0&&e<=1))throw TypeError(`Chakra ${n} must have ${t} finite values within0..1`);return e}function Le({motif:e,alphaBounds:t,visualFootprint:n}={}){if(!Object.hasOwn(Ne,e))throw TypeError(`Chakra motif must be lotus,centers or aura`);let r;if(t!==void 0)r=[...Ie(t,4,`alpha bounds`)];else if(n!==void 0){let{width:e,height:t,centerX:i=.5,centerY:a=.5}=n||{};Ie([e,t,i,a],4,`visual footprint`),r=[i-e/2,a-t/2,i+e/2,a+t/2]}else r=[0,0,1,1];if(r.some(e=>e<0||e>1)||r[0]>=r[2]||r[1]>=r[3])throw TypeError(`Chakra support must be ordered inside the cell`);let i=e===`lotus`?[Pe(r[0]-.0035),Pe(r[1]-.0035),Pe(r[2]+.0035),Pe(r[3]+.0035)]:e===`centers`?[.25,.25,.75,.75]:[.11,.11,.89,.89];return Object.freeze({alphaBounds:Object.freeze(i),visualFootprint:Object.freeze({width:i[2]-i[0],height:i[3]-i[1],centerX:(i[0]+i[2])/2,centerY:(i[1]+i[3])/2})})}var Re=new Set([`celestial`,`organic`,`fusion`]),ze=new Set([`energy`,`elements`,`spectrum`]),Be=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite),Ve=e=>e.layoutId??e.id.replace(/:outgoing-style(?::\d+)?$/,``),He=e=>{let t=2166136261;for(let n of e)t=Math.imul(t^n.charCodeAt(0),16777619);return(t>>>0)/4294967296},Ue=e=>typeof e==`string`&&/^symbol\.(?:zodiac|celestial)\./.test(e),We=e=>typeof e==`string`&&e.startsWith(`celestial.`),Ge=e=>e.motif===`lotus`&&/^chakra\.lotus-[1-7]$/.test(e.assetId??``),Ke=e=>e.theme===`geometry`&&[`rings`,`rosette`].includes(e.motif),qe=e=>e===`energy.filament`||e===`energy.aura-veil`,Je=e=>/^element\.(?:water|air|fire)(?:\.|$)/.test(e??``),Ye=e=>[`light.beam`,`light.prism-trace`,`light.aurora`].includes(e),Xe=Object.freeze({main:1.15,support:.78,connector:.52,secondary:.42,detail:.16}),Ze=e=>/:outgoing-style(?::\d+)?$/.test(e.id),Qe=e=>e.waterMotion?.role===`water-droplet`,$e=(e,t)=>Ve(e).localeCompare(Ve(t))||e.id.localeCompare(t.id);function et(e,t,n){let r=t.artDirection??`fusion`;if(!Re.has(r))throw TypeError(`Unknown art direction`);let i=e=>!Ze(e)&&!Qe(e)&&e.kind!==`particles`&&t.enabled!==!1&&t.intensity!==0&&(!Array.isArray(t.themes)||t.themes.includes(e.theme))&&t.themeWeights?.[e.theme]!==0&&(!Array.isArray(t.motifs?.[e.theme])||t.motifs[e.theme].includes(e.motif)),a=e.filter(i),o=e=>r===`fusion`&&k(e)===2?100:rt({...e,visualFootprint:void 0},r)+(k(e)?e.elementRole.priorityBias:0),s=(e,t)=>o(t)-o(e)||$e(e,t),c=[...a].sort(s)[0],l=e=>k(c)===2&&k(e)===1?200:o(e)+(e.theme===c?.theme?e.motif===c?.motif?0:6:12),u=a.filter(e=>e!==c).sort((e,t)=>l(t)-l(e)||$e(e,t))[0],d=r===`fusion`&&k(c)===2&&k(u)===1,f=new Set;for(let e of[...new Set(a.map(e=>e.theme))].sort()){let t=[c,u].find(t=>t?.theme===e)??a.filter(t=>t.theme===e).sort(s)[0];t&&f.add(t.id)}let p=new Map,m=new Set,h=new Set,g=a.filter(e=>e!==c&&e!==u&&e.kind===`ribbons`&&k(e)!==1&&(qe(e.assetId)||Ye(e.assetId)||/^element\.air(?:\.|$)/.test(e.assetId??``)||k(e)===2)),_=new Map((n?.occurrences??[]).map(e=>[e.id,e])),v=e=>_.get(e?.occurrenceId)?.position??e?.anchor,y=v(c),b=v(u),x=Math.min(r===`celestial`?1:2,g.length);for(let e=0;e<x;e++){let t=(e+1)/(x+1),n=Be(y)&&Be(b)?y.map((e,n)=>e+(b[n]-e)*t):null,r=e=>{let t=v(e),r=Be(e.neighborTarget)?e.neighborTarget:t;return n&&Be(t)&&Be(r)?Math.hypot(...t.map((e,t)=>(e+r[t])/2-n[t])):0},i=g.filter(e=>!p.has(e.id)),a=i.filter(e=>!h.has(e.occurrenceId)),o=a.length?a:i,c=o.filter(e=>!m.has(e.theme)),l=(c.length?c:o).sort((e,t)=>r(e)-r(t)||s(e,t))[0];l&&(p.set(l.id,t),m.add(l.theme),h.add(l.occurrenceId))}return e.map(e=>{if(!i(e))return e;let t=e===c?`main`:e===u?`support`:p.has(e.id)?`connector`:f.has(e.id)?`secondary`:`detail`,n=f.has(e.id),r=d&&[`main`,`support`,`connector`].includes(t)&&oe(e.assetId)?B:null,a=JSON.stringify([`connected-body-v1`,t,n,t===`detail`?null:c?.id??null,t===`connector`?u?.id??null:null,p.get(e.id)??null,r]);return{...e,presentationRole:Object.freeze({name:t,amplitude:Xe[t],representative:n,mainId:c?.id??null,supportId:u?.id??null,linkT:p.get(e.id)??null,flow:r,signature:a})}})}function tt(e,{configuration:t={},snapshot:n}={}){if(!Array.isArray(e)||e.length>512)throw TypeError(`Art direction requires at most512 existing nodes`);let r=v(t);return et(e,r,n).map(e=>e.presentationRole&&!Ze(e)&&!Qe(e)&&e.kind!==`particles`?{...e,opacity:r.opacity*r.balance[e.kind]*e.presentationRole.amplitude}:e)}function nt(e,t){let n=e?.matrixWorld?.elements,r=e?.projectionMatrix?.elements,i=t?.cssWidth??t?.width,a=t?.cssHeight??t?.height;if(!n||!r||n.length!==16||r.length!==16||![...n,...r].every(Number.isFinite)||![i,a].every(e=>Number.isFinite(e)&&e>0))return null;let o=[n[0],n[1],n[2]],s=[n[4],n[5],n[6]],c=[n[8],n[9],n[10]],l=e=>Math.hypot(...e),u=(e,t)=>e.reduce((e,n,r)=>e+n*t[r],0);if([o,s,c].some(e=>Math.abs(l(e)-1)>1e-5))return null;let d=[n[12],n[13],n[14]],f=Number.isFinite(e.near)?e.near:.001;return e=>{if(!Be(e))return null;let t=e.map((e,t)=>e-d[t]),n=u(t,o),l=u(t,s),p=u(t,c);if(-p<=f)return null;let m=r[3]*n+r[7]*l+r[11]*p+r[15];if(!Number.isFinite(m)||Math.abs(m)<1e-9)return null;let h=(r[0]*n+r[4]*l+r[8]*p+r[12])/m,g=(r[1]*n+r[5]*l+r[9]*p+r[13])/m;return Number.isFinite(h)&&Number.isFinite(g)?[(h+1)*i/2,(1-g)*a/2]:null}}function rt(e,t){if(e.kind===`particles`)return 0;let n=e.assetId;if(t===`celestial`)return We(n)?94:Ke(e)?88:Ge(e)?65:Ue(n)?44:e.theme===`geometry`?36:25;if(t===`organic`){if(qe(n))return 94;if(Je(n)){let t=e.visualFootprint;return t&&Number.isFinite(t.width)&&Number.isFinite(t.height)&&t.width>=t.height*.75?93:87}return Ye(n)?82:e.theme===`energy`?76:Ge(e)?62:We(n)?32:Ue(n)?25:22}return Ge(e)?96:We(n)?92:qe(n)?78:Je(n)||Ye(n)?72:Ke(e)?57:Ue(n)?45:30}function it(e,{snapshot:t,camera:n,viewport:r,configuration:i={},partitionOnly:a=!1}={}){if(!Array.isArray(e)||e.length>512)throw TypeError(`Art direction requires at most512 existing nodes`);if(!e.length)return[];let o=i.artDirection??`fusion`;if(!Re.has(o))throw TypeError(`Unknown art direction`);let s=nt(n,r),c=new Map((t?.occurrences??[]).map(e=>[e.id,e])),l=Array.isArray(i.themes)?new Set(i.themes):null,u=e=>i.enabled!==!1&&(!l||l.has(e.theme))&&i.themeWeights?.[e.theme]!==0&&(!Array.isArray(i.motifs?.[e.theme])||i.motifs[e.theme].includes(e.motif)),d=e.map(e=>{if(!e||typeof e.id!=`string`||!e.id||!Number.isFinite(e.rotation??0))throw TypeError(`Stable node id and finite rotation required`);let t=e.assetId,n=e.kind===`particles`,r=e.rotation??0,i=n?`detail`:We(t)?`body`:Ge(e)?`lotus`:ze.has(e.theme)&&e.kind===`ribbons`?`field`:`detail`,a=c.get(e.occurrenceId),l=s&&a?s(a.position):null,d=s&&a?s(e.neighborTarget):null,f=l&&d?[d[0]-l[0],d[1]-l[1]]:null,p=f&&Math.hypot(...f)>=.5,m=Ue(t)?0:r;if(u(e)&&!n&&e.kind===`ribbons`&&ze.has(e.theme)&&!Ue(t)&&!We(t)&&p){let t=e.visualFootprint,n=t&&Number.isFinite(t.width)&&Number.isFinite(t.height)&&t.height>t.width,i=Math.atan2(f[1],f[0])-(n?Math.PI/2:0),a=o===`organic`?.86:o===`fusion`?.56:.14,s=Math.atan2((1-a)*Math.sin(r)+a*Math.sin(i),(1-a)*Math.cos(r)+a*Math.cos(i)),c=Number.isFinite(e.phase)?e.phase:He(Ve(e))*Math.PI*2,l=Number.isFinite(e.internalTime)?e.internalTime:0,u=(o===`organic`?.055:o===`fusion`?.03:.009)*Math.sin(c+l*.28);m=r+Math.atan2(Math.sin(s-r),Math.cos(s-r))+u}let h=u(e)&&!n;return{...e,rotation:m,layoutRole:i,heroPriority:h?rt(e,o)+(k(e)?e.elementRole.priorityBias:0):0,flowConnector:!1,detailLeader:!1,artFlow:{basis:p?`projected-canonical-source-neighbor`:`unchanged-degenerate-or-unavailable-source-arc`,sourcePosition:Be(a?.position)?[...a.position]:null,sourceLinked:!!p,axisBasis:`authored-alpha-footprint-aspect-approximation; not scientific orientation or measured pixel major axis`,direction:o}}}),f=(e,t)=>t.heroPriority-e.heroPriority||Ve(e).localeCompare(Ve(t))||Number(t.id===Ve(t))-Number(e.id===Ve(e))||e.id.localeCompare(t.id),p=(e,t,n)=>{let r=new Set,i=e=>{let t=k(e);return Number(t===2||t===3)},a=n===`flowConnector`?(e,t)=>i(t)-i(e)||Number(qe(t.assetId))-Number(qe(e.assetId))||f(e,t):f;for(let i of e.sort(a)){let e=Ve(i);if(!r.has(e)){if(r.size>=t)break;r.add(e),i[n]=!0,n===`flowConnector`&&(i.layoutRole=`connector`)}}};return p(d.filter(e=>u(e)&&e.kind===`ribbons`&&e.artFlow.sourceLinked&&k(e)!==1&&(qe(e.assetId)||Je(e.assetId)||Ye(e.assetId))),4,`flowConnector`),p(d.filter(e=>u(e)&&e.kind!==`particles`&&Ue(e.assetId)),2,`detailLeader`),a?d:d.map(e=>e.presentationRole?{...e,flowConnector:e.presentationRole.name===`connector`,layoutRole:e.presentationRole.name===`connector`?`connector`:e.layoutRole}:e)}var at=40*Math.PI,ot=Object.freeze([.1,.1,.9,.9]),st=`
float fieldMotionSquare(float x){return x*x;}
float fieldMotionClock(float time,float phase){
 return mod(mod(time,125.66370614359172)*0.05+mod(phase,6.283185307179586),6.283185307179586);
}
float fieldMotionDomain(vec2 uv){
 float d=min(min(uv.x,uv.y),min(1.0-uv.x,1.0-uv.y));
 return smoothstep(0.10,0.14,d);
}
float fieldMotionLine(float distance,float width){
 return 1.0-smoothstep(width,width+0.012,abs(distance));
}
float fieldMotionAngle(vec2 p){return length(p)>0.000001?atan(p.y,p.x):0.0;}
vec2 fieldMotionEnergyShape(vec2 uv,float variant,float t){
 vec2 p=(uv-0.5)*2.0;float r=length(p),a=fieldMotionAngle(p),shape,packet;
 if(variant<0.5){
  shape=exp(-fieldMotionSquare((p.y-0.18*sin(p.x*4.0+t))/0.21));
  packet=pow(0.5+0.5*cos(p.x*5.0-t*3.0+0.9*sin(p.y*3.0-t)),4.0);
 }else if(variant<1.5){
  shape=exp(-fieldMotionSquare((p.y-0.20*sin(p.x*5.0+t))/0.035));
  packet=pow(0.5+0.5*cos(p.x*6.0-t*5.0),8.0);
 }else if(variant<2.5){
  shape=fieldMotionLine(r-0.50,0.035);
  packet=pow(0.5+0.5*cos(r*16.0-t*4.0),6.0);
 }else{
  shape=fieldMotionLine(r-0.48-0.11*sin(a*3.0+t),0.045)*smoothstep(0.12,0.20,r);
  packet=pow(0.5+0.5*cos(a*2.0+r*8.0-t*3.0),6.0);
 }
 return vec2(shape,packet);
}
float fieldMotionEnergyCoverage(vec2 uv,float variant,float time,float phase){
 vec2 field=fieldMotionEnergyShape(uv,variant,fieldMotionClock(time,phase));
 return 0.34*field.x*(0.25+0.75*field.y)*fieldMotionDomain(uv);
}
vec2 fieldMotionSpectrumShape(vec2 uv,float variant,float t){
 vec2 p=(uv-0.5)*2.0;float r=length(p),shape,packet;
 if(variant<0.5){
  shape=exp(-fieldMotionSquare((p.y-p.x*0.28)/0.12));
  packet=pow(0.5+0.5*cos((p.x+p.y*0.55)*7.0-t*5.0),10.0);
 }else if(variant<1.5){
  shape=exp(-fieldMotionSquare(r/0.45));
  packet=pow(0.5+0.5*cos(r*15.0-t*3.0),8.0);
 }else if(variant<2.5){
  float d=sin(p.x*9.0+t*3.0)*sin(p.y*8.0-t*2.0);
  shape=fieldMotionLine(d,0.035)*(1.0-smoothstep(0.55,0.78,r));
  packet=pow(0.5+0.5*sin(p.x*9.0+t*3.0)*sin(p.y*8.0-t*2.0),3.0);
 }else if(variant<3.5){
  shape=fieldMotionLine(p.y-p.x*0.65,0.025);
  packet=pow(0.5+0.5*cos((p.x-p.y)*9.0-t*4.0),8.0);
 }else{
  float curtain=0.20*sin(p.x*4.0+t)+0.05*sin(p.x*10.0-t*2.0);
  shape=exp(-fieldMotionSquare((p.y-curtain)/0.18));
  packet=pow(0.5+0.5*cos(p.x*5.0+sin(p.y*3.0+t*2.0)-t*2.0),4.0);
 }
 return vec2(shape,packet);
}
float fieldMotionSpectrumCoverage(vec2 uv,float variant,float time,float phase){
 vec2 field=fieldMotionSpectrumShape(uv,variant,fieldMotionClock(time,phase));
 return 0.26*field.x*(0.22+0.78*field.y)*fieldMotionDomain(uv);
}
vec4 fieldMotionComposite(vec4 texel,float fieldAlpha,vec3 tint){
 float bodyA=clamp(texel.a,0.0,1.0),fieldA=clamp(fieldAlpha,0.0,1.0);
 float alpha=bodyA+fieldA*(1.0-bodyA);
 vec3 premultiplied=texel.rgb*bodyA+clamp(tint,vec3(0.0),vec3(1.0))*fieldA*(1.0-bodyA);
 return vec4(alpha>0.000001?premultiplied/alpha:vec3(0.0),alpha);
}
vec4 fieldMotionAccent(vec4 texel,float accentAlpha,vec3 tint){
 float bodyA=clamp(texel.a,0.0,1.0),accentA=clamp(accentAlpha,0.0,1.0);
 float alpha=accentA+bodyA*(1.0-accentA);
 vec3 premultiplied=texel.rgb*bodyA*(1.0-accentA)+clamp(tint,vec3(0.0),vec3(1.0))*accentA;
 return vec4(alpha>0.000001?premultiplied/alpha:vec3(0.0),alpha);
}
vec4 fieldMotionEnergyComposite(vec4 texel,vec2 uv,float variant,float time,float phase,vec3 tint){
 float packet=fieldMotionEnergyShape(uv,variant,fieldMotionClock(time,phase)).y;
 return fieldMotionAccent(texel,0.18*clamp(texel.a,0.0,1.0)*packet*fieldMotionDomain(uv),tint);
}
vec4 fieldMotionSpectrumComposite(vec4 texel,vec2 uv,float variant,float time,float phase,vec3 tint){
 float packet=fieldMotionSpectrumShape(uv,variant,fieldMotionClock(time,phase)).y;
 return fieldMotionAccent(texel,0.16*clamp(texel.a,0.0,1.0)*packet*fieldMotionDomain(uv),tint);
}
vec2 fieldMotionSegment(vec2 p,vec2 a,vec2 b){
 vec2 ab=b-a;float along=clamp(dot(p-a,ab)/dot(ab,ab),0.0,1.0);
 return vec2(length(p-(a+along*ab)),along);
}
float fieldMotionConstellationCoverage(vec2 uv,float time,float phase){
 vec2 p=(uv-0.5)*2.0;
 vec2 a=vec2(-0.48,-0.38),b=vec2(0.06,0.13),c=vec2(0.50,-0.025);
 float t=fieldMotionClock(time,phase),first=length(b-a),second=length(c-b);
 float cycle=fract(t*4.0/6.283185307179586),along=cycle*(first+second);
 vec2 head=along<first?mix(a,b,along/first):mix(b,c,(along-first)/second);
 float fade=fieldMotionSquare(sin(cycle*3.141592653589793));
 float tracer=exp(-dot(p-head,p-head)/0.0036)*fade;
 float path=max(fieldMotionLine(fieldMotionSegment(p,a,b).x,0.005),fieldMotionLine(fieldMotionSegment(p,b,c).x,0.005));
 float starA=(1.0-smoothstep(0.025,0.065,length(p-a)))*(0.65+0.30*sin(t*7.0));
 float starB=(1.0-smoothstep(0.025,0.065,length(p-b)))*(0.65+0.30*sin(t*7.0+2.0));
 float starC=(1.0-smoothstep(0.025,0.065,length(p-c)))*(0.65+0.30*sin(t*7.0+4.0));
 return max(max(starA,max(starB,starC)),path*(0.20+0.65*tracer))*fieldMotionDomain(uv);
}
float fieldMotionGeometryCoverage(vec2 uv,float variant,float time,float phase){
 vec2 p=(uv-0.5)*2.0;float r=length(p),a=fieldMotionAngle(p),t=fieldMotionClock(time,phase);
 float rosette=fieldMotionLine(r-(0.45+0.16*cos(a*6.0)),0.009);
 float rings=max(fieldMotionLine(r-0.28,0.008),max(fieldMotionLine(r-0.48,0.008),fieldMotionLine(r-0.70,0.007)));
 float radial=fieldMotionLine(sin(a*12.0),0.025)*smoothstep(0.22,0.30,r)*(1.0-smoothstep(0.60,0.72,r));
 float shape,coordinate;
 if(variant<0.5){shape=rosette;coordinate=a-t*3.0;}
 else if(variant<1.5){shape=rings;coordinate=r*10.0-t*4.0;}
 else if(variant<2.5){
  shape=fieldMotionLine(sin(r*22.0-a*2.0),0.07)*smoothstep(0.08,0.15,r)*(1.0-smoothstep(0.72,0.80,r));
  coordinate=r*8.0+a-t*3.0;
 }else if(variant<3.5){
  float net=min(abs(sin(p.x*13.0)),min(abs(sin((p.x*0.5+p.y*0.866)*13.0)),abs(sin((p.x*0.5-p.y*0.866)*13.0))));
  shape=(1.0-smoothstep(0.025,0.10,net))*(1.0-smoothstep(0.64,0.75,r));
  coordinate=p.x*6.0+p.y*4.0-t*3.0;
 }else if(variant<4.5){shape=radial;coordinate=r*10.0-t*4.0;}
 else{shape=max(rosette,max(rings*0.6,radial*0.4));coordinate=a*2.0+r*8.0-t*2.0;}
 float packet=pow(0.5+0.5*cos(coordinate),8.0);
 return shape*(0.30+0.70*packet)*fieldMotionDomain(uv);
}
`;function ct(e,t,n){if(!Array.isArray(e)||e.length!==t||!e.every(e=>typeof e==`number`&&Number.isFinite(e)&&e>=0&&e<=1))throw TypeError(`Field motion ${n}: ${t} finite values within0..1 required`);return e}function lt({alphaBounds:e}={}){let t=[...ot];if(e!==void 0){if(ct(e,4,`alphaBounds`),e[0]>=e[2]||e[1]>=e[3])throw TypeError(`Field motion alphaBounds must be ordered`);t=[Math.min(t[0],e[0]),Math.min(t[1],e[1]),Math.max(t[2],e[2]),Math.max(t[3],e[3])]}return Object.freeze({alphaBounds:Object.freeze(t),visualFootprint:Object.freeze({width:t[2]-t[0],height:t[3]-t[1],centerX:(t[0]+t[2])/2,centerY:(t[1]+t[3])/2})})}var ut=Object.freeze({fire:0,water:1,air:2,earth:3}),dt=Math.PI*2;Object.freeze([.68,.78,.9]);var ft=(e,t=0,n=1)=>Math.max(t,Math.min(n,e)),pt=e=>{let t=typeof e==`string`?ut[e]:e;if(![0,1,2,3].includes(t))throw TypeError(`Element motif must be fire/water/air/earth or index 0..3`);return t};function mt(e,t){if(typeof e!=`number`||!Number.isFinite(e))throw TypeError(t+` must be finite`);return e}function ht(e,t,n,r=!0){if(!Array.isArray(e)||e.length!==t||!e.every(e=>typeof e==`number`&&Number.isFinite(e)&&(!r||e>=0&&e<=1)))throw TypeError(n+` must be a finite `+t+`-tuple`+(r?` within 0..1`:``));return e}function gt(e){if(mt(e,`Element local time`),e<0||e>1e9)throw RangeError(`Element local time must be within 0..1e9 seconds`);return e}function _t(e){ht(e,4,`Element sampling parameters`,!1);let[t,n,r,i]=e;if(t<=0||n<=0||t>.0625||n>.0625||r<0||r>.1||!Number.isInteger(i)||i<1||i*Math.max(t,n)>=.5||r+Math.max(t,n)>i*Math.min(t,n)+1e-12)throw RangeError(`Sampling requires cell texels, a real gutter and motion contained by that gutter`);return e}function vt(e){return Math.min(e[2],Math.max(0,e[3]*Math.min(e[0],e[1])-Math.max(e[0],e[1])))}function yt(e,t,{reducedMotion:n=!1}={}){if(gt(e),mt(t,`Element node phase`),t<0||t>=dt)throw RangeError(`Element node phase must be in [0, 2 PI)`);if(typeof n!=`boolean`)throw TypeError(`reducedMotion must be boolean`);return gt((n?0:e)+t*4)}function bt(e){let t=e?.cell?.rectPixels;if(!Array.isArray(t)||t.length!==4||!t.every(Number.isFinite)||!t.slice(2).every(e=>Number.isInteger(e)&&e>=16))throw TypeError(`Measured element cell.rectPixels required`);let n=[1/t[2],1/t[3],e?.asset?.motionBounds?.localUvMargin,e?.cell?.gutter];return _t(n),Object.freeze(n)}function xt(e){return Object.freeze({alphaBounds:Object.freeze(e),visualFootprint:Object.freeze({width:e[2]-e[0],height:e[3]-e[1],centerX:(e[0]+e[2])/2,centerY:(e[1]+e[3])/2})})}function St(){return xt([.35,.2,.65,.76])}function Ct({motif:e,measuredAlphaBounds:t,alphaBounds:n,sampling:r}={}){let i=pt(e);_t(r);let a=t??n??[0,0,1,1];if(ht(a,4,`Element top-left alpha bounds`),a[0]>=a[2]||a[1]>=a[3])throw RangeError(`Ordered nonempty alpha bounds required`);let o=vt(r),s=o+r[0],c=o+r[1],l=[ft(a[0]-s),ft(a[1]-c),ft(a[2]+s),ft(a[3]+c)],u=i===0?[.3,.12,.73,.82]:i===3?[.28,.2,.75,.76]:null;return u&&(l[0]=Math.min(l[0],u[0]),l[1]=Math.min(l[1],u[1]),l[2]=Math.max(l[2],u[2]),l[3]=Math.max(l[3],u[3])),xt(l)}var wt=`
#ifndef ELEMENT_BEHAVIOR_TINT
#define ELEMENT_BEHAVIOR_TINT vec3(0.68,0.78,0.9)
#endif
float elementBehaviorSquare(float value){return value*value;}
float elementBehaviorDomain(vec2 uv,vec4 sampling){
 vec2 d=min(uv,1.0-uv)/sampling.xy-0.5;
 return smoothstep(0.0,1.0,min(d.x,d.y));
}
float elementBehaviorMargin(vec4 sampling){
 return min(sampling.z,max(0.0,sampling.w*min(sampling.x,sampling.y)-max(sampling.x,sampling.y)));
}
// params = (1/cellWidth,1/cellHeight,localUvMargin,gutterPixels).
// Return (safe local U,safe local V,complementary weight,domain mask).
// The host reads slot0 for every motif; ONLY air reads slot1, in the SAME cell.
vec4 elementLookup(vec2 uv,float variant,float time,vec4 sampling,float slot){
 float m=elementBehaviorMargin(sampling),weight=1.0;
 vec2 local=uv;
 if(variant<0.5){
  float tip=smoothstep(0.2,0.9,uv.y);
  float dx=m*(0.65*tip*sin(uv.y*7.0-time*2.2)+0.2*sin(uv.y*15.0-time*3.1+1.7));
  float dy=m*(0.55+0.35*sin(uv.y*13.0-time*2.5+uv.x*5.0))*smoothstep(0.08,0.35,uv.y)*(1.0-smoothstep(0.88,0.98,uv.y));
  local-=vec2(dx,dy);
 }else if(variant<1.5){
  local-=vec2(m*0.2*sin(uv.y*9.0-time*0.9),m*(0.7*sin(uv.x*10.0-time*1.9)+0.15*sin(uv.x*21.0-time*2.9)));
 }else if(variant<2.5){
  float progress=fract(time*0.11+slot*0.5),drift=2.0*progress-1.0;
  weight=0.5-0.5*cos(6.283185307179586*progress);
  local-=m*vec2(0.85*drift+0.15*sin(uv.y*8.0-time*0.7),0.4*drift+0.2*sin(uv.x*7.0-time*0.5));
 }else{
  local+=vec2(-m*0.1*sin(uv.y*11.0-time*0.2),m*0.12*(0.5+0.5*sin(uv.y*8.0-time*0.3)));
 }
 float mask=elementBehaviorDomain(local,sampling)*elementBehaviorDomain(uv,sampling);
 vec2 halfTexel=sampling.xy*0.5;
 bool safe=all(greaterThanEqual(local,halfTexel))&&all(lessThanEqual(local,1.0-halfTexel));
 return vec4(safe?local:vec2(0.5),weight,safe?mask:0.0);
}
vec4 elementBehaviorOver(vec3 front,float frontA,vec4 back){
 float a=clamp(frontA,0.0,1.0),b=clamp(back.a,0.0,1.0),alpha=a+b*(1.0-a);
 if(alpha<=0.000001)return vec4(0.0);
 return vec4(clamp((front*a+back.rgb*b*(1.0-a))/alpha,vec3(0.0),vec3(1.0)),alpha);
}
vec3 elementBehaviorColour(float variant){
 vec3 fixedColour=vec3(0.55,0.42,0.22);
 if(variant<0.5)fixedColour=vec3(1.0,0.42,0.10);
 else if(variant<1.5)fixedColour=vec3(0.22,0.7,0.94);
 else if(variant<2.5)fixedColour=vec3(0.75,0.82,0.88);
 return mix(fixedColour,clamp(ELEMENT_BEHAVIOR_TINT,vec3(0.0),vec3(1.0)),0.12);
}
float elementBehaviorParticle(vec2 uv,float time,float index,bool fire){
 float speed,offset,baseX,radius;
 if(index<0.5){speed=fire?0.23:0.10;offset=fire?0.17:0.1;baseX=fire?0.36:0.33;radius=fire?0.007:0.004;}
 else if(index<1.5){speed=fire?0.19:0.08;offset=fire?0.54:0.45;baseX=fire?0.53:0.5;radius=fire?0.009:0.005;}
 else{speed=fire?0.27:0.12;offset=fire?0.81:0.75;baseX=fire?0.67:0.69;radius=fire?0.006:0.0035;}
 float progress=fract(time*speed+offset);
 float x=baseX+(fire?0.025:0.012)*sin(6.283185307179586*progress+index*1.7);
 float y=fire?0.22+0.63*progress:0.76-0.48*progress;
 float distance=length((uv-vec2(x,y))/vec2(radius,radius*(fire?1.8:1.2)));
 return (fire?0.42:0.18)*smoothstep(0.0,0.15,progress)*(1.0-smoothstep(0.75,1.0,progress))*(1.0-smoothstep(0.5,1.0,distance));
}
float elementBehaviorField(vec2 uv,float variant,float time,float bodyAlpha){
 if(variant<0.5){
  float center=0.5+0.045*sin(uv.y*10.0-time*2.0)*smoothstep(0.22,0.85,uv.y);
  float width=0.1*(1.0-smoothstep(0.15,0.9,uv.y))+0.018;
  float height=smoothstep(0.12,0.25,uv.y)*(1.0-smoothstep(0.72,0.88,uv.y));
  float core=exp(-elementBehaviorSquare((uv.x-center)/width)),glow=exp(-elementBehaviorSquare((uv.x-center)/(width*1.7)));
  float flicker=0.82+0.12*sin(time*7.1)+0.06*sin(time*11.3+1.4);
  return (0.23*core+0.07*glow)*height*flicker*bodyAlpha;
 }
 if(variant<1.5){
  float c1=0.38+0.08*sin(uv.x*10.0-time*1.5)+0.03*sin(uv.x*18.0-time*2.2);
  float c2=0.56+0.05*sin(uv.x*8.0-time*1.1+1.4);
  float line1=1.0-smoothstep(0.004,0.018,abs(uv.y-c1)),line2=1.0-smoothstep(0.004,0.015,abs(uv.y-c2));
  float progress=fract(time*0.16),radius=length(vec2(uv.x-0.48,(uv.y-0.5)/0.65));
  float ripple=(1.0-smoothstep(0.005,0.013,abs(radius-(0.08+0.25*progress))))*smoothstep(0.0,0.15,progress)*(1.0-smoothstep(0.75,1.0,progress));
  float horizontal=smoothstep(0.10,0.2,uv.x)*(1.0-smoothstep(0.8,0.9,uv.x));
  return min(0.35,0.16*line1+0.10*line2+0.12*ripple)*horizontal*bodyAlpha;
 }
 if(variant<2.5){
  float strand=0.5+0.08*sin(uv.x*8.0-time*0.7);
  return 0.06*exp(-elementBehaviorSquare((uv.y-strand)/0.09))*bodyAlpha;
 }
 return 0.0;
}
vec4 elementComposite(vec4 texel0,vec4 texel1,vec2 uv,float variant,float time,vec4 sampling){
 vec4 l0=elementLookup(uv,variant,time,sampling,0.0);
 vec4 a=clamp(texel0,vec4(0.0),vec4(1.0));
 float alpha=a.a*l0.z*l0.w;
 vec3 premultiplied=a.rgb*alpha;
 if(variant>1.5&&variant<2.5){
  vec4 l1=elementLookup(uv,variant,time,sampling,1.0);
  vec4 b=clamp(texel1,vec4(0.0),vec4(1.0));
  float bAlpha=b.a*l1.z*l1.w;
  premultiplied+=b.rgb*bAlpha;alpha+=bAlpha;
 }
 vec4 body=alpha>0.000001?vec4(premultiplied/alpha,clamp(alpha,0.0,1.0)):vec4(0.0);
 vec3 colour=elementBehaviorColour(variant);
 float edge=elementBehaviorDomain(uv,sampling);
 body=elementBehaviorOver(colour,elementBehaviorField(uv,variant,time,body.a)*edge,body);
 if(variant<0.5||variant>2.5){
  // Compile-time bounded: exactly three possible in-quad sparks OR grains.
  for(int i=0;i<3;i++)body=elementBehaviorOver(colour,elementBehaviorParticle(uv,time,float(i),variant<0.5)*edge,body);
 }
 return body;
}
// Separate role, not another motif number and not instancePhase.z.
// No atlas reads. +local Y is the travel tip; Root orients it to the path.
vec4 elementDropletComposite(vec2 uv,float time){
 float progress=clamp((uv.y-0.25)/0.54,0.0,1.0);
 float width=0.13*pow(max(0.0,sin(3.141592653589793*progress)),0.7)*(1.0-0.55*progress);
 float cover=(1.0-smoothstep(width-0.007,width+0.007,abs(uv.x-0.5)))*smoothstep(0.25,0.265,uv.y)*(1.0-smoothstep(0.775,0.79,uv.y));
 vec4 body=elementBehaviorOver(vec3(0.16,0.55,0.75),0.44*cover,vec4(0.0));
 float highlight=0.36*exp(-elementBehaviorSquare((uv.x-0.469)/0.014)-elementBehaviorSquare((uv.y-0.45)/0.09))*cover*(0.92+0.08*sin(time*2.0));
 return elementBehaviorOver(vec3(0.85,0.96,1.0),highlight,body);
}
`,Tt=Object.freeze({fire:Object.freeze([.26,.08,.74,.84]),water:Object.freeze([.1,.16,.9,.82]),air:Object.freeze([.1,.2,.9,.8]),earth:Object.freeze([.26,.18,.75,.8])});Object.freeze({flame:Object.freeze([1,.22,.035]),core:Object.freeze([1,.64,.13]),spark:Object.freeze([1,.76,.25]),wave:Object.freeze([.08,.57,.79]),crest:Object.freeze([.57,.91,1]),mist:Object.freeze([.68,.8,.88]),mineral:Object.freeze([.49,.35,.15]),facet:Object.freeze([.76,.62,.32]),olive:Object.freeze([.43,.48,.21])});function Et(e){let t=typeof e==`number`?e:e?.code??0;if(!Number.isInteger(t)||t<0||t>4)throw RangeError(`Element role code must be 0..4`);return t}function Dt({role:e=0,...t}={}){let n=Ct(t),r=Et(e),i=pt(t.motif);if(r!==i+1)return n;let a=n.alphaBounds,o=Tt[Object.keys(ut)[i]];return xt([Math.min(a[0],o[0]),Math.min(a[1],o[1]),Math.max(a[2],o[2]),Math.max(a[3],o[3])])}var Ot=`
// Requires ELEMENT_BEHAVIOR_GLSL first. No samplers/attributes/clocks declared.
float elementNativeAA(vec2 pixel){return clamp(max(pixel.x,pixel.y)*0.5,0.0005,0.018);}
float elementNativeCover(float d,float aa){return 1.0-smoothstep(-aa,aa,d);}
float elementNativeDomain(vec2 uv,float variant){
 vec4 b=vec4(0.26,0.18,0.75,0.80);
 if(variant<0.5)b=vec4(0.26,0.08,0.74,0.84);
 else if(variant<1.5)b=vec4(0.10,0.16,0.90,0.82);
 else if(variant<2.5)b=vec4(0.10,0.20,0.90,0.80);
 float top=1.0-uv.y;
 return smoothstep(0.0,0.012,uv.x-b.x)*smoothstep(0.0,0.012,b.z-uv.x)*smoothstep(0.0,0.012,top-b.y)*smoothstep(0.0,0.012,b.w-top);
}
float elementNativeTongue(vec2 uv,float time,float index,float aa,bool core){
 float baseX=0.50,height=0.64,amplitude=0.025,width=0.123;
 if(index>0.5&&index<1.5){baseX=0.423;height=0.46;amplitude=0.026;width=0.071;}
 else if(index>1.5){baseX=0.584;height=0.51;amplitude=0.022;width=0.073;}
 height+=amplitude*sin(time*1.7+index*1.9);
 float q=clamp((uv.y-0.19)/height,0.0,1.0);
 float center=baseX+(0.032*sin(q*7.0-time*2.2+index*1.8)+0.012*sin(q*14.0-time*3.1+index))*q*q;
 width*=pow(1.0-q,0.83)*(core?0.43:1.0);
 float rootEdge=0.18+0.027*min(1.0,elementBehaviorSquare((uv.x-0.5)/0.18));
 return elementNativeCover(abs(uv.x-center)-width,aa)*smoothstep(rootEdge,rootEdge+2.0*aa,uv.y)*(1.0-smoothstep(0.19+height-aa,0.19+height,uv.y));
}
float elementNativeParticle(vec2 uv,float time,float index,bool fire,vec2 pixel,float aa){
 float speed,offset,baseX,radius;
 if(index<0.5){speed=fire?0.23:0.10;offset=fire?0.17:0.1;baseX=fire?0.36:0.33;radius=fire?0.007:0.004;}
 else if(index<1.5){speed=fire?0.19:0.08;offset=fire?0.54:0.45;baseX=fire?0.53:0.5;radius=fire?0.009:0.005;}
 else{speed=fire?0.27:0.12;offset=fire?0.81:0.75;baseX=fire?0.67:0.69;radius=fire?0.006:0.0035;}
 float progress=fract(time*speed+offset);
 vec2 center=vec2(baseX+(fire?0.025:0.012)*sin(6.283185307179586*progress+index*1.7),fire?0.22+0.63*progress:0.76-0.48*progress);
 float floorRadius=min(0.025,max(pixel.x,pixel.y)*0.65);
 vec2 radii=vec2(max(radius,floorRadius),max(radius*(fire?1.8:1.2),floorRadius*(fire?1.8:1.2)));
 vec2 d=(uv-center)/radii;
 float distance=(fire?length(d):abs(d.x)+abs(d.y))-1.0;
 return elementNativeCover(distance*min(radii.x,radii.y),aa)*(fire?0.42:0.18)*smoothstep(0.0,0.15,progress)*(1.0-smoothstep(0.75,1.0,progress))*(fire?1.35:1.0);
}
vec2 elementNativeSegment(vec2 p,vec2 a,vec2 b){
 vec2 d=b-a;float u=clamp(dot(p-a,d)/max(dot(d,d),0.000000000001),0.0,1.0);
 return vec2(length(p-a-u*d),u);
}
vec2 elementNativeBezier(vec2 p,vec2 a,vec2 b,vec2 c,vec2 d){
 float distance=2.0,progress=0.0;vec2 previous=a;
 for(int i=1;i<=8;i++){
  float t=float(i)/8.0,u=1.0-t;
  vec2 point=u*u*u*a+3.0*u*u*t*b+3.0*u*t*t*c+t*t*t*d;
  vec2 candidate=elementNativeSegment(p,previous,point);
  if(candidate.x<distance){distance=candidate.x;progress=(float(i)-1.0+candidate.y)/8.0;}
  previous=point;
 }
 return vec2(distance,progress);
}
vec4 elementNativeWave(vec2 uv,float time){
 float travel=0.018*sin(time*1.5),curl=0.013*sin(time*1.1+1.4);
 vec2 crest=vec2(0.64,0.69+travel);
 vec2 tail=elementNativeBezier(uv,vec2(0.15,0.32),vec2(0.34,0.27+curl),vec2(0.43,0.71+travel),crest);
 vec2 hook=elementNativeBezier(uv,crest,vec2(0.82,0.73+travel),vec2(0.82,0.47+curl),vec2(0.66,0.51+curl));
 vec2 first=tail.x<=hook.x?vec2(tail.x,tail.y*0.5):vec2(hook.x,0.5+hook.y*0.5);
 vec2 second=elementNativeBezier(uv,vec2(0.21,0.24),vec2(0.39,0.25+curl),vec2(0.49,0.48-travel),vec2(0.79,0.39));
 return vec4(first.x,second.x,first.y,second.y);
}
float elementNativeMineral(vec2 uv,vec2 center,float scale){
 vec2 p=(uv-center)/scale;
 return max(max(abs(p.x)*0.72+abs(p.y)*0.62-0.12,abs(p.x)-0.135),abs(p.y)-0.128)*scale;
}
vec4 elementNativeComposite(vec2 uv,float variant,float time,vec4 roleParams){
 if(abs(roleParams.x-(variant+1.0))>0.25)return vec4(0.0);
 vec2 pixel=roleParams.yz;float aa=elementNativeAA(pixel);vec4 result=vec4(0.0);
 if(variant<0.5){
  float outer=0.0,core=0.0;
  for(int i=0;i<3;i++){
   outer=max(outer,elementNativeTongue(uv,time,float(i),aa,false));
   core=max(core,elementNativeTongue(uv,time,float(i),aa,true));
  }
  float flicker=0.86+0.10*sin(time*7.1)+0.04*sin(time*11.3+1.4);
  result=elementBehaviorOver(vec3(1.0,0.22,0.035),0.48*outer*flicker,result);
  result=elementBehaviorOver(vec3(1.0,0.64,0.13),0.62*core*flicker,result);
  for(int i=0;i<3;i++)result=elementBehaviorOver(vec3(1.0,0.76,0.25),elementNativeParticle(uv,time,float(i),true,pixel,aa),result);
 }else if(variant<1.5){
  vec4 d=elementNativeWave(uv,time);float width=max(0.008,min(0.022,max(pixel.x,pixel.y)*0.65));
  float face=max(elementNativeCover(d.x-0.037,aa),0.65*elementNativeCover(d.y-0.025,aa));
  float firstPacket=pow(clamp(0.5+0.5*cos(6.283185307179586*d.z-time*1.5),0.0,1.0),4.0);
  float secondPacket=pow(clamp(0.5+0.5*cos(6.283185307179586*d.w-time*1.1+1.4),0.0,1.0),4.0);
  float crest=max(elementNativeCover(d.x-width,aa)*(0.46+0.22*firstPacket),0.8*elementNativeCover(d.y-width*0.8,aa)*(0.46+0.22*secondPacket));
  result=elementBehaviorOver(vec3(0.08,0.57,0.79),0.35*face,result);
  result=elementBehaviorOver(vec3(0.57,0.91,1.0),crest,result);
 }else if(variant<2.5){
  float shear=0.035*sin((uv.x-0.15)*7.0-time*0.55);
  float radius=length(vec2((uv.x-0.49)/0.31,(uv.y-0.50-shear)/0.17));
  float hollow=1.0-smoothstep(0.07,0.27,abs(radius-1.0)),opening=1.0-smoothstep(0.63,0.82,uv.x);
  float tail=0.40+0.045*sin(uv.x*8.0-time*0.45);
  float strand=(1.0-smoothstep(0.015,0.065,abs(uv.y-tail)))*smoothstep(0.24,0.38,uv.x)*(1.0-smoothstep(0.73,0.86,uv.x));
  result=elementBehaviorOver(vec3(0.68,0.80,0.88),0.24*max(hollow*opening,strand*0.65),result);
 }else{
  float mainMask=elementNativeCover(elementNativeMineral(uv,vec2(0.49,0.51),1.0),aa);
  float left=elementNativeCover(elementNativeMineral(uv,vec2(0.365,0.418),0.50),aa);
  float right=elementNativeCover(elementNativeMineral(uv,vec2(0.635,0.43),0.55),aa);
  result=elementBehaviorOver(vec3(0.49,0.35,0.15),0.60*max(mainMask,left),result);
  result=elementBehaviorOver(vec3(0.43,0.48,0.21),0.52*right,result);
  float face=mainMask*smoothstep(0.485,0.505,uv.x+(uv.y-0.5)*0.45);
  result=elementBehaviorOver(vec3(0.76,0.62,0.32),0.42*face,result);
  for(int i=0;i<3;i++)result=elementBehaviorOver(vec3(0.76,0.62,0.32),elementNativeParticle(uv,time,float(i),false,pixel,aa),result);
 }
 float alpha=result.a*elementNativeDomain(uv,variant)*clamp(roleParams.w,0.0,1.0);
 return alpha>0.000001?vec4(result.rgb,alpha):vec4(0.0);
}
vec4 elementRoleBody(vec4 texel0,vec4 texel1,vec2 uv,float variant,float time,vec4 sampling){
 vec4 l0=elementLookup(uv,variant,time,sampling,0.0),a=clamp(texel0,vec4(0.0),vec4(1.0));
 float alpha=a.a*l0.z*l0.w;vec3 premultiplied=a.rgb*alpha;
 if(variant>1.5&&variant<2.5){
  vec4 l1=elementLookup(uv,variant,time,sampling,1.0),b=clamp(texel1,vec4(0.0),vec4(1.0));
  float bAlpha=b.a*l1.z*l1.w;premultiplied+=b.rgb*bAlpha;alpha+=bAlpha;
 }
 return alpha>0.000001?vec4(premultiplied/alpha,clamp(alpha,0.0,1.0)):vec4(0.0);
}
vec4 elementRoleComposite(vec4 texel0,vec4 texel1,vec2 uv,float variant,float time,vec4 sampling,vec4 roleParams){
 if(abs(roleParams.x-(variant+1.0))>0.25)return elementComposite(texel0,texel1,uv,variant,time,sampling);
 vec4 body=elementRoleBody(texel0,texel1,uv,variant,time,sampling);
 vec4 nativeForm=elementNativeComposite(uv,variant,time,roleParams);
 return elementBehaviorOver(nativeForm.rgb,nativeForm.a*elementBehaviorDomain(uv,sampling),body);
}
vec4 elementFireSurfaceDetail(vec2 uv,float time,vec4 body){
 float luminance=dot(body.rgb,vec3(0.2126,0.7152,0.0722));
 float ridge=smoothstep(0.24,0.62,luminance)*smoothstep(0.08,0.30,body.r-body.b);
 float travel=0.80+0.14*sin(uv.x*9.0+uv.y*6.0-time*1.8)+0.06*sin(uv.x*19.0-uv.y*11.0-time*2.7);
 vec3 heat=vec3(1.0,0.46+0.20*ridge,0.045+0.065*ridge);
 vec4 base=vec4(elementBehaviorColour(0.0),elementBehaviorField(uv,0.0,time,body.a));
 return elementBehaviorOver(max(body.rgb,heat),body.a*ridge*0.68*travel,base);
}
vec4 elementWeightedRoleComposite(vec4 texel0,vec4 texel1,vec2 uv,float variant,float time,vec4 sampling,vec4 roleParams,vec3 opacityParams){
 float fade=opacityParams.z;
 if(fade<=0.0)return vec4(0.0);
 vec4 body=elementRoleBody(texel0,texel1,uv,variant,time,sampling);
 vec4 detail=variant<0.5?elementFireSurfaceDetail(uv,time,body):vec4(elementBehaviorColour(variant),elementBehaviorField(uv,variant,time,body.a));
 if(variant<0.5||variant>2.5){
  vec2 pixel=roleParams.yz;float aa=elementNativeAA(pixel);
  vec3 colour=variant<0.5?vec3(1.0,0.76,0.25):vec3(0.76,0.62,0.32);
  vec4 particles=vec4(0.0);
  for(int i=0;i<3;i++)particles=elementBehaviorOver(colour,elementNativeParticle(uv,time,float(i),variant<0.5,pixel,aa),particles);
  // Native support belongs only to the independent particle aggregate.
  detail=elementBehaviorOver(particles.rgb,particles.a*elementNativeDomain(uv,variant),detail);
 }
 float a=detail.a*elementBehaviorDomain(uv,sampling);
 vec2 amplitude=clamp(opacityParams.xy/fade,vec2(0.0),vec2(0.6));
 float ab=body.a*amplitude.x,an=a*amplitude.y;
 float alpha=an+ab*(1.0-an);
 if(alpha<=0.0)return vec4(0.0);
 vec3 ink=(detail.rgb*an+body.rgb*ab*(1.0-an))/alpha;
 return vec4(ink,min(alpha,0.6)*fade);
}
vec4 elementDropletAAComposite(vec2 uv,float time,vec2 pixel){
 float aa=elementNativeAA(pixel),progress=clamp((uv.y-0.25)/0.54,0.0,1.0);
 float width=0.13*pow(max(0.0,sin(3.141592653589793*progress)),0.7)*(1.0-0.55*progress);
 float cover=elementNativeCover(abs(uv.x-0.5)-width,aa)*smoothstep(0.25,0.25+2.0*aa,uv.y)*(1.0-smoothstep(0.79-2.0*aa,0.79,uv.y));
 vec4 base=elementBehaviorOver(vec3(0.16,0.55,0.75),0.44*cover,vec4(0.0));
 float highlightWidth=max(0.014,min(0.035,max(pixel.x,pixel.y)*0.65));
 float highlight=0.36*exp(-elementBehaviorSquare((uv.x-0.469)/highlightWidth)-elementBehaviorSquare((uv.y-0.45)/0.09))*cover*(0.92+0.08*sin(time*2.0));
 return elementBehaviorOver(vec3(0.85,0.96,1.0),highlight,base);
}
`,kt=e=>e.waterMotion?.role===`water-droplet`,At=Math.max(...Object.values(T))*2,jt=`
attribute vec3 instanceOffset;
attribute vec3 instanceTint;
attribute vec4 instanceStyle;
attribute vec3 instancePhase;
attribute vec4 instanceAssetRect;
attribute vec2 instanceAssetStyle;
attribute vec4 instancePresence;
attribute vec4 instanceElementSampling;
attribute vec4 instanceWaterRole;
attribute float instanceInkFlow;
varying vec2 vUv;
varying vec3 vTint;
varying float vAlpha;
varying float vGlow;
varying vec3 vPhase;
varying vec4 vAssetRect;
varying vec2 vAssetStyle;
varying vec4 vPresence;
varying vec4 vElementSampling;
varying vec4 vWaterRole;
${ue}
void main(){
  vUv=uv; vTint=instanceTint; vAlpha=instanceStyle.y; vGlow=instanceStyle.w; vPhase=instancePhase;
  vAssetRect=instanceAssetRect; vAssetStyle=instanceAssetStyle;
  vPresence=instancePresence;
  vElementSampling=instanceElementSampling;vWaterRole=instanceWaterRole;
  float c=cos(instanceStyle.z),s=sin(instanceStyle.z);
  vec2 surface=position.xy;
  if(instanceInkFlow>.5)surface+=inkFlowDisplacement(uv,instancePhase.x,instancePresence.x);
  vec2 p=mat2(c,-s,s,c)*surface*instanceStyle.x;
  vec4 viewCenter=viewMatrix*vec4(instanceOffset,1.0);
  gl_Position=projectionMatrix*(viewCenter+vec4(p,0.0,0.0));
}`,Mt=`
uniform float theme;
uniform vec2 resolution;
uniform sampler2D protectionMask;
uniform sampler2D atlasA;
uniform sampler2D atlasB;
uniform sampler2D atlasC;
varying vec2 vUv;
varying vec3 vTint;
varying float vAlpha;
varying float vGlow;
varying vec3 vPhase;
varying vec4 vAssetRect;
varying vec2 vAssetStyle;
varying vec4 vPresence;
varying vec4 vElementSampling;
varying vec4 vWaterRole;
float line(float d,float width){return 1.0-smoothstep(width,width+.014,abs(d));}
#define CHAKRA_BEHAVIOR_TINT vTint
${Fe}
${R}
${st}
#define ELEMENT_BEHAVIOR_TINT vTint
${wt}
${Ot}
vec4 hostElementAtlas(vec2 localUv){
 vec2 atlasUv=vAssetRect.xy+localUv*vAssetRect.zw;
 if(vAssetStyle.x<1.5)return texture2D(atlasA,atlasUv);
 if(vAssetStyle.x<2.5)return texture2D(atlasB,atlasUv);
 return texture2D(atlasC,atlasUv);
}
vec4 hostLoadedElement(vec2 uv,float motif,float time,vec4 sampling,bool weightedRole){
 vec4 lookup0=elementLookup(uv,motif,time,sampling,0.0);
 vec4 texel0=hostElementAtlas(lookup0.xy),texel1=vec4(0.0);
 if(motif>1.5&&motif<2.5){
  vec4 lookup1=elementLookup(uv,motif,time,sampling,1.0);
  texel1=hostElementAtlas(lookup1.xy);
 }
 vec4 roleParams=vec4(vWaterRole.yzw,1.0);
 if(weightedRole)return elementWeightedRoleComposite(texel0,texel1,uv,motif,time,sampling,roleParams,vec3(vAlpha,vPresence.zw));
 return elementRoleComposite(texel0,texel1,uv,motif,time,sampling,roleParams);
}
void main(){
 vec2 p=(vUv-.5)*2.0; float r=length(p),a=r>0.000001?atan(p.y,p.x):0.0,t=vPhase.x,variant=vPhase.y;
 float alpha=0.0; vec3 ink=vTint; float edge=1.0-smoothstep(.86,1.0,r);
 if(theme<.5){
   float ring=line(r-.54,.009); float star=line(sin(a*5.0)*.04+r-.24,.009);
   float sphere=(1.0-smoothstep(.22,.235,r))* (.35+.45*max(0.0,-p.x+p.y));
   alpha=max(ring*.65,max(star*.3,sphere));
   if(variant>1.5){
    alpha=fieldMotionConstellationCoverage(vUv,t,vPresence.x);edge=1.0;
   }
 }else if(theme<1.5){
   float petals=4.0+2.0*mod(floor(variant),5.0);
   float petal=line(r-(.44+.15*cos(a*petals)),.012);
   float inner=line(r-(.25+.08*cos(a*petals+1.2)),.01);
   alpha=max(petal,inner*.65)*(1.0-smoothstep(.7,.95,r));
 }else if(theme<2.5){
   float flow=sin(p.x*7.0-t*1.4)+sin(p.x*13.0+t*.7)*.2;
   float w=.10+.03*sin(t+p.x*4.0);
   float flowDistance=(p.y-flow*.18)/w;
   alpha=exp(-flowDistance*flowDistance)* (.55+.25*sin(p.x*17.0-t*2.0));
   alpha*=1.0-smoothstep(.45,1.0,abs(p.x));
 }else if(theme<3.5){
   alpha=fieldMotionEnergyCoverage(vUv,variant,t,vPresence.x);edge=1.0;
 }else if(theme<4.5){
   alpha=fieldMotionSpectrumCoverage(vUv,variant,t,vPresence.x);edge=1.0;
 }else{
   alpha=fieldMotionGeometryCoverage(vUv,variant,t,vPresence.x);edge=1.0;
 }
 bool isWaterDroplet=theme>1.5&&theme<2.5&&vWaterRole.x>.5;
 bool weightedRole=false;
 if(isWaterDroplet){
   vec4 droplet=elementDropletAAComposite(vUv,t,vWaterRole.zw);ink=droplet.rgb;alpha=droplet.a;edge=1.0;
 }else if(theme>1.5&&theme<2.5&&vPhase.z<.5&&vAssetStyle.x>.5){
   weightedRole=abs(vWaterRole.y-(variant+1.0))<.25;
   vec4 element=hostLoadedElement(vUv,variant,t,vElementSampling,weightedRole);ink=element.rgb;alpha=element.a;edge=1.0;
 }else if(vAssetStyle.x>.5){
   vec2 local=vUv;
   // Internal fields differ by family; glyphs/celestial surfaces remain intact.
   if(theme>2.5&&theme<3.5){
    if(variant<.5)local.x+=sin(vUv.y*7.0+t*.25)*.012;
    else if(variant<1.5)local.y+=sin(vUv.x*11.0-t*.7)*.008;
    else if(variant<2.5)local+=(vUv-.5)*sin(t*.5)*.012;
    else local+=vec2(-p.y,p.x)*sin(t*.25+r*4.0)*.008;
   }else if(theme>3.5&&theme<4.5){
    local.y+=sin(vUv.x*(5.0+variant*2.0)+t*(.2+variant*.1))*.009;
   }else if(theme>.5&&theme<1.5){
    local=chakraLocalUv(vUv,variant,t);
   }
   local=clamp(local,vec2(.001),vec2(.999));
   vec2 atlasUv=vAssetRect.xy+local*vAssetRect.zw;
   vec4 texel;
   if(vAssetStyle.x<1.5)texel=texture2D(atlasA,atlasUv);
   else if(vAssetStyle.x<2.5)texel=texture2D(atlasB,atlasUv);
   else texel=texture2D(atlasC,atlasUv);
   if(theme>.5&&theme<1.5)texel=chakraComposite(texel,vUv,variant,t);
   else if(theme>2.5&&theme<3.5)texel=fieldMotionEnergyComposite(texel,vUv,variant,t,vPresence.x,vTint);
   else if(theme>3.5&&theme<4.5)texel=fieldMotionSpectrumComposite(texel,vUv,variant,t,vPresence.x,vTint);
   ink=vAssetStyle.y>.5?vTint:texel.rgb; alpha=texel.a; edge=1.0;
 }
 if(vPhase.z>.5&&!isWaterDroplet){alpha=1.0-smoothstep(.06,.48,r);edge=1.0;}
 vec2 uv=gl_FragCoord.xy/max(resolution,vec2(1.0));
 vec2 coverage=texture2D(protectionMask,uv).rg;
 float productMask=atmosphereProtectionGain(coverage,vPresence.y);
 // The weighted role already contains m/n, the unfaded cap and common f.
 // Every other path retains the original single master-opacity multiplier.
 alpha=clamp(alpha*edge*(weightedRole?1.0:vAlpha)*productMask,0.0,.6);
 if(alpha<.002)discard;
 gl_FragColor=vec4(ink*(.8+.2*vGlow),alpha);
 #include <colorspace_fragment>
}`;function Nt(t){let n=[`elements`,`energy`,`spectrum`].includes(_[t])?12:1,r=new f(1,1,n,n),i=new c;i.index=r.index.clone();for(let e of[`position`,`uv`])i.setAttribute(e,r.getAttribute(e).clone());r.dispose();for(let[t,n]of[[`instanceOffset`,3],[`instanceTint`,3],[`instanceStyle`,4],[`instancePhase`,3],[`instanceAssetRect`,4],[`instanceAssetStyle`,2],[`instancePresence`,4],[`instanceElementSampling`,4],[`instanceWaterRole`,4],[`instanceInkFlow`,1]])i.setAttribute(t,new d(new Float32Array(At*n),n).setUsage(e));i.instanceCount=0;let a=new g({vertexShader:jt,fragmentShader:Mt,uniforms:{theme:{value:t},resolution:{value:new p(1,1)},protectionMask:{value:null},atlasA:{value:null},atlasB:{value:null},atlasC:{value:null}},transparent:!0,depthTest:!0,depthWrite:!1,blending:_[t]===`spectrum`?2:1,toneMapped:!1}),o=new l(i,a);return o.name=`atmosphere:${_[t]}`,o.frustumCulled=!1,o.renderOrder=20,o.raycast=()=>{},{geometry:i,material:a,mesh:o}}function Pt(){let e=new u(new Uint8Array(2),1,1,r,t);return e.colorSpace=``,e.minFilter=e.magFilter=a,e.generateMipmaps=!1,e.flipY=!1,e.unpackAlignment=1,e.needsUpdate=!0,e}function Ft({scene:e,camera:t,requestFrame:n=()=>{},loadTexture:r,registerNativeGroup:i}){if(!e?.isScene||!t?.isCamera||typeof n!=`function`)throw TypeError(`Borrowed Scene, camera and requestFrame required`);if(i!==void 0&&typeof i!=`function`)throw TypeError(`Native group registration must be a function`);let a=new m;a.name=`atmosphere-studio-v1`,e.add(a);let s=0,c=P({requestFrame:()=>{s++,n()},loadTexture:r}),l=_.map((e,t)=>Nt(t));l.forEach(e=>a.add(e.mesh));try{i?.(a)}catch(t){for(let e of l)e.geometry.dispose(),e.material.dispose();throw e.remove(a),c.dispose(),t}let u=Pt(),d=null,f=null,p=0,g=null,T=v(),D=null,O=null,A=null,j=null,ee=null,M=Me(),N=new Set,F=0,I=null,te=0,R=0,re=!1,B=1,V=1,ie=!1,U=0,ae=0,W=0,G=!1,oe=!0,ce=!1,le=()=>{if(ie)throw Error(`Atmosphere layer disposed`)};function ue(){D&&(A=C(D,T),te=ae,R=U,B=V,A.nodes=A.nodes.map(e=>({...e,assetId:e.kind===`particles`?null:we(e,T)})),n())}function q(e,n,r){let i=t.position.clone().sub(new h(...n.center)).normalize();return e.map(e=>{if(kt(e)){let n=t.matrixWorld.elements,i=e.waterMotionFrame.heading,a=i[0]*n[0]+i[1]*n[1]+i[2]*n[2],o=i[0]*n[4]+i[1]*n[5]+i[2]*n[6],s=new h(...e.position).sub(t.position).dot(t.getWorldDirection(new h)),c=St(),l=Math.min(12,Math.max(7,Math.min(r.cssWidth,r.cssHeight)*.022)),u=s>0?l*2*s*Math.tan(t.fov*Math.PI/360)/(t.zoom*r.cssHeight*.56):e.size;return{...e,...c,size:Math.max(e.size,u),rotation:Math.hypot(a,o)>1e-8?Math.atan2(a,o):0}}let n=e.assetId?c.acquire(e.assetId,T.quality):null,a=n?Te(n):e.kind===`particles`?{alphaBounds:[.26,.26,.74,.74],visualFootprint:{width:.48,height:.48,centerX:.5,centerY:.5}}:null;if(a&&e.theme===`chakra`){let t=n?.atlas?.status===`ready`?Le({motif:e.motif,...a}):{alphaBounds:[Math.min(.05,a.alphaBounds[0]),Math.min(.05,a.alphaBounds[1]),Math.max(.95,a.alphaBounds[2]),Math.max(.95,a.alphaBounds[3])]};a={...a,...t}}if(e.theme===`elements`&&e.kind!==`particles`&&a){if(n?.atlas?.status===`ready`){let t=bt(n);a={...a,...Dt({motif:e.motif,...a,sampling:t,role:k(e)}),elementSampling:t}}else a={...a,alphaBounds:[0,0,1,1]}}(e.theme===`geometry`||e.theme===`astrology`&&e.motif===`constellations`||[`energy`,`spectrum`].includes(e.theme)&&n?.atlas?.status!==`ready`&&e.kind!==`particles`)&&(a={...a??{},...lt({alphaBounds:a?.alphaBounds})});let o={...e,...a??{},nativeReady:n?.atlas?.status===`ready`&&k(e)>0,heroPriority:+!!a?.assetId?.startsWith(`celestial.`),rotation:a?.assetId?.startsWith(`symbol.`)?0:e.rotation,position:e.position.map((t,n)=>t+i.getComponent(n)*(e.depthOffset??0))},s=se(o,n,e.theme===`elements`?yt(e.internalTime,e.phase):e.internalTime%at);return s?{...o,...K(o.alphaBounds),inkFlow:s}:{...o,inkFlow:null}})}function de(e,n,r,i){let a=JSON.stringify([D.revisionKey,t.matrixWorld.elements,t.projectionMatrix.elements,e,n,[...r].sort()]);a!==f&&(d=L({snapshot:D,camera:t,width:e,height:n,selectedIds:r}),u.image={data:z(d),width:d.width,height:d.height},u.needsUpdate=!0,f=a,p++);let o=(t,r,i)=>{let a=r/e*d.width-.5,o=(1-i/n)*d.height-.5,s=Math.floor(a),c=Math.floor(o),l=a-s,u=o-c,f=(e,n)=>t[Math.max(0,Math.min(d.height-1,n))*d.width+Math.max(0,Math.min(d.width-1,e))]/255;return(f(s,c)*(1-l)+f(s+1,c)*l)*(1-u)+(f(s,c+1)*(1-l)+f(s+1,c+1)*l)*u};return{sample:(e,t)=>o(d.data,e,t),selectionSample:(e,t)=>o(d.selectionData,e,t),rects:i}}return{setDesign(e){le(),!(e?.revisionKey&&e.revisionKey===D?.revisionKey)&&(D=e,ue())},setConfiguration(e){le();let t=v(e);JSON.stringify(t)!==JSON.stringify(T)&&(T=t,ue())},frame({timeSeconds:e=0,transitionTimeSeconds:n=e,viewport:r,reducedMotion:i=!1,visible:d=!0,playing:f=!1,atmosphereGain:p=1,outerSpread:m=1,selectedIds:h=[],reservedRects:_=[]}={}){if(le(),!Number.isFinite(e)||e<0)throw RangeError(`Finite nonnegative simulation time required`);if(!Number.isFinite(n)||n<0)throw RangeError(`Finite nonnegative transition time required`);b({atmosphereGain:p,outerSpread:m});let v=r?.width??1,C=r?.height??1;if(!Number.isFinite(v)||v<=0||!Number.isFinite(C)||C<=0)throw RangeError(`Positive drawing-buffer viewport required`);let P=r?.cssWidth??v,L=r?.cssHeight??C;if(![P,L].every(e=>Number.isFinite(e)&&e>0))throw RangeError(`Positive CSS viewport required`);if(!Array.isArray(h)||h.some(e=>typeof e!=`string`))throw TypeError(`Selected occurrence identities must be strings`);if(U=e,ae=n,G=!!i,oe=!!d,ce=!!f,V=p,G&&(j?.reset(),M.clear()),!D)return a.visible=!1,{count:0,needsFrame:!1};t.updateMatrixWorld();let z={...r,cssWidth:P,cssHeight:L},ie=de(P,L,h,_);if(A){let e=A,n={nodes:e.nodes,diagnostics:{reason:`viewport-too-small`,assignedDroplets:0}};if(P>=64&&L>=64){let r=be(it(q(E(e,U,{reducedMotion:G,atmosphereGain:p,outerSpread:m}),e.bounds,z),{snapshot:D,camera:t,viewport:z,configuration:e.config,partitionOnly:!0}),{camera:t,bounds:e.bounds,viewport:z,config:e.config,protection:ie,partitionOnly:!0}).nodes.filter(e=>e.layout?.primaryHero).map(e=>e.id);n=S(D,e.nodes,{primaryIds:r,seed:e.config.seed})}e.nodes=w(n.nodes,{configuration:e.config,snapshot:D,retainedWaterBodyId:n.diagnostics.retainedBodyId??null}),e.nodes=tt(e.nodes,{configuration:e.config,snapshot:D}),ee=n.diagnostics,M.begin(te,re?0:T.transitionSeconds,{reducedMotion:G}),O=e,A=null,F++,N=new Set(e.nodes.map(e=>e.id)),j&&!G&&!re?j.set(e,R,{reducedMotion:G,transitionTimeSeconds:te,atmosphereGain:B}):j?j.reset(e):j=y(e),re=!1}if(a.visible=oe&&!!j,!a.visible)return{count:0,needsFrame:!1};let se=JSON.stringify([F,s,G?0:U,j.isTransitioning(ae)?ae:null,G,t.matrixWorld.elements,t.projectionMatrix.elements,v,C,P,L,r?.safeInsets??null,[...h].sort(),_,p,m]);if(se===I)return{count:W,needsFrame:this.needsFrame()};let ue=q(j.sample(U,{reducedMotion:G,atmosphereGain:p,outerSpread:m,transitionTimeSeconds:ae}),O.bounds,z),K=ue.filter(kt),fe=ue.filter(e=>!kt(e)),J=x(it(fe.filter(e=>N.has(e.id)),{snapshot:D,camera:t,viewport:z,configuration:T}),{camera:t}),pe=P>=64&&L>=64?be(J,{camera:t,bounds:O.bounds,viewport:z,config:T,protection:ie}):{nodes:J,diagnostics:{reason:`viewport-too-small`,count:J.length,protectionKnown:!0}};g={...pe.diagnostics,pathBoundRows:K.length,totalTargetCount:O.nodes.length};let me=[...M.sample(pe.nodes,fe,ae),...K].filter(e=>e.layout?.visible!==!1&&je(e));W=me.length;for(let e=0;e<l.length;e++){let{geometry:n,material:r,mesh:i}=l[e],a=me.filter(t=>t.themeIndex===e&&je(t)),s=[...new Set(a.map(e=>e.atlasId).filter(Boolean))].sort();if(s.length>3)throw RangeError(`Theme exceeds its three-atlas sampler budget`);let d=s.map(e=>c.atlas(e,T.quality));if(a.length>At)throw RangeError(`Atmosphere transition exceeds fixed capacity`);n.instanceCount=a.length,i.visible=a.length>0,r.uniforms.resolution.value.set(v,C),r.uniforms.protectionMask.value=u;for(let[e,t]of[`atlasA`,`atlasB`,`atlasC`].entries())r.uniforms[t].value=d[e]?.status===`ready`?d[e].texture:null;if(a.forEach((e,r)=>{n.attributes.instanceOffset.setXYZ(r,...e.position);let i=new o(e.color);n.attributes.instanceTint.setXYZ(r,i.r,i.g,i.b),n.attributes.instanceStyle.setXYZW(r,e.size,e.opacity,e.rotation,e.glow);let a=e.theme===`elements`?yt(e.internalTime,e.phase,{reducedMotion:G}):e.internalTime%at;n.attributes.instancePhase.setXYZ(r,a,e.motifIndex,+(e.kind===`particles`)),n.attributes.instancePresence.setXYZW(r,e.phase,ne(e),e.nativeOpacity??0,e.opacityFade??1),n.attributes.instanceElementSampling.setXYZW(r,...e.elementSampling??[0,0,0,0]),n.attributes.instanceInkFlow.setX(r,+!!e.inkFlow?.active);let c=+!!kt(e),l=k(e),u=0,f=0;if(c||l){let n=t.matrixWorld.elements,r=-((e.position[0]-n[12])*n[8]+(e.position[1]-n[13])*n[9]+(e.position[2]-n[14])*n[10]),i=r>0?e.size*t.zoom*L/(2*r*Math.tan(t.fov*Math.PI/360)):0,a=i*(P/(L*t.aspect))*v/P,o=i*C/L;u=Number.isFinite(a)&&a>0?Math.min(1,1/a):1,f=Number.isFinite(o)&&o>0?Math.min(1,1/o):1,e.inkFlow?.active&&(u=Math.min(1,u*H),f=Math.min(1,f*H))}n.attributes.instanceWaterRole.setXYZW(r,c,l,u,f);let p=s.indexOf(e.atlasId),m=p>=0&&d[p]?.status===`ready`;n.attributes.instanceAssetRect.setXYZW(r,...e.uvRect??[0,0,1,1]),n.attributes.instanceAssetStyle.setXY(r,m?p+1:0,+!!e.tintable)}),a.length)for(let e of Object.values(n.attributes))e.isInstancedBufferAttribute&&(e.needsUpdate=!0)}return I=se,M.remember(me.filter(e=>!kt(e))),{count:me.length,needsFrame:this.needsFrame()}},needsFrame(){return!ie&&oe&&(!!A||!!j&&(j.isTransitioning(ae)||ce&&!G&&T.motionSpeed>0&&O.nodes.length>0))},reset(e=0){if(le(),!Number.isFinite(e)||e<0)throw RangeError(`Finite nonnegative time required`);U=e,j?.reset(),re=!!A,M.clear(),I=null,n()},diagnostics(){return{disposed:ie,count:W,themes:O?.budget??null,rendererOwned:!1,protection:d?{...d.stats,width:d.width,height:d.height,updates:p}:null,layout:g,nativeGroupRegistered:!!i,waterMotion:ee,visualTransition:M.diagnostics(),assets:c.diagnostics(),visualScope:`governed admitted local assets with explicit procedural fallback; actual GPU/motion acceptance separate`,children:a.children.length}},dispose(){if(!ie){ie=!0,e.remove(a);for(let e of l)e.geometry.dispose(),e.material.dispose();a.clear(),c.dispose(),u.dispose(),d=f=g=null,M.clear(),N.clear(),D=O=A=j=ee=null,W=0}}}}export{Ft as t};