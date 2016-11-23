import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from '../../core/spinner.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit, OnDestroy {

  private experiencesObservable: FirebaseListObservable<any>;
  experiences: Array<any>;

  constructor(private af: AngularFire, private spinnerService: SpinnerService) {
    this.experiencesObservable = this.af.database.list('/experience');
  }

  ngOnInit() {
    this.spinnerService.show('Loading Experience');
    this.experiencesObservable.subscribe(
      (exp) => {
        this.experiences = exp;
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
