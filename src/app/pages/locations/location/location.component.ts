import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../../../core/services/listado.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private listadoService: ListadoService) { }

  ngOnInit(): void {
    this.getAllListado('location');
  }

  updateTask = null;
  task = [];
  getAllListado(code: string) {
    this.listadoService.getAllListado(code).subscribe(tasks => {
      this.task = tasks.results;
      console.log(this.task);
    });
  }
  toggleUpdateTask(task){
    this.updateTask =task;
  }
}
