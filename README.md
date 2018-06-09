<img width="927" alt="screen shot 2018-06-09 at 22 55 21" src="https://user-images.githubusercontent.com/1175837/41196446-5103d7cc-6c38-11e8-828b-7f35264544f3.png">

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

### Bemgular operates in ngOnInit

So it won't recalculate the classes at every single change detection tick. Performance win!


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

This is how Angular converts your CSS to scope it

```html
<div _ng-content-xxx class="container">
  <div _ng-content-xxx class="title">
  </div>
</div>
```

And this is how it would work with a flat, performing BEM class

```html
<div class="xxx__container">
  <div class="xxx__title">
  </div>
</div>
```

Flat class are quite more performing than Angular's scoping via attributes. It's because of the way in which CSS is computed by the browser: it starts always from right to left, from more specific to less specific selector.

So, when you style

```css
_ng-content-xxx.container {
  background-color: white;
}
```

The browser will first pick all elements that match the selector `.container`, and then filter out the ones that are not attached to a div containing the attribute `_ng-content-xxx`.

You can measure the difference yourself: run the following ruby script, that generates two different HTML and CSS files

```ruby
def generate_htmls
  angular_style_css = File.open('angular-stile.css', 'w')
  bem_style_css = File.open('bem-style.css', 'w')
  angular_style_html = File.open('angular-stile.html', 'w')
  bem_style_html = File.open('bem-style.html', 'w')
  (0...10000).to_a.each do |index|
    randomised = (0...15).map { ('a'..'z').to_a[rand(26)] }.join
    [ 1, 2, 3, 4, 5, 6 ].each do |sub_index|
      angular_style_css.write "\nh1[#{randomised}].selector#{sub_index} {\n  background-color: rgb(#{rand(200)},#{rand(200)},#{rand(200)});\n  width: 100px;\n  height: 100px;\n  float: left; display: block\n}\n"
      angular_style_html.write "<h1 #{randomised} class=\"selector#{sub_index}\">Content</h1>"
      bem_style_css.write "\n.#{randomised}__#{sub_index} {\n  background-color: rgb(#{rand(200)},#{rand(200)},#{rand(200)});\n  width: 100px;\n height: 100px;\n  float: left; display: block\n}\n"
      bem_style_html.write "<h1 class=\"#{randomised}__#{sub_index}\">Content</h1>"
    end
    puts index
  end
  angular_style_css.close
  angular_style_html.close
  bem_style_css.close
  bem_style_html.close
end
```

Now, open with a text editor the two HTML files, and require the corresponding CSS in it. Then, open both using your browser and you'll see the difference.

The file `bem-style.html` takes 2-5 seconds to render. The file `angular-style.html` takes a couple of minutes instead.

Of course, your application doesn't contain 10.000 elements that use the same class, but if you can improve performance it's better to do it, even for small details.




