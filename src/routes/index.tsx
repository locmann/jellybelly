import { RouteObject } from 'react-router-dom';
import { AppLayout } from 'ui/AppLayout';
import { Beans } from 'components/Beans';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'beans',
        element: <Beans />,
      },
    ],
  },
];
