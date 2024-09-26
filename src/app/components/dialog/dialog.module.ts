import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { UiDialogActions } from './actions/dialog-actions.component';
import { UiDialogComponent } from './dialog.component';

@NgModule({
  declarations: [UiDialogComponent, UiDialogActions],
  imports: [DialogModule, CommonModule],
  exports: [UiDialogComponent, UiDialogActions],
})
export class UiDialogModule {}
