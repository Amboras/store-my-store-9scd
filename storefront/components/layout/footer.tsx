'use client'

import Link from 'next/link'
import { Zap, Instagram, Twitter, Youtube } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'New Arrivals', href: '/products?sort=newest' },
    { label: 'Collections', href: '/collections' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container-custom py-section-sm">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex items-center justify-center w-7 h-7 bg-background rounded">
                <Zap className="h-4 w-4 text-foreground fill-current" />
              </div>
              <span className="font-heading text-xl font-bold">LumiX</span>
            </Link>
            <p className="mt-4 text-sm text-background/60 leading-relaxed max-w-xs">
              Smart ambient lighting designed for the modern home. Transform any space in seconds.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-background/20 hover:border-background/60 transition-colors">
                <Instagram className="h-4 w-4 text-background/70" />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-full border border-background/20 hover:border-background/60 transition-colors">
                <Twitter className="h-4 w-4 text-background/70" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full border border-background/20 hover:border-background/60 transition-colors">
                <Youtube className="h-4 w-4 text-background/70" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-background/50">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-background/50">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-background/50">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} LumiX. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-background/40 hover:text-background/70 transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-background/30">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
