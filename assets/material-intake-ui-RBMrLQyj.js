import{d as e,r as t,t as n,u as r}from"./bead-sizing-BDOVXsd0.js";import{a as i,n as a,r as o,t as s}from"./material-measurement-DoOVQVW5.js";import{t as c}from"./material-catalog-binding-CCjjglHW.js";import{t as l}from"./component-registry-DHzacw11.js";import{n as u,t as ee}from"./material-admission-geometry-OMdkf-i8.js";var te=`jew.material-catalog-admission.v1`,d=`jew.material-catalog-admission.v2`,f=`visual-approved`,p=[`intake`,`measurementRevision`,`name`,`operatorRef`,`rightsRef`,`reviewRef`,`visualApproved`],m=[`role`,`materialClass`,`materialEvidenceRef`,`classApproved`],h=new Map([[`jpg`,`image/jpeg`],[`jpeg`,`image/jpeg`],[`png`,`image/png`],[`webp`,`image/webp`]]),g=`model/gltf-binary`,_=e=>e.split(`.`).at(-1).toLowerCase();function v(e,t){return typeof e==`object`&&!!e&&!Array.isArray(e)&&Reflect.ownKeys(e).length===t.length&&t.every(t=>Object.hasOwn(e,t))}function y(e){if(typeof e!=`string`||e.length>262144||new TextEncoder().encode(e).byteLength>262144)throw RangeError(`Görsel katalog kabul kaydı en fazla 256 KiB JSON olabilir.`)}function b(e,t,n){if(typeof e!=`string`||e.length>t||!e.isWellFormed()||!e.trim()||/[<>\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))throw TypeError(`${n} boş veya geçersiz.`);return e.trim()}function x(e){if(typeof e!=`string`||e.length>180||!e.isWellFormed()||e!==e.trim()||e.startsWith(`.`)||!e.includes(`.`)||/[<>:"/\\|?*\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))return!1;let t=e.normalize(`NFKC`).split(`.`)[0].trimEnd().toUpperCase();return!/^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9]|CONIN\$|CONOUT\$)$/.test(t)}function ne(e){if(!Array.isArray(e?.photoFiles)||!e.photoFiles.length||e.photoFiles.length>16)return!1;let t=[...e.photoFiles,e.modelFile];return!t.every(x)||_(e.modelFile)!==`glb`||!e.photoFiles.every(e=>h.has(_(e)))?!1:new Set(t.map(e=>e.normalize(`NFKC`).toUpperCase())).size===t.length}var S=e=>e===`stone`||e===`bead`;function re(e){return e?.identity?.existingMaterialId===null&&[`stone`,`other`,`spacer`].includes(e.identity.kind)}function C(e,t,r){let i=t?.source?.variantIndex;if(!(r===void 0?e?.identity?.existingMaterialId===null&&e.identity.kind===`stone`:S(r)&&re(e))||t?.status!==`operator-measured`||!Number.isSafeInteger(i)||i<0)return!1;let a=e.variants?.[i],{holeCount:o,holeDiameterMm:s}=t.measurement??{};return a?.stockUnit===`piece`&&n.includes(a.nominalDiameterMm)&&o===1&&Number.isFinite(s)&&s>0}function w(e,t){return!Array.isArray(t)||t.length!==e.photoFiles.length+1?!1:t.every(t=>v(t,[`name`,`bytes`,`sha256`,`mimeType`])&&(t.name===e.modelFile?t.mimeType===g:e.photoFiles.includes(t.name)&&t.mimeType===h.get(_(t.name))))}function ie(e,t,n=void 0){return C(e,t,n)&&ne(e.visual)&&w(e.visual,t.source.assets)}async function T(e,t,n){if(!v(t,[`schemaVersion`,`status`,`source`,`measurement`,`revisionId`])||!v(t.source,[`intakeSha256`,`variantIndex`,`variant`,`assets`])||!v(t.measurement,[`dimensionsMm`,`holeDiameterMm`,`holeCount`,`method`,`reference`])||!v(t.measurement.dimensionsMm,[`x`,`y`,`z`]))throw TypeError(`Ölçüm revizyonu geçersiz.`);if(!C(e,t,n))throw TypeError(`Görsel katalog kabulü için ${n===void 0?`yeni bir taş`:`yeni bir yuvarlak parça adayı`}, 4/6/8 mm adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`);if(!ne(e.visual))throw TypeError(`Görsel dosya adları güvenli ve birbirinden farklı olmalı.`);let{variantIndex:r,assets:i}=t.source;if(!w(e.visual,i))throw TypeError(`İncelenmiş dosya özetleri ve uzantıları eşleşmiyor.`);let a=o(t),c=await s({intake:e,variantIndex:r,...t.measurement,assets:i.map(e=>e.mimeType===g?{...e,version:2}:e)});if(a!==o(c))throw TypeError(`Ölçüm revizyonu, seçilen varyant veya kaynak dosya özetleri değişmiş.`);return c}function E(t){if(!v(t,m)||!S(t.role))throw TypeError(`Katalog rolü veya malzeme sınıfı kaydı geçersiz.`);let{role:n,materialClass:r,materialEvidenceRef:i,classApproved:a}=t;if(r===null){if(i!==null||a!==!1)throw TypeError(`Bilinmeyen malzeme sınıfına kanıt veya onay eklenemez.`)}else{if(!e(r)||a!==!0)throw TypeError(`Bilinen malzeme sınıfı için geçerli sınıf ve ayrı operatör onayı gerekli.`);b(i,200,`Malzeme sınıfı kanıt referansı`)}return{role:n,materialClass:r,materialEvidenceRef:i,classApproved:a}}async function ae({intake:e,measurementRevision:t,name:n,operatorRef:r,rightsRef:o,reviewRef:s,catalog:c},l,u){let ee=i(JSON.stringify(e)),p={name:b(n,160,`Katalog adı`),operatorRef:b(r,200,`Operatör referansı`),rightsRef:b(o,200,`Kullanım hakkı referansı`),reviewRef:b(s,200,`Görsel inceleme referansı`)},m=u?E(c):void 0,h=await T(ee,t,m?.role),g={schemaVersion:u?d:te,status:f,...p,nonce:l,intake:ee,measurementRevision:h};u&&(g.catalog=m);let _={...g,admissionId:`sha256:${await a(g)}`};return y(JSON.stringify(_)),_}async function oe(e){let t=v(e,[...p,`catalog`]);if(!t&&!v(e,p)||e.visualApproved!==!0)throw TypeError(`Görsel katalog kabulü için açık operatör onayı gerekli.`);if(!globalThis.crypto?.getRandomValues)throw Error(`Görsel katalog kabulü için güvenli rastgele veri gerekli.`);let n=globalThis.crypto.getRandomValues(new Uint8Array(32));return ae(e,Array.from(n,e=>e.toString(16).padStart(2,`0`)).join(``),t)}var se=new Intl.NumberFormat(`tr-TR`,{maximumFractionDigits:3});function D(a,o,te,d){let f=a(`material-intake-dialog`),p=[`material-intake-json`,`material-intake-photos`,`material-intake-model`].map(a),m=a(`material-intake-status`),h=a(`material-intake-results`),g=a(`material-intake-reviewed`),_=a(`material-intake-inspect`),v=a(`material-intake-export`),y=a(`material-measurement`),b=a(`material-measurement-variant`),x=a(`material-measurement-confirm`),ne=a(`material-measurement-export`),S=a(`material-measurement-status`),C=a(`material-binding`),w=a(`material-binding-component`),T=a(`material-binding-sku`),E=a(`material-binding-export`),ae=a(`material-binding-status`),D=e=>a(`material-admission-${e}`),ce=a(`material-admission`),le=D(`photo`),O=D(`photo-preview`),k=D(`photo-status`),ue=D(`geometry`),de=D(`model-preview`),fe=D(`model-views`),pe=D(`model-image`),me=D(`model-status`),he=D(`model-source`),A=[...fe.querySelectorAll(`[data-material-review-view]`)],j=[`name`,`operator`,`rights`,`review`].map(D),M=D(`role`),N=D(`class`),ge=D(`class-fields`),P=D(`class-evidence`),F=D(`class-confirm`),_e=D(`class-confirm-label`),I=D(`confirm`),ve=D(`export`),L=D(`status`),R=e=>a(`material-measurement-${e}`),ye=[`x`,`y`,`z`,`hole-count`,`hole-diameter`,`method`,`reference`].map(R),z=0,B=null,V=[],be=null,H=0,xe=!1,U=null,W=null,Se=0,Ce=!1,G=null,K=null,q=null,J=new Map,Y=new Set;for(let[e,t]of Object.entries(r)){let n=document.createElement(`option`);n.value=e,n.textContent=t,N.append(n)}a(`material-intake-prompt`).value=`# JEW · Malzeme ekleme sözleşmesi ve sabit AI prompt'u

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
`.match(/\x60\x60\x60text\r?\n([\s\S]*?)\r?\n\x60\x60\x60/)?.[1]??``;function X(){ne.disabled=!B||!g.checked||!x.checked||xe}function we(){U=null,C.hidden=!0,w.replaceChildren(),T.value=``,ae.textContent=``}function Z(){let t=e(N.value);if(ge.hidden=!t,F.disabled=!t||!P.value.trim(),t&&W){let e=W.source.variant.nominalDiameterMm;_e.textContent=`Bu kayda dayanarak ${e} mm parçayı ${r[N.value]} olarak beyan ediyorum.`}de.disabled=!G||!d||!!K||J.size>0,I.disabled=!W||!G||!!K||O.hidden||Y.size!==V.length||!M.value||j.some(e=>!e.value.trim());let n=t&&(F.disabled||!F.checked);ve.disabled=I.disabled||!I.checked||n||Ce}function Te(){Se++,I.checked=!1,L.textContent=``,Z()}function Q(){F.checked=!1,Te()}function Ee(){O.hidden=!0,O.removeAttribute(`src`),O.alt=``,q&&URL.revokeObjectURL(q),q=null}function De(){fe.hidden=!0,pe.removeAttribute(`src`),pe.alt=``,he.textContent=``;for(let e of J.values())URL.revokeObjectURL(e);J.clear()}function Oe(e){let t=J.get(e);if(t){for(let t of A){let n=t.dataset.materialReviewView===e;t.setAttribute(`aria-pressed`,String(n)),n&&(pe.alt=`GLB görünümü · ${t.textContent.trim()}`)}pe.src=t}}function $(){W=null,ce.hidden=!0,G=null,K?.abort(),K=null,De(),me.textContent=``,ue.textContent=``,k.textContent=``,le.replaceChildren(),Y.clear(),Ee();for(let e of j)e.value=``;M.value=N.value=P.value=``,Q()}async function ke(){Ee(),Te();let e=Number(le.value),t=V[e];if(!W||!t)return;let n=URL.createObjectURL(t.slice(0,t.size,B.assets[e].mimeType));q=n,k.textContent=`Fotoğraf açılıyor…`,O.src=n;try{if(await O.decode(),!f.open||n!==q)return;Y.add(e),O.alt=`Kaynak fotoğrafı · ${t.name}`,O.hidden=!1,k.textContent=`${Y.size}/${V.length} kaynak fotoğrafı açıldı.`}catch{if(!f.open||n!==q)return;Y.delete(e),Ee(),k.textContent=`Fotoğraf açılamadı (${t.name}). Geçerli bir dosya seçip yeniden incele.`}Z()}async function Ae(e,t){let n=()=>f.open&&e===W;ue.textContent=`GLB’nin dijital geometrisi kontrol ediliyor…`;try{let r=await t.arrayBuffer();if(!n())return;let i=await u({name:t.name,size:t.size,arrayBuffer:async()=>r},`model`);if(!n())return;let a=e.source.assets.find(e=>e.mimeType===`model/gltf-binary`);if(i.sha256!==a.sha256||i.bytes!==a.bytes)throw Error(`GLB baytları ölçüm revizyonuyla eşleşmiyor.`);let o=e.source.variant.nominalDiameterMm,{displayExtent:s,diameterMm:c,triangles:l,boreClearanceMm:te}=ee(r,o,{publicPayload:!0}),d=e=>se.format(e);ue.textContent=`GLB doğrulandı. +Y ekseninde merkezli geçiş · Model çapı ${d(c)} mm · Dijital geçiş çapı ${d(te)} mm · Sahne boyutları (X × Y × Z) ${s.map(d).join(` × `)} · ${d(l)} üçgen.`,G={file:t,source:{sha256:a.sha256,bytes:a.bytes},nominalMm:o}}catch(e){n()&&(ue.textContent=e.message)}n()&&Z()}function je(){H++;for(let e of ye)e.value=``;x.checked=!1,S.textContent=``,we(),$(),X()}function Me(){z++,B=null,V=[],be=null,m.textContent=``,h.replaceChildren(),g.checked=!1,g.disabled=!0,v.disabled=!0,y.hidden=!0,y.open=!1,b.replaceChildren(),je()}for(let e of p)e.addEventListener(`change`,Me);le.addEventListener(`change`,ke);for(let e of A)e.addEventListener(`click`,()=>Oe(e.dataset.materialReviewView));de.addEventListener(`click`,async()=>{if(!f.open||de.disabled)return;let e=G,t=new AbortController;K=t;let n=()=>f.open&&G===e&&K===t;Te(),me.textContent=`Doğrulanan GLB’den görünümler hazırlanıyor…`;try{let r=await e.file.arrayBuffer();if(!n())return;let{verifiedSha256:i,verifiedBytes:a,views:o}=await d({bytes:r,source:e.source,nominalMm:e.nominalMm,signal:t.signal});if(!n())return;let s=new Map(o.map(e=>[e.id,e.blob]));if(i!==e.source.sha256||a!==e.source.bytes||o.length!==A.length||A.some(e=>{let t=s.get(e.dataset.materialReviewView);return!(t instanceof Blob)||t.type!==`image/png`||!t.size}))throw Error(`Görünümler doğrulanan GLB ile eşleşmiyor.`);for(let[e,t]of s)J.set(e,URL.createObjectURL(t));Oe(`oblique`),he.textContent=`SHA-256 ${i}`,fe.hidden=!1,me.textContent=`Üç görünüm hazır. Görsel onayı ayrıca işaretle.`}catch(e){if(!n())return;De(),me.textContent=e.message}finally{n()&&(K=null,Z())}});for(let e of j)e.addEventListener(`input`,e===j[1]?Q:Te);M.addEventListener(`change`,Q),N.addEventListener(`change`,()=>{P.value=``,Q()}),P.addEventListener(`input`,Q),window.addEventListener(`pageshow`,e=>{e.persisted&&f.open&&Q()});function Ne(){Se++,L.textContent=``,Z()}I.addEventListener(`change`,Ne),F.addEventListener(`change`,Ne),g.addEventListener(`change`,()=>{v.disabled=!B||!g.checked,y.hidden=v.disabled,y.hidden&&je(),X()}),b.addEventListener(`change`,je);for(let e of ye)e.addEventListener(`input`,()=>{H++,x.checked=!1,S.textContent=``,we(),$(),X()});return x.addEventListener(`change`,()=>{H++,x.checked||(we(),$()),X()}),_.addEventListener(`click`,async()=>{Me();let e=z;_.disabled=!0,m.textContent=`Dosyalar cihazda inceleniyor…`;try{let[t]=p[0].files,n=[...p[1].files],[r]=p[2].files;if(!t||!r||!n.length||n.length>6)throw Error(`Bir AI JSON, bir GLB ve 1–6 fotoğraf seç.`);if(t.size>131072)throw Error(`AI JSON 128 KiB sınırını aşıyor.`);let a=i(await t.text()),o=new Set(n.map(e=>e.name));if(o.size!==n.length||a.visual.photoFiles.length!==o.size||!a.visual.photoFiles.every(e=>o.has(e))||r.name!==a.visual.modelFile)throw Error(`Fotoğraf veya GLB adları JSON ile eşleşmiyor.`);let s=[];for(let t of n){if(e!==z)return;s.push(await u(t,`photo`))}if(e!==z||(s.push(await u(r,`model`)),!f.open||e!==z))return;B={intake:a,assets:s},V=n,be=r,b.replaceChildren(...a.variants.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.label,n}));let c=[`${a.identity.suggestedName} · ${a.variants.length} varyant`,...s.map(e=>`${e.name} · ${e.bytes} bayt · SHA-256 ${e.sha256}`)];h.replaceChildren(...c.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t})),g.disabled=!1,m.textContent=`Dosyalar eşleşti. Görsel model ve fiziksel özellikler operatör onayı bekliyor.`}catch(t){e===z&&(m.textContent=t.message)}finally{_.disabled=!1}}),v.addEventListener(`click`,()=>{B&&g.checked&&(o(JSON.stringify({schemaVersion:`jew.material-review.v1`,status:`reviewed-draft`,...B,reviewedAt:new Date().toISOString()},null,2),`jew-malzeme-taslagi.json`),m.textContent=`Taslak kayıt indirildi. Kaynak dosyalarını ayrıca sakla.`)}),ne.addEventListener(`click`,async()=>{if(!B||!g.checked||!x.checked||xe)return;let e=H;xe=!0,X();try{let r=R(`hole-diameter`),i=await s({...B,variantIndex:Number(b.value),dimensionsMm:{x:R(`x`).valueAsNumber,y:R(`y`).valueAsNumber,z:R(`z`).valueAsNumber},holeCount:R(`hole-count`).valueAsNumber,holeDiameterMm:r.value===``?null:r.valueAsNumber,method:R(`method`).value,reference:R(`reference`).value});if(!f.open||e!==H)return;o(JSON.stringify(i,null,2),`jew-malzeme-olcum-revizyonu.json`),S.textContent=`Ölçüm revizyonu indirildi. Stok ve katalog yayını bekliyor.`,$();let a=i.source.assets.find(e=>e.mimeType===`model/gltf-binary`),c=te.filter(e=>e.source?.sha256===a.sha256&&t(e)&&(!B.intake.identity.existingMaterialId||e.id===B.intake.identity.existingMaterialId));if(n.includes(i.source.variant.nominalDiameterMm)&&c.length){let e=document.createElement(`option`);e.value=``,e.textContent=`Katalog parçasını seç`,w.replaceChildren(e,...c.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),U=i,C.hidden=!1}if(re(B.intake)){let e=B.intake.identity.kind===`stone`?`stone`:`bead`;l.some(e=>e.source?.sha256===a.sha256)?S.textContent=`Ölçüm revizyonu indirildi. Bu GLB zaten katalogda kayıtlı.`:ie(B.intake,i,e)?(W=i,M.value=e,le.replaceChildren(...V.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.name,n})),ce.hidden=!1,ke(),Ae(i,be)):S.textContent=`Ölçüm revizyonu indirildi. Yeni giriş için tek delikli 4, 6 veya 8 mm adet varyantı ve türleriyle uyumlu, güvenli kaynak dosya adları gerekir.`}}catch(t){e===H&&(S.textContent=t.message)}finally{xe=!1,X()}}),E.addEventListener(`click`,async()=>{if(!U||E.disabled)return;let e=U,t=w.value,n=T.value;E.disabled=!0;try{let r=te.find(e=>e.id===t);if(!r)throw Error(`Katalog parçasını açıkça seç.`);let i=await c(e,r,{sku:n});if(!f.open||e!==U||t!==w.value||n!==T.value)return;o(JSON.stringify(i,null,2),`jew-katalog-eslestirme-taslagi.json`),ae.textContent=`Eşleştirme taslağı indirildi. Stok ve satış onayı bekliyor.`}catch(t){e===U&&(ae.textContent=t.message)}finally{E.disabled=!1}}),ve.addEventListener(`click`,async()=>{if(!f.open||ve.disabled)return;let t=W,n=Se,r=()=>f.open&&t===W&&n===Se,[i,a,s,c]=j.map(e=>e.value),l=e(N.value)?N.value:null,u={role:M.value,materialClass:l,materialEvidenceRef:l?P.value:null,classApproved:!!(l&&F.checked)};Ce=!0,Z();try{let e=await oe({intake:B.intake,measurementRevision:t,name:i,operatorRef:a,rightsRef:s,reviewRef:c,visualApproved:I.checked,catalog:u});if(!r())return;o(JSON.stringify(e),`jew-gorsel-katalog-onayi.json`),L.textContent=`Özel onay dosyası indirildi. Katalog yayını ayrı bir adımdır.`}catch(e){r()&&(L.textContent=e.message)}finally{Ce=!1,Z()}}),a(`material-intake-close`).addEventListener(`click`,()=>f.close()),f.addEventListener(`close`,()=>{Me();for(let e of p)e.value=``}),f}export{D as installMaterialIntake};