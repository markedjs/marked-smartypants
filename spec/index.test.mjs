import { marked } from 'marked';
import { markedSmartypants } from '../lib/index.mjs';
import { runTests } from './run-tests.cjs';

runTests(marked, markedSmartypants);
