import { ActivityRoutingModule } from "./activity-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivityContainer } from "./activity.container";

@NgModule({
  imports: [CommonModule, ActivityRoutingModule],
  declarations: [ActivityContainer]
})
export class ActivityModule {}
