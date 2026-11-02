// German content. Same shape as the English content in ../resume.ts; product and
// company names stay as they are. Bullet points use the noun style usual in German CVs.
import type { Content } from '../resume';

export const de: Content = {
  title: 'Senior IT Engineer',
  veteran: 'Veteran der U.S. Air Force',
  pitch:
    'Ich halte ein Einzelhandelsunternehmen mit 19 Standorten am Laufen: Netzwerk, Server, Firewalls, Telefonie und Backups. Seit 15 Jahren.',

  about: [
    'Ich bin IT-Ingenieur und Veteran der U.S. Air Force mit mehr als 17 Jahren Erfahrung in der IT. In den letzten 15 Jahren habe ich die gesamte Technologielandschaft von Haynes Furniture aufgebaut und betrieben, von den Firewalls in jeder Filiale bis zu den virtuellen Servern, Backups, Telefonanlagen und Kassensystemen dahinter.',
    'Im Alltag heißt das: Verantwortung für die Infrastruktur von über 19 Standorten und mehr als 30 physischen und virtuellen Servern für über 1.500 Mitarbeitende und Dienstleister. Ich leite Filialaufbauten und unternehmensweite Upgrades, entwickle KI-Integrationen, die Routinearbeit abnehmen, und bin derjenige, den das Team anruft, wenn wirklich etwas kaputt ist.',
    'Mir sind klare Kommunikation, Ruhe bei Störungen und Lieferantenbeziehungen wichtig, die Probleme tatsächlich lösen.',
  ],

  facts: [
    { label: 'Standort', value: 'Virginia Beach, Virginia' },
    { label: 'Militärdienst', value: 'Veteran der U.S. Air Force' },
    { label: 'Erfahrung', value: 'Über 17 Jahre in der IT' },
    { label: 'Aktuelle Position', value: 'Senior IT Engineer, Haynes Furniture' },
  ],

  tour: [
    {
      layer: 'network',
      title: 'Jeden Standort anbinden',
      body: 'Jeder der 19 Standorte ist über geroutete WAN- und VPN-Verbindungen mit dem Kern verbunden; WLAN, DNS und DHCP werden zentral verwaltet.',
      tools: ['LAN/WAN', 'Routing', 'VPN', 'DNS/DHCP', 'WLAN'],
    },
    {
      layer: 'security',
      title: 'Eine Firewall an jedem Übergang',
      body: 'Eine Firewall-Landschaft mehrerer Hersteller schützt jeden Standort und den Kern. Mit Providern und Sicherheitsanbietern sorge ich dafür, dass sie zuverlässig läuft.',
      tools: ['Palo Alto Networks', 'SonicWall', 'OPNsense'],
    },
    {
      layer: 'virtualization',
      title: 'Über 30 Server auf drei Hypervisoren',
      body: 'Im Kern laufen mehr als 30 physische und virtuelle Server auf drei Hypervisor-Plattformen, unter Windows und Linux.',
      tools: ['Proxmox', 'VMware', 'Hyper-V', 'Windows Server', 'Linux'],
    },
    {
      layer: 'backup',
      title: 'Eine Kopie an einem anderen Ort',
      body: 'Veeam Backup & Replication schützt die geschäftskritischen Systeme, und getestete Wiederherstellungsprozesse sorgen dafür, dass ein schlechter Tag kurz bleibt.',
      tools: ['Veeam Backup & Replication', 'Wiederherstellungstests', 'Business Continuity'],
    },
    {
      layer: 'voice',
      title: 'Damit alle erreichbar bleiben',
      body: 'Telefone, Durchwahlen und Gesprächsqualität in jeder Filiale, dazu die Medientechnik für Besprechungsräume und Betriebsversammlungen.',
      tools: ['Mitel', 'RingCentral', 'Zoom Phone', 'Medientechnik für Besprechungsräume'],
    },
    {
      layer: 'automation',
      title: 'Routinearbeit automatisieren',
      body: 'KI-Lösungen und Integrationen holen Routineaufgaben aus den Warteschlangen und machen daraus automatisierte Abläufe, die jeden Bereich des Unternehmens erreichen.',
      tools: ['KI-Integrationen', 'Workflow-Automatisierung', 'Prozessoptimierung'],
    },
  ],

  experience: [
    {
      company: 'Haynes Furniture, Inc.',
      location: 'Virginia',
      role: 'Senior IT Engineer',
      start: 'November 2011',
      end: 'heute',
      current: true,
      progression: 'Aufstieg vom IT-/Helpdesk-Leiter zum Senior IT Engineer',
      summary:
        'Leitender Ingenieur für die unternehmensweite Infrastruktur und Geschäftstechnologie mit über 19 Filial- und Unternehmensstandorten, mehr als 30 physischen und virtuellen Servern und über 1.500 Mitarbeitenden und Dienstleistern.',
      groups: [
        {
          area: 'Systeme und Infrastruktur',
          points: [
            'Administration, Wartung und Fehlerbehebung von Windows- und Linux-Servern und -Systemen in einer verteilten Umgebung mit mehreren Standorten.',
            'Bereitstellung, Konfiguration und Wartung virtueller Maschinen auf drei Hypervisor-Plattformen (Proxmox, VMware, Hyper-V); Betreuung von über 30 physischen und virtuellen Servern.',
            'Administration von Microsoft 365 und Active Directory; Planung und Durchführung von System-Upgrades, Migrationen und Hardware-Erneuerungen.',
            'Leitung unternehmensweiter Betriebssystem-Upgrades auf allen Arbeitsplätzen in Zentrale und Filialen.',
          ],
        },
        {
          area: 'Netzwerk und Sicherheit',
          points: [
            'Planung, Konfiguration und Fehlerbehebung der Unternehmensnetzwerk-Infrastruktur, einschließlich Routing, WLAN, VPN, DNS/DHCP und Standortanbindung für über 19 Standorte.',
            'Administration einer Firewall-Landschaft mehrerer Hersteller (SonicWall, OPNsense, Palo Alto Networks) an verteilten Standorten.',
            'Zusammenarbeit mit Providern und Sicherheitsanbietern zur Lösung von Verbindungs- und Sicherheitsproblemen und für einen zuverlässigen Netzwerkbetrieb.',
          ],
        },
        {
          area: 'Backup und Business Continuity',
          points: [
            'Gesamtverantwortung für die Veeam-Backup-&-Replication-Umgebung: Konfiguration, Überwachung, Upgrades, Fehlerbehebung und Wiederherstellung.',
            'Sicherstellung der Business Continuity geschäftskritischer Filial- und Unternehmenssysteme durch getestete Backup- und Wiederherstellungsprozesse.',
          ],
        },
        {
          area: 'VoIP, Kommunikation und Medientechnik',
          points: [
            'Administration der Plattformen Mitel, RingCentral und Zoom Phone, einschließlich Benutzern, Durchwahlen, Endgeräten und Telefoniediensten; Behebung von VoIP- und netzwerkbedingten Problemen mit der Gesprächsqualität.',
            'Planung und Umsetzung von Medientechnik und Integrationen für Besprechungsräume und Betriebsversammlungen.',
          ],
        },
        {
          area: 'Geschäfts- und Einzelhandelstechnologie',
          points: [
            'Betreuung von Storis, Kassensystemen und individuellen Geschäftsanwendungen für den täglichen Verkauf und den Unternehmensbetrieb.',
            'Administration des Mobile Device Management (MDM) für firmeneigene Mobilgeräte.',
            'Wartung der Orchid-DVR-Videoüberwachung in den Filialen.',
          ],
        },
        {
          area: 'KI-Lösungen und Integrationen',
          points: [
            'Konzeption und Umsetzung KI-basierter Lösungen und Integrationen, die Abläufe automatisieren und Anforderungen von Fachbereichen und IT abdecken.',
            'Bewertung neuer KI-Technologien und Identifikation von Potenzialen für Automatisierung und Prozessoptimierung.',
          ],
        },
        {
          area: 'Projektmanagement und Führung',
          points: [
            'Leitung von Filialaufbauten, Umbauten und Rückbauten; Koordination der Installation von Netzwerk, Servern, Telefonie, Kassen und Videoüberwachung mit Auftragnehmern und Lieferanten.',
            'IT-Schnittstelle zwischen Fachabteilungen, technischen Teams, Lieferanten und Geschäftsleitung; Konzeption von Lösungen und Umsetzung bis zum Abschluss.',
            'Führung und Anleitung der IT-Mitarbeitenden als Abteilungsleiter, mit Eskalations-Support und technischer Ausrichtung.',
            'Bewertung und Steuerung von Technologielieferanten und Dienstleistern; Vorbereitung von Kaufentscheidungen nach Zuverlässigkeit, betrieblichen Anforderungen und Geschäftsbedarf.',
            'Steuerung von Technologieplanung, Lifecycle-Management und Priorisierung paralleler Infrastrukturprojekte.',
          ],
        },
      ],
    },
    {
      company: 'Liberty Tax Service',
      location: 'Virginia',
      role: 'Teamleiter und Coach, IT-Support',
      start: 'Dezember 2008',
      end: 'März 2012',
      points: [
        'Leitung und Coaching der Abteilung Technischer Support; Schulung der Techniker und Eskalationsstelle für komplexe Fälle.',
        'Fehlerbehebung und technischer Support für Franchise-Kunden und interne Anwender mit sehr unterschiedlichem technischem Kenntnisstand.',
        'Spezialisierung auf fremdsprachigen Support für das Kanada-Geschäft.',
      ],
    },
  ],

  projects: [
    {
      name: 'Filialaufbauten und Umbauten an mehreren Standorten',
      description:
        'Leitung von IT-Aufbau, Umbau und Rückbau von Filialen; Koordination von Auftragnehmern und Lieferanten, damit jede Filiale vom ersten Tag an voll funktionsfähig öffnet.',
      scope: ['Netzwerk', 'Firewall', 'Server', 'VoIP', 'Kassensysteme', 'Videoüberwachung'],
    },
    {
      name: 'Virtualisierungsumgebung mit mehreren Hypervisoren',
      description:
        'Aufbau und Betrieb einer virtuellen Infrastruktur auf drei Hypervisoren, durchgängig geschützt mit Veeam Backup & Replication.',
      scope: ['Proxmox', 'VMware', 'Hyper-V', 'Veeam'],
    },
    {
      name: 'KI-Lösungen und Integrationen',
      description:
        'Entwicklung KI-gestützter Lösungen und Integrationen, die wiederkehrende Prozesse automatisieren und Abläufe in Fachbereichen und IT verbessern.',
      scope: ['Automatisierung', 'Integrationen', 'Prozessoptimierung'],
    },
    {
      name: 'Unternehmensweite Betriebssystem-Upgrades',
      description:
        'Planung und Durchführung von Betriebssystem-Upgrades auf allen Arbeitsplatzrechnern bei minimaler Störung des Filialbetriebs.',
      scope: ['Windows', 'Arbeitsplätze', 'Change-Planung'],
    },
    {
      name: 'Medientechnik für Besprechungsräume und Betriebsversammlungen',
      description: 'Planung und Integration von Medientechnik für Besprechungsräume und unternehmensweite Veranstaltungen.',
      scope: ['Medientechnik-Planung', 'Integration', 'Veranstaltungen'],
    },
  ],

  skills: [
    { area: 'Betriebssysteme und Verzeichnisdienste', items: ['Windows', 'Windows Server', 'Linux', 'Active Directory', 'Microsoft 365'] },
    { area: 'Netzwerk', items: ['LAN/WAN', 'Routing', 'DNS/DHCP', 'VPN', 'WLAN', 'Infrastruktur mit mehreren Standorten'] },
    { area: 'Sicherheit und Firewalls', items: ['Palo Alto Networks', 'SonicWall', 'OPNsense', 'Sicherer Netzwerkbetrieb'] },
    { area: 'Virtualisierung', items: ['Proxmox', 'VMware', 'Hyper-V', 'Physische und virtuelle Server'] },
    { area: 'Backup und Wiederherstellung', items: ['Veeam Backup & Replication', 'Wiederherstellung', 'Business Continuity'] },
    { area: 'VoIP und Kommunikation', items: ['Mitel', 'RingCentral', 'Zoom Phone', 'Medientechnik für Besprechungen und Veranstaltungen'] },
    { area: 'Geschäfts- und Einzelhandelssysteme', items: ['Storis', 'Kassensysteme', 'Individuelle Geschäftsanwendungen', 'Orchid-DVR-Videoüberwachung'] },
    { area: 'Arbeitsplätze und Mobilität', items: ['Mobile Device Management (MDM)', 'Betriebssystem-Upgrades', 'Hardware-Erneuerungen'] },
    { area: 'KI und Automatisierung', items: ['Entwicklung von KI-Lösungen', 'KI-Integrationen', 'Prozessautomatisierung'] },
    { area: 'Führung', items: ['Projektmanagement', 'Lieferantenmanagement', 'Eskalations-Support', 'IT-Lifecycle-Management'] },
  ],

  education: [
    { school: 'ECPI University', detail: 'Studienmodule Cybersicherheit und Netzwerke', years: '2019 – 2020' },
    { school: 'Strayer University', detail: 'Hochschulzertifikat Webentwicklung', years: '2009 – 2011' },
    { school: 'Virginia Beach Technical & Career Education Center', detail: 'CNA-Ausbildung, Novell-Netzwerke, Microsoft und Windows', years: '' },
  ],

  service: {
    branch: 'United States Air Force',
    status: 'Veteran',
  },
};
