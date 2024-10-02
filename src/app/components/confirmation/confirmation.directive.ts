import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Directive({
  selector: '[uiConfirm]',
  standalone: true,
})
export class UiConfirmationDirective {
  @Input()
  type: 'delete' | 'save' = 'delete';

  @Output() confirm = new EventEmitter<void>();
  @Output() reject = new EventEmitter<void>();

  constructor(private confirmationService: ConfirmationService) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopImmediatePropagation();
    const basicConfig =
      this.type === 'delete'
        ? {
            target: event.target as EventTarget,
            message: 'დარწმუნებული ხართ რომ გსურთ ამ ჩანაწერის წაშლა?',
            header: 'წაშლა',
            acceptButtonStyleClass: 'p-button-danger p-button-text',
            rejectButtonStyleClass: 'p-button-text p-button-text',
            acceptIcon: 'none',
            rejectIcon: 'none',
            acceptLabel: 'წაშლა',
            rejectLabel: 'გაუქმება',
          }
        : {
            target: event.target as EventTarget,
            message: 'დარწმუნებული ხართ რომ გსურთ გაგრძელება?',
            header: 'დადასტურება',
            icon: 'pi pi-exclamation-triangle',
            acceptIcon: 'none',
            rejectIcon: 'none',
            rejectButtonStyleClass: 'p-button-text',
          };

    this.confirmationService.confirm({
      ...basicConfig,
      accept: () => this.confirm.emit(),
      reject: () => this.reject.emit(),
    });

    event.preventDefault();
  }
}
