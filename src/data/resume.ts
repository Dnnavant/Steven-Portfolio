// All site content lives here and in ./content/. Update these files to change what the
// site says; the components only handle layout. Wording for buttons, labels, and other
// interface text is in src/i18n/ui.ts.
//
// `profile` and `environment` are the same in every language. Everything a visitor reads
// is in `content`, once per language: English below, Spanish in ./content/es.ts, German
// in ./content/de.ts. All three must have the same shape (the `Content` type).

import { es } from './content/es';
import { de } from './content/de';

export const profile = {
  name: 'Steven Avant',
  location: 'Virginia Beach, VA',
  // The Formspree form that contact messages go to (the part after /f/ in its endpoint).
  // It comes from the CONTACT_FORM_ID setting (the .env file locally, a repository variable on GitHub)
  // so it isn't hard-coded here. See "Contact form setup" in the README.
  contactFormId: (import.meta.env.CONTACT_FORM_ID ?? '') as string,
  // Shown in the footer.
  linkedin: 'https://www.linkedin.com/in/steven-avant-6469546a/',
};

export const environment = {
  sites: 19,
  servers: '30+',
  people: '1,500+',
  years: '17+',
};

export type TourStep = { layer: string; title: string; body: string; tools: string[] };
export type ExperienceGroup = { area: string; points: string[] };
export type Job = {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  current?: boolean;
  progression?: string;
  summary?: string;
  groups?: ExperienceGroup[];
  points?: string[];
};
export type Project = { name: string; description: string; scope: string[] };

export type Content = {
  title: string;
  veteran: string;
  pitch: string;
  about: string[];
  facts: { label: string; value: string }[];
  // The scroll-driven "How it fits together" tour. Each step adds a layer to the map.
  // `layer` must match one of the layer names drawn in SystemsTour.astro.
  tour: TourStep[];
  experience: Job[];
  projects: Project[];
  skills: { area: string; items: string[] }[];
  education: { school: string; detail: string; years: string }[];
  service: { branch: string; status: string };
};

const en: Content = {
  title: 'Senior IT Engineer',
  veteran: 'U.S. Air Force veteran',
  pitch:
    'I keep a 19-location retail business running: its network, servers, firewalls, phones, and backups. I have done it for 15 years.',

  about: [
    'I am an IT engineer and U.S. Air Force veteran with more than 17 years in IT. For the last 15 of them I have engineered and operated the full technology stack at Haynes Furniture, from the firewalls at each store to the virtual servers, backups, phone systems, and point-of-sale systems behind them.',
    'Day to day that means owning infrastructure across 19+ locations and 30+ physical and virtual servers for more than 1,500 employees and vendors. I lead store builds and company-wide upgrades, build AI integrations that take repetitive work off people’s plates, and I am the person the team calls when something is truly broken.',
    'I put a premium on clear communication, staying calm when things break, and vendor relationships that actually get problems solved.',
  ],

  facts: [
    { label: 'Based in', value: 'Virginia Beach, Virginia' },
    { label: 'Service', value: 'U.S. Air Force veteran' },
    { label: 'Experience', value: '17+ years in IT' },
    { label: 'Current role', value: 'Senior IT Engineer, Haynes Furniture' },
  ],

  tour: [
    {
      layer: 'network',
      title: 'Connect every location',
      body: 'Each of the 19 locations links back to the core over routed WAN and VPN connections, with wireless, DNS, and DHCP managed centrally.',
      tools: ['LAN/WAN', 'Routing', 'VPN', 'DNS/DHCP', 'Wireless'],
    },
    {
      layer: 'security',
      title: 'Put a firewall at every edge',
      body: 'A multi-vendor firewall estate guards every site and the core. I work with carriers and security vendors to keep it reliable.',
      tools: ['Palo Alto Networks', 'SonicWall', 'OPNsense'],
    },
    {
      layer: 'virtualization',
      title: 'Run 30+ servers on three hypervisors',
      body: 'The core runs more than 30 physical and virtual servers across three hypervisor platforms, on both Windows and Linux.',
      tools: ['Proxmox', 'VMware', 'Hyper-V', 'Windows Server', 'Linux'],
    },
    {
      layer: 'backup',
      title: 'Keep a copy somewhere else',
      body: 'Veeam Backup & Replication protects the business-critical systems, and tested restore processes mean a bad day stays a short one.',
      tools: ['Veeam Backup & Replication', 'Restore testing', 'Business continuity'],
    },
    {
      layer: 'voice',
      title: 'Keep people talking',
      body: 'Phones, extensions, and call quality across every store, plus the AV for conference rooms and company town halls.',
      tools: ['Mitel', 'RingCentral', 'Zoom Phone', 'Conference room AV'],
    },
    {
      layer: 'automation',
      title: 'Automate the repetitive work',
      body: 'AI builds and integrations push routine work out of people’s queues and into automated workflows that reach every part of the business.',
      tools: ['AI integrations', 'Workflow automation', 'Process improvement'],
    },
  ],

  experience: [
    {
      company: 'Haynes Furniture, Inc.',
      location: 'Virginia',
      role: 'Senior IT Engineer',
      start: 'November 2011',
      end: 'Present',
      current: true,
      progression: 'Progressed from IT/Helpdesk Lead to Senior IT Engineer',
      summary:
        'Lead engineer for company-wide infrastructure and business technology supporting 19+ retail and corporate locations, 30+ physical and virtual servers, and 1,500+ employees and vendors.',
      groups: [
        {
          area: 'Systems and infrastructure',
          points: [
            'Administer, maintain, and troubleshoot Windows and Linux servers and systems across a distributed multi-site environment.',
            'Deploy, configure, and maintain virtual machines across three hypervisor platforms (Proxmox, VMware, Hyper-V), managing 30+ physical and virtual servers.',
            'Administer Microsoft 365 and Active Directory; plan and execute system upgrades, migrations, and technology refreshes.',
            'Directed company-wide operating system upgrades across corporate and retail endpoints.',
          ],
        },
        {
          area: 'Networking and security',
          points: [
            'Engineer, configure, and troubleshoot enterprise network infrastructure, including routing, wireless, VPN, DNS/DHCP, and site connectivity for 19+ locations.',
            'Administer a multi-vendor firewall estate spanning SonicWall, OPNsense, and Palo Alto Networks across distributed sites.',
            'Partner with carriers and security vendors to resolve connectivity and security issues and sustain reliable network operations.',
          ],
        },
        {
          area: 'Backup and business continuity',
          points: [
            'Own the Veeam Backup & Replication environment end to end: configuration, monitoring, upgrades, troubleshooting, and recovery.',
            'Safeguard business continuity for business-critical retail and corporate systems through tested backup and restore processes.',
          ],
        },
        {
          area: 'VoIP, communications, and AV',
          points: [
            'Administer Mitel, RingCentral, and Zoom Phone platforms, including users, extensions, handsets, and call services; troubleshoot VoIP and network-related call quality issues.',
            'Design and deliver AV setups and integrations for conference rooms and company town halls.',
          ],
        },
        {
          area: 'Business and retail technology',
          points: [
            'Support Storis, POS systems, and custom business applications that drive daily sales and corporate operations.',
            'Administer Mobile Device Management (MDM) for company mobile devices.',
            'Maintain Orchid DVR video surveillance systems across store locations.',
          ],
        },
        {
          area: 'AI builds and integrations',
          points: [
            'Design and implement AI-based solutions and integrations that automate workflows and support business and IT needs.',
            'Evaluate emerging AI technologies and identify opportunities for automation and process improvement.',
          ],
        },
        {
          area: 'Project management and leadership',
          points: [
            'Lead store builds, reconfigurations, and tear-downs, coordinating network, server, phone, POS, and surveillance installations with contractors and vendors.',
            'Serve as IT liaison between business departments, technical teams, vendors, and leadership; scope solutions and drive implementation through completion.',
            'Supervise and guide IT staff as department lead, providing escalation-level support and technical direction.',
            'Evaluate and manage technology vendors and service providers, informing purchasing decisions based on reliability, operational requirements, and business needs.',
            'Drive technology planning, lifecycle management, and prioritization across concurrent infrastructure initiatives.',
          ],
        },
      ],
    },
    {
      company: 'Liberty Tax Service',
      location: 'Virginia',
      role: 'IT Technical Support Lead & Coach',
      start: 'December 2008',
      end: 'March 2012',
      points: [
        'Led and coached the Technical Support Department, training technicians and serving as the escalation point for complex issues.',
        'Delivered troubleshooting and technical support to franchise customers and internal users with a wide range of technical skill levels.',
        'Specialized in foreign-language support for Canadian operations.',
      ],
    },
  ],

  projects: [
    {
      name: 'Multi-location store builds and reconfigurations',
      description:
        'Led the IT buildout, reconfiguration, and decommissioning of retail locations, coordinating contractors and vendors so each store opened with everything working on day one.',
      scope: ['Network', 'Firewall', 'Servers', 'VoIP', 'POS', 'Surveillance'],
    },
    {
      name: 'Multi-hypervisor virtualization environment',
      description:
        'Built and maintain a virtual infrastructure spanning three hypervisors, protected end to end by Veeam Backup & Replication.',
      scope: ['Proxmox', 'VMware', 'Hyper-V', 'Veeam'],
    },
    {
      name: 'AI builds and integrations',
      description:
        'Developed AI-driven solutions and integrations that automate repetitive processes and improve business and IT workflows.',
      scope: ['Automation', 'Integrations', 'Process improvement'],
    },
    {
      name: 'Company-wide OS upgrades',
      description:
        'Planned and executed operating system upgrades across the enterprise endpoint fleet with minimal disruption to retail operations.',
      scope: ['Windows', 'Endpoints', 'Change planning'],
    },
    {
      name: 'Conference room and town hall AV',
      description: 'Designed and integrated AV systems for meeting spaces and company-wide events.',
      scope: ['AV design', 'Integration', 'Events'],
    },
  ],

  skills: [
    { area: 'Operating systems and directory', items: ['Windows', 'Windows Server', 'Linux', 'Active Directory', 'Microsoft 365'] },
    { area: 'Networking', items: ['LAN/WAN', 'Routing', 'DNS/DHCP', 'VPN', 'Wireless', 'Multi-site infrastructure'] },
    { area: 'Security and firewalls', items: ['Palo Alto Networks', 'SonicWall', 'OPNsense', 'Secure network operations'] },
    { area: 'Virtualization', items: ['Proxmox', 'VMware', 'Hyper-V', 'Physical and virtual servers'] },
    { area: 'Backup and recovery', items: ['Veeam Backup & Replication', 'Restore and recovery', 'Business continuity'] },
    { area: 'VoIP and communications', items: ['Mitel', 'RingCentral', 'Zoom Phone', 'Conference room and town hall AV'] },
    { area: 'Business and retail systems', items: ['Storis', 'POS systems', 'Custom business applications', 'Orchid DVR surveillance'] },
    { area: 'Endpoint and mobility', items: ['Mobile Device Management (MDM)', 'OS upgrades', 'Technology refreshes'] },
    { area: 'AI and automation', items: ['AI solution builds', 'AI integrations', 'Process automation'] },
    { area: 'Leadership', items: ['Project management', 'Vendor management', 'Escalation support', 'IT lifecycle management'] },
  ],

  education: [
    { school: 'ECPI University', detail: 'Cyber Security with Networking coursework', years: '2019 – 2020' },
    { school: 'Strayer University', detail: 'Undergraduate Certificate, Web Development', years: '2009 – 2011' },
    { school: 'Virginia Beach Technical & Career Education Center', detail: 'CNA Studies, Novell Networking, Microsoft & Windows', years: '' },
  ],

  service: {
    branch: 'United States Air Force',
    status: 'Veteran',
  },
};

export const content = { en, es, de };
