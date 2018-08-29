import { Component } from '@angular/core';
import {Person} from './models/Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons: Person[] = [];

  constructor() {}

  onPersonAdded(person: Person) {
    this.persons.push(person);
  }
}
