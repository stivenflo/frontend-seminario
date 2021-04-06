import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpParams, HttpUrlEncodingCodec, HttpHandler, HttpParameterCodec, HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {
    private endpoint: string;

    constructor(private httpClient: HttpClient){
        this.endpoint = "http://"+window.location.hostname+":8200/api"
    }

    get_tarea():Observable<any>{
        return this.httpClient.get(this.endpoint+"/get_tarea", {responseType:'json'});
    }
}