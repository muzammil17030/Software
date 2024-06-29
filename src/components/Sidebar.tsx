import React from 'react';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar: React.FC = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/teachers">Teachers</Link></li>
        <li><Link to="/subjects">Subjects</Link></li>
        <li><Link to="/School">School</Link></li>
        <li><Link to="/Sylabbus">Sylabbus</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/Fees">Fees</Link></li>
        <li><Link to="/Admission">Admission</Link></li>
        <li><Link to="/Exams">Exams</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;