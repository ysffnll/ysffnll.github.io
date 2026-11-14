import{$r as e,B as t,Hn as n,Ja as r,Rn as i,U as a,V as o,Wi as s,ar as c,ft as l,ja as u,jr as d,no as f,pa as p,qt as m,ro as h,ta as g,tr as _}from"./three.core-Dp-eO7LC.js";import{t as v}from"./mood-DNpwxbiC.js";var y=Object.freeze({fire:Object.freeze({span:10,tile:!1,penumbra:.03}),water:Object.freeze({span:4.4,tile:!0,penumbra:.014}),air:Object.freeze({span:10,tile:!1,penumbra:.1}),earth:Object.freeze({span:9,tile:!1,penumbra:.02})});function b(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var x=e=>Math.min(1,Math.max(0,e)),S=(e,t,n)=>{let r=x((n-e)/(t-e));return r*r*(3-2*r)};function C(e,t){let n=[[.262,.383],[.405,.595],[.617,.738]],r=[.04,.96],i=[.268,.29];for(let a=0;a<t;a++){let o=(a+.5)/t,s=-1;for(let[e,t]of n)s=Math.max(s,Math.min(o-e,t-o));for(let n=0;n<t;n++){let o=(n+.5)/t,c=Math.min(o-r[0],r[1]-o,Math.max(i[0]-o,o-i[1]));e[(a*t+n)*4]=Math.round(255*x(.5+Math.min(s,c)*t))}}}function w(e,t){let n=[[.14,.4],[.31,.5],[.585,.54],[.77,.36],[.9,.44]];for(let r=0;r<t;r++){let i=(r+.5)/t;for(let a=0;a<t;a++){let o=(a+.5)/t,s=i+.014*Math.sin(Math.PI*2*(o*1.3+.17))+.006*Math.sin(Math.PI*2*(o*3.1+.4)),c=0;for(let[e,t]of n){let n=s-e,r=n<0?.016:.05;c+=t*Math.exp(-(n*n)/(r*r))}let l=1-.22*S(.25,.95,o),u=S(.02,.12,i)*S(.98,.88,i)*S(.01,.1,o);e[(r*t+a)*4]=Math.round(255*x(l*(1-c)*u))}}}function T(e,t){for(let[n,r,i]of[[0,7,11],[1,6,29]]){let a=b(i),o=new Float32Array(r*r*2);for(let e=0;e<r*r;e++)o[e*2]=.15+.7*a(),o[e*2+1]=.15+.7*a();let s=a()*6.28;for(let i=0;i<t;i++)for(let a=0;a<t;a++){let c=a/t,l=i/t,u=(c+.035*Math.sin(Math.PI*2*(l*2+.3)+s)+.02*Math.sin(Math.PI*2*(l*3-c)+1.1))*r,d=(l+.035*Math.sin(Math.PI*2*(c*2+.1)-s)+.02*Math.sin(Math.PI*2*(c*3+l)+2.3))*r,f=Math.floor(u),p=Math.floor(d),m=9,h=9;for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++){let n=f+t,i=p+e,a=((i%r+r)%r*r+(n%r+r)%r)*2,s=n+o[a]-u,c=i+o[a+1]-d,l=Math.sqrt(s*s+c*c);l<m?(h=m,m=l):l<h&&(h=l)}let g=1-S(0,.085,h-m);e[(i*t+a)*4+n]=Math.round(255*g*g)}}for(let n=0;n<t;n++)for(let r=0;r<t;r++){let i=r/t*Math.PI*2,a=n/t*Math.PI*2,o=.5+.22*Math.sin(i+1.3*Math.sin(a))+.18*Math.sin(2*a-i+.7)+.1*Math.sin(3*i+2*a);e[(n*t+r)*4+2]=Math.round(255*x(o))}}function E(e,t,n,r,i,a,o,s){let c=Math.cos(a),l=Math.sin(a),u=o/2,d=Math.ceil(u+2),f=Math.max(0,Math.floor(r-d)),p=Math.min(t-1,Math.ceil(r+d)),m=Math.max(0,Math.floor(i-d)),h=Math.min(t-1,Math.ceil(i+d));for(let a=m;a<=h;a++)for(let o=f;o<=p;o++){let d=o+.5-r,f=a+.5-i,p=(d*c+f*l)/u,m=-d*l+f*c;if(p<=-1||p>=1)continue;let h=x(.5+s/2*(1-p*p)**.8*(1-.22*p)-Math.abs(m));if(h<=0)continue;let g=(a*t+o)*4+n;e[g]=Math.min(e[g],Math.round(255*(1-h)))}}function D(e,t,n,r,i,a,o,s){let c=Math.max(0,Math.floor(Math.min(r,a)-2)),l=Math.min(t-1,Math.ceil(Math.max(r,a)+2)),u=Math.max(0,Math.floor(Math.min(i,o)-2)),d=Math.min(t-1,Math.ceil(Math.max(i,o)+2)),f=a-r,p=o-i,m=Math.max(1e-6,f*f+p*p);for(let a=u;a<=d;a++)for(let o=c;o<=l;o++){let c=x(((o+.5-r)*f+(a+.5-i)*p)/m),l=Math.hypot(o+.5-r-f*c,a+.5-i-p*c),u=x(.5+s/2-l);if(u<=0)continue;let d=(a*t+o)*4+n;e[d]=Math.min(e[d],Math.round(255*(1-u)))}}function O(e,t,n,r,i,{from:a,heading:o,length:s,leaves:c,leaf:l,bend:u=.25}){let d=t/n,f=e=>(e/n+.5)*t,p=a[0],m=a[1],h=o,g=s/c;for(let n=0;n<c;n++){let a=p+Math.cos(h)*g,o=m+Math.sin(h)*g;D(e,t,r,f(p),f(m),f(a),f(o),Math.max(1.3,l*.035*d));let s=n%2?1:-1,_=h+s*(.62+.3*i()),v=l*(.72+.36*i())*(n>c-3?.82:1);E(e,t,r,f(a+Math.cos(_)*v*.52),f(o+Math.sin(_)*v*.52),_,v*d,v*d*(.2+.07*i())),p=a,m=o,h+=u*(i()-.35)*.6}E(e,t,r,f(p+Math.cos(h)*l*.45),f(m+Math.sin(h)*l*.45),h,l*.9*d,l*.22*d)}function k(e,t,n){let r=b(73);for(let i of[{from:[-4.3,-2.3],heading:.42,length:3.5,leaves:9,leaf:.78},{from:[-3.9,-.2],heading:-.1,length:2.95,leaves:8,leaf:.7},{from:[-2.2,-4.2],heading:1.05,length:2.9,leaves:8,leaf:.74},{from:[1.2,4.3],heading:-1.75,length:2.7,leaves:7,leaf:.72},{from:[4.2,1.4],heading:3.5,length:2.5,leaves:7,leaf:.7},{from:[3.6,-3.4],heading:2.5,length:2.2,leaves:6,leaf:.7}])O(e,t,n,0,r,i);for(let i of[{from:[-4.4,1.6],heading:-.25,length:3.3,leaves:7,leaf:1.15},{from:[-1.2,4.4],heading:-1.2,length:2.6,leaves:6,leaf:1.1},{from:[4.4,-1.2],heading:2.9,length:3.1,leaves:7,leaf:1.15},{from:[.8,-4.4],heading:1.9,length:2.6,leaves:6,leaf:1.1},{from:[-4.2,-3.9],heading:.75,length:2.8,leaves:6,leaf:1.2},{from:[4.3,3.9],heading:-2.4,length:2.6,leaves:6,leaf:1.15}])O(e,t,n,1,r,i)}function ee(e,t=512){let n=y[e];if(!n)throw RangeError(`Unknown element ${e}`);let r=new Uint8Array(t*t*4).fill(255);if(e===`fire`)C(r,t);else if(e===`water`){for(let e=0;e<r.length;e+=4)r[e]=0,r[e+1]=0;T(r,t)}else e===`air`?w(r,t):k(r,t,n.span);return r}var A=Object.freeze({aries:{stars:[[.08,.44,1],[.56,.34,2],[.8,.52,1.5],[.88,.68,1]],lines:[[0,1],[1,2],[2,3]]},taurus:{stars:[[.52,.58,2],[.4,.66,1],[.47,.48,1],[.86,.14,1.5],[.92,.42,1],[.24,.74,1],[.08,.86,1]],lines:[[1,0],[0,4],[1,2],[2,3],[1,5],[5,6]]},gemini:{stars:[[.3,.1,2],[.56,.14,2],[.24,.44,1],[.14,.7,1],[.08,.84,1],[.6,.46,1],[.52,.68,1],[.44,.9,1.5]],lines:[[0,1],[0,2],[2,3],[3,4],[1,5],[5,6],[6,7]]},cancer:{stars:[[.5,.5,1.5],[.53,.34,1],[.58,.08,1],[.2,.84,1.5],[.84,.9,2]],lines:[[2,1],[1,0],[0,3],[0,4]]},leo:{stars:[[.3,.8,2],[.34,.58,1],[.44,.44,1.5],[.42,.26,1],[.28,.14,1],[.16,.22,1],[.94,.68,1.5],[.72,.42,1],[.72,.66,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[2,7],[7,6],[6,8],[8,0],[7,8]]},virgo:{stars:[[.08,.42,1],[.26,.47,1],[.4,.5,1.5],[.54,.34,1],[.64,.12,1],[.5,.68,1],[.5,.9,2],[.72,.54,1],[.9,.46,1]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[3,7],[7,8]]},libra:{stars:[[.3,.6,1.5],[.52,.14,2],[.78,.44,1],[.26,.92,1],[.84,.88,1]],lines:[[0,1],[1,2],[2,0],[0,3],[2,4]]},scorpius:{stars:[[.86,.08,1],[.92,.2,1],[.9,.34,1],[.78,.27,1],[.7,.33,2],[.64,.44,1],[.56,.6,1],[.52,.74,1],[.5,.86,1],[.38,.94,1],[.24,.9,1],[.14,.78,1],[.16,.66,1],[.26,.58,1.5]],lines:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]},sagittarius:{stars:[[.36,.52,1],[.38,.8,1.5],[.7,.74,1],[.62,.44,1],[.82,.36,2],[.88,.6,1],[.44,.24,1],[.18,.62,1]],lines:[[0,1],[1,2],[2,3],[3,0],[0,6],[6,3],[3,4],[4,5],[5,2],[0,7],[7,1]]},capricorn:{stars:[[.1,.14,1.5],[.16,.3,1.5],[.36,.76,1],[.44,.9,1],[.66,.72,1],[.8,.54,1],[.94,.38,2],[.82,.36,1],[.64,.35,1],[.42,.33,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1]]},aquarius:{stars:[[.04,.62,1],[.1,.5,1],[.24,.4,2],[.44,.24,2],[.58,.22,1],[.66,.18,1],[.76,.24,1],[.64,.08,1],[.52,.52,1],[.7,.6,1],[.82,.76,1],[.9,.92,1.5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[3,8],[8,9],[9,10],[10,11]]},pisces:{stars:[[.12,.9,1.5],[.16,.72,1],[.22,.52,1],[.27,.34,1],[.24,.18,1],[.36,.22,1],[.28,.84,1],[.4,.8,1],[.52,.74,1],[.63,.67,1],[.72,.6,1],[.8,.52,1],[.86,.42,1],[.94,.46,1],[.95,.58,1],[.88,.64,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,3],[0,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,11]]}});function j(e,t,n,r=512){let i=A[t];if(!e||!i)return!1;let a=r/512,o=r/2;e.save(),e.fillStyle=`#000`,e.fillRect(0,0,r,r),e.strokeStyle=`#fff`,e.fillStyle=`#fff`,e.lineCap=`round`,e.lineJoin=`round`,e.lineWidth=5*a,e.beginPath(),e.arc(o,o,236*a,0,Math.PI*2),e.stroke(),e.lineWidth=1.6*a,e.beginPath(),e.arc(o,o,220*a,0,Math.PI*2),e.stroke();let s=i.stars.map(e=>e[0]),c=i.stars.map(e=>e[1]),l=Math.min(...s),u=Math.max(...s),d=Math.min(...c),f=Math.max(...c),p=262*a,m=196*a,h=Math.min(p/Math.max(.05,u-l),m/Math.max(.05,f-d)),g=e=>[o+(e[0]-(l+u)/2)*h,206*a+(e[1]-(d+f)/2)*h];e.lineWidth=3.4*a;for(let[t,n]of i.lines){let[r,a]=g(i.stars[t]),[o,s]=g(i.stars[n]);e.beginPath(),e.moveTo(r,a),e.lineTo(o,s),e.stroke()}for(let t of i.stars){let[n,r]=g(t);e.beginPath(),e.arc(n,r,(5.5+3.5*(t[2]??1))*a,0,Math.PI*2),e.fill()}let _=String(n??``).toLocaleUpperCase(`tr`),v=58*a,y=()=>v*.2,b=()=>(e.font=`600 ${v}px Georgia, 'Times New Roman', serif`,[..._].reduce((t,n)=>t+e.measureText(n).width+y(),-y())),x=b();x>300*a&&(v*=300*a/x,x=b()),e.textBaseline=`alphabetic`,e.textAlign=`left`;let S=o-x/2;for(let t of _)e.fillText(t,S,396*a),S+=e.measureText(t).width+y();return e.lineWidth=2.4*a,e.beginPath(),e.moveTo(o-34*a,424*a),e.lineTo(o+34*a,424*a),e.stroke(),e.restore(),!0}function te(e,t,n=512){if(!A[e])return null;let r=[()=>typeof OffscreenCanvas==`function`?new OffscreenCanvas(n,n):null,()=>{if(typeof document>`u`)return null;let e=document.createElement(`canvas`);return e.width=e.height=n,e}];for(let i of r)try{let r=i(),a=r?.getContext(`2d`);if(a&&j(a,e,t,n))return r}catch{}return null}var ne=Object.freeze({fire:0,water:1,air:2,earth:3}),M=Object.freeze({inner:1.55,outer:2.25,extent:60}),re=.3,ie=Object.freeze({tall:Object.freeze([1.16,.3,.135]),wide:Object.freeze([.88,.52,.115])}),ae=Object.freeze([19,24]),N=`
  uniform sampler2D uGobo;
  uniform float uElement, uPhase, uAngle, uStretch, uContrast, uGoboOn, uSpan, uTexel, uPenumbra;
  // Where the sun travels across the table (the Scene's key light, seen from above).
  const vec2 TRAVEL = vec2(.82, -.57);
  // Light reaching the table at p (product radii): 1 = open sun. blur is the softest detail kept and
  // footprint the pixel's size on the table, both in product radii. The penumbra widens away from the window.
  float lightAt(vec2 p, float blur, float footprint) {
    if (uGoboOn < .5) return 1.;
    float c = cos(uAngle), s = sin(uAngle);
    vec2 q = vec2(c * p.x + s * p.y, -s * p.x + c * p.y);
    q.x /= uStretch;
    float soft = max(max(blur, footprint), uPenumbra * (1. + .45 * clamp(dot(p, TRAVEL) + 2.5, 0., 9.)));
    float lod = log2(max(soft / uTexel, 1.));
    vec2 uv = q / uSpan + .5;
    vec2 drift = vec2(sin(uPhase), cos(uPhase));
    float level;
    if (uElement < .5) {
      // Fire: one window; the piece lies in the broad middle bar, the mullion shadows cross beside it.
      float pane = textureLod(uGobo, uv + vec2(.03, .052) + drift.x * vec2(.0015, .0025), lod).r;
      level = mix(.8, 1.05, pane);
    } else if (uElement < 1.5) {
      // Water: two nets of thin filaments drifting against each other. Each shows only where its slow
      // field lets it, so the eye meets a few drifting threads of light, never a mesh.
      vec3 a = textureLod(uGobo, uv + drift * .02, lod).rgb;
      vec3 b = textureLod(uGobo, uv.yx * .73 + vec2(.37, .11) - drift.yx * .024, lod).rgb;
      float fa = a.r * smoothstep(.38, .72, b.b), fb = b.g * smoothstep(.42, .75, a.b);
      level = .975 + .2 * (fa + fb * .8) + .22 * fa * fb;
    } else if (uElement < 2.5) {
      // Air: a sheer curtain, swaying a little.
      float cloth = textureLod(uGobo, uv + vec2(0., .018) + drift.x * vec2(0., .006), lod).r;
      level = mix(.76, 1.04, cloth);
    } else {
      // Earth: a near branch (crisp) under a far one (blurred, lighter), open sun between.
      float near = textureLod(uGobo, uv + drift.x * vec2(.0025, .0015), lod).r;
      float far = textureLod(uGobo, uv + drift.y * vec2(-.004, .003), max(lod, 3.4)).g;
      level = mix(.64, 1.05, near * mix(.56, 1., far));
    }
    return 1. + (level - 1.) * uContrast;
  }
`,P=`
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  float h21(vec2 p) { vec3 q = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
  float vnoise(vec2 p) {
    vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(h21(i), h21(i + vec2(1., 0.)), f.x), mix(h21(i + vec2(0., 1.)), h21(i + vec2(1., 1.)), f.x), f.y);
  }
  float fbm(vec2 p) { float a = .5, s = 0.; for (int i = 0; i < 4; i++) { s += a * vnoise(p); p = p * 2.03 + 17.3; a *= .5; } return s / .9375; }
  vec2 turn(vec2 p, float a) { float c = cos(a), s = sin(a); return vec2(c * p.x - s * p.y, s * p.x + c * p.y); }
`,F=`
  float keep(float px, float wavelength) { return 1. - smoothstep(.22, .55, px / wavelength); }
  float materialAt(vec2 m, float e, float px) {
    float d;
    if (e < .5) {
      // Honed travertine, cut across its beds: long, slightly wavy bands of two or three tones,
      // fine lines along them and a few small pits in the darker beds.
      vec2 s = turn(m, .32);
      float t = s.y * 1.15 + fbm(vec2(s.x * .11, s.y * .3) + 3.1) * 1.7;
      float bed = vnoise(vec2(t, 7.3)) * .62 + vnoise(vec2(t * 2.9, 1.7)) * .38;
      float streak = vnoise(vec2(s.x * .55, t * 7.)) - .5;
      float cloud = fbm(m * .07 + 21.) - .5;
      d = cloud * .03 + (bed - .5) * .08 * keep(px, .34) + streak * .028 * keep(px, .14);
      float pore = smoothstep(.8, .9, vnoise(vec2(s.x * 3.6, t * 13.) + 5.)) * smoothstep(.52, .3, bed);
      d -= pore * .08 * keep(px, .075);
    } else if (e < 1.5) {
      // Pale honed marble: clouds and a few soft veins that wander and fade.
      // Veins run one way and wander (a bent phase, never closed rings); each fades in and out along its length.
      vec2 u = turn(m, .95) * .085, v = turn(m, .35) * .14;
      float cloud = fbm(m * .06 + 7.) - .5;
      float a = abs(fract(u.x + .62 * fbm(u * 2.1 + 5.) + .12 * fbm(u * 7. + 3.)) - .5);
      float b = abs(fract(v.x + .5 * fbm(v * 2.4 + 31.)) - .5);
      float vein = (1. - smoothstep(0., .014, a)) * .07 + (1. - smoothstep(0., .075, a)) * .028;
      float hair = (1. - smoothstep(0., .011, b)) * .045;
      d = cloud * .04 - vein * smoothstep(.3, .65, vnoise(u * 1.4 + 2.)) * keep(px, .25) - hair * smoothstep(.45, .7, vnoise(v * 1.7 + 8.)) * keep(px, .14);
    } else if (e < 2.5) {
      // Cotton paper: soft mottling, short fibres in two directions, a fine tooth.
      float mottle = fbm(m * .22 + 4.) - .5;
      vec2 a = turn(m, .52), b = turn(m, -1.08);
      float fibre = vnoise(vec2(a.x * 2.1, a.y * 17.)) + vnoise(vec2(b.x * 2.4, b.y * 19.) + 13.) - 1.;
      float tooth = vnoise(m * 15.) - .5;
      d = mottle * .035 + fibre * .04 * keep(px, .055) + tooth * .03 * keep(px, .066);
    } else {
      // Raw linen: a plain weave with uneven threads.
      vec2 l = turn(m, .14) * 14., cell = floor(l), f = fract(l) - .5;
      float over = mod(cell.x + cell.y, 2.);
      float thread = over > .5 ? 1. - 4. * f.x * f.x : 1. - 4. * f.y * f.y;
      float slub = over > .5 ? vnoise(vec2(cell.x * 7.3, l.y * .22)) : vnoise(vec2(l.x * .22, cell.y * 5.1) + 40.);
      float mottle = fbm(m * .3 + 2.) - .5;
      d = (thread - .62) * .066 * (.45 + .9 * slub) * keep(px, .071) + mottle * .04 + (slub - .5) * .03 * keep(px, .14);
    }
    return d;
  }
`,oe=`
  varying vec3 vDirection;
  void main() {
    vDirection = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
`,se=`
  uniform vec3 uTop, uLow, uFar;
  varying vec3 vDirection;
  ${P}
  void main() {
    float h = normalize(vDirection).y;
    // Below the horizon the far table, above it the room's soft gradient.
    vec3 colour = h < 0. ? uFar : mix(mix(uFar, uLow, smoothstep(0., .03, h)), uTop, smoothstep(.03, .7, h));
    colour += (hash(gl_FragCoord.xy) - .5) / 255. * 1.5;
    gl_FragColor = vec4(colour, 1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,ce=`
  varying vec2 vFloor, vWorld;
  uniform vec3 uCentre;
  uniform float uScale;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vFloor = (world.xz - uCentre.xz) / uScale;
    vWorld = world.xz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,le=`
  uniform vec3 uNear, uFar;
  uniform float uInner, uOuter;
  varying vec2 vFloor, vWorld;
  ${P}
  void main() {
    float r = length(vFloor);
    float alpha = smoothstep(uInner, uOuter, r);
    vec3 colour = mix(uNear, uFar, smoothstep(uOuter, 26., r));
    colour += (hash(gl_FragCoord.xy) - .5) / 255. * 1.5;
    gl_FragColor = vec4(colour, alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,ue=`
  uniform sampler2D uSeal;
  uniform float uPatternStrength, uMaterial, uSealOn, uSealRadius, uBroad;
  uniform vec2 uSealCentre, uSealRight, uSealUp;
  varying vec2 vFloor, vWorld;
  ${P}
  ${F}
  ${N}
  float sealAt(vec2 uv) { return step(abs(uv.x - .5), .5) * step(abs(uv.y - .5), .5) * texture2D(uSeal, uv).r; }
  void main() {
    float r = length(vFloor);
    float footprint = max(length(dFdx(vFloor)), length(dFdy(vFloor))) * 1.2;
    float px = max(length(dFdx(vWorld)), length(dFdy(vWorld)));
    float factor = 1. + materialAt(vWorld, uElement, px) * uMaterial;
    float crisp = lightAt(vFloor, 0., footprint) / lightAt(vFloor, uBroad, footprint);
    factor *= mix(1., clamp(crisp, .5, 1.7), uPatternStrength);
    if (uSealOn > .01) {
      vec2 local = (vFloor - uSealCentre) / uSealRadius;
      vec2 uv = vec2(dot(local, uSealRight), dot(local, uSealUp)) * .5 + .5;
      // Pressed in: the line is a little darker, its wall away from the light a little lighter.
      float line = sealAt(uv), wall = max(sealAt(uv + vec2(-.011, .011)) - line, 0.);
      factor *= 1. - uSealOn * (.15 * line - .1 * wall);
    }
    factor = mix(factor, 1., smoothstep(12., 34., r));
    gl_FragColor = vec4(vec3(.5 * factor), 1.);
  }
`,de=`
  varying vec4 vFar;
  void main() {
    // The far-plane point under this corner, in world space (homogeneous, interpolated linearly).
    vFar = inverse(projectionMatrix * viewMatrix) * vec4(position.xy, 1., 1.);
    gl_Position = vec4(position.xy, 0., 1.);
  }
`,fe=`
  uniform float uPatternStrength, uFloorY, uScale, uBroad;
  uniform vec3 uCentre, uTint;
  varying vec4 vFar;
  ${N}
  void main() {
    vec3 far = vFar.xyz / vFar.w;
    vec3 direction = normalize(far - cameraPosition);
    if (direction.y > -1e-4) { gl_FragColor = vec4(vec3(.5), 1.); return; }
    vec3 hit = cameraPosition + direction * ((uFloorY - cameraPosition.y) / direction.y);
    vec2 p = (hit.xz - uCentre.xz) / uScale;
    float footprint = min(max(length(dFdx(p)), length(dFdy(p))), 4.);
    float amount = (lightAt(p, uBroad, footprint) - 1.) * uPatternStrength;
    // Sun is a little warm, shade a little cool; never enough to recolour a stone.
    vec3 tint = uTint / max(max(uTint.r, uTint.g), max(uTint.b, 1e-3));
    float sun = clamp(1. + amount / .28, 0., 1.);
    vec3 factor = vec3(1. + amount) * mix(vec3(1.), mix(vec3(.972, .988, 1.022), mix(vec3(1.), tint, .14), sun), uPatternStrength);
    // A quiet pool of light around the piece; the table dims a little toward its far edge.
    float pool = smoothstep(5.2, .5, length((p - vec2(-.25, .1)) * vec2(.55, .62)));
    factor *= 1. + .07 * (pool - .62);
    factor = mix(factor, vec3(.985), smoothstep(6., 20., length(p)));
    gl_FragColor = vec4(.5 * factor, 1.);
  }
`,I=e=>new a(e),pe=Object.freeze({blending:5,blendEquation:100,blendSrc:208,blendDst:202});function L(a={}){let{scene:v,camera:b,registerNativeGroup:x}=a;if(!v?.isScene||typeof x!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let S=new m;S.name=`atmosphere-light-stone`;let C=new h,w=new l(new Uint8Array(1048576).fill(255),512,512,e,r);w.name=`light-stone-gobo`,w.generateMipmaps=!0,w.minFilter=n,w.magFilter=i,w.colorSpace=``,w.needsUpdate=!0;let T=new u;T.name=`light-stone-seal`,T.generateMipmaps=!0,T.minFilter=n,T.magFilter=i,T.colorSpace=``,T.anisotropy=8;let E=new Map,D={uGobo:{value:w},uElement:{value:2},uPhase:{value:0},uAngle:{value:0},uStretch:{value:1},uContrast:{value:1},uGoboOn:{value:0},uSpan:{value:10},uTexel:{value:10/512},uPenumbra:{value:.03},uPatternStrength:{value:1},uBroad:{value:re},uCentre:{value:C},uScale:{value:1}},O=new g({name:`light-stone-sky`,vertexShader:oe,fragmentShader:se,side:1,depthWrite:!1,fog:!1,uniforms:{uTop:{value:I(`#c9c6c0`)},uLow:{value:I(`#e8e5df`)},uFar:{value:I(`#e2ddd4`)}}}),k=new c(new p(1,48,24),O);k.name=`light-stone-sky`,k.renderOrder=-10,k.frustumCulled=!1;let A=new g({name:`light-stone-ground`,vertexShader:ce,fragmentShader:le,transparent:!0,depthWrite:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,uniforms:{uNear:{value:I(`#ece8e1`)},uFar:{value:I(`#e2ddd4`)},uCentre:{value:C},uScale:D.uScale,uInner:{value:M.inner},uOuter:{value:M.outer}}}),j=new t(1,96),N=new c(j,A);N.name=`light-stone-ground`,N.rotation.x=-Math.PI/2,N.renderOrder=1;let P=new g({name:`light-stone-surface`,vertexShader:ce,fragmentShader:ue,transparent:!0,depthWrite:!1,fog:!1,...pe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{...D,uSeal:{value:T},uMaterial:{value:1},uSealOn:{value:0},uSealRadius:{value:.27},uSealCentre:{value:new f(1,1.5)},uSealRight:{value:new f(1,0)},uSealUp:{value:new f(0,-1)}}}),F=new c(j,P);F.name=`light-stone-surface`,F.rotation.x=-Math.PI/2,F.renderOrder=2;let L=new g({name:`light-stone-light`,vertexShader:de,fragmentShader:fe,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1,...pe,uniforms:{...D,uFloorY:{value:0},uTint:{value:I(`#fff4e2`)}}}),R=new c(new d(2,2),L);R.name=`light-stone-light`,R.renderOrder=50,R.frustumCulled=!1,S.add(k,N,F,R),v.add(S),x(S);let z=null,B=null,V=null,H=null,U=!0,W=null,G=1,K=24,q=0,J=!1,Y=!0,X=!1,Z=new f(.31,.95),Q=new f(.95,-.31);function me(e){let t=y[e];if(!t){D.uGoboOn.value=0;return}let n=E.get(e);n||(n=ee(e,512),E.set(e,n)),w.image.data.set(n),w.wrapS=w.wrapT=t.tile?s:o,w.needsUpdate=!0,D.uSpan.value=t.span,D.uTexel.value=t.span/512,D.uPenumbra.value=t.penumbra*(z?.light?.softness??1),D.uGoboOn.value=1}function he(){let e=z?.sign?`${z.sign}:${z.seal??``}`:null;if(e!==H){H=e;let t=e?te(z.sign,z.seal):null;T.image=t,t&&(T.needsUpdate=!0)}ge()}function ge(){let e=U&&T.image?1:0;if(e&&b?.isCamera){let t=b.position.y-C.y,n=Math.hypot(b.position.x-C.x,b.position.z-C.z),r=_.radToDeg(Math.atan2(t,Math.max(n,1e-6)));e=_.smoothstep(r,ae[0],ae[1])}P.uniforms.uSealOn.value=e}function _e(){W=b?.aspect>1.05?`wide`:`tall`;let[e,t,n]=ie[W],r=P.uniforms;r.uSealCentre.value.set(Z.x*e+Q.x*t,Z.y*e+Q.y*t),r.uSealRight.value.copy(Q),r.uSealUp.value.set(-Z.x,-Z.y),r.uSealRadius.value=n}function ve(){if(!z)return;let e=ne[z.element]??2;O.uniforms.uTop.value.set(z.palette.wallTop),O.uniforms.uLow.value.set(z.palette.wallLow),O.uniforms.uFar.value.set(z.palette.far),A.uniforms.uNear.value.set(z.palette.floor),A.uniforms.uFar.value.set(z.palette.far),D.uElement.value=e,D.uAngle.value=_.degToRad(z.light?.angle??32),D.uStretch.value=z.light?.stretch??1,D.uContrast.value=z.light?.contrast??1,L.uniforms.uTint.value.set(z.palette.light),P.uniforms.uMaterial.value=z.deep?.8:1,me(z.element in ne?z.element:`air`),he()}function ye(){let e=Math.max(.001,Number(B?.radius)||1),t=Array.isArray(B?.center)?B.center:[0,0,0],n=Number.isFinite(B?.floorY)?B.floorY:0;if(C.set(t[0],n,t[2]),k.scale.setScalar(e*M.extent*1.4),k.position.copy(C),N.scale.setScalar(e*M.extent),N.position.set(t[0],n+e*4e-4,t[2]),F.scale.copy(N.scale),F.position.copy(N.position),L.uniforms.uFloorY.value=n,D.uScale.value=e,b?.isCamera){let n=b.position.x-t[0],r=b.position.z-t[2],i=Math.hypot(n,r);i>e*.2&&(Z.set(n/i,r/i),Q.set(Z.y,-Z.x))}_e()}function $(e){K=e+24,J=!1,Y=!0}return{setDesign(e){return X||!e?.mood?!1:(e.revisionKey===V||(V=e.revisionKey,z=e.mood,B=e.bounds??null,ve(),ye(),$(q)),!0)},setConfiguration(e){if(X)return!1;let t=Number(e?.strength);return G=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1,D.uPatternStrength.value=G,U=e?.seal!==!1,he(),Y=!0,!0},frame({timeSeconds:e=0,playing:t=!1,reducedMotion:n=!1,interacting:r=!1}={}){if(X)return!1;q=e,r&&$(e),W!==(b?.aspect>1.05?`wide`:`tall`)&&_e(),ge();let i=t&&!n&&e<K;return D.uPhase.value=n?.9:e%16/16*Math.PI*2,J=!i,Y=!1,!0},needsFrame(){return!X&&(Y||!J)},reset(e=0){q=e,$(e)},getState(){return{kind:`light-stone`,element:z?.element??null,sign:z?.sign??null,deep:!!z?.deep,material:z?.material??null,seal:P.uniforms.uSealOn.value,frame:W,settled:J,motionUntil:K,strength:G}},dispose(){if(!X){X=!0,S.parent?.remove(S);for(let e of[k.geometry,j,R.geometry])e.dispose();for(let e of[k,N,F,R])e.material.dispose();w.dispose(),T.dispose(),E.clear()}}}}var R=Object.freeze({camera:Object.freeze({mode:`manual`}),themes:Object.freeze([]),strength:1});function z(e,t={}){let n={...e??R,...t&&typeof t==`object`?t:{}};n.camera=Object.freeze({mode:`manual`}),n.themes=Object.freeze(Array.isArray(n.themes)?[...new Set(n.themes)]:[]);let r=Number(n.strength);return n.strength=Number.isFinite(r)?Math.min(1,Math.max(0,r)):1,Object.freeze(n)}function B(e=R){let t=z(e);return Object.freeze({get:()=>t,set(e,{replace:n=!1}={}){let r=n?z(e):z(t,e);return JSON.stringify(r)!==JSON.stringify(t)&&(t=r),t}})}var V=e=>Array.isArray(e)&&e.length===3&&e.every(Number.isFinite);function H(e){if(!e)return null;let{center:t,radius:n}=e;return!V(t)&&V(e.min)&&V(e.max)&&(t=e.min.map((t,n)=>(t+e.max[n])/2)),!Number.isFinite(n)&&V(e.min)&&V(e.max)&&(n=Math.hypot(...e.max.map((t,n)=>t-e.min[n]))/2),!V(t)||!Number.isFinite(n)||n<=0?null:{center:[...t],radius:n,floorY:Number.isFinite(e.floorY)?e.floorY:0}}function U(e,t,{worldBounds:n=null}={}){let r=v(e,t),i=H(n);return Object.freeze({mood:r,bounds:i,revisionKey:JSON.stringify([r.key,i&&i.center.map(e=>+e.toFixed(4)),i&&+i.radius.toFixed(4)])})}function W(e){return L(e)}export{R as DEFAULT_CONFIGURATION,W as createAtmosphereLayer,B as createAtmosphereSettingsStore,U as createAtmosphereSnapshot,v as deriveMood,z as patchConfiguration};