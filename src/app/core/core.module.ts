import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner.service';
import { WaveComponent } from './wave/wave.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HttpModule
    ],
    declarations: [SpinnerComponent, WaveComponent],
    exports: [SpinnerComponent],
    providers: [
        SpinnerService
    ]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}