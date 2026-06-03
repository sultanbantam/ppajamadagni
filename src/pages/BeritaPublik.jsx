import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Flame, MessageSquare, ThumbsUp, Share2, Tag, MessageCircle, Send, Link, Smile, Image as ImageIcon, Camera, Users } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function BeritaPublik() {
  const navigate = useNavigate();
  const [activeTag, setActiveTag] = useState('Semua');

  const hashtags = ['Semua', '#PendidikanDasar', '#Ekspedisi', '#BaktiSosial', '#TipsGunung'];

  const highlights = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Pendaftaran Diksar 2026 Segera Ditutup!',
      time: '2 Jam yang lalu'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1542662565-7e4fd1e54a4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Persiapan Ekspedisi Tujuh Puncak',
      time: '5 Jam yang lalu'
    }
  ];

  const initialNewsFeed = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Latihan Navigasi Darat Anggota Muda',
      summary: 'Anggota muda berhasil memetakan rute baru di kawasan Punclut.',
      author: 'Budi (Anggota Muda)',
      tag: '#LatihanFisik',
      reactions: { flame: 24, heart: 12, clap: 5 }
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Tips Memilih Sepatu Gunung yang Pas',
      summary: 'Jangan asal gaya, pastikan sepatumu nyaman dan aman untuk meminimalisir cedera.',
      author: 'Kak Dinda (Alumni)',
      tag: '#TipsGunung',
      reactions: { flame: 45, heart: 30, clap: 18 }
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Dokumentasi: Tanam 1000 Pohon',
      summary: 'Kegiatan rutin Jamadagni untuk melestarikan kawasan hulu sungai.',
      author: 'Siti (Anggota Tetap)',
      tag: '#BaktiSosial',
      reactions: { flame: 89, heart: 102, clap: 45 }
    }
  ];

  const [newsFeed, setNewsFeed] = useState(initialNewsFeed);
  const [openComments, setOpenComments] = useState({});
  const [openShares, setOpenShares] = useState({});

  const toggleComment = (id) => {
    setOpenComments(prev => ({ ...prev, [id]: !prev[id] }));
    setOpenShares(prev => ({ ...prev, [id]: false }));
  };

  const toggleShare = (id) => {
    setOpenShares(prev => ({ ...prev, [id]: !prev[id] }));
    setOpenComments(prev => ({ ...prev, [id]: false }));
  };

  const handleReaction = (newsId, type) => {
    setNewsFeed(prev => prev.map(news => {
      if (news.id === newsId) {
        return {
          ...news,
          reactions: {
            ...news.reactions,
            [type]: news.reactions[type] + 1
          }
        };
      }
      return news;
    }));
  };

  return (
    <div className="app-container" style={{ paddingBottom: 'calc(var(--spacing-xl) * 3)' }}>
      {/* Header */}
      <header style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', zIndex: 10, borderBottom: '1px solid var(--color-border)' }}>
        <button onClick={() => navigate('/siswa/non')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Berita & Artikel</h1>
      </header>

      <div style={{ padding: 'var(--spacing-md)' }}>
        
        {/* Hashtag Filters */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: 'var(--spacing-sm)', margin: '0 calc(var(--spacing-md) * -1) var(--spacing-md) calc(var(--spacing-md) * -1)', padding: '0 var(--spacing-md)', WebkitOverflowScrolling: 'touch' }}>
          {hashtags.map(tag => (
            <button 
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                background: activeTag === tag ? 'var(--color-primary)' : 'var(--color-surface)',
                color: activeTag === tag ? 'white' : 'var(--color-text)',
                border: activeTag === tag ? 'none' : '1px solid var(--color-border)',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-sm)',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Highlights (Stories Format) */}
        <section className="animate-slide-up" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)', 
            overflowX: 'auto', 
            paddingBottom: 'var(--spacing-sm)',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            margin: '0 calc(var(--spacing-md) * -1)',
            padding: '0 var(--spacing-md)'
          }}>
            {highlights.map(item => (
              <div key={item.id} style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '9/16', background: 'var(--color-surface)', minWidth: '160px', width: '160px', scrollSnapAlign: 'start', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '12px' }}>
                  <span style={{ background: 'var(--color-accent)', color: 'white', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', alignSelf: 'flex-start', marginBottom: '8px', fontWeight: 'bold' }}>Baru</span>
                  <h3 style={{ color: 'white', margin: 0, fontSize: 'var(--font-sm)', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '10px', margin: '4px 0 0 0' }}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bite-sized News Feed */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 style={{ fontSize: 'var(--font-lg)', marginBottom: 'var(--spacing-md)' }}>Berita Terkini</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {newsFeed.map((news) => (
              <div key={news.id} className="glass-panel" style={{ padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
                  <img src={news.image} alt={news.title} style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-sm)', objectFit: 'cover', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-primary)', fontSize: '10px', fontWeight: 'bold', marginBottom: '4px' }}>
                      <Tag size={12} /> {news.tag}
                    </div>
                    <h3 style={{ fontSize: 'var(--font-md)', margin: '0 0 4px 0', lineHeight: 1.2 }}>{news.title}</h3>
                    <p className="text-xs text-muted" style={{ margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {news.summary}
                    </p>
                  </div>
                </div>
                
                {/* Footer & Reactions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', paddingTop: 'var(--spacing-sm)', borderTop: '1px solid var(--color-border)' }}>
                  <span className="text-xs text-muted">Oleh: <strong>{news.author}</strong></span>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => handleReaction(news.id, 'flame')} className="hover-scale" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-muted)', fontSize: '12px', cursor: 'pointer' }}>
                      <Flame size={16} color="#f97316" /> {news.reactions.flame}
                    </button>
                    <button onClick={() => handleReaction(news.id, 'heart')} className="hover-scale" style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-muted)', fontSize: '12px', cursor: 'pointer' }}>
                      <Heart size={16} color="#ec4899" /> {news.reactions.heart}
                    </button>
                    <button className="hover-scale" onClick={() => toggleComment(news.id)} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', color: openComments[news.id] ? 'var(--color-primary)' : 'var(--color-text-muted)', fontSize: '12px', cursor: 'pointer' }}>
                      <MessageSquare size={16} /> 12
                    </button>
                    <button className="hover-scale" onClick={() => toggleShare(news.id)} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', gap: '4px', color: openShares[news.id] ? 'var(--color-secondary)' : 'var(--color-text-muted)', fontSize: '12px', cursor: 'pointer' }}>
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                {/* Expanded Sections */}
                {openComments[news.id] && (
                  <div className="animate-slide-up" style={{ marginTop: 'var(--spacing-md)', background: 'var(--color-bg)', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                      <img src="https://i.pravatar.cc/100" style={{ width: '28px', height: '28px', borderRadius: '50%' }} alt="User" />
                      <div style={{ flex: 1, position: 'relative' }}>
                         <input type="text" placeholder="Tulis komentar..." style={{ width: '100%', padding: '8px 12px', paddingRight: '60px', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: 'var(--font-sm)' }} />
                         <div style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '8px', color: 'var(--color-text-muted)' }}>
                           <Smile size={16} style={{ cursor: 'pointer' }} className="hover-scale" />
                           <ImageIcon size={16} style={{ cursor: 'pointer' }} className="hover-scale" />
                         </div>
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', gap: '8px', fontSize: 'var(--font-sm)' }}>
                       <img src="https://i.pravatar.cc/101" style={{ width: '24px', height: '24px', borderRadius: '50%' }} alt="User" />
                       <div>
                         <strong style={{ color: 'var(--color-text)' }}>Andi (Alumni)</strong> 
                         <p style={{ margin: '2px 0 4px 0', color: 'var(--color-text)' }}>Keren banget acaranya! Lanjutkan! 🔥</p>
                         <div style={{ display: 'flex', gap: '12px', color: 'var(--color-text-muted)', fontSize: '10px' }}>
                           <span style={{ cursor: 'pointer' }}>Suka (2)</span>
                           <span style={{ cursor: 'pointer' }}>Edit</span>
                           <span style={{ cursor: 'pointer', color: '#ef4444' }}>Hapus</span>
                         </div>
                       </div>
                    </div>
                  </div>
                )}

                {openShares[news.id] && (
                  <div className="animate-slide-up" style={{ marginTop: '16px', padding: '16px', background: 'var(--glass-bg)', borderRadius: '16px' }}>
                    <h4 style={{ margin: '0 0 12px 0' }}>Bagikan ke:</h4>
                    <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }} className="hide-scrollbar">
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <div className="hover-scale" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><MessageCircle size={24} /></div>
                        <span style={{ fontSize: '12px' }}>WhatsApp</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <div className="hover-scale" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#E1306C', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Camera size={24} /></div>
                        <span style={{ fontSize: '12px' }}>Instagram</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <div className="hover-scale" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#0088cc', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Send size={24} /></div>
                        <span style={{ fontSize: '12px' }}>Telegram</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <div className="hover-scale" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#1DA1F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><MessageSquare size={24} /></div>
                        <span style={{ fontSize: '12px' }}>Twitter</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <div className="hover-scale" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#1877F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}><Users size={24} /></div>
                        <span style={{ fontSize: '12px' }}>Facebook</span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <div className="hover-scale" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)' }}><Link size={24} /></div>
                        <span style={{ fontSize: '12px' }}>Salin</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
      
      <Navigation role="siswa/non" />
    </div>
  );
}
