import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = async () => {
    if (!password) {
      toast.error('Please enter a password');
      return;
    }

    try {
      const response = await fetch('/evaluate-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error('Failed to evaluate password');
      }

      const data = await response.json();
      setStrength(data.strength);
      toast.success(`Password strength: ${data.strength}`);
    } catch (error) {
      toast.error('Error evaluating password strength');
    }
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={checkPasswordStrength}>Check Strength</button>
      {strength && <p>Password Strength: {strength}</p>}
    </div>
  );
};

export default PasswordStrengthChecker;
