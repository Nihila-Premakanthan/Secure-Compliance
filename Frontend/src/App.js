import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './style.css';
import router from './router';
import PasswordStrengthChecker from './PasswordStrengthChecker';

const App = () => {
  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <PasswordStrengthChecker />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
