import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu ketika form disubmit (contohnya login ke server)
    // Validasi login di sini, lalu navigasi
    // Misal login berhasil, maka navigasi ke dashboard:
    if (formData.usernameOrEmail && formData.password) {
      console.log('Login berhasil');
      navigate('/dashboard'); // Menggunakan navigate untuk redirect ke dashboard
    } else {
      console.log('Login gagal');
    }
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h2 className='text-center my-4'>Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Input untuk Username atau Email */}
            <div className='mb-3'>
              <label htmlFor='usernameOrEmail' className='form-label'>
                Username atau Email
              </label>
              <input
                type='text'
                className='form-control'
                id='usernameOrEmail'
                name='usernameOrEmail'
                value={formData.usernameOrEmail}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Input untuk Password */}
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Tombol Submit */}
            <div className='d-grid gap-2'>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
