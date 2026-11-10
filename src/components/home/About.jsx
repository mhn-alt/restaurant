import { ChefHat, Quote } from "lucide-react";
import SplitText from "../reactbits/SplitText";
import SpotlightCard from "../reactbits/SpotlightCard";

const stats = [
  { value: "18+", label: "Years" },
  { value: "450+", label: "Rare Vintages" },
  { value: "100%", label: "Organic Local Sourcing" },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0c0d10] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400">Our Heritage</p>
          <SplitText text="A Table Built on Tradition" className="font-serif text-4xl text-white md:text-5xl" />
          <p className="mt-6 leading-relaxed text-zinc-400">
            Aurelia began in 2008 as a twelve-seat hearth kitchen, inspired by three generations of
            family cooking. Today it remains faithful to that origin: seasonal produce from
            neighbouring farms, slow fire, and a belief that a meal should feel like a memory.
          </p>
          <p className="mt-4 leading-relaxed text-zinc-400">
            Under Chef Julian Vance, classical technique meets restless curiosity — each menu is a
            chapter in a story told one course at a time.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <SpotlightCard key={s.label} className="p-5 text-center">
                <div className="font-serif text-3xl text-amber-400">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-zinc-400">{s.label}</div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        <SpotlightCard className="p-0">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
            alt="Chef Julian Vance plating a dish"
            className="h-80 w-full object-cover"
            loading="lazy"
          />
          <div className="p-8">
            <Quote className="mb-3 text-amber-400" size={28} />
            <p className="font-serif text-xl italic text-white">
              “Cooking is the art of listening — to the fire, the season, and the guest.”
            </p>
            <div className="mt-5 flex items-center gap-3 text-sm text-zinc-400">
              <ChefHat className="text-amber-400" size={20} />
              <span><strong className="text-white">Chef Julian Vance</strong> · Executive Chef & Founder</span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
