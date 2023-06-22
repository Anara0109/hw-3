import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor() {}
	public counter$$: BehaviorSubject <number> = new BehaviorSubject <number> (0);
  
	increment() {
	  this.counter$$.next(this.counter$$.getValue() + 1)
	}
  
	decrement() {
	  this.counter$$.next(this.counter$$.getValue() - 1)
	}
}
