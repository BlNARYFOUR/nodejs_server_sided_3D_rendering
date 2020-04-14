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
    door: {
        name: "door",
        src: "models/medieval_labyrinth_-_door"
    },
    door_hinge: {
        name: "door_hinge",
        src: "models/medieval_labyrinth_-_door_hinge"
    },
    door_large: {
        name: "door_large",
        src: "models/medieval_labyrinth_-_door_large"
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
    ext_wall_gap_left: {
        name: "ext_wall_gap_left",
        src: "models/medieval_labyrinth_-_ext_wall_gap_left"
    },
    ext_wall_gap_right: {
        name: "ext_wall_gap_right",
        src: "models/medieval_labyrinth_-_ext_wall_gap_right"
    },
    wall: {
        name: "wall",
        src: "models/medieval_labyrinth_-_wall"
    },
    wall_gap_left: {
        name: "wall_gap_left",
        src: "models/medieval_labyrinth_-_wall_gap_left"
    },
    wall_gap_right: {
        name: "wall_gap_right",
        src: "models/medieval_labyrinth_-_wall_gap_right"
    },
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


