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
      title: 'ინგრედიენტი',
      path: 'ingredient',
      icon: 'droplet',
    },
    {
      title: 'საჭმელი',
      path: 'meal',
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
