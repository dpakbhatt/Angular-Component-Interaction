import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  
  message: string;
  @Input() loggedIn: boolean;
  name = "Deepak";

  //loggedIn = true;
  //@Input() loggedIn: boolean;  
  //@Input('loggedIn') value: boolean; // for name changement
  //@Input('loggedIn') value: false;  //for default value
  /*
  private _loggedIn: boolean;

  get loggedIn(): boolean{
    return this._loggedIn;
  }
  @Input()
  set loggedIn(value: boolean){
    this._loggedIn = value;
    if(value === true){
      this.message = 'Welcome back Deepak';
    } else{
      this.message = 'Please log in';
    }
  }
  */
  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    const loggedInValue = changes['loggedIn'];
    if(loggedInValue.currentValue === true){
      this.message = "Welcome back Deepak";
    }else {
      this.message = "Please log in";
    }
  }

  greetNow(){
    alert("Hey Deepak");
  }

}
