import { RouteObject } from 'react-router-dom';
import { AppLayout } from 'ui/AppLayout';
import { Beans } from 'components/Beans';
import { Facts } from 'components/Facts';
import { Recipes } from 'components/Recipes';
import { Combinations } from 'components/Combinations';
import { MileStones } from 'components/MileStones';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'beans',
        element: <Beans />,
      },
      {
        path: 'facts',
        element: <Facts />,
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'combinations',
        element: <Combinations />,
      },
      {
        path: 'milestones',
        element: <MileStones />,
      },
    ],
  },
];
