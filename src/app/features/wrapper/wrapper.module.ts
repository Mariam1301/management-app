import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UiNavigationComponent } from '../../components/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { WrapperRoutingModule } from './wrapper-routing.module';
import { SidebarModule } from 'primeng/sidebar';
import { UiIconComponent } from '../../components/icon/icon.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [WrapperComponent],
  imports: [
    ToastModule,
    UiIconComponent,
    WrapperRoutingModule,
    CommonModule,
    HeaderComponent,
    UiNavigationComponent,
    RouterModule,
    SidebarModule,
  ],
  exports: [WrapperComponent],
})
export class WrapperModule {}
