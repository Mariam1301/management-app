import { Component, Input } from '@angular/core';
import { UiIconComponent } from '../icon/icon.component';

@Component({
  selector: 'ui-icon-button',
  templateUrl: './icon-button.component.html',
  standalone: true,
  imports: [UiIconComponent],
})
export class UiIconButtonComponent {
  @Input({ required: true })
  iconName!: string;

  @Input()
  iconSize = 12;
}
