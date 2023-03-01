import { Component } from '@angular/core';
import { IDBService } from './idb.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public conexion:IDBService){
    this.conexion.conexionBD();
  }
  title = 'angular';
}
