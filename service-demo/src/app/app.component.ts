import { Component } from '@angular/core';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _interactionService: InteractionService) {}

  greetStudent(){
    this._interactionService.sendMessage("Good Morning");
  }

  appreciateStudent(){
    this._interactionService.sendMessage("Well Done!");
  }
}
