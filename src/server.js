const express = require('express');
const bodyParser = require('body-parser');
const { formatResume } = require('./resumeFormatter');

const app = express();

app.use(bodyParser.json());

app.post('/api/generateResume', (req, res) => {
  const { formData, template } = req.body;
  const formattedResume = formatResume(formData, template);
  res.json({ resume: formattedResume });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
