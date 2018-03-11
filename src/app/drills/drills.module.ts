import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../../environments/environment.prod';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DrillsStoreModule } from './store/drills-store.module';
import { DrillsService } from './drills.service';
import { DrillsStoreService } from './store/drills-store.service';
import { DrillsRoutingModule } from './drills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillsListComponent } from './drills-list/drills-list.component';
import { DrillFormComponent } from './drill-form/drill-form.component';
import { DrillDetailsContainer } from './drill-details/drill-details.container';
import { SharedModule } from '@app/shared/shared.module';
import { DrillsContainer } from './drills/drills.container';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DrillsRoutingModule,
    DrillsStoreModule
  ],
  declarations: [
    DrillsListComponent,
    DrillFormComponent,
    DrillDetailsContainer,
    DrillsContainer
  ],
  providers: [
    DrillsStoreService,
    DrillsService
  ]
})
export class DrillsModule { }
