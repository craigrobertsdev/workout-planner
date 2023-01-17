import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import ExerciseList from '../components/exercise-list';
import Button from '../components/button';

export function loader() {
  return null;
}

export function action() {}

const CreateWorkout = () => {
  const [lastExerciseSelected, setLastSelectedExercise] = useState('');
  const [openExerciseList, setOpenExerciseList] = useState(false);

  function onExerciseSearch(event) {}

  function addExercise(event) {}

  // useEffect(() => {
  //   document.getElementById('exercise-search-field').value = lastExerciseSelected;
  // }, lastExerciseSelected);

  return (
    <>
      {openExerciseList ? (
        <ExerciseList
          setOpenExerciseList={setOpenExerciseList}
          setLastSelectedExercise={setLastSelectedExercise}
        />
      ) : (
        <div className='m-3'>
          <h2 className='font-size-'>Select exercises to add to your workout plan</h2>
          <Form className='flex h-10 items-center'>
            <input
              id='exercise-search-field'
              className='border p-2 border-gray-200'
              onChange={onExerciseSearch}
              placeholder='Start typing to search for exercise'
            />
            <Button click={() => setOpenExerciseList(true)}>Find Exercise</Button>
            <input className='border p-2 border-gray-200 w-14 text-center' id='sets-input' />
            <label className='ml-3' htmlFor='sets-input'>
              Sets
            </label>
            <label className='mx-4 px-2'> x </label>
            <input className='border p-2 border-gray-200 w-14 text-center' id='reps-input' />
            <label className='ml-3' htmlFor='reps-input'>
              Reps
            </label>
            <Button type='submit' onClick={addExercise}>
              Add Exercise
            </Button>
          </Form>
          <div>{lastExerciseSelected}</div>
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
