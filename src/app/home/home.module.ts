import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HomeComponent,
  VisualComponent,
  TodayBoxOfficeComponent,
  MyMoviesComponent,
  NewMoviesComponent,
  ThemeMoviesComponent,
  NewMoviesPostComponent
} from '../pages';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent,
    VisualComponent,
    TodayBoxOfficeComponent,
    MyMoviesComponent,
    NewMoviesComponent,
    ThemeMoviesComponent,
    NewMoviesPostComponent
  ],
  exports: [
    HomeComponent,
    VisualComponent,
    TodayBoxOfficeComponent,
    MyMoviesComponent,
    NewMoviesComponent,
    ThemeMoviesComponent,
    NewMoviesPostComponent
  ]
})
export class HomeModule { }
