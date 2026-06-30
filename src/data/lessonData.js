// Static learning content for the app.
// Each language has categories (vocabulary, phrases, grammar),
// and each category has a list of items with a term, translation,
// and a simple pronunciation guide.

export const languages = [
  { id: 'es', name: 'Spanish', flag: '🇪🇸' },
  { id: 'fr', name: 'French', flag: '🇫🇷' },
  { id: 'de', name: 'German', flag: '🇩🇪' },
]

export const categories = [
  { id: 'vocabulary', name: 'Vocabulary', description: 'Everyday words' },
  { id: 'phrases', name: 'Phrases', description: 'Common expressions' },
  { id: 'grammar', name: 'Grammar', description: 'Core grammar rules' },
]

export const content = {
  es: {
    vocabulary: [
      { id: 'es-v1', term: 'Hola', translation: 'Hello', pronunciation: 'OH-lah' },
      { id: 'es-v2', term: 'Gracias', translation: 'Thank you', pronunciation: 'GRAH-syahs' },
      { id: 'es-v3', term: 'Agua', translation: 'Water', pronunciation: 'AH-gwah' },
      { id: 'es-v4', term: 'Comida', translation: 'Food', pronunciation: 'koh-MEE-dah' },
      { id: 'es-v5', term: 'Amigo', translation: 'Friend', pronunciation: 'ah-MEE-goh' },
      { id: 'es-v6', term: 'Casa', translation: 'House', pronunciation: 'KAH-sah' },
      { id: 'es-v7', term: 'Libro', translation: 'Book', pronunciation: 'LEE-broh' },
      { id: 'es-v8', term: 'Tiempo', translation: 'Time / Weather', pronunciation: 'TYEM-poh' },
    ],
    phrases: [
      { id: 'es-p1', term: '¿Cómo estás?', translation: 'How are you?', pronunciation: 'KOH-moh es-TAHS' },
      { id: 'es-p2', term: 'Mucho gusto', translation: 'Nice to meet you', pronunciation: 'MOO-choh GOOS-toh' },
      { id: 'es-p3', term: '¿Dónde está el baño?', translation: 'Where is the bathroom?', pronunciation: 'DOHN-deh es-TAH el BAH-nyoh' },
      { id: 'es-p4', term: 'No entiendo', translation: "I don't understand", pronunciation: 'noh en-TYEN-doh' },
      { id: 'es-p5', term: 'Por favor', translation: 'Please', pronunciation: 'por fah-VOR' },
      { id: 'es-p6', term: 'Lo siento', translation: "I'm sorry", pronunciation: 'loh SYEN-toh' },
    ],
    grammar: [
      { id: 'es-g1', term: 'Ser vs Estar', translation: "'Ser' = permanent traits, 'Estar' = temporary states", pronunciation: 'sehr / es-TAHR' },
      { id: 'es-g2', term: 'El / La', translation: 'Masculine and feminine definite articles (the)', pronunciation: 'el / lah' },
      { id: 'es-g3', term: 'Plural nouns', translation: "Add '-s' or '-es' to form plurals", pronunciation: '-s / -es' },
      { id: 'es-g4', term: 'Present tense -ar verbs', translation: "Drop '-ar' and add -o, -as, -a, -amos, -áis, -an", pronunciation: '-ar' },
    ],
  },
  fr: {
    vocabulary: [
      { id: 'fr-v1', term: 'Bonjour', translation: 'Hello', pronunciation: 'bohn-ZHOOR' },
      { id: 'fr-v2', term: 'Merci', translation: 'Thank you', pronunciation: 'mehr-SEE' },
      { id: 'fr-v3', term: 'Eau', translation: 'Water', pronunciation: 'oh' },
      { id: 'fr-v4', term: 'Nourriture', translation: 'Food', pronunciation: 'noo-ree-TOOR' },
      { id: 'fr-v5', term: 'Ami', translation: 'Friend', pronunciation: 'ah-MEE' },
      { id: 'fr-v6', term: 'Maison', translation: 'House', pronunciation: 'meh-ZOHN' },
      { id: 'fr-v7', term: 'Livre', translation: 'Book', pronunciation: 'LEE-vruh' },
      { id: 'fr-v8', term: 'Temps', translation: 'Time / Weather', pronunciation: 'tahn' },
    ],
    phrases: [
      { id: 'fr-p1', term: 'Comment ça va?', translation: 'How are you?', pronunciation: 'koh-mahn sah VAH' },
      { id: 'fr-p2', term: 'Enchanté', translation: 'Nice to meet you', pronunciation: 'ahn-shahn-TAY' },
      { id: 'fr-p3', term: 'Où sont les toilettes?', translation: 'Where is the bathroom?', pronunciation: 'oo sohn lay twah-LET' },
      { id: 'fr-p4', term: 'Je ne comprends pas', translation: "I don't understand", pronunciation: 'zhuh nuh kohm-prahn PAH' },
      { id: 'fr-p5', term: "S'il vous plaît", translation: 'Please', pronunciation: 'seel voo PLEH' },
      { id: 'fr-p6', term: 'Désolé', translation: "I'm sorry", pronunciation: 'day-zoh-LAY' },
    ],
    grammar: [
      { id: 'fr-g1', term: 'Le / La / Les', translation: 'Masculine, feminine, and plural definite articles (the)', pronunciation: 'luh / lah / lay' },
      { id: 'fr-g2', term: 'Être vs Avoir', translation: "'Être' = to be, 'Avoir' = to have", pronunciation: 'EH-truh / ah-VWAHR' },
      { id: 'fr-g3', term: 'Plural nouns', translation: "Usually add '-s' (often silent) to form plurals", pronunciation: '-s' },
      { id: 'fr-g4', term: 'Present tense -er verbs', translation: 'Drop -er and add -e, -es, -e, -ons, -ez, -ent', pronunciation: '-er' },
    ],
  },
  de: {
    vocabulary: [
      { id: 'de-v1', term: 'Hallo', translation: 'Hello', pronunciation: 'HAH-loh' },
      { id: 'de-v2', term: 'Danke', translation: 'Thank you', pronunciation: 'DAHN-kuh' },
      { id: 'de-v3', term: 'Wasser', translation: 'Water', pronunciation: 'VAH-ser' },
      { id: 'de-v4', term: 'Essen', translation: 'Food', pronunciation: 'EH-sen' },
      { id: 'de-v5', term: 'Freund', translation: 'Friend', pronunciation: 'froynd' },
      { id: 'de-v6', term: 'Haus', translation: 'House', pronunciation: 'hows' },
      { id: 'de-v7', term: 'Buch', translation: 'Book', pronunciation: 'bookh' },
      { id: 'de-v8', term: 'Zeit', translation: 'Time', pronunciation: 'tsyte' },
    ],
    phrases: [
      { id: 'de-p1', term: 'Wie geht es dir?', translation: 'How are you?', pronunciation: 'vee gayt es deer' },
      { id: 'de-p2', term: 'Schön, dich zu treffen', translation: 'Nice to meet you', pronunciation: 'shurn dikh tsoo TREH-fen' },
      { id: 'de-p3', term: 'Wo ist die Toilette?', translation: 'Where is the bathroom?', pronunciation: 'voh ist dee toy-LEH-tuh' },
      { id: 'de-p4', term: 'Ich verstehe nicht', translation: "I don't understand", pronunciation: 'ikh fer-SHTAY-uh nikht' },
      { id: 'de-p5', term: 'Bitte', translation: 'Please', pronunciation: 'BIT-uh' },
      { id: 'de-p6', term: 'Es tut mir leid', translation: "I'm sorry", pronunciation: 'es toot meer lyte' },
    ],
    grammar: [
      { id: 'de-g1', term: 'Der / Die / Das', translation: 'Masculine, feminine, and neuter definite articles (the)', pronunciation: 'dehr / dee / dahs' },
      { id: 'de-g2', term: 'Sein vs Haben', translation: "'Sein' = to be, 'Haben' = to have", pronunciation: 'zyne / HAH-ben' },
      { id: 'de-g3', term: 'Noun capitalization', translation: 'All nouns are capitalized in German', pronunciation: '—' },
      { id: 'de-g4', term: 'Word order (V2 rule)', translation: 'The conjugated verb is always the second element in a sentence', pronunciation: '—' },
    ],
  },
}

export function getAllItems(languageId) {
  const lang = content[languageId]
  if (!lang) return []
  return [...lang.vocabulary, ...lang.phrases, ...lang.grammar]
}
