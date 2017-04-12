import { Component } from '@angular/core';

@Component({
  selector: 'setting-page',
  template: `
  <app-shell [sidebarOpened]="sidebarOpened">
    <div headbar>
      <a
        (tap)="toggleSide()"
        md-icon-button>
        <md-icon>menu</md-icon>
      </a>
      <span>settings</span>
    </div>
    <div content>
      this is a good element
    </div>
  </app-shell>
  `,
  providers: [],
})
export class SettingPageComponent {
  sidebarOpened: boolean = false;
  constructor(){}

  toggleSide(){
    this.sidebarOpened = !this.sidebarOpened;
  }
}
