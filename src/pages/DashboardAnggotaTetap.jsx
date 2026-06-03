import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, PlusSquare, Image as ImageIcon, HelpCircle, Users, Calendar as CalendarIcon, CheckCircle2, Quote, Newspaper, QrCode, Check, X, ChevronRight, Award, Trophy } from 'lucide-react';

export default function DashboardAnggotaTetap() {
  const navigate = useNavigate();
  const [showQR, setShowQR] = useState(false);
  const [showContentModal, setShowContentModal] = useState(false);
  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    localStorage.setItem('userRole', 'siswa/tetap');
  }, []);

  const handleMockSubmit = (e) => {
    e.preventDefault();
    alert('Konten berhasil diunggah dan menunggu moderasi!');
    setActiveForm(null);
    setShowContentModal(false);
  };

  // Mock data for tasks needing validation
  const [pendingTasks, setPendingTasks] = useState([
    { id: 1, name: 'Raka Aditya', task: 'Upload Foto Packing Carrier', time: '10 menit yang lalu' },
    { id: 2, name: 'Budi Santoso', task: 'Kuis Navigasi Dasar', time: '1 jam yang lalu' }
  ]);

  const handleApprove = (id) => {
    setPendingTasks(pendingTasks.filter(t => t.id !== id));
    // Toast notification "Tugas disetujui! +10 Poin Mentor"
  };

  const handleReject = (id) => {
    setPendingTasks(pendingTasks.filter(t => t.id !== id));
  };

  return (
    <div className="app-container" style={{ paddingBottom: 'calc(var(--spacing-xl) * 4)' }}>
      {/* Header */}
      <header style={{ padding: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'var(--color-bg)', zIndex: 10, borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)', padding: '8px 0' }}>
            <ArrowLeft size={24} />
          </button>
          <img src="https://i.pravatar.cc/150?img=12" alt="DP Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--color-primary)' }} />
          <div>
            <h1 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Kak Dinda</h1>
            <p className="text-sm" style={{ margin: 0, color: 'var(--color-primary)' }}>1,250 Poin Mentor</p>
          </div>
        </div>
        <button onClick={() => setShowQR(true)} className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', borderRadius: '50%', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-md)' }}>
          <QrCode size={24} />
        </button>
      </header>

      <div style={{ padding: 'var(--spacing-md)' }}>
        
        {/* Validasi Tugas */}
        <section className="animate-slide-up" style={{ marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
            <h2 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Validasi Tugas ({pendingTasks.length})</h2>
          </div>
          
          {pendingTasks.length === 0 ? (
            <div style={{ background: 'var(--color-surface)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px dashed var(--color-border)' }}>
              <CheckCircle2 size={32} color="var(--color-primary)" style={{ margin: '0 auto 8px auto' }} />
              <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Semua tugas sudah divalidasi!</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {pendingTasks.map(task => (
                <div key={task.id} className="glass-panel animate-slide-up" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '14px' }}>{task.name}</strong>
                      <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{task.time}</span>
                    </div>
                  </div>
                  <div style={{ background: 'var(--color-bg)', padding: '12px', borderRadius: '8px', fontSize: '14px' }}>
                    Menyelesaikan: <strong>{task.task}</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleApprove(task.id)} className="hover-scale" style={{ flex: 1, background: '#25D366', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                      <Check size={18} /> Setujui
                    </button>
                    <button onClick={() => handleReject(task.id)} className="hover-scale" style={{ flex: 1, background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
                      <X size={18} /> Tolak
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Pantau Anak Didik */}
        <section className="animate-slide-up" style={{ animationDelay: '0.1s', marginBottom: 'var(--spacing-xl)' }}>
          <h2 style={{ fontSize: 'var(--font-md)', margin: '0 0 var(--spacing-sm) 0' }}>Anak Didik (Mentee)</h2>
          <div className="glass-panel" style={{ padding: 'var(--spacing-md)' }}>
            
            {/* Mentee Item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="https://i.pravatar.cc/150?img=11" alt="Raka" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '14px' }}>Raka Aditya</strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-primary)' }}>80%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--color-surface)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '80%', height: '100%', background: 'var(--color-primary)' }}></div>
                </div>
              </div>
              <ChevronRight size={20} color="var(--color-text-muted)" />
            </div>

            {/* Mentee Item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="https://i.pravatar.cc/150?img=3" alt="Budi" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <strong style={{ fontSize: '14px' }}>Budi Santoso</strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-secondary)' }}>45%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'var(--color-surface)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: '45%', height: '100%', background: 'var(--color-secondary)' }}></div>
                </div>
              </div>
              <ChevronRight size={20} color="var(--color-text-muted)" />
            </div>

          </div>
        </section>

        {/* Klasemen Mentor */}
        <section className="animate-slide-up" style={{ animationDelay: '0.2s', marginBottom: 'var(--spacing-xl)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'var(--spacing-sm)' }}>
            <Trophy size={20} color="#FFD700" />
            <h2 style={{ fontSize: 'var(--font-md)', margin: 0 }}>Top 3 Mentor Bulan Ini</h2>
          </div>
          <div className="glass-panel" style={{ padding: '0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: 'bold', width: '20px', color: '#FFD700' }}>#1</span>
                <span>Kak Reza</span>
              </div>
              <strong style={{ color: 'var(--color-primary)' }}>1,500 Pts</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.05)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: 'bold', width: '20px', color: '#C0C0C0' }}>#2</span>
                <span>Kamu (Kak Dinda)</span>
              </div>
              <strong style={{ color: 'var(--color-primary)' }}>1,250 Pts</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontWeight: 'bold', width: '20px', color: '#CD7F32' }}>#3</span>
                <span>Kak Tio</span>
              </div>
              <strong style={{ color: 'var(--color-primary)' }}>980 Pts</strong>
            </div>
          </div>
        </section>

      </div>

      {/* Floating Action Button for Content Creation */}
      <div style={{ position: 'fixed', bottom: '80px', right: '16px', zIndex: 50 }}>
        <button onClick={() => setShowContentModal(true)} className="hover-scale" style={{ background: 'var(--color-secondary)', color: 'white', border: 'none', borderRadius: '50%', width: '56px', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 8px 16px rgba(0,0,0,0.3)' }}>
          <PlusSquare size={24} />
        </button>
      </div>

      {/* QR Scanner Modal */}
      {showQR && (
        <div style={{ position: 'fixed', inset: 0, background: 'black', zIndex: 9999, display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
            <h3 style={{ color: 'white', margin: 0 }}>Scan KTA Digital (AM)</h3>
            <button onClick={() => setShowQR(false)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer' }}>&times;</button>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <div style={{ width: '250px', height: '250px', border: '2px solid var(--color-primary)', position: 'relative' }}>
              <div className="scan-line" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'red', boxShadow: '0 0 10px red' }}></div>
            </div>
            <p style={{ position: 'absolute', bottom: '20%', color: 'white', textAlign: 'center' }}>Arahkan kamera ke QR Code Anggota Muda</p>
          </div>
        </div>
      )}

      {/* Modal Buat Konten */}
      {showContentModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', padding: 'var(--spacing-lg)', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'sticky', top: '-16px', background: 'var(--color-bg)', zIndex: 2, paddingBottom: '8px', borderBottom: activeForm ? '1px solid var(--color-border)' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {activeForm && (
                  <button onClick={() => setActiveForm(null)} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%' }}>
                    <ArrowLeft size={20} />
                  </button>
                )}
                <h3 style={{ margin: 0, fontSize: 'var(--font-lg)' }}>
                  {activeForm === 'kuis' ? 'Buat Kuis' :
                   activeForm === 'kilas' ? 'Unggah Kilas' :
                   activeForm === 'berita' ? 'Tulis Berita' :
                   activeForm === 'cerita' ? 'Bagi Cerita' : 'Buat Konten Baru'}
                </h3>
              </div>
              <button onClick={() => { setActiveForm(null); setShowContentModal(false); }} style={{ background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '32px', cursor: 'pointer', lineHeight: 1 }}>
                &times;
              </button>
            </div>
            
            {!activeForm ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div onClick={() => setActiveForm('kuis')} className="hover-scale" style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                  <HelpCircle size={32} color="var(--color-primary)" style={{ margin: '0 auto 8px auto' }} />
                  <strong style={{ fontSize: '14px' }}>Buat Kuis</strong>
                </div>
                <div onClick={() => setActiveForm('kilas')} className="hover-scale" style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                  <ImageIcon size={32} color="var(--color-secondary)" style={{ margin: '0 auto 8px auto' }} />
                  <strong style={{ fontSize: '14px' }}>Unggah Kilas</strong>
                </div>
                <div onClick={() => setActiveForm('berita')} className="hover-scale" style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                  <Newspaper size={32} color="var(--color-accent)" style={{ margin: '0 auto 8px auto' }} />
                  <strong style={{ fontSize: '14px' }}>Tulis Berita</strong>
                </div>
                <div onClick={() => setActiveForm('cerita')} className="hover-scale" style={{ background: 'var(--color-surface)', padding: '16px', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--color-border)', cursor: 'pointer' }}>
                  <Quote size={32} color="#E1306C" style={{ margin: '0 auto 8px auto' }} />
                  <strong style={{ fontSize: '14px' }}>Kirim Cerita</strong>
                </div>
              </div>
            ) : (
              <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {activeForm === 'kuis' && (
                  <>
                    <input type="text" placeholder="Judul Kuis (misal: Tebak Jejak Hewan)" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
                    <textarea placeholder="Pertanyaan Kuis..." rows="3" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none' }} required></textarea>
                    <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--radius-full)', cursor: 'pointer', fontWeight: 'bold' }}>Kirim Kuis</button>
                  </>
                )}
                {activeForm === 'kilas' && (
                  <>
                    <div style={{ border: '2px dashed var(--color-border)', padding: '32px', borderRadius: '12px', textAlign: 'center', cursor: 'pointer' }}>
                      <ImageIcon size={32} style={{ margin: '0 auto 8px auto', opacity: 0.5 }} />
                      <span style={{ fontSize: '14px', opacity: 0.7 }}>Ketuk untuk pilih Foto/Video</span>
                    </div>
                    <input type="text" placeholder="Deskripsi Singkat Acara..." style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
                    <button type="submit" className="hover-scale" style={{ background: 'var(--color-secondary)', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--radius-full)', cursor: 'pointer', fontWeight: 'bold' }}>Unggah ke Beranda Publik</button>
                  </>
                )}
                {activeForm === 'berita' && (
                  <>
                    <input type="text" placeholder="Judul Berita..." style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} required />
                    <textarea placeholder="Isi berita lengkap..." rows="5" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none' }} required></textarea>
                    <button type="submit" className="hover-scale" style={{ background: 'var(--color-accent)', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--radius-full)', cursor: 'pointer', fontWeight: 'bold' }}>Publikasikan Berita</button>
                  </>
                )}
                {activeForm === 'cerita' && (
                  <>
                    <textarea placeholder="Ceritakan pengalaman inspiratif Anda..." rows="4" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none' }} required></textarea>
                    <button type="submit" className="hover-scale" style={{ background: '#E1306C', color: 'white', border: 'none', padding: '12px', borderRadius: 'var(--radius-full)', cursor: 'pointer', fontWeight: 'bold' }}>Kirim Cerita</button>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      )}
      
      <Navigation role="siswa/tetap" />
    </div>
  );
}
