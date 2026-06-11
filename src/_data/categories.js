// Work categories. Order here drives the Work index + category numbering.
module.exports = [
  {
    slug: "flyer",
    number: "01",
    name: "Flyer",
    descriptor: "Graphic / Art Direction",
    headStyle: `
  .faces { display: grid; gap: 14px clamp(14px, 2vw, 26px); margin-bottom: 26px; grid-template-columns: 1fr 1fr; max-width: 760px; }
  .faces.faces-stack { grid-template-columns: 1fr; max-width: 720px; }
  .face { margin: 0; }
  .face .media { aspect-ratio: auto; }
  .face .media img { height: auto; }
  .face figcaption { font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--sub); margin-top: 11px; display: flex; align-items: center; gap: 9px; }
  .face figcaption::before { content: ''; width: 18px; height: 2px; background: var(--accent); }
  @media (max-width: 520px) { .faces { grid-template-columns: 1fr; max-width: 360px; } }`,
  },
  {
    slug: "shop-card",
    number: "02",
    name: "Shop Card",
    descriptor: "Graphic / Branding",
    headStyle: `
  .faces { display: grid; gap: 14px clamp(14px, 2vw, 26px); margin-bottom: 26px; }
  .faces-port { grid-template-columns: 1fr 1fr; max-width: 480px; }
  .faces-land { grid-template-columns: 1fr; max-width: 380px; }
  .face { margin: 0; }
  .face .media { aspect-ratio: auto; }
  .face .media img { height: auto; }
  .face .media.hov:hover img { transform: none; }
  .face figcaption { font-family: var(--mono); font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--sub); margin-top: 11px; display: flex; align-items: center; gap: 9px; }
  .face figcaption::before { content: ''; width: 18px; height: 2px; background: var(--accent); }
  @media (max-width: 520px) { .faces-port { grid-template-columns: 1fr; max-width: 300px; } }`,
  },
  {
    slug: "logo",
    number: "03",
    name: "Logo",
    descriptor: "Brand Mark",
    headStyle: `
  .logo-stage { aspect-ratio: 4 / 3; background: #14130f; display: grid; place-items: center; overflow: hidden; position: relative; }
  .logo-stage.light { background: #ffffff; }
  .logo-img { width: 74%; height: 74%; object-fit: contain; display: block; }
  .logo-stage .logo-img { transform: translateY(-16%); }
  .logo-img.inv { filter: invert(1); }
  .nu-mark { display: flex; align-items: flex-end; gap: 0; line-height: 0.8; }
  .nu-mark .glyph { font-family: var(--serif); font-weight: 300; font-size: clamp(90px, 16vw, 200px); color: var(--bg); letter-spacing: -0.04em; }
  .logo-stage.light .nu-mark .glyph { color: var(--text); }
  .nu-line { width: clamp(120px, 22vw, 260px); height: 2px; background: var(--accent); margin-top: 22px; }
  .logo-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: clamp(20px,3vw,40px); }
  .logo-detail { display: grid; grid-template-rows: 1fr 1fr; gap: clamp(20px,3vw,40px); }
  .logo-chip { background: var(--bg-deep); display: grid; place-items: center; aspect-ratio: 1/1; position: relative; }
  .logo-chip.light-chip { background: #ffffff; }
  .logo-chip.dark-chip { background: #14130f; }
  .logo-chip .small { font-family: var(--serif); font-weight: 300; font-size: clamp(40px,7vw,76px); letter-spacing: -0.04em; }
  .logo-chip .cap { position: absolute; left: 14px; bottom: 12px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.14em; color: var(--sub); text-transform: uppercase; }
  .logo-chip.dark-chip .cap { color: #9a948c; }
  @media (max-width: 860px) { .logo-grid { grid-template-columns: 1fr; } .logo-detail { grid-template-rows: none; grid-template-columns: 1fr 1fr; } }`,
  },
  {
    slug: "banner",
    number: "04",
    name: "Banner",
    descriptor: "Web / EC",
    headStyle: `
  .banner-stack { display: grid; gap: 16px; margin-bottom: 26px; }
  .banner-stack .media { aspect-ratio: auto; }
  .banner-stack .media img { aspect-ratio: 1280 / 670; }`,
  },
  {
    slug: "sns",
    number: "05",
    name: "SNS",
    descriptor: "Social / Direction",
    headStyle: `
  .sns-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(32px, 5vw, 72px); align-items: start; }
  .sns-grid .media { aspect-ratio: 454 / 872; max-width: 420px; }
  @media (max-width: 860px) { .sns-grid { grid-template-columns: 1fr; } }`,
  },
];
