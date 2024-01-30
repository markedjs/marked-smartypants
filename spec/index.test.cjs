const { marked } = require('marked');
const { smartypants } = require('../lib/index.cjs');
const { runTests } = require('./run-tests.cjs');

runTests(marked, smartypants);
