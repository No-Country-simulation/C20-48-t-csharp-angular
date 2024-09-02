import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AdministradorComponent } from './adm/administrador/administrador.component';
import { VirtualComputersComponent } from './pages/virtual-computers/virtual-computers.component';
import { GestionUsuarioComponent} from './pages/gestion-usuario/gestion-usuario.component';
import { AddEducationalNotificationComponent } from './pages/add-educational-notification/add-educational-notification.component';

const routes: Routes = [

  {path: ''  , component: LoginFormComponent},
  {path: 'administrador', component: AdministradorComponent},
  { path: 'virtual-computers', component: VirtualComputersComponent },
  { path: 'gestion-usuario', component: GestionUsuarioComponent },
  { path: 'add-educational-notification', component: AddEducationalNotificationComponent },
  { path: '', redirectTo: '/virtual-computers', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
