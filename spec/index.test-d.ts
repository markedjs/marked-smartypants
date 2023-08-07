import { marked } from 'marked';
import { markedSmartypants } from '../src/index';

marked.use(markedSmartypants());

marked.parse('He said, -- "A \'simple\' sentence. . ." --- unknown');
