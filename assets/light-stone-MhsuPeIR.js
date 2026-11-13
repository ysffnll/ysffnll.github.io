import{B as e,U as t,ar as n,jr as r,pa as i,qt as a,ro as o,ta as s,tr as c}from"./three.core-Dp-eO7LC.js";import{t as l}from"./mood-DLjiHJzV.js";var u=Object.freeze({fire:0,water:1,air:2,earth:3}),d=Object.freeze({inner:1.55,outer:2.25,extent:60}),f=`
  // Light pattern (gobo) at p, element e, loop phase t (radians). 0 = shade, 1 = light.
  float gobo(vec2 p, float e, float t) {
    float v;
    if (e < .5) {
      // Fire: low sun through linen blinds, slats drifting slowly sideways.
      float s = dot(p, normalize(vec2(.86, .5))) * 3.6 + sin(t) * .3;
      v = smoothstep(.18, .62, abs(fract(s) - .5) * 2.);
      v = mix(v, 1., .22);
    } else if (e < 1.5) {
      // Water: light thrown off moving water, two layers drifting against each other.
      vec2 q = p * 3.1;
      for (int i = 0; i < 3; i++) q += .42 * sin(q.yx * 1.63 + vec2(t, -t * .8) + float(i) * 1.7);
      float c = abs(sin(q.x) * sin(q.y));
      v = .55 + .45 * pow(1. - c, 3.);
    } else if (e < 2.5) {
      // Air: sheer curtain folds swaying.
      float f = p.x * 4.2 + sin(p.y * 1.8 + t) * .9;
      v = .55 + .45 * (.5 + .5 * sin(f)) * (.6 + .4 * sin(p.y * 1.1 - t * .5));
    } else {
      // Earth: dappled shade of a branch, leaves swaying.
      vec2 q = p * 2.4;
      float n = sin(q.x * 1.7 + sin(q.y * 1.3 + t * .6) * 1.4) * sin(q.y * 1.9 + sin(q.x * 1.1 - t * .5) * 1.2);
      n += .5 * sin(q.x * 3.3 - q.y * 2.1 + t * .3);
      v = smoothstep(-.15, .55, n);
      v = mix(.22, 1., v);
    }
    return v;
  }
`,p=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`,m=`
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`,h=`
  uniform vec3 uTop, uLow, uFar;
  varying vec3 vDirection;
  ${p}
  void main() {
    float h = normalize(vDirection).y;
    // Below the horizon the far table, above it the room's soft gradient.
    vec3 colour = h < 0. ? uFar : mix(mix(uFar, uLow, smoothstep(0., .03, h)), uTop, smoothstep(.03, .7, h));
    colour += (hash(gl_FragCoord.xy) - .5) / 255. * 1.5;
    gl_FragColor = vec4(colour, 1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,g=`
  varying vec2 vFloor;
  uniform vec3 uCentre;
  uniform float uScale;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vFloor = (world.xz - uCentre.xz) / uScale;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,_=`
  uniform vec3 uNear, uFar;
  uniform float uInner, uOuter;
  varying vec2 vFloor;
  ${p}
  void main() {
    float r = length(vFloor);
    float alpha = smoothstep(uInner, uOuter, r);
    vec3 colour = mix(uNear, uFar, smoothstep(uOuter, 26., r));
    colour += (hash(gl_FragCoord.xy) - .5) / 255. * 1.5;
    gl_FragColor = vec4(colour, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,v=`
  varying vec4 vFar;
  void main() {
    // The far-plane point under this corner, in world space (homogeneous, interpolated linearly).
    vFar = inverse(projectionMatrix * viewMatrix) * vec4(position.xy, 1., 1.);
    gl_Position = vec4(position.xy, 0., 1.);
  }
`,y=`
  uniform float uElement, uPhase, uPatternStrength, uFloorY, uScale, uAngle, uStretch, uContrast;
  uniform vec3 uCentre, uTint;
  varying vec4 vFar;
  ${f}
  void main() {
    vec3 far = vFar.xyz / vFar.w;
    vec3 direction = normalize(far - cameraPosition);
    if (direction.y > -1e-4) { gl_FragColor = vec4(vec3(.5), 1.); return; }
    vec3 hit = cameraPosition + direction * ((uFloorY - cameraPosition.y) / direction.y);
    vec2 p = (hit.xz - uCentre.xz) / uScale;
    // The season sets where the light comes from and how long the low sun draws it.
    float c = cos(uAngle), s = sin(uAngle);
    vec2 q = vec2(c * p.x + s * p.y, -s * p.x + c * p.y);
    q.x /= uStretch;
    // A soft window of light; large and quiet, never a floor print.
    // Centred a little off the piece so the light crosses it, whatever the season's angle.
    float spot = smoothstep(4.2, .7, length((q - vec2(-.3, 0.)) * vec2(.45, .72)));
    float light = gobo(q * .62 + vec2(.4, 0.), uElement, uPhase);
    float amount = (light - .66) * .3 * uContrast * spot * uPatternStrength;
    vec3 tint = uTint / max(max(uTint.r, uTint.g), max(uTint.b, 1e-3));
    vec3 factor = vec3(.5) + amount * mix(vec3(1.), tint, amount > 0. ? .7 : .2) + .03 * (spot - .5);
    factor *= mix(vec3(1.), tint, .05 * spot * uPatternStrength);
    // Far away the pattern softens toward plain light.
    factor = mix(factor, vec3(.5), smoothstep(5., 18., length(p)));
    gl_FragColor = vec4(factor, 1.);
  }
`,b=e=>new t(e);function x(t={}){let{scene:l,registerNativeGroup:f}=t;if(!l?.isScene||typeof f!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let p=new a;p.name=`atmosphere-light-stone`;let x=new o,S=new s({name:`light-stone-sky`,vertexShader:m,fragmentShader:h,side:1,depthWrite:!1,fog:!1,uniforms:{uTop:{value:b(`#c9c6c0`)},uLow:{value:b(`#e8e5df`)},uFar:{value:b(`#e2ddd4`)}}}),C=new n(new i(1,48,24),S);C.name=`light-stone-sky`,C.renderOrder=-10,C.frustumCulled=!1;let w=new s({name:`light-stone-ground`,vertexShader:g,fragmentShader:_,transparent:!0,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{uNear:{value:b(`#ece8e1`)},uFar:{value:b(`#e2ddd4`)},uCentre:{value:x},uScale:{value:1},uInner:{value:d.inner},uOuter:{value:d.outer}}}),T=new n(new e(1,96),w);T.name=`light-stone-ground`,T.rotation.x=-Math.PI/2,T.renderOrder=1;let E=new s({name:`light-stone-light`,vertexShader:v,fragmentShader:y,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,blending:5,blendEquation:100,blendSrc:208,blendDst:202,uniforms:{uElement:{value:2},uPhase:{value:0},uPatternStrength:{value:1},uCentre:{value:x},uScale:{value:1},uFloorY:{value:0},uAngle:{value:0},uStretch:{value:1},uContrast:{value:1},uTint:{value:b(`#fff4e2`)}}}),D=new n(new r(2,2),E);D.name=`light-stone-light`,D.renderOrder=50,D.frustumCulled=!1,p.add(C,T,D),l.add(p),f(p);let O=null,k=null,A=null,j=1,M=24,N=0,P=!1,F=!0,I=!1;function L(){if(!O)return;let e=u[O.element]??2;S.uniforms.uTop.value.set(O.palette.wallTop),S.uniforms.uLow.value.set(O.palette.wallLow),S.uniforms.uFar.value.set(O.palette.far),w.uniforms.uNear.value.set(O.palette.floor),w.uniforms.uFar.value.set(O.palette.far);let t=E.uniforms;t.uElement.value=e,t.uAngle.value=c.degToRad(O.light?.angle??32),t.uStretch.value=O.light?.stretch??1,t.uContrast.value=O.light?.contrast??1,t.uTint.value.set(O.palette.light)}function R(){let e=Math.max(.001,Number(k?.radius)||1),t=Array.isArray(k?.center)?k.center:[0,0,0],n=Number.isFinite(k?.floorY)?k.floorY:0;x.set(t[0],n,t[2]),C.scale.setScalar(e*d.extent*1.4),C.position.copy(x),T.scale.setScalar(e*d.extent),T.position.set(t[0],n+e*4e-4,t[2]),E.uniforms.uFloorY.value=n,w.uniforms.uScale.value=e,E.uniforms.uScale.value=e}function z(e){M=e+24,P=!1,F=!0}return{setDesign(e){return I||!e?.mood?!1:(e.revisionKey===A||(A=e.revisionKey,O=e.mood,k=e.bounds??null,L(),R(),z(N)),!0)},setConfiguration(e){if(I)return!1;let t=Number(e?.strength);return j=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1,E.uniforms.uPatternStrength.value=j,F=!0,!0},frame({timeSeconds:e=0,playing:t=!1,reducedMotion:n=!1,interacting:r=!1}={}){if(I)return!1;N=e,r&&z(e);let i=t&&!n&&e<M;return E.uniforms.uPhase.value=n?.9:e%16/16*Math.PI*2,P=!i,F=!1,!0},needsFrame(){return!I&&(F||!P)},reset(e=0){N=e,z(e)},getState(){return{kind:`light-stone`,element:O?.element??null,sign:O?.sign??null,deep:!!O?.deep,settled:P,motionUntil:M,strength:j}},dispose(){if(!I){I=!0,p.parent?.remove(p);for(let e of[C,T,D])e.geometry.dispose(),e.material.dispose()}}}}var S=Object.freeze({camera:Object.freeze({mode:`manual`}),themes:Object.freeze([]),strength:1});function C(e,t={}){let n={...e??S,...t&&typeof t==`object`?t:{}};n.camera=Object.freeze({mode:`manual`}),n.themes=Object.freeze(Array.isArray(n.themes)?[...new Set(n.themes)]:[]);let r=Number(n.strength);return n.strength=Number.isFinite(r)?Math.min(1,Math.max(0,r)):1,Object.freeze(n)}function w(e=S){let t=C(e);return Object.freeze({get:()=>t,set(e,{replace:n=!1}={}){let r=n?C(e):C(t,e);return JSON.stringify(r)!==JSON.stringify(t)&&(t=r),t}})}var T=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite);function E(e){if(!e)return null;let{center:t,radius:n}=e;return!T(t)&&T(e.min)&&T(e.max)&&(t=e.min.map((t,n)=>(t+e.max[n])/2)),!Number.isFinite(n)&&T(e.min)&&T(e.max)&&(n=Math.hypot(...e.max.map((t,n)=>t-e.min[n]))/2),!T(t)||!Number.isFinite(n)||n<=0?null:{center:[...t],radius:n,floorY:Number.isFinite(e.floorY)?e.floorY:0}}function D(e,t,{worldBounds:n=null}={}){let r=l(e,t),i=E(n);return Object.freeze({mood:r,bounds:i,revisionKey:JSON.stringify([r.key,i&&i.center.map(e=>+e.toFixed(4)),i&&+i.radius.toFixed(4)])})}function O(e){return x(e)}export{S as DEFAULT_CONFIGURATION,O as createAtmosphereLayer,w as createAtmosphereSettingsStore,D as createAtmosphereSnapshot,l as deriveMood,C as patchConfiguration};