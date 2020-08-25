import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../../../core/services/listado.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  constructor(private listadoService: ListadoService) { }

  ngOnInit(): void {
    this.getAllListado('character');
  }

  task = [];
  getAllListado(code: string) {
    this.listadoService.getAllListado(code).subscribe(tasks => {
      this.task = tasks.results;
      console.log(this.task);
    });
  }

}
