import { Component, OnInit } from '@angular/core';

import { STORIES } from '../../mock-stories'
import { Story } from '../../vo/item';
import { HackerNewsFetchService } from 'src/app/service/hacker-news-fetch.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  private stories: Story[] = [] // STORIES

  onSwitch(onReading: boolean) {
    if (onReading) {
      console.log("start reading...")
      this.hn.getNewStories().subscribe(x => this.stories = x)
    } else {
      console.log("stop reading...")
    }
  }

  constructor(private hn: HackerNewsFetchService) { }

  ngOnInit() {
  }

}
