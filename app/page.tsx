"use client";

import { useEffect, useRef, useState } from "react";

type Panel = {
  id: string;
  eyebrow: string;
  title: string;
  body: React.ReactNode;
};

const ABOUT_BIOS = [
  {
    name: "Paul Werenko",
    text: "Paul Werenko is the visionary behind Honeycomb. Following a lifetime of personal anomalous experiences which he previously dismissed as coincidences, Paul's comprehension of the phenomenon began to shift, thanks in no small part to Leslie Kean's 2017 NYT article and subsequent disclosures from trusted individuals. He has since dedicated his time and effort to numerous projects and organizations to assist in the education of all in the phenomena and their impact on humanity. Honeycomb is just one of those projects that is today his life’s work but it has become his flagship vision. Alongside his handpicked team (below) and with the tireless support of well-known members of the UAP Community including journalists, pilots, and Experiencers, Paul and his team are committed to providing a platform where every individual in the world is able to share their story.",
  },
  {
    name: "Eavie Arntzen",
    text: "With a lifelong fascination in the question of consciousness and a background in psychology and writing, Eavie Arntzen is deeply invested in the exploration of consciousness and, thanks to the disclosure of brave individuals committed to telling and sharing the truth, the connections between what it means to be conscious and the profound experience of unexplained phenomena. The single most engaging, fundamental and philosophical questions about our species and our universe are being asked today, and through the work of Honeycomb she is excited to direct those questions through a deeply human lens by supporting experiencers in telling their stories.",
  },
  {
    name: "James Faulk",
    text: "In late 2022, award-winning reporter, writer, producer, news anchor and podcaster James Faulk launched Neon Galactic podcast to help mainstream the vital conversation surrounding UAP, NHI, and government secrecy. His work there triggered a deep dive into esoteric philosophy and other forms of rejected knowledge, prompting an ontological flip that impacted every aspect of his life. The rather impromptu online side gig became his primary passion, an engine for self-discovery, and a means to foster connection. His newest venture with Honeycomb is a perfect crystallization of the values and perspective he has developed these past several years and he is thrilled to help uncover the truth about humankind, consciousness, and unity in the cosmos, all of which James believes can be found in people’s lived experience. The goal now is to help people tell their stories.",
  },
  {
    name: "Liz Perez",
    text: "Liz Perez’s personal experiences with the anomalous span the breadth of her life but have been refocused with her more recent research into the phenomenon. As a project manager for a high-end, complex and demanding engineering and construction firm, Liz provides the scaffolding of the Honeycomb project, keeping an eye on the next step and jumping in by making new ideas tangible. Her involvement in various projects related to the phenomena led her to a central role in Honeycomb and a commitment to disclosure and realizing the goal of making the once-sidelined truth accessible.",
  },
  {
    name: "Dane Street",
    text: "Driven by the idea of aiding connection and expansion of the human story within the phenomenon, Dane Street brings to Honeycomb a passion for shifting the paradigm and creating a platform through which disclosure will happen, not by way of appeals to repeal government secrecy, but by the people and for the people. Analytical by nature, his skill set as a logic and process analyst directs Dane’s exploration into the unexplainable and the as-yet-unrealized possibilities of human knowledge and understanding. Through population-based disclosure, Dane intends to return the truth to humanity and open the door to our shared history.",
  },
];

const PANELS: Panel[] = [
  {
    id: "explore",
    eyebrow: "WELCOME TO HONEYCOMB-PHENOMENON",
    title: "A living archive of the unexplained.",
    body: (
      <>
        <h2>Your Experience. Our Collective History.</h2>
        <p>Honeycomb's mission is to support and empower those who have experienced or witnessed a UFO, UAP, or anything related to the Phenomenon, through the building of community, and the curation of shared experiences.</p>
        <p>We have built an ever-evolving platform to share anomalous experiences with others, one that fosters a new understanding that your experience was unique but not isolated. You are not alone.</p>
        <p>For too long stigma and secrecy have caused us to keep these profound encounters to ourselves, often hiding them from even our closest loved ones.</p>
        <p className="declaration">We are here to change that.</p>
      </>
    ),
  },
  {
    id: "stories",
    eyebrow: "EVERY EXPERIENCE IS A POINT OF LIGHT.",
    title: "Your story belongs here.",
    body: (
      <>
        <p>Over the past decade, we have been documenting these interactions to build a visual, searchable database. Here, you can safely record your story, archive your encounter, search and view other encounters, and connect with a global community of people with similar yet personal experiences.</p>
        <p>This is our path to disclosure. This information belongs to all of us. No one can classify or hide your story—and your experience might just be another key, unlocking humanity's understanding of our place in the universe.</p>
        <h2>Join the Journey</h2>
        <p>We are building this archive with you. One person at a time. One experience at a time.</p>
        <a className="story-action" href="https://www.honeycomb-phenomenon.com/" target="_blank" rel="noreferrer">SHARE YOUR STORY TODAY AT HONEYCOMB-PHENOMENON.COM <span aria-hidden="true">→</span></a>
      </>
    ),
  },
  {
    id: "about",
    eyebrow: "THE PEOPLE BEHIND HONEYCOMB.",
    title: "Meet the team.",
    body: (
      <div className="bios">
        {ABOUT_BIOS.map((bio) => <article key={bio.name}><h2>{bio.name}</h2><p>{bio.text}</p></article>)}
      </div>
    ),
  },
  {
    id: "contact",
    eyebrow: "ADD YOUR VOICE.",
    title: "Contact Honeycomb.",
    body: (
      <>
        <div className="contact-list">
          <a href="mailto:paul@honeycomb-phenomenon.com"><strong>Paul Werenko</strong><span>paul@honeycomb-phenomenon.com</span></a>
          <a href="mailto:eavie@honeycomb-phenomenon.com"><strong>Eavie Arntzen</strong><span>eavie@honeycomb-phenomenon.com</span></a>
          <a href="mailto:james@honeycomb-phenomenon.com"><strong>James Faulk</strong><span>james@honeycomb-phenomenon.com</span></a>
          <a href="mailto:liz@honeycomb-phenomenon.com"><strong>Liz Perez</strong><span>liz@honeycomb-phenomenon.com</span></a>
          <a href="mailto:dane@honeycomb-phenomenon.com"><strong>Dane Street</strong><span>dane@honeycomb-phenomenon.com</span></a>
        </div>
        <p>Prefer to remain anonymous? Send us your thoughts through this survey.</p>
        <a className="story-action" href="https://docs.google.com/forms/d/e/1FAIpQLScDWZob1StG3CvnBaTTl0dpm9DT8zqGAsOTa0kELwqZe7EJYg/viewform?usp=publish-editor" target="_blank" rel="noreferrer">OPEN THE ANONYMOUS SURVEY <span aria-hidden="true">→</span></a>
      </>
    ),
  },
];

// Centers of every occupied cell in the corrected master. All cells belong
// to one edge-connected component and share one 45-degree upper-right light source.
const FIELD_W = 4268;
const FIELD_H = 2763;
const CELL_W = 316;
const CELL_H = 274;
const SOURCE_CELL_CENTERS = [[949.0,354.0],[1186.0,217.0],[1423.0,354.0],[1660.0,217.0],[1897.0,354.0],[2134.0,217.0],[2371.0,354.0],[2608.0,217.0],[2845.0,354.0],[3082.0,217.0],[3319.0,354.0],[712.0,491.0],[949.0,628.0],[1186.0,491.0],[1423.0,628.0],[1660.0,491.0],[1897.0,628.0],[2134.0,491.0],[2371.0,628.0],[2608.0,491.0],[2845.0,628.0],[3082.0,491.0],[3319.0,628.0],[3556.0,491.0],[475.0,902.0],[712.0,765.0],[949.0,902.0],[1186.0,765.0],[1423.0,902.0],[1660.0,765.0],[1897.0,902.0],[2134.0,765.0],[2371.0,902.0],[2608.0,765.0],[2845.0,902.0],[3082.0,765.0],[3319.0,902.0],[3556.0,765.0],[3793.0,902.0],[238.0,1039.0],[475.0,1176.0],[712.0,1039.0],[949.0,1176.0],[1186.0,1039.0],[1423.0,1176.0],[1660.0,1039.0],[1897.0,1176.0],[2134.0,1039.0],[2371.0,1176.0],[2608.0,1039.0],[2845.0,1176.0],[3082.0,1039.0],[3319.0,1176.0],[3556.0,1039.0],[3793.0,1176.0],[4030.0,1039.0],[238.0,1313.0],[475.0,1450.0],[712.0,1313.0],[949.0,1450.0],[1186.0,1313.0],[1423.0,1450.0],[1660.0,1313.0],[1897.0,1450.0],[2134.0,1313.0],[2371.0,1450.0],[2608.0,1313.0],[2845.0,1450.0],[3082.0,1313.0],[3319.0,1450.0],[3556.0,1313.0],[3793.0,1450.0],[4030.0,1313.0],[238.0,1587.0],[475.0,1724.0],[712.0,1587.0],[949.0,1724.0],[1186.0,1587.0],[1423.0,1724.0],[1660.0,1587.0],[1897.0,1724.0],[2134.0,1587.0],[2371.0,1724.0],[2608.0,1587.0],[2845.0,1724.0],[3082.0,1587.0],[3319.0,1724.0],[3556.0,1587.0],[3793.0,1724.0],[4030.0,1587.0],[475.0,1998.0],[712.0,1861.0],[949.0,1998.0],[1186.0,1861.0],[1423.0,1998.0],[1660.0,1861.0],[1897.0,1998.0],[2134.0,1861.0],[2371.0,1998.0],[2608.0,1861.0],[2845.0,1998.0],[3082.0,1861.0],[3319.0,1998.0],[3556.0,1861.0],[3793.0,1998.0],[712.0,2135.0],[949.0,2272.0],[1186.0,2135.0],[1423.0,2272.0],[1660.0,2135.0],[1897.0,2272.0],[2134.0,2135.0],[2371.0,2272.0],[2608.0,2135.0],[2845.0,2272.0],[3082.0,2135.0],[3319.0,2272.0],[3556.0,2135.0],[949.0,2546.0],[1186.0,2409.0],[1423.0,2546.0],[1660.0,2409.0],[1897.0,2546.0],[2134.0,2409.0],[2371.0,2546.0],[2608.0,2409.0],[2845.0,2546.0],[3082.0,2409.0],[3319.0,2546.0]] as const;

const HOTSPOTS = SOURCE_CELL_CENTERS.map(([sourceX, sourceY], cell) => ({
  x: (sourceX / FIELD_W) * 100,
  y: (sourceY / FIELD_H) * 100,
  key: `cell-${cell}`,
}));

const PORTRAIT_SOURCES = [
  ["/people/mark.png", "Mark", "50% 43%", 1.04],
  ["/people/walter-p.png", "Walter P", "50% 50%", 1.02],
  ["/people/karen-fine.png", "Karen Fine", "50% 50%", 1.02],
  ["/people/pricilla.png", "Pricilla", "50% 50%", 1.03],
  ["/people/cydney.png", "Cydney", "50% 50%", 1.02],
  ["/people/finn.png", "Finn", "50% 47%", 1.04],
  ["/people/george-kendle.png", "George Kendle", "50% 50%", 1.04],
  ["/people/ramiro.png", "Ramiro", "50% 53%", 1.04],
  ["/people/unknown-01.png", "Honeycomb community member", "50% 47%", 1.08],
  ["/people/paul-werenko.png", "Paul Werenko", "50% 50%", 1.08],
  ["/people/unknown-02.png", "Honeycomb community member", "50% 50%", 1.08],
  ["/people/unknown-03.png", "Honeycomb community member", "50% 50%", 1.08],
  ["/people/unknown-04.png", "Honeycomb community member", "50% 50%", 1.08],
  ["/people/unknown-05.png", "Honeycomb community member", "50% 50%", 1.08],
  ["/people/unknown-06.png", "Honeycomb community member", "50% 50%", 1.08],
] as const;

// Fifteen occupied centers from one uninterrupted section of the approved
// lattice. Each portrait therefore shares at least one complete cell edge
// with another portrait and never floats outside the field.
const PORTRAIT_CENTERS = [[1660.0,765.0],[1660.0,1039.0],[1660.0,1313.0],[1897.0,902.0],[1897.0,1176.0],[1897.0,1450.0],[2134.0,765.0],[2134.0,1039.0],[2134.0,1313.0],[2371.0,902.0],[2371.0,1176.0],[2371.0,1450.0],[2608.0,765.0],[2608.0,1039.0],[2608.0,1313.0]] as const;

const PORTRAITS = PORTRAIT_SOURCES.map(([src, name, position, scale], index) => {
  const [sourceX, sourceY] = PORTRAIT_CENTERS[index];
  return {
    src,
    name,
    position,
    scale,
    x: (sourceX / FIELD_W) * 100,
    y: (sourceY / FIELD_H) * 100,
  };
});

export default function Home() {
  const [activePanel, setActivePanel] = useState<Panel | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const archiveScrollRef = useRef<HTMLDivElement>(null);

  const openPanel = (id: string) => {
    setActivePanel(PANELS.find((panel) => panel.id === id) ?? null);
    setMenuOpen(false);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePanel(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const field = archiveScrollRef.current;
    if (!field) return;
    field.scrollLeft = Math.max(0, (field.scrollWidth - field.clientWidth) / 2);
  }, []);

  return (
    <main className={`archive ${activePanel ? "archive--engaged" : ""}`}>
      <div className="archive-background" aria-hidden="true" />
      <div className="archive-atmosphere" aria-hidden="true" />

      <header className="site-header">
        <button className="brand" type="button" aria-label="Honeycomb home" onClick={() => setActivePanel(null)}>
          <img src="/hc-living-path-organic.svg" alt="" />
          <span>HONEYCOMB</span>
        </button>

        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((value) => !value)}>
          <span aria-hidden="true" /> MENU
        </button>

        <nav id="primary-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <button type="button" onClick={() => setActivePanel(null)}>HOME</button>
          <button type="button" onClick={() => openPanel("explore")}>EXPLORE</button>
          <button type="button" onClick={() => openPanel("stories")}>STORIES</button>
          <button type="button" onClick={() => openPanel("about")}>ABOUT</button>
          <button className="share-button" type="button" onClick={() => openPanel("contact")}>CONTRIBUTE</button>
        </nav>
      </header>

      <section id="archive-field" className="archive-field" aria-label="Interactive Honeycomb archive">
        <div ref={archiveScrollRef} className="archive-scroll" aria-label="Scrollable archive field">
          <div className="cells-stage">
            <img className="vines-art" src="/hc-connected-vines-alpha.png" alt="" aria-hidden="true" />
            <img className="cells-art" src="/hc-cells-final-web.webp" alt="An organic field of illuminated honeycomb archive cells" />
            <div className="cell-hotspots" aria-label="Future archive experiences">
              {HOTSPOTS.map((hotspot) => (
                <button key={hotspot.key} className="cell-hotspot" type="button" style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }} aria-label="Future archive video">
                  <img src="/hc-single-cell-hover.png" alt="" aria-hidden="true" /><span aria-hidden="true" />
                </button>
              ))}
            </div>
            <div className="portrait-cluster" aria-label="Honeycomb community portraits">
              {PORTRAITS.map((portrait) => (
                <button key={portrait.src} className="portrait-cell" type="button" style={{ left: `${portrait.x}%`, top: `${portrait.y}%` }} aria-label={`${portrait.name}; story video coming soon`}>
                  <img className="portrait-cell-shell" src="/hc-single-cell-hover.png" alt="" aria-hidden="true" />
                  <span className="portrait-frame">
                    <img
                      src={portrait.src}
                      alt={portrait.name === "Honeycomb community member" ? "" : portrait.name}
                      style={{ objectPosition: portrait.position, transform: `scale(${portrait.scale})` }}
                    />
                  </span>
                  {portrait.name !== "Honeycomb community member" && <span className="portrait-name">{portrait.name}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <aside className="story-panel" aria-hidden={!activePanel} aria-live="polite">
        <button className="close-panel" type="button" aria-label="Close panel" onClick={() => setActivePanel(null)}><span aria-hidden="true">×</span></button>
        {activePanel && (
          <>
            <div className="story-content">
              <p className="record-label">{activePanel.eyebrow}</p>
              <h1>{activePanel.title}</h1>
              <div className="panel-copy">{activePanel.body}</div>
            </div>
            <footer className="story-footer"><img src="/hc-living-path-organic-white.svg" alt="" /><div><strong>YOUR EXPERIENCE.</strong><span>OUR COLLECTIVE HISTORY.</span></div><small>HONEYCOMB</small></footer>
          </>
        )}
      </aside>
    </main>
  );
}
