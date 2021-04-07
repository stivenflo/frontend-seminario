import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.services';

@Component({
    selector: 'get_tarea',
    templateUrl: './tareas.component.html'
}) 

export class TareasComponent{
    public lista_tareas: any[];
    constructor(public service:AppService){
        this.lista_tareas = [];
    }

    ngOnInit(){
        this.get_tarea();
    }

    get_tarea(){
        var response;
        this.service.get_tarea().subscribe(
            data=>response=data,
            err => {
                console.log("Error al consultar los datos.");
            },
            ()=>{
                this.lista_tareas = response;
            }
        )
    }
}