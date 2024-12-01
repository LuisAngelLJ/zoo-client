import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing.module';

import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AddComponent,
        EditComponent,
        ListComponent,
        MainComponent
    ],
    exports: [MainComponent],
    providers: []
})

export class AdminModule {}