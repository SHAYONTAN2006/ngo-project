import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, ArrowLeft, Search, Filter } from 'lucide-react';
import { mockDatabase } from '../data/mockData';

export default function AnimalsGallery() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const animals = mockDatabase.animals.filter(animal => {
    // Assuming all in mockData are dogs for now based on breed, or we can just ignore type filter if 'All'
    const isDog = animal.breed.toLowerCase().includes('dog') || animal.breed.toLowerCase().includes('pomeranian');
    const matchesFilter = filter === 'All' || (filter === 'Dog' && isDog) || (filter === 'Cat' && !isDog);
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          animal.breed.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="home-page" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
      <header className="navbar">
        <div className="nav-container">
          <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
            <PawPrint className="brand-icon" size={24} color="#f97316" />
            <span>PawCare</span>
          </Link>
          <div className="nav-actions">
            <Link to="/" className="nav-rescue-btn" style={{ background: 'transparent', color: '#64748b', border: '1px solid #cbd5e1' }}>
              <ArrowLeft size={16} style={{ marginRight: '8px' }}/> Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span className="section-tag">MEET OUR ANIMALS</span>
            <h1 style={{ fontSize: '3rem', color: '#1e293b', margin: '10px 0 0 0' }}>Find Your New Best Friend</h1>
          </div>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Search by name or breed..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ padding: '12px 15px 12px 40px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', minWidth: '250px' }}
              />
            </div>
            
            <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
              {['All', 'Dog', 'Cat'].map(type => (
                <button 
                  key={type}
                  onClick={() => setFilter(type)}
                  style={{ 
                    padding: '12px 20px', 
                    border: 'none', 
                    backgroundColor: filter === type ? '#f97316' : 'transparent',
                    color: filter === type ? 'white' : '#64748b',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {type}s
                </button>
              ))}
            </div>
          </div>
        </div>

        {animals.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', backgroundColor: 'white', borderRadius: '24px', border: '1px dashed #cbd5e1' }}>
            <Filter size={48} color="#cbd5e1" style={{ marginBottom: '20px' }} />
            <h3 style={{ fontSize: '1.5rem', color: '#475569', marginBottom: '10px' }}>No animals found</h3>
            <p style={{ color: '#94a3b8' }}>Try adjusting your search or filters.</p>
            <button onClick={() => { setFilter('All'); setSearchQuery(''); }} className="secondary-btn" style={{ marginTop: '20px' }}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="animal-grid">
            {animals.map((animal) => (
              <div className="animal-card" key={animal.animal_id}>
                <div className="animal-card-image">
                  <div className={`animal-status ${animal.status === 'Ready' ? '' : 'foster'}`}>
                    {animal.status === 'Available' ? 'Ready for Adoption' : 'In Foster Care'}
                  </div>
                  <img src={animal.photo} alt={animal.name} />
                </div>
                <div className="animal-card-content">
                  <div className="animal-title">
                    <div>
                      <h3>{animal.name}</h3>
                      <p>{animal.breed}</p>
                    </div>
                    <span className="age">{animal.age}</span>
                  </div>
                  <div className="animal-tags">
                    {animal.tags?.map(trait => <span key={trait}>{trait}</span>)}
                  </div>
                  <Link to={`/animal/${animal.animal_id}`} className="card-btn" style={{ textDecoration: 'none' }}>View Full Profile</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
