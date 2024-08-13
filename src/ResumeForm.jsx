import React, { useState } from 'react';
import './ResumeForm.css';

function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });
  const [template, setTemplate] = useState('template1');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTemplateChange = (e) => {
    setTemplate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData and template choice to the backend for processing
    fetch('/api/generateResume', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formData, template })
    })
      .then(res => res.json())
      .then(data => {
        // Handle the response (e.g., show preview or download PDF)
        console.log(data);
      });
  };

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="education">Education</label>
        <textarea id="education" name="education" placeholder="Your Education" onChange={handleChange} required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="experience">Experience</label>
        <textarea id="experience" name="experience" placeholder="Your Work Experience" onChange={handleChange} required></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="skills">Skills</label>
        <textarea id="skills" name="skills" placeholder="Your Skills" onChange={handleChange} required></textarea>
      </div>
      <div className="form-group template-options">
        <p>Select Resume Template:</p>
        <label>
          <input type="radio" value="template1" checked={template === 'template1'} onChange={handleTemplateChange} />
          Template 1
        </label>
        <label>
          <input type="radio" value="template2" checked={template === 'template2'} onChange={handleTemplateChange} />
          Template 2
        </label>
        <label>
          <input type="radio" value="template3" checked={template === 'template3'} onChange={handleTemplateChange} />
          Template 3
        </label>
        <label>
          <input type="radio" value="template4" checked={template === 'template4'} onChange={handleTemplateChange} />
          Template 4
        </label>
      </div>
      <button type="submit" className="submit-button">Generate Resume</button>
    </form>
  );
}

export default ResumeForm;
