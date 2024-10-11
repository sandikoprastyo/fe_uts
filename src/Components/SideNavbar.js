import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavbar.css';

export default function SideNavbar() {
  const sideNav = [
    {
      name: 'Dashboard',
      to: '/Dashboard',
    },
    {
      name: 'Students',
      to: '/students',
    },
    {
      name: 'Course',
      to: '/Course',
    },
    {
      name: 'Teachers',
      to: '/teachers',
    },
    {
      name: 'Classes',
      to: '/classes',
    },
    {
      name: 'Grades',
      to: '/Grades',
    },
    {
      name: 'Schedules',
      to: '/Schedules',
    },
    {
      name: 'Attendances',
      to: '/Attendances',
    },
    // {
    //   name: 'Parents',
    //   to: '/Parents',
    // },
    {
      name: 'Exams',
      to: '/Exams',
    },
    // {
    //   name: 'Announcements',
    //   to: '/Announcements',
    // },
  ];

  return (
    <div class='col-2'>
      <ul className='list-unstyled'>
        <li>
          {sideNav.map((el, i) => (
            <>
              <Link to={el.to.toLowerCase()} className='text-decoration-none'>
                {el.name}
              </Link>
              <br />
            </>
          ))}
        </li>
      </ul>
    </div>
  );
}
