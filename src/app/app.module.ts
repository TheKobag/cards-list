// Angular Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

// Components
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { CardsDashboardComponent } from './components/cards-dashboard/cards-dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ScrollingModule,

    CoreModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    CardsDashboardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
