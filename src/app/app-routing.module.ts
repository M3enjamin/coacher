import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

export const routes: Routes = [
  { path: "", redirectTo: "/sessions", pathMatch: "full" },
  {
    path: "sessions",
    loadChildren: "app/sessions/sessions.module#SessionsModule"
  },
  {
    path: "drills",
    loadChildren: "app/drills/drills.module#DrillsModule"
  },
  {
    path: "activity",
    loadChildren: "app/activity/activity.module#ActivityModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({
      stateKey: "router"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
