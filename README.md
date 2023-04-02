# marked-smartypants

Use [smartypants](https://www.npmjs.com/package/smartypants) to easily translate plain ASCII punctuation characters into "smart" typographic punctuation HTML entities.

# Usage

```js
import { marked } from "marked";
import { markedSmartypants } from "marked-smartypants";

// or UMD script
// <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
// <script src="https://cdn.jsdelivr.net/npm/marked-smartypants/lib/index.umd.js"></script>

marked.use(markedSmartypants());

marked.parse("He said, -- \"A 'simple' sentence. . .\" --- unknown");
// <p>He said, – “A ‘simple’ sentence…” — unknown</p>
```
