import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  isClicked = false;
  buttonClicks = [];

  onToggleDisplay() {
    this.isClicked = !this.isClicked;
    this.buttonClicks.push(this.buttonClicks.length + 1)
  }
}
