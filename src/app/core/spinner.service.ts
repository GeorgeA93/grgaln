import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

  private hidden: boolean = true;
  private text: string = "HELLLO WORLD!";

  get message(): string {
    return this.text;
  }

  get isRunning(): boolean {
    return !this.hidden;
  }

  constructor() { 

  }

  show(text?: string) {
    if (text != null) {
      this.text = text;
    } else {
      this.text = "Loading";
    }
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
    this.text = "";
  }

}
