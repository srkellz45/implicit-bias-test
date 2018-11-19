import { Injectable } from '@angular/core';
import { Word } from '../models/Word';
import { Observable } from 'rxjs';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WordsService {
  words: Word[];

  constructor() { 
    this.words = [
      {
        id: 0,
        word: "Happy",
        good: true
      },
      {
        id: 1,
        word: "Smiling",
        good: true
      },
      {
        id: 2,
        word: "Cheerful",
        good: true
      },
      {
        id: 3,
        word: "Fun",
        good: true
      },
      {
        id: 4,
        word: "Attractive",
        good: true
      },
      {
        id: 5,
        word: "Appealing",
        good: true
      },
      {
        id: 6,
        word: "Triumph",
        good: true
      },
      {
        id: 7,
        word: "Cherish",
        good: true
      },
      {
        id: 8,
        word: "Sadness",
        good: false
      },
      {
        id: 9,
        word: "Joyous",
        good: true
      },
      {
        id: 10,
        word: "Success",
        good: true
      },
      {
        id: 11,
        word: "Abandonment",
        good: false
      },
      {
        id: 12,
        word: "Peace",
        good: true
      },
      {
        id: 13,
        word: "Greed",
        good: false
      },
      {
        id: 14,
        word: "Empathy",
        good: true
      },
      {
        id: 15,
        word: "Deception",
        good: false
      },
      {
        id: 16,
        word: "Trust",
        good: true
      },
      {
        id: 17,
        word: "Failure",
        good: false
      },
      {
        id: 18,
        word: "Excellent",
        good: true
      },
      {
        id: 19,
        word: "Rotten",
        good: false
      },
      {
        id: 20,
        word: "Hatred",
        good: false
      },
      {
        id: 21,
        word: "Sickening",
        good: false
      },
      {
        id: 22,
        word: "Evil",
        good: false
      },
      {
        id: 23,
        word: "Poison",
        good: false
      },
      {
        id: 24,
        word: "Tragic",
        good: false
      },
      {
        id: 25,
        word: "Humiliate",
        good: false
      },
      {
        id: 26,
        word: "Disaster",
        good: false
      }
    ];
  }

  getWords(): Observable<Word[]> {
    return of(this.words);
  }
}
