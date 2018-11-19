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
  word: boolean = true;
  face: boolean;
  leftOption1: string = "European Americans";
  leftOption2: string;
  rightOption1: string = "African Americans";
  rightOption2: string;
  instruction: boolean = true;
  instruction2: boolean = false;
  instruction3: boolean = false;
  instruction4: boolean = false;
  instruction5: boolean = false;
  test1: boolean = false;
  test2: boolean = false;
  test3: boolean = false;
  test4: boolean = false;
  test5: boolean = false;
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

    if (this.test3 && this.count < 20) {
      if (event.keyCode === 69) {
        if (this.word) {
          if (this.words[this.wordId].good) {
            this.wrong = true;
          } else {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          };
        } else {
          if (this.people[this.personId].african) {
            this.wrong = true;
          } else {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          };
        }
      }

      if (event.keyCode === 73) {
        if (this.word) {
          if (this.words[this.wordId].good) {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          } else {
            this.wrong = true;
          };
        } else {
          if (this.people[this.personId].african) {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          } else {
            this.wrong = true;
          };
        }
      }

      if (this.count == 20) {
        this.startInstruction();
      }     
    }

    if (this.test4 && this.count < 20) {

      if (event.keyCode === 69) {
        if (this.people[this.personId].african) {
          this.wrong = false;
          this.chooseFace();
          this.count++;
        } else {
          this.wrong = true
        };
      }

      if (event.keyCode === 73) {
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

    if (this.test5 && this.count < 20) {

      if (event.keyCode === 69) {
        if (this.word) {
          if (this.words[this.wordId].good) {
            this.wrong = true;
          } else {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          };
        } else {
          // if (this.people[this.personId].african) {
          //   this.wrong = true;
          // } else {
          //   this.wrong = false;
          //   this.chooseWordOrFace();
          //   this.count++;
          // };
          if (this.people[this.personId].african) {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          } else {
            this.wrong = true;
          };
        }
      }

      if (event.keyCode === 73) {
        if (this.word) {
          if (this.words[this.wordId].good) {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          } else {
            this.wrong = true;
          };
        } else {
          if (this.people[this.personId].african) {
            this.wrong = true;
          } else {
            this.wrong = false;
            this.chooseWordOrFace();
            this.count++;
          };
        }
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
    }

    if(!this.test3 && this.instruction3) {
      this.instruction3 = false;
      this.test3 = true;
    }

    if(!this.test4 && this.instruction4) {
      this.instruction4 = false;
      this.test4 = true;
    }

    if(!this.test5 && this.instruction5) {
      this.instruction5 = false;
      this.test5 = true;
    }

    
  }

  startInstruction() {
    if (!this.instruction && this.test1) {
      this.test1 = false;
      this.instruction2 = true;
      this.count = 0;
      this.leftOption1 = "Bad";
      this.rightOption1 = "Good";
    }

    if (!this.instruction2 && this.test2) {
      this.test2 = false;
      this.instruction3 = true;
      this.count = 0;
      this.leftOption2 = "European Americans";
      this.rightOption2 = "African Americans";
    }

    if (!this.instruction3 && this.test3) {
      this.test3 = false;
      this.instruction4 = true;
      this.count = 0;
      this.leftOption1 = "African Americans";
      this.rightOption1 = "European Americans";
      this.leftOption2 = "";
      this.rightOption2 = "";
    }  

    if (!this.instruction4 && this.test4) {
      this.test4 = false;
      this.instruction5 = true;
      this.count = 0;
      this.leftOption1 = "Bad";
      this.rightOption1 = "Good";
      this.leftOption2 = "African Americans";
      this.rightOption2 = "European Americans";
    }  
  }

  chooseFace() {
    this.personId = Math.floor(Math.random() * this.people.length);
  }

  chooseWord() {
    this.wordId = Math.floor(Math.random() * this.words.length);
  }

  chooseWordOrFace() {
    if (Math.random() >= 0.5) {
      this.face = true;
      this.word = false;
      this.chooseFace();
    } else {
      this.face = false;
      this.word = true;
      this.chooseWord();
    }
  }

  calculateClasses() {
    return {
        'blue': this.test3 || this.instruction3
    };
}
}
