import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 (click)="testF()">Hello from {{name}}!</h1>
    <div style="border: 1px solid #ccc !important;">
      <div style="color: #000 !important;
      background-color: #9e9e9e !important; height:40px;"
      [style.width]="widthValue"></div>
    </div>
  `,
})
export class App {
  name = 'Angular';

  testNum = 0;
  widthValue = this.testNum.toString() + '%';

  testF() {
    console.log(this.widthValue);
    let test = 0;
    let myInterval = setInterval(() => {
      this.testNum = this.testNum + 3.33;
      this.widthValue = this.testNum.toString() + '%';
      test++;

      if (this.testNum > 99) {
        this.widthValue = '100%';
        console.log(test);
        clearInterval(myInterval);
      }
    }, 1000);
  }
}

bootstrapApplication(App);
