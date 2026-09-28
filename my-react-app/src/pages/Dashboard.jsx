import React, { useState } from 'react';
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
  MoreHorizontal,
  LayoutDashboard,
  ShieldAlert,
  Cat,
  FileText,
  Activity,
  Users
} from 'lucide-react';
import { mockDatabase } from '../data/mockData';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Rescue Requests', icon: ShieldAlert },
  { name: 'Animals', icon: Cat },
  { name: 'Applications', icon: FileText },
  { name: 'Volunteers', icon: Users },
];

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
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [cases, setCases] = useState(mockDatabase.rescueCases);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Assign transport for RR-1047', desc: 'Due by 3:00 PM', done: false },
    { id: 2, title: 'Review adoption application', desc: 'Pending home check', done: false },
    { id: 3, title: 'Vaccination follow-up', desc: '3 animals due today', done: false }
  ]);
  const [alerts, setAlerts] = useState([
    { id: 1, Icon: AlertTriangle, title: '3 urgent rescue requests', copy: 'Require immediate attention', color: '#ef4444' },
    { id: 2, Icon: Syringe, title: '5 vaccinations due', copy: 'Upcoming this week', color: '#eab308' },
    { id: 3, Icon: Calendar, title: '4 applications pending', copy: 'Awaiting review', color: '#3b82f6' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTask = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t));
  };

  const removeAlert = (alertId) => {
    setAlerts(alerts.filter(a => a.id !== alertId));
  };

  const addMockCase = () => {
    const newCase = {
      rescue_id: `RR-${Math.floor(1000 + Math.random() * 9000)}`,
      animal_type: 'Dog',
      detail: 'New Rescue',
      status: 'Reported',
      priority: 'High'
    };
    setCases([newCase, ...cases]);
  };

  const renderContent = () => {
    if (activeTab === 'Rescue Requests') {
      return (
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '20px' }}>Rescue Requests</h2>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-light)' }}>
                <th style={{ padding: '12px' }}>ID</th>
                <th style={{ padding: '12px' }}>Animal</th>
                <th style={{ padding: '12px' }}>Detail</th>
                <th style={{ padding: '12px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {cases.map(c => (
                <tr key={c.rescue_id} style={{ borderBottom: '1px solid #f2ebe4' }}>
                  <td style={{ padding: '12px' }}>{c.rescue_id}</td>
                  <td style={{ padding: '12px' }}>{c.animal_type}</td>
                  <td style={{ padding: '12px' }}>{c.detail}</td>
                  <td style={{ padding: '12px' }}>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (activeTab === 'Animals') {
      return (
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '20px' }}>Animals</h2>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-light)' }}>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Breed</th>
                <th style={{ padding: '12px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockDatabase.animals.map(a => (
                <tr key={a.animal_id} style={{ borderBottom: '1px solid #f2ebe4' }}>
                  <td style={{ padding: '12px' }}>{a.name}</td>
                  <td style={{ padding: '12px' }}>{a.breed}</td>
                  <td style={{ padding: '12px' }}>{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    if (activeTab === 'Applications') {
      return (
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '20px' }}>Applications</h2>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-light)' }}>
                <th style={{ padding: '12px' }}>Applicant</th>
                <th style={{ padding: '12px' }}>Type</th>
                <th style={{ padding: '12px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px' }}>Priya S.</td><td style={{ padding: '12px' }}>Adopt</td><td style={{ padding: '12px' }}>Approved</td></tr>
              <tr><td style={{ padding: '12px' }}>Arjun K.</td><td style={{ padding: '12px' }}>Adopt</td><td style={{ padding: '12px' }}>Review</td></tr>
              <tr><td style={{ padding: '12px' }}>Neha P.</td><td style={{ padding: '12px' }}>Foster</td><td style={{ padding: '12px' }}>Pending</td></tr>
            </tbody>
          </table>
        </div>
      );
    }
    if (activeTab === 'Volunteers') {
      return (
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--border)' }}>
          <h2 style={{ marginBottom: '20px' }}>Volunteers</h2>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border)', color: 'var(--text-light)' }}>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Role</th>
                <th style={{ padding: '12px' }}>Availability</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '12px' }}>Meera</td><td style={{ padding: '12px' }}>Transport</td><td style={{ padding: '12px' }}>Available</td></tr>
              <tr><td style={{ padding: '12px' }}>Rahul</td><td style={{ padding: '12px' }}>Medical Aid</td><td style={{ padding: '12px' }}>Busy</td></tr>
              <tr><td style={{ padding: '12px' }}>Sneha</td><td style={{ padding: '12px' }}>Foster Care</td><td style={{ padding: '12px' }}>Free</td></tr>
            </tbody>
          </table>
        </div>
      );
    }

    return (
      <>
        {/* Updated Hero Banner - More Theme Central */}
        <section className="hero-banner" style={{ background: 'white', border: '1px solid var(--border)', color: 'var(--text)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
          <div>
            <span className="eyebrow" style={{ background: '#fff4df', color: '#e66a3c', borderColor: '#ffe4b5' }}>Admin Management</span>
            <h1 style={{ color: 'var(--secondary)' }}>Everything in one place.</h1>
            <p style={{ color: 'var(--text-light)' }}>Monitor rescue cases, animals, volunteers, medical records and adoption applications from a centralized dashboard.</p>
            <div className="hero-actions">
              <button type="button" className="action-btn primary" onClick={() => alert('Opening daily review...')}>Review Today</button>
              <button type="button" className="action-btn secondary" style={{ color: 'var(--secondary)', borderColor: 'var(--border)', background: '#fdfaf7' }} onClick={() => alert('Exporting report...')}>Export Report</button>
            </div>
          </div>
          <div className="hero-metrics">
            {[['Open rescues', cases.length], ['Adoption tasks', '18'], ['Volunteers on duty', '14'], ['Medical follow-ups', '09']].map(([label, value]) => (
              <div className="mini-metric" key={label} style={{ background: '#fdfaf7', border: '1px solid var(--border)', color: 'var(--secondary)' }}>
                <span style={{ color: 'var(--text-light)' }}>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="stats-grid">
          {[[AlertTriangle, 'Pending Rescues', cases.length, '+3', 'red', 'warning'], [Dog, 'Active Animals', '148', '+12%', 'blue', 'up'], [HomeIcon, 'In Foster Care', '37', '+6%', 'green', 'up'], [Heart, 'Adoption Requests', '18', '+2', 'purple', 'warning']].map(([Icon, label, value, tag, tone, tagTone]) => (
            <div className="stat-card" key={label}>
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
          <button style={{background: 'none', border: 'none', color: 'var(--primary)', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => alert('Opening map view...')}>View Map</button>
        </div>
        <section className="kanban-board">
          {['Reported', 'Rescue', 'Treatment', 'Recovery'].map(statusColumn => {
            const columnCases = cases.filter(c => 
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
                      <button style={{background: 'none', border: 'none', cursor: 'pointer'}} onClick={() => alert(`Managing case ${caseItem.rescue_id}`)}>
                        <MoreHorizontal size={14} color="#94a3b8" />
                      </button>
                    </div>
                    <div className="kanban-card-desc">
                      {caseItem.animal_type} | {caseItem.detail}
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
              <span>{alerts.length} total</span>
            </div>
            <div className="alert-list">
              {alerts.length === 0 ? (
                <p style={{ color: 'var(--text-light)', fontSize: '13px', textAlign: 'center', padding: '10px 0' }}>No new alerts!</p>
              ) : alerts.map((alert) => (
                <div className="alert-item" key={alert.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div>
                      <strong>{alert.title}</strong>
                      <small>{alert.copy}</small>
                    </div>
                  </div>
                  <button onClick={() => removeAlert(alert.id)} style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' }}>Dismiss</button>
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
              <button style={{background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => setActiveTab('Applications')}>Manage All</button>
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
                    <th>Action</th>
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
                      <td>
                        <button style={{ padding: '4px 8px', borderRadius: '4px', background: '#fdfaf7', border: '1px solid var(--border)', cursor: 'pointer', fontSize: '11px' }}>Review</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel">
            <div className="panel-header">
              <h3>Today's Tasks</h3>
              <button style={{background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold'}} onClick={() => {
                const title = prompt('Enter task description:');
                if (title) setTasks([...tasks, { id: Date.now(), title, desc: 'Added just now', done: false }]);
              }}>Add</button>
            </div>
            <div className="tasks">
              {tasks.map((task) => (
                <div className="task-item" key={task.id} style={{ opacity: task.done ? 0.6 : 1 }}>
                  <button 
                    onClick={() => toggleTask(task.id)}
                    className="task-check" 
                    style={{ background: task.done ? 'var(--green)' : '#f7e3d7', cursor: 'pointer', border: 'none' }}
                  >
                    <CheckCircle2 size={16} color="white" />
                  </button>
                  <div style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
                    <strong>{task.title}</strong>
                    <small>{task.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <div className="dashboard-page">
      <aside className="sidebar">
        <Link to="/" className="brand">
          <div className="brand-name">PawCare</div>
        </Link>
        <nav className="nav-group">
          <div className="nav-label">Overview</div>
          {menuItems.map((item) => (
            <button 
              onClick={() => setActiveTab(item.name)}
              className={`nav-item ${activeTab === item.name ? 'active' : ''}`} 
              key={item.name}
              style={{ width: '100%', textAlign: 'left', background: activeTab === item.name ? 'rgba(230, 106, 60, 0.08)' : 'transparent', border: 'none', cursor: 'pointer', paddingLeft: '20px' }}
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="sidebar-card">
          <h4>Need extra help?</h4>
          <p>Assign a volunteer and open a new emergency case instantly.</p>
          <button type="button" className="mini-btn" onClick={addMockCase}>Create Case</button>
        </div>
      </aside>
      <main className="main">
        <header className="topbar">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Search rescue cases, animals, volunteers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="top-actions" style={{ display: 'flex', gap: '12px' }}>
            <button type="button" aria-label="Notifications" onClick={() => alert('You have no new notifications.')} style={{ background: '#f8f0e7', border: '1px solid var(--border)', color: 'var(--secondary)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '13px' }}>Alerts</button>
            <button type="button" aria-label="Messages" onClick={() => alert('You have no new messages.')} style={{ background: '#f8f0e7', border: '1px solid var(--border)', color: 'var(--secondary)', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '500', fontSize: '13px' }}>Messages</button>
          </div>
        </header>
        
        {renderContent()}

      </main>
    </div>
  );
}
