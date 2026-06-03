import { useNavigate } from 'react-router-dom';
import { User, Heart, ChevronLeft, BookOpen, Shield, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoUrl from '../assets/logo.png';

export default function Onboarding() {
  const navigate = useNavigate();
  const [showSiswaOptions, setShowSiswaOptions] = useState(false);

  // Reset high contrast mode on onboarding page
  useEffect(() => {
    document.body.classList.remove('high-contrast-mode');
  }, []);

  const selectRole = (role) => {
    localStorage.setItem('userRole', role);
    if (role === 'sesepuh') {
      document.body.classList.add('high-contrast-mode');
      navigate('/sesepuh');
    } else {
      navigate(`/${role}`);
    }
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', padding: 'var(--spacing-xl)', justifyContent: 'center', minHeight: '100vh', background: 'linear-gradient(135deg, var(--color-bg) 0%, #dcfce7 100%)' }}>
      
      <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }} className="animate-slide-up">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
          <img src={logoUrl} alt="Logo" style={{ width: '100px', height: 'auto', objectFit: 'contain' }} className="animate-pulse-subtle" />
        </div>
        <h1 style={{ color: '#f97316' }}>PPA JMD</h1>
        <p className="text-muted" style={{ marginTop: 'var(--spacing-sm)' }}>
          Perhimpunan Penjelajah Alam JaMaDagni <br /> SMA 3 Bandung
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }} className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        
        {!showSiswaOptions ? (
          <>
            <h2 style={{ textAlign: 'center', fontSize: 'var(--font-xl)', marginBottom: 'var(--spacing-sm)' }}>
              Selamat Datang!
            </h2>
            <p style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }} className="text-muted">
              Pilih peran Anda untuk melanjutkan
            </p>

            <button 
              className="glass-panel hover-scale" 
              onClick={() => setShowSiswaOptions(true)}
              style={{ padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', border: 'none', textAlign: 'center', width: '100%', transition: 'all 0.3s' }}
            >
              <div style={{ background: 'var(--color-secondary)', padding: '1rem', borderRadius: 'var(--radius-full)', color: 'white' }}>
                <User size={32} />
              </div>
              <h3 style={{ fontSize: 'var(--font-lg)', margin: '0' }}>Siswa SMA</h3>
              <p className="text-sm text-muted">Jelajahi, ikut pendidikan dasar, & event</p>
            </button>

            <button 
              className="glass-panel hover-scale" 
              onClick={() => selectRole('sesepuh')}
              style={{ padding: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--spacing-sm)', cursor: 'pointer', border: 'none', textAlign: 'center', width: '100%', transition: 'all 0.3s' }}
            >
              <div style={{ background: 'var(--color-accent)', padding: '1rem', borderRadius: 'var(--radius-full)', color: 'white' }}>
                <Heart size={32} />
              </div>
              <h3 style={{ fontSize: 'var(--font-lg)', margin: '0' }}>Orangtua / Alumni</h3>
              <p className="text-sm text-muted">Info kegiatan & berita</p>
            </button>
          </>
        ) : (
          <>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-sm)', position: 'relative' }}>
              <button onClick={() => setShowSiswaOptions(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', left: 0 }}>
                <ChevronLeft size={28} />
              </button>
              <h2 style={{ textAlign: 'center', fontSize: 'var(--font-xl)', width: '100%' }}>
                Status Siswa
              </h2>
            </div>
            <p style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }} className="text-muted">
              Pilih status keanggotaan Anda saat ini
            </p>

            <button 
              className="glass-panel hover-scale" 
              onClick={() => selectRole('siswa/non')}
              style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', cursor: 'pointer', border: 'none', width: '100%', textAlign: 'left' }}
            >
              <div style={{ background: 'var(--color-border)', padding: '0.8rem', borderRadius: 'var(--radius-full)', color: 'var(--color-text)' }}>
                <BookOpen size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-md)', margin: '0' }}>Non Anggota</h3>
                <p className="text-xs text-muted">Calon pendaftar, lihat info & berita</p>
              </div>
            </button>

            <button 
              className="glass-panel hover-scale" 
              onClick={() => selectRole('siswa/muda')}
              style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', cursor: 'pointer', border: 'none', width: '100%', textAlign: 'left' }}
            >
              <div style={{ background: 'var(--color-secondary)', padding: '0.8rem', borderRadius: 'var(--radius-full)', color: 'white' }}>
                <Shield size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-md)', margin: '0' }}>Anggota Muda</h3>
                <p className="text-xs text-muted">Sedang kaderisasi, kerjakan misi</p>
              </div>
            </button>

            <button 
              className="glass-panel hover-scale" 
              onClick={() => selectRole('siswa/tetap')}
              style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)', cursor: 'pointer', border: 'none', width: '100%', textAlign: 'left' }}
            >
              <div style={{ background: 'var(--color-primary)', padding: '0.8rem', borderRadius: 'var(--radius-full)', color: 'white' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-md)', margin: '0' }}>Anggota Tetap</h3>
                <p className="text-xs text-muted">Manajemen acara & komunitas</p>
              </div>
            </button>
          </>
        )}
      </div>
      
    </div>
  );
}
