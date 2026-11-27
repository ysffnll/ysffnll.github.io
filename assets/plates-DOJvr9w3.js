import{d as e,s as t}from"./i18n-Dc772jwC.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u,u as d}from"./motifs-PB8xVykP.js";var f=24*Math.PI/180;function p(e,t,n=1,r=1){let i=Math.cos(e),a=Math.sin(e),o=i/n,s=a/r,c=Math.hypot(o,s)||1;return[n*i+o/c*t,r*a+s/c*t]}function m(e,t=1,n=1,r=256,a=0,o=i){let s=[];for(let i=0;i<=r;i++)s.push(p(a+(o-a)*i/r,e,t,n));return s}function h(e,{kind:t=`bracelet`,view:n={}}={}){let r=e.filter(e=>e.stone),i=r.length>=3?r:e;if(i.length<2)return null;let[a,l]=Array.isArray(n.toward)&&n.toward.every(Number.isFinite)&&Math.hypot(...n.toward)>1e-6?n.toward:[0,1],u=Math.hypot(a,l);a/=u,l/=u;let d=[-a,-l],p=[-d[1],d[0]],m=i.map(e=>e.position[0]*p[0]+e.position[2]*p[1]),h=i.map(e=>e.position[0]*d[0]+e.position[2]*d[1]),g=(Math.min(...m)+Math.max(...m))/2,_=(Math.min(...h)+Math.max(...h))/2,v=[g*p[0]+_*d[0],g*p[1]+_*d[1]],y=i.map(e=>[e.position[0]-v[0],e.position[2]-v[1]]).map(([e,t])=>[e*p[0]+t*p[1],e*d[0]+t*d[1]]),b=t===`necklace`,x,S=1,C=1;if(!b)x=Math.max(...y.map(([e,t])=>Math.hypot(e,t)));else{let e=Math.max(...y.map(([e])=>Math.abs(e))),t=Math.max(...y.map(([,e])=>Math.abs(e)));x=Math.max(1e-6,Math.min(e,t)),S=e/x,C=t/x}x=Math.max(1e-6,x);let ee=Number.isFinite(n.elevation)?n.elevation:f,w=i.map(e=>e.radius/x).sort((e,t)=>e-t),T=w[Math.floor(w.length/2)]??.04/.29,E=s(T/(o/c),.3,1);return Object.freeze({centre:Object.freeze(v),right:Object.freeze(p),away:Object.freeze(d),scale:x,ex:S,ey:C,necklace:b,elevation:ee,ornament:E,backRoom:1})}function g(e,t,n){let r=t-e.centre[0],i=n-e.centre[1];return[(r*e.right[0]+i*e.right[1])/e.scale,(r*e.away[0]+i*e.away[1])/e.scale]}function _(e,t,{motifScale:n=1.2}={}){let r=e.length,a=e.map(e=>g(t,e.position[0],e.position[2])),l=e.map((n,i)=>{let o=a[(i-1+r)%r],s=a[(i+1)%r],c=a[i],l=s[0]-o[0],u=s[1]-o[1],d=Math.hypot(l,u)||1;l/=d,u/=d;let f=u,p=-l,m=c[0]/(t.ex*t.ex),h=c[1]/(t.ey*t.ey);if(f*m+p*h<0&&(f=-f,p=-p),!Number.isFinite(f)||r<3){let e=Math.hypot(m,h)||1;f=m/e,p=h/e}return{stone:e[i],q:c,r:e[i].radius/t.scale,n:[f,p]}}),u=l.filter(e=>e.stone.stone),d=u.map(e=>e.r).sort((e,t)=>e-t),f=d[Math.floor(d.length/2)]??0,p=Math.max(1,Math.ceil(u.length/48)),m=[];u.forEach((e,r)=>{if(r%p)return;let i=m.length,a=e.q[0]/(t.ex*t.ex),l=e.q[1]/(t.ey*t.ey),u=Math.hypot(a,l),d=u>1e-9?[a/u,l/u]:e.n,h=Math.max(0,d[1]),g=e.r*1.05+.03+.17*h*h*t.backRoom,_=[e.q[0]+d[0]*g,e.q[1]+d[1]*g],v=s(f/(o/c),.4,1.3);m.push({slot:i,id:e.stone.id,element:e.stone.element,base:_,out:d,scale:n*v/c,phase:r*.9})});let h=Math.max(1,Math.ceil(u.length/48)),_=u.filter((e,t)=>t%h===0).map(e=>({id:e.stone.id,q:e.q,r:e.r*Math.sqrt(h),color:e.stone.color,glow:e.stone.glow,element:e.stone.element,elementIndex:e.stone.elementIndex})),v=null,y=null,b=[];for(let e of l){let n=Math.atan2(e.q[1]/t.ey,e.q[0]/t.ex);if(y===null)v=n;else{let e=n-y;for(;e>Math.PI;)e-=i;for(;e<-Math.PI;)e+=i;v+=e}y=n,b.push(v)}let x=b.length>1&&Math.sign(b[b.length-1]-b[0])||1;return Object.freeze({parts:l,motifs:m,lights:_,rimStart:b[0]??-Math.PI/2,rimDirection:x})}function v(e,t=0,n=e.element){let i=u[n]??u.water;return r(i(t+e.phase),e.base,e.out,e.scale)}var y=e=>1+e/c,b=Object.freeze({pool:y(.118),stream:y(.16),plate:y(.62)}),x=Object.freeze({id:`water`,glslId:`Water`,metal:[228,206,158],leaf:[228,206,158],enamel:[120,170,210],light:[255,236,190],look:{dark:1,bloom:.4,sheen:0,sheenGain:.7,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:1},motif:{scale:1.25,alpha:.95,enamel:.3},frieze:{enamel:.5,band:.14},rim:[y(.118)-.05,y(.148)+.04],glsl:`
  vec3 groundWater(P p) {
    float r = p.rho * REFR0, Rp = ${b.plate.toFixed(4)}, Rpool = ${b.pool.toFixed(4)};
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
    float Rp = ${b.plate.toFixed(4)}, R = ${b.stream.toFixed(4)};
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
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t;e.line(m(b.pool-1,n,r,360),1.2,.8),e.line(m(y(.131)-1,n,r,360),.6,.55);let i=m(y(.148)-1,n,r,120);for(let t=0;t<120;t++)e.dot(i[t],1.05,.7)},uniforms(){return{}}}),S=c*600,C=1.6,ee=1.6,w=Object.freeze({FIELD:0,SEAM:236,LEAF:248,GLYPH:255}),T=e=>4*(e+1);function E(e,t,n){let r=Math.abs(e);return Math.sign(e)*(r<=t?r:t+n*Math.tanh((r-t)/n))}function D(e,t,n){let r=Math.abs(e);if(r<=t)return 1;let i=Math.cosh((r-t)/n);return 1/(i*i)}function te(e,{texels:t=2048,core:n=.6,reach:r=1}={}){let i=e.ex+n,a=e.ey+n,o=r,s=r,c=i+o,l=a+s,u=t,d=Math.max(256,Math.round(t*l/c/8)*8);return Object.freeze({ax:i,ay:a,bx:o,by:s,Tx:c,Ty:l,width:u,height:d})}function ne({near:e,aux:t=null}){let n=[];if(e){let t=e.layout,r=t.width/2/t.Tx,i=t.height/2/t.Ty;n.push({name:`near`,ctx:e.ctx,map:([e,n])=>[t.width/2+E(e,t.ax,t.bx)*r,t.height/2-E(n,t.ay,t.by)*i],density:([e,n])=>Math.sqrt(r*D(e,t.ax,t.bx)*i*D(n,t.ay,t.by)),w:t.width,h:t.height})}if(t){let[e,r,i,a]=t.rect,o=t.width/(i-e),s=t.height/(a-r);n.push({name:`aux`,ctx:t.ctx,map:([t,n])=>[(t-e)*o,(a-n)*s],density:()=>Math.sqrt(o*s),w:t.width,h:t.height,bounds:[e,r,i,a]})}for(let e of n)e.ctx.globalCompositeOperation=`source-over`,e.ctx.fillStyle=`#000`,e.ctx.fillRect(0,0,e.w,e.h),e.ctx.globalCompositeOperation=`lighten`,e.ctx.lineCap=`round`,e.ctx.lineJoin=`round`;let r=(e,t,n)=>`rgb(${Math.round(s(e)*255)},${Math.round(s(t)*255)},${Math.round(s(n/255)*255)})`,i=(e,t,n=`r`,i=1)=>n===`g`?r(0,e*i,t*e):n===`rg`?r(e,e*i,t*e):r(e,0,t*e),a=(e,t,n)=>e.bounds&&t.every(([t,r])=>t<e.bounds[0]-n||t>e.bounds[2]+n||r<e.bounds[1]-n||r>e.bounds[3]+n),o=0;function c(e,t,n){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);n&&e.closePath()}function l(e,t,n){let r=t.length,i=[],a=[];for(let e=0;e<r;e++){let o=t[Math.max(0,e-1)],s=t[Math.min(r-1,e+1)],c=s[0]-o[0],l=s[1]-o[1],u=Math.hypot(c,l)||1;c/=u,l/=u;let d=n[e]/2;i.push([t[e][0]-l*d,t[e][1]+c*d]),a.push([t[e][0]+l*d,t[e][1]-c*d])}e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let t=1;t<r;t++)e.lineTo(i[t][0],i[t][1]);for(let t=r-1;t>=0;t--)e.lineTo(a[t][0],a[t][1]);e.closePath()}return{line(e,t,r=1,{slot:s=-1,code:l=s>=0?T(s):w.FIELD,close:u=!1,channel:d=`r`,dash:f=null}={}){if(!e||e.length<2)return;let p=u?[...e,e[0]]:e;for(let e of n){if(a(e,p,.05))continue;let n=e.ctx;for(let a=0;a<p.length-1;a+=24){let s=p.slice(a,Math.min(p.length,a+24+1)),u=t/S*e.density(s[Math.floor(s.length/2)]),m=r;u<1.6&&(m*=Math.max(.15,u/C),u=C),n.lineWidth=u,n.strokeStyle=i(m,l,d),f?n.setLineDash(f.map(t=>t/S*e.density(s[0]))):n.setLineDash([]),c(n,s.map(e.map)),n.stroke(),o++}n.setLineDash([])}},taper(e,t,n=1,r=.55,i={}){let a=e.length;a<2||this.ribbon(e,e.map((e,n)=>Math.max(.25,t*Math.sin(Math.PI*s(n/(a-1),.02,.98))**+r)),n,i)},ribbon(e,t,r=1,{slot:s=-1,code:c=s>=0?T(s):w.FIELD,channel:u=`r`,g:d=1}={}){if(!(!e||e.length<2))for(let s of n){if(a(s,e,.05))continue;let n=e.map(s.map),f=e.map((e,n)=>t[n]/S*s.density(e)),p=f.map(e=>Math.max(ee,e)),m=Math.max(.6,Math.sqrt(Math.min(1,f.reduce((e,t)=>e+t,0)/p.reduce((e,t)=>e+t,0))));s.ctx.fillStyle=i(r*(u===`r`?m:1),c,u,d),l(s.ctx,n,p),s.ctx.fill(),o++}},fill(e,{slot:t=-1,code:r=t>=0?T(t):w.FIELD,channel:s=`g`,alpha:l=1,only:u=null}={}){if(!(!e||e.length<3))for(let t of n)a(t,e,.05)||u&&t.name!==u||(t.ctx.fillStyle=i(l,r,s),c(t.ctx,e.map(t.map),!0),t.ctx.fill(),o++)},dot(e,t,r=1,{code:s=w.FIELD,channel:c=`r`}={}){for(let l of n){if(a(l,[e],.05))continue;let[n,u]=l.map(e),d=t/S*l.density(e),f=r;d<.6&&(f*=d/.6,d=.6),l.ctx.fillStyle=i(f,s,c),l.ctx.beginPath(),l.ctx.arc(n,u,d,0,Math.PI*2),l.ctx.fill(),o++}},star(e,t,n=1,r=6,i=0,a={}){this.dot(e,t*.42,n,a);for(let o=0;o<r;o++){let s=i+o*Math.PI*2/r,c=t*(o%2?.75:1.25)/S,l=t*.5/S;this.line([[e[0]+Math.cos(s)*l,e[1]+Math.sin(s)*l],[e[0]+Math.cos(s)*c,e[1]+Math.sin(s)*c*.8]],Math.max(.4,t*.16),n,a)}},glyph(e,t){let n=e.reduce((e,t)=>e+t.p.length,0),r=0;for(let i of e){let e=t(i);for(let t=0;t<i.p.length-1;t+=3){let a=Math.min(i.p.length,t+4),o=i.p.slice(t,a),s=e.slice(t,a);this.ribbon(o,s,1,{code:w.GLYPH,channel:`rg`,g:(r+t)/n})}r+=i.p.length}},get strokes(){return o}}}var O=e=>1+e/c,k=[238,194,116],re=[196,52,30],A=O(.175);function ie(e){let t=(e%9+9)%9/5.5;return{r:A+Math.min(t,1.4)**1.25*2/c,a:t<1.4?Math.sin(Math.PI/2*Math.min(1,t/.1))*(1-((e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/.8500000000000001));return r*r*(3-2*r)})(.5,1.35,t)):0}}function j(e,t,n,r,i,a,o={}){let s=[],c=o.step??.038,l=o.depth??2,u=o.stop||(()=>!1),d=o.steer||null,f=(t,n,r,i,a,p)=>{let m=[[t,n]],h=0;for(let s=0;s<i&&(h=h*.86+(e()-.5)*(o.wob??.07),e()<.025&&(h+=(e()-.5)*.5),r+=h,d&&(r=d(t,n,r)),t+=Math.cos(r)*c,n+=Math.sin(r)*c*1.25,m.push([t,n]),!u(t,n));s++)p<l&&s>6&&e()<(o.branch??.035)&&f(t,n,r+(e()<.5?-1:1)*(.55+e()*.5),(i-s)*(.35+e()*.3),a*.6,p+1);m.length>3&&s.push({p:m,w:a,d:p})};return f(t,n,r,i,a,0),s}var ae=Object.freeze([{p:((...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]))(n([0,-.012],[.012,-.014],[.03,-.012],[.046,.002],10),n([.046,.002],[.054,.01],[.05,.02],[.042,.016],6),n([.042,.016],[.03,.01],[.018,.016],[0,.012],8)),w:.9,fill:!0,close:!0,tint:0},{p:n([.006,-.002],[.018,-.004],[.026,0],[.034,.006],6),w:.5,tint:1}]),oe=Object.freeze({id:`fire`,glslId:`Fire`,metal:k,leaf:k,enamel:re,light:[255,226,170],look:{dark:1,bloom:.4,sheen:0,sheenGain:.6,tint:.45,lineAlpha:.95,reflect:.3,heat:.7,wave:.8,ring:1},motif:{scale:1.2,alpha:.95,enamel:.38},frieze:{enamel:.55,band:.08},rim:[O(.112)-.04,O(.15)+.04],glsl:`
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
    float r1 = ${(A+.065/c).toFixed(4)}, r2 = r1 + (1.1 + .35 * mod(i * 5., 4.) / 3.) / REFR0;
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
  `,paint(e,{frame:t,motifs:n}){let{ex:o,ey:s}=t,u=t.ornament,d=e=>e-1,f=(e,t)=>p(t,d(e),o,s);e.line(m(d(A),o,s,360),1.3,.85),e.line(m(d(A+.012/c),o,s,360),.5,.55);for(let t=0;t<240;t++){let n=t*i/240,r=A+.014/c,a=r+(t%4==0?.03:.018)/c*u;e.line([f(r,n),f(a,n)],t%4==0?.75:.45,t%4==0?.62:.38)}e.line(m(d(A+.05/c),o,s,360),.6,.6);let h=A+.065/c;for(let t=1;t<48;t+=2){let n=(t+.5)*i/48,r=h+((t%4==1?.34:.24)+.04*Math.sin(t*1.7))/c*u,a=t*1.3,o=[],s=[],d=[];for(let e=0;e<=36;e++){let t=e/36,p=l(h,r,t),m=.03/c*u*Math.sin(t*i*1.15+a)*t**.8,g=.019/c*u*(1-t)**.9*(1+.4*Math.sin(Math.PI*t));o.push(f(p,n+(m+g)/p)),s.push(f(p,n+(m-g)/p)),e>=2&&e<=30&&d.push(f(p,n+m/p))}e.fill(o.concat([...s].reverse()),{channel:`g`,alpha:.5}),e.taper(o,1,.85,.6),e.taper(s,.8,.7,.6),e.taper(d,.55,.6,.7)}for(let e=0;e<48;e++){let t=e*i/48,a=f(A+.06/c,t),l=Math.cos(t)/o,d=Math.sin(t)/s,p=Math.hypot(l,d);n.draw(r(ae,a,[l/p,d/p],u/c,0),{alpha:.8,enamel:.5,widthScale:.9,code:w.FIELD})}let g=a(127);for(let t=0;t<7;t++){let n=(t+.5)*i/7+.13,[r,a]=f(A+(.45+g()*.2)/c*u,n),o=j(g,r,a,n+(g()-.5)*.4,34+g()*24,1.4,{step:.014/c*u,wob:.05,branch:.04,depth:2,steer:(e,t,n)=>{let r=Math.atan2(t,e)-n;for(;r>Math.PI;)r-=i;for(;r<-Math.PI;)r+=i;return n+r*.12},stop:(e,t)=>Math.abs(e)>4||Math.abs(t)>6});for(let t of o){let n=t.p.length;e.ribbon(t.p,t.p.map((e,r)=>Math.max(.3,t.w*(1-.6*r/n)*(.75+.25*Math.sin(r*.9)))),.82,{code:w.SEAM}),e.line(t.p,t.d?4.5:6.5,1,{code:w.SEAM,channel:`g`})}}},uniforms(){return{}}}),se=Object.freeze({aries:{stars:[[.08,.44,1],[.56,.34,2],[.8,.52,1.5],[.88,.68,1]],lines:[[0,1],[1,2],[2,3]]},taurus:{mirror:!0,stars:[[.52,.58,2],[.4,.66,1],[.47,.48,1],[.86,.14,1.5],[.92,.42,1],[.24,.74,1],[.08,.86,1]],lines:[[1,0],[0,4],[1,2],[2,3],[1,5],[5,6]]},gemini:{stars:[[.3,.1,2],[.56,.14,2],[.24,.44,1],[.14,.7,1],[.08,.84,1],[.6,.46,1],[.52,.68,1],[.44,.9,1.5]],lines:[[0,1],[0,2],[2,3],[3,4],[1,5],[5,6],[6,7]]},cancer:{stars:[[.5,.5,1.5],[.53,.34,1],[.58,.08,1],[.2,.84,1.5],[.84,.9,2]],lines:[[2,1],[1,0],[0,3],[0,4]]},leo:{mirror:!0,stars:[[.3,.8,2],[.34,.58,1],[.44,.44,1.5],[.42,.26,1],[.28,.14,1],[.16,.22,1],[.94,.68,1.5],[.72,.42,1],[.72,.66,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[2,7],[7,6],[6,8],[8,0],[7,8]]},virgo:{stars:[[.08,.42,1],[.26,.47,1],[.4,.5,1.5],[.54,.34,1],[.64,.12,1],[.5,.68,1],[.5,.9,2],[.72,.54,1],[.9,.46,1]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[3,7],[7,8]]},libra:{stars:[[.3,.6,1.5],[.52,.14,2],[.78,.44,1],[.26,.92,1],[.84,.88,1]],lines:[[0,1],[1,2],[2,0],[0,3],[2,4]]},scorpius:{stars:[[.86,.08,1],[.92,.2,1],[.9,.34,1],[.78,.27,1],[.7,.33,2],[.64,.44,1],[.56,.6,1],[.52,.74,1],[.5,.86,1],[.38,.94,1],[.24,.9,1],[.14,.78,1],[.16,.66,1],[.26,.58,1.5]],lines:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]},sagittarius:{stars:[[.36,.52,1],[.38,.8,1.5],[.7,.74,1],[.62,.44,1],[.82,.36,2],[.88,.6,1],[.44,.24,1],[.18,.62,1]],lines:[[0,1],[1,2],[2,3],[3,0],[0,6],[6,3],[3,4],[4,5],[5,2],[0,7],[7,1]]},capricorn:{mirror:!0,stars:[[.1,.14,1.5],[.16,.3,1.5],[.36,.76,1],[.44,.9,1],[.66,.72,1],[.8,.54,1],[.94,.38,2],[.82,.36,1],[.64,.35,1],[.42,.33,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1]]},aquarius:{mirror:!0,stars:[[.04,.62,1],[.1,.5,1],[.24,.4,2],[.44,.24,2],[.58,.22,1],[.66,.18,1],[.76,.24,1],[.64,.08,1],[.52,.52,1],[.7,.6,1],[.82,.76,1],[.9,.92,1.5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[3,8],[8,9],[9,10],[10,11]]},pisces:{stars:[[.12,.9,1.5],[.16,.72,1],[.22,.52,1],[.27,.34,1],[.24,.18,1],[.36,.22,1],[.28,.84,1],[.4,.8,1],[.52,.74,1],[.63,.67,1],[.72,.6,1],[.8,.52,1],[.86,.42,1],[.94,.46,1],[.95,.58,1],[.88,.64,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,3],[0,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,11]]}}),M=e=>1+e/c,ce=[58,38,22],N=[190,146,62],P=Object.freeze({wi:M(.15),wo:M(.26),di:M(.275),dm:M(.3),do:M(.335),zi:M(.345),zo:M(.45),lo:M(.47),leaf:M(.268)}),le=[`aries`,`taurus`,`gemini`,`cancer`,`leo`,`virgo`,`libra`,`scorpius`,`sagittarius`,`capricorn`,`aquarius`,`pisces`],ue=Object.freeze({id:`atlas`,glslId:`Atlas`,metal:ce,leaf:N,enamel:[160,90,60],light:[255,236,170],quietOnPhone:!0,look:{dark:0,bloom:0,sheen:2,sheenGain:.9,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.35},motif:{scale:1.14/1.2,alpha:.9,enamel:.42},frieze:{enamel:.42,band:.1,guil:.16},rim:[P.wi-.04,P.leaf+.04],glsl:`
  vec3 groundAtlas(P p) {
    vec2 G = p.g; float r = p.rho, ang = p.th;
    vec3 vel = vec3(.82, .725, .56);
    float st = fbm(G * 2.6) * .6 + fbm3(p.q * .8) * .4;
    vec3 col = vel * (.84 + .24 * st);
    float fx = smoothstep(.70, .86, fbm3(G * 11. + 11.)); col *= 1. - fx * .10;
    col = mix(col, col * vec3(.86, .78, .66), smoothstep(.55, .9, fbm3(G * 1.3 + 4.)) * .5);
    col *= .95 + .07 * mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    // The hand-coloured wash ring: the strand's elements, each in its stone's colour, in proportion.
    float r1 = ${M(.155).toFixed(4)}, r2 = ${M(.255).toFixed(4)}; float en = (fbm3(G * 16.) - .5) * .048;
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
    float lo = ${P.lo.toFixed(4)};
    // The sky's graticule beyond the plate: dotted circles and hour lines (fading where finer than the pixels).
    float fade = 1. - smoothstep(.02, .05, p.px);
    float arc = p.th * r, fa = r * p.dth + abs(p.th) * p.drho, per = 4.6 / ${(c*600).toFixed(1)};
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
    vec3 leafCol = vec3(${N.map(e=>(e/255).toFixed(3)).join(`, `)});
    // The leaf line darkens like ink here; its light is the sheen's (the main composition adds no bloom on paper).
    return vec4((leafCol - uMetal) * leafL, max(c, leafL));
  }
  `,paint(e,{frame:t,strand:n}){let{ex:r,ey:a}=t,o=e=>e-1,s=(e,t=360)=>m(o(e),r,a,t);e.line(s(P.wi),.8,.75),e.line(s(P.wo),.8,.75),e.line(s(P.di),1,.85),e.line(s(P.do),1,.85),e.line(s(P.dm),.45,.6);for(let t=0;t<360;t+=2){let n=t*Math.PI/180,i=t%10==0,s=t%30==0?P.do:i?P.dm+.018/c:P.dm,l=i?P.di:P.dm-.012/c;e.line([p(n,o(l),r,a),p(n,o(s),r,a)],i?.85:.55,i?.9:.7)}e.line(s(P.zi),.55,.7),e.line(s(P.zo),1.3,.9),e.line(s(P.lo),.5,.6);for(let t=0;t<12;t++){let n=t*i/12-Math.PI/2;e.line([p(n,o(P.zi),r,a),p(n,o(P.zo),r,a)],.7,.75);let s=se[le[t]],l=n+i/24,u=(P.zi+P.zo)/2,d=.042/c*1.6,f=s.stars.map(e=>e[0]),m=s.stars.map(e=>e[1]),h=(Math.min(...f)+Math.max(...f))/2,g=(Math.min(...m)+Math.max(...m))/2,_=Math.max(Math.max(...f)-Math.min(...f),(Math.max(...m)-Math.min(...m))*1.6,.1),v=s.stars.map(([e,t])=>{let n=((s.mirror?1-e:e)-(s.mirror?1-h:h))/_,i=-(t-g)/_;return p(l+n*d*1.8/u,o(u+i*d*.9),r,a)});for(let[t,n]of s.lines)e.line([v[t],v[n]],.6,.7);v.forEach((t,n)=>e.star(t,(s.stars[n][2]>=2?3.4:2.3)*.8,.85,4,.4))}e.line(s(P.leaf),2,.95,{code:w.LEAF});for(let i of n.parts){if(!i.stone.stone)continue;let n=Math.max(0,i.n[1]),s=Math.hypot(i.q[0]/r,i.q[1]/a),l=Math.atan2(i.q[1]/a,i.q[0]/r),u=o(s)+i.r*1.1+(.035+.05*n*n*t.backRoom)/c;o(P.wi)-.03>u&&e.line([p(l,u,r,a),p(l,o(P.wi)-.03,r,a)],.5,.5)}},uniforms(){return{}}}),F=null;function I(){if(F)return F;let e=a(5021),t=new Uint8Array(262144);for(let n=0;n<t.length;n++)t[n]=Math.floor(e()*256);return F=t}function L(e,t){let n=I(),r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=(e,t)=>n[((t%256+256)%256*256+(e%256+256)%256)*4]/255,c=s(r,i),l=s(r+1,i),u=s(r,i+1),d=s(r+1,i+1);return(c+(l-c)*a)*(1-o)+(u+(d-u)*a)*o}var R=e=>1+e/c,de=[70,46,26],fe=[196,152,72],z=R(.13),B=.04,V=L;function pe(e,t,n=1,r=1){let i=n===1&&r===1?Math.hypot(e,t):Math.hypot(e/n,t/r);if(i<z)return 1;let a=e*c,o=t*c,s=(i-z)*c,l=V(a*2.1+5.3,o*2.1)*.6+V(a*4.7-2,o*4.7+3)*.28+V(a*10,o*10)*.12;return 1-.72*s**.75+.6*(l-.5)*d(0,.3,s)}function me(e){let t=[`water`,`fire`,`earth`,`air`].map((e,t)=>[e,t]).filter(([t])=>(e?.[t]??0)>.02).sort((t,n)=>(e[n[0]]??0)-(e[t[0]]??0));return[0,1,2,3].map(e=>t[e]?[1-B*(3.5+e*5),1-B*(1+e*5),t[e][1],1]:[2,2,0,0])}function he(e,t,n,r,i,a){let o=Math.ceil((r-t)/a)+1,s=Math.ceil((i-n)/a)+1,c=new Float32Array(o*s),l=[];for(let r=0;r<s;r++)for(let i=0;i<o;i++)c[r*o+i]=e(t+i*a,n+r*a);for(let e=0;e<s-1;e++)for(let r=0;r<o-1;r++){let i=c[e*o+r],s=c[e*o+r+1],u=c[(e+1)*o+r+1],d=c[(e+1)*o+r],f=Math.min(i,s,u,d),p=Math.max(i,s,u,d);if(!(p>=.999))for(let o=Math.ceil(f/B);o*B<=p;o++){let c=o*B,f=[],p=e=>t+e*a,m=e=>n+e*a;(i-c)*(s-c)<0&&f.push([p(r+(c-i)/(s-i)),m(e)]),(s-c)*(u-c)<0&&f.push([p(r+1),m(e+(c-s)/(u-s))]),(d-c)*(u-c)<0&&f.push([p(r+(c-d)/(u-d)),m(e+1)]),(i-c)*(d-c)<0&&f.push([p(r),m(e+(c-i)/(d-i))]),f.length>=2&&l.push([f[0],f[1]])}}return l}var ge=Object.freeze({id:`earth`,glslId:`Earth`,metal:de,leaf:fe,enamel:[160,186,196],light:[255,230,160],quietOnPhone:!0,look:{dark:0,bloom:0,sheen:2,sheenGain:.7,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.35},motif:{scale:1.2,alpha:.95,enamel:.45},frieze:{enamel:.38,band:.1,guil:.16},rim:[R(.118)-.04,R(.13)+.04],defaults:{uRose:[.14,.9]},glsl:`
  uniform vec4 uEarthBand[4];   // lo, hi, element index, present
  uniform vec2 uRose;   // the rose's place in the tile (bottom left; bottom right on a phone, where the caption sits left)

  float earthH(vec2 q, float rho) {
    float P = ${z.toFixed(4)}; if (rho < P) return 1.;
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
        float de = min(h - b.x, b.y - h) / ${B.toFixed(3)};
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
    float k = h / ${B.toFixed(3)}, kn = floor(k + .5), d = k - kn;
    bool idx = mod(kn, 5.) < .5;
    // The contour's screen width from the terrain's slope (no derivative inside the plate's branch).
    float e = .01, gh = length(vec2(earthH(p.q + vec2(e, 0.), plateRadius(p.q + vec2(e, 0.))) - h, earthH(p.q + vec2(0., e), plateRadius(p.q + vec2(0., e))) - h)) / e;
    float c = aaLine(d, max(gh * p.px / ${B.toFixed(3)}, 1e-5), (idx ? 1. : .5) * uPxU) * (idx ? .88 : .5);
    c *= (1. - smoothstep(.04, .09, p.px)) * step(h, .999);
    c = max(c, earthRose(p, p.tpw));
    return vec4(0., 0., 0., c);
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t,o=e=>e-1,l=(e,t)=>pe(e,t,n,r),u=[-.6,.8];he(l,-3.4,-2.6,3.4,4.4,.045).forEach(([t,i],a)=>{if(a%2)return;let o=(t[0]+i[0])/2,d=(t[1]+i[1])/2;if(Math.hypot(o/n,d/r)<z+.07)return;let f=.035,p=(l(o+f,d)-l(o-f,d))/(2*f),m=(l(o,d+f)-l(o,d-f))/(2*f),h=Math.hypot(p,m)*c;if(h<.6)return;let g=-p/Math.hypot(p,m),_=-m/Math.hypot(p,m),v=s(.5-.5*(g*u[0]+_*u[1]));if(v<.35)return;let y=(.004+.01*v)*Math.min(1.4,h/1.5)/c;e.line([[o,d],[o+g*y,d+_*y]],.3+.45*v,.2+.45*v)});for(let t=0;t<260;t++){let a=t*i/260,l=s(.5-.5*(Math.cos(a)*u[0]+Math.sin(a)*u[1])),d=(.012+.016*l)/c,f=o(z)+.004/c;e.line([p(a,f,n,r),p(a,f+d,n,r)],.35+.4*l,.3+.4*l)}let d=a(128),f=.035;for(let t of[-.5,2.2,3.9]){let[a,s]=p(t,o(z)+.05/c,n,r),u=j(d,a,s,t,60,1,{step:.012/c,wob:.04,branch:.03,depth:1,steer:(e,t,n)=>{let r=l(e+f,t)-l(e-f,t),a=l(e,t+f)-l(e,t-f);if(Math.hypot(r,a)<1e-6)return n;let o=Math.atan2(-a,-r)-n;for(;o>Math.PI;)o-=i;for(;o<-Math.PI;)o+=i;return n+o*.22},stop:(e,t)=>Math.abs(e)>3.4||t<-2.6||t>4.4});for(let t of u){let n=t.p.length,r=t.p.map((e,r)=>(t.d?.9:1.6)*(.5+.5*r/n)*1.6);e.ribbon(t.p,r,.5,{code:w.FIELD,channel:`g`}),e.line(t.p,.4,.5)}}e.line(m(o(z)+.002/c,n,r,360),1.6,.9,{code:w.LEAF})},uniforms({mood:e}){return{uEarthBand:me(e?.shares)}}}),H=e=>1+e/c,_e=[46,56,74],ve=Object.freeze([{base:.265,sp:.006,c:[[.06,.245,.03],[.1,.225,.04],[.15,.2,.05],[.2,.185,.045],[.25,.17,.055],[.31,.19,.045],[.36,.215,.04],[.41,.24,.028],[.22,.225,.045],[.13,.24,.035],[.29,.23,.04]]},{base:.13,sp:.004,c:[[.6,.118,.022],[.64,.1,.03],[.69,.085,.034],[.74,.095,.03],[.79,.11,.024],[.83,.12,.016]]},{base:.36,sp:.008,c:[[.78,.34,.025],[.82,.32,.033],[.87,.3,.04],[.92,.31,.034],[.97,.33,.03],[1.02,.345,.022]]},{base:.84,sp:0,c:[[-.06,.76,.12],[.1,.71,.13],[.27,.72,.12],[.45,.71,.13],[.63,.72,.12],[.8,.7,.13],[.98,.74,.12]]},{base:.99,sp:.005,c:[[.12,.95,.04],[.19,.93,.055],[.27,.95,.04]]}]),ye=Object.freeze([[.18,.43,.9],[.74,.21,.7],[.82,.24,.55]]);function be(){let e=[],t=[];for(let n of ve){let r=n.c.flatMap(([e,,t])=>[e-t*.8,e+t*.8]),i=Math.min(...r),a=Math.max(...r);for(let[r,o,s]of n.c)e.push([r,o,s,0]),t.push([n.base,n.sp,i,a])}return{puffs:e,bases:t}}var xe=Object.freeze({id:`air`,glslId:`Air`,metal:_e,leaf:[196,160,92],enamel:[60,184,173],light:[255,236,190],look:{dark:0,bloom:0,sheen:2,sheenGain:.7,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.4},motif:{scale:1.2,alpha:.95,enamel:.45},frieze:{enamel:.42,band:.1,guil:.14},rim:[H(.112)-.04,H(.175)+.04],glsl:`
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
    // SAHNE A-7: one white to the horizon (the far part was a blue-grey band, .80 .83 .86, toward the tile's top).
    vec3 col = vec3(.90, .88, .83);
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
    const vec3 SWALLOW[3] = vec3[3](${ye.map(e=>`vec3(${e.map(e=>e.toFixed(3)).join(`, `)})`).join(`, `)});
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
    float R1 = ${H(.2).toFixed(4)}, b = .19, N = 12.;
    float u = log(max(p.rho, 1e-3) / R1) / b, sOn = step(0., u) * step(u, 3.6);
    // Screen widths from the derivatives taken in uniform flow (none inside a plate's branch: see P.tpw).
    float fu = p.drho / (max(p.rho, 1e-3) * b), ph = (p.th - u - p.t * .025) / (6.2831853 / N), kk = floor(ph + .5), fd = (p.dth + fu) / (6.2831853 / N);
    fd = fd > .5 ? fu / (6.2831853 / N) : fd;
    bool heavy = mod(kk, 3.) < .5;
    float taper = pow(max(sin(3.14159 * clamp(u / 3.6, 0., 1.)), 0.), .5);
    c = max(c, aaLine(ph - kk, fd, (heavy ? 1.3 : .8) * uPxU * taper) * (heavy ? .55 : .38) * sOn * (1. - C.k) * (1. - smoothstep(.05, .1, p.px)));
    return vec4(light, c);
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t;e.line(m(H(.175)-1,n,r,360),1.5,.9,{code:w.LEAF})},uniforms(){let{puffs:e,bases:t}=be();return{uClouds:e,uCloudB:t,uCloudCount:e.length}}}),U=e=>1+e/c,Se=U(.5),W={scorpius:{g0:[.02,.03,.055],g1:[.01,.016,.03],warm:[.1,.075,.045],mw:[.1,.02,.36,.11],mwa:1},leo:{g0:[.04,.02,.016],g1:[.016,.009,.008],warm:[.13,.07,.03],mw:[.9,0,-.42,.09],mwa:1},pisces:{g0:[.016,.034,.058],g1:[.008,.016,.03],warm:[.06,.07,.07],mw:[.62,0,.2,.085],mwa:1}},G={g0:[.03,.026,.02],g1:[.012,.011,.009],warm:[.1,.08,.05],mw:[.2,0,.3,.1],mwa:1},K={g0:[.024,.024,.048],g1:[.01,.01,.024],warm:[.08,.075,.08],mw:[.75,0,-.25,.1],mwa:1},Ce=Object.freeze({...W,aries:{...W.leo,mw:[.15,0,.4,.09],mwa:1},sagittarius:{...W.leo,mw:[.5,0,.05,.11],mwa:1},cancer:{...W.pisces,mw:[.3,0,.3,.1],mwa:1},taurus:G,virgo:{...G,mw:[.8,0,-.35,.09]},capricorn:{...G,mw:[.45,0,.1,.1],mwa:1},gemini:K,libra:{...K,mw:[.25,0,.35,.1]},aquarius:{...K,mw:[.5,0,-.1,.11],mwa:1}}),q=[232,198,128],we=Object.freeze({id:`sign`,glslId:`Sign`,metal:q,leaf:q,enamel:[120,170,210],light:[255,236,190],quietOnPhone:!0,look:{dark:1,bloom:.38,sheen:0,sheenGain:.7,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:.8},motif:{scale:1.25,alpha:.95,enamel:.3},frieze:{enamel:.46,band:.12},rim:[U(.118)-.05,U(.148)+.04],defaults:{uSignG0:[.02,.03,.055],uSignG1:[.01,.016,.03],uSignWarm:[.1,.075,.045],uSignMW:[.1,.02,.36,.11],uSignMWA:1},glsl:`
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
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t,a=Se-1,o=1/c;e.line(m(a,n,r,360),1,.5),e.line(m(a+.03*o,n,r,360),.5,.4),e.line(m(a+.075*o,n,r,360),.5,.3);for(let t=0;t<360;t+=2){let i=t*Math.PI/180,s=(t%10==0?.03:.014)*o;e.line([p(i,a,n,r),p(i,a+s,n,r)],t%10==0?.6:.4,t%10==0?.42:.26)}for(let t=0;t<12;t++)e.star(p(t*i/12,a+.052*o,n,r),2.2,.55,4,0)},uniforms({sign:e}){let t=Ce[e]??W.scorpius;return{uSignG0:t.g0,uSignG1:t.g1,uSignWarm:t.warm,uSignMW:t.mw,uSignMWA:t.mwa}}}),J=e=>1+e/c,Y=Object.freeze({ring:J(.06),cell:.36,unit:2.684}),Te={"./deniz-alti.js":Object.freeze({id:`deniz-alti`,glslId:`Deniz`,label:`Deniz altı`,metal:[64,104,110],leaf:[64,104,110],enamel:[150,190,196],light:[250,248,236],look:{dark:0,bloom:0,sheen:2,sheenGain:0,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.55},ornament:`motifs`,motif:{scale:1.2,alpha:0,enamel:0},frieze:{},rim:[J(.04),J(.1)],glsl:`
  // The caustic net of scene 37 (the classic tileable water caustic: four turns of a slowly rotating field); x in
  // tile units (the pattern repeats every unit), returns the net's brightness (thin bright threads, about 0 between).
  float denizCaus(vec2 x, float time) {
    vec2 q = x * 6.2831853 - 250., i = q; float c = 1.;
    for (int n = 0; n < 4; n++) {
      float tt = time * (1. - 3.5 / float(n + 1));
      i = q + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
      c += 1. / length(vec2(q.x / (sin(i.x + tt) / .005), q.y / (cos(i.y + tt) / .005)));
    }
    c = abs(1.17 - pow(c / 4., 1.4)); c *= c; c *= c;
    return c * c;
  }
  float denizDepth(P p) { return smoothstep(1.5, 4.2, p.rho); }
  vec3 groundDeniz(P p) {
    float r = p.rho, deep = denizDepth(p);
    // Pale sand under shallow water, a breath warmer near the piece; deepening to a soft blue-green.
    vec3 sand = mix(vec3(.69, .765, .755), vec3(.785, .80, .755), exp(-r * r * .3));
    float m = fbm3(p.q * .9);
    sand *= .965 + .07 * m + .02 * fineNoise(p.q * 34., p.lod);
    vec3 col = mix(sand, vec3(.34, .52, .55), deep);
    col = mix(col, vec3(.16, .31, .37), smoothstep(3.2, 8., r));
    // The stones' light, very faint, on the sand under them.
    col += p.glow * .035;
    return col;
  }
  vec4 fieldDeniz(P p) {
    float t = p.t, r = p.rho, deep = denizDepth(p);
    // Tiles per plate unit, from the plate unit's real size on the table (the layer's uPlateUnit): the same real net
    // under a bracelet and a necklace.
    float cells = ${Y.cell.toFixed(3)} * uPlateUnit / ${Y.unit.toFixed(3)};
    vec2 x = p.q * cells + vec2(.3 + t * .004, .1 - t * .003);
    // The threads are a few hundredths of a tile wide: where a pixel grows near that, the net gives way to its average.
    float fw = p.px * cells;
    float net = mix(clamp(denizCaus(x, t * .16), 0., 1.2), .1, smoothstep(.006, .02, fw));
    // Some threads of the net are brighter than others; it breathes in broad slow patches and fades with depth.
    float thread = .55 + .45 * smoothstep(.25, .8, vn(x * 2.2 + 13.));
    float breath = .5 + .5 * smoothstep(.25, .8, vn(p.q * .38 + vec2(t * .01, -t * .007) + 5.));
    float k = net * thread * breath * (1. - .8 * deep);
    // One slow ring of light round the strand, and the net a little brighter in its band.
    float R = ${Y.ring.toFixed(4)} + .02 * sin(t * .21);
    float band = exp(-pow((r - R) / .18, 2.));
    k *= 1. + .35 * band;
    float ring = exp(-pow((r - R) / .014, 2.)) * .5 + exp(-pow((r - R - .08 - .012 * sin(t * .21 + 1.3)) / .022, 2.)) * .2;
    ring *= (1. - smoothstep(.02, .06, p.px)) * (.75 + .25 * breath);
    // The light under a stone takes that stone's colour.
    vec3 lightCol = mix(vec3(1., .995, .96), p.wash, clamp(p.washW * .9, 0., 1.) * .5);
    vec3 add = lightCol * k * .27 + vec3(1., .99, .95) * ring * .16 * (1. - deep);
    // Sand ripples: a few faint wavy hairlines on the floor, fading where they would crowd and under the light.
    vec2 dir = vec2(.94, .34);
    float s = (dot(p.q, dir) + .3 * (vn(p.q * .8 + 3.) - .5)) / .21;
    float rf = fwq(p, dir / .21);
    float rip = aaLine((fract(s) - .5), rf, .7 * uPxU) * (1. - smoothstep(.1, .25, rf));
    rip *= .065 * smoothstep(.4, .75, vn(p.q * .9 + 9.)) * (1. - smoothstep(1.8, 3., r)) * smoothstep(1.1, 1.35, r) * (1. - .7 * net);
    return vec4(add, rip);
  }
  `,paint(){},uniforms(){return{}}})};function X(n={}){return Object.keys(n).sort().map(e=>n[e]?.default??n[e]).filter(e=>e&&typeof e.id==`string`&&/^[a-z][a-z-]{1,23}$/.test(e.id)&&typeof e.glslId==`string`&&typeof e.glsl==`string`&&typeof e.paint==`function`&&typeof e.uniforms==`function`).map(n=>Object.freeze({...n,fixed:!0,label:t(`atmosphere.scenes.fixed.${n.id}`)?e(`atmosphere.scenes.fixed.${n.id}`):typeof n.label==`string`&&n.label?n.label:n.id}))}var Z=Object.freeze(X(Te)),Ee=[x,oe,ue,ge,xe,we],Q=Object.freeze([...Ee,...Z.filter(e=>!Ee.some(t=>t.id===e.id))]),$=Object.freeze(Object.fromEntries(Q.map((e,t)=>[e.id,t])));function De(e){return Q[$[e]??$.atlas]}export{De as a,ie as c,ne as d,te as f,_ as g,h,X as i,w as l,v as m,Q as n,I as o,T as p,$ as r,L as s,Z as t,S as u};