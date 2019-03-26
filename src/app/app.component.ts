import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'top-collegues-front';
  col = { photo: 'https://media.licdn.com/dms/image/C4E03AQFlHrZpdWLrCg/profile-displayphoto-shrink_800_800/0?e=1559174400&v=beta&t=POzA8vH0RFoyJN4CNA-n8o0C3BzN9fHaZcXeVGkw02E', pseudo: 'youyou', score: 120 };
}
