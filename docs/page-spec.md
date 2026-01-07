# Marketing Website Page Specification

## Reference Analysis

This document outlines the generalized information architecture and interaction patterns observed from modern agency websites (like genflowsagency.com) without copying specific implementations.

## Page Structure & Narrative Flow

### 1. Navigation
- **Pattern**: Sticky header with transparent-to-solid transition on scroll
- **Elements**: Logo, nav links (smooth scroll anchors), CTA button
- **Behavior**: Minimal, non-intrusive, accessible on mobile (hamburger menu)

### 2. Hero Section
- **Goal**: Immediate impact, clear value proposition
- **Elements**:
  - Large, bold headline (1-2 lines, benefit-focused)
  - Supporting subheading (2-3 lines, pain point or promise)
  - Primary CTA (high contrast, action-oriented)
  - Secondary CTA (subtle, exploratory option)
- **Visual**: Gradient background, animated text reveal
- **Interaction**: Staggered headline animation on load

### 3. Problems/Options Section
- **Goal**: Show understanding of customer challenges
- **Pattern**: "Your Current Challenges" or "See Your Options"
- **Layout**: 3-column card grid (stacks on mobile)
- **Card Structure**:
  - Icon or visual indicator
  - Headline (pain point or option)
  - 2-3 sentence description
- **Interaction**: Hover lift effect, scroll-reveal fade-up

### 4. Solution Section
- **Goal**: Position the productized offer
- **Pattern**: "How We Solve It" or feature showcase
- **Layout**: Heading + 4-6 feature cards in responsive grid
- **Card Structure**:
  - Icon
  - Feature headline
  - Benefit description
- **Interaction**: Staggered scroll reveal

### 5. Process/Timeline Section
- **Goal**: Build trust through transparency
- **Pattern**: Step-by-step breakdown
- **Layout**: Vertical stepper with 4-6 numbered steps
- **Step Structure**:
  - Large number (01, 02, etc.)
  - Step title
  - 1-2 sentence description
  - Visual connector line between steps
- **Interaction**: Sequential reveal on scroll

### 6. Results/Social Proof Section
- **Goal**: Demonstrate credibility and outcomes
- **Elements**:
  - 3-4 stat counters (numbers with context)
  - 2-3 testimonial cards (quote, author, role, optional photo)
  - Optional: Logo wall of clients/partners
- **Interaction**: Animated counter on scroll-into-view, testimonial carousel or grid

### 7. Pricing Section
- **Goal**: Clear, actionable pricing options
- **Layout**: 3-tier pricing cards (emphasize middle tier)
- **Card Structure**:
  - Tier name
  - Price point
  - Feature bullet list (with checkmarks)
  - CTA button per tier
- **Interaction**: Hover scale/shadow, highlighted tier has different styling

### 8. Final CTA Band
- **Goal**: Strong conversion point before exit
- **Elements**:
  - Bold closing statement
  - Single prominent CTA button
  - Dark/contrasting background
- **Interaction**: Parallax or fixed background effect

### 9. Contact Form (In-page or Modal)
- **Goal**: Collect qualified leads
- **Fields**: Name (first/last), email, phone (optional), message
- **Features**:
  - Real-time validation
  - Clear success/error states
  - Loading indicator
  - Privacy assurance text
- **Interaction**: Smooth transitions, disabled state during submission

### 10. Footer
- **Layout**: Multi-column layout (nav, legal, contact)
- **Elements**:
  - Site navigation (smooth scroll links)
  - Legal links (Privacy, Terms)
  - Contact information
  - Social links (optional)
  - Copyright notice
- **Style**: Subtle, not competing with main content

## Interaction Patterns Observed

### Hover States
- **Buttons**: Scale (0.98), shadow shift, color transition
- **Cards**: Lift effect (translateY + shadow increase)
- **Links**: Underline slide-in, color transition

### Scroll Behaviors
- **Scroll Reveal**: Fade-up + scale (0.95 → 1) with stagger for groups
- **Navigation**: Transparent → solid background after hero
- **Parallax**: Subtle background movement (sparingly used)

### Animation Timing
- **Fast**: 150ms for hovers, clicks
- **Medium**: 300ms for transitions, reveals
- **Slow**: 500-700ms for page load animations
- **Stagger**: 60-100ms delay between sequential items

### CTA Placement Strategy
- **Hero**: Primary + Secondary
- **After Problems**: Optional "Learn More"
- **After Solution**: "Get Started" or "See Pricing"
- **Pricing Cards**: One per tier
- **Final CTA Band**: Last conversion opportunity
- **Navigation**: Persistent "Contact" or "Get Started" button

## Component Archetypes

### Cards
- Border or subtle shadow
- Hover state (lift or glow)
- Padding: 24-32px
- Border radius: 8-16px

### Buttons
- Primary: High contrast (accent color), white text
- Secondary: Transparent with border, subtle fill on hover
- Padding: 12-16px horizontal, 16-20px vertical
- Border radius: full (pill shape) or 8px
- Font: 14-16px, semibold

### Typography Scale
- Hero headline: 48-72px (responsive)
- Section headlines: 32-48px
- Card headlines: 20-24px
- Body text: 16-18px
- Small text: 14px

### Spacing Rhythm
- Section padding: 64-128px vertical
- Element spacing: 16-32px
- Container max-width: 1280px
- Container padding: 16-24px horizontal

## Accessibility Considerations

- Semantic HTML5 landmarks
- ARIA labels for icon-only buttons
- Focus visible indicators (ring)
- Keyboard navigation support
- Color contrast meeting WCAG AA
- Alt text for all images
- Form labels and error announcements

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3s

## Mobile Responsive Patterns

- **Navigation**: Hamburger menu below 768px
- **Cards**: Stack to single column below 640px
- **Typography**: Scale down 20-30% on mobile
- **Spacing**: Reduce vertical padding by ~40% on mobile
- **Touch targets**: Minimum 44x44px

---

*This specification is a generalized framework derived from analyzing modern marketing sites. All content, branding, and specific implementation details will be original.*

