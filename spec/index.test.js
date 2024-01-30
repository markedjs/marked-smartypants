import { marked } from 'marked';
import { smartypants } from '../src/index.js';
import { runTests } from './run-tests.cjs';

runTests(marked, smartypants);
