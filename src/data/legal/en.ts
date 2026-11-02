// Privacy Policy and Terms of Use (English). Spanish and German versions are in es.ts
// and de.ts with the same shape; keep all three in step when anything changes, and
// update `updated` in each.
//
// Paragraphs may contain simple HTML links. A string array inside `body` is a bullet
// list. {contact} and {privacy} are replaced with links to those pages on the site.

export type LegalSection = { heading: string; body: (string | string[])[] };
export type LegalDoc = { title: string; description: string; intro: string[]; sections: LegalSection[] };
export type Legal = { updated: string; privacy: LegalDoc; terms: LegalDoc };

const github = '<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub Privacy Statement</a>';
const formspree = '<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Formspree privacy policy</a>';

export const en: Legal = {
  updated: 'November 2, 2026',

  privacy: {
    title: 'Privacy Policy',
    description: 'What information this website collects, why, and what happens to it.',
    intro: [
      'This policy explains what information this website collects, why, and what happens to it. The site is a personal portfolio run by Steven Avant in Virginia Beach, Virginia, USA, who is responsible for the information described here.',
    ],
    sections: [
      {
        heading: 'The short version',
        body: [
          'This site uses no cookies, no analytics, no advertising, and no tracking. The only personal information it collects is what you choose to send through the contact form, and that is used only to reply to you.',
        ],
      },
      {
        heading: 'The contact form',
        body: [
          'When you send a message, the form collects:',
          [
            'your name and email address',
            'what your message is about, and the message itself',
            'your company, job title, and phone number, if you choose to give them',
            'the language of the page you sent it from',
          ],
          'The form is delivered by Formspree (formspree.io), a form-forwarding service that passes your message on to Steven’s email inbox. Formspree handles it under the ' + formspree + '.',
          'Your information is used only to read and answer your inquiry and to follow up on any work that comes from it. It is never sold, shared for marketing, or added to a mailing list.',
          'If you are in the European Union or the United Kingdom: the legal basis is your request to be contacted and any steps taken before entering into a contract with you (GDPR Article 6(1)(b)), and Steven’s legitimate interest in answering inquiries (Article 6(1)(f)).',
        ],
      },
      {
        heading: 'Hosting and server logs',
        body: [
          'The site is hosted on GitHub Pages, run by GitHub, Inc. Like any website, your browser sends technical details with each request, such as your IP address, browser type, the page requested, and the time. GitHub may log these to run and protect its service, as described in the ' + github + '. Steven does not receive or have access to these logs.',
        ],
      },
      {
        heading: 'Storage in your browser',
        body: [
          'The site sets no cookies. It saves three small settings in your own browser so it works as expected:',
          [
            '<strong>theme</strong>: whether you chose the light or dark look',
            '<strong>terms-agreed</strong>: that you accepted the acceptable-use notice, so it isn’t shown again',
            '<strong>contact-sent-at</strong>: when you last sent a message, to stop repeat sends within a minute. It is deleted when you close the tab.',
          ],
          'These stay on your device and are never sent to anyone. You can clear them at any time in your browser’s settings.',
        ],
      },
      {
        heading: 'Other services and links',
        body: [
          'The site’s font and code are served from the site itself, so your browser doesn’t contact other companies while you read it. The only outside connection is to Formspree, and only when you send the contact form.',
          'The footer links to Steven’s LinkedIn profile. Once you follow it you are on LinkedIn, and LinkedIn’s own privacy policy applies.',
        ],
      },
      {
        heading: 'How long information is kept',
        body: [
          'Messages are kept only as long as needed to answer your inquiry and follow up on any resulting work, and are then deleted. You can ask for your message to be deleted sooner at any time.',
        ],
      },
      {
        heading: 'Your rights',
        body: [
          'You can ask to see the information Steven holds about you, to have it corrected, or to have it deleted. If you are in the European Union or the United Kingdom, you also have the right to object to or restrict its use, to receive a copy in a portable format, and to complain to your local data protection authority.',
          'To make a request, use the {contact} and choose “Something else”. To protect your information, Steven may reply to the email address you originally wrote from to confirm the request is yours.',
        ],
      },
      {
        heading: 'Where information is processed',
        body: [
          'Steven is in the United States, so information you send is processed in the United States, where data protection law may differ from the law in your country.',
        ],
      },
      {
        heading: 'Security',
        body: [
          'The site is served only over an encrypted (HTTPS) connection and uses a strict security policy and spam protection on the form. No method of sending information over the internet is completely secure, so please don’t include passwords, financial details, government ID numbers, or other sensitive information in a message.',
        ],
      },
      {
        heading: 'Children',
        body: [
          'This site is meant for employers and clients and is not directed at children. It does not knowingly collect information from anyone under 16. If you believe a child has sent a message, use the {contact} and it will be deleted.',
        ],
      },
      {
        heading: 'Changes to this policy',
        body: [
          'If this policy changes, the new version will be posted on this page with a new “last updated” date.',
        ],
      },
      {
        heading: 'Questions',
        body: ['For any question about this policy or your information, use the {contact}.'],
      },
    ],
  },

  terms: {
    title: 'Terms of Use',
    description: 'The rules for using this website and the information on it.',
    intro: [
      'These terms apply to everyone who visits this website, which is run by Steven Avant. By using the site you agree to them. If you don’t agree, please don’t use the site.',
    ],
    sections: [
      {
        heading: 'What this site is for',
        body: [
          'This site shares Steven’s professional background so that employers and clients can learn about his work and get in touch. It is for information only. Nothing on it is an offer, a quote, or a contract; any work is agreed separately and in writing.',
        ],
      },
      {
        heading: 'Acceptable use',
        body: [
          'You may use the information on this site only for lawful, professional purposes, such as considering Steven for a job, a contract, or a private job. You agree not to:',
          [
            'use it for fraud, identity theft, impersonation, phishing, or social engineering, including against Steven or any employer named here',
            'harass, threaten, or stalk anyone',
            'send spam, unsolicited marketing, or automated messages through the contact form',
            'copy, scrape, collect, or resell the information on this site, or use it to build profiles of anyone',
            'use the site’s content to train artificial intelligence or machine learning systems',
            'try to break, overload, probe, or get around the site’s security, or send malicious code through the form',
          ],
        ],
      },
      {
        heading: 'Ownership and permitted sharing',
        body: [
          'The text, design, and graphics on this site belong to Steven Avant. You are welcome to share links to it and to quote short parts of it, with credit, when considering Steven for work. Any other copying or reuse needs his written permission.',
          'Product, company, and brand names mentioned on the site belong to their owners and are used only to describe Steven’s experience. Former and current employers named here do not run, endorse, or speak through this site.',
        ],
      },
      {
        heading: 'No guarantees',
        body: [
          'Steven keeps the information here accurate and current to the best of his ability, but it may change without notice. The site is provided “as is”, without warranties of any kind, and may sometimes be unavailable.',
        ],
      },
      {
        heading: 'Limitation of liability',
        body: [
          'To the fullest extent the law allows, Steven is not liable for any loss or damage that comes from using this site or relying on its content.',
        ],
      },
      {
        heading: 'Messages you send',
        body: [
          'You are responsible for what you send through the contact form. Please don’t include information you aren’t authorized to share. Sending a message doesn’t create a contract or an obligation to reply. How messages are handled is explained in the {privacy}.',
        ],
      },
      {
        heading: 'Links to other sites',
        body: [
          'The site links to services run by others, such as LinkedIn. Steven isn’t responsible for their content or practices, and their own terms apply once you leave this site.',
        ],
      },
      {
        heading: 'Governing law',
        body: [
          'These terms are governed by the laws of the Commonwealth of Virginia, USA, without regard to its conflict-of-law rules, and any dispute will be handled by the courts located in Virginia. This doesn’t remove any rights you have under the mandatory consumer protection laws of the country where you live.',
        ],
      },
      {
        heading: 'Changes to these terms',
        body: [
          'If these terms change, the new version will be posted on this page with a new “last updated” date. Continuing to use the site after a change means you accept the new terms.',
        ],
      },
      {
        heading: 'Questions',
        body: ['For any question about these terms, use the {contact}.'],
      },
    ],
  },
};
