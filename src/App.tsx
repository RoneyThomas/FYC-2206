import { useState, useEffect } from 'react';
import {
  Home,
  Calendar,
  Music,
  Map,
  Menu,
  X,
  Church,
  ArrowRight,
  MapPin,
  CalendarDays,
  Award,
  Mail,
  Users,
  BookOpen,
  Heart,
} from 'lucide-react';
import logoImage from './assets/logo.webp';

// Import our cohesive sub-views & data
import { SPEAKERS } from './data';
import SpeakersBiosModal from './components/SpeakersBiosModal';
import ScheduleView from './components/ScheduleView';
import SongsView from './components/SongsView';
import MapView from './components/MapView';

export default function App() {
  // Navigation active tab State ('home', 'schedule', 'songs', 'map', 'registration', 'speakers', 'meetings', 'connect')
  const [activeTab, setActiveTab] = useState<string>('home');
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Dynamic Countdown states to July 2, 2026
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });


  // Calculate countdown dynamically
  useEffect(() => {
    const targetDate = new Date('2026-07-02T18:30:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-sans flex flex-col justify-between pb-24 md:pb-0">

      {/* ================= TOP APP BAR ================= */}
      <header className="fixed top-0 left-0 w-full h-16 bg-[#000a1e] text-white z-50 flex items-center justify-between px-4 sm:px-6 border-b border-white/15 shadow-sm">

        {/* Hamburger Drawer trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDrawerOpen(true)}
            className="p-2 hover:bg-white/10 rounded-xl transition-all cursor-pointer"
            aria-label="Open directory context menu"
          >
            <Menu className="w-5.5 h-5.5 text-[#ffe088]" />
          </button>

          <button
            onClick={() => handleTabChange('home')}
            className="font-serif text-lg font-bold text-white tracking-tight flex items-center gap-1.5 focus:outline-none"
          >
            <span className="text-[#ffe088] font-serif uppercase tracking-widest font-extrabold text-sm border-r border-white/20 pr-2 mr-0.5">FYC 2026</span>
            <span className="hidden sm:inline-block text-xs text-slate-300 font-sans uppercase font-semibold tracking-wider">Diocese of Canada</span>
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1 sm:gap-2.5 relative">

          {/* Main Desktop Tab Menu Links */}
          <nav className="hidden md:flex items-center gap-2 mr-3 border-r border-white/10 pr-4">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'schedule', label: 'Schedule', icon: Calendar },
              { id: 'songs', label: 'Song Library', icon: Music },
              { id: 'map', label: 'Campus Map', icon: Map }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${activeTab === tab.id
                    ? 'bg-[#ffe088] text-[#735c00] font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>


        </div>
      </header>

      {/* ================= SIDE NAVIGATION DRAWER ================= */}
      {/* Backdrop overlay */}
      {drawerOpen && (
        <div
          onClick={() => setDrawerOpen(false)}
          className="fixed inset-0 bg-[#1e293b]/50 backdrop-blur-sm z-[100] transition-opacity"
        />
      )}
      {/* Drawer layout body */}
      <aside className={`fixed inset-y-0 left-0 w-80 bg-white border-r border-slate-200 shadow-2xl z-[110] transform transition-transform duration-300 flex flex-col justify-between ${drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="p-5 bg-[#000a1e] text-white relative">
            <button
              onClick={() => setDrawerOpen(false)}
              className="absolute right-4 top-4 p-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors cursor-pointer text-slate-200"
            >
              <X className="w-4.5 h-4.5" />
            </button>

            <div className="space-y-4 pt-1.5">
              <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={logoImage}
                  alt="Diocese of Canada Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain rounded-4xl"
                />
              </div>
              <div className="space-y-0.5">
                <h3 className="font-serif font-bold text-base text-[#ffe088]">Diocese of Canada</h3>
                <p className="text-[10px] text-slate-300 uppercase tracking-widest font-semibold font-sans">Malankara Orthodox Syrian Church</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {[
              { id: 'home', label: 'Welcome Home Screen', icon: Home, subtitle: 'Conference index & overview' },
              { id: 'schedule', label: 'Liturgical & Plenary Schedule', icon: Calendar, subtitle: 'Time schedules and reflections' },
              { id: 'songs', label: 'Song Library', icon: Music, subtitle: 'Lyrics library & chiming pitch' },
              // { id: 'registration', label: 'Delegate Ticket Pass', icon: UserCheck, subtitle: 'Secure check-in pass or amend' },
              { id: 'speakers', label: 'Keynote Speaker Ensembles', icon: Award, subtitle: 'Read academic profiles' },
              // { id: 'meetings', label: 'Ministry Core Assemblies', icon: Church, subtitle: 'Sunday School & Youth committees' },
              // { id: 'connect', label: 'Youth Connect Wall', icon: Users, subtitle: 'Greeting post encourages' },
              { id: 'map', label: 'Georgian College Directions', icon: Map, subtitle: 'Driving path, places & dining' }
            ].map((link) => {
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleTabChange(link.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 border ${activeTab === link.id
                    ? 'bg-[#ffe088]/15 border-[#fed65b] text-[#735c00] font-bold'
                    : 'bg-transparent border-transparent text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  <Icon className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold leading-tight">{link.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">{link.subtitle}</p>
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer info box */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-1 text-center text-[10px] text-slate-400">
          <p className="font-semibold text-slate-500">Family & Youth Conference 2026</p>
          <p>© 2026 Diocese of Canada</p>
        </div>
      </aside>

      {/* ================= MAIN DYNAMIC CONTENT CANVAS ================= */}
      <main className="pt-16 pb-12 flex-1 max-w-7xl mx-auto w-full">

        {/* VIEW ROUTE CONTROLLERS */}

        {activeTab === 'home' && (
          <div className="space-y-12">

            <div>
              {/* 1. Hero visual Section */}
              <section className="relative bg-[#000a1e] overflow-hidden flex flex-col items-center justify-center py-16 px-4 text-center border-b border-[#fed65b]/20">
                {/* Subtle background matrix */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

                <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-5">
                  <p className="text-xs font-bold text-[#ffe088] uppercase tracking-widest leading-none font-sans">The Malankara Orthodox Syrian Church</p>
                  <h2 className="font-serif text-lg font-bold text-slate-300">Diocese of Canada</h2>

                  {/* Highly structured central emblem */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                    <img
                      src={logoImage}
                      alt="Diocese of Canada Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                      Family &amp; Youth <br />
                      <span className="text-[#ffe088]">Conference 2026</span>
                    </h1>
                  </div>

                  <div className="bg-[#ffe088]/10 border border-[#fed65b]/30 backdrop-blur-md rounded-xl py-3 px-6 mt-2 shadow-sm">
                    <p className="font-serif text-[#ffe088] text-base sm:text-lg italic font-medium">"Timeless Truth for a Changing World"</p>
                  </div>

                  <div className="text-center mt-2">
                    <p className="font-serif italic text-[#fed65b] text-sm sm:text-base leading-relaxed">
                      "Jesus Christ is the same yesterday and today and forever."
                    </p>
                    <p className="text-[#ffe088] text-[10px] font-bold uppercase tracking-wider mt-1">
                      - Hebrews 13:8
                    </p>
                  </div>
                </div>
              </section>

              {/* 2. Dynamic countdown timers row */}
              <section className="bg-[#002147] py-8 border-y border-[#fed65b]/30 text-white shadow-inner">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
                  <h3 className="font-serif text-[#ffe088] uppercase tracking-widest text-xs font-bold">Countdown to Conference</h3>

                  <div className="flex justify-center gap-3 sm:gap-6">
                    {[
                      { label: 'Days', value: countdown.days },
                      { label: 'Hours', value: countdown.hours },
                      { label: 'Mins', value: countdown.minutes },
                      { label: 'Secs', value: countdown.seconds }
                    ].map((unit, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="bg-white/10 border border-white/10 rounded-2xl w-16 h-16 sm:w-24 sm:h-24 flex items-center justify-center mb-1.5 shadow-sm">
                          <span className="font-serif text-2xl sm:text-4xl text-white font-extrabold font-mono tracking-tight leading-none">
                            {String(unit.value).padStart(2, '0')}
                          </span>
                        </div>
                        <span className="text-[10px] text-[#ffe088] uppercase tracking-widest font-semibold">{unit.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>

            {/* 3. Welcome narrative & bento buttons cards */}
            <section className="px-4 max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-2.5">
                <h3 className="font-serif text-2xl sm:text-3.5xl font-extrabold text-[#000a1e]">Welcome Home</h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Join us for three days of spiritual renewal, meaningful fellowship, and theological exploration at Georgian College. Navigate the schedule, access hymnals, and connect with your diocese community.
                </p>
              </div>

              {/* Bento Grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
                {/* Gold Card -> Schedule */}
                <button
                  onClick={() => handleTabChange('schedule')}
                  className="group relative overflow-hidden rounded-2xl bg-[#fed65b] p-6 transition-all hover:-translate-y-1 hover:shadow-md flex flex-col items-start justify-between min-h-[160px] text-slate-900 border border-[#735c00]/20 cursor-pointer"
                >
                  <div className="bg-[#735c00]/10 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-[#735c00]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-bold text-[#735c00]">Conference Schedule</h4>
                    <p className="text-xs text-[#735c00]/80">View liturgical calendars, Qurbana times, and parallel workshops.</p>
                  </div>
                  <span className="absolute bottom-6 right-6 p-1.5 bg-[#735c00]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-[#735c00]" />
                  </span>
                </button>

                {/* Navy Card -> Song library */}
                <button
                  onClick={() => handleTabChange('songs')}
                  className="group relative overflow-hidden rounded-2xl bg-[#000a1e] p-6 transition-all hover:-translate-y-1 hover:shadow-md flex flex-col items-start justify-between min-h-[160px] text-white border border-white/10 cursor-pointer"
                >
                  <div className="bg-white/10 p-3 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                    <Music className="w-6 h-6 text-[#ffe088]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-bold text-white">Song Library</h4>
                    <p className="text-xs text-slate-300">Access Malayalam transliterated lyrics and pitch helpers.</p>
                  </div>
                  <span className="absolute bottom-6 right-6 p-1.5 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-4 h-4 text-[#ffe088]" />
                  </span>
                </button>
              </div>
            </section>

            {/* 4. Dates & venue horizontal items Strip */}
            <section className="bg-slate-100 py-8 border-y border-slate-200">
              <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Date item */}
                <div className="flex items-center gap-3.5 p-4.5 bg-white rounded-xl border border-slate-200 shadow-xs">
                  <div className="p-3 bg-[#fed65b]/20 text-[#735c00] rounded-xl shrink-0">
                    <CalendarDays className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Assigned Date</span>
                    <p className="font-serif text-base font-extrabold text-[#000a1e]">July 2 - 4, 2026</p>
                  </div>
                </div>

                {/* Location item */}
                <div
                  onClick={() => handleTabChange('map')}
                  className="flex items-center gap-3.5 p-4.5 bg-white rounded-xl border border-slate-200 shadow-xs cursor-pointer hover:border-[#fed65b] transition-colors"
                >
                  <div className="p-3 bg-[#fed65b]/20 text-[#735c00] rounded-xl shrink-0">
                    <MapPin className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Assigned Location</span>
                    <p className="font-serif text-base font-extrabold text-[#000a1e] hover:text-[#735c00]">Georgian College, Barrie</p>
                  </div>
                </div>

              </div>
            </section>

            {/* About the Conference Section */}
            <section className="px-4 max-w-5xl mx-auto space-y-12 py-4">
              {/* Header */}
              <div className="text-center relative">
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#000a1e] relative inline-block">
                  About the Conference
                  <span className="absolute -bottom-2.5 left-1/4 right-1/4 h-0.5 bg-[#fed65b]"></span>
                </h3>
              </div>

              {/* Main Split Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                {/* Left side: Major Highlight Callout */}
                <div className="lg:col-span-5 bg-[#000a1e] text-white p-8 rounded-2xl border border-[#fed65b]/30 shadow-md flex flex-col justify-between relative overflow-hidden group hover:border-[#fed65b] transition-all">
                  {/* Backdrop subtle glow */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#fed65b]/5 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="space-y-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fed65b]/15 border border-[#fed65b]/30 text-[#ffe088] text-[10px] uppercase font-bold tracking-wider font-sans">
                      <Church className="w-3.5 h-3.5" />
                      <span>Historic Milestone</span>
                    </div>

                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#ffe088] leading-tight">
                      A New Era of Orthodox Life in Canada
                    </h4>


                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                      The Diocese of Canada of the Malankara Orthodox Syrian Church prayerfully announces the first annual Family &amp; Youth Conference (FYC 2026), to be held from Thursday, July 2 to Saturday, July 4, 2026, at Georgian College, Barrie, Ontario.
                    </p>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                      As the first conference of its kind in the Diocese, FYC 2026 marks an important milestone in nurturing Orthodox Christian life within our growing community in Canada.
                    </p>
                  </div>

                  <div className="pt-8 mt-6 border-t border-white/10 relative z-10">
                    <p className="font-serif text-sm italic text-[#ffe088] leading-relaxed">
                      "FYC 2026 is more than a conference—it is an opportunity to inspire a new generation, strengthen families, and build a vibrant Orthodox community in Canada."
                    </p>
                  </div>
                </div>

                {/* Right side: Detailed Pillars */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-6">
                  {/* Pillar 1: Gathering & Community */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#fed65b]/45 transition-all flex gap-4">
                    <div className="p-3 bg-[#ffe088]/15 text-[#735c00] rounded-xl shrink-0 h-fit">
                      <Users className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-serif text-sm sm:text-base font-bold text-[#000a1e]">Communal Gathering &amp; Renewal</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        This historic gathering will bring together families, youth, clergy, and faithful from across Canada for a meaningful time of worship, learning, fellowship, and spiritual renewal.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2: Core Theme & Identity */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#fed65b]/45 transition-all flex gap-4">
                    <div className="p-3 bg-[#ffe088]/15 text-[#735c00] rounded-xl shrink-0 h-fit">
                      <Heart className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-serif text-sm sm:text-base font-bold text-[#000a1e]">Timeless Truth</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        Rooted in this theme, the conference seeks to reflect on the unchanging truth of Christ in a rapidly changing world. FYC 2026 aims to strengthen Orthodox identity, nurture strong Christian families, guide youth in faith, and deepen communion within the Church community.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 3: Liturgical & Educational Framework */}
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-[#fed65b]/45 transition-all flex gap-4">
                    <div className="p-3 bg-[#ffe088]/15 text-[#735c00] rounded-xl shrink-0 h-fit">
                      <BookOpen className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-serif text-sm sm:text-base font-bold text-[#000a1e]">Sacraments, Workshops &amp; Guidance</h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        The conference will include Divine Liturgy, canonical prayers, spiritual reflections, family and youth sessions, workshops, and fellowship opportunities rooted in the faith and traditions of the Malankara Orthodox Church. Sessions will address key aspects of Christian life, including biblical teachings, sacramental life, family relationships, youth challenges, social issues, and personal spiritual growth.
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans pt-1">
                        The conference will also include additional resource persons who will share insights and guidance for families and youth in the context of Orthodox Christian life.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Quote Banner */}
              <div className="bg-[#ffe088]/10 border border-[#fed65b]/20 rounded-2xl p-6 text-center shadow-xs">
                <p className="text-xs sm:text-sm text-[#735c00] font-sans font-medium leading-relaxed max-w-3xl mx-auto">
                  This gathering promises to be a joyful celebration of faith, fellowship, and shared spiritual growth for the entire Diocese. We invite all delegates to prepare prayerfully for this blessed encounter.
                </p>
              </div>
            </section>

            {/* 5. Keynote Speakers section lists exactly as requested */}
            <section className="px-4 max-w-5xl mx-auto space-y-10">
              <div className="text-center relative">
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#000a1e] relative inline-block">
                  Keynote Speakers
                  <span className="absolute -bottom-2.5 left-1/4 right-1/4 h-0.5 bg-[#fed65b]"></span>
                </h3>
              </div>

              {/* Grid matching the requested mockup styling with white borders and gold badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {SPEAKERS.map((s) => (
                  <div key={s.id} className="flex flex-col items-center text-center space-y-3.5">

                    {/* Circle image container inside custom border */}
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-slate-200 shadow-sm relative shrink-0">
                      <img
                        src={s.imageUrl}
                        alt={s.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-extrabold text-[#000a1e] leading-tight px-1.5">{s.name}</h4>
                      <p className="text-[11px] font-bold text-[#735c00] uppercase tracking-wide px-1.5">{s.role}</p>
                      <p className="text-[10px] text-slate-400 font-sans tracking-wide leading-none">{s.diocese}</p>
                    </div>

                    <button
                      onClick={() => handleTabChange('speakers')}
                      className="px-3 py-1 bg-slate-100 hover:bg-[#ffe088]/30 hover:text-[#735c00] border border-slate-200 text-slate-600 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
                    >
                      Read full Bio
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact & Committee Section */}
            <section className="px-4 max-w-5xl mx-auto space-y-8 py-8 border-t border-slate-200">
              <div className="text-center relative">
                <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-widest text-[#000a1e] relative inline-block">
                  Conference Contacts &amp; Committee
                  <span className="absolute -bottom-2.5 left-1/4 right-1/4 h-0.5 bg-[#fed65b]"></span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                {/* Left Side: Contact details */}
                <div className="md:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-[#fed65b] transition-all">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ffe088]/20 flex items-center justify-center text-[#735c00]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-base font-bold text-[#000a1e]">Get in Touch</h4>
                      <p className="text-xs text-slate-500 font-sans leading-relaxed">
                        For registration inquiries, accommodation questions, or other conference details, feel free to reach out.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-1">Email Support</p>
                    <a
                      href="mailto:fyc@mosccanada.org"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#735c00] hover:text-[#000a1e] transition-colors font-sans"
                    >
                      fyc@mosccanada.org
                    </a>
                  </div>
                </div>

                {/* Right Side: Committee Grid */}
                <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'Rev. Fr. Dr. Thomas George', role: 'General Convenor', initials: 'TG', phone: '+1 (647) 449-0590' },
                    { name: 'Rev. Fr. Sam Thankachan', role: 'Conference Coordinator', initials: 'ST', phone: '+1 (647) 515-7231' },
                    { name: 'Mr. Manu Abraham', role: 'Secretary', initials: 'MA', phone: '+1 (416) 953-9686' },
                    { name: 'Mr. Vivin Vettiyil', role: 'Joint Secretary', initials: 'VV', phone: '+1 (437) 871-2323' }
                  ].map((member, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4.5 rounded-xl border border-slate-200 shadow-xs hover:shadow-sm hover:border-[#fed65b]/35 transition-all flex items-center gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#000a1e] text-[#ffe088] font-bold text-xs flex items-center justify-center shrink-0 border border-[#fed65b]/20">
                        {member.initials}
                      </div>
                      <div className="space-y-0.5 min-w-0">
                        <p className="font-serif text-xs sm:text-sm font-extrabold text-[#000a1e] truncate">{member.name}</p>
                        <p className="text-[10px] text-slate-500 font-sans tracking-wide uppercase font-semibold">{member.role}</p>
                        <p className="text-[14px] text-[#735c00] font-sans tracking-wide uppercase font-semibold"><a href={`tel:${member.phone}`} className="hover:underline">{member.phone}</a></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. Scripture quote and citations footer */}
            {/* <div className="bg-[#000a1e] text-[#ffe088] px-6 py-8 text-center border-t border-white/10 space-y-2 font-serif shadow-inner">
              <p className="text-base sm:text-lg italic max-w-2xl mx-auto opacity-95">
                "Jesus Christ is the same yesterday and today and forever."
              </p>
              <span className="block text-slate-300 tracking-wider font-sans uppercase font-bold text-[10px] mt-1">
                - Hebrews 13:8
              </span>
            </div> */}

          </div>
        )}

        {/* Dynamic subcomponents mounting depending on routing states */}
        {activeTab === 'schedule' && <ScheduleView />}
        {activeTab === 'songs' && <SongsView />}
        {activeTab === 'map' && <MapView />}
        {activeTab === 'speakers' && <SpeakersBiosModal isOpenInline />}
        {/* {activeTab === 'connect' && <YouthConnectView />} */}

        {/* Core assemblies / Association Details */}
        {/* {activeTab === 'meetings' && (
          <div className="max-w-3xl mx-auto px-4 py-8 space-y-6">
            <div className="bg-white border p-6 rounded-2xl shadow-sm space-y-1.5">
              <h2 className="font-serif text-2xl font-bold text-primary-container">Ministry Core Meetings</h2>
              <p className="text-xs text-slate-500">Scheduled regional sub-committee assemblies taking place in parallel classrooms inside Georgian complex.</p>
            </div>

            <div className="space-y-4">
              {[
                { name: 'Diocesan Youth Movement Board', time: 'Friday, July 3 - 03:30 PM', room: 'Seminar A22', desc: 'Planning the 2026/2027 regional winter camps, leadership retreats and theological study schedules for Canadian youth parishes.' },
                { name: 'Sunday School Directors Forum', time: 'Saturday, July 4 - 08:30 AM', room: 'Room B15', desc: 'Rev. Fr. Dr. Timothy Thomas host. Standardizing the regional digital Malayalam transliterated guides, teachers training programs, and curriculum updates.' },
                { name: 'Clergy Association Plenary Assembly', time: 'Thursday, July 2 - 11:30 AM', room: 'Chapel Meeting Annex', desc: 'Pre-conference administrative agenda, parish auditing briefings, pastoral counselors guidelines led by Diocesan Secretary.' }
              ].map((meet, idx) => (
                <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <span className="text-xs font-bold text-[#735c00] uppercase tracking-wide">{meet.time}</span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded font-mono border border-slate-200">
                      {meet.room}
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#000a1e]">{meet.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{meet.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}

      </main>

      {/* ================= BOTTOM NAVIGATION BAR (Mobile Only Overlay) ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-[safe] h-18 border-t border-slate-200 bg-white shadow-lg transition-colors">
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'schedule', label: 'Schedule', icon: Calendar },
          { id: 'songs', label: 'Songs', icon: Music },
          // { id: 'connect', label: 'Connect', icon: Users },
          { id: 'map', label: 'Map', icon: Map }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex flex-col items-center justify-center p-1 cursor-pointer transition-all ${isActive
                ? 'bg-[#ffe088] text-[#735c00] rounded-2xl px-3 py-1 scale-102 font-bold'
                : 'text-slate-500 hover:text-[#000a1e]'
                }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="text-[10px] leading-tight font-sans mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
