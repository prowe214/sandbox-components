import { ButtonPageRoutingModule } from './button-page-routing.module';
import { CplButtonComponent } from './../../../../cp-component-library/lib/components/cpl-button/cpl-button.component';
import { CplButtonModule } from './../../../../cp-component-library/lib/components/cpl-button/cpl-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPageComponent } from './button-page.component';

@NgModule({
  imports: [
    CommonModule,
    CplButtonModule,
    ButtonPageRoutingModule
  ],
  exports: [
    CplButtonComponent
  ],
  declarations: []
})
export class ButtonPageModule { }
