import { Component, Input } from '@angular/core';
import { Price } from '../../interfaces/price.interface';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.css'],
})
export class PriceCardComponent {
  @Input() price: Price = {
    title: '',
    price: 0,
    beneficios: [],
    btnText: '',
  };
}
