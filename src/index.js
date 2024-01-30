import { smartypants as smartypantsLib } from 'smartypants';

export function smartypants({
  config = 2
} = {}) {
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
        return smartypantsLib(html, config);
      }
    }
  };
}
