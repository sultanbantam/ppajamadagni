import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, CreditCard, Bell, CheckCircle2, AlertCircle, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useState } from 'react';

export default function ProfilSesepuh() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="app-container" style={{ minHeight: '100vh', padding: 'var(--spacing-md)', paddingBottom: '100px' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--spacing-lg)', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', padding: '8px 0', zIndex: 10 }}>
        <button onClick={() => navigate('/sesepuh')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={28} />
        </button>
        <h1 style={{ margin: '0 0 0 16px', fontSize: 'var(--font-xl)', color: 'var(--color-primary)' }}>Profil & Iuran</h1>
        <div style={{ flex: 1 }} />
        <button onClick={() => setActiveModal('editProfil')} style={{ background: 'var(--color-surface)', color: 'var(--color-text)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', padding: '8px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <Settings size={20} />
        </button>
      </div>

      {/* Profil Header */}
      <section style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'var(--spacing-xl)' }}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--color-primary)' }}>
          <User size={40} color="var(--color-text-muted)" />
        </div>
        <div>
          <h2 style={{ margin: '0 0 4px 0', fontSize: '24px' }}>Kang Dinda</h2>
          <p style={{ margin: 0, color: 'var(--color-text-muted)' }}>Angkatan 2010 (Kabut Rimba) • NRP: 100456</p>
        </div>
      </section>

      {/* Status Iuran */}
      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <CreditCard size={24} color="var(--color-primary)" />
          <h2 style={{ fontSize: 'var(--font-lg)', margin: 0 }}>Status Iuran Anggota</h2>
        </div>

        <div className="glass-panel" style={{ padding: '20px', border: '1px solid #ef4444', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, background: '#ef4444', color: 'white', padding: '4px 12px', borderBottomLeftRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>
            Belum Lunas
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>Iuran Tahun 2026</h3>
          <p style={{ margin: '0 0 16px 0', color: 'var(--color-text-muted)', fontSize: '14px' }}>Tunggakan: <strong>Rp 120.000</strong> (Rp 10.000 / bulan)</p>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '16px', padding: '12px', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', color: '#ef4444' }}>
            <AlertCircle size={20} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '12px', lineHeight: 1.4 }}>Peringatan Iuran Q2: Anda belum menyelesaikan iuran wajib tahun ini. Mohon segera dilunasi.</span>
          </div>

          <button onClick={() => setActiveModal('donasi')} style={{ width: '100%', padding: '12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
            Bayar Iuran Sekarang
          </button>
        </div>
      </section>

      {/* Riwayat Pembayaran */}
      <section>
        <h2 style={{ fontSize: 'var(--font-lg)', margin: '0 0 16px 0' }}>Riwayat Pembayaran</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 color="#4ade80" size={24} />
              <div>
                <strong style={{ display: 'block' }}>Iuran 2025</strong>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Lunas • 12 Jan 2025</span>
              </div>
            </div>
            <strong style={{ color: '#4ade80' }}>Rp 120.000</strong>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 color="#4ade80" size={24} />
              <div>
                <strong style={{ display: 'block' }}>Iuran 2024</strong>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Lunas • 05 Feb 2024</span>
              </div>
            </div>
            <strong style={{ color: '#4ade80' }}>Rp 120.000</strong>
          </div>
        </div>
      </section>

      {/* Donasi Modal untuk Iuran */}
      {activeModal === 'donasi' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '70vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: 'var(--color-bg)', zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: '#ef4444' }}>Pembayaran Iuran</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: 'var(--color-text)', width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '18px', textAlign: 'center' }}>
              <p>Mohon transfer sejumlah <strong>Rp 120.000</strong> ke rekening bendahara berikut.</p>
              
              <div style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '16px', border: '2px dashed #ef4444' }}>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--color-text-muted)' }}>Bank Mandiri</h4>
                <h2 style={{ margin: '0 0 16px 0', fontSize: '32px', letterSpacing: '2px' }}>130-00-1234567-8</h2>
                <p style={{ margin: 0 }}>a.n. <strong>Bendahara Jamadagni SMAN 3 BDG</strong></p>
              </div>

              <button onClick={() => { setActiveModal(null); setShowSuccess(true); setTimeout(() => setShowSuccess(false), 3000); }} className="hover-scale" style={{ background: '#ef4444', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px' }}>
                Konfirmasi Pembayaran
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profil Modal */}
      {activeModal === 'editProfil' && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: 'var(--color-bg)', zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-primary)' }}>Setting Profil</h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: 'var(--color-text)', width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={(e) => { e.preventDefault(); setActiveModal(null); setShowSuccess(true); setTimeout(() => setShowSuccess(false), 3000); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--color-primary)', cursor: 'pointer' }}>
                  <User size={40} color="var(--color-text-muted)" />
                  <span style={{ position: 'absolute', fontSize: '12px', marginTop: '60px', color: 'var(--color-primary)', fontWeight: 'bold' }}>Ubah Foto</span>
                </div>
              </div>

              <input type="text" defaultValue="Kang Dinda" placeholder="Nama Lengkap / Panggilan" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} />
              <input type="text" defaultValue="2010" placeholder="Tahun Angkatan" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} />
              <input type="text" defaultValue="Kabut Rimba" placeholder="Nama Angkatan" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} />
              <input type="text" defaultValue="100456" placeholder="NRP" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} readOnly />
              <input type="email" defaultValue="dinda@example.com" placeholder="Email Terdaftar" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} />
              
              <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '16px' }}>
                Simpan Profil
              </button>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="animate-slide-up" style={{ position: 'fixed', top: '80px', left: '16px', right: '16px', zIndex: 9999, padding: '16px', background: 'var(--color-primary)', color: 'white', textAlign: 'center', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', fontWeight: 'bold' }}>
          <CheckCircle2 size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
          Tindakan berhasil!
        </div>
      )}

      <Navigation role="sesepuh" />
    </div>
  );
}
