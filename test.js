import test from 'ava';
import m from '.';

test('fetch url', async t => {
	const links = m('http://mangalifewin.takeshobo.co.jp/rensai/popute2/');
	t.true(Array.isArray(links));
});
