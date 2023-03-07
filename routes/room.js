const express = require("express");
// import RoomController from "../controller/rooms";
const route = express.Router();
const { getByDoc, updateByDoc, addDoc, getAll, deleteByDoc } = require("../model/room");

route.get("/getAll/:collection", async (req, res) => {
  const { collection } = req.params;
  const result = await getAll(collection);

  if (!result || !collection)
    return res.status(400).send({
      message: "Failed. Please check your query.",
    });

  res
    .send({
      message: "Success",
      data: result,
    })
    .status(205);
});
route.get("/getDoc/:collection/:doc", async (req, res) => {
  const { collection, doc } = req.params;
  const result = await getByDoc(collection, doc);

  if (!result || !collection || !doc)
    return res.status(400).send({
      message: "Failed. Please check your query.",
    });

  res
    .send({
      message: "Success",
      data: result,
    })
    .status(205);
});

route.post("/add/:collection/", async (req, res) => {
  const { collection } = req.params;
  const data = {
    ...req.body,
    updated_date: new Date().getTime(),
    created_date: new Date().getTime(),
  };
  const result = await addDoc(collection, data);

  if (!result || !collection)
    return res.status(400).send({
      message: "Failed. Please check your request.",
    });

  res
    .send({
      message: "Success",
      data: result,
    })
    .status(205);
});

route.put("/update/:collection/:doc", async (req, res) => {
  const { collection, doc } = req.params;
  const data = {
    ...req.body,
    updated_date: new Date().getTime(),
  };
  const result = await updateByDoc(collection, doc, data);

  if (!result || !collection || !doc)
    return res.status(400).send({
      message: "Failed. Please check your query.",
    });

  res
    .send({
      message: "Success",
      data: result,
    })
    .status(205);
});

route.delete("/delete/:collection/:doc", async (req, res) => {
  const { collection, doc } = req.params;

  const result = await deleteByDoc(collection, doc);

  if (!result || !collection || !doc)
    return res.status(400).send({
      message: "Failed. Please check your query.",
    });

  res
    .send({
      message: "Success",
      data: result,
    })
    .status(205);
});
module.exports = route;
