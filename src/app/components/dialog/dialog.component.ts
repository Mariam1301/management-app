import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'ui-dialog',
  templateUrl: './dialog.component.html',
})
export class UiDialogComponent implements OnInit {
  @Input()
  header!: string;

  @Input({ required: true })
  visible!: boolean;

  @Output()
  visibleChange = new EventEmitter();

  position: any = 'center';

  ngOnInit() {
    this.position = window.innerWidth < 640 ? 'bottom' : 'center';
  }

  handleVisibleChange(event: boolean) {
    this.visibleChange.emit(event);
  }
}
