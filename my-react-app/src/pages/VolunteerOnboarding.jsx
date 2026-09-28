import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PawPrint, ArrowLeft, Heart, CheckCircle2, Car, Stethoscope } from 'lucide-react';

export default function VolunteerOnboarding() {
  const navigate = useNavigate();
  const [role, setRole] = useState('foster');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="home-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '60px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ecfdf5', marginBottom: '20px' }}>
            <CheckCircle2 size={40} color="#059669" />
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '15px' }}>Welcome to the Team!</h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: '40px' }}>
            Thank you for volunteering. Our coordinator will reach out to you within 24 hours to schedule a quick orientation call.
          </p>
          <button onClick={() => navigate('/')} className="primary-btn">
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <PawPrint className="brand-icon" size={24} color="#f97316" />
            <span>Paw<span>Care</span></span>
          </Link>
          <div className="nav-actions">
            <button onClick={() => navigate(-1)} className="nav-rescue-btn" style={{ background: 'transparent', color: '#64748b', border: '1px solid #cbd5e1' }}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }}/> Back
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-tag" style={{ textTransform: 'uppercase' }}>VOLUNTEER ONBOARDING</span>
          <h1 style={{ fontSize: '3rem', color: '#1e293b', marginBottom: '15px' }}>Join Our Rescue Network</h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            We rely on passionate individuals to help us rescue, transport, and heal animals in need. Select a role below and apply to be a part of the PawCare family.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
          
          <div 
            onClick={() => setRole('foster')}
            style={{ 
              padding: '30px', 
              borderRadius: '24px', 
              border: `2px solid ${role === 'foster' ? '#f97316' : '#e2e8f0'}`,
              backgroundColor: role === 'foster' ? '#fff9f5' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <Heart size={32} color={role === 'foster' ? '#f97316' : '#94a3b8'} style={{ marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '10px' }}>Foster Parent</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Provide a temporary, loving home for recovering animals.</p>
          </div>

          <div 
            onClick={() => setRole('transport')}
            style={{ 
              padding: '30px', 
              borderRadius: '24px', 
              border: `2px solid ${role === 'transport' ? '#f97316' : '#e2e8f0'}`,
              backgroundColor: role === 'transport' ? '#fff9f5' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <Car size={32} color={role === 'transport' ? '#f97316' : '#94a3b8'} style={{ marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '10px' }}>Transport Team</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>Drive animals to and from vet appointments or their new homes.</p>
          </div>

          <div 
            onClick={() => setRole('medical')}
            style={{ 
              padding: '30px', 
              borderRadius: '24px', 
              border: `2px solid ${role === 'medical' ? '#f97316' : '#e2e8f0'}`,
              backgroundColor: role === 'medical' ? '#fff9f5' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <Stethoscope size={32} color={role === 'medical' ? '#f97316' : '#94a3b8'} style={{ marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '10px' }}>Medical Aid</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>For vets or vet techs willing to assist in urgent field rescues.</p>
          </div>

        </div>

        <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', border: '1px solid #e8dfd5' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: '#1e293b' }}>Application Details</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row" style={{ marginBottom: '20px' }}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>
            </div>
            
            <div className="form-row" style={{ marginBottom: '20px' }}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>City / Location</label>
                <input type="text" placeholder="e.g., Pune" required />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '30px' }}>
              <label>Availability</label>
              <select required>
                <option value="">Select your typical availability</option>
                <option>Weekdays (Morning)</option>
                <option>Weekdays (Evening)</option>
                <option>Weekends Only</option>
                <option>Flexible / On-call</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '30px', borderTop: '1px solid #f1f5f9' }}>
              <button type="submit" className="primary-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
