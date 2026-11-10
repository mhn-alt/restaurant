import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SplitText from "../reactbits/SplitText";
import SpotlightCard from "../reactbits/SpotlightCard";
import { cn } from "../../lib/utils";

const times = ["5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"];
const areas = ["Main Dining Room", "Hearth Counter", "Solarium Salon", "Wine Cellar"];
const initial = { name: "", email: "", phone: "", date: "", time: "", guests: "2", area: areas[0], notes: "" };

const field =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-amber-400/60";

export default function Reservation() {
  const [form, setForm] = useState(initial);
  const [done, setDone] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setDone(true);
  };

  const reset = () => {
    setForm(initial);
    setDone(false);
  };

  return (
    <section id="reservation" className="bg-[#0c0d10] py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-amber-400">Reservations</p>
          <SplitText text="Reserve Your Evening" className="justify-center font-serif text-4xl text-white md:text-5xl" />
        </div>

        <SpotlightCard className="p-8 md:p-10">
          <AnimatePresence mode="wait">
            {done ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-10 text-center">
                <CheckCircle2 className="mx-auto mb-5 text-amber-400" size={56} />
                <h3 className="font-serif text-3xl text-white">Reservation Confirmed</h3>
                <p className="mx-auto mt-4 max-w-md text-zinc-400">
                  Thank you, {form.name}. A table for {form.guests} in the {form.area} is held for{" "}
                  {form.date} at {form.time}. Confirmation sent to {form.email}.
                </p>
                <button onClick={reset} className="mt-8 rounded-full border border-amber-400/40 px-6 py-2.5 text-amber-300 hover:bg-amber-400 hover:text-zinc-950">
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} exit={{ opacity: 0 }} className="grid gap-5 md:grid-cols-2">
                <input required className={field} placeholder="Full name" value={form.name} onChange={set("name")} />
                <input required type="email" className={field} placeholder="Email" value={form.email} onChange={set("email")} />
                <input required type="tel" className={field} placeholder="Phone" value={form.phone} onChange={set("phone")} />
                <input required type="date" min={today} className={cn(field, "[color-scheme:dark]")} value={form.date} onChange={set("date")} />
                <select required className={field} value={form.time} onChange={set("time")}>
                  <option value="" className="bg-zinc-900">Select time</option>
                  {times.map((t) => <option key={t} value={t} className="bg-zinc-900">{t}</option>)}
                </select>
                <select className={field} value={form.guests} onChange={set("guests")}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n} className="bg-zinc-900">{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                </select>

                <div className="md:col-span-2">
                  <p className="mb-3 text-xs uppercase tracking-widest text-zinc-400">Seating Area</p>
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                    {areas.map((a) => (
                      <button
                        type="button"
                        key={a}
                        onClick={() => setForm((f) => ({ ...f, area: a }))}
                        className={cn(
                          "rounded-xl border px-3 py-3 text-xs transition",
                          form.area === a
                            ? "border-amber-400 bg-amber-400/10 text-amber-300"
                            : "border-white/10 text-zinc-300 hover:border-amber-400/40"
                        )}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea rows={3} className={cn(field, "md:col-span-2")} placeholder="Special notes (allergies, celebrations…)" value={form.notes} onChange={set("notes")} />
                <button type="submit" className="rounded-full bg-amber-400 py-3.5 font-semibold text-zinc-950 transition hover:bg-amber-300 md:col-span-2">
                  Confirm Reservation
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </SpotlightCard>
      </div>
    </section>
  );
}
