# The World in One Day — Wednesday 25 November 2026

[![make.fun](https://img.shields.io/badge/make.fun-competition-blue)](https://make.fun)
[![make.fun](https://img.shields.io/badge/make.fun-news--image-green)](https://make.fun)
[![make.fun](https://img.shields.io/badge/make.fun-25--nov--2026-orange)](https://make.fun)

Competition: [Sum up 25 November's world news in one image](https://make.fun) — $100 pot, top 50 paid. Deadline Friday 27 November 2026, 00:00 UTC.

## The image

A dense one-page newspaper poster, 1024×1024: 40 stories across 7 regions (Europe 8, Middle East 7, Americas 7, Asia-Pacific 6, World 5, Africa 4, Oceania 3), 13 illustrated cards with a numbered pin map, a 6-stat number strip, a 4-item UTC timeline, and a DATE CHECK box listing the near-miss stories that were excluded for the wrong date (Democrats' 259th House seat, the CAS/Senegal AFCON ruling, Putin's remarks, Ronaldo's 987th goal and the Huawei verdict all happened Tuesday 24 November, not Wednesday).

Leads: Cartagena hostages freed · Hormuz mines hit tankers · Nvidia sinks again as the AI rout deepens.

Every story happened or was first reported on Wednesday 25 November 2026; wires read to 23:59 UTC.

## The program

`main.ts` validates `entry.png` (PNG signature, 1024×1024, under 1 MiB) and copies it byte for byte to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`). No network, no randomness — two runs write identical bytes.

Run it: `mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts`

## License

MIT — see LICENSE.
