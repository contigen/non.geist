# non.geist

A package to use Vercelʼs typefaces, [Geist](https://vercel.com/font)－ Sans & Mono, for non-Next.js projects.

## The Why

I tried to use [geist-font](https://www.npmjs.com/package/geist) in a React project, it errored out. I like the flexibility a package offers － not having to manage assets (or dependencies); I take it a lot of devs prefer this, maybe.<br/>Now, itʼs not even a hassle to `@font-face` a font (or typeface), itʼs even easier with [variable fonts](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts). Regardless, itʼs a solid nice-to-have.

## Installation

```bash
npm i non.geis
```

```bash
yarn add non.geis
```

```bash
pnpm i non.geis
```

```bash
bun install non.geis
```

## Usage

The default import provides **variable fonts**.

In your entry .js(x) or .ts(x) file, you can import like so:

```js
import 'non.geis'
```

or do it in CSS directly

```css
@import url('non.geis');

body {
  font-family: 'Geist Variable';
}
/* For Geist Mono */
font-family: 'Geist Mono Variable';
```

Variable fonts all the way, but if you need Geist sans individual weights:

```bash
import 'non.geis/font-faces/Geist-Black.css'
import 'non.geis/font-faces/Geist-Bold.css'
import 'non.geis/font-faces/Geist-Light.css'
import 'non.geis/font-faces/Geist-Medium.css'
import 'non.geis/font-faces/Geist-Regular.css'
import 'non.geis/font-faces/Geist-SemiBold.css'
import 'non.geis/font-faces/Geist-Thin.css'
import 'non.geis/font-faces/Geist-UltraBlack.css'
import 'non.geis/font-faces/Geist-UltraLight.css'
```

For Geist Mono:

```bash
import 'non.geis/font-faces/GeistMono-Black.css'
import 'non.geis/font-faces/GeistMono-Bold.css'
import 'non.geis/font-faces/GeistMono-Light.css'
import 'non.geis/font-faces/GeistMono-Medium.css'
import 'non.geis/font-faces/GeistMono-Regular.css'
import 'non.geis/font-faces/GeistMono-SemiBold.css'
import 'non.geis/font-faces/GeistMono-Thin.css'
import 'non.geis/font-faces/GeistMono-UltraBlack.css'
import 'non.geis/font-faces/Geist-MonoUltraLight.css'
```

`font-family` values for individual weights:

```css
@import url('non.geis/font-faces/Geist-Bold.css');

font-family: 'Geist-Bold';
```

## Miscellaneous

The `@font-face` `src` property finds a local version of the typefaces first, so no extra files are imported for users who have the typefaces installed.

To explore the typefaces stylistic sets, use CSS's `font-feature-settings` property.

## License

[License](https://github.com/vercel/geist-font/blob/main/LICENSE.TXT)

## Credits

Thank you [Vercel](https://vercel.com/home)

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
