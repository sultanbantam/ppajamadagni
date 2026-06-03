import { useNavigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Quote, HelpCircle, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function DashboardNonAnggota() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowForm(false);
    }, 3000);
  };

  // Mock data untuk konten yang diisi oleh anggota (terbaru di atas)
  const [stories] = useState([
    {
      id: 1,
      quote: "Baru saja menyelesaikan pendidikan dasar minggu lalu! Lelah tapi seru banget bisa belajar navigasi langsung di alam.",
      author: "Budi S.",
      role: "Anggota Muda",
      initials: "BS",
      bgColor: "var(--color-primary)"
    },
    {
      id: 2,
      quote: "Pengalaman kepanitiaan pertama di acara tanam pohon massal sangat berkesan. Bangga bisa berkontribusi untuk hijaukan Bandung.",
      author: "Siti A.",
      role: "Anggota Tetap",
      initials: "SA",
      bgColor: "var(--color-secondary)"
    },
    {
      id: 3,
      quote: "Berawal dari pendakian pertama di Jamadagni, saya belajar arti kerja sama dan bertahan hidup. Pengalaman itu membentuk saya.",
      author: "Andi R.",
      role: "Alumni 2015",
      initials: "AR",
      bgColor: "var(--color-accent)"
    },
    {
      id: 4,
      quote: "Jangan ragu buat gabung! Di sini kita bukan cuma main ke hutan, tapi juga belajar kepemimpinan.",
      author: "Dian P.",
      role: "Alumni 2018",
      initials: "DP",
      bgColor: "var(--color-border)"
    }
  ]);

  // Tampilkan 3 cerita terbaru saja di beranda untuk efisiensi layar
  const visibleStories = stories.slice(0, 3);

  // Mock data untuk Hero Section (Foto/Video Kilas Jamadagni) yang diunggah anggota
  const [heroSlides] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Jelajahi Alam, Temukan Jati Diri.",
      uploader: "Tim Ekspedisi 2023",
      role: "Anggota Tetap"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1542662565-7e4fd1e54a4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Bakti Sosial Tanam Pohon 2024",
      uploader: "Siti A.",
      role: "Anggota Tetap"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Latihan Navigasi Darat",
      uploader: "Budi S.",
      role: "Anggota Muda"
    }
  ]);

  // Mock data untuk Kuis Mini buatan anggota
  const [quizzes] = useState([
    {
      id: 1,
      title: "Kenali Tumbuhan Liar",
      desc: "Coba kuis ini sebelum kamu mendaki!",
      creator: "Kak Dinda",
      role: "Alumni"
    },
    {
      id: 2,
      title: "Navigasi Bintang",
      desc: "Bagaimana cara menentukan arah di malam hari?",
      creator: "Andi R.",
      role: "Alumni"
    },
    {
      id: 3,
      title: "Peralatan Wajib",
      desc: "Cek persiapanmu sebelum masuk hutan.",
      creator: "Tim Diklat",
      role: "Anggota Tetap"
    }
  ]);

  const activeHero = heroSlides[0];

  return (
    <div className="app-container" style={{ paddingBottom: 'calc(var(--spacing-xl) * 3)' }}>
      {/* Header */}
      <header style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', zIndex: 10, borderBottom: '1px solid var(--color-border)' }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Jamadagni</h1>
      </header>

      <div style={{ padding: 'var(--spacing-md)' }}>
        {/* Hero Section (Dynamic Carousel) */}
        <section className="animate-slide-up" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
            <h3 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Kilas Jamadagni</h3>
            <span style={{ fontSize: 'var(--font-sm)', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>Lihat Semua</span>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)', 
            overflowX: 'auto', 
            paddingBottom: 'var(--spacing-md)',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}>
            {heroSlides.map(slide => (
              <div key={slide.id} style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', background: 'var(--color-surface)', flex: '0 0 100%', scrollSnapAlign: 'start' }}>
                {/* Image Background */}
                <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                
                {/* Overlay & Content */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'var(--spacing-md)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', marginBottom: '8px' }}>
                        <PlayCircle size={20} color="#f97316" />
                        <span className="text-sm" style={{ fontWeight: 600 }}>Video Pendek</span>
                      </div>
                      <h2 style={{ color: 'white', margin: 0, fontSize: 'var(--font-lg)' }}>{slide.title}</h2>
                    </div>
                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                      <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)', margin: 0 }}>Unggahan</p>
                      <p className="text-sm" style={{ color: 'white', margin: 0, fontWeight: 600 }}>{slide.uploader}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => setShowForm(true)} className="hover-scale" style={{ width: '100%', background: 'var(--color-primary)', color: 'white', border: 'none', padding: 'var(--spacing-md)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-md)', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', marginTop: 'var(--spacing-md)' }}>
            Daftar Pendidikan Dasar <ArrowRight size={20} />
          </button>
        </section>

        {/* Storytelling & Testimoni (Dynamic) */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
            <h3 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Cerita Mereka</h3>
            <span style={{ fontSize: 'var(--font-sm)', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>Lihat Semua</span>
          </div>
          
          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)', 
            overflowX: 'auto', 
            paddingBottom: 'var(--spacing-md)',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            margin: '0 calc(var(--spacing-md) * -1)', // Negative margin to allow full-width scroll
            padding: '10px var(--spacing-md)'
          }}>
            {visibleStories.map(story => (
              <div key={story.id} className="glass-panel" style={{ 
                minWidth: '280px', 
                maxWidth: '85vw',
                padding: 'var(--spacing-md)', 
                borderLeft: `4px solid ${story.bgColor}`,
                scrollSnapAlign: 'start',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <Quote size={20} color={story.bgColor} style={{ marginBottom: 'var(--spacing-xs)', opacity: 0.8 }} />
                  <p style={{ fontStyle: 'italic', marginBottom: 'var(--spacing-sm)', lineHeight: 1.5, fontSize: 'var(--font-sm)' }}>
                    "{story.quote}"
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'var(--spacing-sm)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: story.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '12px' }}>
                    {story.initials}
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '14px' }}>{story.author}</p>
                    <p className="text-muted" style={{ margin: 0, fontSize: '12px' }}>{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kuis Mini (Dynamic Carousel) */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
            <h3 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Tes Wawasan Alam</h3>
            <span style={{ fontSize: 'var(--font-sm)', color: 'var(--color-primary)', fontWeight: 600, cursor: 'pointer' }}>Lihat Semua</span>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)', 
            overflowX: 'auto', 
            paddingBottom: 'var(--spacing-md)',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch'
          }}>
            {quizzes.map(quiz => (
              <div key={quiz.id} className="glass-panel hover-scale" style={{ 
                padding: 'var(--spacing-md)', 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'var(--spacing-md)', 
                cursor: 'pointer',
                flex: '0 0 100%',
                scrollSnapAlign: 'start',
              }}>
                <div style={{ background: '#fde047', padding: '12px', borderRadius: 'var(--radius-full)', color: '#ca8a04', flexShrink: 0 }}>
                  <HelpCircle size={28} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h4 style={{ margin: 0, fontSize: 'var(--font-md)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{quiz.title}</h4>
                  <p className="text-sm text-muted" style={{ margin: 0, marginTop: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{quiz.desc}</p>
                  <p className="text-xs" style={{ margin: 0, marginTop: '8px', color: 'var(--color-primary)', fontWeight: 500 }}>
                    Dibuat oleh: {quiz.creator} ({quiz.role})
                  </p>
                </div>
                <ArrowRight size={20} className="text-muted" style={{ flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Registration Modal */}
      {showForm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-md)' }}>
          <div className="glass-panel animate-slide-up" style={{ width: '100%', maxWidth: '400px', maxHeight: '85vh', overflowY: 'auto', background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', position: 'relative' }}>
            <button onClick={() => setShowForm(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
              <X size={24} />
            </button>
            
            <h2 style={{ fontSize: 'var(--font-xl)', color: 'var(--color-primary)', marginBottom: '4px', marginTop: 0 }}>Formulir Pendaftaran</h2>
            <p className="text-sm text-muted" style={{ marginBottom: 'var(--spacing-lg)' }}>Pendidikan Dasar Jamadagni - Khusus Siswa SMA 3 Bandung</p>

            {showSuccess ? (
              <div style={{ padding: 'var(--spacing-xl) 0', textAlign: 'center', color: 'var(--color-primary)' }}>
                <CheckCircle2 size={64} style={{ margin: '0 auto var(--spacing-md) auto' }} />
                <h3 style={{ margin: 0, fontSize: 'var(--font-lg)' }}>Pendaftaran Berhasil!</h3>
                <p className="text-muted" style={{ marginTop: '8px' }}>Tunggu informasi selanjutnya dari panitia melalui WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <div>
                  <label className="text-sm" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Nama Lengkap</label>
                  <input type="text" placeholder="Masukkan nama Anda..." required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--bg-color)', color: 'var(--color-text)' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)' }}>
                  <div>
                    <label className="text-sm" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Tingkat</label>
                    <select required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--bg-color)', color: 'var(--color-text)' }}>
                      <option value="" style={{ color: '#1e293b' }}>Pilih...</option>
                      <option value="X" style={{ color: '#1e293b' }}>Kelas X</option>
                      <option value="XI" style={{ color: '#1e293b' }}>Kelas XI</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Detail Kelas</label>
                    <input type="text" placeholder="Misal: X A / XI IPA 1" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--bg-color)', color: 'var(--color-text)' }} />
                  </div>
                </div>
                <div>
                  <label className="text-sm" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Izin Orang Tua</label>
                  <select required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--bg-color)', color: 'var(--color-text)' }}>
                    <option value="" style={{ color: '#1e293b' }}>Apakah sudah dapat izin?</option>
                    <option value="sudah" style={{ color: '#1e293b' }}>Ya, sudah dapat izin</option>
                    <option value="belum" style={{ color: '#1e293b' }}>Belum (sedang diajukan)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Nomor WhatsApp</label>
                  <input type="tel" placeholder="08xx..." required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--bg-color)', color: 'var(--color-text)' }} />
                </div>
                <div>
                  <label className="text-sm" style={{ display: 'block', marginBottom: '4px', fontWeight: 500 }}>Alasan Bergabung</label>
                  <textarea placeholder="Kenapa kamu ingin masuk Jamadagni?" rows="3" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--bg-color)', color: 'var(--color-text)', resize: 'none' }}></textarea>
                </div>
                
                <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '14px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 'bold', fontSize: 'var(--font-md)', marginTop: '8px' }}>
                  Kirim Pendaftaran
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <Navigation role="siswa/non" />
    </div>
  );
}
