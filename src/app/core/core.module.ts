import { LayoutStoreService } from './store/layout/layout-store.service';
import { AppStoreModule } from './store/app-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from '@app/core/store/layout/layout.reducer';

@NgModule({
  imports: [CommonModule, AppStoreModule],
  exports: [],
  declarations: [],
  providers: [LayoutStoreService]
})
export class CoreModule {}
