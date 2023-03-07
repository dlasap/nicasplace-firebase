const express = require("express");
const db = require("./firebase");
require("dotenv").config();

const app = express();
const { PORT = "3019", HOST = "localhost" } = process.env;
const roomRoutes = require("./routes/room");

app.use(
  //   "/api",
  express.json(),
  roomRoutes
);

app.get("/", async (_, res) => {
  const roomsRef = await db.collection("rooms").doc("room");
  const rooms = await roomsRef.get();
  if (!data.length) return res.sendStatus(400);
  res
    .send({
      message: "Success",
      data: rooms.data(),
    })
    .status(205);
});

app.get("*", (_, res) => {
  console.log("a client tried to access a non-existing endpoint.");
  res.send("404 | Not found!");
});

app.listen(Number(PORT), () => console.log(`Server running @ ${HOST}:${PORT}`));
