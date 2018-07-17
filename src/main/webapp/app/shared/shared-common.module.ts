import { NgModule } from '@angular/core';

import { OolinkQuizApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [OolinkQuizApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [OolinkQuizApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class OolinkQuizApplicationSharedCommonModule {}
