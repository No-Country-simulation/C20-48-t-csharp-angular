import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // importar
import { HttpClientModule } from '@angular/common/http'; // Importa el HttpClientModule
import { LoginService } from './components/login/login.service';// Importa el HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdministradorComponent } from './adm/administrador/administrador.component';
import { SidebarComponent } from './adm/sidebar/sidebar.component';
import { VirtualComputersComponent } from './pages/virtual-computers/virtual-computers.component';
import { GestionUsuarioComponent } from './pages/gestion-usuario/gestion-usuario.component';
import { AddEducationalNotificationComponent } from './pages/add-educational-notification/add-educational-notification.component';
import { HeaderComponent } from './components/header/header.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { RecuperarCorreoComponent } from './recuperar-correo/recuperar-correo.component';



// Importa los módulos de Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

import { PerfilComponent } from './pages/nav-menu/perfil/perfil.component';
import { CalendarioComponent } from './pages/nav-menu/calendario/calendario.component';
import { HistorialAcademicoComponent } from './pages/nav-menu/historial-academico/historial-academico.component';
import { TareasComponent } from './pages/nav-menu/tareas/tareas.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { AsideComponent } from './pages/aside/aside.component';
import { Calendario2Component } from './pages/calendario2/calendario2.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';
import { MenuProfesorComponent } from './pages/menu-profesor/menu-profesor.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { ListadoDeAlumnosComponent } from './pages/listado-de-alumnos/listado-de-alumnos.component';
import { NotasComponent } from './pages/notas/notas.component';
import { ListadoAlumnoAComponent } from './pages/listado-alumno-a/listado-alumno-a.component';
import { ListadoalumnosBComponent } from './pages/listadoalumnos-b/listadoalumnos-b.component';
import { ListadoalumnosCComponent } from './pages/listadoalumnos-c/listadoalumnos-c.component';
import { CalendarioProfesorComponent } from './pages/calendario-profesor/calendario-profesor.component';
import { PerfilProfesorComponent } from './pages/perfil-profesor/perfil-profesor.component';
import { HeaderPorofesorComponent } from './pages/header-porofesor/header-porofesor.component';
import { ForoProfesorComponent } from './pages/foro-profesor/foro-profesor.component';
import { TareasProfesorComponent } from './pages/tareas-profesor/tareas-profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FooterComponent,
    AdministradorComponent,
    SidebarComponent,
    VirtualComputersComponent,
    GestionUsuarioComponent,
    AddEducationalNotificationComponent,
    HeaderComponent,
    AlumnoComponent,
    MenuComponent,
    RegistroComponent,
    RecuperarCorreoComponent,
    PerfilComponent,
    CalendarioComponent,
    HistorialAcademicoComponent,
    TareasComponent,
    AsideComponent,
    Calendario2Component,
    ProfesorComponent,
    MenuProfesorComponent,
    HistorialComponent,
    ListadoDeAlumnosComponent,
    NotasComponent,
    ListadoAlumnoAComponent,
    ListadoalumnosBComponent,
    ListadoalumnosCComponent,
    CalendarioProfesorComponent,
    PerfilProfesorComponent,
    HeaderPorofesorComponent,
    ForoProfesorComponent,
    TareasProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Añade
    HttpClientModule,
    BrowserAnimationsModule, // AÑADE
    FormsModule, // importar FormsModule
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatTableModule,
    CommonModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [LoginService], // se colocó el servicio dentro del providers
  bootstrap: [AppComponent]
})
export class AppModule { }
