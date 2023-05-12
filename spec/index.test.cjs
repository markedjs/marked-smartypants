const { marked } = require('marked');
const { markedSmartypants } = require('../lib/index.cjs');
const { runTests } = require('./run-tests.cjs');

runTests(marked, markedSmartypants);
