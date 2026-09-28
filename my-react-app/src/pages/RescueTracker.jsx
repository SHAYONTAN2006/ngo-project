import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, PawPrint, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function RescueTracker() {
  const [trackingId, setTrackingId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [result, setResult] = useState(null);

  // Mock function to simulate API call
  const handleTrack = (e) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate network delay
    setTimeout(() => {
      if (trackingId.toUpperCase() === 'RR-1047') {
        setResult({
          id: 'RR-1047',
          animal: 'Dog',
          status: 'Rescue Team En Route',
          eta: '15 mins',
          timeline: [
            { event: 'Request Received & Verified', time: '10:00 AM', done: true },
            { event: 'Volunteer Dispatched (Meera)', time: '10:15 AM', done: true },
            { event: 'Team Arrives at Location', time: 'Pending', done: false },
            { event: 'Animal Secured', time: 'Pending', done: false },
            { event: 'Admitted to RSWF Clinic', time: 'Pending', done: false },
          ]
        });
      } else {
        setResult('not_found');
      }
      setIsSearching(false);
    }, 1000);
  };

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
              <ArrowLeft size={16} style={{ marginRight: '8px' }}/> Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '800px', margin: '80px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-tag">LIVE UPDATES</span>
          <h1 style={{ fontSize: '3rem', color: '#1e293b', marginBottom: '15px' }}>Track Your Rescue Report</h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Enter the unique Tracking ID you received when you submitted the rescue form to see real-time updates on the animal.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', border: '1px solid #e8dfd5' }}>
          <form onSubmit={handleTrack} style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
            <label style={{ fontWeight: '700', color: '#1e293b', fontSize: '1.1rem' }}>Enter Tracking ID</label>
            <div style={{ display: 'flex', gap: '15px', position: 'relative', zIndex: 10 }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Search size={22} color="#94a3b8" style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                <input 
                  type="text" 
                  placeholder="e.g., RR-1047" 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  style={{ width: '100%', padding: '18px 20px 18px 50px', fontSize: '1.2rem', borderRadius: '14px', border: '2px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#1e293b', outline: 'none' }}
                  required
                />
              </div>
              <button type="submit" className="submit-btn" style={{ width: 'auto', padding: '0 40px', margin: 0, fontSize: '1.2rem', borderRadius: '14px' }} disabled={isSearching}>
                {isSearching ? 'Locating...' : 'Track Animal'}
              </button>
            </div>
          </form>

          {result === 'not_found' && (
            <div style={{ marginTop: '30px', padding: '25px', backgroundColor: '#fef2f2', color: '#ef4444', borderRadius: '14px', textAlign: 'center', fontSize: '1.1rem', border: '1px solid #fecaca' }}>
              <strong style={{ display: 'block', marginBottom: '5px' }}>No rescue case found.</strong>
              Please check your Tracking ID and try again. Try <strong>RR-1047</strong> for a live demo.
            </div>
          )}

          {result && result !== 'not_found' && (
            <div style={{ marginTop: '50px', borderTop: '1px solid #f1f5f9', paddingTop: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', backgroundColor: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div>
                  <span className="section-tag" style={{ marginBottom: '5px' }}>{result.id} | {result.animal}</span>
                  <h2 style={{ margin: '0', color: '#1e293b', fontSize: '1.8rem' }}>{result.status}</h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <small style={{ color: '#64748b', display: 'block', marginBottom: '5px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Estimated Arrival</small>
                  <strong style={{ fontSize: '2rem', color: '#f97316', lineHeight: 1 }}>{result.eta}</strong>
                </div>
              </div>

              {/* Live Tracking Timeline */}
              <div style={{ position: 'relative', paddingLeft: '45px', marginLeft: '20px' }}>
                <div style={{ position: 'absolute', left: '14px', top: '15px', bottom: '15px', width: '2px', backgroundColor: '#e2e8f0' }} />
                
                {result.timeline.map((step, index) => (
                  <div key={index} style={{ position: 'relative', marginBottom: '40px', opacity: step.done ? 1 : 0.4 }}>
                    <div style={{ 
                      position: 'absolute', 
                      left: '-46px', 
                      top: '0', 
                      width: '30px', 
                      height: '30px', 
                      borderRadius: '50%', 
                      backgroundColor: step.done ? '#059669' : '#fff',
                      border: `2px solid ${step.done ? '#059669' : '#cbd5e1'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: step.done ? '0 0 0 4px rgba(5, 150, 105, 0.1)' : 'none'
                    }}>
                      {step.done && <CheckCircle2 size={18} color="white" />}
                    </div>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.2rem', color: '#1e293b', marginBottom: '6px' }}>
                        {step.event}
                      </strong>
                      <span style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: '500' }}>{step.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
