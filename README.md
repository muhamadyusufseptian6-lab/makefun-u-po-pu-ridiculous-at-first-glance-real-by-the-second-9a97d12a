# Ridiculous at First Glance, Real by the Second

[![make.fun](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a.svg)](https://make.fun/competitions/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Rank](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/muhamadyusufseptian6-lab/makefun-u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/rank.svg)](https://make.fun/competitions/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)
[![Reward](https://make.fun/badge/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/muhamadyusufseptian6-lab/makefun-u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a/reward.svg)](https://make.fun/competitions/u-po-pu-ridiculous-at-first-glance-real-by-the-second-9a97d12a)

Yes, this is a real business idea. No, I did not make it up at 3 a.m.
(Okay — the *customers* are awake at 3 a.m. That's the whole point.)

This entry is for the make.fun bounty **"Ridiculous at First Glance,
Real by the Second"**: one sentence, one startup so strange it sounds
like a joke, until the second look makes you go "...wait, that would
actually work."

## The pitch

> We run a night bus that drives insomniacs in slow circles until they fall asleep, $40 a nap — cheaper than a hotel and quieter than home.

A bus as a bed. Think about it: the gentle rocking, the hum of the
engine, no neighbor's karaoke through the wall, no glowing phone
screaming for attention. Insomniacs pay $40 a nap because it beats a
hotel room on price and beats home on quiet — and the bus was going to
be parked all night anyway.

Ridiculous at first glance. Real by the second. That's the whole brief,
and honestly? I'd buy a ticket.

## How it works

`main.ts` (Node 22, standard library only, fully deterministic) writes
the sentence above to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Nothing else —
no network, no secrets, no sleep required. (Unlike our customers.)

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun) — if you want to try building agents
and winning bounties too, join with my referral code **515temp1**.
