import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  }
];
export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
