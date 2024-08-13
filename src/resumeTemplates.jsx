// src/resumeTemplates.js

export const templates = {
    template1: (data) => `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h1 style="text-align: center; color: #007bff;">${data.name}</h1>
        <p style="text-align: center;"><strong>Email:</strong> ${data.email} | <strong>Phone:</strong> ${data.phone}</p>
        <h2 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Education</h2>
        <p>${data.education}</p>
        <h2 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Experience</h2>
        <p>${data.experience}</p>
        <h2 style="border-bottom: 2px solid #007bff; padding-bottom: 5px;">Skills</h2>
        <p>${data.skills}</p>
      </div>
    `,
  
    template2: (data) => `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #444; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
        <h1 style="color: #ff5722;">${data.name}</h1>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h2 style="border-bottom: 1px solid #ff5722; padding-bottom: 5px;">Education</h2>
        <p>${data.education}</p>
        <h2 style="border-bottom: 1px solid #ff5722; padding-bottom: 5px;">Experience</h2>
        <p>${data.experience}</p>
        <h2 style="border-bottom: 1px solid #ff5722; padding-bottom: 5px;">Skills</h2>
        <p>${data.skills}</p>
      </div>
    `,
  
    template3: (data) => `
      <div style="font-family: 'Courier New', Courier, monospace; color: #222; padding: 20px; background-color: #f8f9fa; border-left: 5px solid #28a745;">
        <h1 style="color: #28a745; border-bottom: 2px dashed #28a745; padding-bottom: 5px;">${data.name}</h1>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h2 style="border-bottom: 1px dashed #28a745; padding-bottom: 5px;">Education</h2>
        <p>${data.education}</p>
        <h2 style="border-bottom: 1px dashed #28a745; padding-bottom: 5px;">Experience</h2>
        <p>${data.experience}</p>
        <h2 style="border-bottom: 1px dashed #28a745; padding-bottom: 5px;">Skills</h2>
        <p>${data.skills}</p>
      </div>
    `,
  
    template4: (data) => `
      <div style="font-family: 'Times New Roman', Times, serif; color: #666; padding: 20px; background: linear-gradient(45deg, #f3f4f6, #eaeaea); border: 1px solid #ccc; border-radius: 12px;">
        <h1 style="color: #333; text-align: center;">${data.name}</h1>
        <p style="text-align: center;"><strong>Email:</strong> ${data.email} | <strong>Phone:</strong> ${data.phone}</p>
        <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px;">Education</h2>
        <p>${data.education}</p>
        <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px;">Experience</h2>
        <p>${data.experience}</p>
        <h2 style="border-bottom: 2px solid #333; padding-bottom: 5px;">Skills</h2>
        <p>${data.skills}</p>
      </div>
    `,
  };
  