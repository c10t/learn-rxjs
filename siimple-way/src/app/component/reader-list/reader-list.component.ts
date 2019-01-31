import { Component, OnInit, Input } from '@angular/core';

import { Story } from '../../vo/item';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css']
})
export class ReaderListComponent implements OnInit {
  @Input() stories: Story[]

  constructor() { }

  ngOnInit() {
  }

}
