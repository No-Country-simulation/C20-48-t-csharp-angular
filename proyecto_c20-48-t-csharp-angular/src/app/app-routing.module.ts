import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { PerfilComponent } from './pages/nav-menu/perfil/perfil.component';
import { CalendarioComponent } from './pages/nav-menu/calendario/calendario.component'
import { HistorialAcademicoComponent } from './pages/nav-menu/historial-academico/historial-academico.component'
import { TareasComponent } from './pages/nav-menu/tareas/tareas.component'
import { MateriasComponent } from './pages/materias/materias.component'
import { ForoComponent } from './pages/foro/foro.component';

const routes: Routes = [
  {path: '', redirectTo: '/alumno', pathMatch: 'full'},

  {path: 'login'  , component: LoginFormComponent},

  {path: 'alumno'  , component: AlumnoComponent},

  {path: 'perfil'  , component: PerfilComponent},

  {path: 'calendario' , component: CalendarioComponent},

  {path: 'historial' , component: HistorialAcademicoComponent},

  {path: 'tareas' , component: TareasComponent},

  {path: 'materias' , component: MateriasComponent},

  {path: 'foro' , component: ForoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
