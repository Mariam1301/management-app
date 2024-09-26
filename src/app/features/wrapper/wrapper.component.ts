import { Component } from '@angular/core';
import { NavigationModel } from '../../components/navigation/navigation.component';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
})
export class WrapperComponent {
  isMenuOpen = false;

  navigationArray: NavigationModel[] = [
    {
      title: 'ინგრედიენტები',
      path: 'ingredients',
      icon: 'droplet',
    },
    {
      title: 'კერძები',
      path: 'dishes',
      icon: 'coffee',
    },
    {
      title: 'გაყიდვები',
      path: 'sales',
      icon: 'trending-up',
    },
  ];

  toggleIsMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
