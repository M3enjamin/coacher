import { ActivityContainer } from "./activity.container";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([{ path: "", component: ActivityContainer }])
  ],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}
