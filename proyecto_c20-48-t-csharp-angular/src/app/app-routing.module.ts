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

const routes: Routes = [

  { path: '', component: LoginFormComponent },
  { path: 'administrador', component: AdministradorComponent },
  { path: 'virtual-computers', component: VirtualComputersComponent },
  { path: 'gestion-usuario', component: GestionUsuarioComponent },
  { path: 'add-educational-notification', component: AddEducationalNotificationComponent },
  { path: '', redirectTo: '/virtual-computers', pathMatch: 'full' },

  { path: 'menu', component: MenuComponent },
  { path: 'registro', component: RegistroComponent },
  {path: 'recuperar-correo', component: RecuperarCorreoComponent}

  // { path: 'administrador', loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule), canActivate: [AuthGuard] }, // Proteger la ruta de pedidos
  // // { path: 'menu', loadChildren: () => import('./cocina/cocina.module').then(m => m.CocinaModule), canActivate: [AuthGuard]  }, // Proteger la ruta de cocina
  // // { path: 'profesor', loadChildren: () => import('./cocina/cocina.module').then(m => m.CocinaModule), canActivate: [AuthGuard]  }, // Proteger la ruta de cocina
  // { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
