import { lazy, ReactNode, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import HomePage from '../pages/home';

const routes = [
  //   {
  //     path: 'user/*',
  //     element: <LoginLayout />,
  //     children: [
  //       { path: '', element: <Navigate to="login" /> }, // Redirect
  //       {
  //         path: 'login',
  //         element: () => import('@/pages/login'),
  //       },

  //     ],
  //   },
  {
    path: '/',
    element: HomePage,
  },
];

export default routes;
