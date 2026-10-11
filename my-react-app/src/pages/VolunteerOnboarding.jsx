import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  PawPrint, 
  ArrowLeft, 
  Heart, 
  CheckCircle2, 
  Car, 
  Stethoscope, 
  IndianRupee, 
  Zap, 
  Fuel, 
  Receipt, 
  ShieldCheck, 
  X,
  FileCheck
} from 'lucide-react';
import { mockDatabase } from '../data/mockData';

export default function VolunteerOnboarding() {
  const navigate = useNavigate();
  const [role, setRole] = useState('rescue_stipend');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    availability: '',
    upi_id: '',
    vehicle: 'Two-Wheeler (Motorcycle/Scooter)'
  });

  // Claim State
  const [claimData, setClaimData] = useState({
    rescue_id: 'RR-1047',
    rescuer_name: '',
    phone: '',
    upi_id: '',
    claim_type: 'emergency',
    km_travelled: '15',
    medical_bills: '250',
    notes: 'Rescued hit-and-run dog from highway divider. Admitted to Baner vet hospital.'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleClaimSubmit = (e) => {
    e.preventDefault();
    setClaimSubmitted(true);
    setTimeout(() => {
      setClaimSubmitted(false);
      setShowClaimModal(false);
      alert(`Claim submitted for ${claimData.rescue_id}! Total approved payout will be disbursed to ${claimData.upi_id || 'your registered UPI ID'} once verified by the admin desk.`);
    }, 1500);
  };

  const benefitProgram = mockDatabase.rescuerBenefitProgram;

  if (isSuccess) {
    return (
      <div className="home-page" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <div style={{ textAlign: 'center', backgroundColor: 'white', padding: '50px 40px', borderRadius: '30px', boxShadow: '0 25px 50px rgba(0,0,0,0.05)', maxWidth: '600px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ecfdf5', marginBottom: '20px' }}>
            <CheckCircle2 size={40} color="#059669" />
          </div>
          <h1 style={{ fontSize: '2.2rem', color: 'var(--secondary)', marginBottom: '15px' }}>Welcome to the Rescue Team!</h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' }}>
            Your application has been received. Your UPI payment account has been registered for instant rescue stipends and emergency reimbursements.
          </p>
          <div style={{ backgroundColor: '#fffaf4', padding: '16px', borderRadius: '16px', border: '1px solid #fed7aa', marginBottom: '30px', textAlign: 'left' }}>
            <strong style={{ color: 'var(--primary)', display: 'block', fontSize: '14px', marginBottom: '6px' }}>What Happens Next:</strong>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text)', lineHeight: '1.5' }}>
              1. Our coordinator will verify your city area within 24 hours.<br />
              2. You will be added to the field rescue alert broadcast.<br />
              3. Every completed rescue will automatically credit ₹400 - ₹650 + fuel allowance to your account!
            </p>
          </div>
          <button onClick={() => navigate('/')} className="primary-btn" style={{ width: '100%' }}>
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
            <span>PawCare</span>
          </Link>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/animals">Animals</Link>
            <Link to="/track-rescue">Track Rescue</Link>
          </nav>
          <div className="nav-actions">
            <button 
              onClick={() => setShowClaimModal(true)}
              className="primary-btn"
              style={{ padding: '8px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <FileCheck size={16} /> Claim Rescue Payout
            </button>
            <button onClick={() => navigate(-1)} className="nav-rescue-btn" style={{ background: 'transparent', color: '#64748b', border: '1px solid #cbd5e1' }}>
              <ArrowLeft size={16} style={{ marginRight: '6px' }}/> Back
            </button>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '960px', margin: '40px auto', padding: '0 20px' }}>
        {/* Title Banner */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-tag" style={{ textTransform: 'uppercase' }}>VOLUNTEER &amp; EARN RESCUE STIPENDS</span>
          <h1 style={{ fontSize: '2.8rem', color: 'var(--secondary)', marginBottom: '14px', fontWeight: '800' }}>
            Rescue Animals &amp; Get Compensated
          </h1>
          <p style={{ color: 'var(--text-light)', fontSize: '1.15rem', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6' }}>
            Saving lives takes dedication, fuel, and time. PawCare now provides direct monetary stipends, fuel allowances, and medical reimbursements to all certified volunteer rescuers.
          </p>
        </div>

        {/* Monetary Benefits Highlights Card */}
        <div style={{ 
          background: 'linear-gradient(135deg, #fff7ed 0%, #fff1f2 100%)', 
          border: '2px solid #fed7aa', 
          borderRadius: '24px', 
          padding: '35px', 
          marginBottom: '50px',
          boxShadow: '0 12px 30px rgba(249, 115, 22, 0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <span style={{ 
                backgroundColor: 'var(--primary)', 
                color: 'white', 
                fontSize: '11px', 
                fontWeight: '700', 
                padding: '4px 12px', 
                borderRadius: '12px', 
                letterSpacing: '0.05em' 
              }}>
                OFFICIAL REWARD POLICY
              </span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--secondary)', margin: '8px 0 4px' }}>
                Rescuer Monetary Benefit Program
              </h2>
              <p style={{ color: 'var(--text-light)', margin: 0, fontSize: '14px' }}>
                Approved payouts are disbursed directly via UPI upon successful rescue verification.
              </p>
            </div>
            <button 
              onClick={() => setShowClaimModal(true)}
              style={{
                backgroundColor: 'var(--secondary)',
                color: 'white',
                border: 'none',
                padding: '12px 20px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Receipt size={16} /> Existing Volunteer? Claim Payout
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {benefitProgram.tiers.map((tier, idx) => (
              <div 
                key={tier.type}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #fed7aa',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-light)' }}>Tier 0{idx + 1}</span>
                  {idx === 0 && <IndianRupee size={18} color="var(--primary)" />}
                  {idx === 1 && <Zap size={18} color="#dc2626" />}
                  {idx === 2 && <Fuel size={18} color="#059669" />}
                  {idx === 3 && <ShieldCheck size={18} color="#2563eb" />}
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' }}>
                  {tier.stipend}
                </div>
                <strong style={{ fontSize: '13px', color: 'var(--text)', display: 'block', marginBottom: '6px' }}>
                  {tier.type}
                </strong>
                <p style={{ fontSize: '12px', color: 'var(--text-light)', margin: 0, lineHeight: '1.4' }}>
                  {tier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer Role Selection */}
        <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '16px' }}>
          Select Your Primary Volunteer Role
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          
          <div 
            onClick={() => setRole('rescue_stipend')}
            style={{ 
              padding: '24px', 
              borderRadius: '20px', 
              border: `2px solid ${role === 'rescue_stipend' ? 'var(--primary)' : 'var(--border)'}`,
              backgroundColor: role === 'rescue_stipend' ? '#fff9f5' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s',
              position: 'relative'
            }}
          >
            <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#ecfdf5', color: '#059669', fontSize: '10px', fontWeight: '700', padding: '2px 8px', borderRadius: '10px' }}>
              STIPEND ACTIVE
            </span>
            <IndianRupee size={28} color={role === 'rescue_stipend' ? 'var(--primary)' : '#94a3b8'} style={{ marginBottom: '12px' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '6px' }}>Field Rescuer</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>On-call animal rescue with guaranteed per-rescue compensation.</p>
          </div>

          <div 
            onClick={() => setRole('transport')}
            style={{ 
              padding: '24px', 
              borderRadius: '20px', 
              border: `2px solid ${role === 'transport' ? 'var(--primary)' : 'var(--border)'}`,
              backgroundColor: role === 'transport' ? '#fff9f5' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <Car size={28} color={role === 'transport' ? 'var(--primary)' : '#94a3b8'} style={{ marginBottom: '12px' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '6px' }}>Transport Driver</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>Drive rescued animals to vets or foster homes with fuel reimbursement.</p>
          </div>

          <div 
            onClick={() => setRole('foster')}
            style={{ 
              padding: '24px', 
              borderRadius: '20px', 
              border: `2px solid ${role === 'foster' ? 'var(--primary)' : 'var(--border)'}`,
              backgroundColor: role === 'foster' ? '#fff9f5' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <Heart size={28} color={role === 'foster' ? 'var(--primary)' : '#94a3b8'} style={{ marginBottom: '12px' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '6px' }}>Foster Parent</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>Provide temporary housing &amp; care. Food &amp; vet expenses covered.</p>
          </div>

          <div 
            onClick={() => setRole('medical')}
            style={{ 
              padding: '24px', 
              borderRadius: '20px', 
              border: `2px solid ${role === 'medical' ? 'var(--primary)' : 'var(--border)'}`,
              backgroundColor: role === 'medical' ? '#fff9f5' : 'white',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <Stethoscope size={28} color={role === 'medical' ? 'var(--primary)' : '#94a3b8'} style={{ marginBottom: '12px' }} />
            <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '6px' }}>Medical Aid</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', margin: 0 }}>For vet students &amp; techs assisting in emergency field triage.</p>
          </div>

        </div>

        {/* Application & Payout Registration Form */}
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid var(--border)' }}>
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', marginBottom: '6px' }}>
              Volunteer Registration &amp; Payout Setup
            </h3>
            <p style={{ color: 'var(--text-light)', fontSize: '13px', margin: 0 }}>
              Fill out your details to activate your rescue badge and link your payment details for automatic claim settlements.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row" style={{ marginBottom: '18px' }}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Rahul Sharma" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Phone Number (WhatsApp Active)</label>
                <input 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            
            <div className="form-row" style={{ marginBottom: '18px' }}>
              <div className="form-group">
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="rahul@example.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Operating City / Locality</label>
                <input 
                  type="text" 
                  placeholder="e.g. Baner, Pashan, Pune" 
                  required 
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row" style={{ marginBottom: '18px' }}>
              <div className="form-group">
                <label style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>UPI ID for Monetary Payouts</span>
                  <span style={{ color: 'var(--primary)', fontSize: '11px', fontWeight: '700' }}>Direct Bank Transfer</span>
                </label>
                <input 
                  type="text" 
                  placeholder="yourname@okhdfcbank or yourphone@paytm" 
                  required 
                  value={formData.upi_id}
                  onChange={(e) => setFormData({ ...formData, upi_id: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Vehicle for Field Travel (for fuel allowance)</label>
                <select 
                  value={formData.vehicle} 
                  onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                >
                  <option>Two-Wheeler (Motorcycle / Scooter)</option>
                  <option>Four-Wheeler (Car / Van)</option>
                  <option>No Vehicle (Public / On-foot)</option>
                </select>
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '25px' }}>
              <label>Field Availability</label>
              <select 
                required
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              >
                <option value="">Select typical availability</option>
                <option>Flexible / 24x7 Emergency Call-outs (Eligible for ₹650 Bonus)</option>
                <option>Weekdays (Evenings 6 PM - 10 PM)</option>
                <option>Weekends Only</option>
                <option>Morning Shifts (7 AM - 12 PM)</option>
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '12px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} color="#059669" /> Free RSWF First-Aid Kit &amp; ID Card provided upon approval.
              </span>
              <button type="submit" className="primary-btn" disabled={isSubmitting} style={{ padding: '12px 28px' }}>
                {isSubmitting ? 'Registering Rescuer...' : 'Complete Registration & Activate Stipends'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Rescue Payout Claim Modal */}
      {showClaimModal && (
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
            maxWidth: '580px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.2)'
          }}>
            <button 
              onClick={() => setShowClaimModal(false)}
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

            <div style={{ marginBottom: '20px' }}>
              <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '12px', letterSpacing: '0.05em' }}>
                RESCUER STIPEND SETTLEMENT
              </span>
              <h2 style={{ fontSize: '1.6rem', color: 'var(--secondary)', margin: '4px 0' }}>
                Submit Rescue Completion &amp; Payout Claim
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '13px', margin: 0 }}>
                Completed a field rescue? Submit your ticket details and claim your stipend + fuel allowance instantly.
              </p>
            </div>

            <form onSubmit={handleClaimSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '12px', fontWeight: '600' }}>Rescue Ticket ID</label>
                  <input 
                    type="text" 
                    value={claimData.rescue_id} 
                    onChange={(e) => setClaimData({ ...claimData, rescue_id: e.target.value })}
                    placeholder="e.g. RR-1047" 
                    required 
                    style={{ fontSize: '13px', padding: '10px' }} 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '12px', fontWeight: '600' }}>Rescuer Name</label>
                  <input 
                    type="text" 
                    value={claimData.rescuer_name}
                    onChange={(e) => setClaimData({ ...claimData, rescuer_name: e.target.value })}
                    placeholder="Your Full Name" 
                    required 
                    style={{ fontSize: '13px', padding: '10px' }} 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '12px', fontWeight: '600' }}>UPI ID for Credit</label>
                  <input 
                    type="text" 
                    value={claimData.upi_id}
                    onChange={(e) => setClaimData({ ...claimData, upi_id: e.target.value })}
                    placeholder="e.g. rahul@oksbi" 
                    required 
                    style={{ fontSize: '13px', padding: '10px' }} 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '12px', fontWeight: '600' }}>Shift / Urgency Type</label>
                  <select 
                    value={claimData.claim_type}
                    onChange={(e) => setClaimData({ ...claimData, claim_type: e.target.value })}
                    style={{ fontSize: '13px', padding: '10px', width: '100%', borderRadius: '8px', border: '1px solid var(--border)' }}
                  >
                    <option value="standard">Standard Day Rescue (₹400)</option>
                    <option value="emergency">Emergency / Night Rescue (₹650)</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group">
                  <label style={{ fontSize: '12px', fontWeight: '600' }}>KM Travelled (₹12/km)</label>
                  <input 
                    type="number" 
                    value={claimData.km_travelled}
                    onChange={(e) => setClaimData({ ...claimData, km_travelled: e.target.value })}
                    placeholder="e.g. 15" 
                    style={{ fontSize: '13px', padding: '10px' }} 
                  />
                </div>
                <div className="form-group">
                  <label style={{ fontSize: '12px', fontWeight: '600' }}>Medical / First-aid Expense (₹)</label>
                  <input 
                    type="number" 
                    value={claimData.medical_bills}
                    onChange={(e) => setClaimData({ ...claimData, medical_bills: e.target.value })}
                    placeholder="e.g. 250" 
                    style={{ fontSize: '13px', padding: '10px' }} 
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: '18px' }}>
                <label style={{ fontSize: '12px', fontWeight: '600' }}>Rescue Handover Notes &amp; Clinic Name</label>
                <textarea 
                  rows="3"
                  value={claimData.notes}
                  onChange={(e) => setClaimData({ ...claimData, notes: e.target.value })}
                  style={{ width: '100%', fontSize: '13px', padding: '10px', borderRadius: '8px', border: '1px solid var(--border)' }}
                />
              </div>

              {/* Calculated Summary Box */}
              <div style={{ backgroundColor: '#fbf8f5', borderRadius: '12px', padding: '14px', marginBottom: '20px', border: '1px solid #fed7aa' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span>Base Stipend:</span>
                  <strong>{claimData.claim_type === 'emergency' ? '₹650' : '₹400'}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '4px' }}>
                  <span>Fuel Allowance ({claimData.km_travelled || 0} km × ₹12):</span>
                  <strong>₹{(Number(claimData.km_travelled) || 0) * 12}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                  <span>Medical Expense Reimbursement:</span>
                  <strong>₹{Number(claimData.medical_bills) || 0}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', paddingTop: '8px', borderTop: '1px dashed #cbd5e1', color: 'var(--secondary)' }}>
                  <strong>Estimated Payout:</strong>
                  <strong style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>
                    ₹{(claimData.claim_type === 'emergency' ? 650 : 400) + ((Number(claimData.km_travelled) || 0) * 12) + (Number(claimData.medical_bills) || 0)}
                  </strong>
                </div>
              </div>

              <button type="submit" className="primary-btn" style={{ width: '100%', padding: '12px', fontSize: '14px' }}>
                Submit Claim for Admin Verification
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
