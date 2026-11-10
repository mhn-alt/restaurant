import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";
import Logo from "./Logo";

const links = [
  { label: "About", to: "/#about" },
  { label: "Menu", to: "/#menu" },
  { label: "Experience", to: "/#experience" },
  { label: "Reviews", to: "/#testimonials" },
  { label: "Gallery", to: "/gallery" },
];

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash anchors across route changes
  useEffect(() => {
    setOpen(false);
    if (!hash) {
      window.scrollTo({ top: 0 });
      return;
    }
    const t = setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(t);
  }, [pathname, hash]);

  const isActive = (to) => (to === "/gallery" ? pathname === "/gallery" : false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-[#0c0d10]/70 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="AURELIA Home">
          <Logo variant="horizontal" size="sm" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={cn(
                  "text-sm uppercase tracking-widest transition-colors hover:text-amber-300",
                  isActive(l.to) ? "text-amber-400" : "text-zinc-300"
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/#reservation"
              className="rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
            >
              Reserve
            </Link>
          </li>
        </ul>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  className="text-sm uppercase tracking-widest text-zinc-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/#reservation" className="font-semibold text-amber-400">
                Reserve a Table
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
