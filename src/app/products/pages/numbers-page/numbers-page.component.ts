import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css'],
})
export class NumbersPageComponent {
  public totalSells: number = 1243.123123124;
  public percent: number = 0.78;
}
