import{$r as e,Hn as t,L as n,Rn as r,V as i,Wi as a,Yt as o,ar as s,ft as c,io as l,ir as u,jr as d,mt as f,no as p,pa as m,qt as h,ro as g,rr as _,ta as v}from"./three.core-Dp-eO7LC.js";import{a as y,c as b,i as x,o as S,r as C,s as w,t as T}from"./motifs-PB8xVykP.js";import{n as E,r as ee,t as te}from"./figure-COvfH8Ay.js";import{a as D,c as ne,d as re,f as ie,h as ae,l as O,m as oe,n as k,o as se,p as A,r as ce,s as j,u as M}from"./plates-BemfWJLr.js";var N=(e,t,n,r,i,a,o=26)=>{let s=Math.hypot(n-e,r-t),c=Math.atan2(r-t,n-e),l=[];for(let n=1;n<=o;n++){let r=i*x*n/o;l.push([e+s*Math.exp(-a*r)*Math.cos(c-r),t+s*Math.exp(-a*r)*Math.sin(c-r)])}return l},P=(...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]),F=Object.freeze({water:(()=>{let e=y([0,.1],[.26,.1],[.3,.88],[.54,.88],16),t=y([.54,.88],[.77,.88],[.86,.62],[.71,.48],12),n=N(.63,.62,.71,.48,1.25,.2,30);return{lines:[{p:P(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.3},{p:y([.17,.1],[.36,.12],[.38,.64],[.55,.7],12),w:.5,k:.6},{p:y([.33,.1],[.45,.14],[.47,.46],[.6,.5],10),w:.4,k:.6,tone:1}],fill:P(e,t,[[.71,.48],[.74,.3],[.76,.1]]),dots:[[.83,.8,.028],[.89,.7,.022],[.9,.86,.018]]}})(),fire:(()=>{let e=y([0,.1],[.17,.12],[.13,.64],[.33,.93],14),t=y([.33,.93],[.42,1.06],[.6,1.02],[.57,.86],10),n=N(.5,.86,.57,.86,1.1,.3,18),r=y([.57,.85],[.63,.62],[.5,.36],[.76,.1],14);return{lines:[{p:P(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.2},{p:r,w:.9,k:.55},{p:y([.2,.12],[.27,.4],[.27,.64],[.41,.76],12),w:.55,k:.6,tone:1},{p:y([.86,.1],[.93,.22],[.9,.36],[.98,.46],8),w:.45,k:.6,tone:1}],fill:P(e,t,[[.57,.86]],r),dots:[]}})(),earth:(()=>{let e=y([.04,.1],[.08,.86],[.92,.86],[.96,.1],22),t=y([.19,.1],[.23,.6],[.77,.6],[.81,.1],16),n=y([.33,.1],[.37,.37],[.63,.37],[.67,.1],12),r=Array.from({length:17},(e,t)=>{let n=t*x/16;return[.5+.045*Math.cos(n),.2+.03*Math.sin(n)]});return{lines:[{p:e,w:1.15,k:.5,swell:.25},{p:t,w:.65,k:.55},{p:n,w:.45,k:.6,tone:1}],fill:e,fill2:r,dots:[[0,.44,.024],[0,.6,.016],[.5,.97,.016]]}})(),air:(()=>{let e=y([0,.1],[.36,.1],[.4,.6],[.63,.66],16),t=N(.66,.5,.63,.66,1.35,.13,34);return{lines:[{p:P(e,[e[e.length-1],...t]),w:1.05,k:.45,swell:.2},{p:y([.66,.82],[.82,.9],[1,.78],[1.22,.84],14),w:.45,k:.8,tone:1},{p:y([.8,.3],[.92,.34],[1.06,.26],[1.24,.3],12),w:.4,k:.8}],fill:P(e,[[.63,.66],[.8,.5],[.8,.1]]),dots:[]}})()});function le(e,t,{width:n=.085/C,gap:r=.006/C,lift:i=.045/C}={}){let a=new Map(e.motifs.map(e=>[e.id,e.slot])),o=e.parts.filter(e=>e.stone.stone).map(e=>({id:e.stone.id,element:e.stone.element,a:Math.atan2(e.q[1],e.q[0]),rho:Math.hypot(...e.q),rg:e.r}));if(o.length<3)return null;o.sort((e,t)=>e.a-t.a);let s=0,c=-1;for(let e=0;e<o.length;e++){let t=((o[(e+1)%o.length].a-o[e].a)%x+x)%x||x;t>c&&(c=t,s=(e+1)%o.length)}let l=o.slice(s).concat(o.slice(0,s)),u=[];l.forEach((e,t)=>{let n=e.a;if(t)for(;n<=u[t-1];)n+=x;u.push(n)});let d=0;for(let e of l)a.has(e.id)&&(d=a.get(e.id)),e.slot=a.get(e.id)??d;let f=l.length,p=n*t.ornament,m=i*t.backRoom,h=e=>{if(e<0)return w(u[f-1]-x,u[0],e+1);if(e>f-1)return w(u[f-1],u[0]+x,e-(f-1));let t=Math.floor(e);return w(u[t],u[Math.min(f-1,t+1)],e-t)},g=[];for(let e=0;e<=720;e++){let n=e*x/720,i=0,a=0;for(let e of l){let t=Math.abs(((n-e.a+Math.PI)%x+x)%x-Math.PI),r=Math.exp(-((t/.5)**2));i+=r,a+=r*(e.rho+e.rg*.92)}g.push(a/i+r*t.ornament+m*Math.max(0,Math.sin(n))**1.5)}let _=e=>{let t=(e%x+x)%x/x*720,n=Math.floor(t);return w(g[n],g[Math.min(720,n+1)],t-n)},v=(e,t)=>{let n=h(e-.5),r=_(n)+t*p;return[r*Math.cos(n),r*Math.sin(n)]},y=g.map(e=>[e,e+1.4*p]);return{S:l,n:f,W:p,at:v,inner:Math.min(...y.map(e=>e[0])),outer:Math.max(...y.map(e=>e[1]))}}function ue(e,t,n={}){if(!t)return!1;let{S:r,n:i,at:a}=t,o=n.enamel??.45,s=n.guil??.2;for(let t=0;t<i;t++){let i=r[t],c=ie(i.slot),l=F[i.element]??F.water,u=e=>e.map(([e,n])=>a(e+t,n));n.band&&e.fill([a(t,-.02),a(t+1.04,-.02),a(t+1.04,1.06),a(t,1.06)],{code:c,channel:`g`,alpha:n.band});for(let n=0;n<16;n++){let r=t+(n+.5)/16;e.line([0,.25,.5,.75,1.04].map(e=>a(r+.06*Math.sin(e*6.3+n*.5),e)),.42,s,{code:c})}l.fill&&o>0&&e.fill(u(l.fill),{code:c,channel:`g`,alpha:o}),l.fill2&&o>0&&e.fill(u(l.fill2),{code:c,channel:`rg`,alpha:Math.min(1,o*1.6)});for(let t of l.lines){let n=u(t.p),r=n.length;e.ribbon(n,n.map((e,n)=>{let i=n/(r-1);return Math.max(.28,t.w*1.05*Math.sin(Math.PI*S(i*.96+.02))**+t.k*(1+(t.swell||0)*Math.sin(Math.PI*i)))}),.95,{code:c})}i.element!==`air`&&e.star(a(t+.97,.9),2.6,.85,4,.3,{code:c});for(let[n,r,i]of l.dots??[])e.dot(a(t+n,r),i*34,.85,{code:c})}let c=(t,n,r)=>{let o=[];for(let e=0;e<=i*8;e++)o.push(a(e/8,t));e.line(o,n,r,{code:O.FIELD})};c(.1,.55,.7),c(-.05,.5,.55),c(-.13,.45,.4),c(1.06,.8,.95),c(1.16,.8,.8),c(1.4,.5,.55);for(let t=0;t<i*3;t++)e.dot(a((t+.5)/3,1.28),1.05*(t%2?.8:1.15),.85);return!0}Object.freeze([`frieze`,`motifs`,`band`]);function de(e,t=10){let n=[],r=e.length;for(let i=0;i<r;i++){let a=e[(i-1+r)%r],o=e[i],s=e[(i+1)%r],c=e[(i+2)%r];for(let e=0;e<t;e++){let r=e/t,i=r*r,l=i*r;n.push([0,1].map(e=>.5*(2*o[e]+(-a[e]+s[e])*r+(2*a[e]-5*o[e]+4*s[e]-c[e])*i+(-a[e]+3*o[e]-3*s[e]+c[e])*l)))}}return n}function fe(e,{strand:t,plate:n,motifs:r,frame:i,mode:a=n.ornament??`frieze`}){if(a===`frieze`&&i){let r=le(t,i);if(r&&ue(e,r,n.frieze??{}))return{form:`frieze`,band:[r.inner,r.outer]}}if(a!==`band`||t.motifs.length<3){for(let e of t.motifs)r.draw(A(e),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:ie(e.slot)});return{form:`motifs`}}let o=t.motifs,s=.1,c=de(o.map(e=>[e.base[0]+e.out[0]*s*.5,e.base[1]+e.out[1]*s*.5]),12),l=e=>{let t=c[(e-1+c.length)%c.length],n=c[(e+1)%c.length],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1;return[(n[1]-t[1])/r,-(n[0]-t[0])/r]},u=l(0)[0]*o[0].out[0]+l(0)[1]*o[0].out[1]<0?-1:1,d=(e,t)=>{let[n,r]=l(e);return[c[e][0]+n*t*u,c[e][1]+r*t*u]};return o.forEach((t,i)=>{let a=i*12-6,o=Array.from({length:13},(e,t)=>(a+t+c.length)%c.length),f=ie(t.slot);for(let t of[-.1/2,s/2])e.line(o.map(e=>d(e,t)),.7,n.motif.alpha,{code:f});for(let e of[3,9]){let a=o[Math.round(e)],[d,p]=l(a),m=[d*u,p*u],h=[c[a][0]-m[0]*s*.35,c[a][1]-m[1]*s*.35];r.draw(b((T[t.element]??T.water)(i),h,m,t.scale*.45),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:f,widthScale:.7})}}),{form:`band`}}var pe=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.2),I=(...e)=>e.reduce((e,t,n)=>e.concat(n?t.slice(1):t),[]),L=(e,t,n=10)=>Array.from({length:n+1},(r,i)=>[e[0]+(t[0]-e[0])*i/n,e[1]+(t[1]-e[1])*i/n]),me=(e,t,n,r=0,i=40,a=1)=>Array.from({length:i+1},(o,s)=>{let c=r+a*x*s/i;return[e+n*Math.cos(c),t+n*Math.sin(c)]}),R=(e,t=.012,n=.045)=>({p:e,w:pe(e.length-1,t,n)}),he=e=>e.map(([e,t])=>[-e,t]),z=e=>e.map(([e,t])=>[-e,-t]);function B(){let e=I(y([-.215,-.13],[-.27,.26],[.02,.52],[.19,.4],30),y([.19,.4],[.36,.27],[.3,.02],[.15,-.12],26),y([.15,-.12],[.03,-.24],[.08,-.46],[.3,-.42],26),y([.3,-.42],[.44,-.4],[.5,-.3],[.43,-.22],16)),t=e.length;return{p:e,w:e.map((e,n)=>{let r=n/(t-1);return .012+.05*Math.sin(Math.PI*S((r-.04)/.78))**1.3+.012*Math.exp(-(((r-.97)/.05)**2))})}}var V=()=>I(L([-.4,-.42],[-.4,.28]),y([-.4,.28],[-.4,.46],[-.16,.46],[-.16,.28],14),L([-.16,.28],[-.16,-.42])),H=Object.freeze({aries:()=>[R(I(L([0,-.48],[0,-.05],12),y([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),y([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))),R(he(I(y([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),y([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))))],taurus:()=>[R(me(0,-.17,.23,Math.PI/2,48),.02,.03),R(y([-.44,.46],[-.3,.04],[.3,.04],[.44,.46],30))],gemini:()=>[R(y([-.36,.44],[-.12,.34],[.12,.34],[.36,.44],20),.014,.03),R(y([-.36,-.44],[-.12,-.34],[.12,-.34],[.36,-.44],20),.014,.03),R(y([-.15,.37],[-.19,.1],[-.19,-.1],[-.15,-.37],20)),R(y([.15,.37],[.19,.1],[.19,-.1],[.15,-.37],20))],cancer:()=>{let e=I(me(-.18,.12,.1,-Math.PI/2,30,-1),y([-.18,.22],[0,.36],[.28,.32],[.4,.14],20));return[R(e,.012,.04),R(z(e),.012,.04)]},leo:()=>[B()],virgo:()=>[R(V()),R(I(y([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),L([.08,.28],[.08,-.2]),y([.08,-.2],[.08,-.5],[.42,-.48],[.36,-.16],16),y([.36,-.16],[.3,.08],[.04,-.06],[.2,-.46],16)))],libra:()=>[R(L([-.42,-.32],[.42,-.32],20),.016,.02),R(I(L([-.42,-.02],[-.17,-.02],8),y([-.17,-.02],[-.32,.46],[.32,.46],[.17,-.02],30),L([.17,-.02],[.42,-.02],8)))],scorpius:()=>[R(V()),R(I(y([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),L([.08,.28],[.08,-.3]),y([.08,-.3],[.08,-.48],[.3,-.48],[.42,-.3],16))),R(I(L([.27,-.33],[.42,-.3],6),L([.42,-.3],[.4,-.15],6)),.012,.02)],sagittarius:()=>[R(L([-.4,-.4],[.4,.4],30)),R(I(L([.1,.4],[.4,.4],8),L([.4,.4],[.4,.1],8)),.014,.025),R(L([-.25,.05],[.05,-.25],10),.012,.025)],capricorn:()=>[R(I(y([-.44,.32],[-.36,.3],[-.28,-.2],[-.2,-.4],16),y([-.2,-.4],[-.12,-.1],[-.04,.34],[.06,.34],16),y([.06,.34],[.16,.34],[.12,-.1],[.18,-.26],16),y([.18,-.26],[.24,-.46],[.46,-.38],[.4,-.18],14),y([.4,-.18],[.34,0],[.14,-.06],[.14,-.24],14),y([.14,-.24],[.14,-.44],[0,-.52],[-.1,-.46],12)))],aquarius:()=>[.14,-.2].map(e=>R(I(...[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]].slice(0,4).map((t,n,r)=>{let i=[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]];return y([i[n][0],i[n][1]+e],[i[n][0]+.07,i[n][1]+e+(n%2?-.03:.05)],[i[n+1][0]-.07,i[n+1][1]+e+(n%2?.05:-.03)],[i[n+1][0],i[n+1][1]+e],10)})),.012,.035)),pisces:()=>[R(y([-.46,.44],[-.18,.26],[-.18,-.26],[-.46,-.44],34),.012,.05),R(y([.46,.44],[.18,.26],[.18,-.26],[.46,-.44],34),.012,.05),{p:Array.from({length:13},(e,t)=>[-.25+.5*t/12,.015*Math.sin(Math.PI*t/12)]),w:pe(12,.016,.014)}]}),U=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.1),W=Object.freeze({scorpius:()=>{let e=I(y([-.62,.28],[-.56,.36],[-.48,.36],[-.46,.26],8),y([-.46,.26],[-.46,.1],[-.46,-.2],[-.46,-.42],12)),t=I(y([-.46,.16],[-.38,.42],[-.18,.42],[-.15,.16],12),y([-.15,.16],[-.15,0],[-.15,-.2],[-.15,-.42],10)),n=I(y([-.15,.16],[-.07,.42],[.13,.42],[.16,.16],12),y([.16,.16],[.16,-.1],[.14,-.36],[.32,-.42],12),y([.32,-.42],[.44,-.45],[.52,-.36],[.56,-.22],8));return[{p:e,w:U(e.length-1,.03,.07)},{p:t,w:U(t.length-1,.03,.08)},{p:n,w:U(n.length-1,.03,.08)},{p:[[.56,-.2],[.43,-.24]],w:[.06,.02]},{p:[[.56,-.2],[.6,-.34]],w:[.06,.02]}]},leo:()=>{let e=B();return[{p:e.p.map(([e,t])=>[e*1.5-.18,t*1.5-.07]),w:e.w.map(e=>e*1.5)}]},pisces:()=>H.pisces().map(e=>({p:e.p.map(([e,t])=>[e*1.05,t*1.05]),w:e.w.map(e=>e*1.05)}))}),ge=e=>W[e]??H[e]??null;Object.freeze(Object.keys(te));function _e(e,t){let n=e.ey+3.4,r=E(t,.03)?.GEO.box;return{centre:[0,n],S:1.74,k:2.1,spacing:.022,...r?{box:r}:{}}}function ve(e){let{centre:[t,n],S:r,k:i}=e,[a,o,s,c]=e.box??[-1.35,-.85,1.35,.85],l=.06;return[t+(a-l)*r,n+(o-l)*r*i,t+(s+l)*r,n+(c+l)*r*i]}var ye=Object.freeze({phone:{top:.125,gap:.015,width:.94},wide:{top:.1,gap:.025,width:.62}});function be({sign:e,frame:t,screenOf:n,W:r,H:i}){let a=E(e,.03);if(!a)return null;let o=a.GEO.box,s=r/i<.95?ye.phone:ye.wide,c=o[2]-o[0],l=o[3]-o[1],u=n(0,t.ey+.32)[1]-s.gap,d=s.top,f=e=>{let r=t.ey+.3,i=t.ey+30;for(let t=0;t<44;t++){let t=(r+i)/2,[,a,o]=n(0,t);o<1&&a>e?r=t:i=t}return r},p=Math.min((u-d)*i/l,s.width*r/c),m=null,h=0;for(let e=0;e<24;e++){let e=f((((d+u)/2-h)*i+(o[1]+o[3])/2*p)/i),[t]=n(-.5,e),[a]=n(.5,e),[,c]=n(0,e+.5),[,l]=n(0,e-.5),g=Math.abs(a-t)*r,_=Math.abs(l-c)*i,v=p/Math.max(g,.001),y=Math.min(4,Math.max(1,g/Math.max(_,.001)));m={centre:[-(o[0]+o[2])/2*v,e],S:v,k:y,box:o,spacing:Math.max(.012,Math.min(.05,Math.round(3.8/p*400)/400))};let b=n(0,e+o[3]*v*y)[1],x=n(0,e+o[1]*v*y)[1],[S]=n(m.centre[0]+o[0]*v,e),[C]=n(m.centre[0]+o[2]*v,e),w=Math.min((u-d)/Math.max(x-b,1e-4),s.width*r/Math.max((C-S)*r,.001));if(Math.abs(w-1)<.01&&b>=d-.005&&x<=u+.005)break;h+=(b+x)/2-(d+u)/2,p*=Math.min(w*.998,1.5)}return m}function xe(e,{sign:t,frame:n,place:r=_e(n,t)}){let i=ge(t);if(!i)return;let a=E(t,r.spacing);if(a){let{F:t,GEO:n}=a,{centre:[i,o],S:s,k:c}=r,l=([e,t])=>[i+e*s,o+t*s*c],[u,d,f,p]=n.box,m=(u+f)/2,h=(d+p)/2,g=(f-u)/2,_=(p-d)/2;for(let t=Math.ceil((u-m)/.25)*.25;t<=g;t+=.25){let n=[];for(let e=-_;e<=_+1e-6;e+=.05)n.push([m+t+.04*e*e,h+e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(g*.92))**4)))}for(let t=Math.ceil((d-h)/.25)*.25;t<=_;t+=.25){let n=[];for(let e=-g;e<=g+1e-6;e+=.05)n.push([m+e,h+t+.03*e*e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(_*.82))**4)))}let v=(t,n)=>{let r=t.pts.map(l),i=r.length;i<2||(t.closed?e.line(r,t.w,n,{close:!0}):e.ribbon(r,r.map((e,n)=>Math.max(.25,t.w*Math.sin(Math.PI*S(n/(i-1)*.96+.02))**+t.k)),n))};for(let t of n.parts){let r=t.P,i=r.alpha??1;for(let n of t.runs)e.ribbon(n.pts.map(l),n.wd.map(e=>Math.max(.3,e*1.25)),.85*i);for(let[n,r,a]of t.dots)e.dot(l([n,r]),a*.62,.85*i);for(let e of t.extra)v(e,.95*i);for(let n of t.olRuns)e.ribbon(n.pts.map(l),n.w.map(e=>e*1.25),i);for(let e of n.strokes)e.after===r.id&&v(e,e.a)}for(let e of n.strokes)e.after||v(e,e.a);let y=t.stars.map(([e,t])=>l([e,t]));for(let[n,r]of t.edges??[])e.line([y[n],y[r]],.6,.42);t.stars.forEach(([,,t],n)=>{let r=S(3.8-t,.8,3)*2.6;e.star(y[n],r*1.35,1,t<2?8:t<3?6:4,.2),t<1.8&&e.line(Array.from({length:25},(e,t)=>{let i=t*x/24,a=r*2.1/(C*600);return[y[n][0]+a*Math.cos(i),y[n][1]+a*Math.sin(i)]}),.55,.55)})}let o=.085/C*n.ornament,s=[0,.03/C*n.ornament],c=(e,t=120)=>Array.from({length:t+1},(n,r)=>{let i=r*x/t;return[s[0]+e*Math.cos(i),s[1]+e*Math.sin(i)]});e.line(c(o),1.1,.85),e.line(c(o*1.12),.5,.6),e.line(c(o*.88),.45,.45);for(let t=0;t<36;t++){let n=t*x/36,r=o*.88,i=o*(t%3==0?.8:.84);e.line([[s[0]+r*Math.cos(n),s[1]+r*Math.sin(n)],[s[0]+i*Math.cos(n),s[1]+i*Math.sin(n)]],.45,.5)}let l=o*.62,u=e=>e*l*C*600*1.1;e.glyph(i().map(e=>({p:e.p.map(([e,t])=>[s[0]+e*l,s[1]+t*l]),w:e.w})),e=>e.w.map(u))}var Se=Object.freeze({period:15,window:12,samples:[-16,-8,0,8,16],gain:.5}),G=[[-18.3,-3.2],[-16.8,-.2],[-15,1.6],[-12.9,2.6],[-8.4,3.8],[-3.8,4.2],[.6,5.6],[4,10.4],[8,11.4],[12,10.6],[15.2,8]].map(([e,t])=>[(e+2)/19,(t+1)/19]),Ce=Object.freeze({scorpius:{glow:[`body`,`tail`,`telson`]},leo:{glowLine:G},pisces:{glow:[`cordW`,`cordN`]}});function we(e,t=.022){let n=E(e,t);if(!n)return null;let{GEO:r}=n,i=n.F.glowLine||n.F.glow?n.F:Ce[e]??{};if(i.glowLine)return ee(i.glowLine,!1,12);let a=(i.glow??[]).map(e=>r.parts.find(t=>t.P.id===e)?.geo?.sp).filter(Boolean);return a.length?[].concat(...a):r.parts.map(e=>e.geo?.sp).filter(e=>e?.length>1).sort((e,t)=>t.length-e.length)[0]??null}function Te(e,t,n=[]){let{period:r,window:i,samples:a,gain:o}=Se;if(!e?.length){for(let e=0;e<a.length;e++)n[e]=[0,0,0];return n}let s=e.length,c=t/r%1*(s+40)-20;return a.forEach((t,r)=>{let a=c+t,l=Math.max(0,Math.min(s-1,Math.round(a))),u=+(a>=0&&a<=s-1);n[r]=[e[l][0],e[l][1],u*o*Math.exp(-((t/i)**2))]}),n}function Ee(e){let t=E(e,.025);if(!t)return[];let{F:n}=t;return n.stars.map(([e,t,r],i)=>[e,t,Math.min(3,Math.max(.8,3.8-r))*2.6*4.5/240*.55,+(i===(n.alpha??0))])}function De(e,{sign:t,place:n}){let r=E(t,n.spacing);if(!r)return!1;let{centre:[i,a],S:o,k:s}=n,c=([e,t])=>[i+e*o,a+t*o*s];for(let t of r.GEO.parts)(t.P.alpha??1)<.7||e.fill(t.geo.outline.map(c),{channel:`g`,alpha:1,only:`aux`});return!0}function Oe({plate:e,frame:t,strand:n,mood:r,sign:i=null,place:a=void 0,near:o,aux:s=null,ornament:c=void 0}){let l=M({near:o,aux:s}),u=Object.freeze({draw(e,{alpha:t=1,enamel:n=.3,widthScale:r=1,code:i=0}={}){for(let a of e)a.fill&&n>0&&l.fill(a.q,{code:i,channel:`g`,alpha:n}),a.close?l.line(a.q,a.w*1.25*r,t,{code:i,close:!0}):l.taper(a.q,a.w*1.9*r,t,.5,{code:i})}});e.paint(l,{frame:t,strand:n,mood:r,motifs:u});let d=fe(l,{strand:n,plate:e,motifs:u,frame:t,mode:c});return i&&xe(l,{sign:i,frame:t,...a?{place:a}:{}}),i&&s&&a&&De(l,{sign:i,place:a}),{strokes:l.strokes,ornament:d.form,band:d.band??null}}var K=`
  #define MAXS 48
  #define REFR0 .29
  uniform float uTime, uPlate, uStoneCount, uPxU, uStrength, uReveal, uSolo, uLow;
  uniform float uPlateUnit;     // A4: the world size of one plate unit on the table (the piece's real scale)
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
`;function q(e){let t=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) c = ground${e.glslId}(p);`).join(`
      `),n=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) f = field${e.glslId}(p);`).join(`
      `);return`
  varying vec3 vWorld;
  uniform float uFloorY;
  ${K}
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
`}var ke=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Ae=1.35,je=.02;function Me(e,t){let n=0,r=.5;for(let i=0;i<3;i++){n+=r*j(e,t);let i=1.6*e-1.2*t+3.1,a=1.2*e+1.6*t+1.7;e=i,t=a,r*=.5}return n/.875}function Ne(e,t=()=>performance.now()){if(!e?.length)return null;let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t of e){let e=Math.max(Ae,8*Math.max(t.r,.02));n=Math.min(n,t.x-e),i=Math.max(i,t.x+e),r=Math.min(r,t.y-e),a=Math.max(a,t.y+e)}let o=Math.max(8,Math.min(256,Math.ceil((i-n)/je))),s=Math.max(8,Math.min(256,Math.ceil((a-r)/je))),c=new Float32Array(o*s*4),l=new Float32Array(o*s*4),u=new Float32Array(o*s*4),d=e.map((e,t)=>{let n=Math.max(e.r,.02),r=t*2.399;return{...e,r:n,glowK:1/(n*n*6.3),ck:Math.cos(r),sk:Math.sin(r),reach2:Math.max(Ae,8*n)**2,refl:[0,1,2].map(t=>e.color[t]+(e.glow[t]-e.color[t])*.3)}}),f=0,p={width:o,height:s,result:null,step(e=6){let m=t()+e;for(;f<s;f++){if(f&&t()>m)return!1;let e=f,p=r+(e+.5)/s*(a-r);for(let t=0;t<o;t++){let r=n+(t+.5)/o*(i-n),a=null,s=null,f=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;for(let e of d){let t=r-e.x,n=p-e.y,i=t*t+n*n;if(i>e.reach2)continue;let o=Math.exp(-i*e.glowK);f+=e.glow[0]*o,m+=e.glow[1]*o,h+=e.glow[2]*o,a===null&&(a=Me(r*1.74,p*1.74),s=Me(r*1.74+7.3,p*1.74+7.3));let c=(e.ck*a+e.sk*s-.5*(e.ck+e.sk))*.45,l=Math.sqrt(i)+c*.4,u=Math.exp(-l*l*7.65);g+=e.glow[0]*u,_+=e.glow[1]*u,v+=e.glow[2]*u,y+=u;let d=t/(e.r*.95),C=(n+e.r*1.55)/(e.r*1.25),w=Math.exp(-(d*d+C*C));b+=e.refl[0]*w,x+=e.refl[1]*w,S+=e.refl[2]*w}let C=(e*o+t)*4,w=1/Math.max(y,.001);c[C]=f,c[C+1]=m,c[C+2]=h,c[C+3]=y,l[C]=g*w,l[C+1]=_*w,l[C+2]=v*w,l[C+3]=1,u[C]=b,u[C+1]=x,u[C+2]=S,u[C+3]=1}}return p.result={rect:[n,r,i,a],width:o,height:s,a:c,b:l,c:u},!0}};return p}var Pe=.6,Fe=1/30,Ie=2.5,J=Object.freeze({lead:.25,span:1.9,perStone:.12,rimDelay:.2,rim:.6,motif:1.2}),Le=.6,Re=2048,ze=1024,Be=.05,Y=.036;function Ve(e,t=0){let n=Math.min(J.span,Math.max(0,e-1)*J.perStone),r=Array.from({length:e},(r,i)=>t+J.lead+(e>1?n*i/(e-1):0)),i=t+J.lead+n+J.rimDelay,a=i+J.rim;return{inkAt:r,rimAt:i,waveAt:a,fullAt:i-.3,end:a+2.4}}var He=e=>e.map(e=>e/255),Ue=e=>[1,3,5].map(t=>parseInt(String(e).slice(t,t+2),16)/255||0);function We(e,t){if(typeof document<`u`&&document.createElement){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}return typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):null}function X(){let e=new c(new Uint8Array([0,0,0,255]),1,1);return e.colorSpace=``,e.needsUpdate=!0,e}function Ge(){let e=new c(se(),256,256);return e.colorSpace=``,e.wrapS=e.wrapT=a,e.magFilter=r,e.minFilter=r,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Z=()=>(typeof performance<`u`?performance.now():Date.now())/1e3,Ke=null,qe=e=>e?.cssWidth?`${Math.round(e.cssWidth)}x${Math.round(e.cssHeight)}`:``;function Je(){try{let e=globalThis.document?.querySelector?.(`#scene-stage canvas`);if(e?.clientWidth>0)return{cssWidth:e.clientWidth,cssHeight:e.clientHeight,width:e.width,height:e.height}}catch{}return null}function Ye(){let e=Array.from({length:48},()=>new l(0,0,.1,-1e4)),t=Array.from({length:48},()=>new l),n=Array.from({length:48},()=>new l),r={uTime:{value:0},uPlateUnit:{value:2.684},uPlate:{value:0},uStoneCount:{value:0},uPxU:{value:1},uStrength:{value:1},uReveal:{value:1},uSolo:{value:-1},uQx:{value:new g(1,0,0)},uQy:{value:new g(0,-1,0)},uMetal:{value:new g(.9,.8,.6)},uLeaf:{value:new g(.9,.8,.6)},uEnamel:{value:new g(.8,.3,.2)},uLightCol:{value:new g(1,.92,.75)},uEllipse:{value:new p(1,1)},uRing:{value:new p(0,0)},uLow:{value:0},uRes:{value:new p(1,1)},uFloorY:{value:0},uStoneA:{value:e},uStoneB:{value:t},uStoneC:{value:n},uEntrance:{value:new l(-1e4,-1e4,-1e4,J.motif)},uRim:{value:new l(-Math.PI/2,1,1.35,1.55)},uLook:{value:new l},uLook2:{value:new l(1,.45,1,.95)},uLook3:{value:new l},uNear:{value:X()},uAux:{value:X()},uNearWarp:{value:new l(1.6,1,1.6,1)},uNearT:{value:new p(2.6,2.6)},uAuxRect:{value:new l(-1,-1,1,1)},uAuxOn:{value:0},uH0:{value:new _},uFig:{value:new l(0,4,1,2)},uFigL:{value:Array.from({length:Se.samples.length},()=>new g)},uFigStar:{value:Array.from({length:24},()=>new l)},uFigStars:{value:0},uFigTint:{value:new g(1,.8,.6)},uLoops:{value:1},uShares:{value:new l(.25,.25,.25,.25)},uPig:{value:[new g(.8,.8,.8),new g(.8,.8,.8),new g(.8,.8,.8),new g(.8,.8,.8)]},uBaked:{value:0},uBakeRect:{value:new l(0,0,1,1)},uBakeA:{value:X()},uBakeB:{value:X()},uBakeC:{value:X()},uEarthBand:{value:[0,1,2,3].map(()=>new l(2,2,0,0))},uClouds:{value:Array.from({length:40},()=>new l)},uCloudB:{value:Array.from({length:40},()=>new l)},uCloudCount:{value:0},uNoise:{value:Ge()}},i=e=>Array.isArray(e)?new[null,null,p,g,l][e.length]().fromArray(e):e;for(let e of k)for(let[t,n]of Object.entries(e.defaults??{}))r[t]??={value:i(n)};return new v({name:`gravur-plate`,vertexShader:ke,fragmentShader:q(k),uniforms:r,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function Xe(){let e=new s(new d(.001,.001),Ye());return e.name=`gravur-plate-warm`,e.frustumCulled=!1,e}function Ze(a={}){let{scene:d,camera:p,registerNativeGroup:_}=a,v=typeof a.requestFrame==`function`?a.requestFrame:()=>{},y=typeof a.createCanvas==`function`?a.createCanvas:We,b=a.offscreen===!0,x=Number.isInteger(a.nearTexels)&&a.nearTexels>=256?Math.min(Re,a.nearTexels):Re,S=b?Math.min(ze,x):ze;if(!d?.isScene||typeof _!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let C=new h;C.name=`atmosphere-gravur`;let w=Ye(),T=w.uniforms,E=T.uStoneA.value,ee=T.uStoneB.value,ie=T.uStoneC.value,O=new s(new m(1,48,24),w);O.name=`gravur-plate`,O.renderOrder=-10,O.frustumCulled=!1,C.add(O),d.add(C),_(C);let k=!1,se=null,A=null,j=null,M=null,N=null,P=null,F=null,le=null,ue=0,de=0,fe=0,pe=0,I=null,L=!1,me=!1,R=0,he=null,z=0,B=!0,V=!0,H=0,U=null,W=!0,ye=``,xe=0,Se=null,G=0,Ce=!1,De=-1,K=null,q=0,ke=[0,0],Ae=null,je=null,Me=null,Ie=1/30,Be=!1,Y=1,X=!1,Ge=null,Xe=0,Ze=``,Qe=null,$e=0,et=!1,tt=-1e4,nt=[],rt=typeof performance<`u`?performance.now():0,it={near:null,aux:null},at={near:null,aux:null},ot=null,st=0,ct=0,lt=0,Q={a:null,b:null,c:null},ut={a:T.uBakeA.value,b:T.uBakeB.value,c:T.uBakeC.value};function dt(){let e=P?.lights.length??0,t=[];for(let n=0;n<e;n++){let e=E[n],r=ee[n],i=ie[n];t.push({x:e.x,y:e.y,r:e.z,glow:[r.x,r.y,r.z],color:[i.x,i.y,i.z]})}let n=JSON.stringify(t.map(e=>[e.x,e.y,e.r,e.glow,e.color]));if(n===ot)return;ot=n,T.uBaked.value=0,st=0,T.uBakeA.value=ut.a,T.uBakeB.value=ut.b,T.uBakeC.value=ut.c;for(let e of[`a`,`b`,`c`])Q[e]?.dispose(),Q[e]=null;lt&&clearTimeout(lt);let r=Ne(t);if(!r)return;let i=()=>{if(lt=0,k||ot!==n)return;let e=Z(),t=r.step(6);st+=(Z()-e)*1e3,t?ft(r.result):lt=setTimeout(i,16)};lt=setTimeout(i,0)}function ft(t){for(let n of[`a`,`b`,`c`]){let a=t[n],s=new Uint16Array(a.length);for(let e=0;e<a.length;e++)s[e]=f.toHalfFloat(a[e]);let l=new c(s,t.width,t.height,e,o);l.colorSpace=``,l.magFilter=l.minFilter=r,l.generateMipmaps=!1,l.wrapS=l.wrapT=i,l.needsUpdate=!0,Q[n]=l}T.uBakeA.value=Q.a,T.uBakeB.value=Q.b,T.uBakeC.value=Q.c,T.uBakeRect.value.fromArray(t.rect),ct++,st=Math.round(st),V=!0}function pt(){if(!Q.a||T.uEntrance.value.z>R-2.3)return!1;let e=P?.lights.length??0;for(let t=0;t<e;t++)if(R-E[t].w<8)return!1;return!0}function mt(e=Math.max(0,Fe-(Z()-De)-.013)){G||k||(G=setTimeout(()=>{G=0,!(k||B)&&(v(),Z()-De>.15&&mt(.2))},e*1e3))}let ht=(e,t)=>e?.chosen&&!je?D(e.plate).id:t&&te[t]?`sign`:e?.elementPlate??(e?.plate===`sign`?null:e?.plate)??`atlas`;function gt(e=R){z=Math.max(z,e+25),B=!1,V=!0}function _t(){if(!p?.position)return{toward:[0,1],elevation:24*Math.PI/180};let e=M?.bounds?.center??[0,0,0],t=p.position.x-e[0],n=p.position.y-(M?.bounds?.floorY??0),r=p.position.z-e[2],i=Math.cos(-q),a=Math.sin(-q);return{toward:[t*i+r*a,-t*a+r*i],elevation:Math.atan2(n,Math.hypot(t,r)||1e-6)}}function vt(){if(!M)return!1;let e=M.kind===`necklace`?`necklace`:`bracelet`;if(F&&le===e||(F=_t(),le=e),N=oe(M.stones??[],{kind:e,view:F}),!N)return P=null,T.uStoneCount.value=0,!1;let t=D(A);return P=ae(M.stones,N,{motifScale:t.motif.scale}),T.uEllipse.value.set(N.ex,N.ey),T.uPlateUnit.value=N.scale,T.uRim.value.set(P.rimStart,P.rimDirection,t.rim[0],t.rim[1]),T.uStoneCount.value=P.lights.length,P.lights.forEach((e,t)=>{let n=E[t].w;E[t].set(e.q[0],e.q[1],e.r,n);let[r,i,a]=Ue(e.glow),[o,s,c]=Ue(e.color);ee[t].set(r,i,a,e.elementIndex),ie[t].set(o,s,c,0)}),!0}function yt(){let e=D(A);T.uPlate.value=ce[e.id],T.uMetal.value.fromArray(He(e.metal)),T.uLeaf.value.fromArray(He(e.leaf)),T.uEnamel.value.fromArray(He(e.enamel)),T.uLightCol.value.fromArray(He(e.light));let t=e.look;T.uLook.value.set(t.dark,t.bloom,t.sheen,t.sheenGain),T.uLook2.value.set(1,t.tint,1,t.lineAlpha),T.uLook3.value.set(t.reflect,t.heat,t.wave,1);let n=M?.mood?.shares??{};T.uShares.value.set(n.water??0,n.fire??0,n.earth??0,n.air??0);let r={water:null,fire:null,earth:null,air:null};for(let e of M?.stones??[])e.stone&&e.element&&!r[e.element]&&(r[e.element]=Ue(e.color));[`water`,`fire`,`earth`,`air`].forEach((e,t)=>T.uPig.value[t].fromArray(r[e]??[.8,.8,.8]));for(let[t,n]of Object.entries(e.uniforms({mood:M?.mood,frame:N,strand:P,sign:j})??{})){let e=T[t];e&&(Array.isArray(e.value)&&Array.isArray(n)?e.value.forEach((e,t)=>{n[t]&&e.fromArray(n[t])}):e.value?.fromArray?e.value.fromArray(n):e.value=n)}}function bt(e,a){let o=at[e];return o&&o.image===a||(o?.dispose(),o=new n(a),o.colorSpace=``,o.flipY=!1,o.generateMipmaps=!0,o.minFilter=t,o.magFilter=r,o.anisotropy=8,o.wrapS=o.wrapT=i,at[e]=o),o.needsUpdate=!0,pe++,o}function xt(e,t,n){let r=it[e];return r&&r.width===t&&r.height===n||(r=it[e]=y(t,n)),r}function $(e,t){let n=M?.bounds?.floorY??0,r=Math.cos(q),i=Math.sin(q),[a,o]=ke,s=N.centre[0]+(N.right[0]*e+N.away[0]*t)*N.scale,c=N.centre[1]+(N.right[1]*e+N.away[1]*t)*N.scale,l=new g((s-a)*r+(c-o)*i+a,n,-(s-a)*i+(c-o)*r+o).project(p);return[(l.x+1)/2,(1-l.y)/2,l.z]}function St(e){let t=te[e]?.()?.place??{cy:.2,w:.7};if(!p?.isCamera||!K?.cssWidth)return _e(N,e);p.updateMatrixWorld?.();let n=K.cssWidth,r=K.cssHeight||n,i=.07;if(be)return be({sign:e,frame:N,screenOf:$,W:n,H:r});let[,a]=$(0,N.ey+1.9),o=Math.min(t.cy+.05,(i+Math.max(.17,a))/2),s=N.ey+.6,c=N.ey+25;for(let e=0;e<40;e++){let e=(s+c)/2,[,t,n]=$(0,e);n<1&&t>o?s=e:c=e}let l=s,[u]=$(-.5,l),[d]=$(.5,l),[,f]=$(0,l+.5),[,m]=$(0,l-.5),h=Math.abs(d-u)*n,g=Math.abs(m-f)*r,_=Math.max(.12,a-i)*r,v=Math.min(t.w*Math.min(n,r*.78)/2,_/1.55)/Math.max(h,.001),y=Math.min(4,Math.max(1,h/Math.max(g,.001))),b=Math.max(.012,Math.min(.05,Math.round(3.8/(v*h)*400)/400));return{centre:[0,l],S:v,k:y,spacing:b}}function Ct(){if(ue=0,k||!N||!P)return;let e=JSON.stringify([se,A,j,N.centre,N.right,N.scale,N.ex,N.ey]);if(e===I)return;let t=Z(),n=D(A),r=re(N,{texels:x}),i=xt(`near`,r.width,r.height),a=i?.getContext?.(`2d`,{alpha:!1});if(!a){I=e;return}let o=j&&ge(j)?j:null,s=null,c=null;if(o&&te[o]){c=St(o);let e=ve(c),t=(e[2]-e[0])/(e[3]-e[1]),n=t>=1?S:Math.round(S*t),r=t>=1?Math.round(S/t):S,i=xt(`aux`,n,r),a=i?.getContext?.(`2d`,{alpha:!1});a&&(s={ctx:a,width:n,height:r,rect:e,canvas:i})}dt();let l=Oe({plate:n,frame:N,strand:P,mood:M?.mood,sign:o,place:c,near:{ctx:a,layout:r},aux:s});if(l.band&&(T.uRim.value.z=l.band[0]-.02,T.uRim.value.w=Math.max(n.rim[1],l.band[1]+.02)),T.uNear.value=bt(`near`,i),T.uNearWarp.value.set(r.ax,r.bx,r.ay,r.by),T.uNearT.value.set(r.Tx,r.Ty),s){T.uAux.value=bt(`aux`,s.canvas),T.uAuxRect.value.fromArray(s.rect),T.uAuxOn.value=1,T.uFig.value.set(c.centre[0],c.centre[1],c.S,c.S*c.k),Ge=we(o,c.spacing);let e=Ee(o);T.uFigStars.value=Math.min(24,e.length),e.slice(0,24).forEach((e,t)=>T.uFigStar.value[t].fromArray(e));let t=(M?.stones??[]).find(e=>e.stone);t&&T.uFigTint.value.fromArray(Ue(t.glow??t.color))}else T.uAuxOn.value=0,Ge=null;I=e,de++,fe=Math.round((Z()-t)*1e3),Ze=o&&te[o]?qe(K):``,V=!0,v()}function wt(e=0){ue||k||(ue=setTimeout(Ct,e))}function Tt(e){let t=P?.lights.length??0,n=Ve(t,e);for(let e=0;e<48;e++)E[e].w=e<t?n.inkAt[e]:-1e4;T.uEntrance.value.set(n.rimAt,n.waveAt,n.fullAt,J.motif),U=e,H=n.end,W=!1,X=!1,gt(e)}function Et(){for(let e of E)e.w=-1e4;T.uEntrance.value.set(-1e4,-1e4,-1e4,J.motif),H=R}function Dt(e,t){let n=new Set(e);P?.lights.forEach((e,r)=>{n.has(e.id)&&(E[r].w=t+.12)}),tt=t,gt(t)}let Ot=new l,kt=[new l,new l,new l],At=new u;function jt(){if(!N||!p?.isCamera)return!1;p.updateMatrixWorld?.(),At.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse);let e=M?.bounds?.floorY??0,t=Math.cos(q),n=Math.sin(q),[r,i]=ke,a=(e,a)=>{let o=N.centre[0]+(N.right[0]*e+N.away[0]*a)*N.scale,s=N.centre[1]+(N.right[1]*e+N.away[1]*a)*N.scale;return[(o-r)*t+(s-i)*n+r,-(o-r)*n+(s-i)*t+i]},[o,s]=a(0,0),[c,l]=a(1,0),[u,d]=a(0,1);kt[0].copy(Ot.set(c-o,0,l-s,0)).applyMatrix4(At),kt[1].copy(Ot.set(u-o,0,d-s,0)).applyMatrix4(At),kt[2].copy(Ot.set(o,e,s,1)).applyMatrix4(At);let[f,m,h]=kt;return[f,m,h].every(e=>Number.isFinite(e.x+e.y+e.w))?(T.uH0.value.set(f.x,m.x,h.x,f.y,m.y,h.y,f.w,m.w,h.w),!0):!1}function Mt(){if(!N||!p?.isCamera||!K?.width)return null;let e=M?.bounds?.floorY??0,t=Math.cos(q),n=Math.sin(q),[r,i]=ke,a=a=>{let o=1/0,s=-1/0,c=1/0,l=-1/0;for(let u=0;u<64;u++){let d=u*Math.PI*2/64,f=Math.cos(d),m=Math.sin(d),h=Math.hypot(f/N.ex,m/N.ey)||1,_=N.ex*f+f/N.ex/h*a,v=N.ey*m+m/N.ey/h*a,y=N.centre[0]+(N.right[0]*_+N.away[0]*v)*N.scale,b=N.centre[1]+(N.right[1]*_+N.away[1]*v)*N.scale,x=(y-r)*t+(b-i)*n+r,S=-(y-r)*n+(b-i)*t+i,C=new g(x,e,S).project(p);o=Math.min(o,C.x),s=Math.max(s,C.x),c=Math.min(c,C.y),l=Math.max(l,C.y)}return{left:+((o+1)/2).toFixed(3),right:+((s+1)/2).toFixed(3),top:+((1-l)/2).toFixed(3),bottom:+((1-c)/2).toFixed(3)}},o=a(0),s=a(D(A).rim[1]-1);return{loopWidth:+(o.right-o.left).toFixed(3),loop:o,rim:s,rimInside:s.left>=0&&s.right<=1&&s.top>=0&&s.bottom<=1,elevationDeg:+(Math.atan2(p.position.y-e,Math.hypot(p.position.x-(M?.bounds?.center?.[0]??0),p.position.z-(M?.bounds?.center?.[2]??0)))*180/Math.PI).toFixed(1)}}return{setDesign(e){if(k||!e?.mood)return!1;if(e.revisionKey===se)return!0;let t=se===null,n=M,r=je??(e.mood.signClear?e.mood.sign:null),i=ht(e.mood,r),a=i!==A||r!==j;se=e.revisionKey,M=e,A=i,j=r;let o=new Map((n?.stones??[]).map(e=>[e.id,`${e.componentId}`])),s=(e.stones??[]).filter(e=>e.stone&&o.get(e.id)!==`${e.componentId}`).map(e=>e.id),c=new Map(P?.lights.map((e,t)=>[e.id,E[t].w])??[]);return vt(),P?.lights.forEach((e,t)=>{E[t].w=c.get(e.id)??-1e4}),yt(),!K&&!b&&(K=Ke??Je()),wt(0),t||a||s.length>4?W=!0:s.length?Dt(s,R):gt(R),e.stonesKey,V=!0,!0},setConfiguration(e){if(k)return!1;let t=Number(e?.strength);T.uStrength.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1;let n=typeof e?.qaSign==`string`&&ge(e.qaSign)?e.qaSign:null;if(n!==je){je=n,j=n??(M?.mood?.signClear?M.mood.sign:null);let e=ht(M?.mood,j);e!==A&&(A=e,M&&(vt(),yt()),W=!0),I=null,wt()}return V=!0,!0},frame(e={}){if(k)return!1;let{timeSeconds:t=0,playing:n=!1,reducedMotion:r=!1,interacting:i=!1,selectedIds:a=[],productYaw:o=0,productPivot:s=[0,0]}=e;K=e.viewport??K,e.viewport&&!b&&(Ke=e.viewport),Ze&&Ze!==qe(K)&&!ue&&(I=null,wt(0));let c=Number.isFinite(e.wallSeconds)?e.wallSeconds:Z(),l=Z();De=l,xe++,Se??=typeof performance<`u`?performance.now():0,Ce=Number(K?.cssWidth)>0&&Number(K.cssWidth)<700,T.uRose?.value.set(Ce?.86:.14,.9);let u=Me===null?1/30:Math.min(.25,Math.max(0,l-Me));Me=l,Ie=Ie*.9+u*.1,!Be&&Ie>.05?Be=!0:Be&&Ie<.036&&(Be=!1),T.uLow.value=+!!Be;let d=L;L=n,me=r;let f=he===null?0:Math.max(0,Math.min(.5,c-he)),m=he!==null&&c-he>3&&!i;he=c;let h=Ce&&D(A).quietOnPhone===!0&&R>=Math.max(H,tt+2.5)&&pt();if(Y=r?0:W||!r&&n&&R<z&&!h?Math.min(1,Y+f/Pe):Math.max(0,Y-f/2),(!B||W)&&(R+=f*(W?1:Y*Y*(3-2*Y))),q=Number(o)||0,ke=Array.isArray(s)?s:[0,0],M&&F&&p?.position&&!b){let e=_t().elevation,t=Qe!==null&&Math.abs(e-Qe)<.001;Qe=e;let n=Math.abs(e-F.elevation)>2*Math.PI/180;t&&n&&(F=_t(),vt(),yt(),I=null,wt(0),X=!1,$e++),et=n&&!t}(W||n&&!r&&(!d||m))&&(r||!n?(Et(),W=!1):Tt(R));let _=Array.isArray(a)?a:[],v=_.join(`\0`);v!==ye&&(ye=v,_.length===1&&!r&&Dt(_,R)),i&&gt(R);let y=r||!n,x=!y&&R<z&&!h;if(T.uTime.value=R,T.uBaked.value=+!!pt(),D(A).look.ring&&!y){let e=ne(R);T.uRing.value.set(e.r,e.a)}else T.uRing.value.set(0,0);if(T.uReveal.value=y?Math.min(1,Math.max(0,(c-(Ae??=c))/Le)):1,y||(Ae=null),N){let e=Math.cos(q),t=Math.sin(q),[n,r]=ke,i=e,a=-t,o=-n*e+r*t+n,s=t,c=e,l=-n*t-r*e+r,[u,d]=N.right,[f,m]=N.away,h=1/N.scale,[_,v]=N.centre;T.uQx.value.set((u*i+d*s)*h,(u*a+d*c)*h,(u*(o-_)+d*(l-v))*h),T.uQy.value.set((f*i+m*s)*h,(f*a+m*c)*h,(f*(o-_)+m*(l-v))*h);let y=Number.isFinite(M?.bounds?.floorY)?M.bounds.floorY:0;T.uFloorY.value=y;let b=Math.max(.001,M?.bounds?.radius??N.scale*2);if(O.scale.setScalar(b*80),O.position.set(M?.bounds?.center?.[0]??0,y,M?.bounds?.center?.[2]??0),p?.isCamera&&K?.width>0){let e=new g(M?.bounds?.center?.[0]??0,y,M?.bounds?.center?.[2]??0),t=e.clone().project(p),n=e.clone().add(new g(N.right[0],0,N.right[1]).multiplyScalar(N.scale)).project(p),r=Math.hypot((n.x-t.x)*K.width/2,(n.y-t.y)*K.height/2);Number.isFinite(r)&&r>0&&(T.uPxU.value=r/174),T.uRes.value.set(K.width,K.height)}}if(N&&!X&&(jt()&&(V=!0),(i||(U===null?xe>2:R-U>H-U))&&(X=!0)),T.uAuxOn.value>.5&&Ge){let e=y?0:Math.min(h?Y:1,Math.max(0,(z-R)/3));Te(Ge,R,nt).forEach(([t,n,r],i)=>T.uFigL.value[i].set(t,n,r*e))}else for(let e of T.uFigL.value)e.z=0;return B=!x&&Y<=0&&R>=H,V=!1,Xe=Xe*.9+(Z()-l)*100,G&&=(clearTimeout(G),0),B||mt(),!0},needsFrame(){return!k&&(V||et||me&&T.uReveal.value<1)},reset(){W=!0,V=!0},getState(){return{kind:`gravur`,version:5,plate:A?D(A).id:null,sign:j,stones:P?.lights.length??0,motifs:P?.motifs.length??0,frames:xe,createdAt:rt,firstFrameAt:Se,painted:de,paintMs:fe,uploads:pe,texture:it.near?[it.near.width,it.near.height]:null,aux:T.uAuxOn.value>.5,clock:U===null?1e4:+(R-U).toFixed(3),entranceSeconds:U===null?0:+(H-U).toFixed(3),settled:B,pace:+Y.toFixed(3),motionUntil:z,playing:L,reducedMotion:me,phone:Ce,solo:ye?ye.split(`\0`):[],reveal:T.uReveal.value,frame:N?{ex:+N.ex.toFixed(3),ey:+N.ey.toFixed(3),scale:+N.scale.toFixed(4)}:null,pxU:+T.uPxU.value.toFixed(3),drawCalls:1,baked:T.uBaked.value===1,bakes:ct,bakeMs:st,lowCost:Be,frameMs:+(Ie*1e3).toFixed(1),frameJsMs:+Xe.toFixed(3),tileHeld:X,relayouts:$e,figureLight:!!Ge,framing:Mt()}},dispose(){if(!k){k=!0,G&&clearTimeout(G),ue&&clearTimeout(ue),lt&&clearTimeout(lt),C.parent?.remove(C),O.geometry.dispose(),w.dispose(),T.uNear.value?.dispose?.(),T.uAux.value?.dispose?.(),T.uNoise.value?.dispose?.();for(let e of Object.values(at))e?.dispose();for(let e of Object.values(Q))e?.dispose();for(let e of Object.values(ut))e?.dispose()}}}}export{Y as a,Ie as c,Ye as d,Xe as f,Be as i,Le as l,Pe as n,Re as o,Ve as p,J as r,Fe as s,ze as t,Ze as u};