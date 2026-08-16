"use client";

import { useEffect, useRef, useState } from "react";
import brightLayout from "./honeycomb-bright-layout.json";

type Panel = {
  id: string;
  eyebrow: string;
  title: string;
  body: React.ReactNode;
};

const ABOUT_BIOS = [
  {
    name: "Paul Werenko",
    image: "/team/paul-werenko.png",
    imagePosition: "50% 42%",
    text: "Paul Werenko is the visionary behind Honeycomb. Following a lifetime of personal anomalous experiences which he previously dismissed as coincidences, Paul's comprehension of the phenomenon began to shift, thanks in no small part to Leslie Kean's 2017 NYT article and subsequent disclosures from trusted individuals. He has since dedicated his time and effort to numerous projects and organizations to assist in the education of all in the phenomena and their impact on humanity. Honeycomb is just one of those projects that is today his life’s work but it has become his flagship vision. Alongside his handpicked team (below) and with the tireless support of well-known members of the UAP Community including journalists, pilots, and Experiencers, Paul and his team are committed to providing a platform where every individual in the world is able to share their story.",
  },
  {
    name: "Eavie Arntzen",
    image: "/team/eavie-arntzen.png",
    imagePosition: "58% 48%",
    text: "With a lifelong fascination in the question of consciousness and a background in psychology and writing, Eavie Arntzen is deeply invested in the exploration of consciousness and, thanks to the disclosure of brave individuals committed to telling and sharing the truth, the connections between what it means to be conscious and the profound experience of unexplained phenomena. The single most engaging, fundamental and philosophical questions about our species and our universe are being asked today, and through the work of Honeycomb she is excited to direct those questions through a deeply human lens by supporting experiencers in telling their stories.",
  },
  {
    name: "James Faulk",
    image: "/team/james-faulk.png",
    imagePosition: "50% 42%",
    text: "In late 2022, award-winning reporter, writer, producer, news anchor and podcaster James Faulk launched Neon Galactic podcast to help mainstream the vital conversation surrounding UAP, NHI, and government secrecy. His work there triggered a deep dive into esoteric philosophy and other forms of rejected knowledge, prompting an ontological flip that impacted every aspect of his life. The rather impromptu online side gig became his primary passion, an engine for self-discovery, and a means to foster connection. His newest venture with Honeycomb is a perfect crystallization of the values and perspective he has developed these past several years and he is thrilled to help uncover the truth about humankind, consciousness, and unity in the cosmos, all of which James believes can be found in people’s lived experience. The goal now is to help people tell their stories.",
  },
  {
    name: "Liz Perez",
    image: "/team/liz-perez.png",
    imagePosition: "50% 43%",
    text: "Liz Perez’s personal experiences with the anomalous span the breadth of her life but have been refocused with her more recent research into the phenomenon. As a project manager for a high-end, complex and demanding engineering and construction firm, Liz provides the scaffolding of the Honeycomb project, keeping an eye on the next step and jumping in by making new ideas tangible. Her involvement in various projects related to the phenomena led her to a central role in Honeycomb and a commitment to disclosure and realizing the goal of making the once-sidelined truth accessible.",
  },
  {
    name: "Dane Street",
    image: "/team/dane-street.png",
    imagePosition: "50% 42%",
    text: "Driven by the idea of aiding connection and expansion of the human story within the phenomenon, Dane Street brings to Honeycomb a passion for shifting the paradigm and creating a platform through which disclosure will happen, not by way of appeals to repeal government secrecy, but by the people and for the people. Analytical by nature, his skill set as a logic and process analyst directs Dane’s exploration into the unexplainable and the as-yet-unrealized possibilities of human knowledge and understanding. Through population-based disclosure, Dane intends to return the truth to humanity and open the door to our shared history.",
  },
];

const PANELS: Panel[] = [
  {
    id: "explore",
    eyebrow: "WELCOME TO HONEYCOMB-PHENOMENON",
    title: "A living archive of the unexplained",
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
    eyebrow: "EVERY EXPERIENCE IS A POINT OF LIGHT",
    title: "Your story belongs here",
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
    eyebrow: "ABOUT US",
    title: "About Us",
    body: (
      <div className="bios">
        {ABOUT_BIOS.map((bio, index) => (
          <article key={bio.name} className={index % 2 ? "bio bio--reverse" : "bio"}>
            <div className="bio-portrait">
              <img src={bio.image} alt={bio.name} style={{ objectPosition: bio.imagePosition }} />
            </div>
            <div className="bio-copy"><h2>{bio.name}</h2><p>{bio.text}</p></div>
          </article>
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    eyebrow: "ADD YOUR VOICE",
    title: "Contact Honeycomb",
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

const FIELD_WIDTH = brightLayout.canvasWidth;
const FIELD_HEIGHT = brightLayout.canvasHeight;

const HOTSPOTS = brightLayout.cells.map((cell) => ({
  x: (cell.x / FIELD_WIDTH) * 100,
  y: (cell.y / FIELD_HEIGHT) * 100,
  key: `${cell.q}-${cell.r}`,
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

// Select a compact group from the approved 150% lattice so every portrait is
// seated in a real Bright Cell and shares the corrected field alignment.
const PORTRAIT_CENTERS = [...brightLayout.cells]
  .sort((a, b) => {
    const aDistance = Math.hypot(a.x - FIELD_WIDTH * 0.53, a.y - FIELD_HEIGHT * 0.49);
    const bDistance = Math.hypot(b.x - FIELD_WIDTH * 0.53, b.y - FIELD_HEIGHT * 0.49);
    return aDistance - bDistance;
  })
  .slice(0, PORTRAIT_SOURCES.length);

const PORTRAITS = PORTRAIT_SOURCES.map(([src, name, position, scale], index) => {
  const { x: sourceX, y: sourceY } = PORTRAIT_CENTERS[index];
  return {
    src,
    name,
    position,
    scale,
    x: (sourceX / FIELD_WIDTH) * 100,
    y: (sourceY / FIELD_HEIGHT) * 100,
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
          <img src="/hc-connected-field-watermark.svg" alt="" />
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
            <img className="cells-art" src="/hc-approved-cells-150-alpha.png" alt="An organic field of aligned illuminated and dormant Honeycomb archive cells" />
            <img className="vines-art vines-art--foreground" src="/hc-final-fuller-vine-system-review-18.png" alt="" aria-hidden="true" />
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

      <aside className={`story-panel ${activePanel?.id === "about" ? "story-panel--about" : ""}`} aria-hidden={!activePanel} aria-live="polite">
        <button className="close-panel" type="button" aria-label="Close panel" onClick={() => setActivePanel(null)}><span aria-hidden="true">×</span></button>
        {activePanel && (
          <>
            <div className="story-content">
              <p className="record-label">{activePanel.eyebrow}</p>
              <h1>{activePanel.title}</h1>
              <div className="panel-copy">{activePanel.body}</div>
            </div>
            <footer className="story-footer"><img src="/hc-connected-field-watermark-white.svg" alt="" /><div><strong>YOUR EXPERIENCE</strong><span>OUR COLLECTIVE HISTORY</span></div><small>HONEYCOMB</small></footer>
          </>
        )}
      </aside>
    </main>
  );
}
