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
        name: 'User Register',
        url: '/signup',
        icon: 'icon-puzzle'
      },
      {
        name: 'Project Type',
        url: '/project/type',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    title: true,
    name: 'Transaction'
  },
  {
    name: 'Order Status',
    url: '/orders',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Order Details',
        url: '/orders/details',
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
