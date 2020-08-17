import { async, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSelectComponent } from '../input-select/input-Select.component';
import { InputTextComponent } from '../input-text/input-text.component';
import { FilterBarComponent } from './filter-bar.component';

describe('FilterBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterBarComponent, InputSelectComponent, InputTextComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule
      ],
    }).compileComponents();
  }));

  it('should create the filterBarComponent', () => {
    const fixture = TestBed.createComponent(FilterBarComponent);
    const filterBarComponent = fixture.componentInstance;

    expect(filterBarComponent).toBeTruthy();
  });

  it('params should be "" at init', () => {
    const fixture = TestBed.createComponent(FilterBarComponent);
    const filterBarComponent = fixture.componentInstance;

    expect(filterBarComponent.searchField).toEqual('');
    expect(filterBarComponent.searchText).toEqual('');
  });

  it('should render app-input-select', done => {
    const fixture = TestBed.createComponent(FilterBarComponent);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.nativeElement.querySelector('app-input-select');
      expect(input).toBeTruthy();
      done();
    });
  });

  it('should render app-input-text', done => {
    const fixture = TestBed.createComponent(FilterBarComponent);

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text');
      expect(input).toBeTruthy();
      done();
    });
  });

  it('should change searchField when an option is selected', async () => {
    const fixture = TestBed.createComponent(FilterBarComponent);
    const filterBarComponent = fixture.componentInstance;
    filterBarComponent.fieldSelected('id');
    fixture.detectChanges();

    expect(filterBarComponent.searchField).toEqual('id');
    filterBarComponent.fieldSelected('text');

    expect(filterBarComponent.searchField).toEqual('text');
  });

  it('should reset input text value when option changes', async () => {
    const fixture = TestBed.createComponent(FilterBarComponent);
    const filterBarComponent = fixture.componentInstance;
    filterBarComponent.fieldSelected('id');
    fixture.detectChanges();

    filterBarComponent.fieldSelected('id');

    expect(filterBarComponent.searchText).toEqual('');
  });

  it('should emit new params when it changes',  done => {
    const fixture = TestBed.createComponent(FilterBarComponent);
    const filterBarComponent = fixture.componentInstance;
    spyOn(filterBarComponent.filterParams, 'emit');

    filterBarComponent.searchField = 'id';
    filterBarComponent.onInputChanged('text');

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(filterBarComponent.filterParams.emit).toHaveBeenCalledWith({ field: 'id', text: 'text' });
      done();
    });
  });

});
