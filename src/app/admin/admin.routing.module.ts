import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { MainComponent } from './components/main/main.component';

const adminRoutes: Routes = [
    //ruta principal
    {
        path: 'admin-panel',
        component: MainComponent,
        //rutas hijas
        children: [
            //cuando entremos a admin-panel que nos dirija a una ruta hija
            {path: '', redirectTo: 'listado', pathMatch: 'full'},
            {path: 'listado', component: ListComponent},
            {path: 'crear', component: AddComponent},
            {path: 'editar', component: EditComponent}
        ]
    }
    //puedo seguir añadiendo rutas principales
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AdminRoutingModule {}