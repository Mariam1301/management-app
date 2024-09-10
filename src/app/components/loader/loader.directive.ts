import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { icons } from 'feather-icons';
import { LoaderService } from '../../services/loader/loader.service';

@Directive({
  selector: '[uiLoader]',
  standalone: true,
})
export class LoaderDirective implements OnDestroy, OnInit {
  @Input()
  uiLoader!: string;

  private loaderElement!: HTMLElement | null;

  constructor(
    private readonly _elementRef: ElementRef,
    private readonly _renderer: Renderer2,
    private readonly _loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this._loaderService.loader$
      .pipe(takeUntilDestroyed())
      .subscribe(({ loaderId, showLoader }: any) => {
        if (loaderId !== this.uiLoader) return;
        showLoader ? this.showLoader() : this.hideLoader();
      });
  }

  ngOnDestroy(): void {
    this.removeLoader();
  }

  private createLoader(): void {
    this.loaderElement = this._renderer.createElement('div');
    this._renderer.setStyle(this.loaderElement, 'position', 'absolute');
    this._renderer.setStyle(this.loaderElement, 'top', '0');
    this._renderer.setStyle(this.loaderElement, 'left', '0');
    this._renderer.setStyle(this.loaderElement, 'right', '0');
    this._renderer.setStyle(this.loaderElement, 'bottom', '0');
    this._renderer.setStyle(this.loaderElement, 'display', 'flex');
    this._renderer.setStyle(this.loaderElement, 'align-items', 'center');
    this._renderer.setStyle(this.loaderElement, 'justify-content', 'center');
    this._renderer.setStyle(
      this.loaderElement,
      'background',
      'rgba(255, 255, 255, 0.8)'
    );

    this._renderer.setStyle(
      this.loaderElement,
      'background',
      'rgba(255, 255, 255, 0.8)'
    );
    const iconName = 'loader';
    const icon = icons[iconName].toSvg({
      width: 48,
      height: 48,
      color: '#e5e5e5',
      'stroke-width': 2,
    });

    const iconContainer = this._renderer.createElement('div');
    this._renderer.setStyle(iconContainer, 'display', 'inline-block');

    this._renderer.setProperty(iconContainer, 'innerHTML', icon);
    this._renderer.addClass(iconContainer, 'animate-spin');

    this._renderer.appendChild(this.loaderElement, iconContainer);
  }

  private showLoader(): void {
    this.createLoader();
    const parent = this._elementRef.nativeElement;
    const parentPosition = getComputedStyle(parent).position;
    if (parentPosition === 'static' || !parentPosition) {
      this._renderer.setStyle(parent, 'position', 'relative');
    }

    this._renderer.appendChild(parent, this.loaderElement);
  }

  private hideLoader(): void {
    if (this.loaderElement && this.loaderElement.parentNode) {
      this._renderer.removeChild(
        this.loaderElement.parentNode,
        this.loaderElement
      );
    }
  }

  private removeLoader(): void {
    this.hideLoader();
    this.loaderElement = null;
  }
}
function takeUntilDestroyed(): any {
  throw new Error('Function not implemented.');
}
