import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModuleComponent } from './module/module.component';
import { HomeComponent } from './module/home/home.component';
import { ProductosComponent } from './module/productos/productos.component';
import { OfertasComponent } from './module/ofertas/ofertas.component';
import { SociosComponent } from './module/socios/socios.component';
import { QuienessomosComponent } from './module/quienessomos/quienessomos.component';
import { ContactosComponent } from './module/contactos/contactos.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './module/navbar/navbar.component';
import { FooterComponent } from './module/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
  
    ModuleComponent,
        HomeComponent,
        ProductosComponent,
        OfertasComponent,
        SociosComponent,
        QuienessomosComponent,
        ContactosComponent,
        NavbarComponent,
        FooterComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
