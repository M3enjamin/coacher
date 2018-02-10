import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  exports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule],
  declarations: []
})
export class SharedModule {}
