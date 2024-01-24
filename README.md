# Grapesjs Carousel Component

[DEMO](##)

> **Provide a live demo of your plugin**
> For a better user engagement create a simple live demo by using services like [JSFiddle](https://jsfiddle.net) [CodeSandbox](https://codesandbox.io) [CodePen](https://codepen.io) and link it here in your README (attaching a screenshot/gif will also be a plus).
> To help you in this process here below you will find the necessary HTML/CSS/JS, so it just a matter of copy-pasting on some of those services. After that delete this part and update the link above

### HTML

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-carousel-component"></script>

<div id="gjs"></div>
```

### JS

```js
const editor = grapesjs.init({
  container: "#gjs",
  height: "100%",
  fromElement: true,
  storageManager: false,
  plugins: ["grapesjs-carousel-component"],
  // very important to add below scripts to editor canvas
  canvas: {
    scripts: [
      "https://cdn.jsdelivr.net/npm/@redoc_a2k/splide@4.1.4/dist/js/splide.min.js",
    ],
    styles: [
      "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css",
    ],
  },
});
```

### CSS

```css
body,
html {
  margin: 0;
  height: 100%;
}
```

## Summary

- Plugin name: `grapesjs-carousel-component`
- Components
  - `component-id-1`
  - `component-id-2`
  - ...
- Blocks
  - `block-id-1`
  - `block-id-2`
  - ...

## Options

| Option    | Description        | Default         |
| --------- | ------------------ | --------------- |
| `option1` | Description option | `default value` |

## Download

- CDN
  - `https://unpkg.com/grapesjs-carousel-component`
- NPM
  - `npm i grapesjs-carousel-component`
- GIT
  - `git clone https://github.com/redoC-A2k/grapesjs-carousel-component.git`

## Usage

Directly in the browser

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-carousel-component.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container: "#gjs",
    // ...
    plugins: ["grapesjs-carousel-component"],
    pluginsOpts: {
      "grapesjs-carousel-component": {
        /* options */
      },
    },
    // very important to add below scripts to editor canvas
    canvas: {
      scripts: [
        "https://cdn.jsdelivr.net/npm/@redoc_a2k/splide@4.1.4/dist/js/splide.min.js",
      ],
      styles: [
        "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css",
      ],
    },
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-carousel-component';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
  // very important to add below scripts to editor canvas
  canvas: {
    scripts: [
      "https://cdn.jsdelivr.net/npm/@redoc_a2k/splide@4.1.4/dist/js/splide.min.js",
    ],
    styles: [
      "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css",
    ],
  },
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/redoC-A2k/grapesjs-carousel-component.git
$ cd grapesjs-carousel-component
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```

## License

MIT
