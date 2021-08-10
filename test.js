import test from 'ava';
import arrayExclude from './index.js';

test('main', t => {
	t.deepEqual(arrayExclude(['a', 'b', 'c'], ['b']), ['a', 'c']);
	t.deepEqual(arrayExclude([], ['a']), []);
	t.deepEqual(arrayExclude(['a'], []), ['a']);
});
