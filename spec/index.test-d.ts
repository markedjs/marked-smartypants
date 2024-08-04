import { marked } from 'marked';
import { markedSmartypants } from '../src/index';

marked.use(markedSmartypants());
marked.use(markedSmartypants({}));
marked.use(markedSmartypants({ config: '1' }));
marked.use(markedSmartypants({ config: 1 }));

marked.parse("He said, -- \"A 'simple' sentence. . .\" --- unknown");
