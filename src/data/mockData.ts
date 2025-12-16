import { BusinessIdea, Job, LearningModule, Skill } from '@/types';

/* =========================
      NEW TYPES
========================= */

export interface VolunteerTour {
  id: string;
  village: string;
  villageHi: string;
  villageTe: string;
  date: string;
  skill: string;
  skillHi: string;
  skillTe: string;
  description: string;
  descriptionHi: string;
  descriptionTe: string;
  volunteersNeeded: number;
}

export interface Scheme {
  id: string;
  name: string;
  nameHi: string;
  nameTe: string;
  description: string;
  descriptionHi: string;
  descriptionTe: string;
  benefit: string;
  benefitHi: string;
  benefitTe: string;
  link: string;
  category: 'loan' | 'subsidy' | 'education';
}

/* =========================
      DATA ARRAYS
========================= */

export const skills: Skill[] = [
  { id: 'cooking', name: 'Cooking', nameHi: 'खाना बनाना', nameTe: 'వంట', icon: '🍳' },
  { id: 'stitching', name: 'Stitching', nameHi: 'सिलाई', nameTe: 'కుట్టు', icon: '🧵' },
  { id: 'farming', name: 'Farming', nameHi: 'खेती', nameTe: 'వ్యవసాయం', icon: '🌾' },
  { id: 'crafts', name: 'Crafts', nameHi: 'शिल्प', nameTe: 'హస్తకళలు', icon: '🎨' },
  { id: 'none', name: 'None', nameHi: 'कोई नहीं', nameTe: 'ఏదీ లేదు', icon: '✨' },
];

// NEW: Education Tours for Volunteers
export const volunteerTours: VolunteerTour[] = [
  {
    id: 'v1',
    village: 'Khed Village',
    villageHi: 'खेड गांव',
    villageTe: 'ఖేడ్ గ్రామం',
    date: 'Dec 20, 2025',
    skill: 'Digital Literacy',
    skillHi: 'डिजिटल साक्षरता',
    skillTe: 'డిజిటల్ అక్షరాస్యత',
    description: 'Teaching basic smartphone usage and online banking to local women.',
    descriptionHi: 'स्थानीय महिलाओं को स्मार्टफोन के बुनियादी उपयोग और ऑनलाइन बैंकिंग सिखाना।',
    descriptionTe: 'స్థానిక మహిళలకు ప్రాథమిక స్మార్ట్‌ఫోన్ వినియోగం మరియు ఆన్‌లైన్ బ్యాంకింగ్‌ను బోధించడం.',
    volunteersNeeded: 5
  },
  {
    id: 'v2',
    village: 'Maval Region',
    villageHi: 'मावल क्षेत्र',
    villageTe: 'మావల్ ప్రాంతం',
    date: 'Dec 24, 2025',
    skill: 'Organic Farming',
    skillHi: 'जैविक खेती',
    skillTe: 'సేంద్రియ వ్యవసాయం',
    description: 'Practical session on composting techniques and native seed selection.',
    descriptionHi: 'खाद बनाने की तकनीक और देशी बीज चयन पर व्यावहारिक सत्र।',
    descriptionTe: 'కంపోస్టింగ్ పద్ధతులు మరియు స్థానిక విత్తనాల ఎంపికపై ప్రాక్టికల్ సెషన్.',
    volunteersNeeded: 3
  },
  {
    id: 'v3',
    village: 'Shirur District',
    villageHi: 'शिरूर जिला',
    villageTe: 'శిరూర్ జిల్లా',
    date: 'Jan 05, 2026',
    skill: 'Handicraft Design',
    skillHi: 'हस्तशिल्प डिजाइन',
    skillTe: 'హస్తకళల డిజైన్',
    description: 'Helping SHGs improve product finishing for urban market standards.',
    descriptionHi: 'शहरी बाजार के मानकों के लिए उत्पाद फिनिशिंग में SHG की मदद करना।',
    descriptionTe: 'పట్టణ మార్కెట్ ప్రమాణాల కోసం ఉత్పత్తి ఫినిషింగ్‌ను మెరుగుపరచడంలో SHGలకు సహాయపడటం.',
    volunteersNeeded: 4
  }
];

export const businessIdeas: BusinessIdea[] = [
  {
    id: '1',
    name: 'Tiffin Service',
    nameHi: 'टिफिन सर्विस',
    nameTe: 'టిఫిన్ సర్వీస్',
    icon: '🍱',
    estimatedIncome: '8,000-15,000',
    difficulty: 'low',
    demand: 'high',
    sustainable: true,
    requiredBudget: '₹2,000-5,000',
    description: 'Prepare and deliver home-cooked meals',
    descriptionHi: 'घर का खाना बनाएं और डिलीवर करें',
    descriptionTe: 'ఇంటి వంటలు తయారు చేసి డెలివరీ చేయండి',
  },
  {
    id: '2',
    name: 'Tailoring',
    nameHi: 'टेलरिंग',
    nameTe: 'టైలరింగ్',
    icon: '👗',
    estimatedIncome: '6,000-12,000',
    difficulty: 'medium',
    demand: 'high',
    sustainable: true,
    requiredBudget: '₹5,000-10,000',
    description: 'Stitch clothes and do alterations',
    descriptionHi: 'कपड़े सिलें और बदलाव करें',
    descriptionTe: 'దుస్తులు కుట్టండి మరియు మార్పులు చేయండి',
  },
  {
    id: '3',
    name: 'Vegetable Selling',
    nameHi: 'सब्जी बेचना',
    nameTe: 'కూరగాయలు అమ్మడం',
    icon: '🥬',
    estimatedIncome: '5,000-10,000',
    difficulty: 'low',
    demand: 'high',
    sustainable: true,
    requiredBudget: '₹1,000-3,000',
    description: 'Sell fresh vegetables locally',
    descriptionHi: 'स्थानीय रूप से ताजी सब्जियां बेचें',
    descriptionTe: 'స్థానికంగా తాజా కూరగాయలు అమ్మండి',
  },
  {
    id: '4',
    name: 'Handicrafts',
    nameHi: 'हस्तशिल्प',
    nameTe: 'హస్తకళలు',
    icon: '🏺',
    estimatedIncome: '4,000-8,000',
    difficulty: 'medium',
    demand: 'medium',
    sustainable: true,
    requiredBudget: '₹500-2,000',
    description: 'Create and sell handmade items',
    descriptionHi: 'हाथ से बनी चीजें बनाएं और बेचें',
    descriptionTe: 'చేతితో తయారు చేసిన వస్తువులను తయారు చేసి అమ్మండి',
  },
  {
    id: '5',
    name: 'Beauty Services',
    nameHi: 'ब्यूटी सर्विसेस',
    nameTe: 'బ్యూటీ సర్వీసెస్',
    icon: '💅',
    estimatedIncome: '7,000-15,000',
    difficulty: 'medium',
    demand: 'high',
    sustainable: false,
    requiredBudget: '₹3,000-8,000',
    description: 'Provide beauty services at home',
    descriptionHi: 'घर पर ब्यूटी सेवाएं दें',
    descriptionTe: 'ఇంట్లో బ్యూటీ సేవలు అందించండి',
  },
];

export const jobs: Job[] = [
  { id: '1', title: 'Kitchen Helper', titleHi: 'रसोई सहायक', titleTe: 'వంటగది సహాయకురాలు', employer: 'Annapurna Restaurant', pay: '400', location: 'Market Area', distance: '2 km', icon: '🍳', verified: true, type: 'daily' },
  { id: '2', title: 'Stitching Work', titleHi: 'सिलाई का काम', titleTe: 'కుట్టు పని', employer: 'Local Tailor Shop', pay: '5,000', location: 'Main Bazaar', distance: '1.5 km', icon: '🧵', verified: true, type: 'monthly' },
  { id: '3', title: 'Vegetable Sorting', titleHi: 'सब्जी छंटाई', titleTe: 'కూరగాయల సార్టింగ్', employer: 'Fresh Farm Co-op', pay: '350', location: 'Village Center', distance: '500 m', icon: '🥕', verified: true, type: 'daily' },
  { id: '4', title: 'Craft Work', titleHi: 'शिल्प कार्य', titleTe: 'హస్తకళ పని', employer: 'Shakti SHG', pay: '3,000', location: 'Community Center', distance: '1 km', icon: '🎨', verified: true, type: 'weekly' },
  { id: '5', title: 'Childcare Assistant', titleHi: 'बाल देखभाल सहायक', titleTe: 'పిల్లల సంరక్షణ సహాయకురాలు', employer: 'Village Creche', pay: '450', location: 'Residential Area', distance: '1.2 km', icon: '👶', verified: true, type: 'daily' },
  { id: '6', title: 'Data Entry Assistant', titleHi: 'डाटा एंट्री सहायक', titleTe: 'డేటా ఎంట్రీ సహాయకురాలు', employer: 'CSC Center', pay: '200', location: 'Town Center', distance: '3.5 km', icon: '💻', verified: true, type: 'daily' },
  { id: '7', title: 'Home Delivery Helper', titleHi: 'होम डिलीवरी सहायक', titleTe: 'హోమ్ డెలివరీ సహాయకురాలు', employer: 'Local Grocery', pay: '300', location: 'Market Street', distance: '2 km', icon: '🚲', verified: false, type: 'daily' },
  { id: '8', title: 'Packaging Assistant', titleHi: 'पैकेजिंग सहायक', titleTe: 'ప్యాకేజింగ్ సహాయకురాలు', employer: 'Rural Artisans Hub', pay: '2,500', location: 'Industrial Zone', distance: '4.2 km', icon: '📦', verified: true, type: 'weekly' }
];

export const learningModules: LearningModule[] = [
  { 
    id: 1, 
    title: 'Start Your Tiffin Business', 
    titleHi: 'टिफिन बिज़नेस शुरू करें', 
    titleTe: 'టిఫిన్ వ్యాపారం ప్రారంభించండి', 
    icon: '🍱', 
    duration: '3 min', 
    type: 'video', 
    progress: 0, 
    completed: false,
    steps: ['Clean your kitchen space', 'Plan a healthy weekly menu', 'Buy fresh ingredients', 'Pack meals in clean boxes']
  },
  { 
    id: 2, 
    title: 'Basic Stitching', 
    titleHi: 'बेसिक सिलाई', 
    titleTe: 'ప్రాథమిక కుట్టు', 
    icon: '🧵', 
    duration: '5 min', 
    type: 'visual', 
    progress: 60, 
    completed: false,
    steps: ['Thread the needle correctly', 'Practice straight line stitching', 'Learn to cut fabric safely', 'Sew a simple button']
  },
  { 
    id: 3, 
    title: 'Pricing Your Products', 
    titleHi: 'अपने उत्पादों की कीमत', 
    titleTe: 'మీ ఉత్పత్తుల ధర', 
    icon: '💰', 
    duration: '2 min', 
    type: 'audio', 
    progress: 100, 
    completed: true,
    steps: ['Calculate cost of materials', 'Add your labor time cost', 'Check market prices', 'Set a final fair price']
  },
  { 
    id: 4, 
    title: 'Government Schemes', 
    titleHi: 'सरकारी योजनाएं', 
    titleTe: 'ప్రభుత్వ పథకాలు', 
    icon: '📋', 
    duration: '4 min', 
    type: 'video', 
    progress: 0, 
    completed: false,
    steps: ['Identify your category', 'Keep your ID proof ready', 'Visit the local office', 'Fill the application form']
  },
  { 
    id: 5, 
    title: 'Selling at Local Markets', 
    titleHi: 'स्थानीय बाज़ारों में बेचना', 
    titleTe: 'స్థానిక మార్కెట్లలో అమ్మడం', 
    icon: '🏪', 
    duration: '3 min', 
    type: 'visual', 
    progress: 30, 
    completed: false,
    steps: ['Clean your display area', 'Arrange products neatly', 'Smile and greet customers', 'Keep change for payments']
  },
  { 
    id: 6, 
    title: 'Digital Payments & Safety', 
    titleHi: 'डिजिटल भुगतान और सुरक्षा', 
    titleTe: 'డిజిటల్ చెల్లింపులు మరియు భద్రత', 
    icon: '📱', 
    duration: '4 min', 
    type: 'video', 
    progress: 0, 
    completed: false,
    steps: ['Open your payment app', 'Check receiver name twice', 'Never share your PIN', 'Verify SMS confirmation']
  },
  { 
    id: 7, 
    title: 'Mushroom Farming Guide', 
    titleHi: 'मशरूम खेती गाइड', 
    titleTe: 'మష్రూమ్ సాగు మార్గదర్శి', 
    icon: '🍄', 
    duration: '6 min', 
    type: 'visual', 
    progress: 0, 
    completed: false,
    steps: ['Prepare the dark room', 'Arrange the growing beds', 'Control the temperature', 'Harvest at the right time']
  },
  { 
    id: 8, 
    title: 'Manage Your Savings', 
    titleHi: 'अपनी बचत का प्रबंधन करें', 
    titleTe: 'మీ పొదుపును నిర్వహించుకోండి', 
    icon: '🏦', 
    duration: '3 min', 
    type: 'audio', 
    progress: 0, 
    completed: false,
    steps: ['Track daily expenses', 'Set a monthly goal', 'Put money in bank account', 'Avoid unnecessary spending']
  }
];

export const governmentSchemes: Scheme[] = [
  { id: '1', name: 'Lakhpati Didi Scheme', nameHi: 'लखपति दीदी योजना', nameTe: 'లఖ్ పతి దీదీ పథకం', description: 'Empowering women in Self-Help Groups (SHGs) to earn at least ₹1 Lakh per year.', benefit: 'Interest-free loans and technical skill training.', link: 'https://lakhpatididi.gov.in/', category: 'loan', descriptionHi: 'SHG महिलाओं को प्रति वर्ष ₹1 लाख कमाने के लिए सशक्त बनाना।', descriptionTe: 'SHG మహిళలు ఏడాదికి ₹1 లక్ష సంపాదించేలా ప్రోత్సహించడం.', benefitHi: 'ब्याज मुक्त ऋण और प्रशिक्षण।', benefitTe: 'వడ్డీ లేని రుణాలు మరియు శిక్షణ.' },
  { id: '2', name: 'PM Matru Vandana Yojana', nameHi: 'प्रधानमंत्री मातृ वंदना योजना', nameTe: 'ప్రధాన మంత్రి మాతృ వందన యోజన', description: 'Financial support for pregnant and lactating mothers.', benefit: 'Cash incentive of ₹5,000 to ₹6,000.', link: 'https://wcd.nic.in/', category: 'subsidy', descriptionHi: 'गर्भवती महिलाओं के लिए वित्तीय सहायता।', descriptionTe: 'గర్భిణీలకు ఆర్థిక సాయం.', benefitHi: '₹5,000 - ₹6,000 नकद।', benefitTe: '₹5,000 - ₹6,000 నగదు.' },
  { id: '3', name: 'Mudrā Yojana for Women', nameHi: 'महिला मुद्रा योजना', nameTe: 'మహిళా ముద్రా యోజన', description: 'Loans for women entrepreneurs to start small businesses.', benefit: 'Loans up to ₹10 Lakhs with lower interest.', link: 'https://www.mudra.org.in/', category: 'loan', descriptionHi: 'छोटा व्यवसाय शुरू करने के लिए ऋण।', descriptionTe: 'చిన్న వ్యాపారాల కోసం రుణాలు.', benefitHi: 'कम ब्याज पर ₹10 लाख तक ऋण।', benefitTe: 'తక్కువ వడ్డీతో ₹10 లక్షల వరకు రుణం.' },
  { id: '4', name: 'Mahila Coir Yojana', nameHi: 'महिला कोयर योजना', nameTe: 'మహిళా కాయిర్ యోజన', description: 'Subsidized machinery for women in the coir industry.', benefit: '75% subsidy on machinery costs.', link: 'https://coirboard.gov.in/', category: 'subsidy', descriptionHi: 'कोयर उद्योग में मशीनों पर सब्सिडी।', descriptionTe: 'కాయిర్ పరిశ్రమలో యంత్రాలపై రాయితీ.', benefitHi: '75% सब्सिडी।', benefitTe: '75% రాయితీ.' },
  { id: '5', name: 'Stand-Up India Scheme', nameHi: 'स्टैंड-अप इंडिया योजना', nameTe: 'స్టాండ్-అప్ ఇండియా పథకం', description: 'Bank loans for female entrepreneurs for new enterprises.', benefit: 'Loans between ₹10 Lakh and ₹1 Crore.', link: 'https://www.standupmitra.in/', category: 'loan', descriptionHi: 'नए उद्यमों के लिए बैंक ऋण।', descriptionTe: 'కొత్త పరిశ్రమల కోసం బ్యాంక్ రుణాలు.', benefitHi: '₹10 लाख से ₹1 करोड़ ऋण।', benefitTe: '₹10 లక్షల నుండి ₹1 కోటి రుణం.' },
  { id: '6', name: 'Sukanya Samriddhi Yojana', nameHi: 'सुकन्या समृद्धि योजना', nameTe: 'సుకున్య సమృద్ధి యోజన', description: 'Savings scheme for the girl child future.', benefit: 'High interest rate and tax benefits.', link: 'https://www.nsiindia.gov.in/', category: 'education', descriptionHi: 'बेटी के भविष्य के लिए बचत।', descriptionTe: 'ఆడపిల్లల భవిష్యత్తు కోసం పొదుపు.', benefitHi: 'उच्च ब्याज दर।', benefitTe: 'అధిక వడ్డీ రేటు.' },
  { id: '7', name: 'Ujjwala Yojana', nameHi: 'उज्ज्वला योजना', nameTe: 'ఉజ్వల యోజన', description: 'Clean cooking fuel (LPG) for BPL families.', benefit: 'Free LPG connection.', link: 'https://www.pmuy.gov.in/', category: 'subsidy', descriptionHi: 'मुफ्त गैस कनेक्शन।', descriptionTe: 'ఉచిత గ్యాస్ కనెక్షన్.', benefitHi: 'मुफ्त एलपीजी।', benefitTe: 'ఉచిత గ్యాస్.' },
  { id: '8', name: 'Beti Bachao Beti Padhao', nameHi: 'बेटी बचाओ बेटी पढ़ाओ', nameTe: 'బేటీ బచావో బేటీ పఢావో', description: 'Protection and education of the girl child.', benefit: 'Support for school enrollment.', link: 'https://wcd.nic.in/', category: 'education', descriptionHi: 'बेटियों की शिक्षा और सुरक्षा।', descriptionTe: 'ఆడపిల్లల రక్షణ మరియు విద్య.', benefitHi: 'शिक्षा में सहायता।', benefitTe: 'విద్యకు మద్దతు.' },
  { id: '9', name: 'STEP Programme', nameHi: 'स्टेप (STEP) कार्यक्रम', nameTe: 'స్టెప్ (STEP) ప్రోగ్రామ్', description: 'Employability skills for women.', benefit: 'Free skill training in 10 sectors.', link: 'https://wcd.nic.in/', category: 'education', descriptionHi: 'रोजगार कौशल प्रशिक्षण।', descriptionTe: 'ఉపాధి నైపుణ్యాల శిక్షణ.', benefitHi: 'मुफ्त कौशल प्रशिक्षण।', benefitTe: 'ఉచిత నైపుణ్య శిక్షణ.' },
  { id: '10', name: 'Mahila Shakti Kendras', nameHi: 'महिला शक्ति केंद्र', nameTe: 'మహిళా शक्ति కేంద్రాలు', description: 'Rural women empowerment centers.', benefit: 'One-stop center for services.', link: 'https://wcd.nic.in/', category: 'education', descriptionHi: 'ग्रामीण महिला सशक्तिकरण।', descriptionTe: 'గ్రామీణ మహిళా సాధికారత.', benefitHi: 'कौशल विकास केंद्र।', benefitTe: 'నైపుణ్య అభివృద్ధి కేంద్రం.' }
];

export const impactStats = {
  totalUsers: 12547,
  businessesStarted: 3892,
  jobsCompleted: 8234,
  incomeGenerated: '₹2.3 Cr',
  villagesCovered: 156,
  volunteersActive: 234,
  sustainableVentures: 2145,
};