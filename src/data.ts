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
    title: 'Registration',
    time: '03:00 PM - 04:00 PM',
    timestamp: '2026-07-02T15:00:00',
    day: 1,
    location: 'Residence & Conference Center (RCC)',
    description: 'Participant registration will take place at the Residence & Conference Centre (RCC) of Georgian College. Participants are requested to proceed directly to \"Residence Parking\" area adjacent to the RCC and walk to the RCC reception. The FYC 2026 registration desk will be located near the RCC reception. Upon arrival, participants must collect their room keys and provide their vehicle license plate information at the RCC reception to avail complimentary parking. After obtaining the room key, participants may proceed to complete the FYC 2026 registration process at the FYC registration desk. At the FYC reception, participants will receive their ID and welcome kit.',
    category: 'General'
  },
  {
    id: 'sess-102',
    title: 'Tea/Coffee, Snacks',
    time: '04:00 PM - 05:15 PM',
    timestamp: '2026-07-02T16:00:00',
    day: 1,
    location: 'Residence & Conference Center (RCC)',
    description: 'Non-vegetarian and Vegetarian snack boxes will be served along with coffee or tea at the FYC reception. Separate food arrangements are available for vegetarians and individuals with food allergies.',
    category: 'Social'
  },
  {
    id: 'sess-103',
    title: 'Procession',
    time: '05:15 PM - 05:55 PM',
    timestamp: '2026-07-02T17:30:00',
    day: 1,
    location: 'Starts from RCC - Ends at ABSC',
    description: 'Participants are requested to assemble at the RCC ground floor lobby by 5:15 PM for the opening procession, which will commence promptly at 5:30 PM. Traditional Kerala attire is encouraged for the opening procession.',
    category: 'General'
  },
  {
    id: 'sess-104',
    title: 'Evening Prayer',
    time: '06:00 PM - 06:30 PM',
    timestamp: '2026-07-02T18:00:00',
    day: 1,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Shehimo - English & Malayalam (Alternate Stanzas)',
    category: 'Liturgy'
  },
  {
    id: 'sess-105',
    title: 'Inaugural Session',
    time: '06:30 PM - 07:15 PM',
    timestamp: '2026-07-02T18:30:00',
    day: 1,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'The Inaugural Session begins with an introduction and Bible reading, followed by a welcome speech and the formal inauguration. The ceremonial lighting of the lamp marks a key moment, after which the guest speakers are introduced and the theme is expounded upon, before the session is brought to a close with a concluding note.',
    category: 'General',
    speakerId: 'sp-timothy'
  },
  {
    id: 'sess-106',
    title: 'Dinner',
    time: '07:15 PM - 08:00 PM',
    timestamp: '2026-07-02T19:15:00',
    day: 1,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Dinner for all participants.',
    category: 'Social'
  },
  {
    id: 'sess-107',
    title: 'Entertainment Night & Ice Breaking',
    time: '08:00 PM - 09:30 PM',
    timestamp: '2026-07-02T20:00:00',
    day: 1,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Cultural programs and interactive ice breaker sessions.',
    category: 'Social'
  },
  {
    id: 'sess-108',
    title: 'Bedtime Prayer',
    time: '09:45 PM - 10:00 PM',
    timestamp: '2026-07-02T21:45:00',
    day: 1,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Night prayers.',
    category: 'Liturgy'
  },
  {
    id: 'sess-109',
    title: 'BED TIME',
    time: '10:00 PM',
    timestamp: '2026-07-02T22:00:00',
    day: 1,
    location: 'RCC',
    description: 'Bedtime for all participants.',
    category: 'General'
  },

  // Day 2: July 3, 2026
  {
    id: 'sess-201-malayalam',
    title: 'Morning Prayer - Malayalam',
    time: '07:00 AM - 07:30 AM',
    timestamp: '2026-07-03T07:00:00',
    day: 2,
    location: 'RCC Lounge 1',
    description: 'Morning prayer in Malayalam.',
    category: 'Liturgy'
  },
  {
    id: 'sess-201-english',
    title: 'Morning Prayer - English',
    time: '07:00 AM - 07:30 AM',
    timestamp: '2026-07-03T07:00:00',
    day: 2,
    location: 'RCC Lounge 2',
    description: 'Morning prayer in English.',
    category: 'Liturgy'
  },
  {
    id: 'sess-202-malayalam',
    title: 'Morning Devotion - Malayalam',
    time: '07:30 AM - 07:45 AM',
    timestamp: '2026-07-03T07:30:00',
    day: 2,
    location: 'RCC Lounge 1',
    description: 'Malayalam devotion led by Very Rev. Fr. Dr. Johns Abraham Konat.',
    category: 'Liturgy',
    speakerId: 'sp-johns'
  },
  {
    id: 'sess-202-english',
    title: 'Morning Devotion - English',
    time: '07:30 AM - 07:45 AM',
    timestamp: '2026-07-03T07:30:00',
    day: 2,
    location: 'RCC Lounge 2',
    description: 'English devotion led by Rev. Fr. Dr. Abraham (Abey) George.',
    category: 'Liturgy',
    speakerId: 'sp-abraham'
  },
  {
    id: 'sess-203',
    title: 'Breakfast',
    time: '08:00 AM - 09:00 AM',
    timestamp: '2026-07-03T08:00:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Breakfast for all participants.',
    category: 'Social'
  },
  {
    id: 'sess-204',
    title: 'Hymns',
    time: '09:00 AM - 09:15 AM',
    timestamp: '2026-07-03T09:00:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Chanting and singing hymns by FYC Choir.',
    category: 'Liturgy'
  },
  {
    id: 'sess-205-family',
    title: 'Keynote address #1 & Q&A - Family',
    time: '09:30 AM - 10:30 AM',
    timestamp: '2026-07-03T09:30:00',
    day: 2,
    location: 'Alumni Hall, Room K229 (Building K, 2nd Floor)',
    description: 'Keynote address for Family by Rev. Fr. Dr. Timothy Thomas.',
    category: 'General',
    speakerId: 'sp-timothy'
  },
  {
    id: 'sess-205-youth',
    title: 'Keynote address #1 & Q&A - Youth (English Only)',
    time: '09:30 AM - 10:30 AM',
    timestamp: '2026-07-03T09:30:00',
    day: 2,
    location: 'Class room K217, Building K, near Alumini Hall (2nd Floor)',
    description: 'Keynote address for Youth by Rev. Fr. Dr. Abraham (Abey) George.',
    category: 'Youth',
    speakerId: 'sp-abraham'
  },
  {
    id: 'sess-205-kids',
    title: 'Kids Session',
    time: '09:30 AM - 10:30 AM',
    timestamp: '2026-07-03T09:30:00',
    day: 2,
    location: 'Class room K224, Building K, near Alumini Hall (2nd Floor)',
    description: 'Kids Session.',
    category: 'Kids'
  },
  {
    id: 'sess-206',
    title: 'Coffee Break',
    time: '10:30 AM - 11:00 AM',
    timestamp: '2026-07-03T10:30:00',
    day: 2,
    location: 'Alumni Hall Foyer (Building K)',
    description: 'Coffee break.',
    category: 'Social'
  },
  {
    id: 'sess-207-family',
    title: 'Keynote address #2 & Q&A - Family',
    time: '11:00 AM - 12:00 PM',
    timestamp: '2026-07-03T11:00:00',
    day: 2,
    location: 'Alumni Hall, Room K229 (Building K, 2nd Floor)',
    description: 'Keynote address for Family by Rev. Fr. Dr. Timothy Thomas.',
    category: 'General',
    speakerId: 'sp-timothy'
  },
  {
    id: 'sess-207-youth',
    title: 'Keynote address #2 & Q&A - Youth',
    time: '11:00 AM - 12:00 PM',
    timestamp: '2026-07-03T11:00:00',
    day: 2,
    location: 'Class room K217, Building K, near Alumini Hall (2nd Floor)',
    description: 'Keynote address for Youth by Rev. Fr. Dr. Abraham George.',
    category: 'Youth',
    speakerId: 'sp-abraham'
  },
  {
    id: 'sess-207-kids',
    title: 'Kids Session',
    time: '11:00 AM - 12:00 PM',
    timestamp: '2026-07-03T11:00:00',
    day: 2,
    location: 'Class room K224',
    description: 'Kids Session.',
    category: 'Kids'
  },
  {
    id: 'sess-208-malayalam',
    title: 'Noon Prayer - Malayalam',
    time: '12:00 PM - 12:15 PM',
    timestamp: '2026-07-03T12:00:00',
    day: 2,
    location: 'Alumni Hall, Room K229 (Building K, 2nd Floor)',
    description: 'Noon prayer in Malayalam.',
    category: 'Liturgy'
  },
  {
    id: 'sess-208-english',
    title: 'Noon Prayer - English',
    time: '12:00 PM - 12:15 PM',
    timestamp: '2026-07-03T12:00:00',
    day: 2,
    location: 'Class room K217, Building K, near Alumini Hall (2nd Floor)',
    description: 'Noon prayer in English.',
    category: 'Liturgy'
  },
  {
    id: 'sess-209',
    title: 'Lunch',
    time: '12:30 PM - 01:30 PM',
    timestamp: '2026-07-03T12:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Lunch.',
    category: 'Social'
  },
  {
    id: 'sess-210',
    title: 'Keynote Address #3 & Q&A (Joint Session)',
    time: '01:45 PM - 02:45 PM',
    timestamp: '2026-07-03T13:45:00',
    day: 2,
    location: 'Alumni Hall, Room K229 (Building K, 2nd Floor)',
    description: 'Joint session by Very Rev. Fr. Dr. Johns Abraham Konat.',
    category: 'General',
    speakerId: 'sp-johns'
  },
  {
    id: 'sess-211-group',
    title: 'Group Discussions',
    time: '02:45 PM - 03:30 PM',
    timestamp: '2026-07-03T14:45:00',
    day: 2,
    location: 'Various Rooms & Lounges Available',
    description: 'Group Discussions.',
    category: 'Workshop'
  },
  {
    id: 'sess-211-kids',
    title: 'Kids Session',
    time: '01:45 PM - 03:30 PM',
    timestamp: '2026-07-03T13:45:00',
    day: 2,
    location: 'Class room K224, Building K, near Alumini Hall (2nd Floor)',
    description: 'Kids Session.',
    category: 'Kids'
  },
  {
    id: 'sess-212',
    title: 'Coffee Break',
    time: '03:30 PM - 04:00 PM',
    timestamp: '2026-07-03T15:30:00',
    day: 2,
    location: 'Alumni Hall Foyer, Room K229 (Building K, 2nd Floor)',
    description: 'Coffee break.',
    category: 'Social'
  },
  {
    id: 'sess-213-mmvs',
    title: 'MMVS Meeting',
    time: '04:00 PM - 05:00 PM',
    timestamp: '2026-07-03T16:00:00',
    day: 2,
    location: 'Alumni Hall, Room K229 (Building K, 2nd Floor)',
    description: 'Spiritual Organizations Meeting - MMVS',
    category: 'Ladies'
  },
  {
    id: 'sess-213-mgocsm',
    title: 'MGOCSM Meeting',
    time: '04:00 PM - 05:00 PM',
    timestamp: '2026-07-03T16:00:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Spiritual Organizations Meeting - MGOCSM',
    category: 'Youth'
  },
  {
    id: 'sess-213-seniors',
    title: 'Seniors Forum Meeting',
    time: '04:00 PM - 05:00 PM',
    timestamp: '2026-07-03T16:00:00',
    day: 2,
    location: 'Class room K217, Building K, near Alumini Hall (2nd Floor)',
    description: 'Spiritual Organizations Meeting - Seniors Forum',
    category: 'Family'
  },
  {
    id: 'sess-213-ocym',
    title: 'OCYM Meeting',
    time: '04:00 PM - 05:00 PM',
    timestamp: '2026-07-03T16:00:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Spiritual Organizations Meeting - OCYM',
    category: 'Youth'
  },
  {
    id: 'sess-214',
    title: 'Break',
    time: '05:00 PM - 06:00 PM',
    timestamp: '2026-07-03T17:00:00',
    day: 2,
    location: 'RCC',
    description: 'Relax and refresh at RCC Lounge, play Volleyball or Basketball.',
    category: 'Social'
  },
  {
    id: 'sess-215',
    title: 'Refresh & Prepare for Evening Prayer',
    time: '06:00 PM - 06:30 PM',
    timestamp: '2026-07-03T18:00:00',
    day: 2,
    location: 'RCC',
    description: 'Refresh and prepare for evening prayer.',
    category: 'General'
  },
  {
    id: 'sess-216',
    title: 'Evening Prayer',
    time: '06:30 PM - 07:00 PM',
    timestamp: '2026-07-03T18:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Evening prayer.',
    category: 'Liturgy'
  },
  {
    id: 'sess-217',
    title: 'Dinner',
    time: '07:00 PM - 08:15 PM',
    timestamp: '2026-07-03T19:00:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Dinner. Separate food arrangements are available for vegetarians and individuals with food allergies.',
    category: 'Social'
  },
  {
    id: 'sess-218',
    title: 'FYC Feedback',
    time: '08:15 PM - 08:30 PM',
    timestamp: '2026-07-03T20:15:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Flash feedback session.',
    category: 'General'
  },
  {
    id: 'sess-219',
    title: 'Retreat, Meditation & Confession',
    time: '08:30 PM - 09:30 PM',
    timestamp: '2026-07-03T20:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Retreat, meditation, and confession led by Rev. Fr. Dr. Timothy (Tenny) Thomas.',
    category: 'General',
    speakerId: 'sp-timothy'
  },
  {
    id: 'sess-220',
    title: 'Bedtime Prayer',
    time: '09:30 PM - 09:45 PM',
    timestamp: '2026-07-03T21:30:00',
    day: 2,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Bedtime prayer.',
    category: 'Liturgy'
  },
  {
    id: 'sess-221',
    title: 'BED TIME',
    time: '09:45 PM',
    timestamp: '2026-07-03T21:45:00',
    day: 2,
    location: 'RCC',
    description: 'Bedtime.',
    category: 'General'
  },

  // Day 3: July 4, 2026
  {
    id: 'sess-301',
    title: 'Morning Prayer & Holy Qurbana',
    time: '07:00 AM - 09:00 AM',
    timestamp: '2026-07-04T07:00:00',
    day: 3,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Morning prayer & Holy Qurbana',
    category: 'Liturgy'
  },
  {
    id: 'sess-302',
    title: 'Breakfast',
    time: '09:15 AM - 10:10 AM',
    timestamp: '2026-07-04T09:15:00',
    day: 3,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Breakfast for all participants. Separate food arrangements are available for vegetarians and individuals with food allergies.',
    category: 'Social'
  },
  {
    id: 'sess-303',
    title: 'Hymn',
    time: '10:10 AM - 10:15 AM',
    timestamp: '2026-07-04T10:10:00',
    day: 3,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Hymn by FYC Choir.',
    category: 'Liturgy'
  },
  {
    id: 'sess-304',
    title: 'Valedictory Session',
    time: '10:15 AM - 11:15 AM',
    timestamp: '2026-07-04T10:15:00',
    day: 3,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Theme recapitulation and words of reflection',
    category: 'General'
  },
  {
    id: 'sess-305',
    title: 'Benediction',
    time: '11:15 AM - 11:30 AM',
    timestamp: '2026-07-04T11:15:00',
    day: 3,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Prayer and final benediction.',
    category: 'Liturgy'
  },
  {
    id: 'sess-306',
    title: 'Check out Time',
    time: '11:15 AM - 12:00 PM',
    timestamp: '2026-07-04T11:15:00',
    day: 3,
    location: 'RCC',
    description: 'All participants are required to check out of their rooms and return the keys by 11:50 AM. Participants may either move their luggage to their vehicles or store it in the designated lounges at RCC, and return to collect it after lunch.',
    category: 'General'
  },
  {
    id: 'sess-307',
    title: 'Lunch',
    time: '12:00 PM - 02:00 PM',
    timestamp: '2026-07-04T12:00:00',
    day: 3,
    location: 'ABSC Event Space (Building N, 3rd Floor, Room N302B)',
    description: 'Lunch for all participants. Separate food arrangements are available for vegetarians and individuals with food allergies.',
    category: 'Social'
  },
  {
    id: 'sess-308',
    title: 'Departure',
    time: '02:30 PM',
    timestamp: '2026-07-04T14:30:00',
    day: 3,
    location: 'RCC',
    description: 'Departure from RCC with your luggage.',
    category: 'General'
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
