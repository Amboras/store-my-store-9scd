'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, RotateCcw, Zap, Star, ChevronRight, Wifi, Smartphone, Palette } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80'
const ROOM_IMAGE_1 = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
const ROOM_IMAGE_2 = 'https://images.unsplash.com/photo-1493119508027-2b584f234d6c?w=800&q=80'

const features = [
  {
    icon: Wifi,
    title: 'App-Controlled',
    description: 'Control brightness, color, and schedules from your phone — no hub required.',
  },
  {
    icon: Palette,
    title: '16 Million Colors',
    description: 'Choose any color to match your mood, event, or aesthetic perfectly.',
  },
  {
    icon: Smartphone,
    title: 'Voice Ready',
    description: 'Works seamlessly with Alexa, Google Home, and Siri out of the box.',
  },
]

const stats = [
  { value: '40K+', label: 'Happy Customers' },
  { value: '4.9', label: 'Average Rating' },
  { value: '120+', label: 'Countries Shipped' },
  { value: '30-Day', label: 'Money-Back' },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', { content_name: 'newsletter_signup', status: 'submitted' })
    setNewsletterSubmitted(true)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-foreground text-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-purple-600/20" />
        </div>
        <div className="container-custom grid lg:grid-cols-2 gap-8 items-center py-20 lg:py-32 relative">
          {/* Text */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-background/10 border border-background/20 rounded-full px-4 py-1.5">
              <Zap className="h-3.5 w-3.5 text-blue-400 fill-current" />
              <span className="text-xs uppercase tracking-[0.2em] text-background/80">Smart Home Lighting</span>
            </div>
            <h1 className="text-display font-heading font-bold text-balance leading-[1.05]">
              Light Up
              <span className="block text-blue-400">Every Room.</span>
            </h1>
            <p className="text-lg text-background/70 max-w-md leading-relaxed">
              Immersive LED lighting that responds to music, voice commands, and your mood.
              Designed for the modern home. Setup in under 5 minutes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all"
                prefetch={true}
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-background/30 hover:border-background/70 text-background px-8 py-3.5 text-sm font-semibold uppercase tracking-wide transition-colors"
                prefetch={true}
              >
                Our Story
              </Link>
            </div>
            {/* Mini social proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm text-background/60">
                <strong className="text-background">4.9/5</strong> — Loved by 40,000+ customers
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glow-blue">
              <Image
                src={HERO_IMAGE}
                alt="LumiX Smart LED Lighting in a modern living room"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Floating badge */}
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-white fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Setup in 5 min</p>
                    <p className="text-xs text-muted-foreground">No tools needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-b bg-muted/40">
        <div className="container-custom py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl lg:text-3xl font-bold font-heading">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Why LumiX</p>
            <h2 className="text-h2 font-heading font-bold">Lighting Reimagined</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group p-8 border rounded-xl hover:border-blue-400/50 hover:shadow-md transition-all bg-background">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                  <f.icon className="h-6 w-6 text-blue-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold font-heading mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collections */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-[3/4] bg-muted rounded animate-pulse" />
              ))}
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* Brand Story Section */}
      <section className="py-section bg-muted/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden relative">
                <Image
                  src={ROOM_IMAGE_1}
                  alt="Modern living room with LumiX lighting"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="aspect-[3/4] bg-muted rounded-xl overflow-hidden relative mt-8">
                <Image
                  src={ROOM_IMAGE_2}
                  alt="Bedroom with ambient LumiX lighting"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 lg:max-w-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Our Philosophy</p>
              <h2 className="text-h2 font-heading font-bold">
                Your Home. <br />Your Atmosphere.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe the right light changes everything — your mood, your productivity, your memories.
                LumiX brings cinema-quality ambiance to every home, without the complexity or the cost.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every product we sell is tested for durability, energy efficiency, and ease of use.
                If it is not in our own homes, it does not make it to yours.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide group"
                prefetch={true}
              >
                Learn More
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop CTA Banner */}
      <section className="py-section bg-foreground text-background">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-background/50">Limited Time</p>
            <h2 className="text-h1 font-heading font-bold">
              Free Shipping This Week Only
            </h2>
            <p className="text-background/70 text-lg">
              On all orders over R750. Use code <span className="font-bold text-blue-400">LUMIFREE</span> at checkout.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide transition-all"
            >
              Claim Free Shipping
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-section-sm border-b">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            <div className="flex items-center gap-4 justify-center text-center md:text-left md:justify-start">
              <Truck className="h-6 w-6 flex-shrink-0 text-blue-500" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over R750</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <RotateCcw className="h-6 w-6 flex-shrink-0 text-blue-500" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">No questions asked</p>
              </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end text-center md:text-right">
              <Shield className="h-6 w-6 flex-shrink-0 text-blue-500" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold">Secure Checkout</p>
                <p className="text-xs text-muted-foreground">256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-section">
        <div className="container-custom max-w-xl text-center">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
            <Zap className="h-6 w-6 text-blue-500 fill-current" />
          </div>
          <h2 className="text-h2 font-heading font-bold">Stay Illuminated</h2>
          <p className="mt-3 text-muted-foreground">
            Early access to new drops, exclusive deals, and smart home tips — straight to your inbox.
          </p>
          {newsletterSubmitted ? (
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-green-700">You are in. Welcome to LumiX.</p>
            </div>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border border-border bg-transparent px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-blue-400 focus:outline-none transition-colors rounded-lg"
              />
              <button
                type="submit"
                className="bg-foreground text-background px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap rounded-lg"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
