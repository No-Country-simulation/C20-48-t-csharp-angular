import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa el HttpClientModule
import { LoginService } from './components/login/login.service';// Importa el HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfesorComponent } from './pages/profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AlumnoComponent,
    MenuComponent,
    ProfesorComponent
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
