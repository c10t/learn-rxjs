import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Item } from '../vo/item';


const createStories = (ids: number[]): Item[] => {
  return ids.map<Item>(n => {
    return {
      by: 'Faker X',
      descendants: 0,
      id: n,
      kids: [],
      score: 0,
      time: Date.now(),
      title: `Sample ${n}: The Mock`,
      type: 'story',
      url: 'example.com'
    }
  })
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  apiBase: 'api/hn'

  createDb() {
    const newstories = [131243, 156549, 543656, 234235, 765765, 156163]
    const item = createStories(newstories)
    return { newstories, item }
  }

  constructor() { }
}
