import{d as e,r as t,t as n,u as r}from"./bead-sizing-D7kPumvZ.js";import{a as i,n as a,r as o,t as s}from"./material-measurement-DoOVQVW5.js";import{t as c}from"./material-catalog-binding-ROulRYju.js";import{t as l}from"./component-registry-B5qFk5jF.js";import{n as u,t as d}from"./material-admission-geometry-BdaEx9Kt.js";var ee=`jew.material-catalog-admission.v1`,f=`jew.material-catalog-admission.v2`,p=`jew.material-catalog-admission.v3`,m=`irregular-threaded`,h=`visual-approved`,g=[`intake`,`measurementRevision`,`name`,`operatorRef`,`rightsRef`,`reviewRef`,`visualApproved`],_=[`role`,`materialClass`,`materialEvidenceRef`,`classApproved`],v=new Map([[`jpg`,`image/jpeg`],[`jpeg`,`image/jpeg`],[`png`,`image/png`],[`webp`,`image/webp`]]),y=`model/gltf-binary`,b=e=>e.split(`.`).at(-1).toLowerCase();function x(e,t){return typeof e==`object`&&!!e&&!Array.isArray(e)&&Reflect.ownKeys(e).length===t.length&&t.every(t=>Object.hasOwn(e,t))}function S(e){if(typeof e!=`string`||e.length>262144||new TextEncoder().encode(e).byteLength>262144)throw RangeError(`Görsel katalog kabul kaydı en fazla 256 KiB JSON olabilir.`)}function C(e,t,n){if(typeof e!=`string`||e.length>t||!e.isWellFormed()||!e.trim()||/[<>\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))throw TypeError(`${n} boş veya geçersiz.`);return e.trim()}function w(e){if(typeof e!=`string`||e.length>180||!e.isWellFormed()||e!==e.trim()||e.startsWith(`.`)||!e.includes(`.`)||/[<>:"/\\|?*\p{Cc}\p{Cf}\p{Zl}\p{Zp}]/u.test(e))return!1;let t=e.normalize(`NFKC`).split(`.`)[0].trimEnd().toUpperCase();return!/^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9]|CONIN\$|CONOUT\$)$/.test(t)}function te(e){if(!Array.isArray(e?.photoFiles)||!e.photoFiles.length||e.photoFiles.length>16)return!1;let t=[...e.photoFiles,e.modelFile];return!t.every(w)||b(e.modelFile)!==`glb`||!e.photoFiles.every(e=>v.has(b(e)))?!1:new Set(t.map(e=>e.normalize(`NFKC`).toUpperCase())).size===t.length}var T=e=>e===`stone`||e===`bead`;function ne(e){return e?.identity?.existingMaterialId===null&&[`stone`,`other`,`spacer`].includes(e.identity.kind)}function E(e,t,r,i){let a=t?.source?.variantIndex;if(!(r===void 0?e?.identity?.existingMaterialId===null&&e.identity.kind===`stone`:T(r)&&ne(e))||t?.status!==`operator-measured`||!Number.isSafeInteger(a)||a<0)return!1;let o=e.variants?.[a],{holeCount:s,holeDiameterMm:c}=t.measurement??{};return o?.stockUnit===`piece`&&(i===m?r!==void 0:i===`round`&&n.includes(o.nominalDiameterMm))&&s===1&&Number.isFinite(c)&&c>0}function D(e,t){return!Array.isArray(t)||t.length!==e.photoFiles.length+1?!1:new Set(t.map(e=>e?.name)).size===t.length&&t.every(t=>x(t,[`name`,`bytes`,`sha256`,`mimeType`])&&(t.name===e.modelFile?t.mimeType===y:e.photoFiles.includes(t.name)&&t.mimeType===v.get(b(t.name))))}function re(e,t,n,r=`round`){return E(e,t,n,r)&&te(e.visual)&&D(e.visual,t.source.assets)}async function ie(e,t,n,r){if(!x(t,[`schemaVersion`,`status`,`source`,`measurement`,`revisionId`])||!x(t.source,[`intakeSha256`,`variantIndex`,`variant`,`assets`])||!x(t.measurement,[`dimensionsMm`,`holeDiameterMm`,`holeCount`,`method`,`reference`])||!x(t.measurement.dimensionsMm,[`x`,`y`,`z`]))throw TypeError(`Ölçüm revizyonu geçersiz.`);if(!E(e,t,n,r))throw TypeError(r===m?`Düzensiz görsel katalog kabulü için yeni bir adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`:`Görsel katalog kabulü için ${n===void 0?`yeni bir taş`:`yeni bir yuvarlak parça adayı`}, 4/6/8 mm adet varyantı ve ölçülmüş tek pozitif çaplı delik gerekli.`);if(!te(e.visual))throw TypeError(`Görsel dosya adları güvenli ve birbirinden farklı olmalı.`);let{variantIndex:i,assets:a}=t.source;if(!D(e.visual,a))throw TypeError(`İncelenmiş dosya özetleri ve uzantıları eşleşmiyor.`);let c=o(t),l=await s({intake:e,variantIndex:i,...t.measurement,assets:a.map(e=>e.mimeType===y?{...e,version:2}:e)});if(c!==o(l))throw TypeError(`Ölçüm revizyonu, seçilen varyant veya kaynak dosya özetleri değişmiş.`);return l}function O(t){if(!x(t,_)||!T(t.role))throw TypeError(`Katalog rolü veya malzeme sınıfı kaydı geçersiz.`);let{role:n,materialClass:r,materialEvidenceRef:i,classApproved:a}=t;if(r===null){if(i!==null||a!==!1)throw TypeError(`Bilinmeyen malzeme sınıfına kanıt veya onay eklenemez.`)}else{if(!e(r)||a!==!0)throw TypeError(`Bilinen malzeme sınıfı için geçerli sınıf ve ayrı operatör onayı gerekli.`);C(i,200,`Malzeme sınıfı kanıt referansı`)}return{role:n,materialClass:r,materialEvidenceRef:i,classApproved:a}}async function ae({intake:e,measurementRevision:t,name:n,operatorRef:r,rightsRef:o,reviewRef:s,catalog:c,form:l},u,d){let f=i(JSON.stringify(e)),g={name:C(n,160,`Katalog adı`),operatorRef:C(r,200,`Operatör referansı`),rightsRef:C(o,200,`Kullanım hakkı referansı`),reviewRef:C(s,200,`Görsel inceleme referansı`)};if(d===p&&l!==m)throw TypeError(`Düzensiz katalog kabul biçimi geçersiz.`);let _=d===ee?void 0:O(c),v=await ie(f,t,_?.role,l??`round`),y={schemaVersion:d,status:h,...g,nonce:u,intake:f,measurementRevision:v};_&&(y.catalog=_),d===p&&(y.form=l);let b={...y,admissionId:`sha256:${await a(y)}`};return S(JSON.stringify(b)),b}async function oe(e){let t=x(e,[...g,`catalog`,`form`])?p:x(e,[...g,`catalog`])?f:x(e,g)?ee:null;if(!t||e.visualApproved!==!0)throw TypeError(`Görsel katalog kabulü için açık operatör onayı gerekli.`);if(!globalThis.crypto?.getRandomValues)throw Error(`Görsel katalog kabulü için güvenli rastgele veri gerekli.`);let n=globalThis.crypto.getRandomValues(new Uint8Array(32));return ae(e,Array.from(n,e=>e.toString(16).padStart(2,`0`)).join(``),t)}var se=new Intl.NumberFormat(`tr-TR`,{maximumFractionDigits:3}),k=`irregular-threaded`;function A(a,o,ee,f){let p=a(`material-intake-dialog`),m=[`material-intake-json`,`material-intake-photos`,`material-intake-model`].map(a),h=a(`material-intake-status`),g=a(`material-intake-results`),_=a(`material-intake-reviewed`),v=a(`material-intake-inspect`),y=a(`material-intake-export`),b=a(`material-measurement`),x=a(`material-measurement-variant`),S=a(`material-measurement-confirm`),C=a(`material-measurement-export`),w=a(`material-measurement-status`),te=a(`material-binding`),T=a(`material-binding-component`),E=a(`material-binding-sku`),D=a(`material-binding-export`),ie=a(`material-binding-status`),O=e=>a(`material-admission-${e}`),ae=a(`material-admission`),A=O(`photo`),j=O(`photo-preview`),ce=O(`photo-status`),le=O(`geometry`),ue=O(`model-preview`),de=O(`model-views`),fe=O(`model-image`),pe=O(`model-status`),me=O(`model-source`),he=[...de.querySelectorAll(`[data-material-review-view]`)],M=[`name`,`operator`,`rights`,`review`].map(O),N=O(`form`),ge=N.querySelector(`[value="round"]`),_e=N.querySelector(`[value="irregular-threaded"]`),P=O(`role`),F=O(`class`),ve=O(`class-fields`),I=O(`class-evidence`),L=O(`class-confirm`),ye=O(`class-confirm-label`),R=O(`confirm`),be=O(`export`),xe=O(`status`),z=e=>a(`material-measurement-${e}`),Se=[`x`,`y`,`z`,`hole-count`,`hole-diameter`,`method`,`reference`].map(z),B=0,V=null,H=[],Ce=null,U=0,we=!1,W=null,G=null,Te=0,Ee=!1,De=0,K=null,q=null,J=null,Y=new Map,X=new Set;for(let[e,t]of Object.entries(r)){let n=document.createElement(`option`);n.value=e,n.textContent=t,F.append(n)}a(`material-intake-prompt`).value=`# JEW · Malzeme ekleme sözleşmesi ve sabit AI prompt'u

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
`.match(/\x60\x60\x60text\r?\n([\s\S]*?)\r?\n\x60\x60\x60/)?.[1]??``;function Z(){C.disabled=!V||!_.checked||!S.checked||we}function Oe(){W=null,te.hidden=!0,T.replaceChildren(),E.value=``,ie.textContent=``}function Q(){let t=e(F.value);if(ve.hidden=!t,L.disabled=!t||!I.value.trim(),t&&G&&N.value){let e=G.source.variant.nominalDiameterMm,t=N.value===k?`düzensiz delikli parçayı`:`${e} mm parçayı`;ye.textContent=`Bu kayda dayanarak ${t} ${r[F.value]} olarak beyan ediyorum.`}ue.disabled=!K||!f||!!q||Y.size>0,R.disabled=!G||!K||!!q||j.hidden||X.size!==H.length||!P.value||M.some(e=>!e.value.trim());let n=t&&(L.disabled||!L.checked);be.disabled=R.disabled||!R.checked||n||Ee}function ke(){Te++,R.checked=!1,xe.textContent=``,Q()}function $(){L.checked=!1,ke()}function Ae(){j.hidden=!0,j.removeAttribute(`src`),j.alt=``,J&&URL.revokeObjectURL(J),J=null}function je(){de.hidden=!0,fe.removeAttribute(`src`),fe.alt=``,me.textContent=``;for(let e of Y.values())URL.revokeObjectURL(e);Y.clear()}function Me(e){let t=Y.get(e);if(t){for(let t of he){let n=t.dataset.materialReviewView===e;t.setAttribute(`aria-pressed`,String(n)),n&&(fe.alt=`GLB görünümü · ${t.textContent.trim()}`)}fe.src=t}}function Ne(){De++,K=null,q?.abort(),q=null,je(),pe.textContent=``,le.textContent=``}function Pe(){G=null,ae.hidden=!0,Ne(),N.value=``,ce.textContent=``,A.replaceChildren(),X.clear(),Ae();for(let e of M)e.value=``;P.value=F.value=I.value=``,$()}async function Fe(){Ae(),ke();let e=Number(A.value),t=H[e];if(!G||!t)return;let n=URL.createObjectURL(t.slice(0,t.size,V.assets[e].mimeType));J=n,ce.textContent=`Fotoğraf açılıyor…`,j.src=n;try{if(await j.decode(),!p.open||n!==J)return;X.add(e),j.alt=`Kaynak fotoğrafı · ${t.name}`,j.hidden=!1,ce.textContent=`${X.size}/${H.length} kaynak fotoğrafı açıldı.`}catch{if(!p.open||n!==J)return;X.delete(e),Ae(),ce.textContent=`Fotoğraf açılamadı (${t.name}). Geçerli bir dosya seçip yeniden incele.`}Q()}async function Ie(e,t,n){let r=De,i=()=>p.open&&e===G&&r===De;le.textContent=`GLB’nin dijital geometrisi kontrol ediliyor…`;try{let r=await t.arrayBuffer();if(!i())return;let a=await u({name:t.name,size:t.size,arrayBuffer:async()=>r},`model`);if(!i())return;let o=e.source.assets.find(e=>e.mimeType===`model/gltf-binary`);if(a.sha256!==o.sha256||a.bytes!==o.bytes)throw Error(`GLB baytları ölçüm revizyonuyla eşleşmiyor.`);let s=n===k,c=s?null:e.source.variant.nominalDiameterMm,{displayExtent:l,diameterMm:ee,triangles:f,boreClearanceMm:p}=d(r,c,{publicPayload:!0,form:n}),m=e=>se.format(e),h=s?`Kaynak boyutu (X × Y × Z) ${l.map(e=>m(e*10)).join(` × `)} mm`:`Model çapı ${m(ee)} mm · Sahne boyutları (X × Y × Z) ${l.map(m).join(` × `)}`;le.textContent=`GLB doğrulandı. +Y ekseninde merkezli geçiş · ${h} · Dijital geçiş çapı ${m(p)} mm · ${m(f)} üçgen.`,K={file:t,source:{sha256:o.sha256,bytes:o.bytes},nominalMm:c,form:n}}catch(e){i()&&(le.textContent=e.message)}i()&&Q()}function Le(){Ne(),$(),G&&N.value&&Ie(G,Ce,N.value)}function Re(){U++;for(let e of Se)e.value=``;S.checked=!1,w.textContent=``,Oe(),Pe(),Z()}function ze(){B++,V=null,H=[],Ce=null,h.textContent=``,g.replaceChildren(),_.checked=!1,_.disabled=!0,y.disabled=!0,b.hidden=!0,b.open=!1,x.replaceChildren(),Re()}for(let e of m)e.addEventListener(`change`,ze);A.addEventListener(`change`,Fe),N.addEventListener(`change`,Le);for(let e of he)e.addEventListener(`click`,()=>Me(e.dataset.materialReviewView));ue.addEventListener(`click`,async()=>{if(!p.open||ue.disabled)return;let e=K,t=new AbortController;q=t;let n=()=>p.open&&K===e&&q===t;ke(),pe.textContent=`Doğrulanan GLB’den görünümler hazırlanıyor…`;try{let r=await e.file.arrayBuffer();if(!n())return;let{verifiedSha256:i,verifiedBytes:a,views:o}=await f({bytes:r,source:e.source,nominalMm:e.nominalMm,form:e.form,signal:t.signal});if(!n())return;let s=new Map(o.map(e=>[e.id,e.blob]));if(i!==e.source.sha256||a!==e.source.bytes||o.length!==he.length||he.some(e=>{let t=s.get(e.dataset.materialReviewView);return!(t instanceof Blob)||t.type!==`image/png`||!t.size}))throw Error(`Görünümler doğrulanan GLB ile eşleşmiyor.`);for(let[e,t]of s)Y.set(e,URL.createObjectURL(t));Me(`oblique`),me.textContent=`SHA-256 ${i}`,de.hidden=!1,pe.textContent=`Üç görünüm hazır. Görsel onayı ayrıca işaretle.`}catch(e){if(!n())return;je(),pe.textContent=e.message}finally{n()&&(q=null,Q())}});for(let e of M)e.addEventListener(`input`,e===M[1]?$:ke);P.addEventListener(`change`,$),F.addEventListener(`change`,()=>{I.value=``,$()}),I.addEventListener(`input`,$),window.addEventListener(`pageshow`,e=>{e.persisted&&p.open&&$()});function Be(){Te++,xe.textContent=``,Q()}R.addEventListener(`change`,Be),L.addEventListener(`change`,Be),_.addEventListener(`change`,()=>{y.disabled=!V||!_.checked,b.hidden=y.disabled,b.hidden&&Re(),Z()}),x.addEventListener(`change`,Re);for(let e of Se)e.addEventListener(`input`,()=>{U++,S.checked=!1,w.textContent=``,Oe(),Pe(),Z()});return S.addEventListener(`change`,()=>{U++,S.checked||(Oe(),Pe()),Z()}),v.addEventListener(`click`,async()=>{ze();let e=B;v.disabled=!0,h.textContent=`Dosyalar cihazda inceleniyor…`;try{let[t]=m[0].files,n=[...m[1].files],[r]=m[2].files;if(!t||!r||!n.length||n.length>6)throw Error(`Bir AI JSON, bir GLB ve 1–6 fotoğraf seç.`);if(t.size>131072)throw Error(`AI JSON 128 KiB sınırını aşıyor.`);let a=i(await t.text()),o=new Set(n.map(e=>e.name));if(o.size!==n.length||a.visual.photoFiles.length!==o.size||!a.visual.photoFiles.every(e=>o.has(e))||r.name!==a.visual.modelFile)throw Error(`Fotoğraf veya GLB adları JSON ile eşleşmiyor.`);let s=[];for(let t of n){if(e!==B)return;s.push(await u(t,`photo`))}if(e!==B||(s.push(await u(r,`model`)),!p.open||e!==B))return;V={intake:a,assets:s},H=n,Ce=r,x.replaceChildren(...a.variants.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.label,n}));let c=[`${a.identity.suggestedName} · ${a.variants.length} varyant`,...s.map(e=>`${e.name} · ${e.bytes} bayt · SHA-256 ${e.sha256}`)];g.replaceChildren(...c.map(e=>{let t=document.createElement(`li`);return t.textContent=e,t})),_.disabled=!1,h.textContent=`Dosyalar eşleşti. Görsel model ve fiziksel özellikler operatör onayı bekliyor.`}catch(t){e===B&&(h.textContent=t.message)}finally{v.disabled=!1}}),y.addEventListener(`click`,()=>{V&&_.checked&&(o(JSON.stringify({schemaVersion:`jew.material-review.v1`,status:`reviewed-draft`,...V,reviewedAt:new Date().toISOString()},null,2),`jew-malzeme-taslagi.json`),h.textContent=`Taslak kayıt indirildi. Kaynak dosyalarını ayrıca sakla.`)}),C.addEventListener(`click`,async()=>{if(!V||!_.checked||!S.checked||we)return;let e=U;we=!0,Z();try{let r=z(`hole-diameter`),i=await s({...V,variantIndex:Number(x.value),dimensionsMm:{x:z(`x`).valueAsNumber,y:z(`y`).valueAsNumber,z:z(`z`).valueAsNumber},holeCount:z(`hole-count`).valueAsNumber,holeDiameterMm:r.value===``?null:r.valueAsNumber,method:z(`method`).value,reference:z(`reference`).value});if(!p.open||e!==U)return;o(JSON.stringify(i,null,2),`jew-malzeme-olcum-revizyonu.json`),w.textContent=`Ölçüm revizyonu indirildi. Stok ve katalog yayını bekliyor.`,Pe();let a=i.source.assets.find(e=>e.mimeType===`model/gltf-binary`),c=ee.filter(e=>e.source?.sha256===a.sha256&&t(e)&&(!V.intake.identity.existingMaterialId||e.id===V.intake.identity.existingMaterialId));if(n.includes(i.source.variant.nominalDiameterMm)&&c.length){let e=document.createElement(`option`);e.value=``,e.textContent=`Katalog parçasını seç`,T.replaceChildren(e,...c.map(e=>{let t=document.createElement(`option`);return t.value=e.id,t.textContent=e.name,t})),W=i,te.hidden=!1}if(ne(V.intake)){let e=V.intake.identity.kind===`stone`?`stone`:`bead`,t=re(V.intake,i,e),n=re(V.intake,i,e,k);l.some(e=>e.source?.sha256===a.sha256)?w.textContent=`Ölçüm revizyonu indirildi. Bu GLB zaten katalogda kayıtlı.`:t||n?(G=i,P.value=e,ge.disabled=!t,_e.disabled=!n,N.value=t?`round`:``,A.replaceChildren(...H.map((e,t)=>{let n=document.createElement(`option`);return n.value=String(t),n.textContent=e.name,n})),ae.hidden=!1,Fe(),Le()):w.textContent=`Ölçüm revizyonu indirildi. Yeni giriş için ölçülmüş tek delikli adet varyantı ve türleriyle uyumlu, güvenli kaynak dosya adları gerekir.`}}catch(t){e===U&&(w.textContent=t.message)}finally{we=!1,Z()}}),D.addEventListener(`click`,async()=>{if(!W||D.disabled)return;let e=W,t=T.value,n=E.value;D.disabled=!0;try{let r=ee.find(e=>e.id===t);if(!r)throw Error(`Katalog parçasını açıkça seç.`);let i=await c(e,r,{sku:n});if(!p.open||e!==W||t!==T.value||n!==E.value)return;o(JSON.stringify(i,null,2),`jew-katalog-eslestirme-taslagi.json`),ie.textContent=`Eşleştirme taslağı indirildi. Stok ve satış onayı bekliyor.`}catch(t){e===W&&(ie.textContent=t.message)}finally{D.disabled=!1}}),be.addEventListener(`click`,async()=>{if(!p.open||be.disabled)return;let t=G,n=Te,r=()=>p.open&&t===G&&n===Te,[i,a,s,c]=M.map(e=>e.value),l=e(F.value)?F.value:null,u={role:P.value,materialClass:l,materialEvidenceRef:l?I.value:null,classApproved:!!(l&&L.checked)},d=K.form===k?{form:k}:{};Ee=!0,Q();try{let e=await oe({intake:V.intake,measurementRevision:t,name:i,operatorRef:a,rightsRef:s,reviewRef:c,visualApproved:R.checked,catalog:u,...d});if(!r())return;o(JSON.stringify(e),`jew-gorsel-katalog-onayi.json`),xe.textContent=`Özel onay dosyası indirildi. Katalog yayını ayrı bir adımdır.`}catch(e){r()&&(xe.textContent=e.message)}finally{Ee=!1,Q()}}),a(`material-intake-close`).addEventListener(`click`,()=>p.close()),p.addEventListener(`close`,()=>{ze();for(let e of m)e.value=``}),p}export{A as installMaterialIntake};