import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastro = {
    email: '',
    apelido: '',
    local: 'App'
  };

  enviado = false;

  // constructor(private participanteService: ParticipanteService) { }

  ngOnInit(): void {
  }

  cadastraParticipante(): void {
    const dados = {
      apelido: this.cadastro.apelido,
      email: this.cadastro.email
    };

    // this.apiService.postPart(dados)
      // .subscribe(
        // response => {
          // console.log(response);
          this.enviado = true;
        }
      // )

  }

// }
