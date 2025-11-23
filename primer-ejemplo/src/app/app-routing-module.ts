import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from '../components/home/home';
import {Servicios} from '../components/servicios/servicios';
import {Contacto} from '../components/contacto/contacto';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full" },
  {path: "home", component: Home},
  {path: "services", component: Servicios},
  {path: "contact", component: Contacto},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
