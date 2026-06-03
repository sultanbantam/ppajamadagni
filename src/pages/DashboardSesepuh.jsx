import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, Activity, MessageSquare, PlusSquare, Quote, CheckCircle2, Newspaper, HelpCircle, Calendar, Megaphone, Image as ImageIcon, HeartHandshake, Users, Archive, Type, PenTool, ShoppingBag, FileText, ChevronRight, Bell } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useState, useEffect } from 'react';

export default function DashboardSesepuh() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'berita' | 'kilas' | 'cerita' | 'kuis' | 'jadwal' | 'panduan' | 'donasi' | 'jejaring' | 'nostalgia' | 'merch' | 'bacaBerita'
  const [highContrast, setHighContrast] = useState(false);

  // Form states
  const [beritaTag, setBeritaTag] = useState('');
  const [fileKilas, setFileKilas] = useState('');
  const [fileBerita, setFileBerita] = useState('');
  const [fileJadwal, setFileJadwal] = useState('');
  const [fileCV, setFileCV] = useState('');

  // Set user role
  useEffect(() => {
    localStorage.setItem('userRole', 'sesepuh');
  }, []);

  const handleMockSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const newsItems = [
    { id: 1, title: 'Pelantikan Anggota Baru 2026', date: 'Kemarin', content: 'Pelantikan telah sukses dilaksanakan di Gunung Manglayang dengan diikuti oleh 120 Calon Anggota.' },
    { id: 2, title: 'Laporan Pendakian Gn. Gede', date: '3 Hari yang lalu', content: 'Tim ekspedisi angkatan 2024 berhasil mencapai puncak Gunung Gede Pangrango dengan selamat dan membawa misi kebersihan alam.' }
  ];

  // Dynamic Styles based on accessibility toggle
  const scale = highContrast ? 1.1 : 1;
  const bgColor = highContrast ? '#000000' : 'var(--color-bg)';
  const textColor = highContrast ? '#ffffff' : 'var(--color-text)';

  return (
    <div className="app-container" style={{ background: bgColor, color: textColor, transition: 'all 0.3s ease' }}>
      <div style={{ padding: 'var(--spacing-md)', paddingBottom: '100px', transform: `scale(${scale})`, transformOrigin: 'top left', width: highContrast ? '90.9%' : '100%' }}>
        
        {/* Top Bar with Back Button & Accessibility */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)', position: 'sticky', top: 0, zIndex: 10, background: highContrast ? 'rgba(0,0,0,0.9)' : 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '8px 0' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: textColor }}>
            <ArrowLeft size={32} />
            <span style={{ marginLeft: '8px', fontSize: 'var(--font-lg)', fontWeight: 500 }}>Keluar</span>
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => alert('Tidak ada notifikasi baru.')} style={{ background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '8px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Bell size={20} />
            </button>
            <button onClick={() => setHighContrast(!highContrast)} style={{ background: highContrast ? 'white' : 'var(--color-surface)', color: highContrast ? 'black' : 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
              <Type size={20} /> Aksesibilitas
            </button>
          </div>
        </div>

        {showSuccess && (
          <div className="animate-slide-up" style={{ position: 'fixed', top: '80px', left: '16px', right: '16px', zIndex: 9999, padding: '16px', background: 'var(--color-accent)', color: 'white', textAlign: 'center', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', fontWeight: 'bold' }}>
            <CheckCircle2 size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
            Tindakan berhasil disimpan!
          </div>
        )}

        {/* Header Sederhana */}
        <header style={{ marginBottom: 'var(--spacing-lg)', paddingTop: 'var(--spacing-sm)' }}>
          <h1 style={{ fontSize: 'var(--font-2xl)', color: highContrast ? '#4ade80' : 'var(--color-primary)', margin: 0 }}>Halo, Kang/Teh</h1>
          <p style={{ fontSize: 'var(--font-lg)', opacity: 0.9, marginTop: '8px' }}>
            Selamat datang kembali di rumah Jamadagni.
          </p>
        </header>

        {/* Menu Aksi Cepat dengan Tombol Besar */}
        <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
          <button onClick={() => setActiveModal('jadwal')} className="glass-panel hover-scale" style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', textAlign: 'center', border: highContrast ? '2px solid white' : '1px solid var(--color-border)' }}>
            <Calendar size={48} color={highContrast ? '#4ade80' : "var(--color-primary)"} />
            <span style={{ fontSize: 'var(--font-lg)', fontWeight: 'bold' }}>Jadwal Acara</span>
          </button>
          
          <button onClick={() => setActiveModal('panduan')} className="glass-panel hover-scale" style={{ padding: 'var(--spacing-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', textAlign: 'center', border: highContrast ? '2px solid white' : '1px solid var(--color-border)' }}>
            <HelpCircle size={48} color={highContrast ? '#60a5fa' : "var(--color-secondary)"} />
            <span style={{ fontSize: 'var(--font-lg)', fontWeight: 'bold' }}>Bantuan Panduan</span>
          </button>
        </section>

        {/* Bakti Alumni (Donasi) */}
        <section className="animate-slide-up" style={{ marginBottom: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
            <HeartHandshake size={28} color="#ef4444" />
            <h2 style={{ fontSize: 'var(--font-xl)', margin: 0 }}>Bakti Alumni</h2>
          </div>
          <div className="glass-panel" style={{ padding: 'var(--spacing-lg)', border: highContrast ? '2px solid #ef4444' : '1px solid var(--color-border)' }}>
            <h3 style={{ fontSize: 'var(--font-lg)', margin: '0 0 8px 0' }}>Tenda Ekspedisi Gn. Rinjani 2026</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: 'var(--font-md)' }}>
              <span>Terkumpul: <strong>Rp 3.500.000</strong></span>
              <span style={{ color: 'var(--color-text-muted)' }}>Target: Rp 5 Juta</span>
            </div>
            <div style={{ width: '100%', height: '12px', background: 'var(--color-surface)', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
              <div style={{ width: '70%', height: '100%', background: '#ef4444', borderRadius: '8px' }}></div>
            </div>
            <button onClick={() => setActiveModal('donasi')} className="hover-scale" style={{ width: '100%', padding: '16px', background: '#ef4444', color: 'white', borderRadius: 'var(--radius-md)', border: 'none', fontWeight: 'bold', fontSize: 'var(--font-lg)', cursor: 'pointer' }}>
              Urun Dana Sekarang
            </button>
          </div>
        </section>

        {/* Toko Merchandise Jamadagni */}
        <section className="animate-slide-up" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <button onClick={() => setActiveModal('merch')} className="hover-scale" style={{ width: '100%', padding: 'var(--spacing-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))', color: 'white', borderRadius: 'var(--radius-lg)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '12px', borderRadius: '12px' }}>
                <ShoppingBag size={32} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: '0 0 4px 0', fontSize: 'var(--font-xl)' }}>Toko Merchandise</h3>
                <span style={{ opacity: 0.9, fontSize: 'var(--font-md)' }}>Dukung kami dengan membeli suvenir!</span>
              </div>
            </div>
            <ChevronRight size={28} />
          </button>
        </section>

        {/* Jejaring & Nostalgia */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
          <button onClick={() => setActiveModal('jejaring')} className="glass-panel hover-scale" style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textAlign: 'left', border: highContrast ? '2px solid white' : '1px solid var(--color-border)' }}>
            <div style={{ background: 'var(--color-primary-dark)', padding: '12px', borderRadius: '12px', color: 'white' }}>
              <Users size={32} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: 'var(--font-md)' }}>Jejaring Alumni</strong>
              <span style={{ fontSize: '12px', opacity: 0.8 }}>Koneksi Karir</span>
            </div>
          </button>
          <button onClick={() => setActiveModal('nostalgia')} className="glass-panel hover-scale" style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', textAlign: 'left', border: highContrast ? '2px solid white' : '1px solid var(--color-border)' }}>
            <div style={{ background: '#eab308', padding: '12px', borderRadius: '12px', color: 'black' }}>
              <Archive size={32} />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: 'var(--font-md)' }}>Pojok Nostalgia</strong>
              <span style={{ fontSize: '12px', opacity: 0.8 }}>Kilas Angkatan</span>
            </div>
          </button>
        </section>

        {/* Pusat Kontribusi (UGC) - 4 Tombol Kotak Besar */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
            <PenTool size={28} color="var(--color-accent)" />
            <h2 style={{ fontSize: 'var(--font-xl)', margin: 0 }}>Pusat Kontribusi</h2>
          </div>
          <p className="text-md text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>Bagikan cerita, kuis, atau berita untuk dibaca oleh seluruh anggota.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-md)' }}>
            <button onClick={() => setActiveModal('berita')} className="glass-panel hover-scale" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', border: '2px solid var(--color-primary)' }}>
              <Newspaper size={40} color="var(--color-primary)" />
              <span style={{ fontSize: 'var(--font-lg)', fontWeight: 'bold' }}>Tulis Berita</span>
            </button>
            <button onClick={() => setActiveModal('cerita')} className="glass-panel hover-scale" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', border: '2px solid #eab308' }}>
              <Quote size={40} color="#eab308" />
              <span style={{ fontSize: 'var(--font-lg)', fontWeight: 'bold' }}>Bagi Cerita</span>
            </button>
            <button onClick={() => setActiveModal('kilas')} className="glass-panel hover-scale" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', border: '2px solid var(--color-secondary)' }}>
              <ImageIcon size={40} color="var(--color-secondary)" />
              <span style={{ fontSize: 'var(--font-lg)', fontWeight: 'bold' }}>Unggah Kilas</span>
            </button>
            <button onClick={() => setActiveModal('kuis')} className="glass-panel hover-scale" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', cursor: 'pointer', border: '2px solid var(--color-accent)' }}>
              <PlusSquare size={40} color="var(--color-accent)" />
              <span style={{ fontSize: 'var(--font-lg)', fontWeight: 'bold' }}>Buat Kuis</span>
            </button>
          </div>
        </section>

        {/* Pengumuman & Berita */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
            <Megaphone size={28} color="var(--color-text)" />
            <h2 style={{ fontSize: 'var(--font-xl)', margin: 0 }}>Berita Jamadagni</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            {newsItems.map(item => (
              <button key={item.id} onClick={() => setActiveModal('bacaBerita')} className="glass-panel hover-scale" style={{ padding: 'var(--spacing-lg)', textAlign: 'left', cursor: 'pointer', border: highContrast ? '1px solid white' : '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: 'var(--font-lg)', marginBottom: 'var(--spacing-sm)', color: 'var(--color-text)' }}>{item.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: 'var(--color-text-muted)' }}>
                  <Newspaper size={18} />
                  <span style={{ fontSize: 'var(--font-md)' }}>{item.date}</span>
                </div>
              </button>
            ))}
          </div>
          
          <button onClick={() => setActiveModal('bacaBerita')} className="btn btn-outline hover-scale" style={{ width: '100%', marginTop: 'var(--spacing-lg)', padding: 'var(--spacing-md)', fontSize: 'var(--font-lg)' }}>
            Lihat Semua Berita
          </button>
        </section>

      </div>
      
      {/* ----------------- MODALS (POP-UP) ----------------- */}

      {/* Tulis Berita Modal */}
      {activeModal === 'berita' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-primary)' }}>Tulis Berita Publik</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{ display: 'block', cursor: 'pointer' }}>
                <input type="file" style={{ display: 'none' }} onChange={(e) => setFileBerita(e.target.files[0]?.name)} />
                <div style={{ border: '2px dashed var(--color-border)', padding: '32px', borderRadius: '16px', textAlign: 'center', background: 'var(--color-surface)' }}>
                  {fileBerita ? (
                    <CheckCircle2 size={40} className="text-accent" style={{ margin: '0 auto 8px auto', color: 'var(--color-accent)' }} />
                  ) : (
                    <ImageIcon size={40} className="text-muted" style={{ margin: '0 auto 8px auto' }} />
                  )}
                  <p style={{ margin: 0, fontSize: '18px' }}>{fileBerita ? `Terpilih: ${fileBerita}` : 'Ketuk untuk pilih Foto/Video Berita'}</p>
                </div>
              </label>
              <input type="text" placeholder="Judul Berita..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required />
              <select value={beritaTag} onChange={(e) => setBeritaTag(e.target.value)} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required>
                <option value="">Pilih Kategori/Tagar...</option>
                <option value="#Ekspedisi">#Ekspedisi</option>
                <option value="#BaktiSosial">#BaktiSosial</option>
                <option value="Lainnya">Lainnya...</option>
              </select>
              <textarea placeholder="Isi berita singkat..." rows="5" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, resize: 'none', fontSize: '18px' }} required></textarea>
              <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '16px' }}>
                Publikasikan Berita
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Bagi Cerita Modal */}
      {activeModal === 'cerita' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: '#eab308' }}>Bagi Cerita Inspiratif</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <textarea placeholder="Ceritakan pengalaman inspiratif Anda selama di Jamadagni..." rows="8" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, resize: 'none', fontSize: '18px' }} required></textarea>
              <button type="submit" className="hover-scale" style={{ background: '#eab308', color: 'black', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '16px' }}>
                Kirim Cerita
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Unggah Kilas Modal */}
      {activeModal === 'kilas' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-secondary)' }}>Unggah Kilas Jamadagni</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{ display: 'block', cursor: 'pointer' }}>
                <input type="file" style={{ display: 'none' }} onChange={(e) => setFileKilas(e.target.files[0]?.name)} />
                <div style={{ border: '2px dashed var(--color-border)', padding: '40px', borderRadius: '16px', textAlign: 'center', background: 'var(--color-surface)' }}>
                  {fileKilas ? (
                    <CheckCircle2 size={48} style={{ margin: '0 auto 16px auto', color: 'var(--color-secondary)' }} />
                  ) : (
                    <ImageIcon size={48} className="text-muted" style={{ margin: '0 auto 16px auto' }} />
                  )}
                  <p style={{ margin: 0, fontSize: '18px' }}>{fileKilas ? `Terpilih: ${fileKilas}` : 'Ketuk untuk pilih Foto/Video'}</p>
                </div>
              </label>
              <input type="text" placeholder="Deskripsi Singkat Acara..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required />
              <button type="submit" className="hover-scale" style={{ background: 'var(--color-secondary)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '16px' }}>
                Unggah ke Beranda Publik
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Buat Kuis Modal */}
      {activeModal === 'kuis' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-accent)' }}>Buat Kuis Interaktif</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Topik Kuis (misal: Survival)" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required />
              <textarea placeholder="Pertanyaan Kuis..." rows="5" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, resize: 'none', fontSize: '18px' }} required></textarea>
              <button type="submit" className="hover-scale" style={{ background: 'var(--color-accent)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '16px' }}>
                Bagikan Kuis ke Anggota Muda
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Jadwal Acara Modal */}
      {activeModal === 'jadwal' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-primary)' }}>Kelola Jadwal Acara</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Nama Acara (misal: Rapat Kerja)" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required />
              <input type="date" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required />
              <textarea placeholder="Deskripsi Acara & Lokasi..." rows="4" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, resize: 'none', fontSize: '18px' }} required></textarea>
              
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px' }}>
                <label style={{ display: 'block', cursor: 'pointer' }}>
                  <span style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Unggah Flyer / Thumbnail (Opsional)</span>
                  <input type="file" style={{ display: 'none' }} onChange={(e) => setFileJadwal(e.target.files[0]?.name)} />
                  <div style={{ border: '2px dashed var(--color-primary)', padding: '24px', borderRadius: '12px', textAlign: 'center', background: 'var(--color-surface)' }}>
                    {fileJadwal ? (
                      <CheckCircle2 size={32} style={{ margin: '0 auto 8px auto', color: 'var(--color-primary)' }} />
                    ) : (
                      <ImageIcon size={32} className="text-muted" style={{ margin: '0 auto 8px auto' }} />
                    )}
                    <p style={{ margin: 0, fontSize: '16px' }}>{fileJadwal ? `Terpilih: ${fileJadwal}` : 'Ketuk untuk pilih foto'}</p>
                  </div>
                </label>
              </div>

              <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '8px' }}>
                Simpan Jadwal Baru
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Bantuan Panduan Modal */}
      {activeModal === 'panduan' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '70vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-secondary)' }}>Bantuan Panduan Aplikasi</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', lineHeight: 1.6 }}>
              <p>Selamat datang di Aplikasi Jamadagni. Berikut panduan singkat:</p>
              <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Aksesibilitas:</strong> Ketuk tombol Aksesibilitas di kanan atas untuk memperbesar teks.</li>
                <li><strong>Pusat Kontribusi:</strong> Anda dapat menulis berita atau berbagi foto kenangan (Nostalgia).</li>
                <li><strong>Urun Dana & Toko:</strong> Anda dapat menyokong kegiatan dengan berdonasi atau membeli merchandise.</li>
                <li><strong>Hubungi Admin:</strong> Jika ada kendala, hubungi WhatsApp: <strong>0812-3456-7890</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Donasi (Urun Dana) Modal */}
      {activeModal === 'donasi' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '70vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: '#ef4444' }}>Informasi Rekening Donasi</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '18px', textAlign: 'center' }}>
              <p>Terima kasih atas kepedulian Anda terhadap kegiatan Jamadagni.</p>
              
              <div style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '16px', border: '2px dashed #ef4444' }}>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--color-text-muted)' }}>Bank Mandiri</h4>
                <h2 style={{ margin: '0 0 16px 0', fontSize: '32px', letterSpacing: '2px' }}>130-00-1234567-8</h2>
                <p style={{ margin: 0 }}>a.n. <strong>Ikatan Alumni Jamadagni SMAN 3 BDG</strong></p>
              </div>

              <button onClick={() => { setActiveModal(null); setShowSuccess(true); setTimeout(() => setShowSuccess(false), 3000); }} className="hover-scale" style={{ background: '#ef4444', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px' }}>
                Konfirmasi Pembayaran
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Jejaring Alumni Modal */}
      {activeModal === 'jejaring' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-primary-dark)' }}>Profil Profesional Anda</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <p style={{ marginTop: 0, color: 'var(--color-text-muted)', fontSize: '18px' }}>Perbarui data pekerjaan Anda agar terhubung dengan alumni lain atau membagikan lowongan.</p>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Perusahaan saat ini..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required />
              <input type="text" placeholder="Posisi / Jabatan..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} required />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                <input type="text" placeholder="LinkedIn" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '16px' }} />
                <input type="text" placeholder="Instagram" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '16px' }} />
                <input type="text" placeholder="Twitter / X" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '16px' }} />
              </div>

              <div style={{ border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px' }}>
                <label style={{ display: 'block', cursor: 'pointer' }}>
                  <span style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Unggah Curriculum Vitae (PDF)</span>
                  <input type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => setFileCV(e.target.files[0]?.name)} />
                  <div style={{ border: '2px dashed var(--color-primary-dark)', padding: '24px', borderRadius: '12px', textAlign: 'center', background: 'var(--color-surface)' }}>
                    {fileCV ? (
                      <FileText size={32} style={{ margin: '0 auto 8px auto', color: 'var(--color-primary-dark)' }} />
                    ) : (
                      <FileText size={32} className="text-muted" style={{ margin: '0 auto 8px auto' }} />
                    )}
                    <p style={{ margin: 0, fontSize: '16px' }}>{fileCV ? `Terpilih: ${fileCV}` : 'Ketuk untuk pilih dokumen PDF'}</p>
                  </div>
                </label>
              </div>

              <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary-dark)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '8px' }}>
                Simpan & Bagikan ke Direktori
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Pojok Nostalgia Modal */}
      {activeModal === 'nostalgia' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: '#eab308' }}>Unggah Kenangan Lama</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <label style={{ display: 'block', cursor: 'pointer' }}>
                <input type="file" style={{ display: 'none' }} onChange={(e) => setFileKilas(e.target.files[0]?.name)} />
                <div style={{ border: '2px dashed #eab308', padding: '40px', borderRadius: '16px', textAlign: 'center', background: 'var(--color-surface)' }}>
                  {fileKilas ? (
                    <CheckCircle2 size={48} style={{ margin: '0 auto 16px auto', color: '#eab308' }} />
                  ) : (
                    <ImageIcon size={48} className="text-muted" style={{ margin: '0 auto 16px auto' }} />
                  )}
                  <p style={{ margin: 0, fontSize: '18px' }}>{fileKilas ? `Terpilih: ${fileKilas}` : 'Ketuk untuk pilih Foto Lawas / Video Pendek'}</p>
                </div>
              </label>
              
              <div style={{ textAlign: 'center', margin: '8px 0', fontSize: '14px', color: 'var(--color-text-muted)' }}>ATAU TAUTKAN URL</div>
              
              <input type="url" placeholder="Masukkan Link Video (YouTube/Instagram)..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, fontSize: '18px' }} />
              
              <textarea placeholder="Ceritakan momen foto/video ini..." rows="4" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: textColor, resize: 'none', fontSize: '18px' }} required></textarea>
              <button type="submit" className="hover-scale" style={{ background: '#eab308', color: 'black', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '16px' }}>
                Publikasikan ke Pojok Nostalgia
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Katalog Merchandise Modal */}
      {activeModal === 'merch' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <ShoppingBag size={28} color="var(--color-primary)" />
                <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-primary)' }}>Toko Jamadagni</h3>
              </div>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
              {/* Product 1 */}
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', display: 'flex', gap: '16px' }}>
                <div style={{ width: '100px', height: '100px', background: 'var(--color-surface)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '40px' }}>👕</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>Kaos PDL Jamadagni</h4>
                  <p style={{ margin: '0 0 12px 0', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '18px' }}>Rp 120.000</p>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <span key={size} style={{ padding: '4px 12px', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '14px' }}>{size}</span>
                    ))}
                  </div>
                  <button onClick={() => setActiveModal('donasi')} style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Beli Sekarang</button>
                </div>
              </div>

              {/* Product 2 */}
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '16px', padding: '16px', display: 'flex', gap: '16px' }}>
                <div style={{ width: '100px', height: '100px', background: 'var(--color-surface)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '40px' }}>🧣</span>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>Syal Angkatan</h4>
                  <p style={{ margin: '0 0 12px 0', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '18px' }}>Rp 50.000</p>
                  <span style={{ display: 'inline-block', padding: '4px 12px', border: '1px solid var(--color-border)', borderRadius: '4px', fontSize: '14px', marginBottom: '12px' }}>All Size</span>
                  <button onClick={() => setActiveModal('donasi')} style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>Beli Sekarang</button>
                </div>
              </div>
            </div>

            {/* Admin Controls for Merch */}
            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px dashed var(--color-border)' }}>
              <h4 style={{ margin: '0 0 16px 0', color: 'var(--color-text-muted)' }}>Panel Kelola Toko</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px', background: 'var(--color-surface)', borderRadius: '8px', cursor: 'pointer', border: '1px solid var(--color-border)' }}>
                  <ImageIcon size={20} />
                  <span style={{ flex: 1 }}>Unggah Foto Produk (3-5 Foto)</span>
                  <input type="file" multiple accept="image/*" style={{ display: 'none' }} onChange={(e) => { alert(`${e.target.files.length} foto berhasil dipilih.`); }} />
                </label>
                <button onClick={() => alert('Membuka formulir penambahan produk baru...')} style={{ background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <PlusSquare size={20} /> Tambah Merchandise Lain
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Baca Berita Modal */}
      {activeModal === 'bacaBerita' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: bgColor, color: textColor, padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: bgColor, zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-text)' }}>Arsip Berita</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: textColor, width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {newsItems.map(item => (
                <div key={item.id} style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                    <Newspaper size={18} />
                    <span style={{ fontSize: '16px' }}>{item.date}</span>
                  </div>
                  <h2 style={{ margin: '0 0 16px 0', fontSize: '24px' }}>{item.title}</h2>
                  <div style={{ width: '100%', height: '160px', background: 'var(--color-surface)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <ImageIcon size={40} className="text-muted" />
                  </div>
                  <p style={{ fontSize: '18px', lineHeight: 1.6, margin: 0 }}>
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <button onClick={() => setActiveModal('berita')} className="hover-scale" style={{ width: '100%', marginTop: '24px', padding: '16px', background: 'var(--color-primary)', color: 'white', borderRadius: '12px', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 'bold', fontSize: '18px', cursor: 'pointer' }}>
              <PenTool size={20} /> Update / Tulis Berita Baru
            </button>
          </div>
        </div>
      )}

      {/* Hide default navigation if highContrast is heavily scaling, or keep it standard */}
      <div style={{ zIndex: 9998, position: 'relative' }}>
        <Navigation role="sesepuh" />
      </div>
    </div>
  );
}
