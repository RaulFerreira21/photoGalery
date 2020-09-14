import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeGaleriaComponent } from './componentes/home/home-galeria/home-galeria.component';
import { ManterGaleriaComponent } from './componentes/galeria/manter-galeria/manter-galeria.component';


const routes: Routes = [
  {path: 'home/home-galeria', component: HomeGaleriaComponent},
  {path: 'galeria/manter-galeria', component: ManterGaleriaComponent},
  {path: 'galeria/manter-galeria/:id', component: ManterGaleriaComponent},
  {path: '', component: HomeGaleriaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
