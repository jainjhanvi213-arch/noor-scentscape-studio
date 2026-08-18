import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Star, Truck, ShieldCheck, Sparkles, ChevronRight } from "lucide-react";

import sarkarNoorHero from "@/assets/sarkar-noor-hero.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sarkar Noor — Warm Woody Floral Fragrance" },
      {
        name: "description",
        content:
          "Discover Sarkar Noor, a warm woody floral fragrance with bergamot, saffron, rose, jasmine, oud, sandalwood, amber, and musk.",
      },
      { property: "og:title", content: "Sarkar Noor — Warm Woody Floral Fragrance" },
      {
        property: "og:description",
        content:
          "Sarkar Noor captures the quiet confidence of modern royalty—warm, refined, and impossible to ignore.",
      },
      { property: "og:type", content: "product" },
      { property: "og:image", content: sarkarNoorHero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: sarkarNoorHero },
    ],
  }),
  component: Index,
});

const notes = [
  {
    title: "Top Notes",
    items: ["Bergamot", "Saffron", "Citrus"],
    description: "A bright, golden opening that sparkles with sun-ripened citrus and precious spice.",
    color: "bg-gold/10 text-gold-foreground border-gold/20",
  },
  {
    title: "Heart Notes",
    items: ["Rose", "Jasmine", "Oud"],
    description: "A royal bouquet of velvety rose and jasmine, wrapped in the rare warmth of oud.",
    color: "bg-rose/10 text-rose-foreground border-rose/20",
  },
  {
    title: "Base Notes",
    items: ["Sandalwood", "Amber", "Musk"],
    description: "A lingering foundation of creamy sandalwood, golden amber, and soft skin musk.",
    color: "bg-oud/10 text-oud-foreground border-oud/20",
  },
];

const sizes = [
  { label: "50 ml", price: 149 },
  { label: "100 ml", price: 249, badge: "Most popular" },
];

function Index() {
  const [selectedSize, setSelectedSize] = useState(1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="font-display text-2xl tracking-tight">Sarkar</span>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#story" className="hover:text-foreground transition-colors">Story</a>
            <a href="#notes" className="hover:text-foreground transition-colors">Notes</a>
            <a href="#product" className="hover:text-foreground transition-colors">Product</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          </nav>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
          >
            Shop Now <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div className="order-2 lg:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              Extrait de Parfum
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Sarkar <span className="text-gold-foreground">Noor</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Warm Woody Floral
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-foreground/90">
              Sarkar Noor captures the quiet confidence of modern royalty—warm, refined, and
              impossible to ignore.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background shadow-luxury transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <ShoppingBag className="h-4 w-4" />
                Discover Noor
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Read the story
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-gold-foreground" />
                Free shipping
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-foreground" />
                Authenticity guaranteed
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-gold text-gold" />
                4.9 / 5
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/20 via-transparent to-rose/10 blur-3xl" />
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl shadow-luxury transition-opacity duration-700",
                  isImageLoaded ? "opacity-100" : "opacity-0"
                )}
              >
                <img
                  src={sarkarNoorHero}
                  alt="Sarkar Noor perfume bottle in warm golden light with rose petals and saffron"
                  width={1024}
                  height={1024}
                  className="w-full object-cover"
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-muted">
                  <span className="text-sm text-muted-foreground">Loading image…</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section id="story" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          The Brand Story
        </span>
        <h2 className="font-display text-4xl leading-tight text-foreground sm:text-5xl">
          A fragrance for those who lead without asking for permission.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Inspired by the quiet power of modern royalty, Sarkar Noor blends Eastern opulence with
          contemporary refinement. Each spray is a signature—warm woods, luminous florals, and a
          golden trail that turns every entrance into a statement.
        </p>
      </section>

      {/* Fragrance Notes */}
      <section id="notes" className="bg-muted/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Olfactory Pyramid
            </span>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">Fragrance Notes</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Three acts of warmth, light, and lingering depth.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note.title}
                className="group rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-luxury"
              >
                <div
                  className={cn(
                    "mb-5 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
                    note.color
                  )}
                >
                  {note.title}
                </div>
                <ul className="mb-4 flex flex-wrap gap-2">
                  {note.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-muted-foreground">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Image Area */}
      <section id="product" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-luxury">
            <img
              src={sarkarNoorHero}
              alt="Sarkar Noor perfume bottle with golden cap, amber liquid, and rose saffron accents"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              The Product
            </span>
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">
              Crafted to leave a legacy.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Every detail of Sarkar Noor is designed for presence. The weighted glass bottle, the
              precision gold cap, and the deep amber extrait within—it all speaks to a fragrance
              that lasts from the first meeting to the final goodbye.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Long-lasting extrait de parfum concentration",
                "Hand-finished glass bottle with gold cap",
                "Vegan-friendly, responsibly sourced ingredients",
                "Made for evening wear and signature moments",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="bg-foreground py-24 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-gold">
            Choose Your Size
          </span>
          <h2 className="font-display text-4xl text-primary-foreground sm:text-5xl">
            Make Sarkar Noor yours.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Select the size that fits your ritual. Complimentary shipping on every order.
          </p>

          <div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
            {sizes.map((size, idx) => (
              <button
                key={size.label}
                onClick={() => setSelectedSize(idx)}
                className={cn(
                  "relative flex-1 rounded-2xl border p-6 text-left transition-all sm:max-w-xs",
                  selectedSize === idx
                    ? "border-gold bg-gold/10"
                    : "border-primary-foreground/20 bg-primary-foreground/5 hover:bg-primary-foreground/10"
                )}
              >
                {size.badge && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                    {size.badge}
                  </span>
                )}
                <div className="text-sm font-medium text-primary-foreground/70">{size.label}</div>
                <div className="mt-2 font-display text-4xl text-primary-foreground">
                  ${size.price}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-10">
            {(() => {
              const currentSize = sizes[selectedSize];
              return (
                <button className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-base font-semibold text-gold-foreground shadow-luxury transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <ShoppingBag className="h-5 w-5" />
                  Add to Bag — ${currentSize ? currentSize.price : sizes[0]!.price}
                </button>
              );
            })()}
            <p className="mt-4 text-sm text-primary-foreground/60">
              30-day satisfaction guarantee. Secure checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="font-display text-2xl text-foreground">Sarkar</span>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Modern luxury fragrances that honor tradition and invite confidence.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Shop</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#product" className="hover:text-foreground transition-colors">Sarkar Noor</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Gift Sets</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Discovery Kit</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Sarkar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Designed for the quietly confident.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
