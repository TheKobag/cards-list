import { TestBed, async } from '@angular/core/testing';
import { InputTextComponent } from './input-text.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('InputTextComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
      ],
    }).compileComponents();
  }));

  it('should create the inputTextComponent', () => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const inputTextComponent = fixture.componentInstance;

    expect(inputTextComponent).toBeTruthy();
  });

  it('input should be disabled at init', done => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const inputTextComponent = fixture.componentInstance;
    inputTextComponent.isEnabled = false;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
      expect(input.disabled).toEqual(true);
      done();
    });
  });

  it('input should be enabled when isEnabled is true ', done => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const inputTextComponent = fixture.componentInstance;

    inputTextComponent.isEnabled = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.nativeElement.querySelector('input');
      expect(input.disabled).toEqual(false);
      done();
    });
  });

  it('value should be "" at init', () => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const inputTextComponent = fixture.componentInstance;

    expect(inputTextComponent.value).toEqual('');
  });

  it('should emit new value when it changes', (done) => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const inputTextComponent = fixture.componentInstance;
    spyOn(inputTextComponent.inputValue, 'emit');

    const input = fixture.nativeElement.querySelector('input');
    inputTextComponent.value = '123';
    input.dispatchEvent(new Event('keyup'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(input.value).toEqual(inputTextComponent.value);
      done();
    });

    expect(inputTextComponent.inputValue.emit).toHaveBeenCalledWith('123');
  });

  it('should not render button when input is empty', done => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const inputTextComponent = fixture.componentInstance;

    inputTextComponent.value = '';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const button: HTMLInputElement = fixture.nativeElement.querySelector('button');
      expect(button).toBeFalsy();
      done();
    });
  });

  it('should reset value when clicked on reset button', (done) => {
    const fixture = TestBed.createComponent(InputTextComponent);
    const inputTextComponent = fixture.componentInstance;

    inputTextComponent.value = '123';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      expect(inputTextComponent.value).toEqual('');
      done();
    });
  });

});
