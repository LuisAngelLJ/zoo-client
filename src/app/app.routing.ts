import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { TiendaComponent } from "./components/tienda/tienda.component";
import { ParquesComponent } from "./components/parques/parques.component";
import { PadreComponent } from "./components/inputs-outputs/padre/padre.component";
import { HooksComponent } from "./components/hooks/hooks.component";
import { ContactComponent } from "./components/contact/contact.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: '', redirectTo: 'tienda', pathMatch: 'full'},
    {path: 'parques', component: ParquesComponent},
    {path: 'inputsOutputs', component: PadreComponent},
    {path: 'hooks', component: HooksComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'registro', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);