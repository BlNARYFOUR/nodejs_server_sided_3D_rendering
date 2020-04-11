"use strict";

let ws = new WebSocket(ENV.wsConnection);

ws.addEventListener("open", onWSOpen);
ws.addEventListener("close", onWSClose);
ws.addEventListener("error", onWSError);
ws.addEventListener("message", onWSMessage);

function onWSOpen(e) {
    console.log("Connection opened!");

    if(ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify({
            address: "msega.actions.connect",
            data: {
                name: ENV.name
            }
        }));
    }
}

function onWSClose(e) {
    console.log("Connection closed!");
}

function onWSError(e) {
    console.log("Error occurred!");
}

function onWSMessage(e) {
    const data = JSON.parse(e.data);

    console.log("Message received:", data);
}