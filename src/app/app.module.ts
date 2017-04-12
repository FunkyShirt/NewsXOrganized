import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material'
import 'hammerjs';

import { AppComponent } from './app.component';
import { SpacerComponent } from './spacer.component';
import { SidebarComponent } from './sidebar.component';
import { FirebaseLoginComponent } from './firebase-login.component';
import { AppShellComponent } from './app-shell.component';
import { SettingPageComponent } from './setting-page.component';

const appRoutes:Routes = [
  {path: 'settings', component: SettingPageComponent},
  {path: '**', component: SettingPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SpacerComponent,
    SidebarComponent,
    FirebaseLoginComponent,
    AppShellComponent,
    SettingPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
