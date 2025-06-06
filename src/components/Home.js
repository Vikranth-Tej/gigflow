import React from 'react';
import './Home.css'; // We'll create this for additional styling

const Home = () => {
  // Sample data - in a real app, this would come from props or API
  const dashboardData = {
    user: {
      name: "Nuraj group",
      organization: "OG"
    },
    stats: [
      { title: "Employees", value: 24, link: "/employees" },
      { title: "Hiring", value: 5, link: "/hiring" },
      { title: "Projects", value: 1, link: "/projects" }
    ],
    performance: [80, 70, 60, 50, 40, 30, 20, 10],
    upcomingActions: [
      { time: "03:30 pm - 04:30 pm", description: "Internal Meeting with Jade Sapphire - UI designer" },
      { time: "05:00 pm - 05:30 pm", description: "Internal Meeting with Content team" },
      { time: "07:00 pm - 05:30 pm", description: "Interview with Achuyut - UI intern" }
    ]
  };

  const maxPerformance = Math.max(...dashboardData.performance);

  return (
    <div className="home-container">
      {/* Welcome Header */}
      <header className="dashboard-header">
        <h1>Welcome Back, {dashboardData.user.name}</h1>
        <p className="org-badge">{dashboardData.user.organization} /</p>
      </header>
      
      {/* Stats Cards */}
      <div className="stats-grid">
        {dashboardData.stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.title}</h3>
            <div className="stat-value">{stat.value}</div>
            <a href={stat.link} className="stat-link">View Details →</a>
          </div>
        ))}
      </div>
      
      {/* Main Content Area */}
      <div className="content-grid">
        {/* Performance Chart */}
        <section className="performance-section">
          <h2>Performance Report</h2>
          <div className="chart-container">
            {dashboardData.performance.map((value, index) => (
              <div 
                key={index} 
                className="chart-bar" 
                style={{ height: `${(value / maxPerformance) * 100}%` }}
                title={`${value}%`}
              >
                <span className="chart-value">{value}%</span>
              </div>
            ))}
          </div>
        </section>
        
        {/* Upcoming Actions */}
        <section className="actions-section">
          <h2>Upcoming Actions</h2>
          <div className="actions-list">
            {dashboardData.upcomingActions.map((action, index) => (
              <div key={index} className="action-item">
                <div className="action-time">{action.time}</div>
                <div className="action-description">{action.description}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;