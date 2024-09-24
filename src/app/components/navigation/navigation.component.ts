import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiIconComponent } from '../icon/icon.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, UiIconComponent],
  selector: 'ui-navigation',
  templateUrl: './navigation.component.html',
})
export class UiNavigationComponent {
  @Input({ required: true })
  navigation!: NavigationModel[];

  @Output()
  navigationClicked = new EventEmitter();
}

export interface NavigationModel {
  title: string;
  path: string;
  icon?: string;
  subItems?: NavigationModel[];
}
