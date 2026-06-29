import { useState } from "react";
import { PlayCircle, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";

const videos = [
  {
    id: "H0Bsd7WaoW4",
    title: "AI Fitness Coach",
    description: "Snap a meal for instant calories & macros, AI workout & meal plans, smart planner and progress tracking — built with Flutter + AI.",
    vertical: true,
  },
  {
    id: "p0hi4JLcU6A",
    title: "App Demo",
    description: "Watch the app in action — full walkthrough of features and UI.",
    vertical: false,
  },
];

const VideosSection = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="videos" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">
            <Youtube className="h-4 w-4" />
            YouTube
          </span>
          <h2 className="font-display text-4xl font-bold mt-3 tracking-tight">App Videos</h2>
          <div className="section-heading-line" />
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Real demos from my apps — see them running live.
          </p>
        </div>

        {/* Cards — centered so the layout holds with 1 video or many */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {videos.map((v) => (
            <Card
              key={v.id}
              role="button"
              tabIndex={0}
              aria-label={`Play video: ${v.title}`}
              className="group w-full sm:w-[360px] bg-card border-border/70 hover:border-primary/60 focus-visible:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden cursor-pointer"
              onClick={() => setActiveId(v.id)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveId(v.id); } }}
            >
              {/* Thumbnail */}
              <div className={`relative bg-muted overflow-hidden ${v.vertical ? "aspect-[9/16] max-h-[420px] mx-auto" : "aspect-video"}`}>
                <img
                  src={`https://img.youtube.com/vi/${v.id}/${v.vertical ? "oardefault" : "hqdefault"}.jpg`}
                  alt={v.title}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.endsWith("hqdefault.jpg")) img.src = `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="h-7 w-7 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {v.title}
                </h3>
                {v.description && (
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {v.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={() => setActiveId(null)}
        >
          <div
            className={`relative bg-black rounded-xl overflow-hidden shadow-2xl ${
              videos.find((v) => v.id === activeId)?.vertical
                ? "h-[85vh] max-h-[85vh] aspect-[9/16]"
                : "w-full max-w-4xl aspect-video"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveId(null)}
              className="absolute -top-10 right-0 text-sm text-white/80 hover:text-white px-3 py-1 rounded-full border border-white/40 bg-black/40 backdrop-blur-sm"
            >
              Close
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeId}?autoplay=1`}
              title="App demo video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideosSection;
