import { CplButtonComponent } from './../../../../cp-component-library/lib/components/cpl-button/cpl-button.component';
import { CplButtonModule } from './../../../../cp-component-library/lib/components/cpl-button/cpl-button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CplButtonModule,
  ],
  exports: [
    CplButtonComponent
  ],
  declarations: []
})
export class ButtonPageModule { }
