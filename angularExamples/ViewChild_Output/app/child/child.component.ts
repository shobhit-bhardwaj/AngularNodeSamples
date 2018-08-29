import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Person} from '../models/Person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('ageInput') ageInput: ElementRef;
  @Output() personAdded = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }

  onAddPerson() {
    const name = this.nameInput.nativeElement.value;
    const age = this.ageInput.nativeElement.value;
    const person = new Person(name, age);
    this.personAdded.emit(person);
  }
}
