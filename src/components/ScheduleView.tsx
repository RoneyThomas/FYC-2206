import { useState, useEffect } from 'react';
import { SESSIONS, SPEAKERS } from '../data';
import { Session } from '../types';
import { Search, Calendar, Star, MapPin, Clock, ChevronDown, ChevronUp, FileText, Check, ListFilter, Users, Sparkles } from 'lucide-react';

export default function ScheduleView() {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedSessionId, setExpandedSessionId] = useState<string | null>(null);
  
  // Starred sessions & Notes in Local Storage
  const [starredIds, setStarredIds] = useState<string[]>([]);
  const [sessionNotes, setSessionNotes] = useState<{ [id: string]: string }>({});
  const [isStarredOnly, setIsStarredOnly] = useState(false);
  
  // Toast overlay notification
  const [showNotesSaved, setShowNotesSaved] = useState<string | null>(null);

  useEffect(() => {
    // Load favorites from local storage
    const savedStars = localStorage.getItem('fyc_2026_stars');
    if (savedStars) {
      try { setStarredIds(JSON.parse(savedStars)); } catch (e) {}
    }

    // Load notes from local storage
    const savedNotes = localStorage.getItem('fyc_2026_notes');
    if (savedNotes) {
      try { setSessionNotes(JSON.parse(savedNotes)); } catch (e) {}
    }
  }, []);

  const handleToggleStar = (sessionId: string) => {
    let updated: string[];
    if (starredIds.includes(sessionId)) {
      updated = starredIds.filter(id => id !== sessionId);
    } else {
      updated = [...starredIds, sessionId];
    }
    setStarredIds(updated);
    localStorage.setItem('fyc_2026_stars', JSON.stringify(updated));
  };

  const handleSaveNotes = (sessionId: string, notesText: string) => {
    const updated = { ...sessionNotes, [sessionId]: notesText };
    setSessionNotes(updated);
    localStorage.setItem('fyc_2026_notes', JSON.stringify(updated));
    
    // Trigger localized success save feedback
    setShowNotesSaved(sessionId);
    setTimeout(() => setShowNotesSaved(null), 2500);
  };

  // Filter list of sessions
  const filteredSessions = SESSIONS.filter(session => {
    // Search match
    const matchesSearch = 
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      session.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Day match (ignored if isStarredOnly is selected)
    const matchesDay = isStarredOnly ? true : session.day === selectedDay;

    // Category match
    const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;

    // Starred filter
    const matchesStarOnly = !isStarredOnly || starredIds.includes(session.id);

    return matchesSearch && matchesDay && matchesCategory && matchesStarOnly;
  });

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Liturgy': return 'bg-amber-100/60 text-amber-800 border-amber-200';
      case 'Workshop': return 'bg-purple-100/60 text-purple-800 border-purple-200';
      case 'Social': return 'bg-teal-100/60 text-teal-800 border-teal-200';
      case 'Youth': return 'bg-pink-100/60 text-pink-800 border-pink-200';
      default: return 'bg-blue-100/60 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      
      {/* Search and Top Switchers */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-0.5">
            <h2 className="font-serif text-2xl font-bold text-[#000a1e]">Conference Schedule</h2>
            <p className="text-xs text-slate-500">Coordinate and study liturgical times, panel debates, and workshop tracks.</p>
          </div>

          {/* Starred Timetable Toggle Switch */}
          <button
            onClick={() => setIsStarredOnly(!isStarredOnly)}
            className={`px-4.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
              isStarredOnly
                ? 'bg-[#ffe088] text-[#735c00] border-[#fed65b]'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${isStarredOnly ? 'fill-[#735c00]' : ''}`} />
            <span>{isStarredOnly ? 'My Bookmarked Calendar' : 'View Bookmarks'}</span>
          </button>
        </div>

        {/* Dynamic Search bar and Category lists */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          <div className="sm:col-span-2 relative">
            <Search className="w-4.5 h-4.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search session title, Speaker, or Seminar hall..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs p-3 pl-10 bg-slate-50 border border-slate-200 focus:border-[#735c00] outline-none rounded-xl transition-colors"
            />
          </div>

          <div className="relative">
            <ListFilter className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full text-xs p-3 pl-9 bg-slate-50 border border-slate-200 outline-none rounded-xl transition-colors text-slate-700 cursor-pointer appearance-none"
            >
              <option value="All">All Categories</option>
              <option value="Liturgy">Divine Liturgy</option>
              <option value="General">Plenary Talks</option>
              <option value="Workshop">Workshops</option>
              <option value="Social">Dinner & Fellowship</option>
              <option value="Youth">Youth Movement</option>
            </select>
          </div>
        </div>
      </div>

      {/* Weekdate Tabs Selector (Only active if NOT StarredOnly filter) */}
      {!isStarredOnly && (
        <div className="grid grid-cols-3 gap-2 text-center bg-slate-100/80 p-1.5 rounded-2xl">
          {[
            { dayNum: 1, label: 'Day 1: July 2', subtitle: 'Sacred Arrival' },
            { dayNum: 2, label: 'Day 2: July 3', subtitle: 'Holy Eucharist' },
            { dayNum: 3, label: 'Day 3: July 4', subtitle: 'Valedictory' }
          ].map((tab) => (
            <button
              key={tab.dayNum}
              onClick={() => {
                setSelectedDay(tab.dayNum);
                setExpandedSessionId(null);
              }}
              className={`p-3 rounded-xl transition-all cursor-pointer ${
                selectedDay === tab.dayNum
                  ? 'bg-[#000a1e] text-white shadow-sm font-semibold'
                  : 'text-slate-600 hover:bg-slate-200/50 hover:text-[#000a1e]'
              }`}
            >
              <p className="text-xs font-serif leading-none">{tab.label}</p>
              <p className={`text-[9px] mt-1 uppercase tracking-wide opacity-80 ${selectedDay === tab.dayNum ? 'text-secondary-fixed' : 'text-slate-400'}`}>
                {tab.subtitle}
              </p>
            </button>
          ))}
        </div>
      )}

      {/* Agenda Iterative Cards */}
      <div className="space-y-4">
        {filteredSessions.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200/60 p-6 space-y-3">
            <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="font-serif text-lg font-bold text-slate-700">No Sessions Found</h4>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              {isStarredOnly 
                ? "You haven't bookmarked any sessions yet. Click the star icon next to a session to save it to your individual timetable."
                : "No schedule event matches your search queries or category selectors. Try resetting your search filter."}
            </p>
          </div>
        ) : (
          filteredSessions.map((session) => {
            const isExpanded = expandedSessionId === session.id;
            const isStarred = starredIds.includes(session.id);
            const speaker = session.speakerId ? SPEAKERS.find(s => s.id === session.speakerId) : null;
            const noteText = sessionNotes[session.id] || '';

            return (
              <div
                key={session.id}
                className={`bg-white border rounded-2xl transition-all shadow-xs overflow-hidden ${
                  isExpanded ? 'border-[#fed65b] ring-1 ring-[#fed65b]/40 shadow-sm' : 'border-slate-200/70 hover:border-slate-300/80 bg-[#fbfbfc]'
                }`}
              >
                {/* Visual Header Block */}
                <div 
                  onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                  className="p-5 flex justify-between items-start gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-2.5 min-w-0 flex-1">
                    {/* Categories tag & times */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border ${getCategoryColor(session.category)}`}>
                        {session.category}
                      </span>
                      {isStarredOnly && (
                        <span className="bg-[#002147] text-[#ffe088] text-[9px] font-bold px-1.5 py-0.5 rounded font-mono">
                          Day {session.day}
                        </span>
                      )}
                      <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{session.time}</span>
                      </div>
                    </div>

                    <h3 className="font-serif text-base sm:text-lg font-bold text-[#000a1e] leading-tight hover:text-[#735c00] transition-colors">
                      {session.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{session.location}</span>
                    </div>
                  </div>

                  {/* Actions column */}
                  <div className="flex items-center gap-2 mt-1 shrink-0" onClick={(e) => e.stopPropagation()}>
                    {/* Star toggle button */}
                    <button
                      onClick={() => handleToggleStar(session.id)}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${
                        isStarred 
                          ? 'bg-amber-50 text-amber-500 hover:bg-amber-100 border border-[#fed65b]' 
                          : 'bg-slate-50 border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                      }`}
                      title={isStarred ? "Remove from my timetable" : "Bookstar into my calendar"}
                    >
                      <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-500' : ''}`} />
                    </button>
                    
                    {/* Collapsible Trigger button */}
                    <button
                      onClick={() => setExpandedSessionId(isExpanded ? null : session.id)}
                      className="p-2 bg-slate-50 border border-slate-100 text-slate-500 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Theological & Pedagogical Detail Box */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 bg-slate-50/50 space-y-5">
                    
                    {/* Session description */}
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Session Narrative</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {session.description}
                      </p>
                    </div>

                    {/* Speaker Card inside detail */}
                    {speaker && (
                      <div className="flex gap-3.5 items-center p-3.5 bg-white border border-slate-200/60 rounded-xl">
                        <img
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-full object-cover border-2 border-secondary-container shadow-xs"
                        />
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold text-[#735c00] uppercase tracking-wider">Session Keynote Host</p>
                          <p className="font-serif text-sm font-semibold text-[#000a1e] leading-tight mt-0.5">{speaker.name}</p>
                          <p className="text-[10px] text-slate-500 truncate">{speaker.role} • {speaker.diocese}</p>
                        </div>
                      </div>
                    )}

                    {/* Integrated Personal Journal / Reflection Notes */}
                    <div className="border-t border-slate-200/50 pt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                          <FileText className="w-3.5 h-3.5 text-[#735c00]" /> Personal Journal & Reflections
                        </h4>
                        
                        {showNotesSaved === session.id && (
                          <span className="text-[9px] text-emerald-600 font-bold flex items-center gap-0.5 bg-emerald-50 px-2 py-0.5 rounded">
                            <Check className="w-2.5 h-2.5" /> Auto-saved in draft
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <textarea
                          placeholder="Jot down theological insights, biblical verses, action items, or prayer intentions from this session..."
                          rows={2}
                          defaultValue={noteText}
                          onBlur={(e) => handleSaveNotes(session.id, e.target.value)}
                          className="w-full text-xs p-3 bg-white border border-slate-200 focus:border-[#735c00] outline-none rounded-xl transition-colors shadow-inner resize-none"
                        />
                        <p className="text-[9px] text-slate-400">
                          * Your reflection diary is stored privately and securely inside your client-side browser cache.
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
