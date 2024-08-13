// src/components/CoverPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CoverPage.css';

function CoverPage() {
  return (
    <div className="cover-page-container">
      <header className="cover-header">
        <h1>Welcome to the AI Resume Builder</h1>
        <p>Create a professional resume effortlessly with our AI-powered tool. Simply enter your details, choose a template, and get a polished resume in minutes.</p>
        <Link to="/resume-builder" className="start-button">Get Started</Link>
      </header>
    </div>
  );
}

export default CoverPage;
