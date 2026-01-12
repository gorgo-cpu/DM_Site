'use client'

const BRAND_NAME = 'DM Growth'
const LEGAL_EFFECTIVE_DATE = 'January 9, 2026'

const COMPANY_DETAILS = {
  name: '',
  address: '',
  representative: '',
}

const DPO_DETAILS = {
  name: '',
  address: '',
  phone: '',
  email: '',
}

export type LegalSection = 'terms' | 'privacy' | null

export const legalMeta = {
  effectiveDate: LEGAL_EFFECTIVE_DATE,
  company: COMPANY_DETAILS,
  dpo: DPO_DETAILS,
}

export function TermsContent() {
  const hasAddress = Boolean(COMPANY_DETAILS.address)
  const hasRepresentative = Boolean(COMPANY_DETAILS.representative)

  return (
    <section id="legal-terms" className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Terms &amp; Conditions</p>
        <h2 className="text-2xl font-semibold text-slate-900">{BRAND_NAME} – Terms &amp; Conditions</h2>
        <p className="text-sm text-slate-500">Effective date: {LEGAL_EFFECTIVE_DATE}</p>
      </div>

      <div className="space-y-4 text-slate-800">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">1. Company Details</h3>
          <p>{COMPANY_DETAILS.name || BRAND_NAME}</p>
          {hasAddress && <p>{COMPANY_DETAILS.address}</p>}
          {hasRepresentative && <p>Represented by: {COMPANY_DETAILS.representative}</p>}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">2. Scope</h3>
          <p>
            These terms govern your use of this website, newsletter registration, and any services offered
            through the site. By using the site you agree to these terms; if you do not agree, please refrain
            from using the site.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">3. Use of the Site</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Provide accurate information and use the site only for lawful purposes.</li>
            <li>Do not disrupt, reverse-engineer, or misuse the site, its security, or its availability.</li>
            <li>Content on the site is protected; do not reuse it without prior permission.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">4. Accounts &amp; Newsletter</h3>
          <p>
            If you register or subscribe, keep your credentials confidential. You may unsubscribe from the
            newsletter at any time via the link in each email or by contacting us. If we obtained your email
            in connection with a sale of goods or services, we may send similar offers unless you object; you
            can opt out at any time at no cost beyond basic rates.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">5. Services and Changes</h3>
          <p>
            We may modify, suspend, or discontinue parts of the site or services. Where reasonable, we will
            provide notice of material changes.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">6. Liability</h3>
          <p>
            We are liable only for intent and gross negligence. For slight negligence, we are liable only for
            breaches of essential contractual obligations (cardinal duties) and limited to foreseeable damages
            typical for this type of contract. We do not exclude liability where prohibited by law, including
            for injury to life, body, or health.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">7. Third-Party Services</h3>
          <p>
            We may use processors and service providers, including outside the EU/EEA, with appropriate
            safeguards (such as Standard Contractual Clauses). Details on personal data processing are set out
            in the Privacy Notice.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">8. Governing Law and Venue</h3>
          <p>
            German law applies. Mandatory consumer protections in your country of residence remain unaffected.
            Where legally permissible, the courts of Stuttgart, Germany, have jurisdiction.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">9. Contact</h3>
          <p>
            For legal or data protection inquiries, please contact {BRAND_NAME}.
          </p>
        </div>
      </div>
    </section>
  )
}

export function PrivacyContent() {
  const hasAddress = Boolean(COMPANY_DETAILS.address)
  const hasRepresentative = Boolean(COMPANY_DETAILS.representative)
  const hasDpo = Boolean(DPO_DETAILS.name || DPO_DETAILS.address || DPO_DETAILS.phone || DPO_DETAILS.email)

  return (
    <section id="legal-privacy" className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Privacy Notice</p>
        <h2 className="text-2xl font-semibold text-slate-900">{BRAND_NAME} – Privacy Notice</h2>
        <p className="text-sm text-slate-500">Effective date: {LEGAL_EFFECTIVE_DATE}</p>
      </div>

      <div className="space-y-4 text-slate-800">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">Controller</h3>
          <p>{COMPANY_DETAILS.name || BRAND_NAME}</p>
          {hasAddress && <p>{COMPANY_DETAILS.address}</p>}
          {hasRepresentative && <p>Represented by: {COMPANY_DETAILS.representative}</p>}
          {hasDpo && (
            <p className="text-slate-700">
              Data Protection Officer: {DPO_DETAILS.name}, {DPO_DETAILS.address}, Tel: {DPO_DETAILS.phone}, Email: {DPO_DETAILS.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">1) What Data We Process</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Data you provide to us (e.g., contact details, newsletter sign-up, application data).</li>
            <li>Technical data from your device that is necessary to provide the site (e.g., connection logs).</li>
            <li>No additional personal data is collected unless you choose to provide it.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">2) Purposes</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Contract performance and responding to inquiries.</li>
            <li>Newsletter delivery (with consent or permissible direct marketing for similar products/services; opt-out anytime).</li>
            <li>Running video conferences or webinars you join.</li>
            <li>Handling applications for open roles.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">3) Legal Bases</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Performance of a contract or pre-contractual steps (Art. 6(1)(b) GDPR).</li>
            <li>Consent (Art. 6(1)(a) GDPR) for optional features like the newsletter; you can withdraw consent anytime.</li>
            <li>Legitimate interests (Art. 6(1)(f) GDPR) for security, service improvement, and similar direct marketing, unless you object.</li>
            <li>Legal obligations (Art. 6(1)(c) GDPR) for retention and disclosures.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">4) Recipients</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Public authorities where legally required.</li>
            <li>External processors/service providers (e.g., hosting, newsletter delivery, conferencing).</li>
            <li>Other third parties with your consent or where allowed by overriding interests.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">5) International Transfers</h3>
          <p>
            Processors outside the EU/EEA may be used. Safeguards such as Standard Contractual Clauses apply to
            protect your data.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">6) Retention</h3>
          <ul className="list-disc space-y-1 pl-5">
            <li>Customer and contract data: generally 10 years per statutory retention.</li>
            <li>Applicant data: usually deleted within 4 months after a decision unless you consent to longer storage.</li>
            <li>Technical logs: deleted when no longer needed for their purpose.</li>
            <li>Newsletter data: stored until you unsubscribe or withdraw consent.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">7) Newsletter Details</h3>
          <p>
            We store your email (and optional data you provide) to send the newsletter. You can unsubscribe at
            any time via the link in each email or by contacting us. If we received your email through a sale
            of goods or services, we may send similar offers; you can opt out at any time at no cost beyond
            basic rates.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">8) Cookies</h3>
          <p>
            We use our own cookies to improve usability; no personal data is stored in them. You can block
            cookies via your browser settings.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">9) Video Conferences / Webinars</h3>
          <p>
            Data processed: name, email, optional audio/video, chat questions, and technical data needed to
            connect. Purpose: delivering video conferences/webinars. Recipients: processors/hosts (including
            outside the EU, e.g., USA) under Standard Contractual Clauses. Recordings only with prior
            documented consent. Technical data is deleted when no longer required.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">10) Your Rights</h3>
          <p>
            You have rights to access, rectification, erasure, restriction, data portability, and objection to
            processing, as well as the right to withdraw consent. You may complain to a data protection
            supervisory authority.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">11) Contact</h3>
          <p>
            For privacy requests, reach out to {BRAND_NAME}.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-900">12) Updates</h3>
          <p>
            We may update this notice; material changes will be highlighted on this page. Please review it
            periodically for the latest version.
          </p>
        </div>
      </div>
    </section>
  )
}
