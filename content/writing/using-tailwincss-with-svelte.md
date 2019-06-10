---
title: Using TailwindCSS with SvelteJS
date: '2019-06-01T22:40:32.169Z'
---

If you haven't check [TailwindCSS](https://tailwindcss.com), you might want to. I don't want to repeat the awesomeness here 🤪

TL;DR. Full implementation can be found on my Github [muhajirdev/svelte-tailwind-template](https://github.com/muhajirdev/svelte-tailwind-template)

## Get Svelte default template

```bash
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
```

## Install dependencies

```bash
npm install --save-dev tailwindcss postcss-import @fullhuman/postcss-purgecss postcss rollup-plugin-postcss autoprefixer
```

## Setup `rollup-plugin-postcss`

```javascript
// rollup.config.js

...
import postcss from 'rollup-plugin-postcss'
...

export default {
    plugins: [
         postcss({extract: true}),
         svelte(...),
         ...
    ]
}
```

Here's the end result

```javascript
//rollup.config.js

import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/bundle.js'
	},
	plugins: [
		postcss({
			extract: true
		}),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write('public/bundle.css');
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({ browser: true }),
		commonjs(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
```

## Create `postcss.config.js`

```javascript
const production = !process.env.ROLLUP_WATCH;
const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    require("postcss-import")(),
    require("tailwindcss"),
    require("autoprefixer"),
    // Only purge css on production
    production &&
      purgecss({
        content: ["./**/*.html", "./**/*.svelte"],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
  ]
};
```


## Create `src/main.css`

```css
@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

## Import `src/main.css` in `src/main.js`

```javascript
// src/main.js
import App from "./App.svelte";
import "./main.css";

const app = new App({
  target: document.body,
  props: {
    name: "world"
  }
});

export default app;
```

## Optional

Remove `public/global.css`
And also remove

```
 <link rel="stylesheet" href="global.css" />
```
from `index.html` as we already have normalize.css from `tailwind`

And finally, now you can just write tailwind class 

Try it `<div class="bg-black">test</div>` should give you a div with black background.

Any feedback would be very appreciated :)