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
    ReactiveFormsModule
  ],
  providers: [LoginService], // se colocó el servicio dentro del providers
  bootstrap: [AppComponent]
})
export class AppModule { }
