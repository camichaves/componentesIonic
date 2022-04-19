import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
 

  constructor(private menu: MenuController) { }
  ngOnInit(): void {
   this.openFirst(); 
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  cerrarMenu(){
    this.menu.close();
  }

  
}
