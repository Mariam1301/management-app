import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from '@angular/core';
import { UiTemplateDirective } from '../../template/ui-template.directive';

@Component({
  selector: 'ui-data-element',
  templateUrl: './data-element.component.html',
})
export class UiDataElement implements AfterContentInit {
  @Input()
  name!: string;

  @Input()
  valueField?: string;

  @ContentChild(UiTemplateDirective)
  template!: UiTemplateDirective;

  templateRef!: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.templateRef = this.template?.template;
  }
}
