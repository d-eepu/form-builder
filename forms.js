const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

// Create a new form
router.post("/", async (req, res) => {
  try {
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Retrieve a form
router.get("/:id", async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ error: "Form not found" });
    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
