import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, BookOpen, Map, Compass, Award, PlusSquare, Image as ImageIcon, CheckCircle2, Target, Flame, ChevronRight, CheckCircle, Clock, Newspaper, MessageCircle, QrCode, Trophy, UserCheck } from 'lucide-react';

export default function DashboardSiswa() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [beritaTag, setBeritaTag] = useState('');
  const [fileTugas, setFileTugas] = useState('');
  const [fileKilas, setFileKilas] = useState('');
  const [fileBerita, setFileBerita] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    localStorage.setItem('userRole', 'siswa/muda');
  }, []);

  const handleMockSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };
  const [level] = useState(2);
  const [points] = useState(350);

  const pendingTasks = [
    { id: 1, title: 'Tonton Video Sejarah Jamadagni', reward: 50, type: 'video' },
    { id: 2, title: 'Kuis Navigasi Dasar', reward: 100, type: 'quiz' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Latihan Fisik Bersama', date: 'Sabtu, 08:00 WIB', location: 'Lap. Saparua' }
  ];

  return (
    <div className="app-container">
      <div style={{ padding: 'var(--spacing-md)', paddingBottom: '100px' }}>
        
        {/* Top Bar with Back Button */}
        <div style={{ marginBottom: 'var(--spacing-sm)' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)', padding: '8px 0' }}>
            <ArrowLeft size={24} />
            <span style={{ marginLeft: '8px', fontSize: 'var(--font-md)', fontWeight: 500 }}>Kembali</span>
          </button>
        </div>

        {showSuccess && (
          <div style={{ padding: 'var(--spacing-sm)', background: 'var(--color-primary)', color: 'white', textAlign: 'center', marginBottom: 'var(--spacing-md)', borderRadius: 'var(--radius-sm)' }}>
            <CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
            Tugas dan cerita berhasil dikirim!
          </div>
        )}

        {/* Header Profile Summary */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <div>
            <p className="text-muted text-sm">Selamat pagi,</p>
            <h1 style={{ fontSize: 'var(--font-xl)', color: 'var(--color-primary-dark)' }}>Raka Aditya</h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-accent)', fontWeight: 'bold' }}>
              <Flame size={20} /> Level {level}
            </div>
            <p className="text-xs text-muted">{points} Poin Kaderisasi</p>
          </div>
        </header>

        {/* Gamification Banner */}
        <div className="glass-panel animate-slide-up" style={{ padding: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', background: 'linear-gradient(to right, var(--color-primary), var(--color-primary-light))', color: 'white', border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-md)' }}>
            <Award size={48} color="#fde047" />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-lg)' }}>Calon Anggota Tetap</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', marginTop: '8px', marginBottom: '4px' }}>
                <span>Progres Pelantikan</span>
                <strong>70%</strong>
              </div>
              <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '70%', height: '100%', background: '#fde047', borderRadius: '3px' }}></div>
              </div>
              <p className="text-xs" style={{ opacity: 0.9, marginTop: '6px', margin: '6px 0 0 0' }}>Selesaikan 3 tugas lagi untuk lencana "Rimba"!</p>
            </div>
          </div>
        </div>

        {/* Mentor & Leaderboard Row */}
        <div className="animate-slide-up" style={{ display: 'flex', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)', animationDelay: '0.05s' }}>
          
          {/* Mentor Card */}
          <div className="glass-panel hover-scale" style={{ flex: 1, padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <UserCheck size={18} color="var(--color-secondary)" />
              <h4 style={{ margin: 0, fontSize: 'var(--font-sm)' }}>Mentor Kamu</h4>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="https://i.pravatar.cc/100?img=33" alt="Kak Dinda" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--font-md)' }}>Kak Dinda</strong>
                <span className="text-xs text-muted">Alumni 2018</span>
              </div>
            </div>
            <button onClick={() => setShowChat(true)} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)', padding: '6px', borderRadius: 'var(--radius-full)', fontSize: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', marginTop: '4px', cursor: 'pointer' }}>
              <MessageCircle size={12} /> Chat Mentor
            </button>
          </div>

          {/* Leaderboard Card */}
          <div className="glass-panel hover-scale" onClick={() => setShowLeaderboard(true)} style={{ flex: 1, padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer', background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1), rgba(234, 179, 8, 0.05))', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Trophy size={18} color="#eab308" />
              <h4 style={{ margin: 0, fontSize: 'var(--font-sm)', color: '#eab308' }}>Peringkat</h4>
            </div>
            <div style={{ textAlign: 'center', margin: '4px 0' }}>
              <strong style={{ fontSize: '28px', color: '#eab308', lineHeight: 1 }}>#5</strong>
            </div>
            <p className="text-xs text-muted" style={{ margin: 0, textAlign: 'center', lineHeight: 1.2 }}>
              Dari 120 siswa angkatanmu minggu ini!
            </p>
          </div>
          
        </div>

        {/* Pending Tasks (Micro-commitments) */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both', marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
            <h2 style={{ fontSize: 'var(--font-lg)' }}>Tugas Kaderisasi</h2>
            <span style={{ color: 'var(--color-primary)', fontSize: 'var(--font-sm)', fontWeight: 600 }}>Lihat Semua</span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            {pendingTasks.map(task => (
              <div key={task.id} className="glass-panel hover-scale" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--spacing-md)', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
                  <div style={{ color: 'var(--color-secondary)' }}>
                    {task.type === 'video' ? <Target size={24} /> : <CheckCircle size={24} />}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 'var(--font-md)' }}>{task.title}</h4>
                    <p className="text-xs text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                      <Award size={12} /> +{task.reward} Poin
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-muted" />
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both', marginBottom: 'var(--spacing-lg)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
            <h2 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Jadwal Terdekat</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            {upcomingEvents.map(event => (
              <div key={event.id} className="glass-panel" style={{ padding: 'var(--spacing-md)', borderLeft: '4px solid var(--color-accent)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: 'var(--font-md)' }}>{event.title}</h4>
                    <div style={{ display: 'flex', gap: 'var(--spacing-md)', marginTop: '8px' }}>
                      <p className="text-xs text-muted" style={{ display: 'flex', alignItems: 'center', gap: '4px', margin: 0 }}>
                        <Clock size={14} /> {event.date}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => setShowQR(true)} className="hover-scale" style={{ background: 'var(--color-accent)', color: 'white', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }} title="Scan Kehadiran">
                    <QrCode size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form: Unggah Tugas (UGC) */}
        <section className="animate-slide-up" style={{ animationDelay: '0.3s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
            <PlusSquare size={20} color="var(--color-primary)" />
            <h3 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Unggah Bukti Tugas & Cerita</h3>
          </div>
          <p className="text-sm text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>Bagikan foto kegiatanmu ke beranda publik dan ceritakan pengalamanmu.</p>
          
          <form className="glass-panel" onSubmit={handleMockSubmit} style={{ padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <label style={{ display: 'block', cursor: 'pointer' }}>
              <input type="file" style={{ display: 'none' }} onChange={(e) => setFileTugas(e.target.files[0]?.name)} />
              <div style={{ border: '2px dashed var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-md)', textAlign: 'center', background: 'var(--color-surface)' }}>
                {fileTugas ? (
                  <CheckCircle size={32} className="text-accent" style={{ margin: '0 auto var(--spacing-xs) auto', color: 'var(--color-accent)' }} />
                ) : (
                  <ImageIcon size={32} className="text-muted" style={{ margin: '0 auto var(--spacing-xs) auto' }} />
                )}
                <p className="text-sm text-muted" style={{ margin: 0 }}>{fileTugas ? `Terpilih: ${fileTugas}` : 'Ketuk untuk pilih Foto'}</p>
              </div>
            </label>
            <textarea placeholder="Ceritakan pengalamanmu saat mengerjakan tugas ini..." rows="3" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none' }} required></textarea>
            
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--font-sm)', cursor: 'pointer' }}>
              <input type="checkbox" defaultChecked /> Tampilkan cerita di Beranda Publik ("Cerita Mereka")
            </label>

            <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '4px' }}>
              Kirim untuk Diverifikasi
            </button>
          </form>
        </section>

        {/* Form: Unggah Kilas Jamadagni (UGC) */}
        <section className="animate-slide-up" style={{ animationDelay: '0.4s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
            <ImageIcon size={20} color="var(--color-secondary)" />
            <h3 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Unggah Kilas Jamadagni</h3>
          </div>
          <p className="text-sm text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>Punya dokumentasi foto/video seru? Bagikan ke beranda publik!</p>
          
          <form className="glass-panel" onSubmit={handleMockSubmit} style={{ padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <label style={{ display: 'block', cursor: 'pointer' }}>
              <input type="file" style={{ display: 'none' }} onChange={(e) => setFileKilas(e.target.files[0]?.name)} />
              <div style={{ border: '2px dashed var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-md)', textAlign: 'center', background: 'var(--color-surface)' }}>
                {fileKilas ? (
                  <CheckCircle size={32} className="text-secondary" style={{ margin: '0 auto var(--spacing-xs) auto', color: 'var(--color-secondary)' }} />
                ) : (
                  <ImageIcon size={32} className="text-muted" style={{ margin: '0 auto var(--spacing-xs) auto' }} />
                )}
                <p className="text-sm text-muted" style={{ margin: 0 }}>{fileKilas ? `Terpilih: ${fileKilas}` : 'Ketuk untuk pilih Foto/Video'}</p>
              </div>
            </label>
            <input type="text" placeholder="Deskripsi Singkat Acara..." style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
            <button type="submit" className="hover-scale" style={{ background: 'var(--color-secondary)', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <ImageIcon size={18} /> Unggah ke Beranda Publik
            </button>
          </form>
        </section>

        {/* Form: Tulis Berita (UGC) */}
        <section className="animate-slide-up" style={{ animationDelay: '0.5s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
            <Newspaper size={20} color="var(--color-accent)" />
            <h3 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Tulis Berita / Artikel</h3>
          </div>
          <p className="text-sm text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>Publikasikan kegiatan, tips, atau laporan acara ke Berita Publik.</p>
          
          <form className="glass-panel" onSubmit={handleMockSubmit} style={{ padding: 'var(--spacing-md)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
            <label style={{ display: 'block', cursor: 'pointer' }}>
              <input type="file" style={{ display: 'none' }} onChange={(e) => setFileBerita(e.target.files[0]?.name)} />
              <div style={{ border: '2px dashed var(--color-border)', padding: 'var(--spacing-xl)', borderRadius: 'var(--radius-md)', textAlign: 'center', background: 'var(--color-surface)' }}>
                {fileBerita ? (
                  <CheckCircle size={32} className="text-accent" style={{ margin: '0 auto var(--spacing-xs) auto', color: 'var(--color-accent)' }} />
                ) : (
                  <ImageIcon size={32} className="text-muted" style={{ margin: '0 auto var(--spacing-xs) auto' }} />
                )}
                <p className="text-sm text-muted" style={{ margin: 0 }}>{fileBerita ? `Terpilih: ${fileBerita}` : 'Ketuk untuk pilih Foto/Video Berita'}</p>
              </div>
            </label>
            <input type="text" placeholder="Judul Berita..." style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
            <select value={beritaTag} onChange={(e) => setBeritaTag(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required>
              <option value="" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>Pilih Kategori/Tagar...</option>
              <option value="#Ekspedisi" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>#Ekspedisi</option>
              <option value="#LatihanFisik" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>#LatihanFisik</option>
              <option value="#BaktiSosial" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>#BaktiSosial</option>
              <option value="#TipsGunung" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>#TipsGunung</option>
              <option value="Lainnya" style={{ background: 'var(--color-surface)', color: 'var(--color-text)' }}>Lainnya...</option>
            </select>
            {beritaTag === 'Lainnya' && (
              <input type="text" placeholder="Tulis Tagar Baru (misal: #Reuni)" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
            )}
            <textarea placeholder="Isi berita singkat..." rows="3" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none' }} required></textarea>
            <button type="submit" className="hover-scale" style={{ background: 'var(--color-accent)', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Newspaper size={18} /> Publikasikan Berita
            </button>
          </form>
        </section>

      </div>
      
      <Navigation role="siswa/muda" />

      {/* Modals */}
      {showChat && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', height: '70vh', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 'var(--spacing-md)', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src="https://i.pravatar.cc/100?img=33" alt="Kak Dinda" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <h3 style={{ margin: 0, fontSize: 'var(--font-md)' }}>Kak Dinda</h3>
                  <span className="text-xs text-muted">Online</span>
                </div>
              </div>
              <button onClick={() => setShowChat(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
            <div style={{ flex: 1, padding: 'var(--spacing-md)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ alignSelf: 'flex-start', background: 'var(--color-surface)', padding: '10px 14px', borderRadius: '16px', borderTopLeftRadius: 0, maxWidth: '80%' }}>
                <p style={{ margin: 0, fontSize: 'var(--font-sm)', color: 'var(--color-text)' }}>Halo Raka! Selamat bergabung. Ada kesulitan sama tugas navigasi?</p>
                <span style={{ fontSize: '10px', color: 'var(--color-text-muted)', display: 'block', marginTop: '4px', textAlign: 'right' }}>09:00</span>
              </div>
            </div>
            <div style={{ padding: 'var(--spacing-md)', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '8px' }}>
              <input type="text" placeholder="Ketik pesan..." style={{ flex: 1, padding: '12px', borderRadius: 'var(--radius-full)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} />
              <button style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--color-primary)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <MessageCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {showLeaderboard && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', height: '70vh', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 'var(--spacing-md)', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><Trophy color="#eab308" /> Papan Peringkat</h3>
              <button onClick={() => setShowLeaderboard(false)} style={{ background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
            </div>
            <div style={{ flex: 1, padding: 'var(--spacing-md)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { rank: 1, name: 'Budi Santoso', points: 450, isMe: false },
                { rank: 2, name: 'Siti Aminah', points: 420, isMe: false },
                { rank: 3, name: 'Agus Pratama', points: 390, isMe: false },
                { rank: 4, name: 'Dewi Lestari', points: 370, isMe: false },
                { rank: 5, name: 'Raka Aditya', points: 350, isMe: true },
              ].map(user => (
                <div key={user.rank} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: user.isMe ? 'rgba(37, 99, 235, 0.1)' : 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: user.isMe ? '1px solid var(--color-primary)' : '1px solid var(--color-border)' }}>
                  <div style={{ width: '28px', textAlign: 'center', fontWeight: 'bold', color: user.rank <= 3 ? '#eab308' : 'var(--color-text-muted)' }}>#{user.rank}</div>
                  <img src={`https://i.pravatar.cc/100?img=${user.rank + 10}`} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="Avatar" />
                  <div style={{ flex: 1 }}>
                    <strong style={{ display: 'block' }}>{user.name} {user.isMe && '(Kamu)'}</strong>
                  </div>
                  <strong style={{ color: 'var(--color-primary)' }}>{user.points} pt</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showQR && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setShowQR(false)} style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', fontSize: '32px', cursor: 'pointer' }}>&times;</button>
          <div style={{ background: 'white', padding: '24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ color: 'black', margin: '0 0 16px 0' }}>Scan Kehadiran</h3>
            <div style={{ width: '200px', height: '200px', border: '4px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', width: '100%', height: '2px', background: 'red', top: '50%', transform: 'translateY(-50%)', animation: 'scan 2s infinite' }}></div>
              <style>{`@keyframes scan { 0% { top: 0% } 50% { top: 100% } 100% { top: 0% } }`}</style>
              <QrCode size={100} color="black" />
            </div>
            <p style={{ color: 'gray', marginTop: '16px', fontSize: '14px', margin: '16px 0 0 0' }}>Arahkan kamera ke QR Code Pembina</p>
          </div>
        </div>
      )}

    </div>
  );
}
