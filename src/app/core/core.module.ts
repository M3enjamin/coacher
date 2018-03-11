import { LayoutStoreService } from './store/layout/layout-store.service';
import { AppStoreModule } from './store/app-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from '@app/core/store/layout/layout.reducer';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    CommonModule,
    AppStoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  exports: [],
  declarations: [],
  providers: [LayoutStoreService]
})
export class CoreModule { }
