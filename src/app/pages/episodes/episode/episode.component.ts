import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../../../core/services/listado.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {

  constructor(private listadoService: ListadoService) { }

  ngOnInit(): void {
    this.getAllListado('episode');
  }

  task = [];
  getAllListado(code: string) {
    this.listadoService.getAllListado(code).subscribe(tasks => {
      this.task = tasks.results;
      console.log(this.task);
    });
  }
}
