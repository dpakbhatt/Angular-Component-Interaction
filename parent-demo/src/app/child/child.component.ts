import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name= "Deepak";

  @Output() greetEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  callParentComponent(){
    this.greetEvent.emit(this.name);
  }

}
