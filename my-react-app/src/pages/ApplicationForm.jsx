import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PawPrint, ArrowLeft, CheckCircle2, User, Home as HomeIcon, Heart } from 'lucide-react';

export default function ApplicationForm() {
  const { type } = useParams(); // 'adopt' or 'foster'
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const title = type === 'foster' ? 'Foster Application' : 'Adoption Application';
  const description = type === 'foster' 
    ? "Become a temporary hero! Fill out this form to help provide a safe haven for an animal in need."
    : "Ready to meet your new best friend? Let's make sure it's a perfect match.";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  if (isSuccess) {
    return (
      <div className="home-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '60px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ecfdf5', marginBottom: '20px' }}>
            <CheckCircle2 size={40} color="#059669" />
          </div>
          <h1 style={{ fontSize: '2.5rem', color: '#1e293b', marginBottom: '15px' }}>Application Received!</h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem', marginBottom: '40px' }}>
            Thank you for stepping up to help. Our team will review your {type} application and get back to you within 48 hours.
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
              <ArrowLeft size={16} style={{ marginRight: '8px' }}/> Cancel
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '700px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag" style={{ textTransform: 'uppercase' }}>{type} PROCESS</span>
          <h1 style={{ fontSize: '3rem', color: '#1e293b', marginBottom: '15px' }}>{title}</h1>
          <p style={{ color: '#64748b', fontSize: '1.2rem' }}>{description}</p>
        </div>

        {/* Wizard Progress */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', backgroundColor: '#e2e8f0', zIndex: 1, transform: 'translateY(-50%)' }} />
          
          {[{ num: 1, label: 'Personal', icon: User }, { num: 2, label: 'Environment', icon: HomeIcon }, { num: 3, label: 'Experience', icon: Heart }].map((item) => {
            const isActive = step >= item.num;
            return (
              <div key={item.num} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: isActive ? '#f97316' : 'white',
                  border: `2px solid ${isActive ? '#f97316' : '#cbd5e1'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? 'white' : '#94a3b8',
                  transition: 'all 0.3s ease'
                }}>
                  <item.icon size={20} />
                </div>
                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: isActive ? '#1e293b' : '#94a3b8' }}>{item.label}</span>
              </div>
            );
          })}
        </div>

        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', border: '1px solid #e8dfd5' }}>
          <form onSubmit={handleSubmit}>
            
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div className="fade-in">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: '#1e293b' }}>Personal Information</h3>
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
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Full Address</label>
                  <textarea rows="3" placeholder="Enter your full residential address" required></textarea>
                </div>
              </div>
            )}

            {/* Step 2: Home Environment */}
            {step === 2 && (
              <div className="fade-in">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: '#1e293b' }}>Home Environment</h3>
                <div className="form-row" style={{ marginBottom: '20px' }}>
                  <div className="form-group">
                    <label>Housing Type</label>
                    <select required>
                      <option value="">Select housing type</option>
                      <option>Apartment</option>
                      <option>Independent House</option>
                      <option>Farmhouse</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Do you own or rent?</label>
                    <select required>
                      <option value="">Select</option>
                      <option>Own</option>
                      <option>Rent (Landlord allows pets)</option>
                    </select>
                  </div>
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Who lives with you?</label>
                  <input type="text" placeholder="e.g., Spouse, 2 kids (ages 5 and 10)" required />
                </div>
              </div>
            )}

            {/* Step 3: Experience */}
            {step === 3 && (
              <div className="fade-in">
                <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: '#1e293b' }}>Pet Experience</h3>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Do you currently have any pets?</label>
                  <select required>
                    <option value="">Select</option>
                    <option>Yes (Dogs)</option>
                    <option>Yes (Cats)</option>
                    <option>No, but I had pets in the past</option>
                    <option>No, this will be my first time</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: '20px' }}>
                  <label>Why do you want to {type}?</label>
                  <textarea rows="4" placeholder="Tell us a bit about why you are applying..." required></textarea>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '30px', borderTop: '1px solid #f1f5f9' }}>
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)} className="secondary-btn">
                  Back
                </button>
              ) : (
                <div /> // Placeholder to keep the next button on the right
              )}
              
              <button type="submit" className="primary-btn" disabled={isSubmitting}>
                {step === 3 ? (isSubmitting ? 'Submitting...' : 'Submit Application') : 'Continue'}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
