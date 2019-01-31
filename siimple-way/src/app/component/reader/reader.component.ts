import { Component, OnInit } from '@angular/core';

import { STORIES } from '../../mock-stories'
import { Story } from '../../vo/item';

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

      const now = Date.now()
      const newTitle = "title-" + now

      this.stories.push(
        {
          by: 'Foobar Baz',
          id: 13412,
          descendants: 100,
          kids: [],
          score: 99,
          time: now,
          title: newTitle,
          type: 'story',
          url: 'url'
        }
      )
    } else {
      console.log("stop reading...")
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
