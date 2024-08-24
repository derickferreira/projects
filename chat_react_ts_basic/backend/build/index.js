import { WebSocketServer } from "ws";
import "dotenv/config";
const port = process.env.PORT ? +process.env.PORT : 8080;
const wss = new WebSocketServer({ port });
wss.on("connection", (ws) => {
    ws.on("close", (err) => {
        console.log(`Connection closed: ${err}`);
    });
    ws.on("message", (data) => {
        console.log(data.toString());
        wss.clients.forEach((client) => {
            client.send(data.toString());
        });
    });
    console.log("New connection");
});
//# sourceMappingURL=index.js.map