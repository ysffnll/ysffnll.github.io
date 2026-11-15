import{$r as e,Hn as t,L as n,Rn as r,V as i,Wi as a,Yt as o,ar as s,ft as c,io as l,ir as u,jr as d,mt as f,no as p,pa as m,qt as h,ro as g,rr as _,ta as v}from"./three.core-Dp-eO7LC.js";import{a as y,c as b,d as x,f as S,i as C,l as w,n as T,o as E,p as D,r as ee,s as O,t as te,u as k}from"./figure-B2BfAT7F.js";var A=24*Math.PI/180;function j(e,t,n=1,r=1){let i=Math.cos(e),a=Math.sin(e),o=i/n,s=a/r,c=Math.hypot(o,s)||1;return[n*i+o/c*t,r*a+s/c*t]}function M(e,t=1,n=1,r=256,i=0,a=O){let o=[];for(let s=0;s<=r;s++)o.push(j(i+(a-i)*s/r,e,t,n));return o}function ne(e,{kind:t=`bracelet`,view:n={}}={}){let r=e.filter(e=>e.stone),i=r.length>=3?r:e;if(i.length<2)return null;let[a,o]=Array.isArray(n.toward)&&n.toward.every(Number.isFinite)&&Math.hypot(...n.toward)>1e-6?n.toward:[0,1],s=Math.hypot(a,o);a/=s,o/=s;let c=[-a,-o],l=[-c[1],c[0]],u=i.map(e=>e.position[0]*l[0]+e.position[2]*l[1]),d=i.map(e=>e.position[0]*c[0]+e.position[2]*c[1]),f=(Math.min(...u)+Math.max(...u))/2,p=(Math.min(...d)+Math.max(...d))/2,m=[f*l[0]+p*c[0],f*l[1]+p*c[1]],h=i.map(e=>[e.position[0]-m[0],e.position[2]-m[1]]).map(([e,t])=>[e*l[0]+t*l[1],e*c[0]+t*c[1]]),g=t===`necklace`,_,v=1,b=1;if(!g)_=Math.max(...h.map(([e,t])=>Math.hypot(e,t)));else{let e=Math.max(...h.map(([e])=>Math.abs(e))),t=Math.max(...h.map(([,e])=>Math.abs(e)));_=Math.max(1e-6,Math.min(e,t)),v=e/_,b=t/_}_=Math.max(1e-6,_);let x=Number.isFinite(n.elevation)?n.elevation:A,S=i.map(e=>e.radius/_).sort((e,t)=>e-t),C=S[Math.floor(S.length/2)]??.04/.29,T=w(C/(y/E),.3,1);return Object.freeze({centre:Object.freeze(m),right:Object.freeze(l),away:Object.freeze(c),scale:_,ex:v,ey:b,necklace:g,elevation:x,ornament:T,backRoom:w((Math.cos(x)/Math.cos(A))**2,0,1.3)})}function re(e,t,n){let r=t-e.centre[0],i=n-e.centre[1];return[(r*e.right[0]+i*e.right[1])/e.scale,(r*e.away[0]+i*e.away[1])/e.scale]}function ie(e,t,{motifScale:n=1.2}={}){let r=e.length,i=e.map(e=>re(t,e.position[0],e.position[2])),a=e.map((n,a)=>{let o=i[(a-1+r)%r],s=i[(a+1)%r],c=i[a],l=s[0]-o[0],u=s[1]-o[1],d=Math.hypot(l,u)||1;l/=d,u/=d;let f=u,p=-l,m=c[0]/(t.ex*t.ex),h=c[1]/(t.ey*t.ey);if(f*m+p*h<0&&(f=-f,p=-p),!Number.isFinite(f)||r<3){let e=Math.hypot(m,h)||1;f=m/e,p=h/e}return{stone:e[a],q:c,r:e[a].radius/t.scale,n:[f,p]}}),o=a.filter(e=>e.stone.stone),s=Math.max(1,Math.ceil(o.length/48)),c=[];o.forEach((e,r)=>{if(r%s)return;let i=c.length,a=Math.max(0,e.n[1]),o=e.r*1.05+.03+.17*a*a*t.backRoom,l=[e.q[0]+e.n[0]*o,e.q[1]+e.n[1]*o],u=w(e.r/(y/E),.4,1.3);c.push({slot:i,id:e.stone.id,element:e.stone.element,base:l,out:e.n,scale:n*u/E,phase:r*.9})});let l=Math.max(1,Math.ceil(o.length/48)),u=o.filter((e,t)=>t%l===0).map(e=>({id:e.stone.id,q:e.q,r:e.r*Math.sqrt(l),color:e.stone.color,glow:e.stone.glow,element:e.stone.element,elementIndex:e.stone.elementIndex})),d=null,f=null,p=[];for(let e of a){let n=Math.atan2(e.q[1]/t.ey,e.q[0]/t.ex);if(f===null)d=n;else{let e=n-f;for(;e>Math.PI;)e-=O;for(;e<-Math.PI;)e+=O;d+=e}f=n,p.push(d)}let m=p.length>1&&Math.sign(p[p.length-1]-p[0])||1;return Object.freeze({parts:a,motifs:c,lights:u,rimStart:p[0]??-Math.PI/2,rimDirection:m})}function ae(e,t=0,n=e.element){let r=C[n]??C.water;return x(r(t+e.phase),e.base,e.out,e.scale)}var N=e=>1+e/E,oe=Object.freeze({pool:N(.118),stream:N(.16),plate:N(.62)}),se=Object.freeze({id:`water`,glslId:`Water`,metal:[228,206,158],leaf:[228,206,158],enamel:[120,170,210],light:[255,236,190],look:{dark:1,bloom:.4,sheen:0,sheenGain:.7,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:1},motif:{scale:1.25,alpha:.95,enamel:.3},frieze:{enamel:.5,band:.14},rim:[N(.118)-.05,N(.148)+.04],glsl:`
  vec3 groundWater(P p) {
    float r = p.rho * REFR0, Rp = ${oe.plate.toFixed(4)}, Rpool = ${oe.pool.toFixed(4)};
    vec3 col = mix(vec3(.020, .038, .072), vec3(.056, .100, .160), exp(-r * r * 2.));
    // The stones' colours bloom as a watercolour wash, held by the pool rim.
    float en = (fbm3(p.g * 14.) - .5) * .041;
    float inPool = 1. - smoothstep(Rpool - .04, Rpool, p.rho + en);
    float wa = clamp(p.washW * .9, 0., 1.) * inPool;
    float tide = exp(-max(Rpool - p.rho - en, 0.) / .034) * inPool * clamp(p.washW * 2., 0., 1.);
    float gran = .85 + .3 * fbm3(p.q * 9.);
    col = mix(col, p.wash * .62 * gran, wa * .55);
    col = mix(col, p.wash * .35, tide * .45);
    float pap = mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    col *= .92 + .12 * pap;
    // The slow light field under the lines.
    float lf = smoothstep(.45, .78, vn(p.g * 1.7 + vec2(p.t * .045, -p.t * .03)) * .65 + vn(p.g * 3.4 + vec2(9. - p.t * .03, p.t * .02)) * .35)
      * (1. - smoothstep(Rp - .17, Rp + .17, p.rho));
    col += vec3(170., 205., 235.) / 255. * lf * .3;
    // The place: beyond the plate the light falls off into the dark.
    float off = smoothstep(Rp - .1, Rp + 1.03, p.rho);
    col = mix(col, vec3(.006, .010, .018), off * .94);
    col += vec3(.02, .03, .045) * exp(-pow((p.rho - Rp) / .1, 2.));
    col += p.glow * .07;
    return col;
  }
  // The flow past the loop: its stream function, eased so its level lines stay even on screen, gently breathing.
  float streamGq(vec2 Q, float rho, float R, float t) {
    float k = 1. - exp(-max(0., rho - R) * 5. * REFR0);
    float psi0 = Q.y * (1. - R * R / max(dot(Q, Q), 1e-3));
    float Z = Q.y - .0259 * k * sin(Q.x * 2.9 + psi0 * 6.85 + t * .42);
    float psi = Z * (1. - R * R / max(Q.x * Q.x + Z * Z, 1e-3));
    return psi / (1. + .08 * abs(psi));
  }
  // A whirlpool: three arms winding 2.3 turns into its centre, turning slowly.
  float whirlW(P p, vec2 Q, vec3 w, float dir) {
    vec2 d = Q - w.xy; float rw = length(d);
    float tt = 1. - rw / w.z, ph = p.t * .06 * dir + dir;
    float a = atan(d.y, d.x) - ph - tt * 2.3 * 6.2831853;
    float da = mod(a + 1.0471976, 2.0943951) - 1.0471976;
    vec2 dn = d / max(rw, 1e-4);
    float dist = da * rw, fd = fwq(p, vec2(-dn.y, dn.x)) + abs(da) * fwq(p, dn);
    fd = fd > w.z * .5 ? fwq(p, dn) * 2.3 * 6.2831853 : fd;
    return aaLine(dist, fd, 1.3 * uPxU * pow(max(sin(3.14159 * clamp(tt, 0., 1.)), 0.), .4)) * .9 * smoothstep(0., .08, tt) * step(rw, w.z);
  }
  vec4 fieldWater(P p) {
    float Rp = ${oe.plate.toFixed(4)}, R = ${oe.stream.toFixed(4)};
    vec2 Q = p.rho * vec2(cos(p.th), sin(p.th));
    vec3 W1 = vec3(1.034, 1.638, .345), W2 = vec3(-1.103, -1.845, .345);
    float lf = smoothstep(.45, .78, vn(p.g * 1.7 + vec2(p.t * .045, -p.t * .03)) * .65 + vn(p.g * 3.4 + vec2(9. - p.t * .03, p.t * .02)) * .35)
      * (1. - smoothstep(Rp - .17, Rp + .17, p.rho));
    float sl = 0., light = 0.;
    float gap = smoothstep(R, R + .04, p.rho) * (1. - smoothstep(Rp - .1, Rp - .05, p.rho));
    gap *= smoothstep(W1.z * 1.18, W1.z * 1.26, length((Q - W1.xy) * vec2(1., .9))) * smoothstep(W2.z * 1.18, W2.z * 1.26, length((Q - W2.xy) * vec2(1., .9)));
    {
      // Streamlines: level lines of the flow past the loop, spaced to stay even on screen, gently breathing.
      float gq = streamGq(Q, p.rho, R, p.t), stp = .2;
      float idx = floor(gq / stp), hj = h21(vec2(idx, 3.1));
      float target = (idx + .5 + (hj - .5) * .4) * stp;
      // Its screen width by finite differences (no derivative inside the plate's branch).
      float dl = gq - target, fw = abs(streamGq(Q + p.dqx, p.rho + p.drho, R, p.t) - gq) + abs(streamGq(Q + p.dqy, p.rho, R, p.t) - gq);
      bool heavy = mod(idx, 4.) < .5;
      float va = .8 + .4 * h21(vec2(idx, 7.7));
      float cov = aaLine(dl, fw, ((heavy ? 1.05 : .7) + .15) * uPxU);
      sl = cov * gap * step(0., gap);
      // The light carried along the water.
      float dash = fract((Q.x + p.t * .138 + idx * .48) / 2.16);
      float dsh = smoothstep(0., .02, dash) * (1. - smoothstep(.1, .12, dash));
      light = aaLine(dl, fw, ((heavy ? 1.05 : .7) + .9) * uPxU) * dsh * gap * .128 * va;
    }
    float wh = whirlW(p, Q, W1, 1.) + whirlW(p, Q, W2, -1.);
    sl = max(sl, wh);
    vec3 gold = vec3(228., 206., 158.) / 255.;
    // The outer engraved rim of the plate, with a ring of ticks.
    float rimC = aaLine(p.rho - Rp, p.drho, 1.4 * uPxU) * .75;
    rimC = max(rimC, aaLine(p.rho - Rp - .086, p.drho, .6 * uPxU) * .5);
    float ta = mod(p.th * 120. / 6.2831853 + .5, 1.) - .5, ti = floor(p.th * 120. / 6.2831853 + .5);
    float tl = mod(ti, 5.) < .5 ? .086 : .041, tick = ta * 6.2831853 / 120. * p.rho;
    float ftk = p.dth * p.rho; ftk = ftk > .5 ? p.drho : ftk;
    rimC = max(rimC, aaLine(tick, ftk, .5 * uPxU) * step(Rp, p.rho) * step(p.rho, Rp + tl) * .45);
    vec3 add = gold * sl * 1.1 * lf + vec3(255., 236., 190.) / 255. * light * .8;
    return vec4(add, max(sl * .1, rimC));
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t;e.line(M(oe.pool-1,n,r,360),1.2,.8),e.line(M(N(.131)-1,n,r,360),.6,.55);let i=M(N(.148)-1,n,r,120);for(let t=0;t<120;t++)e.dot(i[t],1.05,.7)},uniforms(){return{}}}),ce=E*600,le=1.6,ue=1.6,P=Object.freeze({FIELD:0,SEAM:236,LEAF:248,GLYPH:255}),F=e=>4*(e+1);function de(e,t,n){let r=Math.abs(e);return Math.sign(e)*(r<=t?r:t+n*Math.tanh((r-t)/n))}function fe(e,t,n){let r=Math.abs(e);if(r<=t)return 1;let i=Math.cosh((r-t)/n);return 1/(i*i)}function pe(e,{texels:t=2048,core:n=.6,reach:r=1}={}){let i=e.ex+n,a=e.ey+n,o=r,s=r,c=i+o,l=a+s,u=t,d=Math.max(256,Math.round(t*l/c/8)*8);return Object.freeze({ax:i,ay:a,bx:o,by:s,Tx:c,Ty:l,width:u,height:d})}function me({near:e,aux:t=null}){let n=[];if(e){let t=e.layout,r=t.width/2/t.Tx,i=t.height/2/t.Ty;n.push({name:`near`,ctx:e.ctx,map:([e,n])=>[t.width/2+de(e,t.ax,t.bx)*r,t.height/2-de(n,t.ay,t.by)*i],density:([e,n])=>Math.sqrt(r*fe(e,t.ax,t.bx)*i*fe(n,t.ay,t.by)),w:t.width,h:t.height})}if(t){let[e,r,i,a]=t.rect,o=t.width/(i-e),s=t.height/(a-r);n.push({name:`aux`,ctx:t.ctx,map:([t,n])=>[(t-e)*o,(a-n)*s],density:()=>Math.sqrt(o*s),w:t.width,h:t.height,bounds:[e,r,i,a]})}for(let e of n)e.ctx.globalCompositeOperation=`source-over`,e.ctx.fillStyle=`#000`,e.ctx.fillRect(0,0,e.w,e.h),e.ctx.globalCompositeOperation=`lighten`,e.ctx.lineCap=`round`,e.ctx.lineJoin=`round`;let r=(e,t,n)=>`rgb(${Math.round(w(e)*255)},${Math.round(w(t)*255)},${Math.round(w(n/255)*255)})`,i=(e,t,n=`r`,i=1)=>n===`g`?r(0,e*i,t*e):n===`rg`?r(e,e*i,t*e):r(e,0,t*e),a=(e,t,n)=>e.bounds&&t.every(([t,r])=>t<e.bounds[0]-n||t>e.bounds[2]+n||r<e.bounds[1]-n||r>e.bounds[3]+n),o=0;function s(e,t,n){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);n&&e.closePath()}function c(e,t,n){let r=t.length,i=[],a=[];for(let e=0;e<r;e++){let o=t[Math.max(0,e-1)],s=t[Math.min(r-1,e+1)],c=s[0]-o[0],l=s[1]-o[1],u=Math.hypot(c,l)||1;c/=u,l/=u;let d=n[e]/2;i.push([t[e][0]-l*d,t[e][1]+c*d]),a.push([t[e][0]+l*d,t[e][1]-c*d])}e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let t=1;t<r;t++)e.lineTo(i[t][0],i[t][1]);for(let t=r-1;t>=0;t--)e.lineTo(a[t][0],a[t][1]);e.closePath()}return{line(e,t,r=1,{slot:c=-1,code:l=c>=0?F(c):P.FIELD,close:u=!1,channel:d=`r`,dash:f=null}={}){if(!e||e.length<2)return;let p=u?[...e,e[0]]:e;for(let e of n){if(a(e,p,.05))continue;let n=e.ctx;for(let a=0;a<p.length-1;a+=24){let c=p.slice(a,Math.min(p.length,a+24+1)),u=t/ce*e.density(c[Math.floor(c.length/2)]),m=r;u<1.6&&(m*=Math.max(.15,u/le),u=le),n.lineWidth=u,n.strokeStyle=i(m,l,d),f?n.setLineDash(f.map(t=>t/ce*e.density(c[0]))):n.setLineDash([]),s(n,c.map(e.map)),n.stroke(),o++}n.setLineDash([])}},taper(e,t,n=1,r=.55,i={}){let a=e.length;a<2||this.ribbon(e,e.map((e,n)=>Math.max(.25,t*Math.sin(Math.PI*w(n/(a-1),.02,.98))**+r)),n,i)},ribbon(e,t,r=1,{slot:s=-1,code:l=s>=0?F(s):P.FIELD,channel:u=`r`,g:d=1}={}){if(!(!e||e.length<2))for(let s of n){if(a(s,e,.05))continue;let n=e.map(s.map),f=e.map((e,n)=>t[n]/ce*s.density(e)),p=f.map(e=>Math.max(ue,e)),m=Math.max(.6,Math.sqrt(Math.min(1,f.reduce((e,t)=>e+t,0)/p.reduce((e,t)=>e+t,0))));s.ctx.fillStyle=i(r*(u===`r`?m:1),l,u,d),c(s.ctx,n,p),s.ctx.fill(),o++}},fill(e,{slot:t=-1,code:r=t>=0?F(t):P.FIELD,channel:c=`g`,alpha:l=1,only:u=null}={}){if(!(!e||e.length<3))for(let t of n)a(t,e,.05)||u&&t.name!==u||(t.ctx.fillStyle=i(l,r,c),s(t.ctx,e.map(t.map),!0),t.ctx.fill(),o++)},dot(e,t,r=1,{code:s=P.FIELD,channel:c=`r`}={}){for(let l of n){if(a(l,[e],.05))continue;let[n,u]=l.map(e),d=t/ce*l.density(e),f=r;d<.6&&(f*=d/.6,d=.6),l.ctx.fillStyle=i(f,s,c),l.ctx.beginPath(),l.ctx.arc(n,u,d,0,Math.PI*2),l.ctx.fill(),o++}},star(e,t,n=1,r=6,i=0,a={}){this.dot(e,t*.42,n,a);for(let o=0;o<r;o++){let s=i+o*Math.PI*2/r,c=t*(o%2?.75:1.25)/ce,l=t*.5/ce;this.line([[e[0]+Math.cos(s)*l,e[1]+Math.sin(s)*l],[e[0]+Math.cos(s)*c,e[1]+Math.sin(s)*c*.8]],Math.max(.4,t*.16),n,a)}},glyph(e,t){let n=e.reduce((e,t)=>e+t.p.length,0),r=0;for(let i of e){let e=t(i);for(let t=0;t<i.p.length-1;t+=3){let a=Math.min(i.p.length,t+4),o=i.p.slice(t,a),s=e.slice(t,a);this.ribbon(o,s,1,{code:P.GLYPH,channel:`rg`,g:(r+t)/n})}r+=i.p.length}},get strokes(){return o}}}var I=e=>1+e/E,he=[238,194,116],L=[196,52,30],R=I(.175);function ge(e){let t=(e%9+9)%9/5.5;return{r:R+Math.min(t,1.4)**1.25*2/E,a:t<1.4?Math.sin(Math.PI/2*Math.min(1,t/.1))*(1-((e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/.8500000000000001));return r*r*(3-2*r)})(.5,1.35,t)):0}}function _e(e,t,n,r,i,a,o={}){let s=[],c=o.step??.038,l=o.depth??2,u=o.stop||(()=>!1),d=o.steer||null,f=(t,n,r,i,a,p)=>{let m=[[t,n]],h=0;for(let s=0;s<i&&(h=h*.86+(e()-.5)*(o.wob??.07),e()<.025&&(h+=(e()-.5)*.5),r+=h,d&&(r=d(t,n,r)),t+=Math.cos(r)*c,n+=Math.sin(r)*c*1.25,m.push([t,n]),!u(t,n));s++)p<l&&s>6&&e()<(o.branch??.035)&&f(t,n,r+(e()<.5?-1:1)*(.55+e()*.5),(i-s)*(.35+e()*.3),a*.6,p+1);m.length>3&&s.push({p:m,w:a,d:p})};return f(t,n,r,i,a,0),s}var ve=Object.freeze([{p:((...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]))(b([0,-.012],[.012,-.014],[.03,-.012],[.046,.002],10),b([.046,.002],[.054,.01],[.05,.02],[.042,.016],6),b([.042,.016],[.03,.01],[.018,.016],[0,.012],8)),w:.9,fill:!0,close:!0,tint:0},{p:b([.006,-.002],[.018,-.004],[.026,0],[.034,.006],6),w:.5,tint:1}]),ye=Object.freeze({id:`fire`,glslId:`Fire`,metal:he,leaf:he,enamel:L,light:[255,226,170],look:{dark:1,bloom:.4,sheen:0,sheenGain:.6,tint:.45,lineAlpha:.95,reflect:.3,heat:.7,wave:.8,ring:1},motif:{scale:1.2,alpha:.95,enamel:.38},frieze:{enamel:.55,band:.08},rim:[I(.112)-.04,I(.15)+.04],glsl:`
  vec2 vor2(vec2 p) { vec2 n = floor(p), f = fract(p); float d1 = 8., d2 = 8.;
    for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) { vec2 gg = vec2(float(i), float(j)); vec2 r = gg + h22(n + gg) - f; float d = dot(r, r); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
    return vec2(sqrt(d1), sqrt(d2)); }
  vec3 groundFire(P p) {
    vec2 G = p.g; float r = p.rho * REFR0, r0 = REFR0;
    float breath = .78 + .22 * sin(p.t * .42);
    vec3 lac = mix(vec3(.19, .050, .032), vec3(.030, .010, .008), smoothstep(.1, 1.55, r));
    lac *= .9 + .13 * fbm3(G * vec2(1.1, 6.5) + .5);
    lac += vec3(.08, .045, .03) * exp(-pow((G.y - 1.45) * 1.2, 2.)) * (.5 + .5 * fbm3(G * vec2(3., 1.)));
    vec3 col = lac;
    // Fine aged craquelure far out, faded where it would be finer than a pixel.
    float m = smoothstep(r0 + .7, r0 + .9, r) * smoothstep(.35, .6, vn(G * 4.));
    vec2 v = vor2(G * vec2(16., 19.) + .35 * vec2(fbm3(G * 3.), fbm3(G * 3. + 4.)));
    float e = (v.y - v.x) / 16., fp = p.px * REFR0;
    col = mix(col, vec3(.012, .004, .004), (1. - smoothstep(fp * .2, fp * .8, e)) * m * .5 * (1. - smoothstep(.004, .012, fp)));
    // The hearth under the piece.
    col += vec3(1., .36, .10) * .12 * breath * exp(-r * r * 3.2);
    col += vec3(.6, .16, .04) * .07 * breath * exp(-r * r * .7);
    // The walking ring warms the lacquer as it passes.
    float rw = exp(-pow((p.rho - uRing.x) / .26, 2.)) * uRing.y, rt = exp(-pow((p.rho - uRing.x + .41) / .55, 2.)) * uRing.y * step(p.rho, uRing.x);
    col += vec3(1., .48, .16) * (rw * .34 + rt * .08);
    // Nashiji: gold flakes densest just outside the sun, woken by the ring.
    float cs = .017; vec2 cell = floor(p.q / cs); float h = h21(cell + 7.);
    float dens = exp(-pow((r - r0 - .62) / .3, 2.)) * .75 + .07;
    if (h > 1. - .02 * dens) { float d = length(p.q - (cell + h22(cell)) * cs) / cs; col += vec3(.95, .72, .38) * (.45 + 1.4 * rw) * smoothstep(.45, 0., d) * (.6 + .4 * sin(p.t * .7 + h * 80.)) * (1. - smoothstep(.3, .8, p.px / cs)); }
    col += p.glow * .07;
    col *= .94 + .07 * mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    return col;
  }
  vec4 fieldFire(P p) {
    // The long lances: three hairlines converging far out, between the flame rays.
    float fi = p.th * 48. / 6.2831853 - .5, i = floor(fi * .5 + .5) * 2., d0 = (fi - i) * 6.2831853 / 48. * p.rho;
    float r1 = ${(R+.065/E).toFixed(4)}, r2 = r1 + (1.1 + .35 * mod(i * 5., 4.) / 3.) / REFR0;
    float f = clamp((p.rho - r1) / (r2 - r1), 0., 1.), on = step(r1, p.rho) * step(p.rho, r2), hw = .016 / REFR0 * (1. - f);
    float fd = p.dth * p.rho; fd = fd > .5 ? p.drho : fd;
    float taper = pow(1. - f, .8) * min(1., f * 12.);
    float c = aaLine(d0, fd, 1.25 * uPxU * taper) * .62;
    c = max(c, aaLine(d0 - hw, fd, .55 * uPxU * taper) * .42);
    c = max(c, aaLine(d0 + hw, fd, .55 * uPxU * taper) * .42);
    // The ring lights the gold it crosses.
    float lit = exp(-pow((p.rho - uRing.x) / .24, 2.)) * uRing.y;
    return vec4(vec3(1., .9, .66) * c * on * lit * 1.1, c * on);
  }
  `,paint(e,{frame:t,motifs:n}){let{ex:r,ey:i}=t,a=t.ornament,o=e=>e-1,s=(e,t)=>j(t,o(e),r,i);e.line(M(o(R),r,i,360),1.3,.85),e.line(M(o(R+.012/E),r,i,360),.5,.55);for(let t=0;t<240;t++){let n=t*O/240,r=R+.014/E,i=r+(t%4==0?.03:.018)/E*a;e.line([s(r,n),s(i,n)],t%4==0?.75:.45,t%4==0?.62:.38)}e.line(M(o(R+.05/E),r,i,360),.6,.6);let c=R+.065/E;for(let t=1;t<48;t+=2){let n=(t+.5)*O/48,r=c+((t%4==1?.34:.24)+.04*Math.sin(t*1.7))/E*a,i=t*1.3,o=[],l=[],u=[];for(let e=0;e<=36;e++){let t=e/36,d=k(c,r,t),f=.03/E*a*Math.sin(t*O*1.15+i)*t**.8,p=.019/E*a*(1-t)**.9*(1+.4*Math.sin(Math.PI*t));o.push(s(d,n+(f+p)/d)),l.push(s(d,n+(f-p)/d)),e>=2&&e<=30&&u.push(s(d,n+f/d))}e.fill(o.concat([...l].reverse()),{channel:`g`,alpha:.5}),e.taper(o,1,.85,.6),e.taper(l,.8,.7,.6),e.taper(u,.55,.6,.7)}for(let e=0;e<48;e++){let t=e*O/48,o=s(R+.06/E,t),c=Math.cos(t)/r,l=Math.sin(t)/i,u=Math.hypot(c,l);n.draw(x(ve,o,[c/u,l/u],a/E,0),{alpha:.8,enamel:.5,widthScale:.9,code:P.FIELD})}let l=S(127);for(let t=0;t<7;t++){let n=(t+.5)*O/7+.13,[r,i]=s(R+(.45+l()*.2)/E*a,n),o=_e(l,r,i,n+(l()-.5)*.4,34+l()*24,1.4,{step:.014/E*a,wob:.05,branch:.04,depth:2,steer:(e,t,n)=>{let r=Math.atan2(t,e)-n;for(;r>Math.PI;)r-=O;for(;r<-Math.PI;)r+=O;return n+r*.12},stop:(e,t)=>Math.abs(e)>4||Math.abs(t)>6});for(let t of o){let n=t.p.length;e.ribbon(t.p,t.p.map((e,r)=>Math.max(.3,t.w*(1-.6*r/n)*(.75+.25*Math.sin(r*.9)))),.82,{code:P.SEAM}),e.line(t.p,t.d?4.5:6.5,1,{code:P.SEAM,channel:`g`})}}},uniforms(){return{}}}),z=Object.freeze({aries:{stars:[[.08,.44,1],[.56,.34,2],[.8,.52,1.5],[.88,.68,1]],lines:[[0,1],[1,2],[2,3]]},taurus:{mirror:!0,stars:[[.52,.58,2],[.4,.66,1],[.47,.48,1],[.86,.14,1.5],[.92,.42,1],[.24,.74,1],[.08,.86,1]],lines:[[1,0],[0,4],[1,2],[2,3],[1,5],[5,6]]},gemini:{stars:[[.3,.1,2],[.56,.14,2],[.24,.44,1],[.14,.7,1],[.08,.84,1],[.6,.46,1],[.52,.68,1],[.44,.9,1.5]],lines:[[0,1],[0,2],[2,3],[3,4],[1,5],[5,6],[6,7]]},cancer:{stars:[[.5,.5,1.5],[.53,.34,1],[.58,.08,1],[.2,.84,1.5],[.84,.9,2]],lines:[[2,1],[1,0],[0,3],[0,4]]},leo:{mirror:!0,stars:[[.3,.8,2],[.34,.58,1],[.44,.44,1.5],[.42,.26,1],[.28,.14,1],[.16,.22,1],[.94,.68,1.5],[.72,.42,1],[.72,.66,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[2,7],[7,6],[6,8],[8,0],[7,8]]},virgo:{stars:[[.08,.42,1],[.26,.47,1],[.4,.5,1.5],[.54,.34,1],[.64,.12,1],[.5,.68,1],[.5,.9,2],[.72,.54,1],[.9,.46,1]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[3,7],[7,8]]},libra:{stars:[[.3,.6,1.5],[.52,.14,2],[.78,.44,1],[.26,.92,1],[.84,.88,1]],lines:[[0,1],[1,2],[2,0],[0,3],[2,4]]},scorpius:{stars:[[.86,.08,1],[.92,.2,1],[.9,.34,1],[.78,.27,1],[.7,.33,2],[.64,.44,1],[.56,.6,1],[.52,.74,1],[.5,.86,1],[.38,.94,1],[.24,.9,1],[.14,.78,1],[.16,.66,1],[.26,.58,1.5]],lines:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]},sagittarius:{stars:[[.36,.52,1],[.38,.8,1.5],[.7,.74,1],[.62,.44,1],[.82,.36,2],[.88,.6,1],[.44,.24,1],[.18,.62,1]],lines:[[0,1],[1,2],[2,3],[3,0],[0,6],[6,3],[3,4],[4,5],[5,2],[0,7],[7,1]]},capricorn:{mirror:!0,stars:[[.1,.14,1.5],[.16,.3,1.5],[.36,.76,1],[.44,.9,1],[.66,.72,1],[.8,.54,1],[.94,.38,2],[.82,.36,1],[.64,.35,1],[.42,.33,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1]]},aquarius:{mirror:!0,stars:[[.04,.62,1],[.1,.5,1],[.24,.4,2],[.44,.24,2],[.58,.22,1],[.66,.18,1],[.76,.24,1],[.64,.08,1],[.52,.52,1],[.7,.6,1],[.82,.76,1],[.9,.92,1.5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[3,8],[8,9],[9,10],[10,11]]},pisces:{stars:[[.12,.9,1.5],[.16,.72,1],[.22,.52,1],[.27,.34,1],[.24,.18,1],[.36,.22,1],[.28,.84,1],[.4,.8,1],[.52,.74,1],[.63,.67,1],[.72,.6,1],[.8,.52,1],[.86,.42,1],[.94,.46,1],[.95,.58,1],[.88,.64,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,3],[0,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,11]]}}),B=e=>1+e/E,be=[58,38,22],V=[190,146,62],H=Object.freeze({wi:B(.15),wo:B(.26),di:B(.275),dm:B(.3),do:B(.335),zi:B(.345),zo:B(.45),lo:B(.47),leaf:B(.268)}),xe=[`aries`,`taurus`,`gemini`,`cancer`,`leo`,`virgo`,`libra`,`scorpius`,`sagittarius`,`capricorn`,`aquarius`,`pisces`],Se=Object.freeze({id:`atlas`,glslId:`Atlas`,metal:be,leaf:V,enamel:[160,90,60],light:[255,236,170],look:{dark:0,bloom:0,sheen:2,sheenGain:.9,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.35},motif:{scale:1.14/1.2,alpha:.9,enamel:.42},frieze:{enamel:.42,band:.1,guil:.16},rim:[H.wi-.04,H.leaf+.04],glsl:`
  vec3 groundAtlas(P p) {
    vec2 G = p.g; float r = p.rho, ang = p.th;
    vec3 vel = vec3(.82, .725, .56);
    float st = fbm(G * 2.6) * .6 + fbm3(p.q * .8) * .4;
    vec3 col = vel * (.84 + .24 * st);
    float fx = smoothstep(.70, .86, fbm3(G * 11. + 11.)); col *= 1. - fx * .10;
    col = mix(col, col * vec3(.86, .78, .66), smoothstep(.55, .9, fbm3(G * 1.3 + 4.)) * .5);
    col *= .95 + .07 * mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    // The hand-coloured wash ring: the strand's elements, each in its stone's colour, in proportion.
    float r1 = ${B(.155).toFixed(4)}, r2 = ${B(.255).toFixed(4)}; float en = (fbm3(G * 16.) - .5) * .048;
    float band = smoothstep(r1 - .01, r1 + .01, r + en) * (1. - smoothstep(r2 - .01, r2 + .01, r + en));
    vec4 sh = uShares / max(1e-3, dot(uShares, vec4(1.)));
    float a = fract((ang + 1.5708) / 6.2831853 + .5);
    float c0 = sh.x, c1 = c0 + sh.y, c2 = c1 + sh.z;
    vec3 pig = uPig[0]; float lo = 0., hi = c0;
    if (a >= c0 && a < c1) { pig = uPig[1]; lo = c0; hi = c1; } else if (a >= c1 && a < c2) { pig = uPig[2]; lo = c1; hi = c2; } else if (a >= c2) { pig = uPig[3]; lo = c2; hi = 1.; }
    float da = min(a - lo, hi - a) * 6.2831853 * r;
    float inS = smoothstep(.02, .048, da + en * .6);
    float de = min(min(r + en - r1, r2 - r - en), da);
    float edge = exp(-max(de, 0.) / .024);
    float gran = fineNoise(p.q * 150., log2(max(p.px * 150., 1e-4))) * .5 + fineNoise(p.q * 50. + 5., log2(max(p.px * 50., 1e-4))) * .5;
    float dens = (.30 + .62 * edge) * (.72 + .5 * gran) * (.65 + .7 * fbm3(G * 3.5 + 9.)) * band * inS;
    col *= mix(vec3(1.), pow(pig, vec3(1.5)), clamp(dens, 0., 1.));
    col += p.glow * .04;
    // Far away the parchment fades into a warm haze.
    col = mix(col, vec3(.62, .55, .44), smoothstep(6., 14., r) * .6);
    return col;
  }
  float dashed(float along, float on, float period, float fw) { float x = mod(along, period); return smoothstep(0., fw, x) * (1. - smoothstep(on - fw, on, x)); }
  vec4 fieldAtlas(P p) {
    float r = p.rho, fr = p.drho, c = 0.;
    float lo = ${H.lo.toFixed(4)};
    // The sky's graticule beyond the plate: dotted circles and hour lines (fading where finer than the pixels).
    float fade = 1. - smoothstep(.02, .05, p.px);
    float arc = p.th * r, fa = r * p.dth + abs(p.th) * p.drho, per = 4.6 / ${(E*600).toFixed(1)};
    for (int k = 0; k < 6; k++) {
      float R = lo + (k == 0 ? .14 : k == 1 ? .34 : k == 2 ? .62 : k == 3 ? 1. : k == 4 ? 1.5 : 2.1) / REFR0;
      c = max(c, aaLine(r - R, fr, .65 * uPxU) * .55 * mix(dashed(arc, per * .35, per, fa), .5, 1. - fade));
    }
    float hi = (p.th - 6.2831853 / 48.) * 24. / 6.2831853, hn = floor(hi + .5), hd = (hi - hn) * 6.2831853 / 24. * r;
    float fhd = p.dth * r; fhd = fhd > .5 ? fr : fhd;
    c = max(c, aaLine(hd, fhd, .6 * uPxU) * .45 * step(lo + .07, r) * mix(dashed(r, per * .35, per, fr), .5, 1. - fade));
    // The ecliptic: an eccentric ring through the far sky, as on an astrolabe's rete, with ticks; a leaf line inside.
    vec2 e = p.q - vec2(0., .62 / REFR0); float er = length(e), re = 1. + .72 / REFR0, ea = atan(e.y, e.x);
    vec2 en = e / max(er, 1e-4); float fer = fwq(p, en);
    c = max(c, aaLine(er - re, fer, 1.1 * uPxU) * .85);
    c = max(c, aaLine(er - re - .06 / REFR0, fer, .7 * uPxU) * .75);
    float ti = ea * 72. / 6.2831853, tn = floor(ti + .5), td = (ti - tn) * 6.2831853 / 72. * er, tl = (mod(tn, 6.) < .5 ? .06 : .03) / REFR0;
    float ftd = fwq(p, vec2(-en.y, en.x)); ftd = ftd > .5 ? fer : ftd;
    c = max(c, aaLine(td, ftd, (mod(tn, 6.) < .5 ? .8 : .5) * uPxU) * step(re, er) * step(er, re + tl) * .7);
    float leafL = aaLine(er - re - .03 / REFR0, fer, 1.6 * uPxU) * .8;
    // Scattered stars of the outer field.
    float cs = .55; vec2 cell = floor(p.q / cs); float h = h21(cell + 3.);
    if (r > lo + .1 && h > .72) { vec2 sp = (cell + .2 + .6 * h22(cell)) * cs; float d = length(p.q - sp); float sz = (h > .97 ? 4.4 : h > .86 ? 2.8 : 1.7) * uPxU * p.px;
      c = max(c, smoothstep(sz * .45, sz * .2, d) * .85 * fade); }
    vec3 leafCol = vec3(${V.map(e=>(e/255).toFixed(3)).join(`, `)});
    // The leaf line darkens like ink here; its light is the sheen's (the main composition adds no bloom on paper).
    return vec4((leafCol - uMetal) * leafL, max(c, leafL));
  }
  `,paint(e,{frame:t,strand:n}){let{ex:r,ey:i}=t,a=e=>e-1,o=(e,t=360)=>M(a(e),r,i,t);e.line(o(H.wi),.8,.75),e.line(o(H.wo),.8,.75),e.line(o(H.di),1,.85),e.line(o(H.do),1,.85),e.line(o(H.dm),.45,.6);for(let t=0;t<360;t+=2){let n=t*Math.PI/180,o=t%10==0,s=t%30==0?H.do:o?H.dm+.018/E:H.dm,c=o?H.di:H.dm-.012/E;e.line([j(n,a(c),r,i),j(n,a(s),r,i)],o?.85:.55,o?.9:.7)}e.line(o(H.zi),.55,.7),e.line(o(H.zo),1.3,.9),e.line(o(H.lo),.5,.6);for(let t=0;t<12;t++){let n=t*O/12-Math.PI/2;e.line([j(n,a(H.zi),r,i),j(n,a(H.zo),r,i)],.7,.75);let o=z[xe[t]],s=n+O/24,c=(H.zi+H.zo)/2,l=.042/E*1.6,u=o.stars.map(e=>e[0]),d=o.stars.map(e=>e[1]),f=(Math.min(...u)+Math.max(...u))/2,p=(Math.min(...d)+Math.max(...d))/2,m=Math.max(Math.max(...u)-Math.min(...u),(Math.max(...d)-Math.min(...d))*1.6,.1),h=o.stars.map(([e,t])=>{let n=((o.mirror?1-e:e)-(o.mirror?1-f:f))/m,u=-(t-p)/m;return j(s+n*l*1.8/c,a(c+u*l*.9),r,i)});for(let[t,n]of o.lines)e.line([h[t],h[n]],.6,.7);h.forEach((t,n)=>e.star(t,(o.stars[n][2]>=2?3.4:2.3)*.8,.85,4,.4))}e.line(o(H.leaf),2,.95,{code:P.LEAF});for(let o of n.parts){if(!o.stone.stone)continue;let n=Math.max(0,o.n[1]),s=Math.hypot(o.q[0]/r,o.q[1]/i),c=Math.atan2(o.q[1]/i,o.q[0]/r),l=a(s)+o.r*1.1+(.035+.05*n*n*t.backRoom)/E;a(H.wi)-.03>l&&e.line([j(c,l,r,i),j(c,a(H.wi)-.03,r,i)],.5,.5)}},uniforms(){return{}}}),Ce=null;function we(){if(Ce)return Ce;let e=S(5021),t=new Uint8Array(262144);for(let n=0;n<t.length;n++)t[n]=Math.floor(e()*256);return Ce=t}function Te(e,t){let n=we(),r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=(e,t)=>n[((t%256+256)%256*256+(e%256+256)%256)*4]/255,c=s(r,i),l=s(r+1,i),u=s(r,i+1),d=s(r+1,i+1);return(c+(l-c)*a)*(1-o)+(u+(d-u)*a)*o}var U=e=>1+e/E,W=[70,46,26],Ee=[196,152,72],G=U(.13),K=.04,De=Te;function Oe(e,t,n=1,r=1){let i=n===1&&r===1?Math.hypot(e,t):Math.hypot(e/n,t/r);if(i<G)return 1;let a=e*E,o=t*E,s=(i-G)*E,c=De(a*2.1+5.3,o*2.1)*.6+De(a*4.7-2,o*4.7+3)*.28+De(a*10,o*10)*.12;return 1-.72*s**.75+.6*(c-.5)*D(0,.3,s)}function ke(e){let t=[`water`,`fire`,`earth`,`air`].map((e,t)=>[e,t]).filter(([t])=>(e?.[t]??0)>.02).sort((t,n)=>(e[n[0]]??0)-(e[t[0]]??0));return[0,1,2,3].map(e=>t[e]?[1-K*(3.5+e*5),1-K*(1+e*5),t[e][1],1]:[2,2,0,0])}function Ae(e,t,n,r,i,a){let o=Math.ceil((r-t)/a)+1,s=Math.ceil((i-n)/a)+1,c=new Float32Array(o*s),l=[];for(let r=0;r<s;r++)for(let i=0;i<o;i++)c[r*o+i]=e(t+i*a,n+r*a);for(let e=0;e<s-1;e++)for(let r=0;r<o-1;r++){let i=c[e*o+r],s=c[e*o+r+1],u=c[(e+1)*o+r+1],d=c[(e+1)*o+r],f=Math.min(i,s,u,d),p=Math.max(i,s,u,d);if(!(p>=.999))for(let o=Math.ceil(f/K);o*K<=p;o++){let c=o*K,f=[],p=e=>t+e*a,m=e=>n+e*a;(i-c)*(s-c)<0&&f.push([p(r+(c-i)/(s-i)),m(e)]),(s-c)*(u-c)<0&&f.push([p(r+1),m(e+(c-s)/(u-s))]),(d-c)*(u-c)<0&&f.push([p(r+(c-d)/(u-d)),m(e+1)]),(i-c)*(d-c)<0&&f.push([p(r),m(e+(c-i)/(d-i))]),f.length>=2&&l.push([f[0],f[1]])}}return l}var je=Object.freeze({id:`earth`,glslId:`Earth`,metal:W,leaf:Ee,enamel:[160,186,196],light:[255,230,160],look:{dark:0,bloom:0,sheen:2,sheenGain:.7,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.35},motif:{scale:1.2,alpha:.95,enamel:.45},frieze:{enamel:.38,band:.1,guil:.16},rim:[U(.118)-.04,U(.13)+.04],defaults:{uRose:[.14,.9]},glsl:`
  uniform vec4 uEarthBand[4];   // lo, hi, element index, present
  uniform vec2 uRose;   // the rose's place in the tile (bottom left; bottom right on a phone, where the caption sits left)

  float earthH(vec2 q, float rho) {
    float P = ${G.toFixed(4)}; if (rho < P) return 1.;
    vec2 G = q * REFR0; float d = (rho - P) * REFR0;
    float f = vn(G * 2.1 + vec2(5.3, 0.)) * .6 + vn(G * 4.7 + vec2(-2., 3.)) * .28 + vn(G * 10.) * .12;
    return 1. - .72 * pow(d, .75) + .6 * (f - .5) * smoothstep(0., .3, d);
  }
  vec3 groundEarth(P p) {
    vec2 G = p.g; float r = p.rho * REFR0;
    vec3 col = vec3(.875, .82, .71) * (.9 + .12 * fbm(G * 1.6 + 2.) + .05 * fbm3(p.q * 1.6));
    col = mix(col, col * vec3(.9, .84, .74), smoothstep(.62, .9, fbm3(G * 1.1 + 7.)) * .45);
    float fox = smoothstep(.78, .86, fbm3(G * 5. + 3.)); col = mix(col, col * vec3(.93, .86, .76), fox * .35);
    col += vec3(.03, .025, .015) * (1. - smoothstep(REFR0 + .11, REFR0 + .15, r));
    col += vec3(.05, .04, .02) * exp(-pow((p.q.x * .25 + .3 * sin(p.t * .045)) * 2., 2.)) * .7;
    // The stones' colours as pale washes between pairs of contour lines, darker at their edges.
    float h = earthH(p.q, p.rho);
    for (int k = 0; k < 4; k++) {
      vec4 b = uEarthBand[k];
      if (b.w > .5 && h > b.x && h <= b.y && h < .999) {
        float de = min(h - b.x, b.y - h) / ${K.toFixed(3)};
        vec3 pig = mix(vec3(240.) / 255., uPig[int(b.z + .5)], .55);
        col *= mix(vec3(1.), pig, .1 + .32 * exp(-de / .14));
      }
    }
    col *= .95 + .07 * mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    col += p.glow * .035;
    col = mix(col, vec3(.74, .69, .6), smoothstep(6., 14., p.rho) * .6);
    // The compass rose's gold-leaf dot to the north.
    { vec2 v = (p.tp - uRose * vec2(600., 800.)) / vec2(1., .62) - vec2(0., -26. * 1.2); float fwd = p.tpw;
      col = mix(col, vec3(196., 152., 72.) / 255., aaLine(length(v) * .62, fwd, 4. * p.tu) * .9); }
    return col;
  }
  // The compass rose, bottom left of the designer's tile (128): sixteen points, the four cardinal long and dark, in a
  // ring, squashed as if it lay on the map; a gold-leaf dot to the north. Designer pixels, x right, y down.
  vec2 roseAt() { return uRose * vec2(600., 800.); }
  const float ROSE_R = 26.;
  vec2 roseLocal(P p) { return (p.tp - roseAt()) / vec2(1., .62); }
  float roseEdge(vec2 p, vec2 a, vec2 b) { return (b.x - a.x) * (p.y - a.y) - (b.y - a.y) * (p.x - a.x); }
  float earthRose(P p, float fw) {
    vec2 v = roseLocal(p);
    if (length(v) > ROSE_R * 1.3) return 0.;
    float c = 0.;
    for (int i = 0; i < 16 * int(uLoops); i++) {
      float a = float(i) * 6.2831853 / 16. - 1.5707963, cardinal = mod(float(i), 4.) < .5 ? 1. : 0., even = mod(float(i), 2.) < .5 ? 1. : 0.;
      float l = cardinal > .5 ? ROSE_R : even > .5 ? ROSE_R * .62 : ROSE_R * .42, w = cardinal > .5 ? ROSE_R * .13 : ROSE_R * .08;
      vec2 dir = vec2(cos(a), sin(a)), nrm = vec2(-dir.y, dir.x), tip = dir * l, l1 = -nrm * w, r1 = nrm * w;
      // One half filled (the shaded face), both edges engraved.
      float e1 = roseEdge(v, vec2(0.), l1), e2 = roseEdge(v, l1, tip), e3 = roseEdge(v, tip, vec2(0.));
      float inside = (e1 >= 0. && e2 >= 0. && e3 >= 0.) || (e1 <= 0. && e2 <= 0. && e3 <= 0.) ? 1. : 0.;
      c = max(c, inside * (cardinal > .5 ? .55 : .3));
      float h; c = max(c, aaLine(segD(v, l1, tip, h), fw, .5 * p.tu) * .8);
      c = max(c, aaLine(segD(v, tip, r1, h), fw, .5 * p.tu) * .8);
    }
    float rr = length(v);
    c = max(c, aaLine(rr - ROSE_R * .3, fw, .6 * p.tu) * .7);
    c = max(c, aaLine(rr - ROSE_R * 1.08, fw, .6 * p.tu) * .7);
    return c;
  }
  vec4 fieldEarth(P p) {
    float h = earthH(p.q, p.rho);
    float k = h / ${K.toFixed(3)}, kn = floor(k + .5), d = k - kn;
    bool idx = mod(kn, 5.) < .5;
    // The contour's screen width from the terrain's slope (no derivative inside the plate's branch).
    float e = .01, gh = length(vec2(earthH(p.q + vec2(e, 0.), plateRadius(p.q + vec2(e, 0.))) - h, earthH(p.q + vec2(0., e), plateRadius(p.q + vec2(0., e))) - h)) / e;
    float c = aaLine(d, max(gh * p.px / ${K.toFixed(3)}, 1e-5), (idx ? 1. : .5) * uPxU) * (idx ? .88 : .5);
    c *= (1. - smoothstep(.04, .09, p.px)) * step(h, .999);
    c = max(c, earthRose(p, p.tpw));
    return vec4(0., 0., 0., c);
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t,i=e=>e-1,a=(e,t)=>Oe(e,t,n,r),o=[-.6,.8];Ae(a,-3.4,-2.6,3.4,4.4,.045).forEach(([t,i],s)=>{if(s%2)return;let c=(t[0]+i[0])/2,l=(t[1]+i[1])/2;if(Math.hypot(c/n,l/r)<G+.07)return;let u=.035,d=(a(c+u,l)-a(c-u,l))/(2*u),f=(a(c,l+u)-a(c,l-u))/(2*u),p=Math.hypot(d,f)*E;if(p<.6)return;let m=-d/Math.hypot(d,f),h=-f/Math.hypot(d,f),g=w(.5-.5*(m*o[0]+h*o[1]));if(g<.35)return;let _=(.004+.01*g)*Math.min(1.4,p/1.5)/E;e.line([[c,l],[c+m*_,l+h*_]],.3+.45*g,.2+.45*g)});for(let t=0;t<260;t++){let a=t*O/260,s=w(.5-.5*(Math.cos(a)*o[0]+Math.sin(a)*o[1])),c=(.012+.016*s)/E,l=i(G)+.004/E;e.line([j(a,l,n,r),j(a,l+c,n,r)],.35+.4*s,.3+.4*s)}let s=S(128),c=.035;for(let t of[-.5,2.2,3.9]){let[o,l]=j(t,i(G)+.05/E,n,r),u=_e(s,o,l,t,60,1,{step:.012/E,wob:.04,branch:.03,depth:1,steer:(e,t,n)=>{let r=a(e+c,t)-a(e-c,t),i=a(e,t+c)-a(e,t-c);if(Math.hypot(r,i)<1e-6)return n;let o=Math.atan2(-i,-r)-n;for(;o>Math.PI;)o-=O;for(;o<-Math.PI;)o+=O;return n+o*.22},stop:(e,t)=>Math.abs(e)>3.4||t<-2.6||t>4.4});for(let t of u){let n=t.p.length,r=t.p.map((e,r)=>(t.d?.9:1.6)*(.5+.5*r/n)*1.6);e.ribbon(t.p,r,.5,{code:P.FIELD,channel:`g`}),e.line(t.p,.4,.5)}}e.line(M(i(G)+.002/E,n,r,360),1.6,.9,{code:P.LEAF})},uniforms({mood:e}){return{uEarthBand:ke(e?.shares)}}}),Me=e=>1+e/E,Ne=[46,56,74],Pe=Object.freeze([{base:.265,sp:.006,c:[[.06,.245,.03],[.1,.225,.04],[.15,.2,.05],[.2,.185,.045],[.25,.17,.055],[.31,.19,.045],[.36,.215,.04],[.41,.24,.028],[.22,.225,.045],[.13,.24,.035],[.29,.23,.04]]},{base:.13,sp:.004,c:[[.6,.118,.022],[.64,.1,.03],[.69,.085,.034],[.74,.095,.03],[.79,.11,.024],[.83,.12,.016]]},{base:.36,sp:.008,c:[[.78,.34,.025],[.82,.32,.033],[.87,.3,.04],[.92,.31,.034],[.97,.33,.03],[1.02,.345,.022]]},{base:.84,sp:0,c:[[-.06,.76,.12],[.1,.71,.13],[.27,.72,.12],[.45,.71,.13],[.63,.72,.12],[.8,.7,.13],[.98,.74,.12]]},{base:.99,sp:.005,c:[[.12,.95,.04],[.19,.93,.055],[.27,.95,.04]]}]),Fe=Object.freeze([[.18,.43,.9],[.74,.21,.7],[.82,.24,.55]]);function q(){let e=[],t=[];for(let n of Pe){let r=n.c.flatMap(([e,,t])=>[e-t*.8,e+t*.8]),i=Math.min(...r),a=Math.max(...r);for(let[r,o,s]of n.c)e.push([r,o,s,0]),t.push([n.base,n.sp,i,a])}return{puffs:e,bases:t}}var Ie=Object.freeze({id:`air`,glslId:`Air`,metal:Ne,leaf:[196,160,92],enamel:[60,184,173],light:[255,236,190],look:{dark:0,bloom:0,sheen:2,sheenGain:.7,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.4},motif:{scale:1.2,alpha:.95,enamel:.45},frieze:{enamel:.42,band:.1,guil:.14},rim:[Me(.112)-.04,Me(.175)+.04],glsl:`
  uniform vec4 uClouds[40];   // tile x, y, radius (tile widths)
  uniform vec4 uCloudB[40];   // its cloud's base y, drift per second, x0, x1
  uniform float uCloudCount;
  float airCloudX(float x, float sp, float t) { return sp > 0. ? mod(x + sp * t + .4, 1.8) - .4 : x; }
  // The clouds in the tile: k = inside, cB = the puff whose round shades this pixel (L/r, L, r, how far below its centre),
  // u = the union's distance to its edge (tile widths), up = the nearest puff's side (<0 on its top), base line coverage.
  struct Cloud { float k; vec4 cB; float u; float up; float base; };
  Cloud airClouds(P p, float fw) {
    Cloud C; C.k = 0.; C.cB = vec4(9., 0., 0., 0.); C.u = 9.; C.up = 0.; C.base = 0.;
    vec2 q = p.tq;
    int n = int(uCloudCount + .5);
    for (int i = 0; i < n; i++) {
      vec4 c = uClouds[i], b = uCloudB[i];
      float cx = airCloudX(c.x, b.y, p.t);
      vec2 d = (q - vec2(cx, c.y)) * vec2(1., 4. / 3.);
      float L = length(d);
      float k = (1. - smoothstep(c.z - .0025, c.z, L)) * (1. - smoothstep(b.x - .002, b.x, q.y));
      if (k > .5 && L / c.z < C.cB.x) C.cB = vec4(L / c.z, L, c.z, d.y / c.z);
      C.k = max(C.k, k);
      float e = L - c.z;
      if (e < C.u && q.y < b.x) { C.u = e; C.up = d.y / c.z; }
      // The flat base: a hairline under the cloud.
      float shift = airCloudX(b.z, b.y, p.t) - b.z;
      float inX = step(b.z + shift, q.x) * step(q.x, b.w + shift);
      C.base = max(C.base, aaLine((q.y - b.x) * 800., fw, .6 * p.tu) * inX * .45);
    }
    return C;
  }
  Cloud airCloud;
  vec3 groundAir(P p) {
    vec2 q = p.tq; float r = p.rho * REFR0, fw = p.tpw;
    vec3 col = mix(vec3(.80, .83, .86), vec3(.90, .88, .83), smoothstep(0., .75, q.y));
    col *= .95 + .07 * paperGrain(p.tp) + .03 * fbm3(q * 6.);
    Cloud C = airClouds(p, fw); airCloud = C;
    col = mix(col, vec3(.975, .965, .935) * (.97 + .04 * paperGrain(p.tp + 7.)), C.k * .75);
    col += vec3(.06, .05, .02) * exp(-r * r * 2.4) * (.8 + .2 * sin(p.t * .4));
    col += p.glow * .035;
    return col;
  }
  vec4 fieldAir(P p) {
    vec2 q = p.tq, tp = p.tp; float r = p.rho * REFR0;
    Cloud C = airCloud;   // computed once per pixel by groundAir (the ground always runs first)
    // The engraved sky: lines every 4.6 designer pixels, swelling and thinning, heavier toward the top, light round the piece.
    float spx = 4.6;
    float yy = tp.y + 1.4 * sin(tp.x * .013 + q.y * 9.) + .8 * sin(tp.x * .037 + q.y * 23.);
    float fw = p.tpw, li = floor(yy / spx), d = abs(fract(yy / spx) - .5) * spx;
    float tone = (.1 + .55 * pow(clamp(1. - q.y, 0., 1.), 1.6)) * (1. - .55 * exp(-r * r * 2.)) * (1. - C.k);
    float sw = .55 + .45 * sin(tp.x * .02 * (1. + .3 * h21(vec2(li, 3.))) + li * 1.7) * sin(tp.x * .007 + li * .9);
    float th = tone * spx * .4 * (.55 + .75 * sw);
    float ink = clamp((th - d) / fw + .5, 0., 1.) * step(.02, tone);
    // Lines finer than a pixel give way to their average tone (no crawling far away).
    ink = mix(ink, clamp(2. * th / spx, 0., 1.), clamp(fw / spx * 2. - .5, 0., 1.));
    // Inside a cloud: rings that follow the puff's own round, only on its shaded underside.
    float cs = spx / 600. * 1.1, ringD = abs(fract((C.cB.z - C.cB.y) / cs) - .5) * cs * 600.;
    float csh = smoothstep(.05, .85, C.cB.w) * C.k, cth = csh * spx * .3;
    float cfw = p.tpw;
    ink = max(ink, clamp((cth - ringD) / cfw + .5, 0., 1.) * step(.04, csh) * .85 * (1. - clamp(cfw / spx * 2. - .5, 0., 1.)));
    float c = ink * .82;
    // The clouds' scalloped tops (tapering where the round turns down) and their flat bases.
    float ow = max(.3, .85 * pow(clamp((-C.up - .05) / .6, 0., 1.), .35));
    c = max(c, aaLine(C.u * 600., fw, ow * p.tu) * step(C.up, -.05) * .82);
    c = max(c, C.base);
    // Rays of light fanning down from above the tile, broken by the clouds.
    vec2 w = vec2((q.x - .5) / .75, q.y + .3);
    float f = length(w), a = atan(w.y, w.x);
    float ri = clamp(floor((a - 1.5707963) / .95 * 13.5 + 13.5 + .5), 0., 27.);
    float ai = 1.5707963 + (-1. + 2. * ri / 27.) * .95, odd = mod(ri, 2.);
    float len = (odd > .5 ? .62 : .82) + .04 * sin(ri * 2.3);
    vec2 on = vec2(.5 + cos(ai) * f * .75, -.3 + sin(ai) * f);
    float rd = length((q - on) * vec2(600., 800.));
    float along = clamp((f - .38) / (len - .38), 0., 1.);
    float rayOn = step(.38, f) * step(f, len) * step(q.y, .62) * (1. - C.k);
    float rw = max(.2, (odd > .5 ? .4 : .7) * (1. - along) * 1.2);
    c = max(c, aaLine(rd, fw, rw * p.tu) * .3 * rayOn);
    // A band of light slides down the rays.
    float yb = fract(p.t / 11.) * 1.1 - .2, band = max(0., 1. - abs(q.y - yb) / .14);
    vec3 light = vec3(1., .949, .839) * band * rayOn * (aaLine(rd, fw, 2.4 * p.tu) * .12 + exp(-rd * rd / 8.) * .45);
    // Swallows gliding across the sky.
    const vec3 SWALLOW[3] = vec3[3](${Fe.map(e=>`vec3(${e.map(e=>e.toFixed(3)).join(`, `)})`).join(`, `)});
    for (int i = 0; i < 3 * int(uLoops); i++) {
      vec3 B = SWALLOW[i];
      vec2 bp = vec2((mod(B.x + p.t * .004 * B.z + .2, 1.4) - .2) * 600., (B.y + .01 * sin(p.t * .3 + B.x * 9.)) * 800.);
      float k = 11. * B.z, fl = .25 * sin(p.t * 1.1 + B.x * 7.);
      if (length(tp - bp) > k * 1.6) continue;
      float wing = taper3(tp, bp + vec2(-k, -k * (.15 + fl)), bp + vec2(-k * .5, -k * (.35 + fl)), bp, 1.3 * B.z * p.tu, fw);
      wing = max(wing, taper3(tp, bp, bp + vec2(k * .6, -k * (.38 + fl)), bp + vec2(k * 1.1, -k * (.12 + fl)), 1.3 * B.z * p.tu, fw));
      float tail = taper3(tp, bp + vec2(-k * .05, 0.), bp + vec2(-k * .4, k * .22), bp + vec2(-k * .7, k * .14), .7 * B.z * p.tu, fw);
      c = max(c, max(wing * .9, tail * .8));
    }
    // The wind of 102 still turns round the piece: twelve long spirals on the plate.
    float R1 = ${Me(.2).toFixed(4)}, b = .19, N = 12.;
    float u = log(max(p.rho, 1e-3) / R1) / b, sOn = step(0., u) * step(u, 3.6);
    // Screen widths from the derivatives taken in uniform flow (none inside a plate's branch: see P.tpw).
    float fu = p.drho / (max(p.rho, 1e-3) * b), ph = (p.th - u - p.t * .025) / (6.2831853 / N), kk = floor(ph + .5), fd = (p.dth + fu) / (6.2831853 / N);
    fd = fd > .5 ? fu / (6.2831853 / N) : fd;
    bool heavy = mod(kk, 3.) < .5;
    float taper = pow(max(sin(3.14159 * clamp(u / 3.6, 0., 1.)), 0.), .5);
    c = max(c, aaLine(ph - kk, fd, (heavy ? 1.3 : .8) * uPxU * taper) * (heavy ? .55 : .38) * sOn * (1. - C.k) * (1. - smoothstep(.05, .1, p.px)));
    return vec4(light, c);
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t;e.line(M(Me(.175)-1,n,r,360),1.5,.9,{code:P.LEAF})},uniforms(){let{puffs:e,bases:t}=q();return{uClouds:e,uCloudB:t,uCloudCount:e.length}}}),Le=e=>1+e/E,Re=Le(.5),ze={scorpius:{g0:[.02,.03,.055],g1:[.01,.016,.03],warm:[.1,.075,.045],mw:[.1,.02,.36,.11],mwa:1},leo:{g0:[.04,.02,.016],g1:[.016,.009,.008],warm:[.13,.07,.03],mw:[.9,0,-.42,.09],mwa:1},pisces:{g0:[.016,.034,.058],g1:[.008,.016,.03],warm:[.06,.07,.07],mw:[.62,0,.2,.085],mwa:1}},Be={g0:[.03,.026,.02],g1:[.012,.011,.009],warm:[.1,.08,.05],mw:[.2,0,.3,.1],mwa:1},Ve={g0:[.024,.024,.048],g1:[.01,.01,.024],warm:[.08,.075,.08],mw:[.75,0,-.25,.1],mwa:1},He=Object.freeze({...ze,aries:{...ze.leo,mw:[.15,0,.4,.09],mwa:1},sagittarius:{...ze.leo,mw:[.5,0,.05,.11],mwa:1},cancer:{...ze.pisces,mw:[.3,0,.3,.1],mwa:1},taurus:Be,virgo:{...Be,mw:[.8,0,-.35,.09]},capricorn:{...Be,mw:[.45,0,.1,.1],mwa:1},gemini:Ve,libra:{...Ve,mw:[.25,0,.35,.1]},aquarius:{...Ve,mw:[.5,0,-.1,.11],mwa:1}}),Ue=[232,198,128],We=Object.freeze({id:`sign`,glslId:`Sign`,metal:Ue,leaf:Ue,enamel:[120,170,210],light:[255,236,190],look:{dark:1,bloom:.38,sheen:0,sheenGain:.7,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:.8},motif:{scale:1.25,alpha:.95,enamel:.3},frieze:{enamel:.46,band:.12},rim:[Le(.118)-.05,Le(.148)+.04],defaults:{uSignG0:[.02,.03,.055],uSignG1:[.01,.016,.03],uSignWarm:[.1,.075,.045],uSignMW:[.1,.02,.36,.11],uSignMWA:1},glsl:`
  uniform vec3 uSignG0, uSignG1, uSignWarm;
  uniform vec4 uSignMW;
  uniform float uSignMWA;
  vec3 groundSign(P p) {
    vec2 q = p.tq;
    vec3 col = mix(uSignG0, uSignG1, smoothstep(0., 1., q.y));
    col *= .86 + .22 * fbm3(p.g * vec2(1.4, 2.2) + 3.);
    float breath = .82 + .18 * sin(p.t * .45);
    // Warm light under the figure (its place on the plate) and under the piece.
    float rs = length((p.g - vec2(uFig.x, uFig.y) * REFR0) * vec2(.8, 1.1)), r = p.rho * REFR0;
    col += uSignWarm * exp(-rs * rs / .32) * breath * uAuxOn;
    col += uSignWarm * .45 * exp(-r * r / .2);
    // The Milky Way: an engraver's stipple cloud with dark lanes.
    vec2 mq = q - uSignMW.xy, md = vec2(sin(uSignMW.z), cos(uSignMW.z));
    float al = dot(mq, md), dd = length(mq - md * al), wv = uSignMW.w * (1. + .4 * sin(al * 6. + 1.));
    float band = exp(-dd * dd / (wv * wv)) * smoothstep(-.1, .1, al);
    float lane = smoothstep(.48, .62, fbm3(q * vec2(10., 5.) + md * al * 3. + 5.));
    float mwI = band * (.25 + .9 * fbm3(q * vec2(7., 9.) + al * 2.)) * (1. - lane * .75) * uSignMWA;
    col += vec3(.42, .40, .36) * mwI * .2;
    // Fine stipple (designer pixels of 1.2) and a few stars that twinkle; faded where a cell is under a pixel.
    float per = p.tpw, far = clamp((per - 1.2) / 1.2, 0., 1.);
    float stp = h21(floor(p.tp / 1.2) + 11.);
    col += vec3(.95, .86, .66) * step(1. - mwI * .07, stp) * .22 * (1. - far);
    vec2 cell = floor(p.tp / 6.); float h = h21(cell + 3.);
    if (h > .992) { vec2 c = (cell + h22(cell)) * 6.; float d = length(p.tp - c) / per; col += vec3(.7, .68, .8) * exp(-d * d * .6) * (h - .992) * 50. * (.6 + .4 * sin(p.t * 1.1 + h * 90.)); }
    col += p.glow * .06;
    col *= .93 + .09 * paperGrain(p.tp);
    return col;
  }
  vec4 fieldSign(P p) { return vec4(0.); }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t,i=Re-1,a=1/E;e.line(M(i,n,r,360),1,.5),e.line(M(i+.03*a,n,r,360),.5,.4),e.line(M(i+.075*a,n,r,360),.5,.3);for(let t=0;t<360;t+=2){let o=t*Math.PI/180,s=(t%10==0?.03:.014)*a;e.line([j(o,i,n,r),j(o,i+s,n,r)],t%10==0?.6:.4,t%10==0?.42:.26)}for(let t=0;t<12;t++)e.star(j(t*O/12,i+.052*a,n,r),2.2,.55,4,0)},uniforms({sign:e}){let t=He[e]??ze.scorpius;return{uSignG0:t.g0,uSignG1:t.g1,uSignWarm:t.warm,uSignMW:t.mw,uSignMWA:t.mwa}}}),Ge=Object.freeze([se,ye,Se,je,Ie,We]),Ke=Object.freeze(Object.fromEntries(Ge.map((e,t)=>[e.id,t])));function qe(e){return Ge[Ke[e]??Ke.atlas]}var Je=(e,t,n,r,i,a,o=26)=>{let s=Math.hypot(n-e,r-t),c=Math.atan2(r-t,n-e),l=[];for(let n=1;n<=o;n++){let r=i*O*n/o;l.push([e+s*Math.exp(-a*r)*Math.cos(c-r),t+s*Math.exp(-a*r)*Math.sin(c-r)])}return l},J=(...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]),Ye=Object.freeze({water:(()=>{let e=b([0,.1],[.26,.1],[.3,.88],[.54,.88],16),t=b([.54,.88],[.77,.88],[.86,.62],[.71,.48],12),n=Je(.63,.62,.71,.48,1.25,.2,30);return{lines:[{p:J(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.3},{p:b([.17,.1],[.36,.12],[.38,.64],[.55,.7],12),w:.5,k:.6},{p:b([.33,.1],[.45,.14],[.47,.46],[.6,.5],10),w:.4,k:.6,tone:1}],fill:J(e,t,[[.71,.48],[.74,.3],[.76,.1]]),dots:[[.83,.8,.028],[.89,.7,.022],[.9,.86,.018]]}})(),fire:(()=>{let e=b([0,.1],[.17,.12],[.13,.64],[.33,.93],14),t=b([.33,.93],[.42,1.06],[.6,1.02],[.57,.86],10),n=Je(.5,.86,.57,.86,1.1,.3,18),r=b([.57,.85],[.63,.62],[.5,.36],[.76,.1],14);return{lines:[{p:J(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.2},{p:r,w:.9,k:.55},{p:b([.2,.12],[.27,.4],[.27,.64],[.41,.76],12),w:.55,k:.6,tone:1},{p:b([.86,.1],[.93,.22],[.9,.36],[.98,.46],8),w:.45,k:.6,tone:1}],fill:J(e,t,[[.57,.86]],r),dots:[]}})(),earth:(()=>{let e=b([.04,.1],[.08,.86],[.92,.86],[.96,.1],22),t=b([.19,.1],[.23,.6],[.77,.6],[.81,.1],16),n=b([.33,.1],[.37,.37],[.63,.37],[.67,.1],12),r=Array.from({length:17},(e,t)=>{let n=t*O/16;return[.5+.045*Math.cos(n),.2+.03*Math.sin(n)]});return{lines:[{p:e,w:1.15,k:.5,swell:.25},{p:t,w:.65,k:.55},{p:n,w:.45,k:.6,tone:1}],fill:e,fill2:r,dots:[[0,.44,.024],[0,.6,.016],[.5,.97,.016]]}})(),air:(()=>{let e=b([0,.1],[.36,.1],[.4,.6],[.63,.66],16),t=Je(.66,.5,.63,.66,1.35,.13,34);return{lines:[{p:J(e,[e[e.length-1],...t]),w:1.05,k:.45,swell:.2},{p:b([.66,.82],[.82,.9],[1,.78],[1.22,.84],14),w:.45,k:.8,tone:1},{p:b([.8,.3],[.92,.34],[1.06,.26],[1.24,.3],12),w:.4,k:.8}],fill:J(e,[[.63,.66],[.8,.5],[.8,.1]]),dots:[]}})()});function Xe(e,t,{width:n=.085/E,gap:r=.006/E,lift:i=.045/E}={}){let a=new Map(e.motifs.map(e=>[e.id,e.slot])),o=e.parts.filter(e=>e.stone.stone).map(e=>({id:e.stone.id,element:e.stone.element,a:Math.atan2(e.q[1],e.q[0]),rho:Math.hypot(...e.q),rg:e.r}));if(o.length<3)return null;o.sort((e,t)=>e.a-t.a);let s=0,c=-1;for(let e=0;e<o.length;e++){let t=((o[(e+1)%o.length].a-o[e].a)%O+O)%O||O;t>c&&(c=t,s=(e+1)%o.length)}let l=o.slice(s).concat(o.slice(0,s)),u=[];l.forEach((e,t)=>{let n=e.a;if(t)for(;n<=u[t-1];)n+=O;u.push(n)});let d=0;for(let e of l)a.has(e.id)&&(d=a.get(e.id)),e.slot=a.get(e.id)??d;let f=l.length,p=n*t.ornament,m=i*t.backRoom,h=e=>{if(e<0)return k(u[f-1]-O,u[0],e+1);if(e>f-1)return k(u[f-1],u[0]+O,e-(f-1));let t=Math.floor(e);return k(u[t],u[Math.min(f-1,t+1)],e-t)},g=[];for(let e=0;e<=720;e++){let n=e*O/720,i=0,a=0;for(let e of l){let t=Math.abs(((n-e.a+Math.PI)%O+O)%O-Math.PI),r=Math.exp(-((t/.5)**2));i+=r,a+=r*(e.rho+e.rg*.92)}g.push(a/i+r*t.ornament+m*Math.max(0,Math.sin(n))**1.5)}let _=e=>{let t=(e%O+O)%O/O*720,n=Math.floor(t);return k(g[n],g[Math.min(720,n+1)],t-n)},v=(e,t)=>{let n=h(e-.5),r=_(n)+t*p;return[r*Math.cos(n),r*Math.sin(n)]},y=g.map(e=>[e,e+1.4*p]);return{S:l,n:f,W:p,at:v,inner:Math.min(...y.map(e=>e[0])),outer:Math.max(...y.map(e=>e[1]))}}function Ze(e,t,n={}){if(!t)return!1;let{S:r,n:i,at:a}=t,o=n.enamel??.45,s=n.guil??.2;for(let t=0;t<i;t++){let i=r[t],c=F(i.slot),l=Ye[i.element]??Ye.water,u=e=>e.map(([e,n])=>a(e+t,n));n.band&&e.fill([a(t,-.02),a(t+1.04,-.02),a(t+1.04,1.06),a(t,1.06)],{code:c,channel:`g`,alpha:n.band});for(let n=0;n<16;n++){let r=t+(n+.5)/16;e.line([0,.25,.5,.75,1.04].map(e=>a(r+.06*Math.sin(e*6.3+n*.5),e)),.42,s,{code:c})}l.fill&&o>0&&e.fill(u(l.fill),{code:c,channel:`g`,alpha:o}),l.fill2&&o>0&&e.fill(u(l.fill2),{code:c,channel:`rg`,alpha:Math.min(1,o*1.6)});for(let t of l.lines){let n=u(t.p),r=n.length;e.ribbon(n,n.map((e,n)=>{let i=n/(r-1);return Math.max(.28,t.w*1.05*Math.sin(Math.PI*w(i*.96+.02))**+t.k*(1+(t.swell||0)*Math.sin(Math.PI*i)))}),.95,{code:c})}i.element!==`air`&&e.star(a(t+.97,.9),2.6,.85,4,.3,{code:c});for(let[n,r,i]of l.dots??[])e.dot(a(t+n,r),i*34,.85,{code:c})}let c=(t,n,r)=>{let o=[];for(let e=0;e<=i*8;e++)o.push(a(e/8,t));e.line(o,n,r,{code:P.FIELD})};c(.1,.55,.7),c(-.05,.5,.55),c(-.13,.45,.4),c(1.06,.8,.95),c(1.16,.8,.8),c(1.4,.5,.55);for(let t=0;t<i*3;t++)e.dot(a((t+.5)/3,1.28),1.05*(t%2?.8:1.15),.85);return!0}Object.freeze([`frieze`,`motifs`,`band`]);function Qe(e,t=10){let n=[],r=e.length;for(let i=0;i<r;i++){let a=e[(i-1+r)%r],o=e[i],s=e[(i+1)%r],c=e[(i+2)%r];for(let e=0;e<t;e++){let r=e/t,i=r*r,l=i*r;n.push([0,1].map(e=>.5*(2*o[e]+(-a[e]+s[e])*r+(2*a[e]-5*o[e]+4*s[e]-c[e])*i+(-a[e]+3*o[e]-3*s[e]+c[e])*l)))}}return n}function $e(e,{strand:t,plate:n,motifs:r,frame:i,mode:a=n.ornament??`frieze`}){if(a===`frieze`&&i){let r=Xe(t,i);if(r&&Ze(e,r,n.frieze??{}))return{form:`frieze`,band:[r.inner,r.outer]}}if(a!==`band`||t.motifs.length<3){for(let e of t.motifs)r.draw(ae(e),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:F(e.slot)});return{form:`motifs`}}let o=t.motifs,s=.1,c=Qe(o.map(e=>[e.base[0]+e.out[0]*s*.5,e.base[1]+e.out[1]*s*.5]),12),l=e=>{let t=c[(e-1+c.length)%c.length],n=c[(e+1)%c.length],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1;return[(n[1]-t[1])/r,-(n[0]-t[0])/r]},u=l(0)[0]*o[0].out[0]+l(0)[1]*o[0].out[1]<0?-1:1,d=(e,t)=>{let[n,r]=l(e);return[c[e][0]+n*t*u,c[e][1]+r*t*u]};return o.forEach((t,i)=>{let a=i*12-6,o=Array.from({length:13},(e,t)=>(a+t+c.length)%c.length),f=F(t.slot);for(let t of[-.1/2,s/2])e.line(o.map(e=>d(e,t)),.7,n.motif.alpha,{code:f});for(let e of[3,9]){let a=o[Math.round(e)],[d,p]=l(a),m=[d*u,p*u],h=[c[a][0]-m[0]*s*.35,c[a][1]-m[1]*s*.35];r.draw(x((C[t.element]??C.water)(i),h,m,t.scale*.45),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:f,widthScale:.7})}}),{form:`band`}}var et=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.2),Y=(...e)=>e.reduce((e,t,n)=>e.concat(n?t.slice(1):t),[]),X=(e,t,n=10)=>Array.from({length:n+1},(r,i)=>[e[0]+(t[0]-e[0])*i/n,e[1]+(t[1]-e[1])*i/n]),tt=(e,t,n,r=0,i=40,a=1)=>Array.from({length:i+1},(o,s)=>{let c=r+a*O*s/i;return[e+n*Math.cos(c),t+n*Math.sin(c)]}),Z=(e,t=.012,n=.045)=>({p:e,w:et(e.length-1,t,n)}),nt=e=>e.map(([e,t])=>[-e,t]),rt=e=>e.map(([e,t])=>[-e,-t]);function it(){let e=Y(b([-.215,-.13],[-.27,.26],[.02,.52],[.19,.4],30),b([.19,.4],[.36,.27],[.3,.02],[.15,-.12],26),b([.15,-.12],[.03,-.24],[.08,-.46],[.3,-.42],26),b([.3,-.42],[.44,-.4],[.5,-.3],[.43,-.22],16)),t=e.length;return{p:e,w:e.map((e,n)=>{let r=n/(t-1);return .012+.05*Math.sin(Math.PI*w((r-.04)/.78))**1.3+.012*Math.exp(-(((r-.97)/.05)**2))})}}var at=()=>Y(X([-.4,-.42],[-.4,.28]),b([-.4,.28],[-.4,.46],[-.16,.46],[-.16,.28],14),X([-.16,.28],[-.16,-.42])),ot=Object.freeze({aries:()=>[Z(Y(X([0,-.48],[0,-.05],12),b([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),b([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))),Z(nt(Y(b([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),b([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))))],taurus:()=>[Z(tt(0,-.17,.23,Math.PI/2,48),.02,.03),Z(b([-.44,.46],[-.3,.04],[.3,.04],[.44,.46],30))],gemini:()=>[Z(b([-.36,.44],[-.12,.34],[.12,.34],[.36,.44],20),.014,.03),Z(b([-.36,-.44],[-.12,-.34],[.12,-.34],[.36,-.44],20),.014,.03),Z(b([-.15,.37],[-.19,.1],[-.19,-.1],[-.15,-.37],20)),Z(b([.15,.37],[.19,.1],[.19,-.1],[.15,-.37],20))],cancer:()=>{let e=Y(tt(-.18,.12,.1,-Math.PI/2,30,-1),b([-.18,.22],[0,.36],[.28,.32],[.4,.14],20));return[Z(e,.012,.04),Z(rt(e),.012,.04)]},leo:()=>[it()],virgo:()=>[Z(at()),Z(Y(b([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),X([.08,.28],[.08,-.2]),b([.08,-.2],[.08,-.5],[.42,-.48],[.36,-.16],16),b([.36,-.16],[.3,.08],[.04,-.06],[.2,-.46],16)))],libra:()=>[Z(X([-.42,-.32],[.42,-.32],20),.016,.02),Z(Y(X([-.42,-.02],[-.17,-.02],8),b([-.17,-.02],[-.32,.46],[.32,.46],[.17,-.02],30),X([.17,-.02],[.42,-.02],8)))],scorpius:()=>[Z(at()),Z(Y(b([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),X([.08,.28],[.08,-.3]),b([.08,-.3],[.08,-.48],[.3,-.48],[.42,-.3],16))),Z(Y(X([.27,-.33],[.42,-.3],6),X([.42,-.3],[.4,-.15],6)),.012,.02)],sagittarius:()=>[Z(X([-.4,-.4],[.4,.4],30)),Z(Y(X([.1,.4],[.4,.4],8),X([.4,.4],[.4,.1],8)),.014,.025),Z(X([-.25,.05],[.05,-.25],10),.012,.025)],capricorn:()=>[Z(Y(b([-.44,.32],[-.36,.3],[-.28,-.2],[-.2,-.4],16),b([-.2,-.4],[-.12,-.1],[-.04,.34],[.06,.34],16),b([.06,.34],[.16,.34],[.12,-.1],[.18,-.26],16),b([.18,-.26],[.24,-.46],[.46,-.38],[.4,-.18],14),b([.4,-.18],[.34,0],[.14,-.06],[.14,-.24],14),b([.14,-.24],[.14,-.44],[0,-.52],[-.1,-.46],12)))],aquarius:()=>[.14,-.2].map(e=>Z(Y(...[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]].slice(0,4).map((t,n,r)=>{let i=[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]];return b([i[n][0],i[n][1]+e],[i[n][0]+.07,i[n][1]+e+(n%2?-.03:.05)],[i[n+1][0]-.07,i[n+1][1]+e+(n%2?.05:-.03)],[i[n+1][0],i[n+1][1]+e],10)})),.012,.035)),pisces:()=>[Z(b([-.46,.44],[-.18,.26],[-.18,-.26],[-.46,-.44],34),.012,.05),Z(b([.46,.44],[.18,.26],[.18,-.26],[.46,-.44],34),.012,.05),{p:Array.from({length:13},(e,t)=>[-.25+.5*t/12,.015*Math.sin(Math.PI*t/12)]),w:et(12,.016,.014)}]}),st=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.1),ct=Object.freeze({scorpius:()=>{let e=Y(b([-.62,.28],[-.56,.36],[-.48,.36],[-.46,.26],8),b([-.46,.26],[-.46,.1],[-.46,-.2],[-.46,-.42],12)),t=Y(b([-.46,.16],[-.38,.42],[-.18,.42],[-.15,.16],12),b([-.15,.16],[-.15,0],[-.15,-.2],[-.15,-.42],10)),n=Y(b([-.15,.16],[-.07,.42],[.13,.42],[.16,.16],12),b([.16,.16],[.16,-.1],[.14,-.36],[.32,-.42],12),b([.32,-.42],[.44,-.45],[.52,-.36],[.56,-.22],8));return[{p:e,w:st(e.length-1,.03,.07)},{p:t,w:st(t.length-1,.03,.08)},{p:n,w:st(n.length-1,.03,.08)},{p:[[.56,-.2],[.43,-.24]],w:[.06,.02]},{p:[[.56,-.2],[.6,-.34]],w:[.06,.02]}]},leo:()=>{let e=it();return[{p:e.p.map(([e,t])=>[e*1.5-.18,t*1.5-.07]),w:e.w.map(e=>e*1.5)}]},pisces:()=>ot.pisces().map(e=>({p:e.p.map(([e,t])=>[e*1.05,t*1.05]),w:e.w.map(e=>e*1.05)}))}),lt=e=>ct[e]??ot[e]??null;Object.freeze(Object.keys(te));function ut(e,t){let n=e.ey+3.4,r=T(t,.03)?.GEO.box;return{centre:[0,n],S:1.74,k:2.1,spacing:.022,...r?{box:r}:{}}}function dt(e){let{centre:[t,n],S:r,k:i}=e,[a,o,s,c]=e.box??[-1.35,-.85,1.35,.85],l=.06;return[t+(a-l)*r,n+(o-l)*r*i,t+(s+l)*r,n+(c+l)*r*i]}var ft=Object.freeze({phone:{top:.125,gap:.015,width:.94},wide:{top:.1,gap:.025,width:.62}});function pt({sign:e,frame:t,screenOf:n,W:r,H:i}){let a=T(e,.03);if(!a)return null;let o=a.GEO.box,s=r/i<.95?ft.phone:ft.wide,c=o[2]-o[0],l=o[3]-o[1],u=n(0,t.ey+.32)[1]-s.gap,d=s.top,f=e=>{let r=t.ey+.3,i=t.ey+30;for(let t=0;t<44;t++){let t=(r+i)/2,[,a,o]=n(0,t);o<1&&a>e?r=t:i=t}return r},p=Math.min((u-d)*i/l,s.width*r/c),m=null,h=0;for(let e=0;e<24;e++){let e=f((((d+u)/2-h)*i+(o[1]+o[3])/2*p)/i),[t]=n(-.5,e),[a]=n(.5,e),[,c]=n(0,e+.5),[,l]=n(0,e-.5),g=Math.abs(a-t)*r,_=Math.abs(l-c)*i,v=p/Math.max(g,.001),y=Math.min(4,Math.max(1,g/Math.max(_,.001)));m={centre:[-(o[0]+o[2])/2*v,e],S:v,k:y,box:o,spacing:Math.max(.012,Math.min(.05,Math.round(3.8/p*400)/400))};let b=n(0,e+o[3]*v*y)[1],x=n(0,e+o[1]*v*y)[1],[S]=n(m.centre[0]+o[0]*v,e),[C]=n(m.centre[0]+o[2]*v,e),w=Math.min((u-d)/Math.max(x-b,1e-4),s.width*r/Math.max((C-S)*r,.001));if(Math.abs(w-1)<.01&&b>=d-.005&&x<=u+.005)break;h+=(b+x)/2-(d+u)/2,p*=Math.min(w*.998,1.5)}return m}function mt(e,{sign:t,frame:n,place:r=ut(n,t)}){let i=lt(t);if(!i)return;let a=T(t,r.spacing);if(a){let{F:t,GEO:n}=a,{centre:[i,o],S:s,k:c}=r,l=([e,t])=>[i+e*s,o+t*s*c],[u,d,f,p]=n.box,m=(u+f)/2,h=(d+p)/2,g=(f-u)/2,_=(p-d)/2;for(let t=Math.ceil((u-m)/.25)*.25;t<=g;t+=.25){let n=[];for(let e=-_;e<=_+1e-6;e+=.05)n.push([m+t+.04*e*e,h+e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(g*.92))**4)))}for(let t=Math.ceil((d-h)/.25)*.25;t<=_;t+=.25){let n=[];for(let e=-g;e<=g+1e-6;e+=.05)n.push([m+e,h+t+.03*e*e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(_*.82))**4)))}let v=(t,n)=>{let r=t.pts.map(l),i=r.length;i<2||(t.closed?e.line(r,t.w,n,{close:!0}):e.ribbon(r,r.map((e,n)=>Math.max(.25,t.w*Math.sin(Math.PI*w(n/(i-1)*.96+.02))**+t.k)),n))};for(let t of n.parts){let r=t.P,i=r.alpha??1;for(let n of t.runs)e.ribbon(n.pts.map(l),n.wd.map(e=>Math.max(.3,e*1.25)),.85*i);for(let[n,r,a]of t.dots)e.dot(l([n,r]),a*.62,.85*i);for(let e of t.extra)v(e,.95*i);for(let n of t.olRuns)e.ribbon(n.pts.map(l),n.w.map(e=>e*1.25),i);for(let e of n.strokes)e.after===r.id&&v(e,e.a)}for(let e of n.strokes)e.after||v(e,e.a);let y=t.stars.map(([e,t])=>l([e,t]));for(let[n,r]of t.edges??[])e.line([y[n],y[r]],.6,.42);t.stars.forEach(([,,t],n)=>{let r=w(3.8-t,.8,3)*2.6;e.star(y[n],r*1.35,1,t<2?8:t<3?6:4,.2),t<1.8&&e.line(Array.from({length:25},(e,t)=>{let i=t*O/24,a=r*2.1/(E*600);return[y[n][0]+a*Math.cos(i),y[n][1]+a*Math.sin(i)]}),.55,.55)})}let o=.085/E*n.ornament,s=[0,.03/E*n.ornament],c=(e,t=120)=>Array.from({length:t+1},(n,r)=>{let i=r*O/t;return[s[0]+e*Math.cos(i),s[1]+e*Math.sin(i)]});e.line(c(o),1.1,.85),e.line(c(o*1.12),.5,.6),e.line(c(o*.88),.45,.45);for(let t=0;t<36;t++){let n=t*O/36,r=o*.88,i=o*(t%3==0?.8:.84);e.line([[s[0]+r*Math.cos(n),s[1]+r*Math.sin(n)],[s[0]+i*Math.cos(n),s[1]+i*Math.sin(n)]],.45,.5)}let l=o*.62,u=e=>e*l*E*600*1.1;e.glyph(i().map(e=>({p:e.p.map(([e,t])=>[s[0]+e*l,s[1]+t*l]),w:e.w})),e=>e.w.map(u))}var ht=Object.freeze({period:15,window:12,samples:[-16,-8,0,8,16],gain:.5}),gt=[[-18.3,-3.2],[-16.8,-.2],[-15,1.6],[-12.9,2.6],[-8.4,3.8],[-3.8,4.2],[.6,5.6],[4,10.4],[8,11.4],[12,10.6],[15.2,8]].map(([e,t])=>[(e+2)/19,(t+1)/19]),_t=Object.freeze({scorpius:{glow:[`body`,`tail`,`telson`]},leo:{glowLine:gt},pisces:{glow:[`cordW`,`cordN`]}});function vt(e,t=.022){let n=T(e,t);if(!n)return null;let{GEO:r}=n,i=n.F.glowLine||n.F.glow?n.F:_t[e]??{};if(i.glowLine)return ee(i.glowLine,!1,12);let a=(i.glow??[]).map(e=>r.parts.find(t=>t.P.id===e)?.geo?.sp).filter(Boolean);return a.length?[].concat(...a):r.parts.map(e=>e.geo?.sp).filter(e=>e?.length>1).sort((e,t)=>t.length-e.length)[0]??null}function yt(e,t,n=[]){let{period:r,window:i,samples:a,gain:o}=ht;if(!e?.length){for(let e=0;e<a.length;e++)n[e]=[0,0,0];return n}let s=e.length,c=t/r%1*(s+40)-20;return a.forEach((t,r)=>{let a=c+t,l=Math.max(0,Math.min(s-1,Math.round(a))),u=+(a>=0&&a<=s-1);n[r]=[e[l][0],e[l][1],u*o*Math.exp(-((t/i)**2))]}),n}function bt(e){let t=T(e,.025);if(!t)return[];let{F:n}=t;return n.stars.map(([e,t,r],i)=>[e,t,Math.min(3,Math.max(.8,3.8-r))*2.6*4.5/240*.55,+(i===(n.alpha??0))])}function xt(e,{sign:t,place:n}){let r=T(t,n.spacing);if(!r)return!1;let{centre:[i,a],S:o,k:s}=n,c=([e,t])=>[i+e*o,a+t*o*s];for(let t of r.GEO.parts)(t.P.alpha??1)<.7||e.fill(t.geo.outline.map(c),{channel:`g`,alpha:1,only:`aux`});return!0}function St({plate:e,frame:t,strand:n,mood:r,sign:i=null,place:a=void 0,near:o,aux:s=null,ornament:c=void 0}){let l=me({near:o,aux:s}),u=Object.freeze({draw(e,{alpha:t=1,enamel:n=.3,widthScale:r=1,code:i=0}={}){for(let a of e)a.fill&&n>0&&l.fill(a.q,{code:i,channel:`g`,alpha:n}),a.close?l.line(a.q,a.w*1.25*r,t,{code:i,close:!0}):l.taper(a.q,a.w*1.9*r,t,.5,{code:i})}});e.paint(l,{frame:t,strand:n,mood:r,motifs:u});let d=$e(l,{strand:n,plate:e,motifs:u,frame:t,mode:c});return i&&mt(l,{sign:i,frame:t,...a?{place:a}:{}}),i&&s&&a&&xt(l,{sign:i,place:a}),{strokes:l.strokes,ornament:d.form,band:d.band??null}}var Ct=`
  #define MAXS 48
  #define REFR0 .29
  uniform float uTime, uPlate, uStoneCount, uPxU, uStrength, uReveal, uSolo, uLow;
  // Q4: the stones' light, wash and reflection baked on the plate when the design or the plate changes (rgb, w):
  // A = glow + wash weight, B = wash colour, C = reflection; uBakeRect maps plate units to the bake; uBaked 1 once
  // every stone's entrance is over (age > uBakeAge), so the per-pixel loop only runs while a stone inks in.
  uniform sampler2D uBakeA, uBakeB, uBakeC;
  uniform vec4 uBakeRect;
  uniform float uBaked;
  uniform vec3 uQx, uQy, uMetal, uLeaf, uEnamel, uLightCol;
  uniform vec2 uEllipse, uRes, uRing;   // uRing: the fire plate's walking ring (radius, strength)
  uniform vec4 uStoneA[MAXS];   // plate x, y, radius, ink start (s)
  uniform vec4 uStoneB[MAXS];   // light colour (glow), element index
  uniform vec4 uStoneC[MAXS];   // stone colour, motif tint
  uniform vec4 uEntrance;       // rim start, wave start, full-ink start, motif growth seconds
  uniform vec4 uRim;            // stringing start angle, direction, rim band inner, outer (plate radius)
  uniform vec4 uLook;           // dark plate (1) or paper (0), bloom gain, sheen mode (0 conic, 1 pulse, 2 leaf only), sheen gain
  uniform vec4 uLook2;          // enamel opacity, motif tint, glow gain, line alpha
  uniform vec4 uLook3;          // reflection gain, heat gain, wave gain, paper strength
  uniform sampler2D uNear, uAux;
  uniform vec4 uNearWarp;       // ax, bx, ay, by
  uniform vec2 uNearT;          // Tx, Ty
  uniform vec4 uAuxRect;        // x0, y0, x1, y1 (plate units)
  uniform float uAuxOn;
  uniform vec4 uShares;         // water, fire, earth, air
  uniform vec3 uPig[4];         // the elements' pigments (atlas, earth)
  // The plate as the designer's 3:4 tile saw it: the view the plate was laid out under (a plane-to-clip homography,
  // held after the entrance so everything drawn in tile space stays on the plate when the person turns or zooms).
  uniform mat3 uH0;
  uniform vec4 uFig;            // the sign's figure on the plate: centre x, y, plate units per figure unit across, in depth
  uniform vec3 uFigL[5];        // the figure's travelling light: points in figure units and their weight
  uniform vec4 uFigStar[24];    // the constellation on the figure: x, y (figure units), glow radius (figure units), 1 = the brightest star
  uniform float uFigStars;
  uniform vec3 uFigTint;        // the brightest star leans to the strand's first stone's light
  uniform float uLoops;         // 1: keeps short loops as loops (a constant bound would be unrolled by the compiler)
  float h21(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
  vec2 h22(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.xx + p3.yz) * p3.zy); }
  uniform sampler2D uNoise;
  // Value noise from a small random texture (bilinear): one read instead of four hashes.
  float vn(vec2 p) { return textureLod(uNoise, (p + .5) / 256., 0.).r; }
  float fbm(vec2 p) { float s = 0., a = .5; for (int i = 0; i < 5; i++) { s += a * vn(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + vec2(3.1, 1.7); a *= .5; } return s; }
  float fbm3(vec2 p) { float s = 0., a = .5; for (int i = 0; i < 3; i++) { s += a * vn(p); p = mat2(1.6, 1.2, -1.2, 1.6) * p + vec2(3.1, 1.7); a *= .5; } return s / .875; }
  float smoothf(float a, float b, float x) { return smoothstep(a, b, x); }
  // Noise whose fine detail fades where it would be smaller than a pixel (no crawling under a moving camera).
  float fineNoise(vec2 p, float lod) { return mix(vn(p), .5, clamp(lod * 1.5 - .5, 0., 1.)); }

  // Everything one pixel of plate needs.
  // tq: the point in the designer's tile (x in tile widths, y in tile heights, from the top left); tp: the same in the
  // designer's pixels (600 x 800); tu: device pixels per designer pixel there.
  struct P { vec2 q; vec2 g; float rho; float th; float t; float lod; vec3 glow; vec3 wash; float washW; vec3 flare; float ink; float full; float px;
    vec2 tq; vec2 tp; float tu; float tpw; float drho; float dth; vec2 dqx; vec2 dqy; };
  // The screen width of a quantity whose gradient over the plate is g (a derivative-free fwidth for the plates' branches).
  float fwq(P p, vec2 g) { return abs(dot(g, p.dqx)) + abs(dot(g, p.dqy)); }

  // A line at signed distance d (any units) whose screen derivative is fw; width in device px. Hairlines below one
  // pixel keep one pixel and give up alpha instead (crisp, no breaking).
  float aaLine(float d, float fw, float wpx) {
    float w = max(wpx, 1.); float c = clamp(w * .5 - abs(d) / max(fw, 1e-6) + .5, 0., 1.);
    return c * min(wpx, 1.);
  }
  float plateRadius(vec2 q) {
    vec2 e = uEllipse;
    if (abs(e.x - 1.) + abs(e.y - 1.) < 1e-4) return length(q);
    float k0 = length(q / e), k1 = length(q / (e * e));
    return 1. + k0 * (k0 - 1.) / max(k1, 1e-5);
  }
  float plateAngle(vec2 q) { return atan(q.y / uEllipse.y, q.x / uEllipse.x); }
  // Distance to a segment and where along it (0..1) the nearest point lies.
  float segD(vec2 p, vec2 a, vec2 b, out float h) { vec2 pa = p - a, ba = b - a; h = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-9), 0., 1.); return length(pa - ba * h); }
  // A tapered burin stroke through three points (the designer's taperLine): width w at the middle point, a hairline at the ends.
  float taper3(vec2 p, vec2 a, vec2 b, vec2 c, float w, float fw) {
    float h1, h2, d1 = segD(p, a, b, h1), d2 = segD(p, b, c, h2);
    return max(aaLine(d1, fw, mix(.25, w, h1)), aaLine(d2, fw, mix(w, .25, h2)));
  }
  // The designer's paper grain (in tile pixels).
  float paperGrain(vec2 tp) { return vn(tp * vec2(.42, .05)) * .45 + vn(tp * vec2(.05, .7) + 3.) * .25 + vn(tp * 1.4) * .3; }
`;function wt(e){let t=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) c = ground${e.glslId}(p);`).join(`
      `),n=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) f = field${e.glslId}(p);`).join(`
      `);return`
  varying vec3 vWorld;
  uniform float uFloorY;
  ${Ct}
  ${e.map(e=>e.glsl).join(`
`)}

  float warpf(float x, float a, float b) { float ax = abs(x); return sign(x) * (ax <= a ? ax : a + b * tanh((ax - a) / b)); }
  float warpd(float x, float a, float b) { float ax = abs(x); if (ax <= a) return 1.; float c = cosh((ax - a) / b); return 1. / (c * c); }
  vec2 nearUV(vec2 q) { return vec2(.5 + warpf(q.x, uNearWarp.x, uNearWarp.y) / uNearT.x * .5, .5 - warpf(q.y, uNearWarp.z, uNearWarp.w) / uNearT.y * .5); }
  vec2 auxUV(vec2 q) { return vec2((q.x - uAuxRect.x) / (uAuxRect.z - uAuxRect.x), (uAuxRect.w - q.y) / (uAuxRect.w - uAuxRect.y)); }
  vec3 toLinear(vec3 c) { c = max(c, 0.); return mix(c / 12.92, pow((c + .055) / 1.055, vec3(2.4)), step(.04045, c)); }

  void main() {
    vec3 dir = normalize(vWorld - cameraPosition);
    vec3 col;
    vec2 res = uRes;
    vec2 sq = gl_FragCoord.xy / res;
    // Every pixel is computed as table (no derivative inside a branch); above the horizon it gives way to the dark.
    {
      float dy = min(dir.y, -1e-3);
      vec3 hit = cameraPosition + dir * ((uFloorY - cameraPosition.y) / dy);
      P p;
      p.q = vec2(dot(uQx, vec3(hit.xz, 1.)), dot(uQy, vec3(hit.xz, 1.)));
      p.g = p.q * REFR0;
      p.rho = plateRadius(p.q);
      p.th = plateAngle(p.q);
      p.t = uTime;
      vec2 dq = fwidth(p.q);
      p.px = max(dq.x, dq.y);
      p.lod = log2(max(p.px * 60., 1e-4));
      // The designer's tile: a 3:4 box fitted in the stage and centred, seen under the plate's laid-out view.
      {
        vec3 hc = uH0 * vec3(p.q, 1.);
        vec2 s0 = vec2(hc.x / hc.z * .5 + .5, .5 - hc.y / hc.z * .5) * res;
        float tw = min(res.x, res.y * .75);
        p.tq = vec2((s0.x - (res.x - tw) * .5) / tw, (s0.y - (res.y - tw / .75) * .5) / (tw / .75));
        p.tp = p.tq * vec2(600., 800.);
        p.tu = tw / 600.;
      }
      // Designer pixels per device pixel, taken here in uniform control flow: the plates' branches and loops take no
      // derivatives of their own (a derivative inside them makes the compiler flatten and unroll: seconds to compile).
      p.tpw = max(max(fwidth(p.tp.x), fwidth(p.tp.y)), 1e-4);
      p.dqx = dFdx(p.q); p.dqy = dFdy(p.q);
      p.drho = fwidth(p.rho); p.dth = min(fwidth(p.th), fwidth(mod(p.th + 3.14159265, 6.2831853)));
      // The stones: light (bead glow), watercolour wash, the entrance flare and the ink spreading under each.
      vec3 glow = vec3(0.), wsum = vec3(0.), flare = vec3(0.), refl = vec3(0.); float tw = 0., ink = 0.;
      float n1 = fbm3(p.q * 1.74), n2 = fbm3(p.q * 1.74 + 7.3);
      float full = smoothstep(uEntrance.z, uEntrance.z + 2.2, uTime);
      // A real loop with a uniform bound (GLSL ES 3): the compiler does not unroll it, so the program compiles fast.
      int count = uBaked > .5 ? 0 : min(int(uStoneCount + .5), MAXS);
      if (uBaked > .5) {
        vec2 buv = (p.q - uBakeRect.xy) / (uBakeRect.zw - uBakeRect.xy);
        float bin = step(0., buv.x) * step(buv.x, 1.) * step(0., buv.y) * step(buv.y, 1.);
        vec4 ba = textureLod(uBakeA, buv, 0.) * bin; vec3 bb = textureLod(uBakeB, buv, 0.).rgb * bin; vec3 bc = textureLod(uBakeC, buv, 0.).rgb * bin;
        glow = ba.rgb; tw = ba.a; wsum = bb * max(tw, 1e-3); refl = (uLook3.x > 0. && uLow < .5) ? bc : vec3(0.);
      }
      for (int i = 0; i < count; i++) {
        vec4 a = uStoneA[i]; vec3 gc = uStoneB[i].rgb;
        float age = uTime - a.w; if (age < 0.) continue;
        vec2 d = p.q - a.xy; float dd = dot(d, d), r = max(a.z, .02);
        float on = smoothstep(0., .5, age);
        glow += gc * exp(-dd / (r * r * 6.3)) * on;
        float k = float(i) * 2.399, wn = (cos(k) * n1 + sin(k) * n2 - .5 * (cos(k) + sin(k))) * .45;
        float dw = sqrt(dd) + wn * .4;
        float w = exp(-dw * dw * 7.65) * on; wsum += gc * w; tw += w;
        flare += gc * exp(-dd / (r * r * (4.8 + 3.2 * exp(-age * .9)))) * (.07 * (1. - full) + .18 * exp(-age * 1.1));
        // A soft short reflection of each stone in front of it, on a polished plate (scene 109).
        if (uLook3.x > 0. && uLow < .5) { vec2 rd = (d + vec2(0., r * 1.55)) / vec2(r * .95, r * 1.25); refl += mix(uStoneC[i].rgb, gc, .3) * exp(-dot(rd, rd)) * on; }
        if (full < 1.) {
          float R = .1 + .55 * pow(age, .65), dn = sqrt(dd) + wn;
          ink = max(ink, (1. - smoothstep(R - .38, R, dn)) * (.85 + .15 * smoothstep(R - .69, R - .38, dn)));
        }
      }
      p.glow = glow * uStrength; p.wash = wsum / max(tw, 1e-3); p.washW = tw * uStrength; p.flare = flare * uStrength;
      p.ink = max(ink, full); p.full = full;

      vec3 c = vec3(0.);
      ${t}
      // Before the ink: the bare paper the plate is written on (scene 110).
      vec3 paper = vec3(.78, .72, .61) * (.88 + .16 * fineNoise(p.q * vec2(14., 2.), p.lod) * .6 + .1 * fbm3(p.q * 3.));
      paper *= 1. - .08 * smoothstep(.5, .9, fbm3(p.g * 3.));
      c += refl * uLook3.x * uStrength;
      c = mix(paper, c, p.ink * uReveal);

      // ---- the engraved line work: textures ----
      vec2 nuv = nearUV(p.q);
      // The texture's far edge is never stretched to the horizon: lines fade out before it.
      float edgeN = 1. - smoothstep(.95, .99, max(abs(nuv.x - .5), abs(nuv.y - .5)) * 2.);
      vec4 tn = texture2D(uNear, nuv) * edgeN;
      // Bloom is the line texture's own blur (mip bias). Far away, where one pixel already covers many texels, the
      // biased mips average the whole compressed far band into a haze that showed as a bright arc on the dark plates
      // ending at the texture's edge: the bloom fades out there (it belongs to lines one can see, near the piece).
      vec2 nfw = fwidth(nuv) * vec2(textureSize(uNear, 0));
      float bloomOn = 1. - smoothstep(1., 2.5, log2(max(max(nfw.x, nfw.y), 1e-4)));
      vec4 bl = uLow > .5 ? vec4(0.) : (texture2D(uNear, nuv, 2.5) * .55 + texture2D(uNear, nuv, 4.) * .45) * edgeN * bloomOn;
      // The glyph's V-cut: which wall faces the light (the seal lives in the near texture, a figure's glyph in the aux one).
      vec2 offN = vec2(0., .04);
      float upA = texture2D(uNear, nearUV(p.q + offN)).r, dnA = texture2D(uNear, nearUV(p.q - offN)).r;
      // The far texture holds the sign's figure: R its engraved lines, G its silhouette (the soft shadow it casts on
      // the plate, its gold wash, the light that walks it); it carries no classes.
      float figSil = 0., figShadow = 0., figLines = 0., figLight = 0., figV = 0., auxW = 0.; vec3 figStarGlow = vec3(0.);
      if (uAuxOn > .5) {
        vec2 auv = auxUV(p.q);
        float inside = step(0., auv.x) * step(auv.x, 1.) * step(0., auv.y) * step(auv.y, 1.);
        float dn = warpd(p.q.x, uNearWarp.x, uNearWarp.y) * warpd(p.q.y, uNearWarp.z, uNearWarp.w) / (uNearT.x * uNearT.y);
        float da = 1. / ((uAuxRect.z - uAuxRect.x) * (uAuxRect.w - uAuxRect.y));
        float wa = inside * smoothstep(.6, 1.4, da / max(dn, 1e-6));
        vec4 ta = texture2D(uAux, auv);
        vec4 ba = texture2D(uAux, auv, 2.5) * .55 + texture2D(uAux, auv, 4.) * .45;
        tn = mix(tn, vec4(ta.r, 0., 0., 1.), wa); bl = mix(bl, vec4(ba.r, 0., 0., 1.), wa);
        // The shadow: the silhouette blurred, a little down and to the right on screen (toward the viewer).
        vec2 sh = vec2(.029 * uFig.z / (uAuxRect.z - uAuxRect.x), .0375 * uFig.w / (uAuxRect.w - uAuxRect.y));
        figShadow = textureLod(uAux, auv - sh, 3.).g * wa;
        figSil = ta.g * wa; figLines = ta.r * wa; figV = clamp(auv.y, 0., 1.);
        // The light walking the figure's spine (figure units).
        vec2 fl = (p.q - uFig.xy) / uFig.zw;
        for (int i = 0; i < 5 * int(uLoops); i++) { vec2 d = (fl - uFigL[i].xy) / .085; figLight += uFigL[i].z * exp(-dot(d, d)); }
        figLight *= wa; auxW = wa;
        // The stars breathe in a soft glow of their own (the designer's figureStars).
        int ns = int(uFigStars + .5);
        for (int i = 0; i < ns; i++) {
          vec4 st = uFigStar[i]; vec2 d = (fl - st.xy) / st.z; float e = dot(d, d); if (e > 9.) continue;
          float tw = .82 + .18 * sin(p.t * (.6 + float(i) * .07) + float(i) * 2.1);
          figStarGlow += mix(vec3(246., 222., 170.) / 255., mix(vec3(246., 222., 170.) / 255., uFigTint, .55), st.w) * .42 * tw * exp(-e * 2.2) * wa;
        }
      }
      float cov = tn.r, sec = tn.g;
      float code = tn.b / max(max(tn.r, tn.g), 1. / 255.) * 255.;
      bool glyph = code > 251.5, leaf = code > 244. && !glyph, seam = code > 232. && code < 240.;
      int slot = (glyph || leaf || seam) ? -1 : int(floor(code / 4. + .5)) - 1;
      // Reveal. A motif inks outward from its own stone; rim lines close round behind the stones in stringing order;
      // other lines appear as the closing wave passes them.
      float waveR = (uTime - uEntrance.y) * 1.45 + uRim.w;
      float fieldOn = smoothstep(waveR, waveR - .5, p.rho) * step(uEntrance.y, uTime);
      float show = 1.;
      vec3 tint = vec3(0.); float tintK = 0.;
      if (slot >= 0 && slot < MAXS) {
        vec4 a = uStoneA[slot];
        float age = uTime - a.w, d = length(p.q - a.xy) - a.z;
        float front = .95 * smoothstep(.05, uEntrance.w, age);
        show = smoothstep(front, front - .06, d) * step(0., age);
        tint = uStoneB[slot].rgb; tintK = uLook2.y;
      } else if (glyph) {
        show = smoothstep(uEntrance.y + .8, uEntrance.y + 2., uTime);
      } else if (p.rho > uRim.z - .05 && p.rho < uRim.w + .05 || leaf) {
        float a = mod((p.th - uRim.x) * uRim.y, 6.2831853);
        float arc = 6.2831853 * smoothstep(uEntrance.x, uEntrance.x + .6, uTime);
        show = smoothstep(arc, arc - .25, a) * step(uEntrance.x, uTime) + step(uEntrance.x + .6, uTime);
        show = min(show, 1.);
      } else show = fieldOn;
      show *= uReveal;
      // The line's colour: the plate's metal or ink; a stone's motif leans to its own light colour.
      vec3 metal = leaf ? uLeaf : uMetal;
      // Over enamel the wire stays gold (the designer tints only the thin inner lines), so it reads against the cell.
      vec3 lineCol = mix(metal, mix(tint, metal, .25), tintK * mix(1., .3, smoothstep(.1, .3, sec)));
      float alpha = cov * show * uLook2.w;
      if (glyph) {
        // A V-cut in gold: a dark groove, one wall catching the light, the glow walking the sign.
        float lit = clamp(.5 + 1.6 * (dnA - upA), 0., 1.);
        lineCol = mix(vec3(118., 70., 26.) / 255., mix(vec3(224., 168., 88.), vec3(255., 232., 172.), lit) / 255., smoothstep(.5, .85, lit) * .8 + .12);
        float par = sec / max(cov, 1e-3), pos = mod(uTime * .09, 1.25) - .12;
        float g = exp(-pow((par - pos) / .07, 2.));
        c += vec3(255., 214., 150.) / 255. * .55 * g * cov * show;
      }
      // Enamel (G) in the stone's own colour (or the plate's enamel for free ornaments); fire seams' heat (G, blurred).
      // Cloisonné (b3 124-126): the cell is deep in the stone's colour where it meets the wire and luminous in its
      // middle, in the stone's own light (on paper, a pale wash darkening toward the wire).
      float enam = 0.;
      if (!glyph && !seam) {
        float dark = uLook.x;
        vec3 sc = slot >= 0 ? uStoneC[slot].rgb : uEnamel, gc = slot >= 0 ? tint : uEnamel;
        float secB = texture2D(uNear, nuv, 1.6).g * edgeN;
        float edge = smoothstep(.0, .45, (sec - secB) / max(sec, 1e-3)) * smoothstep(.15, .35, sec);
        vec3 heart = mix(sc, gc, .32);
        vec3 paperHeart = mix(mix(sc, gc, .1), vec3(1., .98, .94), .4);
        vec3 enamelCol = mix(mix(paperHeart, sc * .62 + vec3(.35, .23, .16) * .2, edge * .55), mix(heart, sc * .6, edge * .6), dark);
        // The cells themselves are near opaque (the designer's .5 enamel over a bloom of the whole collar); the band's
        // own thin wash (G below .2) stays a wash.
        enam = min(.8, sec * (1. + .8 * smoothstep(.2, .45, sec))) * (1. - cov) * show;
        c = mix(c, enamelCol, enam);
      }
      c = mix(c, lineCol, alpha);
      // The sign's figure: its shadow on the plate, a faint gold wash in its body, the light walking its spine.
      c *= 1. - .5 * figShadow * (1. - figSil) * fieldOn * uReveal;
      c = mix(c, uMetal, figSil * .06 * mix(1.3, .5, figV) * fieldOn * uReveal);
      c += uMetal * (figLines * 1.25 + bl.r * .5) * figLight * fieldOn * uReveal;
      c += figStarGlow * fieldOn * uReveal;
      // ---- analytic field lines ----
      vec4 f = vec4(0.);
      ${n}
      c = mix(c, uMetal, f.w * fieldOn * uReveal);
      c += f.xyz * fieldOn * uReveal;
      // ---- light on the metal: bloom, travelling sheen, the closing wave ----
      float dark = uLook.x;
      // Heat lives in the gold seams (G, blurred), breathing slowly (scene 109).
      float ringL = exp(-pow((p.rho - uRing.x) / .3, 2.)) * uRing.y;
      c += vec3(220., 65., 14.) / 255. * max(bl.g - .4, 0.) / .6 * uLook3.y * (.5 + .5 * sin(uTime * .5 + fbm3(p.q * .8) * 6.) + 2.5 * ringL) * show;
      vec3 bloomCol = uMetal * bl.r * uLook.y * show;
      c += bloomCol * dark;
      // The enamel glows too on a dark plate (the designer blooms the whole collar): in the stones' light, near them.
      if (uLow < .5) c += p.wash * min(bl.g, .6) * uLook.y * .6 * dark * clamp(p.washW * 1.6, 0., 1.) * show;
      float sheen = 0.;
      if (uLook.z < .5) {
        float ang = mod(p.th - uTime * 6.2831853 / 16. + 1., 6.2831853);
        sheen = smoothstep(.09 * 6.2831853, 0., min(ang, 6.2831853 - ang));
      } else if (uLook.z < 1.5) {
        float R = 1.1 + mod(uTime * .08, 1.) * 1.8;
        sheen = exp(-pow((p.rho - R) / .3, 2.));
      } else {
        float ang = mod(p.th - uTime * 6.2831853 / 18., 6.2831853);
        sheen = smoothstep(.07 * 6.2831853, 0., min(ang, 6.2831853 - ang)) * (leaf ? 1. : 0.);
      }
      c += uLightCol * (alpha + bl.r * .9 * dark + enam * .45 * dark) * sheen * uLook.w * show;
      c += uLightCol * (alpha + bl.r * .9 * dark) * ringL * 1.15 * show;
      // The wave that crosses the plate when the rim closes (scene 110).
      float wd = uTime - uEntrance.y;
      float wave = exp(-pow((p.rho - waveR) / .24, 2.)) * smoothstep(0., .3, wd) * (1. - smoothstep(4., 6., wd)) * step(0., wd);
      c += vec3(.20, .26, .30) * wave * (.6 + .4 * fbm3(p.g * 5.)) * uLook3.z;
      c += uLightCol * wave * (alpha + bl.r * .5) * .9 * uLook3.z;
      // Each stone's own light as it is strung (110) and its glow under it.
      c += p.flare * uReveal;
      col = c;
      // The place beyond: far away the plate fades into its own dark (or haze) before the horizon.
      float horizon = smoothstep(0., .1, -dir.y);
      col = mix(c * .35, col, horizon);
      col = mix(vec3(.01, .01, .014), col, smoothstep(-.002, .004, -dir.y));
    }
    // Vignette (the designer's, on the stage) and a static dither against banding.
    float v = smoothstep(1.2, .2, length((sq - vec2(.5, .48)) * vec2(1.08, .95)));
    col *= mix(1., v, .5);
    col += (h21(gl_FragCoord.xy) - .5) / 255.;
    gl_FragColor = vec4(toLinear(col), 1.);
    #include <colorspace_fragment>
  }
`}var Tt=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Et=1.35,Dt=.02;function Ot(e,t){let n=0,r=.5;for(let i=0;i<3;i++){n+=r*Te(e,t);let i=1.6*e-1.2*t+3.1,a=1.2*e+1.6*t+1.7;e=i,t=a,r*=.5}return n/.875}function kt(e,t=()=>performance.now()){if(!e?.length)return null;let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t of e){let e=Math.max(Et,8*Math.max(t.r,.02));n=Math.min(n,t.x-e),i=Math.max(i,t.x+e),r=Math.min(r,t.y-e),a=Math.max(a,t.y+e)}let o=Math.max(8,Math.min(256,Math.ceil((i-n)/Dt))),s=Math.max(8,Math.min(256,Math.ceil((a-r)/Dt))),c=new Float32Array(o*s*4),l=new Float32Array(o*s*4),u=new Float32Array(o*s*4),d=e.map((e,t)=>{let n=Math.max(e.r,.02),r=t*2.399;return{...e,r:n,glowK:1/(n*n*6.3),ck:Math.cos(r),sk:Math.sin(r),reach2:Math.max(Et,8*n)**2,refl:[0,1,2].map(t=>e.color[t]+(e.glow[t]-e.color[t])*.3)}}),f=0,p={width:o,height:s,result:null,step(e=6){let m=t()+e;for(;f<s;f++){if(f&&t()>m)return!1;let e=f,p=r+(e+.5)/s*(a-r);for(let t=0;t<o;t++){let r=n+(t+.5)/o*(i-n),a=null,s=null,f=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;for(let e of d){let t=r-e.x,n=p-e.y,i=t*t+n*n;if(i>e.reach2)continue;let o=Math.exp(-i*e.glowK);f+=e.glow[0]*o,m+=e.glow[1]*o,h+=e.glow[2]*o,a===null&&(a=Ot(r*1.74,p*1.74),s=Ot(r*1.74+7.3,p*1.74+7.3));let c=(e.ck*a+e.sk*s-.5*(e.ck+e.sk))*.45,l=Math.sqrt(i)+c*.4,u=Math.exp(-l*l*7.65);g+=e.glow[0]*u,_+=e.glow[1]*u,v+=e.glow[2]*u,y+=u;let d=t/(e.r*.95),C=(n+e.r*1.55)/(e.r*1.25),w=Math.exp(-(d*d+C*C));b+=e.refl[0]*w,x+=e.refl[1]*w,S+=e.refl[2]*w}let C=(e*o+t)*4,w=1/Math.max(y,.001);c[C]=f,c[C+1]=m,c[C+2]=h,c[C+3]=y,l[C]=g*w,l[C+1]=_*w,l[C+2]=v*w,l[C+3]=1,u[C]=b,u[C+1]=x,u[C+2]=S,u[C+3]=1}}return p.result={rect:[n,r,i,a],width:o,height:s,a:c,b:l,c:u},!0}};return p}var At=.6,jt=1/30,Q=Object.freeze({lead:.25,span:1.9,perStone:.12,rimDelay:.2,rim:.6,motif:1.2}),Mt=.6,Nt=2048,Pt=1024,Ft=.05,It=.036;function Lt(e,t=0){let n=Math.min(Q.span,Math.max(0,e-1)*Q.perStone),r=Array.from({length:e},(r,i)=>t+Q.lead+(e>1?n*i/(e-1):0)),i=t+Q.lead+n+Q.rimDelay,a=i+Q.rim;return{inkAt:r,rimAt:i,waveAt:a,fullAt:i-.3,end:a+2.4}}var Rt=e=>e.map(e=>e/255),zt=e=>[1,3,5].map(t=>parseInt(String(e).slice(t,t+2),16)/255||0);function Bt(e,t){if(typeof document<`u`&&document.createElement){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}return typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):null}function Vt(){let e=new c(new Uint8Array([0,0,0,255]),1,1);return e.colorSpace=``,e.needsUpdate=!0,e}function Ht(){let e=new c(we(),256,256);return e.colorSpace=``,e.wrapS=e.wrapT=a,e.magFilter=r,e.minFilter=r,e.generateMipmaps=!1,e.needsUpdate=!0,e}var $=()=>(typeof performance<`u`?performance.now():Date.now())/1e3,Ut=null,Wt=e=>e?.cssWidth?`${Math.round(e.cssWidth)}x${Math.round(e.cssHeight)}`:``;function Gt(){try{let e=globalThis.document?.querySelector?.(`#scene-stage canvas`);if(e?.clientWidth>0)return{cssWidth:e.clientWidth,cssHeight:e.clientHeight,width:e.width,height:e.height}}catch{}return null}function Kt(){let e=Array.from({length:48},()=>new l(0,0,.1,-1e4)),t=Array.from({length:48},()=>new l),n=Array.from({length:48},()=>new l),r={uTime:{value:0},uPlate:{value:0},uStoneCount:{value:0},uPxU:{value:1},uStrength:{value:1},uReveal:{value:1},uSolo:{value:-1},uQx:{value:new g(1,0,0)},uQy:{value:new g(0,-1,0)},uMetal:{value:new g(.9,.8,.6)},uLeaf:{value:new g(.9,.8,.6)},uEnamel:{value:new g(.8,.3,.2)},uLightCol:{value:new g(1,.92,.75)},uEllipse:{value:new p(1,1)},uRing:{value:new p(0,0)},uLow:{value:0},uRes:{value:new p(1,1)},uFloorY:{value:0},uStoneA:{value:e},uStoneB:{value:t},uStoneC:{value:n},uEntrance:{value:new l(-1e4,-1e4,-1e4,Q.motif)},uRim:{value:new l(-Math.PI/2,1,1.35,1.55)},uLook:{value:new l},uLook2:{value:new l(1,.45,1,.95)},uLook3:{value:new l},uNear:{value:Vt()},uAux:{value:Vt()},uNearWarp:{value:new l(1.6,1,1.6,1)},uNearT:{value:new p(2.6,2.6)},uAuxRect:{value:new l(-1,-1,1,1)},uAuxOn:{value:0},uH0:{value:new _},uFig:{value:new l(0,4,1,2)},uFigL:{value:Array.from({length:ht.samples.length},()=>new g)},uFigStar:{value:Array.from({length:24},()=>new l)},uFigStars:{value:0},uFigTint:{value:new g(1,.8,.6)},uLoops:{value:1},uShares:{value:new l(.25,.25,.25,.25)},uPig:{value:[new g(.8,.8,.8),new g(.8,.8,.8),new g(.8,.8,.8),new g(.8,.8,.8)]},uBaked:{value:0},uBakeRect:{value:new l(0,0,1,1)},uBakeA:{value:Vt()},uBakeB:{value:Vt()},uBakeC:{value:Vt()},uEarthBand:{value:[0,1,2,3].map(()=>new l(2,2,0,0))},uClouds:{value:Array.from({length:40},()=>new l)},uCloudB:{value:Array.from({length:40},()=>new l)},uCloudCount:{value:0},uNoise:{value:Ht()}},i=e=>Array.isArray(e)?new[null,null,p,g,l][e.length]().fromArray(e):e;for(let e of Ge)for(let[t,n]of Object.entries(e.defaults??{}))r[t]??={value:i(n)};return new v({name:`gravur-plate`,vertexShader:Tt,fragmentShader:wt(Ge),uniforms:r,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function qt(){let e=new s(new d(.001,.001),Kt());return e.name=`gravur-plate-warm`,e.frustumCulled=!1,e}function Jt(a={}){let{scene:d,camera:p,registerNativeGroup:_}=a,v=typeof a.requestFrame==`function`?a.requestFrame:()=>{},y=typeof a.createCanvas==`function`?a.createCanvas:Bt;if(!d?.isScene||typeof _!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let b=new h;b.name=`atmosphere-gravur`;let x=Kt(),S=x.uniforms,C=S.uStoneA.value,w=S.uStoneB.value,T=S.uStoneC.value,E=new s(new m(1,48,24),x);E.name=`gravur-plate`,E.renderOrder=-10,E.frustumCulled=!1,b.add(E),d.add(b),_(b);let D=!1,ee=null,O=null,k=null,A=null,j=null,M=null,re=null,ae=null,N=0,oe=0,se=0,ce=0,le=null,ue=!1,P=!1,F=0,de=null,fe=0,me=!0,I=!0,he=0,L=null,R=!0,_e=``,ve=0,ye=null,z=0,B=!1,be=-1,V=null,H=0,xe=[0,0],Se=null,Ce=null,we=null,Te=1/30,U=!1,W=1,Ee=!1,G=null,K=0,De=``,Oe=[],ke=typeof performance<`u`?performance.now():0,Ae={near:null,aux:null},je={near:null,aux:null},Me=null,Ne=0,Pe=0,Fe=0,q={a:null,b:null,c:null};function Ie(){let e=M?.lights.length??0,t=[];for(let n=0;n<e;n++){let e=C[n],r=w[n],i=T[n];t.push({x:e.x,y:e.y,r:e.z,glow:[r.x,r.y,r.z],color:[i.x,i.y,i.z]})}let n=JSON.stringify(t.map(e=>[e.x,e.y,e.r,e.glow,e.color]));if(n===Me)return;Me=n,S.uBaked.value=0,Ne=0;for(let e of[`a`,`b`,`c`])q[e]?.dispose(),q[e]=null;Fe&&clearTimeout(Fe);let r=kt(t);if(!r)return;let i=()=>{if(Fe=0,D||Me!==n)return;let e=$(),t=r.step(6);Ne+=($()-e)*1e3,t?Le(r.result):Fe=setTimeout(i,16)};Fe=setTimeout(i,0)}function Le(t){for(let n of[`a`,`b`,`c`]){let a=t[n],s=new Uint16Array(a.length);for(let e=0;e<a.length;e++)s[e]=f.toHalfFloat(a[e]);let l=new c(s,t.width,t.height,e,o);l.colorSpace=``,l.magFilter=l.minFilter=r,l.generateMipmaps=!1,l.wrapS=l.wrapT=i,l.needsUpdate=!0,q[n]=l}S.uBakeA.value=q.a,S.uBakeB.value=q.b,S.uBakeC.value=q.c,S.uBakeRect.value.fromArray(t.rect),Pe++,Ne=Math.round(Ne),I=!0}function Re(){if(!q.a||S.uEntrance.value.z>F-2.3)return!1;let e=M?.lights.length??0;for(let t=0;t<e;t++)if(F-C[t].w<8)return!1;return!0}function ze(e=Math.max(0,jt-($()-be)-.013)){z||D||(z=setTimeout(()=>{z=0,!(D||me)&&(v(),$()-be>.15&&ze(.2))},e*1e3))}let Be=(e,t)=>t&&te[t]?`sign`:e?.elementPlate??(e?.plate===`sign`?null:e?.plate)??`atlas`;function Ve(e=F){fe=Math.max(fe,e+25),me=!1,I=!0}function He(){if(!p?.position)return{toward:[0,1],elevation:24*Math.PI/180};let e=A?.bounds?.center??[0,0,0],t=p.position.x-e[0],n=p.position.y-(A?.bounds?.floorY??0),r=p.position.z-e[2],i=Math.cos(-H),a=Math.sin(-H);return{toward:[t*i+r*a,-t*a+r*i],elevation:Math.atan2(n,Math.hypot(t,r)||1e-6)}}function Ue(){if(!A)return!1;let e=A.kind===`necklace`?`necklace`:`bracelet`;if(re&&ae===e||(re=He(),ae=e),j=ne(A.stones??[],{kind:e,view:re}),!j)return M=null,S.uStoneCount.value=0,!1;let t=qe(O);return M=ie(A.stones,j,{motifScale:t.motif.scale}),S.uEllipse.value.set(j.ex,j.ey),S.uRim.value.set(M.rimStart,M.rimDirection,t.rim[0],t.rim[1]),S.uStoneCount.value=M.lights.length,M.lights.forEach((e,t)=>{let n=C[t].w;C[t].set(e.q[0],e.q[1],e.r,n);let[r,i,a]=zt(e.glow),[o,s,c]=zt(e.color);w[t].set(r,i,a,e.elementIndex),T[t].set(o,s,c,0)}),!0}function We(){let e=qe(O);S.uPlate.value=Ke[e.id],S.uMetal.value.fromArray(Rt(e.metal)),S.uLeaf.value.fromArray(Rt(e.leaf)),S.uEnamel.value.fromArray(Rt(e.enamel)),S.uLightCol.value.fromArray(Rt(e.light));let t=e.look;S.uLook.value.set(t.dark,t.bloom,t.sheen,t.sheenGain),S.uLook2.value.set(1,t.tint,1,t.lineAlpha),S.uLook3.value.set(t.reflect,t.heat,t.wave,1);let n=A?.mood?.shares??{};S.uShares.value.set(n.water??0,n.fire??0,n.earth??0,n.air??0);let r={water:null,fire:null,earth:null,air:null};for(let e of A?.stones??[])e.stone&&e.element&&!r[e.element]&&(r[e.element]=zt(e.color));[`water`,`fire`,`earth`,`air`].forEach((e,t)=>S.uPig.value[t].fromArray(r[e]??[.8,.8,.8]));for(let[t,n]of Object.entries(e.uniforms({mood:A?.mood,frame:j,strand:M,sign:k})??{})){let e=S[t];e&&(Array.isArray(e.value)&&Array.isArray(n)?e.value.forEach((e,t)=>{n[t]&&e.fromArray(n[t])}):e.value?.fromArray?e.value.fromArray(n):e.value=n)}}function Ge(e,a){let o=je[e];return o&&o.image===a||(o?.dispose(),o=new n(a),o.colorSpace=``,o.flipY=!1,o.generateMipmaps=!0,o.minFilter=t,o.magFilter=r,o.anisotropy=8,o.wrapS=o.wrapT=i,je[e]=o),o.needsUpdate=!0,ce++,o}function Je(e,t,n){let r=Ae[e];return r&&r.width===t&&r.height===n||(r=Ae[e]=y(t,n)),r}function J(e,t){let n=A?.bounds?.floorY??0,r=Math.cos(H),i=Math.sin(H),[a,o]=xe,s=j.centre[0]+(j.right[0]*e+j.away[0]*t)*j.scale,c=j.centre[1]+(j.right[1]*e+j.away[1]*t)*j.scale,l=new g((s-a)*r+(c-o)*i+a,n,-(s-a)*i+(c-o)*r+o).project(p);return[(l.x+1)/2,(1-l.y)/2,l.z]}function Ye(e){let t=te[e]?.()?.place??{cy:.2,w:.7};if(!p?.isCamera||!V?.cssWidth)return ut(j,e);p.updateMatrixWorld?.();let n=V.cssWidth,r=V.cssHeight||n,i=.07;if(pt)return pt({sign:e,frame:j,screenOf:J,W:n,H:r});let[,a]=J(0,j.ey+1.9),o=Math.min(t.cy+.05,(i+Math.max(.17,a))/2),s=j.ey+.6,c=j.ey+25;for(let e=0;e<40;e++){let e=(s+c)/2,[,t,n]=J(0,e);n<1&&t>o?s=e:c=e}let l=s,[u]=J(-.5,l),[d]=J(.5,l),[,f]=J(0,l+.5),[,m]=J(0,l-.5),h=Math.abs(d-u)*n,g=Math.abs(m-f)*r,_=Math.max(.12,a-i)*r,v=Math.min(t.w*Math.min(n,r*.78)/2,_/1.55)/Math.max(h,.001),y=Math.min(4,Math.max(1,h/Math.max(g,.001))),b=Math.max(.012,Math.min(.05,Math.round(3.8/(v*h)*400)/400));return{centre:[0,l],S:v,k:y,spacing:b}}function Xe(){if(N=0,D||!j||!M)return;let e=JSON.stringify([ee,O,k,j.centre,j.right,j.scale,j.ex,j.ey]);if(e===le)return;let t=$(),n=qe(O),r=pe(j,{texels:Nt}),i=Je(`near`,r.width,r.height),a=i?.getContext?.(`2d`,{alpha:!1});if(!a){le=e;return}let o=k&&lt(k)?k:null,s=null,c=null;if(o&&te[o]){c=Ye(o);let e=dt(c),t=(e[2]-e[0])/(e[3]-e[1]),n=t>=1?Pt:Math.round(Pt*t),r=t>=1?Math.round(Pt/t):Pt,i=Je(`aux`,n,r),a=i?.getContext?.(`2d`,{alpha:!1});a&&(s={ctx:a,width:n,height:r,rect:e,canvas:i})}Ie();let l=St({plate:n,frame:j,strand:M,mood:A?.mood,sign:o,place:c,near:{ctx:a,layout:r},aux:s});if(l.band&&(S.uRim.value.z=l.band[0]-.02,S.uRim.value.w=Math.max(n.rim[1],l.band[1]+.02)),S.uNear.value=Ge(`near`,i),S.uNearWarp.value.set(r.ax,r.bx,r.ay,r.by),S.uNearT.value.set(r.Tx,r.Ty),s){S.uAux.value=Ge(`aux`,s.canvas),S.uAuxRect.value.fromArray(s.rect),S.uAuxOn.value=1,S.uFig.value.set(c.centre[0],c.centre[1],c.S,c.S*c.k),G=vt(o,c.spacing);let e=bt(o);S.uFigStars.value=Math.min(24,e.length),e.slice(0,24).forEach((e,t)=>S.uFigStar.value[t].fromArray(e));let t=(A?.stones??[]).find(e=>e.stone);t&&S.uFigTint.value.fromArray(zt(t.glow??t.color))}else S.uAuxOn.value=0,G=null;le=e,oe++,se=Math.round(($()-t)*1e3),De=o&&te[o]?Wt(V):``,I=!0,v()}function Ze(e=0){N||D||(N=setTimeout(Xe,e))}function Qe(e){let t=M?.lights.length??0,n=Lt(t,e);for(let e=0;e<48;e++)C[e].w=e<t?n.inkAt[e]:-1e4;S.uEntrance.value.set(n.rimAt,n.waveAt,n.fullAt,Q.motif),L=e,he=n.end,R=!1,Ee=!1,Ve(e)}function $e(){for(let e of C)e.w=-1e4;S.uEntrance.value.set(-1e4,-1e4,-1e4,Q.motif),he=F}function et(e,t){let n=new Set(e);M?.lights.forEach((e,r)=>{n.has(e.id)&&(C[r].w=t+.12)}),Ve(t)}let Y=new l,X=[new l,new l,new l],tt=new u;function Z(){if(!j||!p?.isCamera)return!1;p.updateMatrixWorld?.(),tt.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse);let e=A?.bounds?.floorY??0,t=Math.cos(H),n=Math.sin(H),[r,i]=xe,a=(e,a)=>{let o=j.centre[0]+(j.right[0]*e+j.away[0]*a)*j.scale,s=j.centre[1]+(j.right[1]*e+j.away[1]*a)*j.scale;return[(o-r)*t+(s-i)*n+r,-(o-r)*n+(s-i)*t+i]},[o,s]=a(0,0),[c,l]=a(1,0),[u,d]=a(0,1);X[0].copy(Y.set(c-o,0,l-s,0)).applyMatrix4(tt),X[1].copy(Y.set(u-o,0,d-s,0)).applyMatrix4(tt),X[2].copy(Y.set(o,e,s,1)).applyMatrix4(tt);let[f,m,h]=X;return[f,m,h].every(e=>Number.isFinite(e.x+e.y+e.w))?(S.uH0.value.set(f.x,m.x,h.x,f.y,m.y,h.y,f.w,m.w,h.w),!0):!1}function nt(){if(!j||!p?.isCamera||!V?.width)return null;let e=A?.bounds?.floorY??0,t=Math.cos(H),n=Math.sin(H),[r,i]=xe,a=a=>{let o=1/0,s=-1/0,c=1/0,l=-1/0;for(let u=0;u<64;u++){let d=u*Math.PI*2/64,f=Math.cos(d),m=Math.sin(d),h=Math.hypot(f/j.ex,m/j.ey)||1,_=j.ex*f+f/j.ex/h*a,v=j.ey*m+m/j.ey/h*a,y=j.centre[0]+(j.right[0]*_+j.away[0]*v)*j.scale,b=j.centre[1]+(j.right[1]*_+j.away[1]*v)*j.scale,x=(y-r)*t+(b-i)*n+r,S=-(y-r)*n+(b-i)*t+i,C=new g(x,e,S).project(p);o=Math.min(o,C.x),s=Math.max(s,C.x),c=Math.min(c,C.y),l=Math.max(l,C.y)}return{left:+((o+1)/2).toFixed(3),right:+((s+1)/2).toFixed(3),top:+((1-l)/2).toFixed(3),bottom:+((1-c)/2).toFixed(3)}},o=a(0),s=a(qe(O).rim[1]-1);return{loopWidth:+(o.right-o.left).toFixed(3),loop:o,rim:s,rimInside:s.left>=0&&s.right<=1&&s.top>=0&&s.bottom<=1,elevationDeg:+(Math.atan2(p.position.y-e,Math.hypot(p.position.x-(A?.bounds?.center?.[0]??0),p.position.z-(A?.bounds?.center?.[2]??0)))*180/Math.PI).toFixed(1)}}return{setDesign(e){if(D||!e?.mood)return!1;if(e.revisionKey===ee)return!0;let t=ee===null,n=A,r=Ce??(e.mood.signClear?e.mood.sign:null),i=Be(e.mood,r),a=i!==O||r!==k;ee=e.revisionKey,A=e,O=i,k=r;let o=new Map((n?.stones??[]).map(e=>[e.id,`${e.componentId}`])),s=(e.stones??[]).filter(e=>e.stone&&o.get(e.id)!==`${e.componentId}`).map(e=>e.id),c=new Map(M?.lights.map((e,t)=>[e.id,C[t].w])??[]);return Ue(),M?.lights.forEach((e,t)=>{C[t].w=c.get(e.id)??-1e4}),We(),V||=Ut??Gt(),Ze(0),t||a||s.length>4?R=!0:s.length?et(s,F):Ve(F),e.stonesKey,I=!0,!0},setConfiguration(e){if(D)return!1;let t=Number(e?.strength);S.uStrength.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1;let n=typeof e?.qaSign==`string`&&lt(e.qaSign)?e.qaSign:null;if(n!==Ce){Ce=n,k=n??(A?.mood?.signClear?A.mood.sign:null);let e=Be(A?.mood,k);e!==O&&(O=e,A&&(Ue(),We()),R=!0),le=null,Ze()}return I=!0,!0},frame(e={}){if(D)return!1;let{timeSeconds:t=0,playing:n=!1,reducedMotion:r=!1,interacting:i=!1,selectedIds:a=[],productYaw:o=0,productPivot:s=[0,0]}=e;V=e.viewport??V,e.viewport&&(Ut=e.viewport),De&&De!==Wt(V)&&!N&&(le=null,Ze(0));let c=Number.isFinite(e.wallSeconds)?e.wallSeconds:$(),l=$();be=l,ve++,ye??=typeof performance<`u`?performance.now():0,B=Number(V?.cssWidth)>0&&Number(V.cssWidth)<700,S.uRose?.value.set(B?.86:.14,.9);let u=we===null?1/30:Math.min(.25,Math.max(0,l-we));we=l,Te=Te*.9+u*.1,!U&&Te>.05?U=!0:U&&Te<.036&&(U=!1),S.uLow.value=+!!U;let d=ue;ue=n,P=r;let f=de===null?0:Math.max(0,Math.min(.5,c-de)),m=de!==null&&c-de>3&&!i;de=c,W=r?0:R||!r&&n&&F<fe?Math.min(1,W+f/At):Math.max(0,W-f/2),(!me||R)&&(F+=f*(R?1:W*W*(3-2*W))),H=Number(o)||0,xe=Array.isArray(s)?s:[0,0],(R||n&&!r&&(!d||m))&&(r||!n?($e(),R=!1):Qe(F));let h=Array.isArray(a)?a:[],_=h.join(`\0`);_!==_e&&(_e=_,h.length===1&&!r&&et(h,F)),i&&Ve(F);let v=r||!n,y=!v&&F<fe;if(S.uTime.value=F,S.uBaked.value=+!!Re(),qe(O).look.ring&&!v){let e=ge(F);S.uRing.value.set(e.r,e.a)}else S.uRing.value.set(0,0);if(S.uReveal.value=v?Math.min(1,Math.max(0,(c-(Se??=c))/Mt)):1,v||(Se=null),j){let e=Math.cos(H),t=Math.sin(H),[n,r]=xe,i=e,a=-t,o=-n*e+r*t+n,s=t,c=e,l=-n*t-r*e+r,[u,d]=j.right,[f,m]=j.away,h=1/j.scale,[_,v]=j.centre;S.uQx.value.set((u*i+d*s)*h,(u*a+d*c)*h,(u*(o-_)+d*(l-v))*h),S.uQy.value.set((f*i+m*s)*h,(f*a+m*c)*h,(f*(o-_)+m*(l-v))*h);let y=Number.isFinite(A?.bounds?.floorY)?A.bounds.floorY:0;S.uFloorY.value=y;let b=Math.max(.001,A?.bounds?.radius??j.scale*2);if(E.scale.setScalar(b*80),E.position.set(A?.bounds?.center?.[0]??0,y,A?.bounds?.center?.[2]??0),p?.isCamera&&V?.width>0){let e=new g(A?.bounds?.center?.[0]??0,y,A?.bounds?.center?.[2]??0),t=e.clone().project(p),n=e.clone().add(new g(j.right[0],0,j.right[1]).multiplyScalar(j.scale)).project(p),r=Math.hypot((n.x-t.x)*V.width/2,(n.y-t.y)*V.height/2);Number.isFinite(r)&&r>0&&(S.uPxU.value=r/174),S.uRes.value.set(V.width,V.height)}}if(j&&!Ee&&(Z()&&(I=!0),(i||(L===null?ve>2:F-L>he-L))&&(Ee=!0)),S.uAuxOn.value>.5&&G){let e=v?0:Math.min(1,Math.max(0,(fe-F)/3));yt(G,F,Oe).forEach(([t,n,r],i)=>S.uFigL.value[i].set(t,n,r*e))}else for(let e of S.uFigL.value)e.z=0;return me=!y&&W<=0&&F>=he,I=!1,K=K*.9+($()-l)*100,z&&=(clearTimeout(z),0),me||ze(),!0},needsFrame(){return!D&&(I||P&&S.uReveal.value<1)},reset(){R=!0,I=!0},getState(){return{kind:`gravur`,version:5,plate:O?qe(O).id:null,sign:k,stones:M?.lights.length??0,motifs:M?.motifs.length??0,frames:ve,createdAt:ke,firstFrameAt:ye,painted:oe,paintMs:se,uploads:ce,texture:Ae.near?[Ae.near.width,Ae.near.height]:null,aux:S.uAuxOn.value>.5,clock:L===null?1e4:+(F-L).toFixed(3),entranceSeconds:L===null?0:+(he-L).toFixed(3),settled:me,pace:+W.toFixed(3),motionUntil:fe,playing:ue,reducedMotion:P,phone:B,solo:_e?_e.split(`\0`):[],reveal:S.uReveal.value,frame:j?{ex:+j.ex.toFixed(3),ey:+j.ey.toFixed(3),scale:+j.scale.toFixed(4)}:null,pxU:+S.uPxU.value.toFixed(3),drawCalls:1,baked:S.uBaked.value===1,bakes:Pe,bakeMs:Ne,lowCost:U,frameMs:+(Te*1e3).toFixed(1),frameJsMs:+K.toFixed(3),tileHeld:Ee,figureLight:!!G,framing:nt()}},dispose(){if(!D){D=!0,z&&clearTimeout(z),N&&clearTimeout(N),Fe&&clearTimeout(Fe),b.parent?.remove(b),E.geometry.dispose(),x.dispose(),S.uNear.value?.dispose?.(),S.uAux.value?.dispose?.(),S.uNoise.value?.dispose?.();for(let e of Object.values(je))e?.dispose();for(let e of Object.values(q))e?.dispose()}}}}export{It as a,Mt as c,qt as d,Lt as f,Ft as i,Jt as l,At as n,Nt as o,Q as r,jt as s,Pt as t,Kt as u};