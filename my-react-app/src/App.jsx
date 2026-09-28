import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AnimalProfile from './pages/AnimalProfile';
import AnimalsGallery from './pages/AnimalsGallery';
import VolunteerOnboarding from './pages/VolunteerOnboarding';
import RescueTracker from './pages/RescueTracker';
import ApplicationForm from './pages/ApplicationForm';
import './App.css';
import './dashboard.css';

function PageWrapper({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // 800ms loading animation
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', background: 'var(--bg)', color: 'var(--primary)' }}>
        <Loader2 size={48} className="spin" />
        <h2 style={{ marginTop: '16px', color: 'var(--secondary)' }}>Loading...</h2>
      </div>
    );
  }

  return children;
}

function App() {
  return (
    <PageWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/animal/:id" element={<AnimalProfile />} />
        <Route path="/animals" element={<AnimalsGallery />} />
        <Route path="/volunteer" element={<VolunteerOnboarding />} />
        <Route path="/track-rescue" element={<RescueTracker />} />
        <Route path="/apply/:type" element={<ApplicationForm />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
