import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports : [
        HttpClientTestingModule, 
        RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //TODO: Tú primer enunciado el cual debe asegurar lo siguiente
  //TODO: Debe de asegurarse que el formulario sea invalido cuando ingrese datos erroneos
  //TODO: Patron  AAA
  it('🔴 Debería de retornar invalido el formulario', () => {
    //TODO: Arrange
    const mockCredentials = {
      email:'0x0x0x0xx',
      password:'1234567891012'
    }

    const emailForm = component.formLogin.get('email')
    const passwordForm = component.formLogin.get('password')

    //TODO: Act
    
    emailForm?.setValue(mockCredentials.email)
    passwordForm?.setValue(mockCredentials.password)


    //TODO: Assert

    expect(component.formLogin.invalid).toEqual(true)  //TODO true, false


  });


  it('🆗 Debería de retornar valido el formulario', () => {
    //TODO: Arrange
    const mockCredentials = {
      email:'test@test.com',
      password:'12345678'
    }
    const emailForm = component.formLogin.get('email')
    const passwordForm = component.formLogin.get('password')
    //TODO: Act
    emailForm?.setValue(mockCredentials.email)
    passwordForm?.setValue(mockCredentials.password)
    //TODO: Assert
    expect(component.formLogin.valid).toEqual(true)  //TODO true, false
  });


  it('👉 El botón debería tener la palabra "Iniciar sesión"', () => {
    //TODO: Arrange
    const elementRef =  fixture.debugElement.query(By.css('.form-action button')) //TODO: document.querySelectorB
    const getInnetText = elementRef.nativeElement.innerText;
    //TODO: Act


    //TODO: Assert
    
    expect(getInnetText).toEqual('Iniciar sesión')  //TODO true, false
  });




});
