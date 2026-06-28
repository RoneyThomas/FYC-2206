import React, { useState } from 'react';
import { SPEAKERS } from '../data';
import { Speaker } from '../types';
import { X, Award, MapPin } from 'lucide-react';

interface SpeakersBiosModalProps {
  onClose?: () => void;
  isOpenInline?: boolean;
}

export default function SpeakersBiosModal({ onClose, isOpenInline = false }: SpeakersBiosModalProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(SPEAKERS[0]);


  return (
    <div className={`w-full ${isOpenInline ? 'py-2' : 'bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto'}`}>
      {/* Optional Close Button for Popovers */}
      {!isOpenInline && onClose && (
        <div className="flex justify-between items-center p-4 bg-primary text-on-primary">
          <h3 className="font-serif font-semibold text-lg text-secondary-fixed">Speaker Ensembles</h3>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {/* Left Side: Speaker selection list */}
        <div className="bg-slate-50 p-4 space-y-3 md:col-span-1">
          <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-2">Conference Scholars</h4>
          <div className="space-y-2">
            {SPEAKERS.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setSelectedSpeaker(s);
                }}
                className={`w-full text-left p-3 rounded-xl transition-all flex items-center gap-3 border ${
                  selectedSpeaker?.id === s.id
                    ? 'bg-white border-secondary-container shadow-sm text-primary font-medium'
                    : 'bg-transparent border-transparent text-slate-600 hover:bg-slate-100'
                }`}
              >
                <img
                  src={s.imageUrl}
                  alt={s.name}
                  referrerPolicy="no-referrer"
                  className={`w-10 h-10 rounded-full object-cover border-2 ${
                    selectedSpeaker?.id === s.id ? 'border-[#735c00]' : 'border-transparent'
                  }`}
                />
                <div className="min-w-0">
                  <p className="font-serif text-sm truncate leading-tight">{s.name.replace('Rev. Fr. Dr. ', '').replace('Very. Rev. Dr. ', '')}</p>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">{s.role}</p>
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-3 bg-[#ffe088]/15 border border-[#fed65b]/40 rounded-xl mt-4">
            <p className="text-xs text-[#735c00] leading-relaxed">
              <strong>Plenary Forums:</strong> All our speakers hold doctorates in theological or pastoral disciplines, combining ancient Orthodox dogma with active community service.
            </p>
          </div>
        </div>

        {/* Right Side: Detailed Speaker Bio & Interaction form */}
        <div className="p-6 md:col-span-2 bg-white space-y-6">
          {selectedSpeaker ? (
            <>
              {/* Profile Card Header */}
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                <img
                  src={selectedSpeaker.imageUrl}
                  alt={selectedSpeaker.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#fed65b] shadow-ambient"
                />
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] uppercase tracking-wide font-semibold rounded-md">
                    <Award className="w-3 h-3 text-[#735c00]" /> {selectedSpeaker.role}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#000a1e]">{selectedSpeaker.name}</h3>
                  <p className="text-sm font-semibold text-[#735c00]">{selectedSpeaker.diocese}</p>
                  <div className="flex items-center gap-1 justify-center sm:justify-start text-xs text-slate-500">
                    <MapPin className="w-3 h-3" /> Malankara Orthodox Syrian Church
                  </div>
                </div>
              </div>

              {/* Bio description */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Theological Bio</h4>
                <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 italic">
                  "{selectedSpeaker.bio}"
                </p>
              </div>


            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <p>Select a scholar from the list to view their bio and details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
