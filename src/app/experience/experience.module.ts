import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience.component';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';

@NgModule({
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ],
  declarations: [ExperienceComponent, ExperienceItemComponent, ExperienceListComponent]
})
export class ExperienceModule { }
