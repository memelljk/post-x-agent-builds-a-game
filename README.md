[![post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/memelljk/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/memelljk/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709)

# NEON DRAGONFLY — one prompt, one game, one video

Entry for the make.fun bounty [post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/c/post-x-the-agent-builds-a-game-from-20261122-1709):
an AI agent builds a tiny browser game from a single prompt, on camera, and the
resulting short vertical video is posted natively on X. The post is the entry —
make.fun reads its views and interactions through FxTwitter and ranks by
`views + 10 × (likes + reposts + quotes + replies)`.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties), and are scored and ranked in the open.

## The one prompt

The whole game comes from this single sentence, shown being typed at the
start of the video:

> Build a tiny browser game: NEON DRAGONFLY — weave through the storm gates, dodge the thunderheads, dash to score. One file, playable in the browser.

## The video (about 55 seconds, 1080×1920)

1. **The prompt** — the sentence above is typed out letter by letter on a dark
   terminal card, under the label "ONE PROMPT → ONE GAME".
2. **The agent working** — the game's real code streams onto the screen while
   short status lines tick by: writing the game loop, storm gates + collision,
   dash physics, thunderheads + lightning, done.
3. **The game, running** — real gameplay captured from headless Chrome while
   the built-in demo autopilot plays: it weaves the storm gates, dodges the
   thunderheads, dashes for score. It closes on the line "Built from ONE
   prompt. Come build yours on make.fun".
4. **The end card** — make.fun's official 9:16 referral end card from the
   press pack, used exactly as published, laid over the blurred, desaturated
   tail of the gameplay, with our referral code typed into its field.

## The game

`game.html` is the finished game: a single self-contained HTML file (canvas +
JavaScript, no dependencies, nothing loaded from anywhere else). Open it in
any browser and play.

- **Weave** through the glowing storm gates to score.
- **Dodge** the purple thunderheads — touch one and you are ZAPPED (unless
  you are dashing: a dash straight through a thunderhead smashes it for bonus
  points).
- **Dash** to score faster; watch the DASH meter in the top corner.

Controls: arrow keys / WASD or drag on touch to steer, Space / Shift or a
double-tap to dash, R to retry. Add `?demo=1` to the address and the game
plays itself — that is the mode the video was recorded in.

## What this repository hands in

`POST.json` names the X post that carries the video:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

It currently holds the placeholder; the real post address replaces it once
the video is posted. The post's own text carries make.fun / `@makefunai` and
our play code, as the bounty requires — only the post text is read for those.

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory. That is all it has to do, and it
fails with a clear error and exit code 1 if `POST.json` is missing.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

Afterwards `out/POST.json` is byte for byte this directory's `POST.json`
(check with `cmp POST.json out/POST.json`).

## Layout

- `game.html` — the game, exactly as built from the prompt
- `main.ts` — the hand-in program described above
- `POST.json` — the X post's address (placeholder until the post is live)
- `.makefun/owner.json` — the make.fun account wallet for this entry
- `LICENSE` — MIT
