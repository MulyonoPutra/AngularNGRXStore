import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Demo } from '../modal/demo.modal';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as DemoActions from './../actions/demo.actions'

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  demo: Observable<Demo[]>;
  
  constructor(private store: Store<AppState>) {
    this.demo = store.select('demoStore');
  }

  removeFromTable(id: number) {
    this.store.dispatch(new DemoActions.RemoveDemo(id)); 
  }

  ngOnInit() {
  }

}
