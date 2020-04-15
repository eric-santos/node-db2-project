const express = require("express");

const db = require("../data/db-config.js");

const router = express.Router();

router.get("/", (req, res) => {
  db("cars")
    .then((cars) => {
      res.status(200).json(cars);
    })
    .catch((err) => {
      res.status(500).json({
        message: "error loading data",
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.select()
    .from("cars")
    .where({ id })
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res.status(500).json({ success: false, err });
    });
});

router.post("/", (req, res) => {
  db("cars")
    .insert(req.body)
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to post new account", err });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db("cars")
    .where({ id })
    .update(changes)
    .then((car) => {
      if (car) {
        res.json({ updated: car });
      } else {
        res.status(404).json({ message: "invalid ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "error updating", err });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("cars")
    .where({ id })
    .del()
    .then((car) => {
      res.status(201).json(car);
    })
    .catch((err) => {
      res.status(500).json({ message: "error deleting account", err });
    });
});

module.exports = router;
