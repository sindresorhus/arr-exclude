import test from 'ava';
import fn from './';

test(t => {
	t.same(fn(['a', 'b', 'c'], ['b']), ['a', 'c']);
	t.same(fn(null, ['a']), []);
	t.end();
});
