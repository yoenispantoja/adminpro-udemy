import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progreso1: number = 20;
  progreso2: number = 30;
  leyenda1 = 'Leyenda azul';
  leyenda2 = 'Leyenda verde';

  constructor() {}

  ngOnInit() {}

  actualizarProgreso1(num: number) {
    this.progreso1 = num;
  }

  actualizarProgreso2(num: number) {
    this.progreso2 = num;
  }
}
