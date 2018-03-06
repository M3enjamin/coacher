import { AppStoreModule } from './store/app-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, AppStoreModule],
  exports: [],
  declarations: []
})
export class CoreModule {}
