// Datenschutzerklärung und Nutzungsbedingungen (Deutsch). Same shape as en.ts.
import type { Legal } from './en';

const github = '<a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von GitHub</a>';
const formspree = '<a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Datenschutzerklärung von Formspree</a>';
const translation = 'Diese Übersetzung dient Ihrer Information. Bei Abweichungen gilt die englische Fassung.';

export const de: Legal = {
  updated: '2. November 2026',

  privacy: {
    title: 'Datenschutzerklärung',
    description: 'Welche Daten diese Website erhebt, wozu und was mit ihnen geschieht.',
    intro: [
      'Diese Erklärung beschreibt, welche Daten diese Website erhebt, wozu und was mit ihnen geschieht. Die Website ist ein persönliches Portfolio von Steven Avant in Virginia Beach, Virginia, USA, der für die hier beschriebenen Daten verantwortlich ist.',
      translation,
    ],
    sections: [
      {
        heading: 'Das Wichtigste in Kürze',
        body: [
          'Diese Website verwendet keine Cookies, keine Analyse-Tools, keine Werbung und kein Tracking. Die einzigen personenbezogenen Daten, die sie erhebt, sind die, die Sie über das Kontaktformular senden, und diese werden nur zur Beantwortung Ihrer Anfrage verwendet.',
        ],
      },
      {
        heading: 'Das Kontaktformular',
        body: [
          'Wenn Sie eine Nachricht senden, erhebt das Formular:',
          [
            'Ihren Namen und Ihre E-Mail-Adresse',
            'das Anliegen Ihrer Nachricht und die Nachricht selbst',
            'Ihr Unternehmen, Ihre Position und Ihre Telefonnummer, sofern Sie diese angeben',
            'die Sprache der Seite, von der aus Sie die Nachricht gesendet haben',
          ],
          'Das Formular wird über Formspree (formspree.io) zugestellt, einen Weiterleitungsdienst, der Ihre Nachricht an Stevens E-Mail-Postfach weitergibt. Formspree verarbeitet sie gemäß der ' + formspree + '.',
          'Ihre Daten werden nur verwendet, um Ihre Anfrage zu lesen und zu beantworten und um sich daraus ergebende Aufträge zu begleiten. Sie werden niemals verkauft, nicht für Werbung weitergegeben und in keinen Verteiler aufgenommen.',
          'Wenn Sie sich in der Europäischen Union oder im Vereinigten Königreich befinden: Rechtsgrundlage ist Ihre Kontaktanfrage und die Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO) sowie Stevens berechtigtes Interesse an der Beantwortung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO).',
        ],
      },
      {
        heading: 'Hosting und Server-Protokolle',
        body: [
          'Die Website wird bei GitHub Pages gehostet, einem Dienst der GitHub, Inc. Wie bei jeder Website sendet Ihr Browser bei jedem Aufruf technische Angaben mit, etwa Ihre IP-Adresse, den Browsertyp, die aufgerufene Seite und die Uhrzeit. GitHub kann diese protokollieren, um den Dienst zu betreiben und zu schützen, wie in der ' + github + ' beschrieben. Steven erhält diese Protokolle nicht und hat keinen Zugriff darauf.',
        ],
      },
      {
        heading: 'Speicherung in Ihrem Browser',
        body: [
          'Die Website setzt keine Cookies. Sie speichert drei kleine Einstellungen in Ihrem eigenen Browser, damit sie wie erwartet funktioniert:',
          [
            '<strong>theme</strong>: ob Sie das helle oder das dunkle Design gewählt haben',
            '<strong>terms-agreed</strong>: dass Sie dem Hinweis zur zulässigen Nutzung zugestimmt haben, damit er nicht erneut erscheint',
            '<strong>contact-sent-at</strong>: wann Sie zuletzt eine Nachricht gesendet haben, um wiederholtes Senden innerhalb einer Minute zu verhindern. Wird beim Schließen des Tabs gelöscht.',
          ],
          'Diese Angaben bleiben auf Ihrem Gerät und werden nie an jemanden übertragen. Sie können sie jederzeit in den Einstellungen Ihres Browsers löschen.',
        ],
      },
      {
        heading: 'Andere Dienste und Links',
        body: [
          'Schrift und Code der Website werden von der Website selbst ausgeliefert, sodass Ihr Browser beim Lesen keine Verbindung zu anderen Unternehmen aufbaut. Die einzige externe Verbindung besteht zu Formspree, und zwar nur, wenn Sie das Kontaktformular absenden.',
          'Die Fußzeile verlinkt auf Stevens LinkedIn-Profil. Wenn Sie dem Link folgen, befinden Sie sich auf LinkedIn, und es gilt die Datenschutzerklärung von LinkedIn.',
        ],
      },
      {
        heading: 'Speicherdauer',
        body: [
          'Nachrichten werden nur so lange aufbewahrt, wie es für die Beantwortung Ihrer Anfrage und die Begleitung daraus entstehender Aufträge nötig ist, und danach gelöscht. Sie können jederzeit eine frühere Löschung verlangen.',
        ],
      },
      {
        heading: 'Ihre Rechte',
        body: [
          'Sie können Auskunft über die Daten verlangen, die Steven über Sie gespeichert hat, sowie deren Berichtigung oder Löschung. Wenn Sie sich in der Europäischen Union oder im Vereinigten Königreich befinden, haben Sie außerdem das Recht auf Widerspruch, auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit und auf Beschwerde bei Ihrer Datenschutz-Aufsichtsbehörde.',
          'Für eine Anfrage nutzen Sie bitte die {contact} und wählen „Etwas anderes“. Zum Schutz Ihrer Daten kann Steven an die E-Mail-Adresse antworten, von der Sie ursprünglich geschrieben haben, um zu bestätigen, dass die Anfrage von Ihnen stammt.',
        ],
      },
      {
        heading: 'Ort der Verarbeitung',
        body: [
          'Steven befindet sich in den Vereinigten Staaten. Daten, die Sie senden, werden daher in den USA verarbeitet, wo das Datenschutzrecht von dem Ihres Landes abweichen kann.',
        ],
      },
      {
        heading: 'Sicherheit',
        body: [
          'Die Website wird ausschließlich über eine verschlüsselte Verbindung (HTTPS) ausgeliefert und nutzt eine strenge Sicherheitsrichtlinie sowie Spamschutz im Formular. Keine Übertragung über das Internet ist vollständig sicher. Bitte senden Sie daher keine Passwörter, Finanzdaten, Ausweisnummern oder andere sensible Angaben in einer Nachricht.',
        ],
      },
      {
        heading: 'Kinder',
        body: [
          'Diese Website richtet sich an Arbeitgeber und Kunden, nicht an Kinder. Sie erhebt wissentlich keine Daten von Personen unter 16 Jahren. Wenn Sie glauben, dass ein Kind eine Nachricht gesendet hat, nutzen Sie bitte die {contact}, und die Nachricht wird gelöscht.',
        ],
      },
      {
        heading: 'Änderungen dieser Erklärung',
        body: [
          'Wenn sich diese Erklärung ändert, wird die neue Fassung auf dieser Seite mit einem neuen Datum „zuletzt aktualisiert“ veröffentlicht.',
        ],
      },
      {
        heading: 'Fragen',
        body: ['Bei Fragen zu dieser Erklärung oder zu Ihren Daten nutzen Sie bitte die {contact}.'],
      },
    ],
  },

  terms: {
    title: 'Nutzungsbedingungen',
    description: 'Die Regeln für die Nutzung dieser Website und der Informationen darauf.',
    intro: [
      'Diese Bedingungen gelten für alle Besucherinnen und Besucher dieser Website, die von Steven Avant betrieben wird. Mit der Nutzung der Website stimmen Sie ihnen zu. Wenn Sie nicht einverstanden sind, nutzen Sie die Website bitte nicht.',
      translation,
    ],
    sections: [
      {
        heading: 'Zweck dieser Website',
        body: [
          'Diese Website stellt Stevens beruflichen Werdegang vor, damit Arbeitgeber und Kunden seine Arbeit kennenlernen und Kontakt aufnehmen können. Sie dient nur der Information. Nichts auf ihr ist ein Angebot, ein Kostenvoranschlag oder ein Vertrag; jede Zusammenarbeit wird gesondert und schriftlich vereinbart.',
        ],
      },
      {
        heading: 'Zulässige Nutzung',
        body: [
          'Sie dürfen die Informationen auf dieser Website nur für rechtmäßige, berufliche Zwecke nutzen, etwa um Steven für eine Stelle, einen Projektauftrag oder einen privaten Auftrag in Betracht zu ziehen. Sie verpflichten sich, Folgendes zu unterlassen:',
          [
            'Betrug, Identitätsdiebstahl, Identitätstäuschung, Phishing oder Social Engineering, auch gegenüber Steven oder einem hier genannten Arbeitgeber',
            'Belästigung, Bedrohung oder Nachstellung anderer Personen',
            'Spam, unerwünschte Werbung oder automatisierte Nachrichten über das Kontaktformular',
            'Kopieren, Auslesen, Sammeln oder Weiterverkaufen der Informationen auf dieser Website oder deren Nutzung zur Erstellung von Personenprofilen',
            'Nutzung der Inhalte zum Training von Systemen der künstlichen Intelligenz oder des maschinellen Lernens',
            'Versuche, die Website zu stören, zu überlasten, auszuspähen oder ihre Sicherheitsmaßnahmen zu umgehen, oder das Senden von Schadcode über das Formular',
          ],
        ],
      },
      {
        heading: 'Rechte und erlaubte Weitergabe',
        body: [
          'Texte, Gestaltung und Grafiken dieser Website gehören Steven Avant. Sie dürfen gern Links darauf teilen und kurze Auszüge mit Quellenangabe zitieren, wenn Sie Steven für eine Tätigkeit in Betracht ziehen. Jede andere Vervielfältigung oder Weiterverwendung bedarf seiner schriftlichen Zustimmung.',
          'Auf der Website genannte Produkt-, Firmen- und Markennamen gehören ihren jeweiligen Inhabern und dienen nur der Beschreibung von Stevens Erfahrung. Frühere und aktuelle Arbeitgeber, die hier genannt werden, betreiben diese Website nicht, unterstützen sie nicht und äußern sich nicht über sie.',
        ],
      },
      {
        heading: 'Keine Gewähr',
        body: [
          'Steven hält die Informationen hier nach bestem Wissen korrekt und aktuell, sie können sich jedoch ohne Ankündigung ändern. Die Website wird ohne Gewähr („wie besehen“) bereitgestellt und ist möglicherweise nicht immer erreichbar.',
        ],
      },
      {
        heading: 'Haftungsbeschränkung',
        body: [
          'Soweit gesetzlich zulässig, haftet Steven nicht für Verluste oder Schäden, die aus der Nutzung dieser Website oder dem Vertrauen auf ihre Inhalte entstehen.',
        ],
      },
      {
        heading: 'Ihre Nachrichten',
        body: [
          'Sie sind für den Inhalt verantwortlich, den Sie über das Kontaktformular senden. Bitte senden Sie keine Informationen, zu deren Weitergabe Sie nicht berechtigt sind. Das Senden einer Nachricht begründet weder einen Vertrag noch eine Pflicht zur Antwort. Wie Nachrichten behandelt werden, erklärt die {privacy}.',
        ],
      },
      {
        heading: 'Links zu anderen Websites',
        body: [
          'Die Website verlinkt auf Dienste Dritter, etwa LinkedIn. Steven ist nicht für deren Inhalte oder Praktiken verantwortlich; sobald Sie diese Website verlassen, gelten deren eigene Bedingungen.',
        ],
      },
      {
        heading: 'Anwendbares Recht',
        body: [
          'Für diese Bedingungen gilt das Recht des Commonwealth of Virginia, USA, unter Ausschluss seiner Kollisionsnormen. Für Streitigkeiten sind die Gerichte in Virginia zuständig. Zwingende Verbraucherschutzrechte des Landes, in dem Sie leben, bleiben davon unberührt.',
        ],
      },
      {
        heading: 'Änderungen dieser Bedingungen',
        body: [
          'Wenn sich diese Bedingungen ändern, wird die neue Fassung auf dieser Seite mit einem neuen Datum „zuletzt aktualisiert“ veröffentlicht. Wer die Website nach einer Änderung weiter nutzt, akzeptiert die neuen Bedingungen.',
        ],
      },
      {
        heading: 'Fragen',
        body: ['Bei Fragen zu diesen Bedingungen nutzen Sie bitte die {contact}.'],
      },
    ],
  },
};
