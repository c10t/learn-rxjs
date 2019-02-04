import { Injectable } from '@angular/core';
import { Observable, of, from, timer, zip } from 'rxjs';
import { map, flatMap, filter, debounceTime, tap, delay, concatMap } from 'rxjs/operators';

import { Story, Item } from '../vo/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsFetchService {
  baseURL: string = 'api/hn'

  getTopStories(): Observable<Story> {
    const ids$: Observable<number> = this.http
      .get<number[]>(`${this.baseURL}/topstories.json`)
      .pipe(
        tap(x => console.log(`fetched ${x.length} stories`)),
        map(x => x.slice(0, 10)),
        flatMap(ids => from(ids))
      )

    const timer$ = timer(2000, 2000)

    const delayed$: Observable<number> = zip(ids$, timer$, (id, _) => id)

    const item$ = (id: number): Observable<Item> =>
      this.http.get<Item>(`${this.baseURL}/item/${id}.json`)

    const story$ = delayed$.pipe(
      tap(id => console.log(`id: ${id} comes... `)),
      flatMap(id => item$(id)),
      filter(item => item.type === 'story'),
      map(item => <Story>item),
      tap(item => console.log(`Story: ${item.title}`)),
    )

    return story$
  }

  constructor(
    private http: HttpClient
  ) { }
}
