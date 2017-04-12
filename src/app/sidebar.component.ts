import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `
  <md-list>
    <md-list-item *ngFor="let menu of menus">
      <a md-button class="d-ib w-100 w-center" [routerLink]="menu.href">
        <md-icon class="p-fl">{{menu.icon}}</md-icon>
        <span class="p-fr">{{menu.option}}</span>
      </a>
    </md-list-item>
  </md-list>
  `,
  providers: [],
})
export class SidebarComponent {
  menus = [
    {option: 'settings', icon: 'settings', href: '/settings'},
    {option: 'bookmarks', icon: 'book', href: '/bookmarks'},
    {option: 'explore', icon: 'explore', href: '/explore'},
  ]
  constructor(){}
}
