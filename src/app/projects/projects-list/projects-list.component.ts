import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from '../../core/spinner.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-list.component.html',
    styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit, OnDestroy {

    private projectsObservable: FirebaseListObservable<any>;
    projects: Array<any>;

    constructor(private af: AngularFire, private spinnerService: SpinnerService) {
        this.projectsObservable = this.af.database.list('/projects');
    }

    ngOnInit() {
        this.spinnerService.show("Loading Projects");
        this.projectsObservable.subscribe(
            (p) => {
                this.projects = p;
                this.spinnerService.hide();
            },
            (err) => {
                this.spinnerService.hide();
            }
        );
    }

    ngOnDestroy(): any {
        this.spinnerService.hide();
    }

}
