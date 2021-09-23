import { AppComponent } from './app.component';
import { SplashComponent } from './components/splash/splash.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    data: { title: 'Pagina Inicial' }
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
    data: { title: 'Cadastro de Participante' }
  },
  {
    path: 'mensagem/:id',
    component: MensagemComponent,
    data: { title: 'Mensagem' }
  },
  {
    path: 'splash',
    component: SplashComponent,
    data: { title: 'Splash' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
