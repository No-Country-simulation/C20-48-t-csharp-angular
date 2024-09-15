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
import { CalendarioComponent } from './pages/nav-menu/calendario/calendario.component';
import { HistorialAcademicoComponent } from './pages/nav-menu/historial-academico/historial-academico.component';
import { TareasComponent } from './pages/nav-menu/tareas/tareas.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { ListadoDeAlumnosComponent } from './pages/listado-de-alumnos/listado-de-alumnos.component';
import { ListadoAlumnoAComponent } from './pages/listado-alumno-a/listado-alumno-a.component';
import { ListadoalumnosBComponent } from './pages/listadoalumnos-b/listadoalumnos-b.component';
import { ListadoalumnosCComponent } from './pages/listadoalumnos-c/listadoalumnos-c.component';
import { NotasComponent } from './pages/notas/notas.component';
import { CalendarioProfesorComponent } from './pages/calendario-profesor/calendario-profesor.component';
import { PerfilProfesorComponent } from './pages/perfil-profesor/perfil-profesor.component';
import { ForoProfesorComponent } from './pages/foro-profesor/foro-profesor.component';
import { TareasProfesorComponent } from './pages/tareas-profesor/tareas-profesor.component';
import { HeaderAdministradorComponent } from './adm/header-administrador/header-administrador.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { ForoComponent } from './pages/foro/foro.component';

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
  { path: 'profesor', component: ProfesorComponent },
  { path: 'listado-de-alumnos', component: ListadoDeAlumnosComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'listado-alumno-a', component: ListadoAlumnoAComponent },
  { path: 'listado-alumnos-b', component: ListadoalumnosBComponent },
  { path: 'listado-alumnos-c', component: ListadoalumnosCComponent },
  { path: 'calendario-profesor', component: CalendarioProfesorComponent },
  { path: 'perfil-profesor', component: PerfilProfesorComponent },
  { path: 'foro-profesor', component: ForoProfesorComponent },
  { path: 'tareas-profesor', component: TareasProfesorComponent },
  { path: 'header-administrador', component: HeaderAdministradorComponent },

  {path: 'materias' , component: MateriasComponent},
  {path: 'foro' , component: ForoComponent}
  // { path: '', redirectTo: '/virtual-computers', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
