import { Component, OnInit, Input } from '@angular/core';
import { SpinnerService } from '../../core/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() toggled: boolean = false;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

}
