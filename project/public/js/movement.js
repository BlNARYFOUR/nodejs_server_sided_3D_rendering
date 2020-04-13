"use strict";

let CAM;

function startPointerLock(camera) {
    let canvas = document.querySelector('canvas');
    CAM = camera;

    canvas.requestPointerLock = canvas.requestPointerLock ||
        canvas.mozRequestPointerLock;

    document.exitPointerLock = document.exitPointerLock ||
        document.mozExitPointerLock;

    canvas.onclick = function() {
        canvas.requestPointerLock();
    };

// pointer lock event listeners

// Hook pointer lock state change events for different browsers
    document.addEventListener('pointerlockchange', (event) => {
        lockChangeAlert(event, canvas, camera);
    }, false);
    document.addEventListener('mozpointerlockchange', (event) => {
        lockChangeAlert(event, canvas, camera);
    }, false);
}

function lockChangeAlert(event, canvas, camera) {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
        // console.log('The pointer lock status is now locked');
        document.addEventListener("mousemove", updateCameraRotation);
        document.addEventListener("keydown", updateCameraMovement);
        document.addEventListener("keyup", endCameraMovement);
    } else {
        // console.log('The pointer lock status is now unlocked');
        //console.log("UNLOCK");
        document.removeEventListener("mousemove", updateCameraRotation);
        document.removeEventListener("keydown", updateCameraMovement);
        document.removeEventListener("keyup", endCameraMovement);
    }
}

const ROT = {
    x: 0,
    y: 0
};

const MOV = {
    x: 0,
    y: 0,
    z: 0
};

function updateCameraRotation(e) {
    const movementX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    const movementY = e.movementY || e.mozMovementY || e.webkitMovementY || 0;

    ROT.y += -movementX * Math.PI / 400;
    ROT.x += -movementY * Math.PI / 400;

    ROT.x = ROT.x < -Math.PI / 2 ? -Math.PI / 2 : (Math.PI / 2 < ROT.x ? Math.PI / 2 : ROT.x);

    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    euler.x = ROT.x;
    euler.y = ROT.y;
    CAM.quaternion.setFromEuler(euler);
}

function updateCameraMovement(e) {
    const KEY = e.code;
    //console.log("DOWN:", KEY);

    if(KEY === "KeyW") {
        MOV.z = -1;
    } else if(KEY === "KeyS") {
        MOV.z = 1;
    } else if(KEY === "KeyA") {
        MOV.x = -1;
    } else if(KEY === "KeyD") {
        MOV.x = 1;
    } else if(KEY === "ShiftLeft") {
        MOV.y = -1;
    } else if(KEY === "Space") {
        MOV.y = 1;
    }
}

function endCameraMovement(e) {
    const KEY = e.code;
    //console.log("UP:", KEY);

    if(KEY === "KeyW" || KEY === "KeyS") {
        MOV.z = 0;
    } else if(KEY === "KeyA" || KEY === "KeyD") {
        MOV.x = 0;
    } else if(KEY === "Space" || KEY === "ShiftLeft") {
        MOV.y = 0;
    }
}