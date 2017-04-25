import { Component } from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  markup: string = ``;

  constructor() {
    marked.setOptions({
      enderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  }

  createMarkup(data) {
    this.markup = marked(data.userInput);
  }

}
