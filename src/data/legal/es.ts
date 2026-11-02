// Política de privacidad y Condiciones de uso (español). Same shape as en.ts.
import type { Legal } from './en';

const github = '<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">declaración de privacidad de GitHub</a>';
const formspree = '<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidad de Formspree</a>';
const translation = 'Esta traducción se ofrece para tu comodidad. Si hay alguna diferencia, prevalece la versión en inglés.';

export const es: Legal = {
  updated: '2 de noviembre de 2026',

  privacy: {
    title: 'Política de privacidad',
    description: 'Qué información recoge este sitio web, para qué y qué ocurre con ella.',
    intro: [
      'Esta política explica qué información recoge este sitio web, para qué y qué ocurre con ella. El sitio es un portafolio personal gestionado por Steven Avant en Virginia Beach (Virginia, EE. UU.), que es el responsable de la información descrita aquí.',
      translation,
    ],
    sections: [
      {
        heading: 'En resumen',
        body: [
          'Este sitio no usa cookies, analítica, publicidad ni seguimiento. La única información personal que recoge es la que decides enviar mediante el formulario de contacto, y solo se usa para responderte.',
        ],
      },
      {
        heading: 'El formulario de contacto',
        body: [
          'Cuando envías un mensaje, el formulario recoge:',
          [
            'tu nombre y tu dirección de correo electrónico',
            'el motivo del mensaje y el propio mensaje',
            'tu empresa, tu cargo y tu teléfono, si decides indicarlos',
            'el idioma de la página desde la que lo enviaste',
          ],
          'El formulario se entrega mediante Formspree (formspree.io), un servicio de reenvío de formularios que hace llegar tu mensaje a la bandeja de entrada de Steven. Formspree lo trata según la ' + formspree + '.',
          'Tu información solo se usa para leer y responder a tu consulta y para dar seguimiento al trabajo que pueda surgir de ella. Nunca se vende, no se comparte con fines comerciales y no se añade a ninguna lista de correo.',
          'Si te encuentras en la Unión Europea o el Reino Unido: la base jurídica es tu solicitud de ser contactado y las medidas previas a un posible contrato contigo (art. 6.1.b del RGPD), así como el interés legítimo de Steven en responder a las consultas (art. 6.1.f).',
        ],
      },
      {
        heading: 'Alojamiento y registros del servidor',
        body: [
          'El sitio está alojado en GitHub Pages, un servicio de GitHub, Inc. Como en cualquier sitio web, tu navegador envía datos técnicos con cada solicitud, como tu dirección IP, el tipo de navegador, la página solicitada y la hora. GitHub puede registrarlos para prestar y proteger su servicio, tal como se describe en la ' + github + '. Steven no recibe estos registros ni tiene acceso a ellos.',
        ],
      },
      {
        heading: 'Almacenamiento en tu navegador',
        body: [
          'El sitio no usa cookies. Guarda tres pequeños ajustes en tu propio navegador para funcionar como se espera:',
          [
            '<strong>theme</strong>: si elegiste el aspecto claro u oscuro',
            '<strong>terms-agreed</strong>: que aceptaste el aviso de uso aceptable, para no volver a mostrarlo',
            '<strong>contact-sent-at</strong>: cuándo enviaste tu último mensaje, para evitar envíos repetidos en menos de un minuto. Se borra al cerrar la pestaña.',
          ],
          'Estos datos se quedan en tu dispositivo y nunca se envían a nadie. Puedes borrarlos en cualquier momento desde la configuración de tu navegador.',
        ],
      },
      {
        heading: 'Otros servicios y enlaces',
        body: [
          'La tipografía y el código del sitio se sirven desde el propio sitio, así que tu navegador no se conecta a otras empresas mientras lo lees. La única conexión externa es con Formspree, y solo cuando envías el formulario de contacto.',
          'El pie de página enlaza al perfil de LinkedIn de Steven. Al seguir ese enlace estarás en LinkedIn y se aplicará su propia política de privacidad.',
        ],
      },
      {
        heading: 'Cuánto tiempo se conserva la información',
        body: [
          'Los mensajes se conservan solo el tiempo necesario para responder a tu consulta y dar seguimiento al trabajo que surja de ella, y después se eliminan. Puedes pedir que se borre tu mensaje antes en cualquier momento.',
        ],
      },
      {
        heading: 'Tus derechos',
        body: [
          'Puedes pedir ver la información que Steven tiene sobre ti, corregirla o eliminarla. Si te encuentras en la Unión Europea o el Reino Unido, también tienes derecho a oponerte a su uso o limitarlo, a recibir una copia en un formato portátil y a presentar una reclamación ante tu autoridad de protección de datos.',
          'Para hacer una solicitud, usa la {contact} y elige «Otro asunto». Para proteger tu información, Steven puede responder a la dirección de correo desde la que escribiste originalmente para confirmar que la solicitud es tuya.',
        ],
      },
      {
        heading: 'Dónde se trata la información',
        body: [
          'Steven se encuentra en Estados Unidos, por lo que la información que envías se trata en Estados Unidos, donde la legislación de protección de datos puede ser distinta de la de tu país.',
        ],
      },
      {
        heading: 'Seguridad',
        body: [
          'El sitio se sirve solo mediante una conexión cifrada (HTTPS), con una política de seguridad estricta y protección contra spam en el formulario. Ningún método de envío de información por internet es completamente seguro, así que no incluyas contraseñas, datos financieros, números de documentos de identidad ni otra información sensible en tu mensaje.',
        ],
      },
      {
        heading: 'Menores',
        body: [
          'Este sitio está pensado para empleadores y clientes y no se dirige a menores. No recoge a sabiendas información de menores de 16 años. Si crees que un menor ha enviado un mensaje, usa la {contact} y se eliminará.',
        ],
      },
      {
        heading: 'Cambios en esta política',
        body: [
          'Si esta política cambia, la nueva versión se publicará en esta página con una nueva fecha de «última actualización».',
        ],
      },
      {
        heading: 'Preguntas',
        body: ['Para cualquier pregunta sobre esta política o tu información, usa la {contact}.'],
      },
    ],
  },

  terms: {
    title: 'Condiciones de uso',
    description: 'Las normas para usar este sitio web y la información que contiene.',
    intro: [
      'Estas condiciones se aplican a todas las personas que visitan este sitio web, gestionado por Steven Avant. Al usar el sitio, las aceptas. Si no estás de acuerdo, no uses el sitio.',
      translation,
    ],
    sections: [
      {
        heading: 'Para qué sirve este sitio',
        body: [
          'Este sitio muestra la trayectoria profesional de Steven para que empleadores y clientes conozcan su trabajo y se pongan en contacto con él. Es solo informativo. Nada de lo que contiene es una oferta, un presupuesto ni un contrato; cualquier trabajo se acuerda por separado y por escrito.',
        ],
      },
      {
        heading: 'Uso aceptable',
        body: [
          'Solo puedes usar la información de este sitio con fines lícitos y profesionales, como valorar a Steven para un empleo, un contrato o un trabajo particular. Te comprometes a no:',
          [
            'usarla para fraude, robo de identidad, suplantación, phishing o ingeniería social, tampoco contra Steven ni contra ninguna empresa mencionada aquí',
            'acosar, amenazar o perseguir a nadie',
            'enviar spam, publicidad no solicitada ni mensajes automatizados mediante el formulario de contacto',
            'copiar, extraer, recopilar o revender la información de este sitio, ni usarla para crear perfiles de nadie',
            'usar el contenido del sitio para entrenar sistemas de inteligencia artificial o aprendizaje automático',
            'intentar romper, sobrecargar, sondear o eludir la seguridad del sitio, ni enviar código malicioso mediante el formulario',
          ],
        ],
      },
      {
        heading: 'Propiedad y uso permitido',
        body: [
          'Los textos, el diseño y los gráficos de este sitio pertenecen a Steven Avant. Puedes compartir enlaces y citar fragmentos breves, indicando la fuente, cuando valores a Steven para un trabajo. Cualquier otra copia o reutilización requiere su permiso por escrito.',
          'Los nombres de productos, empresas y marcas que aparecen en el sitio pertenecen a sus propietarios y solo se usan para describir la experiencia de Steven. Las empresas para las que ha trabajado o trabaja no gestionan este sitio, no lo respaldan ni se expresan a través de él.',
        ],
      },
      {
        heading: 'Sin garantías',
        body: [
          'Steven mantiene la información de este sitio exacta y actualizada en la medida de lo posible, pero puede cambiar sin previo aviso. El sitio se ofrece «tal cual», sin garantías de ningún tipo, y en ocasiones puede no estar disponible.',
        ],
      },
      {
        heading: 'Limitación de responsabilidad',
        body: [
          'En la máxima medida que permita la ley, Steven no es responsable de ninguna pérdida o daño derivado del uso de este sitio o de la confianza en su contenido.',
        ],
      },
      {
        heading: 'Los mensajes que envías',
        body: [
          'Eres responsable de lo que envías mediante el formulario de contacto. No incluyas información que no estés autorizado a compartir. Enviar un mensaje no crea un contrato ni la obligación de responder. El tratamiento de los mensajes se explica en la {privacy}.',
        ],
      },
      {
        heading: 'Enlaces a otros sitios',
        body: [
          'El sitio enlaza a servicios gestionados por terceros, como LinkedIn. Steven no es responsable de su contenido ni de sus prácticas, y al salir de este sitio se aplican sus propias condiciones.',
        ],
      },
      {
        heading: 'Legislación aplicable',
        body: [
          'Estas condiciones se rigen por las leyes de la Mancomunidad de Virginia (EE. UU.), sin tener en cuenta sus normas sobre conflictos de leyes, y cualquier disputa se resolverá ante los tribunales de Virginia. Esto no elimina los derechos que te reconozcan las leyes imperativas de protección del consumidor del país en el que vives.',
        ],
      },
      {
        heading: 'Cambios en estas condiciones',
        body: [
          'Si estas condiciones cambian, la nueva versión se publicará en esta página con una nueva fecha de «última actualización». Si sigues usando el sitio después de un cambio, aceptas las nuevas condiciones.',
        ],
      },
      {
        heading: 'Preguntas',
        body: ['Para cualquier pregunta sobre estas condiciones, usa la {contact}.'],
      },
    ],
  },
};
