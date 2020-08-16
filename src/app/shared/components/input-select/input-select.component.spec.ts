import { TestBed, async } from '@angular/core/testing';
import { InputSelectComponent } from './input-Select.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('InputSelectComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputSelectComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatIconModule,
      ],
    }).compileComponents();
  }));

  it('should create the inputSelectComponent', () => {
    const fixture = TestBed.createComponent(InputSelectComponent);
    const inputSelectComponent = fixture.componentInstance;

    expect(inputSelectComponent).toBeTruthy();
  });

  it('value should be "" at init', () => {
    const fixture = TestBed.createComponent(InputSelectComponent);
    const inputSelectComponent = fixture.componentInstance;

    expect(inputSelectComponent.value).toEqual('');
  });

  it('header should be set at init', () => {
    const fixture = TestBed.createComponent(InputSelectComponent);
    const inputSelectComponent = fixture.componentInstance;

    expect(inputSelectComponent.value).toEqual('');
  });

  it('options should have right legth', async () => {
    const fixture = TestBed.createComponent(InputSelectComponent);
    const inputSelectComponent = fixture.componentInstance;
    inputSelectComponent.options = [
      { key: 'id', value: 'ID' },
      { key: 'text', value: 'Description' },
    ];
    fixture.detectChanges();

    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger'))
      .nativeElement;
    trigger.click();
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      const options = fixture.debugElement.queryAll(By.css('.mat-option-text'));
      expect(options.length).toEqual(2);
    });
  });

  it('should emit new value when it changes', async () => {
    const fixture = TestBed.createComponent(InputSelectComponent);
    const inputSelectComponent = fixture.componentInstance;
    spyOn(inputSelectComponent.selectedField, 'emit');

    inputSelectComponent.options = [
      { key: 'id', value: 'ID' },
      { key: 'text', value: 'Description' },
    ];
    fixture.detectChanges();

    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
    trigger.click();
    fixture.detectChanges();

    const option = fixture.debugElement.queryAll(By.css('.mat-option-text'))[0].nativeElement;
    option.click();
    fixture.detectChanges();

    expect(inputSelectComponent.selectedField.emit).toHaveBeenCalledWith('id');
  });

});
