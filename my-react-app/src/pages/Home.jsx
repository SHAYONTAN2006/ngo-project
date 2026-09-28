import React from 'react';
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
  Search
} from 'lucide-react';
import heroPhoto from '../assets/dog-hero.jpeg';
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
      <span>Paw<span>Care</span></span>
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

export default function Home() {
  return (
    <div className="home-page">
      <header className="navbar">
        <div className="nav-container">
          <Brand onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
          <nav className="nav-links">
            {['Home', 'Rescue', 'Animals', 'Foster', 'Adopt', 'How It Works'].map((label) => 
              <a href={`#${label === 'How It Works' ? 'about' : label.toLowerCase()}`} key={label}>{label}</a>
            )}
          </nav>
          <div className="nav-actions">
            <Link to="/dashboard" className="login-btn">Admin Login</Link>
            <a href="#rescue" className="nav-rescue-btn">Report Rescue</a>
          </div>
          <button type="button" className="mobile-menu" aria-label="Open menu">☰</button>
        </div>
      </header>
      
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <h1>DOG FOR<span>ADOPTION</span></h1>
            <p>We are helping lost and abandoned dogs find their forever homes. Currently, we have a Pomeranian looking for a loving family. This dog is healthy, neutered, and vaccinated. If you are interested in adopting or fostering, please contact us.</p>
            <div className="adoption-bullet-list">
              <div className="bullet-line"><CheckCircle2 size={16} /> Pomeranian : Male</div>
              <div className="bullet-line"><CheckCircle2 size={16} /> Healthy</div>
              <div className="bullet-line"><CheckCircle2 size={16} /> Neutered &amp; Vaccinated</div>
            </div>
            <div className="adoption-contact">
              <p>Location: Pune - Pashan</p>
              <strong>Contact : 94052 66596</strong>
              <span>RSFW Foundation</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="support-badge">
              <ShieldCheck size={16} color="#059669" />
              <span>REFORM SOCIAL WELFARE</span>
            </div>
            <div className="hero-card-main">
              <img src={heroPhoto} alt="Dog for adoption" className="dog-photo" />
            </div>
            <div className="secondary-photo-card">
              <Heart size={24} color="#ef4444" fill="#ef4444" />
              <div>
                <strong>Adopt Me</strong>
                <small>Healthy &amp; Safe</small>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="quick-actions">
        <div className="quick-container">
          <QuickCard icon={AlertTriangle} title="Report a Rescue" copy="Found an animal that needs help?" href="#rescue" />
          <QuickCard icon={PawPrint} title="Adopt an Animal" copy="Give a rescued animal a forever home." href="#animals" />
          <QuickCard icon={HomeIcon} title="Become a Foster" copy="Provide temporary care and love." href="#foster" />
        </div>
      </section>
      
      <section className="section animals-section" id="animals">
        <Heading tag="MEET OUR ANIMALS" title={<>Looking for your<span>new best friend?</span></>} />
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
                    <p>{animal.breed} • {animal.gender}</p>
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
            <h2>Found an animal<span>in need?</span></h2>
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
        <Heading tag="HOW IT WORKS" title={<>From rescue to<span>forever home.</span></>} copy="Every rescue is carefully tracked so that no animal gets lost in the process." />
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
            <div className="foster-circle">
              <HomeIcon size={48} color="white" />
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
            <h2>You can be their<span>temporary home.</span></h2>
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
            <h2>Don't shop.<span>Adopt.</span></h2>
            <p>Your next best friend might already be waiting for you.</p>
          </div>
          <a href="#animals" className="white-btn">Browse Animals <ArrowRight size={16} /></a>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="cta-content">
          <PawPrint size={48} color="#f97316" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2>Every animal deserves<span>a chance.</span></h2>
          <p>Whether you rescue, foster, volunteer or adopt, you can make a difference.</p>
          <div className="cta-buttons">
            <a href="#rescue" className="white-btn">Report a Rescue</a>
            <a href="#animals" className="transparent-btn">Find an Animal</a>
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
          <p>© 2026 PawCare. All rights reserved.</p>
          <p>Made for animals</p>
        </div>
      </footer>
    </div>
  );
}
