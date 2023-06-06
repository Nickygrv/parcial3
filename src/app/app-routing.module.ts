import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { ContactosComponent } from './module/contactos/contactos.component';
import { OfertasComponent } from './module/ofertas/ofertas.component';
import { QuienessomosComponent } from './module/quienessomos/quienessomos.component';
import { SociosComponent } from './module/socios/socios.component';
import { ProductosComponent } from './module/productos/productos.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'ofertas',component:OfertasComponent},
  { path: 'productos',component:ProductosComponent},
  { path: 'quienessomos',component:QuienessomosComponent},
  { path: 'socios',component:SociosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
