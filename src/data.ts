import { Speaker, Session, Song } from './types';
import vicar1 from './assets/vicar-1.webp';
import vicar2 from './assets/vicar-2.webp';
import vicar3 from './assets/vicar-3.webp';
export const SPEAKERS: Speaker[] = [
  {
    id: 'sp-timothy',
    name: 'Rev. Fr. Dr. Timothy Thomas',
    role: 'Director of Sunday School Ministry',
    diocese: 'Northeast American Diocese',
    imageUrl: vicar1,
    bio: 'Rev. Fr. Dr. Timothy Thomas serves as the Director of the Sunday School Ministry for the Northeast American Diocese. He is a prominent scholar in pastoral theology and ecclesiastical youth ministry, dedicating his service to fostering spiritual literacy, traditional Orthodox liturgical music, and dynamic youth engagement schemas.'
  },
  {
    id: 'sp-johns',
    name: 'Very. Rev. Dr. Johns Abraham',
    role: 'Reesh Cor Episcopa',
    diocese: 'Malankara Malpan',
    imageUrl: vicar2,
    bio: 'Very Rev. Dr. Johns Abraham is a highly distinguished scholar, designated Reesh Cor Episcopa and Malankara Malpan (Teacher of the Church). Widely celebrated for his profound understanding of Syriac Theology, Patristics, and the liturgical heritage of the Malankara Orthodox Syrian Church. He provides apostolic guidance to clergy and laypeople alike.'
  },
  {
    id: 'sp-abraham',
    name: 'Rev. Fr. Dr. Abraham George',
    role: 'Vicar, St. Thomas Orthodox Church',
    diocese: 'Long Island',
    imageUrl: vicar3,
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
    title: 'Lokathin Sainyam',
    category: 'General worship',
    englishTitle: 'Lokathin Sainyam',
    lyricsEnglish: `Lokathin sainyam paalayamirangum
Njaan bhayappedilla bhayappedilla (2)
Chenkadal kadathiya Daivamenne
Ee Yorddaan kadathidum nishchayamaay (2)

Njaan patharukilla thalarukilla
Swarggeeya Daivam koodeyundu (2)
Bhayappedilla bhramikkayilla
Swarggeeya Daivam koodeyundu (2)

Theneecha pole chuttivalanjaal
Multhi poleavar kettupokum (2)
Daivathin valamkai uyarnnirikkum
Daivathin kai enne rakshichidum (2)

Njaan patharukilla thalarukilla
Swarggeeya Daivam koodeyundu (2)
Bhayappedilla bhramikkayilla
Swarggeeya Daivam koodeyundu (2)

Raajaavin hridayam Daivathin kayyil
Neerthodu kanakke irikkunnallo (2)
Daivathin vachanam nilaninnidum
Daivathin vachanam njaan aaswadikkum (2)

Njaan patharukilla thalarukilla
Swarggeeya Daivam koodeyundu (2)
Bhayappedilla bhramikkayilla
Swarggeeya Daivam koodeyundu (2)`,
    lyricsTransliterated: `Lokathin sainyam paalayamirangum
Njaan bhayappedilla bhayappedilla (2)
Chenkadal kadathiya Daivamenne
Ee Yorddaan kadathidum nishchayamaay (2)

Njaan patharukilla thalarukilla
Swarggeeya Daivam koodeyundu (2)
Bhayappedilla bhramikkayilla
Swarggeeya Daivam koodeyundu (2)

Theneecha pole chuttivalanjaal
Multhi poleavar kettupokum (2)
Daivathin valamkai uyarnnirikkum
Daivathin kai enne rakshichidum (2)

Njaan patharukilla thalarukilla
Swarggeeya Daivam koodeyundu (2)
Bhayappedilla bhramikkayilla
Swarggeeya Daivam koodeyundu (2)

Raajaavin hridayam Daivathin kayyil
Neerthodu kanakke irikkunnallo (2)
Daivathin vachanam nilaninnidum
Daivathin vachanam njaan aaswadikkum (2)

Njaan patharukilla thalarukilla
Swarggeeya Daivam koodeyundu (2)
Bhayappedilla bhramikkayilla
Swarggeeya Daivam koodeyundu (2)`,
    lyricsMalayalam: `ലോകത്തിൻ സൈന്യം പാളയമിറങ്ങും
ഞാൻ ഭയപ്പെടില്ല ഭയപ്പെടില്ല (2) 
ചെങ്കടൽ കടത്തിയ ദൈവമെന്നെ
ഈ യോർദ്ദാൻ കടത്തിടും നിശ്ചയമായ് (2) 

ഞാൻ പതറുകില്ല തളരുകില്ല
സ്വർഗ്ഗീയ ദൈവം കൂടെയുണ്ട് (2) 
ഭയപ്പെടില്ല, ഭ്രമിക്കയില്ല
സ്വർഗ്ഗീയ ദൈവം കൂടെയുണ്ട് (2)

തേനീച്ച പോലെ ചുറ്റിവളഞ്ഞാൽ
മുൾത്തീ പോലെവർ കെട്ടുപോകും (2) 
ദൈവത്തിൻ വലംകൈ ഉയർന്നിരിക്കും
ദൈവത്തിൻ കൈ എന്നെ രക്ഷിച്ചിടും (2) 

ഞാൻ പതറുകില്ല തളരുകില്ല
സ്വർഗ്ഗീയ ദൈവം കൂടെയുണ്ട് (2) 
ഭയപ്പെടില്ല, ഭ്രമിക്കയില്ല
സ്വർഗ്ഗീയ ദൈവം കൂടെയുണ്ട് (2)

രാജാവിൻ ഹൃദയം ദൈവത്തിൻ കയ്യിൽ
നീർത്തോടു കണക്കെ ഇരിക്കുന്നല്ലോ (2) 
ദൈവത്തിൻ വചനം നിലനിന്നിടും
ദൈവത്തിൻ വചനം ഞാൻ ആസ്വദിക്കും (2) 

ഞാൻ പതറുകില്ല തളരുകില്ല
സ്വർഗ്ഗീയ ദൈവം കൂടെയുണ്ട് (2) 
ഭയപ്പെടില്ല, ഭ്രമിക്കയില്ല
സ്വർഗ്ഗീയ ദൈവം കൂടെയുണ്ട് (2)`
  },
  {
    id: 'song-2',
    title: 'Ente daivam karunayalenne',
    category: 'General worship',
    englishTitle: 'Ente daivam karunayalenne',
    lyricsEnglish: `Ente daivam karunayalenne
Oro nimishavum vazhinadathum (2)
Ente daivam krupayalenne
Ennannekkumayi vazhinadathum (2)

Israyelin velicham thelinjeedumpol
Mullum parakkarayum dahicheedume (2)
Enikku munbe nee poyeedumpol
Durgadangalellam nirappakume (2)

Ardratha karunayale nokkeedumpol
Ente hridayamennum anandhikkum (2)
Puthu krubayalenney nirakkumpol
En prananennum anandhikkum (2)`,
    lyricsTransliterated: `Ente daivam karunayalenne
Oro nimishavum vazhinadathum (2)
Ente daivam krupayalenne
Ennannekkumayi vazhinadathum (2)

Israyelin velicham thelinjeedumpol
Mullum parakkarayum dahicheedume (2)
Enikku munbe nee poyeedumpol
Durgadangalellam nirappakume (2)

Ardratha karunayale nokkeedumpol
Ente hridayamennum anandhikkum (2)
Puthu krubayalenney nirakkumpol
En prananennum anandhikkum (2)`,
    lyricsMalayalam: `എന്റെ ദൈവം കരുണയാലെന്നെ
ഓരോ നിമിഷവും വഴിനടത്തും (2)
എന്റെ ദൈവം കൃപയാലെന്നെ
എന്നെന്നേക്കുമായി വഴിനടത്തും (2)

ഇസ്രായേലിൻ വെളിച്ചം തെളിഞ്ഞീടുമ്പോൾ
മുള്ളും പറക്കാരയും ദഹിച്ചീടുമേ (2)
എനിക്കു മുൻപേ നീ പോയീടുമ്പോൾ
ദുർഘടങ്ങളെല്ലാം നിരപ്പാകുമേ (2)

ആർദ്രത കരുണയാലെ നോക്കീടുമ്പോൾ
എന്റെ ഹൃദയമെന്നും ആനന്ദിക്കും (2)
പുതു കൃപയാലെന്നെ നിറയ്ക്കുമ്പോൾ
എൻ പ്രാണനെന്നും ആനന്ദിക്കും (2)`
  },
  {
    id: 'song-3',
    title: 'Dhinam Thorum Enne',
    category: 'General worship',
    englishTitle: 'Dhinam Thorum Enne',
    lyricsEnglish: `Dhinam thorum enne nadathunna krupaykkai
Yaagamaai enne samarppikkunnu (2)
Aathmaavil ennum niraykkunna krupaykkai
Sthothramaam yaagangal arpichidunnu (2)

Samarppikkunnu samarppikkunnu
Poornamaai enne samarppikkunnu (2)

Puthranaam Yesuvin koodeyennum
Vasikkuvaan krupayaruledaname (2)
Vishudhiyodennum jeevikkuvaan
Krupayarulename ennumennum (2)

Samarppikkunnu samarppikkunnu
Poornamaai enne samarppikkunnu (2)

Parishudhaathmaavinte bhalangalaale
Niraykkunna naadhane sthuthichidum njaan (2)
Jeevante naadhanaam Yesuvine
Sthuthichidunnu njaan ennumennum (2)

Samarppikkunnu samarppikkunnu
Poornamaai enne samarppikkunnu (2)`,
    lyricsTransliterated: `Dhinam thorum enne nadathunna krupaykkai
Yaagamaai enne samarppikkunnu (2)
Aathmaavil ennum niraykkunna krupaykkai
Sthothramaam yaagangal arpichidunnu (2)

Samarppikkunnu samarppikkunnu
Poornamaai enne samarppikkunnu (2)

Puthranaam Yesuvin koodeyennum
Vasikkuvaan krupayaruledaname (2)
Vishudhiyodennum jeevikkuvaan
Krupayarulename ennumennum (2)

Samarppikkunnu samarppikkunnu
Poornamaai enne samarppikkunnu (2)

Parishudhaathmaavinte bhalangalaale
Niraykkunna naadhane sthuthichidum njaan (2)
Jeevante naadhanaam Yesuvine
Sthuthichidunnu njaan ennumennum (2)

Samarppikkunnu samarppikkunnu
Poornamaai enne samarppikkunnu (2)`,
    lyricsMalayalam: `ദിനംതോറും എന്നെ നടത്തുന്ന കൃപയ്ക്കായ്
യാഗമായ് എന്നെ സമർപ്പിക്കുന്നു (2)
ആത്മാവിൽ എന്നും നിറയ്ക്കുന്ന കൃപയ്ക്കായ്
സ്തോത്രമാം യാഗങ്ങൾ അർപ്പിച്ചിടുന്നു (2)

സമർപ്പിക്കുന്നു സമർപ്പിക്കുന്നു
പൂർണ്ണമായ് എന്നെ സമർപ്പിക്കുന്നു (2)

പുത്രനാം യേശുവിൻ കൂടെയെന്നും
വസിക്കുവാൻ കൃപയരുളീടണമെ (2)
വിശുദ്ധിയോടെന്നും ജീവിക്കുവാൻ
കൃപയരുളേണമേ എന്നുമെന്നെന്നും (2)

സമർപ്പിക്കുന്നു സമർപ്പിക്കുന്നു
പൂർണ്ണമായ് എന്നെ സമർപ്പിക്കുന്നു (2)

പരിശുദ്ധാത്മാവിന്റെ ഫലങ്ങളാലെ
നിറയ്ക്കുന്ന നാഥനെ സ്തുതിച്ചിടും ഞാൻ (2)
ജീവന്റെ നാഥനാം യേശുവിനെ
സ്തുതിച്ചിടുന്നു ഞാൻ എന്നുമെന്നെന്നും (2)

സമർപ്പിക്കുന്നു സമർപ്പിക്കുന്നു
പൂർണ്ണമായ് എന്നെ സമർപ്പിക്കുന്നു (2)`
  },
  {
    id: 'song-4',
    title: 'Nanniyode Njan Sthuthi Paadidum',
    category: 'General worship',
    englishTitle: 'Nanniyode Njan Sthuthi Paadidum',
    lyricsEnglish: `Nanniyode njan Sthuthi Paadidum
Ente Yeshu Naadha
Enikkay nee Cheythoro nanmaykkum
Innu nanni chollunnu njan (2)

Arhikkatha nanmakalum
Enikkekidum daya nidhe
Yaachikkatha nanmakal polumee
Enikkekuvone Sthuthi

Nanniyode njan Sthuthi Paadidum
Ente Yeshu Naadha
Enikkay nee Cheythoro nanmaykkum
Innu nanni chollunnu njan

Satya daivathin eka puthranai
Ninne viswasikkunnu njan
Varum kaalamokkeyum nin kripa
Varangal chorika ennil

Nanniyode njan Sthuthi Paadidum
Ente Yeshu Naadha
Enikkay nee Cheythoro nanmaykkum
Innu nanni chollunnu njan (2)`,
    lyricsTransliterated: `Nanniyode njan Sthuthi Paadidum
Ente Yeshu Naadha
Enikkay nee Cheythoro nanmaykkum
Innu nanni chollunnu njan (2)

Arhikkatha nanmakalum
Enikkekidum daya nidhe
Yaachikkatha nanmakal polumee
Enikkekuvone Sthuthi

Nanniyode njan Sthuthi Paadidum
Ente Yeshu Naadha
Enikkay nee Cheythoro nanmaykkum
Innu nanni chollunnu njan

Satya daivathin eka puthranai
Ninne viswasikkunnu njan
Varum kaalamokkeyum nin kripa
Varangal chorika ennil

Nanniyode njan Sthuthi Paadidum
Ente Yeshu Naadha
Enikkay nee Cheythoro nanmaykkum
Innu nanni chollunnu njan (2)`,
    lyricsMalayalam: `നന്ദിയോടെ ഞാൻ സ്തുതി പാടിടും
എന്റെ യേശു നാഥാ
എനിക്കായ് നീ ചെയ്തോരോ നന്മയ്ക്കും
ഇന്നു നന്ദി ചൊല്ലുന്നു ഞാൻ (2)

അർഹിക്കാത്ത നന്മകളും
എനിക്കേകിടും ദയാനിധേ
യാചിക്കാത്ത നന്മകൾ പോലുമീ
എനിക്കേകുവോനേ സ്തുതി

നന്ദിയോടെ ഞാൻ സ്തുതി പാടിടും
എന്റെ യേശു നാഥാ
എനിക്കായ് നീ ചെയ്തോരോ നന്മയ്ക്കും
ഇന്നു നന്ദി ചൊല്ലുന്നു ഞാൻ

സത്യ ദൈവത്തിൻ ഏകപുത്രനായി
നിന്നെ വിശ്വസിക്കുന്നു ഞാൻ
വരും കാലമൊക്കെയും നിൻ കൃപാ
വരങ്ങൾ ചൊരിക എന്നിൽ

നന്ദിയോടെ ഞാൻ സ്തുതി പാടിടും
എന്റെ യേശു നാഥാ
എനിക്കായ് നീ ചെയ്തോരോ നന്മയ്ക്കും
ഇന്നു നന്ദി ചൊല്ലുന്നു ഞാൻ (2)`
  }
];

export const GEORGIAN_COLLEGE_PLACES = [
  {
    name: 'Subway',
    type: 'Café',
    desc: 'Subway is a casual counter-serve chain offering customizable sandwiches and salads, popular for quick and affordable lunches.',
    distance: '1.3 km from college (4 min drive)',
    address: '367 Cundles Rd E Unit H2, Barrie, ON L4M 0G9',
    maplink: 'https://maps.app.goo.gl/vgwZUrmvDBhsCPVJ9'
  },
  {
    name: 'Tim Hortons',
    type: 'Café',
    desc: 'Popular Canadian coffee, breakfast wraps, and fresh donuts.',
    distance: '1.9 km from college (7 min drive)',
    address: '657 Cundles Rd E, Barrie, ON L4M 0K4',
    maplink: 'https://maps.app.goo.gl/sT1dBzvM6dZZAVtW6'
  },
  {
    name: 'McDonald\'s',
    type: 'Fast Food',
    desc: 'Classic fast-food burger chain.',
    distance: '1.8 km from college (7 min drive)',
    address: '637 Cundles Rd E Bldg R Bldg R, Barrie, ON L4M 0K4',
    maplink: 'https://maps.app.goo.gl/KLETPmR45kHDuT956'
  },
  {
    name: 'Starbucks',
    type: 'Café',
    desc: 'Premium coffee, espresso drinks, and pastries.',
    distance: '1.7 km from college (5 min drive)',
    address: '607 Cundles Rd E, Barrie, ON L4M 0J7',
    maplink: 'https://maps.app.goo.gl/Xdj5PcM5v9irU9Nn8'
  },
  {
    name: 'Osmow\'s Shawarma',
    type: 'Restaurant',
    desc: 'Modern Mediterranean cuisine specializing in shawarma.',
    distance: '1.7 km from college (6 min drive)',
    address: '547 Cundles Rd E, Barrie, ON L4M 0J7',
    maplink: 'https://maps.app.goo.gl/AjpeuMQy4AUZvp2NA'
  },
  {
    name: '705 Cravings',
    type: 'Restaurant',
    desc: 'A vibrant mix of Kerala classics and regional favorites',
    distance: '1.3 km from college (5 min drive)',
    address: '130 Bell Farm Rd Unit 12-B, Barrie, ON L4M 6J4',
    maplink: 'https://maps.app.goo.gl/wQZf2C3VkUjFywtX8'
  },
  {
    name: 'Centennial Park',
    type: 'Sightseeing',
    desc: 'Sandy lakeside swimming beach with a boardwalk, boat ramps, shady picnic areas & trails.',
    distance: '7.2 km South (15-min drive)',
    address: 'Lakeshore Dr, Barrie, ON L4N 7Y9',
    maplink: 'https://maps.app.goo.gl/bQmFvuQ1hcrKhbMt5'
  }
];
