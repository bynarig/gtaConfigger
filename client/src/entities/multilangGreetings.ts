const greetings = [
  'Hi', // English
  '你好', // Mandarin Chinese
  'हैलो', // Hindi
  'Hola', // Spanish
  'Bonjour', // French
  'مرحبا', // Arabic
  'হ্যালো', // Bengali
  'Привет', // Russian
  'Olá', // Portuguese
  'नमस्ते', // Urdu
  'Ciao', // Italian
  'こんにちは', // Japanese
  '안녕하세요', // Korean
  'สวัสดี', // Thai
  'Merhaba', // Turkish
  'Hallo', // German
  'Xin chào', // Vietnamese
  'سلام', // Persian (Farsi)
  'Hej', // Swedish
  'Hei', // Norwegian
  'Hej', // Danish
  'Γεια σας', // Greek
  'Ahoj', // Czech
  'Cześć', // Polish
  'Здраво', // Serbian
  'Bok', // Croatian
  'Szia', // Hungarian
  'Hei', // Finnish
  'שלום', // Hebrew
  'வணக்கம்', // Tamil
  'హలో', // Telugu
  'ನಮಸ್ಕಾರ', // Kannada
  'ഹലോ', // Malayalam
  'ਹੈਲੋ', // Punjabi
  'હેલો', // Gujarati
  'សួស្តី', // Khmer
  'ສະບາຍດີ', // Lao
  'မင်္ဂလာပါ', // Burmese
  'හෙලෝ', // Sinhala
  'ሰላም', // Amharic
  'Moni', // Chichewa
  'Sawubona', // Zulu
  'Dumela', // Tswana
  'Habari', // Swahili
  'Moien', // Luxembourgish
  'Përshëndetje', // Albanian
  'გამარჯობა', // Georgian
  'Բարև', // Armenian
  'Sveiki', // Latvian
  'Sveikas', // Lithuanian
  'Tere', // Estonian
  'Buna', // Romanian
  'Zdravo', // Slovenian
  'Pozdrav', // Bosnian
  'Kaixo', // Basque
  'Dia dhuit', // Irish
  'Helo', // Welsh
  'Hallo', // Afrikaans
  'Halo', // Indonesian
  'Helo', // Malay
  'Kamusta', // Filipino (Tagalog)
  'Kumusta', // Cebuano
  'Salam', // Javanese
  'Halo', // Sundanese
  'नमस्कार', // Nepali
  'नमस्कार', // Marathi
  'ਹੈਲੋ', // Sindhi
  'హలో', // Tulu
  'ಹಲೋ', // Konkani
  'ഹലോ', // Kodava
  'हॅलो', // Kashmiri
  'हॅलो', // Garhwali
  'हॅलो', // Kumaoni
  'हॅलो', // Kangri
  'हॅलो', // Bundeli
  'हॅलो', // Bagheli
  'हॅलो', // Chhattisgarhi
  'हॅलो', // Malvi
  'हॅलो', // Nimadi
  'हॅलो', // Harauti
  'हॅलो', // Mewari
  'हॅलो', // Wagdi
  'हॅलो', // Ahirani
  'हॅलो', // Dhundhari
  'हॅलो', // Marwari
  'हॅलो', // Mewati
  'हॅलो', // Shekhawati
  'हॅलो', // Bagri
  'हॅलो', // Braj Bhasha
  'हॅलो', // Kannauji
  'हॅलो', // Awadhi
];



export default function multiLangGreetings(): string {
  return greetings[Math.floor(Math.random() * greetings.length)];
}