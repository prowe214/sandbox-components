import { ButtonPageComponent } from './button-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const buttonPageRoutes: Routes = [
  {
    component: ButtonPageComponent,
    path: ''
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(buttonPageRoutes)
  ]
})

export class ButtonPageRoutingModule {}
