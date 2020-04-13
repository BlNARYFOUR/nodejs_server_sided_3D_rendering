"use strict";

const MODELS = {
    bridge_half: {
        name: "bridge_half",
        src: "models/medieval_labyrinth_-_bridge_half"
    },
    bridge_mid: {
        name: "bridge_mid",
        src: "models/medieval_labyrinth_-_bridge_mid"
    },
    corner_in: {
        name: "corner_in",
        src: "models/medieval_labyrinth_-_corner_in"
    },
    corner_out: {
        name: "corner_out",
        src: "models/medieval_labyrinth_-_corner_out"
    },
    ext_wall: {
        name: "ext_wall",
        src: "models/medieval_labyrinth_-_ext_wall"
    },
    ext_wall_corner_in: {
        name: "ext_wall_corner_in",
        src: "models/medieval_labyrinth_-_ext_wall_corner_in"
    },
    ext_wall_corner_out: {
        name: "ext_wall_corner_out",
        src: "models/medieval_labyrinth_-_ext_wall_corner_out"
    },
    wall: {
        name: "wall",
        src: "models/medieval_labyrinth_-_wall"
    }
};

const LOADED_MODELS = [];

function getMeshFromModel(model) {
    if(0 < model.children.length) {
        return getMeshFromModel(model.children[0]);
    }

    return model;
}

function getDimensionFromModel(model) {
    return getMeshFromModel(model).geometry.boundingBox.getSize(new THREE.Vector3());
}


