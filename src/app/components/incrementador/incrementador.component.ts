import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  @Output() cambioValor: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  cambiarValor(num: number) {
    if (this.progreso > 0 && this.progreso < 100) {
      this.progreso = this.progreso + num;
    } else {
      return;
    }
    this.cambioValor.emit(this.progreso);
  }
}
