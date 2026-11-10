import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, Phone, Wine, Globe, Share2, Check } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-white/10 bg-[#0c0d10] text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="AURELIA Home">
            <Logo variant="horizontal" size="md" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Fine dining rooted in heritage, told through fire, cellar and season.
          </p>
          <div className="mt-6 flex gap-3 text-amber-400">
            <a href="#" aria-label="Website" className="rounded-full border border-white/10 p-2 hover:border-amber-400/50"><Globe size={16} /></a>
            <a href="#" aria-label="Share" className="rounded-full border border-white/10 p-2 hover:border-amber-400/50"><Share2 size={16} /></a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-400"><Clock size={16} /> Service Hours</h4>
          <ul className="space-y-2 text-sm">
            <li>Tue – Thu: 5:30 PM – 10:30 PM</li>
            <li>Fri – Sat: 5:00 PM – 11:30 PM</li>
            <li>Sunday Brunch: 11:00 AM – 3:00 PM</li>
            <li>Monday: Closed</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-400"><MapPin size={16} /> Visit & Contact</h4>
          <address className="space-y-2 text-sm not-italic">
            <p>128 Gilded Lane, Old Town</p>
            <p className="flex items-center gap-2"><Phone size={14} /> +1 (555) 014-2290</p>
            <p className="flex items-center gap-2"><Wine size={14} /> sommelier@aurelia.example</p>
          </address>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">The Journal</h4>
          {done ? (
            <p className="flex items-center gap-2 text-sm text-amber-300"><Check size={16} /> You're on the list.</p>
          ) : (
            <form onSubmit={submit} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-amber-400/60"
              />
              <button className="rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-amber-300">Join</button>
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs">
        © {new Date().getFullYear()} Aurelia Fine Dining. All rights reserved.
      </div>
    </footer>
  );
}
