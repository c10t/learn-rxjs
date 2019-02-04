import { Component, OnInit } from '@angular/core';

import { Story } from '../../vo/item';
import { HackerNewsFetchService } from 'src/app/service/hacker-news-fetch.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  private stories: Story[] = []
  private sub: Subscription

  onSwitch(onReading: boolean) {
    if (onReading) {
      console.log("start reading...")
      this.sub = this.hn.getTopStories().subscribe(x => this.stories.push(x))
    } else {
      console.log("stop reading...")
      this.sub.unsubscribe()
    }
  }

  constructor(private hn: HackerNewsFetchService) { }

  ngOnInit() {
  }

}
