import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa el HttpClientModule
import { LoginService } from './components/login/login.service';// Importa el HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { MenuComponent } from './components/menu/menu.component';
import { PerfilComponent } from './pages/nav-menu/perfil/perfil.component';
import { CalendarioComponent } from './pages/nav-menu/calendario/calendario.component';
import { HistorialAcademicoComponent } from './pages/nav-menu/historial-academico/historial-academico.component';
import { TareasComponent } from './pages/nav-menu/tareas/tareas.component';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { AsideComponent } from './pages/aside/aside.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Calendario2Component } from './pages/calendario2/calendario2.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForoComponent } from './pages/foro/foro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FooterComponent,
    HeaderComponent,
    AlumnoComponent,
    MenuComponent,
    PerfilComponent,
    CalendarioComponent,
    HistorialAcademicoComponent,
    TareasComponent,
    AsideComponent,
    Calendario2Component,
    MateriasComponent,
    ForoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Añade
    HttpClientModule, // 
    ReactiveFormsModule,
    FullCalendarModule, BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [LoginService], // se colocó el servicio dentro del providers
  bootstrap: [AppComponent]
})
export class AppModule { }
