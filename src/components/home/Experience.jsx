import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SplitText from "../reactbits/SplitText";
import SpotlightCard from "../reactbits/SpotlightCard";

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const spaces = [
  { title: "The Hearth Kitchen Theatre", text: "Twelve counter seats facing the open flame. Watch every course come to life.", img: img("1556910103-1c02745aae4d") },
  { title: "Subterranean Grand Reserve Cellar", text: "A candlelit vault of rare vintages, hosting intimate pairings of up to ten.", img: img("1506377247377-2a5b3b417ebb") },
  { title: "The Solarium Private Salon", text: "A glass-roofed salon for celebrations, bathed in golden light and starlight.", img: img("1555396273-367ea4eb4db5") },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0c0d10] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400">The Experience</p>
          <SplitText text="Three Ways to Dine" className="justify-center font-serif text-4xl text-white md:text-5xl" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {spaces.map((s) => (
            <SpotlightCard key={s.title} className="group">
              <div className="overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-64 w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 px-7 py-3 text-amber-300 transition hover:bg-amber-400 hover:text-zinc-950"
          >
            Explore the Gallery <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
