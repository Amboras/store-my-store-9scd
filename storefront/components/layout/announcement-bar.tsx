'use client'

export default function AnnouncementBar() {
  const messages = [
    'Free Shipping on Orders Over R750',
    'Smart Home Lighting — Trusted by 40,000+ Customers',
    '30-Day Money-Back Guarantee',
    'Limited Stock — Order Before It Sells Out',
    'Free Shipping on Orders Over R750',
    'Smart Home Lighting — Trusted by 40,000+ Customers',
    '30-Day Money-Back Guarantee',
    'Limited Stock — Order Before It Sells Out',
  ]

  return (
    <div className="bg-foreground text-background overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap py-2.5">
        {messages.map((msg, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-10 text-xs uppercase tracking-widest font-medium">
            <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
            {msg}
          </span>
        ))}
      </div>
    </div>
  )
}
