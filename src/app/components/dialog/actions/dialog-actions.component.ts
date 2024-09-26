import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  templateUrl: './dialog-actions.component.html',
  selector: 'ui-dialog-actions',
})
export class UiDialogActions {
  @Input()
  disabled!: boolean | null;

  @Output()
  saveClicked = new EventEmitter();
}
