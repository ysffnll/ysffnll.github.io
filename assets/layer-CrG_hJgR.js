import{Hn as e,L as t,Rn as n,V as r,Wi as i,ar as a,ft as o,io as s,jr as c,no as l,pa as u,qt as d,ro as f,ta as p}from"./three.core-Dp-eO7LC.js";var m=Math.PI*2,h=(e,t=0,n=1)=>e<t?t:e>n?n:e,g=(e,t,n)=>{let r=h((n-e)/(t-e));return r*r*(3-2*r)};function _(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function v(e,t,n,r,i){let a=[];for(let o=0;o<=i;o++){let s=o/i,c=1-s;a.push([c*c*c*e[0]+3*c*c*s*t[0]+3*c*s*s*n[0]+s*s*s*r[0],c*c*c*e[1]+3*c*c*s*t[1]+3*c*s*s*n[1]+s*s*s*r[1]])}return a}function y(e,t,n,r,i,a,o,s=1){let c=[];for(let l=0;l<=o;l++){let u=i*m*l/o,d=r+s*u,f=n*Math.exp(-a*u);c.push([e+f*Math.cos(d),t+f*Math.sin(d)])}return c}var b=.29,x=.04,S=Object.freeze({water(e){let t=[];for(let e=0;e<4;e++){let n=.036*(1-e*.23),r=[];for(let e=0;e<=32;e++){let t=Math.PI*e/32;r.push([n*Math.sin(t)*1.3,-n*Math.cos(t)])}if(e===0){let e=r[r.length-1];r.push(...y(e[0]+.009,e[1],.009,Math.PI,.85,.5,18,-1).slice(1))}t.push({p:r,w:1.15-e*.2,tint:e/3})}return t},fire(e){let t=[],n=.0025*Math.sin(e),r=e=>{let t=([t,r])=>[t*e,r*e+t*e*(t*e)*n*60],r=[v([0,0],[0,-.026],[.026,-.032],[.046,-.02],14),v([.046,-.02],[.062,-.01],[.076,.004],[.074,.022],12),v([.074,.022],[.073,.032],[.062,.034],[.06,.025],8),v([.06,.025],[.056,.014],[.044,.026],[.028,.026],10),v([.028,.026],[.01,.026],[0,.016],[0,0],10)],i=[];return r.forEach((e,t)=>{i=i.concat(t?e.slice(1):e)}),i.map(t)};return t.push({p:r(1),w:1.15,fill:!0,close:!0,tint:0}),t.push({p:r(.58).map(([e,t])=>[e+.008,t+.002]),w:.7,close:!0,tint:1}),t.push({p:y(.016,.006,.008,Math.PI*.5,1,.5,18),w:.7,tint:1}),t},earth(e){let t=[];for(let n=0;n<4;n++){let r=.036-n*.0078,i=.05-n*.0112,a=[];for(let t=0;t<=32;t++){let o=-1+2*t/32,s=(1-o*o)**.72;a.push([i*s*(1+.05*Math.sin(o*4+n+e*.3)),r*o])}t.push({p:a,w:1.05-n*.17,tint:n/3})}let n=[];for(let e=0;e<=20;e++){let t=e*m/20;n.push([.058+.0065*Math.sin(t)*1.3,.0045*Math.cos(t)])}return t.push({p:n,w:.8,close:!0,fill:!0,tint:1}),t},air(e){let t=[];for(let n=0;n<2;n++){let r=[],i=n*.013,a=1-n*.3;for(let t=0;t<18;t++){let n=t/18;r.push([.006+i+.034*n*n,-.052+.075*n+.003*Math.sin(e+n*3)])}let o=[.006+i+.034,.023],s=.016*a;t.push({p:r.concat(y(o[0]-s,o[1],s,0,.95,.5,28)),w:1.05-n*.3,tint:n})}return t}});function C(e,t,n,r,i=0){let[a,o]=n,s=-o,c=a,l=Math.cos(i),u=Math.sin(i);return e.map(e=>({...e,q:e.p.map(([e,n])=>{let i=(e*l-n*u)*r,d=(e*u+n*l)*r;return[t[0]+a*i+s*d,t[1]+o*i+c*d]})}))}var w=24*Math.PI/180;function T(e,t,n=1,r=1){let i=Math.cos(e),a=Math.sin(e),o=i/n,s=a/r,c=Math.hypot(o,s)||1;return[n*i+o/c*t,r*a+s/c*t]}function E(e,t=1,n=1,r=256,i=0,a=m){let o=[];for(let s=0;s<=r;s++)o.push(T(i+(a-i)*s/r,e,t,n));return o}function ee(e,{kind:t=`bracelet`,view:n={}}={}){let r=e.filter(e=>e.stone),i=r.length>=3?r:e;if(i.length<2)return null;let[a,o]=Array.isArray(n.toward)&&n.toward.every(Number.isFinite)&&Math.hypot(...n.toward)>1e-6?n.toward:[0,1],s=Math.hypot(a,o);a/=s,o/=s;let c=[-a,-o],l=[-c[1],c[0]],u=i.map(e=>e.position[0]*l[0]+e.position[2]*l[1]),d=i.map(e=>e.position[0]*c[0]+e.position[2]*c[1]),f=(Math.min(...u)+Math.max(...u))/2,p=(Math.min(...d)+Math.max(...d))/2,m=[f*l[0]+p*c[0],f*l[1]+p*c[1]],g=i.map(e=>[e.position[0]-m[0],e.position[2]-m[1]]).map(([e,t])=>[e*l[0]+t*l[1],e*c[0]+t*c[1]]),_=t===`necklace`,v,y=1,S=1;if(!_)v=Math.max(...g.map(([e,t])=>Math.hypot(e,t)));else{let e=Math.max(...g.map(([e])=>Math.abs(e))),t=Math.max(...g.map(([,e])=>Math.abs(e)));v=Math.max(1e-6,Math.min(e,t)),y=e/v,S=t/v}v=Math.max(1e-6,v);let C=Number.isFinite(n.elevation)?n.elevation:w,T=i.map(e=>e.radius/v).sort((e,t)=>e-t),E=h((T[Math.floor(T.length/2)]??.04/.29)/(x/b),.3,1);return Object.freeze({centre:Object.freeze(m),right:Object.freeze(l),away:Object.freeze(c),scale:v,ex:y,ey:S,necklace:_,elevation:C,ornament:E,backRoom:h((Math.cos(C)/Math.cos(w))**2,0,1.3)})}function D(e,t,n){let r=t-e.centre[0],i=n-e.centre[1];return[(r*e.right[0]+i*e.right[1])/e.scale,(r*e.away[0]+i*e.away[1])/e.scale]}function te(e,t,{motifScale:n=1.2}={}){let r=e.length,i=e.map(e=>D(t,e.position[0],e.position[2])),a=e.map((n,a)=>{let o=i[(a-1+r)%r],s=i[(a+1)%r],c=i[a],l=s[0]-o[0],u=s[1]-o[1],d=Math.hypot(l,u)||1;l/=d,u/=d;let f=u,p=-l,m=c[0]/(t.ex*t.ex),h=c[1]/(t.ey*t.ey);if(f*m+p*h<0&&(f=-f,p=-p),!Number.isFinite(f)||r<3){let e=Math.hypot(m,h)||1;f=m/e,p=h/e}return{stone:e[a],q:c,r:e[a].radius/t.scale,n:[f,p]}}),o=a.filter(e=>e.stone.stone),s=Math.max(1,Math.ceil(o.length/48)),c=[];o.forEach((e,r)=>{if(r%s)return;let i=c.length,a=Math.max(0,e.n[1]),o=e.r*1.05+.03+.17*a*a*t.backRoom,l=[e.q[0]+e.n[0]*o,e.q[1]+e.n[1]*o],u=h(e.r/(x/b),.4,1.3);c.push({slot:i,id:e.stone.id,element:e.stone.element,base:l,out:e.n,scale:n*u/b,phase:r*.9})});let l=Math.max(1,Math.ceil(o.length/48)),u=o.filter((e,t)=>t%l===0).map(e=>({id:e.stone.id,q:e.q,r:e.r*Math.sqrt(l),color:e.stone.color,glow:e.stone.glow,element:e.stone.element,elementIndex:e.stone.elementIndex})),d=null,f=null,p=[];for(let e of a){let n=Math.atan2(e.q[1]/t.ey,e.q[0]/t.ex);if(f===null)d=n;else{let e=n-f;for(;e>Math.PI;)e-=m;for(;e<-Math.PI;)e+=m;d+=e}f=n,p.push(d)}let g=p.length>1&&Math.sign(p[p.length-1]-p[0])||1;return Object.freeze({parts:a,motifs:c,lights:u,rimStart:p[0]??-Math.PI/2,rimDirection:g})}function ne(e,t=0,n=e.element){return C((S[n]??S.water)(t+e.phase),e.base,e.out,e.scale)}var O=e=>1+e/b,k=Object.freeze({pool:O(.118),stream:O(.16),plate:O(.62)}),re=Object.freeze({id:`water`,glslId:`Water`,metal:[228,206,158],leaf:[228,206,158],enamel:[120,170,210],light:[255,236,190],look:{dark:1,bloom:.4,sheen:0,sheenGain:.7,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:1},motif:{scale:1.25,alpha:.95,enamel:.3},rim:[O(.118)-.05,O(.148)+.04],glsl:`
  vec3 groundWater(P p) {
    float r = p.rho * REFR0, Rp = ${k.plate.toFixed(4)}, Rpool = ${k.pool.toFixed(4)};
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
  // A whirlpool: three arms winding 2.3 turns into its centre, turning slowly.
  float whirlW(P p, vec2 Q, vec3 w, float dir) {
    vec2 d = Q - w.xy; float rw = length(d);
    float tt = 1. - rw / w.z, ph = p.t * .06 * dir + dir;
    float a = atan(d.y, d.x) - ph - tt * 2.3 * 6.2831853;
    float da = mod(a + 1.0471976, 2.0943951) - 1.0471976;
    float dist = da * rw, fd = fwidth(dist);
    fd = fd > w.z * .5 ? fwidth(rw) * 2.3 * 6.2831853 : fd;
    return aaLine(dist, fd, 1.3 * uPxU * pow(max(sin(3.14159 * clamp(tt, 0., 1.)), 0.), .4)) * .9 * smoothstep(0., .08, tt) * step(rw, w.z);
  }
  vec4 fieldWater(P p) {
    float Rp = ${k.plate.toFixed(4)}, R = ${k.stream.toFixed(4)};
    vec2 Q = p.rho * vec2(cos(p.th), sin(p.th));
    vec3 W1 = vec3(1.034, 1.638, .345), W2 = vec3(-1.103, -1.845, .345);
    float lf = smoothstep(.45, .78, vn(p.g * 1.7 + vec2(p.t * .045, -p.t * .03)) * .65 + vn(p.g * 3.4 + vec2(9. - p.t * .03, p.t * .02)) * .35)
      * (1. - smoothstep(Rp - .17, Rp + .17, p.rho));
    float sl = 0., light = 0.;
    float gap = smoothstep(R, R + .04, p.rho) * (1. - smoothstep(Rp - .1, Rp - .05, p.rho));
    gap *= smoothstep(W1.z * 1.18, W1.z * 1.26, length((Q - W1.xy) * vec2(1., .9))) * smoothstep(W2.z * 1.18, W2.z * 1.26, length((Q - W2.xy) * vec2(1., .9)));
    {
      // Streamlines: level lines of the flow past the loop, spaced to stay even on screen, gently breathing.
      float k = 1. - exp(-max(0., p.rho - R) * 5. * REFR0);
      float psi0 = Q.y * (1. - R * R / max(dot(Q, Q), 1e-3));
      float Z = Q.y - .0259 * k * sin(Q.x * 2.9 + psi0 * 6.85 + p.t * .42);
      float psi = Z * (1. - R * R / max(Q.x * Q.x + Z * Z, 1e-3));
      float gq = psi / (1. + .08 * abs(psi)), stp = .2;
      float idx = floor(gq / stp), hj = h21(vec2(idx, 3.1));
      float target = (idx + .5 + (hj - .5) * .4) * stp;
      float dl = gq - target, fw = fwidth(gq);
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
    float rimC = aaLine(p.rho - Rp, fwidth(p.rho), 1.4 * uPxU) * .75;
    rimC = max(rimC, aaLine(p.rho - Rp - .086, fwidth(p.rho), .6 * uPxU) * .5);
    float ta = mod(p.th * 120. / 6.2831853 + .5, 1.) - .5, ti = floor(p.th * 120. / 6.2831853 + .5);
    float tl = mod(ti, 5.) < .5 ? .086 : .041, tick = ta * 6.2831853 / 120. * p.rho;
    float ftk = fwidth(tick); ftk = ftk > .5 ? fwidth(p.rho) : ftk;
    rimC = max(rimC, aaLine(tick, ftk, .5 * uPxU) * step(Rp, p.rho) * step(p.rho, Rp + tl) * .45);
    vec3 add = gold * sl * 1.1 * lf + vec3(255., 236., 190.) / 255. * light * .8;
    return vec4(add, max(sl * .1, rimC));
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t;e.line(E(k.pool-1,n,r,360),1.2,.8),e.line(E(O(.131)-1,n,r,360),.6,.55);let i=E(O(.148)-1,n,r,120);for(let t=0;t<120;t++)e.dot(i[t],1.05,.7)},uniforms(){return{}}}),A=b*600,j=Object.freeze({FIELD:0,SEAM:236,LEAF:248,GLYPH:255}),M=e=>4*(e+1);function ie(e,t,n){let r=Math.abs(e);return Math.sign(e)*(r<=t?r:t+n*Math.tanh((r-t)/n))}function ae(e,t,n){let r=Math.abs(e);if(r<=t)return 1;let i=Math.cosh((r-t)/n);return 1/(i*i)}function oe(e,{texels:t=2048,core:n=.6,reach:r=1}={}){let i=e.ex+n,a=e.ey+n,o=r,s=r,c=i+o,l=a+s,u=t,d=Math.max(256,Math.round(t*l/c/8)*8);return Object.freeze({ax:i,ay:a,bx:o,by:s,Tx:c,Ty:l,width:u,height:d})}function N({near:e,aux:t=null}){let n=[];if(e){let t=e.layout,r=t.width/2/t.Tx,i=t.height/2/t.Ty;n.push({ctx:e.ctx,map:([e,n])=>[t.width/2+ie(e,t.ax,t.bx)*r,t.height/2-ie(n,t.ay,t.by)*i],density:([e,n])=>Math.sqrt(r*ae(e,t.ax,t.bx)*i*ae(n,t.ay,t.by)),w:t.width,h:t.height})}if(t){let[e,r,i,a]=t.rect,o=t.width/(i-e),s=t.height/(a-r);n.push({ctx:t.ctx,map:([t,n])=>[(t-e)*o,(a-n)*s],density:()=>Math.sqrt(o*s),w:t.width,h:t.height,bounds:[e,r,i,a]})}for(let e of n)e.ctx.globalCompositeOperation=`source-over`,e.ctx.fillStyle=`#000`,e.ctx.fillRect(0,0,e.w,e.h),e.ctx.globalCompositeOperation=`lighten`,e.ctx.lineCap=`round`,e.ctx.lineJoin=`round`;let r=(e,t,n)=>`rgb(${Math.round(h(e)*255)},${Math.round(h(t)*255)},${Math.round(h(n/255)*255)})`,i=(e,t,n=`r`,i=1)=>n===`g`?r(0,e*i,t*e):n===`rg`?r(e,e*i,t*e):r(e,0,t*e),a=(e,t,n)=>e.bounds&&t.every(([t,r])=>t<e.bounds[0]-n||t>e.bounds[2]+n||r<e.bounds[1]-n||r>e.bounds[3]+n),o=0;function s(e,t,n){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);n&&e.closePath()}function c(e,t,n){let r=t.length,i=[],a=[];for(let e=0;e<r;e++){let o=t[Math.max(0,e-1)],s=t[Math.min(r-1,e+1)],c=s[0]-o[0],l=s[1]-o[1],u=Math.hypot(c,l)||1;c/=u,l/=u;let d=n[e]/2;i.push([t[e][0]-l*d,t[e][1]+c*d]),a.push([t[e][0]+l*d,t[e][1]-c*d])}e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let t=1;t<r;t++)e.lineTo(i[t][0],i[t][1]);for(let t=r-1;t>=0;t--)e.lineTo(a[t][0],a[t][1]);e.closePath()}return{line(e,t,r=1,{slot:c=-1,code:l=c>=0?M(c):j.FIELD,close:u=!1,channel:d=`r`,dash:f=null}={}){if(!e||e.length<2)return;let p=u?[...e,e[0]]:e;for(let e of n){if(a(e,p,.05))continue;let n=e.ctx;for(let a=0;a<p.length-1;a+=24){let c=p.slice(a,Math.min(p.length,a+24+1)),u=t/A*e.density(c[Math.floor(c.length/2)]),m=r;u<1&&(m*=Math.max(.15,u),u=1),n.lineWidth=u,n.strokeStyle=i(m,l,d),f?n.setLineDash(f.map(t=>t/A*e.density(c[0]))):n.setLineDash([]),s(n,c.map(e.map)),n.stroke(),o++}n.setLineDash([])}},taper(e,t,n=1,r=.55,i={}){let a=e.length;a<2||this.ribbon(e,e.map((e,n)=>Math.max(.25,t*Math.sin(Math.PI*h(n/(a-1),.02,.98))**+r)),n,i)},ribbon(e,t,r=1,{slot:s=-1,code:l=s>=0?M(s):j.FIELD,channel:u=`r`,g:d=1}={}){if(!(!e||e.length<2))for(let s of n){if(a(s,e,.05))continue;let n=e.map(s.map),f=e.map((e,n)=>Math.max(.7,t[n]/A*s.density(e)));s.ctx.fillStyle=i(r,l,u,d),c(s.ctx,n,f),s.ctx.fill(),o++}},fill(e,{slot:t=-1,code:r=t>=0?M(t):j.FIELD,channel:c=`g`,alpha:l=1}={}){if(!(!e||e.length<3))for(let t of n)a(t,e,.05)||(t.ctx.fillStyle=i(l,r,c),s(t.ctx,e.map(t.map),!0),t.ctx.fill(),o++)},dot(e,t,r=1,{code:s=j.FIELD,channel:c=`r`}={}){for(let l of n){if(a(l,[e],.05))continue;let[n,u]=l.map(e),d=t/A*l.density(e),f=r;d<.6&&(f*=d/.6,d=.6),l.ctx.fillStyle=i(f,s,c),l.ctx.beginPath(),l.ctx.arc(n,u,d,0,Math.PI*2),l.ctx.fill(),o++}},star(e,t,n=1,r=6,i=0,a={}){this.dot(e,t*.42,n,a);for(let o=0;o<r;o++){let s=i+o*Math.PI*2/r,c=t*(o%2?.75:1.25)/A,l=t*.5/A;this.line([[e[0]+Math.cos(s)*l,e[1]+Math.sin(s)*l],[e[0]+Math.cos(s)*c,e[1]+Math.sin(s)*c*.8]],Math.max(.4,t*.16),n,a)}},glyph(e,t){let n=e.reduce((e,t)=>e+t.p.length,0),r=0;for(let i of e){let e=t(i);for(let t=0;t<i.p.length-1;t+=3){let a=Math.min(i.p.length,t+4),o=i.p.slice(t,a),s=e.slice(t,a);this.ribbon(o,s,1,{code:j.GLYPH,channel:`rg`,g:(r+t)/n})}r+=i.p.length}},get strokes(){return o}}}var P=e=>1+e/b,F=[234,188,110],I=[200,56,34];function L(e,t,n,r,i,a,o={}){let s=[],c=o.step??.038,l=o.depth??2,u=o.stop||(()=>!1),d=o.steer||null,f=(t,n,r,i,a,p)=>{let m=[[t,n]],h=0;for(let s=0;s<i&&(h=h*.86+(e()-.5)*(o.wob??.07),e()<.025&&(h+=(e()-.5)*.5),r+=h,d&&(r=d(t,n,r)),t+=Math.cos(r)*c,n+=Math.sin(r)*c*1.25,m.push([t,n]),!u(t,n));s++)p<l&&s>6&&e()<(o.branch??.035)&&f(t,n,r+(e()<.5?-1:1)*(.55+e()*.5),(i-s)*(.35+e()*.3),a*.6,p+1);m.length>3&&s.push({p:m,w:a,d:p})};return f(t,n,r,i,a,0),s}var se=Object.freeze({id:`fire`,glslId:`Fire`,metal:F,leaf:F,enamel:I,light:[255,226,170],look:{dark:1,bloom:.32,sheen:1,sheenGain:.75,tint:.45,lineAlpha:.95,reflect:.3,heat:.55,wave:.8},motif:{scale:1.2,alpha:.95,enamel:.38},rim:[P(.112)-.04,P(.15)+.04],glsl:`
  vec2 vor2(vec2 p) { vec2 n = floor(p), f = fract(p); float d1 = 8., d2 = 8.;
    for (int j = -1; j <= 1; j++) for (int i = -1; i <= 1; i++) { vec2 gg = vec2(float(i), float(j)); vec2 r = gg + h22(n + gg) - f; float d = dot(r, r); if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d; }
    return vec2(sqrt(d1), sqrt(d2)); }
  vec3 groundFire(P p) {
    vec2 G = p.g; float r = p.rho * REFR0, r0 = REFR0;
    float breath = .75 + .25 * sin(p.t * .4);
    vec3 lac = mix(vec3(.16, .042, .030), vec3(.034, .012, .010), smoothstep(.15, 1.4, r));
    lac *= .9 + .14 * fbm3(G * vec2(1.2, 7.) + .5);
    lac += vec3(.07, .04, .03) * exp(-pow((G.y - 1.3) * 1.3, 2.)) * (.5 + .5 * fbm3(G * vec2(3., 1.)));
    vec3 col = lac;
    // Aged craquelure: fine, only in a band beyond the rim, faded where it would be finer than a pixel.
    float m = smoothstep(r0 + .32, r0 + .42, r) * (1. - smoothstep(1.2, 2.2, r)) * .7 * smoothstep(.3, .6, vn(G * 4.));
    if (m > .001) {
      vec2 v = vor2(G * vec2(15., 18.) + .35 * vec2(fbm3(G * 3.), fbm3(G * 3. + 4.)));
      float e = (v.y - v.x) / 16., fp = p.px * REFR0;
      float crk = (1. - smoothstep(fp * .2, fp * .85, e)) * m * (1. - smoothstep(.004, .012, fp));
      col = mix(col, vec3(.012, .004, .004), crk * .65);
      col += vec3(1., .35, .1) * exp(-e / .003) * m * .05 * breath;
    }
    // Nashiji: gold flakes in the lacquer, densest round the rim.
    float cs = .018; vec2 cell = floor(p.q / cs); float h = h21(cell + 7.);
    float dens = exp(-pow((r - r0 - .40) / .22, 2.)) * .8 + .08;
    if (h > 1. - .02 * dens) { float d = length(p.q - (cell + h22(cell)) * cs) / cs; col += vec3(.95, .72, .38) * .55 * smoothstep(.45, 0., d) * (.6 + .4 * sin(p.t * .7 + h * 80.)) * (1. - smoothstep(.3, .8, p.px / cs)); }
    col += vec3(.9, .3, .08) * .045 * breath * exp(-r * r * 3.);
    col += p.glow * .06;
    col *= .94 + .07 * mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    return col;
  }
  vec4 fieldFire(P p) {
    // Thin gold rays beyond the mandorla, on their own engraved circle.
    float c = aaLine(p.rho - ${P(.325).toFixed(4)}, fwidth(p.rho), .6 * uPxU) * .55;
    float fi = (p.th - .03) * 48. / 6.2831853, i = floor(fi + .5);
    float r1 = ${P(.34).toFixed(4)}, r2 = 1. + (.52 + .1 * mod(i * 7., 5.) / 5. + (mod(i, 2.) > .5 ? 0. : .08)) / REFR0;
    float tt = (p.rho - r1) / (r2 - r1);
    float d = (fi - i) * 6.2831853 / 48. * p.rho, fd = fwidth(d); fd = fd > .5 ? fwidth(p.rho) : fd;
    c = max(c, aaLine(d, fd, 1.4 * uPxU * pow(max(sin(3.14159 * clamp(tt, 0., 1.)), 0.), 1.2)) * .4 * step(0., tt) * step(tt, 1.));
    return vec4(0., 0., 0., c);
  }
  `,paint(e,{frame:t,strand:n,motifs:r}){let{ex:i,ey:a}=t,o=P(.126)-1;e.line(E(o,i,a,360),1.25,.85),e.line(E(o-.014/b,i,a,360),.55,.5);for(let t=0;t<180;t++){let n=t*m/180,r=(t%5==0?.022:.011)/b,s=o+.002/b;e.line([T(n,s,i,a),T(n,s+r,i,a)],t%5==0?.8:.5,t%5==0?.6:.35)}for(let e=0,n=Math.round(22/Math.max(.45,t.ornament));e<n;e++){let o=e*m/n+.1,s=T(o,P(.175)-1,i,a),c=Math.cos(o)/i,l=Math.sin(o)/a,u=Math.hypot(c,l),d=C(S.fire(e),s,[c/u,l/u],1.55/b*t.ornament,.35);r.draw(d,{alpha:.85,enamel:.14,widthScale:1.05,code:0})}let s=_(109);n.motifs.forEach(r=>{if(r.element!==`fire`)return;let i=n.parts.find(e=>e.stone.id===r.id);if(!i)return;let a=Math.atan2(i.n[1],i.n[0]);for(let n of L(s,i.q[0],i.q[1],a+(s()-.5)*1.2,9+s()*9,1.2,{step:.011/b*t.ornament,wob:.05,branch:.03,depth:1})){let t=n.p.length;e.ribbon(n.p,n.p.map((e,r)=>Math.max(.3,n.w*(1-.6*r/(t-1)))),.75,{code:j.SEAM}),e.line(n.p,8,n.d?.7:1,{code:j.SEAM,channel:`g`})}})},uniforms(){return{}}}),R=Object.freeze({aries:{stars:[[.08,.44,1],[.56,.34,2],[.8,.52,1.5],[.88,.68,1]],lines:[[0,1],[1,2],[2,3]]},taurus:{mirror:!0,stars:[[.52,.58,2],[.4,.66,1],[.47,.48,1],[.86,.14,1.5],[.92,.42,1],[.24,.74,1],[.08,.86,1]],lines:[[1,0],[0,4],[1,2],[2,3],[1,5],[5,6]]},gemini:{stars:[[.3,.1,2],[.56,.14,2],[.24,.44,1],[.14,.7,1],[.08,.84,1],[.6,.46,1],[.52,.68,1],[.44,.9,1.5]],lines:[[0,1],[0,2],[2,3],[3,4],[1,5],[5,6],[6,7]]},cancer:{stars:[[.5,.5,1.5],[.53,.34,1],[.58,.08,1],[.2,.84,1.5],[.84,.9,2]],lines:[[2,1],[1,0],[0,3],[0,4]]},leo:{mirror:!0,stars:[[.3,.8,2],[.34,.58,1],[.44,.44,1.5],[.42,.26,1],[.28,.14,1],[.16,.22,1],[.94,.68,1.5],[.72,.42,1],[.72,.66,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[2,7],[7,6],[6,8],[8,0],[7,8]]},virgo:{stars:[[.08,.42,1],[.26,.47,1],[.4,.5,1.5],[.54,.34,1],[.64,.12,1],[.5,.68,1],[.5,.9,2],[.72,.54,1],[.9,.46,1]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[3,7],[7,8]]},libra:{stars:[[.3,.6,1.5],[.52,.14,2],[.78,.44,1],[.26,.92,1],[.84,.88,1]],lines:[[0,1],[1,2],[2,0],[0,3],[2,4]]},scorpius:{stars:[[.86,.08,1],[.92,.2,1],[.9,.34,1],[.78,.27,1],[.7,.33,2],[.64,.44,1],[.56,.6,1],[.52,.74,1],[.5,.86,1],[.38,.94,1],[.24,.9,1],[.14,.78,1],[.16,.66,1],[.26,.58,1.5]],lines:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]},sagittarius:{stars:[[.36,.52,1],[.38,.8,1.5],[.7,.74,1],[.62,.44,1],[.82,.36,2],[.88,.6,1],[.44,.24,1],[.18,.62,1]],lines:[[0,1],[1,2],[2,3],[3,0],[0,6],[6,3],[3,4],[4,5],[5,2],[0,7],[7,1]]},capricorn:{mirror:!0,stars:[[.1,.14,1.5],[.16,.3,1.5],[.36,.76,1],[.44,.9,1],[.66,.72,1],[.8,.54,1],[.94,.38,2],[.82,.36,1],[.64,.35,1],[.42,.33,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1]]},aquarius:{mirror:!0,stars:[[.04,.62,1],[.1,.5,1],[.24,.4,2],[.44,.24,2],[.58,.22,1],[.66,.18,1],[.76,.24,1],[.64,.08,1],[.52,.52,1],[.7,.6,1],[.82,.76,1],[.9,.92,1.5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[3,8],[8,9],[9,10],[10,11]]},pisces:{stars:[[.12,.9,1.5],[.16,.72,1],[.22,.52,1],[.27,.34,1],[.24,.18,1],[.36,.22,1],[.28,.84,1],[.4,.8,1],[.52,.74,1],[.63,.67,1],[.72,.6,1],[.8,.52,1],[.86,.42,1],[.94,.46,1],[.95,.58,1],[.88,.64,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,3],[0,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,11]]}});function z(e){let t=R[e];return t?{stars:t.stars.map(([e,n,r])=>[t.mirror?1-e:e,n,r??1]),lines:t.lines.map(([e,t])=>[e,t])}:null}var B=e=>1+e/b,ce=[58,38,22],le=[190,146,62],V=Object.freeze({wi:B(.15),wo:B(.26),di:B(.275),dm:B(.3),do:B(.335),zi:B(.345),zo:B(.45),lo:B(.47),leaf:B(.268)}),ue=[`aries`,`taurus`,`gemini`,`cancer`,`leo`,`virgo`,`libra`,`scorpius`,`sagittarius`,`capricorn`,`aquarius`,`pisces`],de=Object.freeze({id:`atlas`,glslId:`Atlas`,metal:ce,leaf:le,enamel:[160,90,60],light:[255,236,170],look:{dark:0,bloom:0,sheen:2,sheenGain:.9,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.35},motif:{scale:1.14/1.2,alpha:.9,enamel:.42},rim:[V.wi-.04,V.leaf+.04],glsl:`
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
    float r = p.rho, fr = fwidth(r), c = 0.;
    float lo = ${V.lo.toFixed(4)};
    // The sky's graticule beyond the plate: dotted circles and hour lines (fading where finer than the pixels).
    float fade = 1. - smoothstep(.02, .05, p.px);
    float arc = p.th * r, fa = fwidth(arc), per = 4.6 / ${(b*600).toFixed(1)};
    for (int k = 0; k < 6; k++) {
      float R = lo + (k == 0 ? .14 : k == 1 ? .34 : k == 2 ? .62 : k == 3 ? 1. : k == 4 ? 1.5 : 2.1) / REFR0;
      c = max(c, aaLine(r - R, fr, .65 * uPxU) * .55 * mix(dashed(arc, per * .35, per, fa), .5, 1. - fade));
    }
    float hi = (p.th - 6.2831853 / 48.) * 24. / 6.2831853, hn = floor(hi + .5), hd = (hi - hn) * 6.2831853 / 24. * r;
    float fhd = fwidth(hd); fhd = fhd > .5 ? fr : fhd;
    c = max(c, aaLine(hd, fhd, .6 * uPxU) * .45 * step(lo + .07, r) * mix(dashed(r, per * .35, per, fr), .5, 1. - fade));
    // The ecliptic: an eccentric ring through the far sky, as on an astrolabe's rete, with ticks; a leaf line inside.
    vec2 e = p.q - vec2(0., .62 / REFR0); float er = length(e), re = 1. + .72 / REFR0, ea = atan(e.y, e.x);
    c = max(c, aaLine(er - re, fwidth(er), 1.1 * uPxU) * .85);
    c = max(c, aaLine(er - re - .06 / REFR0, fwidth(er), .7 * uPxU) * .75);
    float ti = ea * 72. / 6.2831853, tn = floor(ti + .5), td = (ti - tn) * 6.2831853 / 72. * er, tl = (mod(tn, 6.) < .5 ? .06 : .03) / REFR0;
    float ftd = fwidth(td); ftd = ftd > .5 ? fwidth(er) : ftd;
    c = max(c, aaLine(td, ftd, (mod(tn, 6.) < .5 ? .8 : .5) * uPxU) * step(re, er) * step(er, re + tl) * .7);
    float leafL = aaLine(er - re - .03 / REFR0, fwidth(er), 1.6 * uPxU) * .8;
    // Scattered stars of the outer field.
    float cs = .55; vec2 cell = floor(p.q / cs); float h = h21(cell + 3.);
    if (r > lo + .1 && h > .72) { vec2 sp = (cell + .2 + .6 * h22(cell)) * cs; float d = length(p.q - sp); float sz = (h > .97 ? 4.4 : h > .86 ? 2.8 : 1.7) * uPxU * p.px;
      c = max(c, smoothstep(sz * .45, sz * .2, d) * .85 * fade); }
    vec3 leafCol = vec3(${le.map(e=>(e/255).toFixed(3)).join(`, `)});
    // The leaf line darkens like ink here; its light is the sheen's (the main composition adds no bloom on paper).
    return vec4((leafCol - uMetal) * leafL, max(c, leafL));
  }
  `,paint(e,{frame:t,strand:n}){let{ex:r,ey:i}=t,a=e=>e-1,o=(e,t=360)=>E(a(e),r,i,t);e.line(o(V.wi),.8,.75),e.line(o(V.wo),.8,.75),e.line(o(V.di),1,.85),e.line(o(V.do),1,.85),e.line(o(V.dm),.45,.6);for(let t=0;t<360;t+=2){let n=t*Math.PI/180,o=t%10==0,s=t%30==0?V.do:o?V.dm+.018/b:V.dm,c=o?V.di:V.dm-.012/b;e.line([T(n,a(c),r,i),T(n,a(s),r,i)],o?.85:.55,o?.9:.7)}e.line(o(V.zi),.55,.7),e.line(o(V.zo),1.3,.9),e.line(o(V.lo),.5,.6);for(let t=0;t<12;t++){let n=t*m/12-Math.PI/2;e.line([T(n,a(V.zi),r,i),T(n,a(V.zo),r,i)],.7,.75);let o=R[ue[t]],s=n+m/24,c=(V.zi+V.zo)/2,l=.042/b*1.6,u=o.stars.map(e=>e[0]),d=o.stars.map(e=>e[1]),f=(Math.min(...u)+Math.max(...u))/2,p=(Math.min(...d)+Math.max(...d))/2,h=Math.max(Math.max(...u)-Math.min(...u),(Math.max(...d)-Math.min(...d))*1.6,.1),g=o.stars.map(([e,t])=>{let n=((o.mirror?1-e:e)-(o.mirror?1-f:f))/h,u=-(t-p)/h;return T(s+n*l*1.8/c,a(c+u*l*.9),r,i)});for(let[t,n]of o.lines)e.line([g[t],g[n]],.6,.7);g.forEach((t,n)=>e.star(t,(o.stars[n][2]>=2?3.4:2.3)*.8,.85,4,.4))}e.line(o(V.leaf),2,.95,{code:j.LEAF});for(let o of n.parts){if(!o.stone.stone)continue;let n=Math.max(0,o.n[1]),s=Math.hypot(o.q[0]/r,o.q[1]/i),c=Math.atan2(o.q[1]/i,o.q[0]/r),l=a(s)+o.r*1.1+(.035+.05*n*n*t.backRoom)/b;a(V.wi)-.03>l&&e.line([T(c,l,r,i),T(c,a(V.wi)-.03,r,i)],.5,.5)}},uniforms(){return{}}}),H=null;function U(){if(H)return H;let e=_(5021),t=new Uint8Array(262144);for(let n=0;n<t.length;n++)t[n]=Math.floor(e()*256);return H=t}function fe(e,t){let n=U(),r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=(e,t)=>n[((t%256+256)%256*256+(e%256+256)%256)*4]/255,c=s(r,i),l=s(r+1,i),u=s(r,i+1),d=s(r+1,i+1);return(c+(l-c)*a)*(1-o)+(u+(d-u)*a)*o}var W=e=>1+e/b,pe=[62,40,22],G=[196,150,70],K=W(.13),me=fe;function q(e,t,n=1,r=1){let i=n===1&&r===1?Math.hypot(e,t):Math.hypot(e/n,t/r);if(i<K)return 1;let a=e*b,o=t*b,s=(i-K)*b,c=me(a*2.1+5.3,o*2.1)*.6+me(a*4.7-2,o*4.7+3)*.28+me(a*10,o*10)*.12;return 1-.72*s**.75+.6*(c-.5)*g(0,.3,s)}function he(e,t=1,n=1){let r=[];for(let e=-3;e<=6;e+=.15)for(let i=-3.5;i<=3.5;i+=.15){let a=q(i,e,t,n);a<.999&&r.push(a)}r.sort((e,t)=>e-t);let i=[`water`,`earth`,`fire`,`air`],a=i.reduce((t,n)=>t+(e?.[n]??0),0)||1,o=0;return i.slice(0,3).map(t=>(o+=(e?.[t]??0)/a,r[Math.min(r.length-1,Math.floor(o*r.length))]??0))}var ge=Object.freeze({id:`earth`,glslId:`Earth`,metal:pe,leaf:G,enamel:[176,120,60],light:[255,230,160],look:{dark:0,bloom:0,sheen:2,sheenGain:.8,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:.35},motif:{scale:1.2,alpha:.95,enamel:.45},rim:[W(.118)-.04,W(.13)+.04],glsl:`
  uniform vec3 uEarthThr;
  float earthH(vec2 q, float rho) {
    float P = ${K.toFixed(4)}; if (rho < P) return 1.;
    vec2 G = q * REFR0; float d = (rho - P) * REFR0;
    float f = vn(G * 2.1 + vec2(5.3, 0.)) * .6 + vn(G * 4.7 + vec2(-2., 3.)) * .28 + vn(G * 10.) * .12;
    return 1. - .72 * pow(d, .75) + .6 * (f - .5) * smoothstep(0., .3, d);
  }
  vec3 groundEarth(P p) {
    vec2 G = p.g; float r = p.rho * REFR0;
    vec3 col = vec3(.80, .70, .53) * (.86 + .2 * fbm(G * 2.4) + .06 * fbm3(p.q * 1.4));
    col = mix(col, col * vec3(.86, .77, .64), smoothstep(.55, .9, fbm3(G * 1.2 + 3.)) * .5);
    col += vec3(.025, .02, .01) * (1. - smoothstep(REFR0 + .10, REFR0 + .14, r));
    col += vec3(.06, .045, .02) * exp(-pow((p.q.x * .25 + .25 * sin(p.t * .05)) * 2.2, 2.)) * .6;
    // The hypsometric wash: each band of height in its element's pigment, by the strand's shares.
    float h = earthH(p.q, p.rho);
    if (h < .999) {
      vec3 pig = h <= uEarthThr.x ? uPig[0] : h <= uEarthThr.y ? uPig[2] : h <= uEarthThr.z ? uPig[1] : uPig[3];
      float fd = 1. - smoothstep(.35, 1.4, r);
      col *= mix(vec3(1.), mix(vec3(1.), pig, .5), fd * (.28 + .3 * vn(p.q * 1.4)));
    }
    col *= .95 + .07 * mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    col += p.glow * .04;
    col = mix(col, vec3(.70, .62, .48), smoothstep(6., 14., p.rho) * .6);
    return col;
  }
  vec4 fieldEarth(P p) {
    float h = earthH(p.q, p.rho);
    float k = h / .05, kn = floor(k + .5), d = k - kn;
    bool idx = mod(kn, 5.) < .5;
    float c = aaLine(d, fwidth(k), (idx ? 1.1 : .6) * uPxU) * (idx ? .9 : .62);
    return vec4(0., 0., 0., c * (1. - smoothstep(.04, .09, p.px)) * step(h, .999));
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t,i=e=>e-1;e.line(E(i(W(.13)),n,r,360),1.1,.9),e.line(E(i(W(.118)),n,r,360),.5,.6),e.line(E(i(W(.124)),n,r,360),1.8,.9,{code:j.LEAF});let a=_(101),o=(e,t)=>q(e,t,n,r),s=.03;for(let t=0;t<7;t++){let c=t*m/7+a()*.5,[l,u]=T(c,i(K)+.02,n,r),d=L(a,l,u,c,26+a()*26,1.1,{step:.012/b,wob:.05,branch:.05,depth:2,steer:(e,t,n)=>{let r=o(e+s,t)-o(e-s,t),i=o(e,t+s)-o(e,t-s);if(Math.hypot(r,i)<1e-6)return n;let a=Math.atan2(-i,-r)-n;for(;a>Math.PI;)a-=m;for(;a<-Math.PI;)a+=m;return n+a*.18},stop:(e,t)=>Math.abs(e)>3.6||t<-3||t>6});for(let t of d){let n=t.p.length;e.ribbon(t.p,t.p.map((e,r)=>Math.max(.3,t.w*(1-.8*r/(n-1)))),.7)}}},uniforms({mood:e}){return{uEarthThr:he(e?.shares)}}}),J=e=>1+e/b,_e=Object.freeze({id:`air`,glslId:`Air`,metal:[36,48,66],leaf:[206,168,92],enamel:[60,184,173],light:[255,236,190],look:{dark:0,bloom:0,sheen:2,sheenGain:.8,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:.4},motif:{scale:1.2,alpha:.95,enamel:.45},rim:[J(.112)-.04,J(.15)+.04],glsl:`
  vec3 groundAir(P p) {
    float r = p.rho * REFR0;
    float sy = clamp(.55 - p.q.y * .09, 0., 1.);
    vec3 col = mix(vec3(.76, .74, .70), vec3(.50, .55, .62), smoothstep(0., 1., sy * .5 + r * .3));
    col += vec3(.07, .05, .025) * exp(-r * r * 2.5);
    col *= .92 + .10 * fbm(p.g * 1.8 + vec2(p.t * .01, 0.)) + .04 * mix(vn(p.q * vec2(73., 8.7)), .5, clamp(log2(max(p.px * 80., 1e-4)), 0., 1.));
    col += p.glow * .04;
    return col;
  }
  // A kasumi band: a bundle of seven hairlines swelling in the middle and tapering to points.
  float kasumiA(P p, float y0, float x0, float x1, float hh, float i) {
    float dx = sin(p.t * .05 + i) * .06, q = (p.q.x - dx - x0) / (x1 - x0), fy = fwidth(p.q.y);
    float inside = step(0., q) * step(q, 1.) * step(abs(p.q.y - y0), hh * 1.6);
    float c = 0.;
    for (int k = 0; k < 7; k++) {
      float f = float(k) / 6. - .5;
      float y = y0 + f * hh * sin(3.14159 * (.15 + .7 * q)) * 1.2 + sin(q * 7. + i + float(k)) * .006;
      float a0 = .06 * abs(f) * 2.4 / (x1 - x0), a1 = 1. - .07 * abs(f) * 2.4 / (x1 - x0);
      float tq = clamp((q - a0) / max(a1 - a0, .01), 0., 1.);
      float w = (1.9 - abs(f) * 1.6) * pow(sin(3.14159 * tq), .6) * step(a0, q) * step(q, a1);
      c = max(c, aaLine(p.q.y - y, fy, w * uPxU) * (.8 - abs(f) * .5));
    }
    return c * inside;
  }
  vec4 fieldAir(P p) {
    // Eighteen logarithmic spirals r = R1·e^(b(θ - θk)), turning slowly; every third heavier.
    float R1 = ${J(.2).toFixed(4)}, b = .19, N = 18.;
    float c = 0., light = 0.;
    float u = log(max(p.rho, 1e-3) / R1) / b, on = step(0., u) * step(u, 5.2);
    float ph = (p.th - u - p.t * .025) / (6.2831853 / N), k = floor(ph + .5), d = ph - k, fd = fwidth(ph);
    // The angle wraps once round the circle: there the derivative is taken from the radius alone.
    fd = fd > .5 ? fwidth(u) / (6.2831853 / N) : fd;
    bool heavy = mod(k, 3.) < .5;
    float taper = pow(max(sin(3.14159 * clamp(u / 5.2, 0., 1.)), 0.), .35);
    c = aaLine(d, fd, (heavy ? 2. : 1.2) * uPxU * taper) * (heavy ? .85 : .62) * on;
    float along = p.rho / b, dash = fract((along - p.t * .55 + k * .3) / 1.9);
    light = aaLine(d, fd, 2. * uPxU) * smoothstep(0., .02, dash) * (1. - smoothstep(.1, .12, dash)) * .16 * on;
    c = max(c, kasumiA(p, 4.4, -2.6, 1.2, .1, 0.));
    c = max(c, kasumiA(p, 5.7, -.6, 2.8, .09, 1.));
    c = max(c, kasumiA(p, -2.6, -.8, 2.6, .1, 2.));
    return vec4(vec3(255., 236., 190.) / 255. * light, c);
  }
  `,paint(e,{frame:t,motifs:n}){let{ex:r,ey:i}=t,a=e=>e-1;for(let e=0,o=Math.round(16/Math.max(.45,t.ornament));e<o;e++){let s=e*m/o,c=T(s,a(J(.19)),r,i),l=Math.cos(s)/r,u=Math.sin(s)/i,d=Math.hypot(l,u);n.draw(C(S.air(e),c,[l/d,u/d],1.9/b*t.ornament,.9),{alpha:1,enamel:.2,widthScale:1.25,code:j.LEAF})}e.line(E(a(J(.125)),r,i,360),1.8,.95,{code:j.LEAF}),e.line(E(a(J(.148)),r,i,360),.6,.8),e.line(E(a(J(.112)),r,i,360),.5,.6);for(let t=0;t<32;t++){let n=t*m/32,o=(t%8==0?.05:t%4==0?.034:t%2==0?.024:.016)/b,s=a(J(.148));e.line([T(n,s,r,i),T(n,s+o,r,i)],t%4==0?1:.55,.8),t%8==0&&e.dot(T(n,s+o+.012/b,r,i),1.8,.95,{code:j.LEAF})}},uniforms(){return{}}}),ve=Object.freeze([re,se,de,ge,_e]),ye=Object.freeze(Object.fromEntries(ve.map((e,t)=>[e.id,t])));function be(e){return ve[ye[e]??ye.atlas]}Object.freeze([`motifs`,`band`]);function xe(e,t=10){let n=[],r=e.length;for(let i=0;i<r;i++){let a=e[(i-1+r)%r],o=e[i],s=e[(i+1)%r],c=e[(i+2)%r];for(let e=0;e<t;e++){let r=e/t,i=r*r,l=i*r;n.push([0,1].map(e=>.5*(2*o[e]+(-a[e]+s[e])*r+(2*a[e]-5*o[e]+4*s[e]-c[e])*i+(-a[e]+3*o[e]-3*s[e]+c[e])*l)))}}return n}function Se(e,{strand:t,plate:n,motifs:r,mode:i=n.ornament??`motifs`}){if(i!==`band`||t.motifs.length<3){for(let e of t.motifs)r.draw(ne(e),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:M(e.slot)});return`motifs`}let a=t.motifs,o=.1,s=xe(a.map(e=>[e.base[0]+e.out[0]*o*.5,e.base[1]+e.out[1]*o*.5]),12),c=e=>{let t=s[(e-1+s.length)%s.length],n=s[(e+1)%s.length],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1;return[(n[1]-t[1])/r,-(n[0]-t[0])/r]},l=c(0)[0]*a[0].out[0]+c(0)[1]*a[0].out[1]<0?-1:1,u=(e,t)=>{let[n,r]=c(e);return[s[e][0]+n*t*l,s[e][1]+r*t*l]};return a.forEach((t,i)=>{let a=i*12-6,d=Array.from({length:13},(e,t)=>(a+t+s.length)%s.length),f=M(t.slot);for(let t of[-.1/2,o/2])e.line(d.map(e=>u(e,t)),.7,n.motif.alpha,{code:f});for(let e of[3,9]){let a=d[Math.round(e)],[u,p]=c(a),m=[u*l,p*l],h=[s[a][0]-m[0]*o*.35,s[a][1]-m[1]*o*.35];r.draw(C((S[t.element]??S.water)(i),h,m,t.scale*.45),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:f,widthScale:.7})}}),`band`}var Ce=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.2),Y=(...e)=>e.reduce((e,t,n)=>e.concat(n?t.slice(1):t),[]),X=(e,t,n=10)=>Array.from({length:n+1},(r,i)=>[e[0]+(t[0]-e[0])*i/n,e[1]+(t[1]-e[1])*i/n]),we=(e,t,n,r=0,i=40,a=1)=>Array.from({length:i+1},(o,s)=>{let c=r+a*m*s/i;return[e+n*Math.cos(c),t+n*Math.sin(c)]}),Z=(e,t=.012,n=.045)=>({p:e,w:Ce(e.length-1,t,n)}),Te=e=>e.map(([e,t])=>[-e,t]),Ee=e=>e.map(([e,t])=>[-e,-t]);function De(){let e=Y(v([-.215,-.13],[-.27,.26],[.02,.52],[.19,.4],30),v([.19,.4],[.36,.27],[.3,.02],[.15,-.12],26),v([.15,-.12],[.03,-.24],[.08,-.46],[.3,-.42],26),v([.3,-.42],[.44,-.4],[.5,-.3],[.43,-.22],16)),t=e.length;return{p:e,w:e.map((e,n)=>{let r=n/(t-1);return .012+.05*Math.sin(Math.PI*h((r-.04)/.78))**1.3+.012*Math.exp(-(((r-.97)/.05)**2))})}}var Oe=()=>Y(X([-.4,-.42],[-.4,.28]),v([-.4,.28],[-.4,.46],[-.16,.46],[-.16,.28],14),X([-.16,.28],[-.16,-.42])),ke=Object.freeze({aries:()=>[Z(Y(X([0,-.48],[0,-.05],12),v([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),v([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))),Z(Te(Y(v([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),v([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))))],taurus:()=>[Z(we(0,-.17,.23,Math.PI/2,48),.02,.03),Z(v([-.44,.46],[-.3,.04],[.3,.04],[.44,.46],30))],gemini:()=>[Z(v([-.36,.44],[-.12,.34],[.12,.34],[.36,.44],20),.014,.03),Z(v([-.36,-.44],[-.12,-.34],[.12,-.34],[.36,-.44],20),.014,.03),Z(v([-.15,.37],[-.19,.1],[-.19,-.1],[-.15,-.37],20)),Z(v([.15,.37],[.19,.1],[.19,-.1],[.15,-.37],20))],cancer:()=>{let e=Y(we(-.18,.12,.1,-Math.PI/2,30,-1),v([-.18,.22],[0,.36],[.28,.32],[.4,.14],20));return[Z(e,.012,.04),Z(Ee(e),.012,.04)]},leo:()=>[De()],virgo:()=>[Z(Oe()),Z(Y(v([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),X([.08,.28],[.08,-.2]),v([.08,-.2],[.08,-.5],[.42,-.48],[.36,-.16],16),v([.36,-.16],[.3,.08],[.04,-.06],[.2,-.46],16)))],libra:()=>[Z(X([-.42,-.32],[.42,-.32],20),.016,.02),Z(Y(X([-.42,-.02],[-.17,-.02],8),v([-.17,-.02],[-.32,.46],[.32,.46],[.17,-.02],30),X([.17,-.02],[.42,-.02],8)))],scorpius:()=>[Z(Oe()),Z(Y(v([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),X([.08,.28],[.08,-.3]),v([.08,-.3],[.08,-.48],[.3,-.48],[.42,-.3],16))),Z(Y(X([.27,-.33],[.42,-.3],6),X([.42,-.3],[.4,-.15],6)),.012,.02)],sagittarius:()=>[Z(X([-.4,-.4],[.4,.4],30)),Z(Y(X([.1,.4],[.4,.4],8),X([.4,.4],[.4,.1],8)),.014,.025),Z(X([-.25,.05],[.05,-.25],10),.012,.025)],capricorn:()=>[Z(Y(v([-.44,.32],[-.36,.3],[-.28,-.2],[-.2,-.4],16),v([-.2,-.4],[-.12,-.1],[-.04,.34],[.06,.34],16),v([.06,.34],[.16,.34],[.12,-.1],[.18,-.26],16),v([.18,-.26],[.24,-.46],[.46,-.38],[.4,-.18],14),v([.4,-.18],[.34,0],[.14,-.06],[.14,-.24],14),v([.14,-.24],[.14,-.44],[0,-.52],[-.1,-.46],12)))],aquarius:()=>[.14,-.2].map(e=>Z(Y(...[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]].slice(0,4).map((t,n,r)=>{let i=[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]];return v([i[n][0],i[n][1]+e],[i[n][0]+.07,i[n][1]+e+(n%2?-.03:.05)],[i[n+1][0]-.07,i[n+1][1]+e+(n%2?.05:-.03)],[i[n+1][0],i[n+1][1]+e],10)})),.012,.035)),pisces:()=>[Z(v([-.46,.44],[-.18,.26],[-.18,-.26],[-.46,-.44],34),.012,.05),Z(v([.46,.44],[.18,.26],[.18,-.26],[.46,-.44],34),.012,.05),{p:Array.from({length:13},(e,t)=>[-.25+.5*t/12,.015*Math.sin(Math.PI*t/12)]),w:Ce(12,.016,.014)}]}),Ae=Object.freeze({offset:.95/b-1,size:.48/b,depth:1.45,rete:.64/b});function je(e){let t=e.ey+Ae.offset,n=Ae.rete+.3;return{centre:[0,t],rect:[-n,t-n,n,t+n]}}function Me(e){let t=ke[e];if(!t)return null;let n=z(e),r=[],i=[];if(n){let e=n.stars.map(e=>e[0]),t=n.stars.map(e=>e[1]),a=(Math.min(...e)+Math.max(...e))/2,o=(Math.min(...t)+Math.max(...t))/2,s=Math.max(Math.max(...e)-Math.min(...e),Math.max(...t)-Math.min(...t),.2);r=n.stars.map(([e,t,n])=>[(e-a)/s*1.15,-(t-o)/s*.6,n]),i=n.lines}return{figure:{paths:[],hatch:[],stars:r,edges:i},glyph:t,glyphScale:1}}function Ne(e,{sign:t,frame:n,art:r=Me(t)}){if(!r)return;let{centre:i}=je(n),a=Ae.size,o=Ae.depth,s=Ae.rete,c=([e,t])=>[i[0]+e*a,i[1]+t*a*o],l=(e,t=300)=>Array.from({length:t+1},(n,r)=>{let a=r*m/t;return[i[0]+e*Math.cos(a),i[1]+e*Math.sin(a)*.95]});e.line(l(s),1.6,.9),e.line(l(s+.035/b),.6,.6);for(let t=0;t<72;t++){let n=t*m/72,r=(t%6==0?.035:.018)/b;e.line([[i[0]+s*Math.cos(n),i[1]+s*Math.sin(n)*.95],[i[0]+(s+r)*Math.cos(n),i[1]+(s+r)*Math.sin(n)*.95]],t%6==0?.8:.45,t%6==0?.7:.4)}e.line(l(s*.72),.55,.4,{dash:[2,4]});let{figure:u}=r,d=e=>e*a*b*600;for(let t of u.paths??[])e.ribbon(t.p.map(c),t.w.map(d),.9);for(let t of u.hatch??[])e.line(t.p.map(c),.5,.55);let f=(u.stars??[]).map(([e,t,n])=>[c([e,t]),n]);for(let[t,n]of u.edges??[])f[t]&&f[n]&&e.line([f[t][0],f[n][0]],.7,.55,{dash:[1.5,3]});f.forEach(([t,n])=>{let r=Math.atan2((t[1]-i[1])/.95,t[0]-i[0]),a=[i[0]+s*Math.cos(r),i[1]+s*Math.sin(r)*.95],o=[(a[0]+t[0])/2+Math.sin(r)*.1,(a[1]+t[1])/2-Math.cos(r)*.1],c=v(a,o,o,t,20),l=c.length;e.ribbon(c,c.map((e,t)=>.4+2.6*Math.sin(Math.PI*(t/(l-1))*.9+.05)**1.5),.62);let u=n>=1.5;e.line(Array.from({length:25},(e,n)=>{let r=n*m/24,i=(u?6.5:4.5)/(b*600);return[t[0]+i*Math.cos(r),t[1]+i*Math.sin(r)]}),.6,.7),e.star(t,u?4.6:3,1,u?8:4,.3)});let p=r.glyphScale??1,h=r.glyph().map(e=>({p:e.p.map(([e,t])=>c([e*p,t*p])),w:e.w.map(e=>e*p)}));e.glyph(h,e=>e.w.map(e=>d(e)*1.05))}function Pe({plate:e,frame:t,strand:n,mood:r,sign:i=null,near:a,aux:o=null,ornament:s=void 0}){let c=N({near:a,aux:o}),l=Object.freeze({draw(e,{alpha:t=1,enamel:n=.3,widthScale:r=1,code:i=0}={}){for(let a of e)a.fill&&n>0&&c.fill(a.q,{code:i,channel:`g`,alpha:n}),a.close?c.line(a.q,a.w*1.25*r,t,{code:i,close:!0}):c.taper(a.q,a.w*1.9*r,t,.5,{code:i})}});e.paint(c,{frame:t,strand:n,mood:r,motifs:l});let u=Se(c,{strand:n,plate:e,motifs:l,mode:s});return i&&Ne(c,{sign:i,frame:t,strand:n,plate:e}),{strokes:c.strokes,ornament:u}}var Fe=`
  #define MAXS 48
  #define REFR0 .29
  uniform float uTime, uPlate, uStoneCount, uPxU, uStrength, uReveal, uSolo;
  uniform vec3 uQx, uQy, uMetal, uLeaf, uEnamel, uLightCol;
  uniform vec2 uEllipse, uRes;
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
  struct P { vec2 q; vec2 g; float rho; float th; float t; float lod; vec3 glow; vec3 wash; float washW; vec3 flare; float ink; float full; float px; };

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
`;function Ie(e){let t=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) c = ground${e.glslId}(p);`).join(`
      `),n=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) f = field${e.glslId}(p);`).join(`
      `);return`
  varying vec3 vWorld;
  uniform float uFloorY;
  ${Fe}
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
      // The stones: light (bead glow), watercolour wash, the entrance flare and the ink spreading under each.
      vec3 glow = vec3(0.), wsum = vec3(0.), flare = vec3(0.), refl = vec3(0.); float tw = 0., ink = 0.;
      float n1 = fbm3(p.q * 1.74), n2 = fbm3(p.q * 1.74 + 7.3);
      float full = smoothstep(uEntrance.z, uEntrance.z + 2.2, uTime);
      // A real loop with a uniform bound (GLSL ES 3): the compiler does not unroll it, so the program compiles fast.
      int count = min(int(uStoneCount + .5), MAXS);
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
        if (uLook3.x > 0.) { vec2 rd = (d + vec2(0., r * 1.55)) / vec2(r * .95, r * 1.25); refl += mix(uStoneC[i].rgb, gc, .3) * exp(-dot(rd, rd)) * on; }
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
      vec4 bl = (texture2D(uNear, nuv, 2.5) * .55 + texture2D(uNear, nuv, 4.) * .45) * edgeN;
      float upA = 0., dnA = 0.;
      if (uAuxOn > .5) {
        vec2 off = vec2(0., .04);
        upA = texture2D(uAux, auxUV(p.q + off)).r; dnA = texture2D(uAux, auxUV(p.q - off)).r;
        vec2 auv = auxUV(p.q);
        float inside = step(0., auv.x) * step(auv.x, 1.) * step(0., auv.y) * step(auv.y, 1.);
        float dn = warpd(p.q.x, uNearWarp.x, uNearWarp.y) * warpd(p.q.y, uNearWarp.z, uNearWarp.w) / (uNearT.x * uNearT.y);
        float da = 1. / ((uAuxRect.z - uAuxRect.x) * (uAuxRect.w - uAuxRect.y));
        float wa = inside * smoothstep(.6, 1.4, da / max(dn, 1e-6));
        vec4 ta = texture2D(uAux, auv);
        vec4 ba = texture2D(uAux, auv, 2.5) * .55 + texture2D(uAux, auv, 4.) * .45;
        tn = mix(tn, ta, wa); bl = mix(bl, ba, wa);
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
      vec3 lineCol = mix(metal, mix(tint, metal, .25), tintK);
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
      if (!glyph && !seam) {
        vec3 enamelCol = slot >= 0 ? mix(uStoneC[slot].rgb, tint, .35) : uEnamel;
        float enam = sec * (1. - cov) * show;
        c = mix(c, enamelCol, enam);
      }
      c = mix(c, lineCol, alpha);
      // ---- analytic field lines ----
      vec4 f = vec4(0.);
      ${n}
      c = mix(c, uMetal, f.w * fieldOn * uReveal);
      c += f.xyz * fieldOn * uReveal;
      // ---- light on the metal: bloom, travelling sheen, the closing wave ----
      float dark = uLook.x;
      // Heat lives in the gold seams (G, blurred), breathing slowly (scene 109).
      c += vec3(220., 65., 14.) / 255. * max(bl.g - .4, 0.) / .6 * uLook3.y * (.5 + .5 * sin(uTime * .5 + fbm3(p.q * .8) * 6.)) * show;
      vec3 bloomCol = uMetal * bl.r * uLook.y * show;
      c += bloomCol * dark;
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
      c += uLightCol * (alpha + bl.r * .9 * dark) * sheen * uLook.w * show;
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
`}var Le=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Re=1/30,Q=Object.freeze({lead:.25,span:1.9,perStone:.12,rimDelay:.2,rim:.6,motif:1.2}),ze=.6,Be=2048,Ve=1024;function He(e,t=0){let n=Math.min(Q.span,Math.max(0,e-1)*Q.perStone),r=Array.from({length:e},(r,i)=>t+Q.lead+(e>1?n*i/(e-1):0)),i=t+Q.lead+n+Q.rimDelay,a=i+Q.rim;return{inkAt:r,rimAt:i,waveAt:a,fullAt:i-.3,end:a+2.4}}var Ue=e=>e.map(e=>e/255),We=e=>[1,3,5].map(t=>parseInt(String(e).slice(t,t+2),16)/255||0);function Ge(e,t){if(typeof document<`u`&&document.createElement){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}return typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):null}function Ke(){let e=new o(new Uint8Array([0,0,0,255]),1,1);return e.colorSpace=``,e.needsUpdate=!0,e}function qe(){let e=new o(U(),256,256);return e.colorSpace=``,e.wrapS=e.wrapT=i,e.magFilter=n,e.minFilter=n,e.generateMipmaps=!1,e.needsUpdate=!0,e}var $=()=>(typeof performance<`u`?performance.now():Date.now())/1e3;function Je(){let e=Array.from({length:48},()=>new s(0,0,.1,-1e4)),t=Array.from({length:48},()=>new s),n=Array.from({length:48},()=>new s),r={uTime:{value:0},uPlate:{value:0},uStoneCount:{value:0},uPxU:{value:1},uStrength:{value:1},uReveal:{value:1},uSolo:{value:-1},uQx:{value:new f(1,0,0)},uQy:{value:new f(0,-1,0)},uMetal:{value:new f(.9,.8,.6)},uLeaf:{value:new f(.9,.8,.6)},uEnamel:{value:new f(.8,.3,.2)},uLightCol:{value:new f(1,.92,.75)},uEllipse:{value:new l(1,1)},uRes:{value:new l(1,1)},uFloorY:{value:0},uStoneA:{value:e},uStoneB:{value:t},uStoneC:{value:n},uEntrance:{value:new s(-1e4,-1e4,-1e4,Q.motif)},uRim:{value:new s(-Math.PI/2,1,1.35,1.55)},uLook:{value:new s},uLook2:{value:new s(1,.45,1,.95)},uLook3:{value:new s},uNear:{value:Ke()},uAux:{value:Ke()},uNearWarp:{value:new s(1.6,1,1.6,1)},uNearT:{value:new l(2.6,2.6)},uAuxRect:{value:new s(-1,-1,1,1)},uAuxOn:{value:0},uShares:{value:new s(.25,.25,.25,.25)},uPig:{value:[new f(.8,.8,.8),new f(.8,.8,.8),new f(.8,.8,.8),new f(.8,.8,.8)]},uEarthThr:{value:new f(.2,.5,.8)},uNoise:{value:qe()}};return new p({name:`gravur-plate`,vertexShader:Le,fragmentShader:Ie(ve),uniforms:r,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function Ye(){let e=new a(new c(.001,.001),Je());return e.name=`gravur-plate-warm`,e.frustumCulled=!1,e}function Xe(i={}){let{scene:o,camera:s,registerNativeGroup:c}=i,l=typeof i.requestFrame==`function`?i.requestFrame:()=>{},p=typeof i.createCanvas==`function`?i.createCanvas:Ge;if(!o?.isScene||typeof c!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let m=new d;m.name=`atmosphere-gravur`;let h=Je(),g=h.uniforms,_=g.uStoneA.value,v=g.uStoneB.value,y=g.uStoneC.value,b=new a(new u(1,48,24),h);b.name=`gravur-plate`,b.renderOrder=-10,b.frustumCulled=!1,m.add(b),o.add(m),c(m);let x=!1,S=null,C=null,w=null,T=null,E=null,D=null,ne=null,O=null,k=0,re=0,A=0,j=0,M=null,ie=!1,ae=!1,N=0,P=null,F=0,I=!0,L=!0,se=0,R=null,z=!0,B=``,ce=0,le=null,V=0,ue=!1,de=-1,H=null,U=0,fe=[0,0],W=null,pe=typeof performance<`u`?performance.now():0,G={near:null,aux:null},K={near:null,aux:null};function me(e=Math.max(0,Re-($()-de)-.013)){V||x||(V=setTimeout(()=>{V=0,!(x||I)&&(l(),$()-de>.15&&me(.2))},e*1e3))}function q(e=N){F=Math.max(F,e+25),I=!1,L=!0}function he(){if(!s?.position)return{toward:[0,1],elevation:24*Math.PI/180};let e=T?.bounds?.center??[0,0,0],t=s.position.x-e[0],n=s.position.y-(T?.bounds?.floorY??0),r=s.position.z-e[2],i=Math.cos(-U),a=Math.sin(-U);return{toward:[t*i+r*a,-t*a+r*i],elevation:Math.atan2(n,Math.hypot(t,r)||1e-6)}}function ge(){if(!T)return!1;let e=T.kind===`necklace`?`necklace`:`bracelet`;if(ne&&O===e||(ne=he(),O=e),E=ee(T.stones??[],{kind:e,view:ne}),!E)return D=null,g.uStoneCount.value=0,!1;let t=be(C);return D=te(T.stones,E,{motifScale:t.motif.scale}),g.uEllipse.value.set(E.ex,E.ey),g.uRim.value.set(D.rimStart,D.rimDirection,t.rim[0],t.rim[1]),g.uStoneCount.value=D.lights.length,D.lights.forEach((e,t)=>{let n=_[t].w;_[t].set(e.q[0],e.q[1],e.r,n);let[r,i,a]=We(e.glow),[o,s,c]=We(e.color);v[t].set(r,i,a,e.elementIndex),y[t].set(o,s,c,0)}),!0}function J(){let e=be(C);g.uPlate.value=ye[e.id],g.uMetal.value.fromArray(Ue(e.metal)),g.uLeaf.value.fromArray(Ue(e.leaf)),g.uEnamel.value.fromArray(Ue(e.enamel)),g.uLightCol.value.fromArray(Ue(e.light));let t=e.look;g.uLook.value.set(t.dark,t.bloom,t.sheen,t.sheenGain),g.uLook2.value.set(1,t.tint,1,t.lineAlpha),g.uLook3.value.set(t.reflect,t.heat,t.wave,1);let n=T?.mood?.shares??{};g.uShares.value.set(n.water??0,n.fire??0,n.earth??0,n.air??0);let r={water:null,fire:null,earth:null,air:null};for(let e of T?.stones??[])e.stone&&e.element&&!r[e.element]&&(r[e.element]=We(e.color));[`water`,`fire`,`earth`,`air`].forEach((e,t)=>g.uPig.value[t].fromArray(r[e]??[.8,.8,.8]));for(let[t,n]of Object.entries(e.uniforms({mood:T?.mood,frame:E,strand:D})??{})){let e=g[t];e&&(e.value?.fromArray?e.value.fromArray(n):e.value=n)}}function _e(i,a){let o=K[i];return o&&o.image===a||(o?.dispose(),o=new t(a),o.colorSpace=``,o.flipY=!1,o.generateMipmaps=!0,o.minFilter=e,o.magFilter=n,o.anisotropy=8,o.wrapS=o.wrapT=r,K[i]=o),o.needsUpdate=!0,j++,o}function ve(e,t,n){let r=G[e];return r&&r.width===t&&r.height===n||(r=G[e]=p(t,n)),r}function xe(){if(k=0,x||!E||!D)return;let e=JSON.stringify([S,C,w,E.centre,E.right,E.scale,E.ex,E.ey]);if(e===M)return;let t=$(),n=be(C),r=oe(E,{texels:Be}),i=ve(`near`,r.width,r.height),a=i?.getContext?.(`2d`,{alpha:!1});if(!a){M=e;return}let o=w&&ke[w]?w:null,s=null;if(o){let e=ve(`aux`,Ve,Ve),t=e?.getContext?.(`2d`,{alpha:!1});t&&(s={ctx:t,width:Ve,height:Ve,rect:je(E).rect,canvas:e})}Pe({plate:n,frame:E,strand:D,mood:T?.mood,sign:o,near:{ctx:a,layout:r},aux:s}),g.uNear.value=_e(`near`,i),g.uNearWarp.value.set(r.ax,r.bx,r.ay,r.by),g.uNearT.value.set(r.Tx,r.Ty),s?(g.uAux.value=_e(`aux`,s.canvas),g.uAuxRect.value.fromArray(s.rect),g.uAuxOn.value=1):g.uAuxOn.value=0,M=e,re++,A=Math.round(($()-t)*1e3),L=!0,l()}function Se(e=0){k||x||(k=setTimeout(xe,e))}function Ce(e){let t=D?.lights.length??0,n=He(t,e);for(let e=0;e<48;e++)_[e].w=e<t?n.inkAt[e]:-1e4;g.uEntrance.value.set(n.rimAt,n.waveAt,n.fullAt,Q.motif),R=e,se=n.end,z=!1,q(e)}function Y(){for(let e of _)e.w=-1e4;g.uEntrance.value.set(-1e4,-1e4,-1e4,Q.motif),se=N}function X(e,t){let n=new Set(e);D?.lights.forEach((e,r)=>{n.has(e.id)&&(_[r].w=t+.12)}),q(t)}return{setDesign(e){if(x||!e?.mood)return!1;if(e.revisionKey===S)return!0;let t=S===null,n=T,r=e.mood.plate??`atlas`,i=e.mood.signClear?e.mood.sign:null,a=r!==C||i!==w;S=e.revisionKey,T=e,C=r,w=i;let o=new Map((n?.stones??[]).map(e=>[e.id,`${e.componentId}`])),s=(e.stones??[]).filter(e=>e.stone&&o.get(e.id)!==`${e.componentId}`).map(e=>e.id),c=new Map(D?.lights.map((e,t)=>[e.id,_[t].w])??[]);return ge(),D?.lights.forEach((e,t)=>{_[t].w=c.get(e.id)??-1e4}),J(),Se(t?30:0),t||a||s.length>4?z=!0:s.length?X(s,N):q(N),e.stonesKey,L=!0,!0},setConfiguration(e){if(x)return!1;let t=Number(e?.strength);return g.uStrength.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1,L=!0,!0},frame(e={}){if(x)return!1;let{timeSeconds:t=0,playing:n=!1,reducedMotion:r=!1,interacting:i=!1,selectedIds:a=[],productYaw:o=0,productPivot:c=[0,0]}=e;H=e.viewport??H;let l=Number.isFinite(e.wallSeconds)?e.wallSeconds:$();de=$(),ce++,le??=typeof performance<`u`?performance.now():0,ue=Number(H?.cssWidth)>0&&Number(H.cssWidth)<700;let u=ie;ie=n,ae=r;let d=P===null?0:Math.max(0,Math.min(.5,l-P)),p=P!==null&&l-P>3&&!i;P=l,(!I||z)&&(N+=d),U=Number(o)||0,fe=Array.isArray(c)?c:[0,0],(z||n&&!r&&(!u||p))&&(r||!n?(Y(),z=!1):Ce(N));let m=Array.isArray(a)?a:[],h=m.join(`\0`);h!==B&&(B=h,m.length===1&&!r&&X(m,N)),i&&q(N);let _=r||!n,v=!_&&N<F;if(g.uTime.value=N,g.uReveal.value=_?Math.min(1,Math.max(0,(l-(W??=l))/ze)):1,_||(W=null),E){let e=Math.cos(U),t=Math.sin(U),[n,r]=fe,i=e,a=-t,o=-n*e+r*t+n,c=t,l=e,u=-n*t-r*e+r,[d,p]=E.right,[m,h]=E.away,_=1/E.scale,[v,y]=E.centre;g.uQx.value.set((d*i+p*c)*_,(d*a+p*l)*_,(d*(o-v)+p*(u-y))*_),g.uQy.value.set((m*i+h*c)*_,(m*a+h*l)*_,(m*(o-v)+h*(u-y))*_);let x=Number.isFinite(T?.bounds?.floorY)?T.bounds.floorY:0;g.uFloorY.value=x;let S=Math.max(.001,T?.bounds?.radius??E.scale*2);if(b.scale.setScalar(S*80),b.position.set(T?.bounds?.center?.[0]??0,x,T?.bounds?.center?.[2]??0),s?.isCamera&&H?.width>0){let e=new f(T?.bounds?.center?.[0]??0,x,T?.bounds?.center?.[2]??0),t=e.clone().project(s),n=e.clone().add(new f(E.right[0],0,E.right[1]).multiplyScalar(E.scale)).project(s),r=Math.hypot((n.x-t.x)*H.width/2,(n.y-t.y)*H.height/2);Number.isFinite(r)&&r>0&&(g.uPxU.value=r/174),g.uRes.value.set(H.width,H.height)}}return I=!v&&N>=se,L=!1,!I&&ue&&me(),!0},needsFrame(){return!x&&(L||!I&&!ue||ae&&g.uReveal.value<1)},reset(){z=!0,L=!0},getState(){return{kind:`gravur`,version:5,plate:C?be(C).id:null,sign:w,stones:D?.lights.length??0,motifs:D?.motifs.length??0,frames:ce,createdAt:pe,firstFrameAt:le,painted:re,paintMs:A,uploads:j,texture:G.near?[G.near.width,G.near.height]:null,aux:g.uAuxOn.value>.5,clock:R===null?1e4:+(N-R).toFixed(3),entranceSeconds:R===null?0:+(se-R).toFixed(3),settled:I,motionUntil:F,playing:ie,reducedMotion:ae,phone:ue,solo:B?B.split(`\0`):[],reveal:g.uReveal.value,frame:E?{ex:+E.ex.toFixed(3),ey:+E.ey.toFixed(3),scale:+E.scale.toFixed(4)}:null,pxU:+g.uPxU.value.toFixed(3),drawCalls:1}},dispose(){if(!x){x=!0,V&&clearTimeout(V),k&&clearTimeout(k),m.parent?.remove(m),b.geometry.dispose(),h.dispose(),g.uNear.value?.dispose?.(),g.uAux.value?.dispose?.(),g.uNoise.value?.dispose?.();for(let e of Object.values(K))e?.dispose()}}}}export{ze as a,Ye as c,Re as i,He as l,Q as n,Xe as o,Be as r,Je as s,Ve as t};