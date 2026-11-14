import{Dt as e,Lt as t,U as n,an as r,ar as i,in as a,no as o,pa as s,qt as c,ro as l,ta as u,tr as ee}from"./three.core-Dp-eO7LC.js";import{a as te,i as d,n as f,o as p,r as m,t as h}from"./mood-BWSUwbUK.js";var g=Object.freeze({lead:.45,perStone:.045,base:1.6,max:3.5,rise:.7}),_=1/30,v=3.1,y=1.75,b=.1,x=1.8;function ne(e){return Math.min(g.max-g.lead,g.base+g.perStone*Math.max(0,e-1)*.5)}function re(e,t,n){let r=(t-(g.lead+e*ne(n)))/g.rise;return r<=0?0:r>=1?1:r*r*(3-2*r)}var S=`
  float h21(vec2 p) { vec3 q = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(h21(i), h21(i + vec2(1., 0.)), f.x), mix(h21(i + vec2(0., 1.)), h21(i + vec2(1., 1.)), f.x), f.y);
  }
`,C=`
  uniform float uClock, uLead, uSpan, uRise;
  float wakeOf(float order) { return smoothstep(0., 1., clamp((uClock - uLead - order * uSpan) / uRise, 0., 1.)); }
  float pulseOf(float order) { float d = (uClock - uLead - order * uSpan - uRise * .55) / (uRise * .5); return exp(-d * d); }
`,ie=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,ae=`
  uniform vec3 uTop, uHorizon, uTable, uFar, uRoomTint, uCentre;
  uniform float uRoom, uScale, uFloorY, uBase;
  varying vec3 vWorld;
  ${S}
  void main() {
    vec3 direction = normalize(vWorld - cameraPosition);
    vec3 colour;
    // The room starts near black (uBase) and rises with each stone that wakes (uRoom).
    float lift = uBase + (1. - uBase) * uRoom;
    if (direction.y < -1e-4) {
      vec3 hit = cameraPosition + direction * ((uFloorY - cameraPosition.y) / direction.y);
      vec2 p = (hit.xz - uCentre.xz) / uScale;
      float r = length(p * vec2(1., 1.15));
      // The table: richest under the piece, falling into the far dark.
      vec3 table = mix(uTable, uFar, smoothstep(.8, 3.6, r));
      table *= lift;
      // The stones' light gathered on the table around the piece (the room built by the stones).
      table += uRoomTint * uRoom * .018 * exp(-r * r * .55);
      // Toward the horizon the table melts into the room's low band.
      float far = smoothstep(.0, .22, -direction.y);
      colour = mix(uHorizon * lift, table, far);
    } else {
      colour = mix(uHorizon, uTop, smoothstep(0., .55, direction.y)) * lift;
      colour += uRoomTint * uRoom * .008 * (1. - smoothstep(0., .4, direction.y));
    }
    colour += (h21(gl_FragCoord.xy) - .5) / 255. * 1.2;
    gl_FragColor = vec4(colour, 1.);
    #include <colorspace_fragment>
  }
`,w=`
  attribute vec3 aCentre;
  attribute vec3 aColour;
  attribute float aRadius, aElement, aOrder, aSeed, aStrength, aDim;
`,oe=`
  ${w}
  uniform float uFloorY;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vElement, vSeed, vLevel;
  ${C}
  void main() {
    float size = aRadius * ${v.toFixed(2)} * sqrt(aStrength) * (aElement > 2.5 ? 1.12 : aElement > 1.5 ? 1.08 : 1.);
    vLocal = position.xz;
    vec2 stretch = aElement > 1.5 && aElement < 2.5 ? vec2(1.35, .85) : vec2(1.);
    vec4 world = modelMatrix * vec4(aCentre.x, uFloorY + .002, aCentre.z, 1.);
    world.xz += position.xz * size * stretch;
    vColour = aColour; vElement = aElement; vSeed = aSeed;
    vLevel = aStrength * aDim * (wakeOf(aOrder) + .9 * pulseOf(aOrder));
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,se=`
  uniform float uTime, uMotion, uIntensity;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vElement, vSeed, vLevel;
  ${S}
  void main() {
    if (vLevel < .002) discard;
    float r = length(vLocal);
    if (r > 1.) discard;
    float edge = 1. - smoothstep(.62, 1., r);
    float body = exp(-r * r * 3.4) * edge;
    vec3 colour = vColour;
    float light;
    float t = uTime + vSeed * 17.;
    if (vElement < .5) {
      // Fire RISES and breathes: a warm pool with a slow, uneven breath and a hotter heart.
      float breath = .84 + .16 * sin(t * 1.9) * (.6 + .4 * vnoise(vec2(t * 1.3, vSeed * 9.)));
      float lick = .9 + .2 * vnoise(vLocal * 3.1 + vec2(0., -t * .9));
      light = body * mix(1., breath * lick, .35 + .65 * uMotion);
      colour = mix(colour, vec3(1., .78, .5), .35 * exp(-r * r * 9.));
    } else if (vElement < 1.5) {
      // Water SPREADS: caustic light playing in the pool, and rings that travel out over still water.
      vec2 q = vLocal * 5.2;
      float a = sin(q.x * 1.7 + t * .9 + sin(q.y * 1.3 - t * .6) * 1.6);
      float b = sin(q.y * 1.9 - t * .7 + sin(q.x * 1.1 + t * .5) * 1.7);
      float caustic = pow(1. - abs(a * b), 6.);
      float ring = 0.;
      for (int i = 0; i < 2; i++) {
        float phase = fract(t * .16 + float(i) * .5);
        float rr = .18 + phase * .8;
        float d = (r - rr) / .05;
        ring += exp(-d * d) * (1. - phase) * smoothstep(0., .1, phase);
      }
      light = body * (.62 + .7 * caustic * smoothstep(1., .25, r)) + ring * .32 * edge;
    } else if (vElement < 2.5) {
      // Air DRIFTS: a paler, wider veil, threaded with soft bands moving along the wind.
      float veil = vnoise(vec2(vLocal.x * 2.2 - t * .35, vLocal.y * 5.5 + vSeed * 4.));
      light = exp(-r * r * 2.3) * edge * (.6 + .55 * veil);
      colour = mix(colour, vec3(.95, .95, 1.), .28);
    } else {
      // Earth SETTLES: a perfectly still pool, warm and low, with fine dust resting in it.
      vec2 cell = floor(vLocal * 15.), f = fract(vLocal * 15.) - .5;
      float mote = step(.86, h21(cell + vSeed * 13.)) * exp(-dot(f, f) * 40.) * smoothstep(.95, .3, r);
      light = exp(-r * r * 3.1) * edge * .58 + mote * .8;
      colour = mix(colour, vec3(1., .86, .58), .25 * mote);
    }
    gl_FragColor = vec4(colour * light * vLevel * uIntensity * .32, 1.);
    #include <colorspace_fragment>
  }
`,ce=`
  ${w}
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vLevel, vInner, vElement;
  ${C}
  void main() {
    vec4 centre = modelMatrix * vec4(aCentre, 1.);
    // Set back behind the bead: the stone's own surface covers the middle, the glow shows around it.
    vec3 back = normalize(centre.xyz - cameraPosition);
    centre.xyz += back * aRadius * 1.15;
    vec4 view = viewMatrix * centre;
    float size = aRadius * ${y.toFixed(2)} * sqrt(aStrength);
    view.xy += position.xy * size;
    vLocal = position.xy; vColour = aColour; vElement = aElement;
    // The bead's own silhouette, as a share of the quad (a little larger: it is set back).
    vInner = .62 / ${y.toFixed(2)};
    vLevel = aStrength * aDim * (wakeOf(aOrder) * .8 + 1.4 * pulseOf(aOrder));
    gl_Position = projectionMatrix * view;
  }
`,le=`
  uniform float uIntensity, uTime, uMotion;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vLevel, vInner, vElement;
  void main() {
    if (vLevel < .002) discard;
    float r = length(vLocal);
    if (r > 1.) discard;
    float glow = exp(-pow(max(r - vInner, 0.) / .26, 2.)) * (1. - smoothstep(.75, 1., r));
    float breath = vElement < .5 ? .9 + .1 * sin(uTime * 1.9) * uMotion : 1.;
    gl_FragColor = vec4(vColour * glow * vLevel * breath * uIntensity * .16, 1.);
    #include <colorspace_fragment>
  }
`,ue=`
  attribute vec3 aCentre;
  attribute vec3 aColour;
  attribute float aRadius, aElement, aOrder, aSeed, aDim;
  uniform float uTime, uFloorY, uStir;
  uniform vec2 uWind;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vAlpha, vElement;
  ${C}
  float rand(float n) { return fract(sin(n * 91.345) * 47453.21); }
  void main() {
    vec4 centre = modelMatrix * vec4(aCentre, 1.);
    float speed = 1. + uStir * .8;
    vLocal = position.xy; vColour = aColour; vElement = aElement;
    float awake = wakeOf(aOrder) * aDim;
    vec4 world;
    if (aElement > .5 && aElement < 1.5) {
      // Water: a ring spreading on the table from under the bead.
      float life = 3.6, phase = fract(uTime * speed / life + aSeed);
      float size = aRadius * (1.2 + phase * 5.);
      world = vec4(centre.x, uFloorY + .003, centre.z, 1.);
      world.xz += position.xy * size;
      vAlpha = awake * (1. - phase) * smoothstep(0., .08, phase) * .55;
      gl_Position = projectionMatrix * viewMatrix * world;
      return;
    }
    vec3 at = centre.xyz;
    float size;
    if (aElement < .5) {
      // Fire: a spark rising from the bead, swaying, fading.
      float life = 2.1 + rand(aSeed) * .9, phase = fract(uTime * speed / life + aSeed);
      at += vec3(sin(phase * 6. + aSeed * 30.) * aRadius * .35, aRadius * (.8 + phase * 4.2), cos(phase * 5. + aSeed * 20.) * aRadius * .3);
      size = aRadius * (.075 + .05 * (1. - phase));
      vAlpha = awake * sin(3.14159 * phase) * (.7 + .3 * sin(uTime * 23. + aSeed * 50.));
    } else if (aElement < 2.5) {
      // Air: a wisp of mist leaving the bead along the one wind.
      float life = 5.5, phase = fract(uTime * speed / life + aSeed);
      at += vec3(uWind.x, 0., uWind.y) * aRadius * (.4 + phase * 5.) + vec3(0., aRadius * (.35 + .5 * phase), 0.);
      size = aRadius * (.8 + phase * 1.6);
      vAlpha = awake * sin(3.14159 * phase) * .2;
    } else {
      // Earth: gold dust settling slowly onto the table beside the bead, then resting.
      float life = 6.5, phase = fract(uTime * speed / life + aSeed);
      float angle = aSeed * 40.;
      vec3 offset = vec3(cos(angle), 0., sin(angle)) * aRadius * (1.1 + rand(aSeed) * 1.4);
      float height = max(0., 1. - phase * 1.4);
      at = vec3(centre.x, uFloorY, centre.z) + offset + vec3(0., aRadius * (.15 + 3.2 * height * height), 0.);
      size = aRadius * .06;
      vAlpha = awake * smoothstep(0., .1, phase) * (1. - smoothstep(.8, 1., phase)) * (.75 + .25 * sin(uTime * 3. + aSeed * 70.));
    }
    vec4 view = viewMatrix * vec4(at, 1.);
    view.xy += position.xy * size * (aElement > 1.5 && aElement < 2.5 ? vec2(1.6, .7) : vec2(1.));
    gl_Position = projectionMatrix * view;
  }
`,de=`
  uniform float uMotion, uIntensity;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vAlpha, vElement;
  void main() {
    float a = vAlpha * uMotion;
    if (a < .003) discard;
    float r = length(vLocal);
    if (r > 1.) discard;
    float shape;
    vec3 colour = vColour;
    if (vElement > .5 && vElement < 1.5) { float d = (r - .82) / .07; shape = exp(-d * d); }
    else if (vElement < .5) { shape = exp(-r * r * 6.); colour = mix(colour, vec3(1., .85, .6), .55); }
    else if (vElement < 2.5) shape = exp(-r * r * 3.);
    else { shape = exp(-r * r * 7.); colour = mix(colour, vec3(1., .88, .62), .5); }
    gl_FragColor = vec4(colour * shape * a * uIntensity, 1.);
    #include <colorspace_fragment>
  }
`,T=Object.freeze({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,fog:!1,toneMapped:!1}),E=e=>new n(e);function D(e){let n=new r,i=e?[-1,0,-1,1,0,-1,1,0,1,-1,0,1]:[-1,-1,0,1,-1,0,1,1,0,-1,1,0];return n.setAttribute(`position`,new t(i,3)),n.setIndex(e?[0,2,1,0,3,2]:[0,1,2,0,2,3]),n.instanceCount=0,n}var O=Object.freeze({aCentre:3,aColour:3,aRadius:1,aElement:1,aOrder:1,aSeed:1,aStrength:1,aDim:1});function k(t,n,r){for(let[r,i]of Object.entries(O)){let o=t.getAttribute(r);(!o||o.count<n)&&(o=new a(new Float32Array(Math.max(1,n)*i),i),o.setUsage(e),t.setAttribute(r,o))}for(let e=0;e<n;e++)r(e,(n,...r)=>{let i=t.getAttribute(n);i.array.set(r,e*i.itemSize)});for(let e of Object.keys(O))t.getAttribute(e).needsUpdate=!0;t.instanceCount=n}var A=(e,t=0)=>{let n=2166136261^t;for(let t of String(e))n=Math.imul(n^t.charCodeAt(0),16777619);return(n>>>0)%1e4/1e4};function fe(e,t=48){if(!e.length)return[];if(e.length>=t)return Array.from({length:t},(n,r)=>{let i=e[Math.floor((r+.5)*e.length/t)];return{light:i,seed:A(i.id,1)}});let n=Math.max(1,Math.floor(t/e.length)),r=[],i=e=>e.elementIndex===1||e.elementIndex===2?Math.max(1,Math.round(n*.5)):n,a=0;for(;r.length<t&&a<6;){let n=!1;for(let o of e){if(r.length>=t)break;a<Math.min(3,i(o)+ +(o.strength>1.1))&&(r.push({light:o,seed:A(o.id,a+1)}),n=!0)}if(!n)break;a++}return r}function pe(e={}){let{scene:t,camera:r,registerNativeGroup:a}=e,te=typeof e.requestFrame==`function`?e.requestFrame:()=>{};if(!t?.isScene||typeof a!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let d=new c;d.name=`atmosphere-awakening`;let f=new l,p={uClock:{value:1e4},uLead:{value:g.lead},uSpan:{value:ne(1)},uRise:{value:g.rise}},m={uTime:{value:0},uMotion:{value:0},uFloorY:{value:0},uIntensity:{value:1}},h=new u({name:`awakening-room`,vertexShader:ie,fragmentShader:ae,side:1,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{uTop:{value:E(`#07070c`)},uHorizon:{value:E(`#211f2c`)},uTable:{value:E(`#1e1c28`)},uFar:{value:E(`#121119`)},uRoomTint:{value:new n(1,.8,.6)},uCentre:{value:f},uRoom:{value:1},uScale:{value:1},uFloorY:m.uFloorY,uBase:{value:.2}}}),y=new i(new s(1,48,24),h);y.name=`awakening-room`,y.renderOrder=-10,y.frustumCulled=!1;let S=new c;S.name=`awakening-lights`;let C=D(!0),w=D(!1),O=D(!1),pe=new u({name:`awakening-pools`,vertexShader:oe,fragmentShader:se,...T,uniforms:{...p,...m}}),me=new u({name:`awakening-halos`,vertexShader:ce,fragmentShader:le,...T,uniforms:{...p,uTime:m.uTime,uMotion:m.uMotion,uIntensity:m.uIntensity}}),j=new u({name:`awakening-particles`,vertexShader:ue,fragmentShader:de,...T,uniforms:{...p,...m,uStir:{value:0},uWind:{value:new o(.94,-.34)}}}),M=new i(C,pe),N=new i(w,me),P=new i(O,j);M.name=`awakening-pools`,N.name=`awakening-halos`,P.name=`awakening-particles`,M.renderOrder=3,N.renderOrder=4,P.renderOrder=5;for(let e of[M,N,P])e.frustumCulled=!1,S.add(e);d.add(y,S),t.add(d),a(d);let F=null,I=null,L=[],R=[],z=null,B=null,V=!1,H=!1,U=!1,W=0,G=null,K=!1,q=0,J=!0,Y=!0,X=``,he=[],ge=0,_e=-1,Z=0,Q=!1,ve=0,ye=null,be=()=>(typeof performance<`u`?performance.now():Date.now())/1e3;function xe(){let e=F?.palette;if(!e)return;let t=h.uniforms;t.uTop.value.set(e.top),t.uHorizon.value.set(e.horizon),t.uTable.value.set(e.table),t.uFar.value.set(e.far)}function Se(){let e=Math.max(.001,Number(I?.radius)||1),t=Array.isArray(I?.center)?I.center:[0,0,0],n=Number.isFinite(I?.floorY)?I.floorY:0;f.set(t[0],n,t[2]),y.scale.setScalar(e*80),y.position.copy(f),h.uniforms.uScale.value=e,m.uFloorY.value=n}function Ce(){let e=new Map(L.map(e=>{let t=e.radius*v*Math.sqrt(e.strength),n=0;for(let r of L){let i=Math.hypot(r.position[0]-e.position[0],r.position[2]-e.position[2])/t;n+=Math.exp(-i*i*3.4)}return[e.id,1/Math.sqrt(Math.max(1,n))]})),t=t=>(n,r)=>{let i=t(n),a=E(i.light.color).multiplyScalar(e.get(i.light.id)??1);r(`aCentre`,...i.light.position),r(`aColour`,a.r,a.g,a.b),r(`aRadius`,i.light.radius),r(`aElement`,i.light.elementIndex),r(`aOrder`,i.light.order),r(`aSeed`,i.seed),r(`aStrength`,i.light.strength),r(`aDim`,1)},n=e=>({light:L[e],seed:A(L[e].id)});k(C,L.length,t(n)),k(w,L.length,t(n)),R=fe(L),k(O,R.length,t(e=>R[e])),p.uSpan.value=ne(L.length),we(!0)}function we(e=!1){let t=new Set(he),n=L.filter(e=>t.has(e.id)).map(e=>e.id).join(`\0`);if(!e&&n===X)return!1;X=n;let r=n?new Set(n.split(`\0`)):null,i=e=>r?r.has(e.id)?x:b:1;for(let[e,t]of[[C,L],[w,L],[O,R.map(e=>e.light)]]){let n=e.getAttribute(`aDim`);t.forEach((e,t)=>{n.array[t]=i(e)}),n.needsUpdate=!0}return!0}function Te(e){let t=0,n=0,r=[0,0,0],i=X?new Set(X.split(`\0`)):null;for(let a of L){let o=a.strength*(i&&!i.has(a.id)?b:1),s=re(a.order,e,L.length)*o;t+=a.strength,n+=s;let c=E(a.color);r[0]+=c.r*s,r[1]+=c.g*s,r[2]+=c.b*s}let a=t?n/t:1,o=Math.max(1e-4,n);return h.uniforms.uRoom.value=a,h.uniforms.uRoomTint.value.setRGB(r[0]/o,r[1]/o,r[2]/o),a}function $(e){G=e,K=!1,q=e+25,J=!1,Y=!0}function Ee(e){q=Math.max(q,e+25),J=!1,Y=!0}function De(){if(Z||V)return;let e=Math.max(0,_-(be()-_e)-.013);Z=setTimeout(()=>{Z=0,!V&&!J&&te()},e*1e3)}return{setDesign(e){if(V||!e?.mood)return!1;if(e.revisionKey===z)return!0;let t=z===null,n=(e.stonesKey??null)!==B;return z=e.revisionKey,B=e.stonesKey??null,F=e.mood,I=e.bounds??null,L=Array.isArray(e.lights)?e.lights:[],xe(),Se(),Ce(),t||n?$(W):Ee(W),!0},setConfiguration(e){if(V)return!1;let t=Number(e?.strength);return m.uIntensity.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1,Y=!0,!0},frame({timeSeconds:e=0,playing:t=!1,reducedMotion:n=!1,interacting:r=!1,selectedIds:i=[],productYaw:a=0,productPivot:o=[0,0],viewport:s=null}={}){if(V)return!1;_e=be(),Q=Number(s?.cssWidth)>0&&Number(s.cssWidth)<700;let c=H;H=t,U=n,W=e,he=Array.isArray(i)?i:[];let l=we(),u=Number.isFinite(arguments[0]?.wallSeconds)?arguments[0].wallSeconds:be(),te=ye!==null&&u-ye>1.2&&!r&&!l;ye=u,t&&!n&&(!c||te)&&$(e),G===null&&$(e),(r||l)&&(e-G>.25&&(K=!0),Ee(e),r&&(ge=e+1.6));let d=U||!H,f=d||K?1e4:e-G;p.uClock.value=f,Te(f);let h=!d&&e<q,g=d?0:1-ee.smoothstep(e,q-3,q);h&&(ve=e),m.uTime.value=d?7.3:ve,m.uMotion.value=g,j.uniforms.uStir.value=Math.max(0,Math.min(1,(ge-e)/1.6));let _=-.35+a*.5;j.uniforms.uWind.value.set(Math.cos(_),Math.sin(_)),S.rotation.y=a;let[v,y]=Array.isArray(o)?o:[0,0],b=Math.cos(a),x=Math.sin(a);return S.position.set(v-(b*v+x*y),0,y-(-x*v+b*y)),P.visible=g>.002&&R.length>0,J=!h,Y=!1,h&&Q&&De(),!0},needsFrame(){return!V&&(Y||!J&&!Q)},reset(e=0){W=e,$(e)},getState(){let e=[0,0,0,0];for(let t of L)e[t.elementIndex]++;return{kind:`awakening`,element:F?.element??null,sign:F?.sign??null,lights:L.length,particles:R.length,elements:e,solo:X?X.split(`\0`):[],room:+h.uniforms.uRoom.value.toFixed(3),clock:p.uClock.value,entranceSeconds:g.lead+p.uSpan.value+g.rise,motion:+m.uMotion.value.toFixed(3),settled:J,motionUntil:q,playing:H,reducedMotion:U,phone:Q,drawCalls:[y,M,N,P].filter(e=>e.visible&&(e===y||e.geometry.instanceCount>0)).length}},dispose(){if(!V){V=!0,Z&&clearTimeout(Z),d.parent?.remove(d);for(let e of[y,M,N,P])e.geometry.dispose(),e.material.dispose()}}}}var me=Object.freeze(Object.fromEntries(f.map((e,t)=>[e,t]))),j=.62,M=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255),N=e=>`#${e.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,`0`)).join(``)}`,P=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite);function F(e,t){let n=M(e),r=Math.max(...n),i=Math.min(...n),a=r>0?(r-i)/r:0,o=n.map(e=>e/Math.max(r,.04)),s=Math.min(t===`fire`?.55:.8,a*1.7),c=M(h[t]??h.air).map((e,t)=>e+(o[t]-e)*s),l=Math.max(...c),u=.2126*n[0]+.7152*n[1]+.0722*n[2]>.62?.72:1;return N(c.map(e=>e/l*Math.max(j,Math.min(1,l))*u))}function I(e){return e instanceof Map?e:new Map((e??[]).map(e=>[e.id,e]))}function L(e,t,n){if(!Array.isArray(n)||!n.length)return Object.freeze([]);let r=I(t),i=new Map;for(let e of n)e&&typeof e.id==`string`&&P(e.position)&&Number.isFinite(e.radius)&&e.radius>0&&i.set(e.id,e);let a=[];return(e?.occurrences??[]).forEach((e,t)=>{let n=i.get(e?.id);if(!n)return;let o=r.get(e.componentId),s=p(o);s&&a.push(Object.freeze({id:e.id,family:s.family,name:s.name,element:s.element,elementIndex:me[s.element],label:te(s),color:F(s.color,s.element),stoneColor:s.color,position:Object.freeze([...n.position]),radius:n.radius,strength:+Math.min(1.6,Math.max(.55,d(o)/8)).toFixed(3),strand:t,order:0}))}),a.forEach((e,t)=>{a[t]=Object.freeze({...e,order:a.length>1?+(t/(a.length-1)).toFixed(4):0})}),Object.freeze(a)}var R=Object.freeze({camera:Object.freeze({mode:`manual`}),themes:Object.freeze([]),strength:1});function z(e,t={}){let n={...e??R,...t&&typeof t==`object`?t:{}};n.camera=Object.freeze({mode:`manual`}),n.themes=Object.freeze(Array.isArray(n.themes)?[...new Set(n.themes)]:[]);let r=Number(n.strength);return n.strength=Number.isFinite(r)?Math.min(1,Math.max(0,r)):1,Object.freeze(n)}function B(e=R){let t=z(e);return Object.freeze({get:()=>t,set(e,{replace:n=!1}={}){let r=n?z(e):z(t,e);return JSON.stringify(r)!==JSON.stringify(t)&&(t=r),t}})}var V=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite);function H(e){if(!e)return null;let{center:t,radius:n}=e;return!V(t)&&V(e.min)&&V(e.max)&&(t=e.min.map((t,n)=>(t+e.max[n])/2)),!Number.isFinite(n)&&V(e.min)&&V(e.max)&&(n=Math.hypot(...e.max.map((t,n)=>t-e.min[n]))/2),!V(t)||!Number.isFinite(n)||n<=0?null:{center:[...t],radius:n,floorY:Number.isFinite(e.floorY)?e.floorY:0}}function U(e,t,{worldBounds:n=null,anchors:r=null}={}){let i=m(e,t),a=H(n),o=L(e,t,r),s=o.map(e=>[e.id,e.color,e.elementIndex,...e.position.map(e=>+e.toFixed(3)),+e.radius.toFixed(3)]),c=JSON.stringify((e?.occurrences??[]).map(e=>[e?.id,e?.componentId]));return Object.freeze({mood:i,bounds:a,lights:o,stonesKey:c,revisionKey:JSON.stringify([i.key,a&&a.center.map(e=>+e.toFixed(4)),a&&+a.radius.toFixed(4),s])})}function W(e){return pe(e)}export{R as DEFAULT_CONFIGURATION,W as createAtmosphereLayer,B as createAtmosphereSettingsStore,U as createAtmosphereSnapshot,m as deriveMood,z as patchConfiguration,L as stoneLights};