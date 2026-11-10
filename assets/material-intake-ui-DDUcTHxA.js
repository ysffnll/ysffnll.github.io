import{_ as e,d as t,g as n,h as r,p as i,r as a,t as o}from"./bead-sizing-l55YQmQ6.js";import{a as s,n as c,r as l,t as u}from"./material-measurement-DoOVQVW5.js";import{t as d}from"./material-catalog-binding-BJtnRKKP.js";import{t as f}from"./component-registry-B2kW7Ofm.js";import{n as p,t as ee}from"./material-admission-geometry-WZtvbQj1.js";var te=`jew.material-catalog-admission.v1`,ne=`jew.material-catalog-admission.v2`,m=`jew.material-catalog-admission.v3`,h=`jew.material-catalog-admission.v4`,g=`jew.material-catalog-admission.v5`,_=`irregular-threaded`,v=`visual-approved`,y=[`intake`,`measurementRevision`,`name`,`operatorRef`,`rightsRef`,`reviewRef`,`visualApproved`],b=[`role`,`materialClass`,`materialEvidenceRef`,`classApproved`],x=new Map([[`jpg`,`image/jpeg`],[`jpeg`,`image/jpeg`],[`png`,`image/png`],[`webp`,`image/webp`]]),S=`model/gltf-binary`,C=e=>e.split(`.`).at(-1).toLowerCase();function w(e,t){return typeof e==`object`&&!!e&&!Array.isArray(e)&&Reflect.ownKeys(e).length===t.length&&t.every(t=>Object.hasOwn(e,t))}function T(e){if(typeof e!=`string`||e.length>262144||new TextEncoder().encode(e).byteLength>262144)throw RangeError(`Görsel katalog kabul kaydı en fazla 256 KiB JSON olabilir.`)}function E(e,t,n){if(typeof e!=`string`||e.length>t||!e.isWellFormed()||!e.trim()||/[<>\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))throw TypeError(`${n} boş veya geçersiz.`);return e.trim()}function D(e){if(typeof e!=`string`||e.length>180||!e.isWellFormed()||e!==e.trim()||e.startsWith(`.`)||!e.includes(`.`)||/[<>:"/\\|?*\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))return!1;let t=e.normalize(`NFKC`).split(`.`)[0].trimEnd().toUpperCase();return!/^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9]|CONIN\$|CONOUT\$)$/.test(t)}function O(e){if(!Array.isArray(e?.photoFiles)||!e.photoFiles.length||e.photoFiles.length>16)return!1;let t=[...e.photoFiles,e.modelFile];return!t.every(D)||C(e.modelFile)!==`glb`||!e.photoFiles.every(e=>x.has(C(e)))?!1:new Set(t.map(e=>e.normalize(`NFKC`).toUpperCase())).size===t.length}var k=e=>e===`stone`||e===`bead`;function re(e){return e?.identity?.existingMaterialId===null&&[`stone`,`other`,`spacer`].includes(e.identity.kind)}function A(e,t,n,r){let i=t?.source?.variantIndex;if(t?.status!==`operator-measured`||!Number.isSafeInteger(i)||i<0)return!1;let a=e?.variants?.[i],{holeCount:s,holeDiameterMm:c}=t.measurement??{};return a?.stockUnit!==`piece`||s!==1||!Number.isFinite(c)||c<=0?!1:r===`offset-pendant`?n===`pendant`&&e?.identity?.existingMaterialId===null&&[`stone`,`other`,`finding`].includes(e.identity.kind)&&a.nominalDiameterMm===null:(n===void 0?e?.identity?.existingMaterialId===null&&e.identity.kind===`stone`:k(n)&&re(e))&&(r===_||r===`inclusion-threaded`?n!==void 0:r===`round`&&o.includes(a.nominalDiameterMm))}function j(e,t){return!Array.isArray(t)||t.length!==e.photoFiles.length+1?!1:new Set(t.map(e=>e?.name)).size===t.length&&t.every(t=>w(t,[`name`,`bytes`,`sha256`,`mimeType`])&&(t.name===e.modelFile?t.mimeType===S:e.photoFiles.includes(t.name)&&t.mimeType===x.get(C(t.name))))}function ie(e,t,n,r=`round`){return A(e,t,n,r)&&O(e.visual)&&j(e.visual,t.source.assets)}async function ae(e,t,n,r){if(!w(t,[`schemaVersion`,`status`,`source`,`measurement`,`revisionId`])||!w(t.source,[`intakeSha256`,`variantIndex`,`variant`,`assets`])||!w(t.measurement,[`dimensionsMm`,`holeDiameterMm`,`holeCount`,`method`,`reference`])||!w(t.measurement.dimensionsMm,[`x`,`y`,`z`]))throw TypeError(`Ölçüm revizyonu geçersiz.`);if(!A(e,t,n,r))throw TypeError(r===`offset-pendant`?`Kolye ucu kabulü için yeni, nominal çapı boş bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:r===_?`Düzensiz görsel katalog kabulü için yeni bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:r===`inclusion-threaded`?`İç kapanımlı parça kabulü için yeni bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:`Görsel katalog kabulü için ${n===void 0?`yeni bir taş`:`yeni bir yuvarlak parça adayı`}, 4/6/8 mm adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`);if(!O(e.visual))throw TypeError(`Görsel dosya adları güvenli ve birbirinden farklı olmalı.`);let{variantIndex:i,assets:a}=t.source;if(!j(e.visual,a))throw TypeError(`İncelenmiş dosya özetleri ve uzantıları eşleşmiyor.`);let o=l(t),s=await u({intake:e,variantIndex:i,...t.measurement,assets:a.map(e=>e.mimeType===S?{...e,version:2}:e)});if(o!==l(s))throw TypeError(`Ölçüm revizyonu, seçilen varyant veya kaynak dosya özetleri değişmiş.`);return s}function oe(e,t){if(!w(e,b)||!(t?e.role===`pendant`:k(e.role)))throw TypeError(`Katalog rolü veya malzeme sınıfı kaydı geçersiz.`);let{role:r,materialClass:i,materialEvidenceRef:a,classApproved:o}=e;if(i===null){if(a!==null||o!==!1)throw TypeError(`Bilinmeyen malzeme sınıfına kanıt veya onay eklenemez.`)}else{if(!n(i)||o!==!0)throw TypeError(`Bilinen malzeme sınıfı için geçerli sınıf ve ayrı operatör onayı gerekli.`);E(a,200,`Malzeme sınıfı kanıt referansı`)}return{role:r,materialClass:i,materialEvidenceRef:a,classApproved:o}}async function M({intake:e,measurementRevision:t,name:n,operatorRef:r,rightsRef:a,reviewRef:o,catalog:l,form:u,boreCenterMm:d},f,p){let ee=s(JSON.stringify(e)),ne={name:E(n,160,`Katalog adı`),operatorRef:E(r,200,`Operatör referansı`),rightsRef:E(a,200,`Kullanım hakkı referansı`),reviewRef:E(o,200,`Görsel inceleme referansı`)};if(p===m&&u!==_)throw TypeError(`Düzensiz katalog kabul biçimi geçersiz.`);if(p===g&&u!==`inclusion-threaded`)throw TypeError(`İç kapanımlı katalog kabul biçimi geçersiz.`);let y=p===h;if(y&&u!==`offset-pendant`)throw TypeError(`Kolye ucu kabul biçimi geçersiz.`);if(y&&!i(d))throw TypeError(`Kolye ucu delik koordinatı kaynak milimetresinde geçerli bir X ve Y çifti olmalı.`);let b=p===te?void 0:oe(l,y),x=await ae(ee,t,b?.role,u??`round`),S={schemaVersion:p,status:v,...ne,nonce:f,intake:ee,measurementRevision:x};b&&(S.catalog=b),(p===m||p===g||y)&&(S.form=u),y&&(S.boreCenterMm=d.map(e=>e===0?0:e));let C={...S,admissionId:`sha256:${await c(S)}`};return T(JSON.stringify(C)),C}async function se(e){let t=w(e,[...y,`catalog`,`form`,`boreCenterMm`])?h:w(e,[...y,`catalog`,`form`])?e.form===`inclusion-threaded`?g:m:w(e,[...y,`catalog`])?ne:w(e,y)?te:null;if(!t||e.visualApproved!==!0)throw TypeError(`Görsel katalog kabulü için açık operatör onayı gerekli.`);if(!globalThis.crypto?.getRandomValues)throw Error(`Görsel katalog kabulü için güvenli rastgele veri gerekli.`);let n=globalThis.crypto.getRandomValues(new Uint8Array(32));return M(e,Array.from(n,e=>e.toString(16).padStart(2,`0`)).join(``),t)}var ce=new Intl.NumberFormat(`tr-TR`,{maximumFractionDigits:3}),le=`irregular-threaded`;function ue(c,l,te,ne){let m=c(`material-intake-dialog`),h=[`material-intake-json`,`material-intake-photos`,`material-intake-model`].map(c),g=c(`material-intake-status`),_=c(`material-intake-results`),v=c(`material-intake-reviewed`),y=c(`material-intake-inspect`),b=c(`material-intake-export`),x=c(`material-measurement`),S=c(`material-measurement-variant`),C=c(`material-measurement-confirm`),w=c(`material-measurement-export`),T=c(`material-measurement-status`),E=c(`material-binding`),D=c(`material-binding-component`),O=c(`material-binding-sku`),k=c(`material-binding-export`),A=c(`material-binding-status`),j=e=>c(`material-admission-${e}`),ae=c(`material-admission`),oe=j(`photo`),M=j(`photo-preview`),ue=j(`photo-status`),de=j(`geometry`),fe=j(`model-preview`),pe=j(`model-views`),me=j(`model-image`),he=j(`model-status`),ge=j(`model-source`),_e=[...pe.querySelectorAll(`[data-material-review-view]`)],ve=_e.find(e=>e.dataset.materialReviewView===`bore`),N=[`name`,`operator`,`rights`,`review`].map(j),P=j(`form`),ye=P.querySelector(`[value="round"]`),be=P.querySelector(`[value="irregular-threaded"]`),xe=P.querySelector(`[value="${e}"]`),Se=P.querySelector(`[value="${t}"]`),Ce=j(`bore-fields`),we=[`bore-x`,`bore-y`].map(j),F=j(`role`),I=j(`class`),Te=j(`class-fields`),L=j(`class-evidence`),R=j(`class-confirm`),Ee=j(`class-confirm-label`),z=j(`confirm`),De=j(`export`),Oe=j(`status`),B=e=>c(`material-measurement-${e}`),ke=[`x`,`y`,`z`,`hole-count`,`hole-diameter`,`method`,`reference`].map(B),V=0,H=null,U=[],Ae=null,W=0,je=!1,G=null,K=null,Me=0,Ne=!1,Pe=0,q=null,J=null,Y=null,X=new Map,Fe=new Set;for(let[e,t]of Object.entries(r)){let n=document.createElement(`option`);n.value=e,n.textContent=t,I.append(n)}c(`material-intake-prompt`).value=`# JEW · Malzeme ekleme sözleşmesi ve sabit AI prompt'u

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
`.match(/\x60\x60\x60text\r?\n([\s\S]*?)\r?\n\x60\x60\x60/)?.[1]??``;function Z(){w.disabled=!H||!v.checked||!C.checked||je}function Ie(){G=null,E.hidden=!0,D.replaceChildren(),O.value=``,A.textContent=``}function Q(){let e=n(I.value);if(Te.hidden=!e,R.disabled=!e||!L.value.trim(),e&&K&&P.value){let e=K.source.variant.nominalDiameterMm,t=P.value===`offset-pendant`?`kolye ucunu`:P.value===`inclusion-threaded`?`iç kapanımlı delikli parçayı`:P.value===le?`düzensiz delikli parçayı`:`${e} mm parçayı`;Ee.textContent=`Bu kayda dayanarak ${t} ${r[I.value]} olarak beyan ediyorum.`}fe.disabled=!q||!ne||!!J||X.size>0;let t=P.value===`inclusion-threaded`&&X.size===0;z.disabled=!K||!q||!!J||M.hidden||t||Fe.size!==U.length||!F.value||N.some(e=>!e.value.trim());let i=e&&(R.disabled||!R.checked);De.disabled=z.disabled||!z.checked||i||Ne}function Le(){Me++,z.checked=!1,Oe.textContent=``,Q()}function $(){R.checked=!1,Le()}function Re(){M.hidden=!0,M.removeAttribute(`src`),M.alt=``,Y&&URL.revokeObjectURL(Y),Y=null}function ze(){pe.hidden=!0,me.removeAttribute(`src`),me.alt=``,ge.textContent=``;for(let e of X.values())URL.revokeObjectURL(e);X.clear()}function Be(e){let t=X.get(e);if(t){for(let t of _e){let n=t.dataset.materialReviewView===e;t.setAttribute(`aria-pressed`,String(n)),n&&(me.alt=`GLB görünümü · ${t.textContent.trim()}`)}me.src=t}}function Ve(){Pe++,q=null,J?.abort(),J=null,ze(),he.textContent=``,de.textContent=``}function He(){return H.intake.identity.kind===`stone`?`stone`:`bead`}function Ue(){let e=P.value===t,n=F.value;Ce.hidden=!e;for(let t of we)t.disabled=!e;ve.textContent=e?`Delik (+Z)`:`Delik (+Y)`;for(let t of F.options)t.value&&(t.disabled=t.value===`pendant`!==e);e?F.value=`pendant`:n===`pendant`&&(F.value=He())}function We(){K=null,ae.hidden=!0,Ve(),P.value=``;for(let e of we)e.value=``;ue.textContent=``,oe.replaceChildren(),Fe.clear(),Re();for(let e of N)e.value=``;F.value=I.value=L.value=``,Ue(),$()}async function Ge(){Re(),Le();let e=Number(oe.value),t=U[e];if(!K||!t)return;let n=URL.createObjectURL(t.slice(0,t.size,H.assets[e].mimeType));Y=n,ue.textContent=`Fotoğraf açılıyor…`,M.src=n;try{if(await M.decode(),!m.open||n!==Y)return;Fe.add(e),M.alt=`Kaynak fotoğrafı · ${t.name}`,M.hidden=!1,ue.textContent=`${Fe.size}/${U.length} kaynak fotoğrafı açıldı.`}catch{if(!m.open||n!==Y)return;Fe.delete(e),Re(),ue.textContent=`Fotoğraf açılamadı (${t.name}). Geçerli bir dosya seçip yeniden incele.`}Q()}async function Ke(e,t,n,r){let i=Pe,a=()=>m.open&&e===K&&i===Pe;de.textContent=`GLB’nin dijital geometrisi kontrol ediliyor…`;try{let i=await t.arrayBuffer();if(!a())return;let o=await p({name:t.name,size:t.size,arrayBuffer:async()=>i},`model`);if(!a())return;let s=e.source.assets.find(e=>e.mimeType===`model/gltf-binary`);if(o.sha256!==s.sha256||o.bytes!==s.bytes)throw Error(`GLB baytları ölçüm revizyonuyla eşleşmiyor.`);let c=n===`round`,l=c?e.source.variant.nominalDiameterMm:null,u=r?{boreCenterMm:r}:{},{displayExtent:d,diameterMm:f,triangles:te,boreClearanceMm:ne,inclusionComponents:m}=ee(i,l,{publicPayload:!0,form:n,...u}),h=e=>ce.format(e),g=c?`Model çapı ${h(f)} mm · Sahne boyutları (X × Y × Z) ${d.map(h).join(` × `)}`:`Kaynak boyutu (X × Y × Z) ${d.map(e=>h(e*10)).join(` × `)} mm`,_=r?`+Z geçişi (kaynak X ${h(r[0])} mm, Y ${h(r[1])} mm)`:`+Y ekseninde merkezli geçiş`,v=n===`inclusion-threaded`?` · ${h(m)} kapalı iç parça. Onay için GLB’yi üç açıdan göster.`:`.`;de.textContent=`GLB doğrulandı. ${_} · ${g} · Dijital geçiş çapı ${h(ne)} mm · ${h(te)} üçgen${v}`,q={file:t,source:{sha256:s.sha256,bytes:s.bytes},nominalMm:l,form:n,...u}}catch(e){a()&&(de.textContent=e.message)}a()&&Q()}function qe(){Ve(),Ue(),$();let e=P.value;if(!K||!e)return;let t=e===`offset-pendant`?we.map(e=>e.valueAsNumber):void 0;t&&!i(t)?de.textContent=`GLB kontrolü için −20 ile 20 mm arasında X ve Y delik merkezi gir.`:Ke(K,Ae,e,t)}function Je(){W++;for(let e of ke)e.value=``;C.checked=!1,T.textContent=``,Ie(),We(),Z()}function Ye(){V++,H=null,U=[],Ae=null,g.textContent=``,_.replaceChildren(),v.checked=!1,v.disabled=!0,b.disabled=!0,x.hidden=!0,x.open=!1,S.replaceChildren(),Je()}for(let e of h)e.addEventListener(`change`,Ye);oe.addEventListener(`change`,Ge),P.addEventListener(`change`,qe);for(let e of we)e.addEventListener(`input`,qe);for(let e of _e)e.addEventListener(`click`,()=>Be(e.dataset.materialReviewView));fe.addEventListener(`click`,async()=>{if(!m.open||fe.disabled)return;let e=q,t=new AbortController;J=t;let n=()=>m.open&&q===e&&J===t;Le(),he.textContent=`Doğrulanan GLB’den görünümler hazırlanıyor…`;try{let{file:r,...i}=e,a=await r.arrayBuffer();if(!n())return;let{verifiedSha256:o,verifiedBytes:s,views:c}=await ne({bytes:a,...i,signal:t.signal});if(!n())return;let l=new Map(c.map(e=>[e.id,e.blob]));if(o!==e.source.sha256||s!==e.source.bytes||c.length!==_e.length||_e.some(e=>{let t=l.get(e.dataset.materialReviewView);return!(t instanceof Blob)||t.type!==`image/png`||!t.size}))throw Error(`Görünümler doğrulanan GLB ile eşleşmiyor.`);for(let[e,t]of l)X.set(e,URL.createObjectURL(t));Be(`oblique`),ge.textContent=`SHA-256 ${o}`,pe.hidden=!1,he.textContent=`Üç görünüm hazır. Görsel onayı ayrıca işaretle.`}catch(e){if(!n())return;ze(),he.textContent=e.message}finally{n()&&(J=null,Q())}});for(let e of N)e.addEventListener(`input`,e===N[1]?$:Le);F.addEventListener(`change`,$),I.addEventListener(`change`,()=>{L.value=``,$()}),L.addEventListener(`input`,$),window.addEventListener(`pageshow`,e=>{e.persisted&&m.open&&$()});function Xe(){Me++,Oe.textContent=``,Q()}z.addEventListener(`change`,Xe),R.addEventListener(`change`,Xe),v.addEventListener(`change`,()=>{b.disabled=!H||!v.checked,x.hidden=b.disabled,x.hidden&&Je(),Z()}),S.addEventListener(`change`,Je);for(let e of ke)e.addEventListener(`input`,()=>{W++,C.checked=!1,T.textContent=``,Ie(),We(),Z()});return C.addEventListener(`change`,()=>{W++,C.checked||(Ie(),We()),Z()}),y.addEventListener(`click`,async()=>{Ye();let e=V;y.disabled=!0,g.textContent=`Dosyalar cihazda inceleniyor…`;try{let[t]=h[0].files,n=[...h[1].files],[r]=h[2].files;if(!t||!r||!n.length||n.length>6)throw Error(`Bir AI JSON, bir GLB ve 1–6 fotoğraf seç.`);if(t.size>131072)throw Error(`AI JSON 128 KiB sınırını aşıyor.`);let i=s(await t.text()),a=new Set(n.map(e=>e.name));if(a.size!==n.length||i.visual.photoFiles.length!==a.size||!i.visual.photoFiles.every(e=>a.has(e))||r.name!==i.visual.modelFile)throw Error(`Fotoğraf veya GLB adları JSON ile eşleşmiyor.`);let o=[];for(let t of n){if(e!==V)return;o.push(await p(t,`photo`))}if(e!==V||(o.push(await p(r,`model`)),!m.open||e!==V))return;H={intake:i,assets:o},U=n,Ae=r,S.replaceChildren(...i.variants.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.label,n}));let c=[`${i.identity.suggestedName} · ${i.variants.length} varyant`,...o.map(e=>`${e.name} · ${e.bytes} bayt · SHA-256 ${e.sha256}`)];_.replaceChildren(...c.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t})),v.disabled=!1,g.textContent=`Dosyalar eşleşti. Görsel model ve fiziksel özellikler operatör onayı bekliyor.`}catch(t){e===V&&(g.textContent=t.message)}finally{y.disabled=!1}}),b.addEventListener(`click`,()=>{H&&v.checked&&(l(JSON.stringify({schemaVersion:`jew.material-review.v1`,status:`reviewed-draft`,...H,reviewedAt:new Date().toISOString()},null,2),`jew-malzeme-taslagi.json`),g.textContent=`Taslak kayıt indirildi. Kaynak dosyalarını ayrıca sakla.`)}),w.addEventListener(`click`,async()=>{if(!H||!v.checked||!C.checked||je)return;let n=W;je=!0,Z();try{let r=B(`hole-diameter`),i=await u({...H,variantIndex:Number(S.value),dimensionsMm:{x:B(`x`).valueAsNumber,y:B(`y`).valueAsNumber,z:B(`z`).valueAsNumber},holeCount:B(`hole-count`).valueAsNumber,holeDiameterMm:r.value===``?null:r.valueAsNumber,method:B(`method`).value,reference:B(`reference`).value});if(!m.open||n!==W)return;l(JSON.stringify(i,null,2),`jew-malzeme-olcum-revizyonu.json`),T.textContent=`Ölçüm revizyonu indirildi. Stok ve katalog yayını bekliyor.`,We();let s=i.source.assets.find(e=>e.mimeType===`model/gltf-binary`),c=te.filter(e=>e.source?.sha256===s.sha256&&a(e)&&(!H.intake.identity.existingMaterialId||e.id===H.intake.identity.existingMaterialId));if(o.includes(i.source.variant.nominalDiameterMm)&&c.length){let e=document.createElement(`option`);e.value=``,e.textContent=`Katalog parçasını seç`,D.replaceChildren(e,...c.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),G=i,E.hidden=!1}let d=ie(H.intake,i,`pendant`,t);if(re(H.intake)||d){let n=He(),r=ie(H.intake,i,n),a=ie(H.intake,i,n,le),o=ie(H.intake,i,n,e);f.some(e=>e.source?.sha256===s.sha256)?T.textContent=`Ölçüm revizyonu indirildi. Bu GLB zaten katalogda kayıtlı.`:r||a||o||d?(K=i,F.value=n,ye.disabled=!r,be.disabled=!a,xe.disabled=!o,Se.disabled=!d,P.value=r?`round`:d&&!a?t:``,oe.replaceChildren(...U.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.name,n})),ae.hidden=!1,Ge(),qe()):T.textContent=`Ölçüm revizyonu indirildi. Yeni giriş için ölçülmüş tek delikli adet varyantı ve türleriyle uyumlu, güvenli kaynak dosya adları gerekir.`}}catch(e){n===W&&(T.textContent=e.message)}finally{je=!1,Z()}}),k.addEventListener(`click`,async()=>{if(!G||k.disabled)return;let e=G,t=D.value,n=O.value;k.disabled=!0;try{let r=te.find(e=>e.id===t);if(!r)throw Error(`Katalog parçasını açıkça seç.`);let i=await d(e,r,{sku:n});if(!m.open||e!==G||t!==D.value||n!==O.value)return;l(JSON.stringify(i,null,2),`jew-katalog-eslestirme-taslagi.json`),A.textContent=`Eşleştirme taslağı indirildi. Stok ve satış onayı bekliyor.`}catch(t){e===G&&(A.textContent=t.message)}finally{k.disabled=!1}}),De.addEventListener(`click`,async()=>{if(!m.open||De.disabled)return;let e=K,t=Me,r=()=>m.open&&e===K&&t===Me,[i,a,o,s]=N.map(e=>e.value),c=n(I.value)?I.value:null,u={role:F.value,materialClass:c,materialEvidenceRef:c?L.value:null,classApproved:!!(c&&R.checked)},{form:d,boreCenterMm:f}=q,p=d===`round`?{}:{form:d};f&&(p.boreCenterMm=f),Ne=!0,Q();try{let t=await se({intake:H.intake,measurementRevision:e,name:i,operatorRef:a,rightsRef:o,reviewRef:s,visualApproved:z.checked,catalog:u,...p});if(!r())return;l(JSON.stringify(t),`jew-gorsel-katalog-onayi.json`),Oe.textContent=`Özel onay dosyası indirildi. Katalog yayını ayrı bir adımdır.`}catch(e){r()&&(Oe.textContent=e.message)}finally{Ne=!1,Q()}}),c(`material-intake-close`).addEventListener(`click`,()=>m.close()),m.addEventListener(`close`,()=>{Ye();for(let e of h)e.value=``}),m}export{ue as installMaterialIntake};