import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document: click', ['$event']) toggle(event: Event): void {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }

  constructor(private elRef: ElementRef) {}
}
