import { createBrowserRouter } from 'react-router';
import Tasks from './pages/Tasks';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Tasks />,
  },
]);
