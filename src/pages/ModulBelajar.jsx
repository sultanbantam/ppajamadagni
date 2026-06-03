import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, PlayCircle, BookOpen, Award, CheckCircle2, ChevronRight, Video, FileText, HelpCircle } from 'lucide-react';

export default function ModulBelajar() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const role = localStorage.getItem('userRole') || 'siswa/muda';

  const categories = ['Semua', 'Survival', 'Navigasi', 'Lingkungan'];

  const modules = [
    {
      id: 1,
      title: 'Dasar-Dasar Survival Hutan',
      category: 'Survival',
      type: 'video',
      duration: '3 Menit',
      points: 50,
      completed: true,
      image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=400&q=80',
      desc: 'Pelajari tiga aturan emas bertahan hidup di alam liar dalam video singkat ini.'
    },
    {
      id: 2,
      title: 'Membaca Kompas & Peta',
      category: 'Navigasi',
      type: 'video',
      duration: '4 Menit',
      points: 50,
      completed: false,
      image: 'https://images.unsplash.com/photo-1526778548025-fa2fbf84cf0c?auto=format&fit=crop&w=400&q=80',
      desc: 'Cara cepat menentukan arah Utara dan membaca kontur peta topografi.'
    },
    {
      id: 3,
      title: 'Kuis Interaktif: Flora Gunung',
      category: 'Lingkungan',
      type: 'quiz',
      questions: 5,
      points: 100,
      completed: false,
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80',
      desc: 'Uji pengetahuanmu tentang tanaman obat dan tanaman beracun di hutan Jawa Barat.'
    }
  ];

  const filteredModules = activeCategory === 'Semua' ? modules : modules.filter(m => m.category === activeCategory);

  const handleOpenModule = (mod) => {
    if (mod.type === 'video') {
      setActiveVideo(mod);
      setShowVideoModal(true);
    } else {
      alert(`Membuka kuis interaktif: ${mod.title}`);
    }
  };

  return (
    <div className="app-container" style={{ paddingBottom: 'calc(var(--spacing-xl) * 3)' }}>
      {/* Header */}
      <header style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', zIndex: 10, borderBottom: '1px solid var(--color-border)' }}>
        <button onClick={() => navigate(`/${role}`)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 'var(--font-lg)', margin: 0, flex: 1 }}>Modul Belajar</h1>
      </header>

      <div style={{ padding: 'var(--spacing-md)' }}>
        
        {/* Banner Motivasi */}
        <div className="glass-panel animate-slide-up" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', background: 'linear-gradient(135deg, var(--color-secondary), #3b82f6)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
          <BookOpen size={40} opacity={0.9} />
          <div>
            <h3 style={{ margin: 0, fontSize: 'var(--font-md)' }}>E-Learning Jamadagni</h3>
            <p className="text-sm" style={{ opacity: 0.9, marginTop: '4px', margin: '4px 0 0 0' }}>Tonton video dan selesaikan kuis untuk menaikkan levelmu!</p>
          </div>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: 'var(--spacing-md)' }} className="hide-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="hover-scale"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                whiteSpace: 'nowrap',
                fontWeight: 600,
                fontSize: 'var(--font-sm)',
                cursor: 'pointer',
                background: activeCategory === cat ? 'var(--color-primary)' : 'var(--color-surface)',
                color: activeCategory === cat ? 'white' : 'var(--color-text)',
                border: activeCategory === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Module List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          {filteredModules.map((mod, idx) => (
            <div key={mod.id} onClick={() => handleOpenModule(mod)} className="glass-panel hover-scale animate-slide-up" style={{ display: 'flex', overflow: 'hidden', cursor: 'pointer', animationDelay: `${idx * 0.1}s`, border: mod.completed ? '1px solid var(--color-primary)' : '1px solid var(--color-border)' }}>
              
              {/* Thumbnail */}
              <div style={{ width: '120px', position: 'relative', background: 'var(--color-surface)' }}>
                <img src={mod.image} alt={mod.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.3)' }}>
                  {mod.type === 'video' ? <PlayCircle size={32} color="white" /> : <HelpCircle size={32} color="white" />}
                </div>
                {/* Durasi / Info */}
                <div style={{ position: 'absolute', bottom: '4px', right: '4px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold' }}>
                  {mod.type === 'video' ? mod.duration : `${mod.questions} Soal`}
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--color-secondary)', textTransform: 'uppercase' }}>{mod.category}</span>
                    {mod.completed && <CheckCircle2 size={16} color="var(--color-primary)" />}
                  </div>
                  <h4 style={{ margin: '4px 0', fontSize: 'var(--font-md)', lineHeight: 1.2 }}>{mod.title}</h4>
                  <p className="text-xs text-muted" style={{ margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{mod.desc}</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#eab308', fontSize: '12px', fontWeight: 'bold' }}>
                    <Award size={14} /> +{mod.points} Poin
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-muted)', fontSize: '12px' }}>
                    <FileText size={14} /> PDF Tersedia
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal (Simulating Video Playback) */}
      {showVideoModal && activeVideo && (
        <div style={{ position: 'fixed', inset: 0, background: 'black', zIndex: 100, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), transparent)' }}>
            <button onClick={() => setShowVideoModal(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: 'white', padding: '8px', borderRadius: '50%', cursor: 'pointer', display: 'flex' }}>
              <ArrowLeft size={24} />
            </button>
            <span style={{ color: 'white', fontSize: '12px', background: 'rgba(255,255,255,0.2)', padding: '4px 8px', borderRadius: '4px' }}>Hemat Data Aktif</span>
          </div>
          
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
             <img src={activeVideo.image} alt="Video Player" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0.6)' }} />
             <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
               <PlayCircle size={64} color="white" style={{ opacity: 0.8 }} />
               <p style={{ color: 'white', marginTop: '16px', fontWeight: 'bold' }}>Memutar Video: {activeVideo.title}</p>
             </div>
          </div>

          <div className="animate-slide-up" style={{ padding: 'var(--spacing-lg)', background: 'var(--color-bg)', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)' }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: 'var(--font-lg)' }}>{activeVideo.title}</h3>
            <p className="text-sm text-muted" style={{ margin: '0 0 16px 0' }}>{activeVideo.desc}</p>
            
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
              <button onClick={() => alert('Mengunduh rangkuman materi PDF...')} className="hover-scale" style={{ flex: 1, background: 'var(--color-surface)', color: 'var(--color-text)', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontWeight: 'bold', fontSize: 'var(--font-sm)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <FileText size={18} /> Unduh Materi (PDF)
              </button>
            </div>

            <button onClick={() => { alert('Berhasil diselesaikan! Poin bertambah.'); setShowVideoModal(false); }} className="hover-scale" style={{ width: '100%', background: 'var(--color-primary)', color: 'white', padding: '16px', borderRadius: 'var(--radius-full)', border: 'none', fontWeight: 'bold', fontSize: 'var(--font-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <CheckCircle2 size={20} /> Tandai Selesai (+{activeVideo.points} Pts)
            </button>
          </div>
        </div>
      )}

      <Navigation role={role} />
    </div>
  );
}
