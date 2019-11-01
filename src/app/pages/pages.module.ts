import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { PAGE_ROUTES } from './pages.routes';

import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [DashboardComponent, ProgressComponent, Graficas1Component, PagesComponent, AccountSettingsComponent, PromesasComponent, RxjsComponent],
  exports: [DashboardComponent, ProgressComponent, Graficas1Component, PagesComponent],
  imports: [SharedModule, PAGE_ROUTES, FormsModule, ComponentsModule, ChartsModule]
})
export class PagesModule {}
