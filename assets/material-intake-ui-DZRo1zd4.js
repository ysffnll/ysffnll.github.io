import{d as e,g as t,h as n,p as r,r as i,t as a}from"./bead-sizing-Bw4A7Dlv.js";import{a as o,n as s,r as c,t as l}from"./material-measurement-DoOVQVW5.js";import{t as u}from"./material-catalog-binding-Dn7Cidde.js";import{t as d}from"./component-registry-BwnJbS-S.js";import{n as f,t as p}from"./material-admission-geometry-DS9PslJ1.js";var m=`jew.material-catalog-admission.v1`,h=`jew.material-catalog-admission.v2`,g=`jew.material-catalog-admission.v3`,_=`jew.material-catalog-admission.v4`,v=`irregular-threaded`,ee=`visual-approved`,y=[`intake`,`measurementRevision`,`name`,`operatorRef`,`rightsRef`,`reviewRef`,`visualApproved`],b=[`role`,`materialClass`,`materialEvidenceRef`,`classApproved`],x=new Map([[`jpg`,`image/jpeg`],[`jpeg`,`image/jpeg`],[`png`,`image/png`],[`webp`,`image/webp`]]),S=`model/gltf-binary`,C=e=>e.split(`.`).at(-1).toLowerCase();function w(e,t){return typeof e==`object`&&!!e&&!Array.isArray(e)&&Reflect.ownKeys(e).length===t.length&&t.every(t=>Object.hasOwn(e,t))}function te(e){if(typeof e!=`string`||e.length>262144||new TextEncoder().encode(e).byteLength>262144)throw RangeError(`Görsel katalog kabul kaydı en fazla 256 KiB JSON olabilir.`)}function T(e,t,n){if(typeof e!=`string`||e.length>t||!e.isWellFormed()||!e.trim()||/[<>\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))throw TypeError(`${n} boş veya geçersiz.`);return e.trim()}function ne(e){if(typeof e!=`string`||e.length>180||!e.isWellFormed()||e!==e.trim()||e.startsWith(`.`)||!e.includes(`.`)||/[<>:"/\\|?*\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))return!1;let t=e.normalize(`NFKC`).split(`.`)[0].trimEnd().toUpperCase();return!/^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9]|CONIN\$|CONOUT\$)$/.test(t)}function E(e){if(!Array.isArray(e?.photoFiles)||!e.photoFiles.length||e.photoFiles.length>16)return!1;let t=[...e.photoFiles,e.modelFile];return!t.every(ne)||C(e.modelFile)!==`glb`||!e.photoFiles.every(e=>x.has(C(e)))?!1:new Set(t.map(e=>e.normalize(`NFKC`).toUpperCase())).size===t.length}var D=e=>e===`stone`||e===`bead`;function re(e){return e?.identity?.existingMaterialId===null&&[`stone`,`other`,`spacer`].includes(e.identity.kind)}function O(e,t,n,r){let i=t?.source?.variantIndex;if(t?.status!==`operator-measured`||!Number.isSafeInteger(i)||i<0)return!1;let o=e?.variants?.[i],{holeCount:s,holeDiameterMm:c}=t.measurement??{};return o?.stockUnit!==`piece`||s!==1||!Number.isFinite(c)||c<=0?!1:r===`offset-pendant`?n===`pendant`&&e?.identity?.existingMaterialId===null&&[`stone`,`other`,`finding`].includes(e.identity.kind)&&o.nominalDiameterMm===null:(n===void 0?e?.identity?.existingMaterialId===null&&e.identity.kind===`stone`:D(n)&&re(e))&&(r===v?n!==void 0:r===`round`&&a.includes(o.nominalDiameterMm))}function ie(e,t){return!Array.isArray(t)||t.length!==e.photoFiles.length+1?!1:new Set(t.map(e=>e?.name)).size===t.length&&t.every(t=>w(t,[`name`,`bytes`,`sha256`,`mimeType`])&&(t.name===e.modelFile?t.mimeType===S:e.photoFiles.includes(t.name)&&t.mimeType===x.get(C(t.name))))}function ae(e,t,n,r=`round`){return O(e,t,n,r)&&E(e.visual)&&ie(e.visual,t.source.assets)}async function k(e,t,n,r){if(!w(t,[`schemaVersion`,`status`,`source`,`measurement`,`revisionId`])||!w(t.source,[`intakeSha256`,`variantIndex`,`variant`,`assets`])||!w(t.measurement,[`dimensionsMm`,`holeDiameterMm`,`holeCount`,`method`,`reference`])||!w(t.measurement.dimensionsMm,[`x`,`y`,`z`]))throw TypeError(`Ölçüm revizyonu geçersiz.`);if(!O(e,t,n,r))throw TypeError(r===`offset-pendant`?`Kolye ucu kabulü için yeni, nominal çapı boş bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:r===v?`Düzensiz görsel katalog kabulü için yeni bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:`Görsel katalog kabulü için ${n===void 0?`yeni bir taş`:`yeni bir yuvarlak parça adayı`}, 4/6/8 mm adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`);if(!E(e.visual))throw TypeError(`Görsel dosya adları güvenli ve birbirinden farklı olmalı.`);let{variantIndex:i,assets:a}=t.source;if(!ie(e.visual,a))throw TypeError(`İncelenmiş dosya özetleri ve uzantıları eşleşmiyor.`);let o=c(t),s=await l({intake:e,variantIndex:i,...t.measurement,assets:a.map(e=>e.mimeType===S?{...e,version:2}:e)});if(o!==c(s))throw TypeError(`Ölçüm revizyonu, seçilen varyant veya kaynak dosya özetleri değişmiş.`);return s}function oe(e,n){if(!w(e,b)||!(n?e.role===`pendant`:D(e.role)))throw TypeError(`Katalog rolü veya malzeme sınıfı kaydı geçersiz.`);let{role:r,materialClass:i,materialEvidenceRef:a,classApproved:o}=e;if(i===null){if(a!==null||o!==!1)throw TypeError(`Bilinmeyen malzeme sınıfına kanıt veya onay eklenemez.`)}else{if(!t(i)||o!==!0)throw TypeError(`Bilinen malzeme sınıfı için geçerli sınıf ve ayrı operatör onayı gerekli.`);T(a,200,`Malzeme sınıfı kanıt referansı`)}return{role:r,materialClass:i,materialEvidenceRef:a,classApproved:o}}async function A({intake:e,measurementRevision:t,name:n,operatorRef:i,rightsRef:a,reviewRef:c,catalog:l,form:u,boreCenterMm:d},f,p){let h=o(JSON.stringify(e)),y={name:T(n,160,`Katalog adı`),operatorRef:T(i,200,`Operatör referansı`),rightsRef:T(a,200,`Kullanım hakkı referansı`),reviewRef:T(c,200,`Görsel inceleme referansı`)};if(p===g&&u!==v)throw TypeError(`Düzensiz katalog kabul biçimi geçersiz.`);let b=p===_;if(b&&u!==`offset-pendant`)throw TypeError(`Kolye ucu kabul biçimi geçersiz.`);if(b&&!r(d))throw TypeError(`Kolye ucu delik koordinatı kaynak milimetresinde geçerli bir X ve Y çifti olmalı.`);let x=p===m?void 0:oe(l,b),S=await k(h,t,x?.role,u??`round`),C={schemaVersion:p,status:ee,...y,nonce:f,intake:h,measurementRevision:S};x&&(C.catalog=x),(p===g||b)&&(C.form=u),b&&(C.boreCenterMm=d.map(e=>e===0?0:e));let w={...C,admissionId:`sha256:${await s(C)}`};return te(JSON.stringify(w)),w}async function se(e){let t=w(e,[...y,`catalog`,`form`,`boreCenterMm`])?_:w(e,[...y,`catalog`,`form`])?g:w(e,[...y,`catalog`])?h:w(e,y)?m:null;if(!t||e.visualApproved!==!0)throw TypeError(`Görsel katalog kabulü için açık operatör onayı gerekli.`);if(!globalThis.crypto?.getRandomValues)throw Error(`Görsel katalog kabulü için güvenli rastgele veri gerekli.`);let n=globalThis.crypto.getRandomValues(new Uint8Array(32));return A(e,Array.from(n,e=>e.toString(16).padStart(2,`0`)).join(``),t)}var ce=new Intl.NumberFormat(`tr-TR`,{maximumFractionDigits:3}),le=`irregular-threaded`;function j(s,c,m,h){let g=s(`material-intake-dialog`),_=[`material-intake-json`,`material-intake-photos`,`material-intake-model`].map(s),v=s(`material-intake-status`),ee=s(`material-intake-results`),y=s(`material-intake-reviewed`),b=s(`material-intake-inspect`),x=s(`material-intake-export`),S=s(`material-measurement`),C=s(`material-measurement-variant`),w=s(`material-measurement-confirm`),te=s(`material-measurement-export`),T=s(`material-measurement-status`),ne=s(`material-binding`),E=s(`material-binding-component`),D=s(`material-binding-sku`),O=s(`material-binding-export`),ie=s(`material-binding-status`),k=e=>s(`material-admission-${e}`),oe=s(`material-admission`),A=k(`photo`),j=k(`photo-preview`),ue=k(`photo-status`),M=k(`geometry`),de=k(`model-preview`),fe=k(`model-views`),pe=k(`model-image`),me=k(`model-status`),he=k(`model-source`),N=[...fe.querySelectorAll(`[data-material-review-view]`)],ge=N.find(e=>e.dataset.materialReviewView===`bore`),P=[`name`,`operator`,`rights`,`review`].map(k),F=k(`form`),_e=F.querySelector(`[value="round"]`),ve=F.querySelector(`[value="irregular-threaded"]`),ye=F.querySelector(`[value="${e}"]`),be=k(`bore-fields`),xe=[`bore-x`,`bore-y`].map(k),I=k(`role`),L=k(`class`),Se=k(`class-fields`),R=k(`class-evidence`),z=k(`class-confirm`),Ce=k(`class-confirm-label`),B=k(`confirm`),we=k(`export`),Te=k(`status`),V=e=>s(`material-measurement-${e}`),Ee=[`x`,`y`,`z`,`hole-count`,`hole-diameter`,`method`,`reference`].map(V),H=0,U=null,W=[],De=null,G=0,Oe=!1,K=null,q=null,ke=0,Ae=!1,je=0,J=null,Y=null,X=null,Me=new Map,Ne=new Set;for(let[e,t]of Object.entries(n)){let n=document.createElement(`option`);n.value=e,n.textContent=t,L.append(n)}s(`material-intake-prompt`).value=`# JEW · Malzeme ekleme sözleşmesi ve sabit AI prompt'u

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
`.match(/\x60\x60\x60text\r?\n([\s\S]*?)\r?\n\x60\x60\x60/)?.[1]??``;function Z(){te.disabled=!U||!y.checked||!w.checked||Oe}function Pe(){K=null,ne.hidden=!0,E.replaceChildren(),D.value=``,ie.textContent=``}function Q(){let e=t(L.value);if(Se.hidden=!e,z.disabled=!e||!R.value.trim(),e&&q&&F.value){let e=q.source.variant.nominalDiameterMm,t=F.value===`offset-pendant`?`kolye ucunu`:F.value===le?`düzensiz delikli parçayı`:`${e} mm parçayı`;Ce.textContent=`Bu kayda dayanarak ${t} ${n[L.value]} olarak beyan ediyorum.`}de.disabled=!J||!h||!!Y||Me.size>0,B.disabled=!q||!J||!!Y||j.hidden||Ne.size!==W.length||!I.value||P.some(e=>!e.value.trim());let r=e&&(z.disabled||!z.checked);we.disabled=B.disabled||!B.checked||r||Ae}function Fe(){ke++,B.checked=!1,Te.textContent=``,Q()}function $(){z.checked=!1,Fe()}function Ie(){j.hidden=!0,j.removeAttribute(`src`),j.alt=``,X&&URL.revokeObjectURL(X),X=null}function Le(){fe.hidden=!0,pe.removeAttribute(`src`),pe.alt=``,he.textContent=``;for(let e of Me.values())URL.revokeObjectURL(e);Me.clear()}function Re(e){let t=Me.get(e);if(t){for(let t of N){let n=t.dataset.materialReviewView===e;t.setAttribute(`aria-pressed`,String(n)),n&&(pe.alt=`GLB görünümü · ${t.textContent.trim()}`)}pe.src=t}}function ze(){je++,J=null,Y?.abort(),Y=null,Le(),me.textContent=``,M.textContent=``}function Be(){return U.intake.identity.kind===`stone`?`stone`:`bead`}function Ve(){let t=F.value===e,n=I.value;be.hidden=!t;for(let e of xe)e.disabled=!t;ge.textContent=t?`Delik (+Z)`:`Delik (+Y)`;for(let e of I.options)e.value&&(e.disabled=e.value===`pendant`!==t);t?I.value=`pendant`:n===`pendant`&&(I.value=Be())}function He(){q=null,oe.hidden=!0,ze(),F.value=``;for(let e of xe)e.value=``;ue.textContent=``,A.replaceChildren(),Ne.clear(),Ie();for(let e of P)e.value=``;I.value=L.value=R.value=``,Ve(),$()}async function Ue(){Ie(),Fe();let e=Number(A.value),t=W[e];if(!q||!t)return;let n=URL.createObjectURL(t.slice(0,t.size,U.assets[e].mimeType));X=n,ue.textContent=`Fotoğraf açılıyor…`,j.src=n;try{if(await j.decode(),!g.open||n!==X)return;Ne.add(e),j.alt=`Kaynak fotoğrafı · ${t.name}`,j.hidden=!1,ue.textContent=`${Ne.size}/${W.length} kaynak fotoğrafı açıldı.`}catch{if(!g.open||n!==X)return;Ne.delete(e),Ie(),ue.textContent=`Fotoğraf açılamadı (${t.name}). Geçerli bir dosya seçip yeniden incele.`}Q()}async function We(e,t,n,r){let i=je,a=()=>g.open&&e===q&&i===je;M.textContent=`GLB’nin dijital geometrisi kontrol ediliyor…`;try{let i=await t.arrayBuffer();if(!a())return;let o=await f({name:t.name,size:t.size,arrayBuffer:async()=>i},`model`);if(!a())return;let s=e.source.assets.find(e=>e.mimeType===`model/gltf-binary`);if(o.sha256!==s.sha256||o.bytes!==s.bytes)throw Error(`GLB baytları ölçüm revizyonuyla eşleşmiyor.`);let c=n===`round`,l=c?e.source.variant.nominalDiameterMm:null,u=r?{boreCenterMm:r}:{},{displayExtent:d,diameterMm:m,triangles:h,boreClearanceMm:g}=p(i,l,{publicPayload:!0,form:n,...u}),_=e=>ce.format(e),v=c?`Model çapı ${_(m)} mm · Sahne boyutları (X × Y × Z) ${d.map(_).join(` × `)}`:`Kaynak boyutu (X × Y × Z) ${d.map(e=>_(e*10)).join(` × `)} mm`,ee=r?`+Z geçişi (kaynak X ${_(r[0])} mm, Y ${_(r[1])} mm)`:`+Y ekseninde merkezli geçiş`;M.textContent=`GLB doğrulandı. ${ee} · ${v} · Dijital geçiş çapı ${_(g)} mm · ${_(h)} üçgen.`,J={file:t,source:{sha256:s.sha256,bytes:s.bytes},nominalMm:l,form:n,...u}}catch(e){a()&&(M.textContent=e.message)}a()&&Q()}function Ge(){ze(),Ve(),$();let e=F.value;if(!q||!e)return;let t=e===`offset-pendant`?xe.map(e=>e.valueAsNumber):void 0;t&&!r(t)?M.textContent=`GLB kontrolü için −20 ile 20 mm arasında X ve Y delik merkezi gir.`:We(q,De,e,t)}function Ke(){G++;for(let e of Ee)e.value=``;w.checked=!1,T.textContent=``,Pe(),He(),Z()}function qe(){H++,U=null,W=[],De=null,v.textContent=``,ee.replaceChildren(),y.checked=!1,y.disabled=!0,x.disabled=!0,S.hidden=!0,S.open=!1,C.replaceChildren(),Ke()}for(let e of _)e.addEventListener(`change`,qe);A.addEventListener(`change`,Ue),F.addEventListener(`change`,Ge);for(let e of xe)e.addEventListener(`input`,Ge);for(let e of N)e.addEventListener(`click`,()=>Re(e.dataset.materialReviewView));de.addEventListener(`click`,async()=>{if(!g.open||de.disabled)return;let e=J,t=new AbortController;Y=t;let n=()=>g.open&&J===e&&Y===t;Fe(),me.textContent=`Doğrulanan GLB’den görünümler hazırlanıyor…`;try{let{file:r,...i}=e,a=await r.arrayBuffer();if(!n())return;let{verifiedSha256:o,verifiedBytes:s,views:c}=await h({bytes:a,...i,signal:t.signal});if(!n())return;let l=new Map(c.map(e=>[e.id,e.blob]));if(o!==e.source.sha256||s!==e.source.bytes||c.length!==N.length||N.some(e=>{let t=l.get(e.dataset.materialReviewView);return!(t instanceof Blob)||t.type!==`image/png`||!t.size}))throw Error(`Görünümler doğrulanan GLB ile eşleşmiyor.`);for(let[e,t]of l)Me.set(e,URL.createObjectURL(t));Re(`oblique`),he.textContent=`SHA-256 ${o}`,fe.hidden=!1,me.textContent=`Üç görünüm hazır. Görsel onayı ayrıca işaretle.`}catch(e){if(!n())return;Le(),me.textContent=e.message}finally{n()&&(Y=null,Q())}});for(let e of P)e.addEventListener(`input`,e===P[1]?$:Fe);I.addEventListener(`change`,$),L.addEventListener(`change`,()=>{R.value=``,$()}),R.addEventListener(`input`,$),window.addEventListener(`pageshow`,e=>{e.persisted&&g.open&&$()});function Je(){ke++,Te.textContent=``,Q()}B.addEventListener(`change`,Je),z.addEventListener(`change`,Je),y.addEventListener(`change`,()=>{x.disabled=!U||!y.checked,S.hidden=x.disabled,S.hidden&&Ke(),Z()}),C.addEventListener(`change`,Ke);for(let e of Ee)e.addEventListener(`input`,()=>{G++,w.checked=!1,T.textContent=``,Pe(),He(),Z()});return w.addEventListener(`change`,()=>{G++,w.checked||(Pe(),He()),Z()}),b.addEventListener(`click`,async()=>{qe();let e=H;b.disabled=!0,v.textContent=`Dosyalar cihazda inceleniyor…`;try{let[t]=_[0].files,n=[..._[1].files],[r]=_[2].files;if(!t||!r||!n.length||n.length>6)throw Error(`Bir AI JSON, bir GLB ve 1–6 fotoğraf seç.`);if(t.size>131072)throw Error(`AI JSON 128 KiB sınırını aşıyor.`);let i=o(await t.text()),a=new Set(n.map(e=>e.name));if(a.size!==n.length||i.visual.photoFiles.length!==a.size||!i.visual.photoFiles.every(e=>a.has(e))||r.name!==i.visual.modelFile)throw Error(`Fotoğraf veya GLB adları JSON ile eşleşmiyor.`);let s=[];for(let t of n){if(e!==H)return;s.push(await f(t,`photo`))}if(e!==H||(s.push(await f(r,`model`)),!g.open||e!==H))return;U={intake:i,assets:s},W=n,De=r,C.replaceChildren(...i.variants.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.label,n}));let c=[`${i.identity.suggestedName} · ${i.variants.length} varyant`,...s.map(e=>`${e.name} · ${e.bytes} bayt · SHA-256 ${e.sha256}`)];ee.replaceChildren(...c.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t})),y.disabled=!1,v.textContent=`Dosyalar eşleşti. Görsel model ve fiziksel özellikler operatör onayı bekliyor.`}catch(t){e===H&&(v.textContent=t.message)}finally{b.disabled=!1}}),x.addEventListener(`click`,()=>{U&&y.checked&&(c(JSON.stringify({schemaVersion:`jew.material-review.v1`,status:`reviewed-draft`,...U,reviewedAt:new Date().toISOString()},null,2),`jew-malzeme-taslagi.json`),v.textContent=`Taslak kayıt indirildi. Kaynak dosyalarını ayrıca sakla.`)}),te.addEventListener(`click`,async()=>{if(!U||!y.checked||!w.checked||Oe)return;let t=G;Oe=!0,Z();try{let n=V(`hole-diameter`),r=await l({...U,variantIndex:Number(C.value),dimensionsMm:{x:V(`x`).valueAsNumber,y:V(`y`).valueAsNumber,z:V(`z`).valueAsNumber},holeCount:V(`hole-count`).valueAsNumber,holeDiameterMm:n.value===``?null:n.valueAsNumber,method:V(`method`).value,reference:V(`reference`).value});if(!g.open||t!==G)return;c(JSON.stringify(r,null,2),`jew-malzeme-olcum-revizyonu.json`),T.textContent=`Ölçüm revizyonu indirildi. Stok ve katalog yayını bekliyor.`,He();let o=r.source.assets.find(e=>e.mimeType===`model/gltf-binary`),s=m.filter(e=>e.source?.sha256===o.sha256&&i(e)&&(!U.intake.identity.existingMaterialId||e.id===U.intake.identity.existingMaterialId));if(a.includes(r.source.variant.nominalDiameterMm)&&s.length){let e=document.createElement(`option`);e.value=``,e.textContent=`Katalog parçasını seç`,E.replaceChildren(e,...s.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),K=r,ne.hidden=!1}let u=ae(U.intake,r,`pendant`,e);if(re(U.intake)||u){let t=Be(),n=ae(U.intake,r,t),i=ae(U.intake,r,t,le);d.some(e=>e.source?.sha256===o.sha256)?T.textContent=`Ölçüm revizyonu indirildi. Bu GLB zaten katalogda kayıtlı.`:n||i||u?(q=r,I.value=t,_e.disabled=!n,ve.disabled=!i,ye.disabled=!u,F.value=n?`round`:u&&!i?e:``,A.replaceChildren(...W.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.name,n})),oe.hidden=!1,Ue(),Ge()):T.textContent=`Ölçüm revizyonu indirildi. Yeni giriş için ölçülmüş tek delikli adet varyantı ve türleriyle uyumlu, güvenli kaynak dosya adları gerekir.`}}catch(e){t===G&&(T.textContent=e.message)}finally{Oe=!1,Z()}}),O.addEventListener(`click`,async()=>{if(!K||O.disabled)return;let e=K,t=E.value,n=D.value;O.disabled=!0;try{let r=m.find(e=>e.id===t);if(!r)throw Error(`Katalog parçasını açıkça seç.`);let i=await u(e,r,{sku:n});if(!g.open||e!==K||t!==E.value||n!==D.value)return;c(JSON.stringify(i,null,2),`jew-katalog-eslestirme-taslagi.json`),ie.textContent=`Eşleştirme taslağı indirildi. Stok ve satış onayı bekliyor.`}catch(t){e===K&&(ie.textContent=t.message)}finally{O.disabled=!1}}),we.addEventListener(`click`,async()=>{if(!g.open||we.disabled)return;let e=q,n=ke,r=()=>g.open&&e===q&&n===ke,[i,a,o,s]=P.map(e=>e.value),l=t(L.value)?L.value:null,u={role:I.value,materialClass:l,materialEvidenceRef:l?R.value:null,classApproved:!!(l&&z.checked)},{form:d,boreCenterMm:f}=J,p=d===`round`?{}:{form:d};f&&(p.boreCenterMm=f),Ae=!0,Q();try{let t=await se({intake:U.intake,measurementRevision:e,name:i,operatorRef:a,rightsRef:o,reviewRef:s,visualApproved:B.checked,catalog:u,...p});if(!r())return;c(JSON.stringify(t),`jew-gorsel-katalog-onayi.json`),Te.textContent=`Özel onay dosyası indirildi. Katalog yayını ayrı bir adımdır.`}catch(e){r()&&(Te.textContent=e.message)}finally{Ae=!1,Q()}}),s(`material-intake-close`).addEventListener(`click`,()=>g.close()),g.addEventListener(`close`,()=>{qe();for(let e of _)e.value=``}),g}export{j as installMaterialIntake};