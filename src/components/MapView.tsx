import React, { useState, useRef, useCallback } from 'react';
import { SESSIONS, GEORGIAN_COLLEGE_PLACES } from '../data';
import {
  Compass, Phone, X, Download, Maximize2,
  ZoomIn, ZoomOut, RotateCcw, Calendar, MapPin,
  ChevronRight, Clock, Info, ExternalLink,
} from 'lucide-react';

export type Building = {
  id: string;
  name: string;
  fullName: string;
  x: number; // % from left of image
  y: number; // % from top of image
  isVenue: boolean;
  desc: string;
  maplink: string;
  address: string;
};

export const BUILDINGS: Building[] = [
  {
    id: 'P', name: 'Parking', fullName: 'Student Residence Parking',
    x: 70, y: 22, isVenue: true,
    desc: 'Lot adjacent to RCC',
    maplink: 'https://maps.app.goo.gl/hUS8n5g1CueM25Bv9',
    address: 'Lot adjacent to RCC'
  },
  {
    id: 'N', name: 'ABSC Event Space', fullName: 'Peter B. Moore Centre (Building N)',
    x: 56, y: 18, isVenue: true,
    desc: 'Main conference hall. Hosts the inaugural ceremony, all meals (breakfast, lunch, dinner), evening prayers, cultural programs, devotional addresses, and Holy Qurbana.',
    maplink: 'https://maps.app.goo.gl/76Xk9GQkyHKGknBJ6',
    address: 'Building N, 3rd Floor, Room N302B'
  },
  {
    id: 'K', name: 'Alumni Hall', fullName: 'University Partnership Centre (Building K)',
    x: 34, y: 41, isVenue: true,
    desc: 'Keynote addresses, plenary sessions, Q&A panels, group discussions, and spiritual organization meetings. Classrooms K217 & K224 are also here.',
    maplink: 'https://maps.app.goo.gl/XD6wmxzKyY4EHiNX9',
    address: 'Building K, Alumni Hall'
  },
  {
    id: 'B', name: 'Residence & Conference Center (RCC)', fullName: 'Student Residence (RCC)',
    x: 68, y: 26, isVenue: true,
    desc: 'Accommodation for conference delegates',
    maplink: 'https://maps.app.goo.gl/BUbEF9oXbdJRj2c98',
    address: '101 Georgian Dr, Barrie, ON'
  },
];

export const VENUE_SESSION_KEYWORDS: Record<string, string[]> = {
  N: ['Building N', 'ABSC'],
  K: ['Building K', 'Alumni Hall', 'K217', 'K224'],
  B: ['Student Residence (RCC)', 'Residence & Conference Center (RCC)', 'RCC'],
};

const DAY_LABELS: Record<number, string> = { 1: 'Thu · Jul 2', 2: 'Fri · Jul 3', 3: 'Sat · Jul 4' };

const CATEGORY_COLORS: Record<string, string> = {
  Liturgy: 'bg-blue-100 text-blue-700 border-blue-200',
  General: 'bg-slate-100 text-slate-600 border-slate-200',
  Social: 'bg-amber-100 text-amber-700 border-amber-200',
  Youth: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  Workshop: 'bg-purple-100 text-purple-700 border-purple-200',
};

export default function MapView() {
  const [selectedBuilding, setSelectedBuilding] = useState<Building>(BUILDINGS[0]);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragOrigin = useRef({ mouseX: 0, mouseY: 0, panX: 0, panY: 0 });
  const lastTouchDist = useRef(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const clampPan = useCallback((px: number, py: number, z: number) => {
    // Unbounded free panning, but we keep the signature for consistency
    return { x: px, y: py };
  }, []);

  const handleZoomIn = () => {
    const z = Math.min(zoom + 0.5, 4);
    setZoom(z);
    setPan(p => clampPan(p.x, p.y, z));
  };
  const handleZoomOut = () => {
    const z = Math.max(zoom - 0.5, 1);
    setZoom(z);
    setPan(p => clampPan(p.x, p.y, z));
  };
  const handleReset = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('[data-marker]')) return;
    setIsDragging(true);
    dragOrigin.current = { mouseX: e.clientX, mouseY: e.clientY, panX: pan.x, panY: pan.y };
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragOrigin.current.mouseX;
    const dy = e.clientY - dragOrigin.current.mouseY;
    setPan(clampPan(dragOrigin.current.panX + dx, dragOrigin.current.panY + dy, zoom));
  };
  const handleMouseUp = () => setIsDragging(false);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const z = Math.max(1, Math.min(4, zoom + (e.deltaY > 0 ? -0.25 : 0.25)));
    setZoom(z);
    setPan(p => clampPan(p.x, p.y, z));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('[data-marker]')) return;
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragOrigin.current = { mouseX: e.touches[0].clientX, mouseY: e.touches[0].clientY, panX: pan.x, panY: pan.y };
    } else if (e.touches.length === 2) {
      lastTouchDist.current = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && isDragging) {
      e.preventDefault();
      const dx = e.touches[0].clientX - dragOrigin.current.mouseX;
      const dy = e.touches[0].clientY - dragOrigin.current.mouseY;
      setPan(clampPan(dragOrigin.current.panX + dx, dragOrigin.current.panY + dy, zoom));
    } else if (e.touches.length === 2) {
      e.preventDefault();
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY,
      );
      const z = Math.max(1, Math.min(4, zoom + (d - lastTouchDist.current) * 0.008));
      setZoom(z);
      lastTouchDist.current = d;
    }
  };
  const handleTouchEnd = () => setIsDragging(false);

  const getSessionsForBuilding = (buildingId: string) => {
    const keywords = VENUE_SESSION_KEYWORDS[buildingId] ?? [];
    return SESSIONS.filter(s => keywords.some(kw => s.location.includes(kw)));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">

      {/* ── Header ─────────────────────────────────────── */}
      <div className="hidden lg:block bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm">
        <div className="space-y-1.5">
          <span className="bg-amber-100 text-[#735c00] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
            Barrie, Ontario
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#000a1e]">Georgian College Campus</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>101 Georgian Dr, Barrie, ON L4M 3X9</strong>
          </p>
        </div>
      </div>

      {/* ── Map + Panel ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-start">

        {/* Map */}
        <div className="lg:col-span-3 order-2 lg:order-1 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white">
            <h3 className="font-serif text-sm font-bold text-[#000a1e] flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#735c00]" /> Interactive Campus Map
            </h3>
            <div className="flex items-center gap-1.5">
              <button onClick={handleZoomOut} title="Zoom out" className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button onClick={handleZoomIn} title="Zoom in" className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button onClick={handleReset} title="Reset view" className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer">
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <a
                href="/campus_map.png"
                download="Georgian_College_Campus_Map.png"
                title="Download map"
                className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-[#735c00] transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
              </a>
              <button onClick={() => setIsLightboxOpen(true)} title="Full screen" className="p-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-[#735c00] transition-colors cursor-pointer">
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Zoomable map stage */}
          <div
            className={`relative overflow-hidden bg-slate-100 select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ height: 380, touchAction: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div
              style={{
                transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                transformOrigin: 'center center',
                transition: isDragging ? 'none' : 'transform 0.18s ease-out',
                position: 'relative',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Base image fills the stage */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/campus_map.png"
                  alt="Georgian College Campus Map"
                  draggable={false}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="px-4 py-2.5 border-t border-slate-100 flex items-center gap-4 text-[10px] text-slate-500 bg-white">
            <span className="ml-auto text-[9px] text-slate-300 font-mono hidden sm:block">Scroll · zoom · drag · pan</span>
          </div>
        </div>

        {/* ── Right Info Panel ────────────────────────── */}
        <div className="lg:col-span-2 order-1 lg:order-2 space-y-3">

          {/* Selected building card */}
          {selectedBuilding && (
            <div className="hidden lg:block bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className={`px-4 py-4 ${selectedBuilding.isVenue ? 'bg-[#000a1e]' : 'bg-slate-700'}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${selectedBuilding.isVenue ? 'text-[#ffe088]' : 'text-slate-300'}`}>
                      {selectedBuilding.isVenue ? 'Conference Venue' : 'Campus Building'}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white leading-tight">{selectedBuilding.name}</h4>
                    <p className="text-[10px] text-slate-400 leading-tight">{selectedBuilding.fullName}</p>
                  </div>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-extrabold shrink-0 border
                    ${selectedBuilding.isVenue ? 'bg-[#fed65b] text-[#735c00] border-[#fed65b]' : 'bg-slate-600 text-white border-slate-500'}`}>
                    {selectedBuilding.id}
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-4 max-h-72 overflow-y-auto">
                <p className="text-xs text-slate-600 leading-relaxed">{selectedBuilding.desc}</p>
                {selectedBuilding.maplink && (
                  <div>
                    <a href={selectedBuilding.maplink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-semibold hover:text-blue-900 transition-colors group">
                      <MapPin className="w-3.5 h-3.5 text-blue-600/70 group-hover:text-blue-900" />
                      Open in Google Maps
                      <ExternalLink className="w-3 h-3 text-blue-600/70 group-hover:text-blue-900" />
                    </a>
                  </div>
                )}

                {/* Sessions for venue buildings */}
                {selectedBuilding.isVenue && (() => {
                  const sessions = getSessionsForBuilding(selectedBuilding.id);
                  if (!sessions.length) return null;
                  const grouped = sessions.reduce<Record<number, typeof sessions>>((acc, s) => {
                    (acc[s.day] ??= []).push(s);
                    return acc;
                  }, {});

                  return (
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5 pt-1 border-t border-slate-100">
                        <Calendar className="w-3 h-3" />
                        Sessions Here ({sessions.length})
                      </h5>
                      {Object.entries(grouped).map(([day, daySessions]) => (
                        <div key={day} className="space-y-1.5">
                          <p className="text-[10px] font-bold text-[#735c00] uppercase tracking-wider">
                            {DAY_LABELS[parseInt(day)]}
                          </p>
                          {daySessions.map(s => (
                            <div key={s.id} className="flex items-start gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border shrink-0 mt-0.5 ${CATEGORY_COLORS[s.category] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                                {s.category}
                              </span>
                              <div className="min-w-0">
                                <p className="text-[11px] font-semibold text-slate-800 leading-tight">{s.title}</p>
                                <p className="text-[9px] text-slate-400 mt-0.5 flex items-center gap-1">
                                  <Clock className="w-2.5 h-2.5 shrink-0" /> {s.time}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* Venue quick-select chips */}
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Conference Venues</p>
            {BUILDINGS.filter(b => b.isVenue).map(b => (
              <React.Fragment key={b.id}>
                {/* Desktop: Select Building */}
                <button
                  onClick={() => setSelectedBuilding(b)}
                  className={`hidden lg:flex w-full text-left p-3 rounded-xl border transition-all items-center gap-3 cursor-pointer ${selectedBuilding?.id === b.id
                    ? 'bg-[#ffe088]/15 border-[#fed65b] text-[#735c00]'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-[#fed65b]/50 hover:bg-slate-50'
                    }`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 ${selectedBuilding?.id === b.id ? 'bg-[#fed65b] text-[#735c00]' : 'bg-[#000a1e] text-[#ffe088]'
                    }`}>
                    {b.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold leading-tight">{b.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{b.fullName}</p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-40" />
                </button>

                {/* Mobile: Open Map Link */}
                <a
                  href={b.maplink}
                  target="_blank"
                  rel="noreferrer"
                  className="lg:hidden flex w-full text-left p-3 rounded-xl border transition-all items-center gap-3 cursor-pointer bg-white border-slate-200 text-slate-700 hover:border-[#fed65b]/50 hover:bg-slate-50"
                >
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-extrabold shrink-0 bg-[#000a1e] text-[#ffe088]">
                    {b.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold leading-tight">{b.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{b.fullName}</p>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-40" />
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* ── Conference Venues ──────────────────────────
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mt-8 mb-8">
        <div className="px-4 py-3 border-b border-slate-100 flex flex-wrap items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#735c00]" />
            <h3 className="font-serif text-sm font-bold text-[#000a1e]">Conference Venues</h3>
          </div>
          <span className="text-[10px] text-slate-400 hidden sm:block">Tap to open driving directions</span>
        </div>

        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {BUILDINGS.map((building) => (
            <a key={building.id} href={building.maplink} target="_blank" rel="noreferrer" className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex items-center justify-between hover:border-[#fed65b]/50 hover:bg-[#fed65b]/5 transition-colors group">
              <div className="space-y-1.5">
                <p className="text-xs font-bold text-[#000a1e] leading-tight group-hover:text-[#735c00] transition-colors">{building.name}</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">{building.address}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-[#735c00] shrink-0 transition-colors" />
            </a>
          ))}
        </div>
      </div> */}

      {/* ── Nearby Spots ──────────────────────────────── */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#735c00]" />
          <h3 className="font-serif text-sm font-bold text-[#000a1e]">Nearby Spots</h3>
        </div>
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {GEORGIAN_COLLEGE_PLACES.map((place, i) => {
            const typeColors: Record<string, string> = {
              Accommodation: 'bg-teal-100 text-teal-700 border-teal-200',
              Dining: 'bg-orange-100 text-orange-700 border-orange-200',
              Café: 'bg-amber-100 text-amber-700 border-amber-200',
              Sightseeing: 'bg-blue-100 text-blue-700 border-blue-200',
            };
            return (
              <a key={i} href={(place as any).maplink} target="_blank" rel="noreferrer" className="block bg-slate-50 border border-slate-100 rounded-xl p-3.5 space-y-2 hover:border-[#fed65b]/50 hover:bg-[#fed65b]/5 transition-colors group">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-[#000a1e] leading-tight group-hover:text-[#735c00] transition-colors">{place.name}</p>
                    <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-[#735c00] transition-colors" />
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border shrink-0 ${typeColors[place.type] ?? 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                    {place.type}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{place.desc}</p>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="text-[10px] text-slate-400 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" /> {place.distance}
                  </span>
                  {place.address && (
                    <span className="text-[10px] text-slate-400 flex items-center gap-1 truncate max-w-[120px]" title={place.address}>
                      {place.address}
                    </span>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── RCC Residence note ────────────────────────── */}
      {/* <div className="bg-[#000a1e] text-white rounded-2xl p-5 flex items-start gap-4 border border-[#fed65b]/20">
        <div className="p-2.5 bg-[#fed65b]/15 text-[#ffe088] rounded-xl shrink-0">
          <Info className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif text-sm font-bold text-[#ffe088]">Residence & Conference Centre (RCC)</h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Delegate housing is at the <strong className="text-white">Georgian College Residence & Conference Centre (RCC)</strong> on campus. Check in at the RCC lobby on arrival (Jul 2, 3:00–5:00 PM) to collect physical keycards. Morning and night prayers are held in the RCC Lounges.
          </p>
          <p className="text-[10px] text-slate-400 mt-1">
            Check-out by <strong className="text-slate-300">Sat Jul 4 · 12:00 PM</strong>. Store luggage in your car or the RCC lounge until after the closing lunch.
          </p>
        </div>
      </div> */}

      {/* ── Fullscreen lightbox ───────────────────────── */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-4 right-4 p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setIsLightboxOpen(false); }}
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src="/campus_map.png"
            alt="Campus Map Fullscreen"
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl cursor-auto"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
