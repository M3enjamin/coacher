import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { SharedModule } from './shared/shared.module';
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { DrillsListComponent } from './drills-list/drills-list.component';
import { DrillFormComponent } from './drill-form/drill-form.component';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [AppComponent, DrillsListComponent, DrillFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
