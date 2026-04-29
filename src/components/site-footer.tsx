import { Link } from "@tanstack/react-router";
import { Twitter, Facebook, Instagram, Youtube, Rss } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="font-serif text-3xl font-black">
            The<span className="text-primary">Meridian</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Slow journalism for fast times. Carefully reported stories from the worlds of
            politics, business, technology, sport and culture.
          </p>
          <div className="mt-6 flex gap-3">
            {[Twitter, Facebook, Instagram, Youtube, Rss].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="size-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase">Sections</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/politics" className="hover:text-primary">Politics</Link></li>
            <li><Link to="/business" className="hover:text-primary">Business</Link></li>
            <li><Link to="/technology" className="hover:text-primary">Technology</Link></li>
            <li><Link to="/sports" className="hover:text-primary">Sports</Link></li>
            <li><Link to="/culture" className="hover:text-primary">Culture</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4 tracking-wide uppercase">The Paper</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/featured" className="hover:text-primary">Featured Stories</Link></li>
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><a href="#" className="hover:text-primary">Ethics & Standards</a></li>
            <li><a href="#" className="hover:text-primary">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} The Meridian. All rights reserved.</span>
          <span>Printed on the open web.</span>
        </div>
      </div>
    </footer>
  );
}
