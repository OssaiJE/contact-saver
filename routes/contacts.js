const express = require("express");
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get("/", (req, res) => {
    res.send("Get all user contacts");
});

// @route   POST api/contacts
// @desc    Add new contatcs
// @acces   Private
router.post("/", (req, res) => {
    res.send("Add contacts");
});

// @route   PUT api/contacts/:id
// @desc    Update contact
// @acces   Private
router.put("/:id", (req, res) => {
    res.send("Update contact");
});

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @acces   Private
router.delete("/:id", (req, res) => {
    res.send("Delete contact");
});


module.exports = router;