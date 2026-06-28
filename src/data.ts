import { Speaker, Session, Song } from './types';

export const SPEAKERS: Speaker[] = [
  {
    id: 'sp-timothy',
    name: 'Rev. Fr. Dr. Timothy Thomas',
    role: 'Director of Sunday School Ministry',
    diocese: 'Northeast American Diocese',
    imageUrl: 'src/assets/vicar-1.webp',
    bio: 'Rev. Fr. Dr. Timothy Thomas serves as the Director of the Sunday School Ministry for the Northeast American Diocese. He is a prominent scholar in pastoral theology and ecclesiastical youth ministry, dedicating his service to fostering spiritual literacy, traditional Orthodox liturgical music, and dynamic youth engagement schemas.'
  },
  {
    id: 'sp-johns',
    name: 'Very. Rev. Dr. Johns Abraham',
    role: 'Reesh Cor Episcopa',
    diocese: 'Malankara Malpan',
    imageUrl: 'src/assets/vicar-2.webp',
    bio: 'Very Rev. Dr. Johns Abraham is a highly distinguished scholar, designated Reesh Cor Episcopa and Malankara Malpan (Teacher of the Church). Widely celebrated for his profound understanding of Syriac Theology, Patristics, and the liturgical heritage of the Malankara Orthodox Syrian Church. He provides apostolic guidance to clergy and laypeople alike.'
  },
  {
    id: 'sp-abraham',
    name: 'Rev. Fr. Dr. Abraham George',
    role: 'Vicar, St. Thomas Orthodox Church',
    diocese: 'Long Island',
    imageUrl: 'src/assets/vicar-3.webp',
    bio: 'Rev. Fr. Dr. Abraham George is the Vicar of St. Thomas Orthodox Church in Long Island. A modern theological intellectual, he focuses heavily on equipping young families and modern youth with strategies to understand "Timeless Truths" within a highly visual, distracting, digitalized world. His pastoral counsels are deeply treasured.'
  }
];

export const SESSIONS: Session[] = [
  // Day 1: July 2, 2026
  {
    id: 'sess-101',
    title: 'Receive participants at Residence (RCC)',
    time: '03:00 PM - 05:00 PM',
    timestamp: '2026-07-02T15:00:00',
    day: 1,
    location: 'Student Residence (RCC Lounge)',
    description: 'Set up a small reception booth at elevator lobby and direct guests to RCC lounges (2). Provide welcome kit at RCC lounges. Complimentary parking.',
    category: 'General'
  },
  {
    id: 'sess-102',
    title: 'Coffee/snacks',
    time: '04:00 PM - 05:00 PM',
    timestamp: '2026-07-02T16:00:00',
    day: 1,
    location: 'Student Residence (RCC Lounge)',
    description: 'Non-veg snacks. Served at RCC lobby/lounge.',
    category: 'Social'
  },
  {
    id: 'sess-103',
    title: 'Relax, play, get together',
    time: '04:00 PM - 05:00 PM',
    timestamp: '2026-07-02T16:00:00',
    day: 1,
    location: 'Rear of Student Residence (RCC)',
    description: 'Funny games. Volleyball/basketball?',
    category: 'Social'
  },
  {
    id: 'sess-104',
    title: 'Buffer time',
    time: '05:00 PM - 05:30 PM',
    timestamp: '2026-07-02T17:00:00',
    day: 1,
    location: 'Student Residence (RCC)',
    description: 'Extra time allocated for late arrivals and to extend play time. Some participants will arrive late (after their work on Thursday).',
    category: 'General'
  },
  {
    id: 'sess-105',
    title: 'Procession',
    time: '05:30 PM - 06:00 PM',
    timestamp: '2026-07-02T17:30:00',
    day: 1,
    location: 'Outdoor (Area X to Area Y)',
    description: 'Procession starts from outside the building and enters to Event Space. Delegates are encouraged to wear traditional Kerala dress.',
    category: 'General'
  },
  {
    id: 'sess-106',
    title: 'Evening prayer',
    time: '06:00 PM - 06:30 PM',
    timestamp: '2026-07-02T18:00:00',
    day: 1,
    location: 'ABSC Event Space (Building N)',
    description: 'Reception to Thirumeni and priests. Clergy leads prayer from dais/stage.',
    category: 'Liturgy'
  },
  {
    id: 'sess-107',
    title: 'Inaugural meeting, reception, and theme introduction by keynote speaker',
    time: '06:30 PM - 07:00 PM',
    timestamp: '2026-07-02T18:30:00',
    day: 1,
    location: 'ABSC Event Space (Building N)',
    description: 'Official opening ceremony. Solemn keynotes and introduction. Use LED screens.',
    category: 'General'
  },
  {
    id: 'sess-108',
    title: 'Dinner',
    time: '07:00 PM - 07:45 PM',
    timestamp: '2026-07-02T19:00:00',
    day: 1,
    location: 'ABSC Event Space (Building N)',
    description: 'Vegetarian food, buffet type.',
    category: 'Social'
  },
  {
    id: 'sess-109',
    title: 'Cultural programs+Ice breaker',
    time: '07:45 PM - 09:45 PM',
    timestamp: '2026-07-02T19:45:00',
    day: 1,
    location: 'ABSC Event Space (Building N)',
    description: 'Cultural programs and interactive ice breaker sessions for all conference delegates.',
    category: 'Youth'
  },
  {
    id: 'sess-110',
    title: 'Bed time prayer',
    time: '09:45 PM - 10:15 PM',
    timestamp: '2026-07-02T21:45:00',
    day: 1,
    location: 'Student Residence (RCC Lounge)',
    description: 'Night prayers (Suthoro) at the student residence lounge.',
    category: 'Liturgy'
  },

  // Day 2: July 3, 2026
  {
    id: 'sess-201',
    title: 'Morning prayer / songs',
    time: '07:00 AM - 07:30 AM',
    timestamp: '2026-07-03T07:00:00',
    day: 2,
    location: 'RCC Lounges (2 spaces)',
    description: 'Morning prayer (Safro) in English and Malayalam.',
    category: 'Liturgy'
  },
  {
    id: 'sess-202',
    title: 'Morning devotion',
    time: '07:30 AM - 07:45 AM',
    timestamp: '2026-07-03T07:30:00',
    day: 2,
    location: 'RCC Lounges (2 spaces)',
    description: 'Malayalam devotion led by Fr. Johns Abraham Konattu. English devotion led by Fr. Abey George.',
    category: 'Liturgy'
  },
  {
    id: 'sess-203',
    title: 'Breakfast + General Assembly',
    time: '08:00 AM - 09:00 AM',
    timestamp: '2026-07-03T08:00:00',
    day: 2,
    location: 'ABSC Event Space (Building N)',
    description: 'Vegetarian food, buffet type, at Event Space. External catering. All participants assemble. Announcements for the day\'s programs/schedule.',
    category: 'Social'
  },
  {
    id: 'sess-204',
    title: 'Hymns',
    time: '09:15 AM - 09:30 AM',
    timestamp: '2026-07-03T09:15:00',
    day: 2,
    location: 'Alumni Hall (Building K)',
    description: 'Chanting and singing hymns practice by the choir. Alumni Hall (no dais).',
    category: 'Liturgy'
  },
  {
    id: 'sess-205',
    title: 'Keynote address #1 & Q&A Youth-English',
    time: '09:30 AM - 10:30 AM',
    timestamp: '2026-07-03T09:30:00',
    day: 2,
    location: 'Class room K217',
    description: 'Keynote address for Youth and Young Adults. Speakers: Rev Fr Tenny Thomas / Rev Fr Abey George.',
    category: 'Youth'
  },
  {
    id: 'sess-206',
    title: 'Kids Session',
    time: '09:30 AM - 10:30 AM',
    timestamp: '2026-07-03T09:30:00',
    day: 2,
    location: 'Class room K224',
    description: 'Kids/MGOCSM can go to a designated classroom.',
    category: 'Youth'
  },
  {
    id: 'sess-207',
    title: 'Coffee break',
    time: '10:30 AM - 11:00 AM',
    timestamp: '2026-07-03T10:30:00',
    day: 2,
    location: 'Alumni Hall Foyer (Building K)',
    description: 'Coffee and refreshments at Alumni Hall foyer. Chartwells catering.',
    category: 'Social'
  },
  {
    id: 'sess-208',
    title: 'Keynote address #2; Q&A',
    time: '11:00 AM - 12:00 PM',
    timestamp: '2026-07-03T11:00:00',
    day: 2,
    location: 'Alumni Hall (Building K)',
    description: 'Keynote address session. Speakers: Rev Fr Tenny Thomas / Rev Fr Abey George.',
    category: 'General'
  },
  {
    id: 'sess-209',
    title: 'Kids Session',
    time: '11:00 AM - 12:00 PM',
    timestamp: '2026-07-03T11:00:00',
    day: 2,
    location: 'Class room K224',
    description: 'Kids/MGOCSM can go to a designated classroom.',
    category: 'Youth'
  },
  {
    id: 'sess-210',
    title: 'Noon prayer',
    time: '12:00 PM - 12:15 PM',
    timestamp: '2026-07-03T12:00:00',
    day: 2,
    location: 'Alumni Hall (Building K)',
    description: 'All participants join for noon prayer (Malayalam).',
    category: 'Liturgy'
  },
  {
    id: 'sess-211',
    title: 'Lunch',
    time: '12:30 PM - 01:30 PM',
    timestamp: '2026-07-03T12:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N)',
    description: 'Vegetarian food, buffet type, at Event Space. External catering.',
    category: 'Social'
  },
  {
    id: 'sess-212',
    title: 'Session 3',
    time: '01:30 PM - 02:30 PM',
    timestamp: '2026-07-03T13:30:00',
    day: 2,
    location: 'Alumni Hall (Building K)',
    description: 'Third plenary session. Speaker: Fr. Johns Abraham Konat.',
    category: 'General',
    speakerId: 'sp-johns'
  },
  {
    id: 'sess-213',
    title: 'Group Discussion',
    time: '02:30 PM - 03:30 PM',
    timestamp: '2026-07-03T14:30:00',
    day: 2,
    location: 'Breakout Classrooms',
    description: 'Breakout rooms (classrooms). Youth as one group, 6 groups + 1 youth total 7 groups. Resource people and coordinators assigned to each group.',
    category: 'Workshop'
  },
  {
    id: 'sess-214',
    title: 'Snacks, coffee/tea',
    time: '03:30 PM - 04:00 PM',
    timestamp: '2026-07-03T15:30:00',
    day: 2,
    location: 'Alumni Hall Foyer (Building K)',
    description: 'Vegetarian snacks, tea, and coffee. C/o Chartwells catering.',
    category: 'Social'
  },
  {
    id: 'sess-215',
    title: 'Spiritual Organizations meetings',
    time: '04:00 PM - 05:00 PM',
    timestamp: '2026-07-03T16:00:00',
    day: 2,
    location: 'Classrooms / Alumni Hall',
    description: 'Meetings for OCYM, MMVS, and Seniors. Launch of Diocesan level St. Dionysius Orthodox Fellowship (SDOF) and St. Joseph Elders Forum (SJEF).',
    category: 'General'
  },
  {
    id: 'sess-216',
    title: 'Get ready (free time)',
    time: '05:00 PM - 06:30 PM',
    timestamp: '2026-07-03T17:00:00',
    day: 2,
    location: 'Student Residence / Playground',
    description: 'Refresh at RCC suite. Funny games. Rent playground for basketball/volleyball.',
    category: 'Social'
  },
  {
    id: 'sess-217',
    title: 'Evening prayer',
    time: '06:30 PM - 07:00 PM',
    timestamp: '2026-07-03T18:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N)',
    description: 'Evening prayer at the ABSC Event Space.',
    category: 'Liturgy'
  },
  {
    id: 'sess-218',
    title: 'Dinner',
    time: '07:00 PM - 08:15 PM',
    timestamp: '2026-07-03T19:00:00',
    day: 2,
    location: 'ABSC Event Space (Building N)',
    description: 'Buffet dinner. Announcement: pack for tomorrow\'s checkout at 12:00 PM.',
    category: 'Social'
  },
  {
    id: 'sess-219',
    title: 'Devotional address',
    time: '08:30 PM - 09:30 PM',
    timestamp: '2026-07-03T20:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N)',
    description: 'Devotional address (TBD).',
    category: 'General'
  },
  {
    id: 'sess-220',
    title: 'Suthoro',
    time: '09:30 PM - 09:40 PM',
    timestamp: '2026-07-03T21:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N)',
    description: 'Evening canonical prayers and opportunity for confessions.',
    category: 'Liturgy'
  },
  {
    id: 'sess-221',
    title: 'Bed time',
    time: '10:00 PM onwards',
    timestamp: '2026-07-03T22:00:00',
    day: 2,
    location: 'Student Residence (RCC Lounge)',
    description: 'Suite at Residence & Conference Centre (RCC).',
    category: 'Social'
  },

  // Day 3: July 4, 2026
  {
    id: 'sess-301',
    title: 'Morning prayer',
    time: '07:00 AM - 07:45 AM',
    timestamp: '2026-07-04T07:00:00',
    day: 3,
    location: 'ABSC Event Space (Building N)',
    description: 'Morning prayer (Safro).',
    category: 'Liturgy'
  },
  {
    id: 'sess-302',
    title: 'Holy Qurbana',
    time: '07:45 AM - 08:45 AM',
    timestamp: '2026-07-04T07:45:00',
    day: 3,
    location: 'ABSC Event Space (Building N)',
    description: 'Holy Qurbana (Divine Liturgy). Take group photo after Qurbana.',
    category: 'Liturgy'
  },
  {
    id: 'sess-303',
    title: 'Breakfast and break',
    time: '08:45 AM - 09:45 AM',
    timestamp: '2026-07-04T08:45:00',
    day: 3,
    location: 'ABSC Event Space (Building N)',
    description: 'Non-vegetarian food, buffet type.',
    category: 'Social'
  },
  {
    id: 'sess-304',
    title: 'Final session (theme related)',
    time: '10:00 AM - 10:30 AM',
    timestamp: '2026-07-04T10:00:00',
    day: 3,
    location: 'ABSC Event Space (Building N)',
    description: 'Guest speakers presentation (20 min) and feedback session (15 min).',
    category: 'General'
  },
  {
    id: 'sess-305',
    title: 'Closing ceremony, business meeting, comments, feedback',
    time: '10:30 AM - 11:15 AM',
    timestamp: '2026-07-04T10:30:00',
    day: 3,
    location: 'ABSC Event Space (Building N)',
    description: 'Closing ceremony and business meeting. Feedback session (10 min, 2-3 participants).',
    category: 'General'
  },
  {
    id: 'sess-306',
    title: 'Prayer & Benediction',
    time: '11:15 AM - 11:30 AM',
    timestamp: '2026-07-04T11:15:00',
    day: 3,
    location: 'ABSC Event Space (Building N)',
    description: 'Prayer and final benediction.',
    category: 'Liturgy'
  },
  {
    id: 'sess-307',
    title: 'Check out rooms',
    time: '11:30 AM - 12:00 PM',
    timestamp: '2026-07-04T11:30:00',
    day: 3,
    location: 'Student Residence (RCC Lounge)',
    description: 'Vacate rooms from Residence & Conference Centre (RCC). Keep luggage in own car or RCC lounge.',
    category: 'General'
  },
  {
    id: 'sess-308',
    title: 'Lunch',
    time: '12:00 PM - 01:30 PM',
    timestamp: '2026-07-04T12:00:00',
    day: 3,
    location: 'ABSC Event Space (Building N)',
    description: 'Non-vegetarian food, buffet type.',
    category: 'Social'
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
