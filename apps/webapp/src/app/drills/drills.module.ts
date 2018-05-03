import { DrillsStoreModule } from './store/drills-store.module';
import { DrillsService } from './drills.service';
import { DrillsStoreService } from './store/drills-store.service';
import { DrillsRoutingModule } from './drills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillsListComponent } from './drills-list/drills-list.component';
import { NewDrillFormComponent } from './new-drill-form/new-drill-form.component';
import { DrillDetailsContainer } from './drill-details/drill-details.container';
import { SharedModule } from '@app/shared/shared.module';
import { DrillsContainer } from './drills/drills.container';

@NgModule({
  imports: [CommonModule, SharedModule, DrillsRoutingModule, DrillsStoreModule],
  declarations: [DrillsListComponent, NewDrillFormComponent, DrillDetailsContainer, DrillsContainer],
  providers: [DrillsStoreService, DrillsService]
})
export class DrillsModule {}
