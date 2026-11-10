import{_ as e,d as t,g as n,h as r,p as i,r as a,t as o}from"./bead-sizing-l55YQmQ6.js";import{a as s,n as c,r as l,t as u}from"./material-measurement-DoOVQVW5.js";import{t as d}from"./material-catalog-binding-BJtnRKKP.js";import{t as f}from"./component-registry-B2kW7Ofm.js";import{a as p,i as m,n as ee,r as h,t as g}from"./material-admission-geometry-CRkCLwrS.js";var _=`extras-padding-v1`,v=new Set([`copyright`,`license`,`licence`,`attribution`,`rights`]);function y(e){return typeof e==`object`&&!!e&&Object.entries(e).some(([e,t])=>v.has(e.toLowerCase())||y(t))}function b(e,t,{form:n=`round`,boreCenterMm:r}={}){let{jsonBytes:i,binBytes:a}=p(e);if(!a)return null;let o=e instanceof ArrayBuffer?new Uint8Array(e):e,s=20+i,c=JSON.parse(new TextDecoder().decode(o.subarray(20,s))),l=o.subarray(s+8),u=c.asset.extras;if(u&&Object.hasOwn(u,`jewDigitalNominalVariant`))throw Error(`Bu GLB dijital nominal varyant kaydı taşıyor. Fiziksel örneğin özgün GLB’sini seç.`);let d=0,f=Array.isArray(c.materials)?c.materials:[];for(let e of[c,c.asset,...f])if(e&&Object.hasOwn(e,`extras`)){if(y(e.extras))throw Error(`GLB ek bilgileri kullanım hakkı kaydı içeriyor. Bu haklara uygun bir GLB dışa aktar.`);delete e.extras,d++}let m=(c.bufferViews??[]).reduce((e,{byteOffset:t=0,byteLength:n})=>Math.max(e,t+n),0),h=c.buffers[0],g=h.byteLength-m,_=g>0&&l.length-m<=3&&l.subarray(m).every(e=>e===0)?g:0;if(_&&(h.byteLength=m),!d&&!_)return null;let v=new TextEncoder().encode(JSON.stringify(c,(e,t)=>{if(typeof t==`number`&&!Number.isFinite(t))throw Error(`GLB JSON bölümünde sonlu olmayan sayı var.`);return t})),b=Math.ceil(v.length/4)*4,x=20+b,S=new Uint8Array(x+8+l.length);S.set(o.subarray(0,20));let C=new DataView(S.buffer);C.setUint32(8,S.length,!0),C.setUint32(12,b,!0),S.fill(32,20,x),S.set(v,20),S.set(o.subarray(s),x);let w=ee(S,t,{publicPayload:!0,form:n,boreCenterMm:r});return{bytes:S,bin:S.subarray(x+8),geometry:w,removedExtras:d,paddingBytes:_}}var x=`jew.material-catalog-admission.v1`,S=`jew.material-catalog-admission.v2`,C=`jew.material-catalog-admission.v3`,w=`jew.material-catalog-admission.v4`,te=`jew.material-catalog-admission.v5`,T=`jew.material-catalog-admission.v6`,E=`irregular-threaded`,ne=`visual-approved`,D=[`intake`,`measurementRevision`,`name`,`operatorRef`,`rightsRef`,`reviewRef`,`visualApproved`],re=[`role`,`materialClass`,`materialEvidenceRef`,`classApproved`],O=[`method`,`sha256`,`bytes`,`binSha256`],ie=/^[0-9a-f]{64}$/,k=new Map([[`jpg`,`image/jpeg`],[`jpeg`,`image/jpeg`],[`png`,`image/png`],[`webp`,`image/webp`]]),ae=`model/gltf-binary`,A=e=>e.split(`.`).at(-1).toLowerCase();function j(e,t){return typeof e==`object`&&!!e&&!Array.isArray(e)&&Reflect.ownKeys(e).length===t.length&&t.every(t=>Object.hasOwn(e,t))}function M(e){if(typeof e!=`string`||e.length>262144||new TextEncoder().encode(e).byteLength>262144)throw RangeError(`Görsel katalog kabul kaydı en fazla 256 KiB JSON olabilir.`)}function N(e,t,n){if(typeof e!=`string`||e.length>t||!e.isWellFormed()||!e.trim()||/[<>\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))throw TypeError(`${n} boş veya geçersiz.`);return e.trim()}function oe(e){if(typeof e!=`string`||e.length>180||!e.isWellFormed()||e!==e.trim()||e.startsWith(`.`)||!e.includes(`.`)||/[<>:"/\\|?*\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))return!1;let t=e.normalize(`NFKC`).split(`.`)[0].trimEnd().toUpperCase();return!/^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9]|CONIN\$|CONOUT\$)$/.test(t)}function P(e){if(!Array.isArray(e?.photoFiles)||!e.photoFiles.length||e.photoFiles.length>16)return!1;let t=[...e.photoFiles,e.modelFile];return!t.every(oe)||A(e.modelFile)!==`glb`||!e.photoFiles.every(e=>k.has(A(e)))?!1:new Set(t.map(e=>e.normalize(`NFKC`).toUpperCase())).size===t.length}var se=e=>e===`stone`||e===`bead`;function ce(e){return e?.identity?.existingMaterialId===null&&[`stone`,`other`,`spacer`].includes(e.identity.kind)}function F(e,t,n,r){let i=t?.source?.variantIndex;if(t?.status!==`operator-measured`||!Number.isSafeInteger(i)||i<0)return!1;let a=e?.variants?.[i],{holeCount:s,holeDiameterMm:c}=t.measurement??{};return a?.stockUnit!==`piece`||s!==1||!Number.isFinite(c)||c<=0?!1:r===`offset-pendant`?n===`pendant`&&e?.identity?.existingMaterialId===null&&[`stone`,`other`,`finding`].includes(e.identity.kind)&&a.nominalDiameterMm===null:(n===void 0?e?.identity?.existingMaterialId===null&&e.identity.kind===`stone`:se(n)&&ce(e))&&(r===E||r===`inclusion-threaded`?n!==void 0:r===`round`&&o.includes(a.nominalDiameterMm))}function le(e,t){return!Array.isArray(t)||t.length!==e.photoFiles.length+1?!1:new Set(t.map(e=>e?.name)).size===t.length&&t.every(t=>j(t,[`name`,`bytes`,`sha256`,`mimeType`])&&(t.name===e.modelFile?t.mimeType===ae:e.photoFiles.includes(t.name)&&t.mimeType===k.get(A(t.name))))}function ue(e,t,n,r=`round`){return F(e,t,n,r)&&P(e.visual)&&le(e.visual,t.source.assets)}async function I(e,t,n,r){if(!j(t,[`schemaVersion`,`status`,`source`,`measurement`,`revisionId`])||!j(t.source,[`intakeSha256`,`variantIndex`,`variant`,`assets`])||!j(t.measurement,[`dimensionsMm`,`holeDiameterMm`,`holeCount`,`method`,`reference`])||!j(t.measurement.dimensionsMm,[`x`,`y`,`z`]))throw TypeError(`Ölçüm revizyonu geçersiz.`);if(!F(e,t,n,r))throw TypeError(r===`offset-pendant`?`Kolye ucu kabulü için yeni, nominal çapı boş bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:r===E?`Düzensiz görsel katalog kabulü için yeni bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:r===`inclusion-threaded`?`İç kapanımlı parça kabulü için yeni bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:`Görsel katalog kabulü için ${n===void 0?`yeni bir taş`:`yeni bir yuvarlak parça adayı`}, 4/6/8 mm adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`);if(!P(e.visual))throw TypeError(`Görsel dosya adları güvenli ve birbirinden farklı olmalı.`);let{variantIndex:i,assets:a}=t.source;if(!le(e.visual,a))throw TypeError(`İncelenmiş dosya özetleri ve uzantıları eşleşmiyor.`);let o=l(t),s=await u({intake:e,variantIndex:i,...t.measurement,assets:a.map(e=>e.mimeType===ae?{...e,version:2}:e)});if(o!==l(s))throw TypeError(`Ölçüm revizyonu, seçilen varyant veya kaynak dosya özetleri değişmiş.`);return s}function L(e,t){if(!j(e,re)||!(t?e.role===`pendant`:se(e.role)))throw TypeError(`Katalog rolü veya malzeme sınıfı kaydı geçersiz.`);let{role:r,materialClass:i,materialEvidenceRef:a,classApproved:o}=e;if(i===null){if(a!==null||o!==!1)throw TypeError(`Bilinmeyen malzeme sınıfına kanıt veya onay eklenemez.`)}else{if(!n(i)||o!==!0)throw TypeError(`Bilinen malzeme sınıfı için geçerli sınıf ve ayrı operatör onayı gerekli.`);N(a,200,`Malzeme sınıfı kanıt referansı`)}return{role:r,materialClass:i,materialEvidenceRef:a,classApproved:o}}function de(e,t){let n=[...t,`catalog`,`preparation`];if(e.form===`offset-pendant`)n.push(`form`,`boreCenterMm`);else if(e.form===E||e.form===`inclusion-threaded`)n.push(`form`);else if(e.form!==void 0)return!1;return j(e,n)}function fe(e,t){if(!j(e,O))throw TypeError(`GLB hazırlama kaydı geçersiz.`);let{method:n,sha256:r,bytes:i,binSha256:a}=e;if(n!==`extras-padding-v1`||typeof r!=`string`||!ie.test(r)||typeof a!=`string`||!ie.test(a)||!Number.isSafeInteger(i)||i<32||i>33554432||i%4||r===t.sha256)throw TypeError(`GLB hazırlama kaydı geçersiz.`);return{method:n,sha256:r,bytes:i,binSha256:a}}async function pe({intake:e,measurementRevision:t,name:n,operatorRef:r,rightsRef:a,reviewRef:o,catalog:l,form:u,boreCenterMm:d,preparation:f},p,m){let ee=s(JSON.stringify(e)),h={name:N(n,160,`Katalog adı`),operatorRef:N(r,200,`Operatör referansı`),rightsRef:N(a,200,`Kullanım hakkı referansı`),reviewRef:N(o,200,`Görsel inceleme referansı`)};if(m===C&&u!==E)throw TypeError(`Düzensiz katalog kabul biçimi geçersiz.`);if(m===te&&u!==`inclusion-threaded`)throw TypeError(`İç kapanımlı katalog kabul biçimi geçersiz.`);let g=m===T,_=m===w||g&&u===`offset-pendant`;if(_&&u!==`offset-pendant`)throw TypeError(`Kolye ucu kabul biçimi geçersiz.`);if(_&&!i(d))throw TypeError(`Kolye ucu delik koordinatı kaynak milimetresinde geçerli bir X ve Y çifti olmalı.`);let v=m===x?void 0:L(l,_),y=await I(ee,t,v?.role,u??`round`),b={schemaVersion:m,status:ne,...h,nonce:p,intake:ee,measurementRevision:y};v&&(b.catalog=v),(m===C||m===te||_||g&&u!==void 0)&&(b.form=u),_&&(b.boreCenterMm=d.map(e=>e===0?0:e)),g&&(b.preparation=fe(f,y.source.assets.find(e=>e.name===ee.visual.modelFile)));let S={...b,admissionId:`sha256:${await c(b)}`};return M(JSON.stringify(S)),S}async function me(e){let t=e&&Object.hasOwn(e,`preparation`)?de(e,D)?T:null:j(e,[...D,`catalog`,`form`,`boreCenterMm`])?w:j(e,[...D,`catalog`,`form`])?e.form===`inclusion-threaded`?te:C:j(e,[...D,`catalog`])?S:j(e,D)?x:null;if(!t||e.visualApproved!==!0)throw TypeError(`Görsel katalog kabulü için açık operatör onayı gerekli.`);if(!globalThis.crypto?.getRandomValues)throw Error(`Görsel katalog kabulü için güvenli rastgele veri gerekli.`);let n=globalThis.crypto.getRandomValues(new Uint8Array(32));return pe(e,Array.from(n,e=>e.toString(16).padStart(2,`0`)).join(``),t)}var he=new Intl.NumberFormat(`tr-TR`,{maximumFractionDigits:3}),ge=`irregular-threaded`;function _e(c,l,p,v){let y=c(`material-intake-dialog`),x=[`material-intake-json`,`material-intake-photos`,`material-intake-model`].map(c),S=c(`material-intake-status`),C=c(`material-intake-results`),w=c(`material-intake-reviewed`),te=c(`material-intake-inspect`),T=c(`material-intake-export`),E=c(`material-measurement`),ne=c(`material-measurement-variant`),D=c(`material-measurement-confirm`),re=c(`material-measurement-export`),O=c(`material-measurement-status`),ie=c(`material-binding`),k=c(`material-binding-component`),ae=c(`material-binding-sku`),A=c(`material-binding-export`),j=c(`material-binding-status`),M=e=>c(`material-admission-${e}`),N=c(`material-admission`),oe=M(`photo`),P=M(`photo-preview`),se=M(`photo-status`),F=M(`geometry`),le=M(`preparation`),I=M(`prepare`),L=M(`model-preview`),de=M(`model-views`),fe=M(`model-image`),pe=M(`model-status`),_e=M(`model-source`),ve=[...de.querySelectorAll(`[data-material-review-view]`)],ye=ve.find(e=>e.dataset.materialReviewView===`bore`),be=[`name`,`operator`,`rights`,`review`].map(M),R=M(`form`),xe=R.querySelector(`[value="round"]`),Se=R.querySelector(`[value="irregular-threaded"]`),Ce=R.querySelector(`[value="${e}"]`),we=R.querySelector(`[value="${t}"]`),Te=M(`bore-fields`),Ee=[`bore-x`,`bore-y`].map(M),z=M(`role`),B=M(`class`),De=M(`class-fields`),Oe=M(`class-evidence`),V=M(`class-confirm`),ke=M(`class-confirm-label`),H=M(`confirm`),Ae=M(`export`),je=M(`confirm-label`),Me=M(`status`),U=e=>c(`material-measurement-${e}`),Ne=[`x`,`y`,`z`,`hole-count`,`hole-diameter`,`method`,`reference`].map(U),W=0,G=null,Pe=[],Fe=null,K=0,Ie=!1,q=null,J=null,Le=0,Re=!1,ze=0,Be=null,Y=null,X=null,Z=null,Ve=new Map,He=new Set;for(let[e,t]of Object.entries(r)){let n=document.createElement(`option`);n.value=e,n.textContent=t,B.append(n)}c(`material-intake-prompt`).value=`# JEW · Malzeme ekleme sözleşmesi ve sabit AI prompt'u

9 Kasım 2026 · \`jew.material-intake.v1\` formatı, Studio’nun yerel **Malzeme giriş taslağı** panelinin AI JSON girdisidir. [Ana mimari plan](commerce-production-plan-20261109.md)

## Kullanım

Fotoğrafı ve bildiğin tedarikçi ve ölçü bilgisini aşağıdaki prompt ile AI’a ver. Çıktıyı JSON olarak kaydet. Panelde JSON, özgün fotoğraflar ve GLB dosyasını aynı taslakta aç. Panel AI önerilerini, girdiğin ölçüleri ve dijital modelden hesaplanan bilgileri ayrı gösterir.

AI araştırması ürün kataloğu taslağı oluşturur. Envantere gerçek miktar girişi, fiziksel ölçüm onayı ve satışa açma ayrı işlemlerdir. Düzenli AI API masrafı gerekmeyen manuel dosya aktarımı ilk sürüm için yeterlidir.

## Her malzeme için gerekli bilgi

| Alan grubu | Zorunlu bilgiler | Kaynak |
| --- | --- | --- |
| Kimlik | Ad, tür, yeni aile/mevcut varyant ilişkisi, iç kod | Yönetici; kodu sistem verir |
| Fiziksel | Boyut şekli, nominal ve ölçülmüş değerlerin ayrımı, ölçü birimi/tolerans | Tedarikçi ve/veya gerçek ölçüm |
| Montaj | Delik/port sayısı ve konumu, delik çapı, dizme yönü, geçebilen ip, yüz yönü | Ölçüm + operatör kontrolü |
| Varyant | Boy/renk/kaplama/kalite; tekil stok SKU'su | Yönetici |
| Görsel | Fotoğraf, GLB, ölçü/eksen kalibrasyonu, preview | Dosya incelemesi + yönetici |
| Semantik | Element/burç ağırlığı önerisi, diğer temalar, kaynak ve anlaşmazlık | AI önerisi + editoryal kabul |
| Kaynak | Tedarikçi beyanı, dosya üreticisi/lisansı, araştırma URL'leri | Gerçek belgeler |
| Stok | Adet veya uzunluk, lokasyon/raf, lot, giriş nedeni | Gerçek sayım/satın alma |
| Ticari | Maliyet ve para birimi, satılabilirlik, fiyat kuralı | Yönetici; AI uydurmaz |

Taş dışında ip, zincir, kilit, halka, ara parça, sıkma parçası, uç ve satın alınan hazır düğüm de aynı malzeme ailesine girer. Düğüm atma işlemi ayrı montaj şablonudur. Bir görsel parça birden fazla fiziksel malzemeden oluşuyorsa \`assembly\` eşlemesi gerekir.

## Kopyalanacak sabit prompt

\`\`\`text
JEW Studio için malzeme katalog ASİSTANISIN. Verdiğim fotoğraf, tedarikçi
bilgisi ve ölçüleri kullanarak yalnız jew.material-intake.v1 taslağı üret.
Çıktın satış, fiziksel doğrulama veya envanter giriş yetkisi değildir.

GİRDİLER
- Fotoğraf(lar): bu mesaja ekli.
- Bildiğim malzeme adı/tür/tedarikçi beyanı: [buraya yazacağım]
- Bildiğim ölçüler, ölçme yöntemi ve birim: [varsa yazacağım]
- Mevcut aile/kod veya yeni malzeme: [varsa yazacağım]
- GLB dosya adı ve bilinen kalibrasyonu: [varsa yazacağım]
- Ek not: [varsa yazacağım]

KURALLAR
1. Fotoğraftan kesin mineral türü, doğallık, saflık, kaplama kalınlığı,
   delik çapı, gerçek boyut, stok, maliyet veya fiziksel dayanım uydurma.
   Bildirilmeyen ya da doğrulanamayan değer null; eksik nedenini yaz.
2. Fotoğraf gözlemi, kullanıcı beyanı, tedarikçi beyanı, dış kaynak araştırması
   ve editoryal öneriyi ayır. Her iddia claims[] içinde evidenceIds taşısın.
   Görsel tahmini confirmed diye etiketleme. Doğrulama yetkisi yöneticiye ait.
3. Web erişimin varsa kimlik/bakım için uygun birincil mineral/müze/üretici
   kaynaklarını araştır. Burç/element bağlantılarını geleneksel veya sembolik
   ilişki olarak ayrı yaz. Web erişimin yoksa researchStatus=not_run de;
   görmediğin sayfa, alıntı, URL, tarih veya atıf üretme.
4. Burç/element ağırlıkları fiziksel/bilimsel gerçek değildir. 0..1 aralığında
   editoryal öneri ver. Kaynaklar çelişiyorsa alternatives/uncertainties içinde
   belirt. Kanıt yoksa boş vektör ve null bırakabilirsin. Hiçbir sağlık,
   tedavi, şifa, başarı veya koruma garantisi yazma.
5. Element anahtarları earth, water, air, fire. Burç anahtarları:
   symbol.zodiac.aries, symbol.zodiac.taurus, symbol.zodiac.gemini,
   symbol.zodiac.cancer, symbol.zodiac.leo, symbol.zodiac.virgo,
   symbol.zodiac.libra, symbol.zodiac.scorpius, symbol.zodiac.sagittarius,
   symbol.zodiac.capricorn, symbol.zodiac.aquarius, symbol.zodiac.pisces.
   Desteklenmeyen etiketleri suggestions[] içine koy; yeni runtime ID üretme.
6. Aynı malzemenin 4/6/8 mm varyantlarını ayrı variants[] girdisi yap.
   Gerçekte mevcut olduğu belirtilmeyen varyantı varmış gibi ekleme.
   Her ölçüde unit=mm; nominal ile measured ayrıdır. Delik bilinmiyorsa null.
7. 3B dosyayı görmediysen file/scale/mesh doğrulaması yapıldığını söyleme.
   Fotoğraf benzerliği gerçek stokla fiziksel eşleşme kanıtı değildir.
8. İç kimlik, SKU, hash, onaylayan kişi, stok ve fiyatı kendin atama.
   Bunlar import/operatör tarafından doldurulur. JSON'a script/HTML ekleme.
9. Çıktı tek geçerli JSON olsun. Markdown çiti veya ek açıklama olmasın.
   Aşağıdaki şablonun ana alanlarını koru, belirsizlikleri açık kaydet.

ŞEMA
schemaVersion: "jew.material-intake.v1"
status: "draft"
identity: { existingMaterialId:null|string, suggestedName:string,
            kind:"stone"|"cord"|"chain"|"clasp"|"spacer"|"finding"|
                 "assembly"|"other", identityStatus:"unverified" }
variants: [{ label:string, nominalDiameterMm:null|number,
             dimensionsMm:{x:null|number,y:null|number,z:null|number},
             holeDiameterMm:null|number, holeCount:null|integer,
             finish:null|string, stockUnit:"piece"|"mm",
             measurementsStatus:"unverified", evidenceIds:[string] }]
visual: { photoFiles:[string], modelFile:null|string,
          modelInspected:boolean, millimetersPerModelUnit:null|number,
          notes:[string] }
semanticProposal: { basis:"symbolic_editorial", profileVersion:"proposal-v1",
                    zodiacWeights:{}, elementWeights:{},
                    otherThemeSuggestions:[string], evidenceIds:[string],
                    rationale:string, needsEditorialApproval:true }
researchStatus: "not_run"|"partial"|"performed"
evidence: [{ id:string, kind:"user_statement"|"supplier_statement"|
                       "photo_observation"|"web_source",
             title:string, url:null|string, accessedAt:null|string,
             note:string }]
claims: [{ field:string, value:any, basis:string, evidenceIds:[string],
           uncertainty:null|string }]
uncertainties: [string]
questionsForOperator: [string]
suggestions: [string]
\`\`\`

## Şablona uygun örnek çıktı

Bu örneğin girdi senaryosu: yönetici bir adet \`tas-on.jpg\` fotoğrafı ve \`tas.glb\` dosya adını veriyor, tedarikçinin ürünü “Granat, yuvarlak 8 mm” diye tanımladığını söylüyor. Bu gerçek envanter veya bu dosyaların varlığı iddiası değildir. Ölçüm, GLB incelemesi ve araştırma yapılmadığı örnekte açık tutulur.

\`\`\`json
{
  "schemaVersion": "jew.material-intake.v1",
  "status": "draft",
  "identity": {
    "existingMaterialId": null,
    "suggestedName": "Granat olduğu beyan edilen yuvarlak boncuk",
    "kind": "stone",
    "identityStatus": "unverified"
  },
  "variants": [{
    "label": "8 mm nominal",
    "nominalDiameterMm": 8,
    "dimensionsMm": { "x": null, "y": null, "z": null },
    "holeDiameterMm": null,
    "holeCount": null,
    "finish": null,
    "stockUnit": "piece",
    "measurementsStatus": "unverified",
    "evidenceIds": ["e1"]
  }],
  "visual": {
    "photoFiles": ["tas-on.jpg"],
    "modelFile": "tas.glb",
    "modelInspected": false,
    "millimetersPerModelUnit": null,
    "notes": ["Dosya adları operatör girdisidir; GLB teknik kontrolü yapılmadı."]
  },
  "semanticProposal": {
    "basis": "symbolic_editorial",
    "profileVersion": "proposal-v1",
    "zodiacWeights": {},
    "elementWeights": {},
    "otherThemeSuggestions": [],
    "evidenceIds": [],
    "rationale": "Araştırma yapılmadı; semantik ağırlık önerisi boş bırakıldı.",
    "needsEditorialApproval": true
  },
  "researchStatus": "not_run",
  "evidence": [{
    "id": "e1",
    "kind": "supplier_statement",
    "title": "Operatörün aktardığı tedarikçi tanımı",
    "url": null,
    "accessedAt": null,
    "note": "Granat, yuvarlak 8 mm olarak beyan edildi; bağımsız ölçüm yok."
  }],
  "claims": [{
    "field": "variants[0].nominalDiameterMm",
    "value": 8,
    "basis": "supplier_statement",
    "evidenceIds": ["e1"],
    "uncertainty": "Gerçek çap ve tolerans ölçülmedi."
  }],
  "uncertainties": ["Mineral kimliği doğrulanmadı.", "Delik ve model ölçeği bilinmiyor."],
  "questionsForOperator": ["Gerçek çap ve delik çapı nedir?", "Hangi lotta kaç adet var?"],
  "suggestions": []
}
\`\`\`

## İçe aktarma ve yayın kuralları

- Schema sürümü ve boyut sınırı kontrol edilir. Desteklenmeyen alanlar sessizce atılmaz; düzeltme listesinde gösterilir. Rakam aralıkları, canonical ID'ler ve evidence referansları doğrulanır.
- Fotoğraf/GLB adları yalnız seçilen yüklemelere eşlenir. JSON içindeki dosya yolu/URL okunup otomatik çalıştırılmaz veya sınırsız indirilmez. Kullanıcı yüklemesi güvensiz girdi sayılır.
- Üretim için eksik bilgiler taslağı engellemez; satışa açık duruma geçişi engeller. Semantik araştırması eksik gerçek malzeme, nötr atmosferle kullanılabilir.
- Taslak tekrar yüklendiğinde import kimliği/hash'i ile aynı taslak bulunur. Benzer fotoğraf tek başına aynı malzeme kararı vermez. Aynı aileye ek varyant veya yeni aile seçimi açık olmalı.
- Yeni ticari SKU alanları eski \`source.stockId\` alanına yazılmaz. Katalog adaptörü mevcut source/provenance biçimini korur.
- Semantik puanlar taslak olarak gelir. UI normalize edilmiş sonucu ve 4/6/8 mm katkı farkını gösterir; onaylanan profil sürümü saklanır.
- Yayımlama, veri revizyonu ve asset manifestini birlikte sabitler. Stok girişi ayrı, gerekçeli hareket oluşturur. Taslağı yayımlamak stok adedini artırmaz.
- Fotoğraftan üretilmiş GLB için üretici/model/prompt sürümü ve lisans beyanı tutulur. Orijinal ve optimize edilmiş dosyaların hash'leri sistemce hesaplanır; AI'ın verdiği hash kabul edilmez.

Bu belgedeki JSON, format örneğidir. Çalışan panelde yeni yuvarlak taşın yerel kabul adımları ayrıca belgelenmiştir. Fiziksel ölçüleri örnekten al ve kaynak araştırmasını kendi malzemen için doğrula. [Yerel görsel katalog onayı](commerce-production-plan-20261109.md#yerel-görsel-katalog-onayı)
`.match(/\x60\x60\x60text\r?\n([\s\S]*?)\r?\n\x60\x60\x60/)?.[1]??``;function Ue(){re.disabled=!G||!w.checked||!D.checked||Ie}function We(){q=null,ie.hidden=!0,k.replaceChildren(),ae.value=``,j.textContent=``}function Q(){let e=n(B.value);if(De.hidden=!e,V.disabled=!e||!Oe.value.trim(),e&&J&&R.value){let e=J.source.variant.nominalDiameterMm,t=R.value===`offset-pendant`?`kolye ucunu`:R.value===`inclusion-threaded`?`iç kapanımlı delikli parçayı`:R.value===ge?`düzensiz delikli parçayı`:`${e} mm parçayı`;ke.textContent=`Bu kayda dayanarak ${t} ${r[B.value]} olarak beyan ediyorum.`}L.disabled=!Y||!v||!!X||Ve.size>0,L.textContent=Y?.preparation?`Yayın kopyasını üç açıdan göster`:`GLB’yi üç açıdan göster`,je.textContent=Y?.preparation?`Yayın kopyasını özgün görsel hedefle karşılaştırdım. Gömülü görünümü ve yönü katalog için onaylıyorum.`:`Bu GLB’nin görünümünü ve yönünü inceledim, görsel katalog için onaylıyorum.`;let t=(Y?.preparation||R.value===`inclusion-threaded`)&&Ve.size===0;H.disabled=!J||!Y||!!X||P.hidden||t||He.size!==Pe.length||!z.value||be.some(e=>!e.value.trim());let i=e&&(V.disabled||!V.checked);Ae.disabled=H.disabled||!H.checked||i||Re}function Ge(){Le++,H.checked=!1,Me.textContent=``,Q()}function $(){V.checked=!1,Ge()}function Ke(){P.hidden=!0,P.removeAttribute(`src`),P.alt=``,Z&&URL.revokeObjectURL(Z),Z=null}function qe(){de.hidden=!0,fe.removeAttribute(`src`),fe.alt=``,_e.textContent=``;for(let e of Ve.values())URL.revokeObjectURL(e);Ve.clear()}function Je(e){let t=Ve.get(e);if(t){for(let t of ve){let n=t.dataset.materialReviewView===e;t.setAttribute(`aria-pressed`,String(n)),n&&(fe.alt=`GLB görünümü · ${t.textContent.trim()}`)}fe.src=t}}function Ye(){ze++,Be=null,le.hidden=!0,I.disabled=!1,Y=null,X?.abort(),X=null,qe(),pe.textContent=``,F.textContent=``}function Xe(){return G.intake.identity.kind===`stone`?`stone`:`bead`}function Ze(){let e=R.value===t,n=z.value;Te.hidden=!e;for(let t of Ee)t.disabled=!e;ye.textContent=e?`Delik (+Z)`:`Delik (+Y)`;for(let t of z.options)t.value&&(t.disabled=t.value===`pendant`!==e);e?z.value=`pendant`:n===`pendant`&&(z.value=Xe())}function Qe(){J=null,N.hidden=!0,Ye(),R.value=``;for(let e of Ee)e.value=``;se.textContent=``,oe.replaceChildren(),He.clear(),Ke();for(let e of be)e.value=``;z.value=B.value=Oe.value=``,Ze(),$()}async function $e(){Ke(),Ge();let e=Number(oe.value),t=Pe[e];if(!J||!t)return;let n=URL.createObjectURL(t.slice(0,t.size,G.assets[e].mimeType));Z=n,se.textContent=`Fotoğraf açılıyor…`,P.src=n;try{if(await P.decode(),!y.open||n!==Z)return;He.add(e),P.alt=`Kaynak fotoğrafı · ${t.name}`,P.hidden=!1,se.textContent=`${He.size}/${Pe.length} kaynak fotoğrafı açıldı.`}catch{if(!y.open||n!==Z)return;He.delete(e),Ke(),se.textContent=`Fotoğraf açılamadı (${t.name}). Geçerli bir dosya seçip yeniden incele.`}Q()}function et(e,t,n,r,i){let{form:a,boreCenterMm:o}=n,{displayExtent:s,diameterMm:c,triangles:l,boreClearanceMm:u,inclusionComponents:d}=r,f=e=>he.format(e),p=a===`round`?`Model çapı ${f(c)} mm · Sahne boyutları (X × Y × Z) ${s.map(f).join(` × `)}`:`Kaynak boyutu (X × Y × Z) ${s.map(e=>f(e*10)).join(` × `)} mm`,m=o?`+Z geçişi (kaynak X ${f(o[0])} mm, Y ${f(o[1])} mm)`:`+Y ekseninde merkezli geçiş`,ee=a===`inclusion-threaded`?` · ${f(d)} kapalı iç parça`:``,h=i?`Yayın kopyası doğrulandı.`:`GLB doğrulandı.`,g=i?` Gömülü görünümü üç açıdan aç ve özgün görsel hedefle karşılaştır.`:a===`inclusion-threaded`?` Onay için GLB’yi üç açıdan göster.`:``;F.textContent=`${h} ${m} · ${p} · Dijital geçiş çapı ${f(u)} mm · ${f(l)} üçgen${ee}.${g}`,Y={file:e,source:t,...n,preparation:i}}async function tt(e,t,n,r){let i=ze,a=()=>y.open&&e===J&&i===ze,o=n===`round`?e.source.variant.nominalDiameterMm:null,s={nominalMm:o,form:n,...r?{boreCenterMm:r}:{}};F.textContent=`GLB’nin dijital geometrisi kontrol ediliyor…`;try{let n=await t.arrayBuffer();if(!a())return;let r=await m({name:t.name,size:t.size,arrayBuffer:async()=>n},`model`);if(!a())return;let i=e.source.assets.find(e=>e.mimeType===`model/gltf-binary`);if(r.sha256!==i.sha256||r.bytes!==i.bytes)throw Error(`GLB baytları ölçüm revizyonuyla eşleşmiyor.`);try{let e=ee(n,o,{...s,publicPayload:!0});et(t,{sha256:i.sha256,bytes:i.bytes},s,e)}catch(e){if(!(e instanceof g)||!v)throw e;Be={bytes:n,options:s},le.hidden=!1,F.textContent=`Özgün GLB’de yayın kontrolüne takılan ek veri var.`}}catch(e){a()&&(F.textContent=e.message)}a()&&Q()}function nt(){Ye(),Ze(),$();let e=R.value;if(!J||!e)return;let t=e===`offset-pendant`?Ee.map(e=>e.valueAsNumber):void 0;t&&!i(t)?F.textContent=`GLB kontrolü için −20 ile 20 mm arasında X ve Y delik merkezi gir.`:tt(J,Fe,e,t)}function rt(){K++;for(let e of Ne)e.value=``;D.checked=!1,O.textContent=``,We(),Qe(),Ue()}function it(){W++,G=null,Pe=[],Fe=null,S.textContent=``,C.replaceChildren(),w.checked=!1,w.disabled=!0,T.disabled=!0,E.hidden=!0,E.open=!1,ne.replaceChildren(),rt()}for(let e of x)e.addEventListener(`change`,it);oe.addEventListener(`change`,$e),R.addEventListener(`change`,nt);for(let e of Ee)e.addEventListener(`input`,nt);for(let e of ve)e.addEventListener(`click`,()=>Je(e.dataset.materialReviewView));I.addEventListener(`click`,async()=>{if(!y.open||!Be||I.disabled)return;let e=Be,t=()=>y.open&&Be===e,n=document.activeElement===I,r=()=>n&&(document.activeElement===I||document.activeElement===document.body);I.disabled=!0,$(),F.textContent=`Yayın kopyası cihazda hazırlanıyor…`;try{let{bytes:n,options:i}=e,a=b(n,i.nominalMm,i);if(!a)throw Error(`Temiz bir GLB dışa aktar ve kaynak dosyaları yeniden incele.`);let[o,s]=await Promise.all([h(a.bytes),h(a.bin)]);if(!t())return;if(f.some(e=>e.source?.sha256===o))throw Error(`Yayın kopyası zaten katalogda. Ölçüm eşleştirmesi için katalogdaki GLB ve onunla eşleşen giriş kaydını kullan.`);let c={sha256:o,bytes:a.bytes.byteLength},l={method:_,...c,binSha256:s},u=r();Be=null,le.hidden=!0,et(new Blob([a.bytes],{type:`model/gltf-binary`}),c,i,a.geometry,l),Q(),u&&L.focus()}catch(e){if(!t())return;F.textContent=`Yayın kopyası hazırlanamadı. ${e.message}`,I.disabled=!1,r()&&I.focus()}}),L.addEventListener(`click`,async()=>{if(!y.open||L.disabled)return;let e=Y,t=new AbortController;X=t;let n=()=>y.open&&Y===e&&X===t;Ge(),pe.textContent=`Doğrulanan GLB’den görünümler hazırlanıyor…`;try{let{file:r,preparation:i,...a}=e,o=await r.arrayBuffer();if(!n())return;let{verifiedSha256:s,verifiedBytes:c,views:l}=await v({bytes:o,...a,signal:t.signal});if(!n())return;let u=new Map(l.map(e=>[e.id,e.blob]));if(s!==e.source.sha256||c!==e.source.bytes||l.length!==ve.length||ve.some(e=>{let t=u.get(e.dataset.materialReviewView);return!(t instanceof Blob)||t.type!==`image/png`||!t.size}))throw Error(`Görünümler doğrulanan GLB ile eşleşmiyor.`);for(let[e,t]of u)Ve.set(e,URL.createObjectURL(t));Je(`oblique`),_e.textContent=`${i?`Yayın kopyası · `:``}SHA-256 ${s}`,de.hidden=!1,pe.textContent=`Üç görünüm hazır. Görsel onayı ayrıca işaretle.`}catch(e){if(!n())return;qe(),pe.textContent=e.message}finally{n()&&(X=null,Q())}});for(let e of be)e.addEventListener(`input`,e===be[1]?$:Ge);z.addEventListener(`change`,$),B.addEventListener(`change`,()=>{Oe.value=``,$()}),Oe.addEventListener(`input`,$),window.addEventListener(`pageshow`,e=>{e.persisted&&y.open&&$()});function at(){Le++,Me.textContent=``,Q()}H.addEventListener(`change`,at),V.addEventListener(`change`,at),w.addEventListener(`change`,()=>{T.disabled=!G||!w.checked,E.hidden=T.disabled,E.hidden&&rt(),Ue()}),ne.addEventListener(`change`,rt);for(let e of Ne)e.addEventListener(`input`,()=>{K++,D.checked=!1,O.textContent=``,We(),Qe(),Ue()});return D.addEventListener(`change`,()=>{K++,D.checked||(We(),Qe()),Ue()}),te.addEventListener(`click`,async()=>{it();let e=W;te.disabled=!0,S.textContent=`Dosyalar cihazda inceleniyor…`;try{let[t]=x[0].files,n=[...x[1].files],[r]=x[2].files;if(!t||!r||!n.length||n.length>6)throw Error(`Bir AI JSON, bir GLB ve 1–6 fotoğraf seç.`);if(t.size>131072)throw Error(`AI JSON 128 KiB sınırını aşıyor.`);let i=s(await t.text()),a=new Set(n.map(e=>e.name));if(a.size!==n.length||i.visual.photoFiles.length!==a.size||!i.visual.photoFiles.every(e=>a.has(e))||r.name!==i.visual.modelFile)throw Error(`Fotoğraf veya GLB adları JSON ile eşleşmiyor.`);let o=[];for(let t of n){if(e!==W)return;o.push(await m(t,`photo`))}if(e!==W||(o.push(await m(r,`model`)),!y.open||e!==W))return;G={intake:i,assets:o},Pe=n,Fe=r,ne.replaceChildren(...i.variants.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.label,n}));let c=[`${i.identity.suggestedName} · ${i.variants.length} varyant`,...o.map(e=>`${e.name} · ${e.bytes} bayt · SHA-256 ${e.sha256}`)];C.replaceChildren(...c.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t})),w.disabled=!1,S.textContent=`Dosyalar eşleşti. Görsel model ve fiziksel özellikler operatör onayı bekliyor.`}catch(t){e===W&&(S.textContent=t.message)}finally{te.disabled=!1}}),T.addEventListener(`click`,()=>{G&&w.checked&&(l(JSON.stringify({schemaVersion:`jew.material-review.v1`,status:`reviewed-draft`,...G,reviewedAt:new Date().toISOString()},null,2),`jew-malzeme-taslagi.json`),S.textContent=`Taslak kayıt indirildi. Kaynak dosyalarını ayrıca sakla.`)}),re.addEventListener(`click`,async()=>{if(!G||!w.checked||!D.checked||Ie)return;let n=K;Ie=!0,Ue();try{let r=U(`hole-diameter`),i=await u({...G,variantIndex:Number(ne.value),dimensionsMm:{x:U(`x`).valueAsNumber,y:U(`y`).valueAsNumber,z:U(`z`).valueAsNumber},holeCount:U(`hole-count`).valueAsNumber,holeDiameterMm:r.value===``?null:r.valueAsNumber,method:U(`method`).value,reference:U(`reference`).value});if(!y.open||n!==K)return;l(JSON.stringify(i,null,2),`jew-malzeme-olcum-revizyonu.json`),O.textContent=`Ölçüm revizyonu indirildi. Stok ve katalog yayını bekliyor.`,Qe();let s=i.source.assets.find(e=>e.mimeType===`model/gltf-binary`),c=p.filter(e=>e.source?.sha256===s.sha256&&a(e)&&(!G.intake.identity.existingMaterialId||e.id===G.intake.identity.existingMaterialId));if(o.includes(i.source.variant.nominalDiameterMm)&&c.length){let e=document.createElement(`option`);e.value=``,e.textContent=`Katalog parçasını seç`,k.replaceChildren(e,...c.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),q=i,ie.hidden=!1}let d=ue(G.intake,i,`pendant`,t);if(ce(G.intake)||d){let n=Xe(),r=ue(G.intake,i,n),a=ue(G.intake,i,n,ge),o=ue(G.intake,i,n,e);f.some(e=>e.source?.sha256===s.sha256)?O.textContent=`Ölçüm revizyonu indirildi. Bu GLB zaten katalogda kayıtlı.`:r||a||o||d?(J=i,z.value=n,xe.disabled=!r,Se.disabled=!a,Ce.disabled=!o,we.disabled=!d,R.value=r?`round`:d&&!a?t:``,oe.replaceChildren(...Pe.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.name,n})),N.hidden=!1,$e(),nt()):O.textContent=`Ölçüm revizyonu indirildi. Yeni giriş için ölçülmüş tek delikli adet varyantı ve türleriyle uyumlu, güvenli kaynak dosya adları gerekir.`}}catch(e){n===K&&(O.textContent=e.message)}finally{Ie=!1,Ue()}}),A.addEventListener(`click`,async()=>{if(!q||A.disabled)return;let e=q,t=k.value,n=ae.value;A.disabled=!0;try{let r=p.find(e=>e.id===t);if(!r)throw Error(`Katalog parçasını açıkça seç.`);let i=await d(e,r,{sku:n});if(!y.open||e!==q||t!==k.value||n!==ae.value)return;l(JSON.stringify(i,null,2),`jew-katalog-eslestirme-taslagi.json`),j.textContent=`Eşleştirme taslağı indirildi. Stok ve satış onayı bekliyor.`}catch(t){e===q&&(j.textContent=t.message)}finally{A.disabled=!1}}),Ae.addEventListener(`click`,async()=>{if(!y.open||Ae.disabled)return;let e=J,t=Le,r=()=>y.open&&e===J&&t===Le,[i,a,o,s]=be.map(e=>e.value),c=n(B.value)?B.value:null,u={role:z.value,materialClass:c,materialEvidenceRef:c?Oe.value:null,classApproved:!!(c&&V.checked)},{form:d,boreCenterMm:f,preparation:p}=Y,m=d===`round`?{}:{form:d};f&&(m.boreCenterMm=f),p&&(m.preparation=p),Re=!0,Q();try{let t=await me({intake:G.intake,measurementRevision:e,name:i,operatorRef:a,rightsRef:o,reviewRef:s,visualApproved:H.checked,catalog:u,...m});if(!r())return;l(JSON.stringify(t),`jew-gorsel-katalog-onayi.json`),Me.textContent=`Özel onay dosyası indirildi. Katalog yayını ayrı bir adımdır.`}catch(e){r()&&(Me.textContent=e.message)}finally{Re=!1,Q()}}),c(`material-intake-close`).addEventListener(`click`,()=>y.close()),y.addEventListener(`close`,()=>{it();for(let e of x)e.value=``}),y}export{_e as installMaterialIntake};