import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, ShieldCheck, CheckCircle2, Award, ChevronRight, CheckSquare, MessageCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function InfoPendaftaran() {
  const navigate = useNavigate();
  const [mission1Done, setMission1Done] = useState(false);
  const [mission2Done, setMission2Done] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handlePlayVideo = () => {
    alert('Memutar video pengenalan Jamadagni...');
    setMission1Done(true);
  };

  const handleQuiz = () => {
    alert('Membuka Kuis Pengetahuan Alam...');
    setMission2Done(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="app-container" style={{ paddingBottom: 'calc(var(--spacing-xl) * 3)' }}>
      {/* Header */}
      <header style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', zIndex: 10, borderBottom: '1px solid var(--color-border)' }}>
        <button onClick={() => navigate('/siswa/non')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Info Pendaftaran</h1>
      </header>

      <div style={{ padding: 'var(--spacing-md)' }}>
        
        {/* Teaser Video */}
        <section className="animate-slide-up" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ fontSize: 'var(--font-lg)', marginBottom: 'var(--spacing-sm)' }}>Apa itu Jamadagni?</h2>
          <div 
            onClick={handlePlayVideo}
            style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '16/9', background: 'var(--color-surface)', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)' }}></div>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
                <Play fill="white" color="white" size={28} style={{ marginLeft: '4px' }} />
              </div>
            </div>
          </div>
          <p className="text-sm text-muted" style={{ marginTop: 'var(--spacing-sm)', textAlign: 'center' }}>Ketuk untuk memutar video (1 Menit)</p>
        </section>

        {/* Micro-commitments / Misi Awal */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
            <Award color="var(--color-accent)" size={24} />
            <h2 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Misi Calon Anggota</h2>
          </div>
          <p className="text-sm text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>Selesaikan misi kecil ini untuk mendapatkan Lencana Pertamamu!</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <div className="glass-panel" style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeft: mission1Done ? '4px solid var(--color-primary)' : '4px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <div style={{ color: mission1Done ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>
                  {mission1Done ? <CheckCircle2 size={24} /> : <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid currentColor' }}></div>}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--font-md)' }}>Tonton Video Pengenalan</h4>
                  <p className="text-xs text-muted" style={{ margin: '4px 0 0 0' }}>+50 Poin</p>
                </div>
              </div>
            </div>

            <div onClick={!mission2Done ? handleQuiz : undefined} className="glass-panel hover-scale" style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: mission2Done ? 'default' : 'pointer', borderLeft: mission2Done ? '4px solid var(--color-primary)' : '4px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
                <div style={{ color: mission2Done ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>
                  {mission2Done ? <CheckCircle2 size={24} /> : <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid currentColor' }}></div>}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: 'var(--font-md)' }}>Kuis Mini Pengetahuan Alam</h4>
                  <p className="text-xs text-muted" style={{ margin: '4px 0 0 0' }}>Dapatkan Lencana "Si Pejalan"</p>
                </div>
              </div>
              {!mission2Done && <ChevronRight size={20} className="text-muted" />}
            </div>
          </div>
        </section>

        {/* Persetujuan Orang Tua & Regulasi */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s', marginBottom: 'var(--spacing-xl)' }}>
          <div className="glass-panel" style={{ padding: 'var(--spacing-md)', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', color: '#3b82f6', marginBottom: 'var(--spacing-sm)' }}>
              <ShieldCheck size={24} />
              <h3 style={{ margin: 0, fontSize: 'var(--font-md)' }}>Keamanan & Privasi</h3>
            </div>
            <p className="text-sm" style={{ margin: 0, color: 'var(--color-text)' }}>
              Sesuai dengan regulasi privasi, pengguna di bawah 18 tahun <strong>wajib mengantongi izin dari Orang Tua / Wali</strong> untuk bergabung dan mengikuti kegiatan lapangan Jamadagni.
            </p>
          </div>
        </section>

        {/* Testimoni */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ fontSize: 'var(--font-lg)', marginBottom: 'var(--spacing-md)' }}>Kata Mereka</h2>
          <div className="glass-panel" style={{ padding: 'var(--spacing-md)', position: 'relative' }}>
            <MessageCircle size={32} color="var(--color-text-muted)" style={{ position: 'absolute', top: '16px', right: '16px', opacity: 0.2 }} />
            <p className="text-sm" style={{ fontStyle: 'italic', margin: '0 0 var(--spacing-sm) 0', lineHeight: 1.5 }}>
              "Bergabung dengan Jamadagni bukan cuma soal naik gunung, tapi soal persaudaraan, kepemimpinan, dan melampaui batas diri sendiri. Sangat direkomendasikan untuk siswa baru!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="https://i.pravatar.cc/100?img=33" alt="Kak Dinda" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--font-sm)' }}>Kak Dinda</strong>
                <span className="text-xs text-muted">Alumni Angkatan 2018</span>
              </div>
            </div>
          </div>
        </section>

        {/* Form Pendaftaran */}
        <section className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 style={{ fontSize: 'var(--font-lg)', marginBottom: 'var(--spacing-md)' }}>Formulir Pendaftaran Dasar</h2>
          
          {formSubmitted ? (
             <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', textAlign: 'center', border: '1px solid var(--color-primary)' }}>
               <CheckCircle2 size={48} color="var(--color-primary)" style={{ margin: '0 auto var(--spacing-md) auto' }} />
               <h3 style={{ margin: '0 0 var(--spacing-sm) 0' }}>Pendaftaran Terkirim!</h3>
               <p className="text-sm text-muted" style={{ margin: 0 }}>
                 Terima kasih! Tim pembina akan segera memverifikasi data dan menghubungi nomor WhatsApp Anda untuk instruksi selanjutnya.
               </p>
             </div>
          ) : (
            <form className="glass-panel" onSubmit={handleSubmit} style={{ padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <div>
                <label className="text-sm text-muted" style={{ display: 'block', marginBottom: '4px' }}>Nama Lengkap</label>
                <input type="text" placeholder="Masukkan nama lengkap..." style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
              </div>
              
              <div>
                <label className="text-sm text-muted" style={{ display: 'block', marginBottom: '4px' }}>Pilih Kelas</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select style={{ flex: 1, padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required>
                    <option value="" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>Tingkat</option>
                    <option value="X" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>Kelas X</option>
                    <option value="XI" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>Kelas XI</option>
                  </select>
                  <input type="text" placeholder="Grup (Msl: MIPA 1)" style={{ flex: 1, padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted" style={{ display: 'block', marginBottom: '4px' }}>Nomor WhatsApp Aktif</label>
                <input type="tel" placeholder="08xxxxxxxxxx" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
              </div>

              <div>
                <label className="text-sm text-muted" style={{ display: 'block', marginBottom: '4px' }}>Alasan Bergabung (Singkat)</label>
                <textarea placeholder="Kenapa kamu ingin masuk Jamadagni?" rows="2" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none' }} required></textarea>
              </div>

              <div style={{ marginTop: 'var(--spacing-sm)', padding: 'var(--spacing-sm)', background: 'var(--color-surface)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', cursor: 'pointer' }}>
                  <input type="checkbox" required style={{ marginTop: '4px', transform: 'scale(1.2)' }} />
                  <span className="text-sm" style={{ lineHeight: 1.4 }}>
                    Saya menyatakan bahwa saya telah mendapat <strong>Izin dari Orang Tua / Wali</strong> untuk mendaftar ekstrakurikuler Jamadagni.
                  </span>
                </label>
              </div>

              <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '16px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 'bold', fontSize: 'var(--font-md)', marginTop: 'var(--spacing-sm)', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                <CheckSquare size={20} /> Daftar Sekarang
              </button>
            </form>
          )}
        </section>

      </div>
      
      <Navigation role="siswa/non" />
    </div>
  );
}
