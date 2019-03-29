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
  
  export const navItemsEmployee: NavData[] = [
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
          name: 'Settings',
          url: '/settings',
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
      url: '',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Order Details',
          url: '/orders',
          icon: 'icon-puzzle'
        },
        {
          name: 'Reports',
          url: '/reports',
          icon: 'icon-puzzle'
        }
      ]
    }
  ];
  