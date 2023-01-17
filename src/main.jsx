import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import Workout, { loader as workoutLoader } from './routes/workout';
import History, { loader as historyLoader } from './routes/history';
import Stats, { loader as statsLoader } from './routes/stats';
import Settings, { loader as settingsLoader, action as settingsAction } from './routes/settings';
import './index.css';
import CreateWorkout, {
  loader as createWorkoutLoader,
  action as createWorkoutAction,
} from './routes/create-workout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'workout',
        element: <Workout />,
        loader: workoutLoader,
      },
      {
        path: 'create-workout',
        element: <CreateWorkout />,
        loader: createWorkoutLoader,
        action: createWorkoutAction,
      },
      {
        path: 'history',
        element: <History />,
        loader: historyLoader,
      },
      {
        path: 'stats',
        element: <Stats />,
        loader: statsLoader,
      },
      {
        path: 'settings',
        element: <Settings />,
        loader: settingsLoader,
        action: settingsAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
