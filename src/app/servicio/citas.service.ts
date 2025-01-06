import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: { 
    frase: string; 
    autor: string 
  }[] = [ 
    { frase: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.", autor: "John Lennon" }, 
    { frase: "El éxito es la capacidad de ir de fracaso en fracaso sin perder el entusiasmo.", autor: "Winston Churchill" }
  ];
  constructor() { }

  getCitaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * this.citas.length);
    return this.citas[indiceAleatorio];
  }

  getCitas() {
    return this.citas;
  }

  addCitas(cita: { frase: string; autor: string }) {
    this.citas.push(cita);
  }

  deleteCitas(index: number) {
    this.citas.splice(index, 1);
  }

}
