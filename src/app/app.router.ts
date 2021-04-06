import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TareasComponent} from './views/tareas/tareas.component';

const routes: Routes = [
    {
        path: 'lista_tareas',
        component: TareasComponent
    },
];

@NgModule({
    imports:[CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule{}
