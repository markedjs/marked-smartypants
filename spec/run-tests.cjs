module.exports = {
  runTests(marked, smartypants) {
    describe('smartypants', () => {
      beforeEach(() => {
        marked.setOptions(marked.getDefaults());
      });

      test('quotes around em', () => {
        marked.use(smartypants());
        expect(marked('"**test**"')).toMatchInlineSnapshot(`
    "<p>&#8220;<strong>test</strong>&#8221;</p>
    "
    `);
      });

      test('simple sentence', () => {
        marked.use(smartypants());
        expect(marked('# He said, -- "A \'simple\' sentence. . ." --- unknown', { headerIds: false })).toMatchInlineSnapshot(`
    "<h1>He said, &#8211; &#8220;A &#8216;simple&#8217; sentence&#8230;&#8221; &#8212; unknown</h1>
    "
    `);
      });

      test('leaves codespan', () => {
        marked.use(smartypants());
        expect(marked('`He said, -- "A \'simple\' sentence. . ." --- unknown`')).toMatchInlineSnapshot(`
    "<p><code>He said, -- &quot;A &#39;simple&#39; sentence. . .&quot; --- unknown</code></p>
    "
    `);
      });

      test('leaves code block', () => {
        marked.use(smartypants());
        expect(marked('```\nHe said, -- "A \'simple\' sentence. . ." --- unknown\n```')).toMatchInlineSnapshot(`
    "<pre><code>He said, -- &quot;A &#39;simple&#39; sentence. . .&quot; --- unknown
    </code></pre>
    "
    `);
      });

      test('supports config', () => {
        marked.use(smartypants({
          config: 1
        }));
        expect(marked('# He said, -- "A \'simple\' sentence. . ." --- unknown', { headerIds: false })).toMatchInlineSnapshot(`
    "<h1>He said, &#8212; &#8220;A &#8216;simple&#8217; sentence&#8230;&#8221; &#8212;- unknown</h1>
    "
    `);
      });
    });
  }
};
