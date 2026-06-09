import { Speaker, Session, Song } from './types';

export const SPEAKERS: Speaker[] = [
  {
    id: 'sp-timothy',
    name: 'Rev. Fr. Dr. Timothy Thomas',
    role: 'Director of Sunday School Ministry',
    diocese: 'Northeast American Diocese',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLu0VF-Ga0iwFnG77rKeWIOReyWYHv7bHIVnz3mql0GMKGIozfCZkGpkQjA8juzz3MMHFw8BebBywfX5D0aU4sDxaoWdImTSS0LWfRiMgSBRY_GrXJuX7atIe2lwiLs05qPG69Te-d_KMYknU32cfSmrZfHYlo6qZc3zRieOBp3WUdxsvWyJGm7zKK5tVjPbxeZTN5AMK2LZ0y6Qo2SmcRElKXqXU7XYvCHAjuCXo2JFeGVFGWPA16rvnNs',
    bio: 'Rev. Fr. Dr. Timothy Thomas serves as the Director of the Sunday School Ministry for the Northeast American Diocese. He is a prominent scholar in pastoral theology and ecclesiastical youth ministry, dedicating his service to fostering spiritual literacy, traditional Orthodox liturgical music, and dynamic youth engagement schemas.'
  },
  {
    id: 'sp-johns',
    name: 'Very. Rev. Dr. Johns Abraham',
    role: 'Reesh Cor Episcopa',
    diocese: 'Malankara Malpan',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLQ4K20_FDNT77D8aLHQfSPlG-pM8lpHmwD8Q_8HaZjHBrlo3fCmRLnAipxK1zSEqXalsRrcdsEEJ5LG1y4NPxdJv_7d9bR8Ko8Ypa0b2rBBG3S5-0lXm7PmRFWI_NeZQLcLca6qUaZaLfvcO1Zdke3HwfY8nUxbb31Q6wMxEG-a2WF4dLxoUDxNiBxAo3lClmsvzKZBxL_yZIMgKxJJLx0-xlIVRH0w1tJRpC2DTCel9ULgQWn7nbADTE',
    bio: 'Very Rev. Dr. Johns Abraham is a highly distinguished scholar, designated Reesh Cor Episcopa and Malankara Malpan (Teacher of the Church). Widely celebrated for his profound understanding of Syriac Theology, Patristics, and the liturgical heritage of the Malankara Orthodox Syrian Church. He provides apostolic guidance to clergy and laypeople alike.'
  },
  {
    id: 'sp-abraham',
    name: 'Rev. Fr. Dr. Abraham George',
    role: 'Vicar, St. Thomas Orthodox Church',
    diocese: 'Long Island',
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLsfbaXSHX9WTLv36mJwWaznP-fd0zsEkvspf-Km8B3tw6mHUyk9iMekRS7c7XQy8EIEffCw9-wLhVUGE-kobJ06Ufce3AC5_vV0pnSB4LwlfUH7f2Bm-snaxaZO5NMqUGK7egySdqRuAuKcqfs2_9Yin3kLc1HTmVWhe_G3trKaanPP7umqTlrKCM3YLyXP49dExxILyYNhGq_PFya3q6Hc_X5IY--oBjVXc7mAKwfPI9ZrNrZ3SD4w0Jk',
    bio: 'Rev. Fr. Dr. Abraham George is the Vicar of St. Thomas Orthodox Church in Long Island. A modern theological intellectual, he focuses heavily on equipping young families and modern youth with strategies to understand "Timeless Truths" within a highly visual, distracting, digitalized world. His pastoral counsels are deeply treasured.'
  }
];

export const SESSIONS: Session[] = [
  // Day 1: July 2, 2026
  {
    id: 'sess-101',
    title: 'Arrival & Delegate Registration',
    time: '02:00 PM - 04:30 PM',
    timestamp: '2026-07-02T14:00:00',
    day: 1,
    location: 'Main Foyer, Georgian College',
    description: 'Welcome to FYC 2026! Check in, receive your official delegate kits, accommodation details, program booklets, and custom ID badges.',
    category: 'General'
  },
  {
    id: 'sess-102',
    title: 'Inaugural Session & Flag Hoisting',
    time: '04:30 PM - 05:30 PM',
    timestamp: '2026-07-02T16:30:00',
    day: 1,
    location: 'Central Courtyard / Assembly Hall',
    description: 'Official opening ceremony. Solemn hoisting of the Diocese & Conference flags led by the Very Reverend Cor Episcopa, accompanied by the clergy ensemble and greeting delegations from across Canada.',
    category: 'General'
  },
  {
    id: 'sess-103',
    title: 'Evening Prayer (Sandhya Namaskaram)',
    time: '06:00 PM - 07:00 PM',
    timestamp: '2026-07-02T18:00:00',
    day: 1,
    location: 'Liturgical Chapel',
    description: 'Join together in traditional Malankara Orthodox evening songs, incense offerings, and communal prayers.',
    category: 'Liturgy'
  },
  {
    id: 'sess-104',
    title: 'Dinner & Fellowship Brooding',
    time: '07:00 PM - 08:00 PM',
    timestamp: '2026-07-02T19:00:00',
    day: 1,
    location: 'Main Dining Hall',
    description: 'A hot buffet dinner served with local Ontario inputs, offering a perfect time to connect with old friends and make new diocesan connections.',
    category: 'Social'
  },
  {
    id: 'sess-105',
    title: 'Keynote Address I: "Timeless Truth in Shifting Sands"',
    time: '08:15 PM - 09:45 PM',
    timestamp: '2026-07-02T20:15:00',
    day: 1,
    location: 'Plenary Auditorium',
    speakerId: 'sp-johns',
    description: 'Very Rev. Dr. Johns Abraham initiates our conference theme from Hebrews 13:8. Exploring how ancient Patristic wisdom forms the anchor for modern secular shifts.',
    category: 'General'
  },

  // Day 2: July 3, 2026
  {
    id: 'sess-201',
    title: 'Holy Qurbana (Divine Liturgy)',
    time: '07:00 AM - 09:15 AM',
    timestamp: '2026-07-03T07:00:00',
    day: 2,
    location: 'Main Sanctuary Hall',
    description: 'Celebratory Holy Eucharist in English and Malayalam. The spiritual center of the conference where all generations gather for communion.',
    category: 'Liturgy'
  },
  {
    id: 'sess-202',
    title: 'Breakfast Buffet',
    time: '09:15 AM - 10:00 AM',
    timestamp: '2026-07-03T09:15:00',
    day: 2,
    location: 'Dining Hall',
    description: 'Continental breakfast with coffee, teas, juices, and hot scrambles.',
    category: 'Social'
  },
  {
    id: 'sess-203',
    title: 'Keynote Address II: "Teaching Liturgical Roots to the iPad Generation"',
    time: '10:15 AM - 11:45 AM',
    timestamp: '2026-07-03T10:15:00',
    day: 2,
    location: 'Plenary Auditorium',
    speakerId: 'sp-timothy',
    description: 'Rev. Fr. Dr. Timothy Thomas presents a highly practical guide to transmitting Malankara faith practices to children and youth in a short-attention-span era.',
    category: 'General'
  },
  {
    id: 'sess-204',
    title: 'Parallel Workshops & Youth Forum',
    time: '01:30 PM - 03:15 PM',
    timestamp: '2026-07-03T13:30:00',
    day: 2,
    location: 'Academic Seminar Rooms',
    description: 'Pick from 3 parallel tracks: Track A: "Fostering Vocations under Secularism," Track B: "Syriac Chanting Workshop," Track C: "Mental Wellness & Orthodox Spiritual Counsel" (Youth & Young Adults focused).',
    category: 'Workshop'
  },
  {
    id: 'sess-205',
    title: 'Recreation & Parish Connect Tournaments',
    time: '03:30 PM - 05:30 PM',
    timestamp: '2026-07-03T15:30:00',
    day: 2,
    location: 'Georgian College Athletic Fields',
    description: 'Friendly athletic games (volleyball, soccer) and board game tournaments. Highlighting Orthodox Youth Movement connections.',
    category: 'Social'
  },
  {
    id: 'sess-206',
    title: 'Evening Prayer & Spiritual Praise Night',
    time: '06:00 PM - 08:30 PM',
    timestamp: '2026-07-03T18:00:00',
    day: 2,
    location: 'Main Assembly Hall',
    description: 'Solemn liturgical prayers followed by a highly touching spiritual praise session involving classical hymns and youth choral harmonies.',
    category: 'Youth'
  },

  // Day 3: July 4, 2026
  {
    id: 'sess-301',
    title: 'Morning Liturgical Covenant',
    time: '07:30 AM - 08:30 AM',
    timestamp: '2026-07-04T07:30:00',
    day: 3,
    location: 'Liturgical Chapel',
    description: 'Canonical morning prayers (Prabhatha Namaskaram), intercessions, and theological reflections.',
    category: 'Liturgy'
  },
  {
    id: 'sess-302',
    title: 'Keynote Address III: "Pastoral Guidance for Modern Couples & Families"',
    time: '09:30 AM - 11:00 AM',
    timestamp: '2026-07-04T09:30:00',
    day: 3,
    location: 'Plenary Auditorium',
    speakerId: 'sp-abraham',
    description: 'Rev. Fr. Dr. Abraham George shares practical, Christ-centered methodologies for maintaining stable prayer lives, resolving stresses, and building holy households.',
    category: 'General'
  },
  {
    id: 'sess-303',
    title: 'Valedictory Meeting & Conference Resolutions',
    time: '11:15 AM - 01:00 PM',
    timestamp: '2026-07-04T11:15:00',
    day: 3,
    location: 'Main Assembly Hall',
    description: 'Concluding session. Reading of conference reports, presenting awards, expressing gratitude to Georgian College coordinators, and prayerful final directives by clergy.',
    category: 'General'
  }
];

export const SONGS: Song[] = [
  {
    id: 'song-1',
    title: 'Kukiliyon of Saint Mary (Kanyaka Mariam)',
    category: 'Hymns of Saint Mary',
    englishTitle: 'Intercession Hymn of the Virgin Mary',
    lyricsEnglish: `Let us honor Mary, the mother of our Lord,
A fertile harbor and beautiful ship of our faith,
Who carried the Savior who bears the universe.

All generations shall call her blessed,
As she prayed with devotion,
"May your mercy fall upon this creation of yours."
O Lord, by her prayers, save our souls!`,
    lyricsTransliterated: `Mariyaam parayunnu: en nalloru vaalilaaye,
Srishtaave! nin srishtikalil kripayundu aakaname.
Bhagyam janaloke, ninne chonnidumennennekkum.
Ninte thirunaamam kondaadine nannaye raajyam,

Kripa nalkuka naadha, ninnude kripayaal njangal,
Vaazhthuka ninkripaye, ennum thirumunpil thunayaay,
Devamaathaave, njangalkkayi nee thunayaaname...`,
    keyNotes: 'Sung during liturgical incenses and Kukiliyons in ancient Tone 8 layout. Revering Saint Mary’s maternal custody.',
    tempo: 'Solemn 80 BPM'
  },
  {
    id: 'song-2',
    title: 'Yajamanan Varum Nerathu (The Alert Servants)',
    category: 'Liturgical Chants',
    englishTitle: 'Blessed Are Those Servants',
    lyricsEnglish: `Blessed are those servants whom the Master,
When He comes, shall find awake and alert!
He will gird Himself, make them sit at meat,
And serve them with eternal provisions.

The Father will bless, the Son will serve,
The Holy Spirit will weave beautiful crowns for them.
Hallelujah, yes, blessed are those faithful souls!`,
    lyricsTransliterated: `Yajamanan varumnerath-unarnnirikkunnor-aam,
Nalladasare dhaanathil kandaal bhagyametram!
Aaranju thalaridathe nirayittu nirathee,
Yajamanan thaan-avarude arikil poy paricharikkum.

Pithavu avarude sreshtha thalaonnu thalodum,
Puthran-avarkku pathram nalki kripaye thookum,
Ruha dhivyamaan-avarkkaayi mudikal korukkum,
Haleluyah, vaazhthuka njaan sreshtha manushyane!`,
    keyNotes: 'A classic Vigil/Kaltha hymn from the ancient Syrian Antiochian Liturgical cycle representing spiritual wakefulness.',
    tempo: 'Chanted, Free Tempo'
  },
  {
    id: 'song-3',
    title: 'Anpudayone Nin Vaathil (Merciful Lord)',
    category: 'Liturgical Chants',
    englishTitle: 'O Merciful Lord, Open Thy Door of Mercy',
    lyricsEnglish: `O Merciful Lord, open Your gate to us,
Sinner souls who call upon Your great name!
Through Your abundant grace, answer our sighs,
Do not turn us away from your high throne.

Save us from spiritual failures and biological diseases,
Pour Your peaceful oils upon our anxious hearts.
Glorified be Your name, from ages to ages!`,
    lyricsTransliterated: `Anpudayone nin vaathil-muttunnu njaan kripayaal,
Ennilumulla ninte kripaye ennil nirayickename!
Prarthana kelkkunnone, njaan thozhuthu choriyum kanneer,
Kaikaikondu ente paapathe neekkiyidename.

Rogavum sankadavum anayunna njerukangalil,
Sanketamaye ninnude valathukai kaattidename,
Haleluyah - paadunnu njangal ennum thrukkayyil,
Thunayaakaname naadha, nirantharamen jeevanil.`,
    keyNotes: 'Commonly sung during evening prayers or canonical vigils. A powerful, deeply emotional cry for divine intervention.',
    tempo: 'Emotional, slow 65 BPM'
  },
  {
    id: 'song-4',
    title: 'Mishiha Jeevadaathaave (Communion Anthem)',
    category: 'Communion Hymns',
    englishTitle: 'Christ the Life-Giver',
    lyricsEnglish: `O Christ, the Giver of Life to all flesh,
We partake in Your Holy Body and Blood
With absolute awe, reverence, and gratitude.

Cleanse our inner senses and thoughts,
Let Your dynamic power flow in our veins,
Granting us health of soul and dynamic focus.`,
    lyricsTransliterated: `Mishiha jeevadaathaave, nin thiru-sarirangalum,
Rudhiravum-nalki enikkaalpaathayekki nee.
Vandicken njaan thirunaamathe dharayathil ennum,
Nalkuka bhagyam-enikkee thirubhojanathilayi.

Ente hridayathe nee dhivya-prabha-aakeename,
Thirusabha-kannikalen pol vaazhthum ennum,
Haleluyah, paadunnu srishti srishtaavinaay,
Aamennum nithyamen nithyam-anuvaaadiyaye.`,
    keyNotes: 'A sublime communion hymn celebrating the spiritual unity achieved in the Holy mysteries.',
    tempo: 'Serene 72 BPM'
  }
];

export const GEORGIAN_COLLEGE_PLACES = [
  {
    name: 'Georgian Residence (Barrie Campus)',
    type: 'Accommodation',
    desc: 'Main housing for registered delegates. Flat-style multi-bedroom suites with modern amenities, study desks, and Wi-Fi.',
    distance: 'On Campus (2-min walk to Plenary)',
    phone: '+1 (705) 722-1523'
  },
  {
    name: 'The Last Class Restaurant',
    type: 'Dining',
    desc: 'Local student-centered restaurant serving hearty burgers, dynamic wraps, healthy visual salads, and cold beverages.',
    distance: 'On Campus (Building K)',
    phone: '+1 (705) 728-1968 ext. 1530'
  },
  {
    name: 'Tim Hortons (Georgian College)',
    type: 'Café',
    desc: 'Popular Canadian coffee, breakfast wraps, and fresh donuts. Perfect for early morning clergy checkins.',
    distance: 'On Campus (Building C)',
    phone: 'On-campus hours apply'
  },
  {
    name: 'Barrie Lakeview Park & Marina',
    type: 'Sightseeing',
    desc: 'Gorgeously clean sandy beachfront on Kempenfelt Bay. Great for quiet family prayer walks or youth connect assemblies.',
    distance: '3.5 km South (10-min drive)',
    address: 'Lakeshore Dr, Barrie, ON'
  }
];
