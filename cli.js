#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import isCameraOn from 'is-camera-on';
import logSymbols from 'log-symbols';

meow(`
	Example
	  $ is-camera-on
	  ${logSymbols.success} Camera is on

	Exits with code 0 if on and 1 if off
`, {
	importMeta: import.meta,
});

const isOn = await isCameraOn();
console.log(isOn ? `${logSymbols.success} Camera is on` : `${logSymbols.error} Camera is off`);
process.exit(isOn ? 0 : 1);
