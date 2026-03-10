/**
 * Plausible Analytics integration
 *
 * Page views are tracked automatically by the Plausible script tag in layout.tsx.
 * Custom events use this trackEvent helper.
 *
 * The Plausible script is gated behind NEXT_PUBLIC_ENABLE_ANALYTICS=true.
 * For Plausible to work, register the domain at https://plausible.io.
 * The script tag is safe to include before registration — it simply won't track.
 */

export function trackEvent(name: string, props?: Record<string, string>): void {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(name, { props })
  }
}
