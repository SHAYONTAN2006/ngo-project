import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockDatabase } from '../data/mockData';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Syringe, 
  Heart, 
  ShieldCheck, 
  Activity,
  PawPrint
} from 'lucide-react';

export default function AnimalProfile() {
  const { id } = useParams();
  const animal = mockDatabase.animals.find(a => a.animal_id === id);

  if (!animal) {
    return (
      <div className="home-page" style={{ textAlign: 'center', padding: '100px' }}>
        <h2>Animal not found</h2>
        <Link to="/" className="primary-btn">Return Home</Link>
      </div>
    );
  }

  // Dynamic timeline rendered from database below

  return (
    <div className="home-page" style={{ paddingBottom: '100px' }}>
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <PawPrint className="brand-icon" size={24} color="#f97316" />
            <span>PawCare</span>
          </Link>
          <div className="nav-actions">
            <Link to="/" className="nav-rescue-btn">
              <ArrowLeft size={16} style={{ marginRight: '8px' }}/> Back to Animals
            </Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Column: Image & Basic Info */}
          <div>
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img src={animal.photo} alt={animal.name} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
            </div>
            
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
              {animal.tags.map(tag => (
                <span key={tag} style={{ backgroundColor: '#ecfdf5', color: '#059669', padding: '8px 16px', borderRadius: '100px', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ShieldCheck size={16} /> {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Timeline */}
          <div>
            <span className="section-tag">{animal.status}</span>
            <h1 style={{ fontSize: '3rem', margin: '10px 0', color: '#1e293b' }}>{animal.name}</h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '30px' }}>
              {animal.breed} | {animal.gender} | {animal.age}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
                <Activity size={24} color="#3b82f6" style={{ marginBottom: '10px' }} />
                <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Health Status</h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Fully Vaccinated, Neutered</p>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '16px' }}>
                <MapPin size={24} color="#ef4444" style={{ marginBottom: '10px' }} />
                <h4 style={{ margin: '0 0 5px 0', color: '#1e293b' }}>Location</h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Pune - Pashan</p>
              </div>
            </div>

            {/* The Novelty: Transparent Recovery Timeline */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Calendar size={24} color="#f97316" /> Recovery Journey
              </h3>
              
              <div style={{ paddingLeft: '20px', borderLeft: '2px solid #e2e8f0', marginLeft: '12px' }}>
                {animal.recovery_journey.map((item, index) => {
                  const isCurrent = item.status === 'current';
                  return (
                    <div key={index} style={{ position: 'relative', marginBottom: '24px' }}>
                      <div style={{ 
                        position: 'absolute', 
                        left: '-31px', 
                        top: '0',
                        backgroundColor: isCurrent ? '#f97316' : '#fff',
                        border: `2px solid ${isCurrent ? '#f97316' : '#cbd5e1'}`,
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {isCurrent && <div style={{ width: '8px', height: '8px', backgroundColor: '#fff', borderRadius: '50%' }} />}
                      </div>
                      <div>
                        <strong style={{ color: isCurrent ? '#f97316' : '#1e293b', display: 'block', marginBottom: '4px' }}>
                          {item.event}
                        </strong>
                        <small style={{ color: '#94a3b8' }}>{item.date}</small>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
              <Link to="/apply/adopt" className="submit-btn" style={{ flex: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <Heart size={20} fill="white" /> Adopt {animal.name}
              </Link>
              <Link to="/apply/foster" className="white-btn" style={{ flex: 1, textAlign: 'center', textDecoration: 'none' }}>
                Foster
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Temporary icon to fix import
function Stethoscope({ size, color }) {
  return <Syringe size={size} color={color} />;
}
