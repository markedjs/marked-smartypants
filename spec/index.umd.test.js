import { marked } from 'marked';
import { runTests } from './run-tests.cjs';
await import('../lib/index.umd.js');
const { markedSmartypants } = global.markedSmartypants;

runTests(marked, markedSmartypants);
