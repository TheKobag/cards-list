import { Component, Input } from '@angular/core';
import { Card } from '../../../models/element.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() data: Card;
}
