import React from 'react'
import SideNavbar from '../Components/SideNavbar'

export default function Classes() {
  return (
   
    <div class='row'>
      <SideNavbar />

      {/* ini buat dashboard */}
      <div class='col-10'>
        <h2>Classes</h2>
        <p>Selamat datang di dashboard Anda!</p>
        {/* Tambahkan konten dashboard di sini */}
        <div className='dashboard-content'>
          {/* Konten Dashboard dapat ditambahkan di sini */}
          <p>Ini adalah area konten dashboard.</p>
        </div>
      </div>
    </div>

  )
}
