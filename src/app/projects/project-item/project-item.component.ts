import { Component, OnInit, Input } from '@angular/core';
import * as Marked from 'marked';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() projectTitle: string;
  @Input() projectSubTitle: string;
  @Input() projectContent: string;
  projectContentMd: string;

  constructor() {
  }

  ngOnInit() {
    this.projectContentMd = Marked(this.projectContent);
  }

}
