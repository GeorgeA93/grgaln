import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ],
  declarations: [ExperienceComponent]
})
export class ExperienceModule { }
