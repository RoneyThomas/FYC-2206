export interface Speaker {
  id: string;
  name: string;
  name1: string;
  role: string;
  diocese: string;
  bio: string;
  bio2: string;
  imageUrl: string;
}

export interface Session {
  id: string;
  title: string;
  time: string;
  timestamp: string; // ISO or human time
  day: number; // 1, 2, or 3
  location: string;
  speakerId?: string;
  description: string;
  category: 'Liturgy' | 'General' | 'Workshop' | 'Social' | 'Youth' | 'Kids' | 'Ladies' | 'Seniors';
}

export interface Song {
  id: string;
  title: string;
  category: 'General worship';
  englishTitle?: string;
  lyricsEnglish: string;
  lyricsTransliterated: string;
  lyricsMalayalam?: string;
  keyNotes?: string;
  tempo?: string;
}

export interface MessagePost {
  id: string;
  author: string;
  text: string;
  emoji: string;
  bgStyle: string;
  timestamp: string;
}

export interface Registration {
  id: string;
  fullName: string;
  email: string;
  church: string;
  workshops: string[];
  registeredAt: string;
}
