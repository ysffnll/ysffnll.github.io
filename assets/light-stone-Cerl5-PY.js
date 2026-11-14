import{Dt as e,Lt as t,U as n,an as r,ar as i,in as a,no as o,pa as s,qt as c,ro as l,ta as u,tr as d}from"./three.core-Dp-eO7LC.js";import{n as f}from"./stone-profiles-BAwXKWP2.js";import{a as p,i as m,n as h,r as g,t as _}from"./mood-CipqlGo4.js";import{i as v}from"./studio-presets-GVBoR9K_.js";var y=Object.freeze({lead:.45,perStone:.045,base:1.6,max:3.5,rise:.7}),b=1/30,ee=.03,x=1.25,S=.05,C=Object.freeze({fire:Object.freeze({colour:`#ffb27a`,character:0}),water:Object.freeze({colour:`#cfe6ff`,character:1}),air:Object.freeze({colour:`#eef0ff`,character:2}),earth:Object.freeze({colour:`#ffc98a`,character:3})});function te(e=v.atmosphere?.key){let t=(Number(e?.azimuth)||0)*Math.PI/180,n=(Number(e?.elevation)||45)*Math.PI/180;return Object.freeze({shadow:Object.freeze([-Math.sin(t),-Math.cos(t)]),elevation:n,cot:Math.cos(n)/Math.sin(n),sec:1/Math.sin(n)})}function ne(e){return Math.min(y.max-y.lead,y.base+y.perStone*Math.max(0,e-1)*.5)}function re(e,t,n){let r=(t-(y.lead+e*ne(n)))/y.rise;return r<=0?0:r>=1?1:r*r*(3-2*r)}var w=`
  uniform float uClock, uLead, uSpan, uRise;
  float wakeOf(float order) { return smoothstep(0., 1., clamp((uClock - uLead - order * uSpan) / uRise, 0., 1.)); }
  float pulseOf(float order) { float d = (uClock - uLead - order * uSpan - uRise * .55) / (uRise * .5); return exp(-d * d); }
`,T=`
  float h21(vec2 p) { vec3 q = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
`,ie=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,ae=`
  uniform vec3 uTop, uHorizon, uTable, uFar, uLamp, uCentre;
  uniform vec2 uShadow;
  uniform float uRoom, uScale, uFloorY, uBase, uLampLevel;
  varying vec3 vWorld;
  ${T}
  void main() {
    vec3 direction = normalize(vWorld - cameraPosition);
    vec3 colour;
    // The room starts near black (uBase) and rises as the lamp's beam sweeps the strand (uRoom).
    float lift = uBase + (1. - uBase) * uRoom;
    if (direction.y < -1e-4) {
      vec3 hit = cameraPosition + direction * ((uFloorY - cameraPosition.y) / direction.y);
      vec2 p = (hit.xz - uCentre.xz) / uScale;
      // The lamp's light on the table: a broad, soft-edged pool around the piece, reaching further on the side
      // where the marks fall (the lower part of the frame is lit table, never a void).
      vec2 q = vec2(dot(p, uShadow), dot(p, vec2(-uShadow.y, uShadow.x)));
      q.x = q.x > 0. ? q.x * .62 : q.x * .95;
      float pool = exp(-dot(q, q) * .42);
      float r = length(p);
      vec3 table = mix(uTable, uFar, smoothstep(.9, 3.8, r)) * lift;
      // (Version 3 tried a caustic play in the water lamp's pool: on a phone still it read as a smudge; the
      // water lives in the marks' waver instead.)
      table += uLamp * uLampLevel * pool * uRoom;
      float far = smoothstep(.0, .22, -direction.y);
      colour = mix(uHorizon * lift, table, far);
    } else {
      colour = mix(uHorizon, uTop, smoothstep(0., .55, direction.y)) * lift;
      // A faint warmth low on the far side, where the lamp stands (no flare, no disc).
      vec2 flat2 = normalize(direction.xz + 1e-5);
      float toward = max(0., -dot(flat2, uShadow));
      colour += uLamp * uLampLevel * .22 * pow(toward, 6.) * (1. - smoothstep(0., .3, direction.y)) * uRoom;
    }
    colour += (h21(gl_FragCoord.xy) - .5) / 255. * 1.2;
    gl_FragColor = vec4(colour, 1.);
    #include <colorspace_fragment>
  }
`,oe=`
  
  attribute vec3 aCentre;
  attribute vec3 aColour;
  attribute float aRadius, aOptic, aClarity, aOrder, aSeed, aFocus, aDim;

  uniform vec2 uShadow;
  uniform float uCot, uSec, uFloorY, uDrift;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vOptic, vClarity, vLight, vShade, vCentre, vSeed;
  ${w}
  void main() {
    // The part's place on the turned table (the stage turns the piece on its pivot); the lamp stays put.
    vec4 world = modelMatrix * vec4(aCentre, 1.);
    float h = max(world.y - uFloorY, aRadius * .5) / aRadius;
    // Air: the lamp drifts a little, as if a curtain moved (a few pixels and back).
    vec2 s = vec2(uShadow.x * cos(uDrift) - uShadow.y * sin(uDrift), uShadow.x * sin(uDrift) + uShadow.y * cos(uDrift));
    vec2 n = vec2(-s.y, s.x);
    float centre = h * uCot;
    // The quad covers the shadow and its penumbra.
    float near = centre - uSec - .35, far = centre + uSec + .7;
    float along = mix(near, far, position.x * .5 + .5), across = position.z * 1.75;
    vLocal = vec2(along, across);
    vec3 at = vec3(world.x, uFloorY + .002, world.z);
    at.xz += (s * along + n * across) * aRadius;
    vColour = aColour; vOptic = aOptic; vClarity = aClarity; vCentre = centre; vSeed = aSeed;
    float awake = wakeOf(aOrder);
    float chosen = aDim > 1.01 ? 1. : 0., others = aDim < .99 ? 1. : 0.;
    vLight = aDim * aFocus * (awake + .8 * pulseOf(aOrder));
    // A shadow is not a light: others keep their shadows (quieter) while one stone is soloed.
    vShade = awake * (others > .5 ? .55 : 1.) * min(1.2, .8 + .2 * aFocus);
    gl_Position = projectionMatrix * viewMatrix * vec4(at, 1.);
  }
`,se=`
  uniform vec3 uLamp;
  uniform float uSec, uTime, uMotion, uIntensity, uCharacter, uBreath, uLampLevel;
  varying vec2 vLocal;
  varying vec3 vColour;
  varying float vOptic, vClarity, vLight, vShade, vCentre, vSeed;
  void main() {
    if (vLight < .002 && vShade < .002) discard;
    float x = vLocal.x, y = vLocal.y, t = uTime + vSeed * 13.;
    // Water: the light arrives through water; the whole mark wavers with a fine ripple.
    if (uCharacter > .5 && uCharacter < 1.5) {
      x += .07 * sin(y * 3.3 + t * 1.6) * uMotion;
      y += .05 * sin(x * 2.4 - t * 1.25) * uMotion;
    }
    float e = length(vec2((x - vCentre) / uSec, y));
    // A hard lamp: the penumbra is a few pixels near the part and widens a little with distance.
    float w = .035 + .024 * max(x, 0.);
    float inside = 1. - smoothstep(1. - w, 1. + w, e);
    // The lamp's light on the table here (the room's pool level); every mark is measured against it.
    vec3 lamp = uLamp * uLampLevel * uBreath;
    float shade;
    vec3 light = vec3(0.);
    if (vOptic < .5) {
      // A translucent stone: a coloured shadow, lit from within by the light that passes through, fading to a
      // darker ring at its edge (rays at the rim are bent away) ...
      shade = inside * mix(.78, .58, vClarity);
      float fill = inside * (1. - smoothstep(.3, .9, e));
      light += vColour * lamp * fill * (.12 + .38 * vClarity);
      // ... and the caustic: a small, very bright, sharply edged spot in the stone's colour in the far half,
      // stretched by the low lamp, flat like light on a surface and white-hot where the light is most focused
      // (a glass marble in low sunlight).
      // No two stones focus alike (their size, cut and inclusions): each core has its own size, place, tilt and
      // strength, drawn once from the stone's seed.
      vec4 j = fract(vSeed * vec4(7.13, 3.71, 5.37, 11.3));
      float size = .85 + .3 * j.x, tilt = (j.w - .5) * .5;
      vec2 q = vec2(x - vCentre - uSec * (.38 + .12 * (j.y - .5)), y - .14 * (j.z - .5));
      q = mat2(cos(tilt), sin(tilt), -sin(tilt), cos(tilt)) * q;
      q /= vec2(uSec * .27 * size * (.85 + .3 * j.z), .27 * size);
      float core = 1. - smoothstep(.82, 1., length(q));
      vec2 k = q - vec2(.22, 0.);
      float hot = exp(-dot(k, k) * 5.5) * core * (.75 + .5 * j.y);
      float shimmer = 1.;
      if (uCharacter < .5) shimmer = 1. + .16 * sin(t * 7.3 + sin(t * 2.1) * 2.) * uMotion;
      else if (uCharacter < 1.5) shimmer = 1. + .22 * sin(q.x * 4. + q.y * 3. - t * 2.2) * uMotion;
      // The focused light keeps the stone's own hue (the lamp's tint barely shows in it).
      vec3 focused = uLampLevel * uBreath * mix(uLamp, vec3(1.), .65);
      light += mix(vColour, vec3(1.), .5 * hot) * focused * (core * ${9 .toFixed(1)} + hot * 8.) * vClarity * shimmer;
    } else {
      // An opaque stone or a metallic part: a clean dark shadow. (Version 3 first drew a thin warm rim on the
      // opaque shadows and a reflected glint on the lamp side of metal; with the lamp behind the piece the part
      // itself hides that side, so both only peeked out as an orange outline around the shadows: removed.)
      shade = inside * (vOptic < 1.5 ? .88 : .8);
    }
    gl_FragColor = vec4(light * vLight * uIntensity, 1. - shade * vShade * uIntensity);
    #include <colorspace_fragment>
  }
`,ce=`
  attribute vec3 aCentre;
  attribute vec3 aColour;
  attribute float aRadius, aOrder, aSeed, aDim, aKind;
  uniform float uTime, uFloorY, uStir;
  varying vec2 vLocal;
  varying float vAlpha, vKind;
  ${w}
  float rand(float n) { return fract(sin(n * 91.345) * 47453.21); }
  void main() {
    vec4 centre = modelMatrix * vec4(aCentre, 1.);
    float speed = 1. + uStir * .8;
    vLocal = position.xy; vKind = aKind;
    float awake = wakeOf(aOrder) * min(aDim, 1.);
    vec3 at = centre.xyz;
    float size;
    if (aKind < .5) {
      // Fire: a spark rising from the stone, swaying, fading (the entrance only).
      float life = 2.1 + rand(aSeed) * .9, phase = fract(uTime * speed / life + aSeed);
      at += vec3(sin(phase * 6. + aSeed * 30.) * aRadius * .35, aRadius * (.8 + phase * 4.2), cos(phase * 5. + aSeed * 20.) * aRadius * .3);
      size = aRadius * (.07 + .045 * (1. - phase));
      vAlpha = awake * sin(3.14159 * phase) * (.7 + .3 * sin(uTime * 23. + aSeed * 50.));
    } else {
      // Earth: a mote of dust hanging in the beam above the piece, drifting very slowly, catching the light.
      float angle = aSeed * 40.;
      at = vec3(centre.x, uFloorY, centre.z) + vec3(cos(angle), 0., sin(angle)) * aRadius * (1. + rand(aSeed) * 2.)
        + vec3(sin(uTime * .11 + aSeed * 9.) * aRadius * .5, aRadius * (1.4 + 3. * rand(aSeed * 3.1) + .3 * sin(uTime * .07 + aSeed * 5.)), 0.);
      size = aRadius * .045;
      vAlpha = awake * (.55 + .45 * sin(uTime * .9 + aSeed * 70.));
    }
    vec4 view = viewMatrix * vec4(at, 1.);
    view.xy += position.xy * size;
    gl_Position = projectionMatrix * view;
  }
`,le=`
  uniform vec3 uLamp;
  uniform float uMotion, uIntensity, uSpark;
  varying vec2 vLocal;
  varying float vAlpha, vKind;
  void main() {
    float a = vAlpha * uMotion * (vKind < .5 ? uSpark : 1.);
    if (a < .003) discard;
    float r = length(vLocal);
    if (r > 1.) discard;
    float shape = exp(-r * r * 6.);
    vec3 colour = vKind < .5 ? vec3(1., .78, .5) : normalize(uLamp + 1e-4) * .9;
    gl_FragColor = vec4(colour * shape * a * uIntensity * (vKind < .5 ? 1. : .55), 1.);
    #include <colorspace_fragment>
  }
`,ue=Object.freeze({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,fog:!1,toneMapped:!1}),de=Object.freeze({...ue,blending:5,blendEquation:100,blendSrc:201,blendDst:204,blendSrcAlpha:200,blendDstAlpha:201}),E=e=>new n(e);function fe(e){let n=new r,i=e?[-1,0,-1,1,0,-1,1,0,1,-1,0,1]:[-1,-1,0,1,-1,0,1,1,0,-1,1,0];return n.setAttribute(`position`,new t(i,3)),n.setIndex(e?[0,2,1,0,3,2]:[0,1,2,0,2,3]),n.instanceCount=0,n}var pe=Object.freeze({aCentre:3,aColour:3,aRadius:1,aOptic:1,aClarity:1,aOrder:1,aSeed:1,aFocus:1,aDim:1}),me=Object.freeze({aCentre:3,aColour:3,aRadius:1,aOrder:1,aSeed:1,aDim:1,aKind:1});function he(t,n,r,i){for(let[i,o]of Object.entries(n)){let n=t.getAttribute(i);(!n||n.count<r)&&(n=new a(new Float32Array(Math.max(1,r)*o),o),n.setUsage(e),t.setAttribute(i,n))}for(let e=0;e<r;e++)i(e,(n,...r)=>{let i=t.getAttribute(n);i.array.set(r,e*i.itemSize)});for(let e of Object.keys(n))t.getAttribute(e).needsUpdate=!0;t.instanceCount=r}var ge=(e,t=0)=>{let n=2166136261^t;for(let t of String(e))n=Math.imul(n^t.charCodeAt(0),16777619);return(n>>>0)%1e4/1e4};function _e(e,t=48){let n=e.filter(e=>e.element===`fire`||e.element===`earth`);if(!n.length)return[];let r=e=>e.element===`fire`?0:1;if(n.length>=t/2){let e=Math.min(t,Math.ceil(n.length/2));return Array.from({length:e},(t,i)=>{let a=n[Math.floor((i+.5)*n.length/e)];return{mark:a,seed:ge(a.id,1),kind:r(a)}})}let i=[];for(let e=0;e<2&&i.length<t;e++)for(let a of n)i.length<t&&i.push({mark:a,seed:ge(a.id,e+1),kind:r(a)});return i}function D(e={}){let{scene:t,registerNativeGroup:n}=e,r=typeof e.requestFrame==`function`?e.requestFrame:()=>{};if(!t?.isScene||typeof n!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let a=new c;a.name=`atmosphere-awakening`;let f=new l,p=te(),m=new o(...p.shadow),h={uClock:{value:1e4},uLead:{value:y.lead},uSpan:{value:ne(1)},uRise:{value:y.rise}},g={uTime:{value:0},uMotion:{value:0},uFloorY:{value:0},uIntensity:{value:1},uLamp:{value:E(C.air.colour)}},_=new u({name:`awakening-room`,vertexShader:ie,fragmentShader:ae,side:1,depthWrite:!1,fog:!1,toneMapped:!1,uniforms:{uTop:{value:E(`#07070c`)},uHorizon:{value:E(`#211f2c`)},uTable:{value:E(`#1e1c28`)},uFar:{value:E(`#121119`)},uLamp:g.uLamp,uCentre:{value:f},uShadow:{value:m},uRoom:{value:1},uScale:{value:1},uFloorY:g.uFloorY,uBase:{value:.2},uLampLevel:{value:S}}}),v=new i(new s(1,48,24),_);v.name=`awakening-room`,v.renderOrder=-10,v.frustumCulled=!1;let w=new c;w.name=`awakening-marks-root`;let T=fe(!0),D=fe(!1),O=new u({name:`awakening-marks`,vertexShader:oe,fragmentShader:se,...de,uniforms:{...h,...g,uShadow:{value:m},uCot:{value:p.cot},uSec:{value:p.sec},uDrift:{value:0},uCharacter:{value:2},uBreath:{value:1},uLampLevel:{value:S}}}),k=new u({name:`awakening-particles`,vertexShader:ce,fragmentShader:le,...ue,uniforms:{...h,...g,uStir:{value:0},uSpark:{value:1}}}),A=new i(T,O),j=new i(D,k);A.name=`awakening-marks`,j.name=`awakening-particles`,A.renderOrder=3,j.renderOrder=5;for(let e of[A,j])e.frustumCulled=!1,w.add(e);a.add(v,w),t.add(a),n(a);let M=null,N=null,P=[],F=[],I=null,L=null,R=!1,z=2,B=!1,V=!1,H=0,U=null,W=!1,G=0,K=!0,q=!0,J=``,ve=[],ye=0,be=-1,Y=0,X=!1,xe=0,Z=null,Q=()=>(typeof performance<`u`?performance.now():Date.now())/1e3;function Se(){let e=M?.palette;if(!e)return;let t=_.uniforms;t.uTop.value.set(e.top),t.uHorizon.value.set(e.horizon),t.uTable.value.set(e.table),t.uFar.value.set(e.far);let n=C[M.element]??C.air;g.uLamp.value.set(n.colour),z=n.character,O.uniforms.uCharacter.value=z}function Ce(){let e=Math.max(.001,Number(N?.radius)||1),t=Array.isArray(N?.center)?N.center:[0,0,0],n=Number.isFinite(N?.floorY)?N.floorY:0;f.set(t[0],n,t[2]),v.scale.setScalar(e*80),v.position.copy(f),_.uniforms.uScale.value=e,g.uFloorY.value=n}function we(){he(T,pe,P.length,(e,t)=>{let n=P[e],r=E(n.color);t(`aCentre`,...n.position),t(`aColour`,r.r,r.g,r.b),t(`aRadius`,n.radius),t(`aOptic`,n.opticIndex),t(`aClarity`,n.clarity),t(`aOrder`,n.order),t(`aSeed`,ge(n.id)),t(`aFocus`,n.focus??1),t(`aDim`,1)}),F=_e(P),he(D,me,F.length,(e,t)=>{let n=F[e],r=E(n.mark.color);t(`aCentre`,...n.mark.position),t(`aColour`,r.r,r.g,r.b),t(`aRadius`,n.mark.radius),t(`aOrder`,n.mark.order),t(`aSeed`,n.seed),t(`aDim`,1),t(`aKind`,n.kind)}),h.uSpan.value=ne(P.length),Te(!0)}function Te(e=!1){let t=new Set(ve),n=P.filter(e=>e.stone&&t.has(e.id)).map(e=>e.id).join(`\0`);if(!e&&n===J)return!1;J=n;let r=n?new Set(n.split(`\0`)):null,i=e=>r?r.has(e.id)?x:ee:1;for(let[e,t]of[[T,P],[D,F.map(e=>e.mark)]]){let n=e.getAttribute(`aDim`);n&&(t.forEach((e,t)=>{n.array[t]=i(e)}),n.needsUpdate=!0)}return!0}function Ee(e){let t=0,n=0;for(let r of P)t+=r.strength,n+=re(r.order,e,P.length)*r.strength;let r=t?n/t:1;return _.uniforms.uRoom.value=r,r}let De=0,Oe=null,ke=performance.now();function $(e){U=e,W=!1,G=e+25,K=!1,q=!0}function Ae(e){G=Math.max(G,e+25),K=!1,q=!0}function je(){if(Y||R)return;let e=Math.max(0,b-(Q()-be)-.013);Y=setTimeout(()=>{Y=0,!R&&!K&&r()},e*1e3)}return{setDesign(e){if(R||!e?.mood)return!1;if(e.revisionKey===I)return!0;let t=I===null,n=(e.stonesKey??null)!==L;return I=e.revisionKey,L=e.stonesKey??null,M=e.mood,N=e.bounds??null,P=Array.isArray(e.marks)?e.marks:[],Se(),Ce(),we(),t||n?$(H):Ae(H),!0},setConfiguration(e){if(R)return!1;let t=Number(e?.strength);return g.uIntensity.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1,q=!0,!0},frame({timeSeconds:e=0,playing:t=!1,reducedMotion:n=!1,interacting:r=!1,selectedIds:i=[],productYaw:a=0,productPivot:o=[0,0],viewport:s=null}={}){if(R)return!1;be=Q(),De++,Oe??=performance.now(),X=Number(s?.cssWidth)>0&&Number(s.cssWidth)<700;let c=B;B=t,V=n,H=e,ve=Array.isArray(i)?i:[];let l=Te(),u=Number.isFinite(arguments[0]?.wallSeconds)?arguments[0].wallSeconds:Q(),f=Z!==null&&u-Z>3&&!r&&!l;Z=u,t&&!n&&(!c||f)&&$(e),U===null&&$(e),(r||l)&&(e-U>.25&&(W=!0),Ae(e),r&&(ye=e+1.6));let p=V||!B,m=p||W?1e4:e-U;h.uClock.value=m,Ee(m);let _=!p&&e<G,v=p?0:1-d.smoothstep(e,G-3,G);_&&(xe=e);let b=p?7.3:xe;g.uTime.value=b,g.uMotion.value=v,O.uniforms.uBreath.value=z===0?1+(.06*Math.sin(b*1.9+Math.sin(b*.7)*1.3)-.02)*v:1,O.uniforms.uDrift.value=z===2?.045*Math.sin(b*.35)*v:0,k.uniforms.uStir.value=Math.max(0,Math.min(1,(ye-e)/1.6));let ee=y.lead+h.uSpan.value+y.rise;k.uniforms.uSpark.value=1-d.smoothstep(m,ee,ee+2),w.rotation.y=a;let[x,S]=Array.isArray(o)?o:[0,0],C=Math.cos(a),te=Math.sin(a);return w.position.set(x-(C*x+te*S),0,S-(-te*x+C*S)),j.visible=v>.002&&F.length>0,K=!_,q=!1,_&&X&&je(),!0},needsFrame(){return!R&&(q||!K&&!X)},reset(e=0){H=e,$(e)},getState(){let e=[0,0,0,0],t=[0,0,0];for(let n of P)n.elementIndex>=0&&e[n.elementIndex]++,t[n.opticIndex]++;return{kind:`awakening`,version:3,element:M?.element??null,sign:M?.sign??null,marks:P.length,lights:P.filter(e=>e.stone).length,optics:t,particles:F.length,lamp:{shadow:[...p.shadow],elevationDeg:+(p.elevation*180/Math.PI).toFixed(2)},elements:e,frames:De,createdAt:ke,firstFrameAt:Oe,solo:J?J.split(`\0`):[],room:+_.uniforms.uRoom.value.toFixed(3),clock:h.uClock.value,entranceSeconds:y.lead+h.uSpan.value+y.rise,motion:+g.uMotion.value.toFixed(3),settled:K,motionUntil:G,playing:B,reducedMotion:V,phone:X,drawCalls:[v,A,j].filter(e=>e.visible&&(e===v||e.geometry.instanceCount>0)).length}},dispose(){if(!R){R=!0,Y&&clearTimeout(Y),a.parent?.remove(a);for(let e of[v,A,j])e.geometry.dispose(),e.material.dispose()}}}}var O=Object.freeze(Object.fromEntries(_.map((e,t)=>[e,t]))),k=Object.freeze([`translucent`,`opaque`,`metallic`]),A=Object.freeze(Object.fromEntries(k.map((e,t)=>[e,t]))),j=Object.freeze({garnet:[`translucent`,1],amethyst:[`translucent`,.95],moonstone:[`translucent`,.75],opal:[`translucent`,.6],"pink-opal":[`translucent`,.7],labradorite:[`translucent`,.35],pearl:[`translucent`,.3],turquoise:[`translucent`,.3],jade:[`translucent`,.6],malachite:[`translucent`,.35],unakite:[`translucent`,.35],lapis:[`translucent`,.4],"tiger-eye":[`translucent`,.55],"unnamed-green-stone":[`translucent`,.5],"authored-gem-study":[`translucent`,.8],onyx:[`opaque`,0],"black-tourmaline":[`opaque`,0],"opaque-dark-bead":[`opaque`,0],larvikite:[`opaque`,0],hematite:[`metallic`,0],"warm-metal":[`metallic`,0],"cool-metal":[`metallic`,0],copper:[`metallic`,0]}),M=.2,N=.3,P=.55,F=e=>[1,3,5].map(t=>parseInt(e.slice(t,t+2),16)/255),I=e=>`#${e.map(e=>Math.round(Math.min(1,Math.max(0,e))*255).toString(16).padStart(2,`0`)).join(``)}`,L=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite),R=([e,t,n])=>.2126*e+.7152*t+.0722*n;function z(e,t=`#808080`){let n=j[e];if(n)return{optic:n[0],clarity:n[1]};let r=F(t),i=Math.max(...r),a=i>0?(i-Math.min(...r))/i:0;return R(r)<M&&a<.25?{optic:`opaque`,clarity:0}:{optic:`translucent`,clarity:.5}}function B(e){let t=F(e),n=Math.max(...t),r=Math.min(...t),i=n>0?(n-r)/n:0,a=R(t),o=1+Math.min(1.6,i*3.2),s=t.map(e=>a+(e-a)*o),c=Math.max(...s,.001);return I(s.map(e=>Math.max(0,e)/c).map(e=>e*Math.max(P,Math.min(1,c*1.6))))}function V(e){return e instanceof Map?e:new Map((e??[]).map(e=>[e.id,e]))}function H(e){if(!e)return null;try{let t=f(e);return t.type!==`support`||j[t.family]?.[0]!==`metallic`?null:{family:t.family,color:t.palette.primary}}catch{return null}}function U(e,t,n){if(!Array.isArray(n)||!n.length)return Object.freeze([]);let r=V(t),i=new Map;for(let e of n)e&&typeof e.id==`string`&&L(e.position)&&Number.isFinite(e.radius)&&e.radius>0&&i.set(e.id,e);let a=[];(e?.occurrences??[]).forEach((e,t)=>{let n=i.get(e?.id);if(!n)return;let o=r.get(e.componentId),s=p(o),c=s?null:H(o);if(!s&&!c)return;let l=s?.family??c.family,u=s?.color??c.color,{optic:d,clarity:f}=z(l,u);a.push({id:e.id,family:l,name:s?.name??null,element:s?.element??null,elementIndex:s?O[s.element]:-1,label:s?m(s):``,stone:!!s,optic:d,opticIndex:A[d],clarity:f,color:B(u),stoneColor:u,position:Object.freeze([...n.position]),radius:n.radius,strength:+Math.min(1.6,Math.max(.55,g(o)/8)).toFixed(3),strand:t})});let o=a.filter(e=>e.stone).map(e=>e.radius).sort((e,t)=>e-t),s=o[Math.floor(o.length/2)]??1,c=o.length>=30;return Object.freeze(a.map((e,t)=>{let n=e.radius/s,r=e.stone&&n>=1.3?Math.min(1.5,n):c?N:1;return Object.freeze({...e,order:a.length>1?+(t/(a.length-1)).toFixed(4):0,focus:+r.toFixed(3)})}))}var W=Object.freeze({camera:Object.freeze({mode:`manual`}),themes:Object.freeze([]),strength:1});function G(e,t={}){let n={...e??W,...t&&typeof t==`object`?t:{}};n.camera=Object.freeze({mode:`manual`}),n.themes=Object.freeze(Array.isArray(n.themes)?[...new Set(n.themes)]:[]);let r=Number(n.strength);return n.strength=Number.isFinite(r)?Math.min(1,Math.max(0,r)):1,Object.freeze(n)}function K(e=W){let t=G(e);return Object.freeze({get:()=>t,set(e,{replace:n=!1}={}){let r=n?G(e):G(t,e);return JSON.stringify(r)!==JSON.stringify(t)&&(t=r),t}})}var q=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite);function J(e){if(!e)return null;let{center:t,radius:n}=e;return!q(t)&&q(e.min)&&q(e.max)&&(t=e.min.map((t,n)=>(t+e.max[n])/2)),!Number.isFinite(n)&&q(e.min)&&q(e.max)&&(n=Math.hypot(...e.max.map((t,n)=>t-e.min[n]))/2),!q(t)||!Number.isFinite(n)||n<=0?null:{center:[...t],radius:n,floorY:Number.isFinite(e.floorY)?e.floorY:0}}function ve(e,t,{worldBounds:n=null,anchors:r=null}={}){let i=h(e,t),a=J(n),o=U(e,t,r),s=o.map(e=>[e.id,e.color,e.opticIndex,e.elementIndex,...e.position.map(e=>+e.toFixed(3)),+e.radius.toFixed(3)]),c=JSON.stringify((e?.occurrences??[]).map(e=>[e?.id,e?.componentId]));return Object.freeze({mood:i,bounds:a,marks:o,stonesKey:c,revisionKey:JSON.stringify([i.key,a&&a.center.map(e=>+e.toFixed(4)),a&&+a.radius.toFixed(4),s])})}function ye(e){return D(e)}export{W as DEFAULT_CONFIGURATION,ye as createAtmosphereLayer,K as createAtmosphereSettingsStore,ve as createAtmosphereSnapshot,h as deriveMood,G as patchConfiguration,U as stoneMarks};