import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() color: string;
  private toggled = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.toggled = !this.toggled;
  }
}
