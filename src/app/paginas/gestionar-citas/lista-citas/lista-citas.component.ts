import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonLabel, IonCard, IonCardHeader, 
  IonCardTitle, IonCardContent,
  IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonButton, IonIcon, IonCard, 
    IonCardHeader, IonCardTitle, IonCardContent, CommonModule, FormsModule]
})
export class ListaCitasComponent {
  @Input() citas: { frase: string; autor: string }[] = [];
  @Output() borrarCita = new EventEmitter<number>();

  constructor() {
    addIcons({trash});
  }

  onBorrarCita(index: number) {
    this.borrarCita.emit(index);
  }
}
