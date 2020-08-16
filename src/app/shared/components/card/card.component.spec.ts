import { TestBed, async } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [MatCardModule],
    }).compileComponents();
  }));

  it('should create the cardComponent', () => {
    const fixture = TestBed.createComponent(CardComponent);
    const cardComponent = fixture.componentInstance;

    expect(cardComponent).toBeTruthy();
  });

  it('data should be set at init', async () => {
    const fixture = TestBed.createComponent(CardComponent);
    const cardComponent = fixture.componentInstance;
    cardComponent.data = {
      id: 1,
      photoUrl: './../../../../assets/images/404-error-file-not-found.jpg',
      text: 'Lorem ipsum',
    };
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(fixture.debugElement.query(By.css('img')).attributes['src']).toEqual(cardComponent.data.photoUrl);
      expect(fixture.debugElement.query(By.css('mat-card-content p')).nativeElement.innerHTML).toEqual(cardComponent.data.text);
    });
  });

});
