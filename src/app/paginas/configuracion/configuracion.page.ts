import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonButton, IonIcon, IonBackButton,
  IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { settingsOutline, addOutline, buildOutline, arrowUndoOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [RouterModule, 
    IonButtons, IonBackButton, IonButton,
    IonIcon, IonContent, IonHeader, IonTitle, 
    IonToolbar, IonItem, IonLabel, IonToggle, CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {
  permitirBorrado: boolean = false;
  constructor() { 
    addIcons({buildOutline,arrowUndoOutline,settingsOutline,addOutline});
  }

  ngOnInit() {
  }

}
