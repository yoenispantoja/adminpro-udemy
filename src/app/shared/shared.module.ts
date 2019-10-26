import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, BreadcrumbsComponent, NotpagefoundComponent],
  exports: [HeaderComponent, SidebarComponent, BreadcrumbsComponent, NotpagefoundComponent]
})
export class SharedModule {}
