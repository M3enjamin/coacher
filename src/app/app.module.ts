import { ActivityModule } from './activity/activity.module';
import { SessionsModule } from './sessions/sessions.module';
import { AppRoutingModule } from './app-routing.module';
import { DrillsModule } from './drills/drills.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef } from '@angular/core';
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
export class AppModule {
  constructor(applicationRef: ApplicationRef) {
    const originalTick = applicationRef.tick;

    applicationRef.tick = function () {
      const before = performance.now();

      const retVal = originalTick.apply(this, arguments);

      const after = performance.now();

      console.log('CHANGE DETECTION: ', after - before);

      return retVal;
    };
  }
}
