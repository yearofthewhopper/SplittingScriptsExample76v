const A = require('Animation');
const S = require('Scene');
const R = require('Reactive');

var Diagnostics = require('Diagnostics');

const { foreheadTransform, object } = require("./foreheadtracker.js");

const plane = object;

plane.transform.x = foreheadTransform.x;
plane.transform.y = R.add(foreheadTransform.y, 0.01);

Diagnostics.watch('foreheadTransform.x', foreheadTransform.x);
Diagnostics.watch('foreheadTransform.y', foreheadTransform.y);
Diagnostics.watch('foreheadTransform.z', foreheadTransform.z);

