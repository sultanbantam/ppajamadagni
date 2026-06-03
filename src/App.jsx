import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Onboarding from './pages/Onboarding';
import DashboardSiswa from './pages/DashboardSiswa';
import DashboardNonAnggota from './pages/DashboardNonAnggota';
import DashboardAnggotaTetap from './pages/DashboardAnggotaTetap';
import DashboardSesepuh from './pages/DashboardSesepuh';
import BeritaPublik from './pages/BeritaPublik';
import InfoPendaftaran from './pages/InfoPendaftaran';
import JadwalKegiatan from './pages/JadwalKegiatan';
import ModulBelajar from './pages/ModulBelajar';
import ProfilAnggota from './pages/ProfilAnggota';
import Navigation from './components/Navigation';
import { useEffect } from 'react';

// New Sesepuh Pages
import KomunitasSesepuh from './pages/KomunitasSesepuh';
import BantuanSesepuh from './pages/BantuanSesepuh';
import ProfilSesepuh from './pages/ProfilSesepuh';

// Mock Protected Route component
const ProtectedRoute = ({ children, allowedRolePrefix }) => {
  const userRole = localStorage.getItem('userRole'); // e.g. 'siswa/muda', 'sesepuh'
  
  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  // Very basic mock check for prototype
  // If prefix is 'siswa', allow 'siswa/muda', 'siswa/tetap', 'siswa/non'
  // If prefix is 'sesepuh', allow only 'sesepuh'
  if (!userRole.startsWith(allowedRolePrefix)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

// Dummy components for other routes
const DummyPage = ({ title, role, backTo }) => {
  const navigate = useNavigate();
  // if backTo is provided, use it. if role is provided, go to /${role}. else go back.
  const targetPath = backTo || (role ? `/${role}` : -1);
  return (
    <div className="app-container" style={{ minHeight: '100vh', padding: 'var(--spacing-md)' }}>
      {/* Top Bar with Back Button */}
      <div style={{ marginBottom: 'var(--spacing-xl)' }}>
        <button onClick={() => navigate(targetPath)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)', padding: '8px 0' }}>
          <ArrowLeft size={24} />
          <span style={{ marginLeft: '8px', fontSize: 'var(--font-md)', fontWeight: 500 }}>Kembali</span>
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '60vh' }}>
        <h1 style={{ textAlign: 'center', margin: '0 20px' }}>{title}</h1>
        <p className="text-muted" style={{ marginTop: 'var(--spacing-md)' }}>Halaman ini sedang dalam pengembangan.</p>
      </div>
      <Navigation role={role} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        
        {/* Siswa Routes */}
        <Route path="/siswa/non" element={<ProtectedRoute allowedRolePrefix="siswa/non"><DashboardNonAnggota /></ProtectedRoute>} />
        <Route path="/siswa/muda" element={<ProtectedRoute allowedRolePrefix="siswa/muda"><DashboardSiswa /></ProtectedRoute>} />
        <Route path="/siswa/tetap" element={<ProtectedRoute allowedRolePrefix="siswa/tetap"><DashboardAnggotaTetap /></ProtectedRoute>} />
        
        {/* Siswa Features (Muda) */}
        <Route path="/siswa/kegiatan" element={<ProtectedRoute allowedRolePrefix="siswa"><JadwalKegiatan /></ProtectedRoute>} />
        <Route path="/siswa/belajar" element={<ProtectedRoute allowedRolePrefix="siswa"><ModulBelajar /></ProtectedRoute>} />
        <Route path="/siswa/profil" element={<ProtectedRoute allowedRolePrefix="siswa"><ProfilAnggota /></ProtectedRoute>} />

        {/* Siswa Features (Non Anggota) */}
        <Route path="/siswa/berita" element={<ProtectedRoute allowedRolePrefix="siswa"><BeritaPublik /></ProtectedRoute>} />
        <Route path="/siswa/info" element={<ProtectedRoute allowedRolePrefix="siswa"><InfoPendaftaran /></ProtectedRoute>} />
        
        {/* Sesepuh Routes */}
        <Route path="/sesepuh" element={<ProtectedRoute allowedRolePrefix="sesepuh"><DashboardSesepuh /></ProtectedRoute>} />
        <Route path="/sesepuh/komunitas" element={<ProtectedRoute allowedRolePrefix="sesepuh"><KomunitasSesepuh /></ProtectedRoute>} />
        <Route path="/sesepuh/bantuan" element={<ProtectedRoute allowedRolePrefix="sesepuh"><BantuanSesepuh /></ProtectedRoute>} />
        <Route path="/sesepuh/profil" element={<ProtectedRoute allowedRolePrefix="sesepuh"><ProfilSesepuh /></ProtectedRoute>} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
