import { useState, useEffect } from 'react';
import { SONGS } from '../data';
import { Song } from '../types';
import { Search, Music, Sparkles, BookOpen, Volume2, Type, ToggleLeft, ToggleRight, Info } from 'lucide-react';

export default function SongsView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSong, setSelectedSong] = useState<Song>(SONGS[0]);
  const [isTransliterated, setIsTransliterated] = useState(false);
  const [fontSizeClass, setFontSizeClass] = useState<number>(14); // in pixels

  // Audio playback indicator
  const [isPlayingMelody, setIsPlayingMelody] = useState(false);
  const [currentSynthNode, setCurrentSynthNode] = useState<AudioContext | null>(null);

  // Stop sound on unmount
  useEffect(() => {
    return () => {
      if (currentSynthNode) {
        currentSynthNode.close();
      }
    };
  }, [currentSynthNode]);

  // Clean searching
  const filteredSongs = SONGS.filter(song => {
    const matchesSearch =
      song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (song.englishTitle && song.englishTitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      song.lyricsEnglish.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.lyricsTransliterated.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || song.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const changeFontSize = (increase: boolean) => {
    setFontSizeClass(prev => {
      const nextValue = increase ? prev + 2 : prev - 2;
      return Math.max(12, Math.min(24, nextValue));
    });
  };

  // Spectacular Native HTML5 Web Audio API Liturgical Chime Synthesizer
  const playMelodySynth = () => {
    if (isPlayingMelody) {
      if (currentSynthNode) {
        currentSynthNode.close();
        setCurrentSynthNode(null);
      }
      setIsPlayingMelody(false);
      return;
    }

    try {
      // Initialize AudioContext
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      setCurrentSynthNode(ctx);
      setIsPlayingMelody(true);

      // Simple 8-note traditional chant melody frequencies
      // Tone: G-major natural pentatonic liturgical layout
      const melodyNotes = [
        392.00, // G4
        440.00, // A4
        493.88, // B4
        587.33, // D5
        587.33, // D5
        493.88, // B4
        440.00, // A4
        392.00, // G4
        440.00, // A4
        493.88, // B4
        392.00  // G4
      ];
      const durations = [0.4, 0.4, 0.6, 0.5, 0.4, 0.4, 0.4, 0.5, 0.4, 0.4, 0.8]; // in seconds

      let startTime = ctx.currentTime + 0.1;

      melodyNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Beautiful soft sine/triangle combination waves for a warm, ancient cathedral flute vibe
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        // Slow attack and decay envelope to sound like traditional pipes or chimes
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.12, startTime + 0.08); // quiet, respectful volume
        gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + durations[idx]);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + durations[idx]);

        startTime += durations[idx] - 0.12; // overlay slightly for warm legacy echo
      });

      // Automatically reset button state when melody finishes playing
      const totalDuration = durations.reduce((acc, curr) => acc + curr, 0) - (durations.length * 0.12);
      setTimeout(() => {
        setIsPlayingMelody(false);
        ctx.close();
        setCurrentSynthNode(null);
      }, (totalDuration + 0.5) * 1000);

    } catch (e) {
      console.error('Web Audio API not supported', e);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left column: Song Finder */}
        <div className="space-y-4 md:col-span-1">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4">
            <div className="space-y-1">
              <h2 className="font-serif text-lg font-bold text-[#000a1e] flex items-center gap-1.5">
                <Music className="w-5 h-5 text-[#735c00]" />
                Song Library
              </h2>
              <p className="text-[11px] text-slate-500">Search canonical evening vigils, saint liturgies, and youth chorals.</p>
            </div>

            {/* Title search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search lyrics or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs p-2.5 pl-9 bg-slate-50 border border-slate-200 focus:border-[#735c00] outline-none rounded-xl transition-colors"
              />
            </div>

            {/* Category selection list */}
            <div className="space-y-1 pt-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Category Filter</label>
              {['All', 'Hymns of Saint Mary', 'Liturgical Chants', 'Communion Hymns'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex justify-between items-center ${selectedCategory === category
                    ? 'bg-[#ffe088]/15 border border-[#fed65b] text-[#735c00] font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 border border-transparent'
                    }`}
                >
                  <span>{category}</span>
                  {selectedCategory === category && <span className="w-1.5 h-1.5 bg-[#735c00] rounded-full"></span>}
                </button>
              ))}
            </div>
          </div>

          {/* List of matching songs */}
          <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
            {filteredSongs.map((song) => (
              <button
                key={song.id}
                onClick={() => {
                  setSelectedSong(song);
                  // stop audio automatically
                  if (isPlayingMelody && currentSynthNode) {
                    currentSynthNode.close();
                    setIsPlayingMelody(false);
                    setCurrentSynthNode(null);
                  }
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${selectedSong.id === song.id
                  ? 'bg-white border-[#fed65b] ring-1 ring-[#fed65b]/40 shadow-xs'
                  : 'bg-slate-50/50 hover:bg-slate-50 border-slate-100 hover:border-slate-200 text-slate-700'
                  }`}
              >
                <p className="text-[10px] text-slate-400 uppercase font-mono font-bold tracking-wider mb-0.5">{song.category}</p>
                <p className="font-serif text-xs font-bold text-[#000a1e] leading-tight">{song.title}</p>
                {song.englishTitle && (
                  <p className="text-[10px] text-slate-500 italic mt-0.5 truncate">{song.englishTitle}</p>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right column: Interactive Lyric Screen and Controls */}
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col min-h-[480px]">
            {/* Lyrics Header (Visual and controls) */}
            <div className="p-5 bg-slate-50 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-amber-50 text-amber-800 text-[10px] uppercase tracking-wide font-bold rounded-md border border-amber-100">
                  <Sparkles className="w-2.5 h-2.5 text-[#735c00]" /> {selectedSong.category}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#000a1e]">{selectedSong.title}</h3>
                {selectedSong.englishTitle && (
                  <p className="text-xs text-slate-500 italic font-medium leading-none">{selectedSong.englishTitle}</p>
                )}
              </div>

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Liturgical Chant Helper */}
                {/* <button
                  onClick={playMelodySynth}
                  className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    isPlayingMelody
                      ? 'bg-emerald-500 text-white shadow-sm'
                      : 'bg-[#000a1e] hover:bg-[#002147] text-white'
                  }`}
                  title="Listen to melody chime pitch"
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingMelody ? 'animate-bounce text-white' : 'text-[#fed65b]'}`} />
                  <span className="text-[11px]">{isPlayingMelody ? 'Playing...' : 'Tune Pitch'}</span>
                </button> */}

                {/* Font Size controls */}
                <div className="flex items-center bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => changeFontSize(false)}
                    className="p-2 hover:bg-slate-50 text-xs font-bold text-slate-600 border-r border-slate-100 h-8 w-8 cursor-pointer"
                    title="Shrink font size"
                  >
                    A-
                  </button>
                  <span className="px-2 text-[10px] text-slate-400 font-mono select-none">{fontSizeClass}px</span>
                  <button
                    onClick={() => changeFontSize(true)}
                    className="p-2 hover:bg-slate-50 text-xs font-bold text-slate-600 border-l border-slate-100 h-8 w-8 cursor-pointer"
                    title="Enlarge font size"
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>

            {/* Tab switch bar (Malayalam Transliterated vs English translation) */}
            <div className="flex border-b border-slate-100">
              <button
                onClick={() => setIsTransliterated(false)}
                className={`flex-1 text-center py-2.5 text-xs font-semibold border-b-2 cursor-pointer ${!isTransliterated
                  ? 'border-[#735c00] text-[#735c00] bg-[#ffe088]/5 font-bold'
                  : 'border-transparent text-slate-500 hover:text-[#000a1e]'
                  }`}
              >
                English Translation
              </button>
              <button
                onClick={() => setIsTransliterated(true)}
                className={`flex-1 text-center py-2.5 text-xs font-semibold border-b-2 cursor-pointer ${isTransliterated
                  ? 'border-[#735c00] text-[#735c00] bg-[#ffe088]/5 font-bold'
                  : 'border-transparent text-slate-500 hover:text-[#000a1e]'
                  }`}
              >
                Malayalam Transliteration
              </button>
            </div>

            {/* Lyrics Content */}
            <div className="p-6 flex-1 bg-white flex flex-col justify-between">
              <div className="space-y-6">
                <p
                  className="whitespace-pre-line text-slate-700 leading-relaxed font-serif text-center italic"
                  style={{ fontSize: `${fontSizeClass}px` }}
                >
                  {isTransliterated ? selectedSong.lyricsTransliterated : selectedSong.lyricsEnglish}
                </p>
              </div>

              {/* Informational Keynotes footer */}
              {/* {selectedSong.keyNotes && (
                <div className="mt-8 p-3.5 bg-slate-50 rounded-xl border border-slate-100/80 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide">Liturgical Key Notes</p>
                    <p className="text-[11px] text-slate-600 leading-normal mt-0.5">{selectedSong.keyNotes}</p>
                    {selectedSong.tempo && (
                      <p className="text-[9px] text-[#735c00] font-mono mt-1 uppercase font-semibold">Suggested Tone Weight: {selectedSong.tempo}</p>
                    )}
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
