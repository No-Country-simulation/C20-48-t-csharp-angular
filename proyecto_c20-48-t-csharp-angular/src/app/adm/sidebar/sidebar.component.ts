import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faHome, faUser, faCalendar, faHistory, faTasks, faSignOutAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  currentView: string = 'default'; // Controla qué vista mostrar

  constructor(private router: Router) { }

  navigateTo(view: string): void {
    this.router.navigate([view]);
  }




  ngOnInit(): void {
  }

  faHome = faHome;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;

  // Datos de ejemplo para la gestión de usuarios
  usuarios = [
    { nombre: 'Juan Pérez', correo: 'juan.perez@example.com', tipo: 'Profesor' },
    { nombre: 'Ana Gómez', correo: 'ana.gomez@example.com', tipo: 'Administrador' }
  ];

  displayedColumns: string[] = ['nombre', 'correo', 'tipo', 'actions'];


  modifyUser(user: any) {
    // Lógica para modificar el usuario
    console.log('Modificar usuario', user);
  }

  deleteUser(user: any) {
    // Lógica para eliminar el usuario
    console.log('Eliminar usuario', user);
  }




}
