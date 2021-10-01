import { ParticipanteModel } from './../../models/participantes';
import { ParticipanteService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  participante : ParticipanteModel
  participantesBD: Array<any> = new Array();
  participanteBD: ParticipanteModel;
  participantes : Array<any> = new Array();

  constructor(private participanteService: ParticipanteService) { 
    this.participante = new ParticipanteModel();
  }

  verificaParticipante(){
    let email =this.participante.email
    this.participanteService.findByEmail(email).subscribe(participante => {
      this.participantesBD = participante;
      this.participanteBD = this.participantesBD[0]
      console.log(this.participanteBD)
      if (this.participanteBD == undefined){
        alert(`Participante não encontrado`)
      } else {
        alert(`Participante encontrado: ${this.participanteBD.apelido}`)
      }
    }, err => {
      console.log('Erro ao listar participantes', err);
    })
  }

  ngOnInit() {

  }

  cadastrar(){

  }

  listarParticipantes() {
    this.participanteService.listarParticipantes().subscribe(participantes => {
      this.participantes = participantes;
    }, err => {
      console.log('Erro ao listar participantes', err);
    })
  }

}
