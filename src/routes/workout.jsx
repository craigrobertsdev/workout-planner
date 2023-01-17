import React from 'react';

export function loader() {
  return null;
}

const Workout = () => {
  return (
    <>
      <div className='list-group' id='myList' role='tablist'>
        <a
          className='list-group-item list-group-item-action active'
          onClick={handleClick}
          data-toggle='list'
          href='#home'
          role='tab'>
          Home
        </a>
        <a
          className='list-group-item list-group-item-action'
          data-toggle='list'
          href='#profile'
          role='tab'>
          Profile
        </a>
        <a
          className='list-group-item list-group-item-action'
          data-toggle='list'
          href='#messages'
          role='tab'>
          Messages
        </a>
        <a
          className='list-group-item list-group-item-action'
          data-toggle='list'
          href='#settings'
          role='tab'>
          Settings
        </a>
      </div>

      <div className='tab-content'>
        <div className='tab-pane active' onClick={handleClick} id='home' role='tabpanel'>
          1
        </div>
        <div className='tab-pane' id='profile' role='tabpanel'>
          2
        </div>
        <div className='tab-pane' onClick={handleClick} id='messages' role='tabpanel'>
          3
        </div>
        <div className='tab-pane' onClick={handleClick} id='settings' role='tabpanel'>
          4
        </div>
      </div>
    </>
  );

  function handleClick(event) {
    console.log(event.target.id);
  }
};

export default Workout;
