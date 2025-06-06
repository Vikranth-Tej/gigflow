import React from 'react';
import './people.css';


const peopleData = [
  {
    name: 'Alicia Shankur',
    email: 'alicia.shankur@gmail.com',
    title: 'Software Engineer',
    dept: 'Engineering',
    salary: '$2,500',
    date: 'Mar 16, 2023',
    status: 'Active',
    cycle: 'Hired',
  },
  {
    name: 'James Oyinkan',
    email: 'jamesoyinkan@gmail.com',
    title: 'Visual Designer',
    dept: 'Design',
    salary: '$2,000',
    date: 'Jan 16, 2023',
    status: 'Active',
    cycle: 'Hired',
  },
  {
    name: 'Diti Shreyas',
    email: 'ditishreyas@gmail.com',
    title: 'Visual Designer',
    dept: 'Design',
    salary: '$2,000',
    date: 'Dec 09, 2022',
    status: 'Inactive',
    cycle: 'Employed',
  },
  {
    name: 'Ishita Bhatgnar',
    email: 'ishitadgir67@gmail.com',
    title: 'UI/UX Designer',
    dept: 'Design',
    salary: '$1,500',
    date: 'Jan 09, 2024',
    status: 'Active',
    cycle: 'Employed',
  },
  {
    name: 'Kito Ashuth',
    email: 'asthutor@gmail.com',
    title: 'Content Writer',
    dept: 'Content',
    salary: '$1,000',
    date: 'Jan 09, 2024',
    status: 'Active',
    cycle: 'Employed',
  },
  {
    name: 'Dario Berik',
    email: 'darioberik@yahoo.com',
    title: 'Sales Manager',
    dept: 'Operation',
    salary: '$4,000',
    date: 'Feb 21, 2022',
    status: 'Active',
    cycle: 'Hired',
  },
];

const People = () => {
  return (
    <>
      
      <div className="people-container">
        <div className="header-section">
          <h2>List of people</h2>
          <button className="btn-add">Add new member</button>
        </div>

        <div className="filter-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <select><option>Type</option></select>
          <select><option>Role</option></select>
          <select><option>Advanced Filter</option></select>
          <button className="btn-export">Export</button>
        </div>

        <div className="people-table">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job Title</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Start Date</th>
                <th>Life Cycle</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {peopleData.map((person, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>
                    <div className="person-info">
                      <div className="name">{person.name}</div>
                      <div className="email">{person.email}</div>
                    </div>
                  </td>
                  <td>{person.title}</td>
                  <td>{person.dept}</td>
                  <td>{person.salary}</td>
                  <td>{person.date}</td>
                  <td>{person.cycle}</td>
                  <td>
                    <span className={`status-badge ${person.status.toLowerCase()}`}>
                      {person.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default People;
