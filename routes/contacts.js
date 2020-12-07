const express = require("express");
const router = express.Router();
const { validationResult, check } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    Get all user contacts
// @access  Private
router.get("/", auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({
			date: -1,
		});
		res.json(contacts);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server error");
	}
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
