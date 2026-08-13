"use client";

import { useEffect, useRef, useState } from "react";

type Story = {
  id: string;
  label: string;
  title: string;
  location: string;
  date: string;
  summary: string;
  tags: string[];
};

const STORIES: Story[] = [
  {
    id: "NM-1978-014",
    label: "ARCHIVE RECORD 014",
    title: "Three lights over the mesa",
    location: "Northern New Mexico",
    date: "Autumn 1978",
    summary:
      "A family traveling after dusk recalls three amber lights holding their position above the mesa before moving together beyond the horizon.",
    tags: ["LIGHTS", "MULTIPLE WITNESSES", "NEW MEXICO"],
  },
  {
    id: "CO-1994-031",
    label: "ARCHIVE RECORD 031",
    title: "The silent formation",
    location: "San Luis Valley, Colorado",
    date: "July 1994",
    summary:
      "Two witnesses describe a broad, silent formation crossing the valley slowly enough for them to observe its shape against the night sky.",
    tags: ["FORMATION", "SILENT", "NIGHT"],
  },
  {
    id: "AZ-2006-052",
    label: "ARCHIVE RECORD 052",
    title: "A point of light at daybreak",
    location: "Outside Flagstaff, Arizona",
    date: "April 2006",
    summary:
      "An early-morning observation begins as a stationary point of light, then changes direction without the gradual turn expected from an aircraft.",
    tags: ["DAYBREAK", "DIRECTION CHANGE", "ARIZONA"],
  },
  {
    id: "TX-2019-077",
    label: "ARCHIVE RECORD 077",
    title: "What we saw from the back porch",
    location: "West Texas",
    date: "September 2019",
    summary:
      "Three neighbors independently notice an illuminated object beyond the tree line and later compare details that closely agree.",
    tags: ["COMMUNITY", "LIGHT", "CORROBORATED"],
  },
];

// Centers of every occupied cell in D.J.'s controlling 3,327 x 4,096 artwork.
// The approved field repeats four times at the exact lattice spacing used by
// the asset builder. Transparent gaps intentionally receive no interaction.
const SOURCE_CELL_CENTERS = [[2039,204],[2455,204],[1184,288],[1600,288],[2655,320],[2243,324],[1396,400],[2039,440],[2451,440],[2863,440],[776,520],[2247,556],[2659,556],[1835,560],[984,636],[1396,636],[2039,672],[2447,672],[2863,672],[1192,752],[1600,752],[1835,788],[2247,788],[2655,788],[984,868],[1396,868],[2039,908],[2451,908],[2863,908],[1640,948],[1192,984],[776,988],[1831,1020],[2243,1020],[2655,1020],[576,1104],[984,1104],[1396,1104],[2039,1136],[2451,1136],[2863,1136],[776,1220],[1188,1220],[1604,1220],[1831,1256],[2243,1256],[2655,1256],[984,1336],[1396,1340],[2039,1372],[2455,1372],[2863,1372],[364,1456],[776,1456],[1600,1456],[2247,1488],[1835,1492],[2655,1492],[576,1568],[984,1572],[1396,1572],[2043,1604],[2451,1604],[780,1688],[1188,1688],[1600,1688],[1835,1720],[2659,1720],[572,1804],[984,1804],[2043,1840],[2859,1840],[368,1920],[780,1920],[1188,1920],[1600,1920],[1835,1956],[2247,1956],[2659,1956],[984,2036],[1396,2036],[568,2040],[2451,2072],[2859,2072],[2043,2076],[1600,2152],[364,2156],[1192,2156],[2243,2192],[2655,2192],[1396,2268],[572,2272],[2451,2304],[2039,2308],[776,2388],[1192,2388],[1600,2388],[1831,2424],[2247,2424],[2659,2424],[576,2504],[984,2504],[1392,2504],[2451,2540],[2863,2540],[364,2620],[1600,2620],[780,2624],[1192,2624],[1835,2656],[2247,2656],[572,2736],[984,2736],[1396,2740],[2043,2772],[2455,2772],[368,2852],[1192,2852],[780,2856],[1600,2856],[1835,2888],[2655,2888],[2247,2892],[576,2972],[984,2972],[1396,2972],[2451,3004],[2039,3008],[364,3088],[776,3088],[1188,3088],[1600,3088],[1835,3124],[2247,3124],[1392,3204],[572,3208],[984,3208],[2043,3240],[1640,3284],[368,3320],[776,3324],[1188,3324],[1835,3356],[2247,3356],[576,3436],[984,3436],[1396,3436],[2451,3472],[368,3556],[780,3556],[1188,3556],[1835,3588],[576,3672],[988,3672],[2043,3708],[1632,3712],[780,3788],[1188,3792]] as const;

const HOTSPOTS = Array.from({ length: 4 }, (_, repeat) =>
  SOURCE_CELL_CENTERS.map(([sourceX, sourceY], cell) => ({
    x: ((120 + repeat * 2884 + sourceX) / 12220) * 100,
    y: ((repeat * 5 + sourceY) / 4096) * 100,
    story: (repeat * SOURCE_CELL_CENTERS.length + cell) % STORIES.length,
  })),
).flat();

export default function Home() {
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pointerMode, setPointerMode] = useState(false);
  const archiveScrollRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<number | null>(null);

  const openStory = (story: Story, hotspotIndex: number | null = null) => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    setActiveStory(story);
    setActiveHotspot(hotspotIndex);
    setMenuOpen(false);
  };

  const cancelScheduledClose = () => {
    if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const scheduleClose = () => {
    if (!pointerMode) return;
    cancelScheduledClose();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveStory(null);
      setActiveHotspot(null);
    }, 420);
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveStory(null);
        setActiveHotspot(null);
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

  const scrollArchive = (event: React.WheelEvent<HTMLDivElement>) => {
    const field = archiveScrollRef.current;
    if (!field || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (field.scrollWidth <= field.clientWidth) return;
    event.preventDefault();
    field.scrollLeft += event.deltaY;
  };

  return (
    <main className={`archive ${activeStory ? "archive--engaged" : ""}`}>
      <div className="archive-background" aria-hidden="true" />
      <div className="archive-atmosphere" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#archive-field" aria-label="Honeycomb home">
          <img src="/hc-living-cluster-watermark.png" alt="" />
          <span>HONEYCOMB</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          MENU
        </button>

        <nav id="primary-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
          <a href="#archive-field">HOME</a>
          <button type="button" onClick={() => openStory(STORIES[0])}>EXPLORE</button>
          <button type="button" onClick={() => openStory(STORIES[1])}>STORIES</button>
          <button type="button" onClick={() => openStory(STORIES[2])}>ABOUT</button>
          <button className="share-button" type="button" onClick={() => openStory(STORIES[3])}>CONTRIBUTE</button>
        </nav>
      </header>

      <section id="archive-field" className="archive-field" aria-label="Interactive Honeycomb archive">
        <div
          ref={archiveScrollRef}
          className="archive-scroll"
          aria-label="Scrollable archive field"
          onWheel={scrollArchive}
          onPointerEnter={(event) => setPointerMode(event.pointerType === "mouse")}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") scheduleClose();
          }}
        >
        <div className="cells-stage">
          <img
            className="cells-art"
            src="/hc-cells-final-web.webp"
            alt="An organic field of illuminated honeycomb archive cells"
          />
          <div className="cell-hotspots" aria-label="Featured archive experiences">
            {HOTSPOTS.map((hotspot, index) => {
              const story = STORIES[hotspot.story];
              return (
                <button
                  key={`${story.id}-${index}`}
                  className={`cell-hotspot ${activeHotspot === index ? "cell-hotspot--active" : ""}`}
                  type="button"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  aria-label={`Open ${story.title}`}
                  onMouseEnter={() => openStory(story, index)}
                  onMouseLeave={scheduleClose}
                  onFocus={() => openStory(story, index)}
                  onClick={() => openStory(story, index)}
                >
                  <img src="/hc-single-cell-hover.png" alt="" aria-hidden="true" />
                  <span aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>
        </div>

      </section>

      <aside
        className="story-panel"
        aria-hidden={!activeStory}
        aria-live="polite"
        onMouseEnter={cancelScheduledClose}
        onMouseLeave={scheduleClose}
      >
        <button
          className="close-panel"
          type="button"
          aria-label="Close archive record"
          onClick={() => {
            setActiveStory(null);
            setActiveHotspot(null);
          }}
        >
          <span aria-hidden="true">×</span>
        </button>

        {activeStory && (
          <>
            <div className="story-content">
              <p className="record-label">{activeStory.label}</p>
              <h1>{activeStory.title}</h1>

              <dl className="story-meta">
                <div><dt>LOCATION</dt><dd>{activeStory.location}</dd></div>
                <div><dt>DATE</dt><dd>{activeStory.date}</dd></div>
              </dl>

              <p className="story-summary">{activeStory.summary}</p>

              <div className="story-tags" aria-label="Story tags">
                {activeStory.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>

              <button className="story-action" type="button">
                EXPERIENCE THIS STORY <span aria-hidden="true">→</span>
              </button>
            </div>

            <footer className="story-footer">
              <img src="/hc-living-cluster-watermark.png" alt="" />
              <div><strong>YOUR EXPERIENCE.</strong><span>OUR COLLECTIVE HISTORY.</span></div>
              <small>{activeStory.id}</small>
            </footer>
          </>
        )}
      </aside>

    </main>
  );
}
