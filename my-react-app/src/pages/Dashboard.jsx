import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PawPrint, 
  Search, 
  Bell, 
  Mail, 
  AlertTriangle, 
  Dog, 
  Home as HomeIcon, 
  Heart,
  Calendar,
  CheckCircle2,
  Syringe,
  Clock,
  MoreHorizontal
} from 'lucide-react';
import { mockDatabase } from '../data/mockData';

const menu = ['Dashboard', 'Rescue Requests', 'Animals', 'Medical Records', 'Vaccinations', 'Foster', 'Adoption', 'Volunteers'];

function Board({ title, items, values }) { 
  return (
    <div className="board-card">
      <h4>{title}</h4>
      <div className="mini-bars">
        {items.map((item, index) => (
          <div className="mini-bar-row" key={item}>
            <label><span>{item}</span><strong>{values[index]}</strong></label>
            <div className="bar-track"><span style={{ width: values[index] }} /></div>
          </div>
        ))}
      </div>
    </div>
  ); 
}

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <PawPrint className="brand-mark" size={24} color="#f97316" />
          <div className="brand-name">Paw<span>Care</span></div>
        </Link>
        <nav className="nav-group">
          <div className="nav-label">Overview</div>
          {menu.map((item, index) => (
            <a href="#dashboard" className={`nav-item ${index === 0 ? 'active' : ''}`} key={item}>
              <span className="nav-icon">{item.slice(0, 2).toUpperCase()}</span>
              {item}
            </a>
          ))}
        </nav>
        <div className="sidebar-card">
          <h4>Need extra help?</h4>
          <p>Assign a volunteer and open a new emergency case instantly.</p>
          <button type="button" className="mini-btn">Create Case</button>
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <div className="search-box">
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Search rescue cases, animals, volunteers..." />
          </div>
          <div className="top-actions">
            <button type="button" className="icon-btn" aria-label="Notifications"><Bell size={20} /></button>
            <button type="button" className="icon-btn" aria-label="Messages"><Mail size={20} /></button>
            <div className="profile-chip">
              <div className="avatar">A</div>
              <div>
                <strong>Admin</strong>
                <small>Operations</small>
              </div>
            </div>
          </div>
        </header>
        <section className="hero-banner">
          <div>
            <span className="eyebrow">Admin Management</span>
            <h1>Everything in one place.</h1>
            <p>Monitor rescue cases, animals, volunteers, medical records and adoption applications from a centralized dashboard.</p>
            <div className="hero-actions">
              <button type="button" className="action-btn primary">Review Today</button>
              <button type="button" className="action-btn secondary">Export Report</button>
            </div>
          </div>
          <div className="hero-metrics">
            {[['Open rescues', '24'], ['Adoption tasks', '18'], ['Volunteers on duty', '14'], ['Medical follow-ups', '09']].map(([label, value]) => (
              <div className="mini-metric" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="stats-grid">
          {[[AlertTriangle, 'Pending Rescues', '24', '+3', 'red', 'warning'], [Dog, 'Active Animals', '148', '+12%', 'blue', 'up'], [HomeIcon, 'In Foster Care', '37', '+6%', 'green', 'up'], [Heart, 'Adoption Requests', '18', '+2', 'purple', 'warning']].map(([Icon, label, value, tag, tone, tagTone]) => (
            <div className="stat-card" key={label}>
              <div className={`stat-icon ${tone}`}><Icon size={24} /></div>
              <div>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
              <div className={`stat-tag ${tagTone}`}>{tag}</div>
            </div>
          ))}
        </section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{fontSize: '1.4rem', margin: 0}}>Rescue Operations Board</h3>
          <a href="#dashboard" style={{color: 'var(--primary)', fontSize: '13px', fontWeight: 'bold'}}>View Map</a>
        </div>
        <section className="kanban-board">
          {['Reported', 'Rescue', 'Treatment', 'Recovery'].map(statusColumn => {
            const columnCases = mockDatabase.rescueCases.filter(c => 
              c.status === statusColumn || (statusColumn === 'Reported' && c.status === 'New') || (statusColumn === 'Recovery' && c.status === 'Foster')
            );
            return (
              <div className="kanban-column" key={statusColumn}>
                <div className="kanban-column-header">
                  <span>{statusColumn}</span>
                  <span className="kanban-count">{columnCases.length}</span>
                </div>
                {columnCases.map(caseItem => (
                  <div className="kanban-card" key={caseItem.rescue_id}>
                    <div className="kanban-card-title">
                      <span>{caseItem.rescue_id}</span>
                      <MoreHorizontal size={14} color="#94a3b8" />
                    </div>
                    <div className="kanban-card-desc">
                      {caseItem.animal_type} • {caseItem.detail}
                    </div>
                    <div className="kanban-card-footer">
                      <span className={`case-priority`} style={{color: caseItem.priority === 'Urgent' ? 'var(--red)' : 'var(--text-light)'}}>{caseItem.priority}</span>
                      <span style={{fontSize: '10px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px'}}>
                        <Clock size={10} /> 2h ago
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </section>
        
        <section className="content-grid" style={{ gridTemplateColumns: '1fr' }}>
          <div className="panel">
            <div className="panel-header">
              <h3>Alerts</h3>
              <a href="#dashboard">5 total</a>
            </div>
            <div className="alert-list">
              {[[AlertTriangle, '3 urgent rescue requests', 'Require immediate attention', '#ef4444'], [Syringe, '5 vaccinations due', 'Upcoming this week', '#eab308'], [Calendar, '4 applications pending', 'Awaiting review', '#3b82f6']].map(([Icon, title, copy, color]) => (
                <div className="alert-item" key={title}>
                  <span className="alert-dot"><Icon size={20} color={color} /></span>
                  <div>
                    <strong>{title}</strong>
                    <small>{copy}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="board-grid">
          <Board title="Adoption Pipeline" items={['Application', 'Screening', 'Home check']} values={['82%', '64%', '91%']} />
          <div className="board-card">
            <h4>Volunteer Availability</h4>
            {[['M', 'Meera', 'Transport', 'Available', 'available'], ['R', 'Rahul', 'Medical Aid', 'Busy', 'busy'], ['S', 'Sneha', 'Foster Care', 'Free', 'available']].map(([initial, name, role, status, tone]) => (
              <div className="volunteer-row" key={name}>
                <div className="volunteer-avatar">{initial}</div>
                <div>
                  <strong>{name}</strong>
                  <small>{role}</small>
                </div>
                <span className={`availability ${tone}`}>{status}</span>
              </div>
            ))}
          </div>
          <Board title="Medical Tracking" items={['Vaccinations', 'Recovery', 'Checkups']} values={['76%', '58%', '88%']} />
        </section>
        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Adoption & Foster Applications</h3>
              <a href="#dashboard">Manage All</a>
            </div>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Animal</th>
                    <th>Applicant</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {[['Max', 'Priya S.', 'Adopt', 'Approved', 'green', '3 days'], ['Luna', 'Arjun K.', 'Adopt', 'Review', 'orange', '5 days'], ['Rocky', 'Neha P.', 'Foster', 'Pending', 'red', '1 day'], ['Bella', 'Rohan M.', 'Foster', 'Approved', 'green', '2 days']].map(([animal, applicant, type, status, tone, timeline]) => (
                    <tr key={applicant}>
                      <td>{animal}</td>
                      <td>{applicant}</td>
                      <td><strong>{type}</strong></td>
                      <td><span className={`pill ${tone}`}>{status}</span></td>
                      <td>{timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel">
            <div className="panel-header">
              <h3>Today's Tasks</h3>
              <a href="#dashboard">Add</a>
            </div>
            <div className="tasks">
              {[['Assign transport for RR-1047', 'Due by 3:00 PM'], ['Review adoption application', 'Pending home check'], ['Vaccination follow-up', '3 animals due today']].map(([title, copy]) => (
                <div className="task-item" key={title}>
                  <div className="task-check"><CheckCircle2 size={16} color="white" /></div>
                  <div>
                    <strong>{title}</strong>
                    <small>{copy}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
