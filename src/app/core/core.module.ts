import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { SpinnerService } from './spinner.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule
    ],
    declarations: [],
    exports: [],
    providers: [
        SpinnerService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}