import React from 'react';
import SideNavbar from '../Components/SideNavbar';

export default function Announcements() {
  return (
    <div class='row'>
      <SideNavbar />

      {/* ini buat dashboard */}
      <div class='col-10'>
        <h2>Announcements</h2>
        <p>Selamat datang di dashboard Anda!</p>
      </div>
    </div>
  );
}
