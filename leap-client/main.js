const { app, BrowserWindow } = require('electron');
const path = require('path');
const Leap = require('leapjs');

const FRONTEND_URL = "http://localhost" //URL where the frontend is served
const FRONTEND_PORT = "4200"            //Port where the frontend is served

/***********************************************/

GesturesStr = [
  "SWIPE_LEFT",
  "SWIPE_UP",
  "SWIPE_DOWN",
  "SWIPE_RIGHT",
  "CIRCLE_CLOCKWISE",
  "CIRCLE_COUNTERCLOCKWISE",
  "PINCH",
];

/*****************************/

timeoutAfterRecognition = 3000; //ms change according to how much time you need to wait from one gesture to the next
framesForGesture = 3;

/*****************************/

var controllerOptions = { enableGestures: true };
gestureRecognized = null;

/*****************************/
var xPos = 0;
var yPos = 0;

function leapLoop(frame, width, height) {

  if (frame.pointables && frame.pointables.length == 0)
    return null;

  // Currently using palm as cursor. Use pointables[0].tipPosition if you want to use your index finger as cursor
  var normalizedPosition = frame.interactionBox.normalizePoint(frame.hands[0].palmPosition, true);

  if (normalizedPosition[2] < 0.2 || normalizedPosition[2] > 0.8)
    return null;

  findPinch(frame);

  xPos = Math.trunc(normalizedPosition[0] * width);
  yPos = Math.trunc(height - normalizedPosition[1] * height);

  return {
    xPos: Math.trunc(normalizedPosition[0] * width),
    yPos: Math.trunc(height - normalizedPosition[1] * height)
  };
}

/*****************************/

gestureCounter = 0;
currGesture = "";

/**
 * This function can be edited in order to implement more advanced gesture handling features
 *
 */
function findGesture(frame) {
  var gesture = getGesture(frame);
  if (!gesture) {
    currGesture = null;
    return null;
  }
  var foundGesture = null;
  switch (gesture.type) {
    case 'swipe':
      foundGesture = swipeHander(gesture);
      break;
    case 'circle':
      foundGesture = circleHander(frame, gesture);
      break;
    default:
      // you can add more basic gestures here
      return null;
  }
  gestureRecognized = GesturesStr[foundGesture];
  return checkAndReturnGesture(foundGesture);
}

/*****************************/

// implemented in different function than the rest of gestures, because it is not regarded as gesture for leap
function findPinch(frame) {
  if (frame.data.hands[0].pinchStrength === 1) { //depends on the accuracy you want. Max and more accurate is 1!
    gestureRecognized = GesturesStr[GesturesStr.findIndex((e) => e === "PINCH")];
  }

}

/*****************************/

function checkAndReturnGesture(foundGesture) {
  if (gestureCounter == -1)
    return;

  if (currGesture == foundGesture) {
    gestureCounter++
  } else {
    currGesture = foundGesture;
    gestureCounter = 0;
  }

  if (gestureCounter == framesForGesture) {
    resetGestures();
    return foundGesture;
  }

  return null;
}

/*****************************/

function resetGestures() {
  currGesture = null;
  gestureCounter = -1;

  setTimeout(() => {
    gestureCounter = 0;
  }, timeoutAfterRecognition);
}

/*****************************/

function getGesture(frame) {
  if (!frame.valid || frame.data.gestures.length == 0)
    return null;

  var gestures = frame.data.gestures;

  var gesture = gestures[0];
  if (!gesture)
    return null;
  return gesture;
}

/*****************************/

function swipeHander(gesture) {

  if (Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1])) { // swipe gestures recognize hand direction
    if (gesture.direction[0] > 0)
      return GesturesStr.findIndex((e) => e === "SWIPE_RIGHT");
    return GesturesStr.findIndex((e) => e === "SWIPE_LEFT");
  }
  if (gesture.direction[1] > 0)
    return GesturesStr.findIndex((e) => e === "SWIPE_UP");
  return GesturesStr.findIndex((e) => e === "SWIPE_DOWN");

}

/*****************************/

function circleHander(frame, gesture) {
  if (!gesture || !gesture.pointableIds)
    return null;
  var pointableID = gesture.pointableIds[0]; // circle gestures recognize finger movement
  var direction = frame.pointable(pointableID).direction;
  var dotProduct = Leap.vec3.dot(direction, gesture.normal);

  if (dotProduct > 0)
    return GesturesStr.findIndex((e) => e === "CIRCLE_CLOCKWISE");
  return GesturesStr.findIndex((e) => e === "CIRCLE_COUNTERCLOCKWISE");
}

/*****************************/

function createWindow() {
  const win = new BrowserWindow(
    {
      width: 600,
      height: 500,
      webPreferences: {
        preload: path.join(app.getAppPath(), '/preload.js')
      }
    }
  );

  win.loadURL(`${FRONTEND_URL}:${FRONTEND_PORT}`);

  win.webContents.on('did-finish-load', () => {

    Leap.loop(controllerOptions, (frame) => {
      let cursor = leapLoop(frame, win.getBounds().width, win.getBounds().height);
      var gesture = findGesture(frame);

      if (gesture != null) {
        //console.log("gestrure", gesture)
        win.webContents.send("gesture", gesture);

        if (gesture === 4 ) { //specifying which gestures can work as a "click"
          win.webContents.sendInputEvent(
            {
              type: 'mouseDown', x: xPos,
              y: yPos, button: 'left', clickCount: 1
            });
          
        }
        if (gesture === 5) { //specifying which gestures can work as a "click"
          
          win.webContents.sendInputEvent(
            {
              type: 'mouseUp', x: xPos,
              y: yPos, button: 'left', clickCount: 1
            });
        }
        if (gesture === 6) { //specifying which gestures can work as a "click"
          
          win.webContents.sendInputEvent(
            {
              type: 'mouseDown', x: xPos,
              y: yPos, button: 'left', clickCount: 1
            });
          win.webContents.sendInputEvent(
            {
              type: 'mouseUp', x: xPos,
              y: yPos, button: 'left', clickCount: 1
            });
        }
      }
      if (cursor) {
        win.webContents.sendInputEvent(
          {
            type: 'mouseMove',
            x: cursor.xPos,
            y: cursor.yPos
          }
        );
      }
    });
  });
}

app.whenReady().then(createWindow);