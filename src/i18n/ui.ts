// Interface text in every language: navigation, buttons, form labels, messages.
// Page content (bio, jobs, skills) is in src/data/. English is the default and lives at
// the site root; other languages live under /es/ and /de/.

import { content } from '../data/resume';

export const languages = {
  en: { label: 'English', short: 'EN' },
  es: { label: 'Español', short: 'ES' },
  de: { label: 'Deutsch', short: 'DE' },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export type Page = 'home' | 'contact' | 'privacy' | 'terms';

/** URL of a page in a given language, e.g. /es/contact/. */
export function pagePath(lang: Lang, page: Page = 'home') {
  const prefix = lang === defaultLang ? '' : `${lang}/`;
  return `${base}${prefix}${page === 'home' ? '' : `${page}/`}`;
}

const strings = {
  en: {
    metaHomeTitle: (name: string, title: string) => `${name} | ${title}`,
    metaHomeDesc: (name: string, title: string, veteran: string, location: string) =>
      `${name} is a ${title} and ${veteran} in ${location}, running network, server, firewall, VoIP, and backup infrastructure across 19+ locations.`,
    skip: 'Skip to content',
    navLabel: 'Sections',
    nav: { about: 'About', systems: 'Systems', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    language: 'Language',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',

    basedIn: (veteran: string, location: string) => `${veteran}, based in ${location}.`,
    heroPrimary: 'Contact Steven',
    heroSecondary: 'See my experience',
    heroCaption: (sites: number, servers: string, people: string) =>
      `The network I run today: ${sites} locations, ${servers} physical and virtual servers, and ${people} employees and vendors.`,
    mapTitle: 'Network map of the environment Steven runs',
    mapDesc: (n: number) => `A schematic showing one core data center connected to ${n} retail and corporate locations.`,
    dataCenter: 'Data center',
    offsite: 'Offsite',

    aboutTitle: 'About',
    photoAlt: (name: string) => `Portrait of ${name}`,
    tourTitle: 'How it fits together',
    tourIntro: 'Scroll to build the environment one layer at a time, the same way I run it.',
    tourMapTitle: 'Network map with the current layer of the environment highlighted',
    tourAll: (n: number) => `All ${n} layers`,
    tourLayer: 'Layer {i} of {n}',
    tourStatus: 'Layer {i} of {n}: {title}',
    tourJump: 'Jump to a layer',
    tourShow: 'Show layer {i}: {title}',
    experienceTitle: 'Experience',
    dateRange: (start: string, end: string) => `${start} to ${end}`,
    projectsTitle: 'Projects',
    projectsIntro: 'Work at Haynes Furniture that went beyond keeping the lights on.',
    projectsDelivered: 'What each build delivers',
    skillsTitle: 'Skills',
    skillsIntro: 'The platforms and vendors I work with every week.',
    educationTitle: 'Education and service',

    contactTitle: 'Get in touch',
    contactBody:
      'Have a job offer, a contract, or a private job in mind? Send a message through the contact page and it comes straight to me.',
    contactLink: "Let's talk",

    footerContact: 'Contact',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerLinkedin: 'LinkedIn',
    footerLinkedinLabel: "Steven's LinkedIn profile (opens in a new tab)",

    contactMetaTitle: (name: string) => `Contact | ${name}`,
    contactMetaDesc: (name: string) =>
      `Get in touch with ${name} about a job offer, contract work, a private job, or consulting.`,
    contactH1: "Let's talk",
    contactIntro:
      "Whether it's a job offer for your company or a private job you need done, tell me a little about it and I'll get back to you.",
    responseLabel: 'Response',
    responseValue: 'Messages go straight to Steven, who replies by email.',
    basedLabel: 'Based in',
    openToLabel: 'Open to',
    openToValue: 'Job offers, contract work, private jobs, and consulting',
    fieldName: 'Your name',
    fieldEmail: 'Email',
    fieldCompany: 'Company',
    fieldTitle: 'Your title',
    fieldPhone: 'Phone',
    optional: '(optional)',
    fieldType: 'What is it about?',
    fieldMessage: 'Message',
    messagePlaceholder: 'Tell me about the role or the job, and when you need it.',
    // `value` is what Steven sees in the email, so it stays in English in every language.
    types: [
      { value: 'Job offer', label: 'Job offer' },
      { value: 'Contract or project work', label: 'Contract or project work' },
      { value: 'Private job', label: 'Private job (home or small business)' },
      { value: 'Consulting', label: 'Consulting' },
      { value: 'Something else', label: 'Something else' },
    ],
    // Shown instead of the form until profile.contactFormId is filled in.
    formPendingTitle: 'The contact form is almost ready',
    formPendingBody: 'It will be up shortly. In the meantime, you can reach Steven on LinkedIn.',
    formPendingLink: 'Message Steven on LinkedIn',
    send: 'Send message',
    privacyNote: 'Steven uses your details only to reply. See the {privacy}.',
    sending: 'Sending…',
    sendNote: "Goes straight to Steven's inbox.",
    sent: 'Thanks! Your message is on its way, and Steven will be in touch soon.',
    sendError: "Sorry, that didn't go through. Please check your connection and try again in a moment.",
    cooldown: 'Your message was already sent. Please wait a minute before sending another.',

    termsKicker: 'Before you continue',
    termsTitle: 'Acceptable use',
    termsP1: (name: string) => `This site shares ${name}'s professional background for hiring and business inquiries.`,
    termsP2:
      "Please confirm you'll use what you find here only for lawful purposes: no fraud, identity theft, impersonation, harassment, spam, or reselling his details.",
    termsCheck: 'I agree to use the information on this site only for lawful, professional purposes.',
    termsCta: 'Agree and contact Steven',
    termsContinue: 'Agree and continue',

    legalUpdated: 'Last updated',
    // Link text dropped into legal and form sentences in place of {contact} and {privacy}.
    legalContact: 'contact page',
    legalPrivacy: 'Privacy Policy',
    legalTerms: 'Terms of Use',
    termsRead: 'Read the full {terms} and {privacy}.',
  },

  es: {
    metaHomeTitle: (name: string, title: string) => `${name} | ${title}`,
    metaHomeDesc: (name: string, title: string, veteran: string, location: string) =>
      `${name} es ${title} y ${veteran} en ${location}. Gestiona la red, los servidores, los cortafuegos, la telefonía VoIP y las copias de seguridad de más de 19 sedes.`,
    skip: 'Saltar al contenido',
    navLabel: 'Secciones',
    nav: { about: 'Sobre mí', systems: 'Sistemas', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', contact: 'Contacto' },
    language: 'Idioma',
    themeToDark: 'Cambiar al tema oscuro',
    themeToLight: 'Cambiar al tema claro',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',

    basedIn: (veteran: string, location: string) => `${veteran}, con base en ${location}.`,
    heroPrimary: 'Contactar con Steven',
    heroSecondary: 'Ver mi experiencia',
    heroCaption: (sites: number, servers: string, people: string) =>
      `La red que gestiono hoy: ${sites} sedes, ${servers} servidores físicos y virtuales y ${people.replace(',', '.')} empleados y proveedores.`,
    mapTitle: 'Mapa de la red que gestiona Steven',
    mapDesc: (n: number) => `Un esquema con un centro de datos central conectado a ${n} sedes minoristas y corporativas.`,
    dataCenter: 'Centro de datos',
    offsite: 'Externa',

    aboutTitle: 'Sobre mí',
    photoAlt: (name: string) => `Retrato de ${name}`,
    tourTitle: 'Cómo encaja todo',
    tourIntro: 'Desplázate para construir el entorno capa a capa, tal como lo gestiono.',
    tourMapTitle: 'Mapa de la red con la capa actual del entorno resaltada',
    tourAll: (n: number) => `Las ${n} capas`,
    tourLayer: 'Capa {i} de {n}',
    tourStatus: 'Capa {i} de {n}: {title}',
    tourJump: 'Ir a una capa',
    tourShow: 'Mostrar la capa {i}: {title}',
    experienceTitle: 'Experiencia',
    dateRange: (start: string, end: string) => `${start} – ${end}`,
    projectsTitle: 'Proyectos',
    projectsIntro: 'Trabajo en Haynes Furniture que fue más allá de mantener todo en marcha.',
    projectsDelivered: 'Lo que incluye cada implantación',
    skillsTitle: 'Habilidades',
    skillsIntro: 'Las plataformas y los fabricantes con los que trabajo cada semana.',
    educationTitle: 'Formación y servicio',

    contactTitle: 'Hablemos',
    contactBody:
      '¿Tienes una oferta de empleo, un contrato o un trabajo particular en mente? Envía un mensaje desde la página de contacto y me llegará directamente.',
    contactLink: 'Escríbeme',

    footerContact: 'Contacto',
    footerPrivacy: 'Privacidad',
    footerTerms: 'Condiciones',
    footerLinkedin: 'LinkedIn',
    footerLinkedinLabel: 'Perfil de LinkedIn de Steven (se abre en una pestaña nueva)',

    contactMetaTitle: (name: string) => `Contacto | ${name}`,
    contactMetaDesc: (name: string) =>
      `Ponte en contacto con ${name} para una oferta de empleo, un contrato, un trabajo particular o una consultoría.`,
    contactH1: 'Hablemos',
    contactIntro:
      'Tanto si es una oferta de empleo para tu empresa como un trabajo particular que necesitas, cuéntame un poco y te responderé.',
    responseLabel: 'Respuesta',
    responseValue: 'Los mensajes llegan directamente a Steven, que responde por correo electrónico.',
    basedLabel: 'Ubicación',
    openToLabel: 'Disponible para',
    openToValue: 'Ofertas de empleo, contratos, trabajos particulares y consultoría',
    fieldName: 'Tu nombre',
    fieldEmail: 'Correo electrónico',
    fieldCompany: 'Empresa',
    fieldTitle: 'Tu cargo',
    fieldPhone: 'Teléfono',
    optional: '(opcional)',
    fieldType: '¿De qué se trata?',
    fieldMessage: 'Mensaje',
    messagePlaceholder: 'Cuéntame sobre el puesto o el trabajo, y para cuándo lo necesitas.',
    types: [
      { value: 'Job offer', label: 'Oferta de empleo' },
      { value: 'Contract or project work', label: 'Contrato o proyecto' },
      { value: 'Private job', label: 'Trabajo particular (hogar o pequeña empresa)' },
      { value: 'Consulting', label: 'Consultoría' },
      { value: 'Something else', label: 'Otro asunto' },
    ],
    formPendingTitle: 'El formulario de contacto estará listo muy pronto',
    formPendingBody: 'Lo activaremos en breve. Mientras tanto, puedes contactar con Steven en LinkedIn.',
    formPendingLink: 'Escribir a Steven en LinkedIn',
    send: 'Enviar mensaje',
    privacyNote: 'Steven solo usa tus datos para responderte. Consulta la {privacy}.',
    sending: 'Enviando…',
    sendNote: 'Llega directamente a la bandeja de entrada de Steven.',
    sent: '¡Gracias! Tu mensaje está en camino y Steven se pondrá en contacto contigo pronto.',
    sendError: 'Lo sentimos, no se pudo enviar. Comprueba tu conexión y vuelve a intentarlo en un momento.',
    cooldown: 'Tu mensaje ya se ha enviado. Espera un minuto antes de enviar otro.',

    termsKicker: 'Antes de continuar',
    termsTitle: 'Uso aceptable',
    termsP1: (name: string) =>
      `Este sitio muestra la trayectoria profesional de ${name} para ofertas de empleo y consultas de negocio.`,
    termsP2:
      'Confirma que usarás la información de este sitio solo con fines lícitos: nada de fraude, robo de identidad, suplantación, acoso, spam ni reventa de sus datos.',
    termsCheck: 'Acepto usar la información de este sitio solo con fines lícitos y profesionales.',
    termsCta: 'Aceptar y contactar con Steven',
    termsContinue: 'Aceptar y continuar',

    legalUpdated: 'Última actualización',
    legalContact: 'página de contacto',
    legalPrivacy: 'Política de privacidad',
    legalTerms: 'Condiciones de uso',
    termsRead: 'Lee las {terms} completas y la {privacy}.',
  },

  de: {
    metaHomeTitle: (name: string, title: string) => `${name} | ${title}`,
    metaHomeDesc: (name: string, title: string, veteran: string, location: string) =>
      `${name} ist ${title} und ${veteran} in ${location} und betreut Netzwerk, Server, Firewalls, VoIP und Backups an über 19 Standorten.`,
    skip: 'Zum Inhalt springen',
    navLabel: 'Bereiche',
    nav: { about: 'Über mich', systems: 'Systeme', experience: 'Erfahrung', projects: 'Projekte', skills: 'Kenntnisse', contact: 'Kontakt' },
    language: 'Sprache',
    themeToDark: 'Zum dunklen Design wechseln',
    themeToLight: 'Zum hellen Design wechseln',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',

    basedIn: (veteran: string, location: string) => `${veteran}, ansässig in ${location}.`,
    heroPrimary: 'Steven kontaktieren',
    heroSecondary: 'Meine Erfahrung',
    heroCaption: (sites: number, servers: string, people: string) =>
      `Das Netzwerk, das ich heute betreue: ${sites} Standorte, ${servers} physische und virtuelle Server und ${people.replace(',', '.')} Mitarbeitende und Dienstleister.`,
    mapTitle: 'Netzwerkkarte der Umgebung, die Steven betreut',
    mapDesc: (n: number) => `Ein Schema mit einem zentralen Rechenzentrum, das mit ${n} Filial- und Unternehmensstandorten verbunden ist.`,
    dataCenter: 'Rechenzentrum',
    offsite: 'Extern',

    aboutTitle: 'Über mich',
    photoAlt: (name: string) => `Porträt von ${name}`,
    tourTitle: 'Wie alles zusammenpasst',
    tourIntro: 'Scrollen Sie, um die Umgebung Schicht für Schicht aufzubauen, so wie ich sie betreibe.',
    tourMapTitle: 'Netzwerkkarte mit hervorgehobener aktueller Schicht der Umgebung',
    tourAll: (n: number) => `Alle ${n} Schichten`,
    tourLayer: 'Schicht {i} von {n}',
    tourStatus: 'Schicht {i} von {n}: {title}',
    tourJump: 'Zu einer Schicht springen',
    tourShow: 'Schicht {i} anzeigen: {title}',
    experienceTitle: 'Berufserfahrung',
    dateRange: (start: string, end: string) => `${start} bis ${end}`,
    projectsTitle: 'Projekte',
    projectsIntro: 'Arbeit bei Haynes Furniture, die über den laufenden Betrieb hinausging.',
    projectsDelivered: 'Was jeder Aufbau umfasst',
    skillsTitle: 'Kenntnisse',
    skillsIntro: 'Die Plattformen und Hersteller, mit denen ich jede Woche arbeite.',
    educationTitle: 'Ausbildung und Militärdienst',

    contactTitle: 'Kontakt aufnehmen',
    contactBody:
      'Sie haben ein Stellenangebot, einen Auftrag oder einen privaten Auftrag? Schreiben Sie mir über die Kontaktseite, die Nachricht kommt direkt bei mir an.',
    contactLink: 'Nachricht schreiben',

    footerContact: 'Kontakt',
    footerPrivacy: 'Datenschutz',
    footerTerms: 'Nutzungsbedingungen',
    footerLinkedin: 'LinkedIn',
    footerLinkedinLabel: 'Stevens LinkedIn-Profil (öffnet in einem neuen Tab)',

    contactMetaTitle: (name: string) => `Kontakt | ${name}`,
    contactMetaDesc: (name: string) =>
      `Kontaktieren Sie ${name} zu einem Stellenangebot, einem Projektauftrag, einem privaten Auftrag oder einer Beratung.`,
    contactH1: 'Lassen Sie uns sprechen',
    contactIntro:
      'Ob Stellenangebot für Ihr Unternehmen oder privater Auftrag: Erzählen Sie mir kurz davon, und ich melde mich bei Ihnen.',
    responseLabel: 'Antwort',
    responseValue: 'Nachrichten gehen direkt an Steven, der per E-Mail antwortet.',
    basedLabel: 'Standort',
    openToLabel: 'Offen für',
    openToValue: 'Stellenangebote, Projektaufträge, private Aufträge und Beratung',
    fieldName: 'Ihr Name',
    fieldEmail: 'E-Mail',
    fieldCompany: 'Unternehmen',
    fieldTitle: 'Ihre Position',
    fieldPhone: 'Telefon',
    optional: '(optional)',
    fieldType: 'Worum geht es?',
    fieldMessage: 'Nachricht',
    messagePlaceholder: 'Erzählen Sie mir von der Stelle oder dem Auftrag und bis wann Sie Unterstützung brauchen.',
    types: [
      { value: 'Job offer', label: 'Stellenangebot' },
      { value: 'Contract or project work', label: 'Projekt- oder Vertragsarbeit' },
      { value: 'Private job', label: 'Privater Auftrag (Zuhause oder Kleinbetrieb)' },
      { value: 'Consulting', label: 'Beratung' },
      { value: 'Something else', label: 'Etwas anderes' },
    ],
    formPendingTitle: 'Das Kontaktformular ist bald bereit',
    formPendingBody: 'Es wird in Kürze freigeschaltet. Bis dahin erreichen Sie Steven über LinkedIn.',
    formPendingLink: 'Steven auf LinkedIn schreiben',
    send: 'Nachricht senden',
    privacyNote: 'Steven nutzt Ihre Angaben nur, um Ihnen zu antworten. Siehe {privacy}.',
    sending: 'Wird gesendet…',
    sendNote: 'Geht direkt an Stevens Posteingang.',
    sent: 'Vielen Dank! Ihre Nachricht ist unterwegs, und Steven meldet sich bald bei Ihnen.',
    sendError: 'Das hat leider nicht geklappt. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es gleich noch einmal.',
    cooldown: 'Ihre Nachricht wurde bereits gesendet. Bitte warten Sie eine Minute, bevor Sie eine weitere senden.',

    termsKicker: 'Bevor Sie fortfahren',
    termsTitle: 'Zulässige Nutzung',
    termsP1: (name: string) =>
      `Diese Website zeigt den beruflichen Werdegang von ${name} für Stellen- und Geschäftsanfragen.`,
    termsP2:
      'Bitte bestätigen Sie, dass Sie die Informationen hier nur für rechtmäßige Zwecke nutzen: kein Betrug, kein Identitätsdiebstahl, keine Identitätstäuschung, keine Belästigung, kein Spam und kein Weiterverkauf seiner Daten.',
    termsCheck: 'Ich stimme zu, die Informationen auf dieser Website nur für rechtmäßige, berufliche Zwecke zu nutzen.',
    termsCta: 'Zustimmen und Steven kontaktieren',
    termsContinue: 'Zustimmen und fortfahren',

    legalUpdated: 'Zuletzt aktualisiert',
    legalContact: 'Kontaktseite',
    legalPrivacy: 'Datenschutzerklärung',
    legalTerms: 'Nutzungsbedingungen',
    termsRead: 'Lesen Sie die vollständigen {terms} und die {privacy}.',
  },
} satisfies Record<Lang, unknown>;

/** Fills {placeholders} in a template string, e.g. fill('Layer {i}', { i: 2 }). */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? ''));
}

/**
 * Replaces {contact}, {privacy}, and {terms} with links to those pages, as HTML.
 * Only use with text from this project's own files.
 */
export function withPageLinks(text: string, lang: Lang) {
  const t = strings[lang];
  const link = (page: Page, label: string) => `<a href="${pagePath(lang, page)}">${label}</a>`;
  return fill(text, {
    contact: link('contact', t.legalContact),
    privacy: link('privacy', t.legalPrivacy),
    terms: link('terms', t.legalTerms),
  });
}

/** Language of the page being rendered, from Astro's i18n routing. */
export function getLang(currentLocale: string | undefined): Lang {
  return currentLocale && currentLocale in languages ? (currentLocale as Lang) : defaultLang;
}

/** Interface text and page content for one language. */
export function useI18n(currentLocale: string | undefined) {
  const lang = getLang(currentLocale);
  return { lang, t: strings[lang], c: content[lang] };
}
