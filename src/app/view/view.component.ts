import { Component, OnInit, HostListener } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { WordsService } from '../services/words.service';
import { Person } from '../models/Person';
import { Word } from '../models/Word';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  instruction: boolean = true;
  instruction2: boolean = false;
  instruction3: boolean = false;
  test1: boolean = false;
  test2: boolean = false;
  test3: boolean = false;
  people: Person[];
  words: Word[];
  personId: number;
  wordId: number;
  wrong: boolean = false;
  count: number = 0;

  constructor(private peopleService: PeopleService, private wordsService: WordsService) { }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(people => {
      this.people = people;
    });

    this.wordsService.getWords().subscribe(word => {
      this.words = word;
    })

    this.chooseFace();
    this.chooseWord();
  }


  @HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {

    if (this.test1 && this.count < 20) {

      if (event.keyCode === 73) {
        if (this.people[this.personId].african) {
          this.wrong = false;
          this.chooseFace();
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
          this.chooseFace();
          this.count++;
        };

      }

      if (this.count >= 20) {
        this.startInstruction();
      }

     
    }

    if (this.test2 && this.count < 20) {
      if (event.keyCode === 73) {
        if (this.words[this.wordId].good) {
          this.wrong = false;
          this.chooseWord();
          this.count++;
        } else {
          this.wrong = true
        };
      }

      if (event.keyCode === 69) {
        if (this.words[this.wordId].good) {
          this.wrong = true;
        } else {
          this.wrong = false;
          this.chooseWord();
          this.count++;
        };

      }

      if (this.count == 20) {
        this.startInstruction();
      }

     
    }
  }

  startTest() {
    if(!this.test1 && this.instruction) {
      this.instruction = false;
      this.test1 = true;
    }

    if(!this.test2 && this.instruction2) {
      this.instruction2 = false;
      this.test2 = true;
      console.log("fun");
    }
  }



  startInstruction() {
    if (!this.instruction && this.test1) {
      this.test1 = false;
      this.instruction2 = true;
      this.count = 0;
    }

    if (!this.instruction2 && this.test2) {
      this.test2 = false;
      this.instruction3 = true;
      this.count = 0;
    }
  
  }

  

  chooseFace() {
    this.personId = Math.floor(Math.random() * this.people.length);
  }

  chooseWord() {
    this.wordId = Math.floor(Math.random() * this.words.length);
  }

}
