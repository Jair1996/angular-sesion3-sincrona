import { Component } from '@angular/core';
import { Price } from '../../interfaces/price.interface';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent {
  prices: Price[] = [
    {
      title: 'Libre',
      price: 0,
      beneficios: [
        '10 usuarios incluidos',
        '2 GB de almacenamiento',
        'Soporte de correo electrónico',
        'Acceso al centro de ayuda',
      ],
      btnText: 'Registrate gratis',
    },
    {
      title: 'Pro',
      price: 15,
      beneficios: [
        '20 usuarios incluidos',
        '10 GB de almacenamiento',
        'Soporte prioritario por correo electrónico',
        'Acceso al centro de ayuda',
      ],
      btnText: 'Empezar',
    },
    {
      title: 'Empresa',
      price: 29,
      beneficios: [
        '30 usuarios incluidos',
        '15 GB de almacenamiento',
        'Soporte telefónico y por correo electrónico',
        'Acceso al centro de ayuda',
      ],
      btnText: 'Contáctenos',
    },
  ];
}
