import { ActivityModule } from './activity/activity.module';
import { SessionsModule } from './sessions/sessions.module';
import { AppRoutingModule } from './app-routing.module';
import { DrillsModule } from './drills/drills.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routerReducer } from '@ngrx/router-store';

import { SharedModule } from './shared/shared.module';
import { environment } from './../environments/environment';

import { AppContainer } from './app.container';
import { CoreModule } from '@app/core/core.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppContainer],
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
  bootstrap: [AppContainer]
})
export class AppModule {}
