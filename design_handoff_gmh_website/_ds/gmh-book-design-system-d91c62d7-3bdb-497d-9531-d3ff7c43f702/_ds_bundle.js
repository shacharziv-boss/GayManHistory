/* @ds-bundle: {"format":4,"namespace":"GMHBookDesignSystem_d91c62","components":[{"name":"CoverBlock","sourcePath":"components/editorial/spreads/CoverBlock.jsx"},{"name":"DecadeDivider","sourcePath":"components/editorial/spreads/DecadeDivider.jsx"},{"name":"PhotoCaption","sourcePath":"components/editorial/spreads/PhotoCaption.jsx"},{"name":"DropCapParagraph","sourcePath":"components/editorial/text/DropCapParagraph.jsx"},{"name":"PullQuote","sourcePath":"components/editorial/text/PullQuote.jsx"},{"name":"EraTag","sourcePath":"components/editorial/wayfinding/EraTag.jsx"},{"name":"Folio","sourcePath":"components/editorial/wayfinding/Folio.jsx"},{"name":"SectionRule","sourcePath":"components/editorial/wayfinding/SectionRule.jsx"}],"sourceHashes":{"components/editorial/spreads/CoverBlock.jsx":"78908d5f7cf1","components/editorial/spreads/DecadeDivider.jsx":"6aac19398130","components/editorial/spreads/PhotoCaption.jsx":"83ec413d99fc","components/editorial/text/DropCapParagraph.jsx":"718af56f1dae","components/editorial/text/PullQuote.jsx":"6a2b267ce76d","components/editorial/wayfinding/EraTag.jsx":"f1c4093f26e5","components/editorial/wayfinding/Folio.jsx":"9e63509d4f16","components/editorial/wayfinding/SectionRule.jsx":"1c4a96971b9f","ui_kits/book/BookKit.jsx":"75cf693c9036"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GMHBookDesignSystem_d91c62 = window.GMHBookDesignSystem_d91c62 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/editorial/spreads/CoverBlock.jsx
try { (() => {
const SURFACE_VAR = {
  white: 'var(--surface-white)',
  black: 'var(--surface-black)',
  magenta: 'var(--surface-magenta)',
  red: 'var(--surface-red)',
  blue: 'var(--surface-blue)'
};
function textColorFor(surface) {
  return surface === 'white' ? 'var(--text-on-light)' : 'var(--text-on-dark)';
}
function muted(surface) {
  return surface === 'white' ? 'var(--text-on-light-muted)' : 'var(--text-on-dark-muted)';
}
function CoverBlock({
  title,
  subtitle,
  author,
  surface = 'magenta'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: SURFACE_VAR[surface] || SURFACE_VAR.magenta,
      color: textColorFor(surface),
      padding: 'var(--space-8) var(--page-margin)',
      boxSizing: 'border-box',
      minHeight: 420,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-body-bold) var(--size-label)/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, "GMH"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-display) var(--size-display-xl)/var(--leading-display-tight) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      font: 'var(--weight-body-regular) var(--size-body-lg)/1.4 var(--font-body)',
      maxWidth: '32ch',
      color: muted(surface)
    }
  }, subtitle)), author && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-body-bold) var(--size-label)/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)'
    }
  }, author));
}
Object.assign(__ds_scope, { CoverBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/spreads/CoverBlock.jsx", error: String((e && e.message) || e) }); }

// components/editorial/spreads/DecadeDivider.jsx
try { (() => {
const SURFACE_VAR = {
  black: 'var(--surface-black)',
  magenta: 'var(--surface-magenta)',
  red: 'var(--surface-red)',
  blue: 'var(--surface-blue)'
};
function DecadeDivider({
  decade,
  title,
  eyebrow,
  surface = 'black'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: SURFACE_VAR[surface] || SURFACE_VAR.black,
      color: 'var(--text-on-dark)',
      padding: 'var(--page-margin) var(--page-margin)',
      boxSizing: 'border-box',
      minHeight: 360,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-body-bold) var(--size-label)/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-on-dark-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-display) var(--size-display-2xl)/var(--leading-display-tight) var(--font-display)',
      textTransform: 'uppercase'
    }
  }, decade), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-display) var(--size-display-md)/1.05 var(--font-display)',
      textTransform: 'uppercase',
      marginTop: 'var(--space-4)',
      opacity: 0.92
    }
  }, title)));
}
Object.assign(__ds_scope, { DecadeDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/spreads/DecadeDivider.jsx", error: String((e && e.message) || e) }); }

// components/editorial/spreads/PhotoCaption.jsx
try { (() => {
function PhotoCaption({
  src,
  alt = '',
  caption,
  credit
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: 'block',
      width: '100%',
      height: 'auto',
      objectFit: 'cover'
    }
  }), (caption || credit) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      marginTop: 'var(--space-2)',
      font: 'var(--weight-body-medium) var(--size-caption)/1.4 var(--font-body)',
      color: 'var(--text-on-light-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, caption), credit && /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caption)',
      whiteSpace: 'nowrap'
    }
  }, credit)));
}
Object.assign(__ds_scope, { PhotoCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/spreads/PhotoCaption.jsx", error: String((e && e.message) || e) }); }

// components/editorial/text/DropCapParagraph.jsx
try { (() => {
function DropCapParagraph({
  text,
  surface = 'white'
}) {
  const isWhite = surface === 'white';
  const color = isWhite ? 'var(--text-on-light)' : 'var(--text-on-dark)';
  return /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-body-regular) var(--size-body-lg)/var(--leading-body) var(--font-body)',
      color,
      margin: 0,
      maxWidth: '58ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      float: 'left',
      font: 'var(--weight-display) 4.2rem/0.82 var(--font-display)',
      padding: '4px 8px 0 0'
    }
  }, text.charAt(0)), text.slice(1));
}
Object.assign(__ds_scope, { DropCapParagraph });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/text/DropCapParagraph.jsx", error: String((e && e.message) || e) }); }

// components/editorial/text/PullQuote.jsx
try { (() => {
const SURFACE_VAR = {
  white: 'var(--surface-white)',
  black: 'var(--surface-black)',
  magenta: 'var(--surface-magenta)',
  red: 'var(--surface-red)',
  blue: 'var(--surface-blue)'
};
function textColorFor(surface) {
  return surface === 'white' ? 'var(--text-on-light)' : 'var(--text-on-dark)';
}
function muted(surface) {
  return surface === 'white' ? 'var(--text-on-light-muted)' : 'var(--text-on-dark-muted)';
}
function PullQuote({
  quote,
  attribution,
  surface = 'magenta'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: SURFACE_VAR[surface] || SURFACE_VAR.magenta,
      color: textColorFor(surface),
      padding: 'var(--space-7) var(--page-margin)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--weight-display) var(--size-display-md)/var(--leading-display) var(--font-display)',
      margin: 0,
      maxWidth: '18ch'
    }
  }, "\u201C", quote, "\u201D"), attribution && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      font: 'var(--weight-body-bold) var(--size-label)/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: muted(surface)
    }
  }, "\u2014 ", attribution));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/text/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/editorial/wayfinding/EraTag.jsx
try { (() => {
const SURFACE_VAR = {
  white: 'var(--surface-white)',
  black: 'var(--surface-black)',
  magenta: 'var(--surface-magenta)',
  red: 'var(--surface-red)',
  blue: 'var(--surface-blue)'
};
function textColorFor(surface) {
  return surface === 'white' ? 'var(--text-on-light)' : 'var(--text-on-dark)';
}
function EraTag({
  label,
  surface = 'black',
  inline = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: inline ? 'inline-flex' : 'flex',
      alignItems: 'center',
      gap: 8,
      background: SURFACE_VAR[surface] || SURFACE_VAR.black,
      color: textColorFor(surface),
      font: 'var(--weight-body-bold) var(--size-label)/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      padding: '8px 12px',
      borderRadius: 'var(--radius-tag)',
      width: inline ? 'auto' : 'fit-content'
    }
  }, label);
}
Object.assign(__ds_scope, { EraTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/wayfinding/EraTag.jsx", error: String((e && e.message) || e) }); }

// components/editorial/wayfinding/Folio.jsx
try { (() => {
function textColorFor(surface) {
  return surface === 'white' ? 'var(--text-on-light)' : 'var(--text-on-dark)';
}
function mutedColorFor(surface) {
  return surface === 'white' ? 'var(--text-on-light-faint)' : 'var(--text-on-dark-faint)';
}
function Folio({
  sectionLabel,
  pageNumber,
  surface = 'white'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      font: 'var(--weight-body-bold) var(--size-label)/1 var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: mutedColorFor(surface)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: textColorFor(surface),
      opacity: 0.75
    }
  }, sectionLabel), /*#__PURE__*/React.createElement("span", null, String(pageNumber).padStart(3, '0')));
}
Object.assign(__ds_scope, { Folio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/wayfinding/Folio.jsx", error: String((e && e.message) || e) }); }

// components/editorial/wayfinding/SectionRule.jsx
try { (() => {
function SectionRule({
  weight = 'hairline',
  surface = 'white'
}) {
  const isBold = weight === 'bold';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: isBold ? 'var(--rule-weight-bold)' : 'var(--rule-weight)',
      width: '100%',
      background: surface === 'white' ? isBold ? 'var(--surface-black)' : 'var(--hairline-on-light)' : isBold ? 'var(--surface-white)' : 'var(--hairline-on-dark)'
    }
  });
}
Object.assign(__ds_scope, { SectionRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/wayfinding/SectionRule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/book/BookKit.jsx
try { (() => {
const {
  CoverBlock,
  DecadeDivider,
  PullQuote,
  DropCapParagraph,
  PhotoCaption,
  EraTag,
  Folio,
  SectionRule
} = window.GMHBookDesignSystem_d91c62;
const FRAME_W = 860;
const FRAME_H = 560;
function TextSpread({
  era,
  page,
  title,
  text,
  surface = 'white'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: `var(--surface-${surface})`,
      height: '100%',
      boxSizing: 'border-box',
      padding: '40px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(EraTag, {
    label: era,
    surface: surface,
    inline: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--weight-display) var(--size-display-lg)/1.05 var(--font-display)',
      textTransform: 'uppercase',
      color: 'var(--text-on-light)',
      marginBottom: 20,
      maxWidth: '18ch'
    }
  }, title), /*#__PURE__*/React.createElement(DropCapParagraph, {
    text: text,
    surface: surface
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionRule, {
    weight: "hairline",
    surface: surface
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Folio, {
    sectionLabel: title,
    pageNumber: page,
    surface: surface
  }))));
}
function PhotoSpread({
  src,
  caption,
  credit,
  era,
  page
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-white)',
      height: '100%',
      boxSizing: 'border-box',
      padding: '40px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("style", null, `.ph-frame-${page} { height: 100%; display: flex; flex-direction: column; } .ph-frame-${page} figure { flex: 1; min-height: 0; display: flex; flex-direction: column; } .ph-frame-${page} img { flex: 1; min-height: 0; height: 100% !important; object-fit: cover !important; width: 100% !important; display: block !important; }`), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(EraTag, {
    label: era,
    surface: "white",
    inline: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `ph-frame-${page}`,
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(PhotoCaption, {
    src: src,
    caption: caption,
    credit: credit
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionRule, {
    weight: "hairline",
    surface: "white"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(Folio, {
    sectionLabel: caption,
    pageNumber: page,
    surface: "white"
  }))));
}
const PAGES = [() => /*#__PURE__*/React.createElement(CoverBlock, {
  title: "New York",
  subtitle: "Gay men's culture, in Harlem and Manhattan, 1900\u20132000",
  author: "GMH",
  surface: "magenta"
}), () => /*#__PURE__*/React.createElement(DecadeDivider, {
  eyebrow: "NYC \u2014 Chapter 01",
  decade: "1900",
  title: "Nightlife Flourishes With Gay Men",
  surface: "black"
}), () => /*#__PURE__*/React.createElement(TextSpread, {
  era: "NYC \u2014 1900\u20131940",
  page: 12,
  title: "Harlem & the Village",
  text: "New York City, especially Harlem, was very important in shaping gay men's culture from 1900 to 1940. The Harlem Renaissance was a time of incredible artistic output by Black artists, allowing for the exploration of different sexualities and gender identities. Writers like Claude McKay included same-sex desire in their work, and blues singers like Bessie Smith and Ma Rainey sang about same-sex love and gender fluidity."
}), () => /*#__PURE__*/React.createElement(PhotoSpread, {
  src: "../../assets/imagery/archive-01-writer-1940s.png",
  caption: "A writer at his desk above Greenwich Village, mid-century.",
  credit: "GMH Archive",
  era: "NYC \u2014 1940\u20131960",
  page: 13
}), () => /*#__PURE__*/React.createElement(PullQuote, {
  quote: "Their love, though beautiful, was not without danger.",
  attribution: "Moved Beyond Words \u2014 New York, 1948",
  surface: "red"
}), () => /*#__PURE__*/React.createElement(PhotoSpread, {
  src: "../../assets/imagery/archive-03-studio-1948.png",
  caption: "Two painters before an unfinished portrait, Greenwich Village studio, 1948.",
  credit: "GMH Archive",
  era: "NYC \u2014 1940\u20131960",
  page: 14
}), () => /*#__PURE__*/React.createElement(DecadeDivider, {
  eyebrow: "NYC \u2014 Chapter 04",
  decade: "1980",
  title: "Crisis, Activism & Revival",
  surface: "blue"
}), () => /*#__PURE__*/React.createElement(TextSpread, {
  era: "NYC \u2014 1980\u20132000",
  page: 84,
  title: "ACT UP & GMHC",
  text: "The AIDS epidemic hit the gay community hard, especially in Manhattan and Harlem. The crisis spurred activism, with groups like ACT UP and the Gay Men's Health Crisis advocating for medical research and policy change. By the mid-1990s, new treatments stabilized the community, and Harlem experienced a cultural revival that embraced its heritage."
}), () => /*#__PURE__*/React.createElement(PhotoSpread, {
  src: "../../assets/imagery/archive-06-family-pride.png",
  caption: "A family at a Pride celebration, downtown Manhattan.",
  credit: "GMH Archive",
  era: "NYC \u2014 1999",
  page: 110
}), () => /*#__PURE__*/React.createElement(PullQuote, {
  quote: "A love story, set against a city that never sleeps.",
  attribution: "Two Lovers Together \u2014 New York, 1999",
  surface: "magenta"
})];
function App() {
  const [i, setI] = React.useState(0);
  const go = React.useCallback(d => setI(v => Math.max(0, Math.min(PAGES.length - 1, v + d))), []);
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);
  const Page = PAGES[i];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: FRAME_W,
      height: FRAME_H,
      maxWidth: '92vw',
      maxHeight: '78vh',
      overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(0,0,0,0.5)'
    }
  }, /*#__PURE__*/React.createElement(Page, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go(-1),
    disabled: i === 0,
    style: navBtnStyle(i === 0)
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--weight-body-bold) var(--size-label)/1 var(--font-body)',
      letterSpacing: 'var(--tracking-label)',
      color: '#fff',
      opacity: 0.7
    }
  }, String(i + 1).padStart(2, '0'), " / ", String(PAGES.length).padStart(2, '0')), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(1),
    disabled: i === PAGES.length - 1,
    style: navBtnStyle(i === PAGES.length - 1)
  }, "\u2192")));
}
function navBtnStyle(disabled) {
  return {
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.3)',
    background: 'transparent',
    color: '#fff',
    font: '400 20px/1 var(--font-body)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.3 : 1
  };
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/book/BookKit.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CoverBlock = __ds_scope.CoverBlock;

__ds_ns.DecadeDivider = __ds_scope.DecadeDivider;

__ds_ns.PhotoCaption = __ds_scope.PhotoCaption;

__ds_ns.DropCapParagraph = __ds_scope.DropCapParagraph;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.EraTag = __ds_scope.EraTag;

__ds_ns.Folio = __ds_scope.Folio;

__ds_ns.SectionRule = __ds_scope.SectionRule;

})();
