import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';


@NgModule({
  declarations: [
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ConfiguracionComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
