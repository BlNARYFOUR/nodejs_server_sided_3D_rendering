const CONF = require("./utils/config");
const HELPER = require("./utils/helper");
const WebSocketServer = require("websocket").server;
const EXPRESS = require("express");

const APP = new EXPRESS();

const SERVER = APP.listen(CONF.HTTP_PORT, () => {
    console.log((new Date()) + " Server is listening on port " + CONF.HTTP_PORT);
});

const SOCKET_SERVER = new WebSocketServer({
    httpServer: SERVER
});

APP.use(EXPRESS.static(HELPER.getParentFolder(__dirname) + "/public"));

let nextID = 0;
const CLIENTS = [];

SOCKET_SERVER.on("request", (request) => {
    console.log((new Date()) + " Connection from origin " + request.origin + ".");

    const CONNECTION = request.accept(null, request.origin);
    const INDEX = nextID++;
    CLIENTS[INDEX] = CONNECTION;

    console.log((new Date()) + " Connection " + INDEX + " accepted.");

    CONNECTION.on("message", (message) => {
        if (message.type === "utf8") {
            const bufMessage = JSON.parse(message.utf8Data);
            const ADDRESS = bufMessage.address;
            // const DATA = bufMessage.data;

            if(ADDRESS === "actions.connect") {
                CLIENTS.forEach((client) => {
                    client.sendUTF(JSON.stringify({
                        address: "action.connection_notice",
                        data: {
                            connections: Object.keys(CLIENTS),
                            connected: INDEX
                        }
                    }));
                });
            }
        }
    });

    CONNECTION.on("close", () => {
        console.log((new Date()) + " Peer " + INDEX + " disconnected.");
        delete CLIENTS[INDEX];
    });
});
