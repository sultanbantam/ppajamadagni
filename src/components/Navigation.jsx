import { NavLink } from 'react-router-dom';
import { Home, Calendar, BookOpen, Users, User, Info, Newspaper } from 'lucide-react';

export default function Navigation({ role = 'siswa' }) {
  const isSesepuh = role === 'sesepuh';
  
  // Normalize the role string to extract the base category (e.g., 'siswa/muda' -> 'siswa')
  const baseCategory = role.split('/')[0];

  const siswaLinks = [
    { to: `/${role}`, icon: <Home size={24} />, label: 'Beranda' },
    { to: `/${baseCategory}/kegiatan`, icon: <Calendar size={24} />, label: 'Kegiatan' },
    { to: `/${baseCategory}/belajar`, icon: <BookOpen size={24} />, label: 'Belajar' },
    { to: `/${baseCategory}/profil`, icon: <User size={24} />, label: 'Profil' },
  ];

  const sesepuhLinks = [
    { to: '/sesepuh', icon: <Home size={28} />, label: 'Beranda' },
    { to: '/sesepuh/komunitas', icon: <Users size={28} />, label: 'Komunitas' },
    { to: '/sesepuh/bantuan', icon: <Info size={28} />, label: 'Bantuan' },
    { to: '/sesepuh/profil', icon: <User size={28} />, label: 'Profil' },
  ];

  const nonAnggotaLinks = [
    { to: '/siswa/non', icon: <Home size={24} />, label: 'Beranda' },
    { to: '/siswa/berita', icon: <Newspaper size={24} />, label: 'Berita' },
    { to: '/siswa/info', icon: <Info size={24} />, label: 'Info' },
  ];

  let links = siswaLinks;
  if (isSesepuh) links = sesepuhLinks;
  if (role === 'siswa/non') links = nonAnggotaLinks;

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: isSesepuh ? 'var(--color-surface)' : 'var(--glass-bg)',
      backdropFilter: isSesepuh ? 'none' : 'blur(12px)',
      borderTop: '1px solid var(--color-border)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: 'var(--spacing-sm) 0',
      paddingBottom: 'calc(var(--spacing-sm) + env(safe-area-inset-bottom, 0px))',
      zIndex: 1000,
      maxWidth: '480px',
      margin: '0 auto',
      boxShadow: '0 -4px 6px -1px rgb(0 0 0 / 0.05)'
    }}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end
          style={({ isActive }) => ({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textDecoration: 'none',
            color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
            padding: 'var(--spacing-xs) var(--spacing-sm)',
            minWidth: '64px',
            minHeight: 'var(--min-touch-target)',
            justifyContent: 'center',
            transition: 'color 0.2s, transform 0.2s',
            transform: isActive ? 'translateY(-2px)' : 'none'
          })}
        >
          {link.icon}
          <span style={{ 
            fontSize: isSesepuh ? 'var(--font-sm)' : 'var(--font-xs)', 
            marginTop: '4px',
            fontWeight: 500
          }}>
            {link.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
