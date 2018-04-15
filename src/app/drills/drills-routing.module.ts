import { DrillDetailsContainer } from "./drill-details/drill-details.container";
import { DrillsContainer } from "./drills/drills.container";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "", component: DrillsContainer },
      { path: ":id", component: DrillDetailsContainer }
    ])
  ],
  exports: [RouterModule]
})
export class DrillsRoutingModule {}
