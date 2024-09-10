import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdministradorComponent } from './adm/administrador/administrador.component';
import { VirtualComputersComponent } from './pages/virtual-computers/virtual-computers.component';
import { GestionUsuarioComponent } from './pages/gestion-usuario/gestion-usuario.component';
import { AddEducationalNotificationComponent } from './pages/add-educational-notification/add-educational-notification.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarCorreoComponent } from './recuperar-correo/recuperar-correo.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { PerfilComponent } from './pages/nav-menu/perfil/perfil.component';
import { CalendarioComponent } from './pages/nav-menu/calendario/calendario.component'
import { HistorialAcademicoComponent } from './pages/nav-menu/historial-academico/historial-academico.component'
import { TareasComponent } from './pages/nav-menu/tareas/tareas.component'

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'virtual-computers', component: VirtualComputersComponent },
  { path: 'gestion-usuario', component: GestionUsuarioComponent },
  { path: 'add-educational-notification', component: AddEducationalNotificationComponent },  
  { path: 'menu', component: MenuComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'recuperar-correo', component: RecuperarCorreoComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'historial', component: HistorialAcademicoComponent },
  { path: 'tareas', component: TareasComponent },
  // { path: '', redirectTo: '/virtual-computers', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
