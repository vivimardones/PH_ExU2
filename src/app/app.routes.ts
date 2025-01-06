import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./paginas/cita-aleatoria/cita-aleatoria.page').then( m => m.CitaAleatoriaPage)
  },
  {
    path: '',
    redirectTo: 'cita-aleatoria',
    pathMatch: 'full',
  },
  {
    path: 'gestionar-citas',
    loadComponent: () => import('./paginas/gestionar-citas/gestionar-citas.page').then( m => m.GestionarCitasPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./paginas/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  }
];
