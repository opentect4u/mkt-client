export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Masters'
  },
  {
    name: 'Administrator',
    url: '/administrator',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Items',
        url: '/items/dashboard',
        icon: 'icon-puzzle'
      },
      {
        name: 'Courier Companies',
        url: '/courier-company/dashboard',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    title: true,
    name: 'Transaction'
  },
  {
    name: 'Courier',
    url: '/courier',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Courier Out / In',
        url: '/courier-service/form',
        icon: 'icon-puzzle'
      },
      {
        name: 'Courier Service',
        url: '/courier-service/dashboard',
        icon: 'icon-puzzle'
      }
    ]
  }
];
