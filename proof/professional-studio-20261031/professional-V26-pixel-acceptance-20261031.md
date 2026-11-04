# V26 independent pixel acceptance - 2026-10-31

**FIX for reference-level acceptance. A bounded development preview is worthwhile after one small larvikite correction and the proposed photographic reset-camera check. Do not hold the already improved UI/light/grounding bundle for a complete optical rewrite.**

Inspected source pin: `ffc31b55ac8b507790665c77bfcfe38c22d2913f`, verified from `git rev-parse HEAD`. This is an independent read-only art review; only this report is written. Root remains responsible for source integration, actual post-change GPU capture, functional gates, main and release.

## Actual pixels opened

All four originals below were opened through `view_image`, not inferred from thumbnails, descriptions, tests or shader text. Concepts A/B are generated targets, not runtime evidence. The supplier photograph is an observational reference only: no reuse license was verified; do not copy it into product textures or a public proof package.

| Image | Dimensions | SHA256 |
|---|---|---|
| V25 actual GPU capture | 1825 x 1369 | `fcbeccb9fb97d7ae1686d07245a9134b187470a8438f8003aa22966968509e76` |
| V03 A generated concept | 1536 x 1024 | `dc2a2152558903f8940a9966a1b8d32a0c9906427772b702b157847fba07a050` |
| V03 B generated concept | 1536 x 1024 | `8495c4a9cddeca55c33a74cb18aeba22e403c8a7201117b7fc21c36453d6ae9b` |
| Dakota matte supplier reference - reference only | 896 x 896 | `323e8322e0212ebb6fe5693e091a2c6a892735f5ed5e2ecd6524dc091f982be9` |

## Observed defects, ranked

1. **Larvikite is the strongest realism break.** Each grey bead has large, strongly separated nearly white and nearly black rounded islands. It reads as camouflage/printed glass rather than the much quieter mineral body in the matte supplier photo. That reference contains midtone grey/green variation, overlapping mottling and sparse dark markings; it does not support this binary palette. The matte identity must remain matte. The polished concept beads do not justify silently polishing the stock identity. The reference photo is not calibrated colour evidence, so its exact green cast must not be treated as physical truth.
2. **The photographic composition still reads like an inspection view.** The relatively high angle, large empty marble area and almost circular footprint give the floor more visual weight than the near row of beads. The target A obtains depth from a lower view, enlarged near row and receding back row. Current contact is faint at normal viewing size: the object appears lightly suspended in places even though a small dark rim is visible. This is a pixel observation, not proof of wrong carrier height or a failed mask.
3. **Species still have a visible material-quality gap.** The white beads look like milky ceramic/opal rather than layered warm nacre; garnet has a cool grey lower-body band; tiger eye shows a golden body band but a comparatively clean/ribbed amber surface. Black onyx and gold are presently the most convincing separation. Repeated small white reflection shapes across the glossy families reinforce a synthetic look. These gaps matter for final target acceptance, but they are not a reason to restart the material system or block a useful incremental preview indefinitely.

## Only two immediate recommendations

1. **Compress only the unpublished v2 larvikite albedo range.** Current profile low `[.075,.092,.12]` and high `[.65,.68,.73]`, plus the low-tone/mineral split, make its extremes too dominant. Bring the dark end into a mineral midtone and reduce the pale end; retain the same three field reads, existing finer variation, occurrence identity and matte roughness. A colour-range change is the first experiment, not another grain-density rewrite. Check the actual full bracelet at the same Recipe/camera and one close larvikite view. Do not grade all jewelry or tint the whole HDR to repair this one species.
2. **Use the proposed 30-35 degree, centred photographic reset camera for this scene, then take bracelet and necklace product captures.** Keep the neutral inspection camera and manual orbit intact. Apply the photographic framing on deliberate reset/new design, not on selection, texture arrival or every scene tick. Judge contact again from this lower angle before adding another shadow technique. No additional renderer, texture set, sample count, bloom or heavier DOF is justified by these pixels.

## Admission and stopping boundary

- **Whole Goal / reference A-B quality:** FIX. Current V25 does not establish professional product-photograph parity. Do not call the Goal complete from this review.
- **Meaningful development preview:** favourable conditional art decision after the two bounded changes are actually captured and show no worse material/contact/cropping behavior in both product families. Retain remaining pearl/garnet/floor limitations openly. Existing verified UI, stage space, sampling, carrier grounding and warm photo lighting can be shipped as a coherent improvement without waiting for all species to become reference-level.
- Do not silently promote old saved designs. Default-v2 admission additionally needs Root's all-species real-driver and movement/identity checks; this one bracelet image does not establish them.
- Stop this correction cycle after the matched render and both-family framing check. If the result is clearly better, publish the coherent development preview through the existing authorised path. If it is worse, revert only this new palette/camera experiment, keep already verified improvements, and record the concrete residual defect. Do not launch another broad research or shader rewrite on this review alone.

## Evidence limits, risk and rollback

Source excerpts inspected: `src/natural-stone-field-v2.js` profile and kind-8 surface branch; `src/scene-contact-shadow.js` configuration/material multiplication; `src/studio-presets.js` photo values; `src/scene-presentation.js` reset-preset accessor. No production source was changed. No tests, browser, GPU command, animation, mobile device, performance profile, screen/PNG comparison, or new network research were run by this reviewer. V25 is the supplied actual GPU artifact, not a personally reproduced render. No baseline render was opened, so this report does not quantify before/after gain.

Main risks: a darker larvikite can lose silhouette against onyx; lower camera can crop the clasp/pendant or make front-row occlusion hide parts. Keep the two edits independently reversible and verify both complete families. Rollback boundary is only the unpublished v2 palette and photographic reset-camera additions; published natural-v1, saved Recipe identities, support geometry and existing accepted stage/UI changes remain owned by Root. Incremental spend: USD0; only local file reads and this output write.
