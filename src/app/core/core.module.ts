import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CardsService } from './services/cards.service';

@NgModule({
  providers: [
    CardsService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
