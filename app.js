(function () {
  var c = window.LINKPAGE || {};
  var ICON_CDN = "https://cdn.jsdelivr.net/npm/simple-icons@13/icons/";
  // Generic icons that aren't brands
  var svg = function (d) {
    return "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + "</svg>");
  };
  var BUILT_IN = {
    email: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
    link: svg('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    phone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
    website: svg('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>'),
    calendar: svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
    cart: svg('<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/>'),
    heart: svg('<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/>'),
  };
  var $ = function (id) { return document.getElementById(id); };

  document.documentElement.dataset.theme = c.theme || "midnight";
  document.documentElement.dataset.buttons = c.buttonStyle || "rounded";
  if (c.animate !== false) document.body.classList.add("animate");

  // Profile + SEO
  document.title = c.name ? c.name + " | Links" : "Links";
  setMeta('meta[name="description"]', c.bio);
  setMeta('meta[property="og:title"]', document.title);
  setMeta('meta[property="og:description"]', c.bio);

  var avatar = $("avatar");
  if (c.avatar) { avatar.src = c.avatar; avatar.alt = c.name || ""; }
  else avatar.remove();

  $("name").textContent = c.name || "";
  if (c.verified) {
    var badge = document.createElement("span");
    badge.className = "verified";
    badge.title = "Verified";
    badge.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1l2.6 2.1 3.3-.4 1.2 3.1 3.1 1.2-.4 3.3L23 12l-2.1 2.6.4 3.3-3.1 1.2-1.2 3.1-3.3-.4L12 23l-2.6-2.1-3.3.4-1.2-3.1-3.1-1.2.4-3.3L1 12l2.1-2.6-.4-3.3 3.1-1.2 1.2-3.1 3.3.4z"/><path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="var(--verified-check)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    $("name").appendChild(badge);
  }
  $("bio").textContent = c.bio || "";

  // Links
  var links = $("links");
  (c.links || []).forEach(function (l, i) {
    var a = document.createElement("a");
    a.className = "link" + (l.featured ? " featured" : "");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.style.setProperty("--i", i);
    if (l.icon) a.appendChild(icon(l.icon));
    var span = document.createElement("span");
    span.textContent = l.title;
    a.appendChild(span);
    a.addEventListener("click", function () { track(l.title); });
    links.appendChild(a);
  });

  // Socials
  var socials = $("socials");
  (c.socials || []).forEach(function (s) {
    var a = document.createElement("a");
    a.href = s.url;
    a.target = s.url.indexOf("mailto:") === 0 ? "_self" : "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", s.label || s.icon);
    a.appendChild(icon(s.icon));
    a.addEventListener("click", function () { track(s.label || s.icon); });
    socials.appendChild(a);
  });

  $("footer").textContent = c.footer || "";

  // Optional Google Analytics
  if (c.analyticsId) {
    var g = document.createElement("script");
    g.async = true;
    g.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(c.analyticsId);
    document.head.appendChild(g);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", c.analyticsId);
  }

  function icon(name) {
    var i = document.createElement("i");
    i.className = "icon";
    var src = BUILT_IN[name] || ICON_CDN + encodeURIComponent(name) + ".svg";
    var url = 'url("' + src + '")';
    i.style.webkitMaskImage = url;
    i.style.maskImage = url;
    return i;
  }
  function track(label) {
    if (window.gtag) gtag("event", "link_click", { link_label: label });
  }
  function setMeta(sel, val) {
    var m = document.querySelector(sel);
    if (m && val) m.setAttribute("content", val.replace(/\n/g, " "));
  }
})();
