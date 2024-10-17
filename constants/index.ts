import { Home, Link, Settings } from 'lucide-react';

export const sidebarLinks = [
  {
    route: '/',
    label: 'Link One',
    icon: Home, // No JSX, just pass the component
  },
  {
    route: '/link-2',
    label: 'Link Two',
    icon: Link, // No JSX, just pass the component
  },
  {
    route: '/link-3',
    label: 'Link Three',
    icon: Settings, // No JSX, just pass the component
  },
];
