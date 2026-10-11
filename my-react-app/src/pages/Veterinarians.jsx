import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PawPrint, 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  Award, 
  CheckCircle2, 
  AlertCircle, 
  Star, 
  ExternalLink, 
  X,
  Stethoscope,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { mockDatabase } from '../data/mockData';

export default function Veterinarians() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocality, setSelectedLocality] = useState('All');
  const [filter24x7, setFilter24x7] = useState(false);
  const [filterSponsored, setFilterSponsored] = useState(false);
  const [selectedVet, setSelectedVet] = useState(null);
  const [showAdModal, setShowAdModal] = useState(false);
  const [adFormSubmitted, setAdFormSubmitted] = useState(false);

  const vets = mockDatabase.veterinarians || [];

  const localities = ['All', ...new Set(vets.map(v => v.locality.split(',')[0].trim()))];

  const filteredVets = vets.filter(vet => {
    const matchesSearch = 
      vet.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vet.clinic_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vet.locality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vet.specializations.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLocality = selectedLocality === 'All' || vet.locality.toLowerCase().includes(selectedLocality.toLowerCase());
    const matchesEmergency = !filter24x7 || vet.emergency_24_7;
    const matchesSponsored = !filterSponsored || vet.is_sponsored;

    return matchesSearch && matchesLocality && matchesEmergency && matchesSponsored;
  });

  const handleAdSubmit = (e) => {
    e.preventDefault();
    setAdFormSubmitted(true);
    setTimeout(() => {
      setAdFormSubmitted(false);
      setShowAdModal(false);
    }, 2000);
  };

  return (
    <div className="home-page" style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Navbar */}
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <PawPrint className="brand-icon" size={24} color="#f97316" />
            <span>PawCare</span>
          </Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/animals">Animals</Link>
            <Link to="/vets" style={{ color: 'var(--primary)', fontWeight: '600' }}>Find Vets</Link>
            <Link to="/volunteer">Volunteer &amp; Earn</Link>
            <Link to="/track-rescue">Track Rescue</Link>
          </nav>
          <div className="nav-actions">
            <button 
              onClick={() => setShowAdModal(true)} 
              className="primary-btn"
              style={{ padding: '8px 18px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Sparkles size={15} /> Advertise Clinic
            </button>
            <Link to="/dashboard" className="login-btn">Admin Portal</Link>
          </div>
        </div>
      </header>

      {/* Header Banner */}
      <div style={{ maxWidth: '1200px', margin: '40px auto 30px', padding: '0 20px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #234e52 0%, #173538 100%)', 
          borderRadius: '24px', 
          padding: '45px 40px', 
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(35, 78, 82, 0.2)'
        }}>
          <div style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              backgroundColor: 'rgba(230, 106, 60, 0.2)', 
              color: '#ff9d76', 
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontSize: '12px', 
              fontWeight: '700', 
              letterSpacing: '0.05em', 
              marginBottom: '16px' 
            }}>
              <Stethoscope size={14} /> CERTIFIED ANIMAL HEALTHCARE DIRECTORY
            </span>
            <h1 style={{ fontSize: '2.6rem', lineHeight: '1.2', marginBottom: '14px', fontWeight: '800', color: 'white' }}>
              Find Verified Veterinary Doctors in Your Area
            </h1>
            <p style={{ color: '#d1e0e2', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '25px' }}>
              Instant access to vetted pet clinics, 24/7 emergency trauma centers, and indie-friendly doctors. 
              Clinics partner with PawCare to offer emergency stray rescue support.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setFilter24x7(!filter24x7)} 
                style={{ 
                  background: filter24x7 ? 'var(--primary)' : 'rgba(255,255,255,0.12)', 
                  border: '1px solid rgba(255,255,255,0.25)', 
                  color: 'white', 
                  padding: '9px 18px', 
                  borderRadius: '12px', 
                  cursor: 'pointer', 
                  fontWeight: '600', 
                  fontSize: '13px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '8px' 
                }}
              >
                <AlertCircle size={15} /> {filter24x7 ? 'Showing 24/7 Emergency Only' : '24/7 Emergency Clinics'}
              </button>
              <button 
                onClick={() => setShowAdModal(true)} 
                style={{ 
                  background: 'white', 
                  color: '#234e52', 
                  border: 'none', 
                  padding: '9px 18px', 
                  borderRadius: '12px', 
                  cursor: 'pointer', 
                  fontWeight: '700', 
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Sparkles size={15} color="var(--primary)" /> Clinic Owner? Advertise Here
              </button>
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div style={{ 
          marginTop: '30px', 
          backgroundColor: 'white', 
          borderRadius: '18px', 
          padding: '20px', 
          border: '1px solid var(--border)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ 
              flex: '1 1 320px', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px', 
              backgroundColor: '#fbf8f5', 
              border: '1px solid var(--border)', 
              borderRadius: '12px', 
              padding: '0 16px' 
            }}>
              <Search size={18} color="#94a3b8" />
              <input 
                type="text" 
                placeholder="Search by doctor, clinic name, surgery, or area..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  border: 'none', 
                  background: 'transparent', 
                  padding: '12px 0', 
                  width: '100%', 
                  outline: 'none', 
                  fontSize: '14px', 
                  color: 'var(--text)' 
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button
                onClick={() => setFilterSponsored(!filterSponsored)}
                style={{
                  background: filterSponsored ? '#fff2ea' : 'transparent',
                  border: `1px solid ${filterSponsored ? 'var(--primary)' : 'var(--border)'}`,
                  color: filterSponsored ? 'var(--primary)' : 'var(--text)',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  fontSize: '13px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Award size={15} /> Featured &amp; Sponsored
              </button>
              {filter24x7 && (
                <button
                  onClick={() => setFilter24x7(false)}
                  style={{
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    color: '#dc2626',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <X size={14} /> Clear 24/7 Filter
                </button>
              )}
            </div>
          </div>

          {/* Area pills */}
          <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', alignItems: 'center' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-light)', fontWeight: '600', marginRight: '6px' }}>Area:</span>
            {localities.map(loc => (
              <button
                key={loc}
                onClick={() => setSelectedLocality(loc)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  border: selectedLocality === loc ? '1px solid var(--primary)' : '1px solid var(--border)',
                  background: selectedLocality === loc ? 'var(--primary)' : '#fdfaf7',
                  color: selectedLocality === loc ? 'white' : 'var(--text)',
                  fontSize: '12px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s'
                }}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Sponsor Ad Callout */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          margin: '24px 0 16px', 
          flexWrap: 'wrap', 
          gap: '12px' 
        }}>
          <p style={{ color: 'var(--text-light)', fontSize: '14px', margin: 0 }}>
            Showing <strong>{filteredVets.length}</strong> veterinary specialists in Pune
          </p>
          <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>
            * Sponsored cards represent verified clinics partnering with the RSWF rescue network.
          </span>
        </div>

        {/* Veterinarian Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '24px' }}>
          {filteredVets.map(vet => (
            <div 
              key={vet.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                border: vet.is_sponsored ? '2px solid rgba(230, 106, 60, 0.4)' : '1px solid var(--border)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: vet.is_sponsored ? '0 12px 30px rgba(230, 106, 60, 0.08)' : '0 8px 24px rgba(0,0,0,0.03)',
                position: 'relative',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
            >
              {/* Sponsored Banner Tag */}
              {vet.is_sponsored && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '20px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: '800',
                  letterSpacing: '0.06em',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 10px rgba(230, 106, 60, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Sparkles size={11} /> {vet.sponsored_tag || 'SPONSORED'}
                </div>
              )}

              <div>
                {/* Doctor Header */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <img 
                    src={vet.photo} 
                    alt={vet.name} 
                    style={{ 
                      width: '76px', 
                      height: '76px', 
                      borderRadius: '16px', 
                      objectFit: 'cover',
                      border: '2px solid var(--border)' 
                    }} 
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--secondary)', fontWeight: '700' }}>
                        {vet.name}
                      </h3>
                      <ShieldCheck size={18} color="#059669" />
                    </div>
                    <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--text-light)', fontWeight: '500' }}>
                      {vet.qualification}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                      <span style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '4px', 
                        fontSize: '12px', 
                        fontWeight: '700', 
                        color: '#d97706',
                        backgroundColor: '#fef3c7',
                        padding: '2px 8px',
                        borderRadius: '6px'
                      }}>
                        <Star size={12} fill="#d97706" /> {vet.rating}
                      </span>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                        ({vet.reviews_count} reviews)
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>
                        • {vet.experience_years} yrs exp
                      </span>
                    </div>
                  </div>
                </div>

                {/* Clinic Info */}
                <div style={{ 
                  backgroundColor: '#fbf8f5', 
                  borderRadius: '12px', 
                  padding: '12px 14px', 
                  marginBottom: '16px',
                  border: '1px solid #f1e9e0' 
                }}>
                  <strong style={{ fontSize: '13px', color: 'var(--secondary)', display: 'block', marginBottom: '4px' }}>
                    {vet.clinic_name}
                  </strong>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-light)', fontSize: '12px' }}>
                    <MapPin size={13} color="var(--primary)" />
                    <span>{vet.address}</span>
                  </div>
                </div>

                {/* Tags & Highlights */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {vet.emergency_24_7 ? (
                    <span style={{ 
                      backgroundColor: '#fef2f2', 
                      color: '#dc2626', 
                      fontSize: '11px', 
                      fontWeight: '700', 
                      padding: '4px 10px', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <Clock size={11} /> 24x7 EMERGENCY
                    </span>
                  ) : (
                    <span style={{ 
                      backgroundColor: '#f1f5f9', 
                      color: '#475569', 
                      fontSize: '11px', 
                      fontWeight: '600', 
                      padding: '4px 10px', 
                      borderRadius: '8px' 
                    }}>
                      {vet.timings.split('(')[0].trim()}
                    </span>
                  )}
                  <span style={{ 
                    backgroundColor: '#ecfdf5', 
                    color: '#059669', 
                    fontSize: '11px', 
                    fontWeight: '700', 
                    padding: '4px 10px', 
                    borderRadius: '8px' 
                  }}>
                    Fee: {vet.consultation_fee}
                  </span>
                </div>

                {/* Specializations */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '18px' }}>
                  {vet.specializations.map(spec => (
                    <span 
                      key={spec} 
                      style={{ 
                        fontSize: '11px', 
                        color: 'var(--text-light)', 
                        backgroundColor: '#f8fafc', 
                        padding: '3px 8px', 
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0'
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
                <button
                  onClick={() => setSelectedVet(vet)}
                  style={{
                    flex: '1',
                    background: 'white',
                    border: '1px solid var(--secondary)',
                    color: 'var(--secondary)',
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: '600',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  View Details
                </button>
                <a
                  href={`tel:${vet.phone}`}
                  style={{
                    flex: '1',
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '10px',
                    borderRadius: '10px',
                    fontWeight: '600',
                    fontSize: '13px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <Phone size={14} /> Call Clinic
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredVets.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: 'white', borderRadius: '20px', border: '1px solid var(--border)' }}>
            <Stethoscope size={48} color="#94a3b8" style={{ marginBottom: '16px' }} />
            <h3 style={{ color: 'var(--secondary)' }}>No Veterinary Clinics Found</h3>
            <p style={{ color: 'var(--text-light)', maxWidth: '400px', margin: '8px auto 20px' }}>
              We could not find any doctors matching your search or filters. Try clearing your filters or selecting a different locality.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedLocality('All'); setFilter24x7(false); setFilterSponsored(false); }}
              className="primary-btn"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Doctor Advertising Banner */}
        <div style={{ 
          marginTop: '60px', 
          backgroundColor: '#fffaf4', 
          border: '2px dashed #f97316', 
          borderRadius: '24px', 
          padding: '40px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '650px' }}>
            <span style={{ 
              color: 'var(--primary)', 
              fontWeight: '700', 
              fontSize: '12px', 
              letterSpacing: '0.08em', 
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '8px'
            }}>
              <Sparkles size={14} /> ADVERTISE WITH PAWCARE
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '10px' }}>
              Are You a Veterinary Doctor or Clinic Owner?
            </h2>
            <p style={{ color: 'var(--text-light)', lineHeight: '1.6', margin: 0, fontSize: '14px' }}>
              Promote your clinic directly to thousands of pet parents, rescuers, and animal adopters in Pune. 
              Get a verified badge, priority placement in search results, and collaborate with RSWF on emergency stray treatment camps.
            </p>
          </div>
          <button 
            onClick={() => setShowAdModal(true)} 
            className="primary-btn"
            style={{ padding: '14px 28px', fontSize: '15px' }}
          >
            Promote Your Clinic Now
          </button>
        </div>
      </div>

      {/* Vet Detail Modal */}
      {selectedVet && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            maxWidth: '620px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.2)'
          }}>
            <button 
              onClick={() => setSelectedVet(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} color="#475569" />
            </button>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '24px' }}>
              <img 
                src={selectedVet.photo} 
                alt={selectedVet.name} 
                style={{ width: '90px', height: '90px', borderRadius: '18px', objectFit: 'cover' }} 
              />
              <div>
                {selectedVet.is_sponsored && (
                  <span style={{ 
                    fontSize: '11px', 
                    color: 'white', 
                    background: 'var(--primary)', 
                    padding: '2px 8px', 
                    borderRadius: '6px', 
                    fontWeight: '700' 
                  }}>
                    {selectedVet.sponsored_tag || 'SPONSORED CLINIC'}
                  </span>
                )}
                <h2 style={{ fontSize: '1.6rem', color: 'var(--secondary)', margin: '4px 0' }}>
                  {selectedVet.name}
                </h2>
                <p style={{ color: 'var(--text-light)', fontSize: '13px', margin: 0 }}>
                  {selectedVet.qualification} • {selectedVet.experience_years} Years Experience
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                  <span style={{ color: '#d97706', fontWeight: '700', fontSize: '13px' }}>★ {selectedVet.rating}</span>
                  <span style={{ color: '#94a3b8', fontSize: '12px' }}>({selectedVet.reviews_count} patient reviews)</span>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '6px' }}>About the Doctor</h4>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', lineHeight: '1.6', margin: 0 }}>
                {selectedVet.about}
              </p>
            </div>

            <div style={{ backgroundColor: '#fbf8f5', borderRadius: '14px', padding: '16px', marginBottom: '20px' }}>
              <strong style={{ display: 'block', color: 'var(--secondary)', fontSize: '14px', marginBottom: '8px' }}>
                {selectedVet.clinic_name}
              </strong>
              <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={15} color="var(--primary)" /> {selectedVet.address}
              </p>
              <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} color="var(--secondary)" /> {selectedVet.timings}
              </p>
              <p style={{ margin: '4px 0', fontSize: '13px', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Phone size={15} color="#059669" /> Regular: {selectedVet.phone} {selectedVet.emergency_24_7 && `| Emergency: ${selectedVet.emergency_phone}`}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: 'var(--secondary)', marginBottom: '8px' }}>Clinic Services &amp; Facilities</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {selectedVet.services.map(svc => (
                  <div key={svc} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text)' }}>
                    <CheckCircle2 size={14} color="#059669" /> {svc}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href={`tel:${selectedVet.phone}`}
                className="primary-btn"
                style={{ flex: 1, textAlign: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
              >
                <Phone size={16} /> Call Clinic ({selectedVet.consultation_fee})
              </a>
              <button
                onClick={() => {
                  alert(`Appointment request sent to ${selectedVet.clinic_name}. The clinic reception will contact you shortly.`);
                  setSelectedVet(null);
                }}
                className="secondary-btn"
                style={{ flex: 1 }}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clinic Advertisement Application Modal */}
      {showAdModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '24px',
            maxWidth: '560px',
            width: '100%',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.2)'
          }}>
            <button 
              onClick={() => setShowAdModal(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} color="#475569" />
            </button>

            {adFormSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '70px', 
                  height: '70px', 
                  borderRadius: '50%', 
                  backgroundColor: '#ecfdf5', 
                  marginBottom: '16px' 
                }}>
                  <CheckCircle2 size={36} color="#059669" />
                </div>
                <h2 style={{ color: 'var(--secondary)', marginBottom: '8px' }}>Application Received!</h2>
                <p style={{ color: 'var(--text-light)', fontSize: '14px' }}>
                  Our clinic onboarding team will verify your credentials and reach out within 24 hours to set up your featured listing and sponsorship banner.
                </p>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '12px', letterSpacing: '0.06em' }}>
                    PARTNER WITH RSWF &amp; PAWCARE
                  </span>
                  <h2 style={{ fontSize: '1.6rem', color: 'var(--secondary)', margin: '4px 0' }}>
                    Promote Your Veterinary Clinic
                  </h2>
                  <p style={{ color: 'var(--text-light)', fontSize: '13px', margin: 0 }}>
                    Feature your clinic on the PawCare verified directory. Reach pet parents and support community stray rescue cases.
                  </p>
                </div>

                <form onSubmit={handleAdSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '12px', fontWeight: '600' }}>Doctor's Name</label>
                      <input type="text" placeholder="Dr. First Last" required style={{ fontSize: '13px', padding: '10px' }} />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: '12px', fontWeight: '600' }}>Clinic / Hospital Name</label>
                      <input type="text" placeholder="e.g. Pet Care Hospital" required style={{ fontSize: '13px', padding: '10px' }} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group">
                      <label style={{ fontSize: '12px', fontWeight: '600' }}>Contact Phone</label>
                      <input type="tel" placeholder="+91 98000 00000" required style={{ fontSize: '13px', padding: '10px' }} />
                    </div>
                    <div className="form-group">
                      <label style={{ fontSize: '12px', fontWeight: '600' }}>Locality / Area</label>
                      <input type="text" placeholder="e.g. Baner, Pune" required style={{ fontSize: '13px', padding: '10px' }} />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '14px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600' }}>Sponsorship Package</label>
                    <select required style={{ fontSize: '13px', padding: '10px', width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }}>
                      <option value="featured">Featured Clinic Listing (Top Placement + Verified Badge)</option>
                      <option value="emergency">24/7 Emergency Trauma Partner (Priority Rescue Referral)</option>
                      <option value="community">Community Veterinary Partner (Subsidized Stray Sterilization)</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label style={{ fontSize: '12px', fontWeight: '600' }}>Key Specializations &amp; Facilities</label>
                    <input type="text" placeholder="e.g. Orthopedics, Digital X-Ray, Blood Bank" required style={{ fontSize: '13px', padding: '10px' }} />
                  </div>

                  <button type="submit" className="primary-btn" style={{ width: '100%', padding: '12px', fontSize: '14px' }}>
                    Submit Clinic for Advertisement Review
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
