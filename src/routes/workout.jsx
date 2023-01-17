import React from 'react';

export function loader() {
  return null;
}

const Workout = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>Start Workout</div>
      </div>
    </div>
  );

  function handleClick(event) {
    console.log(event.target.id);
  }
};

export default Workout;
