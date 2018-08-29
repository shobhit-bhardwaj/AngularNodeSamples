import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show: boolean = true;

  constructor() {}

  toggleShow() {
    this.show = !this.show;
  }
}
