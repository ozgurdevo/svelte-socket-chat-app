import express from "express";
import http from "http";
import socketio from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.send({ value: "hello world" });
});

const server = http.createServer(app);
const io = new socketio.Server(server, {
  cors: { origin: "http://localhost:5000" },
});

io.on("connection", (socket: socketio.Socket) => {
  console.log("connected to server", socket.id, new Date());
});

server.listen(3000);
