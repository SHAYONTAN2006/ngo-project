import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Stethoscope, 
  Home as HomeIcon, 
  ShieldCheck, 
  ArrowRight,
  PawPrint,
  AlertTriangle,
  UploadCloud,
  CheckCircle2,
  Clock,
  Search,
  Menu
} from 'lucide-react';
import { mockDatabase } from '../data/mockData';

const workflow = [
  [AlertTriangle, 'Report', 'A user reports an animal that needs help.'], 
  [ShieldCheck, 'Verify', 'Our team verifies the rescue request.'], 
  [PawPrint, 'Rescue', 'A volunteer is assigned and the animal is rescued.'], 
  [Stethoscope, 'Recover', 'Medical treatment and vaccination are provided.'], 
  [HomeIcon, 'Adopt', 'The animal finds a safe and loving home.']
];

function Brand({ onClick }) {
  return (
    <button type="button" className="logo" onClick={onClick}>
      <PawPrint className="brand-icon" size={24} color="#f97316" />
      <span>PawCare</span>
    </button>
  );
}

function QuickCard({ icon: Icon, title, copy, href }) { 
  return (
    <a href={href} className="quick-card">
      <div className="quick-icon-wrap">
        <Icon size={28} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{copy}</p>
      </div>
      <ArrowRight className="arrow-icon" size={20} />
    </a>
  ); 
}

function Heading({ tag, title, copy }) { 
  return (
    <div className="center-heading">
      <span className="section-tag">{tag}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  ); 
}

function FooterColumn({ title, links }) { 
  return (
    <div className="footer-column">
      <h4>{title}</h4>
      {links.map((link) => <a href="#home" key={link}>{link}</a>)}
    </div>
  ); 
}

function RescueForm() { 
  return (
    <div className="rescue-form-card">
      <h3>Report an Animal</h3>
      <p>Provide as much information as possible.</p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="form-row">
          <div className="form-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>
        </div>
        <div className="form-group">
          <label>Animal Type</label>
          <select defaultValue="">
            <option value="">Select animal type</option>
            <option>Dog</option>
            <option>Cat</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Animal Condition</label>
          <select defaultValue="">
            <option value="">Select condition</option>
            <option>Injured</option>
            <option>Abandoned</option>
            <option>Lost</option>
          </select>
        </div>
        <div className="form-group">
          <label>Location</label>
          <input type="text" placeholder="Where is the animal located?" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="4" placeholder="Describe the animal and situation..." />
        </div>
        <div className="form-group">
          <label>Upload Photo</label>
          <div className="upload-box">
            <UploadCloud size={24} color="#94a3b8" />
            <p>Click to upload an image<br/><small>PNG, JPG up to 5MB</small></p>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Submit Rescue Request <ArrowRight size={18} />
        </button>
      </form>
    </div>
  ); 
}

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animals = mockDatabase.animals;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % animals.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [animals.length]);

  const currentAnimal = animals[currentIndex];

  return (
    <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {animals.map((animal, index) => (
        <div 
          key={animal.animal_id}
          className="hero-container"
          style={{
            position: index === currentIndex ? 'relative' : 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out',
            pointerEvents: index === currentIndex ? 'auto' : 'none',
            zIndex: index === currentIndex ? 1 : 0
          }}
        >
          <div className="hero-content">
            <h1>ANIMAL FOR ADOPTION</h1>
            <p>We are helping lost and abandoned animals find their forever homes. Currently, we have {animal.name}, a {animal.breed} looking for a loving family. If you are interested in adopting or fostering, please contact us.</p>
            <div className="adoption-bullet-list">
              <div className="bullet-line"><CheckCircle2 size={16} /> {animal.breed} : {animal.gender}</div>
              <div className="bullet-line"><CheckCircle2 size={16} /> {animal.age}</div>
              <div className="bullet-line"><CheckCircle2 size={16} /> {animal.tags.join(' & ')}</div>
            </div>
            <div className="adoption-contact">
              <p>Location: Pune - Pashan</p>
              <strong>Contact : 94052 66596</strong>
              RSFW Foundation
            </div>
          </div>
          <div className="hero-image">
            <div className="support-badge">
              <ShieldCheck size={16} color="#059669" />
              REFORM SOCIAL WELFARE
            </div>
            <div className="hero-card-main" style={{ height: '400px', width: '100%', borderRadius: '16px', overflow: 'hidden' }}>
              <img src={animal.photo} alt={`${animal.name} for adoption`} className="dog-photo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="secondary-photo-card">
              <Heart size={24} color="#ef4444" fill="#ef4444" />
              <div>
                <strong>Adopt {animal.name}</strong>
                <small>Healthy &amp; Safe</small>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 10 }}>
        {animals.map((_, index) => (
          <button 
            key={index} 
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '10px', height: '10px', borderRadius: '50%', border: 'none',
              background: index === currentIndex ? 'var(--primary)' : '#cbd5e1',
              cursor: 'pointer', transition: 'background 0.3s'
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-page">
      <header className="navbar">
        <div className="nav-container">
          <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <a href="#rescue">Rescue</a>
            <Link to="/animals">Animals</Link>
            <Link to="/apply/foster">Foster</Link>
            <Link to="/volunteer">Volunteer</Link>
          </nav>
          <div className="nav-actions">
            <Link to="/dashboard" className="login-btn">Admin Login</Link>
            <a href="#rescue" className="nav-rescue-btn">Report Rescue</a>
          </div>
          <button type="button" className="mobile-menu" aria-label="Open menu"><Menu size={24} /></button>
        </div>
      </header>
      <HeroSlider />
      <section className="quick-actions">
        <div className="quick-container">
          <QuickCard icon={AlertTriangle} title="Report a Rescue" copy="Found an animal that needs help?" href="#rescue" />
          <QuickCard icon={PawPrint} title="Adopt an Animal" copy="Give a rescued animal a forever home." href="#animals" />
          <QuickCard icon={HomeIcon} title="Become a Foster" copy="Provide temporary care and love." href="#foster" />
        </div>
      </section>
      
      <section className="section animals-section" id="animals">
        <Heading tag="MEET OUR ANIMALS" title={<>Looking for your new best friend?</>} />
        <div className="animal-grid">
          {mockDatabase.animals.map((animal) => (
            <article className="animal-card" key={animal.animal_id}>
              <div className="animal-card-image">
                <img src={animal.photo} alt={`${animal.name}, a dog available for adoption`} />
                <span className="animal-status">Available</span>
              </div>
              <div className="animal-card-content">
                <div className="animal-title">
                  <div>
                    <h3>{animal.name}</h3>
                    <p>{animal.breed} | {animal.gender}</p>
                  </div>
                  <span className="age">{animal.age}</span>
                </div>
                <div className="animal-tags">
                  {animal.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link to={`/animal/${animal.animal_id}`} className="card-btn">
                  Meet {animal.name} <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      <section className="rescue-section" id="rescue">
        <div className="rescue-container">
          <div className="rescue-info">
            <span className="section-tag light">NEED IMMEDIATE HELP?</span>
            <h2>Found an animal in need?</h2>
            <p>Report the animal through our rescue form. Our team will verify the request, assign a volunteer and track the rescue until the animal reaches safety.</p>
            <div className="rescue-steps">
              {[['01', 'Submit Report', 'Tell us where and what happened.'], ['02', 'Verification', 'Our team reviews the request.'], ['03', 'Rescue', 'A volunteer is assigned to help.']].map(([number, title, copy]) => (
                <div className="rescue-step" key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '30px' }}>
              <Link to="/track-rescue" className="white-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Search size={18} /> Track an Existing Rescue
              </Link>
            </div>
          </div>
          <RescueForm />
        </div>
      </section>
      
      <section className="section workflow-section" id="about">
        <Heading tag="HOW IT WORKS" title={<>From rescue to forever home.</>} copy="Every rescue is carefully tracked so that no animal gets lost in the process." />
        <div className="workflow">
          {workflow.map(([Icon, title, copy], index) => (
            <div className="workflow-item" key={title}>
              <div className="workflow-number">0{index + 1}</div>
              <div className="workflow-icon-wrap" style={{ marginBottom: '1rem', color: '#f97316' }}>
                <Icon size={32} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="foster-section" id="foster">
        <div className="foster-container">
          <div className="foster-visual">
            <div className="foster-circle" style={{ overflow: 'hidden', padding: 0, border: '4px solid white', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}>
              <img src="/assets/foster.png" alt="Foster Care" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div className="foster-mini-card">
              <Heart size={20} color="#ef4444" fill="#ef4444" />
              <div>
                <strong>214</strong>
                <small>Active Foster Homes</small>
              </div>
            </div>
          </div>
          <div className="foster-content">
            <span className="section-tag">BECOME A FOSTER</span>
            <h2>You can be their temporary home.</h2>
            <p>Foster families provide rescued animals with a safe environment while they recover or wait for adoption. Even a temporary home can completely change an animal's life.</p>
            <ul className="check-list">
              <li><CheckCircle2 size={16} color="#059669" /> Flexible fostering periods</li>
              <li><CheckCircle2 size={16} color="#059669" /> Support from our rescue team</li>
              <li><CheckCircle2 size={16} color="#059669" /> Medical support when required</li>
              <li><CheckCircle2 size={16} color="#059669" /> Help finding the animal a permanent home</li>
            </ul>
            <Link to="/apply/foster" className="primary-btn">Apply to Foster <ArrowRight size={16} style={{ marginLeft: '8px' }}/></Link>
          </div>
        </div>
      </section>
      
      <section className="section adoption-section" id="adopt">
        <div className="adoption-banner">
          <div>
            <span className="section-tag light">ADOPTION</span>
            <h2>Don't shop. Adopt.</h2>
            <p>Your next best friend might already be waiting for you.</p>
          </div>
          <Link to="/animals" className="white-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Browse Animals <ArrowRight size={16} /></Link>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-content">
          <PawPrint size={48} color="#f97316" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2>Every animal deserves a chance.</h2>
          <p>Whether you rescue, foster, volunteer or adopt, you can make a difference.</p>
          <div className="cta-buttons">
            <a href="#rescue" className="white-btn">Report a Rescue</a>
            <Link to="/animals" className="transparent-btn" style={{ textDecoration: 'none' }}>Find an Animal</Link>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
            <p>Connecting rescued animals with the people who can give them a second chance.</p>
          </div>
          <FooterColumn title="Platform" links={['Adopt', 'Report Rescue', 'Become a Foster', 'Volunteer']} />
          <FooterColumn title="Support" links={['About Us', 'Contact', 'FAQs', 'Privacy Policy']} />
          <div className="footer-column">
            <h4>Contact</h4>
            <p>Pune, Maharashtra</p>
            <p>+91 98765 43210</p>
            <p>hello@pawcare.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Â© 2026 PawCare. All rights reserved.</p>
          <p>Made for animals</p>
        </div>
      </footer>
    </div>
  );
}
