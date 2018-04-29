import { SessionsContainer } from './sessions.container';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsRoutingModule } from './sessions-routing.module';

@NgModule({
  imports: [CommonModule, SessionsRoutingModule],
  declarations: [SessionsContainer]
})
export class SessionsModule {}
