import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reader-switch',
  templateUrl: './reader-switch.component.html',
  styleUrls: ['./reader-switch.component.css']
})
export class ReaderSwitchComponent implements OnInit {
  @Input() awake: boolean = false
  @Output() switchedTo = new EventEmitter<boolean>()
  
  pushSwitch() {
    const current = this.awake
    console.log(`change status: ${current} -> ${!current}`)
    this.awake = !current
    this.switchedTo.emit(this.awake)
  }

  constructor() { }

  ngOnInit() {
  }

}
