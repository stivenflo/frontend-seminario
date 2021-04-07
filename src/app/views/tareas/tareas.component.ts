import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.services';

@Component({
    selector: 'get_tarea',
    templateUrl: './tareas.component.html'
}) 

export class TareasComponent{
    public lista_tareas: any[];

    public tarea = {
        titulo:"",
        tarea:"",
        limite:""
    }

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

    insert_tarea(){
        var response;
        this.service.insert_tarea(this.tarea).subscribe(
            data=>response=data,
            err => {
                console.log("Error al consultar el servicio");
            },
            ()=>{
                this.tarea ={
                    titulo:"",
                    tarea:"",
                    limite:""
                }
                this.get_tarea();
            }
        )
    }

    getDatosTareasForm(t){
        this.tarea = {
            titulo:t.titulo,
            tarea:t.tarea,
            limite:t.limite
        }
    }

    update_tarea(){
        var response;
        this.service.update_tarea(this.tarea).subscribe(
            data=>response=data,
            err => {
                console.log("Error al consultar el servicio");
            },
            ()=>{
                this.tarea ={
                    titulo:"",
                    tarea:"",
                    limite:""
                }
                this.get_tarea();
            }
        )
    }

    delete_tarea(titulo){
        var response;
        var load={
            titulo:titulo
        }
        this.service.delete_tarea(load).subscribe(
            data=>response=data,
            err => {
                console.log("Error al consultar el servicio");
            },
            ()=>{
                this.get_tarea();
            }
        )
     }
}