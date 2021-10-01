import { ParticipanteModel } from './../../models/participantes';
import { ParticipanteService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  participante : ParticipanteModel = new ParticipanteModel();
  participantes : Array<any> = new Array();

  constructor(private participanteService: ParticipanteService) { }

  ngOnInit() {
    this.listarParticipantes()
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
