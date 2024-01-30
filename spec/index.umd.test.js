import { marked } from 'marked';
import { runTests } from './run-tests.cjs';
await import('../lib/index.umd.js');
const { smartypants } = global.smartypants;

runTests(marked, smartypants);
