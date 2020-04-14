"use strict";

const WORLD = [
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(0, 0, 0),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.wall,
        position: new THREE.Vector3(0, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(-6, 0, 0),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.wall,
        position: new THREE.Vector3(-6, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_corner_out,
        position: new THREE.Vector3(6, 0, 0),
        rotation: new THREE.Euler(0, Math.PI, 0, "XYZ")
    },
    {
        model: MODELS.wall,
        position: new THREE.Vector3(6, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.corner_in,
        position: new THREE.Vector3(12, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_corner_in,
        position: new THREE.Vector3(6, 0, 6),
        rotation: new THREE.Euler(0, Math.PI, 0, "XYZ")
    },
    {
        model: MODELS.corner_out,
        position: new THREE.Vector3(12, 0, 0),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(12, 0, 6),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(18, 0, 6),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(24, 0, 6),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, 6),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_corner_in,
        position: new THREE.Vector3(36, 0, 6),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(36, 0, 0),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(36, 0, -6),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(36, 0, -12),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_corner_in,
        position: new THREE.Vector3(36, 0, -18),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_corner_out,
        position: new THREE.Vector3(30, 0, -18),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, -24),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, -30),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, -36),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, -42),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, -48),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, -54),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(30, 0, -60),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_corner_in,
        position: new THREE.Vector3(30, 0, -66),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(24, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(18, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(12, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(6, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(0, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(-6, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(-12, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_corner_in,
        position: new THREE.Vector3(-18, 0, -66),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(-12, 0, 0),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.wall,
        position: new THREE.Vector3(-12, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall,
        position: new THREE.Vector3(-18, 0, 0),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.wall,
        position: new THREE.Vector3(-18, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_gap_right,
        position: new THREE.Vector3(-24, 0, 0),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.wall_gap_left,
        position: new THREE.Vector3(-24, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.ext_wall_gap_left,
        position: new THREE.Vector3(-30, 0, 0),
        rotation: new THREE.Euler(0, -Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.wall_gap_right,
        position: new THREE.Vector3(-30, 0, -6),
        rotation: new THREE.Euler(0, Math.PI / 2, 0, "XYZ")
    },
    {
        model: MODELS.door_large,
        position: new THREE.Vector3(-28.75, 2.75, -3.375),
        rotation: new THREE.Euler(0, -Math.PI / 8, 0, "XYZ")
    },
    {
        model: MODELS.door_hinge,
        position: new THREE.Vector3(-28.8, 1.65, -3.375),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
    {
        model: MODELS.door_hinge,
        position: new THREE.Vector3(-28.8, 3.65, -3.375),
        rotation: new THREE.Euler(0, 0, 0, "XYZ")
    },
];

const WORLD_LOADS = [];

function loadWorldScene(scene) {
    WORLD.forEach((prop, index) => {
        let model = LOADED_MODELS[index];
        model.position.x = prop.position.x;
        model.position.y = prop.position.y;
        model.position.z = prop.position.z;
        model.setRotationFromEuler(prop.rotation);
        WORLD_LOADS.push(model);
        scene.add(model);

        //console.log(prop.model + ":", model);
    });
}

const LOADER = new THREE.GLTFLoader();

function loadWorldResources(callbackOnFinish, callBackOnError) {
    WORLD.forEach((prop, index) => {
        //console.log(prop);
        LOADER.load(prop.model.src + "/scene.gltf", (gltf) => {
            LOADED_MODELS[index] = gltf.scene;
            if(Object.keys(WORLD).length === Object.keys(LOADED_MODELS).length) {
                //console.log("gets here");
                callbackOnFinish();
            }
        }, (xhr) => {
            console.log(( xhr.loaded / xhr.total * 100 ) + '% loaded');
        }, (error) => {
            callBackOnError(error);
        });
    });
}
