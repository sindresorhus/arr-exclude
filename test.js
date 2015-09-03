'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.same(fn(['a', 'b', 'c'], ['b']), ['a', 'c']);
	t.same(fn(null, ['a']), []);
	t.end();
});
