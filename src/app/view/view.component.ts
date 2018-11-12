import { Component, OnInit, HostListener } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Person } from '../models/Person';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  instruction: boolean = true;
  instruction2: boolean = false;
  test1: boolean = false;
  people: Person[];
  personId: number;
  wrong: boolean = false;
  count: number = 0;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
    });

    this.personId = Math.floor(Math.random() * this.people.length);
  }


  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {

    if (this.test1 && this.count < 20) {
      if (event.keyCode === 73) {
        if (this.people[this.personId].african) {
          this.wrong = false;
          this.personId = Math.floor(Math.random() * this.people.length);
          this.count++;
        } else {
          this.wrong = true
        };
      }

      if (event.keyCode === 69) {
        if (this.people[this.personId].african) {
          this.wrong = true;
        } else {
          this.wrong = false;
          this.personId = Math.floor(Math.random() * this.people.length);
          this.count++;
        };

      }

      if (this.count >= 20) {
        this.test1 = false;
        this.instruction = true;
        this.count = 0;
      }
    }
  }

  startTest1() {
    this.instruction = false;
    this.test1 = true;
  }

}
