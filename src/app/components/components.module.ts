import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoDonasComponent } from './graficoDonas/graficoDonas.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [IncrementadorComponent, GraficoDonasComponent],
  exports: [IncrementadorComponent, GraficoDonasComponent],
  imports: [FormsModule, ChartsModule]
})
export class ComponentsModule {}
