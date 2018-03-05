import { ActivityModule } from './activity/activity.module';
import { SessionsModule } from './sessions/sessions.module';
import { AppRoutingModule } from './app-routing.module';
import { DrillsModule } from './drills/drills.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule } from './shared/shared.module';
import { environment } from './../environments/environment';

import { AppContainer } from './app.container';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { CoreModule } from '@app/core/core.module';
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from '@app/store/layout.reducer';

@NgModule({
  declarations: [AppContainer],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ layout: layoutReducer }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    DrillsModule,
    SessionsModule,
    ActivityModule
  ],
  providers: [],
  bootstrap: [AppContainer]
})
export class AppModule {}
