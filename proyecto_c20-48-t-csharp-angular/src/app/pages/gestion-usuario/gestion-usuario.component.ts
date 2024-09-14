import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-usuario',
  templateUrl: './gestion-usuario.component.html',
  styleUrls: ['./gestion-usuario.component.css']
})
export class GestionUsuarioComponent {

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

constructor(private router: Router){}

  usuarios = [
    { nombre: 'Juan Pérez', correo: 'juan.perez@example.com', tipo: 'Profesor' },
    { nombre: 'Ana Gómez', correo: 'ana.gomez@example.com', tipo: 'Administrador' }
  ];

  displayedColumns: string[] = ['nombre', 'correo', 'tipo', 'actions'];

  getRol(): string {
    switch (this.registro.rol) {
      case 'profesor': return 'Registrar Profesor';
      case 'administrador': return 'Registrar Administrador';
      case 'estudiante': return 'Registrar Estudiante';
      default: return 'Registro';
    }
  }

  onSubmit() {
    console.log(this.registro);
  }

  modifyUser(user: any) {
    console.log('Modificar usuario', user);
  }

  deleteUser(user: any) {
    console.log('Eliminar usuario', user);
  }

  navigateTo(view: string): void {
    this.router.navigate(['registro']);
  }

}