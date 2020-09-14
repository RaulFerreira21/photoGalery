//angular imports essencial
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//angular imports components/services
import { HomeGaleriaComponent } from './componentes/home/home-galeria/home-galeria.component';
import { ManterGaleriaComponent } from './componentes/galeria/manter-galeria/manter-galeria.component';
import { GaleriaService } from './servicos/galeria/galeria.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeGaleriaComponent,
    ManterGaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GaleriaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
