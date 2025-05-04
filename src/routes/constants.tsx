import { ReactNode } from 'react';
import { Homepage } from './HomePage';

type Route = {
  name: string;
  path: string;
  visible: boolean;
  navBarVisible?: boolean;
  footerVisible?: boolean;
  element: ReactNode;
};

export const HOME: Route = {
  name: 'Home',
  path: '/',
  visible: true,
  navBarVisible: true,
  footerVisible: true,
  element: <Homepage />,
};

export const ROUTES: Array<Route> = [HOME];
