import { marked } from 'marked';
import { markedSmartypants } from '../src/index.js';
import { runTests } from './run-tests.cjs';

runTests(marked, markedSmartypants);
