// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.zerosource.image
// Description:drawImage with zero-sized source rectangle from image draws nothing without exception
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

promise_test(async t => {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);
  const response = await fetch('/images/red-zerowidth.svg');
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);
  ctx.drawImage(bitmap, 0, 0, 100, 50);
  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
}, "drawImage with zero-sized source rectangle from image draws nothing without exception");
done();
