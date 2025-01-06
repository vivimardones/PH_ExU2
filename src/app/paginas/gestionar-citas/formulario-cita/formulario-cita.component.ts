import { Component, EventEmitter, Output } from '@angular/core'
import { IonCard, IonCardHeader, IonCardTitle, 
  IonCardContent, IonItem, IonLabel, IonInput, IonButton,
  IonBackButton, IonText } from '@ionic/angular/standalone'
import { CommonModule } from '@angular/common'
import { FormsModule, NgForm } from '@angular/forms'

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, 
    IonCardContent, IonItem, IonLabel, IonInput, IonButton,
    IonBackButton, CommonModule, FormsModule, IonText],
})
export class FormularioCitaComponent {
  @Output() agregarCita = new EventEmitter<{ frase: string; autor: string }>();
  
  nuevaCita: { frase: string; autor: string } = { frase: '', autor: '' };

  onAgregarCita(form: NgForm) {
    if (form.valid) {
      this.agregarCita.emit(this.nuevaCita);
      this.nuevaCita = { frase: '', autor: '' };
      form.resetForm();
    }
  }
}

