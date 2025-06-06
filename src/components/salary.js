import React, { useState } from 'react';
import './salary.css';


const SalaryPage = () => {
  const [selectedMonth] = useState('May 2025');
  const monthlySalary = 3500;

  const salaryData = [
    {
      name: 'Alicia Shankur',
      email: 'alicia shankur@gmail.com',
      title: 'Software Engineer',
      department: 'Engineering',
      salary: '$2,500',
      status: 'Paid',
    },
    {
      name: 'James Oyinkan',
      email: 'jamesoyinkan@gmail.com',
      title: 'Visual Designer',
      department: 'Design',
      salary: '$2,100',
      status: 'Paid',
    },
    {
      name: 'Aresen Vlamadir',
      email: 'darioberik@yahoo.com',
      title: 'Sales Manger',
      department: 'Product',
      salary: '$4,700',
      status: 'Pending',
    },
    {
      name: 'Kito Ashuth',
      email: 'asthutor@gmail.com',
      title: 'Content Writer',
      department: 'Content',
      salary: '$2,000',
      status: 'Paid',
    },
    {
      name: 'Diti Shreyas',
      email: 'ditishreyas@gmail.com',
      title: 'Backend Engineer',
      department: 'Engineering',
      salary: '$2,500',
      status: 'Paid',
    },
    {
      name: 'Alicia Shankur',
      email: 'alicia shankur@gmail.com',
      title: 'Product Manager',
      department: 'Product',
      salary: '$4,000',
      status: 'Pending',
    },
  ];

  return (
    <>
      
      <div className="salary-container">
        <div className="left-salary">
          <h2>Salary Activities</h2>
          <div className="search-filter-row">
            <input type="text" className="search-input" placeholder="🔍 Search" />
            <button className="filter-btn">⚙️ Filter</button>
          </div>

          <div className="salary-table">
            <div className="salary-header">
              <span>Name</span>
              <span>Job Title</span>
              <span>Department</span>
              <span>Net Salary</span>
              <span>Status</span>
            </div>
            {salaryData.map((user, idx) => (
              <div className="salary-row" key={idx}>
                <div>
                  <strong>{user.name}</strong>
                  <div className="email">{user.email}</div>
                </div>
                <span>{user.title}</span>
                <span>{user.department}</span>
                <span>{user.salary}</span>
                <span className={`status ${user.status.toLowerCase()}`}>{user.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="right-profile">
          <div className="month-salary-box">
            <select className="month-dropdown">
              <option>{selectedMonth}</option>
            </select>
            <div className="salary-amount-box">
              Monthly Salary - <strong>${monthlySalary}</strong>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-bg">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="profile-img"
              />
            </div>
            <h3>Elizabeth James</h3>
            <p className="subtitle">UI Designer</p>

            <div className="details-grid">
              <div><strong>Position</strong><span>UI lead</span></div>
              <div><strong>Department</strong><span>Design</span></div>
              <div><strong>Status</strong><span className="active">Active</span></div>
              <div><strong>Basic Salary</strong><span>$3500</span></div>
              <div><strong>Bonus & Overtime</strong><span>$500</span></div>
              <div><strong>Deduction</strong><span>$0.00</span></div>
              <div><strong>Next Salary</strong><span>$3500</span></div>
              <div><strong>Bank Details</strong><span>234567890 Polaris Bank</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalaryPage;
