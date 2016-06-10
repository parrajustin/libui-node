// import test from 'ava';
// import libui from './index';

const libui = require('./index');

libui.Ui.init();
const win = new libui.UiWindow('Test window');

/*
test('newWindow - throw if too few arguments', t => {
	libui.Ui.init();
	const err = t.throws(() => new libui.UiWindow('Test window'));
	t.true(err instanceof Error);
	t.is(err.message, 'Wrong number of arguments');
});
*/

/*
test.skip('newWindow - throw if width is not a number', t => {
	const err = t.throws(() => new libui.UiWindow('Test window', 'some text', 600, true));
	t.true(err instanceof Error);
	t.is(err.message, 'width should be a number');
});
*/
