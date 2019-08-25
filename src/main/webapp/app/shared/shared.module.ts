import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Jh5SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Jh5SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Jh5SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Jh5SharedModule {
  static forRoot() {
    return {
      ngModule: Jh5SharedModule
    };
  }
}
