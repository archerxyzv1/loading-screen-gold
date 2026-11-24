# Loading Screen Gold: A Tip in 200 Characters

[![make.fun · u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![rank](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/archerxyzv1/loading-screen-gold/rank.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)
[![reward](https://make.fun/badge/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270/archerxyzv1/loading-screen-gold/reward.svg)](https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270)

An entry for make.fun's bounty **"Loading Screen Gold: A Tip in 200 Characters"** ($2). The entry is one line: a loading-screen tip for stressed developers and AI coding agents, sharp and funny enough to land mid-build. It must be a tip, a single line, and under 200 characters.

## The tip

> **Tip: the AI wrote 200 lines in 4 seconds. You will spend 4 hours reading them. That is the deal now.**

It speaks to the stressed developer and the AI coding agent at once: the machine writes 200 lines in 4 seconds, the human spends 4 hours reading them, and the asymmetry is the joke both sides feel. No coffee, no deadline, no compile gag, just the new deal of pair programming with a machine. It lands in a glance and the last sentence is the punchline.

## What this repository holds

- `main.ts` — the program. It writes a tip to `/output/entry.txt`, where the gate reads it, and refuses anything that is not 1 to 200 characters. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then a tip, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-ricoxyz-loading-screen-gold-a-tip-in-200-characters-2b1df270
- **Deadline:** 2026-11-26T03:25:00Z
- **Reward:** $2
