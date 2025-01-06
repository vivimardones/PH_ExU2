import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiguracionPage } from './configuracion.page';
import { addIcons } from 'ionicons'
import { settingsOutline, addOutline, buildOutline } from 'ionicons/icons'

describe('ConfiguracionPage', () => {
  let component: ConfiguracionPage;
  let fixture: ComponentFixture<ConfiguracionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
