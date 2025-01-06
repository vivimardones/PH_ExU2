import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';
import { FormularioCitaComponent } from './formulario-cita/formulario-cita.component';
import { IonHeader, IonToolbar, IonTitle, IonButtons, 
  IonButton, IonIcon, IonContent, IonBackButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CitasService } from 'src/app/servicio/citas.service';

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.page.html',
  styleUrls: ['./gestionar-citas.page.scss'],
  standalone: true,
  imports: [ RouterModule, IonButtons, IonButton, IonIcon, IonBackButton, 
    IonContent, IonHeader,  IonTitle, IonToolbar, CommonModule, 
    FormsModule, FormularioCitaComponent, ListaCitasComponent],
})

export class GestionarCitasPage implements OnInit {
  citas: { frase: string; autor: string }[] = [];
  constructor(private citasService: CitasService) {
  }

  ngOnInit() { 
    this.citas = this.citasService.getCitas();
  }
  agregarCita(cita: { frase: string; autor: string }) { 
    this.citasService.addCitas(cita); 
    this.citas = this.citasService.getCitas(); 
  } 
  
  borrarCita(index: number) { 
    this.citasService.deleteCitas(index); 
    this.citas = this.citasService.getCitas(); 
  }

}
