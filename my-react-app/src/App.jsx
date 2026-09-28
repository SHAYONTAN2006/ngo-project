import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AnimalProfile from './pages/AnimalProfile';
import AnimalsGallery from './pages/AnimalsGallery';
import VolunteerOnboarding from './pages/VolunteerOnboarding';
import RescueTracker from './pages/RescueTracker';
import ApplicationForm from './pages/ApplicationForm';
import './App.css';
import './dashboard.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/animal/:id" element={<AnimalProfile />} />
      <Route path="/animals" element={<AnimalsGallery />} />
      <Route path="/volunteer" element={<VolunteerOnboarding />} />
      <Route path="/track-rescue" element={<RescueTracker />} />
      <Route path="/apply/:type" element={<ApplicationForm />} />
    </Routes>
  );
}

export default App;
