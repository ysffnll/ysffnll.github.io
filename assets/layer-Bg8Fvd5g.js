import{$r as e,Hn as t,Ja as n,L as r,Qi as i,Rn as a,V as o,Wi as s,Yt as c,ar as l,do as u,ea as d,ft as f,io as p,ir as m,jr as h,mt as g,no as _,pa as v,qt as y,ro as b,rr as x,ta as S}from"./three.core-Dp-eO7LC.js";import{a as C,c as w,i as T,o as E,r as D,s as ee,t as O}from"./motifs-PB8xVykP.js";import{n as k,r as te,t as ne}from"./figure-COvfH8Ay.js";import{a as re,c as ie,d as ae,f as A,h as oe,l as se,m as ce,n as le,o as ue,p as j,r as de,s as fe,u as pe}from"./plates-BemfWJLr.js";var M=(e,t,n,r,i,a,o=26)=>{let s=Math.hypot(n-e,r-t),c=Math.atan2(r-t,n-e),l=[];for(let n=1;n<=o;n++){let r=i*T*n/o;l.push([e+s*Math.exp(-a*r)*Math.cos(c-r),t+s*Math.exp(-a*r)*Math.sin(c-r)])}return l},N=(...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]),P=Object.freeze({water:(()=>{let e=C([0,.1],[.26,.1],[.3,.88],[.54,.88],16),t=C([.54,.88],[.77,.88],[.86,.62],[.71,.48],12),n=M(.63,.62,.71,.48,1.25,.2,30);return{lines:[{p:N(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.3},{p:C([.17,.1],[.36,.12],[.38,.64],[.55,.7],12),w:.5,k:.6},{p:C([.33,.1],[.45,.14],[.47,.46],[.6,.5],10),w:.4,k:.6,tone:1}],fill:N(e,t,[[.71,.48],[.74,.3],[.76,.1]]),dots:[[.83,.8,.028],[.89,.7,.022],[.9,.86,.018]]}})(),fire:(()=>{let e=C([0,.1],[.17,.12],[.13,.64],[.33,.93],14),t=C([.33,.93],[.42,1.06],[.6,1.02],[.57,.86],10),n=M(.5,.86,.57,.86,1.1,.3,18),r=C([.57,.85],[.63,.62],[.5,.36],[.76,.1],14);return{lines:[{p:N(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.2},{p:r,w:.9,k:.55},{p:C([.2,.12],[.27,.4],[.27,.64],[.41,.76],12),w:.55,k:.6,tone:1},{p:C([.86,.1],[.93,.22],[.9,.36],[.98,.46],8),w:.45,k:.6,tone:1}],fill:N(e,t,[[.57,.86]],r),dots:[]}})(),earth:(()=>{let e=C([.04,.1],[.08,.86],[.92,.86],[.96,.1],22),t=C([.19,.1],[.23,.6],[.77,.6],[.81,.1],16),n=C([.33,.1],[.37,.37],[.63,.37],[.67,.1],12),r=Array.from({length:17},(e,t)=>{let n=t*T/16;return[.5+.045*Math.cos(n),.2+.03*Math.sin(n)]});return{lines:[{p:e,w:1.15,k:.5,swell:.25},{p:t,w:.65,k:.55},{p:n,w:.45,k:.6,tone:1}],fill:e,fill2:r,dots:[[0,.44,.024],[0,.6,.016],[.5,.97,.016]]}})(),air:(()=>{let e=C([0,.1],[.36,.1],[.4,.6],[.63,.66],16),t=M(.66,.5,.63,.66,1.35,.13,34);return{lines:[{p:N(e,[e[e.length-1],...t]),w:1.05,k:.45,swell:.2},{p:C([.66,.82],[.82,.9],[1,.78],[1.22,.84],14),w:.45,k:.8,tone:1},{p:C([.8,.3],[.92,.34],[1.06,.26],[1.24,.3],12),w:.4,k:.8}],fill:N(e,[[.63,.66],[.8,.5],[.8,.1]]),dots:[]}})()});function F(e,t,{width:n=.085/D,gap:r=.006/D,lift:i=.045/D}={}){let a=new Map(e.motifs.map(e=>[e.id,e.slot])),o=e.parts.filter(e=>e.stone.stone).map(e=>({id:e.stone.id,element:e.stone.element,a:Math.atan2(e.q[1],e.q[0]),rho:Math.hypot(...e.q),rg:e.r}));if(o.length<3)return null;o.sort((e,t)=>e.a-t.a);let s=0,c=-1;for(let e=0;e<o.length;e++){let t=((o[(e+1)%o.length].a-o[e].a)%T+T)%T||T;t>c&&(c=t,s=(e+1)%o.length)}let l=o.slice(s).concat(o.slice(0,s)),u=[];l.forEach((e,t)=>{let n=e.a;if(t)for(;n<=u[t-1];)n+=T;u.push(n)});let d=0;for(let e of l)a.has(e.id)&&(d=a.get(e.id)),e.slot=a.get(e.id)??d;let f=l.length,p=n*t.ornament,m=i*t.backRoom,h=e=>{if(e<0)return ee(u[f-1]-T,u[0],e+1);if(e>f-1)return ee(u[f-1],u[0]+T,e-(f-1));let t=Math.floor(e);return ee(u[t],u[Math.min(f-1,t+1)],e-t)},g=[];for(let e=0;e<=720;e++){let n=e*T/720,i=0,a=0;for(let e of l){let t=Math.abs(((n-e.a+Math.PI)%T+T)%T-Math.PI),r=Math.exp(-((t/.5)**2));i+=r,a+=r*(e.rho+e.rg*.92)}g.push(a/i+r*t.ornament+m*Math.max(0,Math.sin(n))**1.5)}let _=e=>{let t=(e%T+T)%T/T*720,n=Math.floor(t);return ee(g[n],g[Math.min(720,n+1)],t-n)},v=(e,t)=>{let n=h(e-.5),r=_(n)+t*p;return[r*Math.cos(n),r*Math.sin(n)]},y=g.map(e=>[e,e+1.4*p]);return{S:l,n:f,W:p,at:v,inner:Math.min(...y.map(e=>e[0])),outer:Math.max(...y.map(e=>e[1]))}}function I(e,t,n={}){if(!t)return!1;let{S:r,n:i,at:a}=t,o=n.enamel??.45,s=n.guil??.2;for(let t=0;t<i;t++){let i=r[t],c=A(i.slot),l=P[i.element]??P.water,u=e=>e.map(([e,n])=>a(e+t,n));n.band&&e.fill([a(t,-.02),a(t+1.04,-.02),a(t+1.04,1.06),a(t,1.06)],{code:c,channel:`g`,alpha:n.band});for(let n=0;n<16;n++){let r=t+(n+.5)/16;e.line([0,.25,.5,.75,1.04].map(e=>a(r+.06*Math.sin(e*6.3+n*.5),e)),.42,s,{code:c})}l.fill&&o>0&&e.fill(u(l.fill),{code:c,channel:`g`,alpha:o}),l.fill2&&o>0&&e.fill(u(l.fill2),{code:c,channel:`rg`,alpha:Math.min(1,o*1.6)});for(let t of l.lines){let n=u(t.p),r=n.length;e.ribbon(n,n.map((e,n)=>{let i=n/(r-1);return Math.max(.28,t.w*1.05*Math.sin(Math.PI*E(i*.96+.02))**+t.k*(1+(t.swell||0)*Math.sin(Math.PI*i)))}),.95,{code:c})}i.element!==`air`&&e.star(a(t+.97,.9),2.6,.85,4,.3,{code:c});for(let[n,r,i]of l.dots??[])e.dot(a(t+n,r),i*34,.85,{code:c})}let c=(t,n,r)=>{let o=[];for(let e=0;e<=i*8;e++)o.push(a(e/8,t));e.line(o,n,r,{code:se.FIELD})};c(.1,.55,.7),c(-.05,.5,.55),c(-.13,.45,.4),c(1.06,.8,.95),c(1.16,.8,.8),c(1.4,.5,.55);for(let t=0;t<i*3;t++)e.dot(a((t+.5)/3,1.28),1.05*(t%2?.8:1.15),.85);return!0}Object.freeze([`frieze`,`motifs`,`band`]);function L(e,t=10){let n=[],r=e.length;for(let i=0;i<r;i++){let a=e[(i-1+r)%r],o=e[i],s=e[(i+1)%r],c=e[(i+2)%r];for(let e=0;e<t;e++){let r=e/t,i=r*r,l=i*r;n.push([0,1].map(e=>.5*(2*o[e]+(-a[e]+s[e])*r+(2*a[e]-5*o[e]+4*s[e]-c[e])*i+(-a[e]+3*o[e]-3*s[e]+c[e])*l)))}}return n}function R(e,{strand:t,plate:n,motifs:r,frame:i,mode:a=n.ornament??`frieze`}){if(a===`frieze`&&i){let r=F(t,i);if(r&&I(e,r,n.frieze??{}))return{form:`frieze`,band:[r.inner,r.outer]}}if(a!==`band`||t.motifs.length<3){for(let e of t.motifs)r.draw(j(e),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:A(e.slot)});return{form:`motifs`}}let o=t.motifs,s=.1,c=L(o.map(e=>[e.base[0]+e.out[0]*s*.5,e.base[1]+e.out[1]*s*.5]),12),l=e=>{let t=c[(e-1+c.length)%c.length],n=c[(e+1)%c.length],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1;return[(n[1]-t[1])/r,-(n[0]-t[0])/r]},u=l(0)[0]*o[0].out[0]+l(0)[1]*o[0].out[1]<0?-1:1,d=(e,t)=>{let[n,r]=l(e);return[c[e][0]+n*t*u,c[e][1]+r*t*u]};return o.forEach((t,i)=>{let a=i*12-6,o=Array.from({length:13},(e,t)=>(a+t+c.length)%c.length),f=A(t.slot);for(let t of[-.1/2,s/2])e.line(o.map(e=>d(e,t)),.7,n.motif.alpha,{code:f});for(let e of[3,9]){let a=o[Math.round(e)],[d,p]=l(a),m=[d*u,p*u],h=[c[a][0]-m[0]*s*.35,c[a][1]-m[1]*s*.35];r.draw(w((O[t.element]??O.water)(i),h,m,t.scale*.45),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:f,widthScale:.7})}}),{form:`band`}}var me=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.2),z=(...e)=>e.reduce((e,t,n)=>e.concat(n?t.slice(1):t),[]),B=(e,t,n=10)=>Array.from({length:n+1},(r,i)=>[e[0]+(t[0]-e[0])*i/n,e[1]+(t[1]-e[1])*i/n]),he=(e,t,n,r=0,i=40,a=1)=>Array.from({length:i+1},(o,s)=>{let c=r+a*T*s/i;return[e+n*Math.cos(c),t+n*Math.sin(c)]}),V=(e,t=.012,n=.045)=>({p:e,w:me(e.length-1,t,n)}),ge=e=>e.map(([e,t])=>[-e,t]),_e=e=>e.map(([e,t])=>[-e,-t]);function ve(){let e=z(C([-.215,-.13],[-.27,.26],[.02,.52],[.19,.4],30),C([.19,.4],[.36,.27],[.3,.02],[.15,-.12],26),C([.15,-.12],[.03,-.24],[.08,-.46],[.3,-.42],26),C([.3,-.42],[.44,-.4],[.5,-.3],[.43,-.22],16)),t=e.length;return{p:e,w:e.map((e,n)=>{let r=n/(t-1);return .012+.05*Math.sin(Math.PI*E((r-.04)/.78))**1.3+.012*Math.exp(-(((r-.97)/.05)**2))})}}var ye=()=>z(B([-.4,-.42],[-.4,.28]),C([-.4,.28],[-.4,.46],[-.16,.46],[-.16,.28],14),B([-.16,.28],[-.16,-.42])),H=Object.freeze({aries:()=>[V(z(B([0,-.48],[0,-.05],12),C([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),C([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))),V(ge(z(C([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),C([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))))],taurus:()=>[V(he(0,-.17,.23,Math.PI/2,48),.02,.03),V(C([-.44,.46],[-.3,.04],[.3,.04],[.44,.46],30))],gemini:()=>[V(C([-.36,.44],[-.12,.34],[.12,.34],[.36,.44],20),.014,.03),V(C([-.36,-.44],[-.12,-.34],[.12,-.34],[.36,-.44],20),.014,.03),V(C([-.15,.37],[-.19,.1],[-.19,-.1],[-.15,-.37],20)),V(C([.15,.37],[.19,.1],[.19,-.1],[.15,-.37],20))],cancer:()=>{let e=z(he(-.18,.12,.1,-Math.PI/2,30,-1),C([-.18,.22],[0,.36],[.28,.32],[.4,.14],20));return[V(e,.012,.04),V(_e(e),.012,.04)]},leo:()=>[ve()],virgo:()=>[V(ye()),V(z(C([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),B([.08,.28],[.08,-.2]),C([.08,-.2],[.08,-.5],[.42,-.48],[.36,-.16],16),C([.36,-.16],[.3,.08],[.04,-.06],[.2,-.46],16)))],libra:()=>[V(B([-.42,-.32],[.42,-.32],20),.016,.02),V(z(B([-.42,-.02],[-.17,-.02],8),C([-.17,-.02],[-.32,.46],[.32,.46],[.17,-.02],30),B([.17,-.02],[.42,-.02],8)))],scorpius:()=>[V(ye()),V(z(C([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),B([.08,.28],[.08,-.3]),C([.08,-.3],[.08,-.48],[.3,-.48],[.42,-.3],16))),V(z(B([.27,-.33],[.42,-.3],6),B([.42,-.3],[.4,-.15],6)),.012,.02)],sagittarius:()=>[V(B([-.4,-.4],[.4,.4],30)),V(z(B([.1,.4],[.4,.4],8),B([.4,.4],[.4,.1],8)),.014,.025),V(B([-.25,.05],[.05,-.25],10),.012,.025)],capricorn:()=>[V(z(C([-.44,.32],[-.36,.3],[-.28,-.2],[-.2,-.4],16),C([-.2,-.4],[-.12,-.1],[-.04,.34],[.06,.34],16),C([.06,.34],[.16,.34],[.12,-.1],[.18,-.26],16),C([.18,-.26],[.24,-.46],[.46,-.38],[.4,-.18],14),C([.4,-.18],[.34,0],[.14,-.06],[.14,-.24],14),C([.14,-.24],[.14,-.44],[0,-.52],[-.1,-.46],12)))],aquarius:()=>[.14,-.2].map(e=>V(z(...[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]].slice(0,4).map((t,n,r)=>{let i=[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]];return C([i[n][0],i[n][1]+e],[i[n][0]+.07,i[n][1]+e+(n%2?-.03:.05)],[i[n+1][0]-.07,i[n+1][1]+e+(n%2?.05:-.03)],[i[n+1][0],i[n+1][1]+e],10)})),.012,.035)),pisces:()=>[V(C([-.46,.44],[-.18,.26],[-.18,-.26],[-.46,-.44],34),.012,.05),V(C([.46,.44],[.18,.26],[.18,-.26],[.46,-.44],34),.012,.05),{p:Array.from({length:13},(e,t)=>[-.25+.5*t/12,.015*Math.sin(Math.PI*t/12)]),w:me(12,.016,.014)}]}),be=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.1),xe=Object.freeze({scorpius:()=>{let e=z(C([-.62,.28],[-.56,.36],[-.48,.36],[-.46,.26],8),C([-.46,.26],[-.46,.1],[-.46,-.2],[-.46,-.42],12)),t=z(C([-.46,.16],[-.38,.42],[-.18,.42],[-.15,.16],12),C([-.15,.16],[-.15,0],[-.15,-.2],[-.15,-.42],10)),n=z(C([-.15,.16],[-.07,.42],[.13,.42],[.16,.16],12),C([.16,.16],[.16,-.1],[.14,-.36],[.32,-.42],12),C([.32,-.42],[.44,-.45],[.52,-.36],[.56,-.22],8));return[{p:e,w:be(e.length-1,.03,.07)},{p:t,w:be(t.length-1,.03,.08)},{p:n,w:be(n.length-1,.03,.08)},{p:[[.56,-.2],[.43,-.24]],w:[.06,.02]},{p:[[.56,-.2],[.6,-.34]],w:[.06,.02]}]},leo:()=>{let e=ve();return[{p:e.p.map(([e,t])=>[e*1.5-.18,t*1.5-.07]),w:e.w.map(e=>e*1.5)}]},pisces:()=>H.pisces().map(e=>({p:e.p.map(([e,t])=>[e*1.05,t*1.05]),w:e.w.map(e=>e*1.05)}))}),Se=e=>xe[e]??H[e]??null;Object.freeze(Object.keys(ne));function Ce(e,t){let n=e.ey+3.4,r=k(t,.03)?.GEO.box;return{centre:[0,n],S:1.74,k:2.1,spacing:.022,...r?{box:r}:{}}}function we(e){let{centre:[t,n],S:r,k:i}=e,[a,o,s,c]=e.box??[-1.35,-.85,1.35,.85],l=.06;return[t+(a-l)*r,n+(o-l)*r*i,t+(s+l)*r,n+(c+l)*r*i]}var U=Object.freeze({phone:{top:.125,gap:.015,width:.94},wide:{top:.1,gap:.025,width:.62}});function Te({sign:e,frame:t,screenOf:n,W:r,H:i}){let a=k(e,.03);if(!a)return null;let o=a.GEO.box,s=r/i<.95?U.phone:U.wide,c=o[2]-o[0],l=o[3]-o[1],u=n(0,t.ey+.32)[1]-s.gap,d=s.top,f=e=>{let r=t.ey+.3,i=t.ey+30;for(let t=0;t<44;t++){let t=(r+i)/2,[,a,o]=n(0,t);o<1&&a>e?r=t:i=t}return r},p=Math.min((u-d)*i/l,s.width*r/c),m=null,h=0;for(let e=0;e<24;e++){let e=f((((d+u)/2-h)*i+(o[1]+o[3])/2*p)/i),[t]=n(-.5,e),[a]=n(.5,e),[,c]=n(0,e+.5),[,l]=n(0,e-.5),g=Math.abs(a-t)*r,_=Math.abs(l-c)*i,v=p/Math.max(g,.001),y=Math.min(4,Math.max(1,g/Math.max(_,.001)));m={centre:[-(o[0]+o[2])/2*v,e],S:v,k:y,box:o,spacing:Math.max(.012,Math.min(.05,Math.round(3.8/p*400)/400))};let b=n(0,e+o[3]*v*y)[1],x=n(0,e+o[1]*v*y)[1],[S]=n(m.centre[0]+o[0]*v,e),[C]=n(m.centre[0]+o[2]*v,e),w=Math.min((u-d)/Math.max(x-b,1e-4),s.width*r/Math.max((C-S)*r,.001));if(Math.abs(w-1)<.01&&b>=d-.005&&x<=u+.005)break;h+=(b+x)/2-(d+u)/2,p*=Math.min(w*.998,1.5)}return m}function W(e,{sign:t,frame:n,place:r=Ce(n,t)}){let i=Se(t);if(!i)return;let a=k(t,r.spacing);if(a){let{F:t,GEO:n}=a,{centre:[i,o],S:s,k:c}=r,l=([e,t])=>[i+e*s,o+t*s*c],[u,d,f,p]=n.box,m=(u+f)/2,h=(d+p)/2,g=(f-u)/2,_=(p-d)/2;for(let t=Math.ceil((u-m)/.25)*.25;t<=g;t+=.25){let n=[];for(let e=-_;e<=_+1e-6;e+=.05)n.push([m+t+.04*e*e,h+e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(g*.92))**4)))}for(let t=Math.ceil((d-h)/.25)*.25;t<=_;t+=.25){let n=[];for(let e=-g;e<=g+1e-6;e+=.05)n.push([m+e,h+t+.03*e*e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(_*.82))**4)))}let v=(t,n)=>{let r=t.pts.map(l),i=r.length;i<2||(t.closed?e.line(r,t.w,n,{close:!0}):e.ribbon(r,r.map((e,n)=>Math.max(.25,t.w*Math.sin(Math.PI*E(n/(i-1)*.96+.02))**+t.k)),n))};for(let t of n.parts){let r=t.P,i=r.alpha??1;for(let n of t.runs)e.ribbon(n.pts.map(l),n.wd.map(e=>Math.max(.3,e*1.25)),.85*i);for(let[n,r,a]of t.dots)e.dot(l([n,r]),a*.62,.85*i);for(let e of t.extra)v(e,.95*i);for(let n of t.olRuns)e.ribbon(n.pts.map(l),n.w.map(e=>e*1.25),i);for(let e of n.strokes)e.after===r.id&&v(e,e.a)}for(let e of n.strokes)e.after||v(e,e.a);let y=t.stars.map(([e,t])=>l([e,t]));for(let[n,r]of t.edges??[])e.line([y[n],y[r]],.6,.42);t.stars.forEach(([,,t],n)=>{let r=E(3.8-t,.8,3)*2.6;e.star(y[n],r*1.35,1,t<2?8:t<3?6:4,.2),t<1.8&&e.line(Array.from({length:25},(e,t)=>{let i=t*T/24,a=r*2.1/(D*600);return[y[n][0]+a*Math.cos(i),y[n][1]+a*Math.sin(i)]}),.55,.55)})}let o=.085/D*n.ornament,s=[0,.03/D*n.ornament],c=(e,t=120)=>Array.from({length:t+1},(n,r)=>{let i=r*T/t;return[s[0]+e*Math.cos(i),s[1]+e*Math.sin(i)]});e.line(c(o),1.1,.85),e.line(c(o*1.12),.5,.6),e.line(c(o*.88),.45,.45);for(let t=0;t<36;t++){let n=t*T/36,r=o*.88,i=o*(t%3==0?.8:.84);e.line([[s[0]+r*Math.cos(n),s[1]+r*Math.sin(n)],[s[0]+i*Math.cos(n),s[1]+i*Math.sin(n)]],.45,.5)}let l=o*.62,u=e=>e*l*D*600*1.1;e.glyph(i().map(e=>({p:e.p.map(([e,t])=>[s[0]+e*l,s[1]+t*l]),w:e.w})),e=>e.w.map(u))}var Ee=Object.freeze({period:15,window:12,samples:[-16,-8,0,8,16],gain:.5}),G=[[-18.3,-3.2],[-16.8,-.2],[-15,1.6],[-12.9,2.6],[-8.4,3.8],[-3.8,4.2],[.6,5.6],[4,10.4],[8,11.4],[12,10.6],[15.2,8]].map(([e,t])=>[(e+2)/19,(t+1)/19]),K=Object.freeze({scorpius:{glow:[`body`,`tail`,`telson`]},leo:{glowLine:G},pisces:{glow:[`cordW`,`cordN`]}});function De(e,t=.022){let n=k(e,t);if(!n)return null;let{GEO:r}=n,i=n.F.glowLine||n.F.glow?n.F:K[e]??{};if(i.glowLine)return te(i.glowLine,!1,12);let a=(i.glow??[]).map(e=>r.parts.find(t=>t.P.id===e)?.geo?.sp).filter(Boolean);return a.length?[].concat(...a):r.parts.map(e=>e.geo?.sp).filter(e=>e?.length>1).sort((e,t)=>t.length-e.length)[0]??null}function Oe(e,t,n=[]){let{period:r,window:i,samples:a,gain:o}=Ee;if(!e?.length){for(let e=0;e<a.length;e++)n[e]=[0,0,0];return n}let s=e.length,c=t/r%1*(s+40)-20;return a.forEach((t,r)=>{let a=c+t,l=Math.max(0,Math.min(s-1,Math.round(a))),u=+(a>=0&&a<=s-1);n[r]=[e[l][0],e[l][1],u*o*Math.exp(-((t/i)**2))]}),n}function ke(e){let t=k(e,.025);if(!t)return[];let{F:n}=t;return n.stars.map(([e,t,r],i)=>[e,t,Math.min(3,Math.max(.8,3.8-r))*2.6*4.5/240*.55,+(i===(n.alpha??0))])}function Ae(e,{sign:t,place:n}){let r=k(t,n.spacing);if(!r)return!1;let{centre:[i,a],S:o,k:s}=n,c=([e,t])=>[i+e*o,a+t*o*s];for(let t of r.GEO.parts)(t.P.alpha??1)<.7||e.fill(t.geo.outline.map(c),{channel:`g`,alpha:1,only:`aux`});return!0}function je({plate:e,frame:t,strand:n,mood:r,sign:i=null,place:a=void 0,near:o,aux:s=null,ornament:c=void 0}){let l=pe({near:o,aux:s}),u=Object.freeze({draw(e,{alpha:t=1,enamel:n=.3,widthScale:r=1,code:i=0}={}){for(let a of e)a.fill&&n>0&&l.fill(a.q,{code:i,channel:`g`,alpha:n}),a.close?l.line(a.q,a.w*1.25*r,t,{code:i,close:!0}):l.taper(a.q,a.w*1.9*r,t,.5,{code:i})}});e.paint(l,{frame:t,strand:n,mood:r,motifs:u});let d=R(l,{strand:n,plate:e,motifs:u,frame:t,mode:c});return i&&W(l,{sign:i,frame:t,...a?{place:a}:{}}),i&&s&&a&&Ae(l,{sign:i,place:a}),{strokes:l.strokes,ornament:d.form,band:d.band??null}}var Me=`
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
`;function Ne(e){let t=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) c = ground${e.glslId}(p);`).join(`
      `),n=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) f = field${e.glslId}(p);`).join(`
      `);return`
  varying vec3 vWorld;
  uniform float uFloorY;
  ${Me}
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
      float full = smoothstep(uEntrance.z, uEntrance.z + 2.2, uTime);
      // A real loop with a uniform bound (GLSL ES 3): the compiler does not unroll it, so the program compiles fast.
      int count = uBaked > .5 ? 0 : min(int(uStoneCount + .5), MAXS);
      // Perf: the wash's two noise fields are read only by the loop (six noise reads a pixel saved once baked).
      float n1 = 0., n2 = 0.;
      if (count > 0) { n1 = fbm3(p.q * 1.74); n2 = fbm3(p.q * 1.74 + 7.3); }
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
      c += refl * uLook3.x * uStrength;
      // Perf: the paper is computed only where it still shows (during the entrance or a reveal; seven noise reads).
      float inked = p.ink * uReveal;
      if (inked < 1.) {
        vec3 paper = vec3(.78, .72, .61) * (.88 + .16 * fineNoise(p.q * vec2(14., 2.), p.lod) * .6 + .1 * fbm3(p.q * 3.));
        paper *= 1. - .08 * smoothstep(.5, .9, fbm3(p.g * 3.));
        c = mix(paper, c, inked);
      }

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
`}var Pe=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Fe=1.35,Ie=.02;function q(e,t){let n=0,r=.5;for(let i=0;i<3;i++){n+=r*fe(e,t);let i=1.6*e-1.2*t+3.1,a=1.2*e+1.6*t+1.7;e=i,t=a,r*=.5}return n/.875}function Le(e,t=()=>performance.now()){if(!e?.length)return null;let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t of e){let e=Math.max(Fe,8*Math.max(t.r,.02));n=Math.min(n,t.x-e),i=Math.max(i,t.x+e),r=Math.min(r,t.y-e),a=Math.max(a,t.y+e)}let o=Math.max(8,Math.min(256,Math.ceil((i-n)/Ie))),s=Math.max(8,Math.min(256,Math.ceil((a-r)/Ie))),c=new Float32Array(o*s*4),l=new Float32Array(o*s*4),u=new Float32Array(o*s*4),d=e.map((e,t)=>{let n=Math.max(e.r,.02),r=t*2.399;return{...e,r:n,glowK:1/(n*n*6.3),ck:Math.cos(r),sk:Math.sin(r),reach2:Math.max(Fe,8*n)**2,refl:[0,1,2].map(t=>e.color[t]+(e.glow[t]-e.color[t])*.3)}}),f=0,p={width:o,height:s,result:null,step(e=6){let m=t()+e;for(;f<s;f++){if(f&&t()>m)return!1;let e=f,p=r+(e+.5)/s*(a-r);for(let t=0;t<o;t++){let r=n+(t+.5)/o*(i-n),a=null,s=null,f=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;for(let e of d){let t=r-e.x,n=p-e.y,i=t*t+n*n;if(i>e.reach2)continue;let o=Math.exp(-i*e.glowK);f+=e.glow[0]*o,m+=e.glow[1]*o,h+=e.glow[2]*o,a===null&&(a=q(r*1.74,p*1.74),s=q(r*1.74+7.3,p*1.74+7.3));let c=(e.ck*a+e.sk*s-.5*(e.ck+e.sk))*.45,l=Math.sqrt(i)+c*.4,u=Math.exp(-l*l*7.65);g+=e.glow[0]*u,_+=e.glow[1]*u,v+=e.glow[2]*u,y+=u;let d=t/(e.r*.95),C=(n+e.r*1.55)/(e.r*1.25),w=Math.exp(-(d*d+C*C));b+=e.refl[0]*w,x+=e.refl[1]*w,S+=e.refl[2]*w}let C=(e*o+t)*4,w=1/Math.max(y,.001);c[C]=f,c[C+1]=m,c[C+2]=h,c[C+3]=y,l[C]=g*w,l[C+1]=_*w,l[C+2]=v*w,l[C+3]=1,u[C]=b,u[C+1]=x,u[C+2]=S,u[C+3]=1}}return p.result={rect:[n,r,i,a],width:o,height:s,a:c,b:l,c:u},!0}};return p}var J=`
  varying vec4 vClip;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vClip = gl_Position;
  }
`,Re=`
  uniform sampler2D uCache;
  varying vec4 vClip;
  void main() {
    vec2 uv = vClip.xy / vClip.w * .5 + .5;
    gl_FragColor = vec4(texture2D(uCache, uv).rgb, 1.);
    #include <colorspace_fragment>
  }
`,ze=new Set([`uTime`,`uRing`,`uFigL`,`uReveal`]);function Be(){let e=-2128831035,t=t=>{e=Math.imul(e^(Math.round(Number(t)*4096)|0),16777619),e=Math.imul(e^(Math.round(Number(t)*4096%1*1e6)|0),16777619)},n=e=>{if(e==null)return t(-7);if(typeof e==`number`||typeof e==`boolean`)return t(+e);if(e.isTexture)t(e.id),t(e.version);else if(Array.isArray(e)){t(e.length);for(let t of e)n(t)}else if(e.elements)for(let n of e.elements)t(n);else typeof e.x==`number`?(t(e.x),t(e.y),typeof e.z==`number`&&t(e.z),typeof e.w==`number`&&t(e.w)):t(-9)};return{value:n,num:t,get:()=>e}}function Ve({plateMaterial:e,geometry:t,createTarget:r}={}){let o=new d;o.name=`gravur-plate-cache`;let s=new l(t,e);s.name=`gravur-plate-source`,s.frustumCulled=!1,s.matrixAutoUpdate=!1,o.add(s);let c=typeof r==`function`?r:(e,t)=>{let r=new u(e,t,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:a,magFilter:a,type:n});return r.texture.colorSpace=i,r.texture.name=`gravur-plate-cache`,r},f=null,p=null,m=null,h=0,g=0,_=0,v=1,y=!1,b=[0,0],x=new S({name:`gravur-plate-view`,vertexShader:J,fragmentShader:Re,uniforms:{uCache:{value:null}},side:1,depthWrite:!1,fog:!1,toneMapped:!1});function C(t,n,r,i){let a=Be(),o=Be();for(let[t,n]of Object.entries(e.uniforms))t!==`uRes`&&t!==`uPxU`&&(a.value(n.value),ze.has(t)||o.value(n.value));for(let s of[a,o])s.value(t.matrixWorld),s.value(t.projectionMatrix),s.value(n.matrixWorld),s.num(r),s.num(i),s.num(e.version);return[a.get(),o.get()]}return{viewMaterial:x,update(t,n,r,{width:i,height:a,want:l=1,clockStep:u=!0}={}){if(y||!t||!n||!(i>0&&a>0))return`kept`;r.updateMatrixWorld?.();let d=Math.max(1,Math.round(i*l)),S=Math.max(1,Math.round(a*l)),[w,T]=C(n,r,d,S);if(f&&w===p)return g++,`kept`;if(f&&!u&&T===m&&d===b[0]&&S===b[1])return _++,`held`;f?(f.width!==d||f.height!==S)&&f.setSize(d,S):f=c(d,S);let E=e.uniforms,D=E.uRes.value.clone(),ee=E.uPxU.value,O=d/i;E.uRes.value.set(d,S),E.uPxU.value=ee*O,s.matrix.copy(r.matrixWorld),s.matrixWorld.copy(r.matrixWorld);let k=t.getRenderTarget(),te=t.autoClear;try{t.autoClear=!1,t.setRenderTarget(f),t.render(o,n)}finally{t.autoClear=te,t.setRenderTarget(k),E.uRes.value.copy(D),E.uPxU.value=ee}return x.uniforms.uCache.value=f.texture,p=w,m=T,b=[d,S],v=l,h++,`drawn`},invalidate(){p=null,m=null},getState(){return{scale:v,size:[...b],draws:h,skips:g,held:_,bytes:b[0]*b[1]*4}},release(){f?.dispose(),f=null,p=null,m=null,x.uniforms.uCache.value=null,b=[0,0]},dispose(){y||(y=!0,f?.dispose(),f=null,x.dispose(),o.remove(s))}}}var He=Object.freeze([Object.freeze({scale:1,every:1}),Object.freeze({scale:.8,every:1}),Object.freeze({scale:.65,every:1}),Object.freeze({scale:.5,every:1}),Object.freeze({scale:.5,every:2}),Object.freeze({scale:.4,every:3})]),Y=Object.freeze({window:6,lateShare:.8,floorMs:1e3/30,gapMs:2e3,upAfterMs:2e3,failBackMs:1500,guardMs:3e3,storageKey:`jew-studio.gravur-ladder.v1`}),Ue=e=>{let t=[...e].sort((e,t)=>e-t);return t.length?t[Math.floor(t.length/2)]:0};function We({storage:e=null,startLevel:t=null,maxLevel:n=He.length-1,name:r=`motion`,guardAllowed:i=!0}={}){let a=`${Y.storageKey}.${r}`,o=Math.min(He.length-1,n),s=()=>{try{let t=JSON.parse(e?.getItem?.(a)??`null`);return Number.isInteger(t?.level)?t.level:0}catch{return 0}},c=e=>Math.max(0,Math.min(o,e)),l=c(Number.isInteger(t)?t:s()),u=0,d=l?`remembered level ${l}`:`start`,f=[],p=[],m=0,h=0,g=-1,_=0,v=1/0,y=!1,b=0,x=()=>{try{e?.setItem?.(a,JSON.stringify({level:l}))}catch{}};function S(e,t){return e=c(e),e!==l&&(l=e,d=t,f=[],p=[],m=0,h=0,b++,x(),!0)}return{get level(){return l},get step(){return He[l]},get guard(){return y},sample(e,{paceMs:t=0,hintMs:n=null,delayMs:r=null,continued:a=!0}={}){if(!Number.isFinite(e)||e<=0)return!1;if(!a||e>Y.gapMs)return f=[],p=[],!1;if(_+=e,f.push(e),f.length>Y.window&&f.shift(),Number.isFinite(r)&&(p.push(r),p.length>Y.window&&p.shift()),f.length<Y.window)return!1;let s=Ue(f);v=Math.min(v,s,Number.isFinite(n)&&n>0?n:1/0);let c=Math.max(t,Math.min(v,Y.floorMs)),x=Number.isFinite(n)&&n>0?n:Y.floorMs,C=p.length<Y.window||Ue(p)>x*1.5+4;if(s>c/Y.lateShare&&C)return m=0,g>=0&&_-g<Y.failBackMs&&(u=Math.max(u,l+1)),g=-1,l<o?S(l+1,`late: ${s.toFixed(0)} ms against ${c.toFixed(0)} ms`):(h+=e,i&&!y&&h>=Y.guardMs?(y=!0,d=`guard: still ${s.toFixed(0)} ms at the last level`,b++,!0):!1);if(h=0,m+=e,m>=Y.upAfterMs&&l>u){let e=S(l-1,`headroom: ${s.toFixed(0)} ms against ${c.toFixed(0)} ms`);return g=_,e}return!1},pause(){f=[],p=[],m=0,h=0},getState(){return{level:l,scale:He[l].scale,every:He[l].every,ceiling:u,guard:y,reason:d,bestMs:Number.isFinite(v)?+v.toFixed(1):null,changes:b}}}}var Ge=.6,Ke=1/30,qe=2.5,X=Object.freeze({lead:.25,span:1.9,perStone:.12,rimDelay:.2,rim:.6,motif:1.2}),Je=.6,Ye=2048,Xe=1024,Ze=6e3,Z=.05,Qe=.036;function $e(e,t=0){let n=Math.min(X.span,Math.max(0,e-1)*X.perStone),r=Array.from({length:e},(r,i)=>t+X.lead+(e>1?n*i/(e-1):0)),i=t+X.lead+n+X.rimDelay,a=i+X.rim;return{inkAt:r,rimAt:i,waveAt:a,fullAt:i-.3,end:a+2.4}}var et=e=>e.map(e=>e/255),tt=e=>[1,3,5].map(t=>parseInt(String(e).slice(t,t+2),16)/255||0);function nt(e,t){if(typeof document<`u`&&document.createElement){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}return typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):null}function Q(){let e=new f(new Uint8Array([0,0,0,255]),1,1);return e.colorSpace=``,e.needsUpdate=!0,e}function rt(){let e=new f(ue(),256,256);return e.colorSpace=``,e.wrapS=e.wrapT=s,e.magFilter=a,e.minFilter=a,e.generateMipmaps=!1,e.needsUpdate=!0,e}var it=()=>(typeof performance<`u`?performance.now():Date.now())/1e3,at=null,ot=null,st=Object.freeze([`auto`,`canli`,`dengeli`,`hafif`]),ct=`jew-studio.gravur-tier.v1`,lt=(()=>{try{let e=globalThis.localStorage?.getItem(ct);return st.includes(e)?e:`auto`}catch{return`auto`}})(),ut=`canli`,dt=``,ft=()=>({chosen:lt,recommended:ut,effective:lt===`auto`?ut:lt});function pt(){let e=ft(),t=`${e.chosen}/${e.recommended}/${e.effective}`;if(t!==dt){dt=t;try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-tier`,{detail:e}))}catch{}}}function mt(e){return e?.guard?`hafif`:e?.level>0?`dengeli`:`canli`}function ht(){return ot}var gt=new Set,_t=!1;function vt(e){_t=e===!1;for(let e of gt)e()}function yt(e){at=Number.isFinite(e)?e:null;for(let e of gt)e()}var bt=null,xt=e=>e?.cssWidth?`${Math.round(e.cssWidth)}x${Math.round(e.cssHeight)}`:``;function St(){try{let e=globalThis.document?.querySelector?.(`#scene-stage canvas`);if(e?.clientWidth>0)return{cssWidth:e.clientWidth,cssHeight:e.clientHeight,width:e.width,height:e.height}}catch{}return null}function Ct(){let e=Array.from({length:48},()=>new p(0,0,.1,-1e4)),t=Array.from({length:48},()=>new p),n=Array.from({length:48},()=>new p),r={uTime:{value:0},uPlateUnit:{value:2.684},uPlate:{value:0},uStoneCount:{value:0},uPxU:{value:1},uStrength:{value:1},uReveal:{value:1},uSolo:{value:-1},uQx:{value:new b(1,0,0)},uQy:{value:new b(0,-1,0)},uMetal:{value:new b(.9,.8,.6)},uLeaf:{value:new b(.9,.8,.6)},uEnamel:{value:new b(.8,.3,.2)},uLightCol:{value:new b(1,.92,.75)},uEllipse:{value:new _(1,1)},uRing:{value:new _(0,0)},uLow:{value:0},uRes:{value:new _(1,1)},uFloorY:{value:0},uStoneA:{value:e},uStoneB:{value:t},uStoneC:{value:n},uEntrance:{value:new p(-1e4,-1e4,-1e4,X.motif)},uRim:{value:new p(-Math.PI/2,1,1.35,1.55)},uLook:{value:new p},uLook2:{value:new p(1,.45,1,.95)},uLook3:{value:new p},uNear:{value:Q()},uAux:{value:Q()},uNearWarp:{value:new p(1.6,1,1.6,1)},uNearT:{value:new _(2.6,2.6)},uAuxRect:{value:new p(-1,-1,1,1)},uAuxOn:{value:0},uH0:{value:new x},uFig:{value:new p(0,4,1,2)},uFigL:{value:Array.from({length:Ee.samples.length},()=>new b)},uFigStar:{value:Array.from({length:24},()=>new p)},uFigStars:{value:0},uFigTint:{value:new b(1,.8,.6)},uLoops:{value:1},uShares:{value:new p(.25,.25,.25,.25)},uPig:{value:[new b(.8,.8,.8),new b(.8,.8,.8),new b(.8,.8,.8),new b(.8,.8,.8)]},uBaked:{value:0},uBakeRect:{value:new p(0,0,1,1)},uBakeA:{value:Q()},uBakeB:{value:Q()},uBakeC:{value:Q()},uEarthBand:{value:[0,1,2,3].map(()=>new p(2,2,0,0))},uClouds:{value:Array.from({length:40},()=>new p)},uCloudB:{value:Array.from({length:40},()=>new p)},uCloudCount:{value:0},uNoise:{value:rt()}},i=e=>Array.isArray(e)?new[null,null,_,b,p][e.length]().fromArray(e):e;for(let e of le)for(let[t,n]of Object.entries(e.defaults??{}))r[t]??={value:i(n)};return new S({name:`gravur-plate`,vertexShader:Pe,fragmentShader:Ne(le),uniforms:r,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function wt(){let e=new l(new h(.001,.001),Ct());return e.name=`gravur-plate-warm`,e.frustumCulled=!1,e}function Tt(n={}){let{scene:i,camera:s,registerNativeGroup:u}=n,d=typeof n.requestFrame==`function`?n.requestFrame:()=>{},h=typeof n.createCanvas==`function`?n.createCanvas:nt,_=n.offscreen===!0,x=Number.isInteger(n.nearTexels)&&n.nearTexels>=256?Math.min(Ye,n.nearTexels):Ye,S=_?Math.min(Xe,x):Xe;if(!i?.isScene||typeof u!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let C=new y;C.name=`atmosphere-gravur`;let w=Ct(),T=w.uniforms,E=T.uStoneA.value,D=T.uStoneB.value,ee=T.uStoneC.value,O=new l(new v(1,48,24),w);O.name=`gravur-plate`,O.renderOrder=-10,O.frustumCulled=!1,C.add(O);let k=_?null:Ve({plateMaterial:w,geometry:O.geometry}),te=null;try{te=_?null:globalThis.localStorage??null}catch{}let A=_?null:We({storage:te,name:`motion`}),se=_?null:We({storage:te,name:`drag`,maxLevel:3,guardAllowed:!1});A&&(ut=mt(A.getState()),pt());let le=`none`,ue=!1,j=0,fe=!1,pe=!1;i.add(C),u(C);let M=!1,N=null,P=null,F=null,I=null,L=null,R=null,me=null,z=null,B=0,he=0,V=0,ge=0,_e=null,ve=!1,ye=!1,H=0,be=null,xe=0,U=!0,W=!0,Ee=0,G=null,K=!0,Ae=``,Me=0,Ne=null,Pe=0,Fe=!1,Ie=-1,q=null,J=0,Re=[0,0],ze=null,Be=null,Y=null,Ue=1/30,qe=!1,Z=1,Qe=!1,Q=null,rt=0,st=``,ct=null,dt=0,ht=!1,vt=-1e4,yt=[],wt=()=>{M||(W=!0,U=!1,d())};_||gt.add(wt);let Tt=typeof performance<`u`?performance.now():0,Et={near:null,aux:null},Dt={near:null,aux:null},Ot=null,kt=0,At=0,jt=0,$={a:null,b:null,c:null},Mt={a:T.uBakeA.value,b:T.uBakeB.value,c:T.uBakeC.value};function Nt(){let e=R?.lights.length??0,t=[];for(let n=0;n<e;n++){let e=E[n],r=D[n],i=ee[n];t.push({x:e.x,y:e.y,r:e.z,glow:[r.x,r.y,r.z],color:[i.x,i.y,i.z]})}let n=JSON.stringify(t.map(e=>[e.x,e.y,e.r,e.glow,e.color]));if(n===Ot)return;Ot=n,T.uBaked.value=0,kt=0,T.uBakeA.value=Mt.a,T.uBakeB.value=Mt.b,T.uBakeC.value=Mt.c;for(let e of[`a`,`b`,`c`])$[e]?.dispose(),$[e]=null;jt&&clearTimeout(jt);let r=Le(t);if(!r)return;let i=()=>{if(jt=0,M||Ot!==n)return;let e=it(),t=r.step(6);kt+=(it()-e)*1e3,t?Pt(r.result):jt=setTimeout(i,16)};jt=setTimeout(i,0)}function Pt(t){for(let n of[`a`,`b`,`c`]){let r=t[n],i=new Uint16Array(r.length);for(let e=0;e<r.length;e++)i[e]=g.toHalfFloat(r[e]);let s=new f(i,t.width,t.height,e,c);s.colorSpace=``,s.magFilter=s.minFilter=a,s.generateMipmaps=!1,s.wrapS=s.wrapT=o,s.needsUpdate=!0,$[n]=s}T.uBakeA.value=$.a,T.uBakeB.value=$.b,T.uBakeC.value=$.c,T.uBakeRect.value.fromArray(t.rect),At++,kt=Math.round(kt),W=!0}function Ft(){if(!$.a||T.uEntrance.value.z>H-2.3)return!1;let e=R?.lights.length??0;for(let t=0;t<e;t++)if(H-E[t].w<8)return!1;return!0}let It=()=>{let e=lt;return e===`auto`?A.step:e===`dengeli`?He[4]:He[0]},Lt=()=>Ke*(A?It().every:1);function Rt(e=Math.max(0,Lt()-(it()-Ie)-.013)){Pe||M||(Pe=setTimeout(()=>{Pe=0,!(M||U)&&(d(),it()-Ie>.15&&Rt(.2))},e*1e3))}let zt=(e,t)=>e?.chosen&&!Be?re(e.plate).id:t&&ne[t]?`sign`:e?.elementPlate??(e?.plate===`sign`?null:e?.plate)??`atlas`;function Bt(e=H){ue||(xe=Math.max(xe,e+25)),U=!1,W=!0}function Vt(){if(!s?.position)return{toward:[0,1],elevation:24*Math.PI/180};let e=I?.bounds?.center??[0,0,0],t=s.position.x-e[0],n=s.position.y-(I?.bounds?.floorY??0),r=s.position.z-e[2],i=Math.cos(-J),a=Math.sin(-J);return{toward:[t*i+r*a,-t*a+r*i],elevation:Math.atan2(n,Math.hypot(t,r)||1e-6)}}function Ht(){if(!I)return!1;let e=I.kind===`necklace`?`necklace`:`bracelet`;if(me&&z===e||(me=Vt(),z=e),L=ce(I.stones??[],{kind:e,view:me}),!L)return R=null,T.uStoneCount.value=0,!1;let t=re(P);return R=oe(I.stones,L,{motifScale:t.motif.scale}),T.uEllipse.value.set(L.ex,L.ey),T.uPlateUnit.value=L.scale,T.uRim.value.set(R.rimStart,R.rimDirection,t.rim[0],t.rim[1]),T.uStoneCount.value=R.lights.length,R.lights.forEach((e,t)=>{let n=E[t].w;E[t].set(e.q[0],e.q[1],e.r,n);let[r,i,a]=tt(e.glow),[o,s,c]=tt(e.color);D[t].set(r,i,a,e.elementIndex),ee[t].set(o,s,c,0)}),!0}function Ut(){let e=re(P);T.uPlate.value=de[e.id],T.uMetal.value.fromArray(et(e.metal)),T.uLeaf.value.fromArray(et(e.leaf)),T.uEnamel.value.fromArray(et(e.enamel)),T.uLightCol.value.fromArray(et(e.light));let t=e.look;T.uLook.value.set(t.dark,t.bloom,t.sheen,t.sheenGain),T.uLook2.value.set(1,t.tint,1,t.lineAlpha),T.uLook3.value.set(t.reflect,t.heat,t.wave,1);let n=I?.mood?.shares??{};T.uShares.value.set(n.water??0,n.fire??0,n.earth??0,n.air??0);let r={water:null,fire:null,earth:null,air:null};for(let e of I?.stones??[])e.stone&&e.element&&!r[e.element]&&(r[e.element]=tt(e.color));[`water`,`fire`,`earth`,`air`].forEach((e,t)=>T.uPig.value[t].fromArray(r[e]??[.8,.8,.8]));for(let[t,n]of Object.entries(e.uniforms({mood:I?.mood,frame:L,strand:R,sign:F})??{})){let e=T[t];e&&(Array.isArray(e.value)&&Array.isArray(n)?e.value.forEach((e,t)=>{n[t]&&e.fromArray(n[t])}):e.value?.fromArray?e.value.fromArray(n):e.value=n)}}function Wt(e,n){let i=Dt[e];return i&&i.image===n||(i?.dispose(),i=new r(n),i.colorSpace=``,i.flipY=!1,i.generateMipmaps=!0,i.minFilter=t,i.magFilter=a,i.anisotropy=8,i.wrapS=i.wrapT=o,Dt[e]=i),i.needsUpdate=!0,ge++,i}function Gt(e,t,n){let r=Et[e];return r&&r.width===t&&r.height===n||(r=Et[e]=h(t,n)),r}function Kt(e,t){let n=I?.bounds?.floorY??0,r=Math.cos(J),i=Math.sin(J),[a,o]=Re,c=L.centre[0]+(L.right[0]*e+L.away[0]*t)*L.scale,l=L.centre[1]+(L.right[1]*e+L.away[1]*t)*L.scale,u=new b((c-a)*r+(l-o)*i+a,n,-(c-a)*i+(l-o)*r+o).project(s);return[(u.x+1)/2,(1-u.y)/2,u.z]}function qt(e){let t=ne[e]?.()?.place??{cy:.2,w:.7};if(!s?.isCamera||!q?.cssWidth)return Ce(L,e);s.updateMatrixWorld?.();let n=q.cssWidth,r=q.cssHeight||n,i=.07;if(Te)return Te({sign:e,frame:L,screenOf:Kt,W:n,H:r});let[,a]=Kt(0,L.ey+1.9),o=Math.min(t.cy+.05,(i+Math.max(.17,a))/2),c=L.ey+.6,l=L.ey+25;for(let e=0;e<40;e++){let e=(c+l)/2,[,t,n]=Kt(0,e);n<1&&t>o?c=e:l=e}let u=c,[d]=Kt(-.5,u),[f]=Kt(.5,u),[,p]=Kt(0,u+.5),[,m]=Kt(0,u-.5),h=Math.abs(f-d)*n,g=Math.abs(m-p)*r,_=Math.max(.12,a-i)*r,v=Math.min(t.w*Math.min(n,r*.78)/2,_/1.55)/Math.max(h,.001),y=Math.min(4,Math.max(1,h/Math.max(g,.001))),b=Math.max(.012,Math.min(.05,Math.round(3.8/(v*h)*400)/400));return{centre:[0,u],S:v,k:y,spacing:b}}function Jt(){if(B=0,M||!L||!R)return;let e=JSON.stringify([N,P,F,L.centre,L.right,L.scale,L.ex,L.ey]);if(e===_e)return;let t=it(),n=re(P),r=ae(L,{texels:x}),i=Gt(`near`,r.width,r.height),a=i?.getContext?.(`2d`,{alpha:!1});if(!a){_e=e;return}let o=F&&Se(F)?F:null,s=null,c=null;if(o&&ne[o]){c=qt(o);let e=we(c),t=(e[2]-e[0])/(e[3]-e[1]),n=t>=1?S:Math.round(S*t),r=t>=1?Math.round(S/t):S,i=Gt(`aux`,n,r),a=i?.getContext?.(`2d`,{alpha:!1});a&&(s={ctx:a,width:n,height:r,rect:e,canvas:i})}Nt();let l=je({plate:n,frame:L,strand:R,mood:I?.mood,sign:o,place:c,near:{ctx:a,layout:r},aux:s});if(l.band&&(T.uRim.value.z=l.band[0]-.02,T.uRim.value.w=Math.max(n.rim[1],l.band[1]+.02)),T.uNear.value=Wt(`near`,i),T.uNearWarp.value.set(r.ax,r.bx,r.ay,r.by),T.uNearT.value.set(r.Tx,r.Ty),s){T.uAux.value=Wt(`aux`,s.canvas),T.uAuxRect.value.fromArray(s.rect),T.uAuxOn.value=1,T.uFig.value.set(c.centre[0],c.centre[1],c.S,c.S*c.k),Q=De(o,c.spacing);let e=ke(o);T.uFigStars.value=Math.min(24,e.length),e.slice(0,24).forEach((e,t)=>T.uFigStar.value[t].fromArray(e));let t=(I?.stones??[]).find(e=>e.stone);t&&T.uFigTint.value.fromArray(tt(t.glow??t.color))}else T.uAuxOn.value=0,Q=null;_e=e,he++,V=Math.round((it()-t)*1e3),st=o&&ne[o]?xt(q):``,W=!0,d()}function Yt(e=0){B||M||(B=setTimeout(Jt,e))}function Xt(e){let t=R?.lights.length??0,n=$e(t,e);for(let e=0;e<48;e++)E[e].w=e<t?n.inkAt[e]:-1e4;T.uEntrance.value.set(n.rimAt,n.waveAt,n.fullAt,X.motif),G=e,Ee=n.end,K=!1,Qe=!1,Bt(e)}function Zt(){for(let e of E)e.w=-1e4;T.uEntrance.value.set(-1e4,-1e4,-1e4,X.motif),Ee=H}function Qt(e,t){let n=new Set(e);R?.lights.forEach((e,r)=>{n.has(e.id)&&(E[r].w=t+.12)}),vt=t,Bt(t)}let $t=new p,en=[new p,new p,new p],tn=new m;function nn(){if(!L||!s?.isCamera)return!1;s.updateMatrixWorld?.(),tn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse);let e=I?.bounds?.floorY??0,t=Math.cos(J),n=Math.sin(J),[r,i]=Re,a=(e,a)=>{let o=L.centre[0]+(L.right[0]*e+L.away[0]*a)*L.scale,s=L.centre[1]+(L.right[1]*e+L.away[1]*a)*L.scale;return[(o-r)*t+(s-i)*n+r,-(o-r)*n+(s-i)*t+i]},[o,c]=a(0,0),[l,u]=a(1,0),[d,f]=a(0,1);en[0].copy($t.set(l-o,0,u-c,0)).applyMatrix4(tn),en[1].copy($t.set(d-o,0,f-c,0)).applyMatrix4(tn),en[2].copy($t.set(o,e,c,1)).applyMatrix4(tn);let[p,m,h]=en;return[p,m,h].every(e=>Number.isFinite(e.x+e.y+e.w))?(T.uH0.value.set(p.x,m.x,h.x,p.y,m.y,h.y,p.w,m.w,h.w),!0):!1}function rn(){if(!L||!s?.isCamera||!q?.width)return null;let e=I?.bounds?.floorY??0,t=Math.cos(J),n=Math.sin(J),[r,i]=Re,a=a=>{let o=1/0,c=-1/0,l=1/0,u=-1/0;for(let d=0;d<64;d++){let f=d*Math.PI*2/64,p=Math.cos(f),m=Math.sin(f),h=Math.hypot(p/L.ex,m/L.ey)||1,g=L.ex*p+p/L.ex/h*a,_=L.ey*m+m/L.ey/h*a,v=L.centre[0]+(L.right[0]*g+L.away[0]*_)*L.scale,y=L.centre[1]+(L.right[1]*g+L.away[1]*_)*L.scale,x=(v-r)*t+(y-i)*n+r,S=-(v-r)*n+(y-i)*t+i,C=new b(x,e,S).project(s);o=Math.min(o,C.x),c=Math.max(c,C.x),l=Math.min(l,C.y),u=Math.max(u,C.y)}return{left:+((o+1)/2).toFixed(3),right:+((c+1)/2).toFixed(3),top:+((1-u)/2).toFixed(3),bottom:+((1-l)/2).toFixed(3)}},o=a(0),c=a(re(P).rim[1]-1);return{loopWidth:+(o.right-o.left).toFixed(3),loop:o,rim:c,rimInside:c.left>=0&&c.right<=1&&c.top>=0&&c.bottom<=1,elevationDeg:+(Math.atan2(s.position.y-e,Math.hypot(s.position.x-(I?.bounds?.center?.[0]??0),s.position.z-(I?.bounds?.center?.[2]??0)))*180/Math.PI).toFixed(1)}}return{setDesign(e){if(M||!e?.mood)return!1;if(e.revisionKey===N)return!0;let t=N===null,n=I,r=Be??(e.mood.signClear?e.mood.sign:null),i=zt(e.mood,r),a=i!==P||r!==F;N=e.revisionKey,I=e,P=i,F=r;let o=new Map((n?.stones??[]).map(e=>[e.id,`${e.componentId}`])),s=(e.stones??[]).filter(e=>e.stone&&o.get(e.id)!==`${e.componentId}`).map(e=>e.id),c=new Map(R?.lights.map((e,t)=>[e.id,E[t].w])??[]);return Ht(),R?.lights.forEach((e,t)=>{E[t].w=c.get(e.id)??-1e4}),Ut(),!q&&!_&&(q=bt??St()),Yt(0),t||a||s.length>4?K=!0:s.length?Qt(s,H):Bt(H),e.stonesKey,W=!0,!0},setConfiguration(e){if(M)return!1;let t=Number(e?.strength);T.uStrength.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1;let n=typeof e?.qaSign==`string`&&Se(e.qaSign)?e.qaSign:null;if(n!==Be){Be=n,F=n??(I?.mood?.signClear?I.mood.sign:null);let e=zt(I?.mood,F);e!==P&&(P=e,I&&(Ht(),Ut()),K=!0),_e=null,Yt()}return W=!0,!0},frame(e={}){if(M)return!1;let{timeSeconds:t=0,playing:n=!1,interacting:r=!1,selectedIds:i=[],productYaw:a=0,productPivot:o=[0,0]}=e,c=k?ft().effective:`auto`,l=e.reducedMotion===!0||c===`hafif`;q=e.viewport??q,e.viewport&&!_&&(bt=e.viewport),st&&st!==xt(q)&&!B&&(_e=null,Yt(0));let u=Number.isFinite(e.wallSeconds)?e.wallSeconds:it(),d=it(),f=Ie>=0?(d-Ie)*1e3:null;Ie=d,Me++,Ne??=typeof performance<`u`?performance.now():0,Fe=Number(q?.cssWidth)>0&&Number(q.cssWidth)<700,T.uRose?.value.set(Fe?.86:.14,.9);let p=Y===null?1/30:Math.min(.25,Math.max(0,d-Y));Y=d,Ue=Ue*.9+p*.1,!qe&&Ue>.05?qe=!0:qe&&Ue<.036&&(qe=!1),T.uLow.value=+!!qe;let m=ve;ve=n,ye=l;let h=be===null?0:Math.max(0,Math.min(.5,u-be)),g=be!==null&&u-be>3&&!r;be=u;let v=Fe&&re(P).quietOnPhone===!0&&H>=Math.max(Ee,vt+2.5)&&Ft();if(Z=l?0:K||!l&&n&&H<xe&&!v?Math.min(1,Z+h/Ge):Math.max(0,Z-h/2),(!U||K)&&(H+=h*(K?1:Z*Z*(3-2*Z))),J=Number(a)||0,Re=Array.isArray(o)?o:[0,0],I&&me&&s?.position&&!_){let e=Vt().elevation,t=ct!==null&&Math.abs(e-ct)<.001;ct=e;let n=Math.abs(e-me.elevation)>2*Math.PI/180;t&&n&&(me=Vt(),Ht(),Ut(),_e=null,Yt(0),Qe=!1,dt++),ht=n&&!t}(K||n&&!l&&(!m||g))&&(l||!n?(Zt(),K=!1):Xt(H));let y=Array.isArray(i)?i:[],x=y.join(`\0`);x!==Ae&&(Ae=x,y.length===1&&!l&&Qt(y,H)),r&&Bt(H);let S=at!==null&&G!==null&&!_;S&&(H=G+at,T.uLow.value=0);let C=l||!n,E=!C&&H<xe&&!v&&!S;if(T.uTime.value=H,T.uBaked.value=+!!Ft(),re(P).look.ring&&!C){let e=ie(H);T.uRing.value.set(e.r,e.a)}else T.uRing.value.set(0,0);if(T.uReveal.value=C?Math.min(1,Math.max(0,(u-(ze??=u))/Je)):1,C||(ze=null),L){let e=Math.cos(J),t=Math.sin(J),[n,r]=Re,i=e,a=-t,o=-n*e+r*t+n,c=t,l=e,u=-n*t-r*e+r,[d,f]=L.right,[p,m]=L.away,h=1/L.scale,[g,_]=L.centre;T.uQx.value.set((d*i+f*c)*h,(d*a+f*l)*h,(d*(o-g)+f*(u-_))*h),T.uQy.value.set((p*i+m*c)*h,(p*a+m*l)*h,(p*(o-g)+m*(u-_))*h);let v=Number.isFinite(I?.bounds?.floorY)?I.bounds.floorY:0;T.uFloorY.value=v;let y=Math.max(.001,I?.bounds?.radius??L.scale*2);if(O.scale.setScalar(y*80),O.position.set(I?.bounds?.center?.[0]??0,v,I?.bounds?.center?.[2]??0),s?.isCamera&&q?.width>0){let e=new b(I?.bounds?.center?.[0]??0,v,I?.bounds?.center?.[2]??0),t=e.clone().project(s),n=e.clone().add(new b(L.right[0],0,L.right[1]).multiplyScalar(L.scale)).project(s),r=Math.hypot((n.x-t.x)*q.width/2,(n.y-t.y)*q.height/2);Number.isFinite(r)&&r>0&&(T.uPxU.value=r/174),T.uRes.value.set(q.width,q.height)}}if(L&&!Qe&&(nn()&&(W=!0),(r||(G===null?Me>2:H-G>Ee-G))&&(Qe=!0)),T.uAuxOn.value>.5&&Q){let e=C?0:Math.min(v?Z:1,Math.max(0,(xe-H)/3));Oe(Q,H,yt).forEach(([t,n,r],i)=>T.uFigL.value[i].set(t,n,r*e))}else for(let e of T.uFigL.value)e.z=0;if(U=S||!E&&Z<=0&&H>=Ee,W=!1,k&&e.renderer&&s?.isCamera&&q?.width>0&&!_t){let t=!U||r;if(t&&Number.isFinite(f)&&lt===`auto`){let t=A.guard;if((r?se:A).sample(f,{paceMs:r?0:Lt()*1e3,hintMs:Number(e.bestIntervalMs)||null,delayMs:Number.isFinite(e.requestDelayMs)?e.requestDelayMs:null,continued:fe&&pe===r}),ut=mt(A.getState()),pt(),A.guard&&!t&&lt===`auto`){ue=!0,xe=Math.min(xe,H);try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-comfort`))}catch{}}}else t||(A.pause(),se.pause());fe=t,pe=r,r||se.pause(),O.material!==k.viewMaterial&&(O.material=k.viewMaterial);try{le=k.update(e.renderer,s,O,{width:q.width,height:q.height,want:t?lt===`auto`?r?Math.min(A.step.scale,se.step.scale):A.step.scale:It().scale:1})}catch(e){throw O.material=w,le=`failed`,e}j&&clearTimeout(j),j=setTimeout(()=>{j=0,M||k.release()},Ze)}else O.material!==w&&(O.material=w);if(k){let e=k.getState(),t=A.getState(),n=se.getState();ot={plate:P,scale:e.scale,size:e.size,hz:+(1/Lt()).toFixed(1),moving:!U||r,draws:e.draws,level:t.level,levels:He.length,reason:t.reason,tier:ft(),dragLevel:n.level,dragReason:n.reason,bestMs:t.bestMs??n.bestMs,guard:ue,at:d}}return rt=rt*.9+(it()-d)*100,Pe&&=(clearTimeout(Pe),0),U||Rt(),!0},needsFrame(){return!M&&(W||ht||ye&&T.uReveal.value<1)},reset(){K=!0,W=!0},release(){if(M)return!0;j&&=(clearTimeout(j),0),k?.release();for(let e of[Dt.near,Dt.aux,$.a,$.b,$.c])e?.dispose();return!0},getState(){return{kind:`gravur`,version:5,plate:P?re(P).id:null,sign:F,stones:R?.lights.length??0,motifs:R?.motifs.length??0,frames:Me,createdAt:Tt,firstFrameAt:Ne,painted:he,paintMs:V,uploads:ge,texture:Et.near?[Et.near.width,Et.near.height]:null,aux:T.uAuxOn.value>.5,clock:G===null?1e4:+(H-G).toFixed(3),entranceSeconds:G===null?0:+(Ee-G).toFixed(3),settled:U,pace:+Z.toFixed(3),motionUntil:xe,playing:ve,reducedMotion:ye,phone:Fe,solo:Ae?Ae.split(`\0`):[],reveal:T.uReveal.value,frame:L?{ex:+L.ex.toFixed(3),ey:+L.ey.toFixed(3),scale:+L.scale.toFixed(4)}:null,pxU:+T.uPxU.value.toFixed(3),drawCalls:1,baked:T.uBaked.value===1,bakes:At,bakeMs:kt,lowCost:qe,frameMs:+(Ue*1e3).toFixed(1),frameJsMs:+rt.toFixed(3),tileHeld:Qe,relayouts:dt,figureLight:!!Q,framing:rn(),plateCache:k?{...k.getState(),last:le}:null,ladder:A?A.getState():null,dragLadder:se?se.getState():null,plateHz:+(1/Lt()).toFixed(1),comfortStill:ue}},dispose(){if(!M){M=!0,gt.delete(wt),k?.dispose(),j&&clearTimeout(j),Pe&&clearTimeout(Pe),B&&clearTimeout(B),jt&&clearTimeout(jt),C.parent?.remove(C),O.geometry.dispose(),w.dispose(),T.uNear.value?.dispose?.(),T.uAux.value?.dispose?.(),T.uNoise.value?.dispose?.();for(let e of Object.values(Dt))e?.dispose();for(let e of Object.values($))e?.dispose();for(let e of Object.values(Mt))e?.dispose()}}}}export{vt as _,Z as a,Ke as c,Je as d,Tt as f,yt as g,$e as h,X as i,st as l,wt as m,Ze as n,Qe as o,Ct as p,Ge as r,Ye as s,Xe as t,qe as u,mt as v,ht as y};