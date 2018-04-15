import { SessionsContainer } from "./sessions.container";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([{ path: "", component: SessionsContainer }])
  ],
  exports: [RouterModule]
})
export class SessionsRoutingModule {}
