import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter: {{ counter }}</h2>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <hr />
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
  constructor() {}
}
