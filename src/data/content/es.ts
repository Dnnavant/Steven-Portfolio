// Spanish content. Same shape as the English content in ../resume.ts; product and
// company names stay as they are.
import type { Content } from '../resume';

export const es: Content = {
  title: 'Ingeniero Sénior de TI',
  veteran: 'Veterano de la Fuerza Aérea de EE. UU.',
  pitch:
    'Mantengo en marcha una empresa minorista con 19 sedes: su red, servidores, cortafuegos, telefonía y copias de seguridad. Llevo 15 años haciéndolo.',

  about: [
    'Soy ingeniero de TI y veterano de la Fuerza Aérea de EE. UU., con más de 17 años de experiencia en tecnología. Durante los últimos 15 he diseñado y operado toda la infraestructura tecnológica de Haynes Furniture, desde los cortafuegos de cada tienda hasta los servidores virtuales, las copias de seguridad, la telefonía y los sistemas de punto de venta que los respaldan.',
    'En el día a día, eso significa ser responsable de la infraestructura de más de 19 sedes y más de 30 servidores físicos y virtuales para más de 1.500 empleados y proveedores. Dirijo la apertura de tiendas y las actualizaciones de toda la empresa, desarrollo integraciones de IA que liberan a las personas del trabajo repetitivo y soy a quien llama el equipo cuando algo falla de verdad.',
    'Doy mucha importancia a la comunicación clara, a mantener la calma cuando algo se rompe y a las relaciones con proveedores que de verdad resuelven los problemas.',
  ],

  facts: [
    { label: 'Ubicación', value: 'Virginia Beach, Virginia' },
    { label: 'Servicio', value: 'Veterano de la Fuerza Aérea de EE. UU.' },
    { label: 'Experiencia', value: 'Más de 17 años en TI' },
    { label: 'Puesto actual', value: 'Ingeniero Sénior de TI, Haynes Furniture' },
  ],

  tour: [
    {
      layer: 'network',
      title: 'Conectar cada sede',
      body: 'Cada una de las 19 sedes se conecta al núcleo mediante enlaces WAN enrutados y VPN, con la red inalámbrica, DNS y DHCP gestionados de forma centralizada.',
      tools: ['LAN/WAN', 'Enrutamiento', 'VPN', 'DNS/DHCP', 'Redes inalámbricas'],
    },
    {
      layer: 'security',
      title: 'Un cortafuegos en cada perímetro',
      body: 'Un parque de cortafuegos de varios fabricantes protege cada sede y el núcleo. Trabajo con operadores y proveedores de seguridad para mantenerlo fiable.',
      tools: ['Palo Alto Networks', 'SonicWall', 'OPNsense'],
    },
    {
      layer: 'virtualization',
      title: 'Más de 30 servidores en tres hipervisores',
      body: 'El núcleo ejecuta más de 30 servidores físicos y virtuales en tres plataformas de hipervisor, con Windows y Linux.',
      tools: ['Proxmox', 'VMware', 'Hyper-V', 'Windows Server', 'Linux'],
    },
    {
      layer: 'backup',
      title: 'Guardar una copia en otro lugar',
      body: 'Veeam Backup & Replication protege los sistemas críticos del negocio, y los procesos de restauración probados hacen que un mal día sea un día corto.',
      tools: ['Veeam Backup & Replication', 'Pruebas de restauración', 'Continuidad del negocio'],
    },
    {
      layer: 'voice',
      title: 'Que la gente siga comunicándose',
      body: 'Teléfonos, extensiones y calidad de llamada en todas las tiendas, además del audiovisual de las salas de reuniones y de los eventos generales de la empresa.',
      tools: ['Mitel', 'RingCentral', 'Zoom Phone', 'Audiovisual para salas de reuniones'],
    },
    {
      layer: 'automation',
      title: 'Automatizar el trabajo repetitivo',
      body: 'Los desarrollos e integraciones de IA sacan las tareas rutinarias de las colas de trabajo y las convierten en flujos automatizados que llegan a todas las áreas del negocio.',
      tools: ['Integraciones de IA', 'Automatización de flujos de trabajo', 'Mejora de procesos'],
    },
  ],

  experience: [
    {
      company: 'Haynes Furniture, Inc.',
      location: 'Virginia',
      role: 'Ingeniero Sénior de TI',
      start: 'Noviembre de 2011',
      end: 'Actualidad',
      current: true,
      progression: 'Ascendió de Responsable de TI/Soporte Técnico a Ingeniero Sénior de TI',
      summary:
        'Ingeniero principal de la infraestructura y la tecnología de negocio de toda la empresa, con más de 19 sedes minoristas y corporativas, más de 30 servidores físicos y virtuales y más de 1.500 empleados y proveedores.',
      groups: [
        {
          area: 'Sistemas e infraestructura',
          points: [
            'Administro, mantengo y soluciono incidencias de servidores y sistemas Windows y Linux en un entorno distribuido de varias sedes.',
            'Despliego, configuro y mantengo máquinas virtuales en tres plataformas de hipervisor (Proxmox, VMware, Hyper-V) y gestiono más de 30 servidores físicos y virtuales.',
            'Administro Microsoft 365 y Active Directory; planifico y ejecuto actualizaciones, migraciones y renovaciones tecnológicas.',
            'Dirigí actualizaciones del sistema operativo en todos los equipos corporativos y de tienda de la empresa.',
          ],
        },
        {
          area: 'Redes y seguridad',
          points: [
            'Diseño, configuro y soluciono incidencias de la infraestructura de red empresarial, incluidos enrutamiento, redes inalámbricas, VPN, DNS/DHCP y conectividad de más de 19 sedes.',
            'Administro un parque de cortafuegos de varios fabricantes (SonicWall, OPNsense y Palo Alto Networks) en sedes distribuidas.',
            'Colaboro con operadores y proveedores de seguridad para resolver problemas de conectividad y seguridad y mantener una red fiable.',
          ],
        },
        {
          area: 'Copias de seguridad y continuidad del negocio',
          points: [
            'Soy responsable integral del entorno de Veeam Backup & Replication: configuración, supervisión, actualizaciones, resolución de incidencias y recuperación.',
            'Garantizo la continuidad de los sistemas críticos de tiendas y oficinas mediante procesos de copia y restauración probados.',
          ],
        },
        {
          area: 'VoIP, comunicaciones y audiovisual',
          points: [
            'Administro las plataformas Mitel, RingCentral y Zoom Phone, incluidos usuarios, extensiones, terminales y servicios de llamada; resuelvo problemas de calidad de llamada de VoIP y de red.',
            'Diseño e instalo equipos e integraciones audiovisuales para salas de reuniones y eventos generales de la empresa.',
          ],
        },
        {
          area: 'Tecnología de negocio y comercio minorista',
          points: [
            'Doy soporte a Storis, a los sistemas de punto de venta y a aplicaciones de negocio a medida que sostienen las ventas diarias y la operación corporativa.',
            'Administro la gestión de dispositivos móviles (MDM) de los dispositivos de la empresa.',
            'Mantengo los sistemas de videovigilancia Orchid DVR de las tiendas.',
          ],
        },
        {
          area: 'Desarrollos e integraciones de IA',
          points: [
            'Diseño e implemento soluciones e integraciones basadas en IA que automatizan flujos de trabajo y cubren necesidades del negocio y de TI.',
            'Evalúo nuevas tecnologías de IA e identifico oportunidades de automatización y mejora de procesos.',
          ],
        },
        {
          area: 'Gestión de proyectos y liderazgo',
          points: [
            'Dirijo la apertura, reconfiguración y cierre de tiendas, coordinando con contratistas y proveedores las instalaciones de red, servidores, telefonía, punto de venta y videovigilancia.',
            'Actúo como enlace de TI entre los departamentos, los equipos técnicos, los proveedores y la dirección; defino soluciones y llevo su implantación hasta el final.',
            'Superviso y oriento al personal de TI como responsable del departamento, con soporte de nivel de escalado y dirección técnica.',
            'Evalúo y gestiono proveedores de tecnología y servicios, y oriento las decisiones de compra según su fiabilidad, los requisitos operativos y las necesidades del negocio.',
            'Impulso la planificación tecnológica, la gestión del ciclo de vida y la priorización de varias iniciativas de infraestructura simultáneas.',
          ],
        },
      ],
    },
    {
      company: 'Liberty Tax Service',
      location: 'Virginia',
      role: 'Responsable y Formador de Soporte Técnico de TI',
      start: 'Diciembre de 2008',
      end: 'Marzo de 2012',
      points: [
        'Dirigí y formé al departamento de soporte técnico: capacité a los técnicos y fui el punto de escalado para las incidencias complejas.',
        'Ofrecí soporte técnico y resolución de problemas a clientes franquiciados y usuarios internos con niveles técnicos muy diversos.',
        'Me especialicé en soporte en otros idiomas para las operaciones de Canadá.',
      ],
    },
  ],

  projects: [
    {
      name: 'Apertura y reconfiguración de tiendas en varias sedes',
      description:
        'Dirigí la implantación de TI, la reconfiguración y el cierre de tiendas, coordinando a contratistas y proveedores para que cada tienda abriera con todo funcionando desde el primer día.',
      scope: ['Red', 'Cortafuegos', 'Servidores', 'VoIP', 'Punto de venta', 'Videovigilancia'],
    },
    {
      name: 'Entorno de virtualización con varios hipervisores',
      description:
        'Construí y mantengo una infraestructura virtual repartida en tres hipervisores, protegida de extremo a extremo con Veeam Backup & Replication.',
      scope: ['Proxmox', 'VMware', 'Hyper-V', 'Veeam'],
    },
    {
      name: 'Desarrollos e integraciones de IA',
      description:
        'Desarrollé soluciones e integraciones basadas en IA que automatizan procesos repetitivos y mejoran los flujos de trabajo del negocio y de TI.',
      scope: ['Automatización', 'Integraciones', 'Mejora de procesos'],
    },
    {
      name: 'Actualizaciones del sistema operativo en toda la empresa',
      description:
        'Planifiqué y ejecuté actualizaciones del sistema operativo en todo el parque de equipos con una interrupción mínima de la actividad de las tiendas.',
      scope: ['Windows', 'Equipos de usuario', 'Planificación de cambios'],
    },
    {
      name: 'Audiovisual para salas de reuniones y eventos',
      description: 'Diseñé e integré sistemas audiovisuales para salas de reuniones y eventos de toda la empresa.',
      scope: ['Diseño audiovisual', 'Integración', 'Eventos'],
    },
  ],

  skills: [
    { area: 'Sistemas operativos y directorio', items: ['Windows', 'Windows Server', 'Linux', 'Active Directory', 'Microsoft 365'] },
    { area: 'Redes', items: ['LAN/WAN', 'Enrutamiento', 'DNS/DHCP', 'VPN', 'Redes inalámbricas', 'Infraestructura multisede'] },
    { area: 'Seguridad y cortafuegos', items: ['Palo Alto Networks', 'SonicWall', 'OPNsense', 'Operación segura de redes'] },
    { area: 'Virtualización', items: ['Proxmox', 'VMware', 'Hyper-V', 'Servidores físicos y virtuales'] },
    { area: 'Copias de seguridad y recuperación', items: ['Veeam Backup & Replication', 'Restauración y recuperación', 'Continuidad del negocio'] },
    { area: 'VoIP y comunicaciones', items: ['Mitel', 'RingCentral', 'Zoom Phone', 'Audiovisual para salas y eventos'] },
    { area: 'Sistemas de negocio y comercio minorista', items: ['Storis', 'Sistemas de punto de venta', 'Aplicaciones de negocio a medida', 'Videovigilancia Orchid DVR'] },
    { area: 'Equipos de usuario y movilidad', items: ['Gestión de dispositivos móviles (MDM)', 'Actualizaciones del sistema operativo', 'Renovaciones tecnológicas'] },
    { area: 'IA y automatización', items: ['Desarrollo de soluciones de IA', 'Integraciones de IA', 'Automatización de procesos'] },
    { area: 'Liderazgo', items: ['Gestión de proyectos', 'Gestión de proveedores', 'Soporte de escalado', 'Gestión del ciclo de vida de TI'] },
  ],

  education: [
    { school: 'ECPI University', detail: 'Cursos de ciberseguridad y redes', years: '2019 – 2020' },
    { school: 'Strayer University', detail: 'Certificado universitario en desarrollo web', years: '2009 – 2011' },
    { school: 'Virginia Beach Technical & Career Education Center', detail: 'Estudios CNA, redes Novell, Microsoft y Windows', years: '' },
  ],

  service: {
    branch: 'Fuerza Aérea de los Estados Unidos',
    status: 'Veterano',
  },
};
