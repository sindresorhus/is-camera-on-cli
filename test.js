import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	await t.throwsAsync(execa('./cli.js'), {message: /Camera is off/});
});
