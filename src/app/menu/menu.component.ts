import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu1= 'Home';
  menu2='Peliculas';
  menu3='Favoritas';
  menu4='Créditos';
}
