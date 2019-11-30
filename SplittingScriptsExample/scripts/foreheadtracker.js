const A = require('Animation');
const S = require('Scene');
const R = require('Reactive');
const Ft = require('FaceTracking');

export const { forehead, cameraTransform } = Ft.face(0);

export const foreheadTransform = cameraTransform.applyTo(forehead.center).add(R.pack3(0,0,-53));

export const object = S.root.find('plane0');
///other things you could export

// export const driverParameters = {
//   durationMilliseconds: 2500.0,
//   loopCount: Infinity,
//   mirror: true
// };

// export const driver = A.timeDriver(driverParameters);



