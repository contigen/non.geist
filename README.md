# [non.geist](https://www.npmjs.com/package/non.geist)

![Word cloud forming the text 'non-geist' in ASCII with a blue gradient effect ](./images/1.png)

A package to use Vercelʼs typefaces, [Geist](https://vercel.com/font)－ Sans & Mono (**v 1.6**), for non-Next.js projects.

## The Why

I tried to use [Geist](https://www.npmjs.com/package/geist) in a React project, it errored out (it depends on `next/font`). I like the flexibility a package offers － not having to manage assets (or dependencies); I take it a lot of devs prefer this, maybe.<br/>Now, itʼs not even a hassle to `@font-face` a font (or typeface), itʼs even easier with [variable fonts](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts). Regardless, itʼs a solid nice-to-have (package).

## Installation

```bash
npm i non.geist
```

```bash
yarn add non.geist
```

```bash
pnpm i non.geist
```

```bash
bun add non.geist
```

# v2.0.0

**Breaking change**: Renamed the font-family from Geist Variable → Geist-Variable.

All CSS using the old name must be updated, e.g.:

```diff
- font-family: "Geist Variable";
+ font-family: "Geist-Variable";
```

```diff
- font-family: "Geist Mono Variable";
+ font-family: "GeistMono-Variable";
```

<br/>

**Italic typeface addition**: Geist 1.5.1 introduced standalone italic font files. See [PR](https://github.com/contigen/non.geist/pull/6), and _Usage_ below.

## Usage

The default import provides **variable fonts**.

In your entry .js(x) or .ts(x) file, you can import like so:

```js
import 'non.geist' // OR
import 'non.geist/italic'

// For Geist Mono
import 'non.geist/mono' // OR
import 'non.geist/mono-italic'
```

then,

```css
body {
  font-family: 'Geist-Variable';

  /* For Geist Mono */
  font-family: 'GeistMono-Variable';
}
```

or do it in CSS directly

```css
@import url('non.geist');

body {
  font-family: 'Geist-Variable';
}
/* For Geist Mono */

@import url('non.geist/mono');
font-family: 'GeistMono-Variable';
```

Variable fonts all the way, but if you need Geist sans individual weights:

```js
import 'non.geist/font-faces/Geist-Black.css'
/* For Italic equivalent: *-Italic.css */
import 'non.geist/font-faces/Geist-BlackItalic.css'
import 'non.geist/font-faces/Geist-Bold.css'
import 'non.geist/font-faces/Geist-Light.css'
import 'non.geist/font-faces/Geist-Medium.css'
import 'non.geist/font-faces/Geist-Regular.css'
import 'non.geist/font-faces/Geist-SemiBold.css'
import 'non.geist/font-faces/Geist-Thin.css'
import 'non.geist/font-faces/Geist-UltraBlack.css'
import 'non.geist/font-faces/Geist-UltraLight.css'
```

For Geist Mono:

```js
import 'non.geist/font-faces/GeistMono-Black.css'
/* For Italic equivalent: *-Italic.css */
import 'non.geist/font-faces/GeistMono-BlackItalic.css'
import 'non.geist/font-faces/GeistMono-Bold.css'
import 'non.geist/font-faces/GeistMono-Light.css'
import 'non.geist/font-faces/GeistMono-Medium.css'
import 'non.geist/font-faces/GeistMono-Regular.css'
import 'non.geist/font-faces/GeistMono-SemiBold.css'
import 'non.geist/font-faces/GeistMono-Thin.css'
import 'non.geist/font-faces/GeistMono-UltraBlack.css'
import 'non.geist/font-faces/Geist-MonoUltraLight.css'
```

`font-family` values for individual weights:

```css
@import url('non.geist/font-faces/Geist-Bold.css');

font-family: 'Geist-Bold';

/* Geist Mono */
@import url('non.geist/font-faces/GeistMono-Bold.css');

font-family: 'GeistMono-Bold';
```

<br/>

**For italic font files**:

```css
@import url('non.geist/font-faces/Geist-BoldItalic.css');

font-family: 'Geist-BoldItalic';

/* Geist Mono */
@import url('non.geist/font-faces/GeistMono-BoldItalic.css');

font-family: 'GeistMono-BoldItalic';
```

## Miscellaneous

To explore the typefaces' stylistic sets, use CSS's `font-feature-settings` property.

Try [wakamaifondue](https://wakamaifondue.com/) for typeface exploration.

## License

[License](https://github.com/vercel/geist-font/blob/main/LICENSE.TXT)

## Credits

Thank you [Vercel](https://vercel.com/home) & contributors (via PRs & Issues)

---

### Development

To install dependencies:

```bash
bun install
```

To run:

```bash
cd ./scripts
bun run index.ts
```

This project was created using `bun init` in bun v1.0.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

![Word cloud forming the text 'non-geist' in ASCII with a red-blue gradient effect ](./images/2.png)
