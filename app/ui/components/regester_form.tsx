// components/LoginForm.tsx
"use client";
import { useState, FormEvent } from 'react';
import "../css/styling.css"


interface RegesterFormProps {
  // Add any additional props if needed
}

const RegesterForm: React.FC<RegesterFormProps> = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add your Regester logic here using the email and password state values
    console.log('Regester clicked!');
  };

  return (
    <form onSubmit={handleSubmit} className="form-regester max-w-md mx-auto mt-8 p-8 bg-white rounded shadow-md">
      <p className='form-title'>Regester Form</p>
      <div className='form-login-email-password'>
            <div className="mb-4">
              <label htmlFor="email" className="form-text block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={name}
                onChange={handleNameChange}
                required
                className="input-text w-full border rounded py-2 px-3 focus:outline-none "
              />
            </div>
              <div className="mb-4">
              <label htmlFor="email" className="form-text block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
                className="input-text w-full border rounded py-2 px-3 focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-text block text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
                required
                className="input-text w-full border rounded py-2 px-3 focus:outline-none "
              />
            </div>
            </div>
        <div>
          <button type="submit" className="login-button text-white py-2 px-4 rounded focus:outline-none">
          Regester
          </button>

      </div>
    </form>
  );
};

export default RegesterForm;
