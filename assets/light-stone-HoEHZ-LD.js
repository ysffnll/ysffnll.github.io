import{Dt as e,Lt as t,U as n,an as r,ar as i,in as a,no as o,pa as s,qt as c,ro as l,ta as u,tr as ee}from"./three.core-Dp-eO7LC.js";import{a as d,i as f,n as p,o as m,r as h,t as g}from"./mood-CDa4D43p.js";var _=Object.freeze({lead:.45,perStone:.045,base:1.6,max:3.5,rise:.7}),v=1/30,y=3.2,b=.26,x=1.75,S=.1,te=1.8;function ne(e){return Math.min(_.max-_.lead,_.base+_.perStone*Math.max(0,e-1)*.5)}function re(e,t,n){let r=(t-(_.lead+e*ne(n)))/_.rise;return r<=0?0:r>=1?1:r*r*(3-2*r)}var C=`
  float h21(vec2 p) { vec3 q = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(h21(i), h21(i + vec2(1., 0.)), f.x), mix(h21(i + vec2(0., 1.)), h21(i + vec2(1., 1.)), f.x), f.y);
  }
`,w=`
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
  ${C}
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
`,T=`
  attribute vec3 aCentre;
  attribute vec3 aColour;
  attribute vec2 aOut;
  attribute float aRadius, aElement, aOrder, aSeed, aStrength, aGlow, aDim;
`,oe=`
  ${T}
  uniform float uFloorY;
  varying vec2 vLocal, vOut;
  varying vec3 vColour;
  varying float vElement, vSeed, vLevel, vDust, vShadow;
  ${w}
  void main() {
    // The tapped stone's light reaches a little further, so it shows beside the bead.
    float reach = ${y.toFixed(2)} * (aDim > 1.2 ? 1.25 : 1.);
    vec2 stretch = aElement > 1.5 && aElement < 2.5 ? vec2(1.3, .85) : vec2(1.);
    vLocal = position.xz * reach * stretch;
    vec4 world = modelMatrix * vec4(aCentre.x, uFloorY + .002, aCentre.z, 1.);
    world.xz += position.xz * aRadius * reach * stretch;
    vColour = aColour; vElement = aElement; vSeed = aSeed; vOut = aOut;
    float awake = wakeOf(aOrder);
    vLevel = aGlow * aDim * (awake + .9 * pulseOf(aOrder));
    // Earth's dust and every stone's contact shadow do not depend on how much light the stone gives.
    vDust = min(aDim, 1.) * awake;
    vShadow = awake;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,se=`
  uniform float uTime, uMotion, uIntensity;
  varying vec2 vLocal, vOut;
  varying vec3 vColour;
  varying float vElement, vSeed, vLevel, vDust, vShadow;
  ${C}
  void main() {
    float d = length(vLocal);
    if (d > ${y.toFixed(2)} * 1.25 || (vLevel < .002 && vDust < .002 && vShadow < .002)) discard;
    // A small source one radius above the table, faded out at the reach.
    float fall = pow(1. + d * d * 1.4, -1.5) / .27;
    fall *= 1. - smoothstep(${(y*.6).toFixed(2)}, ${y.toFixed(2)}, d);
    // The bead sits on the table inside its own light: dark at the contact point.
    float contact = smoothstep(.3, 1.05, d);
    // The lobe: along the outward direction from the bead's edge, widening a little as it goes (a beam
    // leaving the stone). A stone alone (no outward direction) keeps the round pool.
    float outward = length(vOut);
    vec2 dir = outward > .5 ? vOut / outward : vec2(0.);
    float along = dot(vLocal, dir), across = dot(vLocal, vec2(-dir.y, dir.x));
    float width = .42 + .1 * max(along - 1., 0.);
    float lobe = exp(-across * across / (2. * width * width)) * smoothstep(.25, 1.05, along) * exp(-pow(max(along - 1.1, 0.) / 1.3, 2.));
    lobe *= 1. - smoothstep(${(y*.75).toFixed(2)}, ${y.toFixed(2)}, along);
    float light = outward > .5 ? fall * contact * .3 + lobe : fall * contact;
    vec3 colour = vColour;
    float t = uTime + vSeed * 17.;
    float extra = 0., grains = 0.;
    if (vElement < .5) {
      // Fire RISES and breathes: a slow, uneven breath and a hotter rim right beside the bead.
      float breath = .86 + .14 * sin(t * 1.9 + sin(t * .7) * 1.3);
      light *= mix(1., breath, uMotion);
      colour = mix(colour, vec3(1., .74, .46), .3 * exp(-(d - 1.) * (d - 1.) * 2.));
    } else if (vElement < 1.5) {
      // Water SPREADS: soft moving water light (three unequal, warped waves: no lattice), rings over still water.
      vec2 q = vLocal * 1.7 + vSeed * 9.;
      q += .7 * vec2(sin(q.y * 1.3 + t * .37), sin(q.x * 1.1 - t * .29));
      float w = sin(dot(q, vec2(.87, .5)) * 1.9 + t * .8) + sin(dot(q, vec2(-.64, .77)) * 2.6 - t * .6) + sin(q.y * 1.4 + t * .45);
      float caustic = smoothstep(.6, 2.6, w);
      light *= .82 + .42 * caustic * (1. - smoothstep(1.4, 3., d));
      for (int i = 0; i < 2; i++) {
        float phase = fract(t * .14 + float(i) * .5);
        float k = (d - 1.1 - phase * 2.1) / .14;
        extra += exp(-k * k) * (1. - phase) * smoothstep(0., .12, phase) * .16;
      }
      extra *= 1. - smoothstep(2.6, 3.4, d);
    } else if (vElement < 2.5) {
      // Air DRIFTS: a paler veil, softly banded along the wind.
      light *= .8 + .3 * sin(vLocal.x * .9 - t * .5 + sin(vLocal.y * 1.3) * 1.2);
      colour = mix(colour, vec3(.95, .95, 1.), .25);
    } else {
      // Earth SETTLES: the pool is perfectly still; a few grains of gold dust rest beside the stone and
      // catch the room's light (they do not need the stone to glow).
      float dust = 0.;
      for (int i = 0; i < 3; i++) {
        float fi = float(i);
        float angle = h21(vec2(vSeed * 31. + fi, fi * 7.)) * 6.2832;
        float at = 1.25 + h21(vec2(fi * 3.1, vSeed * 17.)) * 1.1;
        vec2 grain = vLocal - vec2(cos(angle), sin(angle)) * at;
        dust += exp(-dot(grain, grain) / .004) * (.45 + .55 * h21(vec2(fi, vSeed)));
      }
      grains = dust * vDust;
    }
    vec3 lit = colour * (light + extra) * vLevel * uIntensity * ${b.toFixed(3)} * (.85 + .3 * vSeed) + vec3(1., .84, .55) * grains * .32 * uIntensity;
    // Contact shadow: the table under the bead is darkened (dst * alpha), then the light is added.
    float shade = (1. - contact) * .6 * vShadow;
    gl_FragColor = vec4(lit, 1. - shade);
    #include <colorspace_fragment>
  }
`,ce=`
  ${T}
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vLevel, vInner, vElement, vRim;
  ${w}
  void main() {
    vec4 centre = modelMatrix * vec4(aCentre, 1.);
    vec3 back = normalize(centre.xyz - cameraPosition);
    centre.xyz += back * aRadius * 1.15;
    vec4 view = viewMatrix * centre;
    float size = aRadius * ${x.toFixed(2)};
    view.xy += position.xy * size;
    vLocal = position.xy; vColour = aColour; vElement = aElement;
    vInner = .62 / ${x.toFixed(2)};
    vRim = 1. - smoothstep(.08, .35, aGlow);
    float awake = wakeOf(aOrder);
    vLevel = aDim * (aGlow * (awake * .7 + 1.4 * pulseOf(aOrder)) + vRim * .5 * awake);
    gl_Position = projectionMatrix * view;
  }
`,le=`
  uniform float uIntensity, uTime, uMotion;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vLevel, vInner, vElement, vRim;
  void main() {
    if (vLevel < .002) discard;
    float r = length(vLocal);
    if (r > 1.) discard;
    float width = mix(.24, .07, vRim);
    float glow = exp(-pow(max(r - vInner, 0.) / width, 2.)) * (1. - smoothstep(.75, 1., r));
    float breath = vElement < .5 ? .9 + .1 * sin(uTime * 1.9) * uMotion : 1.;
    vec3 colour = mix(vColour, vec3(.62, .6, .58), vRim);
    gl_FragColor = vec4(colour * glow * vLevel * breath * uIntensity * .09, 1.);
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
  ${w}
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
      float size = aRadius * (1.2 + phase * 3.);
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
`,E=Object.freeze({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,fog:!1,toneMapped:!1}),fe=Object.freeze({...E,blending:5,blendEquation:100,blendSrc:201,blendDst:204,blendSrcAlpha:200,blendDstAlpha:201}),D=e=>new n(e);function O(e){let n=new r,i=e?[-1,0,-1,1,0,-1,1,0,1,-1,0,1]:[-1,-1,0,1,-1,0,1,1,0,-1,1,0];return n.setAttribute(`position`,new t(i,3)),n.setIndex(e?[0,2,1,0,3,2]:[0,1,2,0,2,3]),n.instanceCount=0,n}var k=Object.freeze({aCentre:3,aColour:3,aRadius:1,aElement:1,aOrder:1,aSeed:1,aStrength:1,aGlow:1,aDim:1,aOut:2});function A(t,n,r){for(let[r,i]of Object.entries(k)){let o=t.getAttribute(r);(!o||o.count<n)&&(o=new a(new Float32Array(Math.max(1,n)*i),i),o.setUsage(e),t.setAttribute(r,o))}for(let e=0;e<n;e++)r(e,(n,...r)=>{let i=t.getAttribute(n);i.array.set(r,e*i.itemSize)});for(let e of Object.keys(k))t.getAttribute(e).needsUpdate=!0;t.instanceCount=n}var pe=(e,t=0)=>{let n=2166136261^t;for(let t of String(e))n=Math.imul(n^t.charCodeAt(0),16777619);return(n>>>0)%1e4/1e4};function me(e,t=48){if(!e.length)return[];if(e.length>=t)return Array.from({length:t},(n,r)=>{let i=e[Math.floor((r+.5)*e.length/t)];return{light:i,seed:pe(i.id,1)}});let n=Math.max(1,Math.floor(t/e.length)),r=[],i=e=>e.elementIndex===1||e.elementIndex===2?Math.max(1,Math.round(n*.5)):n,a=0;for(;r.length<t&&a<6;){let n=!1;for(let o of e){if(r.length>=t)break;a<Math.min(3,i(o)+ +(o.strength>1.1))&&(r.push({light:o,seed:pe(o.id,a+1)}),n=!0)}if(!n)break;a++}return r}function he(e={}){let{scene:t,camera:r,registerNativeGroup:a}=e,d=typeof e.requestFrame==`function`?e.requestFrame:()=>{};if(!t?.isScene||typeof a!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let f=new c;f.name=`atmosphere-awakening`;let p=new l,m={uClock:{value:1e4},uLead:{value:_.lead},uSpan:{value:ne(1)},uRise:{value:_.rise}},h={uTime:{value:0},uMotion:{value:0},uFloorY:{value:0},uIntensity:{value:1}},g=new u({name:`awakening-room`,vertexShader:ie,fragmentShader:ae,side:1,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{uTop:{value:D(`#07070c`)},uHorizon:{value:D(`#211f2c`)},uTable:{value:D(`#1e1c28`)},uFar:{value:D(`#121119`)},uRoomTint:{value:new n(1,.8,.6)},uCentre:{value:p},uRoom:{value:1},uScale:{value:1},uFloorY:h.uFloorY,uBase:{value:.2}}}),b=new i(new s(1,48,24),g);b.name=`awakening-room`,b.renderOrder=-10,b.frustumCulled=!1;let x=new c;x.name=`awakening-lights`;let C=O(!0),w=O(!1),T=O(!1),k=new u({name:`awakening-pools`,vertexShader:oe,fragmentShader:se,...fe,uniforms:{...m,...h}}),he=new u({name:`awakening-halos`,vertexShader:ce,fragmentShader:le,...E,uniforms:{...m,uTime:h.uTime,uMotion:h.uMotion,uIntensity:h.uIntensity}}),j=new u({name:`awakening-particles`,vertexShader:ue,fragmentShader:de,...E,uniforms:{...m,...h,uStir:{value:0},uWind:{value:new o(.94,-.34)}}}),M=new i(C,k),N=new i(w,he),P=new i(T,j);M.name=`awakening-pools`,N.name=`awakening-halos`,P.name=`awakening-particles`,M.renderOrder=3,N.renderOrder=4,P.renderOrder=5;for(let e of[M,N,P])e.frustumCulled=!1,x.add(e);f.add(b,x),t.add(f),a(f);let F=null,I=null,L=[],R=[],z=null,B=null,V=!1,H=!1,U=!1,W=0,G=null,K=!1,q=0,J=!0,Y=!0,X=``,ge=[],_e=0,ve=-1,Z=0,Q=!1,ye=0,be=null,xe=()=>(typeof performance<`u`?performance.now():Date.now())/1e3;function Se(){let e=F?.palette;if(!e)return;let t=g.uniforms;t.uTop.value.set(e.top),t.uHorizon.value.set(e.horizon),t.uTable.value.set(e.table),t.uFar.value.set(e.far)}function Ce(){let e=Math.max(.001,Number(I?.radius)||1),t=Array.isArray(I?.center)?I.center:[0,0,0],n=Number.isFinite(I?.floorY)?I.floorY:0;p.set(t[0],n,t[2]),b.scale.setScalar(e*80),b.position.copy(p),g.uniforms.uScale.value=e,h.uFloorY.value=n}function we(){let e=new Map(L.map(e=>{let t=e.radius*y,n=0;for(let r of L){let i=Math.hypot(r.position[0]-e.position[0],r.position[2]-e.position[2])/t;n+=Math.exp(-i*i*3.4)}return[e.id,1/Math.sqrt(Math.max(1,n))]})),t=new Map(L.map(e=>{let t=e.position[0]-p.x,n=e.position[2]-p.z,r=Math.hypot(t,n);return[e.id,r>e.radius*.5?[t/r,n/r]:[0,0]]})),n=n=>(r,i)=>{let a=n(r),o=D(a.light.color).multiplyScalar(e.get(a.light.id)??1);i(`aCentre`,...a.light.position),i(`aColour`,o.r,o.g,o.b),i(`aRadius`,a.light.radius),i(`aElement`,a.light.elementIndex),i(`aOrder`,a.light.order),i(`aSeed`,a.seed),i(`aStrength`,a.light.strength),i(`aGlow`,a.light.level??1),i(`aDim`,1),i(`aOut`,...t.get(a.light.id)??[0,0])},r=e=>({light:L[e],seed:pe(L[e].id)});A(C,L.length,n(r)),A(w,L.length,n(r)),R=me(L),A(T,R.length,n(e=>R[e])),m.uSpan.value=ne(L.length),Te(!0)}function Te(e=!1){let t=new Set(ge),n=L.filter(e=>t.has(e.id)).map(e=>e.id).join(`\0`);if(!e&&n===X)return!1;X=n;let r=n?new Set(n.split(`\0`)):null,i=e=>r?r.has(e.id)?te:S:1;for(let[e,t]of[[C,L],[w,L],[T,R.map(e=>e.light)]]){let n=e.getAttribute(`aDim`);t.forEach((e,t)=>{n.array[t]=i(e)}),n.needsUpdate=!0}return!0}function Ee(e){let t=0,n=0,r=[0,0,0],i=X?new Set(X.split(`\0`)):null;for(let a of L){let o=a.strength*(i&&!i.has(a.id)?S:1),s=re(a.order,e,L.length)*o;t+=a.strength,n+=s;let c=D(a.color);r[0]+=c.r*s,r[1]+=c.g*s,r[2]+=c.b*s}let a=t?n/t:1,o=Math.max(1e-4,n);return g.uniforms.uRoom.value=a,g.uniforms.uRoomTint.value.setRGB(r[0]/o,r[1]/o,r[2]/o),a}let De=0,Oe=null,ke=performance.now();function $(e){G=e,K=!1,q=e+25,J=!1,Y=!0}function Ae(e){q=Math.max(q,e+25),J=!1,Y=!0}function je(){if(Z||V)return;let e=Math.max(0,v-(xe()-ve)-.013);Z=setTimeout(()=>{Z=0,!V&&!J&&d()},e*1e3)}return{setDesign(e){if(V||!e?.mood)return!1;if(e.revisionKey===z)return!0;let t=z===null,n=(e.stonesKey??null)!==B;return z=e.revisionKey,B=e.stonesKey??null,F=e.mood,I=e.bounds??null,L=Array.isArray(e.lights)?e.lights:[],Se(),Ce(),we(),t||n?$(W):Ae(W),!0},setConfiguration(e){if(V)return!1;let t=Number(e?.strength);return h.uIntensity.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1,Y=!0,!0},frame({timeSeconds:e=0,playing:t=!1,reducedMotion:n=!1,interacting:r=!1,selectedIds:i=[],productYaw:a=0,productPivot:o=[0,0],viewport:s=null}={}){if(V)return!1;ve=xe(),De++,Oe??=performance.now(),Q=Number(s?.cssWidth)>0&&Number(s.cssWidth)<700;let c=H;H=t,U=n,W=e,ge=Array.isArray(i)?i:[];let l=Te(),u=Number.isFinite(arguments[0]?.wallSeconds)?arguments[0].wallSeconds:xe(),d=be!==null&&u-be>3&&!r&&!l;be=u,t&&!n&&(!c||d)&&$(e),G===null&&$(e),(r||l)&&(e-G>.25&&(K=!0),Ae(e),r&&(_e=e+1.6));let f=U||!H,p=f||K?1e4:e-G;m.uClock.value=p,Ee(p);let g=!f&&e<q,_=f?0:1-ee.smoothstep(e,q-3,q);g&&(ye=e),h.uTime.value=f?7.3:ye,h.uMotion.value=_,j.uniforms.uStir.value=Math.max(0,Math.min(1,(_e-e)/1.6));let v=-.35+a*.5;j.uniforms.uWind.value.set(Math.cos(v),Math.sin(v)),x.rotation.y=a;let[y,b]=Array.isArray(o)?o:[0,0],S=Math.cos(a),te=Math.sin(a);return x.position.set(y-(S*y+te*b),0,b-(-te*y+S*b)),P.visible=_>.002&&R.length>0,J=!g,Y=!1,g&&Q&&je(),!0},needsFrame(){return!V&&(Y||!J&&!Q)},reset(e=0){W=e,$(e)},getState(){let e=[0,0,0,0];for(let t of L)e[t.elementIndex]++;return{kind:`awakening`,element:F?.element??null,sign:F?.sign??null,lights:L.length,particles:R.length,elements:e,frames:De,createdAt:ke,firstFrameAt:Oe,solo:X?X.split(`\0`):[],room:+g.uniforms.uRoom.value.toFixed(3),clock:m.uClock.value,entranceSeconds:_.lead+m.uSpan.value+_.rise,motion:+h.uMotion.value.toFixed(3),settled:J,motionUntil:q,playing:H,reducedMotion:U,phone:Q,drawCalls:[b,M,N,P].filter(e=>e.visible&&(e===b||e.geometry.instanceCount>0)).length}},dispose(){if(!V){V=!0,Z&&clearTimeout(Z),f.parent?.remove(f);for(let e of[b,M,N,P])e.geometry.dispose(),e.material.dispose()}}}}var j=Object.freeze(Object.fromEntries(p.map((e,t)=>[e,t]))),M=.62,N=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255),P=e=>`#${e.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,`0`)).join(``)}`,F=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite),I=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)};function L(e){let[t,n,r]=N(e),i=Math.max(t,n,r),a=Math.min(t,n,r),o=.2126*t+.7152*n+.0722*r,s=i>0?(i-a)/i:0,c=I(.45,.8,o)*.85,l=I(.28,.45,o)*I(.06,.2,s)*.6,u=I(.12,.5,s)*I(.1,.32,i);return+Math.max(R,Math.min(1,Math.max(c,l,u))).toFixed(3)}var R=.015,z=.35;function B(e,t){let n=N(e),r=Math.max(...n),i=Math.min(...n),a=r>0?(r-i)/r:0,o=n.map(e=>e/Math.max(r,.04)),s=.2126*n[0]+.7152*n[1]+.0722*n[2],c=Math.min(t===`fire`?.55:.8,Math.max(a*1.7,s>.6?.75:0)),l=N(g[t]??g.air).map((e,t)=>e+(o[t]-e)*c),u=Math.max(...l),ee=.2126*n[0]+.7152*n[1]+.0722*n[2]>.62?.72:1;return P(l.map(e=>e/u*Math.max(M,Math.min(1,u))*ee))}function V(e){return e instanceof Map?e:new Map((e??[]).map(e=>[e.id,e]))}function H(e,t,n){if(!Array.isArray(n)||!n.length)return Object.freeze([]);let r=V(t),i=new Map;for(let e of n)e&&typeof e.id==`string`&&F(e.position)&&Number.isFinite(e.radius)&&e.radius>0&&i.set(e.id,e);let a=[];(e?.occurrences??[]).forEach((e,t)=>{let n=i.get(e?.id);if(!n)return;let o=r.get(e.componentId),s=m(o);s&&a.push(Object.freeze({id:e.id,family:s.family,name:s.name,element:s.element,elementIndex:j[s.element],label:d(s),color:B(s.color,s.element),stoneColor:s.color,position:Object.freeze([...n.position]),radius:n.radius,strength:+Math.min(1.6,Math.max(.55,f(o)/8)).toFixed(3),glow:L(s.color),strand:t,order:0}))});let o=a.map(e=>e.radius).sort((e,t)=>e-t),s=o[Math.floor(o.length/2)]??1,c=a.length>=30;return a.forEach((e,t)=>{let n=e.radius/s,r=n>=1.3?Math.min(1.5,n**1.5):c?z:1;a[t]=Object.freeze({...e,order:a.length>1?+(t/(a.length-1)).toFixed(4):0,focus:+r.toFixed(3),level:+(e.glow*r).toFixed(3)})}),Object.freeze(a)}var U=Object.freeze({camera:Object.freeze({mode:`manual`}),themes:Object.freeze([]),strength:1});function W(e,t={}){let n={...e??U,...t&&typeof t==`object`?t:{}};n.camera=Object.freeze({mode:`manual`}),n.themes=Object.freeze(Array.isArray(n.themes)?[...new Set(n.themes)]:[]);let r=Number(n.strength);return n.strength=Number.isFinite(r)?Math.min(1,Math.max(0,r)):1,Object.freeze(n)}function G(e=U){let t=W(e);return Object.freeze({get:()=>t,set(e,{replace:n=!1}={}){let r=n?W(e):W(t,e);return JSON.stringify(r)!==JSON.stringify(t)&&(t=r),t}})}var K=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite);function q(e){if(!e)return null;let{center:t,radius:n}=e;return!K(t)&&K(e.min)&&K(e.max)&&(t=e.min.map((t,n)=>(t+e.max[n])/2)),!Number.isFinite(n)&&K(e.min)&&K(e.max)&&(n=Math.hypot(...e.max.map((t,n)=>t-e.min[n]))/2),!K(t)||!Number.isFinite(n)||n<=0?null:{center:[...t],radius:n,floorY:Number.isFinite(e.floorY)?e.floorY:0}}function J(e,t,{worldBounds:n=null,anchors:r=null}={}){let i=h(e,t),a=q(n),o=H(e,t,r),s=o.map(e=>[e.id,e.color,e.elementIndex,...e.position.map(e=>+e.toFixed(3)),+e.radius.toFixed(3)]),c=JSON.stringify((e?.occurrences??[]).map(e=>[e?.id,e?.componentId]));return Object.freeze({mood:i,bounds:a,lights:o,stonesKey:c,revisionKey:JSON.stringify([i.key,a&&a.center.map(e=>+e.toFixed(4)),a&&+a.radius.toFixed(4),s])})}function Y(e){return he(e)}export{U as DEFAULT_CONFIGURATION,Y as createAtmosphereLayer,G as createAtmosphereSettingsStore,J as createAtmosphereSnapshot,h as deriveMood,W as patchConfiguration,H as stoneLights};