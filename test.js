import test from 'ava';
import execa from 'execa';

test(async t => {
	await t.throws(execa.stdout('./cli.js'), /Camera is off/);
});
