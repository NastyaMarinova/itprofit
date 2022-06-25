import { ZoomDirective } from './user-profile/zoom.directive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserVisibleDirective } from './user-profile/user-visible.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    UserVisibleDirective,
    ZoomDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
