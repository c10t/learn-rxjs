import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, flatMap, filter, debounceTime } from 'rxjs/operators';

import { Story, Item } from '../vo/item';
import { STORIES } from '../mock-stories';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsFetchService {
  baseURL: string = 'https://hacker-news.firebaseio.com/v0'

  getNewStories(): Observable<Story> {
    const ids$ = this.http.get<number[]>(`${this.baseURL}/newstories.json`)
    const item$ = (id: number): Observable<Item> =>
      this.http.get<Item>(`${this.baseURL}/item/${id}.json`)
    
    const story$ = ids$.pipe(
      flatMap(ids => from(ids)),
      debounceTime(5000),
      flatMap(id => item$(id)),
      filter(item => item.type === 'story'),
      map(item => <Story>item)
    )

    return story$
  }

  constructor(
    private http: HttpClient
  ) { }
}
