import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd = false;
  oddNumbers: Number[] = [1, 3, 5];
  evenNumbers: Number[] = [2, 4, 6];

  constructor() {}

  toggleSelection() {
    this.odd = !this.odd;
  }
}
