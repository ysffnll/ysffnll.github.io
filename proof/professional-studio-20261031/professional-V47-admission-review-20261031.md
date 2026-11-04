# V47 — NO-FIX for source admission; preserve v3 support in rollback

2026-10-31. Independent bounded admission review. **No source-proven blocking defect found in V45's proposed normal v3 admission.** Root may continue integration and its focused/full/runtime checks. This is not photographic-quality acceptance or proof that deployment/rollback has occurred. The whole professional-photo Goal remains **FIX**.

The material source is unchanged v3 A. This review does not readmit rejected pearl B, the rejected local environment probe, DoubleSide/BackSide behavior or new optical parameters.

## Exact source and files inspected

- Immutable local source `f2e0fd80c2f480a20294ba5279d34ef5e562ce02`; HEAD matched at intake. Existing dirty Root documentation was preserved.
- ZIP `V45-v3-admission/V45-v3-admission.zip`: **158,508 B**, independently verified SHA256 `087ff095c28d9df400c713dc11bbccc3d7c8099a0c83733b6d23ebb372e89476`.
- Read complete `REPORT.md`, `MANIFEST.json`, all 487 lines of the minimal `V45-v3-admission.patch`, and the complete expanded `natural-v3-integration.test.js`: five standalone cases plus four cases for each family, **13 named cases**.
- Inspected proposed registry/resolvers, normal material factory allocation/dispatch/optics/disposal, normal scene constructor/caller changes, QA label/camera changes, and unchanged model/start/add/duplicate/refresh/provenance/persistence call sites. Read the published `1219090` registry directly through `git show` to confirm its lack of v3 support.
- Verified all **18** delivered pre/post files against exact manifest sizes/hashes. Compared the nine source preimages and eight protected files to the pinned Git source with only CRLF/LF normalization where necessary: all source text matched. Raw Git blobs use LF for several existing files, while their delivered/worktree hashes cover CRLF; that is not product drift.
- Root adopted the nine postimages during this concurrent review. A later read confirmed **9/9 current postimage hashes** and **8/8 protected current hashes** match the manifest. Those production changes were Root's work; this reviewer wrote only this REPORT.

Critical final pins:

| File | SHA256 |
|---|---|
| `src/appearance-versions.js` | `bbfaba0c09f47b6794d472d915c5018e5b1e7633052fff706a12157f1df4dfa0` |
| `src/scene-materials.js` | `9fe0b6f25e87de8d27768c3ffbabb3b9bc7fbf6e61cee2d52e51a6f874f74c45` |
| `src/scene.js` | `18c8cdc22875dfe190209db0110c662ce595acc641dcd4955e202477fbfda453` |
| `tools/professional-capture.html` | `e42eb25b95a1714ee47b543813cf23aac3a4b828c55065332e4141d3f6b9ad62` |
| Expanded `src/natural-v3-integration.test.js` | `126338c46be48d3c25c21e1fa556983ff958c33cabfd0fbcbecaaec439789513` |
| Protected intrinsic `src/natural-stone-material-v3.js` A | `31d30f104b6e56695213d89cc9c15dd3a7d52d0e95446d559b4815ed0d24b4b7` |
| Protected v2 material | `9157cf0cb8c06b1777abb32834a3345d3c173246395f4b76a4c9ae26f06d3550` |
| Protected v2 descriptor | `1b842aac69af2c3bd8af826992528791aee27bcbf0a988b86d6749bc15800014` |
| Protected v2 field | `7f533b89d5821e4716ab02882a0e75594e24f52ec5035ac420223ad466da7cb6` |
| Protected v1 field | `2a9000cdb751b0a64d0f609c4d01134e5d125facaff6743670954de89853ac58` |

The five other affected test postimages and protected dispatcher/model/main hashes were also checked against the complete manifest; they are not inferred from the ZIP name.

## Source compatibility assessment

**Creation versus stored data.** Only `NEW_APPEARANCE_VERSION` becomes `natural-v3`. Existing generic/premium/realism starters, add, duplicate and explicit all-stone refresh already consume NEW. Explicit saved legacy-r27/id-r43/natural-v1/natural-v2/v3 values resolve to themselves. `DEFAULT_APPEARANCE_VERSION` remains `id-r43`; known-local missing values remain `id-r43`, known-live/unknown-external missing values remain `legacy-r27`. No load/open path invokes refresh or substitutes NEW for an explicit old version.

The unchanged model/persistence boundary preserves canonical Recipe/version/ID/transform/tint/scale behavior. The expanded cases compare canonical serialized data, exact archived v1 input and storage reads without writes. They do not promise preservation of arbitrary unknown JSON properties or change the established managed-v2 handling of sourceRotation. Refresh remains an explicit, stone-only, single Undo transaction; hardware/archive and source component identity are preserved. Repeating an already-current refresh is a no-op.

**Normal noninspection support.** Removal of `qaOnly`, the library opt-in parameter/rejection and the scene inspection-only rejection is consistent at both call layers. The unchanged normal factory branch now accepts explicit v3 without inspection. Inspection-only diagnostics remain conditional on inspection, and the capture tool's 32/52-degree controls remain intact. Its test is source-glue evidence, not execution of a browser scene.

**Strict rejection before allocation.** `createDisplayMaterial` calls `resolveAppearanceVersion` before cloning an original material or accessing swatch/field creation. The registry does not include natural-v4 and uses an own-property string check. Null/future values therefore fail before new species swatches or fields. Omitted material API version still resolves to id-r43. Changing the old unsupported-token test from v3 to v4 is appropriate; its no-allocation and historical snapshot assertions remain in place, and v3 acceptance is tested positively elsewhere.

**Cache/resource/lifetime.** V2/v3 share the existing lazy 32-cubed RGBA8 field and per-species four-byte fallback swatches. Eleven used species require 131,116 bytes of CPU texture payload, not eleven fields. Mixed v1/v2/v3 uses the existing v1 and v2 field owners. Nine v3 families call the exact v2 implementation, including its keys/body controls; larvikite/pearl use their separate v3 family/ABI keys. No occurrence ID is added to program keys. Original uniform objects and existing native optics registration/disposal remain unchanged. Occurrence material disposal does not own shared maps; the scene library disposes them and unregisters optical materials. These are source and supplied CPU conclusions, not measured driver memory/cache reacquisition.

No extra hostile probe was warranted: this admission consists of a small policy/gate removal, and the concrete compatibility/resource risks are already covered by the expanded real-reducer/factory cases. No duplicate test run was performed.

## What was actually checked

This reviewer executed read-only artifact hash/size/source comparisons and read the test implementation and raw final totals. **No semantic test, build, browser/GPU, provider or deployment check was executed by this reviewer.**

Producer evidence read: focused admission **74 pass / 0 fail / 0 skipped**, plus selected published compatibility **6 pass / 0 fail / 0 skipped**. The 13 admission cases cover normal all-eleven factory support, mixed resources/optics/lifetime, exact nine-family delegation, strict future/default/fallback behavior, caller glue, and four data/action scenarios for both bracelet and necklace. These are the producer's 80 focused passes. Root owns rerunning focused/full checks and proving the normal application, context restoration, data roundtrip and actual same-source rendering.

CPU hook assembly does not prove native GLSL execution, quality, device performance or reference-photo realism. Previously bounded visual findings do not become broader merely because the default changes.

## Smallest safe rollout and rollback boundary

**The existing published `12190906778f64abd88a9223940bd759b95a52c4` / Worker `de6c66a6-5319-42e2-8c6a-28d7081438a1` is not a safe post-v3-data rollback.** Its registry has no natural-v3 entry. Once a user can save a v3 occurrence, that old release rejects the version rather than rendering it normally. `readSaved` itself preserves stored bytes on failure, but an unreadable design is already a product regression; a later new save is not a compatibility remedy.

Prepare the following before enabling public NEW=v3:

1. **Compatibility fallback R:** a clean, immutable, built package retaining admitted registry v3, normal noninspection factory/scene support and exact intrinsic A/v1/v2 code. Set only NEW creation policy back to natural-v2; keep DEFAULT/provenance and existing stored versions unchanged. Record its source/intent diff, output hashes, build/runtime evidence and concrete redeploy command for the existing Worker/free path.
2. **Activation S:** the clean reviewed NEW=v3 candidate, verified separately. Root's normal-runtime checks should cover both families and old/mixed/v3 saved fixtures, add/duplicate/refresh/Undo/reload, sizes, one renderer/resources and context recovery.
3. Before public S, prove R can normally load/render and cold save/reopen a mixed fixture containing explicit v3 **without changing its stored versions**; also confirm R's new additions/starters use v2. Keep the fallback artifact available independently of a dirty worktree or rebuilding a later branch.
4. Publish S through the already established free path. If S regresses, **redeploy R or another v3-compatible release**. Do not select the old pre-v3 provider version as the default rollback, re-enable QA gates or rewrite v3 Recipe data into v2.

R prepared locally is a **prepared redeployment artifact**, not a provider-verified deployment/rollback version. Do not attach a provider acceptance claim until that actual provider action occurs. A separate compatibility-only public preview is not inherently indispensable when the existing free upload/redeploy path is available and R is locally proven. If the only available recovery operation can select an already hosted provider version, publish compatible NEW=v2 R first, retain its actual deployment identity, then activate S. That is a capability-dependent boundary, not a reason for another account, resource or quota investigation.

Do not run refresh as part of rollback. The current explicit refresh consumes NEW, so a NEW=v2 fallback targets v2 if the user deliberately invokes that action; do not describe it as a v3 upgrade or silently invoke it on stored designs. Opening, rendering and ordinary cold save/reopen must keep each explicit version as stored.

This rollout boundary permits useful integration and package preparation now. Missing formal YSF closure or an unavailable public network readback is not a source defect or a whole-Goal stop. Distinguish Root's actual local/runtime evidence, provider publication receipt and any unavailable public readback rather than claiming an unobserved result.

## Decision and limits

**NO-FIX for the bounded admission source.** No additional production correction requested. Root should complete its prepared v3-compatible fallback and integrated/runtime checks before public NEW=v3 activation; this report does not assert that fallback exists or has been provider-verified. The public photographic Goal remains FIX.

Reviewer scope: only this output REPORT was written. No production/Git mutation, network/browser, dependency, account, external service, user data, build or release action. Services used were existing local PowerShell/Python/Git reads only. Incremental spend **USD0**.
