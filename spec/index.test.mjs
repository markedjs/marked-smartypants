import { marked } from 'marked';
import { smartypants } from '../lib/index.mjs';
import { runTests } from './run-tests.cjs';

runTests(marked, smartypants);
