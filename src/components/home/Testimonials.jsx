import { Star } from "lucide-react";
import SplitText from "../reactbits/SplitText";
import SpotlightCard from "../reactbits/SpotlightCard";

const reviews = [
  { outlet: "Epicurean Gazette", name: "Margaux Delacroix", role: "Senior Food Critic", rating: 5, text: "Vance's wagyu is a masterclass in restraint — smoke, salt and silence. Among the finest tables in the city.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80" },
  { outlet: "Global Gastronomy", name: "Hiroshi Tanaka", role: "Contributing Editor", rating: 5, text: "The cellar pairings are astonishing. Every pour felt like a conversation with the plate in front of me.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
  { outlet: "Michelin Guide", name: "Anonymous Inspector", role: "Guide Reviewer", rating: 5, text: "Precise technique, generous soul. A restaurant that understands hospitality as an art form.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#111217] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400">Critical Acclaim</p>
          <SplitText text="Words from the Critics" className="justify-center font-serif text-4xl text-white md:text-5xl" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <SpotlightCard key={r.outlet} className="flex flex-col p-8">
              <div className="mb-4 flex">
                {[...Array(r.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="flex-1 font-serif text-lg italic leading-relaxed text-zinc-200">“{r.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <img src={r.avatar} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full border border-amber-400/40 object-cover" />
                <div>
                  <p className="text-sm font-semibold text-white">{r.name}</p>
                  <p className="text-xs text-amber-300">{r.role} · {r.outlet}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
