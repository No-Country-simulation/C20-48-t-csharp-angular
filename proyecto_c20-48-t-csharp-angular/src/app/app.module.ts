import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    FooterComponent,
    AdministradorComponent,
    SidebarComponent,
    VirtualComputersComponent,
    GestionUsuarioComponent,
    AddEducationalNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Añade
    HttpClientModule // AÑADE
  ],
  providers: [LoginService], // se colocó el servicio dentro del providers
  bootstrap: [AppComponent]
})
export class AppModule { }
