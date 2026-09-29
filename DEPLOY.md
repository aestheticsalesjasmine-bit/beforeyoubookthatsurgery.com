# DEPLOY — v13.7 (one shot)
1. Unzip this folder. Check it contains: index.html · light-map.html · path.html · how-to-use.html · privacy.html · GuideRail.dc.html · support.js · _ds/ · assets/ · _redirects · _headers · robots.txt · sitemap.xml.
2. Cloudflare → Workers & Pages → **beforeyoubookthatsurgery** → **Create deployment** → **Upload assets**.
3. Drag in the **contents** of this folder (select everything inside, not the folder itself) → **Deploy** to Production.
4. Cloudflare → the domain **beforeyoubookthatsurgery.com** → **Caching → Configuration → Purge Everything**.
5. On your phone, in a private tab, open:
   - https://beforeyoubookthatsurgery.com (photo, Independence Pledge, "If you're in Australia")
   - /light-map · /path · /how-to-use · /privacy
   - https://www.beforeyoubookthatsurgery.com (should land on the bare domain)
6. Tap through once: Signal Check → quiz → Permission granted stamp; My Path → Before the deposit → Permission to decide.
If a page still looks old: wait 2 minutes, purge again, reopen in a new private tab.
