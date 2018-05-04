import { LayoutStoreService } from '@app/core/store/layout/layout-store.service';
import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cchr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  constructor(private layoutStoreService: LayoutStoreService) {}

  openNewDrillForm() {
    this.layoutStoreService.dispatchOpenNewDrillForm();
  }
}
