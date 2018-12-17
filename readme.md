# Jest Handlebars
This package contains a Jest processor for handlebars files, that compiles the handlebars template and returns the render function.

## Installation
```
npm i jest-handlebars --save-dev
```

To enable the processor please add the following rule to the `transform` object in your jest configuration:

```js
"jest": {
    // ...
    transform: {
        "\\.js$": "babel-jest"
        "\\.hbs$": "jest-handlebars",
    }
    // ...
}
```

Now all imported handlebars files will get compiled by the processor and the render function is imported. You will need to add `babel-jest` for `.js` files if you previously had no transforms added as the default.

## Tests

```hbs
<!-- greetings.hbs -->
<h1>Hello {{name}}</h1>
```

```js
import greetingsHbs from './greetings.hbs';

test('Says hello to name', () => {
    const html = greetingsHbs({name: 'User'});
    expect(html).toEqual('<h1>Hello User</h1>');
});
```

## Author
Johannes Pichler

## License
MIT