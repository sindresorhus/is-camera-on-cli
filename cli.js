#!/usr/bin/env node
'use strict';
const meow = require('meow');
const isCameraOn = require('is-camera-on');
const logSymbols = require('log-symbols');

meow(`
	Example
	  $ is-camera-on
	  ${logSymbols.success} Camera is on

	Exits with code 0 if on and 1 if off
`);

(async () => {
	const isOn = await isCameraOn();
	console.log(isOn ? `${logSymbols.success} Camera is on` : `${logSymbols.error} Camera is off`);
	process.exit(isOn ? 0 : 1);
})();
