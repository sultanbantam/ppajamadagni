import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, Award, Settings, QrCode, Map, Compass, Leaf, Shield, History, MapPin, Share2, Camera, MessageCircle, Send, MessageSquare, Users, Link } from 'lucide-react';

export default function ProfilAnggota() {
  const navigate = useNavigate();
  const [showQRModal, setShowQRModal] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [profileImage, setProfileImage] = useState('https://i.pravatar.cc/150?img=11');
  const role = localStorage.getItem('userRole') || 'siswa/muda';
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const isMentor = role === 'siswa/tetap';

  // Mock data based on role
  const user = isMentor ? {
    name: "Kak Dinda",
    role: "Anggota Tetap (DP)",
    angkatan: "2025 (Kabut Rimba)",
    nomorInduk: "AT-25-012",
    points: 1250,
    level: "Dewan Pengurus",
    rank: 1,
    mentees: 15
  } : {
    name: "Raka Aditya",
    role: "Anggota Muda",
    angkatan: "2026 (Angin Barat)",
    nomorInduk: "AM-26-045",
    points: 350,
    level: 2,
    rank: 5
  };

  const badges = isMentor ? [
    { id: 1, name: 'Si Pejalan', icon: <Map size={24} />, color: '#3b82f6', earned: true },
    { id: 2, name: 'Arah Angin', icon: <Compass size={24} />, color: '#eab308', earned: true },
    { id: 3, name: 'Penghijau', icon: <Leaf size={24} />, color: '#22c55e', earned: true },
    { id: 4, name: 'Mentor Terbaik', icon: <Award size={24} />, color: '#f59e0b', earned: true }
  ] : [
    { id: 1, name: 'Si Pejalan', icon: <Map size={24} />, color: '#3b82f6', earned: true },
    { id: 2, name: 'Arah Angin', icon: <Compass size={24} />, color: '#eab308', earned: true },
    { id: 3, name: 'Penghijau', icon: <Leaf size={24} />, color: '#22c55e', earned: false },
    { id: 4, name: 'Pelindung', icon: <Shield size={24} />, color: '#ef4444', earned: false }
  ];

  const history = isMentor ? [
    { id: 1, title: 'Validasi Tugas Raka', date: 'Hari ini', points: '+20 Pts' },
    { id: 2, title: 'Validasi Kuis Budi', date: 'Hari ini', points: '+15 Pts' },
    { id: 3, title: 'Menjadi Pemateri Navigasi', date: '05 Okt 2026', points: '+200 Pts' },
  ] : [
    { id: 1, title: 'Latihan Fisik Saparua', date: '07 Okt 2026', points: '+100 Pts' },
    { id: 2, title: 'Kuis Navigasi Dasar', date: '05 Okt 2026', points: '+50 Pts' },
    { id: 3, title: 'Menonton Video Sejarah', date: '01 Okt 2026', points: '+50 Pts' },
  ];

  return (
    <div className="app-container" style={{ paddingBottom: 'calc(var(--spacing-xl) * 3)' }}>
      {/* Header */}
      <header style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
        <button onClick={() => navigate(`/${role}`)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Profil Anggota</h1>
        <button onClick={() => setShowEdit(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text)' }}>
          <Settings size={24} />
        </button>
      </header>

      <div style={{ padding: 'var(--spacing-md)' }}>
        
        {/* KTA Digital (KTAM) */}
        <section className="animate-slide-up" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-primary))',
            borderRadius: '16px',
            padding: 'var(--spacing-lg)',
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)'
          }}>
            {/* Watermark Logo */}
            <div style={{ position: 'absolute', right: '-20px', top: '-20px', opacity: 0.1 }}>
              <Shield size={150} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-lg)' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 'var(--font-md)', opacity: 0.9 }}>{isMentor ? 'KARTU TANDA ANGGOTA TETAP' : 'KARTU TANDA ANGGOTA MUDA'}</h2>
                <h3 style={{ margin: '4px 0 0 0', fontSize: 'var(--font-sm)', opacity: 0.8 }}>JAMADAGNI SMAN 3 BANDUNG</h3>
              </div>
              <img src="/logo.png" alt="Logo Jamadagni" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
            </div>

            <div style={{ display: 'flex', gap: 'var(--spacing-md)' }}>
              <img src={isMentor ? 'https://i.pravatar.cc/150?img=12' : profileImage} alt={user.name} style={{ width: '80px', height: '100px', objectFit: 'cover', borderRadius: '8px', border: '2px solid white' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <strong style={{ fontSize: 'var(--font-xl)', lineHeight: 1.1 }}>{user.name}</strong>
                <span style={{ fontSize: 'var(--font-sm)', opacity: 0.9, marginTop: '4px', background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '12px', alignSelf: 'flex-start' }}>{user.role}</span>
                <div style={{ marginTop: 'auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '10px', opacity: 0.8 }}>
                  <div>
                    <span style={{ display: 'block' }}>NRP / NIKM</span>
                    <strong>{user.nomorInduk}</strong>
                  </div>
                  <div>
                    <span style={{ display: 'block' }}>Angkatan</span>
                    <strong>{user.angkatan}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Button inside KTA */}
            <button onClick={() => setShowQRModal(true)} className="hover-scale" style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'white', color: 'var(--color-primary)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
              <QrCode size={20} />
            </button>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
             <button onClick={() => setShowShare(true)} style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
               <Share2 size={14} /> Bagikan {isMentor ? 'KTAT' : 'KTAM'} Digital
             </button>
          </div>
        </section>

        {/* Statistik Kaderisasi / Mentor */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s', marginBottom: 'var(--spacing-xl)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-sm)' }}>
          <div className="glass-panel" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
            <Award size={24} color="#eab308" style={{ margin: '0 auto var(--spacing-xs) auto' }} />
            <h4 style={{ margin: 0, fontSize: 'var(--font-md)' }}>{isMentor ? 'Poin Mentor' : `Level ${user.level}`}</h4>
            <p className="text-xs text-muted" style={{ margin: '2px 0 0 0' }}>{user.points} {isMentor ? 'Poin' : 'Poin Kaderisasi'}</p>
          </div>
          <div className="glass-panel" style={{ padding: 'var(--spacing-md)', textAlign: 'center' }}>
            {isMentor ? (
              <Users size={24} color="var(--color-secondary)" style={{ margin: '0 auto var(--spacing-xs) auto' }} />
            ) : (
              <Shield size={24} color="var(--color-secondary)" style={{ margin: '0 auto var(--spacing-xs) auto' }} />
            )}
            <h4 style={{ margin: 0, fontSize: 'var(--font-md)' }}>{isMentor ? `${user.mentees} Anak Didik` : `Peringkat #${user.rank}`}</h4>
            <p className="text-xs text-muted" style={{ margin: '2px 0 0 0' }}>{isMentor ? 'Dibawah bimbinganmu' : 'Dari 120 Siswa Baru'}</p>
          </div>
        </section>

        {/* Galeri Lencana */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ fontSize: 'var(--font-lg)', marginBottom: 'var(--spacing-sm)' }}>Galeri Lencana</h2>
          <p className="text-sm text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>{isMentor ? 'Lencana yang telah kamu raih.' : 'Selesaikan tugas kaderisasi untuk membuka lebih banyak lencana.'}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-sm)' }}>
            {badges.map(badge => (
              <div key={badge.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: badge.earned ? 1 : 0.4 }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: badge.earned ? `${badge.color}20` : 'var(--color-surface)', border: `2px solid ${badge.earned ? badge.color : 'var(--color-border)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: badge.earned ? badge.color : 'var(--color-text-muted)', marginBottom: '8px' }}>
                  {badge.icon}
                </div>
                <span style={{ fontSize: '10px', textAlign: 'center', fontWeight: badge.earned ? 'bold' : 'normal', color: 'var(--color-text)' }}>
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Histori Kegiatan */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 style={{ fontSize: 'var(--font-lg)', marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <History size={20} /> Histori Kegiatan
          </h2>
          <div className="glass-panel" style={{ padding: 'var(--spacing-sm)' }}>
            {history.map((item, index) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: index < history.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <div>
                  <h4 style={{ margin: '0 0 4px 0', fontSize: 'var(--font-sm)' }}>{item.title}</h4>
                  <span className="text-xs text-muted">{item.date}</span>
                </div>
                <strong style={{ color: '#eab308', fontSize: 'var(--font-sm)' }}>{item.points}</strong>
              </div>
            ))}
            <button style={{ width: '100%', padding: '12px', background: 'none', border: 'none', borderTop: '1px solid var(--color-border)', color: 'var(--color-primary)', fontWeight: 'bold', fontSize: 'var(--font-sm)', cursor: 'pointer', marginTop: '4px' }}>
              Lihat Semua Histori
            </button>
          </div>
        </section>

      </div>

      {/* QR Modal for Digital ID */}
      {showQRModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 'var(--spacing-md)' }}>
          <div className="animate-slide-up" style={{ background: 'white', padding: 'var(--spacing-xl)', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '320px', textAlign: 'center' }}>
            <h3 style={{ color: 'black', margin: '0 0 8px 0', fontSize: 'var(--font-lg)' }}>Scan KTA Digital</h3>
            <p style={{ color: 'gray', fontSize: '14px', margin: '0 0 24px 0' }}>Tunjukkan QR Code ini ke Panitia/DP saat mendaftar ulang di lapangan.</p>
            <div style={{ padding: '16px', border: '2px solid var(--color-primary)', borderRadius: '16px', marginBottom: '16px' }}>
              <QrCode size={180} color="var(--color-primary-dark)" />
            </div>
            <strong style={{ display: 'block', color: 'black', fontSize: 'var(--font-md)', marginBottom: '24px' }}>{user.nomorInduk}</strong>
            
            <button onClick={() => setShowQRModal(false)} className="hover-scale" style={{ width: '100%', background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', padding: '12px', borderRadius: 'var(--radius-full)', fontWeight: 'bold', fontSize: 'var(--font-md)', cursor: 'pointer' }}>
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShare && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', padding: 'var(--spacing-lg)', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-lg)' }}>Bagikan KTAM Digital</h3>
              <button onClick={() => setShowShare(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
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
                <div className="hover-scale" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', border: '1px solid var(--color-border)' }}><Link size={24} /></div>
                <span style={{ fontSize: '12px' }}>Salin</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Modal */}
      {showEdit && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', padding: 'var(--spacing-lg)', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', height: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'sticky', top: '-16px', background: 'var(--color-bg)', zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-lg)' }}>Edit Profil Anggota</h3>
              <button onClick={() => setShowEdit(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ position: 'relative' }}>
                <img src={isMentor ? 'https://i.pravatar.cc/150?img=12' : profileImage} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)' }} />
                <button onClick={() => fileInputRef.current.click()} style={{ position: 'absolute', bottom: 0, right: 0, background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }}>
                  <Camera size={16} />
                </button>
                <input type="file" ref={fileInputRef} onChange={handleImageUpload} accept="image/*" style={{ display: 'none' }} />
              </div>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', textAlign: 'center' }}>Ketuk ikon kamera untuk mengubah foto (Maks 2MB)</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', color: 'var(--color-text-muted)' }}>Nama Lengkap</label>
                <input type="text" defaultValue={user.name} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', color: 'var(--color-text-muted)' }}>Asal {isMentor ? 'Sekolah / Pekerjaan' : 'SMP / Sekolah'}</label>
                <input type="text" defaultValue={isMentor ? 'SMAN 3 Bandung' : 'SMPN 5 Bandung'} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', marginBottom: '6px', color: 'var(--color-text-muted)' }}>Bio Singkat</label>
                <textarea rows="3" defaultValue={isMentor ? 'Dewan Pengurus angkatan 2025. Mari jaga dan lestarikan alam bersama Jamadagni!' : 'Calon anggota pecinta alam yang suka mendaki gunung. Salam Rimba!'} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none' }}></textarea>
              </div>
              <button onClick={() => { alert('Profil berhasil diperbarui!'); setShowEdit(false); }} className="hover-scale" style={{ width: '100%', padding: '16px', background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: 'var(--radius-full)', fontWeight: 'bold', fontSize: 'var(--font-md)', cursor: 'pointer', marginTop: '8px' }}>
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}


      <Navigation role={role} />
    </div>
  );
}
