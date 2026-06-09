import React, { useState, useEffect } from 'react';
import { MessagePost } from '../types';
import { Send, Sparkles, MessageCircle, Heart, ShieldAlert, BookOpen } from 'lucide-react';

const CARD_BG_STYLES = [
  { id: 'slate', shadow: 'shadow-[#000a1e]/10', border: 'border-slate-200', bg: 'bg-[#000a1e] text-white', label: 'Classic Navy' },
  { id: 'gold', shadow: 'shadow-[#735c00]/10', border: 'border-[#fed65b]/40', bg: 'bg-amber-50 border border-[#fed65b] text-amber-900', label: 'Divine Amber' },
  { id: 'teal', shadow: 'shadow-teal-100', border: 'border-teal-200', bg: 'bg-teal-50 border border-teal-200 text-teal-900', label: 'Eucharistic Teal' },
  { id: 'crimson', shadow: 'shadow-rose-100', border: 'border-rose-200', bg: 'bg-rose-50 border border-rose-200 text-rose-900', label: 'Gospel Coral' }
];

const PRE_SEEDED_POSTS: MessagePost[] = [
  {
    id: 'msg-1',
    author: 'Deacon Philip',
    text: 'Safe travels to all delegates commuting from Ottawa, Montreal, and Thunder Bay! Excited to assemble together under Diocese of Canada guidance.',
    emoji: '🚗',
    bgStyle: 'bg-teal-50 border border-teal-200 text-teal-900',
    timestamp: 'Today, 2:10 PM'
  },
  {
    id: 'msg-2',
    author: 'Seraphim Paul',
    text: '"The prayers of the righteous have great impact." Looking forward to the dynamic Syriac Chanting session on Friday afternoon!',
    emoji: '🎶',
    bgStyle: 'bg-amber-50 border border-[#fed65b] text-amber-900',
    timestamp: 'Today, 11:45 AM'
  },
  {
    id: 'msg-3',
    author: 'Vicar Thomas',
    text: 'A warm welcome to Georgian College. May our hearts find deep "Timeless Truths" during this weekend of sacred communion.',
    emoji: '🏠',
    bgStyle: 'bg-[#000a1e] text-white',
    timestamp: 'Yesterday'
  },
  {
    id: 'msg-4',
    author: 'Elizabeth Joy',
    text: 'To any high schoolers attending alone: look for the yellow St. Gregorios Toronto banner, and sit with us in the dining hall! 💛',
    emoji: '🤝',
    bgStyle: 'bg-rose-50 border border-rose-200 text-rose-900',
    timestamp: 'Yesterday'
  }
];

export default function YouthConnectView() {
  const [messages, setMessages] = useState<MessagePost[]>([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('🙏');
  const [selectedBgStyle, setSelectedBgStyle] = useState(CARD_BG_STYLES[0].bg);

  useEffect(() => {
    const saved = localStorage.getItem('fyc_2026_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages(PRE_SEEDED_POSTS);
      }
    } else {
      setMessages(PRE_SEEDED_POSTS);
    }
  }, []);

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newPost: MessagePost = {
      id: 'msg-' + Date.now(),
      author: author.trim(),
      text: text.trim(),
      emoji: selectedEmoji,
      bgStyle: selectedBgStyle,
      timestamp: 'Just now'
    };

    const updated = [newPost, ...messages];
    setMessages(updated);
    localStorage.setItem('fyc_2026_messages', JSON.stringify(updated));

    // Reset inputs but preserve color theme preference
    setAuthor('');
    setText('');
    setSelectedEmoji('🙏');
  };

  const handleLikePost = (id: string) => {
    // Elegant local animation state, can show visual hearts
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Left Panel: Composer */}
      <div className="md:col-span-1 space-y-6">
        <div className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#735c00]" />
            <h3 className="font-serif font-bold text-lg text-[#000a1e]">Communal Wall</h3>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Publish encouraging thoughts, biblical references, or travel queries for other youth and families arriving at Georgian College. Let us build up our sacred fellowship!
          </p>

          <form onSubmit={handlePostMessage} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Your Title / Name *</label>
              <input
                type="text"
                required
                maxLength={25}
                placeholder="e.g. Rachel T."
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 focus:border-[#735c00] outline-none rounded-lg transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Select Custom Theme</label>
              <div className="grid grid-cols-2 gap-1.5 pt-1">
                {CARD_BG_STYLES.map((style) => (
                  <button
                    type="button"
                    key={style.id}
                    onClick={() => setSelectedBgStyle(style.bg)}
                    className={`text-[10px] p-2 leading-tight text-center rounded-lg border-2 transition-all font-medium ${
                      selectedBgStyle === style.bg
                        ? 'border-[#735c00] bg-white ring-1 ring-[#fed65b]'
                        : 'border-slate-100 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1">Greeting Icon</label>
              <div className="flex gap-2 justify-between p-1.5 bg-slate-50 border border-slate-200 rounded-lg">
                {['🙏', '🕊️', '🎶', '🏠', '🚗', '💡', '📖'].map((emoji) => (
                  <button
                    type="button"
                    key={emoji}
                    onClick={() => setSelectedEmoji(emoji)}
                    className={`p-1.5 hover:bg-white rounded-md text-sm transition-all focus:scale-110 ${
                      selectedEmoji === emoji ? 'bg-white shadow-xs scale-110 border border-slate-100' : 'opacity-60'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-1 font-serif">Encouraging Note *</label>
              <textarea
                required
                maxLength={180}
                rows={3}
                placeholder="Say hello, share a scripture verse or invite parish members to coffee..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 focus:border-[#735c00] outline-none rounded-lg transition-colors resize-none"
              />
              <span className="text-[10px] text-slate-400 text-right block mt-0.5">{180 - text.length} chars remaining</span>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#000a1e] hover:bg-[#002147] text-white text-xs font-semibold rounded-lg transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#ffe088]" />
              <span>Project My Card</span>
            </button>
          </form>

          <div className="p-3 bg-rose-50/50 border border-rose-100 rounded-xl flex items-start gap-2 text-[11px] text-rose-800">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
            <span>Post and reviews are moderated. Please respect our liturgical fellowship guidelines.</span>
          </div>
        </div>
      </div>

      {/* Right Panel: Scrollable Grid of Posted Cards */}
      <div className="md:col-span-2 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <h3 className="font-serif font-bold text-lg text-[#000a1e] flex items-center gap-2">
            <MessageCircle className="w-4.5 h-4.5 text-[#735c00]" />
            Active Dialogue Notes ({messages.length})
          </h3>
          <span className="text-[10px] text-emerald-600 font-mono flex items-center gap-1 font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Online Feed
          </span>
        </div>

        {messages.length === 0 ? (
          <div className="py-20 text-center text-slate-400 space-y-2 bg-slate-50 rounded-2xl border border-slate-100">
            <BookOpen className="w-10 h-10 mx-auto opacity-50" />
            <p className="text-sm font-serif">Be the first to share an encouraging note!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {messages.map((post) => (
              <div
                key={post.id}
                className={`p-5 rounded-2xl shadow-xs transition-all relative group flex flex-col justify-between ${post.bgStyle}`}
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-2xl">{post.emoji}</span>
                    <span className="text-[10px] opacity-60 font-mono font-medium">{post.timestamp}</span>
                  </div>
                  <p className="text-xs leading-relaxed font-serif font-medium">{post.text}</p>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-black/5 mt-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider block opacity-95">By {post.author}</span>
                  <button 
                    onClick={() => handleLikePost(post.id)}
                    className="flex items-center gap-1 text-[10px] opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>Heart</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}
