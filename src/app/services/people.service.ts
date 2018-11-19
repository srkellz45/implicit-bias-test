import { Injectable } from '@angular/core';
import { Person } from '../models/Person';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people: Person[];

  constructor() { 
    this.people = [
      {
        src: 'assets/black/bf1_nc.jpg',
        african: true,
        id: 0
      },
      {
        src: 'assets/black/bf2_nc.jpg',
        african: true,
        id: 1
      },
      {
        src: 'assets/black/bf3_nc.jpg',
        african: true,
        id: 2
      },
      {
        src: 'assets/black/bm1_nc.jpg',
        african: true,
        id: 3
      },
      {
        src: 'assets/black/bm2_nc.jpg',
        african: true,
        id: 4
      },
      {
        src: 'assets/black/bm3_nc.jpg',
        african: true,
        id: 5
      },
      {
        src: 'assets/white/wf1_nc.jpg',
        african: false,
        id: 6
      },
      {
        src: 'assets/white/wf3_nc.jpg',
        african: false,
        id: 7
      },
      {
        src: 'assets/white/wm1_nc.jpg',
        african: false,
        id: 8
      },
      {
        src: 'assets/white/wm2_nc.jpg',
        african: false,
        id: 9
      },
      {
        src: 'assets/white/wm3_nc.jpg',
        african: false,
        id: 10
      },
      {
        src: 'assets/white/wf2_nc.jpg',
        african: false,
        id: 11
      },
    ];
  }

  getPeople(): Observable<Person[]> {
    return of(this.people);
  }
}
