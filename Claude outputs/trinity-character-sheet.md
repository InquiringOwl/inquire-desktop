# Trinity: Character Sheet (draft v0.1, 5 Oct 2026)

Trinity is the AI guide of Inquire. This sheet separates **who she always is** (identity layer) from **what changes per theme** (theme layer), and ends with prompt blocks you can paste into any image generator.

Items marked **(proposal)** are my creative suggestions for you to react to. Items marked **TBD** are not decided yet.

---

## 1. Role and personality

- Warm, encouraging mentor who makes hard topics feel safe.
- Calm and attentive. The warmth lives in her eyes, not in a big smile.
- A guide, never a judge: she never looks cold, stern or intimidating.

## 2. Identity layer (never changes, in any theme)

| Trait | Decision |
| --- | --- |
| Form | Full humanoid with a clear but stylized face. Illustrated, never photorealistic. |
| Face shape | Round and youthful. Simple, clean features drawn with few strokes (holds up at icon size). |
| Eyes (her signature) | Simple oval with a bright, luminous core. Eye color drifts slowly red, then blue, then green, then back to red. Purely ambient, no meaning attached. |
| Eye colors (proposal) | Soft coral-red `#F26D6D` (not an alarm red), cyan `#5CC8E0` (Inquire's c2), green `#7BD88F` (Inquire's c5). |
| Hair | Shoulder-length in every look. The material changes per theme (light strands, leaves, brass clasps), the length does not. |
| Default expression | Calm and neutral with warm, soft eyes. A slight head tilt is allowed. |
| Modesty | Modest, appropriate clothing in every look. |
| Hair color | **TBD** (constant across themes, or a theme variable?) |
| Skin tone / complexion | **TBD** (decide once, then lock it in the identity block) |

**Note on the round, youthful face:** it is fixed, so age differences between themes must come from styling (hair, posture, clothing, accessories), not from changing her face. This works for most looks; for Gothic / dark academia, lean on mature clothing and posture.

**Production note:** image generators cannot make the eye color cycle. Generate her once with a single glowing color, create the other two eye colors by recoloring the same image, and let Inquire animate the drift (CSS hue shift now, or Rive later).

## 3. Never (negative prompt basis)

No revealing or sexualized outfits. No cold or robotic look (no blank stare, metal mask, lifeless expression). No intimidating or dark mood, even in gothic looks. No photorealism or uncanny-valley faces.

## 4. Theme layer (the variables each family fills in)

Each family defines: **role** (who she is in that world), **material** (what she and her clothes are made of), **palette**, **rendering technique** (same face and proportions, different drawing method), **props**, **hair treatment**, **age cue**. Background is always transparent; scenes come from the app's own theme art.

## 5. Base look: Deep Space / Cyberpunk

- **Role:** Trinity as herself, the AI of the knowledge console.
- **Material:** holographic lattice. Her body and clothing are built from fine light grids and data lines.
- **Palette:** amber `#F2B84B`, cyan `#5CC8E0`, with touches of pink `#F07CA0` and violet `#B49BFF` on near-black.
- **Technique:** clean, glossy, glowing vector-style rendering.
- **Props (proposal):** a few floating data glyphs.
- **Hair (proposal):** shoulder-length strands of light.
- **Age cue:** ageless.

## 6. First set of theme families (all proposals to react to)

### Solarpunk
- **Role:** garden keeper and botanist-engineer.
- **Material:** woven plant fibers, glass and small solar-leaf details.
- **Palette:** sunlit gold, leaf green, sky blue, white.
- **Technique:** bright flat color with soft gradients and light cel shading.
- **Props:** a seedling in her hands, a glass tablet.
- **Hair:** a few living leaves or a small vine tucked in.
- **Age cue:** young adult.

### Steampunk
- **Role:** clockwork engineer and inventor.
- **Material:** brass, copper and leather. Goggles pushed up on her head.
- **Palette:** brass, copper, warm sepia, deep teal.
- **Technique:** engraved ink linework with etched hatching and warm color wash.
- **Props:** a gear, a compass, a glowing glass tube.
- **Hair:** shoulder-length, held with a brass clasp.
- **Age cue:** mid-twenties, practical and capable.

### Fairy / woodland fantasy
- **Role:** forest lorekeeper (a spirit of the wood who keeps its stories).
- **Material:** moss, petals, gossamer.
- **Palette:** moonlit blue-greens, moss, pale gold.
- **Technique:** soft watercolor with a fine ink outline.
- **Props:** a small lantern, drifting glow motes, a scroll.
- **Hair:** small blossoms woven in.
- **Age cue:** ageless.

### Gothic / dark academia
- **Role:** archivist-scholar in a candlelit library.
- **Material:** velvet, wool coat, lace collar.
- **Palette:** burgundy, ink blue, aged gold, candle amber.
- **Technique:** rich, painterly chiaroscuro that stays stylized (not photoreal), lit warmly so the mood is cozy, never menacing.
- **Props:** a candle, an open book, a quill.
- **Hair:** pinned up with a pen or pin, still shoulder-length.
- **Age cue:** mature (thirties), through clothing and posture.

## 7. Later families (leave room in the sheet)

- **Ocean / Atlantean:** tide-keeper. Pearl, coral and bioluminescence; glassy, translucent flowing rendering.
- **Zen / Japanese-inspired:** calm calligrapher or tea-house sage. Ink-wash look with sparse color and plenty of negative space. Keep it respectful and non-stereotyped.
- **Coffee Shop / Urban City:** a friendly patron at a mahogany table in a bright, warm day, with a cup of steaming coffee and a plate with a pastry (props on her cut-out). Casual cozy clothing, soft warm gouache-style rendering. The large window and busy street are not part of her art; they are the app's theme background.

## 8. Sizes and framing

- **Portrait:** head and shoulders, square. For the dock icon, small UI and the AI chat avatar. Eyes front and center.
- **Bust to waist:** for the chat panel. Room for gestures and props.
- **Full body hero:** for the intro and unlock screens.
- Always transparent in the app. Generate on a plain, flat, neutral gray background (not green, since her eyes can be green) and cut out afterward, or use the tool's transparent-background option if it has one.

## 9. Prompt blocks (paste into any generator)

**Master identity block (identical in every prompt):**

> Trinity, a warm, encouraging AI mentor. Stylized illustrated character, not photorealistic. Round, youthful face with simple, clean features. Calm, neutral expression with warm, gentle eyes. Large simple oval eyes with a bright luminous glowing core, [EYE COLOR]. Shoulder-length hair. Modest, appropriate clothing. Slight head tilt, attentive and kind. Plain flat neutral gray background, no scene.

**Theme block (swap per family):**

> [ROLE]. Made of [MATERIAL]. Palette: [PALETTE]. Rendering: [TECHNIQUE]. Props: [PROPS]. Hair: [HAIR TREATMENT]. [AGE CUE].

**Framing block (swap per size):**

> Head-and-shoulders portrait, square, eyes centered. / Bust-to-waist, 3:4. / Full-body standing pose, tall vertical.

**Negative block (identical in every prompt):**

> no revealing or sexualized clothing, no cold or robotic look, no menacing or dark mood, no photorealism, no uncanny face, no text, no watermark, no background scene

**Example, assembled for the base look (portrait):**

> Trinity, a warm, encouraging AI mentor. Stylized illustrated character, not photorealistic. Round, youthful face with simple, clean features. Calm, neutral expression with warm, gentle eyes. Large simple oval eyes with a bright luminous glowing core, cyan. Shoulder-length hair. Modest, appropriate clothing. Slight head tilt, attentive and kind. Plain flat neutral gray background, no scene. The AI of a knowledge console, made of a holographic lattice of fine light grids and data lines. Palette: amber and cyan with touches of pink and violet on near-black. Rendering: clean, glossy, glowing vector-style. Props: a few floating data glyphs. Hair: shoulder-length strands of light. Ageless. Head-and-shoulders portrait, square, eyes centered.

## 10. Workflow and consistency checklist

1. Generate the base portrait until one image feels like Trinity. Mark it the **canonical reference**.
2. For each family, feed the canonical reference into the tool's character/reference-image feature and keep the identity and negative blocks word for word.
3. Make the three eye-color versions by recoloring one approved image.
4. Check every result against this list: oval eyes with a bright core, round youthful face, shoulder-length hair, calm neutral expression with warm eyes, modest clothing, transparent-ready background.

## 11. Open decisions

- Hair color and skin tone / complexion (constant or per theme).
- Exact eye colors and drift speed.
- Whether she needs a small icon-sized mark in addition to her eyes.
- Final role for each family (the roles above are proposals).
