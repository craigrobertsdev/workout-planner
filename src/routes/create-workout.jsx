import React, { useState } from 'react';
import { Form } from 'react-router-dom';
import ExerciseList from '../components/exercise-list';

export function loader() {
  return null;
}

export function action() {}

const CreateWorkout = () => {
  let lastExerciseSelected = '';
  const [selectExercise, setSelectExercise] = useState(false);

  function onExerciseSearch(event) {}

  function addExercise(event) {}

  return (
    <>
      {selectExercise ? (
        <ExerciseList setSelectExercise={setSelectExercise} />
      ) : (
        <div>
          Create workout
          <Form>
            <input
              onChange={onExerciseSearch}
              placeholder='Start typing to search for exercise'
              value={lastExerciseSelected}
            />
            <button className='btn btn-primary' onClick={() => setSelectExercise(true)}>
              Find Exercise
            </button>
            <label htmlFor='sets-input'>Sets</label>
            <input id='sets-input' />
            <label htmlFor='reps-input'>Reps</label>
            <input id='reps-input' />
            <button className='btn' type='submit' onClick={addExercise}>
              Add Exercise
            </button>
          </Form>
        </div>
      )}
    </>
  );
};
export default CreateWorkout;
/* 
  On load, display: 
  1) an input for the user to type in an exercise name 
  2) a button next to it for them to open a modal to locate an exercise. the modal is divided into headers for exercise categories
  3) when the exercse is selected, add that to the input field
  4) input fields display for sets and reps
  5) drop down for intensity technique. drop set, dds, rps
*/
