import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ContatoComponent } from './contato/contato.component';
import { SitesCallCenterComponent } from './sites-call-center/sites-call-center.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    UsuarioComponent,
    ContatoComponent,
    SitesCallCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
