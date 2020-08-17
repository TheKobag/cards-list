import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Card } from './../../models/element.model';
import { Texts } from './../../../assets/data/text.enum';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cardsSubject = new BehaviorSubject<Card[]>([]);

  // Should call a service and fetch data from an API endpoint
  getData(): Observable<Card[]> {
    this.cardsSubject.next(this.generateData());

    return this.cardsSubject.asObservable();
  }

  generateData(): Card[] {
    const elements = [];
    for (let id = 1; id <= 4000; id++) {
      const card = {
        id,
        photoUrl: this.generateImage(id),
        text: this.generateParagraph(),
      };
      elements.push(card);
    }

    return elements;
  }

  private generateImage(id: number): string {
    return 'https://picsum.photos/id/' + id + '/500/500.jpg';
  }

  // Generates random paragraphs with 1-10 lines and random content fron an ENUM
  private generateParagraph(): string {
    let text = '';
    for (let i = 0; i <= Math.floor(Math.random() * 10); i++) {
      text += Texts[Math.floor(Math.random() * 20)] + '. ';
    }

    return text;
  }
}
