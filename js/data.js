const quizSets = {
    setA: [
        {
            plantName: "🌿🌻 Amla 🌻🌿",
            botanicalName: "Emblicus officinale",
            familyName: "Phyllanthaceae",
            image: "https://static.fanpage.it/wp-content/uploads/sites/22/2018/08/amla1.jpg",
            description: "Rich in vitamin C, Amla is known for its potential antioxidant and heart-health benefits. It has a unique five-taste profile in Ayurveda.",
            quickInfo: "Amla, also known as Indian Gooseberry, is one of the most important medicinal plants in Ayurvedic medicine. It is a rich source of Vitamin C and contains various antioxidants that help boost immunity and promote overall health. The fruit has a unique taste profile that includes all five tastes recognized in Ayurveda. Traditional uses include promoting longevity, enhancing digestion, treating respiratory conditions, and maintaining healthy hair and skin.",
            hints: ["Echinacea purpurea", "Calendula officinalis", "Matricaria chamomilla", "Emblicus officinale"],
            classification: {
                sanskritName: "Amalaki",
                family: "Phyllanthaceae",
                genus: "Phyllanthus",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Amla, Kashaya, Madhura, Tikta, Katu",
                guna: "Laghu, Ruksha, Sheeta",
                virya: "Sheeta (Cool)",
                vipaka: "Madhura",
                prabhav: "Chakshushya (Beneficial for eyes)"
            },
            shloka: {
                text: "आमलक्यमृता धात्री वयस्था श्रीफला मला।\nदन्त्या वृषभिषक्श्रेष्ठा देहधात्री त्वचाफला॥",
                reference: "Bhavprakash Nighantu, Haritkyadi Varga, 39"
            },
            paryaya: [
                { label: "अमृता (Amrita)", meaning: "Immortal, life-giving" },
                { label: "धात्री (Dhatri)", meaning: "Nurse or mother" },
                { label: "वयस्था (Vayastha)", meaning: "Promotes longevity" },
                { label: "श्रीफला (Sriphala)", meaning: "Fruit of prosperity" },
                { label: "आमलकी (Amalaki)", meaning: "Primary name" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Amla, Aonla" },
                { lang: "Marathi", name: "Avala" },
                { lang: "Telugu", name: "Usiri" },
                { lang: "Tamil", name: "Nelli" },
                { lang: "Malayalam", name: "Nelli" },
                { lang: "Kannada", name: "Nelli" },
                { lang: "Bengali", name: "Amlaki" },
                { lang: "Gujarati", name: "Ambla" }
            ]
        },
        {
            plantName: "🌿🌻 Ginger 🌻🌿",
            botanicalName: "Zingiber officinale",
            familyName: "Zingiberaceae",
            image: "https://tse1.mm.bing.net/th?id=OIP.5vYGJfOq-cOuJbL8Kb3ScwHaDc&pid=Api&P=0&h=220",
            description: "A popular spice and medicinal herb, ginger is used to aid digestion, reduce nausea, and fight the flu and common cold.",
            quickInfo: "Ginger is a flowering plant whose rhizome is widely used as a spice and a folk medicine. It's one of the healthiest spices on the planet. It can help with digestion, reduce nausea, and help fight the flu and common cold, among other benefits. It may also help lower blood sugar levels and reduce heart disease risk factors.",
            hints: ["Zingiber officinale", "Allium sativum", "Curcuma longa", "Alpinia galanga"],
            classification: {
                sanskritName: "Vishwabhesaj",
                family: "Zingiberaceae",
                genus: "Zingiber",
                division: "Magnoliophyta",
                class: "Liliopsida"
            },
            rasPanchak: {
                rasa: "Katu, Tikta",
                guna: "Laghu, Ruksha, Sheeta",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Pachana (Digestive)"
            },
            shloka: {
                text: "विश्वभेषजं नाम गुडूची सह सैन्धवम्।\nविश्वभेषजमित्याहुर्गुणैर्बहुभिरन्वितम्॥",
                reference: "Bhavprakash Nighantu, Haritkyadi Varga"
            },
            paryaya: [
                { label: "विश्वभेषज (Vishwabhesaj)", meaning: "Universal medicine" },
                { label: "नागरम् (Nagaram)", meaning: "Sharp or pungent" },
                { label: "कटुकम् (Katukam)", meaning: "Bitter taste" },
                { label: "श्रृङ्गवेरम् (Shringaveram)", meaning: "Horn-shaped root" },
                { label: "विद्रुम (Vidruma)", meaning: "Coral-like" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Adrak" },
                { lang: "Sanskrit", name: "Vishwabhesaj" },
                { lang: "Bengali", name: "Ada" },
                { lang: "Marathi", name: "Ale" },
                { lang: "Tamil", name: "Inji" },
                { lang: "Telugu", name: "Allam" },
                { lang: "Kannada", name: "Shunti" },
                { lang: "Malayalam", name: "Inchi" }
            ]
        },
        {
            plantName: "🌿🌻 Tulsi 🌻🌿",
            botanicalName: "Ocimum sanctum",
            familyName: "Lamiaceae",
            image: "https://2.bp.blogspot.com/-Fk_E6wVntKY/VztQZFbsiMI/AAAAAAAAKfY/PW4Cr8HPXw4iitZ0CSV3vcZQ-Ir_2hslACLcB/s1600/Tulsi_or_Tulasi_Holy_basil.jpg",
            description: "Sacred in Hinduism, Tulsi is revered for its respiratory benefits, stress-reducing properties, and immune support in Ayurvedic medicine.",
            quickInfo: "Tulsi, also known as Holy Basil, is considered sacred in Hindu tradition and is widely used in Ayurvedic medicine. It has adaptogenic properties that help the body adapt to stress and promotes respiratory health. Rich in antioxidants and essential oils, Tulsi helps boost immunity, reduces inflammation, and supports heart health. It's often consumed as a tea or used in remedies for cough, cold, and fever.",
            hints: ["Ocimum basilicum", "Ocimum sanctum", "Mentha piperita", "Rosmarinus officinalis"],
            classification: {
                sanskritName: "Tulasi",
                family: "Lamiaceae",
                genus: "Ocimum",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Katu, Tikta",
                guna: "Laghu, Ruksha",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Hridaya (Cardio-protective)"
            },
            shloka: {
                text: "तुलसी पूजिता नित्यं ददाति परमां श्रियम्।\nसर्वदा सर्वकार्येषु सर्वदोषनिवारिणी॥",
                reference: "Padma Purana"
            },
            paryaya: [
                { label: "तुलसी (Tulasi)", meaning: "Incomparable" },
                { label: "सुरसा (Surasa)", meaning: "Well-flavored" },
                { label: "वरदा (Varada)", meaning: "Granting wishes" },
                { label: "पुष्पसारा (Pushpasara)", meaning: "Essence of flowers" },
                { label: "वृन्दा (Vrinda)", meaning: "Cluster" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Tulsi" },
                { lang: "Bengali", name: "Tulshi" },
                { lang: "Marathi", name: "Tulas" },
                { lang: "Gujarati", name: "Tulsi" },
                { lang: "Tamil", name: "Thulasi" },
                { lang: "Telugu", name: "Tulasi" },
                { lang: "Kannada", name: "Tulasi" },
                { lang: "Malayalam", name: "Tulasi" }
            ]
        },
        {
            plantName: "🌿🌻 Turmeric 🌻🌿",
            botanicalName: "Curcuma longa",
            familyName: "Zingiberaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAIL8KOiqEGwdahpdH_5tS32tVS2wU1pVwaJV1msR6vvkaSyCIA&s=10&ec=72940544",
            description: "The golden spice of Ayurveda, turmeric contains curcumin which offers powerful anti-inflammatory and antioxidant properties.",
            quickInfo: "Turmeric is a rhizomatous plant widely used in Ayurvedic medicine for its anti-inflammatory, antioxidant, and healing properties. Its active compound, curcumin, has been extensively studied for beneficial effects on various health conditions. Traditionally used for wound healing, skin conditions, digestive issues, and as a general blood purifier. In Indian culture, it's considered auspicious and used in religious ceremonies and as a natural food colorant.",
            hints: ["Curcuma longa", "Zingiber officinale", "Alpinia galanga", "Elettaria cardamomum"],
            classification: {
                sanskritName: "Haridra",
                family: "Zingiberaceae",
                genus: "Curcuma",
                division: "Magnoliophyta",
                class: "Liliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Katu",
                guna: "Ruksha, Laghu",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Varnya (Improves complexion)"
            },
            shloka: {
                text: "हरिद्रा कुष्ठहन्त्री च वर्ण्या त्वग्दोषनाशिनी।\nकण्डूविषप्रशमनी विशोधनरोपणी॥",
                reference: "Bhavprakash Nighantu, Haritkyadi Varga, 197"
            },
            paryaya: [
                { label: "हरिद्रा (Haridra)", meaning: "Yellow colored" },
                { label: "रजनी (Rajani)", meaning: "Night-like (dark)" },
                { label: "निशा (Nisha)", meaning: "Night" },
                { label: "कावेरी (Kaveri)", meaning: "Like river Kaveri" },
                { label: "पीता (Pita)", meaning: "Yellow" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Haldi" },
                { lang: "Bengali", name: "Halud" },
                { lang: "Marathi", name: "Halad" },
                { lang: "Tamil", name: "Manjal" },
                { lang: "Telugu", name: "Pasupu" },
                { lang: "Kannada", name: "Arishina" },
                { lang: "Malayalam", name: "Manjal" },
                { lang: "Gujarati", name: "Haldar" }
            ]
        }
    ],
    setB: [
        {
            plantName: "🌿🌿 Shatavari 🌿🌿",
            botanicalName: "Asparagus racemosus",
            familyName: "Asparagaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85iMmGCPKCoFJZU3NCK57hrcY9juP7HOBelXhQOsxN8znTfTydw&s=10&ec=72940544",
            description: "Known as the 'Queen of Herbs' in Ayurveda, Shatavari is primarily used for women's health, reproductive support, and as a rejuvenative tonic.",
            quickInfo: "Shatavari is one of the most important herbs in Ayurvedic medicine, particularly for women's health. Its name translates to 'she who possesses a hundred husbands,' indicating its traditional use for enhancing female fertility and vitality. It's classified as a rasayana (rejuvenative) herb and is used to balance the female hormonal system, support the digestive tract, strengthen the immune system, and promote healthy lactation in nursing mothers.",
            hints: ["Asparagus officinalis", "Asparagus racemosus", "Glycyrrhiza glabra", "Withania somnifera"],
            classification: {
                family: "Asparagaceae",
                sanskritName: "Shatavari",
                genus: "Asparagus",
                division: "Magnoliophyta",
                class: "Liliopsida"
            },
            rasPanchak: {
                rasa: "Madhura, Tikta",
                guna: "Guru, Snigdha",
                virya: "Sheeta (Cool)",
                vipaka: "Madhura",
                prabhav: "Stanya (Galactagogue)"
            },
            shloka: {
                text: "शतावरी हिमा श्वेता मधुरा स्तन्यदा शुभा।\nरसायनी च वृष्या च पित्तदाहविनाशिनी॥",
                reference: "Bhavprakash Nighantu, Guduchyadi Varga, 186"
            },
            paryaya: [
                { label: "शतावरी (Shatavari)", meaning: "Having hundred husbands" },
                { label: "शतमूली (Shatamuli)", meaning: "Having hundred roots" },
                { label: "नारायणी (Narayani)", meaning: "Divine feminine" },
                { label: "बहुसुता (Bahusuta)", meaning: "Having many children" },
                { label: "अभीरु (Abhiru)", meaning: "Fearless" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Satavar" },
                { lang: "Bengali", name: "Shatamuli" },
                { lang: "Marathi", name: "Shatavari" },
                { lang: "Tamil", name: "Thannervitan" },
                { lang: "Telugu", name: "Pilligadalu" },
                { lang: "Kannada", name: "Majjigegadde" },
                { lang: "Malayalam", name: "Shatavali" },
                { lang: "Gujarati", name: "Satavari" }
            ]
        },
        {
            plantName: "🌿🌿 Guduchi 🌿🌿",
            botanicalName: "Tinospora cordifolia",
            familyName: "Menispermaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr7xH9G6urcsha-ZudIOxRyRua1qFLvGWgI3Igdi4xgU_9kCIcoQ&s=10&ec=72940544",
            description: "Known as the 'Amrita' or nectar of immortality, Guduchi is valued for its immune-boosting, adaptogenic, and rejuvenating properties.",
            quickInfo: "Guduchi, or Giloy, is considered one of the most versatile medicinal plants in Ayurveda. It's known as 'Amrita' (nectar of immortality) for its life-enhancing properties. The plant is a powerful immunomodulator, helping to strengthen the body's defense mechanisms. It's used for treating chronic fevers, improving digestion, purifying blood, managing diabetes, and supporting liver function. Its adaptogenic properties help the body resist physical, chemical, and biological stressors.",
            hints: ["Tinospora cordifolia", "Bacopa monnieri", "Centella asiatica", "Convolvulus pluricaulis"],
            classification: {
                family: "Menispermaceae",
                sanskritName: "Guduchi",
                genus: "Tinospora",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Kashaya, Madhura",
                guna: "Laghu, Snigdha",
                virya: "Ushna (Hot)",
                vipaka: "Madhura",
                prabhav: "Tridoshahara (Balances all three doshas)"
            },
            shloka: {
                text: "गुडूची तिक्ता रसाद्या रसायनी बल्या हिमा।\nज्वरघ्नी दीपनी वृष्या चक्षुष्या कामला पहा॥",
                reference: "Bhavprakash Nighantu, Guduchyadi Varga, 10"
            },
            paryaya: [
                { label: "गुडूची (Guduchi)", meaning: "That which protects the body" },
                { label: "अमृता (Amrita)", meaning: "Nectar of immortality" },
                { label: "चिन्रारुहा (Chinraruha)", meaning: "Grows on old walls" },
                { label: "वतसादिनी (Vatsadini)", meaning: "Like a calf climbing" },
                { label: "मधुपर्णी (Madhuparni)", meaning: "Sweet-leaved" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Giloy, Gurach" },
                { lang: "Bengali", name: "Gulancha" },
                { lang: "Marathi", name: "Gulvel" },
                { lang: "Tamil", name: "Seenthil Kodi" },
                { lang: "Telugu", name: "Tippa Teega" },
                { lang: "Kannada", name: "Amrutaballi" },
                { lang: "Malayalam", name: "Amritu" },
                { lang: "Gujarati", name: "Galo" }
            ]
        },
        {
            plantName: "🌿🌿 Shankhpushpi 🌿🌿",
            botanicalName: "Convolvulus pluricaulis",
            familyName: "Convolvulaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc7sgMmR3a9dmF4_mbVsWD2bt8LVk2zbfEctl6oKtRHniDlhlgXg&s=10&ec=72940544",
            description: "Named for its conch-shaped flowers, Shankhpushpi is renowned for enhancing memory, intellect, and treating various nervous system disorders.",
            quickInfo: "Shankhpushpi is considered one of the prime 'Medhya Rasayanas' in Ayurveda—herbs that enhance memory and intellect. Its name is derived from its conch-shell shaped flowers. Traditionally used to improve cognitive functions, reduce anxiety, and treat various nervous system disorders. It's especially valued for its calming effects on the mind while simultaneously enhancing mental alertness and concentration. In Ayurveda, it's often prescribed for conditions like insomnia, stress, mental fatigue, and memory loss.",
            hints: ["Convolvulus pluricaulis", "Bacopa monnieri", "Centella asiatica", "Evolvulus alsinoides"],
            classification: {
                family: "Convolvulaceae",
                sanskritName: "Shankhapushpi",
                genus: "Convolvulus",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Kashaya, Tikta",
                guna: "Laghu, Snigdha, Sara",
                virya: "Sheeta (Cool)",
                vipaka: "Katu",
                prabhav: "Medhya (Promotes intellect)"
            },
            shloka: {
                text: "शङ्खपुष्पी हिमा तिक्ता कषाया मधुरा लघुः।\nमेधाकान्तिस्वरकरी वृष्या रसायनी परा॥",
                reference: "Bhavprakash Nighantu, Guduchyadi Varga, 249"
            },
            paryaya: [
                { label: "शंखपुष्पी (Shankhapushpi)", meaning: "Conch-shaped flowers" },
                { label: "श्वेतपुष्पी (Shvetapushpi)", meaning: "White-flowered" },
                { label: "मङ्गल्या (Mangalya)", meaning: "Auspicious" },
                { label: "क्षीरपुष्पी (Kshirapushpi)", meaning: "Milky flower" },
                { label: "वागदिनी (Vagdini)", meaning: "Promotes speech" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Shankhpushpi" },
                { lang: "Bengali", name: "Shankhapushpi" },
                { lang: "Marathi", name: "Shankhvel" },
                { lang: "Tamil", name: "Sanghupushpam" },
                { lang: "Telugu", name: "Shankhapushpi" },
                { lang: "Kannada", name: "Shankhapushpi" },
                { lang: "Malayalam", name: "Shankhapushpi" },
                { lang: "Gujarati", name: "Shankhavali" }
            ]
        },
        {
            plantName: "🌿🌿 Punarnava 🌿🌿",
            botanicalName: "Boerhavia diffusa",
            familyName: "Nyctaginaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Eab1iRLhs4KORnD_4mo3HsbQdmiIutU-UorB-M3_RFYJ1DDL9A&s=10&ec=72940544",
            description: "Known as 'one that renews the body,' Punarnava is highly regarded for kidney support, edema reduction, and liver protection in Ayurveda.",
            quickInfo: "Punarnava's name literally means 'one that renews the body,' highlighting its rejuvenating properties. It's especially valued in Ayurveda for its diuretic and kidney-supporting effects. The plant is known for its ability to remove excess water from the body while maintaining electrolyte balance. It's traditionally used for edema, kidney disorders, liver conditions, and as a general rejuvenative. Modern research has confirmed its hepatoprotective, anti-inflammatory, and immunomodulatory properties.",
            hints: ["Boerhavia diffusa", "Phyllanthus niruri", "Tribulus terrestris", "Eclipta alba"],
            classification: {
                family: "Nyctaginaceae",
                sanskritName: "Punarnava",
                genus: "Boerhavia",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Madhura, Tikta, Kashaya",
                guna: "Laghu, Ruksha, Sara",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Mutral (Diuretic)"
            },
            shloka: {
                text: "पुनर्नवा हिमा तिक्ता कषाया मधुरा लघुः।\nदीपनी वातहन्त्री च शोथघ्नी मूत्रशोधिनी॥",
                reference: "Bhavprakash Nighantu, Guduchyadi Varga, 66"
            },
            paryaya: [
                { label: "पुनर्नवा (Punarnava)", meaning: "Renewing the body" },
                { label: "शोथघ्नी (Shothghni)", meaning: "Relieves edema" },
                { label: "वर्षाभू (Varshabhu)", meaning: "Growing in rainy season" },
                { label: "कथिल्लका (Kathillaka)", meaning: "Spreading" },
                { label: "श्वेतमूली (Svetamuli)", meaning: "White-rooted" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Punarnava" },
                { lang: "Bengali", name: "Punarnava" },
                { lang: "Marathi", name: "Punarnava" },
                { lang: "Tamil", name: "Mukkarattai" },
                { lang: "Telugu", name: "Atikamamidi" },
                { lang: "Kannada", name: "Sanadika" },
                { lang: "Malayalam", name: "Thazhuthama" },
                { lang: "Gujarati", name: "Satodi" }
            ]
        }
    ],
    setC: [
        {
            plantName: "🌻 🌿Guggulu 🌿🌻",
            botanicalName: "Commiphora wightii",
            familyName: "Burseraceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3f3KOhVwkex4bWYlF84fGvMVVz4xJN-ZKB-Mff7rQeL-gp0Gbg&s=10&ec=72940544",
            description: "A prized Ayurvedic resin with powerful anti-inflammatory properties, traditionally used for arthritis, obesity, and lipid disorders.",
            quickInfo: "Guggulu is an oleo-gum resin obtained from the Commiphora wightii tree. It has been used in Ayurveda for thousands of years as a powerful detoxifying and rejuvenating agent. The resin contains guggulsterones, which have been scientifically studied for their cholesterol-lowering and anti-inflammatory effects. Traditionally used in many classical formulations for treating arthritis, obesity, skin disorders, and neurological conditions. Proper processing (shodhana) is essential before its therapeutic use.",
            hints: ["Boswellia serrata", "Commiphora wightii", "Commiphora mukul", "Ferula asafoetida"],
            classification: {
                family: "Burseraceae",
                sanskritName: "Guggulu",
                genus: "Commiphora",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Katu, Kashaya",
                guna: "Laghu, Ruksha, Vishada, Sukshma, Sara",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Lekhana (Scraping)"
            },
            shloka: {
                text: "गुग्गुलुः पूतिगन्धश्च कालानुसारिभेदतः।\nमेदोमेह कफव्याधिकुष्ठान्तककरः स्मृतः॥",
                reference: "Bhavprakash Nighantu, Karpuradi Varga, 41"
            },
            paryaya: [
                { label: "पूरणः (Puranah)", meaning: "Filling cavities" },
                { label: "पालंकषः (Palankasha)", meaning: "Destroyer of sinful acts" },
                { label: "कौशिकः (Kaushikah)", meaning: "Relating to Sage Kaushika" },
                { label: "महिषाक्ष (Mahishaksha)", meaning: "Having eyes like a buffalo" },
                { label: "देवधूपः (Devadhupah)", meaning: "Incense for gods" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Guggul" },
                { lang: "Marathi", name: "Guggul" },
                { lang: "Telugu", name: "Guggulu" },
                { lang: "Tamil", name: "Guggulu, Mahishaaksha" },
                { lang: "Malayalam", name: "Guggulu" },
                { lang: "Kannada", name: "Guggala" },
                { lang: "Bengali", name: "Guggul" },
                { lang: "Gujarati", name: "Gugal, Gugar" }
            ]
        },

        {
            plantName: "🌻 🌿Vidanga 🌿🌻",
            botanicalName: "Embelia ribes",
            familyName: "Primulaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2tqfN5VFC2T1b6MxgEqD_EaQs19uj5KxZwn00w8susfg5u1U44A&s=10&ec=72940544",
            description: "Known as a potent anthelmintic herb, Vidanga is essential in formulations for parasitic infections and digestive disorders.",
            quickInfo: "Vidanga consists of dried berries from the Embelia ribes plant, known for its powerful anthelmintic (anti-parasitic) properties. It contains embelin, which has been studied for its ability to eliminate intestinal parasites. In traditional medicine, it's an important ingredient in formulations for digestive disorders, skin diseases, and metabolic conditions. It's also used as a rejuvenative for the reproductive system and as a natural antioxidant. Proper formulation is essential as it can be irritating to the gastrointestinal tract in high doses.",
            hints: ["Piper longum", "Embelia ribes", "Terminalia chebula", "Picrorhiza kurroa"],
            classification: {
                family: "Primulaceae",
                sanskritName: "Vidanga",
                genus: "Embelia",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Katu, Kashaya",
                guna: "Laghu, Ruksha, Tikshna",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Krimighna (Anthelmintic)"
            },
            shloka: {
                text: "विडङ्गं कटुतिक्तं च कषायं कफवातनुत्।\nदीपनं कृमिहृन्मेधाबलवर्णाग्निवर्धनम्॥",
                reference: "Bhavprakash Nighantu, Haritkyadi Varga, 108"
            },
            paryaya: [
                { label: "चित्रतण्डुल (Chitratandula)", meaning: "Variegated seeds" },
                { label: "वरवर्णिनी (Varavarnini)", meaning: "Excellent color" },
                { label: "कृमिघ्न (Krimighna)", meaning: "Destroyer of worms" },
                { label: "चित्रफला (Chitraphala)", meaning: "Having spotted fruits" },
                { label: "वैदंग (Vaidanga)", meaning: "Related to Vidanga" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Baberang, Vayvidang" },
                { lang: "Marathi", name: "Vavading" },
                { lang: "Telugu", name: "Vaividangalu" },
                { lang: "Tamil", name: "Vaividangam" },
                { lang: "Malayalam", name: "Vizhalari" },
                { lang: "Kannada", name: "Vayuvilanga" },
                { lang: "Bengali", name: "Babreng" },
                { lang: "Gujarati", name: "Vavding" }
            ]
        },

        {
            plantName: "🌻 🌿Chitrak 🌿🌻",
            botanicalName: "Plumbago zeylanica",
            familyName: "Plumbaginaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzswuD_MfKKBOPZVxrcnHoq7cVDRgaqzAsXXn_1D9Drx5IrFmdZQ&s=10&ec=72940544",
            description: "A potent digestive stimulant with remarkable properties for enhancing metabolism and treating deep-seated kapha disorders.",
            quickInfo: "Chitrak is highly valued in Ayurveda for its powerful digestive and metabolic properties. The root contains plumbagin, which has been studied for its antimicrobial, anti-inflammatory and anticancer properties. Traditionally used in formulations for treating chronic indigestion, intestinal parasites, hemorrhoids, and obesity. It's considered one of the best herbs for enhancing agni (digestive fire) and is an important ingredient in many classical formulations like Chitrakadi Vati and Trikatu Churna. Due to its heating nature, it requires careful formulation when used for therapeutic purposes.",
            hints: ["Plumbago zeylanica", "Zingiber officinale", "Piper longum", "Acorus calamus"],
            classification: {
                family: "Plumbaginaceae",
                sanskritName: "Chitraka",
                genus: "Plumbago",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Katu",
                guna: "Laghu, Ruksha, Tikshna",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Deepana (Digestive stimulant)"
            },
            shloka: {
                text: "चित्रको दाहकः पाके तीक्ष्णोष्णः कटुकस्तथा।\nगुल्मशोथोदरानाहश्लेष्मार्शोग्रहणीजयी॥",
                reference: "Bhavprakash Nighantu, Haritkyadi Varga, 190"
            },
            paryaya: [
                { label: "चित्रक (Chitraka)", meaning: "Variegated" },
                { label: "वह्निमान् (Vahniman)", meaning: "Containing fire" },
                { label: "हुताशनः (Hutashanah)", meaning: "Fire-eater" },
                { label: "अग्निमुखः (Agnimukha)", meaning: "Fire-faced" },
                { label: "दहनः (Dahanah)", meaning: "Burning" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Chitra, Chitrak" },
                { lang: "Marathi", name: "Chitrak" },
                { lang: "Telugu", name: "Chitramulam" },
                { lang: "Tamil", name: "Kodiveli" },
                { lang: "Malayalam", name: "Vellakoduveli" },
                { lang: "Kannada", name: "Chitramula" },
                { lang: "Bengali", name: "Chita" },
                { lang: "Gujarati", name: "Chitro" }
            ]
        },

        {
            plantName: "🌻🌿Kutki 🌿🌻",
            botanicalName: "Picrorhiza kurroa",
            familyName: "Plantaginaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNjk6kyM85ZmTgcSsR9sEa7NVSnUR8kLtVOFnzgkzxoYq7Ffd2w&s=10&ec=72940544",
            description: "A bitter hepatoprotective herb from the Himalayan region, essential in formulations for liver disorders and chronic fevers.",
            quickInfo: "Kutki is a high-altitude medicinal plant from the Himalayan region, prized for its liver-protecting and immune-modulating properties. It contains picrosides and kutkoside, which have been extensively studied for their hepatoprotective effects. In traditional medicine, it's used for treating jaundice, chronic fevers, and skin disorders. It's an important ingredient in formulations for liver disorders and is often used as a substitute for the endangered herb Aconitum heterophyllum in certain preparations. Due to its intensely bitter taste and cooling properties, it's specifically formulated with other herbs to enhance its therapeutic benefits.",
            hints: ["Picrorhiza kurroa", "Berberis aristata", "Tinospora cordifolia", "Andrographis paniculata"],
            classification: {
                family: "Plantaginaceae",
                sanskritName: "Katuka",
                genus: "Picrorhiza",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Kashaya",
                guna: "Laghu, Ruksha",
                virya: "Sheeta (Cool)",
                vipaka: "Katu",
                prabhav: "Yakriduttejaka (Liver stimulant)"
            },
            shloka: {
                text: "कटुका तिक्तका रूक्षा दीपनी कफपित्तहा।\nकुष्ठमेहज्वरश्वासकामलाशोथनाशिनी॥",
                reference: "Bhavprakash Nighantu, Haritkyadi Varga, 151"
            },
            paryaya: [
                { label: "कटुका (Katuka)", meaning: "Bitter" },
                { label: "कटुरोहिणी (Katurohini)", meaning: "Bitter and growing upward" },
                { label: "चक्राङ्गी (Chakrangi)", meaning: "Having wheel-like structure" },
                { label: "शकुलादनी (Shakuladani)", meaning: "Eaten by shakula fish" },
                { label: "कृष्णभेदा (Krishnabheda)", meaning: "Black separator" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Kutki, Kadu" },
                { lang: "Marathi", name: "Kutki, Kali Kutki" },
                { lang: "Telugu", name: "Katuka rohini" },
                { lang: "Tamil", name: "Kadugurohini" },
                { lang: "Malayalam", name: "Katukurohini" },
                { lang: "Kannada", name: "Katuki" },
                { lang: "Bengali", name: "Kutki" },
                { lang: "Gujarati", name: "Kadu" }
            ]
        },

        {
            plantName: "🌻🌿 Vidari 🌿🌻",
            botanicalName: "Pueraria tuberosa",
            familyName: "Fabaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bHdvEWHKrAVjpuJMSk5vLxfOa-xn9x2Qk5COp4uz15iMN7TH0A&s=10&ec=72940544",
            description: "A nourishing tonic herb with sweet and cooling properties, used in rejuvenating formulations for reproductive health and vitality.",
            quickInfo: "Vidari is a tuberous root with significant rejuvenating and nutritive properties in Ayurveda. The tuber contains isoflavones and puerarin, which have been studied for their phytoestrogenic and antioxidant effects. Traditionally used in formulations for promoting strength, enhancing reproductive health in both men and women, and treating disorders associated with vata imbalance. It's considered one of the best rasayana (rejuvenative) herbs for female reproductive health and is often used in formulations for promoting fertility and healthy lactation. As a complex carbohydrate-rich herb, it provides sustained energy and is used in nutritive tonics.",
            hints: ["Pueraria tuberosa", "Withania somnifera", "Asparagus racemosus", "Chlorophytum borivilianum"],
            classification: {
                family: "Fabaceae",
                sanskritName: "Vidari",
                genus: "Pueraria",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Madhura",
                guna: "Guru, Snigdha",
                virya: "Sheeta (Cool)",
                vipaka: "Madhura",
                prabhav: "Balya (Strengthening)"
            },
            shloka: {
                text: "विदारी मधुरा शीता बल्या वृष्या रसायनी।\nस्तन्यदा बृंहणी वातपित्तघ्नी भग्नसंधिनुत्॥",
                reference: "Bhavprakash Nighantu, Guduchyadi Varga, 95"
            },
            paryaya: [
                { label: "विदारी (Vidari)", meaning: "That which tears apart (disease)" },
                { label: "इक्षुगन्धा (Ikshugandha)", meaning: "Smelling like sugarcane" },
                { label: "गजवाजिप्रिया (Gajavajipriaya)", meaning: "Loved by elephants and horses" },
                { label: "भूकुष्माण्डी (Bhukushmandi)", meaning: "Earth's pumpkin" },
                { label: "पयस्विनी (Payasvini)", meaning: "Having milk" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Vidarikand" },
                { lang: "Marathi", name: "Bhuikohala" },
                { lang: "Telugu", name: "Nelagummudu" },
                { lang: "Tamil", name: "Nilappalai" },
                { lang: "Malayalam", name: "Mudakku" },
                { lang: "Kannada", name: "Nelagumbala" },
                { lang: "Bengali", name: "Shimia" },
                { lang: "Gujarati", name: "Vidarikand" }
            ]
        },

        {
            plantName: "🌻🌿 Bhallataka 🌿🌻",
            botanicalName: "Semecarpus anacardium",
            familyName: "Anacardiaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYEUetVKxE0lGzGSAbPwD9ob7Gq6eXGXXdJkY_XAAJ3IFEepiVA&s=10&ec=72940544",
            description: "A powerful rasayana herb that requires extensive purification, used in specialized formulations for chronic diseases and rejuvenation.",
            quickInfo: "Bhallataka consists of the dried fruit of Semecarpus anacardium, commonly known as the marking nut tree. It contains biflavonoids, phenolic compounds, and anacardic acid with significant immune-modulating and antioxidant properties. Traditionally used in carefully prepared formulations for treating rheumatic disorders, nervous system ailments, and various skin conditions. It requires an extensive purification process (shodhana) involving cow's milk and other substances before therapeutic use to remove its irritant properties. In classical texts, properly processed Bhallataka is praised as one of the powerful rasayanas (rejuvenatives) that can treat chronic and difficult diseases when used with appropriate precautions.",
            hints: ["Semecarpus anacardium", "Litsea glutinosa", "Pistacia integerrima", "Commiphora wightii"],
            classification: {
                family: "Anacardiaceae",
                sanskritName: "Bhallataka",
                genus: "Semecarpus",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Katu, Tikta, Kashaya",
                guna: "Laghu, Snigdha, Tikshna",
                virya: "Ushna (Hot)",
                vipaka: "Madhura",
                prabhav: "Deepana (Digestive stimulant)"
            },
            shloka: {
                text: "भल्लातको महावह्निस्तैलं कार्पासिकं यथा।\nअशोधितो भवेद्याही शोधितो रोगनाशनः॥",
                reference: "Rasatarangini, 24/578-579"
            },
            paryaya: [
                { label: "भल्लातक (Bhallataka)", meaning: "Principal name" },
                { label: "अग्निमुख (Agnimukha)", meaning: "Fire-faced" },
                { label: "अरुष्कर (Arushkara)", meaning: "Causing irritation" },
                { label: "वह्निगर्भ (Vahnigarbha)", meaning: "Containing fire within" },
                { label: "अङ्कोटक (Ankotaka)", meaning: "Hook-shaped" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Bhilawa" },
                { lang: "Marathi", name: "Bibba" },
                { lang: "Telugu", name: "Nallajidi" },
                { lang: "Tamil", name: "Shenkottai" },
                { lang: "Malayalam", name: "Cheru" },
                { lang: "Kannada", name: "Gerkayi" },
                { lang: "Bengali", name: "Bhela" },
                { lang: "Gujarati", name: "Bhiamu" }
            ]
        }
    ],
setD: [
        {
            plantName: "🌿 Vatsanabha 🌿",
            botanicalName: "Aconitum ferox",
            familyName: "Ranunculaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCobLwdsWuJZHz3L6zoL_6LNPbfmDHepLaPL_p54bH9DN02EAofQ&s=10&ec=72940544",
            description: "A potent herb with both toxic and therapeutic properties, used in minute quantities after extensive purification for severe inflammatory conditions.",
            quickInfo: "Vatsanabha, also known as Indian Aconite, is one of the most powerful herbs in Ayurveda classified as a visha (poison) that becomes medicine when properly processed. It contains alkaloids like aconitine that have powerful analgesic and anti-inflammatory properties. It undergoes an elaborate purification process (shodhana) involving cow's milk or cow's urine before therapeutic use. Traditionally used for severe pain conditions, fever, and inflammatory disorders. It's always used in tiny amounts within complex formulations and only under expert supervision. Improper use can lead to serious cardiac toxicity.",
            hints: ["Aconitum ferox", "Aconitum napellus", "Strychnos nux-vomica", "Datura metel"],
            classification: {
                family: "Ranunculaceae",
                sanskritName: "Vatsanabha",
                genus: "Aconitum",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Madhura, Tikta, Katu, Kashaya",
                guna: "Laghu, Ruksha, Tikshna, Vyavayi, Vikasi",
                virya: "Ushna (Hot)",
                vipaka: "Madhura",
                prabhav: "Marmaghna (Affects vital points)"
            },
            shloka: {
                text: "वत्सनाभोऽमृतं दिव्यं सूक्ष्ममुष्णं रसायनम्।\nवज्रीकरणमायुष्यं सर्वव्याधिविनाशनम्॥",
                reference: "Rasatarangini, 24/156-157"
            },
            paryaya: [
                { label: "वत्सनाभ (Vatsanabha)", meaning: "Resembling a calf's navel" },
                { label: "विष (Visha)", meaning: "Poison" },
                { label: "वज्र (Vajra)", meaning: "Thunderbolt" },
                { label: "अमृत (Amrita)", meaning: "Nectar (when processed)" },
                { label: "शिवमल्लिक (Shivamallika)", meaning: "Shiva's garland" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Bachnag, Mitha Visha" },
                { lang: "Marathi", name: "Bachnag" },
                { lang: "Telugu", name: "Vasanabhi" },
                { lang: "Tamil", name: "Vashanavi" },
                { lang: "Malayalam", name: "Vashanabhi" },
                { lang: "Kannada", name: "Vatsnabhi" },
                { lang: "Bengali", name: "Mithabish" },
                { lang: "Gujarati", name: "Vachanag" }
            ]
        },

        {
            plantName: "🌿 Ahiphena 🌿",
            botanicalName: "Papaver somniferum",
            familyName: "Papaveraceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwqp0t5U_cTWsfvRmSC_X5evBb2-e3NTxCChmueuoLF-1dTPPPyw&s=10&ec=72940544",
            description: "A powerful analgesic and sedative substance derived from opium poppy, used in specific formulations for severe pain and diarrhea.",
            quickInfo: "Ahiphena is the dried milky exudate obtained from the unripe capsules of Papaver somniferum, containing alkaloids like morphine and codeine. It has profound analgesic, antispasmodic, and antidiarrheal properties. In traditional medicine, it's purified and used in minute quantities within complex formulations for treating severe pain, dysentery, and extreme cough conditions. Classical texts discuss its therapeutic applications after proper processing and in specific dose ranges. Due to its highly addictive nature and potential for abuse, its medical use is strictly regulated in modern times. Ayurvedic formulations containing Ahiphena require special licensing and should only be prescribed by qualified practitioners.",
            hints: ["Papaver somniferum", "Cannabis sativa", "Atropa belladonna", "Hyoscyamus niger"],
            classification: {
                family: "Papaveraceae",
                sanskritName: "Ahiphena",
                genus: "Papaver",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Kashaya, Madhura",
                guna: "Guru, Ruksha, Tikshna",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Vedanasthapana (Pain-relieving)"
            },
            shloka: {
                text: "अहिफेनः कटुस्तिक्तो विषदोषहरस्तथा।\nकास श्वासमहाव्याधि बहुमूत्रातिसारनुत्॥",
                reference: "Dhanvantari Nighantu, Chandanadi Varga, 102"
            },
            paryaya: [
                { label: "अहिफेन (Ahiphena)", meaning: "Snake's foam" },
                { label: "खसखस (Khaskhas)", meaning: "Poppy seeds" },
                { label: "चिन्ता (Chinta)", meaning: "Anxiety-relieving" },
                { label: "नागफेन (Nagaphena)", meaning: "Serpent's foam" },
                { label: "अफीम (Aphim)", meaning: "Opium" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Afim" },
                { lang: "Marathi", name: "Afim" },
                { lang: "Telugu", name: "Nallamandu" },
                { lang: "Tamil", name: "Abini" },
                { lang: "Malayalam", name: "Karuppumadatti" },
                { lang: "Kannada", name: "Afim" },
                { lang: "Bengali", name: "Afing" },
                { lang: "Gujarati", name: "Aphina" }
            ]
        },

        {
            plantName: "🌿 Jayapala 🌿",
            botanicalName: "Croton tiglium",
            familyName: "Euphorbiaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbPAFCvy03_FcPJhrD_02Htm04d0PI-FlxufK3QpeMUgnFelFUw&s=10&ec=72940544",
            description: "A potent purgative herb that requires extensive purification, used in minute quantities for cleansing therapies and specific digestive disorders.",
            quickInfo: "Jayapala consists of seeds from the Croton tiglium plant that contain powerful purgative compounds. The seeds contain croton oil and toxalbumin which have extremely strong cathartic effects. In traditional medicine, it undergoes extensive purification processes with various substances including cow's milk before therapeutic use. It's primarily used in minuscule doses within complex formulations for diseases requiring drastic purgation, certain skin disorders, and parasitic infections. Classical texts emphasize its powerful nature and the importance of proper processing to remove harmful toxicity. Due to its potent nature, it should only be used under expert supervision and avoided in debilitated patients, children, and pregnant women.",
            hints: ["Croton tiglium", "Ricinus communis", "Citrullus colocynthis", "Euphorbia resinifera"],
            classification: {
                family: "Euphorbiaceae",
                sanskritName: "Jayapala",
                genus: "Croton",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Katu, Tikta",
                guna: "Laghu, Tikshna, Snigdha, Vyavayi, Vikasi",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Rechan (Purgative)"
            },
            shloka: {
                text: "जयपालः कटुस्तीक्ष्णो विरेचनकरः परः।\nकुष्ठशोथोदरप्लीहगुल्मकृमिविनाशनः॥",
                reference: "Rasatarangini, 24/322-323"
            },
            paryaya: [
                { label: "जयपाल (Jayapala)", meaning: "Guardian of victory" },
                { label: "रेचक (Rechaka)", meaning: "Purgative" },
                { label: "कनकफल (Kanakaphala)", meaning: "Golden fruit" },
                { label: "तिब्बी (Tibbi)", meaning: "Tibetan origin" },
                { label: "द्रवन्ती (Dravanti)", meaning: "Causing liquid flow" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Jamalgota" },
                { lang: "Marathi", name: "Nervala" },
                { lang: "Telugu", name: "Nepalam" },
                { lang: "Tamil", name: "Nervalam" },
                { lang: "Malayalam", name: "Nervalam" },
                { lang: "Kannada", name: "Japalabeeja" },
                { lang: "Bengali", name: "Jamalgotha" },
                { lang: "Gujarati", name: "Nepalo" }
            ]
        },

        {
            plantName: "🌿 Bhanga 🌿",
            botanicalName: "Cannabis sativa",
            familyName: "Cannabaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFK6r7Zg7i4l49EoW6h840AbmdGimKrofP5bEsIj0s2ZqFjX0gpQ&s=10&ec=72940544",
            description: "A complex herb with psychoactive properties, used in traditional medicine for pain relief, digestive disorders, and as an adjunct in spiritual practices.",
            quickInfo: "Bhanga is derived from Cannabis sativa and contains cannabinoids including THC and CBD with complex effects on the nervous system. In traditional medicine, it's processed through specific methods to enhance therapeutic properties and reduce harmful effects. It has been used in formulations for pain management, digestive disorders, and neurological conditions. Classical texts mention its use in religious ceremonies and for spiritual practices. Different parts of the plant have varying potencies, with flowers having the strongest effects. Modern research has validated some of its therapeutic applications while also highlighting concerns about psychological dependence. Its medicinal use is heavily regulated globally due to its psychoactive properties.",
            hints: ["Cannabis sativa", "Papaver somniferum", "Datura metel", "Hyptis suaveolens"],
            classification: {
                family: "Cannabaceae",
                sanskritName: "Bhanga",
                genus: "Cannabis",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Kashaya, Katu",
                guna: "Laghu, Tikshna, Vyavayi, Vikasi",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Madakari (Intoxicating)"
            },
            shloka: {
                text: "भङ्गा तिक्ता कषाया च दीपनी कफवातनुत्।\nवाकप्रदोषसंहर्त्री ग्राहिणी मूत्रलाऽगदा॥",
                reference: "Dhanvantari Nighantu, Chandanadi Varga, 65"
            },
            paryaya: [
                { label: "भङ्गा (Bhanga)", meaning: "That which breaks (disease)" },
                { label: "विजया (Vijaya)", meaning: "Victorious" },
                { label: "इंद्रशन (Indrashana)", meaning: "Food of Indra" },
                { label: "चपला (Chapala)", meaning: "Fickle or unstable" },
                { label: "मत्ता (Matta)", meaning: "Intoxicating" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Bhang" },
                { lang: "Marathi", name: "Bhang" },
                { lang: "Telugu", name: "Ganjayi" },
                { lang: "Tamil", name: "Ganja" },
                { lang: "Malayalam", name: "Kanchavu" },
                { lang: "Kannada", name: "Bangi" },
                { lang: "Bengali", name: "Siddhi, Bhang" },
                { lang: "Gujarati", name: "Bhang" }
            ]
        },

        {
            plantName: "🌿 Dhattura 🌿",
            botanicalName: "Datura metel",
            familyName: "Solanaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1e-BWyyg7f8Mp9_mfsRYYzAyinTPYcszJV0rkAeL4AWH37eDDrw&s=10&ec=72940544",
            description: "A potent narcotic herb with anticholinergic properties, used externally and in minute quantities internally after extensive purification.",
            quickInfo: "Dhattura contains tropane alkaloids including atropine, scopolamine, and hyoscyamine with powerful anticholinergic effects. The seeds and leaves undergo rigorous purification processes including boiling in cow's milk before medicinal use. In traditional medicine, it's used primarily for external application in arthritic conditions and as an ingredient in specialized formulations for bronchial asthma and Parkinson's-like symptoms. Classical texts emphasize its sacred association with Lord Shiva and its therapeutic use in extremely small doses. It has notable antispasmodic and bronchodilator properties but can cause serious toxicity including hallucinations and delirium if improperly used. All preparations containing Dhattura require expert supervision due to its narrow therapeutic window.",
            hints: ["Datura metel", "Atropa belladonna", "Hyoscyamus niger", "Mandragora officinarum"],
            classification: {
                family: "Solanaceae",
                sanskritName: "Dhatura",
                genus: "Datura",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Katu, Kashaya",
                guna: "Laghu, Ruksha, Tikshna, Vyavayi, Vikasi",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Madakari (Intoxicating)"
            },
            shloka: {
                text: "मोहनो मदनो धत्तूरः कनको मदकारकः।\nश्वासकासज्वरश्लेष्म विसर्पोदरशूलनुत्॥",
                reference: "Kaiyyadeva Nighantu, Aushadhi Varga, 1443-1444"
            },
            paryaya: [
                { label: "धत्तूर (Dhatura)", meaning: "Primary name" },
                { label: "उन्मत्त (Unmatta)", meaning: "Causing madness" },
                { label: "शिवप्रिय (Shivapriya)", meaning: "Dear to Lord Shiva" },
                { label: "कनक (Kanaka)", meaning: "Golden" },
                { label: "मदन (Madana)", meaning: "Intoxicating" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Dhatura" },
                { lang: "Marathi", name: "Dhotara" },
                { lang: "Telugu", name: "Ummetta" },
                { lang: "Tamil", name: "Oomathai" },
                { lang: "Malayalam", name: "Ummam" },
                { lang: "Kannada", name: "Datturi" },
                { lang: "Bengali", name: "Dhutura" },
                { lang: "Gujarati", name: "Dhanturo" }
            ]
        },

        {
            plantName: "🌿Kupilu 🌿",
            botanicalName: "Strychnos nux-vomica",
            familyName: "Loganiaceae",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0PwmwtQISZgm494CANvUSTylw-DpVXY2EZbYNo0mAXFEhtBruWg&s=10&ec=72940544",
            description: "A powerful nervine tonic when properly processed, containing strychnine and brucine alkaloids that stimulate the central nervous system.",
            quickInfo: "Kupilu or Nux Vomica seeds contain potent alkaloids strychnine and brucine, which are highly toxic in their raw form. After extensive purification processes involving cow's milk, ghee, or herbal decoctions, it becomes a valuable medicine. Properly processed Kupilu is used in neuromuscular disorders, paralysis, digestive weakness, and as a rejuvenative for the nervous system. In traditional medicine, it's considered one of the best remedies for nerve-related disorders when properly administered. Due to its high toxicity, it should only be used in precise formulations under expert guidance.",
            hints: ["Strychnos nux-vomica", "Aconitum ferox", "Datura metel", "Cannabis sativa"],
            classification: {
                family: "Loganiaceae",
                sanskritName: "Kupilu",
                genus: "Strychnos",
                division: "Magnoliophyta",
                class: "Magnoliopsida"
            },
            rasPanchak: {
                rasa: "Tikta, Katu",
                guna: "Laghu, Ruksha, Tikshna",
                virya: "Ushna (Hot)",
                vipaka: "Katu",
                prabhav: "Lekhana (Scraping), Balya (Strengthening)"
            },
            shloka: {
                text: "कुपीलु कटुको तिक्तो वातघ्नो विषदोषहा।\nकृमिशोफविषश्वासकफकुष्ठापहारकः॥",
                reference: "Bhavprakash Nighantu, Guduchyadi Varga, 225"
            },
            paryaya: [
                { label: "कुपीलु (Kupilu)", meaning: "Primary name" },
                { label: "कुलक (Kulaka)", meaning: "From a noble family" },
                { label: "विषमुष्टि (Vishamusti)", meaning: "Poison fist" },
                { label: "हेमांग (Hemanga)", meaning: "Golden-bodied" },
                { label: "काकफल (Kakaphala)", meaning: "Crow's fruit" }
            ],
            vernacularNames: [
                { lang: "Hindi", name: "Kuchla" },
                { lang: "Marathi", name: "Kajra" },
                { lang: "Telugu", name: "Mushti" },
                { lang: "Tamil", name: "Ettikottai" },
                { lang: "Malayalam", name: "Kanjiram" },
                { lang: "Kannada", name: "Hemmushti" },
                { lang: "Bengali", name: "Kuchila" },
                { lang: "Gujarati", name: "Zerkat" }
            ]
        }
    ]

            
           
    };
        