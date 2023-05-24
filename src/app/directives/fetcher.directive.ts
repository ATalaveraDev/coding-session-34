import { Directive, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[fetcher]'
})
export class FetcherDirective implements OnInit {
  @Input() prefecthMode: ('load' | 'hover')[] = ['hover'];
  @Output() prefetch = new EventEmitter<void>();

  loaded = false;

  constructor() { }

  ngOnInit(): void {
    if (this.prefecthMode.includes('load')) {
      this.prefetchData();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.loaded && this.prefecthMode.includes('hover')) {
      this.loaded = true;
      this.prefetchData();
    }
  }

  prefetchData(): void {
    this.prefetch.emit();
  }
}
