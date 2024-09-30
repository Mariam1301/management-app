import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { UiDialogActions } from './actions/dialog-actions.component';
import { UiDialogComponent } from './dialog.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [UiDialogComponent, UiDialogActions],
  imports: [DialogModule, CommonModule, ButtonModule],
  exports: [UiDialogComponent, UiDialogActions],
})
export class UiDialogModule {}
