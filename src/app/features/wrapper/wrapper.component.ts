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
      title: 'ნედლეული',
      path: 'ingredients',
      icon: 'droplet',
    },
    {
      title: 'პროდუქტები',
      path: 'dishes',
      icon: 'coffee',
    },
    {
      title: 'გაყიდვები',
      path: 'sales',
      icon: 'dollar-sign',
    },
    {
      title: 'შესყიდვები',
      path: 'purchases',
      icon: 'trending-up',
    },
  ];

  toggleIsMenuOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
