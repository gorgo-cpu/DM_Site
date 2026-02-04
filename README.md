# DM Growth 

A high-end, conversion-optimized marketing website built with Next.js 14, TypeScript, Tailwind CSS, and Anime.js. Features smooth animations, a working contact form with email delivery, and production-grade performance.

## Tech Stack

- **Framework**: Next.js 14.1+ (App Router)
- **Language**: TypeScript 5.9+
- **Styling**: Tailwind CSS 4.1+
- **Animation**: Anime.js 4.2+
- **Form Validation**: Zod 4.3+
- **Email**: Resend 6.6+
- **Linting**: ESLint (Next.js config)

## Features

- ✨ Smooth scroll animations with IntersectionObserver
- 🎯 Conversion-optimized layout and CTAs
- 📧 Working contact form with spam protection
- 🚀 Production-grade performance (90+ Lighthouse scores)
- ♿ WCAG accessibility standards
- 📱 Fully responsive (mobile → desktop)
- 🎨 Premium dark theme with custom design tokens
- 🔒 Rate limiting and honeypot spam protection
- 📊 Analytics-ready (stub included)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Resend account (free tier available at [resend.com](https://resend.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd DM_SITE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   # Required
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_TO_EMAIL=hello@yourdomain.com

   # Optional
   NEXT_PUBLIC_SITE_URL=https://yoursite.com
   ```

   - Get your Resend API key from [resend.com/api-keys](https://resend.com/api-keys)
   - Set `CONTACT_TO_EMAIL` to where you want form submissions sent

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from Resend for sending emails |
| `CONTACT_TO_EMAIL` | Yes | Email address to receive contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | No | Your site's production URL (for metadata) |

## Project Structure

```
DM_SITE/
├── app/
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page (all sections)
│   └── globals.css             # Global styles + design tokens
├── components/
│   ├── animations/             # Anime.js animation wrappers
│   ├── layout/                 # Navigation, Footer, ScrollReveal
│   ├── sections/               # Page sections (Hero, Pricing, etc.)
│   └── ui/                     # Reusable UI components
├── lib/
│   ├── analytics.ts            # Analytics stub
│   ├── email.ts                # Resend email integration
│   ├── rateLimit.ts            # In-memory rate limiter
│   └── validation.ts           # Zod schemas
├── docs/
│   └── page-spec.md            # Design specification
└── public/                     # Static assets
```

## Scripts

```bash
# Development
npm run dev          # Start dev server on http://localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## Content Editing Guide

### Updating Copy

All content is in the component files. To edit:

1. **Hero Section** → `components/sections/Hero.tsx`
   - Main headline, subheading, CTA button text

2. **Problems Section** → `components/sections/Problems.tsx`
   - Challenge cards (title, description, icons)

3. **Solution Section** → `components/sections/Solution.tsx`
   - Feature cards with benefits

4. **Process Section** → `components/sections/Process.tsx`
   - 6-step timeline descriptions

5. **Results Section** → `components/sections/Results.tsx`
   - Stats, testimonials

6. **Pricing Section** → `components/sections/Pricing.tsx`
   - Pricing tiers, features, prices

7. **Contact Form** → `components/sections/ContactForm.tsx`
   - Form labels, placeholder text

### Updating Metadata (SEO)

Edit `app/layout.tsx`:
- Page title
- Meta description
- OpenGraph tags
- Keywords

### Updating Navigation

Edit `components/layout/Navigation.tsx`:
- Logo text
- Nav links
- CTA button

### Updating Footer

Edit `components/layout/Footer.tsx`:
- Company info
- Social links
- Contact details

## Design System

### Typography

- **Font**: Plus Jakarta Sans (Google Fonts)
- **Headings**: Bold, tight tracking (-0.02em)
- **Body**: Regular, comfortable line-height (1.6)
- **Scale**: 14px → 16px → 18px → 24px → 32px → 48px → 64px

### Colors

```css
/* Primary (Dark Blues) */
--color-primary: #0f172a
--color-primary-light: #1e293b
--color-surface: #020617

/* Accent (Cyan) */
--color-accent: #06b6d4
--color-accent-dark: #0891b2

/* Text */
--color-text-primary: #f8fafc
--color-text-secondary: #cbd5e1
--color-text-muted: #94a3b8
```

### Spacing Scale

Base unit: **8px**

- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px
- 4xl: 128px

### Shadows

- **sm**: Subtle card lift
- **md**: Prominent hover state
- **lg**: Modal/dropdown elevation
- **xl**: Maximum depth

### Border Radius

- **sm**: 4px (inputs)
- **md**: 8px (cards)
- **lg**: 16px (sections)
- **full**: 9999px (buttons)

### Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px → 1024px
- **Desktop**: > 1024px

## Contact Form

### Features

- ✅ Client-side validation with real-time feedback
- ✅ Server-side validation with Zod
- ✅ Rate limiting (3 requests per 10 minutes per IP)
- ✅ Honeypot spam protection
- ✅ Structured HTML email delivery
- ✅ Loading states and success/error messages
- ✅ Accessible form labels and ARIA attributes

### Rate Limiting

Current implementation uses in-memory storage. For production with multiple instances:

**Upgrade to distributed rate limiting:**
- [Upstash Redis](https://upstash.com) - Serverless Redis
- [Vercel KV](https://vercel.com/storage/kv) - Vercel's key-value store
- Redis Cloud - Traditional Redis hosting

See comments in `lib/rateLimit.ts` for implementation notes.

### Email Customization

Edit `lib/email.ts` to customize:
- Email template HTML
- Subject line format
- Metadata included
- From address (requires Resend domain verification)

## Animations

### Reduced Motion Support

All animations respect `prefers-reduced-motion` user preference. When enabled, animations are disabled or simplified.

### Animation Types

1. **Hero headline** - Staggered word reveal (Anime.js)
2. **Scroll reveals** - Fade-up with scale (IntersectionObserver)
3. **Button interactions** - Hover and press effects
4. **Stat counters** - Animated counting on scroll into view

### Customizing Animations

- **Timing**: Edit `app/globals.css` CSS variables
- **Scroll reveals**: Adjust threshold/delay in `components/layout/ScrollReveal.tsx`
- **Hero animation**: Modify `components/animations/HeroAnimation.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Import project at [vercel.com](https://vercel.com)
3. Add environment variables in dashboard
4. Deploy automatically

**Environment Variables to Add:**
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`

### Cloudflare Pages (Alternative)

1. Build command: `npm run build`
2. Output directory: `.next`
3. Add environment variables
4. Deploy

**Note**: API routes work with Cloudflare Pages, but you may need to configure adapter settings.

### Other Platforms

Works with any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## Performance Optimization

### Current Optimizations

- ✅ Next.js automatic code splitting
- ✅ Image optimization with next/image
- ✅ Font optimization with next/font
- ✅ CSS tree-shaking via Tailwind
- ✅ Minimal JavaScript bundle (Anime.js only where needed)

### Lighthouse Targets

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Tips for Better Performance

1. **Images**: Use WebP/AVIF formats, optimize before upload
2. **Fonts**: Keep font subsets minimal
3. **Analytics**: Use lightweight providers (Plausible, Fathom)
4. **Third-party scripts**: Lazy load non-critical scripts

## Analytics Integration

The project includes an analytics stub at `lib/analytics.ts`.

### Adding Analytics

Uncomment the provider you want in `lib/analytics.ts`:

**Google Analytics:**
```typescript
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', event.name, event.properties)
}
```

**Plausible:**
```typescript
if (typeof window !== 'undefined' && (window as any).plausible) {
  (window as any).plausible(event.name, { props: event.properties })
}
```

Then add the script tag to `app/layout.tsx`.

## Accessibility

### Standards Met

- ✅ WCAG 2.1 Level AA
- ✅ Semantic HTML5 landmarks
- ✅ Keyboard navigation
- ✅ Focus visible indicators
- ✅ Screen reader friendly
- ✅ Color contrast ratios
- ✅ Form labels and error announcements

### Testing

Run accessibility audits with:
- Chrome Lighthouse
- axe DevTools
- WAVE browser extension

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Troubleshooting

### Contact form not sending emails

1. Check `RESEND_API_KEY` is set correctly
2. Verify `CONTACT_TO_EMAIL` is a valid email
3. Check Resend dashboard for error logs
4. Ensure Resend API key has sending permissions

### Animations not working

1. Check browser console for errors
2. Verify Anime.js is installed: `npm list animejs`
3. Check if `prefers-reduced-motion` is enabled in OS settings

### Build errors

1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check Node.js version: `node --version` (should be 18+)

## Contributing

This is a template project. Feel free to:
- Modify styles and content
- Add new sections
- Integrate additional services
- Customize for your brand

## License

ISC

## Support

For issues or questions:
1. Check this README
2. Review `docs/page-spec.md` for design guidance
3. Check component comments for inline documentation

---

**Built with Next.js, TypeScript, Tailwind CSS, and Anime.js**



