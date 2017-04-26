import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BlogPostComponent } from './blogpost/app.blogpost.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    BlogPostComponent
    ],
  bootstrap:    [
    AppComponent,
    BlogPostComponent
  ]
})
export class AppModule { }
