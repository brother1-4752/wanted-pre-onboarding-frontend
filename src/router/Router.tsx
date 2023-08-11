import { createBrowserRouter } from 'react-router-dom';

import { ErrorBoundary, Home, SignIn, SignUp, ToDo } from '../pages';
import App from '../App';

interface IRouter {
  path: string;
  element: React.ReactNode;
  children?: IRouter[];
  errorElement?: React.ReactNode;
}

const routerData: IRouter[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: '', element: <Home /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/todo', element: <ToDo /> },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
