import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import ToDo from '../pages/todo/ToDo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/todo',
        element: <ToDo />,
      },
    ],
  },
]);

export default router