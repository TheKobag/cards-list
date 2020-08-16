import { TestBed, async } from '@angular/core/testing';
import { CardsDashboardComponent } from './cards-dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FilterBarComponent } from 'src/app/shared/components/filter-bar/filter-bar.component';
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { FilterByPropertyAndValuePipe } from './../../shared/pipes/filter.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputTextComponent } from 'src/app/shared/components/input-text/input-text.component';
import { InputSelectComponent } from 'src/app/shared/components/input-select/input-Select.component';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { KeyValue } from 'src/app/models/key-value.model';
import { By } from '@angular/platform-browser';

describe('CardsDashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardsDashboardComponent,
        FilterBarComponent,
        FilterByPropertyAndValuePipe,
        InputTextComponent,
        InputSelectComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatCardModule,
        MatTabsModule,
        ScrollingModule,
        MatToolbarModule,
        MatSelectModule,
        MatInputModule,
      ],
    }).compileComponents();
  }));

  it('should create the cardComponent', () => {
    const fixture = TestBed.createComponent(CardsDashboardComponent);
    const cardComponent = fixture.componentInstance;

    expect(cardComponent).toBeTruthy();
  });

  it('data should be set at init', () => {
    const fixture = TestBed.createComponent(CardsDashboardComponent);
    const inputTextComponent = fixture.componentInstance;
    const searchFields: KeyValue[] = [
      { key: 'id', value: 'ID' },
      { key: 'text', value: 'Description' },
    ];

    expect(inputTextComponent.searchField).toEqual('');
    expect(inputTextComponent.searchText).toEqual('');
    expect(inputTextComponent.cards).toEqual(undefined);
    expect(inputTextComponent.searchFields).toEqual(searchFields);
  });

  it('cards data should be set after init', () => {
    const fixture = TestBed.createComponent(CardsDashboardComponent);
    const inputTextComponent = fixture.componentInstance;

    fixture.detectChanges();
    expect(inputTextComponent.cards.length).toEqual(4000);
  });

  it('handleFilter should set searchField and searchText', () => {
    const fixture = TestBed.createComponent(CardsDashboardComponent);
    const inputTextComponent = fixture.componentInstance;

    fixture.detectChanges();
    inputTextComponent.handleFilter({ field: 'id', text: 'text' });

    expect(inputTextComponent.searchField).toEqual('id');
    expect(inputTextComponent.searchText).toEqual('text');
  });

});
