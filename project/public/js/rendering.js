"use strict";

document.addEventListener("DOMContentLoaded", init);

let scene, camera, hlight, renderer, loader;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(10, window.innerWidth/window.innerHeight, 1, 5000);
    camera.position.z = -100;

    hlight = new THREE.AmbientLight(0x404040, 100);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    loader = new THREE.GLTFLoader();

    loader.load("models/medieval_labyrinth_-_ext_wall/scene.gltf", (gltf) => {
        //scene.add(gltf.scene);
        console.log("rendered");
        renderer.render(scene, camera);
    });
}