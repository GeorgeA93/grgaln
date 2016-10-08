import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import {ProjectsRoutingModule} from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MaterialModule
  ],
  declarations: [ProjectsComponent, ProjectsListComponent, ProjectItemComponent]
})
export class ProjectsModule { }
