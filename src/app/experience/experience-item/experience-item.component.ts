import { Component, OnInit, Input } from '@angular/core';
import * as Marked from 'marked';

@Component({
    selector: 'app-experience-item',
    templateUrl: './experience-item.component.html',
    styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent implements OnInit {

    @Input() experienceTitle: string;
    @Input() experienceSubTitle: string;
    @Input() experienceContent: string;
    experienceContentMd: string;

    constructor() {
    }

    ngOnInit() {
        this.experienceContentMd = Marked(this.experienceContent);
    }

}
