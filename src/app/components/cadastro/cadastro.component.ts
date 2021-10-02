import { ParticipanteService } from './../../api.service';
import { ParticipanteModel } from './../../models/participantes';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  formularioPesquisa: FormGroup;
  participante : ParticipanteModel
  participanteEmEdicao : ParticipanteModel
  participantesBD: Array<any> = new Array();
  participanteBD: ParticipanteModel;
  participantes : Array<any> = new Array();

  cancelarPesquisaInativo = true

  editando : boolean = false;

  enviado = false;

  constructor(
    private formBuider: FormBuilder,
    private participanteService: ParticipanteService){
      this.participante = new ParticipanteModel()
  }

  ngOnInit(){
    this.listarParticipantes();

    this.formulario = this.formBuider.group({
      apelido: [
        '',
        [
          Validators.required,
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
    });
    this.formularioPesquisa = this.formBuider.group({
      emailPesquisa: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],
    });
  }
  pesquisar(){
    let email = this.formularioPesquisa.get("emailPesquisa")?.value
    this.participanteService.findByEmail(email).subscribe(participante => {
      this.cancelarPesquisaInativo = false
      this.participantes = participante
    }, err => {
      console.log('Erro ao pesquisar participantes', err);
    })
  }

  salvar(){
    this.participante.apelido = this.formulario.get("apelido")?.value
    this.participante.email = this.formulario.get("email")?.value

    this.participanteService.salvarParticipante(this.participante).subscribe(data => {
      this.formulario.reset()
      this.listarParticipantes()
    }, err => {
      console.log('Erro ao salvar participantes', err);
    })
  }

  // funcao apagar a ser verificada
  remover(participante: ParticipanteModel){
    this.participanteService.excluirParticipante(participante).subscribe(data => {
      this.listarParticipantes()
    }, err => {
      console.log('Erro ao excluir participante', err);
    })
  }

  listarParticipantes() {
    this.participanteService.listarParticipantes().subscribe(participantes => {
      this.participantes = participantes;
    }, err => {
      console.log('Erro ao listar participantes', err);
    })
  }

  editar(participante: ParticipanteModel){
    console.log(participante)
    this.editando = true
    this.participanteEmEdicao = participante
  }

  salvarEdicao(participante: ParticipanteModel){
    console.log(participante)
    this.participanteService.atualizarParticipante(participante).subscribe(data => {
      this.cancelarEdicao()
      this.listarParticipantes()
    }, err => {
      console.log('Erro ao atualizar participante', err);
    })
  }

  cancelarEdicao(){
    this.editando = false
    this.participanteEmEdicao = new ParticipanteModel()
  }

  cancelarPesquisa(){
    this.cancelarPesquisaInativo = true;
    this.listarParticipantes();
  }

}
