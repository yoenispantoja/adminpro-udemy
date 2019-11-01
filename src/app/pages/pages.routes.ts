import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Panel de Mando'} },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Barras de progreso'} },
      { path: 'graficas', component: Graficas1Component, data: {titulo: 'Gráficas'} },
      { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'RxJS'} },
      { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Ajustes de cuenta'} },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];
export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
