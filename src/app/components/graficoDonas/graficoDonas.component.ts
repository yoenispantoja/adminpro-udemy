import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graficoDonas',
  templateUrl: './graficoDonas.component.html',
  styleUrls: []
})
export class GraficoDonasComponent implements OnInit {
  // Doughnut
  @Input() doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData: MultiDataSet = [[350, 450, 100], [50, 150, 120], [250, 130, 70]];
  @Input() doughnutChartType: ChartType = 'doughnut';

  constructor() {}

  // events
  public chartClicked({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent; active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit() {}
}
