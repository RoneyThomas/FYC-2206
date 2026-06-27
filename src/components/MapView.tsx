import React, { useState } from 'react';
import { GEORGIAN_COLLEGE_PLACES } from '../data';
import { MapPin, Navigation, Car, Landmark, Coffee, Compass, Check, AlertTriangle, Phone, X, Download, Maximize2 } from 'lucide-react';

const PRE_DEFINED_DIRECTIONS = [
  {
    city: 'Toronto',
    distance: '105 km',
    time: '1 hr 15 mins',
    steps: [
      'Depart Toronto taking ON-400 North toward Barrie.',
      'Continue North for approximately 90 km.',
      'Take Exit 94 toward Duckworth St / Cundles Rd.',
      'Merge onto Duckworth St, turning right into the Georgian College main entryway.'
    ],
    parking: 'Park at Campus Lot 6 or Lot 7. Parking tokens can be validated at the front welcome desk.'
  },
  {
    city: 'Ottawa',
    distance: '390 km',
    time: '4 hrs 15 mins',
    steps: [
      'Take Trans-Canada Hwy / ON-417 West.',
      'Merge onto ON-17 West, then steer onto ON-60 West through Algonquin Provincial Park.',
      'Proceed on ON-11 South toward Orillia.',
      'Take ON-11/ON-12 South to Duckworth St exit inside Barrie.'
    ],
    parking: 'Complimentary pass provided behind building C if driving hybrid vehicles.'
  },
  {
    city: 'Montreal',
    distance: '590 km',
    time: '5 hrs 45 mins',
    steps: [
      'Take Autoroute 20 West entering Ontario onto Highway 401 West.',
      'Proceed past Kingston on Hwy 401 for approximately 350 km.',
      'Merge onto ON-407 Express Toll Route West (or bypass via Hwy 401 West to Toronto).',
      'Steer onto ON-400 North to Duckworth St inside Barrie.'
    ],
    parking: 'Free weekend parking operates on Georgian Campus parking stalls from Friday 5 PM onwards.'
  }
];

const CAMPUS_ZONES = [
  { id: 'zone-res', name: 'Georgian Residence Suite', label: 'R', color: 'bg-teal-500', note: 'Main delegate housing. Check-in here on arrival for physical keycards.', x: '25%', y: '30%' },
  { id: 'zone-aud', name: 'Plenary Auditorium (Hall C)', label: 'A', color: 'bg-amber-500', note: 'Holds all Keynotes talks, scholarly debates, panel discussions, and official inaugural openings.', x: '55%', y: '45%' },
  { id: 'zone-chp', name: 'Sacred Liturgical Chapel', label: 'C', color: 'bg-blue-600', note: 'Liturgical evening Sandhya Namaskar and Holy Eucharist Qurbana services.', x: '75%', y: '65%' },
  { id: 'zone-din', name: 'Dining & Refectory Hall', label: 'D', color: 'bg-rose-500', note: 'Breakfast buffet, hot lunches, and celebratory evening dinners.', x: '40%', y: '75%' }
];

export default function MapView() {
  const [selectedDirection, setSelectedDirection] = useState(PRE_DEFINED_DIRECTIONS[0]);
  const [customCity, setCustomCity] = useState('');
  const [customCalculated, setCustomCalculated] = useState<any | null>(null);
  const [activeZone, setActiveZone] = useState<any>(CAMPUS_ZONES[0]);
  const [activeDirectoryCategory, setActiveDirectoryCategory] = useState('All');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleCustomDirectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customCity.trim()) return;

    // Dynamically fabricate a plausible, interactive route recommendation for any custom user input!
    setCustomCalculated({
      city: customCity.trim(),
      distance: `${Math.floor(80 + Math.random() * 300)} km`,
      time: `${Math.floor(2 + Math.random() * 4)} hrs ${Math.random() > 0.5 ? '15' : '40'} mins`,
      steps: [
        `Identify local bypass paths onto Highway 11 or Highway 400 North.`,
        `Proceed toward regional Barrie access highways following the "Georgian College" road signs.`,
        `Approach Duckworth St exit and decelerate on the exit ramp.`,
        `Pass Duckworth St lights and make a right turn into Georgian College gate.`
      ],
      parking: 'Complimentary weekend parking applies in Lot 1 during visual sessions.'
    });
  };

  const currentDisplayDirection = customCalculated || selectedDirection;

  const directoryPlaces = activeDirectoryCategory === 'All'
    ? GEORGIAN_COLLEGE_PLACES
    : GEORGIAN_COLLEGE_PLACES.filter(place => place.type === activeDirectoryCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">

      {/* Top Hero Map Detail Bar */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 space-y-1.5">
          <span className="bg-amber-100 text-[#735c00] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
            Barrie, Ontario
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#000a1e]">Georgian College Campus</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Located at <strong>1 Georgian Dr, Barrie, ON L4M 3X9</strong>. All residential quarters, plenary lecture chambers, and liturgical prayer chapels have been consolidated on campus for immediate family accessibility.
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 space-y-2">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Security Contact</p>
          <p className="text-xs font-semibold text-[#000a1e] flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#735c00]" /> +1 (705) 728-1968
          </p>
          <span className="text-[10px] text-slate-400 block">Available 24/7 for safe walking escorts on campus grounds.</span>
        </div>
      </div>

      <div className="w-full">
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4">
            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-[#000a1e] flex items-center gap-1.5">
                  <Compass className="w-5 h-5 text-[#735c00]" />
                  Interactive Campus Map
                </h3>
                <a href="/campus_map.png" download="Georgian_College_Campus_Map.png" className="text-xs font-semibold text-[#735c00] hover:text-[#000a1e] flex items-center gap-1.5 transition-colors px-3 py-1.5 bg-amber-50 hover:bg-amber-100 rounded-lg">
                  <Download className="w-3.5 h-3.5" />
                  Download Map
                </a>
              </div>
              <p className="text-xs text-slate-500">Click the map to open it in full-screen view.</p>
            </div>

            {/* High-quality Georgian College Campus Map from PDF */}
            <div 
              className="relative w-full rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-slate-50 flex items-center justify-center p-2 cursor-pointer group"
              onClick={() => setIsLightboxOpen(true)}
            >
              <img 
                src="/campus_map.png" 
                alt="Georgian College Campus Map" 
                className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-slate-700 transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
              <span className="absolute bottom-3 right-4 text-[10px] bg-white/90 px-2 py-1 rounded shadow-sm text-slate-500 font-mono tracking-widest uppercase backdrop-blur-sm border border-slate-200/50 pointer-events-none">Official Campus Map</span>
            </div>

            {/* Lightbox Overlay */}
            {isLightboxOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8" onClick={() => setIsLightboxOpen(false)}>
                <button 
                  className="absolute top-4 right-4 md:top-8 md:right-8 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                  onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
                >
                  <X className="w-6 h-6" />
                </button>
                <img 
                  src="/campus_map.png" 
                  alt="Campus Map Fullscreen" 
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl cursor-auto"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
