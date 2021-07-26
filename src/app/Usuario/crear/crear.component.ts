import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Modelo/Usuario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  usuario:Usuario = new Usuario();
  
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(usuario:Usuario){
    this.service.saveUsuario(usuario).subscribe(data =>{
      alert(data.respuesta);
      this.router.navigate(["listar"]);
    });
  }

}
