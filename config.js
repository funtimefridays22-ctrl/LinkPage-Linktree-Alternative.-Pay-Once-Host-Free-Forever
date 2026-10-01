/* ============================================================
   LINKPAGE — EDIT THIS FILE ONLY
   Change the text between the quotes, save, and you're done.
   ============================================================ */

window.LINKPAGE = {

  // ---- Your profile ----
  name: "Alex Rivera",
  bio: "Designer, creator & coffee enthusiast ☕\nNew videos every Friday.",
  avatar: "avatar.svg",            // put your photo in this folder and type its filename, e.g. "me.jpg"
  verified: true,                  // shows a little checkmark next to your name

  // ---- Look & feel ----
  // Themes: "midnight", "sunset", "ocean", "forest", "candy", "paper", "mono", "aurora"
  theme: "aurora",
  buttonStyle: "rounded",          // "rounded", "pill", or "square"
  animate: true,                   // fade-in animation on load

  // ---- Main link buttons (as many as you want) ----
  // icon = any brand from https://simpleicons.org (lowercase, no spaces, e.g. "youtube", "onlyfans", "patreon")
  //        or a built-in: "email", "link", "phone", "website", "calendar", "cart", "heart"
  //        or leave it out for no icon
  // featured: true makes a button stand out and gently pulse
  links: [
    { title: "🔥 My new course — 50% off this week", url: "https://example.com/course", featured: true },
    { title: "Watch my latest video",   url: "https://youtube.com/@yourname", icon: "youtube" },
    { title: "Shop my merch",           url: "https://example.com/shop",      icon: "shopify" },
    { title: "Listen on Spotify",       url: "https://open.spotify.com",      icon: "spotify" },
    { title: "Join my Discord",         url: "https://discord.gg/example",    icon: "discord" },
    { title: "Book a 1:1 call",         url: "https://calendly.com/yourname", icon: "calendar" },
  ],

  // ---- Small social icons at the bottom ----
  socials: [
    { icon: "instagram", url: "https://instagram.com/yourname" },
    { icon: "tiktok",    url: "https://tiktok.com/@yourname" },
    { icon: "x",         url: "https://x.com/yourname" },
    { icon: "youtube",   url: "https://youtube.com/@yourname" },
    { icon: "github",    url: "https://github.com/yourname" },
    { icon: "email",     url: "mailto:you@example.com", label: "Email" },
  ],

  // ---- Footer ----
  footer: "© 2026 Alex Rivera",

  // ---- Optional: Google Analytics 4 ID, e.g. "G-XXXXXXXXXX" (leave "" to disable) ----
  analyticsId: "",
};
