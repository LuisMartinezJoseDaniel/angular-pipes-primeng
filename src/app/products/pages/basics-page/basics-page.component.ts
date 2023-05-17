import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'danny';
  public nameUpper: string = 'DANNY';
  public fullName: string = 'JoSe DanIEL';

  public customDate: Date = new Date();
}
