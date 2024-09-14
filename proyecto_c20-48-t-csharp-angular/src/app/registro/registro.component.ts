import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  rol = { value: 'profesor' }; // Ejemplo de rol, cambia según tu implementación



  registro = {
    correo: '',
    password: '',
    rol: '',
    nombreCompleto: '',
    genero: '',
    fechaNacimiento: '',
    domicilio: '',
    representante: '',
    telefonoRepresentante: '',
    telefono: '',
    correoadicional: '',
  };

  getRol(): string {
    switch (this.registro.rol) {
      case 'profesor':
        return 'Registrar Profesor';
      case 'administrador':
        return 'Registrar Administrador';
      case 'estudiante':
        return 'Registrar Estudiante';
      default:
        return 'Registro';
    }
  }
  onSubmit() {
    // Lógica para enviar datos al servidor o almacenarlos
    console.log(this.registro);
  }



}
