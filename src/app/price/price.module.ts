import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { PriceComponent } from './pages/price/price.component';



@NgModule({
  declarations: [
    PriceCardComponent,
    PriceComponent
  ],
  exports: [
    PriceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PriceModule { }
