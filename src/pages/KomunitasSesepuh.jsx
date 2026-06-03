import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Users, MessageSquare, Filter, PlusSquare, FileText, CheckCircle2, ThumbsUp, MessageCircle, Share2, Link, Send, X } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useState } from 'react';

export default function KomunitasSesepuh() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [fileCV, setFileCV] = useState('');
  const [chatUser, setChatUser] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleMockSubmit = (e) => {
    e.preventDefault();
    setActiveModal(null);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', padding: 'var(--spacing-md)', paddingBottom: '100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-lg)', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '8px 0', zIndex: 10 }}>
        <button onClick={() => navigate('/sesepuh')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={28} />
        </button>
        <h1 style={{ margin: '0 0 0 16px', fontSize: 'var(--font-xl)', color: 'var(--color-primary)' }}>Komunitas Alumni</h1>
      </div>

      <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>Temukan rekan seangkatan dan jalin koneksi profesional di sini.</p>

      {showSuccess && (
        <div className="animate-slide-up" style={{ position: 'fixed', top: '80px', left: '16px', right: '16px', zIndex: 9999, padding: '16px', background: 'var(--color-primary)', color: 'white', textAlign: 'center', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', fontWeight: 'bold' }}>
          <CheckCircle2 size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
          Tindakan berhasil!
        </div>
      )}

      {/* Tambah/Update Profil Pribadi */}
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <button onClick={() => setActiveModal('updateCV')} style={{ width: '100%', padding: '16px', background: 'var(--color-primary-dark)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <PlusSquare size={20} /> Isi / Perbarui Profil & CV Anda
        </button>
      </div>

      {/* Pencarian & Filter */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: 'var(--spacing-xl)' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <Search size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
          <input type="text" placeholder="Cari nama, angkatan, instansi..." style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} />
        </div>
        <button onClick={() => setActiveModal('filter')} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
          <Filter size={20} />
        </button>
      </div>

      {/* Direktori Anggota */}
      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Users size={24} color="var(--color-primary-dark)" />
          <h2 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Direktori Anggota Aktif</h2>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { nama: 'Dinda (Kang)', angkatan: '2010 (Kabut Rimba)', profesi: 'Software Engineer di Google', lokasi: 'Jakarta' },
            { nama: 'Budi (Teh)', angkatan: '2012 (Angin Barat)', profesi: 'Dokter Umum RS Hasan Sadikin', lokasi: 'Bandung' },
            { nama: 'Andi (Kang)', angkatan: '1998 (Elang Hitam)', profesi: 'Pengusaha F&B', lokasi: 'Bali' },
          ].map((item, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '20px' }}>
                {item.nama[0]}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>{item.nama} <span style={{ fontSize: '14px', color: 'var(--color-primary)', fontWeight: 'normal' }}>• {item.angkatan}</span></h3>
                <p style={{ margin: '0 0 4px 0', color: 'var(--color-text-muted)', fontSize: '14px' }}>{item.profesi}</p>
                <p style={{ margin: 0, fontSize: '12px', color: 'var(--color-text-muted)' }}>📍 {item.lokasi}</p>
              </div>
              <button onClick={() => { setChatUser(item.nama); setActiveModal('chat'); }} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '8px', color: 'var(--color-primary)', cursor: 'pointer' }}>
                <MessageSquare size={18} />
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => { setIsLoadingMore(true); setTimeout(() => setIsLoadingMore(false), 2000); }} style={{ width: '100%', marginTop: '16px', padding: '12px', background: 'transparent', border: '1px solid var(--color-primary)', color: 'var(--color-primary)', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          {isLoadingMore ? 'Memuat data...' : 'Muat Lebih Banyak (Scroll ke bawah)'}
        </button>
      </section>

      {/* Forum Diskusi Ringkas */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare size={24} color="#eab308" />
            <h2 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Forum Diskusi Terbaru</h2>
          </div>
          <button onClick={() => setActiveModal('tulisDiskusi')} style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'transparent', border: 'none', color: '#eab308', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
            <PlusSquare size={18} /> Tulis Baru
          </button>
        </div>
        
        <div className="glass-panel" style={{ padding: '16px', borderLeft: '4px solid #eab308' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Ada info lowongan MT di perusahaan saya</h3>
          <p style={{ margin: '0 0 12px 0', color: 'var(--color-text-muted)', fontSize: '14px' }}>Bagi adik-adik angkatan 2020 ke atas yang baru lulus, kebetulan di kantor sedang buka posisi MT...</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
            <span>Oleh: Kang Reza (2005)</span>
            <span>12 Komentar</span>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
            <button onClick={() => setIsLiked(!isLiked)} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: isLiked ? '#eab308' : 'var(--color-text-muted)', cursor: 'pointer' }}>
              <ThumbsUp size={18} /> {isLiked ? 'Disukai' : 'Suka'}
            </button>
            <button onClick={() => setActiveModal('chat')} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>
              <MessageCircle size={18} /> Balas
            </button>
            <button onClick={() => setActiveModal('share')} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', marginLeft: 'auto' }}>
              <Share2 size={18} /> Bagikan
            </button>
          </div>
        </div>
      </section>

      {/* Update CV Modal */}
      {activeModal === 'updateCV' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '85vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: 'var(--color-bg)', zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-primary-dark)' }}>Isi Template CV / Profil</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: 'var(--color-text)', width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Nama Perusahaan Saat Ini" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} required />
              <input type="text" placeholder="Posisi / Jabatan" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} required />
              <textarea placeholder="Ringkasan Pengalaman Kerja Singkat..." rows="4" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none', fontSize: '16px' }} required></textarea>
              
              <div style={{ border: '1px solid var(--color-border)', borderRadius: '12px', padding: '16px' }}>
                <label style={{ display: 'block', cursor: 'pointer' }}>
                  <span style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>ATAU Unggah File CV (PDF) Lengkap</span>
                  <input type="file" accept=".pdf" style={{ display: 'none' }} onChange={(e) => setFileCV(e.target.files[0]?.name)} />
                  <div style={{ border: '2px dashed var(--color-primary-dark)', padding: '24px', borderRadius: '12px', textAlign: 'center', background: 'var(--color-surface)' }}>
                    {fileCV ? (
                      <CheckCircle2 size={32} style={{ margin: '0 auto 8px auto', color: 'var(--color-primary-dark)' }} />
                    ) : (
                      <FileText size={32} className="text-muted" style={{ margin: '0 auto 8px auto' }} />
                    )}
                    <p style={{ margin: 0, fontSize: '16px' }}>{fileCV ? `Terpilih: ${fileCV}` : 'Ketuk untuk pilih dokumen PDF'}</p>
                  </div>
                </label>
              </div>

              <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary-dark)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '8px' }}>
                Simpan Profil ke Direktori
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Chat / Balas Modal */}
      {activeModal === 'chat' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '60vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-lg)' }}>{chatUser ? `Chat dengan ${chatUser}` : 'Balas Diskusi'}</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: 'var(--color-text)', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><X size={20} /></button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', paddingBottom: '16px' }}>
              <div style={{ background: 'var(--color-surface)', padding: '12px', borderRadius: '12px', borderBottomLeftRadius: 0, alignSelf: 'flex-start', maxWidth: '80%' }}>Halo! Salam kenal ya.</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
              <input type="text" placeholder="Ketik pesan..." style={{ flex: 1, padding: '16px', borderRadius: '24px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)' }} />
              <button onClick={handleMockSubmit} style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-primary-dark)', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {activeModal === 'share' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
          <div className="animate-slide-up glass-panel" style={{ padding: '24px', textAlign: 'center' }}>
            <h3 style={{ margin: '0 0 24px 0' }}>Bagikan ke Sosial Media</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
              <button onClick={handleMockSubmit} style={{ background: '#25D366', color: 'white', border: 'none', padding: '16px', borderRadius: '50%', cursor: 'pointer' }}><MessageCircle size={24} /></button>
              <button onClick={handleMockSubmit} style={{ background: '#1877F2', color: 'white', border: 'none', padding: '16px', borderRadius: '50%', cursor: 'pointer' }}><Users size={24} /></button>
            </div>
            <button onClick={handleMockSubmit} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '12px', cursor: 'pointer' }}>
              <Link size={20} /> Salin Tautan (Copy Link)
            </button>
            <button onClick={() => setActiveModal(null)} style={{ width: '100%', marginTop: '12px', padding: '16px', background: 'transparent', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer' }}>Batal</button>
          </div>
        </div>
      )}

      {/* Tulis Diskusi Modal */}
      {activeModal === 'tulisDiskusi' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: 'var(--color-bg)', zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: '#eab308' }}>Tulis Diskusi Baru</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: 'var(--color-text)', width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Judul Topik Diskusi" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} required />
              <textarea placeholder="Ceritakan ide, pertanyaan, atau info yang ingin dibagikan..." rows="8" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none', fontSize: '16px' }} required></textarea>
              <button type="submit" className="hover-scale" style={{ background: '#eab308', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '8px' }}>
                Unggah Diskusi
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {activeModal === 'filter' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', fontSize: 'var(--font-xl)' }}>Filter Direktori</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="f" /> Berdasarkan Angkatan Terlama</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="f" /> Berdasarkan Angkatan Terbaru</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="radio" name="f" /> Domisili Terdekat</label>
            </div>
            <button onClick={handleMockSubmit} style={{ width: '100%', background: 'var(--color-primary)', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px' }}>Terapkan Filter</button>
          </div>
        </div>
      )}

      <Navigation role="sesepuh" />
    </div>
  );
}
