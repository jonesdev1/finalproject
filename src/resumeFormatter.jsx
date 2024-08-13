function applyTemplate1(data) {
  return `
    <div style="width: 100%; height: 100%; padding: 40px; box-sizing: border-box; font-family: 'Poppins', sans-serif;">
      <h1 style="font-size: 36px; margin-bottom: 10px;">${data.name}</h1>
      <p style="font-size: 18px; margin-bottom: 30px;">${data.email} | ${data.phone}</p>
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Education</h2>
        <p style="font-size: 18px;">${data.education}</p>
      </div>
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Experience</h2>
        <p style="font-size: 18px;">${data.experience}</p>
      </div>
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Skills</h2>
        <p style="font-size: 18px;">${data.skills}</p>
      </div>
    </div>
  `;
}

function applyTemplate2(data) {
  return `
    <div style="width: 100%; height: 100%; padding: 40px; box-sizing: border-box; font-family: 'Poppins', sans-serif;">
      <h1 style="font-size: 36px; margin-bottom: 10px;">${data.name}</h1>
      <p style="font-size: 18px; margin-bottom: 30px;">${data.phone} | ${data.email}</p>
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Professional Experience</h2>
        <p style="font-size: 18px;">${data.experience}</p>
      </div>
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Education</h2>
        <p style="font-size: 18px;">${data.education}</p>
      </div>
      <div style="margin-bottom: 30px;">
        <h2 style="font-size: 28px; border-bottom: 2px solid #007bff; padding-bottom: 10px;">Technical Skills</h2>
        <p style="font-size: 18px;">${data.skills}</p>
      </div>
    </div>
  `;
}
