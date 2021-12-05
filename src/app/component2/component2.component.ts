import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import * as DemoActions from './../actions/demo.actions';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private store: Store<AppState>) { }

  addToStore(nameL: string, genderL: string) {
    this.store.dispatch(new DemoActions.AddDemo({
      name: nameL,
      gender: genderL
    }))
  }

  ngOnInit() {
  }

}
