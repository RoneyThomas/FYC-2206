import { useState, useEffect } from 'react';
import {
  Home,
  Calendar,
  Music,
  Map,
  Menu,
  Bell,
  X,
  Check,
  Users,
  Church,
  Settings,
  ArrowRight,
  MapPin,
  CalendarDays,
  Sparkles,
  Award,
  BookOpen,
  UserCheck,
  Download,
  Smartphone
} from 'lucide-react';

// Import our cohesive sub-views & data
import { SPEAKERS } from './data';
import SpeakersBiosModal from './components/SpeakersBiosModal';
import RegistrationView from './components/RegistrationView';
import YouthConnectView from './components/YouthConnectView';
import ScheduleView from './components/ScheduleView';
import SongsView from './components/SongsView';
import MapView from './components/MapView';

export default function App() {
  // Navigation active tab State ('home', 'schedule', 'songs', 'map', 'registration', 'speakers', 'meetings', 'connect')
  const [activeTab, setActiveTab] = useState<string>('home');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // PWA Android install states
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const ignored = sessionStorage.getItem('fyc_android_install_ignored');
      if (!ignored) {
        setShowInstallBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const triggerAndroidInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('User installed the App on Android device');
    }
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  const dismissInstallBanner = () => {
    sessionStorage.setItem('fyc_android_install_ignored', 'true');
    setShowInstallBanner(false);
  };

  // Dynamic Countdown states to July 2, 2026
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Pre-seed mock notifications
  const [unreadCount, setUnreadCount] = useState(2);
  const [notifications] = useState([
    { id: 1, title: 'Conference Chants released!', text: 'Click on the Songs tab to practice the Malayalam and English harmonies.', read: false, time: '30m ago' },
    { id: 2, title: 'Dorm numbers published', text: 'Georgian College residence maps have been loaded into the Campuses locator.', read: false, time: '2 hrs ago' },
    { id: 3, title: 'Welcome Delegates!', text: 'The standard parking guidelines for Day 1 physical checking have been verified.', read: true, time: '1 day ago' }
  ]);

  // Calculate countdown dynamically
  useEffect(() => {
    const targetDate = new Date('2026-07-02T14:00:00').getTime();

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

  const markNotificationsRead = () => {
    setUnreadCount(0);
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

          {/* Quick Registration Button for Header */}
          {/* <button
            onClick={() => handleTabChange('registration')}
            className={`hidden sm:inline-flex px-3.5 py-1.5 rounded-lg text-xs font-extrabold items-center gap-1.5 cursor-pointer uppercase tracking-wider transition-all border ${
              activeTab === 'registration'
                ? 'bg-transparent text-[#ffe088] border-[#ffe088]'
                : 'bg-[#735c00] hover:bg-[#574500] text-white border-transparent'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-[#ffe088]" />
            <span>Pass Ticket</span>
          </button> */}

          {/* Notifications Trigger */}
          <button
            onClick={() => {
              setNotificationsOpen(!notificationsOpen);
              if (unreadCount > 0) markNotificationsRead();
            }}
            className="p-2 hover:bg-white/10 rounded-xl transition-all relative cursor-pointer"
            aria-label="View updates notifications"
          >
            <Bell className="w-5.5 h-5.5 text-slate-200" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#ba1a1a] text-white text-[9px] font-bold font-mono rounded-full flex items-center justify-center border border-[#000a1e] animate-pulse">
                {unreadCount}
              </span>
            )}
          </button>

          {/* ================= NOTIFICATIONS POPUP DRAWER ================= */}
          {notificationsOpen && (
            <div className="absolute right-0 top-12 w-80 bg-white text-slate-900 border border-slate-200 rounded-2xl shadow-xl z-[60] overflow-hidden">
              <div className="p-4 bg-[#000a1e] text-white flex justify-between items-center">
                <span className="font-serif text-sm font-semibold tracking-wider text-secondary-fixed">Diocesan Alerts</span>
                <button
                  onClick={() => setNotificationsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full text-slate-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="divide-y divide-slate-100 max-h-80 overflow-y-auto">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-3.5 hover:bg-slate-50 transition-colors space-y-1">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-bold text-primary-container leading-tight">{notif.title}</p>
                      <span className="text-[9px] font-mono text-slate-400">{notif.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-normal">{notif.text}</p>
                  </div>
                ))}
              </div>
              <div className="p-2 bg-slate-50 border-t border-slate-100 text-center">
                <button
                  onClick={() => {
                    setNotificationsOpen(false);
                    handleTabChange('schedule');
                  }}
                  className="text-[10px] text-[#735c00] font-semibold uppercase tracking-wider hover:underline"
                >
                  Study Liturgical Timing
                </button>
              </div>
            </div>
          )}
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
              <div className="w-14 h-14 bg-white rounded-full border-2 border-[#fff0aa] flex items-center justify-center p-1.5 shadow-sm overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgo7L33EjW-xMDrxBZVbA132ADEDKqpQsAcrmYAxJStwzXpRAtXdaCE-z3WPQTryvzDcN1p7Ujc2MqPhtXaEpBHUX_uW2xNMBAgQgSjJq5jfnt8Q0ZvHwoiDp7r7LLP39tOJM2XxznDFVWcewaFokndNcneAY4VCan2HJUwA1qQy_mHpkmlw04A0HE6YRfa3raaQfwwx8cZE7FmFn1nfdkOp4tH2CDaI5Fx7luJC4XSNMt0uPoQCRuL9witOFRkiVnKjRPjosoWooVCg"
                  alt="Diocese of Canada Seal"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
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
              { id: 'songs', label: 'Sacred Songs & Hymnals', icon: Music, subtitle: 'Lyrics library & chiming pitch' },
              // { id: 'registration', label: 'Delegate Ticket Pass', icon: UserCheck, subtitle: 'Secure check-in pass or amend' },
              { id: 'speakers', label: 'Keynote Speaker Ensembles', icon: Award, subtitle: 'Read academic profiles' },
              { id: 'meetings', label: 'Ministry Core Assemblies', icon: Church, subtitle: 'Sunday School & Youth committees' },
              { id: 'connect', label: 'Youth Connect Wall', icon: Users, subtitle: 'Greeting post encourages' },
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

            {/* 1. Hero visual Section */}
            <section className="relative bg-[#000a1e] overflow-hidden flex flex-col items-center justify-center py-16 px-4 text-center border-b border-[#fed65b]/20">
              {/* Subtle background matrix */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

              <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-5">
                <p className="text-xs font-bold text-[#ffe088] uppercase tracking-widest leading-none font-sans">The Malankara Orthodox Syrian Church</p>
                <h2 className="font-serif text-lg font-bold text-slate-300">Diocese of Canada</h2>

                {/* Highly structured central emblem */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-lg flex items-center justify-center p-2.5 border-4 border-[#fed65b]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgo7L33EjW-xMDrxBZVbA132ADEDKqpQsAcrmYAxJStwzXpRAtXdaCE-z3WPQTryvzDcN1p7Ujc2MqPhtXaEpBHUX_uW2xNMBAgQgSjJq5jfnt8Q0ZvHwoiDp7r7LLP39tOJM2XxznDFVWcewaFokndNcneAY4VCan2HJUwA1qQy_mHpkmlw04A0HE6YRfa3raaQfwwx8cZE7FmFn1nfdkOp4tH2CDaI5Fx7luJC4XSNMt0uPoQCRuL9witOFRkiVnKjRPjosoWooVCg"
                    alt="Diocesan Gold emblem seal"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
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
                    <h4 className="font-serif text-base font-bold text-white">Chant Song Library</h4>
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
                      Read full Bio &amp; Q&amp;A
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Scripture quote and citations footer */}
            <div className="bg-[#000a1e] text-[#ffe088] px-6 py-8 text-center border-t border-white/10 space-y-2 font-serif shadow-inner">
              <p className="text-base sm:text-lg italic max-w-2xl mx-auto opacity-95">
                "Jesus Christ is the same yesterday and today and forever."
              </p>
              <span className="block text-slate-300 tracking-wider font-sans uppercase font-bold text-[10px] mt-1">
                - Hebrews 13:8
              </span>
            </div>

          </div>
        )}

        {/* Dynamic subcomponents mounting depending on routing states */}
        {activeTab === 'schedule' && <ScheduleView />}
        {activeTab === 'songs' && <SongsView />}
        {activeTab === 'map' && <MapView />}
        {activeTab === 'registration' && <RegistrationView />}
        {activeTab === 'speakers' && <SpeakersBiosModal isOpenInline />}
        {activeTab === 'connect' && <YouthConnectView />}

        {/* Core assemblies / Association Details */}
        {activeTab === 'meetings' && (
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
        )}

      </main>

      {/* ================= BOTTOM NAVIGATION BAR (Mobile Only Overlay) ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-[safe] h-18 border-t border-slate-200 bg-white shadow-lg transition-colors">
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'schedule', label: 'Schedule', icon: Calendar },
          { id: 'songs', label: 'Songs', icon: Music },
          { id: 'connect', label: 'Connect', icon: Users },
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

      {/* ================= ANDROID PWA INSTALLATION TOAST ================= */}
      {showInstallBanner && (
        <div id="android-install-banner" className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-[#000a1e] text-white p-4 rounded-2xl shadow-2xl border border-[#ffe088]/20 z-50 flex items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-start gap-2.5">
            <div className="bg-[#ffe088]/15 p-2 rounded-xl text-[#ffe088] shrink-0">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold font-serif text-[#ffe088]">Install FYC 2026 App</p>
              <p className="text-[10px] text-slate-300 leading-normal">Get instant home screen launch, offline hymns, and Diocese updates.</p>
            </div>
          </div>
          <div className="flex gap-1.5 shrink-0">
            <button
              onClick={dismissInstallBanner}
              className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              Later
            </button>
            <button
              onClick={triggerAndroidInstall}
              className="px-3 py-1.5 bg-[#ffe088] hover:bg-[#ebd074] text-[#000a1e] text-[10px] font-extrabold rounded-lg flex items-center gap-1 cursor-pointer transition-all uppercase tracking-wider"
            >
              <Download className="w-3" />
              <span>Install</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
