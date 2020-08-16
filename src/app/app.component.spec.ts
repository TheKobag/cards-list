import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardsDashboardComponent } from "./components/cards-dashboard/cards-dashboard.component";
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilterBarComponent } from './shared/components/filter-bar/filter-bar.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FilterByPropertyAndValuePipe } from './shared/pipes/filter.pipe';
import { InputSelectComponent } from './shared/components/input-select/input-Select.component';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardsDashboardComponent,
        FilterBarComponent,
        FilterByPropertyAndValuePipe,
        InputSelectComponent,
        InputTextComponent
      ],
      imports: [
        MatTabsModule,
        ScrollingModule,
        MatToolbarModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
