import test from 'ava';
import m from './';

test(t => {
	t.same(m(['a', 'b', 'c'], ['b']), ['a', 'c']);
	t.same(m(null, ['a']), []);
});
