import { DrillsContainer } from './drills.container';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([{ path: '', component: DrillsContainer }])],
  exports: [RouterModule]
})
export class DrillsRoutingModule {}
