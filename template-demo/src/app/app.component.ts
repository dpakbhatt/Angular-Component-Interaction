import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  pageTitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  userName: string;
  private _customerName: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  get customerName(): string{
    return this._customerName;
  }

  set customerName(value: string){
    this._customerName = value;
    if(value == 'Deepak'){
      alert("Hello Deepak");
    }
  }

  increment(){
    this.count += 1;
  }

  greet(value){
    this.userName = value;
    if(value == 'Deepak'){
      alert('Welcome back Deepak');
    }
  }
}
