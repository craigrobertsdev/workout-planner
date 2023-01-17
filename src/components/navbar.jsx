import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/css/navbar.css';

const Navbar = () => {
  return (
    <nav className='container bg-slate-700 w-full h-14 text-blue-100'>
      <ul className='flex justify-evenly items-center h-full w-3/4'>
        <li className=''>
          <Link className='' to='/'>
            Home
          </Link>
        </li>
        <li className=''>
          <Link to='./workout'>Start Workout</Link>
        </li>
        <li className=''>
          <Link className='' to='./create-workout'>
            Create Workout
          </Link>
        </li>
        <li className=''>
          <Link className='' to='./history'>
            Workout History
          </Link>
        </li>
        <li className=''>
          <Link className='' to='./stats'>
            Lifting Stats
          </Link>
        </li>
        <li className=''>
          <Link className='' to='./settings'>
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
