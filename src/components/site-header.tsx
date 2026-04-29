import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/politics", label: "Politics" },
  { to: "/business", label: "Business" },
  { to: "/technology", label: "Technology" },
  { to: "/sports", label: "Sports" },
  { to: "/culture", label: "Culture" },
  { to: "/featured", label: "Featured" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [date, setDate] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="hidden md:flex items-center justify-between py-2 text-xs text-muted-foreground border-b border-border/60">
          <span>{date}</span>
          <span className="tracking-widest uppercase text-[10px]">Independent · Curated · Daily</span>
        </div>
        <div className="flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif text-3xl font-black tracking-tight leading-none">
              The<span className="text-primary">Meridian</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors data-[status=active]:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="lg:hidden flex flex-col gap-1 pb-4 anim-rise">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium border-b border-border/50"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
