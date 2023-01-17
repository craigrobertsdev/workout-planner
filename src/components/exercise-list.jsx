import React, { useState } from 'react';
import Button from './button';
// import '../assets/css/exercise-list.css';

const ExerciseList = ({ setOpenExerciseList, setLastSelectedExercise }) => {
  const [currentCategory, setCategory] = useState('Legs');

  setLastSelectedExercise('Back Squat');
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
    // row of buttons for the exercise categories
    <div className='m-3'>
      <div id='exercise-list' className='w-fit border'>
        <div id='header-buttons'>
          {exerciseCategories.map((category, i) => (
            <Button buttonType={'header'} click={() => setCategory(category.name)}>
              {category.name}
            </Button>
          ))}
        </div>

        {/* the list of exercises for each category */}
        <div id='exercise-categories'>
          <ExerciseCategory
            category={exerciseCategories.find((category) => category.name === currentCategory)}
            setLastSelectedExercise={setLastSelectedExercise}
            setOpenExerciseList={setOpenExerciseList}
          />
        </div>
        {/* Cancels the exercise selection */}
        <Button
          buttonType={'cancel'}
          style={{ marginTop: '0.5rem' }}
          click={() => setOpenExerciseList(false)}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

const ExerciseCategory = ({ category, setLastSelectedExercise, setOpenExerciseList }) => {
  return (
    <ul id={category.name} className='list-group'>
      {category.exercises.map((exercise, i) => (
        <Exercise
          name={exercise}
          setLastSelectedExercise={setLastSelectedExercise}
          setOpenExerciseList={setOpenExerciseList}
          key={exercise + i}
        />
      ))}
    </ul>
  );
};

const Exercise = ({ name, setLastSelectedExercise, setOpenExerciseList }) => {
  function selectExercise() {
    setLastSelectedExercise(name);
    setOpenExerciseList(false);
    console.log('setting last exercise to: ' + name);
  }

  return (
    <Button buttonType='exercise' click={() => selectExercise()}>
      {name}
    </Button>
  );
};

export default ExerciseList;
