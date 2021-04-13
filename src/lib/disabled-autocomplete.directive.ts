import { Directive, ElementRef, OnInit } from '@angular/core';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[disabledAutocomplete]'})
export class DisabledAutocompleteDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  public ngOnInit(): void {
    const input = (this.elementRef?.nativeElement as HTMLInputElement);
    input.onfocus = () => this.onFocus(input);
    input.setAttribute('readonly', 'readonly');
    input.setAttribute('autocomplete', 'new-something');
    if (!input.hasAttribute('autocapitalize')) {
      input.setAttribute('autocapitalize', 'none');
    }
    if (!input.hasAttribute('spellcheck')) {
      input.setAttribute('spellcheck', 'off');
    }
    if (!input.hasAttribute('autocorrect')) {
      input.setAttribute('autocorrect', 'off');
    }
    if (!input.id) {
      input.setAttribute('id', Math.random().toString());
    }
  }

  public onFocus(input: HTMLInputElement): any {
    if (input.hasAttribute('readonly')) {
      input.removeAttribute('readonly');
      // fix for mobile Safari to show virtual keyboard
      input.blur();
      input.focus();
    }
  }
}
