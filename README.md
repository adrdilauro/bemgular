# BEMGULAR!

![comic-explosion-bubble-1-1024x588](https://user-images.githubusercontent.com/1175837/41196426-d585266e-6c37-11e8-82a0-f6f7d40897b4.png)

Lightweight, easy to use BEM helper.

### (1) Import and re-export Bemgular in your `SharedModule`

```typescript
import { NgModule } from '@angular/core';
import { BemgularModule } from 'bemgular';

@NgModule({
  imports: [
    ...,
    BemgularModule,
  ],
  exports: [
    BemgularModule,
  ],
})
export class SharedModule {}

```

### (2) Add the two Bemgular tokens to the list of providers where you need to scope your CSS

In a lazy loaded module...

```typescript
import { SharedModule } from './../shared.module';
import { BEMGULAR_BLOCK } from 'bemgular';

@NgModule({
  imports: [
    SharedModule,
  ],
  providers: [
    { provide: BEMGULAR_BLOCK, useValue: 'block' },
  ],
})
export class LazyLoadedModule {}
```

...or in a component

```typescript
import { Component } from '@angular/core';
import { BEMGULAR_MODIFIERS } from 'bemgular';

@Component({
  selector: 'my-component',
  providers: [
    { provide: BEMGULAR_MODIFIERS, useValue: [ 'modifier-1', 'modifier-2' ] },
  ],
})
export class MyComponent {}
```

### (3) Use it in a simple, declarative directive that does all the heavy lifting for you

```html
<div bem="container">
</div>
```

becomes

```html
<div class="block__container block--modifier-1__container block--modifier2__container">
</div>
```

## How does it work?

Bemgular takes advantage of Angular's **inheritance of injectors**: when you inject, in a lazy loaded module or in a component, one of the tokens

- `BEMGULAR_BLOCK`
- `BEMGULAR_MODIFIER`

the value you injected will apply automatically to that component / module and all its children. You can easily tune which components are contained in which block, and which modifiers apply to them, simply by letting them inherit the parent block or overriding it.

```html
<!-- BEMGULAR_BLOCK = 'root-component'; BEMGULAR_MODIFIERS = [ 'active' ] -->
<div class="root-component__container root-component--active__container">
  <!-- BEMGULAR_BLOCK = 'first-component'; BEMGULAR_MODIFIERS inherits from parent injector -->
  <div class="first-component__container first-component--active__container">
    <!-- BEMGULAR_BLOCK = inherits from parent injector; BEMGULAR_MODIFIERS = [] -->
    <div class="first-component__subtitle">
    </div>
  </div>
</div>
```

### Don't inject tokens in modules, unless they are lazy loaded

If you do it, they will be attached to the root injector and override your BEM settings everywhere

### Bonus feature: add element's modifiers too

```html
<div bem="container,red,thin">
</div>
```

becomes

```html
<div class="some-block__container some-block__container--red some-block__container--thin">
</div>
```

You can add as many elements modifiers as you want; just add them separated by comma after the element.

## Angular's automatic CSS scoping is slow in rendering; stick to the safe solution, use Bemgular!







