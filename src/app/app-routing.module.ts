import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleAerolineaComponent } from './aerolinea/detalleAerolinea/detalleAerolinea.component';

const routes: Routes = [
  {path: ':id', component: DetalleAerolineaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
