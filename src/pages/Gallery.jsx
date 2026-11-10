import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, CalendarCheck } from "lucide-react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BlurText from "../components/reactbits/BlurText";
import Masonry from "../components/reactbits/Masonry";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import { cn } from "../lib/utils";

const src = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const filters = [
  "Complete Collection",
  "Haute Cuisine",
  "Atmosphere & Architecture",
  "Mixology & Cellar",
  "Private Celebrations",
];

const photos = [
  { id: 1, cat: "Haute Cuisine", img: "1414235077428-338989a2e8c0", h: "h-72", title: "Tasting Course", desc: "Seasonal tasting plates, composed with precision." },
  { id: 2, cat: "Atmosphere & Architecture", img: "1559339352-11d035aa65de", h: "h-96", title: "The Main Dining Room", desc: "Candlelight, warm walnut and gilded accents." },
  { id: 3, cat: "Mixology & Cellar", img: "1514362545857-3bc16c4c7d1b", h: "h-64", title: "Smoked Old Fashioned", desc: "Applewood smoke and barrel-aged bourbon." },
  { id: 4, cat: "Haute Cuisine", img: "1476224203421-9ac39bcb3327", h: "h-80", title: "Saffron Risotto", desc: "Maine lobster over saffron carnaroli rice." },
  { id: 5, cat: "Private Celebrations", img: "1555396273-367ea4eb4db5", h: "h-72", title: "The Solarium Salon", desc: "A glass-roofed salon for milestone evenings." },
  { id: 6, cat: "Mixology & Cellar", img: "1506377247377-2a5b3b417ebb", h: "h-96", title: "Grand Reserve Cellar", desc: "450+ rare vintages in a candlelit vault." },
  { id: 7, cat: "Haute Cuisine", img: "1551024601-bec78aea704b", h: "h-64", title: "Chocolate Sphere", desc: "Valrhona shell with warm hazelnut sauce." },
  { id: 8, cat: "Atmosphere & Architecture", img: "1424847651672-bf20a4b0982b", h: "h-80", title: "Hearth Kitchen Theatre", desc: "Watch the fire at the chef's counter." },
  { id: 9, cat: "Private Celebrations", img: "1550966871-3ed3cdb5ed0c", h: "h-72", title: "Anniversary Dinner", desc: "Bespoke menus for the moments that matter." },
];

export default function Gallery() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filters[0]);
  const [selected, setSelected] = useState(null);

  const visible = useMemo(
    () => (filter === filters[0] ? photos : photos.filter((p) => p.cat === filter)),
    [filter]
  );

  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  const reserve = () => {
    setSelected(null);
    navigate("/#reservation");
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-zinc-200">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400">Gallery</p>
          <BlurText text="A Glimpse of Aurelia" className="justify-center font-serif text-5xl text-white md:text-6xl" />
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition",
                filter === f
                  ? "border-amber-400 bg-amber-400 font-semibold text-zinc-950"
                  : "border-white/10 text-zinc-300 hover:border-amber-400/50"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <Masonry
          key={filter}
          items={visible}
          renderItem={(p) => (
            <SpotlightCard className="cursor-pointer p-0">
              <button onClick={() => setSelected(p)} className="group block w-full text-left">
                <img src={src(p.img)} alt={p.title} loading="lazy" className={cn("w-full object-cover transition duration-700 group-hover:scale-105", p.h)} />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                  <p className="font-serif text-lg text-white">{p.title}</p>
                  <p className="text-xs text-amber-300">{p.cat}</p>
                </div>
              </button>
            </SpotlightCard>
          )}
        />
      </main>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#111217]"
            >
              <button onClick={() => setSelected(null)} aria-label="Close" className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:text-amber-400">
                <X size={20} />
              </button>
              <img src={src(selected.img, 1600)} alt={selected.title} className="max-h-[60vh] w-full object-cover" />
              <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-400">{selected.cat}</p>
                  <h3 className="mt-1 font-serif text-2xl text-white">{selected.title}</h3>
                  <p className="mt-2 text-sm text-zinc-400">{selected.desc}</p>
                </div>
                <button onClick={reserve} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 font-semibold text-zinc-950 hover:bg-amber-300">
                  <CalendarCheck size={18} /> Reserve Table
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
