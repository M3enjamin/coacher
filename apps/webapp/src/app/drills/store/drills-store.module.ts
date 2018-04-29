import { DrillsEffects } from './drills.effects';
import { DrillsStoreService } from './drills-store.service';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from '@app/drills/store/drills.reducer';

@NgModule({
  imports: [StoreModule.forFeature('drills', reducer), EffectsModule.forFeature([DrillsEffects])],
  exports: [StoreModule, EffectsModule],
  providers: [DrillsStoreService]
})
export class DrillsStoreModule {}
