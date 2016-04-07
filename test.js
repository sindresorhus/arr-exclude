import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m(['a', 'b', 'c'], ['b']), ['a', 'c']);
	t.deepEqual(m(null, ['a']), []);
});
