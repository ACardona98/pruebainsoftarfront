import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../Modelo/Usuario';
import { Respuesta } from '../Modelo/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8080/';
  getUsuarios(){
    return this.http.get<Usuario[]>(this.url + 'getUsuarios');
  }
  saveUsuario(usuario:Usuario){
    return this.http.post<Respuesta>(this.url + 'guardarUsuario', usuario);
  }
  getUsuarioId(idUsuario:number){
    return this.http.get<Usuario>(this.url + 'getUsuario/' + idUsuario);
  }
  deleteUsuario(idUsuario:number){
    return this.http.delete<Respuesta>(this.url + 'eliminarUsuario/' + idUsuario);
  }
}
