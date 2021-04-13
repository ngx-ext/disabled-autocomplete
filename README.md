# @ngx-ext/disabled-autocomplete

> **Directive** for inputs disabling browser's auto-complete/auto-fill functionalities. Aims to handle the newest versions of Chrome, Edge, Opera, Safari and Firefox.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6, but should work with every Angular version.

## Getting started

> Just run: `ng add @ngx-ext/disabled-autocomplete`  

Or manually: `npm install @ngx-ext/disabled-autocomplete`, and then import `DisabledAutocompleteModule` to your AppModule or wherever needed.

## Usage

```angular2html
<input type="search" name="search" disabledAutocomplete />
```

### How it works?
* Makes the input `readonly` until focused (with fix for mobile Safari)
* Sets random id (if no id defined already)
* Sets `autocomplete="new-password"`
* Sets `autocapitalize="none"` (only if not set)
* Sets `spellcheck="off"` (only if not set)
* Sets `autocorrect="off"` (only if not set)
