import React from 'react';
import ResumeForm from './components/ResumeForm';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Resume Builder</h1>
      </header>
      <main className="app-main">
        <ResumeForm />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 AI Resume Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
