import { smartypants } from 'smartypants';

export function markedSmartypants() {
  return {
    tokenizer: {
      inlineText(src) {
        // don't escape inlineText
        const cap = this.rules.inline.text.exec(src);

        /* istanbul ignore next */
        if (!cap) {
          // should never happen
          return;
        }

        return {
          type: 'text',
          raw: cap[0],
          text: cap[0]
        };
      }
    },
    hooks: {
      postprocess(html) {
        return smartypants(html, 2);
      }
    }
  };
}
