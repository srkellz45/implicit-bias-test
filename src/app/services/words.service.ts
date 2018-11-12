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
        word: "Friend",
        good: true
      },
      {
        id: 2,
        word: "Warm",
        good: true
      },
      {
        id: 3,
        word: "Fun",
        good: true
      },
      {
        id: 4,
        word: "Bright",
        good: true
      },
      {
        id: 5,
        word: "Wonderful",
        good: true
      },
      {
        id: 6,
        word: "Angry",
        good: false
      },
      {
        id: 7,
        word: "Upset",
        good: false
      },
      {
        id: 8,
        word: "Sadness",
        good: false
      },
      {
        id: 9,
        word: "Pain",
        good: false
      }
    ]
  }

  getWords(): Observable<Word[]> {
    return of(this.words);
  }
}
