import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  palabraBuscar = "";
  frutasIniciales = ["banana", "manzana", "mandarina", "uva"];
  frutasMostrar =  ["banana", "manzana", "mandarina", "uva"];
  constructor() { }

  ngOnInit() {
    
  }

  hayFocus() {
    console.log("Hay Focus")
  }
  hayionBlur(){
    console.log("HaY ionBlur")
  }

  buscar(){
    console.log(this.palabraBuscar)
    this.frutasMostrar = [];
    for(let i =0; i< this.frutasIniciales.length; i++){
        if( this.frutasIniciales[i].startsWith(this.palabraBuscar)){
          this.frutasMostrar.push(this.frutasIniciales[i]);
        }
    }
  }

}
