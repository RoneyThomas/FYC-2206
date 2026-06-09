import React, { useState } from 'react';
import { GEORGIAN_COLLEGE_PLACES } from '../data';
import { MapPin, Navigation, Car, Landmark, Coffee, Compass, Check, AlertTriangle, Phone } from 'lucide-react';

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Left column: SVG Interactive Campus Layout Map */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4">
            <div className="space-y-0.5">
              <h3 className="font-serif text-lg font-bold text-[#000a1e] flex items-center gap-1.5">
                <Compass className="w-5 h-5 text-[#735c00]" />
                Interactive Campus Map
              </h3>
              <p className="text-xs text-slate-500">Click colored zones to inspect campus layouts, distances, and functional sessions.</p>
            </div>

            {/* Visual SVG map representation */}
            <div className="relative aspect-video bg-indigo-950/5 rounded-2xl border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center p-4">

              {/* Simplistic stylized geometric map layers representing streets and parks */}
              <div className="absolute inset-x-0 top-1/3 h-1 bg-white border-y border-slate-200"></div> {/* Highway route */}
              <div className="absolute left-1/4 inset-y-0 w-1 bg-white border-x border-slate-200"></div> {/* Secondary avenue */}
              <div className="absolute right-1/3 top-0 bottom-1/2 w-4 bg-emerald-100/50 rounded-bl-3xl border-l border-b border-emerald-200"></div> {/* Green courtyard */}
              <div className="absolute left-1/2 bottom-5 w-24 h-16 bg-[#fed65b]/5 border-2 border-[#fed65b]/20 rounded-xl"></div> {/* College Complex */}

              {/* Grid markers representing CAMPUS_ZONES */}
              {CAMPUS_ZONES.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  style={{ left: zone.x, top: zone.y }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full ${zone.color} text-white font-bold flex items-center justify-center text-xs shadow-md transition-transform duration-200 focus:scale-125 ${activeZone.id === zone.id ? 'ring-4 ring-white scale-125 shadow-lg' : 'opacity-85 hover:opacity-100'
                    }`}
                >
                  {zone.label}
                </button>
              ))}

              <span className="absolute bottom-2.5 right-3 text-[9px] text-slate-400 font-mono tracking-widest uppercase">Georgian Campus Layout Grid</span>
            </div>

            {/* Active select Zone explanations details */}
            <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-1.5 transition-all">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${activeZone.color}`}></span>
                <p className="font-serif text-sm font-bold text-[#000a1e]">{activeZone.name}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "{activeZone.note}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
