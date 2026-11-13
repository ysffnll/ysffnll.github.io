import{B as e,U as t,ar as n,pa as r,qt as i,ro as a,ta as o}from"./three.core-Dp-eO7LC.js";import{t as s}from"./mood-ICzQMdrG.js";var c=Object.freeze({fire:0,water:1,air:2,earth:3}),l=Object.freeze({inner:1.55,outer:2.25,extent:60}),u=`
  // Light pattern (gobo) at p, element e, loop phase t (radians). 0 = shade, 1 = light.
  float gobo(vec2 p, float e, float t) {
    float v;
    if (e < .5) {
      // Fire: low sun through linen blinds, slats drifting slowly sideways.
      float s = dot(p, normalize(vec2(.86, .5))) * 3.6 + sin(t) * .3;
      v = smoothstep(.04, .8, abs(fract(s) - .5) * 2.);
      v = mix(v, 1., .3);
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
`,d=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
`,f=`
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`,p=`
  uniform vec3 uTop, uLow, uFar;
  varying vec3 vDirection;
  ${d}
  void main() {
    float h = normalize(vDirection).y;
    // Below the horizon the far table, above it the room's soft gradient.
    vec3 colour = h < 0. ? uFar : mix(mix(uFar, uLow, smoothstep(0., .03, h)), uTop, smoothstep(.03, .7, h));
    colour += (hash(gl_FragCoord.xy) - .5) / 255. * 1.5;
    gl_FragColor = vec4(colour, 1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,m=`
  varying vec2 vFloor;
  uniform vec3 uCentre;
  uniform float uScale;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vFloor = (world.xz - uCentre.xz) / uScale;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,h=`
  uniform vec3 uNear, uFar;
  uniform float uInner, uOuter;
  varying vec2 vFloor;
  ${d}
  void main() {
    float r = length(vFloor);
    float alpha = smoothstep(uInner, uOuter, r);
    vec3 colour = mix(uNear, uFar, smoothstep(uOuter, 26., r));
    colour += (hash(gl_FragCoord.xy) - .5) / 255. * 1.5;
    gl_FragColor = vec4(colour, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,g=`
  uniform float uElement, uPhase, uPatternStrength;
  varying vec2 vFloor;
  ${u}
  void main() {
    vec2 p = vFloor;
    // A soft window of light falling from the left; the pattern is large and quiet, never a floor print.
    float spot = smoothstep(3.4, .4, length((p - vec2(-.7, -.2)) * vec2(.5, .8)));
    float light = gobo(p * .48 + vec2(.4, 0.), uElement, uPhase);
    float factor = .5 + (light - .66) * .15 * spot * uPatternStrength + .03 * (spot - .5);
    // Far away the pattern softens toward plain light.
    factor = mix(factor, .5, smoothstep(5., 18., length(p)));
    gl_FragColor = vec4(vec3(factor), 1.);
  }
`,_=e=>new t(e);function v(t={}){let{scene:s,registerNativeGroup:u}=t;if(!s?.isScene||typeof u!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let d=new i;d.name=`atmosphere-light-stone`;let v=new a,y=new o({name:`light-stone-sky`,vertexShader:f,fragmentShader:p,side:1,depthWrite:!1,fog:!1,uniforms:{uTop:{value:_(`#c9c6c0`)},uLow:{value:_(`#e8e5df`)},uFar:{value:_(`#e2ddd4`)}}}),b=new n(new r(1,48,24),y);b.name=`light-stone-sky`,b.renderOrder=-10,b.frustumCulled=!1;let x=new o({name:`light-stone-ground`,vertexShader:m,fragmentShader:h,transparent:!0,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{uNear:{value:_(`#ece8e1`)},uFar:{value:_(`#e2ddd4`)},uCentre:{value:v},uScale:{value:1},uInner:{value:l.inner},uOuter:{value:l.outer}}}),S=new n(new e(1,96),x);S.name=`light-stone-ground`,S.rotation.x=-Math.PI/2,S.renderOrder=1;let C=new o({name:`light-stone-light`,vertexShader:m,fragmentShader:g,transparent:!0,depthWrite:!1,fog:!1,blending:5,blendEquation:100,blendSrc:208,blendDst:202,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{uElement:{value:2},uPhase:{value:0},uPatternStrength:{value:1},uCentre:{value:v},uScale:{value:1}}}),w=new n(new e(1,96),C);w.name=`light-stone-light`,w.rotation.x=-Math.PI/2,w.renderOrder=2,d.add(b,S,w),s.add(d),u(d);let T=null,E=null,D=null,O=1,k=24,A=0,j=!1,M=!0,N=!1;function P(){if(!T)return;let e=c[T.element]??2;y.uniforms.uTop.value.set(T.palette.wallTop),y.uniforms.uLow.value.set(T.palette.wallLow),y.uniforms.uFar.value.set(T.palette.far),x.uniforms.uNear.value.set(T.palette.floor),x.uniforms.uFar.value.set(T.palette.far);let t=C.uniforms;t.uElement.value=e}function F(){let e=Math.max(.001,Number(E?.radius)||1),t=Array.isArray(E?.center)?E.center:[0,0,0],n=Number.isFinite(E?.floorY)?E.floorY:0;v.set(t[0],n,t[2]),b.scale.setScalar(e*l.extent*1.4),b.position.copy(v);for(let t of[S,w])t.scale.setScalar(e*l.extent);S.position.set(t[0],n+e*4e-4,t[2]),w.position.set(t[0],n+e*8e-4,t[2]),x.uniforms.uScale.value=e,C.uniforms.uScale.value=e}function I(e){k=e+24,j=!1,M=!0}return{setDesign(e){return N||!e?.mood?!1:(e.revisionKey===D||(D=e.revisionKey,T=e.mood,E=e.bounds??null,P(),F(),I(A)),!0)},setConfiguration(e){if(N)return!1;let t=Number(e?.strength);return O=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1,C.uniforms.uPatternStrength.value=O,M=!0,!0},frame({timeSeconds:e=0,playing:t=!1,reducedMotion:n=!1,interacting:r=!1}={}){if(N)return!1;A=e,r&&I(e);let i=t&&!n&&e<k;return C.uniforms.uPhase.value=n?.9:e%16/16*Math.PI*2,j=!i,M=!1,!0},needsFrame(){return!N&&(M||!j)},reset(e=0){A=e,I(e)},getState(){return{kind:`light-stone`,element:T?.element??null,sign:T?.sign??null,deep:!!T?.deep,settled:j,motionUntil:k,strength:O}},dispose(){if(!N){N=!0,d.parent?.remove(d);for(let e of[b,S,w])e.geometry.dispose(),e.material.dispose()}}}}var y=Object.freeze({camera:Object.freeze({mode:`manual`}),themes:Object.freeze([]),strength:1});function b(e,t={}){let n={...e??y,...t&&typeof t==`object`?t:{}};n.camera=Object.freeze({mode:`manual`}),n.themes=Object.freeze(Array.isArray(n.themes)?[...new Set(n.themes)]:[]);let r=Number(n.strength);return n.strength=Number.isFinite(r)?Math.min(1,Math.max(0,r)):1,Object.freeze(n)}function x(e=y){let t=b(e);return Object.freeze({get:()=>t,set(e,{replace:n=!1}={}){let r=n?b(e):b(t,e);return JSON.stringify(r)!==JSON.stringify(t)&&(t=r),t}})}var S=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite);function C(e){if(!e)return null;let{center:t,radius:n}=e;return!S(t)&&S(e.min)&&S(e.max)&&(t=e.min.map((t,n)=>(t+e.max[n])/2)),!Number.isFinite(n)&&S(e.min)&&S(e.max)&&(n=Math.hypot(...e.max.map((t,n)=>t-e.min[n]))/2),!S(t)||!Number.isFinite(n)||n<=0?null:{center:[...t],radius:n,floorY:Number.isFinite(e.floorY)?e.floorY:0}}function w(e,t,{worldBounds:n=null}={}){let r=s(e,t),i=C(n);return Object.freeze({mood:r,bounds:i,revisionKey:JSON.stringify([r.key,i&&i.center.map(e=>+e.toFixed(4)),i&&+i.radius.toFixed(4)])})}function T(e){return v(e)}export{y as DEFAULT_CONFIGURATION,T as createAtmosphereLayer,x as createAtmosphereSettingsStore,w as createAtmosphereSnapshot,s as deriveMood,b as patchConfiguration};