import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { PageComponent } from './page/page.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { WaveComponent } from './wave/wave.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        SidemenuComponent,
        PageComponent,
        WaveComponent,
        SpinnerComponent
    ],
    exports: [
        PageComponent
    ],
    providers: []
})
export class SharedModule { }