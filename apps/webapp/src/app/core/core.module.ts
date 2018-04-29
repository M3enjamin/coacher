import { AuthGuard } from '@core/services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { LayoutStoreService } from './store/layout/layout-store.service';
import { AppStoreModule } from './store/app-store.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '@env/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [
    CommonModule,
    AppStoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  exports: [],
  declarations: [],
  providers: [LayoutStoreService, AuthService, AuthGuard]
})
export class CoreModule {}
