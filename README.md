# Before You Book That Surgery™

The patient's side of the table. Free, private tools that help a patient see what can be checked, what still needs asking and what they actually want, before any deposit. Paid for by patients, never by surgeons.

**Live:** https://beforeyoubookthatsurgery.com · short link: https://bybts.com

## What's here
| File | Page |
|---|---|
| `index.html` | Home: founder story, method, Signal Check, quiz, Independence Pledge, library |
| `light-map.html` | The Light Map™: nine public-record areas → Advance, Hold or Halt → consult sheet |
| `path.html` | My Path: your why → before the deposit → permission to decide → surgery day → recovery → cleared |
| `how-to-use.html` | Guided tutorial for patients and companions |
| `privacy.html` | Independence & privacy, consumer health data policy |
| `GuideRail.dc.html`, `support.js`, `_ds/` | Shared page runtime and design system |
| `assets/` | Photos (warm architecture, no people) and founder portrait |
| `_redirects`, `_headers`, `robots.txt`, `sitemap.xml`, `llms.txt` | Cloudflare config, search and AI-engine discovery |

## How it's built
A static site with no build step, no database and no logins. Hosted on Cloudflare Pages. Every push to `main` deploys to production within about a minute.

## Privacy by design
Patient answers stay in the visitor's own browser and are never sent to us. Analytics are cookieless (Plausible). The only data that can reach us is an opt-in, anonymous share with no name, email or IP address.

## Rules for anyone changing this repository
- Edit the source design files first; these are the exported pages.
- Never commit passwords, API keys, endpoint URLs or any patient data.
- Every commit message says what changed and why. This history is the public record of corrections.
- Brand, voice and compliance rules: see the BYBTS-OPERATIONS folder (01.1 Brand Bible, 01.3 Do's and Don'ts, 01.5 American Word Bank).

## Scope
This site informs. Your surgeon treats. We don't diagnose, assess candidacy, or recommend procedures, surgeons or clinics, and we take no referral fees. In an emergency, call 911.

© 2026 Jasmine Louis Marrero. Before You Book That Surgery™, The Light Map™ and The Permission Call™ are trademarks. All rights reserved.
