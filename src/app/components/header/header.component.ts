import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { UiIconComponent } from '../icon/icon.component';

@Component({
  selector: 'ui-header',
  standalone: true,
  imports: [CommonModule, UiIconComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output()
  menuClicked = new EventEmitter();

  onMenuClick() {
    this.menuClicked.emit();
  }
}
