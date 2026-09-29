import React from 'react';
import LegalPage, { Section, List, ContactBox } from './LegalPage.jsx';

const A = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#00A39B] font-semibold hover:underline">
    {children}
  </a>
);

// Edit LAST_UPDATED whenever the policy text changes.
const LAST_UPDATED = '29 September 2026';

export default function PrivacyPolicy() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated={LAST_UPDATED}
      intro="Syfinor Technologies Private Limited (“Syfinor”, “we”, “us”) respects your privacy. This policy explains what personal data we collect through syfinor.com, why we collect it, how we protect it, and the choices you have."
    >
      <Section n={1} title="Who we are">
        <p>
          Syfinor is a banking technology and consulting company registered in India. For the purposes of India’s Digital
          Personal Data Protection Act, 2023 (“DPDP Act”) and applicable rules, Syfinor is the Data Fiduciary for personal
          data collected through this website.
        </p>
        <ContactBox />
      </Section>

      <Section n={2} title="What we collect">
        <p>We only collect personal data that you choose to give us, or that is technically necessary to show you this website:</p>
        <List
          items={[
            <><strong>Contact form:</strong> first and last name, work email address, organisation, enquiry type and the message you write.</>,
            <><strong>WhatsApp chat:</strong> if you use the WhatsApp button, your phone number, profile name and the messages you send us through WhatsApp.</>,
            <><strong>Email and phone:</strong> any details you share when you email or call us directly.</>,
            <><strong>Technical data:</strong> like any website, your browser sends your IP address and basic device/browser information when pages, fonts and images are loaded. We do not use this to identify you.</>,
          ]}
        />
        <p>
          We do not knowingly collect sensitive personal data such as financial account details, health information or
          government identifiers through this website. Please do not include such information in your message.
        </p>
      </Section>

      <Section n={3} title="Why we use it">
        <List
          items={[
            'To respond to your enquiry and provide the information, proposal or support you asked for.',
            'To follow up on a business relationship you have started with us, such as a project discussion or meeting.',
            'To keep a record of our correspondence and to protect our legal rights.',
            'To keep the website secure and working properly.',
          ]}
        />
        <p>
          We use your data on the basis of the consent you give when you submit the contact form or message us, and for
          legitimate uses permitted by law. We do not sell your personal data, and we do not send marketing newsletters
          without your separate agreement.
        </p>
      </Section>

      <Section n={4} title="Who we share it with">
        <p>We share personal data only with service providers that help us run this website and communicate with you:</p>
        <List
          items={[
            <>
              <strong>FormSubmit</strong> — delivers contact-form submissions to our mailbox (
              <A href="https://formsubmit.co/privacy-policy">privacy policy</A>).
            </>,
            <><strong>Our email provider</strong> — hosts the info@syfinor.com mailbox where enquiries are received and stored.</>,
            <>
              <strong>WhatsApp (Meta)</strong> — if you choose to chat with us on WhatsApp (
              <A href="https://www.whatsapp.com/legal/privacy-policy">privacy policy</A>).
            </>,
            <>
              <strong>Google Fonts</strong> — serves the fonts used on this site, which means Google receives your IP address (
              <A href="https://policies.google.com/privacy">privacy policy</A>).
            </>,
            <><strong>GitHub Pages</strong> — hosts this website and may keep standard server logs.</>,
          ]}
        />
        <p>
          Some of these providers process data outside India. Where this happens, we rely on providers that apply
          recognised security safeguards, and we comply with any transfer restrictions notified under the DPDP Act. We
          may also disclose data where required by law or by a court, regulator or government authority.
        </p>
      </Section>

      <Section n={5} title="How long we keep it">
        <p>
          We keep enquiry details only for as long as needed to respond to you and manage any resulting business
          relationship — generally no longer than three years after our last communication — unless a longer period is
          required by law. After that, we delete the data or make it anonymous.
        </p>
      </Section>

      <Section n={6} title="How we protect it">
        <p>
          The website is served only over encrypted HTTPS connections, and enquiries are stored in access-controlled,
          business email accounts. Only Syfinor staff who need the information to respond to you can see it. No method of
          transmission or storage is completely secure, but we take reasonable security safeguards to protect your data
          against unauthorised access, loss or misuse.
        </p>
      </Section>

      <Section n={7} title="Cookies">
        <p>
          This website does <strong>not</strong> set cookies and does not use analytics, advertising or tracking tools.
          Third-party services that you actively choose to use from the site (such as WhatsApp or LinkedIn) may set their
          own cookies under their own policies. If we introduce cookies or analytics in future, we will update this policy
          and ask for your consent where required.
        </p>
      </Section>

      <Section n={8} title="Your rights">
        <p>Subject to applicable law, you have the right to:</p>
        <List
          items={[
            'ask what personal data we hold about you and how it is used;',
            'ask us to correct, complete, update or erase your personal data;',
            'withdraw your consent at any time (this does not affect processing already carried out);',
            'nominate another person to exercise your rights in the event of death or incapacity; and',
            'raise a grievance with us, and, if it is not resolved, complain to the Data Protection Board of India.',
          ]}
        />
        <p>
          To exercise any of these rights, email <A href="mailto:info@syfinor.com">info@syfinor.com</A> with the subject
          “Privacy request”. We may need to verify your identity before acting on a request, and we aim to respond within
          30 days.
        </p>
      </Section>

      <Section n={9} title="Grievances">
        <p>
          If you have a concern about how we handle your personal data, please contact our Grievance Officer at{' '}
          <A href="mailto:info@syfinor.com">info@syfinor.com</A> (subject: “Grievance – Privacy”) or write to us at the
          address above. We will acknowledge your grievance promptly and try to resolve it as quickly as possible.
        </p>
      </Section>

      <Section n={10} title="Children">
        <p>
          This website is intended for businesses and professionals. It is not directed at children, and we do not
          knowingly collect personal data from anyone under 18.
        </p>
      </Section>

      <Section n={11} title="Changes to this policy">
        <p>
          We may update this policy from time to time. The “Last updated” date at the top shows when it was last changed.
          Significant changes will be highlighted on this page.
        </p>
      </Section>
    </LegalPage>
  );
}
