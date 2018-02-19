import { DrillsRoutingModule } from './drills-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrillsListComponent } from './drills-list/drills-list.component';
import { DrillFormComponent } from './drill-form/drill-form.component';
import { DrillDetailsComponent } from './drill-details/drill-details.component';
import { SharedModule } from '@app/shared/shared.module';
import { DrillsContainer } from './drills.container';

@NgModule({
  imports: [CommonModule, SharedModule, DrillsRoutingModule],
  declarations: [DrillsListComponent, DrillFormComponent, DrillDetailsComponent, DrillsContainer]
})
export class DrillsModule {}
