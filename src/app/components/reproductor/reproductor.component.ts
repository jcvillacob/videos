import { Component } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent {
  leyendo: boolean = false;

  constructor(){
  }

  changeLeyendo () {
    this.leyendo = !this.leyendo;
  }

}
