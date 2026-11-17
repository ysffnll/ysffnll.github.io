import{$r as e,Hn as t,Ja as n,L as r,Qi as i,Rn as a,V as o,Wi as s,Yt as c,ar as l,do as u,ea as d,ft as f,io as p,ir as m,jr as h,mt as g,no as _,pa as v,qt as y,ro as b,rr as x,ta as S}from"./three.core-Dp-eO7LC.js";import{a as C,c as w,i as T,o as E,r as D,s as O,t as k}from"./motifs-PB8xVykP.js";import{n as A,t as ee}from"./figure-370721CT.js";import{a as te,c as ne,d as re,f as ie,h as ae,l as oe,m as se,n as j,o as ce,p as le,r as ue,s as de,u as fe}from"./plates-4snShn1q.js";import{_ as pe,d as me,h as he,l as ge,m as _e,o as ve,p as ye,v as be}from"./stage-tuner-BCNLKv7g.js";var xe=(e,t,n,r,i,a,o=26)=>{let s=Math.hypot(n-e,r-t),c=Math.atan2(r-t,n-e),l=[];for(let n=1;n<=o;n++){let r=i*T*n/o;l.push([e+s*Math.exp(-a*r)*Math.cos(c-r),t+s*Math.exp(-a*r)*Math.sin(c-r)])}return l},M=(...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]),Se=Object.freeze({water:(()=>{let e=C([0,.1],[.26,.1],[.3,.88],[.54,.88],16),t=C([.54,.88],[.77,.88],[.86,.62],[.71,.48],12),n=xe(.63,.62,.71,.48,1.25,.2,30);return{lines:[{p:M(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.3},{p:C([.17,.1],[.36,.12],[.38,.64],[.55,.7],12),w:.5,k:.6},{p:C([.33,.1],[.45,.14],[.47,.46],[.6,.5],10),w:.4,k:.6,tone:1}],fill:M(e,t,[[.71,.48],[.74,.3],[.76,.1]]),dots:[[.83,.8,.028],[.89,.7,.022],[.9,.86,.018]]}})(),fire:(()=>{let e=C([0,.1],[.17,.12],[.13,.64],[.33,.93],14),t=C([.33,.93],[.42,1.06],[.6,1.02],[.57,.86],10),n=xe(.5,.86,.57,.86,1.1,.3,18),r=C([.57,.85],[.63,.62],[.5,.36],[.76,.1],14);return{lines:[{p:M(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.2},{p:r,w:.9,k:.55},{p:C([.2,.12],[.27,.4],[.27,.64],[.41,.76],12),w:.55,k:.6,tone:1},{p:C([.86,.1],[.93,.22],[.9,.36],[.98,.46],8),w:.45,k:.6,tone:1}],fill:M(e,t,[[.57,.86]],r),dots:[]}})(),earth:(()=>{let e=C([.04,.1],[.08,.86],[.92,.86],[.96,.1],22),t=C([.19,.1],[.23,.6],[.77,.6],[.81,.1],16),n=C([.33,.1],[.37,.37],[.63,.37],[.67,.1],12),r=Array.from({length:17},(e,t)=>{let n=t*T/16;return[.5+.045*Math.cos(n),.2+.03*Math.sin(n)]});return{lines:[{p:e,w:1.15,k:.5,swell:.25},{p:t,w:.65,k:.55},{p:n,w:.45,k:.6,tone:1}],fill:e,fill2:r,dots:[[0,.44,.024],[0,.6,.016],[.5,.97,.016]]}})(),air:(()=>{let e=C([0,.1],[.36,.1],[.4,.6],[.63,.66],16),t=xe(.66,.5,.63,.66,1.35,.13,34);return{lines:[{p:M(e,[e[e.length-1],...t]),w:1.05,k:.45,swell:.2},{p:C([.66,.82],[.82,.9],[1,.78],[1.22,.84],14),w:.45,k:.8,tone:1},{p:C([.8,.3],[.92,.34],[1.06,.26],[1.24,.3],12),w:.4,k:.8}],fill:M(e,[[.63,.66],[.8,.5],[.8,.1]]),dots:[]}})()});function Ce(e,t,{width:n=.085/D,gap:r=.006/D,lift:i=.045/D}={}){let a=new Map(e.motifs.map(e=>[e.id,e.slot])),o=e.parts.filter(e=>e.stone.stone).map(e=>({id:e.stone.id,element:e.stone.element,a:Math.atan2(e.q[1],e.q[0]),rho:Math.hypot(...e.q),rg:e.r}));if(o.length<3)return null;o.sort((e,t)=>e.a-t.a);let s=0,c=-1;for(let e=0;e<o.length;e++){let t=((o[(e+1)%o.length].a-o[e].a)%T+T)%T||T;t>c&&(c=t,s=(e+1)%o.length)}let l=o.slice(s).concat(o.slice(0,s)),u=[];l.forEach((e,t)=>{let n=e.a;if(t)for(;n<=u[t-1];)n+=T;u.push(n)});let d=0;for(let e of l)a.has(e.id)&&(d=a.get(e.id)),e.slot=a.get(e.id)??d;let f=l.length,p=n*t.ornament,m=i*t.backRoom,h=l.map(e=>2*Math.asin(E(e.rg/Math.max(e.rho,1e-6),0,1))).sort((e,t)=>e-t),g=Math.max(.001,Math.min(T/f,(h[Math.floor(f/2)]??T/f)*1.04)),_=e.parts.filter(e=>!e.stone.stone).map(e=>Math.atan2(e.q[1],e.q[0])),v=[];for(let e=0;e<=720;e++){let n=e*T/720,i=0,a=0;for(let e of l){let t=Math.abs(((n-e.a+Math.PI)%T+T)%T-Math.PI),r=Math.exp(-((t/.5)**2));i+=r,a+=r*(e.rho+e.rg*.92)}v.push(a/i+r*t.ornament+m*Math.max(0,Math.sin(n))**1.5)}let y=e=>{let t=(e%T+T)%T/T*720,n=Math.floor(t);return O(v[n],v[Math.min(720,n+1)],t-n)},b=(e,t)=>{let n=y(e)+t*p;return[n*Math.cos(e),n*Math.sin(e)]},x=(e,t)=>{let n=E(Math.round(e-.5),0,f-1);return b(u[n]+(e-n-.5)*g,t)},S=v.map(e=>[e,e+1.4*p]);return{S:l,n:f,W:p,at:x,atA:b,wave:(e,t,n)=>b(u[e]+(t-.5)*g,n),span:g,marks:_,sizes:l.map(()=>+(g*(y(u[0])+.5*p)).toFixed(5)),inner:Math.min(...S.map(e=>e[0])),outer:Math.max(...S.map(e=>e[1]))}}function we(e,t,n={}){if(!t)return!1;let{S:r,n:i,at:a,atA:o=null,wave:s=null}=t,c=n.enamel??.45,l=n.guil??.2;for(let t=0;t<i;t++){let i=r[t],o=ie(i.slot),u=Se[i.element]??Se.water,d=(e,n)=>s?s(t,e,n):a(t+e,n),f=e=>e.map(([e,t])=>d(e,t));n.band&&e.fill([d(0,-.02),d(1.04,-.02),d(1.04,1.06),d(0,1.06)],{code:o,channel:`g`,alpha:n.band});for(let t=0;t<16;t++){let n=(t+.5)/16;e.line([0,.25,.5,.75,1.04].map(e=>d(n+.06*Math.sin(e*6.3+t*.5),e)),.42,l,{code:o})}u.fill&&c>0&&e.fill(f(u.fill),{code:o,channel:`g`,alpha:c}),u.fill2&&c>0&&e.fill(f(u.fill2),{code:o,channel:`rg`,alpha:Math.min(1,c*1.6)});for(let t of u.lines){let n=f(t.p),r=n.length;e.ribbon(n,n.map((e,n)=>{let i=n/(r-1);return Math.max(.28,t.w*1.05*Math.sin(Math.PI*E(i*.96+.02))**+t.k*(1+(t.swell||0)*Math.sin(Math.PI*i)))}),.95,{code:o})}i.element!==`air`&&e.star(d(.97,.9),2.6,.85,4,.3,{code:o});for(let[t,n,r]of u.dots??[])e.dot(d(t,n),r*34,.85,{code:o})}let u=o??((e,t)=>a(e/T*i,t)),d=Math.max(96,i*8),f=Math.max(24,i*3),p=(t,n,r)=>{let i=[];for(let e=0;e<=d;e++)i.push(u(e*T/d,t));e.line(i,n,r,{code:oe.FIELD})};p(.1,.55,.7),p(-.05,.5,.55),p(-.13,.45,.4),p(1.06,.8,.95),p(1.16,.8,.8),p(1.4,.5,.55);for(let t=0;t<f;t++)e.dot(u((t+.5)*T/f,1.28),1.05*(t%2?.8:1.15),.85);for(let n of t.marks??[]){let r=u(n,.55),i=.2*t.W,a=[];for(let e=0;e<=32;e++){let t=e*T/32;a.push([r[0]+i*Math.cos(t),r[1]+i*Math.sin(t)])}e.line(a,.6,.8,{code:oe.FIELD}),e.dot(r,1.3,.8)}return!0}Object.freeze([`frieze`,`motifs`,`band`]);function Te(e,t=10){let n=[],r=e.length;for(let i=0;i<r;i++){let a=e[(i-1+r)%r],o=e[i],s=e[(i+1)%r],c=e[(i+2)%r];for(let e=0;e<t;e++){let r=e/t,i=r*r,l=i*r;n.push([0,1].map(e=>.5*(2*o[e]+(-a[e]+s[e])*r+(2*a[e]-5*o[e]+4*s[e]-c[e])*i+(-a[e]+3*o[e]-3*s[e]+c[e])*l)))}}return n}function Ee(e,{strand:t,plate:n,motifs:r,frame:i,mode:a=n.ornament??`frieze`}){if(a===`frieze`&&i){let r=Ce(t,i);if(r&&we(e,r,n.frieze??{}))return{form:`frieze`,band:[r.inner,r.outer],sizes:r.sizes}}if(a!==`band`||t.motifs.length<3){for(let e of t.motifs)r.draw(le(e),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:ie(e.slot)});return{form:`motifs`,sizes:t.motifs.map(e=>+e.scale.toFixed(5))}}let o=t.motifs,s=.1,c=Te(o.map(e=>[e.base[0]+e.out[0]*s*.5,e.base[1]+e.out[1]*s*.5]),12),l=e=>{let t=c[(e-1+c.length)%c.length],n=c[(e+1)%c.length],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1;return[(n[1]-t[1])/r,-(n[0]-t[0])/r]},u=l(0)[0]*o[0].out[0]+l(0)[1]*o[0].out[1]<0?-1:1,d=(e,t)=>{let[n,r]=l(e);return[c[e][0]+n*t*u,c[e][1]+r*t*u]};return o.forEach((t,i)=>{let a=i*12-6,o=Array.from({length:13},(e,t)=>(a+t+c.length)%c.length),f=ie(t.slot);for(let t of[-.1/2,s/2])e.line(o.map(e=>d(e,t)),.7,n.motif.alpha,{code:f});for(let e of[3,9]){let a=o[Math.round(e)],[d,p]=l(a),m=[d*u,p*u],h=[c[a][0]-m[0]*s*.35,c[a][1]-m[1]*s*.35];r.draw(w((k[t.element]??k.water)(i),h,m,t.scale*.45),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:f,widthScale:.7})}}),{form:`band`}}var De=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.2),N=(...e)=>e.reduce((e,t,n)=>e.concat(n?t.slice(1):t),[]),P=(e,t,n=10)=>Array.from({length:n+1},(r,i)=>[e[0]+(t[0]-e[0])*i/n,e[1]+(t[1]-e[1])*i/n]),Oe=(e,t,n,r=0,i=40,a=1)=>Array.from({length:i+1},(o,s)=>{let c=r+a*T*s/i;return[e+n*Math.cos(c),t+n*Math.sin(c)]}),F=(e,t=.012,n=.045)=>({p:e,w:De(e.length-1,t,n)}),I=e=>e.map(([e,t])=>[-e,t]),L=e=>e.map(([e,t])=>[-e,-t]);function R(){let e=N(C([-.215,-.13],[-.27,.26],[.02,.52],[.19,.4],30),C([.19,.4],[.36,.27],[.3,.02],[.15,-.12],26),C([.15,-.12],[.03,-.24],[.08,-.46],[.3,-.42],26),C([.3,-.42],[.44,-.4],[.5,-.3],[.43,-.22],16)),t=e.length;return{p:e,w:e.map((e,n)=>{let r=n/(t-1);return .012+.05*Math.sin(Math.PI*E((r-.04)/.78))**1.3+.012*Math.exp(-(((r-.97)/.05)**2))})}}var z=()=>N(P([-.4,-.42],[-.4,.28]),C([-.4,.28],[-.4,.46],[-.16,.46],[-.16,.28],14),P([-.16,.28],[-.16,-.42])),ke=Object.freeze({aries:()=>[F(N(P([0,-.48],[0,-.05],12),C([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),C([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))),F(I(N(C([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),C([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))))],taurus:()=>[F(Oe(0,-.17,.23,Math.PI/2,48),.02,.03),F(C([-.44,.46],[-.3,.04],[.3,.04],[.44,.46],30))],gemini:()=>[F(C([-.36,.44],[-.12,.34],[.12,.34],[.36,.44],20),.014,.03),F(C([-.36,-.44],[-.12,-.34],[.12,-.34],[.36,-.44],20),.014,.03),F(C([-.15,.37],[-.19,.1],[-.19,-.1],[-.15,-.37],20)),F(C([.15,.37],[.19,.1],[.19,-.1],[.15,-.37],20))],cancer:()=>{let e=N(Oe(-.18,.12,.1,-Math.PI/2,30,-1),C([-.18,.22],[0,.36],[.28,.32],[.4,.14],20));return[F(e,.012,.04),F(L(e),.012,.04)]},leo:()=>[R()],virgo:()=>[F(z()),F(N(C([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),P([.08,.28],[.08,-.2]),C([.08,-.2],[.08,-.5],[.42,-.48],[.36,-.16],16),C([.36,-.16],[.3,.08],[.04,-.06],[.2,-.46],16)))],libra:()=>[F(P([-.42,-.32],[.42,-.32],20),.016,.02),F(N(P([-.42,-.02],[-.17,-.02],8),C([-.17,-.02],[-.32,.46],[.32,.46],[.17,-.02],30),P([.17,-.02],[.42,-.02],8)))],scorpius:()=>[F(z()),F(N(C([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),P([.08,.28],[.08,-.3]),C([.08,-.3],[.08,-.48],[.3,-.48],[.42,-.3],16))),F(N(P([.27,-.33],[.42,-.3],6),P([.42,-.3],[.4,-.15],6)),.012,.02)],sagittarius:()=>[F(P([-.4,-.4],[.4,.4],30)),F(N(P([.1,.4],[.4,.4],8),P([.4,.4],[.4,.1],8)),.014,.025),F(P([-.25,.05],[.05,-.25],10),.012,.025)],capricorn:()=>[F(N(C([-.44,.32],[-.36,.3],[-.28,-.2],[-.2,-.4],16),C([-.2,-.4],[-.12,-.1],[-.04,.34],[.06,.34],16),C([.06,.34],[.16,.34],[.12,-.1],[.18,-.26],16),C([.18,-.26],[.24,-.46],[.46,-.38],[.4,-.18],14),C([.4,-.18],[.34,0],[.14,-.06],[.14,-.24],14),C([.14,-.24],[.14,-.44],[0,-.52],[-.1,-.46],12)))],aquarius:()=>[.14,-.2].map(e=>F(N(...[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]].slice(0,4).map((t,n,r)=>{let i=[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]];return C([i[n][0],i[n][1]+e],[i[n][0]+.07,i[n][1]+e+(n%2?-.03:.05)],[i[n+1][0]-.07,i[n+1][1]+e+(n%2?.05:-.03)],[i[n+1][0],i[n+1][1]+e],10)})),.012,.035)),pisces:()=>[F(C([-.46,.44],[-.18,.26],[-.18,-.26],[-.46,-.44],34),.012,.05),F(C([.46,.44],[.18,.26],[.18,-.26],[.46,-.44],34),.012,.05),{p:Array.from({length:13},(e,t)=>[-.25+.5*t/12,.015*Math.sin(Math.PI*t/12)]),w:De(12,.016,.014)}]}),Ae=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.1),je=Object.freeze({scorpius:()=>{let e=N(C([-.62,.28],[-.56,.36],[-.48,.36],[-.46,.26],8),C([-.46,.26],[-.46,.1],[-.46,-.2],[-.46,-.42],12)),t=N(C([-.46,.16],[-.38,.42],[-.18,.42],[-.15,.16],12),C([-.15,.16],[-.15,0],[-.15,-.2],[-.15,-.42],10)),n=N(C([-.15,.16],[-.07,.42],[.13,.42],[.16,.16],12),C([.16,.16],[.16,-.1],[.14,-.36],[.32,-.42],12),C([.32,-.42],[.44,-.45],[.52,-.36],[.56,-.22],8));return[{p:e,w:Ae(e.length-1,.03,.07)},{p:t,w:Ae(t.length-1,.03,.08)},{p:n,w:Ae(n.length-1,.03,.08)},{p:[[.56,-.2],[.43,-.24]],w:[.06,.02]},{p:[[.56,-.2],[.6,-.34]],w:[.06,.02]}]},leo:()=>{let e=R();return[{p:e.p.map(([e,t])=>[e*1.5-.18,t*1.5-.07]),w:e.w.map(e=>e*1.5)}]},pisces:()=>ke.pisces().map(e=>({p:e.p.map(([e,t])=>[e*1.05,t*1.05]),w:e.w.map(e=>e*1.05)}))}),Me=e=>je[e]??ke[e]??null;Object.freeze(Object.keys(ee));function Ne(e,t){let n=e.ey+3.4,r=A(t,.03)?.GEO.box;return{centre:[0,n],S:1.74,k:2.1,spacing:.022,...r?{box:r}:{}}}function Pe(e){let{centre:[t,n],S:r,k:i}=e,[a,o,s,c]=e.box??[-1.35,-.85,1.35,.85],l=.06;return[t+(a-l)*r,n+(o-l)*r*i,t+(s+l)*r,n+(c+l)*r*i]}Object.freeze({phone:{top:.125,gap:.015,width:.94},wide:{top:.1,gap:.025,width:.62}});function Fe(e,{sign:t,frame:n,place:r=Ne(n,t),figure:i=!0}){let a=Me(t);a&&(i&&Ie(e,{sign:t,place:r}),Le(e,{glyph:a,frame:n}))}function Ie(e,{sign:t,place:n}){let r=A(t,n.spacing);if(r){let{F:t,GEO:i}=r,{centre:[a,o],S:s,k:c}=n,l=([e,t])=>[a+e*s,o+t*s*c],[u,d,f,p]=i.box,m=(u+f)/2,h=(d+p)/2,g=(f-u)/2,_=(p-d)/2;for(let t=Math.ceil((u-m)/.25)*.25;t<=g;t+=.25){let n=[];for(let e=-_;e<=_+1e-6;e+=.05)n.push([m+t+.04*e*e,h+e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(g*.92))**4)))}for(let t=Math.ceil((d-h)/.25)*.25;t<=_;t+=.25){let n=[];for(let e=-g;e<=g+1e-6;e+=.05)n.push([m+e,h+t+.03*e*e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(_*.82))**4)))}let v=(t,n)=>{let r=t.pts.map(l),i=r.length;i<2||(t.closed?e.line(r,t.w,n,{close:!0}):e.ribbon(r,r.map((e,n)=>Math.max(.25,t.w*Math.sin(Math.PI*E(n/(i-1)*.96+.02))**+t.k)),n))};for(let t of i.parts){let n=t.P,r=n.alpha??1;for(let n of t.runs)e.ribbon(n.pts.map(l),n.wd.map(e=>Math.max(.3,e*1.25)),.85*r);for(let[n,i,a]of t.dots)e.dot(l([n,i]),a*.62,.85*r);for(let e of t.extra)v(e,.95*r);for(let n of t.olRuns)e.ribbon(n.pts.map(l),n.w.map(e=>e*1.25),r);for(let e of i.strokes)e.after===n.id&&v(e,e.a)}for(let e of i.strokes)e.after||v(e,e.a);let y=t.stars.map(([e,t])=>l([e,t]));for(let[n,r]of t.edges??[])e.line([y[n],y[r]],.6,.42);t.stars.forEach(([,,t],n)=>{let r=E(3.8-t,.8,3)*2.6;e.star(y[n],r*1.35,1,t<2?8:t<3?6:4,.2),t<1.8&&e.line(Array.from({length:25},(e,t)=>{let i=t*T/24,a=r*2.1/(D*600);return[y[n][0]+a*Math.cos(i),y[n][1]+a*Math.sin(i)]}),.55,.55)})}return!!r}function Le(e,{glyph:t,frame:n}){let r=.085/D*n.ornament,i=[0,.03/D*n.ornament],a=(e,t=120)=>Array.from({length:t+1},(n,r)=>{let a=r*T/t;return[i[0]+e*Math.cos(a),i[1]+e*Math.sin(a)]});e.line(a(r),1.1,.85),e.line(a(r*1.12),.5,.6),e.line(a(r*.88),.45,.45);for(let t=0;t<36;t++){let n=t*T/36,a=r*.88,o=r*(t%3==0?.8:.84);e.line([[i[0]+a*Math.cos(n),i[1]+a*Math.sin(n)],[i[0]+o*Math.cos(n),i[1]+o*Math.sin(n)]],.45,.5)}let o=r*.62,s=e=>e*o*D*600*1.1;e.glyph(t().map(e=>({p:e.p.map(([e,t])=>[i[0]+e*o,i[1]+t*o]),w:e.w})),e=>e.w.map(s))}var Re=Object.freeze({period:15,window:12,samples:[-16,-8,0,8,16],gain:.5}),B=[[-18.3,-3.2],[-16.8,-.2],[-15,1.6],[-12.9,2.6],[-8.4,3.8],[-3.8,4.2],[.6,5.6],[4,10.4],[8,11.4],[12,10.6],[15.2,8]].map(([e,t])=>[(e+2)/19,(t+1)/19]);Object.freeze({scorpius:{glow:[`body`,`tail`,`telson`]},leo:{glowLine:B},pisces:{glow:[`cordW`,`cordN`]}});function ze(e,t,n=[]){let{period:r,window:i,samples:a,gain:o}=Re;if(!e?.length){for(let e=0;e<a.length;e++)n[e]=[0,0,0];return n}let s=e.length,c=t/r%1*(s+40)-20;return a.forEach((t,r)=>{let a=c+t,l=Math.max(0,Math.min(s-1,Math.round(a))),u=+(a>=0&&a<=s-1);n[r]=[e[l][0],e[l][1],u*o*Math.exp(-((t/i)**2))]}),n}function Be(e,{sign:t,place:n}){let r=A(t,n.spacing);if(!r)return!1;let{centre:[i,a],S:o,k:s}=n,c=([e,t])=>[i+e*o,a+t*o*s];for(let t of r.GEO.parts)(t.P.alpha??1)<.7||e.fill(t.geo.outline.map(c),{channel:`g`,alpha:1,only:`aux`});return!0}function Ve({plate:e,frame:t,strand:n,mood:r,sign:i=null,place:a=void 0,near:o,aux:s=null,ornament:c=void 0}){let l=fe({near:o,aux:s}),u=Object.freeze({draw(e,{alpha:t=1,enamel:n=.3,widthScale:r=1,code:i=0}={}){for(let a of e)a.fill&&n>0&&l.fill(a.q,{code:i,channel:`g`,alpha:n}),a.close?l.line(a.q,a.w*1.25*r,t,{code:i,close:!0}):l.taper(a.q,a.w*1.9*r,t,.5,{code:i})}});e.paint(l,{frame:t,strand:n,mood:r,motifs:u});let d=Ee(l,{strand:n,plate:e,motifs:u,frame:t,mode:c});return i&&Fe(l,{sign:i,frame:t,figure:!!(s&&a),...a?{place:a}:{}}),i&&s&&a&&Be(l,{sign:i,place:a}),{strokes:l.strokes,ornament:d.form,band:d.band??null,sizes:d.sizes??null}}var V=Object.freeze([3.2,4.2]),H=`
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
`;function U(e){let t=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) c = ground${e.glslId}(p);`).join(`
      `),n=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) f = field${e.glslId}(p);`).join(`
      `);return`
  varying vec3 vWorld;
  uniform float uFloorY;
  ${H}
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
      // SAHNE A-7: inside the plate's reach, or beyond it (the ground's plain tone only).
      float reach = 1. - smoothstep(${V[0].toFixed(2)}, ${V[1].toFixed(2)}, p.rho);
      bool near = reach > 0.;
      // A real loop with a uniform bound (GLSL ES 3): the compiler does not unroll it, so the program compiles fast.
      int count = uBaked > .5 || !near ? 0 : min(int(uStoneCount + .5), MAXS);
      // Perf: the wash's two noise fields are read only by the loop (six noise reads a pixel saved once baked).
      float n1 = 0., n2 = 0.;
      if (count > 0) { n1 = fbm3(p.q * 1.74); n2 = fbm3(p.q * 1.74 + 7.3); }
      if (uBaked > .5 && near) {
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
      vec3 plain = c;
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
      // The near texture's place and its screen derivative are taken here, in uniform control flow (before the branch).
      vec2 nuv = nearUV(p.q);
      vec2 nfw = fwidth(nuv) * vec2(textureSize(uNear, 0));
      if (near) {
      // The texture's far edge is never stretched to the horizon: lines fade out before it.
      float edgeN = 1. - smoothstep(.95, .99, max(abs(nuv.x - .5), abs(nuv.y - .5)) * 2.);
      vec4 tn = texture2D(uNear, nuv) * edgeN;
      // Bloom is the line texture's own blur (mip bias). Far away, where one pixel already covers many texels, the
      // biased mips average the whole compressed far band into a haze that showed as a bright arc on the dark plates
      // ending at the texture's edge: the bloom fades out there (it belongs to lines one can see, near the piece).
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
      }
      // SAHNE A-7: the drawing ends softly into the ground's plain tone (computed above for every pixel).
      col = mix(plain, c, reach);
      // The place beyond: on a dark plate the far ground fades into its own dark before the horizon; a light plate (paper,
      // Hava) keeps its own plain tone to the horizon and past it (no grey or blue band).
      float horizon = smoothstep(0., .1, -dir.y);
      float darkPlate = step(.5, uLook.x);
      col = mix(mix(plain, plain * .35, darkPlate), col, horizon);
      col = mix(mix(plain, vec3(.01, .01, .014), darkPlate), col, smoothstep(-.002, .004, -dir.y));
    }
    // Vignette (the designer's, on the stage) and a static dither against banding.
    float v = smoothstep(1.2, .2, length((sq - vec2(.5, .48)) * vec2(1.08, .95)));
    // SAHNE A-7: on a light plate (paper, Hava) the vignette is a breath, so the far ground stays the ground's white.
    col *= mix(1., v, uLook.x > .5 ? .5 : .18);
    col += (h21(gl_FragCoord.xy) - .5) / 255.;
    gl_FragColor = vec4(toLinear(col), 1.);
    #include <colorspace_fragment>
  }
`}var He=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,W=1.35,G=.02;function Ue(e,t){let n=0,r=.5;for(let i=0;i<3;i++){n+=r*de(e,t);let i=1.6*e-1.2*t+3.1,a=1.2*e+1.6*t+1.7;e=i,t=a,r*=.5}return n/.875}function We(e,t=()=>performance.now()){if(!e?.length)return null;let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t of e){let e=Math.max(W,8*Math.max(t.r,.02));n=Math.min(n,t.x-e),i=Math.max(i,t.x+e),r=Math.min(r,t.y-e),a=Math.max(a,t.y+e)}let o=Math.max(8,Math.min(256,Math.ceil((i-n)/G))),s=Math.max(8,Math.min(256,Math.ceil((a-r)/G))),c=new Float32Array(o*s*4),l=new Float32Array(o*s*4),u=new Float32Array(o*s*4),d=e.map((e,t)=>{let n=Math.max(e.r,.02),r=t*2.399;return{...e,r:n,glowK:1/(n*n*6.3),ck:Math.cos(r),sk:Math.sin(r),reach2:Math.max(W,8*n)**2,refl:[0,1,2].map(t=>e.color[t]+(e.glow[t]-e.color[t])*.3)}}),f=0,p={width:o,height:s,result:null,step(e=6){let m=t()+e;for(;f<s;f++){if(f&&t()>m)return!1;let e=f,p=r+(e+.5)/s*(a-r);for(let t=0;t<o;t++){let r=n+(t+.5)/o*(i-n),a=null,s=null,f=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;for(let e of d){let t=r-e.x,n=p-e.y,i=t*t+n*n;if(i>e.reach2)continue;let o=Math.exp(-i*e.glowK);f+=e.glow[0]*o,m+=e.glow[1]*o,h+=e.glow[2]*o,a===null&&(a=Ue(r*1.74,p*1.74),s=Ue(r*1.74+7.3,p*1.74+7.3));let c=(e.ck*a+e.sk*s-.5*(e.ck+e.sk))*.45,l=Math.sqrt(i)+c*.4,u=Math.exp(-l*l*7.65);g+=e.glow[0]*u,_+=e.glow[1]*u,v+=e.glow[2]*u,y+=u;let d=t/(e.r*.95),C=(n+e.r*1.55)/(e.r*1.25),w=Math.exp(-(d*d+C*C));b+=e.refl[0]*w,x+=e.refl[1]*w,S+=e.refl[2]*w}let C=(e*o+t)*4,w=1/Math.max(y,.001);c[C]=f,c[C+1]=m,c[C+2]=h,c[C+3]=y,l[C]=g*w,l[C+1]=_*w,l[C+2]=v*w,l[C+3]=1,u[C]=b,u[C+1]=x,u[C+2]=S,u[C+3]=1}}return p.result={rect:[n,r,i,a],width:o,height:s,a:c,b:l,c:u},!0}};return p}var Ge=`
  varying vec4 vClip;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vClip = gl_Position;
  }
`,Ke=`
  uniform sampler2D uCache;
  varying vec4 vClip;
  void main() {
    vec2 uv = vClip.xy / vClip.w * .5 + .5;
    gl_FragColor = vec4(texture2D(uCache, uv).rgb, 1.);
    #include <colorspace_fragment>
  }
`,qe=new Set([`uTime`,`uRing`,`uFigL`,`uReveal`]);function Je(){let e=-2128831035,t=t=>{e=Math.imul(e^(Math.round(Number(t)*4096)|0),16777619),e=Math.imul(e^(Math.round(Number(t)*4096%1*1e6)|0),16777619)},n=e=>{if(e==null)return t(-7);if(typeof e==`number`||typeof e==`boolean`)return t(+e);if(e.isTexture)t(e.id),t(e.version);else if(Array.isArray(e)){t(e.length);for(let t of e)n(t)}else if(e.elements)for(let n of e.elements)t(n);else typeof e.x==`number`?(t(e.x),t(e.y),typeof e.z==`number`&&t(e.z),typeof e.w==`number`&&t(e.w)):t(-9)};return{value:n,num:t,get:()=>e}}function Ye({plateMaterial:e,geometry:t,createTarget:r}={}){let o=new d;o.name=`gravur-plate-cache`;let s=new l(t,e);s.name=`gravur-plate-source`,s.frustumCulled=!1,s.matrixAutoUpdate=!1,o.add(s);let c=typeof r==`function`?r:(e,t)=>{let r=new u(e,t,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:a,magFilter:a,type:n});return r.texture.colorSpace=i,r.texture.name=`gravur-plate-cache`,r},f=null,p=null,m=null,h=0,g=0,_=0,v=1,y=!1,b=[0,0],x=new S({name:`gravur-plate-view`,vertexShader:Ge,fragmentShader:Ke,uniforms:{uCache:{value:null}},side:1,depthWrite:!1,fog:!1,toneMapped:!1});function C(t,n,r,i){let a=Je(),o=Je();for(let[t,n]of Object.entries(e.uniforms))t!==`uRes`&&t!==`uPxU`&&(a.value(n.value),qe.has(t)||o.value(n.value));for(let s of[a,o])s.value(t.matrixWorld),s.value(t.projectionMatrix),s.value(n.matrixWorld),s.num(r),s.num(i),s.num(e.version);return[a.get(),o.get()]}return{viewMaterial:x,update(t,n,r,{width:i,height:a,want:l=1,clockStep:u=!0}={}){if(y||!t||!n||!(i>0&&a>0))return`kept`;r.updateMatrixWorld?.();let d=Math.max(1,Math.round(i*l)),S=Math.max(1,Math.round(a*l)),[w,T]=C(n,r,d,S);if(f&&w===p)return g++,`kept`;if(f&&!u&&T===m&&d===b[0]&&S===b[1])return _++,`held`;f?(f.width!==d||f.height!==S)&&f.setSize(d,S):f=c(d,S);let E=e.uniforms,D=E.uRes.value.clone(),O=E.uPxU.value,k=d/i;E.uRes.value.set(d,S),E.uPxU.value=O*k,s.matrix.copy(r.matrixWorld),s.matrixWorld.copy(r.matrixWorld);let A=t.getRenderTarget(),ee=t.autoClear;try{t.autoClear=!1,t.setRenderTarget(f),t.render(o,n)}finally{t.autoClear=ee,t.setRenderTarget(A),E.uRes.value.copy(D),E.uPxU.value=O}return x.uniforms.uCache.value=f.texture,p=w,m=T,b=[d,S],v=l,h++,`drawn`},invalidate(){p=null,m=null},getState(){return{scale:v,size:[...b],draws:h,skips:g,held:_,bytes:b[0]*b[1]*4}},release(){f?.dispose(),f=null,p=null,m=null,x.uniforms.uCache.value=null,b=[0,0]},dispose(){y||(y=!0,f?.dispose(),f=null,x.dispose(),o.remove(s))}}}var K=Object.freeze({maxSecondary:4,minShare:.1,texels:640,fade:.12,top:{phone:.125,wide:.1},overlap:.22,height:[.16,.42],width:{alone:.8,beside:.5}});function Xe(e,t=[]){if(!e||!ee[e])return[];let n=t.find(t=>t.id===e)?.share??1,r=t.filter(t=>t.id!==e&&ee[t.id]&&t.share>=K.minShare).slice(0,K.maxSecondary);return[{sign:e,share:n,lead:!0},...r.map(e=>({sign:e.id,share:e.share,lead:!1}))]}function q(e,t){let n=Math.min(1,Math.max(0,e/Math.max(t,1e-6)));return{size:.38+.37*n,opacity:.45+.4*n}}var J=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }
`,Ze=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    vec4 t = texture2D(uMap, vUv);
    gl_FragColor = vec4(t.rgb, t.a * uOpacity);
    #include <colorspace_fragment>
  }
`;function Qe(e,{createCanvas:t,metal:n=[214,170,96],texels:r=K.texels}={}){let i=A(e,.022);if(!i||typeof t!=`function`)return null;let a={centre:[0,0],S:1,k:1,spacing:.022,box:i.GEO.box},o=Pe(a),s=(o[2]-o[0])/(o[3]-o[1]),c=s>=1?r:Math.round(r*s),l=s>=1?Math.round(r/s):r,u=t(c,l)?.getContext?.(`2d`,{alpha:!1,willReadFrequently:!0});if(!u)return null;let d=fe({aux:{ctx:u,width:c,height:l,rect:o}});if(Ie(d,{sign:e,place:a}),Be(d,{sign:e,place:a}),typeof u.getImageData!=`function`)return null;let f=u.getImageData(0,0,c,l).data,p=new Uint8Array(c*l*4),m=K.fade,h=e=>{let t=Math.min(e,1-e)/m;return t>=1?1:t<=0?0:t*t*(3-2*t)};for(let e=0;e<l;e++){let t=h((e+.5)/l),r=(l-1-e)*c;for(let i=0;i<c;i++){let a=(e*c+i)*4,o=(r+i)*4,s=Math.min(1,f[a]/255+f[a+1]/255*.1)*t*h((i+.5)/c);p[o]=n[0],p[o+1]=n[1],p[o+2]=n[2],p[o+3]=Math.round(s*255)}}return{data:p,width:c,height:l,aspect:c/l}}function $e({group:n,createCanvas:r}){let o=new h(1,1),s=Array.from({length:1+K.maxSecondary},(e,t)=>{let r=new S({name:`gravur-figure-${t}`,vertexShader:J,fragmentShader:Ze,uniforms:{uMap:{value:null},uOpacity:{value:1}},transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1}),i=new l(o,r);return i.name=`gravur-figure-${t}`,i.visible=!1,i.frustumCulled=!1,i.renderOrder=2,i.matrixAutoUpdate=!0,n.add(i),{mesh:i,material:r,figure:null}}),c=new Map,u=[],d=``,p=0,m=[];function g(n,o){let s=`${n}|${o.join(`,`)}`;if(c.has(s))return c.get(s);let l=Qe(n,{createCanvas:r,metal:o});if(!l)return c.set(s,null),null;let u=new f(l.data,l.width,l.height,e);u.colorSpace=i,u.generateMipmaps=!0,u.minFilter=t,u.magFilter=a,u.needsUpdate=!0;let d={texture:u,aspect:l.aspect};return c.set(s,d),p++,d}let _=new b,v=new b,y=new b,x=new b;return{setFigures(e,t=[214,170,96]){let n=JSON.stringify([e.map(e=>[e.sign,e.share,e.lead]),t]);return n!==d&&(d=n,u=e,s.forEach((e,n)=>{let r=u[n]??null,i=r?g(r.sign,t):null;e.figure=r&&i?{...r,aspect:i.aspect}:null,e.material.uniforms.uMap.value=i?.texture??null,e.mesh.visible=!1}),!0)},place({camera:e,viewport:t,centre:n,radius:r,box:i,phone:a=!1,opacity:o=1}){m=[];let c=s[0].figure;if(!c||!e?.isCamera||!(t?.cssWidth>0)||!(r>0)||!i){for(let e of s)e.mesh.visible=!1;return!1}let l=t.cssWidth,u=t.cssHeight||l;e.updateMatrixWorld(),e.getWorldPosition(y),e.getWorldDirection(v),x.fromArray(n);let d=x.clone().sub(y).dot(v)+r*1.08+.002,f=(t,n,r)=>(_.set(t/l*2-1,1-n/u*2,.5).unproject(e).sub(y).normalize(),r.copy(y).addScaledVector(_,d/Math.max(_.dot(v),1e-4))),p=s.slice(1).some(e=>e.figure),h=u*(a?K.top.phone:K.top.wide),[g,S]=K.height,C=Math.min(u*S,Math.max(u*g,(i.top-h)/(1-K.overlap)));C=Math.min(C,l*(p?K.width.beside:K.width.alone)/c.aspect);let w=(i.left+i.right)/2,T=i.top+K.overlap*C-C/2,E=[{quad:s[0],cx:w,cy:T,h:C,opacity:o}],D=[w+C*c.aspect/2,w-C*c.aspect/2];s.slice(1).forEach((e,t)=>{if(!e.figure)return;let n=q(e.figure.share,c.share),r=C*n.size,i=r*e.figure.aspect,a=t%2?1:0,s=C*.06,u=a?D[1]-s-i/2:D[0]+s+i/2;D[a]=a?u-i/2:u+i/2,u=Math.min(l-i/2-4,Math.max(i/2+4,u)),E.push({quad:e,cx:u,cy:T+(C-r)*.3,h:r,opacity:o*n.opacity})});let O=new b,k=new b,A=new b;for(let e of s)e.mesh.visible=!1;for(let t of E){let{mesh:n,material:r,figure:i}=t.quad;f(t.cx,t.cy,A),f(t.cx,t.cy-t.h/2,O),f(t.cx,t.cy+t.h/2,k);let a=O.distanceTo(k);!Number.isFinite(a)||a<=0||(n.position.copy(A),n.quaternion.copy(e.quaternion),n.scale.set(a*i.aspect,a,1),n.updateMatrixWorld(!0),r.uniforms.uOpacity.value=t.opacity,n.visible=!0,m.push({sign:i.sign,lead:i.lead,share:i.share,opacity:+t.opacity.toFixed(3),screen:{left:+(t.cx-t.h*i.aspect/2).toFixed(1),right:+(t.cx+t.h*i.aspect/2).toFixed(1),top:+(t.cy-t.h/2).toFixed(1),bottom:+(t.cy+t.h/2).toFixed(1)},depth:+d.toFixed(5)}))}return m.length>0},hide(){for(let e of s)e.mesh.visible=!1;m=[]},getState(e=null){let t=new b;return e?.isCamera&&e.getWorldDirection(t),{drawn:p,figures:m.map((n,r)=>{let i=s.find(e=>e.figure?.sign===n.sign)?.mesh,a=null;if(i&&e?.isCamera){let e=new b(0,0,1).applyQuaternion(i.quaternion);a=+(Math.acos(Math.min(1,Math.max(-1,-e.dot(t))))*180/Math.PI).toFixed(3)}let o=i?new b(0,1,0).applyQuaternion(i.quaternion):null,c=e?.isCamera?new b(0,1,0).applyQuaternion(e.quaternion):null;return{...n,facingDeg:a,upright:o&&c?+o.dot(c).toFixed(4):null,index:r}})}},release(){for(let e of c.values())e?.texture.dispose()},dispose(){for(let e of c.values())e?.texture.dispose();c.clear();for(let e of s)e.material.dispose(),n.remove(e.mesh);o.dispose()}}}var Y=Object.freeze([Object.freeze({scale:1,every:1}),Object.freeze({scale:.8,every:1}),Object.freeze({scale:.65,every:1}),Object.freeze({scale:.5,every:1}),Object.freeze({scale:.5,every:2}),Object.freeze({scale:.4,every:3})]),X=Object.freeze({window:6,lateShare:.8,floorMs:1e3/30,gapMs:2e3,upAfterMs:2e3,failBackMs:1500,guardMs:3e3,storageKey:`jew-studio.gravur-ladder.v1`}),et=e=>{let t=[...e].sort((e,t)=>e-t);return t.length?t[Math.floor(t.length/2)]:0};function tt({storage:e=null,startLevel:t=null,maxLevel:n=Y.length-1,name:r=`motion`,guardAllowed:i=!0,defaultLevel:a=0,minStartLevel:o=0}={}){let s=`${X.storageKey}.${r}`,c=Math.min(Y.length-1,n),l=()=>{try{let t=JSON.parse(e?.getItem?.(s)??`null`);return Number.isInteger(t?.level)?t.level:a}catch{return a}},u=e=>Math.max(0,Math.min(c,e)),d=u(Math.max(Number.isInteger(t)?t:l(),o)),f=0,p=d?`remembered level ${d}`:`start`,m=[],h=[],g=0,_=0,v=-1,y=0,b=1/0,x=!1,S=0,C=()=>{try{e?.setItem?.(s,JSON.stringify({level:d}))}catch{}};function w(e,t){return e=u(e),e!==d&&(d=e,p=t,m=[],h=[],g=0,_=0,S++,C(),!0)}return{get level(){return d},get step(){return Y[d]},get guard(){return x},sample(e,{paceMs:t=0,hintMs:n=null,delayMs:r=null,continued:a=!0,limit:o=c,guardOk:s=!0}={}){if(!Number.isFinite(e)||e<=0)return!1;if(!a||e>X.gapMs)return m=[],h=[],!1;if(y+=e,m.push(e),m.length>X.window&&m.shift(),Number.isFinite(r)&&(h.push(r),h.length>X.window&&h.shift()),m.length<X.window)return!1;let l=et(m);b=Math.min(b,l,Number.isFinite(n)&&n>0?n:1/0);let u=Math.max(t,X.floorMs),C=Number.isFinite(n)&&n>0?n:X.floorMs,T=h.length<X.window||et(h)>C*1.5+4,E=u/X.lateShare,D=[...m].sort((e,t)=>e-t)[Math.floor(m.length/4)],O=l>E&&(T||l>u*1.6||D>E),k=Math.max(0,Math.min(c,o)),A=d>=k&&h.length>=X.window&&et(h)>C*1.5+4;if(O||A)return g=0,v>=0&&y-v<X.failBackMs&&(f=Math.max(f,d+1)),v=-1,d<k?w(d+1,`late: ${l.toFixed(0)} ms against ${u.toFixed(0)} ms`):(_+=e,i&&s&&d===c&&!x&&_>=X.guardMs?(x=!0,p=`guard: still ${l.toFixed(0)} ms${O?``:`, requests held ${et(h).toFixed(0)} ms`} at the last level`,S++,!0):!1);if(_=0,g+=e,g>=X.upAfterMs&&d>f){let e=w(d-1,`headroom: ${l.toFixed(0)} ms against ${u.toFixed(0)} ms`);return v=y,e}return!1},setLevel(e,t=`set`){let n=w(e,t);return f=0,v=-1,n},pause(){m=[],h=[],g=0,_=0},getState(){return{level:d,scale:Y[d].scale,every:Y[d].every,ceiling:f,guard:x,reason:p,bestMs:Number.isFinite(b)?+b.toFixed(1):null,changes:S}}}}var nt=3;function rt(){try{return globalThis.matchMedia?.(`(pointer: coarse)`)?.matches===!0&&Math.min(globalThis.screen?.width??1e4,globalThis.screen?.height??1e4)<700}catch{return!1}}var it=25,at=3,ot=2,st=.6,ct=1/30,lt=2.5,ut=3,dt=Object.freeze({lead:.25,span:1.9,perStone:.12,rimDelay:.2,rim:.6,motif:1.2}),ft=.6,pt=2048,mt=1024,ht=6e3,gt=.05,_t=.036;function vt(e,t=0){let n=Math.min(dt.span,Math.max(0,e-1)*dt.perStone),r=Array.from({length:e},(r,i)=>t+dt.lead+(e>1?n*i/(e-1):0)),i=t+dt.lead+n+dt.rimDelay,a=i+dt.rim;return{inkAt:r,rimAt:i,waveAt:a,fullAt:i-.3,end:a+2.4}}var yt=e=>e.map(e=>e/255),bt=e=>[1,3,5].map(t=>parseInt(String(e).slice(t,t+2),16)/255||0);function xt(e,t){if(typeof document<`u`&&document.createElement){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}return typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):null}function St(){let e=new f(new Uint8Array([0,0,0,255]),1,1);return e.colorSpace=``,e.needsUpdate=!0,e}function Ct(){let e=new f(ce(),256,256);return e.colorSpace=``,e.wrapS=e.wrapT=s,e.magFilter=a,e.minFilter=a,e.generateMipmaps=!1,e.needsUpdate=!0,e}var wt=()=>(typeof performance<`u`?performance.now():Date.now())/1e3,Tt=null,Et=null,Dt=Object.freeze([`auto`,`canli`,`dengeli`,`hafif`]),Ot=`jew-studio.gravur-tier.v1`,Z=(()=>{try{let e=globalThis.localStorage?.getItem(Ot);return Dt.includes(e)?e:`auto`}catch{return`auto`}})(),kt=`canli`,At=``,jt=()=>me()?.config({moving:!0})?.lowered?Z===`auto`?`sahne bu cihaza göre hafifletildi`:`cihaz yetişemediği için seçtiğinin biraz altında`:null,Mt=null,Nt=()=>Mt===null?null:`sahne ${Mt?`hareketli`:`sabit`}${me()?.config({moving:!0})?.pieceLowered?`, bu cihaza göre hafifletildi`:``}`,Pt=()=>({chosen:Z,recommended:kt,effective:Z===`auto`?kt:Z,tuned:jt(),now:Nt()});function Ft(){let e=Pt(),t=`${e.chosen}/${e.recommended}/${e.effective}/${e.tuned}/${e.now}`;if(t!==At){At=t;try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-tier`,{detail:e}))}catch{}}}function It(e){if(!Dt.includes(e))throw RangeError(`Unknown Atmosfer tier: ${e}`);Z=e;try{globalThis.localStorage?.setItem(Ot,e)}catch{}Ft();for(let e of Bt)e();return Pt()}function Lt(){return Pt()}function Rt(e){return e?.guard?`hafif`:e?.level>0?`dengeli`:`canli`}function zt(){return Et}var Bt=new Set,Vt=!1;function Ht(e){Vt=e===!1;for(let e of Bt)e()}var Ut=Object.freeze({flat:!1,level:null,tier:null,frozen:!1,awake:!1}),Q={...Ut};function Wt(e=null){Q={...Ut,...e??{}},Q.level!==null&&!Y[Q.level]&&(Q.level=null),Q.tier!==null&&!Dt.includes(Q.tier)&&(Q.tier=null);for(let e of Bt)e();return{...Q}}function Gt(){return{...Q}}function $(e){Tt=Number.isFinite(e)?e:null;for(let e of Bt)e()}var Kt=null,qt=e=>e?.cssWidth?`${Math.round(e.cssWidth)}x${Math.round(e.cssHeight)}`:``;function Jt(){try{let e=globalThis.document?.querySelector?.(`#scene-stage canvas`);if(e?.clientWidth>0)return{cssWidth:e.clientWidth,cssHeight:e.clientHeight,width:e.width,height:e.height}}catch{}return null}function Yt(){let e=Array.from({length:48},()=>new p(0,0,.1,-1e4)),t=Array.from({length:48},()=>new p),n=Array.from({length:48},()=>new p),r={uTime:{value:0},uPlateUnit:{value:2.684},uPlate:{value:0},uStoneCount:{value:0},uPxU:{value:1},uStrength:{value:1},uReveal:{value:1},uSolo:{value:-1},uQx:{value:new b(1,0,0)},uQy:{value:new b(0,-1,0)},uMetal:{value:new b(.9,.8,.6)},uLeaf:{value:new b(.9,.8,.6)},uEnamel:{value:new b(.8,.3,.2)},uLightCol:{value:new b(1,.92,.75)},uEllipse:{value:new _(1,1)},uRing:{value:new _(0,0)},uLow:{value:0},uRes:{value:new _(1,1)},uFloorY:{value:0},uStoneA:{value:e},uStoneB:{value:t},uStoneC:{value:n},uEntrance:{value:new p(-1e4,-1e4,-1e4,dt.motif)},uRim:{value:new p(-Math.PI/2,1,1.35,1.55)},uLook:{value:new p},uLook2:{value:new p(1,.45,1,.95)},uLook3:{value:new p},uNear:{value:St()},uAux:{value:St()},uNearWarp:{value:new p(1.6,1,1.6,1)},uNearT:{value:new _(2.6,2.6)},uAuxRect:{value:new p(-1,-1,1,1)},uAuxOn:{value:0},uH0:{value:new x},uFig:{value:new p(0,4,1,2)},uFigL:{value:Array.from({length:Re.samples.length},()=>new b)},uFigStar:{value:Array.from({length:24},()=>new p)},uFigStars:{value:0},uFigTint:{value:new b(1,.8,.6)},uLoops:{value:1},uShares:{value:new p(.25,.25,.25,.25)},uPig:{value:[new b(.8,.8,.8),new b(.8,.8,.8),new b(.8,.8,.8),new b(.8,.8,.8)]},uBaked:{value:0},uBakeRect:{value:new p(0,0,1,1)},uBakeA:{value:St()},uBakeB:{value:St()},uBakeC:{value:St()},uEarthBand:{value:[0,1,2,3].map(()=>new p(2,2,0,0))},uClouds:{value:Array.from({length:40},()=>new p)},uCloudB:{value:Array.from({length:40},()=>new p)},uCloudCount:{value:0},uNoise:{value:Ct()}},i=e=>Array.isArray(e)?new[null,null,_,b,p][e.length]().fromArray(e):e;for(let e of j)for(let[t,n]of Object.entries(e.defaults??{}))r[t]??={value:i(n)};return new S({name:`gravur-plate`,vertexShader:He,fragmentShader:U(j),uniforms:r,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function Xt(){let e=new l(new h(.001,.001),Yt());return e.name=`gravur-plate-warm`,e.frustumCulled=!1,e}function Zt(n={}){let{scene:i,camera:s,registerNativeGroup:u}=n,d=typeof n.requestFrame==`function`?n.requestFrame:()=>{},h=typeof n.createCanvas==`function`?n.createCanvas:xt,_=n.offscreen===!0,x=Number.isInteger(n.nearTexels)&&n.nearTexels>=256?Math.min(pt,n.nearTexels):pt;if(!i?.isScene||typeof u!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let S=new y;S.name=`atmosphere-gravur`;let C=Yt(),w=C.uniforms,T=w.uStoneA.value,E=w.uStoneB.value,D=w.uStoneC.value,O=new l(new v(1,48,24),C);O.name=`gravur-plate`,O.renderOrder=-10,O.frustumCulled=!1,S.add(O);let k=_?null:$e({group:S,createCanvas:h}),A=_?null:Ye({plateMaterial:C,geometry:O.geometry}),ie=null;try{ie=_?null:globalThis.localStorage??null}catch{}let oe=({defaultLevel:e=0,minStartLevel:t=0}={})=>{j=tt({storage:ie,name:`motion`,defaultLevel:e,minStartLevel:t}),ce=tt({storage:ie,name:`drag`,maxLevel:3,guardAllowed:!1,defaultLevel:e,minStartLevel:t})},j=null,ce=null;_||oe(),j&&(kt=Rt(j.getState()),Ft());let le=`none`,de=!1,fe=0,me=!1,xe=!1,M=null,Se=!1;function Ce(){let e=he(ie),t=rt();oe({defaultLevel:!e&&t&&Z===`auto`?3:0,minStartLevel:e?.failed?3:0}),de=!1,M=ye({storage:ie,phone:t,handTier:Z!==`auto`,deviceRatio:be()??(Number(globalThis.devicePixelRatio)||1)}),kt=Rt(j.getState()),Ft()}function we(){M&&(M=null,Se=!1,Ee=null,Mt=null,Te&&=(clearTimeout(Te),0),ge(),pe(!1),Ft())}let Te=0,Ee=null;function De(){Te&&clearTimeout(Te),Te=setTimeout(()=>{Te=0,!(P||!M||Q.frozen)&&M.probePlate()&&(an(B),d())},ve.probeQuietMs)}function N(){let e=M.levels.plate===1;if(Ee===1&&!e&&(j.setLevel(Y.length-1,`probe: cheapest motion`),ce.setLevel(3,`probe`)),e&&Ee===0&&(V=Math.min(V,B),mn(),G=!1),Ee=+!!e,M.takeComfort())try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-comfort`))}catch{}return e}i.add(S),u(S);let P=!1,Oe=null,F=null,I=null,L=null,R=null,z=null,ke=null,Ae=null,je=0,Ne=0,Pe=0,Fe=0,Ie=null,Le=!1,Re=!1,B=0,Be=null,V=0,H=!0,U=!0,He=0,W=null,G=!0,Ue=``,Ge=0,Ke=null,qe=0,Je=!1,K=-1,q=null,J=0,Ze=[0,0],Qe=null,X=null,et=null,nt=1/30,it=!1,at=1,ot=!1,lt=null,ut=0,mt=``,gt=null,_t=0,St=!1,Ct=0,Dt=!1,Ot=null,At=-1e4,jt=[],Nt=()=>{P||(U=!0,H=!1,d())};_||Bt.add(Nt);let It=typeof performance<`u`?performance.now():0,Lt={near:null,aux:null},zt={near:null,aux:null},Ht=null,Ut=0,Wt=0,Gt=0,$={a:null,b:null,c:null},Xt={a:w.uBakeA.value,b:w.uBakeB.value,c:w.uBakeC.value};function Zt(){let e=z?.lights.length??0,t=[];for(let n=0;n<e;n++){let e=T[n],r=E[n],i=D[n];t.push({x:e.x,y:e.y,r:e.z,glow:[r.x,r.y,r.z],color:[i.x,i.y,i.z]})}let n=JSON.stringify(t.map(e=>[e.x,e.y,e.r,e.glow,e.color]));if(n===Ht)return;Ht=n,w.uBaked.value=0,Ut=0,w.uBakeA.value=Xt.a,w.uBakeB.value=Xt.b,w.uBakeC.value=Xt.c;for(let e of[`a`,`b`,`c`])$[e]?.dispose(),$[e]=null;Gt&&clearTimeout(Gt);let r=We(t);if(!r)return;let i=()=>{if(Gt=0,P||Ht!==n)return;let e=wt(),t=r.step(6);Ut+=(wt()-e)*1e3,t?Qt(r.result):Gt=setTimeout(i,16)};Gt=setTimeout(i,0)}function Qt(t){for(let n of[`a`,`b`,`c`]){let r=t[n],i=new Uint16Array(r.length);for(let e=0;e<r.length;e++)i[e]=g.toHalfFloat(r[e]);let s=new f(i,t.width,t.height,e,c);s.colorSpace=``,s.magFilter=s.minFilter=a,s.generateMipmaps=!1,s.wrapS=s.wrapT=o,s.needsUpdate=!0,$[n]=s}w.uBakeA.value=$.a,w.uBakeB.value=$.b,w.uBakeC.value=$.c,w.uBakeRect.value.fromArray(t.rect),Wt++,Ut=Math.round(Ut),U=!0}function $t(){if(!$.a||w.uEntrance.value.z>B-2.3)return!1;let e=z?.lights.length??0;for(let t=0;t<e;t++)if(B-T[t].w<8)return!1;return!0}let en=()=>{if(Q.level!==null)return Y[Q.level];let e=Z;return e===`auto`?j.step:e===`dengeli`?Y[4]:Y[0]},tn=()=>ct*(j?en().every:1);function nn(e=Math.max(0,tn()-(wt()-K)-.013)){qe||P||(qe=setTimeout(()=>{qe=0,!(P||H)&&(d(),wt()-K>.15&&nn(.2))},e*1e3))}let rn=(e,t)=>e?.chosen&&!X?te(e.plate).id:t&&ee[t]?`sign`:e?.elementPlate??(e?.plate===`sign`?null:e?.plate)??`atlas`;function an(e=B){de||(V=Math.max(V,e+25)),H=!1,U=!0}function on(){if(!s?.position)return{toward:[0,1],elevation:24*Math.PI/180};let e=L?.bounds?.center??[0,0,0],t=s.position.x-e[0],n=s.position.y-(L?.bounds?.floorY??0),r=s.position.z-e[2],i=Math.cos(-J),a=Math.sin(-J);return{toward:[t*i+r*a,-t*a+r*i],elevation:Math.atan2(n,Math.hypot(t,r)||1e-6)}}function sn(){if(!L)return!1;let e=L.kind===`necklace`?`necklace`:`bracelet`;if(ke&&Ae===e||(ke=on(),Ae=e),R=se(L.stones??[],{kind:e,view:ke}),!R)return z=null,w.uStoneCount.value=0,!1;let t=te(F);return z=ae(L.stones,R,{motifScale:t.motif.scale}),w.uEllipse.value.set(R.ex,R.ey),w.uPlateUnit.value=R.scale,w.uRim.value.set(z.rimStart,z.rimDirection,t.rim[0],t.rim[1]),w.uStoneCount.value=z.lights.length,z.lights.forEach((e,t)=>{let n=T[t].w;T[t].set(e.q[0],e.q[1],e.r,n);let[r,i,a]=bt(e.glow),[o,s,c]=bt(e.color);E[t].set(r,i,a,e.elementIndex),D[t].set(o,s,c,0)}),!0}function cn(){let e=te(F);w.uPlate.value=ue[e.id],w.uMetal.value.fromArray(yt(e.metal)),w.uLeaf.value.fromArray(yt(e.leaf)),w.uEnamel.value.fromArray(yt(e.enamel)),w.uLightCol.value.fromArray(yt(e.light));let t=e.look;w.uLook.value.set(t.dark,t.bloom,t.sheen,t.sheenGain),w.uLook2.value.set(1,t.tint,1,t.lineAlpha),w.uLook3.value.set(t.reflect,t.heat,t.wave,1);let n=L?.mood?.shares??{};w.uShares.value.set(n.water??0,n.fire??0,n.earth??0,n.air??0);let r={water:null,fire:null,earth:null,air:null};for(let e of L?.stones??[])e.stone&&e.element&&!r[e.element]&&(r[e.element]=bt(e.color));[`water`,`fire`,`earth`,`air`].forEach((e,t)=>w.uPig.value[t].fromArray(r[e]??[.8,.8,.8]));for(let[t,n]of Object.entries(e.uniforms({mood:L?.mood,frame:R,strand:z,sign:I})??{})){let e=w[t];e&&(Array.isArray(e.value)&&Array.isArray(n)?e.value.forEach((e,t)=>{n[t]&&e.fromArray(n[t])}):e.value?.fromArray?e.value.fromArray(n):e.value=n)}}function ln(e,n){let i=zt[e];return i&&i.image===n||(i?.dispose(),i=new r(n),i.colorSpace=``,i.flipY=!1,i.generateMipmaps=!0,i.minFilter=t,i.magFilter=a,i.anisotropy=8,i.wrapS=i.wrapT=o,zt[e]=i),i.needsUpdate=!0,Fe++,i}function un(e,t,n){let r=Lt[e];return r&&r.width===t&&r.height===n||(r=Lt[e]=h(t,n)),r}function dn(){if(je=0,P||!R||!z)return;let e=JSON.stringify([Oe,F,I,R.centre,R.right,R.scale,R.ex,R.ey]);if(e===Ie)return;let t=wt(),n=te(F),r=re(R,{texels:x}),i=un(`near`,r.width,r.height),a=i?.getContext?.(`2d`,{alpha:!1});if(!a){Ie=e;return}let o=I&&Me(I)?I:null;k?.setFigures(Xe(o&&ee[o]?o:null,L?.mood?.signs??[]),n.metal),Zt();let s=Ve({plate:n,frame:R,strand:z,mood:L?.mood,sign:o,place:null,near:{ctx:a,layout:r},aux:null});gt=s.sizes??null,s.band&&(w.uRim.value.z=s.band[0]-.02,w.uRim.value.w=Math.max(n.rim[1],s.band[1]+.02)),w.uNear.value=ln(`near`,i),w.uNearWarp.value.set(r.ax,r.bx,r.ay,r.by),w.uNearT.value.set(r.Tx,r.Ty),w.uAuxOn.value=0,lt=null,Ie=e,Ne++,Pe=Math.round((wt()-t)*1e3),mt=``,U=!0,d()}function fn(e=0){je||P||(je=setTimeout(dn,e))}function pn(e){let t=z?.lights.length??0,n=vt(t,e);for(let e=0;e<48;e++)T[e].w=e<t?n.inkAt[e]:-1e4;w.uEntrance.value.set(n.rimAt,n.waveAt,n.fullAt,dt.motif),W=e,He=n.end,G=!1,ot=!1,Ct++,an(e)}function mn(){for(let e of T)e.w=-1e4;w.uEntrance.value.set(-1e4,-1e4,-1e4,dt.motif),He=B}function hn(e,t){let n=new Set(e);z?.lights.forEach((e,r)=>{n.has(e.id)&&(T[r].w=t+.12)}),At=t,an(t)}let gn=new p,_n=[new p,new p,new p],vn=new m;function yn(){if(!R||!s?.isCamera)return!1;s.updateMatrixWorld?.(),vn.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse);let e=L?.bounds?.floorY??0,t=Math.cos(J),n=Math.sin(J),[r,i]=Ze,a=(e,a)=>{let o=R.centre[0]+(R.right[0]*e+R.away[0]*a)*R.scale,s=R.centre[1]+(R.right[1]*e+R.away[1]*a)*R.scale;return[(o-r)*t+(s-i)*n+r,-(o-r)*n+(s-i)*t+i]},[o,c]=a(0,0),[l,u]=a(1,0),[d,f]=a(0,1);_n[0].copy(gn.set(l-o,0,u-c,0)).applyMatrix4(vn),_n[1].copy(gn.set(d-o,0,f-c,0)).applyMatrix4(vn),_n[2].copy(gn.set(o,e,c,1)).applyMatrix4(vn);let[p,m,h]=_n;return[p,m,h].every(e=>Number.isFinite(e.x+e.y+e.w))?(w.uH0.value.set(p.x,m.x,h.x,p.y,m.y,h.y,p.w,m.w,h.w),!0):!1}let bn=new b,xn=new b;function Sn(){if(!s?.isCamera||!q?.cssWidth)return null;let e=q.cssWidth,t=q.cssHeight||e,n=Math.cos(J),r=Math.sin(J),[i,a]=Ze;s.updateMatrixWorld(),xn.set(0,1,0).applyQuaternion(s.quaternion);let o=1/0,c=-1/0,l=1/0,u=-1/0;for(let d of L?.stones??[]){let[f,p,m]=d.position,h=Math.max(0,d.radius??0),g=(f-i)*n+(m-a)*r+i,_=-(f-i)*r+(m-a)*n+a;if(bn.set(g,p,_).project(s),!Number.isFinite(bn.x+bn.y)||bn.z>1)continue;let v=(bn.x+1)/2*e,y=(1-bn.y)/2*t;bn.set(g,p,_).addScaledVector(xn,h).project(s);let b=Math.abs((1-bn.y)/2*t-y);o=Math.min(o,v-b),c=Math.max(c,v+b),l=Math.min(l,y-b),u=Math.max(u,y+b)}return c>o&&u>l?{left:o,right:c,top:l,bottom:u}:null}function Cn(){if(!R||!s?.isCamera||!q?.width)return null;let e=L?.bounds?.floorY??0,t=Math.cos(J),n=Math.sin(J),[r,i]=Ze,a=a=>{let o=1/0,c=-1/0,l=1/0,u=-1/0;for(let d=0;d<64;d++){let f=d*Math.PI*2/64,p=Math.cos(f),m=Math.sin(f),h=Math.hypot(p/R.ex,m/R.ey)||1,g=R.ex*p+p/R.ex/h*a,_=R.ey*m+m/R.ey/h*a,v=R.centre[0]+(R.right[0]*g+R.away[0]*_)*R.scale,y=R.centre[1]+(R.right[1]*g+R.away[1]*_)*R.scale,x=(v-r)*t+(y-i)*n+r,S=-(v-r)*n+(y-i)*t+i,C=new b(x,e,S).project(s);o=Math.min(o,C.x),c=Math.max(c,C.x),l=Math.min(l,C.y),u=Math.max(u,C.y)}return{left:+((o+1)/2).toFixed(3),right:+((c+1)/2).toFixed(3),top:+((1-u)/2).toFixed(3),bottom:+((1-l)/2).toFixed(3)}},o=a(0),c=a(te(F).rim[1]-1);return{loopWidth:+(o.right-o.left).toFixed(3),loop:o,rim:c,rimInside:c.left>=0&&c.right<=1&&c.top>=0&&c.bottom<=1,elevationDeg:+(Math.atan2(s.position.y-e,Math.hypot(s.position.x-(L?.bounds?.center?.[0]??0),s.position.z-(L?.bounds?.center?.[2]??0)))*180/Math.PI).toFixed(1)}}return{setDesign(e){if(P||!e?.mood)return!1;if(e.revisionKey===Oe)return!0;let t=Oe===null,n=L,r=X??(e.mood.signClear?e.mood.sign:null),i=rn(e.mood,r),a=i!==F||r!==I;Oe=e.revisionKey,L=e,F=i,I=r;let o=new Map((n?.stones??[]).map(e=>[e.id,`${e.componentId}`])),s=(e.stones??[]).filter(e=>e.stone&&o.get(e.id)!==`${e.componentId}`).map(e=>e.id),c=new Map(z?.lights.map((e,t)=>[e.id,T[t].w])??[]);sn(),z?.lights.forEach((e,t)=>{T[t].w=c.get(e.id)??-1e4}),cn(),!q&&!_&&(q=Kt??Jt()),fn(0);let l=!!e.mood.chosen&&e.mood.chosen!==n?.mood?.chosen;return t||a&&l?G=!0:a||s.length>4?hn((e.stones??[]).filter(e=>e.stone).map(e=>e.id),B):s.length?hn(s,B):an(B),e.stonesKey,U=!0,!0},setConfiguration(e){if(P)return!1;let t=Number(e?.strength);w.uStrength.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1;let n=typeof e?.qaSign==`string`&&Me(e.qaSign)?e.qaSign:null;if(n!==X){X=n,I=n??(L?.mood?.signClear?L.mood.sign:null);let e=rn(L?.mood,I);e!==F&&(F=e,L&&(sn(),cn()),G=!0),Ie=null,fn()}return U=!0,!0},frame(e={}){if(P)return!1;if(!_&&globalThis.__qaAtmosphereFault===`frame`&&globalThis.document?.getElementById?.(`qa-session-marker`))throw globalThis.__qaAtmosphereFault=null,Error(`QA: Atmosfer karesinde hata`);let{timeSeconds:t=0,playing:n=!1,interacting:r=!1,selectedIds:i=[],productYaw:a=0,productPivot:o=[0,0]}=e;A&&!M&&e.renderer&&Ce();let c=!!(A&&M&&Q.tier===null&&N()),l=A?Q.tier??(c?`hafif`:Pt().effective):`auto`,u=e.reducedMotion===!0||l===`hafif`;q=e.viewport??q,e.viewport&&!_&&(Kt=e.viewport),mt&&mt!==qt(q)&&!je&&(Ie=null,fn(0));let f=Number.isFinite(e.wallSeconds)?e.wallSeconds:wt(),p=wt(),m=K>=0?(p-K)*1e3:null;K=p,Ge++,Ke??=typeof performance<`u`?performance.now():0,Je=Number(q?.cssWidth)>0&&Number(q.cssWidth)<700,w.uRose?.value.set(Je?.86:.14,.9);let h=et===null?1/30:Math.min(.25,Math.max(0,p-et));et=p,nt=nt*.9+h*.1,!it&&nt>.05?it=!0:it&&nt<.036&&(it=!1),w.uLow.value=+!!it;let g=Le;Le=n,Re=u;let v=Be===null?0:Math.max(0,Math.min(.5,f-Be));Be=f,Q.awake&&!_&&(V=Math.max(V,B+1));let y=!(Q.awake&&!_)&&Je&&te(F).quietOnPhone===!0&&B>=Math.max(He,At+2.5)&&$t();if(at=u?0:G||!u&&n&&B<V&&!y?Math.min(1,at+v/st):Math.max(0,at-v/2),(!H||G)&&(B+=v*(G?1:at*at*(3-2*at))),J=Number(a)||0,Ze=Array.isArray(o)?o:[0,0],L&&!Dt&&s?.position&&!_){let e=on(),t=Ot!==null&&Math.abs(e.elevation-Ot.elevation)<.001&&Math.abs(Math.atan2(e.toward[1],e.toward[0])-Math.atan2(Ot.toward[1],Ot.toward[0]))<.001;if(Ot=e,t){Dt=!0;let t=ke?Math.atan2(ke.toward[1],ke.toward[0]):null;(t===null||Math.abs(t-Math.atan2(e.toward[1],e.toward[0]))>.001)&&(ke=e,sn(),cn(),Ie=null,fn(0),ot=!1,_t++)}St=!t}(G||n&&!u&&!g)&&(u||!n?(mn(),G=!1):pn(B));let x=Array.isArray(i)?i:[],S=x.join(`\0`);S!==Ue&&(Ue=S,x.length===1&&!u&&hn(x,B)),r&&an(B);let T=Tt!==null&&W!==null&&!_;T&&(B=W+Tt,w.uLow.value=0);let E=u||!n,D=!E&&B<V&&!y&&!T;if(w.uTime.value=B,w.uBaked.value=+!!$t(),te(F).look.ring&&!E){let e=ne(B);w.uRing.value.set(e.r,e.a)}else w.uRing.value.set(0,0);if(w.uReveal.value=E?Math.min(1,Math.max(0,(f-(Qe??=f))/ft)):1,E||(Qe=null),R){let e=Math.cos(J),t=Math.sin(J),[n,r]=Ze,i=e,a=-t,o=-n*e+r*t+n,c=t,l=e,u=-n*t-r*e+r,[d,f]=R.right,[p,m]=R.away,h=1/R.scale,[g,_]=R.centre;w.uQx.value.set((d*i+f*c)*h,(d*a+f*l)*h,(d*(o-g)+f*(u-_))*h),w.uQy.value.set((p*i+m*c)*h,(p*a+m*l)*h,(p*(o-g)+m*(u-_))*h);let v=Number.isFinite(L?.bounds?.floorY)?L.bounds.floorY:0;w.uFloorY.value=v;let y=Math.max(.001,L?.bounds?.radius??R.scale*2);if(O.scale.setScalar(y*80),O.position.set(L?.bounds?.center?.[0]??0,v,L?.bounds?.center?.[2]??0),s?.isCamera&&q?.width>0){let e=new b(L?.bounds?.center?.[0]??0,v,L?.bounds?.center?.[2]??0),t=e.clone().project(s),n=e.clone().add(new b(R.right[0],0,R.right[1]).multiplyScalar(R.scale)).project(s),r=Math.hypot((n.x-t.x)*q.width/2,(n.y-t.y)*q.height/2);Number.isFinite(r)&&r>0&&(w.uPxU.value=r/174),w.uRes.value.set(q.width,q.height)}}if(k){let e=R&&L?Sn():null,t=w.uEntrance.value.y<-1e3?1:Math.min(1,Math.max(0,(B-w.uEntrance.value.y)/1.2));k.place({camera:s,viewport:q,centre:L?.bounds?.center??[0,0,0],radius:L?.bounds?.radius??0,box:e,phone:Je,opacity:t*(E?w.uReveal.value:1)})}if(R&&!ot&&(yn()&&(U=!0),(r||(W===null?Ge>2:B-W>He-W))&&(ot=!0)),w.uAuxOn.value>.5&&lt){let e=E?0:Math.min(y?at:1,Math.max(0,(V-B)/3));ze(lt,B,jt).forEach(([t,n,r],i)=>w.uFigL.value[i].set(t,n,r*e))}else for(let e of w.uFigL.value)e.z=0;if(H=T||!D&&at<=0&&B>=He,U=!1,_||(O.visible=!Q.flat),A&&e.renderer&&s?.isCamera&&q?.width>0&&!Vt&&!Q.flat){let t=!H||r;M||Ce();let n=me&&xe===r,i=Number.isFinite(e.requestDelayMs)?e.requestDelayMs:null,a=Number(e.bestIntervalMs)||null;if(t&&Number.isFinite(m)&&!Q.frozen?n?M.sample(m,{paceMs:r?0:tn()*1e3,refreshMs:a,delayMs:i,regime:r?`turn`:`plate`,ready:Z!==`auto`||j.level>=3,plateSettled:Z!==`auto`||j.level<=j.getState().ceiling}):M.pause():t||M.pause(),t&&Number.isFinite(m)&&Z===`auto`&&!Q.frozen){let e=j.guard;if((r?ce:j).sample(m,{paceMs:r?0:tn()*1e3,hintMs:a,delayMs:i,continued:n,limit:M.exhausted?Y.length-1:3,guardOk:M.exhausted}),kt=Rt(j.getState()),Ft(),j.guard&&!e&&Z===`auto`){de=!0,V=Math.min(V,B);try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-comfort`))}catch{}}}else t?Ft():(j.pause(),ce.pause());if(pe(t),Se){Se=!1;let e=wt(),t=globalThis.requestAnimationFrame;typeof t==`function`&&t(()=>M?.noteRestFrame((wt()-e)*1e3))}me&&!t&&M.config({moving:!0}).pieceLowered&&M.restFull!==`no`&&!Q.frozen&&(Se=!0,d()),Q.frozen||_e({...M.levels,plate:+!!H},be()??3),c&&!Q.frozen?De():Te&&=(clearTimeout(Te),0),Mt!==!H&&(Mt=!H,Ft()),me=t,xe=r,r||ce.pause(),O.material!==A.viewMaterial&&(O.material=A.viewMaterial);try{le=A.update(e.renderer,s,O,{width:q.width,height:q.height,want:t?Q.level!==null||Z!==`auto`?en().scale:r?Math.min(j.step.scale,ce.step.scale):j.step.scale:1})}catch(e){throw O.material=C,le=`failed`,e}fe&&clearTimeout(fe),fe=setTimeout(()=>{fe=0,P||A.release()},ht)}else O.material!==C&&(O.material=C);if(A){let e=A.getState(),t=j.getState(),n=ce.getState();Et={plate:F,scale:e.scale,size:e.size,hz:+(1/tn()).toFixed(1),moving:!H||r,draws:e.draws,level:t.level,levels:Y.length,reason:t.reason,tier:Pt(),dragLevel:n.level,dragReason:n.reason,bestMs:t.bestMs??n.bestMs,guard:de,at:p}}return ut=ut*.9+(wt()-p)*100,qe&&=(clearTimeout(qe),0),H||nn(),!0},needsFrame(){return!P&&(U||St||Re&&w.uReveal.value<1)},reset(){G=!0,U=!0},release(){if(P)return!0;fe&&=(clearTimeout(fe),0),G=!0,Dt=!1,Ot=null,k?.hide(),k?.release(),we(),A?.release();for(let e of[zt.near,zt.aux,$.a,$.b,$.c])e?.dispose();return!0},getState(){return{kind:`gravur`,version:5,plate:F?te(F).id:null,sign:I,stones:z?.lights.length??0,motifs:z?.motifs.length??0,frames:Ge,createdAt:It,firstFrameAt:Ke,painted:Ne,paintMs:Pe,uploads:Fe,texture:Lt.near?[Lt.near.width,Lt.near.height]:null,aux:w.uAuxOn.value>.5,clock:W===null?1e4:+(B-W).toFixed(3),entranceSeconds:W===null?0:+(He-W).toFixed(3),settled:H,pace:+at.toFixed(3),motionUntil:V,playing:Le,reducedMotion:Re,phone:Je,solo:Ue?Ue.split(`\0`):[],reveal:w.uReveal.value,frame:R?{ex:+R.ex.toFixed(3),ey:+R.ey.toFixed(3),scale:+R.scale.toFixed(4)}:null,pxU:+w.uPxU.value.toFixed(3),drawCalls:1,baked:w.uBaked.value===1,bakes:Wt,bakeMs:Ut,lowCost:it,frameMs:+(nt*1e3).toFixed(1),frameJsMs:+ut.toFixed(3),tileHeld:ot,relayouts:_t,entrances:Ct,figureLight:!!lt,plateAway:R?+Math.atan2(R.away[1],R.away[0]).toFixed(5):null,tileKey:w.uH0.value.elements.slice(0,6).map(e=>+e.toFixed(4)).join(`,`),motifSizes:gt?[...gt]:null,figures:k?k.getState(s):null,framing:Cn(),plateCache:A?{...A.getState(),last:le}:null,ladder:j?j.getState():null,dragLadder:ce?ce.getState():null,plateHz:+(1/tn()).toFixed(1),comfortStill:de,stageTuner:M?M.getState():null}},dispose(){if(!P){P=!0,Bt.delete(Nt),we(),A?.dispose(),fe&&clearTimeout(fe),qe&&clearTimeout(qe),je&&clearTimeout(je),Gt&&clearTimeout(Gt),k?.dispose(),S.parent?.remove(S),O.geometry.dispose(),C.dispose(),w.uNear.value?.dispose?.(),w.uAux.value?.dispose?.(),w.uNoise.value?.dispose?.();for(let e of Object.values(zt))e?.dispose();for(let e of Object.values($))e?.dispose();for(let e of Object.values(Xt))e?.dispose()}}}}export{$ as C,zt as D,It as E,Wt as O,rt as S,Rt as T,Zt as _,dt as a,vt as b,it as c,nt as d,Dt as f,at as g,ut as h,ot as i,Gt as k,pt as l,ft as m,ht as n,gt as o,lt as p,st as r,_t as s,mt as t,ct as u,Yt as v,Ht as w,Lt as x,Xt as y};