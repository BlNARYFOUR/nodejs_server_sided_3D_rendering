"use strict";

document.addEventListener("DOMContentLoaded", init);

let scene, camera, hlight, directionalLight, light, light2, renderer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 5000);
    camera.position.z = 15;
    camera.position.y = 5;

    hlight = new THREE.AmbientLight(0x404040, 1);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,1);
    directionalLight.position.set(1,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    //scene.add(light);

    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    //scene.add(light2);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;

    document.body.appendChild(renderer.domElement);

    loadWorldResources(() => {
        loadWorldScene(scene);

        render();
        startPointerLock(camera);
    }, (error) => {
        console.log('An error happened', error);
    });
}

function render() {
    //LOADED_MODELS["bridge_half"].rotation.y += 0.01;
    renderUpdateCamera();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

function renderUpdateCamera() {
    const SPEED = 0.3;
    camera.rotation.y %= (Math.PI * 2);

    let movX = MOV.x;
    let movZ = MOV.z;
    let movY = MOV.y;

    if(movZ === 0) {
        movX *= Math.sqrt(2);
    }

    if(movX === 0) {
        movZ *= Math.sqrt(2);
    }

    camera.position.z += Math.cos(ROT.y) * movZ * SPEED - Math.sin(ROT.y) * movX * SPEED;
    camera.position.x += Math.sin(ROT.y) * movZ * SPEED + Math.cos(ROT.y) * movX * SPEED;
    camera.position.y += Math.sqrt(2) * movY * SPEED;
}


