import express from "express";
import http from "http";
import socketio from "socket.io";
import cors from "cors";
import { randomColor, tempDB } from "./helper";

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

  socket.on("sendmessage", (value) => {
    const user = tempDB.get(value.senderId);
    io.emit("receivemessage", {
      sender: user.nickname,
      color: user.color,
      message: value.message,
    }); // to all inc sender
    // socket.broadcast.emit // to all without sender
  });

  socket.on("join", ({ nickname }, cb) => {
    const user = { socketId: socket.id, nickname, color: randomColor() };
    tempDB.set(user.socketId, { nickname: user.nickname, color: user.color });
    io.emit("online", {
      socketId: user.socketId,
      nickname: user.nickname,
      color: user.color,
    });

    if (tempDB.get(socket.id)) {
      cb(true);
    } else cb(false);
  });

  socket.on("quit", ({ socketId }, cb) => {
    if (tempDB.get(socketId)) {
      io.emit("offline", { nickname: tempDB.get(socket.id).nickname });
      tempDB.delete(socket.id);
      cb(true);
    } else cb(false);
  });

  socket.on("disconnect", () => {
    if (tempDB.get(socket.id)) {
      io.emit("offline", { nickname: tempDB.get(socket.id).nickname });
      tempDB.delete(socket.id);
    }
  });
});

server.listen(3000);
