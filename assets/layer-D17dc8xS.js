import{Hn as e,L as t,Rn as n,V as r,Wi as i,ar as a,ft as o,io as s,jr as c,no as l,pa as u,qt as d,ro as f,ta as p}from"./three.core-Dp-eO7LC.js";var m=Math.PI*2,h=(e,t=0,n=1)=>e<t?t:e>n?n:e,g=(e,t,n)=>e+(t-e)*n,_=(e,t,n)=>{let r=h((n-e)/(t-e));return r*r*(3-2*r)};function v(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function y(e,t,n,r,i){let a=[];for(let o=0;o<=i;o++){let s=o/i,c=1-s;a.push([c*c*c*e[0]+3*c*c*s*t[0]+3*c*s*s*n[0]+s*s*s*r[0],c*c*c*e[1]+3*c*c*s*t[1]+3*c*s*s*n[1]+s*s*s*r[1]])}return a}function b(e,t,n,r,i,a,o,s=1){let c=[];for(let l=0;l<=o;l++){let u=i*m*l/o,d=r+s*u,f=n*Math.exp(-a*u);c.push([e+f*Math.cos(d),t+f*Math.sin(d)])}return c}var x=.29,S=.04,C=Object.freeze({water(e){let t=[];for(let e=0;e<4;e++){let n=.036*(1-e*.23),r=[];for(let e=0;e<=32;e++){let t=Math.PI*e/32;r.push([n*Math.sin(t)*1.3,-n*Math.cos(t)])}if(e===0){let e=r[r.length-1];r.push(...b(e[0]+.009,e[1],.009,Math.PI,.85,.5,18,-1).slice(1))}t.push({p:r,w:1.15-e*.2,tint:e/3})}return t},fire(e){let t=[],n=.0025*Math.sin(e),r=e=>{let t=([t,r])=>[t*e,r*e+t*e*(t*e)*n*60],r=[y([0,0],[0,-.026],[.026,-.032],[.046,-.02],14),y([.046,-.02],[.062,-.01],[.076,.004],[.074,.022],12),y([.074,.022],[.073,.032],[.062,.034],[.06,.025],8),y([.06,.025],[.056,.014],[.044,.026],[.028,.026],10),y([.028,.026],[.01,.026],[0,.016],[0,0],10)],i=[];return r.forEach((e,t)=>{i=i.concat(t?e.slice(1):e)}),i.map(t)};return t.push({p:r(1),w:1.15,fill:!0,close:!0,tint:0}),t.push({p:r(.58).map(([e,t])=>[e+.008,t+.002]),w:.7,close:!0,tint:1}),t.push({p:b(.016,.006,.008,Math.PI*.5,1,.5,18),w:.7,tint:1}),t},earth(e){let t=[];for(let n=0;n<4;n++){let r=.036-n*.0078,i=.05-n*.0112,a=[];for(let t=0;t<=32;t++){let o=-1+2*t/32,s=(1-o*o)**.72;a.push([i*s*(1+.05*Math.sin(o*4+n+e*.3)),r*o])}t.push({p:a,w:1.05-n*.17,tint:n/3})}let n=[];for(let e=0;e<=20;e++){let t=e*m/20;n.push([.058+.0065*Math.sin(t)*1.3,.0045*Math.cos(t)])}return t.push({p:n,w:.8,close:!0,fill:!0,tint:1}),t},air(e){let t=[];for(let n=0;n<2;n++){let r=[],i=n*.013,a=1-n*.3;for(let t=0;t<18;t++){let n=t/18;r.push([.006+i+.034*n*n,-.052+.075*n+.003*Math.sin(e+n*3)])}let o=[.006+i+.034,.023],s=.016*a;t.push({p:r.concat(b(o[0]-s,o[1],s,0,.95,.5,28)),w:1.05-n*.3,tint:n})}return t}});function w(e,t,n,r,i=0){let[a,o]=n,s=-o,c=a,l=Math.cos(i),u=Math.sin(i);return e.map(e=>({...e,q:e.p.map(([e,n])=>{let i=(e*l-n*u)*r,d=(e*u+n*l)*r;return[t[0]+a*i+s*d,t[1]+o*i+c*d]})}))}var T=24*Math.PI/180;function E(e,t,n=1,r=1){let i=Math.cos(e),a=Math.sin(e),o=i/n,s=a/r,c=Math.hypot(o,s)||1;return[n*i+o/c*t,r*a+s/c*t]}function D(e,t=1,n=1,r=256,i=0,a=m){let o=[];for(let s=0;s<=r;s++)o.push(E(i+(a-i)*s/r,e,t,n));return o}function ee(e,{kind:t=`bracelet`,view:n={}}={}){let r=e.filter(e=>e.stone),i=r.length>=3?r:e;if(i.length<2)return null;let[a,o]=Array.isArray(n.toward)&&n.toward.every(Number.isFinite)&&Math.hypot(...n.toward)>1e-6?n.toward:[0,1],s=Math.hypot(a,o);a/=s,o/=s;let c=[-a,-o],l=[-c[1],c[0]],u=i.map(e=>e.position[0]*l[0]+e.position[2]*l[1]),d=i.map(e=>e.position[0]*c[0]+e.position[2]*c[1]),f=(Math.min(...u)+Math.max(...u))/2,p=(Math.min(...d)+Math.max(...d))/2,m=[f*l[0]+p*c[0],f*l[1]+p*c[1]],g=i.map(e=>[e.position[0]-m[0],e.position[2]-m[1]]).map(([e,t])=>[e*l[0]+t*l[1],e*c[0]+t*c[1]]),_=t===`necklace`,v,y=1,b=1;if(!_)v=Math.max(...g.map(([e,t])=>Math.hypot(e,t)));else{let e=Math.max(...g.map(([e])=>Math.abs(e))),t=Math.max(...g.map(([,e])=>Math.abs(e)));v=Math.max(1e-6,Math.min(e,t)),y=e/v,b=t/v}v=Math.max(1e-6,v);let C=Number.isFinite(n.elevation)?n.elevation:T,w=i.map(e=>e.radius/v).sort((e,t)=>e-t),E=h((w[Math.floor(w.length/2)]??.04/.29)/(S/x),.3,1);return Object.freeze({centre:Object.freeze(m),right:Object.freeze(l),away:Object.freeze(c),scale:v,ex:y,ey:b,necklace:_,elevation:C,ornament:E,backRoom:h((Math.cos(C)/Math.cos(T))**2,0,1.3)})}function te(e,t,n){let r=t-e.centre[0],i=n-e.centre[1];return[(r*e.right[0]+i*e.right[1])/e.scale,(r*e.away[0]+i*e.away[1])/e.scale]}function ne(e,t,{motifScale:n=1.2}={}){let r=e.length,i=e.map(e=>te(t,e.position[0],e.position[2])),a=e.map((n,a)=>{let o=i[(a-1+r)%r],s=i[(a+1)%r],c=i[a],l=s[0]-o[0],u=s[1]-o[1],d=Math.hypot(l,u)||1;l/=d,u/=d;let f=u,p=-l,m=c[0]/(t.ex*t.ex),h=c[1]/(t.ey*t.ey);if(f*m+p*h<0&&(f=-f,p=-p),!Number.isFinite(f)||r<3){let e=Math.hypot(m,h)||1;f=m/e,p=h/e}return{stone:e[a],q:c,r:e[a].radius/t.scale,n:[f,p]}}),o=a.filter(e=>e.stone.stone),s=Math.max(1,Math.ceil(o.length/48)),c=[];o.forEach((e,r)=>{if(r%s)return;let i=c.length,a=Math.max(0,e.n[1]),o=e.r*1.05+.03+.17*a*a*t.backRoom,l=[e.q[0]+e.n[0]*o,e.q[1]+e.n[1]*o],u=h(e.r/(S/x),.4,1.3);c.push({slot:i,id:e.stone.id,element:e.stone.element,base:l,out:e.n,scale:n*u/x,phase:r*.9})});let l=Math.max(1,Math.ceil(o.length/48)),u=o.filter((e,t)=>t%l===0).map(e=>({id:e.stone.id,q:e.q,r:e.r*Math.sqrt(l),color:e.stone.color,glow:e.stone.glow,element:e.stone.element,elementIndex:e.stone.elementIndex})),d=null,f=null,p=[];for(let e of a){let n=Math.atan2(e.q[1]/t.ey,e.q[0]/t.ex);if(f===null)d=n;else{let e=n-f;for(;e>Math.PI;)e-=m;for(;e<-Math.PI;)e+=m;d+=e}f=n,p.push(d)}let g=p.length>1&&Math.sign(p[p.length-1]-p[0])||1;return Object.freeze({parts:a,motifs:c,lights:u,rimStart:p[0]??-Math.PI/2,rimDirection:g})}function re(e,t=0,n=e.element){return w((C[n]??C.water)(t+e.phase),e.base,e.out,e.scale)}var O=e=>1+e/x,ie=Object.freeze({pool:O(.118),stream:O(.16),plate:O(.62)}),ae=Object.freeze({id:`water`,glslId:`Water`,metal:[228,206,158],leaf:[228,206,158],enamel:[120,170,210],light:[255,236,190],look:{dark:1,bloom:.4,sheen:0,sheenGain:.7,tint:.45,lineAlpha:.95,reflect:0,heat:0,wave:1},motif:{scale:1.25,alpha:.95,enamel:.3},frieze:{enamel:.5,band:.14},rim:[O(.118)-.05,O(.148)+.04],glsl:`
  vec3 groundWater(P p) {
    float r = p.rho * REFR0, Rp = ${ie.plate.toFixed(4)}, Rpool = ${ie.pool.toFixed(4)};
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
    float Rp = ${ie.plate.toFixed(4)}, R = ${ie.stream.toFixed(4)};
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
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t;e.line(D(ie.pool-1,n,r,360),1.2,.8),e.line(D(O(.131)-1,n,r,360),.6,.55);let i=D(O(.148)-1,n,r,120);for(let t=0;t<120;t++)e.dot(i[t],1.05,.7)},uniforms(){return{}}}),k=x*600,A=Object.freeze({FIELD:0,SEAM:236,LEAF:248,GLYPH:255}),j=e=>4*(e+1);function oe(e,t,n){let r=Math.abs(e);return Math.sign(e)*(r<=t?r:t+n*Math.tanh((r-t)/n))}function M(e,t,n){let r=Math.abs(e);if(r<=t)return 1;let i=Math.cosh((r-t)/n);return 1/(i*i)}function se(e,{texels:t=2048,core:n=.6,reach:r=1}={}){let i=e.ex+n,a=e.ey+n,o=r,s=r,c=i+o,l=a+s,u=t,d=Math.max(256,Math.round(t*l/c/8)*8);return Object.freeze({ax:i,ay:a,bx:o,by:s,Tx:c,Ty:l,width:u,height:d})}function ce({near:e,aux:t=null}){let n=[];if(e){let t=e.layout,r=t.width/2/t.Tx,i=t.height/2/t.Ty;n.push({ctx:e.ctx,map:([e,n])=>[t.width/2+oe(e,t.ax,t.bx)*r,t.height/2-oe(n,t.ay,t.by)*i],density:([e,n])=>Math.sqrt(r*M(e,t.ax,t.bx)*i*M(n,t.ay,t.by)),w:t.width,h:t.height})}if(t){let[e,r,i,a]=t.rect,o=t.width/(i-e),s=t.height/(a-r);n.push({ctx:t.ctx,map:([t,n])=>[(t-e)*o,(a-n)*s],density:()=>Math.sqrt(o*s),w:t.width,h:t.height,bounds:[e,r,i,a]})}for(let e of n)e.ctx.globalCompositeOperation=`source-over`,e.ctx.fillStyle=`#000`,e.ctx.fillRect(0,0,e.w,e.h),e.ctx.globalCompositeOperation=`lighten`,e.ctx.lineCap=`round`,e.ctx.lineJoin=`round`;let r=(e,t,n)=>`rgb(${Math.round(h(e)*255)},${Math.round(h(t)*255)},${Math.round(h(n/255)*255)})`,i=(e,t,n=`r`,i=1)=>n===`g`?r(0,e*i,t*e):n===`rg`?r(e,e*i,t*e):r(e,0,t*e),a=(e,t,n)=>e.bounds&&t.every(([t,r])=>t<e.bounds[0]-n||t>e.bounds[2]+n||r<e.bounds[1]-n||r>e.bounds[3]+n),o=0;function s(e,t,n){e.beginPath(),e.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++)e.lineTo(t[n][0],t[n][1]);n&&e.closePath()}function c(e,t,n){let r=t.length,i=[],a=[];for(let e=0;e<r;e++){let o=t[Math.max(0,e-1)],s=t[Math.min(r-1,e+1)],c=s[0]-o[0],l=s[1]-o[1],u=Math.hypot(c,l)||1;c/=u,l/=u;let d=n[e]/2;i.push([t[e][0]-l*d,t[e][1]+c*d]),a.push([t[e][0]+l*d,t[e][1]-c*d])}e.beginPath(),e.moveTo(i[0][0],i[0][1]);for(let t=1;t<r;t++)e.lineTo(i[t][0],i[t][1]);for(let t=r-1;t>=0;t--)e.lineTo(a[t][0],a[t][1]);e.closePath()}return{line(e,t,r=1,{slot:c=-1,code:l=c>=0?j(c):A.FIELD,close:u=!1,channel:d=`r`,dash:f=null}={}){if(!e||e.length<2)return;let p=u?[...e,e[0]]:e;for(let e of n){if(a(e,p,.05))continue;let n=e.ctx;for(let a=0;a<p.length-1;a+=24){let c=p.slice(a,Math.min(p.length,a+24+1)),u=t/k*e.density(c[Math.floor(c.length/2)]),m=r;u<1&&(m*=Math.max(.15,u),u=1),n.lineWidth=u,n.strokeStyle=i(m,l,d),f?n.setLineDash(f.map(t=>t/k*e.density(c[0]))):n.setLineDash([]),s(n,c.map(e.map)),n.stroke(),o++}n.setLineDash([])}},taper(e,t,n=1,r=.55,i={}){let a=e.length;a<2||this.ribbon(e,e.map((e,n)=>Math.max(.25,t*Math.sin(Math.PI*h(n/(a-1),.02,.98))**+r)),n,i)},ribbon(e,t,r=1,{slot:s=-1,code:l=s>=0?j(s):A.FIELD,channel:u=`r`,g:d=1}={}){if(!(!e||e.length<2))for(let s of n){if(a(s,e,.05))continue;let n=e.map(s.map),f=e.map((e,n)=>Math.max(.7,t[n]/k*s.density(e)));s.ctx.fillStyle=i(r,l,u,d),c(s.ctx,n,f),s.ctx.fill(),o++}},fill(e,{slot:t=-1,code:r=t>=0?j(t):A.FIELD,channel:c=`g`,alpha:l=1}={}){if(!(!e||e.length<3))for(let t of n)a(t,e,.05)||(t.ctx.fillStyle=i(l,r,c),s(t.ctx,e.map(t.map),!0),t.ctx.fill(),o++)},dot(e,t,r=1,{code:s=A.FIELD,channel:c=`r`}={}){for(let l of n){if(a(l,[e],.05))continue;let[n,u]=l.map(e),d=t/k*l.density(e),f=r;d<.6&&(f*=d/.6,d=.6),l.ctx.fillStyle=i(f,s,c),l.ctx.beginPath(),l.ctx.arc(n,u,d,0,Math.PI*2),l.ctx.fill(),o++}},star(e,t,n=1,r=6,i=0,a={}){this.dot(e,t*.42,n,a);for(let o=0;o<r;o++){let s=i+o*Math.PI*2/r,c=t*(o%2?.75:1.25)/k,l=t*.5/k;this.line([[e[0]+Math.cos(s)*l,e[1]+Math.sin(s)*l],[e[0]+Math.cos(s)*c,e[1]+Math.sin(s)*c*.8]],Math.max(.4,t*.16),n,a)}},glyph(e,t){let n=e.reduce((e,t)=>e+t.p.length,0),r=0;for(let i of e){let e=t(i);for(let t=0;t<i.p.length-1;t+=3){let a=Math.min(i.p.length,t+4),o=i.p.slice(t,a),s=e.slice(t,a);this.ribbon(o,s,1,{code:A.GLYPH,channel:`rg`,g:(r+t)/n})}r+=i.p.length}},get strokes(){return o}}}var N=e=>1+e/x,P=[238,194,116],F=[196,52,30],I=N(.175);function le(e){let t=(e%9+9)%9/5.5;return{r:I+Math.min(t,1.4)**1.25*2/x,a:t<1.4?Math.sin(Math.PI/2*Math.min(1,t/.1))*(1-((e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/.8500000000000001));return r*r*(3-2*r)})(.5,1.35,t)):0}}function L(e,t,n,r,i,a,o={}){let s=[],c=o.step??.038,l=o.depth??2,u=o.stop||(()=>!1),d=o.steer||null,f=(t,n,r,i,a,p)=>{let m=[[t,n]],h=0;for(let s=0;s<i&&(h=h*.86+(e()-.5)*(o.wob??.07),e()<.025&&(h+=(e()-.5)*.5),r+=h,d&&(r=d(t,n,r)),t+=Math.cos(r)*c,n+=Math.sin(r)*c*1.25,m.push([t,n]),!u(t,n));s++)p<l&&s>6&&e()<(o.branch??.035)&&f(t,n,r+(e()<.5?-1:1)*(.55+e()*.5),(i-s)*(.35+e()*.3),a*.6,p+1);m.length>3&&s.push({p:m,w:a,d:p})};return f(t,n,r,i,a,0),s}var R=Object.freeze([{p:((...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]))(y([0,-.012],[.012,-.014],[.03,-.012],[.046,.002],10),y([.046,.002],[.054,.01],[.05,.02],[.042,.016],6),y([.042,.016],[.03,.01],[.018,.016],[0,.012],8)),w:.9,fill:!0,close:!0,tint:0},{p:y([.006,-.002],[.018,-.004],[.026,0],[.034,.006],6),w:.5,tint:1}]),ue=Object.freeze({id:`fire`,glslId:`Fire`,metal:P,leaf:P,enamel:F,light:[255,226,170],look:{dark:1,bloom:.4,sheen:0,sheenGain:.6,tint:.45,lineAlpha:.95,reflect:.3,heat:.7,wave:.8,ring:1},motif:{scale:1.2,alpha:.95,enamel:.38},frieze:{enamel:.55,band:.08},rim:[N(.112)-.04,N(.15)+.04],glsl:`
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
    float r1 = ${(I+.065/x).toFixed(4)}, r2 = r1 + (1.1 + .35 * mod(i * 5., 4.) / 3.) / REFR0;
    float f = clamp((p.rho - r1) / (r2 - r1), 0., 1.), on = step(r1, p.rho) * step(p.rho, r2), hw = .016 / REFR0 * (1. - f);
    float fd = fwidth(d0); fd = fd > .5 ? fwidth(p.rho) : fd;
    float taper = pow(1. - f, .8) * min(1., f * 12.);
    float c = aaLine(d0, fd, 1.25 * uPxU * taper) * .62;
    c = max(c, aaLine(d0 - hw, fd, .55 * uPxU * taper) * .42);
    c = max(c, aaLine(d0 + hw, fd, .55 * uPxU * taper) * .42);
    // The ring lights the gold it crosses.
    float lit = exp(-pow((p.rho - uRing.x) / .24, 2.)) * uRing.y;
    return vec4(vec3(1., .9, .66) * c * on * lit * 1.1, c * on);
  }
  `,paint(e,{frame:t,motifs:n}){let{ex:r,ey:i}=t,a=t.ornament,o=e=>e-1,s=(e,t)=>E(t,o(e),r,i);e.line(D(o(I),r,i,360),1.3,.85),e.line(D(o(I+.012/x),r,i,360),.5,.55);for(let t=0;t<240;t++){let n=t*m/240,r=I+.014/x,i=r+(t%4==0?.03:.018)/x*a;e.line([s(r,n),s(i,n)],t%4==0?.75:.45,t%4==0?.62:.38)}e.line(D(o(I+.05/x),r,i,360),.6,.6);let c=I+.065/x;for(let t=1;t<48;t+=2){let n=(t+.5)*m/48,r=c+((t%4==1?.34:.24)+.04*Math.sin(t*1.7))/x*a,i=t*1.3,o=[],l=[],u=[];for(let e=0;e<=36;e++){let t=e/36,d=g(c,r,t),f=.03/x*a*Math.sin(t*m*1.15+i)*t**.8,p=.019/x*a*(1-t)**.9*(1+.4*Math.sin(Math.PI*t));o.push(s(d,n+(f+p)/d)),l.push(s(d,n+(f-p)/d)),e>=2&&e<=30&&u.push(s(d,n+f/d))}e.fill(o.concat([...l].reverse()),{channel:`g`,alpha:.5}),e.taper(o,1,.85,.6),e.taper(l,.8,.7,.6),e.taper(u,.55,.6,.7)}for(let e=0;e<48;e++){let t=e*m/48,o=s(I+.06/x,t),c=Math.cos(t)/r,l=Math.sin(t)/i,u=Math.hypot(c,l);n.draw(w(R,o,[c/u,l/u],a/x,0),{alpha:.8,enamel:.5,widthScale:.9,code:A.FIELD})}let l=v(127);for(let t=0;t<7;t++){let n=(t+.5)*m/7+.13,[r,i]=s(I+(.45+l()*.2)/x*a,n),o=L(l,r,i,n+(l()-.5)*.4,34+l()*24,1.4,{step:.014/x*a,wob:.05,branch:.04,depth:2,steer:(e,t,n)=>{let r=Math.atan2(t,e)-n;for(;r>Math.PI;)r-=m;for(;r<-Math.PI;)r+=m;return n+r*.12},stop:(e,t)=>Math.abs(e)>4||Math.abs(t)>6});for(let t of o){let n=t.p.length;e.ribbon(t.p,t.p.map((e,r)=>Math.max(.3,t.w*(1-.6*r/n)*(.75+.25*Math.sin(r*.9)))),.82,{code:A.SEAM}),e.line(t.p,t.d?4.5:6.5,1,{code:A.SEAM,channel:`g`})}}},uniforms(){return{}}}),de=Object.freeze({aries:{stars:[[.08,.44,1],[.56,.34,2],[.8,.52,1.5],[.88,.68,1]],lines:[[0,1],[1,2],[2,3]]},taurus:{mirror:!0,stars:[[.52,.58,2],[.4,.66,1],[.47,.48,1],[.86,.14,1.5],[.92,.42,1],[.24,.74,1],[.08,.86,1]],lines:[[1,0],[0,4],[1,2],[2,3],[1,5],[5,6]]},gemini:{stars:[[.3,.1,2],[.56,.14,2],[.24,.44,1],[.14,.7,1],[.08,.84,1],[.6,.46,1],[.52,.68,1],[.44,.9,1.5]],lines:[[0,1],[0,2],[2,3],[3,4],[1,5],[5,6],[6,7]]},cancer:{stars:[[.5,.5,1.5],[.53,.34,1],[.58,.08,1],[.2,.84,1.5],[.84,.9,2]],lines:[[2,1],[1,0],[0,3],[0,4]]},leo:{mirror:!0,stars:[[.3,.8,2],[.34,.58,1],[.44,.44,1.5],[.42,.26,1],[.28,.14,1],[.16,.22,1],[.94,.68,1.5],[.72,.42,1],[.72,.66,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[2,7],[7,6],[6,8],[8,0],[7,8]]},virgo:{stars:[[.08,.42,1],[.26,.47,1],[.4,.5,1.5],[.54,.34,1],[.64,.12,1],[.5,.68,1],[.5,.9,2],[.72,.54,1],[.9,.46,1]],lines:[[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[3,7],[7,8]]},libra:{stars:[[.3,.6,1.5],[.52,.14,2],[.78,.44,1],[.26,.92,1],[.84,.88,1]],lines:[[0,1],[1,2],[2,0],[0,3],[2,4]]},scorpius:{stars:[[.86,.08,1],[.92,.2,1],[.9,.34,1],[.78,.27,1],[.7,.33,2],[.64,.44,1],[.56,.6,1],[.52,.74,1],[.5,.86,1],[.38,.94,1],[.24,.9,1],[.14,.78,1],[.16,.66,1],[.26,.58,1.5]],lines:[[0,1],[1,2],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13]]},sagittarius:{stars:[[.36,.52,1],[.38,.8,1.5],[.7,.74,1],[.62,.44,1],[.82,.36,2],[.88,.6,1],[.44,.24,1],[.18,.62,1]],lines:[[0,1],[1,2],[2,3],[3,0],[0,6],[6,3],[3,4],[4,5],[5,2],[0,7],[7,1]]},capricorn:{mirror:!0,stars:[[.1,.14,1.5],[.16,.3,1.5],[.36,.76,1],[.44,.9,1],[.66,.72,1],[.8,.54,1],[.94,.38,2],[.82,.36,1],[.64,.35,1],[.42,.33,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9],[9,1]]},aquarius:{mirror:!0,stars:[[.04,.62,1],[.1,.5,1],[.24,.4,2],[.44,.24,2],[.58,.22,1],[.66,.18,1],[.76,.24,1],[.64,.08,1],[.52,.52,1],[.7,.6,1],[.82,.76,1],[.9,.92,1.5]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[5,7],[3,8],[8,9],[9,10],[10,11]]},pisces:{stars:[[.12,.9,1.5],[.16,.72,1],[.22,.52,1],[.27,.34,1],[.24,.18,1],[.36,.22,1],[.28,.84,1],[.4,.8,1],[.52,.74,1],[.63,.67,1],[.72,.6,1],[.8,.52,1],[.86,.42,1],[.94,.46,1],[.95,.58,1],[.88,.64,1]],lines:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,3],[0,6],[6,7],[7,8],[8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,11]]}}),z=e=>1+e/x,fe=[58,38,22],pe=[190,146,62],B=Object.freeze({wi:z(.15),wo:z(.26),di:z(.275),dm:z(.3),do:z(.335),zi:z(.345),zo:z(.45),lo:z(.47),leaf:z(.268)}),V=[`aries`,`taurus`,`gemini`,`cancer`,`leo`,`virgo`,`libra`,`scorpius`,`sagittarius`,`capricorn`,`aquarius`,`pisces`],H=Object.freeze({id:`atlas`,glslId:`Atlas`,metal:fe,leaf:pe,enamel:[160,90,60],light:[255,236,170],look:{dark:0,bloom:0,sheen:2,sheenGain:.9,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.35},motif:{scale:1.14/1.2,alpha:.9,enamel:.42},frieze:{enamel:.42,band:.1,guil:.16},rim:[B.wi-.04,B.leaf+.04],glsl:`
  vec3 groundAtlas(P p) {
    vec2 G = p.g; float r = p.rho, ang = p.th;
    vec3 vel = vec3(.82, .725, .56);
    float st = fbm(G * 2.6) * .6 + fbm3(p.q * .8) * .4;
    vec3 col = vel * (.84 + .24 * st);
    float fx = smoothstep(.70, .86, fbm3(G * 11. + 11.)); col *= 1. - fx * .10;
    col = mix(col, col * vec3(.86, .78, .66), smoothstep(.55, .9, fbm3(G * 1.3 + 4.)) * .5);
    col *= .95 + .07 * mix(vn(p.q * vec2(73., 8.7)) * .45 + vn(p.q * vec2(8.7, 122.) + 3.) * .25 + vn(p.q * 244.) * .3, .5, clamp(log2(max(p.px * 200., 1e-4)) * .7, 0., 1.));
    // The hand-coloured wash ring: the strand's elements, each in its stone's colour, in proportion.
    float r1 = ${z(.155).toFixed(4)}, r2 = ${z(.255).toFixed(4)}; float en = (fbm3(G * 16.) - .5) * .048;
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
    float lo = ${B.lo.toFixed(4)};
    // The sky's graticule beyond the plate: dotted circles and hour lines (fading where finer than the pixels).
    float fade = 1. - smoothstep(.02, .05, p.px);
    float arc = p.th * r, fa = fwidth(arc), per = 4.6 / ${(x*600).toFixed(1)};
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
    vec3 leafCol = vec3(${pe.map(e=>(e/255).toFixed(3)).join(`, `)});
    // The leaf line darkens like ink here; its light is the sheen's (the main composition adds no bloom on paper).
    return vec4((leafCol - uMetal) * leafL, max(c, leafL));
  }
  `,paint(e,{frame:t,strand:n}){let{ex:r,ey:i}=t,a=e=>e-1,o=(e,t=360)=>D(a(e),r,i,t);e.line(o(B.wi),.8,.75),e.line(o(B.wo),.8,.75),e.line(o(B.di),1,.85),e.line(o(B.do),1,.85),e.line(o(B.dm),.45,.6);for(let t=0;t<360;t+=2){let n=t*Math.PI/180,o=t%10==0,s=t%30==0?B.do:o?B.dm+.018/x:B.dm,c=o?B.di:B.dm-.012/x;e.line([E(n,a(c),r,i),E(n,a(s),r,i)],o?.85:.55,o?.9:.7)}e.line(o(B.zi),.55,.7),e.line(o(B.zo),1.3,.9),e.line(o(B.lo),.5,.6);for(let t=0;t<12;t++){let n=t*m/12-Math.PI/2;e.line([E(n,a(B.zi),r,i),E(n,a(B.zo),r,i)],.7,.75);let o=de[V[t]],s=n+m/24,c=(B.zi+B.zo)/2,l=.042/x*1.6,u=o.stars.map(e=>e[0]),d=o.stars.map(e=>e[1]),f=(Math.min(...u)+Math.max(...u))/2,p=(Math.min(...d)+Math.max(...d))/2,h=Math.max(Math.max(...u)-Math.min(...u),(Math.max(...d)-Math.min(...d))*1.6,.1),g=o.stars.map(([e,t])=>{let n=((o.mirror?1-e:e)-(o.mirror?1-f:f))/h,u=-(t-p)/h;return E(s+n*l*1.8/c,a(c+u*l*.9),r,i)});for(let[t,n]of o.lines)e.line([g[t],g[n]],.6,.7);g.forEach((t,n)=>e.star(t,(o.stars[n][2]>=2?3.4:2.3)*.8,.85,4,.4))}e.line(o(B.leaf),2,.95,{code:A.LEAF});for(let o of n.parts){if(!o.stone.stone)continue;let n=Math.max(0,o.n[1]),s=Math.hypot(o.q[0]/r,o.q[1]/i),c=Math.atan2(o.q[1]/i,o.q[0]/r),l=a(s)+o.r*1.1+(.035+.05*n*n*t.backRoom)/x;a(B.wi)-.03>l&&e.line([E(c,l,r,i),E(c,a(B.wi)-.03,r,i)],.5,.5)}},uniforms(){return{}}}),U=null;function me(){if(U)return U;let e=v(5021),t=new Uint8Array(262144);for(let n=0;n<t.length;n++)t[n]=Math.floor(e()*256);return U=t}function he(e,t){let n=me(),r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=(e,t)=>n[((t%256+256)%256*256+(e%256+256)%256)*4]/255,c=s(r,i),l=s(r+1,i),u=s(r,i+1),d=s(r+1,i+1);return(c+(l-c)*a)*(1-o)+(u+(d-u)*a)*o}var ge=e=>1+e/x,_e=[70,46,26],W=[196,152,72],G=ge(.13),K=.04,ve=he;function ye(e,t,n=1,r=1){let i=n===1&&r===1?Math.hypot(e,t):Math.hypot(e/n,t/r);if(i<G)return 1;let a=e*x,o=t*x,s=(i-G)*x,c=ve(a*2.1+5.3,o*2.1)*.6+ve(a*4.7-2,o*4.7+3)*.28+ve(a*10,o*10)*.12;return 1-.72*s**.75+.6*(c-.5)*_(0,.3,s)}function be(e){let t=[`water`,`fire`,`earth`,`air`].map((e,t)=>[e,t]).filter(([t])=>(e?.[t]??0)>.02).sort((t,n)=>(e[n[0]]??0)-(e[t[0]]??0));return[0,1,2,3].map(e=>t[e]?[1-K*(3.5+e*5),1-K*(1+e*5),t[e][1],1]:[2,2,0,0])}function xe(e,t,n,r,i,a){let o=Math.ceil((r-t)/a)+1,s=Math.ceil((i-n)/a)+1,c=new Float32Array(o*s),l=[];for(let r=0;r<s;r++)for(let i=0;i<o;i++)c[r*o+i]=e(t+i*a,n+r*a);for(let e=0;e<s-1;e++)for(let r=0;r<o-1;r++){let i=c[e*o+r],s=c[e*o+r+1],u=c[(e+1)*o+r+1],d=c[(e+1)*o+r],f=Math.min(i,s,u,d),p=Math.max(i,s,u,d);if(!(p>=.999))for(let o=Math.ceil(f/K);o*K<=p;o++){let c=o*K,f=[],p=e=>t+e*a,m=e=>n+e*a;(i-c)*(s-c)<0&&f.push([p(r+(c-i)/(s-i)),m(e)]),(s-c)*(u-c)<0&&f.push([p(r+1),m(e+(c-s)/(u-s))]),(d-c)*(u-c)<0&&f.push([p(r+(c-d)/(u-d)),m(e+1)]),(i-c)*(d-c)<0&&f.push([p(r),m(e+(c-i)/(d-i))]),f.length>=2&&l.push([f[0],f[1]])}}return l}var Se=Object.freeze({id:`earth`,glslId:`Earth`,metal:_e,leaf:W,enamel:[160,186,196],light:[255,230,160],look:{dark:0,bloom:0,sheen:2,sheenGain:.7,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.35},motif:{scale:1.2,alpha:.95,enamel:.45},frieze:{enamel:.38,band:.1,guil:.16},rim:[ge(.118)-.04,ge(.13)+.04],glsl:`
  uniform vec4 uEarthBand[4];   // lo, hi, element index, present
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
    return col;
  }
  vec4 fieldEarth(P p) {
    float h = earthH(p.q, p.rho);
    float k = h / ${K.toFixed(3)}, kn = floor(k + .5), d = k - kn;
    bool idx = mod(kn, 5.) < .5;
    float c = aaLine(d, fwidth(k), (idx ? 1. : .5) * uPxU) * (idx ? .88 : .5);
    return vec4(0., 0., 0., c * (1. - smoothstep(.04, .09, p.px)) * step(h, .999));
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t,i=e=>e-1,a=(e,t)=>ye(e,t,n,r),o=[-.6,.8];xe(a,-3.4,-2.6,3.4,4.4,.045).forEach(([t,i],s)=>{if(s%2)return;let c=(t[0]+i[0])/2,l=(t[1]+i[1])/2;if(Math.hypot(c/n,l/r)<G+.07)return;let u=.035,d=(a(c+u,l)-a(c-u,l))/(2*u),f=(a(c,l+u)-a(c,l-u))/(2*u),p=Math.hypot(d,f)*x;if(p<.6)return;let m=-d/Math.hypot(d,f),g=-f/Math.hypot(d,f),_=h(.5-.5*(m*o[0]+g*o[1]));if(_<.35)return;let v=(.004+.01*_)*Math.min(1.4,p/1.5)/x;e.line([[c,l],[c+m*v,l+g*v]],.3+.45*_,.2+.45*_)});for(let t=0;t<260;t++){let a=t*m/260,s=h(.5-.5*(Math.cos(a)*o[0]+Math.sin(a)*o[1])),c=(.012+.016*s)/x,l=i(G)+.004/x;e.line([E(a,l,n,r),E(a,l+c,n,r)],.35+.4*s,.3+.4*s)}let s=v(128),c=.035;for(let t of[-.5,2.2,3.9]){let[o,l]=E(t,i(G)+.05/x,n,r),u=L(s,o,l,t,60,1,{step:.012/x,wob:.04,branch:.03,depth:1,steer:(e,t,n)=>{let r=a(e+c,t)-a(e-c,t),i=a(e,t+c)-a(e,t-c);if(Math.hypot(r,i)<1e-6)return n;let o=Math.atan2(-i,-r)-n;for(;o>Math.PI;)o-=m;for(;o<-Math.PI;)o+=m;return n+o*.22},stop:(e,t)=>Math.abs(e)>3.4||t<-2.6||t>4.4});for(let t of u){let n=t.p.length,r=t.p.map((e,r)=>(t.d?.9:1.6)*(.5+.5*r/n)*1.6);e.ribbon(t.p,r,.5,{code:A.FIELD,channel:`g`}),e.line(t.p,.4,.5)}}e.line(D(i(G)+.002/x,n,r,360),1.6,.9,{code:A.LEAF})},uniforms({mood:e}){return{uEarthBand:be(e?.shares)}}}),Ce=e=>1+e/x,we=[46,56,74],Te=Object.freeze([{base:.265,sp:.006,c:[[.06,.245,.03],[.1,.225,.04],[.15,.2,.05],[.2,.185,.045],[.25,.17,.055],[.31,.19,.045],[.36,.215,.04],[.41,.24,.028],[.22,.225,.045],[.13,.24,.035],[.29,.23,.04]]},{base:.13,sp:.004,c:[[.6,.118,.022],[.64,.1,.03],[.69,.085,.034],[.74,.095,.03],[.79,.11,.024],[.83,.12,.016]]},{base:.36,sp:.008,c:[[.78,.34,.025],[.82,.32,.033],[.87,.3,.04],[.92,.31,.034],[.97,.33,.03],[1.02,.345,.022]]},{base:.84,sp:0,c:[[-.06,.76,.12],[.1,.71,.13],[.27,.72,.12],[.45,.71,.13],[.63,.72,.12],[.8,.7,.13],[.98,.74,.12]]},{base:.99,sp:.005,c:[[.12,.95,.04],[.19,.93,.055],[.27,.95,.04]]}]),q=-1.15,Ee=1.71/.33,De=.075,Oe=e=>1.71/Math.max(e-q,.001),ke=e=>((Oe(e)-1)*Ee-De)/x;function Ae(){let e=[],t=[];for(let n of Te)for(let[r,i,a]of n.c){let o=Oe(i);e.push([(r-.5)*o/x,ke(i),a*o/x,a*o/x*1.3]),t.push([ke(n.base),n.sp*Oe(n.base)/x,0,0])}return{puffs:e,bases:t}}var je=Object.freeze({id:`air`,glslId:`Air`,metal:we,leaf:[196,160,92],enamel:[60,184,173],light:[255,236,190],look:{dark:0,bloom:0,sheen:2,sheenGain:.7,tint:.45,lineAlpha:.9,reflect:0,heat:0,wave:.4},motif:{scale:1.2,alpha:.95,enamel:.45},frieze:{enamel:.42,band:.1,guil:.14},rim:[Ce(.112)-.04,Ce(.175)+.04],glsl:`
  uniform vec4 uClouds[40];   // centre x, y, radius across, radius in depth (plate units)
  uniform vec4 uCloudB[40];   // base y, drift per second
  uniform float uCloudCount;
  // The clouds' union as a signed field (negative inside), and whether the nearest edge is on a puff's far side.
  vec2 cloudField(P p) {
    float u = 9., far = 0.;
    int n = int(uCloudCount + .5);
    for (int i = 0; i < n; i++) {
      vec4 c = uClouds[i]; vec4 b = uCloudB[i];
      float cx = c.x + (b.y > 0. ? mod(b.y * p.t + 4., 9.) - 4. : 0.);
      vec2 d = (p.q - vec2(cx, c.y)) / c.zw;
      float e = max((length(d) - 1.) * min(c.z, c.w), (b.x - p.q.y));
      if (e < u) { u = e; far = step(-.05, d.y); }
    }
    return vec2(u, far);
  }
  vec3 groundAir(P p) {
    float sy = gl_FragCoord.y / uRes.y, r = p.rho * REFR0;
    vec3 col = mix(vec3(.80, .83, .86), vec3(.90, .88, .83), smoothstep(0., .75, 1. - sy));
    col *= .95 + .03 * fbm3(p.q * .9) + .05 * mix(vn(p.q * vec2(73., 8.7)), .5, clamp(log2(max(p.px * 80., 1e-4)), 0., 1.));
    vec2 cf = cloudField(p);
    float inC = 1. - smoothstep(-.01, .01, cf.x);
    col = mix(col, vec3(.975, .965, .935), inC * .75);
    col += vec3(.06, .05, .02) * exp(-r * r * 2.4) * (.8 + .2 * sin(p.t * .4));
    col += p.glow * .035;
    return col;
  }
  vec4 fieldAir(P p) {
    float sy = gl_FragCoord.y / uRes.y, r = p.rho * REFR0;
    vec2 cf = cloudField(p);
    float inC = 1. - smoothstep(-.01, .01, cf.x);
    // The engraved sky: level lines of the plate, evenly spaced on screen, heavier toward the far side.
    float y = p.q.y + .02 * sin(p.q.x * 3.1 + p.q.y * 1.7), gq = y / (1. + .09 * abs(y)), stp = .05;
    float li = floor(gq / stp), d = gq / stp - li - .5;
    float tone = (.1 + .55 * pow(clamp(sy, 0., 1.), 1.6)) * (1. - .55 * exp(-r * r * 2.)) * (1. - inC);
    float sw = .55 + .45 * sin(p.q.x * 2.4 * (1. + .3 * h21(vec2(li, 3.))) + li * 1.7) * sin(p.q.x * .9 + li * .9);
    float c = aaLine(d, fwidth(gq / stp), tone * 2.8 * (.55 + .75 * sw) * uPxU) * step(.02, tone) * .82;
    // The clouds' scalloped outlines on their far side, and their flat bases.
    c = max(c, aaLine(cf.x, fwidth(cf.x), .85 * uPxU) * max(cf.y, .55) * .82);
    // The wind of 102 still turns round the piece: twelve long spirals.
    float R1 = ${Ce(.2).toFixed(4)}, b = .19, N = 12.;
    float u = log(max(p.rho, 1e-3) / R1) / b, on = step(0., u) * step(u, 3.6);
    float ph = (p.th - u - p.t * .025) / (6.2831853 / N), k = floor(ph + .5), fd = fwidth(ph);
    fd = fd > .5 ? fwidth(u) / (6.2831853 / N) : fd;
    bool heavy = mod(k, 3.) < .5;
    float taper = pow(max(sin(3.14159 * clamp(u / 3.6, 0., 1.)), 0.), .5);
    c = max(c, aaLine(ph - k, fd, (heavy ? 1.3 : .8) * uPxU * taper) * (heavy ? .55 : .38) * on * (1. - inC));
    return vec4(0., 0., 0., c * (1. - smoothstep(.05, .1, p.px)));
  }
  `,paint(e,{frame:t}){let{ex:n,ey:r}=t;e.line(D(Ce(.175)-1,n,r,360),1.5,.9,{code:A.LEAF})},uniforms(){let{puffs:e,bases:t}=Ae();return{uClouds:e,uCloudB:t,uCloudCount:e.length}}}),Me=Object.freeze([ae,ue,H,Se,je]),Ne=Object.freeze(Object.fromEntries(Me.map((e,t)=>[e.id,t])));function Pe(e){return Me[Ne[e]??Ne.atlas]}var Fe=(e,t,n,r,i,a,o=26)=>{let s=Math.hypot(n-e,r-t),c=Math.atan2(r-t,n-e),l=[];for(let n=1;n<=o;n++){let r=i*m*n/o;l.push([e+s*Math.exp(-a*r)*Math.cos(c-r),t+s*Math.exp(-a*r)*Math.sin(c-r)])}return l},Ie=(...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]),Le=Object.freeze({water:(()=>{let e=y([0,.1],[.26,.1],[.3,.88],[.54,.88],16),t=y([.54,.88],[.77,.88],[.86,.62],[.71,.48],12),n=Fe(.63,.62,.71,.48,1.25,.2,30);return{lines:[{p:Ie(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.3},{p:y([.17,.1],[.36,.12],[.38,.64],[.55,.7],12),w:.5,k:.6},{p:y([.33,.1],[.45,.14],[.47,.46],[.6,.5],10),w:.4,k:.6,tone:1}],fill:Ie(e,t,[[.71,.48],[.74,.3],[.76,.1]]),dots:[[.83,.8,.028],[.89,.7,.022],[.9,.86,.018]]}})(),fire:(()=>{let e=y([0,.1],[.17,.12],[.13,.64],[.33,.93],14),t=y([.33,.93],[.42,1.06],[.6,1.02],[.57,.86],10),n=Fe(.5,.86,.57,.86,1.1,.3,18),r=y([.57,.85],[.63,.62],[.5,.36],[.76,.1],14);return{lines:[{p:Ie(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.2},{p:r,w:.9,k:.55},{p:y([.2,.12],[.27,.4],[.27,.64],[.41,.76],12),w:.55,k:.6,tone:1},{p:y([.86,.1],[.93,.22],[.9,.36],[.98,.46],8),w:.45,k:.6,tone:1}],fill:Ie(e,t,[[.57,.86]],r),dots:[]}})(),earth:(()=>{let e=y([.04,.1],[.08,.86],[.92,.86],[.96,.1],22),t=y([.19,.1],[.23,.6],[.77,.6],[.81,.1],16),n=y([.33,.1],[.37,.37],[.63,.37],[.67,.1],12),r=Array.from({length:17},(e,t)=>{let n=t*m/16;return[.5+.045*Math.cos(n),.2+.03*Math.sin(n)]});return{lines:[{p:e,w:1.15,k:.5,swell:.25},{p:t,w:.65,k:.55},{p:n,w:.45,k:.6,tone:1}],fill:e,fill2:r,dots:[[0,.44,.024],[0,.6,.016],[.5,.97,.016]]}})(),air:(()=>{let e=y([0,.1],[.36,.1],[.4,.6],[.63,.66],16),t=Fe(.66,.5,.63,.66,1.35,.13,34);return{lines:[{p:Ie(e,[e[e.length-1],...t]),w:1.05,k:.45,swell:.2},{p:y([.66,.82],[.82,.9],[1,.78],[1.22,.84],14),w:.45,k:.8,tone:1},{p:y([.8,.3],[.92,.34],[1.06,.26],[1.24,.3],12),w:.4,k:.8}],fill:Ie(e,[[.63,.66],[.8,.5],[.8,.1]]),dots:[]}})()});function Re(e,t,{width:n=.085/x,gap:r=.006/x,lift:i=.045/x}={}){let a=new Map(e.motifs.map(e=>[e.id,e.slot])),o=e.parts.filter(e=>e.stone.stone).map(e=>({id:e.stone.id,element:e.stone.element,a:Math.atan2(e.q[1],e.q[0]),rho:Math.hypot(...e.q),rg:e.r}));if(o.length<3)return null;o.sort((e,t)=>e.a-t.a);let s=0,c=-1;for(let e=0;e<o.length;e++){let t=((o[(e+1)%o.length].a-o[e].a)%m+m)%m||m;t>c&&(c=t,s=(e+1)%o.length)}let l=o.slice(s).concat(o.slice(0,s)),u=[];l.forEach((e,t)=>{let n=e.a;if(t)for(;n<=u[t-1];)n+=m;u.push(n)});let d=0;for(let e of l)a.has(e.id)&&(d=a.get(e.id)),e.slot=a.get(e.id)??d;let f=l.length,p=n*t.ornament,h=i*t.backRoom,_=e=>{if(e<0)return g(u[f-1]-m,u[0],e+1);if(e>f-1)return g(u[f-1],u[0]+m,e-(f-1));let t=Math.floor(e);return g(u[t],u[Math.min(f-1,t+1)],e-t)},v=[];for(let e=0;e<=720;e++){let n=e*m/720,i=0,a=0;for(let e of l){let t=Math.abs(((n-e.a+Math.PI)%m+m)%m-Math.PI),r=Math.exp(-((t/.5)**2));i+=r,a+=r*(e.rho+e.rg*.92)}v.push(a/i+r*t.ornament+h*Math.max(0,Math.sin(n))**1.5)}let y=e=>{let t=(e%m+m)%m/m*720,n=Math.floor(t);return g(v[n],v[Math.min(720,n+1)],t-n)},b=(e,t)=>{let n=_(e-.5),r=y(n)+t*p;return[r*Math.cos(n),r*Math.sin(n)]},S=v.map(e=>[e,e+1.4*p]);return{S:l,n:f,W:p,at:b,inner:Math.min(...S.map(e=>e[0])),outer:Math.max(...S.map(e=>e[1]))}}function ze(e,t,n={}){if(!t)return!1;let{S:r,n:i,at:a}=t,o=n.enamel??.45,s=n.guil??.2;for(let t=0;t<i;t++){let i=r[t],c=j(i.slot),l=Le[i.element]??Le.water,u=e=>e.map(([e,n])=>a(e+t,n));n.band&&e.fill([a(t,-.02),a(t+1.04,-.02),a(t+1.04,1.06),a(t,1.06)],{code:c,channel:`g`,alpha:n.band});for(let n=0;n<16;n++){let r=t+(n+.5)/16;e.line([0,.25,.5,.75,1.04].map(e=>a(r+.06*Math.sin(e*6.3+n*.5),e)),.42,s,{code:c})}l.fill&&o>0&&e.fill(u(l.fill),{code:c,channel:`g`,alpha:o}),l.fill2&&o>0&&e.fill(u(l.fill2),{code:c,channel:`rg`,alpha:Math.min(1,o*1.6)});for(let t of l.lines){let n=u(t.p),r=n.length;e.ribbon(n,n.map((e,n)=>{let i=n/(r-1);return Math.max(.28,t.w*1.05*Math.sin(Math.PI*h(i*.96+.02))**+t.k*(1+(t.swell||0)*Math.sin(Math.PI*i)))}),.95,{code:c})}i.element!==`air`&&e.star(a(t+.97,.9),2.6,.85,4,.3,{code:c});for(let[n,r,i]of l.dots??[])e.dot(a(t+n,r),i*34,.85,{code:c})}let c=(t,n,r)=>{let o=[];for(let e=0;e<=i*8;e++)o.push(a(e/8,t));e.line(o,n,r,{code:A.FIELD})};c(.1,.55,.7),c(-.05,.5,.55),c(-.13,.45,.4),c(1.06,.8,.95),c(1.16,.8,.8),c(1.4,.5,.55);for(let t=0;t<i*3;t++)e.dot(a((t+.5)/3,1.28),1.05*(t%2?.8:1.15),.85);return!0}Object.freeze([`frieze`,`motifs`,`band`]);function Be(e,t=10){let n=[],r=e.length;for(let i=0;i<r;i++){let a=e[(i-1+r)%r],o=e[i],s=e[(i+1)%r],c=e[(i+2)%r];for(let e=0;e<t;e++){let r=e/t,i=r*r,l=i*r;n.push([0,1].map(e=>.5*(2*o[e]+(-a[e]+s[e])*r+(2*a[e]-5*o[e]+4*s[e]-c[e])*i+(-a[e]+3*o[e]-3*s[e]+c[e])*l)))}}return n}function Ve(e,{strand:t,plate:n,motifs:r,frame:i,mode:a=n.ornament??`frieze`}){if(a===`frieze`&&i){let r=Re(t,i);if(r&&ze(e,r,n.frieze??{}))return{form:`frieze`,band:[r.inner,r.outer]}}if(a!==`band`||t.motifs.length<3){for(let e of t.motifs)r.draw(re(e),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:j(e.slot)});return{form:`motifs`}}let o=t.motifs,s=.1,c=Be(o.map(e=>[e.base[0]+e.out[0]*s*.5,e.base[1]+e.out[1]*s*.5]),12),l=e=>{let t=c[(e-1+c.length)%c.length],n=c[(e+1)%c.length],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1;return[(n[1]-t[1])/r,-(n[0]-t[0])/r]},u=l(0)[0]*o[0].out[0]+l(0)[1]*o[0].out[1]<0?-1:1,d=(e,t)=>{let[n,r]=l(e);return[c[e][0]+n*t*u,c[e][1]+r*t*u]};return o.forEach((t,i)=>{let a=i*12-6,o=Array.from({length:13},(e,t)=>(a+t+c.length)%c.length),f=j(t.slot);for(let t of[-.1/2,s/2])e.line(o.map(e=>d(e,t)),.7,n.motif.alpha,{code:f});for(let e of[3,9]){let a=o[Math.round(e)],[d,p]=l(a),m=[d*u,p*u],h=[c[a][0]-m[0]*s*.35,c[a][1]-m[1]*s*.35];r.draw(w((C[t.element]??C.water)(i),h,m,t.scale*.45),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:f,widthScale:.7})}}),{form:`band`}}function He(e,t,n=8){let r=e.length,i=[],a=n=>t?e[(n+r)%r]:e[Math.max(0,Math.min(r-1,n))],o=t?r:r-1;for(let e=0;e<o;e++){let t=a(e-1),r=a(e),o=a(e+1),s=a(e+2);for(let e=0;e<n;e++){let a=e/n,c=a*a,l=c*a;i.push([0,1].map(e=>.5*(2*r[e]+(-t[e]+o[e])*a+(2*t[e]-5*r[e]+4*o[e]-s[e])*c+(-t[e]+3*r[e]-3*o[e]+s[e])*l)))}}return t||i.push(e[r-1].slice()),i}function Ue(e,t=8){let n=e.length,r=[],i=t=>e[Math.max(0,Math.min(n-1,t))];for(let e=0;e<n-1;e++){let n=i(e-1),a=i(e),o=i(e+1),s=i(e+2);for(let e=0;e<t;e++){let i=e/t;r.push(.5*(2*a+(-n+o)*i+(2*n-5*a+4*o-s)*i*i+(-n+3*a-3*o+s)*i*i*i))}}return r.push(e[n-1]),r}var We=e=>{let t=[0];for(let n=1;n<e.length;n++)t.push(t[n-1]+Math.hypot(e[n][0]-e[n-1][0],e[n][1]-e[n-1][1]));return t},Ge=e=>e.map((t,n)=>{let r=e[Math.max(0,n-1)],i=e[Math.min(e.length-1,n+1)],a=i[0]-r[0],o=i[1]-r[1],s=Math.hypot(a,o)||1;return[a/s,o/s]}),Ke=e=>{let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r[0]*i[1]-i[0]*r[1]}return t/2};function qe(e){let t=e.per||10,n=e.straight?(()=>{let n=[];for(let r=0;r<e.knots.length-1;r++)for(let i=0;i<t;i++){let a=e.knots[r],o=e.knots[r+1],s=i/t;n.push([g(a[0],o[0],s),g(a[1],o[1],s)])}return n.push(e.knots[e.knots.length-1].slice()),n})():He(e.knots,!1,t),r=Ue(e.wd,t),i=n.length,a=Ge(n),o=r.map((n,r)=>{let a=r%t/t,o=r===i-1;return Math.max(0,n/2*(1+(e.bulge||0)*Math.sin(Math.PI*(o?1:a))))}),s=a.map(([e,t])=>[-t,e]),c=n.map((e,t)=>[e[0]+s[t][0]*o[t],e[1]+s[t][1]*o[t]]),l=n.map((e,t)=>[e[0]-s[t][0]*o[t],e[1]-s[t][1]*o[t]]),u=(e,t,n,r)=>{let i=[],a=Math.atan2(t[1],t[0]);for(let t=1;t<10;t++){let o=a+r*(Math.PI/2-Math.PI*t/10);i.push([e[0]+Math.cos(o)*n,e[1]+Math.sin(o)*n])}return i},d=e.cap1===`point`?[]:u(n[i-1],a[i-1],o[i-1],1),f=e.cap0===`point`?[]:u(n[0],a[0].map(e=>-e),o[0],1),p=c.concat(d,l.slice().reverse(),f);return Ke(p)<0&&p.reverse(),{sp:n,hw:o,tg:a,nr:s,L:c,R:l,outline:p,per:t,s:We(n)}}function Je(e,t){let n=1e9,r=-1e9,i=1e9,a=-1e9;for(let[t,o]of e)n=Math.min(n,t),r=Math.max(r,t),i=Math.min(i,o),a=Math.max(a,o);n-=t*3,i-=t*3,r+=t*3,a+=t*3;let o=Math.ceil((r-n)/t)+1,s=Math.ceil((a-i)/t)+1,c=new Float32Array(o*s);for(let r=0;r<s;r++){let i=a-(r+.5)*t,s=[];for(let t=0;t<e.length;t++){let n=e[t],r=e[(t+1)%e.length];n[1]>i!=r[1]>i&&s.push(n[0]+(i-n[1])/(r[1]-n[1])*(r[0]-n[0]))}s.sort((e,t)=>e-t);for(let e=0;e+1<s.length;e+=2){let i=Math.max(0,Math.ceil((s[e]-n)/t-.5)),a=Math.min(o-1,Math.floor((s[e+1]-n)/t-.5));for(let e=i;e<=a;e++)c[r*o+e]=1e6}}let l=Math.SQRT2;for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=e*o+t;if(!c[n])continue;let r=c[n];t>0&&(r=Math.min(r,c[n-1]+1)),e>0&&(r=Math.min(r,c[n-o]+1),t>0&&(r=Math.min(r,c[n-o-1]+l)),t<o-1&&(r=Math.min(r,c[n-o+1]+l))),c[n]=r}for(let e=s-1;e>=0;e--)for(let t=o-1;t>=0;t--){let n=e*o+t;if(!c[n])continue;let r=c[n];t<o-1&&(r=Math.min(r,c[n+1]+1)),e<s-1&&(r=Math.min(r,c[n+o]+1),t<o-1&&(r=Math.min(r,c[n+o+1]+l)),t>0&&(r=Math.min(r,c[n+o-1]+l))),c[n]=r}let u=0;for(let e=0;e<c.length;e++)c[e]=c[e]>0?(c[e]-.5)*t:0,u=Math.max(u,c[e]);return{at:(e,r)=>{let i=(e-n)/t-.5,l=(a-r)/t-.5,u=Math.floor(i),d=Math.floor(l);if(u<0||d<0||u>=o-1||d>=s-1)return 0;let f=c[d*o+u],p=c[d*o+u+1],m=c[(d+1)*o+u],h=c[(d+1)*o+u+1],_=i-u,v=l-d;return g(g(f,p,_),g(m,h,_),v)},x0:n,x1:r,y0:i,y1:a,cell:t,dmax:u}}function Ye(e,t,n,r,i){let a=e.at(t,n);if(a<=0)return-1;let o=e.cell,s=e.at(t+o,n)-e.at(t-o,n),c=e.at(t,n+o)-e.at(t,n-o),l=Math.hypot(s,c)||1;s/=l,c/=l;let u=1-Math.min(1,a/r),d=Math.sqrt(Math.max(0,1-u*u));return h((.95-(-s*u*i[0]-c*u*i[1]+d*i[2]))/.7)}function Xe(e,t){let n=(()=>{let t=e.light||[-.5,.62,.6],n=Math.hypot(...t);return t.map(e=>e/n)})(),r=(()=>{let e=Math.hypot(n[0],n[1]);return[n[0]/e,n[1]/e]})();return{parts:e.parts.map(e=>{let i=e.kind===`limb`?qe(e):{outline:(()=>{let t=He(e.pts,!0,e.per||8);return Ke(t)<0&&t.reverse(),t})()},a=Math.min(t*.5,.006),o=Je(i.outline,a),s=e.round??Math.max(.01,o.dmax*.9),c=(t,r)=>{let i=Ye(o,t,r,s,n);return i<0?i:h(i*(e.tone??1)+(e.toneAdd||0))},l=[],u=[],d=v(e.id.length*977+Math.round(o.dmax*1e4)),f=[];if(e.kind===`limb`&&(e.hatch||`across`)===`across`){let n=i,r=n.s[n.s.length-1],a=(e.rings||[]).map(e=>n.s[Math.min(n.sp.length-1,e*n.per)]),o=[];for(let i=t*.5;i<r;i+=t){let r=0;for(;r<n.s.length-2&&n.s[r+1]<i;)r++;let s=(i-n.s[r])/Math.max(1e-6,n.s[r+1]-n.s[r]),c=[g(n.sp[r][0],n.sp[r+1][0],s),g(n.sp[r][1],n.sp[r+1][1],s)],l=n.nr[r],u=n.tg[r],d=g(n.hw[r],n.hw[r+1],s)*1.15,f=[];for(let t=0;t<=22;t++){let n=1-2*t/22;f.push([c[0]+l[0]*d*n+u[0]*d*(e.bow??.3)*(1-n*n),c[1]+l[1]*d*n+u[1]*d*(e.bow??.3)*(1-n*n)])}let p=0;for(let e of a){let n=i-e;n>0&&(p=Math.max(p,.3*Math.exp(-n/(t*1.6))))}o.push({pts:f,boost:p})}f.push({lines:o,thr:[.16,.4,.26,.52],cross:!1})}if(e.kind===`limb`&&e.hatch===`along`){let e=i,n=Math.max(...e.hw),r=[];for(let i=-1+t/n*.5;i<1;i+=t/n)r.push({pts:e.sp.map((t,n)=>[t[0]+e.nr[n][0]*e.hw[n]*i*.97,t[1]+e.nr[n][1]*e.hw[n]*i*.97]),boost:0});f.push({lines:r,thr:[.16,.4,.26,.52],cross:!1})}let p=(e,t,n,r,i)=>{let a=Math.cos(e),s=Math.sin(e),c=(o.x0+o.x1)/2,l=(o.y0+o.y1)/2,u=Math.hypot(o.x1-o.x0,o.y1-o.y0)/2,d=[];for(let e=-u;e<=u;e+=i){let n=[];for(let r=0;r<=60;r++){let i=-u+2*u*r/60,o=t*u*(1-(i/u)**2);n.push([c+a*i-s*(e+o),l+s*i+a*(e+o)])}d.push({pts:n,boost:0})}return{lines:d,thr:n,cross:r}};if(e.kind===`shape`||e.hatch===`angle`){let n=e.hatchA||{ang:.35,bow:.12};f.push(p(n.ang,n.bow,[.16,.4,.26,.52],!1,t))}if(!e.noCross){let n=e.crossA||{ang:(e.hatchA?e.hatchA.ang:.35)+1.05,bow:.05};f.push(p(n.ang,n.bow,[.52,.68,.6,.76],!0,t*1.15))}if(f.forEach(e=>e.lines.forEach((t,n)=>{let r=e.thr[n%4],i=t.pts,a=i.map(([e,n])=>{let r=c(e,n);return r<0?-1:h(r+t.boost*_(.12,.4,r))}),o=null,s=()=>{if(o&&o.pts.length>=3){let t=o.pts.length;o.wd=o.dv.map((n,i)=>{let a=Math.min(1,Math.min(i,t-1-i)/2.5);return(.22+.85*h((n-r*.7)/(1-r*.7))**1.15)*(.35+.65*a)*(e.cross?.75:1)}),l.push(o)}o=null};for(let e=0;e<i.length;e++)a[e]>r?(o||={pts:[],dv:[]},o.pts.push(i[e]),o.dv.push(a[e])):s();s()})),!e.noStipple){let e=Math.round((o.x1-o.x0)*(o.y1-o.y0)/(t*t)*1.1);for(let t=0;t<e;t++){let e=g(o.x0,o.x1,d()),t=g(o.y0,o.y1,d()),n=c(e,t);if(n<0)continue;let r=Math.exp(-(((n-.2)/.09)**2));d()<r*.3&&u.push([e,t,.45+.5*d()])}}let m=i.outline,y=Ge(m.concat([m[0]])).slice(0,m.length).map(([t,n])=>{let i=n,a=-t,o=(1-(i*r[0]+a*r[1]))/2;return(e.cw??1)*(.4+1.75*o**1.4)}),b=[];if(e.kind===`limb`){let t=i;for(let n of e.rings||[]){let r=Math.min(t.sp.length-1,n*t.per),i=t.sp[r],a=t.nr[r],o=t.tg[r],s=t.hw[r],c=[];for(let e=0;e<=16;e++){let t=1-2*e/16;c.push([i[0]+a[0]*s*t*.98+o[0]*s*.42*(1-t*t),i[1]+a[1]*s*t*.98+o[1]*s*.42*(1-t*t)])}b.push({pts:c,w:.95*(e.rw??1),k:.55})}for(let[n,r,i,a]of e.keels||[])for(let e of[-1,1]){let o=[];for(let a=n*t.per;a<=Math.min(t.sp.length-1,r*t.per);a++)o.push([t.sp[a][0]+t.nr[a][0]*t.hw[a]*i*e,t.sp[a][1]+t.nr[a][1]*t.hw[a]*i*e]);o.length>2&&b.push({pts:o,w:a??.6,k:.8})}}return{P:e,geo:i,runs:l,dots:u,ow:y,extra:b}}),strokes:(e.strokes||[]).map(e=>({pts:e.raw?e.pts:He(e.pts,!!e.closed,e.per||8),w:e.w??1,k:e.k??.6,closed:!!e.closed,a:e.a??1,after:e.after,clip:e.clip})),Lt:n}}function Ze(e,t,n){let r=r=>[(r[0]-e)/n,(r[1]-t)/n];return{N:r,NS:e=>e.map(r),W:e=>e.map(e=>e/n)}}function Qe(e,t,n,r,i,a){let o=[];for(let s=0;s<=10;s++){let c=s/10,l=n+a*Math.sin(c*Math.PI)+i*c*c*1.6;o.push([e+Math.cos(l)*r*c,t+Math.sin(l)*r*c])}let s=o[10],c=n+i*1.6,l=Math.sign(i||1);for(let e=1;e<=5;e++){let t=c+l*(Math.PI/2+e*.6),n=r*.14*(1-e/7);o.push([s[0]+Math.cos(c+l*Math.PI/2)*r*.14+Math.cos(t)*n,s[1]+Math.sin(c+l*Math.PI/2)*r*.14+Math.sin(t)*n])}return o}var $e=e=>[(e[0]-3.4)/20,(e[1]+1.6)/20],J=e=>e.map($e),Y=e=>e.map(e=>e/20),et=Object.freeze({scorpius:()=>{let e=(e,t,n)=>({id:e,kind:`limb`,knots:J(t),wd:Y([n,n*.82,n*.68,n*.5,n*.16].map(e=>e*.78)),bulge:.2,straight:!0,alpha:e[1]===`u`?.78:.92,cap1:`point`,rings:[1,2,3],noCross:!0,noStipple:!0,cw:.8,rw:.8}),t=[e(`lu4`,[[3.6,-.6],[4.4,1.3],[3.2,4.4],[2.6,6.8],[3,8]],1),e(`lu3`,[[5.4,-.8],[6,1],[5.8,4.2],[6.6,6.6],[7.5,7.6]],1.05),e(`lu2`,[[7,-1.2],[7.6,.6],[8.4,3.6],[10.2,5.4],[11.5,5.8]],1.1),e(`lu1`,[[8.6,-1.8],[9,0],[10.6,2.6],[13,3.6],[14.5,3.2]],1.1),e(`ll4`,[[3.8,-3.6],[4.2,-5],[2.6,-7.8],[1.6,-10.2],[1.7,-11.6]],1),e(`ll3`,[[5.4,-4],[5.8,-5.4],[4.8,-8.6],[4.6,-11.2],[5.1,-12.5]],1.05),e(`ll2`,[[7,-4.4],[7.4,-5.9],[7.4,-9.2],[8.2,-11.8],[9,-12.9]],1.1),e(`ll1`,[[8.6,-5],[8.8,-6.2],[9.6,-9],[11.4,-11.4],[12.7,-12.1]],1.1),{id:`cuA`,kind:`limb`,knots:J([[10.6,-4],[12.6,-3.6],[14.2,-3.3],[15.4,-1.7],[16.6,-.9]]),wd:Y([1.5,1.45,1.35,1.3,1.4]),bulge:.14,rings:[2,3],cw:.9},{id:`cuH`,kind:`limb`,knots:J([[16.2,-1.2],[17.9,-.3],[19.7,.5]]),wd:Y([1.7,3,2.1])},{id:`cuF1`,kind:`limb`,knots:J([[19.3,1.1],[21,2],[22.6,2],[23.5,1.2]]),wd:Y([1.15,.85,.55,.1]),cap1:`point`,noStipple:!0},{id:`cuF2`,kind:`limb`,knots:J([[19.8,-.1],[21.4,-.4],[22.7,.1],[23.2,.7]]),wd:Y([1,.75,.45,.1]),cap1:`point`,noStipple:!0},{id:`clA`,kind:`limb`,knots:J([[10.8,-6],[12,-7.6],[13.2,-9],[14.6,-9.7],[15.6,-9.8]]),wd:Y([1.5,1.45,1.35,1.3,1.4]),bulge:.14,rings:[2,3],cw:.9},{id:`clH`,kind:`limb`,knots:J([[15.3,-9.8],[17.1,-9.7],[18.9,-9.1]]),wd:Y([1.7,3,2.1])},{id:`clF1`,kind:`limb`,knots:J([[18.7,-9.9],[20.5,-10.5],[22,-10.1],[22.8,-9.2]]),wd:Y([1.1,.8,.5,.1]),cap1:`point`,noStipple:!0},{id:`clF2`,kind:`limb`,knots:J([[19,-8.5],[20.6,-8],[21.8,-8.3],[22.5,-8.9]]),wd:Y([1,.75,.45,.1]),cap1:`point`,noStipple:!0},{id:`tail`,kind:`limb`,knots:J([[-2.6,-1.5],[-6.5,-2.7],[-10.6,-3.5],[-13.5,-1],[-15,3.4],[-13.6,6.9]]),wd:Y([3.1,2.8,2.7,2.65,2.6,2.55]),bulge:.14,rings:[1,2,3,4],keels:[[0,5,.34,.55]],bow:.35},{id:`telson`,kind:`limb`,knots:J([[-13.9,7.1],[-12.2,7.7],[-10.6,7.2],[-9.7,6],[-9.6,4.6]]),wd:Y([2.5,3.5,2.6,1.1,.05]),cap1:`point`,bow:.3},{id:`body`,kind:`limb`,knots:J([[12.7,-5.4],[11,-4.7],[8.6,-3.6],[6.9,-2.9],[5.2,-2.3],[3.4,-1.9],[1.6,-1.6],[-.2,-1.45],[-1.9,-1.45],[-3.4,-1.55]]),wd:Y([3.2,5.2,6,6.4,6.8,6.9,6.6,6,5,3.8]),rings:[2,3,4,5,6,7,8],rw:1.05,bow:.32,per:8}],n=[{pts:J([[12,-5.15],[10.6,-4.45],[9.2,-3.85]]),w:.7,k:.7,after:`body`},{pts:J([[11.2,-4.25],[11.25,-4.2]]),w:2.4,k:.1,after:`body`},{pts:J([[11,-5.15],[11.05,-5.1]]),w:2.4,k:.1,after:`body`},...[0,1,2,3].map(e=>({pts:J([[20.2+e*.65,1.42+e*.18],[20.3+e*.65,1.05+e*.2]]),w:.5,k:.5,after:`cuF1`})),...[0,1,2,3].map(e=>({pts:J([[19.8+e*.65,-9.85-e*.12],[19.9+e*.65,-9.45-e*.1]]),w:.5,k:.5,after:`clF1`}))],r=[[`β`,14.22,-4,2.6],[`δ`,12.14,-6.16,2.3],[`π`,9.06,-7.84,2.9],[`ρ`,6.43,-9.53,3.9],[`ν`,13.86,-2.52,4],[`σ`,7.52,-3.35,2.9],[`α`,6.07,-2.13,1],[`τ`,3.81,-1.54,2.8],[`ε`,-2.99,-1.39,2.3],[`μ`,-6.53,-2.57,3],[`ζ`,-10.78,-3.85,3.6],[`η`,-13.05,-.89,3.3],[`θ`,-15.13,4.06,1.9],[`ι`,-13.5,7.42,3],[`κ`,-11.96,6.72,2.4],[`λ`,-9.51,5.97,1.6],[`υ`,-9.42,5.3,2.7]],i=e=>r.findIndex(t=>t[0]===e);return{key:`akrep`,parts:t,strokes:n,stars:r.map(e=>[...$e([e[1],e[2]]),e[3]]),alpha:i(`α`),edges:[[`β`,`δ`],[`δ`,`π`],[`π`,`ρ`],[`β`,`ν`],[`δ`,`σ`],[`σ`,`α`],[`α`,`τ`],[`τ`,`ε`],[`ε`,`μ`],[`μ`,`ζ`],[`ζ`,`η`],[`η`,`θ`],[`θ`,`ι`],[`ι`,`κ`],[`κ`,`λ`],[`λ`,`υ`]].map(([e,t])=>[i(e),i(t)]),light:[-.62,.48,.62],place:{cy:.205,w:.8}}},leo:()=>{let{N:e,NS:t,W:n}=Ze(-2,-1,19),r=v(55),i=(e,r,i,a={})=>Object.assign({id:e,kind:`limb`,knots:t(r),wd:n(i),bulge:.06,hatch:`along`,noCross:!0},a),a=(e,n,r={})=>Object.assign({id:e,kind:`shape`,pts:t(n)},r),o=[i(`hindFar`,[[-8,-2.6],[-6.8,-7],[-8.8,-10.4],[-8,-13.4],[-6.4,-13.9]],[4.6,3,1.9,1.8,1.4],{alpha:.62,toneAdd:.12}),i(`foreFar`,[[1.8,-4.6],[1.4,-9.4],[1.9,-12.9],[3,-13.8],[4.2,-13.9]],[3.8,2.7,2.1,1.9,1.4],{alpha:.62,toneAdd:.12}),i(`tail`,[[-12.9,1.8],[-15.2,2],[-17,.4],[-17.8,-1.8],[-18.4,-3]],[1.6,1.35,1.15,1,.9],{noCross:!0}),a(`tuft`,[[-17.8,-2.4],[-19.2,-2.6],[-20.4,-3.8],[-20.6,-5.6],[-19.6,-6.8],[-18.6,-6.2],[-18,-4.8],[-17.6,-3.4]],{hatchA:{ang:1.2,bow:.2},noCross:!0}),a(`torso`,[[.6,5],[-3.8,3.9],[-8.4,3.6],[-11.4,3.4],[-13.4,1.6],[-14,-1.8],[-12.9,-5],[-9.6,-5.6],[-5.2,-5.4],[-1.2,-6.2],[2.8,-7.4],[6.2,-5.8],[7,-2.8],[5,1.8]],{hatchA:{ang:1.75,bow:.14},noCross:!0,tone:.88}),i(`hindNear`,[[-10.8,-.8],[-9.3,-5.9],[-12.3,-9.6],[-11.4,-13.4],[-9.6,-13.9]],[6.4,3.9,2.1,2,1.6],{bulge:.1}),i(`foreNear`,[[4,-3.4],[5.2,-8],[8,-11],[10.4,-12.5],[12.2,-12.8]],[4.4,3.1,2.3,2,1.4]),a(`mane`,(()=>{let e=He([[12.6,3],[11,1.2],[9.4,-1],[7.6,-3.4],[5.6,-4.8],[3.2,-4],[.8,-1.2],[-.6,2.6],[0,6.2],[2,9],[5,10.8],[8,11.2],[10.6,10.8],[12.4,10.2]],!0,5),t=Ge(e);return e.map((e,n)=>{let r=e[0]<11.5?.55*Math.max(0,Math.sin(n*1.15)):0;return[e[0]+t[n][1]*r,e[1]-t[n][0]*r]})})(),{hatchA:{ang:2.3,bow:.2},noCross:!0,tone:.55,noStipple:!0,per:2}),a(`head`,[[9,7.8],[10,9.9],[12.3,9.8],[14,8.7],[15.15,7.6],[15.25,6.85],[14.9,6],[14.2,5.3],[13.6,4.4],[12.2,4],[10.6,4.4],[9.4,5.7]],{hatchA:{ang:1.9,bow:.15},tone:.85})],s=[],c=[11.4,6.6],l=He([[12.6,10],[9.8,10.6],[7.6,9.2],[6.8,6.4],[7.8,3.8],[10,2.8],[12.2,3]],!1,6),u=(e,t)=>{let n=e-c[0],r=t-c[1],i=Math.hypot(n,r)||1,a=n/i*.55-.225,o=r/i*.55-.387,s=Math.hypot(a,o);return[a/s,o/s]};for(let e=0;e<5;e++)for(let n=0;n<l.length;n++){if(r()<.12)continue;let[i,a]=l[n],o=i-c[0],d=a-c[1],f=Math.hypot(o,d),p=i+o/f*e*1.3+(r()-.5)*.35,m=a+d/f*e*1.2+(r()-.5)*.35,h=[[p,m]],g=3.6+r()*2.2,_=r()*6;for(let e=1;e<=14;e++){let[t,n]=u(p,m),r=.28*Math.sin(_+e*.55);p+=(t-n*r)*g/14,m+=(n+t*r)*g/14,h.push([p,m])}s.push({pts:t(h),w:1-e*.07,k:.5,after:`mane`,clip:`mane`,per:2})}for(let e=0;e<9;e++)s.push({pts:t(Qe(-18.2-e*.12,-2.9-e*.38,-1.75-e*.1,2+r()*.8,.35,.25)),w:.8,k:.5,after:`tuft`,clip:`tuft`,per:3});s.push({pts:t([[11.2,7.65],[11.8,8],[12.4,7.7],[11.8,7.45]]),w:.9,closed:!0,after:`head`},{pts:t([[11.75,7.7],[11.8,7.75]]),w:2.4,k:.1,after:`head`},{pts:t([[10.6,8.55],[11.8,8.85],[13.1,8.5]]),w:1.1,k:.6,after:`head`},{pts:t([[14.5,7.5],[15,7],[15.15,6.4]]),w:1.2,k:.5,after:`head`},{pts:t([[15,5.6],[14,5.15],[12.9,4.95]]),w:1,k:.6,after:`head`},{pts:t([[14.2,6.6],[13.9,6],[14,5.4]]),w:.8,k:.7,after:`head`},{pts:t([[12.3,7],[12.5,5.8],[12.1,4.7]]),w:.8,k:.7,after:`head`},{pts:t([[9.4,9.6],[9.8,10.9],[10.8,10.2]]),w:1,k:.5,after:`head`},...[[13.2,6.1],[13.6,6.2],[13.4,5.75],[13.8,5.8]].map(e=>({pts:t([e,[e[0]+.05,e[1]]]),w:1.6,k:.1,after:`head`})),...[[11.8,-12.5],[12.1,-12.9]].map(e=>({pts:t([e,[e[0]-.7,e[1]+.05]]),w:.6,k:.6,after:`foreNear`})),...[[-9.2,-13.5],[-9.4,-13.95]].map(e=>({pts:t([e,[e[0]-.7,e[1]]]),w:.6,k:.6,after:`hindNear`})),{pts:t([[-1,2.6],[-2.4,-.8],[-1.8,-4.6]]),w:.7,k:.8,after:`torso`},{pts:t([[-8.6,1.2],[-7.6,-2],[-8,-4.4]]),w:.6,k:.8,after:`torso`},{pts:t([[-9,-2],[-8.2,-4.4],[-9,-6.2]]),w:.7,k:.8,after:`hindNear`});let d=[[`α`,5.23,-6,1.4],[`η`,5.47,-1.24,3.5],[`γ`,2.38,1.84,2],[`ζ`,3.09,5.42,3.4],[`μ`,8.8,8,3.9],[`ε`,10.46,5.77,3],[`λ`,13.79,4.97,4.3],[`κ`,15.45,8.2,4.5],[`δ`,-10.46,2.52,2.6],[`θ`,-10.46,-2.57,3.3],[`β`,-18.78,-3.43,2.1],[`ρ`,-.71,-8.7,3.9],[`ο`,11.65,-8.1,3.5],[`ι`,-12.84,-7.5,4],[`σ`,-12.1,-12,4]],f=e=>d.findIndex(t=>t[0]===e);{let t=e([12.4,7]),n=e=>[t[0]+(e[0]-t[0])*1.14,t[1]+(e[1]-t[1])*1.14],r=o.find(e=>e.id===`head`);r.pts=r.pts.map(n),s.filter(e=>e.after===`head`).forEach(e=>{e.pts=e.pts.map(n)})}return{key:`aslan`,parts:o,strokes:s,stars:d.map(t=>[...e([t[1],t[2]]),t[3]]),alpha:f(`α`),edges:[[`α`,`η`],[`η`,`γ`],[`γ`,`ζ`],[`ζ`,`μ`],[`μ`,`ε`],[`ε`,`λ`],[`λ`,`κ`],[`γ`,`δ`],[`δ`,`β`],[`β`,`θ`],[`θ`,`α`],[`δ`,`θ`],[`θ`,`ι`],[`ι`,`σ`],[`α`,`ο`]].map(([e,t])=>[f(e),f(t)]),light:[-.42,.55,.78],place:{cy:.212,w:.64}}},pisces:()=>{let{N:e,NS:t,W:n}=Ze(.3,3.6,21),r=(e,r,i,a)=>{let o=[],s=[],c={id:e+`B`,kind:`limb`,knots:t(r),wd:n(i),hatch:`across`,bow:.45,per:12,tone:1.1},l=r[0],u=[r[1][0]-l[0],r[1][1]-l[1]],d=Math.hypot(...u),f=u[0]/d,p=u[1]/d,h=-p,_=f,v=(e,t)=>[l[0]-f*e+h*t,l[1]-p*e+_*t];o.push({id:e+`T`,kind:`shape`,pts:t([v(-.3,.5),v(1.4,1.5),v(2.9,2.9),v(2.6,1.2),v(1.9,0),v(2.6,-1.2),v(2.9,-2.9),v(1.4,-1.5),v(-.3,-.5)]),hatchA:{ang:Math.atan2(p,f),bow:.05},noCross:!0,per:6});for(let n=-4;n<=4;n++)n&&s.push({pts:t([v(.4,n*.12),v(1.6,n*.38),v(2.6-Math.abs(n)*.02,n*.66)]),w:.55,k:.7,after:e+`T`});let y=(e,t,n)=>{let a=Math.min(r.length-2,Math.floor(e*(r.length-1))),o=e*(r.length-1)-a,s=r[a],c=r[a+1],l=g(s[0],c[0],o),u=g(s[1],c[1],o),d=g(i[a],i[a+1],o)/2;return[l+h*t*(d+n),u+_*t*(d+n)]};for(let[n,r,i,c]of a){let a=[y(n,i,-.25),y(g(n,r,.3),i,c),y(g(n,r,.7),i,c*.8),y(r,i,-.25)];o.unshift({id:e+`F`+n,kind:`shape`,pts:t(a),hatchA:{ang:Math.atan2(_*i,h*i),bow:.05},noCross:!0,per:5,alpha:.9});for(let a=1;a<6;a++){let o=g(n,r,a/6);s.push({pts:t([y(o,i,-.1),y(o+.02,i,c*(.95-Math.abs(a-3)*.08))]),w:.45,k:.7,after:e+`F`+n})}}o.push(c);for(let e=.2;e<=.72;e+=.055)for(let n=-.75;n<=.76;n+=.3){let a=Math.floor(e*(r.length-1)),o=e*(r.length-1)-a,l=r[a],u=r[a+1],d=g(l[0],u[0],o),m=g(l[1],u[1],o),v=g(i[a],i[a+1],o)/2*Math.cos(n*.9),y=d+h*n*v*1.15,b=m+_*n*v*1.15,x=.42,S=[];for(let e=0;e<=6;e++){let t=Math.atan2(p,f)-1.25+2.5*e/6;S.push([y+Math.cos(t)*x,b+Math.sin(t)*x])}s.push({pts:t(S),w:.55,k:.7,after:c.id,a:.8})}let b=y(.8,1,-.3),x=y(.84,0,0),S=y(.8,-1,-.3);s.push({pts:t([b,[x[0]-f*.15,x[1]-p*.15],S]),w:1,k:.5,after:c.id});let C=y(.9,1,-1);s.push({pts:t(Array.from({length:9},(e,t)=>[C[0]+Math.cos(t*m/8)*.32,C[1]+Math.sin(t*m/8)*.32])),w:.8,closed:!0,after:c.id},{pts:t([C,[C[0]+.05,C[1]]]),w:2.2,k:.1,after:c.id});let w=y(.985,0,0);return s.push({pts:t([[w[0]-f*.1,w[1]-p*.1],[w[0]-f*.8-h*.25,w[1]-p*.8-_*.25]]),w:.7,k:.6,after:c.id}),{parts:o,strokes:s}},i=r(`w`,[[10.8,-8.8],[13.8,-7.6],[17.4,-7.2],[20.8,-7.9],[23.8,-9.4]],[1.6,4.9,6,4.3,.8],[[.33,.6,1,2],[.42,.6,-1,1.4]]),a=r(`n`,[[-11.8,4.2],[-10,8],[-9.7,11.8],[-8.4,15.6],[-8.8,19.6]],[1.6,4.7,5.8,4.1,.8],[[.33,.6,-1,2],[.42,.6,1,1.4]]),o={id:`cordW`,kind:`limb`,knots:t([[11.2,-8.6],[9.6,-5.6],[6,-4.6],[2,-4.4],[-2.2,-4.4],[-5.6,-4.1],[-8.3,-4.4],[-12.2,-5.9],[-14.9,-6.5],[-18,-8.2],[-19.4,-8.9]]),wd:n(Array(11).fill(.42)),noCross:!0,noStipple:!0,cw:.55,hatch:`none`},s={id:`cordN`,kind:`limb`,knots:t([[-20,-8.6],[-17.6,-5.2],[-15.9,-2.8],[-13.9,.2],[-12.5,3.35],[-11.6,4.8]]),wd:n([,,,,,,].fill(.42)),noCross:!0,noStipple:!0,cw:.55,hatch:`none`},c={id:`knot`,kind:`shape`,pts:t(Array.from({length:10},(e,t)=>[-19.9+Math.cos(t*m/10)*.95,-9+Math.sin(t*m/10)*.8])),hatchA:{ang:.8,bow:.3},noStipple:!0},l=[...i.strokes,...a.strokes];for(let e of[o,s]){let t=He(e.knots,!1,10),n=We(t),r=Ge(t),i=.05;for(let a=1;a<t.length;a++)if(n[a]>i){i+=.09;let[n,o]=r[a],s=-o,c=n,u=.42/21/2;l.push({pts:[[t[a][0]-s*u-n*u*2.2,t[a][1]-c*u-o*u*2.2],[t[a][0]+s*u+n*u*2.2,t[a][1]+c*u+o*u*2.2]],w:.55,k:.3,raw:!0,after:e.id})}}l.push({pts:t([[-20.7,-8.6],[-21.9,-7.8],[-22.4,-8.5],[-21.7,-9.1],[-20.9,-9]]),w:.8,k:.45},{pts:t([[-20.4,-9.7],[-21.2,-10.8],[-20.6,-11.4],[-20,-10.7],[-19.9,-9.9]]),w:.8,k:.45});let u=[[`α`,-20.05,-9.24,3.8],[`ν`,-14.9,-6.5,4.4],[`μ`,-12.2,-5.9,4.8],[`ζ`,-8.3,-4.4,5.2],[`ε`,-5.6,-4.1,4.3],[`δ`,-2.2,-4.4,4.4],[`ω`,10,-5.1,4],[`ι`,14.7,-6.4,4.1],[`θ`,17.6,-5.6,4.3],[`γ`,20.3,-8.7,3.7],[`κ`,17.9,-10.7,4.9],[`λ`,14.2,-10.2,4.5],[`ο`,-15.9,-2.8,4.3],[`π`,-13.9,.2,5.5],[`η`,-12.5,3.35,3.6],[`ρ`,-11.2,7.2,5.4],[`χ`,-7.6,9,4.7],[`φ`,-8.3,12.6,4.7],[`υ`,-9.5,15.3,4.8],[`τ`,-7.8,18.1,4.5]],d=e=>u.findIndex(t=>t[0]===e);return{key:`balik`,parts:[o,s,c,...i.parts,...a.parts],strokes:l,stars:u.map(t=>[...e([t[1],t[2]]),t[3]-1.6]),alpha:d(`η`),edges:[[`γ`,`θ`],[`θ`,`ι`],[`ι`,`λ`],[`λ`,`κ`],[`κ`,`γ`],[`ι`,`ω`],[`ω`,`δ`],[`δ`,`ε`],[`ε`,`ζ`],[`ζ`,`μ`],[`μ`,`ν`],[`ν`,`α`],[`α`,`ο`],[`ο`,`π`],[`π`,`η`],[`η`,`ρ`],[`ρ`,`χ`],[`χ`,`φ`],[`φ`,`υ`],[`υ`,`τ`]].map(([e,t])=>[d(e),d(t)]),light:[-.55,.5,.66],place:{cy:.2,w:.7}}}}),tt=new Map;function nt(e,t){let n=et[e];if(!n)return null;let r=`${e}:${t.toFixed(4)}`;if(!tt.has(r)){let e=n();tt.set(r,{F:e,GEO:Xe(e,t)})}return tt.get(r)}var rt=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.2),X=(...e)=>e.reduce((e,t,n)=>e.concat(n?t.slice(1):t),[]),Z=(e,t,n=10)=>Array.from({length:n+1},(r,i)=>[e[0]+(t[0]-e[0])*i/n,e[1]+(t[1]-e[1])*i/n]),it=(e,t,n,r=0,i=40,a=1)=>Array.from({length:i+1},(o,s)=>{let c=r+a*m*s/i;return[e+n*Math.cos(c),t+n*Math.sin(c)]}),Q=(e,t=.012,n=.045)=>({p:e,w:rt(e.length-1,t,n)}),at=e=>e.map(([e,t])=>[-e,t]),ot=e=>e.map(([e,t])=>[-e,-t]);function st(){let e=X(y([-.215,-.13],[-.27,.26],[.02,.52],[.19,.4],30),y([.19,.4],[.36,.27],[.3,.02],[.15,-.12],26),y([.15,-.12],[.03,-.24],[.08,-.46],[.3,-.42],26),y([.3,-.42],[.44,-.4],[.5,-.3],[.43,-.22],16)),t=e.length;return{p:e,w:e.map((e,n)=>{let r=n/(t-1);return .012+.05*Math.sin(Math.PI*h((r-.04)/.78))**1.3+.012*Math.exp(-(((r-.97)/.05)**2))})}}var ct=()=>X(Z([-.4,-.42],[-.4,.28]),y([-.4,.28],[-.4,.46],[-.16,.46],[-.16,.28],14),Z([-.16,.28],[-.16,-.42])),lt=Object.freeze({aries:()=>[Q(X(Z([0,-.48],[0,-.05],12),y([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),y([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))),Q(at(X(y([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),y([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))))],taurus:()=>[Q(it(0,-.17,.23,Math.PI/2,48),.02,.03),Q(y([-.44,.46],[-.3,.04],[.3,.04],[.44,.46],30))],gemini:()=>[Q(y([-.36,.44],[-.12,.34],[.12,.34],[.36,.44],20),.014,.03),Q(y([-.36,-.44],[-.12,-.34],[.12,-.34],[.36,-.44],20),.014,.03),Q(y([-.15,.37],[-.19,.1],[-.19,-.1],[-.15,-.37],20)),Q(y([.15,.37],[.19,.1],[.19,-.1],[.15,-.37],20))],cancer:()=>{let e=X(it(-.18,.12,.1,-Math.PI/2,30,-1),y([-.18,.22],[0,.36],[.28,.32],[.4,.14],20));return[Q(e,.012,.04),Q(ot(e),.012,.04)]},leo:()=>[st()],virgo:()=>[Q(ct()),Q(X(y([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),Z([.08,.28],[.08,-.2]),y([.08,-.2],[.08,-.5],[.42,-.48],[.36,-.16],16),y([.36,-.16],[.3,.08],[.04,-.06],[.2,-.46],16)))],libra:()=>[Q(Z([-.42,-.32],[.42,-.32],20),.016,.02),Q(X(Z([-.42,-.02],[-.17,-.02],8),y([-.17,-.02],[-.32,.46],[.32,.46],[.17,-.02],30),Z([.17,-.02],[.42,-.02],8)))],scorpius:()=>[Q(ct()),Q(X(y([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),Z([.08,.28],[.08,-.3]),y([.08,-.3],[.08,-.48],[.3,-.48],[.42,-.3],16))),Q(X(Z([.27,-.33],[.42,-.3],6),Z([.42,-.3],[.4,-.15],6)),.012,.02)],sagittarius:()=>[Q(Z([-.4,-.4],[.4,.4],30)),Q(X(Z([.1,.4],[.4,.4],8),Z([.4,.4],[.4,.1],8)),.014,.025),Q(Z([-.25,.05],[.05,-.25],10),.012,.025)],capricorn:()=>[Q(X(y([-.44,.32],[-.36,.3],[-.28,-.2],[-.2,-.4],16),y([-.2,-.4],[-.12,-.1],[-.04,.34],[.06,.34],16),y([.06,.34],[.16,.34],[.12,-.1],[.18,-.26],16),y([.18,-.26],[.24,-.46],[.46,-.38],[.4,-.18],14),y([.4,-.18],[.34,0],[.14,-.06],[.14,-.24],14),y([.14,-.24],[.14,-.44],[0,-.52],[-.1,-.46],12)))],aquarius:()=>[.14,-.2].map(e=>Q(X(...[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]].slice(0,4).map((t,n,r)=>{let i=[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]];return y([i[n][0],i[n][1]+e],[i[n][0]+.07,i[n][1]+e+(n%2?-.03:.05)],[i[n+1][0]-.07,i[n+1][1]+e+(n%2?.05:-.03)],[i[n+1][0],i[n+1][1]+e],10)})),.012,.035)),pisces:()=>[Q(y([-.46,.44],[-.18,.26],[-.18,-.26],[-.46,-.44],34),.012,.05),Q(y([.46,.44],[.18,.26],[.18,-.26],[.46,-.44],34),.012,.05),{p:Array.from({length:13},(e,t)=>[-.25+.5*t/12,.015*Math.sin(Math.PI*t/12)]),w:rt(12,.016,.014)}]}),ut=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.1),dt=Object.freeze({scorpius:()=>{let e=X(y([-.62,.28],[-.56,.36],[-.48,.36],[-.46,.26],8),y([-.46,.26],[-.46,.1],[-.46,-.2],[-.46,-.42],12)),t=X(y([-.46,.16],[-.38,.42],[-.18,.42],[-.15,.16],12),y([-.15,.16],[-.15,0],[-.15,-.2],[-.15,-.42],10)),n=X(y([-.15,.16],[-.07,.42],[.13,.42],[.16,.16],12),y([.16,.16],[.16,-.1],[.14,-.36],[.32,-.42],12),y([.32,-.42],[.44,-.45],[.52,-.36],[.56,-.22],8));return[{p:e,w:ut(e.length-1,.03,.07)},{p:t,w:ut(t.length-1,.03,.08)},{p:n,w:ut(n.length-1,.03,.08)},{p:[[.56,-.2],[.43,-.24]],w:[.06,.02]},{p:[[.56,-.2],[.6,-.34]],w:[.06,.02]}]},leo:()=>{let e=st();return[{p:e.p.map(([e,t])=>[e*1.5-.18,t*1.5-.07]),w:e.w.map(e=>e*1.5)}]},pisces:()=>lt.pisces().map(e=>({p:e.p.map(([e,t])=>[e*1.05,t*1.05]),w:e.w.map(e=>e*1.05)}))}),ft=e=>dt[e]??lt[e]??null;Object.freeze(Object.keys(et));function pt(e,t){let n=e.ey+3.4;return 1.74*(et[t],1),{centre:[0,n],S:1.74,k:2.1,spacing:.022}}function mt(e){let{centre:[t,n],S:r,k:i}=e;return[t-1.35*r,n-.85*r*i,t+1.35*r,n+.85*r*i]}function ht(e,{sign:t,frame:n,place:r=pt(n,t)}){let i=ft(t);if(!i)return;let a=nt(t,r.spacing);if(a){let{F:t,GEO:n}=a,{centre:[i,o],S:s,k:c}=r,l=([e,t])=>[i+e*s,o+t*s*c];for(let t=-1.25;t<=1.26;t+=.25){let n=[];for(let e=-.75;e<=.76;e+=.05)n.push([t+.04*e*e,e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/1.15)**4)))}for(let t=-.75;t<=.76;t+=.25){let n=[];for(let e=-1.25;e<=1.26;e+=.05)n.push([e,t+.03*e*e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/.62)**4)))}let u=(t,n)=>{let r=t.pts.map(l),i=r.length;i<2||(t.closed?e.line(r,t.w,n,{close:!0}):e.ribbon(r,r.map((e,n)=>Math.max(.25,t.w*Math.sin(Math.PI*h(n/(i-1)*.96+.02))**+t.k)),n))};for(let t of n.parts){let r=t.P,i=r.alpha??1;for(let n of t.runs)e.ribbon(n.pts.map(l),n.wd.map(e=>Math.max(.3,e*1.25)),.85*i);for(let[n,r,a]of t.dots)e.dot(l([n,r]),a*.62,.85*i);for(let e of t.extra)u(e,.95*i);let a=t.geo.outline.concat([t.geo.outline[0]]);e.ribbon(a.map(l),a.map((e,n)=>t.ow[n%t.ow.length]*1.25),i);for(let e of n.strokes)e.after===r.id&&u(e,e.a)}for(let e of n.strokes)e.after||u(e,e.a);let d=t.stars.map(([e,t])=>l([e,t]));for(let[n,r]of t.edges??[])e.line([d[n],d[r]],.6,.42);t.stars.forEach(([,,t],n)=>{let r=h(3.8-t,.8,3)*2.6;e.star(d[n],r*1.35,1,t<2?8:t<3?6:4,.2),t<1.8&&e.line(Array.from({length:25},(e,t)=>{let i=t*m/24,a=r*2.1/(x*600);return[d[n][0]+a*Math.cos(i),d[n][1]+a*Math.sin(i)]}),.55,.55)})}let o=.085/x*n.ornament,s=[0,.03/x*n.ornament],c=(e,t=120)=>Array.from({length:t+1},(n,r)=>{let i=r*m/t;return[s[0]+e*Math.cos(i),s[1]+e*Math.sin(i)]});e.line(c(o),1.1,.85),e.line(c(o*1.12),.5,.6),e.line(c(o*.88),.45,.45);for(let t=0;t<36;t++){let n=t*m/36,r=o*.88,i=o*(t%3==0?.8:.84);e.line([[s[0]+r*Math.cos(n),s[1]+r*Math.sin(n)],[s[0]+i*Math.cos(n),s[1]+i*Math.sin(n)]],.45,.5)}let l=o*.62,u=e=>e*l*x*600*1.1;e.glyph(i().map(e=>({p:e.p.map(([e,t])=>[s[0]+e*l,s[1]+t*l]),w:e.w})),e=>e.w.map(u))}function gt({plate:e,frame:t,strand:n,mood:r,sign:i=null,place:a=void 0,near:o,aux:s=null,ornament:c=void 0}){let l=ce({near:o,aux:s}),u=Object.freeze({draw(e,{alpha:t=1,enamel:n=.3,widthScale:r=1,code:i=0}={}){for(let a of e)a.fill&&n>0&&l.fill(a.q,{code:i,channel:`g`,alpha:n}),a.close?l.line(a.q,a.w*1.25*r,t,{code:i,close:!0}):l.taper(a.q,a.w*1.9*r,t,.5,{code:i})}});e.paint(l,{frame:t,strand:n,mood:r,motifs:u});let d=Ve(l,{strand:n,plate:e,motifs:u,frame:t,mode:c});return i&&ht(l,{sign:i,frame:t,...a?{place:a}:{}}),{strokes:l.strokes,ornament:d.form,band:d.band??null}}var _t=`
  #define MAXS 48
  #define REFR0 .29
  uniform float uTime, uPlate, uStoneCount, uPxU, uStrength, uReveal, uSolo, uLow;
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
`;function vt(e){let t=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) c = ground${e.glslId}(p);`).join(`
      `),n=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) f = field${e.glslId}(p);`).join(`
      `);return`
  varying vec3 vWorld;
  uniform float uFloorY;
  ${_t}
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
      vec4 bl = uLow > .5 ? vec4(0.) : (texture2D(uNear, nuv, 2.5) * .55 + texture2D(uNear, nuv, 4.) * .45) * edgeN;
      // The glyph's V-cut: which wall faces the light (the seal lives in the near texture, a figure's glyph in the aux one).
      vec2 offN = vec2(0., .04);
      float upA = texture2D(uNear, nearUV(p.q + offN)).r, dnA = texture2D(uNear, nearUV(p.q - offN)).r;
      if (uAuxOn > .5) {
        vec2 off = vec2(0., .04);

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
      float ringL = exp(-pow((p.rho - uRing.x) / .3, 2.)) * uRing.y;
      c += vec3(220., 65., 14.) / 255. * max(bl.g - .4, 0.) / .6 * uLook3.y * (.5 + .5 * sin(uTime * .5 + fbm3(p.q * .8) * 6.) + 2.5 * ringL) * show;
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
`}var yt=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,bt=1/30,$=Object.freeze({lead:.25,span:1.9,perStone:.12,rimDelay:.2,rim:.6,motif:1.2}),xt=.6,St=2048,Ct=1024,wt=.05,Tt=.036;function Et(e,t=0){let n=Math.min($.span,Math.max(0,e-1)*$.perStone),r=Array.from({length:e},(r,i)=>t+$.lead+(e>1?n*i/(e-1):0)),i=t+$.lead+n+$.rimDelay,a=i+$.rim;return{inkAt:r,rimAt:i,waveAt:a,fullAt:i-.3,end:a+2.4}}var Dt=e=>e.map(e=>e/255),Ot=e=>[1,3,5].map(t=>parseInt(String(e).slice(t,t+2),16)/255||0);function kt(e,t){if(typeof document<`u`&&document.createElement){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}return typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):null}function At(){let e=new o(new Uint8Array([0,0,0,255]),1,1);return e.colorSpace=``,e.needsUpdate=!0,e}function jt(){let e=new o(me(),256,256);return e.colorSpace=``,e.wrapS=e.wrapT=i,e.magFilter=n,e.minFilter=n,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Mt=()=>(typeof performance<`u`?performance.now():Date.now())/1e3;function Nt(){let e=Array.from({length:48},()=>new s(0,0,.1,-1e4)),t=Array.from({length:48},()=>new s),n=Array.from({length:48},()=>new s),r={uTime:{value:0},uPlate:{value:0},uStoneCount:{value:0},uPxU:{value:1},uStrength:{value:1},uReveal:{value:1},uSolo:{value:-1},uQx:{value:new f(1,0,0)},uQy:{value:new f(0,-1,0)},uMetal:{value:new f(.9,.8,.6)},uLeaf:{value:new f(.9,.8,.6)},uEnamel:{value:new f(.8,.3,.2)},uLightCol:{value:new f(1,.92,.75)},uEllipse:{value:new l(1,1)},uRing:{value:new l(0,0)},uLow:{value:0},uRes:{value:new l(1,1)},uFloorY:{value:0},uStoneA:{value:e},uStoneB:{value:t},uStoneC:{value:n},uEntrance:{value:new s(-1e4,-1e4,-1e4,$.motif)},uRim:{value:new s(-Math.PI/2,1,1.35,1.55)},uLook:{value:new s},uLook2:{value:new s(1,.45,1,.95)},uLook3:{value:new s},uNear:{value:At()},uAux:{value:At()},uNearWarp:{value:new s(1.6,1,1.6,1)},uNearT:{value:new l(2.6,2.6)},uAuxRect:{value:new s(-1,-1,1,1)},uAuxOn:{value:0},uShares:{value:new s(.25,.25,.25,.25)},uPig:{value:[new f(.8,.8,.8),new f(.8,.8,.8),new f(.8,.8,.8),new f(.8,.8,.8)]},uEarthBand:{value:[0,1,2,3].map(()=>new s(2,2,0,0))},uClouds:{value:Array.from({length:40},()=>new s)},uCloudB:{value:Array.from({length:40},()=>new s)},uCloudCount:{value:0},uNoise:{value:jt()}};return new p({name:`gravur-plate`,vertexShader:yt,fragmentShader:vt(Me),uniforms:r,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function Pt(){let e=new a(new c(.001,.001),Nt());return e.name=`gravur-plate-warm`,e.frustumCulled=!1,e}function Ft(i={}){let{scene:o,camera:s,registerNativeGroup:c}=i,l=typeof i.requestFrame==`function`?i.requestFrame:()=>{},p=typeof i.createCanvas==`function`?i.createCanvas:kt;if(!o?.isScene||typeof c!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let m=new d;m.name=`atmosphere-gravur`;let h=Nt(),g=h.uniforms,_=g.uStoneA.value,v=g.uStoneB.value,y=g.uStoneC.value,b=new a(new u(1,48,24),h);b.name=`gravur-plate`,b.renderOrder=-10,b.frustumCulled=!1,m.add(b),o.add(m),c(m);let x=!1,S=null,C=null,w=null,T=null,E=null,D=null,te=null,re=null,O=0,ie=0,ae=0,k=0,A=null,j=!1,oe=!1,M=0,ce=null,N=0,P=!0,F=!0,I=0,L=null,R=!0,ue=``,de=0,z=null,fe=0,pe=!1,B=-1,V=null,H=0,U=[0,0],me=null,he=null,ge=null,_e=1/30,W=!1,G=typeof performance<`u`?performance.now():0,K={near:null,aux:null},ve={near:null,aux:null};function ye(e=Math.max(0,bt-(Mt()-B)-.013)){fe||x||(fe=setTimeout(()=>{fe=0,!(x||P)&&(l(),Mt()-B>.15&&ye(.2))},e*1e3))}function be(e=M){N=Math.max(N,e+25),P=!1,F=!0}function xe(){if(!s?.position)return{toward:[0,1],elevation:24*Math.PI/180};let e=T?.bounds?.center??[0,0,0],t=s.position.x-e[0],n=s.position.y-(T?.bounds?.floorY??0),r=s.position.z-e[2],i=Math.cos(-H),a=Math.sin(-H);return{toward:[t*i+r*a,-t*a+r*i],elevation:Math.atan2(n,Math.hypot(t,r)||1e-6)}}function Se(){if(!T)return!1;let e=T.kind===`necklace`?`necklace`:`bracelet`;if(te&&re===e||(te=xe(),re=e),E=ee(T.stones??[],{kind:e,view:te}),!E)return D=null,g.uStoneCount.value=0,!1;let t=Pe(C);return D=ne(T.stones,E,{motifScale:t.motif.scale}),g.uEllipse.value.set(E.ex,E.ey),g.uRim.value.set(D.rimStart,D.rimDirection,t.rim[0],t.rim[1]),g.uStoneCount.value=D.lights.length,D.lights.forEach((e,t)=>{let n=_[t].w;_[t].set(e.q[0],e.q[1],e.r,n);let[r,i,a]=Ot(e.glow),[o,s,c]=Ot(e.color);v[t].set(r,i,a,e.elementIndex),y[t].set(o,s,c,0)}),!0}function Ce(){let e=Pe(C);g.uPlate.value=Ne[e.id],g.uMetal.value.fromArray(Dt(e.metal)),g.uLeaf.value.fromArray(Dt(e.leaf)),g.uEnamel.value.fromArray(Dt(e.enamel)),g.uLightCol.value.fromArray(Dt(e.light));let t=e.look;g.uLook.value.set(t.dark,t.bloom,t.sheen,t.sheenGain),g.uLook2.value.set(1,t.tint,1,t.lineAlpha),g.uLook3.value.set(t.reflect,t.heat,t.wave,1);let n=T?.mood?.shares??{};g.uShares.value.set(n.water??0,n.fire??0,n.earth??0,n.air??0);let r={water:null,fire:null,earth:null,air:null};for(let e of T?.stones??[])e.stone&&e.element&&!r[e.element]&&(r[e.element]=Ot(e.color));[`water`,`fire`,`earth`,`air`].forEach((e,t)=>g.uPig.value[t].fromArray(r[e]??[.8,.8,.8]));for(let[t,n]of Object.entries(e.uniforms({mood:T?.mood,frame:E,strand:D})??{})){let e=g[t];e&&(Array.isArray(e.value)&&Array.isArray(n)?e.value.forEach((e,t)=>{n[t]&&e.fromArray(n[t])}):e.value?.fromArray?e.value.fromArray(n):e.value=n)}}function we(i,a){let o=ve[i];return o&&o.image===a||(o?.dispose(),o=new t(a),o.colorSpace=``,o.flipY=!1,o.generateMipmaps=!0,o.minFilter=e,o.magFilter=n,o.anisotropy=8,o.wrapS=o.wrapT=r,ve[i]=o),o.needsUpdate=!0,k++,o}function Te(e,t,n){let r=K[e];return r&&r.width===t&&r.height===n||(r=K[e]=p(t,n)),r}function q(e,t){let n=T?.bounds?.floorY??0,r=Math.cos(H),i=Math.sin(H),[a,o]=U,c=E.centre[0]+(E.right[0]*e+E.away[0]*t)*E.scale,l=E.centre[1]+(E.right[1]*e+E.away[1]*t)*E.scale,u=new f((c-a)*r+(l-o)*i+a,n,-(c-a)*i+(l-o)*r+o).project(s);return[(u.x+1)/2,(1-u.y)/2,u.z]}function Ee(e){let t=et[e]?.()?.place??{cy:.2,w:.7};if(!s?.isCamera||!V?.cssWidth)return pt(E,e);s.updateMatrixWorld?.();let n=V.cssWidth,r=V.cssHeight||n,i=.07,[,a]=q(0,E.ey+1.9),o=Math.min(t.cy+.05,(i+Math.max(.17,a))/2),c=E.ey+.6,l=E.ey+25;for(let e=0;e<40;e++){let e=(c+l)/2,[,t,n]=q(0,e);n<1&&t>o?c=e:l=e}let u=c,[d]=q(-.5,u),[f]=q(.5,u),[,p]=q(0,u+.5),[,m]=q(0,u-.5),h=Math.abs(f-d)*n,g=Math.abs(m-p)*r,_=Math.max(.12,a-i)*r,v=Math.min(t.w*Math.min(n,r*.78)/2,_/1.55)/Math.max(h,.001),y=Math.min(4,Math.max(1,h/Math.max(g,.001))),b=Math.max(.012,Math.min(.05,Math.round(3.8/(v*h)*400)/400));return{centre:[0,u],S:v,k:y,spacing:b}}function De(){if(O=0,x||!E||!D)return;let e=JSON.stringify([S,C,w,E.centre,E.right,E.scale,E.ex,E.ey]);if(e===A)return;let t=Mt(),n=Pe(C),r=se(E,{texels:St}),i=Te(`near`,r.width,r.height),a=i?.getContext?.(`2d`,{alpha:!1});if(!a){A=e;return}let o=w&&ft(w)?w:null,s=null,c=null;if(o&&et[o]){c=Ee(o);let e=mt(c),t=(e[2]-e[0])/(e[3]-e[1]),n=t>=1?Ct:Math.round(Ct*t),r=t>=1?Math.round(Ct/t):Ct,i=Te(`aux`,n,r),a=i?.getContext?.(`2d`,{alpha:!1});a&&(s={ctx:a,width:n,height:r,rect:e,canvas:i})}let u=gt({plate:n,frame:E,strand:D,mood:T?.mood,sign:o,place:c,near:{ctx:a,layout:r},aux:s});u.band&&(g.uRim.value.z=u.band[0]-.02,g.uRim.value.w=Math.max(n.rim[1],u.band[1]+.02)),g.uNear.value=we(`near`,i),g.uNearWarp.value.set(r.ax,r.bx,r.ay,r.by),g.uNearT.value.set(r.Tx,r.Ty),s?(g.uAux.value=we(`aux`,s.canvas),g.uAuxRect.value.fromArray(s.rect),g.uAuxOn.value=1):g.uAuxOn.value=0,A=e,ie++,ae=Math.round((Mt()-t)*1e3),F=!0,l()}function Oe(e=0){O||x||(O=setTimeout(De,e))}function ke(e){let t=D?.lights.length??0,n=Et(t,e);for(let e=0;e<48;e++)_[e].w=e<t?n.inkAt[e]:-1e4;g.uEntrance.value.set(n.rimAt,n.waveAt,n.fullAt,$.motif),L=e,I=n.end,R=!1,be(e)}function Ae(){for(let e of _)e.w=-1e4;g.uEntrance.value.set(-1e4,-1e4,-1e4,$.motif),I=M}function je(e,t){let n=new Set(e);D?.lights.forEach((e,r)=>{n.has(e.id)&&(_[r].w=t+.12)}),be(t)}function Me(){if(!E||!s?.isCamera||!V?.width)return null;let e=T?.bounds?.floorY??0,t=Math.cos(H),n=Math.sin(H),[r,i]=U,a=a=>{let o=1/0,c=-1/0,l=1/0,u=-1/0;for(let d=0;d<64;d++){let p=d*Math.PI*2/64,m=Math.cos(p),h=Math.sin(p),g=Math.hypot(m/E.ex,h/E.ey)||1,_=E.ex*m+m/E.ex/g*a,v=E.ey*h+h/E.ey/g*a,y=E.centre[0]+(E.right[0]*_+E.away[0]*v)*E.scale,b=E.centre[1]+(E.right[1]*_+E.away[1]*v)*E.scale,x=(y-r)*t+(b-i)*n+r,S=-(y-r)*n+(b-i)*t+i,C=new f(x,e,S).project(s);o=Math.min(o,C.x),c=Math.max(c,C.x),l=Math.min(l,C.y),u=Math.max(u,C.y)}return{left:+((o+1)/2).toFixed(3),right:+((c+1)/2).toFixed(3),top:+((1-u)/2).toFixed(3),bottom:+((1-l)/2).toFixed(3)}},o=a(0),c=a(Pe(C).rim[1]-1);return{loopWidth:+(o.right-o.left).toFixed(3),loop:o,rim:c,rimInside:c.left>=0&&c.right<=1&&c.top>=0&&c.bottom<=1,elevationDeg:+(Math.atan2(s.position.y-e,Math.hypot(s.position.x-(T?.bounds?.center?.[0]??0),s.position.z-(T?.bounds?.center?.[2]??0)))*180/Math.PI).toFixed(1)}}return{setDesign(e){if(x||!e?.mood)return!1;if(e.revisionKey===S)return!0;let t=S===null,n=T,r=e.mood.plate??`atlas`,i=he??(e.mood.signClear?e.mood.sign:null),a=r!==C||i!==w;S=e.revisionKey,T=e,C=r,w=i;let o=new Map((n?.stones??[]).map(e=>[e.id,`${e.componentId}`])),s=(e.stones??[]).filter(e=>e.stone&&o.get(e.id)!==`${e.componentId}`).map(e=>e.id),c=new Map(D?.lights.map((e,t)=>[e.id,_[t].w])??[]);return Se(),D?.lights.forEach((e,t)=>{_[t].w=c.get(e.id)??-1e4}),Ce(),Oe(t?30:0),t||a||s.length>4?R=!0:s.length?je(s,M):be(M),e.stonesKey,F=!0,!0},setConfiguration(e){if(x)return!1;let t=Number(e?.strength);g.uStrength.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1;let n=typeof e?.qaSign==`string`&&ft(e.qaSign)?e.qaSign:null;return n!==he&&(he=n,w=n??(T?.mood?.signClear?T.mood.sign:null),A=null,Oe()),F=!0,!0},frame(e={}){if(x)return!1;let{timeSeconds:t=0,playing:n=!1,reducedMotion:r=!1,interacting:i=!1,selectedIds:a=[],productYaw:o=0,productPivot:c=[0,0]}=e;V=e.viewport??V;let l=Number.isFinite(e.wallSeconds)?e.wallSeconds:Mt(),u=Mt();B=u,de++,z??=typeof performance<`u`?performance.now():0,pe=Number(V?.cssWidth)>0&&Number(V.cssWidth)<700;let d=ge===null?1/30:Math.min(.25,Math.max(0,u-ge));ge=u,_e=_e*.9+d*.1,!W&&_e>.05?W=!0:W&&_e<.036&&(W=!1),g.uLow.value=+!!W;let p=j;j=n,oe=r;let m=ce===null?0:Math.max(0,Math.min(.5,l-ce)),h=ce!==null&&l-ce>3&&!i;ce=l,(!P||R)&&(M+=m),H=Number(o)||0,U=Array.isArray(c)?c:[0,0],(R||n&&!r&&(!p||h))&&(r||!n?(Ae(),R=!1):ke(M));let _=Array.isArray(a)?a:[],v=_.join(`\0`);v!==ue&&(ue=v,_.length===1&&!r&&je(_,M)),i&&be(M);let y=r||!n,S=!y&&M<N;if(g.uTime.value=M,Pe(C).look.ring&&!y){let e=le(M);g.uRing.value.set(e.r,e.a)}else g.uRing.value.set(0,0);if(g.uReveal.value=y?Math.min(1,Math.max(0,(l-(me??=l))/xt)):1,y||(me=null),E){let e=Math.cos(H),t=Math.sin(H),[n,r]=U,i=e,a=-t,o=-n*e+r*t+n,c=t,l=e,u=-n*t-r*e+r,[d,p]=E.right,[m,h]=E.away,_=1/E.scale,[v,y]=E.centre;g.uQx.value.set((d*i+p*c)*_,(d*a+p*l)*_,(d*(o-v)+p*(u-y))*_),g.uQy.value.set((m*i+h*c)*_,(m*a+h*l)*_,(m*(o-v)+h*(u-y))*_);let x=Number.isFinite(T?.bounds?.floorY)?T.bounds.floorY:0;g.uFloorY.value=x;let S=Math.max(.001,T?.bounds?.radius??E.scale*2);if(b.scale.setScalar(S*80),b.position.set(T?.bounds?.center?.[0]??0,x,T?.bounds?.center?.[2]??0),s?.isCamera&&V?.width>0){let e=new f(T?.bounds?.center?.[0]??0,x,T?.bounds?.center?.[2]??0),t=e.clone().project(s),n=e.clone().add(new f(E.right[0],0,E.right[1]).multiplyScalar(E.scale)).project(s),r=Math.hypot((n.x-t.x)*V.width/2,(n.y-t.y)*V.height/2);Number.isFinite(r)&&r>0&&(g.uPxU.value=r/174),g.uRes.value.set(V.width,V.height)}}return P=!S&&M>=I,F=!1,P||ye(),!0},needsFrame(){return!x&&(F||oe&&g.uReveal.value<1)},reset(){R=!0,F=!0},getState(){return{kind:`gravur`,version:5,plate:C?Pe(C).id:null,sign:w,stones:D?.lights.length??0,motifs:D?.motifs.length??0,frames:de,createdAt:G,firstFrameAt:z,painted:ie,paintMs:ae,uploads:k,texture:K.near?[K.near.width,K.near.height]:null,aux:g.uAuxOn.value>.5,clock:L===null?1e4:+(M-L).toFixed(3),entranceSeconds:L===null?0:+(I-L).toFixed(3),settled:P,motionUntil:N,playing:j,reducedMotion:oe,phone:pe,solo:ue?ue.split(`\0`):[],reveal:g.uReveal.value,frame:E?{ex:+E.ex.toFixed(3),ey:+E.ey.toFixed(3),scale:+E.scale.toFixed(4)}:null,pxU:+g.uPxU.value.toFixed(3),drawCalls:1,lowCost:W,frameMs:+(_e*1e3).toFixed(1),framing:Me()}},dispose(){if(!x){x=!0,fe&&clearTimeout(fe),O&&clearTimeout(O),m.parent?.remove(m),b.geometry.dispose(),h.dispose(),g.uNear.value?.dispose?.(),g.uAux.value?.dispose?.(),g.uNoise.value?.dispose?.();for(let e of Object.values(ve))e?.dispose()}}}}export{St as a,Ft as c,Et as d,Tt as i,Nt as l,$ as n,bt as o,wt as r,xt as s,Ct as t,Pt as u};