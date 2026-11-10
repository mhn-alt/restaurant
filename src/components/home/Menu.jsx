import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, ChefHat } from "lucide-react";
import SplitText from "../reactbits/SplitText";
import SpotlightCard from "../reactbits/SpotlightCard";
import { cn } from "../../lib/utils";

const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`;

const categories = ["Entrées & Crudo", "Signature Mains", "Confections", "Mixology & Cellar"];

const dishes = {
  "Entrées & Crudo": [
    { name: "Hamachi Crudo", price: 26, tag: "Gluten-Free", desc: "Yellowtail, yuzu kosho, cucumber, finger lime, cold-pressed olive oil.", img: img("1519708227418-c8fd9a32b7a2") },
    { name: "Beetroot Carpaccio", price: 22, tag: "Vegan", desc: "Roasted heirloom beets, whipped chèvre, pistachio dukkah, aged balsamic.", img: img("1512621776951-a57141f2eefd") },
    { name: "Seared Scallops", price: 32, tag: "Chef's Pick", desc: "Hokkaido scallops, cauliflower purée, brown butter, crisp capers.", img: img("1559339352-11d035aa65de") },
  ],
  "Signature Mains": [
    { name: "Hearth-Fired Wagyu", price: 78, tag: "Chef's Pick", desc: "A5 wagyu striploin, bone-marrow jus, charred shallot, black garlic.", img: img("1544025162-d76694265947") },
    { name: "Saffron Lobster Risotto", price: 64, tag: "Gluten-Free", desc: "Maine lobster, carnaroli rice, saffron beurre blanc, chive oil.", img: img("1476224203421-9ac39bcb3327") },
    { name: "Wild Mushroom Wellington", price: 48, tag: "Vegan", desc: "Forest mushrooms, chestnut duxelles, puff pastry, truffle jus.", img: img("1504674900247-0877df9cc836") },
  ],
  Confections: [
    { name: "Dark Chocolate Sphere", price: 20, tag: "Chef's Pick", desc: "Valrhona shell, salted caramel, warm hazelnut sauce poured tableside.", img: img("1551024601-bec78aea704b") },
    { name: "Lavender Panna Cotta", price: 16, tag: "Gluten-Free", desc: "Vanilla bean cream, lavender honey, macerated berries.", img: img("1488477181946-6428a0291777") },
    { name: "Citrus Tart", price: 17, tag: "Vegan", desc: "Almond crust, blood orange curd, coconut meringue.", img: img("1565958011703-44f9829ba187") },
  ],
  "Mixology & Cellar": [
    { name: "Smoked Old Fashioned", price: 21, tag: "Chef's Pick", desc: "Barrel-aged bourbon, demerara, orange bitters, applewood smoke.", img: img("1514362545857-3bc16c4c7d1b") },
    { name: "Aurelia Spritz", price: 18, tag: "Vegan", desc: "Elderflower, sparkling Franciacorta, grapefruit oil, thyme.", img: img("1470337458703-46ad1756a187") },
    { name: "Sommelier's Flight", price: 55, tag: "Gluten-Free", desc: "Three rare pours from the Grand Reserve, paired and explained.", img: img("1506377247377-2a5b3b417ebb") },
  ],
};

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section id="menu" className="bg-[#111217] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400">The Menu</p>
          <SplitText text="Crafted for the Senses" className="justify-center font-serif text-4xl text-white md:text-5xl" />
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-6 py-2 text-sm transition",
                active === c
                  ? "border-amber-400 bg-amber-400 font-semibold text-zinc-950"
                  : "border-white/10 text-zinc-300 hover:border-amber-400/50"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {dishes[active].map((d) => (
              <SpotlightCard key={d.name} className="flex flex-col">
                <img src={d.img} alt={d.name} loading="lazy" className="h-56 w-full object-cover" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-serif text-xl text-white">{d.name}</h3>
                    <span className="rounded-md bg-amber-400/10 px-2.5 py-1 font-semibold text-amber-300">${d.price}</span>
                  </div>
                  <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-400/30 px-3 py-1 text-xs text-amber-300">
                    {d.tag === "Chef's Pick" ? <ChefHat size={12} /> : <Leaf size={12} />}
                    {d.tag}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">{d.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
