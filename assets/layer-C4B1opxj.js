import{d as e}from"./i18n-DU0iMa04.js";import{$r as t,Hn as n,Ja as r,L as i,Qi as a,Rn as o,V as s,Wi as c,Yt as l,ar as u,do as d,ea as f,ft as p,io as m,ir as h,jr as g,mt as _,no as v,pa as y,qt as b,ro as x,rr as S,ta as C}from"./three.core-Dp-eO7LC.js";import{a as w,c as T,i as E,o as D,r as O,s as k,t as A}from"./motifs-PB8xVykP.js";import{n as ee,t as te}from"./figure-370721CT.js";import{a as ne,c as re,d as ie,f as ae,h as oe,l as j,m as se,n as M,o as ce,p as le,r as ue,s as de,u as fe}from"./plates-DhvBq-zD.js";import{_ as pe,d as me,h as he,l as ge,m as _e,o as ve,p as ye,v as be}from"./stage-tuner-BCNLKv7g.js";var N=(e,t,n,r,i,a,o=26)=>{let s=Math.hypot(n-e,r-t),c=Math.atan2(r-t,n-e),l=[];for(let n=1;n<=o;n++){let r=i*E*n/o;l.push([e+s*Math.exp(-a*r)*Math.cos(c-r),t+s*Math.exp(-a*r)*Math.sin(c-r)])}return l},xe=(...e)=>e.reduce((e,t)=>e.concat(e.length?t.slice(1):t),[]),Se=Object.freeze({water:(()=>{let e=w([0,.1],[.26,.1],[.3,.88],[.54,.88],16),t=w([.54,.88],[.77,.88],[.86,.62],[.71,.48],12),n=N(.63,.62,.71,.48,1.25,.2,30);return{lines:[{p:xe(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.3},{p:w([.17,.1],[.36,.12],[.38,.64],[.55,.7],12),w:.5,k:.6},{p:w([.33,.1],[.45,.14],[.47,.46],[.6,.5],10),w:.4,k:.6,tone:1}],fill:xe(e,t,[[.71,.48],[.74,.3],[.76,.1]]),dots:[[.83,.8,.028],[.89,.7,.022],[.9,.86,.018]]}})(),fire:(()=>{let e=w([0,.1],[.17,.12],[.13,.64],[.33,.93],14),t=w([.33,.93],[.42,1.06],[.6,1.02],[.57,.86],10),n=N(.5,.86,.57,.86,1.1,.3,18),r=w([.57,.85],[.63,.62],[.5,.36],[.76,.1],14);return{lines:[{p:xe(e,t,[t[t.length-1],...n]),w:1.25,k:.45,swell:.2},{p:r,w:.9,k:.55},{p:w([.2,.12],[.27,.4],[.27,.64],[.41,.76],12),w:.55,k:.6,tone:1},{p:w([.86,.1],[.93,.22],[.9,.36],[.98,.46],8),w:.45,k:.6,tone:1}],fill:xe(e,t,[[.57,.86]],r),dots:[]}})(),earth:(()=>{let e=w([.04,.1],[.08,.86],[.92,.86],[.96,.1],22),t=w([.19,.1],[.23,.6],[.77,.6],[.81,.1],16),n=w([.33,.1],[.37,.37],[.63,.37],[.67,.1],12),r=Array.from({length:17},(e,t)=>{let n=t*E/16;return[.5+.045*Math.cos(n),.2+.03*Math.sin(n)]});return{lines:[{p:e,w:1.15,k:.5,swell:.25},{p:t,w:.65,k:.55},{p:n,w:.45,k:.6,tone:1}],fill:e,fill2:r,dots:[[0,.44,.024],[0,.6,.016],[.5,.97,.016]]}})(),air:(()=>{let e=w([0,.1],[.36,.1],[.4,.6],[.63,.66],16),t=N(.66,.5,.63,.66,1.35,.13,34);return{lines:[{p:xe(e,[e[e.length-1],...t]),w:1.05,k:.45,swell:.2},{p:w([.66,.82],[.82,.9],[1,.78],[1.22,.84],14),w:.45,k:.8,tone:1},{p:w([.8,.3],[.92,.34],[1.06,.26],[1.24,.3],12),w:.4,k:.8}],fill:xe(e,[[.63,.66],[.8,.5],[.8,.1]]),dots:[]}})()});function Ce(e,t,{width:n=.085/O,gap:r=.006/O,lift:i=.045/O}={}){let a=new Map(e.motifs.map(e=>[e.id,e.slot])),o=e.parts.filter(e=>e.stone.stone).map(e=>({id:e.stone.id,element:e.stone.element,a:Math.atan2(e.q[1],e.q[0]),rho:Math.hypot(...e.q),rg:e.r}));if(o.length<3)return null;o.sort((e,t)=>e.a-t.a);let s=0,c=-1;for(let e=0;e<o.length;e++){let t=((o[(e+1)%o.length].a-o[e].a)%E+E)%E||E;t>c&&(c=t,s=(e+1)%o.length)}let l=o.slice(s).concat(o.slice(0,s)),u=[];l.forEach((e,t)=>{let n=e.a;if(t)for(;n<=u[t-1];)n+=E;u.push(n)});let d=0;for(let e of l)a.has(e.id)&&(d=a.get(e.id)),e.slot=a.get(e.id)??d;let f=l.length,p=n*t.ornament,m=i*t.backRoom,h=l.map(e=>2*Math.asin(D(e.rg/Math.max(e.rho,1e-6),0,1))).sort((e,t)=>e-t),g=Math.max(.001,Math.min(E/f,(h[Math.floor(f/2)]??E/f)*1.04)),_=e.parts.filter(e=>!e.stone.stone).map(e=>Math.atan2(e.q[1],e.q[0])),v=[];for(let e=0;e<=720;e++){let n=e*E/720,i=0,a=0;for(let e of l){let t=Math.abs(((n-e.a+Math.PI)%E+E)%E-Math.PI),r=Math.exp(-((t/.5)**2));i+=r,a+=r*(e.rho+e.rg*.92)}v.push(a/i+r*t.ornament+m*Math.max(0,Math.sin(n))**1.5)}let y=e=>{let t=(e%E+E)%E/E*720,n=Math.floor(t);return k(v[n],v[Math.min(720,n+1)],t-n)},b=(e,t)=>{let n=y(e)+t*p;return[n*Math.cos(e),n*Math.sin(e)]},x=(e,t)=>{let n=D(Math.round(e-.5),0,f-1);return b(u[n]+(e-n-.5)*g,t)},S=v.map(e=>[e,e+1.4*p]);return{S:l,n:f,W:p,at:x,atA:b,wave:(e,t,n)=>b(u[e]+(t-.5)*g,n),span:g,marks:_,sizes:l.map(()=>+(g*(y(u[0])+.5*p)).toFixed(5)),inner:Math.min(...S.map(e=>e[0])),outer:Math.max(...S.map(e=>e[1]))}}function we(e,t,n={}){if(!t)return!1;let{S:r,n:i,at:a,atA:o=null,wave:s=null}=t,c=n.enamel??.45,l=n.guil??.2;for(let t=0;t<i;t++){let i=r[t],o=ae(i.slot),u=Se[i.element]??Se.water,d=(e,n)=>s?s(t,e,n):a(t+e,n),f=e=>e.map(([e,t])=>d(e,t));n.band&&e.fill([d(0,-.02),d(1.04,-.02),d(1.04,1.06),d(0,1.06)],{code:o,channel:`g`,alpha:n.band});for(let t=0;t<16;t++){let n=(t+.5)/16;e.line([0,.25,.5,.75,1.04].map(e=>d(n+.06*Math.sin(e*6.3+t*.5),e)),.42,l,{code:o})}u.fill&&c>0&&e.fill(f(u.fill),{code:o,channel:`g`,alpha:c}),u.fill2&&c>0&&e.fill(f(u.fill2),{code:o,channel:`rg`,alpha:Math.min(1,c*1.6)});for(let t of u.lines){let n=f(t.p),r=n.length;e.ribbon(n,n.map((e,n)=>{let i=n/(r-1);return Math.max(.28,t.w*1.05*Math.sin(Math.PI*D(i*.96+.02))**+t.k*(1+(t.swell||0)*Math.sin(Math.PI*i)))}),.95,{code:o})}i.element!==`air`&&e.star(d(.97,.9),2.6,.85,4,.3,{code:o});for(let[t,n,r]of u.dots??[])e.dot(d(t,n),r*34,.85,{code:o})}let u=o??((e,t)=>a(e/E*i,t)),d=Math.max(96,i*8),f=Math.max(24,i*3),p=(t,n,r)=>{let i=[];for(let e=0;e<=d;e++)i.push(u(e*E/d,t));e.line(i,n,r,{code:j.FIELD})};p(.1,.55,.7),p(-.05,.5,.55),p(-.13,.45,.4),p(1.06,.8,.95),p(1.16,.8,.8),p(1.4,.5,.55);for(let t=0;t<f;t++)e.dot(u((t+.5)*E/f,1.28),1.05*(t%2?.8:1.15),.85);for(let n of t.marks??[]){let r=u(n,.55),i=.2*t.W,a=[];for(let e=0;e<=32;e++){let t=e*E/32;a.push([r[0]+i*Math.cos(t),r[1]+i*Math.sin(t)])}e.line(a,.6,.8,{code:j.FIELD}),e.dot(r,1.3,.8)}return!0}Object.freeze([`frieze`,`motifs`,`band`]);function Te(e,t=10){let n=[],r=e.length;for(let i=0;i<r;i++){let a=e[(i-1+r)%r],o=e[i],s=e[(i+1)%r],c=e[(i+2)%r];for(let e=0;e<t;e++){let r=e/t,i=r*r,l=i*r;n.push([0,1].map(e=>.5*(2*o[e]+(-a[e]+s[e])*r+(2*a[e]-5*o[e]+4*s[e]-c[e])*i+(-a[e]+3*o[e]-3*s[e]+c[e])*l)))}}return n}function Ee(e,{strand:t,plate:n,motifs:r,frame:i,mode:a=n.ornament??`frieze`}){if(a===`frieze`&&i){let r=Ce(t,i);if(r&&we(e,r,n.frieze??{}))return{form:`frieze`,band:[r.inner,r.outer],sizes:r.sizes}}if(a!==`band`||t.motifs.length<3){for(let e of t.motifs)r.draw(le(e),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:ae(e.slot)});return{form:`motifs`,sizes:t.motifs.map(e=>+e.scale.toFixed(5))}}let o=t.motifs,s=.1,c=Te(o.map(e=>[e.base[0]+e.out[0]*s*.5,e.base[1]+e.out[1]*s*.5]),12),l=e=>{let t=c[(e-1+c.length)%c.length],n=c[(e+1)%c.length],r=Math.hypot(n[0]-t[0],n[1]-t[1])||1;return[(n[1]-t[1])/r,-(n[0]-t[0])/r]},u=l(0)[0]*o[0].out[0]+l(0)[1]*o[0].out[1]<0?-1:1,d=(e,t)=>{let[n,r]=l(e);return[c[e][0]+n*t*u,c[e][1]+r*t*u]};return o.forEach((t,i)=>{let a=i*12-6,o=Array.from({length:13},(e,t)=>(a+t+c.length)%c.length),f=ae(t.slot);for(let t of[-.1/2,s/2])e.line(o.map(e=>d(e,t)),.7,n.motif.alpha,{code:f});for(let e of[3,9]){let a=o[Math.round(e)],[d,p]=l(a),m=[d*u,p*u],h=[c[a][0]-m[0]*s*.35,c[a][1]-m[1]*s*.35];r.draw(T((A[t.element]??A.water)(i),h,m,t.scale*.45),{alpha:n.motif.alpha,enamel:n.motif.enamel,code:f,widthScale:.7})}}),{form:`band`}}var De=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.2),P=(...e)=>e.reduce((e,t,n)=>e.concat(n?t.slice(1):t),[]),F=(e,t,n=10)=>Array.from({length:n+1},(r,i)=>[e[0]+(t[0]-e[0])*i/n,e[1]+(t[1]-e[1])*i/n]),I=(e,t,n,r=0,i=40,a=1)=>Array.from({length:i+1},(o,s)=>{let c=r+a*E*s/i;return[e+n*Math.cos(c),t+n*Math.sin(c)]}),L=(e,t=.012,n=.045)=>({p:e,w:De(e.length-1,t,n)}),R=e=>e.map(([e,t])=>[-e,t]),z=e=>e.map(([e,t])=>[-e,-t]);function B(){let e=P(w([-.215,-.13],[-.27,.26],[.02,.52],[.19,.4],30),w([.19,.4],[.36,.27],[.3,.02],[.15,-.12],26),w([.15,-.12],[.03,-.24],[.08,-.46],[.3,-.42],26),w([.3,-.42],[.44,-.4],[.5,-.3],[.43,-.22],16)),t=e.length;return{p:e,w:e.map((e,n)=>{let r=n/(t-1);return .012+.05*Math.sin(Math.PI*D((r-.04)/.78))**1.3+.012*Math.exp(-(((r-.97)/.05)**2))})}}var Oe=()=>P(F([-.4,-.42],[-.4,.28]),w([-.4,.28],[-.4,.46],[-.16,.46],[-.16,.28],14),F([-.16,.28],[-.16,-.42])),ke=Object.freeze({aries:()=>[L(P(F([0,-.48],[0,-.05],12),w([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),w([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))),L(R(P(w([0,-.05],[-.02,.38],[-.42,.5],[-.42,.18],24),w([-.42,.18],[-.42,.02],[-.26,0],[-.2,.12],12))))],taurus:()=>[L(I(0,-.17,.23,Math.PI/2,48),.02,.03),L(w([-.44,.46],[-.3,.04],[.3,.04],[.44,.46],30))],gemini:()=>[L(w([-.36,.44],[-.12,.34],[.12,.34],[.36,.44],20),.014,.03),L(w([-.36,-.44],[-.12,-.34],[.12,-.34],[.36,-.44],20),.014,.03),L(w([-.15,.37],[-.19,.1],[-.19,-.1],[-.15,-.37],20)),L(w([.15,.37],[.19,.1],[.19,-.1],[.15,-.37],20))],cancer:()=>{let e=P(I(-.18,.12,.1,-Math.PI/2,30,-1),w([-.18,.22],[0,.36],[.28,.32],[.4,.14],20));return[L(e,.012,.04),L(z(e),.012,.04)]},leo:()=>[B()],virgo:()=>[L(Oe()),L(P(w([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),F([.08,.28],[.08,-.2]),w([.08,-.2],[.08,-.5],[.42,-.48],[.36,-.16],16),w([.36,-.16],[.3,.08],[.04,-.06],[.2,-.46],16)))],libra:()=>[L(F([-.42,-.32],[.42,-.32],20),.016,.02),L(P(F([-.42,-.02],[-.17,-.02],8),w([-.17,-.02],[-.32,.46],[.32,.46],[.17,-.02],30),F([.17,-.02],[.42,-.02],8)))],scorpius:()=>[L(Oe()),L(P(w([-.16,.28],[-.16,.46],[.08,.46],[.08,.28],14),F([.08,.28],[.08,-.3]),w([.08,-.3],[.08,-.48],[.3,-.48],[.42,-.3],16))),L(P(F([.27,-.33],[.42,-.3],6),F([.42,-.3],[.4,-.15],6)),.012,.02)],sagittarius:()=>[L(F([-.4,-.4],[.4,.4],30)),L(P(F([.1,.4],[.4,.4],8),F([.4,.4],[.4,.1],8)),.014,.025),L(F([-.25,.05],[.05,-.25],10),.012,.025)],capricorn:()=>[L(P(w([-.44,.32],[-.36,.3],[-.28,-.2],[-.2,-.4],16),w([-.2,-.4],[-.12,-.1],[-.04,.34],[.06,.34],16),w([.06,.34],[.16,.34],[.12,-.1],[.18,-.26],16),w([.18,-.26],[.24,-.46],[.46,-.38],[.4,-.18],14),w([.4,-.18],[.34,0],[.14,-.06],[.14,-.24],14),w([.14,-.24],[.14,-.44],[0,-.52],[-.1,-.46],12)))],aquarius:()=>[.14,-.2].map(e=>L(P(...[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]].slice(0,4).map((t,n,r)=>{let i=[[-.42,0],[-.21,.13],[0,0],[.21,.13],[.42,0]];return w([i[n][0],i[n][1]+e],[i[n][0]+.07,i[n][1]+e+(n%2?-.03:.05)],[i[n+1][0]-.07,i[n+1][1]+e+(n%2?.05:-.03)],[i[n+1][0],i[n+1][1]+e],10)})),.012,.035)),pisces:()=>[L(w([-.46,.44],[-.18,.26],[-.18,-.26],[-.46,-.44],34),.012,.05),L(w([.46,.44],[.18,.26],[.18,-.26],[.46,-.44],34),.012,.05),{p:Array.from({length:13},(e,t)=>[-.25+.5*t/12,.015*Math.sin(Math.PI*t/12)]),w:De(12,.016,.014)}]}),Ae=(e,t,n)=>Array.from({length:e+1},(r,i)=>t+n*Math.sin(Math.PI*i/e)**1.1),je=Object.freeze({scorpius:()=>{let e=P(w([-.62,.28],[-.56,.36],[-.48,.36],[-.46,.26],8),w([-.46,.26],[-.46,.1],[-.46,-.2],[-.46,-.42],12)),t=P(w([-.46,.16],[-.38,.42],[-.18,.42],[-.15,.16],12),w([-.15,.16],[-.15,0],[-.15,-.2],[-.15,-.42],10)),n=P(w([-.15,.16],[-.07,.42],[.13,.42],[.16,.16],12),w([.16,.16],[.16,-.1],[.14,-.36],[.32,-.42],12),w([.32,-.42],[.44,-.45],[.52,-.36],[.56,-.22],8));return[{p:e,w:Ae(e.length-1,.03,.07)},{p:t,w:Ae(t.length-1,.03,.08)},{p:n,w:Ae(n.length-1,.03,.08)},{p:[[.56,-.2],[.43,-.24]],w:[.06,.02]},{p:[[.56,-.2],[.6,-.34]],w:[.06,.02]}]},leo:()=>{let e=B();return[{p:e.p.map(([e,t])=>[e*1.5-.18,t*1.5-.07]),w:e.w.map(e=>e*1.5)}]},pisces:()=>ke.pisces().map(e=>({p:e.p.map(([e,t])=>[e*1.05,t*1.05]),w:e.w.map(e=>e*1.05)}))}),Me=e=>je[e]??ke[e]??null;Object.freeze(Object.keys(te));function Ne(e,t){let n=e.ey+3.4,r=ee(t,.03)?.GEO.box;return{centre:[0,n],S:1.74,k:2.1,spacing:.022,...r?{box:r}:{}}}function Pe(e){let{centre:[t,n],S:r,k:i}=e,[a,o,s,c]=e.box??[-1.35,-.85,1.35,.85],l=.06;return[t+(a-l)*r,n+(o-l)*r*i,t+(s+l)*r,n+(c+l)*r*i]}Object.freeze({phone:{top:.125,gap:.015,width:.94},wide:{top:.1,gap:.025,width:.62}});function Fe(e,{sign:t,frame:n,place:r=Ne(n,t),figure:i=!0}){let a=Me(t);a&&(i&&Ie(e,{sign:t,place:r}),Le(e,{glyph:a,frame:n}))}function Ie(e,{sign:t,place:n}){let r=ee(t,n.spacing);if(r){let{F:t,GEO:i}=r,{centre:[a,o],S:s,k:c}=n,l=([e,t])=>[a+e*s,o+t*s*c],[u,d,f,p]=i.box,m=(u+f)/2,h=(d+p)/2,g=(f-u)/2,_=(p-d)/2;for(let t=Math.ceil((u-m)/.25)*.25;t<=g;t+=.25){let n=[];for(let e=-_;e<=_+1e-6;e+=.05)n.push([m+t+.04*e*e,h+e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(g*.92))**4)))}for(let t=Math.ceil((d-h)/.25)*.25;t<=_;t+=.25){let n=[];for(let e=-g;e<=g+1e-6;e+=.05)n.push([m+e,h+t+.03*e*e]);e.line(n.map(l),.5,.14*Math.exp(-((Math.abs(t)/(_*.82))**4)))}let v=(t,n)=>{let r=t.pts.map(l),i=r.length;i<2||(t.closed?e.line(r,t.w,n,{close:!0}):e.ribbon(r,r.map((e,n)=>Math.max(.25,t.w*Math.sin(Math.PI*D(n/(i-1)*.96+.02))**+t.k)),n))};for(let t of i.parts){let n=t.P,r=n.alpha??1;for(let n of t.runs)e.ribbon(n.pts.map(l),n.wd.map(e=>Math.max(.3,e*1.25)),.85*r);for(let[n,i,a]of t.dots)e.dot(l([n,i]),a*.62,.85*r);for(let e of t.extra)v(e,.95*r);for(let n of t.olRuns)e.ribbon(n.pts.map(l),n.w.map(e=>e*1.25),r);for(let e of i.strokes)e.after===n.id&&v(e,e.a)}for(let e of i.strokes)e.after||v(e,e.a);let y=t.stars.map(([e,t])=>l([e,t]));for(let[n,r]of t.edges??[])e.line([y[n],y[r]],.6,.42);t.stars.forEach(([,,t],n)=>{let r=D(3.8-t,.8,3)*2.6;e.star(y[n],r*1.35,1,t<2?8:t<3?6:4,.2),t<1.8&&e.line(Array.from({length:25},(e,t)=>{let i=t*E/24,a=r*2.1/(O*600);return[y[n][0]+a*Math.cos(i),y[n][1]+a*Math.sin(i)]}),.55,.55)})}return!!r}function Le(e,{glyph:t,frame:n}){let r=.085/O*n.ornament,i=[0,.03/O*n.ornament],a=(e,t=120)=>Array.from({length:t+1},(n,r)=>{let a=r*E/t;return[i[0]+e*Math.cos(a),i[1]+e*Math.sin(a)]});e.line(a(r),1.1,.85),e.line(a(r*1.12),.5,.6),e.line(a(r*.88),.45,.45);for(let t=0;t<36;t++){let n=t*E/36,a=r*.88,o=r*(t%3==0?.8:.84);e.line([[i[0]+a*Math.cos(n),i[1]+a*Math.sin(n)],[i[0]+o*Math.cos(n),i[1]+o*Math.sin(n)]],.45,.5)}let o=r*.62,s=e=>e*o*O*600*1.1;e.glyph(t().map(e=>({p:e.p.map(([e,t])=>[i[0]+e*o,i[1]+t*o]),w:e.w})),e=>e.w.map(s))}var V=Object.freeze({period:15,window:12,samples:[-16,-8,0,8,16],gain:.5}),Re=[[-18.3,-3.2],[-16.8,-.2],[-15,1.6],[-12.9,2.6],[-8.4,3.8],[-3.8,4.2],[.6,5.6],[4,10.4],[8,11.4],[12,10.6],[15.2,8]].map(([e,t])=>[(e+2)/19,(t+1)/19]);Object.freeze({scorpius:{glow:[`body`,`tail`,`telson`]},leo:{glowLine:Re},pisces:{glow:[`cordW`,`cordN`]}});function ze(e,t,n=[]){let{period:r,window:i,samples:a,gain:o}=V;if(!e?.length){for(let e=0;e<a.length;e++)n[e]=[0,0,0];return n}let s=e.length,c=t/r%1*(s+40)-20;return a.forEach((t,r)=>{let a=c+t,l=Math.max(0,Math.min(s-1,Math.round(a))),u=+(a>=0&&a<=s-1);n[r]=[e[l][0],e[l][1],u*o*Math.exp(-((t/i)**2))]}),n}function H(e,{sign:t,place:n}){let r=ee(t,n.spacing);if(!r)return!1;let{centre:[i,a],S:o,k:s}=n,c=([e,t])=>[i+e*o,a+t*o*s];for(let t of r.GEO.parts)(t.P.alpha??1)<.7||e.fill(t.geo.outline.map(c),{channel:`g`,alpha:1,only:`aux`});return!0}function Be({plate:e,frame:t,strand:n,mood:r,sign:i=null,place:a=void 0,near:o,aux:s=null,ornament:c=void 0}){let l=fe({near:o,aux:s}),u=Object.freeze({draw(e,{alpha:t=1,enamel:n=.3,widthScale:r=1,code:i=0}={}){for(let a of e)a.fill&&n>0&&l.fill(a.q,{code:i,channel:`g`,alpha:n}),a.close?l.line(a.q,a.w*1.25*r,t,{code:i,close:!0}):l.taper(a.q,a.w*1.9*r,t,.5,{code:i})}});e.paint(l,{frame:t,strand:n,mood:r,motifs:u});let d=Ee(l,{strand:n,plate:e,motifs:u,frame:t,mode:c});return i&&Fe(l,{sign:i,frame:t,figure:!!(s&&a),...a?{place:a}:{}}),i&&s&&a&&H(l,{sign:i,place:a}),{strokes:l.strokes,ornament:d.form,band:d.band??null,sizes:d.sizes??null}}var U=Object.freeze([3.2,4.2]),Ve=`
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
`;function He(e){let t=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) c = ground${e.glslId}(p);`).join(`
      `),n=e.map((e,t)=>`${t?`else `:``}if (uPlate < ${t}.5) f = field${e.glslId}(p);`).join(`
      `);return`
  varying vec3 vWorld;
  uniform float uFloorY;
  ${Ve}
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
      float reach = 1. - smoothstep(${U[0].toFixed(2)}, ${U[1].toFixed(2)}, p.rho);
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
`}var W=`
  varying vec3 vWorld;
  void main() {
    vec4 world = modelMatrix * vec4(position, 1.);
    vWorld = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,G=1.35,Ue=.02;function We(e,t){let n=0,r=.5;for(let i=0;i<3;i++){n+=r*de(e,t);let i=1.6*e-1.2*t+3.1,a=1.2*e+1.6*t+1.7;e=i,t=a,r*=.5}return n/.875}function Ge(e,t=()=>performance.now()){if(!e?.length)return null;let n=1/0,r=1/0,i=-1/0,a=-1/0;for(let t of e){let e=Math.max(G,8*Math.max(t.r,.02));n=Math.min(n,t.x-e),i=Math.max(i,t.x+e),r=Math.min(r,t.y-e),a=Math.max(a,t.y+e)}let o=Math.max(8,Math.min(256,Math.ceil((i-n)/Ue))),s=Math.max(8,Math.min(256,Math.ceil((a-r)/Ue))),c=new Float32Array(o*s*4),l=new Float32Array(o*s*4),u=new Float32Array(o*s*4),d=e.map((e,t)=>{let n=Math.max(e.r,.02),r=t*2.399;return{...e,r:n,glowK:1/(n*n*6.3),ck:Math.cos(r),sk:Math.sin(r),reach2:Math.max(G,8*n)**2,refl:[0,1,2].map(t=>e.color[t]+(e.glow[t]-e.color[t])*.3)}}),f=0,p={width:o,height:s,result:null,step(e=6){let m=t()+e;for(;f<s;f++){if(f&&t()>m)return!1;let e=f,p=r+(e+.5)/s*(a-r);for(let t=0;t<o;t++){let r=n+(t+.5)/o*(i-n),a=null,s=null,f=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0,S=0;for(let e of d){let t=r-e.x,n=p-e.y,i=t*t+n*n;if(i>e.reach2)continue;let o=Math.exp(-i*e.glowK);f+=e.glow[0]*o,m+=e.glow[1]*o,h+=e.glow[2]*o,a===null&&(a=We(r*1.74,p*1.74),s=We(r*1.74+7.3,p*1.74+7.3));let c=(e.ck*a+e.sk*s-.5*(e.ck+e.sk))*.45,l=Math.sqrt(i)+c*.4,u=Math.exp(-l*l*7.65);g+=e.glow[0]*u,_+=e.glow[1]*u,v+=e.glow[2]*u,y+=u;let d=t/(e.r*.95),C=(n+e.r*1.55)/(e.r*1.25),w=Math.exp(-(d*d+C*C));b+=e.refl[0]*w,x+=e.refl[1]*w,S+=e.refl[2]*w}let C=(e*o+t)*4,w=1/Math.max(y,.001);c[C]=f,c[C+1]=m,c[C+2]=h,c[C+3]=y,l[C]=g*w,l[C+1]=_*w,l[C+2]=v*w,l[C+3]=1,u[C]=b,u[C+1]=x,u[C+2]=S,u[C+3]=1}}return p.result={rect:[n,r,i,a],width:o,height:s,a:c,b:l,c:u},!0}};return p}var Ke=`
  varying vec4 vClip;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vClip = gl_Position;
  }
`,qe=`
  uniform sampler2D uCache;
  varying vec4 vClip;
  void main() {
    vec2 uv = vClip.xy / vClip.w * .5 + .5;
    gl_FragColor = vec4(texture2D(uCache, uv).rgb, 1.);
    #include <colorspace_fragment>
  }
`,Je=new Set([`uTime`,`uRing`,`uFigL`,`uReveal`]);function Ye(){let e=-2128831035,t=t=>{e=Math.imul(e^(Math.round(Number(t)*4096)|0),16777619),e=Math.imul(e^(Math.round(Number(t)*4096%1*1e6)|0),16777619)},n=e=>{if(e==null)return t(-7);if(typeof e==`number`||typeof e==`boolean`)return t(+e);if(e.isTexture)t(e.id),t(e.version);else if(Array.isArray(e)){t(e.length);for(let t of e)n(t)}else if(e.elements)for(let n of e.elements)t(n);else typeof e.x==`number`?(t(e.x),t(e.y),typeof e.z==`number`&&t(e.z),typeof e.w==`number`&&t(e.w)):t(-9)};return{value:n,num:t,get:()=>e}}function Xe({plateMaterial:e,geometry:t,createTarget:n}={}){let i=new f;i.name=`gravur-plate-cache`;let s=new u(t,e);s.name=`gravur-plate-source`,s.frustumCulled=!1,s.matrixAutoUpdate=!1,i.add(s);let c=typeof n==`function`?n:(e,t)=>{let n=new d(e,t,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1,minFilter:o,magFilter:o,type:r});return n.texture.colorSpace=a,n.texture.name=`gravur-plate-cache`,n},l=null,p=null,m=null,h=0,g=0,_=0,v=1,y=!1,b=[0,0],x=new C({name:`gravur-plate-view`,vertexShader:Ke,fragmentShader:qe,uniforms:{uCache:{value:null}},side:1,depthWrite:!1,fog:!1,toneMapped:!1});function S(t,n,r,i){let a=Ye(),o=Ye();for(let[t,n]of Object.entries(e.uniforms))t!==`uRes`&&t!==`uPxU`&&(a.value(n.value),Je.has(t)||o.value(n.value));for(let s of[a,o])s.value(t.matrixWorld),s.value(t.projectionMatrix),s.value(n.matrixWorld),s.num(r),s.num(i),s.num(e.version);return[a.get(),o.get()]}return{viewMaterial:x,update(t,n,r,{width:a,height:o,want:u=1,clockStep:d=!0}={}){if(y||!t||!n||!(a>0&&o>0))return`kept`;r.updateMatrixWorld?.();let f=Math.max(1,Math.round(a*u)),C=Math.max(1,Math.round(o*u)),[w,T]=S(n,r,f,C);if(l&&w===p)return g++,`kept`;if(l&&!d&&T===m&&f===b[0]&&C===b[1])return _++,`held`;l?(l.width!==f||l.height!==C)&&l.setSize(f,C):l=c(f,C);let E=e.uniforms,D=E.uRes.value.clone(),O=E.uPxU.value,k=f/a;E.uRes.value.set(f,C),E.uPxU.value=O*k,s.matrix.copy(r.matrixWorld),s.matrixWorld.copy(r.matrixWorld);let A=t.getRenderTarget(),ee=t.autoClear;try{t.autoClear=!1,t.setRenderTarget(l),t.render(i,n)}finally{t.autoClear=ee,t.setRenderTarget(A),E.uRes.value.copy(D),E.uPxU.value=O}return x.uniforms.uCache.value=l.texture,p=w,m=T,b=[f,C],v=u,h++,`drawn`},invalidate(){p=null,m=null},getState(){return{scale:v,size:[...b],draws:h,skips:g,held:_,bytes:b[0]*b[1]*4}},release(){l?.dispose(),l=null,p=null,m=null,x.uniforms.uCache.value=null,b=[0,0]},dispose(){y||(y=!0,l?.dispose(),l=null,x.dispose(),i.remove(s))}}}var K=Object.freeze({maxSecondary:4,minShare:.1,texels:640,fade:.12,top:{phone:.125,wide:.1},overlap:.22,height:[.16,.42],width:{alone:.8,beside:.5}});function Ze(e,t=[]){if(!e||!te[e])return[];let n=t.find(t=>t.id===e)?.share??1,r=t.filter(t=>t.id!==e&&te[t.id]&&t.share>=K.minShare).slice(0,K.maxSecondary);return[{sign:e,share:n,lead:!0},...r.map(e=>({sign:e.id,share:e.share,lead:!1}))]}function q(e,t){let n=Math.min(1,Math.max(0,e/Math.max(t,1e-6)));return{size:.38+.37*n,opacity:.45+.4*n}}var Qe=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }
`,$e=`
  uniform sampler2D uMap;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    vec4 t = texture2D(uMap, vUv);
    gl_FragColor = vec4(t.rgb, t.a * uOpacity);
    #include <colorspace_fragment>
  }
`;function et(e,{createCanvas:t,metal:n=[214,170,96],texels:r=K.texels}={}){let i=ee(e,.022);if(!i||typeof t!=`function`)return null;let a={centre:[0,0],S:1,k:1,spacing:.022,box:i.GEO.box},o=Pe(a),s=(o[2]-o[0])/(o[3]-o[1]),c=s>=1?r:Math.round(r*s),l=s>=1?Math.round(r/s):r,u=t(c,l)?.getContext?.(`2d`,{alpha:!1,willReadFrequently:!0});if(!u)return null;let d=fe({aux:{ctx:u,width:c,height:l,rect:o}});if(Ie(d,{sign:e,place:a}),H(d,{sign:e,place:a}),typeof u.getImageData!=`function`)return null;let f=u.getImageData(0,0,c,l).data,p=new Uint8Array(c*l*4),m=K.fade,h=e=>{let t=Math.min(e,1-e)/m;return t>=1?1:t<=0?0:t*t*(3-2*t)};for(let e=0;e<l;e++){let t=h((e+.5)/l),r=(l-1-e)*c;for(let i=0;i<c;i++){let a=(e*c+i)*4,o=(r+i)*4,s=Math.min(1,f[a]/255+f[a+1]/255*.1)*t*h((i+.5)/c);p[o]=n[0],p[o+1]=n[1],p[o+2]=n[2],p[o+3]=Math.round(s*255)}}return{data:p,width:c,height:l,aspect:c/l}}function tt({group:e,createCanvas:r}){let i=new g(1,1),s=Array.from({length:1+K.maxSecondary},(t,n)=>{let r=new C({name:`gravur-figure-${n}`,vertexShader:Qe,fragmentShader:$e,uniforms:{uMap:{value:null},uOpacity:{value:1}},transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1}),a=new u(i,r);return a.name=`gravur-figure-${n}`,a.visible=!1,a.frustumCulled=!1,a.renderOrder=2,a.matrixAutoUpdate=!0,e.add(a),{mesh:a,material:r,figure:null}}),c=new Map,l=[],d=``,f=0,m=[];function h(e,i){let s=`${e}|${i.join(`,`)}`;if(c.has(s))return c.get(s);let l=et(e,{createCanvas:r,metal:i});if(!l)return c.set(s,null),null;let u=new p(l.data,l.width,l.height,t);u.colorSpace=a,u.generateMipmaps=!0,u.minFilter=n,u.magFilter=o,u.needsUpdate=!0;let d={texture:u,aspect:l.aspect};return c.set(s,d),f++,d}let _=new x,v=new x,y=new x,b=new x;return{setFigures(e,t=[214,170,96]){let n=JSON.stringify([e.map(e=>[e.sign,e.share,e.lead]),t]);return n!==d&&(d=n,l=e,s.forEach((e,n)=>{let r=l[n]??null,i=r?h(r.sign,t):null;e.figure=r&&i?{...r,aspect:i.aspect}:null,e.material.uniforms.uMap.value=i?.texture??null,e.mesh.visible=!1}),!0)},place({camera:e,viewport:t,centre:n,radius:r,box:i,phone:a=!1,opacity:o=1}){m=[];let c=s[0].figure;if(!c||!e?.isCamera||!(t?.cssWidth>0)||!(r>0)||!i){for(let e of s)e.mesh.visible=!1;return!1}let l=t.cssWidth,u=t.cssHeight||l;e.updateMatrixWorld(),e.getWorldPosition(y),e.getWorldDirection(v),b.fromArray(n);let d=b.clone().sub(y).dot(v)+r*1.08+.002,f=(t,n,r)=>(_.set(t/l*2-1,1-n/u*2,.5).unproject(e).sub(y).normalize(),r.copy(y).addScaledVector(_,d/Math.max(_.dot(v),1e-4))),p=s.slice(1).some(e=>e.figure),h=u*(a?K.top.phone:K.top.wide),[g,S]=K.height,C=Math.min(u*S,Math.max(u*g,(i.top-h)/(1-K.overlap)));C=Math.min(C,l*(p?K.width.beside:K.width.alone)/c.aspect);let w=(i.left+i.right)/2,T=i.top+K.overlap*C-C/2,E=[{quad:s[0],cx:w,cy:T,h:C,opacity:o}],D=[w+C*c.aspect/2,w-C*c.aspect/2];s.slice(1).forEach((e,t)=>{if(!e.figure)return;let n=q(e.figure.share,c.share),r=C*n.size,i=r*e.figure.aspect,a=t%2?1:0,s=C*.06,u=a?D[1]-s-i/2:D[0]+s+i/2;D[a]=a?u-i/2:u+i/2,u=Math.min(l-i/2-4,Math.max(i/2+4,u)),E.push({quad:e,cx:u,cy:T+(C-r)*.3,h:r,opacity:o*n.opacity})});let O=new x,k=new x,A=new x;for(let e of s)e.mesh.visible=!1;for(let t of E){let{mesh:n,material:r,figure:i}=t.quad;f(t.cx,t.cy,A),f(t.cx,t.cy-t.h/2,O),f(t.cx,t.cy+t.h/2,k);let a=O.distanceTo(k);!Number.isFinite(a)||a<=0||(n.position.copy(A),n.quaternion.copy(e.quaternion),n.scale.set(a*i.aspect,a,1),n.updateMatrixWorld(!0),r.uniforms.uOpacity.value=t.opacity,n.visible=!0,m.push({sign:i.sign,lead:i.lead,share:i.share,opacity:+t.opacity.toFixed(3),screen:{left:+(t.cx-t.h*i.aspect/2).toFixed(1),right:+(t.cx+t.h*i.aspect/2).toFixed(1),top:+(t.cy-t.h/2).toFixed(1),bottom:+(t.cy+t.h/2).toFixed(1)},depth:+d.toFixed(5)}))}return m.length>0},hide(){for(let e of s)e.mesh.visible=!1;m=[]},getState(e=null){let t=new x;return e?.isCamera&&e.getWorldDirection(t),{drawn:f,figures:m.map((n,r)=>{let i=s.find(e=>e.figure?.sign===n.sign)?.mesh,a=null;if(i&&e?.isCamera){let e=new x(0,0,1).applyQuaternion(i.quaternion);a=+(Math.acos(Math.min(1,Math.max(-1,-e.dot(t))))*180/Math.PI).toFixed(3)}let o=i?new x(0,1,0).applyQuaternion(i.quaternion):null,c=e?.isCamera?new x(0,1,0).applyQuaternion(e.quaternion):null;return{...n,facingDeg:a,upright:o&&c?+o.dot(c).toFixed(4):null,index:r}})}},release(){for(let e of c.values())e?.texture.dispose()},dispose(){for(let e of c.values())e?.texture.dispose();c.clear();for(let t of s)t.material.dispose(),e.remove(t.mesh);i.dispose()}}}var J=Object.freeze([Object.freeze({scale:1,every:1}),Object.freeze({scale:.8,every:1}),Object.freeze({scale:.65,every:1}),Object.freeze({scale:.5,every:1}),Object.freeze({scale:.5,every:2}),Object.freeze({scale:.4,every:3})]),Y=Object.freeze({window:6,lateShare:.8,floorMs:1e3/30,gapMs:2e3,upAfterMs:2e3,failBackMs:1500,guardMs:3e3,storageKey:`jew-studio.gravur-ladder.v1`}),nt=e=>{let t=[...e].sort((e,t)=>e-t);return t.length?t[Math.floor(t.length/2)]:0};function rt({storage:e=null,startLevel:t=null,maxLevel:n=J.length-1,name:r=`motion`,guardAllowed:i=!0,defaultLevel:a=0,minStartLevel:o=0}={}){let s=`${Y.storageKey}.${r}`,c=Math.min(J.length-1,n),l=()=>{try{let t=JSON.parse(e?.getItem?.(s)??`null`);return Number.isInteger(t?.level)?t.level:a}catch{return a}},u=e=>Math.max(0,Math.min(c,e)),d=u(Math.max(Number.isInteger(t)?t:l(),o)),f=0,p=d?`remembered level ${d}`:`start`,m=[],h=[],g=0,_=0,v=-1,y=0,b=1/0,x=!1,S=0,C=()=>{try{e?.setItem?.(s,JSON.stringify({level:d}))}catch{}};function w(e,t){return e=u(e),e!==d&&(d=e,p=t,m=[],h=[],g=0,_=0,S++,C(),!0)}return{get level(){return d},get step(){return J[d]},get guard(){return x},sample(e,{paceMs:t=0,hintMs:n=null,delayMs:r=null,continued:a=!0,limit:o=c,guardOk:s=!0}={}){if(!Number.isFinite(e)||e<=0)return!1;if(!a||e>Y.gapMs)return m=[],h=[],!1;if(y+=e,m.push(e),m.length>Y.window&&m.shift(),Number.isFinite(r)&&(h.push(r),h.length>Y.window&&h.shift()),m.length<Y.window)return!1;let l=nt(m);b=Math.min(b,l,Number.isFinite(n)&&n>0?n:1/0);let u=Math.max(t,Y.floorMs),C=Number.isFinite(n)&&n>0?n:Y.floorMs,T=h.length<Y.window||nt(h)>C*1.5+4,E=u/Y.lateShare,D=[...m].sort((e,t)=>e-t)[Math.floor(m.length/4)],O=l>E&&(T||l>u*1.6||D>E),k=Math.max(0,Math.min(c,o)),A=d>=k&&h.length>=Y.window&&nt(h)>C*1.5+4;if(O||A)return g=0,v>=0&&y-v<Y.failBackMs&&(f=Math.max(f,d+1)),v=-1,d<k?w(d+1,`late: ${l.toFixed(0)} ms against ${u.toFixed(0)} ms`):(_+=e,i&&s&&d===c&&!x&&_>=Y.guardMs?(x=!0,p=`guard: still ${l.toFixed(0)} ms${O?``:`, requests held ${nt(h).toFixed(0)} ms`} at the last level`,S++,!0):!1);if(_=0,g+=e,g>=Y.upAfterMs&&d>f){let e=w(d-1,`headroom: ${l.toFixed(0)} ms against ${u.toFixed(0)} ms`);return v=y,e}return!1},setLevel(e,t=`set`){let n=w(e,t);return f=0,v=-1,n},pause(){m=[],h=[],g=0,_=0},getState(){return{level:d,scale:J[d].scale,every:J[d].every,ceiling:f,guard:x,reason:p,bestMs:Number.isFinite(b)?+b.toFixed(1):null,changes:S}}}}var it=3;function at(){try{return globalThis.matchMedia?.(`(pointer: coarse)`)?.matches===!0&&Math.min(globalThis.screen?.width??1e4,globalThis.screen?.height??1e4)<700}catch{return!1}}var ot=25,st=3,ct=2,lt=.6,ut=1/30,dt=.15,ft=2.5,pt=3,X=Object.freeze({lead:.25,span:1.9,perStone:.12,rimDelay:.2,rim:.6,motif:1.2}),mt=.6,ht=2048,gt=1024,_t=6e3,vt=.05,yt=.036;function bt(e,t=0){let n=Math.min(X.span,Math.max(0,e-1)*X.perStone),r=Array.from({length:e},(r,i)=>t+X.lead+(e>1?n*i/(e-1):0)),i=t+X.lead+n+X.rimDelay,a=i+X.rim;return{inkAt:r,rimAt:i,waveAt:a,fullAt:i-.3,end:a+2.4}}var xt=e=>e.map(e=>e/255),St=e=>[1,3,5].map(t=>parseInt(String(e).slice(t,t+2),16)/255||0);function Ct(e,t){if(typeof document<`u`&&document.createElement){let n=document.createElement(`canvas`);return n.width=e,n.height=t,n}return typeof OffscreenCanvas==`function`?new OffscreenCanvas(e,t):null}function wt(){let e=new p(new Uint8Array([0,0,0,255]),1,1);return e.colorSpace=``,e.needsUpdate=!0,e}function Tt(){let e=new p(ce(),256,256);return e.colorSpace=``,e.wrapS=e.wrapT=c,e.magFilter=o,e.minFilter=o,e.generateMipmaps=!1,e.needsUpdate=!0,e}var Et=()=>(typeof performance<`u`?performance.now():Date.now())/1e3,Dt=null,Ot=null,kt=Object.freeze([`auto`,`canli`,`dengeli`,`hafif`]),At=`jew-studio.gravur-tier.v1`,Z=(()=>{try{let e=globalThis.localStorage?.getItem(At);return kt.includes(e)?e:`auto`}catch{return`auto`}})(),jt=`canli`,Mt=``,Nt=()=>me()?.config({moving:!0})?.lowered?e(Z===`auto`?`atmosphere.menu.tunedAuto`:`atmosphere.menu.tunedChosen`):null,Pt=null,Ft=()=>Pt===null?null:e(`atmosphere.menu.${Pt?`nowMoving`:`nowStill`}${me()?.config({moving:!0})?.pieceLowered?`Lowered`:``}`),It=()=>({chosen:Z,recommended:jt,effective:Z===`auto`?jt:Z,tuned:Nt(),now:Ft()});function Lt(){let e=It(),t=`${e.chosen}/${e.recommended}/${e.effective}/${e.tuned}/${e.now}`;if(t!==Mt){Mt=t;try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-tier`,{detail:e}))}catch{}}}function Rt(e){if(!kt.includes(e))throw RangeError(`Unknown Atmosfer tier: ${e}`);Z=e;try{globalThis.localStorage?.setItem(At,e)}catch{}Lt();for(let e of Ht)e();return It()}function zt(){return It()}function Bt(e){return e?.guard?`hafif`:e?.level>0?`dengeli`:`canli`}function Vt(){return Ot}var Ht=new Set,Ut=!1;function Wt(e){Ut=e===!1;for(let e of Ht)e()}var Gt=Object.freeze({flat:!1,level:null,tier:null,frozen:!1,awake:!1}),Q={...Gt};function Kt(e=null){Q={...Gt,...e??{}},Q.level!==null&&!J[Q.level]&&(Q.level=null),Q.tier!==null&&!kt.includes(Q.tier)&&(Q.tier=null);for(let e of Ht)e();return{...Q}}function $(){return{...Q}}function qt(e){Dt=Number.isFinite(e)?e:null;for(let e of Ht)e()}var Jt=null,Yt=e=>e?.cssWidth?`${Math.round(e.cssWidth)}x${Math.round(e.cssHeight)}`:``;function Xt(){try{let e=globalThis.document?.querySelector?.(`#scene-stage canvas`);if(e?.clientWidth>0)return{cssWidth:e.clientWidth,cssHeight:e.clientHeight,width:e.width,height:e.height}}catch{}return null}function Zt(){let e=Array.from({length:48},()=>new m(0,0,.1,-1e4)),t=Array.from({length:48},()=>new m),n=Array.from({length:48},()=>new m),r={uTime:{value:0},uPlateUnit:{value:2.684},uPlate:{value:0},uStoneCount:{value:0},uPxU:{value:1},uStrength:{value:1},uReveal:{value:1},uSolo:{value:-1},uQx:{value:new x(1,0,0)},uQy:{value:new x(0,-1,0)},uMetal:{value:new x(.9,.8,.6)},uLeaf:{value:new x(.9,.8,.6)},uEnamel:{value:new x(.8,.3,.2)},uLightCol:{value:new x(1,.92,.75)},uEllipse:{value:new v(1,1)},uRing:{value:new v(0,0)},uLow:{value:0},uRes:{value:new v(1,1)},uFloorY:{value:0},uStoneA:{value:e},uStoneB:{value:t},uStoneC:{value:n},uEntrance:{value:new m(-1e4,-1e4,-1e4,X.motif)},uRim:{value:new m(-Math.PI/2,1,1.35,1.55)},uLook:{value:new m},uLook2:{value:new m(1,.45,1,.95)},uLook3:{value:new m},uNear:{value:wt()},uAux:{value:wt()},uNearWarp:{value:new m(1.6,1,1.6,1)},uNearT:{value:new v(2.6,2.6)},uAuxRect:{value:new m(-1,-1,1,1)},uAuxOn:{value:0},uH0:{value:new S},uFig:{value:new m(0,4,1,2)},uFigL:{value:Array.from({length:V.samples.length},()=>new x)},uFigStar:{value:Array.from({length:24},()=>new m)},uFigStars:{value:0},uFigTint:{value:new x(1,.8,.6)},uLoops:{value:1},uShares:{value:new m(.25,.25,.25,.25)},uPig:{value:[new x(.8,.8,.8),new x(.8,.8,.8),new x(.8,.8,.8),new x(.8,.8,.8)]},uBaked:{value:0},uBakeRect:{value:new m(0,0,1,1)},uBakeA:{value:wt()},uBakeB:{value:wt()},uBakeC:{value:wt()},uEarthBand:{value:[0,1,2,3].map(()=>new m(2,2,0,0))},uClouds:{value:Array.from({length:40},()=>new m)},uCloudB:{value:Array.from({length:40},()=>new m)},uCloudCount:{value:0},uNoise:{value:Tt()}},i=e=>Array.isArray(e)?new[null,null,v,x,m][e.length]().fromArray(e):e;for(let e of M)for(let[t,n]of Object.entries(e.defaults??{}))r[t]??={value:i(n)};return new C({name:`gravur-plate`,vertexShader:W,fragmentShader:He(M),uniforms:r,side:1,depthWrite:!1,fog:!1,toneMapped:!1})}function Qt(){let e=new u(new g(.001,.001),Zt());return e.name=`gravur-plate-warm`,e.frustumCulled=!1,e}function $t(e={}){let{scene:r,camera:a,registerNativeGroup:c}=e,d=typeof e.requestFrame==`function`?e.requestFrame:()=>{},f=typeof e.createCanvas==`function`?e.createCanvas:Ct,g=e.offscreen===!0,v=Number.isInteger(e.nearTexels)&&e.nearTexels>=256?Math.min(ht,e.nearTexels):ht;if(!r?.isScene||typeof c!=`function`)throw TypeError(`Atmosphere layer needs the Scene and its native owner`);let S=new b;S.name=`atmosphere-gravur`;let C=Zt(),w=C.uniforms,T=w.uStoneA.value,E=w.uStoneB.value,D=w.uStoneC.value,O=new u(new y(1,48,24),C);O.name=`gravur-plate`,O.renderOrder=-10,O.frustumCulled=!1,S.add(O);let k=g?null:tt({group:S,createCanvas:f}),A=g?null:Xe({plateMaterial:C,geometry:O.geometry}),ee=null;try{ee=g?null:globalThis.localStorage??null}catch{}let ae=({defaultLevel:e=0,minStartLevel:t=0}={})=>{j=rt({storage:ee,name:`motion`,defaultLevel:e,minStartLevel:t}),M=rt({storage:ee,name:`drag`,maxLevel:3,guardAllowed:!1,defaultLevel:e,minStartLevel:t})},j=null,M=null;g||ae(),j&&(jt=Bt(j.getState()),Lt());let ce=`none`,le=!1,de=0,fe=!1,me=!1,N=null,xe=!1;function Se(){let e=he(ee),t=at();ae({defaultLevel:!e&&t&&Z===`auto`?3:0,minStartLevel:e?.failed?3:0}),le=!1,N=ye({storage:ee,phone:t,handTier:Z!==`auto`,deviceRatio:be()??(Number(globalThis.devicePixelRatio)||1)}),jt=Bt(j.getState()),Lt()}function Ce(){N&&(N=null,xe=!1,Te=null,Pt=null,we&&=(clearTimeout(we),0),ge(),pe(!1),Lt())}let we=0,Te=null;function Ee(){we&&clearTimeout(we),we=setTimeout(()=>{we=0,!(P||!N||Q.frozen)&&N.probePlate()&&(on(V),d())},ve.probeQuietMs)}function De(){let e=N.levels.plate===1;if(Te===1&&!e&&(j.setLevel(J.length-1,`probe: cheapest motion`),M.setLevel(3,`probe`)),e&&Te===0&&(H=Math.min(H,V),hn(),G=!1),Te=+!!e,N.takeComfort())try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-comfort`))}catch{}return e}r.add(S),c(S);let P=!1,F=null,I=null,L=null,R=null,z=null,B=null,Oe=null,ke=null,Ae=0,je=0,Ne=0,Pe=0,Fe=null,Ie=!1,Le=!1,V=0,Re=null,H=0,U=!0,Ve=!0,He=0,W=null,G=!0,Ue=``,We=0,Ke=null,qe=0,Je=!1,Ye=-1,K=null,q=0,Qe=[0,0],$e=null,et=null,Y=null,nt=1/30,it=!1,ot=1,st=!1,ct=null,dt=0,ft=``,pt=null,gt=0,vt=!1,yt=0,wt=!1,Tt=null,kt=0,At=-1e4,Mt=[],Nt=()=>{P||(Ve=!0,U=!1,d())};g||Ht.add(Nt);let Ft=typeof performance<`u`?performance.now():0,Rt={near:null,aux:null},zt={near:null,aux:null},Vt=null,Wt=0,Gt=0,Kt=0,$={a:null,b:null,c:null},qt={a:w.uBakeA.value,b:w.uBakeB.value,c:w.uBakeC.value};function Qt(){let e=B?.lights.length??0,t=[];for(let n=0;n<e;n++){let e=T[n],r=E[n],i=D[n];t.push({x:e.x,y:e.y,r:e.z,glow:[r.x,r.y,r.z],color:[i.x,i.y,i.z]})}let n=JSON.stringify(t.map(e=>[e.x,e.y,e.r,e.glow,e.color]));if(n===Vt)return;Vt=n,w.uBaked.value=0,Wt=0,w.uBakeA.value=qt.a,w.uBakeB.value=qt.b,w.uBakeC.value=qt.c;for(let e of[`a`,`b`,`c`])$[e]?.dispose(),$[e]=null;Kt&&clearTimeout(Kt);let r=Ge(t);if(!r)return;let i=()=>{if(Kt=0,P||Vt!==n)return;let e=Et(),t=r.step(6);Wt+=(Et()-e)*1e3,t?$t(r.result):Kt=setTimeout(i,16)};Kt=setTimeout(i,0)}function $t(e){for(let n of[`a`,`b`,`c`]){let r=e[n],i=new Uint16Array(r.length);for(let e=0;e<r.length;e++)i[e]=_.toHalfFloat(r[e]);let a=new p(i,e.width,e.height,t,l);a.colorSpace=``,a.magFilter=a.minFilter=o,a.generateMipmaps=!1,a.wrapS=a.wrapT=s,a.needsUpdate=!0,$[n]=a}w.uBakeA.value=$.a,w.uBakeB.value=$.b,w.uBakeC.value=$.c,w.uBakeRect.value.fromArray(e.rect),Gt++,Wt=Math.round(Wt),Ve=!0}function en(){if(!$.a||w.uEntrance.value.z>V-2.3)return!1;let e=B?.lights.length??0;for(let t=0;t<e;t++)if(V-T[t].w<8)return!1;return!0}let tn=()=>{if(Q.level!==null)return J[Q.level];let e=Z;return e===`auto`?j.step:e===`dengeli`?J[4]:J[0]},nn=()=>ut*(j?tn().every:1);function rn(e=Math.max(0,nn()-(Et()-Ye)-.013)){qe||P||(qe=setTimeout(()=>{qe=0,!(P||U)&&(d(),Et()-Ye>.15&&rn(.2))},e*1e3))}let an=(e,t)=>e?.chosen&&!et?ne(e.plate).id:t&&te[t]?`sign`:e?.elementPlate??(e?.plate===`sign`?null:e?.plate)??`atlas`;function on(e=V){le||(H=Math.max(H,e+25)),U=!1,Ve=!0}function sn(){if(!a?.position)return{toward:[0,1],elevation:24*Math.PI/180};let e=R?.bounds?.center??[0,0,0],t=a.position.x-e[0],n=a.position.y-(R?.bounds?.floorY??0),r=a.position.z-e[2],i=Math.cos(-q),o=Math.sin(-q);return{toward:[t*i+r*o,-t*o+r*i],elevation:Math.atan2(n,Math.hypot(t,r)||1e-6)}}function cn(){if(!R)return!1;let e=R.kind===`necklace`?`necklace`:`bracelet`;if(Oe&&ke===e||(Oe=sn(),ke=e),z=se(R.stones??[],{kind:e,view:Oe}),!z)return B=null,w.uStoneCount.value=0,!1;let t=ne(I);return B=oe(R.stones,z,{motifScale:t.motif.scale}),w.uEllipse.value.set(z.ex,z.ey),w.uPlateUnit.value=z.scale,w.uRim.value.set(B.rimStart,B.rimDirection,t.rim[0],t.rim[1]),w.uStoneCount.value=B.lights.length,B.lights.forEach((e,t)=>{let n=T[t].w;T[t].set(e.q[0],e.q[1],e.r,n);let[r,i,a]=St(e.glow),[o,s,c]=St(e.color);E[t].set(r,i,a,e.elementIndex),D[t].set(o,s,c,0)}),!0}function ln(){let e=ne(I);w.uPlate.value=ue[e.id],w.uMetal.value.fromArray(xt(e.metal)),w.uLeaf.value.fromArray(xt(e.leaf)),w.uEnamel.value.fromArray(xt(e.enamel)),w.uLightCol.value.fromArray(xt(e.light));let t=e.look;w.uLook.value.set(t.dark,t.bloom,t.sheen,t.sheenGain),w.uLook2.value.set(1,t.tint,1,t.lineAlpha),w.uLook3.value.set(t.reflect,t.heat,t.wave,1);let n=R?.mood?.shares??{};w.uShares.value.set(n.water??0,n.fire??0,n.earth??0,n.air??0);let r={water:null,fire:null,earth:null,air:null};for(let e of R?.stones??[])e.stone&&e.element&&!r[e.element]&&(r[e.element]=St(e.color));[`water`,`fire`,`earth`,`air`].forEach((e,t)=>w.uPig.value[t].fromArray(r[e]??[.8,.8,.8]));for(let[t,n]of Object.entries(e.uniforms({mood:R?.mood,frame:z,strand:B,sign:L})??{})){let e=w[t];e&&(Array.isArray(e.value)&&Array.isArray(n)?e.value.forEach((e,t)=>{n[t]&&e.fromArray(n[t])}):e.value?.fromArray?e.value.fromArray(n):e.value=n)}}function un(e,t){let r=zt[e];return r&&r.image===t||(r?.dispose(),r=new i(t),r.colorSpace=``,r.flipY=!1,r.generateMipmaps=!0,r.minFilter=n,r.magFilter=o,r.anisotropy=8,r.wrapS=r.wrapT=s,zt[e]=r),r.needsUpdate=!0,Pe++,r}function dn(e,t,n){let r=Rt[e];return r&&r.width===t&&r.height===n||(r=Rt[e]=f(t,n)),r}function fn(){if(Ae=0,P||!z||!B)return;let e=JSON.stringify([F,I,L,z.centre,z.right,z.scale,z.ex,z.ey]);if(e===Fe)return;let t=Et(),n=ne(I),r=ie(z,{texels:v}),i=dn(`near`,r.width,r.height),a=i?.getContext?.(`2d`,{alpha:!1});if(!a){Fe=e;return}let o=L&&Me(L)?L:null;k?.setFigures(Ze(o&&te[o]?o:null,R?.mood?.signs??[]),n.metal),Qt();let s=Be({plate:n,frame:z,strand:B,mood:R?.mood,sign:o,place:null,near:{ctx:a,layout:r},aux:null});pt=s.sizes??null,s.band&&(w.uRim.value.z=s.band[0]-.02,w.uRim.value.w=Math.max(n.rim[1],s.band[1]+.02)),w.uNear.value=un(`near`,i),w.uNearWarp.value.set(r.ax,r.bx,r.ay,r.by),w.uNearT.value.set(r.Tx,r.Ty),w.uAuxOn.value=0,ct=null,Fe=e,je++,Ne=Math.round((Et()-t)*1e3),ft=``,Ve=!0,d()}function pn(e=0){Ae||P||(Ae=setTimeout(fn,e))}function mn(e){let t=B?.lights.length??0,n=bt(t,e);for(let e=0;e<48;e++)T[e].w=e<t?n.inkAt[e]:-1e4;w.uEntrance.value.set(n.rimAt,n.waveAt,n.fullAt,X.motif),W=e,He=n.end,G=!1,st=!1,yt++,on(e)}function hn(){for(let e of T)e.w=-1e4;w.uEntrance.value.set(-1e4,-1e4,-1e4,X.motif),He=V}function gn(e,t){let n=new Set(e);B?.lights.forEach((e,r)=>{n.has(e.id)&&(T[r].w=t+.12)}),At=t,on(t)}let _n=new m,vn=[new m,new m,new m],yn=new h;function bn(){if(!z||!a?.isCamera)return!1;a.updateMatrixWorld?.(),yn.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse);let e=R?.bounds?.floorY??0,t=Math.cos(q),n=Math.sin(q),[r,i]=Qe,o=(e,a)=>{let o=z.centre[0]+(z.right[0]*e+z.away[0]*a)*z.scale,s=z.centre[1]+(z.right[1]*e+z.away[1]*a)*z.scale;return[(o-r)*t+(s-i)*n+r,-(o-r)*n+(s-i)*t+i]},[s,c]=o(0,0),[l,u]=o(1,0),[d,f]=o(0,1);vn[0].copy(_n.set(l-s,0,u-c,0)).applyMatrix4(yn),vn[1].copy(_n.set(d-s,0,f-c,0)).applyMatrix4(yn),vn[2].copy(_n.set(s,e,c,1)).applyMatrix4(yn);let[p,m,h]=vn;return[p,m,h].every(e=>Number.isFinite(e.x+e.y+e.w))?(w.uH0.value.set(p.x,m.x,h.x,p.y,m.y,h.y,p.w,m.w,h.w),!0):!1}let xn=new x,Sn=new x;function Cn(){if(!a?.isCamera||!K?.cssWidth)return null;let e=K.cssWidth,t=K.cssHeight||e,n=Math.cos(q),r=Math.sin(q),[i,o]=Qe;a.updateMatrixWorld(),Sn.set(0,1,0).applyQuaternion(a.quaternion);let s=1/0,c=-1/0,l=1/0,u=-1/0;for(let d of R?.stones??[]){let[f,p,m]=d.position,h=Math.max(0,d.radius??0),g=(f-i)*n+(m-o)*r+i,_=-(f-i)*r+(m-o)*n+o;if(xn.set(g,p,_).project(a),!Number.isFinite(xn.x+xn.y)||xn.z>1)continue;let v=(xn.x+1)/2*e,y=(1-xn.y)/2*t;xn.set(g,p,_).addScaledVector(Sn,h).project(a);let b=Math.abs((1-xn.y)/2*t-y);s=Math.min(s,v-b),c=Math.max(c,v+b),l=Math.min(l,y-b),u=Math.max(u,y+b)}return c>s&&u>l?{left:s,right:c,top:l,bottom:u}:null}function wn(){if(!z||!a?.isCamera||!K?.width)return null;let e=R?.bounds?.floorY??0,t=Math.cos(q),n=Math.sin(q),[r,i]=Qe,o=o=>{let s=1/0,c=-1/0,l=1/0,u=-1/0;for(let d=0;d<64;d++){let f=d*Math.PI*2/64,p=Math.cos(f),m=Math.sin(f),h=Math.hypot(p/z.ex,m/z.ey)||1,g=z.ex*p+p/z.ex/h*o,_=z.ey*m+m/z.ey/h*o,v=z.centre[0]+(z.right[0]*g+z.away[0]*_)*z.scale,y=z.centre[1]+(z.right[1]*g+z.away[1]*_)*z.scale,b=(v-r)*t+(y-i)*n+r,S=-(v-r)*n+(y-i)*t+i,C=new x(b,e,S).project(a);s=Math.min(s,C.x),c=Math.max(c,C.x),l=Math.min(l,C.y),u=Math.max(u,C.y)}return{left:+((s+1)/2).toFixed(3),right:+((c+1)/2).toFixed(3),top:+((1-u)/2).toFixed(3),bottom:+((1-l)/2).toFixed(3)}},s=o(0),c=o(ne(I).rim[1]-1);return{loopWidth:+(s.right-s.left).toFixed(3),loop:s,rim:c,rimInside:c.left>=0&&c.right<=1&&c.top>=0&&c.bottom<=1,elevationDeg:+(Math.atan2(a.position.y-e,Math.hypot(a.position.x-(R?.bounds?.center?.[0]??0),a.position.z-(R?.bounds?.center?.[2]??0)))*180/Math.PI).toFixed(1)}}return{setDesign(e){if(P||!e?.mood)return!1;if(e.revisionKey===F)return!0;let t=F===null,n=R,r=et??(e.mood.signClear?e.mood.sign:null),i=an(e.mood,r),a=i!==I||r!==L;F=e.revisionKey,R=e,I=i,L=r;let o=new Map((n?.stones??[]).map(e=>[e.id,`${e.componentId}`])),s=(e.stones??[]).filter(e=>e.stone&&o.get(e.id)!==`${e.componentId}`).map(e=>e.id),c=new Map(B?.lights.map((e,t)=>[e.id,T[t].w])??[]);cn(),B?.lights.forEach((e,t)=>{T[t].w=c.get(e.id)??-1e4}),ln(),!K&&!g&&(K=Jt??Xt()),pn(0);let l=!!e.mood.chosen&&e.mood.chosen!==n?.mood?.chosen;return t||a&&l?G=!0:a||s.length>4?gn((e.stones??[]).filter(e=>e.stone).map(e=>e.id),V):s.length?gn(s,V):on(V),e.stonesKey,Ve=!0,!0},setConfiguration(e){if(P)return!1;let t=Number(e?.strength);w.uStrength.value=Number.isFinite(t)?Math.min(1,Math.max(0,t)):1;let n=typeof e?.qaSign==`string`&&Me(e.qaSign)?e.qaSign:null;if(n!==et){et=n,L=n??(R?.mood?.signClear?R.mood.sign:null);let e=an(R?.mood,L);e!==I&&(I=e,R&&(cn(),ln()),G=!0),Fe=null,pn()}return Ve=!0,!0},frame(e={}){if(P)return!1;if(!g&&globalThis.__qaAtmosphereFault===`frame`&&globalThis.document?.getElementById?.(`qa-session-marker`))throw globalThis.__qaAtmosphereFault=null,Error(`QA: Atmosfer karesinde hata`);let{timeSeconds:t=0,playing:n=!1,interacting:r=!1,selectedIds:i=[],productYaw:o=0,productPivot:s=[0,0]}=e;A&&!N&&e.renderer&&Se();let c=!!(A&&N&&Q.tier===null&&De()),l=A?Q.tier??(c?`hafif`:It().effective):`auto`,u=e.reducedMotion===!0||l===`hafif`;K=e.viewport??K,e.viewport&&!g&&(Jt=e.viewport),ft&&ft!==Yt(K)&&!Ae&&(Fe=null,pn(0));let f=Number.isFinite(e.wallSeconds)?e.wallSeconds:Et(),p=Et(),m=Ye>=0?(p-Ye)*1e3:null;Ye=p,We++,Ke??=typeof performance<`u`?performance.now():0,Je=Number(K?.cssWidth)>0&&Number(K.cssWidth)<700,w.uRose?.value.set(Je?.86:.14,.9);let h=Y===null?1/30:Math.min(.25,Math.max(0,p-Y));Y=p,nt=nt*.9+h*.1,!it&&nt>.05?it=!0:it&&nt<.036&&(it=!1),w.uLow.value=+!!it;let _=Ie;Ie=n,Le=u;let v=Re===null?0:Math.max(0,Math.min(.5,f-Re));Re=f,Q.awake&&!g&&(H=Math.max(H,V+1));let y=!(Q.awake&&!g)&&Je&&ne(I).quietOnPhone===!0&&V>=Math.max(He,At+2.5)&&en();if(ot=u?0:G||!u&&n&&V<H&&!y?Math.min(1,ot+v/lt):Math.max(0,ot-v/2),(!U||G)&&(V+=v*(G?1:ot*ot*(3-2*ot))),q=Number(o)||0,Qe=Array.isArray(s)?s:[0,0],R&&!wt&&a?.position&&!g){let e=sn(),t=Tt!==null&&Math.abs(e.elevation-Tt.elevation)<.001&&Math.abs(Math.atan2(e.toward[1],e.toward[0])-Math.atan2(Tt.toward[1],Tt.toward[0]))<.001;t||(Tt=e,kt=f);let n=t&&f-kt>=.15;if(n){wt=!0;let t=Oe?Math.atan2(Oe.toward[1],Oe.toward[0]):null;(t===null||Math.abs(t-Math.atan2(e.toward[1],e.toward[0]))>.001)&&(Oe=e,cn(),ln(),Fe=null,pn(0),st=!1,gt++)}vt=!n}(G||n&&!u&&!_)&&(u||!n?(hn(),G=!1):mn(V)),(u||!n)&&hn();let b=Array.isArray(i)?i:[],S=b.join(`\0`);S!==Ue&&(Ue=S,b.length===1&&!u&&gn(b,V)),r&&on(V);let T=Dt!==null&&W!==null&&!g;T&&(V=W+Dt,w.uLow.value=0);let E=u||!n,D=!E&&V<H&&!y&&!T;if(w.uTime.value=V,w.uBaked.value=+!!en(),ne(I).look.ring&&!E){let e=re(V);w.uRing.value.set(e.r,e.a)}else w.uRing.value.set(0,0);if(w.uReveal.value=E?Math.min(1,Math.max(0,(f-($e??=f))/mt)):1,E||($e=null),z){let e=Math.cos(q),t=Math.sin(q),[n,r]=Qe,i=e,o=-t,s=-n*e+r*t+n,c=t,l=e,u=-n*t-r*e+r,[d,f]=z.right,[p,m]=z.away,h=1/z.scale,[g,_]=z.centre;w.uQx.value.set((d*i+f*c)*h,(d*o+f*l)*h,(d*(s-g)+f*(u-_))*h),w.uQy.value.set((p*i+m*c)*h,(p*o+m*l)*h,(p*(s-g)+m*(u-_))*h);let v=Number.isFinite(R?.bounds?.floorY)?R.bounds.floorY:0;w.uFloorY.value=v;let y=Math.max(.001,R?.bounds?.radius??z.scale*2);if(O.scale.setScalar(y*80),O.position.set(R?.bounds?.center?.[0]??0,v,R?.bounds?.center?.[2]??0),a?.isCamera&&K?.width>0){let e=new x(R?.bounds?.center?.[0]??0,v,R?.bounds?.center?.[2]??0),t=e.clone().project(a),n=e.clone().add(new x(z.right[0],0,z.right[1]).multiplyScalar(z.scale)).project(a),r=Math.hypot((n.x-t.x)*K.width/2,(n.y-t.y)*K.height/2);Number.isFinite(r)&&r>0&&(w.uPxU.value=r/174),w.uRes.value.set(K.width,K.height)}}if(k){let e=z&&R?Cn():null,t=w.uEntrance.value.y<-1e3?1:Math.min(1,Math.max(0,(V-w.uEntrance.value.y)/1.2));k.place({camera:a,viewport:K,centre:R?.bounds?.center??[0,0,0],radius:R?.bounds?.radius??0,box:e,phone:Je,opacity:t*(E?w.uReveal.value:1)})}if(z&&!st&&(bn()&&(Ve=!0),(r||(W===null?We>2:V-W>He-W))&&(st=!0)),w.uAuxOn.value>.5&&ct){let e=E?0:Math.min(y?ot:1,Math.max(0,(H-V)/3));ze(ct,V,Mt).forEach(([t,n,r],i)=>w.uFigL.value[i].set(t,n,r*e))}else for(let e of w.uFigL.value)e.z=0;if(U=T||!D&&ot<=0&&V>=He,Ve=!1,g||(O.visible=!Q.flat),A&&e.renderer&&a?.isCamera&&K?.width>0&&!Ut&&!Q.flat){let t=!U||r;N||Se();let n=fe&&me===r,i=Number.isFinite(e.requestDelayMs)?e.requestDelayMs:null,o=Number(e.bestIntervalMs)||null;if(t&&Number.isFinite(m)&&!Q.frozen?n?N.sample(m,{paceMs:r?0:nn()*1e3,refreshMs:o,delayMs:i,regime:r?`turn`:`plate`,ready:Z!==`auto`||j.level>=3,plateSettled:Z!==`auto`||j.level<=j.getState().ceiling}):N.pause():t||N.pause(),t&&Number.isFinite(m)&&Z===`auto`&&!Q.frozen){let e=j.guard;if((r?M:j).sample(m,{paceMs:r?0:nn()*1e3,hintMs:o,delayMs:i,continued:n,limit:N.exhausted?J.length-1:3,guardOk:N.exhausted}),jt=Bt(j.getState()),Lt(),j.guard&&!e&&Z===`auto`){le=!0,H=Math.min(H,V);try{globalThis.dispatchEvent?.(new CustomEvent(`gravur-comfort`))}catch{}}}else t?Lt():(j.pause(),M.pause());if(pe(t),xe){xe=!1;let e=Et(),t=globalThis.requestAnimationFrame;typeof t==`function`&&t(()=>N?.noteRestFrame((Et()-e)*1e3))}fe&&!t&&N.config({moving:!0}).pieceLowered&&N.restFull!==`no`&&!Q.frozen&&(xe=!0,d()),Q.frozen||_e({...N.levels,plate:+!!U},be()??3),c&&!Q.frozen?Ee():we&&=(clearTimeout(we),0),Pt!==!U&&(Pt=!U,Lt()),fe=t,me=r,r||M.pause(),O.material!==A.viewMaterial&&(O.material=A.viewMaterial);try{ce=A.update(e.renderer,a,O,{width:K.width,height:K.height,want:t?Q.level!==null||Z!==`auto`?tn().scale:r?Math.min(j.step.scale,M.step.scale):j.step.scale:1})}catch(e){throw O.material=C,ce=`failed`,e}de&&clearTimeout(de),de=setTimeout(()=>{de=0,P||A.release()},_t)}else O.material!==C&&(O.material=C);if(A){let e=A.getState(),t=j.getState(),n=M.getState();Ot={plate:I,scale:e.scale,size:e.size,hz:+(1/nn()).toFixed(1),moving:!U||r,draws:e.draws,level:t.level,levels:J.length,reason:t.reason,tier:It(),dragLevel:n.level,dragReason:n.reason,bestMs:t.bestMs??n.bestMs,guard:le,at:p}}return dt=dt*.9+(Et()-p)*100,qe&&=(clearTimeout(qe),0),U||rn(),!0},needsFrame(){return!P&&(Ve||vt||(Le||!Ie)&&w.uReveal.value<1)},reset(){G=!0,Ve=!0},release(){if(P)return!0;de&&=(clearTimeout(de),0),G=!0,wt=!1,Tt=null,k?.hide(),k?.release(),Ce(),A?.release();for(let e of[zt.near,zt.aux,$.a,$.b,$.c])e?.dispose();return!0},getState(){let e=I?ne(I).id:null,t=B?B.lights.filter((e,t)=>V-T[t].w>=X.motif).length:0,n=B?B.motifs.map(e=>`${e.id}:${e.base[0].toFixed(3)}:${e.base[1].toFixed(3)}`).join(`|`):``;return{kind:`gravur`,version:5,plate:e,sign:L,stones:B?.lights.length??0,motifs:B?.motifs.length??0,inked:t,motifKey:n,frames:We,createdAt:Ft,firstFrameAt:Ke,painted:je,paintMs:Ne,uploads:Pe,texture:Rt.near?[Rt.near.width,Rt.near.height]:null,aux:w.uAuxOn.value>.5,clock:W===null?1e4:+(V-W).toFixed(3),entranceSeconds:W===null?0:+(He-W).toFixed(3),settled:U,pace:+ot.toFixed(3),motionUntil:H,playing:Ie,reducedMotion:Le,phone:Je,solo:Ue?Ue.split(`\0`):[],reveal:w.uReveal.value,frame:z?{ex:+z.ex.toFixed(3),ey:+z.ey.toFixed(3),scale:+z.scale.toFixed(4)}:null,pxU:+w.uPxU.value.toFixed(3),drawCalls:1,baked:w.uBaked.value===1,bakes:Gt,bakeMs:Wt,lowCost:it,frameMs:+(nt*1e3).toFixed(1),frameJsMs:+dt.toFixed(3),tileHeld:st,relayouts:gt,entrances:yt,figureLight:!!ct,plateAway:z?+Math.atan2(z.away[1],z.away[0]).toFixed(5):null,tileKey:w.uH0.value.elements.slice(0,6).map(e=>+e.toFixed(4)).join(`,`),motifSizes:pt?[...pt]:null,figures:k?k.getState(a):null,framing:wn(),plateCache:A?{...A.getState(),last:ce}:null,ladder:j?j.getState():null,dragLadder:M?M.getState():null,plateHz:+(1/nn()).toFixed(1),comfortStill:le,stageTuner:N?N.getState():null}},dispose(){if(!P){P=!0,Ht.delete(Nt),Ce(),A?.dispose(),de&&clearTimeout(de),qe&&clearTimeout(qe),Ae&&clearTimeout(Ae),Kt&&clearTimeout(Kt),k?.dispose(),S.parent?.remove(S),O.geometry.dispose(),C.dispose(),w.uNear.value?.dispose?.(),w.uAux.value?.dispose?.(),w.uNoise.value?.dispose?.();for(let e of Object.values(zt))e?.dispose();for(let e of Object.values($))e?.dispose();for(let e of Object.values(qt))e?.dispose()}}}}export{$ as A,at as C,Rt as D,Bt as E,Vt as O,zt as S,Wt as T,dt as _,X as a,Qt as b,ot as c,it as d,kt as f,st as g,pt as h,ct as i,Kt as k,ht as l,mt as m,_t as n,vt as o,ft as p,lt as r,yt as s,gt as t,ut as u,$t as v,qt as w,bt as x,Zt as y};