import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Info, Users, HelpCircle, ChevronRight, MessageSquare, Edit3, CheckCircle2 } from 'lucide-react';
import Navigation from '../components/Navigation';
import { useState } from 'react';

export default function BantuanSesepuh() {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

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
        <h1 style={{ margin: '0 0 0 16px', fontSize: 'var(--font-xl)', color: 'var(--color-secondary)' }}>Info & Bantuan</h1>
      </div>

      <p className="text-muted" style={{ marginBottom: 'var(--spacing-md)' }}>Kenali sejarah Jamadagni, susunan pengurus, dan pusat bantuan teknis aplikasi.</p>
      
      {showSuccess && (
        <div className="animate-slide-up" style={{ position: 'fixed', top: '80px', left: '16px', right: '16px', zIndex: 9999, padding: '16px', background: 'var(--color-primary)', color: 'white', textAlign: 'center', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', fontWeight: 'bold' }}>
          <CheckCircle2 size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }} />
          Pembaruan berhasil disimpan!
        </div>
      )}

      {/* Sejarah & Organisasi */}
      <section style={{ marginBottom: 'var(--spacing-xl)' }}>
        <h2 style={{ fontSize: 'var(--font-lg)', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen size={24} color="var(--color-primary)" />
          Tentang Jamadagni
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button onClick={() => setActiveModal('editSejarah')} className="glass-panel hover-scale" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--color-border)', cursor: 'pointer', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'var(--color-surface)', padding: '12px', borderRadius: '12px' }}>
                <Info size={24} color="var(--color-primary)" />
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: 'var(--color-text)' }}>Sejarah Jamadagni</h3>
                <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Berdiri sejak 1965 di SMAN 3 BDG</span>
              </div>
            </div>
            <Edit3 color="var(--color-primary)" size={20} />
          </button>

          <button onClick={() => setActiveModal('editOrganisasi')} className="glass-panel hover-scale" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid var(--color-border)', cursor: 'pointer', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'var(--color-surface)', padding: '12px', borderRadius: '12px' }}>
                <Users size={24} color="var(--color-secondary)" />
              </div>
              <div>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', color: 'var(--color-text)' }}>Susunan Dewan Pengurus</h3>
                <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Periode 2025 - 2027</span>
              </div>
            </div>
            <Edit3 color="var(--color-secondary)" size={20} />
          </button>
        </div>
      </section>

      {/* Pusat Bantuan Teknis */}
      <section>
        <h2 style={{ fontSize: 'var(--font-lg)', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <HelpCircle size={24} color="var(--color-accent)" />
          Pusat Bantuan
        </h2>
        
        <div className="glass-panel" style={{ padding: '16px', marginBottom: '12px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Bagaimana cara membayar Iuran?</h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Silakan buka tab 'Profil' di navigasi bawah untuk melihat status iuran Anda dan nomor rekening pembayaran.</p>
        </div>

        <div className="glass-panel" style={{ padding: '16px', marginBottom: '12px' }}>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>Lupa Nomor Registrasi Pokok (NRP)?</h3>
          <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Silakan hubungi Admin IT Jamadagni melalui grup WhatsApp di bawah ini untuk verifikasi ulang identitas.</p>
        </div>

        <a href="https://chat.whatsapp.com/GrupJamadagniPPA" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', width: '100%', padding: '16px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text)', borderRadius: '12px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
          <MessageSquare size={20} />
          Grup WhatsApp PPA Jamadagni
        </a>
      </section>

      {/* Edit Modal */}
      {(activeModal === 'editSejarah' || activeModal === 'editOrganisasi') && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div className="animate-slide-up" style={{ background: 'var(--color-bg)', color: 'var(--color-text)', padding: 'var(--spacing-xl)', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', height: '80vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', position: 'sticky', top: '-24px', background: 'var(--color-bg)', zIndex: 2, paddingBottom: '16px' }}>
              <h3 style={{ margin: 0, fontSize: 'var(--font-xl)', color: 'var(--color-primary)' }}>
                {activeModal === 'editSejarah' ? 'Edit Sejarah Jamadagni' : 'Edit Susunan Pengurus'}
              </h3>
              <button onClick={() => setActiveModal(null)} style={{ background: 'var(--color-surface)', border: 'none', color: 'var(--color-text)', width: '40px', height: '40px', borderRadius: '50%', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>&times;</button>
            </div>
            
            <form onSubmit={handleMockSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {activeModal === 'editSejarah' ? (
                <>
                  <input type="text" defaultValue="Berdiri sejak 1965 di SMAN 3 BDG" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} />
                  <textarea rows="8" defaultValue="Tulis sejarah lengkap di sini..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none', fontSize: '16px' }}></textarea>
                </>
              ) : (
                <>
                  <input type="text" defaultValue="Periode 2025 - 2027" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: '16px' }} />
                  <textarea rows="8" defaultValue="- Ketua Umum: ...&#10;- Sekretaris: ...&#10;- Bendahara: ..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text)', resize: 'none', fontSize: '16px' }}></textarea>
                </>
              )}

              <button type="submit" className="hover-scale" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '20px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '20px', marginTop: '8px' }}>
                Simpan Perubahan
              </button>
            </form>
          </div>
        </div>
      )}

      <Navigation role="sesepuh" />
    </div>
  );
}
