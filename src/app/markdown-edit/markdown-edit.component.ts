import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-markdown-edit',
  templateUrl: './markdown-edit.component.html',
  styleUrls: ['./markdown-edit.component.css']
})
export class MarkdownEditComponent {

  @Output() rawInput = new EventEmitter<{userInput: string}>();
  
  inputHandler(e) {
    this.rawInput.emit({
      userInput: e.target.value
    });
  }


}
