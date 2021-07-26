import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuario:Usuario = new Usuario();

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let idUsuario=localStorage.getItem("idUsuario") ?? '-1';
    this.service.getUsuarioId(parseInt(idUsuario)).subscribe(data =>{
      this.usuario = data;
    });
  }
  Guardar(usuario:Usuario){
    this.service.saveUsuario(usuario).subscribe(data =>{
      alert(data.respuesta);
      if(data.codigo == 1){
        this.router.navigate(["listar"]);
      }
    });
  }
}
