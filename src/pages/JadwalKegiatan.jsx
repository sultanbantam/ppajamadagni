import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowLeft, Calendar, MapPin, Award, CheckCircle2, Users, Filter, Clock } from 'lucide-react';

export default function JadwalKegiatan() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [registeredEvents, setRegisteredEvents] = useState({});
  const role = localStorage.getItem('userRole') || 'siswa/muda';

  const filters = ['Semua', 'Latihan', 'Ekspedisi', 'Sosial'];

  const events = [
    {
      id: 1,
      title: 'Latihan Fisik Bersama',
      date: 'Sabtu, 14 Okt 2026',
      time: '08:00 WIB',
      location: 'Lap. Saparua',
      type: 'Latihan',
      points: 100,
      attendees: 45,
      description: 'Latihan fisik rutin untuk menjaga stamina. Bawa pakaian olahraga dan air minum yang cukup.'
    },
    {
      id: 2,
      title: 'Ekspedisi Gn. Manglayang',
      date: 'Sabtu-Minggu, 28-29 Okt 2026',
      time: '06:00 WIB',
      location: 'Camp Ground Manglayang',
      type: 'Ekspedisi',
      points: 500,
      attendees: 24,
      description: 'Pendidikan dasar survival dan navigasi darat. Wajib membawa perlengkapan standar.'
    },
    {
      id: 3,
      title: 'Jumat Bersih Lingkungan',
      date: 'Jumat, 03 Nov 2026',
      time: '15:30 WIB',
      location: 'Area SMAN 3 Bandung',
      type: 'Sosial',
      points: 50,
      attendees: 12,
      description: 'Kegiatan gotong royong membersihkan area sekolah. Alat kebersihan disediakan.'
    }
  ];

  const filteredEvents = activeFilter === 'Semua' ? events : events.filter(e => e.type === activeFilter);

  const toggleRegister = (id) => {
    setRegisteredEvents(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="app-container" style={{ paddingBottom: 'calc(var(--spacing-xl) * 3)' }}>
      {/* Header */}
      <header style={{ padding: 'var(--spacing-md)', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)', position: 'sticky', top: 0, background: 'var(--glass-bg)', backdropFilter: 'blur(12px)', zIndex: 10, borderBottom: '1px solid var(--color-border)' }}>
        <button onClick={() => navigate('/' + role)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--color-text)' }}>
          <ArrowLeft size={24} />
        </button>
        <h1 style={{ fontSize: 'var(--font-lg)', margin: 0, flex: 1 }}>Jadwal Kegiatan</h1>
      </header>

      <div style={{ padding: 'var(--spacing-md)' }}>
        
        {/* Filters */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: 'var(--spacing-md)' }} className="hide-scrollbar">
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 8px', color: 'var(--color-text-muted)' }}>
            <Filter size={16} />
          </div>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className="hover-scale"
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                whiteSpace: 'nowrap',
                fontWeight: 600,
                fontSize: 'var(--font-sm)',
                cursor: 'pointer',
                background: activeFilter === filter ? 'var(--color-primary)' : 'var(--color-surface)',
                color: activeFilter === filter ? 'white' : 'var(--color-text)',
                border: activeFilter === filter ? '1px solid var(--color-primary)' : '1px solid var(--color-border)'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Event List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          {filteredEvents.map((event, index) => {
            const isRegistered = registeredEvents[event.id];
            
            // Badge color based on type
            let badgeColor = 'var(--color-primary)';
            if (event.type === 'Ekspedisi') badgeColor = 'var(--color-accent)';
            if (event.type === 'Sosial') badgeColor = 'var(--color-secondary)';

            return (
              <div key={event.id} className="glass-panel animate-slide-up" style={{ animationDelay: `${index * 0.1}s`, overflow: 'hidden' }}>
                <div style={{ background: badgeColor, color: 'white', padding: '4px 12px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', display: 'inline-block', borderBottomRightRadius: '8px' }}>
                  {event.type}
                </div>
                
                <div style={{ padding: 'var(--spacing-md)' }}>
                  <h3 style={{ margin: '0 0 var(--spacing-sm) 0', fontSize: 'var(--font-lg)' }}>{event.title}</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: 'var(--spacing-md)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)' }}>
                      <Calendar size={16} color="var(--color-text-muted)" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)' }}>
                      <Clock size={16} color="var(--color-text-muted)" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text)' }}>
                      <MapPin size={16} color="var(--color-text-muted)" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted" style={{ lineHeight: 1.5, marginBottom: 'var(--spacing-md)' }}>
                    {event.description}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-md)', padding: '12px', background: 'var(--color-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Award size={20} color="#eab308" />
                      <div>
                        <strong style={{ display: 'block', fontSize: 'var(--font-sm)', color: '#eab308' }}>+{event.points} Poin</strong>
                        <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>Reward Kehadiran</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-text-muted)' }}>
                      <Users size={16} />
                      <span style={{ fontSize: '12px' }}>{event.attendees} ikut</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => toggleRegister(event.id)}
                    className="hover-scale"
                    style={{ 
                      width: '100%', 
                      padding: '16px', 
                      borderRadius: 'var(--radius-sm)', 
                      fontWeight: 'bold', 
                      fontSize: 'var(--font-md)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: isRegistered ? 'rgba(34, 197, 94, 0.1)' : 'var(--color-primary)',
                      color: isRegistered ? '#16a34a' : 'white',
                      border: isRegistered ? '1px solid #16a34a' : 'none'
                    }}
                  >
                    {isRegistered ? (
                      <><CheckCircle2 size={20} /> Tiket & QR Code Siap</>
                    ) : (
                      'Daftar / Ikut Kegiatan'
                    )}
                  </button>
                </div>
              </div>
            );
          })}

          {filteredEvents.length === 0 && (
             <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)', color: 'var(--color-text-muted)' }}>
               <Calendar size={48} style={{ opacity: 0.2, marginBottom: 'var(--spacing-sm)' }} />
               <p>Tidak ada kegiatan untuk kategori ini.</p>
             </div>
          )}
        </div>
      </div>

      <Navigation role={role} />
    </div>
  );
}
