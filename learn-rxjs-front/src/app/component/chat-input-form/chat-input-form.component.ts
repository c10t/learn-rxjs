import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input-form',
  templateUrl: './chat-input-form.component.html',
  styleUrls: ['./chat-input-form.component.css']
})
export class ChatInputFormComponent implements OnInit {
  private hint: string = 'dummy' 

  constructor() { }

  ngOnInit() {
  }

}
