import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutingProviders, routing } from './app.routing';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//importar modulo creado
import { ModuloEmailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { PadreComponent } from './components/inputs-outputs/padre/padre.component';
import { HijoComponent } from './components/inputs-outputs/hijo/hijo.component';
import { HooksComponent } from './components/hooks/hooks.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TiendaComponent,
    ParquesComponent,
    PadreComponent,
    HijoComponent,
    HooksComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    ModuloEmailModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
