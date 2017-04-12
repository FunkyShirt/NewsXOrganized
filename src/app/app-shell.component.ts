import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
  <md-toolbar id="headbar" [@pageState]="state">
    <ng-content select="[headbar]"></ng-content>
  </md-toolbar>
  <md-sidenav-container [@pageState]="state" class="h-full h-scroll w-full p-ab">
    <md-sidenav
      class="w-40"
      [opened]="sidebarOpened" mode="over">
      <sidebar></sidebar>
    </md-sidenav>
    <div id="content">
      <ng-content select="[content]"></ng-content>
    </div>
  </md-sidenav-container>
  `,
  providers: [],
  animations: [
    trigger('pageState', [
      state("loaded", style({ transform: 'translateY(0)', opacity: '1.0' })),
      transition(":enter", [
        style({transform: 'translateY(10vh)', opacity: '0.0'}),
        animate("200ms ease-in"),
      ]),
      transition(":leave", [
        style({transform: 'translateY(10vh)', opacity: '0.4'}),
        animate("200ms ease-out"),
      ])
    ])
  ]
})
export class AppShellComponent {
  @Input() sidebarOpened: boolean = false;
  @Input() state: string = 'loaded';
  constructor() { }
}
