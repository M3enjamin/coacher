import { ActivityModule } from './activity/activity.module';
import { SessionsModule } from './sessions/sessions.module';
import { AppRoutingModule } from './app-routing.module';
import { DrillsModule } from './drills/drills.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CoreModule } from '@app/core/core.module';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, LayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SessionsModule,
    DrillsModule,
    ActivityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
