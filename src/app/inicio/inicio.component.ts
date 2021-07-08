import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Usuario } from '../model/Usuario';
import { PostagemService } from '../service/postagem.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  postagem: Postagem = new Postagem()
  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService
  ) { }

  ngOnInit() {

    if(environment.token == "") {
      
      this.router.navigate(["/login"])
    }
  }

    publicar(){
      this.usuario.id = this.idUsuario
      this.postagem.usuario = this.usuario

      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp

        alert("Postagem realizada com sucesso!")
      })

    }

  

}
