import React, { useState, useEffect } from 'react';
import { Registration } from '../types';
import { CheckCircle, QrCode, Ticket, Users, Landmark, AlertCircle, Sparkles } from 'lucide-react';

export default function RegistrationView() {
  const [registration, setRegistration] = useState<Registration | null>(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [church, setChurch] = useState('');
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load existing registration from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fyc_2026_registration');
    if (saved) {
      try {
        setRegistration(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading registration', e);
      }
    }
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !church) return;

    setIsSubmitting(true);
    
    // Simulate brief latency for realism
    setTimeout(() => {
      const newReg: Registration = {
        id: 'TKT-' + Math.floor(100000 + Math.random() * 900000),
        fullName,
        email,
        church,
        workshops: selectedWorkshops,
        registeredAt: new Date().toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      localStorage.setItem('fyc_2026_registration', JSON.stringify(newReg));
      setRegistration(newReg);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleCancelRegistration = () => {
    if (window.confirm('Are you sure you want to cancel your delegate ticket for FYC 2026? This will release your workshop seats.')) {
      localStorage.removeItem('fyc_2026_registration');
      setRegistration(null);
      setFullName('');
      setEmail('');
      setChurch('');
      setSelectedWorkshops([]);
    }
  };

  const toggleWorkshop = (id: string) => {
    if (selectedWorkshops.includes(id)) {
      setSelectedWorkshops(selectedWorkshops.filter(w => w !== id));
    } else {
      setSelectedWorkshops([...selectedWorkshops, id]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {registration ? (
        /* ================= TICKET VIEW ================= */
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center p-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-[#000a1e]">You Are Welcome Home!</h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              Your delegate registration for the <strong>Diocese of Canada Family & Youth Conference 2026</strong> is secure. Show this pass at Georgian College welcoming desk.
            </p>
          </div>

          {/* Fully stylized Physical-look church pass card */}
          <div className="relative bg-[#000a1e] text-white rounded-3xl overflow-hidden shadow-2xl border border-[#fed65b]/30">
            {/* Top gold banner strip */}
            <div className="bg-[#fed65b] text-[#735c00] px-6 py-2.5 flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
              <span>Official Delegate Pass</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#735c00]" /> FYC 2026
              </span>
            </div>

            {/* Ticket body */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <div className="space-y-1">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Delegate Name</p>
                  <p className="font-serif text-2xl font-bold text-white">{registration.fullName}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Ticket ID</p>
                    <p className="text-sm font-mono font-bold text-[#ffe088]">{registration.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Authorized On</p>
                    <p className="text-xs font-medium text-slate-200">{registration.registeredAt}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Parish / Assembly</p>
                    <p className="text-xs text-white flex items-center gap-1.5 mt-0.5">
                      <Landmark className="w-3.5 h-3.5 text-[#fed65b]" /> {registration.church}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Assigned Venue</p>
                    <p className="text-xs font-semibold text-[#fed65b] mt-0.5">Georgian College, Barrie</p>
                  </div>
                </div>

                {registration.workshops.length > 0 && (
                  <div className="pt-3">
                    <p className="text-[10px] text-[#fed65b] uppercase tracking-wider font-semibold mb-1">Enrolled Workshops</p>
                    <div className="flex flex-wrap gap-1.5">
                      {registration.workshops.map((w, idx) => (
                        <span key={idx} className="bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full font-medium">
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Ticket stub check-in QR block */}
              <div className="bg-white text-slate-900 p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-3 shadow-inner">
                {/* Simulated QR Code styled manually so it has 100% markup reliability offline */}
                <div className="w-28 h-28 bg-slate-100 rounded-lg p-2.5 border border-slate-200 flex flex-col justify-between items-center relative">
                  <div className="grid grid-cols-6 gap-0.5 w-full h-full opacity-90">
                    {[...Array(36)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full rounded-[1px] ${
                          (i % 2 === 0 && i % 3 === 0) || i < 6 || i % 7 === 0 || i > 30 ? 'bg-slate-900' : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-[11px] font-extrabold bg-white px-1.5 py-0.5 rounded text-primary tracking-tighter border border-slate-300">
                      FYC 26
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-[9px] text-[#735c00] font-bold uppercase tracking-wider flex items-center justify-center gap-1">
                    <QrCode className="w-3 h-3 text-[#735c00]" /> Front Desk Code
                  </p>
                  <p className="text-[10px] text-slate-500 font-mono mt-0.5">Scan to Check-In</p>
                </div>
              </div>
            </div>

            {/* Circular cut notches found in classic movie/event physical passes */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-50 dark:bg-[#191c1d] rounded-r-full"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-slate-50 dark:bg-[#191c1d] rounded-l-full"></div>
          </div>

          {/* Ticket Information Alerts */}
          <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-xl flex gap-3 text-sm">
            <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Next Steps for Registrants:</p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-xs text-blue-700">
                <li>Dorm check-in opens at <strong>02:00 PM on July 2</strong> behind Georgian Residence lobbies.</li>
                <li>Ensure you have your university parking token or standard digital receipts displayed.</li>
                <li>Clergy delegates should bring standard white robes for liturgical liturgies.</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-3 justify-center pt-2">
            <button
              onClick={() => {
                setFullName(registration.fullName);
                setEmail(registration.email);
                setChurch(registration.church);
                setSelectedWorkshops(registration.workshops);
                setRegistration(null);
              }}
              className="px-4 py-2 text-[#000a1e] bg-slate-100 hover:bg-slate-200 text-xs font-semibold rounded-lg transition-all"
            >
              Amend Seat Details
            </button>
            <button
              onClick={handleCancelRegistration}
              className="px-4 py-2 text-rose-700 hover:text-white border border-rose-200 hover:bg-rose-600 text-xs font-semibold rounded-lg transition-all"
            >
              Cancel Reservation
            </button>
          </div>
        </div>
      ) : (
        /* ================= REGISTRATION FORM ================= */
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-ambient space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl font-bold text-[#000a1e]">Delegate Registration Form</h2>
              <p className="text-xs text-slate-500">Fill in your information to reserve your physical accommodation and workshop spaces.</p>
            </div>
            <div className="p-3 bg-[#e9c349]/10 text-[#735c00] rounded-xl border border-[#ffe088]">
              <Ticket className="w-6 h-6" />
            </div>
          </div>

          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Thomas"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-sm p-3 bg-slate-50 border border-slate-200 focus:border-[#735c00] outline-none rounded-lg transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="rachel@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm p-3 bg-slate-50 border border-slate-200 focus:border-[#735c00] outline-none rounded-lg transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5">Your Parish / Mission Community *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. St. Gregorios Orthodox Church, Toronto"
                  value={church}
                  onChange={(e) => setChurch(e.target.value)}
                  className="w-full text-sm p-3 bg-slate-50 border border-slate-200 focus:border-[#735c00] outline-none rounded-lg transition-colors"
                />
              </div>

              {/* Workshops Tracks */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-600">Select Workshop Tracks (Optional)</label>
                <p className="text-[11px] text-slate-400">Select the sessions you wish to physically sit in. Seat capacity is bounded.</p>
                
                <div className="space-y-2 pt-1">
                  {[
                    { id: 'Track A', name: 'Track A: Fostering Vocations under Secularism', seats: '14 seats left' },
                    { id: 'Track B', name: 'Track B: Syriac Chanting Liturgical Choir', seats: '5 seats left' },
                    { id: 'Track C', name: 'Track C: Family & Youth Psychological Resilience', seats: '28 seats left' },
                  ].map((track) => (
                    <button
                      type="button"
                      key={track.id}
                      onClick={() => toggleWorkshop(track.name)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex justify-between items-center ${
                        selectedWorkshops.includes(track.name)
                          ? 'bg-[#ffe088]/10 border-[#fed65b] text-slate-900 font-medium'
                          : 'bg-transparent border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          readOnly
                          checked={selectedWorkshops.includes(track.name)}
                          className="rounded border-slate-300 text-[#735c00] focus:ring-[#735c00]"
                        />
                        <span className="text-xs">{track.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono italic">{track.seats}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Informational seats disclaimer */}
            <div className="p-3 bg-slate-50 rounded-lg flex items-center gap-2.5 text-xs text-slate-500 border border-slate-100">
              <Users className="w-4 h-4 text-slate-500" />
              <span>Over 350 delegates from Quebec, Ontario, and Alberta are already registered this month.</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4.5 bg-[#735c00] hover:bg-[#574500] disabled:bg-slate-400 text-white font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Molding Secure Token Pass...</span>
                </>
              ) : (
                <>
                  <Ticket className="w-4.5 h-4.5 text-[#ffe088]" />
                  <span>Secure My Conference Pass</span>
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
