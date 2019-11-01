import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          titulo: 'Dashboard',
          url: '/dashboard'
        },
        {
          titulo: 'ProgressBar',
          url: '/progress'
        },
        {
          titulo: 'Gráficas',
          url: '/graficas'
        },
        {
          titulo: 'Promesas',
          url: '/promesas'
        },
        {
          titulo: 'RXJS',
          url: '/rxjs'
        },
        {
          titulo: 'Ajustes del tema',
          url: '/account-settings'
        }
      ]
    }
  ];

  constructor() {}
}
