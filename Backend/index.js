const express = require('express');
const { exec } = require('child_process');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Path to the Python script and model file
const scriptPath = path.join(__dirname, 'scripts', 'evaluate_password.py');
const modelPath = path.join(__dirname, 'model', 'password_strength_model.joblib');

// Endpoint to evaluate password strength
app.post('/evaluate-password', (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  exec(`python ${scriptPath} ${modelPath} "${password}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing Python script: ${error.message}`);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (stderr) {
      console.error(`Python stderr: ${stderr}`);
      return res.status(500).json({ error: 'Error evaluating password' });
    }

    const strength = stdout.trim();
    res.json({ strength });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
