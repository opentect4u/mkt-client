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
      name: 'Change Password',
      url: '/settings',
      icon: 'icon-puzzle'
    },
    {
      name: 'Add or Edit Orders',
      url: '/orders',
      icon: 'icon-puzzle'
    },
    {
      name: 'Reports',
      url: '/reports',
      icon: 'icon-puzzle'
    }
  ];
  