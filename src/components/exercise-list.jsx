import React, { useState } from 'react';
import Button from './button';
// import '../assets/css/exercise-list.css';

const ExerciseList = () => {
  const [currentCategory, setCategory] = useState('Legs');
  const [selectedExercise, setSelectedExercise] = useState('');

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

  const style = {
    marginLeft: '-1px',
    marginRight: '-1px',
    marginBottom: '-1px',
  };
  return (
    <div id='exercise-list'>
      <div id='header-buttons'>
        {exerciseCategories.map((category, i) => (
          <Button type={'workout-button'} click={() => setCategory(category.name)} style={style}>
            {category.name}
          </Button>
        ))}
      </div>
      <div id='exercise-categories' className='border'>
        <ExerciseCategory
          category={exerciseCategories.find((category) => category.name === currentCategory)}
        />
      </div>
      <div>{selectedExercise}</div>
    </div>
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
  const buttonStyle = {
    marginBottom: '-1px',
    marginTop: '-1px',
  };
  return (
    <Button type='exercise-list' click={() => setSelectedExercise(name)} style={buttonStyle}>
      {name}
    </Button>
  );
};

export default ExerciseList;
