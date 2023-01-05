import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoo';
  constructor() {
    // setTimeout(() => {
    //   this.title="Changee"
    // }, 2000);
  }
}
