import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Story } from '../vo/item';
import { STORIES } from '../mock-stories';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsFetchService {
  baseURL: string = ''

  getNewStories(): Observable<Story[]> {
    return of(STORIES)
  }

  constructor() { }
}
