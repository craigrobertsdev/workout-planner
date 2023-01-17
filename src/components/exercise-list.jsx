import React, { useState } from 'react';

const ExerciseList = () => {
  const exerciseCategories = [
    {
      name: 'Legs',
      exercises: ['Back squat', 'Front squat'],
    },
    {
      name: 'Back',
      exercises: ['Deadlift', 'Bent-over row'],
    },
    {
      name: 'Chest',
      exercises: ['Bench press', 'Dumbbell chest press'],
    },
    {
      name: 'Shoulders',
      exercises: ['Military press', 'Dumbbell overhead press'],
    },
    {
      name: 'Biceps',
      exercises: ['Barbell curl', 'Alternating curl'],
    },
    {
      name: 'Triceps',
      exercises: ['Close-grip bench press', 'Skull crushers'],
    },
  ];

  return (
    <>
      {/* Row of exercise category buttons */}
      <div className='container mx-1'>
        <h3>Exercise List</h3>
        <div className='btn-group border border-dark'>
          {exerciseCategories.map((category) => (
            <button className='btn btn-primary' data-toggle='list' data-target={category.name}>
              {category.name}
            </button>
          ))}
          {/* Each individual group of exercises, to be displayed when the category header is clicked */}
        </div>
      </div>
      <div className='bg-dark'>
        {exerciseCategories.map((category, i) => (
          <div className='tab-pane'>
            <ExerciseCategory key={category.name} category={category} />
          </div>
        ))}
      </div>
    </>
  );
};

const ExerciseCategory = ({ category }) => {
  return (
    <ul id={category.name} className='list-group'>
      {category.exercises.map((exercise, i) => (
        <Exercise name={exercise} key={exercise + i} />
      ))}
    </ul>
  );
};

const Exercise = ({ name }) => {
  return (
    <button type='button' className='btn btn-secondary'>
      {name}
    </button>
  );
};

export default ExerciseList;
