import { motion } from "framer-motion";
import { Star, Flame, Wine, Sparkles, ArrowRight } from "lucide-react";
import BlurText from "../reactbits/BlurText";
import DecryptedText from "../reactbits/DecryptedText";
import SpotlightCard from "../reactbits/SpotlightCard";

const go = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

const values = [
  { icon: Flame, title: "Artisanal Craft", text: "Every plate is built by hand over open flame." },
  { icon: Wine, title: "Curated Cellar", text: "450+ rare vintages chosen by our sommeliers." },
  { icon: Sparkles, title: "Sensory Ambiance", text: "Candlelit rooms designed for lingering." },
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#0c0d10] pt-28 pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0d10]/70 via-[#0c0d10]/80 to-[#0c0d10]" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/5 px-5 py-2"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-300">Michelin Guide Recommended</span>
          <span className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </span>
        </motion.div>

        <BlurText
          text="Where Culinary Artistry Meets Soul"
          className="mx-auto max-w-4xl justify-center font-serif text-5xl leading-tight text-white md:text-7xl"
        />

        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-amber-300">
          <DecryptedText text="A TASTING JOURNEY IN FIRE & SEASON" />
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => go("reservation")}
            className="group inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 font-semibold text-zinc-950 transition hover:bg-amber-300"
          >
            Reserve Your Experience
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => go("menu")}
            className="rounded-full border border-white/20 px-8 py-3.5 font-semibold text-white transition hover:border-amber-400/60 hover:text-amber-300"
          >
            Discover Menu
          </button>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {values.map(({ icon: Icon, title, text }) => (
            <SpotlightCard key={title} className="p-7 text-left">
              <Icon className="mb-4 text-amber-400" size={28} />
              <h3 className="font-serif text-xl text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{text}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
