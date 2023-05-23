import { Directive, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

declare var navigator: any;

@Directive({
  selector: '[fetcher]'
})
export class FetcherDirective implements OnInit {
  @Input() prefetchMode: ('load' | 'hover')[] = ['hover'];
  @Output() fetcher = new EventEmitter<void>();

  loaded = false;

  constructor() { }

  ngOnInit(): void {
    if (this.prefetchMode.includes('load')) {
      this.prefetchData();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.loaded && this.prefetchMode.includes('hover')) {
      this.loaded = true;
      this.prefetchData();
    }
  }

  prefetchData(): void {
    if (navigator.connection.saveData) {
      return undefined;
    }
    this.fetcher.emit();
  }
}
