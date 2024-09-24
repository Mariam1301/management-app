import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import feather from 'feather-icons';

@Component({
  selector: 'ui-icon',
  template: `<i></i>`,
  standalone: true,
})
export class UiIconComponent implements OnChanges, OnInit {
  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number = 2;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.renderIcon();
  }

  ngOnChanges(): void {
    this.renderIcon();
  }

  private renderIcon() {
    if (this.name) {
      const icon = (feather.icons as any)[this.name]?.toSvg({
        width: this.size,
        height: this.size,
        color: this.color,
        'stroke-width': this.strokeWidth,
      });
      this.el.nativeElement.innerHTML = icon;
    }
  }
}
