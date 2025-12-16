import { Language } from '@/types';

type TranslationKey = 
  | 'welcome'
  | 'welcomeMessage'
  | 'tapToSpeak'
  | 'listening'
  | 'speaking'
  | 'home'
  | 'learn'
  | 'jobs'
  | 'guide'
  | 'profile'
  | 'businessGuide'
  | 'findWork'
  | 'learnSkills'
  | 'emergency'
  | 'settings'
  | 'selectLanguage'
  | 'english'
  | 'hindi'
  | 'telugu'
  | 'location'
  | 'budget'
  | 'skills'
  | 'cooking'
  | 'stitching'
  | 'farming'
  | 'crafts'
  | 'none'
  | 'village'
  | 'town'
  | 'city'
  | 'low'
  | 'medium'
  | 'high'
  | 'monthlyIncome'
  | 'sustainable'
  | 'verified'
  | 'apply'
  | 'accept'
  | 'start'
  | 'continue'
  | 'complete'
  | 'progress'
  | 'helpline'
  | 'callNow'
  | 'safetyFirst'
  | 'getStarted'
  | 'askMe'
  | 'suggestedBusiness'
  | 'governmentSchemes'
  | 'microLoans'
  | 'communitySupport';

const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    welcome: 'Welcome to Shakti',
    welcomeMessage: 'Your voice, your power, your future',
    tapToSpeak: 'Tap to speak',
    listening: 'Listening...',
    speaking: 'Speaking...',
    home: 'Home',
    learn: 'Learn',
    jobs: 'Jobs',
    guide: 'Guide',
    profile: 'Profile',
    businessGuide: 'Business Guide',
    findWork: 'Find Work',
    learnSkills: 'Learn Skills',
    emergency: 'Emergency',
    settings: 'Settings',
    selectLanguage: 'Select Language',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    location: 'Location',
    budget: 'Budget',
    skills: 'Skills',
    cooking: 'Cooking',
    stitching: 'Stitching',
    farming: 'Farming',
    crafts: 'Crafts',
    none: 'None',
    village: 'Village',
    town: 'Town',
    city: 'City',
    low: 'Easy',
    medium: 'Medium',
    high: 'Hard',
    monthlyIncome: 'Monthly Income',
    sustainable: 'Eco-Friendly',
    verified: 'Verified',
    apply: 'Apply',
    accept: 'Accept',
    start: 'Start',
    continue: 'Continue',
    complete: 'Complete',
    progress: 'Progress',
    helpline: 'Helpline',
    callNow: 'Call Now',
    safetyFirst: 'Safety First',
    getStarted: 'Get Started',
    askMe: 'Ask me anything',
    suggestedBusiness: 'Suggested Business',
    governmentSchemes: 'Government Schemes',
    microLoans: 'Micro Loans',
    communitySupport: 'Community Support',
  },
  hi: {
    welcome: 'शक्ति में आपका स्वागत है',
    welcomeMessage: 'आपकी आवाज़, आपकी शक्ति, आपका भविष्य',
    tapToSpeak: 'बोलने के लिए टैप करें',
    listening: 'सुन रहा हूँ...',
    speaking: 'बोल रहा हूँ...',
    home: 'होम',
    learn: 'सीखें',
    jobs: 'काम',
    guide: 'गाइड',
    profile: 'प्रोफाइल',
    businessGuide: 'बिज़नेस गाइड',
    findWork: 'काम खोजें',
    learnSkills: 'कौशल सीखें',
    emergency: 'आपातकाल',
    settings: 'सेटिंग्स',
    selectLanguage: 'भाषा चुनें',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    location: 'स्थान',
    budget: 'बजट',
    skills: 'कौशल',
    cooking: 'खाना बनाना',
    stitching: 'सिलाई',
    farming: 'खेती',
    crafts: 'शिल्प',
    none: 'कोई नहीं',
    village: 'गाँव',
    town: 'कस्बा',
    city: 'शहर',
    low: 'आसान',
    medium: 'मध्यम',
    high: 'कठिन',
    monthlyIncome: 'मासिक आय',
    sustainable: 'पर्यावरण हितैषी',
    verified: 'सत्यापित',
    apply: 'आवेदन करें',
    accept: 'स्वीकार करें',
    start: 'शुरू करें',
    continue: 'जारी रखें',
    complete: 'पूर्ण',
    progress: 'प्रगति',
    helpline: 'हेल्पलाइन',
    callNow: 'अभी कॉल करें',
    safetyFirst: 'सुरक्षा पहले',
    getStarted: 'शुरू करें',
    askMe: 'मुझसे कुछ भी पूछें',
    suggestedBusiness: 'सुझाया गया व्यापार',
    governmentSchemes: 'सरकारी योजनाएं',
    microLoans: 'माइक्रो लोन',
    communitySupport: 'सामुदायिक सहायता',
  },
  te: {
    welcome: 'శక్తికి స్వాగతం',
    welcomeMessage: 'మీ గొంతు, మీ శక్తి, మీ భవిష్యత్తు',
    tapToSpeak: 'మాట్లాడటానికి నొక్కండి',
    listening: 'వింటున్నాను...',
    speaking: 'మాట్లాడుతున్నాను...',
    home: 'హోమ్',
    learn: 'నేర్చుకో',
    jobs: 'ఉద్యోగాలు',
    guide: 'గైడ్',
    profile: 'ప్రొఫైల్',
    businessGuide: 'వ్యాపార గైడ్',
    findWork: 'పని కనుగొనండి',
    learnSkills: 'నైపుణ్యాలు నేర్చుకోండి',
    emergency: 'అత్యవసరం',
    settings: 'సెట్టింగ్స్',
    selectLanguage: 'భాష ఎంచుకోండి',
    english: 'English',
    hindi: 'हिंदी',
    telugu: 'తెలుగు',
    location: 'స్థానం',
    budget: 'బడ్జెట్',
    skills: 'నైపుణ్యాలు',
    cooking: 'వంట',
    stitching: 'కుట్టు',
    farming: 'వ్యవసాయం',
    crafts: 'హస్తకళలు',
    none: 'ఏదీ లేదు',
    village: 'గ్రామం',
    town: 'పట్టణం',
    city: 'నగరం',
    low: 'సులభం',
    medium: 'మధ్యస్థం',
    high: 'కఠినం',
    monthlyIncome: 'నెలవారీ ఆదాయం',
    sustainable: 'పర్యావరణ అనుకూలం',
    verified: 'ధృవీకరించబడింది',
    apply: 'దరఖాస్తు చేయండి',
    accept: 'అంగీకరించు',
    start: 'ప్రారంభించు',
    continue: 'కొనసాగించు',
    complete: 'పూర్తి',
    progress: 'పురోగతి',
    helpline: 'హెల్ప్‌లైన్',
    callNow: 'ఇప్పుడు కాల్ చేయండి',
    safetyFirst: 'భద్రత మొదట',
    getStarted: 'ప్రారంభించండి',
    askMe: 'నన్ను ఏదైనా అడగండి',
    suggestedBusiness: 'సూచించిన వ్యాపారం',
    governmentSchemes: 'ప్రభుత్వ పథకాలు',
    microLoans: 'మైక్రో రుణాలు',
    communitySupport: 'సమాజ మద్దతు',
  },
};

export const t = (key: TranslationKey, lang: Language): string => {
  return translations[lang][key] || translations['en'][key] || key;
};

export const getLanguageName = (lang: Language): string => {
  const names: Record<Language, string> = {
    en: 'English',
    hi: 'हिंदी',
    te: 'తెలుగు',
  };
  return names[lang];
};
