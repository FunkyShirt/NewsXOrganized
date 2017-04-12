import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <style>
      .loader{
        background-image: url("/assets/images/news.png");
        background-position: center;
        background-repeat: no-repeat;
        background-color: white;
      }
    </style>
    <div class="p-ab d-bl w-full h-full">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  title = 'app works!';
}
