import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfesorComponent } from './pages/profesor/profesor.component'

const routes: Routes = [

  {path: ''  , component: LoginFormComponent},

  {path: 'profesor'  , component: ProfesorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
