import test from 'ava';
import m from '.';

test('fetch url', async t => {
	const links = await m('http://mangalifewin.takeshobo.co.jp/rensai/popute2/');
	t.true(Array.isArray(links));
});

test('get image', async t => {
	const links = await m('http://mangalifewin.takeshobo.co.jp/rensai/popute2/');
	const img = await m.getImage(links[0]);
	t.true(Buffer.isBuffer(img));
});
