import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OperadoresPage } from './operadores';

@NgModule({
  declarations: [
    OperadoresPage,
  ],
  imports: [
    IonicPageModule.forChild(OperadoresPage),
  ],
})
export class OperadoresPageModule {}
