import { NgModule } from '@angular/core';

import { Jh5SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Jh5SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Jh5SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Jh5SharedCommonModule {}
