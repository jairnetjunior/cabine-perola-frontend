import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProcedimentoService } from 'src/services/domain/procedimento.service';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { AuthInterceptorProvider } from 'src/interceptors/auth-interceptor';
import { ErrorInterceptorProvider } from 'src/interceptors/error-interceptor';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';
import { FormBuilder } from '@angular/forms';
import { AgendamentoService } from 'src/services/domain/agendamento.service';
import { FuncionarioService } from 'src/services/domain/funcionario.service';
import { SessoesService } from 'src/services/domain/sessoes.service';
import { EnderecoService } from 'src/services/domain/endereco.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FormBuilder,
    AuthInterceptorProvider,
    ErrorInterceptorProvider,
    StorageService,
    ClienteService,
    AuthService,
    CidadeService,
    EstadoService,
    AgendamentoService,
    ProcedimentoService,
    FuncionarioService,
    SessoesService,
    EnderecoService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}
